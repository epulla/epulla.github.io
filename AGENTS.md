# AGENTS.md

## Project

Astro v6 static site (personal portfolio + hidden `/mylove/` section). Deploys to GitHub Pages on push to `main`.

## Commands

```bash
pnpm install          # must use pnpm (lockfile: pnpm-lock.yaml)
pnpm run dev          # dev server at localhost:4321
pnpm run build        # runs astro check (TS) then astro build -> dist/
pnpm run preview      # preview built site
```

There are no tests, linter, or formatter configured. `astro check` is the only verification step.

## Architecture

- **Feature-based layout**: `src/features/{card,icons,layout,theme-toggle,timeline,ui}/components/` with barrel `index.ts` exports. Not the default Astro structure.
- **Path alias**: `@/*` -> `src/*` (tsconfig.json). All internal imports use this.
- Icons live in `src/features/icons/components/<Name>Icon.astro` as inline SVG with `size` prop (default 24), sourced from Simple Icons; monochrome brand logos use `fill="currentColor"` for dark mode; export each from folder's `index.ts` in alphabetical order.
- Projects are `LinkCard`s in the `#projects` section of `src/pages/index.astro`, newest first; "Favorite Techs" and "Tools" sections use `IconCard` grids.
- **Only React integration is active** in `astro.config.mjs`. Svelte deps exist in `package.json` but are unused.
- **Theme toggle** (`ThemeToggle.tsx`) is the only React client component (`client:only="react"`). Everything else is Astro components.

## Styling

- Tailwind CSS v4 + DaisyUI v5. Active config is in `src/styles/global.css` (v4 `@plugin` syntax).
- `tailwind.config.mjs` at root is a legacy v3 leftover -- ignore it.
- Two DaisyUI themes: "acid" (light, default) and "dracula" (dark). Dark mode via `data-theme="dracula"` on `<html>`.

## Key quirks

- The `/mylove/` pages load CDN scripts at runtime (p5.js, GSAP, Swiper, tsparticles, canvas-confetti, tippy.js) instead of bundling them. Don't try to import these as npm packages.
- `public/scripts/` contains standalone p5.js sketches not linked from the main site.
- Node.js 22 is used in CI.
- `.github/dependabot.yml` opens weekly npm PRs (`@types/*` grouped, prefix `chore(deps)`) and monthly GitHub Actions PRs (prefix `chore(ci)`).

## Git conventions

- Commit format: `type: description` (e.g. `feat:`, `fix:`, `chore:`).
- Work on a feature branch and open a PR to `main`; merging to `main` triggers deploy via `.github/workflows/deploy.yml`.

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

- **Feature-based layout**: `src/features/{card,icons,layout,mylove,theme-toggle,timeline,ui}/components/` with barrel `index.ts` exports. Not the default Astro structure.
- **Path alias**: `@/*` -> `src/*` (tsconfig.json). All internal imports use this.
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

## Media assets

Conventions for audio/image files served from `public/`:

- **Audio**: `.webm` (Opus codec) under `public/audio/<feature>/`. Convert with `ffmpeg -i input.mp3 -c:a libopus -b:a 96k -vn output.webm`.
- **Song covers**: `.webp` square under `public/images/mylove/song-covers/`. Convert with `cwebp -q 80 input.jpg -o output.webp`. If the source has letterboxing or isn't square, center-crop first via `cwebp -crop <x> <y> <w> <h>` (e.g. for a 1280×720 with horizontal bars, `-crop 280 0 720 720`).
- **Photos used in timeline events**: `.webp` under `public/images/mylove/`.
- `ffmpeg` does not have the WebP encoder enabled in the Homebrew build; use `cwebp` (also from Homebrew, package `webp`) for image conversions.

## Git conventions

- Commit format: `type: description` (e.g. `feat:`, `fix:`, `chore:`).
- All work goes to `main`; pushes trigger deploy via `.github/workflows/deploy.yml`.


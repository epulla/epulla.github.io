# epulla.github.io

Personal portfolio of Erick Pulla, live at https://epulla.github.io.

## Stack

- Astro 6, built as a static site
- React, used only for the theme toggle island
- Tailwind CSS v4 and DaisyUI v5
- DaisyUI themes: `acid` light and `dracula` dark
- TypeScript

## Requirements

- Node.js 22
- pnpm

## Commands

Run commands from project root:

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start dev server at `localhost:4321` |
| `pnpm run build` | Run `astro check`, then build to `dist/` |
| `pnpm run preview` | Preview production build locally |

## Project Structure

```text
src/
├── features/{card,icons,layout,theme-toggle,timeline,ui}/components/
│   └── index.ts
├── layouts/
├── pages/
│   └── index.astro          # Portfolio page
└── styles/
    └── global.css           # Tailwind and DaisyUI configuration
public/
├── images/
├── cv/
└── scripts/
```

The `@/*` path alias points to `src/*`.

## Adding A Project

Add a `LinkCard` in the `#projects` section of `src/pages/index.astro`.

Add new technology icons to `src/features/icons/components` as
`<Name>Icon.astro`. Use an inline SVG, a `size` prop, and a default size of
`24`. Export each icon from `src/features/icons/components/index.ts`.

## Deployment

GitHub Pages deploys through `.github/workflows/deploy.yml` on every push to
`main`.

Dependabot checks npm dependencies weekly and GitHub Actions monthly.

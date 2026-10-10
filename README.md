# AXLT Studio

A Next.js project with TypeScript, App Router, Tailwind CSS, ESLint, and Turbopack.

## Getting started

Use Node.js 22.13 or newer (Node.js 22 LTS is recommended) and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server automatically reloads as you edit files.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build after running `npm run build` |
| `npm run lint` | Check ESLint rules |
| `npm run lint:fix` | Fix automatically correctable lint issues |
| `npm run typecheck` | Generate route types and check TypeScript |

## Project structure

- `src/app/page.tsx`: Studio introduction, services, and selected work.
- `src/app/page.module.css`: Shared responsive page layouts, galleries, and footer.
- `src/app/layout.tsx`: Root layout and site metadata.
- `src/app/globals.css`: Shared color palette, typography, and layout variables.
- `public/`: Static assets, available directly from the site root.
- `next.config.ts`: Next.js and Tailwind's Turbopack configuration.

Use the `@/` import alias for files inside `src/`, such as `@/components/button`.

## Color palette

The shared palette lives in `src/app/globals.css` and is loaded by the root layout on every route. `--color-pink-500` (`#EF4B7D`) matches the pink in the AXLT logos. Change the palette there to update the entire website; use semantic variables in component styles instead of hardcoded colors.

| Token | Use |
| --- | --- |
| `--brand` / `--on-brand` | Logo pink backgrounds with dark, readable text |
| `--accent` / `--accent-hover` | Deeper pink for links, labels, and interaction states |
| `--on-accent` | White text on deeper pink backgrounds |
| `--background` / `--paper` | White page and section backgrounds |
| `--surface-subtle` / `--surface-tint` | Pale blush image canvases and stronger pink tinted surfaces |
| `--foreground` / `--muted` | Headings and body text |
| `--line` / `--focus` | Dividers and keyboard focus outlines |
| `--surface-inverse` / `--on-inverse` | Dark sections with light text |
| `--accent-inverse` / `--muted-inverse` / `--line-inverse` | Pink accents, supporting text, and dividers on dark sections |

The exact logo pink uses dark text; small pink text uses `--accent` for stronger contrast. Inverse tokens remain available for future dark sections. The minimal layout uses `--site-width`, `--page-gutter`, and `--section-space` to keep content alignment and responsive spacing consistent across pages.

The site uses locally hosted Hanken Grotesk for headings and body text, so builds do not need to download Google Fonts. No environment variables are required to run it. Add any future local environment variables to `.env.local`, which is ignored by Git.

When deploying, set `SITE_URL` to the public site URL so social previews use your domain. It defaults to `http://localhost:3000` during local development.

## Dependencies

`package-lock.json` records the installed versions. Use `npm ci` for reproducible installs.

The initial install reports five high-severity audit entries in ESLint's development dependency chain, all caused by the same [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), which has no patched release as of October 6, 2026. Keep dependencies updated and rerun `npm audit` as fixes become available.

## Next.js documentation

- [Next.js documentation](https://nextjs.org/docs)
- [App Router project structure](https://nextjs.org/docs/app/getting-started/project-structure)

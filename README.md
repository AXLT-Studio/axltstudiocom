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

- `src/app/page.tsx`: AXLT Studio coming soon page.
- `src/app/page.module.css`: Responsive coming soon layout and entrance animation.
- `src/app/layout.tsx`: Root layout and site metadata.
- `src/app/globals.css`: Tailwind import and global styles.
- `public/`: Static assets, available directly from the site root.
- `next.config.ts`: Next.js and Tailwind's Turbopack configuration.

Use the `@/` import alias for files inside `src/`, such as `@/components/button`.

The page uses locally hosted Geist Sans from the `geist` package, so builds do not need to download Google Fonts. No environment variables are required to run it. Add any future local environment variables to `.env.local`, which is ignored by Git.

When deploying, set `SITE_URL` to the public site URL so social previews use your domain. It defaults to `http://localhost:3000` during local development.

## Dependencies

`package-lock.json` records the installed versions. Use `npm ci` for reproducible installs.

The initial install reports five high-severity audit entries in ESLint's development dependency chain, all caused by the same [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), which has no patched release as of October 6, 2026. Keep dependencies updated and rerun `npm audit` as fixes become available.

## Next.js documentation

- [Next.js documentation](https://nextjs.org/docs)
- [App Router project structure](https://nextjs.org/docs/app/getting-started/project-structure)

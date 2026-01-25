# Repository Guidelines

## Project Structure & Module Organization
This Next.js 16 App Router project keeps routed pages inside `app/`, with marketing subroutes (e.g., `app/pressekit`) beside shared layout artifacts. UI building blocks live under `components/sections` (composed blocks) and `components/ui` (primitives), while lightweight helpers stay in `lib/`. Static assets, SEO files (sitemap.xml, robots.txt, llms.txt, ai.txt), and favicons sit in `public/`, and playbooks plus briefs live in `docs/` for reference.

## Build, Test, and Development Commands
Use `npm run dev` for the local server, which also serves API routes from `app/api`. `npm run build` compiles the production bundle, and `npm run start` runs that output for smoke-tests. `npm run lint` executes Next.js' ESLint profile. `npm run test` runs Vitest once, and `npm run test:watch` keeps it hot while iterating.

## Coding Style & Naming Conventions
Favor TypeScript throughout; create files as `.tsx` when JSX is involved. Treat Server Components as the default in `app/` and add `'use client'` only when hooks or browser APIs are needed. Components use PascalCase, helpers use camelCase, routes and assets use kebab-case. Stick to two-space indentation, single quotes in TS/JS, and rely on `next lint --fix` instead of manual formatting. Tailwind v4 utility classes should cover layout; reserve `app/globals.css` for rare overrides.

## SEO & Metadata Guidelines
All content is German-only (`lang="de"`, `locale: "de_DE"`). When adding new pages:
1. Create `app/[page]/layout.tsx` with Metadata export (title, description, canonical, openGraph)
2. Add the URL to `public/sitemap.xml` with appropriate priority
3. For key service pages, update `public/llms.txt` to inform AI crawlers
4. Never index transactional pages (newsletter confirmations, thank-you pages) - use `robots: { index: false }`

Root layout includes ProfessionalService JSON-LD schema for local business SEO. FAQ pages should include FAQPage schema.

## Testing Guidelines
Tests live beside the code they cover using the `*.test.tsx` suffix (see `app/page.test.tsx`). Vitest is configured with `jsdom` plus Testing Library helpers from `vitest.setup.ts`, so prefer queries that mirror user intent. Mock network calls through the `@` alias rather than relative paths. Add coverage whenever changing `lib/` logic, API handlers, or stateful client modules.

## Commit & Pull Request Guidelines
Follow the conventional commit verbs already used (`feat:`, `fix:`, `chore:`) and keep subject lines under 72 characters. Bodies should mention linked issues plus rollout or migration notes. Pull requests must include a concise summary, before/after screenshots for UI work, and proof that `npm run lint` and `npm run test` pass. Convert unfinished efforts into draft PRs until checks are green.

## Security & Configuration Tips
Secrets for `nodemailer` or analytics live in `.env.local`; never expose them in commits or logs. Deployment handles `www` to apex redirects, so keep `next.config.ts` focused on images and TypeScript settings. Validate payloads inside `app/api` routes before sending to external services, and scrub any user-provided strings before rendering.

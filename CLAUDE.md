# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI SEO marketing website for German market (KI-Sichtbarkeit). Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and GSAP for animations. German-only (`lang="de"`), targeting Hamburg businesses. Deployed on Vercel.

## Commands

```bash
npm run dev          # Local dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check (uses next lint)
npm run test         # Run Vitest once
npm run test:watch   # Vitest in watch mode
npx vitest run path/to/file.test.tsx  # Run a single test file
```

Note: Dev/build scripts use `NODE_OPTIONS='--max-old-space-size=8192'` for GSAP animations.

## Architecture

**Directory Structure:**
- `app/` - Next.js App Router pages and API routes
- `app/api/contact/` - Contact form handler (nodemailer via Brevo SMTP)
- `app/api/newsletter/` - Brevo double opt-in newsletter subscription
- `app/api/booking/` - Booking/intro-call request handler (same Brevo SMTP pattern as contact). Powers `/termin`; success redirects to `/termin/danke` (noindex, excluded from sitemap)
- `components/sections/` - Major page sections (Hero, Navbar, FAQ, etc.)
- `components/ui/` - Reusable primitives (Button, FadeIn, Icons, Tag)
- `components/GoogleTag.tsx` - Google Analytics (gtag.js) with cookie consent gate
- `components/ui/CookieConsent.tsx` - Cookie banner component
- `lib/` - Shared constants (image asset paths) and helpers
- `public/` - Static assets, sitemap.xml, robots.txt, llms.txt, ai.txt

**Key Patterns:**
- Server Components by default; add `'use client'` only when hooks/browser APIs needed
- Homepage sections are client components due to GSAP animations
- `FadeIn` wrapper for scroll-triggered entrance animations
- Path alias: `@/*` maps to project root (e.g., `@/components/ui/Button`)
- No middleware — domain redirects (www → apex, http → https) handled at Vercel dashboard level
- Images are unoptimized (`images.unoptimized: true` in next.config.ts) — use pre-optimized assets in `public/`

**Content Clusters:**
- `app/wissen/` - Knowledge hub (pillar pages, case studies, topic articles). Each article has its own `layout.tsx` for metadata and `page.tsx` for content. The `/wissen` index is driven by a single registry, `app/wissen/articles.ts` (title, description, tag, `topic`, `date`, optional `featured`). The index sorts automatically (featured first, then newest by `date` descending) and renders a topic filter via `WissenList.tsx`. `articles.guard.test.ts` fails the build if any article folder is missing from the registry, so the listing can never silently drift.
- `app/hamburg/` - Local SEO cluster (city-specific service pages like `ai-seo-agentur`, `chatgpt-optimierung`, `perplexity-optimierung`). Sub-pages exist without individual `layout.tsx` files — they inherit from `app/hamburg/layout.tsx`

**Security Headers (next.config.ts):**
- X-Content-Type-Options, X-Frame-Options (DENY), Referrer-Policy, Permissions-Policy applied to all routes

**Design System (`app/globals.css` @theme, single source of truth):**

This is Tailwind 4. There is no `tailwind.config.ts` and there must not be one: it was a
leftover v3 file with no `@config` directive, so nothing in it ever compiled, and
`brand-orange` / `brand-olive` / `brand-slate` / `brand-pink` rendered nothing for
months while 7 files used them. It has been deleted. Add tokens to the `@theme` block
in `app/globals.css` and nowhere else, then verify with
`grep -E '<hex>' .next/static/chunks/*.css` after a build.

- Colour, core: `brand-bg` #FBF9F7, `brand-text` #111111, `brand-accent` #4FAF8C,
  `brand-dark` #1C1917
- Colour, ink hierarchy: `brand-muted` #57524D (body copy), `brand-subtle` #6B645D (meta)
- Colour, surfaces and rules: `brand-surface` #F7F5F2, `brand-night` #121212,
  `brand-hairline` #F1EEEA, `brand-line` #E2DCD5, `brand-edge` #C9C2BA
- Colour, accents: `brand-accent-deep` #2D8A65 (filled buttons),
  `brand-accent-ink` #267555 (accent as text). Plain `brand-accent` is 2,55:1 on
  `brand-bg`, so it must never carry small text.
- Colour, restored: `brand-orange` #B8431F, `brand-orange-vivid` #FF5E3A (decoration
  only), `brand-slate` #4A5568, `brand-olive` #9CA38A. `brand-pink` was removed, nothing
  used it.
- Type scale (semantic, pairs size + line-height + tracking): `text-display`,
  `text-title`, `text-heading`, `text-subheading`, `text-lead`, `text-body`,
  `text-meta`, `text-micro`. These sit alongside the stock `text-xs..text-9xl`, which
  ~3.400 existing classes still use. Never redefine the stock scale.
- Spacing rhythm: `flow` 24px, `stack` 32px, `block` 48px, `rule` 64px, `section` 96px,
  `band` 128px, `navbar` 88px (works as `p-flow`, `mt-rule`, `scroll-mt-navbar`, ...)
- Measure: `max-w-measure` 752px (reading column), `max-w-narrow` 544px,
  `max-w-shell` 900px (drop-in for the 542 hand-written `max-w-[900px]`),
  `max-w-article` 1088px, `max-w-toc` 224px. Do **not** name a container token
  `prose`: `max-w-prose` is a hardcoded Tailwind built-in (65ch) that ignores the
  `--container-*` namespace.
- Font: General Sans (loaded from Fontshare CDN)
- Radius: `section` (1.5rem), `card` (1rem). Depth: `shadow-card`, `shadow-lift`.
  Easing: `ease-reveal`.
- `.reveal` (see `components/ui/FadeIn.tsx`) only hides its content inside
  `@media (scripting: enabled) and (prefers-reduced-motion: no-preference)`, so a
  visitor or crawler without JS gets the text instead of a blank page.

## SEO Structure

**Metadata:**
- Root layout (`app/layout.tsx`) has global metadata, ProfessionalService JSON-LD schema, geo meta tags
- Page-specific metadata in `app/[page]/layout.tsx` files
- All content is German (`lang="de"`, `locale: "de_DE"`)
- Hreflang configured as `de` with `x-default`
- Metadata base URL: `https://aiseo.hamburg`

**Structured Data (JSON-LD):**
- ProfessionalService schema on all pages (root layout)
- FAQPage schema on `/faq`

**AI/LLM SEO:**
- `public/robots.txt` - Allows all AI bots (GPTBot, PerplexityBot, ClaudeBot, etc.)
- `public/llms.txt` - LLM training data information
- `public/ai.txt` - AI crawler instructions
- `app/sitemap.ts` - Sitemap auto-generated at build time by scanning `app/` for `page.tsx` files. New routes appear automatically; no manual sitemap edit needed.

**When adding new pages:**
1. Create `layout.tsx` with page-specific metadata (title, description, canonical)
2. The sitemap picks up the route automatically (`app/sitemap.ts`)
3. Update `public/llms.txt` if it's a key service page

**When adding a `/wissen` article specifically:**
1. Create `app/wissen/<slug>/layout.tsx` (metadata) and `page.tsx` (content)
2. Add a matching entry to `app/wissen/articles.ts` (title, description, href, tag, `topic`, `readTime`, `date`). Sorting and the topic filter are handled automatically.
3. `npm run test` runs `articles.guard.test.ts`, which fails if a folder has no registry entry (or vice versa). Run it before committing.

## Search Performance Findings (Search Console + Bing AI, through 2026-06-09)

Diagnosis from GSC and Bing Webmaster AI exports. Keep this in mind before "fixing CTR" with more title rewrites:

- **The problem is rankings + indexing, not meta.** Impressions are climbing (~120/day) but clicks are ~0 because most queries sit at **position 40-90**, where CTR is ~0 regardless of the snippet. Meta only helps the few pages near page 1.
- **Only the homepage is consistently near page 1** (pos ~11, ~1,000 impr/mo). A handful of articles sit at pos 14-30 with real impressions and zero clicks (`ki-sichtbarkeit-dienstleister`, `sichtbarkeit-in-perplexity`, `seo-agentur-vs-ai-seo`) - those are the only meta-CTR wins worth chasing.
- **The best AI-cited pages are "Discovered - currently not indexed" by Google** (~23 URLs), including the Bing citation champion `wissen/ki-sichtbarkeit-messen` (400+ Bing AI citations). Google is not indexing the assets AI loves. Internal linking is already strong (messen has 18 inbound internal links), so the bottleneck is **site authority + crawl priority + time**, addressed off-page (`OFF-PAGE-AUTHORITY-PLAYBOOK.md`, `GOOGLE-BUSINESS-PROFILE-SETUP.md` - both kept local, repo is public). IndexNow (`submit-indexnow.sh`) notifies Bing only; it does not force Google indexing.
- **Bing/Copilot is where citations actually happen.** Do not disturb `ki-sichtbarkeit-messen`'s recipe (defined jargon + named tools + benchmark numbers) - it is the proven citation moat.

## Testing

Tests use Vitest + Testing Library with jsdom. Test files use `*.test.tsx` suffix and live beside the code they test. Mock setup in `vitest.setup.ts` handles IntersectionObserver, matchMedia, and ResizeObserver.

## Code Style

- TypeScript throughout, `.tsx` for JSX files
- Two-space indentation, single quotes
- PascalCase components, camelCase helpers, kebab-case routes
- Use `next lint --fix` for formatting
- Tailwind utilities for layout; `app/globals.css` for rare overrides

## Writing Style (content pages and copy)

- **No em dashes (`—`).** They are a strong AI tell and read as machine-generated. Use periods, commas, colons, or parentheses instead. This applies to all body copy, headings, JSON-LD descriptions, meta descriptions, and FAQ answers.
- **No raw API endpoints, file paths, or internal implementation details in user-facing copy.** Describe what was done in plain language. `/v3/keywords_data/google_ads/search_volume/live` belongs in code or in research notes, not in published articles.
- **Run the `humanizer` skill** on any non-trivial article before publishing. Strip the patterns from Wikipedia's "Signs of AI writing" guide: copula avoidance (`stands as`, `serves as`), superficial `-ing` constructions, vague attributions (`industry observers`), rule-of-three padding, false ranges, promotional adjectives (`groundbreaking`, `vibrant`, `seamless`), and signposting (`let's dive in`, `here's what you need to know`).
- **No emojis** in body copy unless the user explicitly asks for them.
- **Use straight quotes** (`"..."`), not curly quotes (`"..."`), in source. German typographic quotes (`„..."`) are correct for German content.

## Environment Variables

Required in `.env.local` (see `.env.example`):
- `BREVO_API_KEY` - Brevo API key
- `BREVO_DOI_TEMPLATE_ID` - Double opt-in email template ID
- `BREVO_NEWSLETTER_LIST_ID` - Target list after DOI confirmation
- `BREVO_DOI_REDIRECT_URL` - Post-confirmation redirect URL
- `BREVO_SMTP_SERVER`, `BREVO_SMTP_PORT`, `BREVO_ANMELDUNG`, `BREVO_SMTP_KEY` - SMTP relay config
- `CONTACT_RECIPIENT_EMAIL`, `CONTACT_SENDER_EMAIL` - Contact form addresses

## Commits

Use conventional commits: `feat:`, `fix:`, `chore:` with subject lines under 72 characters.

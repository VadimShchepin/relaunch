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
- `app/wissen/` - Knowledge hub (pillar pages, case studies, topic articles). Each article has its own `layout.tsx` for metadata and `page.tsx` for content
- `app/hamburg/` - Local SEO cluster (city-specific service pages like `ai-seo-agentur`, `chatgpt-optimierung`, `perplexity-optimierung`). Sub-pages exist without individual `layout.tsx` files — they inherit from `app/hamburg/layout.tsx`

**Security Headers (next.config.ts):**
- X-Content-Type-Options, X-Frame-Options (DENY), Referrer-Policy, Permissions-Policy applied to all routes

**Design System (tailwind.config.ts):**
- `brand-bg`: #FBF9F7 (warm off-white)
- `brand-text`: #111111 (near black)
- `brand-accent`: #4FAF8C (green, used for glow effects)
- `brand-dark`: #1C1917, `brand-olive`: #9CA38A, `brand-slate`: #7D8C9E, `brand-orange`: #FF5E3A, `brand-pink`: #E6A5A5
- Font: General Sans (loaded from Fontshare CDN)
- Custom border-radius tokens: `section` (1.5rem), `card` (1rem)

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
- `public/sitemap.xml` - Static sitemap

**When adding new pages:**
1. Create `layout.tsx` with page-specific metadata (title, description, canonical)
2. Add to `public/sitemap.xml`
3. Update `public/llms.txt` if it's a key service page

## Testing

Tests use Vitest + Testing Library with jsdom. Test files use `*.test.tsx` suffix and live beside the code they test. Mock setup in `vitest.setup.ts` handles IntersectionObserver, matchMedia, and ResizeObserver.

## Code Style

- TypeScript throughout, `.tsx` for JSX files
- Two-space indentation, single quotes
- PascalCase components, camelCase helpers, kebab-case routes
- Use `next lint --fix` for formatting
- Tailwind utilities for layout; `app/globals.css` for rare overrides

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

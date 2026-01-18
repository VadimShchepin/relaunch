# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

AI SEO landing page for aiseo.hamburg - a German-market localized AI visibility optimization service. The site is a static export targeting German-speaking businesses seeking visibility in ChatGPT, Perplexity, and Google AI.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (static export to /out)
npm run lint     # Run Next.js linting
```

## Tech Stack

- **Next.js 16** with App Router (static export mode)
- **React 19**
- **Tailwind CSS 4** with PostCSS
- **GSAP** for animations
- **Iconify** for icons (primarily simple-icons for AI platform logos)

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages (single-page site)
- `components/sections/` - Full-width landing page sections (Hero, Proof, FAQ, etc.)
- `components/ui/` - Reusable UI primitives (Button, FadeIn, PlatformIconLoop)
- `lib/constants.ts` - Shared image paths and constants
- `public/` - Static assets (images, videos)
- `docs/structure.md` - Content structure and copy reference

### Key Patterns

**Static Export**: The site is configured for static HTML export (`output: 'export'` in next.config.ts). Images are unoptimized for static hosting compatibility.

**Section Components**: Each landing page section is a self-contained component in `components/sections/`. The main page (`app/page.tsx`) composes these sections in order.

**Animation System**: Uses a custom `FadeIn` component with IntersectionObserver for scroll-triggered animations. The `.reveal` / `.reveal.active` CSS classes in `globals.css` handle the transitions.

**Brand Colors**: Defined in both `tailwind.config.ts` and `globals.css` via CSS custom properties:
- `brand-bg`: #FBF9F7 (warm off-white)
- `brand-text`: #111111 (near-black)
- `brand-accent`: #4FAF8C (green)
- `brand-dark`: #1C1917 (dark brown)

**Path Aliases**: Uses `@/*` for root-relative imports (e.g., `@/components/ui/Button`).

### UI Components

- `Button` - Primary CTA with circular fill hover effect and green glow
- `FadeIn` - Scroll-triggered fade-in animation wrapper
- `PlatformIconLoop` - Rotating AI platform icons (OpenAI → Perplexity → Google)

## Content Reference

See `docs/structure.md` for the complete content structure, including German copy for all sections, SEO meta tags, and section-by-section content guidelines.

## Environment

Requires `GEMINI_API_KEY` in `.env.local` (for any AI-related features).

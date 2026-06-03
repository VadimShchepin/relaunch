# Semrush Site Audit – aiseo.hamburg (crawl 2026-05-30)

Findings from the Semrush Site Audit, with root cause and fix for each. Ordered by severity (Errors first). Use this as the backlog for the cleanup sprint.

## 1. ERROR — 57 structured-data items invalid (`serviceType`)

- **Severity:** Error (highest). Affects every crawled page (57).
- **Semrush label:** "Local Business" schema, "1 field" invalid on each page.
- **Root cause:** The global JSON-LD in `app/layout.tsx` is `@type: "ProfessionalService"` (a subtype of `LocalBusiness`). It carries a `serviceType` array. `serviceType` is a property of schema.org `Service`, **not** of `LocalBusiness`/`ProfessionalService`, so every page that inherits the root layout fails validation. One bad field, one source file, 57 reported pages.
- **Fix:** In `app/layout.tsx`, replace `serviceType` with valid `LocalBusiness`/`Organization` properties:
  - Move the topic list (`AI SEO`, `KI-Sichtbarkeit`, `GEO`, `AEO`, ...) to `knowsAbout` (valid on `Organization`).
  - Optionally express the offerings via `makesOffer` → `Offer` → `itemOffered: { @type: "Service", serviceType: "..." }`, or `hasOfferCatalog` → `OfferCatalog`. Here `serviceType` is legal because it sits on a `Service`.
- **Effort:** Small (one file). **Impact:** Clears all 57 errors.

## 2. WARNING — 26 page titles too long

- **Semrush threshold:** ~70 chars / pixel width. 26 `/wissen` article titles exceed it, mostly because of the long descriptive title **plus** the ` | aiseo.hamburg` suffix.
- **Root cause:** Per-article `metadata.title` in each `app/wissen/<slug>/layout.tsx`.
- **Fix:** Shorten titles to <= 60 chars where possible. Either trim the descriptive part or drop the ` | aiseo.hamburg` suffix on the longest ones. Affected slugs include: `aeo-geo-marktanalyse-deutschland-2026`, `ai-content-strategie`, `ai-seo-tools`, `aio-fails-chatgpt-bann`, `case-study-blitz-hamburg`, `eeat-ki-sichtbarkeit`, `fallstudie-ki-sichtbarkeit-90-tage`, `geo-agentur-hamburg`, `google-ki-optimierung`, `ki-content-audit-anleitung`, `ki-markenwahrnehmung`, `ki-sichtbarkeit-aerzte`, `ki-sichtbarkeit-anwaelte`, `ki-sichtbarkeit-beauftragen`, `ki-sichtbarkeit-dienstleister`, `ki-sichtbarkeit-ecommerce`, `ki-sichtbarkeit-handwerker`, `ki-sichtbarkeit-immobilien`, `llmo-llm-optimierung`, `lokale-ki-sichtbarkeit`, `perplexity-vs-chatgpt-vs-google`, `seo-agentur-vs-ai-seo`, `sichtbarkeit-in-claude`, `sichtbarkeit-in-gemini`, `was-ist-geo`, `zero-click-zukunft`.
- **Effort:** Medium (per-file metadata edits). **Impact:** SERP snippet truncation fix.

## 3. WARNING — 11 broken external links

- **Root cause:** Three dead URLs reused across several `/wissen` articles:
  - `https://ahrefs.com/blog/llm-seo/` → 404 (in `sichtbarkeit-in-claude`, `ki-sichtbarkeit-dienstleister`, `ki-sichtbarkeit-aerzte`, `ki-sichtbarkeit-anwaelte`, `ki-sichtbarkeit-handwerker`, `sichtbarkeit-in-chatgpt`, `ki-sichtbarkeit-immobilien`)
  - `https://sparktoro.com/blog/new-research-how-much-traffic-do-ai-tools-send-to-websites/` → 404 (in `ki-sichtbarkeit-dienstleister`, `ki-sichtbarkeit-handwerker`, `sichtbarkeit-in-chatgpt`)
  - `https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026` → 404 (in `ki-sichtbarkeit-dienstleister`)
- **Fix:** Find current canonical URLs for each source and update, or remove the citation if no live replacement exists. (`grep -rl` the three URLs under `app/wissen`.)
- **Effort:** Small. **Impact:** Trust / crawl-health.

## 4. WARNING — 5 pages: H1 duplicates the title tag

- **Affected:** `seo-vs-ai-seo`, `case-study-kinderalbum`, `geo-agentur-hamburg`, `case-study-blitz-hamburg`, `chatgpt-seo`.
- **Root cause:** These articles' `metadata.title` has no ` | aiseo.hamburg` suffix, so it is byte-identical to the on-page H1.
- **Fix:** Differentiate. Simplest: add the ` | aiseo.hamburg` suffix (or a benefit clause) to `metadata.title` so it differs from the H1. (Watch the title-length limit from issue #2 while doing this.)
- **Effort:** Small.

## 5. NOTICE — 7 pages with only one incoming internal link

- **Affected URLs:**
  - `https://aiseo.hamburg` (homepage — likely the trailing-slash duplicate; see #9)
  - `https://aiseo.hamburg/data/aeo-marktanalyse-deutschland-2026-q2.csv`
  - `https://aiseo.hamburg/data/aeo-trends-deutschland-2026-q2.csv`
  - `https://aiseo.hamburg/wissen/aio-fails-chatgpt-bann`
  - `https://aiseo.hamburg/wissen/bing-copilot-ki-sichtbarkeit`
  - `https://aiseo.hamburg/wissen/case-study-kinderalbum`
  - `https://aiseo.hamburg/wissen/ki-content-audit-anleitung`
- **Fix:** Add contextual internal links (related-articles blocks, hub/pillar links, homepage feature) to the four newest articles. The two CSVs are data downloads, so one link from the `aeo-geo-marktanalyse-deutschland-2026` article is acceptable; can be left as-is or linked from a second relevant page.
- **Effort:** Small-medium. **Impact:** Crawl depth + link equity to the newest proof pages. (Continues the Phase 1 orphan-linking work.)

## 6. NOTICE — 3 links have no anchor text

- `datenschutz` → `https://policies.google.com/privacy`
- `impressum` → `https://ec.europa.eu/consumers/odr/`
- `aeo-geo-marktanalyse-deutschland-2026` → self-link (`.../aeo-geo-marktanalyse-deutschland-2026`)
- **Fix:** Give each link descriptive anchor text. Remove the self-referential link on the marktanalyse page (or make it a real anchor with text).
- **Effort:** Trivial.

## 7. NOTICE — llms.txt formatting issue (1)

- **File:** `public/llms.txt`. Currently opens with `#`-prefixed comment lines ("LLMs.txt - AI Training Data Information ...") rather than the spec's required first-line H1 title (`# aiseo.hamburg`) followed by a `>` summary and `##` link sections.
- **Fix:** Reformat to the llms.txt spec: `# Title` → blockquote summary → `## Section` lists of `[label](url): note`. Move the comment-style metadata out of the top.
- **Effort:** Small.

## 8. WARNING — 18 pages with low text-to-HTML ratio (informational)

- **Affected:** Mostly the GSAP-heavy landing/legal pages (`/`, `/ai-sichtbarkeit`, `/ai-sichtbarkeit-now`, `/ai-sichtbarkeits-upgrade-hamburg`, `/contact`, `/faq`, `/impressum`, `/leistungen`, `/pressekit`, `/ueber-mich`, `/wissen`, plus a few articles at ~0.10).
- **Cause:** Heavy animation/markup wrappers relative to rendered text. Largely cosmetic; Semrush flags but it is not a ranking blocker.
- **Fix:** Low priority. No action unless a specific page also has thin content.

## 9. Broken page — `/kontakt` 404 (3 clicks deep)

- **Real contact route is `/contact`.** `/kontakt` does not exist.
- **Source of the phantom link:** an illustrative llms.txt code block in `app/wissen/technische-ki-sichtbarkeit/page.tsx` (`- /kontakt - Kontaktformular`) — Semrush parsed the path out of the sample text.
- **Fix options:** (a) change the sample text to `/contact`, and/or (b) add a permanent redirect `/kontakt → /contact` at the Vercel level for safety (German users will type it).
- **Effort:** Trivial.

---

### Suggested order of execution
1. Fix #1 (`serviceType`) — single file, clears 57 errors. **Do first.**
2. Fix #3 broken external links + #6 anchor text + #9 `/kontakt` — quick wins.
3. Fix #4 duplicate H1/title and #2 long titles together (both are metadata edits).
4. Fix #5 internal links (extends Phase 1 orphan work) and #7 llms.txt.
5. #8 low text-HTML ratio — monitor only.

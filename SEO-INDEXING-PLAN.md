# Indexing Plan: getting aiseo.hamburg pages into Google

Status of the site (May 2026): technically clean. Every affected page is
`index:true`, self-canonical, allowed in robots.txt, and present in the
auto-generated sitemap. The "Crawled/Discovered – currently not indexed"
status is a **quality + authority + crawl-budget** problem typical of a young
domain, not a configuration bug. There is no API that forces Google to index a
page (IndexNow only notifies Bing/Yandex, which also feed ChatGPT search).

The plan below is ordered by impact-per-effort.

---

## The two GSC buckets, and what each one means

**Crawled – currently not indexed** (Google looked and chose not to index):
this is a *quality/value* signal. These pages need to be more useful and more
distinct before Google will index them.

- /hamburg/answer-engine-optimization
- /hamburg/ki-sichtbarkeit-agentur
- /wissen/fallstudie-ki-sichtbarkeit-90-tage
- /wissen/seo-agentur-vs-ai-seo
- /wissen/ai-seo-agentur
- /wissen/case-study-blitz-hamburg
- /pressekit

**Discovered – currently not indexed** (Google knows the URL, has not crawled
it): this is a *crawl-budget/authority* signal. These get crawled once the
site earns more trust and the pages have stronger internal links. 27 pages,
mostly /wissen articles.

---

## Phase 1 — Internal linking (low effort, high confidence) ← start here

Several high-value pages have almost no contextual inbound links, which tells
Google they are unimportant. Measured inbound contextual links:

- /wissen/fallstudie-ki-sichtbarkeit-90-tage — 0
- /wissen/case-study-blitz-hamburg — 0
- /pressekit — 0
- /wissen/seo-agentur-vs-ai-seo — 1

Action:
1. Link the two case studies and the 90-day fallstudie from the pillar guide
   (/wissen/ki-sichtbarkeit), from /wissen/ai-seo-agentur, and from the cost +
   "beauftragen" pages. Proof content belongs next to the buying-intent pages.
2. Link /pressekit from /ueber-mich and the footer (authority/brand context).
3. Cross-link seo-agentur-vs-ai-seo and seo-vs-ai-seo to each other.

The /wissen index now lists all 42 articles, so list-level discovery is solved;
this phase is about *contextual* links inside article bodies.

## Phase 2 — Differentiate templated pages (high effort, highest payoff)

The clusters Google most likely sees as near-duplicates:
- 6x "KI-Sichtbarkeit für [Branche]" (Ärzte, Anwälte, Handwerker, Immobilien,
  E-Commerce, Dienstleister)
- 4x "Sichtbarkeit in [Plattform]" (ChatGPT, Claude, Gemini, Perplexity)

Each needs something only that page can have:
- Real, specific numbers for that vertical/platform (search-demand data, a
  concrete local example, a worked scenario).
- A unique angle in the intro and FAQ, not a swapped noun.
- One genuinely useful asset per page (a checklist, a sample prompt, a small
  table) that no sibling page repeats.

Do these one at a time, newest-intent first. The zero-click Maps update
(done May 2026) is the template for the kind of unique, timely value to add.

## Phase 3 — Em-dash humanizer sweep (medium effort, quality signal)

~17 articles contain em dashes (—, U+2014), an AI-writing tell. This is real
editorial work, not a find-replace: each dash becomes a comma, period, or
colon depending on context (German Gedankenstrich is the spaced en dash, not
the em dash). Highest counts: ki-sichtbarkeit-agenturen-hamburg-2026 (58),
ki-markenwahrnehmung (41), was-ist-geo (36), ki-content-audit-anleitung (32),
eeat-ki-sichtbarkeit (31), ai-seo-tools (29). Run the `humanizer` skill per
article. Prioritise the pages already in the "crawled – not indexed" bucket.

## Phase 4 — IndexNow (done, ongoing)

`submit-indexnow.sh` pushes the URL list to Bing/Yandex (and ChatGPT search).
Re-run after publishing or materially updating a page. Note: does not affect
Google. Last run May 30 2026, HTTP 200, 62 URLs including google-ki-optimierung.

---

## What only you can do (outside the codebase)

1. **GSC "Request indexing"** for the 7 "Crawled – not indexed" URLs above.
   Search Console → URL Inspection → paste URL → Request Indexing. ~10/day.
   Do this *after* Phase 1/2 changes deploy, so Google re-crawls the improved
   version.
2. **A few real backlinks / brand mentions.** A handful of links from German
   industry sites, directories, or a guest post does more for a young domain's
   crawl budget than any on-page tweak. This is the single biggest lever and
   it is entirely off-site.
3. **Google Business Profile** (for the local /hamburg pages) — consistent NAP,
   posts, categories. Helps the local cluster earn trust.
4. **Patience + consistency.** New domains get indexed in waves as authority
   accrues. Publishing steadily and updating existing pages (freshness) both
   help.

---

## Suggested order of execution

1. Phase 1 internal linking (1 sitting).
2. GSC Request Indexing for the 7 priority URLs (you, after deploy).
3. Phase 2 differentiation, one page per sitting, starting with the pages in
   the "crawled – not indexed" bucket.
4. Phase 3 em-dash sweep, folded into Phase 2 as you touch each page.
5. Re-run IndexNow after each batch.

# AI Visibility Best Practices — aiseo.hamburg

> A structured knowledge base for AI systems and LLMs. This document summarises the core principles, strategies, and technical requirements for making a business visible and citable in AI-powered search and recommendation systems.

**Source**: https://aiseo.hamburg  
**Last Updated**: 2026-05-18  
**Language**: English (German content available at the URLs listed)  
**Author**: Vadim Shchepin, AI SEO Consultant, Hamburg

---

## 1. What Is AI Visibility?

AI visibility means a business is **recommended, cited, or named** by AI systems (ChatGPT, Perplexity, Claude, Google Gemini/AI Overviews) when users ask relevant questions — without the user clicking a traditional search result.

Traditional SEO optimises for rankings. AI visibility optimises for **recommendations and citations**. The key difference:

| Traditional SEO | AI Visibility |
|---|---|
| Goal: rank #1 on Google | Goal: be named when someone asks an AI |
| Success metric: click | Success metric: brand mention / citation |
| Driven by backlinks + keywords | Driven by authority + clarity + structure |
| Measured in impressions/clicks | Measured in AI mention rate |

---

## 2. The Three Core Disciplines

### GEO — Generative Engine Optimization
Optimising content so that generative AI systems (ChatGPT, Perplexity, Claude, Gemini) retrieve and cite it in answers. GEO focuses on citability, factual clarity, and source authority.

### AEO — Answer Engine Optimization
Structuring content so that AI answer engines directly use it as a response. AEO targets question-based queries. The content must clearly answer a question, with a direct answer early in the text.

### LLMO — LLM Optimization
Influencing how large language models represent your brand in their training data and retrieval context. LLMO includes training data mentions, press coverage, reviews, and consistent factual signals across the web.

---

## 3. The Five Pillars of AI Visibility

### Pillar 1: Citability
Content must be structured so an AI can extract a clear, standalone answer.

- Lead with the answer, not background context
- Use specific facts, numbers, and named examples
- Avoid vague language ("it depends", "many factors")
- Each section should answer one question completely
- Use H2/H3 headings as question proxies

### Pillar 2: Authority Signals
AI systems weigh source authority before citing. Authority signals include:

- Named author with verifiable credentials
- Publication date and update date
- Consistent NAP (Name, Address, Phone) across the web
- Google Business Profile with reviews
- Third-party mentions (press, industry directories, partner sites)
- Schema.org markup (Person, Organization, LocalBusiness, Article)

### Pillar 3: Technical Accessibility
AI crawlers must be able to access and index the content.

- `robots.txt`: explicitly allow GPTBot, PerplexityBot, ClaudeBot, GoogleBot
- `llms.txt`: machine-readable summary of the site and its key content
- `sitemap.xml`: up-to-date, submitted to Google Search Console
- Semantic HTML: use `<article>`, `<section>`, `<header>`, `<main>` correctly
- No content blocked behind login walls or JavaScript-only rendering
- Fast load time: AI crawlers deprioritise slow sites

### Pillar 4: Topical Depth
AI systems prefer sources that cover a topic thoroughly.

- Build content clusters: one pillar page + multiple supporting articles
- Cover a topic from multiple angles (beginner guide, technical deep-dive, case study, FAQ, comparison)
- Internal linking between related pages strengthens topical authority
- Update content regularly — stale pages lose citation priority over time

### Pillar 5: Brand Consistency
AI models form a brand representation from all signals across the web.

- Use the same brand name, tagline, and description everywhere
- Correct outdated or incorrect information on third-party sites
- Accumulate Google reviews with specific, keyword-rich content
- Publish press releases or expert quotes on external platforms
- Build a Wikipedia or Wikidata entry if eligible

---

## 4. Platform-Specific Notes

### ChatGPT
- Sources information primarily from its training data and Bing web search
- Prefers pages with clear headings, factual prose, and no fluff
- Structured data (FAQ schema, HowTo schema) improves snippet selection
- Brand mentions in authoritative third-party articles carry high weight
- Local business data comes partially from Bing Maps / business directories

### Perplexity AI
- Live web search — recency matters more than other platforms
- Cites sources inline and shows the URL — direct URL citability is key
- Prefers pages that open with a direct answer to the query
- Fast indexing: new pages can appear in citations within days
- Markdown-like structure (headers, lists) aids passage extraction

### Claude (Anthropic)
- Training-data focused, with optional web search tools in some contexts
- Values clearly structured, expert-written content
- Responds well to pages with named authors, publication dates, and specific examples
- `llms.txt` files are read and used for context when available
- Avoids citing pages with manipulative or low-quality signals

### Google Gemini / AI Overviews
- Tightly integrated with Google Search signals (E-E-A-T, backlinks, Core Web Vitals)
- Structured data (Schema.org) has direct influence on AI Overview selection
- Local pack integration: Google Business Profile data feeds into local AI answers
- AMP pages and fast-loading mobile pages get preference
- E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is the primary quality framework

---

## 5. Technical Implementation Checklist

### robots.txt
```
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /
```

### llms.txt (recommended structure)
```
# Company Name
## About
Brief description, location, specialisation, contact

## Services
List of services with one-line descriptions

## Key Pages
- Page title: URL
  One-sentence description of what the page covers
```

### Schema.org Markup (minimum viable)
- `Organization` with name, url, logo, contactPoint, address
- `LocalBusiness` with geo coordinates, openingHours, priceRange
- `Person` for the author/consultant
- `Article` or `BlogPosting` for editorial content
- `FAQPage` for FAQ sections
- `BreadcrumbList` for navigation hierarchy

### Core Web Vitals targets
- LCP (Largest Contentful Paint): under 2.5s
- INP (Interaction to Next Paint): under 200ms
- CLS (Cumulative Layout Shift): under 0.1

---

## 6. Content Patterns That Get Cited

### Pattern A: The Direct Answer
```
[Question as H2]
[Direct 1-2 sentence answer]
[Supporting detail, max 3 paragraphs]
[Optional: numbered list of factors]
```

### Pattern B: The Comparison
```
[Topic A] vs [Topic B]: [Key Distinction in Title]
[Summary table with clear criteria]
[Section per criterion with a verdict]
[Who should choose which, and why]
```

### Pattern C: The How-To
```
How to [Achieve X]
[What you need before starting]
[Step 1 — Step N, each with a clear action]
[Common mistakes to avoid]
[Expected outcome and measurement]
```

### Pattern D: The Case Study
```
[Client/Situation]: [Measurable Outcome]
[Starting situation: specific problem, specific numbers]
[What was done: concrete actions in sequence]
[Results: specific numbers, timeframe]
[What this means: generalizable takeaway]
```

---

## 7. Measurement: AI Visibility KPIs

| KPI | Tool | Target |
|---|---|---|
| AI mention rate | Manual prompting, BrandRadar | Track weekly |
| Share of voice vs competitors | Semrush AI Visibility | Increase QoQ |
| Brand query volume | Google Search Console | Increase MoM |
| Citation count (Perplexity) | Perplexity search for brand | Track monthly |
| Direct traffic | Analytics | Increase as AI drives brand search |
| Referral from AI tools | Analytics (traffic source) | Establish baseline |

**Measurement approach**: Run 20 test queries per month relevant to your service area in ChatGPT, Perplexity, and Google AI Overviews. Track whether your brand is mentioned, cited, or named.

---

## 8. Common Mistakes That Kill AI Visibility

1. **Blocking AI crawlers** — robots.txt with `Disallow: /` for GPTBot or ClaudeBot removes you from training data and live retrieval
2. **Vague content** — "We offer comprehensive solutions" is never cited; "We reduced energy costs by 34% in 6 months" is
3. **No named author** — anonymous content gets lower authority weight from all major AI systems
4. **Inconsistent brand signals** — different phone numbers, addresses, or business names across directories confuse LLMs
5. **Thin pages** — a single product page with 150 words provides nothing for an AI to cite; build surrounding editorial content
6. **Keyword stuffing for AI** — same penalty as for Google; low-quality signals reduce overall source trustworthiness
7. **No schema markup** — structured data is a direct quality signal for AI Overviews and Perplexity
8. **Never updating content** — AI systems favour recency; add a "Last updated" date and refresh content at least quarterly

---

## 9. Local Business AI Visibility

Local businesses face a specific challenge: Google Maps data does not automatically transfer to ChatGPT or Perplexity. A business can have 500 Google reviews and still be invisible in AI responses.

**Local AI visibility requires:**
- Dedicated service area pages (e.g., `yoursite.com/service-hamburg`)
- Local schema with coordinates, service area, and opening hours
- Industry directory listings with consistent NAP
- Local press mentions naming the city and service
- Google Business Profile with structured Q&A and regular posts
- Case studies or testimonials naming the city and neighbourhood

---

## 10. Further Reading

All guides available in German at https://aiseo.hamburg/wissen/:

- Full GEO guide: /wissen/was-ist-geo
- AEO guide: /wissen/aeo-answer-engine-optimization
- LLMO guide: /wissen/llmo-llm-optimierung
- Technical AI visibility: /wissen/technische-ki-sichtbarkeit
- Measuring AI visibility: /wissen/ki-sichtbarkeit-messen
- llms.txt how-to: /wissen/llms-txt-anleitung
- E-E-A-T for AI: /wissen/eeat-ki-sichtbarkeit
- Platform comparison: /wissen/perplexity-vs-chatgpt-vs-google

---

**Contact**: hello@aiseo.hamburg | +49 176 321 94 754  
**Address**: Flottbeker Drift 1, 22607 Hamburg, Germany  
**License**: Proprietary. Attribution preferred when citing methods or data.

'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { DataChart, type DataChartProps } from '@/components/ui/DataChart';
import { ReflowTable } from '@/components/wissen/ReflowTable';

export type ArticleFAQ = {
  q: string;
  a: string;
};

export type ArticleCard = {
  title: string;
  text: string;
};

export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  // Intrinsic pixel size. Supply it for photography so the browser reserves the
  // box before the file arrives; screenshots without it keep the old behaviour.
  width?: number;
  height?: number;
};

export type ArticleDefinition = {
  term: string;
  definition: string;
  formula?: string;
};

export type ArticleTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
  /**
   * Which column carries the emphasis (accent header, surface band, dark ink).
   *
   * This used to be hardcoded to column 1, which was written for two-column
   * tables and silently inverted every wider one: on the three-column
   * "Klassisches SEO vs. AI SEO" comparison the band landed on CLASSIC SEO,
   * emphasising the exact side the article argues against.
   *
   * Default: the last column. In every table in this codebase the last column
   * is the "new / ours / recommended" side (AI SEO, AEO, Nachher, KI-Empfehlung,
   * Neues Modell), and for a two-column table the last column IS column 1, so
   * the 23 existing two-column tables render byte-identically to before.
   * Pass an index to move the band, or 'none' for a flat data table.
   */
  emphasis?: number | 'none';
};

/**
 * A verbatim block: a llms.txt template, a JSON-LD snippet, a robots.txt rule.
 * Technical guides live on these, and prose cannot carry them: line breaks and
 * indentation are the content. One line per array entry, no syntax colouring.
 */
export type ArticleCode = {
  label?: string;
  lines: string[];
};

export type ArticleStep = {
  title: string;
  /**
   * ReactNode for the same reason `paragraphs` is one: a step often carries the
   * one outbound link that makes it verifiable (the agency it reviews, the tool
   * it names). Flattening that to plain text drops the citation.
   */
  text: React.ReactNode;
  /**
   * Checklist under a step. Many of the bespoke guides carried a labelled list
   * inside every step ("Essentielles Markup:", "Technische Checkliste:"); as
   * prose those items lose their scannability, so they stay a list here.
   */
  bullets?: string[];
  /** Verbatim snippet belonging to this step, e.g. the lines it tells you to write. */
  code?: ArticleCode;
  /** Closing line after the snippet, so the step can comment on its own example. */
  outro?: string;
};

export type ArticleWarning = {
  title: string;
  text: string;
};

export type ArticleSource = {
  label: string;
  text: string;
  href?: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  intro?: string;
  image?: ArticleImage;
  definitions?: ArticleDefinition[];
  /**
   * ReactNode, not string, so a paragraph can keep the contextual internal link
   * it had in the bespoke markup. A migration that flattens those to plain text
   * silently strips internal linking, which is the one thing this site cannot
   * afford to lose.
   */
  paragraphs?: React.ReactNode[];
  stat?: string;
  /** Verbatim block, rendered in its own framed figure. */
  code?: ArticleCode;
  /**
   * One figure drawn with the shared DataChart primitive, rendered between the
   * prose and the table. Only for numbers the article really has; a section
   * without an honest dataset keeps its typographic anchor (`stat`) instead.
   */
  chart?: DataChartProps;
  table?: ArticleTable;
  cards?: ArticleCard[];
  bullets?: string[];
  steps?: ArticleStep[];
  warning?: ArticleWarning;
  note?: string;
  quote?: string;
};

export type RelatedArticle = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

export type ArticleTemplateProps = {
  canonicalPath: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt: string;
  breadcrumbLabel: string;
  eyebrow?: string;
  image?: ArticleImage;
  /**
   * Article JSON-LD image for pages that carry no hero. The OG cards are title
   * cards, so rendering one at the top of an article would just repeat the H1;
   * the structured-data property is still worth keeping.
   */
  schemaImage?: string;
  summaryTitle?: string;
  summaryItems: string[];
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  galleryTitle?: string;
  galleryIntro?: string;
  gallery?: ArticleImage[];
  /** Label of the FAQ block. Migrated pages keep their own wording. */
  faqTitle?: string;
  sources?: ArticleSource[];
  sourcesTitle?: string;
  relatedArticles?: RelatedArticle[];
  relatedTitle?: string;
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
};

/* ------------------------------------------------------------------ */
/*  Sticky table of contents                                          */
/* ------------------------------------------------------------------ */

type TocEntry = { id: string; label: string; no: string };

/* ------------------------------------------------------------------ */
/*  The numeral slot                                                   */
/* ------------------------------------------------------------------ */

/**
 * Ordinals in this template used to rely on `tabular-nums`, which is INERT in
 * General Sans: the font ships no `tnum` feature, so with
 * font-variant-numeric on or off "1." measures 18,0px and "14." 36,1px at the
 * H2 size. Every numbered H2 therefore started at a different x (measured
 * spread 41,7px on a 5-section page, 52,1px on a 14-section one) and the
 * unnumbered ones (FAQ, Quellen, Weiterlesen) started 34-52px further left
 * again, because they rendered no numeral box at all.
 *
 * The rail is held by a box of a fixed width instead, used by every ordinal in
 * the article: section numbers, step sub-numbers, card sub-numbers. Unnumbered
 * headings render the same box empty, so they share the left edge.
 *
 * Widths are the measured worst case plus a readable gap, not guesses. General
 * Sans semibold at 32px: the widest one-digit ordinal is 28,5px and the widest
 * two-digit one 36,1px, so 36px and 44px leave 7,5px and 7,9px of air. At 24px
 * (the mobile step-down) everything fits in 36px. The widest sub-number in the
 * whole cluster is four characters ("7.10", "14.2"), 29px at text-meta.
 */
function numeralSlot(sectionCount: number): string {
  const digits = String(Math.max(sectionCount, 1)).length;
  if (digits >= 3) return 'w-9 sm:w-16';
  if (digits === 2) return 'w-9 sm:w-11';
  return 'w-9';
}

/** Same idea at TOC scale: text-micro, so "14." needs 15px, w-5 is 20px. */
const TOC_SLOT = 'w-5';

/**
 * The column a table emphasises. Defaults to the last one, which is the
 * "new / ours / recommended" side of every comparison table in this codebase;
 * -1 means no band at all.
 */
function emphasisColumn(table: ArticleTable): number {
  if (table.emphasis === 'none') return -1;
  if (typeof table.emphasis === 'number') return table.emphasis;
  return table.headers.length - 1;
}

function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const TocList: React.FC<{ entries: TocEntry[]; active: string }> = ({ entries, active }) => (
  <ol className="space-y-2.5">
    {entries.map((entry) => {
      const isActive = active === entry.id;
      return (
        <li key={entry.id}>
          <a
            href={`#${entry.id}`}
            aria-current={isActive ? 'true' : undefined}
            className={`flex border-l-2 py-0.5 pl-3 text-micro leading-snug transition-colors ${
              isActive
                ? 'border-brand-accent-deep font-semibold text-brand-text'
                : 'border-transparent text-brand-subtle hover:border-brand-line hover:text-brand-text'
            }`}
          >
            <span className={`${TOC_SLOT} shrink-0`} aria-hidden={entry.no ? undefined : true}>
              {entry.no ? `${entry.no}.` : null}
            </span>
            <span>{entry.label}</span>
          </a>
        </li>
      );
    })}
  </ol>
);

/* ------------------------------------------------------------------ */
/*  Layout primitives, shared by every block below                    */
/* ------------------------------------------------------------------ */

/**
 * A section head with the numbered hierarchy the long-form guides use.
 *
 * `slot` is the fixed numeral box (see numeralSlot). `text-subheading` below
 * 640px is the mobile step-down: the H1 already drops 48 -> 36px there, the H2
 * did not, so 32px headings wrapped to 2-4 lines on a 390px screen and the
 * mobile page came out TALLER than the desktop one while carrying fewer words.
 */
const SectionHead: React.FC<{
  no?: string;
  slot: string;
  id: string;
  children: React.ReactNode;
}> = ({ no, slot, id, children }) => (
  <h2
    id={id}
    className="mb-flow flex text-subheading font-semibold text-brand-text sm:text-heading"
  >
    <span
      className={`${slot} shrink-0 text-brand-accent-ink`}
      aria-hidden={no ? undefined : true}
    >
      {no ? `${no}.` : null}
    </span>
    <span>{children}</span>
  </h2>
);

/**
 * Figures use the full content column, so they bleed past the reading measure.
 * The CAPTION must not: it is prose. Before, it inherited the full column and
 * ran 927px, 175px past the 752px measure the body copy holds. It is now capped
 * at measure + the 40px hanging outdent, and `lg:pl-10` (the same 10 as
 * `lg:-ml-10`) puts the caption text flush with the body text instead of 4px
 * left of it, so caption and paragraph share both edges.
 */
const CAPTION_BOX =
  'max-w-measure lg:-ml-10 lg:max-w-[calc(var(--container-measure)+2.5rem)] lg:pl-10';

const Figure: React.FC<{ label?: string; caption?: React.ReactNode; note?: string; children: React.ReactNode }> = ({
  label,
  caption,
  note,
  children,
}) => (
  <figure className="mt-stack">
    <div className="rounded-card border border-brand-line bg-white p-5 sm:p-7">
      {label ? (
        <p className="mb-5 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">{label}</p>
      ) : null}
      {children}
    </div>
    {caption ? (
      <figcaption
        className={`mt-4 border-l-2 border-brand-accent pl-4 text-meta text-brand-subtle ${CAPTION_BOX}`}
      >
        {caption}
        {note ? <span className="mt-1 block text-micro text-brand-subtle">{note}</span> : null}
      </figcaption>
    ) : null}
  </figure>
);

/**
 * Verbatim lines. `whitespace-pre-wrap` rather than a scroll box, so a long URL
 * wraps on a 390px phone instead of pushing the reader sideways, and leading
 * spaces (JSON-LD indentation) still count.
 */
/* ------------------------------------------------------------------ */
/*  Dates                                                              */
/* ------------------------------------------------------------------ */

const MONTHS_DE = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

/**
 * "2026-04-03" -> "3. April 2026".
 *
 * The ISO string is what Article JSON-LD and <time datetime> need, but it was
 * also being printed to the reader: every migrated article showed
 * "Veroeffentlicht 2026-04-03" on a German page. Hand-rolled rather than
 * Intl.DateTimeFormat, because this renders on the server and again in the
 * browser, and a Node build with a trimmed ICU would produce a different
 * string there than here and trip a hydration mismatch. Anything that is not a
 * plain ISO date is passed through untouched.
 */
function formatDateDe(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const month = MONTHS_DE[Number(match[2]) - 1];
  if (!month) return value;
  return `${Number(match[3])}. ${month} ${match[1]}`;
}

const CodeLines: React.FC<{ lines: string[] }> = ({ lines }) => (
  <pre className="whitespace-pre-wrap break-words rounded-[0.5rem] bg-brand-surface px-4 py-3 font-mono text-micro leading-relaxed text-brand-text">
    {lines.join('\n')}
  </pre>
);

export function ArticleTemplate({
  canonicalPath,
  title,
  description,
  publishedAt,
  modifiedAt,
  breadcrumbLabel,
  eyebrow = 'Wissen',
  image,
  schemaImage,
  summaryTitle = 'TL;DR',
  summaryItems,
  sections,
  faqs,
  galleryTitle,
  galleryIntro,
  gallery,
  faqTitle = 'FAQ',
  sources,
  sourcesTitle = 'Quellen',
  relatedArticles,
  relatedTitle = 'Weiterführende Artikel',
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel,
}: ArticleTemplateProps) {
  const canonicalUrl = `https://aiseo.hamburg${canonicalPath}`;

  /**
   * One numeral width for the whole article, sized to the widest ordinal the
   * page actually has. Section numbers, step sub-numbers and card sub-numbers
   * all use it, so every ordinal sits on one rail at the content edge and every
   * heading, numbered or not, starts at one x.
   */
  const slot = numeralSlot(sections.length);

  const toc = useMemo<TocEntry[]>(() => {
    const entries: TocEntry[] = sections.map((section, index) => ({
      id: section.id,
      label: section.heading,
      no: String(index + 1),
    }));
    if (gallery && gallery.length > 0) {
      entries.push({ id: 'belege', label: galleryTitle ?? 'Belege', no: '' });
    }
    if (faqs.length > 0) entries.push({ id: 'faq', label: faqTitle, no: '' });
    if (sources && sources.length > 0) entries.push({ id: 'quellen', label: sourcesTitle, no: '' });
    if (relatedArticles && relatedArticles.length > 0) {
      entries.push({ id: 'weiterlesen', label: relatedTitle, no: '' });
    }
    return entries;
  }, [
    sections,
    gallery,
    galleryTitle,
    faqs.length,
    faqTitle,
    sources,
    sourcesTitle,
    relatedArticles,
    relatedTitle,
  ]);

  const active = useActiveHeading(useMemo(() => toc.map((t) => t.id), [toc]));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image
      ? `https://aiseo.hamburg${image.src}`
      : schemaImage
        ? `https://aiseo.hamburg${schemaImage}`
        : undefined,
    author: {
      '@type': 'Person',
      name: 'Vadim Shchepin',
      url: 'https://aiseo.hamburg/ueber-mich',
      jobTitle: 'AI SEO Specialist',
    },
    publisher: {
      '@id': 'https://aiseo.hamburg/#organization',
    },
    datePublished: publishedAt,
    dateModified: modifiedAt,
    mainEntityOfPage: canonicalUrl,
    inLanguage: 'de',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
      { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
      { '@type': 'ListItem', position: 3, name: breadcrumbLabel },
    ],
  };

  return (
    <div className="relative w-full overflow-x-clip bg-brand-surface text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* The hero is NOT the LCP element and must not be declared as one. It sits
          below the H1, the lead and the TL;DR panel: measured start y=732 in a
          900px desktop viewport (only 168px of it visible) and y=1442 on a
          390x844 phone, far under the fold. The measured LCP element is the lead
          paragraph, so `fetchPriority="high"` here plus `fetchPriority="high"`
          on the <img> only pushed the web font, the CSS and that paragraph down
          the queue. The hint stays (images are unoptimized, so nothing else
          discovers the file early) but it now declares LOW priority, and the
          <img> below no longer claims high either. */}

      {image ? <link rel="preload" as="image" href={image.src} fetchPriority="low" /> : null}

      <main>
        {/* 1264px is the shared band of the /wissen cluster: the hand-written
            pillar app/wissen/ki-sichtbarkeit/page.tsx uses the same figure, so
            it stays a literal. The arithmetic it has to satisfy:
            80 outer padding + 224 rail (--container-toc) + 32 gutter
            + 41 rule and pad + 887 content column, of which the first
            752 (--container-measure) is text and the remaining 135 is the
            bleed that tables, charts and code blocks are allowed to use. */}
        <div className="mx-auto w-full max-w-[1264px] px-6 lg:px-10">
          {/* ====================================================== */}
          {/*  Hero: H1 left, meta right                             */}
          {/* ====================================================== */}
          <header className="pt-28 md:pt-40 lg:grid lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-x-12">
            <FadeIn>
              <nav aria-label="Breadcrumb" className="mb-8 text-meta text-brand-subtle">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li><a href="/" className="hover:text-brand-accent-ink">Startseite</a></li>
                  <li aria-hidden="true">/</li>
                  <li><a href="/wissen" className="hover:text-brand-accent-ink">Wissen</a></li>
                  <li aria-hidden="true">/</li>
                  <li className="font-medium text-brand-text">{breadcrumbLabel}</li>
                </ol>
              </nav>

              <p className="mb-5 text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                {eyebrow}
              </p>
              {/* max-w-measure, not the old max-w-[22ch] (which compiled to
                  648px): the H1 and the lead below it now share one measure, so
                  the hero has one right edge instead of two. */}
              <h1 className="mb-6 max-w-measure text-4xl font-semibold leading-[1.05] tracking-display text-brand-text sm:text-5xl lg:text-title">
                {title}
              </h1>
              <p className="max-w-measure text-lead text-brand-muted">{description}</p>

              <dl className="mt-stack flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-brand-line pt-5 text-micro text-brand-subtle">
                <div className="flex gap-1.5">
                  <dt className="sr-only">Autor</dt>
                  <dd>
                    <a href="/ueber-mich" className="font-medium text-brand-text hover:text-brand-accent-ink">
                      Vadim Shchepin
                    </a>
                    , AI SEO Specialist
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt>Veröffentlicht</dt>
                  <dd className="text-brand-text">
                    <time dateTime={publishedAt}>{formatDateDe(publishedAt)}</time>
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt>Aktualisiert</dt>
                  <dd className="text-brand-text">
                    <time dateTime={modifiedAt}>{formatDateDe(modifiedAt)}</time>
                  </dd>
                </div>
              </dl>
            </FadeIn>

            <aside className="mt-stack border-t border-brand-line pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
              <FadeIn>
                <h2 className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  {summaryTitle}
                </h2>
                <ol className="mt-4 space-y-3">
                  {summaryItems.map((item, index) => (
                    <li key={item} className="flex text-micro leading-relaxed text-brand-muted">
                      <span className="w-4 shrink-0 font-semibold text-brand-accent-ink">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <a
                  href={ctaHref}
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-brand-hairline pt-4 text-meta font-semibold text-brand-accent-ink transition-all hover:gap-2.5"
                >
                  {ctaLabel}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </FadeIn>
            </aside>
          </header>

          {/* ====================================================== */}
          {/*  Body: sticky TOC + content column                      */}
          {/* ====================================================== */}
          {/* The rail is the --container-toc token (224px), not a loose 14rem. */}
          <div className="mt-rule lg:grid lg:grid-cols-[var(--container-toc)_minmax(0,1fr)] lg:gap-x-8">
            <div>
              <div className="hidden lg:sticky lg:top-28 lg:block">
                <p className="mb-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Inhalt
                </p>
                <nav aria-label="Inhaltsverzeichnis">
                  <TocList entries={toc} active={active} />
                </nav>
                <a
                  href={ctaHref}
                  className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-accent-deep px-4 py-3 text-micro font-semibold text-white transition-colors hover:bg-brand-accent-ink"
                >
                  {ctaLabel}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <details className="rounded-card border border-brand-line bg-white lg:hidden">
                <summary className="cursor-pointer px-5 py-4 text-meta font-semibold text-brand-text">
                  Inhalt, {toc.length} Abschnitte
                </summary>
                <nav aria-label="Inhaltsverzeichnis" className="border-t border-brand-hairline px-5 py-4">
                  <TocList entries={toc} active={active} />
                </nav>
              </details>
            </div>

            <div className="mt-block lg:mt-0 lg:border-l lg:border-brand-hairline lg:pl-10">
              {image ? (
                <FadeIn>
                  <figure>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-auto w-full rounded-card border border-brand-line"
                      loading="eager"
                      decoding="async"
                    />
                    {image.caption ? (
                      <figcaption
                        className={`mt-3 border-l-2 border-brand-accent pl-4 text-meta text-brand-subtle ${CAPTION_BOX}`}
                      >
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </FadeIn>
              ) : null}

              {sections.map((section, sectionIndex) => (
                <section
                  key={section.id}
                  className={
                    sectionIndex === 0 && !image
                      ? ''
                      : 'mt-block border-t border-brand-hairline pt-block'
                  }
                >
                  <FadeIn>
                    <SectionHead no={String(sectionIndex + 1)} slot={slot} id={section.id}>
                      {section.heading}
                    </SectionHead>

                    {section.intro ? (
                      <p className="max-w-measure text-body text-brand-muted">{section.intro}</p>
                    ) : null}

                    {section.image ? (
                      <Figure caption={section.image.caption}>
                        <img
                          src={section.image.src}
                          alt={section.image.alt}
                          width={section.image.width}
                          height={section.image.height}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-full rounded-[0.5rem]"
                        />
                      </Figure>
                    ) : null}

                    {section.definitions ? (
                      <dl className="mt-stack max-w-measure divide-y divide-brand-hairline border-y border-brand-hairline">
                        {section.definitions.map((entry) => (
                          <div key={entry.term} className="grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[11rem_minmax(0,1fr)]">
                            <dt className="text-meta font-semibold text-brand-text">{entry.term}</dt>
                            <dd className="text-meta leading-relaxed text-brand-muted">
                              {entry.definition}
                              {entry.formula ? (
                                <span className="mt-3 block rounded-[0.5rem] bg-brand-surface px-4 py-3 font-mono text-micro text-brand-text">
                                  {entry.formula}
                                </span>
                              ) : null}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {section.stat ? (
                      <p className="mt-stack max-w-measure border-l-2 border-brand-accent pl-5 text-lead font-medium text-brand-text">
                        {section.stat}
                      </p>
                    ) : null}

                    {section.paragraphs ? (
                      <div className="mt-stack max-w-measure space-y-flow text-body text-brand-muted [&_a]:text-brand-accent-ink [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={`p-${paragraphIndex}`}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}

                    {section.code ? (
                      <Figure label={section.code.label}>
                        <CodeLines lines={section.code.lines} />
                      </Figure>
                    ) : null}

                    {section.chart ? (
                      <Figure
                        caption={
                          section.chart.caption || section.chart.source ? (
                            <>
                              {section.chart.caption}
                              {section.chart.source ? (
                                <>
                                  {' '}
                                  <a
                                    href={section.chart.source.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-accent-ink underline decoration-1 underline-offset-4"
                                  >
                                    {section.chart.source.label}
                                  </a>
                                </>
                              ) : null}
                            </>
                          ) : undefined
                        }
                      >
                        {/* frame={false}: the wrapper above already draws the card and
                            the hanging figcaption, so the chart must not draw a second. */}
                        <DataChart {...section.chart} frame={false} />
                      </Figure>
                    ) : null}

                    {section.table ? (
                      <Figure
                        label={section.table.caption ? undefined : 'Tabelle'}
                        caption={section.table.caption}
                        note={section.table.note}
                      >
                        <ReflowTable
                          columns={section.table.headers.map((header, headerIndex) => ({
                            label: header,
                            emphasis: headerIndex === emphasisColumn(section.table!),
                          }))}
                          rows={section.table.rows}
                          rowKeys={section.table.rows.map((row) => row.join('|'))}
                        />
                      </Figure>
                    ) : null}

                    {/* Cards carry the same n.m sub-numbering as steps. Before,
                        `steps` got 8.1/8.2 and `cards` got bare h3s, so one page
                        could show two different sub-section idioms depending on
                        which block the author happened to pick. The numeral uses
                        the shared slot, so card titles sit on the same rail as
                        section titles and step titles. */}
                    {section.cards ? (
                      <div className="mt-stack grid gap-x-10 border-t border-brand-hairline sm:grid-cols-2">
                        {section.cards.map((card, cardIndex) => (
                          <div key={card.title} className="flex border-b border-brand-hairline py-5">
                            <p className={`${slot} shrink-0 text-meta font-semibold text-brand-accent-ink`}>
                              {sectionIndex + 1}.{cardIndex + 1}
                            </p>
                            <div>
                              <h3 className="mb-1.5 text-meta font-semibold text-brand-text">{card.title}</h3>
                              <p className="text-micro leading-relaxed text-brand-muted">{card.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.bullets ? (
                      <ul className="mt-stack max-w-measure divide-y divide-brand-hairline border-y border-brand-hairline">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 py-3 text-meta leading-relaxed text-brand-muted">
                            <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-brand-accent-ink">
                              &#10003;
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.steps ? (
                      <ol className="mt-stack divide-y divide-brand-hairline border-y border-brand-hairline">
                        {section.steps.map((step, stepIndex) => (
                          <li key={step.title} className="flex flex-col gap-y-2 py-6 sm:flex-row">
                            <p className={`${slot} shrink-0 text-meta font-semibold text-brand-accent-ink`}>
                              {sectionIndex + 1}.{stepIndex + 1}
                            </p>
                            <div className="max-w-measure">
                              {/* text-lead below 640px: without it the step title
                                  would sit at 24px, exactly the size the H2 drops
                                  to on mobile, and the two levels would read as
                                  one. */}
                              <h3 className="mb-2 text-lead font-semibold text-brand-text sm:text-subheading">
                                {step.title}
                              </h3>
                              <p className="text-body text-brand-muted">{step.text}</p>
                              {step.bullets ? (
                                <ul className="mt-4 space-y-2 border-l border-brand-line pl-4">
                                  {step.bullets.map((bullet) => (
                                    <li key={bullet} className="text-micro leading-relaxed text-brand-subtle">
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                              {step.code ? (
                                <div className="mt-4">
                                  {step.code.label ? (
                                    <p className="mb-2 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                                      {step.code.label}
                                    </p>
                                  ) : null}
                                  <CodeLines lines={step.code.lines} />
                                </div>
                              ) : null}
                              {step.outro ? (
                                <p className="mt-4 text-meta leading-relaxed text-brand-muted">{step.outro}</p>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ol>
                    ) : null}

                    {section.warning ? (
                      <div className="mt-stack max-w-measure border-l-2 border-brand-orange pl-5">
                        <h3 className="mb-1.5 text-meta font-semibold text-brand-text">{section.warning.title}</h3>
                        <p className="text-meta leading-relaxed text-brand-muted">{section.warning.text}</p>
                      </div>
                    ) : null}

                    {section.note ? (
                      <p className="mt-stack max-w-measure text-micro leading-relaxed text-brand-subtle">
                        {section.note}
                      </p>
                    ) : null}

                    {section.quote ? (
                      <blockquote className="mt-stack max-w-measure border-l-2 border-brand-accent pl-5 text-lead font-medium text-brand-text">
                        {section.quote}
                      </blockquote>
                    ) : null}
                  </FadeIn>
                </section>
              ))}

              {gallery && gallery.length > 0 ? (
                <section className="mt-block border-t border-brand-hairline pt-block">
                  <FadeIn>
                    <SectionHead slot={slot} id="belege">{galleryTitle ?? 'Belege & Screenshots'}</SectionHead>
                    {galleryIntro ? (
                      <p className="max-w-measure text-body text-brand-muted">{galleryIntro}</p>
                    ) : null}

                    <div className="mt-stack grid gap-6 sm:grid-cols-2">
                      {gallery.map((asset) => (
                        <figure key={asset.src} className="rounded-card border border-brand-line bg-white p-3">
                          <img
                            src={asset.src}
                            alt={asset.alt}
                            className="w-full rounded-[0.5rem]"
                            loading="lazy"
                            decoding="async"
                          />
                          {asset.caption ? (
                            <figcaption className="px-1 pb-1 pt-3 text-micro leading-relaxed text-brand-subtle">
                              {asset.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                    </div>
                  </FadeIn>
                </section>
              ) : null}

              {faqs.length > 0 ? (
                <section className="mt-block border-t border-brand-hairline pt-block">
                  <FadeIn>
                    <SectionHead slot={slot} id="faq">{faqTitle}</SectionHead>
                    <div className="max-w-measure divide-y divide-brand-hairline border-y border-brand-hairline">
                      {faqs.map((faq, index) => (
                        <div key={faq.q} className="flex flex-col gap-y-2 py-6 sm:flex-row">
                          {/* Same slot and same accent-ink as every other ordinal
                              in the article. This one was brand-subtle, so the
                              FAQ index sat at a different weight and a different
                              indent from the step and card sub-numbers. */}
                          <p className={`${slot} shrink-0 text-meta font-semibold text-brand-accent-ink`}>
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <div className="min-w-0">
                            <h3 className="mb-2 text-lead font-semibold text-brand-text">{faq.q}</h3>
                            <p className="text-meta leading-relaxed text-brand-muted">{faq.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </section>
              ) : null}

              {sources && sources.length > 0 ? (
                <section className="mt-block border-t border-brand-hairline pt-block">
                  <FadeIn>
                    <SectionHead slot={slot} id="quellen">{sourcesTitle}</SectionHead>
                    <ol className="max-w-measure divide-y divide-brand-hairline border-y border-brand-hairline">
                      {sources.map((source, index) => (
                        <li
                          key={source.label}
                          className="flex flex-col gap-y-1 py-4 sm:flex-row"
                        >
                          <span className={`${slot} shrink-0 text-micro font-semibold text-brand-accent-ink`}>
                            [{index + 1}]
                          </span>
                          <span className="min-w-0 text-micro leading-relaxed text-brand-muted">
                            <strong className="font-semibold text-brand-text">{source.label}:</strong> {source.text}
                            {source.href ? (
                              <>
                                {' '}
                                <a
                                  href={source.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="break-words text-brand-accent-ink underline underline-offset-2"
                                >
                                  Quelle
                                </a>
                              </>
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </FadeIn>
                </section>
              ) : null}

              {relatedArticles && relatedArticles.length > 0 ? (
                <section className="mt-block border-t border-brand-hairline pt-block">
                  <FadeIn>
                    <SectionHead slot={slot} id="weiterlesen">{relatedTitle}</SectionHead>
                    <ul className="grid border-t border-brand-hairline sm:grid-cols-2 sm:gap-x-10">
                      {relatedArticles.map((article) => (
                        <li key={article.href} className="border-b border-brand-hairline">
                          <a href={article.href} className="group block py-4">
                            <p className="mb-1 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                              {article.tag}
                            </p>
                            <h3 className="flex items-baseline gap-2 text-meta font-semibold text-brand-text group-hover:text-brand-accent-ink">
                              {article.title}
                              <span
                                aria-hidden="true"
                                className="text-brand-accent-ink transition-transform group-hover:translate-x-0.5"
                              >
                                &rarr;
                              </span>
                            </h3>
                            <p className="mt-1 text-micro leading-snug text-brand-subtle">{article.description}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </section>
              ) : null}

              <section className="mt-block">
                <FadeIn>
                  <div className="relative overflow-hidden rounded-section bg-brand-night p-8 text-white md:p-12">
                    <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-accent/10 blur-[100px]" />
                    <div className="relative z-10">
                      {/* Same mobile step-down as every other H2, and max-w-narrow
                          (544px) instead of the old max-w-[24ch]: display type
                          keeps a shorter measure than the body copy under it,
                          which is max-w-measure. */}
                      <h2 className="mb-4 max-w-narrow text-subheading font-semibold sm:text-heading">
                        {ctaTitle}
                      </h2>
                      <p className="mb-8 max-w-measure text-body text-white/80">{ctaText}</p>
                      <Button href={ctaHref} primary text={ctaLabel} />
                    </div>
                  </div>
                </FadeIn>
              </section>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-rule">
        <Footer />
      </div>
    </div>
  );
}

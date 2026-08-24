import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { DataChart, type DataChartProps } from '@/components/ui/DataChart';
import { CitationChart, type CitationChartData } from '@/components/hamburg/CitationChart';
import { SectionChips, SectionRail } from '@/components/hamburg/SectionNav';

/* ==================================================================== *
 *  SERVER COMPONENT. No hooks, no browser APIs, no 'use client'.        *
 *  The one interactive thing on the page, the "you are here" marker of  *
 *  the two navigations, lives in SectionNav.tsx. Keeping 'use client'   *
 *  here dragged DataChart, a deliberately hook-free HTML-and-CSS chart, *
 *  into the client bundle of all six Hamburg pages.                     *
 * ==================================================================== */

/** The reading column, in one place.
 *
 *  max-w-measure (752px) cannot be it: the body grid is
 *  1088 article - 2x48 gutter - 224 rail - 64 gap = 704, so a 752 cap never
 *  binds from lg up and only bound between about 832 and 1023 CSS px. That
 *  gave the page two measures either side of a breakpoint. 44rem IS 704,
 *  so hero and body now share one measure at every viewport, and the rail
 *  holds one x position from the breadcrumb to the footer. */
const MEASURE = 'max-w-[44rem]';

/** Hero and body use the same two tracks, so the right-hand rail cannot jog at
 *  the seam between them. It used to: the hero reserved 20rem for a photo and
 *  started its second column 96px to the left of the table of contents. */
const TRACKS = 'lg:grid-cols-[minmax(0,1fr)_var(--container-toc)] lg:gap-rule lg:items-start';

/** Left inset for the two ruled callouts, chosen so their first glyph lands on
 *  the same x as the text inside the Kurzfassung card: 24px of padding on a
 *  phone and 32px from md, plus the card's 1px border, minus the 2px accent
 *  rule. Without the correction the two callouts and the card sat 1px and 17px
 *  apart, which is exactly the kind of near-miss that makes a page look untidy
 *  without looking broken. */
const FRAME_INSET = 'pl-[1.4375rem] md:pl-[1.9375rem]';

type FAQItem = {
  q: string;
  a: string;
};

type CardItem = {
  title: string;
  text: string;
};

type RelatedLink = {
  title: string;
  description: string;
  href: string;
  tag: string;
};

/** A hard, checkable number for the hero rail. Keep it to facts that exist on
 *  another page of this site, so a visitor can verify them. */
type Fact = {
  label: string;
  value: string;
  href?: string;
};

/** The dense comparison table. This is the one block the Stripe guide beats a
 *  card grid with, so it is a first-class prop rather than one-off markup:
 *  each of the six /hamburg pages can pass its own matrix. */
type Comparison = {
  heading: string;
  navLabel: string;
  intro?: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

type Figure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  href?: string;
  linkLabel?: string;
};

/** A statement set in the page's own type, used where a figure would otherwise
 *  sit. Sharp at every device pixel ratio, and the only honest option when
 *  there is no first-party dataset to plot. */
type Note = { label: string; statement: string; text?: string };

type LocalIntentTemplateProps = {
  canonicalPath: string;
  title: string;
  description: string;
  eyebrow: string;
  summaryItems: string[];
  painPoints: string[];
  serviceCards: CardItem[];
  eeatCards: CardItem[];
  fitBullets: string[];
  processCards: CardItem[];
  faqItems: FAQItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
  /** Fills the hero's second track, the same 224px column the table of
   *  contents occupies further down. This slot used to hold a landmark photo:
   *  a 684px raster shown at 943px between 768 and 1023 CSS px, captioned with
   *  a citation number that had nothing to do with the Elbphilharmonie. The
   *  slot has a job now, and three checkable numbers do it. */
  facts?: Fact[];
  comparison?: Comparison;
  /** Purpose-drawn chart for the proof slot, drawn with the site-wide
   *  primitive. Takes precedence over proofChart and proofFigure. New pages
   *  should use this; proofChart stays for the pilot page, whose chart was
   *  built and judged before DataChart existed. */
  proofData?: DataChartProps;
  /** Purpose-drawn chart for the proof slot. Takes precedence over
   *  proofFigure, so no page has to ship a third-party dashboard screenshot. */
  proofChart?: CitationChartData;
  proofFigure?: Figure;
  /** Typographic anchor for the proof slot. Used INSTEAD of a chart when no
   *  honest first-party dataset exists for this platform: a chart slot filled
   *  with estimates would be a fabrication, so the page states in type what it
   *  can prove and what it cannot. */
  proofNote?: Note;
  /** Typographic close for the Passung section. Replaces the decorative photo
   *  band that used to sit here: it was a 1024x256 raster shown at 704x176, so
   *  1,45x on a retina screen, and it was the only photography left in the
   *  body. A statement in the page's own type is sharp at every DPR. */
  fitNote?: Note;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  /** Shown in the sticky rail. Both already appear in the site's JSON-LD. */
  contactPhone?: string;
  contactNote?: string;
};

export function LocalIntentTemplate({
  canonicalPath,
  title,
  description,
  eyebrow,
  summaryItems,
  painPoints,
  serviceCards,
  eeatCards,
  fitBullets,
  processCards,
  faqItems,
  relatedLinks,
  ctaTitle,
  ctaText,
  ctaHref,
  ctaLabel,
  facts,
  comparison,
  proofData,
  proofChart,
  proofFigure,
  proofNote,
  fitNote,
  secondaryCtaHref,
  secondaryCtaLabel,
  contactPhone,
  contactNote,
}: LocalIntentTemplateProps) {
  const canonicalUrl = `https://aiseo.hamburg${canonicalPath}`;
  const hasFacts = Boolean(facts && facts.length > 0);

  /* One ordered list drives the numbering, the anchors and the sticky rail, so
     a sibling page that passes no comparison table still gets 1..6 without a
     gap. */
  const sections = [
    {
      key: 'probleme',
      navLabel: 'Probleme',
      heading: 'Welche Probleme diese Leistung für Hamburger Unternehmen löst',
    },
    {
      key: 'leistung',
      navLabel: 'Leistung',
      heading: 'Was ich in dieser Leistung konkret mache',
    },
    ...(comparison
      ? [{ key: 'systeme', navLabel: comparison.navLabel, heading: comparison.heading }]
      : []),
    {
      key: 'belege',
      navLabel: 'Belege',
      heading: 'Warum dir Google, ChatGPT oder Perplexity diese Seite abkaufen sollten',
    },
    {
      key: 'passung',
      navLabel: 'Passung',
      heading: 'Für wen sich das besonders lohnt',
    },
    {
      key: 'ablauf',
      navLabel: 'Ablauf',
      heading: 'So läuft die Zusammenarbeit ab',
    },
    { key: 'faq', navLabel: 'FAQ', heading: 'FAQ' },
  ];

  const num = (key: string) => sections.findIndex((s) => s.key === key) + 1;
  const heading = (key: string) => sections.find((s) => s.key === key)!.heading;
  const navSections = sections.map(({ key, navLabel }) => ({ key, navLabel }));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    provider: {
      '@id': 'https://aiseo.hamburg/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hamburg',
    },
    serviceType: title,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
      { '@type': 'ListItem', position: 2, name: 'Hamburg', item: 'https://aiseo.hamburg/hamburg' },
      { '@type': 'ListItem', position: 3, name: eyebrow },
    ],
  };

  /* overflow-x-clip, not overflow-hidden: `hidden` turns this div into the
     scroll container and the sticky rail below would never stick. */
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* ---------------- HERO: prose column plus the numbers rail ------- */}
        <section className="border-b border-brand-line bg-brand-surface">
          <div className="mx-auto max-w-article px-6 pt-28 pb-stack md:px-10 md:pt-32 sm:pb-block lg:px-12">
            <div className={`grid gap-stack ${hasFacts ? TRACKS : ''}`}>
              <div className={MEASURE}>
                <nav aria-label="Breadcrumb" className="text-micro text-brand-subtle">
                  <ol className="flex flex-wrap items-center gap-1.5">
                    <li>
                      <a href="/" className="transition-colors hover:text-brand-accent-ink">
                        Startseite
                      </a>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <a href="/hamburg" className="transition-colors hover:text-brand-accent-ink">
                        Hamburg
                      </a>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="font-medium text-brand-text">{eyebrow}</li>
                  </ol>
                </nav>

                <p className="mt-stack text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                  {eyebrow}
                </p>
                <h1 className="mt-4 text-3xl font-semibold tracking-heading text-brand-text sm:text-[2.5rem] sm:leading-[1.1] lg:text-title">
                  {title}
                </h1>
                <p className="mt-flow text-lead text-brand-muted">{description}</p>

                <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-4">
                  <Button href={ctaHref} primary text={ctaLabel} />
                  {secondaryCtaHref && secondaryCtaLabel ? (
                    <a
                      href={secondaryCtaHref}
                      className="text-meta font-medium text-brand-accent-ink underline decoration-brand-accent/40 decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                    >
                      {secondaryCtaLabel}
                    </a>
                  ) : null}
                </div>
              </div>

              {/* The numbers rail. Three cells across on a phone, one column of
                  three in the hero's second track from lg up, where it starts
                  at exactly the x of the table of contents below it. */}
              {hasFacts ? (
                <dl className="grid gap-px overflow-hidden rounded-card border border-brand-line bg-brand-line sm:grid-cols-3 lg:grid-cols-1">
                  {facts!.map((fact) => (
                    <div key={fact.label} className="bg-brand-bg px-4 py-3.5 sm:px-5 sm:py-4">
                      <dt className="text-micro uppercase tracking-eyebrow text-brand-subtle">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-meta font-medium text-brand-text">
                        {fact.href ? (
                          <a
                            href={fact.href}
                            className="underline decoration-brand-line decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                          >
                            {fact.value}
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          </div>
        </section>

        {/* ---------------- BODY: prose column plus sticky rail ------------ */}
        <div className="mx-auto max-w-article px-6 pb-block md:px-10 sm:pb-section lg:px-12">
          <SectionChips sections={navSections} />

          <div className={`grid pt-block sm:pt-rule ${TRACKS}`}>
            {/* min-w-0 is load-bearing: a grid item defaults to min-width:auto,
                so a wide child would stretch this whole column and silently
                clip every section to the right of the viewport. */}
            <div className={`relative isolate min-w-0 ${MEASURE}`}>
              {/* Continuous column rules, the bar's dotted-gutter trick in our
                  own hairline: drawn once for the full body height instead of
                  per cell, so the shell reads as one grid the whole way down
                  and not only where a section happens to have a 2-up. One sits
                  at the centre of the reading column (where every 2-up
                  divides), one in the middle of the 64px gutter to the rail.
                  isolate + -z-10 keeps them behind every background and every
                  glyph, so they read as paper, not as content. */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-1/2 -z-10 hidden w-px bg-brand-hairline lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-[calc(100%+2rem)] -z-10 hidden w-px bg-brand-hairline lg:block"
              />

              {/* Kurzfassung */}
              <FadeIn>
                <section className="relative rounded-card border border-brand-line bg-brand-surface p-6 md:p-stack">
                  <h2 className="text-subheading font-semibold tracking-heading text-brand-text">
                    Warum diese Seite Geld verdienen kann und nicht nur gut aussieht
                  </h2>
                  <ol className="mt-flow grid gap-4 sm:grid-cols-2">
                    {summaryItems.map((item, index) => (
                      <li key={item} className="flex gap-3 border-t border-brand-line pt-4">
                        <span className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                          0{index + 1}
                        </span>
                        <span className="text-meta text-brand-muted">{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </FadeIn>

              {/* 1. Probleme. The numeral is an eyebrow above the paragraph,
                  exactly like 2.1 and 4.1, so every sub-number on the page has
                  one size, one colour and one x position. It used to sit in a
                  32px slot beside the text in brand-edge, which is a 1,68:1
                  rule colour: the numbers read as ghosts and pushed the prose
                  52px off the rail. */}
              <FadeIn>
                <section id="probleme" className="scroll-mt-navbar pt-block sm:pt-rule">
                  <SectionHead n={num('probleme')} heading={heading('probleme')} />
                  <ol className="mt-flow">
                    {painPoints.map((item, index) => (
                      <li
                        key={item}
                        className="border-t border-brand-hairline py-flow last:border-b"
                      >
                        <p className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                          {num('probleme')}.{index + 1}
                        </p>
                        <p className="mt-2 text-body text-brand-muted">{item}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              </FadeIn>

              {/* 2. Leistung */}
              <FadeIn>
                <section id="leistung" className="scroll-mt-navbar pt-block sm:pt-rule">
                  <SectionHead n={num('leistung')} heading={heading('leistung')} />
                  <div className="mt-flow grid gap-x-stack sm:grid-cols-2">
                    {serviceCards.map((card, index) => (
                      <div key={card.title} className="border-t border-brand-hairline py-flow">
                        <p className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                          {num('leistung')}.{index + 1}
                        </p>
                        <h3 className="mt-2 text-meta font-semibold text-brand-text">{card.title}</h3>
                        <p className="mt-2 text-meta text-brand-muted">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

              {/* 3. Dense comparison table, the block the bar wins with */}
              {comparison ? (
                <FadeIn>
                  <section id="systeme" className="scroll-mt-navbar pt-block sm:pt-rule">
                    <SectionHead n={num('systeme')} heading={comparison.heading} />
                    {comparison.intro ? (
                      <p className="mt-flow text-body text-brand-muted">{comparison.intro}</p>
                    ) : null}
                    {/* One table, two shapes.
                        From lg it is a real table with automatic column widths,
                        so a prose column gets the space it needs and a column
                        of the word "Tage" does not hold 192px hostage. It used
                        to be table-fixed at 127/192/192/192.
                        Below lg every row becomes a labelled definition block:
                        the row header is the heading of the block, then one
                        labelled line per remaining column. The column head is
                        carried in data-label and printed by the cell itself, so
                        nothing is duplicated in the DOM. The old version
                        scrolled sideways, and at 390px that hid two of four
                        columns behind a gesture with no affordance.
                        Column 0 gets no label: it is the block heading, and
                        printing "System" above the word "ChatGPT" was a second
                        eyebrow with no information in it.
                        The explicit ARIA roles are the price of the reflow:
                        display:block strips the native table semantics, so
                        without them a screen reader loses the grid below lg. */}
                    <table
                      role="table"
                      className="mt-flow block w-full border-collapse text-left lg:table"
                    >
                      <thead role="rowgroup" className="hidden lg:table-header-group">
                        <tr role="row" className="border-b border-brand-edge">
                          {comparison.columns.map((col, colIndex) => (
                            <th
                              key={col}
                              role="columnheader"
                              scope="col"
                              className={`pb-3 align-bottom text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle ${
                                colIndex === comparison.columns.length - 1 ? '' : 'lg:pr-4'
                              }`}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody role="rowgroup" className="block lg:table-row-group">
                        {comparison.rows.map((row) => (
                          <tr
                            key={row[0]}
                            role="row"
                            className="block border-t border-brand-line py-flow last:border-b lg:table-row lg:border-t-0 lg:border-b lg:border-brand-hairline lg:py-0 lg:align-top"
                          >
                            {row.map((cell, cellIndex) => {
                              const gap =
                                cellIndex === row.length - 1 ? '' : 'mb-3 lg:mb-0 lg:pr-4';
                              if (cellIndex === 0) {
                                return (
                                  <th
                                    key={`${row[0]}-${cellIndex}`}
                                    role="rowheader"
                                    scope="row"
                                    className={`block text-meta font-semibold text-brand-text lg:table-cell lg:py-4 lg:align-top lg:text-micro ${gap}`}
                                  >
                                    {cell}
                                  </th>
                                );
                              }
                              return (
                                <td
                                  key={`${row[0]}-${cellIndex}`}
                                  role="cell"
                                  data-label={comparison.columns[cellIndex] ?? ''}
                                  className={`block text-micro text-brand-muted before:mb-0.5 before:block before:text-micro before:font-semibold before:uppercase before:tracking-eyebrow before:text-brand-subtle before:content-[attr(data-label)] lg:table-cell lg:py-4 lg:align-top lg:before:content-none ${gap}`}
                                >
                                  {cell}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {comparison.note ? (
                      <p className={`mt-flow border-l-2 border-brand-accent text-meta text-brand-muted ${FRAME_INSET}`}>
                        {comparison.note}
                      </p>
                    ) : null}
                  </section>
                </FadeIn>
              ) : null}

              {/* 4. Belege, with the purpose-drawn citation chart as the
                  mid-page figure. A dashboard screenshot used to sit here and
                  dragged foreign UI chrome into the page. */}
              <FadeIn>
                <section id="belege" className="scroll-mt-navbar pt-block sm:pt-rule">
                  <SectionHead n={num('belege')} heading={heading('belege')} />

                  {proofData ? <DataChart {...proofData} /> : null}

                  {!proofData && proofChart ? <CitationChart data={proofChart} /> : null}

                  {proofNote ? <NoteBlock note={proofNote} /> : null}

                  {!proofData && !proofChart && proofFigure ? (
                    <figure className="mt-flow">
                      <img
                        src={proofFigure.src}
                        alt={proofFigure.alt}
                        width={proofFigure.width}
                        height={proofFigure.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-card border border-brand-line bg-white"
                      />
                      <figcaption className="mt-3 text-micro text-brand-subtle">
                        {proofFigure.caption}
                        {proofFigure.href && proofFigure.linkLabel ? (
                          <>
                            {' '}
                            <a
                              href={proofFigure.href}
                              className="text-brand-accent-ink underline decoration-1 underline-offset-4"
                            >
                              {proofFigure.linkLabel}
                            </a>
                          </>
                        ) : null}
                      </figcaption>
                    </figure>
                  ) : null}

                  <div className="mt-flow grid gap-x-stack sm:grid-cols-2">
                    {eeatCards.map((card, index) => (
                      <div key={card.title} className="border-t border-brand-hairline py-flow">
                        <p className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                          {num('belege')}.{index + 1}
                        </p>
                        <h3 className="mt-2 text-meta font-semibold text-brand-text">{card.title}</h3>
                        <p className="mt-2 text-meta text-brand-muted">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

              {/* 5. Passung. The check hangs in the container gutter from lg
                  up, so the paragraph starts on the same rail as every other
                  line of prose on the page instead of 29px to the right. */}
              <FadeIn>
                <section id="passung" className="scroll-mt-navbar pt-block sm:pt-rule">
                  <SectionHead n={num('passung')} heading={heading('passung')} />
                  <ul className="mt-flow">
                    {fitBullets.map((item) => (
                      <li
                        key={item}
                        className="relative border-t border-brand-hairline py-flow last:border-b"
                      >
                        <p className="text-body text-brand-muted">
                          <span
                            aria-hidden="true"
                            className="mr-2 font-bold text-brand-accent-ink lg:absolute lg:top-flow lg:right-full lg:mt-1 lg:mr-0 lg:pr-4 lg:text-meta"
                          >
                            &#10003;
                          </span>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* The visual close of this section, in type instead of in a
                      photo band. Same left accent rule as the comparison note,
                      one step up in size, so it reads as the section's verdict
                      and not as a fourth bullet. */}
                  {fitNote ? <NoteBlock note={fitNote} /> : null}
                </section>
              </FadeIn>

              {/* 6. Ablauf */}
              <FadeIn>
                <section id="ablauf" className="scroll-mt-navbar pt-block sm:pt-rule">
                  <SectionHead n={num('ablauf')} heading={heading('ablauf')} />
                  <ol className="mt-flow grid border-t border-brand-edge sm:grid-cols-3 sm:divide-x sm:divide-brand-hairline">
                    {processCards.map((card, index) => (
                      <li
                        key={card.title}
                        className="border-b border-brand-hairline py-flow sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0"
                      >
                        <p className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                          Schritt {index + 1}
                        </p>
                        <h3 className="mt-2 text-meta font-semibold text-brand-text">{card.title}</h3>
                        <p className="mt-2 text-meta text-brand-muted">{card.text}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              </FadeIn>

              {/* 7. FAQ */}
              <FadeIn>
                <section id="faq" className="scroll-mt-navbar pt-block sm:pt-rule">
                  <SectionHead n={num('faq')} heading="FAQ" />
                  <dl className="mt-flow">
                    {faqItems.map((item) => (
                      <div
                        key={item.q}
                        className="grid gap-2 border-t border-brand-hairline py-flow last:border-b sm:grid-cols-2 sm:gap-x-stack"
                      >
                        <dt>
                          <h3 className="text-meta font-semibold text-brand-text">{item.q}</h3>
                        </dt>
                        <dd className="text-meta text-brand-muted">{item.a}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </FadeIn>

              {/* Weitere Seiten. The tag sits in a fixed 9rem track from lg up
                  and on its own line below that, and it may wrap or break
                  inside the track. "Kernleistung" is 132px of uppercase
                  tracking: in the old 96px shrink-0 slot it overprinted the
                  headline beside it by 20px. */}
              <FadeIn>
                <section className="pt-block sm:pt-rule">
                  <h2 className="text-heading font-semibold tracking-heading text-brand-text">
                    Weitere Seiten in diesem Hamburg-Cluster
                  </h2>
                  <div className="mt-flow border-t border-brand-edge">
                    {relatedLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-brand-hairline py-flow transition-colors hover:bg-brand-surface lg:grid-cols-[9rem_minmax(0,1fr)_auto]"
                      >
                        <span className="col-start-1 row-start-1 text-micro font-semibold uppercase tracking-eyebrow break-words text-brand-accent-ink">
                          {link.tag}
                        </span>
                        <span className="col-start-1 row-start-2 min-w-0 lg:col-start-2 lg:row-start-1">
                          <h3 className="text-meta font-semibold text-brand-text transition-colors group-hover:text-brand-accent-ink">
                            {link.title}
                          </h3>
                          <span className="mt-1 block text-micro text-brand-muted">
                            {link.description}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="col-start-2 row-start-1 text-micro text-brand-accent-ink transition-transform group-hover:translate-x-1 lg:col-start-3"
                        >
                          &rarr;
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              </FadeIn>
            </div>

            {/* Sticky rail. Deliberately outside FadeIn: .reveal.active keeps a
                transform, which would make this stick to its own wrapper. */}
            <aside className="hidden lg:block">
              <div className="sticky top-[7rem]">
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Auf dieser Seite
                </p>
                <SectionRail sections={navSections} />

                <div className="mt-stack rounded-card border border-brand-line bg-brand-surface p-5">
                  <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                    Direkt in Hamburg
                  </p>
                  {contactNote ? (
                    <p className="mt-2.5 text-micro text-brand-muted">{contactNote}</p>
                  ) : null}
                  {contactPhone ? (
                    <a
                      href={`tel:${contactPhone.replace(/[^+\d]/g, '')}`}
                      className="mt-3 block text-meta font-medium text-brand-text underline decoration-brand-line decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                    >
                      {contactPhone}
                    </a>
                  ) : null}
                  <a
                    href={ctaHref}
                    className="mt-4 flex items-center justify-between gap-2 rounded-full bg-brand-accent-deep px-4 py-2.5 text-micro font-medium text-white transition-colors hover:bg-brand-accent-ink"
                  >
                    {ctaLabel}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ---------------- CTA ------------------------------------------- */}
        <section className="bg-brand-night text-white">
          <div className="mx-auto max-w-article px-6 py-block md:px-10 sm:py-section lg:px-12">
            <div className="grid gap-stack lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-rule">
              <h2 className="text-2xl font-semibold tracking-heading sm:text-heading">{ctaTitle}</h2>
              <div>
                <p className="text-meta text-white/70">{ctaText}</p>
                <div className="mt-flow">
                  <Button href={ctaHref} primary text={ctaLabel} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/** The typographic anchor. Same left accent rule as the comparison note, one
 *  step up in size, so it reads as the section's verdict and not as another
 *  bullet. text-lead on a phone, because text-subheading is the same 24px as
 *  the section H2 there and a verdict must not shout as loud as its heading. */
function NoteBlock({ note }: { note: Note }) {
  return (
    <aside
      className={`mt-stack border-l-2 border-brand-accent-deep bg-brand-surface py-flow pr-6 md:pr-stack ${FRAME_INSET}`}
    >
      <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
        {note.label}
      </p>
      <p className="mt-3 text-lead font-semibold tracking-heading text-brand-text sm:text-subheading">
        {note.statement}
      </p>
      {note.text ? <p className="mt-4 text-meta text-brand-muted">{note.text}</p> : null}
    </aside>
  );
}

/** Section number and heading.
 *
 *  From lg the numeral hangs in the container gutter, so the heading starts on
 *  the same rail as the prose under it. Below lg, where there is no gutter to
 *  hang in, it becomes a small accent numeral above the heading, in the same
 *  key as the 2.1 and 4.1 eyebrows.
 *
 *  Both shapes exist for one reason: the numeral used to sit in the text flow,
 *  and General Sans has no tabular figures, so an in-flow "1." and "4." are
 *  not the same width and the headings started at eight slightly different x
 *  positions down the page. */
function SectionHead({ n, heading }: { n: number; heading: string }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="block text-micro font-semibold tracking-eyebrow text-brand-accent-ink lg:absolute lg:top-0 lg:right-full lg:pr-2.5 lg:text-heading lg:tracking-heading"
      >
        {n}.
      </span>
      <h2 className="mt-1.5 text-2xl font-semibold tracking-heading text-brand-text sm:text-heading lg:mt-0">
        {heading}
      </h2>
    </div>
  );
}

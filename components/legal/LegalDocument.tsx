import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

/* ---------------------------------------------------------------------------
   Shared shell for the two long legal documents (/datenschutz, /agb).

   Both were 13 numbered sections stacked in one 800px column at 14px, with a
   single grey ink and no way to jump. Not a word of either document changes
   here. What changes is how it reads:

   - a section index that sticks beside the text on desktop and collapses into
     a native <details> on phones. Plain anchors, no JS: these pages get
     readable typography and nothing else;
   - the same 14rem index plus hairline-separated reading column as
     ArticleTemplate, so a legal page and an article sit on one grid;
   - 15px body on a 696px column, which is about 93 characters per line,
     instead of 14px on 800px, which was about 114. Legal boilerplate is fine
     print and should read as fine print, but not at 114 characters wide;
   - three inks: brand-text for headings, brand-muted for the text,
     brand-subtle for numbers and meta.

   These are server components. Both pages were marked 'use client' and had no
   state, no effect and no handler between them.
--------------------------------------------------------------------------- */

export type LegalSection = {
  /** Rendered as "{n}. {title}", which is exactly how the headings read today. */
  n: number;
  title: string;
  id: string;
  body: React.ReactNode;
};

export type LegalDocumentProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  /** The line under the H1, verbatim from the document. */
  subtitle: string;
  /** The document's own "Stand" sentence, if it has one. */
  stand?: string;
  sections: LegalSection[];
};

export function LegalDocument({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  stand,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main>
        {/* ---------------- HERO ------------------------------------------ */}
        <section className="border-b border-brand-line bg-brand-surface">
          <div className="mx-auto max-w-article px-6 pt-28 pb-stack md:px-10 md:pt-32 lg:px-12">
            <nav aria-label="Breadcrumb" className="text-micro text-brand-subtle">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <a href="/" className="transition-colors hover:text-brand-accent-ink">
                    Startseite
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-brand-text">{breadcrumb}</li>
              </ol>
            </nav>

            <p className="mt-stack text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-measure text-3xl font-semibold tracking-heading text-brand-text sm:text-[2.5rem] sm:leading-[1.1]">
              {title}
            </h1>
            <p className="mt-4 max-w-measure text-meta text-brand-subtle">{subtitle}</p>
            {stand ? (
              <p className="mt-1.5 text-meta text-brand-subtle">{stand}</p>
            ) : null}
          </div>
        </section>

        {/* ---------------- INDEX + DOCUMENT ------------------------------ */}
        <div className="mx-auto max-w-article px-6 pt-stack pb-block md:px-10 sm:pb-section lg:px-12">
          <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-8">
            <div>
              <div className="hidden lg:sticky lg:top-28 lg:block">
                <p className="mb-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Inhalt
                </p>
                <nav aria-label="Abschnitte">
                  <SectionList sections={sections} />
                </nav>
              </div>

              <details className="rounded-card border border-brand-line bg-brand-surface lg:hidden">
                <summary className="cursor-pointer px-5 py-4 text-meta font-semibold text-brand-text">
                  Inhalt, {sections.length} Abschnitte
                </summary>
                <nav aria-label="Abschnitte" className="border-t border-brand-hairline px-5 py-4">
                  <SectionList sections={sections} />
                </nav>
              </details>
            </div>

            <div className="mt-stack lg:mt-0 lg:border-l lg:border-brand-hairline lg:pl-10">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={
                    index === 0
                      ? 'scroll-mt-navbar'
                      : 'scroll-mt-navbar mt-stack border-t border-brand-hairline pt-stack'
                  }
                >
                  <h2 className="text-subheading font-semibold tracking-heading text-brand-text">
                    <span className="tabular-nums text-brand-accent-ink">{section.n}.</span>{' '}
                    {section.title}
                  </h2>
                  <div className="mt-4">{section.body}</div>
                </section>
              ))}

              <div className="mt-stack border-t border-brand-edge pt-flow">
                <a
                  href="/"
                  className="text-meta font-medium text-brand-text underline decoration-brand-edge decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                >
                  Zur Startseite
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SectionList({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-2">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-1 text-micro text-brand-muted transition-colors hover:text-brand-accent-ink"
          >
            <span className="tabular-nums text-brand-subtle">{section.n}.</span>
            <span>{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

/* ---------------------------------------------------------------------------
   Numbered clauses, as the AGB uses them.

   The "(1)" markers used to sit inline at the start of each paragraph, so the
   text started at a different x position depending on whether the marker was
   there. They now hang in their own 2.5rem column, which is the same hanging
   gutter the rest of the site uses for figure labels.
--------------------------------------------------------------------------- */
export type Clause = { text: string; items?: string[] };

export function Clauses({ clauses }: { clauses: Clause[] }) {
  return (
    <div className="space-y-4">
      {clauses.map((clause, index) => (
        <div
          key={clause.text.slice(0, 48)}
          className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline"
        >
          <span className="text-meta tabular-nums text-brand-subtle">({index + 1})</span>
          <div>
            <p className="text-meta text-brand-muted">{clause.text}</p>
            {clause.items ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-meta text-brand-muted marker:text-brand-subtle">
                {clause.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

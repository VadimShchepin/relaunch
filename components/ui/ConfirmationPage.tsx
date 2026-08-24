import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CheckIcon } from '@/components/ui/Icons';

/* ---------------------------------------------------------------------------
   Shared shell for the three noindex confirmation pages
   (/contact/danke, /termin/danke, /newsletter/confirmed).

   All three were centre-aligned columns with an 80px pale green disc, a 60px
   display heading and a white card, floated in a min-h-screen flex box. Two of
   them also shipped a client bundle to render static text.

   They are on the site's pattern now: the same bordered brand-surface header
   band, left-aligned, eyebrow plus H1 plus lead, and a 20rem gutter that holds
   what happens next as a numbered list with the numerals hanging in their own
   column. Nothing is invented and nothing is centred for drama.
--------------------------------------------------------------------------- */

export type ConfirmationLink = { href: string; label: string; primary?: boolean };

export type ConfirmationPageProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Heading above the step list. Omitted when there are no steps. */
  stepsTitle?: string;
  steps?: string[];
  links: ConfirmationLink[];
};

export function ConfirmationPage({
  breadcrumb,
  eyebrow,
  title,
  lead,
  stepsTitle,
  steps = [],
  links,
}: ConfirmationPageProps) {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main>
        <section className="border-b border-brand-line bg-brand-surface">
          <div className="mx-auto max-w-article px-6 pt-28 pb-block md:px-10 md:pt-32 lg:px-12">
            <div className="grid gap-stack lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-rule">
              <div>
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

                <p className="mt-stack flex items-center gap-2 text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                  <span
                    aria-hidden="true"
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent-deep text-white"
                  >
                    <CheckIcon className="h-2.5 w-2.5" />
                  </span>
                  {eyebrow}
                </p>

                <h1 className="mt-4 max-w-measure text-3xl font-semibold tracking-heading text-brand-text sm:text-[2.5rem] sm:leading-[1.1]">
                  {title}
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">{lead}</p>

                <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-3">
                  {links.map((link) =>
                    link.primary ? (
                      <a
                        key={link.href}
                        href={link.href}
                        /* Dark pill, not the accent one: white on
                           brand-accent-deep is 4,25:1, which is under AA for
                           15px text. White on brand-text is 18,9:1. */
                        className="rounded-full bg-brand-text px-5 py-2.5 text-meta font-semibold text-white transition-colors hover:bg-brand-dark"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-meta font-medium text-brand-accent-ink underline decoration-brand-accent/40 decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              </div>

              {steps.length > 0 && stepsTitle ? (
                <div className="border-t border-brand-line pt-flow lg:border-l lg:border-t-0 lg:pl-stack lg:pt-0">
                  <h2 className="text-meta font-semibold text-brand-text">{stepsTitle}</h2>
                  <ol className="mt-3">
                    {steps.map((step, index) => (
                      <li
                        key={step}
                        className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-baseline border-t border-brand-hairline py-2.5 first:border-t-0 first:pt-0"
                      >
                        <span className="text-micro font-semibold tabular-nums text-brand-accent-ink">
                          {index + 1}
                        </span>
                        <span className="text-micro text-brand-muted">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

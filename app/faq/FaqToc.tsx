'use client';

import React, { useEffect, useState } from 'react';

/* ---------------------------------------------------------------------------
   Sticky index for /faq, with a real active-section state.

   Same interaction contract as the sticky TOC in components/wissen/
   ArticleTemplate.tsx (identical rootMargin, identical active styling), so the
   two long pages of the site behave the same way. It is a separate component
   only because /faq itself stays a server component: the questions, the answers
   and the FAQPage JSON-LD are all static, and only the highlight needs a
   browser.

   The rail lists the five groups, not the thirteen questions. Thirteen German
   question labels at text-micro need about 30 lines in a 224px rail, which is
   taller than the viewport and stops being an index. Five groups fit in one
   screen, and the numbering (1.1, 1.2, ...) inside the reading column carries
   the rest of the map.
--------------------------------------------------------------------------- */

export type TocGroup = { id: string; no: number; label: string; count: number };

export const FaqToc: React.FC<{ groups: TocGroup[] }> = ({ groups }) => {
  const [active, setActive] = useState<string>(groups[0]?.id ?? '');

  useEffect(() => {
    const nodes = groups
      .map((g) => document.getElementById(g.id))
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
  }, [groups]);

  const list = (
    <ol className="space-y-2.5">
      {groups.map((group) => {
        const isActive = active === group.id;
        return (
          <li key={group.id}>
            <a
              href={`#${group.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`flex gap-2 border-l-2 py-0.5 pl-3 text-micro leading-snug transition-colors ${
                isActive
                  ? 'border-brand-accent-deep font-semibold text-brand-text'
                  : 'border-transparent text-brand-subtle hover:border-brand-line hover:text-brand-text'
              }`}
            >
              <span className="shrink-0 tabular-nums">{group.no}.</span>
              <span>
                {group.label}
                <span className="text-brand-subtle"> ({group.count})</span>
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <div className="hidden lg:sticky lg:top-28 lg:block">
        <p className="mb-4 text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
          Themen
        </p>
        <nav aria-label="Inhaltsverzeichnis">{list}</nav>
        <a
          href="/termin"
          className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-accent-deep px-4 py-3 text-micro font-semibold text-white transition-colors hover:bg-brand-accent-ink"
        >
          Frage im Call klären
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <details className="rounded-card border border-brand-line bg-white lg:hidden">
        <summary className="cursor-pointer px-5 py-4 text-meta font-semibold text-brand-text">
          13 Fragen in {groups.length} Themen
        </summary>
        <nav aria-label="Inhaltsverzeichnis" className="border-t border-brand-hairline px-5 py-4">
          {list}
        </nav>
      </details>
    </>
  );
};

export default FaqToc;

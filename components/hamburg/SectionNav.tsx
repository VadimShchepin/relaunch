'use client';

import React, { useEffect, useState } from 'react';

/* ==================================================================== *
 *  SectionNav                                                          *
 *  --------------------------------------------------------------------*
 *  The ONLY interactive part of the /hamburg template: a "you are here" *
 *  marker for the two navigations, driven by an IntersectionObserver.   *
 *                                                                      *
 *  It lives in its own file so LocalIntentTemplate can stay a server    *
 *  component. When 'use client' sat on the template, every server-only  *
 *  primitive it imports (DataChart above all, which is deliberately     *
 *  hook-free HTML and CSS) was pulled into the client bundle of all six *
 *  Hamburg pages, and shipped a second time as hydration payload for    *
 *  markup that never changes after paint.                              *
 *                                                                      *
 *  Two mounts of the same hook, one per breakpoint, is deliberate: the  *
 *  chips and the rail sit in different places in the DOM, so a single   *
 *  shared provider would have to wrap the whole body and turn every     *
 *  section into a client child again. The observer costs one callback   *
 *  per section boundary.                                                *
 * ==================================================================== */

export type NavSection = { key: string; navLabel: string };

/** Which section the reader is in. '' until the first boundary is crossed. */
function useActiveSection(sections: NavSection[]): string {
  /* A string, not the array, so the effect does not re-run on every render
     just because the parent handed down a fresh array literal. */
  const sectionKeys = sections.map((s) => s.key).join(',');
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const keys = sectionKeys.split(',');
    const nodes = keys
      .map((key) => document.getElementById(key))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    /* The band is the top ~40% of the viewport below the fixed navbar. The
       first section inside it wins; if none is inside it (long tables, the
       final block), fall back to the last section that already passed. */
    const inBand = new Set<string>();
    const resolve = () => {
      const first = keys.find((key) => inBand.has(key));
      if (first) {
        setActiveSection(first);
        return;
      }
      let passed = '';
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= 160) passed = node.id;
      }
      setActiveSection(passed);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }
        resolve();
      },
      { rootMargin: '-160px 0px -60% 0px', threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionKeys]);

  return activeSection;
}

/** Mobile substitute for the sticky rail. It sticks for the whole body,
 *  because on a 10.500px phone page a table of contents that scrolls away
 *  after the hero is navigation nobody can reach. */
export function SectionChips({ sections }: { sections: NavSection[] }) {
  const activeSection = useActiveSection(sections);

  return (
    <nav
      aria-label="Abschnitte dieser Seite"
      className="sticky top-[4.5rem] z-30 -mx-6 border-b border-brand-line bg-brand-bg md:-mx-10 lg:hidden"
    >
      <div className="overflow-x-auto">
        <ul className="flex w-max gap-2 px-6 py-3 md:px-10">
          {sections.map((section, index) => {
            const active = activeSection === section.key;
            return (
              <li key={section.key}>
                <a
                  href={`#${section.key}`}
                  aria-current={active ? 'true' : undefined}
                  className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-micro transition-colors ${
                    active
                      ? 'border-brand-accent-deep bg-brand-accent/10 font-semibold text-brand-text'
                      : 'border-brand-line bg-brand-bg text-brand-subtle'
                  }`}
                >
                  <span className="font-semibold text-brand-accent-ink">{index + 1}</span>
                  {section.navLabel}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Fade mask, a sibling of the scroll box so it does not scroll away
          with the chips. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-bg via-brand-bg/80 to-transparent"
      />
    </nav>
  );
}

/** Desktop rail. The rail used to look identical at the top and the bottom of
 *  a 7.700px page, so a reader had a table of contents without a "you are
 *  here". */
export function SectionRail({ sections }: { sections: NavSection[] }) {
  const activeSection = useActiveSection(sections);

  return (
    <nav aria-label="Inhalt dieser Seite" className="mt-4 border-t border-brand-line">
      <ol>
        {sections.map((section, index) => {
          const active = activeSection === section.key;
          return (
            <li key={section.key} className="border-b border-brand-hairline">
              <a
                href={`#${section.key}`}
                aria-current={active ? 'true' : undefined}
                className={`flex gap-2.5 border-l-2 py-2.5 pl-2.5 text-micro transition-colors ${
                  active
                    ? 'border-brand-accent-deep bg-brand-surface font-semibold text-brand-text'
                    : 'border-transparent text-brand-subtle hover:border-brand-line hover:text-brand-text'
                }`}
              >
                <span
                  className={`tabular-nums ${active ? 'text-brand-accent-ink' : 'text-brand-subtle'}`}
                >
                  {index + 1}
                </span>
                <span>{section.navLabel}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

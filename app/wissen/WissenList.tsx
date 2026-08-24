'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Article, Topic } from './articles';
import {
  TOPICS,
  TOPIC_INTROS,
  formatArticleDate,
  groupedByTopic,
  latestArticleDate,
  topicId,
} from './articles';

type Filter = 'Alle' | Topic;

/* ---------------------------------------------------------------------------
   The /wissen hub.

   What it replaced: 50 identical white cards in one 900px column, 15.300px
   tall, 125 words per 1000px. No hierarchy, no grouping, and a filter that was
   the only way to make the page finite. A reader looking for "the Perplexity
   one" had to scroll past 49 cards that all looked the same.

   What it does instead, in the order a reader needs it:
     1. three recommended guides, so there is an entry point that is not
        "read the newest thing";
     2. a topic rail that sticks under the Navbar, so the taxonomy is reachable
        from anywhere on the page instead of only from the top;
     3. seven numbered topic groups, each with one sorting line, rendered as a
        dense index row (tag, title, summary, read time, date) rather than a
        card. Same row grammar as the /hamburg cluster index, so the two hubs
        read as one system.

   The three recommended guides appear a second time inside their own topic
   group. That is deliberate: the groups have to stay complete, otherwise
   filtering to Strategie would hide the best Strategie guide.

   What the rail is, exactly. It used to be seven buttons that filtered, while
   the seven section ids they correspond to were linked from nowhere: an index
   with no anchors and no active state, and a filter that moved the reader
   without telling them where. It is now one control with one meaning, "show me
   this topic":

     - every entry is a real anchor to its section, so /wissen#thema-technik
       works, is shareable, and still works with JavaScript off, because all
       seven groups are server rendered;
     - with JavaScript on, a click narrows the list to that topic and parks the
       reader at the top of the results. Filtering used to keep the raw scroll
       offset, so leaving at scrollY 3579 of an 8727px document landed at 1493
       of a 2393px one, which is the footer: no results in view at all;
     - while the full list is shown, the group currently under the header is
       marked (aria-current="location"), so the rail says where you are instead
       of only what you clicked.
--------------------------------------------------------------------------- */

/** Anchor target for "Alle", and the landing spot after every filter change. */
const INDEX_ID = 'guides';

/* The header is exactly --spacing-navbar tall and carries this id, so the
   scripted scrolling below reads the same number that the CSS uses for
   `sticky top-navbar` and `scroll-mt-navbar`. Hardcoding 88 here was how the
   two got 6px apart in the first place. */
function navbarHeight(): number {
  const bar = document.getElementById('site-navbar');
  return bar ? Math.round(bar.getBoundingClientRect().height) : 88;
}

export function WissenList({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState<Filter>('Alle');
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  // Bumped by every rail click, including a click on the topic that is already
  // selected, so the scroll effect fires even when `filter` does not change.
  const [jump, setJump] = useState(0);
  const indexTop = useRef<HTMLDivElement>(null);
  // A click gets an animated scroll, an incoming #thema-* link does not: a page
  // that animates on load reads as broken.
  const jumpBehavior = useRef<ScrollBehavior>('smooth');

  // Only show filter chips for topics that actually have articles.
  const availableTopics = useMemo(() => {
    const present = new Set(articles.map((a) => a.topic));
    return TOPICS.filter((t) => present.has(t));
  }, [articles]);

  const groups = useMemo(() => groupedByTopic(articles), [articles]);
  const visibleGroups = useMemo(
    () => (filter === 'Alle' ? groups : groups.filter((g) => g.topic === filter)),
    [groups, filter],
  );

  const featured = useMemo(() => articles.filter((a) => a.featured), [articles]);

  // "Neu" marks the most recent publishing batch. Tied to the registry rather
  // than to Date.now(), so server and client always agree and the flag cannot
  // quietly go stale on a page that is not rebuilt.
  const newest = useMemo(() => latestArticleDate(articles), [articles]);

  const filters: Filter[] = ['Alle', ...availableTopics];

  const selectTopic = (event: React.MouseEvent<HTMLAnchorElement>, next: Filter) => {
    // Middle click, cmd click and friends stay plain navigation.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    jumpBehavior.current = 'smooth';
    setFilter(next);
    setJump((n) => n + 1);
    const hash = next === 'Alle' ? `#${INDEX_ID}` : `#${topicId(next)}`;
    window.history.replaceState(null, '', hash);
  };

  // An incoming /wissen#thema-technik gets the same view a click on Technik
  // gives, so a shared anchor and a clicked one cannot disagree. Without JS the
  // browser's own jump lands on the section inside the full list, which is why
  // every group stays server rendered.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!hash) return;
    jumpBehavior.current = 'auto';
    // The browser's own jump happens before the fonts and the entry section
    // have settled, so on a zero height target it misses by about 110px. Redo
    // it once from the measured position.
    if (hash === INDEX_ID) {
      setJump((n) => n + 1);
      return;
    }
    const match = TOPICS.find((topic) => topicId(topic) === hash);
    if (!match || !articles.some((a) => a.topic === match)) return;
    setFilter(match);
    setJump((n) => n + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Runs after the shorter list has been laid out, so the measurement is taken
  // on the document the reader is about to see.
  useEffect(() => {
    if (jump === 0) return;
    const anchor = indexTop.current;
    if (!anchor) return;
    const target = anchor.getBoundingClientRect().top + window.scrollY - navbarHeight();
    window.scrollTo({
      top: Math.max(target, 0),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : jumpBehavior.current,
    });
  }, [jump]);

  // Active section, only meaningful while every group is on the page.
  useEffect(() => {
    if (filter !== 'Alle') {
      setCurrentSection(null);
      return;
    }
    const nodes = visibleGroups
      .map((group) => document.getElementById(topicId(group.topic)))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrentSection(visible[0].target.id);
      },
      // A band just under the 88px header plus the 46px stuck rail. Same
      // contract as the rails in app/faq/FaqToc.tsx and components/wissen/
      // ArticleTemplate.tsx, so all three behave alike.
      { rootMargin: '-140px 0px -70% 0px', threshold: 0 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [filter, visibleGroups]);

  return (
    <>
      {/* ---------------- ENTRY POINT ----------------------------------- */}
      {filter === 'Alle' && featured.length > 0 && (
        <section aria-labelledby="start-hier">
          <div className="flex flex-wrap items-baseline justify-between gap-x-stack gap-y-1 border-b border-brand-edge pb-3">
            <h2
              id="start-hier"
              className="text-subheading font-semibold tracking-heading text-brand-text"
            >
              Start hier
            </h2>
            <p className="text-micro text-brand-subtle">
              {featured.length} von {articles.length} Guides, wenn du neu einsteigst
            </p>
          </div>

          <ol className="mt-flow grid gap-px overflow-hidden rounded-card border border-brand-line bg-brand-line md:grid-cols-3">
            {featured.map((article, index) => (
              <li key={article.href} className="flex flex-col bg-brand-bg p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                    {article.tag}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-micro font-semibold tabular-nums text-brand-subtle"
                  >
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-2.5 text-meta font-semibold text-brand-text">
                  <a
                    href={article.href}
                    className="transition-colors hover:text-brand-accent-ink"
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="mt-2 text-micro text-brand-muted">{article.description}</p>

                <p className="mt-auto pt-3 text-micro tabular-nums text-brand-subtle">
                  {article.topic} <span aria-hidden="true">&middot;</span> {article.readTime}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ---------------- TOPIC RAIL ------------------------------------ */}
      {/* Sticks on phone and desktop alike: a 50 item index needs its taxonomy
          in reach at every scroll position, not just at the top. */}
      {/* No bleed past the container padding: every other rule on this page
          starts at the reading edge, and a rail that starts 48px further left
          reads as a second, wrong grid. */}
      {/* Zero height marker, outside the sticky box so it keeps a fixed place
          in the document: the "Alle" anchor and every filter change land
          here. */}
      <div id={INDEX_ID} ref={indexTop} className="scroll-mt-navbar" />
      <nav
        aria-label="Guides nach Thema"
        className="sticky top-navbar z-30 mt-stack border-y border-brand-line bg-brand-bg"
      >
        <div className="flex items-center gap-x-flow overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="shrink-0 text-micro uppercase tracking-eyebrow text-brand-subtle">
            Thema
          </span>
          {filters.map((f) => {
            const selected = f === filter;
            // "You are here" while the whole index is on the page. Never both:
            // when a topic is selected it is the only group rendered.
            const inView =
              filter === 'Alle' && f !== 'Alle' && currentSection === topicId(f);
            const count =
              f === 'Alle' ? articles.length : articles.filter((a) => a.topic === f).length;
            return (
              <a
                key={f}
                href={f === 'Alle' ? `#${INDEX_ID}` : `#${topicId(f)}`}
                onClick={(event) => selectTopic(event, f)}
                aria-current={selected ? 'true' : inView ? 'location' : undefined}
                className={`shrink-0 whitespace-nowrap text-micro transition-colors ${
                  selected
                    ? 'font-semibold text-brand-accent-ink underline decoration-brand-accent-deep decoration-2 underline-offset-[6px]'
                    : inView
                      ? 'font-semibold text-brand-accent-ink'
                      : 'text-brand-muted hover:text-brand-accent-ink'
                }`}
              >
                {f}{' '}
                <span
                  className={`tabular-nums ${
                    selected || inView ? 'text-brand-accent-ink' : 'text-brand-subtle'
                  }`}
                >
                  {count}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* ---------------- INDEX ----------------------------------------- */}
      {visibleGroups.map((group, groupIndex) => (
        <section
          key={group.topic}
          id={topicId(group.topic)}
          className="scroll-mt-navbar pt-block sm:pt-rule"
        >
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span
              aria-hidden="true"
              className="text-2xl font-semibold tabular-nums tracking-heading text-brand-accent-ink sm:text-heading"
            >
              {groupIndex + 1}.
            </span>
            <h2 className="text-2xl font-semibold tracking-heading text-brand-text sm:text-heading">
              {group.topic}
            </h2>
            <span className="ml-auto text-micro tabular-nums text-brand-subtle">
              {group.items.length} Guides
            </span>
          </div>

          <p className="mt-3 max-w-measure text-body text-brand-muted">
            {TOPIC_INTROS[group.topic]}
          </p>

          <div className="mt-flow border-b border-brand-edge">
            {group.items.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group grid gap-x-stack gap-y-1.5 border-t border-brand-hairline py-3.5 transition-colors hover:bg-brand-surface lg:grid-cols-[9rem_minmax(0,1fr)_6rem]"
              >
                {/* The hanging tag column, sized for German compounds. At 7rem
                    it was 112px and the cell could not shrink below its longest
                    word, so AUTOMATISIERUNG (167,8px) printed 23,8px into the
                    row heading and MARKTANALYSE, DIENSTLEISTER and WETTBEWERB
                    ate the 32px gutter. 9rem holds every tag but the longest
                    one on a single line; min-w-0 lets the cell obey its track,
                    and hyphens plus break-words wrap whatever is still too
                    long. Inline flow rather than flex, so "Neu" wraps with the
                    text instead of fighting it. */}
                <div className="min-w-0 hyphens-auto break-words text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                  {article.tag}
                  {article.date === newest && (
                    <span className="ml-2 whitespace-nowrap text-brand-orange">Neu</span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-meta font-semibold text-brand-text transition-colors group-hover:text-brand-accent-ink">
                      {article.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-micro text-brand-accent-ink transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </div>
                  {/* Capped, not full-column: at 704px a 13px summary runs to
                      about 113 characters per line, which is a table cell
                      pretending to be a paragraph. */}
                  <p className="mt-1 max-w-narrow text-micro text-brand-muted">
                    {article.description}
                  </p>
                </div>

                <div className="text-micro tabular-nums text-brand-subtle lg:text-right">
                  {article.readTime}
                  <span aria-hidden="true" className="mx-1.5 lg:hidden">
                    &middot;
                  </span>
                  <span className="lg:mt-0.5 lg:block">{formatArticleDate(article.date)}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

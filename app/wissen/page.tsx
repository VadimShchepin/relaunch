import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  TOPICS,
  formatArticleDate,
  groupedByTopic,
  latestArticleDate,
  sortedArticles,
} from './articles';
import { WissenList } from './WissenList';

const ARTICLES = sortedArticles();
const TOPIC_COUNT = groupedByTopic(ARTICLES).length;

/* Every number in the hero is derived from the registry, so adding a guide
   updates the page instead of leaving a hardcoded "48 Guides" behind. */
const FACTS: { label: string; value: string }[] = [
  { label: 'Guides', value: String(ARTICLES.length) },
  { label: 'Themen', value: `${TOPIC_COUNT} von ${TOPICS.length}` },
  { label: 'Zuletzt erweitert', value: formatArticleDate(latestArticleDate(ARTICLES)) },
];

const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wissen: KI-Sichtbarkeit, AI SEO & Automatisierung',
    description: 'Praxis-Guides zu KI-Sichtbarkeit, AI SEO und Website-Automatisierung für Unternehmen.',
    url: 'https://aiseo.hamburg/wissen',
    publisher: {
        '@type': 'Organization',
        name: 'aiseo.hamburg',
        url: 'https://aiseo.hamburg',
    },
    mainEntity: {
        '@type': 'ItemList',
        numberOfItems: ARTICLES.length,
        itemListElement: ARTICLES.map((article, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://aiseo.hamburg${article.href}`,
            name: article.title,
        })),
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
        { '@type': 'ListItem', position: 2, name: 'Wissen' },
    ],
};

export default function WissenPage() {
    return (
        <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main>
                {/* ---------------- HERO ---------------------------------- */}
                {/* Same shape as the /hamburg hub: reading column plus a 20rem
                    gutter that carries the counts. */}
                <section className="border-b border-brand-line bg-brand-surface">
                    <div className="mx-auto max-w-article px-6 pt-28 pb-stack md:px-10 md:pt-32 sm:pb-block lg:px-12">
                        <div className="grid gap-stack lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-rule">
                            <div>
                                <nav aria-label="Breadcrumb" className="text-micro text-brand-subtle">
                                    <ol className="flex flex-wrap items-center gap-1.5">
                                        <li>
                                            <a href="/" className="transition-colors hover:text-brand-accent-ink">
                                                Startseite
                                            </a>
                                        </li>
                                        <li aria-hidden="true">/</li>
                                        <li className="font-medium text-brand-text">Wissen</li>
                                    </ol>
                                </nav>

                                <p className="mt-stack text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                                    Wissensbasis
                                </p>
                                <h1 className="mt-4 text-3xl font-semibold tracking-heading text-brand-text sm:text-[2.5rem] sm:leading-[1.1] lg:text-title">
                                    Wissen &amp; Guides
                                </h1>
                                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                                    Praxis-Guides zu KI-Sichtbarkeit, AI SEO und Website-Automatisierung: mit
                                    Quellen, gemessenen Zahlen und konkreten Handlungsempfehlungen statt
                                    Marketing-Blabla. Der Einstieg steht oben, darunter sortiert sich alles nach
                                    Thema.
                                </p>
                            </div>

                            <div>
                                <dl className="grid gap-px overflow-hidden rounded-card border border-brand-line bg-brand-line">
                                    {FACTS.map((fact) => (
                                        <div
                                            key={fact.label}
                                            className="flex items-baseline justify-between gap-4 bg-brand-bg px-4 py-3 sm:px-5"
                                        >
                                            <dt className="text-micro uppercase tracking-eyebrow text-brand-subtle">
                                                {fact.label}
                                            </dt>
                                            <dd className="text-meta font-medium tabular-nums text-brand-text">
                                                {fact.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <p className="mt-flow text-micro text-brand-subtle">
                                    Jeder Guide nennt oben seine Lesezeit und sein Veröffentlichungsdatum.
                                    Ältere Guides bleiben stehen, solange die Aussage noch trägt.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------- INDEX --------------------------------- */}
                <div className="mx-auto max-w-article px-6 pt-stack pb-block md:px-10 sm:pb-section lg:px-12">
                    <WissenList articles={ARTICLES} />
                </div>

                {/* ---------------- SCHLUSS ------------------------------- */}
                {/* This used to be a second brand-night band carrying the same
                    button as the Footer CTA about 350px below it, on a
                    container indented 56px differently. The Footer owns the
                    closing ask on all 79 pages, so this band keeps its heading
                    and its own link, points at the ask instead of repeating it,
                    and goes light so the document ends in one dark band rather
                    than two. */}
                <section className="border-t border-brand-line bg-brand-surface">
                    <div className="mx-auto max-w-article px-6 py-block md:px-10 sm:py-rule lg:px-12">
                        <div className="grid gap-stack lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-rule">
                            <h2 className="text-2xl font-semibold tracking-heading text-brand-text sm:text-heading">
                                Wissen ist gut.
                                <br />
                                <span className="text-brand-subtle">Umsetzung ist besser.</span>
                            </h2>
                            <div>
                                <p className="text-meta text-brand-muted">
                                    Du willst wissen, ob KI dein Unternehmen bereits empfiehlt? Die kostenlose
                                    Kurzanalyse steht am Seitenende. Danach ist klar, welcher der{' '}
                                    {ARTICLES.length} Guides oben für dich zählt.
                                </p>
                                <p className="mt-flow text-meta">
                                    <a
                                        href="/leistungen"
                                        className="font-medium text-brand-accent-ink underline decoration-brand-accent-deep/40 decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-deep"
                                    >
                                        Alle Leistungen ansehen
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

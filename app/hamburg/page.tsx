import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

/* Each entry carries four columns, not one blurb: what the page is, which
   system it acts on, how success is measured there and when it is the right
   page for you. The old layout had one description per card in a 32px-padded
   box, which is why seven links filled a 3.400px page. */
type ClusterPage = {
  title: string;
  description: string;
  href: string;
  tag: string;
  system: string;
  metric: string;
  fit: string;
};

type ClusterGroup = {
  /** Sorting question, so a visitor can skip two thirds of the list. */
  heading: string;
  intro: string;
  pages: ClusterPage[];
};

const GROUPS: ClusterGroup[] = [
  {
    heading: 'Wenn noch nicht klar ist, wo du stehst',
    intro:
      'Beide Seiten setzen vor der Plattformwahl an. Sie unterscheiden sich nur im Suchbegriff, mit dem Unternehmen hier landen.',
    pages: [
      {
        title: 'KI-Sichtbarkeit Agentur Hamburg',
        description:
          'Die zentrale Service-Seite für Unternehmen, die in KI-Systemen konkret genannt werden wollen.',
        href: '/hamburg/ki-sichtbarkeit-agentur',
        tag: 'Kernleistung',
        system: 'alle vier Antwortsysteme',
        metric: 'genannt oder nicht genannt',
        fit: 'Du willst erst wissen, wo du stehst, und dann entscheiden.',
      },
      {
        title: 'AI SEO Agentur Hamburg',
        description:
          'Kommerzielle Local-Intent-Seite für Unternehmen, die bereits aktiv nach AI SEO suchen.',
        href: '/ai-seo-agentur',
        tag: 'AI SEO',
        system: 'Google und Bing zuerst',
        metric: 'Rankings plus Nennungen',
        fit: 'Du suchst nach AI SEO und willst Umsetzung, keine Einführung.',
      },
    ],
  },
  {
    heading: 'Wenn eine einzelne Plattform der Engpass ist',
    intro:
      'Drei Systeme, drei verschiedene Hebel. Zwei davon hängen am selben Index, das dritte an Googles Doku.',
    pages: [
      {
        title: 'Google AI Overviews Optimierung Hamburg',
        description:
          'Als Quelle in Googles KI-Antwortkasten und AI Mode auftauchen, ausgerichtet an Googles offizieller Search-Central-Doku.',
        href: '/hamburg/google-ai-overviews',
        tag: 'Google AI',
        system: 'AI Overviews, AI Mode',
        metric: 'Zitate in der Antwortbox',
        fit: 'Deine Rankings stehen, die Klicks fallen trotzdem.',
      },
      {
        title: 'ChatGPT Optimierung Hamburg',
        description:
          'Wie Unternehmen in Hamburg für ChatGPT-Empfehlungen und GPT-Sichtbarkeit aufgebaut werden.',
        href: '/hamburg/chatgpt-optimierung',
        tag: 'ChatGPT',
        system: 'ChatGPT und Copilot über den Bing-Index',
        metric: 'Nennung in der Empfehlung',
        fit: 'Deine Kunden fragen ChatGPT, bevor sie dich fragen.',
      },
      {
        title: 'Perplexity Optimierung Hamburg',
        description:
          'Fokussiert auf Zitationen, Quellenpräsenz und kaufnahe Sichtbarkeit in Perplexity.',
        href: '/hamburg/perplexity-optimierung',
        tag: 'Perplexity',
        system: 'Perplexity, eigener Index',
        metric: 'Zitat mit sichtbarem Link',
        fit: 'Deine Leistung wird verglichen, bevor sie gekauft wird.',
      },
    ],
  },
  {
    heading: 'Wenn du die Klammer über alle Systeme brauchst',
    intro:
      'Beide Disziplinen arbeiten systemübergreifend. Der Unterschied liegt im Erfolgsmaß, nicht im Leistungskatalog.',
    pages: [
      {
        title: 'Answer Engine Optimization Hamburg',
        description:
          'AEO für lokale Unternehmen, die nicht nur ranken, sondern in Antworten landen wollen.',
        href: '/hamburg/answer-engine-optimization',
        tag: 'AEO',
        system: 'systemübergreifend',
        metric: 'Nennungen pro fester Fragenliste',
        fit: 'Du willst Antwortfähigkeit statt vier Kürzel im Angebot.',
      },
      {
        title: 'Generative Engine Optimization (GEO) Hamburg',
        description:
          'Die plattformübergreifende Klammer: als Quelle in KI-Antworten auftauchen, gemessen über echte Citation-Daten aus Bing und Google.',
        href: '/hamburg/generative-engine-optimization',
        tag: 'GEO',
        system: 'systemübergreifend',
        metric: 'Citations und Citation Share',
        fit: 'Du brauchst Zahlen aus echten Plattformberichten.',
      },
    ],
  },
];

const ALL_PAGES = GROUPS.flatMap((group) => group.pages);

const FACTS = [
  { label: 'Einstieg', value: '15 Minuten, 0 Euro', href: '/termin' },
  { label: 'Umsetzung', value: 'ab 1.500 Euro, Festpreis vorab', href: '/preise' },
  { label: 'Belegt', value: '1.306 KI-Zitate in 3 Projekten', href: '/ergebnisse' },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AI SEO Hamburg Service-Cluster',
  description: 'Lokale Buying-Intent-Seiten zu AI SEO, AEO, ChatGPT und Perplexity für Hamburg.',
  url: 'https://aiseo.hamburg/hamburg',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: ALL_PAGES.map((page, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://aiseo.hamburg${page.href}`,
      name: page.title,
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Hamburg' },
  ],
};

export default function HamburgHubPage() {
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
        {/* ---------------- HERO ------------------------------------------- */}
        <section className="border-b border-brand-line bg-brand-surface">
          <div className="mx-auto max-w-article px-6 pt-28 pb-stack md:px-10 md:pt-32 sm:pb-block lg:px-12">
            {/* Same asymmetric hero grid as the six sibling pages: reading
                column plus a 20rem gutter, so the cluster reads as one shape. */}
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
                    <li className="font-medium text-brand-text">Hamburg</li>
                  </ol>
                </nav>

                <p className="mt-stack text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                  Hamburg Cluster
                </p>
                <h1 className="mt-4 text-3xl font-semibold tracking-heading text-brand-text sm:text-[2.5rem] sm:leading-[1.1] lg:text-title">
                  Lokale Buying-Intent-Seiten für AI SEO in Hamburg
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Sieben Seiten, nah am Kaufmoment gebaut: für Unternehmen, die nicht mehr
                  nachlesen wollen, was AI SEO ist, sondern einen Partner in Hamburg suchen. Jede
                  Zeile unten sagt dir, auf welches System sie wirkt und woran der Erfolg gemessen
                  wird.
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
                      <dd className="text-meta font-medium text-brand-text">
                        <a
                          href={fact.href}
                          className="underline decoration-brand-line decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                        >
                          {fact.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-flow flex flex-wrap items-center gap-x-stack gap-y-4">
                  <Button href="/termin" primary text="15-Minuten-Gespräch buchen" />
                  <a
                    href="/leistungen"
                    className="text-meta font-medium text-brand-accent-ink underline decoration-brand-accent/40 decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
                  >
                    Alle Leistungen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- INDEX ----------------------------------------- */}
        <div className="mx-auto max-w-article px-6 pb-block md:px-10 sm:pb-section lg:px-12">
          {GROUPS.map((group, groupIndex) => (
            <FadeIn key={group.heading}>
              <section className="pt-block sm:pt-rule">
                <div className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden="true"
                    className="text-2xl font-semibold tabular-nums tracking-heading text-brand-accent-ink sm:text-heading"
                  >
                    {groupIndex + 1}.
                  </span>
                  <h2 className="text-2xl font-semibold tracking-heading text-brand-text sm:text-heading">
                    {group.heading}
                  </h2>
                </div>
                <p className="mt-flow max-w-measure text-body text-brand-muted">{group.intro}</p>

                <div className="mt-flow border-t border-brand-edge">
                  {group.pages.map((page) => (
                    <a
                      key={page.href}
                      href={page.href}
                      className="group grid gap-x-stack gap-y-3 border-b border-brand-hairline py-flow transition-colors hover:bg-brand-surface lg:grid-cols-[7rem_minmax(0,1fr)_15rem]"
                    >
                      <span className="text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
                        {page.tag}
                      </span>

                      <span className="min-w-0">
                        <span className="flex items-baseline gap-3">
                          <h3 className="text-meta font-semibold text-brand-text transition-colors group-hover:text-brand-accent-ink">
                            {page.title}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="ml-auto shrink-0 text-micro text-brand-accent-ink transition-transform group-hover:translate-x-1"
                          >
                            &rarr;
                          </span>
                        </span>
                        <span className="mt-1.5 block text-micro text-brand-muted">
                          {page.description}
                        </span>
                        <span className="mt-2 block text-micro text-brand-subtle">
                          <span className="font-medium text-brand-text">Passt, wenn:</span>{' '}
                          {page.fit}
                        </span>
                      </span>

                      <span className="block border-t border-brand-hairline pt-3 lg:border-t-0 lg:pt-0">
                        <span className="block text-micro text-brand-subtle">
                          <span className="uppercase tracking-eyebrow">System</span>
                          <span className="mt-0.5 block text-brand-muted">{page.system}</span>
                        </span>
                        <span className="mt-2 block text-micro text-brand-subtle">
                          <span className="uppercase tracking-eyebrow">Erfolgsmaß</span>
                          <span className="mt-0.5 block text-brand-muted">{page.metric}</span>
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </FadeIn>
          ))}

          <FadeIn>
            <aside className="mt-block border-l-2 border-brand-accent-deep bg-brand-surface px-6 py-flow sm:mt-rule md:px-stack">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Wenn du nicht wählen willst
              </p>
              <p className="mt-3 text-lead font-semibold tracking-heading text-brand-text sm:text-subheading">
                Sieben Seiten heißen nicht sieben Angebote.
              </p>
              <p className="mt-4 max-w-measure text-meta text-brand-muted">
                Die Arbeit dahinter überlappt zu weiten Teilen. Getrennt sind die Seiten, weil
                Unternehmen mit sehr unterschiedlichen Fragen hier ankommen. Im Erstgespräch
                entscheidet sich, welche eine davon für dich zählt, und welche du ignorieren
                kannst.
              </p>
            </aside>
          </FadeIn>
        </div>

        {/* ---------------- CTA ------------------------------------------- */}
        <section className="bg-brand-night text-white">
          <div className="mx-auto max-w-article px-6 py-block md:px-10 sm:py-section lg:px-12">
            <div className="grid gap-stack lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-rule">
              <h2 className="text-2xl font-semibold tracking-heading sm:text-heading">
                Wer lokal empfohlen werden will, braucht lokal gedachte Seiten.
              </h2>
              <div>
                <p className="text-meta text-white/70">
                  Ich schaue mir an, welche dieser Seiten für dein Angebot wirklich Sinn ergeben
                  und welche nur Luft produzieren würden. Davon gibt es online schon genug.
                </p>
                <div className="mt-flow">
                  <Button href="/contact" primary text="Lokale KI-Sichtbarkeit anfragen" />
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

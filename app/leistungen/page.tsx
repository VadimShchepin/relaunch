import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { Tag } from '@/components/ui/Tag';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { DataChart } from '@/components/ui/DataChart';

const PHONE_NUMBER = '+4917632194754';
const PHONE_DISPLAY = '+49 176 321 94 754';

interface ServiceType {
  n: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  schemaName: string;
  schemaDescription: string;
  primaryArticle: { title: string; href: string };
  relatedArticles: { title: string; href: string }[];
}

const SERVICES: ServiceType[] = [
  {
    n: '01',
    id: 'beratung',
    title: 'Beratung',
    subtitle: 'Strategische KI-Sichtbarkeitsberatung',
    description: 'Ich prüfe, wie ChatGPT, Perplexity und Google AI dein Unternehmen heute beschreiben, und liefere einen priorisierten Fahrplan statt vager Empfehlungen.',
    deliverables: [
      'KI-Sichtbarkeitsanalyse über alle Plattformen',
      'Wettbewerber-Vergleich: wer wird statt dir genannt',
      'Priorisierter Maßnahmenplan mit Quick Wins',
      'Persönliches Strategie-Gespräch (60 Min.)',
    ],
    idealFor: 'Unternehmen, die erst verstehen wollen, wo sie stehen, bevor sie investieren.',
    timeline: 'Ergebnisse in 5 bis 7 Tagen',
    schemaName: 'KI-Sichtbarkeitsberatung',
    schemaDescription: 'Strategische Beratung für AI Visibility: Analyse, Strategie und Handlungsempfehlungen.',
    primaryArticle: { title: 'KI-Sichtbarkeit beauftragen: so geht\'s', href: '/wissen/ki-sichtbarkeit-beauftragen' },
    relatedArticles: [
      { title: 'Was kostet KI-Sichtbarkeit?', href: '/wissen/ki-sichtbarkeit-kosten' },
      { title: 'KI-Sichtbarkeit messen', href: '/wissen/ki-sichtbarkeit-messen' },
    ],
  },
  {
    n: '02',
    id: 'aeo',
    title: 'AEO',
    subtitle: 'Answer Engine Optimization',
    description: 'Deine Inhalte werden so aufgebaut, dass KI-Systeme sie als zitierbare Quelle erkennen und in ihren Antworten nennen. Dich, nicht deine Konkurrenz.',
    deliverables: [
      'Answer-First-Optimierung deiner Kernseiten',
      'FAQ-Markup und strukturierte Daten',
      'Zitierbarkeits-Audit mit konkreten Änderungen',
      'Monatliches KI-Zitations-Monitoring',
    ],
    idealFor: 'Dienstleister und Berater, deren Kunden aktiv in KI-Assistenten recherchieren.',
    timeline: 'Erste Ergebnisse: 2 bis 4 Wochen',
    schemaName: 'Answer Engine Optimization (AEO)',
    schemaDescription: 'Optimierung für ChatGPT, Perplexity, Gemini und andere KI-Antwortmaschinen.',
    primaryArticle: { title: 'AEO: Der komplette Leitfaden', href: '/wissen/aeo-answer-engine-optimization' },
    relatedArticles: [
      { title: 'ChatGPT SEO: so wirst du gefunden', href: '/wissen/chatgpt-seo' },
      { title: 'Perplexity vs. ChatGPT vs. Google', href: '/wissen/perplexity-vs-chatgpt-vs-google' },
    ],
  },
  {
    n: '03',
    id: 'geo',
    title: 'GEO',
    subtitle: 'Generative Engine Optimization',
    description: 'Eine Strategie für alle generativen Engines statt isolierter Einzelmaßnahmen. AEO ist ein Teil davon.',
    deliverables: [
      'GEO-Audit: Wo wirst du zitiert, wo nicht?',
      'Zitierbare, antwortorientierte Inhaltsstruktur',
      'Entity- und Autoritätssignale für KI-Modelle',
      'Plattformübergreifendes Zitations-Monitoring',
    ],
    idealFor: 'Unternehmen, die KI-Sichtbarkeit als Ganzes denken wollen, nicht nur eine Plattform.',
    timeline: 'Erste Zitationen: 3 bis 6 Wochen',
    schemaName: 'Generative Engine Optimization (GEO)',
    schemaDescription: 'Plattformübergreifende Optimierung, damit generative KI-Systeme wie ChatGPT, Perplexity und Google AI dein Unternehmen als Quelle zitieren.',
    primaryArticle: { title: 'Was ist GEO? Generative Engine Optimization erklärt', href: '/wissen/was-ist-geo' },
    relatedArticles: [
      { title: 'GEO-Agentur Hamburg', href: '/wissen/geo-agentur-hamburg' },
      { title: 'AEO/GEO Marktanalyse Deutschland 2026', href: '/wissen/aeo-geo-marktanalyse-deutschland-2026' },
    ],
  },
  {
    n: '04',
    id: 'ai-seo',
    title: 'AI SEO',
    subtitle: 'KI-fokussierte Suchoptimierung',
    description: 'Semantische Struktur, Entity-Signale, technische Zugänglichkeit: alles, was KI braucht, um dein Angebot korrekt einzuordnen.',
    deliverables: [
      'Semantische Content-Strukturierung',
      'Entity-Signale: Schema.org, Knowledge Graph',
      'llms.txt und ai.txt Konfiguration',
      'KI-Crawler-Zugänglichkeit sicherstellen',
    ],
    idealFor: 'Unternehmen, die in Google AI Overviews und in KI-Antworten stehen wollen.',
    timeline: 'Messbar nach 4 bis 8 Wochen',
    schemaName: 'AI SEO',
    schemaDescription: 'KI-fokussierte Suchmaschinenoptimierung für die Suche der Zukunft.',
    primaryArticle: { title: 'AI SEO Agentur: was du wissen musst', href: '/ai-seo-agentur' },
    relatedArticles: [
      { title: 'SEO vs. AI SEO: die Unterschiede', href: '/wissen/seo-vs-ai-seo' },
      { title: 'AI SEO Tools im Vergleich', href: '/wissen/ai-seo-tools' },
    ],
  },
  {
    n: '05',
    id: 'website',
    title: 'Website-Erstellung',
    subtitle: 'KI-optimierte Websites',
    description: 'Next.js, saubere Core Web Vitals, Schema.org und offene Crawler-Pfade. Ab Tag eins lesbar für KI-Systeme.',
    deliverables: [
      'Next.js Website mit perfekten Core Web Vitals',
      'Schema.org Markup für alle relevanten Entitäten',
      'KI-Crawler-Zugang (llms.txt, ai.txt, robots.txt)',
      'Responsive Design mit Conversion-Fokus',
    ],
    idealFor: 'Unternehmen mit veralteter Website oder ohne klare KI-Sichtbarkeitsstrategie.',
    timeline: '4 bis 8 Wochen bis zum Launch',
    schemaName: 'Website-Erstellung',
    schemaDescription: 'KI-optimierte Websites mit Next.js, Schema.org und perfekten Core Web Vitals.',
    primaryArticle: { title: 'Technische KI-Sichtbarkeit', href: '/wissen/technische-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'Website-Automatisierung mit KI', href: '/wissen/website-automatisierung' },
      { title: 'AI SEO Tools im Vergleich', href: '/wissen/ai-seo-tools' },
    ],
  },
  {
    n: '06',
    id: 'seo',
    title: 'SEO',
    subtitle: 'Klassische Suchmaschinenoptimierung',
    description: 'Technisches SEO, On-Page und lokale Signale in Hamburg. Das Fundament, ohne das KI-Sichtbarkeit nicht trägt.',
    deliverables: [
      'Technisches SEO-Audit mit Umsetzung',
      'On-Page-Optimierung deiner Kernseiten',
      'Lokales SEO: Google Business, NAP-Konsistenz',
      'Keyword-Strategie und Content-Empfehlungen',
    ],
    idealFor: 'Unternehmen ohne stabile Google-Basis. Die Grundlage für alles andere.',
    timeline: '3 bis 6 Monate für Rankings',
    schemaName: 'Suchmaschinenoptimierung (SEO)',
    schemaDescription: 'Klassische SEO als Fundament: technisches SEO, On-Page, lokales SEO für Hamburg.',
    primaryArticle: { title: 'Lokale KI-Sichtbarkeit', href: '/wissen/lokale-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'SEO-Agentur vs. AI SEO', href: '/wissen/seo-agentur-vs-ai-seo' },
      { title: 'Technische KI-Sichtbarkeit', href: '/wissen/technische-ki-sichtbarkeit' },
    ],
  },
  {
    n: '07',
    id: 'backlinks',
    title: 'Backlink-Aufbau',
    subtitle: 'Autorität & Vertrauenssignale',
    description: 'Gezielte Markennennungen auf relevanten Plattformen. Genau die Signale, an denen Google und KI-Systeme Vertrauen messen.',
    deliverables: [
      'Backlink-Strategie aus der Wettbewerber-Analyse',
      'Gezielte Markennennungen auf Branchenportalen',
      'Digital PR und Gastbeiträge',
      'Monatliches Backlink-Reporting',
    ],
    idealFor: 'Unternehmen, die technisch sauber sind, aber an Autorität gewinnen müssen.',
    timeline: 'Erste Backlinks: 4 Wochen',
    schemaName: 'Backlink-Aufbau',
    schemaDescription: 'Gezielter Aufbau von Autorität und Vertrauenssignalen für KI-Systeme.',
    primaryArticle: { title: 'E-E-A-T und KI-Sichtbarkeit', href: '/wissen/eeat-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'KI-Markenwahrnehmung aufbauen', href: '/wissen/ki-markenwahrnehmung' },
      { title: 'Wettbewerber-KI-Sichtbarkeit analysieren', href: '/wissen/wettbewerber-ki-sichtbarkeit' },
    ],
  },
  {
    n: '08',
    id: 'pr',
    title: 'Pressemitteilungen',
    subtitle: 'PR & Pressearbeit',
    description: 'Redaktionelle Erwähnungen in Fachmedien sind eines der stärksten Autoritätssignale für KI-Zitationen.',
    deliverables: [
      'Redaktionelle Pressemitteilungen (deutsch)',
      'Distribution über relevante Presseportale',
      'Fachmedien-Outreach in deiner Branche',
      'Reporting über Veröffentlichungen und Reichweite',
    ],
    idealFor: 'Unternehmen mit Neuigkeiten, Expertise oder einem Story-Anlass.',
    timeline: 'Erste Presse: 2 bis 3 Wochen',
    schemaName: 'Pressemitteilungen',
    schemaDescription: 'Professionelle PR und Pressearbeit für Medienerwähnungen und KI-Autorität.',
    primaryArticle: { title: 'KI-Markenwahrnehmung aufbauen', href: '/wissen/ki-markenwahrnehmung' },
    relatedArticles: [
      { title: 'E-E-A-T und KI-Sichtbarkeit', href: '/wissen/eeat-ki-sichtbarkeit' },
      { title: 'AI Content-Strategie', href: '/wissen/ai-content-strategie' },
    ],
  },
];

const FACTS = [
  { value: '800', label: 'KI-Zitate in 3 Monaten', note: 'aiseo.hamburg, Copilot, 15.03. bis 13.06.2026' },
  { value: '281', label: 'Zitate für dsgvoschulfotos.de', note: 'aus dem Stand, 15.03. bis 13.06.2026' },
  { value: '+55 %', label: 'Klicks in 30 Tagen', note: 'Handwerksbetrieb, Search Console' },
];

/* Zitate pro Seite, exakt aus dem AI-Page-Stats-Export der Bing Webmaster Tools
   für dsgvoschulfotos.de, 30-Tage-Fenster bis 06.06.2026: 211 Zitate auf 16
   Seiten. Hier stehen die sechs stärksten Seiten mit ihren Exportwerten, nichts
   gerundet, nichts hochgerechnet. Die zehn übrigen Seiten liegen bei 1 bis 13
   Zitaten (Summe 63), der Schnitt nach Platz 6 trennt keine gleichen Werte.
   Quelle der Zahlen: dsgvoschulfotos.de_AIPageStatsReport_6_6_2026.csv, dieselben
   Werte stehen auf /wissen/citation-rate und /wissen/ki-sichtbarkeit-saas. */
const CITATION_PAGES = [
  { label: '/dsgvo-schule-apps', value: 45 },
  { label: '/dsgvo-schulfotos', value: 37 },
  { label: '/ (Startseite)', value: 18 },
  { label: '/gruppenfotos-datenschutz', value: 16 },
  { label: '/klassenfotos-datenschutz', value: 16 },
  { label: '/einwilligung-fotos-schule', value: 16 },
];

const PILLARS = [
  { n: '01', title: 'Strategie', description: 'Ein System, das auf dein Unternehmen zugeschnitten ist, keine einzelnen Tricks.' },
  { n: '02', title: 'Technik', description: 'Saubere Struktur, Schema, Performance. Damit KI dein Angebot wirklich versteht.' },
  { n: '03', title: 'Autorität', description: 'Backlinks, Erwähnungen, Pressearbeit. Die Signale, die KI-Systemen Vertrauen geben.' },
];

const VERTICALS = [
  { title: 'Handwerker', href: '/wissen/ki-sichtbarkeit-handwerker', description: 'Mehr Aufträge durch KI-Empfehlungen in deiner Region.' },
  { title: 'Immobilien', href: '/wissen/ki-sichtbarkeit-immobilien', description: 'Makler und Verwalter, die KI als Kanal nutzen.' },
  { title: 'Ärzte & Praxen', href: '/wissen/ki-sichtbarkeit-aerzte', description: 'Patienten finden dich über KI-Assistenten.' },
  { title: 'Anwälte & Kanzleien', href: '/wissen/ki-sichtbarkeit-anwaelte', description: 'Mandanten gewinnen über ChatGPT und Co.' },
  { title: 'E-Commerce', href: '/wissen/ki-sichtbarkeit-ecommerce', description: 'Produkte, die KI aktiv empfiehlt.' },
  { title: 'Dienstleister', href: '/wissen/ki-sichtbarkeit-dienstleister', description: 'Agenturen, Berater und Freelancer, sichtbar in KI.' },
];

const PLATFORMS = [
  { name: 'ChatGPT', href: '/wissen/sichtbarkeit-in-chatgpt', description: 'So wirst du in ChatGPT-Antworten genannt.' },
  { name: 'Perplexity', href: '/wissen/sichtbarkeit-in-perplexity', description: 'Schnellste Ergebnisse durch Live-Web-Suche.' },
  { name: 'Claude', href: '/wissen/sichtbarkeit-in-claude', description: 'Anthropics KI mit wachsender Nutzerbasis.' },
  { name: 'Gemini', href: '/wissen/sichtbarkeit-in-gemini', description: 'Google AI und die Zukunft der Suche.' },
];

const ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Leistungen von aiseo.hamburg',
  description: 'Alle Dienstleistungen für KI-Sichtbarkeit in Hamburg',
  url: 'https://aiseo.hamburg/leistungen',
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.schemaName,
      description: service.schemaDescription,
      provider: { '@id': 'https://aiseo.hamburg/#organization' },
      areaServed: { '@type': 'City', name: 'Hamburg' },
    },
  })),
};

const linkBase = 'group flex items-baseline justify-between gap-flow border-t border-brand-hairline py-2.5 transition-colors hover:bg-brand-surface';

export default function LeistungenPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }} />

      <main>
        {/* ========== HERO: 7/5 asymmetric, text-only so the H1 keeps the LCP slot ========== */}
        <section className="relative overflow-hidden pt-28 pb-block lg:pt-32">
          <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-3xl" />
          <AntigravityBackground />

          <div className="relative z-10 mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <FadeIn>
                <Tag text="Leistungen" />
                <h1 className="mt-flow text-heading sm:text-title xl:text-display font-semibold text-black">
                  Alles, was dein Unternehmen in <span className="text-brand-accent">KI sichtbar</span> macht.
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Generative Engine Optimization (GEO), AEO und klassisches SEO aus einer Hand: Beratung, Optimierung, Technik und Autorität, spezialisiert auf Hamburg.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <Button href="/ai-sichtbarkeit-now" primary className="!py-4 !px-6 !pl-8 group">
                    <span className="relative z-10 flex items-center gap-3">
                      KI-Sichtbarkeit prüfen
                      <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
                    </span>
                  </Button>
                  <Button href="#leistungen" text="Alle Leistungen" className="!py-4 !px-8" />
                </div>
              </FadeIn>
            </div>

            {/* Hard numbers instead of a hero photo. Source: /ergebnisse */}
            <div className="lg:col-span-5 lg:pt-2">
              <FadeIn delay={120}>
                <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Gemessen, nicht behauptet</p>
                <dl className="mt-flow">
                  {FACTS.map((fact) => (
                    <div key={fact.label} className="flex items-baseline gap-flow border-t border-brand-line py-3">
                      <dt className="w-24 shrink-0 text-subheading font-semibold tabular-nums text-brand-text">{fact.value}</dt>
                      <dd className="text-meta text-brand-muted">
                        {fact.label}
                        <span className="block text-micro text-brand-subtle">{fact.note}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link href="/ergebnisse" className="mt-flow inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                  Alle Ergebnisse mit Screenshots
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
                <p className="mt-2 text-micro text-brand-subtle">Stand: August 2026</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== LEISTUNGEN: 2 tracks (260px name + one 700px reading column), sticky index on every viewport ========== */}
        <section id="leistungen" className="border-t border-brand-line pb-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="pt-rule">
                <h2 className="text-subheading md:text-heading font-semibold text-black">
                  8 Leistungen. <span className="text-brand-subtle">Ein Ziel.</span>
                </h2>
                <p className="mt-flow max-w-measure text-body text-brand-muted">
                  Von Generative Engine Optimization (GEO) und AEO bis zu Technik und Autorität. Liefergegenstände, Zeitrahmen und Quellen stehen offen da, nichts versteckt sich hinter einem Klick.
                </p>
              </div>
            </FadeIn>

            {/* index: sticky on phone and desktop alike, so an 11.000px page always has jump links */}
            <nav aria-label="Leistungsübersicht" className="sticky top-navbar z-30 -mx-6 mt-stack border-y border-brand-line bg-brand-bg px-6 lg:-mx-12 lg:px-12">
              <ol className="flex gap-x-flow overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {SERVICES.map((service) => (
                  <li key={service.id} className="shrink-0">
                    <a href={`#${service.id}`} className="flex items-baseline gap-1.5 text-micro whitespace-nowrap text-brand-muted transition-colors hover:text-brand-accent-ink">
                      <span className="tabular-nums text-brand-subtle">{service.n}</span>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* table head, once, instead of a repeated eyebrow in all 8 rows */}
            <div className="mt-flow hidden lg:grid lg:grid-cols-[260px_1fr] lg:gap-x-stack">
              <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Leistung</p>
              <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Was sie leistet und was du bekommst</p>
            </div>

            <div className="mt-3">
              {SERVICES.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid scroll-mt-rule gap-y-3 border-t border-brand-edge py-flow lg:min-h-[18.75rem] lg:grid-cols-[260px_1fr] lg:gap-x-stack"
                >
                  <div>
                    <span className="text-micro font-medium tabular-nums text-brand-subtle">{service.n}</span>
                    <h3 className="text-subheading font-semibold text-brand-text">{service.title}</h3>
                    <p className="text-meta font-medium text-brand-accent-ink">{service.subtitle}</p>
                    <p className="mt-2 text-micro text-brand-subtle">{service.timeline}</p>
                    <Link href="/contact" className="mt-1 inline-flex items-center gap-1.5 text-micro font-medium text-brand-text hover:gap-2.5">
                      Anfragen
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>

                  <div>
                    <p className="text-meta lg:text-body text-brand-muted">{service.description}</p>

                    {/* the qualifier gets its own rule, so it stops merging optically with the paragraph */}
                    <div className="mt-4 border-t border-brand-hairline pt-3 lg:flex lg:gap-flow">
                      <p className="hidden text-micro uppercase tracking-eyebrow text-brand-subtle lg:block lg:w-24 lg:shrink-0">Ideal für</p>
                      <p className="text-micro lg:text-meta text-brand-muted">
                        <span className="font-medium text-brand-text lg:hidden">Ideal für: </span>
                        {service.idealFor}
                      </p>
                    </div>

                    <div className="mt-3 border-t border-brand-hairline pt-3">
                      <p className="mb-2 text-micro uppercase tracking-eyebrow text-brand-subtle lg:hidden">Was du bekommst</p>
                      <ul className="grid gap-x-flow gap-y-1.5 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-micro text-brand-muted">
                            <CheckIcon className="mt-1 w-3 h-3 shrink-0 text-brand-accent-ink" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* the 3 articles sit in the reading column, aligned under the paragraph they belong to */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-brand-hairline pt-3 text-micro">
                      <Link href={service.primaryArticle.href} className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4 hover:decoration-brand-accent-ink">
                        {service.primaryArticle.title}
                      </Link>
                      {service.relatedArticles.map((article) => (
                        <Link key={article.href + article.title} href={article.href} className="text-brand-subtle underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink">
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              {/* Restored from round 1, where this CTA sat in a sidebar that the 2-track rebuild removed.
                  It stays here, right after the 8 rows, because that is where a reader who just scanned
                  all of them asks "and where do I start?". Same 260px + 700px tracks as the rows above. */}
              <div className="-mx-6 grid scroll-mt-rule gap-y-3 border-t border-brand-edge bg-brand-surface px-6 py-flow lg:-mx-12 lg:grid-cols-[260px_1fr] lg:gap-x-stack lg:px-12">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Nächster Schritt</p>
                  <h3 className="mt-1 text-subheading font-semibold text-brand-text">
                    Nicht sicher, wo du anfangen sollst?
                  </h3>
                </div>

                <div>
                  <p className="text-meta lg:text-body text-brand-muted">
                    In 15 Minuten zeige ich dir, wie KI dein Unternehmen heute beschreibt und was sich ändern muss, damit du empfohlen wirst. Kostenlos, ehrlich, ohne Verkaufsdruck.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-stack gap-y-3 border-t border-brand-hairline pt-4">
                    <Button href="/ai-sichtbarkeit-now" primary text="KI-Check starten" className="!py-3 !px-6" />
                    <a href={`tel:${PHONE_NUMBER}`} className="text-meta font-medium text-brand-accent-ink hover:underline">
                      oder direkt anrufen: {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== EVIDENCE: two figures carry this band, no body copy ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <h2 className="text-subheading md:text-heading font-semibold text-black">So sieht das Ergebnis aus.</h2>
              <div className="mt-stack grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                {/* max-w-[780px] below lg is what keeps this raster at or above 1x.
                    The column is lg:col-span-7, which is 552px at 1440px, but below
                    lg the grid collapses and the figure takes the whole 975px content
                    box at a 1023px viewport. The wide crop is 810px of pixels, so it
                    was rendering at 0,831x there: an upscaled screenshot of text, the
                    one thing that must never be soft.
                    The <source> switch moved from 640px to 540px for the same reason
                    from the other side. Between a 588px and a 640px viewport the box
                    is wider than the 540px tight crop, so the old breakpoint had a
                    second sub-1x window (0,914x at 639px). Every real phone width
                    (390, 393, 414, 430) is still below 540px and still gets the tight,
                    readable crop.
                    Measured after the change: 1,58x at 390px, 1,04x at 834px, 1,04x
                    at 1023px, 1,47x at 1440px. */}
                <figure className="max-w-[780px] lg:col-span-7 lg:max-w-none">
                  <picture>
                    <source media="(min-width: 540px)" srcSet="/image/leistungen/antwort-chatgpt-wide-810.webp" width={810} height={200} />
                    <img
                      src="/image/leistungen/antwort-chatgpt-tight-540.webp"
                      width={540}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      alt="Ausschnitt einer ChatGPT-Antwort: KinderAlbum wird als DSGVO-konforme Foto-App für Schulen und Kindergärten genannt, mit Quellenangabe."
                      className="w-full rounded-card border border-brand-line bg-brand-night"
                    />
                  </picture>
                  <figcaption className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Ausschnitt einer echten ChatGPT-Antwort. Gefragt war eine DSGVO-konforme Foto-Lösung für Schulen, genannt wird KinderAlbum, mit Quellenangabe. Das ist das Produkt von AEO und GEO.{' '}
                    <Link href="/wissen/case-study-kinderalbum" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Fallstudie
                    </Link>
                  </figcaption>
                </figure>

                <figure className="lg:col-span-5">
                  {/* Hier lag bis Runde 2 ein Screenshot des Bing-Dashboards: 420px breit,
                      Achsenbeschriftung bei 4 bis 5px, violett-blaue Fremdfarben in einer
                      grün-schwarzen Seite. Gleiche Quelle, neu gezeichnet mit dem geteilten
                      Chart-Primitive: jedes Label ist HTML-Text ab 13px, jede Farbe ein Token.
                      Die Tagesreihe des Screenshots gibt es nicht als Export, nur den
                      Seiten-Export, deshalb steht hier die Verteilung statt der Kurve.
                      Tabelle aus: die Zeilenvariante schreibt jeden Wert schon als Text. */}
                  <div className="rounded-card border border-brand-line bg-white p-4 sm:p-5">
                    <DataChart
                      frame={false}
                      variant="row"
                      headingLevel="h3"
                      title="KI-Zitate pro Seite"
                      subject="dsgvoschulfotos.de"
                      axis={{ title: 'Zitate' }}
                      highlight="peak"
                      points={CITATION_PAGES}
                      /* Einwortige Labels: die Kennzahlenspalten sind im 420px-Slot
                         nur rund 112px breit, alles Längere bricht um und die drei
                         Werte sitzen dann nicht mehr auf einer Linie. */
                      stats={[
                        { label: 'Gesamt', value: '211 Zitate' },
                        { label: 'Seiten', value: '16' },
                        { label: 'Top 6', value: '70,1 %' },
                      ]}
                      table={false}
                    />
                  </div>
                  <figcaption className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Zitate pro Seite im 30-Tage-Fenster bis 06.06.2026, aus dem AI-Page-Stats-Export der Bing Webmaster Tools. Die zehn nicht gezeigten Seiten liegen bei 1 bis 13 Zitaten. Über drei Monate, 15. März bis 13. Juni 2026, zählt Microsoft Copilot 281 Zitate, vorher lag der Wert bei nahezu null.{' '}
                    <Link href="/wissen/ki-sichtbarkeit-messen" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      So wird gemessen
                    </Link>
                  </figcaption>
                </figure>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== SYSTEM: full-bleed dark band, hairline rules, no rounded card and no blur blob ========== */}
        <section className="bg-brand-night py-rule text-white">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-line">Warum ein System?</p>
                  <h2 className="mt-flow text-subheading md:text-heading font-semibold lg:text-subheading">
                    KI-Sichtbarkeit entsteht nicht durch <span className="text-brand-line">einen einzelnen Hebel.</span>
                  </h2>
                </div>
                <div>
                  <p className="text-body text-brand-line">
                    KI-Systeme bewerten Klarheit, Technik und Autorität gleichzeitig. Nur wenn alle drei Säulen stimmen, wirst du empfohlen.
                  </p>
                  <div className="mt-flow">
                    {PILLARS.map((pillar) => (
                      <div key={pillar.title} className="flex gap-flow border-t border-white/15 py-3">
                        <span className="w-8 shrink-0 pt-1 text-micro tabular-nums text-brand-accent">{pillar.n}</span>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-flow">
                          <h3 className="w-28 shrink-0 text-lead font-semibold">{pillar.title}</h3>
                          <p className="text-meta text-brand-line">{pillar.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== BRANCHEN + PLATTFORMEN: two lists, one band ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">
                    KI-Sichtbarkeit für <span className="text-brand-accent-ink">deine Branche</span>
                  </h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Jede Branche hat eigene Suchmuster, Kundenfragen und Wettbewerber. Der Leitfaden zu deiner zeigt, welche Fragen dein Markt an KI stellt.
                  </p>
                  <div className="mt-stack sm:grid sm:grid-cols-2 sm:gap-x-stack">
                    {VERTICALS.map((vertical) => (
                      <Link key={vertical.href} href={vertical.href} className={linkBase}>
                        <div>
                          <h3 className="text-body font-semibold text-brand-text group-hover:text-brand-accent-ink">{vertical.title}</h3>
                          <p className="mt-0.5 text-meta text-brand-subtle">{vertical.description}</p>
                        </div>
                        <ArrowRightIcon className="mt-1.5 w-3.5 h-3.5 shrink-0 text-brand-subtle group-hover:text-brand-accent-ink" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">
                    Sichtbar auf <span className="text-brand-accent-ink">jeder KI-Plattform</span>
                  </h2>
                  <p className="mt-flow text-body text-brand-muted">
                    Jede Plattform wählt ihre Quellen anders aus. Hier steht, wie du auf welcher erscheinst.
                  </p>
                  <div className="mt-stack">
                    {PLATFORMS.map((platform) => (
                      <Link key={platform.href} href={platform.href} className={linkBase}>
                        <div>
                          <h3 className="text-body font-semibold text-brand-text group-hover:text-brand-accent-ink">{platform.name}</h3>
                          <p className="mt-0.5 text-meta text-brand-subtle">{platform.description}</p>
                        </div>
                        <ArrowRightIcon className="mt-1.5 w-3.5 h-3.5 shrink-0 text-brand-subtle group-hover:text-brand-accent-ink" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== CLOSE: a face instead of a trust claim ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid items-center gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-4">
                  <img
                    src="/image/leistungen/vadim-shchepin-720.webp"
                    srcSet="/image/leistungen/vadim-shchepin-360.webp 360w, /image/leistungen/vadim-shchepin-720.webp 720w"
                    sizes="(min-width: 1024px) 340px, 60vw"
                    width={720}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    alt="Vadim Shchepin, Gründer von aiseo.hamburg"
                    className="w-40 rounded-card border border-brand-line object-cover sm:w-56 lg:w-full"
                  />
                  <p className="mt-3 text-meta text-brand-subtle">
                    Vadim Shchepin, aiseo.hamburg. Du sprichst mit der Person, die auch umsetzt.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h2 className="text-subheading md:text-heading lg:text-title font-semibold text-black">Welche Leistung passt zu dir?</h2>
                  <p className="mt-flow max-w-measure text-lead text-brand-muted">
                    In 15 Minuten klären wir, wo du stehst und welche Maßnahmen den größten Hebel haben.
                  </p>
                  <a href={`tel:${PHONE_NUMBER}`} className="mt-stack inline-block text-heading font-semibold tabular-nums text-brand-accent-ink hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                    <Button href="/ai-sichtbarkeit-now" primary text="KI-Sichtbarkeit prüfen" className="!py-4 !px-8" />
                    <Button href="/contact" text="Kontakt aufnehmen" className="!py-4 !px-8" />
                  </div>
                  <p className="mt-flow flex flex-wrap items-center gap-x-4 gap-y-2 text-meta text-brand-subtle">
                    {['Kostenlos', 'Unverbindlich', 'Direkt vom Experten'].map((item) => (
                      <span key={item} className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-brand-accent-ink" />
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

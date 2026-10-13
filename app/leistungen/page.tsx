import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { DataChart } from '@/components/ui/DataChart';
import { ShaderBackdrop } from '@/components/ui/shaders/ShaderBackdrop';

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
    n: '06',
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

/* Same three numbers as /preise and the AI SEO block on webseite.hamburg. */
const PRICES = [
  { label: 'Kurzanalyse', value: '0 €' },
  { label: 'Sprint', value: 'ab 1.500 €' },
  { label: 'Betreuung', value: 'ab 600 €/Mt.' },
];

/* What lives on the sister site. Prices as published on
   webseite.hamburg/leistungen (13.10.2026); keep both sites in sync. */
const SISTER_URL = 'https://webseite.hamburg/leistungen';
const SISTER_SERVICES = [
  { title: 'Webdesign', value: 'ab 1.500 €', href: `${SISTER_URL}#webdesign` },
  { title: 'SEO', value: 'ab 1.000 €/Mt.', href: `${SISTER_URL}#seo` },
  { title: 'Google Ads', value: 'ab 700 € Setup', href: `${SISTER_URL}#ads` },
  { title: 'Website-Audit', value: 'kostenlos', href: `${SISTER_URL}#audit` },
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

const VERTICALS = [
  { title: 'Handwerker', href: '/wissen/ki-sichtbarkeit-handwerker' },
  { title: 'Immobilien', href: '/wissen/ki-sichtbarkeit-immobilien' },
  { title: 'Ärzte & Praxen', href: '/wissen/ki-sichtbarkeit-aerzte' },
  { title: 'Anwälte & Kanzleien', href: '/wissen/ki-sichtbarkeit-anwaelte' },
  { title: 'E-Commerce', href: '/wissen/ki-sichtbarkeit-ecommerce' },
  { title: 'Dienstleister', href: '/wissen/ki-sichtbarkeit-dienstleister' },
];

const PLATFORMS = [
  { title: 'ChatGPT', href: '/wissen/sichtbarkeit-in-chatgpt' },
  { title: 'Perplexity', href: '/wissen/sichtbarkeit-in-perplexity' },
  { title: 'Claude', href: '/wissen/sichtbarkeit-in-claude' },
  { title: 'Gemini', href: '/wissen/sichtbarkeit-in-gemini' },
];

const ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Leistungen von aiseo.hamburg',
  description: 'Leistungen für KI-Sichtbarkeit in Hamburg',
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

const chipLink = 'inline-flex items-center gap-1.5 rounded-full border border-brand-line px-4 py-2 text-meta font-medium text-brand-text transition-colors hover:border-brand-accent-ink hover:text-brand-accent-ink';

/* The second door. Used twice: in the hero, and again right before the close,
   where a reader who scrolled past six AI services and found nothing for a
   plain website or Google Ads needs it most. */
function SisterSite({ tone }: { tone: 'dark' | 'light' }) {
  const dark = tone === 'dark';
  return (
    <a
      href={SISTER_URL}
      className={`group flex h-full flex-col rounded-card border p-flow transition-colors sm:p-stack ${
        dark ? 'border-white/20 bg-white/[0.06] text-white backdrop-blur-sm hover:border-white/50' : 'border-brand-edge bg-white text-brand-text hover:border-brand-text'
      }`}
    >
      <p className={`text-micro uppercase tracking-eyebrow ${dark ? 'text-white/60' : 'text-brand-subtle'}`}>webseite.hamburg</p>
      <p className="mt-2 text-heading font-semibold">Nicht nur KI.</p>
      <p className={`mt-2 text-body ${dark ? 'text-white/75' : 'text-brand-muted'}`}>
        Website, SEO und Google Ads: auf meiner zweiten Seite. Gleicher Ansprechpartner.
      </p>
      <ul className={`mt-flow border-t ${dark ? 'border-white/15' : 'border-brand-line'}`}>
        {SISTER_SERVICES.map((s) => (
          <li key={s.title} className={`flex items-baseline justify-between gap-4 border-b py-2 text-meta ${dark ? 'border-white/15' : 'border-brand-line'}`}>
            <span className="font-semibold">{s.title}</span>
            <span className={`tabular-nums ${dark ? 'text-white/65' : 'text-brand-subtle'}`}>{s.value}</span>
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-2 pt-flow text-meta font-semibold group-hover:gap-3 transition-all">
        Zu den Leistungen auf webseite.hamburg
        <ArrowRightIcon className="w-3.5 h-3.5 -rotate-45" />
      </span>
    </a>
  );
}

export default function LeistungenPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }} />

      <main>
        {/* ========== HERO: one H1, then the fork. The CSS gradient is the fallback the shader fades in over ========== */}
        <section
          className="relative isolate overflow-hidden pt-32 pb-block text-white lg:pt-40 lg:pb-rule"
          style={{ background: 'radial-gradient(120% 90% at 85% 10%, #1F6B4E 0%, #0B0F0D 55%), #0B0F0D' }}
        >
          <ShaderBackdrop scene="leistungen" />
          {/* keeps the H1 at full contrast wherever the bright bands drift */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

          <div className="relative z-10 mx-auto max-w-article px-6 lg:px-12">
            <p className="text-micro uppercase tracking-eyebrow text-white/60">Leistungen</p>
            <h1 className="mt-flow max-w-[14ch] text-title sm:text-display xl:text-[5.5rem] xl:leading-[1] font-semibold">
              KI-Sichtbarkeit für dein Unternehmen.
            </h1>
            <p className="mt-flow max-w-narrow text-lead text-white/80">
              Damit ChatGPT, Perplexity, Copilot und Google AI dich nennen, wenn deine Kunden fragen.
            </p>
            <a href={SISTER_URL} className="mt-4 inline-block text-meta font-medium text-white underline decoration-white/40 underline-offset-4 lg:hidden">
              Website, SEO oder Google Ads? webseite.hamburg
              <ArrowRightIcon className="ml-1 inline w-3 h-3 -rotate-45" />
            </a>

            <div className="mt-rule grid gap-4 lg:grid-cols-12">
              <a
                href="#leistungen"
                className="group flex flex-col rounded-card bg-white p-flow text-brand-text transition-transform hover:-translate-y-0.5 sm:p-stack lg:col-span-7"
              >
                <p className="text-micro uppercase tracking-eyebrow text-brand-accent-ink">Auf dieser Seite</p>
                <p className="mt-2 text-heading font-semibold">KI-Sichtbarkeit</p>
                <ol className="mt-flow grid gap-y-2 sm:grid-cols-2 sm:gap-x-stack">
                  {SERVICES.map((service) => (
                    <li key={service.id} className="flex items-baseline gap-3 border-b border-brand-hairline pb-2 text-body">
                      <span className="w-5 text-micro tabular-nums text-brand-subtle">{service.n}</span>
                      {service.title}
                    </li>
                  ))}
                </ol>
                <dl className="mt-flow grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-brand-line bg-brand-line">
                  {PRICES.map((price) => (
                    <div key={price.label} className="bg-brand-surface px-3 py-2.5">
                      <dt className="text-micro text-brand-subtle">{price.label}</dt>
                      <dd className="text-body font-semibold tabular-nums">{price.value}</dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-auto inline-flex items-center gap-2 pt-flow text-meta font-semibold text-brand-accent-ink transition-all group-hover:gap-3">
                  Alle 6 Leistungen ansehen
                  <ArrowRightIcon className="w-3.5 h-3.5 rotate-90" />
                </span>
              </a>
              <div className="lg:col-span-5">
                <SisterSite tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== LEISTUNGEN: name on the left, what you get on the right ========== */}
        <section id="leistungen" className="scroll-mt-navbar pb-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pt-rule">
              <h2 className="text-title font-semibold text-black">6 Leistungen</h2>
              <Link href="/preise" className="inline-flex items-center gap-1.5 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                Preise im Detail
                <ArrowRightIcon className="w-3 h-3" />
              </Link>
            </div>

            <nav aria-label="Leistungsübersicht" className="sticky top-navbar z-30 -mx-6 mt-flow border-y border-brand-line bg-brand-bg/95 px-6 backdrop-blur lg:-mx-12 lg:px-12">
              <ol className="flex gap-x-stack overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {SERVICES.map((service) => (
                  <li key={service.id} className="shrink-0">
                    <a href={`#${service.id}`} className="text-meta whitespace-nowrap font-medium text-brand-muted transition-colors hover:text-brand-text">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div>
              {SERVICES.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid scroll-mt-[9rem] gap-y-flow border-b border-brand-line py-block lg:grid-cols-[320px_1fr] lg:gap-x-rule"
                >
                  <div>
                    <p className="text-meta tabular-nums text-brand-subtle">{service.n}</p>
                    <h3 className="mt-1 text-heading font-semibold text-brand-text">{service.title}</h3>
                    <p className="mt-1 text-body text-brand-accent-ink">{service.subtitle}</p>
                  </div>

                  <div>
                    <p className="text-lead text-brand-text">{service.description}</p>

                    <ul className="mt-flow grid gap-x-flow gap-y-2 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-body text-brand-muted">
                          <CheckIcon className="mt-1.5 w-3.5 h-3.5 shrink-0 text-brand-accent-ink" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-flow grid gap-y-1 border-t border-brand-line pt-4 text-meta sm:grid-cols-[7rem_1fr]">
                      <dt className="text-brand-subtle">Zeitrahmen</dt>
                      <dd className="text-brand-text">{service.timeline}</dd>
                      <dt className="text-brand-subtle">Passt für</dt>
                      <dd className="text-brand-text">{service.idealFor}</dd>
                      <dt className="text-brand-subtle">Mehr dazu</dt>
                      <dd className="flex flex-wrap gap-x-4 gap-y-1">
                        {[service.primaryArticle, ...service.relatedArticles].map((article) => (
                          <Link key={article.href + article.title} href={article.href} className="text-brand-accent-ink underline decoration-brand-accent/40 underline-offset-4 hover:decoration-brand-accent-ink">
                            {article.title}
                          </Link>
                        ))}
                      </dd>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== EVIDENCE: numbers first, then the two figures behind them ========== */}
        <section className="border-t border-brand-line bg-white py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <h2 className="text-title font-semibold text-black">Ergebnisse</h2>
              <dl className="mt-stack grid gap-y-flow sm:grid-cols-3 sm:gap-x-stack">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="border-t-2 border-brand-text pt-4">
                    <dt className="sr-only">{fact.label}</dt>
                    <dd>
                      <span className="block text-display font-semibold tabular-nums">{fact.value}</span>
                      <span className="mt-1 block text-body text-brand-text">{fact.label}</span>
                      <span className="block text-meta text-brand-subtle">{fact.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-block grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                {/* max-w-[780px] below lg keeps the raster at or above 1x: the wide crop is
                    810px, the tight crop 540px, and every real phone width gets the tight one.
                    Measured: 1,58x at 390px, 1,04x at 834px, 1,04x at 1023px, 1,47x at 1440px. */}
                <div className="max-w-[780px] lg:col-span-7 lg:max-w-none"><figure>
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
                  <figcaption className="mt-3 text-meta text-brand-subtle">
                    Echte ChatGPT-Antwort auf die Frage nach einer DSGVO-konformen Foto-Lösung für Schulen. Genannt wird KinderAlbum, mit Quelle.{' '}
                    <Link href="/wissen/case-study-kinderalbum" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Fallstudie
                    </Link>
                  </figcaption>
                </figure>
                <Link href="/ergebnisse" className="mt-stack inline-flex items-center gap-1.5 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                  Alle Ergebnisse mit Screenshots
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
                </div>

                <figure className="lg:col-span-5">
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
                      stats={[
                        { label: 'Gesamt', value: '211 Zitate' },
                        { label: 'Seiten', value: '16' },
                        { label: 'Top 6', value: '70,1 %' },
                      ]}
                      table={false}
                    />
                  </div>
                  <figcaption className="mt-3 text-meta text-brand-subtle">
                    30 Tage bis 06.06.2026, Bing Webmaster Tools, AI-Page-Stats-Export.{' '}
                    <Link href="/wissen/ki-sichtbarkeit-messen" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      So wird gemessen
                    </Link>
                  </figcaption>
                </figure>
              </div>

            </FadeIn>
          </div>
        </section>

        {/* ========== BRANCHEN + PLATTFORMEN: links only ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto grid max-w-article gap-block px-6 lg:grid-cols-2 lg:gap-x-rule lg:px-12">
            <div>
              <h2 className="text-subheading font-semibold text-black">Nach Branche</h2>
              <div className="mt-flow flex flex-wrap gap-2">
                {VERTICALS.map((v) => (
                  <Link key={v.href} href={v.href} className={chipLink}>{v.title}</Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-subheading font-semibold text-black">Nach Plattform</h2>
              <div className="mt-flow flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <Link key={p.href} href={p.href} className={chipLink}>{p.title}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== CLOSE: the person, the number, and the second door ========== */}
        <section className="border-t border-brand-line bg-brand-surface py-rule">
          <div className="mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-flow">
                <img
                  src="/image/leistungen/vadim-shchepin-360.webp"
                  width={360}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  alt="Vadim Shchepin, Gründer von aiseo.hamburg"
                  className="h-20 w-20 rounded-full border border-brand-line object-cover"
                />
                <p className="text-meta text-brand-subtle">
                  Vadim Shchepin. Du sprichst mit der Person, die auch umsetzt.
                </p>
              </div>
              <h2 className="mt-stack text-title font-semibold text-black">Welche Leistung passt?</h2>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                In 15 Minuten klären wir, wo du stehst und was den größten Hebel hat. Kostenlos.
              </p>
              <a href={`tel:${PHONE_NUMBER}`} className="mt-stack inline-block text-heading font-semibold tabular-nums text-brand-accent-ink hover:underline">
                {PHONE_DISPLAY}
              </a>
              <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                <Button href="/ai-sichtbarkeit-now" primary text="KI-Sichtbarkeit prüfen" className="!py-4 !px-8" />
                <Button href="/contact" text="Kontakt aufnehmen" className="!py-4 !px-8" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <SisterSite tone="light" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

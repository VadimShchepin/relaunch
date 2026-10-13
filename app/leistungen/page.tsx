import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { DataChart } from '@/components/ui/DataChart';
import { Archivo_Black } from 'next/font/google';
import { ShaderBackdrop } from '@/components/ui/shaders/ShaderBackdrop';

// webseite.hamburg's own display face, only for its wordmark in the sister card.
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400', display: 'swap' });

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

/* Four services, not eight. GEO, AEO and AI SEO are three names for one job,
   so they share one row here; the terms keep their own ranking pages
   (/geo-optimierung, /ai-seo-agentur, the Wissen guides), linked from the row.
   Website and classic SEO live on webseite.hamburg. */
const SERVICES: ServiceType[] = [
  {
    n: '01',
    id: 'beratung',
    title: 'Beratung',
    subtitle: 'Analyse und Fahrplan',
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
    schemaDescription: 'Strategische Beratung für KI-Sichtbarkeit: Analyse, Wettbewerbervergleich und priorisierter Maßnahmenplan.',
    primaryArticle: { title: 'KI-Sichtbarkeit beauftragen', href: '/wissen/ki-sichtbarkeit-beauftragen' },
    relatedArticles: [
      { title: 'Was kostet KI-Sichtbarkeit?', href: '/wissen/ki-sichtbarkeit-kosten' },
      { title: 'KI-Sichtbarkeit messen', href: '/wissen/ki-sichtbarkeit-messen' },
    ],
  },
  {
    n: '02',
    id: 'ki-sichtbarkeit',
    title: 'KI-Sichtbarkeit',
    subtitle: 'GEO, AEO und AI SEO',
    description: 'Deine Seiten werden so aufgebaut, dass ChatGPT, Perplexity, Copilot und Google AI sie verstehen und als Quelle nennen. GEO, AEO und AI SEO sind drei Namen für diese eine Arbeit.',
    deliverables: [
      'Zitierbarkeits-Audit: wo du genannt wirst, wo nicht',
      'Answer-First-Optimierung deiner Kernseiten',
      'Schema.org, Entity-Signale und llms.txt',
      'Offene Wege für KI-Crawler',
      'Zitations-Monitoring über alle Plattformen',
    ],
    idealFor: 'Unternehmen, deren Kunden in ChatGPT und Co. nach Anbietern fragen.',
    timeline: 'Erste Zitationen nach 3 bis 6 Wochen',
    schemaName: 'KI-Sichtbarkeit (GEO, AEO, AI SEO)',
    schemaDescription: 'Generative Engine Optimization, Answer Engine Optimization und AI SEO, damit ChatGPT, Perplexity und Google AI dein Unternehmen als Quelle nennen.',
    primaryArticle: { title: 'GEO-Optimierung', href: '/geo-optimierung' },
    relatedArticles: [
      { title: 'AEO-Leitfaden', href: '/wissen/aeo-answer-engine-optimization' },
      { title: 'AI SEO Agentur', href: '/ai-seo-agentur' },
      { title: 'Was ist GEO?', href: '/wissen/was-ist-geo' },
    ],
  },
  {
    n: '03',
    id: 'autoritaet',
    title: 'Backlinks & Presse',
    subtitle: 'Autorität für Google und KI',
    description: 'Markennennungen auf Branchenportalen und in Fachmedien. An genau diesen Signalen messen Google und KI-Systeme Vertrauen.',
    deliverables: [
      'Backlink-Strategie aus der Wettbewerber-Analyse',
      'Markennennungen auf Branchenportalen',
      'Pressemitteilungen und Fachmedien-Outreach',
      'Monatliches Reporting',
    ],
    idealFor: 'Unternehmen, die technisch sauber sind, aber an Autorität gewinnen müssen.',
    timeline: 'Erste Backlinks nach 4 Wochen',
    schemaName: 'Backlink-Aufbau und Pressearbeit',
    schemaDescription: 'Gezielter Aufbau von Backlinks, Markennennungen und Presseerwähnungen als Vertrauenssignal für Google und KI-Systeme.',
    primaryArticle: { title: 'E-E-A-T und KI-Sichtbarkeit', href: '/wissen/eeat-ki-sichtbarkeit' },
    relatedArticles: [
      { title: 'KI-Markenwahrnehmung aufbauen', href: '/wissen/ki-markenwahrnehmung' },
      { title: 'Wettbewerber analysieren', href: '/wissen/wettbewerber-ki-sichtbarkeit' },
    ],
  },
  {
    n: '04',
    id: 'ki-entwicklung',
    title: 'KI-Entwicklung',
    subtitle: 'Software und Automatisierung, mit KI gebaut',
    description: 'Tools, interne Anwendungen und Automatisierungen, entwickelt mit KI. Ein klickbarer Prototyp steht in Tagen, ein sicheres, produktionsreifes Projekt in Wochen.',
    deliverables: [
      'Klickbarer Prototyp in wenigen Tagen',
      'Automatisierung wiederkehrender Abläufe',
      'KI-Funktionen in bestehender Software',
      'Tests und Sicherheitsprüfung vor dem Livegang',
    ],
    idealFor: 'Unternehmen mit einer Idee oder einem Ablauf, der heute Handarbeit ist.',
    timeline: 'Prototyp in Tagen, Livegang in Wochen',
    schemaName: 'KI-gestützte Entwicklung und Automatisierung',
    schemaDescription: 'Schnelle Software-Entwicklung mit KI: Prototypen in Tagen, sichere produktionsreife Anwendungen und Automatisierungen in Wochen.',
    primaryArticle: { title: 'Website-Automatisierung', href: '/wissen/website-automatisierung' },
    relatedArticles: [],
  },
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

const CARD_NOTES: Record<string, string> = {
  beratung: 'Analyse, Fahrplan',
  'ki-sichtbarkeit': 'GEO, AEO, AI SEO',
  autoritaet: 'Autorität',
  'ki-entwicklung': 'Prototyp in Tagen',
};

/* The two doors in the hero carry equal weight: which one is primary depends
   on what the visitor needs. Same card, two brands. */
function AiseoCard() {
  return (
    <a href="#leistungen" className="group flex h-full min-w-0 flex-col rounded-card border-t-4 border-brand-accent bg-white p-flow text-brand-text shadow-lift transition-transform hover:-translate-y-0.5 sm:p-stack">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="text-subheading font-extrabold tracking-tight">AISEO<span className="text-brand-accent">.</span></span>
        <span className="rounded-full bg-brand-accent/15 px-3 py-1 text-micro font-semibold text-brand-accent-ink">Du bist hier</span>
      </div>
      <p className="mt-flow text-heading font-semibold">Alles rund um KI</p>
      <ul className="mt-flow border-t border-brand-line">
        {SERVICES.map((service) => (
          <li key={service.id} className="flex items-baseline justify-between gap-4 border-b border-brand-line py-2 text-meta">
            <span className="font-semibold">{service.title}</span>
            <span className="text-right text-brand-subtle">{CARD_NOTES[service.id]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-meta text-brand-muted">
        Kurzanalyse 0 €, Sprint ab 1.500 €, Betreuung ab 600 €/Mt.
      </p>
      <div className="mt-auto pt-flow">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-accent-deep px-5 py-3 text-meta font-semibold text-white transition-all group-hover:gap-3">
          Leistungen ansehen
          <ArrowRightIcon className="w-3.5 h-3.5 rotate-90" />
        </span>
      </div>
    </a>
  );
}

function WebseiteCard() {
  return (
    <a
      href={SISTER_URL}
      target="_blank"
      rel="noopener"
      className="group flex h-full min-w-0 flex-col rounded-card border-t-4 border-[#E53935] bg-white p-flow text-[#0A192F] shadow-lift transition-transform hover:-translate-y-0.5 sm:p-stack"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="flex items-center gap-2.5">
          <img src="/image/leistungen/webseite-hamburg-logo.webp" width={36} height={34} alt="" className="h-8 w-auto" />
          <span className={`${archivoBlack.className} text-body sm:text-lead`}>webseite.hamburg</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#E53935] px-3 py-1 text-micro font-semibold text-white">
          Schwesterseite
          <ArrowRightIcon className="w-3 h-3 -rotate-45" />
        </span>
      </div>
      <p className="mt-flow text-heading font-semibold">Website, SEO und Google Ads</p>
      <ul className="mt-flow border-t border-[#0A192F]/15">
        {SISTER_SERVICES.map((s) => (
          <li key={s.title} className="flex items-baseline justify-between gap-4 border-b border-[#0A192F]/15 py-2 text-meta">
            <span className="font-semibold">{s.title}</span>
            <span className="tabular-nums text-[#0A192F]/65">{s.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-meta text-[#0A192F]/70">Gleicher Ansprechpartner, gleiche Nummer.</p>
      <div className="mt-auto pt-flow">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0A192F] px-5 py-3 text-meta font-semibold text-white transition-all group-hover:gap-3">
          Zu webseite.hamburg
          <ArrowRightIcon className="w-3.5 h-3.5 -rotate-45" />
        </span>
      </div>
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
            <h1 className="max-w-[16ch] text-title sm:text-display xl:text-[5.5rem] xl:leading-[1] font-semibold">
              KI-Sichtbarkeit und KI-Entwicklung.
            </h1>
            <p className="mt-flow max-w-measure text-lead text-white/80">
              ChatGPT, Perplexity und Google AI sollen dich nennen. Software und Automatisierungen entstehen mit KI in Tagen statt Monaten.
            </p>
            {/* phones see the AISEO card first, so the second door gets a badge up here */}
            <a href={SISTER_URL} target="_blank" rel="noopener" className="mt-flow inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-meta font-semibold text-[#0A192F] lg:hidden">
              <span className="rounded-full bg-[#E53935] px-2.5 py-0.5 text-micro text-white">webseite.hamburg</span>
              Website, SEO, Google Ads
              <ArrowRightIcon className="w-3 h-3 -rotate-45" />
            </a>

            <div className="mt-rule grid grid-cols-1 gap-4 lg:grid-cols-2">
              <AiseoCard />
              <WebseiteCard />
            </div>
          </div>
        </section>

        {/* ========== LEISTUNGEN: name on the left, what you get on the right ========== */}
        <section id="leistungen" className="scroll-mt-navbar pb-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pt-rule">
              <h2 className="text-title font-semibold text-black">4 Leistungen</h2>
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
              <WebseiteCard />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

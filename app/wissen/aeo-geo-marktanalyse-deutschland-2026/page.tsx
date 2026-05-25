'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  Data: raw figures from DataForSEO pull, 25.05.2026                */
/* ------------------------------------------------------------------ */

const HONEYTRAPS = [
  {
    kw: 'aeo',
    sv: '3.600',
    yoy: '+15%',
    intent: 'American Eagle Outfitters (Mode), Authorized Economic Operator (Zollrecht)',
    rankers: 'IHK, Max-Line, American-Eagle.eu',
  },
  {
    kw: 'geo',
    sv: '27.100',
    yoy: '+22%',
    intent: 'Geoportal Hamburg, Geo Magazin, Geographie-Studium',
    rankers: 'geoportal-hamburg.de, geo.de, uni-hamburg.de',
  },
  {
    kw: 'geo hamburg',
    sv: '260',
    yoy: '−7%',
    intent: 'Geoportal Hamburg, Landesbetrieb Geoinformation',
    rankers: '100% Geoinformation/Vermessung',
  },
  {
    kw: 'aeo hamburg',
    sv: '10',
    yoy: '+50%',
    intent: 'AWO Hamburg (Wohlfahrtsverband)',
    rankers: '100% AWO Landesverband, AWO Akademie',
  },
];

const HONEYTRAP_GALLERY = [
  {
    src: '/images/honeytrap/aeo.webp',
    caption: 'Suche nach „aeo": Was Google in Deutschland tatsächlich zeigt.',
  },
  {
    src: '/images/honeytrap/american_eagle.webp',
    caption: 'Die SERP wird von American Eagle Outfitters dominiert. Jeans, Boxershorts, Sneaker.',
  },
  {
    src: '/images/honeytrap/geo_magazin.webp',
    caption: 'GEO ist seit 1976 das größte Reportage-Magazin im deutschsprachigen Raum.',
  },
  {
    src: '/images/honeytrap/Landesbetrieb.webp',
    caption: 'Der Landesbetrieb Geoinformation und Vermessung besetzt die ersten Plätze für „geo hamburg".',
  },
  {
    src: '/images/honeytrap/awo.webp',
    caption: 'Selbst „aeo hamburg" führt zur Arbeiterwohlfahrt (AWO Hamburg).',
  },
];

const TOP_GROWERS = [
  { kw: 'aeo optimierung', f3: 3.3, l3: 46.7, yoy: '+1.300%' },
  { kw: 'wie funktioniert geo', f3: 6.7, l3: 53.3, yoy: '+700%' },
  { kw: 'geo audit', f3: 33.3, l3: 243.3, yoy: '+630%' },
  { kw: 'ai visibility tool', f3: 20.0, l3: 143.3, yoy: '+617%' },
  { kw: 'geo vs aeo', f3: 6.7, l3: 40.0, yoy: '+500%' },
  { kw: 'aeo vs geo', f3: 10.0, l3: 46.7, yoy: '+367%' },
  { kw: 'ki sichtbarkeit', f3: 36.7, l3: 170.0, yoy: '+364%' },
  { kw: 'ai visibility', f3: 36.7, l3: 153.3, yoy: '+318%' },
  { kw: 'aeo marketing', f3: 30.0, l3: 113.3, yoy: '+278%' },
  { kw: 'llm visibility', f3: 13.3, l3: 46.7, yoy: '+250%' },
  { kw: 'was ist geo seo', f3: 30.0, l3: 96.7, yoy: '+222%' },
  { kw: 'llm analyse', f3: 20.0, l3: 63.3, yoy: '+217%' },
  { kw: 'gemini seo', f3: 20.0, l3: 60.0, yoy: '+200%' },
  { kw: 'geo optimierung', f3: 486.7, l3: 1200.0, yoy: '+147%' },
  { kw: 'geo marketing', f3: 233.3, l3: 516.7, yoy: '+121%' },
  { kw: 'was ist aeo', f3: 83.3, l3: 160.0, yoy: '+92%' },
  { kw: 'aeo seo', f3: 96.7, l3: 183.3, yoy: '+90%' },
  { kw: 'ki seo agentur', f3: 103.3, l3: 196.7, yoy: '+90%' },
  { kw: 'geo seo', f3: 1460.0, l3: 2566.7, yoy: '+76%' },
  { kw: 'perplexity seo', f3: 33.3, l3: 56.7, yoy: '+70%' },
];

const TOP_DECLINERS = [
  { kw: 'google ai mode seo', f3: 36.7, l3: 10.0, yoy: '−73%' },
  { kw: 'zukunft von seo', f3: 120.0, l3: 33.3, yoy: '−72%' },
  { kw: 'google ai overviews seo', f3: 33.3, l3: 10.0, yoy: '−70%' },
  { kw: 'seo fuer chatgpt', f3: 160.0, l3: 53.3, yoy: '−67%' },
  { kw: 'chatgpt seo', f3: 866.7, l3: 323.3, yoy: '−63%' },
  { kw: 'llm seo', f3: 246.7, l3: 116.7, yoy: '−53%' },
  { kw: 'llmo', f3: 676.7, l3: 330.0, yoy: '−51%' },
  { kw: 'seo experte hamburg', f3: 486.7, l3: 250.0, yoy: '−49%' },
  { kw: 'seo beratung hamburg', f3: 426.7, l3: 220.0, yoy: '−48%' },
  { kw: 'llm optimization', f3: 96.7, l3: 56.7, yoy: '−41%' },
];

const CLUSTER_SIZES = [
  { name: 'GEO (echte Begriffe)', seeds: 23, hits: 15, sv: 5780, note: 'Ohne den Honigfallen-Begriff „geo"' },
  { name: 'AEO (echte Begriffe)', seeds: 22, hits: 6, sv: 470, note: 'Ohne den Honigfallen-Begriff „aeo"' },
  { name: 'Klassisches lokales SEO Hamburg', seeds: 20, hits: 9, sv: 2770, note: 'Lokal nur ~310 SV/Monat' },
  { name: 'LLMO / AI Visibility', seeds: 29, hits: 19, sv: 1090, note: '' },
  { name: 'Deutsche kommerzielle Phrasen', seeds: 29, hits: 10, sv: 1030, note: 'CPC bis 40 €' },
  { name: 'Bildung / Vergleiche', seeds: 24, hits: 12, sv: 990, note: 'Niedrige CPC, hohe Funnel-Position' },
  { name: 'Plattform-spezifisch', seeds: 30, hits: 14, sv: 860, note: 'Rückläufig (siehe „ChatGPT SEO")' },
  { name: 'Service-Intent (Audit/Strategie)', seeds: 28, hits: 9, sv: 350, note: 'CPC 8–23 €' },
  { name: 'Entity / E-E-A-T / Schema', seeds: 22, hits: 5, sv: 280, note: '' },
  { name: 'Lokales AEO/GEO Hamburg', seeds: 29, hits: 2, sv: 270, note: 'Nachfrage unter Messschwelle, SERPs voll' },
  { name: 'Problem-aware („warum erscheint…")', seeds: 21, hits: 0, sv: 0, note: 'Latente Nachfrage, keine SV' },
  { name: 'B2B / Vertikal („AEO für Ärzte" …)', seeds: 22, hits: 0, sv: 0, note: 'Latente Nachfrage, keine SV' },
];

const Q3_TARGETS = [
  { kw: 'geo seo', sv: 2567, cpc: '€6,19', growth: '+76%', comp: 'HIGH', play: 'Pillar / Definition' },
  { kw: 'geo optimierung', sv: 1200, cpc: '€11,47', growth: '+147%', comp: 'HIGH', play: 'Service / Pillar' },
  { kw: 'generative engine optimization', sv: 1300, cpc: '€6,40', growth: '+8%', comp: 'HIGH', play: 'Pillar' },
  { kw: 'geo agentur', sv: 1160, cpc: '€27,91', growth: '+53%', comp: 'MEDIUM', play: 'Kommerzielle Money-Seite' },
  { kw: 'geo vs seo', sv: 567, cpc: '€4,55', growth: '+50%', comp: 'MEDIUM', play: 'Bildung / Funnel-Einstieg' },
  { kw: 'geo audit', sv: 243, cpc: '€8,10', growth: '+630%', comp: 'LOW', play: 'Audit-Service' },
  { kw: 'answer engine optimization', sv: 230, cpc: '€5,34', growth: '+25%', comp: 'MEDIUM', play: 'AEO-Pillar' },
  { kw: 'ki seo agentur', sv: 197, cpc: '€40,36', growth: '+90%', comp: 'MEDIUM', play: 'Money-Seite (höchste CPC)' },
  { kw: 'aeo seo', sv: 183, cpc: '€4,61', growth: '+90%', comp: 'LOW', play: 'Bildung / Disambiguierung' },
  { kw: 'ki sichtbarkeit', sv: 170, cpc: '€11,83', growth: '+364%', comp: 'MEDIUM', play: 'Marken-Term, Hub' },
];

const HAMBURG_LOCAL = [
  { kw: 'suchmaschinenoptimierung hamburg', f3: 1207, l3: 1300, yoy: '+8%', cpc: '€19,96' },
  { kw: 'seo agentur hamburg', f3: 1107, l3: 823, yoy: '−26%', cpc: '€28,66' },
  { kw: 'seo experte hamburg', f3: 487, l3: 250, yoy: '−49%', cpc: '€14,60' },
  { kw: 'seo beratung hamburg', f3: 427, l3: 220, yoy: '−48%', cpc: 'n/a' },
  { kw: 'local seo hamburg', f3: 123, l3: 173, yoy: '+41%', cpc: '€14,35' },
  { kw: 'aeo hamburg', f3: 6.7, l3: 10, yoy: '+50%', cpc: 'n/a (Honigfalle: AWO)' },
  { kw: 'geo hamburg', f3: 300, l3: 280, yoy: '−7%', cpc: 'n/a (Honigfalle: Geoportal)' },
];

const FAQS = [
  {
    q: 'Was ist AEO und was ist GEO?',
    a: 'AEO steht für Answer Engine Optimization und beschreibt die Optimierung von Inhalten für Systeme, die direkte Antworten geben (ChatGPT, Perplexity, Google AI Overviews, Sprachassistenten). GEO steht für Generative Engine Optimization und fokussiert speziell auf generative KI-Systeme. Beide Begriffe werden im deutschen Markt häufig synonym verwendet. GEO ist als Suchbegriff (2.567 SV/Monat für „geo seo") deutlich verbreiteter als AEO (230 SV/Monat für „answer engine optimization").',
  },
  {
    q: 'Wie groß ist der deutsche AEO/GEO-Markt 2026?',
    a: 'Bereinigt um Honigfallen-Begriffe ergibt unsere Erhebung von 297 Keywords ein Gesamtsuchvolumen von rund 11.000 monatlichen Suchen über zwölf Themen-Cluster. Der GEO-Cluster (echte Begriffe, ohne den Geoportal-Term „geo") trägt mit 5.780 SV/Monat den Großteil. Lokal in Hamburg sind die spezifischen AEO/GEO-Begriffe noch unter der Messschwelle von Google Ads. Die SERPs sind aber bereits von Wettbewerbern besetzt, ein klarer Hinweis auf latente Nachfrage.',
  },
  {
    q: 'Warum sind „aeo" und „geo" Honigfallen für deutsche SEO-Agenturen?',
    a: 'Die reinen Drei-Buchstaben-Akronyme kollidieren mit etablierten Begriffen. „geo" (27.100 SV) bezeichnet im deutschen Suchverhalten überwiegend das Geoportal Hamburg, das Geo Magazin und Geographie-Studiengänge. „aeo" (3.600 SV) ist primär American Eagle Outfitters und das Zollrecht-Konzept Authorized Economic Operator. Wer auf diese reinen Akronyme bietet oder optimiert, fängt Traffic ab, der nichts mit AI-SEO zu tun hat. Disambiguierte Formen wie „geo seo", „aeo seo" oder „answer engine optimization" haben deutlich saubereren Intent.',
  },
  {
    q: 'Welche AEO/GEO-Begriffe wachsen am schnellsten?',
    a: 'Die Top-Wachstumsbegriffe im Zwölfmonats-Vergleich: „aeo optimierung" +1.300%, „wie funktioniert geo" +700%, „geo audit" +630%, „ai visibility tool" +617%, „ki sichtbarkeit" +364%, „ai visibility" +318%, „aeo marketing" +278%, „llm visibility" +250%, „geo optimierung" +147% (487 auf 1.200 SV/Monat), „geo seo" +76% (1.460 auf 2.567 SV/Monat). Diese Begriffe sind im April 2026 die klare Wachstumsfront.',
  },
  {
    q: 'Stimmt es, dass „ChatGPT SEO" als Suchbegriff zurückgeht?',
    a: 'Ja, deutlich. „chatgpt seo" hat in den letzten zwölf Monaten 63% an Suchvolumen verloren (867 auf 323 SV/Monat). Verwandte Begriffe folgen demselben Muster: „seo für chatgpt" −67%, „google ai overviews seo" −70%, „chatgpt für seo" −67%. Unsere Hypothese: Die Audience migriert von plattform-spezifischen Begriffen („ChatGPT SEO") zur AEO/GEO-Terminologie, die plattform-übergreifend gemeint ist.',
  },
  {
    q: 'Wie sieht die Lage in Hamburg konkret aus?',
    a: 'Zwei gegenläufige Bewegungen. Klassische Hamburg-SEO-Begriffe verlieren: „seo experte hamburg" −49%, „seo beratung hamburg" −48%, „seo agentur hamburg" −26%. Gleichzeitig haben spezifische lokale AEO/GEO-Begriffe wie „ki seo agentur hamburg" oder „answer engine optimization hamburg" zwar noch kein messbares Volumen, aber die SERPs sind voll besetzt. Wettbewerber wie effektor.de, semsea-hh.de, ki-hafen.de oder geoagentur-hamburg.de haben dedizierte Seiten ausgerollt. Klassische SEO-Nachfrage in Hamburg bleibt nur in „suchmaschinenoptimierung hamburg" (+8%) und „local seo hamburg" (+41%) stabil.',
  },
  {
    q: 'Welche Methodik liegt der Studie zugrunde?',
    a: 'Wir haben 297 Keyword-Seeds über zwölf semantische Cluster definiert (Hamburg-lokal, AEO, GEO, LLMO, Plattform, Bildung, Service-Intent, B2B-vertikal, klassisches lokales SEO, Entity/Trust, problem-aware, deutsche kommerzielle Phrasen). Über die DataForSEO API haben wir Google-Ads-Suchvolumen, CPC und Wettbewerbsstufe für Deutschland (Location-Code 2276, Sprache de) erhoben. Zusätzlich Daten für die englische Sprachvariante in Deutschland sowie für die Region Hamburg (Location-Code 1003854). Für die zehn wichtigsten Anker haben wir Keyword-Expansionen abgerufen. Für zwölf priorisierte Begriffe die Google-SERP-Top-20. Das Zwölfmonats-Trendsignal stammt aus den monatlichen Verlaufsdaten der DataForSEO-Antwort.',
  },
  {
    q: 'Wie oft wird der Datensatz aktualisiert?',
    a: 'Quartalsweise. Diese Erhebung ist die Q2-2026-Ausgabe, datiert auf den 25. Mai 2026. Die nächste planmäßige Aktualisierung ist Ende August 2026 (Q3 2026). Bei größeren Marktbewegungen (z. B. Algorithmus-Updates von Google AI Overviews, neue Plattform-Launches) erfolgt eine außerplanmäßige Erhebung.',
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                           */
/* ------------------------------------------------------------------ */

const PAGE_URL = 'https://aiseo.hamburg/wissen/aeo-geo-marktanalyse-deutschland-2026';
const PUBLISHED = '2026-05-25';
const MODIFIED = '2026-05-25';

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AEO/GEO Marktanalyse Deutschland Q2 2026: 297 Keywords, drei Honigfallen, der stille Rückgang von „ChatGPT SEO"',
  description:
    'Primärrecherche über DataForSEO: 297 deutsche AEO/GEO/LLMO Keywords, Suchvolumen, CPC und 12-Monats-Trends. Drei Honigfallen, sechs Begriffe mit 200 bis 1.300% Wachstum.',
  image: 'https://aiseo.hamburg/images/honeytrap/hero_bg.webp',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: { '@id': 'https://aiseo.hamburg/#organization' },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'de',
  about: [
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Generative Engine Optimization' },
    { '@type': 'Thing', name: 'Large Language Model Optimization' },
    { '@type': 'Thing', name: 'KI-Sichtbarkeit' },
    { '@type': 'Thing', name: 'Suchmaschinenoptimierung Hamburg' },
  ],
  citation: {
    '@type': 'CreativeWork',
    name: 'DataForSEO Google Ads Search Volume API',
    url: 'https://dataforseo.com',
  },
};

const datasetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'AEO/GEO/LLMO Keyword-Datensatz Deutschland Q2 2026',
  alternateName: 'German AEO/GEO/LLMO Keyword Dataset Q2 2026',
  description:
    '297 deutsche Keyword-Seeds rund um Answer Engine Optimization, Generative Engine Optimization, LLM Optimization und KI-Sichtbarkeit. Pro Keyword: monatliches Suchvolumen (DE), CPC, Wettbewerbsstufe, Hamburg-Volumen, englische Variante, 12-Monats-Trend.',
  url: PAGE_URL,
  identifier: 'aeo-marktanalyse-deutschland-2026-q2',
  keywords: [
    'AEO',
    'GEO',
    'LLMO',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'KI-Sichtbarkeit',
    'Suchvolumen Deutschland',
    'Hamburg SEO',
    'Keyword Research',
  ],
  creator: {
    '@type': 'Organization',
    '@id': 'https://aiseo.hamburg/#organization',
    name: 'aiseo.hamburg',
    url: 'https://aiseo.hamburg',
  },
  publisher: { '@id': 'https://aiseo.hamburg/#organization' },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  temporalCoverage: '2025-05/2026-04',
  spatialCoverage: {
    '@type': 'Place',
    name: 'Deutschland',
    geo: { '@type': 'GeoShape', addressCountry: 'DE' },
  },
  inLanguage: 'de',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  isAccessibleForFree: true,
  measurementTechnique: 'DataForSEO Google Ads Keyword-Daten und Google SERP-Daten',
  variableMeasured: [
    'Monatliches Google-Suchvolumen (Deutschland)',
    'Monatliches Google-Suchvolumen (Hamburg metro 1003854)',
    'CPC in EUR',
    'Wettbewerbsstufe (LOW/MEDIUM/HIGH)',
    '12-Monats-Trend',
  ],
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/csv',
      contentUrl: 'https://aiseo.hamburg/data/aeo-marktanalyse-deutschland-2026-q2.csv',
      name: 'Hauptdatensatz: Keywords, Volumen, CPC, Wettbewerb',
    },
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/csv',
      contentUrl: 'https://aiseo.hamburg/data/aeo-trends-deutschland-2026-q2.csv',
      name: 'Trenddaten: 12-Monats-Suchvolumen pro Keyword',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'AEO/GEO Marktanalyse Deutschland Q2 2026' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Helper components                                                 */
/* ------------------------------------------------------------------ */

const StatBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{text}</p>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode; tone?: 'up' | 'down' | 'flat' }> = ({
  children,
  tone = 'flat',
}) => {
  const cls =
    tone === 'up'
      ? 'bg-emerald-50 text-emerald-700'
      : tone === 'down'
      ? 'bg-rose-50 text-rose-700'
      : 'bg-stone-100 text-stone-700';
  return (
    <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums ${cls}`}>
      {children}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AEOGEOMarktanalyseDeutschland2026Page() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ============ Hero ============ */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <a href="/" className="hover:text-brand-accent transition-colors">
                  Startseite
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/wissen" className="hover:text-brand-accent transition-colors">
                  Wissen
                </a>
              </li>
              <li>/</li>
              <li className="text-black font-medium">AEO/GEO Marktanalyse Deutschland Q2 2026</li>
            </ol>
          </nav>

          <div className="mb-6 flex items-center gap-3 flex-wrap text-xs uppercase tracking-wider text-gray-500">
            <span className="bg-brand-accent text-white px-2.5 py-1 rounded-md font-semibold">Primärrecherche</span>
            <span>Q2 2026 · 25. Mai 2026</span>
            <span>·</span>
            <span>Nächste Aktualisierung: Q3 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            Die drei Honigfallen der AEO/GEO-Suche in Deutschland
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-10">
            Wir haben 297 Keywords über DataForSEO geprüft. Drei kosten deutsche SEO-Agenturen Geld. Sechs wachsen mit +200 bis +1.300% pro Jahr. Und „ChatGPT SEO" ist als Suchbegriff um 63% gefallen. Die Rohdaten, die unsere Targeting-Entscheidungen für aiseo.hamburg geprägt haben. Mit CSV-Download.
          </p>

          <figure className="rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <img
              src="/images/honeytrap/hero_bg.webp"
              alt="Eine Honigfalle: tropfender Honig mit eingeschlossenen Symbolen für American Eagle, Google Maps Pin, GEO Magazin und das ChatGPT-Logo."
              width={1600}
              height={900}
              loading="eager"
              className="w-full h-auto"
            />
          </figure>
        </FadeIn>
      </section>

      {/* ============ TL;DR ============ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto pb-12">
        <FadeIn>
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR. Fünf Befunde.</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span>
                  <strong className="text-black">Drei Honigfallen</strong> verbrennen Budget: <code>aeo</code> (3.600 SV/Monat, primär American Eagle), <code>geo</code> (27.100 SV/Monat, primär Geoportal Hamburg), <code>geo&nbsp;hamburg</code> (260 SV, 100% Geoportal).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span>
                  <strong className="text-black">Sechs Begriffe explodieren:</strong> „aeo optimierung" +1.300%, „geo audit" +630%, „ki sichtbarkeit" +364%, „ai visibility" +318%, „geo optimierung" +147%, „geo seo" +76% (jetzt 2.567 SV/Monat).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span>
                  <strong className="text-black">„ChatGPT SEO" ist auf dem Rückzug:</strong> −63% in zwölf Monaten. Die Audience migriert vom plattform-spezifischen Vokabular zur AEO/GEO-Terminologie.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span>
                  <strong className="text-black">Hamburg lokal:</strong> klassisches SEO verliert (−26% bis −49% bei Beratung/Experte/Agentur), AEO/GEO-Suffix-Begriffe haben noch keine messbare SV, aber voll besetzte SERPs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">5.</span>
                <span>
                  <strong className="text-black">Bereinigte Marktgröße:</strong> rund 11.000 monatliche Suchen über zwölf Cluster, davon ~5.800 im GEO-Bereich (ohne Honigfalle).{' '}
                  <a
                    href="/data/aeo-marktanalyse-deutschland-2026-q2.csv"
                    className="underline decoration-brand-accent decoration-2 underline-offset-2 hover:text-brand-accent"
                  >
                    Vollständiger Datensatz als CSV
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============ Honigfallen ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Die drei Honigfallen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Drei der suchstärksten Begriffe im AEO/GEO-Umfeld sind <em>keine</em> AEO/GEO-Begriffe. Sie kollidieren mit etablierten Bedeutungen. Wer auf die reinen Drei-Buchstaben-Akronyme bietet oder seine Seiten danach benennt, ködert Traffic, der nie konvertiert.
          </p>

          <StatBox text='27.100 Suchen pro Monat im Begriff „geo". Kein einziges Top-10-Ergebnis ist eine SEO-Agentur. Es ist Geoportal Hamburg, Geo Magazin, Uni-Hamburg.' />

          <div className="overflow-x-auto -mx-2 my-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-2 font-semibold text-black">Begriff</th>
                  <th className="py-3 px-2 font-semibold text-black">SV/Monat</th>
                  <th className="py-3 px-2 font-semibold text-black">12-Mon-Trend</th>
                  <th className="py-3 px-2 font-semibold text-black">Wirklicher Intent</th>
                  <th className="py-3 px-2 font-semibold text-black">Top-Ranker</th>
                </tr>
              </thead>
              <tbody>
                {HONEYTRAPS.map((h) => (
                  <tr key={h.kw} className="border-b border-gray-100">
                    <td className="py-3 px-2 font-mono text-black">{h.kw}</td>
                    <td className="py-3 px-2 tabular-nums">{h.sv}</td>
                    <td className="py-3 px-2">
                      <Pill tone={h.yoy.startsWith('−') ? 'down' : 'up'}>{h.yoy}</Pill>
                    </td>
                    <td className="py-3 px-2 text-gray-700">{h.intent}</td>
                    <td className="py-3 px-2 text-gray-700">{h.rankers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">„aeo" (3.600 SV/Monat):</strong> Die Top-Ergebnisse sind American Eagle Outfitters (Mode-Onlineshop), die IHK-Seite zum „Authorized Economic Operator" (Zollrecht) und der Anbieter Max-Line. Die DataForSEO-Expansion zu diesem Anker liefert „american eagle jeans herren", „american eagle boxershorts", „zugelassener wirtschaftsbeteiligter aeo". Null Bezug zu AI-SEO.
            </p>
            <p>
              <strong className="text-black">„geo" (27.100 SV/Monat):</strong> Die ersten zehn Treffer in der Google-DE-Suche: geoportal-hamburg.de, geo.de (Geo Magazin), erneut geoportal-hamburg.de, hamburg.de (Landesbetrieb Geoinformation und Vermessung), geo.de, geo.uni-hamburg.de (Geographie-Fachbereich), Geoportal der Metropolregion Hamburg, geo.de, fsr-geographie.de, urbandataplatform.hamburg. Keine einzige SEO-Agentur. Wer auf diesen Begriff bietet oder seine Seite „GEO" nennt, ist im falschen Kontext.
            </p>
            <p>
              <strong className="text-black">„geo hamburg" (260 SV/Monat, −7%):</strong> Reines Geoportal-Hamburg-Territorium. Selbst Begriffe wie „aeo hamburg" (10 SV) führen zu 100% AWO-Hamburg-Ergebnissen, dem Arbeiterwohlfahrt-Landesverband.
            </p>
            <p>
              <strong className="text-black">Praktische Konsequenz:</strong> Jede AEO/GEO/LLMO-Landingpage sollte den Begriff im Title und in der H1 disambiguieren. „Answer Engine Optimization (AEO)" statt „AEO". „Generative Engine Optimization (GEO)" statt „GEO". Die langen Formen sind klarer für Menschen und klarer für Google.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============ Honigfallen-Galerie ============ */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black mb-3">
            Was Google tatsächlich zeigt
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Screenshots der echten SERPs zu „aeo", „geo", „geo hamburg" und „aeo hamburg". Mode, Magazin, Behörde, Wohlfahrtsverband. Aber keine SEO-Agentur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HONEYTRAP_GALLERY.map((item, idx) => (
              <figure
                key={item.src}
                className={`bg-white rounded-2xl overflow-hidden border border-stone-200 ${
                  idx === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  width={900}
                  height={540}
                  loading="lazy"
                  className="w-full h-auto block"
                />
                <figcaption className="px-5 py-4 text-sm text-gray-700 leading-relaxed border-t border-stone-100">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ============ Top 20 Grower ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Was wirklich wächst: Top 20 Begriffe im 12-Monats-Trend
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Methodik: <code>First 3mo</code> ist das durchschnittliche monatliche Suchvolumen der ältesten drei Monate im Trendfenster (Mai bis Juli 2025), <code>Last 3mo</code> der jüngsten drei Monate (Februar bis April 2026). YoY ist die prozentuale Veränderung.
          </p>

          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-2 font-semibold text-black">Keyword</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">First 3mo</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">Last 3mo</th>
                  <th className="py-3 px-2 font-semibold text-black">YoY</th>
                </tr>
              </thead>
              <tbody>
                {TOP_GROWERS.map((r) => (
                  <tr key={r.kw} className="border-b border-gray-100">
                    <td className="py-2.5 px-2 font-mono text-black">{r.kw}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums text-gray-700">{r.f3}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums font-semibold text-black">{r.l3}</td>
                    <td className="py-2.5 px-2">
                      <Pill tone="up">{r.yoy}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 italic">
            Hinweis: SV-Werte unter 10/Monat sind bei Google Ads gerundet/zensiert. Hohe Prozentwerte auf kleiner Basis (z. B. „aeo optimierung" 3,3 auf 46,7) bestätigen die Richtung, nicht die Magnitude.
          </p>
        </FadeIn>
      </section>

      {/* ============ ChatGPT SEO Decline ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Der stille Rückzug von „ChatGPT SEO"
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            „ChatGPT SEO" war 2025 <em>der</em> Konsumenten-Begriff für AI-Sichtbarkeit. Der erste, den Marketing-Verantwortliche gegoogelt haben. Heute fällt er. Und mit ihm seine Geschwister.
          </p>

          <figure className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 my-8">
            <img
              src="/images/honeytrap/chatgpt_decreasing.webp"
              alt='Suchvolumen-Verlauf für „chatgpt seo" in Deutschland: 867 Suchen im Mittel der ältesten drei Monate, 323 in den jüngsten drei. Rückgang von 63 Prozent.'
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto"
            />
          </figure>

          <StatBox text='„chatgpt seo": 867 auf 323 monatliche Suchen. Minus 63% in zwölf Monaten.' />

          <div className="overflow-x-auto -mx-2 my-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-2 font-semibold text-black">Begriff</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">First 3mo</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">Last 3mo</th>
                  <th className="py-3 px-2 font-semibold text-black">YoY</th>
                </tr>
              </thead>
              <tbody>
                {TOP_DECLINERS.map((r) => (
                  <tr key={r.kw} className="border-b border-gray-100">
                    <td className="py-2.5 px-2 font-mono text-black">{r.kw}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums text-gray-700">{r.f3}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums font-semibold text-black">{r.l3}</td>
                    <td className="py-2.5 px-2">
                      <Pill tone="down">{r.yoy}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>Drei mögliche Erklärungen, die sich nicht ausschließen.</p>
            <ol className="space-y-3 list-decimal pl-6">
              <li>
                <strong className="text-black">Vokabular-Migration.</strong> Die Audience wandert von plattform-spezifischen Begriffen („ChatGPT SEO", „Google AI Overviews SEO") zur plattform-agnostischen AEO/GEO-Terminologie, die alle Antwort-Engines umfasst. „geo seo" wächst im selben Zeitraum auf 2.567 SV. Das ist fast der Verlust von „chatgpt seo" plus „seo für chatgpt".
              </li>
              <li>
                <strong className="text-black">Naming-Konvergenz.</strong> Deutsche Marketing-Verantwortliche, die 2025 von US-Quellen lernten, hatten zuerst „ChatGPT SEO" im Kopf. 2026 sind deutsche Fachartikel verfügbar. Diese nutzen GEO und AEO. Das Suchverhalten folgt der Fachsprache.
              </li>
              <li>
                <strong className="text-black">Sättigungs-Effekt.</strong> „ChatGPT SEO" hatte 2025 einen Neuheits-Peak. Die initiale Welle des Informationsbedarfs ist gedeckt. Was bleibt, sind tiefere Praxis-Fragen, die unter spezifischeren Begriffen gesucht werden.
              </li>
            </ol>
            <p>
              <strong className="text-black">Was das praktisch bedeutet:</strong> Wer eine Seite „ChatGPT SEO Agentur" baut und auf Suchvolumen-Trends im Mai 2026 schaut, sieht einen schrumpfenden Markt. Wer den semantischen Cluster betrachtet, also GEO, AEO und KI-Sichtbarkeit zusammen, sieht den eigentlichen Markt wachsen. Plattform-spezifische Seiten sollten innerhalb eines breiteren AEO/GEO-Hubs leben, nicht als Solitäre.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============ Hamburg ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Wo Hamburg sich verschiebt
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Hamburg ist im Datensatz ein doppelter Sonderfall. Klassische lokale SEO-Begriffe verlieren signifikant. Gleichzeitig sind die spezifischen lokalen AEO/GEO-Begriffe noch unter der Google-Ads-Messschwelle. Aber die SERPs sind bereits voll besetzt.
          </p>

          <div className="overflow-x-auto -mx-2 my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-2 font-semibold text-black">Begriff</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">First 3mo</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">Last 3mo</th>
                  <th className="py-3 px-2 font-semibold text-black">YoY</th>
                  <th className="py-3 px-2 font-semibold text-black">CPC</th>
                </tr>
              </thead>
              <tbody>
                {HAMBURG_LOCAL.map((r) => (
                  <tr key={r.kw} className="border-b border-gray-100">
                    <td className="py-2.5 px-2 font-mono text-black">{r.kw}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums text-gray-700">{r.f3}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums font-semibold text-black">{r.l3}</td>
                    <td className="py-2.5 px-2">
                      <Pill tone={r.yoy.startsWith('−') ? 'down' : 'up'}>{r.yoy}</Pill>
                    </td>
                    <td className="py-2.5 px-2 text-gray-700">{r.cpc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Die spezifisch lokalen AEO/GEO-Begriffe (<code>ai seo agentur hamburg</code>, <code>ki seo agentur hamburg</code>, <code>generative engine optimization hamburg</code>, <code>answer engine optimization hamburg</code>) haben in Google Ads ein gerundetes Suchvolumen von 0 bis 10 SV/Monat. Trotzdem ist die SERP für jeden dieser Begriffe voll besetzt:
            </p>
            <ul className="space-y-2 pl-6 list-disc text-gray-700">
              <li><code className="text-black">effektor.de</code>, „KI-SEO verstehen", konsistent #1 bis #2 lokal</li>
              <li><code className="text-black">semsea-hh.de</code>, „GEO Agentur für AI-SEO &amp; LLMO, SEMSEA Hamburg"</li>
              <li><code className="text-black">ki-hafen.de</code>, „KI-Agentur aus Hamburg, Generative Engine Optimization"</li>
              <li><code className="text-black">aspector-hamburg.de</code>, „Chat-GPT-SEO &amp; GEO mit Aspector"</li>
              <li><code className="text-black">geoagentur-hamburg.de</code>, Exact-Match-Domain</li>
              <li><code className="text-black">seiten-werk.com</code>, <code className="text-black">proactive-media.de</code>, <code className="text-black">bavaria-ai.com</code>, <code className="text-black">myartside.de</code>, <code className="text-black">lukas-fischer.de</code></li>
            </ul>
            <p>
              <strong className="text-black">Was das heißt:</strong> Die Nachfrage existiert, liegt aber unter der Messschwelle von Google Ads (Begriffe mit weniger als ~10 monatlichen Suchen werden gerundet zensiert oder als 0 ausgewiesen). Wer in Hamburg wartet, bis Suchvolumen offiziell „ankommt", verliert das Wettrennen um die SERP. Die Bewegung ist supply-side: Wettbewerber rollen Seiten aus, bevor die Demand-Daten sichtbar werden.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============ Cluster sizes ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Die bereinigte Marktgröße
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            297 Seeds in zwölf semantischen Clustern. Σ SV/Monat bereinigt um die Honigfallen-Begriffe „aeo" (3.600) und „geo" (27.100) ergibt rund 11.000 monatliche Suchen quer durch die deutschsprachige AEO/GEO-Suche.
          </p>

          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-2 font-semibold text-black">Cluster</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">Seeds</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">Mit SV &gt; 0</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">Σ SV DE/Mo</th>
                  <th className="py-3 px-2 font-semibold text-black">Anmerkung</th>
                </tr>
              </thead>
              <tbody>
                {CLUSTER_SIZES.map((c) => (
                  <tr key={c.name} className="border-b border-gray-100">
                    <td className="py-2.5 px-2 font-semibold text-black">{c.name}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums">{c.seeds}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums">{c.hits}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums font-semibold">{c.sv.toLocaleString('de-DE')}</td>
                    <td className="py-2.5 px-2 text-gray-700 text-xs">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 italic">
            „Problem-aware" und „B2B/Vertikal" haben in dieser Erhebung 0 messbare SV. Die SERPs zeigen aber: AI-Engines indexieren bereits Inhalte zu diesen Anfragen. Wer früh schreibt, sammelt Zitationen, bevor das Suchvolumen offiziell auftaucht.
          </p>
        </FadeIn>
      </section>

      {/* ============ Top 10 Q3 Targets ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Was deutsche Agenturen Q3 2026 targeten sollten
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Die folgenden zehn Begriffe priorisieren wir auf aiseo.hamburg. Auswahlkriterien: saubere Intent (kein Honigfallen-Charakter), Suchvolumen ≥ 150/Monat oder Wachstum &gt; 100%, klar kommerzielle oder Bildungs-Funktion im Funnel.
          </p>

          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-2 font-semibold text-black">Keyword</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">SV/Mo</th>
                  <th className="py-3 px-2 font-semibold text-black text-right">CPC</th>
                  <th className="py-3 px-2 font-semibold text-black">YoY</th>
                  <th className="py-3 px-2 font-semibold text-black">Wettbewerb</th>
                  <th className="py-3 px-2 font-semibold text-black">Einsatz</th>
                </tr>
              </thead>
              <tbody>
                {Q3_TARGETS.map((t) => (
                  <tr key={t.kw} className="border-b border-gray-100">
                    <td className="py-2.5 px-2 font-mono text-black">{t.kw}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums font-semibold">{t.sv.toLocaleString('de-DE')}</td>
                    <td className="py-2.5 px-2 text-right tabular-nums">{t.cpc}</td>
                    <td className="py-2.5 px-2">
                      <Pill tone="up">{t.growth}</Pill>
                    </td>
                    <td className="py-2.5 px-2 text-gray-700">{t.comp}</td>
                    <td className="py-2.5 px-2 text-gray-700">{t.play}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 italic">
            „ki seo agentur" hat mit 40,36 € die höchste CPC im gesamten Datensatz. Ein klares Signal für kommerziellen Käufer-Intent. Im selben Cluster: „suchmaschinenoptimierung hamburg" 19,96 €, „seo agentur hamburg" 28,66 €.
          </p>
        </FadeIn>
      </section>

      {/* ============ Honigfallen-Mechanik ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Warum Honigfallen entstehen, und wann sie verschwinden
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Drei-Buchstaben-Akronyme sind im Marketing populär, weil sie sich einprägen. Sie sind aber auch das Wortmaterial, das in der natürlichen Sprache <em>schon belegt ist</em>. „AEO" war in Deutschland zwanzig Jahre lang die Abkürzung für American Eagle Outfitters und für „Authorized Economic Operator". Zwei sehr unterschiedliche Domänen, beide mit eigenem Such-Footprint. „GEO" ist seit Jahrzehnten Geographie, Geoinformatik, Geopolitik.
            </p>
            <p>
              Wenn ein neues Bedeutungsfeld auf ein bereits belegtes Akronym trifft, entsteht eine <strong className="text-black">Disambiguierungs-Lücke</strong>. Google weiß noch nicht, dass die Nutzerin, die „aeo" tippt, eventuell „Answer Engine Optimization" meint. Bis Google das gelernt hat (meist 12 bis 24 Monate, abhängig davon, wie viele neue Inhalte im neuen Sinn produziert werden), bleibt die SERP von den alten Bedeutungen dominiert.
            </p>
            <p>
              <strong className="text-black">Die Lücke schließt sich von zwei Seiten:</strong>
            </p>
            <ul className="space-y-2 pl-6 list-disc text-gray-700">
              <li><strong className="text-black">Inhaltsdichte.</strong> Je mehr autoritäre Inhalte im neuen Sinn erscheinen, desto eher zeigt Google sie. Wikipedia-Einträge sind dabei ein Beschleuniger. Sobald „Generative engine optimization" einen eigenen Wikipedia-Artikel hat (Stand Mai 2026 existiert er), beginnt Google die Bedeutung als legitim zu führen.</li>
              <li><strong className="text-black">Such-Reformulierung.</strong> Nutzer lernen schnell, dass „aeo" mehrdeutig ist, und schreiben zunehmend „aeo seo", „answer engine optimization" oder „aeo optimierung". In unseren Daten sehen wir genau das: „aeo optimierung" wächst +1.300%, „aeo seo" +90%, während „aeo" selbst nur +15% wächst (also fast nur die organische Drift im American-Eagle-Kontext).</li>
            </ul>
            <p>
              Die praktische Konsequenz für 2026: Disambiguieren in jedem Title, jeder H1 und jeder Meta-Beschreibung. Den langen Begriff voll ausschreiben und das Akronym in Klammern setzen. So fangen Sie sowohl die Akronym-Suche ab, sobald Google sie zuordnet, als auch die jetzt schon dominanten ausgeschriebenen Such-Varianten.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============ Methodik ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Methodik
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">Datenquelle:</strong> DataForSEO (Google Ads Keyword-Daten und Google Organic SERP). Erhebung am 25. Mai 2026, 11:21 Uhr GMT+2.
            </p>
            <p>
              <strong className="text-black">Stichprobe:</strong> 297 Keyword-Seeds, manuell kuratiert über zwölf semantische Cluster: lokale Hamburg-Begriffe, deutsche kommerzielle Phrasen, AEO-Cluster, GEO-Cluster, LLMO/AI-Visibility, Plattform-spezifisch (ChatGPT/Perplexity/Gemini/Copilot), problem-aware Anfragen, Bildungs- und Vergleichs-Begriffe, Service-Intent (Audit/Strategie), B2B/Vertikal, klassisches lokales SEO Hamburg, Entity/E-E-A-T/Schema.
            </p>
            <p>
              <strong className="text-black">Datentypen:</strong> Monatliches Google-Suchvolumen, CPC und Wettbewerbsstufe pro Keyword. Zusätzlich für die zehn priorisierten Anker eine Keyword-Expansion. Für zwölf priorisierte Begriffe die Google-SERP-Top-20.
            </p>
            <p>
              <strong className="text-black">Geo:</strong> Location-Code 2276 (Deutschland), 1003854 (Hamburg metro). Sprachen: <code>de</code> als Primär, <code>en</code> als parallele Probe für anglo-affine Begriffe.
            </p>
            <p>
              <strong className="text-black">Trendberechnung:</strong> Die monatlichen Verlaufsdaten der DataForSEO-Antwort liefern die letzten zwölf Kalendermonate. <code>First 3mo</code> ist der monatliche Durchschnitt der drei ältesten Monate, <code>Last 3mo</code> der drei jüngsten. YoY-Prozent ist die Veränderung zwischen diesen beiden Mittelwerten.
            </p>
            <p>
              <strong className="text-black">Bekannte Grenzen:</strong>
            </p>
            <ul className="space-y-2 pl-6 list-disc text-gray-700">
              <li>Begriffe mit weniger als ~10 monatlichen Suchen werden bei Google Ads gerundet zensiert. Manche tatsächliche Nachfrage liegt also unter unserer Messschwelle.</li>
              <li>Die SV-Werte sind Google-Ads-eigene Schätzungen, nicht ground-truth Logs. Sie eignen sich für Vergleiche und Trend-Richtungen, nicht für exakte Volumenangaben.</li>
              <li>Backlink-Daten sind nicht enthalten (kein aktives DataForSEO-Backlinks-Abonnement zum Erhebungszeitpunkt).</li>
              <li>Bing-, Baidu- und Yandex-Volumen nicht enthalten. Für den deutschen Markt ist das kein relevanter Verlust.</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============ Datensatz Download ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
            Datensatz herunterladen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Beide CSVs stehen unter <a href="https://creativecommons.org/licenses/by/4.0/deed.de" className="underline decoration-brand-accent decoration-2 underline-offset-2 hover:text-brand-accent" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Sie dürfen die Daten frei nutzen, verändern und weiterverbreiten, mit Namensnennung als „aiseo.hamburg, AEO/GEO Marktanalyse Deutschland Q2 2026".
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/data/aeo-marktanalyse-deutschland-2026-q2.csv"
              className="bg-white border border-gray-200 hover:border-brand-accent rounded-2xl p-6 transition-colors group"
              download
            >
              <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Hauptdatensatz</div>
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Keywords · Volumen · CPC · Wettbewerb
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                297 Zeilen. Pro Keyword: Cluster-Zuordnung, SV DE, CPC DE, Wettbewerbsstufe, SV Hamburg, SV DE/en, CPC DE/en. CSV, ~13 KB.
              </p>
            </a>
            <a
              href="/data/aeo-trends-deutschland-2026-q2.csv"
              className="bg-white border border-gray-200 hover:border-brand-accent rounded-2xl p-6 transition-colors group"
              download
            >
              <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Trenddaten</div>
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                12-Monats-Suchvolumen pro Keyword
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pro Keyword: First-3-Mo-Mittelwert, Last-3-Mo-Mittelwert, YoY-Prozent, Peak-Monat plus einzelne Monatswerte Mai 2025 bis April 2026. CSV, ~10 KB.
              </p>
            </a>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-black">Zitation:</strong> Shchepin, V. (2026). <em>AEO/GEO Marktanalyse Deutschland Q2 2026. 297 Keywords, drei Honigfallen, der stille Rückgang von „ChatGPT SEO".</em> aiseo.hamburg. Abrufbar unter:{' '}
              <a href={PAGE_URL} className="underline decoration-brand-accent decoration-2 underline-offset-2 hover:text-brand-accent">
                {PAGE_URL}
              </a>
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Häufige Fragen zur Studie
          </h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="bg-white border border-gray-200 rounded-2xl p-6 group open:border-brand-accent transition-colors"
              >
                <summary className="font-semibold text-lg text-black cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-brand-accent text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 leading-relaxed mt-4 text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ============ Soft CTA ============ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto border-t border-gray-100">
        <FadeIn>
          <div className="bg-brand-text text-white rounded-section p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4">
              Wo steht Ihre Domain in diesem Datensatz?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
              Wir prüfen kostenfrei, für welche der 297 Keywords aus dieser Studie Ihre Seite aktuell rankt oder zitiert wird. In Google, ChatGPT, Perplexity, Gemini und Claude. Sie erhalten einen kurzen Report mit den drei wichtigsten Hebeln für Q3 2026.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/ai-sichtbarkeit-now" primary text="Kostenloses AEO-Audit anfordern" />
              <Button href="/wissen" text="Weitere Wissens-Artikel" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============ Related ============ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-[960px] mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-black mb-6">Weiterlesen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/wissen/aeo-answer-engine-optimization"
              className="bg-white border border-gray-200 hover:border-brand-accent rounded-2xl p-5 transition-colors"
            >
              <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Pillar</div>
              <h3 className="text-lg font-semibold text-black">AEO. Der komplette Guide für 2026.</h3>
            </a>
            <a
              href="/wissen/was-ist-geo"
              className="bg-white border border-gray-200 hover:border-brand-accent rounded-2xl p-5 transition-colors"
            >
              <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Pillar</div>
              <h3 className="text-lg font-semibold text-black">Was ist GEO (Generative Engine Optimization)?</h3>
            </a>
            <a
              href="/wissen/llmo-llm-optimierung"
              className="bg-white border border-gray-200 hover:border-brand-accent rounded-2xl p-5 transition-colors"
            >
              <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Pillar</div>
              <h3 className="text-lg font-semibold text-black">LLMO. LLM-Optimierung erklärt.</h3>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}

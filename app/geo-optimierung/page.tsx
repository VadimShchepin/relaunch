import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { DataChart } from '@/components/ui/DataChart';

const CANONICAL = 'https://aiseo.hamburg/geo-optimierung';

const BUILDING_BLOCKS = [
  {
    title: 'Zugang für KI-Crawler',
    body: 'robots.txt gegen GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot und Google-Extended prüfen, Bot-Schutz-Regeln freigeben und sicherstellen, dass Inhalte serverseitig im HTML stehen. Ohne diesen Schritt bleibt jede weitere Maßnahme wirkungslos.',
    speed: 'Tage',
  },
  {
    title: 'Zitierfähige Seitenstruktur',
    body: 'Eine Frage pro Seite, die Antwort im ersten Absatz, Fachbegriffe im Text definiert, Zahlen mit Datum und Quelle. Jeder Absatz muss auch isoliert eine vollständige Aussage ergeben, denn genau so wird er entnommen.',
    speed: 'Tage bis Wochen',
  },
  {
    title: 'Entität und konsistente Daten',
    body: 'Firmenname, Adresse, Leistungen und Zuständigkeiten überall identisch: Website, Unternehmensprofil, Verzeichnisse, Presse. Widersprüche sind der häufigste Grund, warum Modelle einen Anbieter nicht sauber einsortieren.',
    speed: 'Wochen',
  },
  {
    title: 'Erwähnungen außerhalb der eigenen Domain',
    body: 'Fachverzeichnisse, Branchenlisten, Bewertungsplattformen, Fachbeiträge. Dieser Teil bestimmt die Reihenfolge in Vergleichsantworten stärker als alles, was auf der eigenen Website steht.',
    speed: 'Monate',
  },
  {
    title: 'Messung mit echten Plattformdaten',
    body: 'AI-Performance-Bericht der Bing Webmaster Tools für Citations und Grounding Queries, Generative-AI-Bericht der Search Console für Impressionen in AI Overviews und AI Mode, dazu eine feste Prompt-Liste für ChatGPT, Claude und Perplexity.',
    speed: 'laufend',
  },
  {
    title: 'Indexierung als Voraussetzung',
    body: 'KI-Systeme rufen überwiegend auffindbare, indexierte Inhalte ab. Seiten im Status Erkannt, zurzeit nicht indexiert werden von Google nicht zitiert. Dieser Punkt gehört zu GEO, auch wenn er nach klassischem SEO aussieht.',
    speed: 'Wochen',
  },
];

const MEASURES = [
  {
    metric: 'Citations',
    source: 'Bing Webmaster Tools, AI Performance',
    meaning: 'Wie oft deine Seiten in Copilot-Antworten tatsächlich als Quelle erschienen sind.',
  },
  {
    metric: 'Citation Share',
    source: 'Bing Webmaster Tools, seit Juni 2026',
    meaning: 'Dein Anteil an allen Citations für dieselbe Grounding Query, über alle Websites hinweg.',
  },
  {
    metric: 'KI-Impressionen',
    source: 'Google Search Console, Generative AI',
    meaning: 'Wie oft deine Seiten in AI Overviews und AI Mode gezeigt wurden. Ohne Klicks und ohne Queries.',
  },
  {
    metric: 'Citation Rate',
    source: 'Feste eigene Prompt-Liste',
    meaning: 'Anteil der getesteten Fragen, bei denen du als Quelle vorkommst. Der einzige Weg für ChatGPT und Perplexity.',
  },
  {
    metric: 'Share of Voice',
    source: 'Feste eigene Prompt-Liste',
    meaning: 'Dein Anteil an allen genannten Anbietern. Zeigt, ob du sichtbar bist oder nur mitgenannt wirst.',
  },
];

/* AI-Page-Stats-Export der Bing Webmaster Tools fuer aiseo.hamburg vom
   30.05.2026: 415 Citations, davon 248 auf einer einzigen Antwortseite. Der
   Export verteilt 415 der 420 Zitate, die die Tagesreihe desselben Exports
   fuer 28.02. bis 28.05.2026 zaehlt, also kein 30-Tage-Fenster: die letzten
   30 Tage der Reihe enthalten nur 382 Zitate. Die zweite Saeule ist die
   Differenz, nicht geschaetzt. */
const CITATION_SPLIT = [
  { label: 'Eine Antwortseite', short: '1 Seite', value: 248, note: 'nicht die Verkaufsseite' },
  { label: 'Alle übrigen Seiten', short: 'Rest', value: 167, note: 'zusammengenommen' },
];

const STEPS = [
  {
    title: 'Kostenloses 15-Minuten-Gespräch',
    body: 'Wir testen live, ob ChatGPT und Perplexity dich bei den Fragen deiner Kunden nennen, und prüfen robots.txt und Indexierungsstatus. Das ist der einzige kostenlose Schritt. Schriftliche Audits, Strategiepapiere und Reports gehören zum bezahlten Teil.',
    tag: 'kostenlos',
  },
  {
    title: 'Bestandsaufnahme und Prompt-Liste',
    body: 'Feste Liste mit 30 bis 50 Fragen, zu mindestens 70 Prozent ohne deinen Markennamen. Nullmessung über alle relevanten Plattformen, dazu die technische Prüfung. Ergebnis ist ein priorisierter Befund, keine Ideensammlung.',
    tag: 'Befund',
  },
  {
    title: 'Umsetzungssprint',
    body: 'Technische Freigaben, die drei bis fünf wichtigsten Antwortseiten, konsistente Entitätsdaten und die Messroutine. Ab 1.500 Euro netto, Dauer typischerweise zwei bis vier Wochen je nach Umfang.',
    tag: 'ab 1.500 €',
  },
  {
    title: 'Laufende Arbeit oder Übergabe',
    body: 'Entweder du führst die Messroutine selbst weiter, oder wir übernehmen die laufende Arbeit an Inhalten und Erwähnungen ab 600 Euro netto pro Monat. Beides ist ein gültiger Abschluss, wir drängen nicht in den Retainer.',
    tag: 'ab 600 € / Monat',
  },
];

const NO_GO = [
  'Deine Seiten sind nicht indexiert oder für Crawler unerreichbar. Dann ist erst die technische Basis fällig, und die heißt SEO, nicht GEO.',
  'Dein Geschäft hat keine Recherchephase. Wer über Laufkundschaft oder feste Rahmenverträge arbeitet, hat wenig davon, in KI-Antworten genannt zu werden.',
  'Du brauchst Wirkung in zwei Wochen. In diesem Kanal wirkt nur die technische Freigabe so schnell, alles andere braucht Wochen bis Monate.',
  'Es gibt niemanden, der Fachfragen beantworten kann. GEO lebt von echtem Fachwissen. Ohne eine Person, die es liefert, entstehen austauschbare Texte.',
  'Das Budget reicht nur für eine Maßnahme. Dann ist ein vollständiges, konsistentes Unternehmensprofil samt Verzeichniseinträgen der bessere Einstieg als eine neue Unterseite.',
];

const FURTHER = [
  {
    href: '/wissen/was-ist-geo',
    title: 'Was ist GEO?',
    text: 'Die Grundlagen von Generative Engine Optimization, ohne Verkaufsteil.',
  },
  {
    href: '/wissen/geo-vs-seo',
    title: 'GEO vs SEO vs AEO vs LLMO',
    text: 'Die vier Kürzel in einer Tabelle, mit Ziel, Messgröße und Zielsystem.',
  },
  {
    href: '/wissen/citation-rate',
    title: 'Citation Rate richtig berechnen',
    text: 'Die Kennzahl, mit der GEO bewertet wird, und ihr Nenner-Problem.',
  },
  {
    href: '/wissen/warum-nicht-in-chatgpt',
    title: 'Warum erscheint meine Firma nicht in ChatGPT?',
    text: 'Die Diagnose in vier Schritten, bevor irgendetwas umgesetzt wird.',
  },
  {
    href: '/hamburg/generative-engine-optimization',
    title: 'GEO für Hamburger Unternehmen',
    text: 'Dieselbe Leistung mit lokalem Zuschnitt und lokalen Signalen.',
  },
  {
    href: '/preise',
    title: 'Preise und Pakete',
    text: 'Was das kostenlose Gespräch, der Sprint und die laufende Arbeit kosten.',
  },
];

const FAQS = [
  {
    q: 'Was ist GEO-Optimierung?',
    a: 'GEO steht für Generative Engine Optimization und bezeichnet die Arbeit daran, in von KI generierten Antworten als Quelle abgerufen und genannt zu werden. Der Unterschied zu klassischem SEO liegt im Erfolgsmaß: Bei SEO zählen Position und Klick, bei GEO die Nennung selbst, weil es keine Ergebnisliste gibt, in der man stehen könnte.',
  },
  {
    q: 'Ist GEO dasselbe wie SEO?',
    a: 'Nein, aber die Überschneidung ist groß. Crawlbarkeit, Indexierung, saubere Struktur und echte Expertise zahlen in beide Richtungen. Unterschiedlich sind der Zuschnitt der Inhalte, die Rolle von Erwähnungen ohne Link und die Messung. In der Praxis ist mangelnde Indexierung der häufigste Grund für fehlende KI-Sichtbarkeit, und das ist eine klassische SEO-Aufgabe.',
  },
  {
    q: 'Was kostet GEO-Optimierung?',
    a: 'Bei uns beginnt es mit einem kostenlosen 15-Minuten-Gespräch. Danach folgt entweder ein einmaliger Umsetzungssprint ab 1.500 Euro netto oder eine laufende Betreuung ab 600 Euro netto pro Monat. Der Festpreis wird nach dem Gespräch genannt, weil Aufwand und Wettbewerbslage je Branche stark abweichen. Details stehen auf der Preisseite.',
  },
  {
    q: 'Wie lange dauert es, bis GEO wirkt?',
    a: 'Technische Blockaden wirken nach dem nächsten Crawl, also innerhalb von Tagen. Neue zitierfähige Seiten tauchen typischerweise nach vier bis zwölf Wochen in Antworten auf, sofern die Domain indexiert wird. Autorität außerhalb der eigenen Domain wirkt über Monate. Wer nach zwei Wochen ein Ergebnis verspricht, verkauft eine Erwartung.',
  },
  {
    q: 'Brauche ich eine llms.txt für GEO?',
    a: 'Für Googles KI-Funktionen nicht. Google schreibt in der eigenen Dokumentation ausdrücklich, dass keine neuen maschinenlesbaren Dateien, KI-Textdateien oder speziellen Schema-Typen nötig sind, um in AI Overviews und AI Mode zu erscheinen. Eine llms.txt kann als Übersicht sinnvoll sein, ist aber kein Sichtbarkeitshebel und ersetzt keine der Maßnahmen oben.',
  },
  {
    q: 'Woran erkenne ich eine echte GEO-Agentur?',
    a: 'An drei Dingen: Sie nennt die Kennzahl, mit der sie arbeitet, und deren Nenner. Sie zeigt eigene Plattformdaten und nicht nur Screenshots einzelner Prompts. Und sie sagt, wann GEO in deinem Fall nichts bringt, etwa wenn deine Seiten nicht indexiert sind. Wer eine Citation Rate nennt, ohne nach deiner Prompt-Liste zu fragen, rät.',
  },
  {
    q: 'Für wen lohnt GEO sich nicht?',
    a: 'Für Unternehmen, deren Seiten nicht indexiert oder für Crawler unerreichbar sind: Dort ist erst die technische Basis fällig. Ebenso für Geschäftsmodelle ohne Recherchephase, etwa Laufkundschaft ohne Onlinevergleich. Und für alle, die eine Wirkung innerhalb von zwei Wochen brauchen, denn die gibt es in diesem Kanal nicht.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Generative Engine Optimization (GEO)',
  serviceType: 'Generative Engine Optimization',
  description:
    'GEO-Optimierung für Unternehmen: technischer Zugang für KI-Crawler, zitierfähige Inhalte, konsistente Entitätsdaten, Erwähnungen außerhalb der eigenen Domain und Messung über Bing Webmaster Tools und Google Search Console.',
  provider: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  url: CANONICAL,
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Generative Engine Optimization' },
  ],
};

const linkBase =
  'group flex items-baseline justify-between gap-flow border-t border-brand-line py-3 transition-colors hover:bg-brand-surface';

export default function GeoOptimierungPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main>
        {/* ========== HERO: 7/5. Die Kurzantwort stand vorher in einem eigenen
            Band mit gruenem Doppelrahmen. Sie gehoert direkt neben den H1: wer
            die Definition sucht, soll nicht scrollen muessen. ========== */}
        <section className="pt-28 pb-block lg:pt-32">
          <div className="mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <FadeIn>
                <nav aria-label="Breadcrumb" className="text-micro text-brand-subtle">
                  <ol className="flex flex-wrap items-center gap-1.5">
                    <li>
                      <Link href="/" className="transition-colors hover:text-brand-accent-ink">
                        Startseite
                      </Link>
                    </li>
                    <li aria-hidden>
                      /
                    </li>
                    <li className="font-medium text-brand-text">Generative Engine Optimization</li>
                  </ol>
                </nav>

                <p className="mt-stack text-micro uppercase tracking-eyebrow text-brand-accent-ink">GEO-Optimierung</p>
                <h1 className="mt-flow text-heading sm:text-title font-semibold text-black">
                  Generative Engine Optimization (GEO): als Quelle in der KI-Antwort erscheinen
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Deine Rankings können stehen und die Anfragen trotzdem wegbrechen, weil die Antwort inzwischen oberhalb der Ergebnisliste passiert. GEO ist die Arbeit daran, in dieser Antwort vorzukommen. Diese Seite zeigt, woraus sie besteht, wie sie gemessen wird, was sie kostet und wann sie nichts bringt.
                </p>
                <div className="mt-stack flex flex-wrap gap-4">
                  <Button href="/termin" primary text="Kostenloses 15-Minuten-Gespräch" className="!py-4 !px-8" />
                  <Button href="/preise" text="Preise ansehen" className="!py-4 !px-8" />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <FadeIn delay={120}>
                <div className="border-t-2 border-brand-accent-deep pt-3">
                  <h2 className="text-subheading font-semibold text-brand-text">Kurz beantwortet</h2>
                  <p className="mt-2 text-meta text-brand-muted">
                    Generative Engine Optimization bezeichnet die Optimierung mit dem Ziel, in einer von KI generierten Antwort als Quelle abgerufen und genannt zu werden. Erfolgsmaß ist die Nennung, nicht die Position.
                  </p>
                  <p className="mt-flow text-meta text-brand-muted">
                    Die Arbeit besteht aus sechs Bausteinen: Crawler-Zugang, zitierfähige Seitenstruktur, konsistente Entitätsdaten, Erwähnungen außerhalb der eigenen Domain, Indexierung und Messung über echte Plattformdaten.
                  </p>
                  <p className="mt-flow border-t border-brand-line pt-3 text-meta text-brand-muted">
                    Start ist ein kostenloses 15-Minuten-Gespräch, danach ein Umsetzungssprint ab 1.500 Euro netto oder laufende Betreuung ab 600 Euro netto pro Monat.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== BAUSTEINE: sechs Zeilen mit Wirkzeit rechts, statt sechs
            Karten in zwei Spalten. Die Reihenfolge ist die Aussage. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Leistung</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Woraus GEO tatsächlich besteht
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Sechs Bausteine, in dieser Reihenfolge. Die ersten beiden lassen sich in Tagen erledigen, der vierte braucht Monate. Wer in der falschen Reihenfolge anfängt, zahlt für Wirkung, die nicht eintreten kann.
                  </p>
                </div>

                <div>
                  <div className="hidden lg:grid lg:grid-cols-[1fr_120px] lg:gap-x-flow">
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Baustein</p>
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Wirkt in</p>
                  </div>
                  <div className="mt-2">
                    {BUILDING_BLOCKS.map((block, index) => (
                      <div key={block.title} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_120px] lg:gap-x-flow">
                        <div>
                          <h3 className="flex items-baseline gap-2 text-lead font-semibold text-brand-text">
                            <span className="text-micro tabular-nums text-brand-subtle">{String(index + 1).padStart(2, '0')}</span>
                            {block.title}
                          </h3>
                          <p className="max-w-measure text-meta text-brand-muted">{block.body}</p>
                        </div>
                        <p className="text-micro text-brand-subtle lg:pt-1.5">{block.speed}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== MESSUNG: eine echte Tabelle mit Zeilenkoepfen. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <h2 className="text-subheading md:text-heading font-semibold text-black">Womit wir GEO messen</h2>
              <p className="mt-flow max-w-measure text-body text-brand-muted">
                Zwei der fünf Kennzahlen kommen direkt von der Plattform und sind kostenlos. Drei beruhen auf einer festen, dokumentierten Prompt-Liste. Ohne diese Liste ist keine der Zahlen über Monate vergleichbar.
              </p>

              {/* Dieselbe Tabelle in zwei Layouts, ein DOM. Bis md brechen die
                  Zellen als Blöcke um, weil eine dreispaltige Tabelle mit
                  600px Mindestbreite auf 390px seitlich wegscrollt: die dritte
                  Spalte, also die eigentliche Aussage, ist dann unsichtbar und
                  hinterlässt nur eine hohe leere Zeile. */}
              <table className="mt-stack w-full border-collapse text-left">
                <thead className="hidden md:table-header-group">
                  <tr className="border-b border-brand-edge">
                    <th scope="col" className="w-40 pb-2 pr-flow text-micro uppercase tracking-eyebrow text-brand-subtle">
                      Kennzahl
                    </th>
                    <th scope="col" className="w-64 pb-2 pr-flow text-micro uppercase tracking-eyebrow text-brand-subtle">
                      Datenquelle
                    </th>
                    <th scope="col" className="pb-2 text-micro uppercase tracking-eyebrow text-brand-subtle">
                      Was sie aussagt
                    </th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {MEASURES.map((row) => (
                    <tr key={row.metric} className="block border-b border-brand-hairline py-2 last:border-0 md:table-row md:py-0">
                      <th scope="row" className="block pr-flow align-top text-body font-semibold text-brand-text md:table-cell md:py-3">
                        {row.metric}
                      </th>
                      <td className="block pr-flow align-top text-meta text-brand-subtle md:table-cell md:py-3">{row.source}</td>
                      <td className="block align-top text-meta text-brand-muted md:table-cell md:py-3">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-flow max-w-measure border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                Keine der beiden Suchkonsolen liefert Klicks aus KI-Antworten. Wer dir eine KI-Conversion-Rate aus Search-Console-Daten zeigt, hat sie geschätzt. Die Einordnung dazu steht im{' '}
                <Link href="/wissen/gsc-vs-bing-webmaster-tools" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                  Vergleich der beiden Konsolen
                </Link>
                .
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ========== BELEGE: statt zweier Stockfotos (Buero, Flipchart, beide
            mit Alt-Text, der etwas anderes behauptete) steht hier die eigene
            Zahl als Diagramm. 415 Citations, 248 davon auf einer Seite. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <h2 className="text-subheading md:text-heading font-semibold text-black">
                    Was wir an eigenen Daten zeigen können
                  </h2>
                  <p className="mt-stack max-w-measure text-subheading font-semibold text-brand-text">
                    415 Citations im Export vom 30. Mai 2026, 248 davon auf einer einzigen Seite. Diese Seite stand zum selben Zeitpunkt bei Google unter Erkannt, zurzeit nicht indexiert.
                  </p>
                  <div className="mt-flow max-w-measure text-body text-brand-muted">
                    <p>
                      Die Zahlen stammen aus dem AI-Page-Stats-Export der Bing Webmaster Tools für diese Domain, Stand 30. Mai 2026. Er verteilt 415 der 420 Zitate, die die Tagesreihe desselben Exports für den 28. Februar bis 28. Mai 2026 zählt. Wir zeigen sie, weil sie zwei Dinge belegen, die in Verkaufsgesprächen sonst Behauptung bleiben: GEO wirkt messbar, und es wirkt unabhängig davon, ob Google eine Seite gerade mag.
                    </p>
                    <p className="mt-flow">
                      Bei einer zweiten von uns betreuten Domain kamen im Export vom 6. Juni 2026 211 Citations auf 16 Seiten zusammen, davon 45 auf einer einzigen Seite, die eine konkrete Rechtsfrage für einen konkreten Anwendungsfall beantwortet. In beiden Fällen gewinnt nicht die Verkaufsseite, sondern die präziseste Antwortseite.
                    </p>
                    <p className="mt-flow">
                      Was wir nicht zeigen: eine Umsatzkurve, die wir auf KI-Antworten zurückführen. Keine der beiden Plattformkonsolen liefert Klickdaten für KI-Oberflächen, deshalb wäre jede solche Kurve konstruiert.
                    </p>
                  </div>
                  <Link href="/ergebnisse" className="mt-stack inline-flex items-center gap-1.5 border-t border-brand-line pt-3 text-meta font-medium text-brand-accent-ink hover:gap-2.5">
                    Dokumentierte Ergebnisse ansehen
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>

                <div className="lg:col-span-5 lg:pt-2">
                  <div className="rounded-card border border-brand-line bg-white p-4 sm:p-5">
                    <DataChart
                      frame={false}
                      variant="column"
                      headingLevel="p"
                      title="Citations je Seite"
                      subject="aiseo.hamburg, Export 30.05.2026"
                      axis={{ title: 'Citations' }}
                      highlight="peak"
                      points={CITATION_SPLIT}
                      stats={[
                        { label: 'Gesamt', value: '415' },
                        { label: 'Anteil', value: '59,8 %' },
                        { label: 'Stand', value: '30.05.2026' },
                      ]}
                      table={{ label: 'Zahlen als Tabelle', heads: ['Seitengruppe', 'Citations'] }}
                    />
                  </div>
                  <p className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Eine einzige präzise Antwortseite trug knapp 60 Prozent aller Citations. Genau diese Seite war bei Google zum selben Zeitpunkt nicht indexiert.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABLAUF: vier Schritte mit Preisschild in der rechten Spur. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Zusammenarbeit</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">Der Ablauf</h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Vier Schritte mit Festpreis statt eines offenen Beratungsvertrags.
                  </p>
                </div>

                <ol>
                  {STEPS.map((step, index) => (
                    <li key={step.title} className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_140px] lg:gap-x-flow">
                      <div>
                        <h3 className="flex items-baseline gap-2 text-lead font-semibold text-brand-text">
                          <span className="text-micro tabular-nums text-brand-subtle">{String(index + 1).padStart(2, '0')}</span>
                          {step.title}
                        </h3>
                        <p className="max-w-measure text-meta text-brand-muted">{step.body}</p>
                      </div>
                      <p className="text-micro font-medium text-brand-accent-ink lg:pt-1.5">{step.tag}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABGRENZUNG: vorher trug jede Absage ein gruenes Hakerl.
            Jetzt ein neutraler Marker, denn das hier ist keine Leistungsliste. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Abgrenzung</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Wann GEO bei dir nichts bringt
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Der Abschnitt, den Anbieterseiten normalerweise weglassen. Er spart dir im Zweifel ein Projekt.
                  </p>
                </div>

                <ul>
                  {NO_GO.map((item) => (
                    <li key={item} className="flex gap-flow border-t border-brand-edge py-3 text-meta lg:text-body text-brand-muted">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-brand-edge" />
                      <span className="max-w-measure">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== WEITERLESEN: sechs Zeilen, zwei Spalten, keine Karten. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <h2 className="text-subheading md:text-heading font-semibold text-black lg:text-subheading">Zum Weiterlesen</h2>
                <div className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                  {FURTHER.map((link) => (
                    <Link key={link.href} href={link.href} className={linkBase}>
                      <span>
                        <h3 className="text-body font-semibold text-brand-text group-hover:text-brand-accent-ink">{link.title}</h3>
                        <span className="mt-0.5 block text-meta text-brand-subtle">{link.text}</span>
                      </span>
                      <ArrowRightIcon className="mt-1.5 w-3.5 h-3.5 shrink-0 text-brand-subtle group-hover:text-brand-accent-ink" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <h2 className="text-subheading md:text-heading font-semibold text-black lg:text-subheading">Häufige Fragen zu GEO</h2>
                <div className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                  {FAQS.map((faq) => (
                    <div key={faq.q} className="border-t border-brand-line py-3">
                      <h3 className="text-body font-semibold text-brand-text">{faq.q}</h3>
                      <p className="mt-1 text-meta text-brand-muted">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== CTA: dunkles Vollband. ========== */}
        <section className="bg-brand-night py-rule text-white">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid items-baseline gap-stack lg:grid-cols-12 lg:gap-x-rule">
                <h2 className="text-subheading md:text-heading font-semibold lg:col-span-6">
                  Fünfzehn Minuten, drei Prompts, eine klare Antwort
                </h2>
                <div className="lg:col-span-6">
                  <p className="max-w-measure text-body text-brand-line">
                    Wir testen im Gespräch live, ob die KI dich bei den Fragen deiner Kunden nennt, und sagen dir offen, ob GEO in deinem Fall der richtige nächste Schritt ist. Kostenlos und ohne Verpflichtung.
                  </p>
                  <div className="mt-stack flex flex-wrap items-center gap-x-stack gap-y-3">
                    <Button href="/termin" primary text="15-Minuten-Gespräch buchen" className="!py-3 !px-6" />
                    <Link href="/contact" className="text-meta font-medium text-brand-accent hover:underline">
                      oder kurz schreiben
                    </Link>
                  </div>
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

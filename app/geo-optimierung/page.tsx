import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { CheckIcon } from '@/components/ui/Icons';

const CANONICAL = 'https://aiseo.hamburg/geo-optimierung';

const BUILDING_BLOCKS = [
  {
    title: 'Zugang für KI-Crawler',
    body: 'robots.txt gegen GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot und Google-Extended prüfen, Bot-Schutz-Regeln freigeben und sicherstellen, dass Inhalte serverseitig im HTML stehen. Ohne diesen Schritt bleibt jede weitere Maßnahme wirkungslos.',
  },
  {
    title: 'Zitierfähige Seitenstruktur',
    body: 'Eine Frage pro Seite, die Antwort im ersten Absatz, Fachbegriffe im Text definiert, Zahlen mit Datum und Quelle. Jeder Absatz muss auch isoliert eine vollständige Aussage ergeben, denn genau so wird er entnommen.',
  },
  {
    title: 'Entität und konsistente Daten',
    body: 'Firmenname, Adresse, Leistungen und Zuständigkeiten überall identisch: Website, Unternehmensprofil, Verzeichnisse, Presse. Widersprüche sind der häufigste Grund, warum Modelle einen Anbieter nicht sauber einsortieren.',
  },
  {
    title: 'Erwähnungen außerhalb der eigenen Domain',
    body: 'Fachverzeichnisse, Branchenlisten, Bewertungsplattformen, Fachbeiträge. Dieser Teil bestimmt die Reihenfolge in Vergleichsantworten stärker als alles, was auf der eigenen Website steht, und braucht Monate.',
  },
  {
    title: 'Messung mit echten Plattformdaten',
    body: 'AI-Performance-Bericht der Bing Webmaster Tools für Citations und Grounding Queries, Generative-AI-Bericht der Search Console für Impressionen in AI Overviews und AI Mode, dazu eine feste Prompt-Liste für ChatGPT, Claude und Perplexity.',
  },
  {
    title: 'Indexierung als Voraussetzung',
    body: 'KI-Systeme rufen überwiegend auffindbare, indexierte Inhalte ab. Seiten im Status „Erkannt, zurzeit nicht indexiert“ werden nicht zitiert. Dieser Punkt gehört zu GEO, auch wenn er nach klassischem SEO aussieht.',
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

export default function GeoOptimierungPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-52 md:pb-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <a href="/" className="hover:text-brand-accent transition-colors">
                  Startseite
                </a>
              </li>
              <li>/</li>
              <li className="text-black font-medium">Generative Engine Optimization</li>
            </ol>
          </nav>

          <p className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] mb-5">
            GEO-Optimierung
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            Generative Engine Optimization (GEO): als Quelle in der KI-Antwort erscheinen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Deine Rankings können stehen und die Anfragen trotzdem wegbrechen, weil die Antwort
            inzwischen oberhalb der Ergebnisliste passiert. GEO ist die Arbeit daran, in dieser
            Antwort vorzukommen. Diese Seite zeigt, woraus sie besteht, wie sie gemessen wird, was
            sie kostet und wann sie nichts bringt.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/termin" primary text="Kostenloses 15-Minuten-Gespräch" />
            <Button href="/preise" text="Preise ansehen" />
          </div>
        </section>

        {/* Direkte Antwort */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">Kurz beantwortet</h2>
            <p className="text-gray-700 leading-relaxed">
              Generative Engine Optimization bezeichnet die Optimierung mit dem Ziel, in einer von
              KI generierten Antwort als Quelle abgerufen und genannt zu werden. Erfolgsmaß ist die
              Nennung, nicht die Position. Die Arbeit besteht aus sechs Bausteinen: Crawler-Zugang,
              zitierfähige Seitenstruktur, konsistente Entitätsdaten, Erwähnungen außerhalb der
              eigenen Domain, Indexierung und Messung über echte Plattformdaten. Bei uns startet
              das mit einem kostenlosen 15-Minuten-Gespräch, danach folgt ein Umsetzungssprint ab
              1.500 Euro netto oder eine laufende Betreuung ab 600 Euro netto pro Monat.
            </p>
          </div>
        </section>

        {/* Bausteine */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Woraus GEO tatsächlich besteht
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Sechs Bausteine, in dieser Reihenfolge. Die ersten beiden lassen sich in Tagen
            erledigen, der vierte braucht Monate. Wer in der falschen Reihenfolge anfängt, zahlt
            für Wirkung, die nicht eintreten kann.
          </p>

          <figure className="mb-10">
            <img
              src="/images/wissen/geo-optimierung/bausteine.webp"
              alt="Technikerin prüft Server-Racks in einem Rechenzentrum"
              width={1000}
              height={670}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-sm"
            />
            <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
              Ohne Zugang für die Crawler bleibt jede weitere Maßnahme wirkungslos. Deshalb steht
              dieser Baustein an erster Stelle.
            </figcaption>
          </figure>

          <div className="grid gap-6 md:grid-cols-2">
            {BUILDING_BLOCKS.map((block, index) => (
              <div key={block.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-sm font-bold text-brand-accent mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{block.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Messung */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Womit wir GEO messen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Zwei der fünf Kennzahlen kommen direkt von der Plattform und sind kostenlos. Drei
            beruhen auf einer festen, dokumentierten Prompt-Liste. Ohne diese Liste ist keine der
            Zahlen über Monate vergleichbar.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th scope="col" className="px-4 py-3 font-semibold text-black">
                    Kennzahl
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-black">
                    Datenquelle
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-black">
                    Was sie aussagt
                  </th>
                </tr>
              </thead>
              <tbody>
                {MEASURES.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-black align-top">{row.metric}</td>
                    <td className="px-4 py-3 text-gray-600 align-top">{row.source}</td>
                    <td className="px-4 py-3 text-gray-600 align-top">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Keine der beiden Suchkonsolen liefert Klicks aus KI-Antworten. Wer dir eine
            KI-Conversion-Rate aus Search-Console-Daten zeigt, hat sie geschätzt. Die Einordnung
            dazu steht im{' '}
            <a
              href="/wissen/gsc-vs-bing-webmaster-tools"
              className="text-brand-accent underline underline-offset-2"
            >
              Vergleich der beiden Konsolen
            </a>
            .
          </p>
        </section>

        {/* Belege */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Was wir an eigenen Daten zeigen können
          </h2>

          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <p className="text-xl md:text-2xl font-semibold text-black leading-snug">
              415 Citations in einem 30-Tage-Fenster, 248 davon auf einer einzigen Seite. Diese
              Seite stand zum selben Zeitpunkt bei Google unter „Erkannt, zurzeit nicht indexiert“.
            </p>
          </div>

          <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              Die Zahlen stammen aus dem AI-Page-Stats-Export der Bing Webmaster Tools für diese
              Domain, Stand 30. Mai 2026. Wir zeigen sie, weil sie zwei Dinge belegen, die in
              Verkaufsgesprächen sonst Behauptung bleiben: GEO wirkt messbar, und es wirkt
              unabhängig davon, ob Google eine Seite gerade mag.
            </p>
            <p>
              Bei einer zweiten von uns betreuten Domain kamen im gleichen Zeitraum 211 Citations
              auf 16 Seiten zusammen, davon 45 auf einer einzigen Seite, die eine konkrete
              Rechtsfrage für einen konkreten Anwendungsfall beantwortet. In beiden Fällen gewinnt
              nicht die Verkaufsseite, sondern die präziseste Antwortseite.
            </p>
            <p>
              Was wir nicht zeigen: eine Umsatzkurve, die wir auf KI-Antworten zurückführen. Keine
              der beiden Plattformkonsolen liefert Klickdaten für KI-Oberflächen, deshalb wäre jede
              solche Kurve konstruiert.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/ergebnisse" text="Dokumentierte Ergebnisse ansehen" />
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
            Der Ablauf
          </h2>

          <figure className="mb-10">
            <img
              src="/images/wissen/geo-optimierung/ablauf.webp"
              alt="Team notiert Punkte auf einem Flipchart im Büro"
              width={1000}
              height={667}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-sm"
            />
            <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
              Vier Schritte mit Festpreis statt eines offenen Beratungsvertrags.
            </figcaption>
          </figure>

          <ol className="space-y-8">
            {[
              {
                title: 'Kostenloses 15-Minuten-Gespräch',
                body: 'Wir testen live, ob ChatGPT und Perplexity dich bei den Fragen deiner Kunden nennen, und prüfen robots.txt und Indexierungsstatus. Das ist der einzige kostenlose Schritt. Schriftliche Audits, Strategiepapiere und Reports gehören zum bezahlten Teil.',
              },
              {
                title: 'Bestandsaufnahme und Prompt-Liste',
                body: 'Feste Liste mit 30 bis 50 Fragen, zu mindestens 70 Prozent ohne deinen Markennamen. Nullmessung über alle relevanten Plattformen, dazu die technische Prüfung. Ergebnis ist ein priorisierter Befund, keine Ideensammlung.',
              },
              {
                title: 'Umsetzungssprint',
                body: 'Technische Freigaben, die drei bis fünf wichtigsten Antwortseiten, konsistente Entitätsdaten und die Messroutine. Ab 1.500 Euro netto, Dauer typischerweise zwei bis vier Wochen je nach Umfang.',
              },
              {
                title: 'Laufende Arbeit oder Übergabe',
                body: 'Entweder du führst die Messroutine selbst weiter, oder wir übernehmen die laufende Arbeit an Inhalten und Erwähnungen ab 600 Euro netto pro Monat. Beides ist ein gültiger Abschluss, wir drängen nicht in den Retainer.',
              },
            ].map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-base font-bold text-brand-accent">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Abgrenzung */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Wann GEO bei dir nichts bringt
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Der Abschnitt, den Anbieterseiten normalerweise weglassen. Er spart dir im Zweifel ein
            Projekt.
          </p>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <ul className="space-y-4 text-base text-gray-600 leading-relaxed">
              {[
                'Deine Seiten sind nicht indexiert oder für Crawler unerreichbar. Dann ist erst die technische Basis fällig, und die heißt SEO, nicht GEO.',
                'Dein Geschäft hat keine Recherchephase. Wer über Laufkundschaft oder feste Rahmenverträge arbeitet, hat wenig davon, in KI-Antworten genannt zu werden.',
                'Du brauchst Wirkung in zwei Wochen. In diesem Kanal wirkt nur die technische Freigabe so schnell, alles andere braucht Wochen bis Monate.',
                'Es gibt niemanden, der Fachfragen beantworten kann. GEO lebt von echtem Fachwissen. Ohne eine Person, die es liefert, entstehen austauschbare Texte.',
                'Das Budget reicht nur für eine Maßnahme. Dann ist ein vollständiges, konsistentes Unternehmensprofil samt Verzeichniseinträgen der bessere Einstieg als eine neue Unterseite.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-accent shrink-0 mt-0.5">
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Weiterlesen */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Zum Weiterlesen
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
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
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
              >
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{link.text}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
            Häufige Fragen zu GEO
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                Fünfzehn Minuten, drei Prompts, eine klare Antwort
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl">
                Wir testen im Gespräch live, ob die KI dich bei den Fragen deiner Kunden nennt, und
                sagen dir offen, ob GEO in deinem Fall der richtige nächste Schritt ist. Kostenlos
                und ohne Verpflichtung.
              </p>
              <Button href="/termin" primary text="15-Minuten-Gespräch buchen" className="!py-4 !px-8" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

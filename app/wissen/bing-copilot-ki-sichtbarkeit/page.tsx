import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was ist eine Grounding Query bei Bing und Copilot?',
    a: 'Eine Grounding Query ist die maschinell umgeschriebene Suchanfrage, die Microsoft Copilot intern an den Bing-Index stellt, um Quellen zu finden. Copilot sucht nicht den Nutzer-Prompt wortwörtlich, sondern zerlegt ihn in eine oder mehrere stichwortdichte Grounding Queries (Query Fan-out). Die Bing Webmaster Tools zeigen dir diese Grounding Queries im Bericht „AI Search Queries". Kein anderes KI-System legt die Worte seines Retrievers so offen.',
  },
  {
    q: 'Wie messe ich, ob Bing Copilot meine Website zitiert?',
    a: 'Über die Bing Webmaster Tools. Im Bereich AI Performance gibt es drei Berichte: AI Performance Overview (tägliche Citations und Cited Pages), AI Page Stats (Citations pro URL) und AI Search Queries (die Grounding Queries mit Zitatzahl). Diese Daten bekommst du nur für Bing und Copilot, nicht für ChatGPT, Perplexity oder Google.',
  },
  {
    q: 'Warum zitiert Copilot eine Seite öfter als alle anderen zusammen?',
    a: 'Weil diese eine Seite die Fachbegriffe der Grounding Query am vollständigsten definiert, echte Tools beim Namen nennt und zu jeder Kennzahl eine Zahl liefert. In unseren Daten gewann genau die Seite, die als Einzige Citation Rate, Share of Voice, konkrete Tools und Benchmark-Zahlen auf einer URL bündelte. Begriffsdichte schlägt Struktur.',
  },
  {
    q: 'Reicht gute Struktur (FAQ, Tabellen, TL;DR) für Bing-Zitate?',
    a: 'Nein. In unseren Daten hatten mehrere Seiten TL;DR-Box, FAQ und Tabellen und bekamen trotzdem null Zitate. Struktur ist notwendig, aber nicht ausreichend. Entscheidend war, ob die Seite die definierten Fachbegriffe der Grounding Query enthielt, samt Zahlen und benannten Tools.',
  },
  {
    q: 'Was ist IndexNow und warum ist es für Bing wichtig?',
    a: 'IndexNow ist ein Protokoll, mit dem du neue oder geänderte URLs sofort an Suchmaschinen meldest. Bing verarbeitet IndexNow, Google nicht. Für Copilot-Sichtbarkeit ist das relevant, weil eine Seite erst im Bing-Index stehen muss, bevor sie als Quelle dienen kann. IndexNow verkürzt die Zeit zwischen Veröffentlichung und Zitierbarkeit.',
  },
  {
    q: 'Gilt das Bing-Rezept auch für Google AI Overviews?',
    a: 'Nein, und das ist wichtig. Google sagt offiziell, dass ein KI-spezifischer Schreibstil oder Keyword-Phrasing für seine KI-Funktionen nicht nötig sind. Auf Bing war genau das stichwortdichte Begriffsbündel ausschlaggebend. Beide Aussagen stimmen, für unterschiedliche Systeme. Optimiere Bing nicht wie Google und umgekehrt.',
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD schemas                                                   */
/* ------------------------------------------------------------------ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bing & Copilot KI-Sichtbarkeit: Was 415 Citations über Microsofts KI verraten',
  description:
    'Auswertung eines echten Bing-Webmaster-Tools-AI-Exports: Wie Microsoft Copilot Quellen auswählt, warum eine Seite fast 60% aller Zitate gewann und das reproduzierbare Rezept dahinter.',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-05-30',
  dateModified: '2026-05-30',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/bing-copilot-ki-sichtbarkeit',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Bing & Copilot KI-Sichtbarkeit' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Stat box component                                                */
/* ------------------------------------------------------------------ */

const StatBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{text}</p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function BingCopilotKiSichtbarkeitPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ============================================================ */}
      {/*  Hero                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">Bing &amp; Copilot KI-Sichtbarkeit</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Bing &amp; Copilot: Was 415 Citations über Microsofts KI verraten
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Wir haben unseren eigenen Bing-Webmaster-Tools-Export ausgewertet. Eine einzige Seite gewann fast 60 Prozent aller Zitate. Hier ist, warum Microsoft Copilot sie auswählt, und das Rezept, das du kopieren kannst.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Eine Seite gewann 248 von 415 Citations (fast 60%).</strong> Nur 10 von 42 Artikeln wurden überhaupt zitiert. Die Verteilung ist extrem ungleich.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Copilot zeigt dir seine Grounding Queries.</strong> In den Bing Webmaster Tools siehst du, mit welchen Stichwörtern die KI intern sucht. Das tut sonst kein System.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Begriffsdichte schlägt Struktur.</strong> Die Gewinnerseite definierte als Einzige alle Fachbegriffe der Grounding Query, nannte echte Tools und lieferte zu jeder Kennzahl eine Zahl.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Das Bing-Rezept ist nicht das Google-Rezept.</strong> Was Google für unnötig erklärt, war auf Bing entscheidend. Optimiere jede Engine nach ihren eigenen Regeln.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die Daten                                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die Daten: ein echter Bing-Export, keine Theorie
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Die meisten GEO-Ratgeber zitieren Studien. Dieser Artikel zitiert unsere eigenen Zahlen. Wir haben für aiseo.hamburg drei Berichte aus dem Bereich AI Performance der Bing Webmaster Tools exportiert, Zeitraum Ende Februar bis Ende Mai 2026.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
          <h3 className="text-xl font-semibold text-black mb-4">Die drei Bing-AI-Berichte</h3>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            <li><strong className="text-black">AI Performance Overview:</strong> tägliche Citations und Cited Pages. Zeigt den Trend.</li>
            <li><strong className="text-black">AI Page Stats:</strong> Citations pro einzelner URL. Zeigt, welche Seite gewinnt.</li>
            <li><strong className="text-black">AI Search Queries:</strong> die Grounding Queries mit Zitatzahl. Zeigt, wonach Copilot intern sucht.</li>
          </ul>
        </div>

        <StatBox text="Citations standen von Februar bis April nahe null. Mitte Mai 2026 explodierten sie: einzelne Tage erreichten 41, 41, 35 und 49 Citations." />

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Die Verteilung pro Seite war kein gleichmäßiger Anstieg, sondern ein klarer Sieger. So sahen die Top-Seiten aus:
          </p>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Seite</th>
                <th className="py-3 text-sm font-semibold text-brand-accent">Citations</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">/wissen/ki-sichtbarkeit-messen</td>
                <td className="py-3 font-semibold text-black">248</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">/wissen/ki-sichtbarkeit</td>
                <td className="py-3">63</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">/wissen/ki-sichtbarkeit-ecommerce</td>
                <td className="py-3">45</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">/wissen/sichtbarkeit-in-chatgpt</td>
                <td className="py-3">17</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">/wissen/technische-ki-sichtbarkeit</td>
                <td className="py-3">11</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">restliche zitierte Seiten (5)</td>
                <td className="py-3">31</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            415 Citations, verteilt auf 10 Seiten. Eine davon: 248. Das sind fast 60 Prozent für eine einzige URL. Die anderen 32 Artikel der Wissensdatenbank: null Citations. Die Frage ist nicht „warum so viel Traffic", sondern <strong className="text-black">„was macht diese eine Seite anders".</strong>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Wie Copilot auswählt                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Wie Microsoft Copilot Quellen auswählt
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Copilot beantwortet eine Frage über Retrieval-Augmented Generation auf dem Bing-Index. Dein Prompt wird nicht wortwörtlich gesucht. Copilot schreibt ihn in eine oder mehrere Grounding Queries um (ein Query Fan-out), holt für jede passende Textpassagen aus dem Index und zitiert die Passagen, die es tatsächlich verwendet hat.
          </p>
          <p>
            Der entscheidende Punkt: <strong className="text-black">Diese Grounding Queries sind maschinell erzeugt und stichwortdicht.</strong> Sie bündeln das Fachvokabular eines Themas in eine lange Zeichenkette. In unseren Daten sahen die häufigsten Grounding Queries so aus:
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <p className="text-sm font-semibold text-black mb-3">Grounding Queries aus unserem Export (Auszug):</p>
          <ul className="text-sm text-gray-700 leading-relaxed space-y-2 font-mono">
            <li>„KI SEO Sichtbarkeit Citation Rate Share of Voice Tools Keyword Ranking ersetzen"</li>
            <li>„KI Sichtbarkeit Überwachung ChatGPT Gemini Perplexity Tools Methoden"</li>
            <li>„Share of Voice Wettbewerber KI Antworten messen Lösungen"</li>
          </ul>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Lies diese Zeichenketten als Einkaufsliste. Copilot sucht eine Seite, die Citation Rate <em>und</em> Share of Voice <em>und</em> Tools <em>und</em> den Kontrast zu „Keyword Ranking ersetzen" auf einmal bedient. Wer das am vollständigsten tut, wird zitiert.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-black mb-4">Vier Begriffe, die Copilot bündelt (definiert)</h3>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            <li><strong className="text-black">Grounding Query:</strong> die interne Suchanfrage, die Copilot an den Bing-Index stellt. Sichtbar im Bericht „AI Search Queries".</li>
            <li><strong className="text-black">Citation:</strong> eine konkrete Zitierung deiner Seite in einer Copilot-Antwort.</li>
            <li><strong className="text-black">Cited Pages:</strong> Anzahl unterschiedlicher Seiten, die an einem Tag zitiert wurden. Steigt, wenn dein Themen-Hub breiter zitierbar wird.</li>
            <li><strong className="text-black">Citation Rate:</strong> Anteil relevanter Prompts, bei denen du zitiert wirst. Top-Marken erreichen 20 bis 40 Prozent in ihrer Nische.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das Rezept                                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Warum eine Seite fast 60% gewann: das Rezept in 5 Teilen
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Wir haben die Begriffsdichte aller 42 Seiten gemessen. Die Gewinnerseite war die einzige, die alle fünf Elemente auf einer URL vereinte.
        </p>

        <ol className="space-y-6">
          <li className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-2">1. Fachbegriffe als definierte Einheiten</h3>
            <p className="text-gray-600 leading-relaxed">
              Jeder Schlüsselbegriff bekommt eine eigene Überschrift, gefolgt von einer Ein-Satz-Definition und einer Zahl. Share of Voice wurde sechsmal verwendet, jeweils mit Formel oder Beispiel. Copilots Grounding Queries bestehen aus genau diesen Begriffen, also müssen sie explizit und definiert auf der Seite stehen.
            </p>
          </li>
          <li className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-2">2. Echte, benannte Tools statt Kategorien</h3>
            <p className="text-gray-600 leading-relaxed">
              Nicht „Monitoring-Tools", sondern Ahrefs Brand Radar, Semrush AI Visibility, GA4, GoAccess, GPTBot, OAI-SearchBot, PerplexityBot. Eigennamen sind abrufbare Anker im Index. Allgemeine Kategoriewörter sind es nicht.
            </p>
          </li>
          <li className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-2">3. Eine Zahl zu jeder Aussage</h3>
            <p className="text-gray-600 leading-relaxed">
              Ein Benchmark, eine Spanne oder ein Preis pro Kennzahl: 20 bis 40 Prozent Citation Rate, 15 bis 25 Prozent Wachstum pro Monat, ab 99 Dollar pro Monat. Zahlen werden zitiert, Adjektive werden ignoriert.
            </p>
          </li>
          <li className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-2">4. Struktur für die Passagen-Extraktion</h3>
            <p className="text-gray-600 leading-relaxed">
              TL;DR-Box im ersten Bildschirm, ein benanntes nummeriertes Framework (etwa „Die 4 Messebenen"), FAQ als echte Nutzerfragen mit je 40 bis 80 Wörtern Antwort, kurze Antwortblöcke statt Textwände und eine Quellenliste.
            </p>
          </li>
          <li className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-2">5. Kontrast zum Verdrängten</h3>
            <p className="text-gray-600 leading-relaxed">
              Die Grounding Queries enthielten „Keyword Ranking ersetzen". Seiten, die das Neue ausdrücklich gegen das Alte stellen („GSC ist blind für KI-Traffic"), passen zu vergleichsförmigen Grounding Queries.
            </p>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Der Gegenbeweis                                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der Gegenbeweis: Struktur allein reicht nicht
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Die wichtigste Erkenntnis kam von den Verlierern. Zwei unserer Seiten haben eine vollständige TL;DR-Box, eine ausführliche FAQ und Vergleichstabellen. Strukturell sind sie so reich wie die Gewinnerseite. Trotzdem: <strong className="text-black">null Citations.</strong>
          </p>
          <p>
            Der Unterschied: Diesen Seiten fehlten die definierten Fachbegriffe, die benannten Tools und die Benchmark-Zahlen. Eine Seite über verlorene Wettbewerber-Leads war emotional stark, enthielt aber kein einziges Mal „Share of Voice" oder „Citation Rate", obwohl eine Grounding Query wörtlich „Share of Voice Wettbewerber KI Antworten messen" lautete.
          </p>
        </div>

        <StatBox text="Struktur ist notwendig, aber nicht ausreichend. Auf Bing entscheidet die Begriffsdichte: definierte Fachbegriffe plus benannte Tools plus Zahlen." />
      </section>

      {/* ============================================================ */}
      {/*  Die Grounding-Query-Methode                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Die Grounding-Query-Methode: Schritt für Schritt
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          So wird Bing-Optimierung messbar statt spekulativ. Du arbeitest direkt mit den Worten des Retrievers.
        </p>

        <ol className="space-y-8">
          <li>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">1. AI-Search-Queries-Bericht exportieren</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              In den Bing Webmaster Tools im Bereich AI Performance. Jede Zeile ist eine Grounding Query mit Zitatzahl.
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">2. Die Top-Queries in Begriffe zerlegen</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fasse fast identische Queries zusammen. Du siehst das Vokabular deiner Branche, zum Beispiel: Citation Rate, Share of Voice, Tools, Keyword Ranking ersetzen, Überwachung, Methoden.
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">3. Die Queries clustern</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unterschiedliche Bündel bedeuten unterschiedliche Absichten („messen" vs. „laufend überwachen" vs. „Wettbewerber-Share-of-Voice"). Jedes Cluster braucht eine eigene Seite.
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">4. Cluster auf Seiten abbilden</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mit dem AI-Page-Stats-Bericht. Ein Cluster mit vielen Citations und ohne eigene Seite ist eine Chance. Ein Cluster, das über mehrere schwache Seiten verteilt ist, gehört konsolidiert.
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">5. Pro Cluster eine vollständige Seite bauen</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Definiere jeden Begriff des Bündels, nenne die echten Tools, liefere zu jeder Kennzahl eine Zahl. Ziel: die vollständigste Übereinstimmung für dieses Cluster zu sein. Danach monatlich neu exportieren und beobachten, wie Cited Pages steigen.
            </p>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Bing-Technik                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Bing-spezifische Technik: erst im Index, dann zitierbar
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Copilot zitiert nur, was im Bing-Index steht. Diese Punkte sind Voraussetzung, kein Bonus:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-2">IndexNow</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Meldet neue und geänderte URLs sofort. Bing verarbeitet IndexNow, Google nicht. Verkürzt die Zeit bis zur Zitierbarkeit.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-2">Bingbot erlauben</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Copilot groundet über den Bing-Index. Wer Bingbot in der robots.txt blockt, blockt Copilot-Zitate.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-2">Server-seitiges Rendering</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Das Grounding liest das indexierte HTML, nicht einen client-seitig gerenderten React-Baum. Inhalt muss serverseitig vorliegen.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-2">Bing-Indexierung prüfen</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Mit der URL-Prüfung in den Bing Webmaster Tools, nicht nur in der Google Search Console. Bing ist ein eigener Index.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Bing vs Google                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Bing ist nicht Google: kein Widerspruch, zwei Systeme
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Google erklärt offiziell, dass ein KI-spezifischer Schreibstil oder Keyword-Phrasing für seine KI-Funktionen nicht nötig sind. Auf Bing war genau das stichwortdichte Begriffsbündel ausschlaggebend. Beide Aussagen stimmen, für unterschiedliche Systeme.
          </p>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Signal</th>
                <th className="py-3 pr-4 text-sm font-semibold text-brand-slate">Google KI-Funktionen</th>
                <th className="py-3 text-sm font-semibold text-brand-accent">Bing / Copilot</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Dichte, definierte Fachbegriffe</td>
                <td className="py-3 pr-4">laut Google nicht nötig</td>
                <td className="py-3">ausschlaggebend</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Grounding Queries einsehbar</td>
                <td className="py-3 pr-4">nicht offengelegt</td>
                <td className="py-3">in den Bing Webmaster Tools sichtbar</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">IndexNow</td>
                <td className="py-3 pr-4">wird nicht genutzt</td>
                <td className="py-3">wird verarbeitet</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Benannte Tools plus Zahlen</td>
                <td className="py-3 pr-4">als Qualität, kein Spezialhebel</td>
                <td className="py-3">stark mit Zitaten korreliert</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Der Fehler, den du vermeiden musst: Bing so zu optimieren wie Google. Auf Bing sagen unsere Daten, dass Begriffsdichte das ganze Spiel ist.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">{faq.q}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Quellen                                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Quellen
        </h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <li>
              <strong className="text-black">aiseo.hamburg (2026):</strong> Eigener Export aus den Bing Webmaster Tools, AI Performance, Zeitraum Februar bis Mai 2026. Berichte AI Performance Overview, AI Page Stats und AI Search Queries.
            </li>
            <li>
              <strong className="text-black">Microsoft (2025):</strong> Bing Webmaster Tools, Dokumentation zu AI Performance und Copilot-Citations.
            </li>
            <li>
              <strong className="text-black">IndexNow (2025):</strong> Protokoll-Dokumentation zur sofortigen URL-Übermittlung an Bing.
            </li>
            <li>
              <strong className="text-black">Princeton University (2024):</strong> „GEO: Generative Engine Optimization" zur Wirkung von Statistiken, Quellen und Fachvokabular auf KI-Zitierbarkeit.
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Weiterführende Guides                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Weiterführende Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="/wissen/ki-sichtbarkeit-messen"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit messen
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Die Seite, die fast 60% der Bing-Citations gewann. Tools, KPIs und ein Dashboard.
            </p>
          </a>

          <a
            href="/wissen/technische-ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Technische KI-Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              robots.txt, IndexNow, Server-Rendering und Schema: die technische Basis für Zitate.
            </p>
          </a>

          <a
            href="/wissen/google-ki-optimierung"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Google KI-Optimierung
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Was Google offiziell empfiehlt, und warum das Bing-Rezept dort nicht gilt.
            </p>
          </a>

          <a
            href="/wissen/sichtbarkeit-in-chatgpt"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Sichtbarkeit in ChatGPT
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wie du in ChatGPT-Antworten erscheinst und was OpenAI als Quelle bevorzugt.
            </p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-4">
            Wirst du von Copilot zitiert?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Wir lesen deine Grounding Queries, finden die Cluster ohne Gewinnerseite und bauen die Seite, die Bing zitiert. In einer kostenlosen Kurzanalyse.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Sichtbarkeits-Analyse" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

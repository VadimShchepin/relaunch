import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Gibt es ein Tool, das garantiert meine ChatGPT-Rankings verbessert?',
    a: 'Nein. Jedes Tool, das „garantierte ChatGPT-Rankings" verspricht, lügt. ChatGPT hat keine Rankings im klassischen Sinne — es generiert Antworten basierend auf Trainingsdaten und (beim Browsing-Modus) Live-Web-Ergebnissen. Kein externes Tool kann beeinflussen, was in den Trainingsdaten steht. Tools können dir helfen, deinen Content zu verbessern und deine Sichtbarkeit zu monitoren — aber eine Garantie ist technisch unmöglich.',
  },
  {
    q: 'Reichen kostenlose Tools für AI SEO aus?',
    a: 'Für den Anfang ja. Manuelles Testen in ChatGPT, Perplexity und Google AI kostet nichts. Google Search Console zeigt dir AI Overview-Impressionen. Schema.org-Validierung ist kostenlos. Wer gerade erst anfängt, braucht keine 500-Euro-Subscription. Wenn du allerdings 50+ Seiten monitoren willst oder regelmäßige Reports brauchst, machen bezahlte Tools wie Ahrefs Brand Radar oder Semrush AI Visibility Sinn — sie sparen schlicht Zeit.',
  },
  {
    q: 'Was ist der Unterschied zwischen Ahrefs Brand Radar und Semrush AI Visibility?',
    a: 'Ahrefs Brand Radar trackt, wie oft deine Marke in KI-Antworten erwähnt wird — über ChatGPT, Perplexity, Claude und andere Systeme hinweg. Es fokussiert sich auf Brand Mentions und Sentiment. Semrush AI Visibility geht breiter: Es zeigt, für welche Keywords du in AI Overviews erscheinst, wie sich dein Share of Voice entwickelt, und wie du im Vergleich zu Wettbewerbern stehst. Kurzfassung: Ahrefs für Marken-Monitoring, Semrush für Keyword-basierte Analyse.',
  },
  {
    q: 'Kann ich mit Gemini CLI meine KI-Sichtbarkeit testen?',
    a: 'Ja, indirekt. Gemini CLI ist ein kostenloses Developer-Tool von Google, mit dem du Prompts direkt im Terminal testen kannst. Du kannst damit systematisch prüfen, wie Gemini auf Fragen zu deiner Marke oder deinem Fachgebiet antwortet. Es ist kein Monitoring-Tool, aber perfekt für schnelle, manuelle Tests. Besonders nützlich für Entwickler, die automatisierte Test-Skripte schreiben wollen.',
  },
  {
    q: 'Welches AI SEO Tool hat das beste Preis-Leistungs-Verhältnis?',
    a: 'Das hängt von deinem Bedarf ab. Für KMUs mit begrenztem Budget: Ahrefs im Standardplan (enthält Brand Radar als Feature) bietet das breiteste Spektrum an SEO + AI-Funktionen. Für Agenturen und größere Unternehmen: Semrush mit dem AI Visibility Add-on liefert die tiefsten Analysen. Für Entwickler und Techies: Gemini CLI ist kostenlos und extrem leistungsfähig, erfordert aber technisches Know-how.',
  },
  {
    q: 'Wie oft sollte ich meine KI-Sichtbarkeit mit Tools überprüfen?',
    a: 'Für Perplexity und Google AI Overviews: wöchentlich, weil diese Systeme das Live-Web nutzen und Ergebnisse sich schnell ändern. Für ChatGPT und Claude: monatlich, weil diese Modelle seltener aktualisiert werden. Nach größeren Content-Updates: 2-4 Wochen warten, dann prüfen. Wer automatisierte Alerts einrichten kann (z.B. über Ahrefs), spart sich den manuellen Aufwand.',
  },
  {
    q: 'Brauche ich verschiedene Tools für verschiedene KI-Systeme?',
    a: 'Idealerweise ja. Kein einzelnes Tool deckt alle KI-Systeme perfekt ab. Ahrefs und Semrush fokussieren sich auf die großen Plattformen (ChatGPT, Perplexity, Google AI). Für Claude-Sichtbarkeit gibt es noch wenig spezialisierte Tools — hier bleibt manuelles Testen der beste Ansatz. Die Realität für die meisten Unternehmen: Ein gutes Monitoring-Tool plus manuelles Testen in 2-3 KI-Systemen reicht aus.',
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
  headline: 'AI SEO Tools 2026: Welche sich lohnen und welche Geldverbrennung sind',
  description:
    'Ehrlicher Überblick über AI SEO Tools 2026: Monitoring, Content-Optimierung und technische Tools. Was funktioniert, was Geld verbrennt, was du kostenlos ersetzen kannst.',
  image: 'https://aiseo.hamburg/images/wissen/ai-seo-tools.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-04-02',
  dateModified: '2026-04-02',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ai-seo-tools',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'AI SEO Tools 2026' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AISEOToolsPage() {
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">AI SEO Tools 2026</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          AI SEO Tools 2026: Welche sich lohnen und welche Geldverbrennung sind
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Der AI-SEO-Tool-Markt 2026 ist wie ein türkischer Basar — jeder schreit, alles blinkt, und die Hälfte der Ware fällt auseinander, sobald du sie anfasst. Hier erfährst du, welche Tools dein Geld wert sind und welche du genauso gut aus dem Fenster werfen kannst.
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
              <span><strong className="text-black">Es gibt keine „ChatGPT-Rankings-Tools".</strong> Wer dir das verkauft, verkauft dir auch gern eine Brücke in Brooklyn.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Monitoring-Tools (Ahrefs Brand Radar, Semrush AI Visibility)</strong> sind die einzige Kategorie, die 2026 wirklich unverzichtbar ist.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">80 % des AI-SEO-Toolings kannst du kostenlos machen</strong> — manuell testen, Google Search Console, Schema-Validatoren.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Gemini CLI ist das unterschätzteste Tool</strong> im Stack — kostenlos, mächtig, aber nur für Leute, die ein Terminal nicht für einen Flughafenbereich halten.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">Das teuerste Tool ist das, das du nicht benutzt.</strong> Bevor du 500 €/Monat ausgibst, frag dich: Nutze ich überhaupt die kostenlosen Optionen?</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die Landschaft                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die AI-SEO-Tool-Landschaft 2026: Zwischen Revolution und Schlangenöl
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Seit ChatGPT die Welt übernommen hat, ist jedes zweite SEO-Tool plötzlich ein „AI SEO Tool". Manche haben tatsächlich KI-Features gebaut. Andere haben ein „AI" ins Logo gepappt und den Preis verdoppelt. Willkommen im Jahr 2026, wo jedes Startup mit einem API-Call zu OpenAI behauptet, es könne deine „KI-Sichtbarkeit revolutionieren".
          </p>
          <p>
            Lass uns Ordnung in dieses Chaos bringen. Ich teile AI-SEO-Tools in vier Kategorien ein: <strong className="text-black">Monitoring</strong> (Was passiert?), <strong className="text-black">Content-Optimierung</strong> (Was schreiben?), <strong className="text-black">Technische Tools</strong> (Was implementieren?) und <strong className="text-black">Schlangenöl</strong> (Was meiden?). Spoiler: Die letzte Kategorie ist die größte.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Faustregel: Wenn ein Tool verspricht, dein „ChatGPT-Ranking zu verbessern", ist es Schlangenöl. ChatGPT hat keine Rankings. Es generiert Antworten. Das ist ein fundamentaler Unterschied.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Kategorie 1: Monitoring                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Kategorie 1: Monitoring-Tools — Wo wirst du erwähnt?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Die wichtigste Kategorie. Denn bevor du irgendetwas optimierst, musst du wissen, wo du stehst. Du kannst nicht verbessern, was du nicht misst — das gilt für SEO wie für dein Cholesterin.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-black">Ahrefs Brand Radar</h3>
              <span className="shrink-0 text-sm font-semibold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">Empfehlung</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Trackt Brand Mentions in KI-Antworten über ChatGPT, Perplexity, Claude und Google AI Overviews. Zeigt Sentiment, Kontext und zeitliche Entwicklung. Die beste Lösung, wenn du wissen willst: „Wird meine Marke erwähnt, und wenn ja — positiv oder negativ?"
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-black mb-1">Stärken:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; Multi-Plattform-Monitoring (ChatGPT, Perplexity, Claude, Gemini)</li>
                  <li>&#8226; Sentiment-Analyse der Erwähnungen</li>
                  <li>&#8226; Integriert in bestehendes Ahrefs-Dashboard</li>
                  <li>&#8226; Wettbewerber-Vergleich möglich</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Schwächen:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; Erfordert Ahrefs-Subscription (ab ~99 $/Monat)</li>
                  <li>&#8226; Keyword-basiertes Tracking begrenzt</li>
                  <li>&#8226; Keine Content-Optimierungsvorschläge</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-black">Semrush AI Visibility</h3>
              <span className="shrink-0 text-sm font-semibold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">Empfehlung</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Geht tiefer als Ahrefs: Zeigt, für welche Keywords du in AI Overviews und KI-Antworten erscheinst, berechnet deinen „AI Share of Voice" im Vergleich zu Wettbewerbern, und liefert historische Daten. Für Unternehmen, die ihre KI-Sichtbarkeit systematisch ausbauen wollen, aktuell das umfassendste Tool.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-black mb-1">Stärken:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; Keyword-basiertes AI Visibility Tracking</li>
                  <li>&#8226; AI Share of Voice vs. Wettbewerber</li>
                  <li>&#8226; Historische Trendanalysen</li>
                  <li>&#8226; Detaillierte Quellenanalyse (welche Seiten werden zitiert)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Schwächen:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; AI Visibility als Add-on, nicht im Basisplan enthalten</li>
                  <li>&#8226; Preis steigt mit Keyword-Volumen schnell an</li>
                  <li>&#8226; Interface kann überwältigend sein für Einsteiger</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-black">Google Search Console (AI Overviews)</h3>
              <span className="shrink-0 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">Kostenlos</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Das vergessen die meisten: Google Search Console zeigt seit 2025 auch AI Overview-Impressionen und -Klicks an. Filtere nach „Search Appearance &gt; AI Overview" und du siehst, für welche Queries deine Seiten in AI Overviews erscheinen. Nicht so sexy wie Ahrefs, aber kostenlos und direkt von Google.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-black mb-1">Stärken:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; Kostenlos, direkt von Google</li>
                  <li>&#8226; Echte Impressions- und Click-Daten</li>
                  <li>&#8226; Zeigt welche URLs in AI Overviews erscheinen</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Schwächen:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; Nur Google AI Overviews (nicht ChatGPT, Perplexity etc.)</li>
                  <li>&#8226; Keine Wettbewerber-Daten</li>
                  <li>&#8226; Kein Sentiment oder Kontextanalyse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Kategorie 2: Content-Optimierung                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Kategorie 2: Content-Optimierungs-Tools — Hilfe oder Halluzination?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Hier wird es heikel. Jedes zweite Tool verspricht „KI-optimierten Content auf Knopfdruck". Die Realität: Kein Tool kann deinen Content automatisch zitierfähig machen. Aber manche helfen beim Schreiben. Andere machen es schlimmer.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Clearscope / Surfer SEO / Frase</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Die „alten" Content-Optimierungs-Tools haben inzwischen AI-Features. Sie analysieren, welche Begriffe und Entitäten in Top-Ergebnissen vorkommen, und helfen dir, semantische Vollständigkeit zu erreichen. <strong className="text-black">Für klassisches SEO nach wie vor nützlich. Für AI SEO? Indirekt.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Semantische Vollständigkeit ist auch für KI-Zitierbarkeit relevant — wenn dein Artikel über „KI-Sichtbarkeit" die Entitäten ChatGPT, Perplexity, Schema.org und E-E-A-T nicht erwähnt, ist er semantisch unvollständig. Diese Tools helfen dabei. Aber sie optimieren nicht spezifisch für KI-Zitierungen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">ChatGPT / Claude / Gemini (als Schreibassistenten)</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Die ehrlichste Antwort: Die beste Content-Optimierung für KI machst du mit KI. Schreib deinen Artikel, wirf ihn in ChatGPT und frag: „Welche wichtigen Aspekte fehlen in diesem Artikel über [Thema]? Welche Fragen bleiben unbeantwortet?"
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-black">Das ist keine Optimierung, das ist Qualitätskontrolle.</strong> Und es ist kostenlos. Du brauchst kein 200-Dollar-Tool, das im Kern das Gleiche macht: einen API-Call an OpenAI mit einem fancy Interface.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">„AI Content Generators" (Jasper, Copy.ai und Co.)</h3>
            <p className="text-gray-600 leading-relaxed">
              Lassen wir die Diplomatie beiseite: Wenn du Content mit einem AI-Content-Generator erstellst und diesen unbearbeitet veröffentlichst, produzierst du genau den Me-Too-Content, den KI-Systeme nicht zitieren werden. Warum? Weil der Output dieser Tools statistisch durchschnittlich ist — er sagt das, was alle anderen auch sagen. <strong className="text-black">KI zitiert nicht den Durchschnitt. KI zitiert die Ausnahme.</strong> Diese Tools sind okay für Entwürfe. Für fertige Inhalte? Dann kannst du auch direkt in ChatGPT tippen und die 50 Dollar Subscription sparen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Kategorie 3: Technische Tools                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Kategorie 3: Technische Tools — Für Leute, die wissen, was ein Terminal ist
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Die unterschätzteste Kategorie. Technische Tools helfen dir, deine Website maschinenlesbar zu machen — und das ist für KI-Sichtbarkeit oft wichtiger als jedes Content-Optimierungs-Tool.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-black">Gemini CLI</h3>
              <span className="shrink-0 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">Kostenlos</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-3">
              Das am meisten unterschätzte Tool in diesem ganzen Artikel. Gemini CLI ist Googles Command-Line-Interface für Gemini — du kannst damit direkt im Terminal Prompts testen, Antworten analysieren und sogar automatisierte Test-Skripte schreiben.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="text-black">Warum ist das relevant für AI SEO?</strong> Weil du damit systematisch prüfen kannst, wie Gemini (und indirekt Google AI Overviews) auf Fragen zu deiner Marke, deinen Produkten und deinem Fachgebiet antwortet. Statt manuell im Browser zu tippen, schreibst du ein Skript, das 50 Prompts durchläuft und die Ergebnisse speichert.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Der Haken: Du brauchst Grundkenntnisse im Terminal. Wenn du bei „npm install" schon nervös wirst, ist das nichts für dich. Für alle anderen: Gold.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-black">Schema.org-Validatoren</h3>
              <span className="shrink-0 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">Kostenlos</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Google Rich Results Test und Schema Markup Validator sind kostenlos und unverzichtbar. Dein strukturiertes Markup (Article, FAQ, Organization, Person) muss fehlerfrei sein. Ein kaputtes Schema ist wie ein Personalausweis mit Tippfehler — technisch vorhanden, praktisch nutzlos. <strong className="text-black">Prüfe jede Seite nach dem Deployment.</strong> Es dauert 30 Sekunden und erspart dir Wochen unsichtbarer Fehler.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-black">Screaming Frog + Custom Extractions</h3>
              <span className="shrink-0 text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Freemium</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Der SEO-Crawler-Klassiker kann mit Custom Extractions prüfen, ob deine Seiten KI-ready sind: Ist Schema-Markup vorhanden? Haben alle Seiten eine FAQ-Sektion? Gibt es Autoren-Informationen? Ist das Veröffentlichungsdatum sichtbar? Für technische AI-SEO-Audits nach wie vor unschlagbar. Die kostenlose Version reicht für Websites bis 500 URLs.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Kategorie 4: Schlangenöl                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Kategorie 4: Schlangenöl — Tools, die dein Geld nicht wert sind
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
          <p>
            Jetzt kommt der Teil, für den mich einige Tool-Anbieter hassen werden. Aber jemand muss es sagen, und ich habe keine Affiliate-Links zu verlieren.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">„Garantierte ChatGPT-Rankings"-Tools</h3>
            <p className="text-gray-600 leading-relaxed">
              Es gibt eine wachsende Anzahl von Tools, die versprechen, dein „Ranking in ChatGPT" zu verbessern. Die unangenehme Wahrheit: <strong className="text-black">ChatGPT hat keine Rankings.</strong> Es hat Trainingsdaten und einen Algorithmus, der Antworten generiert. Kein externes Tool kann beeinflussen, was in OpenAIs Trainingsdaten steht. Kein Tool kann garantieren, dass ChatGPT dich erwähnt. Jeder, der das behauptet, versteht entweder nicht, wie LLMs funktionieren — oder hofft, dass du es nicht verstehst.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">„AI SEO Audit"-Tools für 500+ €/Monat</h3>
            <p className="text-gray-600 leading-relaxed">
              Diese Tools crawlen deine Website, schauen ob du Schema-Markup hast, ob deine H-Tags sauber sind, und ob du eine FAQ-Sektion hast. Dann generieren sie einen PDF-Report mit „AI Readiness Score". <strong className="text-black">Das kannst du mit Screaming Frog (kostenlos bis 500 URLs) und einer Checkliste in 30 Minuten selbst machen.</strong> Die 500 € pro Monat zahlst du für ein hübsches Dashboard und einen Score, der so aussagekräftig ist wie ein Horoskop.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">„AI Backlink"-Dienste</h3>
            <p className="text-gray-600 leading-relaxed">
              Neueste Masche: Dienste, die versprechen, deine Website in „KI-Trainingsdaten" zu platzieren. Sie erstellen Inhalte auf Content-Farmen, die angeblich von KI-Crawlern indexiert werden. <strong className="text-black">Das ist Spam mit neuem Etikett.</strong> Im besten Fall passiert gar nichts. Im schlimmsten Fall landest du auf einer Blocklist. Die einzige sichere Methode, in Trainingsdaten zu landen: Erstelle hochwertigen Content auf einer seriösen Domain und warte.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Vergleichstabelle                                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          AI SEO Tools im Vergleich: Die ehrliche Übersicht
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Tool</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">Kategorie</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">Preis</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">Nutzen</th>
                <th className="py-3 text-sm font-semibold text-black">Urteil</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Ahrefs Brand Radar</td>
                <td className="py-3 pr-4">Monitoring</td>
                <td className="py-3 pr-4">ab ~99 $/Mo.</td>
                <td className="py-3 pr-4 text-brand-accent font-semibold">Hoch</td>
                <td className="py-3">Beste Brand-Monitoring-Lösung für KI</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Semrush AI Visibility</td>
                <td className="py-3 pr-4">Monitoring</td>
                <td className="py-3 pr-4">ab ~130 $/Mo.</td>
                <td className="py-3 pr-4 text-brand-accent font-semibold">Hoch</td>
                <td className="py-3">Tiefstes Keyword-basiertes AI Tracking</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Google Search Console</td>
                <td className="py-3 pr-4">Monitoring</td>
                <td className="py-3 pr-4">Kostenlos</td>
                <td className="py-3 pr-4 text-brand-accent font-semibold">Mittel-Hoch</td>
                <td className="py-3">Pflicht für AI Overview-Daten</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Gemini CLI</td>
                <td className="py-3 pr-4">Technisch</td>
                <td className="py-3 pr-4">Kostenlos</td>
                <td className="py-3 pr-4 text-brand-accent font-semibold">Hoch</td>
                <td className="py-3">Unterschätzt. Für Entwickler Gold.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Screaming Frog</td>
                <td className="py-3 pr-4">Technisch</td>
                <td className="py-3 pr-4">Kostenlos / 259 $/Jahr</td>
                <td className="py-3 pr-4 font-semibold">Mittel</td>
                <td className="py-3">Unschlagbar für technische Audits</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Clearscope / Surfer SEO</td>
                <td className="py-3 pr-4">Content</td>
                <td className="py-3 pr-4">ab ~89 $/Mo.</td>
                <td className="py-3 pr-4 font-semibold">Mittel</td>
                <td className="py-3">Gut für semantische Analyse, nicht KI-spezifisch</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Schema Validators</td>
                <td className="py-3 pr-4">Technisch</td>
                <td className="py-3 pr-4">Kostenlos</td>
                <td className="py-3 pr-4 text-brand-accent font-semibold">Hoch</td>
                <td className="py-3">Pflicht. Keine Ausreden.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">„ChatGPT Ranking"-Tools</td>
                <td className="py-3 pr-4">Schlangenöl</td>
                <td className="py-3 pr-4">100-500 $/Mo.</td>
                <td className="py-3 pr-4 text-red-500 font-semibold">Null</td>
                <td className="py-3">Finger weg.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Kostenlos vs. Bezahlt                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Kostenlos vs. bezahlt: Was du wirklich brauchst
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-4">Der kostenlose Stack</h3>
            <p className="text-sm text-gray-500 mb-4">Für Einzelunternehmer, Freelancer und kleine KMUs</p>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Manuelles Testen:</strong> Frag ChatGPT, Perplexity, Claude nach deinem Thema. Kostenlos, 15 Min/Woche.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Google Search Console:</strong> AI Overview-Impressionen und -Klicks tracken.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Schema Validators:</strong> Strukturierte Daten prüfen nach jedem Update.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Gemini CLI:</strong> Automatisiertes Testen für Technikaffine.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">ChatGPT/Claude als Reviewer:</strong> Content-Qualität gegenchecken.</span></li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600"><strong className="text-black">Kosten:</strong> 0 € — <strong className="text-black">Aufwand:</strong> ~2-3 Stunden pro Woche</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-4">Der bezahlte Stack</h3>
            <p className="text-sm text-gray-500 mb-4">Für Agenturen, Mittelständler und Unternehmen mit 50+ Seiten</p>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Ahrefs oder Semrush:</strong> Automatisiertes Monitoring über alle KI-Plattformen.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Screaming Frog (Paid):</strong> Technische Audits für große Websites.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">Clearscope/Surfer:</strong> Semantische Content-Analyse im Team.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5">&#8226;</span><span><strong className="text-black">+ Kostenloser Stack:</strong> Die kostenlosen Tools bleiben die Basis.</span></li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600"><strong className="text-black">Kosten:</strong> ~200-400 €/Monat — <strong className="text-black">Aufwand:</strong> ~1-2 Stunden pro Woche (Rest automatisiert)</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Die brutale Wahrheit:</strong> Die meisten Unternehmen, die nach AI SEO Tools fragen, nutzen nicht einmal die kostenlosen Optionen. Bevor du Geld ausgibst, mach den Selbsttest: Hast du in den letzten 30 Tagen manuell geprüft, ob ChatGPT deine Marke erwähnt? Hast du deine AI Overview-Daten in der Search Console angeschaut? Nein? Dann brauchst du kein 300-Euro-Tool. Du brauchst 15 Minuten Zeit.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Der richtige Workflow                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der AI-SEO-Tool-Workflow, der tatsächlich funktioniert
        </h2>

        <ol className="space-y-6">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 1: Baseline messen (Woche 1)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Teste 20-30 relevante Prompts in ChatGPT, Perplexity und Google AI. Dokumentiere, wo du erwähnt wirst und wo nicht. Prüfe deine AI Overview-Daten in der Search Console. Das ist deine Baseline — ohne sie weißt du nicht, ob irgendetwas funktioniert.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 2: Technisches Audit (Woche 2)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Screaming Frog oder manuell: Ist Schema-Markup vorhanden? Sind H-Tags sauber? Gibt es FAQ-Sektionen? Ist das Veröffentlichungsdatum sichtbar? Gibt es eine llms.txt? Sind KI-Crawler in der robots.txt erlaubt? Die meisten Websites scheitern schon hier.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 3: Content optimieren (Woche 3-4)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Basierend auf Baseline und Audit: Die wichtigsten 10 Seiten überarbeiten. Answer-First-Strukturen, Quellenangaben, FAQ-Sektionen, Schema-Markup. Kein Tool nötig — nur Disziplin und eine Checkliste.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 4: Monitoring aufsetzen (Woche 5)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jetzt — und erst jetzt — investiere in ein Monitoring-Tool, wenn der kostenlose Stack nicht mehr ausreicht. Ahrefs Brand Radar für Marken-Monitoring oder Semrush AI Visibility für Keyword-Tracking. Setze wöchentliche oder monatliche Checks auf.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Schritt 5: Iterieren (fortlaufend)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vergleiche Ergebnisse mit der Baseline. Was hat sich verbessert? Wo tauchen neue Erwähnungen auf? Welche Seiten werden jetzt zitiert? Optimiere weiter, erstelle neuen Content, aktualisiere bestehenden. AI SEO ist kein Projekt — es ist ein Prozess.
              </p>
            </div>
          </li>
        </ol>
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
              Methoden und Metriken, um deine Präsenz in KI-Antworten zu tracken.
            </p>
          </a>

          <a
            href="/wissen/ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und wie du sie erreichst.
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
              robots.txt, llms.txt, Schema.org — die technische Seite der KI-Optimierung.
            </p>
          </a>

          <a
            href="/wissen/ai-content-strategie"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              AI Content Strategie
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inhalte erstellen, die KI-Systeme als Quelle nutzen wollen.
            </p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            Überfordert vom Tool-Dschungel?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Ich zeige dir, welche Tools du wirklich brauchst — und spare dir die, die du nicht brauchst. Kostenlose Analyse deiner KI-Sichtbarkeit inklusive Tool-Empfehlung.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Tool-Beratung anfragen" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

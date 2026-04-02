import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was ist ein KI-Content-Audit und warum brauche ich einen?',
    a: 'Ein KI-Content-Audit bewertet deine bestehenden Inhalte danach, ob KI-Systeme wie ChatGPT, Perplexity und Google AI Overviews sie als Quelle nutzen würden. Im Unterschied zu einem klassischen SEO-Audit geht es nicht um Rankings und Keywords, sondern um Zitierbarkeit, Struktur und Aktualität. Du brauchst einen, weil laut Gartner bis 2028 über 50 % des organischen Traffics durch KI-gestützte Suche verloren gehen — und nur zitierbarer Content diesen Verlust kompensiert.',
  },
  {
    q: 'Wie oft sollte ich einen KI-Content-Audit durchführen?',
    a: 'Mindestens einmal pro Quartal. KI-Systeme entwickeln sich schnell weiter, und Content, der vor drei Monaten gut performte, kann heute schon irrelevant sein. Ein großer Audit alle 6 Monate mit kleineren Check-ups dazwischen ist der beste Ansatz. Bei schnelllebigen Branchen wie Tech oder Finance empfiehlt sich ein monatlicher Quick-Check der Top-20-Seiten.',
  },
  {
    q: 'Wie viele Seiten sollte ich beim ersten Audit bewerten?',
    a: 'Starte mit deinen Top-50-Seiten nach Traffic und Geschäftsrelevanz. Die Versuchung, gleich alle 500 Seiten zu auditieren, ist groß — aber unrealistisch. Fokus schlägt Vollständigkeit. Wenn die Top 50 optimiert sind, nimmst du die nächsten 50. So hast du in 3 Monaten die wichtigsten Inhalte abgearbeitet, statt 6 Monate in einer Excel-Tabelle zu verschwinden.',
  },
  {
    q: 'Was ist der Unterschied zwischen einem klassischen Content-Audit und einem KI-Content-Audit?',
    a: 'Ein klassischer Content-Audit bewertet SEO-Performance: Rankings, Traffic, Keyword-Abdeckung, Backlinks. Ein KI-Content-Audit bewertet KI-Zitierbarkeit: Answer-First-Struktur, Quellenangaben, Schema-Markup, semantische Vollständigkeit und ob der Content als vertrauenswürdige Quelle extrahierbar ist. Beide Audits ergänzen sich — ein Content, der für KI optimiert ist, performt in der Regel auch bei Google besser.',
  },
  {
    q: 'Soll ich schlechten Content löschen oder überarbeiten?',
    a: 'Kommt auf den KI-Audit-Score an. Seiten mit 0–3 Punkten im Scoring (von 12) und wenig Traffic: löschen oder redirecten. Seiten mit 4–7 Punkten: überarbeiten, wenn sie thematisch relevant sind. Seiten mit 8+ Punkten: Feintuning. Grundregel: Lieber 50 exzellente Seiten als 500 mittelmäßige. KI-Systeme bevorzugen Qualität über Quantität — und Google seit dem Helpful Content Update ebenfalls.',
  },
  {
    q: 'Welche Tools brauche ich für einen KI-Content-Audit?',
    a: 'Grundlegend: eine Tabelle (Google Sheets reicht), Screaming Frog für technische Daten, Google Analytics für Traffic-Zahlen und ChatGPT/Perplexity zum manuellen Testen der Zitierbarkeit. Fortgeschritten: Ahrefs Brand Radar oder Semrush AI Visibility für automatisiertes KI-Zitierungs-Tracking. Ein Schema-Markup-Validator für die technische Prüfung. Die meisten Unternehmen kommen mit den Grundtools aus.',
  },
  {
    q: 'Wie lange dauert ein KI-Content-Audit für 100 Seiten?',
    a: 'Mit dem Scoring-System aus diesem Guide: 2–3 Arbeitstage für die Bewertung, plus 1 Tag für die Priorisierung und Aktionsplanung. Die eigentliche Optimierung dauert je nach Umfang 2–8 Wochen. Wichtig: Der Audit selbst ist nur die Diagnose. Die Therapie — also das Umschreiben, Zusammenführen und Löschen — ist der eigentliche Aufwand.',
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
  headline: 'Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt',
  description:
    'Schritt-für-Schritt-Anleitung zum KI-Content-Audit: Scoring-System, Checkliste und Priorisierung. Welchen Content updaten, löschen oder zusammenführen.',
  image: 'https://aiseo.hamburg/images/wissen/ki-content-audit-anleitung.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-content-audit-anleitung',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'KI-Content-Audit Anleitung' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function KIContentAuditPage() {
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
            <li className="text-black font-medium">KI-Content-Audit Anleitung</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Du sitzt auf 500 Blogposts und keiner wird von ChatGPT zitiert. Das ist, als hättest du eine Bibliothek voller Bücher — in einer Sprache, die niemand mehr spricht. Zeit für eine ehrliche Inventur.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR — Wer keine Zeit hat</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">80 % deines Contents ist für KI wertlos.</strong> Nicht böse gemeint. Einfach Realität. Die meisten Blogartikel vor 2025 wurden für Google geschrieben, nicht für KI.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Ein KI-Content-Audit bewertet Zitierbarkeit, nicht Rankings.</strong> Andere Kriterien. Anderes Scoring. Andere Konsequenzen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">3 Aktionen pro Seite: Updaten, Zusammenführen oder Löschen.</strong> Es gibt kein „mal schauen". Jede Seite bekommt eine Entscheidung.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Starte mit den Top 50, nicht mit allen 500.</strong> Perfektionismus ist der Feind des Fortschritts. Und deines Verstandes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">Dieser Guide hat ein Scoring-Template.</strong> 12 Kriterien, 0–2 Punkte pro Kriterium. Kein Bauchgefühl, nur Fakten.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Warum dein Content ein Problem hat                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum dein Content ein Problem hat (auch wenn Google ihn liebt)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Du hast alles richtig gemacht. Keywords recherchiert, Artikel geschrieben, Backlinks aufgebaut. Dein Blog rankt. Dein Marketing-Team ist stolz. <strong className="text-black">Und dann fragt jemand ChatGPT nach deinem Thema — und du existierst nicht.</strong>
          </p>
          <p>
            Das ist ungefähr so, als hättest du jahrelang eine Telefonbuch-Anzeige optimiert, während die Welt auf Smartphones umgestiegen ist. Nicht falsch gewesen. Aber jetzt halt auch nicht mehr richtig.
          </p>
          <p>
            Das Problem ist nicht, dass dein Content schlecht ist. Das Problem ist, dass er für eine Welt geschrieben wurde, die gerade aufhört zu existieren. Google-Rankings allein reichen nicht mehr. KI-Systeme brauchen andere Strukturen, andere Formate, andere Signale.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Gartner (2024): Bis 2028 werden Marken über 50 % ihres organischen Traffics durch KI-gestützte Suche verlieren. Wer seinen Content nicht für KI-Zitierbarkeit optimiert, verliert nicht morgen — aber übermorgen.
          </p>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Die gute Nachricht: Du musst nicht alles neu schreiben. Du musst nur wissen, was bleiben darf, was überarbeitet werden muss und was in den digitalen Schredder gehört. Und genau dafür gibt es den KI-Content-Audit.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Klassisch vs KI-Content-Audit                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Klassischer Content-Audit vs. KI-Content-Audit
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Zwei Audits, zwei Welten. Der klassische schaut, ob Google dich findet. Der KI-Audit schaut, ob ChatGPT dich empfiehlt. Ratet mal, welcher in Zukunft relevanter wird.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                <th className="py-3 pr-4 text-sm font-semibold text-gray-500">Klassischer Audit</th>
                <th className="py-3 text-sm font-semibold text-brand-accent">KI-Content-Audit</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Ziel</td>
                <td className="py-3 pr-4">Bessere Rankings</td>
                <td className="py-3">KI-Zitierungen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Bewertungsfokus</td>
                <td className="py-3 pr-4">Keywords, Traffic, Backlinks</td>
                <td className="py-3">Struktur, Quellen, Extrahierbarkeit</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Strukturanalyse</td>
                <td className="py-3 pr-4">H1-Tags, Meta-Descriptions</td>
                <td className="py-3">Answer-First, H2/H3-Hierarchie, Schema-Markup</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Qualitätssignal</td>
                <td className="py-3 pr-4">Verweildauer, Bounce Rate</td>
                <td className="py-3">Quellenangaben, E-E-A-T, Eindeutigkeit</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Aktualität</td>
                <td className="py-3 pr-4">Nice-to-have</td>
                <td className="py-3">Überlebenswichtig</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Duplicate Content</td>
                <td className="py-3 pr-4">Canonical Tags setzen</td>
                <td className="py-3">Zusammenführen oder löschen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Vergleich</td>
                <td className="py-3 pr-4">TÜV-Prüfung für Autos</td>
                <td className="py-3">Prüfung, ob dein Auto überhaupt fliegen kann</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das KI-Content-Scoring-System                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Das KI-Content-Scoring: 12 Kriterien, 0–2 Punkte
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Kein Bauchgefühl. Kein „fühlt sich gut an". Jede Seite bekommt eine Zahl. Und diese Zahl entscheidet, was passiert. Kalt? Ja. Effektiv? Absolut.
        </p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-black mb-6">Scoring-Template: KI-Zitierbarkeit</h3>
          <p className="text-sm text-gray-500 mb-6">Bewerte jede Seite mit 0 (nicht vorhanden), 1 (teilweise) oder 2 (voll erfüllt).</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">1</span>
              <div>
                <p className="font-medium text-black">Answer-First-Struktur</p>
                <p className="text-sm text-gray-500">Steht die Kernantwort in den ersten 2–3 Sätzen jedes Abschnitts?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">2</span>
              <div>
                <p className="font-medium text-black">H2/H3-Hierarchie</p>
                <p className="text-sm text-gray-500">Hat jeder Abschnitt eine beschreibende Zwischenüberschrift, die als Frage oder Statement funktioniert?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">3</span>
              <div>
                <p className="font-medium text-black">Quellenangaben</p>
                <p className="text-sm text-gray-500">Sind Aussagen mit konkreten Quellen, Studien oder Daten belegt (nicht nur „Experten sagen")?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">4</span>
              <div>
                <p className="font-medium text-black">Aktualität</p>
                <p className="text-sm text-gray-500">Ist ein Veröffentlichungs- und/oder Aktualisierungsdatum sichtbar? Sind alle Informationen aktuell?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">5</span>
              <div>
                <p className="font-medium text-black">Schema-Markup</p>
                <p className="text-sm text-gray-500">Ist Article-, FAQ- oder HowTo-Schema korrekt implementiert?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">6</span>
              <div>
                <p className="font-medium text-black">Eindeutigkeit</p>
                <p className="text-sm text-gray-500">Gibt es klare Aussagen statt vager Formulierungen? Wird „es kommt darauf an" immer mit Kontext ergänzt?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">7</span>
              <div>
                <p className="font-medium text-black">Semantische Vollständigkeit</p>
                <p className="text-sm text-gray-500">Sind alle relevanten Entitäten (Begriffe, Tools, Konzepte) zum Thema abgedeckt?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">8</span>
              <div>
                <p className="font-medium text-black">Extrahierbare Formate</p>
                <p className="text-sm text-gray-500">Werden Listen, Tabellen oder nummerierte Schritte verwendet, wo es sinnvoll ist?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">9</span>
              <div>
                <p className="font-medium text-black">Unique Insights</p>
                <p className="text-sm text-gray-500">Bietet der Content eigene Daten, Erfahrungen oder Perspektiven, die andere nicht haben?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">10</span>
              <div>
                <p className="font-medium text-black">Autoreninfo &amp; E-E-A-T</p>
                <p className="text-sm text-gray-500">Ist ein Autor mit nachweisbarer Expertise zugeordnet? Sind Erfahrungssignale erkennbar?</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">11</span>
              <div>
                <p className="font-medium text-black">Interne Verlinkung</p>
                <p className="text-sm text-gray-500">Ist der Artikel Teil eines Topic Clusters? Verlinkt er auf und von verwandten Inhalten?</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0 w-6 text-center">12</span>
              <div>
                <p className="font-medium text-black">Technische Zugänglichkeit</p>
                <p className="text-sm text-gray-500">Können KI-Crawler (GPTBot, ClaudeBot, PerplexityBot) die Seite crawlen? Kein JS-Only-Rendering?</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <strong className="text-black">Bewertung:</strong> 20–24 Punkte = KI-ready, Feintuning reicht. 12–19 Punkte = Überarbeitung nötig, gute Basis. 5–11 Punkte = Grundlegende Überarbeitung oder Zusammenführung. 0–4 Punkte = Löschen oder komplett neu schreiben. Nicht weinen, machen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5-Schritte-Audit-Prozess                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Der 5-Schritte-Audit-Prozess: Von der Bestandsaufnahme zur Aktion
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Kein „analysiere erstmal 6 Monate lang". Du brauchst Ergebnisse, keine Beschäftigungstherapie. Dieser Prozess funktioniert für 50 oder 5.000 Seiten.
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Schritt 1: Inventar erstellen — Was hast du überhaupt?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Die meisten Unternehmen wissen nicht, wie viele Seiten sie haben. Ernsthaft. Sie haben „irgendwas um die 200", und wenn du Screaming Frog drüberlaufen lässt, sind es 847. Davon 300 mit Thin Content, 50 Duplikate und 12, die seit 2019 nicht aktualisiert wurden.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Screaming Frog oder Sitemap exportieren — alle URLs in eine Tabelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Traffic-Daten aus GA4 zuordnen (letzte 6 Monate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Letztes Update-Datum pro Seite erfassen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Content-Typ kategorisieren: Blog, Landingpage, FAQ, Guide, Produkt</span>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Schritt 2: Priorisieren — Die Top 50 zuerst
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Du willst nicht alle 500 Seiten gleichzeitig bewerten. Das ist, als würdest du versuchen, 500 Patienten gleichzeitig zu operieren. Sortiere nach zwei Kriterien: <strong className="text-black">Traffic (höchster zuerst)</strong> und <strong className="text-black">Geschäftsrelevanz</strong> (Seiten, die direkt Umsatz generieren). Die Schnittmenge sind deine Top 50.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Top 25 nach Traffic sortieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Top 25 nach Geschäftsrelevanz (Conversion-Seiten, Money Pages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Duplikate zusammenführen — eine Liste mit 50 Seiten</span>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Schritt 3: Scoring — Jede Seite durch die 12 Kriterien jagen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Jetzt wird es ernst. Öffne jede der 50 Seiten und bewerte sie mit dem Scoring-System oben. 0, 1 oder 2 Punkte pro Kriterium. Maximal 24 Punkte. Sei brutal ehrlich. Dein Content wird es dir nicht übel nehmen — er hat keine Gefühle. Im Gegensatz zu dir, wenn ChatGPT ihn ignoriert.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Pro Seite ~5 Minuten einplanen (ja, 50 Seiten = ~4 Stunden, Kaffee bereitstellen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Score in die Tabelle eintragen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Zusätzlich: ChatGPT/Perplexity nach dem Thema fragen — wirst du zitiert?</span>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Schritt 4: Entscheidung — Updaten, Zusammenführen oder Löschen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Jede Seite bekommt genau eine Aktion. Kein „schauen wir mal". Kein „lass ich erstmal so". Das ist der Moment, in dem du dich vom digitalen Messie-Syndrom verabschiedest.
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-green-800 mb-1">20–24 Punkte: Feintuning</p>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Kleine Anpassungen: Schema-Markup ergänzen, Quellenangaben aktualisieren, FAQ hinzufügen. Zeitaufwand: 30–60 Minuten pro Seite.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-yellow-800 mb-1">12–19 Punkte: Überarbeitung</p>
                  <p className="text-sm text-yellow-700 leading-relaxed">
                    Answer-First umstrukturieren, Quellen einbauen, H2/H3-Hierarchie überarbeiten, Entitäten ergänzen. Zeitaufwand: 2–4 Stunden pro Seite.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-orange-800 mb-1">5–11 Punkte: Zusammenführen</p>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Schwache Einzelartikel zu einem starken Pillar-Artikel kombinieren. Drei dünne Blogposts zum gleichen Thema werden ein umfassender Guide. 301-Redirects setzen. Zeitaufwand: 1 Tag pro Cluster.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-800 mb-1">0–4 Punkte: Löschen</p>
                  <p className="text-sm text-red-700 leading-relaxed">
                    Kein Traffic, keine Relevanz, keine Rettung. 301-Redirect auf die nächstbeste Seite. Auf Wiedersehen. Es tut kurz weh und dann ist es besser. Wie beim Zahnarzt. Nur billiger.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Schritt 5: Umsetzen — Und zwar jetzt, nicht nächstes Quartal
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Die Audit-Ergebnisse verrotten schneller als ein offener Joghurt im Sommer. Plane die Umsetzung sofort. Zuerst die Quick Wins (Feintuning-Seiten), dann die Überarbeitungen, zuletzt die Zusammenführungen. Löschen kannst du zwischendurch — das geht schnell und fühlt sich befreiend an.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Woche 1–2: Alle Feintuning-Seiten optimieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Woche 3–6: Überarbeitungen durchführen (2–3 Seiten pro Woche)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Woche 7–8: Zusammenführungen und Löschungen abschließen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                  <span>Woche 12: Ergebnisse prüfen — hat sich die KI-Zitierung verbessert?</span>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Die 5 Content-Todsünden                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Die 5 Content-Todsünden: Was KI-Systeme garantiert ignorieren
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Du kannst das beste Scoring-System der Welt haben — wenn dein Content diese Sünden begeht, hilft kein Audit. Nur ein Exorzismus.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. Die 500-Wörter-Einleitung vor der eigentlichen Antwort</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              „In der heutigen schnelllebigen digitalen Welt..." — wenn dein Artikel so anfängt, hat ChatGPT bereits aufgehört zu lesen. Das ist der Content-Equivalent von jemandem, der 10 Minuten braucht, um zu erklären, warum er gleich etwas Wichtiges sagen wird. <strong className="text-black">KI extrahiert die ersten 2–3 Sätze. Wenn dort keine Antwort steht, existiert dein Artikel nicht.</strong>
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. „Laut Experten" ohne zu sagen, welche Experten</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welche Experten? Wo? Wann? „Studien zeigen" — welche Studien? Das ist, als würdest du in einer Prüfung schreiben „Irgendein schlauer Typ hat mal gesagt...". <strong className="text-black">Keine Quelle = keine Glaubwürdigkeit = keine Zitierung.</strong> KI-Systeme bevorzugen verifizierbare Aussagen. „Laut Gartner (2024)" wird zitiert. „Laut Experten" wird ignoriert.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. Content von 2022 ohne Update — für immer eingefroren</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dein „Ultimativer Guide zu SEO 2022" ist jetzt so aktuell wie ein Reiseführer für die DDR. Perplexity und Google AI bevorzugen aktuelle Quellen. ChatGPT gewichtet in neueren Trainingsläufen aktuellere Inhalte höher. <strong className="text-black">Ein Artikel ohne sichtbares Update-Datum ist für KI-Systeme verdächtig.</strong> Entweder aktualisieren oder begraben.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Drei Artikel zum gleichen Thema, die sich gegenseitig kannibalisieren</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Du hast „Was ist SEO?", „SEO erklärt" und „SEO für Anfänger" — drei Artikel, die alle das Gleiche sagen, nur mit unterschiedlichen Überschriften. Das ist, als würdest du drei Bewerbungen für die gleiche Stelle schicken, jede mit einem anderen Foto. <strong className="text-black">Zusammenführen. Ein starker Artikel schlägt drei schwache. Immer.</strong>
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. 3.000 Wörter Fließtext ohne eine einzige Zwischenüberschrift</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Herzlichen Glückwunsch, du hast einen Roman geschrieben. Leider lesen KI-Systeme keine Romane. Sie parsen Inhalte anhand von Struktur — H2, H3, Listen, Tabellen. Ein 3.000-Wörter-Textblock ist für ein LLM wie ein Puzzle ohne Bild auf der Schachtel. <strong className="text-black">Theoretisch lösbar, praktisch ignoriert.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Praxisbeispiel                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Praxisbeispiel: So sieht ein KI-Audit-Ergebnis aus
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Nehmen wir eine typische B2B-Website mit 200 Seiten. Nach dem Audit sieht die Verteilung erfahrungsgemäß so aus — und ja, das ist deprimierend. Aber es ist ehrlich.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="text-4xl font-bold text-red-500 mb-2">~35 %</p>
            <p className="font-medium text-black mb-1">Löschen (0–4 Punkte)</p>
            <p className="text-sm text-gray-500">Thin Content, veraltete Blogposts, Duplikate. Tschüss.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="text-4xl font-bold text-orange-500 mb-2">~30 %</p>
            <p className="font-medium text-black mb-1">Zusammenführen (5–11 Punkte)</p>
            <p className="text-sm text-gray-500">Schwache Einzelartikel, die als Cluster stärker wären.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="text-4xl font-bold text-yellow-500 mb-2">~25 %</p>
            <p className="font-medium text-black mb-1">Überarbeiten (12–19 Punkte)</p>
            <p className="text-sm text-gray-500">Gute Basis, braucht Answer-First, Quellen und Schema.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <p className="text-4xl font-bold text-brand-accent mb-2">~10 %</p>
            <p className="font-medium text-black mb-1">KI-ready (20–24 Punkte)</p>
            <p className="text-sm text-gray-500">Glückwunsch. Diese Seiten dürfen bleiben, wie sie sind.</p>
          </div>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Die typische B2B-Website hat nach dem KI-Audit 65 % Ballast. Das klingt brutal. Ist es auch. Aber nach der Bereinigung hast du 35 % Content, der tatsächlich Wert generiert — statt 200 Seiten, die sich gegenseitig die Sichtbarkeit stehlen.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Quick-Win-Checkliste                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Quick-Win-Checkliste: Was du heute noch ändern kannst
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Für alle, die den vollständigen Audit-Prozess noch planen, aber trotzdem heute schon etwas tun wollen. Diese 8 Maßnahmen brauchen keine Analyse, nur Disziplin.
        </p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Aktualisierungsdatum auf alle Seiten:</strong> Zeige sichtbar, wann der Content zuletzt aktualisiert wurde. Dauert 5 Minuten. Bringt sofort Aktualitätssignale.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Top-10-Seiten: Ersten Absatz umschreiben.</strong> Die Antwort muss in den ersten 2–3 Sätzen stehen. Alles davor ist Zeitverschwendung — für den Leser und für die KI.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">FAQ-Sektion zu jeder wichtigen Seite hinzufügen.</strong> 5–7 echte Nutzerfragen mit präzisen Antworten. FAQPage-Schema nicht vergessen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Article-Schema-Markup implementieren</strong> — mit Autor, Datum, Publisher. Gibt KI-Systemen die Metadaten, die sie brauchen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">robots.txt prüfen:</strong> GPTBot, ClaudeBot, PerplexityBot erlaubt? Wenn nicht, wunderst du dich zu Recht, warum KI dich nicht kennt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">3 Quellenangaben pro Artikel ergänzen.</strong> Echte Quellen, echte Studien, echte Zahlen. Nicht „Studien zeigen". Welche Studien?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Offensichtliche Duplikate zusammenführen.</strong> Wenn du zwei Artikel zum gleichen Thema hast, mach einen draus. Heute. Nicht nächste Woche.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">ChatGPT- und Perplexity-Test:</strong> Frag beide nach deinem Kernthema. Wirst du erwähnt? Wird ein Konkurrent erwähnt? Wenn ja, lies seinen Content und verstehe, warum.</span>
            </li>
          </ul>
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
      {/*  Weiterführende Guides                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Weiterführende Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="/wissen/ai-content-strategie"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              AI Content Strategie
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wie du neuen Content erstellst, den KI-Systeme zitieren. Der nächste Schritt nach dem Audit.
            </p>
          </a>

          <a
            href="/wissen/ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit: Der komplette Guide
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Das große Bild: Was KI-Sichtbarkeit bedeutet und wie alle Teile zusammenpassen.
            </p>
          </a>

          <a
            href="/wissen/eeat-ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              E-E-A-T für KI-Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Warum Erfahrung, Expertise und Vertrauenswürdigkeit für KI-Zitierungen entscheidend sind.
            </p>
          </a>

          <a
            href="/wissen/ki-sichtbarkeit-messen"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit messen
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wie du trackst, ob dein Audit-Ergebnis tatsächlich zu mehr KI-Zitierungen führt.
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
            Keine Lust, 500 Seiten selbst zu bewerten?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Wir machen den KI-Content-Audit für dich. Scoring, Priorisierung, Aktionsplan — in 5 Werktagen statt 5 Wochen. Brutal ehrlich. Garantiert.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlosen KI-Content-Audit anfragen" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

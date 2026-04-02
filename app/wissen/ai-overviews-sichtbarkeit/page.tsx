import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was sind Google AI Overviews?',
    a: 'Google AI Overviews sind KI-generierte Zusammenfassungen, die Google direkt über den organischen Suchergebnissen anzeigt. Sie beantworten die Suchanfrage des Nutzers sofort, ohne dass er eine Website besuchen muss. Google synthetisiert dafür Informationen aus mehreren Quellen und nennt diese als Referenzen.',
  },
  {
    q: 'Wie werde ich in Google AI Overviews sichtbar?',
    a: 'Du brauchst eine Kombination aus drei Faktoren: strukturierte Daten (Schema.org Markup), starke E-E-A-T-Signale (Erfahrung, Expertise, Autorität, Vertrauen) und eine Answer-First Content-Struktur, die Fragen direkt und präzise beantwortet. Seiten, die bereits in den Top-10 ranken und Featured Snippets halten, haben die höchste Wahrscheinlichkeit, als AI Overview Quelle zitiert zu werden.',
  },
  {
    q: 'Verliere ich Traffic durch AI Overviews?',
    a: 'Ja, wenn du nicht als Quelle zitiert wirst. Studien zeigen einen CTR-Rückgang von 30-40% bei informationalen Suchanfragen, die ein AI Overview auslösen. Wenn du jedoch als Quelle in der AI Overview erscheinst, kann dein Traffic sogar steigen, weil die Zitationsposition prominenter ist als ein klassisches Ranking auf Position 3-10.',
  },
  {
    q: 'Sind AI Overviews in Deutschland bereits aktiv?',
    a: 'Google hat AI Overviews 2025 schrittweise im DACH-Raum ausgerollt. Sie erscheinen bei informationalen und teilweise bei transaktionalen Suchanfragen auf Deutsch. Die Abdeckung wächst kontinuierlich. Für Unternehmen im deutschen Markt ist die Optimierung jetzt der richtige Zeitpunkt, bevor der Wettbewerb aufholt.',
  },
  {
    q: 'Welche Inhalte bevorzugt Google für AI Overviews?',
    a: 'Google bevorzugt Inhalte, die klar strukturiert, faktisch korrekt und aus autoritativen Quellen stammen. Besonders gut performen: FAQ-Seiten mit Schema Markup, How-To-Anleitungen mit Schritt-für-Schritt-Struktur, Vergleichstabellen, Definitionen im ersten Absatz und regelmäßig aktualisierte Inhalte mit Datumsangaben.',
  },
  {
    q: 'Was ist der Unterschied zwischen AI Overviews und Featured Snippets?',
    a: 'Featured Snippets zeigen einen Ausschnitt von einer einzigen Quelle. AI Overviews synthetisieren Informationen aus mehreren Quellen zu einer neuen, zusammenhängenden Antwort. AI Overviews sind länger, komplexer und zitieren typischerweise 3-7 Quellen. Die Optimierung überschneidet sich teilweise, aber AI Overviews erfordern zusätzlich starke E-E-A-T-Signale und semantische Tiefe.',
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
  headline: 'Sichtbarkeit in Google AI Overviews: 7 Strategien gegen Zero-Click-Verluste',
  description:
    'Wie du in Google AI Overviews als Quelle zitiert wirst: 7 Strategien gegen Zero-Click-Verluste, E-E-A-T-Signale, Schema Markup und Content-Struktur.',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ai-overviews-sichtbarkeit',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'AI Overviews Sichtbarkeit' },
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

export default function AIOverviewsSichtbarkeitPage() {
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
              <li className="text-black font-medium">AI Overviews</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            Sichtbarkeit in Google AI Overviews: So wirst du als Quelle zitiert
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Google zeigt die Antwort direkt an - und du verlierst den Besucher. Bis zu 40% weniger Klicks bei informationalen Suchanfragen. Hier erfährst du, wie du als Quelle in AI Overviews erscheinst, statt unsichtbar zu bleiben.
          </p>
      </section>

      {/* ============================================================ */}
      {/*  TLDR                                                        */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
                  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">AI Overviews</strong> sind KI-generierte Antworten direkt in der Google-Suche. Sie ersetzen den Klick auf deine Website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">30-40% CTR-Verlust</strong> bei informationalen Suchanfragen, die ein AI Overview auslösen. Dein Content wird zusammengefasst, aber du bekommst keinen Klick.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">7 konkrete Strategien</strong> bringen dich als Quelle in AI Overviews: Schema Markup, E-E-A-T, Answer-First Content, Freshness und technische Exzellenz.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">Wer jetzt optimiert,</strong> sichert sich die Zitationsplätze, bevor der Wettbewerb aufwacht. Die Quellenauswahl verfestigt sich mit jeder Iteration.</span>
              </li>
            </ul>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Was sind Google AI Overviews?                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Was sind Google AI Overviews?
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Google AI Overviews sind KI-generierte Zusammenfassungen, die <strong className="text-black">direkt über den organischen Suchergebnissen</strong> erscheinen. Google nutzt Gemini, um Informationen aus mehreren Webseiten zu synthetisieren und dem Nutzer eine sofortige Antwort zu liefern - ohne Klick.
            </p>
            <p>
              Google nennt die verwendeten Quellen als Referenzlinks innerhalb der AI Overview. Aber: <strong className="text-black">Nur 3-7 Quellen werden zitiert.</strong> Der Rest geht leer aus. Dein Ziel ist, eine dieser Quellen zu sein.
            </p>
            <p>
              In Deutschland hat Google AI Overviews 2025 schrittweise ausgerollt. Sie erscheinen bei informationalen Suchanfragen auf Deutsch und expandieren kontinuierlich in weitere Suchanfrage-Typen. Für den DACH-Markt ist die Optimierung jetzt der entscheidende Zeitpunkt.
            </p>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Das Problem: Zero-Click-Suche                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Das Problem: Zero-Click-Suche frisst deinen Traffic
          </h2>

          <StatBox text="30-40% CTR-Rückgang bei informationalen Suchanfragen mit AI Overview (Seer Interactive, 2025)." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">Google zeigt die Antwort direkt an. Der Nutzer klickt nicht mehr.</strong> Dein Content wird zusammengefasst, dein Wissen extrahiert, deine Expertise zitiert - aber der Traffic bleibt bei Google.
            </p>
            <p>
              Du investierst Tausende in Content-Marketing, aber die KI bedient sich an deinem Wissen, ohne dir einen Klick zu geben. Die Ironie: Je besser dein Content, desto wahrscheinlicher wird er von der AI Overview zusammengefasst. Und je besser die Zusammenfassung, desto weniger Grund hat der Nutzer, deine Seite zu besuchen.
            </p>
          </div>

          <StatBox text="Gartner: Über 50% des organischen Traffics wandert bis 2028 zu KI-gestützter Suche ab." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Das betrifft nicht nur informationalen Content. Google testet AI Overviews zunehmend bei kommerziellen und transaktionalen Suchanfragen. Produktvergleiche, Dienstleister-Empfehlungen, How-To-Anleitungen - alles wird von der KI zusammengefasst.
            </p>
            <p>
              <strong className="text-black">Dein Wettbewerber taucht in AI Overviews auf. Du nicht.</strong> Er bekommt die Zitation, den Vertrauensbonus, den verbleibenden Klick. Du stehst auf Position 4 unter einer AI Overview, die niemand überschrollt.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-black mb-4">Was das konkret bedeutet:</h3>
            <ul className="space-y-3 text-lg text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-1 shrink-0">&bull;</span>
                <span>Dein Blog-Artikel auf Position 1 verliert 40% seiner Klicks an die AI Overview</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-1 shrink-0">&bull;</span>
                <span>Deine Dienstleistungsseite wird nicht als Quelle zitiert, obwohl du Marktführer bist</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-1 shrink-0">&bull;</span>
                <span>Dein Wettbewerber mit schlechterem Content aber besserem Schema Markup wird bevorzugt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-1 shrink-0">&bull;</span>
                <span>Deine Lead-Generierung über organischen Traffic sinkt Monat für Monat</span>
              </li>
            </ul>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Wie Google AI Overviews Quellen auswählen                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Wie Google AI Overviews Quellen auswählen
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Google hat kein offizielles Ranking-System für AI Overview Quellen veröffentlicht. Aber aus Analysen tausender AI Overviews lassen sich klare Muster ableiten. Drei Faktoren dominieren die Quellenauswahl:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">1</div>
              <h3 className="text-xl font-semibold text-black mb-3">E-E-A-T Signale</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Nachweisbare Autorenexpertise</li>
                <li>Vertrauenswürdige Domain (Trust)</li>
                <li>Zitationen und Backlinks von Autoritäten</li>
                <li>Echte Erfahrungswerte im Content</li>
                <li>Konsistente Präsenz über Plattformen</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">2</div>
              <h3 className="text-xl font-semibold text-black mb-3">Strukturierte Daten</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Schema.org Markup (FAQ, HowTo, Article)</li>
                <li>Klare Heading-Hierarchie (H1-H4)</li>
                <li>Definitionsabsätze nach jeder H2</li>
                <li>Tabellen und Listen für Vergleiche</li>
                <li>Breadcrumb und Navigation Markup</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">3</div>
              <h3 className="text-xl font-semibold text-black mb-3">Content Freshness</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Regelmäßige Aktualisierung mit Datum</li>
                <li>Aktuelle Statistiken und Daten</li>
                <li>Verweise auf aktuelle Entwicklungen</li>
                <li>dateModified im Article Schema</li>
                <li>Keine veralteten Informationen</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-10">
            <p>
              <strong className="text-black">Entscheidend:</strong> 81% der in AI Overviews zitierten Quellen stammen aus den Top-10 der organischen Suchergebnisse (Authoritas, 2025). Aber nicht jede Top-10-Seite wird zitiert. Der Unterschied liegt in der Extrahierbarkeit der Information - wie leicht kann Google deine Antwort identifizieren und in die Zusammenfassung einbauen?
            </p>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  7 Strategien für AI Overview Sichtbarkeit                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            7 Strategien für AI Overview Sichtbarkeit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Diese Strategien basieren auf der Analyse tausender AI Overviews und den Gemeinsamkeiten der zitierten Quellen.
          </p>

          <ol className="space-y-10">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                1. Schema.org Markup implementieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Strukturierte Daten sind das Fundament. Google nutzt Schema Markup, um Inhalte zu klassifizieren und für AI Overviews zu extrahieren. Ohne Markup bist du eine unstrukturierte Textmasse.
              </p>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-sm font-semibold text-black mb-3">Essentielles Markup:</p>
                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  <li><strong className="text-black">FAQPage</strong> - Für Frage-Antwort-Sektionen. Höchste Korrelation mit AI Overview Zitationen.</li>
                  <li><strong className="text-black">HowTo</strong> - Für Schritt-für-Schritt-Anleitungen. Google extrahiert einzelne Schritte.</li>
                  <li><strong className="text-black">Article + Author</strong> - Verknüpft Content mit einer verifizierbaren Person (E-E-A-T).</li>
                  <li><strong className="text-black">Product + Review</strong> - Für kommerzielle Seiten. Bewertungen und Preise in AI Overviews.</li>
                  <li><strong className="text-black">LocalBusiness</strong> - Für lokale Unternehmen in Hamburg und DACH.</li>
                </ul>
              </div>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                2. E-E-A-T Signale systematisch aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Google bevorzugt Quellen mit nachweisbarer Expertise. Das bedeutet: Autoren mit Klarnamen, verlinkten Profilen und nachweisbarer Erfahrung im Thema. Eine anonyme Unternehmensseite ohne Autorenangabe verliert gegen einen Fachartikel mit benanntem Experten. Baue Autorenprofile mit Schema-Markup (Person), verlinke zu LinkedIn und Fachpublikationen, und zeige echte Erfahrungswerte statt generischer Aussagen.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                3. Answer-First Content-Struktur verwenden
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Google extrahiert die Antwort aus den ersten 1-2 Sätzen nach einer Heading. Wenn deine Antwort erst nach drei Absätzen Einleitung kommt, wird sie nicht gefunden.
              </p>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-sm font-semibold text-black mb-3">Das Muster:</p>
                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  <li><strong className="text-black">H2:</strong> Die Frage oder das Thema als Heading</li>
                  <li><strong className="text-black">Absatz 1:</strong> Direkte, präzise Antwort in 1-2 Sätzen</li>
                  <li><strong className="text-black">Absatz 2-3:</strong> Kontext, Begründung, Daten</li>
                  <li><strong className="text-black">Absatz 4+:</strong> Tiefe, Beispiele, Nuancen</li>
                </ul>
              </div>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                4. Featured Snippets als Sprungbrett nutzen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Seiten, die bereits ein Featured Snippet halten, haben eine <strong className="text-black">signifikant höhere Wahrscheinlichkeit</strong>, als AI Overview Quelle zitiert zu werden. Die gleichen Signale, die ein Featured Snippet auslösen - klare Struktur, direkte Antwort, Listen und Tabellen - helfen auch bei AI Overviews. Optimiere gezielt für Featured Snippets bei deinen wichtigsten Suchanfragen.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                5. Content Freshness priorisieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI Overviews bevorzugen aktuelle Inhalte. Ein Artikel von 2022 ohne Updates verliert gegen einen von 2026. Setze <strong className="text-black">dateModified</strong> im Article Schema bei jeder Aktualisierung. Aktualisiere Statistiken, Jahreszahlen und Referenzen mindestens quartalsweise. Google erkennt oberflächliche Datumsänderungen ohne inhaltliche Updates - nur echte Aktualisierungen zählen.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                6. Semantische Cluster statt Einzelseiten
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Google bewertet nicht nur die einzelne Seite, sondern deine thematische Autorität insgesamt. Eine Pillar-Seite zu "AI SEO" mit verlinkten Cluster-Seiten zu ChatGPT, Perplexity und AI Overviews signalisiert <strong className="text-black">semantische Tiefe</strong>. Du wirst als Autorität zum Gesamtthema erkannt, nicht als einzelne Seite mit einer zufälligen Antwort. Internes Linking zwischen den Cluster-Seiten verstärkt diesen Effekt.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                7. Technische Exzellenz sicherstellen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Ohne technische Grundlage ist alles andere nutzlos. Google muss deine Seite schnell crawlen, rendern und die Inhalte extrahieren können.
              </p>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-sm font-semibold text-black mb-3">Technische Checkliste:</p>
                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  <li><strong className="text-black">Core Web Vitals:</strong> LCP unter 2,5s, CLS unter 0,1, INP unter 200ms</li>
                  <li><strong className="text-black">Server-Side Rendering:</strong> Inhalte müssen im HTML stehen, nicht nur per JavaScript nachgeladen werden</li>
                  <li><strong className="text-black">robots.txt:</strong> Googlebot und GoogleOther nicht blockieren</li>
                  <li><strong className="text-black">HTTPS:</strong> Pflicht. HTTP-Seiten werden nicht als AI Overview Quelle zitiert</li>
                  <li><strong className="text-black">Mobile-First:</strong> Responsive Design und mobile Crawlbarkeit</li>
                </ul>
              </div>
            </li>
          </ol>
      </section>

      {/* ============================================================ */}
      {/*  AI Overviews vs. klassische Suche                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            AI Overviews vs. klassische Suche
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Die Spielregeln haben sich grundlegend verändert. Hier die wichtigsten Unterschiede:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Klassische Suche</th>
                  <th className="py-3 text-sm font-semibold text-black">AI Overviews</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Darstellung</td>
                  <td className="py-3 pr-4">10 blaue Links mit Snippets</td>
                  <td className="py-3">KI-generierte Zusammenfassung mit 3-7 Quellen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Nutzerverhalten</td>
                  <td className="py-3 pr-4">Klick auf Suchergebnis</td>
                  <td className="py-3">Antwort direkt lesen, selten Klick</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">CTR für Position 1</td>
                  <td className="py-3 pr-4">~27% durchschnittlich</td>
                  <td className="py-3">~16% wenn AI Overview vorhanden</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Quellenselektion</td>
                  <td className="py-3 pr-4">Ranking-Algorithmus (200+ Faktoren)</td>
                  <td className="py-3">Gemini-Synthese aus Top-Quellen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Optimierungsfokus</td>
                  <td className="py-3 pr-4">Keywords, Backlinks, Technik</td>
                  <td className="py-3">E-E-A-T, Schema, Answer-First, Freshness</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Wettbewerb</td>
                  <td className="py-3 pr-4">10 Plätze auf Seite 1</td>
                  <td className="py-3">3-7 Zitationsplätze pro AI Overview</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Content-Anforderung</td>
                  <td className="py-3 pr-4">Keyword-optimiert, umfassend</td>
                  <td className="py-3">Extrahierbar, faktisch, strukturiert</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            <strong className="text-black">Der größte Denkfehler:</strong> "Ich ranke auf Platz 1, also bin ich auch in der AI Overview." Stimmt nicht. Google wählt für AI Overviews nach anderen Kriterien aus als für organische Rankings. Eine Seite auf Position 3 mit perfektem Schema Markup und Answer-First Struktur kann die Position-1-Seite ohne Markup als AI Overview Quelle verdrängen.
          </p>
      </section>

      {/* ============================================================ */}
      {/*  Typische Fehler                                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Typische Fehler bei der AI Overview Optimierung
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Content ohne Struktur</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fließtext ohne Headings, Listen oder Tabellen. Google kann keine Antwort extrahieren, wenn alles ein einziger Textblock ist. Jede H2 braucht eine direkte Antwort im ersten Absatz.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Schema Markup vergessen</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Du hast großartigen Content, aber keine strukturierten Daten. Google sieht rohen HTML-Text statt klassifizierter Informationen. FAQ-Markup, Article-Schema und Breadcrumbs sind Pflicht.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Veraltete Inhalte</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Artikel von 2023 mit Statistiken von 2022. AI Overviews priorisieren frische Inhalte. Wenn dein Wettbewerber den gleichen Inhalt mit aktuellen Zahlen hat, wird er zitiert, nicht du.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Anonymer Content ohne Autorenangabe</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                "Von der Redaktion" oder gar keine Autorenangabe. Google bewertet E-E-A-T pro Seite. Eine verifizierbare Person mit Expertise im Thema schlägt anonymen Unternehmens-Content. Immer.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">KI-Bots in robots.txt blockieren</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Manche Unternehmen blockieren GoogleOther oder Google-Extended in der robots.txt, um KI-Training zu verhindern. Das Ergebnis: Du wirst auch nicht als AI Overview Quelle berücksichtigt. Du schneidest dir selbst den Zugang ab.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Nur auf ein Keyword optimieren</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI Overviews werden nicht durch Keyword-Stuffing ausgelöst. Sie erscheinen bei semantischen Anfragen. Wenn du nur für "Steuerberater Hamburg" optimierst, aber nicht für "Was kostet ein Steuerberater in Hamburg?" oder "Steuerberater für Freiberufler", verpasst du die AI Overview Trigger.
              </p>
            </div>
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
                <strong className="text-black">Gartner (2024):</strong> "Predicts 2025: Search and AI" - Prognose: Über 50% des organischen Traffics wandert bis 2028 zu KI-gestützter Suche ab.
              </li>
              <li>
                <strong className="text-black">Seer Interactive (2025):</strong> "Impact of AI Overviews on Organic CTR" - Analyse des CTR-Rückgangs bei Suchanfragen mit AI Overviews.
              </li>
              <li>
                <strong className="text-black">Authoritas (2025):</strong> "AI Overviews Source Analysis" - 81% der AI Overview Quellen stammen aus den organischen Top-10.
              </li>
              <li>
                <strong className="text-black">Google Search Central (2025):</strong> "How AI Overviews work in Google Search" - Offizielle Dokumentation zur Funktionsweise von AI Overviews.
              </li>
              <li>
                <strong className="text-black">Princeton University (2024):</strong> "GEO: Generative Engine Optimization" - Studie zur Optimierung von Inhalten für KI-Suchmaschinen.
              </li>
              <li>
                <strong className="text-black">Search Engine Land (2025):</strong> "AI Overviews in Europe: What marketers need to know" - Rollout-Analyse für den europäischen Markt.
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
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="/wissen/ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                KI-Sichtbarkeit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet, drei Säulen und 5 strategische Schritte.
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

            <a
              href="/wissen/sichtbarkeit-in-perplexity"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Sichtbarkeit in Perplexity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Der schnellste Kanal für KI-Sichtbarkeit. Taktiken und Messung.
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
              Erscheinst du in Google AI Overviews?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Finde heraus, ob dein Unternehmen als Quelle zitiert wird - oder ob dein Wettbewerber den Platz einnimmt. Kostenlose Kurzanalyse deiner AI Overview Sichtbarkeit.
            </p>
            <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" />
          </div>
      </section>

      <Footer />
    </div>
  );
}

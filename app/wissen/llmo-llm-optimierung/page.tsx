'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was ist LLMO genau?',
    a: 'LLMO steht für Large Language Model Optimization. Es beschreibt alle Maßnahmen, die dazu führen, dass KI-Systeme wie ChatGPT, Claude, Gemini und Perplexity dein Unternehmen als relevante Quelle erkennen und in ihren Antworten empfehlen. LLMO ist der Überbegriff für Strategien wie GEO (Generative Engine Optimization) und AEO (Answer Engine Optimization).',
  },
  {
    q: 'Ist LLMO das gleiche wie SEO?',
    a: 'Nein. SEO optimiert für Suchmaschinen-Rankings und Klicks auf blaue Links. LLMO optimiert dafür, dass Large Language Models dich als vertrauenswürdige Quelle zitieren und empfehlen. Es gibt Überschneidungen (z.B. strukturierte Daten, guter Content), aber die Mechanismen, Metriken und Taktiken unterscheiden sich grundlegend.',
  },
  {
    q: 'Wie unterscheiden sich LLMO, GEO und AEO?',
    a: 'LLMO ist der Überbegriff für alle Optimierungen, die auf Large Language Models abzielen. GEO (Generative Engine Optimization) fokussiert sich auf generative Suchmaschinen wie Google AI Overviews und Perplexity. AEO (Answer Engine Optimization) optimiert für Antwort-basierte Systeme wie Featured Snippets und Voice Assistants. Alle drei Disziplinen überschneiden sich stark und arbeiten auf das gleiche Ziel hin: KI-Sichtbarkeit.',
  },
  {
    q: 'Wie lange dauert es, bis LLMO Ergebnisse zeigt?',
    a: 'Bei Retrieval-basierten Systemen wie Perplexity und Google AI Overviews siehst du Veränderungen oft nach 4-8 Wochen. Bei Systemen, die primär auf Trainingsdaten basieren (ChatGPT, Claude), dauert es 3-6 Monate, da Optimierungen erst mit dem nächsten Trainingsupdate einfließen. Der Compound-Effekt belohnt frühe Investition: je länger du als Quelle etabliert bist, desto stabiler deine Position.',
  },
  {
    q: 'Kann ich LLMO selbst machen oder brauche ich eine Agentur?',
    a: 'Die Grundlagen kannst du selbst umsetzen: llms.txt einrichten, Schema.org Markup hinzufügen, Content strukturieren. Für eine systematische LLMO-Strategie mit Brand Authority Aufbau, Source Diversification und kontinuierlichem Monitoring ist spezialisierte Unterstützung sinnvoll. Entscheidend ist, dass jemand im Team das Thema verantwortet.',
  },
  {
    q: 'Welche Tools gibt es für LLMO?',
    a: 'Ahrefs Brand Radar und Semrush AI Visibility messen deine Präsenz in KI-Antworten. Manuelles Prompt-Testing über ChatGPT, Claude und Perplexity ist kostenlos und liefert qualitative Insights. Server-Log-Analysen zeigen, welche KI-Crawler deine Seiten besuchen. GA4 trackt Traffic von KI-Plattformen über Referral-Quellen.',
  },
  {
    q: 'Ist LLMO nur für große Unternehmen relevant?',
    a: 'Nein. Gerade für kleine und mittlere Unternehmen bietet LLMO eine Chance. LLMs empfehlen 2-3 Anbieter pro Kategorie, nicht 10. Wer als Spezialist in einer Nische positioniert ist, hat bessere Chancen auf eine Empfehlung als große Generalisten. Lokale Unternehmen, Dienstleister und Berater profitieren besonders.',
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
  headline: 'LLMO – LLM Optimierung: So wirst du von KI-Systemen empfohlen',
  description:
    'Der komplette Guide zu LLMO (Large Language Model Optimization): Definition, die 5 Säulen, Abgrenzung zu SEO/GEO/AEO, Schritt-für-Schritt-Anleitung und Tools.',
  image: 'https://aiseo.hamburg/images/wissen/llmo-llm-optimierung.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/llmo-llm-optimierung',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'LLMO – LLM Optimierung' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Accent box component                                              */
/* ------------------------------------------------------------------ */

const AccentBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{text}</p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function LLMOPage() {
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
        <FadeIn>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
              <li>/</li>
              <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
              <li>/</li>
              <li className="text-black font-medium">LLMO – LLM Optimierung</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            LLMO – LLM Optimierung: So wirst du von KI-Systemen empfohlen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Deine SEO-Agentur optimiert für Google. Aber 40% deiner Zielgruppe fragt bereits ChatGPT, Claude oder Perplexity. LLMO ist die Strategie, damit diese Systeme dich empfehlen – nicht deine Konkurrenz.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">LLMO</strong> = Large Language Model Optimization. Dein Unternehmen so aufstellen, dass LLMs es verstehen, einordnen und empfehlen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">LLMs empfehlen 2-3 Anbieter</strong> pro Kategorie. SEO-Rankings spielen dabei keine direkte Rolle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">5 Säulen</strong> entscheiden: Brand Authority, Content Citability, Technical Accessibility, Source Diversity, Freshness & Consistency.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">LLMO ist der Überbegriff</strong> für GEO, AEO und alle KI-Sichtbarkeits-Strategien. Wer LLMO versteht, versteht das Gesamtbild.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">5.</span>
                <span><strong className="text-black">First-Mover-Vorteil:</strong> LLMs bevorzugen etablierte Quellen. Wer jetzt startet, baut eine Position auf, die Nachzügler nur schwer einholen.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Was ist LLMO? Definition und Abgrenzung                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Was ist LLMO? Definition und Abgrenzung
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">LLMO steht für Large Language Model Optimization.</strong> Es beschreibt die systematische Optimierung von Inhalten, Markenauftritt und technischer Infrastruktur, damit Large Language Models (ChatGPT, Claude, Gemini, Perplexity) ein Unternehmen als relevante Quelle erkennen und in ihren Antworten empfehlen.
            </p>
            <p>
              Der entscheidende Unterschied zu SEO: Du optimierst nicht für ein Ranking auf einer Suchergebnisseite. Du optimierst dafür, dass ein KI-System dich <strong className="text-black">als vertrauenswürdige Quelle zitiert</strong> – in einer Antwort, die der Nutzer als Empfehlung wahrnimmt.
            </p>
            <p>
              LLMO ist dabei der <strong className="text-black">Überbegriff</strong> für alle KI-Sichtbarkeits-Strategien. GEO (Generative Engine Optimization) fokussiert sich auf generative Suchmaschinen. AEO (Answer Engine Optimization) auf Antwort-basierte Systeme. LLMO umfasst beides – plus die Optimierung für das parametrische Wissen der Modelle selbst, also das, was ein LLM während des Trainings gelernt hat.
            </p>
          </div>

          <AccentBox text="LLMO = Du optimierst nicht für einen Algorithmus, sondern dafür, dass ein KI-Modell dein Unternehmen versteht, einordnet und weiterempfiehlt." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Warum ein eigener Begriff? Weil LLMs grundlegend anders funktionieren als Suchmaschinen. Google indexiert Seiten und rankt sie nach Relevanz. Ein LLM <strong className="text-black">synthetisiert Wissen</strong> aus Milliarden von Textfragmenten und generiert daraus eine Antwort. Die Optimierungslogik ist eine andere – und sie erfordert ein eigenes Framework.
            </p>
            <p>
              Begriffe wie „AI SEO", „LLM SEO" oder „KI-Sichtbarkeit" beschreiben verwandte Konzepte. LLMO ist der präziseste technische Term, weil er den Optimierungsgegenstand benennt: das Large Language Model.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Das Problem: SEO allein reicht nicht mehr                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Das Problem: SEO allein reicht nicht mehr
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Du investierst in SEO, deine Rankings sind stabil – und trotzdem sinkt der organische Traffic. Das ist kein Bug. Das ist der Shift zu KI-gestützter Suche.
            </p>
          </div>

          <AccentBox text="Deine SEO-Agentur optimiert für ein System, das an Relevanz verliert. Google bleibt wichtig – aber es ist nicht mehr der einzige Kanal." />

          <div className="space-y-6 mt-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Deine Rankings bringen weniger Traffic</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Google AI Overviews beantworten Fragen direkt in der Suche. Zero-Click-Searches steigen. Selbst Platz 1 generiert weniger Klicks als vor zwei Jahren. Laut Gartner verlieren Marken bis 2028 über 50% ihres organischen Traffics an KI-gestützte Suche.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">LLMs empfehlen Konkurrenten, die du nie auf dem Radar hattest</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Frag ChatGPT nach dem besten Anbieter in deiner Kategorie. Die Ergebnisse werden dich überraschen. LLMs haben eine eigene Ranking-Logik. Dein SEO-Ranking bei Google ist kein Garant dafür, von ChatGPT empfohlen zu werden. Oft erscheinen Wettbewerber, die du nicht einmal als Konkurrenten wahrgenommen hast.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">40% deiner Zielgruppe fragt bereits KI</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Das sind nicht nur Tech-Enthusiasten. Einkäufer recherchieren Lieferanten über Perplexity. Freiberufler vergleichen Dienstleister in ChatGPT. Patienten fragen Claude nach dem besten Arzt. Wenn du in diesen Antworten nicht vorkommst, existierst du für eine wachsende Zielgruppe nicht.
              </p>
            </div>
          </div>

          <AccentBox text="LLMs empfehlen 2-3 Anbieter pro Kategorie – bist du dabei? Oder erfährt deine Zielgruppe von dir erst, wenn sie selbst googelt?" />
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Wie LLMs Empfehlungen generieren                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Wie LLMs Empfehlungen generieren
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Um LLMO zu verstehen, musst du verstehen, woher ein LLM sein Wissen bezieht. Es gibt drei Ebenen:
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">1. Training Data (parametrisches Wissen)</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Während des Trainings verarbeitet ein LLM Milliarden von Texten – Websites, Wikipedia, Fachpublikationen, Foren, Nachrichtenartikel. Daraus lernt es Muster, Zusammenhänge und Fakten. Dieses Wissen ist im Modell gespeichert und hat einen <strong className="text-black">festen Cutoff-Zeitpunkt</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Für LLMO bedeutet das: Wenn dein Unternehmen in den Trainingsdaten häufig, konsistent und in relevantem Kontext vorkommt, wird das Modell es als relevante Entität erkennen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">2. Retrieval (Echtzeit-Suche)</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Systeme wie Perplexity, Google AI Overviews und ChatGPT mit Web-Suche greifen in Echtzeit auf aktuelle Webinhalte zu. Sie durchsuchen das Internet (meist über Bing oder Google), lesen Seiten und synthetisieren die Ergebnisse zu einer Antwort.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Für LLMO bedeutet das: Deine Inhalte müssen crawlbar, strukturiert und so formatiert sein, dass ein LLM relevante Passagen extrahieren und als Quelle zitieren kann.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">3. Ranking-Logik (Auswahlkriterien)</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Ein LLM entscheidet anhand mehrerer Signale, welche Quellen es zitiert:
              </p>
              <ul className="space-y-2 text-lg text-gray-600 leading-relaxed">
                <li><strong className="text-black">Häufigkeit:</strong> Wie oft wird eine Marke in relevanten Kontexten erwähnt?</li>
                <li><strong className="text-black">Autorität:</strong> Stammen die Erwähnungen von vertrauenswürdigen Quellen (Presse, Fachportale, Wikipedia)?</li>
                <li><strong className="text-black">Konsistenz:</strong> Sind die Informationen über alle Quellen hinweg widerspruchsfrei?</li>
                <li><strong className="text-black">Aktualität:</strong> Sind die Informationen aktuell und frisch?</li>
                <li><strong className="text-black">Relevanz:</strong> Passt die Quelle zum Kontext der Nutzeranfrage?</li>
              </ul>
            </div>
          </div>

          <AccentBox text="Google indexiert Seiten. LLMs synthetisieren Wissen. Der Unterschied ist fundamental – und erfordert eine eigene Optimierungsstrategie." />
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  LLMO vs SEO vs GEO vs AEO                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            LLMO vs. SEO vs. GEO vs. AEO
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Vier Disziplinen, vier unterschiedliche Schwerpunkte – aber mit zunehmender Überschneidung. Hier ist die Abgrenzung:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">SEO</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">GEO</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">AEO</th>
                  <th className="py-3 text-sm font-semibold text-black">LLMO</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Ziel</td>
                  <td className="py-3 pr-4">Rankings in Suchmaschinen</td>
                  <td className="py-3 pr-4">Zitation in generativen Suchmaschinen</td>
                  <td className="py-3 pr-4">Antwort-Position (Featured Snippets, Voice)</td>
                  <td className="py-3">Empfehlung durch LLMs (alle Kanäle)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Kanal</td>
                  <td className="py-3 pr-4">Google, Bing</td>
                  <td className="py-3 pr-4">Google AI Overviews, Perplexity</td>
                  <td className="py-3 pr-4">Featured Snippets, Alexa, Siri</td>
                  <td className="py-3">ChatGPT, Claude, Gemini, Perplexity + alle generativen Systeme</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Metriken</td>
                  <td className="py-3 pr-4">Rankings, CTR, organischer Traffic</td>
                  <td className="py-3 pr-4">Zitationsrate, Referral-Traffic</td>
                  <td className="py-3 pr-4">Answer-Box-Präsenz, Voice-Share</td>
                  <td className="py-3">Brand Mentions in LLM-Antworten, Zitationsrate, KI-Referral-Traffic</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Taktiken</td>
                  <td className="py-3 pr-4">Keywords, Backlinks, technisches SEO</td>
                  <td className="py-3 pr-4">Strukturierte Daten, Citability, E-E-A-T</td>
                  <td className="py-3 pr-4">FAQ-Markup, präzise Antworten, Schema.org</td>
                  <td className="py-3">Brand Authority, Source Diversity, llms.txt, Content Citability, Freshness</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Zeithorizont</td>
                  <td className="py-3 pr-4">3-12 Monate</td>
                  <td className="py-3 pr-4">4-8 Wochen (Retrieval)</td>
                  <td className="py-3 pr-4">2-6 Wochen</td>
                  <td className="py-3">4 Wochen – 6 Monate (je nach System)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Optimierungsebene</td>
                  <td className="py-3 pr-4">Einzelne Seite / URL</td>
                  <td className="py-3 pr-4">Entität + Seite</td>
                  <td className="py-3 pr-4">Einzelne Antwort / Frage</td>
                  <td className="py-3">Gesamte Marke als Entität</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            <strong className="text-black">Die Realität:</strong> Die Grenzen verschwimmen. Google AI Overviews nutzt ein LLM. Perplexity ist gleichzeitig Suchmaschine und LLM. Eine gute LLMO-Strategie deckt automatisch große Teile von GEO und AEO ab. Deshalb empfehle ich, LLMO als übergreifendes Framework zu betrachten.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Die 5 Säulen der LLM Optimierung                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Die 5 Säulen der LLM Optimierung
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            LLMO funktioniert nicht über einen einzelnen Hebel. Es braucht ein Zusammenspiel aus fünf Bereichen. Fehlt einer, schwächst du das Gesamtergebnis.
          </p>

          <ol className="space-y-10">
            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  1. Brand Authority – Konsistente Erwähnungen über viele Quellen
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    LLMs lernen durch Mustererkennung. Wenn dein Unternehmen in vielen verschiedenen, vertrauenswürdigen Quellen im gleichen Kontext erwähnt wird, erkennt das Modell ein Muster: „Diese Marke ist relevant für dieses Thema."
                  </p>
                  <p>
                    <strong className="text-black">Was zählt:</strong> Erwähnungen in Fachpublikationen, Presseartikeln, Branchenverzeichnissen, Wikipedia, Podcasts, Gastbeiträgen. Je diverser die Quellen, desto stärker das Signal. Eine Erwähnung im Handelsblatt wiegt mehr als hundert Verzeichnis-Einträge.
                  </p>
                  <p>
                    <strong className="text-black">Praxis-Tipp:</strong> Stelle sicher, dass dein Unternehmensname, deine Spezialisierung und dein Standort überall konsistent verwendet werden. Inkonsistenzen (verschiedene Firmennamen, widersprüchliche Beschreibungen) verwirren LLMs.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  2. Content Citability – Inhalte, die LLMs zitieren können
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Ein LLM braucht klare, extrahierbare Informationen. Werbe-Sprech, vage Aussagen und aufgeblähte Texte werden ignoriert. Was zitiert wird, sind <strong className="text-black">präzise, faktenbasierte Aussagen</strong> in klar strukturierten Absätzen.
                  </p>
                  <p>
                    <strong className="text-black">Answer-First-Format:</strong> Beantworte die Frage im ersten Satz, dann erläutere. Nicht umgekehrt. LLMs extrahieren bevorzugt die ersten Sätze eines Absatzes.
                  </p>
                  <p>
                    <strong className="text-black">Praxis-Tipp:</strong> Schreibe jeden wichtigen Absatz so, als könnte er isoliert als KI-Antwort stehen. Vermeide Rückverweise wie „wie oben beschrieben" oder „siehe Abschnitt 3". Jeder Absatz muss für sich funktionieren.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  3. Technical Accessibility – KI-Crawlern den Zugang ermöglichen
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Wenn KI-Crawler deine Website nicht lesen können, existierst du für Retrieval-basierte Systeme nicht. Die technische Grundlage ist die Eintrittskarte.
                  </p>
                  <p>
                    <strong className="text-black">Essentiell:</strong> robots.txt für GPTBot, ClaudeBot, PerplexityBot, Googlebot öffnen. Eine <strong className="text-black">llms.txt</strong>-Datei im Root-Verzeichnis bereitstellen, die dem LLM eine maschinenlesbare Zusammenfassung deines Unternehmens gibt. Schema.org Markup (Organization, LocalBusiness, Product, FAQ, Article) für Entity-Erkennung.
                  </p>
                  <p>
                    <strong className="text-black">Praxis-Tipp:</strong> Prüfe deine Server-Logs auf Zugriffe von GPTBot, ClaudeBot und PerplexityBot. Wenn sie nicht kommen, blockierst du sie möglicherweise – oder deine Seite ist technisch nicht crawlbar.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  4. Source Diversity – Präsenz auf vielen Plattformen
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Ein LLM vertraut einer Quelle mehr, wenn sie von <strong className="text-black">mehreren unabhängigen Plattformen</strong> bestätigt wird. Deine eigene Website ist eine Quelle. Aber wenn Wikipedia, Fachportale, Presse, Bewertungsplattformen und Branchenverzeichnisse das gleiche über dich sagen, entsteht ein starkes Vertrauenssignal.
                  </p>
                  <p>
                    <strong className="text-black">Relevante Plattformen:</strong> Wikipedia (mit belegbaren Quellen), Google Business Profile, Branchenverzeichnisse (z.B. WLW, Yelp, ProvenExpert), Fachportale, Presse-Datenbanken, Podcast-Verzeichnisse, GitHub (für Tech-Unternehmen), akademische Publikationen.
                  </p>
                  <p>
                    <strong className="text-black">Praxis-Tipp:</strong> Erstelle eine Liste aller Plattformen, auf denen dein Unternehmen erwähnt wird. Dann identifiziere die Lücken. Welche relevanten Plattformen fehlen? Dort anzusetzen bringt den größten Hebel.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  5. Freshness & Consistency – Aktuelle, widerspruchsfreie Informationen
                </h3>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    LLMs bewerten Aktualität. Veraltete Informationen werden abgestraft – besonders bei Retrieval-basierten Systemen wie Perplexity, die das Live-Web durchsuchen. Gleichzeitig müssen deine Informationen <strong className="text-black">über alle Quellen hinweg konsistent</strong> sein.
                  </p>
                  <p>
                    <strong className="text-black">Was „Freshness" bedeutet:</strong> Regelmäßig aktualisierte Inhalte, aktuelle Datumsangaben, neue Daten und Statistiken, frische Case Studies. Nicht: jeden Tag einen neuen Blogpost veröffentlichen. Sondern: bestehende Inhalte aktuell halten.
                  </p>
                  <p>
                    <strong className="text-black">Was „Consistency" bedeutet:</strong> Gleiche Firmendaten (Name, Adresse, Telefon) auf allen Plattformen. Keine widersprüchlichen Aussagen über Leistungen, Preise oder Spezialisierungen. Wenn deine Website „SEO-Agentur" sagt und dein Google-Profil „Webdesign-Agentur", verwirrt das ein LLM.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  LLMO in der Praxis: Schritt-für-Schritt                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            LLMO in der Praxis: Schritt-für-Schritt
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Sechs konkrete Schritte, um LLMO systematisch umzusetzen. Beginne bei Schritt 1 – die Reihenfolge ist wichtig.
          </p>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Schritt 1: Ist-Analyse – Wie beschreiben LLMs dich heute?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Frag ChatGPT, Claude und Perplexity nach deinem Unternehmen, deiner Kategorie und deinen Wettbewerbern. Dokumentiere die Antworten. Wirst du erwähnt? Richtig beschrieben? Oder gar nicht genannt? Diese Baseline ist dein Ausgangspunkt.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Schritt 2: Entity-Profil schärfen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Definiere klar: Wer bist du? Was machst du? Für wen? Wo? Warum bist du die beste Wahl? Formuliere das als konsistenten Marken-Claim, der sich durch alle Kanäle zieht. LLMs empfehlen Spezialisten – „Full-Service-Agentur für alles" wird nicht zitiert.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Schritt 3: Technische Grundlage schaffen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Richte eine llms.txt-Datei ein. Öffne robots.txt für KI-Crawler. Implementiere Schema.org Markup (Organization, LocalBusiness, Product, FAQ, Article). Stelle sicher, dass deine wichtigsten Seiten schnell laden und sauber strukturiert sind. Details dazu in unserem{' '}
                <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline">Guide zur technischen KI-Sichtbarkeit</a>.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Schritt 4: Content für Citability optimieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Überarbeite deine wichtigsten Seiten nach dem Answer-First-Prinzip. Jeder Absatz sollte isoliert als KI-Antwort funktionieren. Nutze klare H2/H3-Strukturen, definiere Begriffe am Anfang, liefere Fakten statt Floskeln. Erstelle Inhalte, die echte Fragen deiner Zielgruppe beantworten.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Schritt 5: Source Diversity aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Identifiziere die wichtigsten Plattformen für deine Branche und stelle sicher, dass du dort präsent bist – mit konsistenten Informationen. Investiere in PR, Gastbeiträge, Branchenverzeichnisse und Fachportal-Einträge. Jede unabhängige Erwähnung stärkt dein Entity-Profil.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Schritt 6: Monitoring und Iteration
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Richte ein regelmäßiges LLM-Monitoring ein: monatliche Prompt-Tests, Server-Log-Analyse, Tracking von KI-Referral-Traffic in GA4. Dokumentiere Veränderungen und passe deine Strategie an. LLMO ist kein einmaliges Projekt, sondern ein fortlaufender Prozess.
              </p>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  LLMO-Tools und Messmethoden                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            LLMO-Tools und Messmethoden
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            LLMO-Messung ist noch jung. Es gibt keine perfekte Metrik. Aber diese Kombination liefert ein belastbares Bild:
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Ahrefs Brand Radar</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trackt, wie oft deine Marke in KI-Antworten erscheint. Zeigt Trends über Zeit und Vergleiche mit Wettbewerbern. Derzeit eines der besten Tools für quantitatives LLMO-Monitoring.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Manuelles Prompt-Testing</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kostenlos und unterschätzt. Stelle 20-30 relevante Fragen an ChatGPT, Claude und Perplexity. Dokumentiere, ob und wie du erwähnt wirst. Wiederhole das monatlich. Liefert die besten qualitativen Insights.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Server-Log-Analyse</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Analysiere, welche KI-Crawler deine Website besuchen. GPTBot, ClaudeBot, PerplexityBot hinterlassen eindeutige User-Agent-Signaturen. Wenn sie nicht kommen, hast du ein technisches Problem.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">GA4 Referral-Tracking</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Richte in Google Analytics 4 Segmente für KI-Referral-Traffic ein: chat.openai.com, perplexity.ai, copilot.microsoft.com, gemini.google.com. Tracke Volumen, Verweildauer und Conversions separat.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Semrush AI Visibility (Beta)</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Zeigt deine Sichtbarkeit in Google AI Overviews und anderen KI-Systemen. Noch in der Beta-Phase, aber ein vielversprechendes Tool für das übergreifende Monitoring.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Mehr Details zu Messstrategien findest du in unserem{' '}
            <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent hover:underline">Guide: KI-Sichtbarkeit messen</a>.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Typische LLMO-Fehler                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Typische LLMO-Fehler
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">1. KI-Crawler blockieren</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Viele Websites blockieren GPTBot und ClaudeBot in der robots.txt – oft unbewusst, durch restriktive Standard-Einstellungen. Wenn KI-Crawler dich nicht lesen können, wirst du von Retrieval-basierten Systemen nicht zitiert.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">2. Content ohne Zitierbarkeit</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Du investierst in Content, aber kein LLM kann ihn zitieren. Weil die Texte zu vage sind, keine konkreten Aussagen enthalten oder so verschachtelt geschrieben sind, dass ein LLM keine extrahierbaren Passagen findet. Answer-First-Format löst dieses Problem.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">3. Nur die eigene Website optimieren</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                LLMO ist keine On-Page-Disziplin. Deine Website ist eine Quelle von vielen. Wenn das LLM dich nur auf deiner eigenen Seite findet, fehlt die externe Bestätigung. Source Diversity ist der Hebel, den die meisten übersehen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">4. Inkonsistente Markeninformationen</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deine Website sagt „AI SEO Agentur Hamburg", dein LinkedIn-Profil „Digital Marketing Berater", dein Google Business Profile „Webentwicklung". LLMs können dich keiner klaren Kategorie zuordnen. Konsistenz ist nicht optional – sie ist die Grundlage für Entity-Erkennung.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">5. SEO-Taktiken auf LLMO übertragen</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Keyword-Stuffing, Link-Farming, dünne Seiten für jedes Long-Tail-Keyword – was bei SEO fragwürdig ist, schadet bei LLMO aktiv. LLMs bewerten Qualität, Autorität und Konsistenz. Quantität ohne Substanz wird ignoriert.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">6. Keine Messung implementieren</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ohne Monitoring weißt du nicht, ob deine LLMO-Maßnahmen wirken. Viele Unternehmen optimieren blind und wundern sich, warum sich nichts verändert. Ein einfaches monatliches Prompt-Testing kostet nichts und liefert sofort Erkenntnisse.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
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
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Quellen                                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Quellen
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-black">Gartner (2024):</strong> "Predicts 2025: Search and AI" – Prognose zum Rückgang organischen Traffics durch KI-gestützte Suche bis 2028.
              </li>
              <li>
                <strong className="text-black">Princeton University (2024):</strong> "GEO: Generative Engine Optimization" – Erste akademische Studie zur Optimierung von Inhalten für generative Suchmaschinen. Zeigt den Einfluss von Zitationen, Statistiken und Quellenangaben auf die Sichtbarkeit in KI-Antworten.
              </li>
              <li>
                <strong className="text-black">OpenAI (2023):</strong> "GPTBot Documentation" – Offizielle Dokumentation zum GPTBot-Crawler und robots.txt-Konfiguration für KI-Zugang.
              </li>
              <li>
                <strong className="text-black">Anthropic (2024):</strong> "ClaudeBot and AI Training" – Richtlinien für Website-Betreiber zum Umgang mit KI-Crawlern und Trainingsdaten.
              </li>
              <li>
                <strong className="text-black">Ahrefs (2025):</strong> "Brand Radar: Measuring AI Visibility" – Methodik zur Messung von Markenpräsenz in LLM-Antworten.
              </li>
              <li>
                <strong className="text-black">Search Engine Journal (2025):</strong> "LLMO: The Next Evolution of SEO" – Analyse der Verschiebung von klassischem SEO zu Large Language Model Optimization.
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Weiterführende Guides                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Weiterführende Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="/wissen/ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                KI-Sichtbarkeit
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet, warum sie entscheidend ist und wie du sie erreichst.
              </p>
            </a>

            <a
              href="/wissen/aeo-answer-engine-optimization"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                AEO – Answer Engine Optimization
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimierung für Antwort-basierte Systeme: Featured Snippets, Voice Search und KI-Antworten.
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
                robots.txt, llms.txt, Schema.org und alles, was KI-Crawler technisch brauchen.
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
                Tools, KPIs und Tracking-Methoden für dein LLMO-Monitoring.
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
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
              Wirst du von LLMs empfohlen?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Finde heraus, wie ChatGPT, Claude und Perplexity dein Unternehmen heute beschreiben – und was du tun kannst, um in den Top-Empfehlungen zu landen.
            </p>
            <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose LLMO-Kurzanalyse anfragen" />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}

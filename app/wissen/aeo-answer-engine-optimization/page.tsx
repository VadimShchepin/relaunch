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
    q: 'Was ist der Unterschied zwischen AEO und SEO?',
    a: 'SEO optimiert für Rankings in klassischen Suchmaschinen – du willst auf Platz 1 bei Google. AEO optimiert dafür, dass dein Content die direkte Antwort in KI-Systemen wird. SEO fokussiert auf Keywords und Backlinks, AEO auf Intent-Abdeckung, Zitierbarkeit und strukturierte Daten. Beide Disziplinen ergänzen sich, haben aber unterschiedliche Mechanismen und KPIs.',
  },
  {
    q: 'Welche Answer Engines sind 2026 relevant?',
    a: 'Die wichtigsten Answer Engines sind Google AI Overviews, ChatGPT (mit Browsing), Perplexity, Microsoft Copilot, Claude und Sprachassistenten wie Siri und Alexa. Google AI Overviews erreichen die größte Nutzerbasis, Perplexity liefert die schnellsten Ergebnisse für neue Inhalte, und ChatGPT hat die höchste Nutzerbindung bei komplexen Recherchen.',
  },
  {
    q: 'Wie lange dauert es, bis AEO-Maßnahmen wirken?',
    a: 'Bei Perplexity siehst du Ergebnisse oft nach 2-4 Wochen, weil Perplexity das Live-Web durchsucht. Google AI Overviews reagieren in 4-8 Wochen. ChatGPT und Claude brauchen länger, weil sie auf Trainingszyklen basieren – hier dauert es 3-6 Monate. Strukturierte Daten und Schema-Änderungen wirken am schnellsten.',
  },
  {
    q: 'Brauche ich AEO, wenn ich schon gutes SEO mache?',
    a: 'Ja. Gutes SEO ist eine Basis, aber keine Garantie für AEO-Sichtbarkeit. Eine Seite kann auf Platz 1 bei Google ranken und trotzdem von ChatGPT ignoriert werden – weil die Inhalte nicht im Answer-First-Format strukturiert sind oder die E-E-A-T-Signale für KI nicht ausreichen. AEO ergänzt dein SEO um eine zusätzliche Sichtbarkeitsebene.',
  },
  {
    q: 'Was kostet Answer Engine Optimization?',
    a: 'Das hängt vom Umfang ab. Ein AEO-Audit mit konkreten Handlungsempfehlungen ist der günstigste Einstieg. Eine vollständige AEO-Strategie inklusive Content-Optimierung, Schema-Implementierung und Monitoring läuft über mehrere Monate. Für eine erste Einschätzung biete ich eine kostenlose Kurzanalyse an.',
  },
  {
    q: 'Kann ich AEO selbst umsetzen oder brauche ich einen Spezialisten?',
    a: 'Die Grundlagen wie Answer-First-Content und FAQ-Schema kannst du selbst umsetzen. Für eine vollständige AEO-Strategie – inklusive semantischer Analyse, Topic-Cluster-Architektur und plattformspezifischer Optimierung – lohnt sich ein Spezialist. Besonders die Erfolgsmessung erfordert spezialisierte Tools und Erfahrung.',
  },
  {
    q: 'Funktioniert AEO auch für lokale Unternehmen in Hamburg?',
    a: 'Besonders gut sogar. Lokale Suchanfragen wie "bester Steuerberater Hamburg" werden zunehmend an KI gestellt. Mit lokalem Schema-Markup (LocalBusiness), konsistenten NAP-Daten und lokal relevantem Content kannst du in den KI-Antworten für deine Region dominant werden. Sprachassistenten wie Siri und Alexa nutzen genau diese Signale.',
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
  headline: 'AEO – Answer Engine Optimization: Der komplette Guide für 2026',
  description:
    'Was ist Answer Engine Optimization (AEO)? Definition, AEO vs SEO, die 5 Säulen der AEO-Strategie und Schritt-für-Schritt-Anleitung für 2026.',
  image: 'https://aiseo.hamburg/images/wissen/aeo-answer-engine-optimization.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/aeo-answer-engine-optimization',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'AEO – Answer Engine Optimization' },
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

const PillarCard: React.FC<{ num: number; title: string; children: React.ReactNode }> = ({
  num,
  title,
  children,
}) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6">
    <div className="text-2xl mb-3 font-bold text-brand-accent">{num}</div>
    <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
    {children}
  </div>
);

const EngineCard: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6">
    <h3 className="text-xl font-semibold text-black mb-3">{name}</h3>
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AEOAnswerEngineOptimizationPage() {
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
              <li className="text-black font-medium">AEO – Answer Engine Optimization</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            AEO – Answer Engine Optimization: Der komplette Guide für 2026
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            65% aller Suchen enden ohne Klick. Deine Kunden wollen Antworten, keine 10 blauen Links. Answer Engine Optimization sorgt dafür, dass dein Content die Antwort <em>ist</em> – in ChatGPT, Perplexity, Google AI Overviews und Sprachassistenten.
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
                <span><strong className="text-black">AEO</strong> = Optimierung für Systeme, die direkte Antworten liefern statt Links. Die Antwort sein, nicht das Suchergebnis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">Answer Engines</strong> sind ChatGPT, Perplexity, Google AI Overviews, Siri, Alexa – alles, was direkt antwortet statt zu verlinken.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">5 Säulen</strong> entscheiden: Answer-First Content, Strukturierte Daten, E-E-A-T, Semantische Vollständigkeit, Technische Zugänglichkeit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">AEO ersetzt SEO nicht</strong> – es ergänzt es. Aber wer nur SEO macht, verliert die wachsende KI-Zielgruppe komplett.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">5.</span>
                <span><strong className="text-black">Jetzt starten:</strong> Wer heute optimiert, baut einen Vorsprung auf, den Wettbewerber in 12 Monaten nicht mehr einholen.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Was ist Answer Engine Optimization (AEO)?                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Was ist Answer Engine Optimization (AEO)?
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Answer Engine Optimization (AEO) ist die Optimierung von Inhalten für Systeme, die <strong className="text-black">direkte Antworten liefern statt Links</strong>. Diese Systeme heißen Answer Engines – und sie verändern, wie Menschen Informationen konsumieren.
            </p>
            <p>
              <strong className="text-black">Answer Engines</strong> sind: ChatGPT, Perplexity, Google AI Overviews (ehemals SGE), Microsoft Copilot, Claude, Siri, Alexa und Google Assistant. Gemeinsam ist ihnen: Sie geben dem Nutzer eine synthetisierte Antwort, keine Liste von Websites.
            </p>
            <p>
              Der fundamentale Unterschied zu klassischer Suche: Bei Google konkurrierst du um einen Platz in den Top 10. Bei Answer Engines konkurrierst du darum, <strong className="text-black">die Antwort zu sein</strong>. Oder zumindest als Quelle zitiert zu werden. AEO fokussiert auf die Antwort, nicht das Ranking.
            </p>
            <p>
              Verwandte Begriffe, die du kennen solltest: <strong className="text-black">GEO (Generative Engine Optimization)</strong> fokussiert auf generative KI-Systeme. <strong className="text-black">LLMO (Large Language Model Optimization)</strong> optimiert speziell für LLMs wie ChatGPT und Claude. AEO ist der breiteste Begriff – er umfasst alle Systeme, die direkte Antworten liefern, einschließlich Sprachassistenten.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Das Problem                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Das Problem: Antwort-Maschinen ersetzen Suchmaschinen
          </h2>

          <StatBox text="65%+ aller Google-Suchen enden ohne Klick auf ein Suchergebnis. Zero-Click ist der neue Standard." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Du produzierst Content, aber keine Answer Engine zitiert dich. Du rankst vielleicht sogar gut bei Google – aber die wachsende Zielgruppe, die KI fragt, sieht dich nicht. Deine Konkurrenz <strong className="text-black">ist</strong> die Antwort – du bist nur ein Suchergebnis.
            </p>
          </div>

          <StatBox text="Nutzer wollen Antworten, keine 10 blauen Links. Die Erwartung hat sich fundamental verschoben." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Featured Snippets waren der Anfang. Google hat schon vor Jahren begonnen, Antworten direkt in den SERPs zu zeigen. <strong className="text-black">AI Overviews sind die logische Weiterentwicklung</strong> – und sie werden bis Ende 2026 bei der Mehrheit aller informativen Suchanfragen erscheinen.
            </p>
            <p>
              Die Konsequenz: Wenn dein Content nicht so strukturiert ist, dass Answer Engines ihn extrahieren, zusammenfassen und zitieren können, verlierst du nicht nur Traffic – du verlierst <strong className="text-black">Relevanz</strong>. Für eine wachsende Zielgruppe existierst du schlicht nicht.
            </p>
          </div>

          <StatBox text="Wenn dein Content die Antwort nicht IST, wirst du nicht zitiert. Es gibt keine Position 2 in einer KI-Antwort." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Das Perfide: Dieser Effekt verstärkt sich. Answer Engines bevorzugen Quellen, die sie bereits als zuverlässig kennen. Je länger du wartest, desto schwerer wird es, diese Position einzunehmen. Deine Wettbewerber, die jetzt optimieren, bauen einen <strong className="text-black">Compound-Vorteil</strong> auf.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  AEO vs SEO                                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            AEO vs SEO: Was ist der Unterschied?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            AEO ersetzt SEO nicht. Aber die Denkweise ist fundamental anders. Hier der direkte Vergleich:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Klassisches SEO</th>
                  <th className="py-3 text-sm font-semibold text-black">AEO</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Ziel</td>
                  <td className="py-3 pr-4">Rankings optimieren</td>
                  <td className="py-3">Antworten optimieren</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Fokus</td>
                  <td className="py-3 pr-4">Keyword-fokussiert</td>
                  <td className="py-3">Intent-fokussiert</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Vertrauenssignal</td>
                  <td className="py-3 pr-4">Links aufbauen</td>
                  <td className="py-3">Zitierbarkeit aufbauen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Content-Format</td>
                  <td className="py-3 pr-4">Für Menschen lesbar</td>
                  <td className="py-3">Für Menschen lesbar UND maschinell extrahierbar</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Erfolgsmessung</td>
                  <td className="py-3 pr-4">Rankings, Traffic, CTR</td>
                  <td className="py-3">Zitationsrate, Brand Mentions, AI Visibility Score</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Ergebnis-Format</td>
                  <td className="py-3 pr-4">10 blaue Links</td>
                  <td className="py-3">Eine synthetisierte Antwort mit 2-7 Quellen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Strukturierte Daten</td>
                  <td className="py-3 pr-4">Nice-to-have</td>
                  <td className="py-3">Must-have (FAQ, HowTo, Q&A Schema)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Content-Struktur</td>
                  <td className="py-3 pr-4">H1-H6, Keywords in Headings</td>
                  <td className="py-3">Answer-First, klare Definitionen, extrahierbare Absätze</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Der größte Denkfehler: <strong className="text-black">"Gutes SEO = gute AEO."</strong> Stimmt nicht. Eine Seite kann bei Google auf Platz 1 ranken und trotzdem von ChatGPT ignoriert werden. Warum? Weil die Antwort nicht im ersten Absatz steht, weil die Struktur nicht extrahierbar ist, weil die E-E-A-T-Signale nicht für KI ausreichen. AEO braucht eine eigene Strategie.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Die 5 Säulen der AEO                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Die 5 Säulen der Answer Engine Optimization
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            AEO steht auf fünf Säulen. Jede einzelne ist wichtig – aber erst zusammen entfalten sie ihre volle Wirkung.
          </p>

          <div className="space-y-6">
            <PillarCard num={1} title="Answer-First Content">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Die Antwort gehört in den ersten Absatz. Nicht nach einer 300-Wörter-Einleitung. Answer Engines extrahieren bevorzugt den ersten inhaltlichen Block nach einer Überschrift.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Definitionsfragen in 1-2 Sätzen beantworten, dann vertiefen</li>
                <li>Klare, selbstständige Absätze, die ohne Kontext verständlich sind</li>
                <li>Frage-Antwort-Format nutzen (H2 als Frage, erster Absatz als Antwort)</li>
                <li>Konkrete Zahlen, Fakten und Beispiele statt vager Formulierungen</li>
              </ul>
            </PillarCard>

            <PillarCard num={2} title="Strukturierte Daten">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Schema.org Markup ist für AEO kein Nice-to-have, sondern Pflicht. Es hilft Answer Engines, den Inhalt zu klassifizieren und zu extrahieren.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>FAQPage Schema für häufig gestellte Fragen</li>
                <li>HowTo Schema für Schritt-für-Schritt-Anleitungen</li>
                <li>Q&A Schema für Frage-Antwort-Formate</li>
                <li>Article Schema mit Autor, Datum und Publisher</li>
                <li>LocalBusiness Schema für lokale Unternehmen</li>
              </ul>
            </PillarCard>

            <PillarCard num={3} title="E-E-A-T Signale">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Experience, Expertise, Authoritativeness, Trustworthiness – für Answer Engines noch wichtiger als für Google. KI zitiert bevorzugt Quellen, denen sie vertraut.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Autorenprofile mit nachweisbarer Expertise verlinken</li>
                <li>Primärquellen und Studien referenzieren</li>
                <li>Eigene Erfahrungen und Daten einbringen</li>
                <li>Konsistente Markennennung auf relevanten Plattformen</li>
                <li>Redaktionelle Erwähnungen und PR aufbauen</li>
              </ul>
            </PillarCard>

            <PillarCard num={4} title="Semantische Vollständigkeit">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Answer Engines bewerten nicht einzelne Seiten, sondern deine gesamte Expertise zu einem Thema. Topic Clusters signalisieren Tiefe und Autorität.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Pillar Pages mit umfassender Themenabdeckung</li>
                <li>Cluster-Artikel zu Unterthemen, intern verlinkt</li>
                <li>Alle relevanten Entitäten und Zusammenhänge abdecken</li>
                <li>Regelmäßige Aktualisierung (Freshness-Signal)</li>
              </ul>
            </PillarCard>

            <PillarCard num={5} title="Technische Zugänglichkeit">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Wenn KI-Crawler deine Inhalte nicht erreichen können, existierst du für sie nicht. Die technische Basis muss stimmen.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>robots.txt: KI-Bots (GPTBot, PerplexityBot, ClaudeBot) zulassen</li>
                <li>llms.txt: Maschinenlesbare Zusammenfassung deiner Website</li>
                <li>Schnelle Ladezeiten und Core Web Vitals</li>
                <li>Server-Side Rendering statt reinem Client-Side JS</li>
                <li>Saubere URL-Struktur und interne Verlinkung</li>
              </ul>
            </PillarCard>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  AEO-Strategien für verschiedene Answer Engines              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            AEO-Strategien für verschiedene Answer Engines
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Jede Answer Engine hat eigene Prioritäten. Was für Perplexity funktioniert, ist für Alexa irrelevant. Hier die plattformspezifischen Hebel:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <EngineCard name="Google AI Overviews">
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">E-E-A-T ist König:</strong> Google vertraut etablierten Autoritäten</li>
                <li><strong className="text-black">Featured Snippets</strong> sind der Vorläufer – wer dort erscheint, hat Vorteile</li>
                <li><strong className="text-black">Strukturierte Daten</strong> werden direkt in AI Overviews integriert</li>
                <li>Content-Freshness und regelmäßige Updates</li>
                <li>Lange, umfassende Inhalte schlagen kurze Artikel</li>
              </ul>
            </EngineCard>

            <EngineCard name="ChatGPT">
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Brand Authority:</strong> ChatGPT zitiert bekannte Marken bevorzugt</li>
                <li><strong className="text-black">Bing-Index</strong> ist relevant (ChatGPT Browse nutzt Bing)</li>
                <li>Konsistente Markennennung über viele Plattformen hinweg</li>
                <li>Trainingszyklen: Ergebnisse nach 3-6 Monaten</li>
                <li>Wikipedia- und Reddit-Präsenz als Autoritätssignal</li>
              </ul>
            </EngineCard>

            <EngineCard name="Perplexity">
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Freshness ist kritisch:</strong> Perplexity durchsucht das Live-Web</li>
                <li><strong className="text-black">Source Quality:</strong> Gut strukturierte, zitierfähige Seiten werden bevorzugt</li>
                <li>Schnellster Kanal – Ergebnisse nach 2-4 Wochen</li>
                <li>Direkte Quellenverlinkung = messbarer Traffic</li>
                <li>Klare Antwortstrukturen mit Quellenangaben</li>
              </ul>
            </EngineCard>

            <EngineCard name="Siri / Alexa / Voice">
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Schema Markup</strong> ist hier am wichtigsten (LocalBusiness, FAQ)</li>
                <li><strong className="text-black">Lokale Signale:</strong> NAP-Konsistenz, Google Business Profile</li>
                <li>Kurze, gesprochene Antworten – max. 2-3 Sätze</li>
                <li>Conversational Keywords und Long-Tail-Fragen</li>
                <li>Speakeasy-Formulierungen statt Fachsprache</li>
              </ul>
            </EngineCard>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  AEO Content erstellen: Schritt für Schritt                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            AEO Content erstellen: Schritt-für-Schritt
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Theorie ist gut. Hier ist die Praxis – in 6 Schritten von normalem Content zu AEO-optimiertem Content.
          </p>

          <ol className="space-y-10">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                1. Fragen identifizieren, die deine Zielgruppe an KI stellt
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Frag ChatGPT und Perplexity direkt: "Was sind die häufigsten Fragen zu [dein Thema]?" Nutze AlsoAsked, AnswerThePublic und Google&apos;s "People Also Ask". Sammle die Fragen, die deine Zielgruppe wirklich stellt – nicht die Keywords, die ein Tool vorschlägt.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                2. Answer-First strukturieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Jede Frage wird eine Überschrift (H2 oder H3). Der erste Absatz danach beantwortet die Frage direkt. Dann folgt die Vertiefung.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-sm font-semibold text-red-500 mb-2">Vorher (klassisch)</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "In der heutigen digitalen Landschaft wird die Frage der Suchmaschinenoptimierung immer wichtiger. Viele Unternehmen stehen vor der Herausforderung..."
                  </p>
                </div>
                <div className="bg-white border-2 border-brand-accent rounded-2xl p-5">
                  <p className="text-sm font-semibold text-brand-accent mb-2">Nachher (AEO-optimiert)</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Answer Engine Optimization (AEO) ist die Optimierung von Inhalten für Systeme, die direkte Antworten liefern statt Links – wie ChatGPT, Perplexity oder Google AI Overviews."
                  </p>
                </div>
              </div>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                3. Extrahierbare Absätze schreiben
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jeder Absatz muss ohne Kontext verständlich sein. Answer Engines reißen einzelne Absätze aus dem Gesamttext und verwenden sie als Antwort. Wenn dein Absatz nur im Kontext der vorherigen Absätze Sinn ergibt, wird er nicht zitiert. Schreibe selbstständige Informationseinheiten.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                4. Strukturierte Daten implementieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Füge FAQPage Schema für alle Frage-Antwort-Blöcke hinzu. Nutze HowTo Schema für Anleitungen. Article Schema mit Autor, Datum und Publisher. Diese Markup-Signale helfen Answer Engines, den Typ und die Relevanz deines Contents zu verstehen.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                5. Expertise sichtbar machen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Verlinke zum Autorenprofil. Referenziere Primärquellen. Zeige eigene Erfahrung und Daten. Answer Engines bewerten Vertrauenswürdigkeit – und ein anonymer Artikel ohne Quellenangaben wird nicht zitiert. Transparenz ist kein Nice-to-have, sondern AEO-Pflicht.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                6. Testen und Messen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Frage ChatGPT, Perplexity und Google AI nach deinem Thema. Wirst du zitiert? Wenn nicht: Welche Quellen werden zitiert? Was machen die anders? Nutze dieses Feedback, um deinen Content iterativ zu verbessern. AEO ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess.
              </p>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  AEO-Metriken und Erfolgsmessung                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            AEO-Metriken und Erfolgsmessung
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
            <p>
              AEO-Erfolg lässt sich messen – aber mit anderen KPIs als klassisches SEO. Hier die wichtigsten Metriken:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">AI Visibility Score</h3>
              <p className="text-gray-600 leading-relaxed">
                Tools wie Semrush AI Visibility und Ahrefs Brand Radar messen, wie oft deine Marke in KI-Antworten erscheint. Der AI Visibility Score ist die neue Leitwährung neben dem klassischen Sichtbarkeitsindex.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Zitationsrate</h3>
              <p className="text-gray-600 leading-relaxed">
                Wie oft wirst du als Quelle in KI-Antworten zitiert? Miss das pro Plattform (ChatGPT, Perplexity, AI Overviews). Manuelle Stichproben kombiniert mit Tool-Daten geben dir ein realistisches Bild.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">AI-Referral-Traffic</h3>
              <p className="text-gray-600 leading-relaxed">
                In GA4 kannst du Traffic von KI-Plattformen tracken. Perplexity und ChatGPT Browse senden messbaren Referral-Traffic. Richte UTM-Tracking ein und erstelle ein eigenes Dashboard für AI-Referrals.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Brand Mentions Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Tracke Markennennungen auf Plattformen, die KI als Trainingsdaten nutzt: Reddit, Wikipedia, Fachforen, PR-Portale. Mehr konsistente Markennennungen = höhere Wahrscheinlichkeit der KI-Zitation.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Schema Validation</h3>
              <p className="text-gray-600 leading-relaxed">
                Prüfe regelmäßig mit dem Google Rich Results Test und Schema.org Validator, ob deine strukturierten Daten fehlerfrei sind. Fehlerhafte Schemas werden ignoriert – und du verlierst den AEO-Vorteil.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Typische AEO-Fehler                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Typische AEO-Fehler
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Diese Fehler sehe ich bei fast jedem Unternehmen, das mit AEO startet. Vermeide sie von Anfang an.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">1. Die Antwort erst am Ende liefern</h3>
              <p className="text-gray-600 leading-relaxed">
                Viele Texte beginnen mit langen Einleitungen, bevor die eigentliche Antwort kommt. Answer Engines extrahieren den ersten Absatz – wenn dort nur Floskeln stehen, wirst du nicht zitiert. Antwort zuerst, Kontext danach.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">2. Keine strukturierten Daten</h3>
              <p className="text-gray-600 leading-relaxed">
                FAQ-Seiten ohne FAQPage Schema, Anleitungen ohne HowTo Schema, Artikel ohne Article Schema. Ohne Markup fehlt der Kontext, den Answer Engines brauchen, um deinen Content richtig einzuordnen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">3. KI-Crawler aussperren</h3>
              <p className="text-gray-600 leading-relaxed">
                Viele robots.txt-Dateien blockieren GPTBot, PerplexityBot oder ClaudeBot. Wenn KI-Crawler deine Inhalte nicht lesen können, existierst du für sie nicht. Prüfe deine robots.txt und stelle sicher, dass alle relevanten Bots Zugang haben.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">4. Content ohne Expertise-Signale</h3>
              <p className="text-gray-600 leading-relaxed">
                Anonyme Texte ohne Autor, ohne Quellenangaben, ohne erkennbare Expertise. Answer Engines bevorzugen Inhalte mit nachweisbarer Autorität. Ohne E-E-A-T-Signale bist du eine von tausend austauschbaren Quellen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">5. AEO als einmaliges Projekt behandeln</h3>
              <p className="text-gray-600 leading-relaxed">
                "Wir haben die Schemas implementiert, fertig." AEO ist ein kontinuierlicher Prozess. Answer Engines verändern ihre Algorithmen, neue Plattformen entstehen, und dein Content muss aktuell bleiben. Wer aufhört zu optimieren, verliert seine Position.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">6. Nur auf eine Answer Engine optimieren</h3>
              <p className="text-gray-600 leading-relaxed">
                Nur ChatGPT oder nur Google AI Overviews im Blick? Jede Plattform hat eigene Prioritäten. Eine diversifizierte AEO-Strategie schützt dich vor Algorithmus-Änderungen und maximiert deine Gesamtsichtbarkeit.
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
                <strong className="text-black">SparkToro / Datos (2024):</strong> "Zero-Click Search Study" – Analyse der Zero-Click-Rate bei Google-Suchen. Über 65% aller Suchen enden ohne Klick.
              </li>
              <li>
                <strong className="text-black">Gartner (2024):</strong> "Predicts 2025: Search and AI" – Prognose zum Rückgang organischen Traffics durch KI-gestützte Suche bis 2028.
              </li>
              <li>
                <strong className="text-black">Princeton University (2024):</strong> "GEO: Generative Engine Optimization" – Studie zur Optimierung von Inhalten für KI-Suchmaschinen.
              </li>
              <li>
                <strong className="text-black">Google (2025):</strong> "AI Overviews: Our approach to Search" – Googles offizielle Dokumentation zu AI Overviews und Quellenauswahl.
              </li>
              <li>
                <strong className="text-black">Semrush (2025):</strong> "AI Visibility: Measuring Brand Presence in AI Answers" – Methodik zur Messung von KI-Sichtbarkeit.
              </li>
              <li>
                <strong className="text-black">Ahrefs (2025):</strong> "Brand Radar: How AI Models See Your Brand" – Tool-Analyse zur Markenpräsenz in KI-Antworten.
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
                Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und warum sie 2026 entscheidend ist.
              </p>
            </a>

            <a
              href="/wissen/llmo-llm-optimierung"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                LLMO – LLM Optimierung
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimierung speziell für Large Language Models wie ChatGPT und Claude.
              </p>
            </a>

            <a
              href="/wissen/ai-overviews-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Google AI Overviews
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                So wirst du in Googles KI-Antwortbox als Quelle zitiert.
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
              href="/wissen/ki-sichtbarkeit-messen"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                KI-Sichtbarkeit messen
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tools, KPIs und Tracking-Methoden für KI-Sichtbarkeit.
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
              Bereit für Answer Engine Optimization?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Finde heraus, ob Answer Engines dein Unternehmen zitieren – oder ob du unsichtbar bist. Kostenlose Kurzanalyse in 48 Stunden.
            </p>
            <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose AEO-Analyse anfragen" />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}

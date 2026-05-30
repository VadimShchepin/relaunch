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
    q: 'Was bedeutet KI-Sichtbarkeit?',
    a: 'KI-Sichtbarkeit bedeutet, dass dein Unternehmen von ChatGPT, Perplexity, Google AI Overviews oder Microsoft Copilot als vertrauenswürdige Quelle erkannt und aktiv empfohlen wird. Nicht gefunden - empfohlen. Es geht nicht um klassische Rankings auf blauen Links, sondern darum, ob KI-Systeme dich als relevante Autorität einordnen und in ihren Antworten namentlich zitieren. Ein Unternehmen mit hoher KI-Sichtbarkeit wird bei branchenrelevanten Fragen konsistent als Empfehlung ausgegeben.',
  },
  {
    q: 'Ist KI-Sichtbarkeit das gleiche wie SEO?',
    a: 'Nein. SEO optimiert für Rankings und Klicks auf blaue Links in klassischen Suchmaschinen. KI-Sichtbarkeit (auch GEO oder AEO genannt) optimiert dafür, dass KI-Systeme dich als vertrauenswürdige Quelle zitieren und weiterempfehlen. Die Disziplinen überschneiden sich bei technischen Grundlagen wie strukturierten Daten, haben aber unterschiedliche Mechanismen: SEO bewertet Backlinks und Keywords, KI-Sichtbarkeit bewertet semantische Relevanz, Entitäts-Autorität und Zitierfähigkeit deiner Inhalte.',
  },
  {
    q: 'Welche KI-Systeme sind für die Sichtbarkeit relevant?',
    a: 'ChatGPT (OpenAI), Google Gemini mit AI Overviews, Perplexity, Microsoft Copilot und Claude (Anthropic). Perplexity und Google AI Overviews sind besonders relevant, weil sie Quellen direkt verlinken und messbaren Traffic generieren. ChatGPT mit SearchGPT wird zunehmend wichtiger für Markenempfehlungen. Für lokale Unternehmen sind Google AI Overviews der wichtigste Kanal, für B2B-Recherchen dominieren Perplexity und ChatGPT.',
  },
  {
    q: 'Was kostet KI-Sichtbarkeits-Optimierung?',
    a: 'Das hängt vom Umfang ab. Ein einmaliges Audit mit Handlungsempfehlungen ist der günstigste Einstieg. Eine vollständige Optimierung inklusive Content-Strategie, technischer Implementierung und Autoritätsaufbau läuft über mehrere Monate. Der ROI ist hoch: Ein einziger Zitationsplatz in ChatGPT oder Perplexity kann hunderte qualifizierte Besucher pro Monat generieren. Für eine konkrete Einschätzung biete ich eine kostenlose Kurzanalyse an.',
  },
  {
    q: 'Für welche Unternehmen lohnt sich KI-Sichtbarkeit?',
    a: 'Für alle, die über Online-Sichtbarkeit Kunden gewinnen: Dienstleister, lokale Unternehmen, SaaS-Anbieter, E-Commerce, Berater, Agenturen, Ärzte, Anwälte und Handwerker. Besonders profitieren Unternehmen in Branchen, in denen Kunden KI für Recherche und Kaufentscheidungen nutzen. Laut aktuellen Studien starten bereits 35% der B2B-Recherchen über LLMs statt über Google.',
  },
  {
    q: 'Wie messe ich meine KI-Sichtbarkeit?',
    a: 'Tools wie Ahrefs Brand Radar, Semrush AI Visibility und Otterly.ai zeigen deine Präsenz in KI-Antworten. GA4 trackt Traffic von KI-Plattformen über Referral-Quellen. Zusätzlich kannst du manuell prüfen, was ChatGPT oder Perplexity auf branchenrelevante Fragen antworten. Eine detaillierte Anleitung findest du in unserem Guide KI-Sichtbarkeit messen.',
  },
  {
    q: 'Wie lange dauert es, bis ich Ergebnisse sehe?',
    a: 'Perplexity durchsucht das Live-Web - dort siehst du Ergebnisse oft nach 4-8 Wochen. ChatGPT und Google Gemini trainieren in Zyklen, hier dauert es 3-6 Monate bis zu konsistenten Veränderungen. Der Compound-Effekt bedeutet: Wer früh optimiert, wird als Quelle etabliert. Spätere Trainingszyklen bestätigen dieses Signal und machen die Position stabiler.',
  },
  {
    q: 'Blockiert meine Website KI-Crawler?',
    a: '70% der Unternehmens-Websites blockieren mindestens einen KI-Crawler unbewusst - oft durch restriktive robots.txt-Regeln oder veraltete Sicherheitseinstellungen. Das bedeutet: Du hast dich selbst unsichtbar gemacht, ohne es zu wissen. Ein technisches Audit deckt das in Minuten auf. Details dazu in unserem Guide zur technischen KI-Sichtbarkeit.',
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
  headline: 'KI-Sichtbarkeit: Was es bedeutet und warum es 2026 entscheidend ist',
  description:
    'Der Pillar-Guide zu KI-Sichtbarkeit: Definition, Framework mit drei Säulen, GEO vs. SEO, Pain-Analyse und strategische Schritte für Unternehmen.',
  image: 'https://aiseo.hamburg/images/wissen/ki-sichtbarkeit.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-03-12',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit',
  inLanguage: 'de',
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
/*  Pain box component                                                */
/* ------------------------------------------------------------------ */

const PainBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white border-2 border-brand-orange rounded-xl p-6 shadow-sm my-6">
    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{text}</p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function KISichtbarkeitPage() {
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
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'KI-Sichtbarkeit' },
          ],
        }) }}
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
              <li className="text-black font-medium">KI-Sichtbarkeit</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            KI-Sichtbarkeit: Deine Kunden fragen KI um Rat. KI empfiehlt dich nicht.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-4">
            Du verlierst Geschäft, ohne es zu merken. Während du in Google-Rankings investierst, recherchieren deine Kunden längst in ChatGPT, Perplexity und Google AI Overviews. Wer dort nicht empfohlen wird, existiert für eine wachsende Zielgruppe schlicht nicht.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Dein Google-Ranking ist irrelevant, wenn ChatGPT dich nicht kennt. Hier ist das Framework, um das zu ändern.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Image                                                       */}
      {/* ============================================================ */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
        <FadeIn>
          <img
            src="/images/wissen/ki-sichtbarkeit.jpg"
            alt="KI-Sichtbarkeit: Wie Unternehmen in ChatGPT und Perplexity sichtbar werden"
            className="w-full rounded-2xl shadow-lg"
            loading="eager"
          />
          <p className="text-xs text-gray-400 mt-2">Foto: Unsplash</p>
        </FadeIn>
      </div>

      {/* ============================================================ */}
      {/*  TLDR                                                        */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">KI-Sichtbarkeit</strong> = KI-Systeme empfehlen dein Unternehmen aktiv. Nicht finden. Empfehlen. Der neue Wettbewerbsvorteil.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">40% Traffic-Einbruch</strong> bei informationalen Suchanfragen seit dem AI Overview Rollout. 35% der B2B-Recherchen starten über LLMs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">Drei Säulen</strong> entscheiden: Technik, Content, Autorität. Fehlt eine, funktioniert nichts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">Compound-Effekt:</strong> KI zitiert die gleichen Quellen immer wieder. Wer jetzt startet, baut einen schwer einholbaren Vorsprung auf.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">5.</span>
                <span><strong className="text-black">70% der Websites</strong> blockieren KI-Crawler unbewusst. Du bist vielleicht unsichtbar, ohne es zu wissen.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Dein Problem in Zahlen                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Dein Problem in Zahlen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Du investierst Tausende in Content-Marketing, aber KI bedient sich an deinem Wissen, ohne dich zu nennen. Die Zahlen zeigen, wie schnell sich der Markt verschiebt.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-4xl font-bold text-brand-accent mb-2">40%</p>
              <p className="text-gray-600 leading-relaxed">
                Traffic-Einbruch bei informationalen Suchanfragen seit dem <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent hover:underline">Google AI Overview Rollout</a>. Nutzer bekommen die Antwort direkt - ohne Klick auf deine Seite.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-4xl font-bold text-brand-accent mb-2">35%</p>
              <p className="text-gray-600 leading-relaxed">
                der B2B-Recherchen starten nicht mehr über Google, sondern über LLMs wie ChatGPT und Perplexity. Tendenz stark steigend.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-4xl font-bold text-brand-accent mb-2">70%</p>
              <p className="text-gray-600 leading-relaxed">
                der Unternehmens-Websites blockieren mindestens einen KI-Crawler unbewusst. Aus Angst vor Datenklau haben sie sich selbst <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline">unsichtbar gemacht</a>.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-4xl font-bold text-brand-accent mb-2">50%+</p>
              <p className="text-gray-600 leading-relaxed">
                des organischen Traffics wandert laut Gartner bis 2028 zu KI-gestützter Suche. Das ist keine Prognose für 2035. Das ist in zwei Jahren.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Deine Agentur optimiert für ein System, das seine Marktmacht verliert. Nicht, weil Google verschwindet - sondern weil die Art, wie Menschen Antworten finden, sich fundamental ändert. Wer nur auf klassisches SEO setzt, optimiert für die Vergangenheit.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Was ist KI-Sichtbarkeit?                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Was ist KI-Sichtbarkeit? Definition und Abgrenzung
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">KI-Sichtbarkeit</strong> (auch: KI-gestützte Sichtbarkeit, KI Visibility) = dein Unternehmen wird von ChatGPT, Perplexity oder Google AI empfohlen. Nicht gefunden. <strong className="text-black">Empfohlen.</strong> Der Unterschied ist fundamental: Du konkurrierst nicht mehr um 10 blaue Links, sondern um 2-7 Zitationsplätze pro KI-Antwort.
            </p>
            <p>
              Die Disziplin dahinter heißt <strong className="text-black">GEO (Generative Engine Optimization)</strong>. Du kennst es vielleicht als <strong className="text-black">AEO (Answer Engine Optimization)</strong> oder <strong className="text-black">LLMO (Large Language Model Optimization)</strong>. Gleicher Kern: dein Unternehmen so aufstellen, dass KI-Systeme es verstehen, einordnen und weiterempfehlen.
            </p>
            <p>
              Bei Google optimierst du für ein Ranking. Bei KI-Sichtbarkeit optimierst du dafür, <strong className="text-black">als Quelle zitiert</strong> zu werden. Andere Signale, andere Strukturen, andere Denkweise. Und ein völlig anderer Wettbewerb: Statt gegen hunderte Ergebnisse kämpfst du um eine Handvoll Empfehlungsplätze.
            </p>

            <StatBox text="Was bedeutet KI-Sichtbarkeit konkret? Wenn ein potenzieller Kunde ChatGPT fragt 'Welche AI SEO Agentur in Hamburg ist empfehlenswert?' - erscheint dein Unternehmen in der Antwort? Wenn nicht, hast du ein KI-Sichtbarkeits-Problem." />

            <p>
              Die Princeton-Studie zu GEO (2024) zeigt: Inhalte, die für generative Suchmaschinen optimiert sind, erhalten bis zu <strong className="text-black">115% mehr Sichtbarkeit</strong> in KI-Antworten. Der Hebel ist enorm - aber nur für die, die ihn nutzen.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Was passiert, wenn du nichts tust                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Was passiert, wenn du nichts tust
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Die unbequeme Wahrheit: Nichtstun ist keine neutrale Entscheidung. Es ist eine Entscheidung gegen deine zukünftige Sichtbarkeit. Hier ist, was gerade passiert.
          </p>

          <div className="space-y-6">
            <PainBox text="Dein Wettbewerber wird empfohlen. Du nicht. Bei jeder KI-Anfrage in deiner Branche entscheidet sich gerade, wer künftig Kunden bekommt - und wer unsichtbar bleibt." />

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Der Compound-Effekt arbeitet gegen dich</h3>
              <p className="text-gray-600 leading-relaxed">
                KI-Systeme zitieren die gleichen Quellen immer wieder. Jede Zitation stärkt die Autorität dieser Quelle für zukünftige Antworten. Das bedeutet: Dein Wettbewerber, der heute zitiert wird, wird morgen noch häufiger zitiert. Der Vorsprung verstärkt sich mit jedem KI-Update exponentiell. Wie Zinseszins - nur gegen dich.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Je länger du wartest, desto teurer wird es</h3>
              <p className="text-gray-600 leading-relaxed">
                Heute reicht ein gut strukturierter Fachbeitrag, um in Perplexity als Quelle aufzutauchen. In einem Jahr brauchst du eine umfassende Content-Strategie, um den gleichen Effekt zu erzielen. In zwei Jahren kämpfst du gegen fest etablierte KI-Autoritäten in deiner Branche. Die Einstiegskosten steigen mit jedem Monat.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Dein Content wird geplündert, ohne Gegenleistung</h3>
              <p className="text-gray-600 leading-relaxed">
                Du investierst Tausende in Content-Marketing. KI-Systeme extrahieren dein Wissen, fassen es zusammen und liefern es an Nutzer - ohne deinen Namen zu nennen, ohne Link, ohne Klick. Dein Content füttert die KI, aber du bekommst nichts zurück. Ausser du optimierst aktiv dafür, als Quelle zitiert zu werden.
              </p>
            </div>

            <PainBox text="Der Vorsprung deines Wettbewerbers verstärkt sich mit jedem KI-Update. In 12 Monaten ist der Abstand nicht mehr aufzuholen - zumindest nicht mit dem gleichen Budget." />
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Warum jetzt?                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Warum jetzt? Die Marktverschiebung in Echtzeit
          </h2>

          <StatBox text="Gartner: Marken verlieren bis 2028 über 50% ihres organischen Traffics an KI-gestützte Suche. Das Zeitfenster für frühe Positionierung schließt sich." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Das Suchverhalten kippt gerade. Nicht irgendwann. Klassische Google-Anfragen sinken laut internen Daten bis 2026 um <strong className="text-black">25%</strong>. Gleichzeitig wachsen KI-Plattformen um <strong className="text-black">+28,6% im Jahresvergleich</strong>. ChatGPT hat über 200 Millionen wöchentlich aktive Nutzer. Perplexity verarbeitet über 100 Millionen Suchanfragen pro Woche.
            </p>
          </div>

          <StatBox text="33% der Nutzer verwenden bereits regelmäßig KI-Suchtools für Recherche und Kaufentscheidungen. Bei der Generation Z sind es über 45%." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Das sind nicht nur Tech-Early-Adopter. Handwerker lassen Angebote vergleichen. Freiberufler fragen nach dem besten Steuerberater in Hamburg. Einkäufer recherchieren Lieferanten über Perplexity. Geschäftsführer lassen sich Marktanalysen von ChatGPT erstellen. Quer durch alle Branchen und Hierarchieebenen.
            </p>
          </div>

          <StatBox text="KI-Empfehlungen generieren 8x mehr Traffic als klassische organische Suche. Und die Conversion-Rate ist höher, weil Nutzer der KI-Empfehlung vertrauen." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Wenn KI dich nicht kennt, wirst du nicht empfohlen. Wenn du nicht empfohlen wirst, verlierst du Anfragen an Wettbewerber, die KI als Quelle erkannt hat. Und dieser Effekt verstärkt sich selbst - mit jedem Trainingszyklus, mit jedem neuen Modell-Update.
            </p>
            <p>
              Das Zeitfenster für einen Vorsprung schließt sich. In 12-18 Monaten ist KI-Sichtbarkeit keine Option mehr, sondern Grundvoraussetzung. Die Frage ist nicht ob, sondern <strong className="text-black">wann</strong> du anfängst - und ob du dann noch einen Vorsprung hast oder aufholen musst.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Die drei Säulen der KI-Sichtbarkeit                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Die drei Säulen der KI-Sichtbarkeit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            KI-gestützte Sichtbarkeit basiert auf drei Bereichen, die zusammenspielen müssen. Fehlt einer, funktioniert das Gesamtbild nicht. Jede Säule allein ist wertlos.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Säule 1: Technik */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">1</div>
              <h3 className="text-xl font-semibold text-black mb-3">Technik</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Schema.org Markup (Product, FAQ, HowTo, LocalBusiness, Organization)</li>
                <li>Saubere, crawlbare Seitenarchitektur mit klarer Hierarchie</li>
                <li>Schnelle Ladezeiten und Core Web Vitals</li>
                <li>Zugang für KI-Bots in robots.txt (GPTBot, PerplexityBot, ClaudeBot)</li>
                <li>llms.txt und ai.txt für KI-Crawler-Instruktionen</li>
                <li>Strukturierte Daten für Entity-Erkennung</li>
                <li>Semantisches HTML mit korrekter Heading-Hierarchie</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Vertiefung: <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline">Technische KI-Sichtbarkeit</a>
              </p>
            </div>

            {/* Säule 2: Content */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">2</div>
              <h3 className="text-xl font-semibold text-black mb-3">Content</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Echte Fragen deiner Zielgruppe beantworten (nicht Werbetexte)</li>
                <li>Extrahierbare, klar strukturierte Formate (Listen, Tabellen, Definitionen)</li>
                <li>Regelmäßige Aktualisierung (Freshness-Signal)</li>
                <li>Klare Positionierung und thematische Spezialisierung</li>
                <li>Ehrlicher Vergleichs-Content mit Zahlen und Fakten</li>
                <li>Zitierfähige Aussagen mit konkreten Daten</li>
                <li>Content-Cluster mit thematischer Tiefe</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Vertiefung: <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent hover:underline">AI Overviews Sichtbarkeit</a>
              </p>
            </div>

            {/* Säule 3: Autorität */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">3</div>
              <h3 className="text-xl font-semibold text-black mb-3">Autorität</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Markennennungen auf relevanten Plattformen (Wikipedia, Fachportale)</li>
                <li>PR und redaktionelle Erwähnungen in Branchenmedien</li>
                <li>Branchenverzeichnisse, Listings und Bewertungsportale</li>
                <li>E-E-A-T Signale (Experience, Expertise, Authority, Trust)</li>
                <li>Konsistente NAP-Daten überall</li>
                <li>Gastbeiträge und Expertenzitate in Fachmedien</li>
                <li>Präsenz auf Plattformen, die KI als Trainingsdaten nutzt</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Vertiefung: <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent hover:underline">KI-Sichtbarkeit messen</a>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Beste Technik ohne Content? Nutzlos. Bester Content ohne Autorität? Wird nicht zitiert. Autorität ohne Technik? Bleibt für KI unsichtbar. Die Princeton-Studie zeigt: Websites, die alle drei Säulen abdecken, erhalten bis zu <strong className="text-black">3x mehr KI-Zitationen</strong> als solche, die nur eine oder zwei bedienen.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  GEO vs. klassisches SEO                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            GEO vs. klassisches SEO: Warum deine bisherige Strategie nicht reicht
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            KI-Sichtbarkeit ersetzt SEO nicht. Sie ergänzt es. Aber die Mechanismen sind grundlegend anders - und wer das nicht versteht, optimiert an der falschen Stelle.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Klassisches SEO</th>
                  <th className="py-3 text-sm font-semibold text-black">KI-Sichtbarkeit (GEO)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Ergebnis-Format</td>
                  <td className="py-3 pr-4">10 blaue Links</td>
                  <td className="py-3">2-7 Zitationen in einer Antwort</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Optimierungsfokus</td>
                  <td className="py-3 pr-4">Keywords & Suchintention</td>
                  <td className="py-3">Semantische Relevanz & Entitäten</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Vertrauenssignal</td>
                  <td className="py-3 pr-4">Backlinks</td>
                  <td className="py-3">Zitationen & Markennennungen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Nutzerinteraktion</td>
                  <td className="py-3 pr-4">Klick auf Suchergebnis</td>
                  <td className="py-3">Informationsextraktion durch KI</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Optimierungsebene</td>
                  <td className="py-3 pr-4">Einzelne Seite / URL</td>
                  <td className="py-3">Entität / Marke als Ganzes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Update-Rhythmus</td>
                  <td className="py-3 pr-4">Monatliche Zyklen</td>
                  <td className="py-3">Kontinuierliche Aktualität (Freshness)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Content-Typ</td>
                  <td className="py-3 pr-4">Keyword-optimierte Texte</td>
                  <td className="py-3">Zitierfähige, faktenbasierte Antworten</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">Wettbewerb</td>
                  <td className="py-3 pr-4">Hunderte Ergebnisse pro Suchanfrage</td>
                  <td className="py-3">2-7 Quellen pro KI-Antwort</td>
                </tr>
              </tbody>
            </table>
          </div>

          <PainBox text="Größter Denkfehler: 'Ich bin bei Google auf Platz 1, also bin ich auch in KI sichtbar.' Stimmt nicht. Eine Seite kann hervorragend ranken und von ChatGPT komplett ignoriert werden." />

          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Warum? Weil die Inhalte nicht strukturiert sind, die Marke als Entität nicht positioniert ist oder die Autoritätssignale fehlen. Google bewertet Seiten. KI bewertet Marken, Expertise und Zitierfähigkeit. Ein völlig anderes Spiel mit völlig anderen Regeln.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  KI-Sichtbarkeit für verschiedene Unternehmenstypen         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            KI-Sichtbarkeit für verschiedene Unternehmenstypen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Jede Branche hat andere KI-Touchpoints und andere Hebel. Hier ist, was für deinen Unternehmenstyp am wichtigsten ist.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Dienstleister */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Dienstleister</h3>
              <p className="text-sm text-gray-500 mb-3">Agenturen, Berater, Anwälte, Steuerberater</p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Problem:</strong> Kunden fragen ChatGPT "Welche SEO-Agentur in Hamburg ist gut?" - und du tauchst nicht auf</li>
                <li><strong className="text-black">Hebel:</strong> Expertise-Content, E-E-A-T-Signale, Fachbeiträge, Spezialisierung kommunizieren</li>
                <li><strong className="text-black">Quick Win:</strong> Vergleichs-Content und FAQ-Seiten mit konkreten Antworten auf Branchenfragen</li>
              </ul>
            </div>

            {/* Lokale Unternehmen */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Lokale Unternehmen</h3>
              <p className="text-sm text-gray-500 mb-3">Handwerker, Restaurants, Ärzte, Fitnessstudios</p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Problem:</strong> Google AI Overviews zeigen lokale Empfehlungen - aber nicht dich</li>
                <li><strong className="text-black">Hebel:</strong> LocalBusiness-Schema, konsistente NAP-Daten, Google Business Profile, Bewertungen</li>
                <li><strong className="text-black">Quick Win:</strong> Google Business Profile optimieren und in lokalen Verzeichnissen präsent sein</li>
              </ul>
            </div>

            {/* B2B-Unternehmen */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">B2B-Unternehmen</h3>
              <p className="text-sm text-gray-500 mb-3">Software, Industrie, Zulieferer, Maschinenbau</p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Problem:</strong> Einkäufer recherchieren Lieferanten über Perplexity - und finden deine Wettbewerber</li>
                <li><strong className="text-black">Hebel:</strong> Fach-Content mit Daten, Whitepapers, Branchenverzeichnisse, Produktvergleiche</li>
                <li><strong className="text-black">Quick Win:</strong> Technische Produktseiten mit Schema.org und strukturierten Spezifikationen</li>
              </ul>
            </div>

            {/* E-Commerce */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">E-Commerce</h3>
              <p className="text-sm text-gray-500 mb-3">Online-Shops, D2C-Marken, Marktplatz-Händler</p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Problem:</strong> "Bestes [Produkt] 2026" - KI empfiehlt Amazon und deine Wettbewerber, nicht dich</li>
                <li><strong className="text-black">Hebel:</strong> Product-Schema, Testberichte, ehrliche Vergleichsseiten, Kundenbewertungen</li>
                <li><strong className="text-black">Quick Win:</strong> Produktseiten mit Review-Schema und ausführlichen, ehrlichen Beschreibungen</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  5 strategische Schritte                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            5 strategische Schritte zur KI-Sichtbarkeit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Die Strategie zuerst. Plattformspezifische Taktiken findest du in unseren Guides zu{' '}
            <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline">ChatGPT</a>,{' '}
            <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent hover:underline">Perplexity</a> und{' '}
            <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent hover:underline">Google AI Overviews</a>.
          </p>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                1. Positionierung schärfen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                KI empfiehlt Spezialisten, keine Generalisten. "Alles für alle" lässt sich keiner konkreten Frage zuordnen. Definiere: Was machst du, für wen, warum bist du die beste Wahl? Je spitzer, desto höher die Zitationswahrscheinlichkeit.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">Beispiel:</strong> "Webdesign-Agentur" ist zu generisch. "Webdesign für Zahnärzte in Hamburg mit Fokus auf Patientengewinnung" ist eine Positionierung, die KI einer konkreten Frage zuordnen kann.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                2. Content als Antwortmaschine aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                KI sucht Antworten, keine Werbetexte. Recherchiere, welche Fragen deine Zielgruppe an KI stellt - und beantworte sie präzise, ehrlich und klar strukturiert. Vergleichs-Content schlägt Selbstdarstellung. Fakten mit Quellen schlagen Meinungen ohne Belege.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">Praxis-Tipp:</strong> Frag ChatGPT und Perplexity selbst, was sie über dein Themengebiet wissen. Wo Lücken sind, ist deine Chance. Erstelle Content, der diese Lücken füllt - mit Daten, Erfahrungswerten und klaren Strukturen.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                3. Technische Grundlage schaffen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Strukturierte Daten, saubere Architektur, KI-Bots in robots.txt zulassen. Ohne <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent hover:underline">technische Basis</a> kann KI deine Inhalte weder crawlen noch verstehen. Das ist die Eintrittskarte.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">Sofort prüfen:</strong> Blockiert deine robots.txt GPTBot, PerplexityBot oder ClaudeBot? 70% der Websites tun das unbewusst. Ein Check dauert 30 Sekunden und kann über deine gesamte KI-Sichtbarkeit entscheiden.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                4. Autorität systematisch aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Markennennungen auf relevanten Plattformen, PR, Branchenverzeichnisse, konsistente NAP-Daten. Eine Erwähnung in einem relevanten Fachartikel kann mehr bewirken als hundert Verzeichnis-Backlinks. KI bewertet Qualität, nicht Quantität.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">Strategie:</strong> Identifiziere die Top-10-Quellen, die KI in deiner Branche zitiert. Werde auf diesen Plattformen präsent - durch Gastbeiträge, Expertenzitate, Listings oder redaktionelle Erwähnungen. Das sind deine KI-Autoritäts-Multiplikatoren.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                5. Messen und iterieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Tools wie Ahrefs Brand Radar und Semrush AI Visibility zeigen, ob du in KI-Antworten auftauchst. GA4 trackt den Traffic von KI-Plattformen. Ohne <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent hover:underline">Messung</a> kein Fortschritt.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-black">KPIs für KI-Sichtbarkeit:</strong> Zitationsrate in KI-Antworten, Referral-Traffic von KI-Plattformen (chat.openai.com, perplexity.ai), Brand-Mentions in KI-Outputs, Share of Voice gegenüber Wettbewerbern. Plattformspezifische Details in unseren Guides zu{' '}
                <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline">ChatGPT</a> und{' '}
                <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent hover:underline">Perplexity</a>.
              </p>
            </li>
          </ol>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Wie lange dauert es?                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Wie lange dauert es?
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">3-6 Monate</strong> bis zu konsistenten Veränderungen in KI-Zitationen. Die großen LLMs trainieren in Zyklen - Optimierungen fließen erst mit dem nächsten Update ein. Das erfordert Geduld, aber die Ergebnisse sind nachhaltiger als bei klassischem SEO.
            </p>
            <p>
              <strong className="text-black">Perplexity ist schneller:</strong> Durchsucht das Live-Web, Ergebnisse oft nach 4-8 Wochen. Ideales Testfeld für deine GEO-Strategie. Wenn du in Perplexity zitiert wirst, ist das ein starkes Signal, dass deine Optimierung funktioniert.
            </p>
            <p>
              <strong className="text-black">Google AI Overviews:</strong> Reagieren innerhalb von Wochen auf Content-Änderungen. Wer hier als Quelle erscheint, gewinnt sofort Sichtbarkeit bei der größten Suchmaschine der Welt. Mehr dazu im <a href="/wissen/ai-overviews-sichtbarkeit" className="text-brand-accent hover:underline">AI Overviews Guide</a>.
            </p>
            <p>
              <strong className="text-black">Der Compound-Effekt:</strong> Wer früh optimiert, wird als Quelle etabliert. Spätere Trainingszyklen bestätigen dieses Signal. Je länger du sichtbar bist, desto stabiler die Position - ähnlich wie Domain-Autorität, nur schwerer einzuholen. Jedes KI-Update verstärkt den Vorsprung der frühen Mover.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
            Häufig gestellte Fragen zur KI-Sichtbarkeit
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
                <strong className="text-black">Gartner (2024):</strong> "Predicts 2025: Search and
                AI" - Prognose zum Rückgang organischen Traffics durch KI-gestützte Suche bis 2028. Über 50% Traffic-Verlagerung prognostiziert.
              </li>
              <li>
                <strong className="text-black">Princeton University (2024):</strong> "GEO:
                Generative Engine Optimization" - Studie zur Optimierung von Inhalten für
                KI-Suchmaschinen. Bis zu 115% mehr Sichtbarkeit durch GEO-Optimierung.
              </li>
              <li>
                <strong className="text-black">Rand Fishkin / SparkToro (2025):</strong> Analyse zum
                Traffic-Einbruch bei informationalen Suchanfragen seit dem AI Overview Rollout. Rückgänge von bis zu 40%.
              </li>
              <li>
                <strong className="text-black">Semrush (2025):</strong> "State of AI Search" -
                Studie zur Nutzung von KI-Suchtools. 33% der Nutzer verwenden regelmäßig LLMs für Recherche.
              </li>
              <li>
                <strong className="text-black">Forrester (2025):</strong> B2B-Kaufverhalten und KI -
                35% der B2B-Recherchen starten über LLMs statt klassische Suchmaschinen.
              </li>
              <li>
                <strong className="text-black">Performance Suite (2025):</strong> "9 Tipps für die
                Sichtbarkeit in KI-Suchmaschinen" - Praxisleitfaden für GEO-Optimierung.
              </li>
              <li>
                <strong className="text-black">Matthias Klenk (2025):</strong> "SEO für KI -
                Generative Engine Optimization" - Analyse der Unterschiede zwischen klassischem SEO
                und GEO.
              </li>
              <li>
                <strong className="text-black">Aleyda Solis / Orainti (2025):</strong> Analyse zur
                Blockierung von KI-Crawlern durch Unternehmens-Websites. 70% blockieren mindestens einen Bot.
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Weiterführende Guides                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Weiterführende Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="/wissen/sichtbarkeit-in-chatgpt"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Sichtbarkeit in ChatGPT
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wie du in ChatGPT-Antworten erscheinst, was OpenAI als Quelle bevorzugt und wie SearchGPT funktioniert.
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
                Der schnellste Kanal für KI-Sichtbarkeit. Live-Web-Suche, Quellenverlinkung und konkrete Taktiken.
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
                So wirst du in Googles KI-Antwortbox als Quelle zitiert. Der wichtigste Kanal für lokale Sichtbarkeit.
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
                Tools, KPIs und Tracking-Methoden: So misst du deine Präsenz in KI-Antworten systematisch.
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
                robots.txt, llms.txt, Schema.org und was KI-Crawler brauchen. Der technische Audit-Guide.
              </p>
            </a>

            <a
              href="/wissen/ai-seo-agentur"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                AI SEO Agentur
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Worauf du bei der Wahl einer AI SEO Agentur achten solltest und welche Fragen du stellen musst.
              </p>
            </a>

            <a
              href="/wissen/fallstudie-ki-sichtbarkeit-90-tage"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Fallstudie: 90 Tage KI-sichtbar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Echte Zahlen eines Hamburger Unternehmens: Performance von 35 auf 99, 2x Traffic, Platz 1 in ChatGPT.
              </p>
            </a>

            <a
              href="/wissen/case-study-blitz-hamburg"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Case Study: Blitz Hamburg
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wie ein lokaler Dienstleister in einem austauschbaren Markt zur ChatGPT-Empfehlung wurde.
              </p>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Bereit für KI-Sichtbarkeit?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-xl mx-auto">
            Finde heraus, wie KI dein Unternehmen aktuell beschreibt - und was du tun kannst, um empfohlen zu werden. Kostenlos und unverbindlich.
          </p>
          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Du erhältst eine konkrete Analyse deiner aktuellen KI-Sichtbarkeit: Was ChatGPT und Perplexity über dich wissen, wo du unsichtbar bist und welche Schritte den größten Hebel haben.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" />
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}

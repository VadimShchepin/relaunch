import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was bedeutet Zero-Click genau?',
    a: 'Zero-Click beschreibt Suchanfragen, bei denen der Nutzer die Antwort direkt in den Suchergebnissen oder in einer KI-Antwort erhält — ohne auf eine Website zu klicken. Bei Google passiert das durch Featured Snippets, Knowledge Panels und AI Overviews. Bei ChatGPT und Perplexity ist jede Antwort per Definition Zero-Click: Der Nutzer bekommt die Information direkt, ohne deine Website zu besuchen. Laut SparkToro-Daten (2025) enden bereits über 60 % aller Google-Suchen ohne einen einzigen Klick.',
  },
  {
    q: 'Wie kann ich Geld verdienen, wenn niemand mehr auf meine Website klickt?',
    a: 'Indem du das Modell umdenkst. Statt Traffic zu monetarisieren, monetarisierst du Vertrauen und Markenbekanntheit. Wenn ChatGPT deine Marke als Experten empfiehlt, kommen die qualifiziertesten Leads direkt — über Branded Search, direkte Anfragen oder Mundpropaganda. Ein Lead, der über eine KI-Empfehlung kommt, hat bereits Vertrauen. Der konvertiert 3–5x besser als ein zufälliger Google-Klick. Weniger Traffic, bessere Conversion, gleicher oder höherer Umsatz.',
  },
  {
    q: 'Stimmt die Gartner-Prognose von 50 % Traffic-Verlust wirklich?',
    a: 'Gartner prognostiziert in „Predicts 2025: Search and AI", dass Marken bis 2028 über 50 % ihres organischen Traffics durch KI-gestützte Suche verlieren werden. Die Prognose bezieht sich auf informationsbasierte Suchanfragen — also genau die Anfragen, die KI-Systeme am besten beantworten können. Transaktionale Suchen (z. B. „Nike Air Max kaufen") sind weniger betroffen. Die Tendenz bestätigen auch Daten von SparkToro und Semrush: Der Anteil der Zero-Click-Suchen steigt seit Jahren kontinuierlich.',
  },
  {
    q: 'Welche KPIs sollte ich statt Traffic messen?',
    a: 'Die wichtigsten neuen KPIs sind: Brand Mention Frequency (wie oft wirst du in KI-Antworten erwähnt), Citation Rate (wie oft wirst du als Quelle verlinkt), AI Referral Quality (Conversion Rate von KI-Traffic vs. organischem Traffic), Share of Voice in KI-Systemen (dein Anteil an KI-Erwähnungen vs. Wettbewerber) und Branded Search Volume (wie oft wird direkt nach deiner Marke gesucht). Tools wie Ahrefs Brand Radar, Semrush AI Visibility und Otterly.ai helfen beim Tracking.',
  },
  {
    q: 'Ist Zero-Click nur ein Thema für informationsbasierte Suchanfragen?',
    a: 'Primär ja, aber die Grenze verschiebt sich. Heute beantwortet KI hauptsächlich Wissens- und Vergleichsfragen. Aber Perplexity zeigt bereits Produktempfehlungen mit Affiliate-Links, und Google AI Overviews integrieren Shopping-Ergebnisse. In 2–3 Jahren werden auch transaktionale Anfragen zunehmend Zero-Click. Die Frage ist nicht ob, sondern wann.',
  },
  {
    q: 'Sollte ich aufhören, in SEO zu investieren?',
    a: 'Nein. SEO bleibt relevant — es verändert sich nur. Google liefert nach wie vor den größten Teil des Web-Traffics. Aber du solltest SEO nicht mehr als einzigen Kanal betrachten. Die Kombination aus klassischem SEO und KI-Sichtbarkeit ist die Strategie der Zukunft. Wer nur in SEO investiert, verliert langfristig Traffic. Wer nur in KI investiert, lässt kurzfristig Geld liegen. Die Mischung macht es.',
  },
  {
    q: 'Wie profitieren kleine Unternehmen von der Zero-Click-Zukunft?',
    a: 'Kleine Unternehmen haben einen entscheidenden Vorteil: Authentizität. KI-Systeme bevorzugen einzigartige Perspektiven und echte Erfahrungsberichte gegenüber generischem Content von Großkonzernen. Ein Handwerksbetrieb mit ehrlichen Case Studies und echter Expertise kann in KI-Antworten neben Branchenriesen erscheinen — weil KI Qualität über Quantität stellt. Die Eintrittsbarriere ist niedriger als bei klassischem SEO, wo große Budgets oft den Ausschlag geben.',
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
  headline: 'Zero-Click-Zukunft: Warum deine Website bald keinen Traffic mehr braucht',
  description:
    'Gartner prognostiziert 50 % Traffic-Verlust bis 2028. Warum das kein Weltuntergang ist, sondern eine Chance — und welche neuen KPIs jetzt zählen.',
  image: 'https://aiseo.hamburg/images/wissen/zero-click-zukunft.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/zero-click-zukunft',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Zero-Click-Zukunft' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ZeroClickZukunftPage() {
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
            <li className="text-black font-medium">Zero-Click-Zukunft</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Zero-Click-Zukunft: Warum deine Website bald keinen Traffic mehr braucht
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Du misst Erfolg in Website-Besuchen. KI-Systeme beantworten die Fragen deiner Kunden, ohne sie jemals auf deine Seite zu schicken. Das ist, als würdest du die Besucher eines Ladens zählen, während der Laden nebenan Lieferservice hat.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR — Für die, die keine 50 % ihres Traffics verlieren wollen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Gartner-Prognose: 50 % organischer Traffic weg bis 2028.</strong> Nicht vielleicht. Nicht könnte. Wird. Durch KI-gestützte Suche.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Traffic war nie das Ziel. Umsatz war das Ziel.</strong> Und Umsatz kommt in Zukunft über Vertrauen, nicht über Klicks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Neue KPIs: Brand Mentions, Citation Rate, AI Referral Quality.</strong> Wer noch „Unique Visitors" als Hauptmetrik nutzt, misst die falsche Realität.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Das ist eine Chance, kein Weltuntergang.</strong> Weniger, aber bessere Besucher. Höhere Conversion. Stärkere Marke.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">Wer jetzt handelt, gewinnt.</strong> Wer wartet, bis der Traffic einbricht, hat 2 Jahre verschenkt.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was gerade passiert                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was gerade passiert (und warum dein Google-Analytics-Dashboard lügt)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Über 60 % aller Google-Suchen enden heute ohne einen einzigen Klick.</strong> Der Nutzer bekommt die Antwort direkt in den Suchergebnissen — durch Featured Snippets, Knowledge Panels, People Also Ask, und seit 2024 durch AI Overviews. Tendenz: steil steigend.
          </p>
          <p>
            Und das ist nur Google. Bei ChatGPT, Perplexity und Claude gibt es gar keine Klicks. Die Antwort ist die Antwort. Fertig. Deine Website taucht vielleicht als Quelle auf — aber besucht wird sie nicht. Das ist, als würde ein Restaurantkritiker dein Restaurant empfehlen, aber alle bestellen bei Lieferando.
          </p>
          <p>
            Das Problem ist nicht, dass die Nutzer faul sind. Das Problem ist, dass die Antwort oft ausreicht. Wenn ChatGPT mir in 3 Sekunden erklärt, was Content Marketing ist, warum sollte ich dann noch auf einen 3.000-Wörter-Blogartikel klicken, der mir das Gleiche mit einer 500-Wörter-Einleitung über „die heutige digitale Landschaft" erzählt?
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            SparkToro / Datos (2025): 60 %+ der Google-Suchen enden Zero-Click. Gartner (2024): Bis 2028 verlieren Marken über 50 % ihres organischen Traffics. Das ist keine Prophezeiung — das ist Mathematik.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das alte vs neue Modell                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Altes Modell vs. Neues Modell: Wie Marketing sich gerade umdreht
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          20 Jahre lang hat Online-Marketing nach dem gleichen Rezept funktioniert. Jetzt ändert sich das Rezept. Und wer weiter Gulasch kocht, während alle Sushi wollen, hat ein Problem.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Phase</th>
                <th className="py-3 pr-4 text-sm font-semibold text-gray-500">Altes Modell (Click-based)</th>
                <th className="py-3 text-sm font-semibold text-brand-accent">Neues Modell (Citation-based)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Einstieg</td>
                <td className="py-3 pr-4">Google-Impression</td>
                <td className="py-3">KI-Erwähnung / Brand Mention</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Interaktion</td>
                <td className="py-3 pr-4">Klick auf Website</td>
                <td className="py-3">Nutzer vertraut der KI-Empfehlung</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Vertrauensaufbau</td>
                <td className="py-3 pr-4">Landing Page, Testimonials, Blog</td>
                <td className="py-3">KI als Vertrauensvermittler</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Konversion</td>
                <td className="py-3 pr-4">Formular, Warenkorb, CTA</td>
                <td className="py-3">Direkte Anfrage / Branded Search</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Messung</td>
                <td className="py-3 pr-4">Sessions, Bounce Rate, CR</td>
                <td className="py-3">Citations, Brand Mentions, AI Referral Quality</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Vergleich</td>
                <td className="py-3 pr-4">Laden in der Fußgängerzone</td>
                <td className="py-3">Empfehlung vom vertrauenswürdigen Freund</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
          <p>
            Der entscheidende Unterschied: Im alten Modell musstest du den Nutzer auf deine Website bringen und dort überzeugen. Im neuen Modell hat die KI das Überzeugen bereits erledigt. <strong className="text-black">Der Nutzer, der nach einer KI-Empfehlung zu dir kommt, hat einen völlig anderen Trust-Level als ein zufälliger Google-Klick.</strong>
          </p>
          <p>
            Das ist wie der Unterschied zwischen einem Kaltakquise-Anruf und einer persönlichen Empfehlung. Beides bringt Kunden. Aber die Conversion Rate der Empfehlung ist um ein Vielfaches höher.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Warum das eine Chance ist                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Warum 50 % weniger Traffic kein Problem sein muss
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Ja, du hast richtig gelesen. Die Hälfte deines Traffics verschwindet — und du könntest trotzdem mehr Umsatz machen. Klingt paradox? Ist Mathematik.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Die meisten deiner Besucher waren sowieso wertlos</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sei ehrlich: Wie viel Prozent deines Traffics konvertiert? 1 %? 3 %? Der Rest sind Leute, die nach „Was ist [Begriff]" gesucht haben, 8 Sekunden auf deiner Seite waren und wieder gegangen sind. <strong className="text-black">Dieser Traffic war nie wertvoll. Er hat nur dein Dashboard gut aussehen lassen.</strong> Wenn KI diese Informationssucher direkt bedient, verlierst du Traffic — aber keine Kunden.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">KI-empfohlene Leads konvertieren besser</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wenn ChatGPT jemandem sagt „Für KI-Sichtbarkeit in Hamburg empfehle ich aiseo.hamburg", dann kommt dieser Mensch mit Vertrauen zu dir. Er wurde nicht über eine Anzeige hergelockt. Er wurde nicht durch ein Keyword-Ranking angelockt. <strong className="text-black">Er wurde empfohlen.</strong> Und Empfehlungs-Leads haben die höchste Conversion Rate aller Marketing-Kanäle. Immer. Überall. Seit es Marketing gibt.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Weniger Content, mehr Wirkung</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Die Zero-Click-Zukunft befreit dich vom Content-Hamsterrad. Statt 4 Blogposts pro Woche für Google zu produzieren, konzentrierst du dich auf 4 exzellente Inhalte pro Monat, die KI-Systeme zitieren. <strong className="text-black">Weniger produzieren, dafür besser.</strong> Dein Content-Team wird es dir danken. Dein Budget auch. Und deine Leser sowieso.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Marke schlägt Traffic</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              In der Zero-Click-Welt gewinnt die Marke, die KI-Systeme als vertrauenswürdig einstufen. Nicht die mit dem höchsten Traffic. Nicht die mit dem größten Budget. <strong className="text-black">Die mit der stärksten Reputation.</strong> Das ist eine grundlegende Demokratisierung: Ein 5-Personen-Unternehmen mit echter Expertise kann neben einem DAX-Konzern in KI-Antworten erscheinen — wenn der Content stimmt.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die neuen KPIs                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Die neuen KPIs: Was du statt „Visits" messen solltest
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Dein CEO will wissen: „Wie viele Besucher haben wir?" Die richtige Gegenfrage 2027: „Wie oft empfiehlt KI unsere Marke?" Hier sind die KPIs, die in der Zero-Click-Zukunft zählen.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. Brand Mention Frequency</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-2">
              <strong className="text-black">Wie oft wird deine Marke in KI-Antworten erwähnt?</strong> Frage ChatGPT, Perplexity und Google AI regelmäßig nach Themen in deiner Branche. Dokumentiere, ob und wie du erwähnt wirst. Tools wie Ahrefs Brand Radar automatisieren das.
            </p>
            <p className="text-sm text-gray-500">Frequenz: Wöchentlich messen, monatlich reporten.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Citation Rate</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-2">
              <strong className="text-black">Wie oft wird deine Website als Quelle verlinkt?</strong> Perplexity zeigt Quellen mit Link. Google AI Overviews verlinken auf Quellen. Diese Zitierungen sind das neue Backlink-Äquivalent — nur wertvoller, weil sie direkt im Antwortkontext stehen.
            </p>
            <p className="text-sm text-gray-500">Frequenz: Monatlich messen. Vergleich mit Wettbewerbern.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. AI Referral Quality</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-2">
              <strong className="text-black">Wie gut konvertiert Traffic von KI-Quellen?</strong> In GA4 kannst du KI-Referral-Traffic isolieren (Perplexity, ChatGPT-Plugins, Google AI). Vergleiche Conversion Rate, Time on Site und Bounce Rate mit organischem Traffic. Spoiler: KI-Traffic konvertiert fast immer besser.
            </p>
            <p className="text-sm text-gray-500">Frequenz: Monatlich. Segmentiert nach KI-Quelle.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Share of Voice in KI-Systemen</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-2">
              <strong className="text-black">Wie groß ist dein Anteil an KI-Erwähnungen im Vergleich zu Wettbewerbern?</strong> Wenn für dein Thema 10 Fragen in ChatGPT gestellt werden, bei wie vielen taucht deine Marke auf? Und bei wie vielen der Wettbewerber? Das ist dein Share of Voice in der KI-Welt.
            </p>
            <p className="text-sm text-gray-500">Frequenz: Quartalsweise. Systematischer Prompt-Test über 50–100 relevante Fragen.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. Branded Search Volume</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-2">
              <strong className="text-black">Wie oft suchen Menschen direkt nach deiner Marke?</strong> Wenn KI dich empfiehlt, googeln die Leute danach. Ein steigendes Branded Search Volume ist der stärkste Indikator dafür, dass deine KI-Sichtbarkeit wirkt. Messbar in Google Search Console und Ahrefs.
            </p>
            <p className="text-sm text-gray-500">Frequenz: Monatlich. Langfristiger Trend ist wichtiger als einzelne Monate.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was du jetzt tun solltest                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was du jetzt tun solltest (statt in Panik zu verfallen)
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Die Zero-Click-Zukunft kommt nicht übermorgen. Sie ist schon da. Aber du hast noch Zeit, dich richtig zu positionieren. Hier sind 6 konkrete Schritte — sortiert nach Priorität, nicht nach Schwierigkeit.
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                1. Akzeptiere, dass Traffic als KPI stirbt
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Das ist der schwierigste Schritt, weil er psychologisch ist. 20 Jahre lang war „mehr Traffic = besser". Das stimmt nicht mehr. <strong className="text-black">Mehr Zitierungen = besser.</strong> Sobald du das internalisiert hast, fallen die nächsten Schritte leichter. Und ja, du musst das auch deinem Chef erklären. Viel Spaß. Zeig ihm diesen Artikel. Vielleicht hilft es.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                2. Richte KI-Monitoring ein
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Du kannst nicht optimieren, was du nicht misst. Starte mit einem wöchentlichen manuellen Check: 10 relevante Fragen in ChatGPT und Perplexity eingeben, Ergebnisse dokumentieren. Parallel: Ahrefs Brand Radar oder Semrush AI Visibility einrichten. <strong className="text-black">Wer nicht misst, rät. Wer rät, verliert.</strong>
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                3. Content für Zitierbarkeit optimieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Answer-First-Struktur, Quellenangaben, Schema-Markup, FAQ-Sektionen. Dein Content muss nicht für Klicks optimiert sein — er muss so gut sein, dass KI ihn als Quelle empfiehlt. <strong className="text-black">Ein einziger zitierbarer Satz ist mehr wert als 10.000 Wörter Fließtext.</strong>
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                4. Markenaufbau priorisieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                In der Zero-Click-Welt gewinnt die Marke, die bekannt und vertrauenswürdig ist. PR, Thought Leadership, Kooperationen, Gastbeiträge in Fachmedien — alles, was deine Marke stärkt, stärkt auch deine KI-Sichtbarkeit. <strong className="text-black">KI-Systeme empfehlen bevorzugt Marken, die sie aus vielen vertrauenswürdigen Quellen kennen.</strong>
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                5. Conversion-Pfade neu denken
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wenn weniger Leute auf deine Website kommen, müssen die, die kommen, besser konvertieren. Optimiere für Branded Search: Wenn jemand „[deine Marke] Kontakt" googelt, muss das Ergebnis perfekt sein. <strong className="text-black">Die Website wird vom Akquisetool zum Conversion-Tool.</strong> Weniger Content für Discovery, mehr für Decision.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                6. Diversifiziere — und zwar jetzt
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wer 80 % seines Traffics von Google bekommt, hat ein Klumpenrisiko, das jeden Risikomanager zum Weinen bringen würde. Baue KI-Sichtbarkeit als zweiten Kanal auf. <strong className="text-black">SEO + KI-Sichtbarkeit + Social + E-Mail + Community.</strong> Nicht alles auf einmal. Aber auch nicht alles auf eine Karte.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Wer verliert, wer gewinnt                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Wer verliert, wer gewinnt: Die Zero-Click-Gewinner und -Verlierer
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Verlierer</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Content-Farmen mit 1.000 dünnen Blogposts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Unternehmen, die „Visits" als einzigen KPI messen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Affiliate-Seiten ohne eigene Marke oder Expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Wer ausschließlich auf Google-Rankings setzt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>SEO-Agenturen, die „mehr Traffic" versprechen, ohne über KI nachzudenken</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-brand-accent mb-4">Gewinner</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Marken mit echter Expertise und einzigartigen Insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Unternehmen, die Zitierbarkeit über Traffic stellen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Nischen-Experten mit tiefem, strukturiertem Content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Wer mehrere Kanäle bespielt und nicht nur Google</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Kleine Unternehmen mit authentischen Erfahrungsberichten</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm mt-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Die Zero-Click-Zukunft bestraft Mittelmäßigkeit und belohnt Substanz. Das ist die beste Nachricht seit Jahren — wenn du auf der richtigen Seite stehst.
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
      {/*  Weiterführende Guides                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Weiterführende Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="/wissen/ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit: Der komplette Guide
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Was KI-Sichtbarkeit bedeutet und wie du sie systematisch aufbaust.
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
              Alle Tools und Methoden, um deine KI-Präsenz zu tracken — statt nur Traffic zu zählen.
            </p>
          </a>

          <a
            href="/wissen/was-ist-geo"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Was ist GEO?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generative Engine Optimization — die Optimierung für KI-gestützte Suchmaschinen.
            </p>
          </a>

          <a
            href="/wissen/ki-markenwahrnehmung"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Markenwahrnehmung
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wie KI-Systeme deine Marke wahrnehmen — und wie du das beeinflusst.
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
            Bereit für die Zero-Click-Zukunft?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde heraus, wie KI-Systeme deine Marke heute empfehlen — und was du tun musst, damit sie es morgen tun. Kostenlose Analyse. Ehrliche Antworten.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Sichtbarkeits-Analyse" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

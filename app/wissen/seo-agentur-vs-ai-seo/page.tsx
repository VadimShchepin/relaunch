import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Muss ich meine SEO-Agentur kündigen?',
    a: 'Nicht unbedingt. Wenn deine Agentur gute technische SEO-Arbeit leistet, kannst du sie behalten — und AI SEO als zweiten Kanal dazunehmen. Das Problem entsteht erst, wenn deine Agentur behauptet, dass KI-Sichtbarkeit „nicht nötig" sei oder „automatisch mitkommt". Dann ist es Zeit für ein ernstes Gespräch. Oder einen Wechsel.',
  },
  {
    q: 'Kann ich AI SEO parallel zu klassischem SEO machen?',
    a: 'Ja, und genau das empfehlen wir. AI SEO baut auf gutem technischem SEO auf. Saubere Seitenstruktur, schnelle Ladezeiten, valides Schema-Markup — all das hilft beiden Kanälen. Der Unterschied liegt in der Content-Strategie: Statt nur für Google-Rankings zu optimieren, optimierst du zusätzlich für KI-Zitierbarkeit. Das eine schließt das andere nicht aus.',
  },
  {
    q: 'Was kostet AI SEO im Vergleich zu klassischem SEO?',
    a: 'Klassische SEO-Agenturen berechnen typischerweise 2.000–10.000 Euro pro Monat. AI SEO liegt bei 500–3.000 Euro monatlich, je nach Umfang. Der entscheidende Unterschied: AI SEO liefert messbare Ergebnisse in 4–8 Wochen statt 6–12 Monaten. Du investierst weniger und siehst schneller, ob es funktioniert. Das reduziert dein finanzielles Risiko erheblich.',
  },
  {
    q: 'Wie schnell sehe ich Ergebnisse mit AI SEO?',
    a: 'Die ersten KI-Erwähnungen können bereits nach 2–4 Wochen erscheinen, besonders bei Perplexity und Google AI Overviews. Messbare Business-Ergebnisse — also Leads und Anfragen über KI-Kanäle — sehen wir typischerweise nach 6–10 Wochen. Zum Vergleich: Klassisches SEO braucht 6–12 Monate für vergleichbare Ergebnisse.',
  },
  {
    q: 'Funktioniert AI SEO auch für kleine Unternehmen?',
    a: 'Gerade für kleine Unternehmen. KI-Systeme bevorzugen echte Expertise und Authentizität gegenüber großen Budgets. Ein Handwerksbetrieb mit echten Case Studies und spezifischem Fachwissen kann in KI-Antworten neben Branchenriesen erscheinen — ohne deren Millionenbudgets. Die Eintrittsbarriere ist niedriger als bei klassischem SEO, wo Domain Authority und Backlink-Profile entscheiden.',
  },
  {
    q: 'Was passiert, wenn ich gar nichts mache?',
    a: 'Dann passiert das, was immer passiert, wenn sich eine Branche verändert und man zuschaut: Du verlierst schrittweise Marktanteile an Wettbewerber, die früher handeln. Laut Gartner verlieren Marken bis 2028 über 50 % ihres organischen Traffics durch KI-gestützte Suche. Wer jetzt nicht in KI-Sichtbarkeit investiert, wird in 2–3 Jahren feststellen, dass die Wettbewerber alle KI-Kanäle besetzt haben. Aufholen ist dann 5x teurer als jetzt anfangen.',
  },
  {
    q: 'Woran erkenne ich, ob meine aktuelle Agentur AI SEO kann?',
    a: 'Stell drei einfache Fragen: 1) Haben wir eine llms.txt-Datei? 2) Wie oft wird unsere Marke in ChatGPT und Perplexity erwähnt? 3) Welche KI-spezifischen KPIs tracken wir? Wenn die Antwort dreimal „Nein" oder „Weiß ich nicht" lautet, kann deine Agentur kein AI SEO. Das ist nicht böswillig — die meisten Agenturen haben sich einfach noch nicht damit beschäftigt.',
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
  headline: 'Deine SEO-Agentur liefert Rankings, aber keine Kunden — Warum AI SEO der nächste Schritt ist',
  description:
    'Du zahlst 2.000–10.000 Euro im Monat für SEO, aber KI-Systeme ignorieren dich komplett. Warum klassisches SEO allein nicht mehr reicht — und was AI SEO stattdessen liefert.',
  image: 'https://aiseo.hamburg/images/wissen/seo-agentur-vs-ai-seo.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-04-03',
  dateModified: '2026-04-03',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/seo-agentur-vs-ai-seo',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'SEO-Agentur vs. AI SEO' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SeoAgenturVsAiSeoPage() {
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
            <li className="text-black font-medium">SEO-Agentur vs. AI&nbsp;SEO</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Deine SEO-Agentur liefert Rankings, aber keine Kunden
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Du zahlst 3.000&nbsp;&euro; im Monat f&uuml;r Position&nbsp;7 bei Google. Dein Wettbewerber zahlt weniger und wird von ChatGPT empfohlen. Einer von euch hat die Zukunft verstanden.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR &mdash; F&uuml;r alle, die keine Lust haben, 3.000&nbsp;&euro; monatlich zu verbrennen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">&Uuml;ber 60&nbsp;% aller Google-Suchen enden ohne Klick.</strong> Deine Rankings bringen dir Sichtbarkeit auf einer B&uuml;hne, auf der niemand mehr zuschaut.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">KI-Systeme ignorieren die meisten Websites komplett.</strong> Kein Schema-Markup, keine llms.txt, keine strukturierten Daten &ndash; f&uuml;r ChatGPT existierst du nicht.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Deine SEO-Agentur misst Rankings, nicht Umsatz.</strong> Monatliche Reports mit gr&uuml;nen Pfeilen sind beruhigend. Sie bezahlen nur keine Rechnungen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">AI SEO ersetzt klassisches SEO nicht &ndash; es vervollst&auml;ndigt es.</strong> Aber wer nur auf Google setzt, spielt ein Spiel, dessen Regeln sich gerade &auml;ndern.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das 3.000-Euro-Problem                                      */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Das 3.000-Euro-Problem
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Stell dir vor, du mietest ein Schaufenster in der teuersten Einkaufsstra&szlig;e der Stadt. Jeden Monat &uuml;berweist du 3.000&nbsp;&euro; Miete. Die Auslage ist perfekt dekoriert. Das Problem: <strong className="text-black">Die Stra&szlig;e ist leer, weil alle online bestellen.</strong>
          </p>
          <p>
            Genau das passiert gerade mit klassischem SEO. Du bezahlst f&uuml;r Rankings auf einer Plattform, die zunehmend Antworten liefert, ohne dass jemand klickt. Google AI&nbsp;Overviews beantworten die Frage direkt. Perplexity fasst die besten Quellen zusammen. ChatGPT gibt eine fertige Antwort. Dein Position-7-Ranking? Unsichtbar unter dem Falz, hinter einem KI-Textblock, den niemand wegscrollt.
          </p>
          <p>
            (Spoiler: Die einzigen, die sich &uuml;ber dein Ranking freuen, sind die Leute, die dir die monatliche Rechnung schicken.)
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-8">
          <p className="text-lg font-semibold text-black mb-2">Die Zahlen, die deine Agentur nicht im Report hat:</p>
          <ul className="space-y-2 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">60&nbsp;%+ Zero-Click-Suchen</strong> &ndash; Nutzer bekommen die Antwort direkt in den Google-Ergebnissen (SparkToro / Datos, 2025)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">Google Ads CPC steigt 10&ndash;15&nbsp;% pro Jahr</strong> &ndash; Selbst bezahlte Sichtbarkeit wird immer teurer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">AI&nbsp;Overviews auf 84&nbsp;% der informationellen Suchen</strong> &ndash; Dein organisches Ergebnis rutscht unter den KI-Block</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
              <span><strong className="text-black">Gartner: 50&nbsp;% Traffic-Verlust bis 2028</strong> &ndash; Das ist keine Prophezeiung, das ist Mathematik</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Du zahlst also 3.000&nbsp;&euro; im Monat daf&uuml;r, auf einer Suchergebnisseite sichtbar zu sein, die zunehmend irrelevant wird. Das ist, als w&uuml;rdest du einen Fitnesstrainer bezahlen, der dir beibringt, schneller zu laufen &ndash; <strong className="text-black">w&auml;hrend dein Wettbewerber gerade fliegen gelernt hat.</strong>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was deine SEO-Agentur dir nicht sagt                        */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was deine SEO-Agentur dir nicht sagt
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Nicht aus B&ouml;swilligkeit. Sondern weil sie es entweder selbst nicht wissen &ndash; oder weil es ihrem Gesch&auml;ftsmodell widerspricht. F&uuml;nf unbequeme Wahrheiten.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-3">1. Rankings ohne Klicks sind wertlos</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Position&nbsp;5 bei Google klingt gut im monatlichen Report. Aber wenn ein AI&nbsp;Overview die Antwort direkt &uuml;ber den organischen Ergebnissen zeigt, scrollt niemand zu deinem Ergebnis. <strong className="text-black">Das ist, als h&auml;ttest du einen Tisch im besten Restaurant der Stadt &ndash; aber das Restaurant hat den Eingang zugemauert.</strong> Dein Ranking existiert. Dein Traffic nicht.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-3">2. KI-Systeme ignorieren deine Website komplett</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Frag ChatGPT nach einem Dienstleister in deiner Branche. Taucht dein Unternehmen auf? Vermutlich nicht. KI-Systeme brauchen andere Signale als Google: strukturierte Daten, eine llms.txt-Datei, Schema-Markup, zitierbare Inhalte. <strong className="text-black">Deine SEO-Agentur hat nichts davon eingerichtet, weil es nicht zu ihrem klassischen Playbook geh&ouml;rt.</strong> F&uuml;r ChatGPT, Perplexity und Claude bist du unsichtbar.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-3">3. Dein &bdquo;Content Marketing&ldquo; ist f&uuml;r Menschen, nicht f&uuml;r KI</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deine Agentur produziert Blogartikel mit 1.500 W&ouml;rtern, einer 300-Wort-Einleitung &uuml;ber „die heutige digitale Landschaft" und drei Stock-Fotos von L&auml;cheln-mit-Laptop. Sch&ouml;n f&uuml;r Menschen. Irrelevant f&uuml;r KI. <strong className="text-black">KI braucht Answer-First-Struktur, Quellenangaben und Fakten &ndash; keine SEO-optimierten Fl&uuml;stertexte.</strong>
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-3">4. Backlink-Profile beeindrucken ChatGPT nicht</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deine Agentur hat 200 Backlinks aufgebaut. Respekt. Google mag das. ChatGPT? Ist das v&ouml;llig egal. KI-Systeme bewerten Vertrauen &uuml;ber Erw&auml;hnungen in seri&ouml;sen Quellen, Konsistenz der Informationen und Autorit&auml;tssignale &ndash; <strong className="text-black">nicht &uuml;ber Backlinks von Branchenverzeichnissen, die kein Mensch jemals besucht hat.</strong> (Spoiler: Die meisten Backlinks deiner Agentur kommen genau daher.)
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-3">5. Monatliche Reports zeigen Rankings, nicht Business Impact</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Der PDF-Report kommt p&uuml;nktlich am Ersten. Sch&ouml;ne Grafiken. Gr&uuml;ne Pfeile nach oben. Keyword-Positionen verbessert. Fantastisch. Aber wo steht, <strong className="text-black">wie viele zahlende Kunden &uuml;ber organische Suche gekommen sind?</strong> Wo steht die Conversion Rate? Wo steht der ROI deiner 36.000&nbsp;&euro; Jahresinvestition? Nirgends. Weil Rankings keine Rechnungen bezahlen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Vergleichstabelle                                           */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Klassisches SEO vs. AI&nbsp;SEO &ndash; Der ehrliche Vergleich
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                <th className="py-3 pr-4 text-sm font-semibold text-gray-500">Klassisches SEO</th>
                <th className="py-3 text-sm font-semibold text-brand-accent">AI&nbsp;SEO</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Monatliche Kosten</td>
                <td className="py-3 pr-4">2.000&ndash;10.000&nbsp;&euro;</td>
                <td className="py-3">500&ndash;3.000&nbsp;&euro;</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Zeit bis Ergebnis</td>
                <td className="py-3 pr-4">6&ndash;12 Monate</td>
                <td className="py-3">4&ndash;8 Wochen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Nachhaltigkeit</td>
                <td className="py-3 pr-4">Abh&auml;ngig von Google-Updates</td>
                <td className="py-3">Stabil &uuml;ber mehrere KI-Plattformen</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Traffic-Quelle</td>
                <td className="py-3 pr-4">Google organische Suche</td>
                <td className="py-3">ChatGPT, Perplexity, Google&nbsp;AI, Claude, Gemini</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Wer sieht dich</td>
                <td className="py-3 pr-4">Nutzer, die scrollen (immer weniger)</td>
                <td className="py-3">Nutzer, die KI-Empfehlungen vertrauen (immer mehr)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Lead-Qualit&auml;t</td>
                <td className="py-3 pr-4">Gemischt (viel Informationssuche)</td>
                <td className="py-3">Hoch (KI empfiehlt gezielt)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Zukunftssicherheit</td>
                <td className="py-3 pr-4">Sinkt mit jedem KI-Update</td>
                <td className="py-3">Steigt mit jedem KI-Update</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Vergleich</td>
                <td className="py-3 pr-4">Schaufenster in leerer Stra&szlig;e</td>
                <td className="py-3">Pers&ouml;nliche Empfehlung vom Vertrauensmenschen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
          <p>
            Bevor du jetzt denkst „Na klar, der will mir AI SEO verkaufen" &ndash; ja, stimmt. Aber die Tabelle lügt nicht. <strong className="text-black">Frag deine aktuelle Agentur nach ihrem ROI-Nachweis.</strong> Nicht nach Rankings. Nach Euro rein, Euro raus. Die Stille wird vielsagend sein.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Case Study Referenz                                         */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was das in der Praxis bedeutet
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
          <p>
            Ein GaLaBau-Unternehmen aus Hamburg. Vorher: Klassische SEO-Agentur, 2.500&nbsp;&euro; im Monat, vage Ergebnisse nach 8 Monaten. Nachher: AI-SEO-Strategie mit Google-Ads-Optimierung f&uuml;r 529&nbsp;&euro; monatlich.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug mb-4">
            Das Ergebnis: 728 messbare Aktionen pro Monat bei 529&nbsp;&euro; Adspend.
          </p>
          <ul className="space-y-2 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Anrufe, Routenplanungen, Website-Klicks &ndash; alles nachweisbar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>5x weniger Budget als die vorherige SEO-Agentur</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>ROI in 7 Wochen statt „vielleicht in 6 Monaten"</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
          <p>
            Das ist kein Einzelfall. Das ist Mathematik. <strong className="text-black">Weniger Budget, bessere Ergebnisse, schnellerer ROI.</strong> Weil AI SEO nicht nach dem Prinzip „mehr Content = mehr Rankings = irgendwann mal Kunden" funktioniert, sondern nach dem Prinzip „richtige Sichtbarkeit zur richtigen Zeit am richtigen Ort".
          </p>
          <p>
            (Spoiler: Deine SEO-Agentur wird dir erkl&auml;ren, dass man das nicht vergleichen kann. Kann man. Haben wir gerade.)
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Elefant im Raum                                             */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der Elefant im Raum: Kannst du beides machen?
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Ja. Und du solltest.</strong>
          </p>
          <p>
            AI SEO ist kein Ersatz f&uuml;r gutes technisches SEO. Es ist die Weiterentwicklung. Saubere Website-Struktur, schnelle Ladezeiten, valides Schema-Markup &ndash; all das hilft beiden Kan&auml;len. Ein Haus braucht ein solides Fundament. Klassisches SEO ist das Fundament. <strong className="text-black">AI SEO ist das zweite Stockwerk, das du darauf baust.</strong>
          </p>
          <p>
            Das Problem ist nicht, dass du SEO machst. Das Problem ist, dass du <em>nur</em> SEO machst. Das ist, als w&uuml;rdest du ein Restaurant betreiben und nur Laufkundschaft bedienen &ndash; w&auml;hrend dein Nachbar zus&auml;tzlich Lieferando, Uber&nbsp;Eats und einen eigenen Online-Shop hat.
          </p>
          <p>
            Google ist immer noch die gr&ouml;&szlig;te Suchmaschine der Welt. Aber sie ist nicht mehr die einzige. Und die Regeln auf Google selbst &auml;ndern sich gerade fundamental. <strong className="text-black">Wer 2026 nur f&uuml;r klassische Google-Rankings optimiert, spielt Schach, w&auml;hrend die anderen l&auml;ngst 3D-Schach spielen.</strong>
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-black mb-3">Die Formel, die funktioniert:</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-black">Technisches SEO (Fundament)</strong> + <strong className="text-black">Content f&uuml;r KI-Zitierbarkeit</strong> + <strong className="text-black">Strukturierte Daten &amp; llms.txt</strong> + <strong className="text-black">KI-Monitoring</strong> = Sichtbarkeit in Google <em>und</em> in ChatGPT, Perplexity, Claude, Gemini. Zwei Kan&auml;le statt einem. Doppelte Reichweite. Halbes Risiko.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Red Flags                                                   */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Woran du erkennst, dass deine aktuelle Agentur AI&nbsp;SEO nicht kann
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Kein Vorwurf. Die meisten SEO-Agenturen in Deutschland haben sich mit dem Thema noch nicht besch&auml;ftigt. Aber du solltest wissen, ob deine dazugeh&ouml;rt. Hier ist die Checkliste.
        </p>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-black mb-4">Red Flags &ndash; wenn deine Agentur das sagt (oder nicht sagt):</h3>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">&bdquo;KI-Sichtbarkeit kommt automatisch mit guter SEO&ldquo;</strong> &ndash; Falsch. KI-Systeme nutzen andere Ranking-Signale als Google. Ohne gezielte Optimierung passiert nichts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">&bdquo;Wir haben noch keine llms.txt eingerichtet&ldquo;</strong> &ndash; Das ist seit 2025 ein Standard f&uuml;r KI-Crawler. Wenn deine Agentur das nicht kennt, kennt sie AI SEO nicht.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">Der monatliche Report enth&auml;lt keine KI-KPIs</strong> &ndash; Keine Brand Mentions in KI-Systemen, keine Citation Rate, kein AI Referral Tracking. Nur Google-Rankings und Traffic.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">&bdquo;ChatGPT ist nicht relevant f&uuml;r B2B&ldquo;</strong> &ndash; 78&nbsp;% der B2B-Entscheider nutzen KI-Tools f&uuml;r Recherche (McKinsey, 2025). Deine Agentur lebt in 2022.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">Content wird nach Keyword-Volumen erstellt, nicht nach KI-Relevanz</strong> &ndash; Ein Keyword mit 1.000 monatlichen Suchen bringt nichts, wenn AI Overviews 90&nbsp;% der Klicks fressen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">Kein Schema-Markup f&uuml;r FAQ, HowTo oder Article</strong> &ndash; Strukturierte Daten sind das Fundament, auf dem KI-Systeme Inhalte verstehen. Ohne Markup bist du f&uuml;r KI ein unlesbares Buch.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&#9873;</span>
              <span><strong className="text-black">Die Agentur erw&auml;hnt Perplexity, Claude oder Gemini nicht einmal</strong> &ndash; Wenn der Fokus ausschlie&szlig;lich auf Google liegt, fehlt die H&auml;lfte der digitalen Suchlandschaft.</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mt-8">
          Drei oder mehr dieser Punkte treffen zu? Dann zahlst du f&uuml;r eine Strategie aus 2020 &ndash; <strong className="text-black">zum Preis von 2026.</strong>
        </p>
      </section>

      {/* ============================================================ */}
      {/*  Was AI SEO stattdessen liefert                              */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was AI&nbsp;SEO stattdessen liefert
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Keine vagen Versprechen. Keine „strategischen Beratungsstunden" ohne Output. Konkrete Deliverables, die du anfassen und messen kannst.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">KI-Sichtbarkeits-Audit</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Systematische Pr&uuml;fung: Wie erw&auml;hnen ChatGPT, Perplexity, Claude und Google&nbsp;AI dein Unternehmen? Welche Wettbewerber werden stattdessen empfohlen? Wo sind die L&uuml;cken?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Technische KI-Optimierung</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  llms.txt, Schema-Markup (Article, FAQ, HowTo, Organization), strukturierte Daten, robots.txt f&uuml;r KI-Crawler. Alles, was KI-Systeme brauchen, um deine Inhalte zu finden und zu verstehen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Content f&uuml;r KI-Zitierbarkeit</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Answer-First-Struktur, quellenbasierte Aussagen, zitierbare Kernsätze, FAQ-Sektionen. Content, der sowohl Menschen als auch KI-Systeme &uuml;berzeugt &ndash; statt 1.500 W&ouml;rter SEO-F&uuml;lltext.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">KI-Monitoring &amp; Reporting</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  W&ouml;chentliches Tracking: Brand Mentions, Citation Rate, AI Referral Quality, Share of Voice in KI-Systemen. <strong className="text-black">Kein Report ohne Business Impact.</strong> Jede Zahl hat einen Euro-Bezug.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Multi-Plattform-Sichtbarkeit</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Optimierung f&uuml;r Google, ChatGPT, Perplexity, Claude, Gemini und Google AI Overviews gleichzeitig. <strong className="text-black">Nicht ein Kanal, sondern sechs.</strong> Weil Klumpenrisiko keine Strategie ist.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-accent font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">ROI-Nachweis ab Woche&nbsp;1</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Kein „wir brauchen 6 Monate, bis wir erste Ergebnisse sehen". Erste messbare Verbesserungen in KI-Erw&auml;hnungen nach 2&ndash;4 Wochen. Business-relevante Leads nach 6&ndash;10 Wochen. <strong className="text-black">Wenn nach 8 Wochen nichts passiert, stimmt etwas nicht &ndash; und wir sagen dir das.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Der Moment der Wahrheit                                     */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der Moment der Wahrheit: Ein einfacher Test
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            &Ouml;ffne ChatGPT. Tippe eine Frage ein, die deine Kunden typischerweise stellen w&uuml;rden, bevor sie bei dir kaufen. Zum Beispiel: <em>&bdquo;Welche [deine Branche]-Anbieter in [deiner Stadt] sind empfehlenswert?&ldquo;</em>
          </p>
          <p>
            <strong className="text-black">Taucht dein Unternehmen in der Antwort auf?</strong>
          </p>
          <p>
            Falls ja: Gratulation, du bist in der Minderheit. Falls nein: Dein Wettbewerber, der dort genannt wird, bekommt gerade die Kunden, die eigentlich zu dir geh&ouml;ren. Jeden Tag. 24 Stunden. Ohne einen Cent f&uuml;r Werbung zu bezahlen.
          </p>
          <p>
            Jetzt mach dasselbe mit Perplexity. Und mit Google &ndash; schau, ob ein AI&nbsp;Overview &uuml;ber deinem organischen Ergebnis steht.
          </p>
          <p>
            Das ist deine neue Realit&auml;t. <strong className="text-black">Nicht das PDF mit den gr&uuml;nen Pfeilen, das am Ersten im Postfach liegt.</strong>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          H&auml;ufig gestellte Fragen
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
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Weiterf&uuml;hrende Guides
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
            href="/wissen/zero-click-zukunft"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Zero-Click-Zukunft
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Warum deine Website bald keinen Traffic mehr braucht &ndash; und welche KPIs stattdessen z&auml;hlen.
            </p>
          </a>

          <a
            href="/wissen/ki-sichtbarkeit-kosten"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit: Was kostet das?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transparente Preise, ROI-Rechner und ehrliche Vergleiche mit klassischem SEO.
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
              llms.txt, Schema-Markup, robots.txt &ndash; die technische Grundlage f&uuml;r KI-Empfehlungen.
            </p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            Lass deine KI-Sichtbarkeit pr&uuml;fen &ndash; kostenlos und ohne Verpflichtung
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde in 48 Stunden heraus, ob ChatGPT, Perplexity und Google&nbsp;AI dein Unternehmen empfehlen &ndash; oder deinen Wettbewerber. Ehrliche Analyse. Keine Verkaufspitch. Wenn AI SEO f&uuml;r dich keinen Sinn macht, sagen wir dir das.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Sichtbarkeits-Analyse" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

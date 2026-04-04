import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was genau ist KI-Sichtbarkeit f\u00fcr Dienstleister?',
    a: 'KI-Sichtbarkeit bedeutet, dass dein Unternehmen von ChatGPT, Perplexity, Claude und Google AI als vertrauensw\u00fcrdiger Anbieter empfohlen wird, wenn potenzielle Kunden nach deiner Dienstleistung fragen. Die KI nennt typischerweise nur 2\u20134 Anbieter pro Anfrage \u2014 der Rest existiert f\u00fcr den Suchenden nicht. F\u00fcr Dienstleister mit hohen Auftragsvolumen (5.000\u201350.000\u00a0\u20ac pro Mandat) kann eine einzige zus\u00e4tzliche KI-Empfehlung den gesamten Monatsumsatz ver\u00e4ndern.',
  },
  {
    q: 'Warum empfiehlt ChatGPT meinen Wettbewerber und nicht mich?',
    a: 'KI-Systeme bewerten drei Dinge: Wie klar ist deine Expertise kommuniziert (Spezialisierung statt Bauchladen), wie konsistent bist du \u00fcber verschiedene Quellen erw\u00e4hnt (Website, Branchenportale, Fachpublikationen, Bewertungen) und wie gut kann die KI deine Informationen extrahieren (strukturierte Daten, klare Website-Architektur). Dein Wettbewerber macht mindestens eines davon besser als du.',
  },
  {
    q: 'Welche Dienstleister profitieren am meisten von KI-Sichtbarkeit?',
    a: 'Alle Dienstleister mit hohen Auftragsvolumen und langer Kundenbeziehung: Steuerberater, Architekten, Unternehmensberater, Rechtsanw\u00e4lte, IT-Dienstleister, Agenturen, Finanzberater und Coaches. Je h\u00f6her der durchschnittliche Mandatswert, desto extremer der ROI einer einzigen KI-Empfehlung. Ein Steuerberater, der ein Unternehmen mit 50 Mitarbeitern gewinnt, hat die Investition in KI-Sichtbarkeit f\u00fcr Jahre amortisiert.',
  },
  {
    q: 'Wie schnell sehe ich Ergebnisse bei der KI-Sichtbarkeit?',
    a: 'Bei der Live-Websuche (Perplexity, ChatGPT mit Bing-Integration) k\u00f6nnen erste Ergebnisse nach 2\u20136 Wochen sichtbar sein. F\u00fcr die Aufnahme in KI-Trainingsdaten dauert es bis zum n\u00e4chsten Modell-Update (3\u20136 Monate). Der entscheidende Punkt: Bei Dienstleistern reicht ein einziger gewonnener Mandant, um die gesamte Investition zu refinanzieren.',
  },
  {
    q: 'Reicht meine bestehende Website f\u00fcr KI-Sichtbarkeit?',
    a: 'Wahrscheinlich nicht in der aktuellen Form. Die meisten Dienstleister-Websites sind digitale Visitenkarten: \u201e\u00dcber uns\u201c, \u201eLeistungen\u201c als Aufz\u00e4hlung, ein Kontaktformular. KI-Systeme brauchen spezifische Leistungsseiten, FAQ-Bereiche mit konkreten Antworten, Schema.org-Markup, Fallstudien mit messbaren Ergebnissen und klare Autorit\u00e4tssignale. Die gute Nachricht: Du brauchst keine neue Website \u2014 du musst die bestehende strategisch erweitern.',
  },
  {
    q: 'Was kostet KI-Sichtbarkeit f\u00fcr Dienstleister?',
    a: 'Die Grundlagen (Google Business, Bewertungsmanagement, Website-Struktur) kannst du selbst umsetzen. Professionelle KI-SEO-Betreuung f\u00fcr Dienstleister beginnt typischerweise bei 1.500\u20133.000\u00a0\u20ac monatlich. Bei einem durchschnittlichen Mandatswert von 5.000\u201310.000\u00a0\u20ac reicht ein zus\u00e4tzlicher Mandant pro Monat, um die Investition 3\u20135-fach zur\u00fcckzuverdienen.',
  },
  {
    q: 'Funktioniert KI-Sichtbarkeit auch ohne lokalen Bezug?',
    a: 'Ja. W\u00e4hrend lokale Dienstleister (Steuerberater Hamburg, Architekt M\u00fcnchen) von lokaler KI-Sichtbarkeit profitieren, funktioniert das Prinzip auch f\u00fcr \u00fcberregionale Berater und Agenturen. Entscheidend ist dann nicht der Standort, sondern die thematische Spezialisierung: \u201eBerater f\u00fcr Digitalisierung Mittelstand\u201c oder \u201eAgentur f\u00fcr B2B-Leadgenerierung SaaS\u201c.',
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD schemas                                                   */
/* ------------------------------------------------------------------ */

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'KI-Sichtbarkeit f\u00fcr Dienstleister: Vom unsichtbaren Experten zum empfohlenen Anbieter',
  description: 'Warum ChatGPT deinen Wettbewerber empfiehlt und nicht dich. 5 Schritte f\u00fcr Steuerberater, Architekten, Berater und Agenturen zur KI-Sichtbarkeit mit ROI-Rechnung.',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg',
  },
  publisher: {
    '@type': 'Organization',
    name: 'aiseo.hamburg',
    url: 'https://aiseo.hamburg',
  },
  datePublished: '2026-04-03',
  dateModified: '2026-04-03',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-dienstleister',
  },
  inLanguage: 'de',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit' },
    { '@type': 'ListItem', position: 3, name: 'KI-Sichtbarkeit f\u00fcr Dienstleister', item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-dienstleister' },
  ],
};

/* ================================================================== */
/*  Page                                                              */
/* ================================================================== */

export default function KiSichtbarkeitDienstleisterPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">

        {/* -------------------------------------------------------- */}
        {/*  Hero                                                    */}
        {/* -------------------------------------------------------- */}
        <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <nav className="mb-8 text-sm text-gray-400">
            <a href="/" className="hover:text-brand-accent transition-colors">Startseite</a>
            <span className="mx-2">/</span>
            <a href="/wissen/ki-sichtbarkeit" className="hover:text-brand-accent transition-colors">Wissen</a>
            <span className="mx-2">/</span>
            <span className="text-gray-600">KI-Sichtbarkeit f&uuml;r Dienstleister</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            KI-Sichtbarkeit f&uuml;r Dienstleister:<br />
            Vom unsichtbaren Experten zum empfohlenen Anbieter
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Du bist seit 15&nbsp;Jahren der beste Steuerberater in deiner Stadt. Deine Mandanten lieben dich.
            Aber wenn jemand ChatGPT fragt &ldquo;Welcher Steuerberater f&uuml;r Freiberufler in Hamburg?&rdquo;,
            empfiehlt die KI deinen Wettbewerber. Den mit der h&auml;sslicheren Website. Aber der besseren
            KI-Sichtbarkeit.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Von Vadim Shchepin &middot; AI SEO Specialist &middot; 3.&nbsp;April&nbsp;2026 &middot; Lesedauer ca. 12&nbsp;Min.
          </p>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  TL;DR                                                   */}
        {/* -------------------------------------------------------- */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">TL;DR &ndash; Das Wichtigste in 30&nbsp;Sekunden</p>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">1.</span>
                <span>Dienstleister haben die h&ouml;chsten Ticket-Sizes (2.000&ndash;50.000&nbsp;&euro; pro Mandant). <strong className="text-black">Eine einzige KI-Empfehlung kann deinen Monat retten.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">2.</span>
                <span>ChatGPT empfiehlt pro Anfrage nur 2&ndash;4 Anbieter. Der Rest existiert f&uuml;r den Suchenden nicht.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">3.</span>
                <span>Die meisten Dienstleister sind KI-unsichtbar, weil sie auf Empfehlungen und Google-Rankings setzen &ndash; beides wird von KI gefressen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">4.</span>
                <span>5 konkrete Schritte machen dich vom unsichtbaren Experten zum empfohlenen Anbieter.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 flex-shrink-0">5.</span>
                <span>ROI-Rechnung: Bei 5.000&ndash;10.000&nbsp;&euro; Mandatswert refinanziert sich KI-Sichtbarkeit in Wochen, nicht Monaten.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Das Dienstleister-Paradox                               */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Das Dienstleister-Paradox: Unsichtbarer Experte mit vollem Terminkalender
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Du bist gut. Richtig gut sogar. Deine Mandanten empfehlen dich weiter, dein Terminkalender
              ist voll, und du denkst: <strong className="text-black">&ldquo;Wozu brauche ich diese
              KI-Geschichte?&rdquo;</strong>
            </p>
            <p>
              Das ist, als w&uuml;rdest du als Herzchirurg in einem fensterlosen Keller operieren und dich
              wundern, warum die Patienten zum Typen mit dem Glaspalast gehen. Nicht weil er besser ist.
              Sondern weil sie ihn <em>finden</em>.
            </p>
            <p>
              Das Problem: Dein Empfehlungsnetzwerk hat ein Verfallsdatum. Nicht heute. Nicht morgen.
              Aber schneller, als dir lieb ist.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-8">
            <p className="font-semibold text-black mb-2">Die unbequeme Wahrheit</p>
            <p className="text-gray-700 leading-relaxed">
              Wenn ein potenzieller Mandant ChatGPT fragt &ldquo;Bester Steuerberater f&uuml;r Freiberufler
              Hamburg&rdquo; und du nicht in der Antwort auftauchst &ndash; dann existierst du f&uuml;r
              diese Person nicht. Egal wie viele Empfehlungen du auf deiner Website hast.
              Egal wie viele Auszeichnungen an deiner Wand h&auml;ngen. <strong className="text-black">Die
              KI kennt dich nicht. Also empfiehlt sie dich nicht.</strong>
            </p>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Und hier kommt der paradoxe Teil: Genau die Dienstleister, die am meisten von KI-Empfehlungen
              profitieren w&uuml;rden, ignorieren das Thema am konsequentesten. Steuerberater, Architekten,
              Unternehmensberater, Rechtsanw&auml;lte &ndash; sie alle verlassen sich auf ihr Netzwerk.
            </p>
            <p>
              (Spoiler: Dein Netzwerk fragt auch die KI. Nur sagt es dir nicht.)
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Warum die KI deinen Wettbewerber empfiehlt              */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Warum die KI deinen Wettbewerber empfiehlt (und nicht dich)
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              ChatGPT w&uuml;rfelt nicht. Perplexity ratet nicht. Und Google AI Overviews zieht keine
              Namen aus dem Hut. <strong className="text-black">KI-Systeme empfehlen nach Daten.</strong>
              Und dein Wettbewerber hat bessere Daten.
            </p>
            <p>
              Das ist, als w&uuml;rdest du bei einer Weinverkostung den besten Wein mitbringen &ndash;
              aber das Etikett vergessen. Der Sommelier empfiehlt den mittelmä&szlig;igen Bordeaux mit
              dem beeindruckenden Etikett. Weil er schlicht nicht wei&szlig;, was in deiner Flasche ist.
            </p>
          </div>

          {/* Comparison table */}
          <div className="my-10 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black w-1/2">Was KI-Systeme &uuml;ber dich wissen</th>
                  <th className="py-3 pl-4 text-sm font-semibold text-brand-accent w-1/2">Was sie wissen sollten</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-[15px] leading-relaxed">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">&ldquo;Steuerberater in Hamburg&rdquo; &ndash; einer von 800</td>
                  <td className="py-3 pl-4">&ldquo;Steuerberater spezialisiert auf Freiberufler, 15&nbsp;Jahre Erfahrung, 200+ Mandanten, Fachautor&rdquo;</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Eine Seite: &ldquo;Unsere Leistungen&rdquo; (Aufz&auml;hlung)</td>
                  <td className="py-3 pl-4">Eigene Leistungsseiten mit FAQ, Prozessbeschreibung, Preisrahmen und Fallstudien</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">3 Google-Bewertungen von 2019</td>
                  <td className="py-3 pl-4">40+ Bewertungen mit inhaltlichem Feedback und professionellen Antworten</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Keine strukturierten Daten</td>
                  <td className="py-3 pl-4">ProfessionalService Schema, FAQ Schema, LocalBusiness Schema</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Null Fachpublikationen, null Erw&auml;hnungen</td>
                  <td className="py-3 pl-4">Gastbeitr&auml;ge, Branchenverzeichnisse, Fachportale, Kammer-Eintr&auml;ge</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">&ldquo;Kontaktieren Sie uns&rdquo; &ndash; Ende</td>
                  <td className="py-3 pl-4">Content, der KI-Fragen direkt beantwortet und als Quelle zitiert werden kann</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Siehst du das Muster? Es geht nicht darum, wer der bessere Steuerberater, Architekt oder
              Berater ist. <strong className="text-black">Es geht darum, wer der KI die besseren Signale
              liefert.</strong> Und das ist eine rein technisch-strategische Frage.
            </p>
            <p>
              (Die gute Nachricht: Das kann man &auml;ndern. Die schlechte: Dein Wettbewerber macht es
              vielleicht gerade.)
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Branchenspezifische Beispiele                           */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            So suchen Mandanten in der KI &ndash; branchenspezifisch
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
            <p>
              Jede Branche hat ihre eigenen KI-Suchmuster. Hier siehst du, was potenzielle Mandanten
              tats&auml;chlich in ChatGPT und Perplexity tippen &ndash; und warum du bei den meisten
              Anfragen nicht auftauchst.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-3">Steuerberater</h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-medium text-gray-800">Typische KI-Anfragen:</span>{' '}
                  &ldquo;Bester Steuerberater f&uuml;r Freiberufler Hamburg&rdquo; &middot;
                  &ldquo;Steuerberater f&uuml;r GmbH-Gr&uuml;ndung&rdquo; &middot;
                  &ldquo;Welcher Steuerberater kennt sich mit Kryptow&auml;hrungen aus?&rdquo;
                </p>
                <p>
                  <span className="font-medium text-brand-accent">Das Problem:</span>{' '}
                  Die KI empfiehlt Kanzleien, die f&uuml;r diese Nischen eigene Leistungsseiten
                  haben. Deine Seite &ldquo;Unsere Leistungen: Einkommensteuer, Umsatzsteuer,
                  Lohnbuchhaltung...&rdquo; gibt der KI null Differenzierung.
                  Das ist, als w&uuml;rdest du auf einer Jobmesse einen Sticker tragen mit
                  &ldquo;Ich kann Sachen&rdquo;.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-3">Architekten</h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-medium text-gray-800">Typische KI-Anfragen:</span>{' '}
                  &ldquo;Architekt f&uuml;r energetische Sanierung&rdquo; &middot;
                  &ldquo;Architekt Dachgeschossausbau Hamburg&rdquo; &middot;
                  &ldquo;Welcher Architekt macht KfW-Effizienzhaus?&rdquo;
                </p>
                <p>
                  <span className="font-medium text-brand-accent">Das Problem:</span>{' '}
                  Architekten leben vom Portfolio. Aber die KI kann deine Bilder nicht lesen &ndash;
                  sie braucht Projektbeschreibungen mit Kontext: Ort, Umfang, F&ouml;rderprogramm,
                  Ergebnis. Ein Portfolio ohne Text ist f&uuml;r die KI ein leeres Blatt.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-3">Unternehmensberater</h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-medium text-gray-800">Typische KI-Anfragen:</span>{' '}
                  &ldquo;Berater f&uuml;r Digitalisierung Mittelstand&rdquo; &middot;
                  &ldquo;Strategieberatung f&uuml;r Familienunternehmen&rdquo; &middot;
                  &ldquo;Welcher Berater hilft bei der Nachfolgeplanung?&rdquo;
                </p>
                <p>
                  <span className="font-medium text-brand-accent">Das Problem:</span>{' '}
                  Berater-Websites sind die K&ouml;nigsklasse der Inhaltsleere. &ldquo;Wir
                  begleiten Sie bei der Transformation.&rdquo; &ldquo;Wir denken ganzheitlich.&rdquo;
                  &ldquo;Wir schaffen Mehrwert.&rdquo; Die KI liest das und denkt: Okay, dieser
                  Mensch macht... <em>irgendetwas</em>. N&auml;chster.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-3">Rechtsanw&auml;lte</h3>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-medium text-gray-800">Typische KI-Anfragen:</span>{' '}
                  &ldquo;Anwalt f&uuml;r Arbeitsrecht K&uuml;ndigung&rdquo; &middot;
                  &ldquo;Fachanwalt Mietrecht Hamburg Mietminderung&rdquo; &middot;
                  &ldquo;Welcher Anwalt hilft bei Abfindungsverhandlung?&rdquo;
                </p>
                <p>
                  <span className="font-medium text-brand-accent">Das Problem:</span>{' '}
                  Kanzleien, die auf anwalt.de, JUVE und in Fachzeitschriften pr&auml;sent sind,
                  werden von der KI als vertrauensw&uuml;rdiger eingestuft. Deine Website allein
                  reicht nicht &ndash; die KI will Konsistenz &uuml;ber mehrere Quellen.
                  <em> (Ja, auch die IHK z&auml;hlt.)</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Warum Empfehlungsnetzwerke sterben                      */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Warum dein Empfehlungsnetzwerk ein Ablaufdatum hat
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              &ldquo;Ich lebe von Empfehlungen, das hat immer funktioniert.&rdquo;
            </p>
            <p>
              Stimmt. Hat es. Aber die Empfehlungskette bricht gerade.
            </p>
            <p>
              Fr&uuml;her hat dein zufriedener Mandant seinem Schwager deinen Namen genannt.
              Der Schwager hat dich angerufen. Fertig. <strong className="text-black">Heute
              googelt der Schwager deinen Namen, liest drei Bewertungen und fragt dann noch
              schnell ChatGPT, ob es bessere Alternativen gibt.</strong>
            </p>
            <p>
              Das ist, als w&uuml;rdest du einen Freund zum Essen empfehlen, und der fragt
              trotzdem noch Google Maps nach dem n&auml;chstbesseren Restaurant. Weil er es
              kann. Weil es 5&nbsp;Sekunden dauert. Weil die KI ihm eine Begr&uuml;ndung liefert.
            </p>
            <p>
              Drei Dinge passieren gleichzeitig:
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 my-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-2">Google frisst dein Ranking</h3>
              <p className="text-gray-600 text-base">
                AI Overviews beantworten informationelle Fragen direkt. Der Klick auf deine
                Website f&auml;llt weg. Gartner prognostiziert 50&nbsp;% Traffic-Verlust bis 2028.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-2">KI ersetzt Empfehlungen</h3>
              <p className="text-gray-600 text-base">
                &ldquo;Welchen Steuerberater empfiehlst du?&rdquo; wird nicht mehr dem Nachbarn
                gestellt, sondern ChatGPT. Und ChatGPT hat eine Antwort. Immer.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-2">Mandanten validieren alles</h3>
              <p className="text-gray-600 text-base">
                Selbst wenn jemand dich empfiehlt &ndash; der potenzielle Mandant pr&uuml;ft bei
                der KI gegen. Bist du dort unsichtbar, w&auml;chst der Zweifel.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Die Ticket-Size-Logik                                   */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Die Ticket-Size-Logik: Warum KI-Sichtbarkeit f&uuml;r Dienstleister absurd profitabel ist
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Ein Online-Shop f&uuml;r Handyh&uuml;llen braucht 500 KI-Empfehlungen, um seine
              Investition zur&uuml;ckzuverdienen. <strong className="text-black">Du brauchst
              eine.</strong> Vielleicht zwei.
            </p>
            <p>
              Das ist der unfaire Vorteil von High-Ticket-Dienstleistern. Lass uns rechnen.
            </p>
          </div>

          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 my-8 shadow-sm">
            <p className="text-sm font-bold text-brand-accent mb-4 uppercase tracking-wider">ROI-Rechnung f&uuml;r Dienstleister</p>
            <div className="space-y-4 text-gray-800">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Durchschnittlicher Mandatswert (Jahresumsatz)</span>
                <span className="font-semibold text-black">5.000&ndash;10.000&nbsp;&euro;</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Monatliche KI-SEO-Investition</span>
                <span className="font-semibold text-black">1.500&ndash;3.000&nbsp;&euro;</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Ben&ouml;tigte neue Mandanten f&uuml;r Break-Even</span>
                <span className="font-semibold text-black">1 pro Monat</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Realistischer ROI bei 2 zus&auml;tzlichen Mandanten/Monat</span>
                <span className="font-semibold text-brand-accent">300&ndash;500&nbsp;%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Break-Even-Zeitraum</span>
                <span className="font-semibold text-brand-accent">2&ndash;6 Wochen</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Und jetzt der Teil, den die meisten Dienstleister &uuml;bersehen: Ein Mandant bleibt
              nicht einen Monat. <strong className="text-black">Ein Steuerberater-Mandant bleibt
              durchschnittlich 7&ndash;10 Jahre.</strong> Ein Architekt bekommt nach dem ersten
              Projekt Folgeauftr&auml;ge. Ein Unternehmensberater wird zum Stammberater.
            </p>
            <p>
              Der Lifetime Value eines einzigen KI-gewonnenen Mandanten liegt bei
              50.000&ndash;200.000&nbsp;&euro;. F&uuml;r eine monatliche Investition von 1.500&nbsp;&euro;.
            </p>
            <p>
              (Das ist, als w&uuml;rdest du f&uuml;r 20&nbsp;&euro; Lotto spielen und jedes Mal
              gewinnen. Nur dass es kein Gl&uuml;ck ist, sondern Strategie.)
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  5 Schritte                                              */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            5 Schritte vom unsichtbaren Experten zum empfohlenen Anbieter
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Kein theoretisches Framework. Kein &ldquo;es kommt drauf an&rdquo;. F&uuml;nf Schritte,
            die du (oder dein Team) in den n&auml;chsten 8&nbsp;Wochen umsetzen kannst.
          </p>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex gap-5">
              <div className="text-brand-accent font-bold text-2xl mt-0.5 flex-shrink-0 w-10">01</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-3">Spezialisierung sichtbar machen &ndash; nicht nur leben</h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    Du bist spezialisiert. Aber deine Website sagt: &ldquo;Wir bieten umfassende
                    Beratung.&rdquo; Das ist, als w&uuml;rdest du als Herzchirurg eine Visitenkarte
                    verteilen mit &ldquo;Ich mach was mit K&ouml;rpern&rdquo;.
                  </p>
                  <p>
                    <strong className="text-black">Erstelle f&uuml;r jede Spezialisierung eine eigene
                    Leistungsseite.</strong> Nicht eine Seite mit Aufz&auml;hlung, sondern echte
                    Unterseiten: /steuerberatung-freiberufler, /steuerberatung-gmbh-gruendung,
                    /steuerberatung-kryptowaehrungen. Jede Seite beantwortet die Fragen, die
                    Mandanten der KI stellen.
                  </p>
                  <p>
                    Minimale Struktur pro Leistungsseite: Was ist das Problem? Was ist dein Ansatz?
                    Was kostet es ungef&auml;hr? F&uuml;r wen ist das relevant? FAQ mit 5&ndash;7
                    konkreten Fragen.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5">
              <div className="text-brand-accent font-bold text-2xl mt-0.5 flex-shrink-0 w-10">02</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-3">Autorit&auml;tssignale aufbauen &ndash; die KI will Beweise</h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    Die KI empfiehlt nicht einfach den Ersten, den sie findet. Sie empfiehlt den,
                    der &uuml;ber mehrere vertrauensw&uuml;rdige Quellen konsistent als Experte
                    best&auml;tigt wird.
                  </p>
                  <p>
                    <strong className="text-black">Deine Quelle-Checkliste:</strong> Google Business
                    Profil (vollst&auml;ndig, mit Fotos und Bewertungen) &middot; Branchenverzeichnis
                    deiner Kammer (IHK, StBK, Architektenkammer) &middot; Fachportale (anwalt.de,
                    JUVE, WhoFinance, Houzz) &middot; Gastbeitr&auml;ge in Fachmedien &middot;
                    LinkedIn mit regelm&auml;&szlig;igen Fachbeitr&auml;gen.
                  </p>
                  <p>
                    Die Formel ist simpel: <strong className="text-black">Je mehr hochwertige
                    Quellen dich konsistent als Experte f&uuml;r Thema&nbsp;X nennen, desto
                    wahrscheinlicher wirst du von der KI empfohlen.</strong> Nicht Quantit&auml;t.
                    Qualit&auml;t und Konsistenz.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5">
              <div className="text-brand-accent font-bold text-2xl mt-0.5 flex-shrink-0 w-10">03</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-3">Fallstudien erstellen &ndash; messbare Ergebnisse statt Floskeln</h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    &ldquo;Wir haben einem Kunden geholfen.&rdquo; Sch&ouml;n. Aber die KI braucht
                    mehr. Sie braucht: Wem? Wobei? Mit welchem Ergebnis? In welchem Zeitraum?
                  </p>
                  <p>
                    <strong className="text-black">Eine gute Fallstudie f&uuml;r KI-Sichtbarkeit:</strong>{' '}
                    Branche des Mandanten, Ausgangslage (konkret, mit Zahlen wenn m&ouml;glich),
                    dein Ansatz (nicht &ldquo;ganzheitliche Beratung&rdquo;, sondern was du
                    tats&auml;chlich gemacht hast), messbares Ergebnis, Zeitraum.
                  </p>
                  <p>
                    Ein Beispiel aus unserer eigenen Praxis: Das Landschaftsbauunternehmen
                    <strong className="text-black"> GL&nbsp;Sommer</strong> kam mit einem
                    SEO-Score von 34/100 zu uns. Nach der Optimierung &ndash; strukturierte Daten,
                    lokale Signale, Content-Architektur &ndash; generiert die Website jetzt
                    <strong className="text-black"> 728 lokale Aktionen pro Monat</strong>.
                    Das sind Anrufe, Routenplanungen und Website-Besuche von Menschen, die aktiv
                    nach genau dieser Dienstleistung suchen.
                  </p>
                  <p>
                    (Und ja, ein weiterer Dienstleister bekam seine ersten KI-Zitierungen innerhalb
                    weniger Wochen nach der Optimierung. Das ist keine Raketenwissenschaft &ndash;
                    es ist Handwerk. Digitales Handwerk.)
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-5">
              <div className="text-brand-accent font-bold text-2xl mt-0.5 flex-shrink-0 w-10">04</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-3">Strukturierte Daten implementieren &ndash; der KI einen Bauplan geben</h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    Strukturierte Daten sind wie ein Organigramm f&uuml;r die KI. Ohne Organigramm
                    muss sie raten, wer du bist und was du machst. Mit Organigramm wei&szlig; sie es.
                  </p>
                  <p>
                    <strong className="text-black">F&uuml;r Dienstleister essenziell:</strong>{' '}
                    ProfessionalService oder LocalBusiness Schema (Adresse, &Ouml;ffnungszeiten,
                    Einzugsgebiet, Bewertungen), Service Schema f&uuml;r jede Leistungsseite,
                    FAQ Schema f&uuml;r Frage-Antwort-Bereiche, Person Schema f&uuml;r den
                    Inhaber/die Berater mit Qualifikationen und Erfahrung.
                  </p>
                  <p>
                    Im Handwerk und bei Dienstleistern machen weniger als 5&nbsp;% der Websites
                    Schema.org richtig. <strong className="text-black">Das ist dein technischer
                    Vorsprung.</strong> F&uuml;nf Minuten Arbeit f&uuml;r deinen Entwickler,
                    Monate Vorsprung gegen&uuml;ber deinen Wettbewerbern.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-5">
              <div className="text-brand-accent font-bold text-2xl mt-0.5 flex-shrink-0 w-10">05</div>
              <div>
                <h3 className="font-semibold text-black text-xl mb-3">Bewertungen strategisch aufbauen &ndash; die neue W&auml;hrung</h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    Bewertungen sind f&uuml;r KI-Systeme das, was Empfehlungsschreiben fr&uuml;her
                    waren: Vertrauensbeweis Nummer eins. Aber nicht irgendwelche Bewertungen.
                  </p>
                  <p>
                    <strong className="text-black">Die KI unterscheidet zwischen:</strong>{' '}
                    &ldquo;Super Berater, 5&nbsp;Sterne&rdquo; (wertlos) und &ldquo;Herr&nbsp;X
                    hat uns bei der GmbH-Gr&uuml;ndung begleitet, die steuerliche Strukturierung
                    hat uns im ersten Jahr &uuml;ber 15.000&nbsp;&euro; gespart&rdquo; (Gold).
                  </p>
                  <p>
                    Inhaltliche Bewertungen mit konkreten Leistungsbeschreibungen sind KI-Futter.
                    Die KI extrahiert daraus: Dieser Berater ist gut bei GmbH-Gr&uuml;ndungen
                    und liefert messbare finanzielle Ergebnisse.
                  </p>
                  <p>
                    <strong className="text-black">Praktisch:</strong> Bitte zufriedene Mandanten
                    nach Abschluss eines Projekts gezielt um eine Bewertung. Gib ihnen
                    Orientierung: &ldquo;Wenn du magst, erw&auml;hne gerne, wobei ich dir geholfen
                    habe und was das Ergebnis war.&rdquo; Antworte auf jede Bewertung innerhalb
                    von 48&nbsp;Stunden &ndash; professionell und mit Substanz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Was Dienstleister falsch machen                         */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Die 4 t&ouml;dlichen Fehler, die Dienstleister bei der KI-Sichtbarkeit machen
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
            <p>
              Bevor du loslegst, hier die Fehler, die ich bei 90&nbsp;% aller Dienstleister-Websites
              sehe. Jeden einzelnen. Immer wieder.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-semibold text-black mb-2">Fehler 1: Die &ldquo;digitale Visitenkarte&rdquo;</p>
              <p className="text-gray-700 leading-relaxed">
                Eine Website mit &ldquo;&Uuml;ber uns&rdquo;, &ldquo;Leistungen&rdquo; und &ldquo;Kontakt&rdquo;.
                Drei Seiten. Null Content. F&uuml;r die KI bist du ein Eintrag im Telefonbuch. Die KI
                empfiehlt keine Telefonbucheintr&auml;ge.
              </p>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-semibold text-black mb-2">Fehler 2: Berater-Deutsch statt Klartext</p>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;Wir begleiten Sie auf Ihrer Reise der digitalen Transformation mit ganzheitlichen
                L&ouml;sungen.&rdquo; Die KI liest das und denkt: Dieser Mensch hat nichts Konkretes
                zu sagen. Und sie hat recht. <strong className="text-black">Schreib, was du tust.
                F&uuml;r wen. Mit welchem Ergebnis. In Deutsch, nicht in Berater-Deutsch.</strong>
              </p>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-semibold text-black mb-2">Fehler 3: Referenzen ohne Substanz</p>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;Unsere Mandanten vertrauen uns.&rdquo; Sch&ouml;n. Aber welche Mandanten?
                In welcher Branche? Mit welchem Problem? Und was war das Ergebnis? Eine Referenz
                ohne Details ist wie ein Lebenslauf ohne Berufserfahrung &ndash; technisch vorhanden,
                praktisch wertlos.
              </p>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-semibold text-black mb-2">Fehler 4: &ldquo;Ich brauch kein Marketing, ich hab Empfehlungen&rdquo;</p>
              <p className="text-gray-700 leading-relaxed">
                Der gef&auml;hrlichste Fehler. Nicht weil Empfehlungen nicht funktionieren &ndash;
                sie tun es. Sondern weil <strong className="text-black">jede Empfehlung heute gegen
                eine KI-Antwort antritt</strong>. Dein Empfehlungsgeber sagt: &ldquo;Geh zu
                Steuerberater M&uuml;ller.&rdquo; Der Empfangene tippt: &ldquo;Steuerberater
                M&uuml;ller vs. Alternativen.&rdquo; Wenn die KI bessere Alternativen findet,
                verlierst du den Mandanten trotz Empfehlung.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Die KI-Sichtbarkeits-Formel f&uuml;r Dienstleister     */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Die KI-Sichtbarkeits-Formel f&uuml;r Dienstleister
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
            <p>
              Es gibt keine Magic Bullet. Aber es gibt eine Formel, die bei jedem Dienstleister
              funktioniert, den ich bisher beraten habe.
            </p>
          </div>

          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-center text-xl md:text-2xl font-semibold text-black mb-6">
              Klare Spezialisierung &times; Konsistente Quellen &times; Strukturierte Daten = KI-Empfehlung
            </p>
            <div className="grid sm:grid-cols-3 gap-5 text-center">
              <div>
                <p className="text-brand-accent font-bold text-lg mb-2">Spezialisierung</p>
                <p className="text-gray-600 text-sm">
                  Eigene Leistungsseiten pro Nische. FAQ mit echten Mandantenfragen. Preisrahmen
                  und Prozessbeschreibungen.
                </p>
              </div>
              <div>
                <p className="text-brand-accent font-bold text-lg mb-2">Konsistenz</p>
                <p className="text-gray-600 text-sm">
                  Gleiche Expertise-Signale auf Website, Google, Branchenportalen, Fachmedien
                  und Bewertungsportalen.
                </p>
              </div>
              <div>
                <p className="text-brand-accent font-bold text-lg mb-2">Struktur</p>
                <p className="text-gray-600 text-sm">
                  Schema.org-Markup, klare URL-Architektur, robots.txt f&uuml;r KI-Crawler,
                  llms.txt f&uuml;r LLM-Training.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
            <p>
              Fehlt ein Faktor, bricht die Gleichung zusammen. Die beste Spezialisierung
              n&uuml;tzt nichts, wenn deine Website keine strukturierten Daten hat. Die besten
              strukturierten Daten n&uuml;tzen nichts, wenn du auf keiner externen Quelle
              erw&auml;hnt wirst. <strong className="text-black">Alle drei Faktoren m&uuml;ssen
              zusammenspielen.</strong>
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Vergleich: Alte vs. neue Welt                           */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Alte Welt vs. neue Welt der Mandantengewinnung
          </h2>

          <div className="my-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black w-1/2">Bisheriger Weg</th>
                  <th className="py-3 pl-4 text-sm font-semibold text-brand-accent w-1/2">KI-Sichtbarkeits-Weg</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-[15px] leading-relaxed">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Empfehlung vom Netzwerk &rarr; Anruf</td>
                  <td className="py-3 pl-4">KI-Empfehlung &rarr; Direkte Anfrage</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Google Ads: 15&ndash;80&nbsp;&euro; pro Klick</td>
                  <td className="py-3 pl-4">KI-Empfehlung: 0&nbsp;&euro; pro Anfrage</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Kaltakquise und Networking-Events</td>
                  <td className="py-3 pl-4">Mandant kommt mit Vertrauen vorqualifiziert</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Branchenbuch-Eintr&auml;ge (Gelbe Seiten, 11880)</td>
                  <td className="py-3 pl-4">KI-Systeme als neues &ldquo;Branchenbuch&rdquo;</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Conversion Rate: 1&ndash;3&nbsp;%</td>
                  <td className="py-3 pl-4">Conversion Rate: 10&ndash;25&nbsp;% (vorqualifizierte Leads)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Der entscheidende Unterschied: Ein Lead, der &uuml;ber eine KI-Empfehlung kommt,
              hat bereits Vertrauen. Die KI hat gesagt: &ldquo;Ich empfehle dir diesen
              Anbieter.&rdquo; <strong className="text-black">Das ist eine Empfehlung von einer
              Instanz, der 400&nbsp;Millionen Menschen vertrauen.</strong> Die Conversion Rate
              ist 3&ndash;5x h&ouml;her als bei einem kalten Google-Klick.
            </p>
            <p>
              (Und ja, das bedeutet weniger Gesamtanfragen, aber bessere. Qualit&auml;t
              schl&auml;gt Quantit&auml;t. Vor allem bei 10.000&nbsp;&euro;-Mandaten.)
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Hamburger Dienstleister                                 */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            KI-Sichtbarkeit f&uuml;r Hamburger Dienstleister
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Hamburg hat &uuml;ber 100.000 Dienstleistungsunternehmen. Von der Ein-Mann-Beratung bis
              zur Gro&szlig;kanzlei. Die lokale KI-Sichtbarkeit ist f&uuml;r die meisten noch
              komplett unbesetzt.
            </p>
            <p>
              <strong className="text-black">Das hei&szlig;t im Klartext:</strong> Wenn du jetzt
              als &ldquo;Steuerberater f&uuml;r Freiberufler in Hamburg-Eppendorf&rdquo; oder
              als &ldquo;Architekt f&uuml;r energetische Sanierung in Hamburg-Altona&rdquo;
              KI-sichtbar wirst, hast du das Feld f&uuml;r dich. Weil deine Wettbewerber noch
              dar&uuml;ber diskutieren, ob sie &uuml;berhaupt eine neue Website brauchen.
            </p>
            <p>
              Hamburgs Stadtteilstruktur ist f&uuml;r KI-SEO ein Geschenk. Jeder Stadtteil ist ein
              eigener Suchcluster. &ldquo;Unternehmensberater Hamburg-Hafen&shy;City&rdquo; ist eine
              andere KI-Anfrage als &ldquo;Unternehmensberater Hamburg-Wandsbek&rdquo;. Und bei
              beiden ist der erste Platz noch frei.
            </p>
          </div>

          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 my-8 shadow-sm">
            <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Hamburger Stadtteil-Clusters f&uuml;r Dienstleister</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 text-sm">
              {[
                'Eppendorf', 'HafenCity', 'Altona', 'Rotherbaum',
                'Winterhude', 'Neustadt', 'Blankenese', 'Ottensen',
                'Wandsbek', 'Barmbek', 'Eimsbüttel', 'Hamburg-Nord',
              ].map((stadtteil) => (
                <div key={stadtteil} className="flex items-center gap-1.5">
                  <span className="text-brand-accent flex-shrink-0">&bull;</span>
                  <span>{stadtteil}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Jeder Stadtteil + Dienstleistung = eigener KI-Cluster. Die meisten davon: unbesetzt.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Zeitplan                                                */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Dein 8-Wochen-Plan zur KI-Sichtbarkeit
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
            <p>
              Keine abstrakten Empfehlungen. Ein konkreter Plan, den du Woche f&uuml;r Woche
              abhaken kannst. Oder dein Team. Oder deine Agentur.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                week: 'Woche 1\u20132',
                title: 'Fundament',
                tasks: 'Google Business Profil vollst\u00e4ndig ausf\u00fcllen. Kammer-Eintrag pr\u00fcfen. NAP-Konsistenz auf allen Plattformen sicherstellen. Schema.org-Markup implementieren (ProfessionalService + LocalBusiness).',
              },
              {
                week: 'Woche 3\u20134',
                title: 'Spezialisierung',
                tasks: 'Leistungsseiten erstellen (eine pro Spezialisierung). FAQ-Bereiche mit 5\u20137 echten Mandantenfragen pro Seite. Preisrahmen und Prozessbeschreibungen erg\u00e4nzen.',
              },
              {
                week: 'Woche 5\u20136',
                title: 'Autorit\u00e4t',
                tasks: 'Branchenportal-Eintr\u00e4ge pflegen (anwalt.de, Houzz, WhoFinance etc.). Ersten Gastbeitrag platzieren. Bewertungskampagne starten: QR-Code auf Rechnung, pers\u00f6nliche Bitte an Top-Mandanten.',
              },
              {
                week: 'Woche 7\u20138',
                title: 'Content & Tracking',
                tasks: '2\u20133 Fallstudien mit messbaren Ergebnissen ver\u00f6ffentlichen. KI-Monitoring starten: regelm\u00e4\u00dfig in ChatGPT und Perplexity nach deinen Keywords suchen. Erste Optimierungsrunde basierend auf Ergebnissen.',
              },
            ].map((phase, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-accent font-bold text-sm">{phase.week}</span>
                  <span className="text-black font-semibold text-lg">{phase.title}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{phase.tasks}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
            <p>
              Nach 8&nbsp;Wochen hast du die Grundlage. Nicht perfekt, aber <strong className="text-black">80&nbsp;%
              besser als 95&nbsp;% deiner Wettbewerber</strong>. Und das reicht, um bei der KI
              aufzutauchen. Weil die Messlatte im Dienstleisterbereich so erschreckend niedrig liegt.
            </p>
            <p>
              (Ernsthaft. Ich habe Steuerberater gesehen, deren Website aus 2014 stammt und deren
              letzte Google-Bewertung von 2020 ist. Das ist dein Wettbewerb. Das ist die H&uuml;rde,
              die du &uuml;berspringen musst.)
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  FAQ                                                     */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-12">
            H&auml;ufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            {FAQS.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="font-semibold text-black mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Sources                                                 */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-black mb-4">Quellen</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://ahrefs.com/blog/llm-seo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-accent transition-colors"
                >
                  Ahrefs (2025): LLM SEO &ndash; Brand Mentions Correlation Study
                </a>
              </li>
              <li>
                <a
                  href="https://sparktoro.com/blog/new-research-how-much-traffic-do-ai-tools-send-to-websites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-accent transition-colors"
                >
                  SparkToro / Datos: ChatGPT Traffic- und Marktanteilsanalyse
                </a>
              </li>
              <li>
                <a
                  href="https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-accent transition-colors"
                >
                  Gartner: Predicts 2025 &ndash; Search and AI (Traffic-Prognose)
                </a>
              </li>
              <li>
                <a
                  href="https://platform.openai.com/docs/bots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-accent transition-colors"
                >
                  OpenAI: GPTBot und OAI-SearchBot Dokumentation
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Related Guides                                          */}
        {/* -------------------------------------------------------- */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
          <h3 className="font-semibold text-black text-lg mb-4">Verwandte Guides:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/wissen/ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                KI-Sichtbarkeit: Der komplette Guide
              </p>
              <p className="text-sm text-gray-500">
                Grundlagen, Strategie und Frameworks f&uuml;r Sichtbarkeit in allen KI-Systemen.
              </p>
            </a>
            <a
              href="/wissen/ki-sichtbarkeit-anwaelte"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                KI-Sichtbarkeit f&uuml;r Anw&auml;lte
              </p>
              <p className="text-sm text-gray-500">
                Spezifische Strategien f&uuml;r Kanzleien und Rechtsanw&auml;lte in der KI.
              </p>
            </a>
            <a
              href="/wissen/eeat-ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                E-E-A-T f&uuml;r KI-Sichtbarkeit
              </p>
              <p className="text-sm text-gray-500">
                Wie Erfahrung, Expertise, Autorit&auml;t und Trust KI-Empfehlungen beeinflussen.
              </p>
            </a>
            <a
              href="/wissen/lokale-ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
                Lokale KI-Sichtbarkeit
              </p>
              <p className="text-sm text-gray-500">
                Wie du in deiner Stadt und Region von KI-Systemen empfohlen wirst.
              </p>
            </a>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  CTA                                                     */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
          <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                Finde heraus, ob ChatGPT dich empfiehlt
              </h2>
              <p className="text-lg text-gray-300 mb-4 max-w-2xl leading-relaxed">
                Ich pr&uuml;fe, ob und wie ChatGPT, Perplexity und andere KI-Systeme dich aktuell
                empfehlen &ndash; oder deinen Wettbewerber. Kostenlos, in 48&nbsp;Stunden.
              </p>
              <p className="text-gray-400 mb-8 max-w-2xl">
                F&uuml;r Steuerberater, Architekten, Berater, Rechtsanw&auml;lte und Agenturen in Hamburg.
              </p>
              <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" className="!py-4 !px-8" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

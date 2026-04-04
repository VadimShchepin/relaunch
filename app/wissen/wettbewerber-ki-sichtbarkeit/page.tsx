import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Wie finde ich heraus, ob mein Wettbewerber in KI-Systemen sichtbar ist?',
    a: 'Frag ChatGPT, Perplexity und Google Gemini nach deiner Branche und deinem Standort. Zum Beispiel: \u201EWer ist der beste [deine Branche] in [deine Stadt]?\u201C Wenn dein Wettbewerber erw\u00E4hnt wird und du nicht \u2014 dann hast du deine Antwort. Mach das f\u00FCr 20\u201330 relevante Fragen. Dokumentiere die Ergebnisse. Das ist dein erster KI-Sichtbarkeits-Audit. Kostenlos, aber schmerzhaft ehrlich.',
  },
  {
    q: 'Warum sehe ich diese verlorenen Leads nicht in Google Analytics?',
    a: 'Weil diese Leads nie auf deiner Website waren. Google Analytics trackt Besucher \u2014 aber wenn jemand ChatGPT fragt und die Empfehlung deines Wettbewerbers bekommt, besucht er deine Seite gar nicht erst. Kein Besuch = kein Datenpunkt. Du kannst nicht messen, was nie passiert ist. Deshalb sind diese Leads \u201Eunsichtbar\u201C \u2014 sie existieren in einer Parallelwelt, die dein Analytics-Dashboard nicht kennt.',
  },
  {
    q: 'Wie lange dauert es, bis ich in KI-Antworten erscheine?',
    a: 'Typischerweise 60\u201390 Tage f\u00FCr erste Erw\u00E4hnungen, wenn du es systematisch angehst. Das umfasst: strukturierten Content mit Schema-Markup, Aufbau von E-E-A-T-Signalen, technische Optimierung (llms.txt, robots.txt), und konsistente Markenpr\u00E4senz \u00FCber mehrere Quellen. Ein Hamburger Dienstleister in unserem Portfolio ging von null KI-Erw\u00E4hnungen zu konsistenter Sichtbarkeit in 90 Tagen.',
  },
  {
    q: 'Ist KI-Sichtbarkeit nur f\u00FCr gro\u00DFe Unternehmen relevant?',
    a: 'Im Gegenteil. KI-Systeme bevorzugen authentische Expertise \u00FCber gro\u00DFe Budgets. Ein Handwerksbetrieb mit echten Fallstudien und spezifischem Fachwissen kann in KI-Antworten neben Konzernen erscheinen \u2014 weil KI Qualit\u00E4t und Relevanz \u00FCber Domain Authority stellt. Die Eintrittsbarriere ist niedriger als bei klassischem SEO. Das macht KI-Sichtbarkeit gerade f\u00FCr kleine und mittlere Unternehmen zur gr\u00F6\u00DFten Chance seit Jahren.',
  },
  {
    q: 'Was kostet KI-Sichtbarkeits-Optimierung?',
    a: 'Eine professionelle KI-Sichtbarkeits-Strategie beginnt bei ca. 2.000\u20133.000\u00A0\u20AC monatlich. Aber der ROI ist anders als bei klassischem SEO: Ein einziger Lead, der \u00FCber eine ChatGPT-Empfehlung kommt, hat einen v\u00F6llig anderen Trust-Level und konvertiert 3\u20135x besser als ein zuf\u00E4lliger Google-Klick. Bei einem durchschnittlichen Kundenwert von 5.000\u00A0\u20AC reicht ein zus\u00E4tzlicher Kunde pro Monat, um die Investition zu amortisieren.',
  },
  {
    q: 'Kann ich KI-Sichtbarkeit selbst aufbauen oder brauche ich eine Agentur?',
    a: 'Die Grundlagen kannst du selbst umsetzen: strukturierte Inhalte erstellen, Schema-Markup implementieren, llms.txt und ai.txt einrichten. F\u00FCr eine systematische Strategie mit Wettbewerbsanalyse, laufendem Monitoring und technischer Optimierung lohnt sich professionelle Unterst\u00FCtzung. Der Grund: KI-Algorithmen \u00E4ndern sich schnell, und was gestern funktioniert hat, kann morgen irrelevant sein. Selbst machen = langsamer, aber g\u00FCnstiger. Agentur = schneller, aber Investition.',
  },
  {
    q: 'Ersetzt KI-Sichtbarkeit klassisches SEO?',
    a: 'Nein. KI-Sichtbarkeit erg\u00E4nzt SEO. Google liefert immer noch den gr\u00F6\u00DFten Teil des Web-Traffics. Aber die Verteilung verschiebt sich: Laut SparkToro enden bereits \u00FCber 60\u00A0% aller Google-Suchen ohne Klick, und Gartner prognostiziert 25\u00A0% KI-basierte Suchen bis 2026. Die optimale Strategie kombiniert beides \u2014 klassisches SEO f\u00FCr die heutigen Klicks und KI-Sichtbarkeit f\u00FCr die Empfehlungen von morgen.',
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
  headline: 'Warum dein Wettbewerber Kunden bekommt, die du nie siehst',
  description:
    'Dein Wettbewerber wird von ChatGPT empfohlen. Du nicht. Diese Kunden tauchen nie in deiner Analytik auf — und du wirst es nie erfahren.',
  image: 'https://aiseo.hamburg/images/wissen/wettbewerber-ki-sichtbarkeit.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/wettbewerber-ki-sichtbarkeit',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Wettbewerber KI-Sichtbarkeit' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function WettbewerberKiSichtbarkeitPage() {
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
            <li className="text-black font-medium">Wettbewerber &amp; KI-Sichtbarkeit</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Warum dein Wettbewerber Kunden bekommt, die du nie siehst
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Es gibt Kunden, die dich suchen. Sie fragen ChatGPT. Sie fragen Perplexity. Sie bekommen eine Empfehlung &ndash; aber nicht deine. Und das Schlimmste: Du wirst nie erfahren, dass sie existiert haben.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR &ndash; F&uuml;r die, die keine Kunden an Geister verlieren wollen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">KI-Systeme empfehlen deine Wettbewerber &ndash; und du bekommst es nie mit.</strong> Kein Analytics-Event. Kein Bounce. Einfach: nichts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">&Uuml;ber 60&nbsp;% aller Google-Suchen enden ohne Klick.</strong> Bei ChatGPT und Perplexity gibt es gar keine Klicks. Nur Empfehlungen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Gartner prognostiziert: 25&nbsp;% aller Suchanfragen laufen 2026 &uuml;ber KI.</strong> Das sind Kunden, die du mit klassischem SEO nie erreichst.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Es gibt 5 klare Zeichen, dass dein Wettbewerber bereits KI-sichtbar ist.</strong> Die meisten davon kannst du in 10 Minuten pr&uuml;fen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">Von 0 auf konsistente KI-Sichtbarkeit in 90 Tagen ist m&ouml;glich.</strong> Wenn du jetzt anf&auml;ngst. Nicht n&auml;chstes Quartal.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das Szenario                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Stell dir vor, du verlierst einen Kunden &ndash; und wei&szlig;t es nicht einmal
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Ein Hamburger Selbstst&auml;ndiger sitzt abends auf der Couch. Er braucht einen neuen Steuerberater. Fr&uuml;her h&auml;tte er Google ge&ouml;ffnet. Heute &ouml;ffnet er ChatGPT und tippt: <em>&bdquo;Bester Steuerberater f&uuml;r Selbstst&auml;ndige in Hamburg&ldquo;</em>.
          </p>
          <p>
            ChatGPT empfiehlt 3 Kanzleien. Mit Begr&uuml;ndung. Mit Spezialisierung. Mit Adresse.
          </p>
          <p>
            <strong className="text-black">Deine Kanzlei ist nicht dabei.</strong>
          </p>
          <p>
            Der Selbstst&auml;ndige klickt auf die erste Empfehlung. Ruft am n&auml;chsten Morgen an. Wird Mandant. Zahlt 500&nbsp;&euro; im Monat. F&uuml;r die n&auml;chsten 10 Jahre.
          </p>
          <p>
            Du wirst nie erfahren, dass dieser potenzielle Mandant existiert hat. Er taucht nicht in deiner Google Analytics auf. Nicht in deiner Search Console. Nicht in deiner Bounce Rate. Er war nie auf deiner Website. <strong className="text-black">Er war nirgendwo.</strong>
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-8">
          <p className="text-lg font-semibold text-black leading-snug">
            Das ist kein hypothetisches Szenario. Das passiert gerade. Jeden Tag. In jeder Branche. Und das Perfide daran: Du merkst es nicht, weil es nichts gibt, was du merken k&ouml;nntest. Das ist, als w&uuml;rdest du versuchen, einen Dieb zu fangen, der nie in dein Haus eingebrochen ist &ndash; weil er direkt beim Nachbarn reingegangen ist.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Das Problem mit Analytics                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum dein Analytics-Dashboard l&uuml;gt (und du es nicht merkst)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Du schaust jeden Montag auf dein Google Analytics. Traffic stabil. Bounce Rate okay. Conversion Rate akzeptabel. Alles sieht gut aus.
          </p>
          <p>
            (Spoiler: Ist es nicht.)
          </p>
          <p>
            Das Problem ist nicht, was du in deinem Dashboard siehst. <strong className="text-black">Das Problem ist, was du nicht siehst.</strong> Dein Dashboard zeigt dir die Menschen, die auf deine Website kommen. Es zeigt dir nicht die Menschen, die nie kommen &ndash; weil eine KI sie vorher abgefangen hat.
          </p>
          <p>
            Das ist, als w&uuml;rdest du die Gesundheit deines Restaurants daran messen, wie zufrieden die G&auml;ste sind &ndash; w&auml;hrend du nicht merkst, dass der Laden nebenan einen Lieferservice gestartet hat und 40&nbsp;% der Nachbarschaft nie mehr durch deine T&uuml;r kommt.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            SparkToro / Datos (2025): &Uuml;ber 60&nbsp;% aller Google-Suchen enden ohne einen einzigen Klick. Gartner (2025): Bis 2026 werden 25&nbsp;% aller Suchanfragen &uuml;ber KI-Systeme laufen. Das sind keine Prognosen aus Science-Fiction-Romanen &ndash; das ist n&auml;chstes Jahr.
          </p>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Und hier wird es richtig unangenehm: <strong className="text-black">Die wertvollsten Leads sind oft die, die du nie siehst.</strong> Warum? Weil jemand, der ChatGPT nach einer Empfehlung fragt, kaufbereit ist. Der recherchiert nicht mehr. Der vergleicht nicht 15 Anbieter. Der will eine Antwort &ndash; und er bekommt eine.
          </p>
          <p>
            Nur halt nicht deine.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Sichtbar vs. Unsichtbar Tabelle                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Sichtbar vs. Unsichtbar: Was KI-Sichtbarkeit konkret ver&auml;ndert
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Zwei identische Unternehmen. Gleiche Branche. Gleicher Standort. Gleiches Budget. Eins ist KI-sichtbar. Das andere nicht. Hier ist, was passiert.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Situation</th>
                <th className="py-3 pr-4 text-sm font-semibold text-brand-accent">KI-sichtbar</th>
                <th className="py-3 text-sm font-semibold text-red-500">Unsichtbar</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Kunde fragt ChatGPT</td>
                <td className="py-3 pr-4">Wird empfohlen, bekommt den Lead</td>
                <td className="py-3">Existiert f&uuml;r die KI nicht</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Perplexity-Recherche</td>
                <td className="py-3 pr-4">Als Quelle zitiert mit Link</td>
                <td className="py-3">Nicht erw&auml;hnt, kein Link</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Google AI Overview</td>
                <td className="py-3 pr-4">In der KI-Zusammenfassung sichtbar</td>
                <td className="py-3">Unter dem Fold begraben</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Lead-Qualit&auml;t</td>
                <td className="py-3 pr-4">Vorqualifiziert, hohes Vertrauen</td>
                <td className="py-3">Kaltakquise-Niveau (wenn &uuml;berhaupt)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Conversion Rate</td>
                <td className="py-3 pr-4">3&ndash;5x h&ouml;her als Google-Traffic</td>
                <td className="py-3">Standard 1&ndash;3&nbsp;%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Analytics-Sichtbarkeit</td>
                <td className="py-3 pr-4">KI-Referral-Traffic messbar</td>
                <td className="py-3">Kein Datenpunkt &ndash; Lead war nie da</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Wettbewerbsvorteil</td>
                <td className="py-3 pr-4">W&auml;chst mit jeder KI-Erw&auml;hnung</td>
                <td className="py-3">Schrumpft, ohne es zu merken</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
          <p>
            Siehst du das Muster? <strong className="text-black">Der unsichtbare Wettbewerber verliert nicht sichtbar. Er verliert unsichtbar.</strong> Er sieht seine Zahlen und denkt, alles ist in Ordnung. W&auml;hrend sein Wettbewerber Kunden bekommt, die er nie auf dem Radar hatte.
          </p>
          <p>
            Das ist, als w&uuml;rdest du ein Schachspiel spielen, ohne zu wissen, dass dein Gegner schon drei Z&uuml;ge gemacht hat, w&auml;hrend du noch die Figuren aufstellst.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5 Zeichen                                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          5 Zeichen, dass dein Wettbewerber bereits KI-sichtbar ist
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Du musst nicht raten. Es gibt konkrete Indikatoren. Und die meisten davon kannst du in 10 Minuten &uuml;berpr&uuml;fen. (Die Frage ist, ob du dich traust.)
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                1. ChatGPT erw&auml;hnt ihn &ndash; und dich nicht
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Der offensichtlichste Test: Frag ChatGPT nach deiner Branche und deinem Standort. <em>&bdquo;Wer ist der beste [Branche] in [Stadt]?&ldquo;</em> Wenn dein Wettbewerber erscheint und du nicht &ndash; dann ist das kein Zufall. <strong className="text-black">KI-Systeme empfehlen nicht zuf&auml;llig. Sie empfehlen auf Basis von Daten, Struktur und Reputation.</strong> Dein Wettbewerber hat diese Hausaufgaben gemacht. Du nicht.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                2. Seine Website hat strukturierte Daten, die du nicht hast
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Schema-Markup, FAQ-Sektionen, klare Answer-First-Strukturen, eine <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">llms.txt</code> im Root-Verzeichnis. Das sind keine nerdigen Nice-to-haves. <strong className="text-black">Das sind Signale, die KI-Systemen sagen: &bdquo;Hier gibt es zitierbaren Content.&ldquo;</strong> Schau dir den Quellcode deines Wettbewerbers an. Wenn du dort JSON-LD, FAQPage-Schema und klare Heading-Hierarchien siehst &ndash; dann wei&szlig;t du, warum er sichtbar ist.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                3. Er wird in Perplexity als Quelle zitiert
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Perplexity zeigt seine Quellen transparent. Frag Perplexity nach Themen in deiner Branche. Wenn dein Wettbewerber als Quelle erscheint &ndash; mit Link &ndash; hat er es geschafft. Das ist das neue Backlink-&Auml;quivalent: <strong className="text-black">Eine Perplexity-Zitierung ist wertvoller als 100 Gastbeitr&auml;ge auf mittleren Blogs.</strong> Weil sie direkt im Moment der Kaufentscheidung sichtbar ist.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                4. Sein Branded Search Volume steigt &ndash; deins stagniert
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wenn KI-Systeme eine Marke empfehlen, googeln die Leute danach. Check mit Google Trends oder Ahrefs: Steigt das Suchvolumen f&uuml;r den Markennamen deines Wettbewerbers? <strong className="text-black">Steigendes Branded Search Volume ist der st&auml;rkste Indikator f&uuml;r funktionierende KI-Sichtbarkeit.</strong> Wenn sein Name h&auml;ufiger gesucht wird und deiner nicht &ndash; dann arbeitet KI f&uuml;r ihn und gegen dich.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                5. Er bekommt Kunden, die &bdquo;aus dem Nichts&ldquo; kommen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Frag mal bei deinem Wettbewerber (oder dessen Kunden). Woher kommen seine neuen Mandanten? Wenn die Antwort &ouml;fter &bdquo;Empfehlung&ldquo; oder &bdquo;online gefunden&ldquo; lautet, aber keine spezifische Website genannt wird &ndash; <strong className="text-black">dann kommen sie &uuml;ber KI. Sie wissen es nur selbst nicht.</strong> Der Kunde sagt &bdquo;Ich habe recherchiert&ldquo; und meint &bdquo;Ich habe ChatGPT gefragt&ldquo;. (Spoiler: Das passiert h&auml;ufiger als du denkst.)
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Die unsichtbare Pipeline                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die unsichtbare Pipeline: Wie KI-Leads wirklich funktionieren
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Lass uns das mal auseinandernehmen. Der klassische Marketing-Funnel sieht so aus: Impression &rarr; Klick &rarr; Website-Besuch &rarr; Conversion. Sch&ouml;n linear. Sch&ouml;n messbar. Sch&ouml;n falsch.
          </p>
          <p>
            Der KI-Funnel sieht anders aus: <strong className="text-black">Frage an KI &rarr; Empfehlung &rarr; Vertrauen &rarr; direkte Kontaktaufnahme.</strong> Keine Website dazwischen. Kein Analytics-Event. Kein Tracking-Pixel. Einfach: jemand ruft an oder schreibt eine E-Mail, weil ChatGPT gesagt hat, du bist gut.
          </p>
          <p>
            Das ist, als w&uuml;rdest du einen Laden betreiben und dein bester Verk&auml;ufer steht drau&szlig;en auf der Stra&szlig;e und schickt Kunden rein &ndash; aber du hast vergessen, ihn einzustellen. Er arbeitet f&uuml;r deinen Nachbarn.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 my-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-brand-accent mb-2">60&nbsp;%+</p>
            <p className="text-sm text-gray-600">aller Google-Suchen enden ohne Klick (SparkToro 2025)</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-brand-accent mb-2">25&nbsp;%</p>
            <p className="text-sm text-gray-600">aller Suchen &uuml;ber KI bis 2026 (Gartner 2025)</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-brand-accent mb-2">3&ndash;5x</p>
            <p className="text-sm text-gray-600">h&ouml;here Conversion bei KI-empfohlenen Leads</p>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Was bedeutet das in echten Zahlen? Nehmen wir an, du bist Steuerberater in Hamburg. 100 Menschen fragen jeden Monat ChatGPT nach einem Steuerberater f&uuml;r Selbstst&auml;ndige. (Konservative Sch&auml;tzung.) ChatGPT empfiehlt 3 Kanzleien.
          </p>
          <p>
            <strong className="text-black">Wenn du eine davon bist: ~33 Leads pro Monat. Vorqualifiziert. Kaufbereit. High Trust.</strong>
          </p>
          <p>
            Wenn du keine davon bist: 0 Leads. Null. Nada. Und du wei&szlig;t nicht mal, dass diese 100 Menschen existieren. Dein Dashboard zeigt gr&uuml;n. Dein Umsatz sagt was anderes.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Echte Beispiele                                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Echte Ergebnisse: Was passiert, wenn du KI-sichtbar wirst
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Theorie ist sch&ouml;n. Praxis ist besser. Hier sind drei Beispiele, die zeigen, was KI-Sichtbarkeit konkret bewirkt. (Keine hypothetischen Szenarien. Echte Unternehmen. Echte Zahlen.)
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full">Case Study</span>
              <span className="text-sm text-gray-500">Hamburger Dienstleister</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Von 0 auf konsistente KI-Sichtbarkeit in 90 Tagen</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ein Hamburger Service-Unternehmen hatte exzellente Google-Rankings, aber null Pr&auml;senz in KI-Systemen. Kein ChatGPT. Kein Perplexity. Unsichtbar. Nach einer systematischen KI-Sichtbarkeits-Strategie &ndash; strukturierte Daten, E-E-A-T-Optimierung, zitierbarer Content &ndash; <strong className="text-black">erschien das Unternehmen innerhalb von 90 Tagen konsistent in KI-Empfehlungen f&uuml;r seine Branche und Region.</strong> Die Anfragen &uuml;ber &bdquo;unbekannte Quellen&ldquo; (sprich: KI-Empfehlungen) stiegen um 340&nbsp;%.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full">Case Study</span>
              <span className="text-sm text-gray-500">E-Commerce / K-Beauty</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Organischen Traffic verdoppelt durch KI-optimierten Content</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ein K-Beauty-Shop setzte auf klassisches SEO &ndash; guter Content, gute Backlinks, gute Rankings. Dann wurde der Content f&uuml;r KI-Zitierbarkeit umstrukturiert: Answer-First-Format, FAQ-Schema, klare Produktvergleiche mit Quellenangaben. <strong className="text-black">Ergebnis: Der organische Traffic verdoppelte sich innerhalb von 6 Monaten</strong> &ndash; nicht weil Google den Content besser rankte, sondern weil KI-Systeme (besonders Google AI Overviews und Perplexity) den Shop als Quelle zitierten und neuen Traffic generierten.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full">Case Study</span>
              <span className="text-sm text-gray-500">Lokaler Dienstleister / Entr&uuml;mpelung</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">40 Kunden pro Monat durch KI-Sichtbarkeit</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ein Entr&uuml;mpelungsunternehmen &ndash; keine sexy Branche, keine gro&szlig;en Budgets. Aber konsequente KI-Sichtbarkeits-Arbeit: lokale Strukturdaten, echte Kundenbewertungen, zitierbarer Content zu H&auml;usentr&uuml;mpelungs-Fragen. <strong className="text-black">Ergebnis: 40 qualifizierte Kundenanfragen pro Monat &ndash; der Gro&szlig;teil davon &uuml;ber KI-Empfehlungen und Voice Search.</strong> Der Gesch&auml;ftsf&uuml;hrer sagte: &bdquo;Ich verstehe nicht, woher die Kunden kommen, aber sie kommen.&ldquo; (Spoiler: Wir wussten es.)
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Warum KI nicht zufällig empfiehlt                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum KI nicht zuf&auml;llig empfiehlt (und was das f&uuml;r dich bedeutet)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Vielleicht denkst du: &bdquo;Ist doch Zufall, wen ChatGPT empfiehlt.&ldquo; Nein. Ist es nicht. KI-Systeme empfehlen auf Basis von drei Faktoren &ndash; und keiner davon ist W&uuml;rfel.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 my-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-3">1. Datenpr&auml;senz</h3>
            <p className="text-gray-600 leading-relaxed">
              Wer in den Trainingsdaten und im Live-Web pr&auml;sent ist, wird empfohlen. Wer nicht vorkommt, existiert f&uuml;r die KI nicht. <strong className="text-black">Nicht &bdquo;weniger sichtbar&ldquo;. Nicht existent.</strong> Das ist, als h&auml;ttest du einen Laden ohne Schild, ohne Adresse, ohne Telefonnummer.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-3">2. Strukturierte Signale</h3>
            <p className="text-gray-600 leading-relaxed">
              Schema-Markup, FAQ-Sektionen, klare Heading-Hierarchien, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">llms.txt</code> &ndash; das sind die Signale, die KI-Systemen sagen: <strong className="text-black">&bdquo;Hier ist zitierbarer, vertrauensw&uuml;rdiger Content.&ldquo;</strong> Ohne diese Signale bist du Rauschen im Datenmeer.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-3">3. E-E-A-T-Reputation</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience, Expertise, Authoritativeness, Trustworthiness. KI-Systeme bewerten, ob du echte Expertise hast &ndash; <strong className="text-black">nicht ob du behauptest, sie zu haben.</strong> Echte Fallstudien, echte Autoren, echte Bewertungen. Alles andere ist Dekoration.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Dein Wettbewerber hat das verstanden. Er hat seine Website nicht nur f&uuml;r Google optimiert, sondern f&uuml;r die Art, wie KI Informationen verarbeitet. Er hat zitierbare Antworten geschrieben, w&auml;hrend du noch 2.000-W&ouml;rter-SEO-Texte produzierst, die mit &bdquo;In der heutigen digitalen Welt&ldquo; anfangen. (Spoiler: KI-Systeme hassen diese Einleitungen genauso wie Menschen.)
          </p>
          <p>
            <strong className="text-black">Der Unterschied zwischen KI-sichtbar und KI-unsichtbar ist kein Zufall. Es ist eine bewusste Entscheidung.</strong> Dein Wettbewerber hat sie getroffen. Du noch nicht.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was du verlierst, wenn du wartest                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was du verlierst, wenn du noch ein Quartal wartest
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Lass uns rechnen. Nicht mit Bauchgef&uuml;hl, sondern mit Zahlen.
          </p>
          <p>
            Angenommen, in deiner Branche stellen pro Monat 200 potenzielle Kunden eine relevante Frage an KI-Systeme. (Konservativ. F&uuml;r Branchen wie Steuerberatung, Immobilien oder Handwerk ist die Zahl deutlich h&ouml;her.)
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 my-8">
          <h3 className="text-xl font-semibold text-black mb-4">Einfache Rechnung &ndash; pro Quartal, das du wartest:</h3>
          <ul className="space-y-3 text-lg text-gray-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&bull;</span>
              <span>600 potenzielle KI-Anfragen, bei denen du nicht erw&auml;hnt wirst</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&bull;</span>
              <span>~200 davon h&auml;tten deinen Wettbewerber kontaktiert (Top-3-Empfehlung)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&bull;</span>
              <span>Bei einer Conversion Rate von 10&nbsp;% = 20 verlorene Kunden</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5 shrink-0">&bull;</span>
              <span>Bei einem Kundenwert von 5.000&nbsp;&euro; = <strong className="text-black">100.000&nbsp;&euro; entgangener Umsatz. Pro Quartal.</strong></span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Und das Schlimmste: <strong className="text-black">W&auml;hrend du wartest, wird dein Wettbewerber sichtbarer.</strong> KI-Systeme lernen kontinuierlich. Je l&auml;nger dein Wettbewerber in KI-Antworten erscheint, desto st&auml;rker wird seine Position. Je l&auml;nger du unsichtbar bist, desto schwerer wird es, aufzuholen.
          </p>
          <p>
            Das ist, als w&uuml;rdest du versuchen, einen B&auml;ren mit einer nassen Nudel zu bek&auml;mpfen &ndash; und der B&auml;r wird jeden Tag gr&ouml;&szlig;er.
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mt-8">
          <p className="text-lg font-semibold text-black leading-snug">
            KI-Sichtbarkeit hat einen Compound-Effekt. Fr&uuml;h anfangen = exponentieller Vorteil. Sp&auml;t anfangen = exponentieller Nachteil. Es gibt kein &bdquo;sp&auml;ter machen wir das auch&ldquo;. Es gibt nur &bdquo;jetzt&ldquo; oder &bdquo;zu sp&auml;t&ldquo;.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was du jetzt tun kannst                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was du jetzt tun kannst (in den n&auml;chsten 48 Stunden)
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Keine Panik. Kein 200-Seiten-Strategiepapier. Hier sind 5 konkrete Schritte, die du sofort umsetzen kannst. Heute. Nicht n&auml;chste Woche.
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                1. Mach den 10-Minuten-KI-Check
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                &Ouml;ffne ChatGPT und Perplexity. Stell 10 Fragen, die deine Kunden stellen w&uuml;rden. <em>&bdquo;Wer ist der beste [deine Branche] in [deine Stadt]?&ldquo;</em>, <em>&bdquo;Was kostet [deine Dienstleistung]?&ldquo;</em>, <em>&bdquo;Welche [dein Produkt] sind empfehlenswert?&ldquo;</em> <strong className="text-black">Dokumentiere, ob du erw&auml;hnt wirst. Dokumentiere, wer stattdessen erw&auml;hnt wird.</strong> Das ist dein Baseline-Audit.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                2. Check deinen Wettbewerber
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                &Ouml;ffne den Quellcode seiner Website. Suche nach <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">application/ld+json</code>. Hat er Schema-Markup? FAQ-Sektionen? Eine <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">llms.txt</code>? Wenn ja: Er arbeitet aktiv an KI-Sichtbarkeit. Wenn nein: <strong className="text-black">Du hast noch Zeit, ihn zu &uuml;berholen.</strong> Aber nicht ewig.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                3. Identifiziere deine 5 wichtigsten KI-Fragen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welche 5 Fragen stellen deine Kunden am h&auml;ufigsten? Nicht die Keywords &ndash; die echten Fragen. <em>&bdquo;Was kostet eine Badezimmer-Sanierung in Hamburg?&ldquo;</em> statt <em>&bdquo;Badezimmer Sanierung Hamburg Kosten&ldquo;</em>. <strong className="text-black">F&uuml;r jede dieser 5 Fragen brauchst du eine definitive, zitierbare Antwort auf deiner Website.</strong>
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                4. Rechne deinen Invisible-Lead-Verlust aus
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nimm die Anzahl der KI-Anfragen in deiner Branche (sch&auml;tze konservativ). Multipliziere mit dem Anteil, der an Wettbewerber geht. Multipliziere mit deiner Conversion Rate. Multipliziere mit deinem Kundenwert. <strong className="text-black">Diese Zahl ist das, was du jeden Monat verlierst. Unsichtbar. Unmessbar. Aber real.</strong>
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                5. Hol dir eine professionelle Analyse
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Du kannst die ersten 4 Schritte selbst machen. F&uuml;r eine systematische Strategie brauchst du jemanden, der das t&auml;glich macht. <strong className="text-black">Unsere kostenlose KI-Sichtbarkeitsanalyse zeigt dir in 30 Minuten, wo du stehst, wo dein Wettbewerber steht &ndash; und was du in den n&auml;chsten 90 Tagen tun musst.</strong> Kein Verkaufsgespr&auml;ch. Echte Daten. Ehrliche Einsch&auml;tzung.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Der psychologische Effekt                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum die meisten Unternehmen trotzdem nichts tun werden
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Hier wird es psychologisch. Du liest diesen Artikel und denkst: &bdquo;Klingt schlimm, muss ich mich drum k&uuml;mmern.&ldquo; Dann schlie&szlig;t du den Tab. Morgen hast du es vergessen. N&auml;chste Woche denkst du &bdquo;Irgendwann machen wir das auch.&ldquo;
          </p>
          <p>
            <strong className="text-black">Das ist der Normalfall.</strong> Und genau deshalb ist jetzt der perfekte Zeitpunkt. Weil deine Wettbewerber genauso denken. Die meisten von ihnen.
          </p>
          <p>
            Aber nicht alle.
          </p>
          <p>
            Einer deiner Wettbewerber liest diesen Artikel &ndash; oder einen &auml;hnlichen &ndash; und handelt. Heute. Er bucht eine Analyse. Er &auml;ndert seine Content-Strategie. Er implementiert Schema-Markup. Er f&auml;ngt an, in KI-Systemen sichtbar zu werden.
          </p>
          <p>
            <strong className="text-black">In 90 Tagen bekommt er Kunden, die du nie siehst. In 180 Tagen hat er eine Position, die du nicht mehr einholen kannst. In einem Jahr fragst du dich, warum dein Gesch&auml;ft stagniert, obwohl dein Google-Ranking stabil ist.</strong>
          </p>
          <p>
            Die Ironie: Du wirst nie wissen, dass es an KI-Sichtbarkeit lag. Weil du nie sehen wirst, was du verloren hast.
          </p>
        </div>

        <div className="bg-brand-accent/5 rounded-2xl p-6 md:p-8 mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-black">Der gr&ouml;&szlig;te Wettbewerbsvorteil im KI-Zeitalter ist nicht Technologie. Es ist Geschwindigkeit.</strong> Nicht wer die beste Strategie hat, gewinnt. Sondern wer als Erster handelt. KI-Sichtbarkeit hat einen First-Mover-Advantage &ndash; und der Vorsprung wird gr&ouml;&szlig;er, nicht kleiner.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die unbequeme Wahrheit                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die unbequeme Wahrheit &uuml;ber dein Marketing-Budget
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Du gibst wahrscheinlich 3.000&ndash;10.000&nbsp;&euro; pro Monat f&uuml;r Marketing aus. Google Ads, SEO-Agentur, Social Media, vielleicht ein Newsletter-Tool. Alles sch&ouml;n messbar. Alles sch&ouml;n in Dashboards.
          </p>
          <p>
            Und w&auml;hrenddessen bekommt dein Wettbewerber kostenlose Empfehlungen von der m&auml;chtigsten Suchmaschine, die je gebaut wurde &ndash; <strong className="text-black">und zahlt daf&uuml;r keinen Cent pro Klick.</strong>
          </p>
          <p>
            KI-Empfehlungen sind das neue Word-of-Mouth. Nur schneller. Nur skalierbarer. Und komplett unsichtbar f&uuml;r jeden, der nicht darauf achtet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-black mb-3">Ohne KI-Sichtbarkeit</h3>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>5.000&nbsp;&euro;/Monat Google Ads f&uuml;r Klicks, die zu 97&nbsp;% nicht konvertieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>3.000&nbsp;&euro;/Monat SEO-Agentur f&uuml;r Rankings, die KI-Systeme ignorieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Leads werden teurer, weil der KI-Kanal ungenutzt bleibt</span>
              </li>
            </ul>
          </div>
          <div className="bg-brand-accent/5 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-black mb-3">Mit KI-Sichtbarkeit</h3>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Organische KI-Empfehlungen ohne Cost-per-Click</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Leads mit 3&ndash;5x h&ouml;herer Conversion Rate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Compound-Effekt: Je l&auml;nger sichtbar, desto st&auml;rker die Position</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Die Ironie: <strong className="text-black">Du investierst Tausende in Marketing-Kan&auml;le, die du messen kannst &ndash; und ignorierst den Kanal, der die besten Leads liefert, weil du ihn nicht messen kannst.</strong> Das ist, als w&uuml;rdest du nur in der K&uuml;che nach deinem Schl&uuml;ssel suchen, weil dort das Licht an ist &ndash; obwohl du ihn im Wohnzimmer verloren hast.
          </p>
          <p>
            Die L&ouml;sung ist nicht, dein bestehendes Marketing abzuschalten. Die L&ouml;sung ist, einen Kanal hinzuzuf&uuml;gen, der Leads liefert, die dein Wettbewerber gerade alleine einsammelt.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
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
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
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
            href="/wissen/ki-sichtbarkeit-messen"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              KI-Sichtbarkeit messen
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Alle Tools und Methoden, um deine KI-Pr&auml;senz zu tracken &ndash; statt nur Traffic zu z&auml;hlen.
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
              Warum deine Website bald keinen Traffic mehr braucht &ndash; und welche neuen KPIs jetzt z&auml;hlen.
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
              Wie KI-Systeme deine Marke wahrnehmen &ndash; und wie du das aktiv beeinflussen kannst.
            </p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-4">
            Finde heraus, ob dein Wettbewerber KI-sichtbar ist &ndash; und du nicht
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
            Unsere kostenlose KI-Sichtbarkeitsanalyse zeigt dir in 30 Minuten, wer in deiner Branche von KI-Systemen empfohlen wird. Spoiler: Du willst es wissen. Auch wenn es wehtut.
          </p>
          <Button href="/ai-sichtbarkeit-now" text="Kostenlose KI-Sichtbarkeitsanalyse" primary />
        </div>
      </section>

      <Footer />
    </div>
  );
}

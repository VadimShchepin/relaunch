import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Wie lange dauert es, bis man KI-sichtbar wird?',
    a: 'Die ersten messbaren Ergebnisse sehen wir typischerweise nach 4\u20136 Wochen. Volle KI-Sichtbarkeit \u2014 also Empfehlungen in ChatGPT, Perplexity und Google AI Overviews \u2014 erreichen die meisten Kunden innerhalb von 90 Tagen. Der genaue Zeitraum h\u00e4ngt vom Ausgangszustand ab: Je schlechter die Basis, desto schneller sind die ersten Verbesserungen sichtbar (weil die Messlatte so niedrig liegt).',
  },
  {
    q: 'Ist diese Fallstudie ein echtes Unternehmen?',
    a: 'Diese Fallstudie ist ein Composite Case Study \u2014 sie kombiniert reale, verifizierbare Daten aus mehreren Kundenprojekten zu einer zusammenh\u00e4ngenden Geschichte. Alle Zahlen sind echt, alle Ergebnisse sind echt. Wir haben sie anonymisiert und kombiniert, weil unsere Kunden nicht m\u00f6chten, dass ihre Konkurrenz genau erf\u00e4hrt, was wir gemacht haben. Verst\u00e4ndlich, oder?',
  },
  {
    q: 'Was kostet so eine KI-Sichtbarkeitsoptimierung?',
    a: 'Das h\u00e4ngt vom Umfang ab. Eine technische Basis-Optimierung beginnt bei ca. 2.500\u00a0\u20ac, ein vollst\u00e4ndiges 90-Tage-Programm mit Content-Strategie und laufendem Monitoring liegt zwischen 5.000 und 15.000\u00a0\u20ac. Zum Vergleich: Der Kunde in dieser Fallstudie zahlt jetzt 2,57\u00a0\u20ac pro Klick statt 18\u201320\u00a0\u20ac Marktdurchschnitt. Die Investition hat sich in 7 Wochen amortisiert.',
  },
  {
    q: 'Funktioniert das auch f\u00fcr E-Commerce und nicht nur f\u00fcr Dienstleister?',
    a: 'Ja. Wir haben f\u00fcr einen Online-Shop mit 723 Produkten den organischen Traffic in 90 Tagen verdoppelt \u2014 von praktisch null auf 1.860 Klicks und 78.500 Impressions pro Quartal. E-Commerce hat sogar den Vorteil, dass Produktseiten nat\u00fcrliche Antwortformate f\u00fcr KI-Systeme liefern.',
  },
  {
    q: 'Muss ich meine gesamte Website neu bauen lassen?',
    a: 'Nicht zwingend, aber oft ist es effizienter. Bei dem Kunden in dieser Fallstudie war die bestehende Website so technisch marode (Performance 35/100, SEO-Score 43/100), dass ein Relaunch schneller und g\u00fcnstiger war als die Reparatur. Ob ein Relaunch oder eine Optimierung sinnvoller ist, kl\u00e4ren wir in der kostenlosen Erstanalyse.',
  },
  {
    q: 'Wie messt ihr die KI-Sichtbarkeit?',
    a: 'Wir tracken drei Ebenen: 1) Technische Performance (Lighthouse-Scores, Core Web Vitals, Crawl-Daten), 2) Suchsichtbarkeit (Klicks, Impressions, Rankings via Google Search Console), 3) KI-Pr\u00e4senz (manuelle Tests in ChatGPT, Perplexity, Claude und Gemini mit relevanten Branchenanfragen). Au\u00dferdem messen wir harte Business-KPIs: Kundenanfragen, Conversions und Cost-per-Acquisition.',
  },
  {
    q: 'Was passiert nach den 90 Tagen?',
    a: 'KI-Sichtbarkeit ist kein Projekt mit Enddatum \u2014 es ist ein laufender Prozess. Nach den ersten 90 Tagen wechseln die meisten Kunden in ein monatliches Monitoring- und Optimierungspaket. Die gro\u00dfe Arbeit ist getan, aber Content-Updates, neue Seiten und technisches Monitoring bleiben wichtig. Die KI-Landschaft ver\u00e4ndert sich schnell \u2014 wer stehen bleibt, wird \u00fcberholt.',
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
  headline: 'Fallstudie: Wie ein Hamburger Unternehmen in 90 Tagen KI-sichtbar wurde',
  description:
    'Composite Case Study mit echten Zahlen: Performance von 35 auf 99, 474 Klicks/Monat, 2x organischer Traffic, #1 in ChatGPT. Der komplette 90-Tage-Plan.',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/fallstudie-ki-sichtbarkeit-90-tage',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Fallstudie: 90 Tage KI-Sichtbarkeit' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function FallstudieKiSichtbarkeit90TagePage() {
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
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">Fallstudie: 90&nbsp;Tage KI-Sichtbarkeit</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Vor 90&nbsp;Tagen existierte dieses Unternehmen f&uuml;r ChatGPT nicht.<br />
          Heute empfiehlt es ChatGPT als erste Wahl.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Eine Fallstudie mit echten Zahlen aus echten Projekten. Kein &ldquo;wir haben den Traffic um 300&nbsp;% gesteigert&rdquo;-Marketing-M&auml;rchen.
          Keine &ldquo;Ergebnisse k&ouml;nnen variieren&rdquo;-Fu&szlig;noten in Schriftgr&ouml;&szlig;e&nbsp;4. Einfach: Was war vorher. Was haben wir gemacht. Was ist jetzt.
        </p>
        <p className="text-sm text-gray-400 mt-4">
          Von Vadim Shchepin &middot; AI&nbsp;SEO Specialist &middot; 3.&nbsp;April&nbsp;2026 &middot; Lesezeit ca.&nbsp;12&nbsp;Min.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR &mdash; Die harten Zahlen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Lighthouse-Performance: 35&nbsp;&rarr;&nbsp;99/100.</strong> Ja, das ist kein Tippfehler. Von &ldquo;deine Website l&auml;dt langsamer als ein Fax&rdquo; zu &ldquo;nahezu perfekt&rdquo;.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">474&nbsp;Klicks/Monat bei 2,57&nbsp;&euro;&nbsp;CPC.</strong> Der Marktdurchschnitt liegt bei 18&ndash;20&nbsp;&euro;. Faktor&nbsp;7 g&uuml;nstiger. (Die Buchhaltung hat dreimal nachgefragt.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">ROI nach 7&nbsp;Wochen.</strong> Nicht 7&nbsp;Monate, nicht &ldquo;irgendwann n&auml;chstes Quartal&rdquo; &ndash; sieben Wochen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">#1&nbsp;in ChatGPT f&uuml;r die Nischen-Anfrage.</strong> 100&nbsp;% KI-Marktf&uuml;hrerschaft in der Zielkategorie.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">~40&nbsp;Kunden pro Monat</strong> &ndash; rein organisch, ohne einen Cent f&uuml;r Google Ads auszugeben.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HINWEIS: Composite Case Study                               */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-black">Transparenz-Hinweis:</strong> Diese Fallstudie ist ein Composite Case Study. Sie kombiniert echte, verifizierbare Ergebnisse aus mehreren Kundenprojekten zu einer zusammenh&auml;ngenden Geschichte. Alle Zahlen stammen aus realen Projekten. Wir haben sie anonymisiert, weil unsere Kunden verst&auml;ndlicherweise nicht m&ouml;chten, dass ihre Konkurrenz den exakten Playbook kennt. (Stell dir vor, du findest eine Goldmine und jemand postet die GPS-Koordinaten auf LinkedIn.)
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DIE AUSGANGSLAGE                                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die Ausgangslage: Unsichtbar trotz guter Arbeit
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Ein mittelst&auml;ndisches Hamburger Dienstleistungsunternehmen. Seit &uuml;ber 10&nbsp;Jahren am Markt. &Uuml;ber 1.650 abgeschlossene Projekte. Zufriedene Kunden, volle Auftragsb&uuml;cher durch Mundpropaganda.
          </p>
          <p>
            <strong className="text-black">Und online? Ein Desaster.</strong>
          </p>
          <p>
            Lighthouse-Performance: <strong className="text-black">35 von 100</strong>. Das ist nicht &ldquo;verbesserungsw&uuml;rdig&rdquo;, das ist &ldquo;deine Website ist ein digitales Mahnmal f&uuml;r alles, was 2018 schiefgelaufen ist&rdquo;. SEO-Score: <strong className="text-black">43 von 100</strong>. Die Website war so schlecht optimiert, dass selbst Google sie nur widerwillig indexiert hat. (Und Google indexiert buchst&auml;blich Spam-Seiten.)
          </p>
          <p>
            Keine strukturierten Daten. Kein Schema-Markup. Keine Meta-Descriptions, die diesen Namen verdienen. Produktbeschreibungen? Von ChatGPT generiert und ohne jede Redaktion auf die Seite geworfen. Die Fonts luden in einer Gr&ouml;&szlig;e, die verm&ouml;gen l&auml;sst, dass jemand mal &ldquo;alle Google Fonts einbinden&rdquo; gegoogelt und die erstbeste Antwort kopiert hat.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
          <h3 className="font-semibold text-black text-lg mb-4">Der Ist-Zustand &ndash; in Zahlen, die wehtun</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Lighthouse Performance', value: '35/100' },
              { label: 'Lighthouse SEO', value: '43/100' },
              { label: 'ChatGPT-Sichtbarkeit', value: '0\u00a0%' },
              { label: 'Perplexity-Erw\u00e4hnungen', value: '0' },
              { label: 'Organische Klicks/Monat', value: '< 50' },
              { label: 'Google Merchant Center', value: 'Nicht eingerichtet' },
              { label: 'Schema-Markup', value: 'Nicht vorhanden' },
              { label: 'Core Web Vitals', value: 'Alle rot' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-baseline border-b border-gray-50 pb-2">
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className="font-mono text-sm font-bold text-red-600">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Das Unternehmen hatte das gleiche Problem wie 90&nbsp;% aller KMU in Deutschland: <strong className="text-black">Sie waren offline hervorragend und online unsichtbar.</strong> Wie ein Michelin-Sternekoch, der sein Restaurant in einem Keller ohne Stra&szlig;enschild betreibt.
          </p>
          <p>
            Die Website war ein One-Pager aus der &Auml;ra, als &ldquo;responsive Design&rdquo; noch ein Fremdwort war. Ladezeit auf dem Handy: jenseits der 6&nbsp;Sekunden. (Google empfiehlt unter 2,5. Sechs Sekunden sind eine Ewigkeit. In dieser Zeit h&auml;tte ein Nutzer die Seite dreimal geschlossen, bei der Konkurrenz bestellt und sich einen Kaffee gemacht.)
          </p>
          <p>
            Die Textinhalte? Eine bunte Mischung aus nichtssagenden Marketingfloskeln, kopierten Branchentexten und ein paar Abs&auml;tzen, die offensichtlich von einer KI generiert und nie redigiert wurden. Du erkennst sie an S&auml;tzen wie &ldquo;Wir bieten ma&szlig;geschneiderte L&ouml;sungen f&uuml;r Ihre individuellen Bed&uuml;rfnisse.&rdquo; (Wenn du gerade zusammengezuckt bist: Geh auf deine eigene Website und pr&uuml;fe, ob dieser Satz dort steht. Bei jedem dritten KMU tut er das.)
          </p>
          <p>
            Und das Schlimmste? Sie wussten es nicht mal. Weil die Kunden ja kamen &ndash; durch Empfehlungen, durch Bestandskunden, durch Zufall. Aber die Kunden, die ChatGPT fragten &ldquo;Welcher Dienstleister in Hamburg ist gut?&rdquo; &ndash; die landeten bei der Konkurrenz. Oder, noch wahrscheinlicher, bei einer Firma, die objektiv schlechter war, aber eine ordentliche Website hatte.
          </p>
          <p>
            Wir haben das in den ersten Stunden des Audits getestet. ChatGPT gefragt. Perplexity gefragt. Claude gefragt. Gemini gefragt. Vier KI-Systeme, zwanzig verschiedene Formulierungen der gleichen Frage. <strong className="text-black">Ergebnis: null Erw&auml;hnungen.</strong> Nicht eine. Das Unternehmen mit 10+ Jahren Erfahrung und &uuml;ber 1.650 Projekten existierte in der KI-Welt schlicht nicht. Als h&auml;tte jemand es aus dem Internet radiert.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DER 90-TAGE-PLAN                                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Der 90-Tage-Plan: Was wir gemacht haben
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Kein Geheimwissen. Keine &ldquo;propriet&auml;re KI-Technologie&rdquo;. (Wenn jemand dir das verkaufen will, renn.) Einfach systematische Arbeit in drei Phasen.
        </p>

        {/* Phase 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-accent text-white text-sm font-bold px-3 py-1 rounded-full">Phase&nbsp;1</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black">Wochen 1&ndash;2: Audit &amp; Technische Basis</h3>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Bevor du irgendwas optimierst, musst du wissen, wie schlimm es wirklich ist. (Spoiler: Es ist immer schlimmer, als der Kunde denkt. Immer.)
            </p>
            <p>
              <strong className="text-black">Woche&nbsp;1: Der schonungslose Audit.</strong> Wir haben jeden Winkel der Website durchleuchtet. Lighthouse, Screaming Frog, manuelle ChatGPT-Tests, Perplexity-Abfragen, Google Search Console. Das Ergebnis war ein 47-seitiger Report, der sich las wie ein Unfallbericht.
            </p>
            <p>
              <strong className="text-black">Woche&nbsp;2: Technisches Fundament.</strong> Hier passiert das, was niemand sexy findet, aber ohne das nichts funktioniert: JS-Bundle um <strong className="text-black">76&nbsp;%</strong> reduziert. Fonts um <strong className="text-black">83&nbsp;%</strong> geschrumpft. (83&nbsp;Prozent. Deine Fonts waren 83&nbsp;% zu gro&szlig;. Das ist, als w&uuml;rdest du mit einem Umzugslaster zum B&auml;cker fahren.) Render-blocking Resources eliminiert. Lazy Loading implementiert. Core Web Vitals von &ldquo;alle rot&rdquo; auf &ldquo;alle gr&uuml;n&rdquo;.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-6">
            <h4 className="font-semibold text-black mb-3">Phase-1-Ergebnisse</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-brand-accent">-76&nbsp;%</p>
                <p className="text-sm text-gray-500 mt-1">JS-Bundle-Gr&ouml;&szlig;e</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent">-83&nbsp;%</p>
                <p className="text-sm text-gray-500 mt-1">Font-Dateigr&ouml;&szlig;e</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent">99/100</p>
                <p className="text-sm text-gray-500 mt-1">Lighthouse Performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-accent text-white text-sm font-bold px-3 py-1 rounded-full">Phase&nbsp;2</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black">Wochen 3&ndash;6: Content &amp; Struktur</h3>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Die technische Basis stand. Jetzt kam der Teil, bei dem die meisten Agenturen aufh&ouml;ren &ndash; und wir erst anfangen.
            </p>
            <p>
              <strong className="text-black">Content-Audit und -Strategie.</strong> Wir haben jede einzelne Seite analysiert. Was beantwortet eine echte Kundenfrage? Was ist d&uuml;nner Filler-Content? Was fehlt komplett? Bei einem unserer E-Commerce-Kunden hie&szlig; das: <strong className="text-black">723&nbsp;Produktseiten</strong> &uuml;berarbeiten. Jede einzelne. (Ja, du hast richtig gelesen. 723. Und nein, wir haben nicht einfach ChatGPT dr&uuml;berlaufen lassen und &ldquo;fertig&rdquo; gesagt. Das war ja das Problem des Kunden vorher.)
            </p>
            <p>
              <strong className="text-black">Strukturierte Daten.</strong> Schema.org-Markup f&uuml;r alles: LocalBusiness, Service, FAQ, Product, Review. Die KI braucht maschinenlesbare Daten. Ohne Schema-Markup bist du f&uuml;r ChatGPT wie ein Buch ohne Inhaltsverzeichnis &ndash; es existiert, aber niemand findet, was er sucht.
            </p>
            <p>
              <strong className="text-black">Lokale Signale.</strong> NAP-Konsistenz (Name, Adresse, Telefon) auf 12&nbsp;Plattformen synchronisiert. Google Business Profil komplett &uuml;berarbeitet. Stadtteil-spezifische Leistungsseiten erstellt. (F&uuml;r Hamburg-Kenner: Ja, der Unterschied zwischen Eimsb&uuml;ttel und Ottensen ist f&uuml;r die KI relevant.)
            </p>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-6">
            <p>
              <strong className="text-black">Google Merchant Center.</strong> F&uuml;r den E-Commerce-Kunden war das ein Game-Changer: Vorher null Pr&auml;senz in Google Shopping. Nachher alle 723&nbsp;Produkte sauber eingepflegt, mit strukturierten Daten, korrekten Preisen und Verf&uuml;gbarkeiten. Google Shopping ist &uuml;brigens auch eine Datenquelle f&uuml;r KI-Systeme &ndash; das vergessen die meisten.
            </p>
            <p>
              <strong className="text-black">Leistungsseiten statt &ldquo;Wir machen alles&rdquo;.</strong> Statt einer generischen Seite mit &ldquo;Unsere Leistungen&rdquo; haben wir f&uuml;r jede Kernleistung eine eigene Seite erstellt. Mit echten Fragen, die Kunden stellen. Mit konkreten Antworten. Mit Fallbeispielen. Jede einzelne Seite ist eine potenzielle Antwort auf eine KI-Anfrage.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-6">
            <h4 className="font-semibold text-black mb-3">Phase-2-Ma&szlig;nahmen</h4>
            <ul className="space-y-2 text-gray-600">
              {[
                '723 Produktseiten inhaltlich \u00fcberarbeitet (nicht automatisiert \u2014 redaktionell)',
                'Schema.org-Markup f\u00fcr LocalBusiness, Service, FAQ, Product implementiert',
                'Google Merchant Center eingerichtet und alle Produkte eingepflegt',
                'Leistungsseiten pro Service-Kategorie mit FAQ-Bl\u00f6cken erstellt',
                'NAP-Konsistenz auf 12 Plattformen hergestellt',
                'Interne Verlinkung komplett \u00fcberarbeitet (Silo-Struktur)',
                'robots.txt und llms.txt f\u00fcr KI-Crawler optimiert',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-accent mt-1 flex-shrink-0">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-accent text-white text-sm font-bold px-3 py-1 rounded-full">Phase&nbsp;3</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black">Wochen 7&ndash;12: Autorit&auml;t &amp; Monitoring</h3>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Phase&nbsp;3 ist der Punkt, an dem die Magie passiert. (Keine echte Magie. Korrelation, keine Kausalit&auml;t. Aber es f&uuml;hlt sich an wie Magie, wenn nach Wochen harter Arbeit pl&ouml;tzlich die Zahlen explodieren.)
            </p>
            <p>
              <strong className="text-black">KI-Autorit&auml;t aufbauen.</strong> Wir haben systematisch die Signale verst&auml;rkt, die ChatGPT und Perplexity als Vertrauensindikatoren nutzen: Konsistente Erw&auml;hnungen auf autorit&auml;ren Plattformen, Bewertungsmanagement, Content-Partnerschaften, und &ndash; das ist der Teil, den niemand h&ouml;ren will &ndash; <strong className="text-black">Geduld</strong>.
            </p>
            <p>
              <strong className="text-black">Woche&nbsp;7: Der Wendepunkt.</strong> Der ROI war positiv. Sieben Wochen nach Projektstart hat die Investition sich amortisiert. Nicht &ldquo;theoretisch&rdquo; oder &ldquo;wenn man den Branding-Effekt mitrechnet&rdquo; &ndash; sondern in echtem, nachvollziehbarem Umsatz durch nachverfolgbare Kundenanfragen.
            </p>
            <p>
              <strong className="text-black">Kontinuierliches Monitoring.</strong> Ab Woche&nbsp;8 haben wir w&ouml;chentlich ChatGPT, Perplexity und Claude mit den relevanten Branchenanfragen getestet. Wir haben getrackt, wann unser Kunde erstmals erw&auml;hnt wird, wann er auf Position&nbsp;1 steht, und wann die Konkurrenz reagiert. (Spoiler: Die Konkurrenz hat bis heute nicht reagiert.)
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-6">
            <h4 className="font-semibold text-black mb-3">Phase-3-Meilensteine</h4>
            <div className="space-y-3">
              {[
                { week: 'Woche 7', event: 'ROI-Break-Even erreicht' },
                { week: 'Woche 8', event: 'Erste Erw\u00e4hnung in Perplexity f\u00fcr Nischen-Query' },
                { week: 'Woche 9', event: '#1 in ChatGPT f\u00fcr primäre Branchenanfrage' },
                { week: 'Woche 10', event: '40+ Kundenanfragen/Monat rein organisch' },
                { week: 'Woche 12', event: '#1 in Perplexity, 100\u00a0% Nischen-Marktf\u00fchrerschaft in KI' },
              ].map((item) => (
                <div key={item.week} className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-bold text-brand-accent flex-shrink-0 w-20">{item.week}</span>
                  <span className="text-gray-600">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DIE ERGEBNISSE                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Die Ergebnisse: Zahlen, die f&uuml;r sich sprechen
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Keine Interpretationen, keine &ldquo;wir glauben, dass&rdquo;-Formulierungen. Nur Vorher. Nachher. Fertig.
        </p>

        {/* Before/After Table */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Metrik</th>
                  <th className="px-6 py-4 text-sm font-bold text-red-500 uppercase tracking-wider">Vorher</th>
                  <th className="px-6 py-4 text-sm font-bold text-brand-accent uppercase tracking-wider">Nachher</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { metric: 'Lighthouse Performance', before: '35/100', after: '99/100' },
                  { metric: 'Lighthouse SEO', before: '43/100', after: '100/100' },
                  { metric: 'Lighthouse Accessibility', before: 'n/a', after: '100/100' },
                  { metric: 'Lighthouse Best Practices', before: 'n/a', after: '100/100' },
                  { metric: 'Organische Klicks/Monat', before: '< 50', after: '474' },
                  { metric: 'Cost per Click (CPC)', before: '18\u201320\u00a0\u20ac (Markt)', after: '2,57\u00a0\u20ac' },
                  { metric: 'Traceable Interactions/Monat', before: '~5', after: '72' },
                  { metric: 'Kunden/Monat (organisch)', before: '~3\u20135', after: '~40' },
                  { metric: 'ChatGPT-Ranking (Nische)', before: 'Nicht erw\u00e4hnt', after: '#1' },
                  { metric: 'Perplexity-Ranking (Nische)', before: 'Nicht erw\u00e4hnt', after: '#1' },
                  { metric: 'JS-Bundle-Gr\u00f6\u00dfe', before: '100\u00a0%', after: '24\u00a0% (-76\u00a0%)' },
                  { metric: 'Font-Dateigr\u00f6\u00dfe', before: '100\u00a0%', after: '17\u00a0% (-83\u00a0%)' },
                ].map((row) => (
                  <tr key={row.metric}>
                    <td className="px-6 py-3 text-sm font-medium text-black">{row.metric}</td>
                    <td className="px-6 py-3 text-sm font-mono text-red-600">{row.before}</td>
                    <td className="px-6 py-3 text-sm font-mono text-brand-accent font-bold">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Lies diese Tabelle nochmal.</strong> Lies sie langsam. Lighthouse von 35 auf 99. SEO von 43 auf 100. Von null KI-Sichtbarkeit zu Platz&nbsp;1 in ChatGPT und Perplexity. CPC um Faktor&nbsp;7 gesenkt.
          </p>
          <p>
            Und das ist kein theoretisches Potenzial. Das sind keine &ldquo;projected results&rdquo;. Das ist passiert. In 90&nbsp;Tagen. In Hamburg. F&uuml;r ein ganz normales mittelst&auml;ndisches Unternehmen, das vorher eine Website hatte, die aussah wie ein GeoCities-Relikt aus der Schr&ouml;der-&Auml;ra.
          </p>
          <p>
            (Und falls du dich fragst: Ja, 99/100/100/100 im Lighthouse ist fast ein Highscore. Es gibt Websites von DAX-Konzernen, die das nicht schaffen. Mit Budgets, die das Hundertfache betragen.)
          </p>
        </div>

        {/* ROI Breakdown */}
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mt-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-accent mb-4">ROI-Rechnung &mdash; f&uuml;r die Zahlenfreaks</h3>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-black">474&nbsp;Klicks &times; 2,57&nbsp;&euro;&nbsp;CPC = 1.218&nbsp;&euro; &bdquo;&Auml;quivalentwert&ldquo; pro Monat.</strong> Das hei&szlig;t: Um die gleichen Klicks &uuml;ber Google Ads zu bekommen, m&uuml;sstest du 1.218&nbsp;&euro; pro Monat ausgeben. Bei Marktpreisen (18&ndash;20&nbsp;&euro;&nbsp;CPC) w&auml;ren es <strong className="text-black">8.532&ndash;9.480&nbsp;&euro;</strong>. Pro Monat. Jedes Monat. Ohne dass der Traffic dir geh&ouml;rt.
            </p>
            <p>
              <strong className="text-black">~40&nbsp;Kunden/Monat bei geschätztem Auftragswert:</strong> Selbst konservativ gerechnet mit 500&nbsp;&euro; durchschnittlichem Auftragswert (f&uuml;r einen Dienstleister in Hamburg eher niedrig angesetzt) sind das <strong className="text-black">20.000&nbsp;&euro; Umsatz pro Monat</strong>, der direkt auf die KI-Sichtbarkeitsoptimierung zur&uuml;ckzuf&uuml;hren ist.
            </p>
            <p>
              <strong className="text-black">19&nbsp;Conversions bei 27,80&nbsp;&euro;&nbsp;CPA</strong> &ndash; das sind die h&auml;rtesten Zahlen. 27,80&nbsp;&euro; pro zahlenden Kunden. Vergleich: Google Ads im gleichen Segment liegen bei 80&ndash;120&nbsp;&euro;&nbsp;CPA. Facebook Ads bei 60&ndash;90&nbsp;&euro;. Wir reden hier &uuml;ber <strong className="text-black">Faktor&nbsp;3&ndash;4 g&uuml;nstiger</strong> als jeder bezahlte Kanal.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WAS DIESES UNTERNEHMEN ANDERS GEMACHT HAT                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was dieses Unternehmen anders gemacht hat als 90&nbsp;% der Konkurrenz
        </h2>

        <div className="space-y-8">
          {[
            {
              num: '01',
              title: 'Sie haben zugehört statt diskutiert',
              text: 'Die meisten Kunden kommen mit einer festen Vorstellung: „Wir brauchen einfach mehr Content." Oder: „Mach mal was mit KI." Dieses Unternehmen hat uns den Audit machen lassen, die Ergebnisse gelesen (alle 47 Seiten), und dann gesagt: „Okay, macht das." Keine endlosen Abstimmungsrunden. Keine „aber mein Schwager hat gesagt"-Diskussionen. Vertrauen in die Expertise. Das ist seltener, als du denkst.',
            },
            {
              num: '02',
              title: 'Technik vor Content (ja, wirklich)',
              text: 'Jeder will sofort Content produzieren. Keiner will über JS-Bundles, Font-Loading-Strategien und Render-Blocking Resources reden. Dieses Unternehmen hat akzeptiert, dass die ersten zwei Wochen „langweilig" sein würden. Keine neuen Blogposts, kein Social Media. Nur: Die technische Basis reparieren. Das hat den Unterschied gemacht. Denn der beste Content nützt nichts auf einer Website, die 8 Sekunden zum Laden braucht.',
            },
            {
              num: '03',
              title: 'Echte Daten statt Bauchgefühl',
              text: 'Wir haben 72 Interaktionen pro Monat getrackt. Nicht „geschätzt", nicht „gefühlt mehr", sondern: getrackt. Mit UTM-Parametern, Call-Tracking und CRM-Integration. Wenn der Geschäftsführer fragt „Bringt das was?", zeigen wir ihm ein Dashboard mit 19 Conversions bei 27,80\u00a0\u20ac pro Conversion. Versuch das mal mit einer Zeitungsanzeige.',
            },
            {
              num: '04',
              title: 'Langfristig gedacht, nicht auf Quick Wins optimiert',
              text: 'Wir hätten in Woche\u00a03 irgendwelche Keyword-gestopften Seiten live stellen können. Kurzfristig vielleicht ein paar Rankings. Langfristig ein Ticket Richtung Google-Spam-Hölle. Stattdessen: Saubere Struktur, ehrlicher Content, echte Expertise auf jeder Seite. Das dauert länger. Aber es hält. Und die KI erkennt den Unterschied.',
            },
            {
              num: '05',
              title: 'Keine Angst vor „unsichtbarer" Arbeit',
              text: 'Schema-Markup sieht kein Kunde. robots.txt liest kein Mensch. llms.txt kennt kaum jemand. Aber die KI? Die KI lebt davon. Dieses Unternehmen hat verstanden, dass 60\u00a0% der Arbeit im Backend passiert. Im Code. In den Metadaten. In den strukturierten Daten. Die unsichtbare Arbeit ist die wichtigste.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="text-brand-accent font-bold text-sm mt-1 flex-shrink-0 w-6">{item.num}</div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FUNKTIONIERT DAS AUCH FÜR MEIN UNTERNEHMEN?                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Funktioniert das auch f&uuml;r mein Unternehmen?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Kurze Antwort: Wahrscheinlich ja. Lange Antwort: Es kommt drauf an. (Ich wei&szlig;, das ist die Beraterantwort schlechthin. Aber sie stimmt.) Hier sind reale Ergebnisse aus weiteren Projekten unserer Praxis:
        </p>

        <div className="space-y-6">
          {/* E-Commerce */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-2.5 py-1 rounded-full">E-Commerce</span>
              <h3 className="font-semibold text-black text-lg">Online-Shop mit 723&nbsp;Produkten</h3>
            </div>
            <div className="space-y-2 text-gray-600 leading-relaxed">
              <p>
                Ausgangslage: Kein SEO, keine Google Merchant Center-Anbindung, alle Produktbeschreibungen von ChatGPT generiert und unbearbeitet online gestellt. (Man k&ouml;nnte sagen, der Shop war SEO-technisch das digitale &Auml;quivalent eines Flohmarktstands bei Regen.)
              </p>
              <p>
                <strong className="text-black">Ergebnis nach 90&nbsp;Tagen:</strong> Organischer Traffic verdoppelt. <strong className="text-black">1.860&nbsp;Klicks</strong> und <strong className="text-black">78.500&nbsp;Impressions</strong> in 3&nbsp;Monaten. Alle 723&nbsp;Produktseiten mit einzigartigen, redaktionell gepr&uuml;ften Beschreibungen, strukturierten Daten und Merchant-Center-Integration.
              </p>
            </div>
          </div>

          {/* SaaS/Tech */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-2.5 py-1 rounded-full">SaaS / Tech</span>
              <h3 className="font-semibold text-black text-lg">DSGVO-konforme Plattform</h3>
            </div>
            <div className="space-y-2 text-gray-600 leading-relaxed">
              <p>
                Ein Nischenprodukt im Bildungsbereich &ndash; DSGVO-konform, spezialisiert, kleines Team. Die Art von Unternehmen, die Google in den Weiten des Internets schlicht &uuml;bersieht.
              </p>
              <p>
                <strong className="text-black">Ergebnis:</strong> <strong className="text-black">#1&nbsp;in ChatGPT</strong> f&uuml;r die prim&auml;re Nischenanfrage. <strong className="text-black">#1&nbsp;in Perplexity.</strong> 100&nbsp;% Marktf&uuml;hrerschaft in der KI-Sichtbarkeit f&uuml;r diese Nische. Der gesamte adressierbare Markt wird jetzt zuerst auf diesen Anbieter verwiesen, wenn er die KI fragt. (Stell dir vor, jeder potenzielle Kunde deiner Branche bekommt von seinem pers&ouml;nlichen Berater zuerst deinen Namen genannt. Das ist KI-Sichtbarkeit.)
              </p>
            </div>
          </div>

          {/* Traditionelles Unternehmen */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-brand-accent/10 text-brand-accent text-xs font-bold px-2.5 py-1 rounded-full">Lokaler Dienstleister</span>
              <h3 className="font-semibold text-black text-lg">Traditionelles Hamburger Unternehmen, seit 2010</h3>
            </div>
            <div className="space-y-2 text-gray-600 leading-relaxed">
              <p>
                Ein Hamburger Handwerksbetrieb mit &uuml;ber 1.650 abgeschlossenen Projekten, der online praktisch nicht existierte. SEO-Score: 34/100. Kein Schema-Markup, kein Google Business Profil, keine strukturierten Daten. Alles, was man falsch machen kann &ndash; falsch gemacht.
              </p>
              <p>
                <strong className="text-black">Ergebnis:</strong> <strong className="text-black">728&nbsp;lokale Aktionen pro Monat</strong> (Anrufe, Wegbeschreibungen, Website-Besuche &uuml;ber Google). <strong className="text-black">19&nbsp;Conversions pro Monat</strong> bei <strong className="text-black">27,80&nbsp;&euro; pro Conversion</strong>. F&uuml;r ein Unternehmen, das vorher null digitale Pr&auml;senz hatte, ist das wie von Null auf Hundert &ndash; nur dass es nicht um Km/h geht, sondern um Kunden.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mt-8 shadow-sm">
          <p className="text-sm font-bold text-brand-accent mb-3 uppercase tracking-wider">Das Muster</p>
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-black">Branche ist egal. Gr&ouml;&szlig;e ist egal. Budget ist (fast) egal.</strong> Was z&auml;hlt: Ein sauberes technisches Fundament, ehrlicher Content, der echte Fragen beantwortet, und strukturierte Daten, die der KI sagen, wer du bist und was du kannst. Das funktioniert f&uuml;r einen Entrümpler genauso wie f&uuml;r einen K-Beauty-Shop oder eine Bildungsplattform.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DER ZEITLICHE VERLAUF                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der zeitliche Verlauf: Woche f&uuml;r Woche
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
          <p>
            KI-Sichtbarkeit ist kein Lichtschalter. Es ist ein Schwungrad. Hier siehst du, wie sich die Ergebnisse &uuml;ber die 90&nbsp;Tage aufgebaut haben &ndash; und warum Geduld in den ersten Wochen entscheidend ist.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="space-y-4">
            {[
              {
                period: 'Woche 1\u20132',
                title: 'Audit & Technik',
                detail: 'Noch keine sichtbaren Ergebnisse f\u00fcr den Kunden. Intern: 47-seitiger Audit-Report, technische Optimierungen live. Lighthouse springt von 35 auf 99. Der Kunde sieht: nichts Au\u00dfergew\u00f6hnliches. (Das ist der Punkt, an dem die meisten nerv\u00f6s werden.)',
                mood: 'neutral',
              },
              {
                period: 'Woche 3\u20134',
                title: 'Content-Restrukturierung',
                detail: 'Google beginnt, die neuen Seiten zu indexieren. Erste Impressions in der Search Console. Aber: noch kaum Klicks. Die KI-Crawler (GPTBot, PerplexityBot) tauchen in den Server-Logs auf. Sie lesen. Sie bewerten. Sie speichern. Aber sie empfehlen noch nicht.',
                mood: 'neutral',
              },
              {
                period: 'Woche 5\u20136',
                title: 'Erste Signale',
                detail: 'Organische Klicks steigen sp\u00fcrbar. Google Merchant Center liefert erste Shopping-Impressions. Perplexity erw\u00e4hnt den Kunden erstmals in einer tangential verwandten Anfrage. Noch nicht Platz 1, aber: existent. Von \u201egibt es nicht\u201c zu \u201ewird am Rande erw\u00e4hnt\u201c. Das ist gr\u00f6\u00dfer, als es klingt.',
                mood: 'positive',
              },
              {
                period: 'Woche 7',
                title: 'Der Break-Even',
                detail: 'Die Investition hat sich amortisiert. 72 tracked Interactions. ChatGPT erw\u00e4hnt den Kunden erstmals direkt. Der Gesch\u00e4ftsf\u00fchrer ruft an: \u201eIch hab mich gerade selbst in ChatGPT gesucht und wir sind da!\u201c (Ja, das ist immer ein guter Moment.)',
                mood: 'positive',
              },
              {
                period: 'Woche 8\u201310',
                title: 'Exponentielles Wachstum',
                detail: '474 Klicks/Monat. 40+ Kundenanfragen. ChatGPT-Position #1 f\u00fcr die prim\u00e4re Nischenanfrage. Perplexity folgt. Die Konkurrenz hat noch nicht reagiert \u2014 vermutlich wissen sie nicht mal, dass es passiert.',
                mood: 'positive',
              },
              {
                period: 'Woche 11\u201312',
                title: 'Marktf\u00fchrerschaft',
                detail: '100\u00a0% KI-Sichtbarkeit in der Nische. Alle relevanten KI-Systeme empfehlen den Kunden. 728 lokale Aktionen/Monat. Der Kunde erw\u00e4gt, einen zus\u00e4tzlichen Mitarbeiter einzustellen, um die Anfragen zu bearbeiten. (Das ist das sch\u00f6nste Problem, das ein Unternehmen haben kann.)',
                mood: 'positive',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-24">
                  <span className={`font-mono text-sm font-bold ${item.mood === 'positive' ? 'text-brand-accent' : 'text-gray-400'}`}>
                    {item.period}
                  </span>
                </div>
                <div className="flex-1 border-l-2 border-gray-100 pl-4 pb-4">
                  <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
          <p>
            Das Muster ist immer das gleiche: <strong className="text-black">Wochen 1&ndash;4 f&uuml;hlen sich frustrierend an.</strong> Du investierst, du siehst nichts. Das ist normal. Das ist der unsichtbare Teil des Schwungrads. Ab Woche&nbsp;5 dreht sich das Rad. Ab Woche&nbsp;7 wird es zum Selbstl&auml;ufer.
          </p>
          <p>
            Und hier ist der Witz: Die meisten, die &ldquo;KI-SEO funktioniert nicht&rdquo; sagen, haben in Woche&nbsp;3 aufgeh&ouml;rt. Sie standen vor der Ziellinie und sind umgedreht. Das ist, als w&uuml;rdest du einen Marathon laufen, nach 35&nbsp;Kilometern aufgeben und sagen: &ldquo;Laufen funktioniert nicht.&rdquo;
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WARUM DIE MEISTEN SCHEITERN                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum die meisten trotzdem scheitern (und wie du es vermeidest)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
          <p>
            Du hast die Zahlen gesehen. Du denkst: &ldquo;Das mache ich auch.&rdquo; Gro&szlig;artig. Hier sind die f&uuml;nf Gr&uuml;nde, warum es bei den meisten nicht klappt &ndash; damit du sie vermeiden kannst.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: 'Sie überspringen Phase\u00a01',
              desc: '„Technik ist doch nicht so wichtig, lass uns einfach Content machen." Doch. Technik ist wichtig. Eine Website mit Performance 35/100 wird von der KI nicht gecrawlt, nicht indexiert und nicht empfohlen. Egal wie gut dein Content ist. Das ist wie ein Bewerbungsgespräch in Unterhose \u2014 der Inhalt mag stimmen, aber die Verpackung disqualifiziert dich sofort.',
            },
            {
              title: 'Sie verwechseln „KI-Content" mit „KI-optimiertem Content"',
              desc: 'KI-Content: ChatGPT generiert 50 Blogartikel, du lädst sie hoch. KI-optimierter Content: Du erstellst Inhalte, die KI-Systeme als vertrauenswürdige Quelle zitieren wollen. Das eine kostet 15 Minuten und führt zum Bann. Das andere kostet Wochen und führt zu #1 in ChatGPT. Entscheide selbst.',
            },
            {
              title: 'Sie haben keine Geduld',
              desc: 'Woche\u00a03, keine Ergebnisse. „Funktioniert nicht." Woche\u00a04: Projekt gestoppt. Was sie nicht wissen: Woche\u00a07 wäre der Break-Even gewesen. KI-Sichtbarkeit ist kein Lichtschalter. Es ist ein Schwungrad. Die ersten Umdrehungen sind die schwersten. Danach dreht es sich fast von allein.',
            },
            {
              title: 'Sie messen nicht (oder das Falsche)',
              desc: '„Ich glaube, es hat sich was getan." Glauben ist für die Kirche. Wir messen: Klicks, Impressions, Conversions, CPA, KI-Erwähnungen. Wöchentlich. Wenn du nicht misst, weißt du nicht, ob es funktioniert. Und wenn du nicht weißt, ob es funktioniert, optimierst du ins Blaue.',
            },
            {
              title: 'Sie beauftragen den Billigsten',
              desc: '„Ich kenne da jemanden auf Fiverr, der macht SEO für 99\u00a0\u20ac/Monat." Cool. Der macht auch Schema-Markup mit Copy-Paste-Fehlern, schreibt Meta-Descriptions auf Englisch für eine deutsche Website und schickt dir monatlich einen Report, den ein Algorithmus aus Buzzwords zusammenwürfelt. Du bekommst, wofür du zahlst. Immer.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-black text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DER ELEFANT IM RAUM                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der Elefant im Raum: &ldquo;Aber das ist doch Eigenwerbung!&rdquo;
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Ja. Ist es. Nat&uuml;rlich ist es das.
          </p>
          <p>
            Dieser Artikel ist eine Fallstudie auf der Website einer KI-SEO-Agentur. Was erwartest du &ndash; dass wir schreiben &ldquo;Unsere Ergebnisse sind mittelmä&szlig;ig, aber gib uns trotzdem Geld&rdquo;?
          </p>
          <p>
            <strong className="text-black">Der Unterschied zu den meisten Agenturen:</strong> Unsere Zahlen sind nachpr&uuml;fbar. Performance-Scores kannst du in 30&nbsp;Sekunden selbst testen. Google Search Console-Daten l&uuml;gen nicht. ChatGPT-Rankings kannst du in Echtzeit verifizieren. Wir zeigen keine &ldquo;600&nbsp;% mehr Sichtbarkeit&rdquo;-Grafiken, deren Ausgangswert bei 3&nbsp;Besuchern lag.
          </p>
          <p>
            Wenn du skeptisch bist: Gut. Sei skeptisch. Frag nach den Daten. Frag nach den Screenshots. Frag nach den Referenzen. Wir zeigen sie dir gerne. Denn das ist genau der Punkt: <strong className="text-black">Transparenz ist kein Risiko, wenn die Ergebnisse stimmen.</strong>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-12">
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

      {/* ============================================================ */}
      {/*  SOURCES                                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-black mb-4">Quellen &amp; Methodik</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              Alle Lighthouse-Scores gemessen mit Google Lighthouse v12 (Chrome DevTools, Mobile-Simulation, Throttled 4G).
            </li>
            <li>
              Organische Klicks und Impressions aus Google Search Console (verifizierte Properties).
            </li>
            <li>
              CPC-Vergleichswerte aus Google Ads Keyword Planner (Durchschnittswerte Hamburg, Q1&nbsp;2026).
            </li>
            <li>
              KI-Rankings getestet in ChatGPT (GPT-4o, mit Websuche), Perplexity (Pro), Claude (Sonnet&nbsp;4) und Gemini (Advanced).
            </li>
            <li>
              Conversion-Daten aus Google Analytics&nbsp;4 und CRM-System des Kunden (anonymisiert).
            </li>
            <li>
              Lokale Aktionen aus Google Business Profile Insights.
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RELATED GUIDES                                              */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <h3 className="font-semibold text-black text-lg mb-4">Verwandte Artikel:</h3>
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
            href="/wissen/ki-sichtbarkeit-kosten"
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
          >
            <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
              Was kostet KI-Sichtbarkeit?
            </p>
            <p className="text-sm text-gray-500">
              Preismodelle, ROI-Berechnung und realistische Budgets f&uuml;r KI-SEO.
            </p>
          </a>
          <a
            href="/wissen/ki-sichtbarkeit-messen"
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
          >
            <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
              KI-Sichtbarkeit messen
            </p>
            <p className="text-sm text-gray-500">
              Tools, Metriken und Prozesse zur Messung deiner KI-Sichtbarkeit.
            </p>
          </a>
          <a
            href="/wissen/technische-ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
          >
            <p className="font-semibold text-black group-hover:text-brand-accent transition-colors mb-1">
              Technische KI-Sichtbarkeit
            </p>
            <p className="text-sm text-gray-500">
              Schema.org, robots.txt, Crawling &ndash; die technische Seite der KI-Optimierung.
            </p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DARK CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
              Deine kostenlose KI-Sichtbarkeitsanalyse wartet
            </h2>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl leading-relaxed">
              Ich pr&uuml;fe in 48&nbsp;Stunden, ob ChatGPT, Perplexity und Google&nbsp;AI dein Unternehmen kennen &ndash; und was n&ouml;tig ist, damit sie es empfehlen.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Kein Verkaufsgespr&auml;ch. Kein &ldquo;wir m&uuml;ssen das erst intern besprechen&rdquo;. Du bekommst einen ehrlichen Report mit konkreten Zahlen. Wenn&rsquo;s passt, reden wir weiter. Wenn nicht, hast du trotzdem was gelernt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Analyse anfragen" className="!py-4 !px-8" />
              <Button href="/kontakt" text="Erstgespr&auml;ch vereinbaren" className="!py-4 !px-8 !text-white !border-white/20 hover:!border-white/40" />
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Kein Spam. Kein Newsletter-Abo. Nur ein Report, der dir zeigt, wo du stehst.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

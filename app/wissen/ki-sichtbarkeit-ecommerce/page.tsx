import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Warum empfiehlt ChatGPT keine Produkte aus meinem Online-Shop?',
    a: 'ChatGPT wurde nicht auf deinen Produktkatalog trainiert. Es kennt keine SKUs, keine Preise, keine Verfügbarkeiten. Was es kennt: Buying Guides, Testberichte, Vergleichsartikel und Expertenmeinungen. Wenn du keinen Content hast, der deine Produkte in einen Kontext einordnet — warum sollte eine KI dich empfehlen? Du bist für ChatGPT ein Regal ohne Schilder.',
  },
  {
    q: 'Reichen gute Produktbeschreibungen für KI-Sichtbarkeit?',
    a: 'Nein. Produktbeschreibungen sind transaktional — sie sagen „kauf mich". KI-Systeme suchen informationellen Content — Inhalte, die eine Frage beantworten. „Welche Laufschuhe für Plattfüße?" wird von einem Buying Guide beantwortet, nicht von einer Produktseite mit „atmungsaktives Mesh-Obermaterial, Größen 36-48". Du brauchst beides: Produktseiten für Google Shopping und Expertise-Content für KI.',
  },
  {
    q: 'Welches Schema-Markup braucht ein Online-Shop für KI?',
    a: 'Mindestens Product-Schema mit name, description, brand, offers (price, priceCurrency, availability), aggregateRating und review. Dazu FAQ-Schema auf Kategorieseiten und HowTo-Schema für Anleitungen. Das Entscheidende: Dein Schema muss mit dem sichtbaren Content übereinstimmen. Fake-Bewertungen im Schema erkennt jede KI sofort.',
  },
  {
    q: 'Wie lange dauert es, bis mein Shop in KI-Antworten auftaucht?',
    a: 'Bei Perplexity, das das Live-Web durchsucht, können gut strukturierte Buying Guides innerhalb von 2-4 Wochen erscheinen. Bei ChatGPT dauert es 3-6 Monate, da die Trainingsdaten in Zyklen aktualisiert werden. Google AI Overviews reagieren ähnlich schnell wie die normale Google-Suche. Der Schlüssel ist nicht Geschwindigkeit, sondern Konsistenz.',
  },
  {
    q: 'Funktioniert KI-Sichtbarkeit für alle E-Commerce-Branchen?',
    a: 'Am besten funktioniert es in Branchen, wo Kunden vor dem Kauf recherchieren: Elektronik, Outdoor-Ausrüstung, Möbel, Gesundheitsprodukte, Sportartikel. Weniger relevant ist es bei Impulskäufen und Commodity-Produkten. Wenn niemand ChatGPT fragt „Welches Toilettenpapier ist das beste?", brauchst du dort keine KI-Sichtbarkeit.',
  },
  {
    q: 'Kann ich meinen bestehenden Blog für KI-Sichtbarkeit umbauen?',
    a: 'Ja, und du solltest. Die meisten E-Commerce-Blogs sind SEO-Füllmaterial ohne echte Substanz. Der Umbau: Answer-First-Struktur, klare H2/H3-Hierarchien, Quellenangaben, Produktempfehlungen mit Kontext statt Affiliate-Links. Ein Artikel „Die 10 besten Wanderschuhe 2026" mit echten Tests und Vergleichen wird zitiert. Eine Listicle mit Amazon-Links wird ignoriert.',
  },
  {
    q: 'Was ist der ROI von KI-Sichtbarkeit im E-Commerce?',
    a: 'Abhängig vom durchschnittlichen Warenkorbwert und der Marge. Bei einem Shop mit 150€ Durchschnittsbestellung und 30% Marge reichen 3-5 zusätzliche Bestellungen pro Monat durch KI-Empfehlungen, um eine monatliche Investition von 1.500€ zu decken. Der Vorteil gegenüber Google Ads: KI-Traffic hat kein CPC und baut sich über Zeit auf, statt bei Budget-Stop zu verschwinden.',
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
  headline: 'KI-Sichtbarkeit für Online-Shops: Warum ChatGPT deine Produkte nicht empfiehlt',
  description:
    'Warum E-Commerce-Shops für ChatGPT und Perplexity unsichtbar sind. Produktseiten, die KI nicht zitieren kann, und was stattdessen funktioniert.',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-ecommerce',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'KI-Sichtbarkeit E-Commerce' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function KiSichtbarkeitEcommercePage() {
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">KI-Sichtbarkeit E-Commerce</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          KI-Sichtbarkeit für Online-Shops: Warum ChatGPT deine Produkte nicht empfiehlt
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Dein Online-Shop hat 14.000 Produkte, eine Conversion-Rate von 2,3% und einen Blog mit Artikeln wie
          &bdquo;5 Gründe, warum du unsere Produkte liebst&ldquo;. ChatGPT kennt keins davon. Nicht eins.
          Das ist ungefähr so, als hättest du ein Restaurant ohne Tür gebaut.
        </p>
      </section>

      {/* TL;DR */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR &mdash; Für die Ungeduldigen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Produktseiten sind für KI unsichtbar.</strong> ChatGPT kann nichts mit &bdquo;Artikelnummer 48372, Größe M-XXL, 49,99&nbsp;&euro;&ldquo; anfangen. Das ist keine Information. Das ist ein Preisschild.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Google Shopping &ne; KI-Empfehlung.</strong> Was bei Google Shopping funktioniert, ist für ChatGPT und Perplexity völlig irrelevant. Zwei komplett verschiedene Welten.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Zitierbarer Content ist der Schlüssel.</strong> Buying Guides, Vergleiche, Expertise-Artikel &mdash; Inhalte, die eine Frage beantworten, nicht ein Produkt verkaufen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Product Schema allein reicht nicht.</strong> Aber ohne Product Schema bist du nicht mal im Spiel. Du brauchst beides: technische Basis und echten Content.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Warum E-Commerce besonders betroffen ist */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum E-Commerce-Shops besonders unsichtbar sind
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Frag ChatGPT &bdquo;Welche Laufschuhe sind gut für Anfänger?&ldquo; und du bekommst eine
            detaillierte Antwort mit Marken, Modellen und Begründungen. Keiner der empfohlenen Links
            führt zu einem deutschen Online-Shop. Keiner. Die Empfehlungen kommen von Testportalen,
            Fachmagazinen und Blogs mit echten Laufschuh-Tests.
          </p>
          <p>
            <strong className="text-black">Warum?</strong> Weil dein Shop ChatGPT nichts zu erzählen hat.
          </p>
          <p>
            Deine Produktseite sagt: &bdquo;ASICS Gel-Nimbus 27, atmungsaktives Mesh, FlyteFoam-Dämpfung,
            UVP 179,95&nbsp;&euro;.&ldquo; Das ist keine Antwort auf eine Frage. Das ist ein Datenblatt.
            Ein LLM kann daraus keine Empfehlung generieren, weil es keine <em>Meinung</em> hat, keine
            <em>Einordnung</em>, keine <em>Begründung</em>, warum genau dieser Schuh für Anfänger gut ist.
          </p>
          <p>
            Dein Shop ist ein Lager. Kein Berater. Und KI-Systeme empfehlen Berater, keine Lager.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mt-10">
          <h3 className="text-xl font-semibold text-black mb-4">Die 5 Gründe, warum Produktseiten für KI nicht funktionieren</h3>
          <ol className="space-y-4 text-base text-gray-600 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">1.</span>
              <span><strong className="text-black">Kein informativer Kontext.</strong> Produktbeschreibungen beantworten keine Fragen. Sie beschreiben Features. KI braucht Antworten, nicht Spezifikationen.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">2.</span>
              <span><strong className="text-black">Duplicate Content in Serie.</strong> 500 Produkte mit der gleichen Template-Beschreibung &mdash; &bdquo;hochwertige Materialien, schneller Versand, 30 Tage Rückgabe&ldquo;. Das ist kein Content. Das ist Copy-Paste mit Preisänderung.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">3.</span>
              <span><strong className="text-black">Keine Expertise-Signale.</strong> Wer hat den Schuh getestet? Wo sind die Laufkilometer-Daten? Wo ist die Meinung eines Podologen? Ohne E-E-A-T bist du für KI eine anonyme Preisliste.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">4.</span>
              <span><strong className="text-black">Dynamische Inhalte.</strong> Preise ändern sich, Produkte sind ausverkauft, Varianten wechseln. KI-Modelle haben Schwierigkeiten mit Inhalten, die morgen schon veraltet sein könnten.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">5.</span>
              <span><strong className="text-black">JavaScript-Rendering.</strong> Viele Shops laden Content per JavaScript nach. GPTBot und PerplexityBot können nicht immer rendern. Was sie nicht sehen, existiert nicht.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Google Shopping vs ChatGPT */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Google Shopping vs. ChatGPT-Empfehlungen: Zwei verschiedene Universen
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Deine Google Shopping-Kampagne läuft? Herzlichen Glückwunsch. Das hat mit KI-Sichtbarkeit
            ungefähr so viel zu tun wie dein Führerschein mit deiner Kochfähigkeit. Beides nützlich.
            Null Zusammenhang.
          </p>
          <p>
            Google Shopping ist ein Auktionssystem. Du zahlst für Klicks. Der beste Bieter gewinnt.
            ChatGPT ist ein Empfehlungssystem. Der <strong className="text-black">informativste, vertrauenswürdigste
            Content</strong> gewinnt. Kein Budget der Welt kann das kaufen.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden text-sm md:text-base">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-black">Kriterium</th>
                <th className="text-left p-4 font-semibold text-black">Google Shopping</th>
                <th className="text-left p-4 font-semibold text-black">ChatGPT / Perplexity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Wie du reinkommst</td>
                <td className="p-4 text-gray-600">Produktfeed + Budget</td>
                <td className="p-4 text-gray-600">Zitierbarer Expertise-Content</td>
              </tr>
              <tr className="border-t border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-black">Was zählt</td>
                <td className="p-4 text-gray-600">Preis, Gebot, Relevanz</td>
                <td className="p-4 text-gray-600">Vertrauen, Struktur, Quellen</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Content-Typ</td>
                <td className="p-4 text-gray-600">Produktdaten (Titel, Preis, Bild)</td>
                <td className="p-4 text-gray-600">Buying Guides, Vergleiche, Tests</td>
              </tr>
              <tr className="border-t border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-black">Kosten</td>
                <td className="p-4 text-gray-600">CPC (steigt jährlich 10-15%)</td>
                <td className="p-4 text-gray-600">Content-Erstellung (einmalig + Updates)</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Nachhaltigkeit</td>
                <td className="p-4 text-red-500">Budget aus = weg</td>
                <td className="p-4 text-brand-accent">Baut sich über Zeit auf</td>
              </tr>
              <tr className="border-t border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-black">Nutzer-Intent</td>
                <td className="p-4 text-gray-600">Kaufbereit, vergleicht Preise</td>
                <td className="p-4 text-gray-600">Recherchiert, sucht Expertise</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Vertrauen</td>
                <td className="p-4 text-gray-600">Nutzer weiß: ist Werbung</td>
                <td className="p-4 text-brand-accent">KI-Empfehlung = implizites Vertrauen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mt-6">
          Der entscheidende Punkt: Ein Nutzer, der ChatGPT nach dem besten Laufschuh fragt, vertraut
          der Empfehlung mehr als einer Google Shopping-Anzeige. Weil er weiß, dass die Anzeige gekauft ist.
          Die KI-Empfehlung fühlt sich an wie der Rat eines Freundes. Eines sehr belesenen Freundes.
        </p>
      </section>

      {/* Was Shops denken vs. Realität */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was Online-Shops glauben vs. was tatsächlich funktioniert
        </h2>

        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-red-400 mb-3">Was Shops glauben</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  &bdquo;Unsere Produktbeschreibungen sind gut geschrieben. Wir haben sogar einen Blog.
                  Letzte Woche haben wir einen Artikel über unseren neuen Frühjahrs-Sale veröffentlicht.
                  Das ist doch Content, oder?&ldquo;
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-accent mb-3">Was tatsächlich funktioniert</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ein 2.500-Wörter Buying Guide &bdquo;Laufschuhe für Anfänger: Was Podologen empfehlen&ldquo;
                  mit Vergleichstabelle, Expertenmeinung, Quellenangaben und klarer Answer-First-Struktur.
                  <strong className="text-black"> Dieser Content wird von KI zitiert.</strong> Dein
                  Sale-Artikel nicht.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-red-400 mb-3">Was Shops glauben</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  &bdquo;Wir haben Product Schema auf allen Seiten. Technisch sind wir perfekt aufgestellt.
                  Wir haben sogar aggregateRating drin.&ldquo;
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-accent mb-3">Was tatsächlich funktioniert</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Product Schema ist die Eintrittskarte, nicht das Konzert. Ohne begleitenden
                  Expertise-Content ist dein Schema wie ein perfekt formatierter Lebenslauf für einen
                  Job, auf den du dich nie bewirbst.
                  <strong className="text-black"> Schema + Content + Autorität = KI-Sichtbarkeit.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-red-400 mb-3">Was Shops glauben</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  &bdquo;Wir ranken auf Seite 1 bei Google für unsere wichtigsten Keywords. Also sind wir
                  doch auch für KI sichtbar, oder?&ldquo;
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-accent mb-3">Was tatsächlich funktioniert</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Google-Rankings und KI-Zitierungen korrelieren nur teilweise. KI bevorzugt Content
                  mit klaren Fakten, Quellenangaben und Answer-First-Struktur &mdash; nicht den Content mit
                  den meisten Backlinks. Du kannst Platz 1 bei Google sein und bei ChatGPT nicht existieren.
                  <strong className="text-black"> Passiert häufiger, als du denkst.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Der Content, der für E-Commerce funktioniert */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Der Content, den KI von Online-Shops will (und nicht bekommt)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Stell dir vor, du betreibst einen Outdoor-Shop. Du hast 3.000 Produkte und einen Blog mit
            &bdquo;10 Gründe, warum Wandern toll ist&ldquo;. Das ist nett. Und völlig nutzlos für
            KI-Sichtbarkeit. Was du stattdessen brauchst:
          </p>
        </div>

        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Buying Guides mit echtem Fachwissen</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Nicht &bdquo;Die 10 besten Zelte 2026&ldquo; mit Amazon-Affiliate-Links. Sondern:
              &bdquo;Zelt kaufen: Was du über Materialien, Wassersäule und Konstruktion wissen musst &mdash;
              von einem Bergführer erklärt.&ldquo; Mit deinem Experten als Autor, mit messbaren Fakten,
              mit Vergleichstabellen.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">KI-Bonus:</strong> Dieser Content beantwortet
              Dutzende Long-Tail-Fragen gleichzeitig. &bdquo;Welches Zelt für 2 Personen?&ldquo;, &bdquo;Zelt mit
              niedriger Wassersäule?&ldquo;, &bdquo;Tunnelzelt vs. Kuppelzelt?&ldquo; &mdash; ein Guide, viele KI-Antworten.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Vergleichs-Content: X vs. Y</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              &bdquo;ASICS Gel-Nimbus vs. Nike Pegasus: Welcher Laufschuh für welchen Läufer?&ldquo;
              Mit echten Testdaten, Gewichtsvergleich, Einsatzgebiet, Preis-Leistung. Das ist der Content,
              den KI-Systeme lieben, weil er eine konkrete Entscheidungsfrage beantwortet.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">KI-Bonus:</strong> Vergleichs-Content ist
              das Goldformat für KI-Zitierungen. Die Princeton-GEO-Studie zeigt: Vergleichsartikel erhalten bis
              zu 115% mehr Zitierungen als reine Produktbeschreibungen.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Problemlösungs-Content</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              &bdquo;Knieschmerzen beim Laufen: Welche Schuhe helfen?&ldquo; &mdash; geschrieben mit Input
              eines Sportmediziners, mit Quellenangaben aus Fachpublikationen. Du verkaufst nicht
              direkt, du baust Vertrauen auf. Und wenn ChatGPT dann gefragt wird, welcher Shop sich
              mit Laufschuhen für Knieprobleme auskennt &mdash; ratet mal, wen es empfiehlt.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">KI-Bonus:</strong> Problemlösungs-Content
              triggert E-E-A-T-Signale wie nichts anderes. Experience + Expertise + Authoritativeness +
              Trustworthiness &mdash; alles in einem Artikel.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Kategorie-Expertise-Seiten</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Deine Kategorie &bdquo;Wanderschuhe&ldquo; zeigt aktuell 127 Produkte mit Filtern. Für KI
              ist das eine Datenbank, kein Content. Was fehlt: Ein 500-Wörter Intro, das erklärt, worauf
              es bei Wanderschuhen ankommt, welche Typen es gibt und wann welcher sinnvoll ist. Mit
              FAQ-Sektion und internen Links zu deinen Buying Guides.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">KI-Bonus:</strong> Kategorie-Expertise-Seiten
              sind der Hub, von dem aus KI-Crawler deine gesamte Produktwelt verstehen. Ohne sie ist dein
              Shop ein Labyrinth ohne Wegweiser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Schema richtig machen */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Product Schema: Die technische Basis, die 90% der Shops falsch machen
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Du hast Product Schema auf deinen Seiten? Glückwunsch. Aber lass mich raten: Es ist
            auto-generiert von deinem Shopsystem, enthält Mindestdaten und wurde seit der Installation
            nie wieder angefasst. Das ist wie ein Auto mit Motor, aber ohne Räder. Technisch vorhanden.
            Praktisch nutzlos.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-black mb-4">Was dein Product Schema braucht (Minimum)</h3>
          <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">name</strong> &mdash; Der vollständige Produktname, nicht &bdquo;Artikel 48372&ldquo;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">description</strong> &mdash; Mindestens 100 Wörter mit echtem Informationsgehalt, nicht nur Features</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">brand</strong> &mdash; Als eigenständiges Brand-Objekt, nicht nur ein String</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">offers</strong> &mdash; Mit price, priceCurrency (EUR), availability (InStock/OutOfStock) und url</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">aggregateRating</strong> &mdash; Nur mit echten Bewertungen. Fake-Ratings erkennt KI sofort (siehe oben, Preisschild ohne Tür)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">review</strong> &mdash; Mindestens 3 echte Kundenbewertungen als Review-Objekte mit author und reviewBody</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">image</strong> &mdash; Hochauflösende Produktbilder (mindestens 1200px breit)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
              <span><strong className="text-black">sku &amp; gtin</strong> &mdash; Eindeutige Identifikatoren, damit KI dein Produkt zuordnen kann</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm mt-6">
          <p className="text-sm font-bold text-brand-accent mb-3">Pro-Tipp: Schema + Content = Magie</p>
          <p className="text-base text-gray-600 leading-relaxed">
            Das beste Product Schema nützt nichts ohne begleitenden Content. Aber das beste Content nützt
            wenig ohne Schema. Die Kombination ist der Punkt: Dein Schema sagt der KI <em>was</em> dein Produkt
            ist. Dein Content sagt der KI, <em>warum</em> es empfehlenswert ist. Eins ohne das andere ist wie
            ein Sandwich mit nur einer Scheibe Brot. Technisch essbar. Praktisch traurig.
          </p>
        </div>
      </section>

      {/* Die E-Commerce KI-Strategie in 5 Schritten */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die E-Commerce KI-Strategie: 5 Schritte, die tatsächlich funktionieren
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Kein Wunschdenken. Kein &bdquo;einfach mal Content erstellen&ldquo;. Ein konkreter Plan,
          der aus einem unsichtbaren Shop einen zitierfähigen Shop macht.
        </p>

        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Audit: Wo stehst du wirklich?</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Frag ChatGPT und Perplexity nach deinen Top-Produktkategorien. Wirst du erwähnt?
                  Werden deine Wettbewerber erwähnt? Prüfe dein bestehendes Schema-Markup. Identifiziere
                  deine 10 wichtigsten Kategorien nach Umsatz und Suchvolumen. Das ist dein Startpunkt.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Technische Basis: Schema &amp; Crawlability</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Product Schema erweitern (siehe Checkliste oben). llms.txt konfigurieren. Server-Side
                  Rendering sicherstellen, damit KI-Bots deine Inhalte sehen. robots.txt prüfen &mdash;
                  blockierst du GPTBot oder PerplexityBot? Viele Shops tun das versehentlich.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Content-Hub pro Kategorie aufbauen</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Für jede Top-Kategorie: 1 Buying Guide, 2-3 Vergleichsartikel, 1 Problemlösungs-Content.
                  Kategorie-Expertise-Seite als Hub mit internen Links. Jeder Artikel mit Answer-First-Struktur,
                  Quellenangaben und echtem Fachwissen. Kein umgeschriebener Wikipedia-Content. Echte Expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Autorität aufbauen</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Externe Erwähnungen in Fachmedien. Echte Produkttests auf unabhängigen Portalen.
                  Gastbeiträge in Branchenblogs. KI-Systeme validieren über externe Quellen. Wenn
                  nur deine eigene Website sagt, dass du der Experte bist &mdash; glaubt dir keine KI.
                  Genau wie im echten Leben, eigentlich.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">5</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Monitoring &amp; Iteration</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Monatlich prüfen: Wirst du in KI-Antworten für deine Kategorien erwähnt? Welche
                  Wettbewerber tauchen auf? Welche Fragen werden gestellt, die du noch nicht beantwortest?
                  Content aktualisieren, erweitern, verbessern. KI-Sichtbarkeit ist kein Projekt. Es ist
                  ein Prozess. Wie Zähneputzen. Hörst du auf, fällt alles raus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Die größten E-Commerce KI-Fails */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die größten E-Commerce KI-Fails (echte Beispiele, anonymisiert)
        </h2>

        <div className="space-y-5">
          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">Der &bdquo;Wir haben doch SEO&ldquo;-Shop</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Großer Modeshop, 8.000 Produkte, SEO-Agentur seit 3 Jahren, Seite-1-Rankings für 200+ Keywords.
              KI-Sichtbarkeit: null. Kein einziges Produkt, keine einzige Kategorie wird von ChatGPT oder
              Perplexity erwähnt. Warum? Weil der gesamte Content transaktional ist. Kein Buying Guide,
              kein Vergleich, kein Ratgeber. Nur Produktseiten und Sale-Banner.
              <strong className="text-black"> 36.000&nbsp;&euro; SEO-Budget pro Jahr. Null KI-Empfehlungen.</strong>
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">Der &bdquo;500 KI-Artikel in einer Woche&ldquo;-Shop</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Elektronik-Shop lässt ChatGPT 500 &bdquo;Buying Guides&ldquo; schreiben und veröffentlicht sie
              in einer Woche. Ergebnis: Google Helpful Content Penalty, 60% Traffic-Verlust. KI-Sichtbarkeit?
              Negativ &mdash; die Domain wurde als Content-Spam markiert. Jetzt ist der Shop bei Google
              UND bei KI unsichtbar. Doppelt bestraft.
              <strong className="text-black"> Manchmal ist Nichtstun die bessere Strategie.</strong>
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">Der &bdquo;Fake-Bewertungen im Schema&ldquo;-Shop</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Nahrungsergänzungsmittel-Shop packt 200 Fake-Bewertungen ins Product Schema. Durchschnitt:
              4,9 Sterne. Problem: Die echten Trustpilot-Bewertungen zeigen 3,2 Sterne. KI-Systeme
              vergleichen diese Daten. Ergebnis: Die Domain wird als unzuverlässig eingestuft. Nicht nur
              die Bewertungen &mdash; der gesamte Content wird angezweifelt.
              <strong className="text-black"> Vertrauen zurückgewinnen: 12-18 Monate. Wenn überhaupt.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufig gestellte Fragen: KI-Sichtbarkeit für Online-Shops
        </h2>
        <div className="space-y-6">
          {FAQS.map((item) => (
            <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-black mb-2">{item.q}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weiterführende Guides */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-xl font-semibold text-black mb-5">Weiterführende Guides:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/wissen/ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">KI-Sichtbarkeit</p>
              <p className="text-sm text-gray-500 mt-1">Der ultimative Guide: Wie Unternehmen in KI-Antworten sichtbar werden.</p>
            </a>
            <a
              href="/wissen/ai-content-strategie"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">AI Content Strategie</p>
              <p className="text-sm text-gray-500 mt-1">Content, den KI zitiert: Formate, Strukturen und Prozesse für KI-Sichtbarkeit.</p>
            </a>
            <a
              href="/wissen/ai-seo-tools"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">AI SEO Tools</p>
              <p className="text-sm text-gray-500 mt-1">Die besten Tools für KI-Sichtbarkeits-Monitoring und Optimierung.</p>
            </a>
            <a
              href="/wissen/eeat-ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">E-E-A-T &amp; KI-Sichtbarkeit</p>
              <p className="text-sm text-gray-500 mt-1">Warum Expertise, Erfahrung und Vertrauen für KI-Zitierungen entscheidend sind.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-4">
            Dein Shop ist für KI unsichtbar. Lass uns das ändern.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
            In 15 Minuten zeigen wir dir, wie ChatGPT und Perplexity über deine Produktkategorien sprechen &mdash;
            und warum du nicht dabei bist. Kostenlos, ehrlich, ohne Verkaufsdruck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/ai-sichtbarkeit-now" text="KI-Sichtbarkeits-Check für Shops" primary />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

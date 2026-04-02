import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Reicht Google My Business für KI-Sichtbarkeit?',
    a: 'Nein. Google My Business ist für Google Maps und die lokale Suche. ChatGPT, Perplexity und Claude haben keinen Zugriff auf Google My Business-Daten. Diese Systeme arbeiten mit Web-Content, Verzeichniseinträgen, Bewertungsportalen und strukturierten Daten auf deiner Website. Dein GMB-Profil kann noch so perfekt sein — wenn deine Website nichts Zitierbares bietet, existierst du für KI nicht.',
  },
  {
    q: 'Wie finde ich heraus, ob mein lokales Unternehmen in ChatGPT sichtbar ist?',
    a: 'Frag ChatGPT direkt: „Welcher [deine Branche] in [deine Stadt] ist empfehlenswert?" und „Kannst du [dein Firmenname] in [deine Stadt] empfehlen?". Teste verschiedene Formulierungen. Mach das Gleiche bei Perplexity und Google AI. Dokumentiere die Ergebnisse. Wenn du nirgends auftauchst, weißt du, wo du stehst: am Anfang.',
  },
  {
    q: 'Welche lokalen Unternehmen profitieren am meisten von KI-Sichtbarkeit?',
    a: 'Unternehmen, bei denen Kunden vor der Kontaktaufnahme recherchieren: Anwälte, Ärzte, Handwerker, Restaurants, Immobilienmakler, Steuerberater, Architekten. Weniger relevant ist es für Unternehmen mit reiner Laufkundschaft ohne Online-Recherche. Grundregel: Wenn deine Kunden googlen, bevor sie anrufen, werden sie bald ChatGPT fragen, bevor sie anrufen.',
  },
  {
    q: 'Wie wichtig sind Online-Bewertungen für KI-Sichtbarkeit?',
    a: 'Sehr wichtig, aber anders als du denkst. KI-Systeme lesen nicht nur die Sternebewertung, sondern den Text der Bewertungen. Detaillierte Bewertungen auf Google, Trustpilot, Yelp und Branchenportalen liefern KI-Systemen Kontext über deine Stärken, Spezialisierungen und Kundenzufriedenheit. 50 echte, ausführliche Bewertungen sind mehr wert als 500 Fünf-Sterne-Bewertungen ohne Text.',
  },
  {
    q: 'Kann ich lokale KI-Sichtbarkeit selbst aufbauen?',
    a: 'Die Grundlagen ja: Website mit LocalBusiness-Schema, konsistente NAP-Daten, Expertise-Content zu deinem Fachgebiet, Verzeichniseinträge. Der Aufwand liegt bei 20-40 Stunden für die Ersteinrichtung und 5-10 Stunden monatlich für Content und Monitoring. Eine Agentur bringt Systematik und Erfahrung, aber die technische Basis kannst du mit diesem Guide selbst umsetzen.',
  },
  {
    q: 'Wie lange dauert es, bis mein lokales Unternehmen in KI-Antworten erscheint?',
    a: 'Bei Perplexity, das das Live-Web durchsucht, können Ergebnisse nach 2-4 Wochen sichtbar werden. Bei ChatGPT dauert es 3-6 Monate, da die Trainingsdaten in Zyklen aktualisiert werden. Google AI Overviews reagieren schneller, typischerweise innerhalb weniger Wochen. Der Schlüssel ist Konsistenz: eine einmalige Optimierung reicht nicht. Du brauchst regelmäßige Signale.',
  },
  {
    q: 'Ist lokale KI-Sichtbarkeit nur für Hamburg relevant?',
    a: 'Nein. Das Prinzip funktioniert für jede Stadt. Wir nutzen Hamburg als Beispiel, weil wir hier arbeiten und die lokale Landschaft kennen. Die Strategien — LocalBusiness-Schema, lokaler Expertise-Content, Verzeichnispräsenz, Bewertungsmanagement — funktionieren in München, Berlin, Köln oder jeder anderen deutschen Stadt genauso.',
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
  headline: 'Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist',
  description:
    'Google Maps ist nicht ChatGPT. Warum lokale Unternehmen in KI-Antworten unsichtbar sind und wie Restaurants, Anwälte und Handwerker lokale KI-Sichtbarkeit aufbauen.',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/lokale-ki-sichtbarkeit',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Lokale KI-Sichtbarkeit' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function LokaleKiSichtbarkeitPage() {
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
            <li className="text-black font-medium">Lokale KI-Sichtbarkeit</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Du hast 847 Google-Bewertungen, ein perfektes Google My Business-Profil und einen Aushang
          an der Tür, der sagt &bdquo;Bestes Schnitzel Hamburgs&ldquo;. Frag ChatGPT nach dem besten
          Schnitzel in Hamburg. Du bist nicht dabei. Nicht mal auf der zweiten Seite. Es gibt keine
          zweite Seite.
        </p>
      </section>

      {/* TL;DR */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR &mdash; Für die Ungeduldigen</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Google Maps &ne; ChatGPT.</strong> Zwei komplett verschiedene Systeme. Dein Google My Business-Profil ist für ChatGPT so sichtbar wie ein Flüstern auf einem Metallkonzert.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Lokale Unternehmen sind fast unsichtbar für KI.</strong> 95% aller lokalen Businesses haben null KI-Sichtbarkeit. Das ist die schlechte Nachricht. Die gute: Deine Konkurrenz auch nicht. Noch nicht.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Die Lösung ist nicht kompliziert.</strong> LocalBusiness-Schema, Expertise-Content, konsistente Verzeichniseinträge. Klingt langweilig? Ist es. Funktioniert trotzdem.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Wer jetzt anfängt, gewinnt.</strong> Lokale KI-Sichtbarkeit ist ein Wettlauf, bei dem 95% der Teilnehmer noch nicht wissen, dass das Rennen begonnen hat.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Google Maps vs ChatGPT */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Google Maps vs. ChatGPT: Warum lokales SEO nicht reicht
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Seit 15 Jahren erzählen dir SEO-Agenturen: &bdquo;Google My Business ist das Wichtigste für
            lokale Unternehmen.&ldquo; Und sie hatten recht. Für Google. Aber ChatGPT ist nicht Google.
            Perplexity ist nicht Google. Claude ist nicht Google. Und die Leute, die &bdquo;Bester Anwalt
            Hamburg&ldquo; in ChatGPT eintippen statt in Google, werden jeden Monat mehr.
          </p>
          <p>
            <strong className="text-black">Das Problem:</strong> ChatGPT hat keinen Zugriff auf
            Google My Business. Es kann dein Profil nicht sehen. Nicht deine Öffnungszeiten, nicht deine
            Bewertungen, nicht dein schönes Titelbild mit dem Sonnenuntergang. Für ChatGPT existiert dein
            GMB-Profil schlicht nicht. So als hättest du einen Laden ohne Adresse.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden text-sm md:text-base">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-black">Kriterium</th>
                <th className="text-left p-4 font-semibold text-black">Google Maps / Local Pack</th>
                <th className="text-left p-4 font-semibold text-black">ChatGPT / Perplexity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Datenquelle</td>
                <td className="p-4 text-gray-600">Google My Business-Profil</td>
                <td className="p-4 text-gray-600">Web-Content, Verzeichnisse, Bewertungsportale</td>
              </tr>
              <tr className="border-t border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-black">Ranking-Signal</td>
                <td className="p-4 text-gray-600">Nähe, Relevanz, Prominenz</td>
                <td className="p-4 text-gray-600">Expertise, Quellenqualität, Konsistenz</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Bewertungen</td>
                <td className="p-4 text-gray-600">Google-Bewertungen dominant</td>
                <td className="p-4 text-gray-600">Alle Plattformen: Google, Trustpilot, Yelp, Jameda etc.</td>
              </tr>
              <tr className="border-t border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-black">Content</td>
                <td className="p-4 text-gray-600">GMB-Posts, Fotos, Q&amp;A</td>
                <td className="p-4 text-gray-600">Website-Content, Blog, Fachartikel</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Schema-Markup</td>
                <td className="p-4 text-gray-600">Hilft indirekt</td>
                <td className="p-4 text-brand-accent">Essentiell (LocalBusiness-Schema)</td>
              </tr>
              <tr className="border-t border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-black">Aktualisierung</td>
                <td className="p-4 text-gray-600">Echtzeit</td>
                <td className="p-4 text-gray-600">Verzögert (Wochen bis Monate)</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium text-black">Wettbewerb</td>
                <td className="p-4 text-red-500">Extrem hoch, jeder macht es</td>
                <td className="p-4 text-brand-accent">Fast keiner macht es (noch)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mt-6">
          Die letzte Zeile ist die wichtigste. Bei Google Maps kämpfst du gegen jeden Wettbewerber in
          deiner Stadt. Bei KI-Sichtbarkeit bist du in den meisten lokalen Branchen einer von vielleicht
          drei Anbietern, die überhaupt optimieren. Das ist der First-Mover-Vorteil, von dem BWL-Professoren
          immer reden. Nur eben real.
        </p>
      </section>

      {/* Warum lokale Unternehmen unsichtbar sind */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum 95% der lokalen Unternehmen für KI unsichtbar sind
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Lass mich raten: Deine Website hat eine Startseite mit einem großen Foto, eine
            &bdquo;Über uns&ldquo;-Seite mit Gründungsgeschichte, eine Leistungsseite mit Aufzählungspunkten
            und ein Kontaktformular. Das war&rsquo;s. Vielleicht noch ein Blog mit dem letzten Eintrag
            von 2023: &bdquo;Frohe Weihnachten an alle Kunden!&ldquo;
          </p>
          <p>
            <strong className="text-black">Für eine KI gibt es hier nichts zu holen.</strong> Keine
            Expertise. Keine Antworten auf Fragen. Keine Einordnung. Kein Grund, dich als Quelle zu
            zitieren. Deine Website ist ein digitales Schaufenster. KI braucht eine Bibliothek.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-black mb-4">Die 6 Gründe, warum lokale Unternehmen unsichtbar bleiben</h3>
          <ol className="space-y-4 text-base text-gray-600 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">1.</span>
              <span><strong className="text-black">Keine Website oder nur eine Visitenkarten-Website.</strong> 3 Seiten, kein Blog, kein Schema-Markup. Für KI ist das weniger Informationsgehalt als ein Telefonbucheintrag aus 1997.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">2.</span>
              <span><strong className="text-black">Kein zitierbarer Content.</strong> Die Frage &bdquo;Welcher Klempner in Hamburg-Eimsbüttel ist empfehlenswert?&ldquo; kann nur beantwortet werden, wenn es zitierbaren Content gibt. Nicht deine Leistungsseite. Expertise-Content.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">3.</span>
              <span><strong className="text-black">Kein LocalBusiness-Schema.</strong> Ohne strukturierte Daten weiß die KI nicht einmal, was du bist, wo du bist und was du anbietest. Du bist ein Datenloch.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">4.</span>
              <span><strong className="text-black">Inkonsistente NAP-Daten.</strong> Dein Name, deine Adresse und Telefonnummer sind auf jeder Plattform anders geschrieben. Für KI ist das nicht ein Unternehmen mit Tippfehlern, sondern drei verschiedene Unternehmen.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">5.</span>
              <span><strong className="text-black">Keine externe Präsenz.</strong> Du bist nur auf deiner eigenen Website und bei Google. Keine Verzeichniseinträge, keine Branchenportale, keine Erwähnungen in lokalen Medien. KI braucht mehrere Quellen zur Validierung.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent font-bold shrink-0">6.</span>
              <span><strong className="text-black">Bewertungen nur auf Google.</strong> ChatGPT sieht deine Google-Bewertungen nicht direkt. Es sieht Bewertungen auf Trustpilot, Yelp, Jameda, Anwalt.de &mdash; Plattformen, die es crawlen kann.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Hamburg-Beispiel */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Hamburg-Reality-Check: Wer ist sichtbar, wer nicht?
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            Wir haben es getestet. Zehn typische lokale Suchanfragen bei ChatGPT und Perplexity,
            alle mit Hamburg-Bezug. Das Ergebnis ist ernüchternd &mdash; aber lehrreich.
          </p>
        </div>

        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-black mb-3">&bdquo;Bester Italiener in Hamburg&ldquo;</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              ChatGPT empfiehlt 5 Restaurants. Keins davon hat den höchsten Google-Bewertungsdurchschnitt. Alle
              5 haben eines gemeinsam: <strong className="text-black">Erwähnungen in Hamburger Gastro-Magazinen, Blogs
              und Bewertungsportalen außerhalb von Google.</strong> Die KI zitiert, was sie im Web findet &mdash;
              nicht was bei Google Maps steht.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">Lesson learned:</strong> Lokale
              Medienerwähnungen und Branchenportale sind für KI-Sichtbarkeit wichtiger als die Google-Bewertung.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-black mb-3">&bdquo;Guter Steuerberater Hamburg Altona&ldquo;</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              ChatGPT nennt genau einen Steuerberater beim Namen. Alle anderen werden als &bdquo;es gibt mehrere
              gute Optionen&ldquo; zusammengefasst. Der eine, der genannt wird? Hat einen Blog mit Fachartikeln zu
              Steuer-Themen für Hamburger Unternehmen. <strong className="text-black">Spezifischer,
              lokaler Expertise-Content.</strong> Nicht &bdquo;Wir sind Ihr Steuerberater in Hamburg&ldquo;,
              sondern echte Fachartikel.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">Lesson learned:</strong> Expertise-Content
              mit lokalem Bezug ist der stärkste Hebel für lokale KI-Sichtbarkeit. Ein Artikel über
              &bdquo;Gewerbesteuer in Hamburg: Was Selbstständige wissen müssen&ldquo; schlägt jede GMB-Optimierung.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-black mb-3">&bdquo;Notfall-Klempner Hamburg&ldquo;</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              ChatGPT empfiehlt keinen einzigen konkreten Klempner. Stattdessen: allgemeine Tipps und den
              Verweis auf &bdquo;lokale Handwerkerportale&ldquo;. Warum? <strong className="text-black">Kein
              Klempner in Hamburg hat zitierbaren Content.</strong> Keine Website mit Expertise, keine
              Fachbeiträge, nichts. Die gesamte Branche ist für KI ein schwarzes Loch.
            </p>
            <div className="bg-brand-accent/5 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong className="text-black">Lesson learned:</strong> In manchen Branchen
              ist der Wettbewerb um KI-Sichtbarkeit exakt null. Wer als Erster anfängt, dominiert. Wie ein
              leerer Parkplatz um 5 Uhr morgens &mdash; du kannst dir den besten Platz aussuchen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branchenspezifische Strategien */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Lokale KI-Sichtbarkeit nach Branche: Was funktioniert wo?
        </h2>

        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Restaurants &amp; Gastronomie</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Dein Menu als PDF auf der Website ist das gastronomische Äquivalent einer Faxnachricht.
              KI kann kein PDF lesen. Was du brauchst:
            </p>
            <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Speisekarte als HTML auf der Website (nicht als PDF oder Bild)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Restaurant-Schema mit servesCuisine, priceRange und menu</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Content über Küche, Konzept, Herkunft der Zutaten, Chef-Philosophie</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Präsenz auf Gastro-Portalen: Falstaff, The Fork, lokale Food-Blogs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Anwälte &amp; Steuerberater</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Deine Website sagt &bdquo;Wir beraten Sie kompetent und individuell&ldquo;. Das sagt jede
              Kanzlei. Weißt du, was ChatGPT damit anfängt? Nichts. Was stattdessen funktioniert:
            </p>
            <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Fachartikel zu lokalen Rechtsthemen: &bdquo;Mietrecht Hamburg: Was Vermieter 2026 wissen müssen&ldquo;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>LegalService oder AccountingService Schema mit Spezialisierungen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>FAQ-Seite mit echten Mandantenfragen und detaillierten Antworten</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Profile auf Anwalt.de, JUVE, steuerberater.de mit konsistenten Daten</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Handwerker &amp; Dienstleister</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Dein Installateur-Betrieb hat eine Website von 2018 mit einem Bild eines lächelnden
              Handwerkers mit Daumen nach oben. Dieses Stock-Foto hat ChatGPT circa 47.000 Mal gesehen.
              Es macht keinen Eindruck. Was stattdessen funktioniert:
            </p>
            <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Ratgeber-Content: &bdquo;Heizung tauschen Hamburg: Förderung, Kosten, Ablauf 2026&ldquo;</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>HomeAndConstructionBusiness Schema mit areaServed (Hamburg + Stadtteile)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Echte Projektbeispiele mit Vorher/Nachher, Kosten und Zeitrahmen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Profile auf MyHammer, Check24, Handwerkskammer Hamburg</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Ärzte &amp; Therapeuten</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              &bdquo;Wir nehmen uns Zeit für Sie&ldquo; steht auf jeder Arztpraxis-Website. Das ist
              so differenzierend wie &bdquo;Wir haben auch Türen&ldquo;. Was KI braucht:
            </p>
            <ul className="space-y-2 text-base text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Fachartikel zu Behandlungsmethoden mit medizinischen Quellen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>MedicalBusiness oder Physician Schema mit medicalSpecialty</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Patienteninformationen, die echte Fragen beantworten, nicht Marketing-Floskeln</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent font-bold shrink-0 mt-0.5">&#10003;</span>
                <span>Profile auf Jameda, Doctolib, Sanego mit vollständigen, aktuellen Informationen</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Der 7-Schritte-Plan */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Lokale KI-Sichtbarkeit aufbauen: Der 7-Schritte-Plan
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Kein Marketing-Blabla. Konkrete Schritte, die du diese Woche starten kannst.
          Auch wenn du nicht weißt, was Schema-Markup ist. Besonders dann.
        </p>

        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">KI-Sichtbarkeits-Check</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Frag ChatGPT, Perplexity und Google AI nach deiner Branche + Stadt. Dokumentiere:
                  Wirst du genannt? Welche Wettbewerber werden genannt? Welche Quellen werden zitiert?
                  Das dauert 30 Minuten und gibt dir ein brutales, aber ehrliches Bild.
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
                <h3 className="text-lg font-semibold text-black mb-2">LocalBusiness-Schema implementieren</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  JSON-LD auf jeder Seite mit: name, address (mit streetAddress, postalCode, addressLocality),
                  telephone, openingHours, geo (latitude/longitude), areaServed, priceRange, sameAs (Links zu
                  allen Profilen). Das ist die absolute Basis. Ohne das bist du für KI nicht mal eine Adresse.
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
                <h3 className="text-lg font-semibold text-black mb-2">NAP-Konsistenz herstellen</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Name, Adresse, Telefonnummer &mdash; überall identisch. Nicht &bdquo;Müller &amp; Söhne GmbH&ldquo;
                  auf der Website und &bdquo;Müller und Söhne&ldquo; bei Google und &bdquo;Fa. Müller&ldquo; auf
                  Yelp. Für KI sind das drei verschiedene Unternehmen. Prüfe alle Verzeichnisse, Portale und
                  Social-Media-Profile. Ja, das ist mühsam. Ja, es ist notwendig.
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
                <h3 className="text-lg font-semibold text-black mb-2">Expertise-Content mit lokalem Bezug erstellen</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Mindestens 5 Fachartikel, die lokale Fragen beantworten. Nicht &bdquo;Wir sind toll&ldquo;,
                  sondern &bdquo;Wasserschaden in Hamburger Altbauten: Was Mieter wissen müssen&ldquo;. Der Artikel
                  muss eine Frage beantworten, die Leute tatsächlich bei ChatGPT stellen. Answer-First-Struktur,
                  Quellenangaben, echtes Fachwissen.
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
                <h3 className="text-lg font-semibold text-black mb-2">Verzeichnispräsenz ausbauen</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Branchenspezifische Portale, lokale Verzeichnisse, Bewertungsplattformen. Nicht nur
                  vorhanden sein, sondern mit vollständigen Profilen: Beschreibung, Fotos, Öffnungszeiten,
                  Leistungen. Diese Einträge sind die externen Quellen, über die KI dich validiert. Mehr
                  Quellen = mehr Vertrauen = häufigere Empfehlung.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">6</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Bewertungen strategisch managen</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Aktiv um ausführliche Bewertungen bitten &mdash; nicht nur auf Google, sondern auf
                  Branchenportalen und Trustpilot. Der Text der Bewertung ist wichtiger als die Sterne.
                  &bdquo;Hat mein Dachproblem in Hamburg-Eppendorf innerhalb von 2 Tagen gelöst, faire Preise&ldquo;
                  ist für KI Gold wert. &bdquo;Super, 5 Sterne&ldquo; ist wertlos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-brand-accent font-bold text-lg">7</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Monatliches Monitoring</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Jeden Monat: 10 relevante Fragen bei ChatGPT, Perplexity und Google AI stellen. Wirst
                  du genannt? Was hat sich geändert? Welche neuen Wettbewerber tauchen auf? Content
                  aktualisieren, Verzeichnisse pflegen, Bewertungen fördern. Klingt nach Aufwand?
                  Ist es. Aber weniger als 3.000&nbsp;&euro;/Monat für Google Ads, die sofort aufhören
                  zu wirken, wenn du nicht mehr zahlst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was lokale Unternehmen falsch machen */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die 5 größten Fehler lokaler Unternehmen bei KI-Sichtbarkeit
        </h2>

        <div className="space-y-5">
          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">&bdquo;Google My Business reicht doch&ldquo;</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              GMB ist für Google Maps. Punkt. ChatGPT kann dein GMB-Profil nicht sehen. Perplexity
              kann es nicht sehen. Claude kann es nicht sehen. Dein perfektes GMB-Profil ist für
              KI-Systeme so nützlich wie ein Regenschirm unter Wasser. Technisch vorhanden, praktisch
              wirkungslos.
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">&bdquo;Wir haben doch Bewertungen&ldquo;</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Google-Bewertungen allein reichen nicht. KI-Systeme aggregieren über Dutzende Quellen.
              Wenn du nur auf Google bewertet bist, fehlst du in der KI-Datenbasis.
              Und: Eine Bewertung &bdquo;Toll! 5 Sterne!&ldquo; hat für KI null Informationsgehalt.
              Detaillierte Bewertungen mit Kontext sind das, was zählt.
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">&bdquo;Eine Website ist genug&ldquo;</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Deine Website mit 3 Seiten und einem Stock-Foto-Karussell ist nicht genug. Nicht für
              Google und schon gar nicht für KI. Du brauchst Content. Echten Content. Nicht eine
              Über-uns-Seite mit deiner Gründungsgeschichte und ein Kontaktformular. Fachartikel.
              Ratgeber. FAQ-Seiten. Dinge, die Fragen beantworten.
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">&bdquo;KI ist nichts für lokale Unternehmen&ldquo;</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Jeder vierte Deutsche nutzt bereits KI-Assistenten für lokale Empfehlungen. Die Zahl
              verdoppelt sich jährlich. &bdquo;KI ist nichts für uns&ldquo; ist das neue &bdquo;Internet
              ist nichts für uns&ldquo; von 2005. Nur schneller. Wer 2005 keine Website hatte, hat
              10 Jahre aufgeholt. Wer 2026 keine KI-Sichtbarkeit hat, wird weniger Zeit zum Aufholen
              bekommen.
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-3 mb-3">
              <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
              <h3 className="text-lg font-semibold text-black">&bdquo;Wir warten mal ab&ldquo;</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Abwarten ist eine Strategie. Eine schlechte. Jeder Monat, den du wartest, ist ein Monat,
              in dem dein Wettbewerber anfangen könnte. Lokale KI-Sichtbarkeit hat einen massiven
              First-Mover-Vorteil: Wer zuerst als zuverlässige Quelle etabliert ist, wird bevorzugt
              zitiert. Der zweite Platz bekommt Krümel. Wie beim Mittagessen im Büro: wer zuerst
              an der Kantine ist, bekommt das gute Schnitzel.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufig gestellte Fragen: Lokale KI-Sichtbarkeit
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
              href="/wissen/ki-markenwahrnehmung"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">KI-Markenwahrnehmung</p>
              <p className="text-sm text-gray-500 mt-1">Wie KI-Systeme über deine Marke sprechen und wie du das beeinflusst.</p>
            </a>
            <a
              href="/wissen/eeat-ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">E-E-A-T &amp; KI-Sichtbarkeit</p>
              <p className="text-sm text-gray-500 mt-1">Warum Expertise, Erfahrung und Vertrauen für KI-Zitierungen entscheidend sind.</p>
            </a>
            <a
              href="/wissen/sichtbarkeit-in-chatgpt"
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
            >
              <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">Sichtbarkeit in ChatGPT</p>
              <p className="text-sm text-gray-500 mt-1">Wie ChatGPT Quellen auswählt und wie du dort sichtbar wirst.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-4">
            Dein lokales Unternehmen ist für KI unsichtbar. Das muss nicht so bleiben.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
            In 15 Minuten zeigen wir dir, was ChatGPT über deine Branche in deiner Stadt sagt &mdash;
            und warum du nicht dabei bist. Kostenlos, ehrlich, ohne Verpflichtung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/ai-sichtbarkeit-now" text="Lokalen KI-Check starten" primary />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

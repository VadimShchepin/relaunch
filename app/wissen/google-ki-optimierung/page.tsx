import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Gibt es ein eigenes Ranking-System für Google AI Overviews?',
    a: 'Nein. Laut Googles Search-Central-Dokumentation bauen die generativen KI-Funktionen (AI Overviews, AI Mode) auf den bestehenden Ranking- und Qualitätssystemen der Google-Suche auf. Sie nutzen Retrieval-Augmented Generation und Query Fan-out, bei dem eine Anfrage in viele Teilanfragen zerlegt wird. Es gibt also kein separates KI-Ranking, das man getrennt optimieren könnte. Damit eine Seite in einer KI-Funktion verwendet werden kann, muss sie indexiert und für ein Snippet in der normalen Suche zugelassen sein.',
  },
  {
    q: 'Braucht meine Website eine llms.txt, um in Google AI Overviews zu erscheinen?',
    a: 'Für Google: nein. Google schreibt ausdrücklich, dass keine neuen maschinenlesbaren Dateien, KI-Textdateien oder Markdown-Versionen nötig sind, und nennt llms.txt als Beispiel. Für andere Systeme wie ChatGPT oder Perplexity kann eine llms.txt dagegen sinnvoll sein. Sie schadet Google nicht, sie hilft Google nur nicht. Wer Aufwand spart, investiert ihn besser in bessere Inhalte und saubere technische SEO.',
  },
  {
    q: 'Bestraft Google KI-generierte Inhalte?',
    a: 'Nein, nicht pauschal. Google bewertet Qualität, nicht die Herstellungsmethode. Verboten ist „Missbrauch mit in großem Umfang generierten Inhalten" (scaled content abuse): viele Seiten, die primär erstellt werden, um Rankings zu manipulieren, statt Nutzern zu helfen. Ein einzelner, wirklich hilfreicher KI-unterstützter Artikel ist erlaubt. Zehntausend dünne Seiten sind es nicht. Entscheidend sind Absicht und Maßstab, nicht der Einsatz von KI.',
  },
  {
    q: 'Muss ich Content in kurze Blöcke (Chunks) aufteilen, damit die KI ihn versteht?',
    a: 'Google sagt nein. Das sogenannte Chunking ist keine Voraussetzung, weil Googles Systeme Nuancen und Struktur verstehen. Eine klare Gliederung mit Absätzen, Abschnitten und Überschriften ist trotzdem gut, aber das ist normale Lesefreundlichkeit für Menschen, kein KI-Spezialtrick.',
  },
  {
    q: 'Hilft Schema-Markup, um in Googles KI-Antworten zitiert zu werden?',
    a: 'Für die Eignung in generativen KI-Funktionen ist strukturierte Datenauszeichnung laut Google nicht erforderlich. Schema bleibt nützlich für Rich Results in der klassischen Suche, das ist ein anderes Ziel. Wenn du Schema einsetzt, halte dich an die allgemeinen und feature-spezifischen Richtlinien und validiere das Markup.',
  },
  {
    q: 'Was zählt bei Google am meisten für KI-Sichtbarkeit?',
    a: 'Die Grundlagen: Die Seite muss indexierbar, crawlbar und snippet-fähig sein, sie muss serverseitig gerenderte, originäre Inhalte mit klarem Autor und Mehrwert liefern, und sie darf nicht massenhaft dünne Seiten produzieren. Google fasst es so zusammen: Konzentriere dich darauf, was Besucher hilfreich und zufriedenstellend finden. Trust ist innerhalb von E-E-A-T das wichtigste Signal.',
  },
  {
    q: 'Sollte ich KI-Crawler in der robots.txt blockieren?',
    a: 'Für Googles KI-Funktionen ist das kontraproduktiv: Sie nutzen öffentlich zugängliche, crawlbare Inhalte über die normale Google-Indexierung. Wer Googlebot blockiert, fliegt aus Suche und KI-Funktionen gleichzeitig raus. Separate KI-Trainings-Crawler sind eine eigene, lizenzrechtliche Entscheidung. Verwechsle sie nicht mit der Sichtbarkeit in AI Overviews.',
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
  headline: 'Google KI-Optimierung: Was Google offiziell empfiehlt (und welche GEO-Mythen du streichen kannst)',
  description:
    'Googles eigene Dokumentation zur Optimierung für AI Overviews und AI Mode: was offiziell zählt, was Google für unnötig erklärt (llms.txt, Chunking, Spezial-Schema) und was das für deutsche Unternehmen bedeutet.',
  image: 'https://aiseo.hamburg/images/wissen/was-ist-geo.jpg',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
    description:
      'Gründer von aiseo.hamburg. Arbeitet mit deutschen Mittelständlern an Websites, SEO, Google Ads und KI-Sichtbarkeit.',
    knowsAbout: ['Generative Engine Optimization', 'Google AI Overviews', 'SEO', 'KI-Sichtbarkeit', 'E-E-A-T'],
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-05-29',
  dateModified: '2026-05-29',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/google-ki-optimierung',
  inLanguage: 'de',
  about: [
    { '@type': 'Thing', name: 'Google AI Overviews', sameAs: 'https://aiseo.hamburg/wissen/ai-overviews-sichtbarkeit' },
    { '@type': 'Thing', name: 'Generative Engine Optimization', sameAs: 'https://aiseo.hamburg/wissen/was-ist-geo' },
    { '@type': 'Thing', name: 'E-E-A-T', sameAs: 'https://aiseo.hamburg/wissen/eeat-ki-sichtbarkeit' },
    { '@type': 'Thing', name: 'Technische KI-Sichtbarkeit', sameAs: 'https://aiseo.hamburg/wissen/technische-ki-sichtbarkeit' },
  ],
  citation: [
    { '@type': 'CreativeWork', name: 'Google Search Central: AI optimization guide', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
    { '@type': 'CreativeWork', name: 'Google Search Central: Using AI-generated content', url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content' },
    { '@type': 'CreativeWork', name: 'Google Search Central: Spam policies', url: 'https://developers.google.com/search/docs/essentials/spam-policies' },
  ],
  mentions: [
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/ai-overviews-sichtbarkeit', name: 'Sichtbarkeit in Google AI Overviews' },
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/llms-txt-anleitung', name: 'llms.txt Anleitung' },
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/eeat-ki-sichtbarkeit', name: 'E-E-A-T fuer KI-Sichtbarkeit' },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Google KI-Optimierung' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function GoogleKiOptimierungPage() {
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
            <li className="text-black font-medium">Google KI-Optimierung</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Google KI-Optimierung: Was Google offiziell empfiehlt
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Die GEO-Branche verkauft dir Dateien, Tricks und Spezial-Markup für Google AI Overviews. Google selbst sagt in seiner offiziellen Dokumentation: Das meiste davon brauchst du nicht. Hier steht, was wirklich zählt, was du dir sparen kannst, und warum die ehrliche Antwort am Ende mehr Sichtbarkeit bringt.
        </p>
        <p className="mt-6 text-sm text-gray-500">
          Grundlage: Google Search Central, „AI optimization guide" und „Using AI-generated content". Stand Mai 2026.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  Autor                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent font-bold text-lg">VS</div>
          <div>
            <p className="text-sm font-semibold text-black">Von Vadim Shchepin, Gründer von aiseo.hamburg</p>
            <p className="text-sm text-gray-600 leading-relaxed mt-1">
              Arbeitet mit deutschen Mittelständlern an Websites, SEO, Google Ads und KI-Sichtbarkeit. Die Einschätzungen in diesem Artikel stammen aus der praktischen Arbeit mit lokalen Unternehmen und Content-Projekten, die von ChatGPT, Gemini und Claude zitiert wurden. <a href="/ueber-mich" className="text-brand-accent underline hover:no-underline">Mehr über mich</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">Das Wichtigste in 5 Punkten</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">Kein eigenes KI-Ranking.</strong> AI Overviews und AI Mode laufen auf den normalen Ranking- und Qualitätssystemen der Google-Suche. Wer indexiert und snippet-fähig ist, ist auch für KI-Funktionen geeignet.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">Streich diese Aufgaben (für Google):</strong> llms.txt, Content-Chunking, KI-spezifischer Schreibstil und Schema nur für die KI. Google erklärt all das ausdrücklich für unnötig.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Originalität schlägt Masse.</strong> Eigener Blickwinkel, Ersthand-Erfahrung, klarer Autor. Massenhaft dünne KI-Seiten fallen unter „scaled content abuse" und sind ein Spam-Verstoß.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Technik zuerst.</strong> Crawlbar, indexiert, serverseitig gerendert, gute Page Experience. Ohne diese Basis hilft kein Content der Welt.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">Wichtig für andere KI-Systeme:</strong> llms.txt und Zitierfähigkeit helfen bei ChatGPT und Perplexity weiterhin. Diese Seite betrifft ausschließlich Google.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Kernprinzip                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Das Kernprinzip: SEO bleibt der Hebel
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Googles generative KI-Funktionen sind kein eigenes System, das man getrennt bespielt. Sie sitzen auf den bestehenden Ranking- und Qualitätssystemen der Google-Suche.</strong> Technisch geschieht das über Retrieval-Augmented Generation (RAG) und Query Fan-out: Eine Nutzeranfrage wird intern in viele Teilanfragen zerlegt, und das Modell baut seine Antwort aus den Seiten, die für diese Teilanfragen ranken.
          </p>
          <p>
            Daraus folgt die wichtigste Konsequenz: Es gibt kein separates KI-Ranking, das du losgelöst von deiner normalen Sichtbarkeit optimieren könntest. Damit eine Seite überhaupt in einer KI-Funktion auftauchen kann, muss sie indexiert und für ein Snippet in der regulären Suche zugelassen sein.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Gute klassische SEO ist gleichzeitig gute Optimierung für Googles KI-Funktionen. Es gibt keine Abkürzung daran vorbei.
          </p>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Das ist eine gute Nachricht, wenn deine Grundlagen sitzen, und eine unbequeme, wenn du gehofft hast, dir den mühsamen Teil mit einer Datei oder einem Markup-Trick zu ersparen. Google formuliert es selbst nüchtern: Viele Inhalte ranken gut, ganz ohne offensichtliche SEO. Maßgeblich ist, ob Besucher die Seite hilfreich und befriedigend finden.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mt-8">
          <h3 className="text-xl font-semibold text-black mb-3">Beispiel: Query Fan-out in der Praxis</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jemand fragt: „Wer ist die beste Firma für Haushaltsauflösung in Hamburg?" Intern zerlegt das System diese eine Frage in viele Teilfragen, die du nie zu sehen bekommst:
          </p>
          <ul className="space-y-2 text-gray-600 leading-relaxed mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Welche Firmen sind in Hamburg aktiv?</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Welche haben gute Bewertungen?</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Welche nennen Haushaltsauflösung ausdrücklich?</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Welche gelten lokal als vertrauenswürdig?</span></li>
            <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Welche werden von anderen Quellen empfohlen?</span></li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Deshalb verschiebt sich die Optimierung weg vom einzelnen Keyword hin zur vollständigen Themenabdeckung. In der Arbeit mit lokalen Unternehmen sorge ich dafür, dass die wahrscheinlichen Folgefragen irgendwo im Content-Ökosystem bereits beantwortet sind. Wer nur eine Seite zu einem Keyword hat, fällt durch das Raster der Teilfragen.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die 4 offiziellen Empfehlungen                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Die 4 Dinge, die Google dir tatsächlich aufträgt
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Der „AI optimization guide" lässt sich auf vier Empfehlungen eindampfen. Keine davon ist exotisch.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. Wertvolle Inhalte ohne Massenware</h3>
            <p className="text-gray-600 leading-relaxed">
              Liefere einen eigenen Blickwinkel: originäre Analyse, eigene Daten, Ersthand-Erfahrung statt Wiederkäuen vorhandener Texte. Schreibe für Menschen, nicht für Rankings. Gliedere mit klaren Absätzen, Abschnitten und Überschriften. Setze relevante Bilder und Videos ein, wo sie wirklich helfen, und übertreibe es nicht, sonst kippt es in Manipulation.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Klare technische Struktur</h3>
            <p className="text-gray-600 leading-relaxed">
              Die Seite muss indexiert und snippet-fähig sein, öffentlich zugänglich und crawlbar. Bei JavaScript-Frameworks gelten die normalen JavaScript-SEO-Regeln: Der Inhalt muss für Googlebot rendern, nicht nur im Browser. Dazu eine gute Page Experience auf allen Geräten, geringe Ladezeiten, wenig Duplicate Content. Details dazu im Guide zur <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">technischen KI-Sichtbarkeit</a>.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. Lokale und E-Commerce-Daten pflegen</h3>
            <p className="text-gray-600 leading-relaxed">
              Nutze Google Merchant Center und das Google Unternehmensprofil, damit Produkt-, Service- und Standortdaten strukturiert und aktuell vorliegen. Für lokale Anbieter ist das Unternehmensprofil oft der direkteste Weg in lokale KI-Antworten. Mehr dazu im Guide zur <a href="/wissen/lokale-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">lokalen KI-Sichtbarkeit</a>.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Bei KI-Tools die Qualitätslatte halten</h3>
            <p className="text-gray-600 leading-relaxed">
              Wenn du KI zur Content-Erstellung einsetzt, muss das Ergebnis die Search Essentials und die Spam-Richtlinien erfüllen, allen voran die Regel gegen „scaled content abuse". Dazu unten mehr.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Mythbusting                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Was Google ausdrücklich für unnötig erklärt
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Hier wird es unbequem, denn diese Punkte laufen gegen einen Großteil der gängigen GEO-Ratschläge. Google nennt sie in seinem Leitfaden direkt als nicht erforderlich für die Sichtbarkeit in generativen KI-Funktionen. Für Google. Nicht für jede Plattform.
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Verbreitete Behauptung</th>
                <th className="py-3 text-sm font-semibold text-black">Googles Position</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">llms.txt / KI-Textdateien anlegen</td>
                <td className="py-3">Nicht nötig. Google nennt llms.txt direkt als Beispiel für eine nicht erforderliche Datei.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Content in Chunks zerlegen</td>
                <td className="py-3">Keine Voraussetzung. Googles Systeme verstehen Nuance und Struktur.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">KI-optimierter Schreibstil / Keyword-Phrasing</td>
                <td className="py-3">Nicht nötig. Die Systeme verstehen Synonyme und Bedeutung.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Schema-Markup, damit die KI die Seite liest</td>
                <td className="py-3">Für KI-Eignung nicht erforderlich. Schema hilft weiterhin für Rich Results, das ist ein anderes Ziel.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Künstliche Marken-Erwähnungen einkaufen</td>
                <td className="py-3">Wirkungslos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Die praktische Faustregel:</strong> Wenn eine Maßnahme nur existiert, um „die KI zu füttern", und einem menschlichen Leser nichts bringt, kannst du sie für Google streichen. Diese Zeit ist in echten Inhalten und sauberer Technik besser angelegt.
          </p>
          <p>
            Und jetzt die ehrliche Einordnung, die viele Anbieter dir verschweigen: <strong className="text-black">llms.txt ist nicht wertlos. Sie ist nur für Google wertlos.</strong> ChatGPT, Perplexity und andere RAG-Systeme arbeiten anders, und dort kann eine gepflegte <a href="/wissen/llms-txt-anleitung" className="text-brand-accent underline hover:no-underline">llms.txt</a> sowie eine hohe Zitierfähigkeit sehr wohl etwas bringen. Wer plattformübergreifend denkt, behält diese Maßnahmen. Wer nur über Google AI Overviews redet und dir llms.txt als Wundermittel verkauft, hat den offiziellen Leitfaden nicht gelesen.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Für Google: weniger Tricks, mehr Substanz. Für ChatGPT und Perplexity: Zitierfähigkeit und llms.txt bleiben relevant. Genau diese Trennung unterscheidet seriöse von oberflächlicher GEO-Beratung.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Technische Voraussetzungen                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Technische Voraussetzungen: die Checkliste
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Jeder Punkt mit „Nein" schließt eine Seite von KI-Funktionen aus, egal wie gut der Inhalt ist. Prüfe der Reihe nach.
        </p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Indexiert:</strong> Die Seite ist im Google-Index (Prüfung über die Search Console).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Snippet-fähig:</strong> Kein noindex, kein nosnippet, keine blockierenden data-nosnippet-Bereiche.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Crawlbar:</strong> Nicht in der robots.txt für Googlebot gesperrt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Serverseitig gerendert:</strong> Der Hauptinhalt erscheint ohne client-seitiges JavaScript oder wird für Googlebot serverseitig ausgeliefert.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Gute Page Experience:</strong> mobilfreundlich, geringe Latenz, stabiles Layout.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Sauberes Canonical:</strong> kein verwässernder Duplicate Content.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span><strong className="text-black">Korrekte Metadaten:</strong> Title, Meta-Description, Überschriften und Bild-Alt-Texte sind zutreffend und nützlich. Sie liefern dem Modell Kontext.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  KI-generierte Inhalte & Policy                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          KI-generierte Inhalte: Googles Regeln
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Google verbietet KI-Inhalte nicht. Es bewertet Qualität, nicht Herstellungsmethode. Es gibt aber eine harte Grenze und klare Erwartungen.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Die harte Grenze: scaled content abuse</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Verboten ist die Erstellung vieler Seiten mit dem primären Ziel, Rankings zu manipulieren, statt Nutzern zu helfen. Typische Verstöße:
            </p>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Massenhaft KI-Seiten ohne Nutzermehrwert.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Feeds oder Suchergebnisse scrapen und kaum etwas hinzufügen.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Inhalte aus mehreren Quellen zusammenstückeln, ohne sie zu veredeln.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Mehrere Sites aufsetzen, um den Massencharakter zu verschleiern.</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-accent mt-1">&bull;</span><span>Viele keyword-gespickte Seiten mit wenig zusammenhängendem Sinn.</span></li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Entscheidend sind Absicht und Maßstab, nicht der Einsatz von KI. Eine wirklich hilfreiche, KI-unterstützte Seite ist in Ordnung. Zehntausend dünne sind Missbrauch.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100 italic">
              Aus der Praxis: Meine Grenze ist einfach. Wenn KI einem Fachmann hilft, echtes Wissen schneller zu vermitteln, ist das in Ordnung. Wenn KI tausende Seiten erzeugt, die niemand geschrieben, geprüft oder verantwortet hätte, ist es Spam. Das Problem ist nicht die KI, sondern das Veröffentlichen von Information, deren Wahrheit niemand kennt.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Qualität und Metadaten</h3>
            <p className="text-gray-600 leading-relaxed">
              Achte besonders bei automatisch erzeugten Inhalten auf Richtigkeit, Qualität und Relevanz, und genau auf die Metadaten, die solche Pipelines gern vernachlässigen: Title-Elemente, Meta-Descriptions, strukturierte Daten und Bild-Alt-Texte.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Transparenz</h3>
            <p className="text-gray-600 leading-relaxed">
              Google empfiehlt, Lesern Kontext zu geben, wie ein Inhalt entstanden ist. Bei automatisierten Inhalten kann es sinnvoll sein, den Einsatz von Automatisierung offenzulegen und zu erklären, warum sie nützlich war.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100 italic">
              Aus der Praxis: Nicht jeder Text braucht einen KI-Hinweis. Entscheidend ist Verantwortlichkeit. Steht jemand mit Fachwissen hinter der Information, und wurde sie geprüft? Leser interessiert Genauigkeit mehr als die Frage, ob KI beim Entwurf geholfen hat.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">E-Commerce und Merchant Center</h3>
            <p className="text-gray-600 leading-relaxed">
              KI-generierte Bilder müssen IPTC-Metadaten vom Typ DigitalSourceType mit dem Wert TrainedAlgorithmicMedia tragen. KI-generierte Produktattribute müssen separat angegeben und als KI-generiert gekennzeichnet werden.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  E-E-A-T / Who How Why                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          E-E-A-T und das Wer-Wie-Warum
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Google bewertet Inhalte nach Experience, Expertise, Authoritativeness und Trustworthiness. Trust ist davon das wichtigste, die anderen drei zahlen darauf ein. Drei Fragenblöcke helfen bei der Selbstprüfung. Mehr Tiefe im Guide zu <a href="/wissen/eeat-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">E-E-A-T und KI-Sichtbarkeit</a>.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-3">Wer (Who)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ist erkennbar, wer den Inhalt verfasst hat? Gibt es Autorenzeilen, wo Leser sie erwarten? Verlinken diese auf nachvollziehbare Hintergründe und Qualifikationen?
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-3">Wie (How)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ist Automatisierung oder KI-Erzeugung dort offengelegt, wo es relevant ist? Erklärst du, warum die Automatisierung für den Leser nützlich war?
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-3">Warum (Why)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Entsteht der Inhalt primär, um Menschen zu helfen, und nicht, um Rankings zu manipulieren? Das ist die Definition von „people-first content".
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was das für deutsche Unternehmen bedeutet                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was das für deutsche Unternehmen heißt
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Für ein mittelständisches Unternehmen oder einen lokalen Dienstleister in Hamburg ist die Botschaft entlastend: Du musst keiner technischen Mode hinterherrennen. Du musst indexierbar sein, serverseitig gerenderte und ehrlich originäre Inhalte mit klarem Autor liefern, und du darfst nicht in die Massenproduktion dünner Seiten kippen.
          </p>
          <p>
            Der schwierige Teil bleibt der inhaltliche: ein eigener Blickwinkel und nachweisbare Erfahrung. Genau hier scheitern die meisten KI-Pipelines, und genau hier entsteht der Vorsprung. Wer als Handwerksbetrieb, Kanzlei oder Praxis echte Fälle, eigene Zahlen und benannte Fachleute zeigt, sammelt die Trust-Signale, die ein generisch generierter Wettbewerber nicht hat.
          </p>
          <p>
            Und die plattformübergreifende Realität: Deine deutschen Kunden fragen nicht nur Google. Sie fragen ChatGPT und Perplexity. Für diese Systeme bleiben Zitierfähigkeit und eine gepflegte llms.txt sinnvoll. Die Kunst ist, beide Welten getrennt zu denken und nicht die Google-Mythen mit den ChatGPT-Hebeln zu verwechseln. Genau dafür gibt es den Vergleich <a href="/wissen/perplexity-vs-chatgpt-vs-google" className="text-brand-accent underline hover:no-underline">Perplexity vs ChatGPT vs Google</a>.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Aus der Praxis                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Aus der Praxis: Was wirklich zählt
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          So weit die offizielle Dokumentation. Hier ist, was ich nach Jahren mit deutschen Unternehmen und KI-zitierten Projekten tatsächlich beobachte. Manches deckt sich mit Google, manches ergänzt es.
        </p>

        <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl p-6 md:p-8 my-8">
          <p className="text-xl md:text-2xl font-semibold text-black leading-snug">
            „Der größte Teil der KI-Sichtbarkeit entsteht dadurch, dass man eine bessere Quelle wird, nicht dadurch, dass man KI-Systeme besser austrickst."
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">llms.txt: meine ehrliche Erfahrung</h3>
            <p className="text-gray-600 leading-relaxed">
              Ich habe keinen überzeugenden Beleg gesehen, dass eine <a href="/wissen/llms-txt-anleitung" className="text-brand-accent underline hover:no-underline">llms.txt</a> Rankings oder Sichtbarkeit innerhalb von Googles Ökosystem bewegt. Googles öffentliche Aussage deckt sich mit meiner Praxis. Potenziellen Wert sehe ich bei Systemen wie ChatGPT und Perplexity, die sie als Orientierung nutzen können. Der eigentliche Fehler ist aber, llms.txt überhaupt als Ranking-Taktik zu behandeln. Selbst wenn sie etwas bringt, ist der Effekt winzig gegenüber wirklich nützlichem Content, klarer Expertise und echten Autoritätssignalen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-black mb-4">Was funktioniert hat</h3>
              <ul className="space-y-2.5 text-gray-600 leading-relaxed text-sm">
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span><span>Extrem klare Positionierung</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span><span>Thematischer Fokus statt Bauchladen</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span><span>Nützliche, originäre Inhalte</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span><span>Autorität rund um eine konkrete Nische</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span><span>Echte Erfahrung und Fallbeispiele</span></li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-black mb-4">Was ich überschätzt habe</h3>
              <ul className="space-y-2.5 text-gray-600 leading-relaxed text-sm">
                <li className="flex items-start gap-2"><span className="text-gray-400 font-bold mt-0.5 shrink-0">&minus;</span><span>Technische KI-Optimierungstricks</span></li>
                <li className="flex items-start gap-2"><span className="text-gray-400 font-bold mt-0.5 shrink-0">&minus;</span><span>Jeder neuen GEO-Taktik hinterherjagen</span></li>
                <li className="flex items-start gap-2"><span className="text-gray-400 font-bold mt-0.5 shrink-0">&minus;</span><span>Viel Zeit für spekulative Hacks</span></li>
              </ul>
              <p className="text-sm text-gray-500 mt-4 italic">
                Rückblickend kamen die meisten Zuwächse daher, eine bessere Quelle zu werden, nicht ein besserer Manipulator.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Wie ich KI-Sichtbarkeit messe</h3>
            <p className="text-gray-600 leading-relaxed">
              Es gibt bisher kein Pendant zum klassischen Rank-Tracking. Mein Vorgehen ist deutlich manueller: Ich teste regelmäßig ChatGPT, Gemini, Claude und Perplexity mit kommerziellen und informativen Fragen aus dem Markt des Kunden. Dann verfolge ich, ob die Marke auftaucht, wie oft, welche Informationen verwendet werden und welche Wettbewerber genannt werden. Unperfekt, aber oft wertvoller als Vanity-Metriken. Mehr dazu unter <a href="/wissen/ki-sichtbarkeit-messen" className="text-brand-accent underline hover:no-underline">KI-Sichtbarkeit messen</a>.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Deutschland hinkt hinterher, und das ist die Chance</h3>
            <p className="text-gray-600 leading-relaxed">
              Der deutsche Markt ist bei der KI-Suche hinter den USA. Viele Unternehmen verstehen klassisches SEO noch kaum, KI-Optimierung ist oft gar nicht auf dem Radar. Genau das schafft einen Vorsprung: Wer jetzt investiert, sichert sich Sichtbarkeit, bevor der Markt eng wird. Leads kommen dabei selten direkt aus einer KI-Antwort. Sie entstehen, weil das Unternehmen insgesamt zu einer stärkeren Autorität wird und dann über mehrere Kanäle gleichzeitig besser performt.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <div className="bg-[#121212] rounded-2xl p-6">
            <p className="text-white font-medium leading-snug">„KI-Optimierung ersetzt SEO nicht. Sie ist SEO, Autoritätsaufbau und digitale PR, betrachtet durch eine neue Linse."</p>
          </div>
          <div className="bg-[#121212] rounded-2xl p-6">
            <p className="text-white font-medium leading-snug">„Die Unternehmen, denen man am leichtesten vertraut, sind meist die, die KI-Systeme empfehlen."</p>
          </div>
          <div className="bg-[#121212] rounded-2xl p-6">
            <p className="text-white font-medium leading-snug">„Wenn niemand mit Fachwissen den Inhalt geprüft hat, macht KI ihn nicht auf magische Weise wertvoll."</p>
          </div>
          <div className="bg-[#121212] rounded-2xl p-6">
            <p className="text-white font-medium leading-snug">„Vertrauen entsteht, wenn jedes Signal online dieselbe Geschichte erzählt."</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufige Fragen zur Google KI-Optimierung
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
          <a href="/wissen/ai-overviews-sichtbarkeit" className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group">
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">Sichtbarkeit in Google AI Overviews</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Wie du konkret in den KI-Antworten oberhalb der Suchergebnisse landest.</p>
          </a>
          <a href="/wissen/was-ist-geo" className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group">
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">Was ist GEO?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Generative Engine Optimization plattformübergreifend erklärt.</p>
          </a>
          <a href="/wissen/technische-ki-sichtbarkeit" className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group">
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">Technische KI-Sichtbarkeit</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Crawlbarkeit, Rendering, robots.txt und die technische Basis.</p>
          </a>
          <a href="/wissen/eeat-ki-sichtbarkeit" className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group">
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">E-E-A-T für KI-Sichtbarkeit</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Wie du Trust-Signale aufbaust, die Google und KI-Systeme honorieren.</p>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            Kennt Google dein Unternehmen?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Wir prüfen, ob deine Seiten für AI Overviews überhaupt geeignet sind, wo Substanz fehlt und welchen GEO-Aufwand du dir sparen kannst. Ehrlich, ohne Mythen.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Sichtbarkeitsanalyse anfragen" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

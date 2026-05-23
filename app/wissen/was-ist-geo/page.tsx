import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was ist der Unterschied zwischen GEO und SEO?',
    a: 'SEO (Search Engine Optimization) optimiert deine Website für klassische Suchmaschinen-Rankings bei Google. GEO (Generative Engine Optimization) optimiert dafür, dass KI-Systeme wie ChatGPT, Perplexity und Google AI Overviews deinen Content als vertrauenswürdige Quelle zitieren. SEO bringt dich auf Seite 1, GEO bringt dich in die KI-Antwort selbst. Beides schließt sich nicht aus — die besten Strategien kombinieren beides.',
  },
  {
    q: 'Ist GEO nur ein neuer Marketingbegriff für SEO?',
    a: 'Nein. GEO adressiert ein fundamental anderes Problem: Wie werde ich von generativen KI-Systemen zitiert? SEO optimiert für ein Ranking-System mit 10 blauen Links. GEO optimiert für ein Generierungssystem, das eine einzige Antwort synthetisiert. Die Techniken überlappen sich teilweise (gute Struktur, Autorität), aber GEO erfordert zusätzlich Zitierfähigkeit, semantische Vollständigkeit und technische KI-Zugänglichkeit wie llms.txt.',
  },
  {
    q: 'Brauche ich GEO, wenn mein SEO gut funktioniert?',
    a: 'Ja. Laut Gartner werden bis 2028 über 50 % des organischen Traffics durch KI-gestützte Suche wegfallen. Selbst wenn du heute auf Platz 1 bei Google stehst: Wenn ein Nutzer die Frage in ChatGPT stellt und dein Unternehmen nicht genannt wird, verlierst du den Kontakt. GEO ist keine Ablösung von SEO, sondern eine notwendige Ergänzung.',
  },
  {
    q: 'Welche KI-Systeme sind für GEO relevant?',
    a: 'Die wichtigsten sind ChatGPT (OpenAI), Perplexity, Google AI Overviews (SGE), Claude (Anthropic) und Microsoft Copilot. Jedes System hat eigene Eigenheiten: Perplexity durchsucht das Live-Web und zitiert mit Quellenlinks. ChatGPT greift auf Trainingsdaten und Browsing zu. Google AI Overviews nutzen den Google-Index. Eine gute GEO-Strategie deckt alle drei Typen ab.',
  },
  {
    q: 'Was kostet GEO-Optimierung?',
    a: 'Die Kosten hängen vom Umfang ab. Ein grundlegendes GEO-Audit mit technischer Prüfung (llms.txt, Schema-Markup, Crawlbarkeit) beginnt bei wenigen hundert Euro. Eine vollständige GEO-Strategie mit Content-Optimierung, Topic Clusters und Monitoring liegt je nach Unternehmensgröße zwischen 2.000 und 10.000 Euro monatlich. Einzelmaßnahmen wie die Erstellung einer llms.txt sind auch als Einzelprojekt möglich.',
  },
  {
    q: 'Wie lange dauert es, bis GEO-Maßnahmen wirken?',
    a: 'Bei Perplexity oft schon nach 2–4 Wochen, weil Perplexity das Live-Web durchsucht. Bei Google AI Overviews ähnlich schnell wie klassisches SEO — wenige Wochen nach Indexierung. Bei ChatGPT und Claude dauert es 3–6 Monate, da diese Modelle in Trainingszyklen aktualisiert werden. Der wichtigste Faktor ist nicht Geschwindigkeit, sondern Konsistenz.',
  },
  {
    q: 'Kann ich GEO selbst machen oder brauche ich eine Agentur?',
    a: 'Grundlegende Maßnahmen wie Answer-First-Strukturen, FAQ-Sektionen und eine llms.txt kannst du selbst umsetzen. Für eine umfassende GEO-Strategie — Topic Clusters, semantische Analyse, technische Implementierung und kontinuierliches Monitoring — lohnt sich professionelle Unterstützung. Besonders wenn du in einem umkämpften Markt schnell Ergebnisse brauchst.',
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
  headline: 'Was ist GEO? Generative Engine Optimization endlich verständlich erklärt',
  description:
    'Der komplette Guide zu GEO: Was Generative Engine Optimization bedeutet, wie es sich von SEO und AEO unterscheidet, und warum es 2026 unverzichtbar ist.',
  image: 'https://aiseo.hamburg/images/wissen/was-ist-geo.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/was-ist-geo',
  inLanguage: 'de',
  about: [
    { '@type': 'Thing', name: 'Generative Engine Optimization', sameAs: 'https://aiseo.hamburg/wissen/was-ist-geo' },
    { '@type': 'Thing', name: 'AI SEO', sameAs: 'https://aiseo.hamburg/wissen/ai-seo-agentur' },
    { '@type': 'Thing', name: 'Answer Engine Optimization', sameAs: 'https://aiseo.hamburg/wissen/aeo-answer-engine-optimization' },
    { '@type': 'Thing', name: 'LLM Optimization', sameAs: 'https://aiseo.hamburg/wissen/llmo-llm-optimierung' },
  ],
  mentions: [
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/ai-seo-agentur', name: 'AI SEO Agentur Hamburg' },
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/aeo-answer-engine-optimization', name: 'AEO – Answer Engine Optimization' },
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/llmo-llm-optimierung', name: 'LLMO – LLM Optimierung' },
    { '@type': 'WebPage', '@id': 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-agenturen-hamburg-2026', name: 'Hamburg AI-SEO Agency Citation Audit 2026' },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'Was ist GEO?' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function WasIstGeoPage() {
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
            <li>/</li>
            <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
            <li>/</li>
            <li className="text-black font-medium">Was ist GEO?</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          Was ist GEO? Generative Engine Optimization endlich verständlich erklärt
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Alle reden über GEO. Die meisten haben keine Ahnung, was es bedeutet. Manche verwechseln es mit SEO, andere halten es für eine Verschwörung der Marketing-Industrie. Hier bekommst du die Wahrheit — schonungslos, verständlich und ohne 47 Buzzwords pro Absatz.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">1.</span>
              <span><strong className="text-black">GEO = Generative Engine Optimization.</strong> Es geht darum, von KI-Systemen (ChatGPT, Perplexity, Google AI) als Quelle zitiert zu werden — nicht nur bei Google auf Seite 1 zu stehen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">GEO ≠ SEO.</strong> SEO bringt dich ins Ranking. GEO bringt dich in die KI-Antwort. Anderes Ziel, andere Techniken, anderes Mindset.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Bis 2028 verlieren Marken über 50 % ihres organischen Traffics</strong> an KI-gestützte Suche (Gartner). Wer GEO ignoriert, wird unsichtbar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Die Princeton-Studie beweist:</strong> Strukturierte, autoritative Inhalte erhalten 115 % mehr KI-Zitierungen. GEO funktioniert — wenn man es richtig macht.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">GEO ist kein Hexenwerk.</strong> Answer-First schreiben, Quellen einbauen, llms.txt erstellen, Schema-Markup implementieren — du kannst heute anfangen.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was ist GEO — die Definition                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          GEO — was es wirklich bedeutet (und was nicht)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Generative Engine Optimization (GEO) ist die Optimierung von Inhalten, damit sie von KI-gestützten Suchsystemen als vertrauenswürdige Quelle erkannt und zitiert werden.</strong> Im Unterschied zu klassischem SEO, das auf Google-Rankings abzielt, fokussiert sich GEO darauf, in den generierten Antworten von ChatGPT, Perplexity, Google AI Overviews und ähnlichen Systemen aufzutauchen.
          </p>
          <p>
            Der Begriff stammt aus einer <strong className="text-black">Studie der Princeton University (2024)</strong>, die erstmals systematisch untersucht hat, wie Inhalte für generative Suchmaschinen optimiert werden können. Das Ergebnis: Strukturierte, faktenbasierte Inhalte mit Quellenverweisen erhalten bis zu 115 % mehr Sichtbarkeit in KI-generierten Antworten.
          </p>
          <p>
            Klingt einfach? Ist es auch. Das Problem ist nur: Die meisten Leute hören „GEO" und denken „ach, das ist doch nur SEO mit einem neuen Namen". Das ist ungefähr so klug wie zu sagen, ein Elektroauto sei „im Grunde ein Pferd mit Batterie". Technisch gesehen hat beides Räder. Praktisch gesehen — völlig andere Welt.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            Kernbegriff: GEO optimiert nicht für Rankings, sondern für Zitierungen. Dein Ziel ist nicht Platz 1 bei Google — dein Ziel ist, dass die KI dich als Quelle nennt.
          </p>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Warum der Unterschied so wichtig ist: Bei Google konkurrierst du mit 10 blauen Links. Bei KI-Antworten konkurrierst du mit <em>allen Inhalten im gesamten Internet</em>, und die KI wählt eine Handvoll Quellen aus. Entweder du bist dabei — oder du existierst nicht.
          </p>
          <p>
            Das ist keine Übertreibung. Wenn jemand ChatGPT fragt „Wer ist der beste Zahnarzt in Hamburg?" und dein Name nicht fällt, ist es egal, ob du bei Google auf Platz 1 stehst. Der Nutzer hat seine Antwort bekommen. Ohne dich.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Warum alle darüber reden                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Warum plötzlich alle über GEO reden (und warum die meisten es falsch verstehen)
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Gartner prognostiziert: Bis 2028 verlieren Marken über 50 % ihres organischen Search-Traffics</strong> an KI-gestützte Suche. Das ist keine vage Prophezeiung eines LinkedIn-Gurus — das ist eine der größten Research-Firmen der Welt, die sagt: Dein Google-Traffic wird halbiert.
          </p>
          <p>
            Der Grund ist brutal einfach: Menschen sind faul. Warum 10 Suchergebnisse durchklicken, wenn ChatGPT dir die Antwort in 3 Sekunden liefert? Warum 5 Websites vergleichen, wenn Perplexity das für dich tut? Die Art, wie Menschen nach Informationen suchen, verändert sich fundamental — und wer seine Inhalte nicht für diese neue Realität optimiert, wird schleichend unsichtbar.
          </p>
          <p>
            Das Problem: Die meisten „GEO-Experten", die du auf LinkedIn findest, haben den Princeton-Paper nicht gelesen. Sie recyceln SEO-Tipps, kleben „KI" drauf und nennen es Innovation. Das ist so, als würdest du einem Formel-1-Auto einen Aufkleber mit „Rakete" draufkleben und behaupten, es fliegt jetzt.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mt-10">
          <h3 className="text-xl font-semibold text-black mb-4">Die drei Treiber hinter dem GEO-Boom</h3>
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">1.</span>
              <span><strong className="text-black">Zero-Click wird zum Standard:</strong> Immer mehr Suchanfragen werden direkt in der KI-Antwort beantwortet. Der Klick auf deine Website fällt weg. Dein Content muss die Quelle sein, nicht das Ziel.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">2.</span>
              <span><strong className="text-black">KI-Suche wächst explosiv:</strong> ChatGPT hat über 200 Millionen wöchentliche Nutzer. Perplexity wächst monatlich um 40 %. Google AI Overviews erscheinen bei über 30 % aller Suchanfragen. Das ist kein Nischentrend.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">3.</span>
              <span><strong className="text-black">Winner-takes-most:</strong> In KI-Antworten gibt es keine Seite 2. Entweder du wirst zitiert oder nicht. Das erhöht den Druck auf Content-Qualität und -Struktur massiv.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  GEO vs SEO vs AEO — der große Vergleich                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          GEO vs SEO vs AEO — der Vergleich, den du eigentlich brauchst
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Die Begriffe fliegen dir um die Ohren wie Konfetti auf einer schlechten Marketing-Konferenz. Hier ist die Übersicht, die endlich Ordnung reinbringt.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Kriterium</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">SEO</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">AEO</th>
                <th className="py-3 text-sm font-semibold text-black">GEO</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Ziel</td>
                <td className="py-3 pr-4">Top-Rankings bei Google</td>
                <td className="py-3 pr-4">Featured Snippets & Answer Boxes</td>
                <td className="py-3">Zitierung in KI-generierten Antworten</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Plattformen</td>
                <td className="py-3 pr-4">Google, Bing</td>
                <td className="py-3 pr-4">Google, Alexa, Siri</td>
                <td className="py-3">ChatGPT, Perplexity, Google AI, Claude</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Kernstrategie</td>
                <td className="py-3 pr-4">Keywords, Backlinks, technische Optimierung</td>
                <td className="py-3 pr-4">Frage-Antwort-Formate, Schema-Markup</td>
                <td className="py-3">Zitierfähigkeit, semantische Vollständigkeit, KI-Zugänglichkeit</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Content-Format</td>
                <td className="py-3 pr-4">Keyword-optimierte Texte</td>
                <td className="py-3 pr-4">FAQ, How-To, Listen</td>
                <td className="py-3">Answer-First, faktenbasiert, strukturiert</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Technik</td>
                <td className="py-3 pr-4">robots.txt, Sitemap, Core Web Vitals</td>
                <td className="py-3 pr-4">Schema.org, Featured Snippet Optimierung</td>
                <td className="py-3">llms.txt, Schema.org, KI-Crawler-Zugang</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Erfolgsmessung</td>
                <td className="py-3 pr-4">Rankings, Traffic, CTR</td>
                <td className="py-3 pr-4">Snippet-Erscheinungen, Voice-Treffer</td>
                <td className="py-3">KI-Zitierungen, Brand Mentions, Referral-Traffic</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">Wirkungszeit</td>
                <td className="py-3 pr-4">Wochen bis Monate</td>
                <td className="py-3 pr-4">Tage bis Wochen</td>
                <td className="py-3">2 Wochen (Perplexity) bis 6 Monate (ChatGPT)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-10">
          <p>
            <strong className="text-black">Das Wichtigste:</strong> GEO, SEO und AEO sind keine Konkurrenten. Sie sind Schichten. SEO ist die Basis. AEO erweitert sie um Antwortformate. GEO geht den letzten Schritt und optimiert für die KI-Antwort selbst. Wer nur SEO macht, ist wie jemand, der 2026 noch ein Faxgerät benutzt — es funktioniert irgendwie, aber die Welt hat sich weitergedreht.
          </p>
          <p>
            Und nein, AEO ist kein Synonym für GEO. AEO fokussiert sich auf „Answer Engines" — also Systeme, die direkte Antworten liefern (Featured Snippets, Voice Search). GEO geht weiter: Es umfasst die gesamte Optimierung für generative KI-Systeme, die Antworten aus multiplen Quellen synthetisieren. AEO ist ein Teilaspekt von GEO.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Wie GEO funktioniert                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Wie GEO funktioniert — ohne Buzzword-Bingo
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          GEO basiert auf einem simplen Prinzip: Mach deinen Content so, dass eine KI ihn sicher und gerne als Quelle verwendet. Das klingt banal, bis du verstehst, was „sicher" für eine KI bedeutet.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. Zitierfähigkeit schaffen</h3>
            <p className="text-gray-600 leading-relaxed">
              KI-Systeme zitieren nicht alles. Sie zitieren Inhalte, bei denen sie sich sicher sind, dass die Information stimmt. Das heißt: klare Aussagen, belegbare Fakten, benannte Quellen. „Unserer Erfahrung nach" ist für eine KI wertlos. „Laut Princeton-Studie (2024) erhalten strukturierte Inhalte 115 % mehr Zitierungen" — das kann eine KI verwenden.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Semantische Vollständigkeit liefern</h3>
            <p className="text-gray-600 leading-relaxed">
              Wenn du einen Artikel über „KI-Sichtbarkeit" schreibst, aber ChatGPT, Perplexity, Schema.org und llms.txt nie erwähnst, ist dein Artikel für die KI semantisch unvollständig. Es ist so, als würdest du einen Artikel über Pizza schreiben, ohne Käse zu erwähnen. Technisch möglich, aber niemand nimmt dich ernst.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. Technisch auffindbar sein</h3>
            <p className="text-gray-600 leading-relaxed">
              KI-Crawler müssen deinen Content lesen können. Das bedeutet: keine Blockierung in der robots.txt, eine <a href="/wissen/llms-txt-anleitung" className="text-brand-accent underline hover:no-underline">llms.txt-Datei</a> für KI-spezifische Informationen, sauberes Schema-Markup und eine klare HTML-Struktur. Details dazu findest du im Guide zur <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">technischen KI-Sichtbarkeit</a>.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Answer-First schreiben</h3>
            <p className="text-gray-600 leading-relaxed">
              Jeder Abschnitt beginnt mit der Kernantwort. Nicht mit einer Einleitung, nicht mit Kontext, nicht mit „In der heutigen digitalen Welt...". Die Antwort zuerst, die Erklärung danach. KI-Systeme extrahieren bevorzugt die ersten 2–3 Sätze. Wenn deine Antwort erst im dritten Absatz kommt, wird sie möglicherweise nie gelesen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. Autorität aufbauen</h3>
            <p className="text-gray-600 leading-relaxed">
              KI-Systeme bevorzugen Quellen, die als autoritativ gelten. Das ist kein Voodoo — es sind die gleichen Signale, die auch bei Google zählen: Backlinks, Brand-Erwähnungen, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Ein unbekannter Blog wird seltener zitiert als eine anerkannte Fachpublikation. Autorität ist Grundvoraussetzung.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die größten GEO-Irrtümer                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die 5 größten GEO-Irrtümer (und warum sie dich Sichtbarkeit kosten)
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Irrtum 1: „GEO ist nur SEO mit neuem Namen"</h3>
            <p className="text-gray-600 leading-relaxed">
              Nein. SEO optimiert für ein Ranking-System: 10 blaue Links, sortiert nach Relevanz. GEO optimiert für ein Generierungssystem: Eine KI synthetisiert eine Antwort aus hunderten möglichen Quellen. Das erfordert andere Inhalte, andere Strukturen und andere technische Signale. Wer GEO als „SEO 2.0" behandelt, optimiert am Ziel vorbei — wie jemand, der für den Marathon trainiert, indem er Gewichte hebt.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Irrtum 2: „Ich muss KI-Crawler blockieren, um mein geistiges Eigentum zu schützen"</h3>
            <p className="text-gray-600 leading-relaxed">
              Kannst du machen. Dann wirst du halt von keiner KI zitiert. Herzlichen Glückwunsch, du hast dein geistiges Eigentum geschützt — und es gleichzeitig unsichtbar gemacht. Das ist wie ein Restaurant, das seine Tür abschließt, damit niemand das Essen klaut. Stimmt, klaut keiner. Kommt aber auch keiner essen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Irrtum 3: „Keywords sind für GEO irrelevant"</h3>
            <p className="text-gray-600 leading-relaxed">
              Falsch. Keywords sind weniger wichtig als bei SEO, aber nicht irrelevant. KI-Systeme nutzen semantische Zusammenhänge, nicht exakte Keyword-Matches. Aber wenn du über „KI-Sichtbarkeit" schreibst und den Begriff kein einziges Mal verwendest, versteht auch keine KI, worum es geht. Natürliche Verwendung relevanter Begriffe bleibt wichtig — Keyword-Stuffing wird dich aber eher bannen als befördern.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Irrtum 4: „Mein Google-Traffic reicht, GEO brauche ich nicht"</h3>
            <p className="text-gray-600 leading-relaxed">
              Stand 2024 hast du damit vielleicht recht. Stand 2026 — eher nicht. Wenn 30 % deiner potenziellen Kunden ihre Fragen in ChatGPT stellen statt in Google, und dein Unternehmen in keiner einzigen KI-Antwort auftaucht, hast du ein Drittel deines Marktes verloren, ohne es zu merken. Das ist kein „Nice to have". Das ist eine strategische Lücke.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Irrtum 5: „GEO-Optimierung = einfach eine llms.txt anlegen und fertig"</h3>
            <p className="text-gray-600 leading-relaxed">
              Eine <a href="/wissen/llms-txt-anleitung" className="text-brand-accent underline hover:no-underline">llms.txt</a> ist ein guter erster Schritt. Aber GEO auf eine einzelne Datei zu reduzieren, ist wie zu sagen, SEO bestehe aus einer robots.txt. Technische Zugänglichkeit ist die Basis — darauf müssen Content-Qualität, semantische Vollständigkeit, Topic Clusters und Autorität aufbauen. Sonst hast du eine schöne Einladung geschrieben, aber das Restaurant ist leer.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Praktische erste Schritte                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          GEO in der Praxis: 7 Schritte, die du heute umsetzen kannst
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Genug Theorie. Hier ist, was du konkret tun musst — sortiert von „dauert 10 Minuten" bis „dauert ein Quartal".
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                1. KI-Crawler erlauben
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Prüfe deine robots.txt. Wenn dort GPTBot, ClaudeBot, PerplexityBot oder CCBot blockiert werden, entferne die Blockierung. Kein Crawl-Zugang = keine Zitierung. So einfach ist das. Dauert 5 Minuten, wirkt sofort.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                2. llms.txt erstellen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eine <a href="/wissen/llms-txt-anleitung" className="text-brand-accent underline hover:no-underline">llms.txt-Datei</a> im Root-Verzeichnis deiner Website sagt KI-Systemen, wer du bist und was du anbietest. Es ist wie eine Visitenkarte für Roboter. Einfach zu erstellen, großer Effekt. Unser Guide zeigt dir Schritt für Schritt, wie es geht.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                3. Content auf Answer-First umstellen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Geh deine Top-10-Seiten durch. Beginnt jeder Abschnitt mit der Kernantwort? Oder mit „In der heutigen digitalen Welt..."? Wenn Letzteres — umschreiben. Die Antwort gehört in den ersten Satz. Immer. Ausnahmslos. Keine Ausreden. Mehr dazu im Guide zur <a href="/wissen/ai-content-strategie" className="text-brand-accent underline hover:no-underline">AI Content Strategie</a>.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                4. FAQ-Sektionen ergänzen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jede wichtige Seite braucht 5–7 relevante Fragen mit ausführlichen Antworten. Implementiere FAQPage-Schema-Markup. FAQ-Sektionen sind das Format, das KI am liebsten hat: klare Frage, klare Antwort. Wenn du nur eine einzige GEO-Maßnahme umsetzt, nimm diese.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                5. Schema-Markup implementieren
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Article-Schema für Blogposts, FAQPage-Schema für FAQ-Sektionen, ProfessionalService oder Organization-Schema für dein Unternehmen. Schema-Markup hilft KI-Systemen, deinen Content korrekt einzuordnen. Es ist der Unterschied zwischen einer beschrifteten Schublade und einem Haufen Papier auf dem Boden.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                6. Topic Clusters aufbauen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Einzelne Artikel sind schwächer als vernetzte Content-Cluster. Ein Pillar-Artikel zum Hauptthema plus 5–10 Unterartikel signalisiert KI-Systemen: Diese Quelle hat umfassende Expertise. Ein einzelner Blogpost über <a href="/wissen/ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">KI-Sichtbarkeit</a> ist gut. Ein ganzes Cluster mit technischer Umsetzung, Content-Strategie und Messung ist besser.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                7. KI-Sichtbarkeit messen und iterieren
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Frag ChatGPT und Perplexity regelmäßig nach deinem Fachthema. Wirst du genannt? Mit Quellenlink? Nutze Tools wie Ahrefs Brand Radar oder Semrush AI Visibility für systematisches Monitoring. GEO ist kein Einmalprojekt — es ist ein kontinuierlicher Prozess, genau wie SEO.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Wer braucht GEO wirklich?                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Wer braucht GEO wirklich — und wer kann (noch) warten?
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-4">GEO ist Pflicht für:</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>B2B-Unternehmen mit Fachexpertise (Berater, Agenturen, SaaS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Lokale Dienstleister in umkämpften Märkten (Ärzte, Anwälte, Handwerker)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Content-getriebene Unternehmen, deren Business auf organischem Traffic basiert</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>E-Commerce mit Vergleichs- und Beratungsbedarf</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-4">GEO kann warten für:</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold mt-0.5 shrink-0">—</span>
                <span>Unternehmen, die ausschließlich über Paid Ads akquirieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold mt-0.5 shrink-0">—</span>
                <span>Rein offline operierende Businesses ohne digitale Präsenz</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold mt-0.5 shrink-0">—</span>
                <span>Sehr nischige B2B-Produkte mit wenigen direkten Suchanfragen</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4 italic">
              Aber ehrlich: Auch diese Gruppen werden in 12–18 Monaten an GEO nicht vorbeikommen. „Kann warten" heißt nicht „muss nie".
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufig gestellte Fragen zu GEO
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
              KI-Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und wie du sie systematisch aufbaust.
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
              robots.txt, llms.txt, Schema.org — alles, was KI-Crawler technisch brauchen.
            </p>
          </a>

          <a
            href="/wissen/ai-content-strategie"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              AI Content Strategie
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inhalte erstellen, die KI-Systeme als Quelle zitieren wollen.
            </p>
          </a>

          <a
            href="/wissen/seo-vs-ai-seo"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              SEO vs AI SEO
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Der detaillierte Vergleich: Was bleibt, was sich ändert, was dazukommt.
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
            Wie sichtbar bist du für KI?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde heraus, ob ChatGPT, Perplexity und Google AI dein Unternehmen kennen — und was du tun musst, damit sie dich zitieren.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose GEO-Analyse anfragen" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

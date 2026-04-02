import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was bedeutet KI-Sichtbarkeit?',
    a: 'KI-Sichtbarkeit = dein Unternehmen wird von ChatGPT, Perplexity oder Google AI empfohlen. Nicht gefunden. Empfohlen. Es geht nicht um klassische Rankings, sondern darum, ob KI dich als relevante Quelle erkennt und in ihren Antworten zitiert.',
  },
  {
    q: 'Ist KI-Sichtbarkeit das gleiche wie SEO?',
    a: 'Nein. SEO optimiert für Rankings und Klicks auf blaue Links. KI-Sichtbarkeit (GEO/AEO) optimiert dafür, dass KI-Systeme dich als vertrauenswürdige Quelle zitieren und weiterempfehlen. Die Disziplinen überschneiden sich, haben aber unterschiedliche Mechanismen.',
  },
  {
    q: 'Welche KI-Systeme sind für die Sichtbarkeit relevant?',
    a: 'ChatGPT (OpenAI), Google Gemini und AI Overviews, Perplexity, Microsoft Copilot und Claude. Perplexity und Google AI Overviews sind besonders relevant, weil sie Quellen direkt verlinken und messbaren Traffic generieren.',
  },
  {
    q: 'Was kostet KI-Sichtbarkeits-Optimierung?',
    a: 'Das hängt vom Umfang ab. Ein einmaliges Audit mit Handlungsempfehlungen ist der günstigste Einstieg. Eine vollständige Optimierung inklusive Content, Technik und Autoritätsaufbau läuft über mehrere Monate. Für eine konkrete Einschätzung biete ich eine kostenlose Kurzanalyse an.',
  },
  {
    q: 'Für welche Unternehmen lohnt sich KI-Sichtbarkeit?',
    a: 'Für alle, die über Online-Sichtbarkeit Kunden gewinnen: Dienstleister, lokale Unternehmen, SaaS-Anbieter, E-Commerce, Berater und Agenturen. Besonders profitieren Unternehmen in Branchen, in denen Kunden KI für Recherche und Kaufentscheidungen nutzen.',
  },
  {
    q: 'Wie messe ich meine KI-Sichtbarkeit?',
    a: 'Tools wie Ahrefs Brand Radar oder Semrush AI Visibility zeigen dir deine Präsenz in KI-Antworten. Details zu plattformspezifischen Messungen findest du in unseren Guides zu ChatGPT und Perplexity.',
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
    'Der Pillar-Guide zu KI-Sichtbarkeit: Definition, Framework mit drei Säulen, GEO vs. SEO und 5 strategische Schritte.',
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
  dateModified: '2026-03-19',
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
            KI-Sichtbarkeit: Was es bedeutet und warum es 2026 entscheidend ist
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Deine Kunden fragen ChatGPT, Perplexity und Google AI um Rat. Wer dort nicht empfohlen wird, existiert für eine wachsende Zielgruppe nicht. Hier ist das Framework, um das zu ändern.
          </p>
      </section>

      {/* ============================================================ */}
      {/*  Image                                                       */}
      {/* ============================================================ */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
                  <img
            src="/images/wissen/ki-sichtbarkeit.jpg"
            alt="KI-Sichtbarkeit: Wie Unternehmen in ChatGPT und Perplexity sichtbar werden"
            className="w-full rounded-2xl shadow-lg"
            loading="eager"
          />
          <p className="text-xs text-gray-400 mt-2">Foto: Unsplash</p>
      </div>

      {/* ============================================================ */}
      {/*  TLDR                                                        */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
                  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">KI-Sichtbarkeit</strong> = KI-Systeme empfehlen dein Unternehmen aktiv. Nicht finden. Empfehlen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">Gartner-Prognose:</strong> Über 50% des organischen Traffics wandert bis 2028 zu KI-gestützter Suche.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">Drei Säulen</strong> entscheiden: Technik, Content, Autorität. Fehlt eine, funktioniert nichts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">3-6 Monate</strong> bis zu messbaren Ergebnissen. Wer jetzt startet, baut einen schwer einholbaren Vorsprung auf.</span>
              </li>
            </ul>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Was ist KI-Sichtbarkeit?                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Was ist KI-Sichtbarkeit?
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              KI-Sichtbarkeit = dein Unternehmen wird von ChatGPT, Perplexity oder Google AI empfohlen. Nicht gefunden. <strong className="text-black">Empfohlen.</strong> Der Unterschied ist fundamental: Du konkurrierst nicht mehr um 10 blaue Links, sondern um 2-7 Zitationsplätze pro KI-Antwort.
            </p>
            <p>
              Die Disziplin dahinter heißt <strong className="text-black">GEO (Generative Engine Optimization)</strong>. Du kennst es vielleicht als <strong className="text-black">AEO (Answer Engine Optimization)</strong> oder <strong className="text-black">LLMO (Large Language Model Optimization)</strong>. Gleicher Kern: dein Unternehmen so aufstellen, dass KI-Systeme es verstehen, einordnen und weiterempfehlen.
            </p>
            <p>
              Bei Google optimierst du für ein Ranking. Bei KI-Sichtbarkeit optimierst du dafür, <strong className="text-black">als Quelle zitiert</strong> zu werden. Andere Signale, andere Strukturen, andere Denkweise.
            </p>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Warum jetzt?                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Warum jetzt?
          </h2>

          <StatBox text="Gartner: Marken verlieren bis 2028 über 50% ihres organischen Traffics an KI-gestützte Suche." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Das Suchverhalten kippt gerade. Nicht irgendwann. Klassische Google-Anfragen sinken laut internen Daten bis 2026 um <strong className="text-black">25%</strong>. Gleichzeitig wachsen KI-Plattformen um <strong className="text-black">+28,6% im Jahresvergleich</strong>.
            </p>
          </div>

          <StatBox text="33% der Nutzer verwenden bereits regelmäßig KI-Suchtools für Recherche und Kaufentscheidungen." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Das sind nicht nur Tech-Early-Adopter. Handwerker lassen Angebote vergleichen. Freiberufler fragen nach dem besten Steuerberater. Einkäufer recherchieren Lieferanten. Quer durch alle Branchen.
            </p>
          </div>

          <StatBox text="KI-Empfehlungen generieren 8x mehr Traffic als klassische organische Suche." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Wenn KI dich nicht kennt, wirst du nicht empfohlen. Wenn du nicht empfohlen wirst, verlierst du Anfragen an Wettbewerber, die KI als Quelle erkannt hat. Und dieser Effekt verstärkt sich selbst.
            </p>
            <p>
              Das Zeitfenster für einen Vorsprung schließt sich. In 12-18 Monaten ist KI-Sichtbarkeit keine Option mehr, sondern Grundvoraussetzung.
            </p>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Die drei Säulen der KI-Sichtbarkeit                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Die drei Säulen der KI-Sichtbarkeit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Drei Bereiche müssen zusammenspielen. Fehlt einer, funktioniert das Gesamtbild nicht.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Säule 1: Technik */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">1</div>
              <h3 className="text-xl font-semibold text-black mb-3">Technik</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Schema.org Markup (Product, FAQ, HowTo, LocalBusiness)</li>
                <li>Saubere, crawlbare Seitenarchitektur</li>
                <li>Schnelle Ladezeiten und Core Web Vitals</li>
                <li>Zugang für KI-Bots in robots.txt</li>
                <li>Strukturierte Daten für Entity-Erkennung</li>
              </ul>
            </div>

            {/* Säule 2: Content */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">2</div>
              <h3 className="text-xl font-semibold text-black mb-3">Content</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Echte Fragen deiner Zielgruppe beantworten</li>
                <li>Extrahierbare, klar strukturierte Formate</li>
                <li>Regelmäßige Aktualisierung (Freshness)</li>
                <li>Klare Positionierung und Spezialisierung</li>
                <li>Ehrlicher Vergleichs-Content</li>
              </ul>
            </div>

            {/* Säule 3: Autorität */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3">3</div>
              <h3 className="text-xl font-semibold text-black mb-3">Autorität</h3>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>Markennennungen auf relevanten Plattformen</li>
                <li>PR und redaktionelle Erwähnungen</li>
                <li>Branchenverzeichnisse und Listings</li>
                <li>E-E-A-T Signale (Experience, Expertise, Authority, Trust)</li>
                <li>Konsistente NAP-Daten überall</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Beste Technik ohne Content? Nutzlos. Bester Content ohne Autorität? Wird nicht zitiert. Autorität ohne Technik? Bleibt für KI unsichtbar.
          </p>
      </section>

      {/* ============================================================ */}
      {/*  GEO vs. klassisches SEO                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            GEO vs. klassisches SEO
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            KI-Sichtbarkeit ersetzt SEO nicht. Sie ergänzt es. Aber die Mechanismen sind grundlegend anders.
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
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Größter Denkfehler: "Ich bin bei Google auf Platz 1, also bin ich auch in KI sichtbar." Stimmt nicht. Eine Seite kann hervorragend ranken und von ChatGPT komplett ignoriert werden - weil die Inhalte nicht strukturiert, die Marke nicht positioniert oder die Autoritätssignale nicht vorhanden sind.
          </p>
      </section>

      {/* ============================================================ */}
      {/*  5 strategische Schritte                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            5 strategische Schritte zur KI-Sichtbarkeit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Die Strategie zuerst. Plattformspezifische Taktiken findest du in unseren Guides zu{' '}
            <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline">ChatGPT</a> und{' '}
            <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent hover:underline">Perplexity</a>.
          </p>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                1. Positionierung schärfen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                KI empfiehlt Spezialisten, keine Generalisten. "Alles für alle" lässt sich keiner konkreten Frage zuordnen. Definiere: Was machst du, für wen, warum bist du die beste Wahl? Je spitzer, desto höher die Zitationswahrscheinlichkeit.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                2. Content als Antwortmaschine aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                KI sucht Antworten, keine Werbetexte. Recherchiere, welche Fragen deine Zielgruppe an KI stellt - und beantworte sie präzise, ehrlich und klar strukturiert. Vergleichs-Content schlägt Selbstdarstellung.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                3. Technische Grundlage schaffen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Strukturierte Daten, saubere Architektur, KI-Bots in robots.txt zulassen. Ohne technische Basis kann KI deine Inhalte weder crawlen noch verstehen. Das ist die Eintrittskarte.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                4. Autorität systematisch aufbauen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Markennennungen auf relevanten Plattformen, PR, Branchenverzeichnisse, konsistente NAP-Daten. Eine Erwähnung in einem relevanten Fachartikel kann mehr bewirken als hundert Verzeichnis-Backlinks. KI bewertet Qualität, nicht Quantität.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                5. Messen und iterieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tools wie Ahrefs Brand Radar und Semrush AI Visibility zeigen, ob du in KI-Antworten auftauchst. GA4 trackt den Traffic von KI-Plattformen. Ohne Messung kein Fortschritt. Plattformspezifische Details dazu in unseren{' '}
                <a href="/wissen/sichtbarkeit-in-chatgpt" className="text-brand-accent hover:underline">ChatGPT</a>- und{' '}
                <a href="/wissen/sichtbarkeit-in-perplexity" className="text-brand-accent hover:underline">Perplexity-Guides</a>.
              </p>
            </li>
          </ol>
      </section>

      {/* ============================================================ */}
      {/*  Wie lange dauert es?                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Wie lange dauert es?
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-black">3-6 Monate</strong> bis zu konsistenten Veränderungen in KI-Zitationen. Die großen LLMs trainieren in Zyklen - Optimierungen fließen erst mit dem nächsten Update ein.
            </p>
            <p>
              <strong className="text-black">Perplexity ist schneller:</strong> Durchsucht das Live-Web, Ergebnisse oft nach 4-8 Wochen. Ideales Testfeld für deine GEO-Strategie.
            </p>
            <p>
              <strong className="text-black">Der Compound-Effekt:</strong> Wer früh optimiert, wird als Quelle etabliert. Spätere Trainingszyklen bestätigen dieses Signal. Je länger du sichtbar bist, desto stabiler die Position - ähnlich wie Domain-Autorität, nur schwerer einzuholen.
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
      {/*  Quellen                                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Quellen
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-black">Gartner (2024):</strong> "Predicts 2025: Search and
                AI" - Prognose zum Rückgang organischen Traffics durch KI-gestützte Suche bis 2028.
              </li>
              <li>
                <strong className="text-black">Princeton University (2024):</strong> "GEO:
                Generative Engine Optimization" - Studie zur Optimierung von Inhalten für
                KI-Suchmaschinen und die Rolle von Earned Media.
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
            </ul>
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
              href="/wissen/sichtbarkeit-in-chatgpt"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                Sichtbarkeit in ChatGPT
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wie du in ChatGPT-Antworten erscheinst und was OpenAI als Quelle bevorzugt.
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
                Der schnellste Kanal für KI-Sichtbarkeit. Taktiken und Messung.
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
                Worauf du bei der Wahl einer AI SEO Agentur achten solltest.
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
                So wirst du in Googles KI-Antwortbox als Quelle zitiert.
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
                Tools, KPIs und Tracking-Methoden für KI-Sichtbarkeit.
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
                robots.txt, llms.txt, Schema.org und was KI-Crawler brauchen.
              </p>
            </a>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100 text-center">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Bereit für KI-Sichtbarkeit?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Finde heraus, wie KI dein Unternehmen aktuell beschreibt - und was du tun kannst, um empfohlen zu werden.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose Kurzanalyse anfragen" />
      </section>

      <Footer />
    </div>
  );
}

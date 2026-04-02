import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Welche Tools messen KI-Sichtbarkeit am besten?',
    a: 'Ahrefs Brand Radar und Semrush AI Visibility sind die derzeit umfassendsten Tools. Ahrefs trackt Brand Mentions in KI-Antworten automatisiert, Semrush zeigt dir deine Sichtbarkeit in AI Overviews und ChatGPT-Suchergebnissen. Ergänzend liefert GA4 mit Custom Reports die Referral-Traffic-Daten von KI-Plattformen wie chat.openai.com und perplexity.ai.',
  },
  {
    q: 'Kann ich KI-Sichtbarkeit kostenlos messen?',
    a: 'Ja, eingeschränkt. GA4 ist kostenlos und zeigt dir AI-Referral-Traffic. Server-Logs kannst du mit Open-Source-Tools wie GoAccess auf KI-Bot-Aktivität analysieren. Manuelle Prompt-Tests kosten nichts außer Zeit. Für systematisches, automatisiertes Tracking brauchst du allerdings kostenpflichtige Tools wie Ahrefs oder Semrush.',
  },
  {
    q: 'Wie oft sollte ich meine KI-Sichtbarkeit messen?',
    a: 'Referral-Traffic und Crawler-Aktivität: wöchentlich. Brand Mentions und Prompt-Tests: mindestens monatlich. KI-Modelle aktualisieren ihre Wissensbasis in unregelmäßigen Zyklen, daher sind monatliche Vergleichswerte aussagekräftiger als tägliche Schwankungen.',
  },
  {
    q: 'Was ist Share of Voice in KI-Antworten?',
    a: 'Share of Voice misst, wie oft deine Marke im Vergleich zu Wettbewerbern in KI-Antworten zu relevanten Prompts auftaucht. Beispiel: Bei 100 branchenrelevanten Fragen wirst du 12-mal zitiert, dein Wettbewerber 28-mal. Dein Share of Voice ist 12%, seiner 28%. Diese Metrik zeigt dir, wo du stehst und wie viel Optimierungspotenzial besteht.',
  },
  {
    q: 'Warum zeigt Google Search Console keine KI-Sichtbarkeit?',
    a: 'Google Search Console trackt nur klassische Google-Suche: Impressionen, Klicks, Rankings. Traffic von ChatGPT, Perplexity oder Claude wird dort nicht erfasst. Auch Google AI Overviews tauchen in der GSC nicht zuverlässig auf. Du brauchst GA4 für Referral-Traffic und spezialisierte Tools für KI-Zitationsanalyse.',
  },
  {
    q: 'Wie messe ich, ob ChatGPT meine Marke empfiehlt?',
    a: 'Drei Wege: 1) GA4 prüfen, ob Traffic von chat.openai.com oder chatgpt.com kommt. 2) Systematische Prompt-Tests mit dokumentierten Fragen und Antworten durchführen. 3) Ahrefs Brand Radar oder ähnliche Tools für automatisiertes Monitoring einsetzen. Wichtig: Prompt-Tests sind nicht reproduzierbar, da KI-Antworten variieren. Deshalb brauchst du viele Tests über Zeit, nicht einzelne Stichproben.',
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
  headline: 'KI-Sichtbarkeit messen: Tools, Methoden und KPIs für 2026',
  description:
    'Wie misst du deine Sichtbarkeit in ChatGPT, Perplexity und AI Overviews? Die wichtigsten Tools, KPIs und Tracking-Methoden für KI-Sichtbarkeit.',
  author: {
    '@type': 'Person',
    name: 'Vadim Shchepin',
    url: 'https://aiseo.hamburg/ueber-mich',
    jobTitle: 'AI SEO Specialist',
  },
  publisher: {
    '@id': 'https://aiseo.hamburg/#organization',
  },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-messen',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'KI-Sichtbarkeit messen' },
  ],
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

export default function KISichtbarkeitMessenPage() {
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
              <li className="text-black font-medium">KI-Sichtbarkeit messen</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            KI-Sichtbarkeit messen: Weil du nicht managen kannst, was du nicht misst
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Dein Google-Ranking kennst du. Deine CTR kennst du. Aber weißt du, ob ChatGPT dein Unternehmen empfiehlt? Hier sind die Tools, KPIs und Methoden, um KI-Sichtbarkeit endlich messbar zu machen.
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
                <span><strong className="text-black">Google Search Console ist blind</strong> für KI-Traffic. Du brauchst neue Tools und neue KPIs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">4 Messebenen:</strong> Referral-Traffic, Crawler-Aktivität, Brand Mentions, systematische Prompt-Tests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">Tools:</strong> Ahrefs Brand Radar, Semrush AI Visibility, GA4 Custom Reports, Server-Log-Analyse.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">Neue KPIs:</strong> Share of Voice in KI, AI Referral Traffic, Citation Rate, Crawler-Frequenz.</span>
              </li>
            </ul>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Das Problem: Du fliegst blind                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Das Problem: Du fliegst blind
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Dein monatliches Reporting hat ein riesiges Loch. Google Search Console zeigt dir Impressionen, Klicks, Rankings. Dein Analytics-Dashboard zeigt dir Traffic-Quellen, Conversions, Bounce Rate. Alles sauber aufbereitet, alles nachvollziehbar.
            </p>
            <p>
              <strong className="text-black">Aber keines dieser Tools beantwortet die Frage: Empfiehlt ChatGPT dein Unternehmen?</strong>
            </p>
          </div>

          <StatBox text="35% aller Online-Recherchen laufen 2026 über KI-Plattformen. Dein Reporting deckt 0% davon ab." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Du gibst Tausende für SEO aus und weißt nicht, ob es in der KI-Welt wirkt. Deine Agentur zeigt dir Google-Rankings, aber verschweigt, dass ein wachsender Teil der Recherchen jetzt über ChatGPT, Perplexity und Google AI Overviews läuft.
            </p>
            <p>
              Frag deinen Marketingleiter: <strong className="text-black">&ldquo;Wie hoch ist unser Share of Voice in KI-Antworten?&rdquo;</strong> Die Antwort wird Schweigen sein. Nicht aus Inkompetenz, sondern weil die meisten Unternehmen diese Frage noch nie gestellt haben.
            </p>
            <p>
              Das Problem ist nicht, dass du schlecht optimiert bist. Das Problem ist, dass du nicht weißt, <strong className="text-black">ob</strong> du optimiert bist. Du optimierst im Dunkeln.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-black mb-4">Die brutale Realität:</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">--</span>
                <span>Google Search Console zeigt dir <strong className="text-black">nichts</strong> über ChatGPT-Empfehlungen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">--</span>
                <span>&ldquo;Wie gut kennt ChatGPT meine Marke?&rdquo; - diese Frage kann dir deine Agentur nicht beantworten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">--</span>
                <span>Die meisten Unternehmen wissen nicht einmal, ob sie in KI-Antworten auftauchen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">--</span>
                <span>&ldquo;Share of Model&rdquo; ist ein schwarzes Loch im Reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">--</span>
                <span>Ohne Messung kannst du keinen ROI nachweisen - und ohne ROI kein Budget für KI-Optimierung</span>
              </li>
            </ul>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Die 4 Messebenen der KI-Sichtbarkeit                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Die 4 Messebenen der KI-Sichtbarkeit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            KI-Sichtbarkeit lässt sich nicht mit einem einzigen Tool erfassen. Du brauchst vier Perspektiven, die zusammen ein vollständiges Bild ergeben.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Ebene 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3 text-brand-accent font-bold">1</div>
              <h3 className="text-xl font-semibold text-black mb-3">Referral-Traffic</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Der direkteste Beweis: Besucher, die von KI-Plattformen auf deine Website kommen.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">GA4 tracken:</strong> chat.openai.com, chatgpt.com, perplexity.ai</li>
                <li><strong className="text-black">Referrer:</strong> copilot.microsoft.com, gemini.google.com</li>
                <li><strong className="text-black">Vorteil:</strong> Harte Zahlen, direkt messbar</li>
                <li><strong className="text-black">Limit:</strong> Nicht jede KI-Empfehlung generiert einen Klick</li>
              </ul>
            </div>

            {/* Ebene 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3 text-brand-accent font-bold">2</div>
              <h3 className="text-xl font-semibold text-black mb-3">Crawler-Aktivität</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Welche KI-Bots besuchen deine Website - und wie oft?
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">GPTBot:</strong> OpenAIs Crawler für Training und Search</li>
                <li><strong className="text-black">OAI-SearchBot:</strong> ChatGPTs Live-Suche</li>
                <li><strong className="text-black">PerplexityBot:</strong> Perplexitys Echtzeitsuche</li>
                <li><strong className="text-black">ClaudeBot:</strong> Anthropics Crawler</li>
              </ul>
            </div>

            {/* Ebene 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3 text-brand-accent font-bold">3</div>
              <h3 className="text-xl font-semibold text-black mb-3">Brand Mention Monitoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Wird deine Marke in KI-Antworten genannt - auch ohne Link?
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Ahrefs Brand Radar:</strong> Automatisiertes Tracking von Markennennungen in KI</li>
                <li><strong className="text-black">Semrush AI Visibility:</strong> Sichtbarkeit in AI Overviews</li>
                <li><strong className="text-black">Vorteil:</strong> Erfasst auch Empfehlungen ohne Klick</li>
                <li><strong className="text-black">Key Insight:</strong> Viele KI-Empfehlungen sind &ldquo;Dark Traffic&rdquo;</li>
              </ul>
            </div>

            {/* Ebene 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-2xl mb-3 text-brand-accent font-bold">4</div>
              <h3 className="text-xl font-semibold text-black mb-3">Systematische Prompt-Tests</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Direkt fragen: Was sagt die KI über dich?
              </p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><strong className="text-black">Methode:</strong> 50-100 branchenrelevante Prompts dokumentieren</li>
                <li><strong className="text-black">Plattformen:</strong> ChatGPT, Perplexity, Gemini, Claude</li>
                <li><strong className="text-black">Frequenz:</strong> Monatlich wiederholen, Ergebnisse vergleichen</li>
                <li><strong className="text-black">Achtung:</strong> Antworten variieren - große Stichproben nutzen</li>
              </ul>
            </div>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  Tools für KI-Sichtbarkeits-Tracking                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Tools für KI-Sichtbarkeits-Tracking
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Kein einzelnes Tool deckt alles ab. Hier ist, was aktuell am besten funktioniert - und was jedes Tool wirklich kann.
          </p>

          {/* Ahrefs */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-black mb-3">Ahrefs Brand Radar</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Trackt automatisiert, wo deine Marke im Web und in KI-Antworten erwähnt wird. Zeigt dir Mention-Trends über Zeit und identifiziert neue Quellen, die dich zitieren.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li><strong className="text-black">Stärke:</strong> Automatisiertes Monitoring, historische Trendanalyse, Wettbewerbsvergleich</li>
              <li><strong className="text-black">Schwäche:</strong> Deckt nicht alle KI-Plattformen gleichermaßen ab</li>
              <li><strong className="text-black">Preis:</strong> Ab ca. 99$/Monat (im Ahrefs-Abo enthalten)</li>
            </ul>
          </div>

          {/* Semrush */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-black mb-3">Semrush AI Visibility</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Zeigt dir, für welche Keywords deine Website in Google AI Overviews erscheint. Trackt deine Position in KI-generierten Antworten und vergleicht sie mit Wettbewerbern.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li><strong className="text-black">Stärke:</strong> Detaillierte AI Overview-Analyse, Keyword-Level-Daten</li>
              <li><strong className="text-black">Schwäche:</strong> Fokus auf Google AI Overviews, weniger auf ChatGPT/Perplexity</li>
              <li><strong className="text-black">Preis:</strong> Ab ca. 130$/Monat (im Business-Plan)</li>
            </ul>
          </div>

          {/* GA4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-black mb-3">GA4 Custom Reports</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Kostenlos und sofort einsetzbar. Erstelle einen Custom Report, der Traffic von KI-Plattformen isoliert.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 my-4 overflow-x-auto">
              <p className="text-sm font-semibold text-black mb-2">GA4 Exploration einrichten:</p>
              <pre className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">{`1. GA4 > Explore > Free Form
2. Dimension: Session source / medium
3. Filter: Source contains "chat.openai" OR "perplexity" OR "chatgpt" OR "copilot.microsoft" OR "gemini.google"
4. Metrics: Sessions, Engaged Sessions, Conversions
5. Zeitraum: Letzte 90 Tage, Woche für Woche`}</pre>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li><strong className="text-black">Stärke:</strong> Kostenlos, sofort verfügbar, Conversion-Tracking</li>
              <li><strong className="text-black">Schwäche:</strong> Zeigt nur Traffic, nicht Mentions ohne Klick</li>
              <li><strong className="text-black">Tipp:</strong> Richte ein eigenes Channel Grouping &ldquo;AI Platforms&rdquo; ein</li>
            </ul>
          </div>

          {/* Server Logs */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-black mb-3">Server-Log-Analyse</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Deine Server-Logs verraten dir, welche KI-Bots deine Website crawlen. Das ist der früheste Indikator für KI-Sichtbarkeit: Bevor du zitiert wirst, musst du gecrawlt werden.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 my-4 overflow-x-auto">
              <p className="text-sm font-semibold text-black mb-2">Beispiel: KI-Bots in nginx-Logs filtern:</p>
              <pre className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">{`grep -E "(GPTBot|OAI-SearchBot|PerplexityBot|ClaudeBot|Google-Extended|Applebot-Extended)" access.log | awk '{print $1, $4, $7, $14}' | sort | uniq -c | sort -rn`}</pre>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li><strong className="text-black">Stärke:</strong> Frühindikator, zeigt Bot-Frequenz und gecrawlte Seiten</li>
              <li><strong className="text-black">Schwäche:</strong> Technisch anspruchsvoll, Zugang zu Raw Logs notwendig</li>
              <li><strong className="text-black">Tipp:</strong> Bei Vercel/Netlify: Log-Drains einrichten oder Middleware-Logging nutzen</li>
            </ul>
          </div>

          {/* Manual Testing */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-black mb-3">Manuelles Prompt-Testing-Framework</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Die direkteste Methode: Frag die KI selbst. Aber strukturiert, nicht zufällig.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 my-4">
              <p className="text-sm font-semibold text-black mb-2">Prompt-Kategorien für dein Testing:</p>
              <ul className="text-xs text-gray-700 leading-relaxed space-y-1">
                <li>1. Direkte Markenabfrage: &ldquo;Was weißt du über [Marke]?&rdquo;</li>
                <li>2. Kategorie-Abfrage: &ldquo;Welche [Branche]-Anbieter in [Stadt] empfiehlst du?&rdquo;</li>
                <li>3. Vergleichs-Abfrage: &ldquo;Vergleiche [Marke] mit [Wettbewerber]&rdquo;</li>
                <li>4. Problem-Abfrage: &ldquo;Ich suche einen [Dienstleistung] in Hamburg&rdquo;</li>
                <li>5. Expertise-Abfrage: &ldquo;Wer ist Experte für [Thema] in Deutschland?&rdquo;</li>
              </ul>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li><strong className="text-black">Stärke:</strong> Direkter Einblick, sofort umsetzbar, kostenlos</li>
              <li><strong className="text-black">Schwäche:</strong> Nicht reproduzierbar, zeitaufwändig, subjektiv</li>
              <li><strong className="text-black">Wichtig:</strong> Mindestens 50 Prompts pro Monat, Ergebnisse in Spreadsheet dokumentieren</li>
            </ul>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  KPIs die 2026 wirklich zählen                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            KPIs die 2026 wirklich zählen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Vergiss Vanity Metrics. Diese KPIs zeigen dir, ob deine KI-Optimierung wirkt.
          </p>

          <div className="space-y-6">
            {/* KPI 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Share of Voice in KI-Antworten</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Wie oft wirst du im Vergleich zu Wettbewerbern in KI-Antworten zitiert? Miss das über 50-100 branchenrelevante Prompts monatlich.
              </p>
              <p className="text-sm text-brand-accent font-medium">Ziel: Steigerung um 5-10 Prozentpunkte pro Quartal</p>
            </div>

            {/* KPI 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">AI Referral Traffic</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Sessions von chat.openai.com, perplexity.ai, chatgpt.com, copilot.microsoft.com und gemini.google.com. In GA4 als eigene Channel-Gruppe einrichten.
              </p>
              <p className="text-sm text-brand-accent font-medium">Ziel: Monat-über-Monat-Wachstum von 15-25%</p>
            </div>

            {/* KPI 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Brand Mention Velocity</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Wie schnell wachsen deine Markennennungen im Web und in KI-Kontexten? Ahrefs Brand Radar zeigt den Trend. Steigende Velocity = steigende KI-Sichtbarkeit.
              </p>
              <p className="text-sm text-brand-accent font-medium">Ziel: Positiver Trend über 3+ Monate</p>
            </div>

            {/* KPI 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Citation Rate pro Plattform</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Bei wie vielen relevanten Prompts wirst du auf welcher Plattform zitiert? Unterscheide zwischen ChatGPT, Perplexity, Gemini und Claude. Jede Plattform hat andere Präferenzen.
              </p>
              <p className="text-sm text-brand-accent font-medium">Benchmark: Top-Marken erreichen 20-40% Citation Rate in ihrer Nische</p>
            </div>

            {/* KPI 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Crawler Hit Frequency</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Wie oft crawlen GPTBot, PerplexityBot und ClaudeBot deine Website? Steigende Frequenz deutet auf wachsende Relevanz hin. Fallende Frequenz ist ein Warnsignal.
              </p>
              <p className="text-sm text-brand-accent font-medium">Tracking: Wöchentliche Server-Log-Auswertung</p>
            </div>
          </div>
      </section>

      {/* ============================================================ */}
      {/*  So baust du ein KI-Sichtbarkeits-Dashboard                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            So baust du ein KI-Sichtbarkeits-Dashboard
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Schritt für Schritt zum ersten aussagekräftigen Report. Du brauchst keine Enterprise-Tools - starte mit dem, was du hast.
          </p>

          <ol className="space-y-8">
            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                1. GA4 AI-Traffic-Segment einrichten
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Erstelle in GA4 ein Custom Segment mit allen KI-Referrern: chat.openai.com, chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com. Richte es als Channel-Gruppe &ldquo;AI Platforms&rdquo; ein, damit es in allen Standard-Reports erscheint.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                2. Server-Log-Monitoring aktivieren
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Richte ein wöchentliches Skript ein, das GPTBot, OAI-SearchBot, PerplexityBot und ClaudeBot in deinen Access-Logs zählt. Bei Vercel: Nutze Log Drains zu einem Logging-Service wie Datadog oder Logflare. Tracke: Anzahl Hits, gecrawlte URLs, Frequenz.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                3. Prompt-Testing-Spreadsheet erstellen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Google Sheet mit Spalten: Prompt, Plattform, Datum, Ergebnis (erwähnt/nicht erwähnt), Position in der Antwort, Zitat-Qualität (Link/Name/Detail). Starte mit 50 branchenrelevanten Prompts. Teste monatlich auf ChatGPT, Perplexity und Gemini.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                4. Brand Monitoring verbinden
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wenn du Ahrefs oder Semrush nutzt: Aktiviere Brand Radar bzw. AI Visibility. Wenn nicht: Starte mit Google Alerts für deine Marke + manuellem Tracking. Exportiere die Daten monatlich in dein Dashboard.
              </p>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                5. Monatliches KI-Sichtbarkeits-Reporting
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fasse alle vier Messebenen in einem Report zusammen. Vergleiche Monat über Monat. Identifiziere Trends. Ein einfaches Google Sheet reicht für den Start - Hauptsache, du misst überhaupt.
              </p>
            </li>
          </ol>

          <StatBox text="Der erste Report ist der wichtigste. Er zeigt dir nicht, wie gut du bist - sondern wie viel du nicht wusstest." />
      </section>

      {/* ============================================================ */}
      {/*  Typische Mess-Fehler                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Typische Mess-Fehler
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Fehler 1: Einzelne Prompt-Tests als Beweis nehmen</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Du fragst ChatGPT einmal nach deiner Marke, bekommst eine positive Antwort und denkst: &ldquo;Läuft.&rdquo; KI-Antworten variieren massiv je nach Formulierung, Zeitpunkt und sogar Session. Ein einzelner Test sagt nichts. Du brauchst 50+ Tests über mehrere Wochen für belastbare Aussagen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Fehler 2: Nur Traffic messen, Mentions ignorieren</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI Referral Traffic ist nur die Spitze des Eisbergs. Wenn ChatGPT dich empfiehlt, klicken viele Nutzer nicht - sie haben die Antwort bereits. Deine Marke wird trotzdem im Kopf verankert. Brand Mention Monitoring ist daher mindestens genauso wichtig wie Traffic-Daten.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Fehler 3: KI-Sichtbarkeit mit Google-Rankings gleichsetzen</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Position 1 bei Google bedeutet nicht, dass ChatGPT dich zitiert. KI-Systeme bewerten anders: Entitätsautorität, Zitierhäufigkeit, Content-Struktur, Markenbekanntheit. Du kannst bei Google auf Platz 1 stehen und in KI-Antworten komplett fehlen.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Fehler 4: Kein Wettbewerbsvergleich</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deine KI-Sichtbarkeit ist nur im Kontext deiner Wettbewerber aussagekräftig. 10 Erwähnungen pro Monat klingt gut - bis du siehst, dass dein Wettbewerber 50 hat. Tracke immer relativ, nicht absolut.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Fehler 5: Zu früh aufgeben</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                KI-Modelle aktualisieren ihre Wissensbasis in Zyklen. Optimierungen, die du heute vornimmst, zeigen oft erst in 4-12 Wochen Wirkung. Wer nach zwei Wochen keine Veränderung sieht und aufgibt, hat nie wirklich gemessen.
              </p>
            </div>
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
                <strong className="text-black">Gartner (2024):</strong> &ldquo;Predicts 2025: Search and AI&rdquo; - Prognose, dass über 50% des organischen Traffics bis 2028 an KI-gestützte Suche verloren geht.
              </li>
              <li>
                <strong className="text-black">Ahrefs (2025):</strong> &ldquo;Brand Radar: Track Your Brand Mentions Across the Web&rdquo; - Dokumentation zum automatisierten Brand-Mention-Tracking.
              </li>
              <li>
                <strong className="text-black">Semrush (2025):</strong> &ldquo;AI Visibility Report&rdquo; - Feature-Dokumentation zur Messung der Sichtbarkeit in AI Overviews.
              </li>
              <li>
                <strong className="text-black">Google (2025):</strong> &ldquo;GA4 Traffic Source Dimensions&rdquo; - Offizielle Dokumentation zu Referral-Traffic-Tracking in Google Analytics 4.
              </li>
              <li>
                <strong className="text-black">OpenAI (2025):</strong> &ldquo;GPTBot Documentation&rdquo; - Offizielle Crawler-Dokumentation mit User-Agent-Strings und Crawl-Verhalten.
              </li>
              <li>
                <strong className="text-black">Princeton University (2024):</strong> &ldquo;GEO: Generative Engine Optimization&rdquo; - Wissenschaftliche Studie zu Optimierungsstrategien für KI-Suchmaschinen.
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
              href="/wissen/ki-sichtbarkeit"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                KI-Sichtbarkeit: Der komplette Guide
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Was KI-Sichtbarkeit bedeutet, warum sie entscheidend ist und wie du sie erreichst.
              </p>
            </a>

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
          </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
                  <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-4">
              Wie sichtbar bist du in KI?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Du weißt jetzt, was du messen musst. Aber willst du wirklich selbst 50 Prompts testen und Server-Logs parsen? Lass uns das für dich herausfinden - in einer kostenlosen Kurzanalyse.
            </p>
            <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Sichtbarkeits-Analyse" />
          </div>
      </section>

      <Footer />
    </div>
  );
}

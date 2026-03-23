'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Welche KI-Crawler muss ich in robots.txt erlauben?',
    a: 'Mindestens GPTBot und OAI-SearchBot (OpenAI/ChatGPT), PerplexityBot (Perplexity), ClaudeBot (Anthropic) und Googlebot (Google AI Overviews). Bingbot ist ebenfalls wichtig, weil er Daten an ChatGPT und Perplexity liefert. Blockierst du einen davon, bist du auf der jeweiligen Plattform unsichtbar.',
  },
  {
    q: 'Was ist llms.txt und brauche ich das?',
    a: 'llms.txt ist ein neuer Standard, der LLMs eine maschinenlesbare Zusammenfassung deiner Website liefert. Es ist kein offizieller W3C-Standard, wird aber von immer mehr KI-Systemen unterstützt. Wenn du KI-Sichtbarkeit ernst meinst, solltest du es implementieren - der Aufwand ist minimal, der potenzielle Nutzen hoch.',
  },
  {
    q: 'Reicht Schema.org Markup allein für KI-Sichtbarkeit?',
    a: 'Nein. Schema.org ist eine von drei technischen Säulen (neben Crawlbarkeit und semantischem HTML). Aber ohne Schema.org fehlt LLMs der Kontext, um deine Inhalte korrekt einzuordnen. Es ist notwendig, aber nicht hinreichend.',
  },
  {
    q: 'Können JavaScript-Websites in KI sichtbar sein?',
    a: 'Nur wenn sie Server-Side Rendering (SSR) oder Static Site Generation (SSG) verwenden. Reine Client-Side-Rendered SPAs sind für die meisten KI-Crawler unsichtbar, weil diese kein JavaScript ausführen. Next.js, Nuxt oder Astro lösen das Problem durch SSR/SSG.',
  },
  {
    q: 'Wie teste ich, ob KI-Crawler meine Website lesen können?',
    a: 'Drei Methoden: 1) Server-Logs auf GPTBot, PerplexityBot und ClaudeBot prüfen. 2) curl -A "GPTBot" auf deine URL ausführen und prüfen, ob Content zurückkommt. 3) In der Google Search Console unter "Crawl-Statistiken" nach KI-Bot-Zugriffen suchen. Alternativ die Seite mit deaktiviertem JavaScript im Browser laden - was du siehst, sieht auch der KI-Crawler.',
  },
  {
    q: 'Wie schnell wirken technische Optimierungen auf KI-Sichtbarkeit?',
    a: 'Perplexity crawlt in Echtzeit - Änderungen können innerhalb von Tagen wirken. ChatGPT und Claude trainieren in Zyklen, hier dauert es 4-12 Wochen. Google AI Overviews reagieren ähnlich schnell wie die klassische Google-Suche, also Tage bis wenige Wochen.',
  },
];

/* ------------------------------------------------------------------ */
/*  KI-Crawler data                                                   */
/* ------------------------------------------------------------------ */

const CRAWLERS = [
  {
    name: 'GPTBot',
    org: 'OpenAI',
    purpose: 'Trainingsdaten für GPT-Modelle',
    ua: 'GPTBot/1.0',
    directive: 'User-agent: GPTBot',
  },
  {
    name: 'OAI-SearchBot',
    org: 'OpenAI',
    purpose: 'Live-Suche in ChatGPT (SearchGPT)',
    ua: 'OAI-SearchBot/1.0',
    directive: 'User-agent: OAI-SearchBot',
  },
  {
    name: 'PerplexityBot',
    org: 'Perplexity',
    purpose: 'Echtzeit-Index für Perplexity-Antworten',
    ua: 'PerplexityBot',
    directive: 'User-agent: PerplexityBot',
  },
  {
    name: 'ClaudeBot',
    org: 'Anthropic',
    purpose: 'Trainingsdaten und Web-Suche für Claude',
    ua: 'ClaudeBot/1.0',
    directive: 'User-agent: ClaudeBot',
  },
  {
    name: 'Googlebot',
    org: 'Google',
    purpose: 'Indexierung und AI Overviews',
    ua: 'Googlebot/2.1',
    directive: 'User-agent: Googlebot',
  },
  {
    name: 'Bingbot',
    org: 'Microsoft',
    purpose: 'Indexierung, speist ChatGPT und Perplexity',
    ua: 'bingbot/2.0',
    directive: 'User-agent: Bingbot',
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
  headline: 'Technische KI-Sichtbarkeit: Warum KI-Crawler deine Website nicht verstehen',
  description:
    'Die technischen Grundlagen für KI-Sichtbarkeit: robots.txt, llms.txt, Schema.org, semantisches HTML und Core Web Vitals für LLMs.',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/technische-ki-sichtbarkeit',
  inLanguage: 'de',
};

/* ------------------------------------------------------------------ */
/*  Reusable components                                               */
/* ------------------------------------------------------------------ */

const StatBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
    <p className="text-lg md:text-xl font-semibold text-black leading-snug">{text}</p>
  </div>
);

const CodeBlock: React.FC<{ children: string; label?: string }> = ({ children, label }) => (
  <div className="my-6">
    {label && (
      <p className="text-xs font-mono text-gray-400 mb-2">{label}</p>
    )}
    <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 font-mono text-sm overflow-x-auto whitespace-pre">
      {children}
    </pre>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function TechnischeKISichtbarkeitPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
            { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
            { '@type': 'ListItem', position: 3, name: 'Technische KI-Sichtbarkeit' },
          ],
        }) }}
      />

      {/* ============================================================ */}
      {/*  Hero                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><a href="/" className="hover:text-brand-accent transition-colors">Startseite</a></li>
              <li>/</li>
              <li><a href="/wissen" className="hover:text-brand-accent transition-colors">Wissen</a></li>
              <li>/</li>
              <li className="text-black font-medium">Technische KI-Sichtbarkeit</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
            Technische KI-Sichtbarkeit: Warum KI-Crawler deine Website nicht verstehen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Deine IT hat GPTBot blockiert und du wunderst dich, warum ChatGPT dich nicht kennt. Hier sind die technischen Grundlagen, die darüber entscheiden, ob KI deine Website lesen, verstehen und zitieren kann.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  TL;DR                                                       */}
      {/* ============================================================ */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-12">
        <FadeIn>
          <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-accent mb-4">TL;DR</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">70% der Unternehmens-Websites</strong> blockieren mindestens einen KI-Crawler unbewusst. Prüfe deine robots.txt sofort.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">llms.txt</strong> ist der neue Standard, um LLMs eine maschinenlesbare Zusammenfassung deiner Website zu liefern.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">Schema.org + semantisches HTML</strong> geben KI den Kontext, den sie braucht, um dich korrekt einzuordnen und zu zitieren.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">JavaScript-SPAs</strong> sind für KI-Crawler unsichtbar. SSR/SSG ist Pflicht.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Das Problem                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Das Problem: Deine Website spricht kein KI
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              KI-Crawler lesen Websites fundamental anders als der Googlebot. Sie führen kein JavaScript aus. Sie rendern keine CSS-Layouts. Sie sehen keine Bilder. Was sie sehen: <strong className="text-black">rohes HTML, strukturierte Daten und Textinhalt</strong>. Und wenn das nicht stimmt, existierst du nicht.
            </p>
            <p>
              Dein CMS rendert JavaScript. KI-Crawler können kein JavaScript. Problem.
            </p>
          </div>

          <StatBox text="70% der Unternehmens-Websites blockieren mindestens einen KI-Crawler - unbewusst." />

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Aus berechtigter Angst vor Datenklau haben viele Unternehmen 2024 alle KI-Crawler ausgesperrt. Jetzt stellen sie entsetzt fest, dass sie sich aus dem Zukunftsmarkt zensiert haben.
            </p>
            <p>
              Viele Security-Plugins und WAFs blockieren GPTBot, PerplexityBot und ClaudeBot pauschal. Dein IT-Team hat vermutlich keine böse Absicht - aber das Ergebnis ist dasselbe: <strong className="text-black">deine Website ist für KI unsichtbar</strong>.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-semibold text-black mb-4">Die vier häufigsten technischen Fehler</h3>
            <ol className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-black">robots.txt blockiert KI-Bots:</strong> Security-Plugins setzen pauschal "Disallow" für alle unbekannten User-Agents.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-black">JavaScript-Only-Rendering:</strong> SPAs ohne SSR liefern KI-Crawlern eine leere HTML-Hülle.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-black">Fehlende strukturierte Daten:</strong> Ohne Schema.org kann KI dein Unternehmen nicht als Entität einordnen.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-black">Keine semantische HTML-Struktur:</strong> Div-Suppe statt sauberer Heading-Hierarchie macht Inhalte unextrahierbar.</span>
              </li>
            </ol>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  KI-Crawler: Wer ist wer?                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            KI-Crawler: Wer ist wer?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Sechs Crawler entscheiden über deine KI-Sichtbarkeit. Blockierst du einen, bist du auf der jeweiligen Plattform unsichtbar.
          </p>

          <div className="space-y-4">
            {CRAWLERS.map((c) => (
              <div key={c.name} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-black">{c.name}</h3>
                  <span className="text-sm text-gray-500">{c.org}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">{c.purpose}</p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm">
                  <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">User-Agent: {c.ua}</code>
                  <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">{c.directive}</code>
                </div>
              </div>
            ))}
          </div>

          <StatBox text="Bingbot ist der stille Multiplikator: Er speist sowohl ChatGPT als auch Perplexity mit Daten. Blockierst du Bingbot, verlierst du gleich zwei Plattformen." />
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  robots.txt für KI-Sichtbarkeit                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            robots.txt für KI-Sichtbarkeit
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Die robots.txt ist die erste Tür, die KI-Crawler öffnen. Ist sie zu, gehen sie weiter. Keine zweite Chance.
            </p>
            <p>
              Viele Unternehmen haben nach dem KI-Hype 2024 pauschal alle KI-Bots blockiert. Das war nachvollziehbar - aber strategisch ein Fehler. Du kannst selektiv erlauben, was du öffentlich machen willst, und den Rest schützen.
            </p>
          </div>

          <CodeBlock label="robots.txt - KI-optimiert">
{`# Alle KI-Crawler explizit erlauben
User-agent: GPTBot
Allow: /
Disallow: /intern/
Disallow: /api/

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Standard-Crawler
User-agent: *
Allow: /
Disallow: /intern/
Disallow: /api/

Sitemap: https://example.com/sitemap.xml`}
          </CodeBlock>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-semibold text-black mb-4">Wichtig: Was du NICHT blockieren solltest</h3>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">x</span>
                <span>Deine Service-Seiten, Case Studies, Blog-Artikel und FAQ-Seiten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">x</span>
                <span>Dein Impressum und deine Kontaktseite (Entity-Signale)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">x</span>
                <span>Strukturierte Daten und Schema.org-Markup</span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-black mb-4 mt-6">Was du blockieren kannst</h3>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">+</span>
                <span>Interne Dashboards, Admin-Bereiche, API-Endpunkte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">+</span>
                <span>Staging-Umgebungen und Test-Seiten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent font-bold">+</span>
                <span>Proprietäre Inhalte hinter Login-Bereichen</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  llms.txt                                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            llms.txt: Der neue Standard für LLM-Sichtbarkeit
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              llms.txt ist ein Vorschlag für eine standardisierte Datei im Root-Verzeichnis deiner Website, die LLMs eine kompakte, maschinenlesbare Zusammenfassung deines Unternehmens liefert. Ähnlich wie robots.txt für Crawler oder humans.txt für Menschen.
            </p>
            <p>
              Der Unterschied: robots.txt sagt Crawlern, <strong className="text-black">was sie dürfen</strong>. llms.txt sagt LLMs, <strong className="text-black">wer du bist und was du anbietest</strong>. Es ist dein Elevator Pitch für Maschinen.
            </p>
          </div>

          <CodeBlock label="llms.txt - Beispiel">
{`# llms.txt - [Firmenname]

## Unternehmen
[Firmenname] ist ein [Branche]-Unternehmen in [Stadt].
Wir bieten [Kernleistungen].

## Leistungen
- [Leistung 1]: [Kurzbeschreibung]
- [Leistung 2]: [Kurzbeschreibung]
- [Leistung 3]: [Kurzbeschreibung]

## Zielgruppe
[Wer sind eure Kunden? Branche, Größe, Region]

## Kontakt
- Website: https://example.com
- E-Mail: kontakt@example.com
- Standort: [Stadt, Region]

## Wichtige Seiten
- /leistungen - Übersicht aller Leistungen
- /ueber-uns - Über das Unternehmen
- /blog - Fachartikel und Insights
- /kontakt - Kontaktformular`}
          </CodeBlock>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-semibold text-black mb-4">Implementierung</h3>
            <ol className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">1.</span>
                <span>Erstelle eine Datei <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">llms.txt</code> im Root deiner Domain (z.B. <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">https://example.com/llms.txt</code>)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">2.</span>
                <span>Schreibe eine klare, strukturierte Zusammenfassung deines Unternehmens in Markdown</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">3.</span>
                <span>Halte die Datei aktuell - veraltete Informationen schaden mehr als keine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">4.</span>
                <span>Verlinke die wichtigsten Seiten deiner Website mit Kontext</span>
              </li>
            </ol>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Schema.org Markup für LLMs                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
            Schema.org Markup für LLMs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Strukturierte Daten sind für KI-Systeme das, was ein Organigramm für einen neuen Mitarbeiter ist: Kontext, Einordnung, Beziehungen. Ohne Schema.org bist du für LLMs ein unbekannter Textblock.
          </p>

          <div className="space-y-6">
            {/* Organization/LocalBusiness */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Organization / LocalBusiness</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Entity Identity - Wer bist du? Ohne dieses Schema kann KI dich nicht als Entität erkennen.</p>
              <CodeBlock label="JSON-LD: LocalBusiness">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Firmenname",
  "description": "Kurzbeschreibung der Leistungen",
  "url": "https://example.com",
  "telephone": "+49-40-1234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "Hamburg",
    "postalCode": "20095",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.5511,
    "longitude": 9.9937
  },
  "areaServed": "Hamburg",
  "sameAs": [
    "https://linkedin.com/company/firmenname",
    "https://instagram.com/firmenname"
  ]
}`}
              </CodeBlock>
            </div>

            {/* FAQPage */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">FAQPage</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Direkte Antworten auf Nutzerfragen. Hochrelevant für KI, weil LLMs FAQ-Strukturen bevorzugt extrahieren.</p>
              <CodeBlock label="JSON-LD: FAQPage">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet Leistung X?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leistung X kostet ab 500 Euro..."
      }
    }
  ]
}`}
              </CodeBlock>
            </div>

            {/* HowTo */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">HowTo</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Schritt-für-Schritt-Anleitungen. Ideal für prozessbasierte Inhalte, die KI als Handlungsanweisung weitergeben kann.</p>
            </div>

            {/* Article */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Article mit Author</h3>
              <p className="text-gray-600 leading-relaxed mb-4">E-E-A-T-Signal: Wer hat den Inhalt geschrieben? Echte Autoren mit Expertise werden von KI bevorzugt zitiert.</p>
            </div>

            {/* Product */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">Product</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Für kommerzielle Inhalte: Preis, Verfügbarkeit, Bewertungen. Wird von KI für Kaufempfehlungen herangezogen.</p>
            </div>
          </div>

          <StatBox text="Schema.org liefert KI den Kontext. Ohne Kontext bist du ein anonymer Textblock unter Millionen." />
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Semantisches HTML                                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Semantisches HTML: Warum Struktur alles ist
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              KI-Crawler sehen kein Design. Sie sehen DOM-Struktur. Ein perfekt gestalteter Abschnitt in einem <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;div&gt;</code> ohne semantische Bedeutung ist für LLMs unsichtbar. Ein klar strukturiertes <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;article&gt;</code> mit sauberer Heading-Hierarchie wird extrahiert und zitiert.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-semibold text-black mb-4">Die vier Regeln für KI-lesbares HTML</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-2">1. Heading-Hierarchie (H1 &rarr; H2 &rarr; H3)</h4>
                <p className="text-gray-600 leading-relaxed">Genau ein H1 pro Seite. H2 für Hauptabschnitte. H3 für Unterabschnitte. Keine Sprünge (kein H1 &rarr; H4). LLMs nutzen die Heading-Struktur, um Inhalte thematisch zu gruppieren.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">2. Answer-first-Absätze (40-60 Wörter)</h4>
                <p className="text-gray-600 leading-relaxed">Der erste Satz jedes Absatzes beantwortet die Frage. Dann kommt der Kontext. LLMs extrahieren bevorzugt die ersten 40-60 Wörter eines Abschnitts. Wenn deine Antwort erst im dritten Satz steht, wird sie abgeschnitten.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">3. Tabellen für Vergleichsdaten</h4>
                <p className="text-gray-600 leading-relaxed">Strukturierte Vergleiche in HTML-Tabellen werden von KI bevorzugt extrahiert. Nutze <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;table&gt;</code>, <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;thead&gt;</code>, <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;tbody&gt;</code> mit sauberen Headern.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">4. Listen für scannbare Inhalte</h4>
                <p className="text-gray-600 leading-relaxed">Geordnete (<code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;ol&gt;</code>) und ungeordnete (<code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;ul&gt;</code>) Listen werden von LLMs als eigenständige Informationseinheiten erkannt. Ideal für Checklisten, Aufzählungen und Schrittfolgen.</p>
              </div>
            </div>
          </div>

          <CodeBlock label="Semantisches HTML - richtig vs. falsch">
{`<!-- FALSCH: Div-Suppe -->
<div class="section">
  <div class="title">Unsere Leistungen</div>
  <div class="text">Wir bieten X, Y und Z an.</div>
</div>

<!-- RICHTIG: Semantisches HTML -->
<article>
  <h2>Unsere Leistungen</h2>
  <p>Wir bieten X, Y und Z an. [Antwort zuerst]</p>
  <ul>
    <li>Leistung X: Beschreibung</li>
    <li>Leistung Y: Beschreibung</li>
    <li>Leistung Z: Beschreibung</li>
  </ul>
</article>`}
          </CodeBlock>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Core Web Vitals                                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Core Web Vitals &amp; Page Speed für KI
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              KI-Crawler haben Timeout-Limits. Wenn deine Seite zu langsam antwortet, bricht der Crawler ab und indexiert nichts. Schnelle Seiten werden häufiger gecrawlt und vollständiger indexiert.
            </p>
          </div>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Metrik</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Zielwert</th>
                  <th className="py-3 text-sm font-semibold text-black">Relevanz für KI</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">LCP (Largest Contentful Paint)</td>
                  <td className="py-3 pr-4">&le; 2,5s</td>
                  <td className="py-3">Crawler brechen bei langsamer Antwort ab</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">CLS (Cumulative Layout Shift)</td>
                  <td className="py-3 pr-4">&le; 0,1</td>
                  <td className="py-3">Indirekt: Google-Ranking beeinflusst KI-Datenquellen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">INP (Interaction to Next Paint)</td>
                  <td className="py-3 pr-4">&le; 200ms</td>
                  <td className="py-3">Indirekt: Nutzererfahrung beeinflusst Engagement-Signale</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">TTFB (Time to First Byte)</td>
                  <td className="py-3 pr-4">&le; 800ms</td>
                  <td className="py-3">Direkt: Crawler-Timeout-Schwelle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            TTFB ist die kritischste Metrik für KI-Crawler. Wenn dein Server länger als 800ms braucht, um zu antworten, wird der Crawl-Versuch möglicherweise abgebrochen. CDNs, Edge-Caching und Server-Side Rendering sind deine Werkzeuge.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  JavaScript Rendering                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            JavaScript Rendering: Das unsichtbare Problem
          </h2>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Die meisten KI-Crawler führen <strong className="text-black">kein JavaScript</strong> aus. Was bedeutet das? Wenn deine Website eine Single-Page-Application (SPA) ist, die Content erst nach dem Laden per JavaScript rendert, sehen KI-Crawler eine leere Seite. Buchstäblich.
            </p>
            <p>
              Googlebot kann JavaScript rendern (mit Verzögerung). GPTBot, PerplexityBot und ClaudeBot können es nicht. Das heißt: Du kannst bei Google auf Platz 1 ranken und für ChatGPT gleichzeitig unsichtbar sein.
            </p>
          </div>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-black">Rendering</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-black">KI-Crawler sehen</th>
                  <th className="py-3 text-sm font-semibold text-black">Empfehlung</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">SSR (Server-Side Rendering)</td>
                  <td className="py-3 pr-4">Vollständigen Content</td>
                  <td className="py-3 text-brand-accent font-semibold">Empfohlen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">SSG (Static Site Generation)</td>
                  <td className="py-3 pr-4">Vollständigen Content</td>
                  <td className="py-3 text-brand-accent font-semibold">Empfohlen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">CSR (Client-Side Rendering)</td>
                  <td className="py-3 pr-4">Leere HTML-Hülle</td>
                  <td className="py-3 text-red-500 font-semibold">Vermeiden</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-black">ISR (Incremental Static Regen.)</td>
                  <td className="py-3 pr-4">Vollständigen Content</td>
                  <td className="py-3 text-brand-accent font-semibold">Empfohlen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-semibold text-black mb-4">Frameworks mit SSR/SSG-Support</h3>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li><strong className="text-black">Next.js</strong> (React) - SSR, SSG, ISR out of the box</li>
              <li><strong className="text-black">Nuxt</strong> (Vue) - SSR und SSG</li>
              <li><strong className="text-black">Astro</strong> - Static-first, partial hydration</li>
              <li><strong className="text-black">SvelteKit</strong> - SSR und SSG</li>
              <li><strong className="text-black">WordPress</strong> - nativ serverseitig gerendert (aber Achtung bei Headless-Setups)</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Technische Checkliste                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Technische Checkliste: Ist deine Website KI-ready?
          </h2>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              {[
                'robots.txt erlaubt GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot',
                'llms.txt im Root-Verzeichnis mit aktuellen Unternehmensdaten',
                'Schema.org LocalBusiness/Organization auf allen Seiten',
                'FAQPage-Schema auf FAQ-Seiten',
                'Article-Schema mit Author auf Blog-/Wissensseiten',
                'Saubere Heading-Hierarchie (H1 > H2 > H3, keine Sprünge)',
                'Answer-first-Absätze: Kernaussage in den ersten 40-60 Wörtern',
                'Server-Side Rendering oder Static Site Generation aktiv',
                'TTFB unter 800ms, LCP unter 2,5s',
                'Sitemap.xml aktuell und in robots.txt verlinkt',
                'Keine WAF/Security-Plugin-Blockade für KI-User-Agents',
                'Canonical Tags korrekt gesetzt',
                'Hreflang-Tags bei mehrsprachigen Websites',
                'Open Graph und Twitter Card Markup vorhanden',
                'Interne Verlinkung mit beschreibenden Ankertexten',
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 cursor-pointer group">
                  <span className="text-brand-accent text-xl leading-none mt-0.5">&#10003;</span>
                  <span className="text-gray-700 leading-relaxed group-hover:text-black transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
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
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Quellen                                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
            Quellen
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>
                <strong className="text-black">OpenAI (2024):</strong> GPTBot Dokumentation - User-Agent-Spezifikation und robots.txt-Richtlinien für GPTBot und OAI-SearchBot.
              </li>
              <li>
                <strong className="text-black">Anthropic (2024):</strong> ClaudeBot Web Crawling - Technische Dokumentation zum ClaudeBot-Crawler und Opt-out-Möglichkeiten.
              </li>
              <li>
                <strong className="text-black">llmstxt.org (2024):</strong> llms.txt Spezifikation - Vorschlag für einen Standard zur maschinenlesbaren Website-Zusammenfassung.
              </li>
              <li>
                <strong className="text-black">Google (2025):</strong> Search Central - Structured Data Guidelines und Core Web Vitals Dokumentation.
              </li>
              <li>
                <strong className="text-black">Perplexity (2024):</strong> PerplexityBot Dokumentation - Crawler-Verhalten und robots.txt-Unterstützung.
              </li>
              <li>
                <strong className="text-black">Web.dev (2025):</strong> Core Web Vitals - LCP, CLS, INP und TTFB Schwellenwerte und Optimierungsstrategien.
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  Weiterführende Guides                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
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
              href="/wissen/seo-vs-ai-seo"
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
                SEO vs. AI SEO
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Unterschiede zwischen klassischem SEO und KI-Optimierung.
              </p>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <FadeIn>
          <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mb-4">
              Ist deine Website KI-ready?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Finde heraus, ob KI-Crawler deine Website lesen können - oder ob du unbewusst blockierst. Kostenlose technische Kurzanalyse in 48 Stunden.
            </p>
            <Button href="/ai-sichtbarkeit-now" primary text="Kostenlose KI-Analyse anfragen" />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}

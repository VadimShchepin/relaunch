import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Was ist eine llms.txt-Datei?',
    a: 'Eine llms.txt ist eine Textdatei im Root-Verzeichnis deiner Website (also unter domain.de/llms.txt), die KI-Systemen wie ChatGPT, Perplexity und Claude strukturierte Informationen über dein Unternehmen und deine Inhalte liefert. Sie ist das Äquivalent einer robots.txt für KI-Crawler — nur dass sie nicht regelt, was gecrawlt werden darf, sondern aktiv Kontext bereitstellt, der die KI-Sichtbarkeit verbessert.',
  },
  {
    q: 'Ist llms.txt ein offizieller Standard?',
    a: 'Nein, llms.txt ist kein W3C-Standard oder offizielles Protokoll wie robots.txt. Es ist ein Community-getriebenes Format, das sich als Best Practice für KI-Sichtbarkeit etabliert hat. Die Idee stammt aus der LLM-Community und wird von immer mehr Tools und Crawlern unterstützt. Dass es kein offizieller Standard ist, macht es nicht weniger wirksam — es macht es nur einfacher zu implementieren, weil niemand ein Komitee fragen muss.',
  },
  {
    q: 'Wo muss die llms.txt-Datei liegen?',
    a: 'Im Root-Verzeichnis deiner Domain, also erreichbar unter https://deinedomain.de/llms.txt. Genau wie robots.txt oder sitemap.xml. Wenn die Datei in einem Unterordner liegt oder einen anderen Namen hat, wird sie von KI-Crawlern nicht gefunden. Bei statischen Websites legst du sie einfach in den public-Ordner. Bei CMS-Systemen wie WordPress brauchst du eventuell ein Plugin oder einen manuellen Upload.',
  },
  {
    q: 'Brauche ich llms.txt, wenn ich schon robots.txt habe?',
    a: 'Ja. robots.txt und llms.txt haben völlig verschiedene Funktionen. robots.txt regelt den Zugang: Wer darf was crawlen. llms.txt liefert Kontext: Wer bist du, was bietest du an, welche Inhalte sind besonders relevant. Eine robots.txt sagt „du darfst rein". Eine llms.txt sagt „und hier ist, was du wissen solltest". Beides zusammen ergibt erst ein vollständiges Bild für KI-Systeme.',
  },
  {
    q: 'Welche KI-Systeme lesen llms.txt?',
    a: 'Stand 2026 gibt es keine offizielle Liste von KI-Systemen, die llms.txt gezielt auswerten. Aber: Perplexity, ChatGPT (im Browsing-Modus) und andere KI-Crawler indizieren Textdateien im Root-Verzeichnis. Selbst wenn ein System die Datei nicht explizit als llms.txt erkennt, kann es den Inhalt beim Crawlen lesen und verwerten. Die Datei schadet nie und hilft potenziell immer.',
  },
  {
    q: 'Wie lang sollte eine llms.txt sein?',
    a: 'Kompakt, aber vollständig. Die meisten effektiven llms.txt-Dateien haben zwischen 30 und 100 Zeilen. Wichtiger als die Länge ist die Struktur: Klare Überschriften, saubere Markdown-Formatierung, relevante URLs. Eine llms.txt mit 500 Zeilen Marketingtext ist schlechter als eine mit 40 Zeilen präziser Information. KI-Systeme sind nicht beeindruckt von Textmenge — sie brauchen Klarheit.',
  },
  {
    q: 'Kann eine schlechte llms.txt meiner Website schaden?',
    a: 'Eine schlecht geschriebene llms.txt schadet nicht direkt — sie verfehlt nur ihren Zweck. Was theoretisch schaden könnte: falsche oder irreführende Informationen in der Datei. Wenn du dort behauptest, du seist Marktführer in einem Bereich, in dem du es offensichtlich nicht bist, kann das die Glaubwürdigkeit deiner gesamten Domain bei KI-Systemen mindern. Bleib bei den Fakten.',
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
  headline: 'llms.txt erstellen: So machst du deine Website KI-lesbar',
  description:
    'Komplette Anleitung: Was ist llms.txt, wie erstellt man sie, was gehört rein und was nicht. Mit Vorlage, Beispielen und den häufigsten Fehlern.',
  image: 'https://aiseo.hamburg/images/wissen/llms-txt-anleitung.jpg',
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
  mainEntityOfPage: 'https://aiseo.hamburg/wissen/llms-txt-anleitung',
  inLanguage: 'de',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://aiseo.hamburg' },
    { '@type': 'ListItem', position: 2, name: 'Wissen', item: 'https://aiseo.hamburg/wissen' },
    { '@type': 'ListItem', position: 3, name: 'llms.txt Anleitung' },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function LlmsTxtAnleitungPage() {
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
            <li className="text-black font-medium">llms.txt Anleitung</li>
          </ol>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
          llms.txt erstellen: So machst du deine Website KI-lesbar
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Du hast eine robots.txt für Google und denkst, damit ist alles erledigt? Süß. Das ist wie einen Türsteher vor deinen Laden zu stellen und zu hoffen, dass Kunden dadurch telepathisch wissen, was du verkaufst. Hier erfährst du, warum du eine llms.txt brauchst — und wie du sie baust, ohne dich dabei zu blamieren.
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
              <span><strong className="text-black">llms.txt ist eine Textdatei im Root-Verzeichnis</strong> deiner Website, die KI-Systemen Kontext über dein Unternehmen und deine Inhalte liefert.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">2.</span>
              <span><strong className="text-black">robots.txt ≠ llms.txt.</strong> robots.txt regelt Zugang. llms.txt liefert Kontext. Beides zusammen = KI-Sichtbarkeit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">3.</span>
              <span><strong className="text-black">Erstellen dauert 15 Minuten.</strong> Markdown-Format, 30–100 Zeilen, unter domain.de/llms.txt hochladen. Fertig.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">4.</span>
              <span><strong className="text-black">Inhalt: Wer du bist, was du anbietest, welche Seiten wichtig sind.</strong> Keine Romane, keine Marketing-Floskeln, keine Keyword-Stuffing-Orgien.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-accent font-bold mt-0.5">5.</span>
              <span><strong className="text-black">Die häufigsten Fehler:</strong> Zu lang, zu vage, falsche Informationen, im falschen Ordner, seit 2024 nicht aktualisiert.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was ist llms.txt                                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was ist llms.txt — und warum existiert es überhaupt?
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Eine llms.txt ist eine Textdatei im Markdown-Format, die im Root-Verzeichnis deiner Website liegt und KI-Systemen strukturierte Informationen über dein Unternehmen, deine Angebote und deine wichtigsten Inhalte liefert.</strong> Sie ist erreichbar unter domain.de/llms.txt — genau wie robots.txt oder sitemap.xml.
          </p>
          <p>
            Die Idee ist simpel: Wenn ein KI-Crawler deine Website besucht, muss er sich durch hunderte Seiten arbeiten, um zu verstehen, wer du bist und was du machst. Das ist ineffizient. Eine llms.txt gibt der KI sofort den Kontext, den sie braucht — kompakt, strukturiert, maschinenlesbar.
          </p>
          <p>
            Stell dir vor, du gehst in ein Bürogebäude mit 50 Firmen, aber es gibt kein Verzeichnis im Foyer. Du müsstest in jedes Stockwerk, an jede Tür klopfen und fragen: „Was machen Sie hier?" Genau so fühlt sich eine KI, die deine Website ohne llms.txt besucht. Funktioniert irgendwie — aber es ist, gelinde gesagt, suboptimal.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-accent rounded-xl p-6 shadow-sm my-8">
          <p className="text-lg md:text-xl font-semibold text-black leading-snug">
            llms.txt ist keine Zugangssteuerung (das macht robots.txt). Es ist eine Kontexthilfe. Sie sagt der KI: „Hier bin ich, das mache ich, und das sind meine wichtigsten Seiten."
          </p>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Wichtig: llms.txt ist kein offizieller W3C-Standard. Es ist ein Community-getriebenes Format, das sich als Best Practice für <a href="/wissen/ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">KI-Sichtbarkeit</a> etabliert hat. Das bedeutet: Niemand wird dich bestrafen, wenn du keine hast. Aber niemand wird dich belohnen, wenn du auf die KI-Visitenkarte verzichtest, die alle anderen schon haben.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  llms.txt vs robots.txt vs ai.txt                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          llms.txt vs robots.txt vs ai.txt — wer macht was?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Drei Textdateien, drei verschiedene Aufgaben. Die Verwechslung dieser Dateien ist so verbreitet wie die Meinung, dass SEO aus Keywords besteht. Hier die Klarstellung.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-sm font-semibold text-black">Datei</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">Funktion</th>
                <th className="py-3 pr-4 text-sm font-semibold text-black">Zielgruppe</th>
                <th className="py-3 text-sm font-semibold text-black">Analogie</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">robots.txt</td>
                <td className="py-3 pr-4">Zugangssteuerung: Wer darf was crawlen</td>
                <td className="py-3 pr-4">Alle Crawler (Google, KI, etc.)</td>
                <td className="py-3">Der Türsteher</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">llms.txt</td>
                <td className="py-3 pr-4">Kontext: Wer bist du, was bietest du an</td>
                <td className="py-3 pr-4">KI-Crawler und LLMs</td>
                <td className="py-3">Das Firmenverzeichnis im Foyer</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">ai.txt</td>
                <td className="py-3 pr-4">Nutzungsbedingungen: Wie dürfen KI deine Inhalte verwenden</td>
                <td className="py-3 pr-4">KI-Anbieter und Crawler</td>
                <td className="py-3">Die AGB auf dem Schild an der Wand</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-black">sitemap.xml</td>
                <td className="py-3 pr-4">Seitenverzeichnis: Welche URLs gibt es</td>
                <td className="py-3 pr-4">Alle Crawler</td>
                <td className="py-3">Der Gebäudeplan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-10">
          <p>
            <strong className="text-black">Die kurze Version:</strong> robots.txt sagt „du darfst rein". llms.txt sagt „und hier ist, was du wissen solltest". ai.txt sagt „aber bitte halte dich an die Hausregeln". Du brauchst idealerweise alle drei. Mehr zur technischen Einrichtung findest du im Guide zur <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">technischen KI-Sichtbarkeit</a>.
          </p>
          <p>
            Der häufigste Fehler: Leute glauben, robots.txt allein reicht für KI-Sichtbarkeit. Das ist so, als würdest du jemandem die Tür öffnen und dann kein Wort mit ihm reden. Klar, er ist drin. Aber er hat keine Ahnung, was hier passiert. Deine robots.txt sagt GPTBot, ClaudeBot und PerplexityBot: „Du darfst alles crawlen." Deine llms.txt sagt ihnen: „Und hier ist der Kontext, den du beim Crawlen brauchst."
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Schritt-für-Schritt-Anleitung                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          llms.txt erstellen — Schritt für Schritt
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          In 15 Minuten erledigt. Kein Coding nötig, kein Plugin, kein Agentur-Retainer. Nur ein Texteditor und ein bisschen Ehrlichkeit über dein Unternehmen.
        </p>

        <ol className="space-y-8">
          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Schritt 1: Textdatei anlegen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Erstelle eine neue Textdatei mit dem Namen <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">llms.txt</code>. Nicht <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">LLMS.txt</code>, nicht <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">llms.md</code>, nicht <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">llms-info.txt</code>. Exakt <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">llms.txt</code>. Kleinbuchstaben. Keine Kreativität beim Dateinamen — das ist keine Kunst, das ist Technik.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Format: Markdown. UTF-8-Encoding. Wenn du nicht weißt, was UTF-8 ist: Öffne einfach einen normalen Texteditor (VS Code, Notepad++, sogar TextEdit im Nur-Text-Modus) und schreib los. Das Encoding stimmt dann meistens von allein.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Schritt 2: Kopfbereich schreiben
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beginne mit einer Markdown-H1-Überschrift: dem Namen deines Unternehmens. Darunter eine kurze Beschreibung in 2–3 Sätzen: Was tust du, für wen, und wo?
              </p>
              <div className="bg-gray-50 rounded-xl p-5 font-mono text-sm leading-relaxed">
                <p className="text-gray-400 mb-2"># Beispiel:</p>
                <p className="text-black"># Dein Unternehmen</p>
                <p className="text-gray-600 mt-2">&gt; Dein Unternehmen ist ein Anbieter von [Dienstleistung] in [Stadt]. Wir helfen [Zielgruppe] dabei, [Kernversprechen]. Gegründet [Jahr], Standort [Ort].</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                Keine Marketing-Floskeln. Keine „marktführende, innovative, disruptive Lösungen". Fakten. KI-Systeme sind nicht beeindruckt von Adjektiven — sie brauchen Informationen.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Schritt 3: Kernseiten auflisten
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Liste deine wichtigsten Seiten mit Titel und URL auf. Nicht alle 500 Seiten — die 10–20 wichtigsten. Servicepages, Pillar-Guides, Über-uns-Seite. Die KI soll wissen, wo dein bester Content liegt.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 font-mono text-sm leading-relaxed">
                <p className="text-black">## Kernseiten</p>
                <p className="text-gray-600 mt-2">- [Dienstleistung A](https://deinedomain.de/dienstleistung-a): Beschreibung in einem Satz</p>
                <p className="text-gray-600">- [Dienstleistung B](https://deinedomain.de/dienstleistung-b): Beschreibung in einem Satz</p>
                <p className="text-gray-600">- [Blog / Wissen](https://deinedomain.de/wissen): Fachbeiträge zu [Thema]</p>
                <p className="text-gray-600">- [Über uns](https://deinedomain.de/ueber-uns): Team, Expertise, Standort</p>
              </div>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Schritt 4: Themengebiete und Expertise definieren
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sag der KI, worin du Experte bist. Das hilft dem System zu verstehen, für welche Fragen du als Quelle in Frage kommst.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 font-mono text-sm leading-relaxed">
                <p className="text-black">## Expertise</p>
                <p className="text-gray-600 mt-2">- [Fachgebiet 1]: Kurzbeschreibung der Expertise</p>
                <p className="text-gray-600">- [Fachgebiet 2]: Kurzbeschreibung der Expertise</p>
                <p className="text-gray-600">- [Fachgebiet 3]: Kurzbeschreibung der Expertise</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                Sei ehrlich. Wenn du drei Mitarbeiter hast und dich als „führenden Anbieter" bezeichnest, wird eine KI das irgendwann mit dem Rest des Internets abgleichen. Und dann stehst du da wie jemand, der auf Tinder 10 Jahre jünger angegeben hat.
              </p>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Schritt 5: Kontaktdaten und Meta-Infos
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Standort, Kontaktmöglichkeiten, Branche. Alles, was eine KI braucht, um dich korrekt einzuordnen.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 font-mono text-sm leading-relaxed">
                <p className="text-black">## Kontakt & Meta</p>
                <p className="text-gray-600 mt-2">- Standort: [Stadt, Land]</p>
                <p className="text-gray-600">- Branche: [Branchenbezeichnung]</p>
                <p className="text-gray-600">- Sprache: Deutsch</p>
                <p className="text-gray-600">- Letzte Aktualisierung: [Datum]</p>
              </div>
            </div>
          </li>

          <li>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                Schritt 6: Datei hochladen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lade die Datei ins Root-Verzeichnis deiner Website hoch. Bei <strong className="text-black">Next.js / Vercel:</strong> In den <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">public/</code>-Ordner. Bei <strong className="text-black">WordPress:</strong> Per FTP ins Hauptverzeichnis (wo auch wp-config.php liegt) oder per Plugin. Bei <strong className="text-black">Shopify:</strong> Über den Theme-Editor als Snippet oder per App. Teste danach: Rufe <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">https://deinedomain.de/llms.txt</code> im Browser auf. Siehst du den Inhalt? Fertig. Siehst du einen 404? Nochmal von vorne.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/*  Komplettes Beispiel                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Komplettes Beispiel: So sieht eine gute llms.txt aus
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Hier ein vollständiges, realistisches Beispiel. Kopieren, anpassen, hochladen. Kein Grund, das Rad neu zu erfinden.
        </p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <div className="bg-gray-50 rounded-xl p-5 font-mono text-sm leading-relaxed overflow-x-auto">
            <p className="text-black font-bold"># Mustermann Steuerberatung</p>
            <p className="text-gray-600 mt-3">&gt; Mustermann Steuerberatung ist eine Steuerkanzlei in Hamburg, spezialisiert auf Startup-Besteuerung, E-Commerce-Steuerrecht und internationale Steuerplanung. Gegründet 2018, 12 Mitarbeiter, Standort Hamburg-Altona.</p>
            <p className="text-gray-600 mt-1">&gt; Website: https://mustermann-steuer.de</p>
            <p className="text-gray-600 mt-1">&gt; Letzte Aktualisierung: 2026-04-01</p>
            <br />
            <p className="text-black font-bold">## Leistungen</p>
            <p className="text-gray-600 mt-2">- [Startup-Steuerberatung](https://mustermann-steuer.de/startup): Steuerliche Beratung für Gründer, UG/GmbH-Gründung, Investoren-Strukturen</p>
            <p className="text-gray-600">- [E-Commerce-Steuerrecht](https://mustermann-steuer.de/ecommerce): OSS-Verfahren, Amazon FBA Steuer, Umsatzsteuer EU</p>
            <p className="text-gray-600">- [Internationale Steuerplanung](https://mustermann-steuer.de/international): Doppelbesteuerung, Betriebsstätten, Verrechnungspreise</p>
            <br />
            <p className="text-black font-bold">## Fachbeiträge</p>
            <p className="text-gray-600 mt-2">- [GmbH vs UG: Welche Rechtsform für Startups?](https://mustermann-steuer.de/blog/gmbh-vs-ug)</p>
            <p className="text-gray-600">- [E-Commerce Umsatzsteuer Guide 2026](https://mustermann-steuer.de/blog/ecommerce-umsatzsteuer)</p>
            <p className="text-gray-600">- [Startup-Finanzierung und Steuern](https://mustermann-steuer.de/blog/startup-finanzierung-steuern)</p>
            <br />
            <p className="text-black font-bold">## Expertise</p>
            <p className="text-gray-600 mt-2">- Startup-Besteuerung (Schwerpunkt seit 2018)</p>
            <p className="text-gray-600">- E-Commerce-Steuerrecht und OSS-Verfahren</p>
            <p className="text-gray-600">- Internationale Steuerplanung für KMU</p>
            <br />
            <p className="text-black font-bold">## Kontakt</p>
            <p className="text-gray-600 mt-2">- Standort: Hamburg, Deutschland</p>
            <p className="text-gray-600">- Branche: Steuerberatung</p>
            <p className="text-gray-600">- Sprache: Deutsch</p>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
          <p>
            Beachte: 40 Zeilen. Keine Romane, keine Marketing-Lyrik, keine „wir sind die innovativsten Innovatoren". Reine Information. Genau das, was eine KI braucht. Alles andere ist Rauschen.
          </p>
          <p>
            Willst du sehen, wie eine echte llms.txt in Produktion aussieht? Schau dir <a href="https://aiseo.hamburg/llms.txt" className="text-brand-accent underline hover:no-underline" target="_blank" rel="noopener noreferrer">unsere eigene llms.txt</a> an. Wir praktizieren, was wir predigen.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Die häufigsten Fehler                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Die 7 häufigsten llms.txt-Fehler (und warum sie dich KI-Sichtbarkeit kosten)
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">1. Im falschen Ordner abgelegt</h3>
            <p className="text-gray-600 leading-relaxed">
              Die Datei muss unter domain.de/llms.txt erreichbar sein. Nicht unter domain.de/assets/llms.txt, nicht unter domain.de/docs/llms.txt. Im Root. Punkt. Das ist wie eine Klingel, die im Keller hängt. Technisch existiert sie. Praktisch findet sie keiner.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">2. Marketing-Sprech statt Fakten</h3>
            <p className="text-gray-600 leading-relaxed">
              „Wir sind der führende Anbieter innovativer Lösungen für nachhaltiges Wachstum." Super. Und was machst du konkret? KI-Systeme brauchen keine Adjektive. Sie brauchen: Was, für wen, wo, seit wann. Der Versuch, eine KI mit Marketingtext zu beeindrucken, ist wie der Versuch, einen Taschenrechner mit Komplimenten zu überzeugen. Er rechnet einfach weiter.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">3. Keyword-Stuffing</h3>
            <p className="text-gray-600 leading-relaxed">
              „Wir sind die beste Steuerberatung Hamburg Steuerberater Hamburg Steuerkanzlei Hamburg..." Ernsthaft? Das ist nicht 2010. LLMs erkennen Keyword-Stuffing sofort und werten es als Spam-Signal. Natürliche Sprache, relevante Informationen — das ist alles. Der Versuch, ein LLM mit Keyword-Stuffing zu manipulieren, ist wie der Versuch, einen Bären mit einer nassen Nudel zu bekämpfen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">4. Nie aktualisiert</h3>
            <p className="text-gray-600 leading-relaxed">
              Eine llms.txt von 2024 mit „Letzte Aktualisierung: 2024-06-15" signalisiert KI-Systemen: „Diese Firma kümmert sich nicht um ihre Inhalte." Aktualisiere die Datei mindestens quartalsweise. Neues Angebot? Rein damit. Neuer Blogpost? Verlinken. Mitarbeiter gegangen? Rausnehmen. Es kostet 5 Minuten.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">5. Zu lang und unstrukturiert</h3>
            <p className="text-gray-600 leading-relaxed">
              500 Zeilen Fließtext in einer llms.txt? Herzlichen Glückwunsch, du hast eine Kurzgeschichte geschrieben, die keine KI lesen wird. 30–100 Zeilen. Klare Markdown-Überschriften. Bullet Points. Kurze Beschreibungen. Wenn deine llms.txt länger ist als dieser Absatz — kürzen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">6. Falsche oder übertriebene Angaben</h3>
            <p className="text-gray-600 leading-relaxed">
              Wenn du schreibst, du seist „Marktführer in Deutschland" und eine KI das mit anderen Quellen abgleicht, die das nicht bestätigen, leidet deine Glaubwürdigkeit. KI-Systeme cross-referenzieren Informationen. Lügen in der llms.txt sind wie gefälschte Bewertungen — kurzfristig nett, langfristig fatal.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">7. Broken Links auflisten</h3>
            <p className="text-gray-600 leading-relaxed">
              Du verlinkst in deiner llms.txt auf Seiten, die es nicht mehr gibt? Das ist wie eine Speisekarte mit Gerichten, die du nicht kochen kannst. Prüfe alle Links, bevor du die Datei hochlädst. Und prüfe sie nochmal, wenn du sie aktualisierst. Broken Links in einer Datei, die KI-Vertrauen aufbauen soll, sind ein Eigentor.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Für verschiedene Plattformen                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          llms.txt einrichten: So geht es auf deiner Plattform
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Je nach Tech-Stack ist der Upload-Prozess minimal anders. Hier die Kurzanleitung für die gängigsten Plattformen.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Next.js / Vercel</h3>
            <p className="text-gray-600 leading-relaxed">
              Datei in den <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">public/</code>-Ordner legen. Beim nächsten Build wird sie automatisch unter domain.de/llms.txt verfügbar. Kein Config nötig.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">WordPress</h3>
            <p className="text-gray-600 leading-relaxed">
              Per FTP/SFTP ins Hauptverzeichnis hochladen (gleiche Ebene wie wp-config.php). Alternativ: Das Plugin „LLMs.txt Manager" verwenden. Wichtig: Prüfe, ob dein Caching-Plugin die Datei korrekt ausliefert.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Shopify</h3>
            <p className="text-gray-600 leading-relaxed">
              Shopify erlaubt keinen direkten Upload ins Root. Nutze den Theme-Code-Editor: Erstelle ein neues Template, das den Inhalt als Plaintext ausgibt. Oder nutze eine App wie „SEO Manager", die Custom-Root-Dateien unterstützt.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-black mb-3">Statische Websites</h3>
            <p className="text-gray-600 leading-relaxed">
              Einfach die Datei neben deine index.html legen. Beim Deployment (Netlify, GitHub Pages, etc.) wird sie automatisch mit hochgeladen. Die einfachste Variante von allen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Was gehört rein, was nicht                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          Was gehört in die llms.txt — und was auf keinen Fall?
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-brand-accent mb-4">Rein damit</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Firmenname und Kurzbeschreibung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Kernleistungen mit URLs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Wichtigste Fachbeiträge / Guides</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Expertisegebiete</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Standort und Branche</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Aktualisierungsdatum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
                <span>Sprache der Inhalte</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-red-500 mb-4">Bloß nicht</h3>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Marketing-Floskeln und Superlative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Keyword-Stuffing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Vertrauliche Geschäftsdaten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Interne URLs, die hinter Login liegen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Falsche oder übertriebene Angaben</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Alle 500 Seiten deiner Website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                <span>Preisinformationen, die sich ständig ändern</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  llms.txt Checkliste                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          llms.txt Qualitätscheckliste
        </h2>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <ul className="space-y-4 text-gray-600 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Datei liegt unter domain.de/llms.txt und ist öffentlich erreichbar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Markdown-Format mit klaren Überschriften (H1, H2)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Firmenname und Kurzbeschreibung im Kopfbereich</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>10–20 wichtigste Seiten mit funktionierenden URLs verlinkt</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Expertise und Fachgebiete benannt</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Standort und Branche angegeben</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Aktualisierungsdatum vorhanden und aktuell</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Keine Marketing-Floskeln oder Keyword-Stuffing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Unter 100 Zeilen (Ideal: 30–60)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-bold mt-0.5 shrink-0">&#10003;</span>
              <span>Alle Links getestet und funktionierend</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">
              <strong className="text-black">Pro-Tipp:</strong> Setze dir einen Kalender-Reminder für quartalsweise Updates. Eine llms.txt ist ein lebendiges Dokument — nicht ein „erstellen und vergessen"-Artefakt.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Warum robots.txt allein nicht reicht                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
          „Aber ich habe doch robots.txt!" — warum das nicht reicht
        </h2>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Ja. Deine robots.txt sagt GPTBot: „Du darfst alles crawlen." Toll. Und jetzt? Der Bot crawlt deine 200 Seiten, versucht zu verstehen, was du machst, und gibt mittendrin auf, weil dein Blog aus 15 Kategorien besteht, von denen 12 leer sind und 3 den gleichen Inhalt haben.
          </p>
          <p>
            <strong className="text-black">robots.txt ist eine Zugangsregel. llms.txt ist ein Briefing.</strong> Stell dir vor, du engagierst einen neuen Mitarbeiter. robots.txt gibt ihm den Schlüssel zum Büro. llms.txt gibt ihm das Onboarding-Dokument, das erklärt, wer die Firma ist, was sie macht und wo die wichtigen Ordner liegen. Ohne das Onboarding irrt er planlos durch die Flure — technisch hat er Zugang, aber er weiß nicht, was er damit soll.
          </p>
          <p>
            Die Kombination beider Dateien ist entscheidend. Und wenn du die volle technische KI-Sichtbarkeit willst, lies den Guide zur <a href="/wissen/technische-ki-sichtbarkeit" className="text-brand-accent underline hover:no-underline">technischen KI-Sichtbarkeit</a> — dort gehen wir auch auf Schema-Markup, HTTP-Header und Crawl-Budget ein.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
          Häufig gestellte Fragen zu llms.txt
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
            href="/wissen/technische-ki-sichtbarkeit"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Technische KI-Sichtbarkeit
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Der komplette Guide: robots.txt, Schema.org, HTTP-Header und alles, was KI-Crawler technisch brauchen.
            </p>
          </a>

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
            href="/wissen/was-ist-geo"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent transition-colors group"
          >
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-brand-accent transition-colors">
              Was ist GEO?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generative Engine Optimization verständlich erklärt — und warum es 2026 unverzichtbar ist.
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
              Inhalte erstellen, die KI-Systeme als Quelle zitieren wollen — Struktur, Formate und Workflow.
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
            Ist deine Website KI-lesbar?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            llms.txt ist nur der Anfang. Finde heraus, wie KI-Systeme deine Website aktuell sehen — und was du ändern musst, um zitiert zu werden.
          </p>
          <Button href="/ai-sichtbarkeit-now" primary text="Kostenlosen KI-Check anfragen" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

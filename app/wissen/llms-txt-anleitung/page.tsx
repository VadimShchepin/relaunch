import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function LlmsTxtAnleitungPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/llms-txt-anleitung"
      breadcrumbLabel="llms.txt Anleitung"
      eyebrow="Anleitung"
      title="llms.txt erstellen: So machst du deine Website KI-lesbar"
      description="Du hast eine robots.txt für Google und denkst, damit ist alles erledigt? Das ist wie einen Türsteher vor deinen Laden zu stellen und zu hoffen, dass Kunden dadurch telepathisch wissen, was du verkaufst. Hier steht, warum du eine llms.txt brauchst und wie du sie in 15 Minuten baust."
      schemaImage="/og/wissen-llms-txt-anleitung.png"
      publishedAt="2026-04-02"
      modifiedAt="2026-08-24"
      summaryItems={[
        'llms.txt ist eine Textdatei im Root-Verzeichnis deiner Website, die KI-Systemen Kontext über dein Unternehmen und deine Inhalte liefert.',
        'robots.txt ist nicht llms.txt. robots.txt regelt Zugang, llms.txt liefert Kontext. Erst beides zusammen ergibt KI-Sichtbarkeit.',
        'Erstellen dauert 15 Minuten: Markdown-Format, 30 bis 100 Zeilen, unter domain.de/llms.txt hochladen. Fertig.',
        'Inhalt: wer du bist, was du anbietest, welche Seiten wichtig sind. Keine Romane, keine Marketing-Floskeln, kein Keyword-Stuffing.',
        'Die häufigsten Fehler: zu lang, zu vage, falsche Informationen, im falschen Ordner, seit 2024 nicht aktualisiert.',
      ]}
      sections={[
        {
          id: 'was-ist-llms-txt',
          heading: 'Was ist llms.txt, und warum existiert es überhaupt?',
          intro:
            'Eine llms.txt ist eine Textdatei im Markdown-Format, die im Root-Verzeichnis deiner Website liegt und KI-Systemen strukturierte Informationen über dein Unternehmen, deine Angebote und deine wichtigsten Inhalte liefert. Sie ist erreichbar unter domain.de/llms.txt, genau wie robots.txt oder sitemap.xml.',
          stat:
            'llms.txt ist keine Zugangssteuerung, das macht robots.txt. Es ist eine Kontexthilfe: hier bin ich, das mache ich, und das sind meine wichtigsten Seiten.',
          paragraphs: [
            'Die Idee ist simpel: Wenn ein KI-Crawler deine Website besucht, muss er sich durch hunderte Seiten arbeiten, um zu verstehen, wer du bist und was du machst. Das ist ineffizient. Eine llms.txt gibt der KI sofort den Kontext, den sie braucht: kompakt, strukturiert, maschinenlesbar.',
            'Stell dir ein Bürogebäude mit 50 Firmen vor, aber es gibt kein Verzeichnis im Foyer. Du müsstest in jedes Stockwerk, an jede Tür klopfen und nach der Firma fragen. Genau so arbeitet eine KI, die deine Website ohne llms.txt besucht. Funktioniert irgendwie, ist aber suboptimal.',
            <>
              Wichtig: llms.txt ist kein offizieller W3C-Standard, sondern ein Vorschlag aus der
              Community, der sich als Best Practice für{' '}
              <a href="/wissen/ki-sichtbarkeit">KI-Sichtbarkeit</a> etabliert hat. Das bedeutet:
              Niemand bestraft dich, wenn du keine hast. Aber niemand belohnt dich, wenn du auf die
              KI-Visitenkarte verzichtest, die alle anderen schon haben.
            </>,
          ],
        },
        {
          id: 'dateien-im-vergleich',
          heading: 'llms.txt vs robots.txt vs ai.txt: wer macht was?',
          intro:
            'Drei Textdateien, drei verschiedene Aufgaben. Die Verwechslung dieser Dateien ist so verbreitet wie die Meinung, dass SEO aus Keywords besteht. Hier die Klarstellung.',
          paragraphs: [
            <>
              Der häufigste Fehler: Leute glauben, robots.txt allein reiche für KI-Sichtbarkeit. Das
              ist so, als würdest du jemandem die Tür öffnen und dann kein Wort mit ihm reden. Er ist
              drin, aber er hat keine Ahnung, was hier passiert. Deine robots.txt sagt GPTBot,
              ClaudeBot und PerplexityBot, dass sie alles crawlen dürfen. Deine llms.txt sagt ihnen,
              welchen Kontext sie beim Crawlen brauchen. Mehr zur technischen Einrichtung steht im
              Guide zur{' '}
              <a href="/wissen/technische-ki-sichtbarkeit">technischen KI-Sichtbarkeit</a>.
            </>,
          ],
          table: {
            headers: ['Datei', 'Funktion', 'Zielgruppe', 'Analogie'],
            emphasis: 1,
            rows: [
              [
                'robots.txt',
                'Zugangssteuerung: wer darf was crawlen',
                'Alle Crawler (Google, KI, Archive)',
                'Der Türsteher',
              ],
              [
                'llms.txt',
                'Kontext: wer bist du, was bietest du an',
                'KI-Crawler und LLMs',
                'Das Firmenverzeichnis im Foyer',
              ],
              [
                'ai.txt',
                'Nutzungsbedingungen: wie darf KI deine Inhalte verwenden',
                'KI-Anbieter und Crawler',
                'Die Hausordnung an der Wand',
              ],
              [
                'sitemap.xml',
                'Seitenverzeichnis: welche URLs gibt es',
                'Alle Crawler',
                'Der Gebäudeplan',
              ],
            ],
            caption:
              'Vier Dateien, vier Aufgaben. Keine davon ersetzt eine andere, und keine davon kostet mehr als eine halbe Stunde Arbeit.',
          },
          quote:
            'robots.txt sagt: du darfst rein. llms.txt sagt: und hier ist, was du wissen solltest. ai.txt sagt: aber bitte halte dich an die Hausregeln. Du brauchst idealerweise alle drei.',
        },
        {
          id: 'anleitung',
          heading: 'llms.txt erstellen: Schritt für Schritt',
          intro:
            'In 15 Minuten erledigt. Kein Coding, kein Plugin, kein Agentur-Retainer. Nur ein Texteditor und ein bisschen Ehrlichkeit über dein Unternehmen.',
          steps: [
            {
              title: 'Textdatei anlegen',
              text:
                'Erstelle eine neue Textdatei mit dem Namen llms.txt. Nicht LLMS.txt, nicht llms.md, nicht llms-info.txt. Exakt llms.txt, in Kleinbuchstaben. Keine Kreativität beim Dateinamen, das ist keine Kunst, das ist Technik.',
              outro:
                'Format: Markdown, Encoding UTF-8. Wenn du nicht weißt, was UTF-8 ist: Öffne einen normalen Texteditor (VS Code, Notepad++, TextEdit im Nur-Text-Modus) und schreib los. Das Encoding stimmt dann meistens von allein.',
            },
            {
              title: 'Kopfbereich schreiben',
              text:
                'Beginne mit einer Markdown-H1: dem Namen deines Unternehmens. Darunter eine kurze Beschreibung in zwei bis drei Sätzen: Was tust du, für wen, und wo?',
              code: {
                label: 'Kopfbereich',
                lines: [
                  '# Dein Unternehmen',
                  '',
                  '> Dein Unternehmen ist ein Anbieter von [Dienstleistung] in [Stadt].',
                  '> Wir helfen [Zielgruppe] dabei, [Kernversprechen].',
                  '> Gegründet [Jahr], Standort [Ort].',
                ],
              },
              outro:
                'Keine Marketing-Floskeln, keine marktführenden, innovativen, disruptiven Lösungen. Fakten. KI-Systeme sind nicht beeindruckt von Adjektiven, sie brauchen Informationen.',
            },
            {
              title: 'Kernseiten auflisten',
              text:
                'Liste deine wichtigsten Seiten mit Titel und URL auf. Nicht alle 500 Seiten, sondern die 10 bis 20 wichtigsten: Servicepages, Pillar-Guides, Über-uns-Seite. Die KI soll wissen, wo dein bester Content liegt.',
              code: {
                label: 'Kernseiten',
                lines: [
                  '## Kernseiten',
                  '',
                  '- [Dienstleistung A](https://deinedomain.de/dienstleistung-a): Beschreibung in einem Satz',
                  '- [Dienstleistung B](https://deinedomain.de/dienstleistung-b): Beschreibung in einem Satz',
                  '- [Blog / Wissen](https://deinedomain.de/wissen): Fachbeiträge zu [Thema]',
                  '- [Über uns](https://deinedomain.de/ueber-uns): Team, Expertise, Standort',
                ],
              },
            },
            {
              title: 'Themengebiete und Expertise definieren',
              text:
                'Sag der KI, worin du Experte bist. Das hilft dem System zu verstehen, für welche Fragen du als Quelle in Frage kommst.',
              code: {
                label: 'Expertise',
                lines: [
                  '## Expertise',
                  '',
                  '- [Fachgebiet 1]: Kurzbeschreibung der Expertise',
                  '- [Fachgebiet 2]: Kurzbeschreibung der Expertise',
                  '- [Fachgebiet 3]: Kurzbeschreibung der Expertise',
                ],
              },
              outro:
                'Sei ehrlich. Wenn du drei Mitarbeiter hast und dich als führenden Anbieter bezeichnest, gleicht eine KI das irgendwann mit dem Rest des Internets ab. Dann stehst du da wie jemand, der sich online zehn Jahre jünger gemacht hat.',
            },
            {
              title: 'Kontaktdaten und Meta-Infos',
              text:
                'Standort, Kontaktmöglichkeiten, Branche. Alles, was eine KI braucht, um dich korrekt einzuordnen.',
              code: {
                label: 'Kontakt und Meta',
                lines: [
                  '## Kontakt & Meta',
                  '',
                  '- Standort: [Stadt, Land]',
                  '- Branche: [Branchenbezeichnung]',
                  '- Sprache: Deutsch',
                  '- Letzte Aktualisierung: [Datum]',
                ],
              },
            },
            {
              title: 'Datei hochladen',
              text:
                'Lade die Datei ins Root-Verzeichnis deiner Website. Bei Next.js und Vercel in den Ordner public. Bei WordPress per FTP ins Hauptverzeichnis, dort wo auch wp-config.php liegt, oder per Plugin. Bei Shopify über den Theme-Editor als Snippet oder per App.',
              outro:
                'Teste danach: Rufe https://deinedomain.de/llms.txt im Browser auf. Siehst du den Inhalt, ist die Sache erledigt. Siehst du einen 404, dann nochmal von vorn.',
            },
          ],
        },
        {
          id: 'beispiel',
          heading: 'Komplettes Beispiel: So sieht eine gute llms.txt aus',
          intro:
            'Hier ein vollständiges, realistisches Beispiel für eine Steuerkanzlei. Kopieren, anpassen, hochladen. Kein Grund, das Rad neu zu erfinden.',
          paragraphs: [
            'Achte auf die Länge: 40 Zeilen. Keine Romane, keine Marketing-Lyrik, keine innovativsten Innovatoren. Reine Information, genau das, was eine KI braucht. Alles andere ist Rauschen.',
            <>
              Und wenn du sehen willst, wie eine llms.txt in Produktion aussieht:{' '}
              <a href="https://aiseo.hamburg/llms.txt" target="_blank" rel="noopener noreferrer">
                unsere eigene llms.txt
              </a>{' '}
              liegt offen. Wir praktizieren, was wir predigen.
            </>,
          ],
          code: {
            label: 'Vorlage: llms.txt einer Steuerkanzlei',
            lines: [
              '# Mustermann Steuerberatung',
              '',
              '> Mustermann Steuerberatung ist eine Steuerkanzlei in Hamburg, spezialisiert auf',
              '> Startup-Besteuerung, E-Commerce-Steuerrecht und internationale Steuerplanung.',
              '> Gegründet 2018, 12 Mitarbeiter, Standort Hamburg-Altona.',
              '> Website: https://mustermann-steuer.de',
              '> Letzte Aktualisierung: 2026-04-01',
              '',
              '## Leistungen',
              '',
              '- [Startup-Steuerberatung](https://mustermann-steuer.de/startup): Steuerliche Beratung für Gründer, UG/GmbH-Gründung, Investoren-Strukturen',
              '- [E-Commerce-Steuerrecht](https://mustermann-steuer.de/ecommerce): OSS-Verfahren, Amazon FBA Steuer, Umsatzsteuer EU',
              '- [Internationale Steuerplanung](https://mustermann-steuer.de/international): Doppelbesteuerung, Betriebsstätten, Verrechnungspreise',
              '',
              '## Fachbeiträge',
              '',
              '- [GmbH vs UG: Welche Rechtsform für Startups?](https://mustermann-steuer.de/blog/gmbh-vs-ug)',
              '- [E-Commerce Umsatzsteuer Guide 2026](https://mustermann-steuer.de/blog/ecommerce-umsatzsteuer)',
              '- [Startup-Finanzierung und Steuern](https://mustermann-steuer.de/blog/startup-finanzierung-steuern)',
              '',
              '## Expertise',
              '',
              '- Startup-Besteuerung (Schwerpunkt seit 2018)',
              '- E-Commerce-Steuerrecht und OSS-Verfahren',
              '- Internationale Steuerplanung für KMU',
              '',
              '## Kontakt',
              '',
              '- Standort: Hamburg, Deutschland',
              '- Branche: Steuerberatung',
              '- Sprache: Deutsch',
            ],
          },
        },
        {
          id: 'fehler',
          heading: 'Die 7 häufigsten llms.txt-Fehler (und warum sie dich KI-Sichtbarkeit kosten)',
          intro:
            'Diese sieben Fehler sehen wir in Audits am häufigsten. Fünf davon sind in fünf Minuten behoben.',
          steps: [
            {
              title: 'Im falschen Ordner abgelegt',
              text:
                'Die Datei muss unter domain.de/llms.txt erreichbar sein. Nicht unter domain.de/assets/llms.txt, nicht unter domain.de/docs/llms.txt. Im Root, Punkt. Sonst ist sie wie eine Klingel, die im Keller hängt: technisch vorhanden, praktisch unauffindbar.',
            },
            {
              title: 'Marketing-Sprech statt Fakten',
              text:
                'Der führende Anbieter innovativer Lösungen für nachhaltiges Wachstum. Und was machst du konkret? KI-Systeme brauchen keine Adjektive, sie brauchen: was, für wen, wo, seit wann. Eine KI mit Marketingtext zu beeindrucken funktioniert so gut wie einen Taschenrechner mit Komplimenten zu überzeugen.',
            },
            {
              title: 'Keyword-Stuffing',
              text:
                'Beste Steuerberatung Hamburg Steuerberater Hamburg Steuerkanzlei Hamburg. Das ist nicht 2010. LLMs erkennen Keyword-Stuffing sofort und werten es als Spam-Signal. Natürliche Sprache und relevante Informationen sind alles, was zählt.',
            },
            {
              title: 'Nie aktualisiert',
              text:
                'Eine llms.txt mit dem Vermerk "Letzte Aktualisierung: 2024-06-15" signalisiert: Diese Firma kümmert sich nicht um ihre Inhalte. Aktualisiere die Datei mindestens quartalsweise. Neues Angebot rein, neuer Fachbeitrag verlinkt, ausgeschiedene Mitarbeiter raus. Kostet fünf Minuten.',
            },
            {
              title: 'Zu lang und unstrukturiert',
              text:
                '500 Zeilen Fließtext in einer llms.txt sind eine Kurzgeschichte, die keine KI liest. 30 bis 100 Zeilen, klare Markdown-Überschriften, Bullet Points, kurze Beschreibungen. Wenn deine llms.txt länger ist als dieser Abschnitt: kürzen.',
            },
            {
              title: 'Falsche oder übertriebene Angaben',
              text:
                'Wenn du Marktführer in Deutschland behauptest und eine KI das mit Quellen abgleicht, die das nicht bestätigen, leidet deine Glaubwürdigkeit. KI-Systeme cross-referenzieren Informationen. Übertreibungen in der llms.txt wirken wie gefälschte Bewertungen: kurzfristig nett, langfristig fatal.',
            },
            {
              title: 'Broken Links auflisten',
              text:
                'Du verlinkst Seiten, die es nicht mehr gibt? Das ist eine Speisekarte mit Gerichten, die du nicht kochen kannst. Prüfe alle Links vor dem Upload, und prüfe sie erneut bei jeder Aktualisierung. Tote Links in einer Datei, die Vertrauen aufbauen soll, sind ein Eigentor.',
            },
          ],
        },
        {
          id: 'plattformen',
          heading: 'llms.txt einrichten: So geht es auf deiner Plattform',
          intro:
            'Je nach Tech-Stack ist der Upload minimal anders. Hier die Kurzanleitung für die gängigsten Plattformen.',
          cards: [
            {
              title: 'Next.js / Vercel',
              text:
                'Datei in den Ordner public legen. Beim nächsten Build ist sie automatisch unter domain.de/llms.txt verfügbar. Keine Konfiguration nötig.',
            },
            {
              title: 'WordPress',
              text:
                'Per FTP oder SFTP ins Hauptverzeichnis hochladen, gleiche Ebene wie wp-config.php. Alternativ ein llms.txt-Plugin. Wichtig: prüfen, ob das Caching-Plugin die Datei korrekt ausliefert.',
            },
            {
              title: 'Shopify',
              text:
                'Shopify erlaubt keinen direkten Upload ins Root. Nutze den Theme-Code-Editor und ein Template, das den Inhalt als Plaintext ausgibt, oder eine App, die Custom-Root-Dateien unterstützt.',
            },
            {
              title: 'Statische Websites',
              text:
                'Die Datei neben die index.html legen. Beim Deployment (Netlify, GitHub Pages, Cloudflare Pages) wird sie automatisch mit hochgeladen. Die einfachste Variante von allen.',
            },
          ],
        },
        {
          id: 'rein-und-raus',
          heading: 'Was gehört in die llms.txt, und was auf keinen Fall?',
          intro:
            'Zwei Listen, die die meisten Diskussionen beenden. Links das, was die Datei tragen soll, rechts das, was sie ruiniert.',
          steps: [
            {
              title: 'Rein damit',
              text:
                'Diese sieben Angaben braucht ein KI-System, um dich korrekt einzuordnen. Mehr ist nicht nötig.',
              bullets: [
                'Firmenname und Kurzbeschreibung',
                'Kernleistungen mit URLs',
                'Wichtigste Fachbeiträge und Guides',
                'Expertisegebiete',
                'Standort und Branche',
                'Aktualisierungsdatum',
                'Sprache der Inhalte',
              ],
            },
            {
              title: 'Bloß nicht',
              text:
                'Diese sieben Dinge kosten dich Vertrauen, statt es aufzubauen. Jedes davon haben wir in echten Dateien gesehen.',
              bullets: [
                'Marketing-Floskeln und Superlative',
                'Keyword-Stuffing',
                'Vertrauliche Geschäftsdaten',
                'Interne URLs, die hinter einem Login liegen',
                'Falsche oder übertriebene Angaben',
                'Alle 500 Seiten deiner Website',
                'Preisinformationen, die sich ständig ändern',
              ],
            },
          ],
        },
        {
          id: 'checkliste',
          heading: 'llms.txt Qualitätscheckliste',
          intro:
            'Zehn Punkte. Wenn alle zehn stimmen, ist die Datei fertig und du kannst sie ein Quartal vergessen.',
          bullets: [
            'Datei liegt unter domain.de/llms.txt und ist öffentlich erreichbar',
            'Markdown-Format mit klaren Überschriften (H1, H2)',
            'Firmenname und Kurzbeschreibung im Kopfbereich',
            '10 bis 20 wichtigste Seiten mit funktionierenden URLs verlinkt',
            'Expertise und Fachgebiete benannt',
            'Standort und Branche angegeben',
            'Aktualisierungsdatum vorhanden und aktuell',
            'Keine Marketing-Floskeln, kein Keyword-Stuffing',
            'Unter 100 Zeilen, ideal sind 30 bis 60',
            'Alle Links getestet und funktionierend',
          ],
          note:
            'Pro-Tipp: Setze dir einen Kalender-Reminder für quartalsweise Updates. Eine llms.txt ist ein lebendiges Dokument, kein Artefakt zum Erstellen und Vergessen.',
        },
        {
          id: 'robots-reicht-nicht',
          heading: 'Aber ich habe doch robots.txt!',
          intro:
            'Der häufigste Einwand, und er greift zu kurz. Zugang ist nicht Kontext.',
          paragraphs: [
            'Deine robots.txt sagt GPTBot: du darfst alles crawlen. Und jetzt? Der Bot crawlt deine 200 Seiten, versucht zu verstehen, was du machst, und gibt mittendrin auf, weil dein Blog aus 15 Kategorien besteht, von denen 12 leer sind und 3 den gleichen Inhalt haben.',
            'robots.txt ist eine Zugangsregel, llms.txt ist ein Briefing. Stell dir eine neue Mitarbeiterin vor: robots.txt gibt ihr den Schlüssel zum Büro, llms.txt gibt ihr das Onboarding-Dokument, das erklärt, wer die Firma ist, was sie macht und wo die wichtigen Ordner liegen. Ohne Onboarding irrt sie durch die Flure. Technisch hat sie Zugang, aber sie weiß nicht, was sie damit soll.',
            <>
              Die Kombination beider Dateien ist entscheidend. Wenn du die volle technische Basis
              willst, lies den Guide zur{' '}
              <a href="/wissen/technische-ki-sichtbarkeit">technischen KI-Sichtbarkeit</a>. Dort
              gehen wir auch auf Schema-Markup, HTTP-Header und Crawl-Budget ein.
            </>,
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen zu llms.txt"
      faqs={[
        {
          q: 'Was ist eine llms.txt-Datei?',
          a: 'Eine llms.txt ist eine Textdatei im Root-Verzeichnis deiner Website (also unter domain.de/llms.txt), die KI-Systemen wie ChatGPT, Perplexity und Claude strukturierte Informationen über dein Unternehmen und deine Inhalte liefert. Sie ist das Äquivalent einer robots.txt für KI-Crawler, nur dass sie nicht regelt, was gecrawlt werden darf, sondern aktiv Kontext bereitstellt, der die KI-Sichtbarkeit verbessert.',
        },
        {
          q: 'Ist llms.txt ein offizieller Standard?',
          a: 'Nein, llms.txt ist kein W3C-Standard oder offizielles Protokoll wie robots.txt. Es ist ein Community-getriebenes Format, das 2024 von Jeremy Howard vorgeschlagen wurde und sich seither als Best Practice für KI-Sichtbarkeit verbreitet hat. Die Idee stammt aus der LLM-Community und wird von immer mehr Tools unterstützt. Dass es kein offizieller Standard ist, macht es nicht weniger nützlich. Es macht es nur einfacher zu implementieren, weil niemand ein Komitee fragen muss.',
        },
        {
          q: 'Wo muss die llms.txt-Datei liegen?',
          a: 'Im Root-Verzeichnis deiner Domain, also erreichbar unter https://deinedomain.de/llms.txt. Genau wie robots.txt oder sitemap.xml. Wenn die Datei in einem Unterordner liegt oder einen anderen Namen hat, wird sie von KI-Crawlern nicht gefunden. Bei statischen Websites legst du sie einfach in den public-Ordner. Bei CMS-Systemen wie WordPress brauchst du eventuell ein Plugin oder einen manuellen Upload.',
        },
        {
          q: 'Brauche ich llms.txt, wenn ich schon robots.txt habe?',
          a: 'Ja. robots.txt und llms.txt haben völlig verschiedene Funktionen. robots.txt regelt den Zugang: Wer darf was crawlen. llms.txt liefert Kontext: Wer bist du, was bietest du an, welche Inhalte sind besonders relevant. Eine robots.txt sagt, dass der Crawler hereindarf. Eine llms.txt sagt, was er wissen sollte. Beides zusammen ergibt erst ein vollständiges Bild für KI-Systeme.',
        },
        {
          q: 'Welche KI-Systeme lesen llms.txt?',
          a: 'Stand August 2026 gibt es keine offizielle Liste von KI-Systemen, die llms.txt gezielt auswerten, und Google sagt für seine eigenen KI-Funktionen ausdrücklich, dass keine speziellen Dateien nötig sind. Aber: Perplexity, ChatGPT im Browsing-Modus und andere KI-Crawler indexieren Textdateien im Root-Verzeichnis. Selbst wenn ein System die Datei nicht explizit als llms.txt erkennt, kann es den Inhalt beim Crawlen lesen und verwerten. Die Datei schadet nie und hilft potenziell.',
        },
        {
          q: 'Wie lang sollte eine llms.txt sein?',
          a: 'Kompakt, aber vollständig. Die meisten wirksamen llms.txt-Dateien haben zwischen 30 und 100 Zeilen. Wichtiger als die Länge ist die Struktur: klare Überschriften, saubere Markdown-Formatierung, relevante URLs. Eine llms.txt mit 500 Zeilen Marketingtext ist schlechter als eine mit 40 Zeilen präziser Information. KI-Systeme sind nicht beeindruckt von Textmenge, sie brauchen Klarheit.',
        },
        {
          q: 'Kann eine schlechte llms.txt meiner Website schaden?',
          a: 'Eine schlecht geschriebene llms.txt schadet nicht direkt, sie verfehlt nur ihren Zweck. Was theoretisch schaden kann: falsche oder irreführende Informationen in der Datei. Wenn du dort behauptest, Marktführer in einem Bereich zu sein, in dem du es offensichtlich nicht bist, kann das die Glaubwürdigkeit deiner gesamten Domain bei KI-Systemen mindern. Bleib bei den Fakten.',
        },
      ]}
      sources={[
        {
          label: 'llmstxt.org',
          text:
            'Der ursprüngliche Vorschlag für das Format, veröffentlicht 2024 von Jeremy Howard. Definiert Aufbau, Ablageort und die Markdown-Konvention, auf der diese Anleitung aufsetzt.',
          href: 'https://llmstxt.org/',
        },
        {
          label: 'Google Search Central, AI features',
          text:
            'Googles Position zu den eigenen KI-Funktionen: dieselben SEO-Grundlagen wie in der klassischen Suche, keine speziellen Dateien, kein Content-Chunking, kein Spezial-Schema. Für Google ist llms.txt also kein Rankingfaktor, für die übrigen KI-Crawler gibt es keine vergleichbare Aussage.',
          href: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
        {
          label: 'aiseo.hamburg/llms.txt',
          text:
            'Unsere eigene Datei in Produktion, als lebendes Beispiel für Aufbau und Länge. Wird quartalsweise aktualisiert.',
          href: 'https://aiseo.hamburg/llms.txt',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'Technische KI-Sichtbarkeit',
          description:
            'Der komplette Guide: robots.txt, Schema.org, HTTP-Header und alles, was KI-Crawler technisch brauchen.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'KI-Sichtbarkeit',
          description:
            'Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und wie du sie systematisch aufbaust.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'Was ist GEO?',
          description:
            'Generative Engine Optimization verständlich erklärt, und warum es 2026 unverzichtbar ist.',
          href: '/wissen/was-ist-geo',
          tag: 'GEO',
        },
        {
          title: 'AI Content Strategie',
          description:
            'Inhalte erstellen, die KI-Systeme als Quelle zitieren wollen: Struktur, Formate und Workflow.',
          href: '/wissen/ai-content-strategie',
          tag: 'Content',
        },
      ]}
      ctaTitle="Ist deine Website KI-lesbar?"
      ctaText="llms.txt ist nur der Anfang. Finde heraus, wie KI-Systeme deine Website aktuell sehen, und was du ändern musst, um zitiert zu werden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlosen KI-Check anfragen"
    />
  );
}

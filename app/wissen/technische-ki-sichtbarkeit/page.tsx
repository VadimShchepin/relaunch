import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

/* ------------------------------------------------------------------ */
/*  Verbatim blocks. Indentation is content here, so they stay lines.  */
/* ------------------------------------------------------------------ */

const ROBOTS_TXT = [
  '# Alle KI-Crawler explizit erlauben.',
  '# Mehrere User-agent-Zeilen vor einem Regelblock sind erlaubt',
  '# und halten die Regeln für alle Bots identisch.',
  'User-agent: GPTBot',
  'User-agent: OAI-SearchBot',
  'User-agent: PerplexityBot',
  'User-agent: ClaudeBot',
  'User-agent: Googlebot',
  'User-agent: Bingbot',
  'Allow: /',
  'Disallow: /intern/',
  'Disallow: /api/',
  '',
  '# Standard-Crawler',
  'User-agent: *',
  'Allow: /',
  'Disallow: /intern/',
  'Disallow: /api/',
  '',
  'Sitemap: https://example.com/sitemap.xml',
];

const LLMS_TXT = [
  '# llms.txt - [Firmenname]',
  '',
  '## Unternehmen',
  '[Firmenname] ist ein [Branche]-Unternehmen in [Stadt].',
  'Wir bieten [Kernleistungen].',
  '',
  '## Leistungen',
  '- [Leistung 1]: [Kurzbeschreibung]',
  '- [Leistung 2]: [Kurzbeschreibung]',
  '',
  '## Zielgruppe',
  '[Wer sind eure Kunden? Branche, Größe, Region]',
  '',
  '## Kontakt',
  '- Website: https://example.com',
  '- E-Mail: kontakt@example.com',
  '- Standort: [Stadt, Region]',
  '',
  '## Wichtige Seiten',
  '- /leistungen - Übersicht aller Leistungen',
  '- /ueber-uns - Über das Unternehmen',
  '- /blog - Fachartikel und Insights',
  '- /kontakt - Kontaktformular',
];

const JSONLD_HEAD = [
  '<script type="application/ld+json">',
  '{',
  '  "@context": "https://schema.org",',
  '  "@type": "LocalBusiness",',
  '  "name": "Firmenname",',
  '  "description": "Kurzbeschreibung der Leistungen",',
  '  "url": "https://example.com",',
  '  "telephone": "+49-40-1234567",',
  '  "address": {',
  '    "@type": "PostalAddress",',
  '    "streetAddress": "Musterstraße 1",',
  '    "addressLocality": "Hamburg",',
  '    "postalCode": "20095",',
  '    "addressCountry": "DE"',
  '  },',
  '  "areaServed": "Hamburg",',
  '  "sameAs": [',
  '    "https://linkedin.com/company/firmenname",',
  '    "https://instagram.com/firmenname"',
  '  ]',
  '}',
  '</script>',
  '',
  '<script type="application/ld+json">',
  '{',
  '  "@context": "https://schema.org",',
  '  "@type": "FAQPage",',
  '  "mainEntity": [',
  '    {',
  '      "@type": "Question",',
  '      "name": "Was kostet Leistung X?",',
  '      "acceptedAnswer": {',
  '        "@type": "Answer",',
  '        "text": "Leistung X kostet ab 500 Euro..."',
  '      }',
  '    }',
  '  ]',
  '}',
  '</script>',
];

const SEMANTIC_HTML = [
  '<!-- FALSCH: Div-Suppe -->',
  '<div class="section">',
  '  <div class="title">Unsere Leistungen</div>',
  '  <div class="text">Wir bieten X, Y und Z an.</div>',
  '</div>',
  '',
  '<!-- RICHTIG: Semantisches HTML -->',
  '<article>',
  '  <h2>Unsere Leistungen</h2>',
  '  <p>Wir bieten X, Y und Z an. [Antwort zuerst]</p>',
  '  <ul>',
  '    <li>Leistung X: Beschreibung</li>',
  '    <li>Leistung Y: Beschreibung</li>',
  '    <li>Leistung Z: Beschreibung</li>',
  '  </ul>',
  '</article>',
];

export default function TechnischeKISichtbarkeitPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/technische-ki-sichtbarkeit"
      breadcrumbLabel="Technische KI-Sichtbarkeit"
      eyebrow="Technik"
      title="Technische KI-Sichtbarkeit: Warum KI-Crawler deine Website nicht verstehen"
      description="Deine IT hat GPTBot blockiert und du wunderst dich, warum ChatGPT dich nicht kennt. Hier sind die technischen Grundlagen, die darüber entscheiden, ob KI deine Website lesen, verstehen und zitieren kann."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      image={{
        src: '/images/wissen/technische-ki-sichtbarkeit/hero-technical-ai-crawlers.webp',
        alt: 'Technisches Dashboard mit KI-Crawler-Pfaden, Server-Logs, robots.txt, llms.txt und Schema-Markup für maschinenlesbare Websites',
        caption:
          'Crawlbarkeit, semantisches HTML, Schema und serverseitig gerenderte Inhalte entscheiden, ob KI-Systeme deine Website überhaupt verstehen.',
        width: 1672,
        height: 941,
      }}
      summaryItems={[
        'KI-Crawler werden meist nicht bewusst ausgesperrt, sondern per Standardeinstellung: Cloudflare blockiert sie bei neuen Domains seit dem 1. Juli 2025 von sich aus. Prüfe deine robots.txt sofort.',
        'llms.txt ist der neue Standard, um LLMs eine maschinenlesbare Zusammenfassung deiner Website zu liefern.',
        'Schema.org und semantisches HTML geben KI den Kontext, den sie braucht, um dich korrekt einzuordnen und zu zitieren.',
        'JavaScript-SPAs sind für KI-Crawler unsichtbar. SSR oder SSG ist Pflicht.',
        'Reihenfolge der Prüfung: robots.txt, dann WAF und CDN, dann Rendering, dann Markup. Fehler in Schicht eins machen alles Weitere wertlos.',
      ]}
      sections={[
        {
          id: 'problem',
          heading: 'Das Problem: Deine Website spricht kein KI',
          intro:
            'KI-Crawler lesen Websites fundamental anders als der Googlebot. Sie führen kein JavaScript aus, sie rendern keine CSS-Layouts, sie sehen keine Bilder. Was sie sehen: rohes HTML, strukturierte Daten und Textinhalt. Stimmt das nicht, existierst du für sie nicht.',
          stat: 'Seit dem 1. Juli 2025 blockiert Cloudflare KI-Crawler bei neuen Domains standardmäßig. Wer nie eine Entscheidung getroffen hat, hat sie damit ausgesperrt.',
          paragraphs: [
            'Dein CMS rendert JavaScript. Die meisten KI-Crawler können kein JavaScript. Das ist der ganze Konflikt in zwei Sätzen.',
            'Aus berechtigter Angst vor Datenklau haben viele Unternehmen 2024 alle KI-Crawler ausgesperrt. Jetzt stellen sie fest, dass sie sich aus dem Zukunftsmarkt zensiert haben.',
            <>
              Viele Security-Plugins und WAFs blockieren GPTBot, PerplexityBot und ClaudeBot pauschal,
              oft schon in der Standardkonfiguration. Dein IT-Team hat vermutlich keine böse Absicht,
              aber das Ergebnis ist dasselbe: deine Website ist für KI unsichtbar. Was{' '}
              <a href="/wissen/ki-sichtbarkeit">KI-Sichtbarkeit</a> inhaltlich bedeutet, steht im
              Grundlagen-Guide. Diese Seite behandelt nur die Technik darunter.
            </>,
            'Die Reihenfolge der Diagnose ist immer dieselbe: Kommt der Bot überhaupt an, im Server-Log nachsehen. Bekommt er HTML mit Text, in den Quelltext schauen statt in den Inspector. Versteht er die Entität, Schema prüfen. Findet er eine abgrenzbare Passage, Struktur prüfen. Wer bei Schritt vier anfängt, obwohl Schritt eins fehlschlägt, optimiert für ein System, das die Seite nie gesehen hat.',
          ],
          table: {
            headers: [
              'Die vier häufigsten technischen Fehler',
              'Ursache',
              'Folge für den KI-Crawler',
            ],
            rows: [
              [
                'robots.txt blockiert KI-Bots',
                'Security-Plugins setzen pauschal Disallow für alle unbekannten User-Agents.',
                'Der Abruf findet nie statt. Keine Daten, keine Zitate.',
              ],
              [
                'JavaScript-Only-Rendering',
                'SPAs ohne SSR liefern KI-Crawlern eine leere HTML-Hülle.',
                'Abruf erfolgreich, Inhalt leer. Der Crawler sieht ein Grundgerüst.',
              ],
              [
                'Fehlende strukturierte Daten',
                'Ohne Schema.org kann KI dein Unternehmen nicht als Entität einordnen.',
                'Text ohne Einordnung. Name, Ort und Leistung bleiben Vermutung.',
              ],
              [
                'Keine semantische HTML-Struktur',
                'Div-Suppe statt sauberer Heading-Hierarchie macht Inhalte unextrahierbar.',
                'Keine abgrenzbare Passage, die zitiert werden könnte.',
              ],
            ],
            caption:
              'Vier Fehler an vier verschiedenen Stellen der Kette. Der erste verhindert den Abruf, die anderen drei verhindern das Verstehen.',
          },
        },
        {
          id: 'crawler',
          heading: 'KI-Crawler: Wer ist wer?',
          intro:
            'Sechs Crawler entscheiden über deine KI-Sichtbarkeit. Blockierst du einen, bist du auf der jeweiligen Plattform unsichtbar.',
          paragraphs: [
            'User-Agents lassen sich fälschen, und ein Teil der angeblichen KI-Zugriffe im Log kommt von Scrapern, die sich als GPTBot ausgeben. Die Betreiber veröffentlichen deshalb ihre IP-Bereiche, und ein Reverse-DNS-Check auf die abrufende IP trennt echte Crawler von Nachahmern. Das gehört gemacht, bevor du aus Log-Zahlen ableitest, wie oft KI-Systeme dich wirklich lesen.',
          ],
          table: {
            headers: ['Crawler', 'Zweck', 'Betreiber', 'User-Agent', 'robots.txt-Direktive'],
            rows: [
              [
                'GPTBot',
                'Trainingsdaten für GPT-Modelle',
                'OpenAI',
                'GPTBot/1.0',
                'User-agent: GPTBot',
              ],
              [
                'OAI-SearchBot',
                'Live-Suche in ChatGPT (SearchGPT)',
                'OpenAI',
                'OAI-SearchBot/1.0',
                'User-agent: OAI-SearchBot',
              ],
              [
                'PerplexityBot',
                'Echtzeit-Index für Perplexity-Antworten',
                'Perplexity',
                'PerplexityBot',
                'User-agent: PerplexityBot',
              ],
              [
                'ClaudeBot',
                'Trainingsdaten und Web-Suche für Claude',
                'Anthropic',
                'ClaudeBot/1.0',
                'User-agent: ClaudeBot',
              ],
              [
                'Googlebot',
                'Indexierung und AI Overviews',
                'Google',
                'Googlebot/2.1',
                'User-agent: Googlebot',
              ],
              [
                'Bingbot',
                'Indexierung, speist ChatGPT und Perplexity',
                'Microsoft',
                'bingbot/2.0',
                'User-agent: Bingbot',
              ],
            ],
            caption:
              'Die Direktive gehört in die robots.txt. Der User-Agent ist der String, nach dem du im Server-Log suchst, wenn du prüfen willst, ob der Crawler wirklich vorbeikommt.',
            note: 'Google-Extended und Applebot-Extended sind keine Crawler, sondern reine Trainings-Opt-outs. Sie rufen keine Seite ab. Wer sie sperrt, bleibt in Google AI Overviews und in Apple Intelligence sichtbar, verbietet aber die Nutzung der Inhalte als Trainingsdaten. Das ist eine Lizenzentscheidung, keine Sichtbarkeitsentscheidung.',
          },
          quote:
            'Bingbot ist der stille Multiplikator: Er speist sowohl ChatGPT als auch Perplexity mit Daten. Blockierst du Bingbot, verlierst du gleich zwei Plattformen.',
        },
        {
          id: 'robots-txt',
          heading: 'robots.txt für KI-Sichtbarkeit',
          intro:
            'Die robots.txt ist die erste Tür, die KI-Crawler öffnen. Ist sie zu, gehen sie weiter. Keine zweite Chance.',
          paragraphs: [
            'Viele Unternehmen haben nach dem KI-Hype 2024 pauschal alle KI-Bots blockiert. Das war nachvollziehbar, aber strategisch ein Fehler. Du kannst selektiv erlauben, was du öffentlich machen willst, und den Rest schützen.',
            'Wichtig ist die Reihenfolge der Prüfung: erst robots.txt, dann WAF, dann CDN. Eine erlaubende robots.txt hilft nichts, wenn eine Firewall-Regel oder ein Bot-Schutz denselben User-Agent zwei Schichten tiefer mit 403 abweist. Der Crawler meldet dir das nicht, im Server-Log steht es trotzdem.',
            'Zwei Direktiven werden regelmäßig übersehen, weil sie nicht in der robots.txt stehen, sondern im Meta-Robots-Tag: nosnippet und max-snippet. Google verwendet für AI Overviews nur Text, der auch als Snippet erlaubt ist. Wer nosnippet setzt oder max-snippet klein hält, bleibt indexiert und verschwindet trotzdem aus den KI-Antworten. Das ist der leiseste Weg, sich selbst unsichtbar zu machen.',
          ],
          code: {
            label: 'robots.txt, KI-optimiert',
            lines: ROBOTS_TXT,
          },
          table: {
            headers: ['Bereich', 'Was du NICHT blockieren solltest', 'Was du blockieren kannst'],
            emphasis: 1,
            rows: [
              [
                'Inhalte',
                'Service-Seiten, Case Studies, Blog-Artikel und FAQ-Seiten',
                'Proprietäre Inhalte hinter Login-Bereichen',
              ],
              [
                'Entität',
                'Impressum und Kontaktseite, das sind deine Entity-Signale',
                'Interne Dashboards, Admin-Bereiche und API-Endpunkte',
              ],
              [
                'Technik',
                'Strukturierte Daten und Schema.org-Markup',
                'Staging-Umgebungen und Test-Seiten',
              ],
            ],
            caption:
              'Die mittlere Spalte ist der Teil, den fast alle versehentlich mitsperren. Impressum und Kontaktseite wirken unwichtig, sind aber die Belege für Name, Ort und Rechtsform.',
          },
          warning: {
            title: 'Die robots.txt ist nicht die einzige Tür',
            text: 'Der Test dauert eine Zeile: Ruf eine echte Inhaltsseite mit curl und dem User-Agent GPTBot ab und schau auf Statuscode und Antwortlänge. 200 mit vollständigem HTML ist das Ziel. Ein 403, eine Challenge-Seite oder ein leeres Grundgerüst bedeuten, dass eine Schicht unter der robots.txt widerspricht. Dann hilft dir keine Direktive, sondern nur eine Ausnahme in der Firewall.',
          },
        },
        {
          id: 'llms-txt',
          heading: 'llms.txt: Der neue Standard für LLM-Sichtbarkeit',
          intro:
            'llms.txt ist ein Vorschlag für eine standardisierte Datei im Root-Verzeichnis deiner Website, die LLMs eine kompakte, maschinenlesbare Zusammenfassung deines Unternehmens liefert. Ähnlich wie robots.txt für Crawler oder humans.txt für Menschen.',
          paragraphs: [
            'Der Unterschied: robots.txt sagt Crawlern, was sie dürfen. llms.txt sagt LLMs, wer du bist und was du anbietest. Es ist dein Elevator Pitch für Maschinen.',
            <>
              Erwartungswert für 2026, damit du nicht enttäuscht wirst: Google hat für die eigenen
              KI-Funktionen ausdrücklich klargestellt, dass llms.txt nicht ausgewertet wird (
              <a href="/wissen/geo-vs-seo">mehr dazu im Begriffsvergleich</a>). Für ChatGPT, Claude
              und Perplexity ist die Datei ein zusätzlicher, sehr leicht abrufbarer Einstiegspunkt.
              Eine Stunde Aufwand, überschaubarer Nutzen, kein Ersatz für saubere Seiten.
            </>,
            'Was llms.txt nicht kann: Sie verschafft dir keine Zitate, wenn die verlinkten Seiten dünn sind. Sie ist ein Inhaltsverzeichnis, kein Inhalt. Ihr Wert liegt darin, dass ein Modell in einem einzigen Abruf versteht, was du anbietest, statt es aus einer Navigation zu rekonstruieren. Wer sie mit Marketingtext füllt, verschenkt genau diesen Vorteil.',
          ],
          code: {
            label: 'llms.txt, Beispiel',
            lines: LLMS_TXT,
          },
          steps: [
            {
              title: 'Implementierung: Datei im Root anlegen',
              text: 'Erstelle eine Datei llms.txt im Root deiner Domain, also unter https://example.com/llms.txt. Kein Unterverzeichnis, kein anderer Dateiname, Content-Type text/plain.',
            },
            {
              title: 'Zusammenfassung in Markdown schreiben',
              text: 'Schreibe eine klare, strukturierte Zusammenfassung deines Unternehmens in Markdown. Überschriften, kurze Sätze, Zahlen statt Adjektive. Marketingsprache wird hier nicht belohnt, weil niemand sie liest, der sie glauben könnte.',
            },
            {
              title: 'Datei aktuell halten',
              text: 'Halte die Datei aktuell, veraltete Informationen schaden mehr als keine. Ein falscher Preis oder ein alter Firmenname wandert von hier direkt in eine Antwort. Setz dir einen festen Termin pro Quartal.',
            },
            {
              title: 'Wichtigste Seiten mit Kontext verlinken',
              text: 'Verlinke die wichtigsten Seiten deiner Website und schreibe hinter jeden Link einen Satz, was dort steht. Der Satz ist der eigentliche Wert, nicht die URL.',
            },
          ],
        },
        {
          id: 'schema',
          heading: 'Schema.org Markup für LLMs',
          intro:
            'Strukturierte Daten sind für KI-Systeme das, was ein Organigramm für einen neuen Mitarbeiter ist: Kontext, Einordnung, Beziehungen. Ohne Schema.org bist du für LLMs ein unbekannter Textblock.',
          paragraphs: [
            'Zwei Details entscheiden, ob aus Markup eine Entität wird. Erstens dieselben Angaben zu Name, Adresse und Telefonnummer auf jeder Seite, im Impressum und in externen Verzeichnissen, ohne Abweichung. Zweitens verknüpfte Objekte statt isolierter Schnipsel, also eine @id für die Organisation, auf die Article, Product und FAQPage verweisen. Ein Modell, das drei leicht verschiedene Firmennamen findet, nennt am Ende keinen davon.',
          ],
          code: {
            label: 'JSON-LD im head: LocalBusiness und FAQPage',
            lines: JSONLD_HEAD,
          },
          cards: [
            {
              title: 'Organization / LocalBusiness',
              text: 'Die Entitäts-Identität: Wer bist du? Ohne dieses Schema kann KI dich nicht als Entität erkennen. Name, Adresse und sameAs-Profile verhindern die Verwechslung mit einer ähnlich benannten Firma.',
            },
            {
              title: 'FAQPage',
              text: 'Direkte Antworten auf Nutzerfragen. Hochrelevant für KI, weil LLMs FAQ-Strukturen bevorzugt extrahieren. Frage und Antwort stehen darin schon getrennt, das Modell muss nichts zerlegen.',
            },
            {
              title: 'HowTo',
              text: 'Schritt-für-Schritt-Anleitungen. Ideal für prozessbasierte Inhalte, die KI als Handlungsanweisung weitergeben kann. Jeder Schritt braucht ein eigenes name-Feld, sonst bleibt es ein Textblock mit Auszeichnung.',
            },
            {
              title: 'Article mit Author',
              text: 'E-E-A-T-Signal: Wer hat den Inhalt geschrieben? Echte Autoren mit Expertise werden von KI bevorzugt zitiert. Der Author verweist idealerweise auf eine Personenseite, die es wirklich gibt.',
            },
            {
              title: 'Product',
              text: 'Für kommerzielle Inhalte: Preis, Verfügbarkeit, Bewertungen. Wird von KI für Kaufempfehlungen herangezogen. Ausgedachte Bewertungen sind hier riskanter als gar keine.',
            },
          ],
          quote:
            'Schema.org liefert KI den Kontext. Ohne Kontext bist du ein anonymer Textblock unter Millionen.',
        },
        {
          id: 'semantisches-html',
          heading: 'Semantisches HTML: Warum Struktur alles ist',
          intro:
            'KI-Crawler sehen kein Design, sie sehen DOM-Struktur. Ein perfekt gestalteter Abschnitt in einem div ohne semantische Bedeutung ist für LLMs unsichtbar. Ein klar strukturiertes article mit sauberer Heading-Hierarchie wird extrahiert und zitiert.',
          paragraphs: [
            'Ein Prinzip trägt die vier Regeln: eine Frage pro Abschnitt, und der Abschnitt muss ohne die Seite um ihn herum verständlich bleiben. Zitiert wird nie die Seite, zitiert wird der Absatz. Steht darin "wie oben beschrieben" oder "das Tool", ist die Passage aus dem Zusammenhang gerissen wertlos und fällt aus der Antwort heraus.',
          ],
          code: {
            label: 'Semantisches HTML, falsch und richtig',
            lines: SEMANTIC_HTML,
          },
          table: {
            headers: ['Die vier Regeln für KI-lesbares HTML', 'Konkret', 'Warum LLMs das brauchen'],
            rows: [
              [
                'Heading-Hierarchie',
                'Genau ein H1 pro Seite, H2 für Hauptabschnitte, H3 für Unterabschnitte, keine Sprünge von H1 auf H4.',
                'Die Heading-Struktur ist das Werkzeug, mit dem Inhalte thematisch gruppiert werden.',
              ],
              [
                'Answer-first-Absätze, 40 bis 60 Wörter',
                'Der erste Satz beantwortet die Frage, danach kommt der Kontext.',
                'Extrahiert werden bevorzugt die ersten 40 bis 60 Wörter eines Abschnitts. Steht die Antwort im dritten Satz, wird sie abgeschnitten.',
              ],
              [
                'Tabellen für Vergleichsdaten',
                'table, thead und tbody mit sauberen Headern, nicht Spalten aus Divs.',
                'Strukturierte Vergleiche werden bevorzugt extrahiert, weil Zeile und Spalte die Bedeutung schon tragen.',
              ],
              [
                'Listen für scannbare Inhalte',
                'Geordnete Listen (ol) für Schrittfolgen, ungeordnete (ul) für Aufzählungen.',
                'Listenpunkte werden als eigenständige Informationseinheiten erkannt, ideal für Checklisten.',
              ],
            ],
            caption:
              'Die vier Regeln kosten kein Redesign. Sie betreffen nur, welches Element den Text umschließt.',
          },
        },
        {
          id: 'core-web-vitals',
          heading: 'Core Web Vitals & Page Speed für KI',
          intro:
            'KI-Crawler haben Timeout-Limits. Antwortet deine Seite zu langsam, bricht der Crawler ab und indexiert nichts. Schnelle Seiten werden häufiger gecrawlt und vollständiger indexiert.',
          paragraphs: [
            'TTFB ist die kritischste Metrik für KI-Crawler. Wenn dein Server länger als 800ms braucht, um zu antworten, wird der Crawl-Versuch möglicherweise abgebrochen. CDNs, Edge-Caching und Server-Side Rendering sind deine Werkzeuge.',
            'Der zweite Effekt wird oft übersehen: Schnelle Seiten werden häufiger neu abgeholt. Bei Perplexity, das zum Zeitpunkt der Frage abruft, entscheidet die Antwortzeit mit darüber, ob die aktuelle Fassung deiner Seite in die Antwort kommt oder die zuletzt indexierte. Serverseitiges Caching ist damit kein reines Performance-Thema, sondern Teil der Aktualität deiner Sichtbarkeit.',
          ],
          table: {
            headers: ['Metrik', 'Zielwert', 'Relevanz für KI'],
            rows: [
              [
                'LCP (Largest Contentful Paint)',
                'bis 2,5 s',
                'Crawler brechen bei langsamer Antwort ab',
              ],
              [
                'CLS (Cumulative Layout Shift)',
                'bis 0,1',
                'Indirekt: Google-Ranking beeinflusst KI-Datenquellen',
              ],
              [
                'INP (Interaction to Next Paint)',
                'bis 200 ms',
                'Indirekt: Nutzererfahrung beeinflusst Engagement-Signale',
              ],
              ['TTFB (Time to First Byte)', 'bis 800 ms', 'Direkt: Crawler-Timeout-Schwelle'],
            ],
            caption:
              'Zielwerte nach den offiziellen Core-Web-Vitals-Schwellen. TTFB ist der einzige Wert, den ein KI-Crawler unmittelbar selbst erlebt, die anderen drei wirken über die klassische Suche.',
          },
        },
        {
          id: 'javascript-rendering',
          heading: 'JavaScript Rendering: Das unsichtbare Problem',
          intro:
            'Die meisten KI-Crawler führen kein JavaScript aus. Ist deine Website eine Single-Page-Application, die Content erst nach dem Laden per JavaScript rendert, sehen KI-Crawler eine leere Seite. Buchstäblich.',
          paragraphs: [
            'Googlebot kann JavaScript rendern, mit Verzögerung. GPTBot, PerplexityBot und ClaudeBot können es nicht. Das heißt: Du kannst bei Google auf Platz 1 ranken und für ChatGPT gleichzeitig unsichtbar sein.',
            'Der Test dauert zehn Sekunden. Lade die Seite mit deaktiviertem JavaScript, oder schau in den Quelltext statt in den Inspector. Was dort an Text steht, ist alles, was ein KI-Crawler von dir hat.',
          ],
          table: {
            headers: ['Rendering', 'KI-Crawler sehen', 'Empfehlung'],
            rows: [
              ['SSR (Server-Side Rendering)', 'Vollständigen Content', 'Empfohlen'],
              ['SSG (Static Site Generation)', 'Vollständigen Content', 'Empfohlen'],
              ['CSR (Client-Side Rendering)', 'Leere HTML-Hülle', 'Vermeiden'],
              ['ISR (Incremental Static Regen.)', 'Vollständigen Content', 'Empfohlen'],
            ],
            caption:
              'Nur eine der vier Varianten ist ein echtes Problem. Wer sie erwischt hat, merkt es ohne Test nicht, weil im Browser alles korrekt aussieht.',
          },
          warning: {
            title: 'Die Mischform ist der häufigere Fall',
            text: 'Häufiger als die reine SPA ist die halb gerenderte Seite: Das Layout kommt serverseitig, aber der wichtigste Text steckt in einem Tab, einem Akkordeon oder einem Karussell, das seinen Inhalt erst beim Klick nachlädt. Im Quelltext fehlt dann genau die Passage, die zitiert werden soll. Alles, was zitierfähig sein soll, muss im ersten HTML stehen, auch wenn es visuell eingeklappt ist.',
          },
        },
        {
          id: 'frameworks',
          heading: 'Frameworks mit SSR/SSG-Support',
          intro:
            'Die Framework-Wahl entscheidet die Rendering-Frage, bevor sie zum Problem wird. Alle fünf hier liefern serverseitiges HTML, nur die Stolperstellen unterscheiden sich.',
          paragraphs: [
            'Der Test gehört in den Deploy, nicht in ein Quartalsritual. Ein Skript, das nach jedem Release den Quelltext einer Kernseite abruft und nach drei Pflichtsätzen sucht, findet ein Rendering-Problem am selben Tag. Ohne diesen Schritt fällt es beim nächsten Framework-Update auf, im schlechteren Fall Monate später über fehlende Zitate.',
          ],
          table: {
            headers: ['Framework', 'Was es liefert', 'Worauf du achten musst'],
            rows: [
              [
                'Next.js (React)',
                'SSR, SSG, ISR out of the box',
                'Client-Komponenten liefern kein HTML. Inhalt gehört in Server-Komponenten.',
              ],
              [
                'Nuxt (Vue)',
                'SSR und SSG',
                'Der Standardmodus rendert serverseitig. Den reinen SPA-Modus nicht aktivieren.',
              ],
              [
                'Astro',
                'Static-first, partial hydration',
                'Islands bleiben im HTML leer. Text gehört nicht in ein Island.',
              ],
              [
                'SvelteKit',
                'SSR und SSG',
                'Prerender-Option pro Route setzen, sonst bleibt es beim Client-Rendering.',
              ],
              [
                'WordPress',
                'nativ serverseitig gerendert',
                'Achtung bei Headless-Setups: dann entscheidet das Frontend, nicht WordPress.',
              ],
            ],
            caption:
              'Kein Framework hier ist per se ein Risiko. Das Risiko sitzt in der Konfiguration, und zwar immer an der Stelle, an der Inhalt in eine Client-Komponente rutscht.',
          },
        },
        {
          id: 'checkliste',
          heading: 'Technische Checkliste: Ist deine Website KI-ready?',
          intro:
            'Fünfzehn Punkte, jeder in unter einer Stunde prüfbar. Die ersten drei entscheiden, ob die übrigen zwölf überhaupt eine Wirkung haben.',
          paragraphs: [
            'Arbeite die Liste von oben nach unten ab, nicht nach Aufwand sortiert. Punkt eins bis drei sind Zugang und Identität, sie entscheiden über die Wirkung aller weiteren. Punkt vier bis zehn sind Extraktion, dort entstehen die Zitate. Der Rest ist Hygiene: richtet keinen Schaden an, bewegt allein aber auch nichts.',
          ],
          table: {
            headers: ['Prüfpunkt', 'Wo prüfen', 'Womit prüfen'],
            rows: [
              [
                'robots.txt erlaubt GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot',
                'deine-domain.de/robots.txt',
                'Browser, danach curl mit dem Bot-User-Agent gegen eine Inhaltsseite',
              ],
              [
                'llms.txt im Root-Verzeichnis mit aktuellen Unternehmensdaten',
                'deine-domain.de/llms.txt',
                'Browser, Inhalt gegen die Website gegenlesen',
              ],
              [
                'Schema.org LocalBusiness/Organization auf allen Seiten',
                'JSON-LD im head, Quelltext',
                'Rich Results Test oder ein Schema-Validator',
              ],
              [
                'FAQPage-Schema auf FAQ-Seiten',
                'Quelltext der FAQ-Seiten',
                'Rich Results Test',
              ],
              [
                'Article-Schema mit Author auf Blog-/Wissensseiten',
                'Quelltext der Artikel',
                'Rich Results Test, danach die Author-URL anklicken',
              ],
              [
                'Saubere Heading-Hierarchie (H1 > H2 > H3, keine Sprünge)',
                'gerenderte Seite',
                'Heading-Outline im Accessibility-Baum des Browsers',
              ],
              [
                'Answer-first-Absätze: Kernaussage in den ersten 40-60 Wörtern',
                'jeder einzelne Abschnitt',
                'ersten Satz allein lesen, beantwortet er die Frage?',
              ],
              [
                'Server-Side Rendering oder Static Site Generation aktiv',
                'Quelltext, nicht Inspector',
                'JavaScript deaktivieren, ist der Text noch da?',
              ],
              [
                'TTFB unter 800ms, LCP unter 2,5s',
                'Netzwerk-Tab und Felddaten',
                'PageSpeed Insights, Core-Web-Vitals-Bericht',
              ],
              [
                'Sitemap.xml aktuell und in robots.txt verlinkt',
                'robots.txt und /sitemap.xml',
                'letzte lastmod-Daten auf Plausibilität prüfen',
              ],
              [
                'Keine WAF/Security-Plugin-Blockade für KI-User-Agents',
                'Firewall- und CDN-Logs',
                'curl mit Bot-User-Agent, auf den Statuscode achten',
              ],
              [
                'Canonical Tags korrekt gesetzt',
                'head jeder Seite',
                'zeigt der Canonical auf die Seite selbst?',
              ],
              [
                'Hreflang-Tags bei mehrsprachigen Websites',
                'head aller Sprachversionen',
                'Rückverweis jeder Variante prüfen',
              ],
              [
                'Open Graph und Twitter Card Markup vorhanden',
                'head',
                'Link in einem Messenger einfügen, Vorschau ansehen',
              ],
              [
                'Interne Verlinkung mit beschreibenden Ankertexten',
                'Fließtext der Seiten',
                'Ankertexte auflisten, nach "hier klicken" suchen',
              ],
            ],
            caption:
              'Fünfzehn Prüfpunkte mit Ort und Werkzeug. Für keinen davon brauchst du ein bezahltes Tool.',
          },
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Welche KI-Crawler muss ich in robots.txt erlauben?',
          a: 'Mindestens GPTBot und OAI-SearchBot (OpenAI/ChatGPT), PerplexityBot (Perplexity), ClaudeBot (Anthropic) und Googlebot (Google AI Overviews). Bingbot ist ebenfalls wichtig, weil er Daten an ChatGPT und Perplexity liefert. Blockierst du einen davon, bist du auf der jeweiligen Plattform unsichtbar.',
        },
        {
          q: 'Was ist llms.txt und brauche ich das?',
          a: 'llms.txt ist eine maschinenlesbare Zusammenfassung deiner Website im Root-Verzeichnis. Es ist kein offizieller Standard, und Google hat klargestellt, dass die eigenen KI-Funktionen die Datei nicht auswerten. Für ChatGPT, Claude und Perplexity ist sie ein leicht abrufbarer Einstiegspunkt. Der Aufwand liegt bei rund einer Stunde, also lohnt sie sich, aber nur zusätzlich zu sauberen Seiten, nie an deren Stelle.',
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
          a: 'Drei Methoden: 1) Server-Logs auf GPTBot, PerplexityBot und ClaudeBot prüfen. 2) Die Seite gezielt mit dem User-Agent eines KI-Crawlers abrufen und prüfen, ob Content zurückkommt. 3) In der Google Search Console unter "Crawling-Statistiken" nach KI-Bot-Zugriffen suchen. Alternativ die Seite mit deaktiviertem JavaScript im Browser laden: Was du siehst, sieht auch der KI-Crawler.',
        },
        {
          q: 'Wie schnell wirken technische Optimierungen auf KI-Sichtbarkeit?',
          a: 'Perplexity crawlt in Echtzeit, Änderungen können innerhalb von Tagen wirken. ChatGPT und Claude trainieren in Zyklen, hier dauert es 4 bis 12 Wochen. Google AI Overviews reagieren ähnlich schnell wie die klassische Google-Suche, also Tage bis wenige Wochen.',
        },
      ]}
      sources={[
        {
          label: 'OpenAI, Stand August 2026',
          text: 'GPTBot Dokumentation, User-Agent-Spezifikation und robots.txt-Richtlinien für GPTBot und OAI-SearchBot.',
          href: 'https://platform.openai.com/docs/bots',
        },
        {
          label: 'Anthropic, Stand August 2026',
          text: 'ClaudeBot Web Crawling, technische Dokumentation zum ClaudeBot-Crawler und Opt-out-Möglichkeiten.',
        },
        {
          label: 'llmstxt.org, Stand August 2026',
          text: 'llms.txt Spezifikation, Vorschlag für einen Standard zur maschinenlesbaren Website-Zusammenfassung.',
          href: 'https://llmstxt.org/',
        },
        {
          label: 'Google Search Central, Stand August 2026',
          text: 'Structured Data Guidelines, Dokumentation zu Google-Extended und die offizielle Aussage zu den KI-Funktionen der Suche.',
          href: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
        {
          label: 'Perplexity, Stand August 2026',
          text: 'PerplexityBot Dokumentation, Crawler-Verhalten und robots.txt-Unterstützung.',
        },
        {
          label: 'Cloudflare, 1. Juli 2025',
          text: 'Cloudflare blockiert KI-Crawler bei neu angemeldeten Domains standardmäßig und fragt beim Setup ab, welche KI-Bots erlaubt sein sollen. Deshalb kann eine Website KI-Crawler aussperren, ohne dass jemand im Unternehmen das entschieden hat.',
          href: 'https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/',
        },
        {
          label: 'Web.dev, Stand August 2026',
          text: 'Core Web Vitals, LCP, CLS, INP und TTFB Schwellenwerte und Optimierungsstrategien.',
          href: 'https://web.dev/articles/vitals',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description:
            'Was KI-Sichtbarkeit bedeutet, warum sie entscheidend ist und wie du sie erreichst.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description:
            'Wie du in ChatGPT-Antworten erscheinst und was OpenAI als Quelle bevorzugt.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'Sichtbarkeit in Perplexity',
          description: 'Der schnellste Kanal für KI-Sichtbarkeit. Taktiken und Messung.',
          href: '/wissen/sichtbarkeit-in-perplexity',
          tag: 'Perplexity',
        },
        {
          title: 'SEO vs. AI SEO',
          description: 'Die Unterschiede zwischen klassischem SEO und KI-Optimierung.',
          href: '/wissen/seo-vs-ai-seo',
          tag: 'Vergleich',
        },
      ]}
      ctaTitle="Ist deine Website KI-ready?"
      ctaText="Finde heraus, ob KI-Crawler deine Website lesen können, oder ob du unbewusst blockierst. Kostenlose technische Kurzanalyse in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose KI-Analyse anfragen"
    />
  );
}

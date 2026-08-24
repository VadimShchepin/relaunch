import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

/* ------------------------------------------------------------------ */
/*  Data: raw figures from the DataForSEO pull, 25.05.2026             */
/* ------------------------------------------------------------------ */

const TOP_GROWERS: string[][] = [
  ['aeo optimierung', '3,3', '46,7', '+1.300 %'],
  ['wie funktioniert geo', '6,7', '53,3', '+700 %'],
  ['geo audit', '33,3', '243,3', '+630 %'],
  ['ai visibility tool', '20,0', '143,3', '+617 %'],
  ['geo vs aeo', '6,7', '40,0', '+500 %'],
  ['aeo vs geo', '10,0', '46,7', '+367 %'],
  ['ki sichtbarkeit', '36,7', '170,0', '+364 %'],
  ['ai visibility', '36,7', '153,3', '+318 %'],
  ['aeo marketing', '30,0', '113,3', '+278 %'],
  ['llm visibility', '13,3', '46,7', '+250 %'],
  ['was ist geo seo', '30,0', '96,7', '+222 %'],
  ['llm analyse', '20,0', '63,3', '+217 %'],
  ['gemini seo', '20,0', '60,0', '+200 %'],
  ['geo optimierung', '486,7', '1.200,0', '+147 %'],
  ['geo marketing', '233,3', '516,7', '+121 %'],
  ['was ist aeo', '83,3', '160,0', '+92 %'],
  ['aeo seo', '96,7', '183,3', '+90 %'],
  ['ki seo agentur', '103,3', '196,7', '+90 %'],
  ['geo seo', '1.460,0', '2.566,7', '+76 %'],
  ['perplexity seo', '33,3', '56,7', '+70 %'],
];

const TOP_DECLINERS: string[][] = [
  ['google ai mode seo', '36,7', '10,0', 'minus 73 %'],
  ['zukunft von seo', '120,0', '33,3', 'minus 72 %'],
  ['google ai overviews seo', '33,3', '10,0', 'minus 70 %'],
  ['seo fuer chatgpt', '160,0', '53,3', 'minus 67 %'],
  ['chatgpt seo', '866,7', '323,3', 'minus 63 %'],
  ['llm seo', '246,7', '116,7', 'minus 53 %'],
  ['llmo', '676,7', '330,0', 'minus 51 %'],
  ['seo experte hamburg', '486,7', '250,0', 'minus 49 %'],
  ['seo beratung hamburg', '426,7', '220,0', 'minus 48 %'],
  ['llm optimization', '96,7', '56,7', 'minus 41 %'],
];

const CLUSTER_ROWS: string[][] = [
  ['GEO (echte Begriffe)', '23', '15', '5.780', 'Ohne den Honigfallen-Begriff geo'],
  ['AEO (echte Begriffe)', '22', '6', '470', 'Ohne den Honigfallen-Begriff aeo'],
  ['Klassisches lokales SEO Hamburg', '20', '9', '2.770', 'Lokal nur etwa 310 SV pro Monat'],
  ['LLMO und AI Visibility', '29', '19', '1.090', ''],
  ['Deutsche kommerzielle Phrasen', '29', '10', '1.030', 'CPC bis 40 Euro'],
  ['Bildung und Vergleiche', '24', '12', '990', 'Niedrige CPC, hohe Funnel-Position'],
  ['Plattform-spezifisch', '30', '14', '860', 'Rückläufig, siehe ChatGPT SEO'],
  ['Service-Intent (Audit, Strategie)', '28', '9', '350', 'CPC 8 bis 23 Euro'],
  ['Entity, E-E-A-T, Schema', '22', '5', '280', ''],
  ['Lokales AEO/GEO Hamburg', '29', '2', '270', 'Nachfrage unter Messschwelle, SERPs voll'],
  ['Problem-aware Anfragen', '21', '0', '0', 'Latente Nachfrage, keine SV'],
  ['B2B und Vertikal', '22', '0', '0', 'Latente Nachfrage, keine SV'],
];

const Q3_ROWS: string[][] = [
  ['geo seo', '2.567', '6,19 €', '+76 %', 'HIGH', 'Pillar, Definition'],
  ['geo optimierung', '1.200', '11,47 €', '+147 %', 'HIGH', 'Service, Pillar'],
  ['generative engine optimization', '1.300', '6,40 €', '+8 %', 'HIGH', 'Pillar'],
  ['geo agentur', '1.160', '27,91 €', '+53 %', 'MEDIUM', 'Kommerzielle Money-Seite'],
  ['geo vs seo', '567', '4,55 €', '+50 %', 'MEDIUM', 'Bildung, Funnel-Einstieg'],
  ['geo audit', '243', '8,10 €', '+630 %', 'LOW', 'Audit-Service'],
  ['answer engine optimization', '230', '5,34 €', '+25 %', 'MEDIUM', 'AEO-Pillar'],
  ['ki seo agentur', '197', '40,36 €', '+90 %', 'MEDIUM', 'Money-Seite, höchste CPC'],
  ['aeo seo', '183', '4,61 €', '+90 %', 'LOW', 'Bildung, Disambiguierung'],
  ['ki sichtbarkeit', '170', '11,83 €', '+364 %', 'MEDIUM', 'Marken-Term, Hub'],
];

const HAMBURG_ROWS: string[][] = [
  ['suchmaschinenoptimierung hamburg', '1.207', '1.300', '+8 %', '19,96 €'],
  ['seo agentur hamburg', '1.107', '823', 'minus 26 %', '28,66 €'],
  ['seo experte hamburg', '487', '250', 'minus 49 %', '14,60 €'],
  ['seo beratung hamburg', '427', '220', 'minus 48 %', 'keine Angabe'],
  ['local seo hamburg', '123', '173', '+41 %', '14,35 €'],
  ['aeo hamburg', '6,7', '10', '+50 %', 'Honigfalle: AWO'],
  ['geo hamburg', '300', '280', 'minus 7 %', 'Honigfalle: Geoportal'],
];

export default function AEOGEOMarktanalyseDeutschland2026Page() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/aeo-geo-marktanalyse-deutschland-2026"
      breadcrumbLabel="AEO/GEO Marktanalyse Deutschland Q2 2026"
      eyebrow="Primärrecherche, Q2 2026"
      title="Die drei Honigfallen der AEO/GEO-Suche in Deutschland"
      description="Ich habe 297 Keywords über DataForSEO geprüft. Drei Begriffe kosten Unternehmen und Agenturen Geld. Sechs wachsen mit 200 bis 1.300 % pro Jahr. Und ChatGPT SEO ist als Suchbegriff um 63 % gefallen. Die Rohdaten, die meine Targeting-Entscheidungen geprägt haben, mit CSV-Download."
      publishedAt="2026-05-25"
      modifiedAt="2026-08-24"
      summaryItems={[
        'Drei Honigfallen verbrennen Budget: aeo mit 3.600 Suchen pro Monat (primär American Eagle), geo mit 27.100 (primär Geoportal Hamburg) und geo hamburg mit 260 (zu 100 % Geoportal).',
        'Sechs Begriffe explodieren: aeo optimierung +1.300 %, geo audit +630 %, ki sichtbarkeit +364 %, ai visibility +318 %, geo optimierung +147 %, geo seo +76 % (jetzt 2.567 Suchen pro Monat).',
        'ChatGPT SEO ist auf dem Rückzug, minus 63 % in zwölf Monaten. Die Audience migriert vom plattform-spezifischen Vokabular zur AEO/GEO-Terminologie.',
        'Hamburg lokal: klassisches SEO verliert 26 bis 49 % bei Beratung, Experte und Agentur. Die AEO/GEO-Suffix-Begriffe haben noch keine messbare Nachfrage, aber voll besetzte SERPs.',
        'Bereinigte Marktgröße: rund 11.000 monatliche Suchen über zwölf Cluster, davon etwa 5.800 im GEO-Bereich. Beide CSV-Datensätze stehen unter den Quellen zum Download.',
      ]}
      sections={[
        {
          id: 'honigfallen',
          heading: 'Die drei Honigfallen',
          intro:
            'Drei der suchstärksten Begriffe im AEO/GEO-Umfeld sind keine AEO/GEO-Begriffe. Sie kollidieren mit etablierten Bedeutungen. Wer auf die reinen Drei-Buchstaben-Akronyme bietet oder seine Seiten danach benennt, ködert Traffic, der nie konvertiert.',
          stat: '27.100 Suchen pro Monat im Begriff geo. Kein einziges Top-10-Ergebnis ist eine SEO-Agentur. Es ist Geoportal Hamburg, Geo Magazin, Uni Hamburg.',
          chart: {
            variant: 'row',
            title: 'Suchvolumen der Honigfallen-Begriffe',
            axis: { title: 'Suchen pro Monat, Deutschland' },
            highlight: 'peak',
            points: [
              { label: 'geo', value: 27100, note: 'Geoportal, Geo Magazin, Geographie' },
              { label: 'aeo', value: 3600, note: 'American Eagle, Zollrecht' },
              { label: 'geo hamburg', value: 260, note: 'Landesbetrieb Geoinformation' },
              { label: 'aeo hamburg', value: 10, note: 'AWO Landesverband' },
            ],
            table: false,
            caption:
              'Das ist die ganze Falle in einem Bild: Der Begriff mit dem 75-fachen Suchvolumen hat null kommerzielle Relevanz für AI SEO. Die Screenshots der echten SERPs stehen weiter unten unter Was Google tatsächlich zeigt.',
          },
          table: {
            headers: ['Begriff', 'SV pro Monat', '12-Monats-Trend', 'Wirklicher Intent', 'Top-Ranker'],
            rows: [
              [
                'aeo',
                '3.600',
                '+15 %',
                'American Eagle Outfitters (Mode), Authorized Economic Operator (Zollrecht)',
                'IHK, Max-Line, American-Eagle.eu',
              ],
              [
                'geo',
                '27.100',
                '+22 %',
                'Geoportal Hamburg, Geo Magazin, Geographie-Studium',
                'geoportal-hamburg.de, geo.de, uni-hamburg.de',
              ],
              [
                'geo hamburg',
                '260',
                'minus 7 %',
                'Geoportal Hamburg, Landesbetrieb Geoinformation',
                '100 % Geoinformation und Vermessung',
              ],
              [
                'aeo hamburg',
                '10',
                '+50 %',
                'AWO Hamburg (Wohlfahrtsverband)',
                '100 % AWO Landesverband, AWO Akademie',
              ],
            ],
            caption:
              'Vier Begriffe, vier fremde Bedeutungsfelder. Die Spalte Top-Ranker ist der Beweis: Wer hier optimiert, konkurriert mit Modehandel, Zollrecht, einer Landesbehörde und der Arbeiterwohlfahrt.',
          },
          paragraphs: [
            'Der Begriff aeo mit 3.600 Suchen pro Monat liefert als Top-Ergebnisse American Eagle Outfitters, die IHK-Seite zum Authorized Economic Operator und den Anbieter Max-Line. Die Keyword-Expansion zu diesem Anker liefert american eagle jeans herren, american eagle boxershorts und zugelassener wirtschaftsbeteiligter aeo. Null Bezug zu AI SEO.',
            'Der Begriff geo mit 27.100 Suchen pro Monat liefert in den ersten zehn Treffern: geoportal-hamburg.de, geo.de, erneut geoportal-hamburg.de, hamburg.de mit dem Landesbetrieb Geoinformation und Vermessung, geo.de, geo.uni-hamburg.de, das Geoportal der Metropolregion Hamburg, geo.de, fsr-geographie.de und urbandataplatform.hamburg. Keine einzige SEO-Agentur.',
            'Der Begriff geo hamburg mit 260 Suchen und minus 7 % ist reines Geoportal-Territorium. Selbst aeo hamburg mit 10 Suchen führt zu 100 % zu Ergebnissen der Arbeiterwohlfahrt.',
          ],
          quote:
            'Jede AEO-, GEO- oder LLMO-Landingpage sollte den Begriff im Title und in der H1 disambiguieren: Answer Engine Optimization (AEO) statt AEO, Generative Engine Optimization (GEO) statt GEO. Die langen Formen sind klarer für Menschen und klarer für Google.',
        },
        {
          id: 'wachstum',
          heading: 'Was wirklich wächst: Top 20 Begriffe im 12-Monats-Trend',
          intro:
            'Zur Methodik: First 3mo ist das durchschnittliche monatliche Suchvolumen der ältesten drei Monate im Trendfenster, also Mai bis Juli 2025. Last 3mo ist der Durchschnitt der jüngsten drei Monate, Februar bis April 2026. YoY ist die prozentuale Veränderung zwischen diesen beiden Mittelwerten.',
          chart: {
            variant: 'row',
            title: 'Die sechs stärksten Zuwächse',
            axis: { unit: ' %', title: 'Veränderung, 12 Monate' },
            highlight: 'peak',
            points: [
              { label: 'aeo optimierung', value: 1300 },
              { label: 'wie funktioniert geo', value: 700 },
              { label: 'geo audit', value: 630 },
              { label: 'ai visibility tool', value: 617 },
              { label: 'geo vs aeo', value: 500 },
              { label: 'ki sichtbarkeit', value: 364 },
            ],
            table: false,
            caption:
              'Prozentwerte auf kleiner Basis bestätigen die Richtung, nicht die Magnitude. Die absoluten Monatswerte stehen in der Tabelle darunter.',
          },
          table: {
            headers: ['Keyword', 'First 3mo', 'Last 3mo', 'YoY'],
            rows: TOP_GROWERS,
            caption:
              'Alle 20 Wachstumsbegriffe der Erhebung, sortiert nach Veränderung. Die vollständige Liste mit allen 297 Keywords steht im CSV.',
            note: 'Hinweis: Werte unter 10 Suchen pro Monat sind bei Google Ads gerundet und zensiert. Hohe Prozentwerte auf kleiner Basis, etwa aeo optimierung von 3,3 auf 46,7, bestätigen die Richtung, nicht die Magnitude.',
          },
        },
        {
          id: 'chatgpt-rueckzug',
          heading: 'Der stille Rückzug von „ChatGPT SEO“',
          intro:
            'ChatGPT SEO war 2025 der Konsumenten-Begriff für KI-Sichtbarkeit, der erste, den Marketing-Verantwortliche gegoogelt haben. Heute fällt er, und mit ihm seine Geschwister.',
          chart: {
            variant: 'column',
            title: 'Suchvolumen für chatgpt seo, Deutschland',
            axis: { title: 'Suchen pro Monat' },
            highlight: 'peak',
            points: [
              { label: 'Mittel Mai bis Juli 2025', short: 'Mai bis Jul 2025', value: 867 },
              { label: 'Mittel Februar bis April 2026', short: 'Feb bis Apr 2026', value: 323 },
            ],
            stats: [
              { label: 'Veränderung', value: 'minus 63 %' },
              { label: 'Verlorene Suchen', value: '544 pro Monat' },
              { label: 'Gegenbewegung', value: 'geo seo auf 2.567' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Zeitfenster', 'Suchen pro Monat'] },
            caption:
              'Derselbe Datensatz, dieselbe Methode wie bei den Wachstumsbegriffen. Der Rückgang ist kein Messartefakt, sondern folgt dem Muster aller plattform-spezifischen Begriffe.',
          },
          table: {
            headers: ['Begriff', 'First 3mo', 'Last 3mo', 'YoY'],
            rows: TOP_DECLINERS,
            caption:
              'Die zehn stärksten Rückgänge. Auffällig: sieben davon sind plattform-spezifisch oder klassisch lokal, keiner ist ein disambiguierter AEO/GEO-Begriff.',
          },
          steps: [
            {
              title: 'Vokabular-Migration',
              text: 'Die Audience wandert von plattform-spezifischen Begriffen wie ChatGPT SEO oder Google AI Overviews SEO zur plattform-agnostischen AEO/GEO-Terminologie, die alle Antwort-Engines umfasst. geo seo wächst im selben Zeitraum auf 2.567 Suchen. Das ist fast genau der Verlust von chatgpt seo plus seo für chatgpt.',
            },
            {
              title: 'Naming-Konvergenz',
              text: 'Deutsche Marketing-Verantwortliche, die 2025 von US-Quellen lernten, hatten zuerst ChatGPT SEO im Kopf. 2026 sind deutsche Fachartikel verfügbar, und die nutzen GEO und AEO. Das Suchverhalten folgt der Fachsprache.',
            },
            {
              title: 'Sättigungs-Effekt',
              text: 'ChatGPT SEO hatte 2025 einen Neuheits-Peak. Die initiale Welle des Informationsbedarfs ist gedeckt. Was bleibt, sind tiefere Praxis-Fragen, die unter spezifischeren Begriffen gesucht werden.',
            },
          ],
          note:
            'Was das praktisch bedeutet: Wer eine Seite zu ChatGPT SEO baut und nur auf diesen Trend schaut, sieht einen schrumpfenden Markt. Wer den semantischen Cluster betrachtet, also GEO, AEO und KI-Sichtbarkeit zusammen, sieht den eigentlichen Markt wachsen. Plattform-spezifische Seiten sollten innerhalb eines breiteren AEO/GEO-Hubs leben, nicht als Solitäre.',
        },
        {
          id: 'hamburg',
          heading: 'Wo Hamburg sich verschiebt',
          intro:
            'Hamburg ist im Datensatz ein doppelter Sonderfall. Klassische lokale SEO-Begriffe verlieren signifikant. Gleichzeitig sind die spezifischen lokalen AEO/GEO-Begriffe noch unter der Google-Ads-Messschwelle, aber die SERPs sind bereits voll besetzt.',
          table: {
            headers: ['Begriff', 'First 3mo', 'Last 3mo', 'YoY', 'CPC'],
            emphasis: 3,
            rows: HAMBURG_ROWS,
            caption:
              'Zwei gegenläufige Bewegungen in einer Tabelle: der Kopfbegriff suchmaschinenoptimierung hamburg hält sich, alles was nach Beratung und Expertise klingt, halbiert sich fast.',
          },
          paragraphs: [
            'Die spezifisch lokalen AEO/GEO-Begriffe, also ai seo agentur hamburg, ki seo agentur hamburg, generative engine optimization hamburg und answer engine optimization hamburg, haben in Google Ads ein gerundetes Suchvolumen von 0 bis 10 pro Monat. Trotzdem ist die SERP für jeden dieser Begriffe voll besetzt.',
          ],
          bullets: [
            'effektor.de mit KI-SEO verstehen, lokal konsistent auf Position 1 bis 2',
            'semsea-hh.de als GEO Agentur für AI-SEO und LLMO',
            'ki-hafen.de als KI-Agentur aus Hamburg mit Generative Engine Optimization',
            'aspector-hamburg.de mit Chat-GPT-SEO und GEO',
            'geoagentur-hamburg.de als Exact-Match-Domain',
            'seiten-werk.com, proactive-media.de, bavaria-ai.com, myartside.de und lukas-fischer.de',
          ],
          warning: {
            title: 'Die Bewegung ist supply-side, nicht demand-side',
            text: 'Die Nachfrage existiert, liegt aber unter der Messschwelle von Google Ads: Begriffe mit weniger als etwa 10 monatlichen Suchen werden gerundet zensiert oder als 0 ausgewiesen. Wer in Hamburg wartet, bis Suchvolumen offiziell ankommt, verliert das Wettrennen um die SERP. Wettbewerber rollen Seiten aus, bevor die Nachfragedaten sichtbar werden.',
          },
        },
        {
          id: 'marktgroesse',
          heading: 'Die bereinigte Marktgröße',
          intro:
            '297 Seeds in zwölf semantischen Clustern. Die Summe des monatlichen Suchvolumens, bereinigt um die Honigfallen-Begriffe aeo mit 3.600 und geo mit 27.100, ergibt rund 11.000 monatliche Suchen quer durch die deutschsprachige AEO/GEO-Suche.',
          stat: 'Der GEO-Cluster trägt mit 5.780 Suchen pro Monat mehr als die Hälfte des bereinigten Marktes. Der AEO-Cluster ist mit 470 ein Zwölftel davon, obwohl beide Kürzel im Marketing gleich laut beworben werden.',
          table: {
            headers: ['Cluster', 'Seeds', 'Mit SV über 0', 'Summe SV DE pro Monat', 'Anmerkung'],
            emphasis: 2,
            rows: CLUSTER_ROWS,
            caption:
              'Sortiert nach Größe. Die Spalte Mit SV über 0 zeigt, wie viele Seeds eines Clusters überhaupt messbares Volumen haben. Das ist die eigentliche Reifekennzahl.',
            note: 'Problem-aware und B2B/Vertikal haben in dieser Erhebung 0 messbares Suchvolumen. Die SERPs zeigen aber, dass KI-Systeme bereits Inhalte zu diesen Anfragen indexieren. Wer früh schreibt, sammelt Zitationen, bevor das Suchvolumen offiziell auftaucht.',
          },
        },
        {
          id: 'q3-begriffe',
          heading: 'Welche Begriffe Unternehmen und Agenturen Q3 2026 beobachten sollten',
          intro:
            'Die folgenden zehn Begriffe priorisiere ich auf aiseo.hamburg. Auswahlkriterien: saubere Intent ohne Honigfallen-Charakter, Suchvolumen ab 150 pro Monat oder Wachstum über 100 %, und eine klar kommerzielle oder bildende Funktion im Funnel. Für Unternehmen sind die Bildungs- und Vergleichsbegriffe die ersten Anlaufstellen, für Agenturen die kommerziellen Money-Terms mit hoher CPC.',
          table: {
            headers: ['Keyword', 'SV pro Monat', 'CPC', 'YoY', 'Wettbewerb', 'Einsatz'],
            rows: Q3_ROWS,
            caption:
              'Die Spalte Einsatz ist die eigentliche Entscheidung: nicht jedes Volumen verdient eine Money-Seite, und nicht jede hohe CPC verdient einen Bildungsartikel.',
            note: 'ki seo agentur hat mit 40,36 Euro die höchste CPC im gesamten Datensatz, ein klares Signal für kommerziellen Käufer-Intent. Im selben Cluster: suchmaschinenoptimierung hamburg mit 19,96 Euro und seo agentur hamburg mit 28,66 Euro.',
          },
        },
        {
          id: 'honigfallen-mechanik',
          heading: 'Warum Honigfallen entstehen, und wann sie verschwinden',
          intro:
            'Drei-Buchstaben-Akronyme sind im Marketing populär, weil sie sich einprägen. Sie sind aber auch das Wortmaterial, das in der natürlichen Sprache schon belegt ist. AEO war in Deutschland zwanzig Jahre lang die Abkürzung für American Eagle Outfitters und für Authorized Economic Operator, zwei sehr unterschiedliche Domänen mit eigenem Such-Footprint. GEO ist seit Jahrzehnten Geographie, Geoinformatik und Geopolitik.',
          paragraphs: [
            'Wenn ein neues Bedeutungsfeld auf ein bereits belegtes Akronym trifft, entsteht eine Disambiguierungs-Lücke. Google weiß noch nicht, dass die Nutzerin, die aeo tippt, eventuell Answer Engine Optimization meint. Bis Google das gelernt hat, meist 12 bis 24 Monate und abhängig davon, wie viele neue Inhalte im neuen Sinn produziert werden, bleibt die SERP von den alten Bedeutungen dominiert.',
          ],
          bullets: [
            'Inhaltsdichte: Je mehr autoritäre Inhalte im neuen Sinn erscheinen, desto eher zeigt Google sie. Wikipedia-Einträge sind ein Beschleuniger. Seit Generative engine optimization einen eigenen Wikipedia-Artikel hat, führt Google die Bedeutung als legitim.',
            'Such-Reformulierung: Nutzer lernen schnell, dass aeo mehrdeutig ist, und schreiben zunehmend aeo seo, answer engine optimization oder aeo optimierung. Genau das zeigen die Daten: aeo optimierung wächst um 1.300 %, aeo seo um 90 %, während aeo selbst nur um 15 % wächst, also fast nur die organische Drift im American-Eagle-Kontext.',
          ],
          note:
            'Die praktische Konsequenz für 2026: in jedem Title, jeder H1 und jeder Meta-Beschreibung disambiguieren. Den langen Begriff voll ausschreiben und das Akronym in Klammern setzen. So fängst du die Akronym-Suche ab, sobald Google sie zuordnet, und gleichzeitig die jetzt schon dominanten ausgeschriebenen Varianten.',
        },
        {
          id: 'methodik',
          heading: 'Methodik',
          intro:
            'Alles, was du brauchst, um die Erhebung nachzubauen oder zu prüfen. Die Rohdaten stehen als CSV unter den Quellen.',
          definitions: [
            {
              term: 'Datenquelle',
              definition:
                'DataForSEO, Google Ads Keyword-Daten und Google Organic SERP. Erhebung am 25. Mai 2026, 11:21 Uhr GMT+2.',
            },
            {
              term: 'Stichprobe',
              definition:
                '297 Keyword-Seeds, manuell kuratiert über zwölf semantische Cluster: lokale Hamburg-Begriffe, deutsche kommerzielle Phrasen, AEO-Cluster, GEO-Cluster, LLMO und AI Visibility, plattform-spezifisch für ChatGPT, Perplexity, Gemini und Copilot, problem-aware Anfragen, Bildungs- und Vergleichsbegriffe, Service-Intent, B2B und Vertikal, klassisches lokales SEO Hamburg sowie Entity, E-E-A-T und Schema.',
            },
            {
              term: 'Datentypen',
              definition:
                'Monatliches Google-Suchvolumen, CPC und Wettbewerbsstufe pro Keyword. Zusätzlich für die zehn priorisierten Anker eine Keyword-Expansion und für zwölf priorisierte Begriffe die Google-SERP-Top-20.',
            },
            {
              term: 'Geografie',
              definition:
                'Location-Code 2276 für Deutschland und 1003854 für die Metropolregion Hamburg. Sprachen: de als Primärsprache, en als parallele Probe für anglo-affine Begriffe.',
            },
            {
              term: 'Trendberechnung',
              definition:
                'Die monatlichen Verlaufsdaten liefern die letzten zwölf Kalendermonate. First 3mo ist der monatliche Durchschnitt der drei ältesten Monate, Last 3mo der drei jüngsten. Der YoY-Prozentwert ist die Veränderung zwischen diesen beiden Mittelwerten.',
              formula: 'YoY = (Last 3mo − First 3mo) / First 3mo',
            },
          ],
          bullets: [
            'Begriffe mit weniger als etwa 10 monatlichen Suchen werden bei Google Ads gerundet zensiert. Manche tatsächliche Nachfrage liegt also unter der Messschwelle.',
            'Die Volumenwerte sind Google-Ads-eigene Schätzungen, keine Server-Logs. Sie eignen sich für Vergleiche und Trendrichtungen, nicht für exakte Volumenangaben.',
            'Backlink-Daten sind nicht enthalten, zum Erhebungszeitpunkt gab es kein aktives Backlinks-Abonnement.',
            'Volumen aus Bing, Baidu und Yandex ist nicht enthalten. Für den deutschen Markt ist das kein relevanter Verlust.',
          ],
        },
        {
          id: 'datensatz',
          heading: 'Datensatz herunterladen',
          intro:
            'Beide CSVs stehen unter CC BY 4.0. Du darfst die Daten frei nutzen, verändern und weiterverbreiten, mit Namensnennung als aiseo.hamburg, AEO/GEO Marktanalyse Deutschland Q2 2026. Die Download-Links stehen unter Quellen am Ende dieser Seite.',
          cards: [
            {
              title: 'Keywords · Volumen · CPC · Wettbewerb',
              text: 'Der Hauptdatensatz, 297 Zeilen. Pro Keyword: Cluster-Zuordnung, Suchvolumen Deutschland, CPC Deutschland, Wettbewerbsstufe, Volumen Hamburg, Volumen und CPC der englischen Sprachvariante. CSV, etwa 13 KB.',
            },
            {
              title: '12-Monats-Suchvolumen pro Keyword',
              text: 'Die Trenddaten. Pro Keyword: First-3-Monats-Mittelwert, Last-3-Monats-Mittelwert, YoY-Prozent, Peak-Monat und die einzelnen Monatswerte von Mai 2025 bis April 2026. CSV, etwa 10 KB.',
            },
          ],
          note:
            'Zitation: Shchepin, V. (2026). AEO/GEO Marktanalyse Deutschland Q2 2026. 297 Keywords, drei Honigfallen, der stille Rückgang von ChatGPT SEO. aiseo.hamburg.',
        },
        {
          id: 'was-das-bedeutet',
          heading: 'Was das für Unternehmen bedeutet',
          intro:
            'Wenn deine Firma heute nicht klar als vertrauenswürdige Quelle im Web erkennbar ist, wird sie in KI-Antworten schwerer empfohlen. Die KI-Sichtbarkeit deiner Marke entscheidet sich an einer Handvoll konkreter Stellen, und keine davon heißt klassische SEO ersetzen.',
          bullets: [
            'Klare Leistungsseiten mit Preisen, Prozessen und Zielgruppen.',
            'Konsistente Marken- und Firmendaten, also Name, Adresse, Telefonnummer und Geschäftszweck, über Website, Google Business, LinkedIn und Branchenverzeichnisse.',
            'Echte Bewertungen von echten Kunden, idealerweise mit Namen und Kontext.',
            'Erwähnungen auf vertrauenswürdigen externen Quellen: Fachpublikationen, Branchenpresse, Partnerseiten.',
            'Strukturierte Inhalte zu konkreten Kaufentscheidungen, nicht generische Was-ist-X-Texte.',
            'Monitoring in Google, ChatGPT, Perplexity und Gemini, um Bewegungen früh zu sehen.',
          ],
          paragraphs: [
            'Die frühe Phase ist ein Vorteil. Viele Wettbewerber haben noch keine klare AI-Visibility-Strategie. Wer jetzt sauber positioniert, sammelt Zitationen, bevor das Suchvolumen aufholt. Das gilt für Anwaltskanzleien und Praxen genauso wie für Handwerksbetriebe, E-Commerce-Shops und B2B-Dienstleister.',
            'Konkret bedeutet das für die meisten Mittelständler: drei bis fünf gut gepflegte Seiten zu den Kernleistungen, eine saubere Über-uns- und Trust-Seite, und ein kostenfreies AEO-Audit, um den Ausgangspunkt zu kennen.',
          ],
        },
      ]}
      galleryTitle="Was Google tatsächlich zeigt"
      galleryIntro="Screenshots der echten SERPs zu aeo, geo, geo hamburg und aeo hamburg. Mode, Magazin, Behörde, Wohlfahrtsverband. Aber keine SEO-Agentur. Diese Bilder sind die Belege zu Abschnitt 1."
      gallery={[
        {
          src: '/images/honeytrap/aeo.webp',
          alt: 'Google-Suchergebnisse in Deutschland für den Begriff aeo.',
          caption: 'Suche nach aeo: Was Google in Deutschland tatsächlich zeigt.',
        },
        {
          src: '/images/honeytrap/american_eagle.webp',
          alt: 'Startseite von American Eagle Outfitters mit Jeans und Sneakern.',
          caption:
            'Die SERP wird von American Eagle Outfitters dominiert. Jeans, Boxershorts, Sneaker.',
        },
        {
          src: '/images/honeytrap/geo_magazin.webp',
          alt: 'Website des GEO Magazins mit Reportage-Titeln.',
          caption: 'GEO ist seit 1976 das größte Reportage-Magazin im deutschsprachigen Raum.',
        },
        {
          src: '/images/honeytrap/Landesbetrieb.webp',
          alt: 'Seite des Landesbetriebs Geoinformation und Vermessung Hamburg.',
          caption:
            'Der Landesbetrieb Geoinformation und Vermessung besetzt die ersten Plätze für geo hamburg.',
        },
        {
          src: '/images/honeytrap/awo.webp',
          alt: 'Website der AWO Hamburg, Arbeiterwohlfahrt Landesverband.',
          caption: 'Selbst aeo hamburg führt zur Arbeiterwohlfahrt, der AWO Hamburg.',
        },
      ]}
      faqTitle="Häufige Fragen zur Studie"
      faqs={[
        {
          q: 'Was ist AEO und was ist GEO?',
          a: 'AEO steht für Answer Engine Optimization und beschreibt die Optimierung von Inhalten für Systeme, die direkte Antworten geben, also ChatGPT, Perplexity, Google AI Overviews und Sprachassistenten. GEO steht für Generative Engine Optimization und fokussiert speziell auf generative KI-Systeme. Beide Begriffe werden im deutschen Markt häufig synonym verwendet. GEO ist als Suchbegriff mit 2.567 Suchen pro Monat für geo seo deutlich verbreiteter als AEO mit 230 Suchen für answer engine optimization.',
        },
        {
          q: 'Wie groß ist der deutsche AEO/GEO-Markt 2026?',
          a: 'Bereinigt um Honigfallen-Begriffe ergibt unsere Erhebung von 297 Keywords ein Gesamtsuchvolumen von rund 11.000 monatlichen Suchen über zwölf Themen-Cluster. Der GEO-Cluster mit echten Begriffen, also ohne den Geoportal-Term geo, trägt mit 5.780 Suchen pro Monat den Großteil. Lokal in Hamburg sind die spezifischen AEO/GEO-Begriffe noch unter der Messschwelle von Google Ads. Die SERPs sind aber bereits von Wettbewerbern besetzt, ein klarer Hinweis auf latente Nachfrage.',
        },
        {
          q: 'Warum sind aeo und geo Honigfallen für deutsche SEO-Agenturen?',
          a: 'Die reinen Drei-Buchstaben-Akronyme kollidieren mit etablierten Begriffen. geo mit 27.100 Suchen bezeichnet im deutschen Suchverhalten überwiegend das Geoportal Hamburg, das Geo Magazin und Geographie-Studiengänge. aeo mit 3.600 Suchen ist primär American Eagle Outfitters und das Zollrecht-Konzept Authorized Economic Operator. Wer auf diese reinen Akronyme bietet oder optimiert, fängt Traffic ab, der nichts mit AI SEO zu tun hat. Disambiguierte Formen wie geo seo, aeo seo oder answer engine optimization haben deutlich saubereren Intent.',
        },
        {
          q: 'Welche AEO/GEO-Begriffe wachsen am schnellsten?',
          a: 'Die Top-Wachstumsbegriffe im Zwölfmonats-Vergleich: aeo optimierung +1.300 %, wie funktioniert geo +700 %, geo audit +630 %, ai visibility tool +617 %, ki sichtbarkeit +364 %, ai visibility +318 %, aeo marketing +278 %, llm visibility +250 %, geo optimierung +147 % von 487 auf 1.200 Suchen pro Monat und geo seo +76 % von 1.460 auf 2.567 Suchen pro Monat. Diese Begriffe sind die klare Wachstumsfront.',
        },
        {
          q: 'Stimmt es, dass ChatGPT SEO als Suchbegriff zurückgeht?',
          a: 'Ja, deutlich. chatgpt seo hat in den letzten zwölf Monaten 63 % an Suchvolumen verloren, von 867 auf 323 Suchen pro Monat. Verwandte Begriffe folgen demselben Muster: seo für chatgpt minus 67 %, google ai overviews seo minus 70 %. Unsere Hypothese: Die Audience migriert von plattform-spezifischen Begriffen zur AEO/GEO-Terminologie, die plattform-übergreifend gemeint ist.',
        },
        {
          q: 'Wie sieht die Lage in Hamburg konkret aus?',
          a: 'Zwei gegenläufige Bewegungen. Klassische Hamburg-SEO-Begriffe verlieren: seo experte hamburg minus 49 %, seo beratung hamburg minus 48 %, seo agentur hamburg minus 26 %. Gleichzeitig haben spezifische lokale AEO/GEO-Begriffe wie ki seo agentur hamburg oder answer engine optimization hamburg zwar noch kein messbares Volumen, aber die SERPs sind voll besetzt. Wettbewerber wie effektor.de, semsea-hh.de, ki-hafen.de oder geoagentur-hamburg.de haben dedizierte Seiten ausgerollt. Klassische SEO-Nachfrage in Hamburg bleibt nur bei suchmaschinenoptimierung hamburg mit +8 % und local seo hamburg mit +41 % stabil.',
        },
        {
          q: 'Welche Methodik liegt der Studie zugrunde?',
          a: 'Wir haben 297 Keyword-Seeds über zwölf semantische Cluster definiert: Hamburg-lokal, AEO, GEO, LLMO, Plattform, Bildung, Service-Intent, B2B-vertikal, klassisches lokales SEO, Entity und Trust, problem-aware sowie deutsche kommerzielle Phrasen. Über die DataForSEO-Schnittstelle haben wir Google-Ads-Suchvolumen, CPC und Wettbewerbsstufe für Deutschland erhoben, dazu Daten für die englische Sprachvariante in Deutschland und für die Region Hamburg. Für die zehn wichtigsten Anker haben wir Keyword-Expansionen abgerufen, für zwölf priorisierte Begriffe die Google-SERP-Top-20. Das Zwölfmonats-Trendsignal stammt aus den monatlichen Verlaufsdaten.',
        },
        {
          q: 'Wie oft wird der Datensatz aktualisiert?',
          a: 'Quartalsweise. Diese Erhebung ist die Q2-2026-Ausgabe, datiert auf den 25. Mai 2026. Die nächste planmäßige Aktualisierung ist Ende August 2026 für Q3 2026. Bei größeren Marktbewegungen, etwa Algorithmus-Updates von Google AI Overviews oder neuen Plattform-Launches, erfolgt eine außerplanmäßige Erhebung.',
        },
      ]}
      sources={[
        {
          label: 'Hauptdatensatz als CSV',
          text: '297 Keywords mit Cluster-Zuordnung, Suchvolumen, CPC, Wettbewerbsstufe, Hamburg-Volumen und englischer Sprachvariante. CC BY 4.0, etwa 13 KB.',
          href: '/data/aeo-marktanalyse-deutschland-2026-q2.csv',
        },
        {
          label: 'Trenddaten als CSV',
          text: 'Pro Keyword der First-3-Monats-Mittelwert, der Last-3-Monats-Mittelwert, YoY-Prozent, Peak-Monat und alle Monatswerte von Mai 2025 bis April 2026. CC BY 4.0, etwa 10 KB.',
          href: '/data/aeo-trends-deutschland-2026-q2.csv',
        },
        {
          label: 'DataForSEO',
          text: 'Google Ads Keyword-Daten und Google Organic SERP als Rohdatenquelle der Erhebung vom 25. Mai 2026.',
          href: 'https://dataforseo.com',
        },
        {
          label: 'Lizenz CC BY 4.0',
          text: 'Nutzung, Veränderung und Weiterverbreitung mit Namensnennung als aiseo.hamburg, AEO/GEO Marktanalyse Deutschland Q2 2026.',
          href: 'https://creativecommons.org/licenses/by/4.0/deed.de',
        },
      ]}
      relatedTitle="Weiterlesen"
      relatedArticles={[
        {
          title: 'GEO vs SEO vs AEO vs LLMO. Die Kürzel in einer Tabelle.',
          description: 'Vier Definitionen, vier Erfolgsmaße und die Namensfalle im deutschen Markt.',
          href: '/wissen/geo-vs-seo',
          tag: 'Begriffe',
        },
        {
          title: 'AEO. Der komplette Guide für 2026.',
          description: 'Answer Engine Optimization von der Struktur bis zur Messung.',
          href: '/wissen/aeo-answer-engine-optimization',
          tag: 'Pillar',
        },
        {
          title: 'Was ist GEO (Generative Engine Optimization)?',
          description: 'Der Cluster mit dem größten bereinigten Suchvolumen, ausführlich erklärt.',
          href: '/wissen/was-ist-geo',
          tag: 'Pillar',
        },
        {
          title: 'LLMO. LLM-Optimierung erklärt.',
          description: 'Warum llmo als Suchbegriff fällt, während die Disziplin wächst.',
          href: '/wissen/llmo-llm-optimierung',
          tag: 'Pillar',
        },
      ]}
      ctaTitle="Wo steht Ihre Domain in diesem Datensatz?"
      ctaText="Ich prüfe kostenfrei, für welche der 297 Keywords aus dieser Studie deine Seite aktuell rankt oder zitiert wird, in Google, ChatGPT, Perplexity, Gemini und Claude. Du erhältst einen kurzen Report mit den drei wichtigsten Hebeln für Q3 2026."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenloses AEO-Audit anfordern"
    />
  );
}

import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function GscVsBingPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/gsc-vs-bing-webmaster-tools"
      breadcrumbLabel="Search Console vs Bing Webmaster Tools"
      eyebrow="Messung"
      title="Search Console gegen Bing Webmaster Tools: welche Konsole deine KI-Sichtbarkeit wirklich zeigt"
      description="Seit Juni 2026 hat Google einen eigenen Bericht für KI-Oberflächen, Bing hat einen seit Februar 2026. Die beiden sind nicht vergleichbar: Google zählt Impressionen, Bing zählt Citations und zeigt die Suchanfragen, mit denen Copilot nach Quellen sucht. Was jede Konsole kann, was fehlt und wie man beide zusammen liest."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      schemaImage="/images/wissen/gsc-vs-bing-webmaster-tools/hero.webp"
      summaryItems={[
        'Google Search Console: seit dem 3. Juni 2026 ein eigener Generative-AI-Bericht für AI Overviews und AI Mode. Ausschließlich Impressionen, dazu Seiten, Länder, Geräte und Datum. Daten beginnen am 18. Mai 2026.',
        'Bing Webmaster Tools: seit dem 11. Februar 2026 der AI-Performance-Bericht mit Total Citations, zitierten Seiten und den Grounding Queries selbst. Seit Juni 2026 zusätzlich Intents, Topics, Citation Share und Zeitraumvergleich.',
        'Keine der beiden Konsolen liefert Klicks aus KI-Antworten. Bei Google stecken sie im Gesamtwert der Websuche, bei Bing gibt es sie gar nicht.',
        'Bing zeigt Queries, Google nicht. Das ist der entscheidende Unterschied: Nur bei Bing erfährst du, auf welche Frage deine Seite geantwortet hat.',
        'Für die Praxis heißt das: Bing ist die Arbeitsdatenquelle, Google die Reichweitenkontrolle. Wer nur Google ansieht, arbeitet blind.',
      ]}
      sections={[
        {
          id: 'was-neu-ist',
          heading: 'Was 2026 tatsächlich neu ist',
          intro:
            'Bis Anfang 2026 galt der Satz, dass Suchkonsolen für KI-Sichtbarkeit blind sind. Der Satz ist überholt, und zwar in zwei Schritten.',
          paragraphs: [
            'Microsoft hat den AI-Performance-Bericht am 11. Februar 2026 als Public Preview in den Bing Webmaster Tools gestartet. Er zeigt, wie oft Inhalte in Microsoft Copilot und in KI-Antworten von Bing zitiert werden, welche URLs betroffen sind und wie sich das über die Zeit entwickelt. Im März kam die Verknüpfung von Grounding Queries und Seiten dazu, im Juni die Ansichten Intents, Topics, Citation Share und Compare.',
            'Google hat am 3. Juni 2026 die Search-Generative-AI-Performance-Berichte in der Search Console angekündigt, mit getrennten Berichten für Suche und Discover. Vorher steckten AI Overviews und AI Mode im normalen Leistungsbericht unter der Suchart Web und ließen sich dort nicht isolieren. Der neue Bericht macht diese Impressionen sichtbar, ändert aber nichts daran, dass sie weiter im Gesamtwert mitzählen.',
            'Beide Berichte sind kostenlos und brauchen nur eine verifizierte Property. Wer sie nicht nutzt, verzichtet auf die einzigen Zahlen in diesem Feld, die direkt von der Plattform kommen und nicht aus einer Prompt-Simulation geschätzt sind.',
          ],
        },
        {
          id: 'direktvergleich',
          heading: 'Der direkte Vergleich',
          table: {
            headers: ['Merkmal', 'Google Search Console', 'Bing Webmaster Tools'],
            rows: [
              ['Bericht verfügbar seit', '3. Juni 2026, gestaffelter Rollout', '11. Februar 2026, Public Preview'],
              ['Abgedeckte Oberflächen', 'AI Overviews und AI Mode, Discover separat', 'Microsoft Copilot und KI-Antworten in Bing'],
              ['Kernmetrik', 'Impressionen', 'Total Citations'],
              ['Klicks aus KI-Antworten', 'nein, stecken im Gesamtwert der Websuche', 'nein'],
              ['CTR und Position', 'nein', 'nein'],
              ['Suchanfragen sichtbar', 'nein', 'ja, als Grounding Queries'],
              ['Wettbewerbsanteil', 'nein', 'ja, als Citation Share pro Grounding Query'],
              ['Themen und Intents', 'nein', 'ja, seit Juni 2026 in der Preview'],
              ['Dimensionen', 'Seiten, Länder, Geräte, Datum', 'Seiten, Grounding Queries, Topics, Intents, Datum'],
              ['Frühester Datenpunkt', '18. Mai 2026, keine Rückrechnung', 'ab Aktivierung, Standardansicht 30 Tage'],
              ['API-Zugriff', 'zuletzt nicht verfügbar, nur CSV-Export', 'Export über die Oberfläche'],
              ['Zeilenlimit', '1.000 Zeilen wie im Standardbericht', 'Exportgrenzen je Ansicht'],
            ],
            caption:
              'Stand August 2026. Beide Berichte sind in Bewegung, Google hat zusätzliche Metriken angekündigt, ohne Termin zu nennen.',
          },
        },
        {
          id: 'grounding-queries',
          heading: 'Grounding Queries: der Grund, warum Bing gewinnt',
          definitions: [
            {
              term: 'Grounding Query',
              definition:
                'Die Suchanfrage, die Copilot intern selbst formuliert, um Webinhalte für eine Antwort abzurufen. Sie ist nicht der Prompt des Nutzers, sondern eine vom System umgeschriebene Version davon. Grounding bezeichnet dabei das Quellmaterial, mit dem die KI ihre Antwort belegt.',
            },
            {
              term: 'Citation Share',
              definition:
                'Laut Microsoft der Prozentsatz der Citations, die deiner Website zugeordnet werden, gemessen an allen Citations, die für dieselbe Grounding Query über alle Websites hinweg gezeigt wurden. Microsoft betont, dass die Ansicht keine Wettbewerber-Domains offenlegt und keinen Traffic-Anteil abbildet.',
            },
          ],
          paragraphs: [
            'Der Unterschied klingt technisch und entscheidet in der Praxis alles. Bei Google siehst du, dass eine Seite in KI-Oberflächen erschienen ist. Bei Bing siehst du zusätzlich, auf welche Frage sie geantwortet hat, und kannst daraus ableiten, was das System an dieser Seite nützlich fand.',
            'In unserem eigenen Export vom 30. Mai 2026 sah das so aus: Die fünf stärksten Grounding Queries waren Varianten derselben Frage nach Kennzahlen und Werkzeugen für KI-Sichtbarkeit und brachten zusammen 170 von 415 Citations. Ohne die Query-Ansicht wäre nur sichtbar gewesen, dass eine Seite gut läuft. Mit ihr war ablesbar, welche Begriffe in der Frage vorkommen mussten, damit sie läuft.',
            'Diese Ableitung lässt sich direkt in Arbeit umsetzen. Man liest die Grounding Queries, prüft, welche der darin enthaltenen Begriffe auf der eigenen Seite wörtlich definiert sind, und ergänzt die fehlenden. Bei Google fehlt für diesen Schritt die Grundlage, weil es keine Query-Dimension gibt.',
          ],
          stat:
            'Bing liefert die Frage, Google nur die Tatsache. Deshalb ist der kleinere Marktanteil in diesem Fall die bessere Datenquelle.',
          chart: {
            variant: 'column',
            title: 'Woher die 415 Citations kamen, Export vom 30. Mai 2026',
            axis: { title: 'Citations' },
            highlight: 'peak',
            points: [
              { label: 'Fünf Varianten derselben Frage', short: '5 Varianten', value: 170 },
              { label: 'Alle übrigen Grounding Queries', short: 'Alle übrigen', value: 245 },
            ],
            stats: [
              { label: 'Citations gesamt', value: '415' },
              { label: 'Anteil einer einzigen Frage', value: '41 Prozent' },
              { label: 'Sichtbar in der Search Console', value: 'nichts davon' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Herkunft', 'Citations'], sum: ['Summe', '415'] },
            caption:
              'Diese Aufteilung ist nur deshalb bekannt, weil Bing die Grounding Queries ausweist. Der Google-Bericht hätte für dieselbe Domain eine Impressionszahl gezeigt und keine Frage. Quelle: eigener Export der Bing Webmaster Tools.',
          },
        },
        {
          id: 'grenzen',
          heading: 'Was beide Konsolen nicht können',
          cards: [
            {
              title: 'Keine KI-CTR berechenbar',
              text:
                'Google liefert Impressionen für KI-Oberflächen, die zugehörigen Klicks liegen im Gesamtwert der Websuche und sind dort nicht markiert. Zähler und Nenner stehen in zwei verschiedenen Tabellen ohne verbindenden Schlüssel. Eine KI-CTR aus Search-Console-Daten allein ist damit nicht möglich.',
            },
            {
              title: 'Kein Blick auf ChatGPT, Claude, Perplexity',
              text:
                'Beide Konsolen decken nur die eigenen Oberflächen ab. Für ChatGPT, Claude und Perplexity gibt es keine Plattformkonsole. Dort bleiben dokumentierte Prompt-Tests oder ein Monitoring-Tool die einzige Option.',
            },
            {
              title: 'Keine Nennungen ohne Quelle',
              text:
                'Wird deine Marke im Antworttext genannt, ohne dass eine Quelle abgerufen wurde, erscheint das in keiner der beiden Statistiken. Gerade bei bekannten Marken ist das ein erheblicher Teil der tatsächlichen Wirkung.',
            },
            {
              title: 'Kurze Historie und Rollout-Lücken',
              text:
                'Googles Daten beginnen am 18. Mai 2026, ältere Werte gibt es nicht. Der Bericht wurde gestaffelt ausgerollt, und Google nennt drei Gründe für ein Fehlen: Property noch nicht im Rollout, zu wenige KI-Impressionen, oder die Website ist von den KI-Funktionen ausgeschlossen.',
            },
          ],
          warning: {
            title: 'Der Rückschluss, der regelmäßig falsch gezogen wird',
            text:
              'Steigende KI-Impressionen in der Search Console bedeuten nicht steigenden Umsatz und fallende Klicks bedeuten nicht, dass die KI-Sichtbarkeit schuld ist. Der Bericht kennt keine Klicks, keine CTR und keine Queries. Er misst Präsenz. Wer daraus einen Funnel rechnet, rechnet mit Zahlen, die der Bericht nicht enthält.',
          },
        },
        {
          id: 'praxis',
          heading: 'Die Auswertung, die wir monatlich fahren',
          intro:
            'Beide Konsolen zusammen brauchen etwa eine Stunde im Monat. Diese Reihenfolge hat sich bewährt, weil jeder Schritt die Frage des nächsten beantwortet.',
          steps: [
            {
              title: 'Bing-Citations exportieren, bevor das Fenster zu ist',
              text:
                'Die Standardansicht zeigt 30 Tage. Ältere Zeiträume sind nachträglich nicht rekonstruierbar, also gehört der Export in einen festen Monatstermin. Wir speichern beide Berichte, Seiten und Grounding Queries, als CSV mit Datum im Dateinamen.',
            },
            {
              title: 'Grounding Queries nach Intent filtern',
              text:
                'Seit Juni 2026 klassifiziert Bing die Queries unter anderem als Informational, Commercial, Navigational, Learn and Solve, Research, Creation und Local. Der Anteil kommerzieller Intents ist die wichtigere Zahl als die Gesamtsumme der Citations, weil er zeigt, ob die Sichtbarkeit kaufnah ist.',
            },
            {
              title: 'Gewinnerseiten identifizieren und die Begriffe abgleichen',
              text:
                'Für die zwei bis drei stärksten Seiten prüfen, welche Begriffe aus ihren Grounding Queries im Text wörtlich definiert sind. Fehlende Begriffe ergänzen, aber nur dort, wo sie sachlich hingehören. Das ist der direkteste Hebel im ganzen Prozess.',
            },
            {
              title: 'Googles KI-Impressionen als Reichweitenkontrolle danebenlegen',
              text:
                'Der Vergleich der Seitenlisten beider Konsolen ist der eigentliche Erkenntnisgewinn. Seiten, die Bing häufig zitiert und Google nicht ausspielt, haben in der Regel ein Indexierungs- oder Autoritätsproblem, kein Inhaltsproblem.',
            },
            {
              title: 'Neue oder geänderte Seiten per IndexNow melden',
              text:
                'IndexNow beschleunigt die Aufnahme bei Bing, Yandex, Seznam und Naver. Google nimmt nicht teil. Für Google bleibt die URL-Prüfung in der Search Console und eine erneut eingereichte Sitemap der Weg.',
            },
          ],
          note:
            'Wenn nur eine Stunde im Monat zur Verfügung steht, gehört sie in die Bing-Auswertung. Der Google-Bericht ist ohne Queries und Klicks vor allem eine Bestandsanzeige.',
        },
        {
          id: 'aktualisierung',
          heading: 'Eine Korrektur an der eigenen Aussage',
          paragraphs: [
            'In älteren Artikeln auf dieser Website steht, dass die Google Search Console keine KI-Sichtbarkeit zeigt. Das war bis Juni 2026 richtig und ist es seit dem Generative-AI-Bericht nur noch teilweise.',
            'Korrekt ist heute: Die Search Console zeigt, wie oft deine Seiten in AI Overviews und AI Mode erschienen sind. Sie zeigt nicht, für welche Fragen, mit welcher Klickwirkung und im Vergleich zu wem. Für die tägliche Optimierungsarbeit bleibt Bing damit die verwertbare Quelle, für die Frage nach Reichweite ist Google jetzt zuständig.',
            'Wir schreiben das hier ausdrücklich hin, weil Aussagen zu diesen Berichten in diesem Feld schnell veralten. Wer einen Text zu KI-Messung liest, sollte auf das Datum achten. Alles ohne Datum ist in diesem Thema unbrauchbar.',
          ],
          quote:
            'In der KI-Messung ist ein Text ohne Datum keine Quelle, sondern eine Behauptung.',
        },
      ]}
      faqs={[
        {
          q: 'Zeigt die Google Search Console jetzt KI-Sichtbarkeit?',
          a: 'Teilweise. Seit dem 3. Juni 2026 gibt es den Generative-AI-Performance-Bericht mit Impressionen aus AI Overviews und AI Mode, aufgeschlüsselt nach Seiten, Ländern, Geräten und Datum. Klicks, CTR, Position und Suchanfragen enthält der Bericht nicht. Die Daten beginnen am 18. Mai 2026, eine Rückrechnung auf frühere Zeiträume gibt es nicht.',
        },
        {
          q: 'Was sind Grounding Queries in den Bing Webmaster Tools?',
          a: 'Grounding Queries sind die Suchanfragen, die Copilot selbst formuliert, um Webinhalte für eine Antwort abzurufen. Sie entsprechen nicht dem Prompt des Nutzers, sondern einer vom System umgeschriebenen Version. Bing zeigt sie im AI-Performance-Bericht und ordnet sie seit März 2026 den zitierten Seiten zu, in beide Richtungen.',
        },
        {
          q: 'Welche Konsole ist für KI-Sichtbarkeit nützlicher?',
          a: 'Für die Optimierungsarbeit die Bing Webmaster Tools, weil sie die Grounding Queries, die Citation Share und seit Juni 2026 auch Intents und Topics zeigen. Die Google Search Console beantwortet die Reichweitenfrage, liefert aber keine Queries und keine Klickdaten für KI-Oberflächen. Wer beide hat, nutzt Bing zum Arbeiten und Google zum Kontrollieren.',
        },
        {
          q: 'Kann ich die CTR aus AI Overviews berechnen?',
          a: 'Nein, nicht aus Search-Console-Daten allein. Die KI-Impressionen stehen im Generative-AI-Bericht, die zugehörigen Klicks liegen unmarkiert im Gesamtwert der Websuche. Es fehlt der verbindende Schlüssel. Ein Näherungsweg ist, die KI-Impressionen mit Sitzungsdaten aus GA4 zu kombinieren, das bleibt aber eine Schätzung.',
        },
        {
          q: 'Warum sehe ich den Generative-AI-Bericht in meiner Property nicht?',
          a: 'Google nennt drei Gründe: Die Property ist noch nicht im gestaffelten Rollout, die Website hat zu wenige Impressionen in KI-Funktionen erhalten, oder sie ist von den generativen KI-Funktionen der Suche ausgeschlossen. Ein Opt-in gibt es nicht, der Bericht erscheint automatisch im Bereich Leistung.',
        },
        {
          q: 'Hilft IndexNow, damit Google meine Seiten in KI-Antworten zeigt?',
          a: 'Nein. IndexNow benachrichtigt Bing, Yandex, Seznam und Naver. Google nimmt am Protokoll nicht teil. Für Google bleiben die URL-Prüfung in der Search Console, eine aktuelle Sitemap und die üblichen Faktoren für Indexierung maßgeblich. IndexNow ist trotzdem sinnvoll, weil Bing die Quelle der auswertbaren Citation-Daten ist.',
        },
      ]}
      sources={[
        {
          label: 'Google Search Central Blog (3. Juni 2026)',
          text: 'Ankündigung der Search-Generative-AI-Performance-Berichte in der Search Console.',
          href: 'https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports',
        },
        {
          label: 'Google Search Console Hilfe',
          text:
            'Metriken und Dimensionen des Berichts, Definition der Impression als „how many times links to your site were shown to a user in a generative AI feature on Google Search“, abgedeckte Oberflächen AI Overviews und AI Mode, Zeilenlimit und Rollout-Hinweise.',
          href: 'https://support.google.com/webmasters/answer/16984139',
        },
        {
          label: 'Microsoft Bing Webmaster Blog (11. Februar 2026)',
          text: 'Start des AI-Performance-Berichts als Public Preview mit Citations, Seiten und Grounding Queries.',
          href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        },
        {
          label: 'Microsoft Bing Blog (Juni 2026)',
          text:
            'Intents, Topics, Citation Share und Compare in der Preview, inklusive Intent-Kategorien und der offiziellen Definition von Citation Share.',
          href: 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare',
        },
        {
          label: 'Eigene Daten',
          text:
            'Bing-Webmaster-Tools-Exporte für aiseo.hamburg vom 30.05.2026: 415 Citations auf 10 Seiten, 170 davon aus fünf Varianten derselben Grounding Query.',
        },
      ]}
      relatedArticles={[
        {
          title: 'Bing und Copilot: was 600 Citations verraten',
          description:
            'Die vollständige Auswertung unseres Bing-Exports: wie Copilot Quellen auswählt und das reproduzierbare Rezept dahinter.',
          href: '/wissen/bing-copilot-ki-sichtbarkeit',
          tag: 'Bing & Copilot',
        },
        {
          title: 'Citation Rate: Definition, Formel und Benchmarks',
          description: 'Warum aus dem Google-Bericht keine Citation Rate wird und was stattdessen geht.',
          href: '/wissen/citation-rate',
          tag: 'KPI',
        },
        {
          title: 'Google KI-Optimierung: was Google offiziell empfiehlt',
          description:
            'Googles eigene Empfehlungen für AI Overviews und AI Mode, und welche GEO-Mythen du streichen kannst.',
          href: '/wissen/google-ki-optimierung',
          tag: 'Google',
        },
        {
          title: 'AI-Visibility-Tools im Vergleich',
          description:
            'Wenn die kostenlosen Konsolen nicht reichen: sechs Monitoring-Tools nach Preis und Abdeckung.',
          href: '/wissen/ai-visibility-tools-vergleich',
          tag: 'Tools',
        },
      ]}
      ctaTitle="Beide Konsolen einmal gemeinsam ansehen"
      ctaText="Im kostenlosen 15-Minuten-Gespräch schauen wir in deine Bing- und Google-Daten und sortieren, welche Seiten zitiert werden und welche Google noch nicht einmal indexiert hat."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

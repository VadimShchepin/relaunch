import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function GeoVsSeoPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/geo-vs-seo"
      breadcrumbLabel="GEO vs SEO"
      eyebrow="Begriffe"
      title="GEO vs SEO vs AEO vs LLMO: vier Kürzel, ein Arbeitsfeld, klare Unterschiede"
      description="Generative Engine Optimization, Search Engine Optimization, Answer Engine Optimization und LLM Optimization werden ständig durcheinander benutzt, auch von Anbietern. Hier stehen die vier Definitionen nebeneinander, dazu die Messgröße jeder Disziplin und eine Entscheidungshilfe, welche davon dein Unternehmen wirklich braucht."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      summaryItems={[
        'SEO optimiert für Ranking in einer Ergebnisliste. GEO optimiert dafür, in einer generierten Antwort als Quelle vorzukommen. Das sind verschiedene Zielsysteme, nicht verschiedene Modewörter.',
        'AEO ist die engere Disziplin: Content so strukturieren, dass er als direkte Antwort taugt. GEO ist der breitere Begriff und schließt Autorität und Erwähnungen außerhalb der eigenen Domain ein.',
        'LLMO zielt auf die Markendarstellung im Modell selbst, also auch dort, wo gar keine Quelle abgerufen wird. Es ist die am schwersten messbare der vier Disziplinen.',
        'Technisch überschneiden sich alle vier zu etwa 70 Prozent. Crawlbarkeit, saubere Struktur und echte Expertise zahlen in jede Richtung.',
        'Im deutschen Markt sind zwei der Kürzel doppelt belegt: GEO trifft auf Geoportal und Geografie, AEO auf eine Bekleidungsmarke und einen Zollstatus. Das ist ein handfestes Problem für Titel und Anzeigentexte.',
      ]}
      sections={[
        {
          id: 'definitionen',
          heading: 'Die vier Definitionen, jeweils in einem Satz',
          intro:
            'Jede Definition steht hier so, dass sie ohne den Rest der Seite funktioniert. Das ist Absicht, denn genau so werden Definitionen zitiert.',
          definitions: [
            {
              term: 'SEO (Search Engine Optimization)',
              definition:
                'Die Optimierung von Inhalten und Technik mit dem Ziel, in der Ergebnisliste einer Suchmaschine möglichst weit oben zu ranken und einen Klick zu bekommen. Erfolgsmaß ist Position, Klick und Conversion.',
            },
            {
              term: 'GEO (Generative Engine Optimization)',
              definition:
                'Die Optimierung mit dem Ziel, in einer von KI generierten Antwort als Quelle abgerufen und genannt zu werden. Erfolgsmaß ist die Nennung selbst, nicht die Position, weil es keine Liste gibt, in der man stehen könnte.',
            },
            {
              term: 'AEO (Answer Engine Optimization)',
              definition:
                'Die Teilaufgabe innerhalb von GEO, Inhalte so zu formulieren und zu strukturieren, dass ein System sie als direkte Antwort auf eine konkrete Frage übernehmen kann. Erfolgsmaß ist, ob der eigene Absatz als Antwort erscheint.',
            },
            {
              term: 'LLMO (LLM Optimization)',
              definition:
                'Die Arbeit an der Darstellung einer Marke im Sprachmodell selbst, also auch in Antworten ohne Live-Abruf einer Quelle. Erfolgsmaß ist, ob und wie korrekt das Modell die Marke aus dem eigenen Wissen beschreibt.',
            },
            {
              term: 'AI SEO',
              definition:
                'Kein eigenständiges viertes Verfahren, sondern der im deutschen Markt gängige Sammelbegriff für GEO, AEO und LLMO zusammen. Wir verwenden ihn, weil Kunden danach suchen, und trennen die Disziplinen darunter.',
            },
          ],
        },
        {
          id: 'vergleichstabelle',
          heading: 'Die Tabelle: Ziel, Messgröße, Zielsystem',
          table: {
            headers: ['Disziplin', 'Ziel', 'Erfolgsmaß', 'Zielsystem', 'Wichtigster Hebel'],
            rows: [
              [
                'SEO',
                'Platz in der Ergebnisliste',
                'Position, Klicks, CTR',
                'Google, Bing als klassische Suche',
                'Relevanz und Links auf Keyword-Ebene',
              ],
              [
                'GEO',
                'Als Quelle in der Antwort erscheinen',
                'Citations, Citation Share',
                'AI Overviews, AI Mode, Copilot, Perplexity',
                'Zitierfähige Passagen plus Autorität',
              ],
              [
                'AEO',
                'Der eigene Absatz wird die Antwort',
                'Übernahme als Antworttext',
                'Antwortboxen, Assistenten, Sprachsuche',
                'Frageform, Struktur, Eindeutigkeit',
              ],
              [
                'LLMO',
                'Korrekte Marke im Modellwissen',
                'Mention Rate, Sentiment, Faktentreue',
                'ChatGPT, Claude, Gemini ohne Quellenabruf',
                'Erwähnungen auf fremden Domains über Zeit',
              ],
            ],
            caption:
              'Die Spalte Erfolgsmaß ist der praktische Unterschied. Wer GEO betreibt und SEO-Kennzahlen berichtet, bewertet die Arbeit mit dem falschen Maßstab.',
          },
        },
        {
          id: 'ueberschneidung',
          heading: 'Wo sich alles überschneidet, und wo eben nicht',
          paragraphs: [
            'Der größte Teil der Arbeit ist identisch. Eine Seite, die schnell lädt, crawlbar ist, eine klare Überschriftenstruktur hat und von jemandem geschrieben wurde, der das Thema kennt, funktioniert in allen vier Disziplinen. Wer bei SEO gründlich war, startet bei GEO nicht bei null.',
            'Die Unterschiede liegen an drei Stellen. Erstens beim Zuschnitt der Inhalte: SEO belohnt umfassende Seiten zu einem Keyword, GEO belohnt Passagen, die sich einzeln herauslösen lassen. Zweitens bei den Signalen von außen: SEO zählt Links, GEO und LLMO zählen auch reine Erwähnungen ohne Link. Drittens bei der Messung, und das ist der Punkt, an dem die meisten Projekte scheitern.',
            'Google hat für seine eigenen KI-Funktionen ausdrücklich klargestellt, dass keine speziellen Techniken nötig sind: kein llms.txt, kein Content-Chunking, kein Spezial-Schema. Dieselben Grundlagen wie für die normale Suche zählen. Für Bing und Copilot sieht die Lage anders aus, dort lassen sich über die Grounding Queries konkrete inhaltliche Hebel ablesen. Wer beide Systeme gleich behandelt, verschwendet Aufwand.',
          ],
          bullets: [
            'Gemeinsam: Crawlbarkeit, saubere Struktur, echte Expertise, Ladezeit, funktionierende interne Verlinkung.',
            'Nur GEO und AEO: Passagen, die ohne Kontext verständlich bleiben, definierte Fachbegriffe, Zahlen mit Datum.',
            'Nur GEO und LLMO: Erwähnungen auf fremden Domains, Verzeichnisse, Fachbeiträge, konsistente Entitätsdaten.',
            'Nur SEO: Keyword-Kannibalisierung, Snippet-Optimierung auf CTR, klassische Linkbewertung.',
            'Nur LLMO: Korrektur falscher Modellaussagen über die eigene Marke, was langsam und indirekt funktioniert.',
          ],
        },
        {
          id: 'namensfalle',
          heading: 'Die Namensfalle im deutschen Markt',
          intro:
            'Zwei der vier Kürzel sind im deutschen Suchraum doppelt belegt. Das ist kein Sprachdetail, sondern kostet Budget.',
          table: {
            headers: ['Kürzel', 'Was tatsächlich gesucht wird', 'Konsequenz'],
            rows: [
              [
                'GEO',
                'Geoportal, Geografie, das Magazin GEO, teils lokale Suche',
                'Nie allein im Titel verwenden, immer als „Generative Engine Optimization (GEO)“ ausschreiben',
              ],
              [
                'AEO',
                'Eine US-Bekleidungsmarke und der Zollstatus des zugelassenen Wirtschaftsbeteiligten',
                'Nur ausgeschrieben als „Answer Engine Optimization“ verwenden, in Anzeigen gar nicht',
              ],
              [
                'LLMO',
                'weitgehend eindeutig, aber sehr wenigen Entscheidern bekannt',
                'Als Fachbegriff nutzen, im Verkaufsgespräch erklären statt voraussetzen',
              ],
              [
                'AI SEO',
                'eindeutig und im deutschen Markt verstanden',
                'Der praktikable Oberbegriff für Titel und Gespräche',
              ],
            ],
            caption:
              'Aus unserer eigenen Keyword-Analyse über 297 deutsche Suchbegriffe zu diesem Feld. Die vollständige Auswertung mit Volumina steht in der Marktanalyse.',
          },
          warning: {
            title: 'Bezahlte Anzeigen auf die nackten Kürzel sind verbranntes Geld',
            text:
              'Die Erweiterungen zum Suchbegriff AEO liefern Jeans und Zollrecht, die zu GEO liefern Kartendienste und Universitätsangebote. Wer auf diese Begriffe bietet, bezahlt für Klicks von Menschen, die etwas völlig anderes wollten. Organisch lohnt sich die ausgeschriebene Form, bezahlt lohnen sich die eindeutigen Varianten.',
          },
        },
        {
          id: 'entscheidung',
          heading: 'Welche Disziplin brauchst du?',
          intro:
            'Vier Fälle, die in Gesprächen fast immer vorkommen. Die Reihenfolge ist bewusst pragmatisch und nicht nach Modernität sortiert.',
          steps: [
            {
              title: 'Du rankst nicht und wirst nicht gefunden: erst SEO',
              text:
                'Wenn deine Seiten nicht indexiert sind oder auf Position 60 stehen, ist GEO die falsche Baustelle. KI-Systeme greifen überwiegend auf indexierte, auffindbare Inhalte zu. Ohne diese Basis optimierst du für ein System, das dich nicht sieht.',
            },
            {
              title: 'Du rankst, aber die Klicks fallen: GEO',
              text:
                'Das klassische Muster 2026. Positionen stehen, Impressionen steigen, Klicks brechen weg, weil die Antwort oberhalb der Liste passiert. Hier zahlt sich Arbeit an zitierfähigen Passagen und an Erwähnungen außerhalb der eigenen Domain aus.',
            },
            {
              title: 'Deine Kunden stellen konkrete Fragen: AEO',
              text:
                'Typisch für Dienstleister mit Erklärungsbedarf und für alles mit Regeln, Fristen und Preisen. Wenn die Kundenfrage in einem Satz formulierbar ist, lohnt eine Seite, die genau diesen Satz abschließend beantwortet.',
            },
            {
              title: 'Die KI beschreibt dich falsch: LLMO',
              text:
                'Wenn ChatGPT deine Leistungen verwechselt, einen alten Firmennamen nennt oder dich einer falschen Branche zuordnet, hilft keine Seitenoptimierung allein. Dann braucht es konsistente Angaben über viele Quellen hinweg und Geduld über mehrere Modellzyklen.',
            },
          ],
          quote:
            'Die praktische Reihenfolge ist unverändert: erst gefunden werden, dann zitiert werden, dann korrekt beschrieben werden.',
        },
      ]}
      faqs={[
        {
          q: 'Was ist der Unterschied zwischen GEO und SEO?',
          a: 'SEO zielt darauf, in einer Ergebnisliste möglichst weit oben zu stehen und einen Klick zu erhalten. GEO zielt darauf, in einer von KI generierten Antwort als Quelle abgerufen und genannt zu werden. Der Unterschied liegt im Erfolgsmaß: Position und Klick bei SEO, Nennung und Citation bei GEO. Technisch überschneiden sich beide stark, weil KI-Systeme überwiegend auf indexierte Inhalte zugreifen.',
        },
        {
          q: 'Was ist der Unterschied zwischen GEO und AEO?',
          a: 'AEO ist die engere Disziplin und behandelt die Frage, wie Inhalte formuliert und strukturiert sein müssen, damit ein System sie als direkte Antwort übernimmt. GEO ist der breitere Begriff und schließt zusätzlich Autorität, Entitätsdaten und Erwähnungen außerhalb der eigenen Website ein. AEO ist damit ein Teil von GEO, nicht dessen Konkurrenz.',
        },
        {
          q: 'Was ist LLMO und wie unterscheidet es sich von GEO?',
          a: 'LLMO steht für LLM Optimization und arbeitet an der Darstellung einer Marke im Sprachmodell selbst, also auch in Antworten, für die keine Quelle abgerufen wird. GEO arbeitet dort, wo ein System aktiv Quellen sucht und zitiert. LLMO wirkt langsamer und über Modellzyklen, GEO wirkt schneller, weil es an abrufbaren Inhalten ansetzt.',
        },
        {
          q: 'Brauche ich noch SEO, wenn ich GEO mache?',
          a: 'Ja. KI-Systeme rufen überwiegend Inhalte ab, die auffindbar und indexiert sind. Wer nicht indexiert ist, wird auch nicht als Quelle gezogen. In der Praxis ist mangelnde Indexierung der häufigere Grund für fehlende KI-Sichtbarkeit als schlechter Content, und das ist eine klassische SEO-Aufgabe.',
        },
        {
          q: 'Ist AI SEO dasselbe wie GEO?',
          a: 'AI SEO ist im deutschen Markt der Sammelbegriff für GEO, AEO und LLMO zusammen. Es ist kein eigenes Verfahren, sondern die Bezeichnung, unter der Entscheider suchen. Für die Arbeit selbst lohnt es, die drei Disziplinen zu trennen, weil sie unterschiedliche Kennzahlen und unterschiedliche Maßnahmen haben.',
        },
        {
          q: 'Warum sollte ich GEO nie als einzelnes Wort im Seitentitel verwenden?',
          a: 'Weil der Suchbegriff im deutschen Markt eindeutig anders belegt ist: Geoportal, Geografie und das Magazin GEO dominieren die Ergebnisse. Wer den Titel auf das nackte Kürzel setzt, konkurriert mit Kartendiensten. Die ausgeschriebene Form „Generative Engine Optimization (GEO)“ löst das Problem und deckt beide Suchvarianten ab.',
        },
      ]}
      sources={[
        {
          label: 'Eigene Keyword-Analyse (Mai 2026)',
          text:
            '297 deutsche Suchbegriffe zu AEO, GEO und LLMO mit Suchvolumen und Wettbewerb, inklusive der drei doppelt belegten Kürzel. Vollständige Auswertung in unserer Marktanalyse.',
          href: 'https://aiseo.hamburg/wissen/aeo-geo-marktanalyse-deutschland-2026',
        },
        {
          label: 'Google Search Central',
          text:
            'Googles offizielle Aussage, dass für die eigenen KI-Funktionen dieselben SEO-Grundlagen gelten und keine speziellen Dateien, Chunking-Verfahren oder Spezial-Schemata nötig sind.',
          href: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
        {
          label: 'Microsoft Bing Blog (Juni 2026)',
          text:
            'Grounding Queries, Intents und Citation Share in den Bing Webmaster Tools als Grundlage für inhaltliche Ableitungen bei Copilot.',
          href: 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare',
        },
      ]}
      relatedArticles={[
        {
          title: 'Was ist GEO? Generative Engine Optimization erklärt',
          description: 'Die ausführliche Version zur Disziplin GEO, mit Vorgehen und Beispielen.',
          href: '/wissen/was-ist-geo',
          tag: 'GEO',
        },
        {
          title: 'AEO: Answer Engine Optimization im Detail',
          description: 'Wie du Inhalte so baust, dass sie zur direkten Antwort werden.',
          href: '/wissen/aeo-answer-engine-optimization',
          tag: 'AEO',
        },
        {
          title: 'AI SEO Marktanalyse Deutschland 2026',
          description:
            'Die Datenbasis zu diesem Artikel: 297 Keywords, drei Honigfallen und die Begriffe mit echtem Wachstum.',
          href: '/wissen/aeo-geo-marktanalyse-deutschland-2026',
          tag: 'Marktanalyse',
        },
        {
          title: 'SEO vs AI SEO: was du 2026 wirklich brauchst',
          description: 'Die Entscheidungshilfe aus Budgetsicht, wenn beides nicht gleichzeitig geht.',
          href: '/wissen/seo-vs-ai-seo',
          tag: 'Vergleich',
        },
      ]}
      ctaTitle="Welche der vier Disziplinen bringt dir gerade am meisten?"
      ctaText="Im kostenlosen 15-Minuten-Gespräch sortieren wir das an deinem Fall: ob du ein Indexierungsproblem, ein Zitierproblem oder ein Darstellungsproblem hast. Die drei brauchen sehr unterschiedliche Maßnahmen."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

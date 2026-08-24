import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function ShareOfVoiceKiPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/share-of-voice-ki"
      breadcrumbLabel="Share of Voice in KI"
      eyebrow="KPI-Definition"
      title="Share of Voice in KI-Antworten: die Formel, das Rechenbeispiel und die Grenzen"
      description="Share of Voice ist die einzige KI-Kennzahl, die deine Sichtbarkeit gegen den Wettbewerb stellt statt gegen dich selbst. Hier steht, wie sie berechnet wird, warum Microsofts Citation Share etwas anderes misst und an welchen drei Stellen die Zahl regelmäßig kippt."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      schemaImage="/images/wissen/share-of-voice-ki/hero.webp"
      summaryItems={[
        'Share of Voice misst deinen Anteil an allen Nennungen zu einem Thema, nicht deine Trefferquote. Der Nenner sind alle genannten Anbieter, nicht alle Prompts.',
        'Microsofts Citation Share ist die plattformseitige Variante: dein Anteil an allen Citations für dieselbe Grounding Query, über alle Websites hinweg gerechnet.',
        'Ohne feste Wettbewerber-Liste ist die Zahl nicht vergleichbar. Ein neuer Anbieter in der KI-Antwort senkt deinen Wert, ohne dass du etwas falsch gemacht hast.',
        'Positionsgewichtung entscheidet: an erster Stelle von drei genannt zu werden ist mehr wert als an neunter von zehn. Ungewichteter Share of Voice überschätzt schwache Nennungen.',
        'Bei aiseo.hamburg entschieden fünf Grounding-Query-Varianten desselben Themas über 170 von 415 Citations. Die Basis der Kennzahl ist damit viel schmaler, als eine breite Prompt-Liste vermuten lässt.',
      ]}
      sections={[
        {
          id: 'definition',
          heading: 'Definition und Formel',
          intro:
            'Share of Voice kommt aus der Mediaplanung und beschreibt dort den eigenen Anteil an der gesamten Werbepräsenz eines Marktes. In KI-Antworten wird derselbe Gedanke auf Nennungen übertragen.',
          definitions: [
            {
              term: 'Share of Voice in KI-Antworten',
              definition:
                'Dein Anteil an allen Anbieternennungen, die KI-Systeme über eine definierte Prompt-Liste hinweg ausgeben. Gezählt werden nicht Prompts, sondern Nennungen. Wenn eine Antwort fünf Anbieter nennt und du bist einer davon, ist dein Anteil an dieser Antwort ein Fünftel.',
              formula: 'Share of Voice = eigene Nennungen / alle Anbieternennungen über die Prompt-Liste',
            },
            {
              term: 'Gewichteter Share of Voice',
              definition:
                'Dieselbe Rechnung, aber jede Nennung wird mit ihrer Position in der Antwort gewichtet. Übliche Praxis: Position 1 zählt 1,0, Position 2 zählt 0,7, Position 3 zählt 0,5, alles danach 0,3. Die Gewichte sind eine Konvention, keine Naturkonstante, und müssen dokumentiert werden.',
              formula: 'Gewichteter SoV = Summe der gewichteten eigenen Nennungen / Summe aller gewichteten Nennungen',
            },
            {
              term: 'Citation Share (Bing)',
              definition:
                'Microsofts offizielle Metrik in den Bing Webmaster Tools: der Prozentsatz der Citations, die deiner Website zugeordnet werden, gemessen an allen Citations, die für dieselbe Grounding Query über alle Websites hinweg gezeigt wurden. Microsoft weist ausdrücklich darauf hin, dass die Ansicht rein beobachtend ist, keine Wettbewerber-Domains offenlegt und keinen Traffic-Anteil darstellt.',
            },
            {
              term: 'Share of Model',
              definition:
                'Ein in der Branche verbreiteter, nicht standardisierter Begriff für den Anteil an der im Modell gespeicherten Markenrepräsentation, also ohne Live-Abruf einer Quelle. Es gibt keine offizielle Messmethode dafür. Wer die Zahl in einem Angebot findet, sollte nach der Berechnung fragen.',
            },
          ],
        },
        {
          id: 'rechenbeispiel',
          heading: 'Rechenbeispiel: derselbe Datensatz, drei Ergebnisse',
          intro:
            'Angenommen, du testest 40 Prompts. Deine Marke wird 12 Mal genannt, insgesamt fallen über alle Antworten 150 Anbieternennungen. Je nach Methode kommen drei verschiedene Zahlen heraus, und alle drei sind rechnerisch korrekt.',
          chart: {
            variant: 'column',
            title: 'Dieselben 40 Prompts, zwei Nenner',
            axis: { unit: ' %', title: 'Ergebnis' },
            highlight: 'peak',
            points: [
              { label: 'Citation Rate, 12 von 40 Prompts', short: 'Rate', value: 30 },
              { label: 'Share of Voice, 12 von 150 Nennungen', short: 'SoV', value: 8 },
            ],
            stats: [
              { label: 'Getestete Prompts', value: '40' },
              { label: 'Eigene Nennungen', value: '12' },
              { label: 'Alle Anbieternennungen', value: '150' },
            ],
            table: false,
            caption:
              'Konstruiertes Rechenbeispiel, keine Messung: dieselben Testdaten, einmal mit Prompts im Nenner, einmal mit allen Anbieternennungen. Der gewichtete Wert liegt je nach Positionen zwischen 4 und 12 Prozent und steht in der Tabelle darunter.',
          },
          table: {
            headers: ['Methode', 'Rechnung', 'Ergebnis', 'Was die Zahl beantwortet'],
            rows: [
              [
                'Citation Rate',
                '12 Prompts mit Nennung von 40 Prompts',
                '30,0 Prozent',
                'Bei wie vielen Fragen komme ich überhaupt vor?',
              ],
              [
                'Share of Voice, ungewichtet',
                '12 Nennungen von 150 Nennungen',
                '8,0 Prozent',
                'Wie groß ist mein Anteil am gesamten Antwortraum?',
              ],
              [
                'Share of Voice, gewichtet',
                '7,4 gewichtete Punkte von 150 Nennungen mit Positionsgewicht',
                'je nach Positionen 4 bis 12 Prozent',
                'Wie sichtbar bin ich dort, wo gelesen wird?',
              ],
            ],
            caption:
              'Konstruiertes Beispiel zur Illustration der Formeln. Die Spanne beim gewichteten Wert zeigt, warum die Gewichte in jeden Report gehören.',
          },
          paragraphs: [
            'Der Sprung von 30 auf 8 Prozent ist der Grund, warum Agenturberichte so unterschiedlich aussehen können, obwohl sie dieselben Tests zeigen. Citation Rate klingt besser und wird deshalb häufiger berichtet. Share of Voice ist die härtere Zahl, weil sie den Wettbewerb im Nenner behält.',
            'Beide Werte gehören in denselben Report. Eine hohe Citation Rate bei niedrigem Share of Voice bedeutet: Du kommst fast immer vor, aber immer als einer von vielen. Das ist ein Positionierungsproblem, kein Sichtbarkeitsproblem, und braucht eine andere Maßnahme.',
          ],
        },
        {
          id: 'wettbewerber',
          heading: 'Die Wettbewerber-Liste ist die halbe Kennzahl',
          paragraphs: [
            'Share of Voice reagiert auf jede Veränderung im Feld. Taucht ein neuer Anbieter in den KI-Antworten auf, sinkt dein Anteil, ohne dass sich an deiner Seite etwas geändert hat. Verschwindet ein Wettbewerber, steigt dein Anteil, ohne dass du etwas getan hast.',
            'Deshalb braucht die Kennzahl zwei Listen, die beide dokumentiert und versioniert werden: die Prompt-Liste und die Liste der Anbieter, die im Nenner mitgezählt werden. Wir führen zusätzlich eine Spalte für neu aufgetauchte Namen. Diese Spalte ist oft der wertvollste Teil des Reports, weil sie zeigt, wen die Modelle gerade neu für relevant halten.',
            'Ein praktischer Fall aus unserer eigenen Auswertung: Bei der Frage, welche Hamburger Agentur AI SEO macht, nannten vier KI-Systeme in Summe elf verschiedene Anbieter. Sieben davon standen in keiner Wettbewerbsliste, die vorher existierte. Die eigene Marktdefinition und die Marktdefinition der Modelle waren nicht deckungsgleich.',
          ],
          warning: {
            title: 'Drei Fehler, die den Vergleich kippen lassen',
            text:
              'Erstens: Prompt-Liste und Wettbewerberliste gleichzeitig ändern, dann ist die Zeitreihe gebrochen. Zweitens: Nennungen ohne Quellenangabe mit verlinkten Citations in einen Topf werfen, das mischt Modellwissen mit Live-Abruf. Drittens: Über Plattformen hinweg mitteln. ChatGPT nennt typischerweise weniger Anbieter pro Antwort als Perplexity, also verschiebt schon ein anderer Plattform-Mix den Wert deutlich.',
          },
        },
        {
          id: 'wenige-fragen',
          heading: 'Warum wenige Fragen über fast alles entscheiden',
          intro:
            'Der Bing-Export für aiseo.hamburg vom 30. Mai 2026 zeigt, wie schmal die Basis in der Praxis ist.',
          stat:
            'Fünf Varianten derselben Grounding Query brachten 170 von 415 Citations. Eine einzige Themenformulierung entschied damit über 41 Prozent der gesamten Sichtbarkeit.',
          paragraphs: [
            'Die fünf Varianten unterschieden sich nur in der Wortreihenfolge und in einem angehängten Begriff. Für Copilot waren es fünf verschiedene Suchanfragen, inhaltlich war es eine einzige Frage: Wie messe ich KI-Sichtbarkeit, mit welchen Kennzahlen und mit welchen Tools.',
            'Für die Praxis folgt daraus eine unbequeme Priorisierung. Es lohnt sich mehr, die zwei oder drei Fragen, die dein Geschäft tatsächlich bringen, mit einer sehr guten Seite abzudecken, als zwanzig Themen mit mittelmäßigen Seiten zu bedienen. Der Share of Voice über eine breite Prompt-Liste sieht dabei schlechter aus, das Ergebnis ist besser.',
            'Seit Juni 2026 macht Bing diese Auswertung deutlich einfacher: Grounding Queries werden zu Topics geclustert und nach Intent klassifiziert, unter anderem in Informational, Commercial, Navigational, Learn and Solve, Research, Creation und Local. Damit lässt sich zuerst prüfen, ob die eigenen Citations überhaupt aus kaufnahen Intents kommen, bevor man an der Zahl selbst arbeitet.',
          ],
          bullets: [
            'Citations nach Intent filtern und den Anteil kommerzieller Intents als eigene Kennzahl führen.',
            'Themen-Cluster statt Einzelqueries betrachten. Fünf Varianten einer Frage sind eine Frage.',
            'Für jede Kernfrage genau eine Seite bestimmen, die gewinnen soll, statt drei Seiten, die konkurrieren.',
            'Citation Share aus Bing als Realitätscheck gegen den selbst berechneten Share of Voice halten.',
            'Neu auftauchende Wettbewerber protokollieren, auch wenn sie den eigenen Anteil senken.',
          ],
        },
        {
          id: 'steigern',
          heading: 'Was den Anteil tatsächlich erhöht',
          intro:
            'Share of Voice steigt auf zwei Wegen: Du wirst häufiger genannt, oder es werden insgesamt weniger andere genannt. Am zweiten Weg kannst du nur indirekt arbeiten, und zwar über Eindeutigkeit.',
          steps: [
            {
              title: 'Eine eindeutige Kategorie besetzen',
              text:
                'KI-Systeme nennen mehrere Anbieter, wenn sie nicht unterscheiden können. Wer als „Digitalagentur“ auftritt, landet in einer Liste von zwanzig. Wer als „KI-Sichtbarkeit für Hamburger Dienstleister“ auftritt, landet in einer Liste von drei. Die Nennungen werden weniger, der Anteil pro Nennung steigt.',
            },
            {
              title: 'Vergleichbare Fakten liefern',
              text:
                'Antworten, die mehrere Anbieter nebeneinander stellen, brauchen vergleichbare Attribute: Standort, Leistung, Preisrahmen, Nachweise. Fehlen diese Angaben auf deiner Seite, wirst du in Vergleichsantworten übersprungen, selbst wenn du sonst zitiert wirst.',
            },
            {
              title: 'Belege außerhalb der eigenen Domain aufbauen',
              text:
                'Die Reihenfolge in Antworten korreliert stärker mit Nennungen auf fremden Seiten als mit der eigenen Seitenqualität. Verzeichnisse, Fachbeiträge, Bewertungen und Presse verschieben die Position. Ein weiteres Kapitel im eigenen Blog tut das kaum.',
            },
            {
              title: 'Dieselbe Formel über Monate benutzen',
              text:
                'Der häufigste Grund für einen Sprung im Share of Voice ist eine geänderte Berechnung, nicht ein geänderter Markt. Formel, Gewichte, Prompt-Liste und Wettbewerberliste einmal festschreiben und Änderungen im Report ausweisen.',
            },
          ],
          quote:
            'Ein hoher Share of Voice entsteht seltener dadurch, dass man öfter genannt wird, als dadurch, dass weniger Andere in dieselbe Antwort passen.',
        },
      ]}
      faqs={[
        {
          q: 'Was ist Share of Voice in KI-Antworten?',
          a: 'Share of Voice ist dein Anteil an allen Anbieternennungen, die KI-Systeme über eine definierte Prompt-Liste hinweg ausgeben. Gezählt werden Nennungen, nicht Prompts: Nennt eine Antwort fünf Anbieter und du bist einer davon, entspricht das einem Fünftel dieser Antwort. Die Formel lautet eigene Nennungen geteilt durch alle Anbieternennungen.',
        },
        {
          q: 'Was ist der Unterschied zwischen Share of Voice und Citation Rate?',
          a: 'Citation Rate hat Prompts im Nenner und beantwortet die Frage, bei wie vielen Fragen du überhaupt vorkommst. Share of Voice hat alle Anbieternennungen im Nenner und beantwortet, wie groß dein Anteil am gesamten Antwortraum ist. Dieselben Testdaten ergeben deshalb regelmäßig sehr unterschiedliche Prozentwerte, im Rechenbeispiel oben 30 gegenüber 8 Prozent.',
        },
        {
          q: 'Wie unterscheidet sich Citation Share von Bing vom eigenen Share of Voice?',
          a: 'Citation Share wird von Microsoft berechnet und misst deinen Anteil an allen Citations für dieselbe Grounding Query über alle Websites hinweg. Du musst den Nenner nicht selbst definieren. Der selbst berechnete Share of Voice deckt dafür Plattformen ab, die keine Konsole anbieten, etwa ChatGPT, Claude und Perplexity. Microsoft weist darauf hin, dass Citation Share keine Wettbewerber-Domains offenlegt und keinen Traffic-Anteil darstellt.',
        },
        {
          q: 'Sollte ich Share of Voice gewichten?',
          a: 'Ja, wenn du die Zahl für Entscheidungen nutzt. An erster Stelle von drei genannt zu werden wirkt anders als an neunter Stelle von zehn, und der ungewichtete Wert behandelt beides gleich. Wichtig ist, dass die verwendeten Gewichte im Report stehen, weil sie eine Konvention sind und das Ergebnis stark verschieben können.',
        },
        {
          q: 'Wie oft sollte Share of Voice gemessen werden?',
          a: 'Monatlich, mit unveränderter Prompt- und Wettbewerberliste. Häufigere Messungen bilden vor allem die normale Schwankung von KI-Antworten ab. Seltenere Messungen machen es unmöglich, eine Veränderung einer Maßnahme zuzuordnen, weil in der Zwischenzeit auch Modellversionen wechseln.',
        },
        {
          q: 'Kann Share of Voice sinken, obwohl ich besser geworden bin?',
          a: 'Ja, und das ist der häufigste Fall bei wachsenden Märkten. Sobald KI-Systeme zusätzliche Anbieter für relevant halten, wächst der Nenner und dein Anteil sinkt, selbst wenn deine absoluten Nennungen steigen. Deshalb sollten absolute Nennungen und Anteil immer nebeneinander ausgewiesen werden.',
        },
      ]}
      sources={[
        {
          label: 'Microsoft Bing Blog (Juni 2026)',
          text:
            'Offizielle Definition von Citation Share, die Intent-Kategorien der neuen Ansicht und der Hinweis, dass die Auswertung keine Wettbewerber-Domains offenlegt und keinen Traffic-Anteil darstellt.',
          href: 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare',
        },
        {
          label: 'Microsoft Bing Webmaster Blog (Februar 2026)',
          text: 'Start des AI-Performance-Berichts inklusive Grounding Queries als eigener Ansicht.',
          href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        },
        {
          label: 'Eigene Daten',
          text:
            'AI-Search-Queries- und AI-Page-Stats-Export der Bing Webmaster Tools für aiseo.hamburg vom 30.05.2026: 415 Citations, davon 170 aus fünf Varianten derselben Grounding Query.',
        },
        {
          label: 'Eigene Auswertung (Mai 2026)',
          text:
            'Vergleichstest über vier KI-Systeme zur Frage nach AI-SEO-Agenturen in Hamburg, dokumentiert im Artikel zu den Hamburger Agenturen.',
          href: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-agenturen-hamburg-2026',
        },
      ]}
      relatedArticles={[
        {
          title: 'Citation Rate: Definition, Formel und Benchmarks',
          description:
            'Die Schwestermetrik mit Prompts im Nenner. Warum öffentliche Benchmarks nichts wert sind und was zwei echte Exporte zeigen.',
          href: '/wissen/citation-rate',
          tag: 'KPI',
        },
        {
          title: 'Wettbewerber KI-Sichtbarkeit analysieren',
          description:
            'Wie du herausfindest, warum die KI deinen Wettbewerber empfiehlt und wie du die Lücke schließt.',
          href: '/wissen/wettbewerber-ki-sichtbarkeit',
          tag: 'Wettbewerb',
        },
        {
          title: 'Bing und Copilot: was 600 Citations verraten',
          description:
            'Die Auswertung des echten Bing-Exports: wie Grounding Queries funktionieren und welche Seite fast 60 Prozent aller Zitate gewann.',
          href: '/wissen/bing-copilot-ki-sichtbarkeit',
          tag: 'Bing & Copilot',
        },
        {
          title: 'KI-Sichtbarkeit messen: Tools, KPIs und Methoden',
          description: 'Der Überblick über alle vier Messebenen und das passende Dashboard dazu.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Analytics',
        },
      ]}
      ctaTitle="Wie groß ist dein Anteil an den Antworten deiner Branche?"
      ctaText="Im kostenlosen 15-Minuten-Gespräch testen wir live, wen die KI bei den Fragen deiner Kunden nennt und an welcher Stelle du stehst. Danach weißt du, ob du ein Sichtbarkeits- oder ein Positionierungsproblem hast."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

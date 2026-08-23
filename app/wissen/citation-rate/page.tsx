import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function CitationRatePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/citation-rate"
      breadcrumbLabel="Citation Rate"
      eyebrow="KPI-Definition"
      title="Citation Rate: die wichtigste KPI der KI-Sichtbarkeit, richtig berechnet"
      description="Citation Rate klingt nach einer klaren Zahl und ist in der Praxis ein Sammelbegriff für vier verschiedene Metriken. Hier stehen die Definitionen, die Formeln und Messwerte aus zwei echten Bing-Webmaster-Tools-Exporten, statt der übliche Benchmark-Nebel."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      image={{
        src: '/images/wissen/citation-rate/hero.webp',
        alt: 'Laptop mit Analytics-Dashboard auf einem Holztisch im Morgenlicht',
        caption: 'Citation Rate ist die Kennzahl, die im Reporting am häufigsten falsch berechnet wird.',
        width: 1600,
        height: 800,
      }}
      summaryItems={[
        'Citation Rate ist der Anteil der geprüften Prompts, bei denen deine Domain als Quelle in der KI-Antwort auftaucht. Nenner sind Prompts, nicht Impressionen.',
        'Citation Share ist etwas anderes: Microsoft definiert sie offiziell als deinen Anteil an allen Citations, die für dieselbe Grounding Query über alle Websites hinweg ausgespielt werden.',
        'Citations verteilen sich extrem ungleich. In unserem Bing-Export vom 30. Mai 2026 entfielen 248 von 415 Citations auf eine einzige Seite, also knapp 60 Prozent.',
        'Öffentliche Citation-Rate-Benchmarks sind wertlos, weil niemand den Nenner offenlegt. Der einzige belastbare Vergleichswert ist dein eigener Vormonat.',
        'Google Search Console kann Citation Rate nicht liefern. Der neue Generative-AI-Bericht zeigt Impressionen, keine Prompts und keine Klicks.',
      ]}
      sections={[
        {
          id: 'definitionen',
          image: {
            src: '/images/wissen/citation-rate/definitionen.webp',
            alt: 'Notizbuch, Brille, Taschenrechner und Kaffee von oben auf einem Holztisch',
            caption: 'Vier Begriffe, vier Nenner. Wer sie vermischt, vergleicht Quartale, die nichts miteinander zu tun haben.',
            width: 1000,
            height: 668,
          },
          heading: 'Vier Metriken, die alle „Citation Rate“ genannt werden',
          intro:
            'Der Begriff wird in Angeboten, Tool-Dashboards und Agenturreports für vier verschiedene Dinge benutzt. Wer sie nicht trennt, vergleicht Quartale gegen Quartale, die nichts miteinander zu tun haben.',
          definitions: [
            {
              term: 'Citation Rate',
              definition:
                'Der Anteil deiner getesteten Prompts, bei dem deine Domain als verlinkte Quelle in der KI-Antwort erscheint. Der Nenner ist eine feste, dokumentierte Prompt-Liste. Ändert sich die Liste, ist der Wert nicht mehr mit dem Vormonat vergleichbar.',
              formula: 'Citation Rate = Prompts mit Quellenangabe deiner Domain / getestete Prompts',
            },
            {
              term: 'Mention Rate',
              definition:
                'Der Anteil der Prompts, bei dem dein Markenname im Antworttext vorkommt, auch ohne Link. Liegt bei etablierten Marken deutlich über der Citation Rate, weil LLMs Namen aus dem Modellwissen nennen, ohne dafür eine Quelle abzurufen.',
              formula: 'Mention Rate = Prompts mit Markennennung / getestete Prompts',
            },
            {
              term: 'Citation Share',
              definition:
                'Microsofts offizielle Definition aus den Bing Webmaster Tools: der Prozentsatz der Citations, die deiner Website zugeordnet werden, gemessen an allen Citations, die für dieselbe Grounding Query über alle Websites hinweg ausgespielt wurden. Das ist ein Wettbewerbsanteil, keine Trefferquote.',
              formula: 'Citation Share = Citations deiner Domain / alle Citations zu dieser Grounding Query',
            },
            {
              term: 'Citation Count',
              definition:
                'Die absolute Zahl, die Bing als „Total Citations“ ausweist. Nützlich für Trends, aber ohne Kontext irreführend: 400 Citations in einer Nischenfrage sind mehr wert als 4.000 in einem generischen Thema, das keine Kunden bringt.',
            },
          ],
          note:
            'Faustregel für Angebote: Wer eine Citation Rate nennt, ohne die Prompt-Liste mitzuliefern, nennt keine Kennzahl, sondern eine Stimmung.',
        },
        {
          id: 'nenner-problem',
          image: {
            src: '/images/wissen/citation-rate/nenner-problem.webp',
            alt: 'Aufgeklapptes Notebook mit Diagrammen, Brille und Notizblock von oben',
            caption: 'Die Prompt-Liste ist der Kern der Kennzahl, nicht das Ergebnis.',
            width: 1000,
            height: 667,
          },
          heading: 'Das Nenner-Problem: warum 40 Prozent nichts bedeuten',
          paragraphs: [
            'Eine Citation Rate von 40 Prozent klingt gut. Sie ist trivial zu erzeugen: Nimm 20 Prompts, die deinen Markennamen enthalten, frag ChatGPT danach, und du landest schnell über 50 Prozent. Nimm stattdessen 100 Prompts, die ein Kunde ohne Vorkenntnis eingeben würde, und derselbe Kunde landet oft bei 2 Prozent.',
            'Beide Zahlen sind formal korrekt berechnet. Nur eine davon sagt etwas über Neukunden. Deshalb ist die Prompt-Liste der eigentliche Kern der Kennzahl und nicht das Ergebnis.',
            'Eine belastbare Liste besteht zu mindestens 70 Prozent aus Prompts ohne deinen Markennamen: Kategorie-Fragen, Problem-Fragen, Vergleichsfragen, lokale Fragen. Markenabfragen gehören dazu, aber als eigene Gruppe, die getrennt ausgewertet wird.',
          ],
          table: {
            headers: ['Prompt-Typ', 'Beispiel', 'Anteil an der Liste', 'Was der Wert aussagt'],
            rows: [
              [
                'Kategorie',
                '„Welche Agentur in Hamburg macht AI SEO?“',
                '35 Prozent',
                'Ob du überhaupt im Kandidatenkreis bist',
              ],
              [
                'Problem',
                '„Meine Firma erscheint nicht in ChatGPT, was tun?“',
                '25 Prozent',
                'Ob dein Content als Antwort taugt',
              ],
              [
                'Vergleich',
                '„Unterschied zwischen GEO und SEO“',
                '15 Prozent',
                'Ob du bei Definitionsfragen zitierfähig bist',
              ],
              [
                'Lokal',
                '„KI-Sichtbarkeit Beratung Hamburg“',
                '15 Prozent',
                'Ob deine lokalen Signale greifen',
              ],
              [
                'Marke',
                '„Was ist aiseo.hamburg?“',
                '10 Prozent',
                'Ob das Modell dich korrekt beschreibt',
              ],
            ],
            caption:
              'Eine Prompt-Liste, die diese Verteilung hält, liefert über Monate vergleichbare Werte. Änderungen an der Liste gehören dokumentiert und brechen die Zeitreihe.',
          },
        },
        {
          id: 'echte-zahlen',
          image: {
            src: '/images/wissen/citation-rate/echte-zahlen.webp',
            alt: 'Arbeitsplatz mit Notebook und Balkendiagramm auf dem Bildschirm',
            caption: '415 Citations, davon 248 auf einer einzigen Seite. Beides aus demselben 30-Tage-Fenster.',
            width: 1000,
            height: 667,
          },
          heading: 'Was zwei echte Exporte zeigen',
          intro:
            'Die folgenden Zahlen kommen aus Bing-Webmaster-Tools-Exporten von zwei Domains, die wir selbst betreuen. Sie sind der Grund, warum wir öffentliche Benchmarks nicht mehr zitieren.',
          stat:
            'Auf beiden Domains gewinnt eine einzige Seite den größten Teil aller Citations: 59,8 Prozent bei aiseo.hamburg, 21,3 Prozent bei dsgvoschulfotos.de.',
          table: {
            headers: ['Domain', 'Export-Datum', 'Citations gesamt', 'Zitierte Seiten', 'Top-Seite', 'Anteil Top-3'],
            rows: [
              [
                'aiseo.hamburg',
                '30.05.2026',
                '415',
                '10',
                '248 Citations auf /wissen/ki-sichtbarkeit-messen',
                '85,8 Prozent',
              ],
              [
                'dsgvoschulfotos.de',
                '06.06.2026',
                '211',
                '16',
                '45 Citations auf /dsgvo-schule-apps',
                '47,4 Prozent',
              ],
            ],
            caption:
              'Eigene Auswertung der AI-Page-Stats-Berichte aus den Bing Webmaster Tools. Die Summe der Seitenwerte ergibt jeweils den Gesamtwert, es wurde nichts hochgerechnet.',
            note:
              'Die Werte sind Momentaufnahmen der jeweiligen 30-Tage-Fenster und nicht als Prognose für andere Domains gedacht.',
          },
          paragraphs: [
            'Die Verteilung folgt keinem Mittelwert, sondern einer steilen Kurve. Bei aiseo.hamburg tragen drei von zehn zitierten Seiten fast 86 Prozent der Citations. Der Rest liegt im einstelligen Bereich, obwohl es sich um vergleichbar lange, vergleichbar sorgfältig geschriebene Artikel handelt.',
            'Für die Planung heißt das: Eine durchschnittliche Citation Rate über alle Seiten ist keine nützliche Größe. Interessant ist, welche einzelne Seite gewinnt und warum. Bei aiseo.hamburg ist es ein Artikel, der Fachbegriffe explizit definiert, Tools namentlich nennt und Zahlen mit Datum liefert. Bei dsgvoschulfotos.de ist es eine Seite, die eine konkrete Rechtsfrage für einen konkreten Anwendungsfall beantwortet.',
            'Die zweite Beobachtung ist unbequemer: Die stärkste Citation-Seite bei aiseo.hamburg war zum Zeitpunkt des Exports bei Google unter „Erkannt, zurzeit nicht indexiert“ gelistet. Bing zitierte eine Seite hunderte Male, die Google noch nicht im Index hatte. Citation Rate und Google-Ranking sind zwei getrennte Systeme.',
          ],
        },
        {
          id: 'messen',
          image: {
            src: '/images/wissen/citation-rate/messen.webp',
            alt: 'Notebook mit Kennzahlen-Übersicht neben einer Kaffeetasse',
            caption: 'Nur eine Quelle meldet Citations direkt von der Plattform. Alles andere ist Stichprobe.',
            width: 1000,
            height: 804,
          },
          heading: 'Wo du die Zahl tatsächlich herbekommst',
          intro:
            'Es gibt genau eine Quelle, die Citations direkt von der Plattform meldet. Alles andere ist Stichprobe oder Schätzung.',
          cards: [
            {
              title: 'Bing Webmaster Tools, AI Performance',
              text:
                'Seit dem 11. Februar 2026 als Public Preview verfügbar. Meldet Total Citations, durchschnittlich zitierte Seiten pro Tag, die Grounding Queries und die Zuordnung Query zu Seite. Seit Juni 2026 zusätzlich Intents, Topics, Citation Share und einen Zeitraumvergleich. Kostenlos, verifizierte Property genügt.',
            },
            {
              title: 'Google Search Console, Generative AI',
              text:
                'Seit dem 3. Juni 2026 im Rollout. Zeigt Impressionen in AI Overviews und AI Mode, aufgeschlüsselt nach Seiten, Ländern, Geräten und Datum. Keine Klicks, keine CTR, keine Position, keine Queries. Für Citation Rate ungeeignet, weil der Nenner fehlt.',
            },
            {
              title: 'Eigene Prompt-Tests',
              text:
                'Der einzige Weg, Citation Rate für ChatGPT, Claude und Perplexity zu bekommen. Feste Liste, gleicher Wortlaut, dokumentiertes Datum, mindestens 50 Prompts. Antworten schwanken, deshalb zählt nur die Serie über Monate, nicht der einzelne Test.',
            },
            {
              title: 'Monitoring-Tools',
              text:
                'Ahrefs Brand Radar, Semrush AI Visibility Toolkit, Peec AI, Profound, Otterly.ai und Scrunch AI automatisieren genau diese Prompt-Tests. Sie ersetzen die Arbeit, nicht die Methodik: Der Nenner bleibt eine Prompt-Liste, die jemand definieren muss.',
            },
          ],
          warning: {
            title: 'Der Fehler, der jeden Report wertlos macht',
            text:
              'Absolute Citations aus Bing und die Citation Rate aus Prompt-Tests in eine Tabelle zu schreiben und daraus einen Trend zu bilden. Bing zählt tatsächliche Ausspielungen in einem 30-Tage-Fenster, Prompt-Tests zählen Treffer in einer künstlichen Stichprobe. Die beiden Zahlen bewegen sich unabhängig voneinander. Wenn Bings Citations steigen, während die Prompt-Test-Rate fällt, ist das kein Widerspruch, sondern normal.',
          },
        },
        {
          id: 'benchmarks',
          heading: 'Warum wir keine Branchen-Benchmarks nennen',
          paragraphs: [
            'Die im Netz kursierenden Zahlen für „gute“ Citation Rates liegen zwischen 5 und 40 Prozent. Keine dieser Angaben nennt die Prompt-Liste, die Plattform, das Land und den Messzeitpunkt zusammen. Ohne diese vier Angaben ist der Wert nicht reproduzierbar.',
            'Zusätzlich sind fast alle öffentlichen Tool- und Benchmark-Vergleiche von Anbietern veröffentlicht, die selbst ein konkurrierendes Produkt verkaufen. Das macht die Zahlen nicht automatisch falsch, aber es erklärt, warum die eigene Software in jedem Vergleich gewinnt.',
            'Der brauchbare Vergleichswert ist dein eigener Vormonat mit unveränderter Prompt-Liste. Der zweitbeste ist die Citation Share aus den Bing Webmaster Tools, weil Microsoft dort selbst gegen alle anderen Websites rechnet und du den Nenner nicht selbst bauen musst.',
          ],
          bullets: [
            'Prompt-Liste einmal festlegen, versionieren und mindestens sechs Monate stabil halten.',
            'Citation Rate, Mention Rate und Citation Share getrennt ausweisen, nie zu einer Zahl addieren.',
            'Plattform immer mitschreiben. Eine Rate über ChatGPT, Perplexity und Copilot hinweg ist ein Mischwert ohne Aussage.',
            'Datum und Modellversion notieren. Ein Modellwechsel erklärt mehr Ausschläge als jede Optimierung.',
            'Bing-Citations monatlich exportieren. Die Daten sind rückwirkend nicht verfügbar, wenn du das Fenster verpasst.',
          ],
        },
        {
          id: 'verbessern',
          heading: 'Was die Citation Rate tatsächlich bewegt',
          intro:
            'Aus dem Vergleich der Gewinnerseiten auf beiden Domains lassen sich vier wiederkehrende Merkmale ablesen. Es sind keine Tricks, sondern Eigenschaften, die eine Seite für ein Retrieval-System nutzbar machen.',
          steps: [
            {
              title: 'Fachbegriffe im Text definieren, nicht voraussetzen',
              text:
                'Die Gewinnerseite bei aiseo.hamburg erklärt Share of Voice, Citation Rate und Crawler-Frequenz jeweils in einem Satz, der ohne den Rest der Seite funktioniert. Genau solche Sätze zitieren KI-Systeme, weil sie sich isolieren lassen.',
            },
            {
              title: 'Tools und Institutionen namentlich nennen',
              text:
                'Grounding Queries enthalten Produktnamen. Wer „verschiedene Monitoring-Lösungen“ schreibt, matcht auf keine Query. Wer Ahrefs Brand Radar, Semrush AI Visibility Toolkit und GA4 nennt, matcht auf drei.',
            },
            {
              title: 'Zahlen mit Datum und Quelle liefern',
              text:
                'Eine Zahl ohne Datum ist für ein Retrieval-System kaum verwertbar, weil sie nicht datiert werden kann. „248 von 415 Citations, Export vom 30. Mai 2026“ ist zitierfähig. „Die Mehrheit unserer Citations“ ist es nicht.',
            },
            {
              title: 'Eine Frage pro Abschnitt beantworten',
              text:
                'Beide Gewinnerseiten sind so gegliedert, dass jeder Abschnitt genau eine Frage abschließend beantwortet. Das ist der Unterschied zwischen einem Text, aus dem ein System einen Absatz entnehmen kann, und einem Text, den es überspringt.',
            },
          ],
          quote:
            'Die Seite mit der höchsten Citation Rate ist auf beiden Domains nicht die beste Verkaufsseite, sondern die präziseste Definitionsseite.',
        },
      ]}
      faqs={[
        {
          q: 'Was ist Citation Rate?',
          a: 'Citation Rate ist der Anteil der getesteten Prompts, bei dem deine Domain als Quelle in einer KI-Antwort erscheint. Die Formel lautet: Prompts mit Quellenangabe deiner Domain geteilt durch die Zahl der getesteten Prompts. Entscheidend ist der Nenner: Ohne eine feste, dokumentierte Prompt-Liste ist die Zahl nicht vergleichbar.',
        },
        {
          q: 'Was ist der Unterschied zwischen Citation Rate und Citation Share?',
          a: 'Citation Rate misst deine Trefferquote über eine eigene Prompt-Liste. Citation Share ist Microsofts offizielle Metrik aus den Bing Webmaster Tools und misst den Prozentsatz der Citations, die deiner Website zugeordnet werden, gemessen an allen Citations für dieselbe Grounding Query über alle Websites hinweg. Citation Rate ist eine Trefferquote, Citation Share ein Wettbewerbsanteil.',
        },
        {
          q: 'Was ist eine gute Citation Rate?',
          a: 'Es gibt keinen belastbaren Branchenwert, weil öffentliche Angaben die zugrunde liegende Prompt-Liste nicht offenlegen. Ein Wert ist nur im Vergleich zum eigenen Vormonat mit identischer Prompt-Liste aussagekräftig. Wer dir eine Zielzahl nennt, ohne nach deiner Prompt-Liste zu fragen, rät.',
        },
        {
          q: 'Kann ich Citation Rate in der Google Search Console sehen?',
          a: 'Nein. Der seit dem 3. Juni 2026 ausgerollte Generative-AI-Bericht zeigt ausschließlich Impressionen in AI Overviews und AI Mode, aufgeschlüsselt nach Seiten, Ländern, Geräten und Datum. Es gibt keine Klicks, keine CTR, keine Position und keine Queries. Für eine Citation Rate fehlt damit der Nenner.',
        },
        {
          q: 'Welches Tool liefert Citations direkt von der Plattform?',
          a: 'Die Bing Webmaster Tools. Der AI-Performance-Bericht ist seit dem 11. Februar 2026 als Public Preview verfügbar und meldet Total Citations, die zitierten Seiten und die Grounding Queries, die zu den Citations geführt haben. Seit Juni 2026 kommen Intents, Topics, Citation Share und ein Zeitraumvergleich dazu. Alle anderen Plattformen lassen sich nur über Prompt-Tests annähern.',
        },
        {
          q: 'Wie viele Prompts brauche ich für eine belastbare Citation Rate?',
          a: 'Mindestens 50, besser 100. KI-Antworten schwanken zwischen Sessions, deshalb bildet eine kleine Stichprobe vor allem Zufall ab. Wichtiger als die Menge ist, dass mindestens 70 Prozent der Prompts deinen Markennamen nicht enthalten, weil sonst nur gemessen wird, dass du deinen eigenen Namen kennst.',
        },
      ]}
      sources={[
        {
          label: 'Microsoft Bing Blog (Juni 2026)',
          text:
            'Definition von Citation Share: „the percentage of citations attributed to your site out of all citations shown across all sites for that same grounding query“. Außerdem die neuen Ansichten Intents, Topics und Compare.',
          href: 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare',
        },
        {
          label: 'Microsoft Bing Webmaster Blog (Februar 2026)',
          text: 'Ankündigung des AI-Performance-Berichts als Public Preview, inklusive Metrikliste.',
          href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        },
        {
          label: 'Google Search Central Blog (Juni 2026)',
          text: 'Einführung der Search-Generative-AI-Performance-Berichte in der Search Console.',
          href: 'https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports',
        },
        {
          label: 'Google Search Console Hilfe',
          text:
            'Metriken und Dimensionen des Generative-AI-Berichts: Impressionen, Seiten, Länder, Datum, Geräte. Abgedeckte Oberflächen sind AI Overviews und AI Mode.',
          href: 'https://support.google.com/webmasters/answer/16984139',
        },
        {
          label: 'Eigene Daten',
          text:
            'AI-Page-Stats-Exporte der Bing Webmaster Tools für aiseo.hamburg (30.05.2026, 415 Citations auf 10 Seiten) und dsgvoschulfotos.de (06.06.2026, 211 Citations auf 16 Seiten).',
        },
      ]}
      relatedArticles={[
        {
          title: 'Share of Voice in KI-Antworten berechnen',
          description:
            'Die Schwestermetrik: Anteil an der Antwort statt Trefferquote. Formel, Wettbewerbsvergleich und die Grenzen der Zahl.',
          href: '/wissen/share-of-voice-ki',
          tag: 'KPI',
        },
        {
          title: 'Search Console vs Bing Webmaster Tools',
          description:
            'Welche Konsole zeigt KI-Sichtbarkeit wirklich? Was Google seit Juni 2026 liefert und was Bing seit Februar 2026 kann.',
          href: '/wissen/gsc-vs-bing-webmaster-tools',
          tag: 'Messung',
        },
        {
          title: 'KI-Sichtbarkeit messen: Tools, KPIs und Methoden',
          description:
            'Der Überblick über alle vier Messebenen: Referral-Traffic, Crawler-Aktivität, Brand Mentions und Prompt-Tests.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Analytics',
        },
        {
          title: 'AI-Visibility-Tools im Vergleich',
          description:
            'Was Ahrefs Brand Radar, Semrush, Peec AI, Profound, Otterly.ai und Scrunch AI kosten und wo ihre blinden Flecken liegen.',
          href: '/wissen/ai-visibility-tools-vergleich',
          tag: 'Tools',
        },
      ]}
      ctaTitle="Wie hoch ist deine Citation Rate wirklich?"
      ctaText="Wir prüfen im kostenlosen 15-Minuten-Gespräch live, ob ChatGPT und Perplexity dich bei den Fragen deiner Kunden nennen. Keine Hausaufgaben vorher, kein Verkaufsgespräch danach."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

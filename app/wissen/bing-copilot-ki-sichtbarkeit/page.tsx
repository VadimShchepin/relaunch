import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function BingCopilotKiSichtbarkeitPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/bing-copilot-ki-sichtbarkeit"
      breadcrumbLabel="Bing & Copilot KI-Sichtbarkeit"
      eyebrow="Eigene Daten"
      title="Bing & Copilot: Was 415 Citations über Microsofts KI verraten"
      description="Wir haben unseren eigenen Bing-Webmaster-Tools-Export ausgewertet. Eine einzige Seite gewann fast 60 Prozent aller Zitate. Hier ist, warum Microsoft Copilot sie auswählt, und das Rezept, das du kopieren kannst."
      schemaImage="/images/wissen/bing-copilot-ki-sichtbarkeit/hero-copilot-visibility.png"
      publishedAt="2026-05-30"
      modifiedAt="2026-08-24"
      summaryItems={[
        'Eine Seite gewann 248 von 415 Citations, fast 60 Prozent. Nur 10 von 42 Artikeln wurden überhaupt zitiert. Die Verteilung ist extrem ungleich.',
        'Copilot zeigt dir seine Grounding Queries. In den Bing Webmaster Tools siehst du, mit welchen Stichwörtern die KI intern sucht. Das tut sonst kein System.',
        'Begriffsdichte schlägt Struktur. Die Gewinnerseite definierte als Einzige alle Fachbegriffe der Grounding Query, nannte echte Tools und lieferte zu jeder Kennzahl eine Zahl.',
        'Das Bing-Rezept ist nicht das Google-Rezept. Was Google für unnötig erklärt, war auf Bing entscheidend. Optimiere jede Engine nach ihren eigenen Regeln.',
      ]}
      sections={[
        {
          id: 'die-daten',
          heading: 'Die Daten: ein echter Bing-Export, keine Theorie',
          intro:
            'Die meisten GEO-Ratgeber zitieren Studien. Dieser Artikel zitiert unsere eigenen Zahlen: drei Berichte aus dem Bereich AI Performance der Bing Webmaster Tools für aiseo.hamburg, Zeitraum Ende Februar bis Ende Mai 2026.',
          stat:
            'Citations standen von Februar bis April nahe null. Mitte Mai 2026 explodierten sie: einzelne Tage erreichten 41, 41, 35 und 49 Citations.',
          paragraphs: [
            'Die Verteilung pro Seite war kein gleichmäßiger Anstieg, sondern ein klarer Sieger. So sahen die zitierten Seiten aus.',
          ],
          chart: {
            variant: 'row',
            title: 'Copilot-Citations pro Seite, Februar bis Mai 2026',
            axis: { title: 'Citations' },
            highlight: 'peak',
            points: [
              { label: '/wissen/ki-sichtbarkeit-messen', value: 248 },
              { label: '/wissen/ki-sichtbarkeit', value: 63 },
              { label: '/wissen/ki-sichtbarkeit-ecommerce', value: 45 },
              { label: '/wissen/sichtbarkeit-in-chatgpt', value: 17 },
              { label: '/wissen/technische-ki-sichtbarkeit', value: 11 },
              { label: 'restliche zitierte Seiten (5)', value: 31 },
            ],
            stats: [
              { label: 'Citations gesamt', value: '415' },
              { label: 'Zitierte Seiten', value: '10 von 42' },
              { label: 'Anteil der Top-URL', value: '59,8 Prozent' },
            ],
            table: { label: 'Citations als Tabelle', heads: ['Seite', 'Citations'], sum: ['Summe', '415'] },
            caption:
              '415 Citations, verteilt auf 10 Seiten. Eine davon allein 248. Die anderen 32 Artikel der Wissensdatenbank bekamen null. Quelle: eigener Export, AI Page Stats.',
          },
          quote:
            'Die Frage ist nicht, warum so viel Traffic kommt. Die Frage ist, was diese eine Seite anders macht.',
        },
        {
          id: 'die-drei-berichte',
          heading: 'Die drei Bing-AI-Berichte',
          intro:
            'Alle Zahlen dieses Artikels stammen aus diesen drei Berichten. Sie sind kostenlos, sie sind pro Property abrufbar, und sie sind das einzige Fenster in den Retriever einer großen KI.',
          definitions: [
            {
              term: 'AI Performance Overview',
              definition:
                'Tägliche Citations und Cited Pages. Zeigt den Trend und damit, ob deine Arbeit überhaupt ankommt.',
            },
            {
              term: 'AI Page Stats',
              definition:
                'Citations pro einzelner URL. Zeigt, welche Seite gewinnt, und macht die extrem ungleiche Verteilung sichtbar.',
            },
            {
              term: 'AI Search Queries',
              definition:
                'Die Grounding Queries mit Zitatzahl. Zeigt, wonach Copilot intern sucht, nicht was Nutzer eingetippt haben.',
            },
          ],
        },
        {
          id: 'wie-copilot-auswaehlt',
          heading: 'Wie Microsoft Copilot Quellen auswählt',
          intro:
            'Copilot beantwortet eine Frage über Retrieval-Augmented Generation auf dem Bing-Index. Dein Prompt wird nicht wortwörtlich gesucht. Copilot schreibt ihn in eine oder mehrere Grounding Queries um (ein Query Fan-out), holt für jede passende Textpassagen aus dem Index und zitiert die Passagen, die es tatsächlich verwendet hat.',
          paragraphs: [
            'Der entscheidende Punkt: Diese Grounding Queries sind maschinell erzeugt und stichwortdicht. Sie bündeln das Fachvokabular eines Themas in eine lange Zeichenkette. In unseren Daten sahen die häufigsten Grounding Queries so aus.',
          ],
          code: {
            label: 'Grounding Queries aus unserem Export (Auszug)',
            lines: [
              'KI SEO Sichtbarkeit Citation Rate Share of Voice Tools Keyword Ranking ersetzen',
              'KI Sichtbarkeit Überwachung ChatGPT Gemini Perplexity Tools Methoden',
              'Share of Voice Wettbewerber KI Antworten messen Lösungen',
            ],
          },
          quote:
            'Lies diese Zeichenketten als Einkaufsliste. Copilot sucht eine Seite, die Citation Rate und Share of Voice und Tools und den Kontrast zu Keyword Ranking ersetzen auf einmal bedient. Wer das am vollständigsten tut, wird zitiert.',
        },
        {
          id: 'vier-begriffe',
          heading: 'Vier Begriffe, die Copilot bündelt (definiert)',
          intro:
            'Diese vier Begriffe tauchen in den Grounding Queries immer wieder auf. Wer sie auf der eigenen Seite nicht definiert, bedient die Query nicht.',
          definitions: [
            {
              term: 'Grounding Query',
              definition:
                'Die interne Suchanfrage, die Copilot an den Bing-Index stellt. Sichtbar im Bericht AI Search Queries.',
            },
            {
              term: 'Citation',
              definition: 'Eine konkrete Zitierung deiner Seite in einer Copilot-Antwort.',
            },
            {
              term: 'Cited Pages',
              definition:
                'Anzahl unterschiedlicher Seiten, die an einem Tag zitiert wurden. Steigt, wenn dein Themen-Hub breiter zitierbar wird.',
            },
            {
              term: 'Citation Rate',
              definition:
                'Anteil relevanter Prompts, bei denen du zitiert wirst. Top-Marken erreichen 20 bis 40 Prozent in ihrer Nische.',
              formula: 'Citation Rate = Prompts mit Nennung / relevante Prompts',
            },
          ],
        },
        {
          id: 'das-rezept',
          heading: 'Warum eine Seite fast 60% gewann: das Rezept in 5 Teilen',
          intro:
            'Wir haben die Begriffsdichte aller 42 Seiten gemessen. Die Gewinnerseite war die einzige, die alle fünf Elemente auf einer URL vereinte.',
          steps: [
            {
              title: 'Fachbegriffe als definierte Einheiten',
              text:
                'Jeder Schlüsselbegriff bekommt eine eigene Überschrift, gefolgt von einer Ein-Satz-Definition und einer Zahl. Share of Voice wurde sechsmal verwendet, jeweils mit Formel oder Beispiel. Copilots Grounding Queries bestehen aus genau diesen Begriffen, also müssen sie explizit und definiert auf der Seite stehen.',
            },
            {
              title: 'Echte, benannte Tools statt Kategorien',
              text:
                'Nicht Monitoring-Tools, sondern Ahrefs Brand Radar, Semrush AI Visibility, GA4, GoAccess, GPTBot, OAI-SearchBot, PerplexityBot. Eigennamen sind abrufbare Anker im Index. Allgemeine Kategoriewörter sind es nicht.',
            },
            {
              title: 'Eine Zahl zu jeder Aussage',
              text:
                'Ein Benchmark, eine Spanne oder ein Preis pro Kennzahl: 20 bis 40 Prozent Citation Rate, 15 bis 25 Prozent Wachstum pro Monat, ab 99 Dollar pro Monat. Zahlen werden zitiert, Adjektive werden ignoriert.',
            },
            {
              title: 'Struktur für die Passagen-Extraktion',
              text:
                'TL;DR-Box im ersten Bildschirm, ein benanntes nummeriertes Framework (etwa die 4 Messebenen), FAQ als echte Nutzerfragen mit je 40 bis 80 Wörtern Antwort, kurze Antwortblöcke statt Textwände und eine Quellenliste.',
            },
            {
              title: 'Kontrast zum Verdrängten',
              text:
                'Die Grounding Queries enthielten "Keyword Ranking ersetzen". Seiten, die das Neue ausdrücklich gegen das Alte stellen (etwa: die Search Console ist blind für KI-Traffic), passen zu vergleichsförmigen Grounding Queries.',
            },
          ],
        },
        {
          id: 'gegenbeweis',
          heading: 'Der Gegenbeweis: Struktur allein reicht nicht',
          intro:
            'Die wichtigste Erkenntnis kam von den Verlierern. Zwei unserer Seiten haben eine vollständige TL;DR-Box, eine ausführliche FAQ und Vergleichstabellen. Strukturell sind sie so reich wie die Gewinnerseite. Trotzdem: null Citations.',
          paragraphs: [
            'Der Unterschied: Diesen Seiten fehlten die definierten Fachbegriffe, die benannten Tools und die Benchmark-Zahlen. Eine Seite über verlorene Wettbewerber-Leads war emotional stark, enthielt aber kein einziges Mal Share of Voice oder Citation Rate, obwohl eine Grounding Query wörtlich "Share of Voice Wettbewerber KI Antworten messen" lautete.',
          ],
          quote:
            'Struktur ist notwendig, aber nicht ausreichend. Auf Bing entscheidet die Begriffsdichte: definierte Fachbegriffe plus benannte Tools plus Zahlen.',
        },
        {
          id: 'grounding-query-methode',
          heading: 'Die Grounding-Query-Methode: Schritt für Schritt',
          intro:
            'So wird Bing-Optimierung messbar statt spekulativ. Du arbeitest direkt mit den Worten des Retrievers.',
          steps: [
            {
              title: 'AI-Search-Queries-Bericht exportieren',
              text:
                'In den Bing Webmaster Tools im Bereich AI Performance. Jede Zeile ist eine Grounding Query mit Zitatzahl.',
            },
            {
              title: 'Die Top-Queries in Begriffe zerlegen',
              text:
                'Fasse fast identische Queries zusammen. Du siehst das Vokabular deiner Branche, zum Beispiel: Citation Rate, Share of Voice, Tools, Keyword Ranking ersetzen, Überwachung, Methoden.',
            },
            {
              title: 'Die Queries clustern',
              text:
                'Unterschiedliche Bündel bedeuten unterschiedliche Absichten: messen, laufend überwachen, Wettbewerber-Share-of-Voice. Jedes Cluster braucht eine eigene Seite.',
            },
            {
              title: 'Cluster auf Seiten abbilden',
              text:
                'Mit dem AI-Page-Stats-Bericht. Ein Cluster mit vielen Citations und ohne eigene Seite ist eine Chance. Ein Cluster, das über mehrere schwache Seiten verteilt ist, gehört konsolidiert.',
            },
            {
              title: 'Pro Cluster eine vollständige Seite bauen',
              text:
                'Definiere jeden Begriff des Bündels, nenne die echten Tools, liefere zu jeder Kennzahl eine Zahl. Ziel ist die vollständigste Übereinstimmung für dieses Cluster. Danach monatlich neu exportieren und beobachten, wie Cited Pages steigen.',
            },
          ],
        },
        {
          id: 'bing-technik',
          heading: 'Bing-spezifische Technik: erst im Index, dann zitierbar',
          intro:
            'Copilot zitiert nur, was im Bing-Index steht. Diese vier Punkte sind Voraussetzung, kein Bonus.',
          cards: [
            {
              title: 'IndexNow',
              text:
                'Meldet neue und geänderte URLs sofort. Bing verarbeitet IndexNow, Google nicht. Verkürzt die Zeit bis zur Zitierbarkeit.',
            },
            {
              title: 'Bingbot erlauben',
              text:
                'Copilot groundet über den Bing-Index. Wer Bingbot in der robots.txt blockt, blockt Copilot-Zitate.',
            },
            {
              title: 'Server-seitiges Rendering',
              text:
                'Das Grounding liest das indexierte HTML, nicht einen client-seitig gerenderten React-Baum. Inhalt muss serverseitig vorliegen.',
            },
            {
              title: 'Bing-Indexierung prüfen',
              text:
                'Mit der URL-Prüfung in den Bing Webmaster Tools, nicht nur in der Google Search Console. Bing ist ein eigener Index.',
            },
          ],
        },
        {
          id: 'bing-ist-nicht-google',
          heading: 'Bing ist nicht Google: kein Widerspruch, zwei Systeme',
          intro:
            'Google erklärt offiziell, dass ein KI-spezifischer Schreibstil oder Keyword-Phrasing für seine KI-Funktionen nicht nötig sind. Auf Bing war genau das stichwortdichte Begriffsbündel ausschlaggebend. Beide Aussagen stimmen, für unterschiedliche Systeme.',
          table: {
            headers: ['Signal', 'Google KI-Funktionen', 'Bing / Copilot'],
            rows: [
              ['Dichte, definierte Fachbegriffe', 'laut Google nicht nötig', 'ausschlaggebend'],
              ['Grounding Queries einsehbar', 'nicht offengelegt', 'in den Bing Webmaster Tools sichtbar'],
              ['IndexNow', 'wird nicht genutzt', 'wird verarbeitet'],
              ['Benannte Tools plus Zahlen', 'als Qualität, kein Spezialhebel', 'stark mit Zitaten korreliert'],
            ],
            caption:
              'Vier Signale, zwei Systeme. Die Spalte Google folgt Googles eigener Dokumentation, die Spalte Bing unserem Export.',
          },
          quote:
            'Der Fehler, den du vermeiden musst: Bing so zu optimieren wie Google. Auf Bing sagen unsere Daten, dass Begriffsdichte das ganze Spiel ist.',
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Was ist eine Grounding Query bei Bing und Copilot?',
          a: 'Eine Grounding Query ist die maschinell umgeschriebene Suchanfrage, die Microsoft Copilot intern an den Bing-Index stellt, um Quellen zu finden. Copilot sucht nicht den Nutzer-Prompt wortwörtlich, sondern zerlegt ihn in eine oder mehrere stichwortdichte Grounding Queries (Query Fan-out). Die Bing Webmaster Tools zeigen dir diese Grounding Queries im Bericht AI Search Queries. Kein anderes KI-System legt die Worte seines Retrievers so offen.',
        },
        {
          q: 'Wie messe ich, ob Bing Copilot meine Website zitiert?',
          a: 'Über die Bing Webmaster Tools. Im Bereich AI Performance gibt es drei Berichte: AI Performance Overview (tägliche Citations und Cited Pages), AI Page Stats (Citations pro URL) und AI Search Queries (die Grounding Queries mit Zitatzahl). Diese Daten bekommst du nur für Bing und Copilot, nicht für ChatGPT, Perplexity oder Google.',
        },
        {
          q: 'Warum zitiert Copilot eine Seite öfter als alle anderen zusammen?',
          a: 'Weil diese eine Seite die Fachbegriffe der Grounding Query am vollständigsten definiert, echte Tools beim Namen nennt und zu jeder Kennzahl eine Zahl liefert. In unseren Daten gewann genau die Seite, die als Einzige Citation Rate, Share of Voice, konkrete Tools und Benchmark-Zahlen auf einer URL bündelte. Begriffsdichte schlägt Struktur.',
        },
        {
          q: 'Reicht gute Struktur (FAQ, Tabellen, TL;DR) für Bing-Zitate?',
          a: 'Nein. In unseren Daten hatten mehrere Seiten TL;DR-Box, FAQ und Tabellen und bekamen trotzdem null Zitate. Struktur ist notwendig, aber nicht ausreichend. Entscheidend war, ob die Seite die definierten Fachbegriffe der Grounding Query enthielt, samt Zahlen und benannten Tools.',
        },
        {
          q: 'Was ist IndexNow und warum ist es für Bing wichtig?',
          a: 'IndexNow ist ein Protokoll, mit dem du neue oder geänderte URLs sofort an Suchmaschinen meldest. Bing verarbeitet IndexNow, Google nicht. Für Copilot-Sichtbarkeit ist das relevant, weil eine Seite erst im Bing-Index stehen muss, bevor sie als Quelle dienen kann. IndexNow verkürzt die Zeit zwischen Veröffentlichung und Zitierbarkeit.',
        },
        {
          q: 'Gilt das Bing-Rezept auch für Google AI Overviews?',
          a: 'Nein, und das ist wichtig. Google sagt offiziell, dass ein KI-spezifischer Schreibstil oder Keyword-Phrasing für seine KI-Funktionen nicht nötig sind. Auf Bing war genau das stichwortdichte Begriffsbündel ausschlaggebend. Beide Aussagen stimmen, für unterschiedliche Systeme. Optimiere Bing nicht wie Google und umgekehrt.',
        },
      ]}
      sourcesTitle="Quellen"
      sources={[
        {
          label: 'aiseo.hamburg (2026)',
          text:
            'Eigener Export aus den Bing Webmaster Tools, AI Performance, Zeitraum Februar bis Mai 2026. Berichte AI Performance Overview, AI Page Stats und AI Search Queries.',
        },
        {
          label: 'Microsoft Bing Blog',
          text:
            'Einführung von AI Performance in den Bing Webmaster Tools, Public Preview. Beschreibt Citations, Cited Pages und die Grounding Queries.',
          href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        },
        {
          label: 'IndexNow',
          text: 'Protokoll-Dokumentation zur sofortigen Übermittlung neuer und geänderter URLs an Bing.',
          href: 'https://www.indexnow.org/',
        },
        {
          label: 'Princeton University (2024)',
          text:
            'GEO: Generative Engine Optimization, zur Wirkung von Statistiken, Quellen und Fachvokabular auf KI-Zitierbarkeit.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Die Seite, die fast 60% der Bing-Citations gewann. Tools, KPIs und ein Dashboard.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messen',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description: 'robots.txt, IndexNow, Server-Rendering und Schema: die technische Basis für Zitate.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'Google KI-Optimierung',
          description: 'Was Google offiziell empfiehlt, und warum das Bing-Rezept dort nicht gilt.',
          href: '/wissen/google-ki-optimierung',
          tag: 'Google',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie du in ChatGPT-Antworten erscheinst und was OpenAI als Quelle bevorzugt.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'Search Console vs Bing Webmaster Tools',
          description:
            'Googles Generative-AI-Bericht seit Juni 2026 neben dem Bing-Bericht: was jede Konsole liefert und was fehlt.',
          href: '/wissen/gsc-vs-bing-webmaster-tools',
          tag: 'Tools',
        },
        {
          title: 'Citation Rate richtig berechnen',
          description:
            'Die Kennzahl hinter diesen Zahlen, mit Formel, Nenner-Problem und der Abgrenzung zu Citation Share.',
          href: '/wissen/citation-rate',
          tag: 'Kennzahl',
        },
        {
          title: 'Share of Voice in KI-Antworten',
          description:
            'Warum fünf Varianten einer Grounding Query über 41% der Citations entschieden, und was das für die Priorisierung heißt.',
          href: '/wissen/share-of-voice-ki',
          tag: 'Kennzahl',
        },
      ]}
      ctaTitle="Wirst du von Copilot zitiert?"
      ctaText="Wir lesen deine Grounding Queries, finden die Cluster ohne Gewinnerseite und bauen die Seite, die Bing zitiert. In einer kostenlosen Kurzanalyse."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose KI-Sichtbarkeits-Analyse"
    />
  );
}

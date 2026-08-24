import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KISichtbarkeitMessenPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-messen"
      breadcrumbLabel="KI-Sichtbarkeit messen"
      eyebrow="Messung"
      title="KI-Sichtbarkeit messen: Weil du nicht managen kannst, was du nicht misst"
      description="Dein Google-Ranking kennst du. Deine CTR kennst du. Aber weißt du, ob ChatGPT dein Unternehmen empfiehlt? Hier sind die Tools, KPIs und Methoden, um KI-Sichtbarkeit endlich messbar zu machen."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryItems={[
        'Google Search Console ist fast blind für KI-Traffic. Du brauchst neue Tools und neue KPIs.',
        'Vier Messebenen: Referral-Traffic, Crawler-Aktivität, Brand Mentions, systematische Prompt-Tests.',
        'Tools: Ahrefs Brand Radar, Semrush AI Visibility, GA4 Custom Reports, Server-Log-Analyse.',
        'Neue KPIs: Share of Voice in KI, AI Referral Traffic, Citation Rate, Crawler-Frequenz.',
      ]}
      sections={[
        {
          id: 'blindflug',
          heading: 'Das Problem: Du fliegst blind',
          intro:
            'Dein monatliches Reporting hat ein riesiges Loch. Google Search Console zeigt dir Impressionen, Klicks, Rankings. Dein Analytics-Dashboard zeigt dir Traffic-Quellen, Conversions, Bounce Rate. Alles sauber aufbereitet, alles nachvollziehbar. Aber keines dieser Tools beantwortet die Frage, ob ChatGPT dein Unternehmen empfiehlt.',
          stat: '35 % aller Online-Recherchen laufen 2026 über KI-Plattformen. Dein Reporting deckt 0 % davon ab.',
          paragraphs: [
            'Du gibst Tausende für SEO aus und weißt nicht, ob es in der KI-Welt wirkt. Deine Agentur zeigt dir Google-Rankings, aber verschweigt, dass ein wachsender Teil der Recherchen jetzt über ChatGPT, Perplexity und Google AI Overviews läuft.',
            'Frag deinen Marketingleiter, wie hoch euer Share of Voice in KI-Antworten ist. Die Antwort wird Schweigen sein. Nicht aus Inkompetenz, sondern weil die meisten Unternehmen diese Frage noch nie gestellt haben.',
            'Das Problem ist nicht, dass du schlecht optimiert bist. Das Problem ist, dass du nicht weißt, ob du optimiert bist. Du optimierst im Dunkeln.',
          ],
          table: {
            headers: ['Die brutale Realität', 'Was daraus folgt'],
            rows: [
              [
                'Google Search Console zeigt dir nichts über ChatGPT-Empfehlungen',
                'Für den am schnellsten wachsenden Kanal hat dein Standard-Reporting keine einzige Zeile',
              ],
              [
                'Wie gut ChatGPT deine Marke kennt, kann dir deine Agentur nicht beantworten',
                'Die Frage wird im Status-Call übersprungen, nicht beantwortet',
              ],
              [
                'Die meisten Unternehmen wissen nicht einmal, ob sie in KI-Antworten auftauchen',
                'Optimierung ohne Ausgangswert, also ohne belastbares Vorher und Nachher',
              ],
              [
                'Share of Model ist ein schwarzes Loch im Reporting',
                'Kein Wettbewerbsvergleich, keine Zielgröße, kein Alarm bei Verlusten',
              ],
              [
                'Ohne Messung kannst du keinen ROI nachweisen',
                'Und ohne ROI bekommst du kein Budget für KI-Optimierung',
              ],
            ],
            caption:
              'Fünf Sätze, die in Erstgesprächen fast immer fallen. Jeder einzelne ist ein Messproblem, kein Contentproblem.',
          },
        },
        {
          id: 'messebenen',
          heading: 'Die 4 Messebenen der KI-Sichtbarkeit',
          intro:
            'KI-Sichtbarkeit lässt sich nicht mit einem einzigen Tool erfassen. Du brauchst vier Perspektiven, die zusammen ein vollständiges Bild ergeben.',
          steps: [
            {
              title: 'Referral-Traffic',
              text: 'Der direkteste Beweis: Besucher, die von KI-Plattformen auf deine Website kommen.',
              bullets: [
                'In GA4 tracken: chat.openai.com, chatgpt.com, perplexity.ai',
                'Weitere Referrer: copilot.microsoft.com, gemini.google.com',
                'Vorteil: harte Zahlen, direkt messbar',
                'Limit: nicht jede KI-Empfehlung erzeugt einen Klick',
              ],
            },
            {
              title: 'Crawler-Aktivität',
              text: 'Welche KI-Bots besuchen deine Website, und wie oft?',
              bullets: [
                'GPTBot: OpenAIs Crawler für Training und Search',
                'OAI-SearchBot: ChatGPTs Live-Suche',
                'PerplexityBot: Perplexitys Echtzeitsuche',
                'ClaudeBot: Anthropics Crawler',
              ],
            },
            {
              title: 'Brand Mention Monitoring',
              text: 'Wird deine Marke in KI-Antworten genannt, auch ohne Link?',
              bullets: [
                'Ahrefs Brand Radar: automatisiertes Tracking von Markennennungen in KI',
                'Semrush AI Visibility: Sichtbarkeit in AI Overviews',
                'Vorteil: erfasst auch Empfehlungen ohne Klick',
                'Kernpunkt: viele KI-Empfehlungen sind Dark Traffic',
              ],
            },
            {
              title: 'Systematische Prompt-Tests',
              text: 'Direkt fragen: Was sagt die KI über dich?',
              bullets: [
                'Methode: 50 bis 100 branchenrelevante Prompts dokumentieren',
                'Plattformen: ChatGPT, Perplexity, Gemini, Claude',
                'Frequenz: monatlich wiederholen, Ergebnisse vergleichen',
                'Achtung: Antworten variieren, also große Stichproben nutzen',
              ],
            },
          ],
        },
        {
          id: 'tools',
          heading: 'Tools für KI-Sichtbarkeits-Tracking',
          intro:
            'Kein einzelnes Tool deckt alles ab. Hier ist, was aktuell am besten funktioniert, was jedes Tool wirklich kann, und die zwei Rezepte, die du sofort kopieren kannst.',
          definitions: [
            {
              term: 'GA4-Exploration',
              definition:
                'Explore, dann Free Form. Dimension: Session source / medium. Filter auf die KI-Referrer. Metriken: Sessions, Engaged Sessions, Conversions. Zeitraum: letzte 90 Tage, Woche für Woche.',
              formula:
                'Source contains "chat.openai" OR "perplexity" OR "chatgpt" OR "copilot.microsoft" OR "gemini.google"',
            },
            {
              term: 'KI-Bots im nginx-Log',
              definition:
                'Zählt Hits, gecrawlte URLs und Frequenz pro Bot. Das ist der früheste Indikator: bevor du zitiert wirst, musst du gecrawlt werden.',
              formula:
                'grep -E "(GPTBot|OAI-SearchBot|PerplexityBot|ClaudeBot|Google-Extended|Applebot-Extended)" access.log | awk \'{print $1, $4, $7, $14}\' | sort | uniq -c | sort -rn',
            },
          ],
          chart: {
            variant: 'column',
            title: 'Einstiegskosten pro Messebene',
            axis: { unit: ' USD', title: 'pro Monat' },
            highlight: 'peak',
            points: [
              { label: 'GA4 Custom Reports', short: 'GA4', value: 0, note: 'kostenlos' },
              { label: 'Server-Log-Analyse', short: 'Logs', value: 0, note: 'Eigenleistung' },
              { label: 'Ahrefs Brand Radar', short: 'Ahrefs', value: 99, note: 'im Abo' },
              { label: 'Semrush AI Visibility', short: 'Semrush', value: 130, note: 'Business' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Werkzeug', 'Kosten pro Monat'] },
            caption:
              'Zwei der vier Messebenen kosten nichts außer Arbeitszeit. Wer behauptet, KI-Sichtbarkeit sei ohne Enterprise-Lizenz nicht messbar, hat GA4 und die eigenen Server-Logs nie angesehen.',
          },
          steps: [
            {
              title: 'Ahrefs Brand Radar',
              text: 'Trackt automatisiert, wo deine Marke im Web und in KI-Antworten erwähnt wird. Zeigt Mention-Trends über Zeit und identifiziert neue Quellen, die dich zitieren.',
              bullets: [
                'Stärke: automatisiertes Monitoring, historische Trendanalyse, Wettbewerbsvergleich',
                'Schwäche: deckt nicht alle KI-Plattformen gleichermaßen ab',
                'Preis: ab etwa 99 USD pro Monat, im Ahrefs-Abo enthalten',
              ],
            },
            {
              title: 'Semrush AI Visibility',
              text: 'Zeigt dir, für welche Keywords deine Website in Google AI Overviews erscheint. Trackt deine Position in KI-generierten Antworten und vergleicht sie mit Wettbewerbern.',
              bullets: [
                'Stärke: detaillierte AI-Overview-Analyse, Daten auf Keyword-Ebene',
                'Schwäche: Fokus auf Google AI Overviews, weniger auf ChatGPT und Perplexity',
                'Preis: ab etwa 130 USD pro Monat, im Business-Plan',
              ],
            },
            {
              title: 'GA4 Custom Reports',
              text: 'Kostenlos und sofort einsetzbar. Erstelle einen Custom Report, der Traffic von KI-Plattformen isoliert. Die Filterzeile dafür steht oben.',
              bullets: [
                'Stärke: kostenlos, sofort verfügbar, mit Conversion-Tracking',
                'Schwäche: zeigt nur Traffic, nicht Mentions ohne Klick',
                'Tipp: ein eigenes Channel Grouping namens AI Platforms einrichten',
              ],
            },
            {
              title: 'Server-Log-Analyse',
              text: 'Deine Server-Logs verraten dir, welche KI-Bots deine Website crawlen. Das ist der früheste Indikator für KI-Sichtbarkeit.',
              bullets: [
                'Stärke: Frühindikator, zeigt Bot-Frequenz und gecrawlte Seiten',
                'Schwäche: technisch anspruchsvoll, Zugang zu Raw Logs notwendig',
                'Tipp: bei Vercel oder Netlify Log-Drains einrichten oder Middleware-Logging nutzen',
              ],
            },
            {
              title: 'Manuelles Prompt-Testing-Framework',
              text: 'Die direkteste Methode: Frag die KI selbst. Aber strukturiert, nicht zufällig. Fünf Prompt-Kategorien decken das Feld ab: direkte Markenabfrage, Kategorie-Abfrage nach Anbietern in einer Stadt, Vergleich mit einem Wettbewerber, Problem-Abfrage nach einer Dienstleistung, Expertise-Abfrage nach dem Experten für ein Thema in Deutschland.',
              bullets: [
                'Stärke: direkter Einblick, sofort umsetzbar, kostenlos',
                'Schwäche: nicht reproduzierbar, zeitaufwändig, subjektiv',
                'Wichtig: mindestens 50 Prompts pro Monat, Ergebnisse in einem Spreadsheet dokumentieren',
              ],
            },
          ],
        },
        {
          id: 'kpis',
          heading: 'KPIs die 2026 wirklich zählen',
          intro:
            'Vergiss Vanity Metrics. Diese fünf Kennzahlen zeigen dir, ob deine KI-Optimierung wirkt, und jede hat eine Zielgröße, an der du sie festmachen kannst.',
          steps: [
            {
              title: 'Share of Voice in KI-Antworten',
              text: 'Wie oft wirst du im Vergleich zu Wettbewerbern in KI-Antworten zitiert? Miss das über 50 bis 100 branchenrelevante Prompts monatlich. Bei 100 Fragen und 12 Nennungen für dich gegen 28 für den Wettbewerber steht es 12 % zu 28 %.',
              bullets: ['Ziel: Steigerung um 5 bis 10 Prozentpunkte pro Quartal'],
            },
            {
              title: 'AI Referral Traffic',
              text: 'Sessions von chat.openai.com, perplexity.ai, chatgpt.com, copilot.microsoft.com und gemini.google.com. In GA4 als eigene Channel-Gruppe einrichten.',
              bullets: ['Ziel: Wachstum von 15 bis 25 % Monat über Monat'],
            },
            {
              title: 'Brand Mention Velocity',
              text: 'Wie schnell wachsen deine Markennennungen im Web und in KI-Kontexten? Ahrefs Brand Radar zeigt den Trend. Steigende Velocity bedeutet steigende KI-Sichtbarkeit.',
              bullets: ['Ziel: positiver Trend über drei Monate oder länger'],
            },
            {
              title: 'Citation Rate pro Plattform',
              text: 'Bei wie vielen relevanten Prompts wirst du auf welcher Plattform zitiert? Unterscheide zwischen ChatGPT, Perplexity, Gemini und Claude. Jede Plattform hat andere Präferenzen.',
              bullets: ['Benchmark: Top-Marken erreichen 20 bis 40 % Citation Rate in ihrer Nische'],
            },
            {
              title: 'Crawler Hit Frequency',
              text: 'Wie oft crawlen GPTBot, PerplexityBot und ClaudeBot deine Website? Steigende Frequenz deutet auf wachsende Relevanz hin, fallende Frequenz ist ein Warnsignal.',
              bullets: ['Tracking: wöchentliche Server-Log-Auswertung'],
            },
          ],
        },
        {
          id: 'dashboard',
          heading: 'So baust du ein KI-Sichtbarkeits-Dashboard',
          intro:
            'Schritt für Schritt zum ersten aussagekräftigen Report. Du brauchst keine Enterprise-Tools, starte mit dem, was du hast.',
          steps: [
            {
              title: 'GA4 AI-Traffic-Segment einrichten',
              text: 'Erstelle in GA4 ein Custom Segment mit allen KI-Referrern: chat.openai.com, chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com. Richte es als Channel-Gruppe AI Platforms ein, damit es in allen Standard-Reports erscheint.',
            },
            {
              title: 'Server-Log-Monitoring aktivieren',
              text: 'Richte ein wöchentliches Skript ein, das GPTBot, OAI-SearchBot, PerplexityBot und ClaudeBot in deinen Access-Logs zählt. Bei Vercel nutzt du Log Drains zu einem Logging-Service wie Datadog oder Logflare. Tracke Anzahl Hits, gecrawlte URLs und Frequenz.',
            },
            {
              title: 'Prompt-Testing-Spreadsheet erstellen',
              text: 'Ein Sheet mit den Spalten Prompt, Plattform, Datum, Ergebnis (erwähnt oder nicht erwähnt), Position in der Antwort und Zitat-Qualität (Link, Name, Detail). Starte mit 50 branchenrelevanten Prompts. Teste monatlich auf ChatGPT, Perplexity und Gemini.',
            },
            {
              title: 'Brand Monitoring verbinden',
              text: 'Wenn du Ahrefs oder Semrush nutzt: aktiviere Brand Radar beziehungsweise AI Visibility. Wenn nicht: starte mit Google Alerts für deine Marke plus manuellem Tracking. Exportiere die Daten monatlich in dein Dashboard.',
            },
            {
              title: 'Monatliches KI-Sichtbarkeits-Reporting',
              text: 'Fasse alle vier Messebenen in einem Report zusammen. Vergleiche Monat über Monat, identifiziere Trends. Ein einfaches Sheet reicht für den Start, Hauptsache, du misst überhaupt.',
            },
          ],
          quote:
            'Der erste Report ist der wichtigste. Er zeigt dir nicht, wie gut du bist, sondern wie viel du nicht wusstest.',
        },
        {
          id: 'mess-fehler',
          heading: 'Typische Mess-Fehler',
          intro:
            'Fünf Fehler, die in fast jedem ersten Messversuch stecken. Jeder einzelne macht die Zahlen unbrauchbar, ohne dass es auffällt.',
          cards: [
            {
              title: 'Fehler 1: Einzelne Prompt-Tests als Beweis nehmen',
              text: 'Du fragst ChatGPT einmal nach deiner Marke, bekommst eine positive Antwort und denkst, es läuft. KI-Antworten variieren massiv je nach Formulierung, Zeitpunkt und sogar Session. Ein einzelner Test sagt nichts. Du brauchst mehr als 50 Tests über mehrere Wochen für belastbare Aussagen.',
            },
            {
              title: 'Fehler 2: Nur Traffic messen, Mentions ignorieren',
              text: 'AI Referral Traffic ist nur die Spitze des Eisbergs. Wenn ChatGPT dich empfiehlt, klicken viele Nutzer nicht, weil sie die Antwort bereits haben. Deine Marke wird trotzdem im Kopf verankert. Brand Mention Monitoring ist daher mindestens genauso wichtig wie Traffic-Daten.',
            },
            {
              title: 'Fehler 3: KI-Sichtbarkeit mit Google-Rankings gleichsetzen',
              text: 'Position 1 bei Google bedeutet nicht, dass ChatGPT dich zitiert. KI-Systeme bewerten anders: Entitätsautorität, Zitierhäufigkeit, Content-Struktur, Markenbekanntheit. Du kannst bei Google auf Platz 1 stehen und in KI-Antworten komplett fehlen.',
            },
            {
              title: 'Fehler 4: Kein Wettbewerbsvergleich',
              text: 'Deine KI-Sichtbarkeit ist nur im Kontext deiner Wettbewerber aussagekräftig. 10 Erwähnungen pro Monat klingt gut, bis du siehst, dass dein Wettbewerber 50 hat. Tracke immer relativ, nicht absolut.',
            },
            {
              title: 'Fehler 5: Zu früh aufgeben',
              text: 'KI-Modelle aktualisieren ihre Wissensbasis in Zyklen. Optimierungen, die du heute vornimmst, zeigen oft erst in 4 bis 12 Wochen Wirkung. Wer nach zwei Wochen keine Veränderung sieht und aufgibt, hat nie wirklich gemessen.',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Welche Tools messen KI-Sichtbarkeit am besten?',
          a: 'Ahrefs Brand Radar und Semrush AI Visibility sind die derzeit umfassendsten Tools. Ahrefs trackt Brand Mentions in KI-Antworten automatisiert, Semrush zeigt dir deine Sichtbarkeit in AI Overviews und ChatGPT-Suchergebnissen. Ergänzend liefert GA4 mit Custom Reports die Referral-Traffic-Daten von KI-Plattformen wie chat.openai.com und perplexity.ai.',
        },
        {
          q: 'Kann ich KI-Sichtbarkeit kostenlos messen?',
          a: 'Ja, eingeschränkt. GA4 ist kostenlos und zeigt dir AI-Referral-Traffic. Server-Logs kannst du mit Open-Source-Tools wie GoAccess auf KI-Bot-Aktivität analysieren. Manuelle Prompt-Tests kosten nichts außer Zeit. Für systematisches, automatisiertes Tracking brauchst du allerdings kostenpflichtige Tools wie Ahrefs oder Semrush.',
        },
        {
          q: 'Wie oft sollte ich meine KI-Sichtbarkeit messen?',
          a: 'Referral-Traffic und Crawler-Aktivität: wöchentlich. Brand Mentions und Prompt-Tests: mindestens monatlich. KI-Modelle aktualisieren ihre Wissensbasis in unregelmäßigen Zyklen, daher sind monatliche Vergleichswerte aussagekräftiger als tägliche Schwankungen.',
        },
        {
          q: 'Was ist Share of Voice in KI-Antworten?',
          a: 'Share of Voice misst, wie oft deine Marke im Vergleich zu Wettbewerbern in KI-Antworten zu relevanten Prompts auftaucht. Beispiel: Bei 100 branchenrelevanten Fragen wirst du 12-mal zitiert, dein Wettbewerber 28-mal. Dein Share of Voice ist 12 %, seiner 28 %. Diese Metrik zeigt dir, wo du stehst und wie viel Optimierungspotenzial besteht.',
        },
        {
          q: 'Warum zeigt Google Search Console keine KI-Sichtbarkeit?',
          a: 'Seit dem 3. Juni 2026 zeigt sie einen Teil davon: Der Generative-AI-Bericht weist Impressionen in AI Overviews und AI Mode aus, aufgeschlüsselt nach Seiten, Ländern, Geräten und Datum. Klicks, CTR, Position und Suchanfragen enthält er nicht, und Traffic von ChatGPT, Perplexity oder Claude erfasst er gar nicht. Für Referral-Traffic brauchst du weiter GA4, für Citations die Bing Webmaster Tools und für Zitationsanalyse auf anderen Plattformen spezialisierte Tools. Der Vergleich beider Konsolen steht in unserem Artikel zu Search Console und Bing Webmaster Tools.',
        },
        {
          q: 'Wie messe ich, ob ChatGPT meine Marke empfiehlt?',
          a: 'Drei Wege: erstens in GA4 prüfen, ob Traffic von chat.openai.com oder chatgpt.com kommt. Zweitens systematische Prompt-Tests mit dokumentierten Fragen und Antworten durchführen. Drittens Ahrefs Brand Radar oder ähnliche Tools für automatisiertes Monitoring einsetzen. Wichtig: Prompt-Tests sind nicht reproduzierbar, da KI-Antworten variieren. Deshalb brauchst du viele Tests über Zeit, nicht einzelne Stichproben.',
        },
      ]}
      sources={[
        {
          label: 'Gartner (2024)',
          text: 'Gartner erwartet, dass Marken bis 2028 die Hälfte oder mehr ihres organischen Suchtraffics an KI-gestützte Suche verlieren. Die frei zugängliche Pressemitteilung vom 19.02.2024 nennt zusätzlich 25 % weniger Suchmaschinen-Volumen bis 2026.',
          href: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents',
        },
        {
          label: 'Ahrefs (2025)',
          text: 'Brand Radar: Track Your Brand Mentions Across the Web. Dokumentation zum automatisierten Brand-Mention-Tracking, inklusive Preisangabe.',
        },
        {
          label: 'Semrush (2025)',
          text: 'AI Visibility Report. Feature-Dokumentation zur Messung der Sichtbarkeit in AI Overviews, inklusive Plan-Zuordnung.',
        },
        {
          label: 'Google (2025)',
          text: 'GA4 Traffic Source Dimensions. Offizielle Dokumentation zu Referral-Traffic-Tracking in Google Analytics 4.',
        },
        {
          label: 'OpenAI (2025)',
          text: 'GPTBot Documentation. Offizielle Crawler-Dokumentation mit User-Agent-Strings und Crawl-Verhalten.',
        },
        {
          label: 'Princeton University (2024)',
          text: 'GEO: Generative Engine Optimization. Wissenschaftliche Studie zu Optimierungsstrategien für KI-Suchmaschinen.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Was KI-Sichtbarkeit bedeutet, warum sie entscheidend ist und wie du sie erreichst.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie du in ChatGPT-Antworten erscheinst und was OpenAI als Quelle bevorzugt.',
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
          title: 'AI SEO Agentur',
          description: 'Worauf du bei der Wahl einer AI SEO Agentur achten solltest.',
          href: '/ai-seo-agentur',
          tag: 'Auswahl',
        },
        {
          title: 'Citation Rate berechnen',
          description: 'Formel, Nenner-Problem und die Abgrenzung zu Citation Share, Mention Rate und Share of Voice.',
          href: '/wissen/citation-rate',
          tag: 'KPI',
        },
        {
          title: 'Share of Voice in KI-Antworten',
          description: 'Die Formel, ein Rechenbeispiel und warum derselbe Datensatz 30 % oder 8 % ergeben kann.',
          href: '/wissen/share-of-voice-ki',
          tag: 'KPI',
        },
        {
          title: 'Search Console vs Bing Webmaster Tools',
          description: 'Was Googles Generative-AI-Bericht seit Juni 2026 zeigt und was nur Bing liefert.',
          href: '/wissen/gsc-vs-bing-webmaster-tools',
          tag: 'Tools',
        },
        {
          title: 'AI-Visibility-Tools im Vergleich',
          description: 'Preise und Abdeckung von Ahrefs Brand Radar, Semrush, Peec AI, Profound, Otterly.ai und Scrunch AI.',
          href: '/wissen/ai-visibility-tools-vergleich',
          tag: 'Tools',
        },
      ]}
      ctaTitle="Wie sichtbar bist du in KI?"
      ctaText="Du weißt jetzt, was du messen musst. Aber willst du wirklich selbst 50 Prompts testen und Server-Logs parsen? Lass uns das für dich herausfinden, in einer kostenlosen Kurzanalyse. Oder sieh dir zuerst die dokumentierten Ergebnisse an, die mit genau diesen Messmethoden herauskommen."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose KI-Sichtbarkeits-Analyse"
    />
  );
}

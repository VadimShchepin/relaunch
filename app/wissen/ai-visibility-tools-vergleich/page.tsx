import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function AiVisibilityToolsVergleichPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ai-visibility-tools-vergleich"
      breadcrumbLabel="AI-Visibility-Tools im Vergleich"
      eyebrow="Tool-Vergleich 2026"
      title="AI-Visibility-Tools im Vergleich: Preise, Abdeckung und die Lücke, über die niemand schreibt"
      description="Sechs Monitoring-Tools für KI-Sichtbarkeit, nebeneinander gestellt nach Listenpreis, abgedeckten Plattformen und Abrechnungsmodell. Stand August 2026. Mit dem Hinweis, den fast jeder Vergleich im Netz weglässt: Wer ihn geschrieben hat."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      image={{
        src: '/images/wissen/ai-visibility-tools-vergleich/hero.webp',
        alt: 'Schreibtisch mit Euro-Scheinen, Taschenrechner, Kaffee und Notebook',
        caption: 'Das Abrechnungsmodell entscheidet stärker über die Rechnung als jedes Feature.',
        width: 1600,
        height: 1067,
      }}
      summaryItems={[
        'Zwei Abrechnungsmodelle konkurrieren: pro getrackten Prompt (Peec AI, Otterly.ai, Semrush) und pro Plattform-Index (Ahrefs Brand Radar). Der Unterschied entscheidet stärker über die Rechnung als jedes Feature.',
        'Realistischer Einstieg für ernsthaftes Monitoring über mehrere Plattformen: rund 100 bis 500 US-Dollar pro Monat. Darunter bekommst du eine Stichprobe, keine Zeitreihe.',
        'Ahrefs Brand Radar kostet 199 US-Dollar pro AI-Index und Monat, 398 für ein Plattform-Paket und 699 für alle Indizes, jeweils zusätzlich zu einem Ahrefs-Basisabo ab 129 US-Dollar.',
        'Die beiden Datenquellen, die direkt von der Plattform kommen, sind kostenlos: der AI-Performance-Bericht der Bing Webmaster Tools und der Generative-AI-Bericht der Google Search Console.',
        'Fast alle Tool-Vergleiche im Netz stammen von Anbietern konkurrierender Tools. Das erklärt, warum in jedem Vergleich ein anderes Tool gewinnt.',
      ]}
      sections={[
        {
          id: 'zwei-modelle',
          image: {
            src: '/images/wissen/ai-visibility-tools-vergleich/zwei-modelle.webp',
            alt: 'Grüne Mappe mit Euro-Banknoten auf einer Holzoberfläche',
            caption: 'Pro Prompt oder pro Plattform-Index: die Wahl kostet oder spart dreistellige Beträge.',
            width: 1000,
            height: 696,
          },
          heading: 'Erst das Abrechnungsmodell verstehen, dann die Preise',
          intro:
            'Die Tools messen ähnliche Dinge, rechnen aber grundverschieden ab. Wer das Modell nicht zur eigenen Situation passend wählt, zahlt für Kapazität, die er nie nutzt.',
          definitions: [
            {
              term: 'Abrechnung pro Prompt',
              definition:
                'Du bezahlst für eine Anzahl regelmäßig getesteter Fragen, meist über alle Plattformen hinweg. Passt, wenn du wenige, klar definierte Kernfragen hast und alle Plattformen sehen willst. Wird teuer, wenn du viele Themen breit abdecken willst.',
            },
            {
              term: 'Abrechnung pro Plattform-Index',
              definition:
                'Du bezahlst pro KI-Plattform, die du beobachten willst, und bekommst dafür eine große vorgefertigte Prompt-Datenbank. Passt, wenn du eine oder zwei Plattformen wirklich verstehen willst. Wird teuer, sobald du alle Plattformen brauchst.',
            },
            {
              term: 'Plattform-Konsole',
              definition:
                'Kostenlose Berichte der Suchmaschinen selbst über eine verifizierte Property. Keine Prompt-Simulation, sondern gemeldete Ausspielungen. Deckt nur Bing und Copilot sowie Googles AI-Oberflächen ab, dafür ohne Stichprobenfehler.',
            },
          ],
        },
        {
          id: 'vergleichstabelle',
          image: {
            src: '/images/wissen/ai-visibility-tools-vergleich/vergleichstabelle.webp',
            alt: 'Notebook mit Diagrammen auf einem hellen Holzschreibtisch',
            caption: 'Listenpreise, Stand August 2026. Vor dem Kauf gehört die Preisseite des Anbieters geprüft.',
            width: 1000,
            height: 678,
          },
          heading: 'Die Tabelle: Preis, Abdeckung, Abrechnung',
          intro:
            'Listenpreise laut Anbieterangaben und öffentlichen Preisvergleichen, Stand August 2026. Jährliche Vorauszahlung, Währungsumstellung und Enterprise-Verhandlungen verändern die Zahlen, deshalb sind sie als Größenordnung zu lesen und nicht als Angebot.',
          table: {
            headers: ['Tool', 'Einstiegspreis pro Monat', 'Abrechnung', 'Plattformen', 'Stärke'],
            rows: [
              [
                'Bing Webmaster Tools',
                '0 US-Dollar',
                'Kostenlos, verifizierte Property',
                'Copilot und KI-Antworten in Bing',
                'Echte Ausspielungen statt Stichprobe, inklusive Grounding Queries und Citation Share',
              ],
              [
                'Google Search Console',
                '0 US-Dollar',
                'Kostenlos, verifizierte Property',
                'AI Overviews und AI Mode',
                'Impressionen pro Seite, Land, Gerät und Datum',
              ],
              [
                'Otterly.ai',
                'ab 29 US-Dollar',
                'pro Prompt',
                'vier Engines im Einstiegstarif',
                'Günstigster ernsthafter Einstieg, gut für erste Zeitreihen',
              ],
              [
                'Semrush AI Visibility Toolkit',
                'ab 99 US-Dollar pro Domain',
                'pro Prompt, Zusatzkontingente buchbar',
                'AI Overviews und die großen Assistenten',
                'Sinnvoll, wenn Semrush schon im Einsatz ist',
              ],
              [
                'Peec AI',
                'ab knapp 100 US-Dollar',
                'pro Prompt, Staffelung nach Projekten und Ländern',
                'ChatGPT, AI Mode, AI Overviews, Copilot, Perplexity, Gemini',
                'Breite Plattformabdeckung in allen Tarifen',
              ],
              [
                'Scrunch AI',
                'ab rund 250 US-Dollar',
                'pro Prompt, Sitzplätze inklusive',
                'breite Abdeckung ohne Gating in den Basistarifen',
                'Team-Nutzung und Handlungsempfehlungen',
              ],
              [
                'Ahrefs Brand Radar',
                '199 US-Dollar pro AI-Index plus Basisabo ab 129',
                'pro Plattform-Index',
                'AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, Copilot',
                'Sehr große vorgefertigte Prompt-Datenbank, Share of Voice gegen Wettbewerber',
              ],
              [
                'Profound',
                'Einstieg günstig, praxisnah ab rund 400 US-Dollar',
                'pro Prompt, viele Engines erst im Enterprise-Tarif',
                'bis zu zehn Engines, gestaffelt',
                'Tiefe Analysen für größere Teams',
              ],
            ],
            caption:
              'Zusammenstellung aus Anbieterangaben und öffentlichen Preisvergleichen, Stand August 2026. Preise ohne Steuern, Angaben in US-Dollar, weil die meisten Anbieter so ausweisen.',
            note:
              'Die Werte ändern sich in diesem Markt schnell. Vor einer Kaufentscheidung gehört die Preisseite des Anbieters selbst geprüft.',
          },
        },
        {
          id: 'offenlegung',
          image: {
            src: '/images/wissen/ai-visibility-tools-vergleich/offenlegung.webp',
            alt: 'Geldbeutel mit Euro-Banknoten auf dunklem Holz',
            caption: 'Die meisten Tool-Vergleiche im Netz stammen von Anbietern konkurrierender Tools.',
            width: 1000,
            height: 667,
          },
          heading: 'Der Hinweis, den fast jeder Vergleich weglässt',
          paragraphs: [
            'Wer nach einem Vergleich dieser Tools sucht, landet fast ausschließlich auf Seiten von Unternehmen, die selbst ein konkurrierendes Tool verkaufen. Das ist bei der Recherche für diesen Artikel bei der Mehrheit der auffindbaren Reviews der Fall gewesen, inklusive der Reviews mit den prominentesten Rankings.',
            'Das macht die dort genannten Preise nicht falsch. Es erklärt aber zuverlässig, warum in jedem dieser Vergleiche ein anderes Tool als zu teuer und ein bestimmtes anderes als Preis-Leistungs-Sieger dasteht. Wer diese Texte als neutrale Marktübersicht liest, übernimmt die Positionierung des Herstellers.',
            'Unsere eigene Offenlegung: Wir verkaufen kein Monitoring-Tool. Wir verkaufen die Arbeit, die nach der Messung kommt, und haben deshalb ein Interesse daran, dass Kunden überhaupt messen. Für die reine Messung nutzen wir seit Februar 2026 überwiegend die kostenlosen Plattformkonsolen und ergänzen sie durch dokumentierte eigene Prompt-Tests.',
          ],
          warning: {
            title: 'Kein Dashboard behebt ein Sichtbarkeitsproblem',
            text:
              'Alle sechs kommerziellen Tools beantworten dieselbe Frage: Wo tauchst du nicht auf. Keines von ihnen schreibt die Definitionsseite, baut die Entität aus oder verdient die Nennung auf einer fremden Domain. Ein Monitoring-Abo ohne Budget für die anschließende Arbeit ist ein teures Thermometer.',
          },
        },
        {
          id: 'was-tools-nicht-sehen',
          image: {
            src: '/images/wissen/ai-visibility-tools-vergleich/was-tools-nicht-sehen.webp',
            alt: 'Tastatur und Brille auf einem Schreibtisch vor einem Bürofenster',
            caption: 'Vier blinde Flecken teilen alle Tools, auch die teuren.',
            width: 1000,
            height: 667,
          },
          heading: 'Vier blinde Flecken, die alle Tools teilen',
          cards: [
            {
              title: 'Keine Klickdaten aus KI-Antworten',
              text:
                'Weder Bing noch die Google Search Console liefern Klicks für KI-Oberflächen. Bei Google stecken die Klicks aus AI Overviews im Gesamtwert der Websuche und sind dort nicht trennbar. Eine belastbare CTR für KI-Antworten lässt sich damit nicht bilden.',
            },
            {
              title: 'Nur Grounding Queries, nicht die Nutzerfrage',
              text:
                'Bing zeigt die intern generierten Suchanfragen, mit denen Copilot Quellen sucht, nicht den ursprünglichen Prompt des Nutzers. Du siehst, worauf das System reduziert hat, nicht, was der Mensch gefragt hat.',
            },
            {
              title: 'Antworten ohne Quellenangabe',
              text:
                'Ein Großteil der Markennennungen in LLM-Antworten stammt aus Modellwissen und löst keinen Quellenabruf aus. Diese Nennungen erscheinen in keiner Citation-Statistik, wirken aber auf die Kaufentscheidung.',
            },
            {
              title: 'Keine API für Googles KI-Daten',
              text:
                'Der Generative-AI-Bericht der Search Console war zuletzt nur über die Oberfläche und einen manuellen CSV-Export zugänglich. Ohne API-Zugang lässt sich die Zeitreihe nicht automatisiert fortschreiben, deshalb gehört der monatliche Export in den Kalender.',
            },
          ],
        },
        {
          id: 'empfehlung',
          heading: 'Was wir in welcher Situation nehmen',
          intro:
            'Statt eines Testsiegers: die vier Situationen, die in Kundengesprächen tatsächlich vorkommen, und was jeweils genügt.',
          steps: [
            {
              title: 'Erstmals wissen wollen, ob überhaupt etwas passiert',
              text:
                'Bing Webmaster Tools und Google Search Console verifizieren, beide KI-Berichte öffnen, Monatsexport in den Kalender. Kosten: null. Das deckt Copilot, AI Overviews und AI Mode ab und liefert echte Ausspielungen statt simulierter Prompts. Erst wenn diese Daten ausgewertet sind, lohnt ein Abo.',
            },
            {
              title: 'ChatGPT und Perplexity mit einbeziehen',
              text:
                'Ein Prompt-basiertes Tool im unteren Preissegment, dazu 30 bis 50 eigene dokumentierte Prompts. Otterly.ai ist der günstigste ernsthafte Einstieg, Peec AI die breitere Abdeckung. Wichtig ist die feste Prompt-Liste, nicht das Logo im Dashboard.',
            },
            {
              title: 'Gegen benannte Wettbewerber messen',
              text:
                'Hier zahlt sich Ahrefs Brand Radar aus, weil die vorgefertigte Prompt-Datenbank Vergleiche ohne eigene Listenpflege erlaubt. Die Rechnung muss man wollen: ein Index plus Basisabo liegt bei über 328 US-Dollar im Monat, alle Indizes bei rund 828.',
            },
            {
              title: 'Mehrere Marken oder Märkte im Team betreuen',
              text:
                'Ab hier entscheiden Sitzplätze, Mandantentrennung und Export, nicht die Messgenauigkeit. Scrunch AI und Profound sind für diesen Fall gebaut. Für einen einzelnen Standort mit einer Marke ist das überdimensioniert.',
            },
          ],
          note:
            'Reihenfolge ist bewusst so gewählt: Erst die kostenlosen Plattformdaten ausschöpfen, dann Prompt-Simulation zukaufen. Wer umgekehrt anfängt, zahlt für Schätzungen, während echte Zahlen unbenutzt im Konto liegen.',
        },
      ]}
      faqs={[
        {
          q: 'Welches AI-Visibility-Tool ist das beste?',
          a: 'Es gibt keinen allgemeinen Testsieger, weil die Tools verschieden abrechnen. Für wenige Kernfragen über viele Plattformen ist ein Prompt-basiertes Tool wie Peec AI oder Otterly.ai günstiger. Für den Wettbewerbsvergleich über große Prompt-Datenbanken ist Ahrefs Brand Radar stärker, kostet aber pro Plattform-Index. Anfangen sollte man mit den kostenlosen Konsolen von Bing und Google.',
        },
        {
          q: 'Was kostet AI-Visibility-Monitoring realistisch?',
          a: 'Der Einstieg liegt bei 29 US-Dollar pro Monat für ein sehr kleines Prompt-Kontingent. Ernsthaftes Monitoring über mehrere Plattformen beginnt bei rund 100 US-Dollar und liegt in der Praxis meist zwischen 250 und 500 US-Dollar pro Monat. Volle Abdeckung bei Ahrefs Brand Radar landet inklusive Basisabo bei etwa 828 US-Dollar. Stand August 2026, Listenpreise der Anbieter.',
        },
        {
          q: 'Brauche ich ein kostenpflichtiges Tool oder reichen die Suchkonsolen?',
          a: 'Für Bing und Copilot reicht der kostenlose AI-Performance-Bericht der Bing Webmaster Tools, und er ist genauer als jede Simulation, weil er tatsächliche Ausspielungen meldet. Für AI Overviews und AI Mode liefert die Google Search Console Impressionen. Ein Tool brauchst du, sobald ChatGPT, Claude oder Perplexity systematisch mitgemessen werden sollen, denn dafür gibt es keine Plattformkonsole.',
        },
        {
          q: 'Was kostet Ahrefs Brand Radar?',
          a: 'Brand Radar wird pro AI-Index abgerechnet: 199 US-Dollar pro Monat für einen Index, 398 für ein Paket mehrerer Plattformen und 699 für alle Indizes. Dazu kommt ein aktives Ahrefs-Basisabo ab 129 US-Dollar pro Monat. Damit liegt der Einstieg bei über 328 US-Dollar und die volle Abdeckung bei etwa 828 US-Dollar monatlich, Stand August 2026.',
        },
        {
          q: 'Warum widersprechen sich die Tool-Vergleiche im Netz?',
          a: 'Weil die Mehrheit der auffindbaren Reviews von Unternehmen veröffentlicht wird, die selbst ein konkurrierendes Tool verkaufen. Die Preise sind meist korrekt, die Bewertung ist interessengeleitet. Wer einen Vergleich liest, sollte zuerst prüfen, wem die Domain gehört.',
        },
        {
          q: 'Können Tools messen, ob ChatGPT meine Marke ohne Link nennt?',
          a: 'Teilweise. Prompt-basierte Tools erfassen Markennennungen im Antworttext und werten sie als Mention, auch ohne Quellenangabe. Vollständig ist das nie, weil solche Nennungen aus dem Modellwissen kommen und keine Citation-Statistik auslösen. Deshalb sollten Mention Rate und Citation Rate getrennt berichtet werden.',
        },
      ]}
      sources={[
        {
          label: 'Ahrefs Hilfe und Academy',
          text: 'Funktionsumfang von Brand Radar, abgedeckte AI-Indizes und Prompt-Datenbank.',
          href: 'https://help.ahrefs.com/en/articles/11064852-what-is-brand-radar-and-how-to-use-it',
        },
        {
          label: 'Peec AI Preisseite',
          text:
            'Tarifstufen Starter, Pro, Advanced und Enterprise, Staffelung nach Projekten und Ländern. Abgedeckte Plattformen laut Preistabelle: ChatGPT, AI Mode, AI Overviews, Microsoft Copilot, Perplexity, Gemini.',
          href: 'https://peec.ai/pricing',
        },
        {
          label: 'Microsoft Bing Webmaster Blog (Februar 2026)',
          text:
            'Start des AI-Performance-Berichts als Public Preview mit Total Citations, zitierten Seiten und Grounding Queries.',
          href: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        },
        {
          label: 'Google Search Console Hilfe',
          text:
            'Generative-AI-Bericht: ausschließlich Impressionen, Dimensionen Seiten, Länder, Datum und Geräte, abgedeckte Oberflächen AI Overviews und AI Mode.',
          href: 'https://support.google.com/webmasters/answer/16984139',
        },
        {
          label: 'Öffentliche Preisvergleiche (Stand August 2026)',
          text:
            'Preisangaben zu Otterly.ai, Scrunch AI, Profound und Semrush stammen aus mehreren öffentlichen Vergleichsübersichten. Mehrheitlich veröffentlicht von Anbietern konkurrierender Tools, deshalb hier nur als Größenordnung übernommen.',
        },
      ]}
      relatedArticles={[
        {
          title: 'Citation Rate: Definition, Formel und Benchmarks',
          description:
            'Die Kennzahl, die alle diese Tools ausweisen, sauber definiert. Mit Zahlen aus zwei echten Bing-Exporten.',
          href: '/wissen/citation-rate',
          tag: 'KPI',
        },
        {
          title: 'Search Console vs Bing Webmaster Tools',
          description:
            'Die beiden kostenlosen Datenquellen im direkten Vergleich: was Google seit Juni 2026 liefert und was Bing seit Februar 2026 kann.',
          href: '/wissen/gsc-vs-bing-webmaster-tools',
          tag: 'Messung',
        },
        {
          title: 'AI SEO Tools 2026: was sich lohnt',
          description:
            'Der breitere Blick über Monitoring hinaus: Content-Tools, technische Tools und was man getrost ignorieren kann.',
          href: '/wissen/ai-seo-tools',
          tag: 'Tools',
        },
        {
          title: 'KI-Sichtbarkeit messen: Tools, KPIs und Methoden',
          description: 'Die vier Messebenen und wie du sie in einem Dashboard zusammenführst.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Analytics',
        },
      ]}
      ctaTitle="Bevor du ein Abo abschließt: zwei kostenlose Berichte auswerten"
      ctaText="Im kostenlosen 15-Minuten-Gespräch schauen wir gemeinsam in deine Bing- und Google-Daten und klären, ob ein Monitoring-Tool in deinem Fall überhaupt etwas hinzufügt."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

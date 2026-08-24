import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function SichtbarkeitInGeminiPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/sichtbarkeit-in-gemini"
      breadcrumbLabel="Sichtbarkeit in Gemini"
      eyebrow="Gemini"
      title="Sichtbarkeit in Google Gemini: So erscheinst du in Googles KI"
      description="Gemini ist nicht irgendeine KI, es ist Googles KI: eingebaut in Search, Gmail, Workspace und Android. Mit über 2 Milliarden Chrome-Nutzern und 8,5 Milliarden Suchanfragen pro Tag hat Gemini die größte Reichweite aller KI-Systeme. Dieser Guide zeigt dir, wie du dort sichtbar wirst."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryTitle="Zusammenfassung"
      summaryItems={[
        'Gemini nutzt Googles eigene Ranking-Signale, dein Google-Ranking ist damit direkter Hebel für Gemini-Sichtbarkeit.',
        'AI Overviews in der Google-Suche und die Gemini App nutzen dieselben Modelle, aber unterschiedliche Kontexte.',
        'E-E-A-T (Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit) ist bei Gemini noch wichtiger als im klassischen Google-Ranking.',
        'Strukturierte Daten und Knowledge-Graph-Präsenz werden von Gemini direkt verarbeitet, nicht nur als Ranking-Signal gewertet.',
        'YouTube-Inhalte fließen in Gemini-Antworten ein, ein Kanal, den die meisten Unternehmen übersehen.',
      ]}
      sections={[
        {
          id: 'warum-gemini',
          heading: 'Warum Google Gemini alles verandert',
          intro:
            'ChatGPT meldet rund 800 Millionen wöchentliche Nutzer. Beeindruckend. Google kommt über alle Dienste auf etwa 4,3 Milliarden. Wenn Google seine KI in die Suche einbaut, und genau das passiert mit AI Overviews, dann verändert sich nicht ein Kanal. Dann verändert sich das gesamte Suchverhalten.',
          paragraphs: [
            'Gemini ist kein isoliertes Produkt. Es ist in das größte digitale Ökosystem der Welt integriert: Google Search, Gmail, Google Docs, Google Maps, Android, YouTube. Wenn ein Nutzer in Gmail eine E-Mail von einem Dienstleister bekommt und Gemini fragt "Ist dieser Anbieter gut?", dann nutzt Gemini alles, was Google über diesen Anbieter weiß: Bewertungen, Rankings, Knowledge Graph, YouTube-Videos, Suchhistorie.',
          ],
          chart: {
            variant: 'row',
            title: 'Reichweite, so weit die Anbieter sie selbst beziffern',
            axis: { title: 'Millionen Nutzer' },
            highlight: 'peak',
            points: [
              { label: 'ChatGPT', short: 'ChatGPT', value: 800, note: 'wöchentlich aktive Nutzer, OpenAI' },
              { label: 'Google', short: 'Google', value: 4300, note: 'Nutzer über alle Dienste' },
            ],
            table: { label: 'Werte anzeigen', heads: ['System', 'Millionen Nutzer'] },
            caption:
              'Die beiden Zahlen sind nicht gleich definiert: OpenAI zählt wöchentlich aktive Nutzer, Google zählt Nutzer über alle Dienste hinweg. Der Vergleich taugt deshalb nur für die Größenordnung, und die Größenordnung ist genau der Punkt.',
          },
          cards: [
            {
              title: 'Google Search',
              text: 'AI Overviews erscheinen bei immer mehr Suchanfragen direkt über den organischen Ergebnissen. Sie fassen Informationen zusammen und empfehlen Quellen, bevor der Nutzer überhaupt scrollt.',
            },
            {
              title: 'Workspace & Gmail',
              text: 'Gemini ist in Google Docs, Sheets, Gmail und Slides integriert. Wenn jemand in Docs recherchiert oder in Gmail nach Empfehlungen fragt, antwortet Gemini mit Googles gesamtem Wissensgraph.',
            },
            {
              title: 'Android & Maps',
              text: 'Auf Android-Geräten ist Gemini der Standard-Assistent. Bei lokalen Anfragen greift es auf Google Maps und Business Profile zu, direkt auf dem Sperrbildschirm.',
            },
          ],
          quote:
            'Gemini ist nicht ein weiteres KI-Tool, das du optimieren musst. Es ist die KI-Schicht über dem gesamten Google-Ökosystem. Und dieses Ökosystem kennt deine Kunden bereits.',
        },
        {
          id: 'gemini-problem',
          heading: 'Das Gemini-Problem: Google kennt dich, aber empfiehlt dich nicht',
          intro:
            'Du rankst auf Seite 1 bei Google. Seit Jahren. Du hast in SEO investiert, Backlinks aufgebaut, Content erstellt. Und trotzdem: wenn jemand Gemini fragt, welcher Dienstleister in Hamburg für dein Thema gut ist, empfiehlt es jemand anderen.',
          paragraphs: [
            'Das ist das Paradox der Gemini-Sichtbarkeit: Google hat alle Daten über dich. Dein Ranking, deine Bewertungen, dein Business Profile, deine Schema-Daten. Aber Gemini nutzt diese Daten anders als die klassische Suche. Es fasst zusammen, gewichtet neu, und präsentiert eine einzelne Antwort statt zehn blauer Links.',
          ],
          cards: [
            {
              title: 'AI Overviews fressen deinen organischen Traffic, und du merkst es nicht',
              text: 'Wenn AI Overviews die Antwort direkt in der Suche liefern, klickt der Nutzer nicht mehr auf dein Ergebnis. Dein Ranking bleibt gleich, aber dein Traffic sinkt. In der Search Console siehst du sinkende Klicks bei stabilen Impressionen, das klassische Zeichen für AI-Overview-Kannibalisierung.',
            },
            {
              title: 'Du rankst auf Seite 1, aber Gemini empfiehlt jemand anderen',
              text: 'Gemini wählt nicht automatisch das Top-Ranking-Ergebnis. Es bevorzugt Quellen mit starken E-E-A-T-Signalen, strukturierten Daten und Knowledge-Graph-Präsenz. Ein Wettbewerber mit schlechterem Ranking, aber besserem Schema-Markup kann dich in Gemini-Antworten verdrängen.',
            },
            {
              title: 'Google kennt alles uber dich, nutzt es aber nicht fur Gemini-Empfehlungen',
              text: 'Google hat deine Daten, aber Gemini braucht sie in einem bestimmten Format. Ohne strukturierte Daten, ohne vollständiges Business Profile, ohne Knowledge-Panel-Präsenz kann Gemini deine Informationen nicht effizient verarbeiten, auch wenn sie im Index liegen.',
            },
            {
              title: 'Deine Konkurrenz erscheint im Knowledge Panel, du nicht',
              text: 'Knowledge Panels sind Geminis Vertrauensanker. Unternehmen mit eigenem Knowledge Panel werden von Gemini als Entitäten erkannt und bevorzugt zitiert. Ohne Panel bist du für Gemini eine von Millionen Webseiten statt einer erkannten Marke.',
            },
          ],
        },
        {
          id: 'quellenauswahl',
          heading: 'Wie Gemini Quellen auswahlt',
          intro:
            'Gemini hat einen fundamentalen Vorteil gegenüber ChatGPT und Perplexity: es sitzt direkt auf Googles Infrastruktur. Das bedeutet Zugriff auf den größten Suchindex der Welt, den Knowledge Graph mit Milliarden von Entitäten, und 25 Jahre Ranking-Erfahrung.',
          paragraphs: [
            'Aber Gemini kopiert nicht einfach die Google-Suchergebnisse. Es nutzt Googles Signale als Basis und legt KI-spezifische Bewertungskriterien darüber.',
          ],
          cards: [
            {
              title: 'Googles Ranking-Signale als Fundament',
              text: 'Seiten, die bei Google gut ranken, haben einen Startvorteil bei Gemini. Aber es ist nur ein Startvorteil, keine Garantie. Gemini nutzt die Ranking-Daten, um einen Pool relevanter Quellen zu identifizieren, und filtert dann nach zusätzlichen Kriterien.',
            },
            {
              title: 'E-E-A-T als Vertrauensfilter',
              text: 'Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit, bei Gemini noch wichtiger als im klassischen Ranking. Gemini präsentiert eine einzige Antwort, nicht zehn Ergebnisse. Deshalb muss die Quelle maximal vertrauenswürdig sein. Seiten mit klarer Autorenschaft, nachweisbarer Expertise und zitierbaren Referenzen werden bevorzugt.',
            },
            {
              title: 'Strukturierte Daten als Direktzugang',
              text: 'Schema.org Markup ist für Gemini nicht nur ein Ranking-Signal, es ist ein Verarbeitungsformat. Gemini kann strukturierte Daten direkt interpretieren: FAQPage-Markup wird zu Antworten, Product-Markup zu Empfehlungen, LocalBusiness-Markup zu lokalen Vorschlägen. Ohne strukturierte Daten muss Gemini raten, was dein Content bedeutet.',
            },
            {
              title: 'Knowledge Graph Integration',
              text: 'Googles Knowledge Graph enthält Milliarden vernetzter Entitäten: Unternehmen, Personen, Orte, Produkte. Wenn dein Unternehmen als Entität im Knowledge Graph existiert, kann Gemini es als eigenständige Marke erkennen und in Beziehung zu anderen Entitäten setzen. Ohne Knowledge-Graph-Präsenz bist du für Gemini als Marke unsichtbar.',
            },
          ],
        },
        {
          id: 'gemini-vs-aio',
          heading: 'Gemini vs AI Overviews: Was ist der Unterschied?',
          intro:
            'Beide nutzen Gemini-Modelle. Aber der Kontext ist komplett unterschiedlich, und damit auch die Optimierungsstrategie.',
          table: {
            headers: ['Kriterium', 'Gemini App', 'AI Overviews in Search'],
            emphasis: 1,
            rows: [
              [
                'Was es ist',
                'Eigenständiger KI-Assistent unter gemini.google.com und in der mobilen App.',
                'KI-generierte Zusammenfassungen direkt in den Google-Suchergebnissen, über den organischen Treffern.',
              ],
              [
                'Nutzungssituation',
                'Nutzer führen Gespräche, stellen komplexe Fragen, lassen sich beraten.',
                'Nutzer stellen eine Suchanfrage und bekommen die Antwort sofort.',
              ],
              [
                'Kontext',
                'Kennt die Gesprächshistorie, kann Rückfragen stellen, zieht bei Bedarf Search, Maps und YouTube heran.',
                'Suchgetrieben, reagiert auf eine spezifische Query.',
              ],
              [
                'Quellenauswahl',
                'Breite Autorität über alle Google-Dienste hinweg.',
                'Enger an das klassische Ranking gebunden, Quellen kommen aus den Top-Suchergebnissen.',
              ],
              [
                'Optimierung',
                'Knowledge-Graph-Präsenz und konsistente Markeninformationen über alle Google-Dienste.',
                'Featured-Snippet-Optimierung, direkte Antworten in den ersten Absätzen, strukturierte Daten, klare H2-Hierarchie.',
              ],
            ],
            caption:
              'Dieselben Modelle, zwei Kontexte. Die Zeile Optimierung ist der Grund, warum eine Gemini-Strategie nicht dieselbe Arbeit ist wie eine AI-Overview-Strategie.',
          },
          warning: {
            title: 'Wichtig',
            text: 'Du brauchst Sichtbarkeit in beiden Kontexten. AI Overviews betreffen jeden, der Google nutzt, ob er will oder nicht. Die Gemini App wird von Power-Usern genutzt, die tiefergehende Entscheidungen treffen. Wer in beiden sichtbar ist, deckt Googles gesamte KI-Fläche ab.',
          },
        },
        {
          id: 'strategien',
          heading: '7 Strategien fur Gemini-Sichtbarkeit',
          intro:
            'Sieben Hebel, sortiert nach dem Verhältnis von Aufwand zu Wirkung. Die ersten vier gehören in jedes Projekt, die letzten drei entscheiden über den Vorsprung.',
          steps: [
            {
              title: 'Google Business Profile vollstandig optimieren',
              text: 'Für lokale Gemini-Anfragen ist das Google Business Profile der wichtigste Datenpunkt. Gemini zieht diese Daten direkt in seine Antworten, unvollständige Profile werden übersprungen.',
              bullets: [
                'Vollständige Beschreibung mit relevanten Keywords.',
                'Alle Kategorien korrekt gesetzt.',
                'Aktuelle Öffnungszeiten.',
                'Hochwertige Fotos, mindestens zehn.',
                'Regelmäßige Posts, mindestens zwei pro Monat.',
                'Aktiv beantwortete Bewertungen.',
              ],
            },
            {
              title: 'Schema.org Markup implementieren',
              text: 'Gemini verarbeitet strukturierte Daten direkt. Implementiere mindestens diese fünf Typen:',
              bullets: [
                'LocalBusiness oder Organization Schema mit vollständigen NAP-Daten.',
                'FAQPage für häufige Fragen.',
                'Article mit Autor und Datum für Fachcontent.',
                'Product oder Service für dein Angebot.',
                'BreadcrumbList für die Seitenstruktur.',
              ],
              outro:
                'Teste jedes Markup mit Googles Rich Results Test. Fehlerhafte Schemas sind schlimmer als keine Schemas.',
            },
            {
              title: 'E-E-A-T-Signale maximieren',
              text: 'Gemini wählt eine Quelle, nicht zehn. Deshalb muss diese Quelle maximales Vertrauen ausstrahlen. Konkret:',
              bullets: [
                'Autorenprofile mit nachweisbarer Expertise auf jeder Seite.',
                'Impressum und Kontaktdaten prominent sichtbar.',
                'Quellenangaben und Referenzen in Fachartikeln.',
                'Zertifizierungen und Auszeichnungen im Schema-Markup.',
                'Regelmäßig aktualisierte Inhalte mit sichtbarem Änderungsdatum.',
              ],
            },
            {
              title: 'Content fur Featured Snippets optimieren',
              text: 'AI Overviews bauen häufig auf denselben Quellen auf, die Google bereits für Featured Snippets auswählt. Optimiere dafür:',
              bullets: [
                'Direkte Antwort in den ersten zwei bis drei Sätzen nach der H2.',
                'Klare Listenformate für Prozesse und Aufzählungen.',
                'Tabellen für Vergleiche.',
                'Kurze Absätze, maximal drei bis vier Sätze.',
                'Fragen als H2-Überschriften, im exakten Wortlaut, wie Nutzer sie stellen.',
              ],
            },
            {
              title: 'Knowledge Panel aufbauen',
              text: 'Ein eigenes Knowledge Panel ist der stärkste Vertrauensindikator für Gemini. So baust du es auf:',
              bullets: [
                'Wikipedia-Eintrag anstreben: hohe Hürde, aber stärkster Hebel.',
                'Wikidata-Eintrag erstellen: niedrigere Hürde, direkter Knowledge-Graph-Zugang.',
                'Konsistente Unternehmensdaten über alle Google-Dienste.',
                'Presseartikel und Erwähnungen auf autoritativen Quellen.',
                'Google Search Console mit deiner Marke verknüpfen.',
              ],
            },
            {
              title: 'YouTube-Prasenz nutzen',
              text: 'Gemini versteht Video. Es kann YouTube-Inhalte analysieren und in Antworten einbeziehen, ein Kanal, den die meisten Unternehmen für KI-Sichtbarkeit komplett ignorieren.',
              bullets: [
                'Erklärvideos zu deinen Kernthemen erstellen.',
                'Aussagekräftige Titel und Beschreibungen mit relevanten Keywords.',
                'Kapitelmarker für einzelne Themen setzen.',
                'Videos transkribieren und die Transkripte verlinken.',
              ],
              outro:
                'Ein YouTube-Kanal mit 20 Fachvideos kann mehr Gemini-Sichtbarkeit bringen als 100 Blogartikel.',
            },
            {
              title: 'Google Workspace Signals nutzen',
              text: 'Gemini ist in Google Workspace integriert. Wenn Nutzer in Google Docs recherchieren oder in Gmail nach Empfehlungen fragen, greift Gemini auf denselben Datenpool zu. Stelle sicher, dass dein Unternehmen in Google-Diensten konsistent präsent ist:',
              bullets: [
                'Google Business Profile.',
                'Beiträge in Google Maps.',
                'Google News für Presseartikel.',
                'YouTube.',
                'Google Scholar für Fachartikel.',
              ],
              outro: 'Je mehr Google-Touchpoints, desto sichtbarer für Gemini.',
            },
          ],
        },
        {
          id: 'hamburg',
          heading: 'Gemini fur Hamburger Unternehmen',
          intro:
            'Hamburg ist die zweitgrößte Stadt Deutschlands. Bei lokalen Anfragen wie "Bester Steuerberater in Hamburg" oder "Webdesign Agentur Hamburg Empfehlung" greift Gemini massiv auf Google Business Profile und lokale Signale zurück.',
          paragraphs: [
            'Für Hamburger Unternehmen bedeutet das: dein Google Business Profile ist nicht optional. Es ist dein wichtigster Gemini-Datenpunkt. Wenn Gemini auf einem Android-Handy in Hamburg eine lokale Empfehlung ausspricht, zieht es als erstes die Business-Profile-Daten heran.',
          ],
          cards: [
            {
              title: 'Lokale Autoritat aufbauen',
              text: 'Gemini bewertet lokale Autorität: Erwähnungen in Hamburger Medien (Hamburger Abendblatt, MOPO, hamburg.de), Mitgliedschaft in der Handelskammer Hamburg, Einträge in lokalen Branchenverzeichnissen, Bewertungen von Hamburger Kunden. Je stärker dein lokales Signal, desto wahrscheinlicher die Gemini-Empfehlung bei Hamburg-bezogenen Anfragen.',
            },
            {
              title: 'Google Maps und Android',
              text: 'In Hamburg nutzen Millionen Menschen Android-Geräte mit Gemini als Standard-Assistent. Wenn sie unterwegs fragen, wo es guten Kaffee in der Nähe gibt oder wer einen Handwerker in Eimsbüttel empfehlen kann, zieht Gemini Google-Maps-Daten, Bewertungen und Entfernungen heran. Ein optimiertes Google Business Profile mit korrekter Adresse, Öffnungszeiten und Fotos ist der Zugang zu diesen Empfehlungen.',
            },
          ],
        },
      ]}
      faqTitle="Haufig gestellte Fragen"
      faqs={[
        {
          q: 'Wie werde ich in Google Gemini sichtbar?',
          a: 'Optimiere dein Google Business Profile, implementiere Schema.org Markup, baue E-E-A-T-Signale auf und sorge für Featured-Snippet-taugliche Inhalte. Gemini nutzt Googles eigene Ranking-Signale plus KI-spezifische Kriterien.',
        },
        {
          q: 'Was ist der Unterschied zwischen Gemini und AI Overviews?',
          a: 'Gemini ist Googles KI-Assistent als eigenständige App. AI Overviews sind KI-Zusammenfassungen in den Suchergebnissen. Beide nutzen Gemini-Modelle, aber in unterschiedlichen Kontexten.',
        },
        {
          q: 'Beeinflusst mein Google-Ranking die Gemini-Sichtbarkeit?',
          a: 'Ja, direkt. Gemini greift auf Googles Index und Ranking-Signale zurück. Ein gutes Google-Ranking ist ein Startvorteil, aber allein nicht ausreichend, E-E-A-T und strukturierte Daten sind zusätzlich entscheidend.',
        },
        {
          q: 'Wie wichtig ist das Google Business Profile fur Gemini?',
          a: 'Sehr wichtig, besonders für lokale Anfragen. Gemini greift direkt auf Business-Profile-Daten zu. Vollständigkeit, aktuelle Informationen und aktives Bewertungsmanagement sind Pflicht.',
        },
        {
          q: 'Kann ich messen, ob Gemini mein Unternehmen empfiehlt?',
          a: 'Prüfe AI-Overview-Impressionen in der Google Search Console, tracke Referral-Traffic von gemini.google.com, und führe regelmäßige Prompt-Tests mit branchenspezifischen Fragen durch.',
        },
        {
          q: 'Welche Rolle spielt YouTube fur die Gemini-Sichtbarkeit?',
          a: 'Gemini kann YouTube-Videos analysieren und in Antworten einbeziehen. Eine aktive YouTube-Präsenz mit Fachvideos, optimierten Titeln und Kapitelmarkern eröffnet einen zusätzlichen Sichtbarkeitskanal.',
        },
        {
          q: 'Wie schnell wirken Optimierungen fur Gemini?',
          a: 'Schneller als bei ChatGPT, da Gemini auf den Live-Google-Index zugreift. Strukturierte Daten und Änderungen am Business Profile können innerhalb von Tagen wirken. E-E-A-T und Knowledge Graph brauchen Wochen bis Monate.',
        },
      ]}
      sources={[
        {
          label: 'Google Blog',
          text: 'Introducing Gemini, Googles most capable AI model.',
          href: 'https://blog.google/technology/ai/google-gemini-ai/',
        },
        {
          label: 'Google Search Central',
          text: 'AI Overviews and your website.',
          href: 'https://developers.google.com/search/docs/appearance/ai-overviews',
        },
        {
          label: 'Google Developers, Structured Data',
          text: 'Introduction to structured data and Search features.',
          href: 'https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data',
        },
        {
          label: 'Google Developers, Helpful Content',
          text: 'Creating helpful, reliable, people-first content (E-E-A-T).',
          href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        },
        {
          label: 'Search Engine Land',
          text: 'Google AI Overviews, how they work and what it means for SEO.',
          href: 'https://searchengineland.com/google-ai-overviews-how-they-work-442547',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description:
            'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'Sichtbarkeit in AI Overviews',
          description: 'Wie du in Googles KI-Zusammenfassungen als Quelle erscheinst.',
          href: '/wissen/ai-overviews-sichtbarkeit',
          tag: 'Plattform',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPTs Dual-System funktioniert und wie du dort empfohlen wirst.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'Plattform',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description:
            'Schema-Markup, Crawler-Zugang und technische Grundlagen für KI-Optimierung.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Metriken, Tools und Methoden für die Erfolgsmessung deiner KI-Sichtbarkeit.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Erscheinst du in Gemini und AI Overviews?"
      ctaText="Ich prüfe, ob und wie Gemini dein Unternehmen aktuell darstellt, in der Gemini App und in AI Overviews. Inklusive Check des Google Business Profile und Schema-Analyse. Kostenlos, in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

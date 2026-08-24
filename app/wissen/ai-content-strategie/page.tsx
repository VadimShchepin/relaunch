import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function AIContentStrategiePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ai-content-strategie"
      breadcrumbLabel="AI Content Strategie"
      eyebrow="Content"
      title="AI Content Strategie: Inhalte, die KI-Systeme zitieren wollen"
      description="Du produzierst Content wie 2020, aber KI liest anders als Google. Dein Blog hat 100 Artikel, aber kein einziger wird von ChatGPT zitiert. Hier erfährst du, wie du Inhalte erstellst, die KI-Systeme als Quelle nutzen."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      image={{
        src: '/images/wissen/ai-content-strategie/hero-ai-content-strategy.webp',
        alt: 'Content-Strategie-Dashboard mit Answer-First-Artikeln, Quellenkarten, FAQ-Modulen und Zitationspfaden für KI-Systeme',
        caption:
          'Zitierbarer Content entsteht aus klaren Antworten, belastbaren Quellen und modularer Struktur, nicht aus längeren Keyword-Texten.',
        width: 1672,
        height: 941,
      }}
      summaryItems={[
        'KI zitiert anders als Google rankt. Keyword-optimierter Content ist nicht automatisch zitierbarer Content.',
        'Answer-First ist Pflicht. KI-Systeme bevorzugen Inhalte, die die Antwort sofort liefern, nicht nach 500 Wörtern Einleitung.',
        'Princeton-Studie: Strukturierte, autoritative Inhalte erhalten 115 % mehr KI-Zitierungen als unstrukturierter Content.',
        '3 Content-Typen dominieren: Definitorisch ("Was ist X?"), Vergleich ("X vs Y"), How-To (Schritt-für-Schritt).',
        'Content ohne Quellen ist für KI wertlos. Zahlen, Studien und verifizierbare Fakten machen deinen Content zitierbar.',
      ]}
      sections={[
        {
          id: 'warum-nicht',
          heading: 'Warum deine Content-Strategie für KI-Systeme nicht funktioniert',
          intro:
            'Dein Content rankt bei Google. Vielleicht sogar auf Seite 1. Aber frag ChatGPT nach deinem Thema, und dein Unternehmen taucht nicht auf. KI-Systeme brauchen andere Inhalte als Suchmaschinen.',
          paragraphs: [
            'Das Problem: Keyword-optimierter Content ist nicht dasselbe wie zitierbarer Content. Google bewertet Relevanz anhand von Keywords, Backlinks und Nutzerverhalten. KI-Systeme bewerten, ob sie eine Aussage sicher weiterempfehlen können. Das erfordert andere Strukturen, andere Formate, andere Inhalte.',
            'Die typischen Symptome: Dein Blog hat dutzende Artikel, aber kein einziger wird von ChatGPT zitiert. Deine Landingpages performen bei Google, aber Perplexity ignoriert sie komplett. Du investierst in Content-Marketing, aber der ROI sinkt, weil immer mehr Nutzer KI statt Google fragen.',
            'Content ohne Struktur ist für KI unsichtbar. Lange Fließtexte ohne klare Hierarchie, ohne Fakten, ohne Quellen sind für ein Sprachmodell nicht verwertbar. KI braucht extrahierbare, verifizierbare Informationsbausteine.',
          ],
          stat:
            'Princeton-Studie (GEO): Strukturierte, autoritative Inhalte mit Quellenverweisen erhalten 115 % mehr Zitierungen in KI-generierten Antworten.',
        },
        {
          id: 'erwartungen',
          heading: 'Was KI-Systeme von Content erwarten',
          intro:
            'KI-Systeme sind keine Suchmaschinen. Sie generieren Antworten. Dafür brauchen sie Content, der fünf Kriterien erfüllt.',
          cards: [
            {
              title: 'Answer-First',
              text: 'Die Antwort steht sofort im ersten Absatz. Kontext und Details folgen danach. KI extrahiert bevorzugt die ersten 2-3 Sätze eines Abschnitts. Wer die Antwort erst nach 500 Wörtern Einleitung liefert, wird übersprungen.',
            },
            {
              title: 'Faktenbasiert',
              text: 'Zahlen, Studien, Quellen. KI-Systeme können Aussagen mit Belegen sicherer weiterempfehlen als Meinungen ohne Grundlage. "Unserer Erfahrung nach" ist schwächer als "Laut Princeton-Studie (2024)".',
            },
            {
              title: 'Strukturiert',
              text: 'Klare H2/H3-Hierarchie, Listen, Tabellen. KI-Systeme parsen Inhalte anhand ihrer Struktur. Ein langer Fließtext ohne Zwischenüberschriften ist für Sprachmodelle schwer zu verarbeiten und wird seltener zitiert.',
            },
            {
              title: 'Eindeutig',
              text: 'Keine Mehrdeutigkeit, klare Aussagen. "Es kommt darauf an" ist keine Antwort, die KI zitieren kann. Konkrete Empfehlungen mit Kontext ("Für Unternehmen mit unter 50 Mitarbeitern empfehlen wir X") sind zitierbarer.',
            },
            {
              title: 'Aktuell',
              text: 'Datum sichtbar, regelmäßige Updates. KI-Systeme bevorzugen aktuelle Inhalte, insbesondere Perplexity und Google AI Overviews, die das Live-Web durchsuchen. Ein Artikel von 2022 ohne Update-Datum wird gegenüber einem aktuellen Beitrag benachteiligt. Zeige dein Aktualisierungsdatum prominent.',
            },
          ],
        },
        {
          id: 'content-typen',
          heading: 'Die 3 Content-Typen, die KI liebt',
          intro:
            'Nicht jeder Content-Typ wird gleich häufig von KI zitiert. Diese drei Formate dominieren in KI-Antworten, jeweils mit der Vorlage, die sich in der Praxis bewährt hat.',
          steps: [
            {
              title: 'Definitorischer Content: "Was ist X?"',
              text: 'Wird für Erklärungen zitiert. Wenn jemand ChatGPT fragt "Was ist Generative Engine Optimization?", sucht die KI nach klaren, prägnanten Definitionen mit Kontext.',
              bullets: [
                'Vorlage: "[Begriff] ist [klare Definition in 1-2 Sätzen]. Im Unterschied zu [Abgrenzung] fokussiert sich [Begriff] auf [Kernaspekt]. Für Unternehmen bedeutet das: [praktische Relevanz]."',
              ],
            },
            {
              title: 'Vergleichs-Content: "X vs Y"',
              text: 'Wird für Empfehlungen genutzt. KI-Nutzer fragen "Was ist besser, X oder Y?" oder "Welches Tool für Z?". Ehrliche, strukturierte Vergleiche werden bevorzugt zitiert.',
              bullets: [
                'Vorlage: "[X] eignet sich am besten für [Zielgruppe/Anwendungsfall]. [Y] ist die bessere Wahl, wenn [Bedingung]. Der wichtigste Unterschied: [Kernunterschied mit Fakten]."',
              ],
            },
            {
              title: 'How-To Content: Schritt-für-Schritt',
              text: 'Wird für Anleitungen zitiert. Wenn Nutzer KI nach konkreten Anleitungen fragen, extrahiert die KI nummerierte Schritte aus strukturierten Guides.',
              bullets: [
                'Vorlage: "Um [Ziel] zu erreichen, folge diesen [Anzahl] Schritten: 1. [Aktion + erwartetes Ergebnis] 2. [Aktion + erwartetes Ergebnis] ... Wichtig dabei: [Kernwarnung oder Tipp]."',
              ],
            },
          ],
        },
        {
          id: 'content-audit',
          heading: 'Content-Audit: Ist dein Content KI-ready?',
          intro:
            'Prüfe deine wichtigsten Seiten anhand dieser Checkliste. Je mehr Punkte du abhaken kannst, desto höher die Wahrscheinlichkeit, dass KI deinen Content zitiert.',
          table: {
            headers: ['KI-Content-Checkliste', 'Woran du es erkennst'],
            rows: [
              ['Answer-First', 'Die Kernantwort steht in den ersten 2-3 Sätzen jedes Abschnitts'],
              ['Klare H2/H3-Hierarchie', 'Jeder Abschnitt hat eine beschreibende Zwischenüberschrift'],
              ['Quellenangaben', 'Statistiken und Aussagen sind mit Studien oder Quellen belegt'],
              ['Aktualität', 'Veröffentlichungs- und Aktualisierungsdatum sind sichtbar'],
              ['Strukturierte Daten', 'FAQ-, Article- oder HowTo-Schema ist implementiert'],
              ['Listen und Tabellen', 'Komplexe Informationen sind in extrahierbaren Formaten'],
              ['Eindeutige Aussagen', 'Keine vagen Formulierungen wie "es kommt darauf an" ohne Kontext'],
              ['Entitäten abgedeckt', 'Relevante Begriffe, Personen und Konzepte sind erwähnt und verknüpft'],
              ['Interne Verlinkung', 'Der Artikel ist Teil eines Topic Clusters mit verwandten Inhalten'],
              ['Kein Keyword-Stuffing', 'Der Text liest sich natürlich und informativ'],
              ['Unique Insights', 'Der Content bietet eigene Daten, Erfahrungen oder Perspektiven'],
              ['Autoreninfo', 'Ein erkennbarer Autor mit Expertise ist zugeordnet'],
              ['Meta-Beschreibung', 'Fasst den Inhalt in 1-2 Sätzen präzise zusammen'],
            ],
            caption:
              'Bewertung: 11-13 Punkte = KI-ready. 7-10 Punkte = gute Basis, aber Optimierungsbedarf. Unter 7 = dringender Handlungsbedarf.',
          },
        },
        {
          id: 'strategien',
          heading: '7 Strategien für KI-optimierten Content',
          intro: 'Von der wichtigsten zur fortgeschrittensten. Starte mit Strategie 5.1 und arbeite dich vor.',
          steps: [
            {
              title: 'Answer-First schreiben',
              text: 'Jeder Abschnitt beginnt mit der Kernantwort. Nicht mit einer Einleitung, nicht mit Kontext, nicht mit einer rhetorischen Frage: die Antwort zuerst, die Erklärung danach. KI-Systeme extrahieren bevorzugt die ersten Sätze eines Abschnitts. Wenn deine Antwort erst im dritten Absatz kommt, wird sie möglicherweise nicht erfasst. Journalisten nennen das "Inverted Pyramid", und es ist das effektivste Format für KI-Zitierungen.',
            },
            {
              title: 'Topic Clusters aufbauen',
              text: 'Einzelne Artikel sind schwächer als vernetzte Content-Cluster. Ein Pillar-Artikel zum Hauptthema, verlinkt mit 5-10 spezifischen Unterartikeln, signalisiert KI-Systemen umfassende Expertise. Beispiel: Statt eines einzelnen Artikels "KI-Sichtbarkeit" erstellst du einen Pillar-Guide plus Unter-Guides zu ChatGPT, Perplexity, technischer Umsetzung, Content-Strategie und Messung. KI erkennt die thematische Tiefe und zitiert häufiger.',
            },
            {
              title: 'Statistiken und Quellen einbauen',
              text: 'KI-Systeme bevorzugen verifizierbare Aussagen. "Laut Gartner (2024) verlieren Marken bis 2028 über 50 % ihres organischen Traffics" ist zitierbarer als "Der Traffic wird sinken". Baue in jeden Artikel mindestens 3-5 Quellenverweise ein. Nenne die Quelle, das Jahr und die Kernaussage. Verlinke, wenn möglich. Das erhöht nicht nur die KI-Zitierbarkeit, sondern auch die E-E-A-T-Signale für Google.',
            },
            {
              title: 'FAQ-Sektionen für jede Seite',
              text: 'FAQ-Bereiche sind Gold für KI-Zitierungen, weil sie exakt das Format liefern, das KI braucht: eine klare Frage und eine präzise Antwort. Ergänze jede wichtige Seite um 5-7 relevante Fragen mit ausführlichen Antworten (3-5 Sätze). Implementiere FAQPage-Schema-Markup. Die Fragen sollten echte Nutzerfragen sein, nicht Marketing-Fragen wie "Warum sind wir die Besten?".',
            },
            {
              title: 'Regelmäßige Content-Aktualisierung',
              text: 'Veralteter Content wird von KI übergangen. Perplexity und Google AI Overviews bevorzugen aktuelle Quellen, und auch Modelle wie ChatGPT gewichten in neueren Trainingsläufen aktuellere Inhalte höher. Plane quartalsweise Reviews deiner Top-Inhalte. Aktualisiere Statistiken, ergänze neue Erkenntnisse, entferne veraltete Informationen. Zeige das Aktualisierungsdatum prominent auf der Seite.',
            },
            {
              title: 'Semantische Vollständigkeit: Entitäten abdecken',
              text: 'KI-Systeme arbeiten mit Entitäten (Personen, Konzepte, Orte, Tools). Wenn dein Artikel ein Thema behandelt, aber wichtige verwandte Entitäten fehlen, wirkt er für KI unvollständig. Beispiel: Ein Artikel über "KI-Sichtbarkeit" ohne Erwähnung von ChatGPT, Perplexity, Schema.org oder E-E-A-T ist semantisch unvollständig. Recherchiere, welche Entitäten KI mit deinem Thema verknüpft, und decke sie ab.',
            },
            {
              title: 'Unique Insights statt Me-Too-Content',
              text: 'KI hat Zugang zu tausenden Artikeln zum gleichen Thema. Warum sollte sie ausgerechnet deinen zitieren? Nur wenn du etwas bietest, das andere nicht haben: eigene Daten, eigene Erfahrungsberichte, eigene Frameworks, eigene Case Studies. "Wir haben 50 Websites analysiert und festgestellt..." ist zitierbarer als eine Zusammenfassung von dem, was alle anderen auch schreiben. Originalität ist der stärkste Zitierungstreiber.',
            },
          ],
        },
        {
          id: 'formate',
          heading: 'Content-Formate im KI-Vergleich',
          intro:
            'Nicht jedes Format wird gleich häufig von KI zitiert. Diese Übersicht zeigt, welche Formate sich am besten für KI-Sichtbarkeit eignen.',
          table: {
            headers: ['Format', 'KI-Zitierbarkeit', 'Stärke'],
            emphasis: 1,
            rows: [
              ['Pillar Page', 'Sehr hoch', 'Umfassende Abdeckung, wird als autoritative Quelle erkannt'],
              ['FAQ-Seite', 'Sehr hoch', 'Perfektes Frage-Antwort-Format für KI-Extraktion'],
              ['Glossar-Eintrag', 'Sehr hoch', 'Klare Definitionen, ideal für "Was ist X?"-Anfragen'],
              ['How-To Guide', 'Hoch', 'Nummerierte Schritte, leicht extrahierbar'],
              ['Case Study', 'Mittel-Hoch', 'Einzigartige Daten und Ergebnisse, guter Unique-Insight-Faktor'],
              ['Blogpost', 'Mittel', 'Abhängig von Struktur und Quellenqualität'],
              ['Video-Transkript', 'Niedrig-Mittel', 'Nur wenn sauber strukturiert und als Text verfügbar'],
            ],
            caption:
              'Die Spalte KI-Zitierbarkeit ist eine Einordnung aus der Praxis, keine gemessene Rate: Formate mit klarer Frage-Antwort-Struktur werden am häufigsten übernommen.',
          },
        },
        {
          id: 'workflow',
          heading: 'AI Content Workflow: Von der Idee zum zitierbaren Inhalt',
          intro: 'Dieser 5-Schritte-Workflow stellt sicher, dass jeder neue Inhalt KI-optimiert ist.',
          steps: [
            {
              title: 'KI-Fragen recherchieren',
              text: 'Frag ChatGPT, Perplexity und Google AI direkt nach deinem Thema. Welche Fragen stellen Nutzer? Welche Quellen werden aktuell zitiert? Welche Lücken gibt es? Nutze auch Tools wie AlsoAsked, AnswerThePublic und die Google-Autovervollständigung für die Frage-Recherche.',
            },
            {
              title: 'Entitäten und Struktur planen',
              text: 'Definiere die Kernaussage (Answer-First), die H2/H3-Struktur und die relevanten Entitäten. Welche Begriffe, Tools, Studien und Experten müssen vorkommen? Erstelle ein Outline mit allen Elementen, bevor du schreibst.',
            },
            {
              title: 'Answer-First schreiben',
              text: 'Schreibe jeden Abschnitt mit der Antwort zuerst. Baue Statistiken und Quellenverweise ein. Nutze Listen und Tabellen für komplexe Informationen. Halte Absätze kurz (3-5 Sätze) und eindeutig.',
            },
            {
              title: 'Technisch optimieren',
              text: 'Implementiere Schema-Markup (Article, FAQ, HowTo). Prüfe die H-Tag-Hierarchie. Ergänze eine FAQ-Sektion. Setze interne Links zu verwandten Inhalten im Topic Cluster. Stelle sicher, dass Datum und Autor sichtbar sind.',
            },
            {
              title: 'Monitoring und Iteration',
              text: 'Prüfe nach 4-8 Wochen, ob dein Content in Perplexity-Antworten auftaucht. Teste relevante Fragen in ChatGPT und Google AI. Tracke KI-Referral-Traffic in GA4. Aktualisiere und verbessere basierend auf den Ergebnissen.',
            },
          ],
        },
        {
          id: 'fehler',
          heading: 'Typische Content-Fehler für KI',
          intro:
            'Diese Fehler machen deinen Content für KI-Systeme unsichtbar, auch wenn er bei Google gut performt.',
          cards: [
            {
              title: 'Zu viel Fluff, zu wenig Substanz',
              text: 'Lange Einleitungen, Füllwörter, Marketing-Floskeln. KI-Systeme suchen nach konkreten Aussagen und Fakten. "In der heutigen digitalen Welt..." ist für ein Sprachmodell wertlos. Komm direkt zum Punkt.',
            },
            {
              title: 'Keine Quellenangaben',
              text: 'Aussagen ohne Belege sind für KI schwer zu verifizieren und werden seltener zitiert. "Studien zeigen" ohne konkrete Studie ist fast so schlecht wie gar keine Aussage. Nenne immer Quelle, Jahr und Kernaussage.',
            },
            {
              title: 'Veraltete Informationen',
              text: 'Ein Guide von 2023 ohne Update wird von KI-Systemen zugunsten aktuellerer Quellen übergangen. Besonders kritisch bei schnelllebigen Themen wie KI und Technologie. Zeige das Aktualisierungsdatum und halte Inhalte aktuell.',
            },
            {
              title: 'Fehlende Struktur',
              text: 'Ein 3.000-Wörter-Fließtext ohne Zwischenüberschriften, Listen oder Tabellen ist für KI ein einziger Textblock. Daraus lassen sich einzelne Antworten schwer extrahieren. Strukturiere mit H2/H3, nutze Listen für Aufzählungen und Tabellen für Vergleiche.',
            },
            {
              title: 'Me-Too-Content ohne eigene Perspektive',
              text: 'Wenn dein Artikel das gleiche sagt wie 50 andere, hat KI keinen Grund, dich zu zitieren. Eigene Daten, eigene Frameworks, eigene Erfahrungen machen Content einzigartig und zitierbar. Frag dich: Was weiß ich, das die anderen nicht wissen?',
            },
            {
              title: 'Kein Schema-Markup',
              text: 'Strukturierte Daten (Article, FAQ, HowTo) helfen KI-Systemen, deinen Content korrekt einzuordnen. Ohne Schema-Markup verlässt du dich darauf, dass KI die Struktur selbst erkennt. Das funktioniert oft, aber nicht zuverlässig.',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Was ist der Unterschied zwischen SEO-Content und KI-optimiertem Content?',
          a: 'SEO-Content optimiert für Keywords und Rankings in Suchmaschinen. KI-optimierter Content optimiert dafür, als zitierfähige Quelle in ChatGPT, Perplexity und Google AI Overviews zu erscheinen. Der größte Unterschied: KI bevorzugt Answer-First-Strukturen mit klaren Fakten, während SEO-Content oft auf Keyword-Dichte und Verweildauer setzt. Idealerweise kombinierst du beides.',
        },
        {
          q: 'Wie schnell wirkt sich eine Content-Optimierung auf KI-Zitierungen aus?',
          a: 'Bei Perplexity oft schon nach 2-4 Wochen, weil Perplexity das Live-Web durchsucht. Bei ChatGPT und Claude dauert es länger, 3-6 Monate, da diese Modelle in Trainingszyklen aktualisiert werden. Google AI Overviews reagieren ähnlich schnell wie die normale Google-Suche, also innerhalb weniger Wochen nach Indexierung.',
        },
        {
          q: 'Muss ich meinen gesamten Content neu schreiben?',
          a: 'Nein. Ein Content-Audit zeigt dir, welche Inhalte das größte Potenzial haben. Oft reicht es, bestehende Artikel mit Answer-First-Strukturen, Quellenangaben und klaren H2/H3-Hierarchien zu überarbeiten. Fokussiere dich zuerst auf deine Top-20-Seiten nach Traffic und Relevanz.',
        },
        {
          q: 'Welche Content-Formate funktionieren am besten für KI?',
          a: 'Definitorische Inhalte ("Was ist X?"), Vergleichs-Content ("X vs Y") und How-To-Guides werden am häufigsten von KI zitiert. FAQ-Sektionen und Glossar-Einträge sind ebenfalls sehr effektiv. Die Princeton-GEO-Studie zeigt, dass strukturierte, faktenbasierte Formate 115 % mehr Zitierungen erhalten als unstrukturierte Inhalte.',
        },
        {
          q: 'Brauche ich spezielle Tools für KI-Content-Optimierung?',
          a: 'Grundlegende Optimierungen kannst du ohne spezielle Tools umsetzen: Answer-First schreiben, Quellen einbauen, Struktur verbessern. Für Monitoring empfehlen sich Ahrefs Brand Radar oder Semrush AI Visibility, um deine Präsenz in KI-Antworten zu tracken. Ein Schema-Markup-Validator hilft bei der technischen Prüfung.',
        },
        {
          q: 'Wie wichtig sind Quellenangaben für KI-Zitierungen?',
          a: 'Sehr wichtig. KI-Systeme bevorzugen Inhalte mit verifizierbaren Quellen, weil sie die Aussagen dann sicherer weiterempfehlen können. Die Princeton-Studie zeigt: Inhalte mit Statistiken und Quellenverweisen erhalten deutlich mehr KI-Zitierungen als Meinungsartikel ohne Belege.',
        },
        {
          q: 'Kann KI-optimierter Content meinem Google-Ranking schaden?',
          a: 'Nein, im Gegenteil. Die meisten KI-Content-Prinzipien, also klare Struktur, Answer-First, Quellenangaben und regelmäßige Updates, verbessern auch dein Google-Ranking. Google AI Overviews nutzen ähnliche Signale wie die organische Suche. Du optimierst also für zwei Kanäle gleichzeitig.',
        },
      ]}
      sources={[
        {
          label: 'Princeton University (2024)',
          text: '"GEO: Generative Engine Optimization", Studie zur Optimierung von Inhalten für KI-Suchmaschinen. Zeigt, dass strukturierte Inhalte mit Quellenverweisen 115 % mehr Zitierungen erhalten.',
        },
        {
          label: 'Gartner (2024)',
          text: 'Gartner-Prognose zum Rückgang des organischen Traffics durch KI-gestützte Suche bis 2028, plus 25 % weniger Suchmaschinen-Volumen bis 2026 laut Pressemitteilung vom 19.02.2024.',
          href: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents',
        },
        {
          label: 'HubSpot (2025)',
          text: '"State of Content Marketing Report", Analyse von Content-Formaten und deren Performance in KI-gestützten Suchumgebungen.',
        },
        {
          label: 'Semrush (2025)',
          text: '"AI Overviews Study", Untersuchung, welche Content-Typen in Google AI Overviews zitiert werden und welche Strukturmerkmale sie gemeinsam haben.',
        },
        {
          label: 'Rand Fishkin / SparkToro (2025)',
          text: '"Zero-Click Content", Analyse des Wandels von klickbasiertem zu zitationsbasiertem Content-Marketing.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit',
          description: 'Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet und wie du sie erreichst.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'LLMO: LLM-Optimierung',
          description: 'Wie du dein Unternehmen für ChatGPT, Claude und andere LLMs optimierst.',
          href: '/wissen/llmo-llm-optimierung',
          tag: 'LLMO',
        },
        {
          title: 'AEO: Answer Engine Optimization',
          description: 'Optimierung für Antwortmaschinen: Perplexity, Google AI und Co.',
          href: '/wissen/aeo-answer-engine-optimization',
          tag: 'AEO',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description: 'robots.txt, llms.txt, Schema.org und was KI-Crawler technisch brauchen.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
      ]}
      ctaTitle="Wird dein Content von KI zitiert?"
      ctaText="Finde heraus, wie KI-Systeme deinen Content aktuell bewerten und was du ändern musst, um als Quelle zitiert zu werden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Content-Analyse anfragen"
    />
  );
}

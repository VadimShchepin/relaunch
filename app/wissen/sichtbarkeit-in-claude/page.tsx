import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function SichtbarkeitInClaudePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/sichtbarkeit-in-claude"
      breadcrumbLabel="Sichtbarkeit in Claude"
      eyebrow="KI-Systeme"
      title="Sichtbarkeit in Claude AI: So wird dein Unternehmen empfohlen"
      description="Claude von Anthropic ist der am schnellsten wachsende KI-Assistent im professionellen Umfeld. Wenn Entscheider nach Dienstleistern fragen, empfiehlt Claude ein bis drei Unternehmen, ohne Anzeigen, ohne Rankings. Dieser Guide zeigt dir, wie Claudes Empfehlungssystem funktioniert und wie du dort reinkommst."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryTitle="Zusammenfassung"
      summaryItems={[
        'Claude antwortet zuerst aus dem Trainingswissen und sucht nur bei Bedarf im Web. Deine Sichtbarkeit hängt deshalb vor allem an den Quellen im Trainingskorpus.',
        'Anthropics Constitutional AI bevorzugt faktenbasierte, autoritative Quellen: Qualität schlägt Quantität.',
        'Wikipedia, Fachmedien und wissenschaftliche Quellen haben bei Claude überproportionalen Einfluss.',
        'Claude wird vor allem von Professionals und Enterprises genutzt. Deine B2B-Zielgruppe sitzt hier.',
        'Bing-SEO allein trägt bei Claude wenig. Was zählt: Quellen-Autorität und konsistente Markensignale.',
      ]}
      sections={[
        {
          id: 'warum-claude',
          heading: 'Warum Claude AI für dein Unternehmen relevant ist',
          intro:
            'Anthropic, das Unternehmen hinter Claude, gehört zu den am schnellsten wachsenden KI-Firmen weltweit. Claude hat sich innerhalb von zwei Jahren als ernstzunehmende Alternative zu ChatGPT etabliert, besonders im professionellen und Enterprise-Bereich.',
          paragraphs: [
            'Der Unterschied zu ChatGPT: Claude wird überproportional von Professionals genutzt. Entwickler, Berater, Analysten und Entscheider setzen Claude ein, weil das Modell für längere, analytischere Aufgaben optimiert ist. Wenn ein CTO fragt "Welche Agentur in Hamburg macht gutes AI SEO?", dann ist die Wahrscheinlichkeit hoch, dass er Claude nutzt, nicht ChatGPT.',
            'Amazon hat insgesamt 8 Milliarden Dollar in Anthropic investiert, Google mehrere Milliarden. Claude ist in AWS Bedrock integriert und wird von Tausenden Enterprise-Kunden genutzt. Das ist kein Nischenprodukt. Das ist Infrastruktur.',
          ],
          definitions: [
            {
              term: 'Zielgruppe',
              definition:
                'Enterprise und Professionals. Anthropic richtet Claude ausdrücklich auf den B2B-Einsatz aus, was die Nutzerbasis anders zusammensetzt als bei ChatGPT.',
            },
            {
              term: 'Context Window',
              definition:
                '200K Token im Standardmodell. Ganze Vertragswerke, Ausschreibungen oder Dokumentationen passen in einen einzigen Prompt, deshalb wird Claude für Analysearbeit gewählt.',
            },
            {
              term: 'Investitionen',
              definition:
                'Über 8 Mrd. US-Dollar allein von Amazon, plus Milliarden von Google. Claude läuft in AWS Bedrock und ist damit Teil der Infrastruktur vieler Konzerne.',
            },
          ],
        },
        {
          id: 'claude-problem',
          heading: 'Das Claude-Problem: Du weißt nicht, was Claude über dich sagt',
          intro:
            'Du optimierst für Google, aber Claude ignoriert dich komplett. Während du deine Rankings in der Google Search Console trackst, empfiehlt Claude deinen Wettbewerber, und du bekommst es nicht einmal mit.',
          paragraphs: [
            'Es gibt keine Claude Search Console. Kein Dashboard, keine Impressions, keine Klickzahlen. Du fliegst komplett blind. Und das ist gefährlich, denn:',
          ],
          bullets: [
            'Deine Konkurrenz wird von Claude empfohlen, du nicht',
            'Claude halluziniert möglicherweise falsche Infos über dein Unternehmen',
            'Kein Dashboard, keine Kontrolle, du fliegst komplett blind',
            'Jede Claude-Empfehlung, die nicht du bist, ist ein verlorener Lead',
          ],
          note: 'Das Kernproblem: Claude antwortet in den meisten Fällen aus dem Trainingswissen, nicht aus einem Live-Crawl deiner Website. Alles, was Claude ohne Suchanfrage über dich weiß, stammt aus den Trainingsdaten. Wenn du dort nicht vorkommst, oder schlimmer, mit falschen Informationen vorkommst, hast du ein ernstes Problem.',
        },
        {
          id: 'wie-claude-arbeitet',
          heading: 'Wie Claude Informationen verarbeitet',
          intro:
            'Claude funktioniert anders als ChatGPT oder Perplexity. Das zu verstehen ist der Schlüssel zu deiner Sichtbarkeitsstrategie.',
          cards: [
            {
              title: 'Trainingskorpus statt Live-Suche',
              text: 'Claude kann seit 2025 im Web suchen, aber die Suche ist nicht der Standardweg: Das Modell antwortet zuerst aus seinem Trainingskorpus und ruft Quellen nur ab, wenn die Frage es verlangt. Der Korpus besteht aus Webseiten, Büchern, wissenschaftlichen Papern und Artikeln, eingefroren zum Trainingszeitpunkt.',
            },
            {
              title: 'Constitutional AI',
              text: 'Anthropic trainiert Claude mit einem besonderen Ansatz: Constitutional AI. Das Modell ist darauf optimiert, ehrlich, hilfreich und harmlos zu sein. In der Praxis bedeutet das: Claude ist vorsichtiger bei Empfehlungen, bevorzugt faktenbasierte Aussagen und markiert Unsicherheiten explizit.',
            },
          ],
          quote:
            'Entscheidender Unterschied: ChatGPT findet deine Website im Regelfall live über Bing. Bei Claude musst du in den Trainingsdaten stehen, also auf Quellen präsent sein, die Anthropic fürs Training nutzt: hochwertige, öffentlich zugängliche Seiten mit hoher Autorität.',
          paragraphs: [
            'Claudes Knowledge Cutoff bedeutet: Es gibt ein Datum, nach dem Claude aus sich heraus nichts mehr weiß. Neue Unternehmen, die erst danach online präsent wurden, existieren für Claude schlicht nicht, solange niemand aktiv nach ihnen suchen lässt. Bestehende Unternehmen, die ihre Online-Präsenz nach dem Cutoff massiv verbessert haben, profitieren davon erst beim nächsten Modell-Update.',
            'Das macht langfristige, konsistente Präsenz auf autoritativen Quellen zum wichtigsten Faktor für Claude-Sichtbarkeit. Einmal-Aktionen bringen wenig. Du brauchst ein stabiles Fundament, das bei jedem Trainingsupdate verfügbar ist. Parallel gilt: ClaudeBot und Claude-User müssen deine Seiten abrufen dürfen, sonst fällt auch der Live-Abruf weg.',
          ],
        },
        {
          id: 'faktoren',
          heading: '5 Faktoren, die Claude-Empfehlungen beeinflussen',
          intro:
            'Anthropic veröffentlicht keine offizielle Liste von Ranking-Faktoren. Aber aus der Architektur von Claude, Anthropics Forschungspapern und systematischen Tests lassen sich fünf klare Einflussfaktoren ableiten.',
          steps: [
            {
              title: 'Autoritative Quellen',
              text: 'Claude gewichtet Informationen aus anerkannten Quellen deutlich stärker. Wikipedia-Einträge, Artikel in Fachmedien, wissenschaftliche Publikationen und Einträge in etablierten Verzeichnissen bilden das Rückgrat von Claudes Wissen. Wenn dein Unternehmen nur auf der eigenen Website erwähnt wird, reicht das nicht.',
            },
            {
              title: 'Konsistente Markensignale',
              text: 'Claude cross-referenziert Informationen aus dem Trainingskorpus. Wenn verschiedene Quellen unterschiedliche Dinge über dein Unternehmen sagen (verschiedene Adressen, verschiedene Leistungsbeschreibungen, widersprüchliche Gründungsdaten), wird Claude unsicher und empfiehlt lieber ein Unternehmen, bei dem alle Quellen übereinstimmen.',
            },
            {
              title: 'Strukturierte, faktenbasierte Inhalte',
              text: 'Constitutional AI bevorzugt Fakten. Claude empfiehlt eher ein Unternehmen, das seine Leistungen klar und faktenbasiert beschreibt, als eines, das mit vagen Marketing-Floskeln arbeitet. Konkrete Zahlen, Fallstudien und dokumentierte Ergebnisse signalisieren Claude Vertrauenswürdigkeit.',
            },
            {
              title: 'E-E-A-T-Signale',
              text: 'Experience, Expertise, Authoritativeness, Trustworthiness, was für Google gilt, gilt in verstärktem Maße für Claude. Autorenprofile, Fachpublikationen, Zertifizierungen, Mitgliedschaften in Fachverbänden und Vortragstätigkeiten erhöhen die Wahrscheinlichkeit, dass Claude dich als vertrauenswürdige Quelle einstuft.',
            },
            {
              title: 'Faktische Genauigkeit',
              text: 'Claude ist darauf trainiert, faktisch korrekte Antworten zu geben. Unternehmen, deren öffentliche Informationen nachweisbar korrekt, aktuell und widerspruchsfrei sind, werden bevorzugt. Veraltete Angaben, falsche Telefonnummern oder inkonsistente Öffnungszeiten können dazu führen, dass Claude dich komplett ignoriert.',
            },
          ],
        },
        {
          id: 'strategien',
          heading: '7 Strategien für Claude-Sichtbarkeit',
          intro:
            'Die Reihenfolge ist bewusst gewählt: Die ersten drei Punkte wirken auf jedes KI-System, die letzten vier zahlen besonders auf Claudes Vorliebe für belegbare Fachinhalte ein.',
          steps: [
            {
              title: 'Werde auf Wikipedia und in autoritativen Medien erwähnt',
              text: 'Wikipedia ist für Claude eine der wichtigsten Quellen. Ein eigener Wikipedia-Eintrag ist ideal, aber auch Erwähnungen in bestehenden Artikeln helfen. Parallel dazu: Gastbeiträge in Fachmedien, Interviews in Branchenmagazinen, Erwähnungen in Handelsblatt, Manager Magazin oder branchenspezifischen Portalen. Claude gewichtet redaktionelle Erwähnungen deutlich stärker als Werbeformate.',
            },
            {
              title: 'Baue konsistente NAP-Daten über alle Verzeichnisse auf',
              text: 'Name, Adresse, Telefonnummer, überall identisch. Claude gleicht Informationen aus seinem Trainingskorpus ab. Wenn deine Website "Mustermann GmbH" sagt, Das Örtliche "Firma Mustermann" listet und ProvenExpert "Mustermann Digital" zeigt, wird Claude unsicher. Prüfe alle Verzeichniseinträge: Gelbe Seiten, Das Örtliche, WLW, Yelp, ProvenExpert, Google Business Profile, LinkedIn.',
            },
            {
              title: 'Erstelle strukturierte FAQ-Inhalte auf deiner Website',
              text: 'Claude beantwortet Fragen. Deine Website muss Fragen beantworten: strukturiert, direkt, faktenbasiert. Erstelle umfangreiche FAQ-Seiten, die typische Nutzer-Prompts aufgreifen. Nutze Schema.org FAQPage-Markup. Beantworte jede Frage in den ersten zwei Sätzen direkt und liefere danach Details. Claude bevorzugt Quellen, die ohne Umschweife informieren.',
            },
            {
              title: 'Implementiere llms.txt auf deiner Website',
              text: 'llms.txt ist ein offener Standard, der KI-Systemen maschinenlesbare Informationen über dein Unternehmen liefert. Es ergänzt robots.txt und sitemap.xml. Beschreibe dort dein Unternehmen, deine Leistungen, dein Team und deine Kontaktdaten in einem Format, das LLMs gut verarbeiten. llms.txt ist kein offizieller Standard und kein Ranking-Faktor, aber ein Signal für KI-Readiness.',
            },
            {
              title: 'Investiere in Pressearbeit und Earned Media',
              text: 'Redaktionelle Erwähnungen in unabhängigen Medien sind für Claude Gold wert. Pressemitteilungen allein reichen nicht, es müssen echte redaktionelle Beiträge sein. Positioniere dich als Experte in deiner Branche, biete Journalisten Daten und Insights an, kommentiere Branchentrends. Jede Erwähnung auf einem Medium, das Anthropic fürs Training nutzt, erhöht deine Claude-Sichtbarkeit.',
            },
            {
              title: 'Produziere akademische und Experten-Inhalte',
              text: 'Claude ist für analytische Aufgaben optimiert und bevorzugt wissenschaftlich fundierte Inhalte. White Papers, Studien, Forschungsberichte, Datenanalysen und Fachvorträge stärken deine Position im Trainingskorpus. Wenn du eine Studie zu deinem Fachgebiet veröffentlichst und sie von Fachmedien aufgegriffen wird, ist das ein doppelter Gewinn für die Claude-Sichtbarkeit.',
            },
            {
              title: 'Optimiere die technische Qualität deiner Dokumentation',
              text: 'Claude wird häufig für technische Recherche genutzt. Saubere, gut strukturierte Dokumentation (API-Docs, technische Guides, Implementierungsanleitungen) signalisiert Professionalität. Nutze klare Überschriften-Hierarchien, Code-Beispiele, Schema.org-Markup und eine logische Seitenstruktur. ClaudeBot und Claude-User müssen deine Seiten problemlos abrufen können.',
            },
          ],
        },
        {
          id: 'vergleich',
          heading: 'Claude vs ChatGPT vs Perplexity: Unterschiede für Unternehmen',
          intro:
            'Jedes KI-System funktioniert anders. Was für ChatGPT funktioniert, kann bei Claude wirkungslos sein. Diese Tabelle zeigt die entscheidenden Unterschiede.',
          table: {
            headers: ['Kriterium', 'Claude', 'ChatGPT', 'Perplexity'],
            emphasis: 1,
            rows: [
              ['Datenquelle', 'Trainingskorpus, Suche bei Bedarf', 'Training + Bing', 'Live-Websuche'],
              ['Live-Websuche', 'Ja, seit 2025, aber nicht der Standardweg', 'Ja (Bing)', 'Ja (eigener Index)'],
              ['Zielgruppe', 'Professionals, Enterprise', 'Breites Publikum', 'Recherche-orientiert'],
              ['Quellenangaben', 'Nur bei aktiver Suche', 'Bei Websuche ja', 'Immer mit Quellen'],
              ['Wichtigster Hebel', 'Autoritative Quellen', 'Bing-SEO + Mentions', 'Technisches SEO'],
              ['Crawler', 'ClaudeBot, Claude-User', 'GPTBot, OAI-SearchBot', 'PerplexityBot'],
              ['Aktualisierung', 'Modell-Updates', 'Echtzeit + Updates', 'Echtzeit'],
            ],
            caption:
              'Die Zeile Datenquelle erklärt den Rest: Wer bei Claude vorkommen will, arbeitet an Quellen, die ins Training einfließen, nicht an Snippets.',
          },
          paragraphs: [
            'Die Konsequenz: Du brauchst für jedes KI-System eine angepasste Strategie. Bing-Optimierung hilft bei ChatGPT, technisches SEO bei Perplexity. Bei Claude zählt vor allem eines: die Qualität und Autorität der Quellen, auf denen dein Unternehmen erwähnt wird.',
          ],
        },
        {
          id: 'hamburg',
          heading: 'Claude-Sichtbarkeit für Hamburger Unternehmen',
          intro:
            'Hamburg ist einer der stärksten Technologie-Standorte Deutschlands. Die Stadt hat eine dichte Konzentration von Agenturen, Beratungen, Tech-Unternehmen und innovativen Mittelständlern, genau die Zielgruppe, die Claude nutzt.',
          paragraphs: [
            'Wenn ein Hamburger Entscheider Claude fragt "Welche Agentur für digitale Transformation gibt es in Hamburg?", empfiehlt Claude die Unternehmen, die es aus den Trainingsdaten kennt. Das sind typischerweise Firmen, die auf hamburg.de, im Hamburger Abendblatt, in der MOPO oder in Hamburger Branchenverzeichnissen erwähnt werden.',
            'Für Hamburger Unternehmen heißt das: Lokale Pressearbeit, Mitgliedschaften in der Handelskammer Hamburg, Präsenz auf hamburg.de und Erwähnungen in lokalen Fachmedien sind direkte Hebel für Claude-Sichtbarkeit. Das ist kein Zufall, sondern eine Strategie, die du heute starten kannst.',
          ],
          bullets: [
            'Handelskammer Hamburg: Mitgliedschaft und Firmenprofil pflegen',
            'hamburg.de Branchenverzeichnis: aktueller, vollständiger Eintrag',
            'Hamburger Abendblatt, MOPO: redaktionelle Erwähnungen anstreben',
            'Hamburg Startups, Hamburg News: Branchenportale für Tech-Sichtbarkeit',
            'Lokale Fachveranstaltungen: Speaker-Slots und Recaps nutzen',
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Wie werde ich mit meinem Unternehmen in Claude AI sichtbar?',
          a: 'Werde auf autoritativen Quellen erwähnt, die Anthropic fürs Training nutzt: Wikipedia, Fachmedien, Branchenverzeichnisse, Bewertungsplattformen. Claude sucht nur bei Bedarf live im Web, im Regelfall antwortet es aus dem Trainingswissen. Dein Profil im Trainingskorpus ist deshalb der Hauptfaktor.',
        },
        {
          q: 'Hat Claude AI eine Live-Websuche wie ChatGPT?',
          a: 'Ja, seit 2025 kann Claude im Web suchen. Der Unterschied liegt in der Gewichtung: Claude greift nicht bei jeder Frage auf die Suche zu, sondern antwortet häufig direkt aus dem Trainingskorpus. Für dich heißt das, dass Bing-Rankings weniger tragen als Erwähnungen auf Quellen, die ins Training einfließen. Beides ist sinnvoll, die Reihenfolge ist anders als bei ChatGPT.',
        },
        {
          q: 'Was ist der Unterschied zwischen Claude und ChatGPT für Unternehmen?',
          a: 'ChatGPT nutzt Trainingsdaten plus Bing-Live-Suche als Standardweg. Claude stützt sich primär auf sein Trainingskorpus und legt besonderen Wert auf faktische Genauigkeit. Claude wird stärker im professionellen und Enterprise-Kontext genutzt.',
        },
        {
          q: 'Kann ich beeinflussen, was Claude über mein Unternehmen sagt?',
          a: 'Ja, indirekt. Steuere die Quellen, die in Claudes Trainingsdaten einfließen: Presseartikel, Fachartikel, Wikipedia, Verzeichnisse und deine Website. Konsistenz und Autorität sind die Schlüssel.',
        },
        {
          q: 'Was ist llms.txt und hilft es bei Claude-Sichtbarkeit?',
          a: 'llms.txt ist ein Format, das LLMs maschinenlesbare Unternehmensinformationen liefert. Es ergänzt robots.txt und hilft KI-Systemen, strukturierte Fakten zu erfassen. Kein direkter Ranking-Faktor, aber ein sinnvolles Hygiene-Signal.',
        },
        {
          q: 'Wie lange dauert es, bis Änderungen in Claude sichtbar werden?',
          a: 'Wochen bis Monate. Was Claude aus dem Trainingswissen sagt, ändert sich erst beim nächsten Modell-Update. Nur bei aktiver Suche kann eine neue Seite sofort auftauchen. Langfristige, konsistente Präsenz auf autoritativen Quellen ist deshalb wichtiger als schnelle taktische Maßnahmen.',
        },
        {
          q: 'Ist Claude relevant für Hamburger Unternehmen?',
          a: 'Ja, zunehmend. Claude wird besonders von Professionals und Enterprises genutzt. Hamburger B2B-Unternehmen und Dienstleister sollten Claude-Sichtbarkeit als Teil ihrer KI-SEO-Strategie betrachten.',
        },
      ]}
      sources={[
        {
          label: 'Anthropic (2023)',
          text: 'Constitutional AI: Harmlessness from AI Feedback, die Trainingsmethode hinter Claudes Vorliebe für belegbare Aussagen.',
          href: 'https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback',
        },
        {
          label: 'Ahrefs (2025)',
          text: 'LLM SEO, Brand Mentions Correlation Study: Zusammenhang zwischen Marken-Erwähnungen und Sichtbarkeit in KI-Antworten.',
          href: 'https://ahrefs.com/blog/llm-seo/',
        },
        {
          label: 'Princeton University',
          text: 'The Role of Earned Media in AI Search Engines, Grundlage für die Gewichtung redaktioneller Erwähnungen.',
          href: 'https://arxiv.org/abs/2406.05035',
        },
        {
          label: 'Anthropic Docs',
          text: 'Claude Models und Training Data Documentation, Basis der Angaben zu Context Window und Knowledge Cutoff.',
          href: 'https://docs.anthropic.com/en/docs/about-claude/models',
        },
        {
          label: 'llms.txt',
          text: 'Proposed Standard for LLM-readable Site Information, der Vorschlag hinter Strategie 5.4.',
          href: 'https://llmstxt.org/',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Guide',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPTs Dual-System funktioniert und wie du dort sichtbar wirst.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'Sichtbarkeit in Perplexity',
          description: 'Wie Perplexitys Quellensystem funktioniert und wie du dort sichtbar wirst.',
          href: '/wissen/sichtbarkeit-in-perplexity',
          tag: 'Perplexity',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description: 'robots.txt, llms.txt, Schema.org und Crawler-Zugang richtig konfigurieren.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Tracking, Monitoring und KPIs für deine KI-Sichtbarkeit.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Wird dein Unternehmen von Claude empfohlen?"
      ctaText="Ich prüfe, ob und wie Claude AI dein Unternehmen aktuell darstellt: Trainingsdaten-Analyse, Prompt-Tests und konkrete Handlungsempfehlungen. Kostenlos, in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

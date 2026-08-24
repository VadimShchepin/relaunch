import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function AIOverviewsSichtbarkeitPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ai-overviews-sichtbarkeit"
      breadcrumbLabel="AI Overviews"
      eyebrow="AI Overviews"
      title="Sichtbarkeit in Google AI Overviews: So wirst du als Quelle zitiert"
      description="Google zeigt die Antwort direkt an, der Nutzer klickt nicht mehr. Bei informationalen Suchanfragen mit AI Overview ist die organische Klickrate laut Seer Interactive seit Juni 2024 um 61 Prozent gefallen. Hier steht, wie du als Quelle in AI Overviews erscheinst, statt unsichtbar zu bleiben."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryItems={[
        'AI Overviews sind KI-generierte Antworten direkt in der Google-Suche. Sie ersetzen den Klick auf deine Website.',
        'Minus 61 Prozent organische Klickrate bei informationalen Suchanfragen mit AI Overview, gemessen von Juni 2024 bis September 2025 (Seer Interactive). Dein Content wird zusammengefasst, aber du bekommst keinen Klick.',
        '7 konkrete Strategien bringen dich als Quelle in AI Overviews: Schema Markup, E-E-A-T, Answer-First Content, Freshness und technische Exzellenz.',
        'Wer jetzt optimiert, sichert sich die Zitationsplätze, bevor der Wettbewerb aufwacht. Die Quellenauswahl verfestigt sich mit jeder Iteration.',
      ]}
      sections={[
        {
          id: 'was-sind-ai-overviews',
          heading: 'Was sind Google AI Overviews?',
          intro:
            'Google AI Overviews sind KI-generierte Zusammenfassungen, die direkt über den organischen Suchergebnissen erscheinen. Google nutzt Gemini, um Informationen aus mehreren Webseiten zu synthetisieren und dem Nutzer eine sofortige Antwort zu liefern, ohne Klick.',
          paragraphs: [
            'Google nennt die verwendeten Quellen als Referenzlinks innerhalb der AI Overview. Aber: nur 3 bis 7 Quellen werden zitiert. Der Rest geht leer aus. Dein Ziel ist, eine dieser Quellen zu sein.',
            'In Deutschland hat Google AI Overviews 2025 schrittweise ausgerollt. Sie erscheinen bei informationalen Suchanfragen auf Deutsch und expandieren kontinuierlich in weitere Suchanfrage-Typen. Für den DACH-Markt ist die Optimierung jetzt der entscheidende Zeitpunkt.',
          ],
        },
        {
          id: 'zero-click',
          heading: 'Das Problem: Zero-Click-Suche frisst deinen Traffic',
          stat: 'Die organische Klickrate bei informationalen Suchanfragen mit AI Overview fiel von 1,76 auf 0,61 Prozent, also um 61 Prozent (Seer Interactive, Juni 2024 bis September 2025).',
          paragraphs: [
            'Google zeigt die Antwort direkt an. Der Nutzer klickt nicht mehr. Dein Content wird zusammengefasst, dein Wissen extrahiert, deine Expertise zitiert, aber der Traffic bleibt bei Google.',
            'Du investierst Tausende in Content-Marketing, und die KI bedient sich an deinem Wissen, ohne dir einen Klick zu geben. Die Ironie: je besser dein Content, desto wahrscheinlicher wird er von der AI Overview zusammengefasst. Und je besser die Zusammenfassung, desto weniger Grund hat der Nutzer, deine Seite zu besuchen.',
            'Das betrifft nicht nur informationalen Content. Google testet AI Overviews zunehmend bei kommerziellen und transaktionalen Suchanfragen. Produktvergleiche, Dienstleister-Empfehlungen, How-To-Anleitungen, alles wird von der KI zusammengefasst.',
            'Dein Wettbewerber taucht in AI Overviews auf. Du nicht. Er bekommt die Zitation, den Vertrauensbonus, den verbleibenden Klick. Du stehst auf Position 4 unter einer AI Overview, die niemand überschrollt.',
          ],
          chart: {
            variant: 'column',
            title: 'Rückgang der organischen Klickrate bei informationalen Suchen',
            axis: { title: 'Rückgang', unit: ' %' },
            highlight: 'peak',
            points: [
              { label: 'Suchen mit AI Overview', short: 'Mit AIO', value: 61 },
              { label: 'Suchen ohne AI Overview', short: 'Ohne', value: 41 },
            ],
            stats: [
              { label: 'CTR mit AI Overview', value: '0,61 %' },
              { label: 'CTR ohne AI Overview', value: '1,62 %' },
              { label: 'Wenn du zitiert wirst', value: '35 % mehr Klicks' },
            ],
            table: { label: 'Werte anzeigen', heads: ['Suchergebnis', 'CTR-Rückgang'] },
            caption:
              'Seer Interactive hat 3.119 informationale Suchanfragen aus 42 Organisationen ausgewertet, 25,1 Mio. organische Impressionen, Juni 2024 bis September 2025. Auch Suchen ohne AI Overview verlieren Klicks, nur langsamer. Wer in der AI Overview zitiert wird, bekommt laut derselben Analyse 35 Prozent mehr organische Klicks als eine nicht zitierte Seite.',
          },
        },
        {
          id: 'was-das-bedeutet',
          heading: 'Was das konkret bedeutet',
          intro:
            'Der Verlust zeigt sich zuerst in der Search Console, dann in den Anfragen. Vier Muster wiederholen sich in jedem Projekt:',
          stat: 'Gartner: über 50 Prozent des organischen Traffics wandert bis 2028 zu KI-gestützter Suche ab.',
          bullets: [
            'Dein Blog-Artikel auf Position 1 verliert Klicks an die AI Overview: bei informationalen Suchen fiel die organische Klickrate seit Juni 2024 um 61 Prozent.',
            'Deine Dienstleistungsseite wird nicht als Quelle zitiert, obwohl du Marktführer bist.',
            'Dein Wettbewerber mit schlechterem Content, aber besserem Schema Markup wird bevorzugt.',
            'Deine Lead-Generierung über organischen Traffic sinkt Monat für Monat.',
          ],
        },
        {
          id: 'quellenauswahl',
          heading: 'Wie Google AI Overviews Quellen auswählen',
          intro:
            'Google hat kein offizielles Ranking-System für AI-Overview-Quellen veröffentlicht. Aus Analysen tausender AI Overviews lassen sich aber klare Muster ableiten: drei Faktoren dominieren die Quellenauswahl.',
          paragraphs: [
            'Entscheidend ist die Ausgangslage: 81 Prozent der in AI Overviews zitierten Quellen stammen aus den Top-10 der organischen Suchergebnisse (Authoritas, 2025). Aber nicht jede Top-10-Seite wird zitiert. Der Unterschied liegt in der Extrahierbarkeit der Information, also darin, wie leicht Google deine Antwort identifizieren und in die Zusammenfassung einbauen kann.',
          ],
          chart: {
            variant: 'column',
            title: 'Herkunft der in AI Overviews zitierten Quellen',
            axis: { title: 'Anteil', unit: ' %' },
            highlight: 'peak',
            points: [
              { label: 'Aus den organischen Top-10', short: 'Top 10', value: 81 },
              { label: 'Von außerhalb der Top-10', short: 'Rest', value: 19 },
            ],
            table: { label: 'Werte anzeigen', heads: ['Herkunft', 'Anteil der Zitationen'] },
            caption:
              'Ein klassisches Ranking in den Top-10 ist die Eintrittskarte, nicht der Platz selbst. Erhebung: Authoritas, AI Overviews Source Analysis, 2025.',
          },
          table: {
            headers: ['Faktor', 'Woran Google es erkennt'],
            rows: [
              [
                'E-E-A-T Signale',
                'Nachweisbare Autorenexpertise, vertrauenswürdige Domain, Zitationen und Backlinks von Autoritäten, echte Erfahrungswerte im Content, konsistente Präsenz über Plattformen.',
              ],
              [
                'Strukturierte Daten',
                'Schema.org Markup (FAQ, HowTo, Article), klare Heading-Hierarchie von H1 bis H4, Definitionsabsätze nach jeder H2, Tabellen und Listen für Vergleiche, Breadcrumb- und Navigation-Markup.',
              ],
              [
                'Content Freshness',
                'Regelmäßige Aktualisierung mit Datum, aktuelle Statistiken und Daten, Verweise auf aktuelle Entwicklungen, dateModified im Article Schema, keine veralteten Informationen.',
              ],
            ],
            caption:
              'Drei Faktoren, drei Checklisten. Jede Zeile lässt sich auf einer einzelnen Seite in einer halben Stunde prüfen.',
          },
        },
        {
          id: 'strategien',
          heading: '7 Strategien für AI Overview Sichtbarkeit',
          intro:
            'Diese Strategien basieren auf der Analyse tausender AI Overviews und den Gemeinsamkeiten der zitierten Quellen.',
          steps: [
            {
              title: 'Schema.org Markup implementieren',
              text: 'Strukturierte Daten sind das Fundament. Google nutzt Schema Markup, um Inhalte zu klassifizieren und für AI Overviews zu extrahieren. Ohne Markup bist du eine unstrukturierte Textmasse. Essentielles Markup:',
              bullets: [
                'FAQPage für Frage-Antwort-Sektionen, mit der höchsten Korrelation zu AI-Overview-Zitationen.',
                'HowTo für Schritt-für-Schritt-Anleitungen, weil Google einzelne Schritte extrahiert.',
                'Article plus Author, um Content mit einer verifizierbaren Person zu verknüpfen (E-E-A-T).',
                'Product plus Review für kommerzielle Seiten, damit Bewertungen und Preise in AI Overviews auftauchen.',
                'LocalBusiness für lokale Unternehmen in Hamburg und DACH.',
              ],
            },
            {
              title: 'E-E-A-T Signale systematisch aufbauen',
              text: 'Google bevorzugt Quellen mit nachweisbarer Expertise. Das bedeutet: Autoren mit Klarnamen, verlinkten Profilen und nachweisbarer Erfahrung im Thema. Eine anonyme Unternehmensseite ohne Autorenangabe verliert gegen einen Fachartikel mit benanntem Experten. Baue Autorenprofile mit Schema-Markup (Person), verlinke zu LinkedIn und Fachpublikationen, und zeige echte Erfahrungswerte statt generischer Aussagen.',
            },
            {
              title: 'Answer-First Content-Struktur verwenden',
              text: 'Google extrahiert die Antwort aus den ersten ein bis zwei Sätzen nach einer Heading. Wenn deine Antwort erst nach drei Absätzen Einleitung kommt, wird sie nicht gefunden. Das Muster:',
              bullets: [
                'H2: die Frage oder das Thema als Heading.',
                'Absatz 1: direkte, präzise Antwort in ein bis zwei Sätzen.',
                'Absatz 2 bis 3: Kontext, Begründung, Daten.',
                'Absatz 4 und folgende: Tiefe, Beispiele, Nuancen.',
              ],
            },
            {
              title: 'Featured Snippets als Sprungbrett nutzen',
              text: 'Seiten, die bereits ein Featured Snippet halten, haben eine signifikant höhere Wahrscheinlichkeit, als AI-Overview-Quelle zitiert zu werden. Die gleichen Signale, die ein Featured Snippet auslösen, also klare Struktur, direkte Antwort, Listen und Tabellen, helfen auch bei AI Overviews. Optimiere gezielt für Featured Snippets bei deinen wichtigsten Suchanfragen.',
            },
            {
              title: 'Content Freshness priorisieren',
              text: 'AI Overviews bevorzugen aktuelle Inhalte. Ein Artikel von 2022 ohne Updates verliert gegen einen von 2026. Setze dateModified im Article Schema bei jeder Aktualisierung. Aktualisiere Statistiken, Jahreszahlen und Referenzen mindestens quartalsweise. Google erkennt oberflächliche Datumsänderungen ohne inhaltliche Updates, nur echte Aktualisierungen zählen.',
            },
            {
              title: 'Semantische Cluster statt Einzelseiten',
              text: 'Google bewertet nicht nur die einzelne Seite, sondern deine thematische Autorität insgesamt. Eine Pillar-Seite zu AI SEO mit verlinkten Cluster-Seiten zu ChatGPT, Perplexity und AI Overviews signalisiert semantische Tiefe. Du wirst als Autorität zum Gesamtthema erkannt, nicht als einzelne Seite mit einer zufälligen Antwort. Internes Linking zwischen den Cluster-Seiten verstärkt diesen Effekt.',
            },
            {
              title: 'Technische Exzellenz sicherstellen',
              text: 'Ohne technische Grundlage ist alles andere nutzlos. Google muss deine Seite schnell crawlen, rendern und die Inhalte extrahieren können. Technische Checkliste:',
              bullets: [
                'Core Web Vitals: LCP unter 2,5 s, CLS unter 0,1, INP unter 200 ms.',
                'Server-Side Rendering: Inhalte müssen im HTML stehen, nicht nur per JavaScript nachgeladen werden.',
                'robots.txt: Googlebot und GoogleOther nicht blockieren.',
                'HTTPS: Pflicht. HTTP-Seiten werden nicht als AI-Overview-Quelle zitiert.',
                'Mobile-First: responsives Design und mobile Crawlbarkeit.',
              ],
            },
          ],
        },
        {
          id: 'vergleich',
          heading: 'AI Overviews vs. klassische Suche',
          intro:
            'Die Spielregeln haben sich grundlegend verändert. Hier die wichtigsten Unterschiede:',
          table: {
            headers: ['Kriterium', 'Klassische Suche', 'AI Overviews'],
            rows: [
              ['Darstellung', '10 blaue Links mit Snippets', 'KI-generierte Zusammenfassung mit 3 bis 7 Quellen'],
              ['Nutzerverhalten', 'Klick auf Suchergebnis', 'Antwort direkt lesen, selten Klick'],
              ['Organische CTR, informationale Suchen', '1,62 % ohne AI Overview', '0,61 % mit AI Overview (Seer Interactive, September 2025)'],
              ['Quellenselektion', 'Ranking-Algorithmus mit über 200 Faktoren', 'Gemini-Synthese aus Top-Quellen'],
              ['Optimierungsfokus', 'Keywords, Backlinks, Technik', 'E-E-A-T, Schema, Answer-First, Freshness'],
              ['Wettbewerb', '10 Plätze auf Seite 1', '3 bis 7 Zitationsplätze pro AI Overview'],
              ['Content-Anforderung', 'Keyword-optimiert, umfassend', 'Extrahierbar, faktisch, strukturiert'],
            ],
            caption:
              'Die Zeile zur organischen CTR ist der Grund, warum ein gutes Ranking allein die Klicks nicht mehr sichert.',
          },
          quote:
            'Der größte Denkfehler: "Ich ranke auf Platz 1, also bin ich auch in der AI Overview." Stimmt nicht. Google wählt für AI Overviews nach anderen Kriterien aus als für organische Rankings. Eine Seite auf Position 3 mit perfektem Schema Markup und Answer-First Struktur kann die Position-1-Seite ohne Markup als AI-Overview-Quelle verdrängen.',
        },
        {
          id: 'fehler',
          heading: 'Typische Fehler bei der AI Overview Optimierung',
          intro:
            'Sechs Fehler tauchen in fast jedem Audit auf. Fünf davon sind an einem Nachmittag behoben.',
          cards: [
            {
              title: 'Content ohne Struktur',
              text: 'Fließtext ohne Headings, Listen oder Tabellen. Google kann keine Antwort extrahieren, wenn alles ein einziger Textblock ist. Jede H2 braucht eine direkte Antwort im ersten Absatz.',
            },
            {
              title: 'Schema Markup vergessen',
              text: 'Du hast großartigen Content, aber keine strukturierten Daten. Google sieht rohen HTML-Text statt klassifizierter Informationen. FAQ-Markup, Article-Schema und Breadcrumbs sind Pflicht.',
            },
            {
              title: 'Veraltete Inhalte',
              text: 'Artikel von 2023 mit Statistiken von 2022. AI Overviews priorisieren frische Inhalte. Wenn dein Wettbewerber den gleichen Inhalt mit aktuellen Zahlen hat, wird er zitiert, nicht du.',
            },
            {
              title: 'Anonymer Content ohne Autorenangabe',
              text: '"Von der Redaktion" oder gar keine Autorenangabe. Google bewertet E-E-A-T pro Seite. Eine verifizierbare Person mit Expertise im Thema schlägt anonymen Unternehmens-Content. Immer.',
            },
            {
              title: 'KI-Bots in robots.txt blockieren',
              text: 'Manche Unternehmen blockieren GoogleOther oder Google-Extended in der robots.txt, um KI-Training zu verhindern. Das Ergebnis: du wirst auch nicht als AI-Overview-Quelle berücksichtigt. Du schneidest dir selbst den Zugang ab.',
            },
            {
              title: 'Nur auf ein Keyword optimieren',
              text: 'AI Overviews werden nicht durch Keyword-Stuffing ausgelöst. Sie erscheinen bei semantischen Anfragen. Wenn du nur für "Steuerberater Hamburg" optimierst, aber nicht für "Was kostet ein Steuerberater in Hamburg?" oder "Steuerberater für Freiberufler", verpasst du die AI-Overview-Trigger.',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Was sind Google AI Overviews?',
          a: 'Google AI Overviews sind KI-generierte Zusammenfassungen, die Google direkt über den organischen Suchergebnissen anzeigt. Sie beantworten die Suchanfrage des Nutzers sofort, ohne dass er eine Website besuchen muss. Google synthetisiert dafür Informationen aus mehreren Quellen und nennt diese als Referenzen.',
        },
        {
          q: 'Wie werde ich in Google AI Overviews sichtbar?',
          a: 'Du brauchst eine Kombination aus drei Faktoren: strukturierte Daten (Schema.org Markup), starke E-E-A-T-Signale (Erfahrung, Expertise, Autorität, Vertrauen) und eine Answer-First Content-Struktur, die Fragen direkt und präzise beantwortet. Seiten, die bereits in den Top-10 ranken und Featured Snippets halten, haben die höchste Wahrscheinlichkeit, als AI Overview Quelle zitiert zu werden.',
        },
        {
          q: 'Verliere ich Traffic durch AI Overviews?',
          a: 'Ja, wenn du nicht als Quelle zitiert wirst. Seer Interactive hat für informationale Suchanfragen mit AI Overview einen Rückgang der organischen Klickrate um 61 Prozent gemessen (Juni 2024 bis September 2025), Authoritas an britischen Nachrichtenseiten bis zu 79 Prozent auf dem Spitzenplatz. Wenn du jedoch als Quelle in der AI Overview erscheinst, kann dein Traffic sogar steigen, weil die Zitationsposition prominenter ist als ein klassisches Ranking auf Position 3 bis 10.',
        },
        {
          q: 'Sind AI Overviews in Deutschland bereits aktiv?',
          a: 'Google hat AI Overviews 2025 schrittweise im DACH-Raum ausgerollt. Sie erscheinen bei informationalen und teilweise bei transaktionalen Suchanfragen auf Deutsch. Die Abdeckung wächst kontinuierlich. Für Unternehmen im deutschen Markt ist die Optimierung jetzt der richtige Zeitpunkt, bevor der Wettbewerb aufholt.',
        },
        {
          q: 'Welche Inhalte bevorzugt Google für AI Overviews?',
          a: 'Google bevorzugt Inhalte, die klar strukturiert, faktisch korrekt und aus autoritativen Quellen stammen. Besonders gut performen: FAQ-Seiten mit Schema Markup, How-To-Anleitungen mit Schritt-für-Schritt-Struktur, Vergleichstabellen, Definitionen im ersten Absatz und regelmäßig aktualisierte Inhalte mit Datumsangaben.',
        },
        {
          q: 'Was ist der Unterschied zwischen AI Overviews und Featured Snippets?',
          a: 'Featured Snippets zeigen einen Ausschnitt von einer einzigen Quelle. AI Overviews synthetisieren Informationen aus mehreren Quellen zu einer neuen, zusammenhängenden Antwort. AI Overviews sind länger, komplexer und zitieren typischerweise 3 bis 7 Quellen. Die Optimierung überschneidet sich teilweise, aber AI Overviews erfordern zusätzlich starke E-E-A-T-Signale und semantische Tiefe.',
        },
      ]}
      sources={[
        {
          label: 'Gartner (2024)',
          text: 'Gartner-Prognose: über 50 Prozent des organischen Traffics wandern bis 2028 zu KI-gestützter Suche ab. Die Pressemitteilung vom 19.02.2024 nennt zusätzlich 25 Prozent weniger Suchmaschinen-Volumen bis 2026.',
          href: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents',
        },
        {
          label: 'Seer Interactive (September 2025)',
          text: 'AIO Impact on Google CTR: 3.119 informationale Suchanfragen aus 42 Organisationen, 25,1 Mio. organische Impressionen, Juni 2024 bis September 2025. Organische Klickrate bei Suchen mit AI Overview von 1,76 auf 0,61 Prozent gefallen (minus 61 Prozent), bei Suchen ohne AI Overview minus 41 Prozent im Jahresvergleich.',
          href: 'https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update',
        },
        {
          label: 'Authoritas (2025)',
          text: '"AI Overviews Source Analysis", 81 Prozent der AI-Overview-Quellen stammen aus den organischen Top-10.',
        },
        {
          label: 'Google Search Central (2025)',
          text: '"How AI Overviews work in Google Search", offizielle Dokumentation zur Funktionsweise von AI Overviews.',
        },
        {
          label: 'Princeton University (2024)',
          text: '"GEO: Generative Engine Optimization", Studie zur Optimierung von Inhalten für KI-Suchmaschinen.',
        },
        {
          label: 'Search Engine Land (2025)',
          text: '"AI Overviews in Europe: What marketers need to know", Rollout-Analyse für den europäischen Markt.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit',
          description:
            'Der Pillar-Guide: Was KI-Sichtbarkeit bedeutet, drei Säulen und 5 strategische Schritte.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description:
            'Wie du in ChatGPT-Antworten erscheinst und was OpenAI als Quelle bevorzugt.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'Plattform',
        },
        {
          title: 'Sichtbarkeit in Perplexity',
          description: 'Der schnellste Kanal für KI-Sichtbarkeit. Taktiken und Messung.',
          href: '/wissen/sichtbarkeit-in-perplexity',
          tag: 'Plattform',
        },
      ]}
      ctaTitle="Erscheinst du in Google AI Overviews?"
      ctaText="Finde heraus, ob dein Unternehmen als Quelle zitiert wird, oder ob dein Wettbewerber den Platz einnimmt. Kostenlose Kurzanalyse deiner AI Overview Sichtbarkeit."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

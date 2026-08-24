import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitSaasPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-saas"
      breadcrumbLabel="KI-Sichtbarkeit für SaaS"
      eyebrow="Branche: B2B-Software"
      title="KI-Sichtbarkeit für SaaS: wie deine Software in Tool-Empfehlungen landet"
      description="Softwareauswahl beginnt inzwischen mit einem Prompt statt mit einer Google-Liste. Für SaaS-Anbieter verschiebt das die Prioritäten: Vergleichs- und Alternativenseiten schlagen Feature-Seiten, die Dokumentation wird zur Zitatquelle, und Bewertungsplattformen entscheiden über die Reihenfolge in der Antwort."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      schemaImage="/images/wissen/ki-sichtbarkeit-saas/hero.webp"
      summaryItems={[
        'Der Kaufprozess bei Software beginnt mit einer Kategorie-Frage („Welches Tool für X?“), nicht mit deinem Markennamen. Wer nur zu seinem Namen sichtbar ist, kommt in dieser Phase nicht vor.',
        'Alternativen- und Vergleichsseiten sind die stärksten Citation-Magneten. In einem Bing-Export einer von uns betreuten Software-Domain kamen 20 von 211 Citations aus dem Vergleichsbereich, bei einem Bruchteil der Seitenzahl.',
        'Deine Dokumentation ist Content, auch wenn sie nicht so heißt. Sie beantwortet konkrete Fragen und ist damit für KI-Systeme oft nützlicher als die Produktseite.',
        'Preisangaben entscheiden über die Aufnahme in Vergleichsantworten. Wo „Preis auf Anfrage“ steht, überspringen Modelle den Anbieter im direkten Vergleich.',
        'Bewertungsplattformen und Fachverzeichnisse bestimmen die Reihenfolge in der Antwort stärker als die eigene Website. Das ist Arbeit außerhalb der eigenen Domain.',
      ]}
      sections={[
        {
          id: 'kaufprozess',
          heading: 'Der Kaufprozess hat sich um eine Stufe nach vorn verschoben',
          paragraphs: [
            'Früher lief die Softwareauswahl über eine Suchanfrage nach der Kategorie, dann über Vergleichsportale, dann über die Anbieterseite. Der erste Schritt ist heute häufig ein Prompt: Welches Tool eignet sich für diesen Zweck, in dieser Größe, mit dieser Anforderung.',
            'Die Antwort auf diesen Prompt nennt drei bis fünf Anbieter. Wer nicht darunter ist, existiert für diesen Interessenten nicht, unabhängig davon, wie gut die eigene Website konvertiert. Der Trichter beginnt eine Stufe früher als bisher, und die Auswahl in dieser Stufe wird nicht von dir getroffen.',
            'Für SaaS ist das schärfer als für andere Branchen, weil die Fragen extrem gut in Prompt-Form passen. Anforderungen an Software sind aufzählbar: Zahl der Nutzer, Datenstandort, Schnittstellen, Preisrahmen, Sprache. Genau diese Aufzählbarkeit macht die Kategorie-Frage zum natürlichen Einstieg und die Anbieterliste zur natürlichen Antwort.',
          ],
          stat:
            'Die entscheidende Frage ist nicht mehr „Wie beschreibe ich mein Produkt?“, sondern „Warum sollte ein System mich in eine Liste von fünf aufnehmen?“.',
        },
        {
          id: 'vergleichsseiten',
          heading: 'Warum Vergleichs- und Alternativenseiten so gut funktionieren',
          intro:
            'Die Beobachtung stammt aus einem Bing-Webmaster-Tools-Export einer Software-Domain, die wir betreuen. Sie hat einen kleinen Vergleichsbereich und einen deutlich größeren Ratgeberbereich.',
          chart: {
            variant: 'row',
            title: 'Citations nach Seitentyp, dsgvoschulfotos.de, Export vom 6. Juni 2026',
            axis: { title: 'Citations' },
            highlight: 'peak',
            points: [
              { label: 'Regelfrage mit konkretem Fall', value: 45, note: '/dsgvo-schule-apps' },
              { label: 'Startseite', value: 18, note: 'wird für Markenfragen gezogen' },
              { label: 'Alternative zu benanntem Anbieter', value: 14, note: 'zwei Seiten zusammen' },
              { label: 'Vergleich Software-Kategorie', value: 6, note: '/vergleich/schulfotograf-software' },
            ],
            stats: [
              { label: 'Citations gesamt', value: '211' },
              { label: 'Zitierte Seiten', value: '16' },
              { label: 'Anteil dieser vier Typen', value: '39 Prozent' },
            ],
            table: false,
            caption:
              'Nicht die Produktseite gewinnt, sondern die Seite, die eine Fachfrage für einen Anwendungsfall abschließend beantwortet. Auszug aus dem AI-Page-Stats-Export der Bing Webmaster Tools, Details in der Tabelle darunter.',
          },
          table: {
            headers: ['Seitentyp', 'Beispielseite', 'Citations im Export', 'Beobachtung'],
            rows: [
              [
                'Vergleich Software-Kategorie',
                '/vergleich/schulfotograf-software',
                '6',
                'Wird bei Kategorie-Fragen gezogen, obwohl die Seite jung ist',
              ],
              [
                'Alternative zu benanntem Anbieter',
                '/pixieset-alternative und /family-album-alternative',
                '14 zusammen',
                'Profitiert vom Bekanntheitsgrad des genannten Wettbewerbers',
              ],
              [
                'Regelfrage mit konkretem Fall',
                '/dsgvo-schule-apps',
                '45',
                'Stärkste Seite der Domain, beantwortet eine Compliance-Frage für einen Anwendungsfall',
              ],
              [
                'Startseite',
                '/',
                '18',
                'Wird für Markenfragen gezogen, nicht für Kategorie-Fragen',
              ],
            ],
            caption:
              'Auszug aus dem AI-Page-Stats-Export der Bing Webmaster Tools für dsgvoschulfotos.de vom 06.06.2026. Gesamt: 211 Citations auf 16 Seiten.',
            note:
              'Die Domain ist ein Nischenanbieter im Bildungsbereich. Die Verteilung ist auf andere SaaS-Nischen übertragbar, die absoluten Zahlen nicht.',
          },
          paragraphs: [
            'Zwei Dinge fallen auf. Erstens gewinnt nicht die Produktseite, sondern die Seite, die eine konkrete Fachfrage für einen konkreten Anwendungsfall abschließend beantwortet. Zweitens tragen die Vergleichs- und Alternativenseiten überproportional bei, gemessen an ihrer Zahl.',
            'Der Grund liegt in der Struktur solcher Seiten. Eine Alternativenseite ist von Natur aus eine Antwort auf eine Frage, die jemand tatsächlich stellt. Sie enthält Anbieternamen, Attribute und eine Einordnung. Genau diese Elemente braucht ein System, das mehrere Optionen nebeneinanderstellen soll.',
            'Wichtig ist die Ausführung. Eine Alternativenseite, die den Wettbewerber schlechtredet und in jedem Absatz das eigene Produkt gewinnen lässt, wird als Werbetext erkannt und liefert kein zitierfähiges Material. Eine, die ehrlich beschreibt, für welchen Fall der Wettbewerber die bessere Wahl ist, wird zitiert. Das ist unbequem und funktioniert.',
          ],
        },
        {
          id: 'dokumentation',
          heading: 'Die Dokumentation ist dein bester Content',
          paragraphs: [
            'Produktdokumentation wird selten als Marketing-Asset betrachtet und ist für KI-Systeme oft die nützlichste Ressource einer SaaS-Domain. Sie beantwortet präzise Fragen, benutzt Fachbegriffe konsistent und enthält konkrete Werte: Limits, Formate, Schnittstellen, Fehlermeldungen.',
            'Damit sie wirkt, muss sie erreichbar sein. Drei Fehler kommen regelmäßig vor: Die Doku liegt hinter einem Login, sie wird komplett im Browser gerendert, oder sie liegt auf einer Subdomain, die niemand verlinkt und deren Indexierung nie geprüft wurde.',
            'Eine öffentliche Doku hat einen zweiten Effekt. Wenn jemand ChatGPT fragt, ob deine Software eine bestimmte Schnittstelle unterstützt, ist die Antwort entweder belegbar oder geraten. Beim Raten kommen Fehler heraus, und diese Fehler bleiben, weil sie sich in Zusammenfassungen und Foren weitertragen.',
          ],
          bullets: [
            'Dokumentation öffentlich und serverseitig ausgeliefert halten, ohne Login-Pflicht für Grundlagen.',
            'Eine Seite pro konkreter Frage statt einer langen Seite mit allen Themen.',
            'Limits, Formate und Preise als Zahl mit Datum angeben, nicht als Fließtextversprechen.',
            'Changelog öffentlich führen. Er ist der einfachste Nachweis, dass das Produkt gepflegt wird.',
            'Statusseite und Datenstandort explizit benennen. Bei B2B-Software in Deutschland sind das Auswahlkriterien, nach denen gefragt wird.',
          ],
        },
        {
          id: 'preise',
          heading: 'Der Preis entscheidet über die Aufnahme in die Antwort',
          paragraphs: [
            'Wenn ein System drei Anbieter vergleichen soll, braucht es vergleichbare Attribute. Fehlt bei einem Anbieter der Preis, fällt der Vergleich für diese Zeile aus. In der Praxis bedeutet das häufig, dass der Anbieter mit „Preis auf Anfrage“ in der Vergleichsantwort weggelassen oder nur als Randnotiz genannt wird.',
            'Das ist ein echter Zielkonflikt, gerade im Enterprise-Vertrieb. Ein tragfähiger Mittelweg ist ein veröffentlichter Einstiegspreis plus die Angabe, was den Preis nach oben treibt. Damit ist die Zeile im Vergleich gefüllt, ohne dass die Verhandlungsposition aufgegeben wird.',
            'Denselben Effekt haben andere fehlende Attribute: Vertragslaufzeit, Testphase, Datenstandort, unterstützte Sprachen, verfügbare Schnittstellen. Jedes fehlende Attribut ist eine Zeile, in der du im direkten Vergleich nicht auftauchst.',
          ],
          warning: {
            title: 'Feature-Listen ersetzen keine Einordnung',
            text:
              'Eine Seite mit 40 Häkchen sagt einem Modell nicht, für wen das Produkt gedacht ist. Genau das braucht es aber für die Empfehlung. Ein Satz wie „gebaut für Teams von 5 bis 50 Personen, die X brauchen und auf Y verzichten können“ ist in Vergleichsantworten mehr wert als die vollständige Featureliste.',
          },
        },
        {
          id: 'ausserhalb',
          heading: 'Was außerhalb der eigenen Domain passieren muss',
          intro:
            'Die Reihenfolge in Vergleichsantworten korreliert stärker mit unabhängigen Erwähnungen als mit der eigenen Seitenqualität. Für SaaS gibt es dafür eingespielte Kanäle.',
          steps: [
            {
              title: 'Vollständige Profile auf Bewertungsplattformen',
              text:
                'Vergleichsportale und Bewertungsplattformen für Business-Software sind eine der Hauptquellen, aus denen Kategoriewissen entsteht. Ein unvollständiges Profil ohne Preise und ohne aktuelle Bewertungen wirkt hier direkt gegen die Aufnahme in Antworten.',
            },
            {
              title: 'Präsenz in Fachverzeichnissen und Branchenlisten',
              text:
                'Für den deutschen Markt zählen Branchen- und Fachverzeichnisse mehr als internationale Startup-Listen. Sie liefern die konsistenten Entitätsdaten, mit denen ein Modell den Anbieter überhaupt einer Kategorie zuordnen kann.',
            },
            {
              title: 'Beiträge dort, wo Fachleute tatsächlich diskutieren',
              text:
                'Antworten in Fachforen und Fachcommunities werden von KI-Systemen häufig abgerufen, weil sie konkrete Erfahrungsberichte enthalten. Was hier wirkt, ist echte Hilfe unter Klarnamen. Platzierte Links wirken gegen dich.',
            },
            {
              title: 'Nachprüfbare Kundenbelege',
              text:
                'Case Studies mit Zahlen, Namen und Datum sind für die Autoritätsseite der Rechnung wertvoller als Testimonials ohne Kontext. Sie geben Modellen etwas, das sich zitieren lässt, statt einer Behauptung.',
            },
          ],
          note:
            'Diese vier Punkte wirken über Monate, nicht über Wochen. Sie sind der Teil der Arbeit, der sich nicht durch bessere Texte auf der eigenen Seite ersetzen lässt.',
        },
        {
          id: 'plan',
          heading: 'Ein realistischer Plan für die ersten 90 Tage',
          steps: [
            {
              title: 'Woche 1: Prompt-Liste und Nullmessung',
              text:
                'Die zehn Kategorie-Fragen aufschreiben, die deine Zielkunden stellen würden, ohne deinen Namen zu kennen. Diese Fragen auf ChatGPT, Perplexity und Copilot testen und dokumentieren, wer genannt wird. Das ist die Nullmessung, gegen die später verglichen wird.',
            },
            {
              title: 'Woche 2: technische Prüfung',
              text:
                'robots.txt gegen GPTBot, OAI-SearchBot, PerplexityBot und ClaudeBot prüfen. Doku-Subdomain auf Indexierung prüfen. Sicherstellen, dass Produkt- und Doku-Seiten ihren Text im HTML ausliefern und nicht erst im Browser aufbauen.',
            },
            {
              title: 'Woche 3 bis 6: drei Seiten bauen',
              text:
                'Eine Kategorieseite („Software für X im Vergleich“), eine Alternativenseite zum bekanntesten Wettbewerber und eine Seite zur häufigsten Compliance- oder Integrationsfrage deiner Kunden. Jede mit Preisangabe, Einordnung und einer klaren Aussage, für wen das Produkt nicht passt.',
            },
            {
              title: 'Woche 7 bis 12: Profile und Belege',
              text:
                'Profile auf Bewertungsplattformen vervollständigen, zwei Fachverzeichnisse bedienen, eine Case Study mit Zahlen veröffentlichen. Parallel monatlich die Bing-Citations exportieren, damit die Zeitreihe entsteht.',
            },
          ],
          quote:
            'Die Alternativenseite, die ehrlich sagt, wann der Wettbewerber besser ist, wird häufiger zitiert als die Produktseite, die alles verspricht.',
        },
      ]}
      faqs={[
        {
          q: 'Warum empfiehlt ChatGPT meine Software nicht?',
          a: 'Meist weil die Sichtbarkeit an den Markennamen hängt und nicht an der Kategorie. Kaufprozesse beginnen mit Fragen wie „Welches Tool für X?“, und in dieser Phase ist der Name unbekannt. Ohne Kategorie- und Vergleichsseiten, ohne vergleichbare Attribute wie Preis und ohne unabhängige Erwähnungen fehlt dem System der Anlass, dich in eine Liste von fünf aufzunehmen.',
        },
        {
          q: 'Lohnen sich Alternativenseiten für SaaS?',
          a: 'Ja, sie gehören zu den stärksten Citation-Magneten. In einem Bing-Export einer von uns betreuten Software-Domain trugen die Vergleichs- und Alternativenseiten 20 von 211 Citations, bei einem kleinen Anteil an der Gesamtseitenzahl. Entscheidend ist die Ehrlichkeit: Seiten, die den Wettbewerber nur schlechtreden, werden als Werbetext behandelt.',
        },
        {
          q: 'Muss ich meine Preise veröffentlichen?',
          a: 'Für die Aufnahme in Vergleichsantworten hilft es erheblich. Wenn ein System drei Anbieter nebeneinanderstellt und bei dir der Preis fehlt, fällt diese Zeile aus oder du wirst übersprungen. Ein veröffentlichter Einstiegspreis plus die Angabe, was den Preis nach oben treibt, füllt die Zeile ohne Verlust der Verhandlungsposition.',
        },
        {
          q: 'Zählt Produktdokumentation für KI-Sichtbarkeit?',
          a: 'Sehr stark. Dokumentation beantwortet präzise Fragen, verwendet Fachbegriffe konsistent und enthält konkrete Werte wie Limits, Formate und Schnittstellen. Sie muss dafür öffentlich, indexierbar und serverseitig ausgeliefert sein. Eine Doku hinter Login oder auf einer nicht indexierten Subdomain zählt nicht.',
        },
        {
          q: 'Was ist wichtiger: eigene Inhalte oder Bewertungsplattformen?',
          a: 'Für die Aufnahme in eine Antwort die eigenen Vergleichs- und Kategorieseiten, für die Reihenfolge innerhalb der Antwort die unabhängigen Quellen. Beides ist nötig, aber in dieser Reihenfolge: Ohne eigene zitierfähige Seiten gibt es nichts abzurufen, ohne unabhängige Bestätigung landest du am Ende der Liste.',
        },
        {
          q: 'Wie lange dauert es, bis SaaS in KI-Empfehlungen auftaucht?',
          a: 'Technische Blockaden wirken innerhalb von Tagen nach Behebung. Neue Vergleichs- und Kategorieseiten brauchen typischerweise vier bis zwölf Wochen, bis sie in Antworten auftauchen, sofern die Domain indexiert wird. Die Reihenfolge innerhalb der Antwort verschiebt sich über Monate, weil sie an unabhängigen Erwähnungen hängt.',
        },
      ]}
      sources={[
        {
          label: 'Eigene Daten',
          text:
            'AI-Page-Stats-Export der Bing Webmaster Tools für dsgvoschulfotos.de vom 06.06.2026: 211 Citations auf 16 Seiten, davon 20 im Vergleichs- und Alternativenbereich und 45 auf der stärksten Fachfragenseite.',
        },
        {
          label: 'Google Search Central',
          text:
            'Googles Aussage zu AI-Funktionen: keine speziellen Dateien oder Schema-Typen nötig, es gelten die bekannten SEO-Grundlagen. Zitat: „You don\'t need to create new machine readable files, AI text files, or markup to appear in these features.“',
          href: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
        {
          label: 'Microsoft Bing Blog (Juni 2026)',
          text:
            'Intent-Klassifikation der Grounding Queries, mit der sich prüfen lässt, ob Citations aus kommerziellen oder rein informationellen Fragen kommen.',
          href: 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare',
        },
      ]}
      relatedArticles={[
        {
          title: 'Case Study KinderAlbum: von der Nische zur KI-Empfehlung',
          description:
            'Die Software-Domain aus den Zahlen dieses Artikels, mit dem konkreten Vorgehen und den Learnings.',
          href: '/wissen/case-study-kinderalbum',
          tag: 'Case Study',
        },
        {
          title: 'KI-Sichtbarkeit für Online-Shops',
          description: 'Die verwandte Branche mit demselben Grundproblem: Produktseiten sind für LLMs unsichtbar.',
          href: '/wissen/ki-sichtbarkeit-ecommerce',
          tag: 'E-Commerce',
        },
        {
          title: 'Warum erscheint meine Firma nicht in ChatGPT?',
          description: 'Die Diagnose in vier Schritten, bevor du die erste Vergleichsseite baust.',
          href: '/wissen/warum-nicht-in-chatgpt',
          tag: 'Diagnose',
        },
        {
          title: 'AI Content Strategie',
          description: 'Wie Inhalte aufgebaut sein müssen, damit KI-Systeme sie aktiv zitieren.',
          href: '/wissen/ai-content-strategie',
          tag: 'Content',
        },
      ]}
      ctaTitle="Welche fünf Anbieter nennt die KI in deiner Kategorie?"
      ctaText="Im kostenlosen 15-Minuten-Gespräch testen wir live die Kategorie-Fragen deiner Zielkunden und schauen, wer genannt wird und warum. Falls du dabei bist, sehen wir an welcher Stelle."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

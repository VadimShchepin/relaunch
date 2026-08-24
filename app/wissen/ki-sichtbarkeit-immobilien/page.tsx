import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KISichtbarkeitImmobilienPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-immobilien"
      breadcrumbLabel="KI-Sichtbarkeit für Immobilienmakler"
      eyebrow="Branche"
      title="KI-Sichtbarkeit für Immobilienmakler: Wenn Käufer die KI fragen"
      description="Welcher Immobilienmakler in Hamburg-Eppendorf ist empfehlenswert? Diese Frage geht immer öfter an ChatGPT statt an Google. Wer bei der Antwort fehlt, verliert den Erstkontakt. Dieser Guide zeigt, wie du als Makler in KI-Empfehlungen kommst."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryTitle="Zusammenfassung"
      summaryItems={[
        'Käufer und Verkäufer fragen ChatGPT nach Maklerempfehlungen. ImmoScout24 dominiert Google, aber KI empfiehlt einzelne Makler direkt.',
        'Immobilien sind YMYL, also eine große finanzielle Entscheidung. KI-Systeme empfehlen nur Makler mit starkem Vertrauensprofil über mehrere Quellen.',
        'Lokale Stadtteil-Expertise schlägt generische Makler-Websites. Wer Marktberichte für Eppendorf oder Winterhude publiziert, wird als Experte empfohlen.',
        'Bewertungen auf Google, ProvenExpert und ImmoScout24 sind der stärkste Einzelfaktor für Makler-Empfehlungen in KI-Systemen.',
        'Provisionen von 3 bis 6 % machen jeden KI-generierten Lead extrem wertvoll. Ein einziger Abschluss refinanziert das gesamte Investment.',
      ]}
      sections={[
        {
          id: 'problem',
          heading: 'Das Problem: Käufer und Verkäufer fragen die KI nach Maklerempfehlungen',
          intro:
            'Ein Ehepaar sucht eine Eigentumswohnung in Hamburg-Eppendorf. Früher hätte es auf ImmoScout24 nach Objekten gesucht und sich zum erstbesten Makler durchgeklickt. Heute öffnet es ChatGPT.',
          stat:
            'Typischer Prompt: Welcher Immobilienmakler in Hamburg-Eppendorf ist empfehlenswert? Wir suchen eine 3-Zimmer-Wohnung bis 600.000 Euro.',
          paragraphs: [
            'ChatGPT antwortet nicht mit einer Liste von zehn Maklern. Es empfiehlt zwei bis drei konkrete Namen, mit Begründung: spezialisiert auf Eppendorf, 120 Google-Bewertungen mit 4,9 Sternen, vom Hamburger Abendblatt als lokaler Experte zitiert.',
            'ImmoScout24 dominiert nach wie vor die Google-Suchergebnisse. Aber wenn die KI gefragt wird, empfiehlt sie nicht das Portal, sondern einzelne Makler. Das verändert die Spielregeln fundamental.',
            'Provisionen im Hamburger Immobilienmarkt liegen bei 3 bis 6 Prozent. Jeder KI-generierte Kontakt hat damit einen potenziellen Wert, der klassische Google-Ads-Leads in den Schatten stellt. Und eine KI-Empfehlung kommt mit Vertrauensvorschuss: Der Kunde hat nicht zehn Makler verglichen, die KI hat für ihn vorsortiert.',
          ],
          chart: {
            variant: 'column',
            title: 'Provision bei einer Wohnung für 500.000 Euro',
            subject: 'Hamburger Marktspanne',
            axis: { unit: ' €', title: 'Provision je Abschluss' },
            highlight: 'last',
            points: [
              { label: '3 % Provision', short: '3 %', value: 15000, note: 'unteres Ende' },
              { label: '6 % Provision', short: '6 %', value: 30000, note: 'oberes Ende' },
            ],
            table: { heads: ['Provisionssatz', 'Betrag'] },
            caption:
              'Gerechnet mit der im Hamburger Markt üblichen Spanne von 3 bis 6 Prozent auf einen Kaufpreis von 500.000 Euro. Zwei bis drei zusätzliche Abschlüsse pro Jahr finanzieren eine komplette KI-Sichtbarkeits-Strategie.',
          },
        },
        {
          id: 'warum',
          heading: 'Warum KI-Sichtbarkeit für Makler spielentscheidend ist',
          intro:
            'Immobilien sind ein klassisches YMYL-Thema (Your Money, Your Life). Eine Transaktion ist für die meisten Menschen die größte finanzielle Entscheidung ihres Lebens. KI-Systeme behandeln solche Anfragen mit besonderer Sorgfalt und empfehlen nur Anbieter mit eindeutigem Vertrauensprofil.',
          cards: [
            {
              title: 'Vertrauen ist die Währung',
              text:
                'Niemand übergibt die Vermarktung seiner Immobilie an einen Unbekannten. KI-Systeme bilden diesen Vertrauensprozess ab: Sie empfehlen Makler, die über viele Quellen hinweg als kompetent und vertrauenswürdig bestätigt werden.',
            },
            {
              title: 'Lokale Expertise als USP',
              text:
                'Immobilien sind hyperlokal. Ein Makler, der Winterhude kennt, ist für einen Winterhude-Verkäufer relevanter als ein bundesweiter Franchise. KI-Systeme bevorzugen nachweisbare lokale Spezialisierung gegenüber generischer Marktabdeckung.',
            },
            {
              title: 'Portale verlieren den Erstkontakt',
              text:
                'Wenn die KI direkt Makler empfiehlt, umgeht der Käufer ImmoScout24, Immowelt und Co. komplett. Der Erstkontakt findet über die Empfehlung statt, ohne Portal-Provision und ohne Vergleich mit zehn anderen Anbietern.',
            },
            {
              title: 'Hohe Provisionen = hoher Lead-Wert',
              text:
                'Bei 15.000 bis 30.000 Euro Provision pro Transaktion ist der ROI von KI-Sichtbarkeit im Immobilienbereich extrem hoch. Zwei bis drei KI-generierte Abschlüsse pro Jahr finanzieren eine komplette Strategie, mit Gewinn.',
            },
          ],
        },
        {
          id: 'faktoren',
          heading: '5 Faktoren, die KI-Empfehlungen für Makler beeinflussen',
          intro:
            'ChatGPT, Perplexity und Google AI Overviews werten unterschiedliche Signale aus. Für Immobilienmakler kristallisieren sich fünf Hauptfaktoren heraus.',
          cards: [
            {
              title: 'Bewertungsprofil',
              text:
                'Google-Rezensionen, ProvenExpert, ImmoScout24-Bewertungen und Kununu fließen alle ein, gewichtet nach Anzahl, Durchschnitt und Aktualität. Ein Makler mit 80 aktuellen Bewertungen bei 4,8 Sternen wird einem mit 15 Bewertungen aus 2022 vorgezogen.',
            },
            {
              title: 'Lokale Marktexpertise',
              text:
                'Stadtteilbezogener Content ist der stärkste Differenzierungsfaktor: Marktberichte pro Viertel, Preisentwicklungen, Guides mit Infrastruktur, Schulen und Entwicklungsprojekten. Die KI erkennt daran, ob du ein Viertel oberflächlich oder im Detail kennst.',
            },
            {
              title: 'Website-Qualität',
              text:
                'Aktuelle Objekte, dokumentierte Referenzen, nachvollziehbare Verkaufserfolge. Case Studies mit Vermarktungsdauer und Verkaufspreis gegen Angebotspreis zeigen Kompetenz messbar, statt nur zu behaupten.',
            },
            {
              title: 'Medienresonanz',
              text:
                'Presseerwähnungen, Marktkommentare im Hamburger Abendblatt, Gastbeiträge in Immobilien-Fachmedien, Zitate in Marktberichten. Redaktionelle Erwähnungen signalisieren der KI eine anerkannte Quelle im Immobilienmarkt.',
            },
            {
              title: 'Spezialisierung',
              text:
                'Luxusimmobilien, Gewerbe, Eigentumswohnungen, Kapitalanlagen, Neubau: Klare Spezialisierung hilft der KI bei der Zuordnung. Wer alles kann, wird für nichts empfohlen. Wer Altbau-Eigentumswohnungen in Eimsbüttel besetzt, bekommt genau diese Anfragen.',
            },
          ],
        },
        {
          id: 'strategien',
          heading: '7 Strategien für Immobilienmakler',
          intro:
            'Sieben Maßnahmen, sortiert nach Wirkung pro Aufwand. Die ersten beiden erzeugen den Content, den KI-Systeme als Expertise lesen.',
          steps: [
            {
              title: 'Stadtteil-Guides und Marktberichte erstellen',
              text:
                'Erstelle für jedes Viertel, in dem du aktiv bist, einen detaillierten Marktbericht: aktuelle Quadratmeterpreise, Preisentwicklung der letzten 3 Jahre, typische Käuferprofile, Infrastruktur. Quartalsweise aktualisieren. Ein Bericht zum Immobilienmarkt Eppendorf 2026 mit Preisen, Trends und Prognose ist genau der Content, den KI-Systeme als Expertenquelle einstufen.',
            },
            {
              title: 'Verkaufserfolge dokumentieren',
              text:
                'Case Studies sind Gold wert. Für jedes verkaufte Objekt: Ausgangssituation, Vermarktungsstrategie, Vermarktungsdauer, Ergebnis. Beispiel: 3-Zimmer-Altbau in Winterhude, Angebotspreis 520.000 Euro, Verkaufspreis 548.000 Euro, 18 Tage am Markt. Diese konkreten Daten geben der KI belastbare Evidenz für eine Empfehlung.',
            },
            {
              title: 'Google Business mit Immobilien-Kategorien optimieren',
              text:
                'Hauptkategorie Immobilienmakler, dazu passende Zusatzkategorien wie Immobilienberater. Regelmäßige Beiträge mit neuen Objekten, Markt-Updates und Verkaufserfolgen, dazu Fotos von Objekten, Büro und dir. Die KI nutzt Google Business als eine der wichtigsten lokalen Quellen.',
            },
            {
              title: 'Schema.org RealEstateAgent Markup implementieren',
              text:
                'Strukturierte Daten helfen KI-Systemen bei der Klassifizierung. Setze RealEstateAgent mit areaServed für Hamburg und die konkreten Stadtteile, dazu priceRange, Spezialisierungen und Bewertungsaggregate. Das macht deine Daten maschinenlesbar und erhöht die Trefferquote bei spezifischen Anfragen.',
            },
            {
              title: 'Bewertungsmanagement nach jedem Abschluss',
              text:
                'Systematischer Prozess: nach jeder Schlüsselübergabe innerhalb von 48 Stunden eine persönliche Bewertungsbitte, verteilt auf Google, ProvenExpert und ImmoScout24. Auf jede Bewertung antworten, auch auf positive. Ziel sind mindestens 5 neue Bewertungen pro Quartal, denn die KI gewichtet Aktualität und Kontinuität.',
            },
            {
              title: 'Marktexpertise durch Blog und Ratgeber zeigen',
              text:
                'Regelmäßige Artikel zu Fragen, die Käufer und Verkäufer wirklich stellen: Was kostet ein Makler in Hamburg? Lohnt sich der Verkauf ohne Makler? Was müssen Käufer zur Grunderwerbsteuer in Hamburg wissen? Beantworte in den ersten zwei Sätzen, genau wie eine KI es zitieren würde.',
            },
            {
              title: 'Präsenz auf Fachportalen stärken',
              text:
                'IVD-Mitgliedschaft, Einträge bei immowelt und immonet, im Franchise-Fall das Netzwerkprofil. Dazu Gastbeiträge in Fachmedien wie Immobilien Manager, Thomas Daily oder AIZ. Jede redaktionelle Erwähnung auf einer vertrauenswürdigen Branchenquelle stärkt dein KI-Profil.',
            },
          ],
        },
        {
          id: 'makler-typen',
          heading: 'Makler-Typen und ihre KI-Chancen',
          intro:
            'Nicht jeder Makler hat die gleichen Voraussetzungen. Je nach Geschäftsmodell unterscheiden sich die Hebel für KI-Sichtbarkeit.',
          cards: [
            {
              title: 'Einzelmakler',
              text:
                'Vorteil: persönliche Marke, echte Spezialisierung, authentische Bewertungen mit Namen. KI-Systeme bevorzugen konkrete Personen gegenüber anonymen Firmen. Strategie: Positioniere dich als der Experte für zwei bis drei Stadtteile, zeige Gesicht und belege Expertise durch Content. Du brauchst weniger Volumen als große Büros, dafür mehr Tiefe.',
            },
            {
              title: 'Boutique-Maklerbüro',
              text:
                'Vorteil: Team-Expertise kombinieren, mehrere Stadtteile abdecken, gemeinsame Marke mit individuellen Profilen. Strategie: Jeder Makler im Team wird als Stadtteil-Experte positioniert, mit individuellem Profil und eigenen Bewertungen auf einer gemeinsamen Website. Dann empfiehlt die KI sowohl das Büro als auch einzelne Personen.',
            },
            {
              title: 'Franchise (Engel & Völkers, VON POLL, etc.)',
              text:
                'Vorteil: starke Dachmarke, die die KI bereits kennt. Herausforderung: Die KI empfiehlt oft die Marke generisch, nicht deinen Standort. Lösung: lokale Differenzierung durch eigene Inhalte, eigenes Google-Business-Profil und standortspezifische Bewertungen. Die Franchise-Marke öffnet die Tür, lokale Expertise schließt den Deal.',
            },
            {
              title: 'Bauträger-Vertrieb',
              text:
                'Vorteil: Neubauprojekte sind konkret, aktuell und hoch relevant für Anfragen wie Neubau kaufen in Hamburg. Strategie: Projektseiten mit Grundrissen, Preisen, Baufortschritt und Umgebungsinformationen, dazu Schema.org für Neubauprojekte und Pressearbeit bei Projektstart und Richtfest. Jedes Projekt ist eine eigene Sichtbarkeits-Chance.',
            },
          ],
        },
        {
          id: 'hamburg',
          heading: 'KI-Sichtbarkeit für Hamburger Immobilienmakler',
          intro:
            'Hamburg ist einer der teuersten und dynamischsten Immobilienmärkte Deutschlands. Quadratmeterpreise von über 5.500 Euro im Schnitt, stark differenzierte Stadtteile und eine hohe Maklerdichte machen KI-Sichtbarkeit hier besonders wettbewerbsrelevant.',
          paragraphs: [
            'Die Stadtteile sind der Schlüssel. Käufer suchen nicht nach einem Makler in Hamburg, sondern nach einem Makler in Eppendorf oder nach Immobilien in Blankenese. Jeder Stadtteil hat sein eigenes Preisniveau, seine eigene Käuferstruktur und seinen eigenen Charakter. Wer das in Content abbildet, wird von der KI als lokaler Experte erkannt.',
            'Eine IVD-Nord-Mitgliedschaft stärkt dieses Profil zusätzlich. Der Immobilienverband Deutschland ist eine der meistzitierten Branchenquellen in Immobilien-Kontexten, und ein IVD-zertifizierter Makler ist für die KI ein Qualitätsmerkmal.',
          ],
          table: {
            headers: ['Stadtteile als KI-Keywords', 'Was den Markt dort prägt'],
            rows: [
              [
                'Eppendorf',
                'Altbau, Familien, hohe Kaufkraft, Durchschnitt etwa 7.000 Euro pro Quadratmeter. Starke Nachfrage nach sanierten Altbauwohnungen.',
              ],
              [
                'Winterhude',
                'Mix aus Altbau und Neubau, junges Publikum, Alsternähe. Eines der gefragtesten Viertel für Eigentumswohnungen.',
              ],
              [
                'HafenCity',
                'Neubau, Kapitalanleger, internationale Käufer. Premium-Segment mit Wasserblick und moderner Architektur.',
              ],
              [
                'Blankenese',
                'Villen, Elbnähe, Luxussegment. Exklusiver Markt mit diskreter Vermarktung und langen Verkaufszyklen.',
              ],
              [
                'Eimsbüttel',
                'Beliebt bei jungen Familien, Altbau-Quartier, moderate Preise im Vergleich zu Eppendorf.',
              ],
              [
                'Ottensen',
                'Kreativ, urban, hohe Nachfrage. Gentrifizierung treibt die Preise, dazu ein starker Mietwohnungsmarkt.',
              ],
            ],
            caption:
              'Sechs Hamburger Stadtteile mit dem jeweiligen Marktcharakter. Der Preiswert für Eppendorf stammt aus dem Grundstücksmarktbericht, für die übrigen Viertel steht bewusst keine Zahl, weil sie sich je nach Objekttyp stark unterscheidet.',
          },
          note:
            'Für jeden Stadtteil, in dem du aktiv bist, sollte eine eigene Unterseite existieren: Marktdaten, aktuelle Objekte, Referenzen aus dem Viertel, lokale Expertise. Das ist der Content, den KI-Systeme als Beweis für Stadtteil-Kompetenz werten.',
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Wie wird mein Maklerbüro in ChatGPT empfohlen?',
          a: 'ChatGPT empfiehlt Makler mit starkem Bewertungsprofil auf Google und ProvenExpert, konsistenten Erwähnungen auf Fachportalen, einer professionellen Website mit Stadtteil-Expertise und idealerweise Presseerwähnungen. Brand Mentions auf vertrauenswürdigen Quellen sind der stärkste Faktor.',
        },
        {
          q: 'Reicht ein ImmoScout24-Profil für KI-Sichtbarkeit?',
          a: 'Nein. ImmoScout24 dominiert Google, aber KI-Systeme empfehlen einzelne Makler direkt. Du brauchst eine eigene Website mit Stadtteil-Expertise, Bewertungen auf mehreren Plattformen und idealerweise Presseerwähnungen. Die KI cross-referenziert alle Quellen.',
        },
        {
          q: 'Welche Rolle spielen Bewertungen für KI-Empfehlungen bei Maklern?',
          a: 'Bewertungen sind ein zentraler Faktor. Die KI wertet Google-Rezensionen, ProvenExpert, ImmoScout24-Bewertungen und Kununu aus. Anzahl, Aktualität und Konsistenz entscheiden. Ziel sind mindestens 5 neue Bewertungen pro Quartal.',
        },
        {
          q: 'Wie schnell wirkt KI-Sichtbarkeit im Immobilienbereich?',
          a: 'Live-Websuche über ChatGPT und Perplexity: Wochen. Trainingsdaten: Monate. Für nachhaltigen Aufbau solltest du 3 bis 6 Monate einplanen. Die gute Nachricht: Jeder veröffentlichte Marktbericht und jede neue Bewertung zahlt sofort auf die Live-Suche ein.',
        },
        {
          q: 'Ist KI-Sichtbarkeit für Einzelmakler oder nur für große Büros relevant?',
          a: 'Gerade Einzelmakler profitieren überproportional. KI-Systeme empfehlen oft spezialisierte lokale Experten. Ein Einzelmakler, der als Eppendorf-Spezialist positioniert ist, kann in KI-Empfehlungen einen Franchise-Makler schlagen.',
        },
        {
          q: 'Was bringt Schema.org RealEstateAgent Markup?',
          a: 'Das Markup hilft KI-Systemen, dein Unternehmen als Immobilienmakler zu klassifizieren. Es strukturiert Spezialisierung, Einzugsgebiet und Kontaktdaten maschinenlesbar. Das erhöht die Trefferquote bei spezifischen Anfragen, etwa nach einem Luxusmakler in Hamburg-Blankenese.',
        },
        {
          q: 'Verlieren Immobilienportale durch KI an Bedeutung?',
          a: 'Teilweise ja. Für die Objektsuche bleiben Portale relevant. Aber für die Maklerauswahl verschiebt sich der Erstkontakt zur KI. Wenn Käufer fragen, welcher Makler in Winterhude gut ist, empfiehlt die KI direkt, ohne den Umweg über ein Portal.',
        },
      ]}
      sources={[
        {
          label: 'Ahrefs (2025)',
          text: 'LLM SEO, Korrelationsstudie zu Brand Mentions und KI-Sichtbarkeit.',
          href: 'https://ahrefs.com/blog/llm-seo/',
        },
        {
          label: 'IVD Immobilienverband Deutschland',
          text: 'Marktdaten und Preisspiegel als Referenz für regionale Kaufpreise.',
          href: 'https://www.ivd.net/marktdaten',
        },
        {
          label: 'Gutachterausschuss Hamburg',
          text: 'Grundstücksmarktbericht mit den amtlichen Hamburger Quadratmeterpreisen.',
          href: 'https://www.gutachterausschuss-hamburg.de',
        },
        {
          label: 'Schema.org',
          text: 'Dokumentation des RealEstateAgent-Markups mit areaServed und priceRange.',
          href: 'https://schema.org/RealEstateAgent',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPTs Dual-System funktioniert und wie du dort sichtbar wirst.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'Sichtbarkeit in Perplexity',
          description: 'Der schnellste Kanal: Perplexity zitiert einzelne Seiten, nicht Marken.',
          href: '/wissen/sichtbarkeit-in-perplexity',
          tag: 'Perplexity',
        },
      ]}
      ctaTitle="Werden Käufer und Verkäufer von der KI zu dir geschickt?"
      ctaText="Ich prüfe, ob und wie KI-Systeme dein Maklerbüro aktuell empfehlen: ChatGPT, Perplexity und Google AI Overviews. Kostenlos, in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

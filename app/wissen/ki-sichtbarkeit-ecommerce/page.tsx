import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitEcommercePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-ecommerce"
      breadcrumbLabel="KI-Sichtbarkeit E-Commerce"
      eyebrow="E-Commerce"
      title="KI-Sichtbarkeit für Online-Shops: Warum ChatGPT deine Produkte nicht empfiehlt"
      description="Dein Online-Shop hat 14.000 Produkte, eine Conversion-Rate von 2,3 Prozent und einen Blog mit Artikeln wie 5 Gründe, warum du unsere Produkte liebst. ChatGPT kennt keins davon. Nicht eins. Das ist ungefähr so, als hättest du ein Restaurant ohne Tür gebaut."
      publishedAt="2026-04-02"
      modifiedAt="2026-08-24"
      image={{
        src: '/images/wissen/ki-sichtbarkeit-ecommerce/hero-ecommerce-ai-visibility.webp',
        alt: 'Produktdaten fließen über Buying Guides, Vergleiche und Schema-Markup in eine KI-Antwort',
        caption:
          'Produktdaten allein reichen nicht. KI-Systeme brauchen Kontext, Vergleiche und zitierbare Kaufberatung, um Produkte empfehlen zu können.',
        width: 1672,
        height: 941,
      }}
      summaryTitle="TL;DR: Für die Ungeduldigen"
      summaryItems={[
        'Produktseiten sind für KI unsichtbar. ChatGPT kann nichts mit "Artikelnummer 48372, Größe M bis XXL, 49,99 Euro" anfangen. Das ist keine Information, das ist ein Preisschild.',
        'Google Shopping ist nicht KI-Empfehlung. Was bei Google Shopping funktioniert, ist für ChatGPT und Perplexity völlig irrelevant. Zwei komplett verschiedene Welten.',
        'Zitierbarer Content ist der Schlüssel: Buying Guides, Vergleiche, Expertise-Artikel. Inhalte, die eine Frage beantworten, nicht ein Produkt verkaufen.',
        'Product Schema allein reicht nicht. Aber ohne Product Schema bist du nicht mal im Spiel. Du brauchst beides: technische Basis und echten Content.',
      ]}
      sections={[
        {
          id: 'warum-unsichtbar',
          heading: 'Warum E-Commerce-Shops besonders unsichtbar sind',
          intro:
            'Frag ChatGPT, welche Laufschuhe gut für Anfänger sind, und du bekommst eine detaillierte Antwort mit Marken, Modellen und Begründungen. Keiner der empfohlenen Links führt zu einem deutschen Online-Shop. Keiner. Die Empfehlungen kommen von Testportalen, Fachmagazinen und Blogs mit echten Laufschuh-Tests.',
          paragraphs: [
            'Der Grund: dein Shop hat ChatGPT nichts zu erzählen.',
            'Deine Produktseite sagt: "ASICS Gel-Nimbus 27, atmungsaktives Mesh, FlyteFoam-Dämpfung, UVP 179,95 Euro." Das ist keine Antwort auf eine Frage, das ist ein Datenblatt. Ein Sprachmodell kann daraus keine Empfehlung generieren, weil es keine Meinung enthält, keine Einordnung, keine Begründung, warum genau dieser Schuh für Anfänger gut ist.',
          ],
          stat: 'Dein Shop ist ein Lager. Kein Berater. Und KI-Systeme empfehlen Berater, keine Lager.',
        },
        {
          id: 'fuenf-gruende',
          heading: 'Die 5 Gründe, warum Produktseiten für KI nicht funktionieren',
          intro:
            'Fünf Muster, die in fast jedem Shop-Audit auftauchen. Die ersten drei sind inhaltlich, die letzten zwei technisch.',
          bullets: [
            'Kein informativer Kontext. Produktbeschreibungen beantworten keine Fragen, sie beschreiben Features. KI braucht Antworten, nicht Spezifikationen.',
            'Duplicate Content in Serie: 500 Produkte mit der gleichen Template-Beschreibung, "hochwertige Materialien, schneller Versand, 30 Tage Rückgabe". Das ist kein Content, das ist Copy-Paste mit Preisänderung.',
            'Keine Expertise-Signale. Wer hat den Schuh getestet? Wo sind die Laufkilometer-Daten? Wo ist die Meinung eines Podologen? Ohne E-E-A-T bist du für KI eine anonyme Preisliste.',
            'Dynamische Inhalte. Preise ändern sich, Produkte sind ausverkauft, Varianten wechseln. KI-Modelle haben Schwierigkeiten mit Inhalten, die morgen schon veraltet sein könnten.',
            'JavaScript-Rendering. Viele Shops laden Content per JavaScript nach. GPTBot und PerplexityBot können nicht immer rendern. Was sie nicht sehen, existiert nicht.',
          ],
        },
        {
          id: 'shopping-vs-chatgpt',
          heading: 'Google Shopping vs. ChatGPT-Empfehlungen: Zwei verschiedene Universen',
          intro:
            'Deine Google Shopping-Kampagne läuft? Herzlichen Glückwunsch. Das hat mit KI-Sichtbarkeit ungefähr so viel zu tun wie dein Führerschein mit deiner Kochfähigkeit. Beides nützlich, null Zusammenhang.',
          paragraphs: [
            'Google Shopping ist ein Auktionssystem. Du zahlst für Klicks, der beste Bieter gewinnt. ChatGPT ist ein Empfehlungssystem. Der informativste, vertrauenswürdigste Content gewinnt. Kein Budget der Welt kann das kaufen.',
          ],
          table: {
            headers: ['Kriterium', 'Google Shopping', 'ChatGPT / Perplexity'],
            rows: [
              ['Wie du reinkommst', 'Produktfeed plus Budget', 'Zitierbarer Expertise-Content'],
              ['Was zählt', 'Preis, Gebot, Relevanz', 'Vertrauen, Struktur, Quellen'],
              ['Content-Typ', 'Produktdaten: Titel, Preis, Bild', 'Buying Guides, Vergleiche, Tests'],
              ['Kosten', 'CPC, plus 12,9 % im Jahresvergleich (WordStream und LocaliQ, 2025)', 'Content-Erstellung, einmalig plus Updates'],
              ['Nachhaltigkeit', 'Budget aus, Sichtbarkeit weg', 'Baut sich über Zeit auf'],
              ['Nutzer-Intent', 'Kaufbereit, vergleicht Preise', 'Recherchiert, sucht Expertise'],
              ['Vertrauen', 'Nutzer weiß: das ist Werbung', 'KI-Empfehlung wirkt wie ein Rat'],
            ],
            caption:
              'Der entscheidende Punkt: ein Nutzer, der ChatGPT nach dem besten Laufschuh fragt, vertraut der Empfehlung mehr als einer Google Shopping-Anzeige.',
            note:
              'Weil er weiß, dass die Anzeige gekauft ist. Die KI-Empfehlung fühlt sich an wie der Rat eines Freundes. Eines sehr belesenen Freundes.',
          },
        },
        {
          id: 'glauben-vs-realitaet',
          heading: 'Was Online-Shops glauben vs. was tatsächlich funktioniert',
          intro:
            'Drei Sätze aus echten Erstgesprächen, daneben das, was in denselben Projekten tatsächlich Zitationen gebracht hat.',
          table: {
            headers: ['Thema', 'Was Shops glauben', 'Was tatsächlich funktioniert'],
            rows: [
              [
                'Content',
                '"Unsere Produktbeschreibungen sind gut geschrieben. Wir haben sogar einen Blog. Letzte Woche haben wir einen Artikel über unseren neuen Frühjahrs-Sale veröffentlicht. Das ist doch Content, oder?"',
                'Ein Buying Guide mit 2.500 Wörtern, "Laufschuhe für Anfänger: Was Podologen empfehlen", mit Vergleichstabelle, Expertenmeinung, Quellenangaben und klarer Answer-First-Struktur. Dieser Content wird von KI zitiert, der Sale-Artikel nicht.',
              ],
              [
                'Schema',
                '"Wir haben Product Schema auf allen Seiten. Technisch sind wir perfekt aufgestellt. Wir haben sogar aggregateRating drin."',
                'Product Schema ist die Eintrittskarte, nicht das Konzert. Ohne begleitenden Expertise-Content ist dein Schema wie ein perfekt formatierter Lebenslauf für einen Job, auf den du dich nie bewirbst. Schema plus Content plus Autorität ergibt KI-Sichtbarkeit.',
              ],
              [
                'Google-Rankings',
                '"Wir ranken auf Seite 1 bei Google für unsere wichtigsten Keywords. Also sind wir doch auch für KI sichtbar, oder?"',
                'Google-Rankings und KI-Zitierungen korrelieren nur teilweise. KI bevorzugt Content mit klaren Fakten, Quellenangaben und Answer-First-Struktur, nicht den Content mit den meisten Backlinks. Du kannst Platz 1 bei Google sein und bei ChatGPT nicht existieren. Das passiert häufiger, als du denkst.',
              ],
            ],
            caption:
              'Die rechte Spalte ist die Arbeit. Die mittlere ist der Grund, warum sie so oft nicht gemacht wird.',
          },
        },
        {
          id: 'content-den-ki-will',
          heading: 'Der Content, den KI von Online-Shops will (und nicht bekommt)',
          intro:
            'Stell dir vor, du betreibst einen Outdoor-Shop. Du hast 3.000 Produkte und einen Blog mit "10 Gründe, warum Wandern toll ist". Das ist nett und völlig nutzlos für KI-Sichtbarkeit. Was du stattdessen brauchst:',
          steps: [
            {
              title: 'Buying Guides mit echtem Fachwissen',
              text: 'Nicht "Die 10 besten Zelte 2026" mit Affiliate-Links, sondern "Zelt kaufen: Was du über Materialien, Wassersäule und Konstruktion wissen musst, von einem Bergführer erklärt". Mit deinem Experten als Autor, mit messbaren Fakten, mit Vergleichstabellen.',
              outro:
                'KI-Bonus: dieser Content beantwortet Dutzende Long-Tail-Fragen gleichzeitig. Welches Zelt für zwei Personen, Zelt mit niedriger Wassersäule, Tunnelzelt oder Kuppelzelt: ein Guide, viele KI-Antworten.',
            },
            {
              title: 'Vergleichs-Content: X vs. Y',
              text: '"ASICS Gel-Nimbus vs. Nike Pegasus: Welcher Laufschuh für welchen Läufer?" Mit echten Testdaten, Gewichtsvergleich, Einsatzgebiet, Preis-Leistung. Das ist der Content, den KI-Systeme bevorzugen, weil er eine konkrete Entscheidungsfrage beantwortet.',
              outro:
                'KI-Bonus: Vergleichs-Content ist das stärkste Format für KI-Zitierungen. Die Princeton-GEO-Studie zeigt, dass Inhalte mit Zitaten, Statistiken und klaren Quellenangaben bis zu 40 Prozent mehr Sichtbarkeit in generativen Antworten erreichen als unveränderte Produkttexte.',
            },
            {
              title: 'Problemlösungs-Content',
              text: '"Knieschmerzen beim Laufen: Welche Schuhe helfen?", geschrieben mit Input eines Sportmediziners, mit Quellenangaben aus Fachpublikationen. Du verkaufst nicht direkt, du baust Vertrauen auf. Und wenn ChatGPT dann gefragt wird, welcher Shop sich mit Laufschuhen für Knieprobleme auskennt, ratet mal, wen es empfiehlt.',
              outro:
                'KI-Bonus: Problemlösungs-Content triggert E-E-A-T-Signale wie nichts anderes. Experience, Expertise, Authoritativeness und Trustworthiness, alles in einem Artikel.',
            },
            {
              title: 'Kategorie-Expertise-Seiten',
              text: 'Deine Kategorie "Wanderschuhe" zeigt aktuell 127 Produkte mit Filtern. Für KI ist das eine Datenbank, kein Content. Was fehlt: ein Intro mit 500 Wörtern, das erklärt, worauf es bei Wanderschuhen ankommt, welche Typen es gibt und wann welcher sinnvoll ist. Mit FAQ-Sektion und internen Links zu deinen Buying Guides.',
              outro:
                'KI-Bonus: Kategorie-Expertise-Seiten sind der Hub, von dem aus KI-Crawler deine gesamte Produktwelt verstehen. Ohne sie ist dein Shop ein Labyrinth ohne Wegweiser.',
            },
          ],
        },
        {
          id: 'product-schema',
          heading: 'Product Schema: Die technische Basis, die 90% der Shops falsch machen',
          intro:
            'Du hast Product Schema auf deinen Seiten? Glückwunsch. Aber lass mich raten: es ist auto-generiert von deinem Shopsystem, enthält Mindestdaten und wurde seit der Installation nie wieder angefasst. Das ist wie ein Auto mit Motor, aber ohne Räder. Technisch vorhanden, praktisch nutzlos.',
          table: {
            headers: ['Feld', 'Was dein Product Schema braucht (Minimum)'],
            rows: [
              ['name', 'Der vollständige Produktname, nicht "Artikel 48372".'],
              ['description', 'Mindestens 100 Wörter mit echtem Informationsgehalt, nicht nur Features.'],
              ['brand', 'Als eigenständiges Brand-Objekt, nicht nur ein String.'],
              ['offers', 'Mit price, priceCurrency (EUR), availability (InStock oder OutOfStock) und url.'],
              ['aggregateRating', 'Nur mit echten Bewertungen. Fake-Ratings erkennt KI sofort.'],
              ['review', 'Mindestens 3 echte Kundenbewertungen als Review-Objekte mit author und reviewBody.'],
              ['image', 'Hochauflösende Produktbilder, mindestens 1200 px breit.'],
              ['sku und gtin', 'Eindeutige Identifikatoren, damit KI dein Produkt zuordnen kann.'],
            ],
            caption:
              'Acht Felder, die jedes Shopsystem ausgeben kann. Die meisten geben vier davon aus.',
          },
          warning: {
            title: 'Pro-Tipp: Schema plus Content',
            text: 'Das beste Product Schema nützt nichts ohne begleitenden Content. Aber der beste Content nützt wenig ohne Schema. Die Kombination ist der Punkt: dein Schema sagt der KI, was dein Produkt ist. Dein Content sagt der KI, warum es empfehlenswert ist. Eins ohne das andere ist wie ein Sandwich mit nur einer Scheibe Brot. Technisch essbar, praktisch traurig.',
          },
        },
        {
          id: 'strategie',
          heading: 'Die E-Commerce KI-Strategie: 5 Schritte, die tatsächlich funktionieren',
          intro:
            'Kein Wunschdenken, kein "einfach mal Content erstellen". Ein konkreter Plan, der aus einem unsichtbaren Shop einen zitierfähigen Shop macht.',
          steps: [
            {
              title: 'Audit: Wo stehst du wirklich?',
              text: 'Frag ChatGPT und Perplexity nach deinen Top-Produktkategorien. Wirst du erwähnt? Werden deine Wettbewerber erwähnt? Prüfe dein bestehendes Schema-Markup. Identifiziere deine 10 wichtigsten Kategorien nach Umsatz und Suchvolumen. Das ist dein Startpunkt.',
            },
            {
              title: 'Technische Basis: Schema & Crawlability',
              text: 'Product Schema erweitern, siehe Tabelle oben. llms.txt konfigurieren. Server-Side Rendering sicherstellen, damit KI-Bots deine Inhalte sehen. robots.txt prüfen: blockierst du GPTBot oder PerplexityBot? Viele Shops tun das versehentlich.',
            },
            {
              title: 'Content-Hub pro Kategorie aufbauen',
              text: 'Für jede Top-Kategorie: 1 Buying Guide, 2 bis 3 Vergleichsartikel, 1 Problemlösungs-Content. Die Kategorie-Expertise-Seite ist der Hub mit internen Links. Jeder Artikel mit Answer-First-Struktur, Quellenangaben und echtem Fachwissen. Kein umgeschriebener Wikipedia-Content, echte Expertise.',
            },
            {
              title: 'Autorität aufbauen',
              text: 'Externe Erwähnungen in Fachmedien. Echte Produkttests auf unabhängigen Portalen. Gastbeiträge in Branchenblogs. KI-Systeme validieren über externe Quellen. Wenn nur deine eigene Website sagt, dass du der Experte bist, glaubt dir keine KI. Genau wie im echten Leben.',
            },
            {
              title: 'Monitoring & Iteration',
              text: 'Monatlich prüfen: wirst du in KI-Antworten für deine Kategorien erwähnt? Welche Wettbewerber tauchen auf? Welche Fragen werden gestellt, die du noch nicht beantwortest? Content aktualisieren, erweitern, verbessern. KI-Sichtbarkeit ist kein Projekt, sondern ein Prozess.',
            },
          ],
        },
        {
          id: 'fails',
          heading: 'Die größten E-Commerce KI-Fails (echte Beispiele, anonymisiert)',
          intro:
            'Drei Projekte, drei Arten, es falsch zu machen. Der dritte Fall lässt sich in einer einzigen Grafik zeigen.',
          chart: {
            variant: 'column',
            title: 'Bewertungsschnitt im eigenen Schema gegen die echte Quelle',
            axis: { title: 'Sterne, Maximum 5', max: 5 },
            highlight: 'peak',
            points: [
              { label: 'Angabe im Product Schema', short: 'Schema', value: 4.9 },
              { label: 'Echte Bewertungen bei Trustpilot', short: 'Trustpilot', value: 3.2 },
            ],
            table: { label: 'Werte anzeigen', heads: ['Quelle', 'Durchschnitt'] },
            caption:
              'Der Nahrungsergänzungs-Shop aus dem dritten Fall unten. KI-Systeme vergleichen beide Quellen, und die Lücke von 1,7 Sternen kostet nicht nur die Bewertungen ihre Glaubwürdigkeit, sondern die ganze Domain.',
          },
          cards: [
            {
              title: 'Der Wir-haben-doch-SEO-Shop',
              text: 'Großer Modeshop, 8.000 Produkte, SEO-Agentur seit 3 Jahren, Seite-1-Rankings für über 200 Keywords. KI-Sichtbarkeit: null. Kein einziges Produkt, keine einzige Kategorie wird von ChatGPT oder Perplexity erwähnt. Warum? Weil der gesamte Content transaktional ist. Kein Buying Guide, kein Vergleich, kein Ratgeber. Nur Produktseiten und Sale-Banner. 36.000 Euro SEO-Budget pro Jahr, null KI-Empfehlungen.',
            },
            {
              title: 'Der 500-KI-Artikel-in-einer-Woche-Shop',
              text: 'Elektronik-Shop lässt ChatGPT 500 Buying Guides schreiben und veröffentlicht sie in einer Woche. Ergebnis: Abstrafung durch das Helpful Content System, 60 Prozent Traffic-Verlust. KI-Sichtbarkeit? Negativ, die Domain wurde als Content-Spam markiert. Jetzt ist der Shop bei Google und bei KI unsichtbar. Doppelt bestraft. Manchmal ist Nichtstun die bessere Strategie.',
            },
            {
              title: 'Der Fake-Bewertungen-im-Schema-Shop',
              text: 'Nahrungsergänzungsmittel-Shop packt 200 Fake-Bewertungen ins Product Schema. Durchschnitt: 4,9 Sterne. Problem: die echten Trustpilot-Bewertungen zeigen 3,2 Sterne. KI-Systeme vergleichen diese Daten. Ergebnis: die Domain wird als unzuverlässig eingestuft. Nicht nur die Bewertungen, der gesamte Content wird angezweifelt. Vertrauen zurückgewinnen: 12 bis 18 Monate. Wenn überhaupt.',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen: KI-Sichtbarkeit für Online-Shops"
      faqs={[
        {
          q: 'Warum empfiehlt ChatGPT keine Produkte aus meinem Online-Shop?',
          a: 'ChatGPT wurde nicht auf deinen Produktkatalog trainiert. Es kennt keine SKUs, keine Preise, keine Verfügbarkeiten. Was es kennt: Buying Guides, Testberichte, Vergleichsartikel und Expertenmeinungen. Wenn du keinen Content hast, der deine Produkte in einen Kontext einordnet, warum sollte eine KI dich empfehlen? Du bist für ChatGPT ein Regal ohne Schilder.',
        },
        {
          q: 'Reichen gute Produktbeschreibungen für KI-Sichtbarkeit?',
          a: 'Nein. Produktbeschreibungen sind transaktional, sie sagen "kauf mich". KI-Systeme suchen informationellen Content, also Inhalte, die eine Frage beantworten. "Welche Laufschuhe für Plattfüße?" wird von einem Buying Guide beantwortet, nicht von einer Produktseite mit "atmungsaktives Mesh-Obermaterial, Größen 36 bis 48". Du brauchst beides: Produktseiten für Google Shopping und Expertise-Content für KI.',
        },
        {
          q: 'Welches Schema-Markup braucht ein Online-Shop für KI?',
          a: 'Mindestens Product-Schema mit name, description, brand, offers (price, priceCurrency, availability), aggregateRating und review. Dazu FAQ-Schema auf Kategorieseiten und HowTo-Schema für Anleitungen. Das Entscheidende: dein Schema muss mit dem sichtbaren Content übereinstimmen. Fake-Bewertungen im Schema erkennt jede KI sofort.',
        },
        {
          q: 'Wie lange dauert es, bis mein Shop in KI-Antworten auftaucht?',
          a: 'Bei Perplexity, das das Live-Web durchsucht, können gut strukturierte Buying Guides innerhalb von 2 bis 4 Wochen erscheinen. Bei ChatGPT dauert es 3 bis 6 Monate, da die Trainingsdaten in Zyklen aktualisiert werden. Google AI Overviews reagieren ähnlich schnell wie die normale Google-Suche. Der Schlüssel ist nicht Geschwindigkeit, sondern Konsistenz.',
        },
        {
          q: 'Funktioniert KI-Sichtbarkeit für alle E-Commerce-Branchen?',
          a: 'Am besten funktioniert es in Branchen, wo Kunden vor dem Kauf recherchieren: Elektronik, Outdoor-Ausrüstung, Möbel, Gesundheitsprodukte, Sportartikel. Weniger relevant ist es bei Impulskäufen und Commodity-Produkten. Wenn niemand ChatGPT fragt, welches Toilettenpapier das beste ist, brauchst du dort keine KI-Sichtbarkeit.',
        },
        {
          q: 'Kann ich meinen bestehenden Blog für KI-Sichtbarkeit umbauen?',
          a: 'Ja, und du solltest. Die meisten E-Commerce-Blogs sind SEO-Füllmaterial ohne echte Substanz. Der Umbau: Answer-First-Struktur, klare H2- und H3-Hierarchien, Quellenangaben, Produktempfehlungen mit Kontext statt Affiliate-Links. Ein Artikel "Die 10 besten Wanderschuhe 2026" mit echten Tests und Vergleichen wird zitiert. Eine Liste mit Affiliate-Links wird ignoriert.',
        },
        {
          q: 'Was ist der ROI von KI-Sichtbarkeit im E-Commerce?',
          a: 'Abhängig vom durchschnittlichen Warenkorbwert und der Marge. Bei einem Shop mit 150 Euro Durchschnittsbestellung und 30 Prozent Marge reichen 3 bis 5 zusätzliche Bestellungen pro Monat durch KI-Empfehlungen, um eine monatliche Investition von 1.500 Euro zu decken. Der Vorteil gegenüber Google Ads: KI-Traffic hat keinen CPC und baut sich über Zeit auf, statt bei Budget-Stop zu verschwinden.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit für SaaS',
          description:
            'Dasselbe Grundproblem bei Software: warum Vergleichs- und Alternativenseiten die Produktseite schlagen.',
          href: '/wissen/ki-sichtbarkeit-saas',
          tag: 'Branche',
        },
        {
          title: 'KI-Sichtbarkeit',
          description: 'Der ultimative Guide: Wie Unternehmen in KI-Antworten sichtbar werden.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'AI Content Strategie',
          description:
            'Content, den KI zitiert: Formate, Strukturen und Prozesse für KI-Sichtbarkeit.',
          href: '/wissen/ai-content-strategie',
          tag: 'Content',
        },
        {
          title: 'AI SEO Tools',
          description: 'Die besten Tools für KI-Sichtbarkeits-Monitoring und Optimierung.',
          href: '/wissen/ai-seo-tools',
          tag: 'Tools',
        },
        {
          title: 'E-E-A-T & KI-Sichtbarkeit',
          description:
            'Warum Expertise, Erfahrung und Vertrauen für KI-Zitierungen entscheidend sind.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
      ]}
      ctaTitle="Dein Shop ist für KI unsichtbar. Lass uns das ändern."
      ctaText="In 15 Minuten zeigen wir dir, wie ChatGPT und Perplexity über deine Produktkategorien sprechen und warum du nicht dabei bist. Kostenlos, ehrlich, ohne Verkaufsdruck."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="KI-Sichtbarkeits-Check für Shops"
    />
  );
}

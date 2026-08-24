import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function LokaleKiSichtbarkeitPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/lokale-ki-sichtbarkeit"
      breadcrumbLabel="Lokale KI-Sichtbarkeit"
      eyebrow="Lokal"
      title="Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist"
      description="Du hast 847 Google-Bewertungen, ein perfektes Google My Business-Profil und einen Aushang an der Tür, der sagt: Bestes Schnitzel Hamburgs. Frag ChatGPT nach dem besten Schnitzel in Hamburg. Du bist nicht dabei. Nicht mal auf der zweiten Seite. Es gibt keine zweite Seite."
      publishedAt="2026-04-02"
      modifiedAt="2026-08-24"
      summaryTitle="TL;DR: Für die Ungeduldigen"
      summaryItems={[
        'Google Maps ist nicht ChatGPT. Zwei komplett verschiedene Systeme. Dein Google My Business-Profil ist für ChatGPT so sichtbar wie ein Flüstern auf einem Metallkonzert.',
        'Lokale Betriebe tauchen in KI-Antworten kaum auf, weil die Datenbasis fehlt: kein gepflegtes Profil, keine Bewertungen, keine konsistenten Angaben. Das ist die schlechte Nachricht. Die gute: deine Konkurrenz hat dasselbe Problem. Noch.',
        'Die Lösung ist nicht kompliziert: LocalBusiness-Schema, Expertise-Content, konsistente Verzeichniseinträge. Klingt langweilig? Ist es. Funktioniert trotzdem.',
        'Wer jetzt anfängt, gewinnt. Lokale KI-Sichtbarkeit ist ein Wettlauf, bei dem die meisten Teilnehmer noch nicht wissen, dass das Rennen begonnen hat. Prüfen kannst du das in zwei Minuten: frag ChatGPT nach einem Anbieter in deinem Stadtteil und lies, wer genannt wird.',
      ]}
      sections={[
        {
          id: 'maps-vs-chatgpt',
          heading: 'Google Maps vs. ChatGPT: Warum lokales SEO nicht reicht',
          intro:
            'Seit 15 Jahren erzählen dir SEO-Agenturen, Google My Business sei das Wichtigste für lokale Unternehmen. Und sie hatten recht. Für Google. Aber ChatGPT ist nicht Google. Perplexity ist nicht Google. Claude ist nicht Google. Und die Leute, die "Bester Anwalt Hamburg" in ChatGPT eintippen statt in Google, werden jeden Monat mehr.',
          paragraphs: [
            'Das Problem: ChatGPT hat keinen Zugriff auf Google My Business. Es kann dein Profil nicht sehen. Nicht deine Öffnungszeiten, nicht deine Bewertungen, nicht dein schönes Titelbild mit dem Sonnenuntergang. Für ChatGPT existiert dein GMB-Profil schlicht nicht. So, als hättest du einen Laden ohne Adresse.',
          ],
          table: {
            headers: ['Kriterium', 'Google Maps / Local Pack', 'ChatGPT / Perplexity'],
            rows: [
              ['Datenquelle', 'Google My Business-Profil', 'Web-Content, Verzeichnisse, Bewertungsportale'],
              ['Ranking-Signal', 'Nähe, Relevanz, Prominenz', 'Expertise, Quellenqualität, Konsistenz'],
              ['Bewertungen', 'Google-Bewertungen dominant', 'Alle Plattformen: Google, Trustpilot, Yelp, Jameda'],
              ['Content', 'GMB-Posts, Fotos, Q&A', 'Website-Content, Blog, Fachartikel'],
              ['Schema-Markup', 'Hilft indirekt', 'Essentiell (LocalBusiness-Schema)'],
              ['Aktualisierung', 'Echtzeit', 'Verzögert, Wochen bis Monate'],
              ['Wettbewerb', 'Extrem hoch, jeder macht es', 'Fast keiner macht es, noch nicht'],
            ],
            caption:
              'Die letzte Zeile ist die wichtigste. Bei Google Maps kämpfst du gegen jeden Wettbewerber in deiner Stadt.',
            note:
              'Bei KI-Sichtbarkeit bist du in den meisten lokalen Branchen einer von vielleicht drei Anbietern, die überhaupt optimieren. Das ist der First-Mover-Vorteil, von dem BWL-Professoren immer reden. Nur eben real.',
          },
        },
        {
          id: 'warum-unsichtbar',
          heading: 'Warum 95% der lokalen Unternehmen für KI unsichtbar sind',
          intro:
            'Lass mich raten: deine Website hat eine Startseite mit einem großen Foto, eine Über-uns-Seite mit Gründungsgeschichte, eine Leistungsseite mit Aufzählungspunkten und ein Kontaktformular. Das war es. Vielleicht noch ein Blog mit dem letzten Eintrag von 2023: "Frohe Weihnachten an alle Kunden!"',
          paragraphs: [
            'Für eine KI gibt es hier nichts zu holen. Keine Expertise. Keine Antworten auf Fragen. Keine Einordnung. Kein Grund, dich als Quelle zu zitieren. Deine Website ist ein digitales Schaufenster. KI braucht eine Bibliothek.',
          ],
          stat: 'Eine Visitenkarten-Website mit drei Seiten trägt für eine KI weniger Information als ein Telefonbucheintrag aus 1997.',
        },
        {
          id: 'sechs-gruende',
          heading: 'Die 6 Gründe, warum lokale Unternehmen unsichtbar bleiben',
          intro:
            'Sechs Muster, die in fast jedem lokalen Projekt auftreten. Die ersten drei sind technisch, die letzten drei sind Reichweite.',
          bullets: [
            'Keine Website oder nur eine Visitenkarten-Website: drei Seiten, kein Blog, kein Schema-Markup. Für KI ist das weniger Informationsgehalt als ein Telefonbucheintrag aus 1997.',
            'Kein zitierbarer Content. Die Frage, welcher Klempner in Hamburg-Eimsbüttel empfehlenswert ist, kann nur beantwortet werden, wenn es zitierbaren Content gibt. Nicht deine Leistungsseite. Expertise-Content.',
            'Kein LocalBusiness-Schema. Ohne strukturierte Daten weiß die KI nicht einmal, was du bist, wo du bist und was du anbietest. Du bist ein Datenloch.',
            'Inkonsistente NAP-Daten. Dein Name, deine Adresse und Telefonnummer sind auf jeder Plattform anders geschrieben. Für KI ist das nicht ein Unternehmen mit Tippfehlern, sondern drei verschiedene Unternehmen.',
            'Keine externe Präsenz. Du bist nur auf deiner eigenen Website und bei Google. Keine Verzeichniseinträge, keine Branchenportale, keine Erwähnungen in lokalen Medien. KI braucht mehrere Quellen zur Validierung.',
            'Bewertungen nur auf Google. ChatGPT sieht deine Google-Bewertungen nicht direkt. Es sieht Bewertungen auf Trustpilot, Yelp, Jameda und Anwalt.de, also Plattformen, die es crawlen kann.',
          ],
        },
        {
          id: 'hamburg-check',
          heading: 'Hamburg-Reality-Check: Wer ist sichtbar, wer nicht?',
          intro:
            'Wir haben es getestet. Zehn typische lokale Suchanfragen bei ChatGPT und Perplexity, alle mit Hamburg-Bezug. Das Ergebnis ist ernüchternd, aber lehrreich.',
          chart: {
            variant: 'row',
            title: 'Namentlich genannte Anbieter pro Testfrage',
            axis: { title: 'Nennungen' },
            highlight: 'peak',
            points: [
              { label: 'Bester Italiener in Hamburg', short: 'Italiener', value: 5 },
              { label: 'Guter Steuerberater Hamburg Altona', short: 'Steuerberater', value: 1 },
              { label: 'Notfall-Klempner Hamburg', short: 'Klempner', value: 0 },
            ],
            table: { label: 'Werte anzeigen', heads: ['Testfrage', 'Namentliche Nennungen'] },
            caption:
              'Drei der zehn Abfragen im Detail, gestellt an ChatGPT und Perplexity. Je weniger zitierfähigen Content eine Branche im Web hat, desto weniger Namen nennt die KI. Bei den Klempnern nennt sie keinen einzigen.',
          },
          cards: [
            {
              title: '"Bester Italiener in Hamburg"',
              text: 'ChatGPT empfiehlt 5 Restaurants. Keins davon hat den höchsten Google-Bewertungsdurchschnitt. Alle 5 haben eines gemeinsam: Erwähnungen in Hamburger Gastro-Magazinen, Blogs und Bewertungsportalen außerhalb von Google. Die KI zitiert, was sie im Web findet, nicht was bei Google Maps steht. Lesson learned: lokale Medienerwähnungen und Branchenportale sind für KI-Sichtbarkeit wichtiger als die Google-Bewertung.',
            },
            {
              title: '"Guter Steuerberater Hamburg Altona"',
              text: 'ChatGPT nennt genau einen Steuerberater beim Namen. Alle anderen werden als "es gibt mehrere gute Optionen" zusammengefasst. Der eine, der genannt wird, hat einen Blog mit Fachartikeln zu Steuerthemen für Hamburger Unternehmen: spezifischer, lokaler Expertise-Content, nicht "Wir sind Ihr Steuerberater in Hamburg". Lesson learned: ein Artikel über Gewerbesteuer in Hamburg schlägt jede GMB-Optimierung.',
            },
            {
              title: '"Notfall-Klempner Hamburg"',
              text: 'ChatGPT empfiehlt keinen einzigen konkreten Klempner. Stattdessen allgemeine Tipps und den Verweis auf lokale Handwerkerportale. Warum? Kein Klempner in Hamburg hat zitierbaren Content. Keine Website mit Expertise, keine Fachbeiträge, nichts. Die gesamte Branche ist für KI ein schwarzes Loch. Lesson learned: in manchen Branchen ist der Wettbewerb um KI-Sichtbarkeit exakt null. Wer als Erster anfängt, dominiert.',
            },
          ],
        },
        {
          id: 'branchen',
          heading: 'Lokale KI-Sichtbarkeit nach Branche: Was funktioniert wo?',
          intro:
            'Vier lokale Branchen, vier unterschiedliche Startpositionen. Der Hebel ist jedes Mal Content, der eine Frage beantwortet, plus das passende Schema.',
          steps: [
            {
              title: 'Restaurants & Gastronomie',
              text: 'Dein Menü als PDF auf der Website ist das gastronomische Äquivalent einer Faxnachricht. KI kann kein PDF lesen. Was du brauchst:',
              bullets: [
                'Speisekarte als HTML auf der Website, nicht als PDF oder Bild.',
                'Restaurant-Schema mit servesCuisine, priceRange und menu.',
                'Content über Küche, Konzept, Herkunft der Zutaten, Chef-Philosophie.',
                'Präsenz auf Gastro-Portalen: Falstaff, The Fork, lokale Food-Blogs.',
              ],
            },
            {
              title: 'Anwälte & Steuerberater',
              text: 'Deine Website sagt, ihr beraten kompetent und individuell. Das sagt jede Kanzlei. Weißt du, was ChatGPT damit anfängt? Nichts. Was stattdessen funktioniert:',
              bullets: [
                'Fachartikel zu lokalen Rechtsthemen, etwa "Mietrecht Hamburg: Was Vermieter 2026 wissen müssen".',
                'LegalService oder AccountingService Schema mit Spezialisierungen.',
                'FAQ-Seite mit echten Mandantenfragen und detaillierten Antworten.',
                'Profile auf Anwalt.de, JUVE und steuerberater.de mit konsistenten Daten.',
              ],
            },
            {
              title: 'Handwerker & Dienstleister',
              text: 'Dein Installateur-Betrieb hat eine Website von 2018 mit dem Bild eines lächelnden Handwerkers mit Daumen nach oben. Dieses Stock-Foto hat ChatGPT circa 47.000 Mal gesehen. Es macht keinen Eindruck. Was stattdessen funktioniert:',
              bullets: [
                'Ratgeber-Content, etwa "Heizung tauschen Hamburg: Förderung, Kosten, Ablauf 2026".',
                'HomeAndConstructionBusiness Schema mit areaServed für Hamburg und Stadtteile.',
                'Echte Projektbeispiele mit Vorher und Nachher, Kosten und Zeitrahmen.',
                'Profile auf MyHammer, Check24 und bei der Handwerkskammer Hamburg.',
              ],
            },
            {
              title: 'Ärzte & Therapeuten',
              text: '"Wir nehmen uns Zeit für Sie" steht auf jeder Arztpraxis-Website. Das ist so differenzierend wie "Wir haben auch Türen". Was KI braucht:',
              bullets: [
                'Fachartikel zu Behandlungsmethoden mit medizinischen Quellen.',
                'MedicalBusiness oder Physician Schema mit medicalSpecialty.',
                'Patienteninformationen, die echte Fragen beantworten, nicht Marketing-Floskeln.',
                'Profile auf Jameda, Doctolib und Sanego mit vollständigen, aktuellen Informationen.',
              ],
            },
          ],
        },
        {
          id: 'sieben-schritte',
          heading: 'Lokale KI-Sichtbarkeit aufbauen: Der 7-Schritte-Plan',
          intro:
            'Kein Marketing-Blabla. Konkrete Schritte, die du diese Woche starten kannst. Auch wenn du nicht weißt, was Schema-Markup ist. Besonders dann.',
          steps: [
            {
              title: 'KI-Sichtbarkeits-Check',
              text: 'Frag ChatGPT, Perplexity und Google AI nach deiner Branche plus Stadt. Dokumentiere: wirst du genannt? Welche Wettbewerber werden genannt? Welche Quellen werden zitiert? Das dauert 30 Minuten und gibt dir ein brutales, aber ehrliches Bild.',
            },
            {
              title: 'LocalBusiness-Schema implementieren',
              text: 'JSON-LD auf jeder Seite mit name, address (streetAddress, postalCode, addressLocality), telephone, openingHours, geo mit Breite und Länge, areaServed, priceRange und sameAs mit Links zu allen Profilen. Das ist die absolute Basis. Ohne das bist du für KI nicht mal eine Adresse.',
            },
            {
              title: 'NAP-Konsistenz herstellen',
              text: 'Name, Adresse, Telefonnummer: überall identisch. Nicht "Müller & Söhne GmbH" auf der Website, "Müller und Söhne" bei Google und "Fa. Müller" auf Yelp. Für KI sind das drei verschiedene Unternehmen. Prüfe alle Verzeichnisse, Portale und Social-Media-Profile. Ja, das ist mühsam. Ja, es ist notwendig.',
            },
            {
              title: 'Expertise-Content mit lokalem Bezug erstellen',
              text: 'Mindestens 5 Fachartikel, die lokale Fragen beantworten. Nicht "Wir sind toll", sondern "Wasserschaden in Hamburger Altbauten: Was Mieter wissen müssen". Der Artikel muss eine Frage beantworten, die Leute tatsächlich bei ChatGPT stellen. Answer-First-Struktur, Quellenangaben, echtes Fachwissen.',
            },
            {
              title: 'Verzeichnispräsenz ausbauen',
              text: 'Branchenspezifische Portale, lokale Verzeichnisse, Bewertungsplattformen. Nicht nur vorhanden sein, sondern mit vollständigen Profilen: Beschreibung, Fotos, Öffnungszeiten, Leistungen. Diese Einträge sind die externen Quellen, über die KI dich validiert. Mehr Quellen bedeuten mehr Vertrauen und häufigere Empfehlungen.',
            },
            {
              title: 'Bewertungen strategisch managen',
              text: 'Aktiv um ausführliche Bewertungen bitten, nicht nur auf Google, sondern auch auf Branchenportalen und Trustpilot. Der Text der Bewertung ist wichtiger als die Sterne. "Hat mein Dachproblem in Hamburg-Eppendorf innerhalb von 2 Tagen gelöst, faire Preise" ist für KI Gold wert. "Super, 5 Sterne" ist wertlos.',
            },
            {
              title: 'Monatliches Monitoring',
              text: 'Jeden Monat: 10 relevante Fragen bei ChatGPT, Perplexity und Google AI stellen. Wirst du genannt? Was hat sich geändert? Welche neuen Wettbewerber tauchen auf? Content aktualisieren, Verzeichnisse pflegen, Bewertungen fördern. Klingt nach Aufwand? Ist es. Aber weniger als 3.000 Euro pro Monat für Google Ads, die sofort aufhören zu wirken, wenn du nicht mehr zahlst.',
            },
          ],
        },
        {
          id: 'fehler',
          heading: 'Die 5 größten Fehler lokaler Unternehmen bei KI-Sichtbarkeit',
          intro: 'Fünf Sätze, die ich in jedem zweiten Erstgespräch höre. Alle fünf kosten Sichtbarkeit.',
          cards: [
            {
              title: '"Google My Business reicht doch"',
              text: 'GMB ist für Google Maps. Punkt. ChatGPT kann dein GMB-Profil nicht sehen. Perplexity kann es nicht sehen. Claude kann es nicht sehen. Dein perfektes GMB-Profil ist für KI-Systeme so nützlich wie ein Regenschirm unter Wasser: technisch vorhanden, praktisch wirkungslos.',
            },
            {
              title: '"Wir haben doch Bewertungen"',
              text: 'Google-Bewertungen allein reichen nicht. KI-Systeme aggregieren über Dutzende Quellen. Wenn du nur auf Google bewertet bist, fehlst du in der KI-Datenbasis. Und eine Bewertung wie "Toll! 5 Sterne!" hat für KI null Informationsgehalt. Detaillierte Bewertungen mit Kontext sind das, was zählt.',
            },
            {
              title: '"Eine Website ist genug"',
              text: 'Deine Website mit 3 Seiten und einem Stock-Foto-Karussell ist nicht genug. Nicht für Google und schon gar nicht für KI. Du brauchst Content. Echten Content. Nicht eine Über-uns-Seite mit deiner Gründungsgeschichte und ein Kontaktformular. Fachartikel. Ratgeber. FAQ-Seiten. Dinge, die Fragen beantworten.',
            },
            {
              title: '"KI ist nichts für lokale Unternehmen"',
              text: 'Jeder vierte Deutsche nutzt bereits KI-Assistenten für lokale Empfehlungen, und die Zahl wächst schnell. "KI ist nichts für uns" ist das neue "Internet ist nichts für uns" von 2005. Nur schneller. Wer 2005 keine Website hatte, hat 10 Jahre aufgeholt. Wer 2026 keine KI-Sichtbarkeit hat, wird weniger Zeit zum Aufholen bekommen.',
            },
            {
              title: '"Wir warten mal ab"',
              text: 'Abwarten ist eine Strategie. Eine schlechte. Jeder Monat, den du wartest, ist ein Monat, in dem dein Wettbewerber anfangen könnte. Lokale KI-Sichtbarkeit hat einen massiven First-Mover-Vorteil: wer zuerst als zuverlässige Quelle etabliert ist, wird bevorzugt zitiert. Der zweite Platz bekommt Krümel.',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen: Lokale KI-Sichtbarkeit"
      faqs={[
        {
          q: 'Reicht Google My Business für KI-Sichtbarkeit?',
          a: 'Nein. Google My Business ist für Google Maps und die lokale Suche. ChatGPT, Perplexity und Claude haben keinen Zugriff auf Google My Business-Daten. Diese Systeme arbeiten mit Web-Content, Verzeichniseinträgen, Bewertungsportalen und strukturierten Daten auf deiner Website. Dein GMB-Profil kann noch so perfekt sein, wenn deine Website nichts Zitierbares bietet, existierst du für KI nicht.',
        },
        {
          q: 'Wie finde ich heraus, ob mein lokales Unternehmen in ChatGPT sichtbar ist?',
          a: 'Frag ChatGPT direkt: "Welcher [deine Branche] in [deine Stadt] ist empfehlenswert?" und "Kannst du [dein Firmenname] in [deine Stadt] empfehlen?". Teste verschiedene Formulierungen. Mach das Gleiche bei Perplexity und Google AI. Dokumentiere die Ergebnisse. Wenn du nirgends auftauchst, weißt du, wo du stehst: am Anfang.',
        },
        {
          q: 'Welche lokalen Unternehmen profitieren am meisten von KI-Sichtbarkeit?',
          a: 'Unternehmen, bei denen Kunden vor der Kontaktaufnahme recherchieren: Anwälte, Ärzte, Handwerker, Restaurants, Immobilienmakler, Steuerberater, Architekten. Weniger relevant ist es für Unternehmen mit reiner Laufkundschaft ohne Online-Recherche. Grundregel: wenn deine Kunden googeln, bevor sie anrufen, werden sie bald ChatGPT fragen, bevor sie anrufen.',
        },
        {
          q: 'Wie wichtig sind Online-Bewertungen für KI-Sichtbarkeit?',
          a: 'Sehr wichtig, aber anders als du denkst. KI-Systeme lesen nicht nur die Sternebewertung, sondern den Text der Bewertungen. Detaillierte Bewertungen auf Google, Trustpilot, Yelp und Branchenportalen liefern KI-Systemen Kontext über deine Stärken, Spezialisierungen und Kundenzufriedenheit. 50 echte, ausführliche Bewertungen sind mehr wert als 500 Fünf-Sterne-Bewertungen ohne Text.',
        },
        {
          q: 'Kann ich lokale KI-Sichtbarkeit selbst aufbauen?',
          a: 'Die Grundlagen ja: Website mit LocalBusiness-Schema, konsistente NAP-Daten, Expertise-Content zu deinem Fachgebiet, Verzeichniseinträge. Der Aufwand liegt bei 20 bis 40 Stunden für die Ersteinrichtung und 5 bis 10 Stunden monatlich für Content und Monitoring. Eine Agentur bringt Systematik und Erfahrung, aber die technische Basis kannst du mit diesem Guide selbst umsetzen.',
        },
        {
          q: 'Wie lange dauert es, bis mein lokales Unternehmen in KI-Antworten erscheint?',
          a: 'Bei Perplexity, das das Live-Web durchsucht, können Ergebnisse nach 2 bis 4 Wochen sichtbar werden. Bei ChatGPT dauert es 3 bis 6 Monate, da die Trainingsdaten in Zyklen aktualisiert werden. Google AI Overviews reagieren schneller, typischerweise innerhalb weniger Wochen. Der Schlüssel ist Konsistenz: eine einmalige Optimierung reicht nicht. Du brauchst regelmäßige Signale.',
        },
        {
          q: 'Ist lokale KI-Sichtbarkeit nur für Hamburg relevant?',
          a: 'Nein. Das Prinzip funktioniert für jede Stadt. Wir nutzen Hamburg als Beispiel, weil wir hier arbeiten und die lokale Landschaft kennen. Die Strategien (LocalBusiness-Schema, lokaler Expertise-Content, Verzeichnispräsenz, Bewertungsmanagement) funktionieren in München, Berlin, Köln oder jeder anderen deutschen Stadt genauso.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit für Logistik',
          description:
            'Die lokale Branche mit dem größten Abstand zwischen Marktbedeutung und Sichtbarkeit.',
          href: '/wissen/ki-sichtbarkeit-logistik',
          tag: 'Branche',
        },
        {
          title: 'KI-Sichtbarkeit',
          description: 'Der ultimative Guide: Wie Unternehmen in KI-Antworten sichtbar werden.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'KI-Markenwahrnehmung',
          description: 'Wie KI-Systeme über deine Marke sprechen und wie du das beeinflusst.',
          href: '/wissen/ki-markenwahrnehmung',
          tag: 'Marke',
        },
        {
          title: 'E-E-A-T & KI-Sichtbarkeit',
          description:
            'Warum Expertise, Erfahrung und Vertrauen für KI-Zitierungen entscheidend sind.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPT Quellen auswählt und wie du dort sichtbar wirst.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'Plattform',
        },
      ]}
      ctaTitle="Dein lokales Unternehmen ist für KI unsichtbar. Das muss nicht so bleiben."
      ctaText="In 15 Minuten zeigen wir dir, was ChatGPT über deine Branche in deiner Stadt sagt und warum du nicht dabei bist. Kostenlos, ehrlich, ohne Verpflichtung."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Lokalen KI-Check starten"
    />
  );
}

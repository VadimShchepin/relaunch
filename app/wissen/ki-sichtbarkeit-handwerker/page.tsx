import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitHandwerkerPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-handwerker"
      breadcrumbLabel="KI-Sichtbarkeit für Handwerker"
      eyebrow="Branche"
      title="KI-Sichtbarkeit für Handwerker: Wenn Kunden die KI nach dem besten Betrieb fragen"
      description="„Welcher Elektriker in Hamburg-Eimsbüttel ist zuverlässig?“ Diese Frage wird heute in ChatGPT gestellt, nicht bei den Gelben Seiten. Die KI empfiehlt zwei bis drei Betriebe. Dieser Guide zeigt am echten Fall eines Hamburger Betriebs, wie deiner dazugehört."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryTitle="Zusammenfassung"
      summaryItems={[
        'Echter Fall: Unser Kunde Blitz Hamburg (5,0 Sterne, 35 Bewertungen) wird von ChatGPT empfohlen, plus 55 Klicks (+55 %) und 6.660 Impressionen (+61 %) in 30 Tagen.',
        'ChatGPT empfiehlt pro Anfrage nur zwei bis drei Betriebe. Der Rest existiert für den Kunden nicht.',
        'Der häufigste Grund, warum die KI dich nicht empfiehlt: kein gepflegtes Google Business Profil und keine gesammelten Bewertungen.',
        'Lead-Portale wie MyHammer und 11880 funktionieren wie eine Auktion. Du zahlst pro Kontakt, auch ohne Auftrag. Die KI-Empfehlung kostet keine Lead-Gebühr.',
        'KI-Anfragen sind heute noch ein kleiner Kanal, konvertieren aber mit 20 bis 40 %, weil der Kunde schon eine Empfehlung in der Hand hat.',
      ]}
      sections={[
        {
          id: 'echtes-beispiel',
          heading: 'Echtes Beispiel: Wie ein Hamburger Betrieb in ChatGPT landet',
          intro:
            'Statt Theorie ein realer Fall aus unserer Arbeit. Blitz Hamburg ist ein Betrieb für Entrümpelung, Sanierung und Haushaltsauflösung. Nach dem Relaunch der Website und der konsequenten Pflege von Google Business Profil und Bewertungen wird der Betrieb heute von ChatGPT genannt, wenn jemand nach einer zuverlässigen Firma in Hamburg fragt.',
          stat: '5,0 Sterne aus 35 Google-Bewertungen, 55 Klicks (+55 %) und 6.660 Impressionen (+61 %) in 30 Tagen. Das ist die Datenbasis, auf die ChatGPT zugreift, wenn jemand nach einer zuverlässigen Entrümpelungsfirma in Hamburg fragt.',
          paragraphs: [
            'ChatGPT beantwortet die Frage nach einer zuverlässigen Entrümpelungsfirma in Hamburg mit einer kurzen Liste konkreter Betriebe. Genau diese zwei bis drei Plätze entscheiden, wen der Kunde anruft. Das Fundament dafür ist ein vollständiges Google Business Profil mit konsistenter Adresse, gepflegten Öffnungszeiten und echten Bewertungen. Ohne diese Datenbasis hat die KI nichts, worauf sie eine Empfehlung stützt.',
            'In der Google Search Console zeigen die optimierten Leistungsseiten dieselbe Richtung: 55 Klicks und 6.660 Impressionen in 30 Tagen, beide von einem sehr niedrigen Ausgangswert kommend. Was am Ende aber zählt, sind Kontaktaktionen, und die werden getrennt gemessen.',
          ],
          chart: {
            variant: 'row',
            title: 'Kontaktaktionen in 30 Tagen, nach Kanal',
            axis: { title: 'Ereignisse' },
            highlight: 'peak',
            points: [
              { label: 'Anrufe über die Website', value: 20, note: '36 % aller Kontaktaktionen' },
              { label: 'Klicks auf die Google-Bewertungen', value: 14, note: '25 %' },
              { label: 'WhatsApp-Kontakte', value: 9, note: '16 %' },
              { label: 'Anfragen über den Preisrechner', value: 4, note: '7 %' },
              { label: 'Übrige Kontaktwege', value: 8, note: '15 %' },
            ],
            stats: [
              { label: 'Erfasste Aktionen', value: '55 in 30 Tagen' },
              { label: 'Stärkster Kanal', value: 'Telefon, 36 %' },
              { label: 'Bewertungsprofil', value: '5,0 aus 35' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Kanal', 'Ereignisse'], sum: ['Summe', '55'] },
            caption:
              'Eigene Messung mit Umami auf blitz-hamburg.de, 30 Tage. Ein Viertel aller Kontaktaktionen sind Klicks auf die Google-Bewertungen: dieselbe Quelle, aus der die KI ihre Empfehlung ableitet.',
          },
          warning: {
            title: 'Ehrlich eingeordnet',
            text:
              'Die KI-Empfehlung kam nicht über Nacht. Sie stellte sich erst einige Monate nach dem Relaunch ein, als Website, Bewertungen und lokale Signale zusammenpassten. Der Anteil der Anfragen, die heute direkt aus einer KI-Antwort stammen, ist noch klein. Aber genau diese Anfragen konvertieren am besten, weil der Kunde schon mit einer Empfehlung kommt.',
          },
        },
        {
          id: 'das-problem',
          heading: 'Das Problem: Kunden fragen ChatGPT statt im Branchenbuch zu suchen',
          intro:
            '„Welcher Elektriker in Hamburg-Eimsbüttel ist zuverlässig?“ „Empfiehl mir einen guten Maler in Ottensen.“ „Wer macht Badsanierung in Hamburg-Nord?“ Diese Fragen werden heute in ChatGPT getippt, nicht bei den Gelben Seiten und nicht bei MyHammer.',
          paragraphs: [
            'Die Nutzerzahlen verschieben sich massiv. OpenAI meldete im Februar 2025 über 400 Millionen wöchentliche ChatGPT-Nutzer, ein Plus von 33 % gegenüber Dezember 2024. Parallel zeigt der Bitkom, dass die Hälfte der deutschen Internetnutzer zumindest gelegentlich KI-Chats statt klassischer Suchmaschinen verwendet.',
          ],
          chart: {
            variant: 'row',
            title: 'KI-Nutzung in Deutschland, Anteil der Internetnutzer',
            axis: { unit: ' %', title: 'Anteil' },
            points: [
              {
                label: 'Nutzt KI-Chats statt klassischer Suche, mindestens gelegentlich',
                value: 50,
                note: 'Bitkom, November 2025',
              },
              { label: 'Nutzt KI mindestens einmal pro Woche', value: 34, note: 'Bitkom' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Kennzahl', 'Anteil'] },
            caption:
              'Zwei Bitkom-Befragungen zur Verschiebung der Suche in Deutschland. Für einen lokalen Handwerksbetrieb heißt das: jeder zweite potenzielle Kunde fragt inzwischen zumindest gelegentlich eine KI statt eine Suchmaschine.',
          },
          quote:
            'Dein Betrieb lebt von Empfehlungen, aber die KI kennt dich nicht. ChatGPT empfiehlt pro Anfrage nur zwei bis drei Betriebe. Der Rest wird nicht erwähnt. Für den Kunden existierst du schlicht nicht.',
          note:
            'Handwerk hat schon immer von Empfehlungen gelebt: vom Nachbarn, vom Kollegen, vom Schwiegervater. Jetzt empfiehlt die KI. Und sie empfiehlt nicht nach Bauchgefühl, sondern nach Daten, die du beeinflussen kannst.',
        },
        {
          id: 'haeufigster-grund',
          heading: 'Der häufigste Grund, warum die KI dich nicht empfiehlt',
          intro:
            'Aus der Arbeit mit Handwerksbetrieben gibt es eine Antwort, die fast immer stimmt: kein gepflegtes Google Business Profil und keine gesammelten Bewertungen. Das ist der eine Fehler, der die meisten Betriebe für die KI unsichtbar macht.',
          paragraphs: [
            'Der Grund ist technisch simpel. KI-Systeme empfehlen einen lokalen Betrieb nur, wenn sie eine belastbare Datenbasis finden. Das Google Business Profil mit echten, aktuellen Bewertungen ist diese Basis. Fehlt sie, hat die KI nichts in der Hand und nennt stattdessen den Wettbewerber, der seine Bewertungen pflegt.',
          ],
          table: {
            headers: ['Rang', 'Fehler', 'Aufwand zur Behebung'],
            rows: [
              [
                '1',
                'Kein oder ungepflegtes Google Business Profil, kaum Bewertungen',
                'Wenige Tage, mit Abstand der wirksamste Hebel',
              ],
              [
                '2',
                'Eine einzige Website-Seite für alle Leistungen statt eigener Leistungsseiten',
                'Zwei bis sechs Wochen, je nach Zahl der Gewerke',
              ],
              [
                '3',
                'Inkonsistente Adress- und Telefondaten (NAP) über Verzeichnisse hinweg',
                'Ein Tag Recherche, dann laufende Pflege',
              ],
              [
                '4',
                'Kein Schema.org-Markup, sodass die KI Adresse und Leistungen schlecht zuordnet',
                'Wenige Stunden, technisch simpel',
              ],
            ],
            caption:
              'Die typische Reihenfolge der Fehler, sortiert nach Häufigkeit in unseren Erstgesprächen mit Handwerksbetrieben.',
            note:
              'Bei Blitz Hamburg waren 35 Bewertungen mit 5,0 Sternen das Fundament, auf dem alles andere aufbaute.',
          },
        },
        {
          id: 'lead-auktion',
          heading: 'MyHammer, 11880 und die Lead-Auktion',
          intro:
            'Lead-Portale wie MyHammer und 11880 funktionieren wie eine Auktion. Die Registrierung ist kostenlos, Geld kostet jeder Kundenkontakt. Bei MyHammer fallen Gebühren nur für einen bestätigten Kontakt an. Der Preis pro Lead ist nicht öffentlich gelistet, sondern wird dynamisch nach Gewerk, Auftragswert, Region und Wettbewerb berechnet. MyHammer Plus ist das kostenpflichtige Premium-Programm darüber hinaus.',
          paragraphs: [
            'In der Praxis heißt das: Mehrere Betriebe bewerben sich um dieselbe Anfrage, du zahlst für den Kontakt, und ob du den Auftrag am Ende bekommst, steht auf einem anderen Blatt. Eine KI-Empfehlung kehrt diese Logik um. Es gibt keine Lead-Gebühr, keinen Bieterkampf, und der Kunde kommt mit einer Empfehlung statt mit drei Vergleichsangeboten.',
          ],
          table: {
            headers: ['Kriterium', 'Lead-Portal (MyHammer, 11880)', 'KI-Empfehlung'],
            rows: [
              ['Kosten', 'Gebühr pro bestätigtem Kontakt, auch ohne Auftrag', 'Keine Lead-Gebühr'],
              [
                'Wettbewerb',
                'Mehrere Betriebe bieten auf dieselbe Anfrage',
                'KI nennt nur zwei bis drei Betriebe, kein Bieterkampf',
              ],
              ['Preistransparenz', 'Keine öffentliche Preisliste, dynamisch je Lead', 'Entfällt'],
              ['Vertrauen', 'Anzeige im Auktionsumfeld', 'Persönlich wirkende Empfehlung der KI'],
              [
                'Kundenbeziehung',
                'Plattform sitzt zwischen dir und dem Kunden',
                'Kunde kommt direkt zu dir',
              ],
            ],
            caption:
              'Die entscheidende Zeile ist Kosten. Beim Portal zahlst du für den Kontakt, bei der KI-Empfehlung für die Arbeit an deiner Sichtbarkeit, und die bleibt dir.',
          },
        },
        {
          id: 'beispiel-prompts',
          heading: 'Was Kunden tippen: Beispiel-Prompts pro Gewerk',
          intro:
            'Kunden formulieren zwei Arten von Anfragen: dringende Notfälle und geplante Projekte. Beide brauchen unterschiedliche Inhalte auf deiner Website. Eine Notdienst-Seite gewinnt die Notfall-Anfrage, eine Leistungs- und Preisseite die geplante Anfrage.',
          table: {
            headers: ['Gewerk', 'Notfall-Anfrage', 'Geplante Anfrage'],
            rows: [
              ['SHK', '„Notdienst Heizung Hamburg Sonntag“', '„Badsanierung Hamburg Empfehlung“'],
              [
                'Elektriker',
                '„Stromausfall Elektriker Notdienst Hamburg“',
                '„Wallbox Installation Hamburg Kosten“',
              ],
              [
                'Dachdecker',
                '„Dachdecker Notdienst Sturmschaden Hamburg“',
                '„Dachsanierung Hamburg Förderung“',
              ],
              [
                'Maler',
                '„Wasserschaden Wand streichen Hamburg“',
                '„3-Zimmer-Wohnung streichen Hamburg Preis“',
              ],
              ['Tischler', 'kaum Notfälle', '„Einbauschrank nach Maß Hamburg“'],
            ],
            caption:
              'Jede dieser Anfragen ist ein eigener Inhalt auf deiner Website. Wer für beide Spalten eine passende Seite hat, deckt sowohl die dringenden als auch die hochwertigen Aufträge ab.',
          },
        },
        {
          id: 'riesenvorteil',
          heading: 'Warum KI-Sichtbarkeit für Handwerker ein Riesenvorteil ist',
          intro:
            'Die meisten Branchen kämpfen um KI-Sichtbarkeit. Im Handwerk ist die Ausgangslage grundlegend anders, und das ist deine Chance.',
          cards: [
            {
              title: 'Kaum KI-Konkurrenz online',
              text: 'Viele Handwerksbetriebe haben Websites aus 2015: eine Seite, keine Struktur, kaum Texte. Für KI-Systeme gibt es fast nichts auszuwerten. Wer jetzt optimiert, hat das Feld praktisch für sich allein.',
            },
            {
              title: 'Schlechte Websites als Normalzustand',
              text: 'Eine einzelne Seite mit „Über uns“, ein paar Leistungsstichworten und einer Telefonnummer ist der Standard im Handwerk. Die Messlatte für KI-Sichtbarkeit ist niedrig, schon Grundlagen machen den Unterschied.',
            },
            {
              title: 'Enormer First-Mover-Advantage',
              text: 'Wer als erster SHK-Betrieb in Hamburg-Wandsbek eine ordentliche Website mit Leistungsseiten, Bewertungen und Schema-Markup hat, dominiert die KI-Empfehlungen im gesamten Stadtteil. Die Konkurrenz schläft noch.',
            },
            {
              title: 'Lokale Suche und KI passen perfekt zusammen',
              text: 'Handwerk ist per Definition lokal, und lokale Empfehlungsfragen sind einer der stärksten KI-Anwendungsfälle. „Welcher Dachdecker in meiner Nähe?“ ist die ideale KI-Frage und dein idealer Kundenkanal.',
            },
          ],
        },
        {
          id: 'faktoren',
          heading: '5 Faktoren, die KI-Empfehlungen für Handwerker beeinflussen',
          intro:
            'KI-Systeme bewerten deinen Betrieb nicht nach Bauchgefühl, sondern nach konkreten Signalen. Für Handwerksbetriebe sind diese fünf entscheidend.',
          steps: [
            {
              title: 'Google-Bewertungen: Menge, Qualität und Antworten',
              text: 'Dein Wettbewerber hat 50 Google-Bewertungen, du 3. Wer wird empfohlen? Die KI wertet nicht nur die Sterne aus, sondern auch den Inhalt der Bewertungen und ob du als Betrieb auf Rezensionen antwortest. Ein Betrieb mit 30 Bewertungen und durchdachten Antworten schlägt einen mit 80 unbeantworteten. Blitz Hamburg startet hier mit 5,0 Sternen aus 35 Bewertungen.',
            },
            {
              title: 'Website-Qualität: Leistungsseiten statt einer Seite für alles',
              text: 'Eine Website mit einer einzelnen Seite, die alle Leistungen auflistet, gibt der KI nichts zum Arbeiten. Du brauchst eigene Seiten für jede Leistung: Badsanierung, Heizungsinstallation, Notdienst. Jede Seite beantwortet spezifische Fragen, die Kunden an die KI stellen.',
            },
            {
              title: 'Lokale Signale: NAP-Konsistenz und Google Business',
              text: 'Name, Adresse, Telefonnummer (NAP) müssen auf deiner Website, in Google Business, in den Gelben Seiten, bei Das Örtliche und in jedem anderen Verzeichnis identisch sein. Widersprüchliche Daten verwirren die KI. Ein vollständig gepflegtes Google Business Profil mit Fotos, Öffnungszeiten und Leistungen ist Pflicht.',
            },
            {
              title: 'Spezialisierung: Klares Profil statt „wir machen alles“',
              text: 'Die KI empfiehlt Betriebe, die eine klare Expertise zeigen. „Wir machen alles rund ums Haus“ ist für die KI ein leeres Signal. „Badsanierung und Heizungsmodernisierung in Hamburg-Altona“ ist ein starkes Signal. Je klarer dein Profil, desto wahrscheinlicher die Empfehlung.',
            },
            {
              title: 'Fotodokumentation: Vorher/Nachher und Referenzprojekte',
              text: 'Bilder mit Alt-Texten, Projektbeschreibungen und Standortangaben liefern der KI Kontext. „Badsanierung Hamburg-Eppendorf Altbau 2025“ als Bildunterschrift ist Gold wert. Vorher/Nachher-Galerien zeigen Kompetenz und geben der KI konkrete Referenzen, die sie zitieren kann.',
            },
          ],
        },
        {
          id: 'strategien',
          heading: '7 Strategien für Handwerksbetriebe',
          intro:
            'Die Reihenfolge ist bewusst nach Wirkung sortiert, nicht nach Aufwand. Punkt eins allein bewegt bei den meisten Betrieben mehr als die Punkte vier bis sieben zusammen.',
          steps: [
            {
              title: 'Google Business Profil zum Aushängeschild machen',
              text: 'Dein Google Business Profil ist die wichtigste Datenquelle für KI-Systeme. Fülle jedes Feld aus: Leistungen, Öffnungszeiten, Einzugsgebiet, Attribute. Lade mindestens 20 hochwertige Fotos hoch. Poste regelmäßig Updates zu abgeschlossenen Projekten. Ein vollständiges Profil signalisiert der KI: Dieser Betrieb ist aktiv und vertrauenswürdig.',
            },
            {
              title: 'Leistungsseiten für jedes Gewerk erstellen',
              text: 'Statt einer Seite mit Aufzählung brauchst du eigene Adressen für Badsanierung, Heizungswartung und Rohrreinigung im Notdienst. Jede Seite sollte die Frage beantworten, die ein Kunde der KI stellen würde: „Was kostet eine Badsanierung in Hamburg?“ Dazu konkrete Preisrahmen, typische Projektdauer und dein Vorgehen Schritt für Schritt.',
            },
            {
              title: 'Bewertungen aktiv managen (QR-Code auf der Rechnung)',
              text: 'Drucke einen QR-Code auf jede Rechnung, der direkt zur Google-Bewertung führt. Bitte zufriedene Kunden persönlich um eine Bewertung. Antworte auf jede Rezension innerhalb von 48 Stunden, auch auf negative. Die KI wertet das Antwortverhalten als Qualitätssignal. Ziel: mindestens 30 Bewertungen mit 4,5 Sternen oder besser.',
            },
            {
              title: 'Referenzprojekte mit Fotos dokumentieren',
              text: 'Fotografiere jedes Projekt: vorher, während, nachher. Erstelle für die besten Projekte eigene Unterseiten mit Beschreibung, Fotos, Standort und Kundenstimme. „Komplettsanierung eines Altbau-Badezimmers in Hamburg-Winterhude“ gibt der KI exakt die Information, die sie für eine Empfehlung braucht.',
            },
            {
              title: 'FAQ zu häufigen Kundenfragen erstellen',
              text: 'Welche Fragen stellen Kunden am Telefon? Genau diese Fragen stellen sie auch der KI. „Was kostet ein neues Bad?“ „Wie lange dauert eine Heizungsmodernisierung?“ „Brauche ich eine Genehmigung?“ Jede FAQ mit konkreter Antwort ist ein potenzieller KI-Treffer. 15 bis 20 Fragen sind ein guter Start.',
            },
            {
              title: 'Schema.org LocalBusiness + Service Markup einsetzen',
              text: 'Strukturierte Daten helfen der KI, deinen Betrieb einzuordnen. LocalBusiness-Schema mit Adresse, Öffnungszeiten und Bewertungen, Service-Schema für jede Leistung, Geo-Koordinaten für dein Einzugsgebiet. Das ist technisch simpel, aber im Handwerk machen es weniger als 5 % der Betriebe.',
            },
            {
              title: 'Präsenz auf Handwerksportalen pflegen',
              text: 'MyHammer, Gelbe Seiten, Das Örtliche, Check24, das Handwerkerportal der Handwerkskammer: überall mit identischen Daten vertreten sein. Nicht wegen des Traffics dieser Portale, sondern weil die KI diese Quellen als Vertrauenssignale auswertet. Konsistente Einträge auf fünf oder mehr Plattformen stärken dein KI-Profil deutlich.',
            },
          ],
        },
        {
          id: 'gewerke',
          heading: 'Gewerke und ihre KI-Chancen',
          intro:
            'Nicht jedes Gewerk hat die gleichen KI-Chancen. Hier die wichtigsten Branchen mit ihren spezifischen Hebeln und Herausforderungen.',
          cards: [
            {
              title: 'Sanitär, Heizung, Klima (SHK)',
              text: 'Herausforderung: Kunden recherchieren Wärmepumpen, Badsanierung und Heizungstausch intensiv online, und hohe Auftragswerte von 5.000 bis 30.000 Euro führen zu langer Entscheidungsphase. Chance: Wärmepumpen-Beratung, Fördermittel-FAQ und Energieeffizienz-Content sind perfekte KI-Themen. Wer hier Expertise zeigt, wird bei Fragen wie „Welcher Heizungsbauer in Hamburg kennt sich mit Wärmepumpen aus?“ empfohlen.',
            },
            {
              title: 'Elektriker',
              text: 'Herausforderung: Smart-Home, Wallboxen und PV-Anlagen sind alles Themen, zu denen Kunden die KI befragen, während die meisten Elektro-Betriebe kaum Online-Präsenz haben. Chance: Leistungsseiten zu Smart-Home-Installation, Wallbox-Montage und PV-Anschluss. Jedes dieser Themen ist ein eigener Suchcluster in der KI. Technische FAQ zu Kosten und Voraussetzungen sind Goldstaub.',
            },
            {
              title: 'Maler und Lackierer',
              text: 'Herausforderung: starker Preiskampf auf Portalen. Kunden fragen die KI „Was kostet es, eine 3-Zimmer-Wohnung streichen zu lassen?“ und erwarten konkrete Zahlen. Chance: Vorher/Nachher-Galerien mit Standortangaben, Preisrechner-Inhalte und Farbberatungs-Seiten. Maler, die Referenzprojekte mit Fotos dokumentieren, haben einen massiven Vorteil gegenüber der gesichtslosen Masse.',
            },
            {
              title: 'Tischler und Schreiner',
              text: 'Herausforderung: Maßanfertigungen sind erklärungsbedürftig. Kunden wollen verstehen, was möglich ist, bevor sie anfragen, und die KI wird zum ersten Beratungsgespräch. Chance: Projektgalerien mit Materialangaben, Maß-Optionen und Preisrahmen. „Einbauschrank nach Maß in Hamburg“ als eigene Leistungsseite. Tischler mit Portfolio-Website dominieren die KI-Empfehlungen, weil die Konkurrenz quasi nicht existiert.',
            },
            {
              title: 'Dachdecker',
              text: 'Herausforderung: höchste Auftragswerte im Handwerk, 10.000 bis 50.000 Euro. Kunden holen mehrere Angebote ein und recherchieren intensiv, Versicherungsfälle und Sturmschäden erzeugen Dringlichkeit. Chance: Notdienst-Seiten, Materialvergleiche (Ziegel, Schiefer, Blech) und Fördermittel für energetische Dachsanierung. Bei Sturmschäden fragen Kunden die KI nach dem Dachdecker-Notdienst in Hamburg. Wer dort auftaucht, bekommt den Auftrag.',
            },
          ],
        },
        {
          id: 'hamburg',
          heading: 'KI-Sichtbarkeit für Hamburger Handwerksbetriebe',
          intro:
            'Die Handwerkskammer Hamburg vertritt rund 15.000 Betriebe mit knapp 106.000 Beschäftigten. Die lokale Handwerkslandschaft ist geprägt von kleinen und mittelständischen Betrieben mit 1 bis 20 Mitarbeitern, genau die Zielgruppe, die von KI-Sichtbarkeit am meisten profitiert.',
          paragraphs: [
            'Die Stadtteilstruktur Hamburgs ist für KI-Sichtbarkeit ein Geschenk. Jeder Stadtteil ist ein eigenes Keyword-Cluster: „Elektriker Hamburg-Eimsbüttel“, „Klempner Hamburg-Altona“, „Maler Hamburg-Wandsbek“. Die KI versteht diese lokalen Zuordnungen und empfiehlt bevorzugt Betriebe, die sich klar einem Stadtteil zuordnen lassen.',
            'Die Handwerkskammer Hamburg bietet Betrieben ein eigenes Verzeichnis. Ein vollständiger Eintrag dort ist ein weiteres Vertrauenssignal für die KI. Nutze zusätzlich das Hamburger Branchenbuch, hamburg.de und lokale Handwerkerportale, um deine Präsenz zu verstärken.',
          ],
          stat: 'Eimsbüttel, Altona, Wandsbek, Hamburg-Nord, Bergedorf, Harburg, Eppendorf, Winterhude, Ottensen, Barmbek, Blankenese, Rahlstedt: jeder Stadtteil plus Gewerk ist ein eigener Keyword-Cluster, und die meisten davon sind in der KI noch komplett unbesetzt.',
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Empfiehlt ChatGPT wirklich lokale Handwerksbetriebe?',
          a: 'Ja. Auf die Frage nach einer zuverlässigen Entrümpelungsfirma in Hamburg nennt ChatGPT konkrete Betriebe, darunter unseren Kunden Blitz Hamburg. Über 400 Millionen Menschen nutzen ChatGPT wöchentlich (OpenAI, Februar 2025), und lokale Dienstleisterfragen gehören zu den häufigsten Anfragen. Die KI nennt pro Anfrage nur zwei bis drei Betriebe.',
        },
        {
          q: 'Was kostet MyHammer im Vergleich zur KI-Empfehlung?',
          a: 'Bei MyHammer ist die Registrierung kostenlos, aber jeder bestätigte Kontakt kostet eine Gebühr. Der Preis pro Lead variiert dynamisch nach Gewerk, Auftragswert, Region und Wettbewerb. Eine öffentliche Preisliste gibt es 2026 nicht. Mehrere Betriebe bewerben sich um dieselbe Anfrage, du zahlst auch ohne Auftrag. Eine KI-Empfehlung kostet keine Lead-Gebühr und nennt keine Konkurrenz.',
        },
        {
          q: 'Warum empfiehlt mich die KI nicht?',
          a: 'Der mit Abstand häufigste Grund: kein gepflegtes Google Business Profil und keine gesammelten Bewertungen. Ohne diese Datenbasis hat die KI nichts, worauf sie eine Empfehlung stützen kann. Erst danach kommen fehlende Leistungsseiten, inkonsistente Adressdaten (NAP) und fehlendes Schema.org-Markup.',
        },
        {
          q: 'Wie viele Bewertungen brauche ich, damit die KI mich empfiehlt?',
          a: 'Es gibt keine feste Schwelle, aber als Richtwert: mindestens 30 Google-Bewertungen mit 4,5 Sternen oder besser, auf die du auch antwortest. Blitz Hamburg wird mit 5,0 Sternen aus 35 Bewertungen von ChatGPT genannt. Wichtiger als die reine Zahl ist die Kombination aus Menge, Aktualität und deinen Antworten auf Rezensionen.',
        },
        {
          q: 'Wie lange dauert es, bis mein Handwerksbetrieb in der KI auftaucht?',
          a: 'In der Live-Websuche von ChatGPT und Perplexity wirken Optimierungen innerhalb von Tagen bis Wochen. Eine stabile, wiederkehrende Empfehlung dauert länger: Blitz Hamburg wurde erst einige Monate nach dem Relaunch der Website zitiert. KI-Empfehlungen treffen bislang fast nur Betriebe, die seit über einem Jahr aktiv an ihrer Online-Präsenz arbeiten.',
        },
        {
          q: 'Konvertieren KI-Anfragen besser als Portal-Leads?',
          a: 'Nach unserer Erfahrung ja. Der Anteil der Neukunden, die direkt aus einer KI-Antwort kommen, ist heute noch klein. Aber diese Anfragen konvertieren mit 20 bis 40 %, weil der Kunde bereits eine Empfehlung erhalten hat und kaufbereit ist. Das ist deutlich höher als bei Portal-Leads, wo mehrere Betriebe um denselben Kunden konkurrieren.',
        },
        {
          q: 'Welche Handwerksgewerke werden in Hamburg am häufigsten in der KI gesucht?',
          a: 'Besonders SHK (Sanitär, Heizung, Klima), Elektrik und Dachdecker. Die Anfragen teilen sich in Notfall und geplantes Projekt, also „Notdienst Heizung Hamburg Sonntag“ gegen „Badsanierung Hamburg Empfehlung“. Hamburg hat rund 15.000 Handwerksbetriebe (Handwerkskammer Hamburg), aber die KI-Konkurrenz ist in fast jedem Stadtteil noch minimal.',
        },
      ]}
      sources={[
        {
          label: 'DemandSage',
          text: 'ChatGPT-Nutzerstatistik, OpenAI mit über 400 Millionen wöchentlichen Nutzern im Februar 2025, plus 33 % gegenüber Dezember 2024.',
          href: 'https://www.demandsage.com/chatgpt-statistics/',
        },
        {
          label: 'Bitkom (November 2025)',
          text: 'Internet-Suche im Wandel: die Hälfte der deutschen Internetnutzer nutzt bereits KI-Chats statt klassischer Suchmaschinen.',
          href: 'https://www.bitkom.org/Presse/Presseinformation/Internet-Suche-Wandel-Haelfte-nutzt-KI-Chats',
        },
        {
          label: 'Bitkom',
          text: 'Ein Drittel der Befragten (34 %) nutzt KI mindestens einmal pro Woche.',
          href: 'https://www.bitkom.org/Presse/Presseinformation/Ein-Drittel-nutzt-KI-mindestens-einmal-pro-Woche',
        },
        {
          label: 'MyHammer',
          text: 'Gebührenmodell „Bestätigte Kontakte“ für Auftragnehmer, ohne öffentliche Preisliste.',
          href: 'https://www.myhammer.de/',
        },
        {
          label: 'Handwerkskammer Hamburg',
          text: 'Rund 15.000 Betriebe mit knapp 106.000 Beschäftigten im Hamburger Handwerk.',
          href: 'https://www.hwk-hamburg.de/',
        },
        {
          label: 'Eigene Messung (Umami, 30 Tage)',
          text: '55 erfasste Kontaktaktionen auf blitz-hamburg.de, davon 20 Anrufe, 14 Klicks auf die Google-Bewertungen, 9 WhatsApp-Kontakte und 4 Anfragen über den Preisrechner. Search Console im gleichen Zeitraum: 55 Klicks und 6.660 Impressionen.',
          href: 'https://aiseo.hamburg/wissen/case-study-blitz-hamburg',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'Fallstudie: Blitz Hamburg',
          description: 'Der vollständige Fall hinter den Zahlen auf dieser Seite.',
          href: '/wissen/case-study-blitz-hamburg',
          tag: 'Fallstudie',
        },
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
          title: 'Technische KI-Sichtbarkeit',
          description: 'Schema.org, robots.txt und Crawling: die technische Seite der KI-Optimierung.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
      ]}
      ctaTitle="Werden Kunden von der KI zu deinem Betrieb geschickt?"
      ctaText="Ich prüfe, ob und wie ChatGPT, Perplexity und andere KI-Systeme deinen Handwerksbetrieb aktuell empfehlen. Kostenlos, in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

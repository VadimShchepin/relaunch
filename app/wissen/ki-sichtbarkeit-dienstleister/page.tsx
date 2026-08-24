import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitDienstleisterPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-dienstleister"
      breadcrumbLabel="KI-Sichtbarkeit für Dienstleister"
      eyebrow="Branche: Dienstleister"
      title="KI-Sichtbarkeit für Dienstleister: Vom unsichtbaren Experten zum empfohlenen Anbieter"
      description='Du bist seit 15 Jahren der beste Steuerberater in deiner Stadt. Deine Mandanten lieben dich. Aber wenn jemand ChatGPT fragt "Welcher Steuerberater für Freiberufler in Hamburg?", empfiehlt die KI deinen Wettbewerber. Den mit der hässlicheren Website, aber der besseren KI-Sichtbarkeit.'
      publishedAt="2026-04-03"
      modifiedAt="2026-08-24"
      image={{
        src: '/images/wissen/ki-sichtbarkeit-dienstleister/hero-ki-sichtbarkeit-dienstleister.svg',
        alt: 'Vom unsichtbaren Experten zum von KI empfohlenen Anbieter: ein Anbieter wird in einem Netzwerk hervorgehoben und nach außen empfohlen',
        caption:
          'Die KI empfiehlt nicht den besten Anbieter, sondern den, dessen Expertise sie aus mehreren Quellen belegen kann.',
        width: 1200,
        height: 630,
      }}
      summaryTitle="TL;DR, Das Wichtigste in 30 Sekunden"
      summaryItems={[
        'Dienstleister haben die höchsten Ticket-Sizes (2.000 bis 50.000 EUR pro Mandant). Eine einzige KI-Empfehlung kann deinen Monat retten.',
        'ChatGPT empfiehlt pro Anfrage nur 2 bis 4 Anbieter. Der Rest existiert für den Suchenden nicht.',
        'Die meisten Dienstleister sind KI-unsichtbar, weil sie auf Empfehlungen und Google-Rankings setzen. Beides wird von KI gefressen.',
        '5 konkrete Schritte machen dich vom unsichtbaren Experten zum empfohlenen Anbieter.',
        'ROI-Rechnung: Bei 5.000 bis 10.000 EUR Mandatswert refinanziert sich KI-Sichtbarkeit in Wochen, nicht Monaten.',
      ]}
      sections={[
        {
          id: 'paradox',
          heading: 'Das Dienstleister-Paradox: Unsichtbarer Experte mit vollem Terminkalender',
          intro:
            'Du bist gut. Richtig gut sogar. Deine Mandanten empfehlen dich weiter, dein Terminkalender ist voll, und du denkst: Wozu brauche ich diese KI-Geschichte?',
          paragraphs: [
            'Das ist, als würdest du als Herzchirurg in einem fensterlosen Keller operieren und dich wundern, warum die Patienten zum Kollegen mit dem Glaspalast gehen. Nicht weil er besser ist, sondern weil sie ihn finden.',
            'Das Problem: Dein Empfehlungsnetzwerk hat ein Verfallsdatum. Nicht heute, nicht morgen, aber schneller, als dir lieb ist.',
          ],
          warning: {
            title: 'Die unbequeme Wahrheit',
            text: 'Wenn ein potenzieller Mandant ChatGPT nach dem besten Steuerberater für Freiberufler in Hamburg fragt und du nicht in der Antwort auftauchst, dann existierst du für diese Person nicht. Egal wie viele Empfehlungen auf deiner Website stehen, egal wie viele Auszeichnungen an deiner Wand hängen. Die KI kennt dich nicht, also empfiehlt sie dich nicht.',
          },
          note: 'Und hier kommt der paradoxe Teil: Genau die Dienstleister, die am meisten von KI-Empfehlungen profitieren würden, ignorieren das Thema am konsequentesten. Steuerberater, Architekten, Unternehmensberater, Rechtsanwälte, sie alle verlassen sich auf ihr Netzwerk. Nur fragt dieses Netzwerk inzwischen auch die KI, es sagt es dir nur nicht.',
        },
        {
          id: 'wettbewerber',
          heading: 'Warum die KI deinen Wettbewerber empfiehlt (und nicht dich)',
          intro:
            'ChatGPT würfelt nicht, Perplexity rät nicht, und Google AI Overviews zieht keine Namen aus dem Hut. KI-Systeme empfehlen nach Daten, und dein Wettbewerber hat bessere Daten.',
          paragraphs: [
            'Das ist, als würdest du bei einer Weinverkostung den besten Wein mitbringen, aber das Etikett vergessen. Der Sommelier empfiehlt den mittelmäßigen Bordeaux mit dem beeindruckenden Etikett, weil er schlicht nicht weiß, was in deiner Flasche ist.',
          ],
          table: {
            headers: ['Was KI-Systeme über dich wissen', 'Was sie wissen sollten'],
            rows: [
              [
                'Steuerberater in Hamburg, einer von 800',
                'Steuerberater spezialisiert auf Freiberufler, 15 Jahre Erfahrung, 200+ Mandanten, Fachautor',
              ],
              [
                'Eine Seite: Unsere Leistungen (Aufzählung)',
                'Eigene Leistungsseiten mit FAQ, Prozessbeschreibung, Preisrahmen und Fallstudien',
              ],
              [
                '3 Google-Bewertungen von 2019',
                '40+ Bewertungen mit inhaltlichem Feedback und professionellen Antworten',
              ],
              [
                'Keine strukturierten Daten',
                'ProfessionalService Schema, FAQ Schema, LocalBusiness Schema',
              ],
              [
                'Null Fachpublikationen, null Erwähnungen',
                'Gastbeiträge, Branchenverzeichnisse, Fachportale, Kammer-Einträge',
              ],
              [
                'Kontaktieren Sie uns, Ende',
                'Content, der KI-Fragen direkt beantwortet und als Quelle zitiert werden kann',
              ],
            ],
            caption:
              'Es geht nicht darum, wer der bessere Steuerberater, Architekt oder Berater ist. Es geht darum, wer der KI die besseren Signale liefert. Und das ist eine rein technisch-strategische Frage.',
          },
        },
        {
          id: 'branchen',
          heading: 'So suchen Mandanten in der KI: branchenspezifisch',
          intro:
            'Jede Branche hat ihre eigenen KI-Suchmuster. Hier siehst du, was potenzielle Mandanten tatsächlich in ChatGPT und Perplexity tippen, und warum du bei den meisten Anfragen nicht auftauchst.',
          steps: [
            {
              title: 'Steuerberater',
              text: 'Typische KI-Anfragen: Bester Steuerberater für Freiberufler Hamburg, Steuerberater für GmbH-Gründung, Welcher Steuerberater kennt sich mit Kryptowährungen aus? Das Problem: Die KI empfiehlt Kanzleien, die für diese Nischen eigene Leistungsseiten haben. Eine Sammelseite mit Einkommensteuer, Umsatzsteuer und Lohnbuchhaltung gibt der KI null Differenzierung. Das ist, als würdest du auf einer Jobmesse einen Sticker tragen mit der Aufschrift: Ich kann Sachen.',
            },
            {
              title: 'Architekten',
              text: 'Typische KI-Anfragen: Architekt für energetische Sanierung, Architekt Dachgeschossausbau Hamburg, Welcher Architekt macht KfW-Effizienzhaus? Das Problem: Architekten leben vom Portfolio, aber die KI kann deine Bilder nicht lesen. Sie braucht Projektbeschreibungen mit Kontext: Ort, Umfang, Förderprogramm, Ergebnis. Ein Portfolio ohne Text ist für die KI ein leeres Blatt.',
            },
            {
              title: 'Unternehmensberater',
              text: 'Typische KI-Anfragen: Berater für Digitalisierung Mittelstand, Strategieberatung für Familienunternehmen, Welcher Berater hilft bei der Nachfolgeplanung? Das Problem: Berater-Websites sind die Königsklasse der Inhaltsleere. Wir begleiten Sie bei der Transformation. Wir denken ganzheitlich. Wir schaffen Mehrwert. Die KI liest das und denkt: Dieser Mensch macht irgendetwas. Nächster.',
            },
            {
              title: 'Rechtsanwälte',
              text: 'Typische KI-Anfragen: Anwalt für Arbeitsrecht Kündigung, Fachanwalt Mietrecht Hamburg Mietminderung, Welcher Anwalt hilft bei Abfindungsverhandlung? Das Problem: Kanzleien, die auf anwalt.de, JUVE und in Fachzeitschriften präsent sind, werden von der KI als vertrauenswürdiger eingestuft. Deine Website allein reicht nicht, die KI will Konsistenz über mehrere Quellen. Ja, auch die IHK zählt.',
            },
          ],
        },
        {
          id: 'empfehlungsnetzwerk',
          heading: 'Warum dein Empfehlungsnetzwerk ein Ablaufdatum hat',
          intro:
            'Ich lebe von Empfehlungen, das hat immer funktioniert. Stimmt, hat es. Aber die Empfehlungskette bricht gerade.',
          paragraphs: [
            'Früher hat dein zufriedener Mandant seinem Schwager deinen Namen genannt. Der Schwager hat dich angerufen. Fertig. Heute googelt der Schwager deinen Namen, liest drei Bewertungen und fragt dann noch schnell ChatGPT, ob es bessere Alternativen gibt.',
            'Das ist, als würdest du einen Freund zum Essen empfehlen, und der fragt trotzdem noch Google Maps nach dem nächstbesseren Restaurant. Weil er es kann, weil es 5 Sekunden dauert, weil die KI ihm eine Begründung liefert. Drei Dinge passieren dabei gleichzeitig.',
          ],
          cards: [
            {
              title: 'Google frisst dein Ranking',
              text: 'AI Overviews beantworten informationelle Fragen direkt. Der Klick auf deine Website fällt weg. Gartner prognostiziert 50 % Traffic-Verlust bis 2028.',
            },
            {
              title: 'KI ersetzt Empfehlungen',
              text: 'Die Frage nach einer Empfehlung wird nicht mehr dem Nachbarn gestellt, sondern ChatGPT. Und ChatGPT hat eine Antwort. Immer.',
            },
            {
              title: 'Mandanten validieren alles',
              text: 'Selbst wenn jemand dich empfiehlt, prüft der potenzielle Mandant bei der KI gegen. Bist du dort unsichtbar, wächst der Zweifel.',
            },
          ],
        },
        {
          id: 'ticket-size',
          heading: 'Die Ticket-Size-Logik: Warum KI-Sichtbarkeit für Dienstleister absurd profitabel ist',
          intro:
            'Ein Online-Shop für Handyhüllen braucht 500 KI-Empfehlungen, um seine Investition zurückzuverdienen. Du brauchst eine, vielleicht zwei. Das ist der unfaire Vorteil von High-Ticket-Dienstleistern.',
          table: {
            headers: ['ROI-Rechnung für Dienstleister', 'Größenordnung'],
            rows: [
              ['Durchschnittlicher Mandatswert (Jahresumsatz)', '5.000 bis 10.000 EUR'],
              ['Monatliche KI-SEO-Investition', '1.500 bis 3.000 EUR'],
              ['Benötigte neue Mandanten für Break-Even', '1 pro Monat'],
              ['Realistischer ROI bei 2 zusätzlichen Mandanten pro Monat', '300 bis 500 %'],
              ['Break-Even-Zeitraum', '2 bis 6 Wochen'],
            ],
            caption:
              'Größenordnungen aus Projekten mit beratungsintensiven Dienstleistern, keine Garantie. Der Hebel liegt im Mandatswert, nicht in der Zahl der Anfragen.',
          },
          paragraphs: [
            'Und jetzt der Teil, den die meisten Dienstleister übersehen: Ein Mandant bleibt nicht einen Monat. Ein Steuerberater-Mandant bleibt durchschnittlich 7 bis 10 Jahre. Ein Architekt bekommt nach dem ersten Projekt Folgeaufträge. Ein Unternehmensberater wird zum Stammberater.',
            'Der Lifetime Value eines einzigen KI-gewonnenen Mandanten liegt damit bei 50.000 bis 200.000 EUR, bei einer monatlichen Investition von 1.500 EUR. Das ist kein Glück, sondern Strategie.',
          ],
        },
        {
          id: 'fuenf-schritte',
          heading: '5 Schritte vom unsichtbaren Experten zum empfohlenen Anbieter',
          intro:
            'Kein theoretisches Framework, kein es kommt drauf an. Fünf Schritte, die du oder dein Team in den nächsten 8 Wochen umsetzen kannst.',
          steps: [
            {
              title: 'Spezialisierung sichtbar machen, nicht nur leben',
              text: 'Du bist spezialisiert, aber deine Website sagt: Wir bieten umfassende Beratung. Erstelle für jede Spezialisierung eine eigene Leistungsseite. Nicht eine Seite mit Aufzählung, sondern echte Unterseiten wie /steuerberatung-freiberufler, /steuerberatung-gmbh-gruendung oder /steuerberatung-kryptowaehrungen. Jede Seite beantwortet die Fragen, die Mandanten der KI stellen.',
              bullets: [
                'Was ist das Problem des Mandanten?',
                'Was ist dein Ansatz, konkret beschrieben?',
                'Was kostet es ungefähr?',
                'Für wen ist das relevant, für wen nicht?',
                'FAQ mit 5 bis 7 konkreten Fragen',
              ],
            },
            {
              title: 'Autoritätssignale aufbauen: die KI will Beweise',
              text: 'Die KI empfiehlt nicht den Ersten, den sie findet. Sie empfiehlt den, der über mehrere vertrauenswürdige Quellen konsistent als Experte bestätigt wird. Die Formel ist simpel: Je mehr hochwertige Quellen dich konsistent als Experte für Thema X nennen, desto wahrscheinlicher wirst du empfohlen. Nicht Quantität, sondern Qualität und Konsistenz.',
              bullets: [
                'Google Business Profil, vollständig, mit Fotos und Bewertungen',
                'Branchenverzeichnis deiner Kammer (IHK, StBK, Architektenkammer)',
                'Fachportale (anwalt.de, JUVE, WhoFinance, Houzz)',
                'Gastbeiträge in Fachmedien',
                'LinkedIn mit regelmäßigen Fachbeiträgen',
              ],
            },
            {
              title: 'Fallstudien erstellen: messbare Ergebnisse statt Floskeln',
              text: 'Wir haben einem Kunden geholfen: schön, aber die KI braucht mehr. Sie braucht Wem, Wobei, mit welchem Ergebnis, in welchem Zeitraum. Ein Beispiel aus unserer eigenen Praxis: Das Landschaftsbauunternehmen GL Sommer kam mit einem SEO-Score von 34/100 zu uns. Nach der Optimierung mit strukturierten Daten, lokalen Signalen und einer neuen Content-Architektur generiert die Website 728 lokale Aktionen pro Monat, also Anrufe, Routenplanungen und Website-Besuche von Menschen, die aktiv nach dieser Dienstleistung suchen.',
              bullets: [
                'Branche des Mandanten',
                'Ausgangslage, konkret und mit Zahlen, wenn möglich',
                'Dein Ansatz, also was du tatsächlich gemacht hast',
                'Messbares Ergebnis',
                'Zeitraum',
              ],
            },
            {
              title: 'Strukturierte Daten implementieren: der KI einen Bauplan geben',
              text: 'Strukturierte Daten sind wie ein Organigramm für die KI. Ohne Organigramm muss sie raten, wer du bist und was du machst. Im Handwerk und bei Dienstleistern setzen weniger als 5 % der Websites Schema.org richtig um. Das ist dein technischer Vorsprung: wenige Stunden Arbeit für deinen Entwickler, Monate Vorsprung gegenüber deinen Wettbewerbern.',
              bullets: [
                'ProfessionalService oder LocalBusiness Schema mit Adresse, Öffnungszeiten, Einzugsgebiet und Bewertungen',
                'Service Schema für jede Leistungsseite',
                'FAQ Schema für Frage-Antwort-Bereiche',
                'Person Schema für Inhaber und Berater mit Qualifikationen und Erfahrung',
              ],
            },
            {
              title: 'Bewertungen strategisch aufbauen: die neue Währung',
              text: 'Bewertungen sind für KI-Systeme das, was Empfehlungsschreiben früher waren: Vertrauensbeweis Nummer eins. Aber nicht irgendwelche Bewertungen. Die KI unterscheidet zwischen Super Berater, 5 Sterne (wertlos) und einer Bewertung wie: Herr X hat uns bei der GmbH-Gründung begleitet, die steuerliche Strukturierung hat uns im ersten Jahr über 15.000 EUR gespart. Inhaltliche Bewertungen mit konkreten Leistungsbeschreibungen sind KI-Futter, denn die KI extrahiert daraus die Spezialisierung und das messbare Ergebnis.',
              bullets: [
                'Nach Projektabschluss gezielt um eine Bewertung bitten',
                'Orientierung geben: wobei geholfen wurde und was das Ergebnis war',
                'Auf jede Bewertung innerhalb von 48 Stunden antworten, professionell und mit Substanz',
              ],
            },
          ],
        },
        {
          id: 'fehler',
          heading: 'Die 4 tödlichen Fehler, die Dienstleister bei der KI-Sichtbarkeit machen',
          intro:
            'Bevor du loslegst, hier die Fehler, die ich bei 90 % aller Dienstleister-Websites sehe. Jeden einzelnen, immer wieder.',
          cards: [
            {
              title: 'Fehler 1: Die digitale Visitenkarte',
              text: 'Eine Website mit Über uns, Leistungen und Kontakt. Drei Seiten, null Content. Für die KI bist du ein Eintrag im Telefonbuch, und die KI empfiehlt keine Telefonbucheinträge.',
            },
            {
              title: 'Fehler 2: Berater-Deutsch statt Klartext',
              text: 'Wir begleiten Sie auf Ihrer Reise der digitalen Transformation mit ganzheitlichen Lösungen. Die KI liest das und schließt: Dieser Mensch hat nichts Konkretes zu sagen. Schreib, was du tust, für wen, mit welchem Ergebnis.',
            },
            {
              title: 'Fehler 3: Referenzen ohne Substanz',
              text: 'Unsere Mandanten vertrauen uns. Aber welche Mandanten, in welcher Branche, mit welchem Problem, und was war das Ergebnis? Eine Referenz ohne Details ist wie ein Lebenslauf ohne Berufserfahrung: technisch vorhanden, praktisch wertlos.',
            },
            {
              title: 'Fehler 4: Ich brauch kein Marketing, ich hab Empfehlungen',
              text: 'Der gefährlichste Fehler, nicht weil Empfehlungen nicht funktionieren, sondern weil jede Empfehlung heute gegen eine KI-Antwort antritt. Dein Empfehlungsgeber nennt einen Namen, der Empfangene tippt Name plus Alternativen ein. Findet die KI bessere Alternativen, verlierst du den Mandanten trotz Empfehlung.',
            },
          ],
        },
        {
          id: 'formel',
          heading: 'Die KI-Sichtbarkeits-Formel für Dienstleister',
          intro:
            'Es gibt keine Magic Bullet, aber es gibt eine Formel, die bei jedem Dienstleister funktioniert, den ich bisher beraten habe.',
          stat: 'Klare Spezialisierung x Konsistente Quellen x Strukturierte Daten = KI-Empfehlung',
          cards: [
            {
              title: 'Spezialisierung',
              text: 'Eigene Leistungsseiten pro Nische. FAQ mit echten Mandantenfragen. Preisrahmen und Prozessbeschreibungen.',
            },
            {
              title: 'Konsistenz',
              text: 'Gleiche Expertise-Signale auf Website, Google, Branchenportalen, Fachmedien und Bewertungsportalen.',
            },
            {
              title: 'Struktur',
              text: 'Schema.org-Markup, klare URL-Architektur, robots.txt für KI-Crawler, llms.txt für LLM-Training.',
            },
          ],
          paragraphs: [
            'Fehlt ein Faktor, bricht die Gleichung zusammen. Die beste Spezialisierung nützt nichts, wenn deine Website keine strukturierten Daten hat. Die besten strukturierten Daten nützen nichts, wenn du auf keiner externen Quelle erwähnt wirst. Alle drei Faktoren müssen zusammenspielen.',
          ],
        },
        {
          id: 'alt-neu',
          heading: 'Alte Welt vs. neue Welt der Mandantengewinnung',
          intro:
            'Der Vergleich zeigt nicht nur einen anderen Kanal, sondern eine andere Qualität der Anfrage: Ein Lead aus einer KI-Empfehlung kommt mit Vertrauen vorqualifiziert.',
          table: {
            headers: ['Bisheriger Weg', 'KI-Sichtbarkeits-Weg'],
            rows: [
              ['Empfehlung vom Netzwerk, dann Anruf', 'KI-Empfehlung, dann direkte Anfrage'],
              ['Google Ads: 15 bis 80 EUR pro Klick', 'KI-Empfehlung: 0 EUR pro Anfrage'],
              ['Kaltakquise und Networking-Events', 'Mandant kommt mit Vertrauen vorqualifiziert'],
              ['Branchenbuch-Einträge (Gelbe Seiten, 11880)', 'KI-Systeme als neues Branchenbuch'],
              ['Conversion Rate: 1 bis 3 %', 'Conversion Rate: 10 bis 25 % (vorqualifizierte Leads)'],
            ],
            caption:
              'Die letzte Zeile ist der eigentliche Unterschied: weniger Anfragen, aber deutlich häufiger im Auftrag endend.',
          },
          paragraphs: [
            'Ein Lead, der über eine KI-Empfehlung kommt, hat bereits Vertrauen, denn die KI hat eine Empfehlung ausgesprochen. Das ist eine Empfehlung von einer Instanz, der Hunderte Millionen Menschen vertrauen, und die Conversion Rate liegt entsprechend 3 bis 5 mal höher als bei einem kalten Google-Klick.',
            'Das bedeutet weniger Gesamtanfragen, aber bessere. Qualität schlägt Quantität, vor allem bei Mandaten im fünfstelligen Bereich.',
          ],
        },
        {
          id: 'hamburg',
          heading: 'KI-Sichtbarkeit für Hamburger Dienstleister',
          intro:
            'Hamburg hat über 100.000 Dienstleistungsunternehmen, von der Ein-Mann-Beratung bis zur Großkanzlei. Die lokale KI-Sichtbarkeit ist für die meisten noch komplett unbesetzt.',
          paragraphs: [
            'Das heißt im Klartext: Wenn du jetzt als Steuerberater für Freiberufler in Hamburg-Eppendorf oder als Architekt für energetische Sanierung in Hamburg-Altona KI-sichtbar wirst, hast du das Feld für dich. Weil deine Wettbewerber noch darüber diskutieren, ob sie überhaupt eine neue Website brauchen.',
            'Hamburgs Stadtteilstruktur ist für KI-SEO ein Geschenk. Jeder Stadtteil ist ein eigener Suchcluster: Unternehmensberater Hamburg-HafenCity ist eine andere KI-Anfrage als Unternehmensberater Hamburg-Wandsbek. Und bei beiden ist der erste Platz noch frei.',
          ],
          bullets: [
            'Eppendorf, HafenCity, Altona, Rotherbaum',
            'Winterhude, Neustadt, Blankenese, Ottensen',
            'Wandsbek, Barmbek, Eimsbüttel, Hamburg-Nord',
          ],
          note: 'Jeder Stadtteil plus Dienstleistung ergibt einen eigenen KI-Cluster. Die meisten davon sind unbesetzt.',
        },
        {
          id: 'acht-wochen',
          heading: 'Dein 8-Wochen-Plan zur KI-Sichtbarkeit',
          intro:
            'Keine abstrakten Empfehlungen, sondern ein konkreter Plan, den du Woche für Woche abhaken kannst. Oder dein Team. Oder deine Agentur.',
          steps: [
            {
              title: 'Woche 1 bis 2: Fundament',
              text: 'Google Business Profil vollständig ausfüllen. Kammer-Eintrag prüfen. NAP-Konsistenz auf allen Plattformen sicherstellen. Schema.org-Markup implementieren (ProfessionalService und LocalBusiness).',
            },
            {
              title: 'Woche 3 bis 4: Spezialisierung',
              text: 'Leistungsseiten erstellen, eine pro Spezialisierung. FAQ-Bereiche mit 5 bis 7 echten Mandantenfragen pro Seite. Preisrahmen und Prozessbeschreibungen ergänzen.',
            },
            {
              title: 'Woche 5 bis 6: Autorität',
              text: 'Branchenportal-Einträge pflegen (anwalt.de, Houzz, WhoFinance und weitere). Ersten Gastbeitrag platzieren. Bewertungskampagne starten: QR-Code auf der Rechnung, persönliche Bitte an Top-Mandanten.',
            },
            {
              title: 'Woche 7 bis 8: Content und Tracking',
              text: '2 bis 3 Fallstudien mit messbaren Ergebnissen veröffentlichen. KI-Monitoring starten, also regelmäßig in ChatGPT und Perplexity nach deinen Keywords suchen. Erste Optimierungsrunde auf Basis der Ergebnisse.',
            },
          ],
          paragraphs: [
            'Nach 8 Wochen hast du die Grundlage. Nicht perfekt, aber 80 % besser als 95 % deiner Wettbewerber. Und das reicht, um bei der KI aufzutauchen, weil die Messlatte im Dienstleisterbereich so niedrig liegt.',
            'Ernsthaft: Ich habe Steuerberater gesehen, deren Website aus 2014 stammt und deren letzte Google-Bewertung von 2020 ist. Das ist dein Wettbewerb, das ist die Hürde, die du überspringen musst.',
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Was genau ist KI-Sichtbarkeit für Dienstleister?',
          a: 'KI-Sichtbarkeit bedeutet, dass dein Unternehmen von ChatGPT, Perplexity, Claude und Google AI als vertrauenswürdiger Anbieter empfohlen wird, wenn potenzielle Kunden nach deiner Dienstleistung fragen. Die KI nennt typischerweise nur 2 bis 4 Anbieter pro Anfrage, der Rest existiert für den Suchenden nicht. Für Dienstleister mit hohen Auftragsvolumen (5.000 bis 50.000 EUR pro Mandat) kann eine einzige zusätzliche KI-Empfehlung den gesamten Monatsumsatz verändern.',
        },
        {
          q: 'Warum empfiehlt ChatGPT meinen Wettbewerber und nicht mich?',
          a: 'KI-Systeme bewerten drei Dinge: Wie klar ist deine Expertise kommuniziert (Spezialisierung statt Bauchladen), wie konsistent bist du über verschiedene Quellen erwähnt (Website, Branchenportale, Fachpublikationen, Bewertungen) und wie gut kann die KI deine Informationen extrahieren (strukturierte Daten, klare Website-Architektur). Dein Wettbewerber macht mindestens eines davon besser als du.',
        },
        {
          q: 'Welche Dienstleister profitieren am meisten von KI-Sichtbarkeit?',
          a: 'Alle Dienstleister mit hohen Auftragsvolumen und langer Kundenbeziehung: Steuerberater, Architekten, Unternehmensberater, Rechtsanwälte, IT-Dienstleister, Agenturen, Finanzberater und Coaches. Je höher der durchschnittliche Mandatswert, desto extremer der ROI einer einzigen KI-Empfehlung. Ein Steuerberater, der ein Unternehmen mit 50 Mitarbeitern gewinnt, hat die Investition in KI-Sichtbarkeit für Jahre amortisiert.',
        },
        {
          q: 'Wie schnell sehe ich Ergebnisse bei der KI-Sichtbarkeit?',
          a: 'Bei der Live-Websuche (Perplexity, ChatGPT mit Bing-Integration) können erste Ergebnisse nach 2 bis 6 Wochen sichtbar sein. Für die Aufnahme in KI-Trainingsdaten dauert es bis zum nächsten Modell-Update, also 3 bis 6 Monate. Der entscheidende Punkt: Bei Dienstleistern reicht ein einziger gewonnener Mandant, um die gesamte Investition zu refinanzieren.',
        },
        {
          q: 'Reicht meine bestehende Website für KI-Sichtbarkeit?',
          a: 'Wahrscheinlich nicht in der aktuellen Form. Die meisten Dienstleister-Websites sind digitale Visitenkarten: Über uns, Leistungen als Aufzählung, ein Kontaktformular. KI-Systeme brauchen spezifische Leistungsseiten, FAQ-Bereiche mit konkreten Antworten, Schema.org-Markup, Fallstudien mit messbaren Ergebnissen und klare Autoritätssignale. Die gute Nachricht: Du brauchst keine neue Website, du musst die bestehende strategisch erweitern.',
        },
        {
          q: 'Was kostet KI-Sichtbarkeit für Dienstleister?',
          a: 'Die Grundlagen (Google Business, Bewertungsmanagement, Website-Struktur) kannst du selbst umsetzen. Professionelle KI-SEO-Betreuung für Dienstleister beginnt typischerweise bei 1.500 bis 3.000 EUR monatlich. Bei einem durchschnittlichen Mandatswert von 5.000 bis 10.000 EUR reicht ein zusätzlicher Mandant pro Monat, um die Investition 3 bis 5 mal zurückzuverdienen.',
        },
        {
          q: 'Funktioniert KI-Sichtbarkeit auch ohne lokalen Bezug?',
          a: 'Ja. Während lokale Dienstleister (Steuerberater Hamburg, Architekt München) von lokaler KI-Sichtbarkeit profitieren, funktioniert das Prinzip auch für überregionale Berater und Agenturen. Entscheidend ist dann nicht der Standort, sondern die thematische Spezialisierung, etwa Berater für Digitalisierung im Mittelstand oder Agentur für B2B-Leadgenerierung im SaaS-Umfeld.',
        },
      ]}
      sources={[
        {
          label: 'Ahrefs (2025)',
          text: 'LLM SEO, Brand Mentions Correlation Study: Zusammenhang zwischen Erwähnungen und Sichtbarkeit in KI-Antworten.',
          href: 'https://ahrefs.com/blog/llm-seo/',
        },
        {
          label: 'SparkToro / Datos',
          text: 'ChatGPT Traffic- und Marktanteilsanalyse, Grundlage für die Einordnung der Nutzerzahlen.',
          href: 'https://sparktoro.com/blog/new-research-how-much-traffic-do-ai-tools-send-to-websites/',
        },
        {
          label: 'Gartner',
          text: 'Gartner-Prognose zum Rückgang des Suchvolumens und des organischen Traffics: 25 % weniger Suchmaschinen-Volumen bis 2026 (Pressemitteilung vom 19.02.2024), bis 2028 die Hälfte oder mehr des organischen Traffics.',
          href: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents',
        },
        {
          label: 'OpenAI',
          text: 'Dokumentation zu GPTBot und OAI-SearchBot, Basis für die Crawler-Empfehlungen.',
          href: 'https://platform.openai.com/docs/bots',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit für Logistik und Speditionen',
          description:
            'Welche Fragen zu Zoll, Gefahrgut und Kosten zitiert werden, und warum Suchvolumen hier ein schlechter Indikator ist.',
          href: '/wissen/ki-sichtbarkeit-logistik',
          tag: 'Branche',
        },
        {
          title: 'KI-Sichtbarkeit für SaaS',
          description: 'Warum Vergleichs- und Alternativenseiten bei Software die stärksten Citation-Magneten sind.',
          href: '/wissen/ki-sichtbarkeit-saas',
          tag: 'Branche',
        },
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Guide',
        },
        {
          title: 'KI-Sichtbarkeit für Anwälte',
          description: 'Spezifische Strategien für Kanzleien und Rechtsanwälte in der KI.',
          href: '/wissen/ki-sichtbarkeit-anwaelte',
          tag: 'Branche',
        },
        {
          title: 'E-E-A-T für KI-Sichtbarkeit',
          description: 'Wie Erfahrung, Expertise, Autorität und Trust KI-Empfehlungen beeinflussen.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'E-E-A-T',
        },
        {
          title: 'Lokale KI-Sichtbarkeit',
          description: 'Wie du in deiner Stadt und Region von KI-Systemen empfohlen wirst.',
          href: '/wissen/lokale-ki-sichtbarkeit',
          tag: 'Lokal',
        },
      ]}
      ctaTitle="Finde heraus, ob ChatGPT dich empfiehlt"
      ctaText="Ich prüfe, ob und wie ChatGPT, Perplexity und andere KI-Systeme dich aktuell empfehlen, oder deinen Wettbewerber. Kostenlos, in 48 Stunden. Für Steuerberater, Architekten, Berater, Rechtsanwälte und Agenturen in Hamburg."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

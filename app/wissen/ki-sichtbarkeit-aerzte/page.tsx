import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitAerztePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-aerzte"
      breadcrumbLabel="KI-Sichtbarkeit für Ärzte"
      eyebrow="Branche: Medizin"
      title="KI-Sichtbarkeit für Ärzte & Praxen: Wenn Patienten die KI fragen"
      description="Welcher Chiropraktiker in Hamburg ist gut? Solche Fragen landen heute in ChatGPT, Gemini und Perplexity, und die KI nennt zwei bis drei Praxen. Im Medizinbereich gelten dabei die strengsten Vertrauensregeln im Netz, plus das Heilmittelwerbegesetz. Dieser Guide zeigt, was eine Praxis schreiben darf und was die KI trotzdem verstehen muss."
      schemaImage="/photo/wissen_assets/medical-authority-ladder.webp"
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryTitle="Zusammenfassung"
      summaryItems={[
        '45 Prozent der Menschen in Deutschland haben laut Bitkom (Digital Health 2025) schon einen KI-Chatbot für Gesundheitsfragen genutzt. Eine saubere Zahl speziell zur Arztwahl gibt es noch nicht, das Verhalten ist aber angrenzend da.',
        'Das eigentliche Spiel bei Praxen sind die Bewertungen. Nicht die Masse zählt, sondern Qualität und Frische: rund eine neue Bewertung pro Woche hält das Profil lebendig.',
        'Das Heilmittelwerbegesetz (§ 3 HWG) begrenzt, was eine Praxis behaupten darf. Sachlich, indikationsbezogen und prozessorientiert formuliert bleibt erstaunlich viel erlaubt.',
        'Beiträge in Magazinen und Fachjournalen über die Praxis sind der stärkste E-E-A-T-Hebel. Das macht fast keine Praxis, also ist hier am meisten zu holen.',
        'Bewertungen sind das schwächste medizinische Signal. Stärker wirken Fachgesellschaft und Leitlinie, Studienlage und der offizielle Ärztekammer-Eintrag.',
      ]}
      sections={[
        {
          id: 'ki-arztempfehlung',
          heading: 'So sieht eine KI-Arztempfehlung aus',
          intro:
            'Fragt man Gemini, welcher Chiropraktiker in Hamburg gut ist, kommt keine Linkliste, sondern eine Empfehlung mit konkreten Namen und Stadtteilen. Genau diese zwei bis fünf Plätze entscheiden, wen der Patient kontaktiert. Wer nicht genannt wird, existiert für diese Anfrage nicht.',
          table: {
            headers: ['Genannte Praxis', 'Stadtteil', 'Begründung der KI'],
            rows: [
              [
                'Felix Chiropraxis',
                'Bahrenfeld',
                'Ganzheitlicher Ansatz, Faszien- und Atlastherapie, Patienten loben die ausführliche Diagnostik',
              ],
              [
                'Balance Rückenzentrum',
                'Innenstadt / Neustadt',
                'Zentrale Lage, amerikanische Chiropraktik, oft schnelle Hilfe bei akuten Beschwerden',
              ],
              [
                'Chiropraktik Eimsbüttel',
                'Eimsbüttel / Sternschanze',
                'Sanfte Justierungen, betreut die 1. Volleyballfrauen des ETV, Adresse für Sportverletzungen',
              ],
              [
                'Chiro Chris',
                'Rotherbaum',
                'Moderne Chiropraktik, stressfreie Atmosphäre, Transparenz während der Behandlung',
              ],
              [
                'Café of Life Chiropraktik Center',
                'Wellingsbüttel',
                'Anlaufstelle im Hamburger Norden, spezielle Protokolle, seit vielen Jahren etabliert',
              ],
            ],
            caption:
              'Transkript der Gemini-Antwort auf die Frage nach einem guten Chiropraktiker in Hamburg. Sichtbar werden Praxen mit gepflegten, gut bewerteten Profilen, nicht die mit der schönsten Website.',
            note:
              'Die KI schloss mit einem praktischen Hinweis: bei akuten Schmerzen gleich zwei oder drei Praxen anrufen, und vorher die Abrechnung klären, weil viele als Privat- oder Selbstzahlerpraxis arbeiten.',
          },
          warning: {
            title: 'Ehrlich eingeordnet',
            text:
              'Das ist eine allgemeine KI-Antwort, kein Mandanten-Screenshot. Für den Medizinbereich veröffentlichen wir keine Patienten- oder Praxisdaten. Aber genau dieses Muster, zwei bis fünf namentlich genannte Praxen, ist der Grund, warum sich KI-Sichtbarkeit für Praxen lohnt: Es geht um einen der wenigen verbliebenen Empfehlungsplätze.',
          },
        },
        {
          id: 'problem',
          heading: 'Das Problem: Patienten fragen die KI, bevor sie googeln',
          intro:
            'Die Patientenreise hat sich verschoben. Früher: Google-Suche, Jameda lesen, anrufen. Heute tippen viele ihre Frage direkt in ChatGPT, Gemini oder Perplexity und nehmen die Antwort als neutrale Empfehlung.',
          chart: {
            variant: 'row',
            title: 'Gesundheitsrecherche in Deutschland, Bitkom Digital Health 2025',
            axis: { unit: ' %', title: 'Anteil der Befragten' },
            highlight: 'peak',
            points: [
              { label: 'recherchiert Gesundheitsfragen online (alle Befragten)', value: 73 },
              { label: 'hat dafür schon einen KI-Chatbot genutzt (alle Befragten)', value: 45 },
              { label: 'versteht Symptome mit KI besser als mit klassischer Suche (KI-Nutzer)', value: 50 },
              { label: 'vertraut den Chatbot-Antworten grundsätzlich (KI-Nutzer)', value: 55 },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Aussage', 'Anteil'] },
            caption:
              'Befragung vom 20.11.2025, n=1.145. Die beiden unteren Werte beziehen sich auf die Teilgruppe der KI-Nutzer, nicht auf alle Befragten.',
            source: {
              href: 'https://www.bitkom.org/Presse/Presseinformation/Digital-Health',
              label: 'Bitkom, Digital Health 2025',
            },
          },
          paragraphs: [
            'Ehrliche Einordnung zur Zahl, die überall kursiert: Eine belastbare deutsche Statistik mit der Aussage, X Prozent der unter 35-Jährigen wählten ihren Arzt über ChatGPT, existiert bislang nicht. Solche Zahlen werden oft frei behauptet. Belegbar ist die angrenzende Verhaltensänderung: Die Recherche zu Symptomen und Gesundheitsthemen wandert in die KI, und von dort ist es ein kurzer Schritt zur Frage nach einer Praxis in der Nähe.',
            'Deine Praxis ist exzellent, aber die KI weiß das nicht. Zufriedene Patienten, ein voller Wartebereich und ein guter Ruf im Stadtteil sind für ein Sprachmodell unsichtbar, solange sie sich nicht in maschinenlesbaren, konsistenten und frischen Signalen niederschlagen. Genau diese Signale baut dieser Guide auf, ohne das Heilmittelwerbegesetz zu verletzen.',
          ],
        },
        {
          id: 'was-zieht',
          heading: 'Was bei Hamburger Praxen wirklich zieht',
          intro:
            'Wir haben mit mehreren Praxen in Hamburg gearbeitet, und Medizin ist ein anderes Spiel als jede andere Branche. Vier Dinge entscheiden am stärksten, und keines davon ist eine schöne Startseite.',
          steps: [
            {
              title: 'Bewertungen sind das Spiel, und Frische schlägt Masse',
              text:
                'Der wichtigste Hebel ist das Bewertungsmanagement: neue Bewertungen sammeln und die Note hoch halten. Dabei zählt nicht die Anzahl, sondern Qualität und vor allem Aktualität. Eine neue Bewertung pro Woche reicht, damit Google die Praxis als lebendig einstuft, als Ort, an dem aktuell Menschen behandelt werden. Für KI-Systeme funktioniert das genauso.',
            },
            {
              title: 'Stagnierende Profile fallen zu Recht heraus',
              text:
                'Es gibt viele Praxen mit vielen alten Bewertungen, die keine neuen Patienten mehr aufnehmen, weil sie voll sind. Solche Profile gehören nicht in die erste Empfehlung, und Google wie KI behandeln sie auch so. Wer kontinuierlich frische Signale liefert, rückt nach vorne.',
            },
            {
              title: 'Magazine und Journale sind der E-E-A-T-Turbo',
              text:
                'Am stärksten zahlen Magazine und Fachjournale auf das E-E-A-T-Profil ein, die über die Praxis schreiben. Eine unabhängige Quelle wiegt weit mehr als jeder Selbsttext auf der eigenen Website. Und kaum eine Praxis optimiert überhaupt für KI, schon gar nicht über Medienarbeit. Genau das ist die Lücke.',
            },
            {
              title: 'HWG ist weniger einschränkend, als alle denken',
              text:
                'In der Praxis verbietet das Heilmittelwerbegesetz nicht viel von dem, was eine Praxis sagen will. Sie muss nicht tief in Patientendetails gehen. Es reicht zu zeigen, wie gut die Praxis auf neue Patienten vorbereitet ist, was im Alltag passiert und welche Schwerpunkte sie hat. Da ist enorm viel Spielraum, ganz ohne Rechtsverstoß.',
            },
          ],
        },
        {
          id: 'hwg',
          heading: 'HWG-konforme KI-Sichtbarkeit: was du schreiben darfst',
          intro:
            'Das Heilmittelwerbegesetz ist der Grund, warum medizinische KI-Sichtbarkeit anders funktioniert als für jede andere Branche. Drei Paragraphen sind für Praxis-Websites und KI-Inhalte relevant.',
          definitions: [
            {
              term: '§ 3 HWG',
              definition:
                'Verbot irreführender Werbung. Keine Heilversprechen, kein Eindruck eines sicher zu erwartenden Erfolgs.',
            },
            {
              term: '§ 11 HWG',
              definition:
                'Grenzen der Publikumswerbung. Unter anderem keine Vorher-Nachher-Bilder bei Schönheitsoperationen ohne medizinische Notwendigkeit.',
            },
            {
              term: '§ 9 HWG',
              definition:
                'Werbung für Fernbehandlung nur, wenn kein persönlicher Arztkontakt erforderlich ist und fachliche Standards eingehalten werden.',
            },
          ],
        },
        {
          id: 'formulierungstabelle',
          heading: 'Formulierungstabelle: riskant vs. HWG-bewusst',
          intro:
            'Die meisten Wettbewerber reden über Sichtbarkeit. Kaum jemand übersetzt das Medizinwerberecht in nutzbare Textregeln. Diese Tabelle macht genau das.',
          table: {
            headers: ['Riskant / problematisch', 'HWG-bewusst formuliert'],
            rows: [
              [
                'Wir heilen Ihre Rückenschmerzen dauerhaft.',
                'Wir untersuchen die Ursache Ihrer Rückenschmerzen und besprechen geeignete Behandlungsmöglichkeiten.',
              ],
              [
                'Garantiert schmerzfrei.',
                'Wir arbeiten mit schonenden Verfahren und besprechen Möglichkeiten zur Schmerzlinderung individuell.',
              ],
              [
                'Die beste Hautarztpraxis in Hamburg.',
                'Dermatologische Praxis in Hamburg mit Schwerpunkt Hautkrebsvorsorge, Akne, Rosazea und ästhetischer Dermatologie.',
              ],
              [
                'Unsere Behandlung wirkt bei jedem Patienten.',
                'Ob eine Behandlung geeignet ist, hängt von Diagnose, Befund und individuellen Faktoren ab.',
              ],
              [
                'Keine Risiken, keine Nebenwirkungen.',
                'Mögliche Risiken und Nebenwirkungen werden vor der Behandlung ärztlich besprochen.',
              ],
              [
                'Vorher-nachher: perfektes Ergebnis nach Filler.',
                'Bei ästhetischen Behandlungen beraten wir individuell zu Möglichkeiten, Grenzen und Risiken.',
              ],
              [
                'Nie wieder Angst vorm Zahnarzt.',
                'Wir nehmen uns Zeit für Angstpatientinnen und Angstpatienten und erklären jeden Behandlungsschritt transparent.',
              ],
              [
                'ChatGPT empfiehlt uns als beste Praxis.',
                'Wir stellen strukturierte, sachliche Informationen bereit, damit Patienten und digitale Suchsysteme unsere Leistungen, Schwerpunkte und Erreichbarkeit besser einordnen können.',
              ],
            ],
            caption:
              'Links typische Heilversprechen und Überlegenheitsbehauptungen, die nach § 3 HWG problematisch sind. Rechts steht inhaltlich dasselbe, aber sachlich, indikationsbezogen und diagnoseabhängig.',
            note: 'Keine Rechtsberatung. Im Zweifel die Formulierung anwaltlich prüfen lassen.',
          },
        },
        {
          id: 'vertrauensleiter',
          heading: 'Die KI-Vertrauensleiter für Arztpraxen',
          intro:
            'Für medizinische KI-Sichtbarkeit reicht es nicht, viele Bewertungen zu haben. KI-Systeme gewichten medizinische Autoritätssignale unterschiedlich stark. Von Stufe 1 nach Stufe 4 nimmt das medizinische Gewicht ab, der Bewertungs-Charakter zu.',
          steps: [
            {
              title: 'Fachgesellschaft / Leitlinie',
              text:
                'Stufe 1, stärkstes Signal: Leitlinien-Konsens auf höchster Ebene. Die AWMF beschreibt offizielle Leitlinien als Entscheidungshilfen für Ärztinnen, Ärzte, Gesundheitspersonal und Patienten. Wer Inhalte an anerkannte Leitlinien anlehnt, baut das belastbarste Vertrauenssignal auf.',
            },
            {
              title: 'PubMed / Studienlage',
              text:
                'Stufe 2: peer-reviewte medizinische Literatur. PubMed umfasst über 40 Millionen Nachweise. Die Verknüpfung der eigenen Schwerpunkte mit wissenschaftlichen Quellen ist ein starkes Evidenzsignal, das im richtigen Kontext stehen muss.',
            },
            {
              title: 'Ärztekammer / offizieller Eintrag',
              text:
                'Stufe 3: Identitäts- und Legitimitätssignal aus Kammereintrag, Facharzttitel und Approbation. Es bestätigt, dass die Ärztin oder der Arzt fachlich und offiziell zuordenbar ist.',
            },
            {
              title: 'Jameda / Google / Patientenbewertungen',
              text:
                'Stufe 4, Reputationssignal: nützlich und wichtig für die lokale Sichtbarkeit, medizinisch aber schwächer. Hier wirken Frische und Konsistenz am stärksten.',
            },
          ],
          quote:
            'KI-Sichtbarkeit für Arztpraxen entsteht nicht durch mehr Keywords, sondern durch eine saubere Autoritätskette: Leitlinie, Studienlage, offizielles Arztprofil, konsistente Patientenbewertungen, strukturierte Praxisdaten.',
        },
        {
          id: 'jameda-doctolib',
          heading: 'Jameda, Doctolib und wie viele Bewertungen wirklich zählen',
          intro:
            'Für KI-Empfehlungen zählen beide großen Plattformen, weil KI-Systeme sie als strukturierte Vertrauens- und Reputationssignale lesen. Die Rollen sind unterschiedlich.',
          cards: [
            {
              title: 'Doctolib = Termin-Infrastruktur',
              text:
                'Der dominante Akteur bei Terminbuchung und Praxis-Workflow. Laut Doctolib Digital Health Report 2026 (1.000 Patienten, über 400 Ärzte und MFA) finden nur 35 Prozent der Patienten die Terminsuche einfach.',
            },
            {
              title: 'Jameda = Reputation & Verzeichnis',
              text:
                'Die große Bewertungs- und Arztsuche-Plattform. Nach eigenen Angaben mehr als 411.000 Ärzte und Gesundheitsfachpersonen, über 1 Million buchbare Termine und über 2 Millionen verifizierte Patientenfeedbacks. Die vzbv hat 2025 beide Portale als kommerzielle Terminplattformen mit Transparenzproblemen eingeordnet.',
            },
          ],
          chart: {
            variant: 'row',
            title: 'Terminsuche aus Patientensicht, Doctolib Digital Health Report 2026',
            axis: { unit: ' %', title: 'Anteil der befragten Patienten' },
            highlight: 'peak',
            points: [
              { label: 'würde einen KI-Terminassistenten nutzen', value: 72 },
              { label: 'hat eine Behandlung verschoben, weil die Suche zu mühsam war', value: 64 },
              { label: 'findet die Terminsuche einfach', value: 35 },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Aussage', 'Anteil'] },
            caption:
              'Befragung von 1.000 Patienten sowie über 400 Ärzten und MFA. Die Zustimmung zum KI-Terminassistenten war der höchste Wert aller getesteten KI-Anwendungen.',
          },
        },
        {
          id: 'bewertungs-richtwert',
          heading: 'Bewertungs-Richtwert (beobachtet, keine offizielle Regel)',
          intro:
            'Es gibt keine offizielle Schwelle, ab der eine Praxis sichtbar wird. Aus den öffentlich sichtbaren Hamburger Jameda-Kategorieseiten (Hautärzte, Zahnärzte) lässt sich aber ein praktischer Korridor ableiten.',
          table: {
            headers: ['Bewertungsanzahl', 'Einordnung'],
            rows: [
              ['0 bis 5', 'Schwaches Vertrauenssignal, wirkt dünn, außer in Nischen mit wenig Konkurrenz'],
              ['10 bis 25', 'Grundglaubwürdigkeit, das Profil wirkt nicht mehr leer'],
              ['30 bis 60', 'Lokal glaubwürdig, in den meisten Fachrichtungen wettbewerbsfähig'],
              ['75 bis 120', 'Starkes Vertrauenssignal, typisch für etablierte Praxen'],
              ['150+', 'Kategorieführer-Signal in umkämpften Fachrichtungen'],
              ['250 bis 400+', 'Dominanter Reputations-Ausreißer'],
            ],
            caption:
              'Faustregel: 30 als Minimum für sichtbare Glaubwürdigkeit, 75 als stark, 150 als echter Wettbewerbsvorteil.',
            note:
              'Wichtiger als der Endstand ist die Frische: rund eine neue Bewertung pro Woche hält das Profil aktiv.',
          },
        },
        {
          id: 'schema',
          heading: 'MedicalClinic- und Physician-Schema: die Praxis maschinenlesbar machen',
          intro:
            'Schema.org hat eigene Typen für MedicalClinic (die Praxis) und Physician (die Ärztin oder den Arzt). Damit verknüpfst du Praxis, Arztprofil und Behandlungsseiten zu einer Kette, die KI-Systeme ohne Interpretation lesen.',
          definitions: [
            {
              term: 'MedicalClinic',
              definition:
                'Die Praxis als Entität: Name, medicalSpecialty, Adresse, Telefon, URL, Öffnungszeiten und sameAs. Verbindet die Praxis mit ihren Identitätsdaten.',
            },
            {
              term: 'Physician',
              definition:
                'Die Ärztin oder der Arzt, per employee an die Praxis gehängt: Name, medicalSpecialty, affiliation, memberOf und sameAs zu Kammer- und Portalprofilen.',
            },
            {
              term: 'Behandlungsseiten',
              definition:
                'Per knowsAbout an den Physician gehängt: Hautkrebsvorsorge, Akne, Rosazea, Allergiediagnostik. Jede Seite bleibt HWG-konform formuliert.',
            },
          ],
          note:
            'Hinweis zur Google-Bing-Doppelnatur: Google sagt offiziell, spezielles Schema sei für seine KI-Funktionen nicht nötig. Für Bing und damit die ChatGPT-Websuche sind klar definierte, verknüpfte Entitäten ein messbarer Vorteil. Das Markup schadet Google nie und hilft der anderen Hälfte der KI-Landschaft.',
        },
        {
          id: 'json-ld-beispiel',
          heading: 'JSON-LD-Beispiel für eine Praxisseite',
          intro:
            'Eine vollständige Praxis-Entität mit verknüpftem Arztprofil. Domain, Telefonnummer und Portal-URLs ersetzen, den Rest übernehmen.',
          code: {
            label: 'MedicalClinic mit eingebettetem Physician',
            lines: [
              '{',
              '  "@context": "https://schema.org",',
              '  "@type": "MedicalClinic",',
              '  "@id": "https://www.beispiel-praxis.de/#clinic",',
              '  "name": "Praxis Dr. Beispiel",',
              '  "url": "https://www.beispiel-praxis.de/",',
              '  "telephone": "+49-40-123456",',
              '  "medicalSpecialty": "Dermatologic",',
              '  "address": {',
              '    "@type": "PostalAddress",',
              '    "streetAddress": "Musterstraße 12",',
              '    "postalCode": "20095",',
              '    "addressLocality": "Hamburg",',
              '    "addressCountry": "DE"',
              '  },',
              '  "sameAs": [',
              '    "https://www.jameda.de/...",',
              '    "https://www.doctolib.de/...",',
              '    "https://www.google.com/maps?cid=..."',
              '  ],',
              '  "employee": {',
              '    "@type": "Physician",',
              '    "name": "Dr. med. Max Beispiel",',
              '    "medicalSpecialty": "Dermatology",',
              '    "sameAs": [',
              '      "https://www.aerztekammer-hamburg.org/...",',
              '      "https://www.jameda.de/..."',
              '    ]',
              '  }',
              '}',
            ],
          },
        },
        {
          id: 'fuenf-faktoren',
          heading: '5 Faktoren, die KI-Empfehlungen für Ärzte beeinflussen',
          intro:
            'Nicht alle Signale sind gleich stark. Diese fünf entscheiden, ob deine Praxis von ChatGPT, Perplexity und Google AI genannt wird.',
          steps: [
            {
              title: 'Bewertungsprofil mit Frische (Google, Jameda, Doctolib)',
              text:
                'Das stärkste lokale Signal. Entscheidend sind Gesamtnote (ab 4,5 wird es relevant), Anzahl (30 glaubwürdig, 75 stark) und vor allem Aktualität. Eine Praxis mit 200 Google-Bewertungen bei 4,7 und wöchentlichem Zulauf schlägt eine mit 12 alten Bewertungen bei 5,0.',
            },
            {
              title: 'Externe Erwähnungen (Magazine, Fachjournale, Presse)',
              text:
                'Der unterschätzte E-E-A-T-Hebel. Eine Erwähnung in einem Magazin, Fachjournal oder lokalen Medium zählt weit mehr als jeder Selbsttext. KI-Systeme cross-referenzieren: Taucht die Praxis nur auf der eigenen Seite auf, oder auch in unabhängigen Quellen?',
            },
            {
              title: 'Strukturierte Behandlungsseiten mit FAQ',
              text:
                'Eine Seite mit dem Titel Unsere Leistungen reicht nicht. KI-Systeme brauchen eigene, detaillierte Seiten pro Behandlung, jede mit den häufigsten Patientenfragen als FAQ. Diese Blöcke werden direkt als Antwortquelle zitiert, müssen aber HWG-konform bleiben.',
            },
            {
              title: 'Lokale Signale (NAP, Google Business Profil)',
              text:
                'Name, Adresse, Telefonnummer auf jeder Plattform identisch. Die spezifische Kategorie wählen, also die Fachrichtung statt Arzt, Öffnungszeiten aktuell halten, Praxisfotos hochladen. KI-Systeme nutzen das Google Business Profil als primäre lokale Datenquelle.',
            },
            {
              title: 'Offizielle Einträge und Verknüpfung (Ärztekammer, Schema)',
              text:
                'Kammereintrag, Facharzttitel und konsistente sameAs-Verknüpfung zwischen Website, Google, Jameda, Doctolib und Kammerprofil bilden die Autoritätskette der KI-Vertrauensleiter ab. Das liefern Bewertungen allein nicht.',
            },
          ],
        },
        {
          id: 'strategien',
          heading: '7 Strategien für Ärzte und Praxen',
          intro:
            'Nach Wirkung sortiert. Die erste kostet Prozessdisziplin, die zweite ist die größte offene Lücke im Markt.',
          steps: [
            {
              title: 'Bewertungen wöchentlich und plattformübergreifend sammeln',
              text:
                'Richte einen festen Prozess ein: nach Behandlungsabschluss eine freundliche Erinnerung per QR-Code in der Praxis oder per Mail. Ziel ist kein Massen-Push, sondern ein steter Fluss von etwa einer Bewertung pro Woche, parallel auf Google, Jameda und Doctolib. Reagiere auf jede Bewertung innerhalb von 48 Stunden, sachlich und ohne Patientendaten.',
            },
            {
              title: 'Medienarbeit für E-E-A-T aufbauen',
              text:
                'Der stärkste Hebel und der am wenigsten genutzte. Biete dich als Experte für saisonale Gesundheitsthemen an (Hamburger Abendblatt, NDR, MOPO, Gesundheitsmagazine), schreibe Gastbeiträge, lass über Praxis-Schwerpunkte berichten. Jede unabhängige Erwähnung wiegt mehr als jeder Eigentext.',
            },
            {
              title: 'Behandlungsseiten HWG-konform strukturieren',
              text:
                'Pro Kernleistung eine eigene Unterseite: Was ist die Behandlung, für wen ist sie geeignet, wie läuft sie ab, Kasse oder IGeL, plus FAQ-Block. Durchgehend sachlich und diagnoseabhängig formuliert, siehe Formulierungstabelle. Eine eigene Seite pro Leistung statt einer Zeile in einer Übersicht.',
            },
            {
              title: 'Google Business Profil mit Fachkategorie pflegen',
              text:
                'Wähle die spezifischste Kategorie, also die Fachrichtung statt Arzt, fülle Leistungen, Versicherungen, Barrierefreiheit und Sprachen aus, lade echte Praxisfotos hoch und veröffentliche regelmäßig Posts. Das Profil ist die erste Anlaufstelle für lokale KI-Empfehlungen.',
            },
            {
              title: 'Autoritätskette über Schema.org abbilden',
              text:
                'MedicalClinic für die Praxis, Physician für jeden Arzt, verknüpft per employee und knowsAbout, mit sameAs auf Google, Jameda, Doctolib und Ärztekammer. So liest die KI Fachgebiet, Standort und Legitimität ohne Interpretation.',
            },
            {
              title: 'Doctolib- und Jameda-Profile als KI-Datenquelle behandeln',
              text:
                'Vollständiges Profil mit Foto, Qualifikationen, Leistungsspektrum und Sprechzeiten. Auf Doctolib die Online-Terminbuchung aktivieren, das ist ein starkes Nutzersignal. Ein ausgefülltes Profil schlägt ein leeres, unabhängig von der Note.',
            },
            {
              title: 'Patientenratgeber mit sichtbarer Autorenschaft',
              text:
                'Beantworte typische Patientenfragen verständlich und fachlich fundiert, und kennzeichne jeden Artikel mit Autorenbox: Name, Facharzttitel, Foto, Verlinkung zum Kammerprofil. Das ist Googles Frage nach dem Urheber in Reinform und zugleich direkter Antwort-Content für die KI.',
            },
          ],
        },
        {
          id: 'praxis-typen',
          heading: 'Praxis-Typen und ihre KI-Chancen',
          intro:
            'Eine Vorbemerkung: Es gibt keine Top-Fachrichtung in der KI. Gefragt wird, was Patienten gerade brauchen, und das verteilt sich über alle Fachgebiete. Die Hebel unterscheiden sich aber je nach Praxisstruktur.',
          cards: [
            {
              title: 'Hausarztpraxis',
              text:
                'Stärkstes Signal: lokale Nähe und Verfügbarkeit. Optimiere für stadtteilspezifische Anfragen wie Hausarzt Hamburg-Eimsbüttel. Betone die Aufnahme neuer Patienten, kurze Wartezeiten und Online-Terminvergabe. Vorsorgeseiten sind idealer FAQ-Content.',
            },
            {
              title: 'Zahnarztpraxis',
              text:
                'Eigene Seiten für Implantologie, Prophylaxe und ästhetische Zahnmedizin. Preistransparenz bei IGeL ist ein starkes Differenzierungsmerkmal. Vorher-Nachher-Bilder nur mit Einwilligung und im HWG-Rahmen. Bewertungen mit konkreten Behandlungsberichten wirken besonders.',
            },
            {
              title: 'Facharztpraxis',
              text:
                'Hier zählt der Behandlungsschwerpunkt, nicht das generische Fachgebiet: Kniechirurg Hamburg schlägt Orthopäde Hamburg. Publikationen, Kongressbeiträge und externe Erwähnungen haben das höchste Gewicht.',
            },
            {
              title: 'MVZ / Gemeinschaftspraxis',
              text:
                'Größenvorteil nutzen: mehr Ärzte bedeuten mehr Expertise-Signale und mehr Bewertungen. Individuelle Physician-Profile per Schema neben dem Gesamtprofil anlegen und untereinander mit den Leistungsseiten verlinken. So kann die KI Praxis und einzelne Ärzte empfehlen.',
            },
          ],
        },
        {
          id: 'hamburg',
          heading: 'KI-Sichtbarkeit für Hamburger Praxen',
          intro:
            'Hamburg hat über 12.000 niedergelassene Ärzte. In Eppendorf, Winterhude und der HafenCity ist der Wettbewerb um Patienten besonders intensiv. Genau dort entscheidet KI-Sichtbarkeit über neue Patienten.',
          paragraphs: [
            'Die Ärztekammer Hamburg, das UKE als universitäre Referenz und die dichte Facharzt-Landschaft schaffen ein Umfeld, in dem sich medizinisches E-E-A-T gut aufbauen lässt. Eine Erwähnung im Hamburger Ärzteblatt oder eine Kooperation mit dem UKE ist ein starkes lokales Vertrauenssignal.',
          ],
          cards: [
            {
              title: 'Stadtteil-Optimierung',
              text:
                'Hamburg-Patienten suchen stadtteilspezifisch. Optimiere für Zahnarzt Hamburg-Eppendorf, nicht nur für Zahnarzt Hamburg. KI-Systeme verstehen Hamburger Stadtteile und gewichten lokale Nähe stark. Nenne den Stadtteil auf der Website, im Google Business Profil und in Bewertungsantworten.',
            },
            {
              title: 'Hamburger Medienlandschaft nutzen',
              text:
                'Hamburger Abendblatt, MOPO, NDR Hamburg Journal und Hamburg1 suchen regelmäßig medizinische Experten. Ein Interview oder Gastbeitrag wird von KI-Systemen als starkes lokales Autoritätssignal gewertet.',
            },
            {
              title: 'Ärztekammer und Fachgesellschaften',
              text:
                'Mitgliedschaft in der Ärztekammer Hamburg, Auflistung im Arztregister der KV Hamburg und Mitgliedschaften in Fachgesellschaften sind Signale, die KI-Systeme erkennen. Stelle sicher, dass jeder Eintrag vollständig, aktuell und per sameAs mit deiner Website verknüpft ist.',
            },
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Nutzen Patienten wirklich KI für die Arztsuche?',
          a: 'Laut Bitkom Digital Health 2025 (20.11.2025, n=1.145) recherchieren 73 % der Menschen in Deutschland Gesundheitsfragen online, 45 % haben dafür schon einen KI-Chatbot wie ChatGPT, Gemini oder Copilot genutzt. Eine saubere Zahl speziell zur Arztwahl gibt es noch nicht. Belegbar ist die angrenzende Verhaltensänderung: 50 % der KI-Nutzer verstehen Symptome damit besser als mit klassischer Suche.',
        },
        {
          q: 'Bewegen Jameda- und Doctolib-Bewertungen wirklich KI-Empfehlungen?',
          a: 'In der Arbeit mit Hamburger Praxen ist das Bewertungsmanagement das zentrale Spiel. Wichtig ist, auf allen relevanten Plattformen präsent zu sein und die Bewertungen konsistent und frisch zu halten. Entscheidend ist nicht die reine Masse, sondern Qualität und Aktualität: etwa eine neue Bewertung pro Woche signalisiert Google und KI-Systemen, dass die Praxis aktiv ist.',
        },
        {
          q: 'Wie viele Bewertungen braucht eine Praxis, um in der KI sichtbar zu sein?',
          a: 'Es gibt keine offizielle Schwelle. Aus den sichtbaren Hamburger Jameda-Kategorieseiten lässt sich ein Richtwert ableiten: ab etwa 30 Bewertungen wirkt ein Profil glaubwürdig, ab 75 stark, ab 150 ist es in umkämpften Fachrichtungen ein echter Wettbewerbsvorteil. Beobachteter Richtwert, keine offizielle Ranking-Regel.',
        },
        {
          q: 'Was darf eine Praxis laut HWG online über sich schreiben?',
          a: 'Das Heilmittelwerbegesetz (§ 3 HWG) verbietet irreführende Werbung, vor allem Heilversprechen und garantierte Erfolge. In der Praxis bleibt aber viel erlaubt: Eine Praxis darf sachlich, indikationsbezogen und prozessorientiert beschreiben, welche Schwerpunkte sie hat, wie eine Behandlung abläuft und wie gut sie auf neue Patienten vorbereitet ist. Vermeiden sollte man Garantien und unbelegte Überlegenheitsbehauptungen.',
        },
        {
          q: 'Wie oft sollte eine Praxis neue Bewertungen sammeln?',
          a: 'Eine neue Bewertung pro Woche reicht, um das Profil lebendig zu halten. Viele Praxen haben viele alte Bewertungen, aber nichts Frisches. Stagnierende Profile wirken auf Google und KI-Systeme so, als nehme die Praxis keine neuen Patienten mehr auf, und werden seltener in den ersten Empfehlungen genannt.',
        },
        {
          q: 'Welche Fachrichtung wird in KI am häufigsten gefragt?',
          a: 'Es gibt keinen klaren Spitzenreiter. Gefragt wird, was Patienten gerade brauchen, und das verteilt sich über alle Fachrichtungen. Statt auf eine vermeintliche Top-Fachrichtung zu setzen, lohnt es sich, die eigenen Behandlungsschwerpunkte konkret und auffindbar zu machen.',
        },
        {
          q: 'Hilft Schema.org MedicalClinic-Markup meiner Praxis?',
          a: 'Ja. Mit MedicalClinic für die Praxis und Physician für die Ärztin oder den Arzt werden Fachgebiet, Adresse, Öffnungszeiten und verknüpfte Profile maschinenlesbar. Das Markup bildet eine saubere Kette von Praxis über Arztprofil bis zu den Behandlungsseiten und reduziert Interpretationsfehler in KI-Empfehlungen.',
        },
      ]}
      sourcesTitle="Quellen"
      sources={[
        {
          label: 'Bitkom (20.11.2025)',
          text: 'Digital Health 2025: 45 Prozent nutzen KI-Chatbots für Gesundheitsfragen, n=1.145.',
          href: 'https://www.bitkom.org/Presse/Presseinformation/Digital-Health',
        },
        {
          label: '§ 3 HWG',
          text: 'Verbot irreführender Heilmittelwerbung, Gesetze im Internet.',
          href: 'https://www.gesetze-im-internet.de/heilmwerbg/__3.html',
        },
        {
          label: '§ 11 HWG',
          text: 'Grenzen der Publikumswerbung, unter anderem Vorher-Nachher-Bilder, Gesetze im Internet.',
          href: 'https://www.gesetze-im-internet.de/heilmwerbg/__11.html',
        },
        {
          label: 'AWMF',
          text: 'Leitlinien für Ärztinnen, Ärzte und Gesundheitspersonal.',
          href: 'https://www.awmf.org/leitlinien',
        },
        {
          label: 'Jameda',
          text: 'Über 411.000 Ärzte und Gesundheitsfachpersonen, über 2 Millionen verifizierte Patientenfeedbacks, eigene Angabe.',
          href: 'https://www.jameda.de/',
        },
        {
          label: 'Schema.org',
          text: 'MedicalClinic und Physician, Markup-Dokumentation.',
          href: 'https://schema.org/MedicalClinic',
        },
        {
          label: 'Ärztekammer Hamburg',
          text: 'Arztverzeichnis und Qualitätssicherung.',
          href: 'https://www.aerztekammer-hamburg.org/',
        },
      ]}
      relatedTitle="Verwandte Guides:"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'E-E-A-T für KI-Sichtbarkeit',
          description:
            'Wie Experience, Expertise, Authoritativeness und Trust für die KI nachweisbar werden.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'Autorität',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPTs Empfehlungssystem funktioniert und wie du dort sichtbar wirst.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Tools, Metriken und Prozesse zur Messung deiner KI-Sichtbarkeit.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messen',
        },
      ]}
      ctaTitle="Werden Ihre Patienten von der KI zu Ihnen geschickt?"
      ctaText="Wir prüfen, wie ChatGPT, Perplexity und Google AI deine Praxis aktuell darstellen, und was du HWG-konform tun kannst, damit die KI dich empfiehlt. Kostenlos, in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Praxis-Analyse anfragen"
    />
  );
}

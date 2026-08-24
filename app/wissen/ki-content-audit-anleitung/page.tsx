import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KIContentAuditPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-content-audit-anleitung"
      breadcrumbLabel="KI-Content-Audit Anleitung"
      eyebrow="Anleitung"
      title="Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt"
      description="Du sitzt auf 500 Blogposts und keiner wird von ChatGPT zitiert. Das ist, als hättest du eine Bibliothek voller Bücher, in einer Sprache, die niemand mehr spricht. Zeit für eine ehrliche Inventur."
      publishedAt="2026-04-02"
      modifiedAt="2026-08-24"
      summaryTitle="TL;DR: Wer keine Zeit hat"
      summaryItems={[
        '80 Prozent deines Contents ist für KI wertlos. Nicht böse gemeint, einfach Realität. Die meisten Blogartikel vor 2025 wurden für Google geschrieben, nicht für KI.',
        'Ein KI-Content-Audit bewertet Zitierbarkeit, nicht Rankings. Andere Kriterien, anderes Scoring, andere Konsequenzen.',
        '3 Aktionen pro Seite: updaten, zusammenführen oder löschen. Es gibt kein "mal schauen". Jede Seite bekommt eine Entscheidung.',
        'Starte mit den Top 50, nicht mit allen 500. Perfektionismus ist der Feind des Fortschritts. Und deines Verstandes.',
        'Dieser Guide hat ein Scoring-Template: 12 Kriterien, 0 bis 2 Punkte pro Kriterium. Kein Bauchgefühl, nur Fakten.',
      ]}
      sections={[
        {
          id: 'warum-problem',
          heading: 'Warum dein Content ein Problem hat (auch wenn Google ihn liebt)',
          intro:
            'Du hast alles richtig gemacht. Keywords recherchiert, Artikel geschrieben, Backlinks aufgebaut. Dein Blog rankt. Dein Marketing-Team ist stolz. Und dann fragt jemand ChatGPT nach deinem Thema, und du existierst nicht.',
          stat: 'Gartner (2024): bis 2028 werden Marken über 50 Prozent ihres organischen Traffics durch KI-gestützte Suche verlieren. Wer seinen Content nicht für KI-Zitierbarkeit optimiert, verliert nicht morgen, aber übermorgen.',
          paragraphs: [
            'Das ist ungefähr so, als hättest du jahrelang eine Telefonbuch-Anzeige optimiert, während die Welt auf Smartphones umgestiegen ist. Nicht falsch gewesen, aber jetzt halt auch nicht mehr richtig.',
            'Das Problem ist nicht, dass dein Content schlecht ist. Das Problem ist, dass er für eine Welt geschrieben wurde, die gerade aufhört zu existieren. Google-Rankings allein reichen nicht mehr. KI-Systeme brauchen andere Strukturen, andere Formate, andere Signale.',
            'Die gute Nachricht: du musst nicht alles neu schreiben. Du musst nur wissen, was bleiben darf, was überarbeitet werden muss und was in den digitalen Schredder gehört. Genau dafür gibt es den KI-Content-Audit.',
          ],
        },
        {
          id: 'klassisch-vs-ki',
          heading: 'Klassischer Content-Audit vs. KI-Content-Audit',
          intro:
            'Zwei Audits, zwei Welten. Der klassische schaut, ob Google dich findet. Der KI-Audit schaut, ob ChatGPT dich empfiehlt. Ratet mal, welcher in Zukunft relevanter wird.',
          table: {
            headers: ['Kriterium', 'Klassischer Audit', 'KI-Content-Audit'],
            rows: [
              ['Ziel', 'Bessere Rankings', 'KI-Zitierungen'],
              ['Bewertungsfokus', 'Keywords, Traffic, Backlinks', 'Struktur, Quellen, Extrahierbarkeit'],
              [
                'Strukturanalyse',
                'H1-Tags, Meta-Descriptions',
                'Answer-First, H2- und H3-Hierarchie, Schema-Markup',
              ],
              ['Qualitätssignal', 'Verweildauer, Bounce Rate', 'Quellenangaben, E-E-A-T, Eindeutigkeit'],
              ['Aktualität', 'Nice-to-have', 'Überlebenswichtig'],
              ['Duplicate Content', 'Canonical Tags setzen', 'Zusammenführen oder löschen'],
              ['Vergleich', 'TÜV-Prüfung für Autos', 'Prüfung, ob dein Auto überhaupt fliegen kann'],
            ],
            caption:
              'Sieben Kriterien, sieben unterschiedliche Antworten. Beide Audits ergänzen sich, aber nur der rechte prüft Zitierbarkeit.',
          },
        },
        {
          id: 'scoring',
          heading: 'Das KI-Content-Scoring: 12 Kriterien, 0 bis 2 Punkte',
          intro:
            'Kein Bauchgefühl, kein "fühlt sich gut an". Jede Seite bekommt eine Zahl, und diese Zahl entscheidet, was passiert. Kalt? Ja. Effektiv? Absolut.',
          table: {
            headers: [
              'Scoring-Template: KI-Zitierbarkeit',
              'Prüffrage, bewertet mit 0 (nicht vorhanden), 1 (teilweise) oder 2 (voll erfüllt)',
            ],
            rows: [
              ['Answer-First-Struktur', 'Steht die Kernantwort in den ersten 2 bis 3 Sätzen jedes Abschnitts?'],
              [
                'H2- und H3-Hierarchie',
                'Hat jeder Abschnitt eine beschreibende Zwischenüberschrift, die als Frage oder Statement funktioniert?',
              ],
              [
                'Quellenangaben',
                'Sind Aussagen mit konkreten Quellen, Studien oder Daten belegt, und nicht nur mit "Experten sagen"?',
              ],
              [
                'Aktualität',
                'Ist ein Veröffentlichungs- oder Aktualisierungsdatum sichtbar? Sind alle Informationen aktuell?',
              ],
              ['Schema-Markup', 'Ist Article-, FAQ- oder HowTo-Schema korrekt implementiert?'],
              [
                'Eindeutigkeit',
                'Gibt es klare Aussagen statt vager Formulierungen? Wird "es kommt darauf an" immer mit Kontext ergänzt?',
              ],
              [
                'Semantische Vollständigkeit',
                'Sind alle relevanten Entitäten zum Thema abgedeckt, also Begriffe, Tools und Konzepte?',
              ],
              [
                'Extrahierbare Formate',
                'Werden Listen, Tabellen oder nummerierte Schritte verwendet, wo es sinnvoll ist?',
              ],
              [
                'Unique Insights',
                'Bietet der Content eigene Daten, Erfahrungen oder Perspektiven, die andere nicht haben?',
              ],
              [
                'Autoreninfo & E-E-A-T',
                'Ist ein Autor mit nachweisbarer Expertise zugeordnet? Sind Erfahrungssignale erkennbar?',
              ],
              [
                'Interne Verlinkung',
                'Ist der Artikel Teil eines Topic Clusters? Verlinkt er auf und von verwandten Inhalten?',
              ],
              [
                'Technische Zugänglichkeit',
                'Können GPTBot, ClaudeBot und PerplexityBot die Seite crawlen? Kein reines JavaScript-Rendering?',
              ],
            ],
            caption:
              'Zwölf Kriterien, maximal 24 Punkte. Zwei Kriterien sind technisch, zehn sind redaktionell.',
            note:
              'Bewertung: 20 bis 24 Punkte = KI-ready, Feintuning reicht. 12 bis 19 Punkte = Überarbeitung nötig, gute Basis. 5 bis 11 Punkte = grundlegende Überarbeitung oder Zusammenführung. 0 bis 4 Punkte = löschen oder komplett neu schreiben. Nicht weinen, machen.',
          },
        },
        {
          id: 'audit-prozess',
          heading: 'Der 5-Schritte-Audit-Prozess: Von der Bestandsaufnahme zur Aktion',
          intro:
            'Kein "analysiere erstmal 6 Monate lang". Du brauchst Ergebnisse, keine Beschäftigungstherapie. Dieser Prozess funktioniert für 50 oder 5.000 Seiten.',
          steps: [
            {
              title: 'Inventar erstellen, was hast du überhaupt?',
              text: 'Die meisten Unternehmen wissen nicht, wie viele Seiten sie haben. Ernsthaft. Sie haben "irgendwas um die 200", und wenn du Screaming Frog drüberlaufen lässt, sind es 847. Davon 300 mit Thin Content, 50 Duplikate und 12, die seit 2019 nicht aktualisiert wurden.',
              bullets: [
                'Screaming Frog oder Sitemap exportieren, alle URLs in eine Tabelle.',
                'Traffic-Daten aus GA4 zuordnen, letzte 6 Monate.',
                'Letztes Update-Datum pro Seite erfassen.',
                'Content-Typ kategorisieren: Blog, Landingpage, FAQ, Guide, Produkt.',
              ],
            },
            {
              title: 'Priorisieren, die Top 50 zuerst',
              text: 'Du willst nicht alle 500 Seiten gleichzeitig bewerten. Das ist, als würdest du versuchen, 500 Patienten gleichzeitig zu operieren. Sortiere nach zwei Kriterien: Traffic, höchster zuerst, und Geschäftsrelevanz, also Seiten, die direkt Umsatz generieren. Die Schnittmenge sind deine Top 50.',
              bullets: [
                'Top 25 nach Traffic sortieren.',
                'Top 25 nach Geschäftsrelevanz, also Conversion-Seiten und Money Pages.',
                'Duplikate zusammenführen, eine Liste mit 50 Seiten.',
              ],
            },
            {
              title: 'Scoring, jede Seite durch die 12 Kriterien jagen',
              text: 'Jetzt wird es ernst. Öffne jede der 50 Seiten und bewerte sie mit dem Scoring-System oben. 0, 1 oder 2 Punkte pro Kriterium, maximal 24 Punkte. Sei brutal ehrlich. Dein Content wird es dir nicht übel nehmen, er hat keine Gefühle. Im Gegensatz zu dir, wenn ChatGPT ihn ignoriert.',
              bullets: [
                'Pro Seite rund 5 Minuten einplanen, 50 Seiten sind also etwa 4 Stunden.',
                'Score in die Tabelle eintragen.',
                'Zusätzlich ChatGPT und Perplexity nach dem Thema fragen: wirst du zitiert?',
              ],
            },
            {
              title: 'Entscheidung, updaten, zusammenführen oder löschen',
              text: 'Jede Seite bekommt genau eine Aktion. Kein "schauen wir mal", kein "lass ich erstmal so". Das ist der Moment, in dem du dich vom digitalen Messie-Syndrom verabschiedest.',
              bullets: [
                '20 bis 24 Punkte, Feintuning: Schema-Markup ergänzen, Quellenangaben aktualisieren, FAQ hinzufügen. Zeitaufwand 30 bis 60 Minuten pro Seite.',
                '12 bis 19 Punkte, Überarbeitung: Answer-First umstrukturieren, Quellen einbauen, Hierarchie überarbeiten, Entitäten ergänzen. Zeitaufwand 2 bis 4 Stunden pro Seite.',
                '5 bis 11 Punkte, Zusammenführen: schwache Einzelartikel zu einem starken Pillar-Artikel kombinieren, 301-Redirects setzen. Zeitaufwand 1 Tag pro Cluster.',
                '0 bis 4 Punkte, Löschen: kein Traffic, keine Relevanz, keine Rettung. 301-Redirect auf die nächstbeste Seite.',
              ],
            },
            {
              title: 'Umsetzen, und zwar jetzt, nicht nächstes Quartal',
              text: 'Die Audit-Ergebnisse verrotten schneller als ein offener Joghurt im Sommer. Plane die Umsetzung sofort. Zuerst die Quick Wins, also die Feintuning-Seiten, dann die Überarbeitungen, zuletzt die Zusammenführungen. Löschen kannst du zwischendurch, das geht schnell.',
              bullets: [
                'Woche 1 bis 2: alle Feintuning-Seiten optimieren.',
                'Woche 3 bis 6: Überarbeitungen durchführen, 2 bis 3 Seiten pro Woche.',
                'Woche 7 bis 8: Zusammenführungen und Löschungen abschließen.',
                'Woche 12: Ergebnisse prüfen, hat sich die KI-Zitierung verbessert?',
              ],
            },
          ],
        },
        {
          id: 'todsuenden',
          heading: 'Die 5 Content-Todsünden: Was KI-Systeme garantiert ignorieren',
          intro:
            'Du kannst das beste Scoring-System der Welt haben, wenn dein Content diese Sünden begeht, hilft kein Audit.',
          cards: [
            {
              title: 'Die 500-Wörter-Einleitung vor der eigentlichen Antwort',
              text: '"In der heutigen schnelllebigen digitalen Welt ...": wenn dein Artikel so anfängt, hat ChatGPT bereits aufgehört zu lesen. Das ist das Content-Äquivalent von jemandem, der 10 Minuten braucht, um zu erklären, warum er gleich etwas Wichtiges sagen wird. KI extrahiert die ersten 2 bis 3 Sätze. Wenn dort keine Antwort steht, existiert dein Artikel nicht.',
            },
            {
              title: 'Laut Experten, ohne zu sagen, welche Experten',
              text: 'Welche Experten? Wo? Wann? "Studien zeigen", welche Studien? Das ist, als würdest du in einer Prüfung schreiben, irgendein schlauer Typ habe das mal gesagt. Keine Quelle bedeutet keine Glaubwürdigkeit und damit keine Zitierung. KI-Systeme bevorzugen verifizierbare Aussagen. "Laut Gartner (2024)" wird zitiert, "laut Experten" wird ignoriert.',
            },
            {
              title: 'Content von 2022 ohne Update, für immer eingefroren',
              text: 'Dein "Ultimativer Guide zu SEO 2022" ist jetzt so aktuell wie ein Reiseführer für die DDR. Perplexity und Google AI bevorzugen aktuelle Quellen. ChatGPT gewichtet in neueren Trainingsläufen aktuellere Inhalte höher. Ein Artikel ohne sichtbares Update-Datum ist für KI-Systeme verdächtig. Entweder aktualisieren oder begraben.',
            },
            {
              title: 'Drei Artikel zum gleichen Thema, die sich gegenseitig kannibalisieren',
              text: 'Du hast "Was ist SEO?", "SEO erklärt" und "SEO für Anfänger", drei Artikel, die alle das Gleiche sagen, nur mit unterschiedlichen Überschriften. Das ist, als würdest du drei Bewerbungen für die gleiche Stelle schicken, jede mit einem anderen Foto. Zusammenführen. Ein starker Artikel schlägt drei schwache. Immer.',
            },
            {
              title: '3.000 Wörter Fließtext ohne eine einzige Zwischenüberschrift',
              text: 'Herzlichen Glückwunsch, du hast einen Roman geschrieben. Leider lesen KI-Systeme keine Romane. Sie parsen Inhalte anhand von Struktur: H2, H3, Listen, Tabellen. Ein Textblock mit 3.000 Wörtern ist für ein Sprachmodell wie ein Puzzle ohne Bild auf der Schachtel. Theoretisch lösbar, praktisch ignoriert.',
            },
          ],
        },
        {
          id: 'praxisbeispiel',
          heading: 'Praxisbeispiel: So sieht ein KI-Audit-Ergebnis aus',
          intro:
            'Nehmen wir eine typische B2B-Website mit 200 Seiten. Nach dem Audit sieht die Verteilung erfahrungsgemäß so aus, und ja, das ist deprimierend. Aber es ist ehrlich.',
          chart: {
            variant: 'row',
            title: 'Typische Verteilung nach dem Audit, 200 Seiten',
            axis: { title: 'Anteil der Seiten', unit: ' %' },
            highlight: 'peak',
            points: [
              { label: 'Löschen (0 bis 4 Punkte)', short: 'Löschen', value: 35 },
              { label: 'Zusammenführen (5 bis 11 Punkte)', short: 'Merge', value: 30 },
              { label: 'Überarbeiten (12 bis 19 Punkte)', short: 'Update', value: 25 },
              { label: 'KI-ready (20 bis 24 Punkte)', short: 'KI-ready', value: 10 },
            ],
            table: { label: 'Werte anzeigen', heads: ['Aktion', 'Anteil'] },
            caption:
              'Erfahrungswert aus Audits mittelgroßer B2B-Sites, keine repräsentative Messung. Die Zahlen zeigen die Größenordnung: zwei Drittel der Seiten arbeiten gegen dich, nicht für dich.',
          },
          bullets: [
            'Löschen, rund 35 Prozent: Thin Content, veraltete Blogposts, Duplikate.',
            'Zusammenführen, rund 30 Prozent: schwache Einzelartikel, die als Cluster stärker wären.',
            'Überarbeiten, rund 25 Prozent: gute Basis, braucht Answer-First, Quellen und Schema.',
            'KI-ready, rund 10 Prozent: diese Seiten dürfen bleiben, wie sie sind.',
          ],
          quote:
            'Die typische B2B-Website hat nach dem KI-Audit 65 Prozent Ballast. Das klingt brutal, ist es auch. Aber nach der Bereinigung hast du 35 Prozent Content, der tatsächlich Wert generiert, statt 200 Seiten, die sich gegenseitig die Sichtbarkeit stehlen.',
        },
        {
          id: 'quick-wins',
          heading: 'Quick-Win-Checkliste: Was du heute noch ändern kannst',
          intro:
            'Für alle, die den vollständigen Audit-Prozess noch planen, aber trotzdem heute schon etwas tun wollen. Diese 8 Maßnahmen brauchen keine Analyse, nur Disziplin.',
          bullets: [
            'Aktualisierungsdatum auf alle Seiten: zeige sichtbar, wann der Content zuletzt aktualisiert wurde. Dauert 5 Minuten und bringt sofort Aktualitätssignale.',
            'Top-10-Seiten: ersten Absatz umschreiben. Die Antwort muss in den ersten 2 bis 3 Sätzen stehen. Alles davor ist Zeitverschwendung, für den Leser und für die KI.',
            'FAQ-Sektion zu jeder wichtigen Seite hinzufügen: 5 bis 7 echte Nutzerfragen mit präzisen Antworten. FAQPage-Schema nicht vergessen.',
            'Article-Schema-Markup implementieren, mit Autor, Datum und Publisher. Gibt KI-Systemen die Metadaten, die sie brauchen.',
            'robots.txt prüfen: GPTBot, ClaudeBot und PerplexityBot erlaubt? Wenn nicht, wunderst du dich zu Recht, warum KI dich nicht kennt.',
            '3 Quellenangaben pro Artikel ergänzen. Echte Quellen, echte Studien, echte Zahlen, nicht "Studien zeigen".',
            'Offensichtliche Duplikate zusammenführen. Wenn du zwei Artikel zum gleichen Thema hast, mach einen draus. Heute, nicht nächste Woche.',
            'ChatGPT- und Perplexity-Test: frag beide nach deinem Kernthema. Wirst du erwähnt? Wird ein Konkurrent erwähnt? Wenn ja, lies seinen Content und verstehe, warum.',
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Was ist ein KI-Content-Audit und warum brauche ich einen?',
          a: 'Ein KI-Content-Audit bewertet deine bestehenden Inhalte danach, ob KI-Systeme wie ChatGPT, Perplexity und Google AI Overviews sie als Quelle nutzen würden. Im Unterschied zu einem klassischen SEO-Audit geht es nicht um Rankings und Keywords, sondern um Zitierbarkeit, Struktur und Aktualität. Du brauchst einen, weil laut Gartner bis 2028 über 50 Prozent des organischen Traffics durch KI-gestützte Suche verloren gehen, und nur zitierbarer Content diesen Verlust kompensiert.',
        },
        {
          q: 'Wie oft sollte ich einen KI-Content-Audit durchführen?',
          a: 'Mindestens einmal pro Quartal. KI-Systeme entwickeln sich schnell weiter, und Content, der vor drei Monaten gut performte, kann heute schon irrelevant sein. Ein großer Audit alle 6 Monate mit kleineren Check-ups dazwischen ist der beste Ansatz. Bei schnelllebigen Branchen wie Tech oder Finance empfiehlt sich ein monatlicher Quick-Check der Top-20-Seiten.',
        },
        {
          q: 'Wie viele Seiten sollte ich beim ersten Audit bewerten?',
          a: 'Starte mit deinen Top-50-Seiten nach Traffic und Geschäftsrelevanz. Die Versuchung, gleich alle 500 Seiten zu auditieren, ist groß, aber unrealistisch. Fokus schlägt Vollständigkeit. Wenn die Top 50 optimiert sind, nimmst du die nächsten 50. So hast du in 3 Monaten die wichtigsten Inhalte abgearbeitet, statt 6 Monate in einer Tabelle zu verschwinden.',
        },
        {
          q: 'Was ist der Unterschied zwischen einem klassischen Content-Audit und einem KI-Content-Audit?',
          a: 'Ein klassischer Content-Audit bewertet SEO-Performance: Rankings, Traffic, Keyword-Abdeckung, Backlinks. Ein KI-Content-Audit bewertet KI-Zitierbarkeit: Answer-First-Struktur, Quellenangaben, Schema-Markup, semantische Vollständigkeit und ob der Content als vertrauenswürdige Quelle extrahierbar ist. Beide Audits ergänzen sich, ein Content, der für KI optimiert ist, performt in der Regel auch bei Google besser.',
        },
        {
          q: 'Soll ich schlechten Content löschen oder überarbeiten?',
          a: 'Kommt auf den KI-Audit-Score an. Seiten mit 0 bis 3 Punkten im Scoring (von 12 Kriterien) und wenig Traffic: löschen oder redirecten. Seiten mit 4 bis 7 Punkten: überarbeiten, wenn sie thematisch relevant sind. Seiten mit 8 Punkten und mehr: Feintuning. Grundregel: lieber 50 exzellente Seiten als 500 mittelmäßige. KI-Systeme bevorzugen Qualität über Quantität, und Google seit dem Helpful Content Update ebenfalls.',
        },
        {
          q: 'Welche Tools brauche ich für einen KI-Content-Audit?',
          a: 'Grundlegend: eine Tabelle (Google Sheets reicht), Screaming Frog für technische Daten, Google Analytics für Traffic-Zahlen und ChatGPT oder Perplexity zum manuellen Testen der Zitierbarkeit. Fortgeschritten: Ahrefs Brand Radar oder Semrush AI Visibility für automatisiertes KI-Zitierungs-Tracking. Ein Schema-Markup-Validator für die technische Prüfung. Die meisten Unternehmen kommen mit den Grundtools aus.',
        },
        {
          q: 'Wie lange dauert ein KI-Content-Audit für 100 Seiten?',
          a: 'Mit dem Scoring-System aus diesem Guide: 2 bis 3 Arbeitstage für die Bewertung, plus 1 Tag für die Priorisierung und Aktionsplanung. Die eigentliche Optimierung dauert je nach Umfang 2 bis 8 Wochen. Wichtig: der Audit selbst ist nur die Diagnose. Die Therapie, also das Umschreiben, Zusammenführen und Löschen, ist der eigentliche Aufwand.',
        },
      ]}
      relatedTitle="Weiterführende Guides"
      relatedArticles={[
        {
          title: 'AI Content Strategie',
          description:
            'Wie du neuen Content erstellst, den KI-Systeme zitieren. Der nächste Schritt nach dem Audit.',
          href: '/wissen/ai-content-strategie',
          tag: 'Content',
        },
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description:
            'Das große Bild: Was KI-Sichtbarkeit bedeutet und wie alle Teile zusammenpassen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'E-E-A-T für KI-Sichtbarkeit',
          description:
            'Warum Erfahrung, Expertise und Vertrauenswürdigkeit für KI-Zitierungen entscheidend sind.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description:
            'Wie du trackst, ob dein Audit-Ergebnis tatsächlich zu mehr KI-Zitierungen führt.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Keine Lust, 500 Seiten selbst zu bewerten?"
      ctaText="Wir machen den KI-Content-Audit für dich: Scoring, Priorisierung, Aktionsplan, in 5 Werktagen statt 5 Wochen. Brutal ehrlich."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlosen KI-Content-Audit anfragen"
    />
  );
}

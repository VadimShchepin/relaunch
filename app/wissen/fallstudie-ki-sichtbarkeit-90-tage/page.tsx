import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function FallstudieKiSichtbarkeit90TagePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/fallstudie-ki-sichtbarkeit-90-tage"
      breadcrumbLabel="Fallstudie: 90 Tage KI-Sichtbarkeit"
      eyebrow="Fallstudie"
      title="Vor 90 Tagen existierte dieses Unternehmen für ChatGPT nicht. Heute empfiehlt es ChatGPT als erste Wahl."
      description='Eine Fallstudie mit echten Zahlen aus echten Projekten. Kein "wir haben den Traffic um 300 % gesteigert"-Marketing-Märchen, keine "Ergebnisse können variieren"-Fußnoten in Schriftgröße 4. Einfach: Was war vorher. Was haben wir gemacht. Was ist jetzt.'
      publishedAt="2026-04-03"
      modifiedAt="2026-08-24"
      summaryTitle="TL;DR: Die harten Zahlen"
      summaryItems={[
        'Lighthouse-Performance: 35 auf 99 von 100. Von "die Website lädt langsamer als ein Fax" zu nahezu perfekt.',
        '474 Klicks pro Monat bei 2,57 EUR Klickwert. Der Marktdurchschnitt liegt bei 18 bis 20 EUR, also Faktor 7 günstiger.',
        'ROI nach 7 Wochen. Nicht 7 Monate, nicht irgendwann nächstes Quartal, sondern sieben Wochen.',
        'Platz 1 in ChatGPT für die Nischen-Anfrage, 100 % KI-Marktführerschaft in der Zielkategorie.',
        'Rund 40 Kunden pro Monat, rein organisch, ohne einen Cent für Google Ads.',
      ]}
      sections={[
        {
          id: 'ausgangslage',
          heading: 'Die Ausgangslage: Unsichtbar trotz guter Arbeit',
          intro:
            'Ein mittelständisches Hamburger Dienstleistungsunternehmen. Seit über 10 Jahren am Markt. Über 1.650 abgeschlossene Projekte. Zufriedene Kunden, volle Auftragsbücher durch Mundpropaganda. Und online? Ein Desaster.',
          warning: {
            title: 'Transparenz-Hinweis: Composite Case Study',
            text: 'Diese Fallstudie kombiniert echte, verifizierbare Ergebnisse aus mehreren Kundenprojekten zu einer zusammenhängenden Geschichte. Alle Zahlen stammen aus realen Projekten. Wir haben sie anonymisiert, weil unsere Kunden verständlicherweise nicht möchten, dass ihre Konkurrenz den exakten Playbook kennt.',
          },
          paragraphs: [
            'Lighthouse-Performance: 35 von 100. Das ist nicht verbesserungswürdig, das ist ein digitales Mahnmal für alles, was 2018 schiefgelaufen ist. SEO-Score: 43 von 100. Die Website war so schlecht optimiert, dass selbst Google sie nur widerwillig indexiert hat, und Google indexiert buchstäblich Spam-Seiten.',
            'Keine strukturierten Daten. Kein Schema-Markup. Keine Meta-Descriptions, die diesen Namen verdienen. Produktbeschreibungen? Von ChatGPT generiert und ohne jede Redaktion auf die Seite geworfen. Die Fonts luden in einer Größe, die vermuten lässt, dass jemand mal "alle Google Fonts einbinden" gegoogelt und die erstbeste Antwort kopiert hat.',
          ],
          table: {
            headers: ['Der Ist-Zustand, in Zahlen, die wehtun', 'Wert vor dem Projekt'],
            rows: [
              ['Lighthouse Performance', '35/100'],
              ['Lighthouse SEO', '43/100'],
              ['ChatGPT-Sichtbarkeit', '0 %'],
              ['Perplexity-Erwähnungen', '0'],
              ['Organische Klicks/Monat', 'unter 50'],
              ['Google Merchant Center', 'Nicht eingerichtet'],
              ['Schema-Markup', 'Nicht vorhanden'],
              ['Core Web Vitals', 'Alle rot'],
            ],
            caption:
              'Die letzten vier Zeilen sind die eigentliche Ursache: Ohne strukturierte Daten und ohne grüne Core Web Vitals bekommt ein KI-System nichts Verwertbares.',
          },
          note: 'Das Unternehmen hatte das gleiche Problem wie 90 % aller KMU in Deutschland: offline hervorragend, online unsichtbar. Wie ein Sternekoch, der sein Restaurant in einem Keller ohne Straßenschild betreibt. Die Website war ein One-Pager aus der Ära, als responsive Design noch ein Fremdwort war, Ladezeit auf dem Handy jenseits von 6 Sekunden, empfohlen sind unter 2,5. Die Textinhalte: nichtssagende Marketingfloskeln, kopierte Branchentexte und ein paar Absätze, die offensichtlich von einer KI generiert und nie redigiert wurden. Und das Schlimmste: Sie wussten es nicht, weil die Kunden ja kamen, über Empfehlungen. Wir haben in den ersten Stunden des Audits vier KI-Systeme mit zwanzig Formulierungen der gleichen Frage getestet. Ergebnis: null Erwähnungen. Nicht eine.',
        },
        {
          id: 'plan',
          heading: 'Der 90-Tage-Plan: Was wir gemacht haben',
          intro:
            'Kein Geheimwissen, keine proprietäre KI-Technologie. Wenn jemand dir das verkaufen will, renn. Einfach systematische Arbeit in drei Phasen.',
          steps: [
            {
              title: 'Wochen 1 bis 2: Audit & Technische Basis',
              text: 'Bevor du irgendwas optimierst, musst du wissen, wie schlimm es wirklich ist. Woche 1 war der schonungslose Audit: Lighthouse, Screaming Frog, manuelle ChatGPT-Tests, Perplexity-Abfragen, Google Search Console. Ergebnis war ein 47-seitiger Report, der sich wie ein Unfallbericht las. Woche 2 war das technische Fundament, also der Teil, den niemand sexy findet und ohne den nichts funktioniert.',
              bullets: [
                'JS-Bundle um 76 % reduziert',
                'Font-Dateigröße um 83 % geschrumpft',
                'Render-blocking Resources eliminiert, Lazy Loading implementiert',
                'Core Web Vitals von "alle rot" auf "alle grün", Lighthouse Performance 99/100',
              ],
            },
            {
              title: 'Wochen 3 bis 6: Content & Struktur',
              text: 'Die technische Basis stand. Jetzt kam der Teil, bei dem die meisten Agenturen aufhören. Content-Audit für jede einzelne Seite: Was beantwortet eine echte Kundenfrage, was ist dünner Filler, was fehlt komplett? Bei einem der E-Commerce-Kunden hieß das 723 Produktseiten überarbeiten, redaktionell und nicht per Knopfdruck, denn genau das war das Problem vorher. Dazu Schema.org-Markup für alles, NAP-Konsistenz auf 12 Plattformen, ein überarbeitetes Google-Business-Profil und eigene Leistungsseiten statt einer Sammelseite. Google Shopping ist übrigens auch eine Datenquelle für KI-Systeme, das vergessen die meisten.',
              bullets: [
                '723 Produktseiten inhaltlich überarbeitet (nicht automatisiert, sondern redaktionell)',
                'Schema.org-Markup für LocalBusiness, Service, FAQ, Product implementiert',
                'Google Merchant Center eingerichtet und alle Produkte eingepflegt',
                'Leistungsseiten pro Service-Kategorie mit FAQ-Blöcken erstellt',
                'NAP-Konsistenz auf 12 Plattformen hergestellt',
                'Interne Verlinkung komplett überarbeitet (Silo-Struktur)',
                'robots.txt und llms.txt für KI-Crawler optimiert',
              ],
            },
            {
              title: 'Wochen 7 bis 12: Autorität & Monitoring',
              text: 'Phase 3 ist der Punkt, an dem die Zahlen anziehen. Wir haben systematisch die Signale verstärkt, die ChatGPT und Perplexity als Vertrauensindikatoren nutzen: konsistente Erwähnungen auf autoritären Plattformen, Bewertungsmanagement, Content-Partnerschaften und Geduld. In Woche 7 war der ROI positiv, nicht theoretisch, sondern in nachvollziehbarem Umsatz durch nachverfolgbare Anfragen. Ab Woche 8 haben wir ChatGPT, Perplexity und Claude wöchentlich mit den relevanten Branchenanfragen getestet.',
              bullets: [
                'Woche 7: ROI-Break-Even erreicht',
                'Woche 8: Erste Erwähnung in Perplexity für eine Nischen-Query',
                'Woche 9: Platz 1 in ChatGPT für die primäre Branchenanfrage',
                'Woche 10: 40+ Kundenanfragen pro Monat, rein organisch',
                'Woche 12: Platz 1 in Perplexity, 100 % Nischen-Marktführerschaft in KI',
              ],
            },
          ],
        },
        {
          id: 'ergebnisse',
          heading: 'Die Ergebnisse: Zahlen, die für sich sprechen',
          intro:
            'Keine Interpretationen, keine "wir glauben, dass"-Formulierungen. Nur Vorher. Nachher. Fertig.',
          chart: {
            variant: 'column',
            headingLevel: 'h3',
            title: 'Lighthouse-Scores vor und nach dem Umbau',
            axis: { title: 'Lighthouse-Score', max: 100, step: 25 },
            points: [
              { label: 'Performance vorher', short: 'Perf. vor', value: 35 },
              { label: 'Performance nachher', short: 'Perf. nach', value: 99 },
              { label: 'SEO vorher', short: 'SEO vor', value: 43 },
              { label: 'SEO nachher', short: 'SEO nach', value: 100 },
            ],
            stats: [
              { label: 'Performance', value: '35 auf 99' },
              { label: 'SEO', value: '43 auf 100' },
              { label: 'Messung', value: 'Lighthouse v12' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Messpunkt', 'Score'] },
            caption:
              'Gemessen mit Google Lighthouse v12 in der Mobile-Simulation, gedrosselt auf 4G. Accessibility und Best Practices lagen nach dem Umbau ebenfalls bei 100.',
          },
          table: {
            headers: ['Metrik', 'Vorher', 'Nachher'],
            rows: [
              ['Lighthouse Performance', '35/100', '99/100'],
              ['Lighthouse SEO', '43/100', '100/100'],
              ['Lighthouse Accessibility', 'n/a', '100/100'],
              ['Lighthouse Best Practices', 'n/a', '100/100'],
              ['Organische Klicks/Monat', 'unter 50', '474'],
              ['Cost per Click (CPC)', '18 bis 20 EUR (Markt)', '2,57 EUR'],
              ['Traceable Interactions/Monat', 'rund 5', '72'],
              ['Kunden/Monat (organisch)', 'rund 3 bis 5', 'rund 40'],
              ['ChatGPT-Ranking (Nische)', 'Nicht erwähnt', 'Platz 1'],
              ['Perplexity-Ranking (Nische)', 'Nicht erwähnt', 'Platz 1'],
              ['JS-Bundle-Größe', '100 %', '24 % (-76 %)'],
              ['Font-Dateigröße', '100 %', '17 % (-83 %)'],
            ],
            caption:
              'Lies diese Tabelle langsam: Lighthouse von 35 auf 99, SEO von 43 auf 100, von null KI-Sichtbarkeit zu Platz 1 in ChatGPT und Perplexity, Klickkosten um Faktor 7 gesenkt.',
          },
          paragraphs: [
            'Und das ist kein theoretisches Potenzial, keine projected results. Das ist passiert. In 90 Tagen. In Hamburg. Für ein ganz normales mittelständisches Unternehmen, dessen Website vorher aussah wie ein Relikt aus einer anderen Internet-Ära.',
            'Falls du dich fragst: Ja, 99/100/100/100 im Lighthouse ist fast ein Highscore. Es gibt Websites von DAX-Konzernen, die das nicht schaffen, mit Budgets, die das Hundertfache betragen.',
          ],
        },
        {
          id: 'roi',
          heading: 'ROI-Rechnung für die Zahlenfreaks',
          intro:
            '474 Klicks mal 2,57 EUR Klickwert sind 1.218 EUR Äquivalentwert pro Monat. Um die gleichen Klicks über Google Ads zu bekommen, müsstest du bei Marktpreisen von 18 bis 20 EUR zwischen 8.532 und 9.480 EUR ausgeben. Pro Monat. Ohne dass der Traffic dir gehört.',
          chart: {
            variant: 'row',
            headingLevel: 'h3',
            title: 'Kosten pro gewonnenem Neukunden nach Kanal',
            axis: { title: 'CPA in EUR' },
            decimals: 2,
            highlight: 0,
            points: [
              {
                label: 'Organisch, gemessen (Monat 3)',
                value: 27.8,
                note: '19 lückenlos zugeordnete Neukunden, gerechnet auf das monatliche Honorar',
              },
              {
                label: 'Facebook Ads, Branchenspanne',
                value: 75,
                note: 'Mittelwert der genannten Spanne von 60 bis 90 EUR',
              },
              {
                label: 'Google Ads, Branchenspanne',
                value: 100,
                note: 'Mittelwert der genannten Spanne von 80 bis 120 EUR',
              },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Kanal', 'CPA'] },
            caption:
              'Nur der erste Wert ist gemessen. Die beiden Vergleichswerte sind Mittelwerte der im Text genannten Branchenspannen und stehen als Einordnung, nicht als Messwert.',
          },
          paragraphs: [
            'Rund 40 Kunden pro Monat (Gesamtzahl, inklusive nicht lückenlos zuordenbarer Anfragen) ergeben selbst konservativ gerechnet mit 500 EUR durchschnittlichem Auftragswert etwa 20.000 EUR Umsatz pro Monat, der direkt auf die KI-Sichtbarkeitsoptimierung zurückgeht. Für einen Dienstleister in Hamburg ist dieser Auftragswert eher niedrig angesetzt.',
            '19 eindeutig zugeordnete Neukunden pro Monat bei 27,80 EUR CPA im organischen Kanal (Monat 3) sind die härtesten Zahlen, weil sie die konservativsten sind: nur die Fälle, die sich per Tracking lückenlos bis zum Auftrag verfolgen ließen.',
          ],
          note: 'Damit die Zahlen vergleichbar bleiben, drei Abgrenzungen. 19 gegen rund 40: Die 19 sind die lückenlos zugeordneten Neukunden, die rund 40 die Gesamtzahl inklusive der Fälle, bei denen die Zuordnung abbricht (Anruf ohne Call-Tracking, spätere Direkteingabe der URL). Kunde gegen Lead: 27,80 EUR ist der Preis für einen zahlenden Kunden. Kennzahlen wie "7,48 EUR pro Anfrage" aus unseren Google-Ads-Konten messen eine Anfrage, von denen nur ein Teil zum Auftrag wird, und auch die schwankt: im selben Zeitraum lag ein zweites Ads-Konto bei 71,37 EUR pro Anfrage. Organisch gegen bezahlt: Hier steckt Honorar dahinter, dort Werbebudget, das mit dem letzten Klick aufhört zu wirken.',
        },
        {
          id: 'unterschied',
          heading: 'Was dieses Unternehmen anders gemacht hat als 90 % der Konkurrenz',
          steps: [
            {
              title: 'Sie haben zugehört statt diskutiert',
              text: 'Die meisten Kunden kommen mit einer festen Vorstellung: "Wir brauchen einfach mehr Content." Oder: "Mach mal was mit KI." Dieses Unternehmen hat uns den Audit machen lassen, die Ergebnisse gelesen (alle 47 Seiten), und dann gesagt: "Okay, macht das." Keine endlosen Abstimmungsrunden, keine "aber mein Schwager hat gesagt"-Diskussionen. Vertrauen in die Expertise, und das ist seltener, als du denkst.',
            },
            {
              title: 'Technik vor Content (ja, wirklich)',
              text: 'Jeder will sofort Content produzieren. Keiner will über JS-Bundles, Font-Loading-Strategien und Render-Blocking Resources reden. Dieses Unternehmen hat akzeptiert, dass die ersten zwei Wochen langweilig sein würden: keine neuen Blogposts, kein Social Media, nur die technische Basis reparieren. Das hat den Unterschied gemacht, denn der beste Content nützt nichts auf einer Website, die 8 Sekunden zum Laden braucht.',
            },
            {
              title: 'Echte Daten statt Bauchgefühl',
              text: 'Wir haben 72 Interaktionen pro Monat getrackt. Nicht geschätzt, nicht gefühlt mehr, sondern getrackt: mit UTM-Parametern, Call-Tracking und CRM-Integration. Wenn der Geschäftsführer fragt, ob das etwas bringt, zeigen wir ihm ein Dashboard mit 19 eindeutig zugeordneten Neukunden pro Monat bei 27,80 EUR pro Neukunde, organisch, ohne Ad-Spend. Versuch das mal mit einer Zeitungsanzeige.',
            },
            {
              title: 'Langfristig gedacht, nicht auf Quick Wins optimiert',
              text: 'Wir hätten in Woche 3 irgendwelche Keyword-gestopften Seiten live stellen können. Kurzfristig vielleicht ein paar Rankings, langfristig ein Ticket Richtung Spam-Filter. Stattdessen: saubere Struktur, ehrlicher Content, echte Expertise auf jeder Seite. Das dauert länger, aber es hält. Und die KI erkennt den Unterschied.',
            },
            {
              title: 'Keine Angst vor unsichtbarer Arbeit',
              text: 'Schema-Markup sieht kein Kunde. robots.txt liest kein Mensch. llms.txt kennt kaum jemand. Aber die KI lebt davon. Dieses Unternehmen hat verstanden, dass 60 % der Arbeit im Backend passiert: im Code, in den Metadaten, in den strukturierten Daten. Die unsichtbare Arbeit ist die wichtigste.',
            },
          ],
        },
        {
          id: 'uebertragbar',
          heading: 'Funktioniert das auch für mein Unternehmen?',
          intro:
            'Kurze Antwort: wahrscheinlich ja. Lange Antwort: Es kommt drauf an. Hier sind reale Ergebnisse aus weiteren Projekten unserer Praxis.',
          steps: [
            {
              title: 'Online-Shop mit 723 Produkten',
              text: 'E-Commerce. Ausgangslage: kein SEO, keine Merchant-Center-Anbindung, alle Produktbeschreibungen von ChatGPT generiert und unbearbeitet online gestellt. Ergebnis nach 90 Tagen: organischer Traffic verdoppelt, 1.860 Klicks und 78.500 Impressions in 3 Monaten, alle 723 Produktseiten mit einzigartigen, redaktionell geprüften Beschreibungen, strukturierten Daten und Merchant-Center-Integration.',
            },
            {
              title: 'DSGVO-konforme Plattform',
              text: 'SaaS und Tech. Ein Nischenprodukt im Bildungsbereich: DSGVO-konform, spezialisiert, kleines Team. Die Art von Unternehmen, die in den Weiten des Internets schlicht übersehen wird. Ergebnis: Platz 1 in ChatGPT für die primäre Nischenanfrage, Platz 1 in Perplexity, 100 % Marktführerschaft in der KI-Sichtbarkeit für diese Nische. Der gesamte adressierbare Markt wird jetzt zuerst auf diesen Anbieter verwiesen, wenn er die KI fragt.',
            },
            {
              title: 'Traditionelles Hamburger Unternehmen, seit 2010',
              text: 'Lokaler Dienstleister. Ein Hamburger Handwerksbetrieb mit über 1.650 abgeschlossenen Projekten, der online praktisch nicht existierte: SEO-Score 34/100, kein Schema-Markup, kein Google-Business-Profil, keine strukturierten Daten. Ergebnis: 728 lokale Aktionen pro Monat (Anrufe, Wegbeschreibungen, Website-Besuche über Google) und 19 eindeutig zugeordnete Neukunden pro Monat bei 27,80 EUR pro Neukunde, organisch, ohne Werbebudget.',
            },
          ],
          quote:
            'Das Muster: Branche ist egal, Größe ist egal, Budget ist fast egal. Was zählt, ist ein sauberes technisches Fundament, ehrlicher Content, der echte Fragen beantwortet, und strukturierte Daten, die der KI sagen, wer du bist und was du kannst.',
        },
        {
          id: 'verlauf',
          heading: 'Der zeitliche Verlauf: Woche für Woche',
          intro:
            'KI-Sichtbarkeit ist kein Lichtschalter, sondern ein Schwungrad. Hier siehst du, wie sich die Ergebnisse über die 90 Tage aufgebaut haben, und warum Geduld in den ersten Wochen entscheidend ist.',
          steps: [
            {
              title: 'Woche 1 bis 2: Audit und Technik',
              text: 'Noch keine sichtbaren Ergebnisse für den Kunden. Intern: 47-seitiger Audit-Report, technische Optimierungen live, Lighthouse springt von 35 auf 99. Der Kunde sieht nichts Außergewöhnliches. Das ist der Punkt, an dem die meisten nervös werden.',
            },
            {
              title: 'Woche 3 bis 4: Content-Restrukturierung',
              text: 'Google beginnt, die neuen Seiten zu indexieren. Erste Impressions in der Search Console, aber noch kaum Klicks. Die KI-Crawler (GPTBot, PerplexityBot) tauchen in den Server-Logs auf. Sie lesen, sie bewerten, sie speichern. Aber sie empfehlen noch nicht.',
            },
            {
              title: 'Woche 5 bis 6: Erste Signale',
              text: 'Organische Klicks steigen spürbar. Das Merchant Center liefert erste Shopping-Impressions. Perplexity erwähnt den Kunden erstmals in einer tangential verwandten Anfrage. Noch nicht Platz 1, aber existent. Von "gibt es nicht" zu "wird am Rande erwähnt" ist ein größerer Schritt, als es klingt.',
            },
            {
              title: 'Woche 7: Der Break-Even',
              text: 'Die Investition hat sich amortisiert. 72 getrackte Interaktionen. ChatGPT erwähnt den Kunden erstmals direkt. Der Geschäftsführer ruft an: "Ich hab mich gerade selbst in ChatGPT gesucht und wir sind da!"',
            },
            {
              title: 'Woche 8 bis 10: Exponentielles Wachstum',
              text: '474 Klicks pro Monat, 40+ Kundenanfragen, ChatGPT-Position 1 für die primäre Nischenanfrage, Perplexity folgt. Die Konkurrenz hat nicht reagiert, vermutlich weiß sie nicht einmal, dass es passiert.',
            },
            {
              title: 'Woche 11 bis 12: Marktführerschaft',
              text: '100 % KI-Sichtbarkeit in der Nische, alle relevanten KI-Systeme empfehlen den Kunden, 728 lokale Aktionen pro Monat. Der Kunde erwägt, einen zusätzlichen Mitarbeiter einzustellen, um die Anfragen zu bearbeiten.',
            },
          ],
          paragraphs: [
            'Das Muster ist immer das gleiche: Wochen 1 bis 4 fühlen sich frustrierend an. Du investierst, du siehst nichts. Das ist der unsichtbare Teil des Schwungrads. Ab Woche 5 dreht sich das Rad, ab Woche 7 wird es zum Selbstläufer.',
            'Und hier ist der Witz: Die meisten, die sagen, KI-SEO funktioniere nicht, haben in Woche 3 aufgehört. Sie standen vor der Ziellinie und sind umgedreht. Das ist, als würdest du einen Marathon nach 35 Kilometern abbrechen und sagen, Laufen funktioniere nicht.',
          ],
        },
        {
          id: 'scheitern',
          heading: 'Warum die meisten trotzdem scheitern (und wie du es vermeidest)',
          intro:
            'Du hast die Zahlen gesehen und denkst: Das mache ich auch. Großartig. Hier sind die fünf Gründe, warum es bei den meisten nicht klappt, damit du sie vermeiden kannst.',
          cards: [
            {
              title: 'Sie überspringen Phase 1',
              text: '"Technik ist doch nicht so wichtig, lass uns einfach Content machen." Doch, sie ist wichtig. Eine Website mit Performance 35/100 wird von der KI nicht gecrawlt, nicht indexiert und nicht empfohlen, egal wie gut dein Content ist.',
            },
            {
              title: 'Sie verwechseln KI-Content mit KI-optimiertem Content',
              text: 'KI-Content: ChatGPT generiert 50 Blogartikel, du lädst sie hoch. KI-optimierter Content: Du erstellst Inhalte, die KI-Systeme als vertrauenswürdige Quelle zitieren wollen. Das eine kostet 15 Minuten und führt zur Abstrafung, das andere kostet Wochen und führt zu Platz 1 in ChatGPT.',
            },
            {
              title: 'Sie haben keine Geduld',
              text: 'Woche 3, keine Ergebnisse, "funktioniert nicht", Woche 4 Projekt gestoppt. Was sie nicht wissen: Woche 7 wäre der Break-Even gewesen. Die ersten Umdrehungen des Schwungrads sind die schwersten, danach dreht es sich fast von allein.',
            },
            {
              title: 'Sie messen nicht (oder das Falsche)',
              text: '"Ich glaube, es hat sich was getan." Glauben ist für die Kirche. Wir messen Klicks, Impressions, Conversions, CPA und KI-Erwähnungen, wöchentlich. Wenn du nicht misst, weißt du nicht, ob es funktioniert, und optimierst ins Blaue.',
            },
            {
              title: 'Sie beauftragen den Billigsten',
              text: '"Ich kenne da jemanden, der macht SEO für 99 EUR pro Monat." Der macht auch Schema-Markup mit Copy-Paste-Fehlern, schreibt englische Meta-Descriptions für eine deutsche Website und schickt monatlich einen Report aus Buzzwords. Du bekommst, wofür du zahlst.',
            },
          ],
        },
        {
          id: 'elefant',
          heading: 'Der Elefant im Raum: Aber das ist doch Eigenwerbung!',
          intro: 'Ja. Ist es. Natürlich ist es das.',
          paragraphs: [
            'Dieser Artikel ist eine Fallstudie auf der Website einer KI-SEO-Agentur. Was erwartest du, dass wir schreiben: "Unsere Ergebnisse sind mittelmäßig, aber gib uns trotzdem Geld"?',
            'Der Unterschied zu den meisten Agenturen: Unsere Zahlen sind nachprüfbar. Performance-Scores kannst du in 30 Sekunden selbst testen. Search-Console-Daten lügen nicht. ChatGPT-Rankings kannst du in Echtzeit verifizieren. Wir zeigen keine "600 % mehr Sichtbarkeit"-Grafiken, deren Ausgangswert bei 3 Besuchern lag.',
            'Wenn du skeptisch bist: gut. Sei skeptisch. Frag nach den Daten, nach den Screenshots, nach den Referenzen. Wir zeigen sie dir gerne, denn genau das ist der Punkt: Transparenz ist kein Risiko, wenn die Ergebnisse stimmen.',
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Wie lange dauert es, bis man KI-sichtbar wird?',
          a: 'Die ersten messbaren Ergebnisse sehen wir typischerweise nach 4 bis 6 Wochen. Volle KI-Sichtbarkeit, also Empfehlungen in ChatGPT, Perplexity und Google AI Overviews, erreichen die meisten Kunden innerhalb von 90 Tagen. Der genaue Zeitraum hängt vom Ausgangszustand ab: Je schlechter die Basis, desto schneller sind die ersten Verbesserungen sichtbar, weil die Messlatte so niedrig liegt.',
        },
        {
          q: 'Ist diese Fallstudie ein echtes Unternehmen?',
          a: 'Diese Fallstudie ist ein Composite Case Study. Sie kombiniert reale, verifizierbare Daten aus mehreren Kundenprojekten zu einer zusammenhängenden Geschichte. Alle Zahlen sind echt, alle Ergebnisse sind echt. Wir haben sie anonymisiert und kombiniert, weil unsere Kunden nicht möchten, dass ihre Konkurrenz genau erfährt, was wir gemacht haben.',
        },
        {
          q: 'Was kostet so eine KI-Sichtbarkeitsoptimierung?',
          a: 'Das hängt vom Umfang ab. Marktüblich liegt eine technische Basis-Optimierung bei rund 2.500 EUR, ein vollständiges 90-Tage-Programm mit Content-Strategie und laufendem Monitoring zwischen 5.000 und 15.000 EUR. Was es bei uns konkret kostet, hängt von deiner Ausgangslage ab und steht als Festpreis nach dem kostenlosen 15-Minuten-Call fest. Zum Vergleich: Der Kunde in dieser Fallstudie zahlt jetzt 2,57 EUR pro Klick statt 18 bis 20 EUR Marktdurchschnitt. Die Investition hat sich in 7 Wochen amortisiert.',
        },
        {
          q: 'Funktioniert das auch für E-Commerce und nicht nur für Dienstleister?',
          a: 'Ja. Wir haben für einen Online-Shop mit 723 Produkten den organischen Traffic in 90 Tagen verdoppelt, von praktisch null auf 1.860 Klicks und 78.500 Impressions pro Quartal. E-Commerce hat sogar den Vorteil, dass Produktseiten natürliche Antwortformate für KI-Systeme liefern.',
        },
        {
          q: 'Muss ich meine gesamte Website neu bauen lassen?',
          a: 'Nicht zwingend, aber oft ist es effizienter. Bei dem Kunden in dieser Fallstudie war die bestehende Website so technisch marode (Performance 35/100, SEO-Score 43/100), dass ein Relaunch schneller und günstiger war als die Reparatur. Ob ein Relaunch oder eine Optimierung sinnvoller ist, klären wir in der kostenlosen Erstanalyse.',
        },
        {
          q: 'Wie messt ihr die KI-Sichtbarkeit?',
          a: 'Wir tracken drei Ebenen: technische Performance (Lighthouse-Scores, Core Web Vitals, Crawl-Daten), Suchsichtbarkeit (Klicks, Impressions, Rankings via Google Search Console) und KI-Präsenz (manuelle Tests in ChatGPT, Perplexity, Claude und Gemini mit relevanten Branchenanfragen). Außerdem messen wir harte Business-KPIs: Kundenanfragen, Conversions und Cost-per-Acquisition.',
        },
        {
          q: 'Was passiert nach den 90 Tagen?',
          a: 'KI-Sichtbarkeit ist kein Projekt mit Enddatum, sondern ein laufender Prozess. Nach den ersten 90 Tagen wechseln die meisten Kunden in ein monatliches Monitoring- und Optimierungspaket. Die große Arbeit ist getan, aber Content-Updates, neue Seiten und technisches Monitoring bleiben wichtig. Die KI-Landschaft verändert sich schnell, wer stehen bleibt, wird überholt.',
        },
      ]}
      sourcesTitle="Quellen & Methodik"
      sources={[
        {
          label: 'Lighthouse v12',
          text: 'Alle Lighthouse-Scores gemessen mit Google Lighthouse v12 (Chrome DevTools, Mobile-Simulation, gedrosselt auf 4G).',
        },
        {
          label: 'Google Search Console',
          text: 'Organische Klicks und Impressions aus verifizierten Properties.',
        },
        {
          label: 'Google Ads Keyword Planner',
          text: 'CPC-Vergleichswerte, Durchschnittswerte für Hamburg, Q1 2026.',
        },
        {
          label: 'KI-Tests',
          text: 'Rankings getestet in ChatGPT (GPT-4o, mit Websuche), Perplexity (Pro), Claude (Sonnet 4) und Gemini (Advanced).',
        },
        {
          label: 'GA4 und CRM',
          text: 'Conversion-Daten aus Google Analytics 4 und dem CRM-System des Kunden, anonymisiert.',
        },
        {
          label: 'Google Business Profile',
          text: 'Lokale Aktionen (Anrufe, Wegbeschreibungen, Website-Besuche) aus den Profile Insights.',
        },
      ]}
      relatedTitle="Verwandte Artikel"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Guide',
        },
        {
          title: 'Was kostet KI-Sichtbarkeit?',
          description: 'Preismodelle, ROI-Berechnung und realistische Budgets für KI-SEO.',
          href: '/wissen/ki-sichtbarkeit-kosten',
          tag: 'Kosten',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Tools, Metriken und Prozesse zur Messung deiner KI-Sichtbarkeit.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description: 'Schema.org, robots.txt, Crawling und die technische Seite der KI-Optimierung.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
      ]}
      ctaTitle="Deine kostenlose KI-Sichtbarkeitsanalyse wartet"
      ctaText="Ich prüfe in 48 Stunden, ob ChatGPT, Perplexity und Google AI dein Unternehmen kennen, und was nötig ist, damit sie es empfehlen. Kein Verkaufsgespräch, kein Spam, kein Newsletter-Abo. Du bekommst einen ehrlichen Report mit konkreten Zahlen."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Analyse anfragen"
    />
  );
}

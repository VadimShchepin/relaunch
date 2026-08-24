import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitBeauftragenPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-beauftragen"
      breadcrumbLabel="KI-Sichtbarkeit beauftragen"
      eyebrow="Ablauf"
      title="KI-Sichtbarkeit beauftragen: Der komplette Ablauf"
      description="Du überlegst, ob sich KI-Sichtbarkeit für dein Unternehmen lohnt? Hier ist exakt, was passiert, von der ersten Anfrage bis zur ersten ChatGPT-Empfehlung. Ohne Buzzwords, ohne Verkaufstricks."
      publishedAt="2026-04-03"
      modifiedAt="2026-08-24"
      summaryTitle="TL;DR, Der Ablauf auf einen Blick"
      summaryItems={[
        'Kurzanalyse, 15 Minuten: du schickst deine URL, wir testen live, du bekommst eine ehrliche Einschätzung.',
        'Audit und Strategie, Tag 1 bis 3: technisches Audit, Wettbewerbsanalyse, Strategie auf maximal fünf Seiten, Festpreis.',
        'Umsetzung, Tag 4 bis 14: Schema-Markup, llms.txt, Content-Restrukturierung, Crawlability. Dein Aufwand: CMS-Zugang.',
        'Content und Autorität, Monat 2 bis 3: nur für laufende Betreuung, dafür der Teil, der die Zitierungen bringt.',
        'Ergebnisse, ab Monat 3: monatliche Reports mit konkreten KI-Zitierungen statt Vanity-Metriken.',
      ]}
      sections={[
        {
          id: 'warum-dieser-artikel',
          heading: 'Warum dieser Artikel existiert',
          intro:
            'Weil die meisten Agenturen dir eine kostenlose Erstberatung anbieten und dann 45 Minuten lang Folien zeigen, bis du aus Erschöpfung unterschreibst.',
          paragraphs: [
            'Hier ist der Deal: Du sollst vorher wissen, was passiert. Jeden Schritt, jede Entscheidung, jeden Euro. Damit du eine informierte Entscheidung treffen kannst und keine emotionale.',
            'Die meisten Dienstleister behandeln ihren Prozess wie ein Staatsgeheimnis, als würde die Konkurrenz sofort alles kopieren. Die kopiert sowieso. Transparenz ist kein Risiko, sondern ein Vorteil.',
            'Und ja, vielleicht liest du das hier und entscheidest, dass du das nicht brauchst. Auch gut. Dann habe ich dir 15 Minuten Lebenszeit gespart, und das ist mehr, als die meisten Agenturen für dich tun, bevor du bezahlst.',
          ],
          stat: 'Von der ersten Anfrage bis zu messbaren Ergebnissen: 15 Minuten für die kostenlose Analyse, 10 bis 14 Tage für das technische Upgrade, 3 bis 6 Monate für konsistente KI-Sichtbarkeit. Kein Hexenwerk, aber auch kein Overnight-Erfolg.',
        },
        {
          id: 'kurzanalyse',
          heading: 'Kostenloser 15-Minuten-Call',
          intro:
            'Schritt eins. Du buchst 15 Minuten, schickst mir vorab deine Website-URL, und wir schauen im Call gemeinsam nach. Kein Discovery Call mit drei Account Managern und einem Praktikanten, der Notizen macht. Das bin ich, deine URL und 15 Minuten ungeteilte Aufmerksamkeit.',
          cards: [
            {
              title: 'Was ich prüfe',
              text: 'Deine aktuelle Sichtbarkeit auf ChatGPT, Perplexity und Google AI Overviews. Was deine Wettbewerber in KI-Antworten machen, und ob sie überhaupt auftauchen. Einen technischen Schnellcheck aus Schema-Markup, Crawlability und Content-Struktur. Und die ehrliche Einschätzung, ob KI-Sichtbarkeit für dein Business überhaupt Sinn macht.',
            },
            {
              title: 'Was du bekommst',
              text: 'Wir testen live mit, du siehst deine KI-Sichtbarkeit oder Nicht-Sichtbarkeit direkt auf dem Schirm. Dazu eine klare Aussage, ob es sich lohnt. Falls ja: die drei größten Hebel und eine grobe Einordnung des Aufwands. Falls nein: alternative Empfehlungen. Was du nicht bekommst, ist ein ausgearbeiteter Report. Das schriftliche Audit mit Strategie und Festpreis beginnt erst, wenn du dich entschieden hast.',
            },
          ],
          warning: {
            title: 'Kein Pitch, kein Druck',
            text: 'Wenn es sich nicht lohnt, sage ich dir das. Ich habe kein Interesse daran, Projekte anzunehmen, die nicht funktionieren, das macht weder dich noch mich glücklich.',
          },
        },
        {
          id: 'audit-strategie',
          heading: 'Audit & Strategie (Tag 1 bis 3)',
          intro:
            'Schritt zwei. Du hast dich entschieden, ab hier wird es ernst. Ich finde heraus, warum KI-Systeme dich ignorieren, und was wir dagegen tun können. Es ist fast nie ein einzelnes Problem, sondern meistens zehn kleine, die sich gegenseitig verstärken.',
          steps: [
            {
              title: 'Vollständiges technisches Audit',
              text: 'Schema-Markup, Seitenstruktur, Ladezeiten, Mobile-Optimierung, robots.txt, Crawlability für KI-Bots. Alles, was unter der Haube passiert, oder eben nicht passiert.',
            },
            {
              title: 'Wettbewerber-Analyse (KI-Sichtbarkeit)',
              text: 'Wer wird in deiner Branche von ChatGPT empfohlen? Warum? Was machen die anders? Das ist keine Competitive Analysis aus einem SEO-Tool, sondern manuelle Recherche auf echten KI-Plattformen.',
            },
            {
              title: 'Strategie-Dokument mit Prioritäten',
              text: 'Kein 80-Seiten-PDF, das in der Schublade verschwindet, sondern ein klares Dokument: Was machen wir zuerst? Was bringt den größten Hebel? Was kostet wie viel? Maximal fünf Seiten, maximal klar.',
            },
            {
              title: 'Klarer Kostenvoranschlag',
              text: 'Festpreis, keine Überraschungen. Du weißt vorher exakt, was es kostet. Nicht „ab X Euro“, nicht „je nach Aufwand“. Eine Zahl.',
            },
          ],
        },
        {
          id: 'umsetzung',
          heading: 'Technische Umsetzung (Tag 4 bis 14)',
          intro:
            'Schritt drei. Das ist der Teil, in dem ich Code schreibe und du nichts tun musst. Was unter der Haube passiert:',
          cards: [
            {
              title: 'Schema-Markup (JSON-LD)',
              text: 'Strukturierte Daten, die KI-Systemen sagen, wer du bist, was du machst und warum du relevant bist. Ein Lebenslauf für deine Website, nur dass ihn Maschinen lesen.',
            },
            {
              title: 'llms.txt & ai.txt',
              text: 'Dateien, die KI-Crawlern erklären, welche Informationen sie von deiner Website extrahieren sollen. Ohne die fliegen KI-Bots blind über deine Seite und nehmen nichts mit.',
            },
            {
              title: 'Content-Restrukturierung',
              text: 'Deine Inhalte sind für Menschen geschrieben. Gut. Jetzt machen wir sie zusätzlich für KI extrahierbar: klare Frage-Antwort-Strukturen, definierte Entitäten, semantische Verknüpfungen.',
            },
            {
              title: 'Crawlability-Optimierung',
              text: 'Sicherstellen, dass GPTBot, PerplexityBot, ClaudeBot und die anderen deine Seite überhaupt finden und lesen können. Du wärst überrascht, wie viele Websites KI-Bots versehentlich aussperren.',
            },
          ],
          bullets: [
            'Dein Aufwand in dieser Phase: mir Zugang zu deinem CMS geben oder deinen Entwickler kurz einweihen. Alles andere passiert auf meiner Seite.',
            'Du bekommst täglich Kurz-Updates per E-Mail, nicht als Höflichkeit, sondern damit du weißt, was passiert.',
            'Was du nicht tun musst: Texte schreiben, Bilder liefern, in Meetings sitzen oder Brand-Guidelines zusammensuchen, die seit 2019 niemand geöffnet hat.',
          ],
        },
        {
          id: 'content-autoritaet',
          heading: 'Content & Autorität (Monat 2 bis 3)',
          intro:
            'Schritt vier, nur für laufende Betreuungspakete. Wenn du das einmalige Upgrade gewählt hast, bist du nach der technischen Umsetzung fertig und hast eine solide Basis. Das hier ist die Kur nach der Operation: optional, aber deutlich effektiver als nur die technische Basis.',
          cards: [
            {
              title: 'Content für KI-Zitierbarkeit',
              text: 'Inhalte, die nicht nur gut klingen, sondern von KI-Systemen als autoritative Quelle erkannt werden. Fachbeiträge, Anleitungen, FAQ-Inhalte, alles strukturiert für maximale Extrahierbarkeit.',
            },
            {
              title: 'Autoritäts-Aufbau',
              text: 'Verzeichniseinträge, Erwähnungen in Fachmedien, konsistente NAP-Daten. KI-Systeme vertrauen Quellen, die von anderen Quellen bestätigt werden.',
            },
            {
              title: 'Plattform-spezifisches Monitoring',
              text: 'Wöchentliche Checks auf ChatGPT, Perplexity, Google AI Overviews, Claude und Copilot. Wo wirst du erwähnt, wo nicht, was hat sich verändert? Manuell, nicht automatisiert, weil es noch kein Tool gibt, das das zuverlässig macht.',
            },
          ],
        },
        {
          id: 'ergebnisse-reporting',
          heading: 'Ergebnisse & Reporting',
          intro:
            'Schritt fünf. Hier trennt sich die Spreu vom Weizen, weil ich dir echte Zahlen zeige und keine Vanity-Metriken. Kein „dein Domain-Rating ist um 3 Punkte gestiegen“, sondern: ChatGPT empfiehlt dich jetzt bei diesen 12 Fragen.',
          cards: [
            {
              title: 'Monatliche Reports',
              text: 'Konkrete KI-Zitierungen mit Belegen. Auf welchen Plattformen, bei welchen Fragen, in welchem Kontext.',
            },
            {
              title: 'Vorher und Nachher',
              text: 'Direkte Vergleiche: Wo standest du vor dem Projekt, wo stehst du jetzt? Klar, visuell, unbestreitbar.',
            },
            {
              title: 'Echte Metriken',
              text: 'Anzahl KI-Zitierungen, Plattform-Abdeckung, Traffic-Veränderungen, neue Kundenanfragen. Zahlen, die zählen.',
            },
          ],
          bullets: [
            'Was ich nicht mache: dir ein Dashboard geben und sagen, log dich ein und schau selbst. Du bekommst einen aufbereiteten Report mit Kontext, weil nackte Zahlen ohne Einordnung so nützlich sind wie eine Landkarte ohne Legende.',
            'Was du damit anfangen kannst: deinem Chef oder deinem Geschäftsführer in zwei Minuten erklären, was passiert ist und was es gebracht hat. Jeder Report ist so geschrieben, dass auch Menschen ohne Marketing-Hintergrund ihn verstehen.',
          ],
        },
        {
          id: 'was-du-nicht-bekommst',
          heading: 'Was du NICHT bekommst',
          intro:
            'Transparenz bedeutet auch, klar zu sagen, was nicht im Paket ist. Die meisten Agenturen verschweigen das lieber.',
          cards: [
            {
              title: 'Keine Garantie für Position 1',
              text: 'Wer dir verspricht, dass ChatGPT dich garantiert als Nummer 1 empfiehlt, lügt. KI-Antworten sind kontextabhängig und verändern sich ständig. Ich optimiere die Wahrscheinlichkeit, nicht die Gewissheit.',
            },
            {
              title: 'Keine 12-Monats-Vertragsbindung',
              text: 'Wer seine Kunden an lange Verträge kettet, hat kein Vertrauen in die eigene Leistung. Einmaliges Upgrade heißt Festpreis und fertig, laufende Betreuung ist monatlich kündbar.',
            },
            {
              title: 'Keine Buzzword-Reports ohne Substanz',
              text: 'Du bekommst keine 40-seitigen PDFs voller Kreisdiagramme, die niemand liest, sondern konkrete Zahlen: Wo wirst du zitiert, wo nicht, was ändern wir als Nächstes?',
            },
            {
              title: 'Keine versteckten Kosten',
              text: 'Kein „ach, das Tool kostet extra“, kein „das Setup war im Angebot nicht enthalten“. Der Preis, den ich dir nenne, ist der Preis, den du zahlst.',
            },
          ],
          quote:
            'Ehrlichkeit ist das Einzige, was langfristig funktioniert, im Marketing wie in der Kundenbeziehung. Wenn du jemanden suchst, der dir das Blaue vom Himmel verspricht, bin ich der Falsche.',
        },
        {
          id: 'bedenken',
          heading: 'Die 3 häufigsten Bedenken, und ehrliche Antworten',
          intro:
            'Jeder hat Bedenken, das ist normal. Wer keine hat, hat nicht richtig nachgedacht. Zuerst die ehrliche Timeline, dann die drei Fragen, die ich am häufigsten höre.',
          table: {
            headers: ['Meilenstein', 'Zeitraum'],
            rows: [
              ['Technische Basis steht', '10 bis 14 Tage'],
              ['Erste KI-Erwähnungen', '4 bis 8 Wochen'],
              ['Konsistente Sichtbarkeit', '2 bis 4 Monate'],
              ['Volle Wirkung', '3 bis 6 Monate'],
            ],
            caption:
              'Das ist schneller als klassisches SEO mit 6 bis 12 Monaten, aber kein Lichtschalter. Wer dir Ergebnisse in 48 Stunden verspricht, hat ein sehr lockeres Verhältnis zur Wahrheit.',
          },
          cards: [
            {
              title: '„Ist das nicht zu teuer?“',
              text: 'Kommt darauf an, womit du vergleichst. Ein einmaliges Upgrade kostet 1.500 Euro netto, das ist weniger als ein Monat Google Ads in den meisten Branchen. Die ehrliche Rechnung: Wenn dein durchschnittlicher Auftragswert bei 3.000 Euro liegt und ein einziger Kunde über eine KI-Empfehlung kommt, hat sich die Investition doppelt gerechnet. Ein Kunde. Teuer ist nicht, was du bezahlst, teuer ist, was du verpasst.',
            },
            {
              title: '„Funktioniert das wirklich?“',
              text: 'Ja, aber nicht über Nacht und nicht mit Garantie auf Platz 1. Was ich dir zeigen kann, sind echte Ergebnisse von echten Kunden: Kunden auf Position 1 in ChatGPT-Empfehlungen, Websites mit verdoppeltem Traffic durch KI-Sichtbarkeit, Unternehmen mit über 40 neuen Kundenanfragen pro Monat über KI-Kanäle. Frag mich nach Referenzen, ich zeige dir konkrete Beispiele mit echten Adressen, nicht anonymisierte Fallstudien.',
            },
            {
              title: '„Wie lange dauert das?“',
              text: 'Die Tabelle oben ist die Antwort. Technische Basis in 10 bis 14 Tagen, erste KI-Erwähnungen nach 4 bis 8 Wochen, konsistente Sichtbarkeit nach 2 bis 4 Monaten, volle Wirkung nach 3 bis 6 Monaten. Wer schneller verspricht, verkauft etwas anderes als KI-Sichtbarkeit.',
            },
          ],
        },
        {
          id: 'prozess-zusammengefasst',
          heading: 'Der ganze Prozess, zusammengefasst',
          intro: 'Der komplette Ablauf in komprimierter Form, mit deinem Aufwand pro Phase.',
          table: {
            headers: ['Phase', 'Dauer', 'Dein Aufwand', 'Ergebnis'],
            emphasis: 2,
            rows: [
              ['Kurzanalyse', '15 Minuten', 'Call, URL schicken', 'Ehrliche Einschätzung im Gespräch'],
              ['Audit & Strategie', '1 bis 3 Tage', 'Briefing-Gespräch', 'Strategie plus Festpreis'],
              ['Umsetzung', '10 bis 14 Tage', 'CMS-Zugang geben', 'KI-ready Website'],
              ['Content & Autorität', 'Monat 2 bis 3', 'Feedback geben', 'Erste KI-Zitierungen'],
              ['Ergebnisse', 'ab Monat 3', 'Report lesen', 'Messbare KI-Sichtbarkeit'],
            ],
            caption:
              'Der wichtigste Punkt steht in der dritten Spalte: dein Zeitaufwand ist minimal. Du musst kein KI-Experte werden, dafür bezahlst du mich.',
          },
          bullets: [
            'Keine Mindestlaufzeit: das einmalige Upgrade ist ein Projekt mit Anfang und Ende, kein Abo, das sich automatisch verlängert.',
            'Festpreise: der Preis, den ich nenne, ist der Preis, den du zahlst. Keine unvorhergesehenen Mehraufwände.',
            'Zufriedenheit vor Rechnung: die Schlussrechnung kommt erst, wenn die Umsetzung abgenommen ist.',
          ],
        },
        {
          id: 'fuer-wen',
          heading: 'Für wen sich das lohnt, und für wen nicht',
          intro:
            'Die kurze Fassung: Es lohnt sich für jeden, dessen Kunden fragen, wer der beste Anbieter in ihrer Stadt ist. Im Detail:',
          table: {
            headers: ['Lohnt sich für', 'Lohnt sich (noch) nicht für'],
            rows: [
              [
                'Dienstleister mit Auftragswerten ab 1.000 Euro',
                'Unternehmen ohne funktionierende Website',
              ],
              [
                'Lokale Unternehmen in städtischen Gebieten',
                'Sehr nischige B2B-Produkte mit 20 potenziellen Kunden weltweit',
              ],
              [
                'B2B-Unternehmen mit erklärungsbedürftigen Leistungen',
                'Wer sofortige Ergebnisse in 48 Stunden erwartet',
              ],
              [
                'Ärzte, Anwälte, Berater, Handwerker, Agenturen',
                'Unternehmen, die noch kein Grundprodukt haben, denn erst kommt das Angebot, dann das Marketing',
              ],
            ],
            caption:
              'Wenn du in der rechten Spalte stehst, sage ich dir das im Call. Das ist billiger für dich und ehrlicher für mich.',
          },
        },
      ]}
      faqTitle="Häufig gestellte Fragen zum Ablauf"
      faqs={[
        {
          q: 'Was kostet der kostenlose 15-Minuten-Call wirklich?',
          a: 'Nichts. Null Euro, kein Kleingedrucktes. Du bekommst in 15 Minuten eine ehrliche Einschätzung, ob KI-Sichtbarkeit für dein Unternehmen Sinn macht. Wenn nicht, sage ich dir das. Es gibt keinen automatischen Übergang in ein kostenpflichtiges Paket. Was nicht dabei ist: ein ausgearbeitetes Audit oder ein schriftlicher Report. Das gehört zum bezahlten Teil, sonst müsste ich es über die Preise der anderen Kunden finanzieren.',
        },
        {
          q: 'Muss ich technisches Wissen mitbringen?',
          a: 'Nein. Du musst weder wissen, was JSON-LD ist, noch was eine llms.txt macht. Ich erkläre dir alles in normaler Sprache. Für die technische Umsetzung brauchst du nur Zugang zu deiner Website, also CMS-Login oder Entwicklerkontakt. Den Rest übernehme ich.',
        },
        {
          q: 'Gibt es eine Mindestvertragslaufzeit?',
          a: 'Beim einmaligen Upgrade nein, das ist ein Projekt mit Festpreis und Ende. Bei der laufenden Betreuung ist monatlich kündbar, keine 6- oder 12-Monats-Bindung. Wenn die Ergebnisse nicht stimmen, kannst du jederzeit aufhören.',
        },
        {
          q: 'Was passiert, wenn KI-Sichtbarkeit für mich keinen Sinn macht?',
          a: 'Dann sage ich dir das in der Kurzanalyse. Nicht jedes Unternehmen profitiert gleich stark von KI-Sichtbarkeit. Wenn deine Zielgruppe keine KI-Assistenten nutzt oder dein Markt zu nischig ist, empfehle ich dir andere Maßnahmen. Ich verdiene nichts daran, dir etwas zu verkaufen, das nicht funktioniert.',
        },
        {
          q: 'Wie messe ich, ob es funktioniert hat?',
          a: 'Du bekommst monatliche Reports mit konkreten KI-Zitierungen: Wo wirst du erwähnt, auf welchen Plattformen, bei welchen Fragen? Plus Vorher-Nachher-Vergleiche und Traffic-Daten. Keine Vanity-Metriken, sondern Zahlen, die du deinem Chef zeigen kannst.',
        },
        {
          q: 'Kann ich nach dem einmaligen Upgrade auf laufende Betreuung wechseln?',
          a: 'Ja, jederzeit. Viele Kunden starten mit dem einmaligen Upgrade und entscheiden sich nach zwei bis drei Monaten für die laufende Betreuung, wenn sie die ersten Ergebnisse sehen. Es gibt keinen Druck, das sofort zu entscheiden.',
        },
        {
          q: 'Was unterscheidet aiseo.hamburg von anderen AI SEO Agenturen?',
          a: 'Drei Dinge. Spezialisierung: ich mache ausschließlich KI-Sichtbarkeit, kein klassisches SEO nebenbei. Transparenz: Festpreise, keine versteckten Kosten, monatlich kündbar. Ergebnisse: ich zeige dir vorher Referenzen mit echten KI-Zitierungen, nicht PowerPoint-Versprechen.',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit Kosten',
          description: 'Was AI SEO wirklich kostet, transparente Preise und ROI-Rechnung.',
          href: '/wissen/ki-sichtbarkeit-kosten',
          tag: 'Kosten',
        },
        {
          title: 'AI SEO Agentur',
          description: 'Was eine gute AI SEO Agentur leistet und worauf du achten solltest.',
          href: '/ai-seo-agentur',
          tag: 'Auswahl',
        },
        {
          title: 'KI-Sichtbarkeit',
          description: 'Wie Unternehmen in KI-Antworten sichtbar werden.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Wie du KI-Sichtbarkeit trackst und welche Metriken wirklich zählen.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Starte mit dem kostenlosen 15-Minuten-Call"
      ctaText="15 Minuten, deine URL, eine ehrliche Einschätzung, ob KI-Sichtbarkeit für dich Sinn macht. Kein Pitch, kein Druck, kein Kleingedrucktes. Wenn du zuerst die Kosten verstehen willst, lies den Kostenartikel."
      ctaHref="/termin"
      ctaLabel="Kostenlosen 15-Min-Call buchen"
    />
  );
}

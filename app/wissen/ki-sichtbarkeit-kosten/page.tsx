import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitKostenPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-kosten"
      breadcrumbLabel="KI-Sichtbarkeit Kosten"
      eyebrow="Preise"
      title="KI-Sichtbarkeit Kosten: Was AI SEO wirklich kostet"
      description="Du gibst 3.000 Euro pro Monat für Google Ads aus, während KI-Empfehlungen qualifiziertere Leads bringen. Hier steht, was KI-Sichtbarkeit 2026 kostet und ab wann sich die Investition rechnet."
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      summaryTitle="TL;DR: Preise auf einen Blick"
      summaryItems={[
        'Einmaliges Upgrade: 1.500 bis 3.000 Euro, einmalig, kein Abo.',
        'Monatliche Betreuung: 1.500 bis 5.000 Euro pro Monat.',
        'Enterprise: ab 5.000 Euro pro Monat, bei mehreren Standorten oder Märkten.',
        'DIY: 0 Euro plus 20 bis 40 Stunden Einarbeitung.',
        'Zum Vergleich: klassische SEO-Agenturen kosten 2.000 bis 10.000 Euro pro Monat, der Google-Ads-Klickpreis stieg im Jahresvergleich um 12,9 Prozent auf durchschnittlich 5,26 Dollar (WordStream und LocaliQ, über 16.000 Kampagnen).',
      ]}
      sections={[
        {
          id: 'ehrliche-antwort',
          heading: 'Die ehrliche Antwort: Was KI-Sichtbarkeit 2026 kostet',
          intro:
            'Der Markt für KI-Sichtbarkeit ist jung, es gibt noch keine standardisierten Preise wie bei Google Ads. Das macht die Kostenfrage schwieriger, aber ehrlicher: Du zahlst für Arbeit, nicht für ein aufgeblähtes Paket. Das sind die realistischen Bereiche, die seriöse Anbieter 2026 berechnen.',
          table: {
            headers: ['Modell', 'Preis', 'Was du dafür bekommst'],
            rows: [
              [
                'Einmaliges Upgrade',
                '1.500 bis 3.000 Euro',
                'Schema-Markup, llms.txt, Content-Restrukturierung, technische Basis. Kein Abo. Danach ist die Website KI-ready.',
              ],
              [
                'Monatliche Betreuung',
                '1.500 bis 5.000 Euro pro Monat',
                'Laufende Optimierung, Content, Monitoring aller Plattformen, Autoritäts-Aufbau, Reporting.',
              ],
              [
                'Enterprise',
                'ab 5.000 Euro pro Monat',
                'Mehrere Standorte, Produktkategorien oder Märkte. Vollumfängliche Betreuung.',
              ],
              [
                'DIY / Selbst machen',
                '0 Euro plus Zeit',
                'Machbar mit eigenem Know-how. 20 bis 40 Stunden Einarbeitung plus laufender Aufwand.',
              ],
            ],
            caption: 'Die Spanne kommt aus dem Umfang, nicht aus dem Stundensatz.',
          },
        },
        {
          id: 'falsche-frage',
          heading: 'Warum die Frage nach Kosten die falsche Frage ist',
          intro:
            'Die eigentliche Frage lautet nicht, was KI-Sichtbarkeit kostet, sondern was es kostet, nicht sichtbar zu sein.',
          paragraphs: [
            'Jeder Kunde, der ChatGPT, Perplexity oder Google AI nach einer Lösung fragt und dich nicht findet, ist verloren. Du siehst ihn nicht in der Analytics: nicht als Bounce, nicht als Lead. Er war nie da. Rankings-Reports zeigen davon nichts.',
          ],
          table: {
            headers: ['Annahme', 'Wert'],
            rows: [
              ['Anfragen über KI pro Monat (konservativ)', '10'],
              ['Davon finden dich aktuell', '0'],
              ['Durchschnittlicher Auftragswert', '3.000 Euro'],
              ['Conversion Rate (Anfrage zu Auftrag)', '20 %'],
              ['Entgangener Umsatz pro Monat', '6.000 Euro'],
              ['Entgangener Umsatz pro Jahr', '72.000 Euro'],
            ],
            caption: 'Rechenbeispiel: was Unsichtbarkeit kostet.',
            note:
              'Selbst wenn nur die Hälfte realistisch ist: 36.000 Euro entgangener Umsatz pro Jahr, gegenüber 1.500 Euro für ein einmaliges Upgrade.',
          },
        },
        {
          id: 'kostenvergleich',
          heading: 'Kostenvergleich: KI-Sichtbarkeit vs. andere Marketing-Kanäle',
          intro:
            'Wie schneidet KI-Sichtbarkeit gegen die Kanäle ab, die du vermutlich schon nutzt?',
          table: {
            headers: ['Kanal', 'Monatliche Kosten', 'Time-to-Result', 'Nachhaltigkeit', 'ROI-Potenzial'],
            emphasis: 3,
            rows: [
              ['Google Ads', '2.000 bis 20.000 Euro', 'sofort', 'keine (Ads aus, Traffic weg)', 'mittel, sinkend'],
              ['Klassisches SEO', '2.000 bis 10.000 Euro', '6 bis 12 Monate', 'hoch', 'hoch, aber langsam'],
              ['Social Media Ads', '1.000 bis 15.000 Euro', 'sofort', 'keine', 'variabel'],
              ['KI-Sichtbarkeit', '1.500 bis 5.000 Euro', '2 bis 6 Monate', 'hoch', 'sehr hoch'],
            ],
            caption:
              'Der Unterschied steht in der Spalte Nachhaltigkeit: KI-Sichtbarkeit verstärkt sich über Zeit, Anzeigen kosten bei jedem Klick erneut.',
          },
        },
        {
          id: 'kostenfaktoren',
          heading: 'Was beeinflusst die Kosten?',
          intro: 'Fünf Faktoren bestimmen, wo du im Preisbereich landest.',
          cards: [
            {
              title: 'Branche & Wettbewerb',
              text:
                'In Recht, Finanzen oder Gesundheit ist der Aufwand höher, weil mehr Quellen um die wenigen Zitierungsplätze konkurrieren.',
            },
            {
              title: 'Technische Ausgangslage',
              text:
                'Eine saubere Website braucht weniger Grundlagenarbeit als eine veraltete Seite ohne Schema-Markup und ohne klare Inhaltsstruktur.',
            },
            {
              title: 'Umfang & Standorte',
              text:
                'Ein Standort in Hamburg ist weniger Aufwand als fünf Standorte bundesweit. Jeder Standort braucht eigene lokale Signale und Inhalte.',
            },
            {
              title: 'Ziel-Plattformen',
              text:
                'Nur ChatGPT zu optimieren ist weniger Aufwand als alle Plattformen: ChatGPT, Perplexity, Google AI Overviews, Claude, Copilot.',
            },
            {
              title: 'DIY vs. Agentur',
              text:
                'Selbst machen spart Geld, kostet aber Zeit und Lernkurve. Eine Agentur bringt Erfahrung und Systematik, kostet aber entsprechend mehr.',
            },
          ],
        },
        {
          id: 'preismodelle',
          heading: 'Die 3 Preismodelle bei aiseo.hamburg',
          intro: 'Klar, transparent, ohne Kleingedrucktes.',
          steps: [
            {
              title: 'Kostenlose Kurzanalyse',
              text:
                '0 Euro, 15 Minuten, keine Verpflichtung. Für jeden, der wissen will, wo er steht.',
              bullets: [
                'Check der aktuellen KI-Sichtbarkeit auf ChatGPT, Perplexity und Google AI',
                'Erste Einschätzung: wo stehst du, wo stehen deine Wettbewerber?',
                'Ehrliche Aussage, ob sich KI-Sichtbarkeit für dein Unternehmen lohnt',
              ],
            },
            {
              title: 'AI-Sichtbarkeits-Upgrade',
              text:
                '1.500 Euro netto, einmalig, 10 bis 14 Tage Umsetzung, kein Abo. Für Unternehmen, die eine solide Basis brauchen und danach selbst weiterarbeiten.',
              bullets: [
                'Vollständiges KI-Sichtbarkeits-Audit über alle relevanten Plattformen',
                'Schema-Markup (JSON-LD) für deine wichtigsten Seiten',
                'llms.txt und ai.txt Konfiguration',
                'Content-Restrukturierung der Top-5-Seiten für KI-Extrahierbarkeit',
                'Technische Optimierung (Crawlability, Seitenstruktur)',
                'Dokumentation und Handlungsempfehlungen für die eigenständige Weiterarbeit',
              ],
            },
            {
              title: 'Full KI-Sichtbarkeits-Paket',
              text:
                'ab 2.500 Euro pro Monat, monatlich kündbar, alle Plattformen. Für Unternehmen, die KI-Sichtbarkeit als Kanal aufbauen und kein internes Team dafür haben.',
              bullets: [
                'Alles aus dem Upgrade, plus:',
                'Laufende Content-Erstellung und -Optimierung für KI-Zitierbarkeit',
                'Monitoring auf ChatGPT, Perplexity, Google AI Overviews, Claude, Copilot',
                'Autoritäts-Aufbau: Verzeichnisse, Erwähnungen, Fachpublikationen',
                'Monatliches Reporting mit konkreten KI-Zitierungs-Metriken',
                'Persönlicher Ansprechpartner, kein Ticket-System',
              ],
            },
          ],
        },
        {
          id: 'roi',
          heading: 'ROI-Rechner: Lohnt sich KI-Sichtbarkeit für dich?',
          intro: 'Setze deine eigenen Zahlen ein. Das Beispiel ist ein Hamburger Dienstleister.',
          table: {
            headers: ['Position', 'Wert'],
            rows: [
              ['Investition (einmaliges Upgrade)', '1.500 Euro'],
              ['Durchschnittlicher Auftragswert', '5.000 Euro'],
              ['Zusätzliche Anfragen durch KI pro Monat', '3'],
              ['Conversion Rate', '25 %'],
              ['Zusätzliche Aufträge pro Monat', '0,75'],
              ['Zusätzlicher Umsatz pro Monat', '3.750 Euro'],
              ['Break-even nach', 'weniger als 1 Monat'],
              ['ROI nach 12 Monaten', 'plus 43.500 Euro'],
            ],
            caption:
              'Beispielrechnung, keine Garantie. Ein einziger zusätzlicher Auftrag pro Monat deckt die 1.500 Euro in wenigen Wochen.',
          },
        },
        {
          id: 'kostenfallen',
          heading: 'Typische Kostenfallen bei AI SEO',
          intro: 'Sechs Warnsignale, die dich vor einer Fehlinvestition schützen.',
          cards: [
            {
              title: 'Billige Agenturen, die nichts liefern',
              text:
                'AI SEO für 299 Euro im Monat ist seriös nicht machbar. Da bekommst du bestenfalls automatisierte Reports, schlimmstenfalls gar nichts.',
            },
            {
              title: 'Langzeitverträge ohne Ergebnisse',
              text:
                'Wer dich an 12 oder 24 Monate bindet, bevor Ergebnisse da sind, vertraut der eigenen Leistung nicht. Seriöse Anbieter haben kurze Kündigungsfristen.',
            },
            {
              title: 'Tool-Abos, die niemand nutzt',
              text:
                'Manche Agenturen verkaufen teure Tool-Lizenzen mit, die niemand aktiv einsetzt. Frag immer: Welche Tools nutzt ihr, und wer arbeitet damit?',
            },
            {
              title: '"KI-Sichtbarkeit" als Upsell ohne Substanz',
              text:
                'Klassische SEO-Agenturen, die plötzlich AI SEO anbieten, ohne ihre Methoden zu ändern. Frag nach konkreten KI-Zitierungsbeispielen ihrer Kunden.',
            },
            {
              title: 'Content-Massen ohne Strategie',
              text:
                '50 Blog-Artikel im Monat klingen viel, bringen aber nichts, wenn keiner davon von KI als Quelle erkannt wird. Qualität und Struktur schlagen Quantität.',
            },
            {
              title: 'Einmalige Optimierung als Dauerlösung',
              text:
                'Was heute funktioniert, kann in einem Jahr veraltet sein. Eine einmalige Optimierung ist ein Start, kein Endzustand.',
            },
          ],
        },
        {
          id: 'timeline',
          heading: 'Wann sich die Investition rechnet',
          intro:
            'Kein Overnight-Erfolg, aber deutlich schneller als klassisches SEO.',
          steps: [
            {
              title: 'Monat 1 bis 2: Technische Basis',
              text:
                'Schema-Markup, llms.txt, Content-Restrukturierung. Die Website wird KI-ready, die ersten Crawls durch KI-Bots beginnen.',
            },
            {
              title: 'Monat 3 bis 4: Erste Sichtbarkeit',
              text:
                'KI-Systeme erkennen deine Inhalte als Quelle. Erste Erwähnungen tauchen auf, das Monitoring zeigt Fortschritt.',
            },
            {
              title: 'Monat 5 bis 6: Messbare Ergebnisse',
              text:
                'Konsistente Zitierungen über mehrere Plattformen, erste Anfragen aus KI-Empfehlungen. Der ROI wird messbar.',
            },
          ],
          quote:
            'Break-even typisch nach 3 bis 6 Monaten. Beim einmaligen Upgrade oft schneller, weil schon ein einziger zusätzlicher Auftrag die Kosten deckt.',
        },
      ]}
      faqTitle="Häufig gestellte Fragen zu KI-Sichtbarkeit Kosten"
      faqs={[
        {
          q: 'Gibt es versteckte Kosten bei KI-Sichtbarkeit?',
          a: 'Bei aiseo.hamburg nicht. Du bekommst einen klaren Kostenvoranschlag vor Projektstart. Einmalige Projekte haben einen Festpreis, laufende Betreuung eine monatliche Pauschale ohne Mindestlaufzeit. Es gibt keine versteckten Setup-Gebühren, keine Tool-Kosten die du separat zahlen musst und keine nachträglichen Aufschläge.',
        },
        {
          q: 'Kann ich KI-Sichtbarkeit selbst machen?',
          a: 'Grundsätzlich ja. Viele technische Grundlagen wie Schema-Markup, llms.txt und Content-Strukturierung kannst du selbst umsetzen, wenn du Zeit und technisches Verständnis hast. Der Vorteil einer Agentur: Erfahrung mit dem, was tatsächlich zu KI-Zitierungen führt, und systematisches Monitoring über alle Plattformen.',
        },
        {
          q: 'Was ist der typische ROI von KI-Sichtbarkeit?',
          a: 'Der ROI hängt stark von deiner Branche und deinem durchschnittlichen Auftragswert ab. Bei Dienstleistern mit Auftragswerten ab 2.000 Euro reichen oft 1-2 zusätzliche Kundenanfragen pro Monat, um die Investition zu amortisieren. Bei E-Commerce-Unternehmen rechnet sich KI-Sichtbarkeit über das Volumen.',
        },
        {
          q: 'Gibt es eine Garantie für KI-Sichtbarkeit?',
          a: 'Niemand kann garantieren, dass ChatGPT oder Perplexity dein Unternehmen empfiehlt. KI-Antworten sind kontextabhängig und verändern sich. Was wir garantieren: eine saubere technische Basis, optimierte Inhalte und messbare Verbesserung deiner Ausgangslage. Wer dir Platz-1-Garantien verkauft, verkauft heiße Luft.',
        },
        {
          q: 'Wie schnell sehe ich Ergebnisse?',
          a: 'Technische Optimierungen wie Schema-Markup und llms.txt wirken innerhalb weniger Wochen. Content-basierte Maßnahmen brauchen typischerweise 2-4 Monate. Messbare, konsistente KI-Sichtbarkeit entsteht nach 3-6 Monaten. Das ist schneller als klassisches SEO, aber kein Overnight-Erfolg.',
        },
        {
          q: 'Lohnt sich KI-Sichtbarkeit für kleine Unternehmen?',
          a: 'Gerade für kleine Unternehmen kann KI-Sichtbarkeit ein enormer Hebel sein. Während bei Google die großen Marken dominieren, empfehlen KI-Systeme oft spezialisierte Anbieter. Ein einmaliges Upgrade für 1.500 Euro kann sich bereits im ersten Monat rechnen, wenn ein einziger Kunde darüber kommt.',
        },
        {
          q: 'Was passiert, wenn ich die Betreuung beende?',
          a: 'Alle technischen Optimierungen bleiben bestehen. Deine Website behält das Schema-Markup, die strukturierten Inhalte und die llms.txt. Was wegfällt: laufendes Monitoring, Content-Updates und die Anpassung an neue KI-Plattformen. Die Basis bleibt, aber ohne Pflege verliert sie über Zeit an Wirkung.',
        },
      ]}
      sourcesTitle="Quellen und weiterführende Informationen"
      sources={[
        {
          label: 'Aggarwal et al. (2023)',
          text:
            'GEO: Generative Engine Optimization. Die akademische Grundlage für AI-SEO-Methodik und die Bewertung von Zitierbarkeit.',
        },
        {
          label: 'Gartner (2024)',
          text:
            'Prognose, dass das Suchmaschinen-Volumen bis 2026 um 25 Prozent sinkt, weil Nutzer zu KI-Chatbots wechseln.',
          href: 'https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026',
        },
        {
          label: 'aiseo.hamburg, Preise',
          text: 'Die eigene Preisliste mit diesen Paketen, Stand August 2026. Maßgeblich ist das Angebot im Einzelfall.',
          href: 'https://aiseo.hamburg/preise',
        },
      ]}
      relatedTitle="Verwandte Guides:"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit',
          description: 'Wie Unternehmen in KI-Antworten sichtbar werden.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar',
        },
        {
          title: 'AI SEO Agentur',
          description: 'Was eine gute AI SEO Agentur leistet und worauf du achten solltest.',
          href: '/ai-seo-agentur',
          tag: 'Leistung',
        },
        {
          title: 'AI-Sichtbarkeits-Upgrade',
          description: 'Das einmalige Paket für 1.500 Euro netto, mit Umfang und Ablauf im Detail.',
          href: '/ai-sichtbarkeits-upgrade-hamburg',
          tag: 'Angebot',
        },
      ]}
      ctaTitle="Was kostet KI-Sichtbarkeit für DEIN Unternehmen?"
      ctaText="Jedes Unternehmen ist anders. Lass uns in 15 Minuten prüfen, wo du stehst und was sich für dich konkret lohnt. Kostenlos und ohne Verpflichtung."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse starten"
    />
  );
}

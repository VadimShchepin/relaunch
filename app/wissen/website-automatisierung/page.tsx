import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function WebsiteAutomatisierungPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/website-automatisierung"
      breadcrumbLabel="Website-Automatisierung"
      eyebrow="Automatisierung"
      title="Website-Automatisierung: Tools und Strategien, die wirklich funktionieren"
      description="79 % nutzen KI-Tools. Nur 23 % haben eine Strategie. Hier steht, welche Tools sich lohnen und worauf du in Deutschland achten musst."
      publishedAt="2026-03-12"
      modifiedAt="2026-08-24"
      image={{
        src: '/images/wissen/automatisierung.jpg',
        alt: 'Website-Automatisierung: Code und moderne Entwicklung',
        caption: 'Automatisierung beginnt nicht beim Tool, sondern bei der Frage, welche Aufgabe jede Woche wiederkehrt. Foto: Unsplash.',
        width: 1200,
        height: 900,
      }}
      summaryTitle="TL;DR: Das Wichtigste in 30 Sekunden"
      summaryItems={[
        'Beste Tools: Make.com (EU-gehostet, ideal für KMU), n8n (Open-Source, Self-Hosting), Zapier (mächtig, aber US-Server).',
        'DSGVO: EU-gehostete oder selbst gehostete Lösungen bevorzugen, AVV bei jedem Tool prüfen.',
        'Produktivität: bis zu 9,3 % höhere Produktivität durch konsequente KI-Nutzung, berechnet vom IW Köln.',
        'Förderung: die BAFA-Beratungsförderung deckt bis zu 80 % der Beratungskosten.',
        'Reihenfolge: erst den Prozess beschreiben, dann das Tool wählen. Umgekehrt entstehen Workflows, die niemand nutzt.',
      ]}
      sections={[
        {
          id: 'warum-jetzt',
          heading: 'Warum Website-Automatisierung jetzt wichtig ist',
          intro:
            '79 % der Unternehmen nutzen KI-Tools. Nur 23 % haben eine Strategie. Der Rest verschwendet Geld oder verpasst den Anschluss.',
          paragraphs: [
            'Seit 2025 gilt der EU AI Act mit klaren Regeln für KI in Unternehmen. Wer jetzt nicht strategisch automatisiert, riskiert Wettbewerbsnachteile und Compliance-Probleme.',
            'Die gute Nachricht: Automatisierung ist nicht nur für Konzerne. KMU setzen die richtigen Tools oft schneller um, weil Bürokratie und Entscheidungswege kürzer sind.',
          ],
          chart: {
            variant: 'column',
            title: 'KI-Einsatz und KI-Strategie in Unternehmen',
            headingLevel: 'h3',
            axis: { title: 'Anteil der Unternehmen', unit: ' %' },
            points: [
              { label: 'Planen agentische KI innerhalb von zwei Jahren', short: 'Geplant', value: 74 },
              { label: 'Haben ausgereifte Governance für KI-Agenten', short: 'Governance', value: 21 },
            ],
            stats: [
              { label: 'Lücke', value: '53 Prozentpunkte' },
              { label: 'Folge', value: 'Tools ohne Prozess' },
              { label: 'Quelle', value: 'Deloitte AI Institute' },
            ],
            table: { label: 'Zahlen als Tabelle', heads: ['Gruppe', 'Anteil'] },
            caption:
              'Die Lücke zwischen Plan und Prozess ist der eigentliche Kostenfaktor: Abos laufen, Workflows bleiben halb fertig. Quelle: Deloitte AI Institute, State of AI in the Enterprise, achte Ausgabe, Januar 2026, 3.235 Führungskräfte aus 24 Ländern.',
          },
        },
        {
          id: 'tool-vergleich',
          heading: 'Die besten Automatisierungs-Tools im Vergleich',
          intro: 'Drei Tools dominieren den Markt. Jedes hat klare Stärken und Schwächen:',
          table: {
            headers: ['Kriterium', 'Make.com', 'n8n', 'Zapier'],
            emphasis: 1,
            rows: [
              ['Einordnung', 'Empfehlung für KMU', 'Open Source', 'US-gehostet'],
              [
                'Vorteile',
                'EU-Hosting, DSGVO-konform, visuelle Oberfläche, fairer Preis',
                'Self-Hosting möglich, volle Datenkontrolle, kein Vendor-Lock-in',
                '7.000+ Integrationen, einfache Bedienung',
              ],
              [
                'Nachteile',
                'Komplexe Szenarien brauchen Einarbeitung',
                'Technisches Setup nötig, weniger Integrationen',
                'US-Server, teuer bei hohem Volumen',
              ],
              [
                'Preis',
                'Ab 0 EUR/Monat (1.000 Ops), Pro ab 9 EUR/Monat',
                'Kostenlos (Self-Hosted), Cloud ab 20 EUR/Monat',
                'Ab 0 USD/Monat (100 Tasks), Pro ab 19,99 USD/Monat',
              ],
              [
                'DSGVO',
                'EU-Server, AVV verfügbar',
                'Volle Kontrolle bei Self-Hosting',
                'US-Server, DPA verfügbar, Restrisiko bleibt',
              ],
            ],
            caption:
              'Die Zeile DSGVO entscheidet in Deutschland häufiger über die Toolwahl als die Zahl der Integrationen.',
            note: 'Für Enterprise: SAP Build Process Automation, Microsoft Power Automate oder UiPath. Mächtig, aber deutlich komplexer und teurer.',
          },
        },
        {
          id: 'dsgvo',
          heading: 'DSGVO und Automatisierung: Was du beachten musst',
          intro:
            'Die DSGVO bestimmt, welche Tools du einsetzen darfst. US-Tools wie Zapier speichern Daten auf amerikanischen Servern. Auch mit dem EU-US Data Privacy Framework bleibt ein rechtliches Restrisiko.',
          bullets: [
            'EU-Hosting wählen: Make.com bietet EU-Server und einen vollständigen Auftragsverarbeitungsvertrag (AVV).',
            'Self-Hosting nutzen: n8n auf eigenen Servern oder bei deutschen Anbietern (Hetzner, IONOS) betreiben, für volle Datenkontrolle.',
            'AVV abschließen: Bei jedem Tool prüfen, welche Daten wohin fließen.',
          ],
          paragraphs: [
            'Seit 2025 bringt der EU AI Act zusätzliche Anforderungen: Transparenzpflichten, Risikoklassifizierung, Dokumentation. Von Anfang an mitdenken.',
          ],
        },
        {
          id: 'zehn-automatisierungen',
          heading: '10 Automatisierungen, die jedes Unternehmen sofort umsetzen kann',
          intro: 'Starte mit den Aufgaben, die dich am meisten Zeit kosten:',
          cards: [
            {
              title: 'Kontaktformular-Antworten',
              text: 'Automatische Bestätigungs-E-Mails und KI-Chatbots für sofortige Reaktion, auch außerhalb der Geschäftszeiten.',
            },
            {
              title: 'Social-Media-Planung',
              text: 'Beiträge vorplanen und automatisch veröffentlichen. Spart Stunden pro Woche.',
            },
            {
              title: 'E-Mail-Sequenzen',
              text: 'Willkommens-E-Mails, Follow-ups und Newsletter, die automatisch zum richtigen Zeitpunkt rausgehen.',
            },
            {
              title: 'Rechnungserstellung',
              text: 'Automatische Rechnungen nach Auftragseingang, inklusive Zahlungserinnerungen.',
            },
            {
              title: 'Terminbuchung',
              text: 'Kunden buchen selbst, du bekommst automatisch alle Infos.',
            },
            {
              title: 'Angebotserstellung',
              text: 'Aus Formulardaten automatisch individuelle Angebote generieren und versenden.',
            },
            {
              title: 'Belegerfassung',
              text: 'Belege fotografieren, automatisch erkennen und in die Buchhaltung übertragen.',
            },
            {
              title: 'Content-Publishing',
              text: 'Blog-Beiträge automatisch auf Website, Newsletter und Social Media verteilen.',
            },
            {
              title: 'Lead-Scoring & CRM',
              text: 'Neue Kontakte automatisch bewerten, priorisieren und im CRM anlegen.',
            },
            {
              title: 'Website-Monitoring',
              text: 'Automatische Benachrichtigung bei Ausfällen, langsamen Ladezeiten oder SEO-Problemen.',
            },
          ],
          stat: 'Konsequent genutzte KI könnte die Produktivität in Deutschland um bis zu 9,3 % steigern. Quelle: IW Köln, Studie für die Stiftung Familienunternehmen.',
          note: 'Die Reihenfolge ist bewusst gewählt: Die ersten vier Punkte lassen sich in einem Nachmittag einrichten, die letzten drei brauchen eine Anbindung an CRM oder Buchhaltung. BAFA-Förderung: bis zu 80 % der Beratungskosten, über das Programm Förderung unternehmerischen Know-hows. Quelle: Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA). Professionelle Einrichtung und Strategie liegen je nach Umfang zwischen 2.000 und 10.000 EUR.',
        },
        {
          id: 'hamburg',
          heading: 'Website-Automatisierung für Hamburger Unternehmen',
          paragraphs: [
            'Hamburg ist ein Hotspot für KI und Automatisierung. Die Otto Group nutzt mit ogGPT ein eigenes KI-System für Prozessautomatisierung, Jung von Matt setzt mit Stables auf KI-gestützte Kreativprozesse, und das ARIC vernetzt Unternehmen, Forschung und Startups.',
            'Für KMU heißt das: Lokale Expertise, Förderprogramme und ein starkes Netzwerk sind da. Die Hamburger Wirtschaftsbehörde fördert digitale Transformation aktiv. In Kombination mit BAFA-Förderung sind Automatisierungsprojekte mit minimalem Eigenanteil möglich.',
          ],
        },
        {
          id: 'ki-sichtbarkeit',
          heading: 'Automatisierung und KI-Sichtbarkeit',
          paragraphs: [
            <>
              Automatisierung hilft nicht nur bei internen Prozessen, sie ist auch ein Hebel für deine
              Sichtbarkeit in KI-Systemen wie ChatGPT oder Perplexity. Content-Freshness, strukturierte
              Daten und KI-Monitoring lassen sich automatisieren. Mehr dazu in unserem{' '}
              <a href="/wissen/ki-sichtbarkeit">Guide zu KI-Sichtbarkeit</a>.
            </>,
          ],
        },
        {
          id: 'webentwicklung',
          heading: 'Webentwicklung-Tools: Moderne Entwicklung automatisieren',
          intro: 'Auch die Webentwicklung selbst profitiert massiv von Automatisierung:',
          bullets: [
            'CI/CD-Pipelines: GitHub Actions, GitLab CI oder Vercel automatisieren Build, Test und Deployment bei jeder Änderung.',
            'Automatisiertes Testing: Unit-Tests, E2E-Tests und visuelle Regressionstests bei jedem Commit.',
            'KI-Coding-Assistenten: Claude Code, GitHub Copilot oder Cursor beschleunigen die Entwicklung und reduzieren Fehler.',
            'Headless CMS: Inhalte über APIs verwalten und automatisch auf allen Kanälen ausspielen.',
          ],
          paragraphs: [
            'Gerade für kleine Teams ist die Kombination aus automatisierten Workflows und KI-gestützter Entwicklung ein enormer Hebel.',
          ],
        },
      ]}
      faqTitle="Häufige Fragen zur Website-Automatisierung"
      faqs={[
        {
          q: 'Was ist Website-Automatisierung?',
          a: 'Website-Automatisierung bedeutet, wiederkehrende digitale Prozesse durch Software erledigen zu lassen, zum Beispiel Kontaktformular-Antworten, E-Mail-Sequenzen, Social-Media-Posts oder Rechnungserstellung. Ziel ist es, manuelle Arbeit zu reduzieren und Fehler zu vermeiden.',
        },
        {
          q: 'Welches Automatisierungs-Tool ist das beste für deutsche Unternehmen?',
          a: 'Make.com bietet das beste Gesamtpaket für deutsche KMU: EU-Hosting, DSGVO-Konformität, faire Preise und eine intuitive Oberfläche. Für Unternehmen mit technischem Know-how ist n8n als Open-Source-Alternative ideal, da es komplett selbst gehostet werden kann.',
        },
        {
          q: 'Ist Zapier DSGVO-konform?',
          a: 'Zapier ist ein US-Unternehmen und speichert Daten auf US-Servern. Trotz EU-US Data Privacy Framework bleibt ein Restrisiko. Für sensible Daten empfehlen wir EU-gehostete Alternativen wie Make.com oder selbst gehostetes n8n.',
        },
        {
          q: 'Was kostet Website-Automatisierung?',
          a: 'Die Tools selbst starten oft kostenlos: Make.com ab 0 EUR/Monat (1.000 Operationen), n8n ist komplett kostenlos bei Self-Hosting. Professionelle Einrichtung und Strategie kosten je nach Umfang zwischen 2.000 und 10.000 EUR. Bis zu 80 % davon können über BAFA-Förderung gedeckt werden.',
        },
        {
          q: 'Kann ich Automatisierung selbst einrichten oder brauche ich Hilfe?',
          a: 'Einfache Workflows (z.B. Formular-Antworten, E-Mail-Sequenzen) kannst du mit etwas Einarbeitung selbst umsetzen. Für komplexere Szenarien wie CRM-Integration, Lead-Scoring oder DSGVO-konforme Datenverarbeitung lohnt sich professionelle Unterstützung.',
        },
      ]}
      sources={[
        {
          label: 'Deloitte AI Institute',
          text: 'State of AI in the Enterprise, achte Ausgabe, Januar 2026, Befragung von 3.235 Führungskräften in 24 Ländern: 23 % nutzen agentische KI zumindest moderat, 74 % wollen sie innerhalb von zwei Jahren einsetzen, aber nur 21 % haben ausgereifte Governance für autonome Agenten.',
          href: 'https://www.deloitte.com/global/en/issues/generative-ai/state-of-ai-in-enterprise.html',
        },
        {
          label: 'Institut der deutschen Wirtschaft',
          text: 'Studie des IW Köln für die Stiftung Familienunternehmen, Fünf Hebel für mehr Produktivität: konsequente KI-Nutzung hebt die Produktivität um bis zu 9,3 %, höhere Forschungsinvestitionen um bis zu 13 %. Für 2025 bis 2030 projiziert das IW 0,9 % Produktivitätswachstum pro Jahr, also kein Produktivitätswunder.',
          href: 'https://www.iwkoeln.de/studien/vera-demary-michael-groemling-christian-kestermann-marc-scheufen-stefanie-seele-oliver-stettes-marco-trenz-wie-wird-ki-die-produktivitaet-in-deutschland-veraendern.html',
        },
        {
          label: 'Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)',
          text: 'Förderung unternehmerischen Know-hows, Zuschuss von bis zu 80 % der Beratungskosten.',
        },
        {
          label: 'hamburg-business.com',
          text: 'Hamburger Unternehmen und KI-Transformation, Grundlage der Beispiele Otto Group, Jung von Matt und ARIC.',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: So wirst du von ChatGPT und Co. empfohlen',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Guide',
        },
        {
          title: 'Technische KI-Sichtbarkeit',
          description: 'robots.txt, llms.txt, Schema.org und Crawler-Zugang richtig konfigurieren, alles automatisierbar.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'KI-Sichtbarkeit messen',
          description: 'Welche Kennzahlen sich automatisiert erheben lassen und welche du von Hand prüfen musst.',
          href: '/wissen/ki-sichtbarkeit-messen',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Du willst deine Website und Prozesse automatisieren?"
      ctaText="Ich helfe dir, die richtigen Tools auszuwählen, DSGVO-konform einzurichten und mit deiner KI-Sichtbarkeit zu verbinden. Kein Verkaufsgespräch, nur eine ehrliche Einschätzung."
      ctaHref="/contact"
      ctaLabel="Kostenlos beraten lassen"
    />
  );
}

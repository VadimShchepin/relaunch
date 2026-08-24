import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

/**
 * Register: this page addresses Kanzleien with "Sie", not the site-wide "du".
 * That is deliberate and locked in: the CTA heading ("... zu Ihnen geschickt?")
 * is part of the page's indexed heading set, so switching register would either
 * break it or leave the page half formal, half informal.
 */
export default function KiSichtbarkeitAnwaeltePage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-anwaelte"
      breadcrumbLabel="KI-Sichtbarkeit für Anwälte"
      eyebrow="Branche: Recht"
      title="KI-Sichtbarkeit für Anwälte & Kanzleien: Mandanten fragen die KI"
      description='Potenzielle Mandanten googlen nicht mehr "Anwalt Arbeitsrecht Hamburg". Sie fragen ChatGPT. Die KI empfiehlt zwei bis drei Kanzleien. Wer nicht dabei ist, verliert Mandate, ohne es zu wissen. Dieser Guide zeigt, wie Kanzleien in KI-Empfehlungen sichtbar werden.'
      publishedAt="2026-03-24"
      modifiedAt="2026-08-24"
      image={{
        src: '/images/wissen/ki-sichtbarkeit-anwaelte/hero-law-firm-ai-visibility.webp',
        alt: 'Legal-Tech-Dashboard zeigt, wie Fachpublikationen, Bewertungen, lokale Signale und LegalService-Schema zu KI-Empfehlungen für Kanzleien führen',
        caption:
          'Für Kanzleien zählt nicht nur Ranking, sondern bestätigte Expertise über Website, Fachportale, Bewertungen und strukturierte Daten.',
        width: 1672,
        height: 941,
      }}
      summaryTitle="Zusammenfassung"
      summaryItems={[
        'Mandanten fragen KI-Systeme nach Anwaltsempfehlungen. Wer dort nicht auftaucht, wird nicht kontaktiert.',
        'Rechtsberatung ist ein YMYL-Thema: KI-Systeme stellen höchste E-E-A-T-Anforderungen an empfohlene Kanzleien.',
        'Spezialisierung schlägt Vollservice: Klare Rechtsgebiets-Signale erhöhen die Empfehlungswahrscheinlichkeit deutlich.',
        'Fachpublikationen, Mandantenbewertungen und konsistente Profile auf Fachportalen sind die drei stärksten Hebel.',
        'Schema.org LegalService Markup und strukturierte FAQ-Seiten machen Kanzlei-Websites maschinenlesbar.',
      ]}
      sections={[
        {
          id: 'problem',
          heading: 'Das Problem: Mandanten fragen ChatGPT nach Anwaltsempfehlungen',
          intro:
            'Die Mandantenakquise hat sich verändert. Statt "Anwalt Arbeitsrecht Hamburg" in Google einzugeben, fragen immer mehr Menschen ChatGPT, Perplexity oder Google AI: "Welchen Anwalt für Arbeitsrecht kannst du in Hamburg empfehlen?"',
          paragraphs: [
            'Die KI antwortet nicht mit zehn blauen Links. Sie empfiehlt zwei bis drei Kanzleien namentlich, mit Begründung. Wer in dieser Empfehlung auftaucht, bekommt den Anruf. Wer nicht auftaucht, erfährt nicht einmal, dass ein potenzieller Mandant nach genau seiner Spezialisierung gesucht hat.',
            'Das Tückische: Klassische Sichtbarkeit schützt nicht. Ein Top-Profil auf anwalt.de, eine JUVE-Empfehlung oder ein gutes Google-Ranking bedeuten nicht automatisch, dass ChatGPT Ihre Kanzlei empfiehlt. KI-Systeme bewerten nach eigenen Kriterien, und diese Kriterien sind für Kanzleien besonders anspruchsvoll.',
          ],
          cards: [
            {
              title: 'Früher: Google-Suche',
              text: 'Mandant googelt "Anwalt Arbeitsrecht Hamburg", sieht 10 Ergebnisse, klickt 3-4 Kanzlei-Websites an, vergleicht und ruft an. Mehrere Kanzleien bekommen eine Chance.',
            },
            {
              title: 'Heute: KI-Empfehlung',
              text: 'Mandant fragt ChatGPT "Empfiehl mir einen guten Arbeitsrechtler in Hamburg". Die KI nennt 2-3 Kanzleien mit Begründung. Der Mandant kontaktiert die erste Empfehlung. Fertig.',
            },
          ],
          note: 'Ein Profil auf anwalt.de und eine JUVE-Listung allein reichen nicht mehr. Diese Plattformen sind wichtige Bausteine, aber KI-Systeme bewerten das Gesamtbild: Wie konsistent ist Ihre Expertise über alle Quellen hinweg dokumentiert? Wie aktuell sind Ihre Fachbeiträge? Wie bewerten Mandanten Ihre Arbeit?',
        },
        {
          id: 'warum-wichtig',
          heading: 'Warum KI-Sichtbarkeit für Kanzleien besonders wichtig ist',
          intro:
            'Rechtsberatung gehört zu den sensibelsten Bereichen im Internet. Google nennt es YMYL, "Your Money Your Life". KI-Systeme übernehmen dieses Prinzip und verschärfen es sogar. Die Hürde für eine Kanzlei-Empfehlung ist höher als für einen Restauranttipp.',
          steps: [
            {
              title: 'YMYL-Thema mit höchsten E-E-A-T-Anforderungen',
              text: 'Rechtliche Beratung kann das Leben von Menschen grundlegend verändern. KI-Systeme wissen das und prüfen besonders streng: Ist die empfohlene Kanzlei tatsächlich spezialisiert? Gibt es nachweisbare Expertise? Bestätigen unabhängige Quellen die Kompetenz? Eine falsche Anwaltsempfehlung hat andere Konsequenzen als eine falsche Restaurantempfehlung.',
            },
            {
              title: 'Rechtsberatung ist Vertrauenssache',
              text: 'Mandanten vertrauen ihrem Anwalt sensible Informationen an. Wenn eine KI einen Anwalt empfiehlt, ist das ein implizites Vertrauensvotum. KI-Systeme gehen mit dieser Verantwortung vorsichtig um und empfehlen nur Kanzleien, deren Reputation über mehrere unabhängige Quellen belegt ist.',
            },
            {
              title: 'KI-Empfehlung = implizites Vertrauensvotum',
              text: 'Wenn ChatGPT sagt "Für Arbeitsrecht in Hamburg empfehle ich Kanzlei X", dann hat das für den Nutzer eine andere Qualität als ein Google-Suchergebnis. Der Nutzer behandelt die KI-Empfehlung wie den Rat eines kompetenten Bekannten. Die Conversion-Rate von KI-Empfehlung zu Erstkontakt ist entsprechend höher als bei klassischen Suchergebnissen.',
            },
            {
              title: 'Wettbewerbsvorteil durch frühe Positionierung',
              text: 'Die meisten Kanzleien ignorieren KI-Sichtbarkeit noch vollständig. Wer jetzt die richtigen Signale setzt, baut einen Vorsprung auf, den Wettbewerber später nur schwer aufholen können. KI-Trainingsdaten sind kumulativ, frühe und konsistente Erwähnungen wiegen schwerer als späte Aufholjagden.',
            },
          ],
        },
        {
          id: 'faktoren',
          heading: '5 Faktoren, die KI-Empfehlungen für Kanzleien beeinflussen',
          intro:
            'KI-Systeme bewerten Kanzleien anhand spezifischer Signale. Wer diese Faktoren kennt und gezielt bedient, erhöht die Wahrscheinlichkeit, in Empfehlungen aufzutauchen, erheblich.',
          steps: [
            {
              title: 'Fachliche Reputation',
              text: 'Veröffentlichungen in Fachzeitschriften (NJW, MDR, NZA), Vorträge auf Fachtagungen, Kommentierungen, JUVE-Rankings und Listungen in Chambers oder Legal 500. KI-Systeme erkennen diese Signale und gewichten sie als starke Expertise-Indikatoren. Ein Aufsatz in der NJW wiegt schwerer als hundert Blogposts auf der eigenen Website.',
            },
            {
              title: 'Bewertungsprofil',
              text: 'Google-Bewertungen, anwalt.de-Bewertungen, Kununu (als Arbeitgeber) und ProvenExpert. KI-Systeme aggregieren Bewertungen über Plattformen hinweg. Eine Kanzlei mit 4,8 Sternen auf Google, positiven anwalt.de-Bewertungen und guten Kununu-Werten sendet ein starkes Vertrauenssignal. Vereinzelte Bewertungen auf einer Plattform reichen nicht.',
            },
            {
              title: 'Spezialisierungssignale',
              text: 'KI-Systeme empfehlen Spezialisten, keine Generalisten. Eine Kanzlei, die sich klar als "Boutique für Arbeitsrecht" positioniert, wird eher empfohlen als eine, die 15 Rechtsgebiete auf der Website listet. Klare Rechtsgebiets-Seiten, Fachanwaltstitel und thematisch fokussierte Fachbeiträge sind die stärksten Spezialisierungssignale.',
            },
            {
              title: 'Digitale Präsenz und Website-Qualität',
              text: 'Strukturierte Website mit klaren Rechtsgebiets-Seiten, FAQ-Bereichen, Anwaltsprofilen mit Vita und Publikationsliste. Schema.org-Markup (LegalService, Attorney), schnelle Ladezeiten, Mobile-Optimierung. KI-Crawler bewerten die technische Qualität und Struktur Ihrer Website als Indikator für Professionalität.',
            },
            {
              title: 'Medienresonanz',
              text: 'Pressezitate in Tageszeitungen und Fachmedien, Gastbeiträge in Wirtschaftsmedien (Handelsblatt, WirtschaftsWoche), Interviews und Einordnungen zu aktuellen Rechtsfragen. Redaktionelle Erwähnungen durch Dritte wiegen bei KI-Systemen deutlich schwerer als eigene Veröffentlichungen auf der Kanzlei-Website.',
            },
          ],
        },
        {
          id: 'strategien',
          heading: '7 Strategien für Anwälte und Kanzleien',
          intro:
            'Die ersten vier Punkte betreffen Ihre eigene Website, die letzten drei alles, was außerhalb davon über Sie steht. Beides zählt, aber in dieser Reihenfolge lässt es sich abarbeiten.',
          steps: [
            {
              title: 'Rechtsgebiets-Seiten mit FAQ erstellen',
              text: 'Jedes Rechtsgebiet Ihrer Kanzlei braucht eine eigene, ausführliche Seite. Nicht nur eine Aufzählung von Tätigkeiten, sondern echte Inhalte: Typische Mandate, häufige Fragen, aktuelle Rechtsprechung, Ihre spezifische Erfahrung. Ergänzen Sie jede Seite um einen FAQ-Bereich mit den Fragen, die Mandanten tatsächlich stellen. KI-Systeme nutzen genau diese FAQ-Strukturen als Antwortquellen.',
            },
            {
              title: 'Fachbeiträge und Legal-Tech-Content publizieren',
              text: 'Schreiben Sie regelmäßig Fachbeiträge, nicht nur auf Ihrer Website, sondern in Fachzeitschriften, auf anwalt.de, auf LinkedIn. Kommentieren Sie aktuelle Urteile. Ordnen Sie Gesetzesänderungen ein. KI-Systeme lernen aus diesen Quellen und ordnen Ihre Expertise bestimmten Rechtsgebieten zu. Ein monatlicher Fachbeitrag ist mehr wert als eine perfekte Kanzlei-Website ohne aktuelle Inhalte.',
            },
            {
              title: 'Google Business mit Kanzlei-Kategorien optimieren',
              text: 'Ihr Google-Business-Profil ist eine der wichtigsten Quellen für KI-Systeme bei lokalen Empfehlungen. Wählen Sie die passende Hauptkategorie (z.B. "Anwalt für Arbeitsrecht"), ergänzen Sie Nebenkategorien, pflegen Sie Öffnungszeiten, Fotos der Kanzleiräume und reagieren Sie professionell auf jede Bewertung. Ein vollständiges, aktives Google-Business-Profil signalisiert Relevanz und Vertrauenswürdigkeit.',
            },
            {
              title: 'Schema.org LegalService Markup implementieren',
              text: 'Strukturierte Daten machen Ihre Website für KI-Systeme maschinenlesbar. Implementieren Sie Schema.org-Markup: LegalService für die Kanzlei, Attorney für einzelne Anwälte, FAQPage für FAQ-Bereiche, Review für Mandantenbewertungen. Das ist kein optionales Extra, sondern die Sprache, die KI-Crawler verstehen.',
            },
            {
              title: 'Mandantenbewertungen systematisch aufbauen',
              text: 'Bitten Sie zufriedene Mandanten aktiv um Bewertungen, auf Google, auf anwalt.de, auf ProvenExpert. Machen Sie es einfach: QR-Code in der Kanzlei, Link in der Abschluss-E-Mail, kurze Anleitung. Reagieren Sie auf jede Bewertung professionell und zeitnah. KI-Systeme bewerten nicht nur die Sterne, sondern auch die Aktualität und Ihre Antworten.',
            },
            {
              title: 'Kanzlei-Profile auf Fachportalen pflegen',
              text: 'anwalt.de, JUVE, Chambers, Legal 500, anwaltssuche.de, Deutsches Anwaltsregister: all diese Profile müssen vollständig, aktuell und konsistent sein. Gleicher Name, gleiche Adresse, gleiche Telefonnummer, gleiche Rechtsgebiete überall. KI-Systeme cross-referenzieren diese Quellen. Inkonsistenzen senken das Vertrauen.',
            },
            {
              title: 'Thought Leadership durch Gastbeiträge aufbauen',
              text: 'Schreiben Sie Gastbeiträge für Wirtschaftsmedien, geben Sie Interviews zu aktuellen Rechtsfragen, sprechen Sie auf Branchenveranstaltungen. Jede redaktionelle Erwähnung durch Dritte ist ein starkes Signal für KI-Systeme. Ziel: Wenn ein Journalist "Experte für Arbeitsrecht Hamburg" sucht, sollte Ihr Name fallen, denn genau diese Medienberichte fließen in KI-Trainingsdaten ein.',
            },
          ],
        },
        {
          id: 'kanzlei-typen',
          heading: 'Kanzlei-Typen und ihre KI-Chancen',
          intro:
            'Nicht jede Kanzlei braucht die gleiche KI-Strategie. Der richtige Ansatz hängt von Ihrer Größe, Spezialisierung und Zielgruppe ab.',
          table: {
            headers: ['Kanzlei-Typ', 'Vorteil', 'Strategie'],
            rows: [
              [
                'Einzelanwalt / Kleine Kanzlei',
                'Maximale Spezialisierung möglich. Wer als Einzelanwalt nur Arbeitsrecht macht, hat ein glasklares Spezialisierungssignal.',
                'Auf ein bis zwei Rechtsgebiete fokussieren, tiefe Inhalte dazu aufbauen, Google Business und anwalt.de besonders sorgfältig pflegen, systematisch Bewertungen sammeln. Ziel: bei "Wer ist ein guter Arbeitsrechtler in Hamburg?" als Spezialist empfohlen werden.',
              ],
              [
                'Boutique-Kanzlei (2-10 Anwälte)',
                'Gebündelte Expertise in einem Bereich. Mehrere Anwälte mit Fachanwaltstitel im gleichen Gebiet sind ein starkes Team-Signal.',
                'Die Kanzlei als Team-Expertise positionieren: individuelle Anwaltsprofile mit Publikationslisten, gemeinsame Fachbeiträge, eigener Newsletter zum Fachgebiet. Ziel: als "die Kanzlei für [Rechtsgebiet]" in der Region wahrgenommen werden.',
              ],
              [
                'Mittelständische Kanzlei (10-50 Anwälte)',
                'Breite Abdeckung mit Tiefe in einzelnen Bereichen. Genug Ressourcen für systematisches Content-Marketing.',
                'Für jedes Rechtsgebiet einen eigenen Content-Hub mit Experten-Profilen aufbauen, die Breite als Stärke nutzen ("Wirtschaftsrechtliche Beratung aus einer Hand"), in PR und Fachpublikationen investieren, Schema.org-Markup für jeden Praxisbereich umsetzen.',
              ],
              [
                'Großkanzlei (50+ Anwälte)',
                'Hohe Medienresonanz, etablierte Marke, JUVE- und Chambers-Rankings. Viele KI-Signale sind bereits vorhanden.',
                'Bestehende Inhalte technisch aufbereiten: Schema.org-Markup, strukturierte FAQ, optimierte Anwaltsprofile. Sicherstellen, dass GPTBot und andere KI-Crawler nicht blockiert werden. Oft ist das Material vorhanden, nur nicht maschinenlesbar.',
              ],
            ],
            caption:
              'Die Spalte Strategie unterscheidet sich stärker als die Spalte Vorteil: Größe entscheidet nicht darüber, ob KI-Sichtbarkeit funktioniert, sondern womit man anfängt.',
          },
        },
        {
          id: 'hamburg',
          heading: 'KI-Sichtbarkeit für Hamburger Kanzleien',
          intro:
            'Hamburg ist einer der größten Rechtsstandorte Deutschlands. Der Wettbewerb ist intensiv, und genau deshalb ist KI-Sichtbarkeit hier besonders wertvoll.',
          stat: 'Die Hanseatische Rechtsanwaltskammer zählt über 10.000 zugelassene Anwältinnen und Anwälte. Bei einer KI-Empfehlung bleiben davon zwei oder drei übrig.',
          cards: [
            {
              title: 'Hamburger Rechtsmarkt',
              text: 'Internationale Großkanzleien, spezialisierte Boutiquen und Einzelanwälte konkurrieren um Mandanten. Besonders stark besetzt: Handels- und Gesellschaftsrecht (Hafenwirtschaft), Arbeitsrecht, Medienrecht und maritimes Wirtschaftsrecht. Wer hier in KI-Empfehlungen auftaucht, differenziert sich vom Wettbewerb.',
            },
            {
              title: 'Lokale Signale nutzen',
              text: 'Hamburg-spezifische Optimierung: Google Business mit Hamburger Adresse und Stadtteil. Mitgliedschaft in der Hanseatischen Rechtsanwaltskammer auf der Website nennen. Lokale Medienarbeit (Hamburger Abendblatt, MOPO, Hamburg Journal). Engagement in Hamburger Wirtschaftsverbänden (Handelskammer, UVNord).',
            },
          ],
          paragraphs: [
            'Hamburger Kanzleien haben einen spezifischen Vorteil: Die Stadt ist groß genug für spezialisierte Anfragen ("Anwalt Seerecht Hamburg"), aber überschaubar genug, dass gezielte lokale Maßnahmen schnell wirken. Ein Fachanwalt für maritimes Wirtschaftsrecht in Hamburg hat bei der entsprechenden KI-Anfrage deutlich weniger Wettbewerb als ein Arbeitsrechtler.',
            'Nutzen Sie den hanseatischen Standortvorteil: Verknüpfen Sie Ihre Kanzlei konsequent mit Hamburg-spezifischen Themen, Institutionen und Medien. KI-Systeme bewerten diese lokale Verankerung als starkes Relevanzsignal.',
          ],
        },
      ]}
      faqTitle="Häufig gestellte Fragen"
      faqs={[
        {
          q: 'Wie wird meine Kanzlei von ChatGPT empfohlen?',
          a: 'ChatGPT empfiehlt Kanzleien, die auf vertrauenswürdigen Quellen konsistent erwähnt werden: anwalt.de, JUVE, Google Business, Fachzeitschriften, Presseartikel. Zusätzlich muss Ihre Website für Bing optimiert sein, da ChatGPT Bing für Live-Suchen nutzt.',
        },
        {
          q: 'Ist KI-Sichtbarkeit für Anwälte DSGVO-konform?',
          a: 'Ja. KI-Sichtbarkeit basiert auf der Optimierung öffentlich zugänglicher Informationen: Website, Branchenverzeichnisse, Fachpublikationen, Bewertungsprofile. Es werden keine personenbezogenen Mandantendaten verarbeitet.',
        },
        {
          q: 'Welche Rechtsgebiete profitieren am meisten von KI-Sichtbarkeit?',
          a: 'Rechtsgebiete mit hohem Privatmandantenanteil: Arbeitsrecht, Familienrecht, Mietrecht, Verkehrsrecht, Erbrecht. Aber auch B2B-Bereiche wie Handelsrecht, IT-Recht und Gesellschaftsrecht, da Unternehmer zunehmend KI für die Kanzleisuche nutzen.',
        },
        {
          q: 'Wie lange dauert es, bis eine Kanzlei in KI-Systemen sichtbar wird?',
          a: 'Erste Ergebnisse bei der Live-Websuche (Perplexity, ChatGPT mit Bing) nach 4-8 Wochen. Für KI-Trainingsdaten: 3-6 Monate, abhängig von Häufigkeit und Qualität Ihrer Fachpublikationen und Erwähnungen.',
        },
        {
          q: 'Reicht ein Profil auf anwalt.de für KI-Sichtbarkeit?',
          a: 'Nein. anwalt.de ist ein wichtiger Baustein, aber nicht ausreichend. KI-Systeme bewerten die Konsistenz über viele Quellen: Website, Google Business, anwalt.de, JUVE, Fachpublikationen, Presseartikel, Bewertungsportale.',
        },
        {
          q: 'Was kostet KI-Sichtbarkeit für Kanzleien?',
          a: 'Die Grundlagen können Sie selbst umsetzen: Website-Optimierung, Google Business, Bewertungsmanagement. Professionelle KI-SEO-Betreuung beginnt bei 1.500-3.000 Euro monatlich, abhängig von Kanzleigröße und Wettbewerbsintensität.',
        },
        {
          q: 'Verstößt KI-SEO für Anwälte gegen das anwaltliche Werberecht?',
          a: 'Nein. KI-SEO basiert auf sachlicher Information, Fachpublikationen und der Optimierung öffentlicher Profile. Das ist nach der liberalisierten BRAO und den Berufsordnungen zulässig. Es gelten die gleichen Regeln wie für klassische Kanzlei-Websites und SEO.',
        },
      ]}
      sources={[
        {
          label: 'Ahrefs (2025)',
          text: 'LLM SEO, Brand Mentions Correlation Study: Zusammenhang zwischen Erwähnungen und Sichtbarkeit in KI-Antworten.',
          href: 'https://ahrefs.com/blog/llm-seo/',
        },
        {
          label: 'Princeton University',
          text: 'The Role of Earned Media in AI Search Engines, Grundlage für die Gewichtung redaktioneller Erwähnungen.',
          href: 'https://arxiv.org/abs/2406.05035',
        },
        {
          label: 'Bundesrechtsanwaltskammer',
          text: 'Berufsrecht und Werberecht für Anwälte, Maßstab für die Zulässigkeit der hier beschriebenen Maßnahmen.',
          href: 'https://www.brak.de/',
        },
        {
          label: 'Google Search Central',
          text: 'Dokumentation zum strukturierten Datentyp LegalService, Basis für Strategie 4.4.',
          href: 'https://developers.google.com/search/docs/appearance/structured-data/legal-service',
        },
      ]}
      relatedTitle="Verwandte Guides"
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide',
          description: 'Grundlagen, Strategie und Frameworks für Sichtbarkeit in allen KI-Systemen.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Guide',
        },
        {
          title: 'Sichtbarkeit in ChatGPT',
          description: 'Wie ChatGPTs Dual-System funktioniert und wie Unternehmen dort empfohlen werden.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'KI-Sichtbarkeit für Dienstleister',
          description: 'Der Branchenvergleich: welche Signale bei beratungsintensiven Leistungen zählen.',
          href: '/wissen/ki-sichtbarkeit-dienstleister',
          tag: 'Branche',
        },
        {
          title: 'E-E-A-T und KI-Sichtbarkeit',
          description: 'Wie Expertise-Signale bei YMYL-Themen wie Rechtsberatung bewertet werden.',
          href: '/wissen/eeat-ki-sichtbarkeit',
          tag: 'E-E-A-T',
        },
      ]}
      ctaTitle="Werden potenzielle Mandanten von der KI zu Ihnen geschickt?"
      ctaText="Ich prüfe, ob und wie ChatGPT, Perplexity und Google AI Ihre Kanzlei aktuell darstellen und empfehlen. Kostenlos, in 48 Stunden."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Kostenlose Kurzanalyse anfragen"
    />
  );
}

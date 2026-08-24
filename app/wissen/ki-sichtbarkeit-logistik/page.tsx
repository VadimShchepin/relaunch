import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function KiSichtbarkeitLogistikPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/ki-sichtbarkeit-logistik"
      breadcrumbLabel="KI-Sichtbarkeit für Logistik"
      eyebrow="Branche: Logistik & Spedition"
      title="KI-Sichtbarkeit für Logistik und Speditionen: die offenste Flanke im Hamburger Markt"
      description="Kaum eine Branche hat so viel Fachwissen und so wenig davon öffentlich wie die Logistik. Genau das macht KI-Antworten zur Gelegenheit: Wer die konkreten Fragen zu Zoll, Gefahrgut, Laufzeiten und Verpackung beantwortet, wird zitiert, weil es sonst fast niemand tut."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      schemaImage="/images/wissen/ki-sichtbarkeit-logistik/hero.webp"
      summaryItems={[
        'Hamburg ist Deutschlands größter Seehafen: 114,6 Millionen Tonnen Gesamtumschlag und 8,3 Millionen TEU im Jahr 2025. Die digitale Sichtbarkeit der Branche steht in keinem Verhältnis dazu.',
        'Logistikwissen liegt fast vollständig in Angeboten, E-Mails und Telefonaten. Es ist damit für KI-Systeme nicht vorhanden, obwohl es genau die Fragen beantwortet, die gestellt werden.',
        'Die zitierfähigen Themen sind unspektakulär: Zollverfahren, Gefahrgutklassen, Packmaße, Laufzeiten, Incoterms, Dokumentenpflichten. Regeln und Zahlen mit Quelle werden zitiert, Leistungsversprechen nicht.',
        'Kaufnahe Prompts sind sehr konkret: „Wer verzollt Sendungen aus China in Hamburg?“ oder „Spedition für Gefahrgutklasse 3 im Hamburger Hafen“. Diese Fragen bedient bisher kaum jemand mit einer eigenen Seite.',
        'Wer als erster Betrieb in einer Nische eine sauber belegte Regelseite hat, hält die Position lange, weil der Wettbewerb inhaltlich nicht nachrückt.',
      ]}
      sections={[
        {
          id: 'missverhaeltnis',
          heading: 'Das Missverhältnis: viel Markt, wenig auffindbares Wissen',
          paragraphs: [
            'Der Hamburger Hafen hat 2025 insgesamt 114,6 Millionen Tonnen umgeschlagen, ein Plus von 2,6 Prozent. Im Containersegment waren es 8,3 Millionen TEU, ein Wachstum von 7,3 Prozent. Es ist der größte Seehafen Deutschlands, und die Logistikbranche gehört zu den prägenden Arbeitgebern der Stadt.',
            'Die öffentlich auffindbare Fachinformation dieser Branche steht dazu in keinem Verhältnis. Die typische Website eines mittelständischen Logistikers besteht aus einer Startseite, vier Leistungsseiten mit je einem Absatz und einem Kontaktformular. Das Wissen, das den Betrieb wertvoll macht, steckt in Angeboten, Telefonaten und in den Köpfen der Disponenten.',
            'Für die klassische Suche war das lange kein Problem, weil Aufträge über Bestandskontakte, Ausschreibungen und Netzwerke kamen. In KI-Antworten wirkt es anders: Wenn niemand die Frage beantwortet, nennt das System die Anbieter, die zufällig irgendwo beschrieben sind, oder es nennt große internationale Namen. Der lokale Spezialist fehlt.',
          ],
          stat:
            'Es ist die einzige Branche in unserer Praxis, in der die Konkurrenz um zitierfähige Inhalte praktisch nicht existiert, obwohl die Auftragswerte hoch sind.',
        },
        {
          id: 'welche-fragen',
          heading: 'Welche Fragen tatsächlich gestellt werden',
          intro:
            'Kaufnahe Prompts in der Logistik sind auffällig präzise, weil die Fragesteller Fachleute sind. Sie nennen Verfahren, Klassen und Relationen mit.',
          table: {
            headers: ['Fragetyp', 'Beispiel-Prompt', 'Passender Seitentyp', 'Warum zitierfähig'],
            rows: [
              [
                'Verfahren',
                '„Wie läuft die Zollanmeldung für eine Seefrachtsendung aus China in Hamburg?“',
                'Ablaufseite mit Dokumentenliste',
                'Feste Reihenfolge, benannte Formulare, klare Zuständigkeiten',
              ],
              [
                'Regel und Grenzwert',
                '„Welche Mengen Gefahrgutklasse 3 darf ich ohne ADR-Freistellung transportieren?“',
                'Regelseite mit Verweis auf die Vorschrift',
                'Zahlen und Grenzwerte mit Quellenangabe',
              ],
              [
                'Kosten und Laufzeit',
                '„Was kostet ein 40-Fuß-Container Hamburg nach Rotterdam?“',
                'Kostenseite mit Preisbestandteilen',
                'Nennt die Faktoren, statt eine Zahl zu versprechen',
              ],
              [
                'Anbieterauswahl',
                '„Spedition für temperaturgeführte Ladung im Hamburger Hafen“',
                'Leistungsseite mit Spezialisierung und Nachweisen',
                'Eindeutige Kategorie, überprüfbare Zertifikate',
              ],
              [
                'Grenzfall',
                '„Wer übernimmt Zollabwicklung für Privatpersonen bei Umzugsgut?“',
                'Seite für den Sonderfall',
                'Beantwortet eine Frage, die große Anbieter ignorieren',
              ],
            ],
            caption:
              'Beispielhafte Prompt-Typen aus Gesprächen mit Logistikbetrieben. Die Formulierungen sind bewusst so konkret gehalten, wie Fachleute tatsächlich fragen.',
          },
          paragraphs: [
            'Der Unterschied zur klassischen Keyword-Logik ist wichtig. Kaum jemand sucht bei Google nach „Zollanmeldung Seefracht China Hamburg Ablauf“, weil die Suchanfrage zu lang wäre. Als Prompt ist genau diese Formulierung normal, und Bing zeigt in den Grounding Queries, dass KI-Systeme intern ähnlich lange, kombinierte Suchanfragen bilden.',
            'Für die Planung heißt das: Suchvolumen ist hier ein schlechter Indikator. Themen mit gemeldetem Volumen null können regelmäßig abgerufen werden, weil die Frage in Prompt-Form gestellt wird. Der bessere Indikator ist die Frage, ob ein Kunde diese Frage schon einmal telefonisch gestellt hat.',
          ],
        },
        {
          id: 'was-zitiert-wird',
          heading: 'Was zitiert wird und was ignoriert wird',
          cards: [
            {
              title: 'Zitiert: Regeln mit Quelle',
              text:
                'Grenzwerte, Fristen, Dokumentenpflichten und Verfahrensschritte, jeweils mit Verweis auf die Vorschrift oder die zuständige Stelle. Solche Absätze sind isoliert verständlich und überprüfbar, deshalb werden sie entnommen.',
            },
            {
              title: 'Zitiert: Kostenbestandteile',
              text:
                'Eine Seite, die erklärt, aus welchen Posten sich ein Frachtpreis zusammensetzt und was ihn nach oben treibt, wird häufiger abgerufen als eine Seite mit einer Beispielzahl. Der Grund: Die Antwort bleibt richtig, auch wenn sich Preise ändern.',
            },
            {
              title: 'Ignoriert: Leistungsversprechen',
              text:
                '„Zuverlässig, schnell, weltweit“ liefert keinem System etwas Zitierfähiges. Solche Formulierungen kommen auf jeder Wettbewerberseite vor und tragen keine unterscheidbare Information.',
            },
            {
              title: 'Ignoriert: PDF-Wüsten',
              text:
                'Preislisten, Zolltabellen und Merkblätter nur als PDF-Download hinterlegt sind schwer verwertbar und für Leser unbequem. Die Kerninformation gehört als HTML auf eine Seite, das PDF kann daneben stehen.',
            },
          ],
          warning: {
            title: 'Vorsicht bei Rechts- und Zollaussagen',
            text:
              'Wer Grenzwerte, Fristen und Verfahren veröffentlicht, muss sie belegen und datieren. Eine falsche Angabe zu Gefahrgut oder Zoll ist kein Marketingfehler, sondern ein Haftungsthema. Praktisch heißt das: Immer die Vorschrift oder die zuständige Stelle nennen, das Datum der letzten Prüfung angeben und keine Rechtsberatung suggerieren. Diese Sorgfalt ist gleichzeitig der Grund, warum solche Seiten zitiert werden.',
          },
        },
        {
          id: 'lokale-signale',
          heading: 'Lokale Signale, die in dieser Branche wirken',
          bullets: [
            'Vollständiges Unternehmensprofil mit exakt demselben Firmennamen wie im Handelsregister. Abweichungen zwischen Profil, Impressum und Verzeichnissen verhindern, dass Modelle die Angaben zusammenführen.',
            'Zertifikate und Zulassungen namentlich und mit Nummer nennen, etwa AEO-Status, Gefahrgutbeauftragter, ISO-Zertifizierungen. Nachweisbare Attribute unterscheiden dich von Anbietern mit gleicher Leistungsbeschreibung.',
            'Zugehörigkeit zu Verbänden und Netzwerken aufführen. Verbandsverzeichnisse sind eine der wenigen unabhängigen Quellen, die diese Branche zuverlässig abbildet.',
            'Standorte und bediente Relationen einzeln nennen, nicht als „weltweit“. Eine Antwort zu einer konkreten Relation kann nur zustande kommen, wenn die Relation irgendwo steht.',
            'Ansprechpartner mit Namen und Funktion. In einer Branche, die über Personen läuft, ist das zugleich ein Autoritätssignal und eine Konversionshilfe.',
          ],
          note:
            'Der AEO-Status ist hier bewusst genannt, weil er in der Logistik eine feste Bedeutung hat: der zugelassene Wirtschaftsbeteiligte im Zollrecht. Mit Answer Engine Optimization hat das Kürzel nichts zu tun, was im Suchmarkt regelmäßig zu Verwechslungen führt.',
        },
        {
          id: 'plan',
          heading: 'Der pragmatische Einstieg für einen Mittelständler',
          intro:
            'Kein Content-Marketing-Programm, sondern fünf Seiten und eine Routine. Für einen Betrieb ohne Marketingabteilung ist das in einem Quartal machbar.',
          steps: [
            {
              title: 'Die zehn häufigsten Kundenfragen aus dem Vertrieb sammeln',
              text:
                'Nicht ausdenken, sondern abfragen: Was fragen Kunden am Telefon, bevor sie beauftragen? Die Antworten liegen bereits in E-Mails und Angeboten vor. Diese Liste ist die Content-Planung für das nächste halbe Jahr.',
            },
            {
              title: 'Die drei häufigsten Fragen zu je einer Seite machen',
              text:
                'Eine Frage pro Seite, die Antwort im ersten Absatz, danach Details, Grenzfälle und die Quelle. Länge ist zweitrangig, Vollständigkeit der Antwort ist entscheidend. Am Ende ein klarer Weg zur Anfrage, nicht mitten im Text.',
            },
            {
              title: 'Eine Kostenseite mit Preisbestandteilen bauen',
              text:
                'Nicht „Preise auf Anfrage“, sondern die Bestandteile: Seefracht, Terminal Handling, Zoll, Vorlauf, Lagergeld, Zuschläge und was sie treibt. Eine Beispielrechnung mit Datum, klar als Beispiel gekennzeichnet, macht die Seite belegbar.',
            },
            {
              title: 'Zertifikate, Relationen und Ansprechpartner nachtragen',
              text:
                'Diese Arbeit dauert einen Nachmittag und wirkt auf allen Ebenen: Sie liefert Modellen überprüfbare Attribute, verbessert die lokale Einordnung und hilft echten Interessenten bei der Auswahl.',
            },
            {
              title: 'Monatliche Messroutine einrichten',
              text:
                'Bing Webmaster Tools verifizieren und die Citations monatlich exportieren, weil ältere Zeiträume nicht rekonstruierbar sind. Dazu fünf feste Prompts, die immer gleich getestet werden. Zehn Minuten im Monat genügen, um zu sehen, ob etwas passiert.',
            },
          ],
          quote:
            'In der Logistik gewinnt nicht der beste Text, sondern der erste Betrieb, der die Frage überhaupt öffentlich beantwortet.',
        },
      ]}
      faqs={[
        {
          q: 'Lohnt sich KI-Sichtbarkeit für eine Spedition?',
          a: 'Ja, und zwar überproportional, weil die Konkurrenz um zitierfähige Inhalte in dieser Branche gering ist. Wer die konkreten Fragen zu Zoll, Gefahrgut, Laufzeiten und Kostenbestandteilen sauber belegt beantwortet, wird zitiert, weil es kaum eine Alternative gibt. Bei hohen Auftragswerten reicht dafür schon eine geringe Zahl an Anfragen.',
        },
        {
          q: 'Welche Inhalte werden bei Logistikthemen zitiert?',
          a: 'Regeln, Grenzwerte, Fristen und Verfahrensabläufe mit Quellenangabe sowie Seiten, die Kostenbestandteile erklären statt Preise zu versprechen. Ignoriert werden allgemeine Leistungsversprechen und Informationen, die nur als PDF-Download vorliegen. Entscheidend ist, dass ein Absatz auch isoliert eine vollständige Antwort ergibt.',
        },
        {
          q: 'Wie groß ist der Hamburger Hafen als Markt?',
          a: 'Der Hamburger Hafen ist Deutschlands größter Seehafen. 2025 wurden dort 114,6 Millionen Tonnen umgeschlagen, ein Plus von 2,6 Prozent gegenüber dem Vorjahr. Der Containerumschlag lag bei 8,3 Millionen TEU und wuchs um 7,3 Prozent, das entspricht knapp 71 Prozent des Gesamtumschlags in Tonnen.',
        },
        {
          q: 'Bringt es etwas, wenn zu meinem Thema kein Suchvolumen gemeldet wird?',
          a: 'In der Logistik häufig ja. Fachleute stellen ihre Fragen in Prompt-Form deutlich länger und spezifischer, als sie sie bei Google eintippen würden, und KI-Systeme bilden intern selbst kombinierte Suchanfragen. Der bessere Indikator als Suchvolumen ist deshalb, ob Kunden diese Frage bereits telefonisch gestellt haben.',
        },
        {
          q: 'Was ist der Unterschied zwischen AEO im Zoll und AEO im Marketing?',
          a: 'Es sind zwei völlig verschiedene Dinge mit gleichem Kürzel. Im Zollrecht bezeichnet AEO den zugelassenen Wirtschaftsbeteiligten, also einen geprüften Status für Unternehmen in der Lieferkette. Im Suchmarketing steht AEO für Answer Engine Optimization. Für Logistikunternehmen ist die Verwechslungsgefahr real, weshalb in Texten immer die ausgeschriebene Form gehört.',
        },
        {
          q: 'Wie gehe ich mit Rechtsaussagen zu Zoll und Gefahrgut um?',
          a: 'Immer die Vorschrift oder die zuständige Stelle nennen, das Datum der letzten Prüfung angeben und ausdrücklich keine Rechtsberatung suggerieren. Ein Hinweis, dass im Zweifel die zuständige Behörde entscheidet, gehört auf die Seite. Diese Sorgfalt ist keine Bremse, sondern der Grund, warum solche Seiten überhaupt zitierfähig sind.',
        },
      ]}
      sources={[
        {
          label: 'Hafen Hamburg Marketing',
          text:
            'Umschlagzahlen 2025: 114,6 Millionen Tonnen Gesamtumschlag (plus 2,6 Prozent), 8,3 Millionen TEU Containerumschlag (plus 7,3 Prozent), Containeranteil knapp 71 Prozent des Gesamtumschlags in Tonnen.',
          href: 'https://www.hafen-hamburg.de/de/presse/news/hamburger-hafen-umschlagszahlen-2025-auf-einen-blick/',
        },
        {
          label: 'Microsoft Bing Blog (Juni 2026)',
          text:
            'Grounding Queries, Topics und Intent-Klassifikation in den Bing Webmaster Tools als Grundlage für die Auswertung, welche Fragen zu Citations führen.',
          href: 'https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare',
        },
        {
          label: 'Eigene Keyword-Analyse (Mai 2026)',
          text:
            'Auswertung deutscher AEO- und GEO-Suchbegriffe mit dem Befund, dass das Kürzel AEO im deutschen Suchraum überwiegend den Zollstatus und eine Bekleidungsmarke trifft.',
          href: 'https://aiseo.hamburg/wissen/aeo-geo-marktanalyse-deutschland-2026',
        },
      ]}
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit für Dienstleister',
          description:
            'Der branchenübergreifende Rahmen: warum die KI den Wettbewerber empfiehlt und wie du das drehst.',
          href: '/wissen/ki-sichtbarkeit-dienstleister',
          tag: 'Dienstleister',
        },
        {
          title: 'Lokale KI-Sichtbarkeit',
          description: 'Warum ein Eintrag bei Google Maps nicht bedeutet, dass ChatGPT dich kennt.',
          href: '/wissen/lokale-ki-sichtbarkeit',
          tag: 'Lokal',
        },
        {
          title: 'Warum erscheint meine Firma nicht in ChatGPT?',
          description: 'Die Diagnose in vier Schritten, bevor die erste neue Seite entsteht.',
          href: '/wissen/warum-nicht-in-chatgpt',
          tag: 'Diagnose',
        },
        {
          title: 'AI SEO Agentur Hamburg',
          description: 'Was lokale KI-Sichtbarkeit für Hamburger Unternehmen konkret bedeutet.',
          href: '/hamburg/ai-seo-agentur',
          tag: 'Hamburg',
        },
      ]}
      ctaTitle="Fragt die KI nach deiner Relation, deiner Klasse, deinem Verfahren?"
      ctaText="Im kostenlosen 15-Minuten-Gespräch testen wir live drei Fragen aus deinem Tagesgeschäft und sehen, wen die KI nennt. In der Logistik ist das Ergebnis meist eindeutig, in beide Richtungen."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

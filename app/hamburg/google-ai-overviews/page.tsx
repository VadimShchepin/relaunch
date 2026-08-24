import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'Google AI Overviews Optimierung Hamburg',
  description:
    'Google AI Overviews und AI Mode Optimierung für Hamburger Unternehmen. Auf Basis von Googles offizieller Search-Central-Doku: E-E-A-T, Crawlbarkeit und hilfreicher Content statt llms.txt-Tricks.',
  keywords: [
    'Google AI Overviews Optimierung Hamburg',
    'Google AI Mode Hamburg',
    'AI Overviews Hamburg',
    'Google KI Optimierung Hamburg',
    'in Google AI zitiert werden',
    'SGE Optimierung Hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/google-ai-overviews',
    title: 'Google AI Overviews Optimierung Hamburg',
    description:
      'Wie Hamburger Unternehmen als Quelle in Google AI Overviews und AI Mode auftauchen. Methodik nach Googles offizieller Doku, mit Benchmarks und konkreten Hebeln.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/og/google-ai-overviews.jpg',
        width: 1200,
        height: 675,
        alt: 'Google AI Overview Antwortbox mit zitierten Quellen für Hamburger Unternehmen',
      },
    ],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/google-ai-overviews',
  },
};

export default function GoogleAiOverviewsHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/google-ai-overviews"
      title="Google AI Overviews Optimierung Hamburg: Als Quelle in Googles KI-Antwort auftauchen, nicht nur in der blauen Liste"
      description="Google AI Overviews sind der KI-Antwortkasten oben in der Suche, AI Mode ist die dialogorientierte Variante daneben. Beide ziehen ihre Aussagen aus normal indexierten Seiten und nennen mehrere Quellen. Wer dort zitiert wird, gewinnt Sichtbarkeit genau in dem Moment, in dem klassische Klicks wegbrechen. Diese Seite zeigt, wie das für ein Hamburger Unternehmen realistisch funktioniert."
      eyebrow="Google AI Overviews & AI Mode Hamburg"
      facts={[
        { label: 'Einstieg', value: '15 Minuten, 0 Euro', href: '/termin' },
        { label: 'Umsetzung', value: 'ab 1.500 Euro, Festpreis vorab', href: '/preise' },
        { label: 'Belegt', value: '800 KI-Zitate in 3 Monaten', href: '/ergebnisse' },
      ]}
      secondaryCtaHref="/preise"
      secondaryCtaLabel="Preise ansehen"
      contactPhone="+49 176 321 94 754"
      contactNote="Ein Ansprechpartner, keine Agentur-Pipeline. Erstgespräch per Video oder in Hamburg."
      summaryItems={[
        'Die Seite bedient die kaufnahe Suche nach Google-AI-Overviews- und AI-Mode-Optimierung im Raum Hamburg.',
        'Die Methodik folgt Googles eigener Search-Central-Doku, nicht den verbreiteten GEO-Mythen rund um llms.txt oder Spezial-Schema.',
        'Benchmarks aus Pew Research und Authoritas machen klar, warum Zitate in der KI-Antwort jetzt wichtiger werden als reine Rankings.',
        'Die Inhalte sind so strukturiert, dass sie für Leser und für Googles Zusammenfassung gleichermaßen sauber extrahierbar bleiben.',
      ]}
      painPoints={[
        'Rankings stehen noch, aber die Klicks fallen: Wenn eine AI Overview erscheint, klicken laut Pew Research nur 8 Prozent der Nutzer auf ein Ergebnis, ohne Overview sind es 15 Prozent. Authoritas hat für Spitzenplätze Klickverluste von bis zu 79 Prozent gemessen.',
        'Niemand weiß, ob die eigene Seite überhaupt als Quelle in der KI-Antwort genannt wird, weil Google keine deutschlandspezifische Quellenliste ausspielt und das Monitoring fehlt.',
        'Es kursieren widersprüchliche Tipps: llms.txt, ein Spezial-Schema, eigene KI-Dateien. Für Googles AI-Features sagt Google selbst, dass nichts davon nötig ist, und trotzdem wird Budget genau dort verbrannt.',
      ]}
      serviceCards={[
        {
          title: 'Eligibility-Check für AI Overviews',
          text: 'Zuerst die Pflicht: Ist die Seite crawlbar, indexierbar und snippet-fähig? Google bestätigt, dass AI-Features dieselben Grundlagen nutzen wie die normale Suche. Blockiert ein nosnippet, ein max-snippet oder ein robots.txt-Eintrag die Aussage, kann auch kein KI-Zitat entstehen.',
        },
        {
          title: 'Antwortfähige Inhaltsstruktur',
          text: 'Ich baue die wichtigen Seiten so um, dass sie die konkrete deutsche Frage schnell und in klaren Blöcken beantworten: präzise Überschriften, kurze Faktenabsätze, definierte Begriffe. Genau das, was eine Zusammenfassung sauber zitieren kann.',
        },
        {
          title: 'E-E-A-T und Quellenlage',
          text: 'Sichtbare Autorenidentität, nachvollziehbare Belege, echte Praxis statt Behauptung. Googles Helpful-Content-Leitlinie bevorzugt vertrauenswürdige, menschennahe Seiten, und genau diese Signale entscheiden mit über die Aufnahme in die KI-Antwort.',
        },
        {
          title: 'Schema, das zum sichtbaren Inhalt passt',
          text: 'Article, FAQPage, Organization oder Product, aber nur dort, wo das Markup den sichtbaren Text widerspiegelt. Google verlangt kein KI-Spezial-Schema, bestraft aber Markup, das nicht zur Seite passt.',
        },
        {
          title: 'Themencluster statt Einzelseite',
          text: 'Frageförmige Suchanfragen lösen deutlich häufiger eine AI Overview aus. Deshalb baue ich rund um die kaufnahe Hauptfrage ein deutsches Themenfeld, das die ganze Fragenfamilie abdeckt.',
        },
        {
          title: 'Citation-Monitoring',
          text: 'Mit Werkzeugen wie SISTRIX, Semrush AI Toolkit oder Ahrefs Brand Radar verfolge ich, wo und wie deine Marke in KI-Antworten auftaucht, statt nur auf den klassischen Sichtbarkeitsindex zu schauen.',
        },
      ]}
      comparison={{
        navLabel: 'Mythen',
        heading: 'Was für Google AI Overviews verkauft wird und was Google selbst schreibt',
        intro:
          'Fünf Behauptungen kosten in Hamburger Angeboten regelmäßig Budget. Für jede gibt es eine Aussage in Googles eigener Search-Central-Doku. Die dritte Spalte ist die Arbeit, die stattdessen anfällt.',
        columns: ['Behauptung im Angebot', 'Googles eigene Aussage', 'Was stattdessen zählt'],
        rows: [
          [
            'Eine llms.txt macht dich KI-sichtbar',
            'für AI Overviews und AI Mode nicht nötig, keine neuen maschinenlesbaren Dateien',
            'Indexierung, Crawlbarkeit, Snippet-Freigabe',
          ],
          [
            'Es braucht ein KI-Spezial-Schema',
            'kein eigener Schema-Typ für KI-Funktionen vorgesehen',
            'Markup, das den sichtbaren Text abbildet',
          ],
          [
            'KI-Antworten nutzen einen eigenen Index',
            'dieselben Grundlagen wie die normale Suche',
            'normale Indexierung der einzelnen Seite',
          ],
          [
            'nosnippet betrifft nur Textausschnitte',
            'Snippet-Regeln begrenzen auch die Nutzung in KI-Antworten',
            'nosnippet und max-snippet bewusst setzen',
          ],
          [
            'KI-Sichtbarkeit ist messbar wie ein Ranking',
            'keine deutschlandspezifische Quellenliste in der Search Console',
            'Stichproben plus Toolmonitoring, getrennt vom Ranking',
          ],
        ],
        note: 'Vier der fünf Zeilen sind reine Grundlagenarbeit. Das ist die unbequeme Nachricht an jedem AI-Overviews-Angebot: Der teure Teil ist selten neu, er wurde nur nie gemacht.',
      }}
      proofData={{
        variant: 'column',
        title: 'Anteil der Suchen mit Klick auf ein Ergebnis',
        subject: 'Pew Research Center, US-Nutzer, März 2025',
        axis: { unit: ' %', title: 'Suchen mit Klick' },
        highlight: 1,
        points: [
          { label: 'Ergebnisseite ohne KI-Antwort', short: 'ohne KI', value: 15 },
          { label: 'Ergebnisseite mit KI-Antwort', short: 'mit KI', value: 8 },
        ],
        stats: [
          { label: 'Rückgang', value: 'fast die Hälfte' },
          { label: 'Spitzenplätze', value: 'bis 79 % Klickverlust (Authoritas)' },
          { label: 'Quellen pro Antwort', value: 'in 88 % der Fälle drei oder mehr' },
        ],
        table: {
          label: 'Zahlen als Tabelle',
          heads: ['Ergebnisseite', 'Suchen mit Klick'],
        },
        caption:
          'Pew Research Center hat das Klickverhalten auf Ergebnisseiten mit und ohne KI-Antwort verglichen. Der Klick verschwindet in beiden Fällen mehrheitlich, mit KI-Antwort nur noch schneller. Die verbleibende Frage ist nicht, wie du den Klick zurückholst, sondern ob deine Marke in der Antwort überhaupt genannt wird.',
        source: { href: '/wissen/ai-overviews-sichtbarkeit', label: 'Ausführlich: Sichtbarkeit in AI Overviews' },
      }}
      eeatCards={[
        {
          title: 'Googles eigene Quelle, nicht mein Bauchgefühl',
          text: 'Die Methodik steht auf Googles Search-Central-Doku zu AI-Features: gleiche SEO-Grundlagen, kein Spezial-Schema, keine eigenen KI-Dateien nötig. Ich arbeite mit dem, was Google offiziell sagt, nicht mit dem, was auf LinkedIn gut klingt.',
        },
        {
          title: 'Belegte Zahlen statt Versprechen',
          text: 'Pew Research zur Klick- und Quellenverteilung, Authoritas zu Klickverlusten bei Spitzenplätzen. Die Seite nennt diese Benchmarks offen, damit Erwartungen realistisch bleiben.',
        },
        {
          title: 'Dokumentierte Praxis',
          text: 'Auf der Website liegen bereits echte Cases mit KinderAlbum und Blitz Hamburg, inklusive Search-Console-Daten. Diese Materialbasis macht Aussagen belastbarer als generische Agenturversprechen.',
        },
        {
          title: 'Technische Umsetzbarkeit',
          text: 'Empfehlungen landen direkt im Code: Crawlbarkeit, interne Verlinkung, saubere Snippets, passendes Markup. Kein Stillstand zwischen Strategie, SEO und Entwicklung.',
        },
      ]}
      fitBullets={[
        'Hamburger Unternehmen, deren Seiten noch ranken, aber spürbar weniger Klicks bekommen, seit oben in der Suche eine KI-Antwort steht.',
        'Dienstleister und B2B-Anbieter, die in Googles AI Overviews und AI Mode als Quelle genannt werden wollen, nicht nur in der zehnten blauen Zeile.',
        'Teams, die eine ehrliche, an Googles Doku ausgerichtete Vorgehensweise wollen statt eines weiteren Pakets aus llms.txt und Schema-Versprechen.',
      ]}
      fitNote={{
        label: 'Merksatz',
        statement: 'Der Klick kommt nicht zurück. Die Nennung ist verhandelbar.',
        text: 'Wenn oben eine KI-Antwort steht, klickt laut Pew Research nur noch etwa jeder zwölfte Nutzer auf ein Ergebnis. Dieser Traffic ist weg, unabhängig davon, was du tust. Entschieden wird nur noch, ob dein Name in der Antwort steht.',
      }}
      processCards={[
        {
          title: 'Prüfen',
          text: 'Erscheinen für deine wichtigen Suchanfragen überhaupt AI Overviews, und ist deine Seite technisch dafür eligibel? Hier trennen wir das, was Google ausspielt, von dem, was nur Wunsch ist.',
        },
        {
          title: 'Schärfen',
          text: 'Die Money-Pages werden auf die konkrete deutsche Frage zugeschnitten, fachlich vertieft, mit Belegen versehen und technisch sauber gehalten, damit sie zitierfähig sind.',
        },
        {
          title: 'Beobachten',
          text: 'Wir messen nicht nur Rankings, sondern Erwähnungen und Quellenzitate in KI-Antworten und justieren die Inhalte anhand der tatsächlichen Quellenlage nach.',
        },
      ]}
      faqItems={[
        {
          q: 'Was ist der Unterschied zwischen Google AI Overviews und AI Mode?',
          a: 'AI Overviews sind der zusammenfassende KI-Kasten oben in den normalen Suchergebnissen. AI Mode ist eine eigene, dialogorientierte Sucherfahrung, in der man wie in einem Chat nachfragen kann. AI Mode ist laut deutschsprachiger Berichterstattung seit Oktober 2025 in Deutschland, Österreich und der Schweiz verfügbar. Beide stützen sich auf normal indexierte Seiten und nennen Quellen.',
        },
        {
          q: 'Brauche ich llms.txt oder ein spezielles Schema für Google AI Overviews?',
          a: 'Nein. Google sagt in seiner Search-Central-Doku ausdrücklich, dass seine AI-Features dieselben SEO-Grundlagen nutzen wie die normale Suche und dass keine neuen, maschinenlesbaren KI-Dateien nötig sind. Strukturierte Daten helfen nur dort, wo sie den sichtbaren Inhalt abbilden. Wer Budget in llms.txt für Google steckt, optimiert an Googles eigener Aussage vorbei.',
        },
        {
          q: 'Lohnt sich die Optimierung, wenn KI-Antworten doch Klicks kosten?',
          a: 'Gerade deshalb. Wenn eine AI Overview erscheint, fällt die Klickrate laut Pew Research von 15 auf 8 Prozent, und Authoritas hat für Spitzenplätze Verluste von bis zu 79 Prozent gemessen. Dieser Traffic verschwindet ohnehin. Die Frage ist, ob deine Marke wenigstens in der Antwort sichtbar und als Quelle genannt wird, statt komplett zu fehlen.',
        },
        {
          q: 'Wie messe ich, ob ich in Google AI Overviews auftauche?',
          a: 'Google liefert keine deutschlandspezifische Quellenliste. Praktisch arbeitet man mit Tools wie SISTRIX, dem Semrush AI Toolkit oder Ahrefs Brand Radar sowie mit gezielten Stichproben für die eigenen Kernfragen. Wichtig ist, Erwähnungen und Quellenzitate getrennt vom klassischen Ranking zu beobachten.',
        },
      ]}
      relatedLinks={[
        {
          title: 'Google KI-Optimierung',
          description: 'Der ausführliche Wissensartikel zu Googles AI-Features und der offiziellen Search-Central-Linie.',
          href: '/wissen/google-ki-optimierung',
          tag: 'Wissen',
        },
        {
          title: 'AI Overviews Sichtbarkeit',
          description: 'Wie Sichtbarkeit in AI Overviews entsteht und woran man sie misst.',
          href: '/wissen/ai-overviews-sichtbarkeit',
          tag: 'Grundlagen',
        },
        {
          title: 'AI SEO Agentur Hamburg',
          description: 'Die breitere Klammer für AI Visibility und lokale Empfehlungssignale.',
          href: '/ai-seo-agentur',
          tag: 'Kernleistung',
        },
      ]}
      ctaTitle="Wenn deine Rankings stehen, aber die Klicks bröckeln, liegt die Antwort meist oben in der KI-Box."
      ctaText="Ich prüfe für deine wichtigsten Suchanfragen, ob Google dort eine AI Overview ausspielt und welche Hebel deine Seite realistisch zur zitierten Quelle machen."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="AI-Overviews-Check für Hamburg anfragen"
    />
  );
}

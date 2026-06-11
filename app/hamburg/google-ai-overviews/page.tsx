import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'Google AI Overviews Optimierung Hamburg | In Googles KI-Antworten zitiert werden',
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
    title: 'Google AI Overviews Optimierung Hamburg | In Googles KI-Antworten zitiert werden',
    description:
      'Wie Hamburger Unternehmen als Quelle in Google AI Overviews und AI Mode auftauchen. Methodik nach Googles offizieller Doku, mit Benchmarks und konkreten Hebeln.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/google-ai-overviews.svg',
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
      imageSrc="/images/wissen/google-ai-overviews.svg"
      imageAlt="Google AI Overview Antwortbox, die aiseo.hamburg als Quelle zitiert"
      imageCaption="Eine AI Overview zitiert laut Pew Research in 88 Prozent der Fälle drei oder mehr Quellen. Das Ziel ist, eine dieser Quellen zu sein."
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
          href: '/hamburg/ai-seo-agentur',
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

import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'Answer Engine Optimization Hamburg (AEO)',
  description:
    'Answer Engine Optimization in Hamburg für Unternehmen, die in ChatGPT, Perplexity, Copilot und Google AI als Antwort genannt werden wollen.',
  keywords: [
    'Answer Engine Optimization Hamburg',
    'AEO Hamburg',
    'AEO Agentur Hamburg',
    'Antwortmaschinen Optimierung Hamburg',
    'GEO AEO Hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/answer-engine-optimization',
    title: 'Answer Engine Optimization Hamburg (AEO)',
    description:
      'Kommerzielle Hamburg-Seite für AEO, Antwortmaschinen und strukturierte Kaufintent-Sichtbarkeit.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/og/hamburg-answer-engine-optimization.png', width: 1200, height: 630, alt: 'Answer Engine Optimization Hamburg' }],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/answer-engine-optimization',
  },
};

export default function AnswerEngineOptimizationHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/answer-engine-optimization"
      title="Answer Engine Optimization Hamburg: Damit dein Unternehmen in Antworten landet statt in irgendeinem verwaisten Rankingbericht"
      description="AEO ist der praktische Teil der Entwicklung, die viele Unternehmen erst merken, wenn ihre alten SEO-Reports plötzlich weniger Trost spenden. Nutzer wollen Antworten, nicht nur Ergebnislisten. Wer in Hamburg Dienstleistungen, Beratung oder erklärungsbedürftige Angebote verkauft, sollte deshalb nicht nur über Rankings sprechen, sondern über Antwortfähigkeit."
      eyebrow="Answer Engine Optimization Hamburg"
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
        'Die Seite bedient den Begriff AEO direkt und verankert ihn lokal für Hamburg.',
        'Sie verbindet SEO, GEO und AISEO mit einem klaren kommerziellen Service-Fokus.',
        'EEAT wird über strukturierte Methodik, bestehende Guides, Cases und klare Autorenschaft transportiert.',
        'Die Inhalte sind abschnittsweise so gebaut, dass sie für klassische Suche und AI-Zusammenfassungen gleichermaßen nützlich bleiben.',
      ]}
      painPoints={[
        'Viele Websites beantworten nichts konkret genug und wundern sich dann, warum Antwortmaschinen lieber andere Quellen nutzen.',
        'Es gibt Rankings, aber zu wenig Nachfragequalität, weil wichtige Vergleichs- und Empfehlungsfragen nicht abgedeckt werden.',
        'Unternehmen bauen Content auf Themenebene, aber nicht auf Entscheidungsebene. Genau dort arbeitet AEO.',
      ]}
      serviceCards={[
        {
          title: 'Antwortorientierte Seitenplanung',
          text: 'Ich priorisiere Fragen, bei denen Nutzer wirklich eine Entscheidung vorbereiten: Anbieterwahl, Vergleich, Einordnung, Vertrauen und Eignung.',
        },
        {
          title: 'AEO-freundliche Content-Struktur',
          text: 'Kernaussagen, FAQs, Definitionen, Leistungsabschnitte und Proof werden so geordnet, dass Antwortmaschinen eine starke Zusammenfassung bilden können.',
        },
        {
          title: 'Verzahnung mit SEO und GEO',
          text: 'AEO steht nicht isoliert. Es funktioniert am besten auf einem sauberen SEO-Fundament und mit guten Entity- und Autoritätssignalen.',
        },
        {
          title: 'Lokaler Conversion-Fokus',
          text: 'Hamburger Nachfrage, lokale Leistungsanfragen und regionale Vertrauenssignale werden bewusst eingearbeitet statt generisch über Deutschland gestreut.',
        },
      ]}
      comparison={{
        navLabel: 'Kürzel',
        heading: 'AEO, GEO, LLMO und SEO in einer Tabelle',
        intro:
          'Die vier Kürzel werden im Verkaufsgespräch gerne vermischt, weil sich damit dasselbe Paket viermal verkaufen lässt. Sie unterscheiden sich aber im Erfolgsmaß, und genau daran erkennst du, ob ein Angebot messbar ist.',
        columns: ['Kürzel', 'Ziel', 'Erfolgsmaß', 'Zielsystem', 'Namensfalle im Deutschen'],
        rows: [
          [
            'SEO',
            'Platz in der Ergebnisliste',
            'Position und Klicks',
            'Google, Bing',
            'keine',
          ],
          [
            'AEO',
            'in der Antwort genannt werden',
            'Nennungen pro fester Fragenliste',
            'ChatGPT, Perplexity, Copilot',
            'AEO ist im Zollrecht der zugelassene Wirtschaftsbeteiligte',
          ],
          [
            'GEO',
            'als Quelle zitiert werden',
            'Citations und Citation Share',
            'AI Overviews, AI Mode, Copilot',
            'GEO steht in der Suche für Geoportal, Geografie, Magazin GEO',
          ],
          [
            'LLMO',
            'im Modellwissen vorkommen',
            'Erwähnungen ohne Suchmodus',
            'ChatGPT ohne Suche',
            'keine',
          ],
        ],
        note: 'Praktisch überlappt die Arbeit zu weiten Teilen. Was nicht überlappt, ist die Messung: Wer AEO verkauft und dir Rankings berichtet, hat das Erfolgsmaß gar nicht gewechselt.',
      }}
      proofNote={{
        label: 'Was hier kein Diagramm ist',
        statement: 'Zwei der vier Antwortsysteme lassen sich überhaupt nicht auslesen.',
        text: 'Belegbar sind Citations aus den Bing Webmaster Tools, 800 für diese Website zwischen 15.03. und 13.06.2026, bei durchschnittlich einer zitierten Seite pro Antwort, und KI-Impressionen aus der Search Console. Für ChatGPT ohne Suchmodus und für Perplexity gibt es keine Konsole, also auch keine Kurve. Dort zählt nur ein Protokoll aus wiederholten Prompts im identischen Wortlaut. Ein Diagramm daraus wäre gezeichnete Schätzung.',
      }}
      eeatCards={[
        {
          title: 'Eigene publizierte Guides',
          text: 'Die Website enthält bereits umfangreiche Inhalte zu KI-Sichtbarkeit, ChatGPT, Perplexity und AI SEO. Das schafft thematische Tiefe statt isolierter Landingpages.',
        },
        {
          title: 'Praxisbezug durch dokumentierte Resultate',
          text: 'Vorhandene Case-Materialien und Proof-Screenshots machen Aussagen zur AEO-Arbeit glaubwürdiger als bloße Branchenwiederholung.',
        },
        {
          title: 'Lokale Positionierung',
          text: 'Die Seite verankert AEO nicht abstrakt, sondern im Hamburger Markt mit klaren Einsatzfällen für lokale und B2B-nahe Leistungen.',
        },
        {
          title: 'Verständliche Sprache',
          text: 'Gute AEO-Seiten müssen zugleich präzise und lesbar sein. Wenn nur Fachbegriffe übrig bleiben, verlieren Menschen und Modelle gleichermaßen das Interesse.',
        },
      ]}
      fitBullets={[
        'Unternehmen, deren Leistungen erklärt, eingeordnet und vertrauensvoll vermittelt werden müssen.',
        'Anbieter in Hamburg, die über generische Rankings hinaus auch in AI-Antworten und Zusammenfassungen auftauchen wollen.',
        'Teams, die SEO, GEO und AEO nicht mehr als getrennte Silos behandeln wollen.',
      ]}
      fitNote={{
        label: 'Merksatz',
        statement: 'AEO ist erkennbar am Erfolgsmaß, nicht am Leistungskatalog.',
        text: 'Wenn im Angebot AEO steht und im Bericht Positionen, ist es SEO mit neuem Deckblatt. Der Wechsel ist unbequem, weil die neue Kennzahl binär ist: genannt oder nicht.',
      }}
      processCards={[
        {
          title: 'Fragen priorisieren',
          text: 'Wir definieren, welche Antwortsituationen für dein Geschäft wirklich relevant sind. Nicht jede FAQ verdient ihre eigene Religion.',
        },
        {
          title: 'Antworten bauen',
          text: 'Ich entwickle oder überarbeite die Seiten so, dass Aussagen, Proof und Navigation auf echte Auswahlmomente einzahlen.',
        },
        {
          title: 'Signale verdichten',
          text: 'Mit Struktur, Verlinkung, lokalen Entitäten und klaren CTA entsteht daraus eine Seite, die nicht nur informiert, sondern auch verkauft.',
        },
      ]}
      faqItems={[
        {
          q: 'Ist AEO dasselbe wie GEO oder AI SEO?',
          a: 'Die Begriffe überschneiden sich stark. AEO betont die Optimierung für Antworten, GEO den generativen Suchkontext und AI SEO die praktische Anwendung. In der Umsetzung greifen sie oft ineinander.',
        },
        {
          q: 'Warum lohnt AEO in Hamburg?',
          a: 'Weil viele lokale und B2B-nahe Leistungen erklärungsbedürftig sind. Genau dort helfen Antwortmaschinen bei der Vorauswahl, und genau dort willst du auftauchen.',
        },
        {
          q: 'Brauche ich dafür neue Seiten?',
          a: 'Häufig ja, aber gezielt. Gute AEO-Arbeit bedeutet nicht 30 neue Artikel, sondern die richtigen Money-Pages mit echter Antwortlogik.',
        },
        {
          q: 'Was kostet AEO in Hamburg?',
          a: 'Der erste Schritt ist ein kostenloses 15-Minuten-Gespräch. Danach ein Umsetzungssprint ab 1.500 Euro netto zum Festpreis oder laufende Betreuung ab 600 Euro netto pro Monat. Den Festpreis nenne ich nach dem Gespräch, weil Aufwand und Wettbewerbslage je Branche stark abweichen.',
        },
        {
          q: 'Wie messe ich AEO, wenn es keine Konsole gibt?',
          a: 'Über eine feste Liste aus 30 bis 50 Fragen, zu mindestens 70 Prozent ohne deinen Markennamen, immer im gleichen Wortlaut und im gleichen Rhythmus abgefragt. Dazu Citations aus den Bing Webmaster Tools und KI-Impressionen aus der Search Console. Ohne diese Liste ist jede Nennungsquote eine Zahl ohne Nenner.',
        },
        {
          q: 'Brauche ich klassisches SEO weiterhin?',
          a: 'Ja. Zwei der vier Antwortsysteme greifen auf einen Suchindex zu. Wer dort nicht indexiert ist, kann auch nicht zitiert werden. AEO ersetzt SEO nicht, es hängt daran.',
        },
      ]}
      relatedLinks={[
        {
          title: 'AI SEO Agentur Hamburg',
          description: 'Die Seite für den breiteren kommerziellen Suchbegriff AI SEO.',
          href: '/ai-seo-agentur',
          tag: 'AI SEO',
        },
        {
          title: 'KI-Sichtbarkeit Agentur Hamburg',
          description: 'Die lokale Klammer für Empfehlungen, Sichtbarkeit und EEAT.',
          href: '/hamburg/ki-sichtbarkeit-agentur',
          tag: 'Kernleistung',
        },
        {
          title: 'Perplexity Optimierung Hamburg',
          description: 'Wenn Zitationen, Quellenfähigkeit und Research-Use-Cases im Fokus stehen.',
          href: '/hamburg/perplexity-optimierung',
          tag: 'Perplexity',
        },
      ]}
      ctaTitle="Wenn Nutzer Antworten wollen, solltest du nicht nur Links liefern."
      ctaText="Ich zeige dir, welche Antwortsituationen in deinem Markt Umsatzrelevanz haben und wie man dafür belastbare lokale Seiten baut."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="AEO für Hamburg anfragen"
    />
  );
}

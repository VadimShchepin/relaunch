import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'Perplexity Optimierung Hamburg | Als Quelle zitiert werden statt übergangen',
  description:
    'Perplexity Optimierung in Hamburg für Unternehmen, die als zitierbare Quelle in AI Answers auftauchen wollen. Fokus auf Struktur, Frische, Klarheit und Trust-Signale.',
  keywords: [
    'Perplexity Optimierung Hamburg',
    'Perplexity SEO Hamburg',
    'Perplexity Sichtbarkeit Hamburg',
    'Quelle in Perplexity werden',
    'AI Suche Hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/perplexity-optimierung',
    title: 'Perplexity Optimierung Hamburg | Als Quelle zitiert werden statt übergangen',
    description:
      'Lokale Service-Seite für Perplexity-Sichtbarkeit, Zitationen und AI-Search-Quellenarbeit in Hamburg.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/perplexity.jpg', width: 1200, height: 630, alt: 'Perplexity Optimierung Hamburg' }],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/perplexity-optimierung',
  },
};

export default function PerplexityOptimierungHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/perplexity-optimierung"
      title="Perplexity Optimierung Hamburg: Damit dein Unternehmen als Quelle auftaucht und nicht nur hofft, dass jemand scrollt"
      description="Perplexity ist für viele Suchsituationen näher an Recherche als an Smalltalk. Genau deshalb ist die Plattform für kaufnahe Anfragen spannend. Wer dort als Quelle zitiert wird, gewinnt nicht nur Sichtbarkeit, sondern Kontext. Und Kontext ist in der Lead-Qualität meistens attraktiver als ein weiterer lauwarmer Klick aus dem Nirgendwo."
      eyebrow="Perplexity Optimierung Hamburg"
      imageSrc="/images/wissen/perplexity.jpg"
      imageAlt="Perplexity Optimierung für Unternehmen in Hamburg"
      imageCaption="Perplexity bevorzugt oft die Seite, die am klarsten antwortet. Nicht die Seite mit den meisten Kalorien."
      summaryItems={[
        'Die Seite zielt auf Unternehmen mit kaufnaher, zitationsrelevanter Nachfrage in AI-Search-Kontexten.',
        'Der Fokus liegt auf Quellenfähigkeit, Frische, klaren Abschnitten und lokaler Einordnung.',
        'EEAT wird über reale Proofs, fachliche Spezialisierung, technische Umsetzbarkeit und lokale Marktkenntnis sichtbar gemacht.',
        'Die Seite ist bewusst conversion-orientiert und kein zweiter neutraler Lexikontext.',
      ]}
      painPoints={[
        'Deine Inhalte sind zu vage oder zu langflächig, um in Perplexity als gute Quelle zu funktionieren.',
        'Es gibt keine sauber extrahierbaren Passagen, keine verständlichen FAQs und zu wenig lokale Zuordnung für Hamburg.',
        'Content wird publiziert, aber nicht als Quelle gedacht. Genau das ist in Perplexity oft der Unterschied zwischen Zitat und Bedeutungslosigkeit.',
      ]}
      serviceCards={[
        {
          title: 'Quellenfähige Service-Seiten',
          text: 'Ich formuliere Leistungsseiten so, dass sie konkrete Fragen in knapper, belastbarer Form beantworten und in AI-Search-Kontexten besser zitiert werden können.',
        },
        {
          title: 'Frische und Aktualisierungslogik',
          text: 'Perplexity reagiert auf aktuelle Signale und klare Struktur. Inhalte müssen deshalb nicht nur gut, sondern auch sauber gepflegt sein.',
        },
        {
          title: 'Semantische Verdichtung',
          text: 'Weniger Fasertext, mehr klare Abschnitte, definierte Begriffe, relevante Beispiele und echte Antwortbloecke.',
        },
        {
          title: 'Lokaler Beweisaufbau',
          text: 'Hamburg-Bezug, Leistungen, Erfahrungen und Belege werden sichtbar gemacht, damit eine lokale Einordnung für Perplexity plausibel bleibt.',
        },
      ]}
      eeatCards={[
        {
          title: 'Erfahrung aus dokumentierten Cases',
          text: 'Bestehende Perplexity-nahe Proofs wie KinderAlbum werden nicht nur als Eyecatcher, sondern als methodische Referenz verstanden.',
        },
        {
          title: 'Fachliche Tiefe',
          text: 'Ich erklaere nicht nur, dass Perplexity Quellen liebt. Ich strukturiere Seiten so, dass diese Quellenlogik praktisch bedient wird.',
        },
        {
          title: 'Autorität über Konsistenz',
          text: 'Eine Quelle wirkt vertrauenswürdig, wenn Website, Marke, Leistungen und externe Signale in dieselbe Richtung zeigen.',
        },
        {
          title: 'Vertrauen statt Hype',
          text: 'Ich verspreche keine allwissende KI-Dominanz. Ich optimiere für nachvollziehbare Zitationswahrscheinlichkeit und bessere Auswahlchancen.',
        },
      ]}
      fitBullets={[
        'B2B-Anbieter, Spezialdienstleister und beratungsintensive Unternehmen in Hamburg.',
        'Angebote, bei denen Nutzer vor Kontaktaufnahme noch verstehen wollen, wer kompetent, spezialisiert und vertrauenswürdig ist.',
        'Websites mit Substanz, die aber noch nicht als gute AI-Search-Quelle gebaut sind.',
      ]}
      processCards={[
        {
          title: 'Quellen-Audit',
          text: 'Wir analysieren, welche Fragen in Perplexity relevant sind und wie stark deine Inhalte heute als Quelle taugen.',
        },
        {
          title: 'Antwort-Engineering',
          text: 'Ich baue die entscheidenden Seiten, FAQs und Kontextbloecke so um, dass sie sowohl nativ lesbar als auch AI-extrahierbar sind.',
        },
        {
          title: 'Iteration',
          text: 'Nach Indexierung und Nutzung werden Inhalte weiter geschliffen. Gute Quellen entstehen meist in Runden, nicht im ersten heroischen Wurf.',
        },
      ]}
      faqItems={[
        {
          q: 'Warum ist Perplexity für Unternehmen in Hamburg relevant?',
          a: 'Weil die Plattform stark bei Recherche, Vergleich und Quellenarbeit ist. Gerade für erklärungsbedürftige Leistungen kann das sehr wertvoll sein.',
        },
        {
          q: 'Ist Perplexity Optimierung dasselbe wie ChatGPT Optimierung?',
          a: 'Nein. Perplexity zitiert eher einzelne Seiten und Quellen, während ChatGPT stärker über Marke, Entitaet und Bing-Layer denkt. Es gibt Überschneidungen, aber nicht dieselbe Logik.',
        },
        {
          q: 'Muss ich dafür ständig neue Inhalte veröffentlichen?',
          a: 'Nicht zwingend. Oft ist bessere Struktur und Aktualisierung wichtiger als eine weitere Serie mittelmäßiger Blogposts.',
        },
      ]}
      relatedLinks={[
        {
          title: 'ChatGPT Optimierung Hamburg',
          description: 'Wenn der Schwerpunkt eher auf ChatGPT-Empfehlungen als auf Quellenzitaten liegt.',
          href: '/hamburg/chatgpt-optimierung',
          tag: 'ChatGPT',
        },
        {
          title: 'Answer Engine Optimization Hamburg',
          description: 'Die breitere Perspektive auf Antwortmaschinen über mehrere Plattformen hinweg.',
          href: '/hamburg/answer-engine-optimization',
          tag: 'AEO',
        },
        {
          title: 'KI-Sichtbarkeit Agentur Hamburg',
          description: 'Die übergeordnete Sicht auf lokale AI Visibility und Conversion-nahe Seiten.',
          href: '/hamburg/ki-sichtbarkeit-agentur',
          tag: 'Kernleistung',
        },
      ]}
      ctaTitle="Wenn du als Quelle auftauchen willst, muss deine Website wie eine Quelle aussehen."
      ctaText="Ich schaue mir an, welche Inhalte bei dir in Hamburg wirklich zitiert werden können und welche eher nur nett auf dem Screen sitzen."
      ctaHref="/contact"
      ctaLabel="Perplexity Optimierung anfragen"
    />
  );
}

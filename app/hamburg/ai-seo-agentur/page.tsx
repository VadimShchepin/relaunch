import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'AI SEO Agentur Hamburg | AI SEO für lokale Unternehmen mit klarer Positionierung',
  description:
    'AI SEO Agentur in Hamburg für Unternehmen, die in ChatGPT, Perplexity und Google AI empfohlen werden wollen. Strategie, Struktur, EEAT und Content mit kaufnaher Ausrichtung.',
  keywords: [
    'AI SEO Agentur Hamburg',
    'AI SEO Hamburg',
    'GEO Agentur Hamburg',
    'AI SEO Beratung Hamburg',
    'KI SEO Hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/ai-seo-agentur',
    title: 'AI SEO Agentur Hamburg | AI SEO für lokale Unternehmen mit klarer Positionierung',
    description:
      'Kommerzielle AI-SEO-Seite für Hamburg mit Fokus auf EEAT, lokale Suchintention und conversion-nahe Struktur.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/ai-seo-agentur.jpg', width: 1200, height: 630, alt: 'AI SEO Agentur Hamburg' }],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/ai-seo-agentur',
  },
};

export default function AISeoAgenturHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/ai-seo-agentur"
      title="AI SEO Agentur Hamburg: Für Unternehmen, die nicht nur ranken, sondern empfohlen werden wollen"
      description="Viele suchen nach einer AI SEO Agentur und meinen in Wahrheit drei Dinge gleichzeitig: mehr Sichtbarkeit, mehr Klarheit und weniger sinnlosen Content. Gute Nachricht: Das lässt sich bauen. Schlechte Nachricht: nicht mit denselben Rezepten, die schon bei klassischem SEO halbherzig umgesetzt wurden."
      eyebrow="AI SEO Agentur Hamburg"
      imageSrc="/images/wissen/ai-seo-agentur.jpg"
      imageAlt="AI SEO Agentur in Hamburg"
      imageCaption="AI SEO ist keine Textfabrik. Es ist die Verbindung aus Technik, Struktur, Vertrauen und echter Suchintention."
      summaryItems={[
        'Die Seite bedient direkte Agentur-Suchanfragen mit hoher Kaufnähe im Raum Hamburg.',
        'Der Fokus liegt auf Methodik, Auswahlhilfe und Abgrenzung gegen generische KI-Angebote.',
        'Die EEAT-Signale sind bewusst personennah, technisch fundiert und mit bestehenden Case-Assets abgesichert.',
        'Die Texte sind so formuliert, dass sie für menschliche Leser wie für AI-Zusammenfassungen gut extrahierbar bleiben.',
      ]}
      painPoints={[
        'Viele Agenturen nennen plötzlich AI SEO, liefern aber nur die alte Mischung aus Keywords, Content-Paketen und Hoffnungsmanagement.',
        'Unternehmen investieren in Content, ohne dass klar ist, ob dieser jemals in ChatGPT, Perplexity oder Google AI als Quelle taucht.',
        'Es fehlt eine technische und strategische Klammer zwischen Website, Entitaet, Belegen und lokalen Suchintentionen.',
      ]}
      serviceCards={[
        {
          title: 'AI-SEO-Strategie für kaufnahe Queries',
          text: 'Ich priorisiere Seiten und Suchanfragen, die in Richtung Beratung, Vergleich oder direkter Kontakt gehen. Keine Content-Inseln ohne Geschaeftsbezug.',
        },
        {
          title: 'Umbau bestehender Seiten',
          text: 'Oft muss nicht alles neu. Haeufig reichen bessere Hauptaussagen, sauberere Informationsarchitektur, FAQs, lokale Signale und deutlichere Trust-Elemente.',
        },
        {
          title: 'Commercial Cluster Pages',
          text: 'Ich baue zusätzliche Seiten für lokale Buying-Intent-Cluster, damit deine Website nicht nur einen Hauptverkaufssatz hat, sondern ein belastbares Themenfeld.',
        },
        {
          title: 'Proof und Entity-Building',
          text: 'Cases, Personenprofil, Service-Signale, externe Erwähnungen und technische Strukturen werden zusammengeführt, damit aus Content echte Autorität wird.',
        },
      ]}
      eeatCards={[
        {
          title: 'Tiefe statt Modewort',
          text: 'Ich trenne klar zwischen SEO, AI SEO, GEO und AEO und erkläre auf der Seite auch, wo die Unterschiede praktisch relevant sind. Das hilft Menschen und Modellen gleichermaßen.',
        },
        {
          title: 'Nachweisbare Praxis',
          text: 'Die Website enthält bereits dokumentierte Cases mit KinderAlbum und Blitz Hamburg. Diese Materialbasis macht Aussagen belastbarer als generische Agenturversprechen.',
        },
        {
          title: 'Lokale Passung',
          text: 'Hamburg ist kein austauschbarer Ort in der Copy, sondern ein echter Marktbezug mit Dienstleistungsdichte, lokaler Nachfrage und klaren Wettbewerbsbildern.',
        },
        {
          title: 'Technische Umsetzbarkeit',
          text: 'Ich kann Empfehlungen direkt im Code umsetzen. Das vermeidet den üblichen Agentur-Stillstand zwischen Strategie, Design, SEO und Entwicklung.',
        },
      ]}
      fitBullets={[
        'Unternehmen, die explizit nach AI SEO suchen und keine Lust auf PowerPoint-Sprache mit viermal Innovation pro Absatz haben.',
        'Dienstleister und B2B-Anbieter, deren Website bereits okay aussieht, aber noch keine klare Empfehlungslogik für KI-Systeme aufbaut.',
        'Teams, die einen technisch denkenden Partner wollen statt eines Content-Resellers mit AI-Siegel.',
      ]}
      processCards={[
        {
          title: 'Priorisieren',
          text: 'Welche Leistungen, Suchanfragen und Seiten tragen in Hamburg wirklich zur Nachfrage bei? Genau dort starten wir.',
        },
        {
          title: 'Strukturieren',
          text: 'Die wichtigsten Money-Pages werden fachlich geschärft, intern verlinkt und technisch so ausgerichtet, dass sie extrahierbar bleiben.',
        },
        {
          title: 'Validieren',
          text: 'Wir schauen nicht nur auf Traffic, sondern auf Erwähnungen, Prompts, Antworten und die Qualität der daraus entstehenden Kontakte.',
        },
      ]}
      faqItems={[
        {
          q: 'Ist AI SEO in Hamburg schon relevant genug?',
          a: 'Ja, besonders für Dienstleistungen, Beratung und lokale Spezialangebote. Die Nachfrage ist noch jung, aber genau deshalb kann frühe Klarheit hier mehr bringen als späte Massenoptimierung.',
        },
        {
          q: 'Was kostet eine AI SEO Agentur typischerweise?',
          a: 'Das hängt vom Scope ab. Sinnvoll ist meist ein Audit plus definierter Umsetzungsumfang statt ein vages Dauerabo ohne klare Prioritäten.',
        },
        {
          q: 'Brauche ich dafür komplett neue Inhalte?',
          a: 'Nicht automatisch. Oft ist der größte Hebel bessere Struktur, klarere Leistungsseiten und mehr belastbare Vertrauenssignale statt einfach nur mehr Text.',
        },
      ]}
      relatedLinks={[
        {
          title: 'KI-Sichtbarkeit Agentur Hamburg',
          description: 'Die breitere Klammer für AI Visibility und lokale Empfehlungssignale.',
          href: '/hamburg/ki-sichtbarkeit-agentur',
          tag: 'Kernleistung',
        },
        {
          title: 'Answer Engine Optimization Hamburg',
          description: 'Die Seite für Unternehmen, die AEO als Begriff oder Ansatz suchen.',
          href: '/hamburg/answer-engine-optimization',
          tag: 'AEO',
        },
        {
          title: 'ChatGPT Optimierung Hamburg',
          description: 'Wenn der Fokus stark auf ChatGPT-Empfehlungen liegt.',
          href: '/hamburg/chatgpt-optimierung',
          tag: 'ChatGPT',
        },
      ]}
      ctaTitle="Wenn du schon nach einer AI SEO Agentur suchst, bist du nicht mehr im Inspirationsmodus."
      ctaText="Ich zeige dir, welche Seiten in deinem Fall wirklich Umsatzpotenzial haben und welche AI-SEO-Ideen nur gut auf LinkedIn funktionieren."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="AI SEO für Hamburg anfragen"
    />
  );
}

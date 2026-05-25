import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit Agentur Hamburg | Sichtbar in ChatGPT, Perplexity und Google AI',
  description:
    'KI-Sichtbarkeit Agentur für Hamburg: Strategische, technische und inhaltliche Optimierung für ChatGPT, Perplexity und Google AI mit starkem lokalen Fokus.',
  keywords: [
    'KI Sichtbarkeit Agentur Hamburg',
    'KI Sichtbarkeit Hamburg',
    'AI Visibility Hamburg',
    'ChatGPT Sichtbarkeit Hamburg',
    'Perplexity Sichtbarkeit Hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/ki-sichtbarkeit-agentur',
    title: 'KI-Sichtbarkeit Agentur Hamburg | Sichtbar in ChatGPT, Perplexity und Google AI',
    description:
      'Lokale KI-Sichtbarkeit für Hamburger Unternehmen mit Fokus auf klare Leistungen, EEAT und AI-Readiness.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/reality/hamburg.webp', width: 1200, height: 630, alt: 'KI-Sichtbarkeit Agentur Hamburg' }],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/ki-sichtbarkeit-agentur',
  },
};

export default function KISichtbarkeitAgenturHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/ki-sichtbarkeit-agentur"
      title="KI-Sichtbarkeit Agentur Hamburg: Damit dein Unternehmen in Antworten auftaucht, nicht im Datennebel verschwindet"
      description="Wenn Nutzer in Hamburg ChatGPT, Perplexity oder Google AI nach einem passenden Anbieter fragen, passiert die Vorauswahl oft schon vor dem ersten Website-Klick. Genau dort setzt KI-Sichtbarkeit an: nicht als Buzzword, sondern als System aus klarer Positionierung, technischer Lesbarkeit, glaubwürdigen Signalen und Seiten, die man tatsächlich empfehlen kann."
      eyebrow="KI-Sichtbarkeit Agentur Hamburg"
      imageSrc="/images/reality/hamburg.webp"
      imageAlt="Hamburg lokale KI-Sichtbarkeit"
      imageCaption="Lokale KI-Sichtbarkeit ist kein Effekt-SEO. Sie ist die saubere Übersetzung deines Angebots in ein Format, das Antwortsysteme verstehen."
      summaryItems={[
        'Die Seite zielt auf kaufnahe Suchanfragen von Unternehmen, die bereits aktiv nach einem AI-SEO-Partner in Hamburg suchen.',
        'Sie verknuepft lokale Relevanz, Service-Klarheit und nachweisbare Expertise statt nur allgemeines KI-Gerede.',
        'EEAT wird über reale Cases, technische Kompetenz, Personensignale und klare Methodik transportiert.',
        'CTA und Seitenaufbau sind bewusst auf Kontakt und Audit ausgelegt, nicht auf reine Wissensnutzung.',
      ]}
      painPoints={[
        'Dein Unternehmen hat gute Leistungen, wird aber in KI-Antworten nicht genannt, weil Angebot und Zielgruppe auf der Website zu diffus beschrieben sind.',
        'Wettbewerber mit schlechterem Produkt tauchen in ChatGPT oder Perplexity auf, weil ihre Signale einfacher einzuordnen sind.',
        'Die Website ist für Google halbwegs okay, aber für KI-Systeme semantisch schwach, technisch unklar oder ohne vertrauensbildende Belege aufgebaut.',
      ]}
      serviceCards={[
        {
          title: 'Sichtbarkeits-Audit für Hamburg',
          text: 'Ich prüfe, bei welchen lokalen und kaufnahen Suchfragen dein Unternehmen heute auftaucht, wie Wettbewerber präsent sind und welche Signale dir konkret fehlen.',
        },
        {
          title: 'Service- und Standortseiten',
          text: 'Ich baue oder optimiere Seiten so, dass Leistungen, Stadtbezug, Nutzen und Vertrauenssignale für Menschen und KI gleichzeitig sauber lesbar sind.',
        },
        {
          title: 'Schema, Entitäten und Struktur',
          text: 'Saubere Daten, interne Verlinkung, semantische Ordnung und klare Hauptaussagen sorgen dafür, dass dein Angebot nicht wie eine vage Marketingwolke wirkt.',
        },
        {
          title: 'Messung und Nachschärfung',
          text: 'KI-Sichtbarkeit wird über wiederholbare Prompts, Bot-Zugriffe, Referral-Signale und Sichtbarkeitsmuster beobachtet. Nicht perfekt, aber belastbar.',
        },
      ]}
      eeatCards={[
        {
          title: 'Experience',
          text: 'Ich arbeite mit realen Projekten und dokumentierten Screenshots statt mit Theorie-Folien. KinderAlbum, Blitz Hamburg und weitere vorhandene Proof-Signale sind Teil dieses Arbeitsmodells.',
        },
        {
          title: 'Expertise',
          text: 'Mein Hintergrund ist technisch. Ich schreibe nicht nur Empfehlungen auf, sondern kann Seitenarchitektur, Markup, Content-Struktur und Umsetzung auch wirklich bauen.',
        },
        {
          title: 'Authority',
          text: 'Die Website selbst positioniert mich klar: lokale Spezialisierung, öffentliche Guides, Cases, definierte Leistungen und ein konsistentes Profil statt Agentur-Nebel.',
        },
        {
          title: 'Trust',
          text: 'Keine Fantasie-Garantien, keine Blackbox. Ich arbeite transparent, begrenze Behauptungen auf belegbare Aussagen und sage auch, wenn ein Hebel für ein Unternehmen noch keinen Sinn ergibt.',
        },
      ]}
      fitBullets={[
        'Hamburger Dienstleister, Praxen, Kanzleien, Spezialagenturen und B2B-Anbieter mit klarer Leistung.',
        'Unternehmen, die nicht nur über Google ranken, sondern in KI-Systemen als passende Option vorkommen wollen.',
        'Anbieter mit echtem Angebot, aber schwacher digitaler Klarheit. Das ist häufiger als man denkt und leider auch sichtbarer.',
      ]}
      processCards={[
        {
          title: 'Analyse',
          text: 'Wir prüfen Status quo, Nachfrage, lokale Suchsituationen und die wichtigsten Seiten auf deiner Website.',
        },
        {
          title: 'Aufbau',
          text: 'Ich formuliere oder überarbeite die Seiten, Signale und technischen Bausteine mit dem größten Hebel.',
        },
        {
          title: 'Monitoring',
          text: 'Nach dem Launch wird geprüft, welche Antworten sich verändern und wo noch mehr Präzision nötig ist.',
        },
      ]}
      faqItems={[
        {
          q: 'Was unterscheidet eine KI-Sichtbarkeit Agentur von klassischem SEO in Hamburg?',
          a: 'Klassisches SEO optimiert primär für Suchergebnislisten. KI-Sichtbarkeit optimiert dafür, dass Antwortsysteme dein Unternehmen als zitierbare und empfehlbare Option einordnen.',
        },
        {
          q: 'Ist das nur für große Marken interessant?',
          a: 'Nein. Gerade spezialisierte lokale Unternehmen können in KI-Antworten gut erscheinen, wenn ihre Leistung klarer beschrieben ist als die der größeren, aber diffus positionierten Konkurrenz.',
        },
        {
          q: 'Wie schnell sieht man Ergebnisse?',
          a: 'Ein Teil der Effekte kann bei index- und promptnahen Systemen früher sichtbar werden, stabile lokale Sichtbarkeit entsteht aber über mehrere Wochen und braucht saubere Nacharbeit.',
        },
      ]}
      relatedLinks={[
        {
          title: 'AI SEO Agentur Hamburg',
          description: 'Für Unternehmen, die explizit nach AI SEO und nicht nur nach KI-Sichtbarkeit suchen.',
          href: '/hamburg/ai-seo-agentur',
          tag: 'AI SEO',
        },
        {
          title: 'ChatGPT Optimierung Hamburg',
          description: 'Platform-spezifischer Fokus für Empfehlungen in ChatGPT.',
          href: '/hamburg/chatgpt-optimierung',
          tag: 'ChatGPT',
        },
        {
          title: 'Perplexity Optimierung Hamburg',
          description: 'Für kaufnahe Zitationen und Quellenpräsenz in Perplexity.',
          href: '/hamburg/perplexity-optimierung',
          tag: 'Perplexity',
        },
      ]}
      ctaTitle="Wenn du lokal von KI empfohlen werden willst, reicht klassische Nettigkeit der Website nicht."
      ctaText="Ich prüfe, wo dein Unternehmen heute in Hamburg bei KI-Antworten steht und welche Seiten für Kontaktanfragen wirklich Priorität haben."
      ctaHref="/contact"
      ctaLabel="KI-Sichtbarkeit in Hamburg anfragen"
    />
  );
}

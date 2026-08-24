import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit Agentur Hamburg: ChatGPT und Perplexity',
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
    title: 'KI-Sichtbarkeit Agentur Hamburg: ChatGPT und Perplexity',
    description:
      'Lokale KI-Sichtbarkeit für Hamburger Unternehmen mit Fokus auf klare Leistungen, EEAT und AI-Readiness.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/reality/hamburg.webp', width: 1024, height: 1024, alt: 'KI-Sichtbarkeit Agentur Hamburg' }],
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
      facts={[
        { label: 'Einstieg', value: '15 Minuten, 0 Euro', href: '/termin' },
        { label: 'Umsetzung', value: 'ab 1.500 Euro, Festpreis vorab', href: '/preise' },
        { label: 'Belegt', value: '1.306 KI-Zitate in 3 Projekten', href: '/ergebnisse' },
      ]}
      secondaryCtaHref="/preise"
      secondaryCtaLabel="Preise ansehen"
      contactPhone="+49 176 321 94 754"
      contactNote="Ein Ansprechpartner, keine Agentur-Pipeline. Erstgespräch per Video oder in Hamburg."
      summaryItems={[
        'Die Seite zielt auf kaufnahe Suchanfragen von Unternehmen, die bereits aktiv nach einem AI-SEO-Partner in Hamburg suchen.',
        'Sie verknüpft lokale Relevanz, Service-Klarheit und nachweisbare Expertise statt nur allgemeines KI-Gerede.',
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
      comparison={{
        navLabel: 'SEO vs KI',
        heading: 'Was ein Sichtbarkeitsbericht zeigt und was er verschweigt',
        intro:
          'Der übliche SEO-Report kann diese Frage nicht beantworten: Wirst du genannt, wenn jemand nach einem Anbieter in Hamburg fragt? Die Tabelle zeigt, wo die Logik auseinandergeht und wo du das Ergebnis nachlesen kannst.',
        columns: ['Frage', 'Klassisches SEO', 'KI-Sichtbarkeit', 'Nachlesbar in'],
        rows: [
          [
            'Wer wird gefunden',
            'Listenplatz',
            'genannt oder nicht genannt, dazwischen nichts',
            'Prompt-Liste, immer gleicher Wortlaut',
          ],
          [
            'Wie viele gewinnen',
            'zehn pro Seite',
            'meist drei bis fünf Anbieter pro Antwort',
            'Protokoll der Vergleichsantworten',
          ],
          [
            'Was den Ausschlag gibt',
            'Links und Technik',
            'Eindeutigkeit von Ort, Leistung und Belegen',
            'Abgleich deiner eigenen Angaben',
          ],
          [
            'Wo es sichtbar wird',
            'Search Console',
            'AI-Performance-Bericht der Bing Webmaster Tools',
            'Monatsexport, sonst ist der Zeitraum weg',
          ],
          ['Wie schnell', 'Wochen', 'Zugang in Tagen, Reihenfolge in Monaten', 'Wiederholung derselben Prompts'],
        ],
        note: 'Zwei Zeilen sind der eigentliche Punkt: In der Ergebnisliste gibt es zehn Plätze, in einer Antwort meist drei bis fünf. Sichtbarkeit wird also nicht schwerer, sie wird binär.',
      }}
      proofData={{
        variant: 'column',
        title: 'KI-Zitate in drei Monaten, je Projekt',
        subject: 'Bing Webmaster Tools, Microsoft Copilot und Partner',
        axis: { title: 'Zitate' },
        highlight: 'peak',
        points: [
          { label: 'aiseo.hamburg, eigene Website', short: 'aiseo', value: 800 },
          { label: 'dsgvoschulfotos.de, Schulfotografie', short: 'dsgvo', value: 281 },
          { label: 'dybeauty.de, K-Beauty-Shop', short: 'dybeauty', value: 225 },
        ],
        stats: [
          { label: 'Zitate gesamt', value: '1.306' },
          { label: 'Projekte', value: '3 Branchen' },
          { label: 'Ausgangswert je Projekt', value: 'nahe null' },
        ],
        table: {
          label: 'Zahlen als Tabelle',
          heads: ['Projekt', 'Zitate'],
          sum: ['Alle drei Projekte', '1.306'],
        },
        caption:
          'Jedes Mal, wenn Microsoft Copilot eine Seite dieser Projekte als Quelle nennt, zählt der AI-Performance-Bericht der Bing Webmaster Tools ein Zitat. Zeitraum 15. März bis 13. Juni 2026, drei sehr verschiedene Branchen, jeweils von nahe null aus. Die Screenshots der Berichte liegen offen.',
        source: { href: '/ergebnisse', label: 'Berichte und Fallstudien ansehen' },
      }}
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
      fitNote={{
        label: 'Merksatz',
        statement: 'In einer Antwort gibt es keinen zehnten Platz.',
        text: 'Wer in der Ergebnisliste auf Position acht steht, bekommt wenig Klicks. Wer in der Antwort nicht vorkommt, bekommt gar nichts. Das ist der Grund, warum lokale KI-Sichtbarkeit nicht als Zusatz zum SEO-Paket funktioniert.',
      }}
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
        {
          q: 'Was kostet KI-Sichtbarkeit in Hamburg?',
          a: 'Der erste Schritt ist ein kostenloses 15-Minuten-Gespräch. Danach ein Umsetzungssprint ab 1.500 Euro netto zum Festpreis oder laufende Betreuung ab 600 Euro netto pro Monat. Den Festpreis nenne ich nach dem Gespräch, weil Aufwand und Wettbewerbslage je Branche stark abweichen.',
        },
        {
          q: 'Kann ich das selbst messen?',
          a: 'Ja, und das ist der Punkt. Bing Webmaster Tools und Google Search Console sind kostenlos und zeigen beide KI-Daten. Was du zusätzlich brauchst, ist eine feste Liste aus 30 bis 50 Fragen im identischen Wortlaut und ein Monatsexport, weil ältere Zeiträume in beiden Konsolen nicht rekonstruierbar sind.',
        },
        {
          q: 'Arbeitest du auch außerhalb von Hamburg?',
          a: 'Ja, remote im gesamten deutschsprachigen Raum. Der Hamburg-Fokus ist keine Grenze, sondern der Grund, warum lokale Anbieterfragen hier belastbar beantwortet werden können: Wettbewerber, Verzeichnisse und Kammerlisten, die ein Modell als Quelle nutzt, sind hier bekannt.',
        },
      ]}
      relatedLinks={[
        {
          title: 'AI SEO Agentur Hamburg',
          description: 'Für Unternehmen, die explizit nach AI SEO und nicht nur nach KI-Sichtbarkeit suchen.',
          href: '/ai-seo-agentur',
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

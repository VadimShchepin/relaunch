import type { Metadata } from 'next';
import { LocalIntentTemplate } from '@/components/hamburg/LocalIntentTemplate';

export const metadata: Metadata = {
  title: 'ChatGPT Optimierung Hamburg: empfohlen statt übersehen',
  description:
    'ChatGPT Optimierung für Hamburger Unternehmen: bessere Empfehlungen, klarere Entitätssignale, Bing-nahe Sichtbarkeit und Inhalte für kaufnahe Prompt-Fragen.',
  keywords: [
    'ChatGPT Optimierung Hamburg',
    'ChatGPT SEO Hamburg',
    'in ChatGPT sichtbar werden Hamburg',
    'ChatGPT Agentur Hamburg',
    'Bing SEO Hamburg ChatGPT',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg/chatgpt-optimierung',
    title: 'ChatGPT Optimierung Hamburg: empfohlen statt übersehen',
    description:
      'Platform-spezifische Local-Intent-Seite für ChatGPT-Empfehlungen und Content, der in Antworten wiederverwendet werden kann.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/og/hamburg-chatgpt-optimierung.png', width: 1200, height: 630, alt: 'ChatGPT Optimierung Hamburg' }],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg/chatgpt-optimierung',
  },
};

export default function ChatGPTOptimierungHamburgPage() {
  return (
    <LocalIntentTemplate
      canonicalPath="/hamburg/chatgpt-optimierung"
      title="ChatGPT Optimierung Hamburg: Damit dein Unternehmen bei Empfehlungen nicht auf der stillen Reservebank sitzt"
      description="ChatGPT entscheidet bei vielen Fragen vor dem ersten Klick, welche Anbieter überhaupt genannt werden. ChatGPT Optimierung heißt deshalb nicht, einen Bot zu überlisten, sondern eine Website so belastbar zu bauen, dass sie als Quelle taugt: für Beratung, Dienstleistung und lokales Vertrauensgeschäft in Hamburg."
      eyebrow="ChatGPT Optimierung Hamburg"
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
        'Die Seite zielt auf Unternehmen, die ChatGPT als Akquisekanal ernst nehmen.',
        'Sie verbindet Bing-nahe Sichtbarkeit, Markensignale und eine serviceorientierte Seitenstruktur.',
        'EEAT läuft über Person, Cases, technische Substanz und lokale Spezialisierung.',
        'Die CTA sitzt am Audit, weil ChatGPT-Optimierung ohne Statusanalyse in Aktionismus endet.',
      ]}
      painPoints={[
        'Deine Website beantwortet Fragen für Menschen halbwegs, aber nicht so klar, dass ChatGPT sie als zitierfähige Quelle nutzen will.',
        'Es fehlt eine klare Person, eine echte Service-Priorisierung und die semantische Sicherheit darüber, wofür du in Hamburg empfohlen werden willst.',
        'ChatGPT-Sichtbarkeit wird mit Prompt-Tricks verwechselt, während die eigentliche Arbeit auf Website, Quellenprofil und Bing-Signalen liegt.',
      ]}
      serviceCards={[
        {
          title: 'Prompt-nahe Seitenarchitektur',
          text: 'Seiten, die realen Frageformen folgen: wer hilft, für wen, in welcher Stadt, bei welchem Problem.',
        },
        {
          title: 'Bing- und Quellenfokus',
          text: 'ChatGPT greift im Suchmodus auf Bing zu, also wird Bing bedient: Indexierung, Marken-, Profil- und Quellenkonsistenz.',
        },
        {
          title: 'FAQ und Extrahierbarkeit',
          text: 'Aussagen werden so gebaut, dass sie sich in einer Antwort korrekt zusammenfassen lassen, ohne den Sinn zu verlieren.',
        },
        {
          title: 'Lokale Empfehlungslogik',
          text: 'Hamburg, Leistung, Zielgruppe und Vertrauenssignale werden verknüpft, damit ein Modell einen Grund hat, dich zu nennen.',
        },
      ]}
      comparison={{
        navLabel: 'Antwortsysteme',
        heading: 'Wo die Antwort herkommt, wenn jemand nach deiner Leistung fragt',
        intro:
          'ChatGPT ist kein Kanal, sondern zwei Modi mit unterschiedlichen Hebeln. Dazu kommen drei Systeme, die dieselbe Frage anders beantworten. Die Tabelle zeigt, welcher Hebel wo greift und wo du das Ergebnis nachlesen kannst.',
        columns: ['System', 'Index dahinter', 'Was in der Antwort landet', 'Dein Hebel', 'Nachlesbar in'],
        rows: [
          [
            'ChatGPT, Suchmodus',
            'Bing (Microsoft)',
            'wenige Seiten pro Antwort, mit Link',
            'im Bing-Index stehen, Fragen direkt auf der Seite beantworten',
            'Bing Webmaster Tools, Bereich AI Performance',
          ],
          [
            'ChatGPT, ohne Suche',
            'Trainingsdaten, Stand des Modells',
            'keine Links, nur Namen und Fakten',
            'Erwähnungen auf Seiten, die dir nicht gehören',
            'wiederholte Prompt-Tests, gleicher Wortlaut',
          ],
          [
            'Google AI Overviews',
            'Google-Index',
            'Seiten aus den vorderen Ergebnissen',
            'klassisches Ranking plus klare Seitenstruktur',
            'Search Console, Impressionen und Position',
          ],
          [
            'Perplexity',
            'eigener Index plus fremde Suchdaten',
            'mehrere Quellen, sichtbar verlinkt',
            'Quellentiefe, Aktualität, nachprüfbare Zahlen',
            'Referral-Traffic von perplexity.ai',
          ],
          [
            'Microsoft Copilot',
            'Bing (Microsoft)',
            'wie ChatGPT im Suchmodus',
            'dieselbe Arbeit wie für ChatGPT im Suchmodus',
            'Bing Webmaster Tools, Bereich AI Performance',
          ],
        ],
        note: 'Zwei der fünf Zeilen hängen am selben Index. Wer Bing als Randnotiz behandelt, verliert ChatGPT im Suchmodus und Copilot gleichzeitig.',
      }}
      proofChart={{
        title: 'KI-Zitate für aiseo.hamburg, Summe je 14 Tage',
        subject: 'Quelle: Microsoft Copilot und Partner',
        unit: 'Zitate',
        yMax: 240,
        yStep: 60,
        bars: [
          { label: '15. bis 28. März 2026', short: '15.3.', value: 1 },
          { label: '29. März bis 11. April 2026', short: '29.3.', value: 2 },
          { label: '12. bis 25. April 2026', short: '12.4.', value: 23 },
          { label: '26. April bis 9. Mai 2026', short: '26.4.', value: 45 },
          { label: '10. bis 23. Mai 2026', short: '10.5.', value: 213 },
        ],
        stats: [
          { label: 'Zitate im Export', value: '419 bis 28. Mai' },
          { label: 'Zitierte Seiten', value: '1 pro Antwort' },
          { label: '24. bis 28. Mai', value: '135 Zitate in 5 Tagen' },
        ],
        caption:
          'Bing Webmaster Tools, Bereich AI Performance für aiseo.hamburg. Die Balken sind Summen aus dem Tagesexport vom 30. Mai 2026: 419 Zitate zwischen 15. März und 28. Mai, bei durchschnittlich einer zitierten Seite pro Antwort. Der spätere Bericht für 15. März bis 13. Juni 2026 steht bei 800 Zitaten, die beiden Juni-Wochen sind in den Balken also nicht enthalten.',
        href: '/ergebnisse',
        linkLabel: 'Gleiche Auswertung für Kundenprojekte',
        tableLabel: 'Zahlen als Tabelle',
        tableHeads: ['Zeitraum', 'Zitate'],
        tableSum: ['15. März bis 23. Mai', '284'],
      }}
      eeatCards={[
        {
          title: 'Dokumentierte ChatGPT-Proofs',
          text: 'Tagesexporte aus Bing Webmaster Tools, nachgerechnet und offengelegt. Die Arbeit bleibt nicht theoretisch.',
        },
        {
          title: 'Fachliche Schwerpunkte',
          text: 'Keine Branchenliste ohne Substanz, sondern klare Leistungen, klare Positionierung und lokale Nachfragekontexte.',
        },
        {
          title: 'Technischer Unterbau',
          text: 'Markup, Seitenstruktur, Crawlbarkeit und semantische Ordnung. Ohne diese Ebene bleibt ChatGPT-Optimierung Fassade.',
        },
        {
          title: 'Seriöse Kommunikation',
          text: 'Keine Dauerposition in ChatGPT versprochen. Gebaut werden Seiten und Signale, die die Nennwahrscheinlichkeit erhöhen.',
        },
      ]}
      fitBullets={[
        'Berater, Dienstleister, Agenturen und lokale Anbieter in Hamburg mit erklärungsbedürftigen Leistungen.',
        'Unternehmen, deren Zielgruppe ChatGPT bereits für Vorauswahl und Orientierung nutzt.',
        'Teams, die eine saubere Prompt- und Quellenstrategie wollen statt einer weiteren Runde Content-Füllmaterial.',
      ]}
      fitNote={{
        label: 'Merksatz',
        statement:
          'Bei lokalen Anfragen entscheidet ein Modell anhand von Ort, Leistung und Belegen, wen es überhaupt nennt.',
        text: 'Fehlt eines davon, wirst du nicht schlecht bewertet, sondern gar nicht erst genannt. Klassische Rankings zeigen davon nichts.',
      }}
      processCards={[
        {
          title: 'Prompt-Mapping',
          text: 'Wir bestimmen die Fragen, bei denen ChatGPT in deinem Markt als Vorauswahl wirkt.',
        },
        {
          title: 'Seiten-Schärfung',
          text: 'Aussagen, FAQ, Service-Navigation und lokale Signale werden überarbeitet, bis die Quelle belastbar ist.',
        },
        {
          title: 'Kontrolle',
          text: 'Antworten, Erwähnungen und Referral-Signale werden gemessen. Danach wird nachgeschärft, nicht gefeiert.',
        },
      ]}
      faqItems={[
        {
          q: 'Ist ChatGPT Optimierung etwas anderes als klassisches SEO?',
          a: 'Ja. Klassisches SEO arbeitet auf Rankings. ChatGPT Optimierung arbeitet darauf, in der Antwort selbst als Quelle oder als genannter Anbieter aufzutauchen, auch wenn niemand mehr auf ein Ergebnis klickt.',
        },
        {
          q: 'Brauche ich dafür Bing?',
          a: 'Ja, für den Suchmodus. ChatGPT und Microsoft Copilot greifen dabei auf denselben Index zu, deshalb gehört Bing Webmaster Tools zur Grundausstattung und nicht in die Fußnote.',
        },
        {
          q: 'Wie messe ich Erfolg bei ChatGPT Optimierung?',
          a: 'Über vier Quellen: wiederholte Prompt-Tests mit identischem Wortlaut, Bot-Zugriffe im Server-Log, der Bereich AI Performance in Bing Webmaster Tools und die Qualität der Anfragen, die daraus entstehen.',
        },
      ]}
      relatedLinks={[
        {
          title: 'AI SEO Agentur Hamburg',
          description: 'Die übergeordnete Angebotsseite für AI SEO und Kaufintention.',
          href: '/ai-seo-agentur',
          tag: 'AI SEO',
        },
        {
          title: 'Perplexity Optimierung Hamburg',
          description: 'Wenn Zitationen und Quellenlinks in Perplexity der nächste Hebel sind.',
          href: '/hamburg/perplexity-optimierung',
          tag: 'Perplexity',
        },
        {
          title: 'Answer Engine Optimization Hamburg',
          description: 'Die breitere Perspektive auf AEO über mehrere Antwortsysteme hinweg.',
          href: '/hamburg/answer-engine-optimization',
          tag: 'AEO',
        },
      ]}
      ctaTitle="Wenn ChatGPT schon vorsortiert, sollte deine Website nicht wie ein Missverständnis wirken."
      ctaText="Ich prüfe, welche Prompt-Situationen für dein Angebot in Hamburg relevant sind und wie daraus ChatGPT-taugliche Seiten werden."
      ctaHref="/contact"
      ctaLabel="ChatGPT Optimierung anfragen"
    />
  );
}

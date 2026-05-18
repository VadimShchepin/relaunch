import type { Metadata } from 'next';
import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export const metadata: Metadata = {
  title: 'SEO vs AI SEO: Was du 2026 wirklich brauchst',
  description:
    'Klassisches SEO oder AI SEO? Dieser Vergleich zeigt, wo Google weiter wichtig bleibt, wann KI-Sichtbarkeit zusätzlich nötig ist und warum die beste Strategie fast immer beides kombiniert.',
  keywords: [
    'SEO vs AI SEO',
    'GEO vs SEO',
    'brauche ich noch SEO',
    'AI SEO Unterschied',
    'klassisches SEO oder AI SEO',
    'KI Sichtbarkeit vs SEO',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/seo-vs-ai-seo',
    title: 'SEO vs AI SEO: Was du 2026 wirklich brauchst',
    description:
      'Wo klassisches SEO gewinnt, wo AI SEO nötig wird und warum die stärkste Strategie beide Disziplinen verbindet.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/ki-sichtbarkeit.jpg', width: 1200, height: 630, alt: 'SEO vs AI SEO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO vs AI SEO: Was du 2026 wirklich brauchst',
    description:
      'Wo klassisches SEO gewinnt, wo AI SEO nötig wird und warum die stärkste Strategie beide Disziplinen verbindet.',
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/wissen/seo-vs-ai-seo',
    languages: {
      de: '/wissen/seo-vs-ai-seo',
      'x-default': '/wissen/seo-vs-ai-seo',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SeoVsAiSeoPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/seo-vs-ai-seo"
      title="SEO vs AI SEO: Was du 2026 wirklich brauchst"
      description="Die falsche Frage lautet oft: SEO oder AI SEO? Die richtige lautet: Welche Suchsysteme beeinflussen heute wirklich deine Anfragen? Google bleibt wichtig. KI-Systeme werden wichtiger. Wer das gegeneinander ausspielt, baut am Markt vorbei."
      publishedAt="2026-03-19"
      modifiedAt="2026-03-19"
      breadcrumbLabel="SEO vs AI SEO"
      eyebrow="Vergleich"
      image={{
        src: '/images/wissen/ki-sichtbarkeit.jpg',
        alt: 'Vergleich zwischen SEO und AI SEO',
        caption: 'SEO bringt Sichtbarkeit in Suchmaschinen. AI SEO bringt Empfehlbarkeit in Antwortsystemen. Gute Strategien können beides.',
      }}
      summaryItems={[
        'SEO ist nicht tot. Es ist weiter das Fundament für Indexierung, Autorität und organische Nachfrage.',
        'AI SEO erweitert dieses Fundament um Sichtbarkeit in ChatGPT, Perplexity, Google AI und ähnlichen Antwortsystemen.',
        'Klassische Rankings allein reichen immer häufiger nicht, wenn Nutzer direkt in KI-Systemen vorsortieren.',
        'Die stärkste Strategie kombiniert technische SEO, klare Inhalte, strukturierte Daten und nachweisbare Expertise.',
      ]}
      sections={[
        {
          id: 'kurzvergleich',
          heading: 'Der kürzeste brauchbare Unterschied',
          stat: 'SEO optimiert dafür, gefunden zu werden. AI SEO optimiert dafür, empfohlen zu werden.',
          paragraphs: [
            'Klassisches SEO hilft deiner Website, in Google, Bing und anderen Suchmaschinen für relevante Begriffe zu ranken. Das Ziel ist Sichtbarkeit auf Ergebnisseiten und organischer Traffic.',
            'AI SEO oder GEO fokussiert sich darauf, dass KI-Systeme dein Unternehmen als hilfreiche Quelle, als Anbieter oder als Expertenstimme einordnen. Das Ziel ist nicht nur ein Klick, sondern eine aktive Erwähnung.',
            'Das eine ersetzt das andere nicht. AI SEO ohne saubere SEO-Basis ist wie ein schickes Dach ohne Haus. SEO ohne AI SEO wird dagegen zunehmend blind für den Teil des Marktes, der Entscheidungen schon in der Antwortmaschine trifft.',
          ],
        },
        {
          id: 'wo-seo-gewinnt',
          heading: 'Wo klassisches SEO weiterhin gewinnt',
          cards: [
            {
              title: 'Hohe Suchnachfrage mit klaren Keywords',
              text: 'Wenn Nutzer sehr konkret googeln, bleiben Rankings, Snippets und organische Landingpages extrem wertvoll.',
            },
            {
              title: 'Skalierbarer Traffic',
              text: 'SEO kann über viele Themen hinweg kontinuierlich Besucherströme aufbauen. Gerade für Content-lastige Websites ist das unverzichtbar.',
            },
            {
              title: 'Technisches Fundament',
              text: 'Crawlability, interne Verlinkung, Core Web Vitals und saubere Indexierung sind auch für KI-Systeme wichtig. SEO ist die Infrastruktur.',
            },
            {
              title: 'Messbarkeit',
              text: 'Google Search Console, Rankings und organischer Traffic sind etablierte Signale. AI SEO ist messbar, aber meist indirekter.',
            },
          ],
        },
        {
          id: 'wo-ai-seo-noetig',
          heading: 'Wo AI SEO zusätzlich nötig wird',
          cards: [
            {
              title: 'Empfehlungsfragen',
              text: 'Wer ist gut? Wer passt für mich? Welche Agentur in Hamburg ist sinnvoll? Genau hier entscheidet KI oft vor dem ersten Klick.',
            },
            {
              title: 'Komplexe Kaufentscheidungen',
              text: 'Je höher der Erklärungsbedarf, desto eher lassen sich Nutzer von KI eine Vorauswahl oder Zusammenfassung geben.',
            },
            {
              title: 'Marken- und Quellenvertrauen',
              text: 'AI SEO stärkt, wie dein Unternehmen über verschiedene Quellen hinweg verstanden wird. Das ist mehr als nur Ranking-Technik.',
            },
            {
              title: 'Neue Oberflächen',
              text: 'ChatGPT, Perplexity, Google AI und Copilot verändern die Touchpoints. Wer nur SERPs denkt, denkt mittlerweile zu klein.',
            },
          ],
        },
        {
          id: 'warum-beides',
          heading: 'Warum die beste Strategie fast immer beides kombiniert',
          paragraphs: [
            'SEO liefert die technische und inhaltliche Basis. AI SEO nutzt diese Basis, damit aus Sichtbarkeit auch Empfehlbarkeit wird. Ohne klare Seitenstruktur, saubere Inhalte und Autorität gibt es auch in KI-Systemen wenig zu holen.',
            'Gleichzeitig deckt AI SEO Lücken ab, die klassische SEO-Berichte oft nicht sehen: Wird deine Marke in Antworten genannt? Wird deine Leistung korrekt eingeordnet? Tauchst du bei Vergleichsfragen auf? Diese Ebene wird für Anfragen immer wichtiger.',
            'Die praktische Konsequenz lautet nicht mehr Content, sondern besser ausgerichteter Content. Weniger beliebige Blogproduktion. Mehr Seiten mit klarer Suchintention, echter Expertise und sauberer semantischer Struktur.',
          ],
          quote: 'SEO und AI SEO sind keine Gegner. Sie sind die Vorder- und Rückseite derselben Sichtbarkeitsmünze.',
        },
        {
          id: 'entscheidungshilfe',
          heading: 'Woran du erkennst, was dein Unternehmen jetzt braucht',
          bullets: [
            'Wenn du noch keine solide technische Basis und kaum organischen Traffic hast, muss klassisches SEO zuerst sauber aufgestellt werden.',
            'Wenn du bereits Sichtbarkeit hast, aber bei KI-Empfehlungen nicht auftauchst, wird AI SEO schnell zum größeren Hebel.',
            'Wenn dein Angebot lokal, spezialisiert oder vertrauensintensiv ist, lohnt AI SEO meist früher als du denkst.',
            'Wenn du bereits gute Inhalte hast, aber sie zu unklar, zu generisch oder zu schlecht verlinkt sind, brauchst du keine Content-Lawine, sondern bessere Struktur.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Ist AI SEO nur ein neues Label für SEO?',
          a: 'Nein. Es gibt Überschneidungen, aber AI SEO adressiert andere Ausspielungen und andere Auswahlmechaniken. Rankings helfen, aber sie sind nicht identisch mit Empfehlungen in KI-Systemen.',
        },
        {
          q: 'Brauche ich als kleines Unternehmen schon AI SEO?',
          a: 'Oft ja, besonders wenn du lokal, spezialisiert oder beratungsintensiv arbeitest. Gerade kleinere Unternehmen können durch Klarheit und Fokus in KI-Antworten gut sichtbar werden.',
        },
        {
          q: 'Kann AI SEO klassisches SEO ersetzen?',
          a: 'Nein. Ohne technisches und inhaltliches Fundament fehlt AI SEO die Basis. Es ist eine Erweiterung, kein Ersatz.',
        },
        {
          q: 'Was sollte ich zuerst messen?',
          a: 'Suchintentionen, aktuelle Rankings, relevante KI-Prompts, Quellenpräsenz, Bot-Zugriffe und Referral-Signale. Erst aus der Kombination ergibt sich ein realistisches Bild.',
        },
        {
          q: 'Wie starte ich praktisch?',
          a: 'Mit einem Audit der aktuellen Sichtbarkeit, einer Priorisierung der wichtigsten Seiten und einer Entscheidung, welche Suchsysteme für dein Geschäft wirklich relevant sind.',
        },
      ]}
      relatedArticles={[
        {
          title: 'KI-Sichtbarkeit: Der komplette Guide für Unternehmen',
          description: 'Der breite Überblick über das Framework hinter ChatGPT, Perplexity und Google AI.',
          href: '/wissen/ki-sichtbarkeit',
          tag: 'Pillar Guide',
        },
        {
          title: 'GEO Agentur Hamburg: Was gute Expertise wirklich leistet',
          description: 'Die lokale und kommerzielle Perspektive auf AI SEO für Hamburger Unternehmen.',
          href: '/wissen/geo-agentur-hamburg',
          tag: 'Hamburg',
        },
        {
          title: 'AI SEO Agentur: Was sie wirklich leistet',
          description: 'Worauf du bei Auswahl, Methodik und Leistungsumfang achten solltest.',
          href: '/wissen/ai-seo-agentur',
          tag: 'Auswahl',
        },
      ]}
      ctaTitle="Die Frage ist nicht mehr, ob du SEO oder AI SEO willst."
      ctaText="Die Frage ist, welche Lücken in deiner Sichtbarkeit heute Geld kosten. Ich schaue mir an, was bei dir zuerst den größten Hebel hat."
      ctaHref="/ai-sichtbarkeit-now"
      ctaLabel="Prüfen lassen, was für dein Unternehmen sinnvoll ist"
    />
  );
}

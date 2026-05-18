import type { Metadata } from 'next';
import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export const metadata: Metadata = {
  title: 'GEO Agentur Hamburg: Was gute Generative Engine Optimization wirklich leistet',
  description:
    'Woran du eine gute GEO Agentur in Hamburg erkennst, für welche Unternehmen sie sich lohnt und wie lokale KI-Sichtbarkeit in ChatGPT, Perplexity und Google AI aufgebaut wird.',
  keywords: [
    'GEO Agentur Hamburg',
    'AEO Agentur Hamburg',
    'AI SEO Hamburg',
    'Generative Engine Optimization Hamburg',
    'KI Sichtbarkeit Hamburg',
    'ChatGPT Agentur Hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/geo-agentur-hamburg',
    title: 'GEO Agentur Hamburg: Was gute Generative Engine Optimization wirklich leistet',
    description:
      'Woran du eine gute GEO Agentur in Hamburg erkennst und wie lokale KI-Sichtbarkeit aufgebaut wird.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/reality/hamburg.webp', width: 1200, height: 630, alt: 'GEO Agentur Hamburg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Agentur Hamburg: Was gute Generative Engine Optimization wirklich leistet',
    description:
      'Woran du eine gute GEO Agentur in Hamburg erkennst und wie lokale KI-Sichtbarkeit aufgebaut wird.',
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/wissen/geo-agentur-hamburg',
    languages: {
      de: '/wissen/geo-agentur-hamburg',
      'x-default': '/wissen/geo-agentur-hamburg',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GeoAgenturHamburgPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/geo-agentur-hamburg"
      title="GEO Agentur Hamburg: Was gute Generative Engine Optimization wirklich leistet"
      description="Hamburger Unternehmen müssen nicht überall sichtbar sein. Sie müssen bei den richtigen Fragen genannt werden. Genau darum geht es bei GEO: Generative Engine Optimization für ChatGPT, Perplexity und Google AI. Die gute Nachricht: Hamburg ist ein starker Markt für klare, lokale Positionierung. Die schlechte: Nicht jede Agentur mit frischem KI-Etikett weiß, was sie da tut."
      publishedAt="2026-03-19"
      modifiedAt="2026-03-19"
      breadcrumbLabel="GEO Agentur Hamburg"
      eyebrow="Hamburg"
      image={{
        src: '/images/reality/hamburg.webp',
        alt: 'Lokale AI SEO und GEO in Hamburg',
        caption: 'Lokale KI-Sichtbarkeit beginnt nicht bei Buzzwords, sondern bei einem glasklaren Angebot.',
      }}
      summaryItems={[
        'Eine GEO Agentur optimiert nicht nur für Google, sondern für Empfehlungen und Zitate in KI-Systemen.',
        'Für Hamburger Unternehmen sind lokale Entitäts-Signale, Leistungs-Schärfe und technische Sauberkeit entscheidend.',
        'Echte GEO-Expertise erkennt man an Messmethodik, sauberer Umsetzung und dokumentierten Praxisfällen.',
        'Wenn dein Angebot unklar ist oder du auf schnelle Wunder hoffst, brauchst du eher Ehrlichkeit als eine Agentur-Rakete.',
      ]}
      sections={[
        {
          id: 'was-macht-geo',
          heading: 'Was eine GEO Agentur in Hamburg eigentlich macht',
          paragraphs: [
            'GEO steht für Generative Engine Optimization. Gemeint ist die Optimierung für KI-Systeme, die Antworten formulieren statt nur Links auszugeben. Eine gute GEO Agentur sorgt dafür, dass dein Unternehmen in diesen Antworten überhaupt in Betracht kommt.',
            'Für Hamburg bedeutet das meistens: lokale Signale schärfen, das Angebot fachlich sauber einordnen, technische Grundlagen reparieren und Inhalte so bauen, dass sie bei echten Prompt-Fragen extrahierbar sind.',
            'Die Aufgabe ist deutlich näher an Strategie, Technik und Positionierung als an Content-Fließbandarbeit. Wenn dir jemand 40 KI-Texte pro Monat verkauft und das GEO nennt, ist Vorsicht angebracht. Das ist nicht Innovation. Das ist nur Keyword-Fast-Food mit neuem Etikett.',
          ],
        },
        {
          id: 'green-flags',
          heading: 'Woran du echte GEO-Expertise erkennst',
          intro: 'Diese Signale sprechen für Substanz statt für Show.',
          cards: [
            {
              title: 'Messung statt Märchen',
              text: 'Die Agentur kann zeigen, wie sie ChatGPT-, Perplexity- oder AI-Visibility-Signale prüft. Ohne Messlogik ist alles nur dekoratives Gerede.',
            },
            {
              title: 'Technik wird mitgedacht',
              text: 'Schema, Seitenarchitektur, Indexierung, Crawlability und Performance gehören dazu. GEO ist kein reines Textprodukt.',
            },
            {
              title: 'Lokale Entität ist klar',
              text: 'Adresse, Stadtbezug, Branchenzuordnung, Leistungen und Personen-Signale sind sauber aufgebaut. Gerade für Hamburg-basierte Suchen ist das extrem relevant.',
            },
            {
              title: 'Proof vor Pose',
              text: 'Es gibt nachvollziehbare Beispiele, Screenshots oder Fallstudien. Nicht nur Folien, auf denen dreimal KI und zweimal Disruption steht.',
            },
          ],
        },
        {
          id: 'fuer-wen-lohnt',
          heading: 'Für welche Hamburger Unternehmen sich GEO besonders lohnt',
          bullets: [
            'Dienstleister mit klarem Angebot: Agenturen, Berater, Entwickler, Steuerberater, Anwälte, Praxen.',
            'Lokale Anbieter mit hoher Vertrauensschwelle: Gesundheit, Recht, Handwerk, Bildung, Beauty, Umzug, Entrümpelung.',
            'B2B-Unternehmen mit erklärungsbedürftigen Leistungen, bei denen KI als Vorrecherche genutzt wird.',
            'Unternehmen, die nicht unendlich Werbebudget verbrennen wollen, sondern nachhaltig empfehlbar werden wollen.',
          ],
          note: 'Wenn du allerdings noch nicht sauber sagen kannst, was du für wen löst, ist Positionierung der erste Schritt. Nicht GEO-Politur auf Unklarheit.',
        },
        {
          id: 'mein-ansatz',
          heading: 'Wie lokale KI-Sichtbarkeit in Hamburg aufgebaut wird',
          cards: [
            {
              title: '1. Klarheits-Audit',
              text: 'Wir prüfen, wie deutlich dein Unternehmen heute beschrieben ist. Nicht nur für Menschen, sondern für Suchsysteme und KI-Modelle.',
            },
            {
              title: '2. Seiten mit echter Suchintention',
              text: 'Es entstehen Seiten für konkrete Fragen, Leistungen, Stadtbezug und Entscheidungssituationen. Nicht beliebige Blog-Artikel ohne Hebel.',
            },
            {
              title: '3. Autorität und Konsistenz',
              text: 'Markensignale, Branchenprofile, externe Erwähnungen und eine saubere Personen- bzw. Firmenpräsenz sorgen für mehr Vertrauen.',
            },
            {
              title: '4. Laufende Prompt- und Sichtbarkeitsprüfung',
              text: 'KI-Sichtbarkeit ist kein Einmal-Knopf. Relevante Prompts, Quellen und Antworten müssen über Zeit beobachtet und angepasst werden.',
            },
          ],
          quote: 'Hamburg braucht keine weitere KI-Agentur mit Glitzerfolie. Hamburg braucht Websites, die man empfehlen kann.',
        },
        {
          id: 'wann-nicht',
          heading: 'Wann du keine GEO Agentur brauchst',
          paragraphs: [
            'Wenn du nur für zwei Wochen schnell mehr Leads willst, sind Ads oft der direktere Hebel. GEO ist stark, aber nicht instant. Es baut Empfehlungssubstanz auf.',
            'Wenn dein Angebot diffus ist, deine Website technisch zerfällt und intern niemand Entscheidungen treffen will, bringt auch die beste GEO-Strategie wenig. Dann muss zuerst das Fundament stimmen.',
            'Und wenn dir jemand garantierte KI-Rankings verspricht, brauchst du keine GEO Agentur, sondern einen sehr kurzen Exit.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Was ist der Unterschied zwischen GEO und klassischer SEO?',
          a: 'SEO optimiert für Rankings in Suchmaschinen. GEO optimiert für Empfehlungen und Zitate in generativen Antwortsystemen wie ChatGPT, Perplexity oder Google AI. Beide Disziplinen überlappen, aber sie haben unterschiedliche Erfolgsmechaniken.',
        },
        {
          q: 'Warum ist Hamburg für GEO besonders interessant?',
          a: 'Viele Hamburger Unternehmen haben klare lokale Leistungen und starke Spezialisierungen. Genau diese Mischung funktioniert bei KI-Empfehlungen oft besonders gut, wenn die Website die Signale sauber abbildet.',
        },
        {
          q: 'Brauche ich für GEO eine komplett neue Website?',
          a: 'Nicht immer. Oft reichen gezielte neue Seiten, sauberere Struktur, technische Verbesserungen und klarere Inhalte. Manchmal ist ein Relaunch sinnvoll, aber nicht automatisch.',
        },
        {
          q: 'Wie schnell sieht man Ergebnisse bei GEO?',
          a: 'Das hängt von Markt, Wettbewerb und Ausgangslage ab. Technische und inhaltliche Verbesserungen können früh Wirkung zeigen, stabile Sichtbarkeit entsteht aber meist über mehrere Wochen und Monate.',
        },
        {
          q: 'Wie erkenne ich leere GEO-Versprechen?',
          a: 'Wenn nur über KI-Content-Produktion gesprochen wird, aber nicht über Messung, Bing, strukturierte Daten, Proof oder Prompt-Checks, ist das meist kein echtes GEO-Angebot.',
        },
      ]}
      relatedArticles={[
        {
          title: 'AI SEO Agentur: Was sie wirklich leistet',
          description: 'Die generelle Auswahlhilfe für AI SEO und woran du echte Expertise erkennst.',
          href: '/wissen/ai-seo-agentur',
          tag: 'Auswahl',
        },
        {
          title: 'SEO vs AI SEO: Was du 2026 wirklich brauchst',
          description: 'Die Einordnung, welche Arbeit Google, Bing und KI-Systeme jeweils von dir verlangen.',
          href: '/wissen/seo-vs-ai-seo',
          tag: 'Vergleich',
        },
        {
          title: 'Leistungen: KI-Sichtbarkeit, AEO und AI SEO',
          description: 'Der direkte Überblick über mein Angebot für Hamburger Unternehmen.',
          href: '/leistungen',
          tag: 'Leistungen',
        },
      ]}
      ctaTitle="Wenn du in Hamburg empfohlen werden willst, musst du klarer sein als der Durchschnitt."
      ctaText="Ich prüfe, wie dein Unternehmen heute in ChatGPT, Perplexity und anderen KI-Systemen wirkt und welche lokalen Hebel wirklich Priorität haben."
      ctaHref="/contact"
      ctaLabel="KI-Sichtbarkeit in Hamburg prüfen"
    />
  );
}

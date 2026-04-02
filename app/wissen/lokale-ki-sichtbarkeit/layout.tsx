import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist | aiseo.hamburg',
    description: 'Google Maps ist nicht ChatGPT. Warum lokale Unternehmen in KI-Antworten unsichtbar sind und wie Restaurants, Anwälte und Handwerker lokale KI-Sichtbarkeit aufbauen. Hamburg-Beispiele inklusive.',
    keywords: ['lokale ki sichtbarkeit', 'chatgpt lokal', 'lokales unternehmen ki', 'restaurant chatgpt', 'lokale ai seo', 'hamburg ki sichtbarkeit', 'google maps vs chatgpt', 'lokale ki optimierung'],
    openGraph: {
        title: 'Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist',
        description: 'Google My Business reicht nicht. Wie lokale Unternehmen in ChatGPT, Perplexity und Google AI sichtbar werden. Mit Hamburg-Beispielen.',
        url: 'https://aiseo.hamburg/wissen/lokale-ki-sichtbarkeit',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lokale KI-Sichtbarkeit: Warum dein Restaurant in ChatGPT unsichtbar ist',
        description: 'Google My Business reicht nicht. Wie lokale Unternehmen in KI-Antworten sichtbar werden.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/lokale-ki-sichtbarkeit',
        languages: { 'de': '/wissen/lokale-ki-sichtbarkeit', 'x-default': '/wissen/lokale-ki-sichtbarkeit' },
    },
    other: {
        'geo.region': 'DE-HH',
        'geo.placename': 'Hamburg',
        'geo.position': '53.5511;9.9937',
        'ICBM': '53.5511, 9.9937',
    },
    robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

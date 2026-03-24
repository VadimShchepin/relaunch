import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Immobilienmakler: Wenn Käufer die KI fragen | aiseo.hamburg',
    description: 'Wie Immobilienmakler in ChatGPT, Perplexity und Google AI Overviews empfohlen werden. 7 Strategien für KI-Sichtbarkeit im Immobilienmarkt Hamburg.',
    keywords: [
        'ki sichtbarkeit immobilien',
        'ai seo makler',
        'chatgpt immobilienmakler',
        'immobilien ki sichtbarkeit',
        'makler bei chatgpt gefunden werden',
        'ki sichtbarkeit immobilienmakler hamburg',
        'ai seo immobilien',
        'immobilienmakler ki empfehlung',
    ],
    openGraph: {
        title: 'KI-Sichtbarkeit für Immobilienmakler | Wenn Käufer die KI fragen',
        description: 'Wie Immobilienmakler in ChatGPT, Perplexity und Google AI Overviews empfohlen werden. 7 Strategien für den Hamburger Immobilienmarkt.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-immobilien',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Immobilienmakler | Wenn Käufer die KI fragen',
        description: 'Wie Immobilienmakler in ChatGPT, Perplexity und Google AI Overviews empfohlen werden. 7 Strategien für den Hamburger Immobilienmarkt.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-immobilien',
        languages: {
            'de': '/wissen/ki-sichtbarkeit-immobilien',
            'x-default': '/wissen/ki-sichtbarkeit-immobilien',
        },
    },
    other: {
        'geo.region': 'DE-HH',
        'geo.placename': 'Hamburg',
        'geo.position': '53.5511;9.9937',
        'ICBM': '53.5511, 9.9937',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

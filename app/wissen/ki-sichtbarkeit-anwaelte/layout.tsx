import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Anwälte & Kanzleien: Mandanten fragen die KI | aiseo.hamburg',
    description: 'Wie Anwälte und Kanzleien in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für KI-Empfehlungen, E-E-A-T für Rechtsberatung und lokale Sichtbarkeit in Hamburg.',
    keywords: [
        'ki sichtbarkeit anwälte',
        'ai seo kanzlei',
        'chatgpt anwalt empfehlung',
        'kanzlei ki sichtbarkeit',
        'anwalt bei chatgpt gefunden werden',
        'rechtsanwalt ai seo',
    ],
    openGraph: {
        title: 'KI-Sichtbarkeit für Anwälte & Kanzleien | Mandanten fragen die KI',
        description: 'Wie Anwälte und Kanzleien in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für mehr Mandate durch KI-Empfehlungen.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-anwaelte',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Anwälte & Kanzleien | Mandanten fragen die KI',
        description: 'Wie Anwälte und Kanzleien in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für mehr Mandate durch KI-Empfehlungen.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-anwaelte',
        languages: {
            'de': '/wissen/ki-sichtbarkeit-anwaelte',
            'x-default': '/wissen/ki-sichtbarkeit-anwaelte',
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sichtbarkeit in Claude AI: So wird dein Unternehmen empfohlen | aiseo.hamburg',
    description: 'Wie wird dein Unternehmen in Claude AI sichtbar? Erfahre die wichtigsten Faktoren, Strategien und Praxis-Tipps für Claude AI Optimierung und Sichtbarkeit.',
    keywords: [
        'sichtbarkeit in claude',
        'claude ai optimierung',
        'claude ai sichtbarkeit',
        'bei claude gefunden werden',
        'claude empfehlung unternehmen',
        'anthropic claude seo',
        'claude ki sichtbarkeit',
        'AI SEO Claude',
    ],
    openGraph: {
        title: 'Sichtbarkeit in Claude AI | So wird dein Unternehmen empfohlen',
        description: 'Wie wird dein Unternehmen in Claude AI sichtbar? Die wichtigsten Faktoren und Strategien für Claude-Sichtbarkeit.',
        url: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-claude',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sichtbarkeit in Claude AI | So wird dein Unternehmen empfohlen',
        description: 'Wie wird dein Unternehmen in Claude AI sichtbar? Die wichtigsten Faktoren und Strategien für Claude-Sichtbarkeit.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-claude',
        languages: {
            'de': '/wissen/sichtbarkeit-in-claude',
            'x-default': '/wissen/sichtbarkeit-in-claude',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    other: {
        'geo.region': 'DE-HH',
        'geo.placename': 'Hamburg',
        'geo.position': '53.5511;9.9937',
        'ICBM': '53.5511, 9.9937',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

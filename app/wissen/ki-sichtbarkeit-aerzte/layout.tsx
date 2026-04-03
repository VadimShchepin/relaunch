import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Ärzte & Praxen: Wenn Patienten die KI fragen | aiseo.hamburg',
    description: 'Wie Ärzte und Praxen in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für KI-Empfehlungen, medizinisches E-E-A-T und lokale Sichtbarkeit in Hamburg.',
    keywords: [
        'ki sichtbarkeit ärzte',
        'ai seo praxis',
        'chatgpt arzt empfehlung',
        'arztpraxis ki sichtbarkeit',
        'arzt bei chatgpt gefunden werden',
        'ki sichtbarkeit arztpraxis',
        'chatgpt arzt hamburg',
        'arzt ki empfehlung',
    ],
    openGraph: {
        title: 'KI-Sichtbarkeit für Ärzte & Praxen | Wenn Patienten die KI fragen',
        description: 'Wie Ärzte und Praxen in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für mehr KI-Empfehlungen.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-aerzte',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Ärzte & Praxen | Wenn Patienten die KI fragen',
        description: 'Wie Ärzte und Praxen in ChatGPT, Perplexity und Google AI sichtbar werden. 7 Strategien für mehr KI-Empfehlungen.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-aerzte',
        languages: {
            'de': '/wissen/ki-sichtbarkeit-aerzte',
            'x-default': '/wissen/ki-sichtbarkeit-aerzte',
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

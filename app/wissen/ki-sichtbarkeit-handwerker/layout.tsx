import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Handwerker: Wenn Kunden die KI nach dem besten Betrieb fragen | aiseo.hamburg',
    description: 'KI-Sichtbarkeit für Handwerksbetriebe: Warum ChatGPT nur 2-3 Betriebe empfiehlt, welche Faktoren entscheiden und 7 Strategien für Handwerker in Hamburg.',
    keywords: [
        'ki sichtbarkeit handwerker',
        'ai seo handwerk',
        'chatgpt handwerker empfehlung',
        'handwerksbetrieb ki sichtbarkeit',
        'handwerker bei chatgpt',
        'handwerker ki optimierung',
        'handwerksbetrieb chatgpt',
        'lokale ki sichtbarkeit handwerk',
    ],
    openGraph: {
        title: 'KI-Sichtbarkeit für Handwerker | Wenn Kunden die KI nach dem besten Betrieb fragen',
        description: 'KI-Sichtbarkeit für Handwerksbetriebe: Warum ChatGPT nur 2-3 Betriebe empfiehlt und 7 Strategien für Handwerker.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-handwerker',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Handwerker | Wenn Kunden die KI nach dem besten Betrieb fragen',
        description: 'KI-Sichtbarkeit für Handwerksbetriebe: Warum ChatGPT nur 2-3 Betriebe empfiehlt und 7 Strategien für Handwerker.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-handwerker',
        languages: {
            'de': '/wissen/ki-sichtbarkeit-handwerker',
            'x-default': '/wissen/ki-sichtbarkeit-handwerker',
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

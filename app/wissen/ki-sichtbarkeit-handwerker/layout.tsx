import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Handwerker: echtes Beispiel aus Hamburg',
    description: 'Wie ein Hamburger Betrieb (5,0 Sterne, 35 Bewertungen) von ChatGPT empfohlen wird: echte Zahlen, die MyHammer-Lead-Falle, der häufigste Fehler und 7 Strategien für Handwerker.',
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
        title: 'KI-Sichtbarkeit für Handwerker: echtes Beispiel aus Hamburg',
        description: 'Wie ein Hamburger Betrieb von ChatGPT empfohlen wird: echte Zahlen, die MyHammer-Lead-Falle und 7 Strategien für Handwerker.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-handwerker',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
        images: [{ url: 'https://aiseo.hamburg/photo/wissen_assets/chatgpt_citation.webp', width: 1200, height: 630, alt: 'ChatGPT empfiehlt einen Hamburger Handwerksbetrieb' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Handwerker: echtes Beispiel aus Hamburg',
        description: 'Wie ein Hamburger Betrieb von ChatGPT empfohlen wird: echte Zahlen, die MyHammer-Lead-Falle und 7 Strategien für Handwerker.',
        images: ['https://aiseo.hamburg/photo/wissen_assets/chatgpt_citation.webp'],
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

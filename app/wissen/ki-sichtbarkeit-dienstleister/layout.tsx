import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Dienstleister: vom Geheimtipp zur KI-Empfehlung',
    description: 'Warum ChatGPT deinen Wettbewerber empfiehlt und nicht dich. 5 Schritte f\u00fcr Steuerberater, Architekten, Berater & Agenturen zur KI-Sichtbarkeit mit ROI-Rechnung.',
    keywords: [
        'ki sichtbarkeit dienstleister',
        'ai seo dienstleister',
        'ki sichtbarkeit berater',
        'chatgpt empfehlung dienstleister',
        'ki sichtbarkeit steuerberater',
        'ki sichtbarkeit architekten',
        'ai seo beratung',
        'ki empfehlung unternehmensberater',
    ],
    openGraph: {
        title: 'KI-Sichtbarkeit für Dienstleister: vom Geheimtipp zur KI-Empfehlung',
        description: 'Warum ChatGPT deinen Wettbewerber empfiehlt und nicht dich. 5 Schritte f\u00fcr Steuerberater, Architekten, Berater & Agenturen zur KI-Sichtbarkeit.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-dienstleister',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
        images: [{ url: '/og/wissen-ki-sichtbarkeit-dienstleister.jpg', width: 1200, height: 630, alt: 'KI-Sichtbarkeit für Dienstleister: vom unsichtbaren Experten zum empfohlenen Anbieter' }],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/og/wissen-ki-sichtbarkeit-dienstleister.jpg'],
        title: 'KI-Sichtbarkeit für Dienstleister: vom Geheimtipp zur KI-Empfehlung',
        description: 'Warum ChatGPT deinen Wettbewerber empfiehlt und nicht dich. 5 Schritte f\u00fcr Steuerberater, Architekten, Berater & Agenturen zur KI-Sichtbarkeit.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-dienstleister',
        languages: {
            'de': '/wissen/ki-sichtbarkeit-dienstleister',
            'x-default': '/wissen/ki-sichtbarkeit-dienstleister',
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit beauftragen: Der komplette Ablauf von Anfrage bis Ergebnis | aiseo.hamburg',
    description: 'Was passiert, wenn du KI-Sichtbarkeit bei aiseo.hamburg beauftragst? Der komplette Prozess von kostenloser Kurzanalyse bis zur ersten ChatGPT-Empfehlung. Transparent, ehrlich, ohne Buzzwords.',
    keywords: ['ki sichtbarkeit beauftragen', 'ai seo agentur ablauf', 'ki sichtbarkeit buchen', 'ai seo prozess', 'ki sichtbarkeit anfrage'],
    openGraph: {
        title: 'KI-Sichtbarkeit beauftragen: Der komplette Ablauf von Anfrage bis Ergebnis',
        description: 'Was passiert, wenn du KI-Sichtbarkeit beauftragst? Der komplette Prozess — transparent, ehrlich, ohne Verkaufstricks.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-beauftragen',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit beauftragen: Der komplette Ablauf',
        description: 'Von der kostenlosen Kurzanalyse bis zur ersten ChatGPT-Empfehlung. Der komplette Prozess bei aiseo.hamburg.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-beauftragen',
        languages: { 'de': '/wissen/ki-sichtbarkeit-beauftragen', 'x-default': '/wissen/ki-sichtbarkeit-beauftragen' },
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

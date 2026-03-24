import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit Kosten: Was AI SEO wirklich kostet (2026) | aiseo.hamburg',
    description: 'Was kostet KI-Sichtbarkeit? Transparente Preise, ehrlicher Kostenvergleich und ROI-Rechnung. Einmaliges Upgrade ab 1.500€, laufende Betreuung ab 2.500€/Monat.',
    keywords: ['ki sichtbarkeit kosten', 'ai seo kosten', 'ai seo preise', 'was kostet ki sichtbarkeit', 'chatgpt optimierung kosten', 'ki sichtbarkeit investition'],
    openGraph: {
        title: 'KI-Sichtbarkeit Kosten: Was AI SEO wirklich kostet (2026)',
        description: 'Transparente Preise für KI-Sichtbarkeit. Kostenvergleich mit Google Ads und klassischem SEO. ROI-Rechner und ehrliche Preismodelle.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-kosten',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit Kosten: Was AI SEO wirklich kostet (2026)',
        description: 'Transparente Preise für KI-Sichtbarkeit. Kostenvergleich, ROI-Rechner und ehrliche Preismodelle.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-kosten',
        languages: { 'de': '/wissen/ki-sichtbarkeit-kosten', 'x-default': '/wissen/ki-sichtbarkeit-kosten' },
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

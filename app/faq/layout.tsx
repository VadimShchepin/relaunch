import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ — KI-Sichtbarkeit und AI SEO Fragen | aiseo.hamburg',
    description: 'Häufige Fragen zu KI-Sichtbarkeit, AI SEO, GEO und AEO. Wie funktioniert Optimierung für ChatGPT und andere KI-Systeme?',
    keywords: [
        'KI-Sichtbarkeit FAQ',
        'AI SEO Fragen',
        'GEO AEO FAQ',
        'ChatGPT Optimierung',
        'KI Optimierung FAQ',
        'AI SEO Hamburg FAQ'
    ],
    openGraph: {
        title: 'FAQ — KI-Sichtbarkeit und AI SEO Fragen',
        description: 'Häufige Fragen zu KI-Sichtbarkeit, AI SEO, GEO und AEO. Wie funktioniert Optimierung für ChatGPT und andere KI-Systeme?',
        url: 'https://aiseo.hamburg/faq',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ — KI-Sichtbarkeit und AI SEO Fragen',
        description: 'Häufige Fragen zu KI-Sichtbarkeit, AI SEO, GEO und AEO. Wie funktioniert Optimierung für ChatGPT und andere KI-Systeme?',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/faq',
        languages: {
            'de': '/faq',
            'x-default': '/faq',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
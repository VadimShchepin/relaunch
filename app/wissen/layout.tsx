import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wissen: KI-Sichtbarkeit, AI SEO & Automatisierung | aiseo.hamburg',
    description: 'Praxis-Guides zu KI-Sichtbarkeit, AI SEO, ChatGPT- und Perplexity-Optimierung und Website-Automatisierung. Fundiertes Wissen für Hamburger Unternehmen.',
    keywords: [
        'KI-Sichtbarkeit Wissen',
        'AI SEO Guides',
        'ChatGPT Sichtbarkeit',
        'Perplexity Optimierung',
        'Website Automatisierung',
        'AI SEO Ratgeber',
        'KI Optimierung lernen',
    ],
    openGraph: {
        title: 'Wissen: KI-Sichtbarkeit, AI SEO & Automatisierung',
        description: 'Praxis-Guides zu KI-Sichtbarkeit, AI SEO und Website-Automatisierung.',
        url: 'https://aiseo.hamburg/wissen',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wissen: KI-Sichtbarkeit, AI SEO & Automatisierung',
        description: 'Praxis-Guides zu KI-Sichtbarkeit, AI SEO und Website-Automatisierung.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen',
        languages: {
            'de': '/wissen',
            'x-default': '/wissen',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function WissenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI SEO Agentur Hamburg | KI-Sichtbarkeit vom Software-Architekten',
    description: 'AI SEO Agentur in Hamburg: Vadim Shchepin verbindet 10+ Jahre Software-Erfahrung mit KI-Sichtbarkeit. Keine Backlink-Pakete, sondern datengetriebene AI SEO Beratung. Kostenlose Kurzanalyse.',
    keywords: [
        'agentur ki sichtbarkeit',
        'ai seo agentur',
        'ki seo agentur',
        'ki sichtbarkeit agentur hamburg',
        'ai seo beratung hamburg',
        'ai seo agencies near me',
        'seo altona',
        'ai seo beratung',
        'ki seo agentur hamburg',
        'AI SEO Agentur Hamburg',
        'KI-Sichtbarkeit Agentur',
        'AI SEO Beratung',
        'GEO Agentur Hamburg',
        'AI SEO Dienstleister Hamburg',
        'KI SEO Optimierung Hamburg',
    ],
    openGraph: {
        title: 'AI SEO Agentur Hamburg | KI-Sichtbarkeit vom Software-Architekten',
        description: 'Keine Backlink-Pakete, keine Templates. AI SEO Beratung von einem Software-Architekten mit 10+ Jahren Erfahrung. Kostenlose Kurzanalyse fur Hamburger Unternehmen.',
        url: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI SEO Agentur Hamburg | KI-Sichtbarkeit vom Software-Architekten',
        description: 'AI SEO Beratung von einem Software-Architekten. Keine Pakete, keine Templates. Persoenliche Analyse.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
        languages: { 'de': '/wissen/ai-seo-agentur', 'x-default': '/wissen/ai-seo-agentur' },
    },
    robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

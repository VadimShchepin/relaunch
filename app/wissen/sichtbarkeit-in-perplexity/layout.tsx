import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sichtbarkeit in Perplexity AI: Guide fur Unternehmen 2026',
    description: 'Wie wird dein Unternehmen von Perplexity AI zitiert? Erfahre die wichtigsten Optimierungsstrategien fur die KI-Suchmaschine mit 45 Mio. Nutzern.',
    keywords: ['Perplexity Sichtbarkeit', 'Sichtbarkeit auf Perplexity', 'Perplexity SEO', 'Perplexity AI Optimierung', 'Perplexity Unternehmen', 'KI Suchmaschine Perplexity', 'Perplexity zitiert werden'],
    openGraph: {
        title: 'Sichtbarkeit in Perplexity AI: Guide fur Unternehmen 2026',
        description: 'Wie wird dein Unternehmen von Perplexity AI zitiert? Die wichtigsten Optimierungsstrategien.',
        url: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-perplexity',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sichtbarkeit in Perplexity AI: Guide fur Unternehmen 2026',
        description: 'Wie wird dein Unternehmen von Perplexity AI zitiert?',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-perplexity',
        languages: { 'de': '/wissen/sichtbarkeit-in-perplexity', 'x-default': '/wissen/sichtbarkeit-in-perplexity' },
    },
    robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

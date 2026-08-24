import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sichtbarkeit in Perplexity: so wirst du als Quelle zitiert',
    description: 'Perplexity nennt pro Antwort nur eine Handvoll Quellen. So sorgst du dafür, dass dein Unternehmen dazugehört. Konkrete Schritte für die KI-Suchmaschine mit 780 Mio. Suchanfragen im Monat.',
    keywords: ['Perplexity Sichtbarkeit', 'Sichtbarkeit auf Perplexity', 'Perplexity SEO', 'Perplexity AI Optimierung', 'Perplexity Unternehmen', 'KI Suchmaschine Perplexity', 'Perplexity zitiert werden'],
    openGraph: {
        title: 'Sichtbarkeit in Perplexity: so wirst du als Quelle zitiert',
        description: 'Perplexity nennt pro Antwort nur eine Handvoll Quellen. So sorgst du dafür, dass dein Unternehmen dazugehört.',
        url: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-perplexity',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sichtbarkeit in Perplexity: so wirst du als Quelle zitiert',
        description: 'Perplexity nennt pro Antwort nur wenige Quellen. So gehört dein Unternehmen dazu.',
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

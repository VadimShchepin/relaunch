import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI SEO Agentur | Was sie leistet und worauf es ankommt',
    description: 'Was macht eine AI SEO Agentur? Erfahre, welche Leistungen wichtig sind, worauf du bei der Auswahl achten solltest und wann sich AI SEO Beratung lohnt.',
    keywords: ['AI SEO Agentur', 'AI SEO Beratung', 'AI SEO Agency', 'AI SEO Consulting', 'AI SEO Agentur Hamburg', 'KI SEO Agentur', 'GEO Agentur', 'AI SEO Dienstleister'],
    openGraph: {
        title: 'AI SEO Agentur | Was sie leistet und worauf es ankommt',
        description: 'Was macht eine AI SEO Agentur? Leistungen, Auswahlkriterien und wann sich AI SEO Beratung lohnt.',
        url: 'https://aiseo.hamburg/wissen/ai-seo-agentur',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI SEO Agentur | Was sie leistet und worauf es ankommt',
        description: 'Was macht eine AI SEO Agentur? Leistungen, Auswahlkriterien und wann sich Beratung lohnt.',
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

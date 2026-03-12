import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website-Automatisierung: Tools und Strategien fur 2026',
    description: 'Website-Automatisierung fur Unternehmen: Die besten Tools, DSGVO-konforme Losungen und praktische Strategien fur mehr Effizienz im digitalen Alltag.',
    keywords: ['Website Automatisierung', 'Webentwicklung Tools', 'KI Automatisierung', 'Website Automation', 'Marketing Automatisierung', 'Workflow Automatisierung', 'DSGVO Automatisierung', 'n8n Make Zapier'],
    openGraph: {
        title: 'Website-Automatisierung: Tools und Strategien fur 2026',
        description: 'Die besten Tools und Strategien fur Website-Automatisierung. DSGVO-konform und praxiserprobt.',
        url: 'https://aiseo.hamburg/wissen/website-automatisierung',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Website-Automatisierung: Tools und Strategien fur 2026',
        description: 'Die besten Tools und Strategien fur Website-Automatisierung.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/website-automatisierung',
        languages: { 'de': '/wissen/website-automatisierung', 'x-default': '/wissen/website-automatisierung' },
    },
    robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

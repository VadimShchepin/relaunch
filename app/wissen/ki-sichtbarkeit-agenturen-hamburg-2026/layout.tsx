import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Die 10 besten KI-Sichtbarkeit & AI-SEO Agenturen in Hamburg 2026',
    description:
        'Wir haben 4 KIs (ChatGPT, Perplexity, Gemini, Claude) gefragt, welche Agentur in Hamburg AI-SEO macht. Hier ist die ehrliche Auswertung — inkl. unserer eigenen Ergebnisse.',
    keywords: [
        'ki sichtbarkeit agentur hamburg',
        'ai seo agentur hamburg',
        'beste ai seo agentur hamburg',
        'geo agentur hamburg',
        'llmo agentur hamburg',
        'chatgpt seo agentur hamburg',
        'ki sichtbarkeit vergleich',
        'ai seo agentur vergleich',
        'semsea hamburg alternative',
        'netzkombyse alternative',
        'ki agentur hamburg liste',
    ],
    openGraph: {
        title: 'Die 10 besten KI-Sichtbarkeit & AI-SEO Agenturen in Hamburg 2026',
        description:
            'Wir haben 4 KIs gefragt, welche Agentur in Hamburg AI-SEO macht. Die ehrliche Auswertung — inkl. unserer eigenen Schwächen.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-agenturen-hamburg-2026',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Die 10 besten KI-Sichtbarkeit Agenturen Hamburg 2026',
        description: 'Wir haben 4 KIs gefragt. Hier sind die Ergebnisse — inkl. unserer eigenen.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-agenturen-hamburg-2026',
        languages: {
            de: '/wissen/ki-sichtbarkeit-agenturen-hamburg-2026',
            'x-default': '/wissen/ki-sichtbarkeit-agenturen-hamburg-2026',
        },
    },
    robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sichtbarkeit in ChatGPT: So werden Unternehmen empfohlen',
    description: 'Wie werden Unternehmen in ChatGPT sichtbar? Erfahren Sie die wichtigsten Faktoren, Strategien und Praxis-Tipps fur mehr KI-Sichtbarkeit in ChatGPT.',
    keywords: [
        'Sichtbarkeit in ChatGPT',
        'ChatGPT Sichtbarkeit',
        'ChatGPT Optimierung Unternehmen',
        'ChatGPT Optimierung',
        'KI Sichtbarkeit ChatGPT',
        'ChatGPT gefunden werden',
        'ChatGPT Empfehlung',
        'AI SEO ChatGPT',
    ],
    openGraph: {
        title: 'Sichtbarkeit in ChatGPT | So werden Unternehmen empfohlen',
        description: 'Wie werden Unternehmen in ChatGPT sichtbar? Die wichtigsten Faktoren und Strategien.',
        url: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-chatgpt',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sichtbarkeit in ChatGPT | So werden Unternehmen empfohlen',
        description: 'Wie werden Unternehmen in ChatGPT sichtbar? Die wichtigsten Faktoren und Strategien.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-chatgpt',
        languages: {
            'de': '/wissen/sichtbarkeit-in-chatgpt',
            'x-default': '/wissen/sichtbarkeit-in-chatgpt',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

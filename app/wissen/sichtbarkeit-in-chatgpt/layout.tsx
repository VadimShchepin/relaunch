import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sichtbarkeit in ChatGPT: So werden Unternehmen empfohlen',
    description: 'Warum ChatGPT manche Unternehmen empfiehlt und andere nie nennt. Die Faktoren hinter den Empfehlungen und eine konkrete Anleitung, wie du selbst zur zitierten Quelle wirst.',
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
        description: 'Warum ChatGPT manche Unternehmen empfiehlt und andere nie nennt, und wie du selbst zur zitierten Quelle wirst.',
        url: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-chatgpt',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sichtbarkeit in ChatGPT | So werden Unternehmen empfohlen',
        description: 'Warum ChatGPT manche Unternehmen empfiehlt und andere nie nennt, und wie du selbst zur zitierten Quelle wirst.',
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Shops: warum ChatGPT dich meidet',
    description: 'Warum E-Commerce-Shops für ChatGPT und Perplexity unsichtbar sind. Produktseiten, die KI nicht zitieren kann, und was stattdessen funktioniert. Buying Guides, Vergleiche und Product Schema für KI-Sichtbarkeit.',
    keywords: ['ki sichtbarkeit ecommerce', 'chatgpt online shop', 'ai seo ecommerce', 'ki produktempfehlung', 'chatgpt produkte empfehlen', 'online shop ki optimierung', 'ecommerce ai seo', 'ki sichtbarkeit shop'],
    openGraph: {
        title: 'KI-Sichtbarkeit für Shops: warum ChatGPT dich meidet',
        description: 'E-Commerce und KI-Sichtbarkeit: Warum Produktseiten für LLMs unsichtbar sind und wie du zitierbaren Content rund um deine Produkte aufbaust.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-ecommerce',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
        images: [{ url: '/images/wissen/ki-sichtbarkeit-ecommerce/hero-ecommerce-ai-visibility.webp', width: 1672, height: 941, alt: 'KI-Sichtbarkeit für Online-Shops und E-Commerce' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Shops: warum ChatGPT dich meidet',
        description: 'E-Commerce und KI-Sichtbarkeit: Warum Produktseiten für LLMs unsichtbar sind und wie du zitierbaren Content aufbaust.',
        images: ['/images/wissen/ki-sichtbarkeit-ecommerce/hero-ecommerce-ai-visibility.webp'],
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-ecommerce',
        languages: { 'de': '/wissen/ki-sichtbarkeit-ecommerce', 'x-default': '/wissen/ki-sichtbarkeit-ecommerce' },
    },
    other: {
        'geo.region': 'DE-HH',
        'geo.placename': 'Hamburg',
        'geo.position': '53.5511;9.9937',
        'ICBM': '53.5511, 9.9937',
    },
    robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

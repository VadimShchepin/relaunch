import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI-Sichtbarkeits-Upgrade Hamburg | KI-Optimierung',
    description: 'Einmaliges AI-Sichtbarkeits-Upgrade für Hamburg: Startseite + 2 Unterseiten + Schema + Indexierung. 1.500€ netto, 10–14 Tage. Direkt vom Software-Engineer.',
    keywords: [
        'AI Sichtbarkeit Hamburg',
        'KI Optimierung Hamburg',
        'ChatGPT Hamburg',
        'Perplexity Hamburg',
        'Google AI Hamburg',
        'lokale KI Sichtbarkeit',
        'AI SEO Hamburg',
        'Hamburger Unternehmen KI'
    ],
    openGraph: {
        title: 'AI-Sichtbarkeits-Upgrade Hamburg | KI-Optimierung für Hamburger Unternehmen',
        description: 'Werden Sie in ChatGPT, Perplexity & Google AI als lokale Empfehlung für Hamburg sichtbar. Einmaliges Upgrade für Dienstleister, Praxen und lokale Betriebe.',
        url: 'https://aiseo.hamburg/ai-sichtbarkeits-upgrade-hamburg',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI-Sichtbarkeits-Upgrade Hamburg',
        description: 'Werden Sie in ChatGPT, Perplexity & Google AI als lokale Empfehlung für Hamburg sichtbar.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/ai-sichtbarkeits-upgrade-hamburg',
        languages: {
            'de': '/ai-sichtbarkeits-upgrade-hamburg',
            'x-default': '/ai-sichtbarkeits-upgrade-hamburg',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AISichtbarkeitsUpgradeHamburgLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

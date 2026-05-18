import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AGB | aiseo.hamburg',
    description: 'Allgemeine Geschäftsbedingungen von aiseo.hamburg für KI-Sichtbarkeit und AI SEO Dienstleistungen.',
    openGraph: {
        description: 'Allgemeine Geschäftsbedingungen von aiseo.hamburg für KI-Sichtbarkeit und AI SEO Dienstleistungen.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/agb',
    },
};

export default function AGBLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

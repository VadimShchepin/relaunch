import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum | aiseo.hamburg',
    description: 'Impressum und rechtliche Informationen zu aiseo.hamburg - KI-Sichtbarkeit für Hamburger Unternehmen.',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/impressum',
    },
};

export default function ImpressumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

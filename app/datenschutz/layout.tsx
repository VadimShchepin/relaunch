import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | aiseo.hamburg',
    description: 'Datenschutzerklärung von aiseo.hamburg. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function DatenschutzLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pressekit | aiseo.hamburg - KI-Sichtbarkeit Hamburg',
    description: 'Pressekit und Medienressourcen von aiseo.hamburg. Logos, Informationen und Kontaktdaten für Presse und Medien.',
    openGraph: {
        title: 'Pressekit | aiseo.hamburg',
        description: 'Pressekit und Medienressourcen von aiseo.hamburg.',
        url: 'https://aiseo.hamburg/pressekit',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PressekitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

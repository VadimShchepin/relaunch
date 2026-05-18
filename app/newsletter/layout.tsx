import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Newsletter | aiseo.hamburg',
    description: 'Newsletter-Anmeldung für KI-Sichtbarkeit Updates.',
    openGraph: {
        description: 'Newsletter-Anmeldung für KI-Sichtbarkeit Updates.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function NewsletterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

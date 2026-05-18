import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Newsletter bestätigt | aiseo.hamburg',
    description: 'Ihre Newsletter-Anmeldung wurde bestätigt.',
    openGraph: {
        description: 'Ihre Newsletter-Anmeldung wurde bestätigt.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function NewsletterConfirmedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

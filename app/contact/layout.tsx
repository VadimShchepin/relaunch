import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt KI-Sichtbarkeit Hamburg | Kostenloser 15-Min-Call",
    description: "Kontaktieren Sie uns für professionelle KI-Optimierung. Kostenloser 15-Minuten-Call für Hamburger Unternehmen.",
    openGraph: {
        description: "Kontaktieren Sie uns für professionelle KI-Optimierung. Kostenloser 15-Minuten-Call für Hamburger Unternehmen.",
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
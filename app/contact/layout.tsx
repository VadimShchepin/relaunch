import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt — KI-Sichtbarkeit Beratung Hamburg | aiseo.hamburg",
    description: "Kontaktieren Sie uns für professionelle KI-Optimierung. Kostenlose Erstberatung für Hamburger Unternehmen.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
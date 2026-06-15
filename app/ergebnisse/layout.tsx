import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ergebnisse & Case Studies | KI-Sichtbarkeit aiseo",
  description:
    "Nachprüfbare Ergebnisse statt Vanity-Grafiken: 800 KI-Zitate in 3 Monaten, +847% KI-Traffic, +55% Klicks. Echte Case Studies aus Hamburg, mit Quellen.",
  alternates: { canonical: "/ergebnisse" },
  openGraph: {
    title: "Ergebnisse & Case Studies | KI-Sichtbarkeit aiseo",
    description:
      "Nachprüfbare Ergebnisse statt Vanity-Grafiken: echte Case Studies zu KI-Sichtbarkeit, AI SEO und Generative Engine Optimization (GEO) aus Hamburg.",
    url: "/ergebnisse",
    locale: "de_DE",
    type: "website",
  },
};

export default function ErgebnisseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

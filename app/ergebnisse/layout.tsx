import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ergebnisse & Case Studies | KI-Sichtbarkeit aiseo",
  description:
    "Nachprüfbare Ergebnisse statt Vanity-Grafiken: +55% Klicks, +847% KI-Traffic und der meistzitierte Inhalt in Bing und Copilot. Echte Case Studies aus Hamburg.",
  alternates: { canonical: "/ergebnisse" },
  openGraph: {
    title: "Ergebnisse & Case Studies | KI-Sichtbarkeit aiseo",
    description:
      "Nachprüfbare Ergebnisse statt Vanity-Grafiken: echte Case Studies zu KI-Sichtbarkeit und AI SEO aus Hamburg.",
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

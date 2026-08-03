import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Pakete für KI-Sichtbarkeit | aiseo.hamburg",
  description:
    "Pakete für KI-Sichtbarkeit und AI SEO aus Hamburg: kostenloser 15-Minuten-Call, danach Umsetzungs-Sprint oder laufende Betreuung zum Festpreis.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise & Pakete für KI-Sichtbarkeit | aiseo.hamburg",
    description:
      "Kostenloser 15-Minuten-Call, danach Umsetzungs-Sprint oder laufende Betreuung zum Festpreis. Keine versteckten Stunden.",
    url: "/preise",
    locale: "de_DE",
    type: "website",
  },
};

export default function PreiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

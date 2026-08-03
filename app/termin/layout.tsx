import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erstgespräch vereinbaren | KI-Sichtbarkeit Hamburg",
  description:
    "Kostenloser 15-Minuten-Call zur KI-Sichtbarkeit. Wir schauen live, ob du in ChatGPT und Perplexity genannt wirst, und nennen dir konkrete nächste Schritte. Unverbindlich.",
  alternates: {
    canonical: "/termin",
    languages: {
      de: "/termin",
      "x-default": "/termin",
    },
  },
  openGraph: {
    title: "Erstgespräch vereinbaren | KI-Sichtbarkeit Hamburg",
    description:
      "Kostenloser 15-Minuten-Call zur KI-Sichtbarkeit. Live-Check in ChatGPT und Perplexity, konkrete nächste Schritte, unverbindlich.",
    url: "https://aiseo.hamburg/termin",
    siteName: "aiseo.hamburg",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

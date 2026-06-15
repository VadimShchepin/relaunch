import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Sichtbarkeit: in ChatGPT empfohlen werden",
  description:
    "Wirst du in ChatGPT genannt, wenn Kunden nach deiner Leistung fragen? Generative Engine Optimization (GEO) aus Hamburg, gemessen mit echten Prompt-Tests.",
  alternates: { canonical: "/chatgpt-sichtbarkeit" },
  openGraph: {
    title: "ChatGPT Sichtbarkeit: in ChatGPT empfohlen werden",
    description:
      "Wirst du in ChatGPT genannt, wenn Kunden nach deiner Leistung fragen? Wir machen deine Marke in ChatGPT sichtbar und messen den Erfolg mit Prompt-Tests.",
    url: "/chatgpt-sichtbarkeit",
    locale: "de_DE",
    type: "website",
  },
};

export default function ChatGptSichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

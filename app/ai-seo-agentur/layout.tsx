import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI SEO Agentur Hamburg: in ChatGPT & Co. gefunden werden",
  description:
    "AI SEO Agentur aus Hamburg für echte KI-Sichtbarkeit. Direkt mit dem Gründer, datengetrieben, messbar in ChatGPT, Perplexity, Claude, Gemini und Google AI.",
  alternates: { canonical: "/ai-seo-agentur" },
  openGraph: {
    title: "AI SEO Agentur Hamburg: in ChatGPT & Co. gefunden werden",
    description:
      "AI SEO Agentur aus Hamburg für echte KI-Sichtbarkeit. Direkt mit dem Gründer, datengetrieben und messbar in den großen KI-Systemen.",
    url: "/ai-seo-agentur",
    locale: "de_DE",
    type: "website",
  },
};

export default function AiSeoAgenturLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

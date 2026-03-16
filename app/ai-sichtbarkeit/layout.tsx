import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "KI-Sichtbarkeit Hamburg | Messbare Ergebnisse in ChatGPT & Google AI",
    description: "Wirst du genannt, wenn KI gefragt wird? Ich helfe Hamburger Unternehmen, in ChatGPT, Perplexity und Google AI empfohlen zu werden – mit messbaren Ergebnissen.",
    keywords: "KI-Sichtbarkeit, AI SEO Hamburg, ChatGPT Optimierung, Perplexity, Google AI, GEO, AEO, lokale Unternehmen Hamburg",
    openGraph: {
        title: "KI-Sichtbarkeit Hamburg | Messbare Ergebnisse in ChatGPT & Google AI",
        description: "Wirst du genannt, wenn KI gefragt wird? Ich helfe Hamburger Unternehmen, in ChatGPT, Perplexity und Google AI empfohlen zu werden.",
        url: "https://aiseo.hamburg/ai-sichtbarkeit",
        siteName: "aiseo.hamburg",
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "KI-Sichtbarkeit Hamburg | Messbare Ergebnisse in ChatGPT & Google AI",
        description: "Wirst du genannt, wenn KI gefragt wird? Ich helfe Hamburger Unternehmen, in ChatGPT, Perplexity und Google AI empfohlen zu werden.",
    },
    alternates: {
        canonical: "https://aiseo.hamburg/ai-sichtbarkeit",
        languages: {
            'de': '/ai-sichtbarkeit',
            'x-default': '/ai-sichtbarkeit',
        },
    },
};

export default function AISichtbarkeitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

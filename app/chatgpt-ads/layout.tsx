import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Ads schalten in Deutschland: Setup ab Tag 1",
  description:
    "ChatGPT Ads sind seit dem 24. August 2026 in Deutschland live, der Self-Serve-Zugang seit dem 31. August. Ich fahre eigene Kampagnen und baue dein Konto, Tracking und Anzeigen auf.",
  keywords:
    "ChatGPT Ads, ChatGPT Werbung, ChatGPT Ads Deutschland, ChatGPT Ads schalten, ChatGPT Ads Agentur, OpenAI Ads Manager, ChatGPT Ads Kosten, Sponsored Cards",
  alternates: { canonical: "/chatgpt-ads" },
  openGraph: {
    title: "ChatGPT Ads schalten in Deutschland: Setup ab Tag 1",
    description:
      "Seit dem 31. August 2026 kann jedes Unternehmen Anzeigen in ChatGPT selbst buchen. Ich fahre seit Tag 1 eigene Kampagnen und baue dir dasselbe Setup auf.",
    url: "/chatgpt-ads",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og/chatgpt-ads.jpg",
        width: 1200,
        height: 630,
        alt: "ChatGPT Ads schalten, Setup aus Hamburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Ads schalten in Deutschland: Setup ab Tag 1",
    description:
      "Seit dem 31. August 2026 kann jedes Unternehmen Anzeigen in ChatGPT selbst buchen. Ich fahre seit Tag 1 eigene Kampagnen.",
    images: ["/og/chatgpt-ads.jpg"],
  },
};

export default function ChatGptAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

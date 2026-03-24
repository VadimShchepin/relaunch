import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLMO – LLM Optimierung: So wirst du von KI-Systemen empfohlen | aiseo.hamburg',
  description:
    'LLMO (Large Language Model Optimization) ist die Strategie, damit ChatGPT, Claude, Gemini und Perplexity dein Unternehmen empfehlen. Die 5 Säulen, Tools und Schritt-für-Schritt-Anleitung.',
  keywords: [
    'llmo',
    'llm optimierung',
    'large language model optimization',
    'llm seo',
    'llm sichtbarkeit',
    'llm marketing',
    'llm optimization',
    'ki sichtbarkeit',
    'generative engine optimization',
    'aeo',
    'geo',
    'chatgpt optimierung',
    'perplexity optimierung',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/llmo-llm-optimierung',
    title: 'LLMO – LLM Optimierung: So wirst du von KI-Systemen empfohlen | aiseo.hamburg',
    description:
      'LLMO (Large Language Model Optimization) ist die Strategie, damit ChatGPT, Claude, Gemini und Perplexity dein Unternehmen empfehlen. Die 5 Säulen, Tools und Schritt-für-Schritt-Anleitung.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/llmo-llm-optimierung.jpg', width: 1200, height: 630, alt: 'LLMO – LLM Optimierung Guide 2026' }],
  },
  twitter: {
    card: 'summary',
    title: 'LLMO – LLM Optimierung: So wirst du von KI-Systemen empfohlen | aiseo.hamburg',
    description:
      'LLMO (Large Language Model Optimization) ist die Strategie, damit ChatGPT, Claude, Gemini und Perplexity dein Unternehmen empfehlen. Die 5 Säulen, Tools und Schritt-für-Schritt-Anleitung.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/wissen/llmo-llm-optimierung',
    languages: {
      'de': '/wissen/llmo-llm-optimierung',
      'x-default': '/wissen/llmo-llm-optimierung',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function LLMOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technische KI-Sichtbarkeit | LLM-Optimierung, Schema & Crawler 2026',
  description:
    'Die technischen Grundlagen für KI-Sichtbarkeit: robots.txt, llms.txt, Schema.org, semantisches HTML und Core Web Vitals für LLMs.',
  keywords: [
    'technische voraussetzungen für ki-sichtbarkeit',
    'llm sichtbarkeit',
    'llm ki sichtbarkeit',
    'ai llm sichtbarkeit',
    'ki crawler',
    'llms.txt',
    'schema markup ki',
    'robots.txt ki',
    'ki-sichtbarkeit technik',
    'GPTBot robots.txt',
    'Schema.org LLM',
    'semantisches HTML KI',
    'Core Web Vitals KI',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/technische-ki-sichtbarkeit',
    title: 'Technische KI-Sichtbarkeit | LLM-Optimierung, Schema & Crawler 2026',
    description:
      'Die technischen Grundlagen für KI-Sichtbarkeit: robots.txt, llms.txt, Schema.org, semantisches HTML und Core Web Vitals für LLMs.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
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
    canonical: 'https://aiseo.hamburg/wissen/technische-ki-sichtbarkeit',
    languages: {
      'de': '/wissen/technische-ki-sichtbarkeit',
      'x-default': '/wissen/technische-ki-sichtbarkeit',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function TechnischeKISichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEO – Answer Engine Optimization: Der Guide für 2026 | aiseo.hamburg',
  description:
    'Was ist Answer Engine Optimization (AEO)? Der komplette Guide: Definition, AEO vs SEO, die 5 Säulen, Strategien für ChatGPT, Perplexity & AI Overviews.',
  keywords: [
    'answer engine optimization',
    'aeo',
    'answer engine optimierung',
    'aeo seo',
    'aeo strategie',
    'answer engine marketing',
    'answer engine',
    'AEO Definition',
    'AEO vs SEO',
    'Answer Engine Optimization Guide',
    'AEO Content',
    'AEO Metriken',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/aeo-answer-engine-optimization',
    title: 'AEO – Answer Engine Optimization: Der Guide für 2026 | aiseo.hamburg',
    description:
      'Was ist Answer Engine Optimization (AEO)? Der komplette Guide: Definition, AEO vs SEO, die 5 Säulen, Strategien für ChatGPT, Perplexity & AI Overviews.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/aeo-answer-engine-optimization.jpg', width: 1200, height: 630, alt: 'AEO – Answer Engine Optimization Guide 2026' }],
  },
  twitter: {
    card: 'summary',
    title: 'AEO – Answer Engine Optimization: Der Guide für 2026 | aiseo.hamburg',
    description:
      'Was ist Answer Engine Optimization (AEO)? Der komplette Guide: Definition, AEO vs SEO, die 5 Säulen, Strategien für ChatGPT, Perplexity & AI Overviews.',
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
    canonical: 'https://aiseo.hamburg/wissen/aeo-answer-engine-optimization',
    languages: {
      'de': '/wissen/aeo-answer-engine-optimization',
      'x-default': '/wissen/aeo-answer-engine-optimization',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit messen | Tools, Methoden & KPIs 2026',
  description:
    'Wie misst du deine Sichtbarkeit in ChatGPT, Perplexity und AI Overviews? Die wichtigsten Tools, KPIs und Tracking-Methoden für KI-Sichtbarkeit.',
  keywords: [
    'KI-Sichtbarkeit messen',
    'ki sichtbarkeit tool',
    'chatgpt sichtbarkeitsanalyse',
    'ki sichtbarkeit analyse',
    'ki sichtbarkeit tracking',
    'ai visibility messen',
    'share of voice ki',
    'ki referral traffic',
    'ai seo tracking',
    'ki sichtbarkeit kpi',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-messen',
    title: 'KI-Sichtbarkeit messen | Tools, Methoden & KPIs 2026',
    description:
      'Wie misst du deine Sichtbarkeit in ChatGPT, Perplexity und AI Overviews? Die wichtigsten Tools, KPIs und Tracking-Methoden für KI-Sichtbarkeit.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Sichtbarkeit messen | Tools, Methoden & KPIs 2026',
    description:
      'Wie misst du deine Sichtbarkeit in ChatGPT, Perplexity und AI Overviews? Die wichtigsten Tools, KPIs und Tracking-Methoden für KI-Sichtbarkeit.',
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
    canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-messen',
    languages: {
      'de': '/wissen/ki-sichtbarkeit-messen',
      'x-default': '/wissen/ki-sichtbarkeit-messen',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function KISichtbarkeitMessenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

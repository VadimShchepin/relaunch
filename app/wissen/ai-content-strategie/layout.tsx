import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Strategie: Inhalte die KI-Systeme zitieren wollen | aiseo.hamburg',
  description:
    'Erfahre, wie du Content erstellst, den ChatGPT, Perplexity und Google AI zitieren. Mit Content-Audit-Checkliste, 7 Strategien und Workflow fur KI-optimierte Inhalte.',
  keywords: [
    'ai content strategie',
    'inhalte fur ki',
    'ki content optimierung',
    'content fur chatgpt',
    'ai content marketing',
    'ki optimierte inhalte',
    'content fur ki systeme',
    'ki zitierbarer content',
    'answer first content',
    'content strategie ki sichtbarkeit',
    'geo content',
    'content fur perplexity',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ai-content-strategie',
    title: 'AI Content Strategie: Inhalte die KI-Systeme zitieren wollen | aiseo.hamburg',
    description:
      'Erfahre, wie du Content erstellst, den ChatGPT, Perplexity und Google AI zitieren. Mit Content-Audit-Checkliste, 7 Strategien und Workflow fur KI-optimierte Inhalte.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/ai-content-strategie.jpg', width: 1200, height: 630, alt: 'AI Content Strategie Guide 2026' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI Content Strategie: Inhalte die KI-Systeme zitieren wollen | aiseo.hamburg',
    description:
      'Erfahre, wie du Content erstellst, den ChatGPT, Perplexity und Google AI zitieren. Mit Content-Audit-Checkliste, 7 Strategien und Workflow fur KI-optimierte Inhalte.',
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
    canonical: 'https://aiseo.hamburg/wissen/ai-content-strategie',
    languages: {
      'de': '/wissen/ai-content-strategie',
      'x-default': '/wissen/ai-content-strategie',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AIContentStrategieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

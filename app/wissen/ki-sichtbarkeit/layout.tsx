import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit 2026: der Guide, mit dem dich KI empfiehlt',
  description:
    'Was KI-Sichtbarkeit ist, warum sie über deinen Umsatz entscheidet und wie du sie in 10 Schritten erreichst. Mit Strategie, Tools und Checkliste für ChatGPT, Perplexity und Google AI.',
  keywords: [
    'KI-Sichtbarkeit',
    'ki sichtbarkeit',
    'sichtbarkeit in ki',
    'ki-sichtbarkeit',
    'ki seo',
    'KI Sichtbarkeit Unternehmen',
    'Generative Engine Optimization',
    'GEO',
    'AEO',
    'LLMO',
    'AI SEO',
    'ChatGPT Sichtbarkeit',
    'Perplexity Sichtbarkeit',
    'Google AI Overviews',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit',
    title: 'KI-Sichtbarkeit 2026: der Guide, mit dem dich KI empfiehlt',
    description:
      'Was KI-Sichtbarkeit ist, warum sie über deinen Umsatz entscheidet und wie du sie in 10 Schritten erreichst. Mit Strategie, Tools und Checkliste für ChatGPT, Perplexity und Google AI.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/og/wissen-ki-sichtbarkeit.png', width: 1200, height: 630, alt: 'KI-Sichtbarkeit Guide 2026' }],
  },
  twitter: {
    card: 'summary',
    title: 'KI-Sichtbarkeit 2026: der Guide, mit dem dich KI empfiehlt',
    description:
      'Was KI-Sichtbarkeit ist, warum sie über deinen Umsatz entscheidet und wie du sie in 10 Schritten erreichst. Mit Strategie, Tools und Checkliste für ChatGPT, Perplexity und Google AI.',
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
    canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit',
    languages: {
      'de': '/wissen/ki-sichtbarkeit',
      'x-default': '/wissen/ki-sichtbarkeit',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function KISichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

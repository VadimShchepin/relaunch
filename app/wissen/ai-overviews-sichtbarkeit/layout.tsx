import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sichtbarkeit in Google AI Overviews | Guide 2026',
  description:
    'Wie du in Google AI Overviews als Quelle zitiert wirst: 7 Strategien gegen Zero-Click-Verluste, E-E-A-T-Signale, Schema Markup und Content-Struktur für AI Overview Sichtbarkeit.',
  keywords: [
    'sichtbarkeit ai overviews',
    'sichtbarkeit in den ai overviews',
    'google ai overviews optimierung',
    'ai overviews sichtbar werden',
    'google ki antworten',
    'ai overviews seo',
    'google ai overviews deutschland',
    'zero click suche',
    'ai overviews quellen',
    'google ai überblick optimieren',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ai-overviews-sichtbarkeit',
    title: 'Sichtbarkeit in Google AI Overviews | Guide 2026',
    description:
      'Wie du in Google AI Overviews als Quelle zitiert wirst: 7 Strategien gegen Zero-Click-Verluste, E-E-A-T-Signale, Schema Markup und Content-Struktur für AI Overview Sichtbarkeit.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sichtbarkeit in Google AI Overviews | Guide 2026',
    description:
      'Wie du in Google AI Overviews als Quelle zitiert wirst: 7 Strategien gegen Zero-Click-Verluste, E-E-A-T-Signale, Schema Markup und Content-Struktur für AI Overview Sichtbarkeit.',
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
    canonical: 'https://aiseo.hamburg/wissen/ai-overviews-sichtbarkeit',
    languages: {
      'de': '/wissen/ai-overviews-sichtbarkeit',
      'x-default': '/wissen/ai-overviews-sichtbarkeit',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AIOverviewsSichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

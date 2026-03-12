import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit: Der komplette Guide fur Unternehmen 2026',
  description:
    'Was ist KI-Sichtbarkeit, warum ist sie entscheidend und wie erreichst du sie? Der umfassende Guide mit Strategie, Tools und 10 konkreten Schritten.',
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
    title: 'KI-Sichtbarkeit: Der komplette Guide fur Unternehmen 2026',
    description:
      'Was ist KI-Sichtbarkeit, warum ist sie entscheidend und wie erreichst du sie? Der umfassende Guide mit Strategie, Tools und 10 konkreten Schritten.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary',
    title: 'KI-Sichtbarkeit: Der komplette Guide fur Unternehmen 2026',
    description:
      'Was ist KI-Sichtbarkeit, warum ist sie entscheidend und wie erreichst du sie? Der umfassende Guide mit Strategie, Tools und 10 konkreten Schritten.',
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

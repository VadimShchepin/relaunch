import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Was ist GEO? Generative Engine Optimization endlich verständlich erklärt | aiseo.hamburg',
  description:
    'Was ist GEO (Generative Engine Optimization)? Der komplette Guide: GEO vs SEO vs AEO im Vergleich, warum GEO 2026 unverzichtbar ist und praktische erste Schritte für deine KI-Sichtbarkeit.',
  keywords: [
    'was ist geo',
    'generative engine optimization',
    'geo seo',
    'geo optimierung',
    'generative engine optimization erklärt',
    'geo vs seo',
    'ki suchmaschinenoptimierung',
    'geo marketing',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/was-ist-geo',
    title: 'Was ist GEO? Generative Engine Optimization endlich verständlich erklärt | aiseo.hamburg',
    description:
      'Was ist GEO (Generative Engine Optimization)? Der komplette Guide: GEO vs SEO vs AEO im Vergleich, warum GEO 2026 unverzichtbar ist und praktische erste Schritte.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/was-ist-geo.jpg', width: 1200, height: 630, alt: 'Was ist GEO? Generative Engine Optimization erklärt' }],
  },
  twitter: {
    card: 'summary',
    title: 'Was ist GEO? Generative Engine Optimization endlich verständlich erklärt | aiseo.hamburg',
    description:
      'Was ist GEO (Generative Engine Optimization)? Der komplette Guide: GEO vs SEO vs AEO im Vergleich, warum GEO 2026 unverzichtbar ist.',
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
    canonical: 'https://aiseo.hamburg/wissen/was-ist-geo',
    languages: {
      'de': '/wissen/was-ist-geo',
      'x-default': '/wissen/was-ist-geo',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function WasIstGeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) | aiseo.hamburg',
  description:
    'GEO-Optimierung heißt: als Quelle in KI-Antworten erscheinen statt nur zu ranken. Leistungen, Messgrößen, Preise und wann sich GEO nicht lohnt.',
  keywords: [
    'geo optimierung',
    'generative engine optimization',
    'geo seo',
    'geo agentur',
    'geo marketing',
    'seo für ki',
    'ki seo agentur',
    'geo audit',
    'geo strategie',
    'generative engine optimization agentur',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/geo-optimierung',
    title: 'Generative Engine Optimization (GEO) | aiseo.hamburg',
    description:
      'Als Quelle in KI-Antworten erscheinen statt nur zu ranken. Leistungen, Messgrößen, Preise und die ehrliche Abgrenzung, wann GEO nichts bringt.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative Engine Optimization (GEO) | aiseo.hamburg',
    description:
      'Was GEO umfasst, wie es gemessen wird und woran du eine echte GEO-Agentur erkennst.',
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
    canonical: 'https://aiseo.hamburg/geo-optimierung',
    languages: {
      de: '/geo-optimierung',
      'x-default': '/geo-optimierung',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function GeoOptimierungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

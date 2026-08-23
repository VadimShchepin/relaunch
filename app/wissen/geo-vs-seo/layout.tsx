import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GEO vs SEO vs AEO vs LLMO: der Begriffsvergleich',
  description:
    'GEO, SEO, AEO und LLMO: Ziel, Erfolgsmaß und Zielsystem in einer Tabelle, dazu die deutsche Namensfalle und welche Disziplin du brauchst.',
  keywords: [
    'geo vs seo',
    'aeo vs seo',
    'geo vs aeo',
    'llmo vs seo',
    'generative engine optimization vs seo',
    'unterschied geo seo',
    'was ist geo seo',
    'aeo geo llmo unterschied',
    'ai seo unterschied seo',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/geo-vs-seo',
    title: 'GEO vs SEO vs AEO vs LLMO: der Begriffsvergleich',
    description:
      'Die vier Kürzel in einer Tabelle: Ziel, Messgröße, Zielsystem und Überschneidung. Plus die Entscheidungshilfe, welche Disziplin du wirklich brauchst.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/geo-vs-seo/hero.webp',
        width: 1600,
        height: 1067,
        alt: 'Person zeichnet ein Ablaufdiagramm auf ein Flipchart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO vs SEO vs AEO vs LLMO: der Begriffsvergleich',
    description:
      'Ziel, Messgröße und Zielsystem der vier Disziplinen im direkten Vergleich, mit klarer Entscheidungshilfe.',
    images: ['/images/wissen/geo-vs-seo/hero.webp'],
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
    canonical: 'https://aiseo.hamburg/wissen/geo-vs-seo',
    languages: {
      de: '/wissen/geo-vs-seo',
      'x-default': '/wissen/geo-vs-seo',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function GeoVsSeoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

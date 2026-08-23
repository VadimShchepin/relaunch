import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Citation Rate: Definition, Formel und echte Benchmarks',
  description:
    'Citation Rate: Definition, Formel und die Abgrenzung zu Citation Share und Share of Voice. Mit gemessenen Zahlen aus zwei echten Bing-Exporten.',
  keywords: [
    'citation rate',
    'citation rate berechnen',
    'citation rate benchmark',
    'citation share',
    'ki sichtbarkeit kpi',
    'ai citations messen',
    'zitationsrate ki',
    'bing citation share',
    'llm citation rate',
    'ki sichtbarkeit metriken',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/citation-rate',
    title: 'Citation Rate: Definition, Formel und echte Benchmarks',
    description:
      'Was Citation Rate wirklich misst, wie sie sich von Citation Share und Share of Voice unterscheidet und welche Werte in zwei echten Bing-Exporten gemessen wurden.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/citation-rate/hero.webp',
        width: 1600,
        height: 800,
        alt: 'Laptop mit Analytics-Dashboard auf einem Holztisch im Morgenlicht',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citation Rate: Definition, Formel und echte Benchmarks',
    description:
      'Die wichtigste KPI der KI-Sichtbarkeit, korrekt berechnet. Mit Zahlen aus zwei echten Bing-Webmaster-Tools-Exporten.',
    images: ['/images/wissen/citation-rate/hero.webp'],
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
    canonical: 'https://aiseo.hamburg/wissen/citation-rate',
    languages: {
      de: '/wissen/citation-rate',
      'x-default': '/wissen/citation-rate',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function CitationRateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

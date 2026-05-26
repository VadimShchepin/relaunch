import type { Metadata } from 'next';

const TITLE = 'AI SEO Marktanalyse Deutschland 2026: AEO, GEO, LLMO und 3 Keyword-Honigfallen | aiseo.hamburg';
const DESCRIPTION =
  'Primärrecherche für Unternehmen und Agenturen: 297 deutsche AEO/GEO/LLMO Keywords über DataForSEO. Drei Honigfallen, sechs Begriffe mit +200 bis 1.300% Wachstum, der stille Rückgang von „ChatGPT SEO". Mit Datensatz (CSV).';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'aeo marktanalyse',
    'geo keyword research',
    'aeo deutschland',
    'generative engine optimization deutschland',
    'answer engine optimization marktdaten',
    'ki sichtbarkeit suchvolumen',
    'geo seo deutschland',
    'llmo trends',
    'aeo geo studie',
    'aeo benchmark deutschland',
    'ki seo agentur keywords',
    'chatgpt seo trends',
    'aeo geo datensatz',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/aeo-geo-marktanalyse-deutschland-2026',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/honeytrap/hero_bg.webp',
        width: 1600,
        height: 900,
        alt: 'AEO/GEO Marktanalyse Deutschland Q2 2026, aiseo.hamburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
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
    canonical: 'https://aiseo.hamburg/wissen/aeo-geo-marktanalyse-deutschland-2026',
    languages: {
      de: '/wissen/aeo-geo-marktanalyse-deutschland-2026',
      'x-default': '/wissen/aeo-geo-marktanalyse-deutschland-2026',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AEOGEOMarktanalyseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

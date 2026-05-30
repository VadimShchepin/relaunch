import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SEO Leistungen Hamburg | GEO, AEO & AI SEO',
  description: 'Leistungen von aiseo.hamburg: Generative Engine Optimization (GEO), AEO, AI SEO, Beratung, Website-Erstellung, klassisches SEO, Backlink-Aufbau und Pressemitteilungen. Spezialisiert auf KMUs.',
  keywords: [
    'AI SEO Leistungen Hamburg',
    'GEO Generative Engine Optimization',
    'GEO Optimierung Hamburg',
    'GEO Agentur Hamburg',
    'AEO Answer Engine Optimization',
    'KI-Sichtbarkeit Beratung',
    'Website-Erstellung AI-optimiert',
    'SEO Hamburg',
    'Backlink-Aufbau',
    'Pressemitteilungen Hamburg',
    'AI SEO Agentur Hamburg',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/leistungen',
    title: 'AI SEO Leistungen Hamburg | GEO, AEO & AI SEO',
    description: 'Alle Leistungen: Generative Engine Optimization (GEO), AEO, AI SEO, Beratung, Website-Erstellung, klassisches SEO, Backlink-Aufbau und Pressemitteilungen.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/android-chrome-512x512.png', width: 512, height: 512, alt: 'aiseo.hamburg – Leistungen' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI SEO Leistungen Hamburg | GEO, AEO & AI SEO',
    description: 'Alle Leistungen: Generative Engine Optimization (GEO), AEO, AI SEO, Beratung, Website-Erstellung, klassisches SEO, Backlink-Aufbau und Pressemitteilungen.',
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
    canonical: 'https://aiseo.hamburg/leistungen',
    languages: {
      'de': '/leistungen',
      'x-default': '/leistungen',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

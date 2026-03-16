import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SEO Leistungen Hamburg | Beratung, AEO & Website-Erstellung',
  description: 'Leistungen von aiseo.hamburg: Beratung, AEO, AI SEO, Website-Erstellung, klassisches SEO, Backlink-Aufbau und Pressemitteilungen. Spezialisiert auf KMUs.',
  keywords: [
    'AI SEO Leistungen Hamburg',
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
    title: 'AI SEO Leistungen Hamburg | Beratung, AEO & Website-Erstellung',
    description: 'Alle Leistungen: Beratung, AEO, AI SEO, Website-Erstellung, klassisches SEO, Backlink-Aufbau und Pressemitteilungen.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary',
    title: 'AI SEO Leistungen Hamburg | Beratung, AEO & Website-Erstellung',
    description: 'Alle Leistungen: Beratung, AEO, AI SEO, Website-Erstellung, klassisches SEO, Backlink-Aufbau und Pressemitteilungen.',
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

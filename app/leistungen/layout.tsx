import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SEO Leistungen Hamburg | GEO, AEO & AI SEO',
  description: 'Leistungen von aiseo.hamburg: KI-Sichtbarkeit (GEO, AEO, AI SEO), Backlinks und Presse, KI-gestützte Entwicklung und Automatisierung. Kurzanalyse kostenlos, Sprint ab 1.500 €.',
  keywords: [
    'AI SEO Leistungen Hamburg',
    'GEO Generative Engine Optimization',
    'GEO Optimierung Hamburg',
    'GEO Agentur Hamburg',
    'AEO Answer Engine Optimization',
    'KI-Sichtbarkeit Beratung',
    'Backlink-Aufbau',
    'Pressemitteilungen Hamburg',
    'KI-Entwicklung Automatisierung',
    'AI SEO Agentur Hamburg',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/leistungen',
    title: 'AI SEO Leistungen Hamburg | GEO, AEO & AI SEO',
    description: 'KI-Sichtbarkeit (GEO, AEO, AI SEO), Backlinks und Presse, KI-Entwicklung und Automatisierung.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/og/leistungen.png', width: 1200, height: 630, alt: 'aiseo.hamburg, Leistungen' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI SEO Leistungen Hamburg | GEO, AEO & AI SEO',
    description: 'KI-Sichtbarkeit (GEO, AEO, AI SEO), Backlinks und Presse, KI-Entwicklung und Automatisierung.',
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

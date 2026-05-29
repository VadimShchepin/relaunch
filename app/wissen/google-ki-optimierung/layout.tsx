import type { Metadata } from 'next';

const TITLE = 'Google KI-Optimierung: Was Google offiziell empfiehlt (und welche GEO-Mythen du streichen kannst) | aiseo.hamburg';
const DESCRIPTION =
  'Googles eigene Search-Central-Dokumentation zur Optimierung für AI Overviews und AI Mode. Was offiziell zählt, was Google ausdrücklich für unnötig erklärt (llms.txt, Content-Chunking, Spezial-Schema) und was das für deutsche Unternehmen bedeutet.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'google ki optimierung',
    'google ai overviews optimieren',
    'google ai mode',
    'ai optimization guide google',
    'google geo',
    'generative ki suche google',
    'ki sichtbarkeit google',
    'scaled content abuse',
    'eeat google ki',
    'llms.txt google',
    'google search central ki',
    'ki content richtlinien google',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/google-ki-optimierung',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/was-ist-geo.jpg',
        width: 1600,
        height: 900,
        alt: 'Google KI-Optimierung: offizielle Richtlinien fuer AI Overviews und AI Mode, aiseo.hamburg',
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
    canonical: 'https://aiseo.hamburg/wissen/google-ki-optimierung',
    languages: {
      de: '/wissen/google-ki-optimierung',
      'x-default': '/wissen/google-ki-optimierung',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function GoogleKiOptimierungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

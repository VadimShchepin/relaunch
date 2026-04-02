import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'llms.txt erstellen: So machst du deine Website KI-lesbar | aiseo.hamburg',
  description:
    'llms.txt erstellen: Schritt-für-Schritt-Anleitung mit Vorlage und Beispielen. Was gehört rein, was nicht, und warum robots.txt allein nicht reicht für KI-Sichtbarkeit.',
  keywords: [
    'llms.txt',
    'llms.txt erstellen',
    'llms txt anleitung',
    'ki crawler',
    'website ki lesbar',
    'llms.txt vorlage',
    'llms.txt beispiel',
    'ki sichtbarkeit technik',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/llms-txt-anleitung',
    title: 'llms.txt erstellen: So machst du deine Website KI-lesbar | aiseo.hamburg',
    description:
      'llms.txt erstellen: Schritt-für-Schritt-Anleitung mit Vorlage und Beispielen. Was gehört rein, was nicht, und warum robots.txt allein nicht reicht.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/llms-txt-anleitung.jpg', width: 1200, height: 630, alt: 'llms.txt erstellen: Anleitung für KI-Sichtbarkeit' }],
  },
  twitter: {
    card: 'summary',
    title: 'llms.txt erstellen: So machst du deine Website KI-lesbar | aiseo.hamburg',
    description:
      'llms.txt erstellen: Schritt-für-Schritt-Anleitung mit Vorlage und Beispielen. Was gehört rein, was nicht.',
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
    canonical: 'https://aiseo.hamburg/wissen/llms-txt-anleitung',
    languages: {
      'de': '/wissen/llms-txt-anleitung',
      'x-default': '/wissen/llms-txt-anleitung',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function LlmsTxtAnleitungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

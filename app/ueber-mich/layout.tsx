import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vadim Shchepin - KI-Sichtbarkeit & AI SEO aus Hamburg',
  description:
    'Senior Engineer aus Hamburg. Ich arbeite datengetrieben an deiner KI-Sichtbarkeit, bis die Ergebnisse stimmen. Qualität und Resultate stehen an erster Stelle.',
  keywords: [
    'Vadim Shchepin',
    'AI SEO Hamburg',
    'KI-Sichtbarkeit Berater',
    'AI SEO Experte',
    'aiseo hamburg',
  ],
  openGraph: {
    type: 'profile',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/ueber-mich',
    title: 'Vadim Shchepin - KI-Sichtbarkeit & AI SEO aus Hamburg',
    description:
      'Senior Engineer aus Hamburg. Datengetrieben, ergebnisorientiert, persönlich.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary',
    title: 'Vadim Shchepin - KI-Sichtbarkeit & AI SEO aus Hamburg',
    description:
      'Senior Engineer aus Hamburg. Datengetrieben, ergebnisorientiert, persönlich.',
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
    canonical: 'https://aiseo.hamburg/ueber-mich',
    languages: {
      de: '/ueber-mich',
      'x-default': '/ueber-mich',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function UeberMichLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google | aiseo.hamburg',
  description:
    'E-E-A-T für KI-Systeme funktioniert anders als für Google. Erfahre, warum Konsistenz über Quellen hinweg wichtiger ist als Backlinks — und warum eine Autoren-Bio allein nichts bringt.',
  keywords: [
    'e-e-a-t ki',
    'eeat ki sichtbarkeit',
    'expertise chatgpt',
    'e-e-a-t ai seo',
    'autorität ki systeme',
    'vertrauenswürdigkeit ki',
    'eeat google vs ki',
    'ki expertise signale',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/eeat-ki-sichtbarkeit',
    title: 'E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google | aiseo.hamburg',
    description:
      'E-E-A-T für KI-Systeme funktioniert anders als für Google. Erfahre, warum Konsistenz über Quellen hinweg wichtiger ist als Backlinks — und warum eine Autoren-Bio allein nichts bringt.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/eeat-ki-sichtbarkeit.jpg', width: 1200, height: 630, alt: 'E-E-A-T und KI-Sichtbarkeit Guide 2026' }],
  },
  twitter: {
    card: 'summary',
    title: 'E-E-A-T und KI: Warum Expertise für ChatGPT wichtiger ist als für Google | aiseo.hamburg',
    description:
      'E-E-A-T für KI-Systeme funktioniert anders als für Google. Erfahre, warum Konsistenz über Quellen hinweg wichtiger ist als Backlinks — und warum eine Autoren-Bio allein nichts bringt.',
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
    canonical: 'https://aiseo.hamburg/wissen/eeat-ki-sichtbarkeit',
    languages: {
      'de': '/wissen/eeat-ki-sichtbarkeit',
      'x-default': '/wissen/eeat-ki-sichtbarkeit',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function EEATKISichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warum dein Wettbewerber Kunden bekommt, die du nie siehst | aiseo.hamburg',
  description:
    'Dein Wettbewerber wird von ChatGPT empfohlen. Du nicht. Diese Kunden tauchen nie in deiner Analytik auf. Erfahre, wie unsichtbare Leads funktionieren und was du dagegen tun kannst.',
  keywords: [
    'ki sichtbarkeit wettbewerber',
    'chatgpt empfehlung',
    'unsichtbare leads',
    'ki seo konkurrenz',
    'ai visibility wettbewerb',
    'perplexity empfehlung',
    'zero click leads',
    'ki sichtbarkeit hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/wettbewerber-ki-sichtbarkeit',
    title: 'Warum dein Wettbewerber Kunden bekommt, die du nie siehst | aiseo.hamburg',
    description:
      'Dein Wettbewerber wird von ChatGPT empfohlen. Du nicht. Diese Kunden tauchen nie in deiner Analytik auf — und du wirst es nie erfahren.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/wettbewerber-ki-sichtbarkeit.jpg', width: 1200, height: 630, alt: 'Wettbewerber KI-Sichtbarkeit: Unsichtbare Leads' }],
  },
  twitter: {
    card: 'summary',
    title: 'Warum dein Wettbewerber Kunden bekommt, die du nie siehst | aiseo.hamburg',
    description:
      'Dein Wettbewerber wird von ChatGPT empfohlen. Du nicht. Diese Kunden tauchen nie in deiner Analytik auf — und du wirst es nie erfahren.',
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
    canonical: 'https://aiseo.hamburg/wissen/wettbewerber-ki-sichtbarkeit',
    languages: {
      'de': '/wissen/wettbewerber-ki-sichtbarkeit',
      'x-default': '/wissen/wettbewerber-ki-sichtbarkeit',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
    'geo.position': '53.5511;9.9937',
    'ICBM': '53.5511, 9.9937',
  },
};

export default function WettbewerberKiSichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

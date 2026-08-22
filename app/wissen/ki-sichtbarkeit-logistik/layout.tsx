import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit für Logistik und Speditionen',
  description:
    'Speditionen sind in KI-Antworten fast unsichtbar, obwohl ihre Kunden per Prompt suchen. Welche Fragen zitiert werden und wie du die Lücke besetzt.',
  keywords: [
    'ki sichtbarkeit logistik',
    'ai seo spedition',
    'chatgpt spedition finden',
    'logistik marketing ki',
    'ki sichtbarkeit hamburg logistik',
    'spedition online sichtbarkeit',
    'seefracht anfrage chatgpt',
    'zollabwicklung anbieter ki',
    'geo optimierung logistik',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-logistik',
    title: 'KI-Sichtbarkeit für Logistik und Speditionen',
    description:
      'Die Branche mit dem größten Abstand zwischen Marktbedeutung und KI-Sichtbarkeit. Was zitiert wird und wie Hamburger Betriebe die Lücke besetzen.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Sichtbarkeit für Logistik und Speditionen',
    description:
      'Warum Speditionen in KI-Antworten fehlen und welche Seitentypen tatsächlich zitiert werden.',
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
    canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-logistik',
    languages: {
      de: '/wissen/ki-sichtbarkeit-logistik',
      'x-default': '/wissen/ki-sichtbarkeit-logistik',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function KiSichtbarkeitLogistikLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

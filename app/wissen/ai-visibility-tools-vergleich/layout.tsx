import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Visibility-Tools im Vergleich 2026: Preise & Lücken',
  description:
    'Ahrefs Brand Radar, Semrush, Peec AI, Profound, Otterly.ai und Scrunch AI: Preise und Plattformabdeckung, Stand August 2026, plus die blinden Flecken.',
  keywords: [
    'ai visibility tools vergleich',
    'ki sichtbarkeit tools',
    'ahrefs brand radar preis',
    'semrush ai visibility toolkit',
    'peec ai preis',
    'profound ai visibility',
    'otterly ai',
    'scrunch ai',
    'geo monitoring tools',
    'llm monitoring tool',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ai-visibility-tools-vergleich',
    title: 'AI-Visibility-Tools im Vergleich 2026: Preise & Lücken',
    description:
      'Sechs Monitoring-Tools für KI-Sichtbarkeit, verglichen nach Preis, Plattformabdeckung und Abrechnungsmodell. Mit dem Hinweis, den fast jeder Vergleich im Netz verschweigt.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/ai-visibility-tools-vergleich/hero.webp',
        width: 1600,
        height: 1067,
        alt: 'Schreibtisch mit Euro-Scheinen, Taschenrechner, Kaffee und Notebook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Visibility-Tools im Vergleich 2026: Preise & Lücken',
    description:
      'Ahrefs Brand Radar, Semrush, Peec AI, Profound, Otterly.ai und Scrunch AI: Preise, Abdeckung und blinde Flecken.',
    images: ['/images/wissen/ai-visibility-tools-vergleich/hero.webp'],
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
    canonical: 'https://aiseo.hamburg/wissen/ai-visibility-tools-vergleich',
    languages: {
      de: '/wissen/ai-visibility-tools-vergleich',
      'x-default': '/wissen/ai-visibility-tools-vergleich',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AiVisibilityToolsVergleichLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

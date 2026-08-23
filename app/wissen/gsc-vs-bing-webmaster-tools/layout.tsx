import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Console vs Bing Webmaster Tools für KI-Daten',
  description:
    'Google zeigt seit Juni 2026 KI-Impressionen, Bing seit Februar 2026 echte Citations. Was jede Konsole liefert und was beide verschweigen.',
  keywords: [
    'search console generative ai bericht',
    'google search console ki daten',
    'bing webmaster tools ai performance',
    'grounding queries',
    'ai overviews impressionen messen',
    'ki sichtbarkeit search console',
    'citation share bing',
    'ai mode search console',
    'indexnow',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/gsc-vs-bing-webmaster-tools',
    title: 'Search Console vs Bing Webmaster Tools für KI-Daten',
    description:
      'Der direkte Vergleich der zwei kostenlosen KI-Berichte: Impressionen bei Google, Citations und Grounding Queries bei Bing. Mit den Grenzen beider Systeme.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/gsc-vs-bing-webmaster-tools/hero.webp',
        width: 1600,
        height: 900,
        alt: 'Zwei Monitore mit Analyse-Dashboards auf einem Schreibtisch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Console vs Bing Webmaster Tools für KI-Daten',
    description:
      'Warum die kleinere Suchmaschine die besseren Daten über deine KI-Sichtbarkeit liefert.',
    images: ['/images/wissen/gsc-vs-bing-webmaster-tools/hero.webp'],
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
    canonical: 'https://aiseo.hamburg/wissen/gsc-vs-bing-webmaster-tools',
    languages: {
      de: '/wissen/gsc-vs-bing-webmaster-tools',
      'x-default': '/wissen/gsc-vs-bing-webmaster-tools',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function GscVsBingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

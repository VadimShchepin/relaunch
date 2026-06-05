import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bing & Copilot KI-Sichtbarkeit | Was 600 Citations verraten',
  description:
    'Echte Citation-Daten aus den Bing Webmaster Tools: Wie Microsoft Copilot Quellen auswählt, warum eine Seite 58% aller Zitate gewann und das Rezept, mit dem du Grounding Queries für dich entscheidest.',
  keywords: [
    'bing copilot sichtbarkeit',
    'microsoft copilot seo',
    'bing geo',
    'copilot citations',
    'grounding queries',
    'bing webmaster tools ki',
    'indexnow',
    'bing ai sichtbarkeit',
    'copilot optimierung',
    'citation rate bing',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/bing-copilot-ki-sichtbarkeit',
    title: 'Bing & Copilot KI-Sichtbarkeit | Was 600 Citations verraten',
    description:
      'Echte Citation-Daten aus den Bing Webmaster Tools: Wie Microsoft Copilot Quellen auswählt und das Rezept, mit dem eine Seite 58% aller Zitate gewann.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/bing-copilot-ki-sichtbarkeit/hero-copilot-visibility.png',
        width: 1024,
        height: 1024,
        alt: 'Bing & Copilot KI-Sichtbarkeit: AI Search Performance und Zitate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bing & Copilot KI-Sichtbarkeit | Was 600 Citations verraten',
    description:
      'Echte Citation-Daten aus den Bing Webmaster Tools: Wie Microsoft Copilot Quellen auswählt und das Rezept dahinter.',
    images: ['/images/wissen/bing-copilot-ki-sichtbarkeit/hero-copilot-visibility.png'],
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
    canonical: 'https://aiseo.hamburg/wissen/bing-copilot-ki-sichtbarkeit',
    languages: {
      'de': '/wissen/bing-copilot-ki-sichtbarkeit',
      'x-default': '/wissen/bing-copilot-ki-sichtbarkeit',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function BingCopilotKiSichtbarkeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

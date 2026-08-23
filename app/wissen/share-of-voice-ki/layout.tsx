import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Share of Voice in KI-Antworten berechnen',
  description:
    'Share of Voice in ChatGPT, Perplexity und Copilot: die Formel, ein Rechenbeispiel und der Unterschied zu Microsofts Citation Share.',
  keywords: [
    'share of voice ki',
    'share of voice chatgpt',
    'ai share of voice berechnen',
    'share of model',
    'citation share',
    'wettbewerbsanalyse ki antworten',
    'ki sichtbarkeit wettbewerber',
    'share of voice formel',
    'ai visibility share of voice',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/share-of-voice-ki',
    title: 'Share of Voice in KI-Antworten berechnen',
    description:
      'Formel, Rechenbeispiel und Abgrenzung zu Microsofts Citation Share. Plus die drei Fehler, die den Wettbewerbsvergleich in KI-Antworten unbrauchbar machen.',
    siteName: 'aiseo.hamburg',
    images: [
      {
        url: '/images/wissen/share-of-voice-ki/hero.webp',
        width: 1600,
        height: 800,
        alt: 'Notebook mit Diagrammen und Kaffeetasse im Morgenlicht am Fenster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Share of Voice in KI-Antworten berechnen',
    description:
      'Die Formel, ein Rechenbeispiel mit echten Zahlen und die Abgrenzung zu Citation Share aus den Bing Webmaster Tools.',
    images: ['/images/wissen/share-of-voice-ki/hero.webp'],
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
    canonical: 'https://aiseo.hamburg/wissen/share-of-voice-ki',
    languages: {
      de: '/wissen/share-of-voice-ki',
      'x-default': '/wissen/share-of-voice-ki',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function ShareOfVoiceKiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

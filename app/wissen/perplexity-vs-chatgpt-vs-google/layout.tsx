import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perplexity vs ChatGPT vs Google AI: Wo lohnt sich Optimierung am meisten? | aiseo.hamburg',
  description:
    'Perplexity, ChatGPT oder Google AI Overviews — welche KI-Suchmaschine bringt am meisten? Detaillierter Vergleich: Indexierung, Zitierverhalten, Optimierungspotenzial. Mit Vergleichstabelle.',
  keywords: [
    'perplexity vs chatgpt',
    'google ai vs chatgpt',
    'ki suchmaschinen vergleich',
    'chatgpt vs perplexity vs google',
    'ai plattformen vergleich',
    'wo optimieren ki',
    'beste ki suchmaschine',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/perplexity-vs-chatgpt-vs-google',
    title: 'Perplexity vs ChatGPT vs Google AI: Wo lohnt sich Optimierung am meisten? | aiseo.hamburg',
    description:
      'Perplexity, ChatGPT oder Google AI Overviews — welche KI-Suchmaschine bringt am meisten? Detaillierter Vergleich mit Vergleichstabelle.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/perplexity-vs-chatgpt-vs-google.jpg', width: 1200, height: 630, alt: 'Perplexity vs ChatGPT vs Google AI: Plattform-Vergleich' }],
  },
  twitter: {
    card: 'summary',
    title: 'Perplexity vs ChatGPT vs Google AI: Wo lohnt sich Optimierung am meisten? | aiseo.hamburg',
    description:
      'Perplexity, ChatGPT oder Google AI Overviews — welche KI-Suchmaschine bringt am meisten? Detaillierter Vergleich mit Vergleichstabelle.',
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
    canonical: 'https://aiseo.hamburg/wissen/perplexity-vs-chatgpt-vs-google',
    languages: {
      'de': '/wissen/perplexity-vs-chatgpt-vs-google',
      'x-default': '/wissen/perplexity-vs-chatgpt-vs-google',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function PerplexityVsChatgptVsGoogleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

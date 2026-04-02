import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warum bannt ChatGPT deine Website? Die größten AIO-Fails 2026 | aiseo.hamburg',
  description:
    'Keyword-Stuffing, Cloaking, Spam-Content: Warum billige Tricks bei ChatGPT, Perplexity und Google AI zum permanenten Bann führen. Die größten AIO-Fails und was stattdessen funktioniert.',
  keywords: [
    'chatgpt bann',
    'aio fails',
    'ai seo fehler',
    'chatgpt website gesperrt',
    'ki sichtbarkeit spam',
    'aio best practices',
    'ai search optimization fehler',
    'perplexity bann',
    'ki optimierung fehler',
    'ai overviews spam',
    'llm manipulation',
    'ai seo strategie',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/aio-fails-chatgpt-bann',
    title: 'Warum bannt ChatGPT deine Website? Die größten AIO-Fails 2026 | aiseo.hamburg',
    description:
      'Keyword-Stuffing, Cloaking, Spam-Content: Warum billige Tricks bei ChatGPT, Perplexity und Google AI zum permanenten Bann führen.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/aio-fails-chatgpt-bann.jpg', width: 1200, height: 630, alt: 'AIO Fails: Warum ChatGPT deine Website bannt' }],
  },
  twitter: {
    card: 'summary',
    title: 'Warum bannt ChatGPT deine Website? Die größten AIO-Fails 2026 | aiseo.hamburg',
    description:
      'Keyword-Stuffing, Cloaking, Spam-Content: Warum billige Tricks bei ChatGPT, Perplexity und Google AI zum permanenten Bann führen.',
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
    canonical: 'https://aiseo.hamburg/wissen/aio-fails-chatgpt-bann',
    languages: {
      'de': '/wissen/aio-fails-chatgpt-bann',
      'x-default': '/wissen/aio-fails-chatgpt-bann',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AIOFailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

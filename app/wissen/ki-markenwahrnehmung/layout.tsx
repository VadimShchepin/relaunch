import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wie KI-Systeme über deine Marke entscheiden — und was du dagegen tun kannst | aiseo.hamburg',
  description:
    'ChatGPT, Perplexity und Google AI bilden sich eine Meinung über deine Marke — ob du willst oder nicht. Trainingsdaten, Reviews, Presse: Wie KI-Markenwahrnehmung entsteht und wie du sie beeinflusst.',
  keywords: [
    'ki markenwahrnehmung',
    'marke chatgpt',
    'brand mentions ki',
    'marke ki systeme',
    'chatgpt markenempfehlung',
    'ki markenbild',
    'brand awareness ai',
    'markenreputation ki',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ki-markenwahrnehmung',
    title: 'Wie KI-Systeme über deine Marke entscheiden — und was du dagegen tun kannst | aiseo.hamburg',
    description:
      'ChatGPT, Perplexity und Google AI bilden sich eine Meinung über deine Marke — ob du willst oder nicht. Wie KI-Markenwahrnehmung entsteht und wie du sie beeinflusst.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/ki-markenwahrnehmung.jpg', width: 1200, height: 630, alt: 'KI-Markenwahrnehmung: Was ChatGPT über deine Marke denkt' }],
  },
  twitter: {
    card: 'summary',
    title: 'Wie KI-Systeme über deine Marke entscheiden — und was du dagegen tun kannst | aiseo.hamburg',
    description:
      'ChatGPT, Perplexity und Google AI bilden sich eine Meinung über deine Marke — ob du willst oder nicht. Wie KI-Markenwahrnehmung entsteht und wie du sie beeinflusst.',
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
    canonical: 'https://aiseo.hamburg/wissen/ki-markenwahrnehmung',
    languages: {
      'de': '/wissen/ki-markenwahrnehmung',
      'x-default': '/wissen/ki-markenwahrnehmung',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function KIMarkenwahrnehmungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zero-Click-Zukunft: Warum deine Website bald keinen Traffic mehr braucht | aiseo.hamburg',
  description:
    'Gartner prognostiziert 50 % Traffic-Verlust bis 2028. Warum das kein Weltuntergang ist, sondern eine Chance — und welche neuen KPIs jetzt zählen: Brand Mentions, Citation Rate, AI Referral Quality.',
  keywords: [
    'zero click',
    'zero click seo',
    'zero click zukunft',
    'zukunft seo 2027',
    'ki traffic verlust',
    'seo zukunft ki',
    'gartner traffic prognose',
    'citation based marketing',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/zero-click-zukunft',
    title: 'Zero-Click-Zukunft: Warum deine Website bald keinen Traffic mehr braucht | aiseo.hamburg',
    description:
      'Gartner prognostiziert 50 % Traffic-Verlust bis 2028. Warum das kein Weltuntergang ist — und welche neuen KPIs jetzt zählen.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/zero-click-zukunft.jpg', width: 1200, height: 630, alt: 'Zero-Click-Zukunft: SEO nach dem Traffic' }],
  },
  twitter: {
    card: 'summary',
    title: 'Zero-Click-Zukunft: Warum deine Website bald keinen Traffic mehr braucht | aiseo.hamburg',
    description:
      'Gartner prognostiziert 50 % Traffic-Verlust bis 2028. Warum das kein Weltuntergang ist — und welche neuen KPIs jetzt zählen.',
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
    canonical: 'https://aiseo.hamburg/wissen/zero-click-zukunft',
    languages: {
      'de': '/wissen/zero-click-zukunft',
      'x-default': '/wissen/zero-click-zukunft',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function ZeroClickZukunftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

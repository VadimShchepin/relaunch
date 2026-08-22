import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warum erscheint meine Firma nicht in ChatGPT?',
  description:
    'Zehn Ursachen, warum ChatGPT dein Unternehmen nicht nennt, nach Häufigkeit sortiert. Plus die Diagnose in vier Schritten, die zeigt, wo es klemmt.',
  keywords: [
    'warum erscheint meine firma nicht in chatgpt',
    'chatgpt kennt meine firma nicht',
    'nicht in chatgpt sichtbar',
    'chatgpt nennt mich nicht',
    'chatgpt empfiehlt konkurrenten',
    'gptbot blockiert',
    'oai searchbot',
    'ki sichtbarkeit fehler',
    'unternehmen unsichtbar ki',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/warum-nicht-in-chatgpt',
    title: 'Warum erscheint meine Firma nicht in ChatGPT?',
    description:
      'Zehn Ursachen, nach Häufigkeit sortiert, und die Diagnose-Reihenfolge, mit der du in einer Stunde weißt, wo es klemmt.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warum erscheint meine Firma nicht in ChatGPT?',
    description: 'Die zehn häufigsten Ursachen und die Diagnose in vier Schritten.',
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
    canonical: 'https://aiseo.hamburg/wissen/warum-nicht-in-chatgpt',
    languages: {
      de: '/wissen/warum-nicht-in-chatgpt',
      'x-default': '/wissen/warum-nicht-in-chatgpt',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function WarumNichtInChatgptLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

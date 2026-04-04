import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO-Agentur liefert Rankings, aber keine Kunden — Warum AI SEO der nächste Schritt ist | aiseo.hamburg',
  description:
    'Du zahlst 2.000–10.000 Euro im Monat für SEO, aber KI-Systeme ignorieren dich komplett. Warum klassisches SEO allein nicht mehr reicht — und was AI SEO stattdessen liefert.',
  keywords: [
    'seo agentur wechseln',
    'seo vs ai seo',
    'seo agentur keine ergebnisse',
    'ki seo agentur',
    'ai seo hamburg',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/seo-agentur-vs-ai-seo',
    title: 'SEO-Agentur liefert Rankings, aber keine Kunden — Warum AI SEO der nächste Schritt ist | aiseo.hamburg',
    description:
      'Du zahlst 2.000–10.000 Euro im Monat für SEO, aber KI-Systeme ignorieren dich komplett. Warum klassisches SEO allein nicht mehr reicht.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/seo-agentur-vs-ai-seo.jpg', width: 1200, height: 630, alt: 'SEO-Agentur vs. AI SEO: Warum Rankings allein keine Kunden bringen' }],
  },
  twitter: {
    card: 'summary',
    title: 'SEO-Agentur liefert Rankings, aber keine Kunden — Warum AI SEO der nächste Schritt ist | aiseo.hamburg',
    description:
      'Du zahlst 2.000–10.000 Euro im Monat für SEO, aber KI-Systeme ignorieren dich komplett. Warum klassisches SEO allein nicht mehr reicht.',
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
    canonical: 'https://aiseo.hamburg/wissen/seo-agentur-vs-ai-seo',
    languages: {
      'de': '/wissen/seo-agentur-vs-ai-seo',
      'x-default': '/wissen/seo-agentur-vs-ai-seo',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function SeoAgenturVsAiSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

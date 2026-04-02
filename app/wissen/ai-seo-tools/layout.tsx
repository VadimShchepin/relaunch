import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SEO Tools 2026: Welche sich lohnen und welche Geldverbrennung sind | aiseo.hamburg',
  description:
    'Ehrlicher Überblick über AI SEO Tools 2026: Ahrefs Brand Radar, Semrush AI Visibility, Gemini CLI und mehr. Welche Tools funktionieren, welche Geld verbrennen — und welche du kostenlos ersetzen kannst.',
  keywords: [
    'ai seo tools',
    'ki seo tools',
    'ai seo tools 2026',
    'ki sichtbarkeit tools',
    'ai visibility tools',
    'chatgpt monitoring tools',
    'perplexity tracking',
    'ahrefs brand radar',
    'semrush ai visibility',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ai-seo-tools',
    title: 'AI SEO Tools 2026: Welche sich lohnen und welche Geldverbrennung sind | aiseo.hamburg',
    description:
      'Ehrlicher Überblick über AI SEO Tools 2026: Ahrefs Brand Radar, Semrush AI Visibility, Gemini CLI und mehr. Welche Tools funktionieren, welche Geld verbrennen — und welche du kostenlos ersetzen kannst.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/ai-seo-tools.jpg', width: 1200, height: 630, alt: 'AI SEO Tools Guide 2026' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI SEO Tools 2026: Welche sich lohnen und welche Geldverbrennung sind | aiseo.hamburg',
    description:
      'Ehrlicher Überblick über AI SEO Tools 2026: Ahrefs Brand Radar, Semrush AI Visibility, Gemini CLI und mehr. Welche Tools funktionieren, welche Geld verbrennen — und welche du kostenlos ersetzen kannst.',
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
    canonical: 'https://aiseo.hamburg/wissen/ai-seo-tools',
    languages: {
      'de': '/wissen/ai-seo-tools',
      'x-default': '/wissen/ai-seo-tools',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function AISEOToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

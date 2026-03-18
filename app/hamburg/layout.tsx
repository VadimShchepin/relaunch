import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SEO Hamburg: Lokale Service-Seiten fuer ChatGPT, Perplexity und KI-Sichtbarkeit',
  description:
    'Kommerzielle Hamburg-Seiten zu AI SEO, AEO, ChatGPT-Optimierung, Perplexity-Optimierung und KI-Sichtbarkeit fuer lokale Unternehmen.',
  keywords: [
    'AI SEO Hamburg',
    'KI Sichtbarkeit Hamburg',
    'ChatGPT Optimierung Hamburg',
    'Perplexity Optimierung Hamburg',
    'AEO Hamburg',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/hamburg',
    title: 'AI SEO Hamburg: Lokale Service-Seiten fuer ChatGPT, Perplexity und KI-Sichtbarkeit',
    description:
      'Kommerzielle Hamburg-Seiten zu AI SEO, AEO, ChatGPT-Optimierung, Perplexity-Optimierung und KI-Sichtbarkeit.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/reality/hamburg.webp', width: 1200, height: 630, alt: 'AI SEO Hamburg' }],
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/hamburg',
    languages: {
      de: '/hamburg',
      'x-default': '/hamburg',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HamburgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

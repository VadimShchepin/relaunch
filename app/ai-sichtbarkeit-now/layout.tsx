import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit Hamburg | Ergebnisse in 2-3 Wochen',
  description: 'Erste Ergebnisse in 2-3 Wochen. Traffic-Garantie. Werden Sie zur #1-Empfehlung in ChatGPT, Perplexity & Co. Jetzt kostenlose Beratung.',
  keywords: [
    'KI-Sichtbarkeit Hamburg',
    'ChatGPT Optimierung',
    'Perplexity SEO',
    'AI Visibility',
    'KI-Empfehlung werden',
    'ChatGPT Marketing Hamburg',
    'AI SEO Hamburg',
    'Generative Engine Optimization',
    'GEO Hamburg',
    'KI-Traffic',
    'AI First Marketing',
    'ChatGPT Ranking',
    'Perplexity Ranking'
  ],
  authors: [{ name: 'Vadim Shchepin', url: 'https://www.linkedin.com/in/vadim-shchepin/' }],
  creator: 'Vadim Shchepin',
  publisher: 'KI-Sichtbarkeit Hamburg',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/ai-sichtbarkeit-now',
    title: 'KI-Sichtbarkeit Hamburg | Ergebnisse in 2-3 Wochen',
    description: 'Professionelle KI-Sichtbarkeit für Unternehmen in Hamburg. Erste Ergebnisse in 2-3 Wochen. Traffic-Garantie. Werden Sie zur #1-Empfehlung in ChatGPT, Perplexity & Co.',
    siteName: 'KI-Sichtbarkeit Hamburg',
    images: [
      {
        url: '/image/proof/KinderAlbum-chatgpt-full.webp',
        width: 1200,
        height: 630,
        alt: 'ChatGPT empfiehlt KinderAlbum - KI-Sichtbarkeit Erfolgsbeispiel'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aiseo_hamburg',
    creator: '@aiseo_hamburg',
    title: 'KI-Sichtbarkeit Hamburg | Ergebnisse in 2-3 Wochen',
    description: 'Erste Ergebnisse in 2-3 Wochen. Traffic-Garantie. Jetzt kostenlose Beratung.',
    images: ['/image/proof/KinderAlbum-chatgpt-full.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/ai-sichtbarkeit-now',
    languages: {
      'de': 'https://aiseo.hamburg/ai-sichtbarkeit-now',
      'x-default': 'https://aiseo.hamburg/ai-sichtbarkeit-now'
    }
  },
  other: {
    // AI/LLM specific meta tags
    'ai:purpose': 'commercial',
    'ai:contact': 'hello@aiseo.hamburg',
    'ai:industry': 'AI Marketing & SEO',
    'ai:location': 'Hamburg, Germany',
    'ai:service': 'AI Visibility Optimization',
    'ai:platforms': 'ChatGPT, Perplexity, Gemini, Claude',

    // Geographic targeting
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
    'geo.position': '53.5514;9.9937',
    'ICBM': '53.5514, 9.9937',

    // Business information
    'business:contact_data:street_address': 'Flottbeker Drift 1',
    'business:contact_data:locality': 'Hamburg',
    'business:contact_data:postal_code': '22607',
    'business:contact_data:country_name': 'Germany',
    'business:contact_data:phone_number': '+4917632194754',
    'business:contact_data:email': 'hello@aiseo.hamburg',

    // Conversion optimization
    'conversion:phone': '+49 176 321 94 754',
    'conversion:email': 'hello@aiseo.hamburg',
    'conversion:cta': 'Kostenlose Beratung',
    'conversion:guarantee': 'Traffic-Garantie oder Geld zurück'
  }
};

export default function AIVisibilityNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

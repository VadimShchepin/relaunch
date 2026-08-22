import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Sichtbarkeit für SaaS: in Tool-Empfehlungen landen',
  description:
    'B2B-Software wird per Prompt verglichen, nicht per Ergebnisliste. Warum Alternativen- und Vergleichsseiten die stärksten Citation-Magneten für SaaS sind.',
  keywords: [
    'ki sichtbarkeit saas',
    'ai seo für saas',
    'saas geo optimierung',
    'chatgpt empfiehlt software',
    'alternativen seite seo',
    'vergleichsseite saas',
    'b2b software ki sichtbarkeit',
    'llm sichtbarkeit software',
    'saas ai visibility',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-saas',
    title: 'KI-Sichtbarkeit für SaaS: in Tool-Empfehlungen landen',
    description:
      'Wie B2B-Software in KI-Empfehlungen kommt: Alternativen- und Vergleichsseiten, Doku als Citation-Quelle und die Zahlen aus einem echten Export.',
    siteName: 'aiseo.hamburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Sichtbarkeit für SaaS: in Tool-Empfehlungen landen',
    description:
      'Alternativen- und Vergleichsseiten sind für SaaS die stärksten Citation-Magneten. Hier stehen die Zahlen und der Aufbau.',
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
    canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-saas',
    languages: {
      de: '/wissen/ki-sichtbarkeit-saas',
      'x-default': '/wissen/ki-sichtbarkeit-saas',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function KiSichtbarkeitSaasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

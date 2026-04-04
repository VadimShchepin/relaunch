import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fallstudie: In 90 Tagen KI-sichtbar — Echte Zahlen eines Hamburger Unternehmens | aiseo.hamburg',
  description: 'Composite Case Study: Wie ein Hamburger Dienstleistungsunternehmen in 90 Tagen von unsichtbar zu #1 in ChatGPT wurde. Performance von 35 auf 99, 474 Clicks/Monat, 2x organischer Traffic.',
  keywords: [
    'ki sichtbarkeit fallstudie',
    'ai seo case study',
    'ki sichtbarkeit ergebnisse',
    'chatgpt sichtbarkeit case study',
    'ki seo hamburg erfahrung',
    '90 tage ki sichtbarkeit',
    'ai seo roi',
    'ki sichtbarkeit vorher nachher',
  ],
  openGraph: {
    title: 'Fallstudie: In 90 Tagen KI-sichtbar — Echte Zahlen eines Hamburger Unternehmens',
    description: 'Von Performance 35/100 auf 99/100. Von null KI-Sichtbarkeit zu #1 in ChatGPT. Echte Zahlen, echte Ergebnisse, kein Marketing-Blabla.',
    url: 'https://aiseo.hamburg/wissen/fallstudie-ki-sichtbarkeit-90-tage',
    siteName: 'aiseo.hamburg',
    locale: 'de_DE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallstudie: In 90 Tagen KI-sichtbar — Echte Zahlen',
    description: 'Von Performance 35/100 auf 99/100. Von null KI-Sichtbarkeit zu #1 in ChatGPT. Echte Zahlen, echte Ergebnisse.',
  },
  alternates: {
    canonical: 'https://aiseo.hamburg/wissen/fallstudie-ki-sichtbarkeit-90-tage',
    languages: {
      'de': '/wissen/fallstudie-ki-sichtbarkeit-90-tage',
      'x-default': '/wissen/fallstudie-ki-sichtbarkeit-90-tage',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
    'geo.position': '53.5511;9.9937',
    'ICBM': '53.5511, 9.9937',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

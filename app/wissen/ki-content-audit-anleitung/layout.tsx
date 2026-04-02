import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt | aiseo.hamburg',
  description:
    'Schritt-für-Schritt-Anleitung zum KI-Content-Audit: Scoring-System, Checkliste und Priorisierung. Welchen Content updaten, löschen oder zusammenführen — damit KI-Systeme dich zitieren.',
  keywords: [
    'ki content audit',
    'content audit ki sichtbarkeit',
    'content audit ai seo',
    'ki content bewertung',
    'content für ki prüfen',
    'ki content checkliste',
    'content optimierung ki',
    'content audit 2027',
  ],
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://aiseo.hamburg/wissen/ki-content-audit-anleitung',
    title: 'Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt | aiseo.hamburg',
    description:
      'Schritt-für-Schritt-Anleitung zum KI-Content-Audit: Scoring-System, Checkliste und Priorisierung. Welchen Content updaten, löschen oder zusammenführen.',
    siteName: 'aiseo.hamburg',
    images: [{ url: '/images/wissen/ki-content-audit-anleitung.jpg', width: 1200, height: 630, alt: 'KI-Content-Audit Anleitung 2027' }],
  },
  twitter: {
    card: 'summary',
    title: 'Der große KI-Content-Audit: So prüfst du, ob dein Content 2027 überlebt | aiseo.hamburg',
    description:
      'Schritt-für-Schritt-Anleitung zum KI-Content-Audit: Scoring-System, Checkliste und Priorisierung. Welchen Content updaten, löschen oder zusammenführen.',
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
    canonical: 'https://aiseo.hamburg/wissen/ki-content-audit-anleitung',
    languages: {
      'de': '/wissen/ki-content-audit-anleitung',
      'x-default': '/wissen/ki-content-audit-anleitung',
    },
  },
  other: {
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
  },
};

export default function KIContentAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

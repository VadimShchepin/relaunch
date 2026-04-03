import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sichtbarkeit in Google Gemini: So erscheinst du in Googles KI | aiseo.hamburg',
    description: 'Wie wirst du in Google Gemini und AI Overviews sichtbar? 7 Strategien fur Gemini-Optimierung, E-E-A-T, Knowledge Graph und lokale KI-Sichtbarkeit in Hamburg.',
    keywords: [
        'sichtbarkeit in gemini',
        'google gemini optimierung',
        'gemini ai sichtbarkeit',
        'bei gemini gefunden werden',
        'google ki sichtbarkeit',
        'ai overviews optimierung',
        'gemini seo',
        'google gemini unternehmen',
    ],
    openGraph: {
        title: 'Sichtbarkeit in Google Gemini | So erscheinst du in Googles KI',
        description: 'Wie wirst du in Google Gemini und AI Overviews sichtbar? 7 Strategien fur Gemini-Optimierung und lokale KI-Sichtbarkeit.',
        url: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-gemini',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sichtbarkeit in Google Gemini | So erscheinst du in Googles KI',
        description: 'Wie wirst du in Google Gemini und AI Overviews sichtbar? 7 Strategien fur Gemini-Optimierung und lokale KI-Sichtbarkeit.',
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/sichtbarkeit-in-gemini',
        languages: {
            'de': '/wissen/sichtbarkeit-in-gemini',
            'x-default': '/wissen/sichtbarkeit-in-gemini',
        },
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
    title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
    description: "Professionelle KI-Optimierung (AI SEO/GEO/AEO) für bessere Sichtbarkeit in ChatGPT, Perplexity & Co. Spezialist für Hamburg.",
    keywords: "AI SEO, KI Sichtbarkeit, GEO, AEO, Hamburg, ChatGPT Optimierung, Perplexity, Google AI",
    metadataBase: new URL('https://aiseo.hamburg'),
    alternates: {
        canonical: '/',
        languages: {
            'de': '/',
            'x-default': '/',
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
    },
    openGraph: {
        title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
        description: "Professionelle KI-Optimierung für bessere Sichtbarkeit in ChatGPT, Perplexity & Co.",
        url: "https://aiseo.hamburg/",
        siteName: "aiseo.hamburg",
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
        description: "Professionelle KI-Optimierung für bessere Sichtbarkeit in ChatGPT, Perplexity & Co.",
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
    verification: {
        // Add when you have these: google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <head>
                <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
                <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#4FAF8C" />
                <meta name="geo.region" content="DE-HH" />
                <meta name="geo.placename" content="Hamburg" />
                <script defer src="https://umami.dsgvoschulfotos.de/script.js" data-website-id="994bf95f-79f8-4fcd-b77f-48abe6baee1d"></script>
                {/* LocalBusiness Schema for AI SEO Hamburg */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "@id": "https://aiseo.hamburg/#organization",
                            "name": "aiseo.hamburg",
                            "alternateName": "AI SEO Hamburg",
                            "description": "KI-Sichtbarkeit und AI SEO Optimierung für Hamburger Unternehmen. Spezialisiert auf ChatGPT, Perplexity und Google AI Optimierung.",
                            "url": "https://aiseo.hamburg",
                            "telephone": "+49 176 321 94 754",
                            "email": "hello@aiseo.hamburg",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Flottbeker Drift 1",
                                "addressLocality": "Hamburg",
                                "postalCode": "22607",
                                "addressCountry": "DE",
                                "addressRegion": "Hamburg"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "53.5511",
                                "longitude": "9.9937"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": "Hamburg",
                                "sameAs": "https://de.wikipedia.org/wiki/Hamburg"
                            },
                            "serviceType": ["AI SEO", "KI-Sichtbarkeit", "GEO", "AEO", "ChatGPT Optimierung", "website development"],
                            "priceRange": "€€",
                            "sameAs": [
                                "https://www.linkedin.com/in/vadim-shchepin/",
                                "https://www.instagram.com/aiseo.hamburg/",
                                "https://www.instagram.com/aiseo.hamburg_/",
                                "https://www.tiktok.com/@aiseo.hamburg/",
                                "https://www.hamburg.de/branchenbuch/hamburg/eintrag/101256225/"
                            ],
                            "founder": {
                                "@type": "Person",
                                "name": "Vadim Shchepin",
                                "jobTitle": "AI SEO Specialist, Developer"
                            }
                        })
                    }}
                />
            </head>
            <body className="antialiased">
                <main id="main-content">
                    {children}
                </main>
                <Analytics />
            </body>
        </html>
    );
}

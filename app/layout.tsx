import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
    description: "Professionelle KI-Optimierung (AI SEO/GEO/AEO) für bessere Sichtbarkeit in ChatGPT, Perplexity & Co. Spezialist für Hamburg.",
    keywords: "AI SEO, KI Sichtbarkeit, GEO, AEO, Hamburg, ChatGPT Optimierung",
    openGraph: {
        title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
        description: "Professionelle KI-Optimierung für bessere Sichtbarkeit in ChatGPT, Perplexity & Co.",
        url: "https://www.aiseo.hamburg",
        siteName: "aiseo.hamburg",
        locale: "de_DE",
        type: "website",
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
                <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#4FAF8C" />
                <script defer src="https://umami.dsgvoschulfotos.de/script.js" data-website-id="994bf95f-79f8-4fcd-b77f-48abe6baee1d"></script>
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

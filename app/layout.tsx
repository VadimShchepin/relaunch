import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
    description: "Professionelle KI-Optimierung (AI SEO/GEO/AEO) für bessere Sichtbarkeit in ChatGPT, Perplexity & Co. Spezialist für Hamburg.",
    keywords: "AI SEO, KI Sichtbarkeit, GEO, AEO, Hamburg, ChatGPT Optimierung",
    openGraph: {
        title: "aiseo.hamburg — KI-Sichtbarkeit für Hamburger Unternehmen",
        description: "Professionelle KI-Optimierung für bessere Sichtbarkeit in ChatGPT, Perplexity & Co.",
        url: "https://aiseo.hamburg",
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
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

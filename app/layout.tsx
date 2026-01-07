import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "aiseo.hamburg — AI SEO Expert",
    description: "AI Visibility Audit & Optimization",
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

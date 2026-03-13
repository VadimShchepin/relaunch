import React from 'react';
import { Button } from '@/components/ui/Button';
import { LinkedInIcon, InstagramIcon, TwitterIcon, GoogleIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => (
    <footer className="relative text-white py-12 md:py-16 px-6 md:px-12 overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/footer-bg.webp)' }}
        >
            <div className="absolute inset-0 bg-black/40" /> {/* Slightly darker overlay for better text readability */}
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col min-h-[400px] justify-between">

            {/* Top Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full border-b border-white/20 pb-12">
                <div className="grid grid-cols-3 gap-x-12 gap-y-8 text-sm">

                    <div className="flex flex-col gap-3">
                        <p className="font-bold uppercase tracking-widest text-xs mb-1 text-white/80">Navigation</p>
                        <a href="/ai-sichtbarkeit-now" className="hover:text-white/80 transition-colors font-semibold">KI-Sichtbarkeit</a>
                        <a href="/leistungen" className="hover:text-white/80 transition-colors">Leistungen</a>
                        <a href="/ai-sichtbarkeits-upgrade-hamburg" className="hover:text-white/80 transition-colors">Upgrade Hamburg</a>
                        <a href="/ai-sichtbarkeit" className="hover:text-white/80 transition-colors">Was ist AI SEO?</a>
                        <a href="/#proof" className="hover:text-white/80 transition-colors">Proof</a>
                        <a href="/faq" className="hover:text-white/80 transition-colors">FAQ</a>
                        <a href="/ueber-mich" className="hover:text-white/80 transition-colors">Über mich</a>
                        <a href="/contact" className="hover:text-white/80 transition-colors">Kontakt</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="font-bold uppercase tracking-widest text-xs mb-1 text-white/80">Rechtliches</p>
                        <a href="/impressum" className="hover:text-white/80 transition-colors">Impressum</a>
                        <a href="/datenschutz" className="hover:text-white/80 transition-colors">Datenschutz</a>
                        <a href="/agb" className="hover:text-white/80 transition-colors">AGB</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="font-bold uppercase tracking-widest text-xs mb-1 text-white/80">Wissen</p>
                        <a href="/wissen" className="hover:text-white/80 transition-colors">Alle Guides</a>
                        <a href="/wissen/ki-sichtbarkeit" className="hover:text-white/80 transition-colors">KI-Sichtbarkeit</a>
                        <a href="/wissen/sichtbarkeit-in-chatgpt" className="hover:text-white/80 transition-colors">ChatGPT</a>
                        <a href="/wissen/sichtbarkeit-in-perplexity" className="hover:text-white/80 transition-colors">Perplexity</a>
                        <a href="/pressekit" className="hover:text-white/80 transition-colors mt-4">Pressekit</a>
                    </div>

                </div>

                <div className="text-right">
                    <div className="font-bold text-2xl tracking-tighter uppercase mb-2">
                        aiseo<span className="text-brand-accent">.</span>
                    </div>
                    <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                        Wir bringen Ihre Marke an die Spitze der Suchergebnisse mit KI-gestützten Strategien.
                    </p>
                </div>
            </div>

            {/* Middle Hero Section */}
            <div className="flex flex-col items-start gap-6 mt-12 mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                    Bereit für mehr<br />Sichtbarkeit?
                </h2>
                <div className="flex flex-col sm:flex-row justify-between items-end w-full gap-8">
                    <p className="text-lg md:text-xl font-light max-w-lg text-white/80">
                        Lassen Sie uns gemeinsam wachsen. Starten Sie jetzt Ihre Optimierung.
                    </p>
                    <Button href="/ai-sichtbarkeit-now" text="KI-Sichtbarkeit prüfen" className="!bg-white !text-black hover:!bg-gray-100 !py-3 !px-8 !text-base !rounded-lg" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 mt-12 pt-8 border-t border-white/10">
                <p>© 2026 aiseo.hamburg. Alle Rechte vorbehalten.</p>
                <p>Made in Hamburg. Auch unter <a href="https://webseite.hamburg/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">webseite.hamburg</a></p>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/vadim-shchepin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/aiseo.hamburg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors"
                        aria-label="Instagram"
                    >
                        <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://x.com/aiseo.hamburg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors"
                        aria-label="X (Twitter)"
                    >
                        <TwitterIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://share.google/bkLeWZ9kPt2G8Lwtg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors"
                        aria-label="Google Business"
                    >
                        <GoogleIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>

        </div>
    </footer>
);

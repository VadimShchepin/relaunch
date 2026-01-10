import React from 'react';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => (
    <footer className="relative text-white py-12 md:py-16 px-6 md:px-12 overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/footer-bg.png)' }}
        >
            <div className="absolute inset-0 bg-black/40" /> {/* Slightly darker overlay for better text readability */}
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col min-h-[400px] justify-between">

            {/* Top Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full border-b border-white/20 pb-12">
                <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-sm">

                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-1 opacity-70">Navigation</h4>
                        <a href="#expertise" className="hover:text-white/80 transition-colors">Expertises</a>
                        <a href="#process" className="hover:text-white/80 transition-colors">Work</a>
                        <a href="#about" className="hover:text-white/80 transition-colors">About</a>
                        <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-1 opacity-70">Rechtliches</h4>
                        <a href="#" className="hover:text-white/80 transition-colors">Impressum</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Datenschutz</a>
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
                    <Button text="Kontakt aufnehmen" className="!bg-white !text-black hover:!bg-gray-100 !py-3 !px-8 !text-base !rounded-lg" />
                </div>
            </div>

            <div className="flex justify-between items-center text-xs text-white/40 mt-12 pt-8 border-t border-white/10">
                <p>© 2026 AI SEO. Alle Rechte vorbehalten.</p>
                <p>Made in Hamburg.</p>
            </div>

        </div>
    </footer>
);

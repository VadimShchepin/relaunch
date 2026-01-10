import React from 'react';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => (
    <footer className="bg-[#121212] text-white py-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
            {/* Newsletter Section */}
            <div className="border-b border-white/10 pb-16 mb-16">
                <div className="max-w-2xl">
                    <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[10px] mb-4 block">Newsletter</span>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                        Noch nicht bereit? Kein Problem.
                    </h3>
                    <p className="text-gray-400 text-base mb-8 leading-relaxed">
                        1–2× pro Monat ein kurzer, konkreter Tipp zur KI-Sichtbarkeit. Kein Spam.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                        <input
                            type="email"
                            placeholder="E-Mail-Adresse"
                            className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent transition-colors"
                        />
                        <Button text="Eintragen" primary={true} className="!py-4 !px-8" />
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                <p>© 2025 aiseo.hamburg — Alle Rechte vorbehalten.</p>
                <div className="flex gap-10">
                    <a href="#" className="hover:text-white transition-colors">Impressum</a>
                    <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
                </div>
            </div>
        </div>
    </footer>
);


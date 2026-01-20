'use client';

import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock/unlock body scroll when menu opens/closes
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-center pointer-events-none">
                {/* Logo */}
                <a href="/" className="pointer-events-auto" aria-label="Zur Startseite">
                    <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-4 py-2 rounded-full transition-all hover:scale-105">
                        <div className="font-bold text-xl tracking-tighter text-black uppercase leading-none">
                            aiseo<span className="text-brand-accent">.</span>
                        </div>
                    </div>
                </a>

                {/* Center Pill Nav - Visible on Desktop */}
                <div className="hidden lg:flex pointer-events-auto bg-white/90 backdrop-blur-md px-1 py-1 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 gap-1">
                    <a href="/ai-sichtbarkeit" className="px-3 lg:px-5 py-2 rounded-full bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors text-xs font-bold">KI-Sichtbarkeit</a>
                    <a href="/#reality" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Realität</a>
                    <a href="/#proof" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Proof</a>
                    <a href="/#process" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Prozess</a>
                    <a href="/faq" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">FAQ</a>
                    <a href="/contact" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Kontakt</a>
                </div>

                <div className="hidden lg:block pointer-events-auto">
                    <Button
                        href="/ai-sichtbarkeit"
                        primary
                        text="KI-Sichtbarkeit prüfen"
                        className="!py-2 !px-2 !pl-4 lg:!pl-6 !text-[9px] lg:!text-[10px] uppercase tracking-wider font-bold shadow-lg shadow-black/5"
                    >
                        <PlatformIconLoop />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden pointer-events-auto">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-3 rounded-full transition-all hover:scale-105"
                        aria-label="Menu"
                    >
                        <div className="w-5 h-5 flex flex-col justify-center items-center">
                            <span className={`block w-4 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                            <span className={`block w-4 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-4 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm cursor-pointer" onClick={closeMobileMenu} aria-label="Close menu" />
                    <div className="fixed top-20 right-6 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl p-6 min-w-[200px]" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="/ai-sichtbarkeit"
                                className="text-sm font-bold text-white bg-brand-accent hover:bg-brand-accent/90 transition-colors py-3 px-4 rounded-lg text-center"
                                onClick={closeMobileMenu}
                            >
                                KI-Sichtbarkeit
                            </a>
                            <div className="border-t border-gray-200 pt-4">
                                <a
                                    href="/#reality"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Realität
                                </a>
                                <a
                                    href="/#proof"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Proof
                                </a>
                                <a
                                    href="/#process"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Prozess
                                </a>
                                <a
                                    href="/faq"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    FAQ
                                </a>
                                <a
                                    href="/contact"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Kontakt
                                </a>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <Button
                                    href="/ai-sichtbarkeit"
                                    primary
                                    text="KI-Sichtbarkeit prüfen"
                                    className="w-full justify-center !text-xs !py-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


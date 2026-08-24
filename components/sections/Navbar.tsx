'use client';

import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { useState, useEffect } from 'react';

/* ---------------------------------------------------------------------------
   The fixed header, on all 79 pages.

   It has to hold two things at once.

   1. The floating look. In the homepage hero the two pills sit on the artwork
      with nothing behind them, and that is the intended first impression. So
      as long as a page has not been scrolled, the band stays transparent and
      nothing changes.

   2. Legibility on every other pixel of the site. The band used to be
      transparent at every scroll position, with body text running visibly
      through the gap between the two pills: on a phone the wordmark pill
      covered two words of the paragraph beneath it, on desktop the pill row
      cut through a section intro. After one line of scrolling the band now
      becomes an opaque surface with a hairline, and it takes pointer events,
      so no text is ever read or clicked through it.

   The height is exactly --spacing-navbar (h-navbar, 88px). It used to be 94px
   (py-6 around a 46px button) while every sticky rail on the site offsets
   itself by top-navbar = 88px, which clipped stuck rails by 6px. One token,
   one measured box: #site-navbar is also what app/wissen/WissenList.tsx
   measures instead of hardcoding the number a third time.
--------------------------------------------------------------------------- */

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // One line of scroll is the whole trigger: the pills only need to float
    // while the hero is still underneath them. Runs once on mount too, because
    // a reload halfway down a page starts out scrolled.
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // An open menu gets the same surface, so the panel hangs off a solid band
    // instead of off nothing.
    const solid = isScrolled || isMobileMenuOpen;

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
            <nav
                id="site-navbar"
                className={`fixed top-0 left-0 z-50 flex h-navbar w-full items-center justify-between border-b px-6 transition-colors duration-300 ${
                    solid
                        ? 'pointer-events-auto border-brand-line bg-brand-bg/95 backdrop-blur-md'
                        : 'pointer-events-none border-transparent'
                }`}
            >
                {/* Logo */}
                <a href="/" className="pointer-events-auto" aria-label="Zur Startseite">
                    <div
                        className={`px-4 py-2 rounded-full transition-all hover:scale-105 border ${
                            solid
                                ? 'border-transparent'
                                : 'bg-white/90 backdrop-blur-md border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)]'
                        }`}
                    >
                        <div className="font-bold text-xl tracking-tighter text-black uppercase leading-none">
                            aiseo<span className="text-brand-accent">.</span>
                        </div>
                    </div>
                </a>

                {/* Center Pill Nav - Visible on Desktop */}
                <div className="hidden lg:flex pointer-events-auto bg-white/90 backdrop-blur-md px-1 py-1 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 gap-1">
                    <a href="/ai-sichtbarkeit-now" className="px-3 lg:px-5 py-2 rounded-full bg-[#2d8a65] text-white hover:bg-[#267555] transition-colors text-xs font-bold">KI-Sichtbarkeit</a>
                    <a href="/leistungen" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Leistungen</a>
                    <a href="/ergebnisse" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Ergebnisse</a>
<a href="/wissen" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Wissen</a>
                    <a href="/ueber-mich" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Über mich</a>
                    <a href="/faq" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">FAQ</a>
                    <a href="/contact" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Kontakt</a>
                </div>

                <div className="hidden lg:block pointer-events-auto">
                    <Button
                        href="/ai-sichtbarkeit-now"
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
                    {/* Hangs off the bottom edge of the band, not 8px behind it:
                        the band is 88px tall and sits at z-50. */}
                    <div className="fixed top-navbar right-6 mt-2 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl p-6 min-w-[200px]" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="/ai-sichtbarkeit-now"
                                className="text-sm font-bold text-white bg-[#2d8a65] hover:bg-[#267555] transition-colors py-3 px-4 rounded-lg text-center"
                                onClick={closeMobileMenu}
                            >
                                KI-Sichtbarkeit
                            </a>
                            <div className="border-t border-gray-200 pt-4">
                                <a
                                    href="/leistungen"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Leistungen
                                </a>
                                <a
                                    href="/ergebnisse"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Ergebnisse
                                </a>
                                <a
                                    href="/wissen"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Wissen
                                </a>
                                <a
                                    href="/ueber-mich"
                                    className="text-sm font-semibold text-gray-900 hover:text-brand-accent transition-colors py-2 block"
                                    onClick={closeMobileMenu}
                                >
                                    Über mich
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
                                    href="/ai-sichtbarkeit-now"
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


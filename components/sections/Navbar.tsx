import React from 'react';

export const Navbar: React.FC = () => (
    <nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-start md:items-center pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto">
            <div className="font-semibold text-2xl tracking-tight text-black bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full inline-block border border-white/50 shadow-sm hover:shadow-md transition-all">
                aiseo<span className="text-brand-accent">.</span>
            </div>
        </div>

        {/* Center Pill Nav - Visible on Desktop */}
        <div className="hidden md:flex pointer-events-auto absolute left-1/2 top-8 -translate-x-1/2 bg-white/90 backdrop-blur-md px-1.5 py-1.5 rounded-full shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-gray-200/50 gap-1">
            <a href="#audit" className="px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-black">Audit</a>
            <a href="#process" className="px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-black">Prozess</a>
            <a href="#mechanism" className="px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-black">Expertise</a>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium">Kontakt</a>
        </div>

        {/* Mobile CTA */}
        <div className="pointer-events-auto md:hidden">
            <button className="bg-brand-accent text-white p-3 rounded-full shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
            </button>
        </div>

        {/* Right CTA - Desktop */}
        <div className="hidden md:block pointer-events-auto">
            <button className="group flex items-center gap-2 bg-[#FEE2E2] text-[#991B1B] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#FECACA] transition-all shadow-sm">
                Get Results
                <span className="bg-white/60 w-6 h-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform text-xs">🔥</span>
            </button>
        </div>
    </nav>
);

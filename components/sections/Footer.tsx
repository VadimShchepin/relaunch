import React from 'react';

export const Footer: React.FC = () => (
    <footer className="bg-brand-bg py-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            <p>© 2024 aiseo.hamburg — Alle Rechte vorbehalten.</p>
            <div className="flex gap-10">
                <a href="#" className="hover:text-brand-accent transition-colors">Impressum</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Datenschutz</a>
            </div>
        </div>
    </footer>
);


import React from 'react';

export const Footer: React.FC = () => (
    <footer className="bg-brand-bg text-brand-dark py-12 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm font-bold uppercase tracking-widest">
            <p>© 2024 aiseo.hamburg</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-black transition-colors">Impressum</a>
                <a href="#" className="hover:text-black transition-colors">Datenschutz</a>
            </div>
        </div>
    </footer>
);

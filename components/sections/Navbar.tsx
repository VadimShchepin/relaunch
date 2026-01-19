import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-center pointer-events-none">
            {/* Logo */}
            <div className="pointer-events-auto">
                <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-4 py-2 rounded-full transition-all hover:scale-105">
                    <div className="font-bold text-xl tracking-tighter text-black uppercase leading-none">
                        aiseo<span className="text-brand-accent">.</span>
                    </div>
                </div>
            </div>

            {/* Center Pill Nav - Visible on Desktop */}
            <div className="hidden lg:flex pointer-events-auto bg-white/90 backdrop-blur-md px-1 py-1 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 gap-1">
                <a href="/#reality" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Realität</a>
                <a href="/#proof" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Proof</a>
                <a href="/#process" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Prozess</a>
                <a href="/#faq" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">FAQ</a>
                <a href="/contact" className="px-3 lg:px-5 py-2 rounded-full hover:bg-gray-100/80 transition-colors text-xs font-bold text-gray-900">Kontakt</a>
            </div>

            <div className="hidden lg:block pointer-events-auto">
                <Button
                    href="/contact"
                    primary
                    text="KI-Sichtbarkeit prüfen"
                    className="!py-2 !px-2 !pl-4 lg:!pl-6 !text-[9px] lg:!text-[10px] uppercase tracking-wider font-bold shadow-lg shadow-black/5"
                >
                    <PlatformIconLoop />
                </Button>
            </div>

            {/* Mobile menu toggle could go here */}
        </nav>
    );
};


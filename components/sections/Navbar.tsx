import { Button } from '@/components/ui/Button';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-center pointer-events-none">
            {/* Logo */}
            <div className="pointer-events-auto">
                <div className="font-bold text-3xl tracking-tighter text-black uppercase">
                    aiseo<span className="text-brand-accent">.</span>
                </div>
            </div>

            {/* Center Pill Nav - Visible on Desktop */}
            <div className="hidden md:flex pointer-events-auto bg-white/100 px-1 py-1 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 gap-1">
                <a href="#expertise" className="px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-xs font-bold text-gray-900">Expertises</a>
                <a href="#process" className="px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-xs font-bold text-gray-900">Work</a>
                <a href="#about" className="px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-xs font-bold text-gray-900">About</a>
                <a href="#contact" className="px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-xs font-bold text-gray-900">Contact</a>
            </div>

            <div className="hidden md:block pointer-events-auto">
                <Button
                    primary
                    text="KI-Sichtbarkeit prüfen"
                    className="!py-2 !px-2 !pl-6 !text-[10px] uppercase tracking-wider font-bold"
                >
                    <PlatformIconLoop />
                </Button>
            </div>

            {/* Mobile menu toggle could go here */}
        </nav>
    );
};


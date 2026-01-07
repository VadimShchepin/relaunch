import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export const FinalCTA: React.FC = () => (
    <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto text-center">
        <FadeIn>
            <h2 className="text-4xl md:text-6xl font-semibold mb-8 text-black tracking-tight leading-tight">
                Die Frage ist nicht, <br />ob KI wichtig wird.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
                Die Frage ist, ob dein Unternehmen dort <strong className="text-black">verständlich und empfehlbar</strong> ist.<br />
                Lass es prüfen.
            </p>
            <div className="flex justify-center">
                <Button
                    text="Kostenloser AI-Sichtbarkeits-Check"
                    primary={true}
                    className="text-lg py-5 px-10 shadow-xl shadow-brand-accent/20"
                    onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                />
            </div>
        </FadeIn>
    </section>
);

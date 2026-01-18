import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

export const FinalCTA: React.FC = () => (
    <section className="py-60 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto text-center border-t border-gray-50">
        <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-12 text-black tracking-[-0.05em] leading-[1.0]">
                Bereit? <br />
                <span className="text-gray-300">Lass uns prüfen.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-3xl mx-auto font-medium leading-tight">
                Die Frage ist nicht, ob KI wichtig wird. Die Frage ist, ob dein Unternehmen dort <strong className="text-black">verständlich und empfehlbar</strong> ist.
            </p>
            <div className="flex justify-center">
                <Button
                    text="Check anfordern"
                    primary={true}
                    className="text-lg py-5 px-10"
                    onClick={() => {
                        const offerSection = document.getElementById('offer');
                        if (offerSection) {
                            offerSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                />
            </div>
        </FadeIn>
    </section>
);



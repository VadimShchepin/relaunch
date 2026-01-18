import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

const ABOUT_CONTENT = {
    headline: "Warum ich das mache.",
    bodyParagraphs: [
        "Ich verkaufe keine Rankings. Ich verkaufe keine SEO-Pakete. Ich helfe Unternehmen dabei, von KI gefunden und verstanden zu werden.",
        "Die meisten SEO-Agenturen optimieren für Google-Algorithmen von gestern. Ich fokussiere mich auf die KI-Systeme von heute und morgen – ChatGPT, Perplexity, Claude und was noch kommt.",
        "Mein Ansatz ist simpel: Klare Websites, die echte Expertise vermitteln. Keine Tricks, keine Hacks, keine leeren Versprechen. Nur strukturierte Inhalte, die KI-Systeme verstehen und weiterempfehlen können."
    ],
    closingLine: "KI-Sichtbarkeit ist kein Trick. Sie ist das Ergebnis einer klaren Website."
};

export const AboutMe: React.FC = () => {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-brand-bg">
            <div className="max-w-4xl mx-auto">
                {/* Add photo section */}
                <FadeIn>
                    <div className="flex flex-col items-center mb-16">
                        <img
                            src="/vadim_shchepin.jpeg"
                            alt="Vadim Shchepin"
                            className="w-32 h-32 rounded-full grayscale mb-6 object-cover"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-black">Vadim Shchepin</h3>
                            <p className="text-gray-600">Hamburg</p>
                            <p className="text-sm text-gray-500 mt-2">Senior Engineer, baut klare Websites statt SEO-Pakete.</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
                        {ABOUT_CONTENT.headline}
                    </h2>
                </FadeIn>

                <div className="space-y-8">
                    {ABOUT_CONTENT.bodyParagraphs.map((paragraph, index) => (
                        <FadeIn key={index} delay={(index + 2) * 100}>
                            <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed text-center">
                                {paragraph}
                            </p>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={600}>
                    <p className="text-xl md:text-2xl font-semibold text-brand-accent text-center mt-16 leading-relaxed">
                        {ABOUT_CONTENT.closingLine}
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
'use client';

import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';

const NEWSLETTER_CONTENT = {
    headline: "KI-Sichtbarkeit verstehen.",
    subline: "Updates zu KI-Auswahl und Website-Optimierung direkt in dein Postfach.",
    ctaText: "Updates erhalten",
    trustLine: "Kein Spam. Keine Funnels. Abmeldung jederzeit."
};

interface NewsletterFormState {
    email: string;
    isSubmitting: boolean;
    message?: string;
    isSuccess?: boolean;
}

export const Newsletter: React.FC = () => {
    const [formState, setFormState] = useState<NewsletterFormState>({
        email: '',
        isSubmitting: false
    });

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({
            ...prev,
            email: e.target.value,
            message: undefined
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic client-side validation
        if (!formState.email) {
            setFormState(prev => ({
                ...prev,
                message: 'E-Mail-Adresse ist erforderlich'
            }));
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formState.email)) {
            setFormState(prev => ({
                ...prev,
                message: 'Bitte gib eine gültige E-Mail-Adresse ein'
            }));
            return;
        }

        setFormState(prev => ({
            ...prev,
            isSubmitting: true,
            message: undefined
        }));

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formState.email }),
            });

            if (response.ok) {
                setFormState(prev => ({
                    ...prev,
                    isSubmitting: false,
                    isSuccess: true,
                    message: 'Danke für dein Interesse!',
                    email: ''
                }));
            } else {
                const errorData = await response.json();
                setFormState(prev => ({
                    ...prev,
                    isSubmitting: false,
                    message: errorData.error || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.'
                }));
            }
        } catch (error) {
            setFormState(prev => ({
                ...prev,
                isSubmitting: false,
                message: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.'
            }));
        }
    };

    return (
        <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-brand-bg">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-center">
                        {NEWSLETTER_CONTENT.headline}
                    </h2>
                </FadeIn>

                <FadeIn delay={100}>
                    <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed text-center mb-16">
                        {NEWSLETTER_CONTENT.subline}
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <input
                                type="email"
                                value={formState.email}
                                onChange={handleEmailChange}
                                placeholder="deine@email.de"
                                disabled={formState.isSubmitting || formState.isSuccess}
                                className="flex-1 px-6 py-4 rounded-full border border-gray-200 text-base font-medium focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <Button
                                text={formState.isSubmitting ? 'Wird gesendet...' : NEWSLETTER_CONTENT.ctaText}
                                primary={true}
                                onClick={() => { }}
                                className={`whitespace-nowrap ${formState.isSubmitting || formState.isSuccess ? 'opacity-50 cursor-not-allowed' : ''}`}
                            />
                        </div>

                        {formState.message && (
                            <div className={`text-center text-sm font-medium mb-4 ${formState.isSuccess ? 'text-brand-accent' : 'text-red-500'
                                }`}>
                                {formState.message}
                            </div>
                        )}

                        <p className="text-sm text-gray-500 text-center">
                            {NEWSLETTER_CONTENT.trustLine}
                        </p>
                    </form>
                </FadeIn>
            </div>
        </section>
    );
};
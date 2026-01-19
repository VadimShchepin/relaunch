import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function NewsletterConfirmedPage() {
    return (
        <div className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                <FadeIn>
                    <div className="mb-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                            Newsletter bestätigt!
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                            Danke für deine Anmeldung. Du erhältst bald die erste Mail mit wertvollen Insights zur KI-Sichtbarkeit.
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent/90 transition-colors"
                        >
                            Zurück zur Startseite
                        </a>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
'use client';

import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
                setErrorMessage(getErrorMessage(data.error));
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    };

    const getErrorMessage = (error: string) => {
        switch (error) {
            case 'INVALID_EMAIL':
                return 'Bitte gib eine gültige E-Mail-Adresse ein.';
            case 'BREVO_ERROR':
                return 'Es gab ein Problem beim Anmelden. Bitte versuche es später erneut.';
            case 'SERVER_MISCONFIG':
                return 'Technischer Fehler. Bitte kontaktiere uns direkt.';
            default:
                return 'Ein unbekannter Fehler ist aufgetreten.';
        }
    };

    return (
        <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-brand-bg">
            <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                        KI-Sichtbarkeit verstehen.
                    </h2>
                </FadeIn>

                <FadeIn delay={100}>
                    <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-16">
                        Erhalte wertvolle Insights zu KI-Optimierung und Website-Sichtbarkeit direkt in dein Postfach.
                    </p>
                </FadeIn>

                <FadeIn delay={200}>
                    {status === 'success' ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-md mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Fast geschafft!</h3>
                            <p className="text-green-700">
                                Bitte bestätige deine Anmeldung über den Link in deinem Postfach.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="deine@email.de"
                                    required
                                    disabled={status === 'loading'}
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Anmelden...' : 'Anmelden'}
                                </button>
                            </div>
                            {status === 'error' && (
                                <p className="mt-4 text-red-600 text-sm">{errorMessage}</p>
                            )}
                            <p className="mt-4 text-sm text-gray-600">
                                Kostenlos. Jederzeit abmeldbar. Kein Spam.
                            </p>
                        </form>
                    )}
                </FadeIn>
            </div>
        </section>
    );
};
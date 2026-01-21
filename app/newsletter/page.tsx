'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function NewsletterPage() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.ok) {
                setStatus('success');
                setMessage('Prüf dein Postfach – Bestätigung ist unterwegs.');
            } else {
                setStatus('error');
                setMessage('Das hat nicht geklappt. Versuch es nochmal.');
            }
        } catch {
            setStatus('error');
            setMessage('Das hat nicht geklappt. Versuch es nochmal.');
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />

            <main className="min-h-screen bg-[#F7F5F2] flex items-center justify-center px-6 py-32">
                <div className="max-w-2xl mx-auto w-full">
                    {status === 'success' ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                                Fast fertig.
                            </h1>
                            <p className="text-xl text-gray-700 mb-12">{message}</p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="/" className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-black/80 transition-colors text-base whitespace-nowrap">
                                    Zur Startseite
                                </a>
                                <a href="/ai-sichtbarkeit" className="px-6 py-3 bg-white border border-gray-200 text-black font-medium rounded-xl hover:bg-gray-50 transition-colors text-base whitespace-nowrap">
                                    KI-Sichtbarkeit
                                </a>
                                <a href="/contact" className="px-6 py-3 bg-brand-accent text-white font-medium rounded-xl hover:bg-brand-accent/90 transition-colors text-base whitespace-nowrap">
                                    Kontakt
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] font-semibold tracking-[-0.05em] text-black mb-8">
                                Kein Bullshit.
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 max-w-xl mx-auto">
                                Du bekommst echte Einblicke, wie KI-Systeme Unternehmen wirklich empfehlen.
                            </p>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 max-w-lg mx-auto">
                                Ich beweis es dir. Ab in den Newsletter – oder stay im Dunkeln.
                            </p>

                            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="deine@email.de"
                                        required
                                        disabled={status === 'loading'}
                                        className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 disabled:opacity-50 text-base"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/80 transition-colors disabled:opacity-50 text-base whitespace-nowrap"
                                    >
                                        {status === 'loading' ? '...' : 'Anmelden'}
                                    </button>
                                </div>
                                {message && (
                                    <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                                        {message}
                                    </p>
                                )}
                            </form>

                            <p className="text-xs text-gray-500 mt-8 max-w-sm mx-auto leading-relaxed">
                                Kein Spam. Doppelt-Opt-In. Jederzeit abmeldest.
                            </p>

                            <div className="mt-16 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Oder direkt zu:</p>
                                <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                                    <a href="/" className="text-gray-800 hover:text-black underline decoration-gray-300 hover:decoration-black underline-offset-2 transition-all">
                                        Startseite
                                    </a>
                                    <span className="text-gray-300">•</span>
                                    <a href="/ai-sichtbarkeit" className="text-gray-800 hover:text-black underline decoration-gray-300 hover:decoration-black underline-offset-2 transition-all">
                                        KI-Sichtbarkeit
                                    </a>
                                    <span className="text-gray-300">•</span>
                                    <a href="/contact" className="text-gray-800 hover:text-black underline decoration-gray-300 hover:decoration-black underline-offset-2 transition-all">
                                        Kontakt
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

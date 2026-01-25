'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon, LoadingIcon } from '@/components/ui/Icons';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';

// Hero Section - Punchy and direct
const HeroSection: React.FC = () => (
    <section className="relative pt-32 pb-16 md:pt-48 lg:pt-44 md:pb-24 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
        <FadeIn>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-brand-accent">Für Hamburger Unternehmen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                AI-Sichtbarkeits-Upgrade<br />
                <span className="text-brand-accent">für Hamburg</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6 leading-relaxed">
                Damit Ihr Unternehmen in ChatGPT, Perplexity & Google AI als relevante Empfehlung für Hamburg erkannt werden kann.
            </p>

            <p className="text-base text-gray-500 mb-10 max-w-xl">
                Für lokale Dienstleister, Praxen und Betriebe mit bestehender Website.
            </p>

            {/* CTA with icon loop */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button href="#kontakt" primary className="!py-4 !px-6 !pl-8 group">
                    <span className="relative z-10 flex items-center gap-3">
                        Unverbindliche AI-Sichtbarkeits-Prüfung
                        <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
                    </span>
                </Button>
            </div>

            {/* Quick trust signal */}
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-brand-accent" />
                    Kostenlos
                </span>
                <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-brand-accent" />
                    Unverbindlich
                </span>
                <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-brand-accent" />
                    Direkt vom Experten
                </span>
            </div>
        </FadeIn>
    </section>
);

// Problem Section - Short and clear
const ProblemSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Das Problem</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8 leading-tight">
                Warum Ihre Website in<br />
                <span className="text-gray-400">KI-Suchen nicht auftaucht</span>
            </h2>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-10 shadow-sm">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Viele Hamburger Unternehmen haben eine gute Website – werden aber von KI-Suchsystemen nicht genannt.
                </p>
                <p className="text-base text-gray-600 mb-6">
                    Nicht wegen schlechter Qualität, sondern weil:
                </p>
                <div className="space-y-4">
                    {[
                        'Leistungen für KI nicht eindeutig erkennbar sind',
                        'lokale Relevanz (Hamburg, Einzugsgebiet) fehlt',
                        'Inhalte für Menschen geschrieben sind, nicht für Antwortsysteme'
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 100}>
                            <div className="flex items-start gap-3 text-gray-700">
                                <span className="text-red-400 font-bold text-lg leading-none mt-0.5">•</span>
                                <span>{item}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Result highlight */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <p className="text-lg font-semibold text-red-800">
                    Ergebnis: Andere Betriebe werden empfohlen – Sie nicht.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Explanation Section - What AI visibility means
const ExplanationSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Kurz erklärt</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                Was „AI-Sichtbarkeit" bedeutet
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                        KI-Systeme bewerten keine Rankings.<br />
                        <span className="text-brand-accent">Sie verstehen Inhalte und formulieren Empfehlungen.</span>
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <p className="text-lg font-semibold text-black mb-4">AI-Sichtbarkeit heißt:</p>
                {[
                    'Ihr Unternehmen ist klar als Hamburger Anbieter erkennbar',
                    'Leistungen, Zielgruppe und Standort sind eindeutig',
                    'Ihre Website liefert strukturierte Antworten'
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="flex items-start gap-3 text-gray-700 bg-white border border-gray-100 rounded-xl p-4 hover:border-brand-accent/50 transition-all duration-300">
                            <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-base">{item}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <p className="mt-8 text-lg font-semibold text-brand-accent">
                Genau das stellt dieses Upgrade her.
            </p>
        </FadeIn>
    </section>
);

// Offer Section - The main offer
const OfferSection: React.FC = () => (
    <section id="angebot" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Das Angebot</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-4">
                AI-Sichtbarkeits-Upgrade
            </h2>
            <p className="text-xl text-gray-500 mb-10">(einmalig)</p>

            <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 md:p-8 mb-10 shadow-lg shadow-brand-accent/10">
                <p className="text-lg font-medium text-black mb-2">Ein klar abgegrenztes Projekt.</p>
                <p className="text-brand-accent font-semibold">Kein Abo. Keine Agenturbindung.</p>
            </div>

            {/* What's included */}
            <h3 className="text-2xl font-semibold text-black mb-8">Enthalten</h3>

            <div className="space-y-6">
                {[
                    {
                        num: '1',
                        title: 'AI-Sichtbarkeits-Analyse',
                        items: [
                            'Prüfung: ChatGPT, Perplexity, Google AI',
                            'Warum Ihr Unternehmen (noch) nicht empfohlen wird',
                            'Verständliche Zusammenfassung'
                        ]
                    },
                    {
                        num: '2',
                        title: 'Website-Optimierung',
                        items: [
                            'Überarbeitung der Startseite',
                            '2 gezielte Unterseiten, z.B.:',
                            '→ zentrale Leistung (Hamburg-Bezug)',
                            '→ Vertrauen / Einordnung',
                            'Inhalte klar strukturiert für KI-Systeme'
                        ]
                    },
                    {
                        num: '3',
                        title: 'Technische Basis',
                        items: [
                            'Strukturierte Daten (Schema)',
                            'Saubere Seitenstruktur',
                            'Klare interne Verlinkung'
                        ]
                    },
                    {
                        num: '4',
                        title: 'Indexierung & Kontrolle',
                        items: [
                            'Google Search Console Check',
                            'Sicherstellung der Indexierung'
                        ]
                    },
                    {
                        num: '5',
                        title: 'Erklärung',
                        items: [
                            'Was geändert wurde',
                            'Warum es relevant ist',
                            'Was Sie künftig beachten sollten'
                        ]
                    }
                ].map((section, i) => (
                    <FadeIn key={i} delay={i * 75}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent/50 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-accent font-bold">{section.num}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-black text-lg mb-3">{section.title}</h4>
                                    <ul className="space-y-2">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                                                {item.startsWith('→') ? (
                                                    <span className="text-brand-accent ml-4">{item}</span>
                                                ) : (
                                                    <>
                                                        <span className="text-brand-accent mt-1">•</span>
                                                        <span>{item}</span>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Process Section
const ProcessSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Ablauf</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-12">
                So läuft es ab
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { num: '1', title: 'Kurze Anfrage', desc: 'Sie schildern Ihre Situation' },
                    { num: '2', title: 'Einschätzung & Entscheidung', desc: 'Ich prüfe, ob das Upgrade Sinn macht' },
                    { num: '3', title: 'Umsetzung', desc: '10–14 Tage professionelle Arbeit' },
                    { num: '4', title: 'Übergabe & Erklärung', desc: 'Sie verstehen, was gemacht wurde' }
                ].map((step, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent hover:shadow-lg transition-all duration-300 group">
                            <div className="text-5xl font-bold text-gray-100 absolute top-4 right-4 group-hover:text-brand-accent/20 transition-colors">
                                {step.num}
                            </div>
                            <h3 className="font-semibold text-black text-lg mb-2 relative z-10">{step.title}</h3>
                            <p className="text-gray-600 text-sm relative z-10">{step.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <p className="mt-10 text-center text-lg font-semibold text-brand-accent">
                Direkt. Transparent. Ohne Umwege.
            </p>
        </FadeIn>
    </section>
);

// Proof Section with images
const ProofSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Proof & Vertrauen</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                Aktuelle Signale aus der Praxis
            </h2>

            {/* Image gallery */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <FadeIn delay={0}>
                    <div className="relative group overflow-hidden rounded-2xl border border-gray-100 bg-white">
                        <img
                            src="/images/reality/growth.webp"
                            alt="Wachstum der Impressionen nach AI-Optimierung"
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-medium">Impressionen nach AI-Optimierung</span>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={100}>
                    <div className="relative group overflow-hidden rounded-2xl border border-gray-100 bg-white">
                        <img
                            src="/images/ChatGPT visits.webp"
                            alt="Besucher durch ChatGPT-Empfehlungen"
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-medium">Besucher durch ChatGPT-Empfehlungen</span>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Proof points */}
            <div className="space-y-3 mb-8">
                {[
                    'Erwähnungen in ChatGPT / Perplexity',
                    'Echte Anfragen per E-Mail',
                    'Erste lokale Sichtbarkeitssignale'
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Hinweis:</strong> Ergebnisse hängen von Markt & Wettbewerb ab. Es werden keine Rankings oder Leads garantiert.
                </p>
            </div>
        </FadeIn>
    </section>
);

// Audience Section - Who it's for
const AudienceSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Für wen geeignet</span>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Fits */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                        <CheckIcon className="w-6 h-6" />
                        Geeignet für:
                    </h3>
                    <div className="space-y-4">
                        {[
                            'Hamburger Dienstleister',
                            'Praxen & Kanzleien',
                            'Lokale Unternehmen mit bestehender Website'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-green-900">
                                <span className="text-green-600 font-bold text-lg leading-none mt-0.5">✓</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Doesn't fit */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
                        <span className="w-6 h-6 flex items-center justify-center">✗</span>
                        Nicht geeignet für:
                    </h3>
                    <div className="space-y-4">
                        {[
                            'Neue Websites ohne Inhalte',
                            'Reine Online-Shops',
                            'Kunden, die klassische SEO-Rankings erwarten'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-red-900">
                                <span className="text-red-600 font-bold text-lg leading-none mt-0.5">✗</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    </section>
);

// About Me Section
const AboutMeSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Über mich</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                Persönlich. Technisch. Direkt.
            </h2>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Ich bin Software-Engineer und arbeite seit Jahren mit Websites, Suchsystemen und Datenstrukturen.
                </p>

                <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-6 mb-6">
                    <p className="text-lg font-semibold text-black mb-2">Mein Fokus:</p>
                    <p className="text-gray-700">
                        Websites so aufzubauen, dass KI-Systeme sie verstehen und korrekt empfehlen.
                    </p>
                </div>

                <p className="text-base text-gray-600 mb-4">Ich arbeite bewusst allein:</p>
                <div className="space-y-3">
                    {[
                        'Kein Agentur-Setup',
                        'Keine Weitergabe',
                        'Direkter Kontakt'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    </section>
);

// Testimonials Section
const TestimonialsSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Frühe Rückmeldungen</span>

            <div className="space-y-6">
                {[
                    'Endlich verständlich erklärt, warum unsere Website in KI-Suchen nicht auftaucht.',
                    'Sehr klarer Blick auf unsere lokale Sichtbarkeit in Hamburg.'
                ].map((quote, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <blockquote className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 relative">
                            <div className="text-6xl text-brand-accent/20 absolute top-4 left-4 font-serif">"</div>
                            <p className="text-lg md:text-xl text-gray-800 italic relative z-10 pl-8">
                                {quote}
                            </p>
                        </blockquote>
                    </FadeIn>
                ))}
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center">
                (Rückmeldungen aus laufenden Gesprächen & Pilotprojekten)
            </p>
        </FadeIn>
    </section>
);

// Pricing Section
const PricingSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Preis</span>

            <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        AI-Sichtbarkeits-Upgrade
                    </h2>

                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-5xl md:text-6xl font-bold text-brand-accent">1.500 €</span>
                        <span className="text-gray-400">netto</span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-300 mb-8">
                        <span className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-brand-accent" />
                            einmalig
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-brand-accent" />
                            Dauer ca. 10–14 Tage
                        </span>
                    </div>

                    <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
                        <p className="text-gray-200 leading-relaxed">
                            Wenn sich zeigt, dass das Upgrade keinen sinnvollen Mehrwert bringt, sage ich das offen – und setze es nicht um.
                        </p>
                    </div>

                    <Button href="#kontakt" primary text="Jetzt anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

// Final CTA Section
const FinalCTASection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6 leading-tight">
                Möchten Sie wissen, ob Ihr Unternehmen in KI-Suchen für Hamburg sichtbar ist?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button href="#kontakt" primary className="!py-4 !px-8">
                    <span className="relative z-10 flex items-center gap-3">
                        Unverbindliche AI-Sichtbarkeits-Prüfung anfragen
                        <ArrowRightIcon className="w-5 h-5" />
                    </span>
                </Button>
            </div>

            <p className="text-gray-500">
                Kurz. Ehrlich. Ohne Verkaufspflicht.
            </p>
        </FadeIn>
    </section>
);

// Contact Form Section
const ContactFormSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        branche: '',
        nachricht: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.website,
                    message: `[AI-Sichtbarkeits-Upgrade Hamburg]\n\nWebsite: ${formData.website}\nBranche/Angebot: ${formData.branche}\n\nNachricht:\n${formData.nachricht}`
                }),
            });

            const data = await response.json();
            if (data.ok) {
                setSubmitted(true);
            } else {
                setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
            }
        } catch {
            setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="kontakt" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
            <FadeIn>
                <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Kontakt</span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
                    AI-Sichtbarkeits-Prüfung anfragen
                </h2>
                <p className="text-gray-600 mb-10">
                    Ich antworte innerhalb von 24–48h.
                </p>

                {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckIcon className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">Vielen Dank!</h3>
                        <p className="text-gray-600">Ich melde mich innerhalb von 24–48h bei Ihnen.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                                    placeholder="Ihr Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    E-Mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                                    placeholder="ihre@email.de"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                                Website *
                            </label>
                            <input
                                type="url"
                                id="website"
                                required
                                value={formData.website}
                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                                placeholder="https://ihre-website.de"
                            />
                        </div>

                        <div>
                            <label htmlFor="branche" className="block text-sm font-medium text-gray-700 mb-2">
                                Branche / Angebot (1 Satz) *
                            </label>
                            <input
                                type="text"
                                id="branche"
                                required
                                value={formData.branche}
                                onChange={(e) => setFormData({ ...formData, branche: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                                placeholder="z.B. Steuerberater für Startups in Hamburg"
                            />
                        </div>

                        <div>
                            <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                                Nachricht (optional)
                            </label>
                            <textarea
                                id="nachricht"
                                rows={4}
                                value={formData.nachricht}
                                onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm resize-none"
                                placeholder="Was möchten Sie uns mitteilen?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <LoadingIcon className="w-5 h-5" />
                                    Wird gesendet...
                                </>
                            ) : (
                                <>
                                    Anfrage senden
                                    <ArrowRightIcon className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-700 text-sm">{error}</p>
                            </div>
                        )}

                        <p className="text-xs text-gray-500 text-center">
                            Mit dem Absenden erklären Sie sich mit unserer{' '}
                            <a href="/datenschutz" className="underline hover:text-black">
                                Datenschutzerklärung
                            </a>{' '}
                            einverstanden.
                        </p>
                    </form>
                )}
            </FadeIn>
        </section>
    );
};

// Main Page Component
export default function AISichtbarkeitsUpgradeHamburgPage() {
    return (
        <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />

            <main>
                <HeroSection />
                <ProblemSection />
                <ExplanationSection />
                <OfferSection />
                <ProcessSection />
                <ProofSection />
                <AudienceSection />
                <AboutMeSection />
                <TestimonialsSection />
                <PricingSection />
                <FinalCTASection />
                <ContactFormSection />
            </main>

            <Footer />
        </div>
    );
}

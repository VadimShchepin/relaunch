'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon, LoadingIcon } from '@/components/ui/Icons';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';

// Hero Section
const HeroSection: React.FC = () => (
    <section className="relative pt-32 pb-20 md:pt-52 lg:pt-44 md:pb-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl z-0"></div>
        <AntigravityBackground />
        <div className="relative z-10">
            <FadeIn>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                    Wirst du genannt,<br />wenn KI gefragt wird?
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
                    Ich helfe Hamburger Unternehmen dabei, in ChatGPT, Perplexity und Google AI empfohlen zu werden – und messe, ob daraus echte Anfragen entstehen.
                </p>

                {/* Micro-proof strip */}
                <div className="bg-white border-2 border-brand-accent rounded-xl p-6 mb-10 max-w-2xl shadow-sm">
                    <p className="text-sm font-bold text-brand-accent mb-3">Praxis statt Theorie:</p>
                    <div className="space-y-2 text-sm text-gray-800">
                        <div className="font-medium">• KinderAlbum: 300+ Nutzer, Anfragen über ChatGPT</div>
                        <div className="font-medium">• Blitz: bessere Conversion durch klare Zielgruppe</div>
                        <div className="font-medium">• Eigene Projekte & Tests</div>
                    </div>
                </div>

                {/* Software background credibility */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 mb-10 max-w-2xl">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold text-black">Ich komme aus Software-Architektur, nicht aus Marketing.</span><br />
                        Weniger "Marketing-Magie", mehr nachvollziehbare Signale.
                    </p>
                </div>

                {/* Trust Bullets */}
                <div className="space-y-3 mb-10">
                    <div className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                        <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span><strong className="text-black">#1 bei Google</strong> für "AISEO Hamburg"</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                        <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span><strong className="text-black">Praxis-Cases:</strong> lokale Unternehmen + eigene Projekte (u.a. DSGVO-Schulfotos/KinderAlbum)</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                        <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span><strong className="text-black">Technik + Content:</strong> nicht nur Texte – auch Struktur, Schema, Tracking, Performance</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="#kontakt" primary className="!py-4 !px-6 !pl-8 group">
                        <span className="relative z-10 flex items-center gap-3">
                            Kostenlose Kurzanalyse anfragen
                            <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
                        </span>
                    </Button>
                    <Button href="#cases" text="Beispiele ansehen" className="!py-4 !px-8" />
                </div>

                {/* Disclaimer */}
                <p className="mt-6 text-sm text-gray-500 max-w-lg">
                    Keine Sales-Show. 15 Minuten, klare Einschätzung, ob das Thema bei euch überhaupt Sinn macht.
                </p>
            </FadeIn>
        </div>
    </section>
);

// Problem Section
const ProblemSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-8">
                SEO bringt Traffic.<br />
                <span className="text-gray-400">KI bringt Empfehlungen.</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed max-w-2xl mb-12">
                <p>Viele Websites sind "auffindbar" – aber werden von KI nicht als Quelle genannt.</p>
                <p>LLMs empfehlen nicht die schönste Seite, sondern die, die sie verstehen und der sie vertrauen.</p>
                <p>Das lässt sich beeinflussen – mit klarer Struktur, Signalen und Content, der für KI "zitierbar" ist.</p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-6">
                {[
                    { title: "KI sucht nicht", desc: "sie antwortet" },
                    { title: "Antworten basieren", desc: "auf Quellen + Vertrauen" },
                    { title: "Vertrauen ist", desc: "bauen, nicht raten" },
                ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5">
                        <p className="font-semibold text-black">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Target Audience Section
const AudienceSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-12">
                Passt gut, wenn…
            </h2>

            {/* Fits */}
            <div className="space-y-4 mb-16">
                {[
                    "Hamburger Dienstleister / lokale Unternehmen (B2C oder B2B lokal)",
                    "ihr habt bereits Website/Brand, aber \"KI nennt uns nie\"",
                    "ihr wollt nicht nur Reichweite, sondern Anfragen",
                    "ihr könnt Entscheidungen treffen (oder sitzt nah dran)",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                        <span className="text-brand-accent font-bold text-xl leading-none mt-0.5">✓</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Doesn't Fit */}
            <h3 className="text-xl font-semibold text-gray-400 mb-6">Passt nicht, wenn…</h3>
            <div className="space-y-4">
                {[
                    "ihr wollt nur \"AI-SEO Hacks\" ohne Umsetzung",
                    "ihr sucht eine Agentur, die einfach 50 Blogposts rausballert",
                    "ihr wollt kurzfristige Tricks statt saubere Basis",
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-500">
                        <span className="text-red-400 font-bold text-xl leading-none mt-0.5">✗</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Approach Section (4 Steps)
const APPROACH_STEPS = [
    {
        num: "01",
        title: "Sichtbarkeits-Check in LLMs",
        desc: "Welche Fragen führen zu euch – und wo taucht ihr nicht auf?"
    },
    {
        num: "02",
        title: "Website-Signale & Struktur",
        desc: "E-E-A-T, Informationsarchitektur, interne Verlinkung, Entities, Schema, Performance."
    },
    {
        num: "03",
        title: "Content, der zitiert wird",
        desc: "Nicht \"mehr Content\", sondern die richtigen Seiten: Expertenseite, Angebot, FAQ, lokale Beweise."
    },
    {
        num: "04",
        title: "Messung & Iteration",
        desc: "Tracking der Anfragen + Monitoring der KI-Nennungen (mit konkreten Prompts/Checks)."
    }
];

const ApproachSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
                So arbeite ich
            </h2>
            <p className="text-gray-500 mb-12">(ohne Bauchgefühl)</p>

            <div className="grid sm:grid-cols-2 gap-6">
                {APPROACH_STEPS.map((step, i) => (
                    <FadeIn key={i} delay={i * 75}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                            <div className="text-brand-accent font-bold text-sm mb-3">{step.num}</div>
                            <h3 className="font-semibold text-black text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Offer Section
const OfferSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            {/* Urgency Block */}
            <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Warum jetzt?</h3>
                <div className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-sm">
                    <div className="space-y-3 text-gray-800">
                        <p className="font-medium">KI-Antworten stabilisieren sich gerade.</p>
                        <p className="font-medium">Wer heute als Quelle gelernt wird, bleibt es oft langfristig.</p>
                        <p className="font-bold text-green-700">Später "nachziehen" ist deutlich schwerer.</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[10px] mb-4 block">Kostenlos</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-6 leading-tight">
                        Kostenlose Kurzanalyse<br />
                        <span className="text-gray-500">(15 Minuten)</span>
                    </h2>

                    <div className="space-y-4 mb-8">
                        {[
                            "Kurzer Blick auf eure Website + KI-Nennungen",
                            "3 klare Punkte: Was blockiert euch? Was bringt am meisten? Was ist unnötig?",
                            "Wenn's passt: nächster Schritt als konkreter Vorschlag"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-gray-300">
                                <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-400 mb-4 text-sm">Unsicher, ob KI euch überhaupt empfiehlt?</p>
                    <Button href="#kontakt" primary text="Kurzanalyse anfragen" className="!py-4 !px-8" />
                </div>
            </div>
        </FadeIn>
    </section>
);

// Cases Section
const CASES = [
    {
        name: "KinderAlbum / DSGVO-Schulfotos",
        url: "https://dsgvoschulfotos.de/",
        problem: "DSGVO macht \"Fotos teilen\" fast unmöglich",
        result: "300+ aktive Nutzer, mehrere Schulen, Anfragen über ChatGPT",
        learning: "Vertrauen + klare Struktur schlägt Ads"
    },
    {
        name: "Blitz (lokale Dienstleistung)",
        url: "https://www.blitz-hamburg.de/",
        problem: "Fokus: Zielgruppe, klare Preise, lokale Relevanz",
        result: "Bessere Conversion / klare Positionierung",
        learning: "Klarheit über Zielgruppe schlägt breites Marketing"
    },
    {
        name: "Solovei (System & Markt)",
        url: "https://www.solovei-beauty.com/en",
        problem: "System perfekt gebaut, Modell angepasst",
        result: "Markt entscheidet anders als erwartet",
        learning: "Transparenz über Learnings baut Vertrauen"
    }
];

const CasesSection: React.FC = () => (
    <section id="cases" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-12">
                Beispiele aus der Praxis
            </h2>

            <div className="space-y-6">
                {CASES.map((c, i) => (
                    <FadeIn key={i} delay={i * 75}>
                        <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-brand-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-black text-lg group-hover:text-brand-accent transition-colors">{c.name}</h3>
                                <div className="text-brand-accent group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium">
                                    Website ansehen →
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-400 font-medium mb-1">Problem</p>
                                    <p className="text-gray-700">{c.problem}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 font-medium mb-1">Ergebnis</p>
                                    <p className="text-gray-700">{c.result}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 font-medium mb-1">Learning</p>
                                    <p className="text-gray-700">{c.learning}</p>
                                </div>
                            </div>
                        </a>
                    </FadeIn>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Why Me Section
const WhyMeSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (data.ok) {
                setSubmitted(true);
                setEmail('');
            } else {
                setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
            }
        } catch {
            setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
                    Warum ich das kann
                </h2>

                <div className="space-y-4 mb-10">
                    {[
                        "Senior Software Engineer (Architektur/Qualität, nicht nur Marketing)",
                        "Erfahrung mit Tracking & Daten (Conversion statt Vanity-Metrics)",
                        "Kombi aus Content + Technik (Struktur, Performance, Schema)",
                        "Fokus: Hamburg / lokale Unternehmen"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white border-2 border-brand-accent rounded-xl p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-black mb-3">Immer noch kein Vertrauen?</h3>
                    <p className="text-gray-600 mb-6">
                        Erhalte echte Geschichten, wie andere Businesses es in der Realität machen. Kostenlos, ohne Spam.
                    </p>

                    {submitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckIcon className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="text-green-800 font-medium">Danke! Du erhältst bald echte Praxis-Stories.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="deine@email.de"
                                required
                                className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-brand-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                {isSubmitting ? (
                                    <>
                                        <LoadingIcon className="w-4 h-4" />
                                        Wird gesendet...
                                    </>
                                ) : (
                                    'Echte Stories erhalten'
                                )}
                            </button>
                        </form>
                    )}

                    {error && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                    )}
                </div>
            </FadeIn>
        </section>
    );
};

// FAQ Section
const FAQ_ITEMS = [
    {
        q: "Was ist KI-Sichtbarkeit überhaupt?",
        a: "Genannt und empfohlen werden, wenn KI Fragen beantwortet – in ChatGPT, Perplexity, Google AI."
    },
    {
        q: "Ist das nur SEO?",
        a: "Nein. SEO ist Teil der Basis, aber LLMs bewerten Vertrauen & Struktur anders als klassische Suchmaschinen."
    },
    {
        q: "Wie schnell sieht man Ergebnisse?",
        a: "Je nach Ausgangslage oft erste Effekte in Wochen, Stabilität über Monate."
    },
    {
        q: "Brauchen wir eine neue Website?",
        a: "Meist nicht. Oft reichen klare Angebotsseiten + Struktur + Proof."
    },
    {
        q: "Was kostet das?",
        a: "Einstieg via Kurzanalyse (kostenlos), danach Umsetzung je nach Umfang – Fixpreis oder auf Projektbasis."
    },
    {
        q: "Arbeitest du alleine?",
        a: "Ja. Bei Bedarf mit Spezialisten (Design/Text) auf Projektbasis."
    }
];

const FAQSection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-12">
                Häufige Fragen
            </h2>

            <div className="space-y-6">
                {FAQ_ITEMS.map((item, i) => (
                    <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                        <h3 className="font-semibold text-black mb-2">{item.q}</h3>
                        <p className="text-gray-600">{item.a}</p>
                    </div>
                ))}
            </div>
        </FadeIn>
    </section>
);

// Final CTA Section
const FinalCTASection: React.FC = () => (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-6 leading-tight">
                Willst du wissen, ob KI euch aktuell empfiehlt?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Schick mir eure Website + 1–2 Sätze, was ihr verkauft. Ich sag dir in 15 Minuten, ob das Thema bei euch hebelt – oder ob ihr etwas anderes priorisieren solltet.
            </p>
            <p className="text-gray-500 mb-8 text-sm">Unsicher, ob KI euch überhaupt empfiehlt?</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#kontakt" primary text="Kurzanalyse anfragen" className="!py-4 !px-8" />
                <Button href="/contact" text="Kontakt" className="!py-4 !px-8" />
            </div>
        </FadeIn>
    </section>
);

// Contact Form Section
const ContactFormSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        website: '',
        branche: '',
        ziel: '',
        kurzanalyse: true
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
                    email: '', // Will be collected separately if needed
                    company: formData.website,
                    message: `Website: ${formData.website}\nBranche/Angebot: ${formData.branche}\nZiel: ${formData.ziel}\nKurzanalyse gewünscht: ${formData.kurzanalyse ? 'Ja' : 'Nein'}`
                }),
            });

            const data = await response.json();
            if (data.ok) {
                setSubmitted(true);
            } else {
                setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
            }
        } catch {
            setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="kontakt" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
                    Kurzanalyse anfragen
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
                        <p className="text-gray-600">Ich melde mich innerhalb von 24–48h bei dir.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                placeholder="Dein Name"
                            />
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
                                placeholder="https://deine-website.de"
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
                            <label htmlFor="ziel" className="block text-sm font-medium text-gray-700 mb-2">
                                Ziel
                            </label>
                            <input
                                type="text"
                                id="ziel"
                                value={formData.ziel}
                                onChange={(e) => setFormData({ ...formData, ziel: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                                placeholder="z.B. mehr Anfragen, weniger Abhängigkeit von Ads"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="kurzanalyse"
                                checked={formData.kurzanalyse}
                                onChange={(e) => setFormData({ ...formData, kurzanalyse: e.target.checked })}
                                className="w-5 h-5 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
                            />
                            <label htmlFor="kurzanalyse" className="text-sm text-gray-700">
                                Ich will eine kostenlose Kurzanalyse
                            </label>
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
                            Mit dem Absenden erklärst du dich mit unserer{' '}
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
export default function AISichtbarkeitPage() {
    return (
        <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />

            <main>
                <HeroSection />
                <ProblemSection />
                <AudienceSection />
                <ApproachSection />
                <OfferSection />
                <CasesSection />
                <WhyMeSection />
                <FAQSection />
                <FinalCTASection />
                <ContactFormSection />
            </main>

            <Footer />
        </div>
    );
}

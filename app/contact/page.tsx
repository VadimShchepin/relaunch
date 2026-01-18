'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    // For now, just show success state
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[900px] mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Hast du Fragen zur KI-Sichtbarkeit? Lass uns sprechen.
            </p>
          </FadeIn>
        </section>

        {/* Contact Content */}
        <section className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <FadeIn delay={100}>
              <div className="space-y-10">
                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Direkter Kontakt
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@aiseo.hamburg"
                      className="flex items-center gap-3 text-lg text-black hover:text-brand-accent transition-colors group"
                    >
                      <Icon icon="mdi:email" className="w-5 h-5 text-gray-400 group-hover:text-brand-accent" />
                      hello@aiseo.hamburg
                    </a>
                    <a
                      href="tel:+4917632194754"
                      className="flex items-center gap-3 text-lg text-black hover:text-brand-accent transition-colors group"
                    >
                      <Icon icon="mdi:phone" className="w-5 h-5 text-gray-400 group-hover:text-brand-accent" />
                      +49 176 321 94 754
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Standort
                  </h2>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Icon icon="mdi:map-marker" className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p>Flottbeker Drift 1</p>
                      <p>22607 Hamburg</p>
                      <p className="text-gray-500 mt-2">Fokus: Hamburg & Umgebung</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Social Media
                  </h2>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/vadim-shchepin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all"
                      aria-label="LinkedIn"
                    >
                      <Icon icon="mdi:linkedin" className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/snapsite.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all"
                      aria-label="Instagram"
                    >
                      <Icon icon="mdi:instagram" className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/www_snapsite_me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all"
                      aria-label="X (Twitter)"
                    >
                      <Icon icon="mdi:twitter" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-card border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon icon="mdi:check" className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-gray-600">
                      Deine Nachricht ist bei uns angekommen. Wir melden uns schnellstmöglich bei dir.
                    </p>
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                        placeholder="Dein Name"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                        placeholder="deine@email.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                        placeholder="Dein Unternehmen (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                        placeholder="Erzähle uns von deinem Projekt oder deiner Frage..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Nachricht senden
                          <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Mit dem Absenden erklärst du dich mit unserer{' '}
                      <a href="/datenschutz" className="underline hover:text-black">
                        Datenschutzerklärung
                      </a>{' '}
                      einverstanden.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Quick FAQ CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-black/10">
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Hast du Fragen?
              </h2>
              <p className="text-gray-700 mb-6 max-w-xl">
                Viele Antworten findest du bereits in unseren FAQs.
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-700 transition-colors group"
              >
                Zum FAQ
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

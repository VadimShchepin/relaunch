'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { CheckIcon, ArrowRightIcon, LoadingIcon } from '@/components/ui/Icons';
import { PlatformIconLoop } from '@/components/ui/PlatformIconLoop';

const HeroSection: React.FC = () => (
  <section className="relative pt-28 pb-10 md:pt-40 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
    <FadeIn>
      <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-4 py-2 mb-7">
        <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
        <span className="text-sm font-medium text-brand-accent">Für Hamburger Unternehmen</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-5 leading-[1.05]">
        Wird Ihr Unternehmen von <span className="text-brand-accent">ChatGPT</span>
        <br />
        als Anbieter für <span className="text-brand-accent">Hamburg</span> genannt?
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-5 leading-relaxed">
        Kunden fragen KI-Systeme längst nach Empfehlungen. Viele Websites werden dabei nicht berücksichtigt – obwohl das
        Angebot gut ist.
      </p>

      <p className="text-base text-gray-500 mb-8 max-w-xl">
        Für Dienstleister, Praxen und lokale Betriebe mit bestehender Website (Hamburg & Umgebung).
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <Button href="#kontakt" primary className="!py-4 !px-6 !pl-8 group">
          <span className="relative z-10 flex items-center gap-3">
            Kostenlose AI-Sichtbarkeits-Prüfung
            <PlatformIconLoop className="!p-0" iconClassName="!w-5 !h-5" />
          </span>
        </Button>
      </div>

      <div className="mt-7 flex items-center gap-4 text-sm text-gray-500">
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

const ProblemSection: React.FC = () => (
  <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
    <FadeIn>
      <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">
        Das Problem
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-7 leading-tight">
        Warum KI Ihre Website
        <br />
        <span className="text-gray-400">oft nicht empfiehlt</span>
      </h2>

      <div className="bg-white border border-gray-100 rounded-2xl p-7 md:p-8 mb-8 shadow-sm">
        <p className="text-lg text-gray-700 mb-5 leading-relaxed">
          Nicht wegen schlechter Qualität – sondern weil KI-Systeme Inhalte anders interpretieren als Google.
        </p>

        <div className="space-y-4">
          {[
            'Leistungen sind für KI nicht eindeutig zuzuordnen',
            'Hamburg-Bezug (Stadtteile / Einzugsgebiet) ist zu schwach oder fehlt',
            'Seiten liefern Marketing – aber keine klaren Antworten',
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div className="flex items-start gap-3 text-gray-700">
                <span className="text-red-400 font-bold text-lg leading-none mt-0.5">•</span>
                <span>{item}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
        <p className="text-lg font-semibold text-red-800">Ergebnis: Andere Betriebe werden genannt – Ihrer nicht.</p>
      </div>
    </FadeIn>
  </section>
);

const OfferSection: React.FC = () => (
  <section id="angebot" className="py-14 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
    <FadeIn>
      <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">
        Das Upgrade
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-black mb-3">
        AI-Sichtbarkeits-Upgrade (einmalig)
      </h2>

      <p className="text-lg text-gray-600 mb-7">
        Klarer Scope. Kein Abo. Keine Agenturbindung.
      </p>

      <div className="grid gap-4 mb-10">
        {[
          {
            title: '1) Analyse',
            body: 'Ich prüfe, ob und wie Ihr Unternehmen in ChatGPT/Perplexity/Google AI auftaucht – und warum (noch) nicht.',
          },
          {
            title: '2) Website-Upgrade',
            body: 'Startseite + 2 gezielte Unterseiten (Leistung + Vertrauen). Inhalte so strukturiert, dass KI Systeme sie zuordnen können.',
          },
          {
            title: '3) Technische Basis',
            body: 'Strukturierte Daten (Schema), saubere Struktur, interne Verlinkung – ohne Overengineering.',
          },
          {
            title: '4) Indexierung',
            body: 'Search Console Check + saubere Indexierung der neuen Seiten.',
          },
          {
            title: '5) Erklärung',
            body: 'Sie verstehen, was geändert wurde und warum es relevant ist.',
          },
        ].map((c, i) => (
          <FadeIn key={i} delay={i * 70}>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-accent/50 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-black text-lg mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
        <p className="text-sm text-gray-600">
          <strong className="text-gray-800">Wichtig:</strong> Keine Ranking-/Lead-Garantie. Ziel ist, dass KI-Systeme Ihr
          Angebot technisch & inhaltlich korrekt verstehen können.
        </p>
      </div>
    </FadeIn>
  </section>
);

const ProofSection: React.FC = () => (
  <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
    <FadeIn>
      <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">
        Proof
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-6">
        Aktuelle Signale aus der Praxis
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-7">
        <div className="relative group overflow-hidden rounded-2xl border border-gray-100 bg-white">
          <img
            src="/images/reality/growth.webp"
            alt="Impressionen nach AI-Optimierung"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="relative group overflow-hidden rounded-2xl border border-gray-100 bg-white">
          <img
            src="/images/ChatGPT visits.webp"
            alt="Besucher durch ChatGPT-Empfehlungen"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {['Erwähnungen in ChatGPT / Perplexity', 'Echte Anfragen per E-Mail', 'Erste lokale Sichtbarkeitssignale'].map(
          (item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-700">
              <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0" />
              <span>{item}</span>
            </div>
          )
        )}
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
        <p className="text-sm text-gray-500">
          <strong className="text-gray-700">Hinweis:</strong> Ergebnisse hängen von Markt & Wettbewerb ab. Es werden keine
          Rankings oder Leads garantiert.
        </p>
      </div>
    </FadeIn>
  </section>
);

const PricingSection: React.FC = () => (
  <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
    <FadeIn>
      <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Preis</span>

      <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">AI-Sichtbarkeits-Upgrade</h2>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-5xl md:text-6xl font-bold text-brand-accent">1.500 €</span>
            <span className="text-gray-400">netto</span>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-300 mb-7">
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
              Wenn das Upgrade für Ihre Situation keinen sinnvollen Mehrwert bringt, sage ich das offen – und setze es nicht um.
            </p>
          </div>

          <Button href="#kontakt" primary text="Kostenlose Prüfung anfragen" className="!py-4 !px-8" />
        </div>
      </div>
    </FadeIn>
  </section>
);

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    branche: '',
    nachricht: '',
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
          message: `[AI-Sichtbarkeits-Check Hamburg]\n\nWebsite: ${formData.website}\nBranche/Angebot: ${formData.branche}\n\nNachricht:\n${formData.nachricht}`,
        }),
      });

      const data = await response.json();
      if (data.ok) setSubmitted(true);
      else setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-14 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-200">
      <FadeIn>
        <span className="text-brand-accent font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 block">Kontakt</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-4">
          Kostenlose AI-Sichtbarkeits-Prüfung
        </h2>
        <p className="text-gray-600 mb-8">Kurz & unverbindlich. Ich antworte in 24–48h.</p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Danke!</h3>
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
                Angebot (1 Satz) *
              </label>
              <input
                type="text"
                id="branche"
                required
                value={formData.branche}
                onChange={(e) => setFormData({ ...formData, branche: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                placeholder="z.B. Schädlingsbekämpfung in Hamburg-Eimsbüttel"
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
                placeholder="Optional: Stadtteil / Einzugsgebiet, wichtigste Leistung, Zielkunden"
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

export default function AISichtbarkeitsUpgradeHamburgPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main>
        <HeroSection />
        <ProblemSection />
        <OfferSection />
        <ProofSection />
        <PricingSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}
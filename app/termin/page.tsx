'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckIcon, LoadingIcon, ArrowRightIcon } from "@/components/ui/Icons";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    slot1: "",
    slot2: "",
    daytime: "",
    topic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Earliest selectable date: tomorrow
  const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        window.location.href = '/termin/danke';
      } else {
        setError(getErrorMessage(data.error));
      }
    } catch (error) {
      setError("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getErrorMessage = (error: string) => {
    switch (error) {
      case 'MISSING_FIELDS':
        return 'Bitte fülle Name, E-Mail und mindestens einen Wunschtermin aus.';
      case 'INVALID_EMAIL':
        return 'Bitte gib eine gültige E-Mail-Adresse ein.';
      case 'SEND_FAILED':
        return 'Die Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut.';
      case 'SERVER_MISCONFIG':
        return 'Technischer Fehler. Bitte kontaktiere uns direkt unter hello@aiseo.hamburg.';
      default:
        return 'Ein unbekannter Fehler ist aufgetreten.';
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all";

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[900px] mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-black mb-6">
              Erstgespräch vereinbaren
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Schlag zwei Wunschtermine vor. Wir bestätigen per E-Mail und schicken dir den Google-Meet-Link. 15 Minuten, kostenlos und unverbindlich.
            </p>
          </FadeIn>
        </section>

        {/* Booking Content */}
        <section className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* What to expect */}
            <FadeIn delay={100}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Was dich erwartet
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Wir schauen live, ob du in ChatGPT und Perplexity genannt wirst",
                      "Du erfährst, wer in deiner Branche stattdessen empfohlen wird",
                      "Konkrete nächste Schritte, kein Verkaufsdruck",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-gray-700">
                        <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-card border border-gray-100 p-6">
                  <p className="text-sm text-gray-600">
                    Lieber schreiben statt sprechen?{' '}
                    <a href="/contact" className="underline hover:text-black">
                      Schick uns eine Nachricht
                    </a>
                    . Ein ausgearbeitetes Audit gehört nicht in diesen Call, das ist der
                    bezahlte Schritt danach. Was die{' '}
                    <a href="/preise" className="underline hover:text-black">
                      Pakete
                    </a>{' '}
                    umfassen, siehst du auf der Preise-Seite.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Booking Form */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-card border border-gray-100 p-8 md:p-10">
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
                      className={inputClass}
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
                      className={inputClass}
                      placeholder="deine@email.de"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="slot1" className="block text-sm font-medium text-gray-700 mb-2">
                        1. Wunschtermin *
                      </label>
                      <input
                        type="date"
                        id="slot1"
                        required
                        min={minDate}
                        value={formData.slot1}
                        onChange={(e) => setFormData({ ...formData, slot1: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="slot2" className="block text-sm font-medium text-gray-700 mb-2">
                        2. Wunschtermin
                      </label>
                      <input
                        type="date"
                        id="slot2"
                        min={minDate}
                        value={formData.slot2}
                        onChange={(e) => setFormData({ ...formData, slot2: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="daytime" className="block text-sm font-medium text-gray-700 mb-2">
                      Bevorzugte Tageszeit
                    </label>
                    <select
                      id="daytime"
                      value={formData.daytime}
                      onChange={(e) => setFormData({ ...formData, daytime: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Keine Präferenz</option>
                      <option value="Vormittag (9–12 Uhr)">Vormittag (9–12 Uhr)</option>
                      <option value="Mittag (12–15 Uhr)">Mittag (12–15 Uhr)</option>
                      <option value="Nachmittag (15–18 Uhr)">Nachmittag (15–18 Uhr)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                      Worum geht es?
                    </label>
                    <textarea
                      id="topic"
                      rows={3}
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Kurz dein Anliegen (optional)"
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
                        Termin anfragen
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
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckIcon, LoadingIcon } from "@/components/ui/Icons";
import { trackOpenAILead } from "@/lib/openai-ads";

/* ==================================================================== *
 *  /termin
 *  --------------------------------------------------------------------
 *  Eight inputs became six. Dropped: `company` and `phone`. The page
 *  promises a confirmation by e-mail with a Google Meet link, so a phone
 *  number is never used, and the company is answerable in one line of
 *  "Worum geht es". Both keys stay in the payload as empty strings:
 *  app/api/booking/route.ts prints them conditionally and must not be
 *  touched.
 *
 *  What else changed:
 *   - "Was dich erwartet" moved into the hero. Three lines that justify
 *     six fields have to be readable before the form, not beside it.
 *   - the two date inputs are named by what they are for (first and
 *     second choice) and say why a second one helps.
 *   - one filled button. Everything else on the page is a text link.
 *   - the three steps after sending are spelled out, so nobody has to
 *     guess whether a calendar invite is about to appear.
 * ==================================================================== */

const EXPECTATIONS = [
  "Wir schauen live, ob du in ChatGPT und Perplexity genannt wirst",
  "Du erfährst, wer in deiner Branche stattdessen empfohlen wird",
  "Konkrete nächste Schritte, kein Verkaufsdruck",
];

const AFTER = [
  "Du schlägst zwei Wunschtermine vor.",
  "Ich bestätige per E-Mail und schicke den Google-Meet-Link.",
  "15 Minuten Call, danach entscheidest du in Ruhe.",
];

const FIELD =
  "w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-body text-brand-text placeholder:text-brand-subtle focus:border-brand-accent-deep focus:outline-none focus:ring-2 focus:ring-brand-accent-deep/25";

const LABEL = "block text-meta font-medium text-brand-text";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    /* Not asked for any more, kept so the API payload is unchanged. */
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

  const getErrorMessage = (code: string) => {
    switch (code) {
      case 'MISSING_FIELDS':
        return 'Bitte fülle Name, E-Mail und mindestens einen Wunschtermin aus.';
      case 'INVALID_EMAIL':
        return 'Bitte gib eine gültige E-Mail-Adresse ein.';
      case 'SEND_FAILED':
        return 'Die Anfrage konnte nicht gesendet werden. Bitte versuche es später erneut.';
      case 'SERVER_MISCONFIG':
        return 'Technischer Fehler. Schreib mir direkt an hello@aiseo.hamburg.';
      default:
        return 'Ein unbekannter Fehler ist aufgetreten.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.ok) {
        await trackOpenAILead(formData.email);
        window.location.href = '/termin/danke';
      } else {
        setError(getErrorMessage(data.error));
      }
    } catch {
      setError("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-brand-surface">
        {/* Hero. The reason to fill six fields sits next to the headline,
            not below the form. */}
        <section className="px-6 pt-navbar pb-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <FadeIn className="lg:col-span-7">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                15 Minuten, kostenlos, unverbindlich
              </p>
              <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                Erstgespräch vereinbaren
              </h1>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                Schlag zwei Wunschtermine vor. Ich bestätige per E-Mail und schicke dir
                den Google-Meet-Link. Kein Kalender-Tool, kein Konto, keine Bindung.
              </p>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <div className="rounded-card border border-brand-line bg-white px-4 py-6 md:p-6">
                <h2 className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Was dich erwartet
                </h2>
                <ul className="mt-4 border-t border-brand-hairline">
                  {EXPECTATIONS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-brand-hairline py-3 text-meta text-brand-muted"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-micro text-brand-subtle">
                  Ein ausgearbeitetes Audit gehört nicht in diesen Call, das ist der
                  bezahlte Schritt danach. Was die{" "}
                  <Link
                    href="/preise"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Pakete
                  </Link>{" "}
                  umfassen, siehst du auf der Preise-Seite.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Form plus the three steps that follow it */}
        <section className="px-6 pb-block md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <FadeIn className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-card border border-brand-line bg-white p-5 md:p-8"
              >
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Sechs Felder, davon drei Pflicht
                </p>

                <div className="mt-flow space-y-flow">
                  <div className="grid gap-flow sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={LABEL}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`mt-1.5 ${FIELD}`}
                        placeholder="Vor- und Nachname"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={LABEL}>
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`mt-1.5 ${FIELD}`}
                        placeholder="name@firma.de"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="grid gap-flow sm:grid-cols-2">
                      <div>
                        <label htmlFor="slot1" className={LABEL}>
                          Wunschtermin
                        </label>
                        <input
                          type="date"
                          id="slot1"
                          name="slot1"
                          required
                          min={minDate}
                          value={formData.slot1}
                          onChange={(e) => setFormData({ ...formData, slot1: e.target.value })}
                          className={`mt-1.5 ${FIELD}`}
                        />
                      </div>
                      <div>
                        <label htmlFor="slot2" className={LABEL}>
                          Ausweichtermin
                        </label>
                        <input
                          type="date"
                          id="slot2"
                          name="slot2"
                          min={minDate}
                          value={formData.slot2}
                          onChange={(e) => setFormData({ ...formData, slot2: e.target.value })}
                          className={`mt-1.5 ${FIELD}`}
                        />
                      </div>
                    </div>
                    <p className="mt-1.5 text-micro text-brand-subtle">
                      Frühestens morgen. Ein zweiter Termin spart uns meist eine
                      Mail-Runde.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="daytime" className={LABEL}>
                      Bevorzugte Tageszeit
                    </label>
                    <select
                      id="daytime"
                      name="daytime"
                      value={formData.daytime}
                      onChange={(e) => setFormData({ ...formData, daytime: e.target.value })}
                      className={`mt-1.5 ${FIELD}`}
                    >
                      <option value="">Keine Präferenz</option>
                      <option value="Vormittag (9 bis 12 Uhr)">Vormittag (9 bis 12 Uhr)</option>
                      <option value="Mittag (12 bis 15 Uhr)">Mittag (12 bis 15 Uhr)</option>
                      <option value="Nachmittag (15 bis 18 Uhr)">Nachmittag (15 bis 18 Uhr)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="topic" className={LABEL}>
                      Worum geht es?
                    </label>
                    <textarea
                      id="topic"
                      name="topic"
                      rows={3}
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className={`mt-1.5 resize-none ${FIELD}`}
                      placeholder="Firma und Website-Adresse reichen. Damit sehe ich vor dem Call nach, ob KI dich nennt."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-stack inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent-deep px-6 py-3.5 text-body font-semibold text-white transition-colors hover:bg-brand-accent-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingIcon className="h-5 w-5" />
                      Wird gesendet
                    </>
                  ) : (
                    <>
                      Termin anfragen
                      <span aria-hidden="true">&rarr;</span>
                    </>
                  )}
                </button>

                {error ? (
                  <p
                    role="alert"
                    className="mt-4 rounded-lg border border-brand-orange/40 bg-brand-orange/5 px-4 py-3 text-meta text-brand-orange"
                  >
                    {error}
                  </p>
                ) : null}

                <p className="mt-4 text-micro text-brand-subtle">
                  Pflicht sind Name, E-Mail und der erste Wunschtermin. Mit dem Absenden
                  erklärst du dich mit der{" "}
                  <Link
                    href="/datenschutz"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  einverstanden.
                </p>
              </form>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Was danach passiert
              </p>
              <ol className="mt-3 border-t border-brand-line">
                {AFTER.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 border-b border-brand-hairline py-3 text-meta text-brand-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 tabular-nums font-semibold text-brand-accent-ink"
                    >
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-micro text-brand-subtle">
                Lieber schreiben statt sprechen?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                >
                  Schick mir eine Nachricht
                </Link>
                . Und wenn du vorher wissen willst, was in dem Call passiert: die{" "}
                <Link
                  href="/faq"
                  className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                >
                  häufigen Fragen
                </Link>{" "}
                beantworten das Meiste schon vorab.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

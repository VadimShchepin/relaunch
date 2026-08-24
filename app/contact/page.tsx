'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  EmailIcon,
  PhoneIcon,
  MapMarkerIcon,
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  LoadingIcon,
} from "@/components/ui/Icons";

/* ==================================================================== *
 *  /contact
 *  --------------------------------------------------------------------
 *  Four inputs became three. `company` was the one field nobody has to
 *  fill and nobody reads: it is gone from the form and the address I
 *  actually need (the website) is asked for inside the message, where a
 *  visitor is already typing. The key stays in the payload as an empty
 *  string, because app/api/contact/route.ts renders it conditionally and
 *  must not be touched.
 *
 *  The other three defects:
 *   - two primary actions. The old page put mail, phone and a black
 *     submit button at the same weight, so there was no obvious next
 *     step. Now: one filled button, everything else is a link.
 *   - no answer to "when do I hear back". Added, because that is the
 *     single question a contact form leaves open.
 *   - the labels were placeholders in grey-on-white at 14px inside a
 *     grey-on-white border. Labels are now brand-text, help text is
 *     brand-subtle, and required is marked in words, not with a bare
 *     asterisk.
 * ==================================================================== */

const CHANNELS = [
  {
    icon: EmailIcon,
    label: "E-Mail",
    value: "hello@aiseo.hamburg",
    href: "mailto:hello@aiseo.hamburg",
  },
  {
    icon: PhoneIcon,
    label: "Telefon",
    value: "+49 176 321 94 754",
    href: "tel:+4917632194754",
  },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/vadim-shchepin/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.instagram.com/aiseo.hamburg/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://x.com/aiseo.hamburg", label: "X (Twitter)", Icon: TwitterIcon },
];

const FIELD =
  "w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-body text-brand-text placeholder:text-brand-subtle focus:border-brand-accent-deep focus:outline-none focus:ring-2 focus:ring-brand-accent-deep/25";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    /* Kept so the payload shape stays identical to what the API reads. */
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const getErrorMessage = (code: string) => {
    switch (code) {
      case 'MISSING_FIELDS':
        return 'Bitte fülle Name, E-Mail und Nachricht aus.';
      case 'INVALID_EMAIL':
        return 'Bitte gib eine gültige E-Mail-Adresse ein.';
      case 'SEND_FAILED':
        return 'Die E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut.';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.ok) {
        window.location.href = '/contact/danke';
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
        {/* Hero. The form is the primary action, so the hero stays two
            lines and hands over immediately. */}
        <section className="px-6 pt-navbar pb-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto">
            <FadeIn>
              {/* The eyebrow used to repeat the H1 word for word. It now
                  names the two paths the page offers instead. */}
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Schreiben oder sprechen
              </p>
              <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                Kontakt für KI-Sichtbarkeit
              </h1>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">
                Schreib mir, was du vorhast. Ich antworte persönlich, in der Regel am
                selben Werktag, und sage dir ehrlich, ob KI-Sichtbarkeit für dich Sinn
                macht.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Form plus channels */}
        <section className="px-6 pb-block md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
            <FadeIn className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-card border border-brand-line bg-white p-5 md:p-8"
              >
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Drei Felder, eine Nachricht
                </p>

                <div className="mt-flow space-y-flow">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-meta font-medium text-brand-text"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-meta font-medium text-brand-text"
                    >
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
                    <p className="mt-1.5 text-micro text-brand-subtle">
                      Hierauf antworte ich, sonst nutze ich die Adresse für nichts.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-meta font-medium text-brand-text"
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`mt-1.5 resize-none ${FIELD}`}
                      placeholder="Worum geht es? Mit deiner Website-Adresse kann ich vorab nachsehen, ob KI dich heute nennt."
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
                      Nachricht senden
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
                  Alle drei Felder sind Pflicht. Mit dem Absenden erklärst du dich mit der{" "}
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
              <div>
                <h2 className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Direkter Kontakt
                </h2>
                <ul className="mt-3 border-t border-brand-line">
                  {CHANNELS.map((channel) => (
                    <li key={channel.label} className="border-b border-brand-hairline">
                      <a
                        href={channel.href}
                        className="flex items-center gap-3 py-3 transition-colors hover:text-brand-accent-ink"
                      >
                        <channel.icon className="h-5 w-5 shrink-0 text-brand-subtle" />
                        <span>
                          <span className="block text-micro uppercase tracking-eyebrow text-brand-subtle">
                            {channel.label}
                          </span>
                          <span className="block text-body font-medium text-brand-text">
                            {channel.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-micro text-brand-subtle">
                  Lieber gleich sprechen? Der{" "}
                  <Link
                    href="/termin"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    kostenlose 15-Minuten-Call
                  </Link>{" "}
                  ist der schnellste Weg zu einer Einschätzung.
                </p>
              </div>

              <div className="mt-stack">
                <h2 className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Standort
                </h2>
                <div className="mt-3 flex items-start gap-3 border-t border-brand-line pt-3">
                  <MapMarkerIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-subtle" />
                  <div className="text-meta text-brand-muted">
                    <p className="font-medium text-brand-text">Flottbeker Drift 1</p>
                    <p>22607 Hamburg</p>
                    <p className="mt-1 text-brand-subtle">
                      Fokus: Hamburg und Umgebung, Projekte im gesamten DACH-Raum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-stack">
                <h2 className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Social Media
                </h2>
                <div className="mt-3 flex gap-2 border-t border-brand-line pt-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-line text-brand-subtle transition-colors hover:border-brand-edge hover:text-brand-text"
                      aria-label={social.label}
                    >
                      <social.Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ hand-off */}
        <section className="border-t border-brand-line bg-brand-bg px-6 py-stack md:px-12 lg:px-20">
          <div className="max-w-article mx-auto grid items-baseline gap-stack lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-subheading font-semibold text-brand-text">
                Hast du Fragen?
              </h2>
              <p className="mt-2 max-w-measure text-body text-brand-muted">
                Dreizehn Antworten stehen schon fertig da: was KI-Sichtbarkeit ist, wie
                lange sie braucht und wann sie sich nicht lohnt.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-meta font-semibold text-brand-accent-ink hover:gap-2.5"
              >
                Zum FAQ
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

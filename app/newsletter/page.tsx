'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

/* ==================================================================== *
 *  /newsletter
 *  --------------------------------------------------------------------
 *  One field, one button, and copy that is finally German. The old page
 *  shipped "Jederzeit abmeldest.", "stay im Dunkeln" and "Ich beweis es
 *  dir." on a site that sells clarity, and it never said what the
 *  newsletter actually contains or how often it arrives, which are the
 *  only two questions a signup form has to answer.
 *
 *  Layout follows the rest of this branch: asymmetric, pitch and form on
 *  the reading column, the contents list in the gutter card. The old
 *  version centred a 7rem headline over a 448px column, which left the
 *  page 1.783px tall for 124 words.
 *
 *  The API contract is untouched: POST /api/newsletter/subscribe with
 *  { email }, Brevo double opt-in.
 * ==================================================================== */

const CONTENTS = [
  'Was in echten Projekten passiert ist, mit Zahlen und Datum.',
  'Welche Änderung nichts gebracht hat. Die steht auch drin.',
  'Wenn ChatGPT, Perplexity oder Copilot ihre Auswahl ändern.',
];

const FIELD =
  'w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-body text-brand-text placeholder:text-brand-subtle focus:border-brand-accent-deep focus:outline-none focus:ring-2 focus:ring-brand-accent-deep/25';

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
        setMessage('Prüf dein Postfach, die Bestätigung ist unterwegs.');
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

      <main className="min-h-screen bg-brand-surface">
        <section className="px-6 pt-navbar pb-block md:px-12 lg:px-20">
          {status === 'success' ? (
            <div className="max-w-article mx-auto">
              <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                Ein Schritt fehlt noch
              </p>
              <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                Fast fertig.
              </h1>
              <p className="mt-flow max-w-measure text-lead text-brand-muted">{message}</p>
              <p className="mt-4 max-w-measure text-body text-brand-subtle">
                Erst nach dem Klick in der Bestätigungsmail bist du eingetragen. Das ist
                das doppelte Opt-in, und es ist der Grund, warum diese Liste keine
                Karteileichen enthält.
              </p>
              <div className="mt-stack flex flex-wrap gap-x-stack gap-y-2 border-t border-brand-line pt-4 text-meta">
                <Link href="/" className="text-brand-muted hover:text-brand-text">
                  Zur Startseite
                </Link>
                <Link href="/ai-sichtbarkeit" className="text-brand-muted hover:text-brand-text">
                  KI-Sichtbarkeit
                </Link>
                <Link href="/contact" className="text-brand-muted hover:text-brand-text">
                  Kontakt
                </Link>
              </div>
            </div>
          ) : (
            <div className="max-w-article mx-auto grid items-start gap-stack lg:grid-cols-12 lg:gap-block">
              <div className="lg:col-span-7">
                <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                  Newsletter
                </p>
                <h1 className="mt-3 text-title md:text-display font-semibold text-brand-text">
                  Kein Bullshit.
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Du bekommst echte Einblicke, wie KI-Systeme Unternehmen wirklich
                  empfehlen. Nicht die Theorie, sondern was in laufenden Projekten
                  funktioniert hat und was nicht.
                </p>
                <p className="mt-4 max-w-measure text-body text-brand-subtle">
                  Unregelmäßig, meist ein bis zwei Mal im Monat. Kein Verkaufstext, keine
                  Weitergabe deiner Adresse, keine dritte Erinnerungsmail.
                </p>

                <form onSubmit={handleSubmit} className="mt-stack max-w-narrow">
                  <label htmlFor="newsletter-email" className="block text-meta font-medium text-brand-text">
                    E-Mail
                  </label>
                  <div className="mt-1.5 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      id="newsletter-email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@firma.de"
                      required
                      disabled={status === 'loading'}
                      className={`sm:flex-1 ${FIELD} disabled:opacity-60`}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent-deep px-6 py-3 text-body font-semibold text-white transition-colors hover:bg-brand-accent-ink disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'loading' ? 'Wird gesendet' : 'Anmelden'}
                      {status === 'loading' ? null : <span aria-hidden="true">&rarr;</span>}
                    </button>
                  </div>
                  {message ? (
                    <p
                      role="alert"
                      className={`mt-3 text-meta ${
                        status === 'error' ? 'text-brand-orange' : 'text-brand-accent-ink'
                      }`}
                    >
                      {message}
                    </p>
                  ) : null}
                  <p className="mt-3 text-micro text-brand-subtle">
                    Doppeltes Opt-in: du bekommst zuerst eine Bestätigungsmail. Abmelden
                    geht mit einem Klick in jeder Ausgabe. Details in der{' '}
                    <Link
                      href="/datenschutz"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </form>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-card border border-brand-line bg-white px-4 py-6 md:p-6">
                  <p className="text-micro font-semibold uppercase tracking-eyebrow text-brand-subtle">
                    Woraus die Mails bestehen
                  </p>
                  <ul className="mt-4 border-t border-brand-hairline">
                    {CONTENTS.map((item, i) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-brand-hairline py-3 text-meta text-brand-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 tabular-nums font-semibold text-brand-accent-ink"
                        >
                          {i + 1}.
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-micro text-brand-subtle">
                    Getestet wird zuerst an eigenen Seiten: 800 KI-Zitate in drei Monaten,
                    nachzulesen mit Quelle und Datum auf{' '}
                    <Link
                      href="/ergebnisse"
                      className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                    >
                      Ergebnisse
                    </Link>
                    .
                  </p>
                </div>

                <p className="mt-flow text-micro text-brand-subtle">
                  Kein Interesse an Mails? Die Guides stehen offen im{' '}
                  <Link
                    href="/wissen"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    Wissen-Bereich
                  </Link>
                  , und für konkrete Fragen gibt es den{' '}
                  <Link
                    href="/termin"
                    className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4"
                  >
                    kostenlosen Call
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

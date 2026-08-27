'use client';

import React, { useState } from 'react';
import { ArrowRightIcon, CheckIcon, LoadingIcon } from '@/components/ui/Icons';

/* ---------------------------------------------------------------------------
   Die zwei Formulare der Seite, ausgelagert aus der Route. Vorher stand
   'use client' ueber der ganzen Seite, wegen dieser beiden useState-Paare.
   Jetzt rendert der Server H1, Belege und FAQ, und nur die Felder sind Client.

   Payloads und Endpunkte bleiben unveraendert (/api/contact und
   /api/newsletter/subscribe), damit nichts an der Zustellung kippt.
--------------------------------------------------------------------------- */

const FIELD =
  'w-full rounded-card border border-brand-line bg-white px-4 py-3 text-meta text-brand-text placeholder:text-brand-subtle transition-colors focus:border-brand-accent-ink focus:outline-none';
const LABEL = 'mb-1.5 block text-micro uppercase tracking-eyebrow text-brand-subtle';

export const KurzanalyseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    branche: '',
    ziel: '',
    kurzanalyse: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          message: `Website: ${formData.website}\nBranche/Angebot: ${formData.branche}\nZiel: ${formData.ziel}\nKurzanalyse gewünscht: ${formData.kurzanalyse ? 'Ja' : 'Nein'}`,
        }),
      });

      const data = await response.json();
      if (data.ok) window.location.href = '/contact/danke';
      else setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-flow">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={FIELD}
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={FIELD}
            placeholder="deine@email.de"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="website" className={LABEL}>
          Website
        </label>
        <input
          type="url"
          id="website"
          required
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          className={FIELD}
          placeholder="https://deine-website.de"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="branche" className={LABEL}>
          Branche und Angebot in einem Satz
        </label>
        <input
          type="text"
          id="branche"
          required
          value={formData.branche}
          onChange={(e) => setFormData({ ...formData, branche: e.target.value })}
          className={FIELD}
          placeholder="z. B. Steuerberater für Startups in Hamburg"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="ziel" className={LABEL}>
          Ziel, optional
        </label>
        <input
          type="text"
          id="ziel"
          value={formData.ziel}
          onChange={(e) => setFormData({ ...formData, ziel: e.target.value })}
          className={FIELD}
          placeholder="z. B. mehr Anfragen, weniger Abhängigkeit von Ads"
        />
      </div>

      <label htmlFor="kurzanalyse" className="mt-4 flex items-center gap-3 text-meta text-brand-muted">
        <input
          type="checkbox"
          id="kurzanalyse"
          checked={formData.kurzanalyse}
          onChange={(e) => setFormData({ ...formData, kurzanalyse: e.target.checked })}
          className="h-4 w-4 rounded border-brand-line text-brand-accent-ink focus:ring-brand-accent-ink"
        />
        Ich will die kostenlose Kurzanalyse
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-stack flex w-full items-center justify-center gap-2 rounded-full bg-brand-night px-6 py-4 text-base font-medium text-white transition-colors hover:bg-brand-accent-deep disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <LoadingIcon className="w-5 h-5" />
            Wird gesendet
          </>
        ) : (
          <>
            Anfrage senden
            <ArrowRightIcon className="w-4 h-4" />
          </>
        )}
      </button>

      {error && (
        <p role="alert" className="mt-3 border-t border-brand-orange/40 pt-3 text-meta text-brand-orange">
          {error}
        </p>
      )}

      <p className="mt-3 text-micro text-brand-subtle">
        Mit dem Absenden erklärst du dich mit unserer{' '}
        <a href="/datenschutz" className="underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink">
          Datenschutzerklärung
        </a>{' '}
        einverstanden.
      </p>
    </form>
  );
};

export const NewsletterInline: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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

  if (submitted) {
    return (
      <p className="mt-flow flex items-start gap-2 border-t border-brand-line pt-3 text-meta text-brand-muted">
        <CheckIcon className="mt-1 w-3.5 h-3.5 shrink-0 text-brand-accent-ink" />
        Danke. Du bekommst die nächste Praxis-Geschichte per Mail, sobald sie fertig ist.
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-flow flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          E-Mail für die Praxis-Geschichten
        </label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          required
          className={`${FIELD} sm:flex-1`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-accent-deep px-6 py-3 text-meta font-medium text-white transition-colors hover:bg-brand-accent-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <LoadingIcon className="w-4 h-4" />
              Wird gesendet
            </>
          ) : (
            'Geschichten erhalten'
          )}
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-2 text-meta text-brand-orange">
          {error}
        </p>
      )}
    </>
  );
};

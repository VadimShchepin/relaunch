'use client';

import React, { useState } from 'react';
import { ArrowRightIcon, LoadingIcon } from '@/components/ui/Icons';
import { trackOpenAILead } from '@/lib/openai-ads';

/* ---------------------------------------------------------------------------
   Das Formular ist der einzige Teil dieser Seite, der Zustand braucht. Bis zur
   Umstellung lag deshalb ein 'use client' ganz oben auf der Route: Hero, H1 und
   alle Belege hingen an einem JS-Bundle. Jetzt ist nur noch dieses Feld-Set ein
   Client Component, der Rest wird auf dem Server gerendert.

   Feldreihenfolge und Payload sind unveraendert, damit die bestehende
   /api/contact Route und die Weiterleitung auf /contact/danke weiterlaufen.
--------------------------------------------------------------------------- */

const FIELD =
  'w-full rounded-card border border-brand-line bg-white px-4 py-3 text-meta text-brand-text placeholder:text-brand-subtle transition-colors focus:border-brand-accent-ink focus:outline-none';
const LABEL = 'mb-1.5 block text-micro uppercase tracking-eyebrow text-brand-subtle';

export const CheckForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    branche: '',
    nachricht: '',
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
          message: `[AI-Sichtbarkeits-Check Hamburg]\n\nWebsite: ${formData.website}\nBranche/Angebot: ${formData.branche}\n\nNachricht:\n${formData.nachricht}`,
        }),
      });

      const data = await response.json();
      if (data.ok) {
        await trackOpenAILead(formData.email);
        window.location.href = '/contact/danke';
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
            placeholder="Ihr Name"
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
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
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
            placeholder="https://ihre-website.de"
          />
        </div>

        <div>
          <label htmlFor="branche" className={LABEL}>
            Angebot in einem Satz
          </label>
          <input
            type="text"
            id="branche"
            required
            value={formData.branche}
            onChange={(e) => setFormData({ ...formData, branche: e.target.value })}
            className={FIELD}
            placeholder="z. B. Schädlingsbekämpfung Eimsbüttel"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="nachricht" className={LABEL}>
          Nachricht, optional
        </label>
        <textarea
          id="nachricht"
          rows={3}
          value={formData.nachricht}
          onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
          className={`${FIELD} resize-none`}
          placeholder="Stadtteil, wichtigste Leistung, Zielkunden"
        />
      </div>

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
        Mit dem Absenden erklären Sie sich mit unserer{' '}
        <a href="/datenschutz" className="underline decoration-brand-line underline-offset-4 hover:text-brand-accent-ink">
          Datenschutzerklärung
        </a>{' '}
        einverstanden.
      </p>
    </form>
  );
};

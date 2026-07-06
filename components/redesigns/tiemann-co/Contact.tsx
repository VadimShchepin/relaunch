"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { company } from "@/lib/redesigns/tiemann-co/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="kontakt" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-tc-navy">
            Kontakt
          </p>
          <h2 className="mt-4 font-tc-display text-4xl font-light leading-tight text-tc-ink sm:text-5xl">
            Lassen Sie uns über
            <br />
            <span className="italic text-tc-navy">Ihre Immobilie sprechen.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-tc-ink/60">
            Ob Verkauf, Vermietung oder Verwaltung: wir melden uns innerhalb
            eines Werktages mit einem Termin für ein persönliches
            Erstgespräch.
          </p>

          <div className="mt-10 space-y-6">
            <a href={company.phoneHref} className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tc-navy text-tc-powder">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-tc-ink/50">Telefon</span>
                <span className="font-tc-display text-lg text-tc-ink">
                  {company.phone}
                </span>
              </span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tc-navy text-tc-powder">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-tc-ink/50">E-Mail</span>
                <span className="font-tc-display text-lg text-tc-ink">
                  {company.email}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tc-navy text-tc-powder">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-tc-ink/50">Adresse</span>
                <span className="font-tc-display text-lg text-tc-ink">
                  {company.address}
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-sm bg-tc-navy-dark p-8 sm:p-10">
          {sent ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <p className="font-tc-display text-2xl text-stone-50">
                Vielen Dank!
              </p>
              <p className="mt-3 max-w-xs text-sm text-stone-200/70">
                Ihre Anfrage ist eingegangen. Wir melden uns in Kürze bei
                Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-wide text-stone-200/60">
                    Name *
                  </span>
                  <input
                    required
                    type="text"
                    className="w-full border-b border-white/20 bg-transparent py-2 text-stone-50 outline-none transition-colors focus:border-tc-powder"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-wide text-stone-200/60">
                    Telefon
                  </span>
                  <input
                    type="tel"
                    className="w-full border-b border-white/20 bg-transparent py-2 text-stone-50 outline-none transition-colors focus:border-tc-powder"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-wide text-stone-200/60">
                  E-Mail *
                </span>
                <input
                  required
                  type="email"
                  className="w-full border-b border-white/20 bg-transparent py-2 text-stone-50 outline-none transition-colors focus:border-tc-powder"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-wide text-stone-200/60">
                  Ihr Anliegen
                </span>
                <textarea
                  rows={3}
                  className="w-full resize-none border-b border-white/20 bg-transparent py-2 text-stone-50 outline-none transition-colors focus:border-tc-powder"
                />
              </label>
              <label className="flex items-start gap-3 pt-2 text-xs text-stone-200/60">
                <input
                  required
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-tc-powder"
                />
                Ich bin mit der Verarbeitung meiner Daten zur Kontaktaufnahme
                einverstanden. *
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-tc-powder py-3.5 text-sm font-semibold text-tc-navy-dark transition-colors hover:bg-stone-50"
              >
                Anfrage senden
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

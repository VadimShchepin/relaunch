'use client';

import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckIcon } from "@/components/ui/Icons";

export default function ContactSuccessPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2] flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckIcon className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6">
              Vielen Dank!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto">
              Deine Nachricht ist bei uns angekommen. Wir melden uns schnellstmöglich bei dir – in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="bg-white rounded-card border border-gray-100 p-8 mb-8">
              <h2 className="text-lg font-semibold text-black mb-4">
                Was passiert jetzt?
              </h2>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-semibold">
                    1
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Wir prüfen deine Anfrage und bereiten eine individuelle Antwort vor
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-semibold">
                    2
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Du erhältst eine persönliche Antwort per E-Mail
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-semibold">
                    3
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Wir vereinbaren einen Termin für ein unverbindliches Erstgespräch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Zur Startseite
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black border border-gray-200 rounded-lg font-medium hover:border-black transition-colors"
              >
                FAQ durchstöbern
              </a>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}

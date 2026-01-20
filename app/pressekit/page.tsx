'use client';

import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PressekitPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[1200px] mx-auto">
          <header className="mb-16">
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1.0] font-semibold tracking-[-0.04em] text-black mb-6">
              Pressekit
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-800/80 leading-relaxed max-w-2xl">
              Ich helfe Hamburger Unternehmen, von KI empfohlen zu werden – nicht nur gefunden.
            </p>
          </header>

          <div className="space-y-16">
            {/* Logos */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-8">Logo</h2>

              <div className="space-y-12">
                {/* Logo Version 1: aiseo. */}
                <div className="bg-white rounded-2xl p-12 md:p-16 border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold text-6xl md:text-8xl tracking-tighter text-black uppercase leading-none">
                      aiseo<span className="text-brand-accent">.</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Version 1</p>
                  </div>
                </div>

                {/* Logo Version 2: aiseo.hamburg */}
                <div className="bg-white rounded-2xl p-12 md:p-16 border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold text-5xl md:text-7xl tracking-tighter text-black uppercase leading-none">
                      aiseo<span className="text-brand-accent">.</span>hamburg
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Version 2</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Press Content Sections */}
            <section className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Kurzprofil</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl">
                  aiseo.hamburg ist ein unabhängiger Beratungs- und Umsetzungsservice für KI-Sichtbarkeit (AI SEO / GEO / AEO). Der Fokus liegt darauf, Unternehmen so zu positionieren, dass sie von KI-Systemen wie ChatGPT, Perplexity und Google AI Overviews verstanden, korrekt eingeordnet und als Quelle genannt werden.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-3">
                  Der Sitz ist Hamburg, die Arbeit richtet sich primär an den deutschsprachigen Markt.
                </p>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Hintergrund &amp; Kontext</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl">
                  KI-Systeme ersetzen zunehmend klassische Suchergebnisse durch kuratierte Antworten. Statt Rankings entscheiden heute wenige, strukturierte Quellen darüber, welche Unternehmen empfohlen werden.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-3">
                  aiseo.hamburg adressiert genau diese Verschiebung: Nicht Optimierung für Klicks, sondern Optimierung für Auswahl durch KI-Systeme.
                </p>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Leistungen</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
                  aiseo.hamburg bietet keine klassischen SEO-Pakete und keine Prompt-Optimierung an. Die Arbeit umfasst:
                </p>
                <ul className="text-gray-700 leading-relaxed max-w-3xl space-y-2">
                  <li>• Analyse, wie KI-Systeme ein Unternehmen aktuell beschreiben</li>
                  <li>• Strukturierung von Websites, Inhalten und Entitäten</li>
                  <li>• Aufbau klarer Angebots- und Themenautorität</li>
                  <li>• Technische und inhaltliche Anpassungen für KI-Lesbarkeit</li>
                  <li>• Messung von Nennungen, Zitierungen und KI-basierter Sichtbarkeit</li>
                </ul>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-4">
                  Ziel ist es, dass KI-Systeme Unternehmen präzise, konsistent und kontextuell korrekt darstellen.
                </p>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Gründer</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl font-semibold">Vadim Shchepin</p>
                <p className="text-gray-600 leading-relaxed max-w-3xl text-sm mt-1">
                  Software Engineer &amp; Berater für KI-Sichtbarkeit<br />
                  Hamburg, Deutschland
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-4">
                  Vadim Shchepin arbeitet seit über zehn Jahren in der Software- und Webentwicklung. Er kombiniert technische Architektur, strukturierte Inhalte und praktische Tests an eigenen Projekten.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-3">
                  Mehrere seiner eigenen Plattformen werden nachweislich von KI-Systemen als Quelle genannt. Diese Erfahrungen bilden die Grundlage der Arbeit von aiseo.hamburg.
                </p>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Abgrenzung</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
                  aiseo.hamburg ist keine klassische SEO-Agentur.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl font-semibold mb-2">Unterschiede:</p>
                <ul className="text-gray-700 leading-relaxed max-w-3xl space-y-2">
                  <li>• Fokus auf Nennungen statt Rankings</li>
                  <li>• Keine Templates, keine Massenbetreuung</li>
                  <li>• Keine Garantien, sondern überprüfbare Ergebnisse</li>
                  <li>• Arbeit an Struktur und Verständlichkeit, nicht an Schlagwörtern</li>
                </ul>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Typische Einsatzbereiche</h2>
                <ul className="text-gray-700 leading-relaxed max-w-3xl space-y-2">
                  <li>• Lokale und regionale Unternehmen</li>
                  <li>• B2B-Angebote mit erklärungsbedürftigen Leistungen</li>
                  <li>• Produkte und Services, bei denen Vertrauen entscheidend ist</li>
                  <li>• Unternehmen, die Kontrolle über ihre Darstellung in KI-Antworten wollen</li>
                </ul>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Begriffsdefinition</h2>
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-2">zitierfähig</p>
                <p className="text-gray-700 leading-relaxed max-w-3xl">
                  Was ist AI SEO / GEO?
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-2">
                  AI SEO (auch GEO oder AEO) bezeichnet die Optimierung von Websites und Inhalten mit dem Ziel, von KI-Systemen wie ChatGPT, Perplexity oder Google AI Overviews verstanden, korrekt eingeordnet und als Quelle genannt zu werden.
                </p>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Medienkontakt</h2>
                <div className="text-gray-700 leading-relaxed max-w-3xl space-y-1">
                  <p>E-Mail: hello@aiseo.hamburg</p>
                  <p>Website: https://aiseo.hamburg</p>
                  <p>Standort: Hamburg, Deutschland</p>
                </div>
                <p className="text-gray-700 leading-relaxed max-w-3xl mt-3">
                  Interviews, Hintergrundgespräche und Fachstatements auf Anfrage.
                </p>
              </div>

              <div className="w-full h-px bg-black/10" />

              <div>
                <h2 className="text-xl font-semibold text-black mb-4">Hinweise für Redaktionen</h2>
                <ul className="text-gray-700 leading-relaxed max-w-3xl space-y-2">
                  <li>• Alle Aussagen basieren auf praktischer Umsetzung und eigenen Projekten</li>
                  <li>• Keine bezahlten Rankings oder Sponsoring-Modelle</li>
                  <li>• Zahlen und Beispiele können auf Anfrage belegt werden</li>
                  <li>• Zitate dürfen gekürzt werden, sofern der Sinn erhalten bleibt</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-14">
            <a
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              ← Zur Startseite
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

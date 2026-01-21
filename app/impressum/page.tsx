'use client';

import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ImpressumPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[800px] mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-black mb-4">
              Impressum
            </h1>
            <p className="text-base text-gray-700">
              Angaben gemäß § 5 TMG
            </p>
          </header>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Diensteanbieter</h2>
              <div className="text-gray-700 space-y-1">
                <p>Vadim Shchepin</p>
                <p>Einzelunternehmer</p>
                <p>Flottbeker Drift 1</p>
                <p>22607 Hamburg</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Kontakt</h2>
              <div className="text-gray-700 space-y-1">
                <p>E-Mail: hello@aiseo.hamburg</p>
                <p>Telefon: +49 (0) 176 321 94 754</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Social Media</h2>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/in/vadim-shchepin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:no-underline"
                  >
                    linkedin.com/in/vadim-shchepin
                  </a>
                </p>
                <p>
                  Instagram:{' '}
                  <a
                    href="https://www.instagram.com/aiseo.hamburg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:no-underline"
                  >
                    instagram.com/aiseo.hamburg
                  </a>
                </p>
                <p>
                  X (Twitter):{' '}
                  <a
                    href="https://x.com/www_snapsite_me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:no-underline"
                  >
                    x.com/aiseo.hamburg
                  </a>
                </p>
                <p>
                  Google Business:{' '}
                  <a
                    href="https://share.google/bkLeWZ9kPt2G8Lwtg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:no-underline"
                  >
                    aiseo.hamburg (Google Business Profile)
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Umsatzsteuer-ID</h2>
              <div className="text-gray-700 space-y-1">
                <p>Steuernummer: 41/229/05131</p>
                <p>Finanzamt Hamburg-Nord</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Berufsbezeichnung</h2>
              <div className="text-gray-700 space-y-1">
                <p>Beratung für KI-Sichtbarkeit und digitale Dienstleistungen</p>
                <p>Einzelunternehmer nach deutschem Recht</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Redaktionell verantwortlich</h2>
              <div className="text-gray-700 space-y-1">
                <p>Vadim Shchepin</p>
                <p>Flottbeker Drift 1</p>
                <p>22607 Hamburg</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">EU-Streitschlichtung</h2>
              <div className="text-gray-700 space-y-2">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:no-underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-4">Verbraucherstreitbeilegung</h2>
              <p className="text-gray-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="pt-6 border-t border-black/10">
              <h2 className="text-xl font-semibold text-black mb-4">Haftungsausschluss</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Haftung für Inhalte</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen
                    oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Haftung für Links</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Urheberrecht</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
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

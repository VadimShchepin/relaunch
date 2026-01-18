'use client';

import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function AGBPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[800px] mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-black mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-base text-gray-700">
              AGB für Dienstleistungen im Bereich KI-Sichtbarkeit und digitale Beratung
            </p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-3">1. Geltungsbereich</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen,
                  die Vadim Shchepin (im Folgenden „Auftragnehmer") für Unternehmer,
                  Verbraucher oder juristische Personen des öffentlichen Rechts (im Folgenden „Kunde") erbringt.
                </p>
                <p>
                  (2) Gegenstand der Dienstleistungen sind Beratung und Umsetzung von Maßnahmen
                  zur Verbesserung der KI-Sichtbarkeit (AI SEO / GEO / AEO),
                  Webentwicklung sowie damit verbundene digitale Dienstleistungen.
                </p>
                <p>
                  (3) Abweichende Vereinbarungen im Einzelfall haben Vorrang vor diesen AGB.
                  Sie bedürfen der Schriftform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">2. Vertragsschluss</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Der Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers
                  oder durch Beginn der Leistungserbringung zustande.
                </p>
                <p>
                  (2) Alle Angebote sind freibleibend, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">3. Leistungsumfang</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Der Umfang der vereinbarten Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung
                  im Angebot oder der Auftragsbestätigung.
                </p>
                <p>
                  (2) Der Auftragnehmer ist berechtigt, Dritte mit der Erbringung der Leistungen zu beauftragen,
                  soweit dies dem Kunden mitgeteilt wurde oder aus der Art der Dienstleistung folgt.
                </p>
                <p>
                  (3) Der Kunde stellt sicher, dass alle für die Leistungserbringung notwendigen Informationen
                  und Zugänge (z. B. Website-Zugänge, Analytics-Daten) rechtzeitig und vollständig zur Verfügung gestellt werden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">4. Mitwirkungspflichten des Kunden</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Der Kunde unterstützt den Auftragnehmer bei der Erbringung der Leistungen,
                  soweit dies erforderlich und zumutbar ist.
                </p>
                <p>
                  (2) Der Kunde ist insbesondere verpflichtet:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>die erforderlichen Informationen und Unterlagen vollständig und rechtzeitig bereitzustellen</li>
                  <li>Zugänge zu Drittsystemen (z. B. Website, Analytics) zur Verfügung zu stellen</li>
                  <li>Änderungen relevanter Daten unverzüglich mitzuteilen</li>
                  <li>die Leistungsergebnisse zu prüfen und zu genehmigen</li>
                </ul>
                <p>
                  (3) Verzögert sich die Leistungserbringung durch Nichterfüllung der Mitwirkungspflichten,
                  verlängern sich die Fristen angemessen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">5. Vergütung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Die Vergütung richtet sich nach der im Angebot vereinbarten Preisliste.
                  Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
                </p>
                <p>
                  (2) Bei Dienstleistungen mit Zeitaufwand wird die Vergütung nach Aufwand,
                  mindestens jedoch nach den im Angebot angegebenen Tagessätzen berechnet.
                </p>
                <p>
                  (3) Rechnungen sind sofort nach Erhalt fällig und zahlbar.
                  Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher Höhe berechnet.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">6. Fristen und Termine</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Fristen und Termine sind nur verbindlich, wenn sie vom Auftragnehmer ausdrücklich schriftlich bestätigt wurden.
                </p>
                <p>
                  (2) Verzögert sich die Leistung durch Umstände, die der Kunde zu vertreten hat,
                  verschieben sich die Fristen angemessen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">7. Abnahme</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Soweit eine Abnahme vorgesehen ist, erklärt der Kunde seine Abnahme,
                  wenn das Leistungsergebnis vertragsgemäß erbracht wurde und keine Mängel vorliegen.
                </p>
                <p>
                  (2) Die Abnahme gilt als erteilt, wenn der Kunde das Leistungsergebnis
                  nicht innerhalb von 14 Tagen nach Bereitstellung beanstandet.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">8. Gewährleistung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Der Auftragnehmer gewährleistet, dass die vertraglichen Leistungen
                  vertragsgemäß und mit der erforderlichen Sorgfalt erbracht werden.
                </p>
                <p>
                  (2) Mängel sind unverzüglich nach Entdeckung schriftlich zu rügen.
                </p>
                <p>
                  (3) Bei berechtigten Mängelrügen hat der Auftragnehmer das Recht zur Nacherfüllung
                  innerhalb angemessener Frist.
                </p>
                <p>
                  (4) Die Gewährleistung entfällt, wenn der Kunde ohne Zustimmung des Auftragnehmers
                  Änderungen an den Leistungen vornimmt oder Dritte damit beauftragt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">9. Haftung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Die Haftung des Auftragnehmers bei Verletzung von vertraglichen oder außervertraglichen Pflichten
                  ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.
                </p>
                <p>
                  (2) Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten
                  (Kardinalpflichten) und nur für den vorhersehbaren, vertragstypischen Schaden.
                </p>
                <p>
                  (3) Die Haftung für mittelbare Schäden, entgangenen Gewinn und sonstige Vermögensschäden
                  ist ausgeschlossen, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.
                </p>
                <p>
                  (4) Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper oder Gesundheit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">10. Urheberrecht und Nutzungsrechte</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Alle vom Auftragnehmer erstellten Werke unterliegen dem deutschen Urheberrecht.
                </p>
                <p>
                  (2) Der Kunde erhält nach vollständiger Zahlung der Vergütung
                  ein einfaches, zeitlich unbeschränktes Nutzungsrecht an den vertragsgemäß erstellten Werken
                  für die im Vertrag definierten Nutzungszwecke.
                </p>
                <p>
                  (3) Der Auftragnehmer behält sich das Recht vor, die erstellten Werke
                  in seinem Portfolio zu Referenzzwecken zu verwenden,
                  soweit keine vertraulichen Informationen offenbart werden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">11. Geheimhaltung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen
                  vertraulichen Informationen des anderen Vertragspartners vertraulich zu behandeln
                  und nicht an Dritte weiterzugeben.
                </p>
                <p>
                  (2) Die Verpflichtung zur Geheimhaltung besteht auch nach Beendigung des Vertragsverhältnisses fort.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">12. Vertragslaufzeit und Kündigung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Bei Dienstleistungen mit laufender Beratung wird der Vertrag zunächst für die im Angebot
                  angegebene Laufzeit geschlossen und verlängert sich anschließend um den gleichen Zeitraum,
                  wenn nicht mit einer Frist von 4 Wochen zum Ende der Laufzeit gekündigt wird.
                </p>
                <p>
                  (2) Bei Projektleistungen endet der Vertrag mit Erfüllung der vereinbarten Leistungen.
                </p>
                <p>
                  (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">13. Schlussbestimmungen</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p>
                  (2) Erfüllungsort und Gerichtsstand ist Hamburg, soweit der Kunde Kaufmann im Sinne des HGB ist.
                </p>
                <p>
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
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

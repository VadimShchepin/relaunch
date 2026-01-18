'use client';

import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function DatenschutzPage() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[800px] mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-black mb-4">
              Datenschutz
            </h1>
            <p className="text-base text-gray-700">
              Datenschutzerklärung gemäß DSGVO
            </p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-3">1. Datenschutz auf einen Blick</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">2. Verantwortlicher</h2>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>Vadim Shchepin</p>
                <p>Flottbeker Drift 1</p>
                <p>22607 Hamburg</p>
                <p>Deutschland</p>
                <p>E-Mail: hello@aiseo.hamburg</p>
                <p>Telefon: +49 (0) 176 321 94 754</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">3. Datenerfassung auf dieser Website</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                  Dessen Kontaktdaten können Sie dem Abschnitt „Verantwortlicher" in dieser Datenschutzerklärung entnehmen.
                </p>

                <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                  Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
                  Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>

                <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">4. Server-Log-Dateien</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">5. Kontaktformular</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                </p>
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                  Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">6. Kontakt per E-Mail</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
                  (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
                <p>
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">7. Newsletter</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Wenn Sie unseren Newsletter abonnieren, verwenden wir die von Ihnen angegebene E-Mail-Adresse,
                  um Ihnen unseren Newsletter zuzusenden. Die Abmeldung ist jederzeit möglich.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                  Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Abmeldelink im Newsletter nutzen
                  oder uns eine E-Mail an hello@aiseo.hamburg senden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">8. Cookies</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Diese Website verwendet nur technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind.
                  Es werden keine tracking- oder marketing-Cookies verwendet.
                </p>
                <p>
                  Sollten in Zukunft weitere Cookies eingesetzt werden, werden wir Sie entsprechend informieren
                  und um Ihre Einwilligung bitten, sofern dies rechtlich erforderlich ist.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">9. Ihre Rechte</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
                  </li>
                  <li>
                    <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                  </li>
                  <li>
                    <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                  </li>
                  <li>
                    <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.
                  </li>
                  <li>
                    <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.
                  </li>
                  <li>
                    <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.
                  </li>
                  <li>
                    <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">10. Widerruf Ihrer Einwilligung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
                  Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">11. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                  wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
                  und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black mb-3">12. Kontakt in Datenschutzfragen</h2>
              <div className="text-gray-700 space-y-1 text-sm">
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                <p>Vadim Shchepin</p>
                <p>E-Mail: hello@aiseo.hamburg</p>
                <p>Telefon: +49 (0) 176 321 94 754</p>
              </div>
            </section>

            <section className="pt-6 border-t border-black/10">
              <p className="text-sm text-gray-600">
                Stand dieser Datenschutzerklärung: 18. Januar 2026
              </p>
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

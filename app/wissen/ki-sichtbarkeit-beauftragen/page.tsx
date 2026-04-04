import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

const FAQ_ITEMS = [
  {
    q: 'Was kostet die kostenlose Kurzanalyse wirklich?',
    a: 'Nichts. Null Euro. Kein Kleingedrucktes. Du bekommst in 15 Minuten eine ehrliche Einschätzung, ob KI-Sichtbarkeit für dein Unternehmen Sinn macht. Wenn nicht, sage ich dir das. Es gibt keinen automatischen Übergang in ein kostenpflichtiges Paket.',
  },
  {
    q: 'Muss ich technisches Wissen mitbringen?',
    a: 'Nein. Du musst weder wissen, was JSON-LD ist, noch was eine llms.txt macht. Ich erkläre dir alles in normaler Sprache. Für die technische Umsetzung brauchst du nur Zugang zu deiner Website (CMS-Login oder Entwicklerkontakt). Den Rest übernehme ich.',
  },
  {
    q: 'Gibt es eine Mindestvertragslaufzeit?',
    a: 'Beim einmaligen Upgrade: Nein, das ist ein Projekt mit Festpreis und Ende. Bei der laufenden Betreuung: Monatlich kündbar. Keine 6- oder 12-Monats-Bindung. Wenn die Ergebnisse nicht stimmen, kannst du jederzeit aufhören.',
  },
  {
    q: 'Was passiert, wenn KI-Sichtbarkeit für mich keinen Sinn macht?',
    a: 'Dann sage ich dir das in der Kurzanalyse. Nicht jedes Unternehmen profitiert gleich stark von KI-Sichtbarkeit. Wenn deine Zielgruppe keine KI-Assistenten nutzt oder dein Markt zu nischig ist, empfehle ich dir andere Maßnahmen. Ich verdiene nichts daran, dir etwas zu verkaufen, das nicht funktioniert.',
  },
  {
    q: 'Wie messe ich, ob es funktioniert hat?',
    a: 'Du bekommst monatliche Reports mit konkreten KI-Zitierungen: Wo wirst du erwähnt? Auf welchen Plattformen? Bei welchen Fragen? Plus Vorher-Nachher-Vergleiche und Traffic-Daten. Keine Vanity-Metriken, sondern Zahlen, die du deinem Chef zeigen kannst.',
  },
  {
    q: 'Kann ich nach dem einmaligen Upgrade auf laufende Betreuung wechseln?',
    a: 'Ja, jederzeit. Viele Kunden starten mit dem einmaligen Upgrade und entscheiden sich nach 2-3 Monaten für die laufende Betreuung, wenn sie die ersten Ergebnisse sehen. Es gibt keinen Druck, das sofort zu entscheiden.',
  },
  {
    q: 'Was unterscheidet aiseo.hamburg von anderen AI SEO Agenturen?',
    a: 'Drei Dinge: Erstens, Spezialisierung — ich mache ausschließlich KI-Sichtbarkeit, kein klassisches SEO nebenbei. Zweitens, Transparenz — Festpreise, keine versteckten Kosten, monatlich kündbar. Drittens, Ergebnisse — ich zeige dir vorher Referenzen mit echten KI-Zitierungen, nicht PowerPoint-Versprechen.',
  },
];

const STEPS = [
  { num: '01', label: 'Kurzanalyse', time: '15 Min', color: 'bg-brand-accent/10' },
  { num: '02', label: 'Audit & Strategie', time: 'Tag 1\u20133', color: 'bg-brand-accent/15' },
  { num: '03', label: 'Umsetzung', time: 'Tag 4\u201314', color: 'bg-brand-accent/20' },
  { num: '04', label: 'Content & Autorit\u00e4t', time: 'Monat 2\u20133', color: 'bg-brand-accent/25' },
  { num: '05', label: 'Ergebnisse', time: 'ab Monat 3', color: 'bg-brand-accent/30' },
];

const DONT_GET = [
  {
    title: 'Keine Garantie f\u00fcr Position 1',
    desc: 'Wer dir verspricht, dass ChatGPT dich garantiert als Nummer 1 empfiehlt, l\u00fcgt. KI-Antworten sind kontextabh\u00e4ngig und ver\u00e4ndern sich st\u00e4ndig. Ich optimiere die Wahrscheinlichkeit \u2014 nicht die Gewissheit.',
  },
  {
    title: 'Keine 12-Monats-Vertragsbindung',
    desc: 'Wer seine Kunden an lange Vertr\u00e4ge kettet, hat kein Vertrauen in die eigene Leistung. Einmaliges Upgrade = Festpreis, fertig. Laufende Betreuung = monatlich k\u00fcndbar.',
  },
  {
    title: 'Keine Buzzword-Reports ohne Substanz',
    desc: 'Du bekommst keine 40-seitigen PDFs voller Kreisdiagramme, die niemand liest. Sondern konkrete Zahlen: Wo wirst du zitiert? Wo nicht? Was \u00e4ndern wir als N\u00e4chstes?',
  },
  {
    title: 'Keine versteckten Kosten',
    desc: 'Kein \u201eAch, das Tool kostet extra\u201c. Kein \u201eDas Setup war im Angebot nicht enthalten\u201c. Der Preis, den ich dir nenne, ist der Preis, den du zahlst. Punkt.',
  },
];

export default function KiSichtbarkeitBeauftragenPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F7F5F2] text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="min-h-screen bg-[#F7F5F2]">
        {/* Article JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'KI-Sichtbarkeit beauftragen: Der komplette Ablauf von Anfrage bis Ergebnis',
              description: 'Was passiert, wenn du KI-Sichtbarkeit bei aiseo.hamburg beauftragst? Der komplette Prozess von kostenloser Kurzanalyse bis zur ersten ChatGPT-Empfehlung.',
              author: {
                '@type': 'Person',
                name: 'Vadim Shchepin',
              },
              publisher: {
                '@type': 'Organization',
                name: 'aiseo.hamburg',
                url: 'https://aiseo.hamburg',
              },
              url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-beauftragen',
              datePublished: '2026-04-03',
              dateModified: '2026-04-03',
              mainEntityOfPage: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-beauftragen',
              inLanguage: 'de',
            }),
          }}
        />

        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ_ITEMS.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              })),
            }),
          }}
        />

        {/* BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Startseite',
                  item: 'https://aiseo.hamburg',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Wissen',
                  item: 'https://aiseo.hamburg/wissen',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'KI-Sichtbarkeit beauftragen',
                  item: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-beauftragen',
                },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="relative pt-32 pb-12 md:pt-52 md:pb-16 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
            <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-gray-600 transition-colors">Startseite</a>
              <span className="mx-2">/</span>
              <span>Wissen</span>
              <span className="mx-2">/</span>
              <span className="text-gray-600">KI-Sichtbarkeit beauftragen</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
              KI-Sichtbarkeit beauftragen: Der komplette Ablauf
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Du &uuml;berlegst, ob sich KI-Sichtbarkeit f&uuml;r dein Unternehmen lohnt? Hier ist exakt, was passiert &ndash; von der ersten Anfrage bis zur ersten ChatGPT-Empfehlung. Ohne Buzzwords, ohne Verkaufstricks.
            </p>
        </section>

        {/* TL;DR */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-16">
            <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-sm font-bold text-brand-accent mb-4">TL;DR &ndash; Der Ablauf auf einen Blick</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {STEPS.map((step) => (
                  <div key={step.num} className={`${step.color} rounded-lg p-3 flex-1 text-center`}>
                    <p className="text-xs text-brand-accent font-bold mb-1">{step.num}</p>
                    <p className="text-sm font-semibold text-black">{step.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{step.time}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Von der ersten Anfrage bis zu messbaren Ergebnissen: 15&nbsp;Minuten f&uuml;r die kostenlose Analyse, 10&ndash;14&nbsp;Tage f&uuml;r das technische Upgrade, 3&ndash;6&nbsp;Monate f&uuml;r konsistente KI-Sichtbarkeit. Kein Hexenwerk &ndash; aber auch kein Overnight-Erfolg.
              </p>
            </div>
        </section>

        {/* Warum dieser Artikel existiert */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Warum dieser Artikel existiert
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Weil die meisten Agenturen dir eine &bdquo;kostenlose Erstberatung&ldquo; anbieten und dann 45&nbsp;Minuten lang PowerPoint-Folien zeigen, bis du aus reiner Ersch&ouml;pfung unterschreibst. (Das ist ungef&auml;hr so effektiv wie Zahnarztbesuche als Verkaufstaktik f&uuml;r Zahnb&uuml;rsten.)
              </p>
              <p>
                Hier ist der Deal: <strong className="text-black">Du sollst vorher wissen, was passiert.</strong> Jeden Schritt. Jede Entscheidung. Jeden Euro. Damit du eine informierte Entscheidung treffen kannst &ndash; nicht eine emotionale.
              </p>
              <p>
                Die meisten Dienstleister behandeln ihren Prozess wie ein Staatsgeheimnis. Als w&uuml;rde die Konkurrenz sofort alles kopieren, wenn man transparent ist. (Newsflash: Die Konkurrenz kopiert sowieso. Transparenz ist kein Risiko &ndash; es ist ein Vorteil.)
              </p>
              <p>
                Und ja, vielleicht liest du das hier und entscheidest: &bdquo;Brauche ich nicht.&ldquo; Auch gut. Dann habe ich dir 15&nbsp;Minuten Lebenszeit gespart. Das ist mehr, als die meisten Agenturen f&uuml;r dich tun, bevor du bezahlst.
              </p>
            </div>
        </section>

        {/* Schritt 1: Kostenlose Kurzanalyse */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Schritt&nbsp;1: Kostenlose Kurzanalyse (15&nbsp;Minuten)
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Du schickst mir deine Website-URL. Ich pr&uuml;fe sie. Fertig. Das ist kein &bdquo;Discovery Call&ldquo; mit drei Account Managern und einem Praktikanten, der Notizen macht. Das bin ich, deine URL, und 15&nbsp;Minuten meiner ungeteilten Aufmerksamkeit.
              </p>
              <p>
                (Stell dir vor, ein Arzt w&uuml;rde dich tats&auml;chlich untersuchen, bevor er dir Tabletten verschreibt. Ungef&auml;hr so revolution&auml;r ist das im Agentur-Business.)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Was ich pr&uuml;fe</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Deine aktuelle Sichtbarkeit auf <strong className="text-black">ChatGPT, Perplexity, Google&nbsp;AI Overviews</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Was deine Wettbewerber in KI-Antworten machen (und ob sie &uuml;berhaupt auftauchen)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Technischer Schnellcheck: Schema-Markup, Crawlability, Content-Struktur</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Ehrliche Einsch&auml;tzung: Macht KI-Sichtbarkeit f&uuml;r dein Business &uuml;berhaupt Sinn?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Was du bekommst</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Screenshots deiner aktuellen KI-Sichtbarkeit (oder Nicht-Sichtbarkeit)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Klare Aussage: &bdquo;Lohnt sich&ldquo; oder &bdquo;Lohnt sich nicht&ldquo;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Falls ja: Grobe Einsch&auml;tzung des Aufwands und der Kosten</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#10003;</span>
                    <span>Falls nein: Alternative Empfehlungen (kostenlos, weil ich kein Interesse habe, dir Unsinn zu verkaufen)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 md:p-8 shadow-sm mt-8">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-black">Kein Pitch, kein Druck.</strong> Wenn es sich nicht lohnt, sage ich dir das. Ich habe kein Interesse daran, Projekte anzunehmen, die nicht funktionieren &ndash; das macht weder dich noch mich gl&uuml;cklich. (Und schlechte Referenzen brauche ich wie ein Fahrrad einen Bootf&uuml;hrerschein.)
              </p>
            </div>
        </section>

        {/* Schritt 2: Audit & Strategie */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Schritt&nbsp;2: Audit &&nbsp;Strategie (Tag&nbsp;1&ndash;3)
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Du hast dich entschieden. Ab hier wird es ernst. Ich tauche in deine Website ein wie ein U-Boot in einen Ozean aus HTML &ndash; und komme mit einer kompletten Bestandsaufnahme zur&uuml;ck.
              </p>
              <p>
                Das ist der Teil, in dem ich herausfinde, <strong className="text-black">warum KI-Systeme dich ignorieren</strong> und was wir dagegen tun k&ouml;nnen. Spoiler: Es ist fast nie ein einzelnes Problem. Es ist meistens ein fr&ouml;hliches Zusammenspiel aus zehn kleinen Problemen, die sich gegenseitig verst&auml;rken.
              </p>
            </div>

            <div className="space-y-5 mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">1.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Vollst&auml;ndiges technisches Audit</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Schema-Markup, Seitenstruktur, Ladezeiten, Mobile-Optimierung, robots.txt, Crawlability f&uuml;r KI-Bots. Alles, was unter der Haube passiert &ndash; oder eben nicht passiert.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">2.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Wettbewerber-Analyse (KI-Sichtbarkeit)</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Wer wird in deiner Branche von ChatGPT empfohlen? Warum? Was machen die anders? Das ist keine &bdquo;Competitive Analysis&ldquo; aus einem SEO-Tool &ndash; das ist manuelle Recherche auf echten KI-Plattformen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">3.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Strategie-Dokument mit Priorit&auml;ten</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Kein 80-Seiten-PDF, das in der Schublade verschwindet. Sondern ein klares Dokument: Was machen wir zuerst? Was bringt den gr&ouml;&szlig;ten Hebel? Was kostet wie viel? <strong className="text-black">Maximal 5&nbsp;Seiten, maximal klar.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">4.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Klarer Kostenvoranschlag</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      <strong className="text-black">Festpreis, keine &Uuml;berraschungen.</strong> Du wei&szlig;t vorher exakt, was es kostet. Nicht &bdquo;ab X Euro&ldquo;, nicht &bdquo;je nach Aufwand&ldquo;. Eine Zahl. Punkt. (Ich wei&szlig;, das klingt radikal. Ist es aber nur, weil die Branche das Gegenteil normalisiert hat.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Schritt 3: Technische Umsetzung */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Schritt&nbsp;3: Technische Umsetzung (Tag&nbsp;4&ndash;14)
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Das ist der Teil, wo ich Code schreibe und du nichts tun musst. Ernsthaft. Du kannst in dieser Phase Urlaub machen, ein Buch lesen oder endlich den Keller aufr&auml;umen. (Wobei &ndash; r&auml;um lieber den Keller auf. Das Buch l&auml;uft nicht weg.)
              </p>
              <p>
                Was passiert unter der Haube:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Schema-Markup (JSON-LD)</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Strukturierte Daten, die KI-Systemen sagen, wer du bist, was du machst und warum du relevant bist. Das ist wie ein Lebenslauf f&uuml;r deine Website &ndash; nur dass ihn Maschinen lesen statt gelangweilte Personaler.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">llms.txt &&nbsp;ai.txt</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Spezielle Dateien, die KI-Crawlern erkl&auml;ren, welche Informationen sie von deiner Website extrahieren sollen. Ohne die fliegen KI-Bots blind &uuml;ber deine Seite &ndash; und nehmen nichts mit.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Content-Restrukturierung</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Deine Inhalte sind wahrscheinlich f&uuml;r Menschen geschrieben. Gut. Jetzt machen wir sie zus&auml;tzlich f&uuml;r KI extrahierbar: klare Frage-Antwort-Strukturen, definierte Entit&auml;ten, semantische Verkn&uuml;pfungen.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Crawlability-Optimierung</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Sicherstellen, dass GPTBot, PerplexityBot, ClaudeBot und Co. deine Seite &uuml;berhaupt finden und lesen k&ouml;nnen. Du w&auml;rst &uuml;berrascht, wie viele Websites KI-Bots versehentlich aussperren. (Wie ein Restaurant, das die T&uuml;r abschlie&szlig;t und sich wundert, warum keine G&auml;ste kommen.)
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                <strong className="text-black">Dein Aufwand in dieser Phase:</strong> Mir Zugang zu deinem CMS geben (oder deinen Entwickler kurz einweihen). Alles andere passiert auf meiner Seite. Du bekommst t&auml;gliche Kurz-Updates per E-Mail &ndash; nicht als H&ouml;flichkeit, sondern damit du wei&szlig;t, was passiert.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-black">Was du NICHT tun musst:</strong> Texte schreiben, Bilder liefern, stundenlang in Meetings sitzen oder irgendwelche &bdquo;Brand Guidelines&ldquo;-Dokumente zusammensuchen, die seit 2019 niemand mehr ge&ouml;ffnet hat. Ich arbeite mit dem, was deine Website bereits hat &ndash; und mache es f&uuml;r KI-Systeme lesbar.
              </p>
            </div>
        </section>

        {/* Schritt 4: Content & Autorität */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Schritt&nbsp;4: Content &&nbsp;Autorit&auml;t (Monat&nbsp;2&ndash;3)
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-black">Nur f&uuml;r laufende Betreuungspakete.</strong> Wenn du das einmalige Upgrade gew&auml;hlt hast, bist du nach Schritt&nbsp;3 fertig und hast eine solide Basis. Das hier ist die Kur nach der Operation &ndash; optional, aber deutlich effektiver als nur die technische Basis.
              </p>
              <p>
                (Stell dir vor, du gehst ins Fitnessstudio, l&auml;sst dir einen perfekten Trainingsplan schreiben &ndash; und gehst dann nie wieder hin. Die Basis stimmt, aber die Ergebnisse kommen erst durchs Training.)
              </p>
            </div>

            <div className="space-y-5 mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">&#9998;</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Content f&uuml;r KI-Zitierbarkeit</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Inhalte, die nicht nur gut klingen, sondern von KI-Systemen als autoritative Quelle erkannt werden. Fachbeitr&auml;ge, Anleitungen, FAQ-Inhalte &ndash; alles strukturiert f&uuml;r maximale Extrahierbarkeit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">&#9733;</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Autorit&auml;ts-Aufbau</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Verzeichniseintr&auml;ge, Erw&auml;hnungen in Fachmedien, konsistente NAP-Daten. KI-Systeme vertrauen Quellen, die von anderen Quellen best&auml;tigt werden. Das ist wie ein Empfehlungsschreiben &ndash; nur digital und f&uuml;r Algorithmen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex gap-4">
                  <span className="text-brand-accent font-bold text-lg shrink-0 mt-0.5">&#9783;</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Plattform-spezifisches Monitoring</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      W&ouml;chentliche Checks auf ChatGPT, Perplexity, Google&nbsp;AI Overviews, Claude und Copilot. Wo wirst du erw&auml;hnt? Wo nicht? Was hat sich ver&auml;ndert? Das ist Detektivarbeit &ndash; manuell, nicht automatisiert, weil es noch kein Tool gibt, das das zuverl&auml;ssig macht.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Schritt 5: Ergebnisse & Reporting */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Schritt&nbsp;5: Ergebnisse &&nbsp;Reporting
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Hier wird es interessant. Und hier trennt sich die Spreu vom Weizen &ndash; weil ich dir <strong className="text-black">echte Zahlen zeige, nicht Vanity-Metriken</strong>. Kein &bdquo;dein Domain-Rating ist um 3&nbsp;Punkte gestiegen&ldquo;. Sondern: &bdquo;ChatGPT empfiehlt dich jetzt bei diesen 12&nbsp;Fragen.&ldquo;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-accent font-bold text-lg">&#128200;</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Monatliche Reports</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Konkrete KI-Zitierungen mit Screenshots. Auf welchen Plattformen, bei welchen Fragen, in welchem Kontext.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-accent font-bold text-lg">&#8596;</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Vorher &ndash; Nachher</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Direkte Vergleiche: Wo standest du vor dem Projekt? Wo stehst du jetzt? Klar, visuell, unbestreitbar.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-accent font-bold text-lg">&#9776;</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Echte Metriken</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Anzahl KI-Zitierungen, Plattform-Abdeckung, Traffic-Ver&auml;nderungen, neue Kundenanfragen. Zahlen, die z&auml;hlen.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                <strong className="text-black">Was ich nicht mache:</strong> Dir ein Dashboard geben und sagen &bdquo;log dich ein und schau selbst&ldquo;. Du bekommst einen aufbereiteten Report mit Kontext. Weil nackte Zahlen ohne Einordnung so n&uuml;tzlich sind wie eine Landkarte ohne Legende.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-black">Was du damit anfangen kannst:</strong> Deinem Chef, deinem Partner oder deinem Gesch&auml;ftsf&uuml;hrer in 2&nbsp;Minuten erkl&auml;ren, was passiert ist und was es gebracht hat. Jeder Report ist so geschrieben, dass auch Menschen ohne Marketing-Hintergrund ihn verstehen. (Ein revolution&auml;res Konzept, ich wei&szlig;.)
              </p>
            </div>
        </section>

        {/* Was du NICHT bekommst */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Was du NICHT bekommst
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Transparenz bedeutet auch, klar zu sagen, was <strong className="text-black">nicht</strong> im Paket ist. Die meisten Agenturen verschweigen das lieber. Ich nicht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DONT_GET.map((item) => (
                <div key={item.title} className="bg-white border border-red-100 rounded-2xl p-6">
                  <div className="flex gap-3 mb-2">
                    <span className="text-red-400 shrink-0 mt-1 font-bold">&#9888;</span>
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 md:p-8 shadow-sm mt-8">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-black">Warum ich dir das sage?</strong> Weil Ehrlichkeit das Einzige ist, was langfristig funktioniert. Sowohl im Marketing als auch in der Kundenbeziehung. Wenn du nach jemandem suchst, der dir das Blaue vom Himmel verspricht, bin ich der Falsche. Wenn du jemanden suchst, der liefert &ndash; dann reden wir.
              </p>
            </div>
        </section>

        {/* Die 3 häufigsten Bedenken */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Die 3&nbsp;h&auml;ufigsten Bedenken &ndash; und ehrliche Antworten
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Jeder hat Bedenken. Das ist normal. Wer keine Bedenken hat, hat nicht richtig nachgedacht. Hier sind die drei, die ich am h&auml;ufigsten h&ouml;re &ndash; und meine ungefilterten Antworten.
              </p>
            </div>

            <div className="space-y-6">
              {/* Bedenken 1 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-black mb-4">&bdquo;Ist das nicht zu teuer?&ldquo;</h3>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    Kommt drauf an, womit du vergleichst. Ein einmaliges Upgrade kostet <strong className="text-black">1.500&nbsp;&euro; netto</strong>. Das ist weniger als ein Monat Google Ads f&uuml;r die meisten Branchen.
                  </p>
                  <p>
                    Die ehrliche Rechnung: Wenn dein durchschnittlicher Auftragswert bei 3.000&nbsp;&euro; liegt und ein einziger Kunde &uuml;ber eine KI-Empfehlung kommt, hat sich die Investition doppelt gerechnet. <strong className="text-black">Ein Kunde. Ein.</strong>
                  </p>
                  <p>
                    Teuer ist nicht, was du bezahlst. Teuer ist, was du verpasst. Und gerade sind das die Kunden, die ChatGPT fragen: &bdquo;Wer ist der beste Anbieter f&uuml;r X in Hamburg?&ldquo; &ndash; und dich nicht finden.
                  </p>
                </div>
              </div>

              {/* Bedenken 2 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-black mb-4">&bdquo;Funktioniert das wirklich?&ldquo;</h3>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    Ja. Aber nicht &uuml;ber Nacht und nicht mit Garantie auf Platz&nbsp;1. Was ich dir zeigen kann: <strong className="text-black">echte Ergebnisse von echten Kunden.</strong>
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="flex gap-3">
                      <span className="text-brand-accent shrink-0">&#10003;</span>
                      <span>Kunden, die auf <strong className="text-black">Position&nbsp;1 in ChatGPT-Empfehlungen</strong> gelandet sind</span>
                    </p>
                    <p className="flex gap-3">
                      <span className="text-brand-accent shrink-0">&#10003;</span>
                      <span>Websites mit <strong className="text-black">verdoppeltem Traffic</strong> durch KI-Sichtbarkeit</span>
                    </p>
                    <p className="flex gap-3">
                      <span className="text-brand-accent shrink-0">&#10003;</span>
                      <span>Unternehmen mit <strong className="text-black">40+ neuen Kundenanfragen pro Monat</strong> &uuml;ber KI-Kan&auml;le</span>
                    </p>
                  </div>
                  <p>
                    Frag mich nach Referenzen. Ich zeige dir gerne konkrete Beispiele &ndash; mit echten URLs und echten Screenshots, nicht anonymisierte Fallstudien.
                  </p>
                </div>
              </div>

              {/* Bedenken 3 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-black mb-4">&bdquo;Wie lange dauert das?&ldquo;</h3>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    Die ehrliche Timeline:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span>Technische Basis steht</span>
                      <span className="font-semibold text-black">10&ndash;14 Tage</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span>Erste KI-Erw&auml;hnungen</span>
                      <span className="font-semibold text-black">4&ndash;8 Wochen</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span>Konsistente Sichtbarkeit</span>
                      <span className="font-semibold text-black">2&ndash;4 Monate</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Volle Wirkung</span>
                      <span className="font-semibold text-black">3&ndash;6 Monate</span>
                    </div>
                  </div>
                  <p>
                    Das ist <strong className="text-black">schneller als klassisches SEO</strong> (6&ndash;12 Monate), aber kein Lichtschalter. Wer dir &bdquo;Ergebnisse in 48&nbsp;Stunden&ldquo; verspricht, hat entweder ein anderes Verst&auml;ndnis von &bdquo;Ergebnissen&ldquo; &ndash; oder ein sehr lockeres Verh&auml;ltnis zur Wahrheit.
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Der ganze Prozess auf einer Seite */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              Der ganze Prozess &ndash; zusammengefasst
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Falls du ein Mensch bist, der gerne Tabellen liest (und seien wir ehrlich &ndash; wer nicht), hier ist der komplette Ablauf in komprimierter Form:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-black">Phase</th>
                    <th className="text-left p-4 font-semibold text-black">Dauer</th>
                    <th className="text-left p-4 font-semibold text-black">Dein Aufwand</th>
                    <th className="text-left p-4 font-semibold text-black">Ergebnis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Kurzanalyse</td>
                    <td className="p-4 text-gray-600">15 Min</td>
                    <td className="p-4 text-gray-600">URL schicken</td>
                    <td className="p-4 text-gray-600">Ehrliche Einsch&auml;tzung</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-medium text-black">Audit & Strategie</td>
                    <td className="p-4 text-gray-600">1&ndash;3 Tage</td>
                    <td className="p-4 text-gray-600">Briefing-Gespr&auml;ch</td>
                    <td className="p-4 text-gray-600">Strategie + Festpreis</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-black">Umsetzung</td>
                    <td className="p-4 text-gray-600">10&ndash;14 Tage</td>
                    <td className="p-4 text-gray-600">CMS-Zugang geben</td>
                    <td className="p-4 text-gray-600">KI-ready Website</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-medium text-black">Content & Autorit&auml;t</td>
                    <td className="p-4 text-gray-600">Monat 2&ndash;3</td>
                    <td className="p-4 text-gray-600">Feedback geben</td>
                    <td className="p-4 text-gray-600">Erste KI-Zitierungen</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-brand-accent/5">
                    <td className="p-4 font-semibold text-brand-accent">Ergebnisse</td>
                    <td className="p-4 text-gray-600">ab Monat 3</td>
                    <td className="p-4 text-gray-600">Report lesen</td>
                    <td className="p-4 font-medium text-brand-accent">Messbare KI-Sichtbarkeit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-gray-500 mt-6">
              Der wichtigste Punkt: <strong className="text-black">Dein Zeitaufwand ist minimal.</strong> Das Meiste passiert auf meiner Seite. Du musst kein KI-Experte werden &ndash; daf&uuml;r bezahlst du mich.
            </p>

            <div className="bg-white border-2 border-brand-accent rounded-2xl p-6 md:p-8 shadow-sm mt-8">
              <p className="text-sm font-bold text-brand-accent mb-3">Das Kleingedruckte (das eigentlich gro&szlig;gedruckt sein sollte)</p>
              <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                <p>
                  &#8226; <strong className="text-black">Keine Mindestlaufzeit</strong> &ndash; das einmalige Upgrade ist ein Projekt mit Anfang und Ende. Kein Abo, das sich automatisch verl&auml;ngert.
                </p>
                <p>
                  &#8226; <strong className="text-black">Festpreise</strong> &ndash; der Preis, den ich nenne, ist der Preis, den du zahlst. Keine &bdquo;unvorhergesehenen Mehraufw&auml;nde&ldquo;.
                </p>
                <p>
                  &#8226; <strong className="text-black">Zufriedenheit vor Rechnung</strong> &ndash; ich stelle die Schlussrechnung erst, wenn die Umsetzung abgenommen ist. Nicht vorher.
                </p>
              </div>
            </div>
        </section>

        {/* Für wen sich das lohnt — und für wen nicht */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-8">
              F&uuml;r wen sich das lohnt &ndash; und f&uuml;r wen nicht
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-brand-accent mb-4">&#10003; Lohnt sich f&uuml;r</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#8250;</span>
                    <span>Dienstleister mit Auftragswerten ab 1.000&nbsp;&euro;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#8250;</span>
                    <span>Lokale Unternehmen in st&auml;dtischen Gebieten</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#8250;</span>
                    <span>B2B-Unternehmen mit erkl&auml;rungsbed&uuml;rftigen Leistungen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#8250;</span>
                    <span>&Auml;rzte, Anw&auml;lte, Berater, Handwerker, Agenturen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-accent shrink-0 mt-1">&#8250;</span>
                    <span>Jeder, dessen Kunden &bdquo;Wer ist der beste X in Y?&ldquo; googeln (oder ChatGPT fragen)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4">&#10007; Lohnt sich (noch) nicht f&uuml;r</h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#8250;</span>
                    <span>Unternehmen ohne funktionierende Website</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#8250;</span>
                    <span>Sehr nischige B2B-Produkte mit 20&nbsp;potenziellen Kunden weltweit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#8250;</span>
                    <span>Wer sofortige Ergebnisse in 48&nbsp;Stunden erwartet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0 mt-1">&#8250;</span>
                    <span>Unternehmen, die noch kein Grundprodukt haben (erst das Angebot, dann das Marketing)</span>
                  </li>
                </ul>
              </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-black mb-10">
              H&auml;ufig gestellte Fragen zum Ablauf
            </h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{item.q}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Verwandte Guides */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto pb-8">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-xl font-semibold text-black mb-5">Verwandte Guides:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/wissen/ki-sichtbarkeit-kosten"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">KI-Sichtbarkeit Kosten</p>
                  <p className="text-sm text-gray-500 mt-1">Was AI SEO wirklich kostet &ndash; transparente Preise und ROI-Rechnung.</p>
                </a>
                <a
                  href="/wissen/ai-seo-agentur"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">AI SEO Agentur</p>
                  <p className="text-sm text-gray-500 mt-1">Was eine gute AI SEO Agentur leistet und worauf du achten solltest.</p>
                </a>
                <a
                  href="/wissen/ki-sichtbarkeit"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">KI-Sichtbarkeit</p>
                  <p className="text-sm text-gray-500 mt-1">Wie Unternehmen in KI-Antworten sichtbar werden.</p>
                </a>
                <a
                  href="/wissen/ki-sichtbarkeit-messen"
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-accent transition-colors group"
                >
                  <p className="text-base font-semibold text-black group-hover:text-brand-accent transition-colors">KI-Sichtbarkeit messen</p>
                  <p className="text-sm text-gray-500 mt-1">Wie du KI-Sichtbarkeit trackst und welche Metriken wirklich z&auml;hlen.</p>
                </a>
              </div>
            </div>
        </section>

        {/* Dark CTA */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
            <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-4">
                Starte mit der kostenlosen Kurzanalyse
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
                15&nbsp;Minuten. Deine URL. Eine ehrliche Einsch&auml;tzung, ob KI-Sichtbarkeit f&uuml;r dich Sinn macht. Kein Pitch, kein Druck, kein Kleingedrucktes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button href="/ai-sichtbarkeit-now" text="Kostenlose Kurzanalyse starten" primary />
                <a
                  href="/wissen/ki-sichtbarkeit-kosten"
                  className="text-gray-400 hover:text-white transition-colors text-base underline underline-offset-4"
                >
                  Erst die Kosten verstehen
                </a>
              </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, OpenAIIcon } from "@/components/ui/Icons";

type FAQItem = {
  q: string;
  a: string;
};

/* Zeitleiste. Jede Zeile ist ein datiertes, nachpruefbares Ereignis. Die
   letzte Zeile ist die einzige, die aus dem eigenen Konto stammt, und sie
   traegt das Verkaufsargument der Seite. */
const TIMELINE = [
  {
    date: "16.01.2026",
    title: "OpenAI kündigt Werbung in ChatGPT an",
    body: "Nach Monaten aus Gerüchten wird das Werbegeschäft offiziell. Der Pilot startet im Februar in den USA, im Mai folgt der Ads Manager.",
  },
  {
    date: "24.08.2026",
    title: "Anzeigen gehen in Deutschland live",
    body: "Deutschland, Österreich, die Schweiz und 28 weitere europäische Märkte kommen dazu. Buchbar zunächst nur über das Ads Solutions Team von OpenAI und über Agenturpartner.",
  },
  {
    date: "31.08.2026",
    title: "Der Self-Serve-Zugang öffnet",
    body: "Der Ads Manager geht als Beta für berechtigte Werbetreibende in Deutschland auf. Konto anlegen, Kreditkarte hinterlegen, Kampagne bauen. Kein Mindestbudget, kein Agenturvertrag.",
  },
  {
    date: "01.09.2026",
    title: "Wir fahren die ersten eigenen Kampagnen",
    body: "Zwei Kampagnen live im Konto, Pixel eingebunden, Conversion konfiguriert. Kein Konzeptpapier, sondern ein laufendes Konto mit echten Auslieferungsdaten.",
    own: true,
  },
];

/* Mechanik der Auslieferung. Alles hier ist von OpenAI kommuniziert und
   nicht aus dem eigenen Konto abgeleitet. */
const MECHANICS = [
  {
    title: "Sponsored Cards unter der Antwort",
    body: "Die Anzeige steht unterhalb der Antwort von ChatGPT, klar gekennzeichnet und optisch vom Antworttext getrennt. Bild, Überschrift, kurzer Beschreibungstext, Klick auf deine Seite. OpenAI gibt an, dass Anzeigen die Antworten selbst nicht beeinflussen.",
    tag: "Format",
  },
  {
    title: "Der Gesprächskontext ersetzt das Keyword",
    body: "Ausgesteuert wird nicht über ein einzelnes Suchwort, sondern über den Zusammenhang der Unterhaltung. Wer gerade Anbieter vergleicht, eine Software auswählt oder eine Reise plant, ist im Moment der Entscheidung ansprechbar.",
    tag: "Aussteuerung",
  },
  {
    title: "Keine personalisierte Werbung im EWR",
    body: "Im Europäischen Wirtschaftsraum und in der Schweiz nutzt OpenAI zum Start keine Chatverläufe, gespeicherten Erinnerungen oder Nutzerprofile für Werbung. Übrig bleiben Gesprächskontext, Sprache und ungefährer Standort.",
    tag: "Datenschutz",
  },
  {
    title: "Nur eingeloggt, nur volljährig, nicht überall",
    body: "Anzeigen erscheinen bei angemeldeten, als volljährig eingestuften Nutzern der Tarife Free und Go. Plus und Pro bleiben werbefrei. Bei sensiblen Themen wie Gesundheit oder Politik wird nichts ausgespielt.",
    tag: "Reichweite",
  },
];

/* Leistungsumfang. Baustein 3 ist der, den fast niemand sauber liefert. */
const DELIVERABLES = [
  {
    title: "Zugang und Konto",
    body: "Werbekonto anlegen, Abrechnung einrichten, prüfen ob deine Branche im Ads Manager überhaupt freigeschaltet ist. Das ist der Schritt, an dem die meisten hängen bleiben, und er kostet fünf Minuten statt zwei Wochen.",
  },
  {
    title: "Kampagnenstruktur und Gebote",
    body: "Kampagnen, Anzeigengruppen und Anzeigen so aufgebaut, dass sich später ablesen lässt, was gewirkt hat. Zielland Deutschland, Zielsetzung passend zum Angebot, Höchstgebote in dem Rahmen, den OpenAI für den Start empfiehlt.",
  },
  {
    title: "Conversion-Tracking, das vor dem Datenschutz besteht",
    body: "Der OpenAI-Pixel sendet in seiner Grundeinstellung, solange ihm nicht ausdrücklich widersprochen wurde. Für eine deutsche Website ist die einzige saubere Lösung, das Skript erst nach der Einwilligung im Cookie-Banner zu laden. Genau so läuft es auf dieser Seite, und genau so bauen wir es bei dir.",
  },
  {
    title: "Anzeige und Landingpage als ein Stück",
    body: "Ein Klick aus ChatGPT ist teuer erkauft und landet zu oft auf einer Startseite, die eine andere Frage beantwortet. Wir schreiben die Anzeige und die Zielseite zusammen, damit die Erwartung aus der Anzeige auf der Seite eingelöst wird.",
  },
];

const NUMBERS = [
  {
    value: "3 bis 5 $",
    label: "Höchstgebot pro Klick, das OpenAI Werbetreibenden für den Start einer CPC-Kampagne empfiehlt.",
  },
  {
    value: "rund 60 %",
    label: "niedrigere durchschnittliche Kosten pro Kauf innerhalb von sechs Wochen, nach Angaben von OpenAI.",
  },
  {
    value: "1 Mrd. $",
    label: "annualisierter Umsatz, den OpenAI für ChatGPT Ads nach weniger als 200 Tagen meldet.",
  },
];

const STEPS = [
  {
    when: "Tag 0",
    title: "Kostenloser 15-Minuten-Call",
    body: "Wir sehen im Konto nach, ob deine Branche freigeschaltet ist, und schauen, welche Fragen deine Kunden in ChatGPT überhaupt stellen. Danach weißt du, ob sich ein Test lohnt. Kostet nichts und verpflichtet zu nichts.",
  },
  {
    when: "Woche 1",
    title: "Konto, Tracking, erste Kampagne",
    body: "Werbekonto und Abrechnung stehen, der Pixel liegt eingewilligungsgeprüft auf der Seite, die erste Kampagne läuft mit einem klar begrenzten Testbudget. Ab hier fließen echte Auslieferungsdaten.",
  },
  {
    when: "Woche 2 bis 6",
    title: "Auswerten und nachschärfen",
    body: "Anzeigen, Gebote und Zielseiten anhand der eigenen Zahlen anpassen, nicht anhand von Branchenbenchmarks, die es für diesen Kanal noch gar nicht gibt. Am Ende steht eine Entscheidung: ausbauen oder abschalten.",
  },
];

const FAQS: FAQItem[] = [
  {
    q: "Was sind ChatGPT Ads?",
    a: "ChatGPT Ads sind bezahlte Anzeigen, die OpenAI innerhalb von ChatGPT ausspielt. Sie erscheinen als gekennzeichnete Sponsored Cards unterhalb der Antwort, optisch vom Text der KI getrennt, und bestehen aus Bild, Überschrift und kurzem Beschreibungstext. Ausgewählt werden sie nach dem Kontext des Gesprächs, nicht nach einem einzelnen Suchbegriff. OpenAI gibt an, dass die Anzeigen die Antworten selbst nicht beeinflussen. Gebucht werden sie im Ads Manager von OpenAI.",
  },
  {
    q: "Seit wann gibt es ChatGPT Ads in Deutschland?",
    a: "Seit dem 24. August 2026. An diesem Tag hat OpenAI Anzeigen in ChatGPT für Deutschland, Österreich, die Schweiz und 28 weitere europäische Märkte freigeschaltet. Buchbar waren sie zunächst nur über das Ads Solutions Team von OpenAI sowie über Agentur- und Technologiepartner. Der Self-Serve-Zugang im Ads Manager ist am 31. August 2026 als Beta für Werbetreibende in Deutschland geöffnet worden.",
  },
  {
    q: "Kann ich ChatGPT Ads selbst schalten?",
    a: "Ja, seit dem 31. August 2026. Der Ads Manager ist in der Beta für berechtigte Werbetreibende in Deutschland offen: Konto anlegen, Kreditkarte hinterlegen, Kampagne bauen. Ein Mindestbudget verlangt OpenAI nicht, und du brauchst weder Agenturvertrag noch Partnerzugang. Der Aufwand liegt nicht im Zugang, sondern im sauberen Aufbau von Kampagnenstruktur, Geboten, Anzeigen und Conversion-Tracking.",
  },
  {
    q: "Was kosten ChatGPT Ads?",
    a: "Abgerechnet wird wahlweise per CPC, also Kosten pro Klick, oder per CPM, also Kosten pro tausend Impressionen. OpenAI empfiehlt für den Start ein Höchstgebot von 3 bis 5 US-Dollar pro Klick. Die Preise sind zuletzt gefallen: Nach Angaben von OpenAI sind die durchschnittlichen Kosten pro Kauf innerhalb von sechs Wochen um rund 60 Prozent gesunken, der durchschnittliche CPM um rund 20 Prozent, ausgehend von rund 60 US-Dollar zu Jahresbeginn. Das Mediabudget zahlst du direkt an OpenAI, unabhängig vom Honorar für Aufbau und Betreuung.",
  },
  {
    q: "Wo genau erscheinen die Anzeigen?",
    a: "Unterhalb der Antwort von ChatGPT, klar als Anzeige gekennzeichnet und visuell vom Antworttext abgesetzt. Das Format heißt Sponsored Card und ähnelt einer Anzeige in einem Feed: Bild, Überschrift, kurzer Text. Der Klick führt auf deine Landingpage.",
  },
  {
    q: "Sehen alle ChatGPT-Nutzer Werbung?",
    a: "Nein. Anzeigen werden an eingeloggte, als volljährig eingestufte Nutzer der Tarife Free und Go ausgespielt. ChatGPT Plus und Pro bleiben werbefrei. Bei sensiblen Themen wie Gesundheit oder Politik spielt OpenAI keine Werbung aus. Deine Reichweite ist also kleiner als die oft zitierte Gesamtnutzerzahl von ChatGPT.",
  },
  {
    q: "Ist die Werbung in Deutschland personalisiert?",
    a: "Zum Start nicht. Im Europäischen Wirtschaftsraum und in der Schweiz verzichtet OpenAI zunächst auf personalisierte Werbung: Chatverläufe, gespeicherte Erinnerungen und Nutzerprofile werden dafür nicht herangezogen. Ausgesteuert wird über den Gesprächskontext, die Sprache und den ungefähren Standort. Für dich heißt das, dass der Kontext der Frage das Targeting ersetzt, das du aus Meta Ads oder LinkedIn Ads kennst.",
  },
  {
    q: "Welche Branchen dürfen keine ChatGPT Ads schalten?",
    a: "OpenAI schaltet den Ads Manager nur für berechtigte Werbetreibende frei und schließt einzelne Kategorien aus. Nach dem Stand von Ende August 2026 betrifft das in Deutschland unter anderem Arztpraxen, Kliniken, Therapeuten, Versicherungsmakler, Finanzberater und Kreditvermittler. Die Liste ändert sich laufend, deshalb prüfen wir deinen Fall direkt im Konto, bevor du Budget einplanst.",
  },
  {
    q: "Wie messe ich Conversions aus ChatGPT Ads?",
    a: "Über den OpenAI-Pixel, ein JavaScript-SDK, das du auf deiner Website einbindest und das Ereignisse an OpenAI meldet. Ein Punkt, den die Installationsanleitung nicht erwähnt: Der interne Einwilligungszustand des Pixels startet auf „nicht gesetzt“, und gesendet wird, solange nicht ausdrücklich widersprochen wurde. Für eine deutsche Website ist die einzige saubere Lösung deshalb, das Skript erst nach der Einwilligung im Cookie-Banner zu laden. Die Folge: ChatGPT Ads sieht nur die eingewilligten Sitzungen und zählt niedriger als ein cookieloses Analytics-Tool. Das ist kein Messfehler, sondern der Preis für eine saubere Lösung, und man muss es beim Auswerten wissen.",
  },
  {
    q: "Ersetzen ChatGPT Ads die organische KI-Sichtbarkeit?",
    a: "Nein, sie ergänzen sie. Anzeigen kaufen dir einen Platz unter der Antwort, ab dem ersten Tag und genau so lange, wie du zahlst. Generative Engine Optimization sorgt dafür, dass deine Marke in der Antwort selbst genannt wird, und wirkt weiter, wenn das Budget aus ist. Wer beides macht, steht in der Antwort und darunter.",
  },
  {
    q: "Lohnt sich das für kleine Unternehmen?",
    a: "Gerade jetzt kann es sich lohnen, weil noch wenige deutsche Wettbewerber im Konto sind und Klickpreise in einer dünn besetzten Auktion niedriger liegen als in einem reifen Kanal. Garantien gibt es nicht: Der Kanal ist wenige Wochen alt, es gibt keine Benchmarks für deine Branche und keine belastbaren Erfahrungswerte. Sinnvoll ist ein klar begrenztes Testbudget neben den Kanälen, die schon funktionieren, kein Umschichten.",
  },
];

export default function ChatGptAdsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ChatGPT Ads Setup und Betreuung",
    serviceType: "ChatGPT Ads / Paid Advertising in ChatGPT",
    areaServed: "DE",
    url: "https://aiseo.hamburg/chatgpt-ads",
    description:
      "Aufbau und Betreuung von Anzeigenkampagnen in ChatGPT: Werbekonto und Zugang, Kampagnenstruktur und Gebote, Conversion-Tracking mit dem OpenAI-Pixel hinter der Cookie-Einwilligung, dazu Anzeige und Landingpage aus einer Hand.",
    provider: {
      "@type": "Organization",
      name: "aiseo.hamburg",
      url: "https://aiseo.hamburg",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://aiseo.hamburg/termin",
      description:
        "Kostenloser 15-Minuten-Call zur Prüfung, ob die Branche im Ads Manager freigeschaltet ist und ob sich ein Testbudget lohnt.",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://aiseo.hamburg" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://aiseo.hamburg/leistungen" },
      { "@type": "ListItem", position: 3, name: "ChatGPT Ads", item: "https://aiseo.hamburg/chatgpt-ads" },
    ],
  };

  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main>
        {/* ========== HERO: Lesespalte links, im rechten Kanal die echte eigene
            Anzeige. Der Screenshot ist der einzige Beleg, den ein Wettbewerber
            in dieser Woche nicht nachbauen kann, deshalb steht er ueber der
            Falz und nicht in einer Referenzsektion weiter unten. ========== */}
        <section className="pt-28 pb-block lg:pt-32">
          <div className="mx-auto grid max-w-article gap-block px-6 lg:grid-cols-12 lg:gap-x-rule lg:px-12">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="inline-flex items-center gap-2 text-micro uppercase tracking-eyebrow text-brand-accent-ink">
                  <OpenAIIcon className="w-3.5 h-3.5" />
                  ChatGPT Ads, Deutschland
                </p>
                <h1 className="mt-flow text-heading sm:text-title xl:text-display font-semibold text-black">
                  Werbung in ChatGPT, <span className="text-brand-accent">bevor es teuer wird</span>
                </h1>
                <p className="mt-flow max-w-measure text-lead text-brand-muted">
                  Seit dem 24. August 2026 sieht Deutschland Anzeigen in ChatGPT. Seit dem 31. August kann sie jedes Unternehmen selbst buchen. Ich fahre seit dem ersten Tag eigene Kampagnen im Ads Manager und baue dir dasselbe Setup auf.
                </p>
                <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                  <Button href="/termin" primary text="Kostenlosen 15-Min-Call buchen" className="!py-4 !px-8" />
                  <Button href="#ablauf" text="Wie das abläuft" className="!py-4 !px-8" />
                </div>
                <p className="mt-flow text-meta text-brand-subtle">
                  Im Call prüfen wir zuerst, ob deine Branche im Ads Manager überhaupt freigeschaltet ist. Kostet nichts, dauert 15 Minuten.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn>
                <figure className="lg:pt-16">
                  <div className="rounded-card border border-brand-line bg-white p-3 shadow-card sm:p-4">
                    <img
                      src="/image/chatgpt-ads/chatgpt-anzeige-aiseo.webp"
                      width={732}
                      height={274}
                      alt="Sponsored Card von aiseo.hamburg in ChatGPT mit der Überschrift Frag die KI nach deiner Branche und dem Hinweis Anzeige"
                      className="w-full rounded-lg"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Keine Illustration: unsere eigene Anzeige, wie ChatGPT sie ausliefert. Screenshot aus dem Ads Manager, 1. September 2026.
                  </figcaption>
                </figure>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========== ZEITLEISTE: vier datierte Zeilen. Die letzte kommt aus dem
            eigenen Konto und ist accent-markiert. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Stand der Dinge</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Wie neu dieser Kanal wirklich ist
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Vier Daten. Zwischen dem Start in Deutschland und diesem Text liegt gut eine Woche.
                  </p>
                </div>

                <div>
                  <div className="hidden lg:grid lg:grid-cols-[110px_1fr] lg:gap-x-flow">
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Datum</p>
                    <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ereignis</p>
                  </div>
                  <ol className="mt-2">
                    {TIMELINE.map((item) => (
                      <li
                        key={item.date}
                        className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[110px_1fr] lg:gap-x-flow"
                      >
                        <p
                          className={`text-meta tabular-nums ${
                            item.own ? "font-semibold text-brand-accent-ink" : "text-brand-subtle"
                          }`}
                        >
                          {item.date}
                        </p>
                        <div>
                          <h3 className="text-lead font-semibold text-brand-text">{item.title}</h3>
                          <p className="max-w-measure text-meta text-brand-muted">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== BELEG: Screenshot des laufenden Kontos. ========== */}
        <section className="bg-brand-surface border-y border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-5">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Der Beleg</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Kein Konzept. Ein laufendes Konto.
                  </h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Über ChatGPT Ads schreiben gerade viele. Deutlich weniger haben den Ads Manager offen. Wir haben ihn seit dem Tag offen, an dem der Self-Serve-Zugang in Deutschland aufging, mit zwei eigenen Kampagnen, eingebundenem Pixel und konfigurierter Conversion.
                  </p>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Das ist der Unterschied zwischen jemandem, der dir erklärt, wie der Kanal vermutlich funktioniert, und jemandem, der dir zeigt, was er im eigenen Konto bereits ausgegeben hat.
                  </p>
                  <p className="mt-flow text-meta text-brand-subtle">
                    Wie wir Ergebnisse sonst belegen, steht auf{' '}
                    <Link href="/ergebnisse" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Ergebnisse
                    </Link>
                    , mit nachprüfbaren Zahlen aus Search Console und Bing Webmaster Tools.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <figure>
                    <div className="overflow-hidden rounded-card border border-brand-line bg-white p-2 shadow-card sm:p-3">
                      <img
                        src="/image/chatgpt-ads/ads-manager-kampagnen.webp"
                        width={1464}
                        height={808}
                        alt="OpenAI Ads Manager in der Beta mit zwei aktiven Kampagnen von aiseo.hamburg in der Anzeigenübersicht"
                        className="w-full rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                      Anzeigenübersicht im Ads Manager, zwei aktive Kampagnen. Screenshot vom 1. September 2026.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== WARUM JETZT: das eigentliche Verkaufsargument, mit den
            drei Zahlen, die OpenAI selbst nennt. ========== */}
        <section className="py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-7">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Warum jetzt</p>
                  <h2 className="mt-1 text-subheading md:text-heading lg:text-title font-semibold text-black">
                    Eine leere Auktion füllt sich nur einmal
                  </h2>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Jeder Werbekanal hatte eine Phase, in der Klicks billig waren, weil kaum jemand mitgeboten hat. Bei Google Ads lag sie um 2005, bei Facebook um 2013. Wer damals dabei war, hat für Jahre günstiger eingekauft als alle, die später kamen.
                  </p>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    ChatGPT Ads ist in Deutschland gerade in dieser Phase. Der Self-Serve-Zugang ist wenige Tage alt, die meisten deutschen Wettbewerber haben noch kein Konto, und die Preise, die OpenAI selbst nennt, fallen statt zu steigen. Diese Konstellation hält nicht.
                  </p>
                  <p className="mt-stack max-w-measure border-t border-brand-edge pt-4 text-subheading font-semibold text-brand-text">
                    Wer jetzt anfängt, kauft eine Weile günstiger ein als alle, die 2027 dazukommen.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <img
                    src="/image/chatgpt-ads/sponsored-card-1536.webp"
                    srcSet="/image/chatgpt-ads/sponsored-card-860.webp 860w, /image/chatgpt-ads/sponsored-card-1536.webp 1536w"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    width={1536}
                    height={768}
                    alt="Mehrere leere Karten schweben gestaffelt vor warmem Hintergrund, eine davon mit grüner Kante nach vorne gehoben"
                    className="w-full rounded-card"
                    loading="lazy"
                    decoding="async"
                  />
                  <dl className="mt-stack">
                    {NUMBERS.map((n) => (
                      <div key={n.value} className="border-t border-brand-edge py-3">
                        <dt className="text-subheading font-semibold tabular-nums text-brand-accent-ink">{n.value}</dt>
                        <dd className="mt-0.5 text-meta text-brand-muted">{n.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 text-micro text-brand-subtle">
                    Angaben von OpenAI, Stand 31. August 2026.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== MECHANIK ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Mechanik</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Wie ChatGPT Ads funktionieren
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Vier Punkte, die den Kanal von Google Ads und Meta Ads unterscheiden.
                  </p>
                </div>

                <div>
                  {MECHANICS.map((m, i) => (
                    <div
                      key={m.title}
                      className="grid gap-y-1 border-t border-brand-edge py-3 lg:grid-cols-[1fr_130px] lg:gap-x-flow"
                    >
                      <div>
                        <h3 className="flex items-baseline gap-2 text-lead font-semibold text-brand-text">
                          <span className="text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                          {m.title}
                        </h3>
                        <p className="max-w-measure text-meta text-brand-muted">{m.body}</p>
                      </div>
                      <p className="text-micro text-brand-subtle lg:pt-1.5">{m.tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== LEISTUNG ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Leistung</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Was wir übernehmen
                  </h2>
                  <p className="mt-flow text-meta text-brand-muted">
                    Vier Bausteine. Den dritten liefert derzeit fast niemand sauber.
                  </p>
                </div>

                <div>
                  {DELIVERABLES.map((d, i) => (
                    <div key={d.title} className="flex gap-flow border-t border-brand-edge py-3">
                      <span className="w-7 shrink-0 pt-1 text-micro tabular-nums text-brand-subtle">{`0${i + 1}`}</span>
                      <div>
                        <h3 className="text-lead font-semibold text-brand-text">{d.title}</h3>
                        <p className="max-w-measure text-meta text-brand-muted">{d.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABLAUF: Foto links, drei Schritte mit Zeitrahmen rechts. ========== */}
        <section id="ablauf" className="scroll-mt-navbar border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-5">
                  <img
                    src="/image/chatgpt-ads/setup-hamburg-1400.webp"
                    srcSet="/image/chatgpt-ads/setup-hamburg-760.webp 760w, /image/chatgpt-ads/setup-hamburg-1400.webp 1400w"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    width={1400}
                    height={933}
                    alt="Heller Schreibtisch am Fenster mit Blick über die Dächer von Hamburg, Laptop, Notizbuch und Kaffeetasse im Morgenlicht"
                    className="w-full rounded-card"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mt-3 border-t border-brand-hairline pt-3 text-meta text-brand-subtle">
                    Gearbeitet wird aus Hamburg, direkt mit dir und ohne Zwischenebene.{' '}
                    <Link href="/ueber-mich" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Wer dahintersteckt
                    </Link>
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ablauf</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Von der ersten Frage zur ersten Auslieferung
                  </h2>
                  <ol className="mt-stack">
                    {STEPS.map((s) => (
                      <li key={s.when} className="grid gap-y-1 border-t border-brand-edge py-3 sm:grid-cols-[120px_1fr] sm:gap-x-flow">
                        <p className="text-meta font-medium text-brand-accent-ink">{s.when}</p>
                        <div>
                          <h3 className="text-lead font-semibold text-brand-text">{s.title}</h3>
                          <p className="max-w-measure text-meta text-brand-muted">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== KOSTEN: getrennt nach Mediabudget und Honorar. Es steht
            hier bewusst kein erfundener Festpreis, sondern die beiden Zahlen,
            die auf /preise ohnehin veroeffentlicht sind. ========== */}
        <section className="bg-brand-night py-rule text-white">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-5">
                  <h2 className="text-subheading md:text-heading font-semibold lg:text-subheading">Was es kostet</h2>
                  <p className="mt-flow max-w-measure text-meta text-brand-line">
                    Zwei getrennte Posten. Wer sie zusammenwirft, kann hinterher nicht sagen, ob der Kanal funktioniert hat oder die Betreuung zu teuer war.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="border-t border-white/15 py-4">
                    <h3 className="text-lead font-semibold">Mediabudget</h3>
                    <p className="mt-1 max-w-measure text-meta text-brand-line">
                      Zahlst du direkt an OpenAI, per Kreditkarte im eigenen Konto. Kein Mindestbudget, jederzeit abschaltbar. Für einen ersten Test reicht ein Betrag, dessen Verlust dich nicht stört.
                    </p>
                  </div>
                  <div className="border-t border-white/15 py-4">
                    <h3 className="text-lead font-semibold">Aufbau und Betreuung</h3>
                    <p className="mt-1 max-w-measure text-meta text-brand-line">
                      Läuft über dieselben Pakete wie alles andere: einmaliger Umsetzungs-Sprint ab 1.500 Euro, laufende Betreuung ab 600 Euro im Monat. Den Festpreis für deinen Fall nennen wir nach dem Call, vorher nicht.
                    </p>
                    <Link
                      href="/preise"
                      className="mt-3 inline-flex items-center gap-1.5 text-meta font-medium text-brand-accent hover:gap-2.5"
                    >
                      Alle Pakete und Preise
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="border-t border-white/15 py-4">
                    <h3 className="text-lead font-semibold">Wofür wir kein Geld nehmen</h3>
                    <p className="mt-1 max-w-measure text-meta text-brand-line">
                      Für den 15-Minuten-Call und für die Prüfung, ob deine Branche im Ads Manager freigeschaltet ist. Wenn sie es nicht ist, sagen wir das im Call und du sparst dir den Rest.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== EHRLICHKEIT: qualifiziert Anfragen vor, statt sie zu
            sammeln und spaeter abzusagen. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <div>
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Ehrlich gesagt</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    Für wen das gerade nicht passt
                  </h2>
                </div>

                <div className="max-w-measure text-body text-brand-muted">
                  <p>
                    Nicht jede Branche ist im Ads Manager freigeschaltet. Nach dem Stand von Ende August 2026 sind in Deutschland unter anderem Arztpraxen, Kliniken, Therapeuten, Versicherungsmakler, Finanzberater und Kreditvermittler ausgeschlossen. Wenn du dazugehörst, endet der Call nach fünf Minuten, und wir reden stattdessen über organische Sichtbarkeit.
                  </p>
                  <p className="mt-flow">
                    Und es gibt keine Benchmarks. Der Kanal ist wenige Wochen alt, niemand kann dir seriös sagen, was ein Lead in deiner Branche kosten wird, wir eingeschlossen. Wer dir heute eine Zahl garantiert, rät. Sinnvoll ist ein begrenztes Testbudget neben den Kanälen, die schon laufen, und eine Entscheidung nach sechs Wochen anhand deiner eigenen Daten.
                  </p>
                  <p className="mt-stack border-t border-brand-edge pt-4 text-subheading font-semibold text-brand-text">
                    Wir versprechen dir ein sauber gebautes Konto und ehrliche Zahlen. Über den Rest entscheiden die ersten sechs Wochen.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== PAID + ORGANISCH: die Bruecke in den Rest der Seite. ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-5">
                  <p className="text-micro uppercase tracking-eyebrow text-brand-subtle">Der doppelte Platz</p>
                  <h2 className="mt-1 text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                    In der Antwort und darunter
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="max-w-measure text-body text-brand-muted">
                    Anzeigen kaufen dir den Platz unter der Antwort, ab Tag eins und genau so lange, wie du zahlst. Sie kaufen dir nicht den Satz, in dem ChatGPT eine Marke von sich aus empfiehlt. Das ist die andere Hälfte, sie heißt Generative Engine Optimization, und sie wirkt weiter, wenn das Budget aus ist.
                  </p>
                  <p className="mt-flow max-w-measure text-body text-brand-muted">
                    Wir machen beides, und das ist der Grund, warum das Setup hier anders aussieht als bei einer reinen Performance-Agentur: Die Zielseite, auf die deine Anzeige zeigt, ist dieselbe Seite, die zitierbar sein muss.
                  </p>
                  <ul className="mt-stack">
                    <li className="border-t border-brand-edge py-3">
                      <Link href="/chatgpt-sichtbarkeit" className="group flex items-baseline justify-between gap-4">
                        <span>
                          <span className="text-lead font-semibold text-brand-text group-hover:text-brand-accent-ink">ChatGPT-Sichtbarkeit</span>
                          <span className="block text-meta text-brand-muted">Organisch in ChatGPT genannt werden, ohne Mediabudget.</span>
                        </span>
                        <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 translate-y-1 text-brand-subtle group-hover:text-brand-accent-ink" />
                      </Link>
                    </li>
                    <li className="border-t border-brand-edge py-3">
                      <Link href="/geo-optimierung" className="group flex items-baseline justify-between gap-4">
                        <span>
                          <span className="text-lead font-semibold text-brand-text group-hover:text-brand-accent-ink">GEO-Optimierung</span>
                          <span className="block text-meta text-brand-muted">Die Disziplin dahinter, über ChatGPT, Perplexity, Claude und Google AI Overviews hinweg.</span>
                        </span>
                        <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 translate-y-1 text-brand-subtle group-hover:text-brand-accent-ink" />
                      </Link>
                    </li>
                    <li className="border-t border-brand-edge py-3">
                      <Link href="/wissen/ki-sichtbarkeit-messen" className="group flex items-baseline justify-between gap-4">
                        <span>
                          <span className="text-lead font-semibold text-brand-text group-hover:text-brand-accent-ink">KI-Sichtbarkeit messen</span>
                          <span className="block text-meta text-brand-muted">Unsere meistzitierte Seite. Wie man Citations zählt, wenn es keine Rankings gibt.</span>
                        </span>
                        <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 translate-y-1 text-brand-subtle group-hover:text-brand-accent-ink" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-stack lg:grid-cols-[260px_1fr] lg:gap-x-stack">
                <h2 className="text-subheading md:text-heading font-semibold text-black lg:text-subheading">
                  Häufige Fragen zu ChatGPT Ads
                </h2>
                <div className="sm:grid sm:grid-cols-2 sm:gap-x-stack">
                  {FAQS.map((item) => (
                    <div key={item.q} className="border-t border-brand-line py-3">
                      <h3 className="text-body font-semibold text-brand-text">{item.q}</h3>
                      <p className="mt-1 text-meta text-brand-muted">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========== ABSCHLUSS ========== */}
        <section className="border-t border-brand-line py-rule">
          <div className="mx-auto max-w-article px-6 lg:px-12">
            <FadeIn>
              <div className="grid gap-block lg:grid-cols-12 lg:gap-x-rule">
                <div className="lg:col-span-6">
                  <h2 className="text-subheading md:text-heading lg:text-title font-semibold text-black">
                    Lass uns nachsehen, ob dein Konto aufgeht
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="max-w-measure text-lead text-brand-muted">
                    15 Minuten, kostenlos. Wir prüfen, ob deine Branche im Ads Manager freigeschaltet ist, welche Fragen deine Kunden in ChatGPT stellen und ob sich ein Testbudget lohnt. Danach weißt du, woran du bist.
                  </p>
                  <div className="mt-stack flex flex-col gap-4 sm:flex-row">
                    <Button href="/termin" primary text="Kostenlosen 15-Min-Call buchen" className="!py-4 !px-8" />
                    <Button href="/contact" text="Lieber schreiben" className="!py-4 !px-8" />
                  </div>
                  <p className="mt-stack border-t border-brand-line pt-3 text-meta text-brand-subtle">
                    Was wir sonst noch machen, steht unter{' '}
                    <Link href="/leistungen" className="font-medium text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4">
                      Leistungen
                    </Link>
                    . Wer ChatGPT lieber erst einmal organisch erobern will, fängt bei der{' '}
                    <Link href="/chatgpt-sichtbarkeit" className="font-medium text-brand-accent-ink underline decoration-brand-line underline-offset-4">
                      ChatGPT-Sichtbarkeit
                    </Link>{' '}
                    an.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

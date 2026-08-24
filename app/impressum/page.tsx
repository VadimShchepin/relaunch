import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ---------------------------------------------------------------------------
   Impressum.

   Not one legal sentence is reworded here. What changed is how it reads:

   - it was a client component with no state, no effect and no event handler,
     so it shipped a bundle to render static law. Now it is a server component;
   - the heading of every block sat on top of its own content in one 800px
     column, which turned 337 words into a 3.071px page. The headings now hang
     in a 13rem label rail and the content sits in the reading column beside
     them, with one hairline per block;
   - two inks instead of one grey: brand-text for the labels, brand-muted for
     the answers, brand-subtle for the meta line;
   - the address and contact blocks are marked up as the key/value pairs they
     actually are (dl/dt/dd) instead of stacked paragraphs.
--------------------------------------------------------------------------- */

type Row = { term: string; value: React.ReactNode };

const PROVIDER: string[] = [
  "Vadim Shchepin",
  "Einzelunternehmer",
  "Flottbeker Drift 1",
  "22607 Hamburg",
  "Deutschland",
];

const EDITORIAL: string[] = [
  "Vadim Shchepin",
  "Flottbeker Drift 1",
  "22607 Hamburg",
  "Deutschland",
];

const CONTACT: Row[] = [
  { term: "E-Mail", value: "hello@aiseo.hamburg" },
  { term: "Telefon", value: "+49 (0) 176 321 94 754" },
];

const SOCIAL: { term: string; label: string; href: string }[] = [
  {
    term: "LinkedIn",
    label: "linkedin.com/in/vadim-shchepin",
    href: "https://www.linkedin.com/in/vadim-shchepin/",
  },
  {
    term: "Instagram",
    label: "instagram.com/aiseo.hamburg",
    href: "https://www.instagram.com/aiseo.hamburg/",
  },
  { term: "X (Twitter)", label: "x.com/aiseo.hamburg", href: "https://x.com/www_snapsite_me" },
  {
    term: "Google Business",
    label: "aiseo.hamburg (Google Business Profile)",
    href: "https://share.google/bkLeWZ9kPt2G8Lwtg",
  },
];

const externalLink =
  "text-brand-text underline decoration-brand-edge decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink";

/** One block: heading in the label rail, content in the reading column. */
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-x-stack gap-y-2 border-t border-brand-hairline py-flow lg:grid-cols-[13rem_minmax(0,1fr)]">
      <h2 className="text-meta font-semibold text-brand-text">{title}</h2>
      <div className="max-w-measure">{children}</div>
    </section>
  );
}

function Lines({ lines }: { lines: string[] }) {
  return (
    <div className="text-meta text-brand-muted">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

function Pairs({ rows }: { rows: Row[] }) {
  return (
    <dl className="grid gap-x-stack gap-y-1 grid-cols-[6.5rem_minmax(0,1fr)] sm:grid-cols-[9rem_minmax(0,1fr)]">
      {rows.map((row) => (
        <React.Fragment key={row.term}>
          <dt className="text-meta text-brand-subtle">{row.term}</dt>
          <dd className="text-meta text-brand-muted">{row.value}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

export default function ImpressumPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main>
        {/* ---------------- HERO ------------------------------------------ */}
        <section className="border-b border-brand-line bg-brand-surface">
          <div className="mx-auto max-w-article px-6 pt-28 pb-stack md:px-10 md:pt-32 lg:px-12">
            <nav aria-label="Breadcrumb" className="text-micro text-brand-subtle">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <a href="/" className="transition-colors hover:text-brand-accent-ink">
                    Startseite
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-brand-text">Impressum</li>
              </ol>
            </nav>

            <p className="mt-stack text-micro font-semibold uppercase tracking-eyebrow text-brand-accent-ink">
              Rechtliches
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-heading text-brand-text sm:text-[2.5rem] sm:leading-[1.1]">
              Impressum
            </h1>
            <p className="mt-4 text-meta text-brand-subtle">Angaben gem&auml;&szlig; § 5 TMG</p>
          </div>
        </section>

        {/* ---------------- BLOCKS ---------------------------------------- */}
        <div className="mx-auto max-w-article px-6 pb-block md:px-10 sm:pb-section lg:px-12">
          <Block title="Diensteanbieter">
            <Lines lines={PROVIDER} />
          </Block>

          <Block title="Kontakt">
            <Pairs rows={CONTACT} />
          </Block>

          <Block title="Social Media">
            <dl className="grid gap-x-stack gap-y-1 grid-cols-[6.5rem_minmax(0,1fr)] sm:grid-cols-[9rem_minmax(0,1fr)]">
              {SOCIAL.map((item) => (
                <React.Fragment key={item.term}>
                  <dt className="text-meta text-brand-subtle">{item.term}</dt>
                  <dd className="text-meta text-brand-muted">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      {item.label}
                    </a>
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </Block>

          <Block title="Umsatzsteuer-ID">
            <p className="text-meta text-brand-muted">
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
              DE360369743
            </p>
            <dl className="mt-2 grid gap-x-stack gap-y-1 grid-cols-[6.5rem_minmax(0,1fr)] sm:grid-cols-[9rem_minmax(0,1fr)]">
              <dt className="text-meta text-brand-subtle">Steuernummer</dt>
              <dd className="text-meta text-brand-muted">41/229/05131</dd>
              <dt className="text-meta text-brand-subtle">Finanzamt</dt>
              <dd className="text-meta text-brand-muted">Hamburg-Nord</dd>
            </dl>
          </Block>

          <Block title="Berufsbezeichnung">
            <Lines
              lines={[
                "Beratung für KI-Sichtbarkeit und digitale Dienstleistungen",
                "Einzelunternehmer nach deutschem Recht",
              ]}
            />
          </Block>

          <Block title="Redaktionell verantwortlich">
            <Lines lines={EDITORIAL} />
          </Block>

          <Block title="EU-Streitschlichtung">
            <p className="text-meta text-brand-muted">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2 text-meta text-brand-muted">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </Block>

          <Block title="Verbraucherstreitbeilegung">
            <p className="text-meta text-brand-muted">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Block>

          <Block title="Haftungsausschluss">
            <div className="space-y-flow">
              <div>
                <h3 className="text-meta font-semibold text-brand-text">Haftung für Inhalte</h3>
                <p className="mt-1.5 text-meta text-brand-muted">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                  als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="text-meta font-semibold text-brand-text">Haftung für Links</h3>
                <p className="mt-1.5 text-meta text-brand-muted">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-meta font-semibold text-brand-text">Urheberrecht</h3>
                <p className="mt-1.5 text-meta text-brand-muted">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </Block>

          <div className="mt-stack border-t border-brand-edge pt-flow">
            <a
              href="/"
              className="text-meta font-medium text-brand-text underline decoration-brand-edge decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
            >
              Zur Startseite
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

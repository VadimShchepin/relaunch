import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="ueber-uns" className="bg-tc-navy-dark py-24 text-stone-50 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-sm lg:order-2">
          <Image
            src="/redesigns/tiemann-co/photos/about-buero-tradition.webp"
            alt="Traditionsreiches Büro von Tiemann & Co. in Hamburg"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="flex flex-col justify-center lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-tc-powder">
            Über uns
          </p>
          <h2 className="mt-4 font-tc-display text-4xl font-light leading-tight sm:text-5xl">
            Ein Familienunternehmen,
            <br />
            <span className="italic text-tc-powder">seit 1948 in Hamburg.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-stone-200/75">
            Tiemann &amp; Co. ist eine Grundstücksverwaltung mit Tradition.
            Seit der Gründung 1948 hat unser Familienunternehmen seinen
            festen Platz auf dem Hamburger Wohnungsmarkt, heute betreuen
            wir gemeinsam mehr als 100 Objekte und über 3.000 Wohnungen in
            und um Hamburg.
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-200/75">
            Persönliche Betreuung ist bei uns kein Werbespruch. Jeder
            Eigentümer erhält vor der jährlichen Versammlung eine klare
            Abrechnung, jede Mieterin und jeder Mieter einen festen
            Ansprechpartner. So entstehen Geschäftsbeziehungen, die über
            Jahrzehnte halten.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:max-w-md">
            <div>
              <p className="font-tc-display text-lg">IVD-Mitglied</p>
              <p className="mt-1 text-sm text-stone-200/60">
                Immobilienverband Deutschland, Bundesverband der Immobilienberater
              </p>
            </div>
            <div>
              <p className="font-tc-display text-lg">Hamburg &amp; Umland</p>
              <p className="mt-1 text-sm text-stone-200/60">
                Vor Ort für Eigentümer, Mieter und Eigentümergemeinschaften
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

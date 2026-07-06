import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="ueber-uns" className="bg-fd-ink py-24 text-stone-50 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-sm lg:order-2">
          <Image
            src="/redesigns/fraembs-dach/photos/project-steildach-landhaus.webp"
            alt="Saniertes Landhaus mit neuem Steildach von Främbs Dachdeckerei"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="flex flex-col justify-center lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fd-copper-light">
            Über uns
          </p>
          <h2 className="mt-4 font-fd-display text-4xl font-light leading-tight sm:text-5xl">
            Handwerkliche Tradition,
            <br />
            <span className="italic text-fd-copper-light">moderne Technik.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-stone-200/75">
            Främbs Dachdeckerei ist ein Hamburger Meisterbetrieb mit hohem
            Anspruch an Qualität und Langlebigkeit. Wir bieten
            Komplettlösungen für Steil- und Flachdach &mdash; von der
            Neueindeckung bis zur behutsamen Sanierung historischer Gebäude,
            bei der wir den ursprünglichen Charakter bewahren.
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-200/75">
            Über 23 Jahre Erfahrung und mehr als 500 abgeschlossene Projekte
            stehen für Verlässlichkeit, saubere Ausführung und einen
            direkten, persönlichen Kontakt vom ersten Termin bis zur
            Übergabe.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:max-w-md">
            <div>
              <p className="font-fd-display text-lg">Meisterbetrieb</p>
              <p className="mt-1 text-sm text-stone-200/60">
                Geprüfte Qualifikation nach deutschem Handwerksrecht
              </p>
            </div>
            <div>
              <p className="font-fd-display text-lg">Hamburg &amp; Umland</p>
              <p className="mt-1 text-sm text-stone-200/60">
                Vor Ort für Privat- und Gewerbekunden
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

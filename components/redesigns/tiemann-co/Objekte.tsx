import Image from "next/image";
import { Reveal } from "./Reveal";
import { objekte } from "@/lib/redesigns/tiemann-co/content";

const spans = [
  "col-span-2 row-span-2 md:col-span-4",
  "col-span-2 row-span-2 md:col-span-2 md:row-span-3",
  "col-span-1 md:col-span-2",
  "col-span-1 md:col-span-2",
  "col-span-2 md:col-span-6",
];

export function Objekte() {
  return (
    <section id="objekte" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-tc-navy">
            Objekte
          </p>
          <h2 className="mt-4 max-w-xl font-tc-display text-4xl font-light leading-tight text-tc-ink sm:text-5xl">
            Immobilien, die
            <br />
            wir <span className="italic text-tc-navy">gut kennen.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[160px] md:grid-cols-6 md:auto-rows-[130px] lg:auto-rows-[160px]">
          {objekte.map((objekt, i) => (
            <Reveal
              key={objekt.title}
              delay={(i % 3) * 0.08}
              className={`group relative overflow-hidden rounded-sm ${spans[i]}`}
            >
              <Image
                src={objekt.image}
                alt={objekt.title}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tc-navy-dark/85 via-tc-navy-dark/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                <p className="[hyphens:auto] break-words font-tc-display text-sm leading-tight text-stone-50 sm:text-lg">
                  {objekt.title}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-stone-200/70 sm:text-xs">
                  {objekt.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

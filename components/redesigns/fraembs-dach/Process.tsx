import { Reveal } from "./Reveal";
import { process } from "@/lib/redesigns/fraembs-dach/content";

export function Process() {
  return (
    <section className="bg-fd-ink py-24 text-stone-50 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fd-copper-light">
            Ablauf
          </p>
          <h2 className="mt-4 max-w-xl font-fd-display text-4xl font-light leading-tight sm:text-5xl">
            So arbeiten <span className="italic text-fd-copper-light">wir.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-fd-copper-light/60 bg-fd-ink font-fd-display text-lg text-fd-copper-light">
                  {item.step}
                </div>
                <h3 className="mt-6 font-fd-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-200/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

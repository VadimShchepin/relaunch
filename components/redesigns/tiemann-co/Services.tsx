"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { services } from "@/lib/redesigns/tiemann-co/content";

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="leistungen" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-tc-navy">
            Leistungen
          </p>
          <h2 className="mt-4 max-w-xl font-tc-display text-4xl font-light leading-tight text-tc-ink sm:text-5xl">
            Komplettlösungen rund
            <br />
            um <span className="italic text-tc-navy">Ihre Immobilie.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="divide-y divide-tc-ink/10 border-y border-tc-ink/10">
            {services.map((service, i) => (
              <button
                key={service.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex w-full items-start gap-6 py-6 text-left text-tc-ink transition-colors ${
                  active === i ? "lg:text-tc-ink" : "lg:text-tc-ink/50"
                }`}
              >
                <span className="font-tc-display text-sm pt-1 text-tc-navy">
                  {service.index}
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-2 font-tc-display text-2xl sm:text-3xl">
                    {service.title}
                    <ArrowUpRight
                      className={`hidden h-5 w-5 transition-all lg:inline-block ${
                        active === i
                          ? "lg:translate-x-0 lg:opacity-100"
                          : "lg:-translate-x-2 lg:opacity-0"
                      }`}
                    />
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-tc-ink/60 lg:hidden">
                    {service.description}
                  </span>
                  <span
                    className={`mt-2 hidden max-w-md text-sm leading-relaxed text-tc-ink/60 transition-all duration-300 lg:block ${
                      active === i
                        ? "opacity-100 max-h-24"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {service.description}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="relative hidden aspect-4/5 overflow-hidden rounded-sm bg-tc-navy-dark lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={services[active].image}
                  alt={services[active].title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

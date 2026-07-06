"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { company, stats } from "@/lib/redesigns/fraembs-dach/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100dvh] min-h-[720px] overflow-hidden bg-fd-ink">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/redesigns/fraembs-dach/photos/hero-modern-villa.webp"
          alt="Modernes Architektenhaus mit präziser Dachverkleidung von Främbs Dachdeckerei"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-fd-ink via-fd-ink/55 to-fd-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-fd-ink/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-fd-copper-light">
          Dachdecker Meisterbetrieb · Hamburg
        </p>
        <h1 className="max-w-3xl font-fd-display text-5xl font-light leading-[1.05] text-stone-50 sm:text-6xl lg:text-7xl">
          Dächer, die man
          <br />
          <span className="italic text-fd-copper-light">der Stadt anvertraut.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-100/80">
          Steildach, Flachdach, Klempnerei, Zimmererarbeiten und Photovoltaik
          aus einer Hand &mdash; präzise verarbeitet von einem Hamburger
          Meisterbetrieb.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#kontakt"
            className="group flex items-center gap-2 rounded-full bg-fd-copper px-7 py-3.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-fd-copper-dark"
          >
            Kostenlose Beratung
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projekte"
            className="rounded-full border border-stone-50/30 px-7 py-3.5 text-sm font-semibold text-stone-50 transition-colors hover:border-stone-50/70"
          >
            Unsere Projekte
          </a>
        </div>

        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-stone-50/15 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-fd-display text-3xl text-stone-50 sm:text-4xl">
                {stat.value}
                <span className="text-fd-copper-light">{stat.suffix}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-stone-200/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <a
        href="#leistungen"
        className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-widest text-stone-100/70 transition-colors hover:text-stone-50 sm:flex lg:right-10"
      >
        Entdecken
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>

      <div className="absolute bottom-0 left-0 right-0 z-10 hidden text-[11px] text-stone-200/60 lg:block">
        <div className="mx-auto max-w-7xl px-10 pb-3">{company.address}</div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { company, stats } from "@/lib/redesigns/tiemann-co/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100dvh] min-h-[720px] overflow-hidden bg-tc-navy-dark">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/redesigns/tiemann-co/photos/hero-elbvorort-villa.webp"
          alt="Elegante Hamburger Villa im Elbvorort-Stil, verwaltet von Tiemann & Co."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-tc-navy-dark via-tc-navy-dark/55 to-tc-navy-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-tc-navy-dark/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-tc-powder">
          Hausverwaltung &amp; Immobilien · Hamburg seit 1948
        </p>
        <h1 className="max-w-3xl font-tc-display text-5xl font-light leading-[1.05] text-stone-50 sm:text-6xl lg:text-7xl">
          Immobilien, die man
          <br />
          <span className="italic text-tc-powder">der Familie anvertraut.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-100/80">
          Verkauf, Vermietung und Verwaltung aus einer Hand: seit 1948
          betreut unser Hamburger Familienunternehmen Eigentümer und
          Mieter mit Weitblick und Verlässlichkeit.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#kontakt"
            className="group flex items-center gap-2 rounded-full bg-tc-powder px-7 py-3.5 text-sm font-semibold text-tc-navy-dark transition-colors hover:bg-stone-50"
          >
            Kostenlose Einschätzung
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#objekte"
            className="rounded-full border border-stone-50/30 px-7 py-3.5 text-sm font-semibold text-stone-50 transition-colors hover:border-stone-50/70"
          >
            Unsere Objekte
          </a>
        </div>

        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-stone-50/15 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-tc-display text-3xl text-stone-50 sm:text-4xl">
                {stat.value}
                <span className="text-tc-powder">{stat.suffix}</span>
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

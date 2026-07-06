"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { RoofMark } from "./RoofMark";
import { company } from "@/lib/redesigns/fraembs-dach/content";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-fd-ink/95 backdrop-blur-sm border-b border-white/10"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-stone-50">
          <RoofMark className="h-7 w-7 text-fd-copper-light" />
          <span className="flex flex-col leading-none">
            <span className="font-fd-display text-xl tracking-wide">FRÄMBS</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-200/70">
              Dachdeckerei
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-100/85 transition-colors hover:text-fd-copper-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-stone-50"
          >
            <Phone className="h-4 w-4 text-fd-copper-light" />
            {company.phone}
          </a>
          <a
            href="#kontakt"
            className="rounded-full bg-fd-copper px-5 py-2.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-fd-copper-dark"
          >
            Angebot anfragen
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-stone-50 lg:hidden"
          aria-label="Menü öffnen"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-fd-ink px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-stone-100/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 pt-2 text-base font-semibold text-stone-50"
            >
              <Phone className="h-4 w-4 text-fd-copper-light" />
              {company.phone}
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-fd-copper px-5 py-3 text-center text-sm font-semibold text-stone-50"
            >
              Angebot anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

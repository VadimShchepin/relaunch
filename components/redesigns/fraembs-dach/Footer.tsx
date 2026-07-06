import { RoofMark } from "./RoofMark";
import { company } from "@/lib/redesigns/fraembs-dach/content";

export function Footer() {
  return (
    <footer className="bg-fd-ink text-stone-200/70">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-stone-50">
            <RoofMark className="h-6 w-6 text-fd-copper-light" />
            <span className="font-fd-display text-lg tracking-wide">
              FRÄMBS DACHDECKEREI
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="#leistungen" className="hover:text-stone-50">
              Leistungen
            </a>
            <a href="#projekte" className="hover:text-stone-50">
              Projekte
            </a>
            <a href="#ueber-uns" className="hover:text-stone-50">
              Über uns
            </a>
            <a href="#kontakt" className="hover:text-stone-50">
              Kontakt
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-50">
              Impressum
            </a>
            <a href="#" className="hover:text-stone-50">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

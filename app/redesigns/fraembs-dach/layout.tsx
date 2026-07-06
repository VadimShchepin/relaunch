import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fd-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-fd-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Främbs Dachdeckerei — Website-Vorschau von aiseo.hamburg",
  description:
    "Vorschau eines Website-Redesigns für Främbs Dachdeckerei, umgesetzt von aiseo.hamburg.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FraembsDachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fraunces.variable} ${manrope.variable} font-fd-sans antialiased bg-stone-50 text-fd-ink`}
    >
      {children}
    </div>
  );
}

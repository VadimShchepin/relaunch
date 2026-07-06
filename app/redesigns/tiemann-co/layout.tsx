import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-tc-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-tc-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tiemann & Co. — Website-Vorschau von aiseo.hamburg",
  description:
    "Vorschau eines Website-Redesigns für Tiemann & Co. KG, umgesetzt von aiseo.hamburg.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TiemannCoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fraunces.variable} ${manrope.variable} font-tc-sans antialiased bg-stone-50 text-tc-ink`}
    >
      {children}
    </div>
  );
}

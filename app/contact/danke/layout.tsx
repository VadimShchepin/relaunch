import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vielen Dank für deine Nachricht | aiseo.hamburg",
  description: "Deine Nachricht ist bei uns angekommen. Wir melden uns schnellstmöglich bei dir.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DankeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminanfrage erhalten | aiseo.hamburg",
  description: "Danke für deine Terminanfrage. Wir bestätigen einen deiner Wunschtermine per E-Mail.",
  openGraph: {
    description: "Danke für deine Terminanfrage. Wir bestätigen einen deiner Wunschtermine per E-Mail.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TerminDankeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

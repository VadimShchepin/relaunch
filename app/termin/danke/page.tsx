import React from "react";
import { ConfirmationPage } from "@/components/ui/ConfirmationPage";

export default function BookingSuccessPage() {
  return (
    <ConfirmationPage
      breadcrumb="Terminanfrage erhalten"
      eyebrow="Terminanfrage eingegangen"
      title="Anfrage erhalten!"
      lead="Danke für deine Terminanfrage. Wir bestätigen einen deiner Wunschtermine per E-Mail und schicken dir den Google-Meet-Link, in der Regel innerhalb von 24 Stunden."
      stepsTitle="Was passiert jetzt?"
      steps={[
        "Wir prüfen deine Wunschtermine und wählen den passenden aus",
        "Du bekommst eine Bestätigung mit Google-Meet-Link per E-Mail",
        "Wir sprechen 15 Minuten über deine KI-Sichtbarkeit",
      ]}
      links={[
        { href: "/", label: "Zur Startseite", primary: true },
        { href: "/wissen", label: "Wissen durchstöbern" },
      ]}
    />
  );
}

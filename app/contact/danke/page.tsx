import React from "react";
import { ConfirmationPage } from "@/components/ui/ConfirmationPage";

export default function ContactSuccessPage() {
  return (
    <ConfirmationPage
      breadcrumb="Nachricht erhalten"
      eyebrow="Nachricht eingegangen"
      title="Vielen Dank!"
      lead="Deine Nachricht ist bei uns angekommen. Wir melden uns schnellstmöglich bei dir, in der Regel innerhalb von 24 Stunden."
      stepsTitle="Was passiert jetzt?"
      steps={[
        "Wir prüfen deine Anfrage und bereiten eine individuelle Antwort vor",
        "Du erhältst eine persönliche Antwort per E-Mail",
        "Wir vereinbaren einen Termin für ein unverbindliches Erstgespräch",
      ]}
      links={[
        { href: "/", label: "Zur Startseite", primary: true },
        { href: "/faq", label: "FAQ durchstöbern" },
      ]}
    />
  );
}

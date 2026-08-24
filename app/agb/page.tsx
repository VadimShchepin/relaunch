import React from "react";
import { Clauses, LegalDocument, type Clause, type LegalSection } from "@/components/legal/LegalDocument";

/* Every clause below is the shipped wording, character for character. The only
   thing this file changed is that the "(1)" markers are no longer inline text
   at the head of a paragraph: they are emitted from the array index and hang in
   their own gutter, so all clause text in the document starts at one x
   position. */
const SECTIONS: { title: string; clauses: Clause[] }[] = [
  {
    title: "Geltungsbereich",
    clauses: [
      {
        text: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die Vadim Shchepin (im Folgenden „Auftragnehmer“) für Unternehmer, Verbraucher oder juristische Personen des öffentlichen Rechts (im Folgenden „Kunde“) erbringt.",
      },
      {
        text: "Gegenstand der Dienstleistungen sind Beratung und Umsetzung von Maßnahmen zur Verbesserung der KI-Sichtbarkeit (AI SEO / GEO / AEO), Webentwicklung sowie damit verbundene digitale Dienstleistungen.",
      },
      {
        text: "Abweichende Vereinbarungen im Einzelfall haben Vorrang vor diesen AGB. Sie bedürfen der Schriftform.",
      },
    ],
  },
  {
    title: "Vertragsschluss",
    clauses: [
      {
        text: "Der Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der Leistungserbringung zustande.",
      },
      {
        text: "Alle Angebote sind freibleibend, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.",
      },
    ],
  },
  {
    title: "Leistungsumfang",
    clauses: [
      {
        text: "Der Umfang der vereinbarten Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung im Angebot oder der Auftragsbestätigung.",
      },
      {
        text: "Der Auftragnehmer ist berechtigt, Dritte mit der Erbringung der Leistungen zu beauftragen, soweit dies dem Kunden mitgeteilt wurde oder aus der Art der Dienstleistung folgt.",
      },
      {
        text: "Der Kunde stellt sicher, dass alle für die Leistungserbringung notwendigen Informationen und Zugänge (z. B. Website-Zugänge, Analytics-Daten) rechtzeitig und vollständig zur Verfügung gestellt werden.",
      },
    ],
  },
  {
    title: "Mitwirkungspflichten des Kunden",
    clauses: [
      {
        text: "Der Kunde unterstützt den Auftragnehmer bei der Erbringung der Leistungen, soweit dies erforderlich und zumutbar ist.",
      },
      {
        text: "Der Kunde ist insbesondere verpflichtet:",
        items: [
          "die erforderlichen Informationen und Unterlagen vollständig und rechtzeitig bereitzustellen",
          "Zugänge zu Drittsystemen (z. B. Website, Analytics) zur Verfügung zu stellen",
          "Änderungen relevanter Daten unverzüglich mitzuteilen",
          "die Leistungsergebnisse zu prüfen und zu genehmigen",
        ],
      },
      {
        text: "Verzögert sich die Leistungserbringung durch Nichterfüllung der Mitwirkungspflichten, verlängern sich die Fristen angemessen.",
      },
    ],
  },
  {
    title: "Vergütung",
    clauses: [
      {
        text: "Die Vergütung richtet sich nach der im Angebot vereinbarten Preisliste. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.",
      },
      {
        text: "Bei Dienstleistungen mit Zeitaufwand wird die Vergütung nach Aufwand, mindestens jedoch nach den im Angebot angegebenen Tagessätzen berechnet.",
      },
      {
        text: "Rechnungen sind sofort nach Erhalt fällig und zahlbar. Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher Höhe berechnet.",
      },
    ],
  },
  {
    title: "Fristen und Termine",
    clauses: [
      {
        text: "Fristen und Termine sind nur verbindlich, wenn sie vom Auftragnehmer ausdrücklich schriftlich bestätigt wurden.",
      },
      {
        text: "Verzögert sich die Leistung durch Umstände, die der Kunde zu vertreten hat, verschieben sich die Fristen angemessen.",
      },
    ],
  },
  {
    title: "Abnahme",
    clauses: [
      {
        text: "Soweit eine Abnahme vorgesehen ist, erklärt der Kunde seine Abnahme, wenn das Leistungsergebnis vertragsgemäß erbracht wurde und keine Mängel vorliegen.",
      },
      {
        text: "Die Abnahme gilt als erteilt, wenn der Kunde das Leistungsergebnis nicht innerhalb von 14 Tagen nach Bereitstellung beanstandet.",
      },
    ],
  },
  {
    title: "Gewährleistung",
    clauses: [
      {
        text: "Der Auftragnehmer gewährleistet, dass die vertraglichen Leistungen vertragsgemäß und mit der erforderlichen Sorgfalt erbracht werden.",
      },
      { text: "Mängel sind unverzüglich nach Entdeckung schriftlich zu rügen." },
      {
        text: "Bei berechtigten Mängelrügen hat der Auftragnehmer das Recht zur Nacherfüllung innerhalb angemessener Frist.",
      },
      {
        text: "Die Gewährleistung entfällt, wenn der Kunde ohne Zustimmung des Auftragnehmers Änderungen an den Leistungen vornimmt oder Dritte damit beauftragt.",
      },
    ],
  },
  {
    title: "Haftung",
    clauses: [
      {
        text: "Die Haftung des Auftragnehmers bei Verletzung von vertraglichen oder außervertraglichen Pflichten ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.",
      },
      {
        text: "Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und nur für den vorhersehbaren, vertragstypischen Schaden.",
      },
      {
        text: "Die Haftung für mittelbare Schäden, entgangenen Gewinn und sonstige Vermögensschäden ist ausgeschlossen, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.",
      },
      {
        text: "Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper oder Gesundheit.",
      },
    ],
  },
  {
    title: "Urheberrecht und Nutzungsrechte",
    clauses: [
      { text: "Alle vom Auftragnehmer erstellten Werke unterliegen dem deutschen Urheberrecht." },
      {
        text: "Der Kunde erhält nach vollständiger Zahlung der Vergütung ein einfaches, zeitlich unbeschränktes Nutzungsrecht an den vertragsgemäß erstellten Werken für die im Vertrag definierten Nutzungszwecke.",
      },
      {
        text: "Der Auftragnehmer behält sich das Recht vor, die erstellten Werke in seinem Portfolio zu Referenzzwecken zu verwenden, soweit keine vertraulichen Informationen offenbart werden.",
      },
    ],
  },
  {
    title: "Geheimhaltung",
    clauses: [
      {
        text: "Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen des anderen Vertragspartners vertraulich zu behandeln und nicht an Dritte weiterzugeben.",
      },
      {
        text: "Die Verpflichtung zur Geheimhaltung besteht auch nach Beendigung des Vertragsverhältnisses fort.",
      },
    ],
  },
  {
    title: "Vertragslaufzeit und Kündigung",
    clauses: [
      {
        text: "Bei Dienstleistungen mit laufender Beratung wird der Vertrag zunächst für die im Angebot angegebene Laufzeit geschlossen und verlängert sich anschließend um den gleichen Zeitraum, wenn nicht mit einer Frist von 4 Wochen zum Ende der Laufzeit gekündigt wird.",
      },
      {
        text: "Bei Projektleistungen endet der Vertrag mit Erfüllung der vereinbarten Leistungen.",
      },
      { text: "Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt." },
    ],
  },
  {
    title: "Schlussbestimmungen",
    clauses: [
      {
        text: "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
      },
      {
        text: "Erfüllungsort und Gerichtsstand ist Hamburg, soweit der Kunde Kaufmann im Sinne des HGB ist.",
      },
      {
        text: "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
      },
    ],
  },
];

function slug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const LEGAL_SECTIONS: LegalSection[] = SECTIONS.map((section, index) => ({
  n: index + 1,
  title: section.title,
  id: slug(section.title),
  body: <Clauses clauses={section.clauses} />,
}));

export default function AGBPage() {
  return (
    <LegalDocument
      breadcrumb="AGB"
      eyebrow="Rechtliches"
      title="Allgemeine Geschäftsbedingungen"
      subtitle="AGB für Dienstleistungen im Bereich KI-Sichtbarkeit und digitale Beratung"
      sections={LEGAL_SECTIONS}
    />
  );
}

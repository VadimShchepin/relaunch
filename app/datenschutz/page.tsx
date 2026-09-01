import React from "react";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

/* Wording is verbatim. What changed is the markup around it:
   - the three questions in section 3 were <p><strong>, which looked like
     headings without being headings. They are <h3> now;
   - the label runs in section 9 ("Zweck:", "Rechtsgrundlage:", ...) and the
     seven rights in section 10 were bold lead-ins inside running text. They
     are definition lists now, so the label and its sentence stop competing
     for the same line;
   - the "Stand" sentence moved from the very bottom, where nobody looks for
     it, into the header. It is the same sentence.                          */

const P = "text-meta text-brand-muted";
const UL = "list-disc space-y-1.5 pl-5 text-meta text-brand-muted marker:text-brand-subtle";
const SUB = "text-meta font-semibold text-brand-text";

function Pairs({ rows }: { rows: { term: string; value: string }[] }) {
  return (
    <dl className="grid gap-x-stack gap-y-1 grid-cols-[5.5rem_minmax(0,1fr)] sm:grid-cols-[6rem_minmax(0,1fr)]">
      {rows.map((row) => (
        <React.Fragment key={row.term}>
          <dt className="text-meta text-brand-subtle">{row.term}</dt>
          <dd className="text-meta text-brand-muted">{row.value}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/** Term on its own line, sentence under it, hairline between entries. */
function TermList({ rows }: { rows: { term: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-brand-hairline border-y border-brand-hairline">
      {rows.map((row) => (
        <div key={row.term} className="py-2.5">
          <dt className="text-meta font-semibold text-brand-text">{row.term}</dt>
          <dd className="mt-0.5 text-meta text-brand-muted">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const RIGHTS = [
  {
    term: "Auskunftsrecht (Art. 15 DSGVO)",
    value:
      "Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.",
  },
  {
    term: "Berichtigungsrecht (Art. 16 DSGVO)",
    value:
      "Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.",
  },
  {
    term: "Löschungsrecht (Art. 17 DSGVO)",
    value: "Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.",
  },
  {
    term: "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
    value:
      "Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
  },
  {
    term: "Widerspruchsrecht (Art. 21 DSGVO)",
    value: "Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.",
  },
  {
    term: "Datenübertragbarkeit (Art. 20 DSGVO)",
    value:
      "Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.",
  },
  {
    term: "Beschwerderecht",
    value:
      "Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.",
  },
];

const ADS_FACTS = [
  { term: "Zweck", value: "Messung von Conversions aus Google Ads Kampagnen." },
  {
    term: "Rechtsgrundlage",
    value:
      "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Datenverarbeitung erfolgt erst nach Ihrer ausdrücklichen Zustimmung über den Cookie-Banner.",
  },
  {
    term: "Datenverarbeiter",
    value: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
  },
  {
    term: "Widerruf",
    value:
      "Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den lokalen Speicher Ihres Browsers löschen. Der Cookie-Banner wird dann beim nächsten Besuch erneut angezeigt.",
  },
];

const OPENAI_ADS_FACTS = [
  {
    term: "Zweck",
    value:
      "Messung von Seitenaufrufen und Conversions aus Anzeigen, die in ChatGPT ausgeliefert werden.",
  },
  {
    term: "Rechtsgrundlage",
    value:
      "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Das Pixel wird erst geladen, nachdem Sie im Cookie-Banner zugestimmt haben. Ohne Ihre Zustimmung wird keine Verbindung zu OpenAI hergestellt.",
  },
  {
    term: "Datenverarbeiter",
    value:
      "OpenAI Ireland Limited, 1st Floor, The Liffey Trust Centre, 117-126 Sheriff Street Upper, Dublin 1, D01 YC43, Irland.",
  },
  {
    term: "Verarbeitete Daten",
    value:
      "Aufgerufene Seite, Referrer, Zeitpunkt, IP-Adresse, Angaben zu Browser und Gerät sowie Kennungen, die im lokalen Speicher und in Cookies Ihres Browsers abgelegt werden.",
  },
  {
    term: "Erweiterter Abgleich",
    value:
      "Wenn Sie ein Formular auf dieser Website ausfüllen, kann das Pixel E-Mail-Adresse, Telefonnummer und Name in gehashter Form (SHA-256) an OpenAI übermitteln, um Ihre Anfrage einer Anzeige zuzuordnen. Die Klartextdaten verlassen Ihren Browser dabei nicht.",
  },
  {
    term: "Widerruf",
    value:
      "Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den lokalen Speicher Ihres Browsers löschen. Der Cookie-Banner wird dann beim nächsten Besuch erneut angezeigt.",
  },
];

const SECTIONS: { title: string; id: string; body: React.ReactNode }[] = [
  {
    title: "Datenschutz auf einen Blick",
    id: "auf-einen-blick",
    body: (
      <p className={P}>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
        sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>
    ),
  },
  {
    title: "Verantwortlicher",
    id: "verantwortlicher",
    body: (
      <div className="space-y-4">
        <div className={P}>
          <p>Vadim Shchepin</p>
          <p>Flottbeker Drift 1</p>
          <p>22607 Hamburg</p>
          <p>Deutschland</p>
        </div>
        <Pairs
          rows={[
            { term: "E-Mail", value: "hello@aiseo.hamburg" },
            { term: "Telefon", value: "+49 (0) 176 321 94 754" },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Datenerfassung auf dieser Website",
    id: "datenerfassung",
    body: (
      <div className="space-y-4">
        <div>
          <h3 className={SUB}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
          <p className={`mt-1.5 ${P}`}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Abschnitt „Verantwortlicher&quot; in dieser
            Datenschutzerklärung entnehmen.
          </p>
        </div>

        <div>
          <h3 className={SUB}>Wie erfassen wir Ihre Daten?</h3>
          <p className={`mt-1.5 ${P}`}>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className={`mt-2 ${P}`}>
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
            Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
            des Seitenaufrufs).
          </p>
        </div>

        <div>
          <h3 className={SUB}>Wofür nutzen wir Ihre Daten?</h3>
          <p className={`mt-1.5 ${P}`}>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Server-Log-Dateien",
    id: "server-log-dateien",
    body: (
      <div className="space-y-4">
        <p className={P}>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul className={UL}>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p className={P}>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
          Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
          und der Optimierung seiner Website.
        </p>
      </div>
    ),
  },
  {
    title: "Kontaktformular",
    id: "kontaktformular",
    body: (
      <div className="space-y-2.5">
        <p className={P}>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>
        <p className={P}>
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten
          erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist.
        </p>
        <p className={P}>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt.
        </p>
      </div>
    ),
  },
  {
    title: "Kontakt per E-Mail",
    id: "kontakt-per-e-mail",
    body: (
      <div className="space-y-2.5">
        <p className={P}>
          Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
          Anliegens bei uns gespeichert und verarbeitet.
        </p>
        <p className={P}>
          Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten
          erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist.
        </p>
      </div>
    ),
  },
  {
    title: "Newsletter",
    id: "newsletter",
    body: (
      <div className="space-y-2.5">
        <p className={P}>
          Wenn Sie unseren Newsletter abonnieren, verwenden wir die von Ihnen angegebene
          E-Mail-Adresse, um Ihnen unseren Newsletter zuzusenden. Die Abmeldung ist jederzeit
          möglich.
        </p>
        <p className={P}>
          Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a
          DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Abmeldelink im
          Newsletter nutzen oder uns eine E-Mail an hello@aiseo.hamburg senden.
        </p>
      </div>
    ),
  },
  {
    title: "Cookies",
    id: "cookies",
    body: (
      <div className="space-y-2.5">
        <p className={P}>
          Diese Website verwendet technisch notwendige Cookies sowie Marketing-Cookies für das
          Conversion-Tracking von Google Ads und OpenAI (Anzeigen in ChatGPT). Marketing-Cookies
          werden erst nach Ihrer ausdrücklichen Einwilligung über unseren Cookie-Banner gesetzt.
        </p>
        <p className={P}>
          Ohne Ihre Zustimmung werden keine personenbezogenen Daten über Cookies erhoben. Sie können
          Ihre Einwilligung jederzeit widerrufen, indem Sie den lokalen Speicher Ihres Browsers
          löschen. Beim nächsten Besuch wird der Cookie-Banner erneut angezeigt.
        </p>
      </div>
    ),
  },
  {
    title: "Google Ads und Conversion-Tracking",
    id: "google-ads",
    body: (
      <div className="space-y-4">
        <p className={P}>
          Wir nutzen Google Ads Conversion-Tracking, um die Wirksamkeit unserer Werbeanzeigen zu
          messen. Dabei wird erfasst, ob Sie nach dem Klick auf eine Google-Anzeige eine bestimmte
          Aktion auf unserer Website durchgeführt haben (z.&nbsp;B. Kontaktanfrage).
        </p>
        <TermList rows={ADS_FACTS} />
        <p className={P}>
          Weitere Informationen zum Datenschutz bei Google finden Sie unter:{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text underline decoration-brand-edge decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
          >
            https://policies.google.com/privacy
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "OpenAI Pixel (Anzeigen in ChatGPT)",
    id: "openai-ads",
    body: (
      <div className="space-y-4">
        <p className={P}>
          Wir schalten Anzeigen in ChatGPT und setzen dafür das Conversion-Pixel von OpenAI ein.
          Damit messen wir, ob Sie nach dem Klick auf eine Anzeige unsere Website besuchen und
          welche Seiten Sie dabei aufrufen.
        </p>
        <TermList rows={OPENAI_ADS_FACTS} />
        <p className={P}>
          Weitere Informationen zum Datenschutz bei OpenAI finden Sie unter:{' '}
          <a
            href="https://openai.com/policies/eu-privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text underline decoration-brand-edge decoration-1 underline-offset-4 transition-colors hover:decoration-brand-accent-ink"
          >
            https://openai.com/policies/eu-privacy-policy/
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Ihre Rechte",
    id: "ihre-rechte",
    body: (
      <div className="space-y-4">
        <p className={P}>Sie haben folgende Rechte:</p>
        <TermList rows={RIGHTS} />
      </div>
    ),
  },
  {
    title: "Widerruf Ihrer Einwilligung",
    id: "widerruf",
    body: (
      <p className={P}>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
        können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
        zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>
    ),
  },
  {
    title: "SSL- bzw. TLS-Verschlüsselung",
    id: "ssl-tls",
    body: (
      <p className={P}>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
        bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
        Adresszeile des Browsers von „http://&quot; auf „https://&quot; wechselt und an dem
        Schloss-Symbol in Ihrer Browserzeile.
      </p>
    ),
  },
  {
    title: "Kontakt in Datenschutzfragen",
    id: "kontakt-datenschutz",
    body: (
      <div className="space-y-4">
        <p className={P}>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
        <p className={P}>Vadim Shchepin</p>
        <Pairs
          rows={[
            { term: "E-Mail", value: "hello@aiseo.hamburg" },
            { term: "Telefon", value: "+49 (0) 176 321 94 754" },
          ]}
        />
      </div>
    ),
  },
];

const LEGAL_SECTIONS: LegalSection[] = SECTIONS.map((section, index) => ({
  n: index + 1,
  title: section.title,
  id: section.id,
  body: section.body,
}));

export default function DatenschutzPage() {
  return (
    <LegalDocument
      breadcrumb="Datenschutz"
      eyebrow="Rechtliches"
      title="Datenschutz"
      subtitle="Datenschutzerklärung gemäß DSGVO"
      stand="Stand dieser Datenschutzerklärung: 6. Februar 2026"
      sections={LEGAL_SECTIONS}
    />
  );
}

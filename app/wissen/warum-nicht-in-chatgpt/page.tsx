import { ArticleTemplate } from '@/components/wissen/ArticleTemplate';

export default function WarumNichtInChatgptPage() {
  return (
    <ArticleTemplate
      canonicalPath="/wissen/warum-nicht-in-chatgpt"
      breadcrumbLabel="Warum nicht in ChatGPT"
      eyebrow="Diagnose"
      title="Warum erscheint meine Firma nicht in ChatGPT? Zehn Ursachen, nach Häufigkeit sortiert"
      description="Die Frage kommt in fast jedem Erstgespräch, und die Antwort ist selten „schlechter Content“. In der Praxis sind es vier Klassen von Ursachen, und drei davon lassen sich in einer Stunde prüfen. Hier steht die Reihenfolge, in der wir suchen, mit den Befunden aus echten Projekten."
      publishedAt="2026-08-22"
      modifiedAt="2026-08-22"
      summaryItems={[
        'Es gibt vier Ursachenklassen: Der Crawler kommt nicht rein, die Seite ist nicht im Index, die Marke hat zu wenig Autorität, oder der Text lässt sich nicht zitieren.',
        'Der häufigste technische Befund bleibt eine Website, die ihre Inhalte erst im Browser zusammenbaut. KI-Crawler holen HTML und warten nicht auf JavaScript.',
        'Der häufigste unsichtbare Befund: Seiten stehen bei Google unter „Erkannt, zurzeit nicht indexiert“. Auf unserer eigenen Domain betraf das rund 23 URLs, darunter die Seite mit den meisten KI-Zitaten überhaupt.',
        'ChatGPT nutzt zwei verschiedene Bots. Wer nur GPTBot erlaubt und OAI-SearchBot blockiert, verschwindet aus der Live-Suche, bleibt aber im Trainingsbestand.',
        'Prüfe in dieser Reihenfolge: Crawler-Zugang, Indexierung, Erwähnungen außerhalb der eigenen Domain, Formulierung. Wer bei Punkt vier anfängt, optimiert Text für ein System, das die Seite nie geladen hat.',
      ]}
      sections={[
        {
          id: 'vier-klassen',
          heading: 'Vier Ursachenklassen, nicht zehn Einzelprobleme',
          intro:
            'Die zehn konkreten Ursachen weiter unten fallen alle in eine dieser vier Klassen. Die Klasse zu kennen ist wichtiger als die Einzelursache, weil sie bestimmt, wer die Arbeit macht und wie lange sie dauert.',
          definitions: [
            {
              term: 'Klasse 1: Zugang',
              definition:
                'Der Crawler erreicht die Inhalte nicht. Ursachen liegen in robots.txt, in einer Firewall, in einem Bot-Schutz oder darin, dass die Seite ihre Inhalte erst im Browser rendert. Behebung dauert Stunden bis Tage und ist technisch.',
            },
            {
              term: 'Klasse 2: Index',
              definition:
                'Der Inhalt ist erreichbar, aber in keinem Suchindex, aus dem KI-Systeme abrufen. Behebung dauert Wochen, weil Crawl-Priorität und Domain-Autorität darüber entscheiden und nicht eine Einstellung im Backend.',
            },
            {
              term: 'Klasse 3: Autorität',
              definition:
                'Der Inhalt ist im Index, aber die Marke kommt außerhalb der eigenen Domain kaum vor. KI-Systeme bestätigen Anbieter gern über mehrere Quellen. Behebung dauert Monate und findet zum größten Teil nicht auf der eigenen Website statt.',
            },
            {
              term: 'Klasse 4: Zitierbarkeit',
              definition:
                'Alles vorherige stimmt, aber der Text lässt sich nicht in Antwortform bringen: keine definierten Begriffe, keine Zahlen mit Datum, kein Absatz, der ohne Kontext funktioniert. Behebung dauert Tage und ist redaktionell.',
            },
          ],
          stat:
            'In unseren Erstprüfungen liegt die Ursache in etwa zwei von drei Fällen in Klasse 1 oder 2. Die Arbeit, die die meisten Anbieter verkaufen, betrifft Klasse 4.',
        },
        {
          id: 'zehn-ursachen',
          heading: 'Die zehn Ursachen im Einzelnen',
          table: {
            headers: ['Ursache', 'Klasse', 'So prüfst du es', 'Aufwand zur Behebung'],
            rows: [
              [
                'Inhalte werden erst im Browser gerendert',
                'Zugang',
                'Seitenquelltext ansehen. Steht dort nur ein leeres Container-Element, sieht der Crawler dasselbe.',
                'mittel bis hoch, betrifft die Architektur',
              ],
              [
                'OAI-SearchBot in robots.txt blockiert',
                'Zugang',
                'robots.txt aufrufen und nach GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot suchen.',
                'gering, eine Textdatei',
              ],
              [
                'Bot-Schutz oder WAF blockt KI-Crawler',
                'Zugang',
                'Server-Logs nach den Bot-Namen filtern. Kein einziger Treffer im Monat ist der Befund.',
                'gering, Regel freigeben',
              ],
              [
                'Seite steht auf „Erkannt, zurzeit nicht indexiert“',
                'Index',
                'Search Console, Bericht Seitenindexierung. Betroffene URLs einzeln prüfen.',
                'hoch, braucht Autorität und Zeit',
              ],
              [
                'Kanonische Angaben zeigen woandershin',
                'Index',
                'Canonical im Quelltext prüfen. Häufiger Fehler nach einem Relaunch.',
                'gering',
              ],
              [
                'Marke kommt auf keiner fremden Domain vor',
                'Autorität',
                'Markennamen in Anführungszeichen googeln, Treffer außerhalb der eigenen Domain zählen.',
                'hoch, dauert Monate',
              ],
              [
                'Kategorie zu unscharf, Anbieter nicht einsortierbar',
                'Autorität',
                'KI fragen, was das Unternehmen macht. Kommt eine vage Antwort, fehlt die Einsortierung.',
                'mittel, Positionierungsarbeit',
              ],
              [
                'Widersprüchliche Firmendaten im Netz',
                'Autorität',
                'Name, Adresse, Telefonnummer über Verzeichnisse und das Unternehmensprofil vergleichen.',
                'mittel, aber gut planbar',
              ],
              [
                'Keine Seite, die eine konkrete Frage beantwortet',
                'Zitierbarkeit',
                'Prüfen, ob es zu den drei häufigsten Kundenfragen je eine eigene Seite gibt.',
                'mittel, redaktionell',
              ],
              [
                'Fachbegriffe vorausgesetzt statt definiert',
                'Zitierbarkeit',
                'Beliebigen Absatz isoliert lesen. Bleibt er ohne den Rest verständlich?',
                'gering, redaktionell',
              ],
            ],
            caption:
              'Sortiert nach Häufigkeit in unseren eigenen Erstprüfungen, nicht nach Schwere. Die oberen vier erklären die Mehrheit der Fälle.',
          },
        },
        {
          id: 'zwei-bots',
          heading: 'Der Fehler mit den zwei Bots',
          paragraphs: [
            'OpenAI betreibt getrennte Crawler für verschiedene Zwecke. GPTBot sammelt Inhalte für das Modelltraining. OAI-SearchBot ruft Inhalte ab, wenn ChatGPT während einer Antwort im Web sucht. Wer nach einer Diskussion über Trainingsdaten GPTBot ausgeschlossen hat und dabei auch den zweiten Bot mitgesperrt hat, ist aus der Live-Suche verschwunden.',
            'Das ist der einzige Punkt auf dieser Liste, der sich in fünf Minuten beheben lässt und trotzdem regelmäßig monatelang unbemerkt bleibt. Er fällt nicht auf, weil nichts kaputt aussieht: Die Website funktioniert, Google rankt weiter, nur die KI-Antworten kennen das Unternehmen nicht.',
            'Ähnliches gilt für Bot-Schutz auf Infrastrukturebene. Ein aggressiv eingestellter Schutz gegen automatisierte Zugriffe sperrt KI-Crawler mit, ohne dass jemand eine Entscheidung darüber getroffen hätte. Der Nachweis steht in den Server-Logs: Wenn dort über einen Monat kein einziger Zugriff der bekannten KI-Bots auftaucht, ist der Befund eindeutig.',
          ],
          warning: {
            title: 'Vorsicht bei pauschalen Blockaden aus Datenschutzgründen',
            text:
              'Der Wunsch, eigene Inhalte nicht ins Modelltraining zu geben, ist legitim. Er lässt sich aber getrennt von der Live-Suche umsetzen. Wer beides zusammen sperrt, entscheidet sich gegen die Sichtbarkeit in einem Kanal, in dem Kunden bereits nach Anbietern suchen. Diese Entscheidung sollte bewusst getroffen werden, nicht aus einer kopierten robots.txt heraus.',
          },
        },
        {
          id: 'unsichtbarer-befund',
          heading: 'Der Befund, den niemand vermutet: nicht indexiert',
          paragraphs: [
            'Auf unserer eigenen Domain lagen im Frühsommer 2026 rund 23 URLs im Status „Erkannt, zurzeit nicht indexiert“. Google kannte die Adressen, hatte sie aber nicht in den Index aufgenommen. Darunter war die Seite, die im Bing-Export mit 248 von 415 Citations die meistzitierte überhaupt war.',
            'Das ist eine unangenehme, aber lehrreiche Kombination. Eine Seite kann von Microsoft Copilot hunderte Male als Quelle genutzt werden, während Google sie nicht in den Index lässt. Die beiden Systeme entscheiden unabhängig, und die Ursache liegt selten am Inhalt.',
            'Die interne Verlinkung war in diesem Fall nicht das Problem: Die betroffene Seite hatte 18 interne Links. Der Engpass war die Autorität der Domain und damit die Crawl-Priorität. Das lässt sich nicht auf der eigenen Website lösen, sondern nur durch Erwähnungen und Verlinkungen von außen und durch Zeit.',
            'Für die Diagnose heißt das: Wer feststellt, dass Google eigene Seiten nicht indexiert, sollte nicht die nächste Seite schreiben. Die bestehende Seite braucht Gründe, warum sie es wert ist, und die entstehen außerhalb der Domain.',
          ],
        },
        {
          id: 'diagnose',
          heading: 'Die Diagnose in vier Schritten',
          intro:
            'Diese Reihenfolge ist nicht beliebig. Jeder Schritt entscheidet, ob der nächste überhaupt sinnvoll ist.',
          steps: [
            {
              title: 'Kommt der Crawler an? (10 Minuten)',
              text:
                'robots.txt öffnen und GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot und Google-Extended prüfen. Dann den Seitenquelltext ansehen: Steht der Text im HTML oder wird er erst im Browser erzeugt? Zuletzt die Server-Logs nach den Bot-Namen filtern. Findet sich kein Zugriff, endet die Suche hier.',
            },
            {
              title: 'Ist die Seite im Index? (20 Minuten)',
              text:
                'Search Console, Bericht zur Seitenindexierung. Alles unter „Erkannt, zurzeit nicht indexiert“ und „Gecrawlt, zurzeit nicht indexiert“ notieren. Bing Webmaster Tools daneben legen: Wenn Bing zitiert und Google nicht indexiert, ist die Diagnose klar und die Maßnahme liegt bei der Autorität.',
            },
            {
              title: 'Existiert die Marke außerhalb der eigenen Domain? (20 Minuten)',
              text:
                'Markennamen in Anführungszeichen suchen und Treffer zählen, die nicht auf der eigenen Website liegen. Dazu das Unternehmensprofil, die relevanten Fachverzeichnisse und Bewertungsplattformen prüfen. Unter fünf unabhängigen Erwähnungen ist Klasse 3 die wahrscheinlichste Ursache, unabhängig von allem anderen.',
            },
            {
              title: 'Ist der Text zitierfähig? (30 Minuten)',
              text:
                'Zu den drei häufigsten Kundenfragen prüfen, ob es je eine eigene Seite gibt, die genau diese Frage im ersten Absatz beantwortet. Dann einen beliebigen Absatz isoliert lesen. Wenn er ohne den Rest der Seite nicht verständlich ist, kann ihn auch kein System als Antwort entnehmen.',
            },
          ],
          note:
            'Die vier Schritte kosten etwa 80 Minuten und liefern in den meisten Fällen eine eindeutige Antwort. Wer sie überspringt und direkt Inhalte produziert, arbeitet auf Verdacht.',
        },
        {
          id: 'was-nicht-hilft',
          heading: 'Was in diesem Fall erwiesen nicht hilft',
          bullets: [
            'Eine llms.txt anlegen und erwarten, dass sich damit die Sichtbarkeit ändert. Google hat für die eigenen KI-Funktionen ausdrücklich klargestellt, dass die Datei dafür keine Rolle spielt.',
            'Die Startseite mit dem Markennamen aufladen. Das Problem ist in der Regel nicht die Nennung des eigenen Namens, sondern die fehlende Einsortierung in eine Kategorie.',
            'Mehr Seiten zum gleichen Thema veröffentlichen, während bestehende Seiten nicht indexiert sind. Das verschärft die Konkurrenz um Crawl-Budget.',
            'Ein Monitoring-Abo abschließen, bevor Klasse 1 und 2 geprüft sind. Das Dashboard zeigt dann korrekt an, dass nichts passiert.',
            'Keywords in Alt-Texte und versteckte Elemente schreiben. Das ist der Weg, auf dem Domains dauerhaft aus KI-Antworten verschwinden.',
          ],
          quote:
            'Die meisten Firmen, die in ChatGPT nicht vorkommen, haben kein Content-Problem. Sie haben ein Zugangs- oder Indexproblem und schreiben trotzdem den nächsten Artikel.',
        },
      ]}
      faqs={[
        {
          q: 'Warum erscheint meine Firma nicht in ChatGPT?',
          a: 'In etwa zwei von drei Fällen liegt es daran, dass der Crawler die Inhalte nicht erreicht oder die Seiten in keinem Suchindex stehen, aus dem ChatGPT abruft. Erst danach kommen fehlende Erwähnungen außerhalb der eigenen Domain und zuletzt die Formulierung des Textes. Die Prüfreihenfolge lautet deshalb: Zugang, Index, Autorität, Zitierbarkeit.',
        },
        {
          q: 'Welche Crawler muss ich für ChatGPT erlauben?',
          a: 'Zwei: GPTBot für das Modelltraining und OAI-SearchBot für den Live-Abruf während einer Antwort. Wer nur GPTBot sperrt, bleibt in der Suche sichtbar. Wer OAI-SearchBot sperrt, verschwindet aus den Antworten, in denen ChatGPT aktiv im Web nachsieht. Beide Namen gehören einzeln in die robots.txt geprüft.',
        },
        {
          q: 'Meine Seiten stehen auf „Erkannt, zurzeit nicht indexiert“. Was hilft?',
          a: 'Dieser Status bedeutet, dass Google die URL kennt, aber nicht in den Index aufnimmt. Das liegt meist an Crawl-Priorität und Domain-Autorität, nicht am Inhalt. Neue Artikel helfen nicht. Was hilft, sind Erwähnungen und Links von fremden Domains, ein vollständiges Unternehmensprofil, eine aktuelle Sitemap und Geduld über Wochen.',
        },
        {
          q: 'Kann eine Seite in Copilot zitiert werden, obwohl Google sie nicht indexiert?',
          a: 'Ja. Auf unserer eigenen Domain war die im Bing-Export meistzitierte Seite mit 248 von 415 Citations gleichzeitig bei Google unter „Erkannt, zurzeit nicht indexiert“ gelistet. Die Systeme entscheiden unabhängig voneinander. Wer nur Google prüft, hält eine funktionierende Seite für ein Problem.',
        },
        {
          q: 'Wie schnell wirkt eine Korrektur?',
          a: 'Ein blockierter Crawler wirkt nach dem nächsten Crawl, also innerhalb von Tagen. Ein Indexierungsproblem braucht Wochen bis Monate, weil es an Autorität hängt. Erwähnungen außerhalb der eigenen Domain wirken über Monate. Redaktionelle Verbesserungen an bereits indexierten Seiten sind der schnellste Hebel mit sichtbarer Wirkung.',
        },
        {
          q: 'Reicht es, wenn ich bei Google gut ranke?',
          a: 'Nein, aber es ist die Voraussetzung. Ein gutes Ranking erhöht die Wahrscheinlichkeit, als Quelle abgerufen zu werden, garantiert es aber nicht. KI-Systeme bewerten zusätzlich, ob eine Passage eine Frage abschließend beantwortet und ob die Marke unabhängig bestätigt wird. Position eins und null KI-Nennungen kommen zusammen vor.',
        },
      ]}
      sources={[
        {
          label: 'OpenAI Crawler-Dokumentation',
          text: 'Getrennte User Agents GPTBot für Training und OAI-SearchBot für den Live-Abruf in ChatGPT.',
          href: 'https://platform.openai.com/docs/bots',
        },
        {
          label: 'Google Search Central',
          text:
            'Googles Aussage, dass für die eigenen KI-Funktionen dieselben SEO-Grundlagen gelten und keine speziellen Dateien nötig sind.',
          href: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
        {
          label: 'Eigene Daten',
          text:
            'Bing-Webmaster-Tools-Export für aiseo.hamburg vom 30.05.2026 (415 Citations, 248 auf einer Seite) sowie der Indexierungsbericht der Search Console mit rund 23 URLs im Status „Erkannt, zurzeit nicht indexiert“.',
        },
        {
          label: 'Eigene Fallstudie',
          text:
            'Ein Hamburger Dienstleister lieferte als Single Page Application allen Crawlern ein leeres HTML-Grundgerüst aus. Nach der Umstellung auf serverseitig ausgelieferte Seiten begannen die KI-Nennungen.',
          href: 'https://aiseo.hamburg/wissen/case-study-blitz-hamburg',
        },
      ]}
      relatedArticles={[
        {
          title: 'Technische KI-Sichtbarkeit',
          description:
            'Der technische Unterbau im Detail: robots.txt, Rendering, Schema und semantisches HTML für KI-Crawler.',
          href: '/wissen/technische-ki-sichtbarkeit',
          tag: 'Technik',
        },
        {
          title: 'Warum dein Wettbewerber Kunden bekommt, die du nie siehst',
          description: 'Wenn die KI antwortet, aber einen anderen Namen nennt: wie Empfehlungen zustande kommen.',
          href: '/wissen/wettbewerber-ki-sichtbarkeit',
          tag: 'Wettbewerb',
        },
        {
          title: 'Sichtbarkeit in ChatGPT: so wirst du empfohlen',
          description: 'Die Aufbauseite zu dieser Diagnose: was ChatGPT als Quelle bevorzugt.',
          href: '/wissen/sichtbarkeit-in-chatgpt',
          tag: 'ChatGPT',
        },
        {
          title: 'Search Console vs Bing Webmaster Tools',
          description: 'Wo du die Daten für Schritt zwei der Diagnose findest und wie du beide Berichte liest.',
          href: '/wissen/gsc-vs-bing-webmaster-tools',
          tag: 'Messung',
        },
      ]}
      ctaTitle="Wir prüfen die vier Schritte gemeinsam"
      ctaText="Im kostenlosen 15-Minuten-Gespräch gehen wir live durch robots.txt, Quelltext und Indexierungsstatus. Danach weißt du, in welcher der vier Klassen dein Problem liegt und wie lange die Behebung realistisch dauert."
      ctaHref="/termin"
      ctaLabel="15-Minuten-Gespräch buchen"
    />
  );
}

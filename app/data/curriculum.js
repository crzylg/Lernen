// Automatisch erzeugt von scripts/build_curriculum.py - nicht direkt bearbeiten.
window.CURRICULUM = {
 "updated": "2026-07-01",
 "total": 285,
 "counts": {
  "genesys": 56,
  "ai": 229
 },
 "modules": [
  {
   "title": "Fundament: Bank & Contact Center",
   "emoji": "🏦",
   "ziel": "Verstehen, wie ein Bank-Callcenter arbeitet und warum Regeln wichtig sind.",
   "topics": [
    {
     "t": "Bank Contact Center Grundmodell",
     "was": "Ein Contact Center ist die Telefon- und Chat-Zentrale einer Bank. Hier landen Anrufe, Chats und E-Mails von Kunden, und Mitarbeiter (Agents) helfen weiter.",
     "pts": [
      "Kanaele: Telefon (Voice), Chat, E-Mail, Messaging",
      "Agent = Mitarbeiter, der Kunden hilft",
      "Ziel: Kunde schnell und richtig zum passenden Agent bringen",
      "Bank-Besonderheit: sehr strenge Sicherheits- und Datenschutz-Regeln"
     ],
     "yt": "Contact Center Grundlagen einfach erklaert",
     "src": [
      "Genesys: Was ist ein Contact Center",
      "https://www.genesys.com/de/definitionen/was-ist-ein-contact-center"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 1,
     "track": "genesys"
    },
    {
     "t": "Bankprozesse und Risikodenken",
     "was": "Banken denken immer an Risiko: Was kann schiefgehen? Jeder Prozess hat Regeln, damit kein Geld verloren geht und kein Betrug passiert.",
     "pts": [
      "Prozess = fester Ablauf mit Schritten (z.B. Kredit beantragen)",
      "Risiko = Gefahr eines Schadens (Geld, Vertrauen, Recht)",
      "Compliance = Einhaltung von Gesetzen und Regeln",
      "Vier-Augen-Prinzip: wichtige Dinge pruefen zwei Personen"
     ],
     "yt": "Risikomanagement Bank einfach erklaert",
     "src": [
      "BaFin: Aufsicht & Risiko",
      "https://www.bafin.de/"
     ],
     "gh": [],
     "art": [
      [
       "BaFin: KI in der Finanzwirtschaft",
       "https://www.bafin.de/DE/Aufsicht/FinTech/KuenstlicheIntelligenz/kuenstliche_intelligenz_node.html"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 2,
     "track": "genesys"
    },
    {
     "t": "Routing-Grundlagen",
     "was": "Routing bedeutet 'Wegfindung'. Das System entscheidet, welcher Anruf zu welchem Agent geht - so wie eine Post die Briefe sortiert.",
     "pts": [
      "Routing = Verteilen von Anrufen/Chats an den richtigen Ort",
      "Regeln entscheiden: wer, wann, wohin",
      "Ziel: kurze Wartezeit und passender Ansprechpartner",
      "ACD (Automatic Call Distribution) = automatische Verteilung"
     ],
     "yt": "Contact Center Routing explained",
     "src": [
      "https://help.mypurecloud.com/articles/about-routing/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 3,
     "track": "genesys"
    },
    {
     "t": "Queues und Skills",
     "was": "Eine Queue ist eine Warteschlange, wie an der Kasse. Skills sind Faehigkeiten eines Agents, z.B. 'spricht Tuerkisch' oder 'kennt Kredite'.",
     "pts": [
      "Queue = Warteschlange fuer wartende Kunden",
      "Skill = Faehigkeit/Kenntnis eines Agents",
      "Skill-based Routing: Kunde geht zum Agent mit dem passenden Skill",
      "Beispiel: Kreditfrage -> Queue 'Kredit' -> Agent mit Skill 'Kredit'"
     ],
     "yt": "Genesys queues and skills explained",
     "src": [
      "https://help.mypurecloud.com/articles/about-queues/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 4,
     "track": "genesys"
    },
    {
     "t": "DNIS und ANI",
     "was": "ANI ist die Nummer des Anrufers (wer ruft an). DNIS ist die gewaehlte Nummer (welche Nummer wurde angerufen). Beides hilft beim Sortieren.",
     "pts": [
      "ANI = Automatic Number Identification = Rufnummer des Kunden",
      "DNIS = Dialed Number Identification Service = angewaehlte Nummer",
      "Nutzen: an DNIS erkennt man, welcher Service gemeint ist",
      "Nutzen: an ANI kann man den Kunden evtl. schon erkennen"
     ],
     "yt": "DNIS vs ANI explained",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 5,
     "track": "genesys"
    },
    {
     "t": "Participant Data / KVPs",
     "was": "Participant Data sind Zusatz-Infos, die an einem Gespraech 'kleben'. KVP heisst Key-Value-Pair: ein Name und ein Wert, z.B. Kundennummer = 12345.",
     "pts": [
      "KVP = Key-Value-Pair (Schluessel = Wert)",
      "Beispiel: sprache = deutsch, kundentyp = premium",
      "Wird im Flow gesetzt und weitergegeben",
      "Hilft dem Agent, den Kunden sofort zu verstehen"
     ],
     "yt": "Genesys participant data attributes",
     "src": [
      "https://developer.genesys.cloud/routing/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 6,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "Technische Grundlagen",
   "emoji": "🔧",
   "ziel": "Die drei Basis-Technologien verstehen, die ueberall gebraucht werden: JSON, REST API, OAuth.",
   "topics": [
    {
     "t": "JSON Grundlagen",
     "was": "JSON ist eine einfache Art, Daten aufzuschreiben, die Computer und Menschen lesen koennen. Es sieht aus wie eine Liste mit Name und Wert.",
     "pts": [
      "Aufbau: {\"name\": \"Anna\", \"alter\": 30}",
      "Datentypen: Text, Zahl, wahr/falsch, Liste, Objekt",
      "Wird zum Austausch von Daten zwischen Programmen benutzt",
      "Klammern {} = Objekt, eckige [] = Liste"
     ],
     "yt": "JSON einfach erklaert fuer Anfaenger",
     "src": [
      "MDN: JSON Einfuehrung",
      "https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/JSON"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 7,
     "track": "genesys"
    },
    {
     "t": "REST API Grundlagen",
     "was": "Eine API ist eine 'Steckdose' fuer Programme: darueber fragt ein Programm ein anderes um Daten. REST ist die haeufigste Art, das ueber das Internet zu tun.",
     "pts": [
      "API = Schnittstelle zwischen Programmen",
      "Endpoint = eine Adresse (URL), die man aufruft",
      "Methoden: GET (holen), POST (senden), PUT (aendern), DELETE (loeschen)",
      "Antwort kommt meist als JSON zurueck"
     ],
     "yt": "REST API einfach erklaert deutsch",
     "src": [
      "MDN: Einfuehrung Web-APIs",
      "https://developer.mozilla.org/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 8,
     "track": "genesys"
    },
    {
     "t": "OAuth Grundlagen",
     "was": "OAuth ist ein sicherer Weg, damit ein Programm im Namen von jemandem zugreifen darf - ohne das Passwort zu kennen. Wie ein Hotel-Schluesselkarte statt Generalschluessel.",
     "pts": [
      "Token = Zugangsschluessel auf Zeit",
      "Client ID / Client Secret = Ausweis der App",
      "Grant Types: z.B. Client Credentials, Authorization Code",
      "Genesys nutzt OAuth fuer alle API-Zugriffe"
     ],
     "yt": "OAuth 2.0 einfach erklaert deutsch",
     "src": [
      "Genesys Dev: OAuth",
      "https://developer.genesys.cloud/authorization/oauth"
     ],
     "gh": [
      [
       "oauth.net Uebersicht",
       "https://oauth.net/2/"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 9,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "Genesys Cloud Plattform",
   "emoji": "☁️",
   "ziel": "Die Genesys Cloud kennenlernen: Aufbau, Organisation, Rechte, Auswertungen.",
   "topics": [
    {
     "t": "Genesys Cloud Plattformueberblick",
     "was": "Genesys Cloud ist ein Programm im Internet (Cloud) fuer Contact Center. Man braucht nur einen Browser. Es kann Telefon, Chat, Bots und Auswertungen.",
     "pts": [
      "Cloud = laeuft im Internet, keine eigene Server-Hardware noetig",
      "All-in-one: Voice, Digital, WEM, Reporting, AI",
      "Wird staendig automatisch aktualisiert",
      "Zugriff ueber Browser oder App"
     ],
     "yt": "Genesys Cloud overview beginner",
     "src": [
      "Genesys Cloud Produktseite",
      "https://www.genesys.com/de/genesys-cloud"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 10,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud Organisation",
     "was": "Die Organisation (Org) ist der eigene, abgetrennte Bereich einer Firma in Genesys Cloud. Alles, was die Firma anlegt, liegt in ihrer Org.",
     "pts": [
      "Org = der Firmen-Container",
      "Region = wo die Daten liegen (z.B. Frankfurt)",
      "Jede Org hat eigene Nutzer, Queues, Flows",
      "Wichtig fuer Datenschutz: EU-Daten in EU-Region"
     ],
     "yt": "Genesys Cloud organization setup",
     "src": [
      "https://help.mypurecloud.com/articles/about-organizations/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 11,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud Divisions",
     "was": "Divisions sind Unter-Bereiche innerhalb der Org, wie Abteilungen. So kann man trennen, wer welche Dinge sehen darf.",
     "pts": [
      "Division = logische Abteilung/Trennung",
      "Beispiel: Division 'Privatkunden', Division 'Firmenkunden'",
      "Objekte (Queues, Flows) gehoeren zu einer Division",
      "Zusammen mit Rollen steuert das die Sichtbarkeit"
     ],
     "yt": "Genesys Cloud divisions explained",
     "src": [
      "https://help.mypurecloud.com/articles/about-divisions/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 12,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud Rollen und Berechtigungen",
     "was": "Eine Rolle ist ein Buendel von Rechten. So bekommt jeder nur das, was er braucht. Ein Agent darf anderes als ein Admin.",
     "pts": [
      "Rolle = Sammlung von Berechtigungen (Permissions)",
      "Least Privilege: nur so viele Rechte wie noetig",
      "Rolle + Division = wer darf was, und wo",
      "Beispiele: Admin, Supervisor, Agent"
     ],
     "yt": "Genesys Cloud roles permissions",
     "src": [
      "https://help.mypurecloud.com/articles/about-roles-permissions/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 13,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud Queues",
     "was": "In Genesys Cloud legt man Queues (Warteschlangen) selbst an und stellt ein, wie Anrufe verteilt werden und wie lange man wartet.",
     "pts": [
      "Queue anlegen und Mitglieder (Agents) zuweisen",
      "Einstellungen: Wartemusik, Timeout, Ueberlauf",
      "Routing-Methode auswaehlen (z.B. Standard, Bullseye)",
      "Mit Skills kombinierbar"
     ],
     "yt": "Genesys Cloud create queue tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/create-queues/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 14,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud Skills",
     "was": "Skills legt man an und weist sie Agents zu. Im Flow verlangt man dann einen Skill, damit nur passende Agents das Gespraech bekommen.",
     "pts": [
      "Skill anlegen (z.B. 'Kredit', 'Tuerkisch')",
      "Agents Skills zuweisen, evtl. mit Stufe (Proficiency)",
      "Language Skills fuer Sprachen",
      "ACD nutzt Skills fuer die Verteilung"
     ],
     "yt": "Genesys Cloud skills routing",
     "src": [
      "https://help.mypurecloud.com/articles/about-acd-skills-and-languages/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 15,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud Analytics",
     "was": "Analytics zeigt in Zahlen und Grafiken, was im Contact Center passiert: wie viele Anrufe, wie lange Wartezeit, wie zufrieden die Kunden.",
     "pts": [
      "Dashboards = Uebersichtsbildschirme",
      "Metriken: z.B. Service Level, AHT (Bearbeitungszeit)",
      "Views = fertige Auswertungsansichten",
      "Grundlage fuer Verbesserungen und Reporting"
     ],
     "yt": "Genesys Cloud analytics overview",
     "src": [
      "https://help.mypurecloud.com/articles/about-analytics/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 16,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "Genesys Architect & Flows",
   "emoji": "🧭",
   "ziel": "Den Genesys Architect bedienen und die wichtigsten Flows (Ablaeufe) bauen.",
   "topics": [
    {
     "t": "Genesys Cloud Architect",
     "was": "Architect ist das Bau-Werkzeug fuer Ablaeufe (Flows). Man klickt Bausteine zusammen, statt zu programmieren - wie ein Flussdiagramm.",
     "pts": [
      "Flow = der Weg, den ein Anruf/Chat nimmt",
      "Bausteine (Actions) per Drag-and-drop",
      "Kein Programmieren noetig (Low-Code)",
      "Verschiedene Flow-Typen: Inbound, In-Queue, Bot ..."
     ],
     "yt": "Genesys Architect tutorial beginner",
     "src": [
      "https://help.mypurecloud.com/articles/about-architect/",
      null
     ],
     "gh": [
      [
       "Genesys Cloud CLI (Automatisierung)",
       "https://github.com/MyPureCloud/platform-client-sdk-cli"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 17,
     "track": "genesys"
    },
    {
     "t": "Inbound Call Flow",
     "was": "Der Inbound Call Flow steuert einen eingehenden Anruf: Begruessung, Menue, Abfragen und dann Weiterleitung an die richtige Queue.",
     "pts": [
      "Inbound = eingehend (Kunde ruft an)",
      "Typische Schritte: Ansage, Menue, Pruefung, Transfer",
      "Oeffnungszeiten pruefen (In-hours/Out-of-hours)",
      "Ziel: schnell zum richtigen Agent"
     ],
     "yt": "Genesys inbound call flow tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/create-inbound-call-flow/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 18,
     "track": "genesys"
    },
    {
     "t": "Inbound Message Flow",
     "was": "Wie der Call Flow, aber fuer Text: Chat, WhatsApp, SMS. Statt Ansagen gibt es Textnachrichten.",
     "pts": [
      "Message Flow = fuer digitale Text-Kanaele",
      "Kanaele: Webchat, WhatsApp, SMS, Facebook",
      "Kann Bot einbinden, bevor ein Mensch uebernimmt",
      "Antworten als Text statt Sprache"
     ],
     "yt": "Genesys inbound message flow",
     "src": [
      "https://help.mypurecloud.com/articles/about-message-flows/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 19,
     "track": "genesys"
    },
    {
     "t": "In-Queue Flow",
     "was": "Der In-Queue Flow laeuft, waehrend der Kunde in der Warteschlange wartet: Wartemusik, Ansagen wie 'Sie sind Nummer 3', Rueckruf anbieten.",
     "pts": [
      "Laeuft nur waehrend des Wartens",
      "Wartemusik und Ansagen",
      "Estimated Wait Time / Position ansagen",
      "Callback (Rueckruf) anbieten statt warten"
     ],
     "yt": "Genesys in-queue flow tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/about-in-queue-flows/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 20,
     "track": "genesys"
    },
    {
     "t": "Transfer to ACD",
     "was": "Transfer to ACD ist der Baustein, der den Kunden aus dem Flow in eine Queue uebergibt, damit ein Agent uebernimmt.",
     "pts": [
      "ACD = Automatic Call Distribution",
      "Uebergibt an Queue mit passenden Skills",
      "Setzt oft vorher Priority und Skills",
      "Danach wartet der Kunde in der Queue (In-Queue Flow)"
     ],
     "yt": "Genesys transfer to ACD action",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 21,
     "track": "genesys"
    },
    {
     "t": "Agent Scripts",
     "was": "Ein Script ist eine Bildschirm-Anleitung fuer den Agent: welche Fragen er stellen soll und welche Kundendaten er sieht - wie ein Spickzettel.",
     "pts": [
      "Script = gefuehrte Maske fuer den Agent",
      "Zeigt Kundendaten und naechste Schritte",
      "Kann Buttons und Data Actions enthalten",
      "Sorgt fuer einheitliche Qualitaet"
     ],
     "yt": "Genesys Cloud agent scripts tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/about-scripting/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 22,
     "track": "genesys"
    },
    {
     "t": "Data Actions",
     "was": "Data Actions holen live Daten aus anderen Systemen (z.B. dem Bank-System) in den Flow oder das Script - z.B. Kontostand oder Kundenname.",
     "pts": [
      "Data Action = Aufruf einer fremden API aus Genesys",
      "Braucht eine Integration (Verbindung)",
      "Input (was schicke ich) und Output (was kommt zurueck)",
      "Beispiel: Kundennummer rein, Name/Status raus"
     ],
     "yt": "Genesys Cloud data actions tutorial",
     "src": [
      "https://developer.genesys.cloud/platform/integrations/",
      null
     ],
     "gh": [
      [
       "Genesys Cloud Data Actions Beispiele",
       "https://github.com/GenesysCloudBlueprints"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 23,
     "track": "genesys"
    },
    {
     "t": "Genesys Cloud APIs",
     "was": "Ueber die Genesys Cloud API kann man fast alles automatisieren: Nutzer anlegen, Daten auslesen, Flows steuern - von aussen per Programm.",
     "pts": [
      "Ueber 1000 Endpoints (REST API)",
      "Zugriff mit OAuth-Token",
      "SDKs fuer viele Sprachen (Python, JavaScript ...)",
      "Rate Limits beachten (nicht zu viele Aufrufe)"
     ],
     "yt": "Genesys Cloud API tutorial",
     "src": [
      "https://developer.genesys.cloud/",
      null
     ],
     "gh": [
      [
       "Platform Client SDK",
       "https://github.com/MyPureCloud"
      ],
      [
       "Python SDK",
       "https://github.com/MyPureCloud/platform-client-sdk-python"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 24,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "Genesys AI Bausteine",
   "emoji": "🤖",
   "ziel": "Die KI-Funktionen von Genesys kennenlernen, die Agents und Kunden helfen.",
   "topics": [
    {
     "t": "Genesys AI Studio",
     "was": "AI Studio ist der Ort in Genesys, wo man die KI-Funktionen (Bots, Knowledge, Agent Assist) einrichtet und trainiert.",
     "pts": [
      "Zentraler Ort fuer Genesys AI",
      "Bots bauen und trainieren",
      "Knowledge und Intents verwalten",
      "Basis fuer die GC-AI-DB Zertifizierung"
     ],
     "yt": "Genesys AI Studio overview",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 25,
     "track": "genesys"
    },
    {
     "t": "Genesys Agent Assist",
     "was": "Agent Assist ist ein Helfer, der dem Agent waehrend des Gespraechs live Vorschlaege und passende Wissens-Artikel einblendet.",
     "pts": [
      "Live-Hilfe fuer den Agent",
      "Schlaegt Knowledge-Artikel vor",
      "Hoert mit (Voice/Chat) und reagiert",
      "Verkuerzt Bearbeitungszeit, weniger Fehler"
     ],
     "yt": "Genesys Agent Assist demo",
     "src": [
      "https://help.mypurecloud.com/articles/about-agent-assist/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 26,
     "track": "genesys"
    },
    {
     "t": "Genesys Agent Copilot",
     "was": "Agent Copilot ist die neuere, KI-gestuetzte Version von Agent Assist: sie versteht das Gespraech und gibt konkrete naechste Schritte und Antworten.",
     "pts": [
      "KI-Assistent fuer Agents (GenAI)",
      "Schlaegt Antworten und Wissen in Echtzeit vor",
      "Fasst Kundenanliegen zusammen",
      "Baut auf Knowledge Base auf"
     ],
     "yt": "Genesys Agent Copilot overview",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 27,
     "track": "genesys"
    },
    {
     "t": "Genesys Conversation Summary",
     "was": "Nach dem Gespraech schreibt die KI automatisch eine kurze Zusammenfassung, damit der Agent nicht alles selbst tippen muss (After-Call Work).",
     "pts": [
      "Automatische Zusammenfassung des Gespraechs",
      "Spart Nachbearbeitungszeit (ACW)",
      "Einheitliche, kurze Notizen",
      "Kann Grund, Loesung, naechste Schritte erfassen"
     ],
     "yt": "Genesys conversation summarization",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 28,
     "track": "genesys"
    },
    {
     "t": "Genesys Virtual Agent",
     "was": "Ein Virtual Agent ist ein Bot, der wie ein Agent mit Kunden spricht und einfache Anliegen selbst loest, ohne Menschen.",
     "pts": [
      "Virtual Agent = automatischer Gespraechspartner (Bot)",
      "Loest Standardfragen rund um die Uhr",
      "Uebergibt an Menschen, wenn noetig",
      "Kann Voice und Digital sein"
     ],
     "yt": "Genesys virtual agent explained",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 29,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "Bot Flows & NLU",
   "emoji": "💬",
   "ziel": "Bots bauen und der KI beibringen, Sprache zu verstehen (NLU).",
   "topics": [
    {
     "t": "Genesys Digital Bot Flow",
     "was": "Ein Digital Bot Flow ist der Chatbot-Ablauf fuer Text-Kanaele. Man baut ihn im Architect: Fragen, Antworten, Verzweigungen.",
     "pts": [
      "Fuer Chat/Messaging (Text)",
      "Bausteine: Ask, Communicate, Decision",
      "Kann Knowledge und Intents nutzen",
      "Uebergabe an Agent moeglich"
     ],
     "yt": "Genesys digital bot flow tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/about-digital-bot-flows/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 30,
     "track": "genesys"
    },
    {
     "t": "Genesys Voice Bot Flow",
     "was": "Wie der Digital Bot, aber am Telefon: der Bot spricht (Text-to-Speech) und versteht Gesprochenes (Speech-to-Text).",
     "pts": [
      "Fuer Voice (Telefon)",
      "Spracherkennung (STT) und Sprachausgabe (TTS)",
      "Umgang mit Verstehfehlern wichtig",
      "Barge-in: Kunde kann den Bot unterbrechen"
     ],
     "yt": "Genesys voice bot flow tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/about-voice-bot-flows/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 31,
     "track": "genesys"
    },
    {
     "t": "Genesys Bot Flow Actions",
     "was": "Actions sind die Bausteine im Bot: eine Frage stellen, etwas sagen, entscheiden, Daten holen. Man reiht sie zum Ablauf.",
     "pts": [
      "Ask for Intent / Ask for Slot",
      "Communicate (etwas sagen)",
      "Decision / Switch (verzweigen)",
      "Call Data Action (Daten holen)"
     ],
     "yt": "Genesys bot flow actions",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 32,
     "track": "genesys"
    },
    {
     "t": "Genesys Bot Flow Variablen",
     "was": "Variablen sind Merkzettel im Bot. Sie speichern Werte waehrend des Gespraechs, z.B. die genannte Kontonummer.",
     "pts": [
      "Variable = Speicherplatz mit Namen",
      "Typen: String, Integer, Boolean, ...",
      "Scope: Flow-Variable vs Slot",
      "Werden in Bedingungen und Antworten genutzt"
     ],
     "yt": "Genesys bot flow variables",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 33,
     "track": "genesys"
    },
    {
     "t": "Genesys NLU Grundlagen",
     "was": "NLU heisst Natural Language Understanding - die Faehigkeit der KI, gesprochene/geschriebene Sprache zu verstehen und den Wunsch zu erkennen.",
     "pts": [
      "NLU = Sprache verstehen (Absicht erkennen)",
      "Bestandteile: Intents, Utterances, Slots",
      "Wird mit Beispielen trainiert",
      "Basis fuer jeden guten Bot"
     ],
     "yt": "NLU natural language understanding erklaert",
     "src": [
      "https://help.mypurecloud.com/articles/about-natural-language-understanding/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 34,
     "track": "genesys"
    },
    {
     "t": "Intents",
     "was": "Ein Intent ist die Absicht des Kunden, z.B. 'Karte sperren' oder 'Kontostand'. Der Bot erkennt den Intent und reagiert passend.",
     "pts": [
      "Intent = Ziel/Wunsch des Kunden",
      "Ein Bot hat viele Intents",
      "Jeder Intent hat viele Beispielsaetze (Utterances)",
      "Guter Schnitt: nicht zu breit, nicht zu eng"
     ],
     "yt": "Chatbot intents explained",
     "src": [
      "https://help.mypurecloud.com/articles/about-intents/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 35,
     "track": "genesys"
    },
    {
     "t": "Utterances",
     "was": "Utterances sind Beispielsaetze, wie Kunden etwas sagen koennten. Je mehr echte Beispiele, desto besser erkennt der Bot den Intent.",
     "pts": [
      "Utterance = Beispielsatz fuer einen Intent",
      "Viele Varianten sammeln (auch Umgangssprache)",
      "15-30+ Beispiele pro Intent als Start",
      "Echte Kundensaetze sind am besten"
     ],
     "yt": "chatbot training utterances",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 36,
     "track": "genesys"
    },
    {
     "t": "Slots",
     "was": "Ein Slot ist eine Information, die der Bot aus dem Satz herausfischt, z.B. aus 'Ich will 100 Euro' den Betrag 100.",
     "pts": [
      "Slot = herausgezogene Info aus dem Satz",
      "Beispiel: Betrag, Datum, Kontonummer",
      "Bot fragt nach, wenn Slot fehlt",
      "Wird in Variablen gespeichert"
     ],
     "yt": "chatbot slots entities explained",
     "src": [
      "https://help.mypurecloud.com/articles/about-slots/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 37,
     "track": "genesys"
    },
    {
     "t": "Slot Types",
     "was": "Der Slot Type sagt, welche Art von Wert erwartet wird: Zahl, Datum, Waehrung oder eine eigene Liste (z.B. Kontoarten).",
     "pts": [
      "Built-in Types: Number, Date, Currency ...",
      "Custom Slot Type: eigene Werte-Liste",
      "Hilft dem Bot beim richtigen Erkennen",
      "Beispiel: Kontoart = [Giro, Spar, Depot]"
     ],
     "yt": "chatbot slot types",
     "src": [
      "https://help.mypurecloud.com/articles/about-slot-types/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 38,
     "track": "genesys"
    },
    {
     "t": "Confidence Score",
     "was": "Der Confidence Score ist eine Sicherheits-Zahl (0 bis 1): wie sicher ist sich der Bot, den Intent richtig erkannt zu haben.",
     "pts": [
      "0 bis 1 (bzw. 0-100%)",
      "Hoch = sehr sicher, niedrig = unsicher",
      "Schwelle (Threshold) festlegen",
      "Unter der Schwelle -> Nachfragen statt raten"
     ],
     "yt": "NLU confidence score explained",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 39,
     "track": "genesys"
    },
    {
     "t": "No Match",
     "was": "No Match passiert, wenn der Bot nichts Passendes versteht. Dann sollte er hoeflich nachfragen statt falsch zu antworten.",
     "pts": [
      "No Match = kein Intent erkannt",
      "Reaktion: freundlich nachfragen",
      "Nach mehreren Versuchen: an Agent uebergeben",
      "Gute No-Match-Texte verhindern Frust"
     ],
     "yt": "chatbot no match handling",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 40,
     "track": "genesys"
    },
    {
     "t": "No Input",
     "was": "No Input passiert, wenn der Kunde gar nichts sagt/schreibt. Der Bot sollte erinnern und dann weiterleiten.",
     "pts": [
      "No Input = keine Antwort vom Kunden",
      "Reaktion: erneut fragen ('Sind Sie noch da?')",
      "Timeout einstellen",
      "Nach X Versuchen: Uebergabe oder Abschluss"
     ],
     "yt": "voice bot no input timeout",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 41,
     "track": "genesys"
    },
    {
     "t": "Intent Design fuer Banken",
     "was": "Beim Bank-Bot muss man die Intents klug schneiden: typische Bank-Anliegen sauber trennen und sensible Themen sicher behandeln.",
     "pts": [
      "Typische Intents: Karte sperren, Kontostand, Ueberweisung",
      "Sensible Themen klar trennen (Betrug, Sperrung)",
      "Nicht zu viele aehnliche Intents (Verwechslung)",
      "Immer sicheren Weg zum Menschen anbieten"
     ],
     "yt": "banking chatbot intent design",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 42,
     "track": "genesys"
    },
    {
     "t": "Intent Miner",
     "was": "Der Intent Miner schaut in echte Gespraeche und schlaegt automatisch vor, welche Intents Kunden brauchen - man muss nicht raten.",
     "pts": [
      "Analysiert echte Transkripte",
      "Schlaegt neue Intents/Utterances vor",
      "Spart Zeit beim Bot-Aufbau",
      "Basiert auf echten Kundenanliegen"
     ],
     "yt": "Genesys intent miner",
     "src": [
      "https://help.mypurecloud.com/articles/about-intent-miner/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 43,
     "track": "genesys"
    },
    {
     "t": "Bot Learning",
     "was": "Bot Learning heisst: der Bot wird mit Daten trainiert und mit der Zeit besser, wenn man aus Fehlern nachbessert.",
     "pts": [
      "Training = dem Bot Beispiele geben",
      "Nach dem Live-Gang weiter verbessern",
      "Fehler ansehen und Utterances ergaenzen",
      "Regelmaessig neu trainieren"
     ],
     "yt": "chatbot training and learning",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 44,
     "track": "genesys"
    },
    {
     "t": "Bot Optimization",
     "was": "Optimization heisst, den Bot mit Zahlen zu verbessern: wo bricht der Kunde ab, wo versteht der Bot schlecht?",
     "pts": [
      "Kennzahlen ansehen (Containment, Erfolgsquote)",
      "Schwachstellen finden (viele No Matches)",
      "Utterances/Intents anpassen",
      "Immer wieder wiederholen (Kreislauf)"
     ],
     "yt": "chatbot optimization metrics",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 45,
     "track": "genesys"
    },
    {
     "t": "Bot QA Testing",
     "was": "QA Testing heisst, den Bot vor und nach dem Live-Gang systematisch zu pruefen: Versteht er alles? Macht er keine Fehler?",
     "pts": [
      "Testfaelle schreiben (typische Saetze)",
      "Erkennung und Antworten pruefen",
      "Grenzfaelle testen (Tippfehler, Slang)",
      "Vor jedem Release testen"
     ],
     "yt": "chatbot QA testing",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 46,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "Knowledge (Wissen)",
   "emoji": "📚",
   "ziel": "Wissens-Artikel bauen und dem Bot Wissen geben - das Herz der GC-AI-DB.",
   "topics": [
    {
     "t": "Knowledge Workbench",
     "was": "Die Knowledge Workbench ist das Werkzeug, um Wissens-Artikel zu erstellen und zu pflegen, die Bot und Agent nutzen.",
     "pts": [
      "Ort zum Erstellen/Bearbeiten von Wissen",
      "Artikel, Kategorien, Labels verwalten",
      "Wird von Bot und Agent Assist genutzt",
      "Wichtig fuer die GC-AI-DB Pruefung"
     ],
     "yt": "Genesys knowledge workbench tutorial",
     "src": [
      "https://help.mypurecloud.com/articles/about-genesys-knowledge/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 47,
     "track": "genesys"
    },
    {
     "t": "Knowledge Base Design",
     "was": "Eine Knowledge Base (Wissensdatenbank) muss gut geplant sein: klare Struktur, verstaendliche Artikel, damit die KI gute Antworten findet.",
     "pts": [
      "Knowledge Base = Sammlung von Wissens-Artikeln",
      "Struktur vorher planen",
      "Kurze, klare Artikel schreiben",
      "Eine Frage - eine Antwort"
     ],
     "yt": "knowledge base best practices",
     "src": [
      "https://help.mypurecloud.com/articles/about-genesys-knowledge/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 48,
     "track": "genesys"
    },
    {
     "t": "Knowledge Articles",
     "was": "Ein Article ist ein einzelner Wissens-Eintrag: eine Frage und die Antwort. Der Bot sucht darin die passende Antwort.",
     "pts": [
      "Article = Frage + Antwort",
      "Alternative Fragen (Phrasings) hinzufuegen",
      "Kurz und eindeutig halten",
      "Regelmaessig aktuell halten"
     ],
     "yt": "Genesys knowledge article create",
     "src": [
      "https://help.mypurecloud.com/articles/create-knowledge-article/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 49,
     "track": "genesys"
    },
    {
     "t": "Knowledge Categories",
     "was": "Categories sind Ordner fuer Artikel, damit das Wissen sortiert ist, z.B. 'Karten', 'Konto', 'Kredit'.",
     "pts": [
      "Category = Ordner/Thema",
      "Ordnung schafft Uebersicht",
      "Kann Unterkategorien haben",
      "Hilft Suche und Pflege"
     ],
     "yt": "Genesys knowledge categories",
     "src": [
      "https://help.mypurecloud.com/articles/about-genesys-knowledge/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 50,
     "track": "genesys"
    },
    {
     "t": "Knowledge Labels",
     "was": "Labels sind Etiketten, die man Artikeln anheftet, um sie zusaetzlich zu filtern oder gezielt anzuzeigen.",
     "pts": [
      "Label = Etikett/Stichwort",
      "Filtern und Steuern der Anzeige",
      "Ein Artikel kann mehrere Labels haben",
      "Nuetzlich fuer Ziel-Gruppen/Kanaele"
     ],
     "yt": "Genesys knowledge labels",
     "src": [
      "https://help.mypurecloud.com/articles/about-genesys-knowledge/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 51,
     "track": "genesys"
    },
    {
     "t": "Knowledge Portal",
     "was": "Das Knowledge Portal ist eine Self-Service-Webseite, auf der Kunden selbst im Wissen suchen koennen - ohne Anruf.",
     "pts": [
      "Portal = Selbstbedienungs-Wissensseite",
      "Kunden finden Antworten allein",
      "Entlastet das Contact Center",
      "Nutzt dieselben Artikel wie der Bot"
     ],
     "yt": "Genesys knowledge portal",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 52,
     "track": "genesys"
    },
    {
     "t": "Knowledge Optimizer",
     "was": "Der Knowledge Optimizer zeigt, welche Artikel fehlen oder schlecht laufen, und schlaegt Verbesserungen vor.",
     "pts": [
      "Findet Wissensluecken",
      "Zeigt haeufige unbeantwortete Fragen",
      "Schlaegt neue/bessere Artikel vor",
      "Datengetriebene Pflege"
     ],
     "yt": "Genesys knowledge optimizer",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 53,
     "track": "genesys"
    },
    {
     "t": "Knowledge mit Bot Flow verbinden",
     "was": "Damit der Bot Wissen nutzen kann, verknuepft man die Knowledge Base im Bot Flow. Dann beantwortet der Bot Fragen aus dem Wissen.",
     "pts": [
      "Knowledge Base im Bot Flow auswaehlen",
      "Knowledge-Action einbauen",
      "Bot sucht Antwort im Wissen",
      "Fallback, wenn nichts gefunden wird"
     ],
     "yt": "Genesys connect knowledge to bot flow",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 54,
     "track": "genesys"
    },
    {
     "t": "Custom Knowledge Handling",
     "was": "Manchmal reicht Standard nicht: man steuert selbst, wie der Bot mit Wissen umgeht, z.B. mehrere Treffer anzeigen oder gezielt filtern.",
     "pts": [
      "Eigene Logik im Flow einbauen",
      "Mehrere Treffer verarbeiten",
      "Nach Label/Kategorie filtern",
      "Antwortformat anpassen"
     ],
     "yt": "Genesys custom knowledge handling",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 55,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "GC-AI-DB Zertifizierung",
   "emoji": "🎓",
   "ziel": "Die offizielle Genesys-Zertifizierung fuer AI, Digital Bots & Knowledge.",
   "topics": [
    {
     "t": "GC-AI-DB Zertifizierung",
     "was": "GC-AI-DB steht fuer 'Genesys Cloud: AI - Digital Bots & Knowledge Certification'. Ein offizieller Nachweis, dass man Genesys-Bots und Knowledge beherrscht.",
     "pts": [
      "Deckt ab: Bot Flows, NLU, Knowledge, Agent Assist",
      "Vorbereitung ueber Genesys Beyond (Kurse)",
      "Praxis im eigenen/Test-Org ueben",
      "Pruefung online, danach Zertifikat/Badge"
     ],
     "yt": "Genesys GC-AI-DB certification",
     "src": [
      "Genesys Beyond Lernplattform",
      "https://beyond.genesys.com/explore"
     ],
     "gh": [],
     "art": [
      [
       "Genesys Zertifizierungen Uebersicht",
       "https://www.genesys.com/de/customer-success/genesys-university"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 56,
     "track": "genesys"
    }
   ],
   "track": "genesys"
  },
  {
   "title": "AI-Fundament: Programmieren & Daten",
   "emoji": "🐍",
   "ziel": "Die Basis jedes AI-Bootcamps: einfache Programmierung mit Python und der Umgang mit Daten.",
   "topics": [
    {
     "t": "Warum Python fuer KI",
     "was": "Python ist eine Programmiersprache, die sich fast wie einfaches Englisch liest. Fast die gesamte KI-Welt benutzt Python, weil es leicht zu lernen ist und es fertige KI-Bausteine (Libraries) gibt.",
     "pts": [
      "Programmiersprache = Sprache, mit der man dem Computer Anweisungen gibt",
      "Python ist einsteigerfreundlich und weit verbreitet",
      "Es gibt fertige Bausteine fuer KI, Daten und Mathe",
      "Standard in fast jedem AI-Bootcamp"
     ],
     "yt": "Python lernen fuer Anfaenger deutsch",
     "src": [
      "Python Tutorial (offiziell, deutsch)",
      "https://docs.python.org/de/3/tutorial/"
     ],
     "gh": [
      [
       "CPython (die Sprache selbst)",
       "https://github.com/python/cpython"
      ]
     ],
     "art": [
      [
       "Elements of AI (Uni Helsinki, kostenlos, deutsch)",
       "https://www.elementsofai.de/"
      ]
     ],
     "detail": "Du musst kein Mathe-Genie sein, um Python zu lernen. Man schreibt kurze Zeilen, der Computer fuehrt sie sofort aus. So sieht man direkt, was passiert. Genau deshalb starten Bootcamps mit Python, bevor es an KI geht.",
     "bsp": "print('Hallo Welt') laesst den Computer den Text 'Hallo Welt' anzeigen.",
     "merke": "Python ist das Werkzeug. KI ist das, was du damit baust.",
     "lang": [],
     "web": [],
     "nr": 1,
     "track": "ai"
    },
    {
     "t": "Variablen & Datentypen (Python)",
     "was": "Eine Variable ist ein benannter Behaelter fuer einen Wert, z.B. name = 'Anna'. Ein Datentyp sagt, welche Art von Wert drin ist: Text, Zahl oder Wahrheitswert.",
     "pts": [
      "Variable = Behaelter mit Namen",
      "String = Text (in Anfuehrungszeichen)",
      "Integer/Float = ganze/kommazahlen",
      "Boolean = wahr oder falsch (True/False)"
     ],
     "yt": "Python Variablen Datentypen erklaert",
     "src": [
      "Python Tutorial (deutsch)",
      "https://docs.python.org/de/3/tutorial/"
     ],
     "gh": [],
     "art": [],
     "detail": "Stell dir Variablen wie beschriftete Schachteln vor. In eine Schachtel 'alter' legst du die Zahl 30, in 'name' den Text 'Anna'. Spaeter holst du den Wert einfach ueber den Namen wieder heraus. Der Datentyp bestimmt, was du mit dem Wert tun kannst (rechnen bei Zahlen, verbinden bei Text).",
     "bsp": "alter = 30  (Zahl)  ·  name = 'Anna'  (Text)  ·  ist_kunde = True  (wahr/falsch)",
     "merke": "Erst Wert in die Variable legen, dann ueber den Namen wieder benutzen.",
     "lang": [],
     "web": [],
     "nr": 2,
     "track": "ai"
    },
    {
     "t": "Kontrollfluss: if & Schleifen",
     "was": "Mit 'if' trifft das Programm Entscheidungen (wenn ... dann ...). Mit Schleifen (for/while) wiederholt es Dinge automatisch, statt sie 100-mal abzutippen.",
     "pts": [
      "if / else = Entscheidung treffen",
      "for-Schleife = etwas fuer jedes Element tun",
      "while-Schleife = wiederholen, solange etwas gilt",
      "Einrueckung (Leerzeichen) zeigt in Python, was zusammengehoert"
     ],
     "yt": "Python if else schleifen erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Der Computer arbeitet Zeile fuer Zeile von oben nach unten. Mit 'if' kann er abbiegen ('wenn Betrag groesser 1000, dann pruefe genauer'). Mit einer Schleife macht er dieselbe Arbeit fuer viele Daten, z.B. fuer jeden Kunden in einer Liste. Das ist die Grundlage, um grosse Datenmengen zu verarbeiten.",
     "bsp": "for kunde in kundenliste: begruesse(kunde) - macht dasselbe fuer jeden Kunden.",
     "merke": "if = entscheiden, Schleife = wiederholen. Mehr steckt am Anfang nicht dahinter.",
     "lang": [],
     "web": [],
     "nr": 3,
     "track": "ai"
    },
    {
     "t": "Funktionen & Libraries",
     "was": "Eine Funktion ist ein benannter Arbeitsschritt, den man immer wieder aufrufen kann. Eine Library (Bibliothek) ist eine Sammlung fertiger Funktionen von anderen, die man einfach mitbenutzt.",
     "pts": [
      "Funktion = wiederverwendbarer Arbeitsschritt",
      "Aufruf mit Namen und Klammern: begruesse('Anna')",
      "Library = fertige Bausteine zum Importieren",
      "import pandas -> holt die Daten-Library herein"
     ],
     "yt": "Python funktionen libraries erklaert",
     "src": [
      "https://docs.python.org/de/3/tutorial/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": "Statt alles selbst zu bauen, nutzt man fertige Libraries. Fuer Daten gibt es pandas, fuer Mathe numpy, fuer KI scikit-learn. Das ist wie Kochen mit fertigen Zutaten statt alles vom Feld zu ernten. Deshalb kann man mit wenig Code viel erreichen.",
     "bsp": "import pandas as pd  laedt die Daten-Library. Danach kann man Tabellen laden und auswerten.",
     "merke": "Nicht neu erfinden - fertige Libraries sparen dir 90 % der Arbeit.",
     "lang": [],
     "web": [],
     "nr": 4,
     "track": "ai"
    },
    {
     "t": "NumPy",
     "was": "NumPy ist die Basis-Library fuer Zahlen und Rechnen in Python. Sie kann blitzschnell mit grossen Zahlenlisten (Arrays) rechnen - die Grundlage fast aller KI.",
     "pts": [
      "NumPy = schnelles Rechnen mit Zahlen",
      "Array = geordnete Liste von Zahlen",
      "Rechnet mit ganzen Listen auf einmal",
      "Basis fuer pandas und KI-Libraries"
     ],
     "yt": "NumPy tutorial deutsch anfaenger",
     "src": null,
     "gh": [
      [
       "NumPy",
       "https://github.com/numpy/numpy"
      ]
     ],
     "art": [],
     "detail": "KI rechnet mit riesigen Zahlentabellen. Normale Python-Schleifen waeren dafuer zu langsam. NumPy erledigt das im Hintergrund extrem schnell. Du schreibst 'a + b' und NumPy addiert Tausende Zahlen gleichzeitig.",
     "bsp": "Alle Gehaelter um 5 % erhoehen: gehaelter * 1.05 - in EINER Zeile fuer die ganze Liste.",
     "merke": "NumPy = der Taschenrechner fuer riesige Zahlenmengen.",
     "lang": [],
     "web": [],
     "nr": 5,
     "track": "ai"
    },
    {
     "t": "Pandas",
     "was": "Pandas ist die Library fuer Tabellen (wie Excel, aber in Python). Damit laedt, filtert und analysiert man Daten - der wichtigste Schritt vor jeder KI.",
     "pts": [
      "Pandas = Tabellen in Python",
      "DataFrame = eine Tabelle mit Zeilen und Spalten",
      "Filtern, sortieren, gruppieren, zusammenfassen",
      "Liest CSV, Excel, Datenbanken"
     ],
     "yt": "Pandas tutorial deutsch anfaenger",
     "src": null,
     "gh": [
      [
       "pandas",
       "https://github.com/pandas-dev/pandas"
      ]
     ],
     "art": [
      [
       "Kaggle: Pandas Kurs (kostenlos)",
       "https://www.kaggle.com/learn"
      ]
     ],
     "detail": "Bevor eine KI lernen kann, muessen die Daten sauber und geordnet sein. Genau das macht man mit pandas: Tabelle laden, fehlende Werte finden, Spalten auswaehlen, Durchschnitte berechnen. Fachleute sagen: 80 % der Arbeit in KI-Projekten ist Datenaufbereitung - und die passiert meist in pandas.",
     "bsp": "df[df['betrag'] > 1000] zeigt nur die Zeilen, in denen der Betrag ueber 1000 liegt.",
     "merke": "Erst die Daten in Ordnung bringen (pandas), dann die KI. Nie umgekehrt.",
     "lang": [],
     "web": [],
     "nr": 6,
     "track": "ai"
    },
    {
     "t": "Daten bereinigen (Data Cleaning)",
     "was": "Data Cleaning heisst, Daten sauber zu machen: fehlende Werte ergaenzen, Fehler korrigieren, Doppelte entfernen. Schmutzige Daten fuehren zu schlechter KI.",
     "pts": [
      "Fehlende Werte behandeln (leere Felder)",
      "Doppelte Eintraege entfernen",
      "Falsche/unlogische Werte korrigieren",
      "Einheitliches Format herstellen"
     ],
     "yt": "data cleaning erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Echte Daten sind fast nie perfekt: mal fehlt das Alter, mal ist ein Datum falsch, mal steht derselbe Kunde doppelt drin. Wenn man solche Daten ungeprueft in eine KI gibt, lernt sie Unsinn. 'Garbage in, garbage out' - Muell rein, Muell raus. Deshalb ist Cleaning einer der wichtigsten Schritte.",
     "bsp": "Ein Konto mit Alter = 999 Jahre ist ein Tippfehler und muss korrigiert oder entfernt werden.",
     "merke": "Garbage in, garbage out: Saubere Daten sind wichtiger als das schlauste Modell.",
     "lang": [],
     "web": [],
     "nr": 7,
     "track": "ai"
    },
    {
     "t": "Datenvisualisierung",
     "was": "Visualisierung heisst, Daten als Bilder/Diagramme darzustellen. Ein Diagramm zeigt Muster, die man in einer Zahlentabelle nie sehen wuerde.",
     "pts": [
      "Diagramme statt nackter Zahlen",
      "Balken, Linien, Streudiagramme (Scatter)",
      "Libraries: matplotlib, seaborn",
      "Muster und Ausreisser schnell erkennen"
     ],
     "yt": "datenvisualisierung python matplotlib deutsch",
     "src": null,
     "gh": [
      [
       "matplotlib",
       "https://github.com/matplotlib/matplotlib"
      ]
     ],
     "art": [],
     "detail": "Menschen erkennen Muster viel besser in Bildern als in Tabellen. Ein Liniendiagramm zeigt sofort, ob Betrug im Sommer steigt. Ein Streudiagramm zeigt, ob teureres Wohnen auch mehr Kredit bedeutet. Vor jedem KI-Modell schaut man sich die Daten erst als Bild an (das nennt man EDA - Explorative Datenanalyse).",
     "bsp": "Ein Balkendiagramm der Anrufe pro Wochentag zeigt sofort, dass Montag der Stresstag ist.",
     "merke": "Erst anschauen, dann rechnen. Ein Bild verraet mehr als 1000 Zahlen.",
     "lang": [],
     "web": [],
     "nr": 8,
     "track": "ai"
    },
    {
     "t": "Jupyter Notebook",
     "was": "Ein Jupyter Notebook ist eine digitale Seite, auf der man Code, Ergebnisse und Notizen mischt. Man fuehrt Code Stueck fuer Stueck aus und sieht sofort das Ergebnis.",
     "pts": [
      "Code + Ergebnis + Text auf einer Seite",
      "Schrittweise ausfuehren (Zelle fuer Zelle)",
      "Ideal zum Lernen und Ausprobieren",
      "Laeuft im Browser"
     ],
     "yt": "Jupyter Notebook tutorial deutsch",
     "src": null,
     "gh": [
      [
       "Jupyter",
       "https://github.com/jupyter/notebook"
      ]
     ],
     "art": [],
     "detail": "Statt ein ganzes Programm auf einmal laufen zu lassen, teilt ein Notebook alles in kleine Bloecke (Zellen). Du fuehrst eine Zelle aus, siehst das Ergebnis (auch Diagramme), aenderst etwas und probierst weiter. Fast jeder Data-Science-Kurs arbeitet damit.",
     "bsp": "In einer Zelle laedst du die Daten, in der naechsten zeigst du ein Diagramm - alles untereinander sichtbar.",
     "merke": "Notebook = Ausprobieren mit sofortiger Rueckmeldung. Perfekt zum Lernen.",
     "lang": [],
     "web": [],
     "nr": 9,
     "track": "ai"
    },
    {
     "t": "Git & GitHub Grundlagen",
     "was": "Git speichert die Versionen deines Codes (wie ein Speicherpunkt im Spiel). GitHub ist die Webseite, auf der man den Code ablegt, teilt und zusammenarbeitet.",
     "pts": [
      "Git = Versionsverwaltung (Speicherpunkte)",
      "Commit = ein Speicherpunkt mit Beschreibung",
      "GitHub = Ort zum Ablegen und Teilen",
      "Repository = ein Projekt-Ordner online"
     ],
     "yt": "Git GitHub Grundlagen deutsch anfaenger",
     "src": null,
     "gh": [
      [
       "Git",
       "https://github.com/git/git"
      ]
     ],
     "art": [],
     "detail": "Beim Programmieren aendert man staendig etwas. Mit Git kannst du jederzeit zu einer frueheren Version zurueck, falls etwas kaputtgeht. GitHub ist der Online-Speicher dafuer - und gleichzeitig dein oeffentliches Schaufenster (Portfolio) fuer Bewerbungen. Diese App liegt uebrigens auch auf GitHub.",
     "bsp": "Du machst einen Fehler? Mit Git springst du zum letzten funktionierenden Speicherpunkt zurueck.",
     "merke": "Git ist deine Zeitmaschine fuer Code - und GitHub dein Portfolio.",
     "lang": [],
     "web": [],
     "nr": 10,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Mathematik fuer KI (sehr einfach)",
   "emoji": "📐",
   "ziel": "Nur die Mathe-Ideen, die man wirklich braucht - ganz ohne Formel-Angst erklaert.",
   "topics": [
    {
     "t": "Warum Mathe fuer KI?",
     "was": "KI ist im Kern Rechnen mit Zahlen. Man muss die Mathe nicht selbst rechnen (das macht der Computer), aber die Grundideen verstehen, um zu wissen, was passiert.",
     "pts": [
      "KI trifft Entscheidungen ueber Zahlen",
      "Drei Bereiche reichen: Statistik, Lineare Algebra, Ableitung",
      "Computer rechnet - du musst nur die Idee verstehen",
      "Keine Angst: es geht um Verstehen, nicht um Klausuren"
     ],
     "yt": "Mathe fuer machine learning einfach erklaert",
     "src": null,
     "gh": [],
     "art": [
      [
       "Elements of AI (Uni Helsinki, kostenlos, deutsch)",
       "https://www.elementsofai.de/"
      ]
     ],
     "detail": "Viele haben Angst vor Mathe und denken, KI sei deshalb nichts fuer sie. Das stimmt nicht. Du brauchst kein Studium. Es reicht, drei Grundideen zu verstehen: Wie fasse ich Daten zusammen (Statistik)? Wie rechnet man mit Zahlenlisten (Lineare Algebra)? Wie wird ein Modell Schritt fuer Schritt besser (Ableitung/Gradient)? Den Rest erledigt der Computer.",
     "bsp": null,
     "merke": "Du musst Mathe nicht koennen, sondern verstehen, wofuer sie da ist.",
     "lang": [],
     "web": [],
     "nr": 11,
     "track": "ai"
    },
    {
     "t": "Statistik Grundlagen",
     "was": "Statistik fasst viele Zahlen zu wenigen Kennzahlen zusammen, z.B. Durchschnitt. So versteht man grosse Datenmengen auf einen Blick.",
     "pts": [
      "Mittelwert = Durchschnitt",
      "Median = der mittlere Wert (robuster als der Durchschnitt)",
      "Standardabweichung = wie stark streuen die Werte",
      "Ausreisser = einzelne, sehr abweichende Werte"
     ],
     "yt": "Statistik grundlagen einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Wenn 1000 Kunden anrufen, kannst du nicht jede Zahl einzeln ansehen. Statistik verdichtet das: Der Durchschnittsanruf dauert 4 Minuten, die meisten liegen zwischen 2 und 6. Achtung beim Durchschnitt: Ein einziger Millionaer hebt den 'Durchschnittskunden' stark an - deshalb ist der Median oft ehrlicher.",
     "bsp": "Gehaelter 2000, 2100, 2200, 50000: Durchschnitt = 14075 (irrefuehrend), Median = 2150 (ehrlicher).",
     "merke": "Der Durchschnitt kann luegen - der Median ist oft der ehrlichere Wert.",
     "lang": [],
     "web": [],
     "nr": 12,
     "track": "ai"
    },
    {
     "t": "Wahrscheinlichkeit",
     "was": "Wahrscheinlichkeit sagt, wie sicher etwas eintritt - von 0 (nie) bis 1 (immer). KI arbeitet fast immer mit Wahrscheinlichkeiten, nicht mit sicheren Fakten.",
     "pts": [
      "0 = unmoeglich, 1 = sicher, 0.5 = 50:50",
      "KI sagt: 'zu 92 % ist das Betrug'",
      "Kein 'ja/nein', sondern 'wie wahrscheinlich'",
      "Grundlage des Confidence Score"
     ],
     "yt": "wahrscheinlichkeit einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Eine KI sagt selten 'das ist sicher so'. Sie sagt 'das ist zu 92 % Betrug'. Diese 92 % sind eine Wahrscheinlichkeit. Deshalb legt man Schwellen fest: Ab 90 % Alarm ausloesen, darunter erst nachfragen. Genau dieselbe Idee steckt im Confidence Score eines Bots.",
     "bsp": "Der Bot ist zu 40 % sicher, den Wunsch verstanden zu haben - zu wenig, also fragt er lieber nach.",
     "merke": "KI denkt in Wahrscheinlichkeiten, nicht in absoluten Wahrheiten.",
     "lang": [],
     "web": [],
     "nr": 13,
     "track": "ai"
    },
    {
     "t": "Lineare Algebra: Vektoren & Matrizen",
     "was": "Ein Vektor ist eine Liste von Zahlen, eine Matrix eine Tabelle von Zahlen. KI speichert fast alles so - z.B. ist ein Embedding einfach ein Vektor.",
     "pts": [
      "Vektor = Zahlenliste (z.B. [0.2, 0.9, 0.1])",
      "Matrix = Zahlentabelle (Zeilen x Spalten)",
      "KI rechnet in riesigen Vektoren/Matrizen",
      "Ein Embedding ist ein Vektor"
     ],
     "yt": "vektoren matrizen einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Das klingt schlimmer, als es ist. Ein Vektor ist nur eine Reihe von Zahlen. Ein Bild, ein Wort, ein Kunde - all das verwandelt KI in solche Zahlenreihen, um damit zu rechnen. Wenn du frueher 'Embeddings' und 'Vector Search' gelernt hast: genau das ist Lineare Algebra in Aktion.",
     "bsp": "Das Wort 'Konto' wird zu einem Vektor wie [0.12, 0.88, ...] - aehnliche Woerter haben aehnliche Zahlen.",
     "merke": "Vektor = Zahlenliste. Mehr musst du dir zum Start nicht merken.",
     "lang": [],
     "web": [],
     "nr": 14,
     "track": "ai"
    },
    {
     "t": "Ableitung & Gradient (ganz einfach)",
     "was": "Eine Ableitung sagt, in welche Richtung es 'bergab' geht. KI nutzt das, um ihre Fehler Schritt fuer Schritt zu verkleinern - wie beim Bergabgehen im Nebel.",
     "pts": [
      "Gradient = Richtung des staerksten Gefaelles",
      "KI will den Fehler (Loss) verkleinern",
      "Sie geht in kleinen Schritten 'bergab'",
      "Das nennt man Gradient Descent"
     ],
     "yt": "gradient descent einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Stell dir vor, du stehst im Nebel auf einem Berg und willst ins Tal. Du fuehlst mit dem Fuss, wo es am steilsten bergab geht, und machst einen kleinen Schritt. Das wiederholst du. Genauso lernt eine KI: Der 'Berg' ist der Fehler, das 'Tal' ist die beste Loesung, und der Gradient zeigt die Richtung bergab. Nach vielen kleinen Schritten ist das Modell gut.",
     "bsp": "Das Modell raet, liegt daneben, korrigiert sich ein kleines Stueck - tausendfach, bis es kaum noch Fehler macht.",
     "merke": "Lernen = Fehler messen und in kleinen Schritten bergab wandern.",
     "lang": [],
     "web": [],
     "nr": 15,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Machine Learning Grundlagen",
   "emoji": "📊",
   "ziel": "Wie Computer aus Daten lernen - das Herz klassischer KI, ausfuehrlich erklaert.",
   "topics": [
    {
     "t": "Was ist Machine Learning?",
     "was": "Machine Learning (ML) heisst: Der Computer lernt Regeln selbst aus Beispielen, statt dass ein Mensch jede Regel vorgibt. Man zeigt ihm viele Beispiele, er erkennt das Muster.",
     "pts": [
      "Klassisch: Mensch schreibt jede Regel",
      "ML: Computer lernt Regeln aus Daten",
      "Braucht viele Beispiele (Daten)",
      "Grundlage fast aller heutigen KI"
     ],
     "yt": "machine learning einfach erklaert deutsch",
     "src": [
      "Google ML Crash Course (deutsch)",
      "https://developers.google.com/machine-learning/crash-course?hl=de"
     ],
     "gh": [
      [
       "scikit-learn",
       "https://github.com/scikit-learn/scikit-learn"
      ]
     ],
     "art": [
      [
       "Elements of AI (Uni Helsinki, kostenlos)",
       "https://www.elementsofai.de/"
      ]
     ],
     "detail": "Frueher hat man einem Computer jede Regel einzeln gesagt: 'Wenn Betrag > 10000 UND Ausland, dann verdaechtig'. Das ist muehsam und unvollstaendig. Machine Learning dreht das um: Man zeigt dem Computer 100000 alte Faelle mit der Info 'war Betrug / war kein Betrug', und er findet die Muster selbst. Danach erkennt er auch neue Betrugsfaelle, die kein Mensch als Regel formuliert haette.",
     "bsp": "Statt Regeln fuer Spam zu schreiben, zeigt man dem Modell 10000 Spam- und 10000 gute Mails - es lernt den Unterschied selbst.",
     "merke": "ML lernt Regeln aus Beispielen. Je besser die Beispiele, desto besser die KI.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Machine Learning (ML), auf Deutsch maschinelles Lernen, ist ein Teilbereich der Künstlichen Intelligenz. Die Idee: Ein Computer lernt Regeln selbst aus Daten, statt dass ein Mensch jede Regel vorgibt.",
        "Klassisch würde man einem Computer sagen: 'Wenn Betrag über 10000 UND Ausland, dann verdächtig.' Das ist mühsam und lückenhaft. ML dreht es um: Man zeigt dem Computer tausende alte Fälle mit der Info 'war Betrug / war kein Betrug', und er findet die Muster selbst - auch solche, die kein Mensch als Regel formuliert hätte."
       ]
      },
      {
       "h": "Die drei Grundarten",
       "p": [
        "Supervised Learning (überwacht): Lernen mit Lösung. Jedes Beispiel hat die richtige Antwort (Label) dabei. Beispiel: alte Kreditfälle mit 'zurückgezahlt/ausgefallen'. Das ist die häufigste Art in Banken.",
        "Unsupervised Learning (unüberwacht): Lernen ohne Lösung. Das Modell findet selbst Gruppen in den Daten, z.B. Kundentypen. Gut, wenn man die Antwort noch nicht kennt.",
        "Reinforcement Learning: Lernen durch Belohnung und Bestrafung, wie beim Hunde-Training. Das Modell probiert Aktionen aus und lernt, welche sich lohnen."
       ]
      },
      {
       "h": "Wie es funktioniert (Ablauf eines ML-Projekts)",
       "p": [
        "1. Daten sammeln und reinigen (Data Cleaning) - meist der größte Aufwand.",
        "2. Features und Label festlegen: Features sind die Eingaben (Betrag, Uhrzeit, Ort), das Label ist die gesuchte Antwort (Betrug ja/nein).",
        "3. Daten aufteilen in Trainings-, Validierungs- und Testdaten.",
        "4. Ein Modell trainieren (z.B. Decision Tree, Random Forest).",
        "5. Prüfen mit den Testdaten - ehrlich, mit Metriken wie Precision und Recall.",
        "6. In Betrieb nehmen und überwachen (MLOps), denn die Welt ändert sich (Model Drift)."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis in der Bank)",
       "p": [
        "Laut den Fachquellen ist ML im Banking längst Alltag. Die wichtigsten Einsätze:",
        "Kreditwürdigkeitsprüfung (Credit Scoring): Aus historischen Daten schätzt ein Modell die Ausfallwahrscheinlichkeit. Achtung: Das ist laut EU AI Act ein Hochrisiko-Bereich und muss streng geprüft und erklärbar sein - die Letztentscheidung bleibt beim Menschen.",
        "Betrugserkennung: Modelle erkennen verdächtige Muster in Echtzeit und schlagen Alarm.",
        "Kundenservice und Robo-Advisory: Empfehlungen im Portfoliomanagement, Vorsortieren von Anfragen.",
        "Prozessautomatisierung: Routineaufgaben werden übernommen, Mitarbeiter für Komplexes frei."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Betrugserkennung: Man füttert ein Modell mit Millionen alten Transaktionen, jeweils markiert als 'Betrug' oder 'kein Betrug'. Das Modell lernt die Muster. Kommt eine neue Zahlung um 3 Uhr nachts, aus dem Ausland, über einen ungewöhnlich hohen Betrag, meldet es: 'zu 92 % verdächtig'. Ein Mitarbeiter prüft und entscheidet."
       ]
      },
      {
       "h": "Vorteile",
       "p": [
        "Erkennt Muster in riesigen Datenmengen, die Menschen entgehen.",
        "Rund um die Uhr, schnell und in gleichbleibender Qualität.",
        "Senkt Kosten durch Automatisierung von Routine.",
        "Verbessert Risiko-Einschätzung und Betrugsabwehr."
       ]
      },
      {
       "h": "Grenzen, Risiken & Datenschutz",
       "p": [
        "Ein Modell ist nur so gut wie seine Daten. Verzerrte Daten führen zu unfairen Entscheidungen (Bias) - in der Bank besonders heikel bei Kredit.",
        "Erklärbarkeit: Aufsicht und Kunden dürfen eine nachvollziehbare Begründung erwarten (siehe Explainability, EU AI Act).",
        "Datenschutz: Personenbezogene Daten nur mit Rechtsgrundlage, sparsam und geschützt (DSGVO).",
        "Model Drift: Modelle veralten, wenn sich die Welt ändert - deshalb überwachen und nachtrainieren."
       ]
      },
      {
       "h": "Typische Fehler",
       "p": [
        "Mit denselben Daten prüfen, mit denen trainiert wurde (dann kennt das Modell die Antworten - Testdaten sind heilig).",
        "Nur auf Accuracy schauen - bei seltenen Fällen wie Betrug täuscht das (nutze Precision/Recall).",
        "Bias in den Daten übersehen.",
        "Das Modell nach dem Start nie wieder pflegen."
       ]
      },
      {
       "h": "Best Practices / Checkliste",
       "p": [
        "Erst die Daten in Ordnung bringen, dann das Modell.",
        "Sauber in Trainings-/Test-Daten trennen.",
        "Passende Metriken wählen (bei seltenen Ereignissen Precision/Recall/F1).",
        "Auf Bias und Erklärbarkeit achten - besonders bei Kredit.",
        "Im Betrieb überwachen (MLOps) und regelmäßig nachtrainieren."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Im Plan folgen die Details: Features & Labels, Overfitting, Cross-Validation, Metriken - und danach Deep Learning. Die Bank-Blog- und Geldinstitute-Texte unten zeigen viele echte Banking-Anwendungen."
       ]
      }
     ],
     "web": [
      [
       "Alexander Thamm: Machine Learning kompakt erklaert",
       "https://www.alexanderthamm.com/de/blog/machine-learning/"
      ],
      [
       "Der Bank Blog: Machine Learning im Banking",
       "https://www.der-bank-blog.de/machine-learning/technologie/37652231/"
      ],
      [
       "Geldinstitute: Vorteile von ML fuer Banken",
       "https://www.geldinstitute.de/it-itk/2021/die-vorteile-von-machine-learning-fuer-banken.html"
      ],
      [
       "Daten verstehen: Machine Learning einfach erklaert",
       "https://datenverstehen.de/machine-learning-einfach-erklaert/"
      ]
     ],
     "nr": 16,
     "track": "ai"
    },
    {
     "t": "Supervised Learning",
     "was": "Supervised (ueberwachtes) Learning heisst: Man lernt mit Loesung. Jedes Beispiel hat schon die richtige Antwort (Label), und das Modell lernt, sie vorherzusagen.",
     "pts": [
      "Daten haben die richtige Antwort dabei (Label)",
      "Modell lernt: Eingabe -> richtige Antwort",
      "Beispiel: E-Mail -> Spam ja/nein",
      "Haeufigste Art im Geschaeftsalltag"
     ],
     "yt": "supervised learning einfach erklaert deutsch",
     "src": [
      "Google ML Crash Course",
      "https://developers.google.com/machine-learning/crash-course?hl=de"
     ],
     "gh": [],
     "art": [],
     "detail": "Wie ein Schueler mit Loesungsheft: Man zeigt Aufgabe UND richtige Antwort. Das Modell vergleicht seine Vermutung mit der richtigen Antwort und korrigiert sich. Nach vielen Beispielen kann es die Antwort auch fuer neue, ungesehene Faelle geben. Die meisten Bank-Anwendungen (Betrug, Kredit-Scoring) sind Supervised Learning.",
     "bsp": "Alte Kredite mit 'zurueckgezahlt / ausgefallen' trainieren ein Modell, das bei neuen Antraegen das Risiko schaetzt.",
     "merke": "Supervised = Lernen mit Loesungsheft (Eingabe + richtige Antwort).",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Supervised Learning (überwachtes Lernen) ist Lernen mit Lösung: Jedes Beispiel im Trainingsdatensatz hat die richtige Antwort (Zielvariable/Label) schon dabei. Das Modell lernt, aus den Eingaben genau diese Antwort vorherzusagen.",
        "Es ist die häufigste ML-Art im Geschäftsalltag - wie ein Schüler, der mit Aufgabe UND Musterlösung übt."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Man zeigt dem Modell viele Paare aus Eingabe (Features) und richtiger Antwort (Label). Das Modell rät, vergleicht mit der Lösung und korrigiert sich - tausendfach.",
        "Danach kann es die Antwort auch für neue, ungesehene Fälle geben. Zwei Grundformen: Klassifikation (Kategorie vorhersagen, z.B. Betrug ja/nein) und Regression (Zahl vorhersagen, z.B. erwarteter Umsatz)."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis in der Bank)",
       "p": [
        "Überall dort, wo man aus der Vergangenheit gelabelte Fälle hat: Kreditbewilligung (Bonität aus alten Fällen), Betrugserkennung (Transaktion Betrug/kein Betrug), E-Mails der richtigen Abteilung zuordnen, Kündigungswahrscheinlichkeit schätzen.",
        "Wichtig: Die Qualität der Labels entscheidet alles. Falsch gelabelte Trainingsdaten bringen dem Modell Falsches bei.",
        "Bei Kredit ist Vorsicht geboten: laut EU AI Act Hochrisiko - erklärbar, fair und mit menschlicher Letztentscheidung."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Kredit-Scoring: Man nimmt 100.000 alte Kredite, jeweils mit dem Ausgang 'zurückgezahlt' oder 'ausgefallen' (das Label). Das Modell lernt die Muster und schätzt bei einem neuen Antrag die Ausfallwahrscheinlichkeit. Ein Mensch entscheidet final."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Braucht viele, saubere, korrekt gelabelte Daten - Labeln ist oft teuer.",
        "Bias: Waren die alten Entscheidungen unfair, lernt das Modell die Unfairness mit.",
        "Mit Trainingsdaten testen (statt separater Testdaten) täuscht gute Ergebnisse vor.",
        "Nur auf Accuracy schauen - bei seltenen Fällen irreführend (Precision/Recall nutzen)."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Gegenstück: Unsupervised Learning. Verwandt: Features & Labels, Klassifikation vs Regression, Metriken. Die datasolut- und mindsquare-Texte unten vertiefen es auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "datasolut Wiki: Supervised Learning",
       "https://datasolut.com/wiki/supervised-learning/"
      ],
      [
       "mindsquare: Supervised & Unsupervised Learning",
       "https://mindsquare.de/fachartikel/kuenstliche-intelligenz/supervised-und-unsupervised-learning-mit-diesen-beiden-methoden-funktioniert-machine-learning/"
      ],
      [
       "datenverstehen.de: Supervised vs Unsupervised",
       "https://datenverstehen.de/ml-algorithmen-unsupervised-supervised-learning/"
      ]
     ],
     "nr": 17,
     "track": "ai"
    },
    {
     "t": "Unsupervised Learning",
     "was": "Unsupervised (unueberwachtes) Learning heisst: Lernen ohne Loesung. Das Modell bekommt nur Daten und findet selbst Gruppen oder Muster darin.",
     "pts": [
      "Daten ohne richtige Antwort",
      "Modell findet selbst Gruppen (Cluster)",
      "Beispiel: Kunden in Typen einteilen",
      "Gut, wenn man die Antwort noch nicht kennt"
     ],
     "yt": "unsupervised learning clustering erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Hier gibt es kein Loesungsheft. Man gibt dem Modell z.B. alle Kundendaten, und es gruppiert aehnliche Kunden von selbst: 'junge Sparer', 'aktive Anleger', 'Gelegenheitsnutzer'. Niemand hat diese Gruppen vorgegeben - das Modell hat sie in den Daten entdeckt. Nuetzlich fuer Marketing oder um ueberhaupt erst zu verstehen, was in den Daten steckt.",
     "bsp": "Clustering teilt die Kundschaft automatisch in 5 Typen ein, die man dann gezielt anspricht.",
     "merke": "Unsupervised = Gruppen/Muster finden, ohne dass jemand die Antwort kennt.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Unsupervised Learning (unüberwachtes Lernen) ist Lernen ohne Lösung: Die Daten haben keine vorgegebene richtige Antwort (kein Label). Das Modell erkundet die Daten selbst und findet Muster oder Gruppen.",
        "Man setzt es ein, wenn man die Antwort noch gar nicht kennt und erst verstehen will, was in den Daten steckt."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Das Modell bekommt nur Eingaben und sucht Struktur. Die wichtigste Form ist Clustering: ähnliche Datenpunkte werden zu Gruppen zusammengefasst (z.B. mit k-Means).",
        "Weitere Formen: Dimensionsreduktion (viele Merkmale auf wenige wichtige eindampfen) und Anomalie-Erkennung (Ausreißer finden, die aus dem Muster fallen)."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis in der Bank)",
       "p": [
        "Kundensegmentierung: Kunden automatisch in Typen einteilen ('junge Sparer', 'aktive Anleger'), ohne die Gruppen vorzugeben - Basis für gezieltes Marketing.",
        "Anomalie-Erkennung: ungewöhnliche Transaktionen auffällig machen - nützlich bei Betrug, gerade wenn man kein Label 'Betrug' hat.",
        "Datenverständnis: Bevor man ein Supervised-Modell baut, hilft Unsupervised, die Daten überhaupt erst zu durchschauen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Clustering über das Zahlungsverhalten findet von selbst eine kleine Gruppe mit sehr untypischem Muster (viele kleine Auslandszahlungen nachts). Diese Gruppe schaut man sich dann gezielt auf Betrug/Geldwäsche an."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Ergebnisse sind schwerer zu bewerten: Es gibt keine 'richtige' Antwort zum Vergleichen.",
        "Die gefundenen Gruppen muss ein Mensch interpretieren - sie sind nicht automatisch sinnvoll.",
        "Man muss oft die Anzahl der Gruppen vorgeben (z.B. bei k-Means) - falsch gewählt, schlechte Cluster.",
        "Nicht mit Supervised verwechseln: Ohne Label kann man nichts Konkretes 'vorhersagen'."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Gegenstück: Supervised Learning. Verwandt: AI Fraud Detection (Anomalien), Recommendation Systems, Kundensegmentierung. Die datasolut-Quelle unten erklärt Clustering & Co. auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "datasolut Wiki: Unsupervised Learning",
       "https://datasolut.com/wiki/unsupervised-learning/"
      ],
      [
       "datenverstehen.de: Supervised vs Unsupervised",
       "https://datenverstehen.de/ml-algorithmen-unsupervised-supervised-learning/"
      ],
      [
       "tecislava: Supervised, Unsupervised, Reinforcement",
       "https://www.tecislava.com/blog/supervised-unsupervised-reinforcement"
      ]
     ],
     "nr": 18,
     "track": "ai"
    },
    {
     "t": "Reinforcement Learning",
     "was": "Reinforcement Learning heisst: Lernen durch Belohnung und Bestrafung. Das Modell probiert Aktionen aus und lernt aus dem Ergebnis - wie ein Hund, der Leckerlis bekommt.",
     "pts": [
      "Lernen durch Ausprobieren",
      "Gute Aktion -> Belohnung, schlechte -> Strafe",
      "Ueber Zeit: die beste Strategie",
      "Beispiel: Spiele, Robotik, Optimierung"
     ],
     "yt": "reinforcement learning einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Statt Beispielen mit Loesung gibt es hier nur Belohnung. Das Modell handelt, sieht das Ergebnis und lernt, welche Aktionen sich lohnen. So haben KIs Schach und Go besser als Menschen gelernt. Im Alltag steckt die Idee z.B. hinter der Optimierung von Ablaeufen. Auch das Feintuning moderner Chatbots (RLHF) nutzt diese Idee mit menschlichem Feedback.",
     "bsp": "Eine KI lernt ein Spiel, indem sie tausende Runden spielt und aus Sieg/Niederlage lernt.",
     "merke": "Reinforcement = Lernen durch Belohnung, wie beim Hunde-Training.",
     "lang": [],
     "web": [],
     "nr": 19,
     "track": "ai"
    },
    {
     "t": "Features & Labels",
     "was": "Ein Feature ist eine Eingabe-Information (z.B. Alter, Betrag). Das Label ist die richtige Antwort, die man vorhersagen will (z.B. Betrug ja/nein).",
     "pts": [
      "Feature = Eingabe/Merkmal (Alter, Betrag, Ort)",
      "Label = die gesuchte Antwort (Ziel)",
      "Modell lernt: Features -> Label",
      "Gute Features sind Gold wert"
     ],
     "yt": "features labels machine learning erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Denk an eine Tabelle: Die Spalten mit Infos (Alter, Betrag, Uhrzeit) sind die Features. Die eine Spalte, die du vorhersagen willst (war es Betrug?), ist das Label. Das Modell sucht den Zusammenhang zwischen Features und Label. Welche Features du waehlst, entscheidet oft mehr ueber den Erfolg als das Modell selbst.",
     "bsp": "Features: Betrag, Uhrzeit, Land. Label: Betrug (ja/nein). Das Modell lernt den Zusammenhang.",
     "merke": "Features rein, Label raus. Gute Features schlagen jedes fancy Modell.",
     "lang": [],
     "web": [],
     "nr": 20,
     "track": "ai"
    },
    {
     "t": "Trainings-, Validierungs- & Testdaten",
     "was": "Man teilt die Daten in drei Teile: mit Trainingsdaten lernt das Modell, mit Validierungsdaten stellt man es ein, mit Testdaten prueft man ehrlich, wie gut es ist.",
     "pts": [
      "Training = zum Lernen (der groesste Teil)",
      "Validierung = zum Einstellen/Vergleichen",
      "Test = zum ehrlichen Endpruefen (nie vorher ansehen!)",
      "Typisch: 70 / 15 / 15 Prozent"
     ],
     "yt": "train test split erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Wichtig fuer Ehrlichkeit: Man darf ein Modell nicht mit denselben Daten pruefen, mit denen es gelernt hat - sonst kennt es die Antworten auswendig. Deshalb legt man Testdaten beiseite und zeigt sie dem Modell erst ganz am Ende. Nur so weiss man, wie es bei ECHTEN neuen Faellen abschneidet.",
     "bsp": "Wie eine Pruefung: Man uebt mit Uebungsaufgaben (Training), die Klausur (Test) sieht man erst am Pruefungstag.",
     "merke": "Testdaten sind heilig: erst ganz am Ende ansehen, sonst betruegt man sich selbst.",
     "lang": [],
     "web": [],
     "nr": 21,
     "track": "ai"
    },
    {
     "t": "Overfitting & Underfitting",
     "was": "Overfitting heisst: Das Modell lernt die Beispiele auswendig statt das Muster - und versagt bei Neuem. Underfitting heisst: Es lernt zu wenig und ist zu simpel.",
     "pts": [
      "Overfitting = auswendig gelernt, versagt bei Neuem",
      "Underfitting = zu simpel, erkennt das Muster nicht",
      "Ziel: die goldene Mitte (gut verallgemeinern)",
      "Erkennbar am Unterschied Training vs Test"
     ],
     "yt": "overfitting underfitting einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Ein Schueler, der nur die Uebungsaufgaben auswendig lernt, scheitert an neuen Aufgaben - das ist Overfitting. Einer, der gar nicht lernt, scheitert auch - das ist Underfitting. Man erkennt Overfitting daran, dass das Modell auf Trainingsdaten super, auf Testdaten aber schlecht ist. Gegenmittel: mehr Daten, einfacheres Modell, Techniken wie Dropout.",
     "bsp": "99 % richtig im Training, aber nur 60 % im Test = klassisches Overfitting (auswendig gelernt).",
     "merke": "Ziel ist nicht, die Beispiele zu kennen, sondern Neues richtig zu meistern.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Overfitting (Überanpassung) heißt: Das Modell lernt die Trainingsbeispiele quasi auswendig, statt das allgemeine Muster zu verstehen - und versagt bei neuen Daten. Underfitting (Unteranpassung) heißt: Das Modell ist zu simpel und erkennt das Muster gar nicht erst.",
        "Ziel ist die goldene Mitte: ein Modell, das gut verallgemeinert - also auch bei echten, neuen Fällen gut liegt."
       ]
      },
      {
       "h": "Wie man es erkennt",
       "p": [
        "Overfitting: sehr guter Wert auf Trainingsdaten, aber schlechter auf Testdaten. Klassisches Warnzeichen: 99 % im Training, 60 % im Test.",
        "Underfitting: schlechte Werte auf BEIDEN - Training UND Test. Das Modell ist zu einfach.",
        "Deshalb prüft man immer getrennt mit Testdaten, die das Modell nie gesehen hat."
       ]
      },
      {
       "h": "Wie man es vermeidet (Praxis)",
       "p": [
        "Gegen Overfitting (laut den Fachquellen): mehr/vielfältigere Daten, einfacheres Modell, Cross-Validation, Regularisierung (L1/L2) und - in neuronalen Netzen - Dropout.",
        "Gegen Underfitting: komplexeres Modell, mehr aussagekräftige Features, länger trainieren, bessere Architektur.",
        "In der Bank ist Overfitting besonders tückisch: Ein Betrugsmodell, das die alten Fälle auswendig kann, erkennt neue Betrugsmaschen nicht - genau die aber zählen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Kredit-Modell trifft die Trainingsfälle zu 99 % - im Test aber nur 62 %. Es hat die alten Kunden 'auswendig gelernt'. Man vereinfacht das Modell und holt mehr Daten; danach: 84 % im Training, 82 % im Test - viel gesünder, weil es verallgemeinert."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Nur den Trainingswert ansehen und sich freuen - der klassische Anfängerfehler.",
        "Kein sauberer Test-Split (dann merkt man Overfitting nicht).",
        "Modell immer komplexer machen 'für mehr Genauigkeit' - führt oft direkt ins Overfitting.",
        "Zu wenige Daten für ein zu großes Modell."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt verwandt: Trainings-/Test-Daten, Cross-Validation, Metriken und (im Deep Learning) Dropout. Die mindsquare- und StudySmarter-Texte unten erklären beides mit Bildern."
       ]
      }
     ],
     "web": [
      [
       "mindsquare: Overfitting und Underfitting",
       "https://mindsquare.de/knowhow/overfitting-und-underfitting-im-machine-learning/"
      ],
      [
       "StudySmarter: Overfitting und Underfitting",
       "https://www.studysmarter.de/studium/informatik-studium/kuenstliche-intelligenz-studium/overfitting-und-underfitting/"
      ],
      [
       "artemoppermann: Overfitting/Underfitting in Deep Learning",
       "https://artemoppermann.com/de/overfitting-und-underfitting-in-deep-learning/"
      ]
     ],
     "nr": 22,
     "track": "ai"
    },
    {
     "t": "Klassifikation vs Regression",
     "was": "Zwei Grundaufgaben: Klassifikation sagt eine Kategorie voraus (Betrug ja/nein). Regression sagt eine Zahl voraus (Kreditbetrag, Preis).",
     "pts": [
      "Klassifikation = Kategorie/Klasse (ja/nein, A/B/C)",
      "Regression = eine Zahl (Preis, Betrag, Dauer)",
      "Frage: sortiere ich ein oder schaetze ich eine Zahl?",
      "Braucht je andere Metriken"
     ],
     "yt": "klassifikation regression unterschied erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Fast jede ML-Aufgabe ist eines von beidem. Willst du etwas in Schubladen einsortieren (Spam/kein Spam, welche Abteilung)? Das ist Klassifikation. Willst du eine Zahl schaetzen (wie hoch wird der Umsatz, wie lange dauert der Anruf)? Das ist Regression. Zu wissen, welcher Typ vorliegt, bestimmt Modell und Bewertung.",
     "bsp": "'Welcher Kundentyp?' = Klassifikation. 'Wie hoch der erwartete Umsatz?' = Regression.",
     "merke": "Kategorie = Klassifikation, Zahl = Regression.",
     "lang": [],
     "web": [],
     "nr": 23,
     "track": "ai"
    },
    {
     "t": "Wichtige ML-Algorithmen",
     "was": "Es gibt viele Lern-Verfahren (Algorithmen). Man muss sie nicht selbst bauen - man sollte nur wissen, welche es gibt und wofuer sie gut sind.",
     "pts": [
      "Decision Tree = Ja/Nein-Fragebaum",
      "Random Forest = viele Baeume gemeinsam (stark)",
      "k-NN = schau, was aehnliche Faelle taten",
      "k-Means = bildet Gruppen (Clustering)"
     ],
     "yt": "machine learning algorithmen ueberblick deutsch",
     "src": null,
     "gh": [
      [
       "scikit-learn",
       "https://github.com/scikit-learn/scikit-learn"
      ]
     ],
     "art": [],
     "detail": "Ein Decision Tree stellt nacheinander Ja/Nein-Fragen ('Betrag > 1000? Ausland?') bis zur Entscheidung - sehr gut nachvollziehbar. Ein Random Forest fragt viele solcher Baeume und nimmt die Mehrheit - genauer, aber weniger durchschaubar. Fuer den Anfang reicht: es gibt einfache, erklaerbare Modelle und komplexe, genauere. In Banken zaehlt Erklaerbarkeit oft mehr als das letzte Prozent Genauigkeit.",
     "bsp": "Ein Decision Tree fuer Kredit: Einkommen hoch? -> Schulden niedrig? -> genehmigen.",
     "merke": "Du musst Algorithmen nicht bauen - nur wissen, welcher wofuer passt.",
     "lang": [],
     "web": [],
     "nr": 24,
     "track": "ai"
    },
    {
     "t": "Modell-Metriken: Accuracy, Precision, Recall, F1",
     "was": "Metriken messen, wie gut ein Modell ist. Accuracy allein taeuscht oft - Precision und Recall zeigen das wahre Bild, besonders bei seltenen Faellen wie Betrug.",
     "pts": [
      "Accuracy = Anteil insgesamt richtig",
      "Precision = wie viele Alarme stimmten wirklich",
      "Recall = wie viele echte Faelle wurden gefunden",
      "F1 = fairer Mix aus Precision und Recall"
     ],
     "yt": "accuracy precision recall f1 einfach erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Beispiel Betrug: Nur 1 von 1000 Faellen ist Betrug. Ein Modell, das IMMER 'kein Betrug' sagt, hat 99,9 % Accuracy - und ist trotzdem nutzlos, weil es keinen einzigen Betrug findet. Deshalb schaut man auf Recall (wie viele echte Betruege gefunden?) und Precision (wie oft war der Alarm berechtigt?). F1 fasst beide fair zusammen.",
     "bsp": "99,9 % Accuracy klingt top - aber wenn Recall = 0 %, wird KEIN Betrug erkannt. Wertlos.",
     "merke": "Bei seltenen Faellen luegt Accuracy. Schau immer auf Precision und Recall.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Metriken sind Zahlen, die messen, wie gut ein Modell ist. Die bekannteste, Accuracy (Genauigkeit), reicht oft nicht - besonders bei seltenen Ereignissen wie Betrug. Dann braucht man Precision, Recall und F1.",
        "Kurz: Accuracy = Anteil insgesamt richtig. Precision = wie viele der Alarme stimmten. Recall = wie viele der echten Fälle wurden gefunden. F1 = fairer Mix aus beiden."
       ]
      },
      {
       "h": "Warum Accuracy täuscht (das Betrugs-Beispiel)",
       "p": [
        "Nur 0,1-0,5 % aller Kartenzahlungen sind betrügerisch. Ein Modell, das IMMER 'kein Betrug' sagt, hat 99,5-99,9 % Accuracy - und ist völlig nutzlos, weil es keinen einzigen Betrug findet.",
        "Genau deshalb schaut man bei seltenen, wichtigen Fällen nicht auf Accuracy, sondern auf Precision und Recall."
       ]
      },
      {
       "h": "Precision, Recall und F1 verstehen",
       "p": [
        "Precision (Präzision): Von allen als 'Betrug' markierten Fällen - wie viele waren wirklich Betrug? Hoch = wenige Fehlalarme.",
        "Recall (Trefferquote): Von allen echten Betrugsfällen - wie viele hat das Modell erwischt? Hoch = wenig übersehen.",
        "Es gibt einen Zielkonflikt: Mehr Recall (alles melden) senkt oft die Precision (mehr Fehlalarme) - und umgekehrt.",
        "F1 = harmonisches Mittel aus beiden: 2 × (Precision × Recall) / (Precision + Recall). Gut, wenn man beides ausbalancieren will."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Man wählt die Metrik nach dem Schaden des jeweiligen Fehlers: Ist ein übersehener Betrug schlimmer als ein Fehlalarm? Dann Recall priorisieren (lieber ein paar Kunden mit falschem Alarm nerven als großen Betrug verpassen).",
        "Sind Fehlalarme sehr teuer/störend (z.B. gesperrte Karten im Urlaub)? Dann Precision höher gewichten.",
        "In der Bank stimmt man diese Schwelle bewusst mit den Fachbereichen ab - es ist eine Geschäfts-, nicht nur eine Technik-Entscheidung."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Betrugsmodell A: Precision 90 %, Recall 30 % - meldet selten, aber wenn, dann meist richtig (übersieht aber 70 % der Betrüge). Modell B: Precision 40 %, Recall 85 % - fängt fast alles, aber mit vielen Fehlalarmen. Welches besser ist, hängt davon ab, was teurer ist - übersehener Betrug oder Fehlalarm."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Sich von hoher Accuracy blenden lassen (der häufigste Fehler bei seltenen Ereignissen).",
        "Nur eine Metrik betrachten - immer im Zusammenhang lesen.",
        "Die Schwelle rein technisch setzen, ohne die Fachbereiche und Kosten einzubeziehen.",
        "Confusion Matrix ignorieren - sie zeigt, welche Art Fehler passiert."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt verwandt: Confusion Matrix, Klassifikation, RAG Evaluation (nutzt Precision/Recall beim Retrieval). Die ki.engineering-Texte unten erklären die Metriken einsteigerfreundlich."
       ]
      }
     ],
     "web": [
      [
       "ki.engineering: Präzision & Recall",
       "https://ki.engineering/glossar/praezision-recall/"
      ],
      [
       "ki.engineering: F1-Score erklärt",
       "https://ki.engineering/glossar/f1-score-harmonisches-mittel-aus-praezision-und-recall/"
      ],
      [
       "artemoppermann: Accuracy, Precision, Recall, F1",
       "https://artemoppermann.com/de/accuracy-precision-recall-f1-score-und-specificity/"
      ]
     ],
     "nr": 25,
     "track": "ai"
    },
    {
     "t": "Confusion Matrix",
     "was": "Die Confusion Matrix ist eine kleine Tabelle, die zeigt, wo das Modell richtig und wo es falsch lag - getrennt nach Art des Fehlers.",
     "pts": [
      "Zeigt richtige und falsche Vorhersagen",
      "False Positive = falscher Alarm",
      "False Negative = uebersehener echter Fall",
      "Basis fuer Precision und Recall"
     ],
     "yt": "confusion matrix einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Nicht jeder Fehler ist gleich schlimm. Ein falscher Betrugsalarm (False Positive) aergert einen Kunden. Ein uebersehener echter Betrug (False Negative) kostet richtig Geld. Die Confusion Matrix trennt diese Faelle sauber auf, damit man entscheiden kann, welchen Fehler man eher in Kauf nimmt.",
     "bsp": "Lieber ein paar Kunden mit falschem Alarm nerven, als einen grossen Betrug uebersehen? Die Matrix macht das sichtbar.",
     "merke": "Nicht nur WIE OFT falsch, sondern WELCHE Art Fehler - das entscheidet in der Praxis.",
     "lang": [],
     "web": [],
     "nr": 26,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Deep Learning & Neuronale Netze",
   "emoji": "🧠",
   "ziel": "Die Technik hinter moderner KI und LLMs - von Neuronen bis zum Transformer.",
   "topics": [
    {
     "t": "Was ist Deep Learning?",
     "was": "Deep Learning ist eine Art von Machine Learning mit kuenstlichen 'neuronalen Netzen', die dem Gehirn nachempfunden sind. Es ist besonders stark bei Bildern, Sprache und Text.",
     "pts": [
      "Teilgebiet von Machine Learning",
      "Nutzt neuronale Netze mit vielen Schichten",
      "Stark bei Bild, Ton, Sprache, Text",
      "Basis von LLMs wie GPT und Claude"
     ],
     "yt": "deep learning einfach erklaert deutsch",
     "src": [
      "Google ML Crash Course",
      "https://developers.google.com/machine-learning/crash-course?hl=de"
     ],
     "gh": [],
     "art": [
      [
       "fast.ai (kostenloser Kurs)",
       "https://course.fast.ai/"
      ]
     ],
     "detail": "'Deep' (tief) bedeutet: das Netz hat viele Schichten hintereinander. Jede Schicht erkennt etwas komplexeres - bei einem Gesicht erst Kanten, dann Augen/Nase, dann das ganze Gesicht. Weil Deep Learning selbst aus Rohdaten lernt, was wichtig ist, hat es die KI-Revolution ausgeloest. Alle modernen LLMs sind Deep Learning.",
     "bsp": "Ein Foto-Erkenner lernt Schicht fuer Schicht: Kanten -> Formen -> 'das ist eine Katze'.",
     "merke": "Deep Learning = ML mit vielen Schichten. Es lernt selbst, was wichtig ist.",
     "lang": [],
     "web": [],
     "nr": 27,
     "track": "ai"
    },
    {
     "t": "Neuronales Netz: Aufbau",
     "was": "Ein neuronales Netz besteht aus vielen kleinen Recheneinheiten (Neuronen), die in Schichten (Layers) angeordnet sind. Daten fliessen von der Eingabe zur Ausgabe durch.",
     "pts": [
      "Input Layer = Eingabe (die Daten)",
      "Hidden Layers = die 'Denk-Schichten' dazwischen",
      "Output Layer = Ergebnis",
      "Neuronen sind ueber Gewichte verbunden"
     ],
     "yt": "neuronales netz aufbau einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Stell dir viele kleine Schalter vor, die in Reihen angeordnet sind. Jeder Schalter (Neuron) bekommt Zahlen, rechnet kurz und gibt das Ergebnis an die naechste Reihe weiter. Vorne kommen die Daten rein (z.B. Pixel eines Bildes), hinten kommt das Ergebnis raus (z.B. 'Katze'). Dazwischen verarbeiten die verborgenen Schichten die Information Schritt fuer Schritt.",
     "bsp": "Bild rein (Input) -> mehrere Denk-Schichten -> 'Katze zu 97 %' (Output).",
     "merke": "Neuronen in Schichten: Daten fliessen vorne rein, Ergebnis kommt hinten raus.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein neuronales Netz ist der Grundbaustein von Deep Learning - lose dem Gehirn nachempfunden. Es besteht aus vielen kleinen Recheneinheiten (Neuronen), die in Schichten (Layers) angeordnet sind. Daten fließen vorne rein und ein Ergebnis kommt hinten raus.",
        "Man muss es nicht als Biologie verstehen: Es ist im Kern eine Kette aus vielen kleinen Rechenschritten, die zusammen erstaunlich Komplexes lernen können."
       ]
      },
      {
       "h": "Der Aufbau (Schichten)",
       "p": [
        "Input Layer: nimmt die Eingabedaten auf (z.B. die Pixel eines Bildes oder die Merkmale eines Kunden).",
        "Hidden Layers: die 'Denk-Schichten' dazwischen. Jede verarbeitet die Info ein Stück weiter und abstrakter. 'Deep' heißt: viele solcher Schichten.",
        "Output Layer: gibt das Ergebnis aus (z.B. 'Katze zu 97 %' oder 'Betrug zu 88 %').",
        "Die Neuronen sind über Gewichte verbunden - Zahlen, die sagen, wie wichtig eine Verbindung ist. Eine Aktivierungsfunktion entscheidet, ob ein Neuron 'feuert'."
       ]
      },
      {
       "h": "Wie es lernt (ganz kurz)",
       "p": [
        "Das 'Wissen' des Netzes steckt in den Gewichten. Beim Training rät das Netz, vergleicht mit der richtigen Antwort (Loss), und passt die Gewichte ein winziges Stück an (über Backpropagation und Gradient Descent) - millionenfach.",
        "So werden aus anfangs zufälligen Zahlen nach und nach Gewichte, die gute Vorhersagen liefern."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Neuronale Netze sind stark bei komplexen Daten: Bilder (CNN), Sprache/Text (Transformer), Ton. In der Bank z.B. für Dokumentenerkennung, Sprachbots und anspruchsvolle Betrugsmuster.",
        "Für einfache, tabellarische Daten (Zeilen/Spalten) sind klassische ML-Modelle (z.B. Random Forest) oft gleich gut oder besser - und leichter erklärbar. Man wählt das Werkzeug nach dem Problem.",
        "Man baut Netze nicht von Hand, sondern mit Frameworks wie PyTorch/TensorFlow, die die Mathematik automatisch erledigen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Gesichtserkennung im Ausweis-Check: Die erste Schicht erkennt Kanten, spätere Schichten Augen/Nase, die letzte 'Gesicht ja/nein bzw. passt zum Foto'. Jede Schicht baut auf der vorherigen auf."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Brauchen viele Daten und Rechenleistung (GPUs) - teurer als klassische ML.",
        "Sind eine 'Blackbox': schwer zu erklären, warum sie so entscheiden (Problem bei Aufsicht - siehe Explainability).",
        "Neigen zu Overfitting, wenn Daten knapp sind (Gegenmittel: Dropout, mehr Daten).",
        "Nicht für jedes Problem nötig - bei einfachen Tabellen oft Overkill."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt danach im Plan: Gewichte & Aktivierungsfunktion, Loss & Training, Backpropagation, dann CNN/RNN und Transformer. Die IBM-Seite und 3Blue1Brown (unten) erklären den Aufbau sehr anschaulich."
       ]
      }
     ],
     "web": [
      [
       "IBM: Was sind neuronale Netze?",
       "https://www.ibm.com/de-de/think/topics/neural-networks"
      ],
      [
       "3Blue1Brown: Neural Networks (visuell, engl.)",
       "https://www.3blue1brown.com/topics/neural-networks"
      ],
      [
       "Alexander Thamm: Deep Learning / Neuronale Netze",
       "https://www.alexanderthamm.com/de/blog/large-language-models-eine-einfuehrung/"
      ]
     ],
     "nr": 28,
     "track": "ai"
    },
    {
     "t": "Gewichte & Aktivierungsfunktion",
     "was": "Gewichte sind Zahlen, die sagen, wie wichtig eine Verbindung ist - sie werden beim Lernen angepasst. Die Aktivierungsfunktion entscheidet, ob ein Neuron 'feuert'.",
     "pts": [
      "Gewicht = Wichtigkeit einer Verbindung",
      "Lernen = Gewichte richtig einstellen",
      "Aktivierungsfunktion = An/Aus-Entscheidung des Neurons",
      "Bekannt: ReLU, Sigmoid"
     ],
     "yt": "gewichte aktivierungsfunktion neuronales netz erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Das eigentliche 'Wissen' eines Netzes steckt in den Gewichten - Millionen oder Milliarden Zahlen. Beim Training werden genau diese Zahlen so lange nachjustiert, bis das Netz gute Antworten gibt. Die Aktivierungsfunktion sorgt dafuer, dass das Netz auch komplizierte, nicht-gerade Zusammenhaenge lernen kann - ohne sie koennte es nur simple Linien.",
     "bsp": "Beim Training eines LLM werden Milliarden Gewichte angepasst - das ist sein 'Wissen'.",
     "merke": "Das Wissen einer KI = ihre Gewichte. Lernen = diese Zahlen richtig einstellen.",
     "lang": [],
     "web": [],
     "nr": 29,
     "track": "ai"
    },
    {
     "t": "Loss Function & Training",
     "was": "Die Loss Function misst, wie falsch das Modell liegt. Training heisst, die Gewichte so zu aendern, dass der Loss (Fehler) immer kleiner wird.",
     "pts": [
      "Loss = Mass fuer den Fehler",
      "Ziel: Loss so klein wie moeglich",
      "Training = Gewichte anpassen, Loss senken",
      "Nutzt Gradient Descent (bergab)"
     ],
     "yt": "loss function training neuronales netz erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Das Modell raet, vergleicht mit der richtigen Antwort und berechnet den Fehler (Loss). Dann aendert es seine Gewichte ein winziges Stueck in die Richtung, die den Fehler verkleinert (Gradient - das Bergab-Bild von vorhin). Das wiederholt es millionenfach mit vielen Beispielen. So 'lernt' ein neuronales Netz.",
     "bsp": "Modell raet '7', richtig war '5' -> Loss hoch -> Gewichte leicht korrigieren -> naechster Versuch besser.",
     "merke": "Training = Fehler messen und Gewichte in kleinen Schritten verbessern.",
     "lang": [],
     "web": [],
     "nr": 30,
     "track": "ai"
    },
    {
     "t": "Backpropagation (einfach)",
     "was": "Backpropagation ist der Trick, der neuronale Netze lernen laesst: Der Fehler wird von hinten nach vorne durchs Netz zurueckgereicht, damit jede Schicht weiss, wie sie sich verbessern muss.",
     "pts": [
      "Fehler von hinten nach vorne zurueckgeben",
      "Jede Schicht erfaehrt ihren Anteil am Fehler",
      "So werden alle Gewichte klug angepasst",
      "Der Motor hinter dem Lernen"
     ],
     "yt": "backpropagation einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Wenn am Ende ein Fehler herauskommt, muss das Netz wissen, welche der Millionen Gewichte schuld waren. Backpropagation rechnet den Fehler rueckwaerts durch alle Schichten und verteilt die 'Schuld'. Jedes Gewicht wird dann passend nachjustiert. Du musst die Mathe nicht koennen - der Computer macht sie automatisch.",
     "bsp": "Wie ein Chef, der ein Problem rueckwaerts durch die Abteilungen verfolgt, bis er die Ursache findet.",
     "merke": "Backpropagation verteilt den Fehler rueckwaerts, damit jede Schicht besser wird.",
     "lang": [],
     "web": [],
     "nr": 31,
     "track": "ai"
    },
    {
     "t": "Epochs, Batch & Learning Rate",
     "was": "Das sind die drei wichtigsten Stellschrauben beim Training: wie oft (Epochs), in wie grossen Haeppchen (Batch) und wie grosse Schritte (Learning Rate) das Modell lernt.",
     "pts": [
      "Epoch = ein kompletter Durchlauf durch alle Daten",
      "Batch = Haeppchen von Daten pro Schritt",
      "Learning Rate = Schrittgroesse beim Lernen",
      "Zu gross = ungenau, zu klein = zu langsam"
     ],
     "yt": "epochs batch size learning rate erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Hyperparameter sind Einstellungen, die DU vor dem Training festlegst (nicht das Modell). Die Learning Rate ist die wichtigste: Zu grosse Schritte, und das Modell springt ueber das Ziel hinaus; zu kleine, und es braucht ewig. Mehrere Epochs bedeuten, das Modell sieht die Daten mehrmals und festigt das Gelernte.",
     "bsp": "Learning Rate zu hoch: das Modell 'zappelt' und wird nie gut. Zu niedrig: es dauert Stunden statt Minuten.",
     "merke": "Learning Rate ist die wichtigste Stellschraube: die richtige Schrittgroesse macht den Unterschied.",
     "lang": [],
     "web": [],
     "nr": 32,
     "track": "ai"
    },
    {
     "t": "CNN: Netze fuer Bilder",
     "was": "Ein CNN (Convolutional Neural Network) ist ein neuronales Netz, das besonders gut Bilder versteht. Es erkennt zuerst kleine Muster (Kanten) und setzt sie zu ganzen Objekten zusammen.",
     "pts": [
      "CNN = neuronales Netz fuer Bilder",
      "Erkennt Kanten -> Formen -> Objekte",
      "Basis von Bild- und Gesichtserkennung",
      "Auch fuer Dokumente/OCR nutzbar"
     ],
     "yt": "CNN convolutional neural network einfach erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Ein CNN schaut ein Bild nicht als Ganzes an, sondern in kleinen Ausschnitten, und sucht ueberall nach denselben Mustern (z.B. Kanten). Diese werden Schicht fuer Schicht zu groesseren Formen kombiniert. So erkennt es am Ende ganze Objekte. In Banken steckt das z.B. hinter dem automatischen Lesen von Ausweisen und Dokumenten.",
     "bsp": "Automatische Pruefung eines gescannten Ausweises: Ist das Foto echt, stimmen die Felder?",
     "merke": "CNN = Bild-Spezialist: von kleinen Kanten zum ganzen Objekt.",
     "lang": [],
     "web": [],
     "nr": 33,
     "track": "ai"
    },
    {
     "t": "RNN & LSTM: Netze fuer Reihenfolgen",
     "was": "RNNs und LSTMs sind Netze fuer Daten mit Reihenfolge, z.B. Text oder Zeitreihen. Sie haben ein kleines 'Gedaechtnis' fuer das, was vorher kam.",
     "pts": [
      "Fuer Reihenfolgen: Text, Sprache, Zeitreihen",
      "Haben ein Kurzzeit-Gedaechtnis",
      "LSTM = merkt sich laenger Wichtiges",
      "Heute oft durch Transformer abgeloest"
     ],
     "yt": "RNN LSTM einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Bei Text kommt es auf die Reihenfolge an: 'Hund beisst Mann' heisst etwas anderes als 'Mann beisst Hund'. RNNs lesen Wort fuer Wort und merken sich den Zusammenhang. LSTMs koennen sich Wichtiges laenger merken. Sie waren lange der Standard fuer Sprache - bis der Transformer kam und sie in den meisten Faellen ueberholte.",
     "bsp": "Wettervorhersage aus vergangenen Tagen oder Textverstaendnis Wort fuer Wort.",
     "merke": "RNN/LSTM = fuer Reihenfolgen mit Gedaechtnis. Der Transformer hat sie meist ersetzt.",
     "lang": [],
     "web": [],
     "nr": 34,
     "track": "ai"
    },
    {
     "t": "Transformer Architektur",
     "was": "Der Transformer ist die Netz-Architektur hinter allen modernen LLMs (GPT, Claude, Gemini). Er kann einen ganzen Text auf einmal betrachten und die wichtigen Zusammenhaenge erfassen.",
     "pts": [
      "Basis aller heutigen LLMs",
      "Betrachtet den ganzen Text gleichzeitig",
      "Sehr gut parallelisierbar (schnell auf GPUs)",
      "2017 vorgestellt ('Attention is all you need')"
     ],
     "yt": "Transformer architektur einfach erklaert deutsch",
     "src": null,
     "gh": [
      [
       "Hugging Face Transformers",
       "https://github.com/huggingface/transformers"
      ]
     ],
     "art": [
      [
       "Attention Is All You Need (Original-Paper)",
       "https://arxiv.org/abs/1706.03762"
      ]
     ],
     "detail": "Frueher las KI Text Wort fuer Wort (RNN). Der Transformer schaut stattdessen den ganzen Satz auf einmal an und entscheidet, welche Woerter zusammengehoeren. Das macht ihn viel schlauer im Verstehen von Zusammenhaengen und viel schneller im Training. Diese Erfindung von 2017 hat die heutige KI-Welle (ChatGPT & Co.) erst moeglich gemacht.",
     "bsp": "Im Satz 'Die Bank am Fluss' erkennt der Transformer aus dem Wort 'Fluss', dass 'Bank' das Ufer meint, nicht das Geldinstitut.",
     "merke": "Transformer = das Herz jedes LLM. Ohne ihn gaebe es kein ChatGPT.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Der Transformer ist die Bauweise (Architektur) hinter allen modernen großen Sprachmodellen - GPT, Claude, Gemini. Ohne den Transformer gäbe es kein ChatGPT. Er wurde 2017 in dem berühmten Aufsatz 'Attention Is All You Need' vorgestellt.",
        "Seine Superkraft: Er kann einen ganzen Satz oder Text auf einmal betrachten und selbst herausfinden, welche Wörter zusammengehören - egal wie weit sie auseinanderstehen. Ältere Modelle lasen Text mühsam Wort für Wort; der Transformer schaut aufs Ganze."
       ]
      },
      {
       "h": "Wie es funktioniert (einfach)",
       "p": [
        "Kernstück ist der Attention-Mechanismus ('Aufmerksamkeit'). Für jedes Wort entscheidet das Modell: Auf welche anderen Wörter muss ich achten, um dieses Wort richtig zu verstehen?",
        "Beispiel: Im Satz 'Die Bank am Fluss' erkennt der Transformer aus dem Wort 'Fluss', dass mit 'Bank' das Ufer gemeint ist, nicht das Geldinstitut. Attention verbindet 'Bank' mit 'Fluss'.",
        "Ein weiterer Vorteil, den die Fachquellen betonen: Weil der Transformer nicht Wort für Wort vorgehen muss, kann er viele Teile parallel verarbeiten. Das macht das Training auf GPUs sehr schnell - und erst dadurch wurden so große Modelle möglich.",
        "Grob besteht ein Transformer aus Encoder- und/oder Decoder-Blöcken mit Self-Attention und einfachen Rechenschichten (Feedforward). Für ein erstes Verständnis reicht: Attention findet die Zusammenhänge, viele Schichten verfeinern das Verständnis."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Als normaler Anwender oder Bot-Bauer baust du keinen Transformer selbst - du nutzt fertige, vortrainierte Transformer-Modelle über eine API (Claude, GPT) oder als Open-Source-Modell (über die Bibliothek Hugging Face Transformers).",
        "Wichtig ist zu verstehen, WARUM diese Modelle so gut sind: Dadurch triffst du bessere Entscheidungen - etwa dass ein LLM Zusammenhänge im Text erfasst, aber trotzdem für aktuelle Fakten RAG braucht.",
        "Transformer stecken heute nicht nur in Text, sondern auch in Übersetzung, Sprache-zu-Text und multimodalen Modellen (Bild + Text)."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Übersetzung: Frühere Systeme übersetzten oft Wort für Wort und verloren den Sinn. Ein Transformer betrachtet den ganzen Satz, erkennt Bezüge (wer tut was) und liefert eine flüssige, sinnvolle Übersetzung. Genau dieselbe Fähigkeit macht ihn auch beim Verstehen von Kundenanfragen stark."
       ]
      },
      {
       "h": "Vorteile",
       "p": [
        "Erfasst Zusammenhänge über lange Texte hinweg.",
        "Sehr gut parallelisierbar - dadurch schnelles Training und große Modelle.",
        "Universell: gleiche Grundidee für Text, Sprache, Bilder.",
        "Basis praktisch aller heutigen Spitzen-KI."
       ]
      },
      {
       "h": "Grenzen & Einordnung",
       "p": [
        "Große Transformer brauchen sehr viel Rechenleistung (GPUs) und Energie - deshalb sind Training und Betrieb teuer (siehe GPU-Grundlagen, Green AI).",
        "Ein Transformer 'versteht' nicht wie ein Mensch; er erkennt statistische Muster. Halluzinationen bleiben möglich.",
        "Für den Einsatz zählt weniger, den Transformer im Detail zu bauen, als zu wissen, wie man die fertigen Modelle gut und sicher nutzt."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt davor im Plan: neuronale Netze, Gewichte, Attention. Direkt danach: Pretraining vs Fine-Tuning und die Anwendung (LLM, Prompting, RAG). Der bebilderte deutsche Text 'Der Transformer illustriert' unten ist der beste Einstieg zum Nachschauen."
       ]
      }
     ],
     "web": [
      [
       "Der Transformer illustriert (deutsch, nach Jay Alammar)",
       "https://www.michaelkipp.de/deeplearning/Transformer-illustriert.html"
      ],
      [
       "Wikipedia (DE): Transformer (Maschinelles Lernen)",
       "https://de.wikipedia.org/wiki/Transformer_(Maschinelles_Lernen)"
      ],
      [
       "liora.io: Das Transformer Neural Network",
       "https://liora.io/de/das-transformer-neural-network-eine-revolution-im-nlp-bereich"
      ],
      [
       "heise: Implementierung eines Transformers",
       "https://www.heise.de/blog/Kuenstliche-Neuronale-Netze-im-Ueberblick-11-Implementierung-eines-Transformers-10700202.html"
      ]
     ],
     "nr": 35,
     "track": "ai"
    },
    {
     "t": "Attention Mechanism",
     "was": "Attention (Aufmerksamkeit) ist der Kern-Trick des Transformers: Das Modell lernt, bei jedem Wort auf die wirklich wichtigen anderen Woerter zu 'achten'.",
     "pts": [
      "Modell gewichtet, welche Woerter wichtig sind",
      "Verbindet zusammengehoerende Woerter",
      "Loest das Problem 'Wer/was ist gemeint?'",
      "Herzstueck des Transformers"
     ],
     "yt": "attention mechanism einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "In einem langen Satz haengen manche Woerter eng zusammen, auch wenn sie weit auseinander stehen. Attention laesst das Modell fuer jedes Wort entscheiden: Auf welche anderen Woerter muss ich schauen, um dich zu verstehen? So loest es z.B. auf, worauf sich 'sie' oder 'das' bezieht. Ohne Attention gaebe es keine guten LLMs.",
     "bsp": "'Anna gab Lisa ihr Buch, weil sie es mochte' - Attention hilft zu klaeren, wer 'sie' ist.",
     "merke": "Attention = das Modell schaut gezielt auf die wichtigen Woerter.",
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Attention ('Aufmerksamkeit') ist der Kern-Trick, der moderne Sprach-KI so gut macht. Sie lässt das Modell für jedes Wort entscheiden: Auf welche anderen Wörter im Satz muss ich achten, um dich richtig zu verstehen?",
        "Statt jedes Wort isoliert zu betrachten, verbindet Attention die Wörter, die zusammengehören - auch wenn sie weit auseinanderstehen."
       ]
      },
      {
       "h": "Wie es funktioniert (einfach)",
       "p": [
        "Für jedes Wort berechnet das Modell, wie stark es auf jedes andere Wort 'schauen' soll (ein Gewicht). Wichtige Bezüge bekommen viel Aufmerksamkeit, unwichtige wenig.",
        "So löst Attention die klassische Frage 'Wer/was ist gemeint?': Sie verknüpft z.B. ein 'sie' oder 'das' mit dem richtigen Bezugswort.",
        "Attention ist der Baustein, aus dem der Transformer besteht - und damit die Grundlage aller großen Sprachmodelle."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Als Anwender baust du Attention nicht selbst - sie steckt fertig in jedem LLM. Aber sie zu verstehen erklärt, WARUM LLMs Zusammenhänge im Text so gut erfassen.",
        "Praktische Folge: Weil das Modell den ganzen Kontext gewichtet, ist es sehr wichtig, WELCHEN Kontext du mitgibst (siehe Context Engineering) - relevante Infos bekommen zu Recht Aufmerksamkeit, Müll lenkt ab.",
        "Attention steckt heute auch in Bild- und Multimodal-Modellen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Satz: 'Anna gab Lisa ihr Buch, weil sie es liebte.' Attention hilft dem Modell, 'sie' und 'ihr' den richtigen Personen zuzuordnen und 'es' auf 'Buch' zu beziehen - genau das, woran ältere Modelle oft scheiterten."
       ]
      },
      {
       "h": "Grenzen & Einordnung",
       "p": [
        "Attention über sehr lange Texte ist rechenintensiv (Kosten steigen stark mit der Länge) - ein Grund für Token-Limits.",
        "Attention erklärt nicht automatisch, dass eine Antwort WAHR ist - sie ordnet nur Zusammenhänge; Halluzinationen bleiben möglich.",
        "Für den Einsatz zählt weniger die Mathematik als das Prinzip: relevanter Kontext bekommt Aufmerksamkeit."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Gehört untrennbar zum Transformer (davor) und erklärt LLM-Verhalten. Der bebilderte deutsche Text 'Der Transformer illustriert' unten macht Attention besonders anschaulich."
       ]
      }
     ],
     "web": [
      [
       "Der Transformer illustriert (deutsch)",
       "https://www.michaelkipp.de/deeplearning/Transformer-illustriert.html"
      ],
      [
       "Wikipedia (DE): Transformer (Maschinelles Lernen)",
       "https://de.wikipedia.org/wiki/Transformer_(Maschinelles_Lernen)"
      ],
      [
       "Attention Is All You Need (Original-Paper)",
       "https://arxiv.org/abs/1706.03762"
      ]
     ],
     "nr": 36,
     "track": "ai"
    },
    {
     "t": "Pretraining vs Fine-Tuning",
     "was": "Pretraining ist das grosse Grundtraining eines Modells mit riesigen Textmengen. Fine-Tuning ist das anschliessende Feinschleifen fuer eine bestimmte Aufgabe.",
     "pts": [
      "Pretraining = grosses Grundwissen aufbauen (teuer)",
      "Fine-Tuning = auf eigene Aufgabe anpassen (guenstig)",
      "Meist nutzt man fertig vortrainierte Modelle",
      "Fuer Firmen reicht oft RAG statt Fine-Tuning"
     ],
     "yt": "pretraining fine-tuning erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Ein LLM lernt erst allgemeine Sprache aus dem halben Internet (Pretraining) - das kostet Millionen und machen nur grosse Firmen. Danach kann man es guenstig fuer den eigenen Zweck nachschaerfen (Fine-Tuning), z.B. auf Bank-Sprache. Fuer die meisten Firmen-Anwendungen reicht aber RAG (eigenes Wissen mitgeben), ohne das Modell selbst zu trainieren.",
     "bsp": "Ein vortrainiertes Modell kann schon Deutsch; mit Fine-Tuning bringt man ihm den Bank-Ton bei.",
     "merke": "Pretraining = Allgemeinbildung, Fine-Tuning = Spezialisierung. Oft reicht schon RAG.",
     "lang": [],
     "web": [],
     "nr": 37,
     "track": "ai"
    },
    {
     "t": "PyTorch & TensorFlow",
     "was": "PyTorch und TensorFlow sind die zwei grossen Werkzeuge (Frameworks), mit denen man neuronale Netze baut und trainiert. In Forschung und Bootcamps ist PyTorch heute am beliebtesten.",
     "pts": [
      "Frameworks zum Bauen neuronaler Netze",
      "PyTorch = sehr beliebt, einsteigerfreundlich",
      "TensorFlow = von Google, stark in Produktion",
      "Beide kostenlos und Open Source"
     ],
     "yt": "PyTorch vs TensorFlow anfaenger deutsch",
     "src": null,
     "gh": [
      [
       "PyTorch",
       "https://github.com/pytorch/pytorch"
      ],
      [
       "TensorFlow",
       "https://github.com/tensorflow/tensorflow"
      ]
     ],
     "art": [],
     "detail": "Diese Frameworks nehmen dir die schwere Mathe ab: Backpropagation, Gradienten, GPU-Nutzung - alles erledigen sie automatisch. Du beschreibst nur den Aufbau des Netzes, sie kuemmern sich um den Rest. Zum Lernen empfehlen die meisten heute PyTorch, weil es sich natuerlicher anfuehlt.",
     "bsp": "Mit wenigen Zeilen PyTorch definierst du ein Netz - Training und Ableitungen laufen automatisch.",
     "merke": "PyTorch/TensorFlow erledigen die schwere Mathe - du beschreibst nur das Netz.",
     "lang": [],
     "web": [],
     "nr": 38,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "MLOps & Data Engineering",
   "emoji": "🔧",
   "ziel": "KI-Modelle zuverlaessig in den echten Betrieb bringen und mit Daten versorgen.",
   "topics": [
    {
     "t": "Was ist MLOps?",
     "was": "MLOps bedeutet, KI-Modelle nicht nur zu bauen, sondern sie sauber in den Dauerbetrieb zu bringen, zu ueberwachen und aktuell zu halten - wie ein TueV fuer KI im Alltag.",
     "pts": [
      "Betrieb & Pflege von ML-Modellen",
      "Vom Notebook zum echten Produkt",
      "Automatisieren, ueberwachen, aktualisieren",
      "Kombiniert Data Science mit IT-Betrieb"
     ],
     "yt": "MLOps einfach erklaert deutsch",
     "src": null,
     "gh": [
      [
       "MLflow",
       "https://github.com/mlflow/mlflow"
      ]
     ],
     "art": [],
     "detail": "Viele Modelle funktionieren im Test super, scheitern aber im echten Einsatz - weil niemand sie pflegt. MLOps sorgt dafuer, dass ein Modell zuverlaessig laeuft: automatisch neu trainiert wird, ueberwacht wird und bei Problemen Alarm schlaegt. Ohne MLOps bleibt KI ein nettes Experiment; mit MLOps wird sie ein verlaessliches Produkt.",
     "bsp": "Ein Betrugsmodell wird monatlich automatisch mit neuen Daten nachtrainiert und ueberwacht.",
     "merke": "Ein Modell zu bauen ist der Anfang - MLOps haelt es dauerhaft am Leben.",
     "lang": [],
     "web": [],
     "nr": 39,
     "track": "ai"
    },
    {
     "t": "Data Pipeline",
     "was": "Eine Data Pipeline ist ein automatischer 'Foerderband' fuer Daten: Sie holt Daten, reinigt sie und bringt sie an den richtigen Ort - immer wieder, ganz von selbst.",
     "pts": [
      "Automatischer Datenfluss von A nach B",
      "Schritte: holen -> reinigen -> speichern",
      "Laeuft regelmaessig ohne Handarbeit",
      "Versorgt Modelle mit frischen Daten"
     ],
     "yt": "data pipeline einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Daten liegen an vielen Orten (Datenbanken, Dateien, Systeme). Eine Pipeline sammelt sie automatisch ein, bringt sie in Form und legt sie dort ab, wo Modelle und Berichte sie brauchen. Ohne Pipeline muesste jemand das jeden Tag von Hand machen - fehleranfaellig und langsam.",
     "bsp": "Jede Nacht zieht die Pipeline die neuen Transaktionen, reinigt sie und stellt sie fuer die Betrugs-KI bereit.",
     "merke": "Data Pipeline = automatisches Foerderband, das die KI mit frischen Daten fuettert.",
     "lang": [],
     "web": [],
     "nr": 40,
     "track": "ai"
    },
    {
     "t": "Experiment Tracking",
     "was": "Beim Bauen von KI probiert man viele Varianten aus. Experiment Tracking notiert automatisch, welche Einstellung welches Ergebnis brachte - damit man den Ueberblick behaelt.",
     "pts": [
      "Protokolliert jede Modell-Variante",
      "Was wurde eingestellt, was kam heraus",
      "Vergleichbar und wiederholbar",
      "Tools: MLflow, Weights & Biases"
     ],
     "yt": "experiment tracking mlflow erklaert deutsch",
     "src": null,
     "gh": [
      [
       "MLflow",
       "https://github.com/mlflow/mlflow"
      ]
     ],
     "art": [],
     "detail": "Ohne Tracking verliert man schnell den Ueberblick: 'Welche Einstellung war nochmal die beste?' Experiment Tracking speichert automatisch jede Variante mit Ergebnis. So kann man Modelle sauber vergleichen und das beste wiederfinden - wichtig fuer Nachweise gegenueber der Aufsicht.",
     "bsp": "Nach 50 Versuchen zeigt das Tracking auf einen Blick, welche Einstellung die beste Trefferquote hatte.",
     "merke": "Ohne Tracking vergisst du, was funktioniert hat. Alles automatisch mitschreiben lassen.",
     "lang": [],
     "web": [],
     "nr": 41,
     "track": "ai"
    },
    {
     "t": "Model Registry & Deployment",
     "was": "Eine Model Registry ist ein Regal, in dem fertige Modelle mit Versionsnummer liegen. Deployment heisst, ein Modell in den echten Einsatz zu bringen, damit Programme es nutzen.",
     "pts": [
      "Registry = Regal mit Modell-Versionen",
      "Deployment = Modell live schalten",
      "Als API bereitstellen fuer andere Systeme",
      "Zurueckrollen auf alte Version moeglich"
     ],
     "yt": "model deployment registry erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Wenn ein Modell fertig ist, wird es mit Versionsnummer in der Registry abgelegt (v1, v2, ...). Beim Deployment macht man es als API verfuegbar, sodass z.B. das Banking-System es fragen kann. Geht eine neue Version schief, schaltet man einfach auf die alte zurueck - genau wie bei Software.",
     "bsp": "Version 3 des Betrugsmodells geht live; zeigt sie Probleme, wechselt man in Minuten zurueck auf Version 2.",
     "merke": "Registry = versioniertes Modell-Regal, Deployment = live schalten mit Rueckweg.",
     "lang": [],
     "web": [],
     "nr": 42,
     "track": "ai"
    },
    {
     "t": "Data Engineering Grundlagen",
     "was": "Data Engineering baut das Fundament: die Systeme, in denen Daten sauber gespeichert und bereitgestellt werden. Ohne gute Daten-Infrastruktur keine gute KI.",
     "pts": [
      "Daten speichern, ordnen, bereitstellen",
      "Data Warehouse / Data Lake = grosse Datenspeicher",
      "ETL = Extract, Transform, Load",
      "Fundament fuer Analyse und KI"
     ],
     "yt": "data engineering einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Bevor Data Scientists mit Daten arbeiten koennen, muss jemand die Daten-Infrastruktur bauen: grosse Speicher (Data Warehouse/Lake) und Prozesse, die Daten einsammeln und aufbereiten (ETL). Das ist Data Engineering. Man sagt: Data Engineers bauen die Kueche, Data Scientists kochen darin.",
     "bsp": "Ein Data Warehouse buendelt Daten aus Filialen, App und Hotline an einem Ort fuer Auswertungen.",
     "merke": "Erst die Daten-Infrastruktur (Engineering), dann die schoene KI obendrauf.",
     "lang": [],
     "web": [],
     "nr": 43,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "KI-Karriere, Projekte & Praxis",
   "emoji": "🎯",
   "ziel": "Wie du das Gelernte in echte Faehigkeiten, Projekte und einen Nachweis verwandelst.",
   "topics": [
    {
     "t": "AI Bootcamp: was & fuer wen",
     "was": "Ein AI Bootcamp ist ein intensiver, praxisnaher Kurs, der einem in wenigen Wochen/Monaten KI beibringt - oft berufsbegleitend und projektorientiert.",
     "pts": [
      "Intensiv, praxisnah, in kurzer Zeit",
      "Vom Anfaenger zum ersten KI-Projekt",
      "Oft mit Betreuung und Community",
      "Alternative: kostenlose Kurse in eigenem Tempo"
     ],
     "yt": "AI bootcamp erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Forbes: Beste AI Bootcamps (EU)",
       "https://www.forbes.com/advisor/l/best-ai-bootcamps-eu/"
      ],
      [
       "Elements of AI (kostenlos, Uni Helsinki)",
       "https://www.elementsofai.de/"
      ]
     ],
     "detail": "Bootcamps sind beliebt, weil sie strukturiert und praxisnah sind: Man baut echte Projekte statt nur Theorie zu hoeren. Du musst aber nicht zahlen, um anzufangen - kostenlose Angebote wie 'Elements of AI' (Universitaet Helsinki, auf Deutsch), der Google ML Crash Course oder fast.ai decken sehr viel ab. Diese App ist selbst ein strukturierter Lernpfad in dieser Richtung.",
     "bsp": null,
     "merke": "Wichtig ist nicht das teure Bootcamp, sondern dass du dranbleibst und echte Projekte baust.",
     "lang": [],
     "web": [],
     "nr": 44,
     "track": "ai"
    },
    {
     "t": "Lernpfad & Zeitplan",
     "was": "Ein guter Plan schlaegt Talent: kleine, regelmaessige Schritte bringen mehr als seltene Marathon-Sessions. Diese App ist bereits als Reihenfolge aufgebaut.",
     "pts": [
      "Lieber taeglich 30-60 Min als selten 8 Stunden",
      "Reihenfolge einhalten: Basis zuerst",
      "Gelerntes sofort anwenden (kleine Uebungen)",
      "Fortschritt abhaken und sichtbar machen"
     ],
     "yt": "wie lerne ich KI als anfaenger deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Der haeufigste Fehler ist, mit dem Schwersten zu starten und dann aufzugeben. Halte die Reihenfolge ein: erst Python und Daten, dann Machine Learning, dann Deep Learning und LLMs. Nimm dir realistische Etappen vor. Nutze den Fortschrittsbalken dieser App - sichtbarer Fortschritt haelt die Motivation hoch.",
     "bsp": null,
     "merke": "Kleine, regelmaessige Schritte in der richtigen Reihenfolge schlagen jeden Kraftakt.",
     "lang": [],
     "web": [],
     "nr": 45,
     "track": "ai"
    },
    {
     "t": "Eigene KI-Projekte (Portfolio)",
     "was": "Ein Portfolio ist eine Sammlung eigener Projekte, die zeigt, was du kannst. Fuer KI-Jobs zaehlt es oft mehr als Zeugnisse - Zeigen schlaegt Erzaehlen.",
     "pts": [
      "Portfolio = deine gezeigten Projekte",
      "Auf GitHub veroeffentlichen",
      "Lieber kleine, fertige Projekte als grosse Ruinen",
      "Erklaere: Problem, Loesung, Ergebnis"
     ],
     "yt": "AI portfolio projekte anfaenger deutsch",
     "src": null,
     "gh": [
      [
       "GitHub (dein Portfolio-Zuhause)",
       "https://github.com/"
      ]
     ],
     "art": [],
     "detail": "Arbeitgeber wollen sehen, dass du Dinge wirklich baust. Ein kleines, sauber dokumentiertes Projekt (z.B. ein Betrugs-Erkenner mit oeffentlichen Daten, ein einfacher Chatbot) auf GitHub sagt mehr als jedes Zertifikat. Beschreibe zu jedem Projekt kurz: Welches Problem? Welche Loesung? Welches Ergebnis?",
     "bsp": "Ein kleiner Chatbot fuer FAQ, oeffentlich auf GitHub, mit klarer README - das ueberzeugt im Bewerbungsgespraech.",
     "merke": "Zeigen schlaegt Erzaehlen: Ein GitHub-Portfolio ist dein bester Nachweis.",
     "lang": [],
     "web": [],
     "nr": 46,
     "track": "ai"
    },
    {
     "t": "Kaggle: ueben mit echten Daten",
     "was": "Kaggle ist eine kostenlose Plattform mit echten Datensaetzen, Uebungen und Wettbewerben. Ideal, um KI praktisch zu ueben und von anderen zu lernen.",
     "pts": [
      "Kostenlose Datensaetze und Uebungen",
      "Wettbewerbe mit echten Problemen",
      "Fertige Loesungen anderer zum Lernen",
      "Guter Beleg fuer praktische Erfahrung"
     ],
     "yt": "Kaggle fuer anfaenger deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Kaggle Learn (kostenlose Kurse)",
       "https://www.kaggle.com/learn"
      ]
     ],
     "detail": "Auf Kaggle findest du echte Daten und kannst direkt im Browser ueben - ohne komplizierte Installation. Die kostenlosen Mini-Kurse (Kaggle Learn) sind ideal fuer Python, pandas und Machine Learning. In Wettbewerben loest du echte Probleme und siehst, wie Profis vorgehen.",
     "bsp": null,
     "merke": "Kaggle = Fitnessstudio fuer KI: echte Daten, kostenlos, mit Vorbildern zum Abschauen.",
     "lang": [],
     "web": [],
     "nr": 47,
     "track": "ai"
    },
    {
     "t": "KI-Berufe & naechste Schritte",
     "was": "Es gibt viele Wege mit KI: von der Anwendung (Prompting, Bots bauen) bis zur Entwicklung (ML/Data). Man muss nicht alles koennen - eine klare Richtung reicht.",
     "pts": [
      "AI/ML Engineer = baut und trainiert Modelle",
      "Data Scientist = analysiert Daten, findet Muster",
      "Data Engineer = baut die Daten-Infrastruktur",
      "AI Solution/Bot Builder = setzt KI in Firmen ein (z.B. Genesys)"
     ],
     "yt": "KI berufe ueberblick deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": "Nicht jeder muss Modelle von Grund auf bauen. Viele gefragte Rollen setzen KI klug EIN: Bots und Wissen aufbauen (genau das deckt die Genesys GC-AI-DB ab), Prozesse automatisieren, Prompts und RAG gestalten. Ueberlege, ob du eher anwenden oder entwickeln willst - und richte deinen Lernpfad danach aus. Mit dieser App deckst du beide Seiten ab.",
     "bsp": null,
     "merke": "Du musst nicht alles koennen. Eine klare Richtung (anwenden ODER entwickeln) reicht zum Start.",
     "lang": [],
     "web": [],
     "nr": 48,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "GenAI Grundlagen",
   "emoji": "🧠",
   "ziel": "Die Basis moderner KI verstehen: was LLMs sind und wie man mit ihnen redet.",
   "topics": [
    {
     "t": "GenAI Grundlagen",
     "was": "GenAI (Generative KI) ist KI, die Neues erzeugt: Texte, Bilder, Code. Sie hat aus riesigen Datenmengen 'gelernt', Muster fortzusetzen.",
     "pts": [
      "Generative KI = erzeugt neue Inhalte",
      "Beispiele: ChatGPT, Claude, Bilder-KI",
      "Lernt aus sehr vielen Beispieldaten",
      "Rechnet Wahrscheinlichkeiten, denkt nicht wie Mensch"
     ],
     "yt": "Generative KI einfach erklaert deutsch",
     "src": [
      "Fraunhofer: Generative KI",
      "https://www.iis.fraunhofer.de/de/ff/ki.html"
     ],
     "gh": [],
     "art": [
      [
       "Bitkom: KI-Grundlagen",
       "https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 49,
     "track": "ai"
    },
    {
     "t": "Large Language Models",
     "was": "Ein LLM (Large Language Model) ist ein sehr grosses KI-Sprachmodell. Es sagt immer das naechste Wort voraus und kann so ganze Texte schreiben.",
     "pts": [
      "LLM = grosses Sprachmodell",
      "Sagt das jeweils naechste Wort (Token) voraus",
      "Beispiele: GPT, Claude, Gemini, Llama",
      "Sehr faehig, aber kann sich irren"
     ],
     "yt": "Large Language Model einfach erklaert",
     "src": [
      "Anthropic: Was ist ein LLM",
      "https://www.anthropic.com/learn"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein Large Language Model (LLM) ist ein sehr großes KI-Sprachmodell. Man kann es sich als eine extrem gute Autovervollständigung vorstellen: Es sagt immer voraus, welches Wort als Nächstes am wahrscheinlichsten kommt - und macht das so gut, dass ganze sinnvolle Texte, Antworten und sogar Programmcode entstehen.",
        "Bekannte LLMs sind GPT (ChatGPT), Claude, Gemini und Llama. Sie haben aus riesigen Textmengen (großen Teilen des Internets, Büchern usw.) gelernt, wie Sprache funktioniert. Wichtig: Ein LLM 'versteht' nicht wie ein Mensch - es rechnet Wahrscheinlichkeiten. Trotzdem sind die Ergebnisse oft verblüffend gut."
       ]
      },
      {
       "h": "Wie es funktioniert (einfach)",
       "p": [
        "Technisch ist ein LLM ein Deep-Learning-Modell mit der sogenannten Transformer-Architektur (die lernst du in diesem Plan gleich danach). Es hat Milliarden von 'Stellschrauben' (Parameter/Gewichte), die beim Training eingestellt wurden.",
        "Beim Training liest das Modell Unmengen Text und übt, das jeweils nächste Wort vorherzusagen. Liegt es daneben, werden die Stellschrauben ein winziges Stück korrigiert - milliardenfach. So 'lernt' das Modell Grammatik, Fakten und Zusammenhänge.",
        "Text wird dabei in Tokens (Wort-Teile) zerlegt. Das Modell arbeitet mit Tokens, und nach diesen Tokens richten sich auch die Kosten: Je mehr Text rein- und rausgeht, desto teurer wird ein Aufruf."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis im Unternehmen)",
       "p": [
        "Laut den Praxis-Quellen sind die häufigsten Einsätze im Unternehmen: Kundenservice automatisieren (Chatbots), Texte erstellen und zusammenfassen, große Textmengen analysieren, Übersetzen sowie Programmier-Unterstützung.",
        "In einer Bank heißt das konkret: Anfragen vorsortieren und beantworten, Gesprächsnotizen automatisch zusammenfassen (siehe Genesys Conversation Summary), E-Mails und Beschwerden klassifizieren, Mitarbeitern beim Formulieren helfen, oder als Basis eines RAG-Systems mit eigenem Wissen dienen.",
        "Wichtig ist die Entscheidung, WELCHES Modell und WO es läuft: als fertiger Dienst über eine API (OpenAI, Anthropic Claude, Azure) oder selbst betrieben (Open-Source-LLM, On-Prem) für maximalen Datenschutz - beides behandelt der AI-Teil dieses Plans."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Agent beendet ein 12-minütiges Kundengespräch. Statt selbst eine Notiz zu tippen, lässt er das LLM zusammenfassen: 'Kunde meldete verlorene Karte, Karte wurde gesperrt, Ersatzkarte bestellt, Lieferung in 5 Werktagen.' Der Agent prüft kurz, korrigiert bei Bedarf und speichert. Das spart pro Gespräch 1-2 Minuten Nacharbeit - bei tausenden Gesprächen viel Zeit."
       ]
      },
      {
       "h": "Vorteile",
       "p": [
        "Sehr vielseitig: dasselbe Modell kann schreiben, zusammenfassen, sortieren, übersetzen.",
        "Spart Zeit bei Sprach- und Textaufgaben.",
        "Rund um die Uhr verfügbar und gut skalierbar.",
        "Über RAG und Tools mit eigenem Wissen und echten Systemen kombinierbar."
       ]
      },
      {
       "h": "Grenzen, Risiken & Datenschutz",
       "p": [
        "Halluzinationen: Ein LLM kann Falsches sehr überzeugend behaupten. Wichtige Antworten müssen geprüft oder mit RAG auf Quellen gestützt werden.",
        "Kein aktuelles Wissen: Ohne RAG kennt es nur seinen Trainingsstand, nicht eure heutigen Preise.",
        "Datenschutz: Keine Kundendaten oder Geheimnisse in öffentliche Tools eingeben. In der Bank braucht es klare Regeln (welches Modell, welche Region, was wird gespeichert) - Stichworte DSGVO, EU AI Act, Private AI.",
        "Kosten & Sicherheit: Tokens kosten Geld, und LLMs sind für Angriffe wie Prompt Injection anfällig (siehe AI Security)."
       ]
      },
      {
       "h": "Typische Fehler",
       "p": [
        "Dem LLM blind vertrauen, ohne Ergebnisse zu prüfen.",
        "Erwarten, dass es interne/aktuelle Fakten kennt (dafür braucht es RAG).",
        "Sensible Daten in öffentliche Tools kopieren.",
        "Das teuerste Modell für einfache Aufgaben nehmen, wo ein kleines (SLM) reichen würde."
       ]
      },
      {
       "h": "Best Practices / Checkliste",
       "p": [
        "Für Fakten immer RAG (eigene Quellen) nutzen und Quellen anzeigen.",
        "Klare Prompts schreiben (siehe Prompt Engineering).",
        "Modell und Betriebsort nach Datenschutz und Kosten wählen.",
        "Ausgaben prüfen, besonders bei rechtlich/finanziell heiklen Themen.",
        "Kosten (Tokens) überwachen."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Als Nächstes im Plan: Transformer-Architektur und Attention (das Innenleben), dann Prompting und RAG (das Anwenden). Die Fraunhofer-Texte unten erklären das Innenleben Schritt für Schritt in einfachem Deutsch."
       ]
      }
     ],
     "web": [
      [
       "Fraunhofer IESE: Wie funktionieren LLMs?",
       "https://www.iese.fraunhofer.de/blog/wie-funktionieren-llms/"
      ],
      [
       "Fraunhofer IESE: Was sind LLMs - worauf achten?",
       "https://www.iese.fraunhofer.de/blog/large-language-models-ki-sprachmodelle/"
      ],
      [
       "Haufe Akademie: LLM verstehen und anwenden",
       "https://www.haufe-akademie.de/skill-it/blog/large-language-models"
      ],
      [
       "Alexander Thamm: LLM - eine Einfuehrung",
       "https://www.alexanderthamm.com/de/blog/large-language-models-eine-einfuehrung/"
      ]
     ],
     "nr": 50,
     "track": "ai"
    },
    {
     "t": "Small Language Models",
     "was": "Ein SLM (Small Language Model) ist ein kleines Sprachmodell. Es ist guenstiger, schneller und kann auch lokal laufen - dafuer weniger maechtig.",
     "pts": [
      "SLM = kleines Sprachmodell",
      "Guenstiger und schneller",
      "Kann auf eigenem Rechner laufen (privat)",
      "Gut fuer klare, enge Aufgaben"
     ],
     "yt": "Small Language Models explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein Small Language Model (SLM) ist ein kleines Sprachmodell. Es kann weniger als ein großes LLM, ist dafür aber günstiger, schneller und kann auf schwacher Hardware laufen - teils sogar auf einer normalen CPU oder direkt auf dem Gerät.",
        "Die Idee: Nicht jede Aufgabe braucht das größte, teuerste Modell. Für klar umrissene Aufgaben reicht oft ein kleines, spezialisiertes Modell völlig aus - und ist in der Praxis sogar die bessere Wahl."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "SLMs sind nach demselben Prinzip gebaut wie LLMs (Transformer), haben aber viel weniger Parameter. Dadurch brauchen sie weniger Rechenleistung und Speicher.",
        "Oft entstehen sie, indem man ein großes Modell verkleinert (Quantization) oder ein kleines Modell gezielt für eine Aufgabe feintunt. So bleibt viel Können bei deutlich kleinerer Größe."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis & Vorteile)",
       "p": [
        "Die Fachquellen nennen als Hauptvorteile: Kosten- und Energieeffizienz, schnelle Antwortzeiten, Betrieb auf schwacher/lokaler Hardware, einfaches Fine-Tuning und - besonders wichtig für Banken - Datenschutz, weil das Modell lokal oder in der privaten Cloud laufen kann und Daten im Haus bleiben.",
        "Typische Einsätze: Chatbots für klar umrissene Themen, Klassifizieren/Vorsortieren von Anfragen, Zusammenfassen, Assistenten auf Mobilgeräten oder 'am Rand' (Edge).",
        "In der Bank: Ein SLM kann on-premise sensible Aufgaben übernehmen (z.B. E-Mails kategorisieren), ohne dass Daten das Haus verlassen - oft in Kombination mit RAG für das Fachwissen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Für 'Sortiere eingehende E-Mails nach Abteilung' braucht man kein Riesen-LLM. Ein kleines, lokal betriebenes SLM erledigt das schnell, günstig und datenschutzkonform - der teure Cloud-Aufruf entfällt."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "SLMs sind schwächer bei sehr komplexen, offenen Aufgaben und breitem Weltwissen - dafür bleibt das LLM besser.",
        "Typischer Fehler: aus Prinzip immer das größte Modell nehmen (teuer) - oder umgekehrt ein zu kleines Modell für eine zu komplexe Aufgabe.",
        "SLMs profitieren stark von gutem Fine-Tuning/RAG; roh sind sie manchmal enttäuschend.",
        "Modellwahl an der Aufgabe ausrichten, nicht am Hype."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Passt eng zu: LLM (der große Bruder), Quantization, Fine-Tuning, Local/Private AI und Ollama. Der Exxeta-Text unten vergleicht SLM vs LLM praxisnah für Unternehmen."
       ]
      }
     ],
     "web": [
      [
       "ComputerWeekly: Small Language Model (SLM)",
       "https://www.computerweekly.com/de/definition/Small-Language-Model-SLM"
      ],
      [
       "Exxeta: SLM in Enterprise-Unternehmen (SLM vs LLM)",
       "https://exxeta.com/blog/small-language-models-enterprise-use-cases-slm-vs-llm"
      ],
      [
       "bigdata-insider: Was ist ein SLM?",
       "https://www.bigdata-insider.de/was-ist-ein-small-language-model-slm-a-b4d354ab30465f7da451a05617e060c3/"
      ],
      [
       "Alexander Thamm: Small Language Models",
       "https://www.alexanderthamm.com/de/blog/small-language-models/"
      ]
     ],
     "nr": 51,
     "track": "ai"
    },
    {
     "t": "Multimodalitaet",
     "was": "Multimodal heisst, die KI versteht mehr als nur Text - auch Bilder, Ton oder Video. Man kann ihr z.B. ein Foto zeigen.",
     "pts": [
      "Modalitaet = Art der Info (Text, Bild, Ton)",
      "Multimodal = mehrere Arten gleichzeitig",
      "Beispiel: Bild hochladen und Fragen stellen",
      "Nuetzlich fuer Dokumente, Screenshots"
     ],
     "yt": "multimodal AI erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Eine Modalität ist eine Art von Information: Text, Bild, Ton, Video. Multimodale KI kann mehrere davon gleichzeitig verstehen und verknüpfen - nicht nur Text lesen, sondern auch ein Foto ansehen oder Sprache hören.",
        "Man kann so einer KI z.B. ein Foto eines Kontoauszugs zeigen und dazu eine Frage stellen - sie versteht Bild und Text zusammen."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Laut den Fachquellen hat ein multimodales System für jede Modalität ein spezialisiertes Modul (z.B. Computer Vision für Bilder, Sprachverarbeitung für Text). Die Ergebnisse werden dann zu einer gemeinsamen Repräsentation verschmolzen (multimodale Fusion).",
        "Dadurch entstehen Erkenntnisse, die man bei getrennter Analyse übersehen würde: Ein Hundebild plus Hundegeräusch wird sicherer korrekt erkannt als jedes für sich. (Beispiel aus der Forschung: Metas ImageBind verbindet sechs Modalitäten.)"
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Sehr nützlich für Dokumente: Ausweise, Rechnungen, Formulare, Screenshots - die KI 'sieht' das Dokument und zieht die Infos heraus (verbunden mit OCR und Document Processing).",
        "Weitere Einsätze: Barrierefreiheit (automatische Bildbeschreibungen), Sprachassistenten (Ton + Text), Qualitäts-/Betrugsprüfung anhand von Bildern.",
        "In der Bank: Ein Kunde fotografiert ein Schreiben und fragt 'Was muss ich tun?' - die KI liest das Bild und erklärt die nächsten Schritte. Bei sensiblen Dokumenten gelten strenge Datenschutzregeln (wo läuft das Modell, was wird gespeichert)."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Kunde lädt das Foto einer unbekannten Kartenabbuchung hoch. Die multimodale KI erkennt Händlername und Betrag im Bild, gleicht sie mit den Transaktionen ab und erklärt, worum es sich handelt - oder startet eine Reklamation."
       ]
      },
      {
       "h": "Grenzen, Risiken & typische Fehler",
       "p": [
        "Bildverstehen kann irren (schlechte Fotos, Handschrift) - Ergebnisse bei wichtigen Dingen prüfen.",
        "Datenschutz ist heikel: Bilder von Ausweisen/Dokumenten sind hochsensibel (DSGVO, Datenklassifizierung).",
        "Multimodale Modelle sind größer/teurer - nicht für jede Aufgabe nötig.",
        "Typischer Fehler: sich blind auf die Bilddeutung verlassen ohne Kontrolle."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Verwandt: AI OCR, AI Document Processing, Computer Vision (CNN) und Speech-to-Text. Der ComputerWeekly- und mindsquare-Text unten erklären multimodale KI kompakt auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "ComputerWeekly: Multimodale KI",
       "https://www.computerweekly.com/de/definition/Multimodale-kuenstliche-Intelligenz-multimodale-KI"
      ],
      [
       "mindsquare: Multimodale KI",
       "https://mindsquare.de/knowhow/multimodale-ki/"
      ],
      [
       "Alexander Thamm: Large Multimodal Models",
       "https://www.alexanderthamm.com/de/blog/large-multimodal-models-kompakt-erklaert/"
      ],
      [
       "awantego: Was ist Multimodale KI?",
       "https://www.awantego.com/was-ist-multimodale-ki/"
      ]
     ],
     "nr": 52,
     "track": "ai"
    },
    {
     "t": "Reasoning",
     "was": "Reasoning heisst 'Schlussfolgern'. Neuere Modelle denken in Schritten, bevor sie antworten - so loesen sie schwierigere Aufgaben besser.",
     "pts": [
      "Reasoning = schrittweises Nachdenken",
      "Bessere Ergebnisse bei schweren Aufgaben",
      "Braucht mehr Zeit und Rechenleistung",
      "Beispiel: Rechenaufgabe Schritt fuer Schritt"
     ],
     "yt": "AI reasoning models erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Reasoning heißt 'Schlussfolgern'. Neuere KI-Modelle können sich vor der Antwort Zeit nehmen und in Zwischenschritten 'nachdenken', statt sofort das erstbeste Wort auszugeben. Dadurch lösen sie schwierige, mehrstufige Aufgaben deutlich besser.",
        "Man kann es mit einem Menschen vergleichen: Bei einer kniffligen Rechnung rechnet man Schritt für Schritt auf einem Zettel, statt das Ergebnis zu raten."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Reasoning-Modelle erzeugen intern eine Kette von Gedankenschritten (Chain-of-Thought), bevor sie die finale Antwort geben. Diese Zwischenschritte helfen ihnen, Fehler zu vermeiden und komplexe Zusammenhänge zu ordnen.",
        "Das kostet mehr Rechenzeit und mehr Tokens (die Denk-Schritte zählen mit), bringt aber bei logischen, mathematischen oder planenden Aufgaben klar bessere Ergebnisse."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Nutze Reasoning gezielt für Aufgaben, die mehrere Schritte oder Logik brauchen: Regeln prüfen, aus Bedingungen eine Entscheidung ableiten, Pläne erstellen, komplexe Anfragen zerlegen.",
        "Für einfache Fragen (Standard-FAQ) ist ein normales, schnelles Modell günstiger - Reasoning lohnt sich vor allem beim Schwierigen. Auch KI-Agenten stützen sich stark auf Reasoning, um ihre Handlungen zu planen und zu prüfen.",
        "In der Bank: z.B. um aus mehreren Bedingungen (Einkommen, Laufzeit, Sicherheiten) eine strukturierte Einschätzung vorzubereiten - die Letztentscheidung bleibt beim Menschen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Frage: 'Kunde will 3 Daueraufträge auf ein neues Konto umziehen, einer überschneidet sich mit einer Lastschrift - was ist zu tun?' Ein Reasoning-Modell geht die Fälle einzeln durch, erkennt den Konflikt und schlägt eine geordnete Reihenfolge vor, statt oberflächlich zu antworten."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Mehr Denken = mehr Kosten und längere Antwortzeit - nicht für jede Kleinigkeit sinnvoll.",
        "Reasoning verhindert Halluzinationen nicht automatisch: Für Fakten braucht es weiterhin Grounding/RAG.",
        "Die internen Denkschritte sind kein Beweis - sie können auch plausibel-falsch sein.",
        "Typischer Fehler: Reasoning-Modelle für simple Aufgaben einsetzen und unnötig zahlen."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Passt zu: Prompting (Chain-of-Thought), Advanced Prompting und Agent Reasoning/Planning. Der IBM- und Anthropic-Text unten erklären das Prinzip genauer."
       ]
      }
     ],
     "web": [
      [
       "IBM: What is AI reasoning?",
       "https://www.ibm.com/think/topics/ai-reasoning"
      ],
      [
       "Anthropic: Extended thinking (Reasoning)",
       "https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking"
      ],
      [
       "Alexander Thamm: LLM-Grundlagen",
       "https://www.alexanderthamm.com/de/blog/large-language-models-eine-einfuehrung/"
      ]
     ],
     "nr": 53,
     "track": "ai"
    },
    {
     "t": "Prompting",
     "was": "Ein Prompt ist die Anweisung, die man der KI gibt. Je klarer der Prompt, desto besser die Antwort - wie eine gute Frage an einen Experten.",
     "pts": [
      "Prompt = deine Anweisung/Frage an die KI",
      "Klar sagen, was man will",
      "Beispiele und Kontext helfen",
      "Format vorgeben (z.B. 'als Liste')"
     ],
     "yt": "Prompting fuer Anfaenger deutsch",
     "src": [
      "Anthropic Prompt-Guide",
      "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 54,
     "track": "ai"
    },
    {
     "t": "Advanced Prompting",
     "was": "Fortgeschrittene Prompt-Techniken holen mehr aus der KI heraus, z.B. Beispiele geben (Few-shot) oder Schritt-fuer-Schritt denken lassen.",
     "pts": [
      "Few-shot: Beispiele mitgeben",
      "Chain-of-Thought: 'denke Schritt fuer Schritt'",
      "Rolle geben ('Du bist Bank-Experte')",
      "Klare Ausgabe-Regeln setzen"
     ],
     "yt": "advanced prompting techniques",
     "src": [
      "Anthropic Prompt-Engineering",
      "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Advanced Prompting sind fortgeschrittene Techniken, um mehr und Zuverlässigeres aus einer KI herauszuholen - über den einfachen 'Stell eine klare Frage'-Ansatz hinaus.",
        "Man braucht dafür immer noch nicht zu programmieren; es sind clevere Arten, die Anweisung zu strukturieren."
       ]
      },
      {
       "h": "Die wichtigsten Techniken",
       "p": [
        "Few-shot: Gib 1-3 Beispiele für gute Frage-Antwort-Paare mit. Die KI ahmt das Muster nach - stark bei einheitlichem Format.",
        "Chain-of-Thought: Bitte die KI, 'Schritt für Schritt' zu denken. Hilft bei Logik- und Rechenaufgaben.",
        "Rollen & Systemprompt: Lege Rolle, Regeln und Grenzen fest ('Du bist Bankberater, gib keine Rechtsberatung').",
        "Struktur & Format erzwingen: Verlange eine bestimmte Ausgabe (z.B. Stichpunkte, JSON, feste Felder).",
        "Selbstprüfung: Lass die KI ihre eigene Antwort gegen die Vorgaben prüfen ('Prüfe, ob alle Regeln eingehalten sind')."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Der bewährte Weg (laut den Guides): einfach starten und schrittweise verfeinern - Beispiele ergänzen, Format vorgeben, testen. Iteration ist der Kern.",
        "In produktiven Bank-Bots kombiniert man diese Techniken: ein fester Systemprompt (Rolle + Sicherheitsregeln), Few-shot-Beispiele für den Ton, klare Formatvorgaben und die Regel 'nur aus dem gegebenen Kontext antworten' (für RAG).",
        "Weil solche Prompts wichtig sind, werden sie versioniert und vor dem Live-Gang getestet (Prompt Versioning, AI Testing)."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Few-shot für einheitliche Zusammenfassungen: Man gibt zwei Beispiel-Gespräche mit Muster-Zusammenfassung vor. Danach erzeugt die KI alle weiteren Zusammenfassungen im exakt gleichen, gewünschten Format - ohne dass man es jedes Mal neu erklären muss."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Mehr Beispiele/Kontext = mehr Tokens = höhere Kosten; nur so viel wie nötig.",
        "Zu viele Regeln auf einmal können sich widersprechen - klar und geordnet halten.",
        "Sicherheit: Nutzereingaben strikt vom Systemprompt trennen, sonst droht Prompt Injection.",
        "Techniken nicht testen: Was bei einem Modell gut wirkt, kann bei einem anderen anders wirken - immer prüfen."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Baut auf Prompting und Prompt Engineering auf, führt zu Context Engineering und (bei Sicherheit) zu Prompt Injection. Der deutschsprachige Prompt Engineering Guide unten ist die beste kostenlose Vertiefung."
       ]
      }
     ],
     "web": [
      [
       "Prompt Engineering Guide (DE): Techniken",
       "https://www.promptingguide.ai/de/techniques"
      ],
      [
       "Anthropic: Prompt Engineering Overview",
       "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
      ],
      [
       "IBM: Guide to Prompt Engineering",
       "https://www.ibm.com/think/prompt-engineering"
      ]
     ],
     "nr": 55,
     "track": "ai"
    },
    {
     "t": "Prompt Engineering",
     "was": "Prompt Engineering ist das Handwerk, Prompts systematisch zu bauen und zu testen, damit die KI zuverlaessig gute Ergebnisse liefert.",
     "pts": [
      "Prompts planen, testen, verbessern",
      "Wiederholbar und dokumentiert",
      "Wichtig fuer Bots im Echtbetrieb",
      "Kleiner Wortwechsel kann viel aendern"
     ],
     "yt": "Prompt Engineering deutsch",
     "src": [
      "Anthropic: Prompt Engineering",
      "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
     ],
     "gh": [
      [
       "Anthropic Prompt-Beispiele (Cookbook)",
       "https://github.com/anthropics/anthropic-cookbook"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein Prompt ist die Anweisung, die du der KI gibst. Prompt Engineering ist die Kunst und das Handwerk, diese Anweisung so zu formulieren, dass die KI genau das liefert, was du brauchst. Kurz: Bessere Frage, bessere Antwort.",
        "Das Schöne daran: Man braucht dafür nicht programmieren zu können. Es ist reine Sprache. Aber es ist erlernbar und wiederholbar - deshalb 'Engineering'. Schon kleine Änderungen im Prompt können das Ergebnis stark verbessern."
       ]
      },
      {
       "h": "Wie es funktioniert: die Bausteine eines guten Prompts",
       "p": [
        "Eine in der Praxis bewährte Struktur ist die RKAI-Formel: Rolle, Kontext, Aufgabe, Instruktionen.",
        "Rolle: Sag der KI, wer sie sein soll ('Du bist ein erfahrener, freundlicher Bankberater'). Je konkreter die Rolle, desto passender der Ton.",
        "Kontext: Gib die nötigen Hintergrund-Infos ('Der Kunde hat ein Girokonto und fragt nach Gebühren').",
        "Aufgabe: Sag klar, was zu tun ist ('Erkläre die Kontoführungsgebühr in 3 einfachen Sätzen').",
        "Instruktionen: Gib Format und Regeln vor ('Nutze einfache Sprache, keine Fachbegriffe, antworte auf Deutsch').",
        "Zwei weitere starke Techniken: Few-shot (gib 1-3 Beispiele für gute Antworten mit) und Chain-of-Thought ('Denke Schritt für Schritt', hilft bei kniffligen Aufgaben)."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Der empfohlene Weg (laut Google/IBM/Microsoft-Guides): Starte mit einer einfachen, klaren Anweisung und erweitere sie schrittweise - füge Kontext, Format-Vorgaben und Beispiele hinzu, bis das Ergebnis passt. Testen und Verbessern gehört dazu.",
        "In der Bank steckt Prompt Engineering überall: hinter den Antworten eines Bots, hinter Agent-Assist-Vorschlägen, hinter automatischen Zusammenfassungen. Wer die Prompts gut baut, bekommt zuverlässigere, sicherere und einheitlichere Ergebnisse.",
        "Weil Prompts im Echtbetrieb wichtig sind, versioniert man sie wie Code (Prompt Versioning) und testet Änderungen, bevor sie live gehen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Schwacher Prompt: 'Schreib was zu Kontogebühren.' Ergebnis: vage, evtl. falscher Ton.",
        "Starker Prompt: 'Du bist ein freundlicher Bankberater (Rolle). Ein Privatkunde mit Girokonto fragt nach der monatlichen Kontoführungsgebühr (Kontext). Erkläre die Gebühr und wie man sie sparen kann (Aufgabe). Nutze sehr einfache Sprache, maximal 4 Sätze, keine Fachbegriffe, freundlicher Ton (Instruktionen).' Ergebnis: klar, freundlich, verwendbar."
       ]
      },
      {
       "h": "Vorteile",
       "p": [
        "Sofort bessere Ergebnisse - ohne Programmieren.",
        "Günstig: Man verbessert die KI durch bessere Sprache statt durch teures Training.",
        "Wiederholbar: Ein guter Prompt liefert dauerhaft gute Antworten.",
        "Steuerbar: Ton, Länge und Sicherheit lassen sich vorgeben."
       ]
      },
      {
       "h": "Grenzen, Risiken & Datenschutz",
       "p": [
        "Prompting ersetzt kein echtes Wissen: Für aktuelle Fakten braucht es RAG, sonst rät die KI.",
        "Sicherheit: Angreifer versuchen per Prompt Injection, deine Anweisungen zu überschreiben. Man muss Nutzereingaben von den festen Anweisungen trennen (siehe AI Security).",
        "Keine sensiblen Daten in Beispiel-Prompts öffentlicher Tools schreiben."
       ]
      },
      {
       "h": "Typische Fehler",
       "p": [
        "Zu vage ('mach was Gutes') statt konkret.",
        "Keine Rolle, kein Format, keine Länge vorgegeben.",
        "Alles in einen riesigen Prompt packen, statt klar zu gliedern.",
        "Nicht testen: Der erste Prompt ist selten der beste - iterieren!"
       ]
      },
      {
       "h": "Best Practices / Checkliste",
       "p": [
        "Rolle, Kontext, Aufgabe, Instruktionen angeben (RKAI).",
        "Format und Länge klar vorgeben.",
        "Bei kniffligen Aufgaben: Beispiele geben (Few-shot) oder 'Schritt für Schritt' denken lassen.",
        "Iterieren: testen, anpassen, erneut testen.",
        "Wichtige Prompts versionieren und vor Live-Gang prüfen."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Der deutschsprachige Prompt Engineering Guide unten ist eine hervorragende, kostenlose Lernquelle mit vielen Techniken und Beispielen. Danach im Plan: Context Engineering und Advanced Prompting."
       ]
      }
     ],
     "web": [
      [
       "Prompt Engineering Guide (deutsch)",
       "https://www.promptingguide.ai/de"
      ],
      [
       "Google Cloud: Was ist Prompt Engineering?",
       "https://cloud.google.com/discover/what-is-prompt-engineering"
      ],
      [
       "IBM: Guide to Prompt Engineering",
       "https://www.ibm.com/think/prompt-engineering"
      ],
      [
       "Microsoft Learn: Prompt-Engineering-Techniken",
       "https://learn.microsoft.com/de-de/azure/foundry/openai/concepts/prompt-engineering"
      ]
     ],
     "nr": 56,
     "track": "ai"
    },
    {
     "t": "Context Engineering",
     "was": "Context Engineering heisst, der KI die richtigen Zusatz-Infos mitzugeben (z.B. Kundendaten, Regeln), damit sie passend antwortet.",
     "pts": [
      "Kontext = Zusatz-Infos fuer die KI",
      "Richtige Daten zur richtigen Zeit geben",
      "Zu viel Kontext verwirrt und kostet",
      "Grundlage fuer RAG (siehe spaeter)"
     ],
     "yt": "context engineering LLM",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Context Engineering heißt: dafür sorgen, dass die richtigen Zusatz-Informationen im richtigen Moment im 'Blickfeld' der KI landen (im Kontextfenster). Es geht nicht nur darum, WIE man fragt (das ist Prompt Engineering), sondern WELCHES Wissen man mitgibt.",
        "Ein guter Merksatz aus der Praxis: 'Prompt Engineering ist, was du im Kontextfenster machst - Context Engineering entscheidet, was das Fenster füllt.'"
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Context Engineering baut die 'Informations-Umgebung' der KI: Welche Dokumente, welche Kundendaten, welche Regeln, welcher Gesprächsverlauf werden mitgeschickt - und in welcher Reihenfolge, wie gekürzt und wie aktuell.",
        "Es ist damit näher an Systemdesign als an Textformulierung. Bei RAG ist Context Engineering die Kunst, genau die relevanten Chunks (nicht zu viel, nicht zu wenig) beizusteuern."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Nur relevantes Wissen mitgeben (zu viel Kontext verwirrt die KI und kostet Tokens).",
        "Frische, geprüfte Quellen bevorzugen; Widersprüchliches vermeiden.",
        "Kundendaten und Regeln gezielt einspeisen (z.B. das echte Kontolimit, die geltende Hausregel).",
        "Bei langen Gesprächen den Verlauf sinnvoll zusammenfassen, statt alles mitzuschleppen.",
        "In der Bank entscheidet gutes Context Engineering, ob der Bot korrekt UND datensparsam antwortet - man gibt nur die nötigen Daten, nicht die ganze Kundenakte."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Statt dem Modell die komplette 30-seitige Kontohistorie zu schicken, liefert gutes Context Engineering nur: aktuelles Limit, letzte 3 relevanten Transaktionen und die passende Hausregel. Ergebnis: präzisere Antwort, weniger Kosten, weniger Datenschutz-Risiko."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "'Mehr Kontext = besser' ist ein Irrtum: zu viel Kontext senkt Qualität und erhöht Kosten (und Risiko).",
        "Veralteter oder widersprüchlicher Kontext führt zu falschen Antworten.",
        "Zu viele sensible Daten mitzugeben verletzt die Datenminimierung (DSGVO).",
        "Typischer Fehler: alles 'für alle Fälle' reinpacken."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Baut auf Prompting/Advanced Prompting auf und ist das Bindeglied zu RAG und Agenten (Agent Memory). Der Context-Engineering-Guide unten vertieft das Thema gut."
       ]
      }
     ],
     "web": [
      [
       "Prompt Engineering Guide: Context Engineering",
       "https://www.promptingguide.ai/guides/context-engineering-guide"
      ],
      [
       "Abstracta: Context Engineering vs Prompt Engineering",
       "https://abstracta.us/blog/ai/context-engineering-vs-prompt-engineering/"
      ],
      [
       "Anthropic: Prompt Engineering Overview",
       "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
      ]
     ],
     "nr": 57,
     "track": "ai"
    },
    {
     "t": "Token und Kosten",
     "was": "KI rechnet in Tokens (Wort-Teile). Je mehr Text rein und raus geht, desto mehr Tokens - und danach richten sich die Kosten.",
     "pts": [
      "Token = kleines Text-Stueck (ca. 4 Zeichen)",
      "Input + Output = Tokens = Kosten",
      "Laengere Prompts kosten mehr",
      "Kurz und gezielt spart Geld"
     ],
     "yt": "was sind tokens LLM erklaert",
     "src": [
      "Anthropic: Token & Pricing",
      "https://docs.anthropic.com/en/docs/about-claude/pricing"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "KI-Sprachmodelle rechnen nicht in Wörtern, sondern in Tokens - kleinen Textbausteinen. Ein Token ist grob 3-4 Zeichen; ein längeres Wort kann aus mehreren Tokens bestehen. Faustregel: 100 Tokens ≈ 75 englische Wörter (Deutsch oft etwas mehr Tokens).",
        "Wichtig fürs Geld: Fast alle Anbieter rechnen pro Token ab - für den Text, den du hineingibst (Input), UND für den Text, den die KI erzeugt (Output)."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Vor der Verarbeitung zerlegt ein 'Tokenizer' den Text in Tokens. Das Modell verarbeitet und erzeugt Tokens; am Ende werden sie wieder zu lesbarem Text.",
        "Jedes Modell hat ein Kontextfenster (Context Window) - die maximale Zahl an Tokens für Eingabe + Ausgabe zusammen. Ist der Text länger, muss man kürzen oder aufteilen.",
        "Kosten = (Input-Tokens × Input-Preis) + (Output-Tokens × Output-Preis). Output ist oft teurer als Input."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis: Kosten steuern)",
       "p": [
        "Kurz und gezielt prompten: unnötig langer Kontext kostet bei JEDEM Aufruf mit.",
        "Das richtige Modell wählen: für einfache Aufgaben ein kleines/günstiges Modell (SLM), nur für Schwieriges ein großes.",
        "Bei RAG nur die wirklich relevanten Chunks mitgeben, nicht ganze Dokumente.",
        "Caching nutzen (wiederkehrende Kontexte), Antwortlänge begrenzen, und die Kosten laufend überwachen (siehe AI Cost Monitoring).",
        "In der Bank: Kosten pro Gespräch grob kalkulieren und Budgets/Alarme setzen, damit ein Bot nicht unbemerkt teuer wird."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Bot, der bei jeder Frage das komplette 20-Seiten-Handbuch mitschickt, verbraucht pro Anfrage zehntausende Tokens - unnötig teuer. Mit RAG schickt er nur die 2-3 passenden Chunks (ein paar hundert Tokens) und liefert dieselbe Antwort für einen Bruchteil der Kosten."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Deutsch und Fachbegriffe/Zahlen erzeugen oft mehr Tokens als erwartet - lieber real messen (Tokenizer-Tools).",
        "Typischer Fehler: das teuerste Modell für alles nehmen.",
        "Zu langer Kontext 'für alle Fälle' - bläht Kosten und kann die Qualität sogar senken.",
        "Kosten nicht überwachen und am Monatsende überrascht werden."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Passt zu: LLM-Grundlagen, RAG (spart Tokens) und AI Cost Monitoring. Die Anthropic-Preisseite und der OpenAI-Tokenizer unten zeigen konkret, wie Tokens gezählt und abgerechnet werden."
       ]
      }
     ],
     "web": [
      [
       "Anthropic: Pricing & Tokens",
       "https://docs.anthropic.com/en/docs/about-claude/pricing"
      ],
      [
       "OpenAI: Tokenizer & wie Tokens zaehlen",
       "https://platform.openai.com/tokenizer"
      ],
      [
       "Alexander Thamm: LLM-Grundlagen (Tokens)",
       "https://www.alexanderthamm.com/de/blog/large-language-models-eine-einfuehrung/"
      ]
     ],
     "nr": 58,
     "track": "ai"
    },
    {
     "t": "Halluzinationen",
     "was": "Eine Halluzination ist, wenn die KI etwas Falsches sehr ueberzeugend behauptet. Sie 'erfindet' dann Fakten. Deshalb muss man wichtige Antworten pruefen.",
     "pts": [
      "Halluzination = ueberzeugend erfundene Falschinfo",
      "Passiert, weil KI Wahrscheinlichkeiten raet",
      "Gefahr in Banken: falsche Auskunft",
      "Gegenmittel: Grounding/RAG und Pruefung"
     ],
     "yt": "AI Halluzinationen erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Fraunhofer: Vertrauenswuerdige KI",
       "https://www.iis.fraunhofer.de/de/ff/ki.html"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Eine Halluzination ist, wenn eine KI etwas Falsches behauptet - aber so überzeugend und flüssig, dass es echt klingt. Die KI 'lügt' nicht absichtlich; sie erzeugt einfach die statistisch plausibelste Wortfolge, auch wenn diese sachlich falsch ist.",
        "Genau das macht Halluzinationen in der Bank gefährlich: Eine falsche Auskunft zu Gebühren, Fristen oder Rechten kann echten Schaden anrichten. Deshalb muss man sie verstehen und aktiv eindämmen."
       ]
      },
      {
       "h": "Warum es passiert (Ursachen)",
       "p": [
        "Ein LLM sagt immer nur das wahrscheinlichste nächste Wort voraus - es hat kein echtes 'Wissen' und keine Wahrheitsprüfung eingebaut.",
        "Häufige Ursachen laut den Fachquellen: fehlerhafte oder unvollständige Trainingsdaten; veraltete Daten (das Modell kennt eure heutigen Konditionen nicht); fehlendes Spezialwissen; und die Grundfunktion selbst (plausibel statt korrekt).",
        "Besonders oft passiert es bei sehr speziellen Fragen, zu denen das Modell nichts gelernt hat - dann 'füllt' es die Lücke mit erfundenen, aber glaubwürdig klingenden Details."
       ]
      },
      {
       "h": "Wie man es einsetzt/verhindert (Praxis)",
       "p": [
        "Der wichtigste Gegenmechanismus ist Grounding per RAG: Man gibt dem Modell vor der Antwort echte, geprüfte Dokumente und lässt es NUR daraus antworten. Ein gutes System gibt zu, wenn der Kontext nicht ausreicht, statt zu raten.",
        "Weitere Maßnahmen: Quellen anzeigen (damit man prüfen kann), klare Prompts ('Antworte nur aus dem gegebenen Kontext; wenn unklar, sage das'), Temperatur/Kreativität niedrig halten, und bei heiklen Themen einen Menschen prüfen lassen (Human-in-the-loop).",
        "In der Bank: Für rechts- oder geldrelevante Auskünfte nie ein rohes LLM ohne Quellen einsetzen - immer RAG plus Prüfung."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Frage: 'Bis wann kann ich eine Überweisung zurückrufen?' Ein rohes LLM erfindet vielleicht selbstbewusst 'innerhalb von 24 Stunden'. Mit Grounding sucht das System die echte Hausregel und antwortet korrekt mit Quelle - oder sagt ehrlich, dass es dazu keine Info hat und verbindet an einen Mitarbeiter."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Man kann Halluzinationen stark reduzieren, aber nie zu 100 % ausschließen - deshalb bleibt Prüfung wichtig.",
        "Typischer Fehler: dem flüssigen, selbstsicheren Ton der KI vertrauen ('klingt richtig, also ist es richtig').",
        "Ohne Quellenangabe kann niemand die Antwort kontrollieren.",
        "Kein Fallback für 'weiß ich nicht' - dann rät die KI, statt zu übergeben."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt danach im Plan: Grounding und die ganze RAG-Kette. Der Fraunhofer-IESE-Text unten erklärt Ursachen und Gegenmittel ausführlich und seriös auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "Fraunhofer IESE: Halluzinationen von GenAI/LLMs",
       "https://www.iese.fraunhofer.de/blog/halluzinationen-generative-ki-llm/"
      ],
      [
       "Google Cloud: Was sind KI-Halluzinationen?",
       "https://cloud.google.com/discover/what-are-ai-hallucinations"
      ],
      [
       "IBM: Was sind KI-Halluzinationen?",
       "https://www.ibm.com/think/topics/ai-hallucinations"
      ],
      [
       "mindsquare: KI-Halluzinationen erkennen & vermeiden",
       "https://mindsquare.de/fachartikel/kuenstliche-intelligenz/ki-halluzinationen/"
      ]
     ],
     "nr": 59,
     "track": "ai"
    },
    {
     "t": "Grounding",
     "was": "Grounding heisst 'auf den Boden der Fakten stellen': man gibt der KI echte Quellen, damit sie daraus antwortet und weniger erfindet.",
     "pts": [
      "Grounding = Antwort auf echte Quellen stuetzen",
      "Reduziert Halluzinationen",
      "Basis fuer RAG",
      "Wichtig fuer verlaessliche Bank-Antworten"
     ],
     "yt": "grounding LLM explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Grounding heißt wörtlich 'erden' - die KI-Antwort wird auf den Boden echter, geprüfter Fakten gestellt. Statt frei aus dem Gedächtnis zu reden, stützt sich die KI auf konkrete Quellen, die man ihr mitgibt.",
        "Grounding ist das wichtigste Gegenmittel gegen Halluzinationen und die Voraussetzung für vertrauenswürdige KI in einer Bank."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Der Ablauf: 1. Die Frage kommt rein. 2. Das System sucht in glaubwürdigen Quellen (eure Dokumente, eine Datenbank, eine Live-Suche) die passenden Fakten. 3. Diese Fakten werden dem LLM zusammen mit der Frage übergeben. 4. Das LLM formuliert die Antwort aus diesen Fakten - idealerweise mit Quellenangabe.",
        "Technisch ist Retrieval Augmented Generation (RAG) die häufigste Form von Grounding. Ein gut 'geerdetes' System sagt außerdem ehrlich, wenn die Quellen nicht ausreichen, statt etwas zu erfinden."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Man verbindet das LLM mit einer verlässlichen Wissensquelle: interne Knowledge Base, Produktdatenbank, geprüfte Handbücher. Im Genesys-Teil ist genau das die Knowledge Base, die man mit dem Bot Flow verbindet.",
        "Wichtig: Nur geprüfte, aktuelle Quellen anbinden - Grounding auf schlechte Quellen erdet auf falschen Fakten.",
        "In der Bank sorgt Grounding dafür, dass Auskünfte zu Konto, Karte und Kredit aus den offiziellen Unterlagen kommen und mit Quelle belegbar sind - wichtig für Kundenvertrauen und Aufsicht."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ohne Grounding: 'Ihr Tageslimit beträgt vermutlich 1.000 €' (geraten). Mit Grounding: Das System liest das hinterlegte Limit des Kunden aus dem System und antwortet: 'Ihr aktuelles Tageslimit beträgt 1.500 € (Quelle: Kontoeinstellungen).'"
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Grounding ist nur so gut wie die Quelle: veraltete oder falsche Dokumente führen zu falschen, aber 'belegten' Antworten.",
        "Findet die Suche die falsche Stelle, wird selbstbewusst falsch geantwortet - deshalb regelmäßig evaluieren.",
        "Typischer Fehler: Grounding einbauen, aber keine Quelle anzeigen - dann bleibt die Prüfbarkeit auf der Strecke.",
        "Kein Plan für 'nichts Passendes gefunden' - der Bot sollte dann übergeben statt zu raten."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Grounding und Halluzinationen gehören zusammen; danach folgt die komplette RAG-Kette (Embeddings, Vector Search, Chunking, Evaluation). Die Fraunhofer-Quelle unten ordnet beides gut ein."
       ]
      }
     ],
     "web": [
      [
       "Fraunhofer IESE: Halluzinationen & Gegenmittel",
       "https://www.iese.fraunhofer.de/blog/halluzinationen-generative-ki-llm/"
      ],
      [
       "undetectable.ai: Grounding and Hallucinations in AI",
       "https://undetectable.ai/blog/grounding-and-hallucinations-in-ai/"
      ],
      [
       "copilotenschule.de: KI-Halluzinationen vermeiden",
       "https://copilotenschule.de/wissen/ki-halluzinationen-vermeiden"
      ]
     ],
     "nr": 60,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "RAG & Suche",
   "emoji": "🔎",
   "ziel": "Der KI aktuelles, eigenes Wissen geben - die wichtigste Technik fuer Firmen-Bots.",
   "topics": [
    {
     "t": "Retrieval Augmented Generation",
     "was": "RAG heisst: erst passendes Wissen suchen, dann die KI daraus antworten lassen. So nutzt der Bot euer eigenes, aktuelles Wissen statt zu raten.",
     "pts": [
      "RAG = Suchen + Antworten kombinieren",
      "1. Frage -> passende Dokumente finden",
      "2. Diese Dokumente der KI geben",
      "3. KI antwortet nur daraus (weniger Halluzination)"
     ],
     "yt": "RAG Retrieval Augmented Generation erklaert deutsch",
     "src": null,
     "gh": [
      [
       "LlamaIndex (RAG Framework)",
       "https://github.com/run-llama/llama_index"
      ],
      [
       "LangChain",
       "https://github.com/langchain-ai/langchain"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein Sprachmodell (LLM) wie ChatGPT hat sehr viel gelernt, aber es kennt weder eure internen Unterlagen noch die neuesten Preise, Konditionen oder Hausregeln eurer Bank. Wenn man es einfach fragt, rät es notfalls - und rät manchmal falsch (das nennt man Halluzination).",
        "Retrieval Augmented Generation (RAG) löst genau dieses Problem. Der Trick ist einfach: Bevor die KI antwortet, sucht das System zuerst in euren echten Dokumenten nach der passenden Stelle und legt sie der KI vor. Die KI formuliert dann die Antwort NUR aus diesem gefundenen Wissen. 'Augmented' heißt 'angereichert': Die Antwort der KI wird mit eurem eigenen Wissen angereichert.",
        "Ein Bild dazu: Stell dir einen sehr klugen neuen Mitarbeiter vor, der alles Allgemeine weiß, aber eure Bank noch nicht kennt. RAG ist so, als würdest du ihm vor jeder Kundenfrage schnell die richtige Seite aus dem Handbuch auf den Tisch legen. Er liest sie und antwortet daraus - statt aus dem Bauch."
       ]
      },
      {
       "h": "Wie es funktioniert (Schritt für Schritt)",
       "p": [
        "1. Vorbereitung (einmalig): Alle eure Unterlagen - PDFs, Wikis, Handbücher, FAQ - werden eingesammelt und gereinigt. Dann werden sie in kleine Stücke geschnitten (Chunks), damit man später gezielt die richtige Stelle findet.",
        "2. Embeddings: Jedes Textstück wird in eine Zahlenreihe (Vektor) umgewandelt, die seine Bedeutung darstellt. Ähnliche Bedeutungen bekommen ähnliche Zahlen. Diese Zahlen werden in einer Vector Database gespeichert.",
        "3. Frage kommt rein: Stellt ein Kunde eine Frage, wird auch die Frage in so eine Zahlenreihe umgewandelt.",
        "4. Suche (Retrieval): Das System vergleicht die Frage-Zahlen mit allen gespeicherten Text-Zahlen und holt die am besten passenden Textstücke heraus - nach Bedeutung, nicht nach exakten Wörtern.",
        "5. Antwort (Generation): Die gefundenen Textstücke werden zusammen mit der Frage an das LLM gegeben, mit der Anweisung: 'Antworte nur aus diesem Wissen.' Das LLM formuliert daraus eine klare, natürliche Antwort - oft mit Quellenangabe."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis in der Bank)",
       "p": [
        "RAG ist die wichtigste Technik, um in einer Bank einen vertrauenswürdigen KI-Assistenten zu bauen, weil die Antworten auf echten, geprüften Dokumenten beruhen und man die Quelle anzeigen kann.",
        "Typische Wissensquellen sind laut Praxis-Berichten: interne Wikis, Produkt- und Konditionsblätter, Verträge, Richtlinien, Support-Artikel, Handbücher und Datenbanken. Genau dieselbe Idee steckt hinter der Genesys Knowledge Base, die ihr im Genesys-Teil dieses Plans lernt - Genesys nutzt RAG-ähnliche Technik im Hintergrund.",
        "Einsatzfelder in der Bank: ein Kundenservice-Bot, der Fragen zu Konto, Karte und Kredit aus den offiziellen Unterlagen beantwortet; ein Agent-Assist-System, das dem Mitarbeiter live den passenden Wissens-Artikel einblendet; ein internes Suchsystem, in dem Mitarbeiter Regelwerke in Sekunden durchsuchen."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Kunde fragt den Bot: 'Was kostet eine Ersatzkarte?' Ohne RAG würde die KI vielleicht irgendeinen Betrag raten. Mit RAG sucht das System zuerst im aktuellen Preis- und Leistungsverzeichnis, findet den Abschnitt 'Kartenservice - Ersatzkarte: 10 Euro' und die KI antwortet: 'Eine Ersatzkarte kostet 10 Euro (Quelle: Preisverzeichnis, Stand Juli 2026).'",
        "Ändert die Bank morgen den Preis, muss man NICHT die KI neu trainieren - man aktualisiert einfach das Dokument. Beim nächsten Mal findet die Suche automatisch den neuen Wert. Das ist der große Vorteil gegenüber Fine-Tuning."
       ]
      },
      {
       "h": "Vorteile",
       "p": [
        "Weniger Halluzinationen: Die KI antwortet aus echten Quellen statt aus dem Bauch.",
        "Immer aktuell: Neues Wissen = einfach neues Dokument einpflegen, kein teures Neutraining.",
        "Nachvollziehbar: Man kann die Quelle jeder Antwort anzeigen - wichtig für Vertrauen und Aufsicht.",
        "Datenschutzfreundlicher: Das eigene Wissen bleibt in eurem System; man muss es nicht in ein fremdes Modell 'einbrennen'."
       ]
      },
      {
       "h": "Grenzen, Risiken & Datenschutz",
       "p": [
        "RAG ist nur so gut wie eure Dokumente. Sind sie veraltet, widersprüchlich oder schlecht geschrieben, gibt die KI auch schlechte Antworten ('garbage in, garbage out').",
        "Findet die Suche die falsche Stelle, antwortet die KI selbstbewusst falsch. Deshalb sind gutes Chunking und regelmäßige Prüfung (RAG Evaluation) wichtig.",
        "In der Bank gilt: Auch bei RAG dürfen keine sensiblen Kundendaten ungeschützt in externe Modelle fließen. Man klärt vorher, wo das LLM läuft (EU-Region oder On-Prem) und was gespeichert wird - siehe DSGVO und Private AI im AI-Teil dieses Plans."
       ]
      },
      {
       "h": "Typische Fehler",
       "p": [
        "Chunks zu groß (die KI bekommt zu viel Beiwerk) oder zu klein (der Zusammenhang fehlt).",
        "Keine Quellenangabe - dann kann niemand die Antwort prüfen.",
        "Kein Plan für 'nichts gefunden': Der Bot sollte dann ehrlich sagen, dass er es nicht weiß, und an einen Menschen übergeben, statt zu raten.",
        "Wissen wird einmal eingepflegt und nie gepflegt - dann veraltet der Bot schleichend."
       ]
      },
      {
       "h": "Best Practices / Checkliste",
       "p": [
        "Dokumente sauber, kurz und eindeutig halten (eine Frage - eine Antwort).",
        "Immer die Quelle mit anzeigen.",
        "Regelmäßig mit echten Testfragen prüfen, ob die Antworten stimmen (Evaluation).",
        "Feedback der Nutzer (Daumen hoch/runter) einsammeln und Wissenslücken schließen.",
        "Klaren Fallback bauen: Bei Unsicherheit nachfragen oder an einen Menschen übergeben."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Im AI-Teil dieses Plans gehören die Themen Embeddings, Vector Search, Chunking, RAG Architektur und RAG Evaluation direkt dazu - arbeite sie in dieser Reihenfolge durch.",
        "Die Fraunhofer- und virtido-Texte unten erklären RAG noch einmal ausführlich und mit Praxis-Beispielen. Zum Selbst-Ausprobieren eignen sich die GitHub-Bibliotheken LlamaIndex und LangChain."
       ]
      }
     ],
     "web": [
      [
       "Fraunhofer IESE: RAG - Chat mit eigenen Daten",
       "https://www.iese.fraunhofer.de/blog/retrieval-augmented-generation-rag/"
      ],
      [
       "virtido: Was ist RAG? Kompletter Leitfaden 2026",
       "https://virtido.com/de/blog/was-ist-rag-retrieval-augmented-generation-leitfaden"
      ],
      [
       "zweitag: Wie funktioniert RAG?",
       "https://www.zweitag.de/en/blog/wie-funktioniert-retrieval-augmented-generation-rag"
      ],
      [
       "moin.ai: RAG einfach erklaert",
       "https://www.moin.ai/en/chatbot-wiki/retrieval-augmented-generation-rag"
      ]
     ],
     "nr": 61,
     "track": "ai"
    },
    {
     "t": "Embeddings",
     "was": "Ein Embedding verwandelt Text in Zahlen (einen 'Fingerabdruck'). Aehnliche Bedeutungen bekommen aehnliche Zahlen - so kann man nach Sinn suchen.",
     "pts": [
      "Embedding = Text als Zahlenreihe (Vektor)",
      "Aehnlicher Sinn = aehnliche Zahlen",
      "Grundlage fuer semantische Suche",
      "Wird einmal berechnet und gespeichert"
     ],
     "yt": "was sind embeddings erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein Embedding verwandelt Text (oder Bilder, Ton) in eine lange Liste von Zahlen - einen Vektor. Dieser Vektor ist wie ein 'Bedeutungs-Fingerabdruck': Texte mit ähnlicher Bedeutung bekommen ähnliche Zahlen.",
        "Das ist der Trick, mit dem ein Computer plötzlich 'Bedeutung' vergleichen kann, obwohl er eigentlich nur rechnet. Statt Buchstaben zu vergleichen, vergleicht er Zahlen - und ähnliche Zahlen heißt ähnliche Bedeutung."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Ein spezielles KI-Modell (Embedding-Modell) liest einen Text und gibt einen Vektor zurück - typischerweise mehrere hundert bis tausend Zahlen lang.",
        "Jede Zahl steht für einen winzigen Bedeutungs-Aspekt. Man kann sich das wie Koordinaten in einem riesigen 'Bedeutungs-Raum' vorstellen: 'Katze' und 'Hund' liegen nah beieinander (beides Haustiere), 'Katze' und 'Kontoauszug' weit auseinander.",
        "Wie ähnlich zwei Texte sind, misst man über den Abstand ihrer Vektoren. Kleiner Abstand = ähnliche Bedeutung. Ein bekanntes frühes Beispiel ist Word2Vec, das Wörter aus ihrem Kontext heraus in Vektoren umwandelt."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Embeddings sind die Grundlage jeder modernen semantischen Suche und jedes RAG-Systems. Man wandelt alle eigenen Dokumente einmal in Embeddings um und speichert sie in einer Vector Database.",
        "Kommt eine Frage, wird auch sie in ein Embedding umgewandelt, und das System findet die Dokumente mit dem geringsten Abstand - also der ähnlichsten Bedeutung.",
        "In der Bank heißt das: Ein Kunde fragt 'Karte weg', und das System findet den Artikel 'Karte verloren oder gestohlen', obwohl kein einziges Wort exakt übereinstimmt. Auch Empfehlungssysteme und das Gruppieren ähnlicher Kunden nutzen Embeddings."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Die Sätze 'Ich möchte mein Konto kündigen' und 'Wie löse ich mein Girokonto auf?' enthalten kaum gleiche Wörter, meinen aber dasselbe. Ihre Embeddings liegen sehr nah beieinander - deshalb findet der Bot für beide denselben richtigen Wissens-Artikel."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Embeddings kennen keine Aktualität: Ein einmal berechneter Vektor ändert sich nicht, wenn sich der Inhalt ändert - man muss neu einbetten, wenn Dokumente sich ändern.",
        "Verschiedene Embedding-Modelle sind nicht kompatibel: Frage und Dokumente müssen mit demselben Modell eingebettet werden.",
        "Für exakte Dinge (Kontonummern, genaue Beträge) ist reine Embedding-Suche schwach - dafür kombiniert man sie mit klassischer Wortsuche (Hybrid Search).",
        "Datenschutz: Auch Embeddings können Rückschlüsse auf den Originaltext zulassen - sie sind kein Ersatz für Anonymisierung."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt danach im Plan: Vector Search (wie man in Embeddings sucht), Chunking (wie man Texte vorher zuschneidet) und Semantic/Hybrid Search. Die Data-Basecamp-Quelle unten erklärt das Zusammenspiel mit RAG sehr anschaulich."
       ]
      }
     ],
     "web": [
      [
       "ki-trainingszentrum: Embeddings einfach erklaert",
       "https://ki-trainingszentrum.com/embeddings-einfach-erklaert-die-grundlage-moderner-ki-suche/"
      ],
      [
       "Data Basecamp: Vector Database, Embeddings & RAG",
       "https://databasecamp.de/daten/vector-database"
      ],
      [
       "ki.engineering: Embeddings - KI-Vektoren verstehen",
       "https://ki.engineering/glossar/embeddings/"
      ],
      [
       "Conciso: RAG und Embeddings einfach erklaert",
       "https://conciso.de/rag-und-embeddings-die-helfer-von-ki-systemen/"
      ]
     ],
     "nr": 62,
     "track": "ai"
    },
    {
     "t": "Vector Search",
     "was": "Vector Search sucht nicht nach genauen Woertern, sondern nach Bedeutung - ueber die Embedding-Zahlen findet sie die aehnlichsten Texte.",
     "pts": [
      "Sucht nach Bedeutung, nicht nach Wortgleichheit",
      "Vergleicht Embedding-Vektoren",
      "Findet auch bei anderer Wortwahl",
      "Braucht eine Vector Database"
     ],
     "yt": "vector search erklaert deutsch",
     "src": null,
     "gh": [
      [
       "FAISS (Vektorsuche)",
       "https://github.com/facebookresearch/faiss"
      ],
      [
       "Chroma Vector DB",
       "https://github.com/chroma-core/chroma"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Vector Search (Vektorsuche) ist eine Suche nach Bedeutung statt nach exakten Wörtern. Sie vergleicht die Embedding-Vektoren und findet die inhaltlich ähnlichsten Treffer.",
        "Die klassische Suche fragt: 'Welches Dokument enthält genau dieses Wort?' Die Vektorsuche fragt: 'Welches Dokument meint dasselbe?' - auch bei ganz anderer Wortwahl."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Alle Dokumente werden als Vektoren in einer Vector Database gespeichert. Bei einer Frage wird die Frage ebenfalls zu einem Vektor.",
        "Die Datenbank misst den Abstand zwischen dem Frage-Vektor und allen gespeicherten Vektoren und liefert die 'Top-k' nächsten Treffer (z.B. die 5 ähnlichsten Chunks).",
        "Bei Millionen Vektoren wäre ein Vergleich mit jedem einzelnen zu langsam. Deshalb nutzen Vektordatenbanken clevere Verfahren (ANN - Approximate Nearest Neighbor), die fast so genau, aber viel schneller sind."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Vector Search ist der 'Retrieval'-Schritt in RAG: Die gefundenen Top-k Chunks werden dem LLM als Kontext übergeben.",
        "Laut den Fachquellen gibt es zwei Wege: dedizierte Vektordatenbanken (z.B. Pinecone, Weaviate, Milvus, Chroma) oder bestehende Datenbanken mit Vektor-Erweiterung (PostgreSQL + pgvector, MongoDB Atlas, Elasticsearch, Redis). Letzteres vermeidet ein zweites System und reduziert Abhängigkeiten (Lock-in).",
        "In der Bank: Damit durchsucht ein Bot Handbücher und Richtlinien nach Bedeutung; auch Betrugsabwehr und Empfehlungen nutzen Ähnlichkeitssuche."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Frage: 'Was passiert, wenn ich meine PIN dreimal falsch eingebe?' Die Vektorsuche findet den Chunk aus dem Sicherheitsleitfaden über 'Kartensperrung nach fehlerhafter PIN-Eingabe' - selbst wenn dort das Wort 'dreimal' gar nicht vorkommt, sondern 'nach mehreren Fehlversuchen'."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Zu viele oder zu wenige Treffer (k) einstellen: zu wenige = wichtige Info fehlt, zu viele = das LLM wird mit Beiwerk zugemüllt.",
        "Rein semantisch reicht nicht bei exakten Begriffen/Nummern - dann Hybrid Search (Wort + Bedeutung) nutzen.",
        "Qualität steht und fällt mit gutem Chunking und gutem Embedding-Modell.",
        "Datenschutz/Region beachten: Wo liegt die Vektordatenbank? In der Bank möglichst EU/On-Prem."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Davor: Embeddings. Danach: Chunking, RAG-Architektur, Hybrid Search. Der Google-Cloud- und der IONOS-Text unten erklären Vektordatenbanken einsteigerfreundlich."
       ]
      }
     ],
     "web": [
      [
       "Google Cloud: Was ist eine Vektordatenbank?",
       "https://cloud.google.com/discover/what-is-a-vector-database"
      ],
      [
       "it-schulungen.com: Vektordatenbanken im Ueberblick",
       "https://www.it-schulungen.com/wir-ueber-uns/wissensblog/vektordatenbanken-im-ueberblick-architektur-anbieterbeispiele-und-einsatzszenarien.html"
      ],
      [
       "Elastic: Was ist eine Vektordatenbank?",
       "https://www.elastic.co/de/what-is/vector-database"
      ],
      [
       "IONOS: Vektordatenbank - was ist das?",
       "https://www.ionos.com/digitalguide/server/know-how/vector-database/"
      ]
     ],
     "nr": 63,
     "track": "ai"
    },
    {
     "t": "Chunking",
     "was": "Chunking heisst, lange Dokumente in kleine Haeppchen (Chunks) zu schneiden, damit die Suche gezielt die richtige Stelle findet.",
     "pts": [
      "Chunk = kleines Text-Stueck",
      "Grosse Texte in Stuecke teilen",
      "Zu gross = ungenau, zu klein = Zusammenhang fehlt",
      "Oft mit Overlap (Ueberlappung)"
     ],
     "yt": "chunking RAG erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Chunking heißt, lange Dokumente in kleine, sinnvolle Stücke (Chunks) zu schneiden, bevor man sie in Embeddings umwandelt und speichert.",
        "Warum? Ein ganzes 50-Seiten-Handbuch als ein Stück wäre für die Suche unbrauchbar - man würde nie die genaue Stelle finden. Kleine Häppchen lassen die Suche gezielt die richtige Passage liefern."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Man legt eine Chunk-Größe fest (oft in Tokens) und meist einen Overlap (Überlappung), damit an den Schnittstellen kein Zusammenhang verloren geht.",
        "Gängige Strategien laut den Quellen: Fixed-size (feste Größe, einfachster Weg), Recursive (schneidet an natürlichen Grenzen wie Absätzen/Sätzen) und Sliding-Window (überlappende Fenster). Recursive erhält den Sinn oft besser."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis) & Richtwerte",
       "p": [
        "Ein bewährter Startpunkt aus der Praxis: RecursiveCharacterTextSplitter mit ca. 512 Tokens und 50 Tokens Overlap - das funktioniert laut Databricks/IBM für rund 80 % der Fälle. Alternativ ~250 Tokens (~1000 Zeichen) als kleinerer Start.",
        "Faustregel: Chunks groß genug für sinnvollen Zusammenhang, aber klein genug, um genau zu bleiben. Wichtig: An den eigenen Daten und echten Fragen testen (benchmarken), nicht raten.",
        "In der Bank: Ein Preis- und Leistungsverzeichnis schneidet man sinnvollerweise pro Leistung/Abschnitt, nicht mitten im Satz - so liefert die Suche saubere, vollständige Antworten."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Schlechtes Chunking: Ein Chunk endet mitten in 'Die Gebühr beträgt' - der Betrag steht im nächsten Chunk. Die KI findet nur die Hälfte und antwortet unvollständig.",
        "Gutes Chunking: Der ganze Absatz 'Kontoführungsgebühr: 4,90 € pro Monat, entfällt ab 700 € Geldeingang' bleibt zusammen - die Antwort stimmt."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Zu große Chunks: Die Suche wird ungenau, das LLM bekommt zu viel Beiwerk (und es kostet mehr Tokens).",
        "Zu kleine Chunks: Der Zusammenhang zerbricht, Antworten werden lückenhaft.",
        "Kein Overlap: An den Schnittkanten geht Information verloren.",
        "Tabellen/Listen stur nach Zeichen schneiden zerstört ihre Bedeutung - hier braucht es strukturbewusstes Chunking."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Chunking ist der erste Schritt der RAG-Pipeline (davor: Dokumente laden; danach: Embeddings, Vector Search). Die IBM- und Unstructured-Guides unten zeigen konkrete Strategien mit Beispielen."
       ]
      }
     ],
     "web": [
      [
       "IBM: Chunking-Strategien fuer RAG (Tutorial)",
       "https://www.ibm.com/think/tutorials/chunking-strategies-for-rag-with-langchain-watsonx-ai"
      ],
      [
       "Unstructured: Chunking for RAG - Best Practices",
       "https://unstructured.io/blog/chunking-for-rag-best-practices"
      ],
      [
       "Databricks: Ultimate Guide to Chunking Strategies",
       "https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089"
      ]
     ],
     "nr": 64,
     "track": "ai"
    },
    {
     "t": "RAG Architektur",
     "was": "Die RAG-Architektur ist der komplette Bauplan: Dokumente vorbereiten, in Embeddings umwandeln, speichern, suchen und die KI antworten lassen.",
     "pts": [
      "Ingestion: Dokumente laden + chunken + embedden",
      "Storage: in Vector DB speichern",
      "Retrieval: passende Chunks finden",
      "Generation: KI antwortet mit den Chunks"
     ],
     "yt": "RAG architecture explained",
     "src": null,
     "gh": [
      [
       "LangChain",
       "https://github.com/langchain-ai/langchain"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Die RAG-Architektur ist der komplette Bauplan eines Wissens-Bots: Sie beschreibt, wie eure Dokumente zu durchsuchbarem Wissen werden und wie daraus am Ende eine belegte Antwort entsteht.",
        "Man teilt sie in zwei Phasen: die Vorbereitung (einmalig, offline) und die Beantwortung (bei jeder Frage, live)."
       ]
      },
      {
       "h": "Phase 1: Vorbereitung (Ingestion)",
       "p": [
        "1. Laden: Dokumente aus Quellen einsammeln (PDFs, Wiki, Datenbank).",
        "2. Chunking: in sinnvolle Stücke schneiden.",
        "3. Embeddings: jedes Stück in einen Vektor umwandeln.",
        "4. Speichern: die Vektoren in einer Vector Database ablegen (Index).",
        "Diese Phase läuft im Hintergrund und wird wiederholt, wenn sich Dokumente ändern."
       ]
      },
      {
       "h": "Phase 2: Beantwortung (Retrieval + Generation)",
       "p": [
        "5. Frage einbetten: die Nutzerfrage wird zum Vektor.",
        "6. Retrieval: die ähnlichsten Chunks werden gesucht (Vector/Hybrid Search).",
        "7. Prompt bauen: Frage + gefundene Chunks + Regeln ('nur daraus antworten').",
        "8. Generation: das LLM formuliert die Antwort, idealerweise mit Quellenangabe.",
        "Optional gibt es Bausteine wie Re-Ranking (Treffer neu sortieren) oder Guardrails."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Man muss das nicht selbst programmieren: Frameworks wie LangChain und LlamaIndex liefern fertige Bausteine für jeden Schritt. In Genesys übernimmt die Knowledge-Funktion vieles davon im Hintergrund.",
        "Wichtig ist, jeden Schritt einzeln gut zu machen - die schwächste Stelle bestimmt die Qualität (schlechtes Chunking verdirbt auch das beste LLM).",
        "In der Bank achtet man zusätzlich auf: EU-/On-Prem-Betrieb, Zugriffsrechte (wer darf welches Wissen sehen) und Protokollierung (Audit)."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein neues Preisverzeichnis erscheint: Phase 1 läuft automatisch (laden, chunken, einbetten, speichern). Ab sofort liefert Phase 2 bei jeder Preisfrage die aktuelle Antwort - ohne dass das Modell neu trainiert werden musste."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Nur ein Schritt schlecht (z.B. Chunking) - und die ganze Kette liefert schlechte Antworten.",
        "Kein Re-Ranking/Filter bei vielen Treffern - das LLM bekommt Unpassendes.",
        "Keine Rechte-Trennung: der Bot zeigt Wissen, das der Nutzer nicht sehen darf.",
        "Kein Monitoring - Qualität sinkt unbemerkt (siehe RAG Monitoring/Evaluation)."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Setzt alle Einzelteile zusammen: Embeddings, Vector Search, Chunking, Hybrid Search - und führt zu RAG Evaluation und RAG Monitoring. Die Fraunhofer- und virtido-Leitfäden unten zeigen die Architektur im Zusammenhang."
       ]
      }
     ],
     "web": [
      [
       "Fraunhofer IESE: RAG - Chat mit eigenen Daten",
       "https://www.iese.fraunhofer.de/blog/retrieval-augmented-generation-rag/"
      ],
      [
       "virtido: RAG Leitfaden 2026",
       "https://virtido.com/de/blog/was-ist-rag-retrieval-augmented-generation-leitfaden"
      ],
      [
       "LangChain (GitHub)",
       "https://github.com/langchain-ai/langchain"
      ],
      [
       "LlamaIndex (GitHub)",
       "https://github.com/run-llama/llama_index"
      ]
     ],
     "nr": 65,
     "track": "ai"
    },
    {
     "t": "RAG Evaluation",
     "was": "RAG Evaluation prueft, ob der Bot gute, korrekte Antworten gibt: Findet er das richtige Wissen? Stimmt die Antwort?",
     "pts": [
      "Retrieval pruefen: richtiges Dokument gefunden?",
      "Antwort pruefen: korrekt und belegt?",
      "Metriken: Faithfulness, Relevanz",
      "Mit Testfragen regelmaessig messen"
     ],
     "yt": "RAG evaluation metrics",
     "src": null,
     "gh": [
      [
       "Ragas (RAG Evaluation)",
       "https://github.com/explodinggradients/ragas"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "RAG Evaluation heißt: systematisch messen, ob euer Wissens-Bot gute Antworten gibt. Nicht 'gefühlt gut', sondern mit klaren Kennzahlen und Testfragen.",
        "Man prüft dabei zwei Dinge getrennt: Hat die Suche das richtige Wissen gefunden (Retrieval)? Und hat die KI daraus eine korrekte, belegte Antwort gemacht (Generation)?"
       ]
      },
      {
       "h": "Die wichtigsten Metriken",
       "p": [
        "Faithfulness (Treue): Bleibt die Antwort wirklich beim gefundenen Kontext oder erfindet sie dazu? Zentrale Metrik gegen Halluzinationen.",
        "Answer Relevancy: Passt die Antwort zur Frage?",
        "Context Recall/Precision: Wurde das relevante Wissen gefunden - und ohne zu viel Unpassendes?",
        "Retrieval-Kennzahlen wie Hit Rate und Mean Reciprocal Rank zeigen, ob und an welcher Stelle die richtige Quelle gefunden wurde."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Man legt ein Test-Set mit echten Fragen und den erwarteten (richtigen) Antworten/Quellen an. Damit misst man automatisch bei jeder Änderung, ob der Bot besser oder schlechter wird.",
        "Ein beliebtes, kostenloses Framework ist Ragas (Faithfulness, Answer Relevancy, Context Recall). Verbreitet ist auch 'LLM-as-a-Judge': Ein starkes LLM bewertet die Antworten nach festen Kriterien - günstiger als reine Handarbeit.",
        "In der Bank ist das Pflicht: Man muss nachweisen können, dass Auskünfte korrekt und belegt sind - für Qualität und Aufsicht."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Nach einer Änderung am Chunking steigt die Antwortqualität im Test scheinbar. Die Evaluation zeigt aber: Faithfulness ist gesunken - die KI erfindet jetzt mehr. So erkennt man das Problem VOR dem Live-Gang, nicht erst beim Kunden."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Kein Test-Set: Man 'fühlt' Qualität, statt sie zu messen - der häufigste Fehler.",
        "Nur die Endantwort prüfen: Dann weiß man nicht, ob Suche oder Formulierung schuld ist (getrennt messen!).",
        "Einmal evaluieren und nie wieder: Qualität driftet mit neuen Daten/Fragen.",
        "'LLM-as-a-Judge' blind vertrauen - auch der Judge kann irren; stichprobenhaft von Menschen prüfen lassen."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Gehört zu RAG Architektur und führt zu RAG Monitoring (dasselbe im Live-Betrieb). Die codecentric- und IT-Sonix-Texte unten zeigen Evaluation in der Praxis; Ragas ist das Werkzeug zum Selbermachen."
       ]
      }
     ],
     "web": [
      [
       "codecentric: RAG Evaluation (Praxis)",
       "https://www.codecentric.de/wissens-hub/blog/genai-fuer-full-stack-entwicklerinnen-rag-evaluation-mit-typescript-teil-3"
      ],
      [
       "IT Sonix: RAG-Systeme im Praxis-Test",
       "https://www.itsonix.eu/de/blog/25092025-rag-systeme-im-praxis-test-von-ersten-erfolgen-zu-nachhaltiger-qualitaet"
      ],
      [
       "Ragas (GitHub) - RAG-Evaluation-Framework",
       "https://github.com/explodinggradients/ragas"
      ],
      [
       "Deepchecks: RAG Evaluation Metrics",
       "https://deepchecks.com/rag-evaluation-metrics-answer-relevancy-faithfulness-accuracy/"
      ]
     ],
     "nr": 66,
     "track": "ai"
    },
    {
     "t": "RAG Monitoring",
     "was": "RAG Monitoring heisst, den Bot im laufenden Betrieb zu ueberwachen: Wo findet er nichts? Wo sind Antworten schlecht?",
     "pts": [
      "Live-Ueberwachung der Antwortqualitaet",
      "Fehlende Treffer erkennen",
      "Nutzer-Feedback sammeln (Daumen hoch/runter)",
      "Wissensluecken schliessen"
     ],
     "yt": "RAG monitoring production",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "RAG Monitoring heißt: den Wissens-Bot im laufenden Betrieb überwachen. RAG Evaluation prüft VOR dem Live-Gang mit Testfragen; Monitoring beobachtet DANACH, was echte Nutzer erleben.",
        "Ein Bot ist nie 'fertig': Nutzer stellen neue Fragen, Dokumente veralten, die Qualität kann leise abrutschen. Monitoring macht das sichtbar, bevor Kunden sich beschweren."
       ]
      },
      {
       "h": "Was man überwacht",
       "p": [
        "Qualität: Wie oft findet die Suche nichts Passendes? Wie oft bewerten Nutzer die Antwort schlecht (Daumen runter)?",
        "Nutzung: Welche Fragen kommen am häufigsten? Wo bricht der Bot ab, wo wird an Menschen übergeben?",
        "Technik & Kosten: Antwortzeit, Fehler, Token-Verbrauch/Kosten.",
        "Sicherheit: verdächtige Eingaben (mögliche Prompt Injection)."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Man baut Feedback direkt ein (Daumen hoch/runter, 'War das hilfreich?') und protokolliert anonymisiert, welche Fragen zu 'nichts gefunden' führen - das sind die Wissenslücken, die man schließt.",
        "Werkzeuge wie Langfuse zeichnen jede Anfrage mit gefundenen Chunks, Antwort und Bewertung auf (Tracing/Observability). So sieht man genau, WO es hakt (Suche oder Formulierung).",
        "In der Bank kommt Audit-Logging dazu: Wer hat wann welche Auskunft bekommen - wichtig für Aufsicht und Nachvollziehbarkeit. Dabei Datenschutz beachten (PII sparsam, sicher speichern)."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Das Monitoring zeigt: Seit Montag häufen sich Fragen zu einem neuen Tagesgeld-Angebot, und der Bot findet nichts. Ursache: Der Artikel fehlt noch. Man pflegt ihn nach - und die 'nichts gefunden'-Rate für dieses Thema fällt sofort."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Kein Feedback-Knopf: Man erfährt nie, was Nutzer wirklich schlecht fanden.",
        "Nur Technik überwachen (läuft/schnell), aber nicht die Antwortqualität.",
        "Logs mit sensiblen Daten unsicher speichern - Datenschutzproblem.",
        "Daten sammeln, aber nie auswerten und nachbessern."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Bildet mit RAG Evaluation ein Paar (vorher/nachher) und verwandt mit AI Model Monitoring und Observability. Langfuse (unten) ist ein verbreitetes, offenes Werkzeug dafür."
       ]
      }
     ],
     "web": [
      [
       "Langfuse (GitHub) - LLM/RAG Observability",
       "https://github.com/langfuse/langfuse"
      ],
      [
       "IT Sonix: RAG-Systeme - nachhaltige Qualität",
       "https://www.itsonix.eu/de/blog/25092025-rag-systeme-im-praxis-test-von-ersten-erfolgen-zu-nachhaltiger-qualitaet"
      ],
      [
       "Fraunhofer IESE: RAG in der Praxis",
       "https://www.iese.fraunhofer.de/blog/retrieval-augmented-generation-rag/"
      ]
     ],
     "nr": 67,
     "track": "ai"
    },
    {
     "t": "Knowledge Graphs",
     "was": "Ein Knowledge Graph ist ein Netz aus Fakten und ihren Verbindungen, z.B. 'Kunde - hat - Konto - gehoert zu - Filiale'. Gut fuer verknuepftes Wissen.",
     "pts": [
      "Netz aus Dingen (Nodes) und Beziehungen (Edges)",
      "Beispiel: Kunde -besitzt-> Karte",
      "Gut fuer Zusammenhaenge und Regeln",
      "Kann RAG praeziser machen (GraphRAG)"
     ],
     "yt": "Knowledge Graph einfach erklaert",
     "src": null,
     "gh": [
      [
       "Neo4j (Graph-Datenbank)",
       "https://github.com/neo4j/neo4j"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Ein Knowledge Graph (Wissensgraph) ist ein Netz aus Fakten und ihren Verbindungen. Er speichert nicht nur Dinge, sondern auch, wie sie zusammenhängen: 'Kunde -besitzt-> Konto -gehört zu-> Filiale'.",
        "Man stellt sich Punkte (Knoten/Entitäten: Kunde, Konto, Karte) und Linien dazwischen (Kanten/Beziehungen: besitzt, gehört zu) vor. Anders als eine normale Tabelle 'versteht' der Graph diese Beziehungen."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Entitäten sind die Knoten, Beziehungen die Kanten. Beides wird in einer Graphdatenbank (z.B. Neo4j) gespeichert und lässt sich als Netz darstellen.",
        "Dadurch kann man Fragen beantworten, die über mehrere Ecken gehen: 'Welche Kunden mit Karte X hatten auch Kontakt zu Händler Y?' - das ist in einem Graphen viel natürlicher als in getrennten Tabellen."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Laut den Fachquellen sind typische Einsätze: Wissensmanagement (internes Wissen vernetzen), intelligente Assistenten/Chatbots (bessere Antworten durch verknüpftes Wissen), Empfehlungssysteme und Betrugserkennung.",
        "In der KI-Welt kombiniert man Knowledge Graphs zunehmend mit RAG ('GraphRAG'): Statt nur ähnliche Textstücke zu finden, nutzt man auch die Beziehungen - das macht Antworten präziser bei vernetzten Fragen.",
        "In der Bank stark bei Betrug: Ein Graph zeigt verdächtige Ringe (mehrere Konten, dasselbe Gerät, gleiche Adresse), die in einzelnen Tabellen unsichtbar bleiben. Auch für Geldwäsche-Prüfung (AML) genutzt."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Betrugsring-Erkennung: Fünf scheinbar fremde Konten hängen im Graphen über dasselbe Gerät und dieselbe Telefonnummer zusammen. Der Graph macht diese verborgene Verbindung sichtbar - und der Betrugsring fliegt auf."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Aufbau und Pflege sind aufwendig: Man muss festlegen, welche Entitäten und Beziehungen es gibt (Ontologie).",
        "Schlechte/veraltete Daten führen zu falschen Verbindungen.",
        "Nicht für jedes Problem nötig - bei einfachem Text-Wissen reicht oft normales RAG.",
        "Datenschutz: Ein Graph verknüpft Personendaten stark - das ist sensibel (DSGVO)."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Verwandt mit RAG (GraphRAG), Semantic Search und AI Fraud Detection. Der IBM- und plusmeta-Text unten erklären Knowledge Graphs anschaulich; Neo4j ist die bekannteste Graphdatenbank zum Ausprobieren."
       ]
      }
     ],
     "web": [
      [
       "IBM: What is a Knowledge Graph?",
       "https://www.ibm.com/think/topics/knowledge-graph"
      ],
      [
       "plusmeta: Knowledge Graphen - smarte Verbindung von Daten",
       "https://www.plusmeta.de/blog/knowledge-graphen/"
      ],
      [
       "SAP News: Knowledge Graphs - vernetztes Wissen",
       "https://news.sap.com/germany/2023/05/knowledge-graphs-vernetztes-wissen/"
      ],
      [
       "Neo4j (GitHub) - Graphdatenbank",
       "https://github.com/neo4j/neo4j"
      ]
     ],
     "nr": 68,
     "track": "ai"
    },
    {
     "t": "Semantic Search",
     "was": "Semantic Search ist die Suche nach Bedeutung. Man muss nicht das exakte Wort treffen - die Suche versteht, was gemeint ist.",
     "pts": [
      "Suche nach Sinn statt Wortgleichheit",
      "Nutzt Embeddings",
      "Findet 'Karte verloren' auch bei 'Karte weg'",
      "Grundlage guter Bot-Suche"
     ],
     "yt": "semantic search erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Semantic Search (semantische Suche) ist eine Suche, die die Bedeutung versteht. Man muss nicht das exakte Wort treffen - die Suche findet, was gemeint ist.",
        "Die klassische Suche vergleicht Buchstaben ('kommt das Wort vor?'). Die semantische Suche vergleicht Bedeutung (über Embeddings) - deshalb findet sie 'Karte weg' auch beim Artikel 'Karte verloren'."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Sie baut auf Embeddings und Vector Search auf: Dokumente und Frage werden zu Vektoren, und die Suche liefert die bedeutungsähnlichsten Treffer.",
        "Dadurch versteht sie Synonyme, Umschreibungen und Tippfehler viel besser als die reine Wortsuche."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Semantische Suche steckt im Retrieval-Schritt jedes RAG-Systems, im Genesys Knowledge-Portal und in jeder guten Wissenssuche für Kunden und Mitarbeiter.",
        "In der Praxis kombiniert man sie oft mit der klassischen Wortsuche zu Hybrid Search: semantisch für Formulierungen, Wortsuche für exakte Begriffe, Produktnamen und Nummern.",
        "In der Bank: Kunden und Agenten finden Antworten, ohne die 'richtigen' Fachwörter zu kennen - das senkt Frust und entlastet die Hotline."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Kunde sucht 'Geld ins Ausland schicken'. Die semantische Suche findet den Artikel 'Auslandsüberweisung / SEPA & SWIFT', obwohl der Kunde keinen dieser Fachbegriffe verwendet hat."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Bei exakten Codes, IBANs oder Produktnummern ist reine Semantik schwächer - dann Hybrid Search nutzen.",
        "Qualität hängt vom Embedding-Modell und von gutem Chunking ab.",
        "Sprache beachten: Für deutsche Inhalte ein Modell wählen, das Deutsch gut kann.",
        "Ohne Prüfung/Feedback bleiben schlechte Treffer unentdeckt."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt verwandt: Embeddings, Vector Search und Hybrid Search. Der Elastic-Text unten erklärt semantische Suche einsteigerfreundlich auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "Elastic: Was ist semantische Suche?",
       "https://www.elastic.co/de/what-is/semantic-search"
      ],
      [
       "Google Cloud: Vektordatenbank & semantische Suche",
       "https://cloud.google.com/discover/what-is-a-vector-database"
      ],
      [
       "Data Basecamp: semantische Suche & RAG",
       "https://databasecamp.de/daten/vector-database"
      ]
     ],
     "nr": 69,
     "track": "ai"
    },
    {
     "t": "Hybrid Search",
     "was": "Hybrid Search kombiniert zwei Suchen: die klassische Wortsuche (Keyword) und die Bedeutungssuche (semantisch). Zusammen sind sie am treffsichersten.",
     "pts": [
      "Keyword-Suche + semantische Suche",
      "Keyword ist gut bei exakten Begriffen/Nummern",
      "Semantisch ist gut bei anderer Wortwahl",
      "Kombination liefert beste Treffer"
     ],
     "yt": "hybrid search RAG explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Hybrid Search kombiniert zwei Suchen: die klassische Wortsuche (Keyword) und die Bedeutungssuche (semantisch/Vector). Zusammen sind sie treffsicherer als jede für sich.",
        "Die Idee: Die Wortsuche ist stark bei exakten Begriffen, Namen und Nummern; die semantische Suche ist stark bei Formulierungen und Synonymen. Hybrid nimmt das Beste aus beiden."
       ]
      },
      {
       "h": "Wie es funktioniert",
       "p": [
        "Das System führt beide Suchen parallel aus und mischt die Ergebnisse zu einer gemeinsamen Rangliste (oft mit einem Verfahren wie Reciprocal Rank Fusion).",
        "So landen sowohl exakt passende Treffer (z.B. eine bestimmte Produktbezeichnung) als auch bedeutungsähnliche Treffer (andere Wortwahl) weit oben."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis)",
       "p": [
        "Hybrid Search ist in vielen Suchsystemen (z.B. Elasticsearch/OpenSearch) direkt eingebaut und in RAG oft die beste Standardwahl.",
        "Besonders wertvoll in Bereichen mit vielen exakten Begriffen und Codes - genau wie in Banken (IBANs, Produktnamen, Paragraphen, Vertragsnummern) neben umgangssprachlichen Kundenfragen.",
        "Man kann die Gewichtung einstellen: mehr Gewicht auf exakt (bei Codes) oder auf semantisch (bei freien Fragen)."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Kunde fragt 'Gebühren beim Tarif Giro Plus'. Die semantische Suche versteht 'Gebühren', die Wortsuche trifft exakt den Produktnamen 'Giro Plus'. Hybrid liefert genau den richtigen Abschnitt - reine Semantik hätte den exakten Tarifnamen evtl. verwässert."
       ]
      },
      {
       "h": "Grenzen & typische Fehler",
       "p": [
        "Die Gewichtung muss zur Domäne passen - falsch eingestellt verschlechtert Hybrid die Treffer.",
        "Etwas mehr Aufwand als eine einzelne Suche (zwei Indizes/Verfahren).",
        "Ersetzt kein gutes Chunking/Embedding - baut darauf auf.",
        "An echten Fragen testen (benchmarken), statt die Gewichte zu raten."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Direkt verwandt: Semantic Search, Vector Search, Embeddings - und Teil der RAG Architektur. Der Elastic-Text unten erklärt Hybrid Search einsteigerfreundlich auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "Elastic: Hybrid Search",
       "https://www.elastic.co/de/what-is/hybrid-search"
      ],
      [
       "Google Cloud: Vektordatenbank & Suche",
       "https://cloud.google.com/discover/what-is-a-vector-database"
      ],
      [
       "Data Basecamp: Vector Database & Suche",
       "https://databasecamp.de/daten/vector-database"
      ]
     ],
     "nr": 70,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Tools & MCP",
   "emoji": "🛠️",
   "ziel": "Wie KI mit anderen Systemen arbeitet - Werkzeuge nutzen und der MCP-Standard.",
   "topics": [
    {
     "t": "Tool Calling",
     "was": "Tool Calling heisst, die KI darf Werkzeuge benutzen, z.B. eine Suche starten oder eine API aufrufen. So kann sie handeln, nicht nur reden.",
     "pts": [
      "Tool = Werkzeug/Funktion, die die KI aufrufen darf",
      "Beispiel: Kontostand aus dem Bank-System holen",
      "KI entscheidet, wann sie ein Tool nutzt",
      "Basis fuer handelnde KI-Agenten"
     ],
     "yt": "LLM tool calling explained",
     "src": [
      "Anthropic: Tool Use",
      "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 71,
     "track": "ai"
    },
    {
     "t": "Function Calling",
     "was": "Function Calling ist fast dasselbe wie Tool Calling: die KI ruft eine vorbereitete Funktion mit den richtigen Werten auf.",
     "pts": [
      "KI fuellt Funktions-Parameter aus",
      "Man beschreibt die Funktion vorher genau",
      "KI gibt strukturierte Werte (JSON) zurueck",
      "Verbindet KI mit echten Programmen"
     ],
     "yt": "function calling LLM erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 72,
     "track": "ai"
    },
    {
     "t": "Model Context Protocol",
     "was": "MCP (Model Context Protocol) ist ein offener Standard, wie KI-Modelle mit Werkzeugen und Datenquellen verbunden werden - wie ein USB-Stecker fuer KI.",
     "pts": [
      "MCP = einheitlicher Standard fuer KI-Anbindungen",
      "Trennt KI (Client) von Werkzeugen (Server)",
      "Einmal bauen, ueberall nutzen",
      "Von Anthropic gestartet, offen fuer alle"
     ],
     "yt": "Model Context Protocol MCP erklaert deutsch",
     "src": [
      "MCP Doku",
      "https://modelcontextprotocol.io/"
     ],
     "gh": [
      [
       "MCP Server Sammlung",
       "https://github.com/modelcontextprotocol/servers"
      ],
      [
       "MCP Spezifikation",
       "https://github.com/modelcontextprotocol"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 73,
     "track": "ai"
    },
    {
     "t": "MCP Server",
     "was": "Ein MCP Server stellt Werkzeuge oder Daten bereit, die die KI nutzen kann - z.B. Zugriff auf eine Datenbank oder ein Ticketsystem.",
     "pts": [
      "Server = bietet Tools/Daten an",
      "Beispiel: Server fuer das CRM",
      "Viele fertige Server verfuegbar",
      "Man kann eigene Server bauen"
     ],
     "yt": "MCP server tutorial",
     "src": null,
     "gh": [
      [
       "MCP Server (offiziell)",
       "https://github.com/modelcontextprotocol/servers"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 74,
     "track": "ai"
    },
    {
     "t": "MCP Client",
     "was": "Ein MCP Client ist die Seite der KI-App, die sich mit MCP Servern verbindet und deren Werkzeuge nutzt.",
     "pts": [
      "Client = die KI-App, die Tools nutzt",
      "Verbindet sich mit einem oder mehreren Servern",
      "Beispiel: Claude Desktop, IDEs",
      "Spricht das MCP-Protokoll"
     ],
     "yt": "MCP client explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 75,
     "track": "ai"
    },
    {
     "t": "MCP Tools",
     "was": "MCP Tools sind die einzelnen Faehigkeiten, die ein Server anbietet, z.B. 'suche_kunde' oder 'erstelle_ticket'.",
     "pts": [
      "Tool = einzelne Faehigkeit des Servers",
      "Klarer Name + Beschreibung + Parameter",
      "KI waehlt das passende Tool",
      "Gute Beschreibungen sind wichtig"
     ],
     "yt": "MCP tools examples",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 76,
     "track": "ai"
    },
    {
     "t": "MCP Security",
     "was": "Bei MCP muss man auf Sicherheit achten: Welche Tools duerfen was? Wer darf zugreifen? Gerade in Banken sehr wichtig.",
     "pts": [
      "Nur noetige Tools freigeben (Least Privilege)",
      "Zugriffe absichern (Auth)",
      "Gefahr: schadhafte Server/Tools",
      "Aktionen protokollieren (Audit)"
     ],
     "yt": "MCP security best practices",
     "src": null,
     "gh": [
      [
       "MCP Doku: Security",
       "https://modelcontextprotocol.io/"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 77,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Agentic AI (KI-Agenten)",
   "emoji": "🕹️",
   "ziel": "KI, die selbststaendig Aufgaben plant und erledigt - Grundlagen bis Betrieb.",
   "topics": [
    {
     "t": "Agentic AI",
     "was": "Agentic AI ist KI, die nicht nur antwortet, sondern selbst Schritte plant und Werkzeuge nutzt, um ein Ziel zu erreichen.",
     "pts": [
      "Agent = handelnde KI mit Ziel",
      "Plant, nutzt Tools, prueft Ergebnis",
      "Kann mehrere Schritte allein gehen",
      "Braucht Grenzen (Guardrails)"
     ],
     "yt": "Agentic AI erklaert deutsch",
     "src": [
      "Anthropic: Building Agents",
      "https://www.anthropic.com/engineering/building-effective-agents"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [
      {
       "h": "Einfach gesagt",
       "p": [
        "Es gibt einen berühmten Merksatz: 'Ein Chatbot antwortet - ein Agent handelt.' Agentic AI beschreibt KI-Systeme, die nicht nur auf Fragen reagieren, sondern ein Ziel verfolgen: Sie planen selbst die nötigen Schritte, nutzen Werkzeuge, prüfen ihr Ergebnis und korrigieren sich.",
        "Ein KI-Agent verbindet dazu ein Sprachmodell (das 'Gehirn') mit Werkzeugen (Tools, z.B. eine Kunden-API), einem Gedächtnis (Memory) und einem Ziel. So wird aus einem reinen Textgenerator ein digitaler 'Mitarbeiter', der Aufgaben erledigt."
       ]
      },
      {
       "h": "Wie es funktioniert (der Denk-Handel-Kreislauf)",
       "p": [
        "Ein Agent arbeitet in einer Schleife (Loop): 1. Denken - was ist mein Ziel, was der nächste Schritt? 2. Handeln - ein Werkzeug benutzen (z.B. Kundendaten holen, einen Termin buchen). 3. Beobachten - was kam heraus? 4. Erneut denken - bin ich fertig oder brauche ich einen weiteren Schritt?",
        "Diese Schleife wiederholt sich, bis das Ziel erreicht ist. Damit sie nicht endlos läuft oder Unsinn macht, setzt man Grenzen: ein Schritt-Limit (Loop Engineering) und feste Regeln (Guardrails).",
        "Man unterscheidet Single-Agent-Systeme (ein Agent macht alles) und Multi-Agent-Systeme (mehrere Agenten mit Rollen arbeiten zusammen, wie ein Team) - Letzteres beschreibt Fraunhofer als das Modell für komplexere Aufgaben."
       ]
      },
      {
       "h": "Wie man es einsetzt (Praxis im Unternehmen)",
       "p": [
        "Laut den Fachquellen (IHK, BDO, IBM) automatisieren Agenten heute ganze Routineabläufe: Kundenauskünfte, Berichtserstellung, Dokumentenbearbeitung. Sie greifen auf Wissensdatenbanken zu und lösen bis zu 80 % der Standardtickets eigenständig.",
        "In der Bank denkbar: Ein Agent nimmt eine Beschwerde auf, sucht die Kundenhistorie, prüft die Regeln, bereitet eine Lösung vor und legt sie einem Mitarbeiter zur Freigabe vor. Oder: ein Agent, der bei einem Kartenverlust eigenständig sperrt, Ersatz bestellt und den Kunden informiert - kritische Schritte immer mit menschlicher Freigabe.",
        "Wichtig ist die Kontrolle: Human-in-the-loop (Mensch bestätigt kritische Schritte) oder Human-on-the-loop (Mensch überwacht und kann eingreifen). Gerade in Banken ist das Pflicht."
       ]
      },
      {
       "h": "Konkretes Beispiel",
       "p": [
        "Ein Kunde schreibt: 'Ich habe eine Abbuchung, die ich nicht kenne.' Ein Agent könnte: die Transaktion heraussuchen, prüfen, ob sie als verdächtig markiert ist, dem Kunden Details zeigen, eine vorläufige Kartensperre vorbereiten und einen Reklamationsvorgang anlegen - und dann einen Menschen fragen: 'Sperre bestätigen?' So erledigt der Agent die Fleißarbeit, der Mensch entscheidet das Heikle."
       ]
      },
      {
       "h": "Vorteile",
       "p": [
        "Erledigt mehrstufige Aufgaben selbstständig, nicht nur einzelne Antworten.",
        "Automatisiert Routine über mehrere Systeme hinweg.",
        "Rund um die Uhr, entlastet Mitarbeiter für Komplexes.",
        "Gartner erwartet, dass bis 2028 ein Drittel der Unternehmenssoftware Agentic AI enthält - der Trend ist groß."
       ]
      },
      {
       "h": "Grenzen, Risiken & Datenschutz",
       "p": [
        "Nicht alles ist heute zuverlässig: Agenten können Fehler machen, sich verrennen oder in Schleifen hängen. Ehrliche Einordnung: 'Beyond the Hype' - klein und kontrolliert starten.",
        "Excessive Agency: Ein Agent mit zu vielen Rechten kann bei einem Fehler großen Schaden anrichten. Nur nötige Werkzeuge freigeben (Least Privilege).",
        "Sicherheit: Agenten sind angreifbar (Prompt Injection). Und alle Aktionen sollten protokolliert werden (Audit Logging).",
        "In der Bank: kritische Aktionen immer mit menschlicher Freigabe und klaren Guardrails."
       ]
      },
      {
       "h": "Typische Fehler",
       "p": [
        "Einem Agenten zu früh zu viel Verantwortung/Rechte geben.",
        "Keine Grenzen (Schritt-Limit, Guardrails) setzen.",
        "Keine Nachvollziehbarkeit (kein Tracing/Logging) - dann versteht niemand, was schiefging.",
        "Ohne Pilot direkt groß ausrollen."
       ]
      },
      {
       "h": "Best Practices / Checkliste",
       "p": [
        "Klein anfangen: eine klar begrenzte Aufgabe, viel Kontrolle.",
        "Human-in-the-loop für kritische Schritte.",
        "Nur nötige Tools freigeben, Guardrails setzen.",
        "Jeden Schritt aufzeichnen (Observability/Tracing) und auswerten.",
        "Erfolg messen (Evaluation), dann vorsichtig ausweiten."
       ]
      },
      {
       "h": "So lernst du weiter",
       "p": [
        "Im Plan gehören dazu: KI-Agenten-Grundlagen, Single-/Multi-Agent, Agent Memory/Planning/Tools, Guardrails, Human-in-the-loop und AgentOps. Die Fraunhofer- und IHK-Texte unten sind ein guter, seriöser Einstieg auf Deutsch."
       ]
      }
     ],
     "web": [
      [
       "Fraunhofer IESE: Agentic AI & Multi-Agenten-Systeme",
       "https://www.iese.fraunhofer.de/blog/agentic-ai-multi-agenten-systeme/"
      ],
      [
       "IHK Regensburg: KI-Agenten & Nutzen fuer Unternehmen",
       "https://www.ihk.de/regensburg/fachthemen/digitalisierung/kuenstliche-intelligenz/ki-agenten-und-ihr-nutzen-fuer-unternehmen-6706606"
      ],
      [
       "BDO: Vom Assistenten zum Akteur - KI-Agenten",
       "https://www.bdo.de/de-de/insights/aktuelles/advisory-service/vom-assistenten-zum-akteur-wie-ki-agenten-unternehmen-in-die-aera-der-agentic-ai-fuehren"
      ],
      [
       "IBM: What is Agentic AI?",
       "https://www.ibm.com/think/topics/agentic-ai"
      ]
     ],
     "nr": 78,
     "track": "ai"
    },
    {
     "t": "KI-Agenten Grundlagen",
     "was": "Ein KI-Agent verbindet ein Sprachmodell mit Werkzeugen und Gedaechtnis, damit es Aufgaben erledigen kann - wie ein digitaler Mitarbeiter.",
     "pts": [
      "Bestandteile: Modell + Tools + Memory + Ziel",
      "Loop: denken -> handeln -> beobachten",
      "Beispiel: Anliegen erfassen und im System buchen",
      "Immer mit Kontrolle einsetzen"
     ],
     "yt": "AI agents basics erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 79,
     "track": "ai"
    },
    {
     "t": "Single-Agent-Systeme",
     "was": "Ein Single-Agent-System hat genau einen Agenten, der alles erledigt. Einfach zu bauen und gut fuer klare Aufgaben.",
     "pts": [
      "Ein Agent macht alles",
      "Einfach und uebersichtlich",
      "Gut fuer klar umrissene Aufgaben",
      "Kann an Grenzen stossen bei Komplexem"
     ],
     "yt": "single agent system LLM",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 80,
     "track": "ai"
    },
    {
     "t": "Multi-Agent-Systeme",
     "was": "Bei Multi-Agent-Systemen arbeiten mehrere Agenten zusammen, jeder mit einer Rolle - wie ein Team mit Spezialisten.",
     "pts": [
      "Mehrere Agenten mit Rollen",
      "Beispiel: einer sucht, einer prueft, einer schreibt",
      "Koennen sich absprechen",
      "Maechtig, aber komplexer zu steuern"
     ],
     "yt": "multi agent systems explained",
     "src": null,
     "gh": [
      [
       "CrewAI",
       "https://github.com/crewAIInc/crewAI"
      ],
      [
       "AutoGen",
       "https://github.com/microsoft/autogen"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 81,
     "track": "ai"
    },
    {
     "t": "Agent Runtime",
     "was": "Die Agent Runtime ist die Umgebung, in der ein Agent laeuft - sie fuehrt die Schritte aus, ruft Tools auf und haelt alles am Laufen.",
     "pts": [
      "Runtime = Laufzeitumgebung des Agenten",
      "Fuehrt den Denk-Handel-Loop aus",
      "Verwaltet Tools und Zustand",
      "Sorgt fuer stabilen Betrieb"
     ],
     "yt": "agent runtime explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 82,
     "track": "ai"
    },
    {
     "t": "Agent State",
     "was": "Der Agent State ist der aktuelle Zustand: was hat der Agent bisher getan, was weiss er gerade, wo steht er in der Aufgabe.",
     "pts": [
      "State = aktueller Stand der Aufgabe",
      "Speichert Zwischenergebnisse",
      "Wichtig fuer mehrstufige Aufgaben",
      "Muss sauber verwaltet werden"
     ],
     "yt": "agent state management",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 83,
     "track": "ai"
    },
    {
     "t": "Agent Memory",
     "was": "Agent Memory ist das Gedaechtnis: kurzfristig (aktuelles Gespraech) und langfristig (frueheres Wissen ueber den Kunden).",
     "pts": [
      "Short-term: aktuelles Gespraech",
      "Long-term: dauerhaftes Wissen",
      "Hilft, sich an Kunden zu erinnern",
      "Datenschutz beachten (was darf gespeichert werden)"
     ],
     "yt": "agent memory LLM explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 84,
     "track": "ai"
    },
    {
     "t": "Agent Planning",
     "was": "Planning heisst, dass der Agent einen Plan macht: er zerlegt ein Ziel in Schritte und arbeitet sie ab.",
     "pts": [
      "Ziel in Teilschritte zerlegen",
      "Reihenfolge festlegen",
      "Plan bei Bedarf anpassen",
      "Verhindert planloses Handeln"
     ],
     "yt": "AI agent planning explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 85,
     "track": "ai"
    },
    {
     "t": "Agent Reasoning",
     "was": "Reasoning beim Agenten heisst, dass er ueberlegt, warum er etwas tut und ob das Ergebnis passt, bevor er weitermacht.",
     "pts": [
      "Nachdenken vor dem Handeln",
      "Ergebnisse pruefen und bewerten",
      "Fehler erkennen und korrigieren",
      "Macht Agenten zuverlaessiger"
     ],
     "yt": "agent reasoning explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 86,
     "track": "ai"
    },
    {
     "t": "Agent Tools",
     "was": "Agent Tools sind die Werkzeuge, die der Agent nutzen darf: Suche, APIs, Datenbanken. Ohne Tools kann er nur reden.",
     "pts": [
      "Tools = Faehigkeiten des Agenten",
      "Beispiel: Kunden-API, Wissenssuche",
      "Klare Beschreibungen noetig",
      "Nur noetige Tools freigeben"
     ],
     "yt": "agent tools explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 87,
     "track": "ai"
    },
    {
     "t": "Agent Workflows",
     "was": "Ein Agent Workflow ist ein festgelegter Ablauf mit KI-Schritten. Anders als ein 'freier' Agent folgt er einer klaren Struktur.",
     "pts": [
      "Workflow = fester Ablauf mit KI-Schritten",
      "Vorhersehbarer als freie Agenten",
      "Gut fuer Standard-Prozesse",
      "Mischung aus Regeln und KI"
     ],
     "yt": "agentic workflows explained",
     "src": null,
     "gh": [
      [
       "LangGraph",
       "https://github.com/langchain-ai/langgraph"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 88,
     "track": "ai"
    },
    {
     "t": "Loop Engineering",
     "was": "Loop Engineering heisst, den Denk-Handel-Kreislauf des Agenten gut zu bauen: wann wiederholen, wann stoppen, wie Fehler abfangen.",
     "pts": [
      "Loop = wiederholter Denk-Handel-Kreislauf",
      "Abbruchbedingungen festlegen",
      "Endlosschleifen verhindern",
      "Schritt-Limit setzen"
     ],
     "yt": "agent loop engineering",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 89,
     "track": "ai"
    },
    {
     "t": "AgentOps",
     "was": "AgentOps ist der Betrieb von KI-Agenten: sie ueberwachen, verbessern und sicher am Laufen halten - wie DevOps, aber fuer Agenten.",
     "pts": [
      "Betrieb und Pflege von Agenten",
      "Ueberwachen, messen, verbessern",
      "Versionen und Aenderungen steuern",
      "Wichtig fuer Produktion"
     ],
     "yt": "AgentOps explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 90,
     "track": "ai"
    },
    {
     "t": "Agent Observability",
     "was": "Observability heisst 'Beobachtbarkeit': man kann sehen, was der Agent tut und warum - wichtig, um Fehler zu finden.",
     "pts": [
      "Einblick in das Verhalten des Agenten",
      "Logs, Metriken, Traces",
      "Fehler schneller finden",
      "Basis fuer Vertrauen"
     ],
     "yt": "agent observability LLM",
     "src": null,
     "gh": [
      [
       "Langfuse (LLM Observability)",
       "https://github.com/langfuse/langfuse"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 91,
     "track": "ai"
    },
    {
     "t": "Agent Tracing",
     "was": "Tracing zeichnet jeden Schritt des Agenten auf: welche Gedanken, welche Tools, welche Ergebnisse - wie ein Fahrtenschreiber.",
     "pts": [
      "Trace = Schritt-fuer-Schritt-Aufzeichnung",
      "Zeigt Tool-Aufrufe und Zwischenschritte",
      "Hilft beim Debugging",
      "Wichtig fuer Nachvollziehbarkeit"
     ],
     "yt": "LLM tracing explained",
     "src": null,
     "gh": [
      [
       "Langfuse",
       "https://github.com/langfuse/langfuse"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 92,
     "track": "ai"
    },
    {
     "t": "Agent Debugging",
     "was": "Debugging heisst Fehlersuche: wenn der Agent etwas falsch macht, findet man mit Traces und Logs die Ursache und behebt sie.",
     "pts": [
      "Fehler im Agenten finden und beheben",
      "Traces und Logs auswerten",
      "Prompt oder Tools anpassen",
      "Testfaelle nachstellen"
     ],
     "yt": "debugging AI agents",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 93,
     "track": "ai"
    },
    {
     "t": "Agent Evaluation",
     "was": "Agent Evaluation prueft mit Testfaellen, ob der Agent gute, sichere Ergebnisse liefert - bevor und waehrend er live ist.",
     "pts": [
      "Mit Testfaellen bewerten",
      "Erfolg, Korrektheit, Sicherheit messen",
      "Vor Release und laufend",
      "Vergleich verschiedener Versionen"
     ],
     "yt": "agent evaluation methods",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 94,
     "track": "ai"
    },
    {
     "t": "Agent Guardrails",
     "was": "Guardrails sind Leitplanken: Regeln, die verhindern, dass der Agent Verbotenes tut - z.B. keine Kontodaten preisgeben.",
     "pts": [
      "Leitplanken = feste Regeln/Grenzen",
      "Verbotene Aktionen blockieren",
      "Sensible Themen absichern",
      "In Banken unverzichtbar"
     ],
     "yt": "AI agent guardrails explained",
     "src": null,
     "gh": [
      [
       "NeMo Guardrails",
       "https://github.com/NVIDIA/NeMo-Guardrails"
      ],
      [
       "Guardrails AI",
       "https://github.com/guardrails-ai/guardrails"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 95,
     "track": "ai"
    },
    {
     "t": "Agent Mesh",
     "was": "Ein Agent Mesh ist ein Netz aus vielen Agenten und Diensten, die zusammenarbeiten - eine Art Infrastruktur fuer viele Agenten.",
     "pts": [
      "Netzwerk vieler Agenten/Dienste",
      "Agenten finden und nutzen sich gegenseitig",
      "Fuer grosse Landschaften",
      "Braucht klare Regeln und Sicherheit"
     ],
     "yt": "agent mesh architecture",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 96,
     "track": "ai"
    },
    {
     "t": "Agent-to-Agent Communication",
     "was": "Damit Agenten zusammenarbeiten, muessen sie miteinander reden koennen - nach klaren Regeln, wer was fragt und antwortet.",
     "pts": [
      "Agenten tauschen Nachrichten aus",
      "Klare Rollen und Formate",
      "Beispiel: Such-Agent liefert an Antwort-Agent",
      "Standardisierung hilft (A2A)"
     ],
     "yt": "agent to agent communication",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 97,
     "track": "ai"
    },
    {
     "t": "A2A Protocol",
     "was": "A2A (Agent-to-Agent) ist ein Standard, wie verschiedene Agenten - auch von verschiedenen Anbietern - sicher miteinander sprechen.",
     "pts": [
      "A2A = Standard fuer Agenten-Kommunikation",
      "Anbieter-uebergreifend",
      "Ergaenzt MCP (Tools) um Agenten-Austausch",
      "Noch jung, aber wichtig fuer die Zukunft"
     ],
     "yt": "A2A protocol agents explained",
     "src": null,
     "gh": [
      [
       "A2A Projekt",
       "https://github.com/google/A2A"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 98,
     "track": "ai"
    },
    {
     "t": "Human-in-the-loop",
     "was": "Human-in-the-loop heisst, ein Mensch muss bei wichtigen Schritten zustimmen, bevor der Agent handelt - z.B. vor einer Ueberweisung.",
     "pts": [
      "Mensch bestaetigt kritische Schritte",
      "Agent wartet auf Freigabe",
      "Hoehere Sicherheit",
      "Pflicht bei riskanten Bank-Aktionen"
     ],
     "yt": "human in the loop AI explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 99,
     "track": "ai"
    },
    {
     "t": "Human-on-the-loop",
     "was": "Human-on-the-loop heisst, der Agent handelt selbst, aber ein Mensch schaut zu und kann jederzeit eingreifen oder stoppen.",
     "pts": [
      "Mensch ueberwacht, greift bei Bedarf ein",
      "Agent arbeitet selbststaendig",
      "Schneller als Human-in-the-loop",
      "Braucht gute Ueberwachung (Monitoring)"
     ],
     "yt": "human on the loop AI",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 100,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Sicherheit, Governance & Recht",
   "emoji": "🛡️",
   "ziel": "KI sicher, rechtlich sauber und verantwortungsvoll betreiben - Pflicht in Banken.",
   "topics": [
    {
     "t": "Guardrails",
     "was": "Guardrails (Leitplanken) sind Regeln, die die KI davon abhalten, gefaehrliche oder verbotene Dinge zu tun oder zu sagen.",
     "pts": [
      "Regeln/Grenzen fuer KI-Verhalten",
      "Filtern verbotene Themen/Antworten",
      "Schuetzen Kunde und Bank",
      "Technisch und organisatorisch"
     ],
     "yt": "AI guardrails explained deutsch",
     "src": null,
     "gh": [
      [
       "Guardrails AI",
       "https://github.com/guardrails-ai/guardrails"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 101,
     "track": "ai"
    },
    {
     "t": "AI Safety",
     "was": "AI Safety heisst, KI so zu bauen und zu betreiben, dass sie Menschen nicht schadet und keine gefaehrlichen Fehler macht.",
     "pts": [
      "Sicherheit fuer Mensch und Betrieb",
      "Fehler und Missbrauch verhindern",
      "Grenzen klar definieren",
      "Testen, bevor es live geht"
     ],
     "yt": "AI safety Grundlagen deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Fraunhofer: Vertrauenswuerdige KI",
       "https://www.iis.fraunhofer.de/de/ff/ki.html"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 102,
     "track": "ai"
    },
    {
     "t": "AI Governance",
     "was": "AI Governance ist der Rahmen aus Regeln und Verantwortlichkeiten: Wer entscheidet ueber KI, wer haftet, welche Regeln gelten in der Firma.",
     "pts": [
      "Regeln und Zustaendigkeiten fuer KI",
      "Wer darf was, wer haftet",
      "Richtlinien und Freigaben",
      "Basis fuer sicheren KI-Einsatz"
     ],
     "yt": "AI Governance erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Bitkom: KI-Governance",
       "https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 103,
     "track": "ai"
    },
    {
     "t": "AI Risk Management",
     "was": "AI Risk Management heisst, Gefahren durch KI zu erkennen, zu bewerten und zu verringern - z.B. Fehlberatung oder Datenpannen.",
     "pts": [
      "Risiken finden und bewerten",
      "Gegenmassnahmen festlegen",
      "Regelmaessig ueberpruefen",
      "Bank-Pflicht (Aufsicht/BaFin)"
     ],
     "yt": "AI risk management framework",
     "src": null,
     "gh": [],
     "art": [
      [
       "BaFin: KI in der Finanzwirtschaft",
       "https://www.bafin.de/DE/Aufsicht/FinTech/KuenstlicheIntelligenz/kuenstliche_intelligenz_node.html"
      ],
      [
       "NIST AI Risk Management Framework",
       "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 104,
     "track": "ai"
    },
    {
     "t": "AI Compliance",
     "was": "AI Compliance heisst, dass der KI-Einsatz alle Gesetze und Regeln einhaelt - z.B. Datenschutz, Aufsichtsrecht, EU AI Act.",
     "pts": [
      "Einhaltung aller Regeln/Gesetze",
      "Betrifft Datenschutz, Aufsicht, EU AI Act",
      "Dokumentation und Nachweise",
      "Regelmaessige Audits"
     ],
     "yt": "AI compliance banking",
     "src": null,
     "gh": [],
     "art": [
      [
       "EU AI Act (offiziell, DE)",
       "https://artificialintelligenceact.eu/de/"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 105,
     "track": "ai"
    },
    {
     "t": "EU AI Act",
     "was": "Der EU AI Act ist das KI-Gesetz der EU. Es teilt KI in Risiko-Klassen ein und macht Vorgaben - je hoeher das Risiko, desto strenger.",
     "pts": [
      "EU-weites KI-Gesetz",
      "Risiko-Klassen: minimal bis verboten",
      "Hochrisiko braucht strenge Nachweise",
      "Banken oft im Hochrisiko-Bereich"
     ],
     "yt": "EU AI Act einfach erklaert deutsch",
     "src": [
      "EU AI Act (offiziell)",
      "https://artificialintelligenceact.eu/de/"
     ],
     "gh": [],
     "art": [
      [
       "EU-Kommission: KI-Gesetz",
       "https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 106,
     "track": "ai"
    },
    {
     "t": "DSGVO fuer KI-Systeme",
     "was": "Die DSGVO ist das EU-Datenschutzgesetz. Bei KI heisst das: personenbezogene Daten nur mit Grund nutzen, sparsam und geschuetzt.",
     "pts": [
      "DSGVO = EU-Datenschutz-Grundverordnung",
      "Rechtsgrundlage noetig fuer Datennutzung",
      "Betroffenenrechte (Auskunft, Loeschung)",
      "Besonders sensibel bei Bankdaten"
     ],
     "yt": "DSGVO KI einfach erklaert",
     "src": [
      "DSGVO Gesetzestext (DE)",
      "https://dsgvo-gesetz.de/"
     ],
     "gh": [],
     "art": [
      [
       "Datenschutzkonferenz: KI-Hinweise",
       "https://www.datenschutzkonferenz-online.de/"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 107,
     "track": "ai"
    },
    {
     "t": "Datenschutz und Datenminimierung",
     "was": "Datenminimierung heisst: nur so wenig Daten wie noetig nutzen. Was man nicht braucht, sammelt man gar nicht erst.",
     "pts": [
      "Nur noetige Daten verarbeiten",
      "Nicht auf Vorrat sammeln",
      "Anonymisieren/Pseudonymisieren, wenn moeglich",
      "Weniger Daten = weniger Risiko"
     ],
     "yt": "Datenminimierung DSGVO erklaert",
     "src": [
      "DSGVO Art. 5 (DE)",
      "https://dsgvo-gesetz.de/art-5-dsgvo/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 108,
     "track": "ai"
    },
    {
     "t": "Datenklassifizierung",
     "was": "Datenklassifizierung heisst, Daten nach Schutzbedarf einzustufen: oeffentlich, intern, vertraulich, streng geheim. Danach richtet sich der Schutz.",
     "pts": [
      "Daten nach Schutzbedarf einteilen",
      "Stufen: oeffentlich bis streng vertraulich",
      "Bankdaten meist hoch eingestuft",
      "Steuert, wer/was darauf zugreifen darf"
     ],
     "yt": "Datenklassifizierung erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 109,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "AI Security (OWASP)",
   "emoji": "🔐",
   "ziel": "Die typischen Angriffe auf KI kennen und abwehren - besonders wichtig in Banken.",
   "topics": [
    {
     "t": "OWASP LLM Security",
     "was": "OWASP ist eine bekannte Sicherheits-Organisation. Die 'OWASP Top 10 fuer LLM' ist eine Liste der groessten Gefahren bei KI-Anwendungen.",
     "pts": [
      "OWASP Top 10 = die groessten LLM-Risiken",
      "Standard-Checkliste fuer KI-Sicherheit",
      "Hilft, typische Fehler zu vermeiden",
      "Gute Grundlage fuer Bank-Bots"
     ],
     "yt": "OWASP Top 10 LLM erklaert deutsch",
     "src": [
      "OWASP Top 10 for LLM",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 110,
     "track": "ai"
    },
    {
     "t": "Prompt Injection",
     "was": "Prompt Injection ist ein Angriff, bei dem jemand der KI heimlich neue Anweisungen unterschiebt, um sie zu verbotenen Dingen zu bringen.",
     "pts": [
      "Angreifer schmuggelt boese Anweisungen ein",
      "Beispiel: 'Ignoriere alle Regeln und ...'",
      "Kann Daten stehlen oder Regeln brechen",
      "Abwehr: Eingaben filtern, Rechte begrenzen"
     ],
     "yt": "Prompt Injection erklaert deutsch",
     "src": [
      "OWASP: Prompt Injection",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [
      [
       "Rebuff (Prompt-Injection-Schutz)",
       "https://github.com/protectai/rebuff"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 111,
     "track": "ai"
    },
    {
     "t": "Sensitive Information Disclosure",
     "was": "Das ist die Gefahr, dass die KI geheime Infos ausplaudert - z.B. Kundendaten oder interne Regeln, die niemand sehen darf.",
     "pts": [
      "KI verraet geheime/interne Daten",
      "Gefahr durch schlechte Prompts oder Angriffe",
      "Abwehr: Daten filtern, PII maskieren",
      "In Banken besonders kritisch"
     ],
     "yt": "sensitive information disclosure LLM",
     "src": [
      "OWASP LLM Top 10",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 112,
     "track": "ai"
    },
    {
     "t": "Insecure Output Handling",
     "was": "Wenn man die Antwort der KI ungeprueft weiterverwendet, kann Schaden entstehen - z.B. wenn sie schaedlichen Code oder Links enthaelt.",
     "pts": [
      "KI-Ausgabe ungeprueft nutzen ist gefaehrlich",
      "Kann Code/Links einschleusen",
      "Abwehr: Ausgabe pruefen/bereinigen",
      "Nie blind vertrauen"
     ],
     "yt": "insecure output handling LLM",
     "src": [
      "OWASP LLM Top 10",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 113,
     "track": "ai"
    },
    {
     "t": "Excessive Agency",
     "was": "Excessive Agency heisst 'zu viele Rechte': Wenn ein Agent zu viel darf, kann ein Fehler grossen Schaden anrichten.",
     "pts": [
      "Agent hat mehr Rechte als noetig",
      "Fehler/Angriff = grosser Schaden",
      "Abwehr: Rechte klein halten, Freigaben",
      "Human-in-the-loop bei kritischen Aktionen"
     ],
     "yt": "excessive agency LLM explained",
     "src": [
      "OWASP LLM Top 10",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 114,
     "track": "ai"
    },
    {
     "t": "Model Denial of Service",
     "was": "Beim Model DoS ueberlastet ein Angreifer die KI mit vielen/riesigen Anfragen, bis sie langsam oder teuer wird oder ausfaellt.",
     "pts": [
      "Ueberlastung durch viele/grosse Anfragen",
      "Folge: langsam, teuer, Ausfall",
      "Abwehr: Rate Limits, Groessen-Limits",
      "Kosten ueberwachen"
     ],
     "yt": "model denial of service LLM",
     "src": [
      "OWASP LLM Top 10",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 115,
     "track": "ai"
    },
    {
     "t": "AI Red Teaming",
     "was": "Red Teaming heisst, absichtlich wie ein Angreifer zu denken und die KI anzugreifen, um Schwachstellen zu finden, bevor es echte Angreifer tun.",
     "pts": [
      "Angreifer-Sicht einnehmen",
      "KI gezielt zu Fehlern verleiten",
      "Schwachstellen vor Live-Gang finden",
      "Regelmaessig wiederholen"
     ],
     "yt": "AI red teaming explained",
     "src": null,
     "gh": [
      [
       "Garak (LLM Vulnerability Scanner)",
       "https://github.com/NVIDIA/garak"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 116,
     "track": "ai"
    },
    {
     "t": "AI Penetration Testing",
     "was": "Pentesting ist ein gezielter, erlaubter Test-Angriff auf das KI-System, um Sicherheitsluecken zu finden und zu melden.",
     "pts": [
      "Erlaubter Test-Angriff",
      "Sucht Luecken systematisch",
      "Bericht mit Massnahmen",
      "Wichtig vor Bank-Einsatz"
     ],
     "yt": "AI penetration testing",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 117,
     "track": "ai"
    },
    {
     "t": "AI Audit Logging",
     "was": "Audit Logging heisst, alle wichtigen KI-Aktionen luekenlos aufzuzeichnen, damit man spaeter nachvollziehen kann, was passiert ist.",
     "pts": [
      "Wer/was/wann wird protokolliert",
      "Nachvollziehbarkeit fuer Pruefungen",
      "Wichtig fuer Aufsicht und Fehlersuche",
      "Logs sicher aufbewahren"
     ],
     "yt": "AI audit logging",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 118,
     "track": "ai"
    },
    {
     "t": "AI Incident Management",
     "was": "Incident Management heisst, auf KI-Zwischenfaelle vorbereitet zu sein: Was tun, wenn die KI Mist baut? Wer wird informiert, wie stoppt man sie?",
     "pts": [
      "Plan fuer KI-Zwischenfaelle",
      "Melden, eindaemmen, beheben",
      "Notaus (Kill Switch) bereit",
      "Aus Vorfaellen lernen"
     ],
     "yt": "AI incident response plan",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 119,
     "track": "ai"
    },
    {
     "t": "AI Change Management",
     "was": "Change Management heisst, Aenderungen an KI (neues Modell, neuer Prompt) geordnet einzufuehren: pruefen, freigeben, dokumentieren.",
     "pts": [
      "Aenderungen geordnet einfuehren",
      "Testen und freigeben vor Live",
      "Zurueckrollen (Rollback) moeglich",
      "Alles dokumentieren"
     ],
     "yt": "AI change management",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 120,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "AI Ops, Qualitaet & Nutzen",
   "emoji": "📈",
   "ziel": "KI im Betrieb ueberwachen, testen, versionieren und den Nutzen belegen.",
   "topics": [
    {
     "t": "AI Model Monitoring",
     "was": "Model Monitoring heisst, die KI im Betrieb staendig zu beobachten: Ist sie noch gut, schnell und korrekt?",
     "pts": [
      "Laufende Ueberwachung der KI",
      "Qualitaet, Tempo, Kosten im Blick",
      "Alarm bei Verschlechterung",
      "Basis fuer schnelles Eingreifen"
     ],
     "yt": "AI model monitoring",
     "src": null,
     "gh": [
      [
       "Evidently AI (Monitoring)",
       "https://github.com/evidentlyai/evidently"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 121,
     "track": "ai"
    },
    {
     "t": "Model Drift",
     "was": "Model Drift heisst, dass die KI mit der Zeit schlechter wird, weil sich die Welt/Daten aendern - z.B. neue Produkte, neue Fragen.",
     "pts": [
      "KI passt nicht mehr zur neuen Realitaet",
      "Ursache: Daten/Welt aendern sich",
      "Erkennen durch Monitoring",
      "Gegenmittel: neu trainieren/anpassen"
     ],
     "yt": "model drift explained deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 122,
     "track": "ai"
    },
    {
     "t": "Model Versioning",
     "was": "Model Versioning heisst, jede Version des Modells zu benennen und aufzubewahren, damit man weiss, welche gerade laeuft und zurueck kann.",
     "pts": [
      "Jede Modell-Version benennen (z.B. v1, v2)",
      "Nachvollziehen, was live ist",
      "Zurueckrollen bei Problemen",
      "Wichtig fuer Nachweise"
     ],
     "yt": "model versioning explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 123,
     "track": "ai"
    },
    {
     "t": "Prompt Versioning",
     "was": "Prompt Versioning heisst dasselbe fuer Prompts: jede Prompt-Aenderung wird gespeichert, damit man vergleichen und zurueck kann.",
     "pts": [
      "Prompt-Aenderungen versionieren",
      "Vergleichen, welche Version besser ist",
      "Zurueckrollen moeglich",
      "Wie Code verwalten (Git)"
     ],
     "yt": "prompt versioning",
     "src": null,
     "gh": [
      [
       "Langfuse Prompt Management",
       "https://github.com/langfuse/langfuse"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 124,
     "track": "ai"
    },
    {
     "t": "Knowledge Versioning",
     "was": "Knowledge Versioning heisst, Aenderungen am Wissen (Artikel) nachzuhalten: Wer hat wann was geaendert, und zur alten Version zurueck.",
     "pts": [
      "Wissens-Aenderungen nachhalten",
      "Wer/wann/was geaendert",
      "Alte Version wiederherstellen",
      "Wichtig fuer korrekte Auskuenfte"
     ],
     "yt": "knowledge base versioning",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 125,
     "track": "ai"
    },
    {
     "t": "AI Testing",
     "was": "AI Testing heisst, die KI systematisch mit Testfaellen zu pruefen, bevor sie live geht - wie eine Qualitaetskontrolle.",
     "pts": [
      "Testfaelle vorbereiten",
      "Erwartete vs. echte Antwort vergleichen",
      "Automatisiert wiederholen",
      "Vor jedem Release"
     ],
     "yt": "AI testing methods",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 126,
     "track": "ai"
    },
    {
     "t": "AI Evaluation",
     "was": "AI Evaluation heisst, die Qualitaet der KI mit klaren Massstaeben zu bewerten - z.B. wie oft sie richtig liegt.",
     "pts": [
      "Qualitaet mit Kennzahlen messen",
      "Richtigkeit, Hilfreichheit, Sicherheit",
      "Menschliche und automatische Bewertung",
      "Vergleich von Versionen"
     ],
     "yt": "AI evaluation metrics",
     "src": null,
     "gh": [
      [
       "DeepEval (LLM Evaluation)",
       "https://github.com/confident-ai/deepeval"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 127,
     "track": "ai"
    },
    {
     "t": "AI Quality Management",
     "was": "Quality Management heisst, dauerhaft fuer gute KI-Qualitaet zu sorgen: messen, verbessern, Standards einhalten - ein Kreislauf.",
     "pts": [
      "Dauerhafter Qualitaets-Kreislauf",
      "Standards festlegen und pruefen",
      "Feedback einarbeiten",
      "Immer wieder verbessern"
     ],
     "yt": "AI quality management",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 128,
     "track": "ai"
    },
    {
     "t": "AI Cost Monitoring",
     "was": "Cost Monitoring heisst, die KI-Kosten im Blick zu behalten: Wie viele Tokens/Anfragen, was kostet das - damit es nicht teuer aus dem Ruder laeuft.",
     "pts": [
      "Kosten laufend ueberwachen",
      "Tokens und Anfragen zaehlen",
      "Budgets und Alarme setzen",
      "Guenstige Modelle wo moeglich"
     ],
     "yt": "LLM cost monitoring",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 129,
     "track": "ai"
    },
    {
     "t": "AI ROI Berechnung",
     "was": "ROI heisst Return on Investment: rechnet aus, ob sich die KI lohnt - was sie kostet gegen das, was sie einspart oder einbringt.",
     "pts": [
      "ROI = Nutzen im Verhaeltnis zu Kosten",
      "Einsparung (z.B. Agenten-Zeit) messen",
      "Kosten (Lizenz, Betrieb) gegenrechnen",
      "Zeigt, ob sich KI lohnt"
     ],
     "yt": "AI ROI berechnen erklaert",
     "src": null,
     "gh": [],
     "art": [
      [
       "McKinsey: Wert von GenAI",
       "https://www.mckinsey.com/de/publikationen"
      ],
      [
       "BCG: KI Wertschoepfung",
       "https://www.bcg.com/publications"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 130,
     "track": "ai"
    },
    {
     "t": "AI Business Case",
     "was": "Ein Business Case ist die Begruendung, warum sich ein KI-Projekt lohnt: Problem, Loesung, Kosten, Nutzen und Risiken auf einen Blick.",
     "pts": [
      "Begruendung fuer ein KI-Projekt",
      "Problem + Loesung + Kosten + Nutzen",
      "Risiken ehrlich benennen",
      "Grundlage fuer die Entscheidung"
     ],
     "yt": "AI business case erstellen",
     "src": null,
     "gh": [],
     "art": [
      [
       "BCG: AI at Scale",
       "https://www.bcg.com/capabilities/artificial-intelligence"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 131,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Eigenen Bot bauen",
   "emoji": "🧱",
   "ziel": "Von der Idee zum fertigen Bot - alle Bausteine eines eigenen KI-Bots.",
   "topics": [
    {
     "t": "Kendi Botunu Kurmak (Eigenen Bot aufsetzen)",
     "was": "Hier lernst du Schritt fuer Schritt, einen eigenen Bot zu bauen: von der Idee ueber Technik bis zum Betrieb. Die naechsten Themen sind die Bausteine.",
     "pts": [
      "Ueberblick: was gehoert zu einem Bot",
      "Idee -> Bauen -> Testen -> Betreiben",
      "Bausteine: Frontend, Backend, Wissen, Sicherheit",
      "Klein anfangen, dann erweitern"
     ],
     "yt": "eigenen chatbot bauen tutorial deutsch",
     "src": null,
     "gh": [
      [
       "Chatbot UI (Open Source)",
       "https://github.com/mckaywrigley/chatbot-ui"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 132,
     "track": "ai"
    },
    {
     "t": "Bot Architektur",
     "was": "Die Bot-Architektur ist der Bauplan: welche Teile es gibt und wie sie zusammenspielen - Frontend, Backend, Wissen, KI-Modell.",
     "pts": [
      "Bauplan aller Bot-Teile",
      "Frontend (Chat) + Backend (Logik)",
      "KI-Modell + Wissensquelle",
      "Sicherheit von Anfang an mitdenken"
     ],
     "yt": "chatbot architecture explained",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 133,
     "track": "ai"
    },
    {
     "t": "Bot Backend",
     "was": "Das Backend ist das 'Gehirn im Hintergrund': es nimmt die Nachricht, ruft die KI und Tools auf und schickt die Antwort zurueck.",
     "pts": [
      "Backend = Server-Logik",
      "Verbindet Chat, KI, Wissen, APIs",
      "Regelt Ablauf und Sicherheit",
      "Meist in Python oder JavaScript"
     ],
     "yt": "chatbot backend tutorial",
     "src": null,
     "gh": [
      [
       "FastAPI (Python Backend)",
       "https://github.com/tiangolo/fastapi"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 134,
     "track": "ai"
    },
    {
     "t": "Bot Frontend",
     "was": "Das Frontend ist das, was der Kunde sieht: das Chat-Fenster mit Ein- und Ausgabe.",
     "pts": [
      "Frontend = sichtbare Oberflaeche",
      "Chat-Fenster fuer den Nutzer",
      "Web, App oder in Genesys eingebettet",
      "Einfach und klar gestalten"
     ],
     "yt": "chatbot frontend tutorial",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 135,
     "track": "ai"
    },
    {
     "t": "Bot API Integration",
     "was": "API Integration heisst, den Bot mit anderen Systemen zu verbinden (z.B. Bank-System), damit er echte Daten holen und Aktionen ausloesen kann.",
     "pts": [
      "Bot mit fremden Systemen verbinden",
      "Ueber deren APIs",
      "Beispiel: Kontostand, Ticket anlegen",
      "Sicher authentifizieren"
     ],
     "yt": "chatbot API integration",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 136,
     "track": "ai"
    },
    {
     "t": "Bot Datenbank",
     "was": "Die Datenbank speichert, was der Bot behalten muss: Gespraeche, Nutzerdaten, Einstellungen.",
     "pts": [
      "Speicher fuer Bot-Daten",
      "Beispiel: Gespraechsverlauf",
      "SQL oder NoSQL",
      "Datenschutz beachten"
     ],
     "yt": "chatbot database design",
     "src": null,
     "gh": [
      [
       "PostgreSQL",
       "https://github.com/postgres/postgres"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 137,
     "track": "ai"
    },
    {
     "t": "Bot Knowledge Base",
     "was": "Die Knowledge Base des Bots ist sein Wissen: die Artikel/Dokumente, aus denen er Antworten holt (siehe RAG).",
     "pts": [
      "Wissensquelle des Bots",
      "Artikel/Dokumente pflegen",
      "Wird ueber RAG genutzt",
      "Aktuell halten"
     ],
     "yt": "chatbot knowledge base",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 138,
     "track": "ai"
    },
    {
     "t": "Bot RAG Pipeline",
     "was": "Die RAG Pipeline ist der Wissens-Ablauf im Bot: Dokument laden, chunken, embedden, speichern, suchen, antworten.",
     "pts": [
      "Kompletter Wissens-Ablauf",
      "Laden -> Chunk -> Embedding -> Vector DB",
      "Suchen -> KI antwortet",
      "Herzstueck eines Wissens-Bots"
     ],
     "yt": "build RAG pipeline tutorial",
     "src": null,
     "gh": [
      [
       "LlamaIndex",
       "https://github.com/run-llama/llama_index"
      ],
      [
       "LangChain",
       "https://github.com/langchain-ai/langchain"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 139,
     "track": "ai"
    },
    {
     "t": "Bot Authentication",
     "was": "Authentication heisst, sicherzustellen, wer der Nutzer ist - besonders wichtig, bevor der Bot sensible Bankdaten zeigt.",
     "pts": [
      "Nutzer sicher identifizieren",
      "Login/Verifizierung vor sensiblen Aktionen",
      "Nie ungeschuetzt Kontodaten zeigen",
      "Standards nutzen (OAuth)"
     ],
     "yt": "chatbot authentication security",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 140,
     "track": "ai"
    },
    {
     "t": "Bot Logging",
     "was": "Logging heisst, aufzuschreiben, was der Bot tut, um Fehler zu finden und Vorfaelle nachzuvollziehen (datenschutzkonform).",
     "pts": [
      "Aufzeichnen der Bot-Aktivitaet",
      "Hilft bei Fehlersuche",
      "PII vorsichtig behandeln",
      "Logs sicher speichern"
     ],
     "yt": "chatbot logging best practices",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 141,
     "track": "ai"
    },
    {
     "t": "Bot Monitoring",
     "was": "Monitoring heisst, den Bot im Betrieb zu ueberwachen: laeuft er, ist er schnell, sind die Antworten gut?",
     "pts": [
      "Live-Ueberwachung des Bots",
      "Verfuegbarkeit und Tempo",
      "Antwortqualitaet und Fehler",
      "Alarme bei Problemen"
     ],
     "yt": "chatbot monitoring production",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 142,
     "track": "ai"
    },
    {
     "t": "Bot Deployment",
     "was": "Deployment heisst, den Bot live zu schalten, damit echte Kunden ihn nutzen koennen - kontrolliert und ruecknehmbar.",
     "pts": [
      "Bot live schalten",
      "Erst Test, dann Produktion",
      "Schrittweise ausrollen",
      "Rollback moeglich"
     ],
     "yt": "bot deployment tutorial",
     "src": null,
     "gh": [
      [
       "Docker",
       "https://github.com/docker"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 143,
     "track": "ai"
    },
    {
     "t": "Bot Hosting",
     "was": "Hosting heisst, wo der Bot laeuft: in der Cloud oder auf eigenen Servern. In Banken oft mit strengen Vorgaben.",
     "pts": [
      "Wo laeuft der Bot (Cloud/On-Prem)",
      "Cloud: schnell, flexibel",
      "On-Prem: mehr Kontrolle",
      "Bank-Vorgaben beachten (Region, Datenschutz)"
     ],
     "yt": "bot hosting options",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 144,
     "track": "ai"
    },
    {
     "t": "Bot Security",
     "was": "Bot Security fasst alle Schutzmassnahmen zusammen: Angriffe abwehren, Daten schuetzen, Rechte begrenzen.",
     "pts": [
      "Gesamter Schutz des Bots",
      "Gegen Prompt Injection & Co.",
      "Daten und Zugriffe absichern",
      "Regelmaessig pruefen"
     ],
     "yt": "chatbot security best practices",
     "src": [
      "OWASP LLM Top 10",
      "https://genai.owasp.org/llm-top-10/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 145,
     "track": "ai"
    },
    {
     "t": "Bot Testing",
     "was": "Bot Testing heisst, den Bot vor und nach Live gruendlich zu pruefen: versteht er richtig, antwortet er korrekt, ist er sicher?",
     "pts": [
      "Systematisch testen",
      "Verstehen, Antworten, Sicherheit",
      "Auch Grenzfaelle",
      "Vor jedem Release"
     ],
     "yt": "chatbot testing",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 146,
     "track": "ai"
    },
    {
     "t": "Bot Training",
     "was": "Bot Training heisst, dem Bot mit Beispielen und Wissen beizubringen, gute Antworten zu geben, und ihn laufend nachzubessern.",
     "pts": [
      "Mit Beispielen/Wissen trainieren",
      "Fehler ansehen und nachbessern",
      "Regelmaessig wiederholen",
      "Echte Gespraeche nutzen"
     ],
     "yt": "chatbot training tutorial",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 147,
     "track": "ai"
    },
    {
     "t": "Bot Fine-Tuning",
     "was": "Fine-Tuning heisst, ein KI-Modell mit eigenen Beispielen nachzuschaerfen, damit es besser zum eigenen Fall passt (nur wenn noetig).",
     "pts": [
      "Modell mit eigenen Daten nachschulen",
      "Fuer speziellen Stil/Fachwissen",
      "Aufwendig - oft reicht RAG",
      "Datenschutz bei Trainingsdaten beachten"
     ],
     "yt": "fine-tuning LLM erklaert",
     "src": null,
     "gh": [
      [
       "Hugging Face PEFT (LoRA)",
       "https://github.com/huggingface/peft"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 148,
     "track": "ai"
    },
    {
     "t": "Bot Personality",
     "was": "Die Bot Personality ist der 'Charakter' des Bots: freundlich, sachlich, hilfsbereit - passend zur Bank.",
     "pts": [
      "Charakter/Auftreten des Bots",
      "Passend zur Marke der Bank",
      "Konsistent halten",
      "Im Prompt festlegen"
     ],
     "yt": "chatbot personality design",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 149,
     "track": "ai"
    },
    {
     "t": "Bot Tone of Voice",
     "was": "Der Tone of Voice ist der Ton: wie der Bot spricht - hoeflich, klar, nicht zu locker. In Banken eher serioes und einfach.",
     "pts": [
      "Sprachstil des Bots",
      "Hoeflich, klar, verstaendlich",
      "Einheitlich in allen Antworten",
      "Fachbegriffe erklaeren"
     ],
     "yt": "chatbot tone of voice",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 150,
     "track": "ai"
    },
    {
     "t": "Bot Fallback Design",
     "was": "Fallback Design heisst, gut zu planen, was der Bot tut, wenn er nicht weiterweiss: hoeflich nachfragen oder weiterleiten.",
     "pts": [
      "Plan fuer 'weiss nicht weiter'",
      "Freundlich nachfragen",
      "Nach X Versuchen weiterleiten",
      "Nie den Kunden im Stich lassen"
     ],
     "yt": "chatbot fallback design",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 151,
     "track": "ai"
    },
    {
     "t": "Bot Handover Design",
     "was": "Handover heisst Uebergabe an einen Menschen: der Bot reicht das Gespraech samt Verlauf sauber an einen Agent weiter.",
     "pts": [
      "Uebergabe an echten Agent",
      "Gespraechsverlauf mitgeben",
      "Klar ankuendigen ('Ich verbinde Sie')",
      "Nahtlos, ohne Wiederholung"
     ],
     "yt": "chatbot human handover",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 152,
     "track": "ai"
    },
    {
     "t": "Bot Analytics",
     "was": "Bot Analytics zeigt in Zahlen, wie gut der Bot laeuft: Wie viele Anliegen loest er allein, wo bricht es ab?",
     "pts": [
      "Kennzahlen des Bots",
      "Containment (allein geloest)",
      "Abbrueche und No Matches",
      "Grundlage fuer Verbesserung"
     ],
     "yt": "chatbot analytics metrics",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 153,
     "track": "ai"
    },
    {
     "t": "Bot Continuous Improvement",
     "was": "Continuous Improvement heisst staendige Verbesserung: aus echten Gespraechen lernen und den Bot Woche fuer Woche besser machen.",
     "pts": [
      "Staendige Verbesserung (Kreislauf)",
      "Aus echten Daten lernen",
      "Regelmaessig Wissen/Intents pflegen",
      "Nie 'fertig'"
     ],
     "yt": "chatbot continuous improvement",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 154,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Private & lokale AI",
   "emoji": "🏠",
   "ziel": "KI im eigenen Haus betreiben - fuer maximalen Datenschutz in Banken.",
   "topics": [
    {
     "t": "Private AI",
     "was": "Private AI heisst, KI so zu nutzen, dass Daten die eigene Kontrolle nicht verlassen - wichtig bei sensiblen Bankdaten.",
     "pts": [
      "Daten bleiben unter eigener Kontrolle",
      "Kein Abfluss an fremde Anbieter",
      "Fuer sensible Bereiche",
      "Kann Cloud (privat) oder lokal sein"
     ],
     "yt": "private AI erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 155,
     "track": "ai"
    },
    {
     "t": "Local AI",
     "was": "Local AI heisst, die KI laeuft auf dem eigenen Rechner/Server statt in einer fremden Cloud. Volle Kontrolle, aber eigene Hardware noetig.",
     "pts": [
      "KI laeuft lokal/im eigenen Haus",
      "Keine Daten nach aussen",
      "Braucht eigene Rechenleistung",
      "Gut fuer Datenschutz"
     ],
     "yt": "local AI setup tutorial",
     "src": null,
     "gh": [
      [
       "Ollama",
       "https://github.com/ollama/ollama"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 156,
     "track": "ai"
    },
    {
     "t": "On-Prem AI",
     "was": "On-Prem (On-Premises) heisst 'im eigenen Rechenzentrum'. Die Bank betreibt die KI selbst, hinter der eigenen Firewall.",
     "pts": [
      "KI im eigenen Rechenzentrum",
      "Hinter der Firewall der Bank",
      "Volle Kontrolle und Compliance",
      "Mehr Aufwand fuer Betrieb"
     ],
     "yt": "on-premise AI deployment",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 157,
     "track": "ai"
    },
    {
     "t": "Open-Source LLMs",
     "was": "Open-Source LLMs sind frei verfuegbare KI-Modelle, die man selbst herunterladen und betreiben kann - z.B. Llama oder Mistral.",
     "pts": [
      "Frei nutzbare KI-Modelle",
      "Selbst hosten moeglich",
      "Beispiele: Llama, Mistral, Qwen",
      "Gut fuer private/lokale AI"
     ],
     "yt": "open source LLM erklaert",
     "src": null,
     "gh": [
      [
       "Hugging Face Modelle",
       "https://github.com/huggingface"
      ],
      [
       "Ollama",
       "https://github.com/ollama/ollama"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 158,
     "track": "ai"
    },
    {
     "t": "Ollama",
     "was": "Ollama ist ein einfaches Programm, um Open-Source-KI-Modelle mit wenigen Befehlen lokal auf dem eigenen Rechner zu starten.",
     "pts": [
      "Einfaches Tool fuer lokale LLMs",
      "Ein Befehl: Modell laden und chatten",
      "Laeuft auf Mac, Windows, Linux",
      "Gut fuer erste Versuche mit Local AI"
     ],
     "yt": "Ollama tutorial deutsch",
     "src": null,
     "gh": [
      [
       "Ollama",
       "https://github.com/ollama/ollama"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 159,
     "track": "ai"
    },
    {
     "t": "llama.cpp",
     "was": "llama.cpp ist ein sehr effizientes Programm, um KI-Modelle auch auf normaler Hardware (sogar ohne teure GPU) laufen zu lassen.",
     "pts": [
      "Laesst LLMs effizient laufen",
      "Auch auf CPU/normaler Hardware",
      "Basis vieler lokaler Tools",
      "Sehr beliebt in der Open-Source-Welt"
     ],
     "yt": "llama.cpp tutorial",
     "src": null,
     "gh": [
      [
       "llama.cpp",
       "https://github.com/ggerganov/llama.cpp"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 160,
     "track": "ai"
    },
    {
     "t": "Hugging Face Models",
     "was": "Hugging Face ist eine grosse Plattform mit tausenden frei verfuegbaren KI-Modellen zum Herunterladen und Ausprobieren.",
     "pts": [
      "Grosse Sammlung freier KI-Modelle",
      "Modelle, Datensaetze, Tools",
      "Zum Herunterladen und Testen",
      "Bekannteste Open-Source-KI-Plattform"
     ],
     "yt": "Hugging Face tutorial deutsch",
     "src": null,
     "gh": [
      [
       "Transformers (Hugging Face)",
       "https://github.com/huggingface/transformers"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 161,
     "track": "ai"
    },
    {
     "t": "Fine-Tuning",
     "was": "Fine-Tuning heisst, ein fertiges Modell mit eigenen Beispielen nachzuschulen, damit es besser zur eigenen Aufgabe passt.",
     "pts": [
      "Modell mit eigenen Daten nachschulen",
      "Fuer speziellen Stil/Fachwissen",
      "Braucht gute Trainingsdaten",
      "Oft reicht aber RAG"
     ],
     "yt": "fine-tuning LLM tutorial",
     "src": null,
     "gh": [
      [
       "Hugging Face PEFT",
       "https://github.com/huggingface/peft"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 162,
     "track": "ai"
    },
    {
     "t": "LoRA",
     "was": "LoRA ist eine guenstige Art des Fine-Tunings: man schult nur einen kleinen Zusatz-Teil des Modells, nicht das ganze - spart viel Aufwand.",
     "pts": [
      "LoRA = sparsames Fine-Tuning",
      "Nur kleiner Zusatz wird trainiert",
      "Weniger Rechenleistung noetig",
      "Beliebt fuer eigene Modelle"
     ],
     "yt": "LoRA fine-tuning erklaert",
     "src": null,
     "gh": [
      [
       "Hugging Face PEFT (LoRA)",
       "https://github.com/huggingface/peft"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 163,
     "track": "ai"
    },
    {
     "t": "Quantization",
     "was": "Quantization heisst, ein Modell zu 'verkleinern', indem man die Zahlen vergroebert. Es wird kleiner und schneller, mit nur wenig Qualitaetsverlust.",
     "pts": [
      "Modell kleiner/schneller machen",
      "Zahlen mit weniger Genauigkeit",
      "Laeuft dann auf schwaecherer Hardware",
      "Wenig Qualitaetsverlust"
     ],
     "yt": "quantization LLM erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 164,
     "track": "ai"
    },
    {
     "t": "Model Serving",
     "was": "Model Serving heisst, ein KI-Modell so bereitzustellen, dass Programme es ueber eine API abfragen koennen - stabil und schnell.",
     "pts": [
      "Modell als API bereitstellen",
      "Fuer viele Anfragen ausgelegt",
      "Stabil und schnell",
      "Basis fuer den Produktivbetrieb"
     ],
     "yt": "model serving explained",
     "src": null,
     "gh": [
      [
       "vLLM (schnelles Serving)",
       "https://github.com/vllm-project/vllm"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 165,
     "track": "ai"
    },
    {
     "t": "Inference Server",
     "was": "Ein Inference Server ist der Server, der die KI-Antworten berechnet (Inference = das 'Ausrechnen' einer Antwort).",
     "pts": [
      "Server, der KI-Antworten berechnet",
      "Inference = Antwort erzeugen",
      "Optimiert fuer Tempo/Durchsatz",
      "Beispiele: vLLM, TGI"
     ],
     "yt": "inference server explained",
     "src": null,
     "gh": [
      [
       "Text Generation Inference",
       "https://github.com/huggingface/text-generation-inference"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 166,
     "track": "ai"
    },
    {
     "t": "GPU Grundlagen",
     "was": "Eine GPU ist ein spezieller Rechen-Chip, der viele Rechnungen gleichzeitig macht. KI braucht GPUs, um schnell zu sein.",
     "pts": [
      "GPU = schneller Parallel-Rechner",
      "KI rechnet damit viel schneller",
      "Teuer, aber wichtig fuer grosse Modelle",
      "VRAM (Speicher) begrenzt die Modellgroesse"
     ],
     "yt": "GPU fuer KI einfach erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 167,
     "track": "ai"
    },
    {
     "t": "CPU Inference",
     "was": "CPU Inference heisst, die KI auf einem normalen Prozessor (CPU) laufen zu lassen - guenstiger, aber langsamer als mit GPU.",
     "pts": [
      "KI auf normaler CPU laufen lassen",
      "Guenstiger, aber langsamer",
      "Gut fuer kleine Modelle (SLM)",
      "Mit Quantization machbar"
     ],
     "yt": "CPU inference LLM",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 168,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "AI Orchestration & Plattformen",
   "emoji": "🧩",
   "ziel": "Werkzeuge und Plattformen, mit denen man KI-Anwendungen zusammensetzt.",
   "topics": [
    {
     "t": "AI Orchestration",
     "was": "AI Orchestration heisst, mehrere KI-Bausteine und Schritte zu einem sinnvollen Ablauf zu verbinden - wie ein Dirigent, der das Orchester fuehrt.",
     "pts": [
      "Bausteine zu einem Ablauf verbinden",
      "Modell + Tools + Wissen + Logik",
      "Steuert die Reihenfolge",
      "Frameworks helfen dabei"
     ],
     "yt": "AI orchestration erklaert",
     "src": null,
     "gh": [
      [
       "LangChain",
       "https://github.com/langchain-ai/langchain"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 169,
     "track": "ai"
    },
    {
     "t": "LangChain",
     "was": "LangChain ist ein beliebtes Werkzeug (Framework), um KI-Anwendungen zu bauen: es verbindet Modelle, Wissen und Tools mit fertigen Bausteinen.",
     "pts": [
      "Framework fuer KI-Apps",
      "Fertige Bausteine (Chains)",
      "Verbindet Modelle, RAG, Tools",
      "Sehr grosse Community"
     ],
     "yt": "LangChain tutorial deutsch",
     "src": null,
     "gh": [
      [
       "LangChain",
       "https://github.com/langchain-ai/langchain"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 170,
     "track": "ai"
    },
    {
     "t": "LangGraph",
     "was": "LangGraph baut auf LangChain auf und ist fuer Agenten mit mehreren Schritten und Schleifen gedacht - als klarer, steuerbarer Ablauf-Graph.",
     "pts": [
      "Fuer mehrstufige Agenten/Workflows",
      "Ablauf als steuerbarer Graph",
      "Gut kontrollierbar",
      "Von den LangChain-Machern"
     ],
     "yt": "LangGraph tutorial",
     "src": null,
     "gh": [
      [
       "LangGraph",
       "https://github.com/langchain-ai/langgraph"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 171,
     "track": "ai"
    },
    {
     "t": "LlamaIndex",
     "was": "LlamaIndex ist ein Framework, das besonders gut darin ist, eigene Dokumente fuer RAG vorzubereiten und durchsuchbar zu machen.",
     "pts": [
      "Framework speziell fuer RAG",
      "Dokumente laden, chunken, indexieren",
      "Einfache Wissens-Suche",
      "Gut fuer Wissens-Bots"
     ],
     "yt": "LlamaIndex tutorial",
     "src": null,
     "gh": [
      [
       "LlamaIndex",
       "https://github.com/run-llama/llama_index"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 172,
     "track": "ai"
    },
    {
     "t": "CrewAI",
     "was": "CrewAI ist ein Framework fuer Multi-Agent-Systeme: man gibt mehreren Agenten Rollen (wie ein Team), die zusammen eine Aufgabe loesen.",
     "pts": [
      "Framework fuer mehrere Agenten",
      "Agenten mit Rollen wie ein Team",
      "Aufgaben aufteilen",
      "Einfach zu starten"
     ],
     "yt": "CrewAI tutorial",
     "src": null,
     "gh": [
      [
       "CrewAI",
       "https://github.com/crewAIInc/crewAI"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 173,
     "track": "ai"
    },
    {
     "t": "AutoGen",
     "was": "AutoGen ist ein Framework von Microsoft, mit dem mehrere Agenten miteinander reden und gemeinsam Aufgaben loesen koennen.",
     "pts": [
      "Microsoft-Framework fuer Agenten",
      "Agenten unterhalten sich",
      "Loesen Aufgaben gemeinsam",
      "Fuer komplexere Faelle"
     ],
     "yt": "AutoGen tutorial",
     "src": null,
     "gh": [
      [
       "AutoGen",
       "https://github.com/microsoft/autogen"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 174,
     "track": "ai"
    },
    {
     "t": "n8n AI Automation",
     "was": "n8n ist ein Baukasten, um Ablaeufe ohne viel Programmieren zu automatisieren (Low-Code) - auch mit KI-Schritten, per Drag-and-drop.",
     "pts": [
      "Low-Code Automatisierung",
      "Bausteine per Drag-and-drop",
      "Kann KI-Schritte einbauen",
      "Gut fuer schnelle Automationen"
     ],
     "yt": "n8n AI automation tutorial deutsch",
     "src": null,
     "gh": [
      [
       "n8n",
       "https://github.com/n8n-io/n8n"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 175,
     "track": "ai"
    },
    {
     "t": "Flowise",
     "was": "Flowise ist ein Werkzeug, mit dem man KI-Bots und RAG-Ablaeufe visuell zusammenklickt, ohne zu programmieren.",
     "pts": [
      "Visueller Baukasten fuer KI-Bots",
      "RAG und Agenten per Klick",
      "Baut auf LangChain auf",
      "Gut zum Ausprobieren"
     ],
     "yt": "Flowise tutorial",
     "src": null,
     "gh": [
      [
       "Flowise",
       "https://github.com/FlowiseAI/Flowise"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 176,
     "track": "ai"
    },
    {
     "t": "Dify",
     "was": "Dify ist eine Plattform, um KI-Apps und Bots zu bauen und zu betreiben - mit Oberflaeche fuer Prompts, Wissen und Betrieb.",
     "pts": [
      "Plattform fuer KI-Apps/Bots",
      "Prompts, RAG, Betrieb an einem Ort",
      "Auch selbst hostbar",
      "Gut fuer Teams"
     ],
     "yt": "Dify tutorial",
     "src": null,
     "gh": [
      [
       "Dify",
       "https://github.com/langgenius/dify"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 177,
     "track": "ai"
    },
    {
     "t": "Microsoft Copilot Studio",
     "was": "Copilot Studio ist das Microsoft-Werkzeug, um Bots und Copilots zu bauen - besonders praktisch, wenn die Firma Microsoft nutzt.",
     "pts": [
      "Microsofts Bot-/Copilot-Baukasten",
      "Gut in Microsoft-Welt integriert",
      "Wenig Programmieren noetig",
      "Fuer Firmen mit M365"
     ],
     "yt": "Copilot Studio tutorial deutsch",
     "src": [
      "Microsoft Learn: Copilot Studio",
      "https://learn.microsoft.com/de-de/microsoft-copilot-studio/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 178,
     "track": "ai"
    },
    {
     "t": "Azure AI Foundry",
     "was": "Azure AI Foundry ist die KI-Plattform von Microsoft in der Azure-Cloud, um KI-Modelle und -Apps zu bauen und zu betreiben.",
     "pts": [
      "Microsofts KI-Plattform (Azure)",
      "Modelle nutzen und Apps bauen",
      "Fuer groessere Projekte",
      "Enterprise-Funktionen"
     ],
     "yt": "Azure AI Foundry overview",
     "src": [
      "Microsoft Learn: Azure AI",
      "https://learn.microsoft.com/de-de/azure/ai-foundry/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 179,
     "track": "ai"
    },
    {
     "t": "AWS Bedrock",
     "was": "AWS Bedrock ist die KI-Plattform von Amazon: man kann verschiedene KI-Modelle ueber die AWS-Cloud nutzen, ohne sie selbst zu betreiben.",
     "pts": [
      "Amazons KI-Plattform (AWS)",
      "Viele Modelle ueber eine API",
      "Kein eigener Modell-Betrieb noetig",
      "Fuer AWS-Kunden praktisch"
     ],
     "yt": "AWS Bedrock tutorial",
     "src": [
      "AWS: Bedrock",
      "https://aws.amazon.com/de/bedrock/"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 180,
     "track": "ai"
    },
    {
     "t": "Google Vertex AI",
     "was": "Vertex AI ist die KI-Plattform von Google in der Google Cloud, um Modelle (z.B. Gemini) zu nutzen und KI-Apps zu bauen.",
     "pts": [
      "Googles KI-Plattform (Google Cloud)",
      "Gemini-Modelle nutzen",
      "Apps bauen und betreiben",
      "Fuer Google-Cloud-Kunden"
     ],
     "yt": "Google Vertex AI tutorial",
     "src": [
      "Google Cloud: Vertex AI",
      "https://cloud.google.com/vertex-ai?hl=de"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 181,
     "track": "ai"
    },
    {
     "t": "OpenAI API",
     "was": "Die OpenAI API gibt Zugriff auf die GPT-Modelle. Programme koennen darueber Texte erzeugen, zusammenfassen oder Fragen beantworten lassen.",
     "pts": [
      "Zugriff auf GPT-Modelle per API",
      "Fuer Text, Chat, Tools",
      "Einfach zu starten",
      "Kosten pro Token beachten"
     ],
     "yt": "OpenAI API tutorial deutsch",
     "src": [
      "OpenAI Doku",
      "https://platform.openai.com/docs"
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 182,
     "track": "ai"
    },
    {
     "t": "Anthropic Claude API",
     "was": "Die Anthropic Claude API gibt Zugriff auf die Claude-Modelle - stark bei langen Texten, Tool Use und sicherem, hilfreichem Verhalten.",
     "pts": [
      "Zugriff auf Claude-Modelle per API",
      "Gut fuer lange Texte und Tools",
      "Fokus auf Sicherheit/Hilfreichheit",
      "Unterstuetzt MCP und Tool Use"
     ],
     "yt": "Anthropic Claude API tutorial",
     "src": [
      "Anthropic Doku",
      "https://docs.anthropic.com/"
     ],
     "gh": [
      [
       "Anthropic SDK (Python)",
       "https://github.com/anthropics/anthropic-sdk-python"
      ],
      [
       "Anthropic Cookbook",
       "https://github.com/anthropics/anthropic-cookbook"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 183,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "AI Anwendungen & Bank-Use-Cases",
   "emoji": "🏛️",
   "ziel": "Wo KI im Contact Center und in der Bank konkret hilft.",
   "topics": [
    {
     "t": "AI App Architektur",
     "was": "Die AI App Architektur ist der Gesamt-Bauplan einer KI-Anwendung: Oberflaeche, Logik, KI-Modell, Wissen und Sicherheit - sauber verbunden.",
     "pts": [
      "Gesamt-Bauplan einer KI-App",
      "Frontend + Backend + Modell + Wissen",
      "Sicherheit und Datenschutz eingebaut",
      "Skalierbar planen"
     ],
     "yt": "AI application architecture",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 184,
     "track": "ai"
    },
    {
     "t": "AI Workflow Automation",
     "was": "Hier automatisiert KI ganze Arbeitsablaeufe: sie erledigt wiederkehrende Schritte selbst und uebergibt nur Ausnahmen an Menschen.",
     "pts": [
      "KI automatisiert Ablaeufe",
      "Wiederkehrende Aufgaben ohne Mensch",
      "Ausnahmen an Menschen",
      "Spart Zeit und Fehler"
     ],
     "yt": "AI workflow automation banking",
     "src": null,
     "gh": [
      [
       "n8n",
       "https://github.com/n8n-io/n8n"
      ]
     ],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 185,
     "track": "ai"
    },
    {
     "t": "AI Document Processing",
     "was": "KI liest und versteht Dokumente automatisch - z.B. Vertraege oder Ausweise - und holt die wichtigen Infos heraus.",
     "pts": [
      "Dokumente automatisch verstehen",
      "Wichtige Felder herausziehen",
      "Beispiel: Antrag, Rechnung, Ausweis",
      "Spart manuelles Abtippen"
     ],
     "yt": "AI document processing",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 186,
     "track": "ai"
    },
    {
     "t": "AI OCR",
     "was": "OCR (Optical Character Recognition) macht aus einem Foto/Scan lesbaren Text. KI-OCR erkennt sogar schwierige Vorlagen.",
     "pts": [
      "OCR = Text aus Bild/Scan erkennen",
      "Aus Foto wird lesbarer Text",
      "Beispiel: gescannter Antrag",
      "Basis fuer Dokumenten-Verarbeitung"
     ],
     "yt": "OCR einfach erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 187,
     "track": "ai"
    },
    {
     "t": "AI Speech-to-Text",
     "was": "Speech-to-Text (STT) macht aus gesprochener Sprache Text. So kann ein Voice Bot verstehen, was der Kunde sagt.",
     "pts": [
      "STT = Gesprochenes zu Text",
      "Basis fuer Voice Bots",
      "Auch fuer Gespraechs-Auswertung",
      "Qualitaet haengt von Audio ab"
     ],
     "yt": "speech to text erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 188,
     "track": "ai"
    },
    {
     "t": "AI Text-to-Speech",
     "was": "Text-to-Speech (TTS) macht aus Text gesprochene Sprache. So kann ein Voice Bot dem Kunden antworten.",
     "pts": [
      "TTS = Text zu Sprache",
      "Bot 'spricht' mit dem Kunden",
      "Natuerliche Stimmen moeglich",
      "Gegenstueck zu STT"
     ],
     "yt": "text to speech erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 189,
     "track": "ai"
    },
    {
     "t": "AI Voice Bot",
     "was": "Ein AI Voice Bot ist ein sprechender Bot am Telefon: er versteht (STT), denkt (KI) und antwortet (TTS) - ganz ohne Menschen.",
     "pts": [
      "Sprechender Bot am Telefon",
      "STT + KI + TTS zusammen",
      "Loest einfache Anliegen automatisch",
      "Uebergibt bei Bedarf an Agent"
     ],
     "yt": "AI voice bot banking",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 190,
     "track": "ai"
    },
    {
     "t": "AI Translation",
     "was": "KI-Uebersetzung uebersetzt live zwischen Sprachen. So kann ein Agent auch Kunden helfen, deren Sprache er nicht spricht.",
     "pts": [
      "Automatische Uebersetzung",
      "Live im Chat/Gespraech",
      "Mehr Kunden erreichbar",
      "Qualitaet pruefen bei Rechtsthemen"
     ],
     "yt": "AI translation live chat",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 191,
     "track": "ai"
    },
    {
     "t": "AI Summarization",
     "was": "KI-Zusammenfassung macht aus langem Text kurze Kernaussagen - z.B. eine lange Kunden-Historie in drei Saetzen.",
     "pts": [
      "Lange Texte kurz zusammenfassen",
      "Beispiel: Gespraechs-Zusammenfassung",
      "Spart Lesezeit",
      "Kernaussagen behalten"
     ],
     "yt": "AI summarization erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 192,
     "track": "ai"
    },
    {
     "t": "AI Classification",
     "was": "KI-Klassifizierung sortiert Dinge automatisch in Kategorien - z.B. ordnet sie E-Mails den richtigen Abteilungen zu.",
     "pts": [
      "Automatisch in Kategorien einsortieren",
      "Beispiel: Anliegen -> Abteilung",
      "Schnell und einheitlich",
      "Basis fuer smartes Routing"
     ],
     "yt": "AI text classification erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 193,
     "track": "ai"
    },
    {
     "t": "AI Sentiment Analysis",
     "was": "Sentiment Analysis erkennt die Stimmung im Text: positiv, neutral oder negativ - so sieht man, ob ein Kunde veraergert ist.",
     "pts": [
      "Stimmung im Text erkennen",
      "Positiv / neutral / negativ",
      "Warnung bei Aerger",
      "Hilft, Eskalationen zu vermeiden"
     ],
     "yt": "sentiment analysis erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 194,
     "track": "ai"
    },
    {
     "t": "AI Emotion Detection",
     "was": "Emotion Detection erkennt Gefuehle (z.B. Wut, Sorge) in Stimme oder Text - so kann man besonders sensibel reagieren.",
     "pts": [
      "Gefuehle erkennen (Wut, Sorge ...)",
      "In Text oder Stimme",
      "Fuer einfuehlsame Reaktion",
      "Datenschutz beachten"
     ],
     "yt": "emotion detection AI",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 195,
     "track": "ai"
    },
    {
     "t": "AI Fraud Detection",
     "was": "Fraud Detection heisst Betrugserkennung: KI erkennt verdaechtige Muster (z.B. seltsame Ueberweisungen) und schlaegt Alarm.",
     "pts": [
      "Betrug/Missbrauch erkennen",
      "Ungewoehnliche Muster finden",
      "Alarm in Echtzeit",
      "Sehr wichtig in Banken"
     ],
     "yt": "AI fraud detection banking",
     "src": null,
     "gh": [],
     "art": [
      [
       "BaFin: Betrugspraevention & KI",
       "https://www.bafin.de/DE/Aufsicht/FinTech/KuenstlicheIntelligenz/kuenstliche_intelligenz_node.html"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 196,
     "track": "ai"
    },
    {
     "t": "AI Recommendation Systems",
     "was": "Empfehlungssysteme schlagen passende Dinge vor - z.B. das richtige Produkt oder den naechsten Schritt fuer den Kunden.",
     "pts": [
      "Passende Vorschlaege machen",
      "Beispiel: passendes Produkt/Angebot",
      "Auf Basis von Daten/Verhalten",
      "Hilft Kunden und Vertrieb"
     ],
     "yt": "recommendation systems erklaert",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 197,
     "track": "ai"
    },
    {
     "t": "AI Search",
     "was": "AI Search ist eine intelligente Suche, die die Bedeutung versteht (semantisch) und so bessere Treffer liefert als reine Wortsuche.",
     "pts": [
      "Intelligente, sinn-verstehende Suche",
      "Bessere Treffer als Wortsuche",
      "Grundlage: Embeddings",
      "Fuer Kunden und Agenten"
     ],
     "yt": "AI search semantic",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 198,
     "track": "ai"
    },
    {
     "t": "AI Knowledge Management",
     "was": "KI-Wissensmanagement heisst, Firmenwissen mit KI zu ordnen, auffindbar zu machen und aktuell zu halten.",
     "pts": [
      "Wissen mit KI ordnen/auffindbar machen",
      "Aktuell und konsistent halten",
      "Fuer Bot, Agent, Self-Service",
      "Basis guter Auskuenfte"
     ],
     "yt": "AI knowledge management",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 199,
     "track": "ai"
    },
    {
     "t": "AI Customer Service Automation",
     "was": "Hier automatisiert KI den Kundenservice: Bots loesen Standardfaelle, Menschen kuemmern sich um das Schwierige.",
     "pts": [
      "KI automatisiert Kundenservice",
      "Bots fuer Standardfaelle",
      "Menschen fuer Komplexes",
      "Rund um die Uhr erreichbar"
     ],
     "yt": "AI customer service automation",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 200,
     "track": "ai"
    },
    {
     "t": "AI Agent Assist",
     "was": "AI Agent Assist unterstuetzt den menschlichen Agent live: sie schlaegt Antworten und Wissen vor, waehrend er mit dem Kunden spricht.",
     "pts": [
      "Live-Hilfe fuer den Agent",
      "Antworten und Wissen vorschlagen",
      "Schneller und sicherer arbeiten",
      "Siehe auch Genesys Agent Assist"
     ],
     "yt": "AI agent assist",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 201,
     "track": "ai"
    },
    {
     "t": "AI Copilot Systeme",
     "was": "Ein AI Copilot ist ein KI-Assistent, der einem Mitarbeiter zur Seite steht und mitdenkt - beim Schreiben, Suchen und Entscheiden.",
     "pts": [
      "KI-Assistent fuer Mitarbeiter",
      "Denkt mit, schlaegt vor",
      "Beispiel: Agent Copilot",
      "Mensch behaelt Kontrolle"
     ],
     "yt": "AI copilot systems",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 202,
     "track": "ai"
    },
    {
     "t": "AI Banking Use Cases",
     "was": "Hier eine Uebersicht, wo KI in der Bank hilft: Service, Betrug, Kredit, Karten, Online-Banking, Reporting.",
     "pts": [
      "Ueberblick der Bank-Einsatzfelder",
      "Service, Betrug, Kredit, Karten",
      "Immer mit Datenschutz/Compliance",
      "Klein starten, dann ausweiten"
     ],
     "yt": "AI use cases banking deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Bitkom: KI in Banken",
       "https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 203,
     "track": "ai"
    },
    {
     "t": "AI Contact Center Use Cases",
     "was": "Im Contact Center hilft KI beim Routing, mit Bots, Agent Assist, Zusammenfassungen und Auswertungen.",
     "pts": [
      "Smart Routing und Bots",
      "Agent Assist und Copilot",
      "Zusammenfassungen und Analyse",
      "Kuerzere Wartezeiten"
     ],
     "yt": "AI contact center use cases",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 204,
     "track": "ai"
    },
    {
     "t": "AI Service Desk Use Cases",
     "was": "Am Service Desk (interne IT-Hilfe) loest KI haeufige Fragen (Passwort, Zugriff) automatisch und entlastet die IT.",
     "pts": [
      "Interne IT-Hilfe automatisieren",
      "Beispiel: Passwort zuruecksetzen",
      "Haeufige Tickets automatisch loesen",
      "Entlastet die IT"
     ],
     "yt": "AI service desk automation",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 205,
     "track": "ai"
    },
    {
     "t": "AI Beschwerdemanagement",
     "was": "KI hilft bei Beschwerden: sie erkennt Aerger frueh, sortiert die Beschwerde richtig ein und schlaegt Loesungen vor.",
     "pts": [
      "Beschwerden schneller bearbeiten",
      "Aerger frueh erkennen (Sentiment)",
      "Richtig einsortieren und priorisieren",
      "Loesungsvorschlaege liefern"
     ],
     "yt": "AI Beschwerdemanagement",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 206,
     "track": "ai"
    },
    {
     "t": "AI Kreditprozess Unterstuetzung",
     "was": "KI unterstuetzt beim Kredit: sie liest Unterlagen, prueft auf Vollstaendigkeit und hilft (nur unterstuetzend) bei der Einschaetzung.",
     "pts": [
      "Kredit-Unterlagen automatisch pruefen",
      "Vollstaendigkeit checken",
      "Unterstuetzt - Entscheidung bleibt beim Menschen",
      "EU AI Act: oft Hochrisiko - streng regeln"
     ],
     "yt": "AI Kreditprozess Bank",
     "src": null,
     "gh": [],
     "art": [
      [
       "EU AI Act (Hochrisiko)",
       "https://artificialintelligenceact.eu/de/"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 207,
     "track": "ai"
    },
    {
     "t": "AI Kartenservice Unterstuetzung",
     "was": "Beim Kartenservice hilft KI: Karte sperren, Ersatz bestellen, Umsaetze erklaeren - vieles automatisch und rund um die Uhr.",
     "pts": [
      "Karte sperren/ersetzen automatisieren",
      "Umsaetze erklaeren",
      "24/7 erreichbar",
      "Sicherheit vor sensiblen Aktionen"
     ],
     "yt": "AI Kartenservice Bank",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 208,
     "track": "ai"
    },
    {
     "t": "AI Online-Banking Support",
     "was": "KI hilft im Online-Banking: sie beantwortet Fragen zur Bedienung, hilft beim Login-Problem und fuehrt Schritt fuer Schritt.",
     "pts": [
      "Hilfe zur Online-Banking-Bedienung",
      "Login-Probleme loesen",
      "Schritt-fuer-Schritt-Anleitung",
      "Entlastet die Hotline"
     ],
     "yt": "AI online banking support",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 209,
     "track": "ai"
    },
    {
     "t": "AI Depotservice Support",
     "was": "Beim Depot (Wertpapiere) beantwortet KI allgemeine Fragen und erklaert Ablaeufe - Anlageberatung bleibt aber beim Menschen.",
     "pts": [
      "Allgemeine Depot-Fragen beantworten",
      "Ablaeufe erklaeren",
      "Keine Anlageberatung durch Bot",
      "Rechtliche Grenzen beachten"
     ],
     "yt": "AI Depot Wertpapier Support",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 210,
     "track": "ai"
    },
    {
     "t": "AI Fraud Support",
     "was": "Im Betrugsfall hilft KI: sie erkennt Verdachtsfaelle, informiert den Kunden schnell und leitet Sofortmassnahmen ein.",
     "pts": [
      "Verdachtsfaelle schnell erkennen",
      "Kunde sofort informieren",
      "Massnahmen einleiten (z.B. sperren)",
      "Eng mit Fraud Detection verbunden"
     ],
     "yt": "AI fraud support banking",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 211,
     "track": "ai"
    },
    {
     "t": "AI Management Reporting",
     "was": "KI erstellt Berichte fuer die Fuehrung: sie fasst Zahlen zusammen, erklaert Entwicklungen und spart das manuelle Zusammentragen.",
     "pts": [
      "Berichte fuer die Fuehrung erstellen",
      "Zahlen zusammenfassen und erklaeren",
      "Spart manuelle Arbeit",
      "Schnellere Entscheidungen"
     ],
     "yt": "AI management reporting",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 212,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "AI fuer Fuehrung & Organisation",
   "emoji": "🧑‍💼",
   "ziel": "KI aus Sicht von Fuehrung, Strategie und Organisation - nach dem ESMT Berlin AI Executive Certificate.",
   "topics": [
    {
     "t": "AI for Managers",
     "was": "Fuehrungskraefte muessen KI nicht programmieren, aber verstehen: was sie kann, was nicht, und wo sie dem Unternehmen nuetzt. Es geht um kluge Entscheidungen, nicht um Technik-Details.",
     "pts": [
      "KI verstehen, ohne sie zu programmieren",
      "Chancen und Grenzen realistisch einschaetzen",
      "Sinnvolle Einsatzfelder erkennen",
      "Hype von echtem Nutzen unterscheiden"
     ],
     "yt": "AI for managers deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "Harvard Business manager: KI-Fuehrung",
       "https://www.harvardbusinessmanager.de/"
      ],
      [
       "McKinsey: The State of AI",
       "https://www.mckinsey.com/capabilities/quantumblack/our-insights"
      ]
     ],
     "detail": "Als Fuehrungskraft musst du nicht wissen, wie ein neuronales Netz rechnet. Du musst wissen: Welches Problem loest KI wirklich? Was kostet sie? Welche Risiken bringt sie? Deine Aufgabe ist, die richtigen Fragen zu stellen und Ressourcen dorthin zu lenken, wo KI echten Wert schafft - statt jedem Trend hinterherzulaufen.",
     "bsp": "Statt 'Wir brauchen auch einen Chatbot' zu fordern, fragt eine gute Fuehrungskraft: 'Welches Kundenproblem loesen wir damit konkret - und wie messen wir Erfolg?'",
     "merke": "Fuehrung heisst bei KI: die richtigen Fragen stellen, nicht selbst programmieren.",
     "lang": [],
     "web": [],
     "nr": 213,
     "track": "ai"
    },
    {
     "t": "Implementing AI in the Organization",
     "was": "KI einzufuehren ist zu 20 % Technik und zu 80 % Menschen, Prozesse und Daten. Der haeufigste Grund fuer Scheitern ist nicht schlechte Technik, sondern schlechte Einfuehrung.",
     "pts": [
      "Start mit klarem Anwendungsfall (Use Case)",
      "Klein anfangen (Pilot), dann ausweiten",
      "Daten, Prozesse und Mitarbeiter vorbereiten",
      "Erfolg vorher messbar definieren"
     ],
     "yt": "implementing AI in organizations deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "BCG: AI at Scale",
       "https://www.bcg.com/capabilities/artificial-intelligence"
      ],
      [
       "MIT Sloan Management Review (KI)",
       "https://sloanreview.mit.edu/topic/artificial-intelligence/"
      ]
     ],
     "detail": "Viele KI-Projekte scheitern nicht an der Technik, sondern daran, dass niemand sie nutzt oder die Daten fehlen. Erfolgreiche Einfuehrung startet mit einem klaren, kleinen Anwendungsfall, beweist dort den Nutzen (Pilot) und skaliert dann. Parallel muessen Daten verfuegbar, Prozesse angepasst und Mitarbeiter mitgenommen werden.",
     "bsp": "Erst ein Bot fuer EINE haeufige Frage (z.B. Kartensperre), Nutzen messen, dann Schritt fuer Schritt erweitern.",
     "merke": "KI-Einfuehrung ist 80 % Menschen, Prozesse, Daten - und nur 20 % Technik.",
     "lang": [],
     "web": [],
     "nr": 214,
     "track": "ai"
    },
    {
     "t": "AI Governance & Compliance (Fuehrungssicht)",
     "was": "Governance heisst, klare Regeln und Verantwortliche fuer KI festzulegen. Fuer die Fuehrung geht es um Haftung, Aufsicht und Vertrauen - besonders streng in Banken.",
     "pts": [
      "Wer entscheidet und haftet fuer KI?",
      "Regeln, Freigaben, Dokumentation",
      "EU AI Act und Aufsicht (BaFin) einhalten",
      "Vertrauen von Kunden und Aufsicht sichern"
     ],
     "yt": "AI governance compliance leadership deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "EU AI Act (offiziell, DE)",
       "https://artificialintelligenceact.eu/de/"
      ],
      [
       "BaFin: KI in der Finanzwirtschaft",
       "https://www.bafin.de/DE/Aufsicht/FinTech/KuenstlicheIntelligenz/kuenstliche_intelligenz_node.html"
      ]
     ],
     "detail": "Ohne klare Governance wird KI zum Risiko: Niemand weiss, wer verantwortlich ist, wenn die KI einen Fehler macht. Die Fuehrung muss festlegen, wer KI freigibt, wie sie dokumentiert wird und wie Gesetze (EU AI Act, DSGVO) und Aufsicht (BaFin) eingehalten werden. Das schuetzt vor Strafen und schafft Vertrauen.",
     "bsp": "Bevor ein Kredit-Modell live geht, gibt es einen dokumentierten Freigabe-Prozess mit klaren Verantwortlichen.",
     "merke": "Ohne klare Verantwortliche und Regeln ist KI ein Haftungsrisiko - erst recht in Banken.",
     "lang": [],
     "web": [],
     "nr": 215,
     "track": "ai"
    },
    {
     "t": "Innovation in the Age of AI",
     "was": "KI veraendert ganze Geschaeftsmodelle, nicht nur einzelne Aufgaben. Fuehrung muss Innovation ermoeglichen, ohne dabei Sicherheit und Vertrauen zu verlieren.",
     "pts": [
      "KI schafft neue Produkte und Geschaeftsmodelle",
      "Experimentierraeume schaffen (safe to try)",
      "Schnell lernen, aus Fehlern lernen",
      "Balance: mutig sein, aber verantwortungsvoll"
     ],
     "yt": "innovation in the age of AI deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "MIT Sloan Management Review",
       "https://sloanreview.mit.edu/topic/artificial-intelligence/"
      ]
     ],
     "detail": "Wer KI nur nutzt, um Bestehendes etwas guenstiger zu machen, verschenkt das Potenzial. Die groessten Gewinne entstehen, wenn KI neue Angebote ermoeglicht (z.B. rund um die Uhr persoenlicher Service). Fuehrung muss Raum zum Ausprobieren geben - kontrolliert, mit klaren Grenzen, aber ohne jede Idee sofort zu ersticken.",
     "bsp": "Eine Bank testet einen KI-Assistenten, der Kunden proaktiv beim Sparen hilft - ein neues Angebot, nicht nur Kostensenkung.",
     "merke": "Die groessten KI-Gewinne kommen aus neuen Angeboten, nicht nur aus Sparen.",
     "lang": [],
     "web": [],
     "nr": 216,
     "track": "ai"
    },
    {
     "t": "Leading in the Age of AI",
     "was": "Fuehren in der KI-Zeit heisst, Menschen durch Veraenderung zu begleiten: Aengste ernst nehmen, Faehigkeiten aufbauen und eine Kultur schaffen, die KI als Hilfe sieht.",
     "pts": [
      "Mitarbeiter durch Veraenderung fuehren",
      "Aengste (Jobverlust) ernst nehmen",
      "Weiterbildung ermoeglichen (Upskilling)",
      "Kultur: KI als Werkzeug, nicht als Bedrohung"
     ],
     "yt": "leading in the age of AI deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "Harvard Business manager",
       "https://www.harvardbusinessmanager.de/"
      ],
      [
       "World Economic Forum: Future of Jobs",
       "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
      ]
     ],
     "detail": "KI verunsichert viele Mitarbeiter - aus Angst um ihren Job. Gute Fuehrung nimmt das ernst, erklaert ehrlich, was sich aendert, und investiert in Weiterbildung. Wenn Mitarbeiter erleben, dass KI ihnen laestige Arbeit abnimmt und sie sich auf Wichtigeres konzentrieren koennen, wird aus Angst Akzeptanz.",
     "bsp": "Agents, die frueher Standardfragen beantworteten, werden geschult, um mit KI-Unterstuetzung schwierige Faelle zu loesen.",
     "merke": "Nicht die Technik ist die groesste Huerde, sondern die Menschen mitzunehmen.",
     "lang": [],
     "web": [],
     "nr": 217,
     "track": "ai"
    },
    {
     "t": "Data Strategy for Enterprise AI",
     "was": "KI ist nur so gut wie die Daten dahinter. Eine Datenstrategie sorgt dafuer, dass ein Unternehmen die richtigen Daten sauber, sicher und nutzbar hat.",
     "pts": [
      "Daten sind der Treibstoff jeder KI",
      "Welche Daten haben wir, welche brauchen wir?",
      "Qualitaet, Zugriff, Datenschutz regeln",
      "Datensilos aufbrechen (Daten teilen)"
     ],
     "yt": "data strategy for enterprise AI deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "McKinsey: Data Strategy",
       "https://www.mckinsey.com/capabilities/quantumblack/our-insights"
      ],
      [
       "Bitkom: Datenwirtschaft",
       "https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz"
      ]
     ],
     "detail": "Ohne gute Daten hilft die beste KI nicht. Oft liegen Daten verstreut in vielen Systemen (Silos), sind unvollstaendig oder darf man sie nicht nutzen. Eine Datenstrategie klaert: Welche Daten brauchen wir fuer unsere Ziele, wie halten wir sie sauber und sicher, und wie machen wir sie - im Rahmen der DSGVO - nutzbar.",
     "bsp": "Eine Bank fuehrt Kundendaten aus Filiale, App und Hotline zusammen, damit die KI ein vollstaendiges Bild hat.",
     "merke": "Keine Datenstrategie = keine gute KI. Daten sind das Fundament, nicht das Modell.",
     "lang": [],
     "web": [],
     "nr": 218,
     "track": "ai"
    },
    {
     "t": "Agentic AI Beyond the Hype",
     "was": "Um KI-Agenten gibt es viel Wirbel. Fuehrung muss trennen: Was koennen Agenten heute wirklich zuverlaessig, und wo ist es noch Zukunftsmusik oder Risiko?",
     "pts": [
      "Agenten koennen Aufgaben selbststaendig erledigen",
      "Aber: nicht alles ist heute schon zuverlaessig",
      "Klein und kontrolliert starten (mit Guardrails)",
      "Nutzen ehrlich gegen Risiko abwaegen"
     ],
     "yt": "agentic AI beyond the hype deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "Anthropic: Building Effective Agents",
       "https://www.anthropic.com/engineering/building-effective-agents"
      ],
      [
       "Gartner: AI Hype Cycle",
       "https://www.gartner.com/en/articles/hype-cycle-for-artificial-intelligence"
      ]
     ],
     "detail": "Agentic AI (KI, die selbst handelt) ist vielversprechend, aber auch ueberhypt. Fuehrung sollte weder alles glauben noch alles ablehnen. Der kluge Weg: konkrete, klar begrenzte Aufgaben mit Guardrails und menschlicher Kontrolle (Human-in-the-loop), Erfolg messen, dann ausweiten. Gerade in Banken gilt: erst Vertrauen aufbauen, dann Verantwortung an Agenten geben.",
     "bsp": "Ein Agent bereitet einen Fall komplett vor, aber ein Mensch gibt die finale Ueberweisung frei (Human-in-the-loop).",
     "merke": "Weder Hype glauben noch verteufeln: klein, kontrolliert, messbar starten.",
     "lang": [],
     "web": [],
     "nr": 219,
     "track": "ai"
    },
    {
     "t": "GenAI Fundamentals for the Workplace",
     "was": "Jeder im Unternehmen sollte die Grundlagen von GenAI kennen und sie sicher im Arbeitsalltag nutzen koennen - produktiv, aber ohne Datenschutz- und Sicherheitsfehler.",
     "pts": [
      "GenAI sicher im Arbeitsalltag nutzen",
      "Keine sensiblen Daten in oeffentliche Tools",
      "Ergebnisse immer pruefen (Halluzinationen)",
      "Klare Nutzungsregeln im Unternehmen"
     ],
     "yt": "GenAI for the workplace deutsch",
     "src": [
      "ESMT Berlin Executive Education",
      "https://www.esmt.berlin/executive-education"
     ],
     "gh": [],
     "art": [
      [
       "Bitkom: Leitfaden GenAI",
       "https://www.bitkom.org/Themen/Technologien-Software/Kuenstliche-Intelligenz"
      ],
      [
       "Elements of AI (kostenlos)",
       "https://www.elementsofai.de/"
      ]
     ],
     "detail": "GenAI-Tools wie ChatGPT oder Claude koennen die taegliche Arbeit enorm erleichtern - beim Schreiben, Zusammenfassen, Ideen sammeln. Aber jeder Mitarbeiter muss die Regeln kennen: keine Kundendaten oder Geheimnisse in oeffentliche Tools eingeben, Ergebnisse immer pruefen (die KI kann sich sicher irren) und die firmeneigenen Richtlinien beachten.",
     "bsp": "Eine Zusammenfassung von der KI schreiben lassen - ja. Echte Kundendaten dafuer hineinkopieren - nein.",
     "merke": "GenAI produktiv nutzen, aber nie sensible Daten preisgeben und immer gegenpruefen.",
     "lang": [],
     "web": [],
     "nr": 220,
     "track": "ai"
    }
   ],
   "track": "ai"
  },
  {
   "title": "Ergaenzende Themen (empfohlen)",
   "emoji": "➕",
   "ziel": "Wichtige Themen, die zusaetzlich helfen und in keiner Liste fehlen sollten.",
   "topics": [
    {
     "t": "Conversational Design",
     "was": "Conversational Design ist die Kunst, gute Gespraeche fuer Bots zu entwerfen: klare Fragen, kurze Antworten, natuerlicher Ablauf.",
     "pts": [
      "Gute Bot-Dialoge planen",
      "Klar, kurz, freundlich",
      "Nutzer fuehren, nicht verwirren",
      "Fehlerfaelle mitdenken"
     ],
     "yt": "conversational design chatbot deutsch",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 221,
     "track": "ai"
    },
    {
     "t": "Genesys Predictive Routing",
     "was": "Predictive Routing nutzt KI, um Anrufe an den Agent zu leiten, der sie am besten loesen kann - auf Basis frueherer Daten.",
     "pts": [
      "KI-gestuetztes Routing",
      "Kunde -> bester passender Agent",
      "Lernt aus frueheren Gespraechen",
      "Bessere Loesungsquote"
     ],
     "yt": "Genesys predictive routing",
     "src": [
      "https://help.mypurecloud.com/articles/about-predictive-routing/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 222,
     "track": "ai"
    },
    {
     "t": "Genesys Journey Management",
     "was": "Journey Management schaut auf die gesamte Kundenreise ueber alle Kanaele - so versteht man, was der Kunde vorher schon getan hat.",
     "pts": [
      "Gesamte Kundenreise im Blick",
      "Ueber alle Kanaele hinweg",
      "Kontext fuer besseren Service",
      "Proaktiv helfen"
     ],
     "yt": "Genesys journey management",
     "src": [
      "https://help.mypurecloud.com/articles/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 223,
     "track": "ai"
    },
    {
     "t": "Speech & Text Analytics",
     "was": "Speech & Text Analytics wertet Gespraeche automatisch aus: erkennt Themen, Stimmung und Stichworte - fuer Qualitaet und Verbesserung.",
     "pts": [
      "Gespraeche automatisch auswerten",
      "Themen und Stimmung erkennen",
      "Qualitaet und Trends sehen",
      "Basis fuer Verbesserungen"
     ],
     "yt": "Genesys speech text analytics",
     "src": [
      "https://help.mypurecloud.com/articles/about-speech-and-text-analytics/",
      null
     ],
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 224,
     "track": "ai"
    },
    {
     "t": "Bias & Fairness",
     "was": "Bias heisst Verzerrung: KI kann unfair sein, wenn ihre Trainingsdaten einseitig waren. Fairness heisst, das zu erkennen und zu vermeiden.",
     "pts": [
      "Bias = unfaire Verzerrung der KI",
      "Ursache: einseitige Daten",
      "Kann Kunden benachteiligen",
      "Pruefen und gegensteuern"
     ],
     "yt": "AI bias fairness erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "Fraunhofer: Faire KI",
       "https://www.iis.fraunhofer.de/de/ff/ki.html"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 225,
     "track": "ai"
    },
    {
     "t": "Explainability (Erklaerbarkeit)",
     "was": "Explainability heisst, dass man nachvollziehen kann, warum die KI so entschieden hat - wichtig fuer Vertrauen und Aufsicht.",
     "pts": [
      "Warum hat die KI so entschieden?",
      "Nachvollziehbar machen",
      "Wichtig fuer Aufsicht/Kunde",
      "Teil des EU AI Act"
     ],
     "yt": "explainable AI erklaert deutsch",
     "src": null,
     "gh": [],
     "art": [
      [
       "EU AI Act: Transparenz",
       "https://artificialintelligenceact.eu/de/"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 226,
     "track": "ai"
    },
    {
     "t": "Mehrsprachigkeit & Lokalisierung",
     "was": "Mehrsprachigkeit heisst, dass der Bot mehrere Sprachen kann. Lokalisierung heisst, ihn passend fuer Land/Kultur anzupassen.",
     "pts": [
      "Bot in mehreren Sprachen",
      "Anpassung an Land/Kultur",
      "Wichtig fuer diverse Kunden",
      "Pro Sprache testen"
     ],
     "yt": "multilingual chatbot design",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 227,
     "track": "ai"
    },
    {
     "t": "KI-Adoption & Change Management",
     "was": "Damit KI wirklich hilft, muessen die Mitarbeiter sie annehmen. Change Management begleitet sie mit Schulung und Kommunikation.",
     "pts": [
      "Mitarbeiter mitnehmen",
      "Schulung und klare Kommunikation",
      "Aengste ernst nehmen",
      "Erfolge zeigen"
     ],
     "yt": "KI Change Management Mitarbeiter",
     "src": null,
     "gh": [],
     "art": [
      [
       "McKinsey: KI-Transformation",
       "https://www.mckinsey.com/de/publikationen"
      ]
     ],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 228,
     "track": "ai"
    },
    {
     "t": "Nachhaltige KI (Green AI)",
     "was": "Green AI heisst, den Energie- und Ressourcenverbrauch von KI im Blick zu behalten und moeglichst sparsam zu sein.",
     "pts": [
      "KI verbraucht Energie",
      "Sparsam waehlen (kleinere Modelle)",
      "Nur rechnen, was noetig ist",
      "Teil verantwortungsvoller KI"
     ],
     "yt": "green AI nachhaltigkeit",
     "src": null,
     "gh": [],
     "art": [],
     "detail": null,
     "bsp": null,
     "merke": null,
     "lang": [],
     "web": [],
     "nr": 229,
     "track": "ai"
    }
   ],
   "track": "ai"
  }
 ]
};

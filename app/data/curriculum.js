// Automatisch erzeugt von scripts/build_curriculum.py - nicht direkt bearbeiten.
window.CURRICULUM = {
 "updated": "2026-07-01",
 "total": 229,
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
     "nr": 1
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
     "nr": 2
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
     "nr": 3
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
     "nr": 4
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
     "nr": 5
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
     "nr": 6
    }
   ]
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
     "nr": 7
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
     "nr": 8
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
     "nr": 9
    }
   ]
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
     "nr": 10
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
     "nr": 11
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
     "nr": 12
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
     "nr": 13
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
     "nr": 14
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
     "nr": 15
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
     "nr": 16
    }
   ]
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
     "nr": 17
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
     "nr": 18
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
     "nr": 19
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
     "nr": 20
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
     "nr": 21
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
     "nr": 22
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
     "nr": 23
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
     "nr": 24
    }
   ]
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
     "nr": 25
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
     "nr": 26
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
     "nr": 27
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
     "nr": 28
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
     "nr": 29
    }
   ]
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
     "nr": 30
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
     "nr": 31
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
     "nr": 32
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
     "nr": 33
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
     "nr": 34
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
     "nr": 35
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
     "nr": 36
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
     "nr": 37
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
     "nr": 38
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
     "nr": 39
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
     "nr": 40
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
     "nr": 41
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
     "nr": 42
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
     "nr": 43
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
     "nr": 44
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
     "nr": 45
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
     "nr": 46
    }
   ]
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
     "nr": 47
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
     "nr": 48
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
     "nr": 49
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
     "nr": 50
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
     "nr": 51
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
     "nr": 52
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
     "nr": 53
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
     "nr": 54
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
     "nr": 55
    }
   ]
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
     "nr": 56
    }
   ]
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
     "nr": 57
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
     "nr": 58
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
     "nr": 59
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
     "nr": 60
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
     "nr": 61
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
     "nr": 62
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
     "nr": 63
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
     "nr": 64
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
     "nr": 65
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
     "nr": 66
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
     "nr": 67
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
     "nr": 68
    }
   ]
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
     "nr": 69
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
     "nr": 70
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
     "nr": 71
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
     "nr": 72
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
     "nr": 73
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
     "nr": 74
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
     "nr": 75
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
     "nr": 76
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
     "nr": 77
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
     "nr": 78
    }
   ]
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
     "nr": 79
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
     "nr": 80
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
     "nr": 81
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
     "nr": 82
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
     "nr": 83
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
     "nr": 84
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
     "nr": 85
    }
   ]
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
     "nr": 86
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
     "nr": 87
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
     "nr": 88
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
     "nr": 89
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
     "nr": 90
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
     "nr": 91
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
     "nr": 92
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
     "nr": 93
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
     "nr": 94
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
     "nr": 95
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
     "nr": 96
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
     "nr": 97
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
     "nr": 98
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
     "nr": 99
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
     "nr": 100
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
     "nr": 101
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
     "nr": 102
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
     "nr": 103
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
     "nr": 104
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
     "nr": 105
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
     "nr": 106
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
     "nr": 107
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
     "nr": 108
    }
   ]
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
     "nr": 109
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
     "nr": 110
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
     "nr": 111
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
     "nr": 112
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
     "nr": 113
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
     "nr": 114
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
     "nr": 115
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
     "nr": 116
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
     "nr": 117
    }
   ]
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
     "nr": 118
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
     "nr": 119
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
     "nr": 120
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
     "nr": 121
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
     "nr": 122
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
     "nr": 123
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
     "nr": 124
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
     "nr": 125
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
     "nr": 126
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
     "nr": 127
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
     "nr": 128
    }
   ]
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
     "nr": 129
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
     "nr": 130
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
     "nr": 131
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
     "nr": 132
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
     "nr": 133
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
     "nr": 134
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
     "nr": 135
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
     "nr": 136
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
     "nr": 137
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
     "nr": 138
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
     "nr": 139
    }
   ]
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
     "nr": 140
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
     "nr": 141
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
     "nr": 142
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
     "nr": 143
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
     "nr": 144
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
     "nr": 145
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
     "nr": 146
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
     "nr": 147
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
     "nr": 148
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
     "nr": 149
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
     "nr": 150
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
     "nr": 151
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
     "nr": 152
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
     "nr": 153
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
     "nr": 154
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
     "nr": 155
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
     "nr": 156
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
     "nr": 157
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
     "nr": 158
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
     "nr": 159
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
     "nr": 160
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
     "nr": 161
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
     "nr": 162
    }
   ]
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
     "nr": 163
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
     "nr": 164
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
     "nr": 165
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
     "nr": 166
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
     "nr": 167
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
     "nr": 168
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
     "nr": 169
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
     "nr": 170
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
     "nr": 171
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
     "nr": 172
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
     "nr": 173
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
     "nr": 174
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
     "nr": 175
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
     "nr": 176
    }
   ]
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
     "nr": 177
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
     "nr": 178
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
     "nr": 179
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
     "nr": 180
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
     "nr": 181
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
     "nr": 182
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
     "nr": 183
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
     "nr": 184
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
     "nr": 185
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
     "nr": 186
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
     "nr": 187
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
     "nr": 188
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
     "nr": 189
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
     "nr": 190
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
     "nr": 191
    }
   ]
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
     "nr": 192
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
     "nr": 193
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
     "nr": 194
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
     "nr": 195
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
     "nr": 196
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
     "nr": 197
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
     "nr": 198
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
     "nr": 199
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
     "nr": 200
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
     "nr": 201
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
     "nr": 202
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
     "nr": 203
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
     "nr": 204
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
     "nr": 205
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
     "nr": 206
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
     "nr": 207
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
     "nr": 208
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
     "nr": 209
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
     "nr": 210
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
     "nr": 211
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
     "nr": 212
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
     "nr": 213
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
     "nr": 214
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
     "nr": 215
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
     "nr": 216
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
     "nr": 217
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
     "nr": 218
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
     "nr": 219
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
     "nr": 220
    }
   ]
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
     "nr": 221
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
     "nr": 222
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
     "nr": 223
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
     "nr": 224
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
     "nr": 225
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
     "nr": 226
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
     "nr": 227
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
     "nr": 228
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
     "nr": 229
    }
   ]
  }
 ]
};

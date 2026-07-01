# 🎓 Lernplan KI & Genesys – App für iPhone 17

Ein kompletter, **nach Lern-Reihenfolge sortierter** Lernplan von Null bis zur
Genesys-Zertifizierung **GC-AI-DB** (*Genesys Cloud: AI – Digital Bots & Knowledge*).

Alles in **sehr, sehr einfachem Deutsch** – so, als hätte man **keine Ahnung von
IT, KI und Programmieren**. **Fachbegriffe (IT-Begriffe) bleiben im Original**
(z.B. *Queue*, *Intent*, *RAG*, *Token*).

Die App ist eine **PWA** (Progressive Web App). Sie läuft im Safari-Browser auf
dem iPhone 17 und kann über **„Zum Home-Bildschirm hinzufügen"** wie eine echte
App installiert werden – mit eigenem Icon, im Vollbild und **offline** nutzbar.

> Warum PWA und keine native App? In dieser Cloud-Umgebung gibt es kein Xcode,
> also lässt sich keine native iOS-App bauen/testen. Die PWA verhält sich auf
> dem iPhone wie eine App, funktioniert **sofort** und braucht keinen App Store.

---

## 📱 So installierst du die App auf dem iPhone 17

1. Die Dateien aus dem Ordner `app/` auf einen Webserver legen
   (oder z.B. mit GitHub Pages veröffentlichen).
2. Auf dem iPhone in **Safari** die Adresse öffnen.
3. Auf **Teilen** tippen → **„Zum Home-Bildschirm"**.
4. Fertig – die App liegt als Icon **„Lernplan KI"** auf dem Home-Bildschirm.

### Schnell lokal ausprobieren (am Computer)

```bash
cd app
python3 -m http.server 8080
# dann im Browser öffnen: http://localhost:8080
```

---

## ✨ Funktionen

- **Zwei getrennte Bereiche (Tabs):** 🏦 **Genesys** (56 Themen, bis zur
  GC-AI-DB-Zertifizierung) und 🤖 **KI / AI** (229 Themen). Jeder Bereich hat
  seine eigene Schritt-Nummerierung und seinen eigenen Fortschritt.
- **285 Themen** in **27 Modulen**, in didaktischer Reihenfolge
  (Schritt 1 = zuerst lernen).
- **Ausführliche AI-Erklärungen 📖:** wichtige AI-Themen haben einen
  mehrseitigen Langtext (Einfach gesagt · Wie es funktioniert · Wie man es
  einsetzt · Beispiel · Vorteile · Grenzen & Risiken · Typische Fehler · Best
  Practices · Weiterlernen) plus **🌐 im Internet gefundene Texte**.
- Jedes Thema hat: einfache Erklärung **„Was ist das?"**, **Unterpunkte**,
  ein **▶️ YouTube-Video**, eine **📖 offizielle Quelle** und – wo sinnvoll –
  **💻 GitHub-Bibliotheken** und **📰 Artikel/Studien** (Uni / Wirtschaft).
- **🔄 Button „Quellen aktualisieren"**: setzt das Aktualisierungs-Datum neu und
  frischt den App-Cache auf. YouTube- und Quellen-Links sind **Live-Suchen** und
  zeigen dadurch automatisch die **neuesten** Videos und Dokumente.
- **✓ Fortschritt**: Jedes gelernte Thema abhaken – der Fortschritt wird lokal
  auf dem Gerät gespeichert (Fortschrittsbalken oben).
- **🔎 Suche** über alle Themen.
- **Offline** nutzbar (Service Worker).

---

## 🗺️ Die Lern-Reihenfolge (Module)

| # | Modul | Worum geht es |
|---|-------|----------------|
| 1 | 🏦 Fundament: Bank & Contact Center | Wie ein Bank-Callcenter arbeitet |
| 2 | 🔧 Technische Grundlagen | JSON, REST API, OAuth |
| 3 | ☁️ Genesys Cloud Plattform | Aufbau, Rollen, Queues, Analytics |
| 4 | 🧭 Genesys Architect & Flows | Abläufe (Flows) bauen |
| 5 | 🤖 Genesys AI Bausteine | Agent Assist, Copilot, Virtual Agent |
| 6 | 💬 Bot Flows & NLU | Bots bauen, Sprache verstehen |
| 7 | 📚 Knowledge | Wissens-Artikel für Bot & Agent |
| 8 | 🎓 GC-AI-DB Zertifizierung | Die offizielle Prüfung |
| 9 | 🧠 GenAI Grundlagen | LLMs, Prompting, Halluzinationen |
| 10 | 🔎 RAG & Suche | Eigenes Wissen für die KI |
| 11 | 🛠️ Tools & MCP | KI nutzt Werkzeuge, MCP-Standard |
| 12 | 🕹️ Agentic AI | KI-Agenten von Grundlagen bis Betrieb |
| 13 | 🛡️ Sicherheit, Governance & Recht | EU AI Act, DSGVO, Governance |
| 14 | 🔐 AI Security (OWASP) | Angriffe auf KI abwehren |
| 15 | 📈 AI Ops, Qualität & Nutzen | Monitoring, Testing, ROI |
| 16 | 🧱 Eigenen Bot bauen | Alle Bausteine eines eigenen Bots |
| 17 | 🏠 Private & lokale AI | Ollama, llama.cpp, On-Prem |
| 18 | 🧩 AI Orchestration & Plattformen | LangChain, Cloud-Plattformen |
| 19 | 🏛️ AI Anwendungen & Bank-Use-Cases | Wo KI in der Bank hilft |
| 20 | ➕ Ergänzende Themen (empfohlen) | Zusätzlich wichtige Themen |

Die ursprünglichen 220 Themen wurden alle übernommen und **neu nach
Lern-Reihenfolge sortiert**. Das gewünschte Thema **GC-AI-DB Zertifizierung**
ist als eigenes Modul enthalten. Zusätzlich wurden **empfohlene Themen**
ergänzt (u.a. *Conversational Design*, *Predictive Routing*, *Bias & Fairness*,
*Explainability*, *Mehrsprachigkeit*, *KI-Adoption*, *Green AI*).

---

## 📁 Projektstruktur

```
app/
  index.html              # Oberfläche
  styles.css              # Design (dunkel, iPhone-optimiert, Safe-Areas)
  app.js                  # Logik: Rendern, Suche, Fortschritt, Aktualisieren
  manifest.webmanifest    # macht die App installierbar
  sw.js                   # Service Worker (offline)
  data/curriculum.js      # alle 229 Themen (automatisch erzeugt)
  icons/                  # App-Icons (SVG + PNG)
scripts/
  build_curriculum.py     # erzeugt data/curriculum.js
```

### Inhalte ändern / erweitern

Die Themen stehen in `scripts/build_curriculum.py`. Nach Änderungen neu bauen:

```bash
python3 scripts/build_curriculum.py
```

Dadurch wird `app/data/curriculum.js` neu erzeugt.

---

## 🔗 Quellen

- **Offiziell:** Genesys Resource Center, Genesys Developer Center,
  Genesys Beyond (Lernplattform), Anthropic-, OpenAI-, Microsoft-,
  Google- und AWS-Dokumentation, Model Context Protocol, OWASP.
- **Recht/Regeln:** EU AI Act (offiziell), DSGVO, BaFin.
- **Wissenschaft/Wirtschaft:** Fraunhofer, Bitkom, McKinsey, BCG, NIST.
- **GitHub-Bibliotheken:** u.a. LangChain, LangGraph, LlamaIndex, CrewAI,
  AutoGen, Ollama, llama.cpp, Hugging Face Transformers, FAISS, Chroma,
  Ragas, Guardrails AI, NeMo Guardrails, Langfuse.
- **YouTube:** pro Thema eine Live-Suche, damit immer aktuelle Videos erscheinen.

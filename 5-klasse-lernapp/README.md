# 📚 Lernspaß 5. Klasse

Einfache Lern-App für Schülerinnen und Schüler der 5. Klasse Gymnasium
(Kerncurriculum Niedersachsen). Kein Server, kein Build-Tool nötig – reines
HTML/CSS/JavaScript.

## Starten (lokal)

```bash
cd 5-klasse-lernapp
python3 -m http.server 8080
# dann im Browser öffnen: http://localhost:8080
```

## Inhalt (Version 1)

- **Mathematik**: Grundrechenarten, Große Zahlen & Runden, Größen & Einheiten,
  Brüche – Einführung, Geometrie-Grundlagen
- **Deutsch**: Wortarten, Groß- & Kleinschreibung, Satzglieder,
  Zeichensetzung, Textverständnis

Jedes Thema hat 8 Aufgaben (Multiple-Choice oder Zahl eintippen), sofortiges
Feedback mit Erklärung, und am Ende Sterne (⭐) je nach Ergebnis. Der
Fortschritt wird im Browser gespeichert (`localStorage`, Schlüssel
`lk5_progress`).

Englisch, Erdkunde und Biologie sind als "bald verfügbar" vorbereitet und
folgen in einer späteren Version.

## Struktur

```
5-klasse-lernapp/
  index.html
  styles.css
  app.js              # Navigation, Übungslogik, Fortschritt
  data/
    mathe.js          # Themen & Aufgaben Mathematik
    deutsch.js         # Themen & Aufgaben Deutsch
```

## Inhalte erweitern

Neue Aufgaben oder Themen werden direkt in `data/mathe.js` bzw.
`data/deutsch.js` ergänzt (gleiche Struktur wie die vorhandenen Einträge).
Ein neues Fach braucht eine neue Datei nach demselben Muster plus einen
Eintrag in `index.html` (Script einbinden) und `app.js` (Fach-Liste).

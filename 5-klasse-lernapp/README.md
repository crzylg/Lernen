# ⚔️ Idol Academy · Lernspaß 5. Klasse

Einfache Lern-App für Schülerinnen und Schüler der 5. Klasse Gymnasium
(Kerncurriculum Niedersachsen) im neonbunten "K-Pop-Dämonenjäger"-Look. Kein
Server, kein Build-Tool nötig – reines HTML/CSS/JavaScript.

> Der Look ist eine eigene, frei erfundene Gestaltung (Neon-Farben, Glow-
> Effekte, eine eigene Geschichte um "Team Mondlicht") und keine Kopie eines
> bestimmten Films oder einer Marke.

## Starten (lokal)

```bash
cd 5-klasse-lernapp
python3 -m http.server 8080
# dann im Browser öffnen: http://localhost:8080
```

## Inhalt (Version 2)

- **Mathematik** (5 Missionen, je 14–20 Aufgaben): Grundrechenarten, Große
  Zahlen & Runden, Größen & Einheiten, Brüche – Einführung, Geometrie-Grundlagen
- **Deutsch** (5 Missionen, je 11–15 Aufgaben): Wortarten, Groß- &
  Kleinschreibung, Satzglieder, Zeichensetzung, Textverständnis
- **Lesegeschichten** (4 Kurzgeschichten mit je 6–8 Verständnisfragen): eine
  eigene Fortsetzungsgeschichte um "Team Mondlicht", drei Freundinnen, die
  heimlich Schattenwesen jagen

Jedes Mathe-/Deutsch-Thema startet mit einer **Lektion**: eine kurze
Erklärung des Themas in ganz einfacher Sprache, bevor die Übung beginnt.
Jede Aufgabe gibt sofort Feedback mit Erklärung, am Ende gibt es Sterne (⭐)
je nach Ergebnis. Der Fortschritt wird im Browser gespeichert
(`localStorage`, Schlüssel `lk5_progress`).

Ein 🔄-Button oben rechts aktualisiert die App (holt die neuesten Themen/
Aufgaben-Dateien erneut und merkt sich das Datum unten im Footer).

Englisch, Erdkunde und Biologie sind als "bald verfügbar" vorbereitet und
folgen in einer späteren Version.

## Struktur

```
5-klasse-lernapp/
  index.html
  styles.css
  app.js              # Navigation, Lektion, Übungslogik, Fortschritt, Update-Button
  data/
    mathe.js          # Themen, Lektionen & Aufgaben Mathematik
    deutsch.js        # Themen, Lektionen & Aufgaben Deutsch
    lesen.js          # Lesegeschichten mit Verständnisfragen
```

## Inhalte erweitern

Neue Aufgaben oder Themen werden direkt in `data/mathe.js`, `data/deutsch.js`
bzw. `data/lesen.js` ergänzt (gleiche Struktur wie die vorhandenen Einträge).
Ein Thema mit `lektion`-Feld zeigt vor der Übung automatisch die
Erklärungsseite. Ein neues Fach braucht eine neue Datei nach demselben
Muster plus einen Eintrag in `index.html` (Script einbinden) und `app.js`
(`AKTIVE_FAECHER`-Liste).

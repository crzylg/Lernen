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

## Inhalt (Version 3)

- **Mathematik** (5 Missionen, je 14–20 Aufgaben): Grundrechenarten, Große
  Zahlen & Runden, Größen & Einheiten, Brüche – Einführung, Geometrie-Grundlagen
- **Deutsch** (5 Missionen, je 11–15 Aufgaben): Wortarten, Groß- &
  Kleinschreibung, Satzglieder, Zeichensetzung, Textverständnis
- **Englisch** (6 Missionen): Greetings & Vorstellen, Numbers & Colours,
  Family & Pets, 'to be' & 'to have got', Questions & Verneinung, sowie
  **Vokabeln lernen** – 20 Wörter mit Übersetzung und Beispielsatz als
  Karteikarten vor der Übung
- **Erdkunde** (5 Missionen): Karten & Himmelsrichtungen, Kontinente &
  Ozeane, Deutschland & Bundesländer, Wetter & Klima, Stadt & Land
- **Biologie** (5 Missionen): Kennzeichen des Lebens, Die Zelle, Bau der
  Pflanzen, Tierklassen, Sinnesorgane des Menschen
- **Lesegeschichten** (4 Kurzgeschichten mit je 6–8 Verständnisfragen): eine
  eigene Fortsetzungsgeschichte um "Team Mondlicht", drei Freundinnen, die
  heimlich Schattenwesen jagen

Jedes Thema (außer den Lesegeschichten) startet mit einer **Lektion**: eine
kurze Erklärung in ganz einfacher Sprache, bevor die Übung beginnt. Die
Englisch-Vokabelmission zeigt stattdessen Karteikarten (Wort, Übersetzung,
Beispielsatz). Jede Aufgabe gibt sofort Feedback mit Erklärung, am Ende gibt
es Sterne (⭐) je nach Ergebnis. Der Fortschritt wird im Browser gespeichert
(`localStorage`, Schlüssel `lk5_progress`).

Ein 🔄-Button oben rechts aktualisiert die App (holt die neuesten Themen/
Aufgaben-Dateien erneut und merkt sich das Datum unten im Footer).

## Struktur

```
5-klasse-lernapp/
  index.html
  styles.css
  app.js              # Navigation, Lektion, Vokabelkarten, Übungslogik, Fortschritt, Update-Button
  data/
    mathe.js          # Themen, Lektionen & Aufgaben Mathematik
    deutsch.js        # Themen, Lektionen & Aufgaben Deutsch
    englisch.js       # Themen, Lektionen, Vokabelkarten & Aufgaben Englisch
    erdkunde.js        # Themen, Lektionen & Aufgaben Erdkunde
    biologie.js        # Themen, Lektionen & Aufgaben Biologie
    lesen.js           # Lesegeschichten mit Verständnisfragen
```

## Inhalte erweitern

Neue Aufgaben oder Themen werden direkt in der passenden `data/*.js`-Datei
ergänzt (gleiche Struktur wie die vorhandenen Einträge). Ein Thema mit
`lektion`-Feld zeigt vor der Übung automatisch die Erklärungsseite, ein
Thema mit `vokabeln`-Feld zeigt stattdessen Karteikarten. Ein neues Fach
braucht eine neue Datei nach demselben Muster plus einen Eintrag in
`index.html` (Script einbinden) und `app.js` (`AKTIVE_FAECHER`-Liste).

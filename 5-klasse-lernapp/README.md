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
- **Lesegeschichten** (4 Kurzgeschichten, je ~400 Wörter, mit 11–12
  Verständnisfragen): eine eigene Fortsetzungsgeschichte um "Team Mondlicht",
  drei Freundinnen, die heimlich Schattenwesen jagen

Jedes Thema (außer den Lesegeschichten) startet mit einer **Lektion**: eine
kurze Erklärung in ganz einfacher Sprache, bevor die Übung beginnt. Die
Englisch-Vokabelmission zeigt stattdessen Karteikarten (Wort, Übersetzung,
Beispielsatz). Jede Aufgabe gibt sofort Feedback mit Erklärung, am Ende gibt
es Sterne (⭐) je nach Ergebnis. Der Fortschritt wird im Browser gespeichert
(`localStorage`, Schlüssel `lk5_progress`).

Ein 🔄-Button oben rechts aktualisiert die App (holt die neuesten Themen/
Aufgaben-Dateien erneut und merkt sich das Datum unten im Footer). Während
eine Übung oder ein Kurz-Check läuft, aktualisiert der Button nicht (sonst
ginge der Fortschritt verloren) – stattdessen erscheint ein kurzer freundlicher
Hinweis.

Ein ⏱️-Timer (30:00) sitzt ebenfalls oben in der Kopfzeile und ist damit auf
jedem Bildschirm sichtbar, auch bei den Lesegeschichten. Tippen startet/
pausiert ihn; nach 30 Minuten erscheint eine kurze Pause-Erinnerung.

## Lernwirksamkeit (Version 4)

Auf Basis von Lernforschung (Testeffekt/Retrieval Practice, Spaced Practice,
Interleaving) wurden folgende Mechaniken ergänzt, alles ohne Backend, rein
über `localStorage`:

- **Wiederholungs-Warteschlange (Leitner-System)**: Falsch beantwortete
  Aufgaben werden gespeichert (`lk5_leitner`) und nach 1/3/7 Tagen erneut
  fällig. Auf der Startseite erscheint dann eine Karte "🔁 Wiederholung
  bereit" mit einer fachübergreifend gemischten Wiederholungsrunde
  (Interleaving, maximal 20 Aufgaben auf einmal).
- **Tages-Streak** (`lk5_streak`): zählt aufeinanderfolgende Übungstage,
  mit einer "Freeze" pro Woche, damit ein verpasster Tag nicht gleich den
  ganzen Streak zerstört.
- **Kurz-Check**: vor jedem Quiz (außer Lesegeschichten) 2–3 ungewertete
  Aufwärm-Fragen ("zählt noch nicht mit") aus dem Thema.
- **Kurz/Alle-Wahl**: bei Themen mit mehr als 10 Aufgaben kann zwischen
  "Kurz (8)" und "Alle" gewählt werden.
- **Mini-Wiederholungsrunde**: Wurden in einer Mission 2 oder mehr Aufgaben
  falsch beantwortet, bietet das Ergebnis einen Button "Nur die Fehler
  üben" an.
- **Sanftere Rückmeldungen**: statt nur "Richtig/Falsch" gibt es
  abwechselnde, ermutigende Formulierungen ("Fast! Schau mal…", "Stark
  erkannt!").

## Fortschrittsbericht (für Eltern & Lehrkräfte)

Unten im Footer gibt es einen Link "📊 Fortschrittsbericht (für Eltern)".
Er ist mit einem Passwort geschützt (kein echter Sicherheitsmechanismus,
nur ein Hinweis, dass dieser Bereich nicht für Kinder gedacht ist). Der
Bericht zeigt pro geübtem Thema: Sterne, beste Erfolgsquote, wie viele
Fragen noch zur Wiederholung anstehen, und eine Ampel-Einschätzung
(🟢/🟡/🔴). Themen werden nach Schwäche sortiert, ganz oben steht eine
konkrete Empfehlung, welches Thema am meisten Übung braucht – ein Klick
auf "Nochmal lernen" führt direkt zur Lektion mit den Beispielrechnungen
dieses Themas.

## 🎤⚔️ Spiele-Arena (Version 5)

Auf der Startseite führt die Karte "Spiele-Arena" in einen eigenen
Mini-Spiele-Bereich — dieselben Fächer, aber als kurze, temporeiche Duelle
statt Lektion+Quiz. Eigene, frei erfundene Neon-Gestaltung, keine Kopie
eines bestimmten Films oder einer Marke.

- **Quiz-Duell** ⚔️ und **Blitz-Runde** ⚡ (45 Sekunden, so viele Treffer wie
  möglich) gibt es für **jedes Fach** (Mathe, Deutsch, Englisch, Erdkunde,
  Biologie, Lesen) — sie nutzen direkt die echten Multiple-Choice-Aufgaben
  aus `window.LERNDATA`, keine separaten Inhalte. Richtige/falsche
  Antworten fließen dabei auch in die normale Leitner-Wiederholungswarteschlange
  ein, und der Tages-Streak ist derselbe wie bei den normalen Missionen.
- **Sortierschlacht** 🧲 (Reihenfolge sortieren) gibt es zusätzlich für
  Mathe und den Bonus-Bereich **Logik** 🧩 (ein Fach nur für die
  Spiele-Arena, ohne Lektionen).
- **Erinnerungs-Duell** 🧠 (Memory) gibt es zusätzlich für Deutsch.
- **Lückenzauber** ✨ (Lückentext mit Auswahl) gibt es zusätzlich für Deutsch.
- Eigene Fortschrittsebene nur für die Spiele-Arena: XP, Level/Rang
  (Trainee → Legende) und 9 Abzeichen — gespeichert unter `lk5_spiele_xp`
  und `lk5_spiele_badges`, unabhängig von den Sternen der normalen Missionen.

## Struktur

```
5-klasse-lernapp/
  index.html
  styles.css
  app.js              # Navigation, Lektion, Vokabelkarten, Übungslogik, Fortschritt,
                       # Update-Button, Spiele-Arena
  data/
    mathe.js          # Themen, Lektionen & Aufgaben Mathematik
    deutsch.js        # Themen, Lektionen & Aufgaben Deutsch
    englisch.js       # Themen, Lektionen, Vokabelkarten & Aufgaben Englisch
    erdkunde.js        # Themen, Lektionen & Aufgaben Erdkunde
    biologie.js        # Themen, Lektionen & Aufgaben Biologie
    lesen.js           # Lesegeschichten mit Verständnisfragen
    spiele.js          # Zusatzinhalte nur für die Spiele-Arena (Sortierschlacht,
                       # Erinnerungs-Duell, Lückenzauber, Logik-Bonusfach)
```

## Inhalte erweitern

Neue Aufgaben oder Themen werden direkt in der passenden `data/*.js`-Datei
ergänzt (gleiche Struktur wie die vorhandenen Einträge). Ein Thema mit
`lektion`-Feld zeigt vor der Übung automatisch die Erklärungsseite, ein
Thema mit `vokabeln`-Feld zeigt stattdessen Karteikarten. Ein neues Fach
braucht eine neue Datei nach demselben Muster plus einen Eintrag in
`index.html` (Script einbinden) und `app.js` (`AKTIVE_FAECHER`-Liste).
Neue Spiele-Inhalte (Sortierschlacht/Memory/Lückenzauber) werden in
`data/spiele.js` ergänzt; Quiz-Duell und Blitz-Runde brauchen keine
eigenen Inhalte, sie nutzen automatisch alle `"mc"`-Aufgaben des Fachs.

// Mathematik – Klasse 5 (Gymnasium Niedersachsen)
// Aufgaben-Typ "mc" = Multiple Choice (loesung ist der Text der richtigen Option)
// Aufgaben-Typ "zahl" = Antwort eintippen (loesung ist der erwartete Text, Vergleich ohne Leerzeichen)
//
// Kapitelstruktur und Reihenfolge sind an das im Unterricht verwendete Buch
// angelehnt (Fundamente der Mathematik – Niedersachsen ab 2024, 5. Schuljahr):
// 1 Natürliche Zahlen und Größen · 2 Rechnen mit natürlichen Zahlen ·
// 3 Grundbegriffe der Geometrie · 4 Flächeninhalt und Umfang ·
// 5 Volumen und Oberflächeninhalt · 6 Brüche und Dezimalzahlen.
// Alle Texte, Beispiele und Aufgaben sind vollständig selbst geschrieben –
// es wird kein Inhalt aus dem Buch übernommen, nur Themen und Reihenfolge.
//
// Jedes der 16 Themen hat eine kurze animierte "Held gegen Zahlen-Dämon"-
// Erklärung (Button "🎬 Animation ansehen", direkt über den
// Beispielrechnungen), alle mit derselben frei erfundenen
// K-Pop-Dämonenjäger-Gestaltung und demselben Animationsmotor in app.js.
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.mathe = {
  id: "mathe",
  name: "Mathematik",
  icon: "🔢",
  farbe: "#3B82F6",
  themen: [
    {
      id: "daten-auswerten",
      titel: "1.1 Daten auswerten und darstellen",
      icon: "📊",
      intro: "Kapitel 1: Zählen, ordnen und als Diagramm darstellen.",
      lektion: [
        "📊 Eine Strichliste hilft beim Zählen: Für jedes Ereignis machst du einen Strich, ab dem fünften Strich einen Querstrich (gebündelt zu 5er-Blöcken).",
        "📈 Ein Diagramm zeigt Daten als Bild – z. B. als Balkendiagramm (Säulen) oder Kreisdiagramm (Anteile als Tortenstücke).",
        "📋 Eine Tabelle ordnet Daten übersichtlich in Zeilen und Spalten.",
        "🔢 Die Häufigkeit sagt, wie oft ein Ereignis vorkommt."
      ],
      beispiele: [
        {
          aufgabe: "In einer Strichliste stehen zwei volle 5er-Blöcke und 3 einzelne Striche. Wie viele Striche sind das insgesamt?",
          schritte: [
            "Ein voller 5er-Block sind 5 Striche.",
            "Zwei volle Blöcke sind 5 + 5 = 10 Striche.",
            "Dazu kommen noch 3 einzelne Striche: 10 + 3 = 13."
          ],
          ergebnis: "13"
        }
      ],
      animation: {
        titel: "Besiege den Strichlisten-Dämon: 19",
        zahlenDaemon: "19",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Strichlisten-Dämon versteckt eine geheime Zahl in Strichen: 3 volle 5er-Blöcke und dazu noch 4 einzelne Striche! Zähle sie zusammen, um die geheime Zahl herauszufinden und den Dämon zu besiegen.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Der erste 5er-Block sind 5 Striche.",
            rechnung: "1 Block = 5",
            ergebnisSoweit: "5",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Zähle den zweiten und dritten Block dazu: 5 + 5 + 5 = 15.",
            rechnung: "3 Blöcke = 5+5+5",
            ergebnisSoweit: "15",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Jetzt kommen die 4 einzelnen Striche dazu: 15 + 4 = 19 — letzter Treffer!",
            rechnung: "15 + 4 = 19",
            ergebnisSoweit: "19",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Die geheime Zahl war 19 – 3 volle 5er-Blöcke (15) plus 4 einzelne Striche (4) ergeben 19. So zählst du auch große Strichlisten schnell zusammen.",
            ergebnisSoweit: "19",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie viele Striche zeigt ein voller 5er-Block in einer Strichliste?", typ: "zahl", loesung: "5", erklaerung: "Beim Strichliste-Führen bündelt man Striche in 5er-Gruppen, damit man am Ende nicht jeden einzelnen Strich zählen muss. Ein voller Block hat deshalb immer genau 5 Striche – meist als vier senkrechte Striche mit einem Querstrich durch alle vier erkennbar." },
        { frage: "Was zeigt ein Balkendiagramm?", typ: "mc", optionen: ["Daten als Säulen/Balken", "Nur Zahlen ohne Bild", "Nur Wörter", "Ein Rechenergebnis"], loesung: "Daten als Säulen/Balken", erklaerung: "Ein Balkendiagramm stellt jede Häufigkeit als einen Balken dar – je höher der Balken, desto öfter kam das Ereignis vor. So kannst du auf einen Blick vergleichen, ohne die Zahlen einzeln lesen zu müssen." },
        { frage: "Wie nennt man es, wie oft ein Ereignis vorkommt?", typ: "mc", optionen: ["Häufigkeit", "Mittelwert", "Summe", "Differenz"], loesung: "Häufigkeit", erklaerung: "Die Häufigkeit gibt an, wie oft etwas gezählt wurde – zum Beispiel wie oft eine Antwort in einer Umfrage gegeben wurde. Sie ist die Grundlage für jedes Diagramm und jede Strichliste." },
        { frage: "Eine Tabelle ordnet Daten in …", typ: "mc", optionen: ["Zeilen und Spalten", "Kreisen", "Strichen", "Farben"], loesung: "Zeilen und Spalten", erklaerung: "Eine Tabelle besteht aus waagerechten Zeilen und senkrechten Spalten, die sich wie ein Gitter kreuzen. So findest du jeden Wert schnell wieder, weil er genau an einer Kreuzung aus Zeile und Spalte steht." },
        { frage: "In einer Strichliste stehen zwei volle 5er-Blöcke. Wie viele Striche sind das?", typ: "zahl", loesung: "10", erklaerung: "Ein voller Block sind 5 Striche, also rechnest du für zwei volle Blöcke 5 + 5 = 10. Das Bündeln in 5er-Gruppen macht genau dieses schnelle Zusammenzählen möglich." },
        { frage: "In einer Strichliste stehen ein voller 5er-Block und 2 einzelne Striche. Wie viele Striche sind das?", typ: "zahl", loesung: "7", erklaerung: "Der volle Block zählt als 5, dazu kommen die 2 einzelnen Striche, die noch keinen neuen Block bilden: 5 + 2 = 7. Erst beim fünften einzelnen Strich würde ein neuer Block entstehen." },
        { frage: "Welches Diagramm zeigt Anteile als Kreis mit Segmenten?", typ: "mc", optionen: ["Kreisdiagramm", "Balkendiagramm", "Strichliste", "Tabelle"], loesung: "Kreisdiagramm", erklaerung: "Ein Kreisdiagramm teilt einen ganzen Kreis in Segmente – jedes Segment ist so groß wie sein Anteil an der Gesamtmenge. Deshalb eignet es sich besonders gut, wenn man zeigen will, wie sich ein Ganzes in Anteile aufteilt." },
        { frage: "5 Kinder mögen Fußball, 3 mögen Schwimmen. Wie viele Kinder wurden insgesamt befragt?", typ: "zahl", loesung: "8", erklaerung: "Um die Gesamtzahl der Befragten zu bekommen, addierst du alle Häufigkeiten: 5 Kinder mögen Fußball plus 3 Kinder mögen Schwimmen ergibt 5 + 3 = 8 Kinder insgesamt." },
        { frage: "Was braucht man, um eine Strichliste in ein Balkendiagramm umzuwandeln?", typ: "mc", optionen: ["Die Häufigkeiten der Strichliste", "Nur die Namen", "Ein Lineal", "Nichts weiter"], loesung: "Die Häufigkeiten der Strichliste", erklaerung: "Für jeden Balken zählst du zuerst die Striche eines Ereignisses in der Strichliste zusammen – das ist die Häufigkeit. Diese Häufigkeit bestimmt dann, wie hoch der jeweilige Balken gezeichnet wird." },
        { frage: "Wozu dienen Diagramme?", typ: "mc", optionen: ["Um Daten übersichtlich darzustellen", "Um zu malen", "Um zu addieren", "Um Wörter zu ordnen"], loesung: "Um Daten übersichtlich darzustellen", erklaerung: "Diagramme wandeln reine Zahlen in ein Bild um, das man auf einen Blick vergleichen kann – zum Beispiel welcher Balken am höchsten ist. Das macht große Datenmengen leichter verständlich als eine reine Zahlenliste." }
      ]
    },
    {
      id: "grosse-zahlen",
      titel: "1.2 Große Zahlen & Runden",
      icon: "🔢",
      intro: "Zahlen bis in die Millionen lesen, schreiben und runden.",
      lektion: [
        "🔢 Große Zahlen liest man von links nach rechts, immer in Dreiergruppen: Millionen, Tausender, Einer.",
        "📍 Jede Ziffer hat einen Stellenwert: Einer, Zehner, Hunderter, Tausender und so weiter.",
        "🔄 Runden heißt: Eine Zahl einfacher machen. Du schaust auf die Ziffer rechts von der Rundungsstelle.",
        "⬇️⬆️ Ist diese Ziffer 0,1,2,3,4 → abrunden. Ist sie 5,6,7,8,9 → aufrunden."
      ],
      beispiele: [
        {
          aufgabe: "Runde 748 auf die nächsten Zehner.",
          schritte: [
            "Schau auf die Ziffer rechts von der Zehnerstelle, also die Einerstelle: bei 748 ist das die 8.",
            "Die 8 ist 5 oder größer, also wird aufgerundet.",
            "Die Zehnerstelle wird deshalb eins größer: aus 740 wird 750."
          ],
          ergebnis: "750"
        },
        {
          aufgabe: "Runde 8.499 auf die nächsten Tausender.",
          schritte: [
            "Schau auf die Ziffer rechts von der Tausenderstelle, also die Hunderterstelle: bei 8.499 ist das die 4.",
            "Die 4 ist kleiner als 5, also wird abgerundet.",
            "Die Tausenderstelle bleibt einfach gleich: aus 8.499 wird 8.000."
          ],
          ergebnis: "8.000"
        },
        {
          aufgabe: "Welche Zahl ist größer: 45.900 oder 45.090?",
          schritte: [
            "Vergleiche Ziffer für Ziffer von links nach rechts.",
            "Zehntausender (4) und Tausender (5) sind bei beiden Zahlen gleich.",
            "Bei der Hunderterstelle hat 45.900 eine 9, aber 45.090 nur eine 0 – ab hier gewinnt die Zahl mit der größeren Ziffer."
          ],
          ergebnis: "45.900 ist größer"
        }
      ],
      animation: {
        titel: "Besiege den Rundungs-Dämon: 47.853",
        zahlenDaemon: "47.853",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Rundungs-Dämon aus 47.853 fordert dich heraus! Er kann sich in drei verschiedene, einfachere Zahlen verwandeln – wenn du ihn auf Zehner, Hunderter und Tausender rundest, wird er schwächer.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Runde 47.853 auf die nächsten Zehner. Schau auf die Einerziffer: 3. Das ist kleiner als 5, also wird abgerundet: 47.850.",
            rechnung: "47.853 → Zehner",
            ergebnisSoweit: "47.850",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Runde 47.853 auf die nächsten Hunderter. Schau auf die Zehnerziffer: 5. Ab 5 wird aufgerundet: 47.900.",
            rechnung: "47.853 → Hunderter",
            ergebnisSoweit: "47.900",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Runde 47.853 auf die nächsten Tausender. Schau auf die Hunderterziffer: 8. Das ist 5 oder mehr, also wird aufgerundet: 48.000 — letzter Treffer!",
            rechnung: "47.853 → Tausender",
            ergebnisSoweit: "48.000",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 47.853 gerundet: auf Zehner 47.850, auf Hunderter 47.900, auf Tausender 48.000. Je nachdem, auf welche Stelle du rundest, schaust du immer auf die nächste Ziffer rechts davon.",
            ergebnisSoweit: "48.000",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie viele Nullen hat eine Million (1.000.000)?", typ: "zahl", loesung: "6", erklaerung: "Eine Million wird als 1 gefolgt von sechs Nullen geschrieben: 1.000.000. Du erkennst das auch daran, dass eine Million aus 1.000 mal 1.000 besteht, und 1.000 hat schon drei Nullen." },
        { frage: "Welche Stelle steht in 4.372 an der Hunderterstelle?", typ: "zahl", loesung: "3", erklaerung: "In 4.372 stehen die Ziffern für 4 = Tausender, 3 = Hunderter, 7 = Zehner und 2 = Einer. Die Hunderterstelle ist also die 3, denn sie steht an dritter Stelle von rechts." },
        { frage: "Runde 748 auf die nächsten Zehner.", typ: "zahl", loesung: "750", erklaerung: "Zum Runden auf Zehner schaust du auf die Ziffer rechts von der Zehnerstelle, hier die Einerziffer 8. Weil 8 mindestens 5 ist, wird aufgerundet, und aus 748 wird 750." },
        { frage: "Runde 4.250 auf die nächsten Hunderter.", typ: "mc", optionen: ["4.200", "4.300", "4.250", "4.000"], loesung: "4.300", erklaerung: "Die Ziffer rechts von der Hunderterstelle ist hier die Zehnerziffer 5 – bei genau 5 rundet man in der Mathematik immer auf. Deshalb wird aus 4.250 die Zahl 4.300." },
        { frage: "Welche Zahl ist größer: 45.900 oder 45.090?", typ: "mc", optionen: ["45.900", "45.090", "sie sind gleich", "kann man nicht sagen"], loesung: "45.900", erklaerung: "Beim Zahlenvergleich schaust du von links nach rechts, bis sich die Ziffern unterscheiden: Zehntausender (4) und Tausender (5) sind bei beiden gleich, aber an der Hunderterstelle steht bei 45.900 eine 9 und bei 45.090 nur eine 0. Weil 9 größer ist als 0, ist 45.900 die größere Zahl." },
        { frage: "Wie schreibt man 'zwölftausenddreihundertfünf' in Ziffern?", typ: "zahl", loesung: "12305", erklaerung: "Zwölftausend schreibst du als 12.000, und dreihundertfünf als 305. Setzt du beides zusammen, ergibt sich 12.305 – die letzten drei Stellen (305) füllen dabei Hunderter-, Zehner- und Einerstelle." },
        { frage: "Runde 8.499 auf die nächsten Tausender.", typ: "mc", optionen: ["8.000", "9.000", "8.500", "8.400"], loesung: "8.000", erklaerung: "Für das Runden auf Tausender schaust du auf die Hunderterziffer, hier die 4. Weil 4 kleiner als 5 ist, wird abgerundet, und die Tausenderstelle bleibt gleich: aus 8.499 wird 8.000." },
        { frage: "Was ist die Vorgängerzahl von 10.000?", typ: "zahl", loesung: "9999", erklaerung: "Der Vorgänger einer Zahl ist die Zahl direkt davor, also 1 weniger. Bei 10.000 wechseln beim Abziehen von 1 alle Nullen zu Neunen, sodass 9.999 entsteht." },
        { frage: "Was ist die Nachfolgerzahl von 99.999?", typ: "zahl", loesung: "100000", erklaerung: "Der Nachfolger ist die Zahl direkt danach, also 1 mehr. Zählst du bei 99.999 eins weiter, springen alle Neunen auf Null und eine neue Stelle kommt dazu: 100.000." },
        { frage: "Welche Ziffer steht in 782.145 an der Zehntausenderstelle?", typ: "zahl", loesung: "8", erklaerung: "In 782.145 stehen die Ziffern von links für Hunderttausender (7), Zehntausender (8), Tausender (2), Hunderter (1), Zehner (4) und Einer (5). Die Zehntausenderstelle ist damit die 8." },
        { frage: "Runde 3.652 auf die nächsten Hunderter.", typ: "zahl", loesung: "3700", erklaerung: "Die Ziffer rechts von der Hunderterstelle ist die Zehnerziffer 5, und ab 5 wird aufgerundet. Deshalb wird aus 3.652 die gerundete Zahl 3.700." },
        { frage: "Welche Zahl ist kleiner: 12.045 oder 12.450?", typ: "mc", optionen: ["12.045", "12.450", "sie sind gleich", "kann man nicht sagen"], loesung: "12.045", erklaerung: "Zehntausender (1) und Tausender (2) sind bei beiden Zahlen gleich, also entscheidet die nächste Stelle. An der Hunderterstelle hat 12.045 eine 0 und 12.450 eine 4 – weil 0 kleiner ist, ist 12.045 die kleinere Zahl." },
        { frage: "Wie schreibt man 'dreihunderttausend' in Ziffern?", typ: "zahl", loesung: "300000", erklaerung: "Dreihunderttausend besteht aus 3 Hunderttausendern, also einer 3 gefolgt von fünf Nullen: 300.000. Du kannst es dir auch als 300 × 1.000 vorstellen." },
        { frage: "Runde 5.500 auf die nächsten Tausender.", typ: "zahl", loesung: "6000", erklaerung: "Die Ziffer rechts von der Tausenderstelle ist hier die Hunderterziffer 5 – bei genau 5 wird immer aufgerundet. Deshalb wird aus 5.500 die Zahl 6.000." },
        { frage: "Welche Zahl liegt zwischen 6.000 und 7.000?", typ: "mc", optionen: ["6.500", "5.999", "7.100", "8.000"], loesung: "6.500", erklaerung: "Eine Zahl liegt zwischen 6.000 und 7.000, wenn sie größer als 6.000 und kleiner als 7.000 ist. 6.500 erfüllt das, während 5.999 zu klein und 7.100 sowie 8.000 schon zu groß sind." },
        { frage: "Runde 91.450 auf die nächsten Tausender.", typ: "zahl", loesung: "91000", erklaerung: "Die Ziffer rechts von der Tausenderstelle ist hier die Hunderterziffer 4. Weil 4 kleiner als 5 ist, wird abgerundet, und aus 91.450 wird 91.000." }
      ]
    },
    {
      id: "groessen-einheiten",
      titel: "1.3 Größen umrechnen",
      icon: "📏",
      intro: "Längen, Gewichte, Zeit, Geld und den Maßstab richtig umrechnen.",
      lektion: [
        "📏 Längen misst man in mm, cm, m und km. 100 cm sind 1 m, 1000 m sind 1 km.",
        "⚖️ Gewichte misst man in g, kg und t. 1000 g sind 1 kg.",
        "⏰ Zeit misst man in Sekunden, Minuten und Stunden. 60 Sekunden sind 1 Minute, 60 Minuten sind 1 Stunde.",
        "💶 Geld misst man in Euro und Cent. 100 Cent sind 1 Euro.",
        "💡 Tipp: Von einer kleinen in eine große Einheit rechnest du meistens durch Teilen. Umgekehrt durch Malnehmen.",
        "🗺️ Der Maßstab gibt an, wie eine Karte oder Zeichnung im Vergleich zur Wirklichkeit verkleinert ist: 1:100 bedeutet, 1 cm auf der Karte sind 100 cm (= 1 m) in Wirklichkeit."
      ],
      beispiele: [
        {
          aufgabe: "3 m sind wie viele cm?",
          schritte: [
            "Du weißt: 1 m sind 100 cm.",
            "Für 3 m rechnest du also 3-mal so viel: 3 × 100.",
            "3 × 100 = 300."
          ],
          ergebnis: "300 cm"
        },
        {
          aufgabe: "2.500 g sind wie viele kg?",
          schritte: [
            "Du weißt: 1.000 g sind 1 kg.",
            "Du willst von der kleinen Einheit (g) in die große Einheit (kg), also teilst du.",
            "2.500 : 1.000 = 2,5."
          ],
          ergebnis: "2,5 kg"
        },
        {
          aufgabe: "Der Maßstab ist 1:100. Eine Strecke auf dem Plan ist 5 cm lang. Wie lang ist sie in Wirklichkeit?",
          schritte: [
            "Bei 1:100 ist jeder cm auf dem Plan in Wirklichkeit 100-mal so lang.",
            "Du rechnest deshalb 5 × 100.",
            "5 × 100 = 500 cm, das sind 5 m."
          ],
          ergebnis: "500 cm (5 m)"
        }
      ],
      animation: {
        titel: "Besiege den Maßstab-Dämon: 1:100",
        zahlenDaemon: "1:100",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Maßstab-Dämon hat eine Karte im Maßstab 1:100 verzaubert! Eine Strecke auf der Karte ist 6 cm lang. Finde heraus, wie lang sie in Wirklichkeit ist, indem du Schritt für Schritt umrechnest.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Die ersten 2 cm auf der Karte sind in Wirklichkeit 2 × 100 = 200 cm.",
            rechnung: "2 cm × 100 = 200 cm",
            ergebnisSoweit: "200 cm",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Nach 4 cm auf der Karte sind es in Wirklichkeit schon 4 × 100 = 400 cm.",
            rechnung: "4 cm × 100 = 400 cm",
            ergebnisSoweit: "400 cm",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Die volle Strecke von 6 cm auf der Karte ergibt in Wirklichkeit 6 × 100 = 600 cm, also 6 m — letzter Treffer!",
            rechnung: "6 cm × 100 = 600 cm",
            ergebnisSoweit: "600 cm (6 m)",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Bei einem Maßstab von 1:100 ist jeder Zentimeter auf der Karte in Wirklichkeit 100-mal so lang: 6 cm auf der Karte sind 600 cm, also 6 Meter, in Wirklichkeit.",
            ergebnisSoweit: "600 cm (6 m)",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie viele Zentimeter sind 1 Meter?", typ: "zahl", loesung: "100", erklaerung: "1 Meter ist per Definition genau 100 Zentimeter lang – das ist eine Grundumrechnung, die du dir einfach merken musst, so wie 1 Euro = 100 Cent." },
        { frage: "Wie viele Meter sind 1 Kilometer?", typ: "zahl", loesung: "1000", erklaerung: "Die Vorsilbe 'Kilo' bedeutet 1000, deshalb ist 1 Kilometer genau 1.000 Meter lang. Das gilt für alle Kilo-Einheiten, zum Beispiel auch 1 Kilogramm = 1.000 Gramm." },
        { frage: "Wie viele Gramm sind 1 Kilogramm?", typ: "zahl", loesung: "1000", erklaerung: "Auch hier gilt: 'Kilo' steht für 1000, also ist 1 Kilogramm gleich 1.000 Gramm. Willst du von kg in g umrechnen, multiplizierst du deshalb immer mit 1.000." },
        { frage: "Wie viele Minuten hat eine Stunde?", typ: "zahl", loesung: "60", erklaerung: "Eine Stunde ist in 60 Minuten unterteilt – das ist eine feste Regel bei der Zeitmessung, anders als bei Längen oder Gewichten, wo meist mit 10, 100 oder 1000 gerechnet wird." },
        { frage: "3 m sind wie viele cm?", typ: "zahl", loesung: "300", erklaerung: "Weil 1 m = 100 cm ist, rechnest du bei 3 m dreimal so viel: 3 × 100 = 300 cm. Von einer großen in eine kleine Einheit rechnest du also durch Multiplizieren." },
        { frage: "2.500 g sind wie viele kg?", typ: "mc", optionen: ["2,5 kg", "25 kg", "0,25 kg", "250 kg"], loesung: "2,5 kg", erklaerung: "Weil 1.000 g = 1 kg ist, teilst du beim Wechsel von der kleinen Einheit (g) in die große Einheit (kg) durch 1.000: 2.500 : 1.000 = 2,5 kg." },
        { frage: "1,5 € sind wie viele Cent?", typ: "zahl", loesung: "150", erklaerung: "1 Euro sind 100 Cent, also multiplizierst du 1,5 mit 100: 1,5 × 100 = 150 Cent. Das Komma verschiebt sich dabei um zwei Stellen nach rechts." },
        { frage: "Wie viele Millimeter sind 1 Zentimeter?", typ: "zahl", loesung: "10", erklaerung: "1 Zentimeter ist in 10 gleich große Millimeter unterteilt – das siehst du auch an jedem Lineal, wo zwischen zwei Zentimeterstrichen genau 10 kleine Striche liegen." },
        { frage: "Wie viele Meter sind 2,5 km?", typ: "zahl", loesung: "2500", erklaerung: "Weil 1 km = 1.000 m ist, multiplizierst du 2,5 mit 1.000: 2,5 × 1.000 = 2.500 m. Beim Wechsel von einer großen in eine kleine Einheit wird also immer malgenommen." },
        { frage: "Wie viele Minuten sind 2 Stunden?", typ: "zahl", loesung: "120", erklaerung: "Jede Stunde hat 60 Minuten, also rechnest du für 2 Stunden 2 × 60 = 120 Minuten." },
        { frage: "Wie viele Gramm sind 0,5 kg?", typ: "zahl", loesung: "500", erklaerung: "0,5 kg ist die Hälfte von 1 kg, und da 1 kg = 1.000 g sind, ist die Hälfte davon 500 g. Rechnerisch: 0,5 × 1.000 = 500." },
        { frage: "Wie viele Cent sind 3,20 €?", typ: "zahl", loesung: "320", erklaerung: "Du multiplizierst den Eurobetrag mit 100, weil 1 € = 100 Cent sind: 3,20 × 100 = 320 Cent." },
        { frage: "Wie viele Meter sind 450 cm?", typ: "mc", optionen: ["4,5 m", "45 m", "0,45 m", "450 m"], loesung: "4,5 m", erklaerung: "Weil 100 cm = 1 m sind, teilst du beim Wechsel von der kleinen in die große Einheit durch 100: 450 : 100 = 4,5 m." },
        { frage: "Der Maßstab einer Karte ist 1:1000. Wie viele cm in Wirklichkeit sind 1 cm auf der Karte?", typ: "zahl", loesung: "1000", erklaerung: "Bei einem Maßstab 1:1000 steht die erste Zahl für die Karte und die zweite für die Wirklichkeit. Das bedeutet: 1 cm auf der Karte entspricht 1.000 cm in Wirklichkeit." },
        { frage: "Der Maßstab ist 1:100. Eine Strecke auf der Karte ist 5 cm lang. Wie lang ist sie in Wirklichkeit (in cm)?", typ: "zahl", loesung: "500", erklaerung: "Bei 1:100 ist jeder Zentimeter auf der Karte in Wirklichkeit 100-mal so lang. Deshalb rechnest du 5 × 100 = 500 cm." },
        { frage: "Der Maßstab ist 1:50. Wie lang ist eine 3-cm-Strecke auf dem Plan in Wirklichkeit?", typ: "mc", optionen: ["1,5 m", "15 m", "150 m", "0,5 m"], loesung: "1,5 m", erklaerung: "Bei 1:50 ist jeder Zentimeter auf dem Plan in Wirklichkeit 50-mal so lang, also rechnest du 3 × 50 = 150 cm. Das entspricht umgerechnet 1,5 m, weil 100 cm = 1 m sind." },
        { frage: "Was bedeutet ein Maßstab von 1:200?", typ: "mc", optionen: ["1 cm auf der Karte = 200 cm in Wirklichkeit", "200 cm auf der Karte = 1 cm in Wirklichkeit", "Die Karte ist 200-mal so groß wie die Wirklichkeit", "Das hat nichts mit Längen zu tun"], loesung: "1 cm auf der Karte = 200 cm in Wirklichkeit", erklaerung: "In einem Maßstab wie 1:200 steht die erste Zahl immer für die Karte und die zweite für die Wirklichkeit. Deshalb bedeutet 1:200, dass 1 cm auf der Karte 200 cm in Wirklichkeit entspricht." }
      ]
    },
    {
      id: "grundrechenarten",
      titel: "2.1 Grundrechenarten",
      icon: "➕",
      intro: "Plus, minus, mal und geteilt – das Wichtigste zum Kopfrechnen.",
      lektion: [
        "➕ Plus (+) heißt addieren: Du legst Zahlen zusammen. Das Ergebnis heißt Summe.",
        "➖ Minus (−) heißt subtrahieren: Du ziehst eine Zahl von einer anderen ab. Das Ergebnis heißt Differenz.",
        "✖️ Mal (×) heißt multiplizieren: Du zählst eine Zahl mehrmals. Das Ergebnis heißt Produkt.",
        "➗ Geteilt (:) heißt dividieren: Du teilst eine Zahl in gleiche Teile auf. Das Ergebnis heißt Quotient.",
        "⭐ Wichtige Regel: 'Punkt vor Strich' – zuerst rechnest du Mal und Geteilt, danach erst Plus und Minus."
      ],
      beispiele: [
        {
          aufgabe: "5 + 3 × 4 = ?",
          schritte: [
            "Schau zuerst, ob eine Mal- oder Geteilt-Aufgabe dabei ist.",
            "3 × 4 rechnest du zuerst: 3 × 4 = 12.",
            "Jetzt rechnest du die Plus-Aufgabe: 5 + 12 = 17."
          ],
          ergebnis: "17"
        },
        {
          aufgabe: "(4 + 6) × 3 = ?",
          schritte: [
            "Steht eine Klammer da, rechnest du die immer zuerst.",
            "In der Klammer steht 4 + 6 = 10.",
            "Jetzt rechnest du 10 × 3 = 30."
          ],
          ergebnis: "30"
        }
      ],
      animation: {
        titel: "Besiege den Rechenketten-Dämon: 5 + 3 × 4 − 2",
        zahlenDaemon: "5+3×4−2",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Rechenketten-Dämon versteckt sich in der Aufgabe 5 + 3 × 4 − 2! Er hofft, dass du einfach von links nach rechts rechnest – aber mit 'Punkt vor Strich' besiegst du ihn Schritt für Schritt.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Zuerst die Punktrechnung: 3 × 4 = 12. Die Aufgabe wird jetzt zu 5 + 12 − 2.",
            rechnung: "3 × 4 = 12",
            ergebnisSoweit: "5 + 12 − 2",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Jetzt rechnest du von links: 5 + 12 = 17.",
            rechnung: "5 + 12 = 17",
            ergebnisSoweit: "17 − 2",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Zum Schluss: 17 − 2 = 15 — letzter Treffer!",
            rechnung: "17 − 2 = 15",
            ergebnisSoweit: "15",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 5 + 3 × 4 − 2 = 15. Wegen Punkt-vor-Strich hast du zuerst 3 × 4 gerechnet, dann erst die Plus- und Minus-Aufgaben von links nach rechts.",
            ergebnisSoweit: "15",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie heißt das Ergebnis einer Plus-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Summe", erklaerung: "Wenn du zwei oder mehr Zahlen addierst (zusammenzählst), heißt das Ergebnis Summe. Die Fachbegriffe helfen dir, in der Schule genau zu benennen, welche Rechenart gemeint ist." },
        { frage: "Wie heißt das Ergebnis einer Minus-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Differenz", erklaerung: "Beim Subtrahieren (Abziehen) heißt das Ergebnis Differenz. Es zeigt, wie viel Unterschied zwischen zwei Zahlen besteht." },
        { frage: "Wie heißt das Ergebnis einer Mal-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Produkt", erklaerung: "Beim Multiplizieren heißt das Ergebnis Produkt. Es entsteht, wenn du eine Zahl mehrmals zu sich selbst addierst, zum Beispiel 4×3 = 3+3+3+3." },
        { frage: "Wie heißt das Ergebnis einer Geteilt-Aufgabe?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Quotient", erklaerung: "Beim Dividieren (Teilen) heißt das Ergebnis Quotient. Es zeigt, wie oft eine Zahl in eine andere passt." },
        { frage: "Was ist 234 + 158?", typ: "zahl", loesung: "392", erklaerung: "Rechne stellenweise: Einer 4+8=12 (2 aufschreiben, 1 merken), Zehner 3+5+1=9, Hunderter 2+1=3. Zusammen ergibt das 392." },
        { frage: "Was ist 500 - 178?", typ: "zahl", loesung: "322", erklaerung: "500 minus 178 kannst du dir als 500 − 200 + 22 vorstellen (weil 178 nahe an 200 liegt): 500 − 200 = 300, dann 300 + 22 = 322." },
        { frage: "Was ist 12 × 8?", typ: "zahl", loesung: "96", erklaerung: "12 × 8 kannst du zerlegen in 10 × 8 + 2 × 8: 10 × 8 = 80 und 2 × 8 = 16, zusammen 80 + 16 = 96." },
        { frage: "Was ist 144 : 12?", typ: "zahl", loesung: "12", erklaerung: "Du suchst die Zahl, die mit 12 multipliziert 144 ergibt. Da 12 × 12 = 144 ist, lautet das Ergebnis 12." },
        { frage: "Welche Regel gilt: Punkt-vor-Strich bedeutet …", typ: "mc", optionen: ["Mal und Geteilt zuerst rechnen", "Plus und Minus zuerst rechnen", "immer von links nach rechts", "immer von rechts nach links"], loesung: "Mal und Geteilt zuerst rechnen", erklaerung: "Punktrechnung (× und :) hat in der Mathematik immer Vorrang vor Strichrechnung (+ und −), egal in welcher Reihenfolge sie im Term stehen. Ohne diese Regel könnten Rechnungen wie 5+3×4 unterschiedliche Ergebnisse haben, je nachdem, wer sie rechnet." },
        { frage: "Was ist 5 + 3 × 4?", typ: "zahl", loesung: "17", erklaerung: "Wegen Punkt-vor-Strich rechnest du zuerst 3 × 4 = 12, und danach erst 5 + 12 = 17. Würdest du einfach von links nach rechts rechnen, kämst du fälschlich auf 32." },
        { frage: "Was ist 9 × 9?", typ: "zahl", loesung: "81", erklaerung: "9 × 9 gehört zum kleinen Einmaleins und ist gleich 81 – du kannst es dir auch als 10 × 9 − 9 = 90 − 9 = 81 merken." },
        { frage: "Was ist 63 : 7?", typ: "zahl", loesung: "9", erklaerung: "Du suchst die Zahl, mit der 7 multipliziert 63 ergibt. Da 9 × 7 = 63 ist, lautet das Ergebnis 9." },
        { frage: "Was ist 1000 - 456?", typ: "zahl", loesung: "544", erklaerung: "Rechne in Schritten: 1000 − 400 = 600, dann 600 − 56 = 544. So musst du nicht mit vielen Überträgen gleichzeitig jonglieren." },
        { frage: "Was ist 25 × 4?", typ: "zahl", loesung: "100", erklaerung: "25 × 4 kannst du in zwei Schritten verdoppeln: 25 × 2 = 50, und 50 × 2 = 100. Das nutzt aus, dass ×4 dasselbe ist wie zweimal verdoppeln." },
        { frage: "Was ist (4 + 6) × 3?", typ: "zahl", loesung: "30", erklaerung: "Klammern werden immer zuerst berechnet, egal welche Rechenzeichen außerhalb stehen: 4 + 6 = 10, danach 10 × 3 = 30." },
        { frage: "Was ist 20 - 4 × 3?", typ: "zahl", loesung: "8", erklaerung: "Wegen Punkt-vor-Strich rechnest du zuerst 4 × 3 = 12, danach 20 − 12 = 8." },
        { frage: "Was ist 7 × 6?", typ: "zahl", loesung: "42", erklaerung: "7 × 6 gehört zum kleinen Einmaleins und ist gleich 42 – du kannst es dir auch als 7 × 5 + 7 = 35 + 7 = 42 herleiten." },
        { frage: "Was ist 128 : 4?", typ: "zahl", loesung: "32", erklaerung: "Teile in zwei Schritten: 128 : 4 kannst du als 120 : 4 + 8 : 4 rechnen: 120 : 4 = 30 und 8 : 4 = 2, zusammen 30 + 2 = 32." },
        { frage: "Was bedeutet 'Klammern zuerst'?", typ: "mc", optionen: ["Was in Klammern steht, wird zuerst gerechnet", "Klammern kann man ignorieren", "Klammern kommen nach Punktrechnung", "Klammern sind nur Deko"], loesung: "Was in Klammern steht, wird zuerst gerechnet", erklaerung: "Klammern zeigen, welcher Teil einer Rechnung zusammengehört und deshalb vor allen anderen Rechenschritten berechnet werden muss – sogar vor der Punktrechnung." },
        { frage: "Was ist 15 × 3 - 10?", typ: "zahl", loesung: "35", erklaerung: "Wegen Punkt-vor-Strich rechnest du zuerst 15 × 3 = 45, danach 45 − 10 = 35." }
      ]
    },
    {
      id: "schriftliches-rechnen",
      titel: "2.2 Schriftliches Addieren, Subtrahieren & Multiplizieren",
      icon: "✏️",
      intro: "Große Zahlen Schritt für Schritt schriftlich berechnen.",
      lektion: [
        "➕ Schriftliche Addition: Du schreibst die Zahlen stellenrichtig untereinander (Einer unter Einer, Zehner unter Zehner usw.) und addierst spaltenweise von rechts nach links. Ab 10 schreibst du die Einerziffer auf und merkst dir 1 für die nächste Spalte.",
        "➖ Schriftliche Subtraktion: Genauso stellenrichtig untereinanderschreiben. Reicht eine Ziffer oben nicht aus, leihst du dir 1 von der nächsten Spalte.",
        "✖️ Schriftliche Multiplikation: Du multiplizierst die große Zahl zuerst mit der Einerziffer, dann mit der Zehnerziffer (um eine Stelle nach links verschoben), und addierst am Ende alle Teilergebnisse."
      ],
      beispiele: [
        {
          aufgabe: "347 + 258 = ?",
          schritte: [
            "Einer: 7 + 8 = 15, du schreibst die 5 auf und merkst dir 1.",
            "Zehner: 4 + 5 = 9, plus die gemerkte 1 = 10, du schreibst die 0 auf und merkst dir 1.",
            "Hunderter: 3 + 2 = 5, plus die gemerkte 1 = 6."
          ],
          ergebnis: "605"
        },
        {
          aufgabe: "742 - 315 = ?",
          schritte: [
            "Einer: 2 - 5 geht nicht, du leihst dir 1 von den Zehnern: 12 - 5 = 7.",
            "Zehner: die 4 ist jetzt eine 3 (weil geliehen): 3 - 1 = 2.",
            "Hunderter: 7 - 3 = 4."
          ],
          ergebnis: "427"
        },
        {
          aufgabe: "23 × 14 = ?",
          schritte: [
            "Du multiplizierst erst 23 × 4 (Einer von 14): 23 × 4 = 92.",
            "Dann 23 × 10 (Zehner von 14): 23 × 10 = 230.",
            "Beide Teilergebnisse addierst du: 92 + 230 = 322."
          ],
          ergebnis: "322"
        }
      ],
      animation: {
        titel: "Besiege den Multiplikations-Dämon: 23 × 14",
        zahlenDaemon: "23×14",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Multiplikations-Dämon aus 23 × 14 versperrt dir den Weg! Weil die Aufgabe zu groß zum Kopfrechnen ist, zerlegst du 14 in Einer und Zehner und rechnest in zwei Teilen.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Rechne zuerst 23 mal die Einerziffer von 14: 23 × 4 = 92.",
            rechnung: "23 × 4 = 92",
            ergebnisSoweit: "92",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Jetzt 23 mal die Zehnerziffer von 14: 23 × 10 = 230.",
            rechnung: "23 × 10 = 230",
            ergebnisSoweit: "230",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Addiere beide Teilergebnisse: 92 + 230 = 322 — letzter Treffer!",
            rechnung: "92 + 230 = 322",
            ergebnisSoweit: "322",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 23 × 14 = 322. Indem du 14 in 4 und 10 zerlegt hast, konntest du zwei einfachere Multiplikationen rechnen und am Ende addieren.",
            ergebnisSoweit: "322",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "347 + 258 = ?", typ: "zahl", loesung: "605", erklaerung: "Rechne stellenweise von rechts: Einer 7+8=15 (5 aufschreiben, 1 merken), Zehner 4+5+1=10 (0 aufschreiben, 1 merken), Hunderter 3+2+1=6. Zusammen ergibt das 605." },
        { frage: "742 - 315 = ?", typ: "zahl", loesung: "427", erklaerung: "Einer: 2−5 geht nicht, du leihst dir 1 von den Zehnern: 12−5=7. Zehner: die geliehene 4 wird zur 3, also 3−1=2. Hunderter: 7−3=4. Zusammen: 427." },
        { frage: "23 × 14 = ?", typ: "zahl", loesung: "322", erklaerung: "Du zerlegst 14 in Einer und Zehner: erst 23×4=92, dann 23×10=230. Beide Teilergebnisse addierst du: 92+230=322." },
        { frage: "456 + 389 = ?", typ: "zahl", loesung: "845", erklaerung: "Einer: 6+9=15 (5 aufschreiben, 1 merken), Zehner: 5+8+1=14 (4 aufschreiben, 1 merken), Hunderter: 4+3+1=8. Zusammen: 845." },
        { frage: "800 - 356 = ?", typ: "zahl", loesung: "444", erklaerung: "Einer: 0−6 geht nicht, du musst dir über die Zehner hinweg von den Hundertern leihen. Am Ende ergibt sich 800−356=444 – die Probe zeigt: 444+356=800." },
        { frage: "32 × 21 = ?", typ: "zahl", loesung: "672", erklaerung: "Du zerlegst 21 in Einer und Zehner: erst 32×1=32, dann 32×20=640. Beide Teilergebnisse addierst du: 32+640=672." },
        { frage: "Bei der schriftlichen Addition schreibt man die Zahlen …", typ: "mc", optionen: ["stellenrichtig untereinander", "nebeneinander", "quer", "in einer Reihe"], loesung: "stellenrichtig untereinander", erklaerung: "Nur wenn Einer unter Einer, Zehner unter Zehner und Hunderter unter Hunderter stehen, kannst du spaltenweise richtig addieren. Verrutschte Stellen führen sonst zu falschen Ergebnissen." },
        { frage: "Wie nennt man es, wenn man sich bei der Subtraktion eine 1 von der nächsten Spalte ausleiht?", typ: "mc", optionen: ["Leihen", "Runden", "Kürzen", "Erweitern"], loesung: "Leihen", erklaerung: "Reicht die obere Ziffer einer Spalte nicht aus, um die untere abzuziehen, leihst du dir 1 von der nächsten (höheren) Spalte – dieser Rechentrick heißt Leihen." },
        { frage: "129 + 671 = ?", typ: "zahl", loesung: "800", erklaerung: "Einer: 9+1=10 (0 aufschreiben, 1 merken), Zehner: 2+7+1=10 (0 aufschreiben, 1 merken), Hunderter: 1+6+1=8. Zusammen: 800." },
        { frage: "45 × 12 = ?", typ: "zahl", loesung: "540", erklaerung: "Du zerlegst 12 in Einer und Zehner: erst 45×2=90, dann 45×10=450. Beide Teilergebnisse addierst du: 90+450=540." },
        { frage: "603 - 248 = ?", typ: "zahl", loesung: "355", erklaerung: "Einer: 3−8 geht nicht, du leihst dir 1 von den Zehnern – doch dort steht eine 0, also musst du dir zuerst von den Hundertern leihen. Am Ende ergibt sich 603−248=355 – die Probe zeigt: 355+248=603." }
      ]
    },
    {
      id: "schriftliche-division",
      titel: "2.3 Schriftliche Division",
      icon: "➗",
      intro: "Große Zahlen Schritt für Schritt teilen, auch wenn's im Kopf nicht mehr geht.",
      lektion: [
        "➗ Bei großen Zahlen kannst du nicht immer im Kopf teilen. Dafür gibt es die schriftliche Division – du teilst Ziffer für Ziffer.",
        "1️⃣ Nimm die erste Ziffer der großen Zahl. Ist sie zu klein für den Divisor, nimm die ersten zwei Ziffern.",
        "2️⃣ Teile sie durch den Divisor und schreib das Ergebnis über den Strich. Rechne zurück (Ergebnis × Divisor) und zieh ab – das ist der Rest.",
        "3️⃣ Hol dir die nächste Ziffer der großen Zahl dazu (an den Rest anhängen) und wiederhole das Ganze.",
        "✅ Wenn keine Ziffer mehr übrig ist und der Rest 0 ist, geht die Division ohne Rest auf."
      ],
      beispiele: [
        {
          aufgabe: "848 : 4 = ?",
          schritte: [
            "Erste Ziffer 8: Wie oft passt 4 in 8? Zweimal (2 × 4 = 8), Rest 0.",
            "Nächste Ziffer 4 dazu: Wie oft passt 4 in 4? Einmal (1 × 4 = 4), Rest 0.",
            "Letzte Ziffer 8 dazu: Wie oft passt 4 in 8? Zweimal (2 × 4 = 8), Rest 0."
          ],
          ergebnis: "212"
        },
        {
          aufgabe: "729 : 3 = ?",
          schritte: [
            "Erste Ziffer 7: Wie oft passt 3 in 7? Zweimal (2 × 3 = 6), Rest 1.",
            "Rest 1 + nächste Ziffer 2 = 12: Wie oft passt 3 in 12? Viermal (4 × 3 = 12), Rest 0.",
            "Letzte Ziffer 9 dazu: Wie oft passt 3 in 9? Dreimal (3 × 3 = 9), Rest 0."
          ],
          ergebnis: "243"
        },
        {
          aufgabe: "936 : 4 = ?",
          schritte: [
            "Erste Ziffer 9: Wie oft passt 4 in 9? Zweimal (2 × 4 = 8), Rest 1.",
            "Rest 1 + nächste Ziffer 3 = 13: Wie oft passt 4 in 13? Dreimal (3 × 4 = 12), Rest 1.",
            "Rest 1 + letzte Ziffer 6 = 16: Wie oft passt 4 in 16? Viermal (4 × 4 = 16), Rest 0."
          ],
          ergebnis: "234"
        }
      ],
      // Kurze, interaktive Schritt-Animation im K-Pop-Dämonenjäger-Look
      // (eigene, frei erfundene Gestaltung – keine Kopie eines Films).
      // Wird auf der Lektion-Seite über den Button "🎬 Animation ansehen" geöffnet.
      // aktion-Werte, die der Animationsmotor in app.js kennt:
      // "eingang" (Held & Dämon treten auf), "angriff" (Held schlägt zu,
      // HP-Balken tweent runter), "sieg" (Dämon besiegt, Konfetti).
      // zielGruppen speist das "Kind 1..4"-Verteilen-Modell: Es zeigt parallel
      // zur abstrakten Rechnung, wie viel jedes Kind bisher bekommen hat –
      // die konkrete Brücke zum abstrakten Rechenverfahren.
      animation: {
        titel: "Besiege den Zahlen-Dämon: 936 : 4",
        zahlenDaemon: "936",
        zielGruppen: 4,
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Zahlen-Dämon aus 936 versperrt dir den Weg! Stell dir vor: 936 Bonbons werden gerecht auf 4 Kinder verteilt – jedes Kind soll genau gleich viel bekommen. Weil 936 zu groß zum Kopfrechnen ist, teilst du den Dämon Ziffer für Ziffer durch 4 – so wie bei der schriftlichen Division.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Schritt 1: Nimm die erste Ziffer 9. Wie oft passt 4 vollständig in 9? Zweimal, denn 2 × 4 = 8 und 3 × 4 = 12 wäre schon zu viel. Es bleibt ein Rest: 9 − 8 = 1.",
            rechnung: "9 : 4 = 2, Rest 1",
            ergebnisSoweit: "2",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Schritt 2: Hol dir die nächste Ziffer der großen Zahl (die 3) dazu: aus dem Rest 1 wird 13. Wie oft passt 4 in 13? Dreimal, denn 3 × 4 = 12 und 4 × 4 = 16 wäre zu viel. Es bleibt wieder Rest 1: 13 − 12 = 1.",
            rechnung: "13 : 4 = 3, Rest 1",
            ergebnisSoweit: "23",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Schritt 3: Hol dir die letzte Ziffer (6) dazu: aus dem Rest 1 wird 16. Wie oft passt 4 in 16? Genau viermal, denn 4 × 4 = 16 passt exakt. Rest: 16 − 16 = 0 — kein Rest mehr, letzter Treffer!",
            rechnung: "16 : 4 = 4, Rest 0",
            ergebnisSoweit: "234",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Jedes der 4 Kinder bekommt genau 234 Bonbons – 936 : 4 = 234, ohne Rest. Indem du Ziffer für Ziffer vorgegangen bist (erst die 9, dann die 3, dann die 6), hast du die große Zahl in kleine, machbare Schritte zerlegt und den Zahlen-Dämon bezwungen.",
            ergebnisSoweit: "234",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie nennt man das Ergebnis einer Division noch einmal?", typ: "mc", optionen: ["Summe", "Differenz", "Produkt", "Quotient"], loesung: "Quotient", erklaerung: "Bei einer Division (Geteilt-Aufgabe) heißt das Ergebnis Quotient – genau wie bei den Grundrechenarten schon gelernt." },
        { frage: "Was ist 484 : 4?", typ: "zahl", loesung: "121", erklaerung: "Ziffer für Ziffer: 4:4=1 Rest 0, dann 8:4=2 Rest 0, dann 4:4=1 Rest 0. Zusammengesetzt ergibt das 121." },
        { frage: "Was ist 636 : 3?", typ: "zahl", loesung: "212", erklaerung: "Ziffer für Ziffer: 6:3=2 Rest 0, dann 3:3=1 Rest 0, dann 6:3=2 Rest 0. Zusammengesetzt ergibt das 212." },
        { frage: "Was ist 848 : 4?", typ: "zahl", loesung: "212", erklaerung: "Ziffer für Ziffer: 8:4=2 Rest 0, dann 4:4=1 Rest 0, dann 8:4=2 Rest 0. Zusammengesetzt ergibt das 212." },
        { frage: "Was ist 729 : 3?", typ: "zahl", loesung: "243", erklaerung: "Erste Ziffer 7: 7:3=2 Rest 1. Rest 1 plus nächste Ziffer 2 ergibt 12: 12:3=4 Rest 0. Letzte Ziffer 9: 9:3=3 Rest 0. Zusammengesetzt ergibt das 243." },
        { frage: "Was ist 824 : 8?", typ: "zahl", loesung: "103", erklaerung: "Erste Ziffer 8: 8:8=1 Rest 0. Die nächste Ziffer 2 allein ist kleiner als 8, deshalb kommt eine 0 in den Quotienten, und du holst die nächste Ziffer dazu: 24:8=3 Rest 0. Zusammengesetzt ergibt das 103." },
        { frage: "Was ist 945 : 5?", typ: "zahl", loesung: "189", erklaerung: "Erste Ziffer 9: 9:5=1 Rest 4. Rest 4 plus nächste Ziffer 4 ergibt 44: 44:5=8 Rest 4. Rest 4 plus letzte Ziffer 5 ergibt 45: 45:5=9 Rest 0. Zusammengesetzt ergibt das 189." },
        { frage: "Was ist 693 : 3?", typ: "zahl", loesung: "231", erklaerung: "Ziffer für Ziffer: 6:3=2 Rest 0, dann 9:3=3 Rest 0, dann 3:3=1 Rest 0. Zusammengesetzt ergibt das 231." },
        { frage: "Was ist 936 : 4?", typ: "zahl", loesung: "234", erklaerung: "Genau diese Rechnung besiegst du auch im Zahlen-Dämon-Video: 9:4=2 Rest 1, dann 13:4=3 Rest 1, dann 16:4=4 Rest 0. Zusammengesetzt ergibt das 234." },
        { frage: "Was ist 7.236 : 6?", typ: "zahl", loesung: "1206", erklaerung: "Erste Ziffer 7: 7:6=1 Rest 1. Rest 1 plus nächste Ziffer 2 ergibt 12: 12:6=2 Rest 0. Die nächste Ziffer 3 allein reicht nicht: 3:6=0 Rest 3. Rest 3 plus letzte Ziffer 6 ergibt 36: 36:6=6 Rest 0. Zusammengesetzt ergibt das 1.206." },
        { frage: "Bei 25 : 4 bleibt ein Rest. Wie groß ist er?", typ: "zahl", loesung: "1", erklaerung: "Du suchst das größte Vielfache von 4, das nicht größer als 25 ist: 4×6=24. Der Rest ist der Unterschied zwischen 25 und 24, also 25−24=1." },
        { frage: "Bei 936 : 4 = 234 — wie groß ist der Rest am Ende?", typ: "zahl", loesung: "0", erklaerung: "Weil 234 × 4 genau 936 ergibt, bleibt kein Rest übrig – die Division geht 'auf'. Das erkennst du daran, dass beim letzten Rechenschritt 16 − 16 = 0 herauskommt." }
      ]
    },
    {
      id: "rechengesetze-teilbarkeit",
      titel: "2.4 Rechengesetze & Teilbarkeit",
      icon: "🔍",
      intro: "Rechentricks, die das Kopfrechnen einfacher machen.",
      lektion: [
        "🔄 Kommutativgesetz: Beim Plus und Mal darf man die Reihenfolge tauschen: 3 + 5 = 5 + 3, 4 × 7 = 7 × 4.",
        "📦 Assoziativgesetz: Beim Plus und Mal darf man anders klammern: (2 + 3) + 4 = 2 + (3 + 4).",
        "🔢 Teilbarkeit durch 2: Eine Zahl ist durch 2 teilbar, wenn die letzte Ziffer 0, 2, 4, 6 oder 8 ist (gerade Zahl).",
        "5️⃣ Teilbarkeit durch 5: Eine Zahl ist durch 5 teilbar, wenn die letzte Ziffer 0 oder 5 ist.",
        "🔟 Teilbarkeit durch 10: Eine Zahl ist durch 10 teilbar, wenn die letzte Ziffer 0 ist.",
        "3️⃣ Teilbarkeit durch 3: Eine Zahl ist durch 3 teilbar, wenn ihre Quersumme (Summe aller Ziffern) durch 3 teilbar ist."
      ],
      beispiele: [
        {
          aufgabe: "Ist 246 durch 3 teilbar?",
          schritte: [
            "Bilde die Quersumme: 2 + 4 + 6 = 12.",
            "Prüfe, ob 12 durch 3 teilbar ist: 12 : 3 = 4.",
            "Da 12 durch 3 teilbar ist, ist auch 246 durch 3 teilbar."
          ],
          ergebnis: "Ja, 246 ist durch 3 teilbar"
        }
      ],
      animation: {
        titel: "Besiege den Teilbarkeits-Dämon: 246",
        zahlenDaemon: "246",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Teilbarkeits-Dämon aus der Zahl 246 will nicht verraten, durch welche Zahlen er teilbar ist! Prüfe ihn mit drei Teilbarkeitsregeln, um seine Geheimnisse aufzudecken.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Teilbar durch 2? Schau auf die letzte Ziffer: 6 ist gerade, also ist 246 durch 2 teilbar!",
            rechnung: "Letzte Ziffer 6 → gerade",
            ergebnisSoweit: "durch 2: ja",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Teilbar durch 5? Die letzte Ziffer muss 0 oder 5 sein. 246 endet auf 6 – das ist weder 0 noch 5, also NICHT durch 5 teilbar.",
            rechnung: "Letzte Ziffer 6 ≠ 0/5",
            ergebnisSoweit: "durch 5: nein",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Teilbar durch 3? Bilde die Quersumme: 2+4+6 = 12. Weil 12 durch 3 teilbar ist, ist auch 246 durch 3 teilbar — letzter Treffer!",
            rechnung: "Quersumme 2+4+6=12",
            ergebnisSoweit: "durch 3: ja",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 246 ist durch 2 und durch 3 teilbar, aber nicht durch 5. Mit den drei Teilbarkeitsregeln kannst du das ohne echtes Teilen sofort erkennen.",
            ergebnisSoweit: "durch 2 & 3: ja, durch 5: nein",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Welches Gesetz erlaubt es, die Reihenfolge beim Plusrechnen zu tauschen (3+5=5+3)?", typ: "mc", optionen: ["Kommutativgesetz", "Assoziativgesetz", "Distributivgesetz", "Punktgesetz"], loesung: "Kommutativgesetz", erklaerung: "Das Kommutativgesetz (von lateinisch 'commutare' = vertauschen) besagt, dass bei Addition und Multiplikation die Reihenfolge der Zahlen egal ist. Es gilt aber nicht für Subtraktion und Division." },
        { frage: "(2+3)+4 ergibt dasselbe wie 2+(3+4). Wie heißt dieses Gesetz?", typ: "mc", optionen: ["Assoziativgesetz", "Kommutativgesetz", "Distributivgesetz", "Rundungsgesetz"], loesung: "Assoziativgesetz", erklaerung: "Das Assoziativgesetz erlaubt es, bei mehreren Additionen oder Multiplikationen die Klammern anders zu setzen, ohne dass sich das Ergebnis ändert. Das ist praktisch, um sich Zwischenschritte einfacher zu machen." },
        { frage: "Darf man beim Minusrechnen die Reihenfolge einfach tauschen (5-3 = 3-5)?", typ: "mc", optionen: ["Nein", "Ja"], loesung: "Nein", erklaerung: "5−3=2, aber 3−5=−2 – beide Ergebnisse sind unterschiedlich. Das Kommutativgesetz gilt deshalb nur für Plus und Mal, nicht für Minus und Geteilt." },
        { frage: "Ist 84 durch 2 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Eine Zahl ist durch 2 teilbar, wenn ihre letzte Ziffer gerade ist (0,2,4,6,8). 84 endet auf 4, also ist 84 durch 2 teilbar – tatsächlich ist 84:2=42." },
        { frage: "Ist 47 durch 2 teilbar?", typ: "mc", optionen: ["Nein", "Ja"], loesung: "Nein", erklaerung: "47 endet auf 7, eine ungerade Ziffer. Zahlen, die auf eine ungerade Ziffer enden, sind nie ohne Rest durch 2 teilbar." },
        { frage: "Ist 130 durch 5 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Eine Zahl ist durch 5 teilbar, wenn sie auf 0 oder 5 endet. 130 endet auf 0, also ist sie durch 5 teilbar: 130:5=26." },
        { frage: "Ist 130 durch 10 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Eine Zahl ist durch 10 teilbar, wenn sie auf 0 endet. 130 endet auf 0, also ist sie durch 10 teilbar: 130:10=13." },
        { frage: "Ist 246 durch 3 teilbar?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Bilde die Quersumme (Summe aller Ziffern): 2+4+6=12. Weil 12 durch 3 teilbar ist (12:3=4), ist auch 246 durch 3 teilbar." },
        { frage: "Ist 100 durch 3 teilbar?", typ: "mc", optionen: ["Nein", "Ja"], loesung: "Nein", erklaerung: "Die Quersumme von 100 ist 1+0+0=1. Weil 1 nicht durch 3 teilbar ist, ist auch 100 nicht durch 3 teilbar." },
        { frage: "Wie prüft man, ob eine Zahl durch 3 teilbar ist?", typ: "mc", optionen: ["Die Quersumme muss durch 3 teilbar sein", "Die letzte Ziffer muss 3 sein", "Die Zahl muss gerade sein", "Das geht nicht"], loesung: "Die Quersumme muss durch 3 teilbar sein", erklaerung: "Du addierst alle Ziffern der Zahl zur Quersumme und prüfst, ob diese kleinere Zahl durch 3 teilbar ist. Ist die Quersumme durch 3 teilbar, dann ist es auch die ursprüngliche Zahl." },
        { frage: "Welche Ziffer muss eine Zahl am Ende haben, damit sie durch 10 teilbar ist?", typ: "zahl", loesung: "0", erklaerung: "Nur Zahlen, die auf die Ziffer 0 enden (wie 10, 130, 2.000), lassen sich ohne Rest durch 10 teilen. Jede andere Endziffer erzeugt beim Teilen durch 10 einen Rest." }
      ]
    },
    {
      id: "senkrecht-parallel-winkel",
      titel: "3.1 Senkrecht, Parallel & Winkel",
      icon: "📐",
      intro: "Kapitel 3: Wie Geraden zueinander stehen und was ein Winkel ist.",
      lektion: [
        "📐 Zwei Geraden, die sich in einem rechten Winkel (90°) schneiden, heißen senkrecht (⊥) zueinander.",
        "➖ Zwei Geraden, die sich nie schneiden und immer den gleichen Abstand haben, heißen parallel (∥) zueinander.",
        "📏 Ein Winkel entsteht, wenn sich zwei Linien treffen. Man misst ihn in Grad (°).",
        "🔲 Ein rechter Winkel hat genau 90°. Ein spitzer Winkel ist kleiner, ein stumpfer Winkel größer als 90°. Ein gestreckter Winkel ist eine gerade Linie: 180°."
      ],
      animation: {
        titel: "Besiege den Winkel-Dämon: der fehlende Winkel",
        zahlenDaemon: "60°+70°+?",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Winkel-Dämon versteckt den dritten Winkel eines Dreiecks! Du kennst schon zwei Winkel: 60° und 70°. Finde den fehlenden dritten Winkel, denn alle drei zusammen ergeben immer 180°.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Addiere die beiden bekannten Winkel: 60° + 70° = 130°.",
            rechnung: "60° + 70° = 130°",
            ergebnisSoweit: "130°",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Ein Dreieck hat immer zusammen 180°. Ziehe die bekannte Summe ab: 180° − 130° = 50°.",
            rechnung: "180° − 130° = 50°",
            ergebnisSoweit: "50°",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Der dritte Winkel ist also 50° — ein spitzer Winkel, weil er kleiner als 90° ist. Letzter Treffer!",
            rechnung: "Dritter Winkel = 50°",
            ergebnisSoweit: "50° (spitzer Winkel)",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Die drei Winkel des Dreiecks sind 60°, 70° und 50° – zusammen genau 180°. In jedem Dreieck ergeben die drei Innenwinkel immer 180°.",
            ergebnisSoweit: "60°+70°+50°=180°",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie nennt man zwei Geraden, die sich im rechten Winkel schneiden?", typ: "mc", optionen: ["senkrecht", "parallel", "identisch", "gebogen"], loesung: "senkrecht", erklaerung: "Wenn sich zwei Geraden in einem Winkel von genau 90° treffen, nennt man sie senkrecht zueinander. Das erkennst du oft an einem kleinen Quadrat-Symbol an der Schnittstelle." },
        { frage: "Wie nennt man zwei Geraden, die sich nie schneiden?", typ: "mc", optionen: ["parallel", "senkrecht", "schräg", "identisch"], loesung: "parallel", erklaerung: "Zwei Geraden, die immer den gleichen Abstand zueinander haben und sich deshalb nie treffen, heißen parallel. Ein Beispiel sind die beiden Schienen einer Eisenbahn." },
        { frage: "Welches Symbol steht für 'senkrecht'?", typ: "mc", optionen: ["⊥", "∥", "°", "="], loesung: "⊥", erklaerung: "Das Symbol ⊥ sieht aus wie ein T auf dem Kopf und steht in der Mathematik für 'senkrecht zu'." },
        { frage: "Welches Symbol steht für 'parallel'?", typ: "mc", optionen: ["∥", "⊥", "°", "≠"], loesung: "∥", erklaerung: "Das Symbol ∥ besteht aus zwei parallelen Strichen und steht deshalb für 'parallel zu'." },
        { frage: "Wie nennt man einen Winkel, der genau 90° hat?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "rechter Winkel", erklaerung: "Ein Winkel mit genau 90° heißt rechter Winkel – er entsteht zum Beispiel an jeder Ecke eines Quadrats oder Rechtecks." },
        { frage: "Wie nennt man einen Winkel, der kleiner als 90° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "spitzer Winkel", erklaerung: "Jeder Winkel, der kleiner ist als 90°, heißt spitzer Winkel – er wirkt 'spitz zulaufend', so wie die Ecke eines Dreiecks oder eines Pizzastücks." },
        { frage: "Wie nennt man einen Winkel, der größer als 90° und kleiner als 180° ist?", typ: "mc", optionen: ["rechter Winkel", "spitzer Winkel", "stumpfer Winkel", "gestreckter Winkel"], loesung: "stumpfer Winkel", erklaerung: "Ein Winkel zwischen 90° und 180° heißt stumpfer Winkel – er ist weiter geöffnet als ein rechter Winkel, aber noch keine gerade Linie." },
        { frage: "Wie viele Grad hat ein gestreckter Winkel?", typ: "zahl", loesung: "180", erklaerung: "Ein gestreckter Winkel sieht aus wie eine gerade Linie ohne Knick und misst genau 180° – das ist doppelt so viel wie ein rechter Winkel (90°)." },
        { frage: "Wie nennt man eine Linie, die zwei Punkte auf dem kürzesten Weg verbindet?", typ: "mc", optionen: ["Strecke", "Winkel", "Fläche", "Kreis"], loesung: "Strecke", erklaerung: "Eine Strecke ist die kürzeste, gerade Verbindung zwischen genau zwei Punkten. Im Unterschied zu einer 'Geraden' hat eine Strecke einen klaren Anfang und ein klares Ende." },
        { frage: "Wie viele rechte Winkel hat ein Quadrat?", typ: "zahl", loesung: "4", erklaerung: "Ein Quadrat hat an jeder seiner 4 Ecken einen rechten Winkel (90°) – das ist zusammen mit den 4 gleich langen Seiten eine seiner wichtigsten Eigenschaften." }
      ]
    },
    {
      id: "koordinatensystem",
      titel: "3.2 Koordinatensystem",
      icon: "🎯",
      intro: "Punkte mit zwei Zahlen genau angeben.",
      lektion: [
        "📍 Ein Koordinatensystem hat zwei Achsen: die waagerechte x-Achse und die senkrechte y-Achse.",
        "🎯 Ein Punkt wird mit zwei Zahlen angegeben: (x-Wert | y-Wert), z. B. (3|2) bedeutet 3 nach rechts, dann 2 nach oben.",
        "0️⃣ Der Punkt, an dem sich beide Achsen treffen, heißt Ursprung: (0|0)."
      ],
      beispiele: [
        {
          aufgabe: "Wie findest du den Punkt (4|3) im Koordinatensystem?",
          schritte: [
            "Starte im Ursprung (0|0).",
            "Gehe zuerst 4 Schritte nach rechts (x-Wert).",
            "Gehe von dort 3 Schritte nach oben (y-Wert)."
          ],
          ergebnis: "Der Punkt (4|3)"
        }
      ],
      animation: {
        titel: "Besiege den Koordinaten-Dämon: (4|3)",
        zahlenDaemon: "(4|3)",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Koordinaten-Dämon versteckt sich am Punkt (4|3)! Finde ihn, indem du vom Ursprung (0|0) aus zuerst nach rechts und dann nach oben gehst.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Starte im Ursprung (0|0) und gehe 4 Schritte nach rechts – das ist der x-Wert.",
            rechnung: "x-Wert: 4 Schritte rechts",
            ergebnisSoweit: "(4|0)",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Von dort aus gehst du 3 Schritte nach oben – das ist der y-Wert.",
            rechnung: "y-Wert: 3 Schritte hoch",
            ergebnisSoweit: "(4|3)",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Du hast den Punkt (4|3) erreicht und den Dämon getroffen — letzter Treffer!",
            rechnung: "Punkt erreicht",
            ergebnisSoweit: "(4|3)",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Der Punkt (4|3) liegt 4 Schritte rechts und 3 Schritte über dem Ursprung. Merke: Immer zuerst der x-Wert (rechts/links), dann der y-Wert (hoch/runter).",
            ergebnisSoweit: "(4|3)",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie heißt die waagerechte Achse im Koordinatensystem?", typ: "mc", optionen: ["x-Achse", "y-Achse", "z-Achse", "Mittelachse"], loesung: "x-Achse", erklaerung: "Die waagerechte (horizontale) Achse, die nach rechts und links zeigt, heißt x-Achse. Sie wird immer zuerst angegeben, wenn man einen Punkt beschreibt." },
        { frage: "Wie heißt die senkrechte Achse im Koordinatensystem?", typ: "mc", optionen: ["y-Achse", "x-Achse", "z-Achse", "Mittelachse"], loesung: "y-Achse", erklaerung: "Die senkrechte (vertikale) Achse, die nach oben und unten zeigt, heißt y-Achse. Sie wird bei einem Punkt immer als zweiter Wert angegeben." },
        { frage: "Wie heißt der Punkt (0|0)?", typ: "mc", optionen: ["Ursprung", "Nullpunkt-Ecke", "Startpunkt", "Mittelpunkt"], loesung: "Ursprung", erklaerung: "Der Punkt, an dem sich x-Achse und y-Achse kreuzen, heißt Ursprung. Von dort aus zählst du bei jedem anderen Punkt die Schritte nach rechts und oben." },
        { frage: "Beim Punkt (3|2): Wie viele Schritte gehst du zuerst nach rechts?", typ: "zahl", loesung: "3", erklaerung: "Der erste Wert einer Koordinate, hier die 3, ist immer der x-Wert und gibt die Schritte nach rechts an." },
        { frage: "Beim Punkt (3|2): Wie viele Schritte gehst du dann nach oben?", typ: "zahl", loesung: "2", erklaerung: "Der zweite Wert einer Koordinate, hier die 2, ist der y-Wert und gibt die Schritte nach oben an – erst nachdem du den x-Wert abgelaufen bist." },
        { frage: "Welche Zahl steht beim Punkt (5|7) zuerst (x-Wert)?", typ: "zahl", loesung: "5", erklaerung: "Bei der Schreibweise (x|y) steht der x-Wert immer vor dem senkrechten Strich. Bei (5|7) ist das also die 5." },
        { frage: "Was gibst du bei einem Punkt im Koordinatensystem immer zuerst an?", typ: "mc", optionen: ["den x-Wert", "den y-Wert", "die Farbe", "den Namen"], loesung: "den x-Wert", erklaerung: "Die Reihenfolge (x|y) ist eine feste Regel in der Mathematik: Zuerst kommt immer der x-Wert (rechts/links), danach der y-Wert (oben/unten)." },
        { frage: "Beim Punkt (0|5): Wie weit gehst du nach rechts?", typ: "zahl", loesung: "0", erklaerung: "Der x-Wert ist hier 0, das heißt du machst keinen einzigen Schritt nach rechts oder links – der Punkt liegt deshalb direkt auf der y-Achse." }
      ]
    },
    {
      id: "symmetrie",
      titel: "3.3 Symmetrie",
      icon: "🪞",
      intro: "Achsensymmetrie und Punktsymmetrie erkennen.",
      lektion: [
        "🪞 Eine Figur ist achsensymmetrisch, wenn man eine Linie (Spiegelachse) einzeichnen kann, sodass beide Hälften spiegelgleich sind.",
        "🔄 Eine Figur ist punktsymmetrisch, wenn man sie um einen Punkt (Symmetriezentrum) um 180° drehen kann und sie danach genau gleich aussieht.",
        "❤️ Ein Herz ist achsensymmetrisch. Manche Figuren sind punktsymmetrisch, manche beides, manche keins von beidem."
      ],
      animation: {
        titel: "Besiege den Spiegel-Dämon: alle Spiegelachsen",
        zahlenDaemon: "4",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Spiegel-Dämon versteckt sich in einem Quadrat! Ein Quadrat hat mehrere Spiegelachsen – finde sie alle, um den Dämon zu schwächen.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Die erste Spiegelachse verläuft waagerecht durch die Mitte.",
            rechnung: "1. Achse: waagerecht",
            ergebnisSoweit: "1",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Die zweite Spiegelachse verläuft senkrecht durch die Mitte.",
            rechnung: "2. Achse: senkrecht",
            ergebnisSoweit: "2",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Zwei weitere Spiegelachsen verlaufen diagonal von Ecke zu Ecke – jetzt sind es insgesamt 4! Letzter Treffer.",
            rechnung: "3. und 4. Achse: diagonal",
            ergebnisSoweit: "4",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Ein Quadrat hat genau 4 Spiegelachsen: waagerecht, senkrecht und zwei diagonale. An jeder dieser Linien sind beide Hälften spiegelgleich.",
            ergebnisSoweit: "4 Spiegelachsen",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie heißt die Linie, an der eine achsensymmetrische Figur gespiegelt wird?", typ: "mc", optionen: ["Spiegelachse", "Symmetriezentrum", "Diagonale", "Mittellinie"], loesung: "Spiegelachse", erklaerung: "Die Spiegelachse ist die gedachte Linie, an der beide Hälften einer Figur wie in einem Spiegel genau gleich aussehen. Klappt man die Figur an dieser Linie, decken sich beide Hälften exakt." },
        { frage: "Um wie viel Grad dreht man eine Figur bei Punktsymmetrie, damit sie wieder gleich aussieht?", typ: "zahl", loesung: "180", erklaerung: "Bei Punktsymmetrie sieht eine Figur nach einer halben Umdrehung um ihr Symmetriezentrum genauso aus wie vorher. Eine halbe Umdrehung entspricht 180°, also der Hälfte einer vollen 360°-Drehung." },
        { frage: "Ist ein Kreis achsensymmetrisch?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Ein Kreis kann an jeder beliebigen Linie durch seinen Mittelpunkt gespiegelt werden und sieht danach immer gleich aus. Deshalb hat er sogar unendlich viele Spiegelachsen – mehr als jede andere Figur." },
        { frage: "Ist ein Quadrat achsensymmetrisch?", typ: "mc", optionen: ["Ja", "Nein"], loesung: "Ja", erklaerung: "Ein Quadrat hat gleich vier Spiegelachsen: zwei durch die Seitenmitten (waagerecht/senkrecht) und zwei durch die gegenüberliegenden Ecken (diagonal)." },
        { frage: "Wie heißt der Punkt, um den bei Punktsymmetrie gedreht wird?", typ: "mc", optionen: ["Symmetriezentrum", "Spiegelachse", "Ursprung", "Mittelpunkt der Kante"], loesung: "Symmetriezentrum", erklaerung: "Das Symmetriezentrum ist der feste Punkt in der Mitte der Figur, um den herum gedreht wird. Jeder Punkt der Figur hat auf der gegenüberliegenden Seite des Zentrums einen passenden Partnerpunkt im gleichen Abstand." },
        { frage: "Welcher Großbuchstabe ist achsensymmetrisch (senkrechte Spiegelachse)?", typ: "mc", optionen: ["A", "F", "G", "P"], loesung: "A", erklaerung: "Der Buchstabe A hat eine senkrechte Spiegelachse genau in der Mitte – die linke und rechte Hälfte sind spiegelgleich. Bei F, G oder P gibt es dagegen keine solche Spiegelachse." },
        { frage: "Wie viele Spiegelachsen kann ein gleichseitiges Dreieck haben?", typ: "zahl", loesung: "3", erklaerung: "Ein gleichseitiges Dreieck (alle drei Seiten gleich lang) hat 3 Spiegelachsen – jede verläuft von einer Ecke zur Mitte der gegenüberliegenden Seite." }
      ]
    },
    {
      id: "koerper-netze",
      titel: "3.4 Körper & Netze",
      icon: "📦",
      intro: "Quader, Würfel, Körpernetze und Schrägbilder.",
      lektion: [
        "📦 Ein Körpernetz ist die 'aufgeklappte' Oberfläche eines Körpers – faltet man es zusammen, entsteht der 3D-Körper.",
        "🧊 Ein Quader hat 6 rechteckige Flächen, 12 Kanten und 8 Ecken.",
        "🎲 Ein Würfel ist ein besonderer Quader, bei dem alle 6 Flächen gleich große Quadrate sind.",
        "✏️ Ein Schrägbild zeichnet einen 3D-Körper auf einem flachen Blatt, sodass er räumlich aussieht."
      ],
      animation: {
        titel: "Besiege den Quader-Dämon: Flächen, Kanten, Ecken",
        zahlenDaemon: "Quader",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Quader-Dämon fordert dich heraus, seine Bauteile zu zählen: Flächen, Kanten und Ecken!",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Zähle die Flächen. Ein Quader hat 6 rechteckige Flächen.",
            rechnung: "Flächen zählen",
            ergebnisSoweit: "6 Flächen",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Zähle die Kanten. Ein Quader hat 12 Kanten.",
            rechnung: "Kanten zählen",
            ergebnisSoweit: "12 Kanten",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Zähle die Ecken. Ein Quader hat 8 Ecken — letzter Treffer!",
            rechnung: "Ecken zählen",
            ergebnisSoweit: "8 Ecken",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Ein Quader hat 6 Flächen, 12 Kanten und 8 Ecken. Diese drei Zahlen gelten für jeden Quader, egal wie groß er ist.",
            ergebnisSoweit: "6 Flächen, 12 Kanten, 8 Ecken",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie viele Flächen hat ein Quader?", typ: "zahl", loesung: "6", erklaerung: "Ein Quader wird von 6 rechteckigen Flächen begrenzt: oben, unten, vorne, hinten, links und rechts – jeweils zwei gegenüberliegende Flächen sind gleich groß." },
        { frage: "Wie viele Kanten hat ein Quader?", typ: "zahl", loesung: "12", erklaerung: "Ein Quader hat 12 Kanten: an jeder der 6 Flächen liegen 4 Kanten, aber jede Kante wird von zwei Flächen gemeinsam genutzt, deshalb sind es insgesamt 12 statt 24." },
        { frage: "Wie viele Ecken hat ein Quader?", typ: "zahl", loesung: "8", erklaerung: "Ein Quader hat 8 Ecken – du kannst sie dir wie die 8 Ecken einer Schuhkarton-Form vorstellen: 4 oben und 4 unten." },
        { frage: "Was ist ein Würfel?", typ: "mc", optionen: ["Ein Quader, bei dem alle Flächen gleich große Quadrate sind", "Eine runde Kugel", "Ein Körper ohne Ecken", "Eine flache Figur"], loesung: "Ein Quader, bei dem alle Flächen gleich große Quadrate sind", erklaerung: "Ein Würfel ist ein Sonderfall des Quaders: Während ein normaler Quader unterschiedlich lange Kanten haben kann, sind bei einem Würfel alle Kanten gleich lang und alle 6 Flächen gleich große Quadrate." },
        { frage: "Wie nennt man die aufgeklappte, flache Form eines Körpers?", typ: "mc", optionen: ["Körpernetz", "Schrägbild", "Koordinatensystem", "Diagramm"], loesung: "Körpernetz", erklaerung: "Ein Körpernetz zeigt alle Flächen eines Körpers ausgebreitet und zusammenhängend auf einer Ebene. Faltet man das Netz an den Kanten hoch, entsteht wieder der ursprüngliche 3D-Körper." },
        { frage: "Wie nennt man eine räumliche Zeichnung eines Körpers auf einem flachen Blatt?", typ: "mc", optionen: ["Schrägbild", "Netz", "Grundriss", "Diagramm"], loesung: "Schrägbild", erklaerung: "Ein Schrägbild zeichnet einen 3D-Körper so, dass er auch auf einem flachen Blatt räumlich wirkt – meist, indem die Tiefe schräg nach hinten gezeichnet wird." },
        { frage: "Welche Form haben die Flächen eines Würfels?", typ: "mc", optionen: ["Quadrate", "Rechtecke", "Dreiecke", "Kreise"], loesung: "Quadrate", erklaerung: "Alle 6 Flächen eines Würfels sind gleich große Quadrate – das unterscheidet ihn von einem normalen Quader, dessen Flächen meist unterschiedlich große Rechtecke sind." },
        { frage: "Wie viele Flächen hat ein Würfel?", typ: "zahl", loesung: "6", erklaerung: "Ein Würfel ist ein besonderer Quader und hat deshalb wie jeder Quader 6 Flächen – bei ihm sind alle sechs zusätzlich gleich große Quadrate." }
      ]
    },
    {
      id: "flaecheninhalt-umfang",
      titel: "4.1 Flächeninhalt und Umfang",
      icon: "🟦",
      intro: "Kapitel 4: Flächen vergleichen und die Fläche und den Umfang von Rechtecken berechnen.",
      lektion: [
        "📐 Flächen kann man vergleichen, indem man schaut, wie viele gleiche Kästchen (z. B. 1-cm²-Quadrate) hineinpassen.",
        "🔲 Der Umfang ist die Länge, wenn du einmal außen um eine Figur herumgehst.",
        "🟦 Die Fläche ist der Platz innerhalb einer Figur. Bei einem Rechteck gilt: Fläche = Länge × Breite.",
        "📏 Flächeneinheiten: 1 m² = 10.000 cm² (weil 1 m = 100 cm, und 100 × 100 = 10.000)."
      ],
      beispiele: [
        {
          aufgabe: "Ein Rechteck ist 5 cm lang und 3 cm breit. Wie groß ist der Umfang?",
          schritte: [
            "Die Formel für den Umfang ist: 2 × (Länge + Breite).",
            "Zuerst rechnest du Länge + Breite: 5 + 3 = 8.",
            "Dann multiplizierst du mit 2: 2 × 8 = 16."
          ],
          ergebnis: "16 cm"
        },
        {
          aufgabe: "Ein Rechteck ist 4 cm lang und 3 cm breit. Wie groß ist die Fläche?",
          schritte: [
            "Die Formel für die Fläche ist: Länge × Breite.",
            "Du setzt die Zahlen ein: 4 × 3.",
            "4 × 3 = 12."
          ],
          ergebnis: "12 cm²"
        },
        {
          aufgabe: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?",
          schritte: [
            "Ein Quadrat hat 4 gleich lange Seiten.",
            "Die Formel für den Umfang ist deshalb: 4 × Seitenlänge.",
            "4 × 5 = 20."
          ],
          ergebnis: "20 cm"
        }
      ],
      animation: {
        titel: "Besiege den Flächen-Dämon: 6 × 4",
        zahlenDaemon: "6×4",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Flächen-Dämon hat ein Rechteck mit 6 cm Länge und 4 cm Breite besetzt! Um ihn zu besiegen, musst du die Fläche berechnen, indem du Zeile für Zeile 1-cm²-Kästchen zählst.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Die erste Zeile hat so viele Kästchen wie die Länge lang ist: 6 Kästchen. Nach der ersten Zeile hast du schon 6 cm² erobert!",
            rechnung: "1 Zeile × 6 Kästchen = 6",
            ergebnisSoweit: "6",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Du zählst zwei weitere Zeilen dazu (Zeile 2 und 3), macht insgesamt 3 Zeilen mit je 6 Kästchen: 3 × 6 = 18 cm².",
            rechnung: "3 Zeilen × 6 Kästchen = 18",
            ergebnisSoweit: "18",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Jetzt fehlt nur noch die vierte Zeile, denn die Breite ist ja 4 cm. Alle 4 Zeilen mit je 6 Kästchen ergeben 4 × 6 = 24 cm² — letzter Treffer!",
            rechnung: "4 Zeilen × 6 Kästchen = 24",
            ergebnisSoweit: "24",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Das Rechteck hat 24 Kästchen, also eine Fläche von 24 cm² – genau Länge × Breite = 6 × 4 = 24. Du hast den Flächen-Dämon durch Zeile-für-Zeile-Zählen bezwungen.",
            ergebnisSoweit: "24 cm²",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie viele Ecken hat ein Rechteck?", typ: "zahl", loesung: "4", erklaerung: "Ein Rechteck hat 4 Ecken und an jeder Ecke einen rechten Winkel (90°) – das gehört zu seiner Definition." },
        { frage: "Ein Rechteck ist 5 cm lang und 3 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "16", erklaerung: "Die Umfangsformel lautet 2 × (Länge + Breite), weil jede der beiden Längen- und Breitenseiten doppelt vorkommt: 2 × (5+3) = 2 × 8 = 16 cm." },
        { frage: "Ein Rechteck ist 4 cm lang und 3 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "12", erklaerung: "Die Fläche eines Rechtecks berechnest du mit Länge × Breite, weil sich das Rechteck gedanklich in 4 mal 3 gleich große 1-cm²-Kästchen aufteilen lässt: 4 × 3 = 12 cm²." },
        { frage: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Ein Quadrat hat 4 gleich lange Seiten, deshalb lautet die Umfangsformel 4 × Seitenlänge: 4 × 5 = 20 cm." },
        { frage: "Ein Quadrat hat die Seitenlänge 6 cm. Wie groß ist die Fläche?", typ: "zahl", loesung: "36", erklaerung: "Bei einem Quadrat ist Länge = Breite = Seitenlänge, deshalb rechnest du Seite × Seite: 6 × 6 = 36 cm²." },
        { frage: "Ein Rechteck ist 8 cm lang und 2 cm breit. Wie groß ist der Umfang?", typ: "zahl", loesung: "20", erklaerung: "Umfang = 2 × (Länge + Breite) = 2 × (8+2) = 2 × 10 = 20 cm." },
        { frage: "Ein Rechteck ist 7 cm lang und 4 cm breit. Wie groß ist die Fläche?", typ: "zahl", loesung: "28", erklaerung: "Fläche = Länge × Breite = 7 × 4 = 28 cm²." },
        { frage: "Wie viele cm² sind 1 m²?", typ: "zahl", loesung: "10000", erklaerung: "Weil 1 m = 100 cm ist, entspricht 1 m² einem Quadrat mit 100 cm Seitenlänge: 100 × 100 = 10.000 cm²." },
        { frage: "Wie viele mm² sind 1 cm²?", typ: "zahl", loesung: "100", erklaerung: "Weil 1 cm = 10 mm ist, entspricht 1 cm² einem Quadrat mit 10 mm Seitenlänge: 10 × 10 = 100 mm²." },
        { frage: "2 m² sind wie viele cm²?", typ: "zahl", loesung: "20000", erklaerung: "Weil 1 m² = 10.000 cm² sind, rechnest du für 2 m² doppelt so viel: 2 × 10.000 = 20.000 cm²." },
        { frage: "Welche Fläche ist größer: 1 m² oder 5000 cm²?", typ: "mc", optionen: ["1 m²", "5000 cm²", "gleich groß", "kann man nicht sagen"], loesung: "1 m²", erklaerung: "Rechne beide Flächen in dieselbe Einheit um: 1 m² sind 10.000 cm², und das ist mehr als 5.000 cm². Ein Vergleich funktioniert nur, wenn beide Flächen in derselben Einheit vorliegen." }
      ]
    },
    {
      id: "volumen-oberflaeche",
      titel: "5.1 Volumen und Oberflächeninhalt",
      icon: "🧊",
      intro: "Kapitel 5: Wie viel in einen Quader passt und wie groß seine Oberfläche ist.",
      lektion: [
        "📦 Das Volumen eines Quaders berechnet man mit: Volumen = Länge × Breite × Höhe.",
        "🧊 Volumeneinheiten: 1 dm³ = 1 Liter. 1 m³ = 1000 dm³ = 1000 Liter.",
        "🎁 Der Oberflächeninhalt eines Quaders ist die Summe der Flächeninhalte aller 6 Rechteckflächen."
      ],
      beispiele: [
        {
          aufgabe: "Ein Quader ist 4 cm lang, 3 cm breit und 2 cm hoch. Wie groß ist das Volumen?",
          schritte: [
            "Formel: Volumen = Länge × Breite × Höhe.",
            "Setze die Zahlen ein: 4 × 3 × 2.",
            "4 × 3 = 12, dann 12 × 2 = 24."
          ],
          ergebnis: "24 cm³"
        }
      ],
      animation: {
        titel: "Besiege den Volumen-Dämon: 4 × 3 × 2",
        zahlenDaemon: "4×3×2",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Volumen-Dämon versteckt sich in einem Quader mit den Maßen 4 cm × 3 cm × 2 cm! Berechne sein Volumen, um ihn zu besiegen.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Multipliziere zuerst Länge und Breite: 4 × 3 = 12.",
            rechnung: "4 × 3 = 12",
            ergebnisSoweit: "12",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Multipliziere jetzt mit der Höhe: 12 × 2 = 24.",
            rechnung: "12 × 2 = 24",
            ergebnisSoweit: "24",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Das Volumen beträgt 24 cm³ — letzter Treffer!",
            rechnung: "Volumen = 24 cm³",
            ergebnisSoweit: "24 cm³",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! Volumen = Länge × Breite × Höhe = 4 × 3 × 2 = 24 cm³. So viele 1-cm³-Würfel passen in diesen Quader.",
            ergebnisSoweit: "24 cm³",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Wie berechnet man das Volumen eines Quaders?", typ: "mc", optionen: ["Länge × Breite × Höhe", "Länge + Breite + Höhe", "Länge × Breite", "2 × (Länge+Breite)"], loesung: "Länge × Breite × Höhe", erklaerung: "Das Volumen gibt an, wie viele 1-cm³-Würfel in den Quader passen. Weil man in alle drei Richtungen (Länge, Breite und Höhe) Würfel stapeln kann, multipliziert man alle drei Maße miteinander." },
        { frage: "Ein Quader ist 4 cm lang, 3 cm breit, 2 cm hoch. Wie groß ist das Volumen?", typ: "zahl", loesung: "24", erklaerung: "Volumen = Länge × Breite × Höhe: zuerst 4 × 3 = 12, dann 12 × 2 = 24 cm³." },
        { frage: "Ein Würfel hat die Kantenlänge 3 cm. Wie groß ist das Volumen?", typ: "zahl", loesung: "27", erklaerung: "Bei einem Würfel sind Länge, Breite und Höhe alle gleich der Kantenlänge, deshalb rechnest du 3 × 3 × 3 = 27 cm³." },
        { frage: "Wie viele Liter sind 1 m³?", typ: "zahl", loesung: "1000", erklaerung: "1 m³ entspricht einem Würfel mit 1 m Kantenlänge, und der fasst genau 1.000 Liter – das ist eine feste Umrechnungsregel, die man sich merken muss." },
        { frage: "Wie viele dm³ sind 1 m³?", typ: "zahl", loesung: "1000", erklaerung: "Weil 1 m = 10 dm ist, besteht 1 m³ aus 10 × 10 × 10 = 1.000 kleinen dm³-Würfeln." },
        { frage: "Wie viele Rechteckflächen eines Quaders addiert man für den Oberflächeninhalt?", typ: "zahl", loesung: "6", erklaerung: "Ein Quader hat 6 Außenflächen (oben, unten, vorne, hinten, links, rechts). Für den Oberflächeninhalt berechnest du den Flächeninhalt jeder einzelnen Fläche und addierst alle 6 Werte." },
        { frage: "Ein Quader ist 5 cm lang, 2 cm breit, 3 cm hoch. Wie groß ist das Volumen?", typ: "zahl", loesung: "30", erklaerung: "Volumen = Länge × Breite × Höhe: zuerst 5 × 2 = 10, dann 10 × 3 = 30 cm³." },
        { frage: "1 dm³ entspricht wie vielen Litern?", typ: "zahl", loesung: "1", erklaerung: "1 dm³ (ein Würfel mit 10 cm Kantenlänge) fasst genau 1 Liter – das ist die Grundlage, aus der sich auch 1 m³ = 1.000 Liter ergibt." }
      ]
    },
    {
      id: "brueche",
      titel: "6.1 Brüche verstehen",
      icon: "🍕",
      intro: "Kapitel 6: Was ein Bruch ist und wie man ihn erweitert, kürzt und vergleicht.",
      lektion: [
        "🍕 Ein Bruch zeigt, wie viele Teile von einem Ganzen gemeint sind, zum Beispiel 1/4 = ein Viertel.",
        "⬆️ Die obere Zahl heißt Zähler – sie zeigt, wie viele Teile gemeint sind.",
        "⬇️ Die untere Zahl heißt Nenner – sie zeigt, in wie viele Teile das Ganze geteilt wurde.",
        "📊 Je größer der Nenner, desto kleiner ist ein einzelnes Teil (1/8 ist kleiner als 1/2).",
        "🔁 Erweitern heißt: Zähler und Nenner mit der gleichen Zahl multiplizieren (1/2 = 2/4). Kürzen heißt: beide durch die gleiche Zahl teilen (2/4 = 1/2)."
      ],
      beispiele: [
        {
          aufgabe: "Ein Kuchen hat 8 Stücke. Du isst 3 Stücke. Welcher Bruch beschreibt das?",
          schritte: [
            "Der Nenner (unten) ist die Gesamtzahl aller Stücke: 8.",
            "Der Zähler (oben) ist die Anzahl, die du gegessen hast: 3.",
            "Du schreibst den Zähler oben und den Nenner unten."
          ],
          ergebnis: "3/8"
        },
        {
          aufgabe: "Was ist 1/2 als Bruch mit Nenner 4?",
          schritte: [
            "Du willst aus dem Nenner 2 den Nenner 4 machen: dafür rechnest du 2 × 2 = 4.",
            "Was du unten mit der Zahl machst, musst du oben genauso machen: 1 × 2 = 2.",
            "Der neue Bruch hat oben die 2 und unten die 4."
          ],
          ergebnis: "2/4"
        },
        {
          aufgabe: "Was ist größer: 1/2 oder 1/4?",
          schritte: [
            "Bei gleichem Zähler (hier: 1) schaust du nur auf den Nenner.",
            "Je größer der Nenner, desto kleiner ist ein einzelnes Stück.",
            "4 ist größer als 2, also ist 1/4 das kleinere Stück."
          ],
          ergebnis: "1/2 ist größer"
        }
      ],
      animation: {
        titel: "Besiege den Bruch-Dämon: 1/2 erweitern",
        zahlenDaemon: "1/2",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Bruch-Dämon versteckt sich hinter der Zahl 1/2! Er behauptet, 2/4 und 4/8 wären ganz andere Werte als 1/2. Beweise ihm mit Erweitern und Kürzen, dass alle drei genau gleich groß sind!",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Erweitere 1/2 mit 2. Du multiplizierst Zähler und Nenner beide mit 2: 1×2=2 und 2×2=4. Der neue Bruch 2/4 ist genauso groß wie 1/2 – nur in mehr, kleinere Stücke geschnitten!",
            rechnung: "1/2 × (2/2) = 2/4",
            ergebnisSoweit: "2/4",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Erweitere 2/4 noch einmal mit 2. Zähler und Nenner werden wieder verdoppelt: 2×2=4 und 4×2=8. So entsteht 4/8 – immer noch derselbe Wert wie 1/2!",
            rechnung: "2/4 × (2/2) = 4/8",
            ergebnisSoweit: "4/8",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Jetzt die Probe! Kürze 4/8 wieder zurück: Teile Zähler und Nenner beide durch 4: 4:4=1 und 8:4=2. Du landest wieder bei 1/2 — der Dämon kann sich nicht mehr verstecken!",
            rechnung: "4/8 : (4/4) = 1/2",
            ergebnisSoweit: "1/2",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 1/2 = 2/4 = 4/8 – alle drei Brüche sind gleich groß, nur unterschiedlich oft erweitert. Der Bruch-Dämon ist besiegt, weil du erkannt hast: Erweitern und Kürzen verändern nie den Wert eines Bruchs.",
            ergebnisSoweit: "1/2 = 2/4 = 4/8",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Ein Kuchen wird in 4 gleiche Teile geteilt. Wie heißt ein Teil als Bruch?", typ: "mc", optionen: ["1/4", "4/1", "1/2", "2/4"], loesung: "1/4", erklaerung: "Der Nenner (untere Zahl) zeigt, in wie viele Teile geteilt wurde, hier 4. Ein einzelnes Stück ist der Zähler 1 von diesen 4 Teilen, also 1/4." },
        { frage: "Wie nennt man die untere Zahl eines Bruchs?", typ: "mc", optionen: ["Zähler", "Nenner", "Summe", "Faktor"], loesung: "Nenner", erklaerung: "Die untere Zahl eines Bruchs heißt Nenner – sie 'nennt', in wie viele gleich große Teile das Ganze zerlegt wurde." },
        { frage: "Wie nennt man die obere Zahl eines Bruchs?", typ: "mc", optionen: ["Zähler", "Nenner", "Summe", "Faktor"], loesung: "Zähler", erklaerung: "Die obere Zahl eines Bruchs heißt Zähler – sie 'zählt', wie viele dieser Teile gemeint sind." },
        { frage: "Was ist größer: 1/2 oder 1/4?", typ: "mc", optionen: ["1/2", "1/4", "gleich groß", "kann man nicht sagen"], loesung: "1/2", erklaerung: "Bei gleichem Zähler gilt: Je größer der Nenner, desto kleiner ist ein einzelnes Teil, weil das Ganze in mehr Stücke zerlegt wurde. Weil 4 größer als 2 ist, ist 1/4 das kleinere Stück, also ist 1/2 größer." },
        { frage: "Ein Kuchen hat 8 Stücke. Du isst 3 Stücke. Welcher Bruch beschreibt das?", typ: "mc", optionen: ["3/8", "8/3", "3/5", "5/8"], loesung: "3/8", erklaerung: "Der Nenner ist die Gesamtzahl aller Stücke (8), der Zähler die Anzahl, die du gegessen hast (3). Zusammen ergibt das den Bruch 3/8." },
        { frage: "Was ist 1/2 als Bruch mit Nenner 4 (erweitert)?", typ: "mc", optionen: ["2/4", "1/4", "4/2", "3/4"], loesung: "2/4", erklaerung: "Beim Erweitern multiplizierst du Zähler und Nenner mit derselben Zahl. Um aus dem Nenner 2 den Nenner 4 zu machen, rechnest du ×2: 1×2=2 und 2×2=4, also wird aus 1/2 der gleich große Bruch 2/4." },
        { frage: "Was ist größer: 3/4 oder 1/2?", typ: "mc", optionen: ["3/4", "1/2", "gleich groß", "kann man nicht sagen"], loesung: "3/4", erklaerung: "Erweiterst du 1/2 auf den Nenner 4, erhältst du 2/4. Vergleichst du jetzt bei gleichem Nenner Zähler mit Zähler (3/4 gegen 2/4): 3 ist mehr als 2, also ist 3/4 größer als 1/2." },
        { frage: "Was ist 2/4 gekürzt?", typ: "mc", optionen: ["1/2", "1/4", "2/2", "4/2"], loesung: "1/2", erklaerung: "Beim Kürzen teilst du Zähler und Nenner durch dieselbe Zahl. Teilst du beide Zahlen von 2/4 durch 2, erhältst du 1/2 – denselben Wert, nur mit kleineren Zahlen geschrieben." },
        { frage: "Was ist 3/6 gekürzt?", typ: "mc", optionen: ["1/2", "1/3", "3/3", "6/3"], loesung: "1/2", erklaerung: "Zähler und Nenner von 3/6 haben beide den gemeinsamen Teiler 3. Teilst du beide durch 3, erhältst du 1/2." },
        { frage: "Was ist größer: 1/3 oder 1/5?", typ: "mc", optionen: ["1/3", "1/5", "gleich groß", "kann man nicht sagen"], loesung: "1/3", erklaerung: "Bei gleichem Zähler (1) ist der Bruch mit dem kleineren Nenner größer, weil das Ganze in weniger, dafür größere Teile geteilt wird. Weil 3 kleiner ist als 5, ist 1/3 größer als 1/5." }
      ]
    },
    {
      id: "brueche-quotient",
      titel: "6.2 Brüche als Quotient & Größenanteile",
      icon: "➗",
      intro: "Brüche als Geteilt-Aufgabe verstehen und Anteile von Größen berechnen.",
      lektion: [
        "➗ Ein Bruch ist auch eine Divisionsaufgabe: 3/4 bedeutet dasselbe wie 3 : 4.",
        "🧮 Einen Größenanteil berechnest du so: Teile das Ganze durch den Nenner, dann multipliziere mit dem Zähler. Beispiel: 3/4 von 20 = 20 : 4 × 3 = 15."
      ],
      beispiele: [
        {
          aufgabe: "Was ist 3/4 von 20?",
          schritte: [
            "Teile 20 durch den Nenner 4: 20 : 4 = 5.",
            "Multipliziere mit dem Zähler 3: 5 × 3 = 15."
          ],
          ergebnis: "15"
        }
      ],
      animation: {
        titel: "Besiege den Anteils-Dämon: 3/4 von 20",
        zahlenDaemon: "3/4 von 20",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Anteils-Dämon versteckt sich in der Aufgabe: Wie viel sind 3/4 von 20? Finde den Anteil heraus, um ihn zu besiegen.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: Teile zuerst 20 durch den Nenner 4: 20 : 4 = 5. Das ist ein Viertel.",
            rechnung: "20 : 4 = 5",
            ergebnisSoweit: "5 (ein Viertel)",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Multipliziere mit dem Zähler 3, um drei Viertel zu bekommen: 5 × 3 = 15.",
            rechnung: "5 × 3 = 15",
            ergebnisSoweit: "15",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: 3/4 von 20 sind 15 — letzter Treffer!",
            rechnung: "3/4 von 20 = 15",
            ergebnisSoweit: "15",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 3/4 von 20 sind 15. Du hast zuerst durch den Nenner geteilt und dann mit dem Zähler multipliziert.",
            ergebnisSoweit: "15",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "3/4 ist dasselbe wie welche Divisionsaufgabe?", typ: "mc", optionen: ["3 : 4", "4 : 3", "3 × 4", "4 - 3"], loesung: "3 : 4", erklaerung: "Jeder Bruch a/b lässt sich auch als Divisionsaufgabe a : b lesen. Deshalb bedeutet 3/4 genau dasselbe wie 3 geteilt durch 4." },
        { frage: "Was ist 1/2 von 20?", typ: "zahl", loesung: "10", erklaerung: "Um einen Anteil von einer Zahl zu berechnen, teilst du zuerst durch den Nenner: 20 : 2 = 10. Weil der Zähler hier 1 ist, brauchst du danach nicht mehr zu multiplizieren." },
        { frage: "Was ist 3/4 von 20?", typ: "zahl", loesung: "15", erklaerung: "Zuerst teilst du 20 durch den Nenner 4: 20 : 4 = 5 (das ist ein Viertel). Dann multiplizierst du mit dem Zähler 3, um drei Viertel zu bekommen: 5 × 3 = 15." },
        { frage: "Was ist 2/5 von 25?", typ: "zahl", loesung: "10", erklaerung: "Zuerst teilst du 25 durch den Nenner 5: 25 : 5 = 5. Dann multiplizierst du mit dem Zähler 2: 5 × 2 = 10." },
        { frage: "Was ist 1/3 von 30?", typ: "zahl", loesung: "10", erklaerung: "Weil der Zähler 1 ist, reicht das Teilen allein: 30 : 3 = 10." },
        { frage: "Was ist 3/10 von 100?", typ: "zahl", loesung: "30", erklaerung: "Zuerst teilst du 100 durch den Nenner 10: 100 : 10 = 10. Dann multiplizierst du mit dem Zähler 3: 10 × 3 = 30." },
        { frage: "Was ist 1/4 von 40?", typ: "zahl", loesung: "10", erklaerung: "Weil der Zähler 1 ist, reicht das Teilen allein: 40 : 4 = 10." },
        { frage: "Was ist 2/3 von 30?", typ: "zahl", loesung: "20", erklaerung: "Zuerst teilst du 30 durch den Nenner 3: 30 : 3 = 10. Dann multiplizierst du mit dem Zähler 2: 10 × 2 = 20." }
      ]
    },
    {
      id: "dezimalzahlen",
      titel: "6.3 Dezimalzahlen",
      icon: "🔢",
      intro: "Brüche als Kommazahlen schreiben.",
      lektion: [
        "🔢 Eine Dezimalzahl hat einen Komma-Teil: Bei 3,45 ist 3 der ganze Teil, 45 der Nachkomma-Teil.",
        "📍 Nach dem Komma stehen die Stellenwerte Zehntel, Hundertstel, Tausendstel.",
        "🍕 0,5 ist dasselbe wie 1/2. 0,25 ist dasselbe wie 1/4.",
        "🔁 Eine Dezimalzahl heißt abbrechend, wenn sie irgendwann endet (0,5). Sie heißt periodisch, wenn sich Ziffern nach dem Komma unendlich wiederholen (1/3 = 0,333…)."
      ],
      beispiele: [
        {
          aufgabe: "Schreibe 3/10 als Dezimalzahl.",
          schritte: [
            "3/10 bedeutet 3 geteilt durch 10.",
            "3 : 10 = 0,3."
          ],
          ergebnis: "0,3"
        }
      ],
      animation: {
        titel: "Besiege den Dezimal-Dämon: 3/4",
        zahlenDaemon: "3/4",
        szenen: [
          {
            aktion: "eingang",
            text: "Ein Dezimal-Dämon versteckt sich hinter dem Bruch 3/4! Verwandle ihn in eine Dezimalzahl, indem du 3 schriftlich durch 4 teilst.",
            hp: 100
          },
          {
            aktion: "angriff",
            text: "Angriff 1: 3 : 4 geht nicht ohne Rest, also rechnest du mit Komma weiter: 30 (Zehntel) : 4 = 7, Rest 2 (denn 7×4=28).",
            rechnung: "30 : 4 = 7, Rest 2",
            ergebnisSoweit: "0,7",
            hp: 66
          },
          {
            aktion: "angriff",
            text: "Angriff 2: Der Rest 2 wird zu 20 Hundertstel: 20 : 4 = 5, Rest 0.",
            rechnung: "20 : 4 = 5, Rest 0",
            ergebnisSoweit: "0,75",
            hp: 33
          },
          {
            aktion: "angriff",
            text: "Angriff 3: Kein Rest mehr übrig – die Dezimalzahl ist fertig: 0,75 — letzter Treffer!",
            rechnung: "3 : 4 = 0,75",
            ergebnisSoweit: "0,75",
            hp: 0
          },
          {
            aktion: "sieg",
            text: "🏆 Geschafft! 3/4 als Dezimalzahl ist 0,75. Du hast die schriftliche Division genutzt: Wenn eine Ziffer nicht aufgeht, hängst du gedanklich eine Null an und rechnest mit Nachkommastellen weiter.",
            ergebnisSoweit: "0,75",
            hp: 0
          }
        ]
      },
      aufgaben: [
        { frage: "Was ist 1/2 als Dezimalzahl?", typ: "mc", optionen: ["0,5", "0,2", "0,25", "1,2"], loesung: "0,5", erklaerung: "Ein Bruch lässt sich als Division rechnen: 1 : 2 = 0,5. Weil 1 nicht ohne Rest durch 2 teilbar ist, rechnest du mit Komma weiter: aus 10 Zehnteln werden 5 Zehntel, also 0,5." },
        { frage: "Was ist 1/4 als Dezimalzahl?", typ: "mc", optionen: ["0,25", "0,4", "0,5", "0,14"], loesung: "0,25", erklaerung: "1 : 4 ergibt schrittweise: 10 Zehntel geteilt durch 4 sind 2 Rest 2, dann 20 Hundertstel geteilt durch 4 sind 5. Zusammen ergibt das 0,25." },
        { frage: "Was ist 3/10 als Dezimalzahl?", typ: "mc", optionen: ["0,3", "0,03", "3,0", "0,13"], loesung: "0,3", erklaerung: "Bei einem Nenner von 10 kannst du den Zähler direkt als Zehntel hinter das Komma schreiben: 3/10 = 0,3." },
        { frage: "Welcher Teil einer Dezimalzahl steht direkt nach dem Komma?", typ: "mc", optionen: ["Zehntel", "Hundertstel", "Tausendstel", "Einer"], loesung: "Zehntel", erklaerung: "Die Stellenwerte nach dem Komma heißen der Reihe nach Zehntel, Hundertstel, Tausendstel – die erste Stelle direkt nach dem Komma sind also die Zehntel." },
        { frage: "Ist 0,5 eine abbrechende oder periodische Dezimalzahl?", typ: "mc", optionen: ["abbrechend", "periodisch", "weder noch", "beides"], loesung: "abbrechend", erklaerung: "0,5 hat nach dem Komma nur eine einzige Ziffer und endet dann – solche Dezimalzahlen nennt man abbrechend, weil die Nachkommastellen 'abbrechen'." },
        { frage: "1/3 als Dezimalzahl ist 0,333… Wie nennt man so eine Dezimalzahl?", typ: "mc", optionen: ["periodisch", "abbrechend", "gerundet", "negativ"], loesung: "periodisch", erklaerung: "Weil sich die Ziffer 3 nach dem Komma unendlich oft wiederholt, nennt man diese Dezimalzahl periodisch. Man schreibt das oft verkürzt mit einem Strich über der sich wiederholenden Ziffer." },
        { frage: "Was ist größer: 0,4 oder 0,25?", typ: "mc", optionen: ["0,4", "0,25", "gleich groß", "kann man nicht sagen"], loesung: "0,4", erklaerung: "Um Dezimalzahlen zu vergleichen, kannst du sie auf gleich viele Nachkommastellen bringen: 0,4 = 0,40. Vergleichst du jetzt 40 Hundertstel mit 25 Hundertstel, ist 0,40 größer." },
        { frage: "Was ist 0,5 + 0,25?", typ: "mc", optionen: ["0,75", "0,7", "0,8", "1,0"], loesung: "0,75", erklaerung: "Rechne wie bei der schriftlichen Addition, aber Komma unter Komma: 0,50 + 0,25 = 0,75 (50 Hundertstel plus 25 Hundertstel sind 75 Hundertstel)." }
      ]
    }
  ]
};

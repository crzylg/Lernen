// Biologie – Klasse 5 (Gymnasium Niedersachsen)
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.biologie = {
  id: "biologie",
  name: "Biologie",
  icon: "🌱",
  farbe: "#22C55E",
  themen: [
    {
      id: "kennzeichen-lebens",
      titel: "Kennzeichen des Lebens",
      icon: "🧬",
      intro: "Woran erkennt man, ob etwas lebendig ist?",
      lektion: [
        "🍽️ Lebewesen brauchen Nahrung, um Energie zu bekommen.",
        "👶 Lebewesen können sich fortpflanzen (Nachkommen bekommen).",
        "🌬️ Lebewesen atmen (nehmen Sauerstoff auf, geben Kohlenstoffdioxid ab).",
        "🏃 Lebewesen wachsen, bewegen sich und reagieren auf ihre Umgebung.",
        "🪨 Ein Stein lebt nicht: Er wächst nicht, atmet nicht und pflanzt sich nicht fort."
      ],
      aufgaben: [
        { frage: "Was brauchen alle Lebewesen, um Energie zu bekommen?", typ: "mc", optionen: ["Nahrung", "Strom", "Benzin", "Sonnenlicht (nur bei Pflanzen)"], loesung: "Nahrung", erklaerung: "Alle Lebewesen brauchen Nahrung, um Energie zu gewinnen." },
        { frage: "Wie nennt man es, wenn Lebewesen Nachkommen bekommen?", typ: "mc", optionen: ["Fortpflanzung", "Atmung", "Verdauung", "Wachstum"], loesung: "Fortpflanzung", erklaerung: "Fortpflanzung heißt, dass Lebewesen Nachkommen bekommen." },
        { frage: "Was nehmen Lebewesen beim Atmen auf?", typ: "mc", optionen: ["Sauerstoff", "Kohlenstoffdioxid", "Wasserstoff", "Stickstoff"], loesung: "Sauerstoff", erklaerung: "Beim Atmen nehmen Lebewesen Sauerstoff auf." },
        { frage: "Ist ein Stein ein Lebewesen?", typ: "mc", optionen: ["Nein", "Ja", "Nur manchmal", "Nur unter Wasser"], loesung: "Nein", erklaerung: "Ein Stein wächst nicht, atmet nicht und pflanzt sich nicht fort – er lebt nicht." },
        { frage: "Welches ist KEIN Kennzeichen des Lebens?", typ: "mc", optionen: ["Aus Metall bestehen", "Sich fortpflanzen", "Wachsen", "Atmen"], loesung: "Aus Metall bestehen", erklaerung: "Aus Metall zu bestehen sagt nichts darüber aus, ob etwas lebt." },
        { frage: "Reagieren Lebewesen auf ihre Umgebung?", typ: "mc", optionen: ["Ja", "Nein", "Nur Pflanzen", "Nur Tiere"], loesung: "Ja", erklaerung: "Alle Lebewesen reagieren auf Reize aus ihrer Umgebung." },
        { frage: "Was passiert mit Lebewesen im Laufe der Zeit (Kennzeichen des Lebens)?", typ: "mc", optionen: ["Sie wachsen", "Sie werden immer kleiner", "Sie verändern sich nie", "Sie werden zu Steinen"], loesung: "Sie wachsen", erklaerung: "Wachstum ist ein wichtiges Kennzeichen des Lebens." },
        { frage: "Geben Lebewesen beim Atmen Kohlenstoffdioxid ab?", typ: "mc", optionen: ["Ja", "Nein", "Nur Pflanzen", "Nur Fische"], loesung: "Ja", erklaerung: "Beim Ausatmen wird Kohlenstoffdioxid abgegeben." }
      ]
    },
    {
      id: "die-zelle",
      titel: "Die Zelle",
      icon: "🔬",
      intro: "Der kleinste Baustein des Lebens.",
      lektion: [
        "🧱 Alle Lebewesen bestehen aus Zellen – sie sind die kleinsten Bausteine des Lebens.",
        "🧫 Der Zellkern steuert die Zelle und enthält die Erbinformation.",
        "🧴 Die Zellmembran umschließt die Zelle wie eine Hülle.",
        "🟢 Pflanzenzellen haben zusätzlich eine feste Zellwand und grüne Chloroplasten."
      ],
      aufgaben: [
        { frage: "Woraus bestehen alle Lebewesen?", typ: "mc", optionen: ["Aus Zellen", "Aus Steinen", "Aus Wasser allein", "Aus Luft"], loesung: "Aus Zellen", erklaerung: "Alle Lebewesen bestehen aus Zellen." },
        { frage: "Was steuert die Zelle und enthält die Erbinformation?", typ: "mc", optionen: ["Der Zellkern", "Die Zellwand", "Der Chloroplast", "Die Membran"], loesung: "Der Zellkern", erklaerung: "Der Zellkern steuert die Zelle und enthält die Erbinformation." },
        { frage: "Was umschließt die Zelle wie eine Hülle?", typ: "mc", optionen: ["Die Zellmembran", "Der Zellkern", "Der Chloroplast", "Das Blatt"], loesung: "Die Zellmembran", erklaerung: "Die Zellmembran umgibt die Zelle." },
        { frage: "Was haben Pflanzenzellen zusätzlich zu Tierzellen?", typ: "mc", optionen: ["Eine feste Zellwand", "Einen Zellkern", "Eine Zellmembran", "Nichts, sie sind gleich"], loesung: "Eine feste Zellwand", erklaerung: "Pflanzenzellen haben zusätzlich eine feste Zellwand." },
        { frage: "Wie heißen die grünen Bestandteile in Pflanzenzellen?", typ: "mc", optionen: ["Chloroplasten", "Mitochondrien", "Zellkerne", "Membranen"], loesung: "Chloroplasten", erklaerung: "Chloroplasten sind die grünen Bestandteile, in denen Fotosynthese stattfindet." },
        { frage: "Kann man Zellen mit dem bloßen Auge sehen?", typ: "mc", optionen: ["Nein, meistens nicht", "Ja, immer", "Nur bei Tieren", "Nur bei Pflanzen"], loesung: "Nein, meistens nicht", erklaerung: "Die meisten Zellen sind so klein, dass man ein Mikroskop braucht, um sie zu sehen." },
        { frage: "Womit betrachtet man Zellen genauer?", typ: "mc", optionen: ["Mit einem Mikroskop", "Mit einem Fernglas", "Mit einer Lupe reicht das immer aus", "Mit einem Kompass"], loesung: "Mit einem Mikroskop", erklaerung: "Ein Mikroskop vergrößert Zellen so stark, dass man sie erkennen kann." }
      ]
    },
    {
      id: "bau-der-pflanzen",
      titel: "Bau der Pflanzen",
      icon: "🌻",
      intro: "Wurzel, Stängel, Blatt und Blüte kennenlernen.",
      lektion: [
        "🌱 Die Wurzel nimmt Wasser und Nährstoffe aus dem Boden auf und verankert die Pflanze.",
        "🌿 Der Stängel (bei Bäumen: der Stamm) transportiert Wasser und Nährstoffe und hält die Pflanze aufrecht.",
        "🍃 Die Blätter betreiben Fotosynthese: Sie wandeln mit Sonnenlicht Wasser und Kohlenstoffdioxid in Traubenzucker und Sauerstoff um.",
        "🌸 Die Blüte dient der Fortpflanzung – hier entstehen später die Samen."
      ],
      aufgaben: [
        { frage: "Was macht die Wurzel einer Pflanze?", typ: "mc", optionen: ["Wasser und Nährstoffe aufnehmen", "Fotosynthese betreiben", "Samen bilden", "Blüten öffnen"], loesung: "Wasser und Nährstoffe aufnehmen", erklaerung: "Die Wurzel nimmt Wasser und Nährstoffe aus dem Boden auf." },
        { frage: "Was macht der Stängel bzw. Stamm?", typ: "mc", optionen: ["Transportiert Wasser und hält die Pflanze aufrecht", "Nimmt Sonnenlicht auf", "Bildet Samen", "Riecht gut, um Insekten anzulocken"], loesung: "Transportiert Wasser und hält die Pflanze aufrecht", erklaerung: "Der Stängel transportiert Stoffe und stützt die Pflanze." },
        { frage: "Was passiert bei der Fotosynthese in den Blättern?", typ: "mc", optionen: ["Wasser und CO2 werden mit Sonnenlicht in Zucker und Sauerstoff umgewandelt", "Wasser wird aus dem Boden gepumpt", "Samen werden verteilt", "Blüten öffnen sich"], loesung: "Wasser und CO2 werden mit Sonnenlicht in Zucker und Sauerstoff umgewandelt", erklaerung: "Fotosynthese wandelt Wasser und Kohlenstoffdioxid mithilfe von Licht in Zucker und Sauerstoff um." },
        { frage: "Wozu dient die Blüte einer Pflanze?", typ: "mc", optionen: ["Der Fortpflanzung", "Der Wasseraufnahme", "Der Verankerung im Boden", "Dem Transport von Nährstoffen"], loesung: "Der Fortpflanzung", erklaerung: "Die Blüte dient der Fortpflanzung – hier entstehen Samen." },
        { frage: "Welches Gas geben Pflanzen bei der Fotosynthese ab?", typ: "mc", optionen: ["Sauerstoff", "Kohlenstoffdioxid", "Stickstoff", "Wasserstoff"], loesung: "Sauerstoff", erklaerung: "Bei der Fotosynthese wird Sauerstoff freigesetzt." },
        { frage: "Was benötigen Pflanzen für die Fotosynthese außer Wasser und CO2?", typ: "mc", optionen: ["Sonnenlicht", "Dunkelheit", "Schnee", "Sand"], loesung: "Sonnenlicht", erklaerung: "Fotosynthese braucht Sonnenlicht als Energiequelle." },
        { frage: "Wo entstehen bei einer Pflanze später die Samen?", typ: "mc", optionen: ["In der Blüte", "In der Wurzel", "Im Stängel", "Im Blatt"], loesung: "In der Blüte", erklaerung: "Nach der Bestäubung entstehen in der Blüte die Samen." },
        { frage: "Welcher Pflanzenteil verankert die Pflanze im Boden?", typ: "mc", optionen: ["Die Wurzel", "Das Blatt", "Die Blüte", "Der Stängel"], loesung: "Die Wurzel", erklaerung: "Die Wurzel verankert die Pflanze im Boden." }
      ]
    },
    {
      id: "tierklassen",
      titel: "Tierklassen",
      icon: "🐾",
      intro: "Säugetiere, Vögel, Fische, Reptilien, Amphibien und Insekten unterscheiden.",
      lektion: [
        "🐄 Säugetiere haben Fell, sind gleichwarm, säugen ihre Jungen mit Milch (z. B. Hund, Wal, Mensch).",
        "🐦 Vögel haben Federn, einen Schnabel und legen Eier (z. B. Amsel, Pinguin).",
        "🐟 Fische leben im Wasser, atmen mit Kiemen und haben Schuppen.",
        "🦎 Reptilien sind wechselwarm, haben Schuppen und legen meist Eier an Land (z. B. Eidechse, Schlange).",
        "🐸 Amphibien leben im Wasser und an Land, haben eine feuchte Haut (z. B. Frosch, Salamander).",
        "🐝 Insekten haben 6 Beine und einen Körper aus Kopf, Brust und Hinterleib."
      ],
      aufgaben: [
        { frage: "Wie viele Beine hat ein Insekt?", typ: "zahl", loesung: "6", erklaerung: "Insekten haben 6 Beine." },
        { frage: "Welche Tierklasse säugt ihre Jungen mit Milch?", typ: "mc", optionen: ["Säugetiere", "Vögel", "Fische", "Reptilien"], loesung: "Säugetiere", erklaerung: "Säugetiere säugen ihre Jungen mit Milch." },
        { frage: "Womit atmen Fische?", typ: "mc", optionen: ["Mit Kiemen", "Mit Lungen", "Mit der Haut", "Mit Federn"], loesung: "Mit Kiemen", erklaerung: "Fische atmen mit Kiemen." },
        { frage: "Welche Tierklasse hat Federn?", typ: "mc", optionen: ["Vögel", "Fische", "Reptilien", "Amphibien"], loesung: "Vögel", erklaerung: "Nur Vögel haben Federn." },
        { frage: "Welche Tierklasse ist wechselwarm und hat Schuppen, lebt aber meist an Land?", typ: "mc", optionen: ["Reptilien", "Säugetiere", "Vögel", "Amphibien"], loesung: "Reptilien", erklaerung: "Reptilien wie Eidechsen und Schlangen sind wechselwarm und haben Schuppen." },
        { frage: "Welche Tierklasse lebt sowohl im Wasser als auch an Land und hat eine feuchte Haut?", typ: "mc", optionen: ["Amphibien", "Fische", "Vögel", "Säugetiere"], loesung: "Amphibien", erklaerung: "Amphibien wie Frösche leben im Wasser und an Land." },
        { frage: "Ist der Wal ein Fisch oder ein Säugetier?", typ: "mc", optionen: ["Säugetier", "Fisch", "Reptil", "Amphibium"], loesung: "Säugetier", erklaerung: "Der Wal ist ein Säugetier – er atmet Luft und säugt seine Jungen." },
        { frage: "Wie ist der Körper eines Insekts aufgeteilt?", typ: "mc", optionen: ["Kopf, Brust, Hinterleib", "Kopf und Schwanz", "Nur ein Körperteil", "Kopf, Bauch, Flossen"], loesung: "Kopf, Brust, Hinterleib", erklaerung: "Der Körper eines Insekts besteht aus Kopf, Brust und Hinterleib." },
        { frage: "Was bedeutet 'wechselwarm'?", typ: "mc", optionen: ["Die Körpertemperatur passt sich der Umgebung an", "Das Tier wechselt oft die Farbe", "Das Tier hat immer die gleiche Temperatur", "Das Tier lebt nur im Winter"], loesung: "Die Körpertemperatur passt sich der Umgebung an", erklaerung: "Wechselwarme Tiere (z. B. Reptilien) haben eine Körpertemperatur, die von der Umgebung abhängt." },
        { frage: "Legen Vögel Eier?", typ: "mc", optionen: ["Ja", "Nein", "Nur manche Vögel", "Nur im Winter"], loesung: "Ja", erklaerung: "Alle Vögel legen Eier." }
      ]
    },
    {
      id: "sinnesorgane",
      titel: "Sinnesorgane des Menschen",
      icon: "👁️",
      intro: "Die fünf Sinne des Menschen kennenlernen.",
      lektion: [
        "👁️ Das Auge ist das Sinnesorgan zum Sehen.",
        "👂 Das Ohr ist das Sinnesorgan zum Hören (und für das Gleichgewicht).",
        "👃 Die Nase ist das Sinnesorgan zum Riechen.",
        "👅 Die Zunge ist das Sinnesorgan zum Schmecken.",
        "✋ Die Haut ist das Sinnesorgan zum Tasten/Fühlen."
      ],
      aufgaben: [
        { frage: "Wie viele Sinne hat der Mensch normalerweise?", typ: "zahl", loesung: "5", erklaerung: "Der Mensch hat 5 Sinne: Sehen, Hören, Riechen, Schmecken, Tasten." },
        { frage: "Welches Sinnesorgan ist zum Sehen da?", typ: "mc", optionen: ["Das Auge", "Das Ohr", "Die Nase", "Die Zunge"], loesung: "Das Auge", erklaerung: "Das Auge ermöglicht das Sehen." },
        { frage: "Welches Sinnesorgan ist zum Hören da?", typ: "mc", optionen: ["Das Ohr", "Das Auge", "Die Nase", "Die Haut"], loesung: "Das Ohr", erklaerung: "Das Ohr ermöglicht das Hören." },
        { frage: "Welches Sinnesorgan ist zum Riechen da?", typ: "mc", optionen: ["Die Nase", "Das Auge", "Das Ohr", "Die Zunge"], loesung: "Die Nase", erklaerung: "Die Nase ermöglicht das Riechen." },
        { frage: "Welches Sinnesorgan ist zum Schmecken da?", typ: "mc", optionen: ["Die Zunge", "Das Auge", "Das Ohr", "Die Nase"], loesung: "Die Zunge", erklaerung: "Die Zunge ermöglicht das Schmecken." },
        { frage: "Welches Sinnesorgan ist zum Tasten/Fühlen da?", typ: "mc", optionen: ["Die Haut", "Das Auge", "Das Ohr", "Die Zunge"], loesung: "Die Haut", erklaerung: "Die Haut ermöglicht das Tasten und Fühlen." },
        { frage: "Welches Organ hilft dem Menschen auch beim Gleichgewicht?", typ: "mc", optionen: ["Das Ohr", "Das Auge", "Die Nase", "Die Zunge"], loesung: "Das Ohr", erklaerung: "Das Innenohr enthält das Gleichgewichtsorgan." },
        { frage: "Wie viele Grundgeschmacksrichtungen kann die Zunge unterscheiden (mindestens): süß, sauer, salzig, bitter und …?", typ: "mc", optionen: ["umami (herzhaft)", "kalt", "scharf", "glatt"], loesung: "umami (herzhaft)", erklaerung: "Neben süß, sauer, salzig und bitter erkennt die Zunge auch 'umami' (herzhaft)." }
      ]
    }
  ]
};

// Erdkunde – Klasse 5 (Gymnasium Niedersachsen)
window.LERNDATA = window.LERNDATA || {};
window.LERNDATA.erdkunde = {
  id: "erdkunde",
  name: "Erdkunde",
  icon: "🌍",
  farbe: "#0EA5E9",
  themen: [
    {
      id: "karten-himmelsrichtungen",
      titel: "Karten & Himmelsrichtungen",
      icon: "🧭",
      intro: "Sich mit Karten und Himmelsrichtungen orientieren.",
      lektion: [
        "🧭 Die vier Himmelsrichtungen heißen Norden, Osten, Süden, Westen.",
        "🗺️ Auf den meisten Karten zeigt oben nach Norden.",
        "📏 Der Maßstab einer Karte zeigt, wie viel eine Strecke in Wirklichkeit ist (z. B. 1:100.000).",
        "🔑 Die Legende erklärt, was die Farben und Symbole auf einer Karte bedeuten."
      ],
      aufgaben: [
        { frage: "Wie viele Himmelsrichtungen gibt es?", typ: "zahl", loesung: "4", erklaerung: "Es gibt vier Himmelsrichtungen: Norden, Osten, Süden, Westen." },
        { frage: "Welche Richtung zeigt auf den meisten Karten nach oben?", typ: "mc", optionen: ["Norden", "Süden", "Osten", "Westen"], loesung: "Norden", erklaerung: "Auf den meisten Karten zeigt oben nach Norden." },
        { frage: "Welche Himmelsrichtung liegt Norden gegenüber?", typ: "mc", optionen: ["Süden", "Osten", "Westen", "keine"], loesung: "Süden", erklaerung: "Süden ist die Gegenrichtung von Norden." },
        { frage: "Welche Himmelsrichtung liegt Osten gegenüber?", typ: "mc", optionen: ["Westen", "Norden", "Süden", "keine"], loesung: "Westen", erklaerung: "Westen ist die Gegenrichtung von Osten." },
        { frage: "Wo geht die Sonne auf?", typ: "mc", optionen: ["im Osten", "im Westen", "im Norden", "im Süden"], loesung: "im Osten", erklaerung: "Die Sonne geht im Osten auf und im Westen unter." },
        { frage: "Wo geht die Sonne unter?", typ: "mc", optionen: ["im Westen", "im Osten", "im Norden", "im Süden"], loesung: "im Westen", erklaerung: "Die Sonne geht im Westen unter." },
        { frage: "Was zeigt der Maßstab einer Karte?", typ: "mc", optionen: ["Wie viel eine Strecke in Wirklichkeit ist", "Wie alt die Karte ist", "Wer die Karte gezeichnet hat", "Wie viele Farben verwendet wurden"], loesung: "Wie viel eine Strecke in Wirklichkeit ist", erklaerung: "Der Maßstab zeigt das Verhältnis zwischen Karte und Wirklichkeit." },
        { frage: "Wofür braucht man die Legende einer Karte?", typ: "mc", optionen: ["Um Symbole und Farben zu erklären", "Um die Karte zu drucken", "Um den Maßstab zu berechnen", "Um Länder umzubenennen"], loesung: "Um Symbole und Farben zu erklären", erklaerung: "Die Legende erklärt, was Farben und Symbole auf der Karte bedeuten." },
        { frage: "Ein Kompass zeigt immer nach …", typ: "mc", optionen: ["Norden", "Süden", "Osten", "Westen"], loesung: "Norden", erklaerung: "Die Kompassnadel zeigt immer nach Norden." },
        { frage: "Bei Maßstab 1:100.000 – wie viele cm in der Wirklichkeit sind 1 cm auf der Karte?", typ: "zahl", loesung: "100000", erklaerung: "1:100.000 bedeutet: 1 cm auf der Karte = 100.000 cm in der Wirklichkeit." },
        { frage: "Welche Himmelsrichtung liegt zwischen Norden und Osten?", typ: "mc", optionen: ["Nordosten", "Südwesten", "Nordwesten", "Südosten"], loesung: "Nordosten", erklaerung: "Zwischen Norden und Osten liegt Nordosten." }
      ]
    },
    {
      id: "kontinente-ozeane",
      titel: "Kontinente & Ozeane",
      icon: "🌎",
      intro: "Die Erdteile und Weltmeere kennenlernen.",
      lektion: [
        "🌍 Die Erde hat 7 Kontinente: Afrika, Asien, Europa, Nordamerika, Südamerika, Australien/Ozeanien, Antarktis.",
        "🌊 Die Erde hat 5 große Ozeane: Pazifik, Atlantik, Indischer Ozean, Südlicher Ozean, Arktischer Ozean.",
        "📍 Deutschland liegt auf dem Kontinent Europa."
      ],
      aufgaben: [
        { frage: "Wie viele Kontinente gibt es?", typ: "zahl", loesung: "7", erklaerung: "Es gibt 7 Kontinente." },
        { frage: "Auf welchem Kontinent liegt Deutschland?", typ: "mc", optionen: ["Europa", "Asien", "Afrika", "Nordamerika"], loesung: "Europa", erklaerung: "Deutschland liegt in Europa." },
        { frage: "Welcher ist der größte Ozean der Erde?", typ: "mc", optionen: ["Pazifik", "Atlantik", "Indischer Ozean", "Arktischer Ozean"], loesung: "Pazifik", erklaerung: "Der Pazifik ist der größte und tiefste Ozean der Erde." },
        { frage: "Welcher Kontinent liegt südlich von Europa, über das Mittelmeer erreichbar?", typ: "mc", optionen: ["Afrika", "Asien", "Australien", "Nordamerika"], loesung: "Afrika", erklaerung: "Afrika liegt südlich von Europa, getrennt durch das Mittelmeer." },
        { frage: "Welcher Kontinent ist gleichzeitig ein Land?", typ: "mc", optionen: ["Australien", "Asien", "Europa", "Afrika"], loesung: "Australien", erklaerung: "Australien ist sowohl ein Kontinent als auch ein einzelnes Land." },
        { frage: "Welcher Ozean liegt zwischen Amerika und Europa/Afrika?", typ: "mc", optionen: ["Atlantik", "Pazifik", "Indischer Ozean", "Arktischer Ozean"], loesung: "Atlantik", erklaerung: "Der Atlantik liegt zwischen Amerika und Europa/Afrika." },
        { frage: "Welcher Kontinent ist der größte der Erde?", typ: "mc", optionen: ["Asien", "Afrika", "Europa", "Nordamerika"], loesung: "Asien", erklaerung: "Asien ist der größte und bevölkerungsreichste Kontinent." },
        { frage: "Welcher Kontinent liegt am Südpol und ist von Eis bedeckt?", typ: "mc", optionen: ["Antarktis", "Arktis", "Grönland", "Sibirien"], loesung: "Antarktis", erklaerung: "Die Antarktis liegt am Südpol und ist fast vollständig von Eis bedeckt." },
        { frage: "Wie viele große Ozeane gibt es?", typ: "zahl", loesung: "5", erklaerung: "Es gibt 5 große Ozeane." },
        { frage: "Welcher Kontinent liegt zwischen Nordamerika und Australien im Pazifik-Bereich?", typ: "mc", optionen: ["Asien", "Europa", "Afrika", "Antarktis"], loesung: "Asien", erklaerung: "Asien erstreckt sich bis zum Pazifik, in Richtung Australien." }
      ]
    },
    {
      id: "deutschland-bundeslaender",
      titel: "Deutschland & Bundesländer",
      icon: "🇩🇪",
      intro: "Deutschland, seine Bundesländer und Landschaften.",
      lektion: [
        "🇩🇪 Deutschland hat 16 Bundesländer.",
        "🏛️ Berlin ist die Hauptstadt von Deutschland.",
        "🌊 Im Norden grenzt Deutschland an die Nordsee und Ostsee, im Süden an die Alpen.",
        "📍 Stadthagen liegt in Niedersachsen."
      ],
      aufgaben: [
        { frage: "Wie viele Bundesländer hat Deutschland?", typ: "zahl", loesung: "16", erklaerung: "Deutschland hat 16 Bundesländer." },
        { frage: "Wie heißt die Hauptstadt von Deutschland?", typ: "mc", optionen: ["Berlin", "Hamburg", "München", "Köln"], loesung: "Berlin", erklaerung: "Berlin ist die Hauptstadt Deutschlands." },
        { frage: "In welchem Bundesland liegt Stadthagen?", typ: "mc", optionen: ["Niedersachsen", "Bayern", "Hessen", "Sachsen"], loesung: "Niedersachsen", erklaerung: "Stadthagen liegt im Bundesland Niedersachsen." },
        { frage: "Welche Meere grenzen im Norden an Deutschland?", typ: "mc", optionen: ["Nordsee und Ostsee", "Mittelmeer und Atlantik", "Nur die Nordsee", "Nur die Ostsee"], loesung: "Nordsee und Ostsee", erklaerung: "Im Norden grenzt Deutschland an Nordsee und Ostsee." },
        { frage: "Welches Gebirge liegt im Süden Deutschlands?", typ: "mc", optionen: ["Die Alpen", "Der Harz", "Die Eifel", "Der Schwarzwald"], loesung: "Die Alpen", erklaerung: "Im Süden Deutschlands liegen die Alpen. Harz, Eifel und Schwarzwald sind kleinere Mittelgebirge." },
        { frage: "Wie heißt die größte Stadt Deutschlands?", typ: "mc", optionen: ["Berlin", "Hamburg", "München", "Köln"], loesung: "Berlin", erklaerung: "Berlin ist mit Abstand die größte Stadt Deutschlands." },
        { frage: "Welcher Fluss fließt durch Köln?", typ: "mc", optionen: ["Der Rhein", "Die Elbe", "Die Donau", "Die Weser"], loesung: "Der Rhein", erklaerung: "Der Rhein fließt durch Köln." },
        { frage: "Welches Bundesland ist gleichzeitig eine Stadt: Hamburg, Bayern oder Sachsen?", typ: "mc", optionen: ["Hamburg", "Bayern", "Sachsen", "Keines davon"], loesung: "Hamburg", erklaerung: "Hamburg ist ein Stadtstaat – Stadt und Bundesland zugleich." },
        { frage: "Wie heißt das nördlichste Bundesland Deutschlands?", typ: "mc", optionen: ["Schleswig-Holstein", "Bayern", "Saarland", "Hessen"], loesung: "Schleswig-Holstein", erklaerung: "Schleswig-Holstein liegt ganz im Norden Deutschlands." },
        { frage: "Wie heißt das größte Bundesland (Fläche) Deutschlands?", typ: "mc", optionen: ["Bayern", "Niedersachsen", "Nordrhein-Westfalen", "Hessen"], loesung: "Bayern", erklaerung: "Bayern ist das flächengrößte Bundesland Deutschlands." }
      ]
    },
    {
      id: "wetter-klima",
      titel: "Wetter & Klima",
      icon: "🌦️",
      intro: "Der Unterschied zwischen Wetter und Klima.",
      lektion: [
        "🌦️ Wetter beschreibt den Zustand der Luft an einem Ort, an einem bestimmten Tag (z. B. heute regnerisch).",
        "📅 Klima beschreibt das typische Wetter einer Region über viele Jahre hinweg.",
        "🌡️ Ein Thermometer misst die Temperatur, ein Regenmesser die Niederschlagsmenge.",
        "❄️☀️ Es gibt verschiedene Klimazonen: z. B. Polarzone, gemäßigte Zone, tropische Zone."
      ],
      aufgaben: [
        { frage: "Was beschreibt das 'Wetter'?", typ: "mc", optionen: ["Den Zustand der Luft an einem Tag", "Das Klima über viele Jahre", "Die Höhe eines Berges", "Die Größe eines Landes"], loesung: "Den Zustand der Luft an einem Tag", erklaerung: "Wetter ist der kurzfristige Zustand der Luft an einem bestimmten Tag." },
        { frage: "Was beschreibt das 'Klima'?", typ: "mc", optionen: ["Das typische Wetter einer Region über viele Jahre", "Das Wetter von heute", "Nur die Temperatur an einem Tag", "Die Bevölkerungszahl"], loesung: "Das typische Wetter einer Region über viele Jahre", erklaerung: "Klima beschreibt das langjährige, typische Wetter einer Region." },
        { frage: "Womit misst man die Temperatur?", typ: "mc", optionen: ["Mit einem Thermometer", "Mit einem Kompass", "Mit einer Waage", "Mit einem Lineal"], loesung: "Mit einem Thermometer", erklaerung: "Ein Thermometer misst die Temperatur." },
        { frage: "Womit misst man, wie viel Regen gefallen ist?", typ: "mc", optionen: ["Mit einem Regenmesser", "Mit einem Thermometer", "Mit einem Kompass", "Mit einer Waage"], loesung: "Mit einem Regenmesser", erklaerung: "Ein Regenmesser misst die Niederschlagsmenge." },
        { frage: "In welcher Klimazone ist es das ganze Jahr sehr heiß und feucht?", typ: "mc", optionen: ["Tropische Zone", "Polarzone", "Gemäßigte Zone", "Wüstenzone"], loesung: "Tropische Zone", erklaerung: "In der tropischen Zone ist es ganzjährig heiß und oft feucht (Regenwald). In der Wüstenzone ist es zwar heiß, aber trocken." },
        { frage: "In welcher Klimazone liegt Deutschland?", typ: "mc", optionen: ["Gemäßigte Zone", "Tropische Zone", "Polarzone", "Wüstenzone"], loesung: "Gemäßigte Zone", erklaerung: "Deutschland liegt in der gemäßigten Klimazone mit vier Jahreszeiten." },
        { frage: "Wie viele Jahreszeiten gibt es in der gemäßigten Zone?", typ: "zahl", loesung: "4", erklaerung: "In der gemäßigten Zone gibt es vier Jahreszeiten: Frühling, Sommer, Herbst, Winter." },
        { frage: "Welche Klimazone ist an den Polen sehr kalt?", typ: "mc", optionen: ["Polarzone", "Tropische Zone", "Gemäßigte Zone", "Subtropische Zone"], loesung: "Polarzone", erklaerung: "An den Polen liegt die kalte Polarzone." },
        { frage: "Was zeigt eine Wettervorhersage?", typ: "mc", optionen: ["Wie das Wetter in den nächsten Tagen wahrscheinlich wird", "Wie das Klima vor 100 Jahren war", "Die Bevölkerungszahl einer Stadt", "Die Höhe eines Berges"], loesung: "Wie das Wetter in den nächsten Tagen wahrscheinlich wird", erklaerung: "Eine Wettervorhersage sagt voraus, wie das Wetter in naher Zukunft wird." }
      ]
    },
    {
      id: "stadt-land",
      titel: "Stadt & Land",
      icon: "🏙️",
      intro: "Unterschiede zwischen Leben in der Stadt und auf dem Land.",
      lektion: [
        "🏙️ In der Stadt leben viele Menschen auf engem Raum, es gibt viele Häuser, Geschäfte und Verkehr.",
        "🌾 Auf dem Land leben weniger Menschen, es gibt mehr Felder, Wiesen und Bauernhöfe.",
        "🚌 In Städten gibt es oft Busse, Bahnen und U-Bahnen als öffentlichen Verkehr.",
        "🏡 Viele Menschen pendeln: Sie wohnen auf dem Land und arbeiten in der Stadt, oder umgekehrt."
      ],
      aufgaben: [
        { frage: "Wo leben meistens mehr Menschen auf engem Raum?", typ: "mc", optionen: ["In der Stadt", "Auf dem Land", "Beides gleich", "Nirgends"], loesung: "In der Stadt", erklaerung: "In Städten leben viele Menschen auf engem Raum." },
        { frage: "Was findet man eher auf dem Land als in der Stadt?", typ: "mc", optionen: ["Felder und Bauernhöfe", "Hochhäuser", "U-Bahnen", "Große Einkaufszentren"], loesung: "Felder und Bauernhöfe", erklaerung: "Auf dem Land gibt es mehr Felder, Wiesen und Bauernhöfe." },
        { frage: "Was bedeutet 'pendeln'?", typ: "mc", optionen: ["Regelmäßig zwischen Wohnort und Arbeitsort fahren", "Auf dem Land Getreide anbauen", "In der Stadt einkaufen gehen", "Ein Haus bauen"], loesung: "Regelmäßig zwischen Wohnort und Arbeitsort fahren", erklaerung: "Pendeln heißt, regelmäßig zwischen Wohnort und Arbeits- oder Schulort zu fahren." },
        { frage: "Welches Verkehrsmittel gibt es typischerweise in Großstädten?", typ: "mc", optionen: ["U-Bahn", "Traktor", "Ruderboot", "Schlitten"], loesung: "U-Bahn", erklaerung: "In Großstädten gibt es oft U-Bahnen als öffentlichen Nahverkehr." },
        { frage: "Was ist ein Vorteil des Lebens auf dem Land?", typ: "mc", optionen: ["Mehr Ruhe und Natur", "Kürzere Wege zu allem", "Mehr Kinos", "Mehr U-Bahn-Linien"], loesung: "Mehr Ruhe und Natur", erklaerung: "Auf dem Land ist es oft ruhiger und es gibt mehr Natur." },
        { frage: "Was ist ein Vorteil des Lebens in der Stadt?", typ: "mc", optionen: ["Kurze Wege zu Schulen, Geschäften und Ärzten", "Mehr Felder", "Weniger Verkehr", "Mehr Bauernhöfe"], loesung: "Kurze Wege zu Schulen, Geschäften und Ärzten", erklaerung: "In der Stadt sind die Wege zu Einrichtungen oft kürzer." },
        { frage: "Wie nennt man Menschen, die Felder bewirtschaften und Tiere halten?", typ: "mc", optionen: ["Landwirte / Bauern", "Pendler", "Bürgermeister", "Ingenieure"], loesung: "Landwirte / Bauern", erklaerung: "Landwirte (Bauern) bewirtschaften Felder und halten Tiere." },
        { frage: "Was bedeutet 'Ballungsraum'?", typ: "mc", optionen: ["Eine Region mit sehr vielen Menschen und Städten dicht beieinander", "Ein einzelnes kleines Dorf", "Ein Naturschutzgebiet", "Ein einzelner Bauernhof"], loesung: "Eine Region mit sehr vielen Menschen und Städten dicht beieinander", erklaerung: "Ein Ballungsraum ist eine dicht besiedelte Region mit mehreren Städten." }
      ]
    }
  ]
};

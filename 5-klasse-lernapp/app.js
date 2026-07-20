(function () {
  "use strict";

  var LS_PROGRESS = "lk5_progress"; // eigener Präfix, damit nichts mit der anderen App im Repo kollidiert
  var LS_REFRESH = "lk5_refresh";
  var LS_LEITNER = "lk5_leitner";
  var LS_STREAK = "lk5_streak";

  var AKTIVE_FAECHER = ["mathe", "deutsch", "englisch", "erdkunde", "biologie", "lesen"];

  var KOMMEND = [];

  var appEl = document.getElementById("app");
  var titelEl = document.getElementById("titel");
  var backBtn = document.getElementById("btnZurueck");
  var refreshBtn = document.getElementById("btnRefresh");
  var footDate = document.getElementById("footDate");
  var timerBtn = document.getElementById("btnTimer");

  var state = {
    view: "faecher",
    fach: null,
    thema: null,
    modus: "normal", // "normal" | "review" | "retry"
    aufgaben: [],
    index: 0,
    richtigCount: 0,
    falscheDiesesmal: [],
    kurzcheckFragen: [],
    kurzcheckIndex: 0,
    geplanteAnzahl: null
  };

  // ---------- Aufgaben-Index (für Wiederholung über alle Fächer) ----------
  var AUFGABEN_INDEX = {};
  (function baueAufgabenIndex() {
    AKTIVE_FAECHER.forEach(function (fachId) {
      var fach = window.LERNDATA[fachId];
      if (!fach) return;
      fach.themen.forEach(function (thema) {
        thema.aufgaben.forEach(function (aufgabe, i) {
          var id = fachId + "::" + thema.id + "::" + i;
          aufgabe._id = id;
          AUFGABEN_INDEX[id] = {
            fachId: fachId, fachName: fach.name, fachIcon: fach.icon,
            themaId: thema.id, themaTitel: thema.titel, aufgabe: aufgabe
          };
        });
      });
    });
  })();

  // ---------- Fortschritt (Sterne pro Thema) ----------
  function ladeProgress() {
    try { return JSON.parse(localStorage.getItem(LS_PROGRESS)) || {}; }
    catch (e) { return {}; }
  }
  function speichereProgress(p) {
    try { localStorage.setItem(LS_PROGRESS, JSON.stringify(p)); } catch (e) {}
  }
  function progressKey(fachId, themaId) { return fachId + "-" + themaId; }

  // ---------- Leitner-Wiederholungswarteschlange ----------
  var LEITNER_INTERVALLE = [1, 3, 7]; // Tage bis zur nächsten Fälligkeit je Box (1-3)
  function heuteStr(versatzTage) {
    var d = new Date();
    if (versatzTage) d.setDate(d.getDate() + versatzTage);
    return d.toISOString().slice(0, 10);
  }
  function ladeLeitner() {
    try { return JSON.parse(localStorage.getItem(LS_LEITNER)) || {}; } catch (e) { return {}; }
  }
  function speichereLeitner(l) {
    try { localStorage.setItem(LS_LEITNER, JSON.stringify(l)); } catch (e) {}
  }
  function aktualisiereLeitner(aufgabeId, richtig) {
    var l = ladeLeitner();
    if (richtig) {
      var eintrag = l[aufgabeId];
      if (!eintrag) return; // war noch nie falsch -> braucht keine Wiederholung
      eintrag.box = Math.min(3, eintrag.box + 1);
      eintrag.faelligAm = heuteStr(LEITNER_INTERVALLE[eintrag.box - 1]);
      l[aufgabeId] = eintrag;
    } else {
      l[aufgabeId] = { box: 1, faelligAm: heuteStr(LEITNER_INTERVALLE[0]) };
    }
    speichereLeitner(l);
  }
  function faelligeAufgaben() {
    var l = ladeLeitner();
    var heute = heuteStr();
    var ergebnisse = [];
    Object.keys(l).forEach(function (id) {
      if (l[id].faelligAm <= heute && AUFGABEN_INDEX[id]) ergebnisse.push(AUFGABEN_INDEX[id]);
    });
    return ergebnisse;
  }

  // ---------- Tages-Streak (mit einer Freeze pro Woche) ----------
  function ladeStreak() {
    try { return JSON.parse(localStorage.getItem(LS_STREAK)) || null; } catch (e) { return null; }
  }
  function speichereStreak(s) {
    try { localStorage.setItem(LS_STREAK, JSON.stringify(s)); } catch (e) {}
  }
  function kalenderwoche(datumStr) {
    var d = new Date(datumStr + "T00:00:00Z");
    var jan1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var tage = Math.floor((d - jan1) / 86400000);
    return d.getUTCFullYear() + "-W" + Math.ceil((tage + jan1.getUTCDay() + 1) / 7);
  }
  function aktualisiereStreak() {
    var heute = heuteStr();
    var s = ladeStreak();
    if (!s) { speichereStreak({ anzahl: 1, letztesDatum: heute, eingefrorenWoche: null }); return; }
    if (s.letztesDatum === heute) return; // heute schon gezählt
    var gestern = heuteStr(-1);
    var vorgestern = heuteStr(-2);
    var dieseWoche = kalenderwoche(heute);
    if (s.letztesDatum === gestern) {
      s.anzahl += 1;
    } else if (s.letztesDatum === vorgestern && s.eingefrorenWoche !== dieseWoche) {
      s.anzahl += 1; // eine verpasste Tageslücke pro Woche wird verziehen
      s.eingefrorenWoche = dieseWoche;
    } else {
      s.anzahl = 1;
    }
    s.letztesDatum = heute;
    speichereStreak(s);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function zufallsElement(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function sterneAusProzent(prozent) {
    if (prozent >= 90) return 3;
    if (prozent >= 70) return 2;
    if (prozent >= 50) return 1;
    return 0;
  }

  function sterneAnzeige(anzahl) {
    var voll = "⭐".repeat(anzahl);
    var leer = "☆".repeat(3 - anzahl);
    return voll + leer;
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function zeigeToast(text, art, dauerMs) {
    var toast = el("div", { class: "toast" + (art ? " toast-" + art : "") , text: text });
    document.body.appendChild(toast);
    setTimeout(function () { toast.remove(); }, dauerMs || 4000);
  }

  // Ansichten, in denen eine Mission/Übung gerade läuft – hier soll ein
  // Reload durch den Aktualisieren-Button nicht mitten drin passieren.
  var ANSICHTEN_MIT_LAUFENDER_AUFGABE = ["uebung", "kurzcheck"];

  function render() {
    appEl.innerHTML = "";
    backBtn.hidden = state.view === "faecher";
    if (state.view === "faecher") renderFaecher();
    else if (state.view === "themen") renderThemen();
    else if (state.view === "lektion") renderLektion();
    else if (state.view === "vokabeln") renderVokabeln();
    else if (state.view === "kurzcheck") renderKurzcheck();
    else if (state.view === "uebung") renderUebung();
    else if (state.view === "ergebnis") renderErgebnis();
  }

  function renderFaecher() {
    titelEl.textContent = "⚔️ Idol Academy · 5. Klasse";
    var progress = ladeProgress();
    var streak = ladeStreak();
    var faellige = faelligeAufgaben();

    if (streak && streak.anzahl > 0) {
      appEl.appendChild(el("div", { class: "streak-pill", text: "🔥 " + streak.anzahl + " Tag" + (streak.anzahl === 1 ? "" : "e") + " in Folge" }));
    }

    if (faellige.length > 0) {
      var wiederholKarte = el("button", { class: "wiederhol-karte" }, [
        el("div", { class: "wiederhol-text", text: "🔁 Wiederholung bereit" }),
        el("div", { class: "wiederhol-anzahl", text: faellige.length + " Frage" + (faellige.length === 1 ? "" : "n") + " heute fällig – mach dich bereit!" })
      ]);
      wiederholKarte.addEventListener("click", function () { starteWiederholung(); });
      appEl.appendChild(wiederholKarte);
    }

    var grid = el("div", { class: "grid" });

    AKTIVE_FAECHER.forEach(function (fachId) {
      var fach = window.LERNDATA[fachId];
      if (!fach) return;
      var anzahlThemen = fach.themen.length;
      var summeSterne = 0;
      fach.themen.forEach(function (t) {
        var p = progress[progressKey(fach.id, t.id)];
        if (p) summeSterne += p.sterne;
      });
      var tile = el("button", { class: "tile fach", style: "--fach-color:" + fach.farbe }, [
        el("div", { class: "emoji", text: fach.icon }),
        el("div", { class: "name", text: fach.name }),
        el("div", { class: "stars", text: summeSterne + " / " + (anzahlThemen * 3) + " ⭐" })
      ]);
      tile.addEventListener("click", function () {
        state.fach = fach;
        state.view = "themen";
        render();
      });
      grid.appendChild(tile);
    });

    KOMMEND.forEach(function (f) {
      grid.appendChild(el("div", { class: "tile locked" }, [
        el("div", { class: "emoji", text: f.icon }),
        el("div", { class: "name", text: f.name }),
        el("div", { class: "stars", text: "bald verfügbar" })
      ]));
    });

    appEl.appendChild(el("p", { class: "intro-box", text: "✨ Wähle einen Bereich und starte deine Mission!" }));
    appEl.appendChild(grid);
  }

  function renderThemen() {
    titelEl.textContent = state.fach.icon + " " + state.fach.name;
    var progress = ladeProgress();
    var grid = el("div", { class: "grid" });

    state.fach.themen.forEach(function (thema, i) {
      var p = progress[progressKey(state.fach.id, thema.id)];
      var sterne = p ? p.sterne : 0;
      var label = state.fach.id === "lesen" ? thema.titel : "Mission " + (i + 1) + ": " + thema.titel;
      var tile = el("button", { class: "tile" }, [
        el("div", { class: "emoji", text: thema.icon }),
        el("div", { class: "name", text: label }),
        el("div", { class: "stars", text: sterneAnzeige(sterne) })
      ]);
      tile.addEventListener("click", function () {
        state.thema = thema;
        if (thema.vokabeln) {
          state.view = "vokabeln";
        } else if (thema.lektion) {
          state.view = "lektion";
        } else {
          starteUebungDirekt(thema);
          return;
        }
        render();
      });
      grid.appendChild(tile);
    });

    appEl.appendChild(el("p", { class: "intro-box", text: "🎤 Tippe auf eine Mission, um loszulegen." }));
    appEl.appendChild(grid);
  }

  function starteUebungDirekt(thema) {
    starteUebung(state.fach, thema);
  }

  // ---------- Start-Auswahl: kurze oder vollständige Runde ----------
  function renderStartBlock(box, fach, thema, labelWennKurz) {
    if (thema.aufgaben.length > 10) {
      box.appendChild(el("p", { class: "laenge-hinweis", text: "Wie viele Aufgaben möchtest du üben?" }));
      var reihe = el("div", { class: "button-reihe" });
      var kurzBtn = el("button", { class: "btn-primary btn-secondary", text: "⚡ Kurz (8)" });
      kurzBtn.addEventListener("click", function () { starteMitKurzcheck(fach, thema, 8); });
      var alleBtn = el("button", { class: "btn-primary btn-glow", text: "🎯 Alle (" + thema.aufgaben.length + ")" });
      alleBtn.addEventListener("click", function () { starteMitKurzcheck(fach, thema, null); });
      reihe.appendChild(kurzBtn);
      reihe.appendChild(alleBtn);
      box.appendChild(reihe);
    } else {
      var startBtn = el("button", { class: "btn-primary btn-glow", text: labelWennKurz });
      startBtn.addEventListener("click", function () { starteMitKurzcheck(fach, thema, null); });
      box.appendChild(startBtn);
    }
  }

  function starteMitKurzcheck(fach, thema, limit) {
    if (thema.aufgaben.length >= 5) {
      state.fach = fach;
      state.thema = thema;
      state.geplanteAnzahl = limit;
      state.kurzcheckFragen = shuffle(thema.aufgaben).slice(0, Math.min(3, thema.aufgaben.length));
      state.kurzcheckIndex = 0;
      state.view = "kurzcheck";
      render();
    } else {
      starteUebung(fach, thema, { limit: limit });
    }
  }

  function renderLektion() {
    var thema = state.thema;
    titelEl.textContent = "📖 " + thema.titel;
    var box = el("div", { class: "lektion-box" });
    box.appendChild(el("div", { class: "lektion-emoji", text: thema.icon }));
    box.appendChild(el("h2", { class: "lektion-titel", text: thema.titel }));

    var liste = el("div", { class: "lektion-liste" });
    (thema.lektion || []).forEach(function (satz) {
      liste.appendChild(el("div", { class: "lektion-punkt", text: satz }));
    });
    box.appendChild(liste);

    renderStartBlock(box, state.fach, thema, "⚔️ Mission starten");

    appEl.appendChild(box);
  }

  function renderVokabeln() {
    var thema = state.thema;
    titelEl.textContent = "🗂️ " + thema.titel;
    var box = el("div", { class: "lektion-box" });
    box.appendChild(el("div", { class: "lektion-emoji", text: thema.icon }));
    box.appendChild(el("h2", { class: "lektion-titel", text: thema.titel }));

    if (thema.lektion) {
      var hinweise = el("div", { class: "lektion-liste" });
      thema.lektion.forEach(function (satz) {
        hinweise.appendChild(el("div", { class: "lektion-punkt", text: satz }));
      });
      box.appendChild(hinweise);
    }

    var karten = el("div", { class: "vokabel-liste" });
    thema.vokabeln.forEach(function (v) {
      karten.appendChild(el("div", { class: "vokabel-karte" }, [
        el("div", { class: "vokabel-wort" }, [
          el("span", { class: "vokabel-en", text: v.en }),
          el("span", { class: "vokabel-de", text: v.de })
        ]),
        el("div", { class: "vokabel-satz", text: "„" + v.satz + "“" })
      ]));
    });
    box.appendChild(karten);

    renderStartBlock(box, state.fach, thema, "⚔️ Zur Übung");

    appEl.appendChild(box);
  }

  // ---------- Kurz-Check: 2-3 ungewertete Aufwärm-Fragen ----------
  function renderKurzcheck() {
    titelEl.textContent = "🧠 Kurz-Check";
    var box = el("div", { class: "frage-box" });
    box.appendChild(el("div", { class: "kurzcheck-hinweis", text: "Das zählt noch nicht mit – nur zum Warmwerden! 🔥" }));

    var prozentFertig = Math.round((state.kurzcheckIndex / state.kurzcheckFragen.length) * 100);
    box.appendChild(el("div", { class: "fortschritt-leiste" }, [el("div", { style: "width:" + prozentFertig + "%" })]));

    var aufgabe = state.kurzcheckFragen[state.kurzcheckIndex];
    box.appendChild(el("div", { class: "frage-text", text: (state.kurzcheckIndex + 1) + " / " + state.kurzcheckFragen.length + " — " + aufgabe.frage }));

    renderFrageInhalt(box, aufgabe, function (richtig) {
      var praefix = richtig ? "✅ Genau!" : "💡 Kein Problem, gleich üben wir das genauer:";
      box.appendChild(el("div", { class: "erklaerung", text: praefix + " " + aufgabe.erklaerung }));
      var letzte = state.kurzcheckIndex + 1 >= state.kurzcheckFragen.length;
      var weiterBtn = el("button", { class: "btn-primary btn-glow", text: letzte ? "🚀 Weiter zum Quiz" : "Weiter" });
      weiterBtn.addEventListener("click", function () {
        state.kurzcheckIndex++;
        if (state.kurzcheckIndex >= state.kurzcheckFragen.length) {
          starteUebung(state.fach, state.thema, { limit: state.geplanteAnzahl });
        } else {
          render();
        }
      });
      box.appendChild(weiterBtn);
    });

    appEl.appendChild(box);
  }

  // ---------- Wiederholungsrunde (fachübergreifend, fällige Fragen) ----------
  function starteWiederholung() {
    var faellige = faelligeAufgaben().map(function (e) { return e.aufgabe; });
    if (faellige.length === 0) return;
    starteUebung(null, null, { aufgaben: faellige, modus: "review", limit: 20 });
  }

  function starteUebung(fach, thema, opts) {
    opts = opts || {};
    state.fach = fach;
    state.thema = thema;
    state.modus = opts.modus || "normal";
    var pool = opts.aufgaben || thema.aufgaben;
    var gemischt = shuffle(pool);
    if (opts.limit) gemischt = gemischt.slice(0, opts.limit);
    state.aufgaben = gemischt;
    state.index = 0;
    state.richtigCount = 0;
    state.falscheDiesesmal = [];
    state.view = "uebung";
    render();
  }

  // ---------- Gemeinsame Frage-UI (Mehrfachauswahl oder Texteingabe) ----------
  function renderFrageInhalt(box, aufgabe, onBeantwortet) {
    var beantwortet = false;

    if (aufgabe.typ === "mc") {
      var optionenBox = el("div", { class: "optionen" });
      var optionen = shuffle(aufgabe.optionen);
      var buttons = [];

      optionen.forEach(function (opt) {
        var btn = el("button", { class: "option-btn", text: opt });
        btn.addEventListener("click", function () {
          if (beantwortet) return;
          beantwortet = true;
          var richtig = opt === aufgabe.loesung;
          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.textContent === aufgabe.loesung) b.classList.add("richtig");
            else if (b === btn) b.classList.add("falsch");
          });
          onBeantwortet(richtig);
        });
        buttons.push(btn);
        optionenBox.appendChild(btn);
      });
      box.appendChild(optionenBox);
    } else {
      var inputWrap = el("div", { class: "zahl-eingabe" });
      var input = el("input", {
        type: "text",
        inputmode: aufgabe.typ === "zahl" ? "numeric" : "text",
        autocapitalize: "off",
        autocomplete: "off",
        placeholder: "Deine Antwort"
      });
      var pruefenBtn = el("button", { class: "btn-primary", text: "Prüfen" });
      pruefenBtn.style.width = "auto";
      inputWrap.appendChild(input);
      inputWrap.appendChild(pruefenBtn);
      box.appendChild(inputWrap);

      var pruefen = function () {
        if (beantwortet) return;
        beantwortet = true;
        var wert = (input.value || "").trim().replace(/\s+/g, "");
        var soll = aufgabe.loesung.trim().replace(/\s+/g, "");
        var richtig = wert.toLowerCase() === soll.toLowerCase();
        input.disabled = true;
        input.classList.add(richtig ? "richtig" : "falsch");
        if (!richtig) input.value = input.value + "  (richtig: " + aufgabe.loesung + ")";
        pruefenBtn.disabled = true;
        onBeantwortet(richtig);
      };
      pruefenBtn.addEventListener("click", pruefen);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") pruefen(); });
    }
  }

  function renderUebung() {
    var thema = state.thema;
    titelEl.textContent = state.modus === "review" ? "🔁 Wiederholung" : (thema ? thema.titel : "Übung");

    var box = el("div", { class: "frage-box" });

    var prozentFertig = Math.round((state.index / state.aufgaben.length) * 100);
    box.appendChild(el("div", { class: "fortschritt-leiste" }, [el("div", { style: "width:" + prozentFertig + "%" })]));

    if (thema && thema.text) {
      box.appendChild(el("div", { class: "lesetext", text: thema.text }));
    }

    var aufgabe = state.aufgaben[state.index];

    if (state.modus === "review" && aufgabe._id && AUFGABEN_INDEX[aufgabe._id]) {
      var meta = AUFGABEN_INDEX[aufgabe._id];
      box.appendChild(el("div", { class: "review-tag", text: meta.fachIcon + " " + meta.fachName + " · " + meta.themaTitel }));
    }

    box.appendChild(el("div", { class: "frage-text", text: (state.index + 1) + " / " + state.aufgaben.length + " — " + aufgabe.frage }));

    renderFrageInhalt(box, aufgabe, function (richtig) {
      if (aufgabe._id) aktualisiereLeitner(aufgabe._id, richtig);
      if (richtig) state.richtigCount++;
      else state.falscheDiesesmal.push(aufgabe);
      zeigeErklaerung(box, aufgabe, richtig);
    });

    appEl.appendChild(box);
  }

  var LOB_RICHTIG = ["✅ Genau richtig!", "✅ Klasse gemacht!", "✅ Stark erkannt!", "✅ Super gelöst!"];
  var LOB_FALSCH = ["🤔 Fast! Schau mal:", "💡 Noch nicht ganz. Schau mal:", "🤔 Guter Versuch! Schau mal:"];

  function zeigeErklaerung(box, aufgabe, richtig) {
    var praefix = richtig ? zufallsElement(LOB_RICHTIG) : zufallsElement(LOB_FALSCH);
    box.appendChild(el("div", { class: "erklaerung", text: praefix + " " + aufgabe.erklaerung }));
    var weiterBtn = el("button", { class: "btn-primary", text: state.index + 1 < state.aufgaben.length ? "Weiter" : "Ergebnis anzeigen" });
    weiterBtn.addEventListener("click", function () {
      state.index++;
      if (state.index >= state.aufgaben.length) {
        beendeUebung();
      } else {
        render();
      }
    });
    box.appendChild(weiterBtn);
  }

  function beendeUebung() {
    var prozent = Math.round((state.richtigCount / state.aufgaben.length) * 100);
    var sterne = sterneAusProzent(prozent);

    if (state.modus === "normal" && state.fach && state.thema) {
      var progress = ladeProgress();
      var key = progressKey(state.fach.id, state.thema.id);
      var bisher = progress[key];
      if (!bisher || sterne > bisher.sterne) {
        progress[key] = { sterne: sterne, beste: prozent };
        speichereProgress(progress);
      }
    }

    aktualisiereStreak();

    state.view = "ergebnis";
    state.letztesProzent = prozent;
    state.letzteSterne = sterne;
    render();
  }

  function ergebnisSpruch(sterne) {
    if (sterne === 3) return "🏆 Legendärer Sieg!";
    if (sterne === 2) return "🔥 Starker Kampf!";
    if (sterne === 1) return "✨ Gut gemacht!";
    return "💪 Nächstes Mal schaffst du mehr Sterne!";
  }

  function renderErgebnis() {
    titelEl.textContent = "Ergebnis";
    var box = el("div", { class: "ergebnis-box" }, [
      el("div", { class: "ergebnis-spruch", text: ergebnisSpruch(state.letzteSterne) }),
      el("div", { text: "Du hast " + state.richtigCount + " von " + state.aufgaben.length + " Aufgaben richtig gelöst." }),
      el("div", { class: "ergebnis-sterne", text: sterneAnzeige(state.letzteSterne) }),
      el("div", { class: "ergebnis-text", text: state.letztesProzent + " % richtig" })
    ]);

    if (state.modus === "normal" && state.falscheDiesesmal.length >= 2) {
      var anzahlFalsch = state.falscheDiesesmal.length;
      var retryBtn = el("button", { class: "btn-primary btn-glow", text: "🔁 Nur die " + anzahlFalsch + " Fehler üben" });
      retryBtn.addEventListener("click", function () {
        var wiederholen = state.falscheDiesesmal;
        starteUebung(state.fach, state.thema, { aufgaben: wiederholen, modus: "retry" });
      });
      box.appendChild(retryBtn);
    }

    var reihe = el("div", { class: "button-reihe" });
    var nochmalBtn = el("button", { class: "btn-primary btn-glow", text: state.fach ? "🔁 Nochmal üben" : "🔁 Wiederholung erneut prüfen" });
    nochmalBtn.addEventListener("click", function () {
      if (state.fach) starteUebung(state.fach, state.thema);
      else starteWiederholung();
    });
    var zurueckBtn = el("button", { class: "btn-primary btn-secondary", text: state.fach ? "Zurück zu den Missionen" : "Zurück zur Startseite" });
    zurueckBtn.addEventListener("click", function () { state.view = state.fach ? "themen" : "faecher"; render(); });
    reihe.appendChild(nochmalBtn);
    reihe.appendChild(zurueckBtn);
    box.appendChild(reihe);

    appEl.appendChild(box);
  }

  backBtn.addEventListener("click", function () {
    if (state.view === "themen") state.view = "faecher";
    else if (state.view === "lektion" || state.view === "vokabeln" || state.view === "kurzcheck") state.view = "themen";
    else if (state.view === "uebung" || state.view === "ergebnis") state.view = state.fach ? "themen" : "faecher";
    render();
  });

  // ---------- 30-Minuten-Lernzeit-Timer (sichtbar auf jedem Bildschirm, auch beim Lesen) ----------
  var TIMER_DAUER_SEK = 30 * 60;
  var timerSekunden = TIMER_DAUER_SEK;
  var timerLaeuft = false;
  var timerIntervall = null;

  function formatiereZeit(sek) {
    var m = Math.floor(sek / 60);
    var s = sek % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function aktualisiereTimerAnzeige() {
    if (!timerBtn) return;
    timerBtn.textContent = "⏱️ " + formatiereZeit(timerSekunden);
    timerBtn.classList.toggle("laeuft", timerLaeuft);
    timerBtn.classList.toggle("gleich-null", timerSekunden <= 60 && timerSekunden > 0);
  }
  function pausiereTimer() {
    timerLaeuft = false;
    clearInterval(timerIntervall);
    aktualisiereTimerAnzeige();
  }
  function zeigeTimerEndeMeldung() {
    zeigeToast("🎉 30 Minuten geschafft! Zeit für eine kleine Pause. 💪", "info", 6000);
  }
  function timerTick() {
    timerSekunden--;
    if (timerSekunden <= 0) {
      timerSekunden = 0;
      pausiereTimer();
      zeigeTimerEndeMeldung();
      return;
    }
    aktualisiereTimerAnzeige();
  }
  function starteTimer() {
    if (timerLaeuft) return;
    timerLaeuft = true;
    timerIntervall = setInterval(timerTick, 1000);
    aktualisiereTimerAnzeige();
  }
  if (timerBtn) {
    timerBtn.addEventListener("click", function () {
      if (timerSekunden <= 0) {
        timerSekunden = TIMER_DAUER_SEK;
        starteTimer();
        return;
      }
      if (timerLaeuft) pausiereTimer();
      else starteTimer();
    });
    aktualisiereTimerAnzeige();
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
      if (ANSICHTEN_MIT_LAUFENDER_AUFGABE.indexOf(state.view) !== -1) {
        zeigeToast("😊 Beende erst deine Mission, dann kannst du aktualisieren!", "warn");
        return;
      }
      refreshBtn.classList.add("spin");
      var heute = new Date().toISOString().slice(0, 10);
      try { localStorage.setItem(LS_REFRESH, heute); } catch (e) {}
      if (footDate) footDate.textContent = heute;
      setTimeout(function () {
        var url = new URL(window.location.href);
        url.searchParams.set("_v", Date.now().toString());
        window.location.href = url.toString();
      }, 400);
    });
  }

  if (footDate) {
    var gespeichertesDatum = null;
    try { gespeichertesDatum = localStorage.getItem(LS_REFRESH); } catch (e) {}
    footDate.textContent = gespeichertesDatum || "noch nie";
  }

  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () {});
    });
  }
})();

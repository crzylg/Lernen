(function () {
  "use strict";

  var LS_PROGRESS = "lk5_progress"; // eigener Präfix, damit nichts mit der anderen App im Repo kollidiert
  var LS_REFRESH = "lk5_refresh";

  var AKTIVE_FAECHER = ["mathe", "deutsch", "lesen"];

  var KOMMEND = [
    { name: "Englisch", icon: "🇬🇧" },
    { name: "Erdkunde", icon: "🌍" },
    { name: "Biologie", icon: "🌱" }
  ];

  var appEl = document.getElementById("app");
  var titelEl = document.getElementById("titel");
  var backBtn = document.getElementById("btnZurueck");
  var refreshBtn = document.getElementById("btnRefresh");
  var footDate = document.getElementById("footDate");

  var state = {
    view: "faecher",
    fach: null,
    thema: null,
    aufgaben: [],
    index: 0,
    richtigCount: 0
  };

  function ladeProgress() {
    try { return JSON.parse(localStorage.getItem(LS_PROGRESS)) || {}; }
    catch (e) { return {}; }
  }
  function speichereProgress(p) {
    try { localStorage.setItem(LS_PROGRESS, JSON.stringify(p)); } catch (e) {}
  }
  function progressKey(fachId, themaId) { return fachId + "-" + themaId; }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

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

  function render() {
    appEl.innerHTML = "";
    backBtn.hidden = state.view === "faecher";
    if (state.view === "faecher") renderFaecher();
    else if (state.view === "themen") renderThemen();
    else if (state.view === "lektion") renderLektion();
    else if (state.view === "uebung") renderUebung();
    else if (state.view === "ergebnis") renderErgebnis();
  }

  function renderFaecher() {
    titelEl.textContent = "⚔️ Idol Academy · 5. Klasse";
    var progress = ladeProgress();
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
        if (thema.lektion) {
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

    var startBtn = el("button", { class: "btn-primary btn-glow", text: "⚔️ Mission starten" });
    startBtn.addEventListener("click", function () { starteUebung(state.fach, thema); });
    box.appendChild(startBtn);

    appEl.appendChild(box);
  }

  function starteUebung(fach, thema) {
    state.fach = fach;
    state.thema = thema;
    state.aufgaben = shuffle(thema.aufgaben);
    state.index = 0;
    state.richtigCount = 0;
    state.view = "uebung";
    render();
  }

  function renderUebung() {
    var thema = state.thema;
    titelEl.textContent = thema.titel;

    var box = el("div", { class: "frage-box" });

    var prozentFertig = Math.round((state.index / state.aufgaben.length) * 100);
    var leiste = el("div", { class: "fortschritt-leiste" }, [el("div", { style: "width:" + prozentFertig + "%" })]);
    box.appendChild(leiste);

    if (thema.text) {
      box.appendChild(el("div", { class: "lesetext", text: thema.text }));
    }

    var aufgabe = state.aufgaben[state.index];
    box.appendChild(el("div", { class: "frage-text", text: (state.index + 1) + " / " + state.aufgaben.length + " — " + aufgabe.frage }));

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
          if (richtig) state.richtigCount++;
          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.textContent === aufgabe.loesung) b.classList.add("richtig");
            else if (b === btn) b.classList.add("falsch");
          });
          zeigeErklaerung(box, aufgabe, richtig);
        });
        buttons.push(btn);
        optionenBox.appendChild(btn);
      });
      box.appendChild(optionenBox);
    } else {
      var inputWrap = el("div", { class: "zahl-eingabe" });
      var input = el("input", { type: "text", inputmode: "numeric", placeholder: "Deine Antwort" });
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
        if (richtig) state.richtigCount++;
        input.disabled = true;
        input.classList.add(richtig ? "richtig" : "falsch");
        if (!richtig) input.value = input.value + "  (richtig: " + aufgabe.loesung + ")";
        pruefenBtn.disabled = true;
        zeigeErklaerung(box, aufgabe, richtig);
      };
      pruefenBtn.addEventListener("click", pruefen);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") pruefen(); });
    }

    appEl.appendChild(box);
  }

  function zeigeErklaerung(box, aufgabe, richtig) {
    box.appendChild(el("div", { class: "erklaerung", text: (richtig ? "✅ Richtig! " : "❌ Nicht ganz. ") + aufgabe.erklaerung }));
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

    var progress = ladeProgress();
    var key = progressKey(state.fach.id, state.thema.id);
    var bisher = progress[key];
    if (!bisher || sterne > bisher.sterne) {
      progress[key] = { sterne: sterne, beste: prozent };
      speichereProgress(progress);
    }

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

    var reihe = el("div", { class: "button-reihe" });
    var nochmalBtn = el("button", { class: "btn-primary btn-glow", text: "🔁 Nochmal üben" });
    nochmalBtn.addEventListener("click", function () { starteUebung(state.fach, state.thema); });
    var zurueckBtn = el("button", { class: "btn-primary btn-secondary", text: "Zurück zu den Missionen" });
    zurueckBtn.addEventListener("click", function () { state.view = "themen"; render(); });
    reihe.appendChild(nochmalBtn);
    reihe.appendChild(zurueckBtn);
    box.appendChild(reihe);

    appEl.appendChild(box);
  }

  backBtn.addEventListener("click", function () {
    if (state.view === "themen") state.view = "faecher";
    else if (state.view === "lektion") state.view = "themen";
    else if (state.view === "uebung" || state.view === "ergebnis") state.view = "themen";
    render();
  });

  if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
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
})();

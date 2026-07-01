/* Lernplan KI & Genesys - App-Logik
   Sehr einfaches Deutsch. IT-Begriffe im Original. */
(function () {
  "use strict";

  var DATA = window.CURRICULUM || { modules: [], total: 0, updated: "" };
  var LS_DONE = "lernplan_done_v1";
  var LS_OPEN = "lernplan_open_v1";
  var LS_REFRESH = "lernplan_refresh_v1";

  var content = document.getElementById("content");
  var progressFill = document.getElementById("progressFill");
  var progressText = document.getElementById("progressText");
  var searchInput = document.getElementById("search");
  var refreshBtn = document.getElementById("refreshBtn");
  var toast = document.getElementById("toast");

  var done = load(LS_DONE, {});
  var openState = load(LS_OPEN, {});

  function load(k, def) {
    try { return JSON.parse(localStorage.getItem(k)) || def; } catch (e) { return def; }
  }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------- Link-Builder ---------- */
  function ytLink(q) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
  }
  function fallbackSrc(name) {
    // offizielle Genesys-/Google-Suche als solide Quelle, wenn keine feste Quelle hinterlegt ist
    return "https://www.google.com/search?q=" + encodeURIComponent(name + " offizielle Dokumentation");
  }

  /* ---------- Rendering ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function topicHTML(tp) {
    var isDone = !!done[tp.nr];
    var links = "";

    // YouTube (immer aktuelle Suche)
    links += '<a class="l-yt" target="_blank" rel="noopener" href="' + ytLink(tp.yt) + '">▶️ YouTube</a>';

    // Offizielle Quelle
    var srcUrl = (tp.src && tp.src[1]) ? tp.src[1] : ((tp.src && tp.src[0]) ? fallbackSrc(tp.t) : fallbackSrc(tp.t));
    var srcTitle = (tp.src && tp.src[0]) ? tp.src[0] : "Offizielle Quelle";
    links += '<a class="l-src" target="_blank" rel="noopener" href="' + srcUrl + '">📖 ' + esc(srcTitle) + '</a>';

    // GitHub-Bibliotheken
    (tp.gh || []).forEach(function (g) {
      links += '<a class="l-gh" target="_blank" rel="noopener" href="' + g[1] + '">💻 ' + esc(g[0]) + '</a>';
    });
    // Artikel / Studien
    (tp.art || []).forEach(function (a) {
      links += '<a class="l-art" target="_blank" rel="noopener" href="' + a[1] + '">📰 ' + esc(a[0]) + '</a>';
    });

    var pts = (tp.pts || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");

    var detail = tp.detail ? '<p class="detail">' + esc(tp.detail) + "</p>" : "";
    var bsp = tp.bsp ? '<p class="bsp"><b>💡 Beispiel:</b> ' + esc(tp.bsp) + "</p>" : "";
    var merke = tp.merke ? '<p class="merke"><b>📌 Merke:</b> ' + esc(tp.merke) + "</p>" : "";
    var deep = (detail || bsp || merke) ? ' data-deep="1"' : "";

    return (
      '<article class="topic' + (isDone ? " done" : "") + '" data-nr="' + tp.nr + '" data-name="' + esc((tp.t + " " + tp.was).toLowerCase()) + '"' + deep + ">" +
        '<div class="topic-head">' +
          '<div class="check" data-check="' + tp.nr + '">✓</div>' +
          '<div class="topic-t"><span class="nr">Schritt ' + tp.nr + (deep ? ' · ausführlich' : '') + '</span><h4>' + esc(tp.t) + "</h4></div>" +
          '<span class="chev2">▶</span>' +
        "</div>" +
        '<div class="topic-body">' +
          '<p class="was">' + esc(tp.was) + "</p>" +
          detail +
          "<ul>" + pts + "</ul>" +
          bsp + merke +
          '<div class="links">' + links + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function moduleHTML(mod, idx, topicsDoneCount) {
    var first = mod.topics[0] ? mod.topics[0].nr : 0;
    var last = mod.topics[mod.topics.length - 1] ? mod.topics[mod.topics.length - 1].nr : 0;
    var isOpen = openState[idx] !== undefined ? openState[idx] : (idx === 0);
    var topics = mod.topics.map(topicHTML).join("");
    return (
      '<section class="module' + (isOpen ? " open" : "") + '" data-mod="' + idx + '">' +
        '<div class="mod-head" data-modhead="' + idx + '">' +
          '<span class="mod-emoji">' + mod.emoji + "</span>" +
          '<div class="mod-titles"><h3>' + esc(mod.title) + "</h3>" +
            '<p class="ziel">' + esc(mod.ziel) + "</p></div>" +
          '<div class="mod-meta">' +
            '<span class="mod-num">Schritt ' + first + "–" + last + "</span>" +
            '<span class="mod-count">' + topicsDoneCount + "/" + mod.topics.length + " ✓</span>" +
          "</div>" +
          '<span class="chev">▶</span>' +
        "</div>" +
        '<div class="topics">' + topics + "</div>" +
      "</section>"
    );
  }

  function render() {
    var introLegend =
      '<div class="intro">' +
        "<h2>Dein Weg von Null zum KI- &amp; Genesys-Profi</h2>" +
        "<p>Arbeite die Module <b>von oben nach unten</b> durch. Jedes Thema ist in sehr einfachem Deutsch erklaert – " +
        "Fachbegriffe (IT-Begriffe) bleiben im Original. Tippe ein Thema an, um Erklaerung, Unterpunkte, YouTube-Videos, " +
        "offizielle Quellen und GitHub-Bibliotheken zu sehen. Tippe das Kaestchen, um es als gelernt zu markieren.</p>" +
        '<div class="legend">' +
          "<span>▶️ YouTube-Video</span><span>📖 Offizielle Quelle</span>" +
          "<span>💻 GitHub-Bibliothek</span><span>📰 Artikel / Studie</span>" +
          "<span>✓ Fortschritt wird gespeichert</span>" +
        "</div>" +
      "</div>";

    var mods = DATA.modules.map(function (mod, idx) {
      var dc = mod.topics.filter(function (t) { return done[t.nr]; }).length;
      return moduleHTML(mod, idx, dc);
    }).join("");

    content.innerHTML = introLegend + mods;
    updateProgress();

    document.getElementById("footDate").textContent = load(LS_REFRESH, DATA.updated) || DATA.updated;
    document.getElementById("footCount").textContent = DATA.total;
  }

  function updateProgress() {
    var total = DATA.total || 1;
    var d = Object.keys(done).filter(function (k) { return done[k]; }).length;
    var pct = Math.round((d / total) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = pct + " %";
    // Modul-Zaehler live aktualisieren
    DATA.modules.forEach(function (mod, idx) {
      var el = document.querySelector('.module[data-mod="' + idx + '"] .mod-count');
      if (el) {
        var dc = mod.topics.filter(function (t) { return done[t.nr]; }).length;
        el.textContent = dc + "/" + mod.topics.length + " ✓";
      }
    });
  }

  /* ---------- Interaktion (Event-Delegation) ---------- */
  content.addEventListener("click", function (e) {
    var checkEl = e.target.closest("[data-check]");
    if (checkEl) {
      var nr = checkEl.getAttribute("data-check");
      done[nr] = !done[nr];
      save(LS_DONE, done);
      var card = checkEl.closest(".topic");
      card.classList.toggle("done", !!done[nr]);
      updateProgress();
      e.stopPropagation();
      return;
    }

    var modHead = e.target.closest("[data-modhead]");
    if (modHead) {
      var mi = modHead.getAttribute("data-modhead");
      var section = modHead.closest(".module");
      var nowOpen = !section.classList.contains("open");
      section.classList.toggle("open", nowOpen);
      openState[mi] = nowOpen;
      save(LS_OPEN, openState);
      return;
    }

    var head = e.target.closest(".topic-head");
    if (head) {
      head.closest(".topic").classList.toggle("expanded");
    }
  });

  /* ---------- Suche ---------- */
  searchInput.addEventListener("input", function () {
    var q = searchInput.value.trim().toLowerCase();
    var anyModuleVisible = false;
    document.querySelectorAll(".module").forEach(function (section) {
      var visibleTopics = 0;
      section.querySelectorAll(".topic").forEach(function (t) {
        var match = !q || t.getAttribute("data-name").indexOf(q) !== -1;
        t.style.display = match ? "" : "none";
        if (match) visibleTopics++;
      });
      var show = visibleTopics > 0;
      section.style.display = show ? "" : "none";
      if (show) anyModuleVisible = true;
      if (q) section.classList.add("open");
    });
    var introEl = document.querySelector(".intro");
    if (introEl) introEl.style.display = q ? "none" : "";
    var old = document.getElementById("noResult");
    if (old) old.remove();
    if (!anyModuleVisible) {
      var div = document.createElement("div");
      div.id = "noResult";
      div.className = "empty";
      div.textContent = "Kein Thema gefunden fuer „" + searchInput.value + "“.";
      content.appendChild(div);
    }
  });

  /* ---------- Quellen aktualisieren ---------- */
  function showToast(msg) {
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.hidden = true; }, 2600);
  }

  refreshBtn.addEventListener("click", function () {
    refreshBtn.classList.add("spin");
    // Datum der letzten Aktualisierung neu setzen; Quell- und YouTube-Links
    // sind Live-Suchen und zeigen dadurch automatisch die neuesten Inhalte.
    var today = new Date().toISOString().slice(0, 10);
    save(LS_REFRESH, today);
    document.getElementById("footDate").textContent = today;

    // Wenn online: Service Worker Cache erneuern, damit die App aktuell bleibt.
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "refresh" });
    }
    setTimeout(function () {
      refreshBtn.classList.remove("spin");
      showToast("✅ Quellen aktualisiert – YouTube & offizielle Seiten zeigen jetzt die neuesten Inhalte.");
    }, 900);
  });

  /* ---------- Service Worker (offline / installierbar) ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  render();
})();

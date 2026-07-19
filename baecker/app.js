/* Bäckerei-Rechner — Logik. Alles läuft lokal (localStorage), kein Server. */
(function () {
  "use strict";

  var STORAGE = {
    ingredients: "baecker_ingredients",
    recipes: "baecker_recipes",
    lang: "baecker_lang",
  };

  var state = {
    lang: "de",
    ingredients: [],
    recipes: [],
    currentItems: [], // { ingredientId, amount }
    editingIngredientId: null,
    editingRecipeId: null,
  };

  // ---------- Persistence ----------
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // ---------- Helpers ----------
  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || key;
  }

  function formatMoney(n) {
    if (!isFinite(n)) n = 0;
    return n.toFixed(2).replace(".", ",") + " €";
  }

  function unitLabel(unit) {
    if (unit === "g") return "g";
    if (unit === "ml") return "ml";
    return t("unitStk");
  }

  function pricePerUnit(ing) {
    if (!ing.packageAmount) return 0;
    return ing.packagePrice / ing.packageAmount;
  }

  function pricePerLabel(ing) {
    if (ing.unit === "Stk") {
      return formatMoney(pricePerUnit(ing)) + " / " + unitLabel(ing.unit);
    }
    return formatMoney(pricePerUnit(ing) * 100) + " / 100" + unitLabel(ing.unit);
  }

  function getIngredientById(id) {
    for (var i = 0; i < state.ingredients.length; i++) {
      if (state.ingredients[i].id === id) return state.ingredients[i];
    }
    return null;
  }

  function itemCost(item) {
    var ing = getIngredientById(item.ingredientId);
    if (!ing) return 0;
    return pricePerUnit(ing) * item.amount;
  }

  function recipeTotal(items) {
    var sum = 0;
    for (var i = 0; i < items.length; i++) sum += itemCost(items[i]);
    return sum;
  }

  function showToast(msg) {
    var el = document.getElementById("toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(showToast._tm);
    showToast._tm = setTimeout(function () {
      el.hidden = true;
    }, 2200);
  }

  // ---------- i18n rendering ----------
  function renderTexts() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    document.getElementById("pageTitle").textContent = t("appTitle");
    document.getElementById("langBtnLbl").textContent = t("langBtn");
    document.getElementById("ingSubmitBtn").textContent = state.editingIngredientId
      ? t("updateIngredientBtn")
      : t("addIngredientBtn");
  }

  function setLang(lang) {
    state.lang = lang;
    save(STORAGE.lang, lang);
    renderTexts();
    renderAll();
  }

  // ---------- Ingredients ----------
  function renderIngredients() {
    var body = document.getElementById("ingredientsBody");
    body.innerHTML = "";
    state.ingredients.forEach(function (ing) {
      var tr = document.createElement("tr");
      tr.dataset.id = ing.id;
      tr.innerHTML =
        "<td>" + escapeHtml(ing.name) + "</td>" +
        "<td class=\"num\">" + ing.packageAmount + " " + unitLabel(ing.unit) + " – " + formatMoney(ing.packagePrice) + "</td>" +
        "<td class=\"num\">" + pricePerLabel(ing) + "</td>" +
        "<td><div class=\"row-actions\">" +
        "<button class=\"icon-btn edit-ing\" title=\"" + t("editBtn") + "\">✎</button>" +
        "<button class=\"icon-btn danger delete-ing\" title=\"" + t("deleteBtn") + "\">🗑</button>" +
        "</div></td>";
      body.appendChild(tr);
    });
    document.getElementById("noIngredientsMsg").hidden = state.ingredients.length > 0;
  }

  function renderCalcSelect() {
    var sel = document.getElementById("calcIngredientSelect");
    var prevValue = sel.value;
    sel.innerHTML = "<option value=\"\">" + t("selectIngredientPlaceholder") + "</option>";
    state.ingredients.forEach(function (ing) {
      var opt = document.createElement("option");
      opt.value = ing.id;
      opt.textContent = ing.name + " (" + pricePerLabel(ing) + ")";
      sel.appendChild(opt);
    });
    if (state.ingredients.some(function (i) { return i.id === prevValue; })) {
      sel.value = prevValue;
    }
    document.getElementById("needIngredientsMsg").hidden = state.ingredients.length > 0;
    document.getElementById("calculatorForm").style.display = state.ingredients.length > 0 ? "" : "none";
  }

  function resetIngredientForm() {
    state.editingIngredientId = null;
    document.getElementById("ingredientForm").reset();
    document.getElementById("ingCancelBtn").hidden = true;
    document.getElementById("ingSubmitBtn").textContent = t("addIngredientBtn");
  }

  function submitIngredientForm(e) {
    e.preventDefault();
    var name = document.getElementById("ingName").value.trim();
    var price = parseFloat(document.getElementById("ingPrice").value);
    var amount = parseFloat(document.getElementById("ingAmount").value);
    var unit = document.getElementById("ingUnit").value;

    if (!name || !isFinite(price) || price < 0 || !isFinite(amount) || amount <= 0) {
      showToast(t("fillAllFields"));
      return;
    }

    if (state.editingIngredientId) {
      var ing = getIngredientById(state.editingIngredientId);
      if (ing) {
        ing.name = name;
        ing.packagePrice = price;
        ing.packageAmount = amount;
        ing.unit = unit;
      }
      showToast(t("toastIngredientUpdated"));
    } else {
      state.ingredients.push({ id: uid(), name: name, packagePrice: price, packageAmount: amount, unit: unit });
      showToast(t("toastIngredientAdded"));
    }
    save(STORAGE.ingredients, state.ingredients);
    resetIngredientForm();
    renderIngredients();
    renderCalcSelect();
  }

  function startEditIngredient(id) {
    var ing = getIngredientById(id);
    if (!ing) return;
    state.editingIngredientId = id;
    document.getElementById("ingName").value = ing.name;
    document.getElementById("ingPrice").value = ing.packagePrice;
    document.getElementById("ingAmount").value = ing.packageAmount;
    document.getElementById("ingUnit").value = ing.unit;
    document.getElementById("ingCancelBtn").hidden = false;
    document.getElementById("ingSubmitBtn").textContent = t("updateIngredientBtn");
    document.getElementById("ingredientForm").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function deleteIngredient(id) {
    if (!confirm(t("confirmDeleteIngredient"))) return;
    state.ingredients = state.ingredients.filter(function (i) { return i.id !== id; });
    save(STORAGE.ingredients, state.ingredients);
    if (state.editingIngredientId === id) resetIngredientForm();
    renderIngredients();
    renderCalcSelect();
    showToast(t("toastIngredientDeleted"));
  }

  // ---------- Calculator / current recipe ----------
  function renderRecipeItems() {
    var body = document.getElementById("recipeItemsBody");
    body.innerHTML = "";
    state.currentItems.forEach(function (item, idx) {
      var ing = getIngredientById(item.ingredientId);
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" + (ing ? escapeHtml(ing.name) : "?") + "</td>" +
        "<td class=\"num\">" + item.amount + " " + (ing ? unitLabel(ing.unit) : "") + "</td>" +
        "<td class=\"num\">" + formatMoney(itemCost(item)) + "</td>" +
        "<td><button class=\"icon-btn danger remove-item\" data-idx=\"" + idx + "\">✕</button></td>";
      body.appendChild(tr);
    });
    document.getElementById("noRecipeItemsMsg").hidden = state.currentItems.length > 0;
    document.getElementById("recipeTotal").textContent = formatMoney(recipeTotal(state.currentItems));
  }

  function addItemToRecipe() {
    var sel = document.getElementById("calcIngredientSelect");
    var amountInput = document.getElementById("calcAmount");
    var ingredientId = sel.value;
    var amount = parseFloat(amountInput.value);
    if (!ingredientId || !isFinite(amount) || amount <= 0) {
      showToast(t("fillAllFields"));
      return;
    }
    state.currentItems.push({ ingredientId: ingredientId, amount: amount });
    amountInput.value = "";
    renderRecipeItems();
    showToast(t("toastItemAdded"));
  }

  function removeItemFromRecipe(idx) {
    state.currentItems.splice(idx, 1);
    renderRecipeItems();
  }

  function resetRecipeForm() {
    state.currentItems = [];
    state.editingRecipeId = null;
    document.getElementById("recipeNameInput").value = "";
    renderRecipeItems();
  }

  function saveRecipe() {
    var name = document.getElementById("recipeNameInput").value.trim();
    if (!name) {
      showToast(t("recipeNameRequired"));
      return;
    }
    if (state.currentItems.length === 0) {
      showToast(t("recipeEmptyWarn"));
      return;
    }
    if (state.editingRecipeId) {
      var recipe = state.recipes.find(function (r) { return r.id === state.editingRecipeId; });
      if (recipe) {
        recipe.name = name;
        recipe.items = state.currentItems.slice();
      }
    } else {
      state.recipes.push({
        id: uid(),
        name: name,
        items: state.currentItems.slice(),
        createdAt: Date.now(),
      });
    }
    save(STORAGE.recipes, state.recipes);
    showToast(t("toastRecipeSaved"));
    resetRecipeForm();
    renderRecipesList();
    switchView("recipes");
  }

  function loadRecipeIntoCalculator(id) {
    var recipe = state.recipes.find(function (r) { return r.id === id; });
    if (!recipe) return;
    state.editingRecipeId = recipe.id;
    state.currentItems = recipe.items.slice();
    document.getElementById("recipeNameInput").value = recipe.name;
    renderRecipeItems();
    switchView("calculator");
  }

  function deleteRecipe(id) {
    if (!confirm(t("confirmDeleteRecipe"))) return;
    state.recipes = state.recipes.filter(function (r) { return r.id !== id; });
    save(STORAGE.recipes, state.recipes);
    if (state.editingRecipeId === id) resetRecipeForm();
    renderRecipesList();
    showToast(t("toastRecipeDeleted"));
  }

  function renderRecipesList() {
    var list = document.getElementById("recipesList");
    list.innerHTML = "";
    state.recipes.forEach(function (recipe) {
      var total = recipeTotal(recipe.items);
      var div = document.createElement("div");
      div.className = "recipe-card";
      div.innerHTML =
        "<div class=\"recipe-card-main\" data-id=\"" + recipe.id + "\">" +
        "<p class=\"recipe-card-name\">" + escapeHtml(recipe.name) + "</p>" +
        "<p class=\"recipe-card-meta\">" + recipe.items.length + " × " + t("recipeItemsLabel") + "</p>" +
        "</div>" +
        "<div class=\"recipe-card-total\">" + formatMoney(total) + "</div>" +
        "<div class=\"recipe-card-actions\">" +
        "<button class=\"icon-btn danger delete-recipe\" data-id=\"" + recipe.id + "\">🗑</button>" +
        "</div>";
      list.appendChild(div);
    });
    document.getElementById("noRecipesMsg").hidden = state.recipes.length > 0;
  }

  // ---------- Tabs ----------
  function switchView(view) {
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.classList.toggle("active", tab.dataset.view === view);
    });
    document.querySelectorAll(".view").forEach(function (sec) {
      sec.classList.toggle("active", sec.id === "view-" + view);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderAll() {
    renderIngredients();
    renderCalcSelect();
    renderRecipeItems();
    renderRecipesList();
  }

  // ---------- Init ----------
  function init() {
    state.lang = load(STORAGE.lang, "de");
    state.ingredients = load(STORAGE.ingredients, []);
    state.recipes = load(STORAGE.recipes, []);

    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        switchView(tab.dataset.view);
      });
    });

    document.getElementById("langBtn").addEventListener("click", function () {
      setLang(state.lang === "de" ? "uk" : "de");
    });

    document.getElementById("ingredientForm").addEventListener("submit", submitIngredientForm);
    document.getElementById("ingCancelBtn").addEventListener("click", resetIngredientForm);
    document.getElementById("ingredientsBody").addEventListener("click", function (e) {
      var tr = e.target.closest("tr");
      if (!tr) return;
      var id = tr.dataset.id;
      if (e.target.closest(".edit-ing")) startEditIngredient(id);
      if (e.target.closest(".delete-ing")) deleteIngredient(id);
    });

    document.getElementById("calcAddBtn").addEventListener("click", addItemToRecipe);
    document.getElementById("recipeItemsBody").addEventListener("click", function (e) {
      var btn = e.target.closest(".remove-item");
      if (btn) removeItemFromRecipe(parseInt(btn.dataset.idx, 10));
    });
    document.getElementById("saveRecipeBtn").addEventListener("click", saveRecipe);
    document.getElementById("newRecipeBtn").addEventListener("click", resetRecipeForm);

    document.getElementById("recipesList").addEventListener("click", function (e) {
      var delBtn = e.target.closest(".delete-recipe");
      if (delBtn) {
        deleteRecipe(delBtn.dataset.id);
        return;
      }
      var main = e.target.closest(".recipe-card-main");
      if (main) loadRecipeIntoCalculator(main.dataset.id);
    });

    renderTexts();
    renderAll();

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

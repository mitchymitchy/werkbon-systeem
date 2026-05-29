const STORAGE_KEY = "montagekoffer-mvp-v12";

const ORDER_STATUSES = ["Niet besteld", "Besteld", "Ontvangen", "Aangevuld"];

const seedUsers = [
  {
    id: "user-mechanic-demo",
    name: "Demo Monteur",
    email: "monteur@alffinstallaties.nl",
    password: "monteur123",
    role: "mechanic",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "user-office-demo",
    name: "Kantoor Alff",
    email: "kantoor@alffinstallaties.nl",
    password: "kantoor123",
    role: "office_admin",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
];

const seedKits = [
  { id: "M001", name: "M001", description: "Koppelingen / appendages", active: true },
  { id: "M004", name: "M004", description: "Rookgas / condensmateriaal", active: true },
];

const seedLocations = [
  {
    id: "loc-rookgas-magazijn",
    name: "Rookgas magazijn",
    type: "magazijn",
    description: "Centrale voorraad voor rookgas- en condensmateriaal.",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "loc-garage-box",
    name: "Garage Box",
    type: "magazijn",
    description: "Centrale voorraad waarmee montagekoffers kunnen worden aangevuld.",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "loc-ketel-box",
    name: "Ketel Box",
    type: "magazijn",
    description: "Voorraadlocatie voor ketelgerelateerde onderdelen en aanvulmateriaal.",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
];

const m001 = [
  [4, "sok 22"],
  [4, "sok 15"],
  [4, "knie 22"],
  [4, "knie 15"],
  [10, "wartelmoer 22"],
  [10, "wartelmoer 15"],
  [10, "knelring 22"],
  [10, "knelring 15"],
  [2, "t stuk 22"],
  [2, "t stuk 15"],
  [2, "t stuk 22-15-22"],
  [2, "schroefbus 15-1/2"],
  [2, "t stuk 22-1/2-22"],
  [2, "puntstuk 15-1/2"],
  [2, "t stuk 22-22-1/2"],
  [2, "t stuk 15-1/2-15"],
  [2, "t stuk 22-22-15"],
  [2, "puntstuk haaks 15-1/2"],
  [2, "schroefbus haaks 15-1/2"],
  [2, "verloop 22-15 haaks"],
  [1, "t stuk 15-15-1/2"],
  [2, "verloop 22-15 recht"],
  [1, "puntstuk 15-3/4"],
  [1, "schroefbus 15-3/4"],
  [1, "puntstuk haaks 15-3/4"],
  [1, "schroefbus haaks 15-3/4"],
  [6, "Walraven Bismat 15-18 mm"],
  [6, "Walraven Bismat 20-23"],
  [4, "Walraven Bismat 31-35"],
  [2, "slangkoppelstuk"],
];

const m004 = [
  [4, "Buho buis 80 250"],
  [2, "Buho easysafe 60/100-250"],
  [2, "Buho buis 80 500"],
  [1, "Buho easysafe 60/100-500"],
  [4, "Buho bocht 80 45°"],
  [2, "Buho easysafe 60/100 bocht 45°"],
  [4, "Buho bocht 80 90°"],
  [2, "Buho easysafe 60/100 bocht 90°"],
  [4, "Buho beugel 80"],
  [4, "Buho easysafe montagebeugel 100"],
  [4, "bocht 32 45° m/m"],
  [1, "Buho dakbeschotplaat dampdicht"],
  [4, "bocht 32 45° m/s"],
  [4, "bocht 32 90° m/m"],
  [4, "bocht 32 90° m/s"],
  [2, "mof 32"],
  [1, "t stuk 32 45°"],
  [1, "t stuk 32 90°"],
  [2, "mof 40"],
  [2, "verloop 40-32"],
  [1, "schuif mof 32"],
  [1, "schuif mof 40"],
  [1, "sifon 32"],
];

function buildArticles() {
  const priceByKit = {
    M001: 3.45,
    M004: 12.75,
  };
  const fromRows = (kitId, rows) =>
    rows.map(([defaultQuantity, description], index) => ({
      id: `${kitId}-${String(index + 1).padStart(3, "0")}`,
      kitId,
      description,
      defaultQuantity,
      garageStock: defaultQuantity * 4,
      garageMinimumStock: Math.max(2, defaultQuantity),
      garageReorderPoint: Math.max(4, defaultQuantity * 2),
      currentStock: defaultQuantity,
      minimumStock: Math.max(1, Math.ceil(defaultQuantity * 0.25)),
      lastRestockedAt: "",
      lastUsedAt: "",
      purchasePrice: Number((priceByKit[kitId] + index * 0.37).toFixed(2)),
      supplierArticleNumber: `${kitId}-${String(1000 + index)}`,
      priceUpdatedAt: "2026-05-29",
      priceSource: "handmatig",
      orderStatus: "Niet besteld",
      active: true,
    }));

  return [...fromRows("M001", m001), ...fromRows("M004", m004)];
}

function createInitialState() {
  const state = {
    kits: seedKits,
    articles: buildArticles(),
    projects: [],
    usages: [],
    orderLines: [],
    locations: seedLocations,
    users: seedUsers,
    session: null,
  };
  addDemoData(state);
  return state;
}

let state = loadState();
let ui = {
  kitFilter: "ALL",
  search: "",
  dashboardTab: "Projecten",
  orderSearch: "",
  orderKit: "ALL",
  orderStatus: "ALL",
  orderSupplier: "ALL",
  selectedOrderLineIds: [],
  costProject: "ALL",
  costTechnician: "ALL",
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return createInitialState();
  try {
    const parsed = JSON.parse(raw);
    return normalizeState({ ...createInitialState(), ...parsed });
  } catch {
    return createInitialState();
  }
}

function normalizeState(input) {
  const existingLocations = input.locations || input.warehouses || [];
  const mergedLocations = [...existingLocations];
  seedLocations.forEach((location) => {
    if (!mergedLocations.some((item) => item.id === location.id || item.name.toLowerCase() === location.name.toLowerCase())) {
      mergedLocations.push(location);
    }
  });
  const existingUsers = input.users || [];
  const mergedUsers = [...existingUsers];
  seedUsers.forEach((user) => {
    if (!mergedUsers.some((item) => item.email.toLowerCase() === user.email.toLowerCase())) mergedUsers.push(user);
  });
  const normalized = {
    ...input,
    orderLines: input.orderLines || [],
    locations: mergedLocations,
    users: mergedUsers,
    session: input.session || null,
  };
  normalized.articles = (normalized.articles || []).map((article) => ({
    ...Object.fromEntries(Object.entries(article).filter(([key]) => key !== "supplier")),
    garageStock: article.garageStock ?? article.defaultQuantity * 4,
    garageMinimumStock: article.garageMinimumStock ?? Math.max(2, article.defaultQuantity),
    garageReorderPoint: article.garageReorderPoint ?? Math.max(4, article.defaultQuantity * 2),
    currentStock: article.currentStock ?? article.defaultQuantity,
    minimumStock: article.minimumStock ?? Math.max(1, Math.ceil(article.defaultQuantity * 0.25)),
    lastRestockedAt: article.lastRestockedAt || "",
    lastUsedAt: article.lastUsedAt || "",
    supplierArticleNumber: article.supplierArticleNumber || "",
    purchasePrice: Number(article.purchasePrice) || 0,
    priceUpdatedAt: article.priceUpdatedAt || "",
    priceSource: article.priceSource || "handmatig",
    orderStatus: article.orderStatus || "Niet besteld",
  }));
  normalized.usages = (normalized.usages || []).map((usage) => {
    const article = (normalized.articles || []).find((item) => item.id === usage.articleId);
    const price = usage.purchasePriceAtTime ?? article?.purchasePrice ?? 0;
    return {
      ...usage,
      purchasePriceAtTime: usage.purchasePriceAtTime ?? price,
      totalPrice: usage.totalPrice ?? usage.usedQuantity * price,
    };
  });
  return normalized;
}

function addDemoData(demoState) {
  const projectA = {
    id: "demo-project-001",
    projectName: "Demo - Ketelvervanging familie De Vries",
    customer: "Familie De Vries",
    address: "Havenstraat 12, Rotterdam",
    technician: "Sam",
    mechanicId: "user-mechanic-demo",
    date: "2026-05-27",
    selectedKitIds: ["M001", "M004"],
    status: "afgerond",
    createdAt: "2026-05-27T08:30:00.000Z",
    completedAt: "2026-05-27T15:20:00.000Z",
    assignedMechanicId: "user-mechanic-demo",
    createdBy: "user-office-demo",
    inventoryProcessed: true,
  };
  const projectB = {
    id: "demo-project-002",
    projectName: "Demo - Servicebeurt rookgasafvoer",
    customer: "VvE Noorderlicht",
    address: "Laan van Meerdervoort 48, Den Haag",
    technician: "Milan",
    mechanicId: "user-mechanic-demo",
    date: "2026-05-28",
    selectedKitIds: ["M004"],
    status: "afgerond",
    createdAt: "2026-05-28T09:00:00.000Z",
    completedAt: "2026-05-28T12:10:00.000Z",
    assignedMechanicId: "user-mechanic-demo",
    createdBy: "user-office-demo",
    inventoryProcessed: true,
  };
  demoState.projects.push(projectA, projectB);

  const demoRows = [
    [projectA.id, "M001-001", 3, "Niet besteld"],
    [projectA.id, "M001-005", 7, "Besteld"],
    [projectA.id, "M004-007", 4, "Ontvangen"],
    [projectB.id, "M004-001", 2, "Niet besteld"],
    [projectB.id, "M004-013", 4, "Aangevuld"],
  ];

  demoRows.forEach(([projectId, articleId, usedQuantity, status], index) => {
    const article = demoState.articles.find((item) => item.id === articleId);
    const project = demoState.projects.find((item) => item.id === projectId);
    const usage = {
      id: `demo-usage-${index + 1}`,
      projectId,
      articleId,
      kitId: article.kitId,
      usedQuantity,
      purchasePriceAtTime: article.purchasePrice || 0,
      totalPrice: usedQuantity * (article.purchasePrice || 0),
      replenishQuantity: usedQuantity,
      orderStatus: status,
    };
    demoState.usages.push(usage);
    article.currentStock = Math.max(0, article.currentStock - usedQuantity);
    article.lastUsedAt = project.date;
    const line = createOrderLineFromUsage(usage, project, article, new Date(project.completedAt || project.createdAt));
    line.status = status;
    if (status === "Besteld") line.orderedAt = "2026-05-28T09:30:00.000Z";
    if (status === "Ontvangen") {
      line.orderedAt = "2026-05-28T09:30:00.000Z";
      line.receivedAt = "2026-05-29T08:10:00.000Z";
    }
    if (status === "Aangevuld") {
      line.orderedAt = "2026-05-28T09:30:00.000Z";
      line.receivedAt = "2026-05-29T08:10:00.000Z";
      line.restockedAt = "2026-05-29T09:00:00.000Z";
      article.currentStock = article.defaultQuantity;
      article.lastRestockedAt = "2026-05-29";
    }
    article.orderStatus = status;
    demoState.orderLines.push(line);
  });
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function euro(value) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value || 0);
}

function byId(collection, id) {
  return collection.find((item) => item.id === id);
}

function currentUser() {
  return state.session ? byId(state.users, state.session.userId) : null;
}

function isOfficeAdmin() {
  return currentUser()?.role === "office_admin";
}

function isMechanic() {
  return currentUser()?.role === "mechanic";
}

function canAccessProject(project) {
  if (!project) return false;
  if (isOfficeAdmin()) return true;
  return project.assignedMechanicId === currentUser()?.id || project.mechanicId === currentUser()?.id || project.technician === currentUser()?.name;
}

function isProjectOpen(project) {
  return ["aangemaakt", "toegewezen", "in uitvoering", "Open"].includes(project.status);
}

function isProjectCompleted(project) {
  return ["afgerond", "Afgerond"].includes(project.status);
}

function mechanicNameById(id) {
  return byId(state.users, id)?.name || "-";
}

function mechanicNamesByIds(ids = []) {
  return ids.map((id) => mechanicNameById(id)).filter((name) => name && name !== "-");
}

function logout() {
  state.session = null;
  saveState();
  location.hash = "#/login";
  render();
}

function login(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  const user = state.users.find((item) => item.email.toLowerCase() === email && item.password === password && item.active);
  if (!user) {
    document.getElementById("login-error").textContent = "E-mail of wachtwoord klopt niet.";
    return;
  }
  state.session = { userId: user.id, loggedInAt: new Date().toISOString() };
  saveState();
  location.hash = user.role === "office_admin" ? "#/office" : "#/start";
}

function quickLogin(email) {
  const user = state.users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.active);
  if (!user) return;
  state.session = { userId: user.id, loggedInAt: new Date().toISOString() };
  saveState();
  location.hash = user.role === "office_admin" ? "#/office" : "#/start";
}

function renderLogin() {
  return `
    <section class="login-shell">
      <form class="panel login-card" onsubmit="login(event)">
        <div class="brand-row" style="margin-bottom:18px">
          <div class="brand-mark">A</div>
          <div>
            <p class="eyebrow">Alff Installaties</p>
            <h1>Inloggen</h1>
          </div>
        </div>
        <p>Log in op het interne portaal voor montagekoffers en kantoorbeheer.</p>
        <label>E-mail <input name="email" type="email" required autocomplete="email" placeholder="naam@alffinstallaties.nl" /></label>
        <label>Wachtwoord <input name="password" type="password" required autocomplete="current-password" placeholder="Wachtwoord" /></label>
        <p id="login-error" class="form-error"></p>
        <button class="btn success full" type="submit">Inloggen</button>
        <button class="btn ghost full" type="button" onclick="alert('Demo: wachtwoord vergeten wordt later gekoppeld aan Supabase Auth.')">Wachtwoord vergeten</button>
        <div class="demo-accounts">
          <strong>Demo accounts</strong>
          <span>Monteur: monteur@alffinstallaties.nl / monteur123</span>
          <span>Kantoor: kantoor@alffinstallaties.nl / kantoor123</span>
          <button class="btn secondary full" type="button" onclick="quickLogin('monteur@alffinstallaties.nl')">Demo login monteur</button>
          <button class="btn secondary full" type="button" onclick="quickLogin('kantoor@alffinstallaties.nl')">Demo login kantoor</button>
        </div>
      </form>
    </section>`;
}

function safeDate(value) {
  if (!value) return "-";
  return String(value).slice(0, 10);
}

function createOrderLineFromUsage(usage, project, article, now = new Date()) {
  const currentStockKnown = article.currentStock !== undefined && article.currentStock !== null;
  const missingQuantity = currentStockKnown
    ? Math.max(0, article.defaultQuantity - article.currentStock)
    : usage.usedQuantity;
  const orderQuantity = currentStockKnown ? missingQuantity : usage.usedQuantity;
  return {
    id: uid("order"),
    projectId: project.id,
    projectIds: [project.id],
    mechanicIds: [project.assignedMechanicId || project.mechanicId || ""].filter(Boolean),
    kitId: article.kitId,
    kitName: article.kitId,
    itemId: article.id,
    itemName: article.description,
    usedQuantity: usage.usedQuantity,
    totalUsedQuantity: usage.usedQuantity,
    missingQuantity,
    orderQuantity,
    quantityToOrder: orderQuantity,
    purchasePrice: usage.purchasePriceAtTime ?? article.purchasePrice ?? 0,
    totalPrice: orderQuantity * (usage.purchasePriceAtTime ?? article.purchasePrice ?? 0),
    supplierArticleNumber: article.supplierArticleNumber || "",
    status: usage.orderStatus || "Niet besteld",
    createdAt: now.toISOString(),
    orderedAt: "",
    receivedAt: "",
    restockedAt: "",
    updatedAt: now.toISOString(),
  };
}

function upsertOrderLineFromUsage(usage, project, article, now = new Date()) {
  const price = usage.purchasePriceAtTime ?? article.purchasePrice ?? null;
  const keyStatus = "Niet besteld";
  const existing = state.orderLines.find((line) => line.itemId === article.id && line.kitId === article.kitId && line.status === keyStatus);
  const mechanicId = project.assignedMechanicId || project.mechanicId || "";
  if (existing) {
    existing.usedQuantity = (existing.usedQuantity || 0) + usage.usedQuantity;
    existing.totalUsedQuantity = (existing.totalUsedQuantity || 0) + usage.usedQuantity;
    existing.orderQuantity = (existing.orderQuantity || 0) + usage.usedQuantity;
    existing.quantityToOrder = (existing.quantityToOrder || 0) + usage.usedQuantity;
    existing.totalPrice = (existing.quantityToOrder || 0) * (existing.purchasePrice || 0);
    existing.projectIds = [...new Set([...(existing.projectIds || [existing.projectId].filter(Boolean)), project.id])];
    existing.mechanicIds = [...new Set([...(existing.mechanicIds || []), mechanicId].filter(Boolean))];
    existing.updatedAt = now.toISOString();
    return existing;
  }
  const line = {
    id: uid("order"),
    itemId: article.id,
    itemName: article.description,
    kitId: article.kitId,
    kitName: article.kitId,
    totalUsedQuantity: usage.usedQuantity,
    usedQuantity: usage.usedQuantity,
    quantityToOrder: usage.usedQuantity,
    orderQuantity: usage.usedQuantity,
    projectIds: [project.id],
    mechanicIds: [mechanicId].filter(Boolean),
    supplierArticleNumber: article.supplierArticleNumber || "",
    purchasePrice: price,
    totalPrice: price ? usage.usedQuantity * price : 0,
    status: keyStatus,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    orderedAt: "",
    receivedAt: "",
    restockedAt: "",
  };
  state.orderLines.push(line);
  return line;
}

function articleOrderLines(articleId) {
  return state.orderLines.filter((line) => line.itemId === articleId);
}

function activeOrderLines() {
  return state.orderLines.filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0 && line.status !== "Aangevuld");
}

function aggregateOrderRows() {
  const groups = new Map();
  activeOrderLines().forEach((line) => {
    const article = byId(state.articles, line.itemId);
    const project = byId(state.projects, line.projectId);
    if (!article || !project || !isProjectCompleted(project)) return;
    const key = `${line.itemId}-${line.status}`;
    const existing =
      groups.get(key) ||
      {
        ids: [],
        itemId: line.itemId,
        kitId: line.kitId,
        itemName: line.itemName,
        usedQuantity: 0,
        defaultQuantity: article.defaultQuantity,
        currentStock: article.currentStock,
        minimumStock: article.minimumStock,
        orderQuantity: 0,
        purchasePrice: article.purchasePrice || 0,
        totalPrice: 0,
        supplierArticleNumber: article.supplierArticleNumber || line.supplierArticleNumber,
        projects: [],
        status: line.status,
      };
    existing.ids.push(line.id);
    existing.usedQuantity += line.totalUsedQuantity ?? line.usedQuantity ?? 0;
    existing.orderQuantity += line.quantityToOrder ?? line.orderQuantity ?? 0;
    existing.totalPrice += line.totalPrice || 0;
    if (!existing.projects.includes(project.projectName)) existing.projects.push(project.projectName);
    groups.set(key, existing);
  });
  return [...groups.values()];
}

function filteredOrderRows() {
  const search = ui.orderSearch.toLowerCase();
  return aggregateOrderRows().filter((row) => {
    const haystack = [row.itemName, row.kitId, row.supplier, row.projects.join(" ")].join(" ").toLowerCase();
    return (
      (!search || haystack.includes(search)) &&
      (ui.orderKit === "ALL" || row.kitId === ui.orderKit) &&
      (ui.orderStatus === "ALL" || row.status === ui.orderStatus) &&
      (ui.orderSupplier === "ALL" || row.supplier === ui.orderSupplier)
    );
  });
}

function suppliers() {
  return [...new Set(state.articles.map((article) => article.supplier).filter(Boolean))].sort();
}

function stockStatus(article) {
  if (article.currentStock === undefined || article.currentStock === null) return "Onbekend";
  if (article.currentStock >= article.defaultQuantity) return "Compleet";
  if (article.currentStock <= 0) return "Mist";
  if (article.currentStock <= article.minimumStock) return "Bijna leeg";
  return "Tekort";
}

function stockStatusClass(status) {
  if (status === "Compleet") return "ok";
  if (status === "Bijna leeg" || status === "Onbekend") return "warn";
  if (status === "Mist" || status === "Tekort") return "danger";
  return "";
}

function kitStatus(kitId) {
  const articles = state.articles.filter((article) => article.active && article.kitId === kitId);
  const statuses = articles.map(stockStatus);
  if (statuses.some((status) => status === "Mist" || status === "Tekort")) return "Kritisch";
  if (statuses.some((status) => status === "Bijna leeg" || status === "Onbekend")) return "Bijna leeg";
  return "Compleet";
}

function kitStatusClass(status) {
  if (status === "Compleet") return "ok";
  if (status === "Bijna leeg") return "warn";
  return "danger";
}

function projectUsages(projectId) {
  return state.usages.filter((usage) => usage.projectId === projectId);
}

function enrichedUsages(projectId) {
  return projectUsages(projectId).map((usage) => ({
    ...usage,
    article: byId(state.articles, usage.articleId),
    kit: byId(state.kits, usage.kitId),
  }));
}

function projectTotal(projectId) {
  return enrichedUsages(projectId).reduce((sum, usage) => {
    const price = usage.purchasePriceAtTime ?? usage.article?.purchasePrice ?? 0;
    return sum + usage.usedQuantity * price;
  }, 0);
}

function totalUsed(projectId) {
  return projectUsages(projectId).reduce((sum, usage) => sum + usage.usedQuantity, 0);
}

function openOrderValue() {
  return activeOrderLines().reduce((sum, line) => sum + line.totalPrice, 0);
}

function pageTitle(route) {
  if (route.startsWith("login")) return ["Inloggen", "Beveiligd intern portaal."];
  if (route.startsWith("start")) return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
  if (route.startsWith("new")) return ["Nieuw project", "Maak direct een registratie aan."];
  if (route.startsWith("active")) return ["Lopende projecten", "Open projecten die nog ingevuld worden."];
  if (route.startsWith("completed")) return ["Afgeronde projecten", "Projectregistraties en aanvullingen."];
  if (route.startsWith("project")) return ["Monteurscherm", "Snel onderdelen registreren."];
  if (route.startsWith("summary")) return ["Project afronden", "Controleer de aanvullijst en aantallen."];
  if (route.startsWith("office")) return ["Kantoor", "Beveiligde adminomgeving voor kosten, voorraad en bestellingen."];
  if (route.startsWith("manage")) return ["Koffers beheren", "Artikelen, prijzen en artikelnummers."];
  return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
}

function render() {
  let route = location.hash.replace("#/", "") || "start";
  if (!currentUser() && !route.startsWith("login")) route = "login";
  if (currentUser() && route.startsWith("login")) route = currentUser().role === "office_admin" ? "office" : "start";
  const [title, subtitle] = pageTitle(route);
  const user = currentUser();
  document.getElementById("app").innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="brand-row">
          <div class="brand-mark">A</div>
          <div>
            <p class="eyebrow">Alff Installaties</p>
            <h1>${title}</h1>
          </div>
        </div>
        <p>${subtitle}</p>
        ${
          user
            ? `<div class="session-bar"><span>${user.name} · ${user.role === "office_admin" ? "Kantoor/Admin" : "Monteur"}</span><button class="btn secondary" onclick="logout()">Uitloggen</button></div>`
            : ""
        }
      </div>
    </div>
    <main class="app-shell">
      <div class="container">${renderRoute(route)}</div>
    </main>
    ${user ? renderBottomNav(route) : ""}
    <section class="print-report" id="print-report"></section>
  `;
}

function renderBottomNav(route) {
  const roleItems = isOfficeAdmin() ? [["start", "S", "Start"], ["office", "K", "Kantoor"]] : [["start", "S", "Start"]];
  return `<nav class="bottom-nav">${roleItems
    .map(([id, icon, label]) => `<a class="${route.startsWith(id) ? "active" : ""}" href="#/${id}"><b>${icon}</b>${label}</a>`)
    .join("")}</nav>`;
  const items = [
    ["home", "⌂", "Start"],
    ["new", "+", "Nieuw"],
    ["active", "◷", "Lopend"],
    ["office", "▦", "Kantoor"],
    ["manage", "⚙", "Beheer"],
  ];
  return `<nav class="bottom-nav">${items
    .map(([id, icon, label]) => {
      const active = route.startsWith(id) || (route === "home" && id === "home");
      return `<a class="${active ? "active" : ""}" href="#/${id}"><b>${icon}</b>${label}</a>`;
    })
    .join("")}</nav>`;
}

function renderRoute(route) {
  const [name, id] = route.split("/");
  if (name === "login") return renderLogin();
  if (!currentUser()) return renderLogin();
  if ((name === "office" || name === "manage") && !isOfficeAdmin()) return renderNoOfficeAccess();
  if (name === "start") return renderHome();
  if (name === "new") return renderNewProject();
  if (name === "active") return renderProjectList("Open");
  if (name === "completed") return renderProjectList("Afgerond");
  if (name === "project") return renderTechnician(id);
  if (name === "summary") return renderSummary(id);
  if (name === "office") return renderOffice(id);
  if (name === "manage") return renderManage();
  return renderHome();
}

function renderHome() {
  const open = state.projects.filter((p) => p.status === "Open").length;
  const done = state.projects.filter((p) => p.status === "Afgerond").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open projecten</span><strong>${open}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${done}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(openOrderValue())}</strong></div>
      <div class="stat-card"><span>Artikelen actief</span><strong>${state.articles.filter((a) => a.active).length}</strong></div>
    </section>
    <section class="home-grid grid">
      ${homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+")}
      ${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "◷")}
      ${homeTile("completed", "Afgeronde projecten", "Bekijk rapporten, CSV en PDF.", "✓")}
      ${homeTile("manage", "Koffers beheren", "Wijzig artikelen, prijzen en artikelnummers.", "⚙")}
      ${homeTile("office", "Backend / kantoor", "Volg bestellingen, kosten en aanvullen op.", "▦")}
    </section>
  `;
}

function homeTile(route, title, text, icon) {
  return `<a class="tile" href="#/${route}"><span><strong>${title}</strong><span>${text}</span></span><i class="tile-icon">${icon}</i></a>`;
}

function renderNewProject() {
  const today = new Date().toISOString().slice(0, 10);
  const mechanicName = currentUser()?.name || "";
  const mechanics = state.users.filter((user) => user.role === "mechanic" && user.active);
  return `
    <form class="panel" onsubmit="createProject(event)">
      <div class="form-grid">
        <label>Projectnaam <input name="projectName" required placeholder="Bijv. Ketel vervangen Janssen" /></label>
        <label>Klant <input name="customer" required placeholder="Naam klant" /></label>
        <label>Adres <input name="address" required placeholder="Straat, plaats" /></label>
        ${
          isOfficeAdmin()
            ? `<label>Toewijzen aan monteur
                <select name="assignedMechanicId" required>
                  ${mechanics.map((user) => `<option value="${user.id}">${user.name} - ${user.email}</option>`).join("")}
                </select>
              </label>`
            : `<label>Monteur <input name="technician" required value="${escapeAttr(mechanicName)}" placeholder="Naam monteur" /></label>`
        }
        <label>Datum <input name="date" type="date" value="${today}" required /></label>
        <label>Koffer kiezen
          <select name="kitChoice" required>
            <option value="M001">M001 - koppelingen / appendages</option>
            <option value="M004">M004 - rookgas / condensmateriaal</option>
            <option value="BOTH">Beide koffers</option>
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn success" type="submit">Project aanmaken</button>
        <a class="btn secondary" href="#/start">Annuleren</a>
      </div>
    </form>
  `;
}

function createProject(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const selectedKitIds = form.get("kitChoice") === "BOTH" ? ["M001", "M004"] : [form.get("kitChoice")];
  const assignedMechanicId = isOfficeAdmin() ? form.get("assignedMechanicId") : currentUser()?.id;
  const assignedMechanic = byId(state.users, assignedMechanicId);
  const project = {
    id: uid("project"),
    projectName: form.get("projectName").trim(),
    project_name: form.get("projectName").trim(),
    customer: form.get("customer").trim(),
    customer_name: form.get("customer").trim(),
    address: form.get("address").trim(),
    technician: assignedMechanic?.name || form.get("technician")?.trim() || currentUser()?.name || "",
    mechanicId: assignedMechanicId || "",
    assignedMechanicId,
    assigned_mechanic_id: assignedMechanicId,
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: form.get("date"),
    selectedKitIds,
    status: isOfficeAdmin() ? "toegewezen" : "in uitvoering",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  };
  const usages = state.articles
    .filter((article) => article.active && selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      projectId: project.id,
      articleId: article.id,
      kitId: article.kitId,
      usedQuantity: 0,
      purchasePriceAtTime: null,
      totalPrice: 0,
      replenishQuantity: 0,
      orderStatus: "Niet besteld",
    }));

  state.projects.push(project);
  state.usages.push(...usages);
  saveState();
  location.hash = `#/project/${project.id}`;
}

function renderProjectList(status) {
  const projects = visibleProjects()
    .filter((project) => (status === "Open" ? isProjectOpen(project) : isProjectCompleted(project)))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  if (!projects.length) {
    return `<div class="panel empty">Nog geen ${status === "Open" ? "lopende" : "afgeronde"} projecten.</div>`;
  }
  return `<section class="grid">${projects
    .map((project) => {
      const href = status === "Open" ? `#/project/${project.id}` : `#/summary/${project.id}`;
      return `
        <article class="card panel">
          <h3>${project.projectName}</h3>
          <p>${project.customer} · ${project.address}</p>
          <div class="meta-grid">
            <div class="meta"><span>Monteur</span><strong>${project.technician}</strong></div>
            <div class="meta"><span>Gebruikt</span><strong>${totalUsed(project.id)}</strong></div>
            ${isOfficeAdmin() ? `<div class="meta"><span>Kosten</span><strong>${euro(projectTotal(project.id))}</strong></div>` : `<div class="meta"><span>Status</span><strong>${project.status}</strong></div>`}
          </div>
          <div class="button-row">
            <a class="btn" href="${href}">${status === "Open" ? "Openen" : "Rapport"}</a>
            <button class="btn secondary" onclick="exportCsv('${project.id}')">CSV</button>
            <button class="btn secondary" onclick="exportPdf('${project.id}')">PDF</button>
          </div>
        </article>`;
    })
    .join("")}</section>`;
}

function startProject(projectId) {
  const project = byId(state.projects, projectId);
  if (!project || !canAccessProject(project)) return;
  if (!isProjectCompleted(project)) project.status = "in uitvoering";
  saveState();
  render();
}

function renderTechnician(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return `<div class="panel empty">Project niet gevonden.</div>`;
  if (!canAccessProject(project)) return `<div class="panel empty">Geen toegang tot dit project.</div>`;
  const usages = filteredUsages(projectId);
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} · ${project.address}<br />${project.technician} · ${project.date}</p>
      ${isMechanic() && project.status === "toegewezen" ? `<button class="btn" onclick="startProject('${project.id}')">Start uitvoering</button>` : ""}
      <div class="filters">
        <input value="${ui.search}" placeholder="Zoek artikel..." oninput="setSearch(this.value)" />
        ${renderKitFilter(project.selectedKitIds)}
      </div>
    </section>
    <section class="article-list">
      ${usages.length ? usages.map(renderArticleUsage).join("") : `<div class="panel empty">Geen artikelen gevonden.</div>`}
    </section>
    <section class="sticky-summary">
      <div><strong>${totalUsed(projectId)} gebruikt</strong><br /><span>${project.status === "Afgerond" ? "Project afgerond" : "Aan te vullen aantallen worden bijgehouden"}</span></div>
      <a class="btn success" href="#/summary/${projectId}">Afronden</a>
    </section>
  `;
}

function renderKitFilter(selectedKitIds) {
  const options = ["ALL", ...selectedKitIds];
  return `<div class="segmented">${options
    .map((option) => {
      const label = option === "ALL" ? "Alles" : option;
      return `<button type="button" class="${ui.kitFilter === option ? "active" : ""}" onclick="setKitFilter('${option}')">${label}</button>`;
    })
    .join("")}</div>`;
}

function filteredUsages(projectId) {
  return enrichedUsages(projectId).filter((usage) => {
    const matchesKit = ui.kitFilter === "ALL" || usage.kitId === ui.kitFilter;
    const matchesSearch = usage.article?.description.toLowerCase().includes(ui.search.toLowerCase());
    return matchesKit && matchesSearch;
  });
}

function renderArticleUsage(usage) {
  const article = usage.article;
  const project = byId(state.projects, usage.projectId);
  const statusLabel = usage.orderStatus === "Aangevuld" ? "Aangevuld" : project?.status || "Open";
  const remaining = article.defaultQuantity - usage.usedQuantity;
  const over = usage.usedQuantity > article.defaultQuantity;
  return `
    <article class="article-card">
      <div class="article-head">
        <h3>${article.description}</h3>
        <span class="badge">${article.kitId}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Standaard</span><strong>${article.defaultQuantity}</strong></div>
        <div class="meta"><span>Resterend</span><strong>${remaining}</strong></div>
        <div class="meta"><span>Aanvullen</span><strong>${usage.usedQuantity}</strong></div>
        <div class="meta"><span>Status</span><strong>${statusLabel}</strong></div>
      </div>
      <div class="stepper">
        <button onclick="changeUsage('${usage.id}', -1)">−</button>
        <input type="number" min="0" value="${usage.usedQuantity}" onchange="setUsage('${usage.id}', this.value)" />
        <button onclick="changeUsage('${usage.id}', 1)">+</button>
      </div>
      ${over ? `<div class="warning">Let op: gebruikt aantal is hoger dan standaard in de koffer.</div>` : ""}
    </article>
  `;
}

function setSearch(value) {
  ui.search = value;
  render();
}

function setKitFilter(value) {
  ui.kitFilter = value;
  render();
}

function changeUsage(usageId, delta) {
  const usage = byId(state.usages, usageId);
  usage.usedQuantity = Math.max(0, usage.usedQuantity + delta);
  usage.replenishQuantity = usage.usedQuantity;
  saveState();
  render();
}

function setUsage(usageId, value) {
  const usage = byId(state.usages, usageId);
  usage.usedQuantity = Math.max(0, Number(value) || 0);
  usage.replenishQuantity = usage.usedQuantity;
  saveState();
  render();
}

function renderSummary(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return `<div class="panel empty">Project niet gevonden.</div>`;
  if (!canAccessProject(project)) return `<div class="panel empty">Geen toegang tot dit project.</div>`;
  const used = enrichedUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} · ${project.address}<br />${project.technician} · ${project.date}</p>
      <section class="stats">
        <div class="stat-card"><span>Gebruikte regels</span><strong>${used.length}</strong></div>
        <div class="stat-card"><span>Totaal gebruikt</span><strong>${totalUsed(projectId)}</strong></div>
        ${isOfficeAdmin() ? `<div class="stat-card"><span>Materiaalkosten</span><strong>${euro(projectTotal(projectId))}</strong></div>` : `<div class="stat-card"><span>Aan te vullen</span><strong>${totalUsed(projectId)}</strong></div>`}
        <div class="stat-card"><span>Status</span><strong>${project.status}</strong></div>
      </section>
      <div class="button-row">
        ${!isProjectCompleted(project) ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : ""}
        <button class="btn secondary" onclick="exportCsv('${projectId}')">Export CSV</button>
        <button class="btn secondary" onclick="exportPdf('${projectId}')">Export PDF</button>
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/office">Naar kantoor</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
      </div>
    </section>
    ${renderUsageTable(used)}
  `;
}

function completeProject(projectId) {
  const project = byId(state.projects, projectId);
  if (!project.inventoryProcessed) {
    processProjectInventory(project);
  }
  project.status = "afgerond";
  project.completedAt = new Date().toISOString();
  project.completed_at = project.completedAt;
  project.inventoryProcessed = true;
  saveState();
  render();
}

function processProjectInventory(project) {
  const now = new Date();
  enrichedUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && usage.article)
    .forEach((usage) => {
      const article = usage.article;
      const current = article.currentStock ?? article.defaultQuantity;
      article.currentStock = current - usage.usedQuantity;
      article.lastUsedAt = project.date || now.toISOString().slice(0, 10);
      usage.replenishQuantity = usage.usedQuantity;
      usage.orderStatus = "Niet besteld";
      usage.purchasePriceAtTime = article.purchasePrice || 0;
      usage.totalPrice = usage.usedQuantity * usage.purchasePriceAtTime;

      const line = upsertOrderLineFromUsage(usage, project, article, now);
      article.orderStatus = line.status;
    });
}

function renderUsageTable(usages) {
  if (!usages.length) return `<div class="panel empty">Er zijn nog geen onderdelen gebruikt.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Koffer</th><th>Artikel</th><th>Gebruikt</th><th>Aanvullen</th><th>Prijs</th><th>Kosten</th><th>Status</th></tr></thead>
        <tbody>
          ${usages
            .map(
              (usage) => `
                <tr>
                  <td>${usage.kitId}</td>
                  <td>${usage.article.description}</td>
                  <td>${usage.usedQuantity}</td>
                  <td>${usage.usedQuantity}</td>
                  <td>${euro(usage.article.purchasePrice)}</td>
                  <td>${euro(usage.usedQuantity * usage.article.purchasePrice)}</td>
                  <td><span class="badge">${usage.orderStatus}</span></td>
                </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function renderOffice(section = "") {
  if (section) {
    const routeTabs = {
      projects: "Projecten",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      users: "Gebruikers",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Koffers", "Garage Box", "Bestellen", "Kosten", "Gebruikers"];
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${state.projects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${state.projects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(state.projects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(openOrderValue())}</strong></div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.dashboardTab === tab ? "active" : ""}" onclick="setDashboardTab('${tab}')">${tab}</button>`).join("")}</div>
    ${renderDashboardTab()}
  `;
}

function setDashboardTab(tab) {
  ui.dashboardTab = tab;
  const tabRoutes = {
    Projecten: "projects",
    Koffers: "kits",
    Bestellen: "orders",
    "Garage Box": "garage-box",
    Kosten: "costs",
    Gebruikers: "users",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/office/${route}`)) {
    location.hash = `#/office/${route}`;
    return;
  }
  render();
}

function renderGarageBox() {
  const rows = state.articles.filter((article) => article.active);
  const totalValue = rows.reduce((sum, article) => sum + (article.garageStock || 0) * (article.purchasePrice || 0), 0);
  const low = rows.filter((article) => garageStatus(article) !== "Voldoende").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Garage Box artikelen</span><strong>${rows.length}</strong></div>
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(totalValue)}</strong></div>
      <div class="stat-card"><span>Laag/op/bestellen</span><strong>${low}</strong></div>
      <div class="stat-card"><span>Locatie</span><strong>Garage Box</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Garage Box voorraad</h2>
      <div class="button-row">
        <button class="btn secondary" onclick="exportGarageBoxCsv()">Export CSV</button>
        <button class="btn" onclick="alert('Besteladvies: filter op status Laag, Op of Bestellen en maak hiervan een bestelregel.')">Besteladvies genereren</button>
      </div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Artikel</th><th>Voorraad</th><th>Minimum</th><th>Bestelpunt</th><th></th><th>Artikelnummer</th><th>Inkoopprijs</th><th>Voorraadwaarde</th><th>Status</th></tr></thead>
        <tbody>${rows
          .map(
            (article) => `<tr>
              <td>${article.description}</td>
              <td><input type="number" min="0" value="${article.garageStock}" onchange="updateArticle('${article.id}', 'garageStock', this.value)" /></td>
              <td><input type="number" min="0" value="${article.garageMinimumStock}" onchange="updateArticle('${article.id}', 'garageMinimumStock', this.value)" /></td>
              <td><input type="number" min="0" value="${article.garageReorderPoint}" onchange="updateArticle('${article.id}', 'garageReorderPoint', this.value)" /></td>
              <td>${article.supplier || "-"}</td>
              <td>${article.supplierArticleNumber || "-"}</td>
              <td>${euro(article.purchasePrice)}</td>
              <td>${euro((article.garageStock || 0) * (article.purchasePrice || 0))}</td>
              <td><span class="badge ${garageStatusClass(garageStatus(article))}">${garageStatus(article)}</span></td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function garageStatus(article) {
  if ((article.garageStock || 0) <= 0) return "Op";
  if ((article.garageStock || 0) <= article.garageMinimumStock) return "Laag";
  if ((article.garageStock || 0) <= article.garageReorderPoint) return "Bestellen";
  return "Voldoende";
}

function garageStatusClass(status) {
  if (status === "Voldoende") return "ok";
  if (status === "Laag" || status === "Bestellen") return "warn";
  return "danger";
}

function exportGarageBoxCsv() {
  downloadCsv(
    state.articles
      .filter((article) => article.active)
      .map((article) => ({
        Artikel: article.description,
        "Voorraad Garage Box": article.garageStock,
        Minimumvoorraad: article.garageMinimumStock,
        Bestelpunt: article.garageReorderPoint,
        Artikelnummer: article.supplierArticleNumber,
        Inkoopprijs: article.purchasePrice,
        Voorraadwaarde: (article.garageStock || 0) * (article.purchasePrice || 0),
        Status: garageStatus(article),
      })),
    "garage-box-voorraad.csv",
  );
}

function orderingRows() {
  return state.orderLines
    .filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0)
    .map((line) => {
      const article = byId(state.articles, line.itemId);
      const projects = (line.projectIds || [line.projectId].filter(Boolean)).map((id) => byId(state.projects, id)).filter(Boolean);
      const mechanics = mechanicNamesByIds(line.mechanicIds || projects.map((project) => project.assignedMechanicId || project.mechanicId).filter(Boolean));
      const quantity = line.quantityToOrder ?? line.orderQuantity ?? 0;
      const price = line.purchasePrice ?? article?.purchasePrice ?? null;
      return {
        ...line,
        itemName: line.itemName || article?.description || "-",
        kitId: line.kitId || article?.kitId || "-",
        totalUsedQuantity: line.totalUsedQuantity ?? line.usedQuantity ?? 0,
        quantityToOrder: quantity,
        projectNames: projects.map((project) => project.projectName),
        mechanicNames: mechanics,
        supplier: line.supplier || article?.supplier || "",
        supplierArticleNumber: line.supplierArticleNumber || article?.supplierArticleNumber || "",
        purchasePrice: price,
        totalPrice: price ? quantity * price : 0,
      };
    });
}

function filteredOrderingRows() {
  const search = ui.orderSearch.toLowerCase();
  return orderingRows().filter((row) => {
    const haystack = [row.itemName, row.projectNames.join(" "), row.mechanicNames.join(" "), row.kitId].join(" ").toLowerCase();
    return (
      (!search || haystack.includes(search)) &&
      (ui.orderKit === "ALL" || row.kitId === ui.orderKit) &&
      (ui.orderStatus === "ALL" || row.status === ui.orderStatus)
    );
  });
}

function renderOrdering() {
  const rows = filteredOrderingRows();
  const openRows = rows.filter((row) => row.status !== "Aangevuld");
  const openProjectIds = new Set(openRows.flatMap((row) => row.projectIds || [row.projectId].filter(Boolean)));
  const totalQuantity = openRows.reduce((sum, row) => sum + row.quantityToOrder, 0);
  const totalAmount = openRows.reduce((sum, row) => sum + (row.purchasePrice ? row.quantityToOrder * row.purchasePrice : 0), 0);
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open bestelregels</span><strong>${openRows.length}</strong></div>
      <div class="stat-card"><span>Artikelen te bestellen</span><strong>${totalQuantity}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(totalAmount)}</strong></div>
      <div class="stat-card"><span>Projecten met open verbruik</span><strong>${openProjectIds.size}</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <div class="form-grid">
        <label>Zoeken <input value="${escapeAttr(ui.orderSearch)}" placeholder="Artikel, project of monteur" oninput="setOrderFilter('orderSearch', this.value)" /></label>
        <label>Koffer
          <select onchange="setOrderFilter('orderKit', this.value)">
            <option value="ALL">Alle koffers</option>
            ${state.kits.map((kit) => `<option value="${kit.id}" ${ui.orderKit === kit.id ? "selected" : ""}>${kit.id}</option>`).join("")}
          </select>
        </label>
        <label>Status
          <select onchange="setOrderFilter('orderStatus', this.value)">
            <option value="ALL">Alle statussen</option>
            ${ORDER_STATUSES.map((status) => `<option value="${status}" ${ui.orderStatus === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn" onclick="bulkSetOrderStatus('Besteld')">Markeer als besteld</button>
        <button class="btn secondary" onclick="bulkSetOrderStatus('Ontvangen')">Markeer als ontvangen</button>
        <button class="btn success" onclick="bulkSetOrderStatus('Aangevuld')">Markeer als aangevuld</button>
        <button class="btn secondary" onclick="exportOrderingCsv()">CSV export</button>
        <button class="btn secondary" onclick="exportOrderingPdf()">PDF export</button>
      </div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th></th><th>Artikel</th><th>Koffer</th><th>Totaal gebruikt</th><th>Te bestellen</th><th>Project(en)</th><th>Monteur(s)</th><th></th><th>Artikelnummer</th><th>Prijs per stuk</th><th>Totaal</th><th>Status</th></tr></thead>
        <tbody>${rows
          .map(
            (row) => `<tr>
              <td><input type="checkbox" ${ui.selectedOrderLineIds.includes(row.id) ? "checked" : ""} onchange="toggleOrderRow('${row.id}', this.checked)" /></td>
              <td>${row.itemName}</td>
              <td>${row.kitId}</td>
              <td>${row.totalUsedQuantity}</td>
              <td>${row.status === "Aangevuld" ? 0 : row.quantityToOrder}</td>
              <td>${row.projectNames.join(", ") || "-"}</td>
              <td>${row.mechanicNames.join(", ") || "-"}</td>
              <td>${row.supplier || "-"}</td>
              <td>${row.supplierArticleNumber || "-"}</td>
              <td>${row.purchasePrice ? euro(row.purchasePrice) : "Onbekend"}</td>
              <td>${row.purchasePrice ? euro(row.quantityToOrder * row.purchasePrice) : "Onbekend"}</td>
              <td><span class="badge ${statusClass(row.status)}">${row.status}</span></td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function orderingExportRows() {
  return filteredOrderingRows().map((row) => ({
    Artikel: row.itemName,
    Koffer: row.kitId,
    "Totaal gebruikt": row.totalUsedQuantity,
    "Te bestellen": row.status === "Aangevuld" ? 0 : row.quantityToOrder,
    "Project(en)": row.projectNames.join(", "),
    "Monteur(s)": row.mechanicNames.join(", "),
    Artikelnummer: row.supplierArticleNumber,
    "Prijs per stuk": row.purchasePrice ?? "Onbekend",
    Totaal: row.purchasePrice ? row.quantityToOrder * row.purchasePrice : "Onbekend",
    Status: row.status,
  }));
}

function exportOrderingCsv() {
  downloadCsv(orderingExportRows(), "bestellen.csv");
}

function exportOrderingPdf() {
  const rows = filteredOrderingRows();
  if (!rows.length) return alert("Geen bestelregels om te exporteren.");
  document.getElementById("print-report").innerHTML = `
    <h1>Bestellen</h1>
    <p>Alff Installaties · ${new Date().toLocaleDateString("nl-NL")}</p>
    <table>
      <thead><tr><th>Artikel</th><th>Koffer</th><th>Te bestellen</th><th>Project(en)</th><th>Monteur(s)</th><th>Status</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row.itemName}</td><td>${row.kitId}</td><td>${row.quantityToOrder}</td><td>${row.projectNames.join(", ")}</td><td>${row.mechanicNames.join(", ")}</td><td>${row.status}</td></tr>`).join("")}</tbody>
    </table>`;
  window.print();
}

function renderDashboardTab() {
  if (ui.dashboardTab === "Bestellen") return renderOrdering();
  if (ui.dashboardTab === "Koffers") return renderOrderAndKitStatus();
  if (ui.dashboardTab === "Garage Box") return renderGarageBox();
  if (ui.dashboardTab === "Kosten") return renderCosts();
  if (ui.dashboardTab === "Artikelen") return renderArticleAdminTable();
  if (ui.dashboardTab === "Gebruikers") return renderUsers();
  return renderOfficeProjects();
}

function renderLocations() {
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Actieve locaties</span><strong>${state.locations.filter((location) => location.active).length}</strong></div>
      <div class="stat-card"><span>Magazijnen</span><strong>${state.locations.filter((location) => location.type === "magazijn").length}</strong></div>
      <div class="stat-card"><span>Koffers</span><strong>${state.kits.length}</strong></div>
      <div class="stat-card"><span>Artikelregels</span><strong>${state.articles.length}</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Locatie toevoegen</h2>
      <form class="form-grid" onsubmit="addLocation(event)">
        <label>Locatienaam <input name="name" required placeholder="Bijv. Servicebus" /></label>
        <label>Type
          <select name="type">
            <option value="magazijn">Magazijn</option>
            <option value="box">Box</option>
            <option value="koffer">Koffer</option>
          </select>
        </label>
        <label>Omschrijving <input name="description" placeholder="Korte omschrijving" /></label>
        <button class="btn success" type="submit">Locatie toevoegen</button>
      </form>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Naam</th><th>Type</th><th>Omschrijving</th><th>Aangemaakt</th></tr></thead>
        <tbody>${state.locations
          .map(
            (location) => `<tr>
              <td><input type="checkbox" ${location.active ? "checked" : ""} onchange="updateLocation('${location.id}', 'active', this.checked)" /></td>
              <td><input value="${escapeAttr(location.name)}" onchange="updateLocation('${location.id}', 'name', this.value)" /></td>
              <td>
                <select onchange="updateLocation('${location.id}', 'type', this.value)">
                  ${["magazijn", "box", "koffer"].map((type) => `<option value="${type}" ${location.type === type ? "selected" : ""}>${type}</option>`).join("")}
                </select>
              </td>
              <td><input value="${escapeAttr(location.description || "")}" onchange="updateLocation('${location.id}', 'description', this.value)" /></td>
              <td>${safeDate(location.createdAt)}</td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function addLocation(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get("name").trim();
  if (state.locations.some((location) => location.name.toLowerCase() === name.toLowerCase())) {
    alert("Deze locatie bestaat al.");
    return;
  }
  state.locations.push({
    id: uid("loc"),
    name,
    type: form.get("type"),
    description: form.get("description").trim(),
    active: true,
    createdAt: new Date().toISOString(),
  });
  saveState();
  render();
}

function updateLocation(locationId, field, value) {
  const location = byId(state.locations, locationId);
  if (!location) return;
  location[field] = field === "active" ? Boolean(value) : value;
  saveState();
}

function renderUsers() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Gebruikersbeheer</h2>
      <p>Demo-login is lokaal. Deze structuur is voorbereid op Supabase Auth en Row Level Security.</p>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Naam</th><th>E-mail</th><th>Rol</th><th>Aangemaakt</th></tr></thead>
        <tbody>${state.users
          .map(
            (user) => `<tr>
              <td><input type="checkbox" ${user.active ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /></td>
              <td><input value="${escapeAttr(user.name)}" onchange="updateUser('${user.id}', 'name', this.value)" /></td>
              <td>${user.email}</td>
              <td>
                <select onchange="updateUser('${user.id}', 'role', this.value)">
                  <option value="mechanic" ${user.role === "mechanic" ? "selected" : ""}>mechanic</option>
                  <option value="office_admin" ${user.role === "office_admin" ? "selected" : ""}>office_admin</option>
                </select>
              </td>
              <td>${safeDate(user.createdAt)}</td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function updateUser(userId, field, value) {
  const user = byId(state.users, userId);
  if (!user) return;
  user[field] = field === "active" ? Boolean(value) : value;
  saveState();
}

function renderOrderAndKitStatus() {
  const rows = filteredOrderRows();
  const critical = state.articles.filter((article) => {
    const status = stockStatus(article);
    return status === "Mist" || (article.currentStock ?? article.defaultQuantity) < article.minimumStock;
  }).length;
  const kitsWithShortage = state.kits.filter((kit) => kitStatus(kit.id) !== "Compleet").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Totaal te bestellen artikelen</span><strong>${rows.reduce((sum, row) => sum + row.orderQuantity, 0)}</strong></div>
      <div class="stat-card"><span>Totaal open bestelbedrag</span><strong>${euro(openOrderValue())}</strong></div>
      <div class="stat-card"><span>Koffers met tekorten</span><strong>${kitsWithShortage}</strong></div>
      <div class="stat-card"><span>Kritieke artikelen</span><strong>${critical}</strong></div>
    </section>
    ${renderOrderFilters()}
    ${renderAutoOrderList(rows)}
    ${renderKitStatusBlock()}
    ${renderProjectUsageCosts()}
  `;
}

function renderOrderFilters() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="form-grid">
        <label>Zoeken
          <input value="${escapeAttr(ui.orderSearch)}" placeholder="Omschrijving, koffer,  of project" oninput="setOrderFilter('orderSearch', this.value)" />
        </label>
        <label>Koffer
          <select onchange="setOrderFilter('orderKit', this.value)">
            <option value="ALL">Alle koffers</option>
            ${state.kits.map((kit) => `<option value="${kit.id}" ${ui.orderKit === kit.id ? "selected" : ""}>${kit.id}</option>`).join("")}
          </select>
        </label>
        <label>Status
          <select onchange="setOrderFilter('orderStatus', this.value)">
            <option value="ALL">Alle statussen</option>
            ${ORDER_STATUSES.map((status) => `<option value="${status}" ${ui.orderStatus === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>
          <select onchange="setOrderFilter('orderSupplier', this.value)">
            <option value="ALL">Alle s</option>
            ${suppliers().map((supplier) => `<option value="${escapeAttr(supplier)}" ${ui.orderSupplier === supplier ? "selected" : ""}>${supplier}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn" onclick="bulkSetOrderStatus('Besteld')">Markeer als besteld</button>
        <button class="btn secondary" onclick="bulkSetOrderStatus('Ontvangen')">Markeer als ontvangen</button>
        <button class="btn success" onclick="bulkSetOrderStatus('Aangevuld')">Markeer als aangevuld</button>
        <button class="btn secondary" onclick="exportOrderStatusCsv()">Export CSV</button>
        <button class="btn secondary" onclick="exportOrderStatusPdf()">Maak bestellijst PDF</button>
      </div>
    </section>`;
}

function renderAutoOrderList(rows) {
  if (!rows.length) return `<div class="panel empty" style="margin-bottom:14px">Geen open bestellingen binnen deze filters.</div>`;
  return `
    <section style="margin-bottom:18px">
      <h2>Bestellijst</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" onchange="toggleAllOrderRows(this.checked)" /></th>
              <th>Koffer ID</th><th>Omschrijving</th><th>Totaal gebruikt / tekort</th><th>Standaard</th>
              <th>Huidige voorraad</th><th>Minimum</th><th>Te bestellen</th><th>Inkoopprijs</th>
              <th>Totaalprijs</th><th></th><th>Artikelnr.</th><th>Project(en)</th><th>Status</th>
            </tr>
          </thead>
          <tbody>${rows
            .map(
              (row) => `
                <tr>
                  <td><input type="checkbox" ${row.ids.every((id) => ui.selectedOrderLineIds.includes(id)) ? "checked" : ""} onchange="toggleOrderRow('${row.ids.join(",")}', this.checked)" /></td>
                  <td>${row.kitId}</td>
                  <td>${row.itemName}</td>
                  <td>${row.usedQuantity}</td>
                  <td>${row.defaultQuantity}</td>
                  <td>${row.currentStock ?? "Onbekend"}</td>
                  <td>${row.minimumStock}</td>
                  <td><strong>${row.orderQuantity}</strong></td>
                  <td>${euro(row.purchasePrice)}</td>
                  <td>${euro(row.totalPrice)}</td>
                  <td>${row.supplier || "-"}</td>
                  <td>${row.supplierArticleNumber || "-"}</td>
                  <td>${row.projects.join(", ")}</td>
                  <td><span class="badge ${statusClass(row.status)}">${row.status}</span></td>
                </tr>`,
            )
            .join("")}</tbody>
        </table>
      </div>
    </section>`;
}

function renderKitStatusBlock() {
  return `
    <section style="margin-bottom:18px">
      <h2>Kofferstatus</h2>
      <div class="kit-status-grid">
        ${state.kits.map(renderSingleKitStatus).join("")}
      </div>
    </section>`;
}

function renderSingleKitStatus(kit) {
  const articles = state.articles.filter((article) => article.active && article.kitId === kit.id);
  const shortageArticles = articles.filter((article) => stockStatus(article) !== "Compleet");
  const stocked = articles.filter((article) => (article.currentStock ?? 0) > 0).length;
  const refillCost = shortageArticles.reduce((sum, article) => {
    return sum + Math.max(0, article.defaultQuantity - (article.currentStock ?? 0)) * (article.purchasePrice || 0);
  }, 0);
  const status = kitStatus(kit.id);
  return `
    <article class="panel kit-panel">
      <div class="article-head">
        <div>
          <h3>${kit.id}</h3>
          <p>${kit.description}</p>
        </div>
        <span class="badge ${kitStatusClass(status)}">${status}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Artikelen</span><strong>${articles.length}</strong></div>
        <div class="meta"><span>Op voorraad</span><strong>${stocked}</strong></div>
        <div class="meta"><span>Met tekort</span><strong>${shortageArticles.length}</strong></div>
      </div>
      <p><strong>Aanvulkosten:</strong> ${euro(refillCost)}</p>
      <div class="compact-list">
        ${articles.map(renderKitArticleStatus).join("")}
      </div>
    </article>`;
}

function renderKitArticleStatus(article) {
  const status = stockStatus(article);
  const missing = Math.max(0, article.defaultQuantity - (article.currentStock ?? 0));
  const lastLine = articleOrderLines(article.id)
    .map((line) => ({ line, project: byId(state.projects, line.projectId) }))
    .sort((a, b) => (b.project?.date || "").localeCompare(a.project?.date || ""))[0];
  return `
    <div class="compact-row">
      <div>
        <strong>${article.description}</strong>
        <span>Standaard ${article.defaultQuantity} · Voorraad ${article.currentStock ?? "Onbekend"} · Mist ${missing} · Min ${article.minimumStock}</span>
        <span>Laatst gebruikt: ${lastLine?.project?.projectName || "-"} · Aangevuld: ${safeDate(article.lastRestockedAt)}</span>
      </div>
      <span class="badge ${stockStatusClass(status)}">${status}</span>
    </div>`;
}

function renderProjectUsageCosts() {
  const rows = filteredProjectUsageRows();
  const projects = state.projects.filter((project) => project.status === "Afgerond");
  const technicians = [...new Set(projects.map((project) => project.technician).filter(Boolean))].sort();
  return `
    <section>
      <h2>Projectkosten & verbruik</h2>
      <section class="panel" style="margin-bottom:14px">
        <div class="form-grid">
          <label>Project
            <select onchange="setOrderFilter('costProject', this.value)">
              <option value="ALL">Alle projecten</option>
              ${projects.map((project) => `<option value="${project.id}" ${ui.costProject === project.id ? "selected" : ""}>${project.projectName}</option>`).join("")}
            </select>
          </label>
          <label>Monteur
            <select onchange="setOrderFilter('costTechnician', this.value)">
              <option value="ALL">Alle monteurs</option>
              ${technicians.map((name) => `<option value="${escapeAttr(name)}" ${ui.costTechnician === name ? "selected" : ""}>${name}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="button-row">
          <button class="btn secondary" onclick="exportProjectUsageCsv()">Export CSV</button>
        </div>
      </section>
      ${renderProjectTotals(rows)}
      <div class="table-wrap">
        <table>
          <thead><tr><th>Projectnaam</th><th>Datum</th><th>Monteur</th><th>Koffer</th><th>Artikel</th><th>Gebruikt</th><th>Prijs</th><th>Kosten</th><th>Bestelstatus</th></tr></thead>
          <tbody>${rows
            .map(
              (row) => `<tr>
                <td>${row.project.projectName}</td>
                <td>${row.project.date}</td>
                <td>${row.project.technician}</td>
                <td>${row.usage.kitId}</td>
                <td>${row.article.description}</td>
                <td>${row.usage.usedQuantity}</td>
                <td>${euro(row.usage.purchasePriceAtTime ?? row.article.purchasePrice)}</td>
                <td>${euro(row.usage.totalPrice ?? row.usage.usedQuantity * (row.usage.purchasePriceAtTime ?? row.article.purchasePrice))}</td>
                <td><span class="badge ${statusClass(row.usage.orderStatus)}">${row.usage.orderStatus}</span></td>
              </tr>`,
            )
            .join("")}</tbody>
        </table>
      </div>
    </section>`;
}

function filteredProjectUsageRows() {
  return state.usages
    .filter((usage) => usage.usedQuantity > 0)
    .map((usage) => ({ usage, project: byId(state.projects, usage.projectId), article: byId(state.articles, usage.articleId) }))
    .filter((row) => row.project && row.article && row.project.status === "Afgerond")
    .filter((row) => {
      return (
        (ui.costProject === "ALL" || row.project.id === ui.costProject) &&
        (ui.costTechnician === "ALL" || row.project.technician === ui.costTechnician)
      );
    });
}

function renderProjectTotals(rows) {
  const totals = new Map();
  rows.forEach((row) => {
    const key = row.project.projectName;
    totals.set(key, (totals.get(key) || 0) + (row.usage.totalPrice ?? row.usage.usedQuantity * (row.usage.purchasePriceAtTime ?? row.article.purchasePrice)));
  });
  if (!totals.size) return `<div class="panel empty" style="margin-bottom:14px">Geen projectverbruik binnen deze filters.</div>`;
  return `<section class="stats" style="margin-bottom:14px">${[...totals.entries()]
    .map(([project, total]) => `<div class="stat-card"><span>${project}</span><strong>${euro(total)}</strong></div>`)
    .join("")}</section>`;
}

function setOrderFilter(field, value) {
  ui[field] = value;
  render();
}

function toggleOrderRow(ids, checked) {
  ids.split(",").forEach((id) => {
    if (checked && !ui.selectedOrderLineIds.includes(id)) ui.selectedOrderLineIds.push(id);
    if (!checked) ui.selectedOrderLineIds = ui.selectedOrderLineIds.filter((selected) => selected !== id);
  });
}

function toggleAllOrderRows(checked) {
  const ids = filteredOrderRows().flatMap((row) => row.ids);
  ui.selectedOrderLineIds = checked ? [...new Set([...ui.selectedOrderLineIds, ...ids])] : ui.selectedOrderLineIds.filter((id) => !ids.includes(id));
  render();
}

function bulkSetOrderStatus(status) {
  if (!ui.selectedOrderLineIds.length) {
    alert("Selecteer eerst een of meerdere regels.");
    return;
  }
  const now = new Date().toISOString();
  ui.selectedOrderLineIds.forEach((id) => updateOrderLineStatus(id, status, now));
  ui.selectedOrderLineIds = [];
  saveState();
  render();
}

function updateOrderLineStatus(lineId, status, timestamp = new Date().toISOString()) {
  const line = byId(state.orderLines, lineId);
  if (!line) return;
  line.status = status;
  line.updatedAt = timestamp;
  if (status === "Besteld") line.orderedAt = line.orderedAt || timestamp;
  if (status === "Ontvangen") {
    line.orderedAt = line.orderedAt || timestamp;
    line.receivedAt = line.receivedAt || timestamp;
  }
  if (status === "Aangevuld") {
    line.orderedAt = line.orderedAt || timestamp;
    line.receivedAt = line.receivedAt || timestamp;
    line.restockedAt = line.restockedAt || timestamp;
    const article = byId(state.articles, line.itemId);
    if (article) {
      article.currentStock = article.defaultQuantity;
      article.lastRestockedAt = timestamp.slice(0, 10);
      article.orderStatus = "Aangevuld";
    }
  }
  const projectIds = line.projectIds || [line.projectId].filter(Boolean);
  state.usages
    .filter((usage) => projectIds.includes(usage.projectId) && usage.articleId === line.itemId)
    .forEach((usage) => {
      usage.orderStatus = status;
    });
}

function renderOfficeProjects() {
  if (!state.projects.length) return `<div class="panel empty">Nog geen projecten.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Project</th><th>Klant</th><th>Monteur</th><th>Status</th><th>Gebruikt</th><th>Kosten</th><th>Actie</th></tr></thead>
        <tbody>${state.projects
          .map(
            (p) => `<tr>
              <td>${p.projectName}</td><td>${p.customer}</td><td>${p.technician}</td><td>${p.status}</td>
              <td>${totalUsed(p.id)}</td><td>${euro(projectTotal(p.id))}</td>
              <td><a class="btn secondary" href="#/summary/${p.id}">Open</a></td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function renderOrders() {
  const orders = state.usages
    .filter((u) => u.usedQuantity > 0)
    .map((u) => ({ ...u, project: byId(state.projects, u.projectId), article: byId(state.articles, u.articleId) }));
  if (!orders.length) return `<div class="panel empty">Nog geen aanvullijst. Registreer eerst gebruikte artikelen.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Project</th><th>Artikel</th><th>Koffer</th><th>Aantal</th><th></th><th>Status</th><th>Actie</th></tr></thead>
        <tbody>${orders
          .map(
            (o) => `<tr>
              <td>${o.project?.projectName || "-"}</td>
              <td>${o.article?.description || "-"}</td>
              <td>${o.kitId}</td>
              <td>${o.usedQuantity}</td>
              <td>${o.article?.supplier || "-"}</td>
              <td><span class="badge ${statusClass(o.orderStatus)}">${o.orderStatus}</span></td>
              <td><button class="btn secondary" onclick="nextOrderStatus('${o.id}')">${nextStatusLabel(o.orderStatus)}</button></td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function statusClass(status) {
  if (status === "Aangevuld") return "ok";
  if (status === "Ontvangen") return "ok";
  if (status === "Niet besteld") return "warn";
  return "";
}

function nextStatusLabel(status) {
  const index = ORDER_STATUSES.indexOf(status);
  return index >= ORDER_STATUSES.length - 1 ? "Klaar" : ORDER_STATUSES[index + 1];
}

function nextOrderStatus(usageId) {
  const usage = byId(state.usages, usageId);
  const index = ORDER_STATUSES.indexOf(usage.orderStatus);
  usage.orderStatus = ORDER_STATUSES[Math.min(index + 1, ORDER_STATUSES.length - 1)];
  saveState();
  render();
}

function renderCosts() {
  const perKit = state.kits.map((kit) => {
    const total = state.usages
      .filter((u) => u.kitId === kit.id)
      .reduce((sum, usage) => sum + usage.usedQuantity * (byId(state.articles, usage.articleId)?.purchasePrice || 0), 0);
    return { kit, total };
  });
  return `
    <section class="grid">
      <div class="panel">
        <h2>Kosten per koffer</h2>
        ${perKit.map((row) => `<p><strong>${row.kit.id}</strong> ${row.kit.description}: ${euro(row.total)}</p>`).join("")}
      </div>
      <div class="panel">
        <h2>Kosten per project</h2>
        ${state.projects.map((project) => `<p><strong>${project.projectName}</strong>: ${euro(projectTotal(project.id))}</p>`).join("") || "<p>Nog geen projecten.</p>"}
      </div>
    </section>`;
}

function renderManage() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Koffer toevoegen</h2>
      <form class="form-grid" onsubmit="addKit(event)">
        <label>Koffer ID <input name="id" required placeholder="Bijv. M010" /></label>
        <label>Omschrijving <input name="description" required placeholder="Bijv. installatiemateriaal" /></label>
        <button class="btn success" type="submit">Koffer toevoegen</button>
        <button class="btn warn" type="button" onclick="resetData()">Alle lokale data resetten</button>
      </form>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Artikel toevoegen</h2>
      <form class="form-grid" onsubmit="addArticle(event)">
        <label>Koffer
          <select name="kitId">${state.kits.map((kit) => `<option value="${kit.id}">${kit.id} - ${kit.description}</option>`).join("")}</select>
        </label>
        <label>Omschrijving <input name="description" required /></label>
        <label>Standaard aantal <input name="defaultQuantity" type="number" min="0" value="1" required /></label>
        <label>Inkoopprijs <input name="purchasePrice" type="number" min="0" step="0.01" value="0" /></label>
        <label> <input name="supplier" /></label>
        <label>Artikelnummer <input name="supplierArticleNumber" /></label>
        <button class="btn success" type="submit">Artikel toevoegen</button>
      </form>
    </section>
    ${renderArticleAdminTable()}
  `;
}

function addKit(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const id = form.get("id").trim().toUpperCase();
  if (state.kits.some((kit) => kit.id === id)) {
    alert("Deze koffer bestaat al.");
    return;
  }
  state.kits.push({
    id,
    name: id,
    description: form.get("description").trim(),
    active: true,
  });
  saveState();
  render();
}

function resetData() {
  if (!confirm("Weet je zeker dat je alle lokale projecten en wijzigingen wilt verwijderen?")) return;
  state = createInitialState();
  saveState();
  location.hash = "#/home";
  render();
}

function renderArticleAdminTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Koffer</th><th>Omschrijving</th><th>Standaard</th><th>Voorraad</th><th>Minimum</th><th>Prijs</th><th></th><th>Artikelnummer</th><th>Status</th></tr></thead>
        <tbody>${state.articles
          .map(
            (a) => `<tr>
              <td><input type="checkbox" ${a.active ? "checked" : ""} onchange="updateArticle('${a.id}', 'active', this.checked)" /></td>
              <td>${a.kitId}</td>
              <td><input value="${escapeAttr(a.description)}" onchange="updateArticle('${a.id}', 'description', this.value)" /></td>
              <td><input type="number" min="0" value="${a.defaultQuantity}" onchange="updateArticle('${a.id}', 'defaultQuantity', this.value)" /></td>
              <td><input type="number" min="0" value="${a.currentStock ?? ""}" onchange="updateArticle('${a.id}', 'currentStock', this.value)" /></td>
              <td><input type="number" min="0" value="${a.minimumStock}" onchange="updateArticle('${a.id}', 'minimumStock', this.value)" /></td>
              <td><input type="number" min="0" step="0.01" value="${a.purchasePrice}" onchange="updateArticle('${a.id}', 'purchasePrice', this.value)" /></td>
              <td><input value="${escapeAttr(a.supplier)}" onchange="updateArticle('${a.id}', 'supplier', this.value)" /></td>
              <td><input value="${escapeAttr(a.supplierArticleNumber)}" onchange="updateArticle('${a.id}', 'supplierArticleNumber', this.value)" /></td>
              <td><span class="badge ${stockStatusClass(stockStatus(a))}">${stockStatus(a)}</span></td>
            </tr>`,
          )
          .join("")}</tbody>
      </table>
    </div>`;
}

function escapeAttr(value) {
  return String(value || "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function addArticle(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const kitId = form.get("kitId");
  state.articles.push({
    id: `${kitId}-${uid("custom")}`,
    kitId,
    description: form.get("description").trim(),
    defaultQuantity: Number(form.get("defaultQuantity")) || 0,
    garageStock: (Number(form.get("defaultQuantity")) || 0) * 4,
    garageMinimumStock: Math.max(2, Number(form.get("defaultQuantity")) || 0),
    garageReorderPoint: Math.max(4, (Number(form.get("defaultQuantity")) || 0) * 2),
    currentStock: Number(form.get("defaultQuantity")) || 0,
    minimumStock: Math.max(1, Math.ceil((Number(form.get("defaultQuantity")) || 0) * 0.25)),
    lastRestockedAt: "",
    lastUsedAt: "",
    purchasePrice: Number(form.get("purchasePrice")) || 0,
    supplier: form.get("supplier").trim(),
    supplierArticleNumber: form.get("supplierArticleNumber").trim(),
    orderStatus: "Niet besteld",
    active: true,
  });
  saveState();
  render();
}

function updateArticle(articleId, field, value) {
  const article = byId(state.articles, articleId);
  if (field === "defaultQuantity") article[field] = Number(value) || 0;
  else if (field === "purchasePrice") article[field] = Number(value) || 0;
  else if (field === "currentStock") article[field] = value === "" ? null : Number(value);
  else if (field === "minimumStock") article[field] = Number(value) || 0;
  else if (field === "garageStock") article[field] = Number(value) || 0;
  else if (field === "garageMinimumStock") article[field] = Number(value) || 0;
  else if (field === "garageReorderPoint") article[field] = Number(value) || 0;
  else if (field === "active") article[field] = Boolean(value);
  else article[field] = value;
  saveState();
}

function downloadCsv(rows, filename) {
  if (!rows.length) return alert("Geen regels om te exporteren.");
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(";")]
    .concat(rows.map((row) => headers.map((h) => `"${String(row[h] ?? "").replaceAll('"', '""')}"`).join(";")))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function orderStatusExportRows() {
  return filteredOrderRows().map((row) => ({
    "Koffer ID": row.kitId,
    Omschrijving: row.itemName,
    "Totaal gebruikt / tekort": row.usedQuantity,
    "Standaard aantal in koffer": row.defaultQuantity,
    "Huidige voorraad": row.currentStock ?? "Onbekend",
    Minimumvoorraad: row.minimumStock,
    "Te bestellen aantal": row.orderQuantity,
    "Inkoopprijs per stuk": row.purchasePrice,
    Totaalprijs: row.totalPrice,
    "Artikelnummer": row.supplierArticleNumber,
    "Veroorzaakt door project(en)": row.projects.join(", "),
    Status: row.status,
  }));
}

function exportOrderStatusCsv() {
  downloadCsv(orderStatusExportRows(), "bestellen-kofferstatus.csv");
}

function exportOrderStatusPdf() {
  const rows = filteredOrderRows();
  if (!rows.length) return alert("Geen regels om te exporteren.");
  document.getElementById("print-report").innerHTML = `
    <h1>Bestellijst / Kofferstatus</h1>
    <p>Alff Installaties · ${new Date().toLocaleDateString("nl-NL")}</p>
    <table>
      <thead><tr><th>Koffer</th><th>Artikel</th><th>Te bestellen</th><th>Prijs</th><th>Totaal</th><th></th><th>Project(en)</th><th>Status</th></tr></thead>
      <tbody>${rows
        .map(
          (row) => `<tr>
            <td>${row.kitId}</td><td>${row.itemName}</td><td>${row.orderQuantity}</td><td>${euro(row.purchasePrice)}</td>
            <td>${euro(row.totalPrice)}</td><td>${row.supplier || "-"}</td><td>${row.projects.join(", ")}</td><td>${row.status}</td>
          </tr>`,
        )
        .join("")}</tbody>
    </table>
    <h2>Totaal open bestelbedrag: ${euro(openOrderValue())}</h2>
  `;
  window.print();
}

function projectUsageExportRows() {
  return filteredProjectUsageRows().map((row) => ({
    Projectnaam: row.project.projectName,
    Datum: row.project.date,
    Monteur: row.project.technician,
    Koffer: row.usage.kitId,
    Artikel: row.article.description,
    "Gebruikt aantal": row.usage.usedQuantity,
    "Inkoopprijs per stuk": row.usage.purchasePriceAtTime ?? row.article.purchasePrice,
    "Totale kosten": row.usage.totalPrice ?? row.usage.usedQuantity * (row.usage.purchasePriceAtTime ?? row.article.purchasePrice),
    Bestelstatus: row.usage.orderStatus,
  }));
}

function exportProjectUsageCsv() {
  downloadCsv(projectUsageExportRows(), "projectkosten-verbruik.csv");
}

function exportRows(projectId) {
  const project = byId(state.projects, projectId);
  return enrichedUsages(projectId)
    .filter((usage) => usage.usedQuantity > 0)
    .map((usage) => ({
      Projectnaam: project.projectName,
      Klant: project.customer,
      Adres: project.address,
      Monteur: project.technician,
      Datum: project.date,
      Koffer: usage.kitId,
      Omschrijving: usage.article.description,
      "Standaard aantal": usage.article.defaultQuantity,
      "Gebruikt aantal": usage.usedQuantity,
      "Aan te vullen aantal": usage.usedQuantity,
      Inkoopprijs: usage.article.purchasePrice,
      Kosten: usage.usedQuantity * usage.article.purchasePrice,
      "Artikelnummer": usage.article.supplierArticleNumber,
      Bestelstatus: usage.orderStatus,
    }));
}

function exportCsv(projectId) {
  const rows = exportRows(projectId);
  if (!rows.length) return alert("Geen gebruikte artikelen om te exporteren.");
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(";")]
    .concat(rows.map((row) => headers.map((h) => `"${String(row[h]).replaceAll('"', '""')}"`).join(";")))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const project = byId(state.projects, projectId);
  link.href = url;
  link.download = `${project.projectName.replaceAll(" ", "-").toLowerCase()}-aanvullijst.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function exportPdf(projectId) {
  const project = byId(state.projects, projectId);
  const rows = enrichedUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  if (!rows.length) return alert("Geen gebruikte artikelen om te exporteren.");
  document.getElementById("print-report").innerHTML = `
    <h1>Aanvullijst / Projectrapport</h1>
    <p><strong>${project.projectName}</strong><br />${project.customer}<br />${project.address}<br />${project.technician} · ${project.date}</p>
    ${renderUsageTable(rows)}
    <h2>Totaal materiaalkosten: ${euro(projectTotal(projectId))}</h2>
  `;
  window.print();
}

function visibleProjects() {
  if (isOfficeAdmin()) return state.projects;
  return state.projects.filter((project) => canAccessProject(project));
}

function renderOfficeProjects() {
  if (!state.projects.length) return `<div class="panel empty">Nog geen projecten.</div>`;
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="button-row">
        <a class="btn success" href="#/new">Project aanmaken en toewijzen</a>
      </div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Project</th><th>Klant</th><th>Toegewezen monteur</th><th>Status</th><th>Gebruikte artikelen</th><th>Materiaalkosten</th><th>Actie</th></tr></thead>
        <tbody>${state.projects
          .map((p) => {
            const used = enrichedUsages(p.id).filter((usage) => usage.usedQuantity > 0);
            return `<tr>
              <td>${p.projectName}</td>
              <td>${p.customer}</td>
              <td>${mechanicNameById(p.assignedMechanicId || p.mechanicId)}</td>
              <td>${p.status}</td>
              <td>${used.map((usage) => `${usage.article?.description || "-"} (${usage.usedQuantity})`).join(", ") || "-"}</td>
              <td>${euro(projectTotal(p.id))}</td>
              <td><a class="btn secondary" href="#/summary/${p.id}">Open</a></td>
            </tr>`;
          })
          .join("")}</tbody>
      </table>
    </div>`;
}

function renderNoOfficeAccess() {
  setTimeout(() => {
    location.hash = "#/start";
  }, 1600);
  return `<section class="panel empty"><h2>Geen toegang tot kantooromgeving</h2><p>Je bent ingelogd als monteur. Je wordt teruggestuurd naar Start.</p></section>`;
}

function renderHome() {
  const projects = visibleProjects();
  const open = projects.filter(isProjectOpen).length;
  const done = projects.filter(isProjectCompleted).length;
  const replenish = projects.reduce((sum, project) => sum + totalUsed(project.id), 0);
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open projecten</span><strong>${open}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${done}</strong></div>
      <div class="stat-card"><span>Aan te vullen</span><strong>${replenish}</strong></div>
      <div class="stat-card"><span>Omgeving</span><strong>Start</strong></div>
    </section>
    <section class="home-grid grid">
      ${homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+")}
      ${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "O")}
      ${homeTile("completed", "Afgeronde projecten", "Bekijk afgeronde registraties en aantallen.", "✓")}
      ${isOfficeAdmin() ? homeTile("office", "Kantoor", "Beveiligde omgeving voor kosten, voorraad en bestellingen.", "K") : ""}
    </section>
  `;
}

function renderUsageTable(usages) {
  if (!usages.length) return `<div class="panel empty">Er zijn nog geen onderdelen gebruikt.</div>`;
  const officeCols = isOfficeAdmin() ? `<th>Prijs</th><th>Kosten</th>` : "";
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Koffer</th><th>Artikel</th><th>Gebruikt</th><th>Aanvullen</th>${officeCols}<th>Status</th></tr></thead>
        <tbody>
          ${usages
            .map((usage) => {
              const officeCells = isOfficeAdmin()
                ? `<td>${euro(usage.purchasePriceAtTime ?? usage.article.purchasePrice)}</td><td>${euro(usage.totalPrice ?? usage.usedQuantity * (usage.purchasePriceAtTime ?? usage.article.purchasePrice))}</td>`
                : "";
              return `
                <tr>
                  <td>${usage.kitId}</td>
                  <td>${usage.article.description}</td>
                  <td>${usage.usedQuantity}</td>
                  <td>${usage.usedQuantity}</td>
                  ${officeCells}
                  <td><span class="badge">${usage.orderStatus}</span></td>
                </tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function exportRows(projectId) {
  const project = byId(state.projects, projectId);
  return enrichedUsages(projectId)
    .filter((usage) => usage.usedQuantity > 0)
    .map((usage) => {
      const base = {
        Projectnaam: project.projectName,
        Klant: project.customer,
        Adres: project.address,
        Monteur: project.technician,
        Datum: project.date,
        Koffer: usage.kitId,
        Omschrijving: usage.article.description,
        "Standaard aantal": usage.article.defaultQuantity,
        "Gebruikt aantal": usage.usedQuantity,
        "Aan te vullen aantal": usage.usedQuantity,
        Bestelstatus: usage.orderStatus,
      };
      if (!isOfficeAdmin()) return base;
      return {
        ...base,
        Inkoopprijs: usage.purchasePriceAtTime ?? usage.article.purchasePrice,
        Kosten: usage.totalPrice ?? usage.usedQuantity * (usage.purchasePriceAtTime ?? usage.article.purchasePrice),
        "Artikelnummer": usage.article.supplierArticleNumber,
      };
    });
}

function exportPdf(projectId) {
  const project = byId(state.projects, projectId);
  const rows = enrichedUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  if (!rows.length) return alert("Geen gebruikte artikelen om te exporteren.");
  document.getElementById("print-report").innerHTML = `
    <h1>Aanvullijst / Projectrapport</h1>
    <p><strong>${project.projectName}</strong><br />${project.customer}<br />${project.address}<br />${project.technician} · ${project.date}</p>
    ${renderUsageTable(rows)}
    ${isOfficeAdmin() ? `<h2>Totaal materiaalkosten: ${euro(projectTotal(projectId))}</h2>` : ""}
  `;
  window.print();
}

function renderOffice(section = "") {
  if (section) {
    const routeTabs = {
      projects: "Projecten",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      prices: "Prijzen",
      users: "Gebruikers",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Koffers", "Garage Box", "Bestellen", "Kosten", "Prijzen", "Gebruikers"];
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${state.projects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${state.projects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(state.projects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(openOrderValue())}</strong></div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.dashboardTab === tab ? "active" : ""}" onclick="setDashboardTab('${tab}')">${tab}</button>`).join("")}</div>
    ${renderDashboardTab()}
  `;
}

function setDashboardTab(tab) {
  ui.dashboardTab = tab;
  const tabRoutes = {
    Projecten: "projects",
    Koffers: "kits",
    "Garage Box": "garage-box",
    Bestellen: "orders",
    Kosten: "costs",
    Prijzen: "prices",
    Gebruikers: "users",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/office/${route}`)) {
    location.hash = `#/office/${route}`;
    return;
  }
  render();
}

function renderDashboardTab() {
  if (ui.dashboardTab === "Bestellen") return renderOrdering();
  if (ui.dashboardTab === "Koffers") return renderOrderAndKitStatus();
  if (ui.dashboardTab === "Garage Box") return renderGarageBox();
  if (ui.dashboardTab === "Kosten") return renderCosts();
  if (ui.dashboardTab === "Prijzen") return renderPrices();
  if (ui.dashboardTab === "Gebruikers") return renderUsers();
  return renderOfficeProjects();
}

function completeProject(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return alert("Afronden lukt niet: er is geen project geselecteerd.");
  if (!canAccessProject(project)) return alert("Afronden lukt niet: je hebt geen toegang tot dit project.");
  const used = projectUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  if (!used.length) return alert("Afronden lukt niet: vul minimaal 1 gebruikt onderdeel in.");
  if (!project.inventoryProcessed) processProjectInventory(project);
  project.status = "afgerond";
  project.completedAt = new Date().toISOString();
  project.completed_at = project.completedAt;
  project.inventoryProcessed = true;
  saveState();
  location.hash = `#/summary/${projectId}`;
  render();
}

function processProjectInventory(project) {
  const now = new Date();
  enrichedUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && usage.article)
    .forEach((usage) => {
      const article = usage.article;
      const current = article.currentStock ?? article.defaultQuantity;
      article.currentStock = current - usage.usedQuantity;
      article.lastUsedAt = project.date || now.toISOString().slice(0, 10);
      usage.replenishQuantity = usage.usedQuantity;
      usage.orderStatus = "Niet besteld";
      usage.purchasePriceAtTime = article.purchasePrice || null;
      usage.totalPrice = usage.purchasePriceAtTime ? usage.usedQuantity * usage.purchasePriceAtTime : 0;
      const line = upsertOrderLineFromUsage(usage, project, article, now);
      article.orderStatus = line.status;
    });
}

function orderingRows() {
  return state.orderLines
    .filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0)
    .map((line) => {
      const article = byId(state.articles, line.itemId);
      const projects = (line.projectIds || [line.projectId].filter(Boolean)).map((id) => byId(state.projects, id)).filter(Boolean);
      const mechanics = mechanicNamesByIds(line.mechanicIds || projects.map((project) => project.assignedMechanicId || project.mechanicId).filter(Boolean));
      const quantity = line.quantityToOrder ?? line.orderQuantity ?? 0;
      const price = line.purchasePrice ?? article?.purchasePrice ?? null;
      return {
        ...line,
        itemName: line.itemName || article?.description || "-",
        kitId: line.kitId || article?.kitId || "-",
        totalUsedQuantity: line.totalUsedQuantity ?? line.usedQuantity ?? 0,
        quantityToOrder: line.status === "Aangevuld" ? 0 : quantity,
        projectNames: projects.map((project) => project.projectName),
        mechanicNames: mechanics,
        supplierArticleNumber: line.supplierArticleNumber || article?.supplierArticleNumber || "",
        purchasePrice: price,
        totalPrice: price && line.status !== "Aangevuld" ? quantity * price : 0,
      };
    });
}

function filteredOrderingRows() {
  const search = ui.orderSearch.toLowerCase();
  return orderingRows().filter((row) => {
    const haystack = [row.itemName, row.projectNames.join(" "), row.mechanicNames.join(" "), row.kitId].join(" ").toLowerCase();
    return (
      (!search || haystack.includes(search)) &&
      (ui.orderKit === "ALL" || row.kitId === ui.orderKit) &&
      (ui.orderStatus === "ALL" || row.status === ui.orderStatus)
    );
  });
}

function renderOrdering() {
  const rows = filteredOrderingRows();
  const openRows = rows.filter((row) => row.status !== "Aangevuld");
  const openProjectIds = new Set(openRows.flatMap((row) => row.projectIds || [row.projectId].filter(Boolean)));
  const totalQuantity = openRows.reduce((sum, row) => sum + row.quantityToOrder, 0);
  const totalAmount = openRows.reduce((sum, row) => sum + (row.purchasePrice ? row.quantityToOrder * row.purchasePrice : 0), 0);
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open bestelregels</span><strong>${openRows.length}</strong></div>
      <div class="stat-card"><span>Artikelen te bestellen</span><strong>${totalQuantity}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(totalAmount)}</strong></div>
      <div class="stat-card"><span>Projecten met open verbruik</span><strong>${openProjectIds.size}</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <div class="form-grid">
        <label>Zoeken <input value="${escapeAttr(ui.orderSearch)}" placeholder="Artikel, project of monteur" oninput="setOrderFilter('orderSearch', this.value)" /></label>
        <label>Koffer
          <select onchange="setOrderFilter('orderKit', this.value)">
            <option value="ALL">Alle koffers</option>
            ${state.kits.map((kit) => `<option value="${kit.id}" ${ui.orderKit === kit.id ? "selected" : ""}>${kit.id}</option>`).join("")}
          </select>
        </label>
        <label>Status
          <select onchange="setOrderFilter('orderStatus', this.value)">
            <option value="ALL">Alle statussen</option>
            ${ORDER_STATUSES.map((status) => `<option value="${status}" ${ui.orderStatus === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn" onclick="bulkSetOrderStatus('Besteld')">Markeer als besteld</button>
        <button class="btn secondary" onclick="bulkSetOrderStatus('Ontvangen')">Markeer als ontvangen</button>
        <button class="btn success" onclick="bulkSetOrderStatus('Aangevuld')">Markeer als aangevuld</button>
        <button class="btn secondary" onclick="exportOrderingCsv()">CSV export</button>
        <button class="btn secondary" onclick="exportOrderingPdf()">PDF export</button>
      </div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th></th><th>Artikel</th><th>Koffer</th><th>Totaal gebruikt</th><th>Te bestellen</th><th>Project(en)</th><th>Monteur(s)</th><th>Artikelnummer</th><th>Prijs per stuk</th><th>Totaal</th><th>Status</th></tr></thead>
        <tbody>${rows
          .map((row) => `<tr>
            <td><input type="checkbox" ${ui.selectedOrderLineIds.includes(row.id) ? "checked" : ""} onchange="toggleOrderRow('${row.id}', this.checked)" /></td>
            <td>${row.itemName}</td><td>${row.kitId}</td><td>${row.totalUsedQuantity}</td><td>${row.quantityToOrder}</td>
            <td>${row.projectNames.join(", ") || "-"}</td><td>${row.mechanicNames.join(", ") || "-"}</td>
            <td>${row.supplierArticleNumber || "-"}</td><td>${row.purchasePrice ? euro(row.purchasePrice) : "Onbekend"}</td>
            <td>${row.purchasePrice ? euro(row.quantityToOrder * row.purchasePrice) : "Onbekend"}</td><td><span class="badge ${statusClass(row.status)}">${row.status}</span></td>
          </tr>`)
          .join("")}</tbody>
      </table>
    </div>`;
}

function orderingExportRows() {
  return filteredOrderingRows().map((row) => ({
    Artikel: row.itemName,
    Koffer: row.kitId,
    "Totaal gebruikt": row.totalUsedQuantity,
    "Te bestellen": row.quantityToOrder,
    "Project(en)": row.projectNames.join(", "),
    "Monteur(s)": row.mechanicNames.join(", "),
    Artikelnummer: row.supplierArticleNumber,
    "Prijs per stuk": row.purchasePrice ?? "Onbekend",
    Totaal: row.purchasePrice ? row.quantityToOrder * row.purchasePrice : "Onbekend",
    Status: row.status,
  }));
}

function exportOrderingCsv() {
  downloadCsv(orderingExportRows(), "bestellen.csv");
}

function exportOrderingPdf() {
  const rows = filteredOrderingRows();
  if (!rows.length) return alert("Geen bestelregels om te exporteren.");
  document.getElementById("print-report").innerHTML = `
    <h1>Bestellen</h1>
    <p>Alff Installaties · ${new Date().toLocaleDateString("nl-NL")}</p>
    <table>
      <thead><tr><th>Artikel</th><th>Koffer</th><th>Te bestellen</th><th>Project(en)</th><th>Monteur(s)</th><th>Status</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row.itemName}</td><td>${row.kitId}</td><td>${row.quantityToOrder}</td><td>${row.projectNames.join(", ")}</td><td>${row.mechanicNames.join(", ")}</td><td>${row.status}</td></tr>`).join("")}</tbody>
    </table>`;
  window.print();
}

function renderGarageBox() {
  const rows = state.articles.filter((article) => article.active);
  const totalValue = rows.reduce((sum, article) => sum + (article.garageStock || 0) * (article.purchasePrice || 0), 0);
  const low = rows.filter((article) => garageStatus(article) !== "Voldoende").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Garage Box artikelen</span><strong>${rows.length}</strong></div>
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(totalValue)}</strong></div>
      <div class="stat-card"><span>Laag/op/bestellen</span><strong>${low}</strong></div>
      <div class="stat-card"><span>Locatie</span><strong>Garage Box</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px"><h2>Garage Box voorraad</h2><button class="btn secondary" onclick="exportGarageBoxCsv()">Export CSV</button></section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Artikel</th><th>Voorraad</th><th>Minimum</th><th>Bestelpunt</th><th>Artikelnummer</th><th>Inkoopprijs</th><th>Voorraadwaarde</th><th>Status</th></tr></thead>
        <tbody>${rows.map((article) => `<tr>
          <td>${article.description}</td>
          <td><input type="number" min="0" value="${article.garageStock}" onchange="updateArticle('${article.id}', 'garageStock', this.value)" /></td>
          <td><input type="number" min="0" value="${article.garageMinimumStock}" onchange="updateArticle('${article.id}', 'garageMinimumStock', this.value)" /></td>
          <td><input type="number" min="0" value="${article.garageReorderPoint}" onchange="updateArticle('${article.id}', 'garageReorderPoint', this.value)" /></td>
          <td>${article.supplierArticleNumber || "-"}</td><td>${article.purchasePrice ? euro(article.purchasePrice) : "Onbekend"}</td>
          <td>${article.purchasePrice ? euro((article.garageStock || 0) * article.purchasePrice) : "Onbekend"}</td>
          <td><span class="badge ${garageStatusClass(garageStatus(article))}">${garageStatus(article)}</span></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function exportGarageBoxCsv() {
  downloadCsv(
    state.articles.filter((article) => article.active).map((article) => ({
      Artikel: article.description,
      "Voorraad Garage Box": article.garageStock,
      Minimumvoorraad: article.garageMinimumStock,
      Bestelpunt: article.garageReorderPoint,
      Artikelnummer: article.supplierArticleNumber,
      Inkoopprijs: article.purchasePrice,
      Voorraadwaarde: article.purchasePrice ? (article.garageStock || 0) * article.purchasePrice : "Onbekend",
      Status: garageStatus(article),
    })),
    "garage-box-voorraad.csv",
  );
}

function renderArticleAdminTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Koffer</th><th>Omschrijving</th><th>Standaard</th><th>Voorraad</th><th>Minimum</th><th>Prijs</th><th>Artikelnummer</th><th>Status</th></tr></thead>
        <tbody>${state.articles.map((a) => `<tr>
          <td><input type="checkbox" ${a.active ? "checked" : ""} onchange="updateArticle('${a.id}', 'active', this.checked)" /></td>
          <td>${a.kitId}</td><td><input value="${escapeAttr(a.description)}" onchange="updateArticle('${a.id}', 'description', this.value)" /></td>
          <td><input type="number" min="0" value="${a.defaultQuantity}" onchange="updateArticle('${a.id}', 'defaultQuantity', this.value)" /></td>
          <td><input type="number" min="0" value="${a.currentStock ?? ""}" onchange="updateArticle('${a.id}', 'currentStock', this.value)" /></td>
          <td><input type="number" min="0" value="${a.minimumStock}" onchange="updateArticle('${a.id}', 'minimumStock', this.value)" /></td>
          <td><input type="number" min="0" step="0.01" value="${a.purchasePrice}" onchange="updateArticle('${a.id}', 'purchasePrice', this.value); updateArticle('${a.id}', 'priceSource', 'handmatig'); updateArticle('${a.id}', 'priceUpdatedAt', new Date().toISOString().slice(0,10))" /></td>
          <td><input value="${escapeAttr(a.supplierArticleNumber)}" onchange="updateArticle('${a.id}', 'supplierArticleNumber', this.value)" /></td>
          <td><span class="badge ${stockStatusClass(stockStatus(a))}">${stockStatus(a)}</span></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderManage() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Koffer toevoegen</h2>
      <form class="form-grid" onsubmit="addKit(event)">
        <label>Koffer ID <input name="id" required placeholder="Bijv. M010" /></label>
        <label>Omschrijving <input name="description" required placeholder="Bijv. installatiemateriaal" /></label>
        <button class="btn success" type="submit">Koffer toevoegen</button>
        <button class="btn warn" type="button" onclick="resetData()">Alle lokale data resetten</button>
      </form>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Artikel toevoegen</h2>
      <form class="form-grid" onsubmit="addArticle(event)">
        <label>Koffer <select name="kitId">${state.kits.map((kit) => `<option value="${kit.id}">${kit.id} - ${kit.description}</option>`).join("")}</select></label>
        <label>Omschrijving <input name="description" required /></label>
        <label>Standaard aantal <input name="defaultQuantity" type="number" min="0" value="1" required /></label>
        <label>Inkoopprijs <input name="purchasePrice" type="number" min="0" step="0.01" value="0" /></label>
        <label>Artikelnummer<input name="supplierArticleNumber" /></label>
        <button class="btn success" type="submit">Artikel toevoegen</button>
      </form>
    </section>
    ${renderArticleAdminTable()}
  `;
}

function addArticle(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const kitId = form.get("kitId");
  const defaultQuantity = Number(form.get("defaultQuantity")) || 0;
  state.articles.push({
    id: `${kitId}-${uid("custom")}`,
    kitId,
    description: form.get("description").trim(),
    defaultQuantity,
    garageStock: defaultQuantity * 4,
    garageMinimumStock: Math.max(2, defaultQuantity),
    garageReorderPoint: Math.max(4, defaultQuantity * 2),
    currentStock: defaultQuantity,
    minimumStock: Math.max(1, Math.ceil(defaultQuantity * 0.25)),
    lastRestockedAt: "",
    lastUsedAt: "",
    purchasePrice: Number(form.get("purchasePrice")) || 0,
    supplierArticleNumber: form.get("supplierArticleNumber").trim(),
    priceUpdatedAt: new Date().toISOString().slice(0, 10),
    priceSource: "handmatig",
    orderStatus: "Niet besteld",
    active: true,
  });
  saveState();
  render();
}

function renderCosts() {
  const rows = state.projects.filter(isProjectCompleted);
  if (!rows.length) return `<div class="panel empty">Nog geen afgeronde projecten.</div>`;
  return `
    <div class="table-wrap" style="margin-bottom:14px">
      <table>
        <thead><tr><th>Project</th><th>Klant</th><th>Monteur</th><th>Datum afgerond</th><th>Gebruikte artikelen</th><th>Materiaalkosten</th><th>Details</th></tr></thead>
        <tbody>${rows.map((project) => {
          const used = enrichedUsages(project.id).filter((usage) => usage.usedQuantity > 0);
          return `<tr><td>${project.projectName}</td><td>${project.customer}</td><td>${mechanicNameById(project.assignedMechanicId || project.mechanicId)}</td><td>${safeDate(project.completedAt)}</td><td>${used.length}</td><td>${euro(projectTotal(project.id))}</td><td>${used.map((usage) => `${usage.article.description} (${usage.usedQuantity}x ${euro(usage.purchasePriceAtTime ?? usage.article.purchasePrice)})`).join(", ")}</td></tr>`;
        }).join("")}</tbody>
      </table>
    </div>`;
}

function renderUsers() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Nieuwe gebruiker</h2>
      <form class="form-grid" onsubmit="addUser(event)">
        <label>Naam <input name="name" required /></label>
        <label>E-mail <input name="email" type="email" required /></label>
        <label>Wachtwoord <input name="password" type="text" required /></label>
        <label>Rol <select name="role" required><option value="mechanic">mechanic</option><option value="office_admin">office_admin</option></select></label>
        <button class="btn success" type="submit">Gebruiker aanmaken</button>
      </form>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Actief</th><th>Naam</th><th>E-mail</th><th>Rol</th><th>Actie</th></tr></thead>
      <tbody>${state.users.map((user) => `<tr>
        <td><input type="checkbox" ${user.active ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /></td>
        <td><input value="${escapeAttr(user.name)}" onchange="updateUser('${user.id}', 'name', this.value)" /></td>
        <td>${user.email}</td>
        <td><select onchange="updateUser('${user.id}', 'role', this.value)"><option value="mechanic" ${user.role === "mechanic" ? "selected" : ""}>mechanic</option><option value="office_admin" ${user.role === "office_admin" ? "selected" : ""}>office_admin</option></select></td>
        <td><button class="btn secondary" onclick="deactivateUser('${user.id}')">Deactiveren</button></td>
      </tr>`).join("")}</tbody>
    </table></div>`;
}

function addUser(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get("name").trim();
  const email = form.get("email").trim().toLowerCase();
  const password = form.get("password").trim();
  const role = form.get("role");
  if (!name || !email || !password || !role) return alert("Vul naam, e-mail, wachtwoord en rol in.");
  if (state.users.some((user) => user.email.toLowerCase() === email)) return alert("Deze e-mail bestaat al.");
  state.users.push({ id: uid("user"), name, email, password, role, active: true, createdAt: new Date().toISOString() });
  saveState();
  render();
}

function deactivateUser(userId) {
  const user = byId(state.users, userId);
  if (!user) return;
  user.active = false;
  saveState();
  render();
}

function renderPrices() {
  const noPrice = state.articles.filter((article) => !article.purchasePrice).length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Artikelen</span><strong>${state.articles.length}</strong></div>
      <div class="stat-card"><span>Zonder prijs</span><strong>${noPrice}</strong></div>
      <div class="stat-card"><span>Bronnen</span><strong>3</strong></div>
      <div class="stat-card"><span>Alleen kantoor</span><strong>Actief</strong></div>
    </section>
    ${noPrice ? `<div class="warning" style="margin-bottom:14px">${noPrice} artikel(en) hebben nog geen prijs.</div>` : ""}
    <section class="panel" style="margin-bottom:14px">
      <div class="button-row">
        <button class="btn" onclick="loadPricesFromBackend()">Prijzen opnieuw laden</button>
        <button class="btn secondary" onclick="exportPricesCsv()">CSV export prijzen</button>
        <label class="btn secondary">CSV import prijzen <input style="display:none" type="file" accept=".csv,text/csv" onchange="importPricesCsv(this.files[0])" /></label>
      </div>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Artikel ID</th><th>Omschrijving</th><th>Koffer</th><th>Artikelnummer</th><th>Prijs per stuk</th><th>Laatst bijgewerkt</th><th>Bron</th></tr></thead>
      <tbody>${state.articles.map((article) => `<tr>
        <td>${article.id}</td><td>${article.description}</td><td>${article.kitId}</td>
        <td><input value="${escapeAttr(article.supplierArticleNumber || "")}" onchange="updateArticle('${article.id}', 'supplierArticleNumber', this.value)" /></td>
        <td><input type="number" min="0" step="0.01" value="${article.purchasePrice || 0}" onchange="updateArticle('${article.id}', 'purchasePrice', this.value); updateArticle('${article.id}', 'priceSource', 'handmatig'); updateArticle('${article.id}', 'priceUpdatedAt', new Date().toISOString().slice(0,10))" /></td>
        <td>${safeDate(article.priceUpdatedAt)}</td><td>${article.priceSource || "handmatig"}</td>
      </tr>`).join("")}</tbody>
    </table></div>`;
}

function loadPricesFromBackend() {
  const backendUrl = "/api/prices";
  const mockData = [
    { articleNumber: "M001-1000", price: 3.45, updatedAt: "2026-05-29" },
    { articleNumber: "M001-1004", price: 4.93, updatedAt: "2026-05-29" },
    { articleNumber: "M004-1000", price: 12.75, updatedAt: "2026-05-29" },
    { articleNumber: "M004-1006", price: 14.97, updatedAt: "2026-05-29" },
  ];
  mockData.forEach((priceRow) => {
    const article = state.articles.find((item) => item.supplierArticleNumber === priceRow.articleNumber);
    if (!article) return;
    article.purchasePrice = Number(priceRow.price) || 0;
    article.priceUpdatedAt = priceRow.updatedAt;
    article.priceSource = "website/backend API";
  });
  saveState();
  alert(`Prijzen geladen via mock koppeling. Later alleen backendUrl aanpassen: ${backendUrl}`);
  render();
}

function importPricesCsv(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    String(reader.result || "")
      .split(/\r?\n/)
      .slice(1)
      .map((line) => line.split(","))
      .forEach(([articleNumber, , price]) => {
        const article = state.articles.find((item) => item.supplierArticleNumber === String(articleNumber || "").trim());
        if (!article) return;
        article.purchasePrice = Number(String(price || "").replace(",", ".")) || 0;
        article.priceUpdatedAt = new Date().toISOString().slice(0, 10);
        article.priceSource = "CSV import";
      });
    saveState();
    render();
  };
  reader.readAsText(file);
}

function exportPricesCsv() {
  downloadCsv(
    state.articles.map((article) => ({
      artikel_id: article.id,
      omschrijving: article.description,
      koffer: article.kitId,
      artikelnummer: article.supplierArticleNumber,
      prijs_per_stuk: article.purchasePrice || "",
      laatst_bijgewerkt: article.priceUpdatedAt || "",
      bron: article.priceSource || "handmatig",
    })),
    "prijzen.csv",
  );
}

function exportRows(projectId) {
  const project = byId(state.projects, projectId);
  return enrichedUsages(projectId)
    .filter((usage) => usage.usedQuantity > 0)
    .map((usage) => {
      const base = {
        Projectnaam: project.projectName,
        Klant: project.customer,
        Adres: project.address,
        Monteur: project.technician,
        Datum: project.date,
        Koffer: usage.kitId,
        Omschrijving: usage.article.description,
        "Standaard aantal": usage.article.defaultQuantity,
        "Gebruikt aantal": usage.usedQuantity,
        "Aan te vullen aantal": usage.usedQuantity,
        Bestelstatus: usage.orderStatus,
      };
      if (!isOfficeAdmin()) return base;
      return {
        ...base,
        Inkoopprijs: usage.purchasePriceAtTime ?? usage.article.purchasePrice,
        Kosten: usage.totalPrice ?? usage.usedQuantity * (usage.purchasePriceAtTime ?? usage.article.purchasePrice),
        Artikelnummer: usage.article.supplierArticleNumber,
      };
    });
}

function ensureWorkOrderSettings() {
  state.checklistSettings = state.checklistSettings || {
    minRequiredPhotos: 1,
    mechanicSignatureRequired: false,
    coTemplateRequired: true,
    requiredHours: true,
    checklistItems: [
      { id: "gas-tightness", label: "Gasdichtheid gecontroleerd", required: false, active: true },
      { id: "flue-checked", label: "Rookgasafvoer gecontroleerd", required: false, active: true },
      { id: "air-supply", label: "Luchttoevoer gecontroleerd", required: false, active: true },
      { id: "safety-devices", label: "Beveiligingen gecontroleerd", required: false, active: true },
      { id: "combustion-checked", label: "Verbranding gecontroleerd", required: false, active: true },
    ],
  };
}

function ensureWorkOrder(project) {
  if (!project) return null;
  ensureWorkOrderSettings();
  project.workOrder = project.workOrder || {};
  project.workOrder.gasApplianceWork = project.workOrder.gasApplianceWork || "";
  project.workOrder.measurements = project.workOrder.measurements || {};
  project.workOrder.combustion = project.workOrder.combustion || {};
  project.workOrder.installationSafe = project.workOrder.installationSafe || "";
  project.workOrder.unsafeReason = project.workOrder.unsafeReason || "";
  project.workOrder.customerSignature = project.workOrder.customerSignature || "";
  project.workOrder.mechanicSignature = project.workOrder.mechanicSignature || "";
  project.workOrder.photos = project.workOrder.photos || [];
  project.workOrder.hours = project.workOrder.hours || { startTime: "", endTime: "", breakMinutes: 0, totalHours: 0 };
  project.workOrder.solution = project.workOrder.solution || "";
  project.workOrder.notes = project.workOrder.notes || "";
  project.workOrder.checklistAnswers = project.workOrder.checklistAnswers || {};
  return project.workOrder;
}

function numericValue(value) {
  return value !== "" && value !== null && value !== undefined && !Number.isNaN(Number(value)) && Number(value) >= 0;
}

function setWorkOrderField(projectId, path, value) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  if (!workOrder) return;
  const parts = path.split(".");
  let target = workOrder;
  while (parts.length > 1) {
    const part = parts.shift();
    target[part] = target[part] || {};
    target = target[part];
  }
  target[parts[0]] = value;
  if (path.startsWith("hours.")) calculateWorkOrderHours(projectId);
  saveState();
  render();
}

function calculateWorkOrderHours(projectId) {
  const hours = ensureWorkOrder(byId(state.projects, projectId)).hours;
  if (!hours.startTime || !hours.endTime) {
    hours.totalHours = 0;
    return;
  }
  const [sh, sm] = hours.startTime.split(":").map(Number);
  const [eh, em] = hours.endTime.split(":").map(Number);
  const start = sh * 60 + sm;
  let end = eh * 60 + em;
  if (end < start) end += 24 * 60;
  const totalMinutes = Math.max(0, end - start - (Number(hours.breakMinutes) || 0));
  hours.totalHours = Math.round((totalMinutes / 60) * 100) / 100;
}

function validateWorkOrder(project) {
  ensureWorkOrderSettings();
  const workOrder = ensureWorkOrder(project);
  const errors = [];
  if (!project) errors.push("Er is geen project geselecteerd.");
  if (!workOrder.gasApplianceWork) errors.push("Beantwoord: Zijn er werkzaamheden geweest aan een gastoestel?");
  if (state.checklistSettings.requiredHours && (!workOrder.hours.startTime || !workOrder.hours.endTime || workOrder.hours.totalHours <= 0)) errors.push("Urenregistratie is verplicht.");
  if (!workOrder.customerSignature) errors.push("Handtekening opdrachtgever is verplicht.");
  if ((workOrder.photos || []).length < state.checklistSettings.minRequiredPhotos) errors.push("Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.");
  if (state.checklistSettings.mechanicSignatureRequired && !workOrder.mechanicSignature) errors.push("Handtekening monteur is verplicht.");
  state.checklistSettings.checklistItems.filter((item) => item.active && item.required).forEach((item) => {
    if (!workOrder.checklistAnswers[item.id]) errors.push(`Checklistpunt verplicht: ${item.label}`);
  });
  if (workOrder.gasApplianceWork === "ja") {
    if (!numericValue(workOrder.measurements.CO_before_ppm) || !numericValue(workOrder.measurements.CO_after_ppm)) errors.push("CO meting opstellingsruimte vóór en ná werkzaamheden is verplicht.");
    const fields = [
      ["co_full_load", "CO vollast"],
      ["co_low_load", "CO laaglast"],
      ["co2_full_load", "CO2 vollast"],
      ["co2_low_load", "CO2 laaglast"],
      ["o2_full_load", "O2 vollast"],
      ["o2_low_load", "O2 laaglast"],
      ["draft_pa", "trekmeting"],
      ["gas_supply_pressure", "gasvoordruk"],
      ["operating_pressure", "werkdruk"],
    ];
    const missing = fields.filter(([key]) => !numericValue(workOrder.combustion[key]));
    if (missing.length) {
      errors.push("CO-keur meetwaarden zijn verplicht voordat de werkbon kan worden afgesloten.");
      missing.forEach(([, label]) => errors.push(`${label} is verplicht en moet numeriek zijn.`));
    }
    if (!workOrder.installationSafe) errors.push("Vul in of de installatie veilig te gebruiken is.");
    if (workOrder.installationSafe === "nee" && !workOrder.unsafeReason.trim()) errors.push("Motivatie verplicht wanneer installatie onveilig is.");
  }
  return errors;
}

function renderWorkOrderForm(project) {
  const workOrder = ensureWorkOrder(project);
  const gasRequired = workOrder.gasApplianceWork === "ja";
  setTimeout(setupSignaturePads, 0);
  return `
    <section class="panel workorder-panel" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Werkbon / CO-keur</h2>
          <p>Vul verplichte veiligheids-, uren- en bewijsvelden in voordat je afsluit.</p>
        </div>
        ${workOrder.installationSafe === "nee" ? `<span class="badge danger">Onveilig</span>` : `<span class="badge ${gasRequired ? "warn" : "ok"}">${gasRequired ? "CO-keur verplicht" : "Standaard werkbon"}</span>`}
      </div>
      <div class="form-grid">
        <label>Zijn er werkzaamheden geweest aan een gastoestel?
          <select required onchange="setWorkOrderField('${project.id}', 'gasApplianceWork', this.value)">
            <option value="">Kies...</option>
            <option value="ja" ${workOrder.gasApplianceWork === "ja" ? "selected" : ""}>Ja</option>
            <option value="nee" ${workOrder.gasApplianceWork === "nee" ? "selected" : ""}>Nee</option>
          </select>
        </label>
        <label>Starttijd <input type="time" value="${workOrder.hours.startTime}" onchange="setWorkOrderField('${project.id}', 'hours.startTime', this.value)" /></label>
        <label>Eindtijd <input type="time" value="${workOrder.hours.endTime}" onchange="setWorkOrderField('${project.id}', 'hours.endTime', this.value)" /></label>
        <label>Pauze minuten <input type="number" min="0" value="${workOrder.hours.breakMinutes}" onchange="setWorkOrderField('${project.id}', 'hours.breakMinutes', Number(this.value) || 0)" /></label>
        <label>Totaal uren <input readonly value="${workOrder.hours.totalHours}" /></label>
      </div>
      ${gasRequired ? renderCoKeurFields(project, workOrder) : ""}
      ${renderChecklistAnswers(project, workOrder)}
      <div class="form-grid" style="margin-top:14px">
        <label>Oplossing / uitgevoerde werkzaamheden <textarea rows="4" onchange="setWorkOrderField('${project.id}', 'solution', this.value)">${workOrder.solution}</textarea></label>
        <label>Opmerkingen monteur <textarea rows="4" onchange="setWorkOrderField('${project.id}', 'notes', this.value)">${workOrder.notes}</textarea></label>
      </div>
      <section style="margin-top:14px">
        <h3>Foto's</h3>
        <p>Minimaal ${state.checklistSettings.minRequiredPhotos} foto verplicht. Huidig: ${workOrder.photos.length}</p>
        <label>Foto uploaden <input type="file" accept="image/*" capture="environment" multiple onchange="addWorkOrderPhotos('${project.id}', this.files)" /></label>
        <div class="photo-grid">${workOrder.photos.map((photo, index) => `<div class="photo-thumb"><img src="${photo.dataUrl}" alt="Werkbon foto ${index + 1}" /><button class="btn secondary" onclick="removeWorkOrderPhoto('${project.id}', ${index})">Verwijderen</button></div>`).join("")}</div>
      </section>
      <section style="margin-top:14px">
        <h3>Handtekeningen</h3>
        <div class="signature-grid">
          ${renderSignatureBox(project.id, "customerSignature", "Handtekening klant", workOrder.customerSignature)}
          ${renderSignatureBox(project.id, "mechanicSignature", `Handtekening monteur${state.checklistSettings.mechanicSignatureRequired ? " (verplicht)" : ""}`, workOrder.mechanicSignature)}
        </div>
      </section>
    </section>`;
}

function renderCoKeurFields(project, workOrder) {
  const c = workOrder.combustion;
  const m = workOrder.measurements;
  const numberInput = (path, label, value) => `<label>${label}<input type="number" min="0" step="0.01" value="${value ?? ""}" onchange="setWorkOrderField('${project.id}', '${path}', this.value)" /></label>`;
  return `
    <section class="co-section">
      <h3>CO-keur metingen</h3>
      <div class="form-grid">
        ${numberInput("measurements.CO_before_ppm", "CO meting vóór werkzaamheden (ppm)", m.CO_before_ppm)}
        ${numberInput("measurements.CO_after_ppm", "CO meting ná werkzaamheden (ppm)", m.CO_after_ppm)}
        ${numberInput("combustion.co_full_load", "CO vollast", c.co_full_load)}
        ${numberInput("combustion.co_low_load", "CO laaglast", c.co_low_load)}
        ${numberInput("combustion.co2_full_load", "CO2 vollast", c.co2_full_load)}
        ${numberInput("combustion.co2_low_load", "CO2 laaglast", c.co2_low_load)}
        ${numberInput("combustion.o2_full_load", "O2 vollast", c.o2_full_load)}
        ${numberInput("combustion.o2_low_load", "O2 laaglast", c.o2_low_load)}
        ${numberInput("combustion.draft_pa", "Trekmeting", c.draft_pa)}
        ${numberInput("combustion.gas_supply_pressure", "Gasvoordruk", c.gas_supply_pressure)}
        ${numberInput("combustion.operating_pressure", "Werkdruk", c.operating_pressure)}
        <label>Installatie veilig te gebruiken?
          <select onchange="setWorkOrderField('${project.id}', 'installationSafe', this.value)">
            <option value="">Kies...</option>
            <option value="ja" ${workOrder.installationSafe === "ja" ? "selected" : ""}>Ja</option>
            <option value="nee" ${workOrder.installationSafe === "nee" ? "selected" : ""}>Nee</option>
          </select>
        </label>
        ${workOrder.installationSafe === "nee" ? `<label>Reden onveilig<textarea rows="3" onchange="setWorkOrderField('${project.id}', 'unsafeReason', this.value)">${workOrder.unsafeReason}</textarea></label>` : ""}
      </div>
    </section>`;
}

function renderChecklistAnswers(project, workOrder) {
  return `<section style="margin-top:14px"><h3>Algemene controlepunten</h3><div class="checklist-grid">${state.checklistSettings.checklistItems.filter((item) => item.active).map((item) => `<label class="check-row"><input type="checkbox" ${workOrder.checklistAnswers[item.id] ? "checked" : ""} onchange="setWorkOrderField('${project.id}', 'checklistAnswers.${item.id}', this.checked)" />${item.label}${item.required ? " *" : ""}</label>`).join("")}</div></section>`;
}

function renderSignatureBox(projectId, field, title, value) {
  return `<div class="signature-box"><strong>${title}</strong><canvas width="360" height="150" data-project-id="${projectId}" data-signature-field="${field}"></canvas>${value ? `<img class="signature-preview" src="${value}" alt="${title}" />` : ""}<div class="button-row"><button class="btn secondary" onclick="clearSignature('${projectId}', '${field}')">Wissen</button></div></div>`;
}

function addWorkOrderPhotos(projectId, files) {
  const workOrder = ensureWorkOrder(byId(state.projects, projectId));
  [...files].forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      workOrder.photos.push({ id: uid("photo"), type: "vrije foto", name: file.name, dataUrl: reader.result, createdAt: new Date().toISOString() });
      saveState();
      render();
    };
    reader.readAsDataURL(file);
  });
}

function removeWorkOrderPhoto(projectId, index) {
  ensureWorkOrder(byId(state.projects, projectId)).photos.splice(index, 1);
  saveState();
  render();
}

function clearSignature(projectId, field) {
  setWorkOrderField(projectId, field, "");
}

function setupSignaturePads() {
  document.querySelectorAll("canvas[data-signature-field]").forEach((canvas) => {
    if (canvas.dataset.ready === "true") return;
    canvas.dataset.ready = "true";
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#f5f5f5";
    ctx.lineWidth = 2;
    let drawing = false;
    const point = (event) => {
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches?.[0];
      return { x: (touch ? touch.clientX : event.clientX) - rect.left, y: (touch ? touch.clientY : event.clientY) - rect.top };
    };
    const start = (event) => {
      drawing = true;
      const p = point(event);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      event.preventDefault();
    };
    const move = (event) => {
      if (!drawing) return;
      const p = point(event);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      event.preventDefault();
    };
    const end = () => {
      if (!drawing) return;
      drawing = false;
      const project = byId(state.projects, canvas.dataset.projectId);
      ensureWorkOrder(project)[canvas.dataset.signatureField] = canvas.toDataURL("image/png");
      saveState();
    };
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mouseleave", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);
  });
}

function escapeHtml(value) {
  return String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderWorkOrderForm(project) {
  const workOrder = ensureWorkOrder(project);
  const gasRequired = workOrder.gasApplianceWork === "ja";
  setTimeout(setupSignaturePads, 0);
  const validationErrors = validateWorkOrder(project);
  return `
    <section class="panel workorder-panel" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Werkbon / CO-keur</h2>
          <p>Vul de verplichte veiligheids-, uren- en bewijsvelden in voordat je de werkbon afsluit.</p>
        </div>
        ${workOrder.installationSafe === "nee" ? `<span class="badge danger">Onveilig</span>` : `<span class="badge ${gasRequired ? "warn" : "ok"}">${gasRequired ? "CO-keur verplicht" : "Standaard werkbon"}</span>`}
      </div>
      ${validationErrors.length ? `<div class="validation-box">${validationErrors.slice(0, 5).map((error) => `<div>${escapeHtml(error)}</div>`).join("")}${validationErrors.length > 5 ? `<div>+ ${validationErrors.length - 5} extra verplichte punten</div>` : ""}</div>` : `<div class="success-box">Werkbonvelden zijn compleet voor de huidige instellingen.</div>`}
      <div class="form-grid">
        <label>Zijn er werkzaamheden geweest aan een gastoestel?
          <select required onchange="setWorkOrderField('${project.id}', 'gasApplianceWork', this.value)">
            <option value="">Kies...</option>
            <option value="ja" ${workOrder.gasApplianceWork === "ja" ? "selected" : ""}>Ja</option>
            <option value="nee" ${workOrder.gasApplianceWork === "nee" ? "selected" : ""}>Nee</option>
          </select>
        </label>
        <label>Starttijd <input type="time" value="${escapeAttr(workOrder.hours.startTime)}" onchange="setWorkOrderField('${project.id}', 'hours.startTime', this.value)" /></label>
        <label>Eindtijd <input type="time" value="${escapeAttr(workOrder.hours.endTime)}" onchange="setWorkOrderField('${project.id}', 'hours.endTime', this.value)" /></label>
        <label>Pauze minuten <input type="number" min="0" value="${workOrder.hours.breakMinutes}" onchange="setWorkOrderField('${project.id}', 'hours.breakMinutes', Number(this.value) || 0)" /></label>
        <label>Totaal uren <input readonly value="${workOrder.hours.totalHours}" /></label>
      </div>
      ${gasRequired ? renderCoKeurFields(project, workOrder) : `<div class="info-box">CO-keur meetvelden worden verplicht zichtbaar zodra gastoestelwerk op Ja staat.</div>`}
      ${renderChecklistAnswers(project, workOrder)}
      <div class="form-grid" style="margin-top:14px">
        <label>Oplossing / uitgevoerde werkzaamheden <textarea rows="4" onchange="setWorkOrderField('${project.id}', 'solution', this.value)">${escapeHtml(workOrder.solution)}</textarea></label>
        <label>Opmerkingen monteur <textarea rows="4" onchange="setWorkOrderField('${project.id}', 'notes', this.value)">${escapeHtml(workOrder.notes)}</textarea></label>
      </div>
      <section style="margin-top:14px">
        <h3>Foto's</h3>
        <p>Minimaal ${state.checklistSettings.minRequiredPhotos} foto verplicht. Huidig: ${workOrder.photos.length}</p>
        <div class="form-grid">
          <label>Fotocategorie
            <select id="photo-category-${project.id}">
              <option value="installatie">Installatie</option>
              <option value="voor situatie">Voor situatie</option>
              <option value="na situatie">Na situatie</option>
              <option value="rookgas / veiligheid">Rookgas / veiligheid</option>
              <option value="vrije foto">Vrije foto</option>
            </select>
          </label>
          <label>Foto uploaden <input type="file" accept="image/*" capture="environment" multiple onchange="addWorkOrderPhotos('${project.id}', this.files, document.getElementById('photo-category-${project.id}')?.value)" /></label>
        </div>
        <div class="photo-grid">${workOrder.photos.map((photo, index) => `<div class="photo-thumb"><img src="${photo.dataUrl}" alt="Werkbon foto ${index + 1}" /><span>${escapeHtml(photo.type || "vrije foto")}</span><button class="btn secondary" onclick="removeWorkOrderPhoto('${project.id}', ${index})">Verwijderen</button></div>`).join("")}</div>
      </section>
      <section style="margin-top:14px">
        <h3>Handtekeningen</h3>
        <div class="signature-grid">
          ${renderSignatureBox(project.id, "customerSignature", "Handtekening klant", workOrder.customerSignature)}
          ${renderSignatureBox(project.id, "mechanicSignature", `Handtekening monteur${state.checklistSettings.mechanicSignatureRequired ? " (verplicht)" : ""}`, workOrder.mechanicSignature)}
        </div>
      </section>
    </section>`;
}

function addWorkOrderPhotos(projectId, files, type = "vrije foto") {
  const workOrder = ensureWorkOrder(byId(state.projects, projectId));
  [...files].forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      workOrder.photos.push({ id: uid("photo"), type, name: file.name, dataUrl: reader.result, createdAt: new Date().toISOString() });
      saveState();
      render();
    };
    reader.readAsDataURL(file);
  });
}

function renderTechnician(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return `<div class="panel empty">Project niet gevonden.</div>`;
  if (!canAccessProject(project)) return `<div class="panel empty">Geen toegang tot dit project.</div>`;
  const usages = filteredUsages(projectId);
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} - ${project.address}<br />${project.technician} - ${project.date}</p>
      ${isMechanic() && project.status === "toegewezen" ? `<button class="btn" onclick="startProject('${project.id}')">Start uitvoering</button>` : ""}
      <div class="filters">
        <input value="${escapeAttr(ui.search)}" placeholder="Zoek artikel..." oninput="setSearch(this.value)" />
        ${renderKitFilter(project.selectedKitIds)}
      </div>
    </section>
    ${!isProjectCompleted(project) ? renderWorkOrderForm(project) : renderWorkOrderReadOnly(project)}
    <section class="article-list">
      ${usages.length ? usages.map(renderArticleUsage).join("") : `<div class="panel empty">Geen artikelen gevonden.</div>`}
    </section>
    <section class="sticky-summary">
      <div><strong>${totalUsed(projectId)} gebruikt</strong><br /><span>${isProjectCompleted(project) ? "Werkbon afgerond" : "Aan te vullen aantallen worden bijgehouden"}</span></div>
      ${!isProjectCompleted(project) ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : `<a class="btn success" href="#/summary/${projectId}">Rapport</a>`}
    </section>
  `;
}

function renderSummary(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return `<div class="panel empty">Project niet gevonden.</div>`;
  if (!canAccessProject(project)) return `<div class="panel empty">Geen toegang tot dit project.</div>`;
  const used = enrichedUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} - ${project.address}<br />${project.technician} - ${project.date}</p>
      <section class="stats">
        <div class="stat-card"><span>Gebruikte regels</span><strong>${used.length}</strong></div>
        <div class="stat-card"><span>Totaal gebruikt</span><strong>${totalUsed(projectId)}</strong></div>
        ${isOfficeAdmin() ? `<div class="stat-card"><span>Materiaalkosten</span><strong>${euro(projectTotal(projectId))}</strong></div>` : `<div class="stat-card"><span>Aan te vullen</span><strong>${totalUsed(projectId)}</strong></div>`}
        <div class="stat-card"><span>Status</span><strong>${project.status}</strong></div>
      </section>
      <div class="button-row">
        ${!isProjectCompleted(project) ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : ""}
        <button class="btn secondary" onclick="exportCsv('${projectId}')">Export CSV</button>
        <button class="btn secondary" onclick="exportPdf('${projectId}')">Export PDF werkbon</button>
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/office">Naar kantoor</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
      </div>
    </section>
    ${!isProjectCompleted(project) ? renderWorkOrderForm(project) : renderWorkOrderReadOnly(project)}
    ${renderUsageTable(used)}
  `;
}

function renderWorkOrderReadOnly(project) {
  const workOrder = ensureWorkOrder(project);
  const photos = workOrder.photos || [];
  return `
    <section class="panel workorder-panel" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Afgeronde werkbon</h2>
          <p>Gastoestel: ${workOrder.gasApplianceWork || "-"} - Uren: ${workOrder.hours.totalHours || 0}</p>
        </div>
        ${workOrder.installationSafe === "nee" ? `<span class="badge danger">Onveilig</span>` : `<span class="badge ok">Afgerond</span>`}
      </div>
      ${workOrder.installationSafe === "nee" ? `<div class="danger-box"><strong>Admin waarschuwing:</strong> ${escapeHtml(workOrder.unsafeReason)}</div>` : ""}
      <div class="meta-grid">
        <div class="meta"><span>CO voor</span><strong>${workOrder.measurements.CO_before_ppm ?? "-"}</strong></div>
        <div class="meta"><span>CO na</span><strong>${workOrder.measurements.CO_after_ppm ?? "-"}</strong></div>
        <div class="meta"><span>Foto's</span><strong>${photos.length}</strong></div>
        <div class="meta"><span>Klant handtekening</span><strong>${workOrder.customerSignature ? "Aanwezig" : "Ontbreekt"}</strong></div>
      </div>
      <p><strong>Oplossing:</strong> ${escapeHtml(workOrder.solution || "-")}</p>
      <p><strong>Opmerkingen:</strong> ${escapeHtml(workOrder.notes || "-")}</p>
    </section>`;
}

function renderUsageTable(usages) {
  if (!usages.length) return `<div class="panel empty">Er zijn nog geen onderdelen gebruikt.</div>`;
  const officeCols = isOfficeAdmin() ? `<th>Prijs</th><th>Kosten</th>` : "";
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Koffer</th><th>Artikel</th><th>Gebruikt</th><th>Aanvullen</th>${officeCols}<th>Status</th></tr></thead>
        <tbody>
          ${usages.map((usage) => {
            const price = usage.purchasePriceAtTime ?? usage.article.purchasePrice;
            const officeCells = isOfficeAdmin() ? `<td>${price ? euro(price) : "Onbekend"}</td><td>${price ? euro(usage.usedQuantity * price) : "Onbekend"}</td>` : "";
            return `<tr>
              <td>${usage.kitId}</td>
              <td>${usage.article.description}</td>
              <td>${usage.usedQuantity}</td>
              <td>${usage.usedQuantity}</td>
              ${officeCells}
              <td><span class="badge">${usage.orderStatus}</span></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>`;
}

function completeProject(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return alert("Afronden lukt niet: er is geen project geselecteerd.");
  if (!canAccessProject(project)) return alert("Afronden lukt niet: je hebt geen toegang tot dit project.");
  const used = projectUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  if (!used.length) return alert("Afronden lukt niet: vul minimaal 1 gebruikt onderdeel in.");
  const workOrderErrors = validateWorkOrder(project);
  if (workOrderErrors.length) {
    alert(workOrderErrors.join("\n"));
    return;
  }
  if (!project.inventoryProcessed) processProjectInventory(project);
  const now = new Date().toISOString();
  const workOrder = ensureWorkOrder(project);
  workOrder.closedAt = now;
  workOrder.archivedAt = now;
  workOrder.pdfGeneratedAt = workOrder.pdfGeneratedAt || now;
  project.status = "afgerond";
  project.completedAt = now;
  project.completed_at = now;
  project.inventoryProcessed = true;
  project.archived = true;
  state.adminNotifications = state.adminNotifications || [];
  state.adminNotifications.push({
    id: uid("note"),
    type: "workorder_completed",
    projectId,
    createdAt: now,
    message: `Werkbon ${project.projectName} afgerond door ${project.technician}.`,
    severity: workOrder.installationSafe === "nee" ? "danger" : "ok",
  });
  saveState();
  location.hash = `#/summary/${projectId}`;
  render();
}

function renderOffice(section = "") {
  if (section) {
    const routeTabs = {
      projects: "Projecten",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      prices: "Prijzen",
      users: "Gebruikers",
      checklists: "Checklist",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Koffers", "Garage Box", "Bestellen", "Kosten", "Prijzen", "Checklist", "Gebruikers"];
  const unsafeCount = (state.adminNotifications || []).filter((note) => note.severity === "danger").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${state.projects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${state.projects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(state.projects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
      <div class="stat-card"><span>Veiligheidsmeldingen</span><strong>${unsafeCount}</strong></div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.dashboardTab === tab ? "active" : ""}" onclick="setDashboardTab('${tab}')">${tab}</button>`).join("")}</div>
    ${renderDashboardTab()}
  `;
}

function setDashboardTab(tab) {
  ui.dashboardTab = tab;
  const tabRoutes = {
    Projecten: "projects",
    Koffers: "kits",
    "Garage Box": "garage-box",
    Bestellen: "orders",
    Kosten: "costs",
    Prijzen: "prices",
    Checklist: "checklists",
    Gebruikers: "users",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/office/${route}`)) {
    location.hash = `#/office/${route}`;
    return;
  }
  render();
}

function renderDashboardTab() {
  if (ui.dashboardTab === "Bestellen") return renderOrdering();
  if (ui.dashboardTab === "Koffers") return renderOrderAndKitStatus();
  if (ui.dashboardTab === "Garage Box") return renderGarageBox();
  if (ui.dashboardTab === "Kosten") return renderCosts();
  if (ui.dashboardTab === "Prijzen") return renderPrices();
  if (ui.dashboardTab === "Checklist") return renderChecklistSettings();
  if (ui.dashboardTab === "Gebruikers") return renderUsers();
  return renderOfficeProjects();
}

function renderChecklistSettings() {
  ensureWorkOrderSettings();
  const settings = state.checklistSettings;
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Checklist & CO-keur instellingen</h2>
          <p>Beheer verplichte werkbonvelden, fotobewijs en algemene controlepunten.</p>
        </div>
        <span class="badge ok">Admin</span>
      </div>
      <div class="form-grid">
        <label>Minimum aantal foto's <input type="number" min="1" value="${settings.minRequiredPhotos}" onchange="updateChecklistSetting('minRequiredPhotos', this.value)" /></label>
        <label>CO-keur template verplicht
          <select onchange="updateChecklistSetting('coTemplateRequired', this.value === 'true')">
            <option value="true" ${settings.coTemplateRequired ? "selected" : ""}>Ja</option>
            <option value="false" ${!settings.coTemplateRequired ? "selected" : ""}>Nee</option>
          </select>
        </label>
        <label>Urenregistratie verplicht
          <select onchange="updateChecklistSetting('requiredHours', this.value === 'true')">
            <option value="true" ${settings.requiredHours ? "selected" : ""}>Ja</option>
            <option value="false" ${!settings.requiredHours ? "selected" : ""}>Nee</option>
          </select>
        </label>
        <label>Monteur-handtekening verplicht
          <select onchange="updateChecklistSetting('mechanicSignatureRequired', this.value === 'true')">
            <option value="false" ${!settings.mechanicSignatureRequired ? "selected" : ""}>Nee</option>
            <option value="true" ${settings.mechanicSignatureRequired ? "selected" : ""}>Ja</option>
          </select>
        </label>
      </div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Checklistpunt toevoegen</h2>
      <form class="form-grid" onsubmit="addChecklistItem(event)">
        <label>Controlepunt <input name="label" required placeholder="Bijv. expansievat gecontroleerd" /></label>
        <label>Verplicht
          <select name="required">
            <option value="false">Nee</option>
            <option value="true">Ja</option>
          </select>
        </label>
        <button class="btn success" type="submit">Toevoegen</button>
      </form>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Controlepunt</th><th>Verplicht</th><th>Actie</th></tr></thead>
        <tbody>${settings.checklistItems.map((item) => `<tr>
          <td><input type="checkbox" ${item.active ? "checked" : ""} onchange="updateChecklistItem('${item.id}', 'active', this.checked)" /></td>
          <td><input value="${escapeAttr(item.label)}" onchange="updateChecklistItem('${item.id}', 'label', this.value)" /></td>
          <td><input type="checkbox" ${item.required ? "checked" : ""} onchange="updateChecklistItem('${item.id}', 'required', this.checked)" /></td>
          <td><button class="btn secondary" onclick="deleteChecklistItem('${item.id}')">Verwijderen</button></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function updateChecklistSetting(field, value) {
  ensureWorkOrderSettings();
  state.checklistSettings[field] = field === "minRequiredPhotos" ? Math.max(1, Number(value) || 1) : value;
  saveState();
  render();
}

function addChecklistItem(event) {
  event.preventDefault();
  ensureWorkOrderSettings();
  const form = new FormData(event.target);
  state.checklistSettings.checklistItems.push({
    id: uid("check"),
    label: form.get("label").trim(),
    required: form.get("required") === "true",
    active: true,
  });
  saveState();
  render();
}

function updateChecklistItem(itemId, field, value) {
  ensureWorkOrderSettings();
  const item = state.checklistSettings.checklistItems.find((entry) => entry.id === itemId);
  if (!item) return;
  item[field] = field === "label" ? value : Boolean(value);
  saveState();
  render();
}

function deleteChecklistItem(itemId) {
  ensureWorkOrderSettings();
  state.checklistSettings.checklistItems = state.checklistSettings.checklistItems.filter((item) => item.id !== itemId);
  state.projects.forEach((project) => {
    if (project.workOrder?.checklistAnswers) delete project.workOrder.checklistAnswers[itemId];
  });
  saveState();
  render();
}

function ensureWorkOrder(project) {
  if (!project) return null;
  ensureWorkOrderSettings();
  project.workOrder = project.workOrder || {};
  project.workOrder.gasApplianceWork = project.workOrder.gasApplianceWork || "";
  project.workOrder.measurements = project.workOrder.measurements || {};
  project.workOrder.combustion = project.workOrder.combustion || {};
  project.workOrder.installationSafe = project.workOrder.installationSafe || "";
  project.workOrder.unsafeReason = project.workOrder.unsafeReason || "";
  project.workOrder.customerSignature = project.workOrder.customerSignature || "";
  project.workOrder.mechanicSignature = project.workOrder.mechanicSignature || "";
  project.workOrder.photos = project.workOrder.photos || [];
  project.workOrder.hours = project.workOrder.hours || { startTime: "", endTime: "", breakMinutes: 0, totalHours: 0 };
  project.workOrder.solution = project.workOrder.solution || "";
  project.workOrder.notes = project.workOrder.notes || "";
  project.workOrder.checklistAnswers = project.workOrder.checklistAnswers || {};
  if (!Array.isArray(project.workOrder.materialUsageIds)) project.workOrder.materialUsageIds = [];
  if (!Object.prototype.hasOwnProperty.call(project.workOrder, "materialsUsed")) {
    project.workOrder.materialsUsed = typeof project.materials_used === "boolean" ? (project.materials_used ? "ja" : "nee") : "";
  }
  if (project.workOrder.materialsUsed === "ja") project.materials_used = true;
  if (project.workOrder.materialsUsed === "nee") project.materials_used = false;
  projectUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && !project.workOrder.materialUsageIds.includes(usage.id))
    .forEach((usage) => project.workOrder.materialUsageIds.push(usage.id));
  return project.workOrder;
}

function materialAnswer(project) {
  const workOrder = ensureWorkOrder(project);
  return workOrder?.materialsUsed || "";
}

function materialUsages(projectId) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  const ids = new Set([...(workOrder?.materialUsageIds || []), ...projectUsages(projectId).filter((usage) => usage.usedQuantity > 0).map((usage) => usage.id)]);
  return [...ids]
    .map((id) => byId(state.usages, id))
    .filter(Boolean)
    .map((usage) => ({ ...usage, article: byId(state.articles, usage.articleId), kit: byId(state.kits, usage.kitId) }));
}

function clearProjectMaterials(projectId) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  if (!project || !workOrder) return;
  workOrder.materialUsageIds = [];
  project.materials_used = false;
  projectUsages(projectId).forEach((usage) => {
    usage.usedQuantity = 0;
    usage.replenishQuantity = 0;
    usage.totalPrice = 0;
    usage.purchasePriceAtTime = null;
    usage.orderStatus = "Niet besteld";
  });
}

function setMaterialsUsed(projectId, value) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  if (!workOrder) return;
  workOrder.materialsUsed = value;
  if (value === "nee") clearProjectMaterials(projectId);
  if (value === "ja") project.materials_used = true;
  if (!value) delete project.materials_used;
  saveState();
  render();
}

function materialSearchValue(projectId) {
  ui.materialSearchByProject = ui.materialSearchByProject || {};
  return ui.materialSearchByProject[projectId] || "";
}

function setMaterialSearch(projectId, value) {
  ui.materialSearchByProject = ui.materialSearchByProject || {};
  ui.materialSearchByProject[projectId] = value;
  render();
}

function materialOptions(projectId) {
  const search = materialSearchValue(projectId).toLowerCase().trim();
  return state.articles
    .filter((article) => article.active)
    .filter((article) => {
      const haystack = [article.description, article.supplierArticleNumber, article.kitId, "Garage Box"].join(" ").toLowerCase();
      return !search || haystack.includes(search);
    })
    .sort((a, b) => `${a.kitId} ${a.description}`.localeCompare(`${b.kitId} ${b.description}`));
}

function addMaterialUsage(projectId, articleId) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  const article = byId(state.articles, articleId);
  if (!project || !workOrder || !article) return;
  let usage = projectUsages(projectId).find((row) => row.articleId === article.id);
  if (!usage) {
    usage = {
      id: uid("usage"),
      projectId,
      articleId: article.id,
      kitId: article.kitId,
      usedQuantity: 0,
      purchasePriceAtTime: null,
      totalPrice: 0,
      replenishQuantity: 0,
      orderStatus: "Niet besteld",
    };
    state.usages.push(usage);
  }
  if (!workOrder.materialUsageIds.includes(usage.id)) workOrder.materialUsageIds.push(usage.id);
  if (!project.selectedKitIds.includes(article.kitId)) project.selectedKitIds.push(article.kitId);
  usage.usedQuantity = Math.max(usage.usedQuantity || 0, 1);
  usage.replenishQuantity = usage.usedQuantity;
  project.materials_used = true;
  workOrder.materialsUsed = "ja";
  saveState();
  render();
}

function removeMaterialUsage(projectId, usageId) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  const usage = byId(state.usages, usageId);
  if (!workOrder || !usage) return;
  usage.usedQuantity = 0;
  usage.replenishQuantity = 0;
  usage.totalPrice = 0;
  usage.purchasePriceAtTime = null;
  workOrder.materialUsageIds = workOrder.materialUsageIds.filter((id) => id !== usageId);
  saveState();
  render();
}

function renderMaterialSection(project) {
  const answer = materialAnswer(project);
  const rows = materialUsages(project.id);
  const options = materialOptions(project.id);
  const firstOption = options[0]?.id || "";
  return `
    <section class="panel material-panel" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Materiaal</h2>
          <p>Registreer alleen materialen wanneer er echt onderdelen zijn gebruikt.</p>
        </div>
        <span class="badge ${answer === "ja" ? "warn" : answer === "nee" ? "ok" : ""}">${answer ? (answer === "ja" ? "Materialen gebruikt" : "Geen materialen") : "Verplicht"}</span>
      </div>
      <label>Zijn er materialen gebruikt op dit project?
        <select required onchange="setMaterialsUsed('${project.id}', this.value)">
          <option value="">Kies...</option>
          <option value="ja" ${answer === "ja" ? "selected" : ""}>Ja</option>
          <option value="nee" ${answer === "nee" ? "selected" : ""}>Nee</option>
        </select>
      </label>
      ${answer === "nee" ? `<div class="success-box">Geen materiaalverbruik. Er wordt niets afgeboekt, niets besteld en materiaalkosten blijven 0.</div>` : ""}
      ${
        answer === "ja"
          ? `<div class="material-picker">
              <div class="form-grid">
                <label>Materiaal zoeken
                  <input value="${escapeAttr(materialSearchValue(project.id))}" placeholder="Zoek op artikel, artikelnummer, M001, M004 of Garage Box" oninput="setMaterialSearch('${project.id}', this.value)" />
                </label>
                <label>Materiaal kiezen
                  <select id="material-select-${project.id}">
                    ${options.map((article) => `<option value="${article.id}">${escapeHtml(article.description)} - ${escapeHtml(article.supplierArticleNumber || "geen artikelnr.")} - ${article.kitId}</option>`).join("")}
                  </select>
                </label>
              </div>
              <button class="btn success full" type="button" ${firstOption ? "" : "disabled"} onclick="addMaterialUsage('${project.id}', document.getElementById('material-select-${project.id}').value)">+ Materiaal toevoegen</button>
              ${rows.length ? `<section class="article-list material-list">${rows.map((usage) => renderMaterialUsageRow(usage)).join("")}</section>` : `<div class="info-box">Voeg minimaal één materiaal toe of kies Nee.</div>`}
            </div>`
          : ""
      }
    </section>`;
}

function renderMaterialUsageRow(usage) {
  const article = usage.article;
  if (!article) {
    return `<article class="article-card"><div class="warning">Materiaalregel zonder artikel. Verwijder deze regel.</div><button class="btn secondary" onclick="removeMaterialUsage('${usage.projectId}', '${usage.id}')">Verwijderen</button></article>`;
  }
  const remaining = article.defaultQuantity - usage.usedQuantity;
  const over = usage.usedQuantity > article.defaultQuantity;
  return `
    <article class="article-card material-card">
      <div class="article-head">
        <div>
          <h3>${escapeHtml(article.description)}</h3>
          <p>${escapeHtml(article.supplierArticleNumber || "Geen artikelnummer")}</p>
        </div>
        <span class="badge">${article.kitId}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Standaard</span><strong>${article.defaultQuantity}</strong></div>
        <div class="meta"><span>Resterend</span><strong>${remaining}</strong></div>
        <div class="meta"><span>Aanvullen</span><strong>${usage.usedQuantity}</strong></div>
        <div class="meta"><span>Status</span><strong>${usage.orderStatus || "Niet besteld"}</strong></div>
      </div>
      <div class="stepper">
        <button onclick="changeUsage('${usage.id}', -1)">-</button>
        <input type="number" min="0" value="${usage.usedQuantity}" onchange="setUsage('${usage.id}', this.value)" />
        <button onclick="changeUsage('${usage.id}', 1)">+</button>
      </div>
      <button class="btn secondary full" onclick="removeMaterialUsage('${usage.projectId}', '${usage.id}')">Materiaalregel verwijderen</button>
      ${over ? `<div class="warning">Let op: gebruikt aantal is hoger dan standaard in de koffer.</div>` : ""}
      ${usage.usedQuantity <= 0 ? `<div class="validation-box">Aantal gebruikt moet groter zijn dan 0.</div>` : ""}
    </article>`;
}

function validateWorkOrder(project) {
  ensureWorkOrderSettings();
  const workOrder = ensureWorkOrder(project);
  const errors = [];
  if (!project) errors.push("Er is geen project geselecteerd.");
  if (!workOrder.gasApplianceWork) errors.push("Beantwoord: Zijn er werkzaamheden geweest aan een gastoestel?");
  if (!workOrder.materialsUsed) errors.push("Beantwoord: Zijn er materialen gebruikt op dit project?");
  if (workOrder.materialsUsed === "ja") {
    const rows = materialUsages(project.id);
    const completeRows = rows.filter((usage) => usage.article && usage.usedQuantity > 0);
    const incompleteRows = rows.filter((usage) => !usage.article || usage.usedQuantity <= 0);
    if (!completeRows.length) errors.push("Voeg minimaal één materiaal toe of kies ‘Nee’.");
    if (incompleteRows.length) errors.push("Voltooi of verwijder open materiaalregels.");
  }
  if (state.checklistSettings.requiredHours && (!workOrder.hours.startTime || !workOrder.hours.endTime || workOrder.hours.totalHours <= 0)) errors.push("Urenregistratie is verplicht.");
  if (!workOrder.customerSignature) errors.push("Handtekening opdrachtgever is verplicht.");
  if ((workOrder.photos || []).length < state.checklistSettings.minRequiredPhotos) errors.push("Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.");
  if (state.checklistSettings.mechanicSignatureRequired && !workOrder.mechanicSignature) errors.push("Handtekening monteur is verplicht.");
  state.checklistSettings.checklistItems.filter((item) => item.active && item.required).forEach((item) => {
    if (!workOrder.checklistAnswers[item.id]) errors.push(`Checklistpunt verplicht: ${item.label}`);
  });
  if (workOrder.gasApplianceWork === "ja") {
    if (!numericValue(workOrder.measurements.CO_before_ppm) || !numericValue(workOrder.measurements.CO_after_ppm)) errors.push("CO meting opstellingsruimte vóór en ná werkzaamheden is verplicht.");
    const fields = [
      ["co_full_load", "CO vollast"],
      ["co_low_load", "CO laaglast"],
      ["co2_full_load", "CO2 vollast"],
      ["co2_low_load", "CO2 laaglast"],
      ["o2_full_load", "O2 vollast"],
      ["o2_low_load", "O2 laaglast"],
      ["draft_pa", "trekmeting"],
      ["gas_supply_pressure", "gasvoordruk"],
      ["operating_pressure", "werkdruk"],
    ];
    const missing = fields.filter(([key]) => !numericValue(workOrder.combustion[key]));
    if (missing.length) {
      errors.push("CO-keur meetwaarden zijn verplicht voordat de werkbon kan worden afgesloten.");
      missing.forEach(([, label]) => errors.push(`${label} is verplicht en moet numeriek zijn.`));
    }
    if (!workOrder.installationSafe) errors.push("Vul in of de installatie veilig te gebruiken is.");
    if (workOrder.installationSafe === "nee" && !workOrder.unsafeReason.trim()) errors.push("Motivatie verplicht wanneer installatie onveilig is.");
  }
  return errors;
}

function renderTechnician(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return `<div class="panel empty">Project niet gevonden.</div>`;
  if (!canAccessProject(project)) return `<div class="panel empty">Geen toegang tot dit project.</div>`;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} - ${project.address}<br />${project.technician} - ${project.date}</p>
      ${isMechanic() && project.status === "toegewezen" ? `<button class="btn" onclick="startProject('${project.id}')">Start uitvoering</button>` : ""}
    </section>
    ${!isProjectCompleted(project) ? renderWorkOrderForm(project) : renderWorkOrderReadOnly(project)}
    ${!isProjectCompleted(project) ? renderMaterialSection(project) : renderMaterialReadOnly(project)}
    <section class="sticky-summary">
      <div><strong>${totalUsed(projectId)} gebruikt</strong><br /><span>${isProjectCompleted(project) ? "Werkbon afgerond" : "Materiaalvraag en werkbon bepalen of je kunt afronden"}</span></div>
      ${!isProjectCompleted(project) ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : `<a class="btn success" href="#/summary/${projectId}">Rapport</a>`}
    </section>
  `;
}

function renderMaterialReadOnly(project) {
  const answer = materialAnswer(project);
  const rows = enrichedUsages(project.id).filter((usage) => usage.usedQuantity > 0);
  if (answer === "nee" || !rows.length) {
    return `<section class="panel material-panel" style="margin-bottom:14px"><h2>Materiaal</h2><div class="success-box">Geen materialen gebruikt. Materiaalverbruik en materiaalkosten zijn 0.</div></section>`;
  }
  return `<section class="panel material-panel" style="margin-bottom:14px"><h2>Materiaal</h2>${renderUsageTable(rows)}</section>`;
}

function renderSummary(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return `<div class="panel empty">Project niet gevonden.</div>`;
  if (!canAccessProject(project)) return `<div class="panel empty">Geen toegang tot dit project.</div>`;
  const used = enrichedUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} - ${project.address}<br />${project.technician} - ${project.date}</p>
      <section class="stats">
        <div class="stat-card"><span>Gebruikte regels</span><strong>${used.length}</strong></div>
        <div class="stat-card"><span>Totaal gebruikt</span><strong>${totalUsed(projectId)}</strong></div>
        ${isOfficeAdmin() ? `<div class="stat-card"><span>Materiaalkosten</span><strong>${euro(projectTotal(projectId))}</strong></div>` : `<div class="stat-card"><span>Aan te vullen</span><strong>${totalUsed(projectId)}</strong></div>`}
        <div class="stat-card"><span>Status</span><strong>${project.status}</strong></div>
      </section>
      <div class="button-row">
        ${!isProjectCompleted(project) ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : ""}
        <button class="btn secondary" onclick="exportCsv('${projectId}')">Export CSV</button>
        <button class="btn secondary" onclick="exportPdf('${projectId}')">Export PDF werkbon</button>
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/office">Naar kantoor</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
      </div>
    </section>
    ${!isProjectCompleted(project) ? renderWorkOrderForm(project) : renderWorkOrderReadOnly(project)}
    ${renderMaterialReadOnly(project)}
  `;
}

function completeProject(projectId) {
  const project = byId(state.projects, projectId);
  if (!project) return alert("Afronden lukt niet: er is geen project geselecteerd.");
  if (!canAccessProject(project)) return alert("Afronden lukt niet: je hebt geen toegang tot dit project.");
  const workOrder = ensureWorkOrder(project);
  const workOrderErrors = validateWorkOrder(project);
  if (workOrderErrors.length) {
    alert(workOrderErrors.join("\n"));
    return;
  }
  if (workOrder.materialsUsed === "nee") clearProjectMaterials(projectId);
  if (!project.inventoryProcessed) processProjectInventory(project);
  const now = new Date().toISOString();
  workOrder.closedAt = now;
  workOrder.archivedAt = now;
  workOrder.pdfGeneratedAt = workOrder.pdfGeneratedAt || now;
  project.status = "afgerond";
  project.completedAt = now;
  project.completed_at = now;
  project.inventoryProcessed = true;
  project.archived = true;
  state.adminNotifications = state.adminNotifications || [];
  state.adminNotifications.push({
    id: uid("note"),
    type: "workorder_completed",
    projectId,
    createdAt: now,
    message: `Werkbon ${project.projectName} afgerond door ${project.technician}.`,
    severity: workOrder.installationSafe === "nee" ? "danger" : "ok",
  });
  saveState();
  location.hash = `#/summary/${projectId}`;
  render();
}

function processProjectInventory(project) {
  const workOrder = ensureWorkOrder(project);
  if (workOrder.materialsUsed !== "ja") {
    clearProjectMaterials(project.id);
    return;
  }
  const now = new Date();
  enrichedUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && usage.article)
    .forEach((usage) => {
      const article = usage.article;
      const current = article.currentStock ?? article.defaultQuantity;
      article.currentStock = current - usage.usedQuantity;
      article.lastUsedAt = project.date || now.toISOString().slice(0, 10);
      usage.replenishQuantity = usage.usedQuantity;
      usage.orderStatus = "Niet besteld";
      usage.purchasePriceAtTime = article.purchasePrice || null;
      usage.totalPrice = usage.purchasePriceAtTime ? usage.usedQuantity * usage.purchasePriceAtTime : 0;
      const line = upsertOrderLineFromUsage(usage, project, article, now);
      article.orderStatus = line.status;
    });
}

function projectTotal(projectId) {
  const project = byId(state.projects, projectId);
  if (project && materialAnswer(project) === "nee") return 0;
  return enrichedUsages(projectId).reduce((sum, usage) => {
    const price = usage.purchasePriceAtTime ?? usage.article?.purchasePrice ?? 0;
    return sum + usage.usedQuantity * price;
  }, 0);
}

function orderStatusOptions() {
  return [...new Set([...ORDER_STATUSES, "Te verzamelen", "Klaar om te bestellen"])];
}

function toOrderOpenStatuses() {
  return ["Niet besteld", "Te verzamelen", "Klaar om te bestellen"];
}

function statusClass(status) {
  if (status === "Aangevuld" || status === "Ontvangen") return "ok";
  if (status === "Niet besteld" || status === "Te verzamelen") return "warn";
  if (status === "Klaar om te bestellen") return "ok";
  return "";
}

function toOrderUi(field, fallback = "ALL") {
  return ui[field] ?? fallback;
}

function setToOrderFilter(field, value) {
  ui[field] = value;
  render();
}

function toOrderDestination(line, article) {
  if (line.destinationType === "warehouse" || line.destinationType === "garage_box") return "Garage Box";
  return line.kitName || line.kitId || article?.kitId || "Garage Box";
}

function toOrderGroupedRows() {
  const groups = new Map();
  state.orderLines
    .filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0)
    .filter((line) => toOrderOpenStatuses().includes(line.status || "Niet besteld"))
    .forEach((line) => {
      const article = byId(state.articles, line.itemId);
      const itemName = line.itemName || article?.description || "-";
      const articleNumber = line.supplierArticleNumber || article?.supplierArticleNumber || line.itemId || "-";
      const status = line.status || "Niet besteld";
      const destination = toOrderDestination(line, article);
      const key = `${articleNumber}::${itemName}::${status}::${destination}`;
      const quantity = line.quantityToOrder ?? line.orderQuantity ?? 0;
      const price = line.purchasePrice ?? article?.purchasePrice ?? null;
      const projects = (line.projectIds || [line.projectId].filter(Boolean)).map((id) => byId(state.projects, id)).filter(Boolean);
      const mechanicIds = line.mechanicIds || projects.map((project) => project.assignedMechanicId || project.mechanicId).filter(Boolean);
      const existing =
        groups.get(key) ||
        {
          key,
          lineIds: [],
          articleNumber,
          itemName,
          destination,
          quantityToOrder: 0,
          projectNames: [],
          projectIds: [],
          mechanicNames: [],
          mechanicIds: [],
          purchasePrice: price,
          totalPrice: 0,
          status,
        };
      existing.lineIds.push(line.id);
      existing.quantityToOrder += quantity;
      existing.projectIds = [...new Set([...existing.projectIds, ...projects.map((project) => project.id)])];
      existing.projectNames = [...new Set([...existing.projectNames, ...projects.map((project) => project.projectName)])];
      existing.mechanicIds = [...new Set([...existing.mechanicIds, ...mechanicIds].filter(Boolean))];
      existing.mechanicNames = mechanicNamesByIds(existing.mechanicIds);
      existing.purchasePrice = existing.purchasePrice ?? price;
      existing.totalPrice = existing.purchasePrice ? existing.quantityToOrder * existing.purchasePrice : 0;
      groups.set(key, existing);
    });
  return [...groups.values()];
}

function filteredToOrderRows() {
  const search = String(toOrderUi("toOrderSearch", "")).toLowerCase();
  const status = toOrderUi("toOrderStatus");
  const destination = toOrderUi("toOrderKit");
  const sort = toOrderUi("toOrderSort", "quantity_desc");
  const rows = toOrderGroupedRows().filter((row) => {
    const haystack = [row.itemName, row.articleNumber, row.destination, row.projectNames.join(" "), row.mechanicNames.join(" ")].join(" ").toLowerCase();
    return (
      (!search || haystack.includes(search)) &&
      (status === "ALL" || row.status === status) &&
      (destination === "ALL" || row.destination === destination)
    );
  });
  rows.sort((a, b) => {
    if (sort === "cost_desc") return (b.totalPrice || 0) - (a.totalPrice || 0);
    if (sort === "alpha") return a.itemName.localeCompare(b.itemName);
    return b.quantityToOrder - a.quantityToOrder;
  });
  return rows;
}

function selectedToOrderKeys() {
  ui.selectedToOrderKeys = ui.selectedToOrderKeys || [];
  return ui.selectedToOrderKeys;
}

function toggleToOrderGroup(key, checked) {
  const selected = selectedToOrderKeys();
  if (checked && !selected.includes(key)) selected.push(key);
  if (!checked) ui.selectedToOrderKeys = selected.filter((item) => item !== key);
  render();
}

function selectAllToOrderRows() {
  ui.selectedToOrderKeys = [...new Set(filteredToOrderRows().map((row) => row.key))];
  render();
}

function toOrderRowsForAction() {
  const selected = selectedToOrderKeys();
  const rows = filteredToOrderRows();
  return selected.length ? rows.filter((row) => selected.includes(row.key)) : rows;
}

function renderOrdering() {
  const rows = filteredOrderingRows();
  const openRows = rows.filter((row) => row.status !== "Aangevuld");
  const openProjectIds = new Set(openRows.flatMap((row) => row.projectIds || [row.projectId].filter(Boolean)));
  const totalQuantity = openRows.reduce((sum, row) => sum + row.quantityToOrder, 0);
  const totalAmount = openRows.reduce((sum, row) => sum + (row.purchasePrice ? row.quantityToOrder * row.purchasePrice : 0), 0);
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open bestelregels</span><strong>${openRows.length}</strong></div>
      <div class="stat-card"><span>Artikelen te bestellen</span><strong>${totalQuantity}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(totalAmount)}</strong></div>
      <div class="stat-card"><span>Projecten met open verbruik</span><strong>${openProjectIds.size}</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <div class="form-grid">
        <label>Zoeken <input value="${escapeAttr(ui.orderSearch)}" placeholder="Artikel, project of monteur" oninput="setOrderFilter('orderSearch', this.value)" /></label>
        <label>Koffer
          <select onchange="setOrderFilter('orderKit', this.value)">
            <option value="ALL">Alle koffers</option>
            ${state.kits.map((kit) => `<option value="${kit.id}" ${ui.orderKit === kit.id ? "selected" : ""}>${kit.id}</option>`).join("")}
          </select>
        </label>
        <label>Status
          <select onchange="setOrderFilter('orderStatus', this.value)">
            <option value="ALL">Alle statussen</option>
            ${orderStatusOptions().map((status) => `<option value="${status}" ${ui.orderStatus === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn" onclick="bulkSetOrderStatus('Besteld')">Markeer als besteld</button>
        <button class="btn secondary" onclick="bulkSetOrderStatus('Ontvangen')">Markeer als ontvangen</button>
        <button class="btn success" onclick="bulkSetOrderStatus('Aangevuld')">Markeer als aangevuld</button>
        <a class="btn" href="#/office/to-order">Te bestellen</a>
        <button class="btn secondary" onclick="exportOrderingCsv()">CSV export</button>
        <button class="btn secondary" onclick="exportOrderingPdf()">PDF export</button>
      </div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th></th><th>Artikel</th><th>Koffer</th><th>Totaal gebruikt</th><th>Te bestellen</th><th>Project(en)</th><th>Monteur(s)</th><th>Artikelnummer</th><th>Prijs per stuk</th><th>Totaal</th><th>Status</th></tr></thead>
        <tbody>${rows
          .map((row) => `<tr>
            <td><input type="checkbox" ${ui.selectedOrderLineIds.includes(row.id) ? "checked" : ""} onchange="toggleOrderRow('${row.id}', this.checked)" /></td>
            <td>${row.itemName}</td><td>${row.kitId}</td><td>${row.totalUsedQuantity}</td><td>${row.quantityToOrder}</td>
            <td>${row.projectNames.join(", ") || "-"}</td><td>${row.mechanicNames.join(", ") || "-"}</td>
            <td>${row.supplierArticleNumber || "-"}</td><td>${row.purchasePrice ? euro(row.purchasePrice) : "Onbekend"}</td>
            <td>${row.purchasePrice ? euro(row.quantityToOrder * row.purchasePrice) : "Onbekend"}</td><td><span class="badge ${statusClass(row.status)}">${row.status}</span></td>
          </tr>`)
          .join("")}</tbody>
      </table>
    </div>`;
}

function renderToOrderPage() {
  const rows = filteredToOrderRows();
  const totalQuantity = rows.reduce((sum, row) => sum + row.quantityToOrder, 0);
  const totalAmount = rows.reduce((sum, row) => sum + (row.totalPrice || 0), 0);
  const projectIds = new Set(rows.flatMap((row) => row.projectIds));
  const destinations = [...new Set(toOrderGroupedRows().map((row) => row.destination))].sort();
  return `
    <section class="panel to-order-hero" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Te bestellen</h2>
          <p>Compacte verzamelbestellijst. Er wordt niets automatisch besteld.</p>
        </div>
        <a class="btn secondary" href="#/office/orders">Terug naar Bestellen</a>
      </div>
    </section>
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Totaal artikelen</span><strong>${rows.length}</strong></div>
      <div class="stat-card"><span>Totaal aantallen</span><strong>${totalQuantity}</strong></div>
      <div class="stat-card"><span>Open bestelbedrag</span><strong>${euro(totalAmount)}</strong></div>
      <div class="stat-card"><span>Open projecten</span><strong>${projectIds.size}</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <div class="form-grid">
        <label>Zoeken <input value="${escapeAttr(toOrderUi("toOrderSearch", ""))}" placeholder="Artikel, artikelnummer, project of monteur" oninput="setToOrderFilter('toOrderSearch', this.value)" /></label>
        <label>Status
          <select onchange="setToOrderFilter('toOrderStatus', this.value)">
            <option value="ALL">Alle open statussen</option>
            ${toOrderOpenStatuses().map((status) => `<option value="${status}" ${toOrderUi("toOrderStatus") === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>Koffer / Garage Box
          <select onchange="setToOrderFilter('toOrderKit', this.value)">
            <option value="ALL">Alles</option>
            ${destinations.map((destination) => `<option value="${escapeAttr(destination)}" ${toOrderUi("toOrderKit") === destination ? "selected" : ""}>${destination}</option>`).join("")}
          </select>
        </label>
        <label>Sorteren
          <select onchange="setToOrderFilter('toOrderSort', this.value)">
            <option value="quantity_desc" ${toOrderUi("toOrderSort", "quantity_desc") === "quantity_desc" ? "selected" : ""}>Hoogste aantal</option>
            <option value="cost_desc" ${toOrderUi("toOrderSort") === "cost_desc" ? "selected" : ""}>Hoogste kosten</option>
            <option value="alpha" ${toOrderUi("toOrderSort") === "alpha" ? "selected" : ""}>Alfabetisch</option>
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn" onclick="selectAllToOrderRows()">Alles selecteren</button>
        <button class="btn secondary" onclick="exportToOrderCsv()">CSV export</button>
        <button class="btn secondary" onclick="exportToOrderPdf()">PDF export</button>
        <button class="btn success" onclick="createConceptOrderList()">Maak concept bestellijst</button>
      </div>
    </section>
    ${renderConceptOrderDraft()}
    ${rows.length ? `<section class="to-order-list">${rows.map(renderToOrderRow).join("")}</section>` : `<div class="panel empty">Geen open artikelen om te bestellen binnen deze filters.</div>`}
  `;
}

function renderToOrderRow(row) {
  const checked = selectedToOrderKeys().includes(row.key);
  return `
    <article class="to-order-row">
      <label class="to-order-select"><input type="checkbox" ${checked ? "checked" : ""} onchange="toggleToOrderGroup(${escapeAttr(JSON.stringify(row.key))}, this.checked)" /></label>
      <div class="to-order-main">
        <strong>${escapeHtml(row.itemName)}</strong>
        <span>${escapeHtml(row.articleNumber)} - ${escapeHtml(row.destination)}</span>
      </div>
      <div class="to-order-fields">
        <div><span>Totaal te bestellen</span><strong>${row.quantityToOrder}</strong></div>
        <div><span>Open projecten</span><strong>${row.projectNames.join(", ") || "-"}</strong></div>
        <div><span>Open monteurs</span><strong>${row.mechanicNames.join(", ") || "-"}</strong></div>
        <div><span>Prijs per stuk</span><strong>${row.purchasePrice ? euro(row.purchasePrice) : "Onbekend"}</strong></div>
        <div><span>Totaalprijs</span><strong>${row.purchasePrice ? euro(row.totalPrice) : "Onbekend"}</strong></div>
        <div><span>Status</span><strong><span class="badge ${statusClass(row.status)}">${row.status}</span></strong></div>
      </div>
    </article>`;
}

function toOrderExportRows(rows = filteredToOrderRows()) {
  return rows.map((row) => ({
    Artikel: row.itemName,
    Artikelnummer: row.articleNumber,
    "Koffer / Garage Box": row.destination,
    "Totaal te bestellen": row.quantityToOrder,
    "Open projecten": row.projectNames.join(", "),
    "Open monteurs": row.mechanicNames.join(", "),
    "Prijs per stuk": row.purchasePrice ?? "Onbekend",
    Totaalprijs: row.purchasePrice ? row.totalPrice : "Onbekend",
    Status: row.status,
  }));
}

function exportToOrderCsv() {
  const rows = filteredToOrderRows();
  if (!rows.length) return alert("Geen te bestellen artikelen om te exporteren.");
  downloadCsv(toOrderExportRows(rows), "te-bestellen.csv");
}

function exportToOrderPdf() {
  const rows = filteredToOrderRows();
  if (!rows.length) return alert("Geen te bestellen artikelen om te exporteren.");
  renderToOrderPrint(rows, "Te bestellen");
  window.print();
}

function createConceptOrderList() {
  const rows = toOrderRowsForAction();
  if (!rows.length) return alert("Geen regels voor een concept bestellijst.");
  const now = new Date().toISOString();
  rows.flatMap((row) => row.lineIds).forEach((lineId) => {
    const line = byId(state.orderLines, lineId);
    if (!line) return;
    line.status = "Klaar om te bestellen";
    line.updatedAt = now;
  });
  state.conceptOrderDraft = {
    id: uid("concept"),
    createdAt: now,
    admin: currentUser()?.name || "Admin",
    rows: toOrderExportRows(rows),
    totalQuantity: rows.reduce((sum, row) => sum + row.quantityToOrder, 0),
    totalAmount: rows.reduce((sum, row) => sum + (row.totalPrice || 0), 0),
  };
  ui.selectedToOrderKeys = [];
  saveState();
  render();
}

function renderConceptOrderDraft() {
  const concept = state.conceptOrderDraft;
  if (!concept) return "";
  return `
    <section class="panel concept-list" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Concept bestellijst</h2>
          <p>${safeDate(concept.createdAt)} - ${escapeHtml(concept.admin)} - ${concept.rows.length} artikelen</p>
        </div>
        <button class="btn secondary" onclick="printConceptOrderList()">PDF concept</button>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Totaal aantallen</span><strong>${concept.totalQuantity}</strong></div>
        <div class="meta"><span>Totaalbedrag</span><strong>${euro(concept.totalAmount)}</strong></div>
      </div>
      <div class="concept-lines">${concept.rows.map((row) => `<div><strong>${escapeHtml(row.Artikel)}</strong><span>${escapeHtml(row.Artikelnummer)} - ${row["Totaal te bestellen"]} stuks - ${row.Totaalprijs === "Onbekend" ? "Onbekend" : euro(row.Totaalprijs)}</span></div>`).join("")}</div>
    </section>`;
}

function renderToOrderPrint(rows, title, concept = null) {
  const totalQuantity = rows.reduce((sum, row) => sum + row.quantityToOrder, 0);
  const totalAmount = rows.reduce((sum, row) => sum + (row.totalPrice || 0), 0);
  document.getElementById("print-report").innerHTML = `
    <h1>${title}</h1>
    <p>Alff Installaties<br />Datum: ${new Date().toLocaleDateString("nl-NL")}<br />Admin: ${concept?.admin || currentUser()?.name || "Admin"}</p>
    <h2>Totaal aantallen: ${totalQuantity} - Totaalbedrag: ${euro(totalAmount)}</h2>
    <table>
      <thead><tr><th>Artikel</th><th>Artikelnummer</th><th>Koffer / Garage Box</th><th>Aantal</th><th>Prijs</th><th>Totaal</th><th>Status</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row.itemName}</td><td>${row.articleNumber}</td><td>${row.destination}</td><td>${row.quantityToOrder}</td><td>${row.purchasePrice ? euro(row.purchasePrice) : "Onbekend"}</td><td>${row.purchasePrice ? euro(row.totalPrice) : "Onbekend"}</td><td>${row.status}</td></tr>`).join("")}</tbody>
    </table>`;
}

function printConceptOrderList() {
  const concept = state.conceptOrderDraft;
  if (!concept) return alert("Er is nog geen concept bestellijst.");
  const rows = concept.rows.map((row) => ({
    itemName: row.Artikel,
    articleNumber: row.Artikelnummer,
    destination: row["Koffer / Garage Box"],
    quantityToOrder: row["Totaal te bestellen"],
    purchasePrice: typeof row["Prijs per stuk"] === "number" ? row["Prijs per stuk"] : null,
    totalPrice: typeof row.Totaalprijs === "number" ? row.Totaalprijs : 0,
    status: row.Status,
  }));
  renderToOrderPrint(rows, "Concept bestellijst", concept);
  window.print();
}

const GARAGE_BOX_SOURCE = "GARAGE_BOX";

function seedGarageArticles() {
  return [
    {
      id: "GB-001",
      description: "PVC buis 40",
      supplierArticleNumber: "GB-1000",
      currentStock: 12,
      minimumStock: 4,
      purchasePrice: 4.25,
      active: true,
      sourceType: "garage_box",
      sourceName: "Garage Box",
      updatedAt: "2026-05-29",
      orderStatus: "Niet besteld",
    },
    {
      id: "GB-002",
      description: "Kitspuit",
      supplierArticleNumber: "GB-1001",
      currentStock: 3,
      minimumStock: 2,
      purchasePrice: 9.95,
      active: true,
      sourceType: "garage_box",
      sourceName: "Garage Box",
      updatedAt: "2026-05-29",
      orderStatus: "Niet besteld",
    },
    {
      id: "GB-003",
      description: "Montagekit wit",
      supplierArticleNumber: "GB-1002",
      currentStock: 8,
      minimumStock: 3,
      purchasePrice: 6.75,
      active: true,
      sourceType: "garage_box",
      sourceName: "Garage Box",
      updatedAt: "2026-05-29",
      orderStatus: "Niet besteld",
    },
    {
      id: "GB-004",
      description: "Teflontape",
      supplierArticleNumber: "GB-1003",
      currentStock: 20,
      minimumStock: 6,
      purchasePrice: 1.85,
      active: true,
      sourceType: "garage_box",
      sourceName: "Garage Box",
      updatedAt: "2026-05-29",
      orderStatus: "Niet besteld",
    },
  ];
}

function ensureGarageBoxArticles() {
  state.garageArticles = state.garageArticles || [];
  seedGarageArticles().forEach((seed) => {
    if (!state.garageArticles.some((article) => article.id === seed.id || article.supplierArticleNumber === seed.supplierArticleNumber)) {
      state.garageArticles.push(seed);
    }
  });
  state.garageArticles = state.garageArticles.map((article) => ({
    ...Object.fromEntries(Object.entries(article).filter(([key]) => key !== "supplier")),
    description: article.description || article.name || "",
    supplierArticleNumber: article.supplierArticleNumber || article.articleNumber || "",
    currentStock: Number(article.currentStock ?? article.actualStock ?? 0),
    minimumStock: Number(article.minimumStock ?? 0),
    purchasePrice: Number(article.purchasePrice ?? 0),
    active: article.active !== false,
    sourceType: "garage_box",
    sourceName: "Garage Box",
    kitId: "Garage Box",
    defaultQuantity: Number(article.minimumStock ?? 0),
    updatedAt: article.updatedAt || article.lastChangedAt || new Date().toISOString(),
    orderStatus: article.orderStatus || "Niet besteld",
  }));
}

function normalizeKitArticle(article) {
  return {
    ...article,
    sourceType: "kit",
    sourceName: article.kitId,
  };
}

function normalizeGarageArticle(article) {
  return {
    ...article,
    kitId: "Garage Box",
    sourceType: "garage_box",
    sourceName: "Garage Box",
    defaultQuantity: article.minimumStock || 0,
  };
}

function findMaterialItem(articleId) {
  ensureGarageBoxArticles();
  const kitArticle = state.articles.find((article) => article.id === articleId);
  if (kitArticle) return normalizeKitArticle(kitArticle);
  const garageArticle = state.garageArticles.find((article) => article.id === articleId);
  return garageArticle ? normalizeGarageArticle(garageArticle) : null;
}

function sourceLabel(sourceId) {
  return sourceId === GARAGE_BOX_SOURCE ? "Garage Box" : sourceId;
}

function sourceChoiceConfig(choice) {
  const configs = {
    ALL_WITH_GARAGE: { selectedKitIds: ["M001", "M004"], selectedSourceIds: ["M001", "M004", GARAGE_BOX_SOURCE], label: "Beide koffers + Garage Box" },
    M001: { selectedKitIds: ["M001"], selectedSourceIds: ["M001"], label: "Alleen M001" },
    M004: { selectedKitIds: ["M004"], selectedSourceIds: ["M004"], label: "Alleen M004" },
    M001_M004: { selectedKitIds: ["M001", "M004"], selectedSourceIds: ["M001", "M004"], label: "M001 + M004" },
    GARAGE_ONLY: { selectedKitIds: [], selectedSourceIds: [GARAGE_BOX_SOURCE], label: "Alleen Garage Box" },
    M001_GARAGE: { selectedKitIds: ["M001"], selectedSourceIds: ["M001", GARAGE_BOX_SOURCE], label: "M001 + Garage Box" },
    M004_GARAGE: { selectedKitIds: ["M004"], selectedSourceIds: ["M004", GARAGE_BOX_SOURCE], label: "M004 + Garage Box" },
  };
  if (choice === "BOTH") return configs.M001_M004;
  return configs[choice] || configs.ALL_WITH_GARAGE;
}

function projectSources(project) {
  if (!project) return ["M001", "M004", GARAGE_BOX_SOURCE];
  if (Array.isArray(project.selectedSourceIds) && project.selectedSourceIds.length) return project.selectedSourceIds;
  return [...(project.selectedKitIds || []), GARAGE_BOX_SOURCE];
}

function renderNewProject() {
  const today = new Date().toISOString().slice(0, 10);
  const mechanicName = currentUser()?.name || "";
  const mechanics = state.users.filter((user) => user.role === "mechanic" && user.active);
  const choices = [
    ["ALL_WITH_GARAGE", "Beide koffers + Garage Box"],
    ["M001", "Alleen M001"],
    ["M004", "Alleen M004"],
    ["M001_M004", "M001 + M004"],
    ["GARAGE_ONLY", "Alleen Garage Box"],
    ["M001_GARAGE", "M001 + Garage Box"],
    ["M004_GARAGE", "M004 + Garage Box"],
  ];
  return `
    <form class="panel" onsubmit="createProject(event)">
      <div class="form-grid">
        <label>Projectnaam <input name="projectName" required placeholder="Bijv. Ketel vervangen Janssen" /></label>
        <label>Klant <input name="customer" required placeholder="Naam klant" /></label>
        <label>Adres <input name="address" required placeholder="Straat, plaats" /></label>
        ${
          isOfficeAdmin()
            ? `<label>Toewijzen aan monteur
                <select name="assignedMechanicId" required>
                  ${mechanics.map((user) => `<option value="${user.id}">${user.name} - ${user.email}</option>`).join("")}
                </select>
              </label>`
            : `<label>Monteur <input name="technician" required value="${escapeAttr(mechanicName)}" placeholder="Naam monteur" /></label>`
        }
        <label>Datum <input name="date" type="date" value="${today}" required /></label>
        <label>Koffer kiezen
          <select name="sourceChoice" required>
            ${choices.map(([value, label], index) => `<option value="${value}" ${index === 0 ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="button-row">
        <button class="btn success" type="submit">Project aanmaken</button>
        <a class="btn secondary" href="#/start">Annuleren</a>
      </div>
    </form>
  `;
}

function createProject(event) {
  event.preventDefault();
  ensureGarageBoxArticles();
  const form = new FormData(event.target);
  const sourceConfig = sourceChoiceConfig(form.get("sourceChoice") || form.get("kitChoice"));
  const assignedMechanicId = isOfficeAdmin() ? form.get("assignedMechanicId") : currentUser()?.id;
  const assignedMechanic = byId(state.users, assignedMechanicId);
  const project = {
    id: uid("project"),
    projectName: form.get("projectName").trim(),
    project_name: form.get("projectName").trim(),
    customer: form.get("customer").trim(),
    customer_name: form.get("customer").trim(),
    address: form.get("address").trim(),
    technician: assignedMechanic?.name || form.get("technician")?.trim() || currentUser()?.name || "",
    mechanicId: assignedMechanicId || "",
    assignedMechanicId,
    assigned_mechanic_id: assignedMechanicId,
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: form.get("date"),
    selectedKitIds: sourceConfig.selectedKitIds,
    selectedSourceIds: sourceConfig.selectedSourceIds,
    sourceChoiceLabel: sourceConfig.label,
    status: isOfficeAdmin() ? "toegewezen" : "in uitvoering",
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  };
  const usages = state.articles
    .filter((article) => article.active && sourceConfig.selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      projectId: project.id,
      articleId: article.id,
      kitId: article.kitId,
      sourceType: "kit",
      sourceName: article.kitId,
      usedQuantity: 0,
      purchasePriceAtTime: null,
      totalPrice: 0,
      replenishQuantity: 0,
      orderStatus: "Niet besteld",
    }));

  state.projects.push(project);
  state.usages.push(...usages);
  saveState();
  location.hash = `#/project/${project.id}`;
}

function enrichedUsages(projectId) {
  return projectUsages(projectId).map((usage) => {
    const article = findMaterialItem(usage.articleId);
    return {
      ...usage,
      article,
      kit: article?.sourceType === "kit" ? byId(state.kits, article.kitId) : null,
      sourceType: usage.sourceType || article?.sourceType || "kit",
      sourceName: usage.sourceName || article?.sourceName || usage.kitId,
      kitId: usage.kitId || article?.kitId || article?.sourceName,
    };
  });
}

function materialSourceFilterValue(projectId) {
  ui.materialSourceByProject = ui.materialSourceByProject || {};
  return ui.materialSourceByProject[projectId] || "ALL";
}

function setMaterialSourceFilter(projectId, value) {
  ui.materialSourceByProject = ui.materialSourceByProject || {};
  ui.materialSourceByProject[projectId] = value;
  render();
}

function allMaterialItemsForProject(project) {
  ensureGarageBoxArticles();
  const sources = projectSources(project);
  const kitItems = state.articles
    .filter((article) => article.active && sources.includes(article.kitId))
    .map(normalizeKitArticle);
  const garageItems = sources.includes(GARAGE_BOX_SOURCE) || sources.includes("Garage Box")
    ? state.garageArticles.filter((article) => article.active).map(normalizeGarageArticle)
    : [];
  return [...kitItems, ...garageItems];
}

function materialUsages(projectId) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  const ids = new Set([...(workOrder?.materialUsageIds || []), ...projectUsages(projectId).filter((usage) => usage.usedQuantity > 0).map((usage) => usage.id)]);
  return [...ids]
    .map((id) => byId(state.usages, id))
    .filter(Boolean)
    .map((usage) => {
      const article = findMaterialItem(usage.articleId);
      return {
        ...usage,
        article,
        sourceType: usage.sourceType || article?.sourceType || "kit",
        sourceName: usage.sourceName || article?.sourceName || usage.kitId,
        kitId: usage.kitId || article?.sourceName || article?.kitId,
      };
    });
}

function materialOptions(projectId) {
  const project = byId(state.projects, projectId);
  const search = materialSearchValue(projectId).toLowerCase().trim();
  const sourceFilter = materialSourceFilterValue(projectId);
  return allMaterialItemsForProject(project)
    .filter((article) => sourceFilter === "ALL" || article.sourceName === sourceFilter)
    .filter((article) => {
      const haystack = [article.description, article.supplierArticleNumber, article.sourceName].join(" ").toLowerCase();
      return !search || haystack.includes(search);
    })
    .sort((a, b) => `${a.sourceName} ${a.description}`.localeCompare(`${b.sourceName} ${b.description}`));
}

function addMaterialUsage(projectId, articleId) {
  const project = byId(state.projects, projectId);
  const workOrder = ensureWorkOrder(project);
  const article = findMaterialItem(articleId);
  if (!project || !workOrder || !article) return;
  project.selectedKitIds = project.selectedKitIds || [];
  project.selectedSourceIds = project.selectedSourceIds || projectSources(project);
  let usage = projectUsages(projectId).find((row) => row.articleId === article.id);
  if (!usage) {
    usage = {
      id: uid("usage"),
      projectId,
      articleId: article.id,
      kitId: article.sourceName,
      sourceType: article.sourceType,
      sourceName: article.sourceName,
      usedQuantity: 0,
      purchasePriceAtTime: null,
      totalPrice: 0,
      replenishQuantity: 0,
      orderStatus: "Niet besteld",
    };
    state.usages.push(usage);
  }
  usage.sourceType = article.sourceType;
  usage.sourceName = article.sourceName;
  usage.kitId = article.sourceName;
  if (!workOrder.materialUsageIds.includes(usage.id)) workOrder.materialUsageIds.push(usage.id);
  if (article.sourceType === "kit" && !project.selectedKitIds.includes(article.kitId)) project.selectedKitIds.push(article.kitId);
  if (!project.selectedSourceIds.includes(article.sourceType === "garage_box" ? GARAGE_BOX_SOURCE : article.kitId)) {
    project.selectedSourceIds.push(article.sourceType === "garage_box" ? GARAGE_BOX_SOURCE : article.kitId);
  }
  usage.usedQuantity = Math.max(usage.usedQuantity || 0, 1);
  usage.replenishQuantity = usage.usedQuantity;
  project.materials_used = true;
  workOrder.materialsUsed = "ja";
  saveState();
  render();
}

function renderMaterialSection(project) {
  const answer = materialAnswer(project);
  const rows = materialUsages(project.id);
  const options = materialOptions(project.id);
  const firstOption = options[0]?.id || "";
  const sourceOptions = ["ALL", ...projectSources(project).map(sourceLabel)];
  return `
    <section class="panel material-panel" style="margin-bottom:14px">
      <div class="article-head">
        <div>
          <h2>Materiaal</h2>
          <p>Registreer materiaal uit M001, M004 of Garage Box afhankelijk van dit project.</p>
        </div>
        <span class="badge ${answer === "ja" ? "warn" : answer === "nee" ? "ok" : ""}">${answer ? (answer === "ja" ? "Materialen gebruikt" : "Geen materialen") : "Verplicht"}</span>
      </div>
      <label>Zijn er materialen gebruikt op dit project?
        <select required onchange="setMaterialsUsed('${project.id}', this.value)">
          <option value="">Kies...</option>
          <option value="ja" ${answer === "ja" ? "selected" : ""}>Ja</option>
          <option value="nee" ${answer === "nee" ? "selected" : ""}>Nee</option>
        </select>
      </label>
      ${answer === "nee" ? `<div class="success-box">Geen materiaalverbruik. Er wordt niets afgeboekt, niets besteld en materiaalkosten blijven 0.</div>` : ""}
      ${
        answer === "ja"
          ? `<div class="material-picker">
              <div class="form-grid">
                <label>Bron filter
                  <select onchange="setMaterialSourceFilter('${project.id}', this.value)">
                    ${sourceOptions.map((source) => `<option value="${source}" ${materialSourceFilterValue(project.id) === source ? "selected" : ""}>${source === "ALL" ? "Alles" : source}</option>`).join("")}
                  </select>
                </label>
                <label>Materiaal zoeken
                  <input value="${escapeAttr(materialSearchValue(project.id))}" placeholder="Zoek op artikel, artikelnummer, M001, M004 of Garage Box" oninput="setMaterialSearch('${project.id}', this.value)" />
                </label>
                <label>Materiaal kiezen
                  <select id="material-select-${project.id}">
                    ${options.map((article) => `<option value="${article.id}">${escapeHtml(article.description)} - ${escapeHtml(article.sourceName)} - ${escapeHtml(article.supplierArticleNumber || "geen artikelnr.")}</option>`).join("")}
                  </select>
                </label>
              </div>
              <button class="btn success full" type="button" ${firstOption ? "" : "disabled"} onclick="addMaterialUsage('${project.id}', document.getElementById('material-select-${project.id}').value)">+ Materiaal toevoegen</button>
              ${rows.length ? `<section class="article-list material-list">${rows.map((usage) => renderMaterialUsageRow(usage)).join("")}</section>` : `<div class="info-box">Voeg minimaal één materiaal toe of kies Nee.</div>`}
            </div>`
          : ""
      }
    </section>`;
}

function renderMaterialUsageRow(usage) {
  const article = usage.article || findMaterialItem(usage.articleId);
  if (!article) {
    return `<article class="article-card"><div class="warning">Materiaalregel zonder artikel. Verwijder deze regel.</div><button class="btn secondary" onclick="removeMaterialUsage('${usage.projectId}', '${usage.id}')">Verwijderen</button></article>`;
  }
  const remaining = (article.currentStock ?? article.defaultQuantity ?? 0) - usage.usedQuantity;
  const over = article.sourceType === "kit" && usage.usedQuantity > article.defaultQuantity;
  return `
    <article class="article-card material-card">
      <div class="article-head">
        <div>
          <h3>${escapeHtml(article.description)}</h3>
          <p>${escapeHtml(article.supplierArticleNumber || "Geen artikelnummer")} - ${escapeHtml(article.sourceName)}</p>
        </div>
        <span class="badge">${escapeHtml(article.sourceName)}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Bron</span><strong>${escapeHtml(article.sourceName)}</strong></div>
        <div class="meta"><span>Voorraad</span><strong>${article.currentStock ?? "-"}</strong></div>
        <div class="meta"><span>Resterend</span><strong>${remaining}</strong></div>
        <div class="meta"><span>Aanvullen</span><strong>${usage.usedQuantity}</strong></div>
      </div>
      <div class="stepper">
        <button onclick="changeUsage('${usage.id}', -1)">-</button>
        <input type="number" min="0" value="${usage.usedQuantity}" onchange="setUsage('${usage.id}', this.value)" />
        <button onclick="changeUsage('${usage.id}', 1)">+</button>
      </div>
      <button class="btn secondary full" onclick="removeMaterialUsage('${usage.projectId}', '${usage.id}')">Materiaalregel verwijderen</button>
      ${over ? `<div class="warning">Let op: gebruikt aantal is hoger dan standaard in de koffer.</div>` : ""}
      ${usage.usedQuantity <= 0 ? `<div class="validation-box">Aantal gebruikt moet groter zijn dan 0.</div>` : ""}
    </article>`;
}

function updateGarageArticle(articleId, field, value) {
  ensureGarageBoxArticles();
  const article = byId(state.garageArticles, articleId);
  if (!article) return;
  if (["currentStock", "minimumStock", "purchasePrice"].includes(field)) article[field] = Number(value) || 0;
  else if (field === "active") article[field] = Boolean(value);
  else article[field] = value;
  article.updatedAt = new Date().toISOString();
  saveState();
  render();
}

function addGarageArticle(event) {
  event.preventDefault();
  ensureGarageBoxArticles();
  const form = new FormData(event.target);
  const description = form.get("description").trim();
  const supplierArticleNumber = form.get("supplierArticleNumber").trim();
  state.garageArticles.push({
    id: uid("GB"),
    description,
    supplierArticleNumber,
    currentStock: Number(form.get("currentStock")) || 0,
    minimumStock: Number(form.get("minimumStock")) || 0,
    purchasePrice: Number(form.get("purchasePrice")) || 0,
    active: true,
    sourceType: "garage_box",
    sourceName: "Garage Box",
    updatedAt: new Date().toISOString(),
    orderStatus: "Niet besteld",
  });
  saveState();
  render();
}

function deactivateGarageArticle(articleId) {
  updateGarageArticle(articleId, "active", false);
}

function garageStatus(article) {
  if ((article.currentStock || 0) <= 0) return "Op";
  if ((article.currentStock || 0) <= article.minimumStock) return "Laag";
  return "Voldoende";
}

function renderGarageBox() {
  ensureGarageBoxArticles();
  const rows = state.garageArticles;
  const activeRows = rows.filter((article) => article.active);
  const totalValue = activeRows.reduce((sum, article) => sum + (article.currentStock || 0) * (article.purchasePrice || 0), 0);
  const low = activeRows.filter((article) => garageStatus(article) !== "Voldoende").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Garage Box artikelen</span><strong>${activeRows.length}</strong></div>
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(totalValue)}</strong></div>
      <div class="stat-card"><span>Laag/op</span><strong>${low}</strong></div>
      <div class="stat-card"><span>Type</span><strong>Magazijn</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Artikel toevoegen aan Garage Box</h2>
      <form class="form-grid" onsubmit="addGarageArticle(event)">
        <label>Artikelnaam <input name="description" required placeholder="Bijv. PVC buis 40" /></label>
        <label>Artikelnummer <input name="supplierArticleNumber" placeholder="Bijv. GB-1004" /></label>
        <label>Actuele voorraad <input name="currentStock" type="number" min="0" value="0" /></label>
        <label>Minimumvoorraad <input name="minimumStock" type="number" min="0" value="1" /></label>
        <label>Prijs per stuk <input name="purchasePrice" type="number" min="0" step="0.01" value="0" /></label>
        <button class="btn success" type="submit">Artikel toevoegen</button>
      </form>
      <div class="button-row"><button class="btn secondary" onclick="exportGarageBoxCsv()">Export CSV</button></div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Artikelnaam</th><th>Artikelnummer</th><th>Actuele voorraad</th><th>Minimumvoorraad</th><th>Prijs per stuk</th><th>Voorraadwaarde</th><th>Status</th><th>Laatst gewijzigd</th><th>Actie</th></tr></thead>
        <tbody>${rows.map((article) => `<tr>
          <td><input type="checkbox" ${article.active ? "checked" : ""} onchange="updateGarageArticle('${article.id}', 'active', this.checked)" /></td>
          <td><input value="${escapeAttr(article.description)}" onchange="updateGarageArticle('${article.id}', 'description', this.value)" /></td>
          <td><input value="${escapeAttr(article.supplierArticleNumber)}" onchange="updateGarageArticle('${article.id}', 'supplierArticleNumber', this.value)" /></td>
          <td><input type="number" min="0" value="${article.currentStock}" onchange="updateGarageArticle('${article.id}', 'currentStock', this.value)" /></td>
          <td><input type="number" min="0" value="${article.minimumStock}" onchange="updateGarageArticle('${article.id}', 'minimumStock', this.value)" /></td>
          <td><input type="number" min="0" step="0.01" value="${article.purchasePrice}" onchange="updateGarageArticle('${article.id}', 'purchasePrice', this.value)" /></td>
          <td>${euro((article.currentStock || 0) * (article.purchasePrice || 0))}</td>
          <td><span class="badge ${garageStatusClass(garageStatus(article))}">${garageStatus(article)}</span></td>
          <td>${safeDate(article.updatedAt)}</td>
          <td><button class="btn secondary" onclick="deactivateGarageArticle('${article.id}')">Deactiveren</button></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function exportGarageBoxCsv() {
  ensureGarageBoxArticles();
  downloadCsv(
    state.garageArticles.map((article) => ({
      Artikel: article.description,
      Artikelnummer: article.supplierArticleNumber,
      "Actuele voorraad": article.currentStock,
      Minimumvoorraad: article.minimumStock,
      "Prijs per stuk": article.purchasePrice,
      Voorraadwaarde: (article.currentStock || 0) * (article.purchasePrice || 0),
      Actief: article.active ? "ja" : "nee",
      Status: garageStatus(article),
      "Laatst gewijzigd": article.updatedAt || "",
    })),
    "garage-box-artikelen.csv",
  );
}

function createGarageOrderLineFromUsage(usage, project, article, orderQuantity, now = new Date()) {
  const status = "Te bestellen";
  const existing = state.orderLines.find((line) => line.itemId === article.id && line.kitId === "Garage Box" && line.status === status);
  const mechanicId = project.assignedMechanicId || project.mechanicId || "";
  const price = usage.purchasePriceAtTime ?? article.purchasePrice ?? null;
  if (existing) {
    existing.usedQuantity = (existing.usedQuantity || 0) + usage.usedQuantity;
    existing.totalUsedQuantity = (existing.totalUsedQuantity || 0) + usage.usedQuantity;
    existing.orderQuantity = (existing.orderQuantity || 0) + orderQuantity;
    existing.quantityToOrder = (existing.quantityToOrder || 0) + orderQuantity;
    existing.totalPrice = existing.purchasePrice ? existing.quantityToOrder * existing.purchasePrice : 0;
    existing.projectIds = [...new Set([...(existing.projectIds || [existing.projectId].filter(Boolean)), project.id])];
    existing.mechanicIds = [...new Set([...(existing.mechanicIds || []), mechanicId].filter(Boolean))];
    existing.updatedAt = now.toISOString();
    return existing;
  }
  const line = {
    id: uid("order"),
    itemId: article.id,
    itemName: article.description,
    kitId: "Garage Box",
    kitName: "Garage Box",
    totalUsedQuantity: usage.usedQuantity,
    usedQuantity: usage.usedQuantity,
    quantityToOrder: orderQuantity,
    orderQuantity,
    projectIds: [project.id],
    mechanicIds: [mechanicId].filter(Boolean),
    supplierArticleNumber: article.supplierArticleNumber || "",
    purchasePrice: price,
    totalPrice: price ? orderQuantity * price : 0,
    status,
    destinationType: "garage_box",
    destinationId: "Garage Box",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    orderedAt: "",
    receivedAt: "",
    restockedAt: "",
  };
  state.orderLines.push(line);
  return line;
}

function processProjectInventory(project) {
  const workOrder = ensureWorkOrder(project);
  if (workOrder.materialsUsed !== "ja") {
    clearProjectMaterials(project.id);
    return;
  }
  const now = new Date();
  enrichedUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && usage.article)
    .forEach((usage) => {
      const article = usage.article;
      const current = article.currentStock ?? article.defaultQuantity ?? 0;
      const newStock = current - usage.usedQuantity;
      const liveArticle = article.sourceType === "garage_box" ? byId(state.garageArticles, article.id) : byId(state.articles, article.id);
      if (!liveArticle) return;
      liveArticle.currentStock = newStock;
      liveArticle.lastUsedAt = project.date || now.toISOString().slice(0, 10);
      liveArticle.updatedAt = now.toISOString();
      usage.kitId = article.sourceName;
      usage.sourceType = article.sourceType;
      usage.sourceName = article.sourceName;
      usage.replenishQuantity = usage.usedQuantity;
      usage.purchasePriceAtTime = article.purchasePrice || null;
      usage.totalPrice = usage.purchasePriceAtTime ? usage.usedQuantity * usage.purchasePriceAtTime : 0;
      if (article.sourceType === "garage_box") {
        usage.orderStatus = newStock < (article.minimumStock || 0) ? "Te bestellen" : "Niet besteld";
        if (newStock < (article.minimumStock || 0)) {
          const orderQuantity = Math.max((article.minimumStock || 0) - newStock, usage.usedQuantity);
          const line = createGarageOrderLineFromUsage(usage, project, { ...article, currentStock: newStock }, orderQuantity, now);
          liveArticle.orderStatus = line.status;
        }
      } else {
        usage.orderStatus = "Niet besteld";
        const line = upsertOrderLineFromUsage(usage, project, liveArticle, now);
        liveArticle.orderStatus = line.status;
      }
    });
}

function orderingRows() {
  return state.orderLines
    .filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0)
    .map((line) => {
      const article = findMaterialItem(line.itemId);
      const projects = (line.projectIds || [line.projectId].filter(Boolean)).map((id) => byId(state.projects, id)).filter(Boolean);
      const mechanics = mechanicNamesByIds(line.mechanicIds || projects.map((project) => project.assignedMechanicId || project.mechanicId).filter(Boolean));
      const quantity = line.quantityToOrder ?? line.orderQuantity ?? 0;
      const price = line.purchasePrice ?? article?.purchasePrice ?? null;
      return {
        ...line,
        itemName: line.itemName || article?.description || "-",
        kitId: line.kitId || article?.sourceName || article?.kitId || "-",
        totalUsedQuantity: line.totalUsedQuantity ?? line.usedQuantity ?? 0,
        quantityToOrder: line.status === "Aangevuld" ? 0 : quantity,
        projectNames: projects.map((project) => project.projectName),
        mechanicNames: mechanics,
        supplierArticleNumber: line.supplierArticleNumber || article?.supplierArticleNumber || "",
        purchasePrice: price,
        totalPrice: price && line.status !== "Aangevuld" ? quantity * price : 0,
      };
    });
}

function toOrderGroupedRows() {
  const groups = new Map();
  state.orderLines
    .filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0)
    .filter((line) => toOrderOpenStatuses().includes(line.status || "Niet besteld"))
    .forEach((line) => {
      const article = findMaterialItem(line.itemId);
      const itemName = line.itemName || article?.description || "-";
      const articleNumber = line.supplierArticleNumber || article?.supplierArticleNumber || line.itemId || "-";
      const status = line.status || "Niet besteld";
      const destination = line.kitId || article?.sourceName || "Garage Box";
      const key = `${articleNumber}::${itemName}::${status}::${destination}`;
      const quantity = line.quantityToOrder ?? line.orderQuantity ?? 0;
      const price = line.purchasePrice ?? article?.purchasePrice ?? null;
      const projects = (line.projectIds || [line.projectId].filter(Boolean)).map((id) => byId(state.projects, id)).filter(Boolean);
      const mechanicIds = line.mechanicIds || projects.map((project) => project.assignedMechanicId || project.mechanicId).filter(Boolean);
      const existing =
        groups.get(key) ||
        {
          key,
          lineIds: [],
          articleNumber,
          itemName,
          destination,
          quantityToOrder: 0,
          projectNames: [],
          projectIds: [],
          mechanicNames: [],
          mechanicIds: [],
          purchasePrice: price,
          totalPrice: 0,
          status,
        };
      existing.lineIds.push(line.id);
      existing.quantityToOrder += quantity;
      existing.projectIds = [...new Set([...existing.projectIds, ...projects.map((project) => project.id)])];
      existing.projectNames = [...new Set([...existing.projectNames, ...projects.map((project) => project.projectName)])];
      existing.mechanicIds = [...new Set([...existing.mechanicIds, ...mechanicIds].filter(Boolean))];
      existing.mechanicNames = mechanicNamesByIds(existing.mechanicIds);
      existing.purchasePrice = existing.purchasePrice ?? price;
      existing.totalPrice = existing.purchasePrice ? existing.quantityToOrder * existing.purchasePrice : 0;
      groups.set(key, existing);
    });
  return [...groups.values()];
}

function orderStatusOptions() {
  return [...new Set([...ORDER_STATUSES, "Te bestellen", "Te verzamelen", "Klaar om te bestellen"])];
}

function toOrderOpenStatuses() {
  return ["Niet besteld", "Te bestellen", "Te verzamelen", "Klaar om te bestellen"];
}

function projectTotal(projectId) {
  const project = byId(state.projects, projectId);
  if (project && materialAnswer(project) === "nee") return 0;
  return enrichedUsages(projectId).reduce((sum, usage) => {
    const price = usage.purchasePriceAtTime ?? usage.article?.purchasePrice ?? 0;
    return sum + usage.usedQuantity * price;
  }, 0);
}

function updateOrderLineStatus(lineId, status, timestamp = new Date().toISOString()) {
  const line = byId(state.orderLines, lineId);
  if (!line) return;
  line.status = status;
  line.updatedAt = timestamp;
  if (status === "Besteld") line.orderedAt = line.orderedAt || timestamp;
  if (status === "Ontvangen") {
    line.orderedAt = line.orderedAt || timestamp;
    line.receivedAt = line.receivedAt || timestamp;
  }
  if (status === "Aangevuld") {
    line.orderedAt = line.orderedAt || timestamp;
    line.receivedAt = line.receivedAt || timestamp;
    line.restockedAt = line.restockedAt || timestamp;
    const item = findMaterialItem(line.itemId);
    const liveItem = item?.sourceType === "garage_box" ? byId(state.garageArticles, line.itemId) : byId(state.articles, line.itemId);
    if (liveItem) {
      if (item.sourceType === "garage_box") {
        liveItem.currentStock = (liveItem.currentStock || 0) + (line.quantityToOrder ?? line.orderQuantity ?? 0);
        liveItem.updatedAt = timestamp;
      } else {
        liveItem.currentStock = liveItem.defaultQuantity;
        liveItem.lastRestockedAt = timestamp.slice(0, 10);
      }
      liveItem.orderStatus = "Aangevuld";
    }
  }
  const projectIds = line.projectIds || [line.projectId].filter(Boolean);
  state.usages
    .filter((usage) => projectIds.includes(usage.projectId) && usage.articleId === line.itemId)
    .forEach((usage) => {
      usage.orderStatus = status;
    });
}

function renderOffice(section = "") {
  if (section === "to-order") {
    ui.dashboardTab = "Bestellen";
  } else if (section) {
    const routeTabs = {
      projects: "Projecten",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      prices: "Prijzen",
      users: "Gebruikers",
      checklists: "Checklist",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Koffers", "Garage Box", "Bestellen", "Kosten", "Prijzen", "Checklist", "Gebruikers"];
  const unsafeCount = (state.adminNotifications || []).filter((note) => note.severity === "danger").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${state.projects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${state.projects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(state.projects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
      <div class="stat-card"><span>Veiligheidsmeldingen</span><strong>${unsafeCount}</strong></div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.dashboardTab === tab ? "active" : ""}" onclick="setDashboardTab('${tab}')">${tab}</button>`).join("")}</div>
    ${section === "to-order" ? renderToOrderPage() : renderDashboardTab()}
  `;
}

function currentRoute() {
  const hashRoute = location.hash.replace("#/", "");
  if (hashRoute) return hashRoute;
  const pathRoute = location.pathname.replace(/^\/+/, "");
  if (pathRoute && pathRoute !== "index.html") return pathRoute;
  return "start";
}

function render() {
  ensureGarageBoxArticles();
  let route = currentRoute();
  if (!currentUser() && !route.startsWith("login")) route = "login";
  if (currentUser() && route.startsWith("login")) route = currentUser().role === "office_admin" ? "office" : "start";
  const [title, subtitle] = pageTitle(route);
  const user = currentUser();
  document.getElementById("app").innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="brand-row">
          <div class="brand-mark">A</div>
          <div>
            <p class="eyebrow">Alff Installaties</p>
            <h1>${title}</h1>
          </div>
        </div>
        <p>${subtitle}</p>
        ${
          user
            ? `<div class="session-bar"><span>${user.name} - ${user.role === "office_admin" ? "Kantoor/Admin" : "Monteur"}</span><button class="btn secondary" onclick="logout()">Uitloggen</button></div>`
            : ""
        }
      </div>
    </div>
    <main class="app-shell">
      <div class="container">${renderRoute(route)}</div>
    </main>
    ${user ? renderBottomNav(route) : ""}
    <section class="print-report" id="print-report"></section>
  `;
}

window.addEventListener("hashchange", render);
render();


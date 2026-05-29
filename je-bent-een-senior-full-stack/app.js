const STORAGE_KEY = "werkbonsysteem-saas-v14";

const ORDER_STATUSES = ["Niet besteld", "Besteld", "Ontvangen", "Aangevuld"];
const DEFAULT_COMPANY_ID = "company-alff-installaties";
const PLATFORM_COMPANY_ID = "platform";
const ROLES = {
  MECHANIC: "mechanic",
  COMPANY_ADMIN: "company_admin",
  PLATFORM_ADMIN: "platform_admin",
};

const seedCompanies = [
  {
    id: DEFAULT_COMPANY_ID,
    company_id: DEFAULT_COMPANY_ID,
    name: "Alff Installaties",
    slug: "alff-installaties",
    logo: "Alff",
    primary_color: "#08172e",
    secondary_color: "#d6a73c",
    active: true,
    subscription_status: "active",
    updated_at: "2026-05-29T00:00:00.000Z",
    branding: {
      brandName: "Alff Installaties",
      brandMark: "Alff",
      primaryColor: "#08172e",
      secondaryColor: "#d6a73c",
    },
    settings: {
      locale: "nl-NL",
      currency: "EUR",
    },
    createdAt: "2026-05-29T00:00:00.000Z",
    created_at: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "company-bedrijf-b",
    company_id: "company-bedrijf-b",
    name: "Bedrijf B",
    slug: "bedrijf-b",
    logo: "",
    primary_color: "#123c69",
    secondary_color: "#2dbe72",
    active: true,
    subscription_status: "trial",
    branding: {
      brandName: "Bedrijf B",
      brandMark: "B",
      primaryColor: "#123c69",
      secondaryColor: "#2dbe72",
    },
    settings: {
      locale: "nl-NL",
      currency: "EUR",
    },
    createdAt: "2026-05-29T00:00:00.000Z",
    created_at: "2026-05-29T00:00:00.000Z",
    updated_at: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "company-bedrijf-c",
    company_id: "company-bedrijf-c",
    name: "Bedrijf C",
    slug: "bedrijf-c",
    logo: "",
    primary_color: "#253237",
    secondary_color: "#c2a878",
    active: false,
    subscription_status: "paused",
    branding: {
      brandName: "Bedrijf C",
      brandMark: "C",
      primaryColor: "#253237",
      secondaryColor: "#c2a878",
    },
    settings: {
      locale: "nl-NL",
      currency: "EUR",
    },
    createdAt: "2026-05-29T00:00:00.000Z",
    created_at: "2026-05-29T00:00:00.000Z",
    updated_at: "2026-05-29T00:00:00.000Z",
  },
];

const seedUsers = [
  {
    id: "user-mechanic-demo",
    name: "Demo Monteur",
    email: "monteur@alffinstallaties.nl",
    password: "monteur123",
    role: "mechanic",
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
    active: true,
    can_create_customer_from_call: false,
    can_create_own_appointments: false,
    can_create_customers: false,
    can_edit_customers: false,
    can_close_workorders: true,
    can_make_quotes: false,
    can_register_payments: false,
    can_manage_inventory: false,
    can_delete_photos: false,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "user-office-demo",
    name: "Company Admin Alff",
    email: "kantoor@alffinstallaties.nl",
    password: "kantoor123",
    role: "company_admin",
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "user-platform-super-admin",
    name: "Platform Admin",
    email: "platform@werkbon-systeem.nl",
    password: "platform123",
    role: "platform_admin",
    company_id: null,
    companyId: null,
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
];

const seedKits = [
  { id: "M001", company_id: DEFAULT_COMPANY_ID, companyId: DEFAULT_COMPANY_ID, name: "M001", description: "Koppelingen / appendages", active: true },
  { id: "M004", company_id: DEFAULT_COMPANY_ID, companyId: DEFAULT_COMPANY_ID, name: "M004", description: "Rookgas / condensmateriaal", active: true },
];

const seedLocations = [
  {
    id: "loc-rookgas-magazijn",
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
    name: "Rookgas magazijn",
    type: "magazijn",
    description: "Centrale voorraad voor rookgas- en condensmateriaal.",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "loc-garage-box",
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
    name: "Garage Box",
    type: "magazijn",
    description: "Centrale voorraad waarmee montagekoffers kunnen worden aangevuld.",
    active: true,
    createdAt: "2026-05-29T00:00:00.000Z",
  },
  {
    id: "loc-ketel-box",
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
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
      company_id: DEFAULT_COMPANY_ID,
      companyId: DEFAULT_COMPANY_ID,
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
    companies: seedCompanies,
    kits: seedKits,
    articles: buildArticles(),
    projects: [],
    usages: [],
    orderLines: [],
    quotes: [],
    quoteLines: [],
    payments: [],
    pricing_categories: [],
    emailAccounts: [],
    emailMessages: [],
    emailTemplates: [],
    emailAuditLogs: [],
    hourlyRates: [],
    profitSnapshots: [],
    maintenanceContracts: [],
    planningEvents: [],
    notifications: [],
    customerNotes: [],
    customers: [],
    locations: seedLocations,
    settings: {
      company_id: DEFAULT_COMPANY_ID,
      companyId: DEFAULT_COMPANY_ID,
      whiteLabelReady: true,
      authProvider: "supabase_auth_prepared",
      rlsRequired: true,
      default_material_margin_percent: 35,
      default_vat_percent: 21,
      default_callout_fee: 45,
      mechanics_can_edit_planning: false,
      mechanics_can_create_events: false,
      monteurs_mogen_offerte_maken: false,
      monteurs_mogen_afrekenen: false,
      monteurs_mogen_verkoopprijzen_zien: false,
      standaard_btw_percentage: 21,
      standaard_voorrijkosten: 45,
      standaard_uurtarief: 85,
      betaling_ter_plaatse_actief: false,
      notifications_enabled: true,
      planning_notifications_enabled: true,
      workorder_notifications_enabled: true,
      emergency_notifications_enabled: true,
      push_notifications_enabled: false,
      quote_valid_days: 30,
      default_hourly_rate_id: "rate-service-monteur",
    },
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
  planningView: "week",
  planningMechanic: "ALL",
  planningMechanicFilters: {},
  planningDate: new Date().toISOString().slice(0, 10),
  planningStatusFilters: {},
  creatingPlanningEvent: false,
  newPlanningDefaults: null,
  planningSelection: null,
  customerSearch: "",
  callPhoneLookup: "",
  editingPlanningEventId: null,
  editingCustomerId: null,
  dismissedNotificationIds: [],
  profitFrom: "",
  profitTo: "",
  platformTab: "Overzicht",
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
  const normalizeRole = (role) => {
    if (role === "office_admin") return ROLES.COMPANY_ADMIN;
    if (role === "platform_super_admin") return ROLES.PLATFORM_ADMIN;
    return role || ROLES.MECHANIC;
  };
  const withCompany = (record, fallbackCompanyId = DEFAULT_COMPANY_ID) => {
    const companyId = record?.company_id || record?.companyId || fallbackCompanyId;
    return { ...record, company_id: companyId, companyId };
  };
  const existingCompanies = input.companies || [];
  const mergedCompanies = [
    ...existingCompanies.map((company) => {
      const companyId = company.id || company.company_id || DEFAULT_COMPANY_ID;
      return {
        ...withCompany(company, companyId),
        id: companyId,
        slug: company.slug || slugify(company.name || companyId),
        logo: company.logo || company.branding?.brandMark || "",
        primary_color: company.primary_color || company.branding?.primaryColor || "#123c69",
        secondary_color: company.secondary_color || company.branding?.secondaryColor || "#2dbe72",
        subscription_status: company.subscription_status || "active",
        active: company.active !== false,
        updated_at: company.updated_at || company.updatedAt || company.created_at || company.createdAt || new Date().toISOString(),
        branding: {
          ...(company.branding || {}),
          brandName: company.branding?.brandName || company.name || companyId,
          brandMark: company.logo || company.branding?.brandMark || String(company.name || companyId).slice(0, 1),
          primaryColor: company.primary_color || company.branding?.primaryColor || "#123c69",
          secondaryColor: company.secondary_color || company.branding?.secondaryColor || "#2dbe72",
        },
      };
    }),
  ];
  seedCompanies.forEach((company) => {
    if (!mergedCompanies.some((item) => item.id === company.id || item.slug === company.slug)) mergedCompanies.push(company);
  });
  const existingLocations = input.locations || input.warehouses || [];
  const mergedLocations = [...existingLocations.map((location) => withCompany(location))];
  seedLocations.forEach((location) => {
    if (!mergedLocations.some((item) => item.id === location.id || item.name.toLowerCase() === location.name.toLowerCase())) {
      mergedLocations.push(location);
    }
  });
  const existingUsers = input.users || [];
  const mergedUsers = existingUsers.map((user) => {
    const role = normalizeRole(user.role);
    const fallbackCompanyId = role === ROLES.PLATFORM_ADMIN ? null : user.company_id || user.companyId || DEFAULT_COMPANY_ID;
    const normalizedUser = withCompany({ ...user, role }, fallbackCompanyId);
    normalizedUser.can_create_customer_from_call = Boolean(user.can_create_customer_from_call);
    normalizedUser.can_create_own_appointments = Boolean(user.can_create_own_appointments);
    normalizedUser.can_create_customers = Boolean(user.can_create_customers || user.can_create_customer_from_call);
    normalizedUser.can_edit_customers = Boolean(user.can_edit_customers);
    normalizedUser.can_close_workorders = user.can_close_workorders !== false;
    normalizedUser.can_make_quotes = Boolean(user.can_make_quotes);
    normalizedUser.can_register_payments = Boolean(user.can_register_payments);
    normalizedUser.can_manage_inventory = Boolean(user.can_manage_inventory);
    normalizedUser.can_delete_photos = Boolean(user.can_delete_photos);
    normalizedUser.can_read_email = user.can_read_email !== false;
    normalizedUser.can_reply_email = user.can_reply_email !== false;
    normalizedUser.can_archive_email = Boolean(user.can_archive_email);
    normalizedUser.can_connect_mailbox = Boolean(user.can_connect_mailbox);
    normalizedUser.can_manage_email_templates = Boolean(user.can_manage_email_templates);
    if (role === ROLES.PLATFORM_ADMIN) {
      normalizedUser.company_id = null;
      normalizedUser.companyId = null;
    }
    return normalizedUser;
  });
  seedUsers.forEach((user) => {
    if (!mergedUsers.some((item) => item.email.toLowerCase() === user.email.toLowerCase())) mergedUsers.push(user);
  });
  const platformDemoUser = mergedUsers.find((user) => String(user.email || "").toLowerCase() === "platform@werkbon-systeem.nl");
  if (platformDemoUser) {
    platformDemoUser.id = platformDemoUser.id || "user-platform-super-admin";
    platformDemoUser.name = platformDemoUser.name || "Platform Admin";
    platformDemoUser.password = "platform123";
    platformDemoUser.role = ROLES.PLATFORM_ADMIN;
    platformDemoUser.company_id = null;
    platformDemoUser.companyId = null;
    platformDemoUser.active = true;
    platformDemoUser.deleted = false;
  }
  const normalized = {
    ...input,
    companies: mergedCompanies,
    orderLines: input.orderLines || [],
    quotes: input.quotes || [],
    quoteLines: input.quoteLines || [],
    payments: input.payments || [],
    pricing_categories: input.pricing_categories || input.pricingCategories || [],
    emailAccounts: input.emailAccounts || input.email_accounts || [],
    emailMessages: input.emailMessages || input.email_messages || [],
    emailTemplates: input.emailTemplates || input.email_templates || [],
    emailAuditLogs: input.emailAuditLogs || input.email_audit_logs || [],
    hourlyRates: input.hourlyRates || [],
    profitSnapshots: input.profitSnapshots || [],
    maintenanceContracts: input.maintenanceContracts || [],
    planningEvents: input.planningEvents || [],
    notifications: input.notifications || [],
    customerNotes: input.customerNotes || input.customer_notes || [],
    customers: input.customers || [],
    locations: mergedLocations,
    users: mergedUsers,
    settings: withCompany(input.settings || {}, DEFAULT_COMPANY_ID),
    session: input.session || null,
  };
  normalized.settings = {
    ...normalized.settings,
    default_material_margin_percent: Number(normalized.settings.default_material_margin_percent ?? 35),
    default_vat_percent: Number(normalized.settings.default_vat_percent ?? 21),
    default_callout_fee: Number(normalized.settings.default_callout_fee ?? 45),
    mechanics_can_edit_planning: Boolean(normalized.settings.mechanics_can_edit_planning),
    mechanics_can_create_events: Boolean(normalized.settings.mechanics_can_create_events),
    monteurs_mogen_offerte_maken: Boolean(normalized.settings.monteurs_mogen_offerte_maken),
    monteurs_mogen_afrekenen: Boolean(normalized.settings.monteurs_mogen_afrekenen),
    monteurs_mogen_verkoopprijzen_zien: Boolean(normalized.settings.monteurs_mogen_verkoopprijzen_zien),
    standaard_btw_percentage: Number(normalized.settings.standaard_btw_percentage ?? normalized.settings.default_vat_percent ?? 21),
    standaard_voorrijkosten: Number(normalized.settings.standaard_voorrijkosten ?? normalized.settings.default_callout_fee ?? 45),
    standaard_uurtarief: Number(normalized.settings.standaard_uurtarief ?? 85),
    betaling_ter_plaatse_actief: Boolean(normalized.settings.betaling_ter_plaatse_actief),
    notifications_enabled: normalized.settings.notifications_enabled !== false,
    planning_notifications_enabled: normalized.settings.planning_notifications_enabled !== false,
    workorder_notifications_enabled: normalized.settings.workorder_notifications_enabled !== false,
    emergency_notifications_enabled: normalized.settings.emergency_notifications_enabled !== false,
    push_notifications_enabled: Boolean(normalized.settings.push_notifications_enabled),
    quote_valid_days: Number(normalized.settings.quote_valid_days ?? 30),
    default_hourly_rate_id: normalized.settings.default_hourly_rate_id || "rate-service-monteur",
  };
  normalized.kits = (normalized.kits || seedKits).map((kit) => withCompany(kit));
  normalized.projects = (normalized.projects || []).map((project) => withCompany(project));
  normalized.orderLines = (normalized.orderLines || []).map((line) => withCompany(line));
  normalized.quotes = (normalized.quotes || []).map((quote) => withCompany(quote));
  normalized.quoteLines = normalized.quoteLines || [];
  normalized.payments = (normalized.payments || []).map((payment) => withCompany(payment));
  normalized.pricing_categories = (normalized.pricing_categories || []).map((category) => withCompany(category));
  normalized.emailAccounts = (normalized.emailAccounts || []).map((account) => withCompany(account));
  normalized.emailMessages = (normalized.emailMessages || []).map((message) => withCompany(message));
  normalized.emailTemplates = (normalized.emailTemplates || []).map((template) => withCompany(template));
  normalized.emailAuditLogs = (normalized.emailAuditLogs || []).map((log) => withCompany(log));
  normalized.hourlyRates = (normalized.hourlyRates || []).map((rate) => withCompany(rate));
  normalized.profitSnapshots = (normalized.profitSnapshots || []).map((snapshot) => withCompany(snapshot));
  normalized.maintenanceContracts = (normalized.maintenanceContracts || []).map((contract) => withCompany(contract));
  normalized.planningEvents = (normalized.planningEvents || []).map((event) => {
    const normalizedEvent = withCompany(event);
    normalizedEvent.mechanic_id = normalizedEvent.mechanic_id || normalizedEvent.mechanicId || normalizedEvent.assignedMechanicId || "";
    normalizedEvent.workorder_id = normalizedEvent.workorder_id || normalizedEvent.workorderId || normalizedEvent.project_id || normalizedEvent.projectId || "";
    normalizedEvent.project_id = normalizedEvent.project_id || normalizedEvent.projectId || normalizedEvent.workorder_id || "";
    return normalizedEvent;
  });
  normalized.notifications = (normalized.notifications || []).map((notification) => ({
    ...withCompany(notification),
    user_id: notification.user_id || notification.userId || "",
    related_workorder_id: notification.related_workorder_id || notification.relatedWorkorderId || "",
    related_planning_id: notification.related_planning_id || notification.relatedPlanningId || "",
    is_read: Boolean(notification.is_read || notification.read),
    created_at: notification.created_at || notification.createdAt || new Date().toISOString(),
  }));
  normalized.customerNotes = (normalized.customerNotes || []).map((note) => ({
    ...withCompany(note),
    customer_id: note.customer_id || note.customerId || "",
    created_by: note.created_by || note.createdBy || "",
    source: note.source || "manual",
    follow_up_action: note.follow_up_action || note.followUpAction || "geen",
    created_at: note.created_at || note.createdAt || new Date().toISOString(),
  }));
  normalized.customers = (normalized.customers || []).map((customer) => withCompany(customer));
  normalized.adminNotifications = (normalized.adminNotifications || []).map((note) => withCompany(note));
  if (normalized.checklistSettings) {
    normalized.checklistSettings = withCompany(normalized.checklistSettings);
    normalized.checklistSettings.checklistItems = (normalized.checklistSettings.checklistItems || []).map((item) => withCompany(item, normalized.checklistSettings.company_id));
  }
  normalized.articles = (normalized.articles || []).map((article) => ({
    ...withCompany(article),
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
    const project = (normalized.projects || []).find((item) => item.id === usage.projectId);
    const price = usage.purchasePriceAtTime ?? article?.purchasePrice ?? 0;
    return {
      ...withCompany(usage, usage.company_id || usage.companyId || project?.company_id || article?.company_id || DEFAULT_COMPANY_ID),
      ...usage,
      purchasePriceAtTime: usage.purchasePriceAtTime ?? price,
      totalPrice: usage.totalPrice ?? usage.usedQuantity * price,
    };
  });
  normalized.garageArticles = (normalized.garageArticles || []).map((article) => withCompany(article));
  if (!normalized.customers.some((customer) => customer.customer_name === "Familie De Vries" && recordCompanyId(customer) === DEFAULT_COMPANY_ID)) {
    normalized.customers.push({
      id: "customer-demo-devries",
      company_id: DEFAULT_COMPANY_ID,
      companyId: DEFAULT_COMPANY_ID,
      customer_name: "Familie De Vries",
      contact_person: "Familie De Vries",
      address: "Havenstraat 12",
      postal_code: "3011 AA",
      city: "Rotterdam",
      phone: "",
      email: "",
      notes: "Demo klant",
      active: true,
      created_at: "2026-05-29T00:00:00.000Z",
      updated_at: "2026-05-29T00:00:00.000Z",
    });
  }
  if (!normalized.hourlyRates.some((rate) => rate.id === "rate-service-monteur" && recordCompanyId(rate) === DEFAULT_COMPANY_ID)) {
    normalized.hourlyRates.push({
      id: "rate-service-monteur",
      company_id: DEFAULT_COMPANY_ID,
      companyId: DEFAULT_COMPANY_ID,
      name: "Service monteur",
      internal_cost_rate: 35,
      sell_rate: 85,
      vat_percent: 21,
      active: true,
    });
  }
  return normalized;
}

function addDemoData(demoState) {
  const projectA = {
    id: "demo-project-001",
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
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
    company_id: DEFAULT_COMPANY_ID,
    companyId: DEFAULT_COMPANY_ID,
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
      company_id: DEFAULT_COMPANY_ID,
      companyId: DEFAULT_COMPANY_ID,
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

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || `company-${Date.now()}`;
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

function currentCompanyId() {
  const user = currentUser();
  if (user?.role === ROLES.PLATFORM_ADMIN) return null;
  return user?.company_id || user?.companyId || DEFAULT_COMPANY_ID;
}

function recordCompanyId(record) {
  return record?.company_id ?? record?.companyId ?? DEFAULT_COMPANY_ID;
}

function currentCompany() {
  const companyId = currentCompanyId();
  return companyId ? byId(state.companies || [], companyId) : null;
}

function isSameCompany(record) {
  return isPlatformSuperAdmin() || recordCompanyId(record) === currentCompanyId();
}

function applyCompany(record, companyId = currentCompanyId()) {
  return { ...record, company_id: companyId, companyId };
}

function isOfficeAdmin() {
  return isTenantAdmin();
}

function isCompanyAdmin() {
  const role = currentUser()?.role;
  return role === ROLES.COMPANY_ADMIN || role === "office_admin";
}

function isPlatformSuperAdmin() {
  return currentUser()?.role === ROLES.PLATFORM_ADMIN || currentUser()?.role === "platform_super_admin";
}

function isTenantAdmin() {
  return isCompanyAdmin();
}

function defaultRouteForUser(user = currentUser()) {
  if (user?.role === ROLES.PLATFORM_ADMIN || user?.role === "platform_super_admin") return "#/platform";
  return user && (user.role === ROLES.COMPANY_ADMIN || user.role === "office_admin") ? "#/admin" : "#/start";
}

function roleLabel(role) {
  if (role === ROLES.PLATFORM_ADMIN || role === "platform_super_admin") return "Platform Admin";
  if (role === ROLES.COMPANY_ADMIN || role === "office_admin") return "Company Admin";
  return "Mechanic";
}

function isMechanic() {
  return currentUser()?.role === "mechanic";
}

function canAccessProject(project) {
  if (!project) return false;
  if (!isSameCompany(project)) return false;
  if (isTenantAdmin()) return true;
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
  const company = user.role === ROLES.PLATFORM_ADMIN ? null : byId(state.companies || [], recordCompanyId(user));
  if (company && company.active === false) {
    document.getElementById("login-error").textContent = "Dit bedrijfsportaal is niet actief.";
    return;
  }
  state.session = { userId: user.id, loggedInAt: new Date().toISOString() };
  saveState();
  location.hash = defaultRouteForUser(user);
}

function quickLogin(email) {
  const user = state.users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.active);
  if (!user) return;
  const company = user.role === ROLES.PLATFORM_ADMIN ? null : byId(state.companies || [], recordCompanyId(user));
  if (company && company.active === false) return;
  state.session = { userId: user.id, loggedInAt: new Date().toISOString() };
  saveState();
  location.hash = defaultRouteForUser(user);
}

function renderLogin() {
  return `
    <section class="login-shell">
      <form class="panel login-card" onsubmit="login(event)">
        <div class="brand-row" style="margin-bottom:18px">
          <div class="brand-mark">W</div>
          <div>
            <p class="eyebrow">Centraal SaaS portaal</p>
            <h1>WerkbonSysteem.nl</h1>
          </div>
        </div>
        <p>Loginportaal voor werkbonnen, monteurs, voorraad en bestellingen.</p>
        <label>E-mail <input name="email" type="email" required autocomplete="email" placeholder="naam@bedrijf.nl" /></label>
        <label>Wachtwoord <input name="password" type="password" required autocomplete="current-password" placeholder="Wachtwoord" /></label>
        <p id="login-error" class="form-error"></p>
        <button class="btn success full" type="submit">Inloggen</button>
        <button class="btn ghost full" type="button" onclick="alert('Demo: wachtwoord vergeten wordt later gekoppeld aan Supabase Auth.')">Wachtwoord vergeten</button>
        <div class="demo-accounts">
          <strong>Demo accounts</strong>
          <span>Mechanic / Alff Installaties: monteur@alffinstallaties.nl / monteur123</span>
          <span>Company Admin / Alff Installaties: kantoor@alffinstallaties.nl / kantoor123</span>
          <span>Platform Admin: platform@werkbon-systeem.nl / platform123</span>
          <button class="btn secondary full" type="button" onclick="quickLogin('monteur@alffinstallaties.nl')">Demo login monteur</button>
          <button class="btn secondary full" type="button" onclick="quickLogin('kantoor@alffinstallaties.nl')">Demo login company admin</button>
          <button class="btn secondary full" type="button" onclick="quickLogin('platform@werkbon-systeem.nl')">Demo login platform admin</button>
        </div>
      </form>
    </section>`;
}

function safeDate(value) {
  if (!value) return "-";
  return String(value).slice(0, 10);
}

function createOrderLineFromUsage(usage, project, article, now = new Date()) {
  const companyId = recordCompanyId(project);
  const currentStockKnown = article.currentStock !== undefined && article.currentStock !== null;
  const missingQuantity = currentStockKnown
    ? Math.max(0, article.defaultQuantity - article.currentStock)
    : usage.usedQuantity;
  const orderQuantity = currentStockKnown ? missingQuantity : usage.usedQuantity;
  return {
    id: uid("order"),
    company_id: companyId,
    companyId: companyId,
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
  const companyId = recordCompanyId(project);
  const price = usage.purchasePriceAtTime ?? article.purchasePrice ?? null;
  const keyStatus = "Niet besteld";
  const existing = state.orderLines.find((line) => isSameCompany(line) && line.itemId === article.id && line.kitId === article.kitId && line.status === keyStatus);
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
    company_id: companyId,
    companyId: companyId,
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
  return state.orderLines.filter((line) => isSameCompany(line) && line.itemId === articleId);
}

function activeOrderLines() {
  return state.orderLines.filter((line) => isSameCompany(line) && (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0 && line.status !== "Aangevuld");
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
  const articles = state.articles.filter((article) => article.active && isSameCompany(article) && article.kitId === kitId);
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
  const project = byId(state.projects, projectId);
  const companyId = project ? recordCompanyId(project) : currentCompanyId();
  return state.usages.filter((usage) => usage.projectId === projectId && (isPlatformSuperAdmin() || recordCompanyId(usage) === companyId));
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
  if (route.startsWith("login")) return ["WerkbonSysteem.nl", "Loginportaal voor werkbonnen, monteurs, voorraad en bestellingen."];
  if (route.startsWith("start")) return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
  if (route.startsWith("new")) return ["Nieuw project", "Maak direct een registratie aan."];
  if (route.startsWith("active")) return ["Lopende projecten", "Open projecten die nog ingevuld worden."];
  if (route.startsWith("completed")) return ["Afgeronde projecten", "Projectregistraties en aanvullingen."];
  if (route.startsWith("project")) return ["Monteurscherm", "Snel onderdelen registreren."];
  if (route.startsWith("summary")) return ["Project afronden", "Controleer de aanvullijst en aantallen."];
  if (route.startsWith("admin") || route.startsWith("office")) return ["Admin", "Bedrijfsportal voor kosten, voorraad, gebruikers en bestellingen."];
  if (route.startsWith("platform")) return ["Platform Admin Dashboard", "Beheer bedrijven, gebruikers, abonnementen en platformgebruik."];
  if (route.startsWith("manage")) return ["Koffers beheren", "Artikelen, prijzen en artikelnummers."];
  return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
}

function render() {
  let route = location.hash.replace("#/", "") || "start";
  if (!currentUser() && !route.startsWith("login")) route = "login";
  if (currentUser() && route.startsWith("login")) route = defaultRouteForUser().replace("#/", "");
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
            ? `<div class="session-bar"><span>${user.name} · ${roleLabel(user.role)}</span><button class="btn secondary" onclick="logout()">Uitloggen</button></div>`
            : ""
        }
      </div>
    </div>
    <main class="app-shell">
      <div class="container">${renderRoute(route)}</div>
    </main>
    ${user ? renderBottomNav(route) : ""}
    ${user ? renderNotificationPopup() : ""}
    <section class="print-report" id="print-report"></section>
  `;
}

function renderBottomNav(route) {
  const roleItems = isPlatformSuperAdmin()
    ? [["platform", "P", "Platform"]]
    : isOfficeAdmin()
      ? [["start", "S", "Start"], ["admin", "A", "Admin"]]
      : [["start", "S", "Start"]];
  return `<nav class="bottom-nav">${roleItems
    .map(([id, icon, label]) => `<a class="${route.startsWith(id) ? "active" : ""}" href="#/${id}"><b>${icon}</b>${label}</a>`)
    .join("")}</nav>`;
  const items = [
    ["home", "⌂", "Start"],
    ["new", "+", "Nieuw"],
    ["active", "◷", "Lopend"],
    ["admin", "A", "Admin"],
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
  if (name === "platform") return isPlatformSuperAdmin() ? renderPlatform(id) : renderNoOfficeAccess();
  if ((name === "admin" || name === "office" || name === "manage") && !isOfficeAdmin()) return renderNoOfficeAccess();
  if (isPlatformSuperAdmin() && name !== "platform") return renderPlatform();
  if (name === "start") return renderHome();
  if (name === "new") return renderNewProject();
  if (name === "active") return renderProjectList("Open");
  if (name === "completed") return renderProjectList("Afgerond");
  if (name === "project") return renderTechnician(id);
  if (name === "summary") return renderSummary(id);
  if (name === "admin" || name === "office") return renderOffice(id);
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
      ${homeTile("admin", "Admin", "Volg bestellingen, kosten en aanvullen op.", "A")}
    </section>
  `;
}

function homeTile(route, title, text, icon) {
  return `<a class="tile" href="#/${route}"><span><strong>${title}</strong><span>${text}</span></span><i class="tile-icon">${icon}</i></a>`;
}

function renderNewProject() {
  const today = new Date().toISOString().slice(0, 10);
  const mechanicName = currentUser()?.name || "";
  const mechanics = state.users.filter((user) => user.role === "mechanic" && user.active && isSameCompany(user));
  const customers = activeCustomers();
  return `
    <form class="panel" onsubmit="createProject(event)">
      <div class="form-grid">
        <label>Projectnaam <input name="projectName" required placeholder="Bijv. Ketel vervangen Janssen" /></label>
        <label>Klant kiezen
          <select name="customer_id" onchange="fillProjectCustomer(this.value)">
            <option value="">Nieuwe/handmatige klant</option>
            ${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}
          </select>
        </label>
        <label>Klant <input name="customer" required placeholder="Naam klant" /></label>
        <label>Adres <input name="address" required placeholder="Straat, plaats" /></label>
        <label>Postcode <input name="postal_code" placeholder="Postcode" /></label>
        <label>Plaats <input name="city" placeholder="Plaats" /></label>
        <label>Telefoon <input name="phone" placeholder="Telefoon" /></label>
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
        ${isOfficeAdmin() ? `<label>Start planning <input name="start_datetime" type="datetime-local" /></label><label>Einde planning <input name="end_datetime" type="datetime-local" /></label>` : ""}
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
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/admin">Naar Admin</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
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
    location.hash = `#/admin/${route}`;
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
    .filter((line) => isSameCompany(line))
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
  const locations = state.locations.filter((location) => isSameCompany(location));
  const kits = state.kits.filter((kit) => isSameCompany(kit));
  const articles = state.articles.filter((article) => isSameCompany(article));
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Actieve locaties</span><strong>${locations.filter((location) => location.active).length}</strong></div>
      <div class="stat-card"><span>Magazijnen</span><strong>${locations.filter((location) => location.type === "magazijn").length}</strong></div>
      <div class="stat-card"><span>Koffers</span><strong>${kits.length}</strong></div>
      <div class="stat-card"><span>Artikelregels</span><strong>${articles.length}</strong></div>
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
        <tbody>${locations
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
  if (state.locations.some((location) => isSameCompany(location) && location.name.toLowerCase() === name.toLowerCase())) {
    alert("Deze locatie bestaat al.");
    return;
  }
  state.locations.push({
    id: uid("loc"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
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
  if (!location || !isSameCompany(location)) return;
  location[field] = field === "active" ? Boolean(value) : value;
  saveState();
}

function renderUsers() {
  const users = state.users.filter((user) => isSameCompany(user));
  const roleOptions = [
    [ROLES.MECHANIC, "Mechanic"],
    [ROLES.COMPANY_ADMIN, "Company Admin"],
    ...(isPlatformSuperAdmin() ? [[ROLES.PLATFORM_ADMIN, "Platform Admin"]] : []),
  ];
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
                  <option value="company_admin" ${user.role === "company_admin" ? "selected" : ""}>company_admin</option>
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
  if (!canManageUser(user)) return;
  if (field === "role" && value === ROLES.PLATFORM_ADMIN && !isPlatformSuperAdmin()) return;
  if (!isPlatformSuperAdmin() && field === "role" && value !== ROLES.MECHANIC && value !== ROLES.COMPANY_ADMIN) return;
  user[field] = field === "active" ? Boolean(value) : value;
  saveState();
}

function renderOrderAndKitStatus() {
  const rows = filteredOrderRows();
  const critical = state.articles.filter((article) => isSameCompany(article)).filter((article) => {
    const status = stockStatus(article);
    return status === "Mist" || (article.currentStock ?? article.defaultQuantity) < article.minimumStock;
  }).length;
  const kitsWithShortage = state.kits.filter((kit) => isSameCompany(kit) && kitStatus(kit.id) !== "Compleet").length;
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
            ${state.kits.filter((kit) => isSameCompany(kit)).map((kit) => `<option value="${kit.id}" ${ui.orderKit === kit.id ? "selected" : ""}>${kit.id}</option>`).join("")}
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
        ${state.kits.filter((kit) => isSameCompany(kit)).map(renderSingleKitStatus).join("")}
      </div>
    </section>`;
}

function renderSingleKitStatus(kit) {
  const articles = state.articles.filter((article) => article.active && isSameCompany(article) && article.kitId === kit.id);
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
    .filter((usage) => isSameCompany(usage) && projectIds.includes(usage.projectId) && usage.articleId === line.itemId)
    .forEach((usage) => {
      usage.orderStatus = status;
    });
}

function renderOfficeProjects() {
  const projects = visibleProjects();
  if (!projects.length) return `<div class="panel empty">Nog geen projecten.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Project</th><th>Klant</th><th>Monteur</th><th>Status</th><th>Gebruikt</th><th>Kosten</th><th>Actie</th></tr></thead>
        <tbody>${projects
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
  if (state.kits.some((kit) => isSameCompany(kit) && kit.id === id)) {
    alert("Deze koffer bestaat al.");
    return;
  }
  state.kits.push({
    id,
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
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
  if (!article || !isSameCompany(article)) return;
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
  if (isTenantAdmin()) return state.projects.filter((project) => isSameCompany(project));
  return state.projects.filter((project) => canAccessProject(project));
}

function renderOfficeProjects() {
  const projects = visibleProjects();
  if (!projects.length) return `<div class="panel empty">Nog geen projecten.</div>`;
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="button-row">
        <a class="btn success" href="#/new">Project aanmaken en toewijzen</a>
      </div>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Project</th><th>Klant</th><th>Toegewezen monteur</th><th>Status</th><th>Gebruikte artikelen</th><th>Materiaalkosten</th><th>Actie</th></tr></thead>
        <tbody>${projects
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
  return `<section class="panel empty"><h2>Geen toegang tot adminomgeving</h2><p>Je account heeft geen toegang tot deze omgeving. Je wordt teruggestuurd naar Start.</p></section>`;
}

function renderHome() {
  const projects = visibleProjects();
  const open = projects.filter(isProjectOpen).length;
  const done = projects.filter(isProjectCompleted).length;
  const replenish = projects.reduce((sum, project) => sum + totalUsed(project.id), 0);
  const planning = mechanicPlanningEvents();
  return `
    ${planning.length ? `<section class="panel" style="margin-bottom:14px"><h2>Mijn planning</h2>${renderMechanicPlanningList(planning)}</section>` : ""}
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
      ${isOfficeAdmin() ? homeTile("admin", "Admin", "Beveiligde omgeving voor kosten, voorraad en bestellingen.", "A") : ""}
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
    location.hash = `#/admin/${route}`;
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
    .filter((line) => isSameCompany(line))
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
  const articles = state.articles.filter((article) => isSameCompany(article));
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Koffer</th><th>Omschrijving</th><th>Standaard</th><th>Voorraad</th><th>Minimum</th><th>Prijs</th><th>Artikelnummer</th><th>Status</th></tr></thead>
        <tbody>${articles.map((a) => `<tr>
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
        <label>Koffer <select name="kitId">${state.kits.filter((kit) => isSameCompany(kit)).map((kit) => `<option value="${kit.id}">${kit.id} - ${kit.description}</option>`).join("")}</select></label>
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
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
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
  const rows = visibleProjects().filter(isProjectCompleted);
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
  const users = state.users.filter((user) => !user.deleted && (isPlatformSuperAdmin() || isSameCompany(user)));
  const roleOptions = [
    [ROLES.MECHANIC, "Mechanic"],
    [ROLES.COMPANY_ADMIN, "Company Admin"],
    ...(isPlatformSuperAdmin() ? [[ROLES.PLATFORM_ADMIN, "Platform Admin"]] : []),
  ];
  const companyOptions = (state.companies || []).filter((company) => company.active !== false);
  const pendingDeleteUser = ui.pendingDeleteUserId ? byId(state.users, ui.pendingDeleteUserId) : null;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Nieuwe gebruiker</h2>
      <form class="form-grid" onsubmit="addUser(event)">
        <label>Naam <input name="name" required /></label>
        <label>E-mail <input name="email" type="email" required /></label>
        <label>Wachtwoord <input name="password" type="text" required /></label>
        ${
          isPlatformSuperAdmin()
            ? `<label>Company
                <select name="company_id">
                  <option value="">Geen company (alleen platform_admin)</option>
                  ${companyOptions.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}
                </select>
              </label>`
            : ""
        }
        <label>Rol <select name="role" required>${roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
        <button class="btn success" type="submit">Gebruiker aanmaken</button>
      </form>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Actief</th><th>Naam</th><th>E-mail</th><th>Company</th><th>Rol</th><th>Actie</th></tr></thead>
      <tbody>${users.map((user) => `<tr>
        <td><input type="checkbox" ${user.active ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /></td>
        <td><input value="${escapeAttr(user.name)}" onchange="updateUser('${user.id}', 'name', this.value)" /></td>
        <td>${user.email}</td>
        <td>${escapeHtml(user.role === ROLES.PLATFORM_ADMIN ? "Platform" : byId(state.companies || [], recordCompanyId(user))?.name || recordCompanyId(user))}</td>
        <td><select onchange="updateUser('${user.id}', 'role', this.value)">${roleOptions.map(([value, label]) => `<option value="${value}" ${user.role === value ? "selected" : ""}>${label}</option>`).join("")}</select></td>
        <td>
          <div class="button-row" style="margin-top:0">
            <button class="btn secondary" type="button" onclick="saveUserRow()">Opslaan</button>
            <button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active ? "Deactiveren" : "Activeren"}</button>
            <button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button>
          </div>
        </td>
      </tr>`).join("")}</tbody>
    </table></div>
    ${
      pendingDeleteUser
        ? `<section class="modal-backdrop">
            <div class="panel confirm-modal">
              <h2>Gebruiker verwijderen</h2>
              <p>Weet je zeker dat je deze gebruiker wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.</p>
              <div class="button-row">
                <button class="btn secondary" type="button" onclick="cancelDeleteUser()">Annuleren</button>
                <button class="btn danger" type="button" onclick="confirmDeleteUser()">Definitief verwijderen</button>
              </div>
            </div>
          </section>`
        : ""
    }`;
}

function addUser(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get("name").trim();
  const email = form.get("email").trim().toLowerCase();
  const password = form.get("password").trim();
  const role = form.get("role");
  if (!name || !email || !password || !role) return alert("Vul naam, e-mail, wachtwoord en rol in.");
  if (!isPlatformSuperAdmin() && role === ROLES.PLATFORM_ADMIN) return alert("Company Admin mag geen platform_admin aanmaken.");
  if (state.users.some((user) => user.email.toLowerCase() === email)) return alert("Deze e-mail bestaat al.");
  const companyId = isPlatformSuperAdmin() ? (role === ROLES.PLATFORM_ADMIN ? null : form.get("company_id")) : currentCompanyId();
  if (role !== ROLES.PLATFORM_ADMIN && !companyId) return alert("Kies een company voor deze gebruiker.");
  state.users.push({
    id: uid("user"),
    company_id: companyId,
    companyId: companyId,
    name,
    email,
    password,
    role,
    active: true,
    deleted: false,
    can_create_customer_from_call: false,
    createdAt: new Date().toISOString(),
  });
  saveState();
  render();
}

function saveUserRow() {
  saveState();
  render();
}

function toggleUserActive(userId) {
  const user = byId(state.users, userId);
  if (!canManageUser(user)) return;
  user.active = !user.active;
  saveState();
  render();
}

function requestDeleteUser(userId) {
  const user = byId(state.users, userId);
  if (!canDeleteUser(user)) return;
  ui.pendingDeleteUserId = userId;
  render();
}

function cancelDeleteUser() {
  ui.pendingDeleteUserId = null;
  render();
}

function canManageUser(user) {
  if (!user) return false;
  if (isPlatformSuperAdmin()) return true;
  return user.role !== ROLES.PLATFORM_ADMIN && isSameCompany(user);
}

function canDeleteUser(user) {
  if (!user) return false;
  if (user.id === currentUser()?.id) {
    alert("Je kunt je eigen account niet verwijderen.");
    return false;
  }
  if (!canManageUser(user)) return false;
  if (!isPlatformSuperAdmin() && user.role === ROLES.PLATFORM_ADMIN) return false;
  return true;
}

function userHasReferences(userId) {
  return (
    state.projects.some((project) => [project.assignedMechanicId, project.mechanicId, project.createdBy, project.created_by].includes(userId)) ||
    (state.planningEvents || []).some((event) => [event.mechanic_id, event.created_by].includes(userId)) ||
    (state.orderLines || []).some((line) => (line.mechanicIds || []).includes(userId)) ||
    (state.maintenanceContracts || []).some((contract) => contract.assigned_mechanic_id === userId) ||
    (state.quotes || []).some((quote) => quote.mechanic_id === userId)
  );
}

function confirmDeleteUser() {
  const user = byId(state.users, ui.pendingDeleteUserId);
  if (!canDeleteUser(user)) {
    ui.pendingDeleteUserId = null;
    render();
    return;
  }
  if (userHasReferences(user.id)) {
    user.deleted = true;
    user.active = false;
    user.deletedAt = new Date().toISOString();
  } else {
    state.users = state.users.filter((item) => item.id !== user.id);
  }
  ui.pendingDeleteUserId = null;
  saveState();
  render();
}

function renderPrices() {
  const articles = state.articles.filter((article) => isSameCompany(article));
  const noPrice = articles.filter((article) => !article.purchasePrice).length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Artikelen</span><strong>${articles.length}</strong></div>
      <div class="stat-card"><span>Zonder prijs</span><strong>${noPrice}</strong></div>
      <div class="stat-card"><span>Bronnen</span><strong>3</strong></div>
      <div class="stat-card"><span>Alleen admin</span><strong>Actief</strong></div>
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
      <tbody>${articles.map((article) => `<tr>
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
    const article = state.articles.find((item) => isSameCompany(item) && item.supplierArticleNumber === priceRow.articleNumber);
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
        const article = state.articles.find((item) => isSameCompany(item) && item.supplierArticleNumber === String(articleNumber || "").trim());
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
    state.articles.filter((article) => isSameCompany(article)).map((article) => ({
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
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    minRequiredPhotos: 1,
    mechanicSignatureRequired: false,
    coTemplateRequired: true,
    requiredHours: true,
    checklistItems: [
      { id: "gas-tightness", company_id: currentCompanyId(), companyId: currentCompanyId(), label: "Gasdichtheid gecontroleerd", required: false, active: true },
      { id: "flue-checked", company_id: currentCompanyId(), companyId: currentCompanyId(), label: "Rookgasafvoer gecontroleerd", required: false, active: true },
      { id: "air-supply", company_id: currentCompanyId(), companyId: currentCompanyId(), label: "Luchttoevoer gecontroleerd", required: false, active: true },
      { id: "safety-devices", company_id: currentCompanyId(), companyId: currentCompanyId(), label: "Beveiligingen gecontroleerd", required: false, active: true },
      { id: "combustion-checked", company_id: currentCompanyId(), companyId: currentCompanyId(), label: "Verbranding gecontroleerd", required: false, active: true },
    ],
  };
  state.checklistSettings.minRequiredPhotos = Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1));
  state.checklistSettings.company_id = state.checklistSettings.company_id || currentCompanyId();
  state.checklistSettings.companyId = state.checklistSettings.companyId || state.checklistSettings.company_id;
  state.checklistSettings.checklistItems = (state.checklistSettings.checklistItems || []).map((item) => ({
    ...item,
    company_id: item.company_id || item.companyId || state.checklistSettings.company_id,
    companyId: item.companyId || item.company_id || state.checklistSettings.company_id,
  }));
}

function ensureWorkOrder(project) {
  if (!project) return null;
  ensureWorkOrderSettings();
  const companyId = recordCompanyId(project);
  project.workOrder = project.workOrder || {};
  project.workOrder.company_id = project.workOrder.company_id || companyId;
  project.workOrder.companyId = project.workOrder.companyId || companyId;
  project.workOrder.gasApplianceWork = project.workOrder.gasApplianceWork || "";
  project.workOrder.measurements = project.workOrder.measurements || {};
  project.workOrder.combustion = project.workOrder.combustion || {};
  project.workOrder.installationSafe = project.workOrder.installationSafe || "";
  project.workOrder.unsafeReason = project.workOrder.unsafeReason || "";
  project.workOrder.customerSignature = project.workOrder.customerSignature || "";
  project.workOrder.mechanicSignature = project.workOrder.mechanicSignature || "";
  project.workOrder.photos = (project.workOrder.photos || []).map((photo) => ({
    ...photo,
    company_id: photo.company_id || photo.companyId || companyId,
    companyId: photo.companyId || photo.company_id || companyId,
  }));
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
      workOrder.photos.push({ id: uid("photo"), company_id: recordCompanyId(project), companyId: recordCompanyId(project), type: "vrije foto", name: file.name, dataUrl: reader.result, createdAt: new Date().toISOString() });
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
      workOrder.photos.push({ id: uid("photo"), company_id: recordCompanyId(project), companyId: recordCompanyId(project), type, name: file.name, dataUrl: reader.result, createdAt: new Date().toISOString() });
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
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/admin">Naar Admin</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
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
  updatePlanningOnProjectComplete(project);
  ensureQuoteForProject(project);
  ensureProfitSnapshot(project);
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

function normalizeCompanyBranding(company) {
  if (!company) return null;
  company.logo_url = company.logo_url || company.logoUrl || "";
  company.logo_data = company.logo_data || company.logoData || "";
  company.primary_color = company.primary_color || company.branding?.primaryColor || "#08172e";
  company.secondary_color = company.secondary_color || company.branding?.secondaryColor || "#d6a73c";
  company.branding = {
    ...(company.branding || {}),
    brandName: company.name || company.branding?.brandName || "WerkbonSysteem.nl",
    brandMark: company.logo || company.branding?.brandMark || String(company.name || "W").slice(0, 4),
    primaryColor: company.primary_color,
    secondaryColor: company.secondary_color,
    logoData: company.logo_data,
    logoUrl: company.logo_url,
  };
  return company;
}

function companyLogoSrc(company) {
  normalizeCompanyBranding(company);
  return company?.logo_data || company?.logo_url || company?.branding?.logoData || company?.branding?.logoUrl || "";
}

function companyFallbackMark(company, fallback = "W") {
  const name = company?.name || company?.branding?.brandName || fallback;
  return company?.logo || company?.branding?.brandMark || String(name).slice(0, 1).toUpperCase();
}

function renderBrandMark(company, className = "brand-mark", fallback = "W") {
  const src = companyLogoSrc(company);
  if (src) return `<div class="${className} has-logo"><img src="${escapeAttr(src)}" alt="${escapeAttr(company?.name || "WerkbonSysteem.nl")}" /></div>`;
  return `<div class="${className}">${escapeHtml(companyFallbackMark(company, fallback))}</div>`;
}

function renderPdfBrandHeader(company) {
  normalizeCompanyBranding(company);
  const logo = companyLogoSrc(company);
  return `<div class="pdf-brand">
    ${logo ? `<img src="${escapeAttr(logo)}" alt="${escapeAttr(company?.name || "Logo")}" />` : `<div class="pdf-brand-fallback">${escapeHtml(companyFallbackMark(company))}</div>`}
    <div>
      <h1>${escapeHtml(company?.name || "WerkbonSysteem.nl")}</h1>
      <p>${escapeHtml(company?.address || company?.company_address || "")}</p>
      <p>${escapeHtml(company?.phone || company?.email || company?.contact_email || "")}</p>
    </div>
  </div>`;
}

function validateLogoFile(file) {
  if (!file) return "Geen bestand geselecteerd.";
  const allowed = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"];
  if (!allowed.includes(file.type)) return "Logo moet JPG, PNG, SVG of WebP zijn.";
  if (file.size > 5 * 1024 * 1024) return "Logo mag maximaal 5 MB zijn.";
  return "";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function updateCompanyLogo(companyId, file) {
  const company = byId(state.companies || [], companyId);
  if (!company || (!isPlatformSuperAdmin() && strictRecordCompanyId(company) !== currentCompanyId())) return alert("Geen toegang.");
  const error = validateLogoFile(file);
  if (error) return alert(error);
  const dataUrl = await readFileAsDataUrl(file);
  company.logo_data = dataUrl;
  company.logo_url = dataUrl;
  company.branding_updated_at = new Date().toISOString();
  normalizeCompanyBranding(company);
  if (isPlatformSuperAdmin()) logPlatformAction("bedrijfslogo gewijzigd", company.id, company.name);
  saveState();
  render();
}

function removeCompanyLogo(companyId) {
  const company = byId(state.companies || [], companyId);
  if (!company || (!isPlatformSuperAdmin() && strictRecordCompanyId(company) !== currentCompanyId())) return alert("Geen toegang.");
  company.logo_data = "";
  company.logo_url = "";
  company.branding_updated_at = new Date().toISOString();
  normalizeCompanyBranding(company);
  if (isPlatformSuperAdmin()) logPlatformAction("bedrijfslogo verwijderd", company.id, company.name);
  saveState();
  render();
}

function resetCompanyBranding(companyId) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  company.logo_data = "";
  company.logo_url = "";
  company.primary_color = "#08172e";
  company.secondary_color = "#d6a73c";
  company.branding_updated_at = new Date().toISOString();
  normalizeCompanyBranding(company);
  logPlatformAction("branding gereset", company.id, company.name);
  saveState();
  render();
}

function updateCurrentCompanyBranding(field, value) {
  const company = currentCompany();
  if (!company || !isCompanyAdmin()) return;
  updateCompanyBrandingValue(company.id, field, value);
}

function updateCompanyBrandingValue(companyId, field, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || (!isPlatformSuperAdmin() && strictRecordCompanyId(company) !== currentCompanyId())) return alert("Geen toegang.");
  if (field === "name") {
    company.name = String(value || "").trim() || company.name;
  } else if (field === "primary_color" || field === "secondary_color") {
    company[field] = value;
  } else {
    company[field] = value;
  }
  company.branding_updated_at = new Date().toISOString();
  normalizeCompanyBranding(company);
  if (isPlatformSuperAdmin()) logPlatformAction("bedrijfsbranding gewijzigd", company.id, `${field}: ${value}`);
  saveState();
  render();
}

function renderCompanyBrandingPanel(company, platform = false) {
  normalizeCompanyBranding(company);
  return `<section class="panel branding-panel">
    <div class="article-head"><div><h2>Bedrijfsbranding</h2><p>Logo en kleuren voor het bedrijfsportaal.</p></div>${renderBrandMark(company, "brand-preview-mark")}</div>
    <div class="form-grid">
      <label>Bedrijfsnaam <input value="${escapeAttr(company.name || "")}" onchange="${platform ? `updateCompanyBrandingValue('${company.id}', 'name', this.value)` : "updateCurrentCompanyBranding('name', this.value)"}" /></label>
      <label>Logo upload <input type="file" accept="image/jpeg,image/png,image/svg+xml,image/webp" onchange="updateCompanyLogo('${company.id}', this.files[0])" /></label>
      <label>Primaire kleur <input type="color" value="${escapeAttr(company.primary_color || "#08172e")}" onchange="${platform ? `updateCompanyBrandingValue('${company.id}', 'primary_color', this.value)` : "updateCurrentCompanyBranding('primary_color', this.value)"}" /></label>
      <label>Secundaire kleur <input type="color" value="${escapeAttr(company.secondary_color || "#d6a73c")}" onchange="${platform ? `updateCompanyBrandingValue('${company.id}', 'secondary_color', this.value)` : "updateCurrentCompanyBranding('secondary_color', this.value)"}" /></label>
    </div>
    <div class="branding-preview">
      ${renderBrandMark(company, "branding-logo-preview")}
      <div><strong>${escapeHtml(company.name || "-")}</strong><span>Laatst gewijzigd: ${escapeHtml(String(company.branding_updated_at || "-").replace("T", " ").slice(0, 16))}</span></div>
    </div>
    <div class="button-row"><button class="btn secondary" type="button" onclick="removeCompanyLogo('${company.id}')">Logo verwijderen</button>${platform ? `<button class="btn warn" type="button" onclick="resetCompanyBranding('${company.id}')">Branding resetten</button>` : ""}</div>
  </section>`;
}

function renderCompanySettings() {
  const company = currentCompany();
  if (!company) return `<div class="panel empty">Geen bedrijfsinstellingen beschikbaar.</div>`;
  normalizeCompanyBranding(company);
  const settings = companySettings();
  return `
    ${renderCompanyBrandingPanel(company)}
    <section class="panel" style="margin-top:14px">
      <h2>Instellingen</h2>
      <div class="meta-grid">
        <div class="meta"><span>Bedrijf</span><strong>${escapeHtml(company.name)}</strong></div>
        <div class="meta"><span>Domein/subdomein</span><strong>${escapeHtml(company.slug || "-")}</strong></div>
        <div class="meta"><span>Primaire kleur</span><strong>${escapeHtml(company.primary_color || "-")}</strong></div>
        <div class="meta"><span>Secundaire kleur</span><strong>${escapeHtml(company.secondary_color || "-")}</strong></div>
        <div class="meta"><span>Abonnement</span><strong>${escapeHtml(company.subscription_status || company.billing_status || "-")}</strong></div>
        <div class="meta"><span>Tenant ID</span><strong>${escapeHtml(company.id)}</strong></div>
      </div>
    </section>
    <section class="panel" style="margin-top:14px">
      <h2>Offerte, winst en planning</h2>
      <div class="form-grid">
        <label>Standaard materiaalmarge % <input type="number" step="0.01" value="${settings.default_material_margin_percent}" onchange="updateCompanySetting('default_material_margin_percent', this.value)" /></label>
        <label>Standaard btw % <input type="number" step="0.01" value="${settings.default_vat_percent}" onchange="updateCompanySetting('default_vat_percent', this.value)" /></label>
        <label>Voorrijkosten <input type="number" step="0.01" value="${settings.default_callout_fee}" onchange="updateCompanySetting('default_callout_fee', this.value)" /></label>
        <label>Geldigheid offerte dagen <input type="number" min="1" value="${settings.quote_valid_days}" onchange="updateCompanySetting('quote_valid_days', this.value)" /></label>
        <label>Monteur mag planning wijzigen
          <select onchange="updateCompanySetting('mechanics_can_edit_planning', this.value === 'true')">
            <option value="false" ${!settings.mechanics_can_edit_planning ? "selected" : ""}>Nee</option>
            <option value="true" ${settings.mechanics_can_edit_planning ? "selected" : ""}>Ja</option>
          </select>
        </label>
        <label>Monteur mag afspraken maken
          <select onchange="updateCompanySetting('mechanics_can_create_events', this.value === 'true')">
            <option value="false" ${!settings.mechanics_can_create_events ? "selected" : ""}>Nee</option>
            <option value="true" ${settings.mechanics_can_create_events ? "selected" : ""}>Ja</option>
          </select>
        </label>
      </div>
    </section>
    ${renderPaymentQuoteSettings()}
    ${renderNotificationSettings()}
    ${renderHourlyRatesSettings()}`;
}

function renderPlatformCompaniesTable(editable) {
  const rows = platformCompanies();
  return `
    <div class="company-card-list">
      ${rows.map((company) => {
        normalizeCompanyBranding(company);
        return `<article class="panel company-brand-card">
          <div class="article-head"><div><h2>${escapeHtml(company.name)}</h2><p>${company.blocked ? "Geblokkeerd" : company.active !== false ? "Actief" : "Inactief"} - ${escapeHtml(company.subscription_package || "-")}</p></div>${renderBrandMark(company, "brand-preview-mark")}</div>
          ${editable ? renderCompanyBrandingPanel(company, true) : ""}
          <div class="form-grid">
            <label>Domein/subdomein <input value="${escapeAttr(company.slug || "")}" ${editable ? `onchange="updateCompany('${company.id}', 'slug', this.value)"` : "readonly"} /></label>
            <label>Pakket <select ${editable ? `onchange="updateCompany('${company.id}', 'subscription_package', this.value)"` : "disabled"}>${Object.keys(SUBSCRIPTION_PACKAGES).map((pkg) => `<option value="${pkg}" ${company.subscription_package === pkg ? "selected" : ""}>${pkg}</option>`).join("")}</select></label>
            <label>Betaalstatus <select ${editable ? `onchange="updateCompany('${company.id}', 'billing_status', this.value)"` : "disabled"}>${["trial", "active", "overdue", "paused", "cancelled"].map((status) => `<option value="${status}" ${company.billing_status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
            <label>Gebruikerslimiet <input type="number" min="1" value="${Number(company.user_limit || 10)}" ${editable ? `onchange="updateCompany('${company.id}', 'user_limit', this.value)"` : "readonly"} /></label>
            <label>Opslaglimiet MB <input type="number" min="100" value="${Number(company.storage_limit_mb || 1024)}" ${editable ? `onchange="updateCompany('${company.id}', 'storage_limit_mb', this.value)"` : "readonly"} /></label>
            <label>Gebruikers <input value="${companyUsers(company.id).length}" readonly /></label>
            <label>Werkbonnen <input value="${companyProjects(company.id).length}" readonly /></label>
          </div>
          ${editable ? `<div class="button-row"><button class="btn warn" type="button" onclick="toggleCompanyBlocked('${company.id}')">${company.blocked ? "Deblokkeren" : "Blokkeren"}</button><button class="btn secondary" type="button" onclick="updateCompany('${company.id}', 'active', ${company.active === false ? "true" : "false"})">${company.active === false ? "Activeren" : "Deactiveren"}</button><button class="btn danger" type="button" onclick="deleteCompany('${company.id}')">Verwijderen</button></div>` : ""}
        </article>`;
      }).join("")}
    </div>`;
}

function updateCompany(companyId, field, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  ensureCompanyPlatformConfig(company);
  const numeric = ["user_limit", "storage_limit_mb"];
  const booleanFields = ["active", "blocked"];
  company[field] = numeric.includes(field) ? Number(value) || 0 : booleanFields.includes(field) ? Boolean(value) : value;
  if (["name", "logo", "primary_color", "secondary_color"].includes(field)) normalizeCompanyBranding(company);
  if (field === "slug") company.slug = slugify(value);
  if (field === "subscription_package") ensureCompanyPlatformConfig(company);
  company.subscription_status = company.billing_status || company.subscription_status || "active";
  company.updated_at = new Date().toISOString();
  if (["name", "logo", "primary_color", "secondary_color"].includes(field)) company.branding_updated_at = company.updated_at;
  logPlatformAction(field === "active" ? (company.active ? "bedrijf geactiveerd" : "bedrijf gedeactiveerd") : "bedrijf gewijzigd", company.id, `${field}: ${value}`);
  saveState();
  render();
}

function textOrFallback(value, fallback = "Niet ingevuld") {
  if (value === true) return "Ja";
  if (value === false) return "Nee";
  const text = String(value ?? "").trim();
  return text || fallback;
}

function customerForProject(project) {
  if (!project) return null;
  const customerId = project.customer_id || project.customerId || project.customerID || "";
  let customer = customerId ? byId(state.customers || [], customerId) : null;
  if (!customer && project.email) customer = companyScoped(state.customers || []).find((item) => String(item.email || "").toLowerCase() === String(project.email || "").toLowerCase());
  if (!customer && project.phone) customer = companyScoped(state.customers || []).find((item) => normalizePhone(item.phone) === normalizePhone(project.phone));
  if (!customer && project.customer) customer = companyScoped(state.customers || []).find((item) => String(item.customer_name || "").toLowerCase() === String(project.customer || "").toLowerCase());
  return customer || null;
}

function planningForProject(project) {
  if (!project) return null;
  return companyScoped(state.planningEvents || []).find((event) =>
    event.project_id === project.id ||
    event.workorder_id === project.id ||
    event.related_workorder_id === project.id ||
    event.workorder_number === workorderNumber(project)
  ) || null;
}

function workorderProjectById(workorderId) {
  return (state.projects || []).find((project) =>
    project.id === workorderId ||
    project.workorder_id === workorderId ||
    project.workOrder?.id === workorderId ||
    project.workOrder?.workorder_id === workorderId ||
    project.workOrder?.workorder_number === workorderId ||
    workorderNumber(project) === workorderId
  );
}

function getFullWorkorderExportData(workorderId) {
  const project = workorderProjectById(workorderId);
  if (!project || !canAccessProject(project)) return null;
  const workorder = ensureWorkOrder(project);
  const company = byId(state.companies || [], strictRecordCompanyId(project)) || currentCompany();
  const customer = customerForProject(project);
  const planning = planningForProject(project);
  const mechanicId = project.assignedMechanicId || project.assigned_mechanic_id || project.mechanicId || planning?.mechanic_id || "";
  const mechanic = mechanicId ? byId(state.users || [], mechanicId) : null;
  const materials = materialUsages(project.id)
    .filter((usage) => Number(usage.usedQuantity || 0) > 0)
    .map((usage) => ({
      id: usage.id,
      article: usage.article?.description || usage.description || "",
      article_number: usage.article?.supplierArticleNumber || usage.article?.articleNumber || usage.article?.sku || "",
      quantity: Number(usage.usedQuantity || 0),
      source: sourceLabel(usage.article?.sourceType === "garage_box" ? GARAGE_BOX_SOURCE : usage.kitId || usage.article?.kitId || ""),
      status: usage.orderStatus || "Niet besteld",
    }));
  const checklistAnswers = buildWorkorderChecklistExport(project, workorder);
  const photos = storedWorkOrderPhotos(project);
  const hours = workorder.hours || {};
  return {
    company,
    customer,
    workorder,
    project,
    planning,
    checklistAnswers,
    materials,
    photos,
    signatures: {
      customer: workorder.customerSignature || workorder.signature || "",
      mechanic: workorder.mechanicSignature || "",
      signed_at: workorder.closedAt || project.completedAt || project.updated_at || project.updatedAt || "",
    },
    hours,
    mechanic,
  };
}

function buildWorkorderChecklistExport(project, workorder) {
  ensureWorkOrderSettings();
  const rows = [];
  const yesNo = (value) => value === true ? "Ja" : value === false ? "Nee" : textOrFallback(value);
  rows.push({ category: "CO-keur", question: "Werkzaamheden aan gastoestel", answer: yesNo(workorder.gasApplianceWork), unit: "" });
  if (workorder.gasApplianceWork === "ja") {
    [
      ["measurements", "CO_before_ppm", "CO meting voor werkzaamheden", "ppm"],
      ["measurements", "CO_after_ppm", "CO meting na werkzaamheden", "ppm"],
      ["combustion", "co_full_load", "CO vollast", ""],
      ["combustion", "co_low_load", "CO laaglast", ""],
      ["combustion", "co2_full_load", "CO2 vollast", ""],
      ["combustion", "co2_low_load", "CO2 laaglast", ""],
      ["combustion", "o2_full_load", "O2 vollast", ""],
      ["combustion", "o2_low_load", "O2 laaglast", ""],
      ["combustion", "draft_pa", "Trekmeting", "Pa"],
      ["combustion", "gas_supply_pressure", "Gasvoordruk", "mbar"],
      ["combustion", "operating_pressure", "Werkdruk", "mbar"],
    ].forEach(([group, key, label, unit]) => {
      rows.push({ category: "CO-keur", question: label, answer: textOrFallback(workorder[group]?.[key]), unit });
    });
    rows.push({ category: "CO-keur", question: "Installatie veilig te gebruiken", answer: yesNo(workorder.installationSafe), unit: "" });
    if (workorder.installationSafe === "nee") rows.push({ category: "CO-keur", question: "Reden onveilig", answer: textOrFallback(workorder.unsafeReason), unit: "" });
  }
  (state.checklistSettings.checklistItems || []).filter((item) => item.active).forEach((item) => {
    rows.push({
      category: item.category || "Algemene checklist",
      question: item.label || item.question || item.id,
      answer: workorder.checklistAnswers?.[item.id] ? "Ja" : "Nee",
      unit: item.unit || "",
    });
  });
  return rows;
}

function customerExportFields(data) {
  const { customer, project, planning } = data;
  return {
    name: customer?.customer_name || project.customer_name || project.customer || planning?.customer_name || "",
    contact: customer?.contact_person || project.contact_person || "",
    address: customer?.address || project.address || planning?.address || "",
    postal_code: customer?.postal_code || project.postal_code || planning?.postal_code || "",
    city: customer?.city || project.city || planning?.city || "",
    phone: customer?.phone || project.phone || planning?.phone || "",
    email: customer?.email || project.email || planning?.email || "",
  };
}

function renderPdfKeyValue(title, rows) {
  return `<section class="pdf-section"><h2>${escapeHtml(title)}</h2><div class="pdf-kv">${rows.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(textOrFallback(value))}</strong></div>`).join("")}</div></section>`;
}

function renderWorkorderPdfHtml(data) {
  const { company, project, workorder, planning, materials, photos, checklistAnswers, signatures, hours, mechanic } = data;
  const customer = customerExportFields(data);
  const workDate = planning?.start_datetime || project.date || project.completedAt || project.completed_at || project.createdAt || "";
  const fileSafeNumber = workorderNumber(project);
  const workDescription = workorder.description || workorder.work_description || project.description || project.projectName || "";
  const performed = workorder.performed_work || workorder.performedWork || workorder.executedWork || workorder.solution || "";
  const solution = workorder.solution || "";
  const notes = workorder.notes || project.notes || planning?.notes || "";
  const improvements = workorder.improvements || workorder.improvementPoints || workorder.recommendations || "";
  const advice = workorder.customerAdvice || workorder.advice || "";
  const exportedAt = new Date().toISOString();
  return `<article class="workorder-pdf">
    ${renderPdfBrandHeader(company)}
    <section class="pdf-hero">
      <div>
        <p class="pdf-eyebrow">Werkbon</p>
        <h1>${escapeHtml(fileSafeNumber)}</h1>
        <p>${escapeHtml(project.projectName || project.project_name || "Werkbon")}</p>
      </div>
      <div class="pdf-status">
        <span>Status</span>
        <strong>${escapeHtml(project.status || workorder.status || "Niet ingevuld")}</strong>
      </div>
    </section>
    ${renderPdfKeyValue("Werkbongegevens", [
      ["Werkbonnummer", fileSafeNumber],
      ["Project-ID", project.id],
      ["Datum export", safeDate(exportedAt)],
      ["Datum werkzaamheden", safeDate(workDate)],
      ["Monteur", mechanic?.name || project.technician || mechanicNameById(project.assignedMechanicId || project.mechanicId)],
      ["Categorie", project.pricing_category_name || workorder.pricing_category_name || project.category || ""],
    ])}
    ${renderPdfKeyValue("Klantgegevens", [
      ["Klantnaam", customer.name],
      ["Contactpersoon", customer.contact],
      ["Adres", customer.address],
      ["Postcode", customer.postal_code],
      ["Plaats", customer.city],
      ["Telefoon", customer.phone],
      ["E-mail", customer.email],
    ])}
    ${renderPdfKeyValue("Planning / tijd", [
      ["Starttijd", hours.startTime || String(planning?.start_datetime || "").slice(11, 16)],
      ["Eindtijd", hours.endTime || String(planning?.end_datetime || "").slice(11, 16)],
      ["Pauze", hours.breakMinutes !== undefined ? `${hours.breakMinutes} minuten` : ""],
      ["Totaal gewerkte uren", hours.totalHours !== undefined ? `${hours.totalHours}` : ""],
      ["Planningstatus", planning?.status || ""],
    ])}
    <section class="pdf-section"><h2>Werkzaamheden</h2>
      <div class="pdf-text-block"><h3>Omschrijving werkzaamheden</h3><p>${escapeHtml(textOrFallback(workDescription))}</p></div>
      <div class="pdf-text-block"><h3>Uitgevoerde werkzaamheden</h3><p>${escapeHtml(textOrFallback(performed))}</p></div>
      <div class="pdf-text-block"><h3>Oplossing</h3><p>${escapeHtml(textOrFallback(solution))}</p></div>
      <div class="pdf-text-block"><h3>Opmerkingen monteur</h3><p>${escapeHtml(textOrFallback(notes))}</p></div>
      <div class="pdf-text-block"><h3>Verbeterpunten</h3><p>${escapeHtml(textOrFallback(improvements))}</p></div>
      <div class="pdf-text-block"><h3>Advies aan klant</h3><p>${escapeHtml(textOrFallback(advice))}</p></div>
    </section>
    <section class="pdf-section"><h2>Checklist</h2>
      ${checklistAnswers.length ? `<table class="pdf-table"><thead><tr><th>Categorie</th><th>Vraag</th><th>Antwoord</th><th>Eenheid</th></tr></thead><tbody>${checklistAnswers.map((row) => `<tr><td>${escapeHtml(row.category)}</td><td>${escapeHtml(row.question)}</td><td>${escapeHtml(textOrFallback(row.answer))}</td><td>${escapeHtml(row.unit || "-")}</td></tr>`).join("")}</tbody></table>` : `<p>Geen checklist ingevuld.</p>`}
    </section>
    <section class="pdf-section"><h2>Materialen</h2>
      ${materials.length ? `<table class="pdf-table"><thead><tr><th>Artikel</th><th>Artikelnummer</th><th>Aantal</th><th>Herkomst</th><th>Status</th></tr></thead><tbody>${materials.map((row) => `<tr><td>${escapeHtml(textOrFallback(row.article))}</td><td>${escapeHtml(textOrFallback(row.article_number, "-"))}</td><td>${escapeHtml(row.quantity)}</td><td>${escapeHtml(textOrFallback(row.source, "-"))}</td><td>${escapeHtml(textOrFallback(row.status, "-"))}</td></tr>`).join("")}</tbody></table>` : `<p>Er zijn geen materialen gebruikt.</p>`}
    </section>
    <section class="pdf-section pdf-signatures"><h2>Handtekeningen</h2>
      <div class="pdf-signature-grid">
        <div><h3>Klant / opdrachtgever</h3>${signatures.customer ? `<img src="${escapeAttr(signatures.customer)}" alt="Handtekening klant" />` : `<p>Niet ingevuld</p>`}<p>${escapeHtml(customer.contact || customer.name || "Niet ingevuld")}</p><small>${escapeHtml(textOrFallback(signatures.signed_at ? safeDate(signatures.signed_at) : ""))}</small></div>
        <div><h3>Monteur</h3>${signatures.mechanic ? `<img src="${escapeAttr(signatures.mechanic)}" alt="Handtekening monteur" />` : `<p>Niet ingevuld</p>`}<p>${escapeHtml(mechanic?.name || project.technician || "Niet ingevuld")}</p><small>${escapeHtml(textOrFallback(signatures.signed_at ? safeDate(signatures.signed_at) : ""))}</small></div>
      </div>
    </section>
    ${renderPdfKeyValue("Afronding", [
      ["Opdrachtgever geïnformeerd", workorder.customerInformed ?? workorder.customer_informed],
      ["Verbeterpunten besproken", workorder.improvementsDiscussed ?? workorder.improvements_discussed],
      ["Gebruikersvoorschriften aanwezig", workorder.userInstructionsPresent ?? workorder.user_instructions_present],
      ["Offerte gewenst", workorder.quoteWanted ?? workorder.quote_wanted],
      ["Installatie veilig bevonden", workorder.installationSafe],
    ])}
    <section class="pdf-section pdf-photos"><h2>Foto's</h2>
      ${photos.length ? `<div class="pdf-photo-grid">${photos.map((photo) => `<figure><img src="${escapeAttr(photoSrc(photo))}" alt="${escapeAttr(photo.file_name || "Werkbon foto")}" /><figcaption><strong>${escapeHtml(photo.file_name || "foto")}</strong><span>${escapeHtml(photo.category || photo.type || "vrije foto")}</span><span>${escapeHtml(photoTimestamp(photo))}</span></figcaption></figure>`).join("")}</div>` : `<p>Geen foto's geupload.</p>`}
    </section>
  </article>`;
}

function exportPdf(projectId) {
  const data = getFullWorkorderExportData(projectId);
  if (!data) return alert("Werkbon exporteren lukt niet: geen toegang of werkbon niet gevonden.");
  const customer = customerExportFields(data);
  const filename = `werkbon-${workorderNumber(data.project)}-${slugify(customer.name || data.project.customer || "klant")}.pdf`;
  document.getElementById("print-report").innerHTML = renderWorkorderPdfHtml(data);
  const previousTitle = document.title;
  document.title = filename;
  window.print();
  setTimeout(() => {
    document.title = previousTitle;
  }, 1000);
}

function workorderMailBody(data) {
  const customer = customerExportFields(data);
  const companyName = data.company?.name || "WerkbonSysteem.nl";
  const date = safeDate(data.project.completedAt || data.project.completed_at || data.project.date || new Date().toISOString());
  return `Beste ${customer.name || "klant"},\n\nBijgevoegd/onderstaand ontvangt u de werkbon van de uitgevoerde werkzaamheden op ${date}.\n\nMet vriendelijke groet,\n${companyName}`;
}

function mailWorkorderToCustomer(projectId) {
  const data = getFullWorkorderExportData(projectId);
  if (!data) return alert("Werkbon mailen lukt niet: geen toegang of werkbon niet gevonden.");
  const customer = customerExportFields(data);
  if (!customer.email) return alert("Geen e-mailadres bekend voor deze klant.");
  const existing = document.getElementById("workorder-mail-dialog");
  if (existing) existing.remove();
  const dialog = document.createElement("section");
  dialog.id = "workorder-mail-dialog";
  dialog.className = "modal-backdrop";
  dialog.innerHTML = `<div class="panel confirm-modal">
    <h2>Werkbon mailen naar klant</h2>
    <p>Download eerst de PDF en voeg deze daarna handmatig toe als bijlage.</p>
    <p><strong>Aan:</strong> ${escapeHtml(customer.email)}<br><strong>Werkbon:</strong> ${escapeHtml(workorderNumber(data.project))}</p>
    <div class="button-row">
      <button class="btn secondary" type="button" onclick="closeWorkorderMailDialog()">Annuleren</button>
      <button class="btn success" type="button" onclick="exportPdf('${data.project.id}')">Download PDF</button>
      <button class="btn secondary" type="button" onclick="openWorkorderMailto('${data.project.id}')">Open e-mail naar klant</button>
    </div>
    <p class="muted">Voeg de gedownloade PDF handmatig toe als bijlage.</p>
  </div>`;
  document.body.appendChild(dialog);
}

function closeWorkorderMailDialog() {
  document.getElementById("workorder-mail-dialog")?.remove();
}

function openWorkorderMailto(projectId) {
  const data = getFullWorkorderExportData(projectId);
  if (!data) return;
  const customer = customerExportFields(data);
  if (!customer.email) return alert("Geen e-mailadres bekend voor deze klant.");
  const companyName = data.company?.name || "WerkbonSysteem.nl";
  const subject = `Werkbon ${workorderNumber(data.project)} - ${companyName}`;
  const body = `${workorderMailBody(data)}\n\nLet op: voeg de gedownloade PDF handmatig toe als bijlage.`;
  window.location.href = `mailto:${encodeURIComponent(customer.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  closeWorkorderMailDialog();
}

function exportQuotePdf(quoteId) {
  const quote = byId(state.quotes || [], quoteId);
  if (!quote || !isSameCompany(quote)) return;
  const project = byId(state.projects || [], quote.project_id);
  const company = byId(state.companies || [], strictRecordCompanyId(quote)) || currentCompany();
  const lines = (state.quoteLines || []).filter((line) => line.quote_id === quote.id);
  document.getElementById("print-report").innerHTML = `
    ${renderPdfBrandHeader(company)}
    <h2>Offerte ${escapeHtml(quote.quote_number || "")}</h2>
    <p>${escapeHtml(project?.customer || "")}<br>${escapeHtml(project?.address || "")}</p>
    <table><thead><tr><th>Omschrijving</th><th>Aantal</th><th>Verkoop</th><th>Totaal</th></tr></thead><tbody>${lines.map((line) => `<tr><td>${escapeHtml(line.description || "")}</td><td>${escapeHtml(`${line.quantity || ""} ${line.unit || ""}`)}</td><td>${euro(line.sell_price)}</td><td>${euro(line.total_sell)}</td></tr>`).join("")}</tbody></table>
    <h2>Totaal incl btw: ${euro(quote.total_inc_vat)}</h2>
    <p>${escapeHtml(quote.terms_text || "")}</p>`;
  window.print();
}

function exportInvoicePdf(paymentId) {
  const payment = byId(state.payments || [], paymentId);
  if (!payment || !isSameCompany(payment)) return;
  const quote = byId(state.quotes || [], payment.quote_id);
  const project = byId(state.projects || [], quote?.project_id || payment.workorder_id);
  const company = byId(state.companies || [], strictRecordCompanyId(payment)) || currentCompany();
  document.getElementById("print-report").innerHTML = `
    ${renderPdfBrandHeader(company)}
    <h2>Factuur / betaling</h2>
    <p><strong>Werkbon:</strong> ${escapeHtml(project ? workorderNumber(project) : payment.workorder_id || "-")}<br><strong>Klant:</strong> ${escapeHtml(project?.customer || "-")}</p>
    <table><tbody><tr><th>Bedrag</th><td>${euro(payment.amount)}</td></tr><tr><th>Status</th><td>${escapeHtml(payment.status || "-")}</td></tr><tr><th>Betaalmethode</th><td>${escapeHtml(payment.payment_method || "-")}</td></tr><tr><th>Betaaldatum</th><td>${payment.paid_at ? safeDate(payment.paid_at) : "-"}</td></tr></tbody></table>`;
  window.print();
}

function renderPaymentsAdmin() {
  const rows = companyScoped(state.payments || []).sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
  const paid = rows.filter((row) => row.status === "betaald").reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const open = rows.filter((row) => row.status !== "betaald").reduce((sum, row) => sum + Number(row.amount || 0), 0);
  return `<section class="stats" style="margin-bottom:14px">
    <div class="stat-card"><span>Betalingen</span><strong>${rows.length}</strong></div>
    <div class="stat-card"><span>Betaald</span><strong>${euro(paid)}</strong></div>
    <div class="stat-card"><span>Open</span><strong>${euro(open)}</strong></div>
    <div class="stat-card"><span>Pin/contant</span><strong>${rows.filter((row) => ["Pin", "Contant"].includes(row.payment_method)).length}</strong></div>
  </section>
  <div class="table-wrap"><table><thead><tr><th>Werkbon</th><th>Klant</th><th>Monteur</th><th>Bedrag</th><th>Betaalmethode</th><th>Status</th><th>Betaaldatum</th><th>Notitie</th><th>PDF</th></tr></thead><tbody>${rows.map((payment) => {
    const quote = byId(state.quotes || [], payment.quote_id);
    const project = byId(state.projects || [], quote?.project_id || payment.workorder_id);
    return `<tr><td>${escapeHtml(project ? workorderNumber(project) : payment.workorder_id || "-")}</td><td>${escapeHtml(project?.customer || "-")}</td><td>${escapeHtml(mechanicNameById(payment.mechanic_id))}</td><td>${euro(payment.amount)}</td><td>${escapeHtml(payment.payment_method || "-")}</td><td>${escapeHtml(payment.status || "-")}</td><td>${payment.paid_at ? safeDate(payment.paid_at) : "-"}</td><td>${escapeHtml(payment.note || "-")}</td><td><button class="btn secondary" type="button" onclick="exportInvoicePdf('${payment.id}')">PDF</button></td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function renderOffice(section = "") {
  if (section) {
    const routeTabs = {
      projects: "Projecten",
      workorders: "Werkbonnen",
      planning: "Planning",
      quotes: "Offertes",
      contracts: "Onderhoudscontracten",
      warehouse: "Magazijn",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      profit: "Winst",
      prices: "Prijzen",
      users: "Gebruikers",
      checklists: "Checklist",
      settings: "Instellingen",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Werkbonnen", "Planning", "Klanten", "Offertes", "Onderhoudscontracten", "Magazijn", "Koffers", "Bestellen", "Kosten", "Winst", "Prijzen", "Checklist", "Gebruikers", "Instellingen"];
  const companyProjects = visibleProjects();
  const unsafeCount = (state.adminNotifications || []).filter((note) => note.severity === "danger" && isSameCompany(note)).length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${companyProjects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${companyProjects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(companyProjects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
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
    Werkbonnen: "workorders",
    Planning: "planning",
    Klanten: "customers",
    Categorieen: "categories",
    Categorieën: "categories",
    Offertes: "quotes",
    Onderhoudscontracten: "contracts",
    Magazijn: "warehouse",
    Koffers: "kits",
    "Garage Box": "garage-box",
    Bestellen: "orders",
    Kosten: "costs",
    Winst: "profit",
    Prijzen: "prices",
    Checklist: "checklists",
    Gebruikers: "users",
    Instellingen: "settings",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/admin/${route}`)) {
    location.hash = `#/admin/${route}`;
    return;
  }
  render();
}

function renderDashboardTab() {
  if (ui.dashboardTab === "Werkbonnen") return renderOfficeProjects();
  if (ui.dashboardTab === "Planning") return renderPlanning();
  if (ui.dashboardTab === "Klanten") return renderCustomers();
  if (ui.dashboardTab === "Categorieen" || ui.dashboardTab === "Categorieën") return renderPricingCategories();
  if (ui.dashboardTab === "Offertes") return renderQuotes();
  if (ui.dashboardTab === "Onderhoudscontracten") return renderMaintenanceContracts();
  if (ui.dashboardTab === "Magazijn") return renderGarageBox();
  if (ui.dashboardTab === "Bestellen") return renderOrdering();
  if (ui.dashboardTab === "Koffers") return renderOrderAndKitStatus();
  if (ui.dashboardTab === "Garage Box") return renderGarageBox();
  if (ui.dashboardTab === "Kosten") return renderCosts();
  if (ui.dashboardTab === "Winst") return renderProfitDashboard();
  if (ui.dashboardTab === "Prijzen") return renderPrices();
  if (ui.dashboardTab === "Checklist") return renderChecklistSettings();
  if (ui.dashboardTab === "Gebruikers") return renderUsers();
  if (ui.dashboardTab === "Instellingen") return renderCompanySettings();
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
        <label>Minimum aantal foto's <input type="number" min="0" value="${settings.minRequiredPhotos}" onchange="updateChecklistSetting('minRequiredPhotos', this.value)" /></label>
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
  state.checklistSettings[field] = field === "minRequiredPhotos" ? Math.max(0, Number(value ?? 0)) : value;
  saveState();
  render();
}

function addChecklistItem(event) {
  event.preventDefault();
  ensureWorkOrderSettings();
  const form = new FormData(event.target);
  state.checklistSettings.checklistItems.push({
    id: uid("check"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    label: form.get("label").trim(),
    required: form.get("required") === "true",
    active: true,
  });
  saveState();
  render();
}

function updateChecklistItem(itemId, field, value) {
  ensureWorkOrderSettings();
  const item = state.checklistSettings.checklistItems.find((entry) => entry.id === itemId && isSameCompany(entry));
  if (!item) return;
  item[field] = field === "label" ? value : Boolean(value);
  saveState();
  render();
}

function deleteChecklistItem(itemId) {
  ensureWorkOrderSettings();
  state.checklistSettings.checklistItems = state.checklistSettings.checklistItems.filter((item) => item.id !== itemId || !isSameCompany(item));
  visibleProjects().forEach((project) => {
    if (project.workOrder?.checklistAnswers) delete project.workOrder.checklistAnswers[itemId];
  });
  saveState();
  render();
}

function ensureWorkOrder(project) {
  if (!project) return null;
  ensureWorkOrderSettings();
  const companyId = recordCompanyId(project);
  project.workOrder = project.workOrder || {};
  project.workOrder.company_id = project.workOrder.company_id || companyId;
  project.workOrder.companyId = project.workOrder.companyId || companyId;
  project.workOrder.gasApplianceWork = project.workOrder.gasApplianceWork || "";
  project.workOrder.measurements = project.workOrder.measurements || {};
  project.workOrder.combustion = project.workOrder.combustion || {};
  project.workOrder.installationSafe = project.workOrder.installationSafe || "";
  project.workOrder.unsafeReason = project.workOrder.unsafeReason || "";
  project.workOrder.customerSignature = project.workOrder.customerSignature || "";
  project.workOrder.mechanicSignature = project.workOrder.mechanicSignature || "";
  project.workOrder.photos = (project.workOrder.photos || []).map((photo) => ({
    ...photo,
    company_id: photo.company_id || photo.companyId || companyId,
    companyId: photo.companyId || photo.company_id || companyId,
  }));
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
      company_id: recordCompanyId(project),
      companyId: recordCompanyId(project),
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
      <div class="button-row">
        <button class="btn secondary" type="button" onclick="exportPdf('${project.id}')">Export PDF werkbon</button>
        <button class="btn secondary" type="button" onclick="mailWorkorderToCustomer('${project.id}')">Werkbon mailen naar klant</button>
      </div>
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
        <button class="btn secondary" onclick="mailWorkorderToCustomer('${projectId}')">Werkbon mailen naar klant</button>
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/admin">Naar Admin</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
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
    .filter((line) => isSameCompany(line))
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
        <a class="btn" href="#/admin/to-order">Te bestellen</a>
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
        <a class="btn secondary" href="#/admin/orders">Terug naar Bestellen</a>
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
      state.garageArticles.push(applyCompany(seed, DEFAULT_COMPANY_ID));
    }
  });
  state.garageArticles = state.garageArticles.map((article) => ({
    ...applyCompany(article, recordCompanyId(article)),
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
  const mechanics = state.users.filter((user) => user.role === "mechanic" && user.active && isSameCompany(user));
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
  const companyId = currentCompanyId();
  const assignedMechanicId = isOfficeAdmin() ? form.get("assignedMechanicId") : currentUser()?.id;
  const assignedMechanic = byId(state.users, assignedMechanicId);
  let customer = byId(state.customers || [], form.get("customer_id"));
  const customerName = String(form.get("customer") || "").trim();
  const address = String(form.get("address") || "").trim();
  if (!customer && customerName && address) {
    customer = {
      id: uid("customer"),
      company_id: companyId,
      companyId: companyId,
      customer_name: customerName,
      contact_person: customerName,
      address,
      postal_code: String(form.get("postal_code") || "").trim(),
      city: String(form.get("city") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      email: "",
      notes: "Aangemaakt vanuit werkbon",
      active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    state.customers.push(customer);
  }
  const project = {
    id: uid("project"),
    company_id: companyId,
    companyId: companyId,
    projectName: form.get("projectName").trim(),
    project_name: form.get("projectName").trim(),
    customer_id: customer?.id || "",
    customerId: customer?.id || "",
    customer: customer?.customer_name || customerName,
    customer_name: customer?.customer_name || customerName,
    address: `${customer?.address || address}${customer?.postal_code || form.get("postal_code") || customer?.city || form.get("city") ? `, ${customer?.postal_code || form.get("postal_code") || ""} ${customer?.city || form.get("city") || ""}` : ""}`.trim(),
    postal_code: customer?.postal_code || String(form.get("postal_code") || "").trim(),
    city: customer?.city || String(form.get("city") || "").trim(),
    phone: customer?.phone || String(form.get("phone") || "").trim(),
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
    .filter((article) => article.active && isSameCompany(article) && sourceConfig.selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      company_id: companyId,
      companyId: companyId,
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
  let planningEvent = null;
  if (isOfficeAdmin() && form.get("start_datetime") && form.get("end_datetime")) {
    planningEvent = {
      id: uid("plan"),
      company_id: companyId,
      companyId: companyId,
      customer_id: customer?.id || "",
      workorder_id: project.id,
      project_id: project.id,
      mechanic_id: assignedMechanicId,
      title: workorderNumber(project),
      customer_name: project.customer,
      address: customer?.address || address,
      postal_code: project.postal_code,
      city: project.city,
      phone: project.phone,
      start_datetime: form.get("start_datetime"),
      end_datetime: form.get("end_datetime"),
      status: "ingepland",
      priority: "normaal",
      notes: "",
      created_by: currentUser()?.id || "",
      updated_at: new Date().toISOString(),
    };
    state.planningEvents.push(planningEvent);
  }
  if (isOfficeAdmin() && assignedMechanicId) notifyWorkorderAssigned(project, planningEvent);
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
    .filter((article) => article.active && isSameCompany(article) && sources.includes(article.kitId))
    .map(normalizeKitArticle);
  const garageItems = sources.includes(GARAGE_BOX_SOURCE) || sources.includes("Garage Box")
    ? state.garageArticles.filter((article) => article.active && isSameCompany(article)).map(normalizeGarageArticle)
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
  if (!article || !isSameCompany(article)) return;
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
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
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
  const rows = state.garageArticles.filter((article) => isSameCompany(article));
  const activeRows = rows.filter((article) => article.active);
  const totalValue = activeRows.reduce((sum, article) => sum + (article.currentStock || 0) * (article.purchasePrice || 0), 0);
  const low = activeRows.filter((article) => garageStatus(article) !== "Voldoende").length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Magazijn artikelen</span><strong>${activeRows.length}</strong></div>
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(totalValue)}</strong></div>
      <div class="stat-card"><span>Laag/op</span><strong>${low}</strong></div>
      <div class="stat-card"><span>Type</span><strong>Magazijn</strong></div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Artikel toevoegen aan Magazijn</h2>
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
    state.garageArticles.filter((article) => isSameCompany(article)).map((article) => ({
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
  const companyId = recordCompanyId(project);
  const status = "Te bestellen";
  const existing = state.orderLines.find((line) => isSameCompany(line) && line.itemId === article.id && line.kitId === "Garage Box" && line.status === status);
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
    company_id: companyId,
    companyId: companyId,
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
    .filter((line) => isSameCompany(line))
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
    .filter((usage) => isSameCompany(usage) && projectIds.includes(usage.projectId) && usage.articleId === line.itemId)
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
      workorders: "Werkbonnen",
      planning: "Planning",
      customers: "Klanten",
      categories: "Categorieën",
      quotes: "Offertes",
      contracts: "Onderhoudscontracten",
      warehouse: "Magazijn",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      profit: "Winst",
      prices: "Prijzen",
      users: "Gebruikers",
      checklists: "Checklist",
      settings: "Instellingen",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Werkbonnen", "Planning", "Klanten", "Offertes", "Onderhoudscontracten", "Magazijn", "Koffers", "Bestellen", "Kosten", "Winst", "Prijzen", "Checklist", "Gebruikers", "Instellingen"];
  const companyProjects = visibleProjects();
  const unsafeCount = (state.adminNotifications || []).filter((note) => note.severity === "danger" && isSameCompany(note)).length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${companyProjects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${companyProjects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(companyProjects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
      <div class="stat-card"><span>Veiligheidsmeldingen</span><strong>${unsafeCount}</strong></div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.dashboardTab === tab ? "active" : ""}" onclick="setDashboardTab('${tab}')">${tab}</button>`).join("")}</div>
    ${section === "to-order" ? renderToOrderPage() : renderDashboardTab()}
  `;
}

function platformCompanies() {
  return state.companies || [];
}

function companyUsers(companyId) {
  return (state.users || []).filter((user) => recordCompanyId(user) === companyId);
}

function companyProjects(companyId) {
  return (state.projects || []).filter((project) => recordCompanyId(project) === companyId);
}

function companyOrderLines(companyId) {
  return (state.orderLines || []).filter((line) => recordCompanyId(line) === companyId);
}

function companySafetyNotifications(companyId) {
  return (state.adminNotifications || []).filter((note) => recordCompanyId(note) === companyId && note.severity === "danger");
}

function companyPhotoCount(companyId) {
  return companyProjects(companyId).reduce((sum, project) => sum + ((project.workOrder?.photos || []).length), 0);
}

function companyLastActivity(companyId) {
  const dates = [
    ...companyProjects(companyId).map((project) => project.completedAt || project.updatedAt || project.createdAt),
    ...companyOrderLines(companyId).map((line) => line.updatedAt || line.createdAt),
    ...companyUsers(companyId).map((user) => user.createdAt || user.created_at),
  ].filter(Boolean);
  if (!dates.length) return "-";
  return safeDate(dates.sort().at(-1));
}

function platformStats() {
  const companies = platformCompanies();
  const users = state.users || [];
  const projects = state.projects || [];
  const openProjects = projects.filter(isProjectOpen);
  const completedProjects = projects.filter(isProjectCompleted);
  const orderValue = (state.orderLines || [])
    .filter((line) => (line.quantityToOrder ?? line.orderQuantity ?? 0) > 0 && line.status !== "Aangevuld")
    .reduce((sum, line) => sum + (line.totalPrice || 0), 0);
  const safetyCount = (state.adminNotifications || []).filter((note) => note.severity === "danger").length;
  const activity = companies
    .map((company) => ({
      company,
      score: companyProjects(company.id).length + companyOrderLines(company.id).length + companyUsers(company.id).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  return { companies, users, projects, openProjects, completedProjects, orderValue, safetyCount, activity };
}

function setPlatformTab(tab) {
  ui.platformTab = tab;
  const tabRoutes = {
    Overzicht: "overview",
    Bedrijven: "companies",
    Gebruikers: "users",
    Werkbonnen: "workorders",
    Bestellingen: "orders",
    Veiligheid: "safety",
    Abonnementen: "subscriptions",
    Instellingen: "settings",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/platform/${route}`)) {
    location.hash = `#/platform/${route}`;
    return;
  }
  render();
}

function renderPlatform(section = "") {
  const routeTabs = {
    overview: "Overzicht",
    companies: "Bedrijven",
    users: "Gebruikers",
    workorders: "Werkbonnen",
    orders: "Bestellingen",
    safety: "Veiligheid",
    subscriptions: "Abonnementen",
    settings: "Instellingen",
  };
  if (section) ui.platformTab = routeTabs[section] || ui.platformTab;
  const tabs = ["Overzicht", "Bedrijven", "Gebruikers", "Werkbonnen", "Bestellingen", "Veiligheid", "Abonnementen", "Instellingen"];
  return `
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.platformTab === tab ? "active" : ""}" onclick="setPlatformTab('${tab}')">${tab}</button>`).join("")}</div>
    ${renderPlatformTab()}
  `;
}

function renderPlatformTab() {
  if (ui.platformTab === "Bedrijven") return renderPlatformCompanies();
  if (ui.platformTab === "Gebruikers") return renderPlatformUsers();
  if (ui.platformTab === "Werkbonnen") return renderPlatformWorkorders();
  if (ui.platformTab === "Bestellingen") return renderPlatformOrders();
  if (ui.platformTab === "Veiligheid") return renderPlatformSafety();
  if (ui.platformTab === "Abonnementen") return renderPlatformSubscriptions();
  if (ui.platformTab === "Instellingen") return renderPlatformSettings();
  return renderPlatformOverview();
}

function renderPlatformOverview() {
  const stats = platformStats();
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Totaal bedrijven</span><strong>${stats.companies.length}</strong></div>
      <div class="stat-card"><span>Actieve bedrijven</span><strong>${stats.companies.filter((company) => company.active).length}</strong></div>
      <div class="stat-card"><span>Totaal gebruikers</span><strong>${stats.users.length}</strong></div>
      <div class="stat-card"><span>Totaal monteurs</span><strong>${stats.users.filter((user) => user.role === ROLES.MECHANIC).length}</strong></div>
      <div class="stat-card"><span>Totaal werkbonnen</span><strong>${stats.projects.length}</strong></div>
      <div class="stat-card"><span>Afgeronde werkbonnen</span><strong>${stats.completedProjects.length}</strong></div>
      <div class="stat-card"><span>Open werkbonnen</span><strong>${stats.openProjects.length}</strong></div>
      <div class="stat-card"><span>Open bestelwaarde</span><strong>${euro(stats.orderValue)}</strong></div>
      <div class="stat-card"><span>Veiligheidsmeldingen</span><strong>${stats.safetyCount}</strong></div>
      <div class="stat-card"><span>Meeste activiteit</span><strong>${stats.activity.map(({ company }) => company.name).join(", ") || "-"}</strong></div>
    </section>
    ${renderPlatformCompaniesTable(false)}
  `;
}

function renderPlatformCompanies() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Bedrijf aanmaken</h2>
      <form class="form-grid" onsubmit="addCompany(event)">
        <label>Bedrijfsnaam <input name="name" required placeholder="Bijv. Installatiebedrijf Noord" /></label>
        <label>Logo/markering <input name="logo" placeholder="Bijv. IN" /></label>
        <label>Primaire kleur <input name="primary_color" type="color" value="#123c69" /></label>
        <label>Secundaire kleur <input name="secondary_color" type="color" value="#2dbe72" /></label>
        <label>Domein/subdomein <input name="slug" placeholder="installatiebedrijf-noord" /></label>
        <label>Abonnement
          <select name="subscription_status">
            <option value="trial">trial</option>
            <option value="active">active</option>
            <option value="paused">paused</option>
            <option value="cancelled">cancelled</option>
          </select>
        </label>
        <button class="btn success" type="submit">Bedrijf aanmaken</button>
      </form>
    </section>
    ${renderPlatformCompaniesTable(true)}
  `;
}

function renderPlatformCompaniesTable(editable) {
  const rows = platformCompanies();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Actief</th><th>Bedrijf</th><th>Logo</th><th>Primair</th><th>Secundair</th><th>Domein</th><th>Abonnement</th><th>Gebruikers</th><th>Werkbonnen</th><th>Laatste activiteit</th></tr></thead>
        <tbody>${rows.map((company) => `<tr>
          <td><input type="checkbox" ${company.active ? "checked" : ""} ${editable ? `onchange="updateCompany('${company.id}', 'active', this.checked)"` : "disabled"} /></td>
          <td>${editable ? `<input value="${escapeAttr(company.name)}" onchange="updateCompany('${company.id}', 'name', this.value)" />` : escapeHtml(company.name)}</td>
          <td>${editable ? `<input value="${escapeAttr(company.logo || "")}" onchange="updateCompany('${company.id}', 'logo', this.value)" />` : escapeHtml(company.logo || "-")}</td>
          <td>${editable ? `<input type="color" value="${escapeAttr(company.primary_color || "#123c69")}" onchange="updateCompany('${company.id}', 'primary_color', this.value)" />` : `<span class="color-dot" style="background:${escapeAttr(company.primary_color || "#123c69")}"></span>`}</td>
          <td>${editable ? `<input type="color" value="${escapeAttr(company.secondary_color || "#2dbe72")}" onchange="updateCompany('${company.id}', 'secondary_color', this.value)" />` : `<span class="color-dot" style="background:${escapeAttr(company.secondary_color || "#2dbe72")}"></span>`}</td>
          <td>${editable ? `<input value="${escapeAttr(company.slug)}" onchange="updateCompany('${company.id}', 'slug', this.value)" />` : escapeHtml(company.slug)}</td>
          <td>${editable ? `<select onchange="updateCompany('${company.id}', 'subscription_status', this.value)">${["trial", "active", "paused", "cancelled"].map((status) => `<option value="${status}" ${company.subscription_status === status ? "selected" : ""}>${status}</option>`).join("")}</select>` : escapeHtml(company.subscription_status || "-")}</td>
          <td>${companyUsers(company.id).length}</td>
          <td>${companyProjects(company.id).length}</td>
          <td>${companyLastActivity(company.id)}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function addCompany(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const name = String(form.get("name") || "").trim();
  const id = `company-${slugify(form.get("slug") || name)}`;
  if (state.companies.some((company) => company.id === id || company.slug === slugify(form.get("slug") || name))) return alert("Dit bedrijf of domein bestaat al.");
  const now = new Date().toISOString();
  const company = {
    id,
    company_id: id,
    companyId: id,
    name,
    slug: slugify(form.get("slug") || name),
    logo: String(form.get("logo") || "").trim(),
    primary_color: form.get("primary_color") || "#123c69",
    secondary_color: form.get("secondary_color") || "#2dbe72",
    active: true,
    subscription_status: form.get("subscription_status") || "trial",
    branding: {
      brandName: name,
      brandMark: String(form.get("logo") || name).trim().slice(0, 4),
      primaryColor: form.get("primary_color") || "#123c69",
      secondaryColor: form.get("secondary_color") || "#2dbe72",
    },
    settings: { locale: "nl-NL", currency: "EUR" },
    createdAt: now,
    created_at: now,
    updated_at: now,
  };
  state.companies.push(company);
  saveState();
  render();
}

function updateCompany(companyId, field, value) {
  const company = byId(state.companies, companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  company[field] = field === "active" ? Boolean(value) : value;
  if (field === "name") company.branding = { ...(company.branding || {}), brandName: value };
  if (field === "logo") company.branding = { ...(company.branding || {}), brandMark: value || String(company.name || "").slice(0, 4) };
  if (field === "primary_color") company.branding = { ...(company.branding || {}), primaryColor: value };
  if (field === "secondary_color") company.branding = { ...(company.branding || {}), secondaryColor: value };
  if (field === "slug") company.slug = slugify(value);
  company.updated_at = new Date().toISOString();
  saveState();
  render();
}

function renderPlatformUsers() {
  const users = (state.users || []).filter((user) => user.role !== ROLES.PLATFORM_ADMIN);
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Naam</th><th>E-mail</th><th>Rol</th><th>Bedrijf</th><th>Actief</th><th>Aangemaakt</th></tr></thead>
        <tbody>${users.map((user) => `<tr><td>${escapeHtml(user.name)}</td><td>${escapeHtml(user.email)}</td><td>${roleLabel(user.role)}</td><td>${escapeHtml(byId(state.companies, recordCompanyId(user))?.name || "-")}</td><td>${user.active ? "Ja" : "Nee"}</td><td>${safeDate(user.createdAt || user.created_at)}</td></tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderPlatformWorkorders() {
  const rows = state.projects || [];
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Bedrijf</th><th>Project/Werkbon</th><th>Klant</th><th>Monteur</th><th>Status</th><th>Foto's</th><th>Laatste activiteit</th></tr></thead>
        <tbody>${rows.map((project) => `<tr><td>${escapeHtml(byId(state.companies, recordCompanyId(project))?.name || "-")}</td><td>${escapeHtml(project.projectName)}</td><td>${escapeHtml(project.customer)}</td><td>${escapeHtml(mechanicNameById(project.assignedMechanicId || project.mechanicId))}</td><td>${escapeHtml(project.status)}</td><td>${(project.workOrder?.photos || []).length}</td><td>${safeDate(project.completedAt || project.updatedAt || project.createdAt)}</td></tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderPlatformOrders() {
  const rows = state.orderLines || [];
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Bedrijf</th><th>Artikel</th><th>Bestellen</th><th>Status</th><th>Waarde</th><th>Bijgewerkt</th></tr></thead>
        <tbody>${rows.map((line) => `<tr><td>${escapeHtml(byId(state.companies, recordCompanyId(line))?.name || "-")}</td><td>${escapeHtml(line.itemName || line.itemId || "-")}</td><td>${line.quantityToOrder ?? line.orderQuantity ?? 0}</td><td>${escapeHtml(line.status || "-")}</td><td>${euro(line.totalPrice || 0)}</td><td>${safeDate(line.updatedAt || line.createdAt)}</td></tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderPlatformSafety() {
  const rows = state.adminNotifications || [];
  if (!rows.length) return `<div class="panel empty">Geen veiligheidsmeldingen.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Bedrijf</th><th>Melding</th><th>Ernst</th><th>Aangemaakt</th></tr></thead>
        <tbody>${rows.map((note) => `<tr><td>${escapeHtml(byId(state.companies, recordCompanyId(note))?.name || "-")}</td><td>${escapeHtml(note.message || note.title || "-")}</td><td>${escapeHtml(note.severity || "-")}</td><td>${safeDate(note.createdAt || note.created_at)}</td></tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderPlatformSubscriptions() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Bedrijf</th><th>Status</th><th>Actief</th><th>Gebruikers</th><th>Werkbonnen</th><th>Opslag/foto's</th></tr></thead>
        <tbody>${platformCompanies().map((company) => `<tr><td>${escapeHtml(company.name)}</td><td>${escapeHtml(company.subscription_status || "-")}</td><td>${company.active ? "Ja" : "Nee"}</td><td>${companyUsers(company.id).length}</td><td>${companyProjects(company.id).length}</td><td>${companyPhotoCount(company.id)} foto's</td></tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function renderPlatformSettings() {
  return `
    <section class="panel">
      <h2>Platform instellingen</h2>
      <div class="meta-grid">
        <div class="meta"><span>Loginportaal</span><strong>WerkbonSysteem.nl</strong></div>
        <div class="meta"><span>Auth voorbereiding</span><strong>Supabase Auth</strong></div>
        <div class="meta"><span>Tenant security</span><strong>company_id + RLS voorbereid</strong></div>
        <div class="meta"><span>Storage tracking</span><strong>foto-aantallen per bedrijf</strong></div>
      </div>
    </section>`;
}

function renderCompanySettings() {
  const company = currentCompany();
  if (!company) return `<div class="panel empty">Geen bedrijfsinstellingen beschikbaar.</div>`;
  const settings = companySettings();
  return `
    <section class="panel">
      <h2>Instellingen</h2>
      <div class="meta-grid">
        <div class="meta"><span>Bedrijf</span><strong>${escapeHtml(company.name)}</strong></div>
        <div class="meta"><span>Domein/subdomein</span><strong>${escapeHtml(company.slug)}</strong></div>
        <div class="meta"><span>Primaire kleur</span><strong>${escapeHtml(company.primary_color || company.branding?.primaryColor || "-")}</strong></div>
        <div class="meta"><span>Secundaire kleur</span><strong>${escapeHtml(company.secondary_color || company.branding?.secondaryColor || "-")}</strong></div>
        <div class="meta"><span>Abonnement</span><strong>${escapeHtml(company.subscription_status || "-")}</strong></div>
        <div class="meta"><span>Tenant ID</span><strong>${escapeHtml(company.id)}</strong></div>
      </div>
    </section>
    <section class="panel" style="margin-top:14px">
      <h2>Offerte, winst en planning</h2>
      <div class="form-grid">
        <label>Standaard materiaalmarge % <input type="number" step="0.01" value="${settings.default_material_margin_percent}" onchange="updateCompanySetting('default_material_margin_percent', this.value)" /></label>
        <label>Standaard btw % <input type="number" step="0.01" value="${settings.default_vat_percent}" onchange="updateCompanySetting('default_vat_percent', this.value)" /></label>
        <label>Voorrijkosten <input type="number" step="0.01" value="${settings.default_callout_fee}" onchange="updateCompanySetting('default_callout_fee', this.value)" /></label>
        <label>Geldigheid offerte dagen <input type="number" min="1" value="${settings.quote_valid_days}" onchange="updateCompanySetting('quote_valid_days', this.value)" /></label>
        <label>Monteur mag planning wijzigen
          <select onchange="updateCompanySetting('mechanics_can_edit_planning', this.value === 'true')">
            <option value="false" ${!settings.mechanics_can_edit_planning ? "selected" : ""}>Nee</option>
            <option value="true" ${settings.mechanics_can_edit_planning ? "selected" : ""}>Ja</option>
          </select>
        </label>
        <label>Monteur mag afspraken maken
          <select onchange="updateCompanySetting('mechanics_can_create_events', this.value === 'true')">
            <option value="false" ${!settings.mechanics_can_create_events ? "selected" : ""}>Nee</option>
            <option value="true" ${settings.mechanics_can_create_events ? "selected" : ""}>Ja</option>
          </select>
        </label>
      </div>
    </section>
    ${renderPaymentQuoteSettings()}
    ${renderNotificationSettings()}
    ${renderHourlyRatesSettings()}`;
}

function updateCompanySetting(field, value) {
  const numeric = ["default_material_margin_percent", "default_vat_percent", "default_callout_fee", "quote_valid_days", "standaard_btw_percentage", "standaard_voorrijkosten", "standaard_uurtarief"];
  state.settings[field] = numeric.includes(field) ? Number(value) || 0 : value;
  saveState();
  render();
}

function companyScoped(collection = []) {
  return collection.filter((item) => isSameCompany(item));
}

function companySettings() {
  state.settings = state.settings || {};
  state.settings.default_material_margin_percent = Number(state.settings.default_material_margin_percent ?? 35);
  state.settings.default_vat_percent = Number(state.settings.default_vat_percent ?? 21);
  state.settings.default_callout_fee = Number(state.settings.default_callout_fee ?? 45);
  state.settings.mechanics_can_edit_planning = Boolean(state.settings.mechanics_can_edit_planning);
  state.settings.mechanics_can_create_events = Boolean(state.settings.mechanics_can_create_events);
  state.settings.monteurs_mogen_offerte_maken = Boolean(state.settings.monteurs_mogen_offerte_maken);
  state.settings.monteurs_mogen_afrekenen = Boolean(state.settings.monteurs_mogen_afrekenen);
  state.settings.monteurs_mogen_verkoopprijzen_zien = Boolean(state.settings.monteurs_mogen_verkoopprijzen_zien);
  state.settings.standaard_btw_percentage = Number(state.settings.standaard_btw_percentage ?? state.settings.default_vat_percent ?? 21);
  state.settings.standaard_voorrijkosten = Number(state.settings.standaard_voorrijkosten ?? state.settings.default_callout_fee ?? 45);
  state.settings.standaard_uurtarief = Number(state.settings.standaard_uurtarief ?? 85);
  state.settings.betaling_ter_plaatse_actief = Boolean(state.settings.betaling_ter_plaatse_actief);
  state.settings.notifications_enabled = state.settings.notifications_enabled !== false;
  state.settings.planning_notifications_enabled = state.settings.planning_notifications_enabled !== false;
  state.settings.workorder_notifications_enabled = state.settings.workorder_notifications_enabled !== false;
  state.settings.emergency_notifications_enabled = state.settings.emergency_notifications_enabled !== false;
  state.settings.push_notifications_enabled = Boolean(state.settings.push_notifications_enabled);
  state.settings.quote_valid_days = Number(state.settings.quote_valid_days ?? 30);
  state.settings.default_hourly_rate_id = state.settings.default_hourly_rate_id || "rate-service-monteur";
  return state.settings;
}

function marginPercent(revenue, cost) {
  if (!revenue) return 0;
  return Math.round(((revenue - cost) / revenue) * 10000) / 100;
}

function sellPriceForArticle(article) {
  const margin = companySettings().default_material_margin_percent / 100;
  return Number(article.sellPrice ?? article.sell_price ?? article.salesPrice ?? ((article.purchasePrice || 0) * (1 + margin))).toFixed(2) * 1;
}

function quoteNumber() {
  const year = new Date().getFullYear();
  const count = companyScoped(state.quotes || []).filter((quote) => String(quote.quote_number || "").startsWith(`OFF-${year}-`)).length + 1;
  return `OFF-${year}-${String(count).padStart(4, "0")}`;
}

function contractNumber() {
  const year = new Date().getFullYear();
  const count = companyScoped(state.maintenanceContracts || []).length + 1;
  return `CON-${year}-${String(count).padStart(4, "0")}`;
}

function workorderNumber(project) {
  return project.workorder_number || project.workOrder?.workorder_number || `WB-${String(project.id).slice(-6).toUpperCase()}`;
}

function defaultHourlyRate() {
  const rates = companyScoped(state.hourlyRates || []).filter((rate) => rate.active !== false);
  return rates.find((rate) => rate.id === companySettings().default_hourly_rate_id) || rates[0] || {
    id: "rate-fallback",
    name: "Service monteur",
    internal_cost_rate: 35,
    sell_rate: 85,
    vat_percent: companySettings().default_vat_percent,
    active: true,
  };
}

function buildFinancialsForProject(project) {
  const workOrder = ensureWorkOrder(project);
  const materialLines = enrichedUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && usage.article)
    .map((usage) => {
      const cost = usage.purchasePriceAtTime ?? usage.article.purchasePrice ?? 0;
      const sell = sellPriceForArticle(usage.article);
      const quantity = usage.usedQuantity || 0;
      return {
        type: "material",
        description: usage.article.description,
        articleNumber: usage.article.supplierArticleNumber || "",
        quantity,
        unit: "st",
        cost_price: cost,
        sell_price: sell,
        vat_percent: companySettings().default_vat_percent,
        total_cost: quantity * cost,
        total_sell: quantity * sell,
      };
    });
  const rate = defaultHourlyRate();
  const hours = Number(workOrder.hours?.totalHours || 0);
  const laborLines = hours > 0 ? [{
    type: "labor",
    description: rate.name,
    quantity: hours,
    unit: "uur",
    cost_price: Number(rate.internal_cost_rate || 0),
    sell_price: Number(rate.sell_rate || 0),
    vat_percent: Number(rate.vat_percent ?? companySettings().default_vat_percent),
    total_cost: hours * Number(rate.internal_cost_rate || 0),
    total_sell: hours * Number(rate.sell_rate || 0),
  }] : [];
  const otherLines = [{
    type: "other",
    description: "Voorrijkosten",
    quantity: 1,
    unit: "post",
    cost_price: 0,
    sell_price: Number(companySettings().default_callout_fee || 0),
    vat_percent: companySettings().default_vat_percent,
    total_cost: 0,
    total_sell: Number(companySettings().default_callout_fee || 0),
  }];
  const lines = [...materialLines, ...laborLines, ...otherLines].map((line) => ({
    ...line,
    gross_profit: line.total_sell - line.total_cost,
    margin_percent: marginPercent(line.total_sell, line.total_cost),
  }));
  const subtotal = lines.reduce((sum, line) => sum + line.total_sell, 0);
  const totalCost = lines.reduce((sum, line) => sum + line.total_cost, 0);
  const vatAmount = lines.reduce((sum, line) => sum + line.total_sell * ((line.vat_percent || 0) / 100), 0);
  return {
    lines,
    subtotal_ex_vat: subtotal,
    vat_amount: vatAmount,
    total_inc_vat: subtotal + vatAmount,
    total_cost: totalCost,
    gross_profit: subtotal - totalCost,
    margin_percent: marginPercent(subtotal, totalCost),
    material_cost: materialLines.reduce((sum, line) => sum + line.total_cost, 0),
    labor_cost: laborLines.reduce((sum, line) => sum + line.total_cost, 0),
    other_cost: otherLines.reduce((sum, line) => sum + line.total_cost, 0),
  };
}

function ensureQuoteForProject(project) {
  state.quotes = state.quotes || [];
  state.quoteLines = state.quoteLines || [];
  const existing = state.quotes.find((quote) => quote.project_id === project.id && recordCompanyId(quote) === recordCompanyId(project));
  if (existing) return existing;
  const workOrder = ensureWorkOrder(project);
  const financials = buildFinancialsForProject(project);
  const now = new Date().toISOString();
  const validUntil = new Date(Date.now() + companySettings().quote_valid_days * 86400000).toISOString().slice(0, 10);
  const quote = {
    id: uid("quote"),
    company_id: recordCompanyId(project),
    companyId: recordCompanyId(project),
    quote_number: quoteNumber(),
    project_id: project.id,
    workorder_id: workOrder.id || project.id,
    customer_id: project.customerId || project.customer_id || project.customer || "",
    mechanic_id: project.assignedMechanicId || project.mechanicId || "",
    status: "concept",
    subtotal_ex_vat: financials.subtotal_ex_vat,
    vat_amount: financials.vat_amount,
    total_inc_vat: financials.total_inc_vat,
    total_cost: financials.total_cost,
    gross_profit: financials.gross_profit,
    margin_percent: financials.margin_percent,
    intro_text: "Naar aanleiding van de uitgevoerde werkzaamheden ontvangt u hierbij ons voorstel.",
    terms_text: "Prijzen zijn exclusief meerwerk tenzij anders vermeld.",
    valid_until: validUntil,
    created_by: "system",
    created_at: now,
    updated_at: now,
  };
  state.quotes.push(quote);
  financials.lines.forEach((line) => state.quoteLines.push({ id: uid("ql"), quote_id: quote.id, ...line }));
  return quote;
}

function ensureProfitSnapshot(project) {
  state.profitSnapshots = state.profitSnapshots || [];
  const existing = state.profitSnapshots.find((snapshot) => snapshot.project_id === project.id && recordCompanyId(snapshot) === recordCompanyId(project));
  const financials = buildFinancialsForProject(project);
  const snapshot = {
    id: existing?.id || uid("profit"),
    company_id: recordCompanyId(project),
    companyId: recordCompanyId(project),
    project_id: project.id,
    workorder_id: project.workOrder?.id || project.id,
    revenue: financials.subtotal_ex_vat,
    material_cost: financials.material_cost,
    labor_cost: financials.labor_cost,
    other_cost: financials.other_cost,
    callout_fee_revenue: financials.callout_fee_revenue,
    gross_profit: financials.gross_profit,
    margin_percent: financials.margin_percent,
    pricing_category_id: financials.pricing_category_id,
    pricing_category_name: financials.pricing_category_name,
    created_at: existing?.created_at || new Date().toISOString(),
  };
  if (existing) Object.assign(existing, snapshot);
  else state.profitSnapshots.push(snapshot);
  return snapshot;
}

function updatePlanningOnProjectComplete(project) {
  const event = (state.planningEvents || []).find((entry) => entry.project_id === project.id && recordCompanyId(entry) === recordCompanyId(project));
  if (event) {
    event.status = "afgerond";
    event.updated_at = new Date().toISOString();
  }
}

function mechanicPlanningEvents() {
  const user = currentUser();
  if (!user) return [];
  return companyScoped(state.planningEvents || [])
    .filter((event) => isCompanyAdmin() || event.mechanic_id === user.id)
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function planningStatuses() {
  return ["ingepland", "onderweg", "bezig", "afgerond", "geannuleerd", "verplaatst"];
}

function planningPriorities() {
  return ["normaal", "hoog", "spoed"];
}

function statusClass(status) {
  return {
    ingepland: "plan-blue",
    onderweg: "plan-purple",
    bezig: "plan-orange",
    afgerond: "plan-green",
    geannuleerd: "plan-red",
    verplaatst: "plan-gray",
  }[status] || "plan-blue";
}

function weekDays(base = new Date()) {
  const date = new Date(base);
  const day = date.getDay() || 7;
  date.setDate(date.getDate() - day + 1);
  date.setHours(0, 0, 0, 0);
  return Array.from({ length: 7 }, (_, index) => {
    const next = new Date(date);
    next.setDate(date.getDate() + index);
    return next;
  });
}

function dateKey(value) {
  return value ? String(value).slice(0, 10) : "";
}

function renderMechanicPlanningList(rows) {
  const today = dateKey(new Date().toISOString());
  const allowedStatus = ["onderweg", "bezig", "afgerond"];
  return `<div class="mobile-planning-list">${rows.map((event) => `
    <article class="planning-card ${statusClass(event.status)}">
      <div class="article-head">
        <div>
          <h3>${dateKey(event.start_datetime) === today ? "Vandaag" : safeDate(event.start_datetime)} ${String(event.start_datetime || "").slice(11, 16)}-${String(event.end_datetime || "").slice(11, 16)}</h3>
          <p>${escapeHtml(event.customer_name || "-")} - ${escapeHtml(event.address || "-")} ${escapeHtml(event.postal_code || "")} ${escapeHtml(event.city || "")}</p>
        </div>
        <span class="badge">${escapeHtml(event.priority || "normaal")}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Werkbon</span><strong>${escapeHtml(event.title || "-")}</strong></div>
        <div class="meta"><span>Status</span><strong>${escapeHtml(event.status || "-")}</strong></div>
        <div class="meta"><span>Telefoon</span><strong>${escapeHtml(event.phone || "-")}</strong></div>
      </div>
      <label>Notitie <input value="${escapeAttr(event.notes || "")}" onchange="updatePlanningEvent('${event.id}', 'notes', this.value)" /></label>
      <div class="button-row">
        ${allowedStatus.map((status) => `<button class="btn secondary" type="button" onclick="updatePlanningEvent('${event.id}', 'status', '${status}')">${status}</button>`).join("")}
        ${event.project_id ? `<a class="btn success" href="#/project/${event.project_id}">Open werkbon</a>` : ""}
        <a class="btn secondary" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(`${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`)}">Route</a>
      </div>
      ${companySettings().mechanics_can_edit_planning ? `<div class="form-grid"><label>Start <input type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" onchange="updatePlanningEventWithReason('${event.id}', 'start_datetime', this.value)" /></label><label>Einde <input type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" onchange="updatePlanningEventWithReason('${event.id}', 'end_datetime', this.value)" /></label></div>` : ""}
    </article>`).join("")}</div>`;
}

function planningRowsForAdmin() {
  return companyScoped(state.planningEvents || [])
    .filter((event) => ui.planningMechanic === "ALL" || event.mechanic_id === ui.planningMechanic)
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function renderPlanning() {
  const rows = isMechanic() ? mechanicPlanningEvents() : planningRowsForAdmin();
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const projects = visibleProjects().filter((project) => !isProjectCompleted(project));
  const customers = activeCustomers();
  if (isMechanic()) return `<section class="panel" style="margin-bottom:14px"><h2>Mijn planning</h2><p>Alleen jouw eigen afspraken en adressen.</p></section>${renderMechanicPlanningList(rows)}`;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Planning</h2>
      <div class="button-row">${["dag", "week", "maand", "per monteur"].map((view) => `<button class="btn ${ui.planningView === view ? "" : "secondary"}" onclick="ui.planningView='${view}'; render()">${view}</button>`).join("")}</div>
      <label>Monteurfilter
        <select onchange="ui.planningMechanic=this.value; render()">
          <option value="ALL">Alle monteurs</option>
          ${mechanics.map((user) => `<option value="${user.id}" ${ui.planningMechanic === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}
        </select>
      </label>
      <form class="form-grid" onsubmit="addPlanningEvent(event)">
        <label>Werkbon/project <select name="project_id">${projects.map((project) => `<option value="${project.id}">${escapeHtml(project.projectName)}</option>`).join("")}</select></label>
        <label>Klant <select name="customer_id" onchange="fillPlanningCustomer(this.value)"><option value="">Geen klant</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}</select></label>
        <label>Monteur <select name="mechanic_id">${mechanics.map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}</select></label>
        <label>Klantnaam <input name="customer_name" id="planning-customer-name" /></label>
        <label>Adres <input name="address" id="planning-address" /></label>
        <label>Postcode <input name="postal_code" id="planning-postal-code" /></label>
        <label>Plaats <input name="city" id="planning-city" /></label>
        <label>Telefoon <input name="phone" id="planning-phone" /></label>
        <label>Start <input name="start_datetime" type="datetime-local" required /></label>
        <label>Einde <input name="end_datetime" type="datetime-local" required /></label>
        <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option>${priority}</option>`).join("")}</select></label>
        <label>Notitie <input name="notes" /></label>
        <button class="btn success" type="submit">Nieuwe afspraak</button>
      </form>
    </section>
    ${renderWeekAgenda(rows)}
    ${ui.editingPlanningEventId ? renderPlanningEditModal(ui.editingPlanningEventId) : ""}
  `;
}

function renderWeekAgenda(rows) {
  const days = weekDays();
  return `<section class="week-agenda">${days.map((day) => {
    const key = dateKey(day.toISOString());
    const dayRows = rows.filter((event) => dateKey(event.start_datetime) === key);
    return `<article class="agenda-day"><h3>${day.toLocaleDateString("nl-NL", { weekday: "long", day: "2-digit", month: "2-digit" })}</h3>${dayRows.length ? dayRows.map(renderAdminAgendaItem).join("") : `<p class="muted">Geen afspraken</p>`}</article>`;
  }).join("")}</section>`;
}

function renderAdminAgendaItem(event) {
  return `<button class="agenda-item ${statusClass(event.status)}" type="button" onclick="openPlanningEdit('${event.id}')"><strong>${String(event.start_datetime || "").slice(11, 16)}-${String(event.end_datetime || "").slice(11, 16)}</strong><span>${escapeHtml(event.customer_name || "-")}</span><small>${escapeHtml(event.address || "-")} - ${escapeHtml(mechanicNameById(event.mechanic_id))}</small><em>${escapeHtml(event.status || "ingepland")} / ${escapeHtml(event.priority || "normaal")}</em></button>`;
}

function addPlanningEvent(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const project = byId(state.projects, form.get("project_id"));
  if (!project) return alert("Kies een werkbon/project.");
  const mechanicId = form.get("mechanic_id");
  const customer = byId(state.customers || [], form.get("customer_id"));
  const now = new Date().toISOString();
  const row = {
    id: uid("plan"),
    company_id: recordCompanyId(project),
    companyId: recordCompanyId(project),
    customer_id: customer?.id || "",
    workorder_id: project.workOrder?.id || project.id,
    project_id: project.id,
    mechanic_id: mechanicId,
    title: workorderNumber(project),
    customer_name: form.get("customer_name") || customer?.customer_name || project.customer,
    address: form.get("address") || customer?.address || project.address,
    postal_code: form.get("postal_code") || customer?.postal_code || "",
    city: form.get("city") || customer?.city || "",
    phone: form.get("phone") || customer?.phone || "",
    start_datetime: form.get("start_datetime"),
    end_datetime: form.get("end_datetime"),
    status: "ingepland",
    priority: form.get("priority"),
    notes: form.get("notes"),
    created_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents.push(row);
  if (customer) {
    project.customer_id = customer.id;
    project.customerId = customer.id;
    project.customer = customer.customer_name;
    project.customer_name = customer.customer_name;
    project.address = `${customer.address || ""}${customer.postal_code || customer.city ? `, ${customer.postal_code || ""} ${customer.city || ""}` : ""}`.trim();
  }
  project.assignedMechanicId = mechanicId;
  project.mechanicId = mechanicId;
  project.status = "toegewezen";
  saveState();
  render();
}

function updatePlanningEvent(eventId, field, value) {
  const row = byId(state.planningEvents || [], eventId);
  if (!row || !isSameCompany(row)) return;
  if (isMechanic() && row.mechanic_id !== currentUser()?.id) return;
  if (isMechanic() && !["status", "notes", "start_datetime", "end_datetime"].includes(field)) return;
  if (isMechanic() && field !== "status" && !companySettings().mechanics_can_edit_planning) return alert("Planning wijzigen is uitgeschakeld door Admin.");
  row[field] = value;
  row.updated_at = new Date().toISOString();
  if (field === "status" && value === "afgerond" && row.project_id) {
    const project = byId(state.projects, row.project_id);
    if (project && !isProjectCompleted(project)) project.status = "afgerond";
  }
  saveState();
  render();
}

function updatePlanningEventWithReason(eventId, field, value) {
  const reason = prompt("Reden wijziging planning:");
  if (!reason || !reason.trim()) return alert("Reden wijziging is verplicht.");
  const row = byId(state.planningEvents || [], eventId);
  if (row) row.change_reason = reason.trim();
  updatePlanningEvent(eventId, field, value);
}

function openPlanningEdit(eventId) {
  ui.editingPlanningEventId = eventId;
  render();
}

function closePlanningEdit() {
  ui.editingPlanningEventId = null;
  render();
}

function renderPlanningEditModal(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return "";
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const customers = activeCustomers();
  return `<section class="modal-backdrop"><form class="panel confirm-modal" onsubmit="savePlanningEdit(event, '${event.id}')"><h2>Afspraak bewerken</h2><div class="form-grid"><label>Klant <select name="customer_id"><option value="">Geen klant</option>${customers.map((customer) => `<option value="${customer.id}" ${event.customer_id === customer.id ? "selected" : ""}>${escapeHtml(customer.customer_name)}</option>`).join("")}</select></label><label>Monteur <select name="mechanic_id">${mechanics.map((user) => `<option value="${user.id}" ${event.mechanic_id === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label><label>Klantnaam <input name="customer_name" value="${escapeAttr(event.customer_name || "")}" /></label><label>Adres <input name="address" value="${escapeAttr(event.address || "")}" /></label><label>Postcode <input name="postal_code" value="${escapeAttr(event.postal_code || "")}" /></label><label>Plaats <input name="city" value="${escapeAttr(event.city || "")}" /></label><label>Telefoon <input name="phone" value="${escapeAttr(event.phone || "")}" /></label><label>Start <input name="start_datetime" type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" /></label><label>Einde <input name="end_datetime" type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" /></label><label>Status <select name="status">${planningStatuses().map((status) => `<option value="${status}" ${event.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label><label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option value="${priority}" ${event.priority === priority ? "selected" : ""}>${priority}</option>`).join("")}</select></label><label>Notitie <input name="notes" value="${escapeAttr(event.notes || "")}" /></label></div><div class="button-row"><button class="btn secondary" type="button" onclick="closePlanningEdit()">Annuleren</button><button class="btn danger" type="button" onclick="deletePlanningEvent('${event.id}')">Verwijderen</button><button class="btn success" type="submit">Opslaan</button></div></form></section>`;
}

function savePlanningEdit(submitEvent, eventId) {
  submitEvent.preventDefault();
  const row = byId(state.planningEvents || [], eventId);
  if (!row || !isSameCompany(row)) return;
  const form = new FormData(submitEvent.target);
  ["customer_id", "mechanic_id", "customer_name", "address", "postal_code", "city", "phone", "start_datetime", "end_datetime", "status", "priority", "notes"].forEach((field) => {
    row[field] = form.get(field);
  });
  row.updated_at = new Date().toISOString();
  ui.editingPlanningEventId = null;
  saveState();
  render();
}

function deletePlanningEvent(eventId) {
  const row = byId(state.planningEvents || [], eventId);
  if (!row || !isSameCompany(row)) return;
  if (!confirm("Afspraak verwijderen?")) return;
  state.planningEvents = state.planningEvents.filter((event) => event.id !== eventId);
  ui.editingPlanningEventId = null;
  saveState();
  render();
}

function activeCustomers() {
  return companyScoped(state.customers || []).filter((customer) => customer.active !== false);
}

function fillPlanningCustomer(customerId) {
  const customer = byId(state.customers || [], customerId);
  if (!customer) return;
  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };
  set("planning-customer-name", customer.customer_name);
  set("planning-address", customer.address);
  set("planning-postal-code", customer.postal_code);
  set("planning-city", customer.city);
  set("planning-phone", customer.phone);
}

function fillProjectCustomer(customerId) {
  const customer = byId(state.customers || [], customerId);
  if (!customer) return;
  const form = document.querySelector("form[onsubmit='createProject(event)']");
  if (!form) return;
  const set = (name, value) => {
    const el = form.querySelector(`[name="${name}"]`);
    if (el) el.value = value || "";
  };
  set("customer", customer.customer_name);
  set("address", customer.address);
  set("postal_code", customer.postal_code);
  set("city", customer.city);
  set("phone", customer.phone);
}

function renderCustomers() {
  const search = String(ui.customerSearch || "").toLowerCase();
  const rows = companyScoped(state.customers || [])
    .filter((customer) => !search || [customer.customer_name, customer.contact_person, customer.address, customer.postal_code, customer.city, customer.phone, customer.email].join(" ").toLowerCase().includes(search))
    .sort((a, b) => String(a.customer_name || "").localeCompare(String(b.customer_name || "")));
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="article-head">
        <div><h2>Klanten</h2><p>Beheer klanten binnen ${escapeHtml(currentCompany()?.name || "eigen bedrijf")}.</p></div>
        <button class="btn success" type="button" onclick="openCustomerEdit('new')">Klant toevoegen</button>
      </div>
      <label>Zoeken <input value="${escapeAttr(ui.customerSearch || "")}" oninput="ui.customerSearch=this.value; render()" placeholder="Zoek klant, plaats, telefoon of e-mail" /></label>
    </section>
    <div class="table-wrap"><table><thead><tr><th>Actief</th><th>Klant</th><th>Contactpersoon</th><th>Adres</th><th>Postcode</th><th>Plaats</th><th>Telefoon</th><th>E-mail</th><th>Actie</th></tr></thead><tbody>${rows.map((customer) => `<tr><td><input type="checkbox" ${customer.active !== false ? "checked" : ""} onchange="updateCustomer('${customer.id}', 'active', this.checked)" /></td><td>${escapeHtml(customer.customer_name)}</td><td>${escapeHtml(customer.contact_person || "-")}</td><td>${escapeHtml(customer.address || "-")}</td><td>${escapeHtml(customer.postal_code || "-")}</td><td>${escapeHtml(customer.city || "-")}</td><td>${escapeHtml(customer.phone || "-")}</td><td>${escapeHtml(customer.email || "-")}</td><td><div class="button-row" style="margin-top:0"><button class="btn secondary" type="button" onclick="openCustomerEdit('${customer.id}')">Bewerken</button><button class="btn warn" type="button" onclick="updateCustomer('${customer.id}', 'active', ${customer.active === false ? "true" : "false"})">${customer.active === false ? "Activeren" : "Deactiveren"}</button><button class="btn danger" type="button" onclick="deleteCustomer('${customer.id}')">Verwijderen</button></div></td></tr>`).join("")}</tbody></table></div>
    ${ui.editingCustomerId ? renderCustomerModal(ui.editingCustomerId) : ""}
  `;
}

function openCustomerEdit(customerId) {
  ui.editingCustomerId = customerId;
  render();
}

function closeCustomerEdit() {
  ui.editingCustomerId = null;
  render();
}

function renderCustomerModal(customerId) {
  const isNew = customerId === "new";
  const customer = isNew ? {} : byId(state.customers || [], customerId);
  if (!isNew && (!customer || !isSameCompany(customer))) return "";
  return `<section class="modal-backdrop"><form class="panel confirm-modal" onsubmit="saveCustomer(event, '${customerId}')"><h2>${isNew ? "Klant toevoegen" : "Klant bewerken"}</h2><div class="form-grid"><label>Klantnaam <input name="customer_name" required value="${escapeAttr(customer.customer_name || "")}" /></label><label>Contactpersoon <input name="contact_person" value="${escapeAttr(customer.contact_person || "")}" /></label><label>Adres <input name="address" required value="${escapeAttr(customer.address || "")}" /></label><label>Postcode <input name="postal_code" value="${escapeAttr(customer.postal_code || "")}" /></label><label>Plaats <input name="city" value="${escapeAttr(customer.city || "")}" /></label><label>Telefoon <input name="phone" value="${escapeAttr(customer.phone || "")}" /></label><label>E-mail <input name="email" type="email" value="${escapeAttr(customer.email || "")}" /></label><label>Notities <input name="notes" value="${escapeAttr(customer.notes || "")}" /></label></div><div class="button-row"><button class="btn secondary" type="button" onclick="closeCustomerEdit()">Annuleren</button><button class="btn success" type="submit">Opslaan</button></div></form></section>`;
}

function saveCustomer(event, customerId) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const data = {
    customer_name: String(form.get("customer_name") || "").trim(),
    contact_person: String(form.get("contact_person") || "").trim(),
    address: String(form.get("address") || "").trim(),
    postal_code: String(form.get("postal_code") || "").trim(),
    city: String(form.get("city") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    email: String(form.get("email") || "").trim(),
    notes: String(form.get("notes") || "").trim(),
    updated_at: now,
  };
  if (!data.customer_name || !data.address) return alert("Klantnaam en adres zijn verplicht.");
  if (customerId === "new") {
    state.customers.push({ id: uid("customer"), company_id: currentCompanyId(), companyId: currentCompanyId(), ...data, source: "admin", created_by: currentUser()?.id || "", active: true, created_at: now });
  } else {
    const customer = byId(state.customers || [], customerId);
    if (!customer || !isSameCompany(customer)) return;
    Object.assign(customer, data);
  }
  ui.editingCustomerId = null;
  saveState();
  render();
}

function updateCustomer(customerId, field, value) {
  const customer = byId(state.customers || [], customerId);
  if (!customer || !isSameCompany(customer)) return;
  customer[field] = field === "active" ? Boolean(value) : value;
  customer.updated_at = new Date().toISOString();
  saveState();
  render();
}

function deleteCustomer(customerId) {
  const customer = byId(state.customers || [], customerId);
  if (!customer || !isSameCompany(customer)) return;
  if (!confirm("Klant verwijderen of deactiveren?")) return;
  const referenced = state.projects.some((project) => project.customer_id === customerId || project.customerId === customerId) || (state.planningEvents || []).some((event) => event.customer_id === customerId);
  if (referenced) {
    customer.active = false;
    customer.deleted = true;
    customer.updated_at = new Date().toISOString();
  } else {
    state.customers = state.customers.filter((item) => item.id !== customerId);
  }
  saveState();
  render();
}

function renderQuotes() {
  const rows = companyScoped(state.quotes || []);
  return `<section class="stats" style="margin-bottom:14px"><div class="stat-card"><span>Open offertes</span><strong>${rows.filter((q) => ["concept", "gecontroleerd", "verzonden"].includes(q.status)).length}</strong></div><div class="stat-card"><span>Geaccepteerd</span><strong>${rows.filter((q) => q.status === "geaccepteerd").length}</strong></div><div class="stat-card"><span>Offertewaarde</span><strong>${euro(rows.reduce((s, q) => s + (q.subtotal_ex_vat || 0), 0))}</strong></div><div class="stat-card"><span>Brutowinst</span><strong>${euro(rows.reduce((s, q) => s + (q.gross_profit || 0), 0))}</strong></div></section>${renderQuotesTable(rows)}`;
}

function renderQuotesTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Offerte</th><th>Werkbon</th><th>Project</th><th>Klant</th><th>Adres</th><th>Datum</th><th>Status</th><th>Ex btw</th><th>Btw</th><th>Incl btw</th><th>Brutowinst</th><th>Marge</th><th>Acties</th></tr></thead><tbody>${rows.map((quote) => {
    const project = byId(state.projects, quote.project_id);
    return `<tr><td>${quote.quote_number}</td><td>${project ? workorderNumber(project) : quote.workorder_id}</td><td>${quote.project_id}</td><td>${escapeHtml(project?.customer || "-")}</td><td>${escapeHtml(project?.address || "-")}</td><td>${safeDate(quote.created_at)}</td><td><select onchange="updateQuoteStatus('${quote.id}', this.value)">${["concept", "gecontroleerd", "verzonden", "geaccepteerd", "afgewezen", "omgezet naar opdracht"].map((status) => `<option value="${status}" ${quote.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></td><td>${euro(quote.subtotal_ex_vat)}</td><td>${euro(quote.vat_amount)}</td><td>${euro(quote.total_inc_vat)}</td><td>${euro(quote.gross_profit)}</td><td>${quote.margin_percent || 0}%</td><td><button class="btn secondary" onclick="exportQuotePdf('${quote.id}')">PDF</button></td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function updateQuoteStatus(quoteId, status) {
  const quote = byId(state.quotes || [], quoteId);
  if (!quote || !isSameCompany(quote)) return;
  quote.status = status;
  quote.updated_at = new Date().toISOString();
  saveState();
  render();
}

function exportQuotePdf(quoteId) {
  const quote = byId(state.quotes || [], quoteId);
  const project = byId(state.projects, quote?.project_id);
  const lines = (state.quoteLines || []).filter((line) => line.quote_id === quoteId);
  if (!quote) return;
  document.getElementById("print-report").innerHTML = `<h1>Offerte ${quote.quote_number}</h1><p>${escapeHtml(project?.customer || "")}<br>${escapeHtml(project?.address || "")}</p><table><thead><tr><th>Omschrijving</th><th>Aantal</th><th>Verkoop</th><th>Totaal</th></tr></thead><tbody>${lines.map((line) => `<tr><td>${escapeHtml(line.description)}</td><td>${line.quantity} ${line.unit}</td><td>${euro(line.sell_price)}</td><td>${euro(line.total_sell)}</td></tr>`).join("")}</tbody></table><h2>Totaal incl btw: ${euro(quote.total_inc_vat)}</h2><p>${escapeHtml(quote.terms_text || "")}</p>`;
  window.print();
}

function renderProfitDashboard() {
  const rows = companyScoped(state.profitSnapshots || []);
  const revenue = rows.reduce((s, r) => s + (r.revenue || 0), 0);
  const material = rows.reduce((s, r) => s + (r.material_cost || 0), 0);
  const labor = rows.reduce((s, r) => s + (r.labor_cost || 0), 0);
  const gross = rows.reduce((s, r) => s + (r.gross_profit || 0), 0);
  const completed = visibleProjects().filter(isProjectCompleted);
  return `<section class="stats" style="margin-bottom:14px"><div class="stat-card"><span>Omzet deze maand</span><strong>${euro(revenue)}</strong></div><div class="stat-card"><span>Materiaalkosten</span><strong>${euro(material)}</strong></div><div class="stat-card"><span>Arbeidskosten</span><strong>${euro(labor)}</strong></div><div class="stat-card"><span>Brutowinst</span><strong>${euro(gross)}</strong></div><div class="stat-card"><span>Marge</span><strong>${marginPercent(revenue, revenue - gross)}%</strong></div><div class="stat-card"><span>Afgeronde werkbonnen</span><strong>${completed.length}</strong></div><div class="stat-card"><span>Gem. winst/werkbon</span><strong>${euro(completed.length ? gross / completed.length : 0)}</strong></div><div class="stat-card"><span>Open offertes</span><strong>${companyScoped(state.quotes || []).filter((q) => q.status !== "geaccepteerd" && q.status !== "afgewezen").length}</strong></div></section>${renderProfitProjectTable(rows)}`;
}

function renderProfitProjectTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Project-ID</th><th>Werkbon</th><th>Klant</th><th>Monteur</th><th>Datum</th><th>Omzet ex btw</th><th>Materiaalkosten</th><th>Arbeidskosten</th><th>Overig</th><th>Brutowinst</th><th>Marge</th></tr></thead><tbody>${rows.map((row) => {
    const project = byId(state.projects, row.project_id);
    return `<tr><td>${row.project_id}</td><td>${project ? workorderNumber(project) : row.workorder_id}</td><td>${escapeHtml(project?.customer || "-")}</td><td>${escapeHtml(mechanicNameById(project?.assignedMechanicId || project?.mechanicId))}</td><td>${safeDate(row.created_at)}</td><td>${euro(row.revenue)}</td><td>${euro(row.material_cost)}</td><td>${euro(row.labor_cost)}</td><td>${euro(row.other_cost)}</td><td>${euro(row.gross_profit)}</td><td>${row.margin_percent || 0}%</td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function intervalMonths(interval) {
  return { jaarlijks: 12, halfjaarlijks: 6, kwartaal: 3, maandelijks: 1, eenmalig: 0 }[interval] ?? 12;
}

function renderMaintenanceContracts() {
  const rows = companyScoped(state.maintenanceContracts || []);
  const active = rows.filter((row) => row.status === "actief");
  const monthlyValue = rows.reduce((sum, row) => {
    const months = intervalMonths(row.interval);
    if (!months) return sum + (Number(row.fixed_price || 0) / 12);
    return sum + Number(row.fixed_price || 0) / months;
  }, 0);
  return `<section class="stats" style="margin-bottom:14px"><div class="stat-card"><span>Actieve contracten</span><strong>${active.length}</strong></div><div class="stat-card"><span>Verlopen</span><strong>${rows.filter((r) => r.status === "verlopen").length}</strong></div><div class="stat-card"><span>Komende 30 dagen</span><strong>${rows.filter((r) => r.next_service_date && new Date(r.next_service_date) <= new Date(Date.now() + 30 * 86400000)).length}</strong></div><div class="stat-card"><span>Maandwaarde</span><strong>${euro(monthlyValue)}</strong></div><div class="stat-card"><span>Jaarwaarde</span><strong>${euro(monthlyValue * 12)}</strong></div></section>${renderContractForm()}${renderContractsTable(rows)}`;
}

function renderContractForm() {
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC);
  return `<section class="panel" style="margin-bottom:14px"><h2>Onderhoudscontract aanmaken</h2><form class="form-grid" onsubmit="addMaintenanceContract(event)"><label>Klantnaam <input name="customer_name" required /></label><label>Adres <input name="address" required /></label><label>Telefoon <input name="phone" /></label><label>E-mail <input name="email" type="email" /></label><label>Type installatie <input name="installation_type" /></label><label>Merk <input name="appliance_brand" /></label><label>Toestel type <input name="appliance_type" /></label><label>Serienummer <input name="serial_number" /></label><label>Contracttype <select name="contract_type"><option>CV onderhoud</option><option>CO-keur onderhoud</option><option>warmtepomp onderhoud</option><option>ventilatie onderhoud</option><option>vrij contract</option></select></label><label>Interval <select name="interval"><option>jaarlijks</option><option>halfjaarlijks</option><option>kwartaal</option><option>maandelijks</option><option>eenmalig</option></select></label><label>Startdatum <input name="start_date" type="date" required /></label><label>Einddatum <input name="end_date" type="date" /></label><label>Volgende onderhoudsdatum <input name="next_service_date" type="date" required /></label><label>Vaste prijs <input name="fixed_price" type="number" step="0.01" value="0" /></label><label>Monteur <select name="assigned_mechanic_id"><option value="">Niet gekoppeld</option>${mechanics.map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}</select></label><label>Opmerkingen <input name="notes" /></label><button class="btn success" type="submit">Contract aanmaken</button></form></section>`;
}

function addMaintenanceContract(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  state.maintenanceContracts.push({
    id: uid("contract"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    contract_number: contractNumber(),
    customer_name: form.get("customer_name"),
    address: form.get("address"),
    phone: form.get("phone"),
    email: form.get("email"),
    installation_type: form.get("installation_type"),
    appliance_brand: form.get("appliance_brand"),
    appliance_type: form.get("appliance_type"),
    serial_number: form.get("serial_number"),
    contract_type: form.get("contract_type"),
    interval: form.get("interval"),
    start_date: form.get("start_date"),
    end_date: form.get("end_date"),
    next_service_date: form.get("next_service_date"),
    fixed_price: Number(form.get("fixed_price")) || 0,
    status: "actief",
    assigned_mechanic_id: form.get("assigned_mechanic_id"),
    notes: form.get("notes"),
    created_at: now,
    updated_at: now,
  });
  saveState();
  render();
}

function renderContractsTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Contract</th><th>Klant</th><th>Adres</th><th>Type</th><th>Interval</th><th>Volgende datum</th><th>Status</th><th>Monteur</th><th>Vaste prijs</th><th>Laatste werkbon</th><th>Actie</th></tr></thead><tbody>${rows.map((row) => `<tr><td>${row.contract_number}</td><td>${escapeHtml(row.customer_name)}</td><td>${escapeHtml(row.address)}</td><td>${escapeHtml(row.contract_type)}</td><td>${escapeHtml(row.interval)}</td><td>${safeDate(row.next_service_date)}</td><td><select onchange="updateContract('${row.id}', 'status', this.value)">${["actief", "gepauzeerd", "verlopen", "opgezegd"].map((status) => `<option value="${status}" ${row.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></td><td>${escapeHtml(mechanicNameById(row.assigned_mechanic_id))}</td><td>${euro(row.fixed_price)}</td><td>${escapeHtml(row.last_workorder_id || "-")}</td><td><button class="btn secondary" onclick="generateContractWorkorder('${row.id}')">Genereer volgende werkbon</button></td></tr>`).join("")}</tbody></table></div>`;
}

function updateContract(contractId, field, value) {
  const contract = byId(state.maintenanceContracts || [], contractId);
  if (!contract || !isSameCompany(contract)) return;
  contract[field] = value;
  contract.updated_at = new Date().toISOString();
  saveState();
  render();
}

function generateContractWorkorder(contractId) {
  const contract = byId(state.maintenanceContracts || [], contractId);
  if (!contract || !isSameCompany(contract)) return;
  const project = {
    id: uid("project"),
    company_id: recordCompanyId(contract),
    companyId: recordCompanyId(contract),
    projectName: `${contract.contract_type} - ${contract.customer_name}`,
    project_name: `${contract.contract_type} - ${contract.customer_name}`,
    customer: contract.customer_name,
    customer_name: contract.customer_name,
    address: contract.address,
    technician: mechanicNameById(contract.assigned_mechanic_id),
    mechanicId: contract.assigned_mechanic_id || "",
    assignedMechanicId: contract.assigned_mechanic_id || "",
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: contract.next_service_date,
    selectedKitIds: ["M001", "M004"],
    selectedSourceIds: ["M001", "M004", GARAGE_BOX_SOURCE],
    sourceChoiceLabel: "Onderhoudscontract",
    status: contract.assigned_mechanic_id ? "toegewezen" : "aangemaakt",
    maintenance_contract_id: contract.id,
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
  };
  state.projects.push(project);
  contract.last_workorder_id = project.id;
  let planningEvent = null;
  if (contract.assigned_mechanic_id && contract.next_service_date) {
    planningEvent = {
      id: uid("plan"),
      company_id: recordCompanyId(contract),
      companyId: recordCompanyId(contract),
      workorder_id: project.id,
      project_id: project.id,
      mechanic_id: contract.assigned_mechanic_id,
      title: workorderNumber(project),
      customer_name: contract.customer_name,
      address: contract.address,
      start_datetime: `${contract.next_service_date}T08:00`,
      end_datetime: `${contract.next_service_date}T10:00`,
      status: "ingepland",
      priority: "normaal",
      notes: "Gegenereerd uit onderhoudscontract",
      created_by: currentUser()?.id || "",
      updated_at: new Date().toISOString(),
    };
    state.planningEvents.push(planningEvent);
  }
  if (contract.assigned_mechanic_id) {
    notifyPlanningChange(
      planningEvent || { ...project, mechanic_id: contract.assigned_mechanic_id, project_id: project.id, workorder_id: project.id, id: "", priority: "normaal" },
      "maintenance_scheduled",
      "Onderhoud ingepland",
      "Er is een onderhoudswerkbon aan u toegewezen.",
      "normaal",
    );
  }
  saveState();
  location.hash = `#/project/${project.id}`;
  render();
}

function renderHourlyRatesSettings() {
  const rows = companyScoped(state.hourlyRates || []);
  return `<section class="panel" style="margin-top:14px"><h2>Tarieven</h2><form class="form-grid" onsubmit="addHourlyRate(event)"><label>Naam <input name="name" required value="Service monteur" /></label><label>Interne kostprijs <input name="internal_cost_rate" type="number" step="0.01" value="35" /></label><label>Verkoopprijs <input name="sell_rate" type="number" step="0.01" value="85" /></label><label>Btw % <input name="vat_percent" type="number" step="0.01" value="${companySettings().default_vat_percent}" /></label><button class="btn success" type="submit">Uurtarief aanmaken</button></form><div class="table-wrap"><table><thead><tr><th>Actief</th><th>Naam</th><th>Kostprijs</th><th>Verkoop</th><th>Btw</th></tr></thead><tbody>${rows.map((rate) => `<tr><td><input type="checkbox" ${rate.active !== false ? "checked" : ""} onchange="updateHourlyRate('${rate.id}', 'active', this.checked)" /></td><td><input value="${escapeAttr(rate.name)}" onchange="updateHourlyRate('${rate.id}', 'name', this.value)" /></td><td><input type="number" step="0.01" value="${rate.internal_cost_rate}" onchange="updateHourlyRate('${rate.id}', 'internal_cost_rate', this.value)" /></td><td><input type="number" step="0.01" value="${rate.sell_rate}" onchange="updateHourlyRate('${rate.id}', 'sell_rate', this.value)" /></td><td><input type="number" step="0.01" value="${rate.vat_percent}" onchange="updateHourlyRate('${rate.id}', 'vat_percent', this.value)" /></td></tr>`).join("")}</tbody></table></div></section>`;
}

function addHourlyRate(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  state.hourlyRates.push({ id: uid("rate"), company_id: currentCompanyId(), companyId: currentCompanyId(), name: form.get("name"), internal_cost_rate: Number(form.get("internal_cost_rate")) || 0, sell_rate: Number(form.get("sell_rate")) || 0, vat_percent: Number(form.get("vat_percent")) || 0, active: true });
  saveState();
  render();
}

function updateHourlyRate(rateId, field, value) {
  const rate = byId(state.hourlyRates || [], rateId);
  if (!rate || !isSameCompany(rate)) return;
  rate[field] = field === "active" ? Boolean(value) : ["internal_cost_rate", "sell_rate", "vat_percent"].includes(field) ? Number(value) || 0 : value;
  saveState();
}

function ensurePlanningUi() {
  ui.planningView = ["dag", "week", "maand"].includes(ui.planningView) ? ui.planningView : "week";
  ui.planningDate = ui.planningDate || new Date().toISOString().slice(0, 10);
  ui.planningStatusFilters = ui.planningStatusFilters || {};
  ui.planningMechanicFilters = ui.planningMechanicFilters || {};
  planningStatuses().forEach((status) => {
    if (typeof ui.planningStatusFilters[status] !== "boolean") ui.planningStatusFilters[status] = true;
  });
  companyScoped(state.users || [])
    .filter((user) => user.role === ROLES.MECHANIC && user.active)
    .forEach((mechanic) => {
      if (typeof ui.planningMechanicFilters[mechanic.id] !== "boolean") ui.planningMechanicFilters[mechanic.id] = true;
    });
}

function planningBaseDate() {
  const date = new Date(`${ui.planningDate || new Date().toISOString().slice(0, 10)}T12:00:00`);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function planningHours() {
  return Array.from({ length: 14 }, (_, index) => index + 7);
}

function planningMonthLabel() {
  return planningBaseDate().toLocaleDateString("nl-NL", { month: "long", year: "numeric" });
}

function setPlanningView(view) {
  ui.planningView = view;
  render();
}

function setPlanningDate(value) {
  ui.planningDate = value;
  render();
}

function shiftPlanningPeriod(direction) {
  ensurePlanningUi();
  const date = planningBaseDate();
  const step = ui.planningView === "maand" ? 1 : ui.planningView === "dag" ? 1 : 7;
  if (ui.planningView === "maand") date.setMonth(date.getMonth() + direction);
  else date.setDate(date.getDate() + direction * step);
  ui.planningDate = date.toISOString().slice(0, 10);
  render();
}

function goPlanningToday() {
  ui.planningDate = new Date().toISOString().slice(0, 10);
  render();
}

function togglePlanningStatus(status, checked) {
  ensurePlanningUi();
  ui.planningStatusFilters[status] = Boolean(checked);
  render();
}

function togglePlanningMechanic(mechanicId, checked) {
  ensurePlanningUi();
  ui.planningMechanicFilters[mechanicId] = Boolean(checked);
  ui.planningMechanic = "ALL";
  render();
}

function toggleAllPlanningMechanics(checked) {
  ensurePlanningUi();
  Object.keys(ui.planningMechanicFilters).forEach((mechanicId) => {
    ui.planningMechanicFilters[mechanicId] = Boolean(checked);
  });
  ui.planningMechanic = "ALL";
  render();
}

function filteredPlanningRowsForAdmin() {
  ensurePlanningUi();
  const activeMechanics = new Set(Object.entries(ui.planningMechanicFilters).filter(([, enabled]) => enabled).map(([id]) => id));
  return companyScoped(state.planningEvents || [])
    .filter((event) => activeMechanics.size === 0 || activeMechanics.has(event.mechanic_id))
    .filter((event) => ui.planningStatusFilters[event.status || "ingepland"] !== false)
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function planningRowsForAdmin() {
  return filteredPlanningRowsForAdmin();
}

function mechanicPlanningEvents() {
  const user = currentUser();
  if (!user) return [];
  return companyScoped(state.planningEvents || [])
    .filter((event) => event.mechanic_id === user.id)
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function calendarDateRange() {
  const base = planningBaseDate();
  if (ui.planningView === "dag") return [base];
  return weekDays(base);
}

function monthCalendarDays() {
  const base = planningBaseDate();
  const first = new Date(base.getFullYear(), base.getMonth(), 1);
  const start = new Date(first);
  const day = start.getDay() || 7;
  start.setDate(start.getDate() - day + 1);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

function eventDateTimeLabel(event) {
  return `${String(event.start_datetime || "").slice(11, 16)}-${String(event.end_datetime || "").slice(11, 16)}`;
}

function eventPositionStyle(event) {
  const start = new Date(event.start_datetime || "");
  const end = new Date(event.end_datetime || "");
  const min = 7 * 60;
  const max = 20 * 60;
  const span = max - min;
  const startMinutes = Number.isNaN(start.getTime()) ? min : start.getHours() * 60 + start.getMinutes();
  const endMinutes = Number.isNaN(end.getTime()) ? startMinutes + 60 : end.getHours() * 60 + end.getMinutes();
  const top = Math.max(0, Math.min(96, ((startMinutes - min) / span) * 100));
  const height = Math.max(7, Math.min(100 - top, ((Math.max(endMinutes, startMinutes + 30) - startMinutes) / span) * 100));
  return `top:${top}%;height:${height}%`;
}

function nowLineStyle(day) {
  const now = new Date();
  if (dateKey(day.toISOString()) !== dateKey(now.toISOString())) return "";
  const min = 7 * 60;
  const max = 20 * 60;
  const minutes = now.getHours() * 60 + now.getMinutes();
  if (minutes < min || minutes > max) return "";
  return `style="top:${((minutes - min) / (max - min)) * 100}%"`;
}

function renderPlanningToolbar() {
  ensurePlanningUi();
  return `<div class="calendar-toolbar">
    <div>
      <h2>${escapeHtml(planningMonthLabel())}</h2>
      <span>${ui.planningView === "week" ? "Weekplanning" : ui.planningView === "dag" ? "Dagplanning" : "Maandplanning"}</span>
    </div>
    <div class="calendar-actions">
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(-1)">&#8249;</button>
      <button class="btn secondary" type="button" onclick="goPlanningToday()">Vandaag</button>
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(1)">&#8250;</button>
      <div class="segmented">
        ${["dag", "week", "maand"].map((view) => `<button type="button" class="${ui.planningView === view ? "active" : ""}" onclick="setPlanningView('${view}')">${view[0].toUpperCase()}${view.slice(1)}</button>`).join("")}
      </div>
      <button class="btn success" type="button" onclick="openNewPlanningEvent()">+ Nieuwe afspraak</button>
    </div>
  </div>`;
}

function renderPlanningSidebar(mechanics) {
  ensurePlanningUi();
  const allMechanicsChecked = mechanics.every((mechanic) => ui.planningMechanicFilters[mechanic.id] !== false);
  return `<aside class="calendar-sidebar">
    <div class="sidebar-section">
      <h3>Monteurs</h3>
      <label class="check-line"><input type="checkbox" ${allMechanicsChecked ? "checked" : ""} onchange="toggleAllPlanningMechanics(this.checked)" /> Alle monteurs</label>
      ${mechanics.map((mechanic) => `<label class="check-line"><input type="checkbox" value="${mechanic.id}" ${ui.planningMechanicFilters[mechanic.id] !== false ? "checked" : ""} onchange="togglePlanningMechanic('${mechanic.id}', this.checked)" /> ${escapeHtml(mechanic.name)}</label>`).join("")}
    </div>
    <div class="sidebar-section">
      <h3>Status</h3>
      ${planningStatuses().map((status) => `<label class="check-line"><input type="checkbox" ${ui.planningStatusFilters[status] !== false ? "checked" : ""} onchange="togglePlanningStatus('${status}', this.checked)" /> <span class="status-dot ${statusClass(status)}"></span>${status}</label>`).join("")}
    </div>
  </aside>`;
}

function renderCalendarShell(rows) {
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const content = ui.planningView === "maand" ? renderMonthCalendar(rows) : renderTimeGridCalendar(rows);
  return `<section class="calendar-panel">
    ${renderPlanningToolbar()}
    <div class="calendar-shell">
      ${renderPlanningSidebar(mechanics)}
      <div class="calendar-main">${content}</div>
    </div>
  </section>`;
}

function renderTimeGridCalendar(rows) {
  const days = calendarDateRange();
  const hourRows = planningHours().map((hour) => `<div class="calendar-hour-line" style="top:${((hour - 7) / 13) * 100}%"></div>`).join("");
  return `<div class="calendar-grid" style="--calendar-days:${days.length}">
    <div class="calendar-head-spacer"></div>
    ${days.map((day) => `<div class="calendar-day-head" onclick="setPlanningDate('${dateKey(day.toISOString())}'); ui.planningView='dag'; render()"><strong>${day.toLocaleDateString("nl-NL", { weekday: "short" })}</strong><span>${day.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit" })}</span></div>`).join("")}
    <div class="calendar-time-col">${planningHours().map((hour) => `<span>${String(hour).padStart(2, "0")}:00</span>`).join("")}</div>
    ${days.map((day) => {
      const key = dateKey(day.toISOString());
      const dayRows = rows.filter((event) => dateKey(event.start_datetime) === key);
      return `<div class="calendar-day-col" data-date="${key}" onpointerdown="createPlanningSelection(event, '${key}')" ondblclick="openPlanningSlot(event, '${key}')">
        ${hourRows}
        <div class="calendar-now-line" ${nowLineStyle(day)}></div>
        <div class="planning-selection-preview" data-selection-date="${key}"></div>
        ${dayRows.map(renderCalendarEventBlock).join("")}
      </div>`;
    }).join("")}
  </div>
  <div class="calendar-mobile-list">${renderAdminPlanningCards(rows.filter((event) => days.some((day) => dateKey(day.toISOString()) === dateKey(event.start_datetime))))}</div>`;
}

function renderCalendarEventBlock(event) {
  return `<button class="calendar-event ${statusClass(event.status)} ${event.priority === "spoed" ? "urgent" : ""}" style="${eventPositionStyle(event)}" type="button" onpointerdown="event.stopPropagation()" ondblclick="event.stopPropagation()" onclick="openPlanningEdit('${event.id}')">
    <strong>${escapeHtml(event.customer_name || event.title || "Afspraak")}</strong>
    <span>${eventDateTimeLabel(event)} - ${escapeHtml(event.title || "")}</span>
    <span>${escapeHtml(mechanicNameById(event.mechanic_id))}</span>
    <small>${escapeHtml(event.address || "")}</small>
  </button>`;
}

function renderMonthCalendar(rows) {
  const base = planningBaseDate();
  const days = monthCalendarDays();
  return `<div class="calendar-month-grid">
    ${["ma", "di", "wo", "do", "vr", "za", "zo"].map((day) => `<div class="calendar-month-head">${day}</div>`).join("")}
    ${days.map((day) => {
      const key = dateKey(day.toISOString());
      const dayRows = rows.filter((event) => dateKey(event.start_datetime) === key).slice(0, 3);
      return `<button class="calendar-month-cell ${day.getMonth() === base.getMonth() ? "" : "muted-month"}" type="button" onclick="setPlanningDate('${key}'); ui.planningView='dag'; render()">
        <strong>${day.getDate()}</strong>
        ${dayRows.map((event) => `<span class="${statusClass(event.status)}">${String(event.start_datetime || "").slice(11, 16)} ${escapeHtml(event.customer_name || event.title || "")}</span>`).join("")}
      </button>`;
    }).join("")}
  </div>`;
}

function renderAdminPlanningCards(rows) {
  if (!rows.length) return `<div class="empty">Geen afspraken in deze periode.</div>`;
  return `<div class="mobile-planning-list">${rows.map((event) => `<article class="planning-card ${statusClass(event.status)}">
    <div class="article-head"><div><h3>${safeDate(event.start_datetime)} ${eventDateTimeLabel(event)}</h3><p>${escapeHtml(event.customer_name || "-")} - ${escapeHtml(event.address || "-")}</p></div><span class="badge">${escapeHtml(event.priority || "normaal")}</span></div>
    <div class="meta-grid">
      <div class="meta"><span>Monteur</span><strong>${escapeHtml(mechanicNameById(event.mechanic_id))}</strong></div>
      <div class="meta"><span>Werkbon</span><strong>${escapeHtml(event.title || event.workorder_id || "-")}</strong></div>
      <div class="meta"><span>Status</span><strong>${escapeHtml(event.status || "-")}</strong></div>
    </div>
    <button class="btn secondary" type="button" onclick="openPlanningEdit('${event.id}')">Bewerken</button>
  </article>`).join("")}</div>`;
}

function renderMechanicPlanningList(rows) {
  const today = dateKey(new Date().toISOString());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = dateKey(tomorrowDate.toISOString());
  const groups = [
    ["Vandaag", rows.filter((event) => dateKey(event.start_datetime) === today)],
    ["Morgen", rows.filter((event) => dateKey(event.start_datetime) === tomorrow)],
    ["Deze week", rows.filter((event) => dateKey(event.start_datetime) !== today && dateKey(event.start_datetime) !== tomorrow)],
  ];
  const allowedStatus = ["onderweg", "bezig", "afgerond"];
  return `<div class="mechanic-agenda">${groups.map(([label, groupRows]) => `<section class="mechanic-agenda-group"><h3>${label}</h3>${groupRows.length ? groupRows.map((event) => `
    <article class="planning-card ${statusClass(event.status)}">
      <div class="article-head">
        <div>
          <h3>${safeDate(event.start_datetime)} ${eventDateTimeLabel(event)}</h3>
          <p>${escapeHtml(event.customer_name || "-")} - ${escapeHtml(event.address || "-")} ${escapeHtml(event.postal_code || "")} ${escapeHtml(event.city || "")}</p>
        </div>
        <span class="badge">${escapeHtml(event.status || "ingepland")}</span>
      </div>
      <div class="meta-grid">
        <div class="meta"><span>Telefoon</span><strong>${escapeHtml(event.phone || "-")}</strong></div>
        <div class="meta"><span>Prioriteit</span><strong>${escapeHtml(event.priority || "normaal")}</strong></div>
        <div class="meta"><span>Werkbon</span><strong>${escapeHtml(event.title || "-")}</strong></div>
      </div>
      <label>Notitie <input value="${escapeAttr(event.notes || "")}" onchange="updatePlanningEvent('${event.id}', 'notes', this.value)" /></label>
      <div class="button-row">
        ${allowedStatus.map((status) => `<button class="btn secondary" type="button" onclick="updatePlanningEvent('${event.id}', 'status', '${status}')">${status}</button>`).join("")}
        ${event.project_id ? `<a class="btn success" href="#/project/${event.project_id}">Open werkbon</a>` : ""}
        <a class="btn secondary" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(`${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`)}">Route</a>
      </div>
      ${companySettings().mechanics_can_edit_planning ? `<div class="form-grid"><label>Start <input type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" onchange="updatePlanningEventWithReason('${event.id}', 'start_datetime', this.value)" /></label><label>Einde <input type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" onchange="updatePlanningEventWithReason('${event.id}', 'end_datetime', this.value)" /></label></div>` : ""}
    </article>`).join("") : `<p class="muted">Geen afspraken.</p>`}</section>`).join("")}</div>`;
}

function renderPlanning() {
  ensurePlanningUi();
  if (isMechanic()) {
    return `<section class="panel" style="margin-bottom:14px"><h2>Mijn planning</h2><p>Alleen jouw eigen afspraken, adressen en werkbonnen.</p></section>${renderMechanicPlanningList(mechanicPlanningEvents())}`;
  }
  const rows = filteredPlanningRowsForAdmin();
  return `${renderCalendarShell(rows)}${ui.creatingPlanningEvent ? renderNewPlanningModal() : ""}${ui.editingPlanningEventId ? renderPlanningEditModal(ui.editingPlanningEventId) : ""}`;
}

function openNewPlanningEvent() {
  ui.newPlanningDefaults = null;
  ui.creatingPlanningEvent = true;
  render();
}

function closeNewPlanningEvent() {
  ui.creatingPlanningEvent = false;
  ui.newPlanningDefaults = null;
  render();
}

function renderNewPlanningModal() {
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const customers = activeCustomers();
  const projects = visibleProjects().filter((project) => !isProjectCompleted(project));
  const defaults = ui.newPlanningDefaults || {};
  const baseDate = defaults.start_date || ui.planningDate || new Date().toISOString().slice(0, 10);
  const endDate = defaults.end_date || baseDate;
  const startTime = defaults.start_time || "08:00";
  const endTime = defaults.end_time || "10:00";
  const statusDefault = defaults.status || "ingepland";
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>Nieuwe afspraak</h2><p>Koppel een klant en eventueel direct een werkbon.</p></div><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Sluiten</button></div>
    <form class="form-grid" onsubmit="saveNewPlanningEvent(event)">
      <label>Klant kiezen <select name="customer_id" onchange="fillPlanningModalCustomer(this.value, 'new-planning')"><option value="">Nieuwe klant of handmatig</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}</select></label>
      <label>Werkbon koppelen <select name="project_id"><option value="">Geen werkbon</option><option value="__new__">Nieuwe werkbon maken</option>${projects.map((project) => `<option value="${project.id}">${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || "")}</option>`).join("")}</select></label>
      <label>Klantnaam <input name="customer_name" id="new-planning-customer-name" required /></label>
      <label>Adres <input name="address" id="new-planning-address" required /></label>
      <label>Postcode <input name="postal_code" id="new-planning-postal-code" /></label>
      <label>Plaats <input name="city" id="new-planning-city" /></label>
      <label>Telefoon <input name="phone" id="new-planning-phone" /></label>
      <label>E-mail <input name="email" id="new-planning-email" type="email" /></label>
      <label>Monteur <select name="mechanic_id" required>${mechanics.map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Titel <input name="title" required value="Service afspraak" /></label>
      <label>Omschrijving <input name="description" /></label>
      <label>Startdatum <input name="start_date" type="date" required value="${escapeAttr(baseDate)}" /></label>
      <label>Starttijd <input name="start_time" type="time" required value="${escapeAttr(startTime)}" /></label>
      <label>Einddatum <input name="end_date" type="date" required value="${escapeAttr(endDate)}" /></label>
      <label>Eindtijd <input name="end_time" type="time" required value="${escapeAttr(endTime)}" /></label>
      <label>Status <select name="status">${planningStatuses().map((status) => `<option ${status === statusDefault ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes"></textarea></label>
      <div class="button-row full"><button class="btn success" type="submit">Opslaan</button><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Annuleren</button></div>
    </form>
  </section></div>`;
}

function fillPlanningModalCustomer(customerId, prefix) {
  const customer = byId(state.customers || [], customerId);
  if (!customer || !isSameCompany(customer)) return;
  const fields = {
    "customer-name": customer.customer_name || "",
    address: customer.address || "",
    "postal-code": customer.postal_code || "",
    city: customer.city || "",
    phone: customer.phone || "",
    email: customer.email || "",
  };
  Object.entries(fields).forEach(([suffix, value]) => {
    const input = document.getElementById(`${prefix}-${suffix}`);
    if (input) input.value = value;
  });
}

function nextWorkorderNumber() {
  const year = new Date().getFullYear();
  const prefix = `WB-${year}-`;
  const count = visibleProjects().filter((project) => String(project.workorder_number || project.workOrderNumber || "").startsWith(prefix)).length + 1;
  return `${prefix}${String(count).padStart(4, "0")}`;
}

function createProjectFromPlanning(form, customer, customerId) {
  const now = new Date().toISOString();
  const title = form.get("title") || "Service afspraak";
  const project = {
    id: uid("project"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    projectName: title,
    project_name: title,
    customer: customer.customer_name,
    customer_name: customer.customer_name,
    address: `${customer.address || ""} ${customer.postal_code || ""} ${customer.city || ""}`.trim(),
    technician: mechanicNameById(form.get("mechanic_id")),
    mechanicId: form.get("mechanic_id"),
    assignedMechanicId: form.get("mechanic_id"),
    assigned_mechanic_id: form.get("mechanic_id"),
    workorder_number: nextWorkorderNumber(),
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: form.get("start_date"),
    selectedKitIds: ["M001"],
    selectedSourceIds: ["M001", GARAGE_BOX_SOURCE],
    sourceChoiceLabel: "Planning",
    status: "toegewezen",
    description: form.get("description") || "",
    createdAt: now,
    created_at: now,
  };
  state.projects.push(project);
  const usages = state.articles
    .filter((article) => article.active && isSameCompany(article) && project.selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
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
  state.usages.push(...usages);
  return project;
}

function saveNewPlanningEvent(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  let customerId = form.get("customer_id");
  let customer = byId(state.customers || [], customerId);
  if (!customer) {
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: form.get("customer_name"),
      contact_person: "",
      address: form.get("address"),
      postal_code: form.get("postal_code"),
      city: form.get("city"),
      phone: form.get("phone"),
      email: form.get("email"),
      notes: "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
    customerId = customer.id;
  }
  let projectId = form.get("project_id");
  let project = projectId && projectId !== "__new__" ? byId(state.projects || [], projectId) : null;
  if (projectId === "__new__") {
    project = createProjectFromPlanning(form, customer, customerId);
    projectId = project.id;
  }
  const planningEvent = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: form.get("mechanic_id"),
    title: project ? workorderNumber(project) : form.get("title"),
    description: form.get("description") || "",
    customer_name: customer.customer_name || form.get("customer_name"),
    address: customer.address || form.get("address"),
    postal_code: customer.postal_code || form.get("postal_code"),
    city: customer.city || form.get("city"),
    phone: customer.phone || form.get("phone"),
    start_datetime: `${form.get("start_date")}T${form.get("start_time")}`,
    end_datetime: `${form.get("end_date")}T${form.get("end_time")}`,
    status: form.get("status") || "ingepland",
    priority: form.get("priority") || "normaal",
    notes: form.get("notes") || "",
    created_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(planningEvent);
  if (project) {
    notifyWorkorderAssigned(project, planningEvent);
  } else {
    notifyPlanningChange(
      planningEvent,
      planningEvent.priority === "spoed" ? "emergency" : "planning_changed",
      planningEvent.priority === "spoed" ? "Spoedmelding" : "Nieuwe afspraak ingepland",
      planningEvent.priority === "spoed" ? "Er is een spoedafspraak aan u toegewezen." : "Er is een nieuwe afspraak in uw planning gezet.",
      planningEvent.priority || "normaal",
    );
  }
  saveState();
  ui.creatingPlanningEvent = false;
  render();
}

function openPlanningEdit(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (isMechanic() && event.mechanic_id !== currentUser()?.id) return;
  ui.editingPlanningEventId = eventId;
  render();
}

function closePlanningEdit() {
  ui.editingPlanningEventId = null;
  render();
}

function renderPlanningEditModal(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return "";
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>${escapeHtml(event.title || "Afspraak")}</h2><p>${escapeHtml(event.customer_name || "-")} - ${escapeHtml(event.address || "-")}</p></div><button class="btn secondary" type="button" onclick="closePlanningEdit()">Sluiten</button></div>
    <form class="form-grid" onsubmit="savePlanningEdit(event, '${event.id}')">
      <label>Titel <input name="title" value="${escapeAttr(event.title || "")}" required /></label>
      <label>Klant <input name="customer_name" value="${escapeAttr(event.customer_name || "")}" required /></label>
      <label>Adres <input name="address" value="${escapeAttr(event.address || "")}" required /></label>
      <label>Postcode <input name="postal_code" value="${escapeAttr(event.postal_code || "")}" /></label>
      <label>Plaats <input name="city" value="${escapeAttr(event.city || "")}" /></label>
      <label>Telefoon <input name="phone" value="${escapeAttr(event.phone || "")}" /></label>
      <label>Monteur <select name="mechanic_id">${mechanics.map((user) => `<option value="${user.id}" ${event.mechanic_id === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Start <input name="start_datetime" type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" required /></label>
      <label>Einde <input name="end_datetime" type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" required /></label>
      <label>Status <select name="status">${planningStatuses().map((status) => `<option value="${status}" ${event.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option value="${priority}" ${event.priority === priority ? "selected" : ""}>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes">${escapeHtml(event.notes || "")}</textarea></label>
      <div class="button-row full">
        <button class="btn success" type="submit">Opslaan</button>
        ${event.project_id ? `<a class="btn secondary" href="#/project/${event.project_id}">Open werkbon</a>` : ""}
        <button class="btn secondary" type="button" onclick="updatePlanningEvent('${event.id}', 'status', 'onderweg')">Onderweg</button>
        <button class="btn secondary" type="button" onclick="updatePlanningEvent('${event.id}', 'status', 'bezig')">Bezig</button>
        <button class="btn success" type="button" onclick="updatePlanningEvent('${event.id}', 'status', 'afgerond')">Afgerond</button>
        <a class="btn secondary" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(`${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`)}">Route</a>
        <button class="btn danger" type="button" onclick="deletePlanningEvent('${event.id}')">Verwijderen</button>
      </div>
    </form>
  </section></div>`;
}

function savePlanningEdit(submitEvent, eventId) {
  submitEvent.preventDefault();
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (isMechanic() && (event.mechanic_id !== currentUser()?.id || !companySettings().mechanics_can_edit_planning)) return;
  const form = new FormData(submitEvent.target);
  const previous = { mechanic_id: event.mechanic_id, start_datetime: event.start_datetime, end_datetime: event.end_datetime, status: event.status, priority: event.priority };
  ["title", "customer_name", "address", "postal_code", "city", "phone", "mechanic_id", "start_datetime", "end_datetime", "status", "priority", "notes"].forEach((field) => {
    event[field] = form.get(field) || "";
  });
  event.updated_at = new Date().toISOString();
  if (!isMechanic()) {
    const moved = previous.start_datetime !== event.start_datetime || previous.end_datetime !== event.end_datetime;
    const reassigned = previous.mechanic_id !== event.mechanic_id;
    if (event.status === "geannuleerd" && previous.status !== "geannuleerd") {
      notifyPlanningChange(event, "planning_cancelled", "Afspraak geannuleerd", "Een afspraak in uw planning is geannuleerd.", event.priority);
    } else if (moved) {
      notifyPlanningChange(event, "planning_moved", "Afspraak verplaatst", "Een afspraak in uw planning is verplaatst.", event.priority);
    } else if (reassigned || previous.priority !== event.priority || previous.status !== event.status) {
      notifyPlanningChange(event, event.priority === "spoed" ? "emergency" : "planning_changed", event.priority === "spoed" ? "Spoedmelding" : "Planning gewijzigd", "Uw planning is gewijzigd.", event.priority);
    }
  }
  saveState();
  closePlanningEdit();
}

function updatePlanningEvent(eventId, field, value) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (isMechanic()) {
    const allowed = ["status", "notes"];
    if (event.mechanic_id !== currentUser()?.id || !allowed.includes(field)) return;
  }
  const previousValue = event[field];
  event[field] = value;
  event.updated_at = new Date().toISOString();
  if (!isMechanic() && previousValue !== value) {
    if (field === "status" && value === "geannuleerd") {
      notifyPlanningChange(event, "planning_cancelled", "Afspraak geannuleerd", "Een afspraak in uw planning is geannuleerd.", event.priority);
    } else if (field === "status" || field === "priority") {
      notifyPlanningChange(event, event.priority === "spoed" ? "emergency" : "planning_changed", event.priority === "spoed" ? "Spoedmelding" : "Planning gewijzigd", "Uw planning is gewijzigd.", event.priority);
    }
  }
  saveState();
  render();
}

function updatePlanningEventWithReason(eventId, field, value) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event) || event.mechanic_id !== currentUser()?.id || !companySettings().mechanics_can_edit_planning) return;
  const reason = prompt("Reden wijziging planning");
  if (!reason) return;
  event[field] = value;
  event.notes = `${event.notes || ""}\nWijziging: ${reason}`.trim();
  event.updated_at = new Date().toISOString();
  saveState();
  render();
}

function deletePlanningEvent(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event) || isMechanic()) return;
  if (!confirm("Afspraak verwijderen?")) return;
  state.planningEvents = (state.planningEvents || []).filter((entry) => entry.id !== eventId);
  saveState();
  ui.editingPlanningEventId = null;
  render();
}

function updatePlanningEventTime(eventId, startDatetime, endDatetime) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  event.start_datetime = startDatetime;
  event.end_datetime = endDatetime;
  event.updated_at = new Date().toISOString();
  notifyPlanningChange(event, "planning_moved", "Afspraak verplaatst", "Een afspraak in uw planning is verplaatst.", event.priority);
  saveState();
}

function updatePlanningEventMechanic(eventId, mechanicId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  const mechanic = byId(state.users || [], mechanicId);
  if (!mechanic || !isSameCompany(mechanic) || mechanic.role !== ROLES.MECHANIC) return;
  event.mechanic_id = mechanicId;
  event.updated_at = new Date().toISOString();
  notifyPlanningChange(event, "planning_changed", "Nieuwe afspraak toegewezen", "Er is een afspraak aan u toegewezen.", event.priority);
  saveState();
}

function movePlanningEvent(eventId, changes = {}) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (changes.start_datetime && changes.end_datetime) updatePlanningEventTime(eventId, changes.start_datetime, changes.end_datetime);
  if (changes.mechanic_id) updatePlanningEventMechanic(eventId, changes.mechanic_id);
}

function canCreatePlanningSelection() {
  if (isTenantAdmin() || isPlatformSuperAdmin()) return true;
  return isMechanic() && companySettings().mechanics_can_create_events;
}

function minutesToTime(totalMinutes) {
  const minutes = Math.max(0, Math.min(23 * 60 + 59, totalMinutes));
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function minutesFromCalendarPointer(pointerEvent, column) {
  const rect = column.getBoundingClientRect();
  const y = Math.max(0, Math.min(rect.height, pointerEvent.clientY - rect.top));
  const min = 7 * 60;
  const max = 20 * 60;
  const raw = min + (y / rect.height) * (max - min);
  return Math.max(min, Math.min(max, Math.round(raw / 15) * 15));
}

function selectionToStyle(selection) {
  const min = 7 * 60;
  const max = 20 * 60;
  const start = Math.min(selection.startMinutes, selection.endMinutes);
  const end = Math.max(selection.startMinutes, selection.endMinutes);
  const top = ((start - min) / (max - min)) * 100;
  const height = Math.max(4, ((end - start) / (max - min)) * 100);
  return { start, end, css: `top:${top}%;height:${height}%` };
}

function updatePlanningSelectionPreview(column) {
  const selection = ui.planningSelection;
  const preview = column?.querySelector(".planning-selection-preview");
  if (!selection || !preview) return;
  const normalized = selectionToStyle(selection);
  preview.setAttribute("style", `${normalized.css};display:grid`);
  preview.textContent = `${selection.date} ${minutesToTime(normalized.start)} - ${minutesToTime(normalized.end)}`;
}

function hidePlanningSelectionPreview(column) {
  const preview = column?.querySelector(".planning-selection-preview");
  if (!preview) return;
  preview.removeAttribute("style");
  preview.textContent = "";
}

function openPlanningSelectionModal(date, startMinutes, endMinutes) {
  const start = Math.min(startMinutes, endMinutes);
  const end = Math.max(startMinutes, endMinutes);
  ui.newPlanningDefaults = {
    start_date: date,
    end_date: date,
    start_time: minutesToTime(start),
    end_time: minutesToTime(Math.max(end, start + 60)),
    status: "ingepland",
  };
  ui.creatingPlanningEvent = true;
  render();
}

function createPlanningSelection(pointerEvent, date) {
  if (!canCreatePlanningSelection()) return;
  if (pointerEvent.button !== undefined && pointerEvent.button !== 0) return;
  if (pointerEvent.target?.closest?.(".calendar-event")) return;
  const column = pointerEvent.currentTarget;
  const startMinutes = minutesFromCalendarPointer(pointerEvent, column);
  ui.planningSelection = { date, startMinutes, endMinutes: startMinutes, moved: false };
  updatePlanningSelectionPreview(column);
  pointerEvent.preventDefault();
  const onMove = (moveEvent) => {
    const nextMinutes = minutesFromCalendarPointer(moveEvent, column);
    ui.planningSelection.endMinutes = nextMinutes;
    ui.planningSelection.moved = ui.planningSelection.moved || Math.abs(nextMinutes - startMinutes) >= 15;
    updatePlanningSelectionPreview(column);
  };
  const onUp = () => {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    const selection = ui.planningSelection;
    hidePlanningSelectionPreview(column);
    ui.planningSelection = null;
    if (!selection?.moved) return;
    const normalized = selectionToStyle(selection);
    if (Math.abs(normalized.end - normalized.start) < 15) return;
    openPlanningSelectionModal(selection.date, normalized.start, normalized.end);
  };
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", onUp);
}

function openPlanningSlot(pointerEvent, date) {
  if (!canCreatePlanningSelection()) return;
  if (pointerEvent.target?.closest?.(".calendar-event")) return;
  const start = minutesFromCalendarPointer(pointerEvent, pointerEvent.currentTarget);
  pointerEvent.preventDefault();
  openPlanningSelectionModal(date, start, Math.min(20 * 60, start + 60));
}

function createPlanningEvent(data = {}) {
  ui.newPlanningDefaults = {
    start_date: data.start_date || ui.planningDate || new Date().toISOString().slice(0, 10),
    end_date: data.end_date || data.start_date || ui.planningDate || new Date().toISOString().slice(0, 10),
    start_time: data.start_time || "08:00",
    end_time: data.end_time || "09:00",
    status: data.status || "ingepland",
  };
  ui.creatingPlanningEvent = true;
  render();
}

function resizePlanningEvent(eventId, startDatetime, endDatetime) {
  updatePlanningEventTime(eventId, startDatetime, endDatetime);
}

function notificationTypeEnabled(type, priority = "normaal") {
  const settings = companySettings();
  if (!settings.notifications_enabled) return false;
  if (priority === "spoed") return settings.emergency_notifications_enabled !== false;
  if (["new_workorder", "maintenance_scheduled"].includes(type)) return settings.workorder_notifications_enabled !== false;
  if (["planning_changed", "planning_moved", "planning_cancelled", "emergency"].includes(type)) return settings.planning_notifications_enabled !== false;
  return true;
}

function notificationPriorityClass(priority = "normaal") {
  if (priority === "spoed") return "notification-urgent";
  if (priority === "hoog") return "notification-high";
  return "notification-normal";
}

function notificationTypeLabel(type = "") {
  return {
    new_workorder: "Nieuwe werkbon",
    planning_changed: "Wijziging planning",
    planning_moved: "Afspraak verplaatst",
    planning_cancelled: "Afspraak geannuleerd",
    emergency: "Spoedmelding",
    maintenance_scheduled: "Onderhoud ingepland",
  }[type] || type || "Melding";
}

function createNotification({ userId, title, message, type = "new_workorder", priority = "normaal", workorderId = "", planningId = "", companyId = currentCompanyId() }) {
  if (!userId || !companyId) return null;
  state.notifications = state.notifications || [];
  const notification = {
    id: uid("note"),
    company_id: companyId,
    companyId,
    user_id: userId,
    title,
    message,
    type,
    priority,
    related_workorder_id: workorderId || "",
    related_planning_id: planningId || "",
    is_read: false,
    push_delivery: {
      browser: "pending",
      android: "pending",
      ios: "pending",
    },
    created_at: new Date().toISOString(),
  };
  state.notifications.push(notification);
  return notification;
}

function projectNotificationFields(project, planningEvent = null) {
  return {
    workorderNumber: workorderNumber(project),
    customerName: project.customer_name || project.customer || planningEvent?.customer_name || "-",
    address: project.address || planningEvent?.address || "-",
    datetime: planningEvent?.start_datetime || project.date || project.created_at || "",
    priority: planningEvent?.priority || "normaal",
  };
}

function notifyWorkorderAssigned(project, planningEvent = null) {
  const mechanicId = project.assignedMechanicId || project.assigned_mechanic_id || project.mechanicId || planningEvent?.mechanic_id;
  if (!mechanicId) return;
  const details = projectNotificationFields(project, planningEvent);
  createNotification({
    userId: mechanicId,
    title: "Nieuwe werkbon toegewezen",
    message: "U heeft een nieuwe werkbon ontvangen.",
    type: details.priority === "spoed" ? "emergency" : "new_workorder",
    priority: details.priority,
    workorderId: project.id,
    planningId: planningEvent?.id || "",
    companyId: recordCompanyId(project),
  });
}

function notifyPlanningChange(event, type, title, message, priority = event?.priority || "normaal") {
  if (!event?.mechanic_id) return;
  createNotification({
    userId: event.mechanic_id,
    title,
    message,
    type,
    priority,
    workorderId: event.project_id || event.workorder_id || "",
    planningId: event.id,
    companyId: recordCompanyId(event),
  });
}

function userNotifications(user = currentUser()) {
  if (!user) return [];
  return companyScoped(state.notifications || [])
    .filter((notification) => notification.user_id === user.id)
    .sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
}

function adminNotificationsSent() {
  return companyScoped(state.notifications || []).sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
}

function unreadNotificationCount(user = currentUser()) {
  return userNotifications(user).filter((notification) => !notification.is_read).length;
}

function popupNotificationForCurrentUser() {
  const dismissed = new Set(ui.dismissedNotificationIds || []);
  return userNotifications()
    .find((notification) => !notification.is_read && !dismissed.has(notification.id) && notificationTypeEnabled(notification.type, notification.priority));
}

function markNotificationRead(notificationId, shouldRender = true) {
  const notification = byId(state.notifications || [], notificationId);
  if (!notification || !isSameCompany(notification) || notification.user_id !== currentUser()?.id) return;
  notification.is_read = true;
  saveState();
  if (shouldRender) render();
}

function markAllNotificationsRead() {
  userNotifications().forEach((notification) => {
    notification.is_read = true;
  });
  saveState();
  render();
}

function dismissNotificationPopup(notificationId) {
  ui.dismissedNotificationIds = [...new Set([...(ui.dismissedNotificationIds || []), notificationId])];
  render();
}

function openNotificationWorkorder(notificationId) {
  const notification = byId(state.notifications || [], notificationId);
  if (!notification || !isSameCompany(notification) || notification.user_id !== currentUser()?.id) return;
  notification.is_read = true;
  saveState();
  if (notification.related_workorder_id) location.hash = `#/project/${notification.related_workorder_id}`;
  else location.hash = "#/notifications";
}

function renderNotificationPopup() {
  const notification = popupNotificationForCurrentUser();
  if (!notification) return "";
  const planning = byId(state.planningEvents || [], notification.related_planning_id);
  const project = byId(state.projects || [], notification.related_workorder_id);
  const details = project ? projectNotificationFields(project, planning) : {
    workorderNumber: planning?.title || notification.related_workorder_id || "-",
    customerName: planning?.customer_name || "-",
    address: planning?.address || "-",
    datetime: planning?.start_datetime || notification.created_at,
    priority: notification.priority || "normaal",
  };
  return `<div class="notification-popup ${notificationPriorityClass(notification.priority)}">
    <div class="article-head">
      <div>
        <h2>${escapeHtml(notification.title)}</h2>
        <p>${escapeHtml(notification.message)}</p>
      </div>
      <span class="badge">${escapeHtml(notification.priority || "normaal")}</span>
    </div>
    <div class="meta-grid">
      <div class="meta"><span>Werkbon</span><strong>${escapeHtml(details.workorderNumber || "-")}</strong></div>
      <div class="meta"><span>Klant</span><strong>${escapeHtml(details.customerName || "-")}</strong></div>
      <div class="meta"><span>Adres</span><strong>${escapeHtml(details.address || "-")}</strong></div>
      <div class="meta"><span>Datum/tijd</span><strong>${escapeHtml(String(details.datetime || "-").replace("T", " "))}</strong></div>
    </div>
    <div class="button-row">
      ${notification.related_workorder_id ? `<button class="btn success" type="button" onclick="openNotificationWorkorder('${notification.id}')">Open werkbon</button>` : ""}
      <button class="btn secondary" type="button" onclick="dismissNotificationPopup('${notification.id}')">Sluiten</button>
    </div>
  </div>`;
}

function renderNotificationsCenter() {
  const rows = userNotifications();
  return `<section class="panel">
    <div class="article-head">
      <div>
        <h2>Meldingen</h2>
        <p>Nieuwe werkbonnen, planningwijzigingen, spoedmeldingen en onderhoud.</p>
      </div>
      <button class="btn secondary" type="button" onclick="markAllNotificationsRead()">Alles gelezen</button>
    </div>
    ${rows.length ? `<div class="notification-list">${rows.map((notification) => renderNotificationRow(notification, false)).join("")}</div>` : `<div class="empty">Geen meldingen.</div>`}
  </section>`;
}

function renderNotificationRow(notification, adminView = false) {
  const user = byId(state.users || [], notification.user_id);
  return `<article class="notification-row ${notificationPriorityClass(notification.priority)} ${notification.is_read ? "is-read" : "is-unread"}">
    <div>
      <strong>${escapeHtml(notification.title)}</strong>
      <p>${escapeHtml(notification.message)}</p>
      <span>${escapeHtml(notificationTypeLabel(notification.type))} - ${escapeHtml(String(notification.created_at || "").replace("T", " ").slice(0, 16))}</span>
    </div>
    <div class="notification-row-meta">
      ${adminView ? `<span>${escapeHtml(user?.name || "-")}</span>` : ""}
      <span>${notification.is_read ? "gelezen" : "ongelezen"}</span>
      <span>${escapeHtml(notification.priority || "normaal")}</span>
      ${notification.related_workorder_id ? `<a class="btn secondary" href="#/project/${notification.related_workorder_id}">Open werkbon</a>` : ""}
      ${!adminView && !notification.is_read ? `<button class="btn secondary" type="button" onclick="markNotificationRead('${notification.id}')">Markeer gelezen</button>` : ""}
    </div>
  </article>`;
}

function renderAdminNotifications() {
  const rows = adminNotificationsSent();
  const unread = rows.filter((notification) => !notification.is_read).length;
  return `<section class="panel">
    <div class="article-head">
      <div>
        <h2>Verstuurde meldingen</h2>
        <p>Company Admin ziet per monteur of meldingen gelezen zijn.</p>
      </div>
      <span class="badge warn">${unread} ongelezen</span>
    </div>
    ${rows.length ? `<div class="notification-list">${rows.map((notification) => renderNotificationRow(notification, true)).join("")}</div>` : `<div class="empty">Nog geen meldingen verstuurd.</div>`}
  </section>`;
}

function renderNotificationSettings() {
  const settings = companySettings();
  return `<section class="panel" style="margin-top:14px">
    <h2>Meldingen</h2>
    <p>Deze instellingen bepalen of monteurs popupmeldingen krijgen. Meldingen worden altijd opgeslagen in het meldingencentrum.</p>
    <div class="form-grid">
      ${[
        ["notifications_enabled", "Alle popupmeldingen"],
        ["workorder_notifications_enabled", "Werkbonmeldingen"],
        ["planning_notifications_enabled", "Planningmeldingen"],
        ["emergency_notifications_enabled", "Spoedmeldingen"],
        ["push_notifications_enabled", "Pushmeldingen"],
      ].map(([field, label]) => `<label>${label}
        <select onchange="updateCompanySetting('${field}', this.value === 'true')">
          <option value="true" ${settings[field] ? "selected" : ""}>Aan</option>
          <option value="false" ${!settings[field] ? "selected" : ""}>Uit</option>
        </select>
      </label>`).join("")}
    </div>
    <div class="info-box" style="margin-top:12px">Push delivery is voorbereid in het datamodel voor browser, Android en iPhone. De huidige standalone app gebruikt localStorage en toont in-app meldingen.</div>
  </section>
  <div style="margin-top:14px">${renderAdminNotifications()}</div>`;
}

function canCreateCustomerFromCall(user = currentUser()) {
  return Boolean(user && user.role === ROLES.MECHANIC && user.can_create_customer_from_call);
}

function normalizePhone(value = "") {
  return String(value).replace(/[^\d+]/g, "").replace(/^00/, "+");
}

function formatPhone(value = "") {
  const normalized = normalizePhone(value);
  if (!normalized) return "";
  if (normalized.startsWith("+31")) return normalized.replace(/^\+31/, "+31 ").replace(/(\+31 )(\d{1,2})(\d{3})(\d{4})$/, "$1$2 $3 $4");
  if (normalized.startsWith("06") && normalized.length === 10) return `${normalized.slice(0, 2)} ${normalized.slice(2, 6)} ${normalized.slice(6)}`;
  return normalized.replace(/(.{3})/g, "$1 ").trim();
}

function findCustomerByPhone(phone) {
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedPhone) return null;
  return companyScoped(state.customers || []).find((customer) => normalizePhone(customer.phone) === normalizedPhone && customer.active !== false) || null;
}

function customerNotes(customerId) {
  return companyScoped(state.customerNotes || [])
    .filter((note) => note.customer_id === customerId)
    .sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
}

function customerWorkorders(customerId) {
  return visibleProjects()
    .filter((project) => project.customer_id === customerId || project.customerId === customerId)
    .sort((a, b) => String(b.created_at || b.createdAt || "").localeCompare(String(a.created_at || a.createdAt || "")));
}

function latestCustomerNote(customerId) {
  return customerNotes(customerId)[0] || null;
}

function setCallPhoneLookup(value) {
  ui.callPhoneLookup = formatPhone(value);
  render();
}

function callFollowUpOptions() {
  return ["geen", "afspraak maken", "werkbon maken", "terugbellen", "offerte maken"];
}

function callUrgencyOptions() {
  return ["normaal", "hoog", "spoed"];
}

function createCustomerNote(customerId, note, followUpAction = "geen", source = "phone_call") {
  if (!customerId || !note) return null;
  state.customerNotes = state.customerNotes || [];
  const row = {
    id: uid("custnote"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId,
    created_by: currentUser()?.id || "",
    note,
    source,
    follow_up_action: followUpAction || "geen",
    created_at: new Date().toISOString(),
  };
  state.customerNotes.push(row);
  return row;
}

function createProjectFromCall(customer, form, action) {
  const now = new Date().toISOString();
  const urgency = form.get("urgency") || "normaal";
  const title = action === "appointment" ? "Afspraak uit telefoongesprek" : "Werkbon uit telefoongesprek";
  const project = {
    id: uid("project"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customer.id,
    customerId: customer.id,
    projectName: title,
    project_name: title,
    customer: customer.customer_name,
    customer_name: customer.customer_name,
    address: `${customer.address || ""}${customer.postal_code || customer.city ? `, ${customer.postal_code || ""} ${customer.city || ""}` : ""}`.trim(),
    postal_code: customer.postal_code || "",
    city: customer.city || "",
    phone: customer.phone || "",
    technician: currentUser()?.name || "",
    mechanicId: currentUser()?.id || "",
    assignedMechanicId: currentUser()?.id || "",
    assigned_mechanic_id: currentUser()?.id || "",
    workorder_number: nextWorkorderNumber(),
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: form.get("appointment_date") || now.slice(0, 10),
    selectedKitIds: ["M001"],
    selectedSourceIds: ["M001", GARAGE_BOX_SOURCE],
    sourceChoiceLabel: "Telefoongesprek",
    status: "aangemaakt",
    priority: urgency,
    source: "phone_call",
    description: form.get("note") || "",
    createdAt: now,
    created_at: now,
  };
  state.projects.push(project);
  return project;
}

function createPlanningFromCall(customer, form, project = null) {
  const date = form.get("appointment_date");
  const time = form.get("appointment_time");
  if (!date || !time) return null;
  const start = `${date}T${time}`;
  const endDate = new Date(`${start}:00`);
  endDate.setHours(endDate.getHours() + 1);
  const event = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customer.id,
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: currentUser()?.id || "",
    title: project ? workorderNumber(project) : "Afspraak uit telefoongesprek",
    description: form.get("note") || "",
    customer_name: customer.customer_name,
    address: customer.address || "",
    postal_code: customer.postal_code || "",
    city: customer.city || "",
    phone: customer.phone || "",
    start_datetime: start,
    end_datetime: endDate.toISOString().slice(0, 16),
    status: "concept",
    priority: form.get("urgency") || "normaal",
    notes: form.get("note") || "",
    created_by: currentUser()?.id || "",
    updated_at: new Date().toISOString(),
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(event);
  return event;
}

function saveCustomerFromCall(submitEvent, action) {
  submitEvent.preventDefault();
  action = action || submitEvent.target?.dataset?.action || "note";
  if (!canCreateCustomerFromCall()) return alert("Deze functie is niet ingeschakeld voor jouw account.");
  const form = new FormData(submitEvent.target);
  const phone = formatPhone(form.get("phone"));
  if (!phone) return alert("Telefoonnummer is verplicht.");
  const now = new Date().toISOString();
  let customer = findCustomerByPhone(phone);
  if (["appointment", "workorder"].includes(action) && (!form.get("appointment_date") || !form.get("appointment_time"))) return alert("Vul gewenste afspraakdatum en tijd in.");
  if (!customer) {
    const customerName = String(form.get("customer_name") || "").trim();
    if (!customerName) return alert("Klantnaam is verplicht voor een nieuwe klant.");
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: customerName,
      contact_person: customerName,
      phone,
      email: String(form.get("email") || "").trim(),
      address: String(form.get("address") || "").trim(),
      postal_code: String(form.get("postal_code") || "").trim(),
      city: String(form.get("city") || "").trim(),
      source: "phone_call",
      created_by: currentUser()?.id || "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
  }
  const note = String(form.get("note") || "").trim();
  const followUpAction = action === "appointment" ? "afspraak maken" : action === "workorder" ? "werkbon maken" : String(form.get("follow_up_action") || "geen");
  if (note || action !== "customer") createCustomerNote(customer.id, note || "Telefoongesprek geregistreerd.", followUpAction, "phone_call");
  let project = null;
  let planningEvent = null;
  if (action === "appointment") planningEvent = createPlanningFromCall(customer, form);
  if (action === "workorder") {
    project = createProjectFromCall(customer, form, action);
    planningEvent = createPlanningFromCall(customer, form, project);
  }
  if (planningEvent) {
    notifyPlanningChange(planningEvent, planningEvent.priority === "spoed" ? "emergency" : "planning_changed", planningEvent.priority === "spoed" ? "Spoedmelding" : "Afspraak uit telefoongesprek", "Er is een afspraak uit een telefoongesprek geregistreerd.", planningEvent.priority);
  }
  if (project) notifyWorkorderAssigned(project, planningEvent);
  saveState();
  ui.callPhoneLookup = "";
  if (project) location.hash = `#/project/${project.id}`;
  else location.hash = "#/start";
  render();
}

function renderCallCustomerForm() {
  if (!canCreateCustomerFromCall()) return `<div class="panel empty">Deze functie is niet ingeschakeld voor jouw account.</div>`;
  const phone = ui.callPhoneLookup || "";
  const existing = findCustomerByPhone(phone);
  const previousWorkorders = existing ? customerWorkorders(existing.id).slice(0, 5) : [];
  const previousNotes = existing ? customerNotes(existing.id).slice(0, 3) : [];
  const now = new Date().toISOString().slice(0, 16).replace("T", " ");
  return `<section class="panel call-panel">
    <div class="article-head">
      <div>
        <h2>Nieuwe klant uit telefoongesprek</h2>
        <p>Registreer snel een beller, notitie en eventueel afspraak of werkbon.</p>
      </div>
      <span class="badge warn">MVP telefoonnummer plakken</span>
    </div>
    <form class="form-grid" onsubmit="saveCustomerFromCall(event, 'note')">
      <label>Telefoonnummer <input name="phone" required value="${escapeAttr(phone)}" onblur="setCallPhoneLookup(this.value)" placeholder="06 1234 5678" /></label>
      <label>Klantnaam <input name="customer_name" ${existing ? "" : "required"} value="${escapeAttr(existing?.customer_name || "")}" /></label>
      <label>Adres <input name="address" value="${escapeAttr(existing?.address || "")}" /></label>
      <label>Postcode <input name="postal_code" value="${escapeAttr(existing?.postal_code || "")}" /></label>
      <label>Plaats <input name="city" value="${escapeAttr(existing?.city || "")}" /></label>
      <label>E-mail <input name="email" type="email" value="${escapeAttr(existing?.email || "")}" /></label>
      <label>Gesprekstijd <input value="${escapeAttr(now)}" disabled /></label>
      <label>Urgentie <select name="urgency">${callUrgencyOptions().map((urgency) => `<option>${urgency}</option>`).join("")}</select></label>
      <label>Gewenste afspraakdatum <input name="appointment_date" type="date" /></label>
      <label>Gewenste tijd <input name="appointment_time" type="time" /></label>
      <label>Vervolgactie <select name="follow_up_action">${callFollowUpOptions().map((option) => `<option>${option}</option>`).join("")}</select></label>
      <label class="full">Telefoongesprek notitie <textarea name="note" placeholder="Waar belde de klant over?"></textarea></label>
      <div class="button-row full">
        <button class="btn secondary" type="submit" onclick="this.form.dataset.action='customer'">Alleen klant opslaan</button>
        <button class="btn success" type="submit" onclick="this.form.dataset.action='note'">Klant + notitie opslaan</button>
        <button class="btn secondary" type="submit" onclick="this.form.dataset.action='appointment'">Klant + afspraak maken</button>
        <button class="btn success" type="submit" onclick="this.form.dataset.action='workorder'">Klant + werkbon maken</button>
      </div>
    </form>
  </section>
  ${existing ? `<section class="panel call-existing">
    <div class="article-head"><div><h2>Bestaande klant gevonden</h2><p>${escapeHtml(existing.customer_name)} - ${escapeHtml(existing.address || "-")}</p></div><span class="badge ok">Telefoon match</span></div>
    <div class="meta-grid">
      <div class="meta"><span>Klant</span><strong>${escapeHtml(existing.customer_name)}</strong></div>
      <div class="meta"><span>Telefoon</span><strong>${escapeHtml(existing.phone || "-")}</strong></div>
      <div class="meta"><span>Adres</span><strong>${escapeHtml(existing.address || "-")} ${escapeHtml(existing.postal_code || "")} ${escapeHtml(existing.city || "")}</strong></div>
      <div class="meta"><span>Eerdere werkbonnen</span><strong>${previousWorkorders.length}</strong></div>
    </div>
    <div class="button-row">
      <button class="btn secondary" type="button" onclick="document.querySelector('.call-panel form').dataset.action='note'; document.querySelector('.call-panel form').requestSubmit()">Nieuwe notitie toevoegen</button>
      <button class="btn secondary" type="button" onclick="document.querySelector('.call-panel form').dataset.action='appointment'; document.querySelector('.call-panel form').requestSubmit()">Nieuwe afspraak maken</button>
      <button class="btn success" type="button" onclick="document.querySelector('.call-panel form').dataset.action='workorder'; document.querySelector('.call-panel form').requestSubmit()">Nieuwe werkbon maken</button>
    </div>
    <div class="call-history">
      <div><h3>Eerdere werkbonnen</h3>${previousWorkorders.length ? previousWorkorders.map((project) => `<p>${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || "-")} - ${safeDate(project.created_at || project.createdAt)}</p>`).join("") : `<p class="muted">Geen eerdere werkbonnen.</p>`}</div>
      <div><h3>Notities</h3>${previousNotes.length ? previousNotes.map((note) => `<p>${safeDate(note.created_at)} - ${escapeHtml(note.note)}</p>`).join("") : `<p class="muted">Geen notities.</p>`}</div>
    </div>
  </section>` : ""}`;
}

function renderHome() {
  const projects = visibleProjects();
  const open = projects.filter(isProjectOpen).length;
  const done = projects.filter(isProjectCompleted).length;
  const replenish = projects.reduce((sum, project) => sum + totalUsed(project.id), 0);
  const planning = mechanicPlanningEvents();
  return `
    ${canCreateCustomerFromCall() ? `<section class="panel" style="margin-bottom:14px"><div class="article-head"><div><h2>Telefoongesprek</h2><p>Maak snel een klant, notitie, afspraak of werkbon aan vanuit een telefoonnummer.</p></div><a class="btn success" href="#/call-customer">Nieuwe klant uit telefoongesprek</a></div></section>` : ""}
    ${planning.length ? `<section class="panel" style="margin-bottom:14px"><h2>Mijn planning</h2>${renderMechanicPlanningList(planning)}</section>` : ""}
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open projecten</span><strong>${open}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${done}</strong></div>
      <div class="stat-card"><span>Aan te vullen</span><strong>${replenish}</strong></div>
      <div class="stat-card"><span>Omgeving</span><strong>Start</strong></div>
    </section>
    <section class="home-grid grid">
      ${homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+")}
      ${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "◷")}
      ${homeTile("completed", "Afgeronde projecten", "Bekijk rapporten, CSV en PDF.", "✓")}
      ${isOfficeAdmin() ? homeTile("admin", "Admin", "Bedrijfsbeheer en planning.", "A") : ""}
    </section>
  `;
}

function renderUsers() {
  const users = state.users.filter((user) => !user.deleted && (isPlatformSuperAdmin() || isSameCompany(user)));
  const roleOptions = [
    [ROLES.MECHANIC, "Mechanic"],
    [ROLES.COMPANY_ADMIN, "Company Admin"],
    ...(isPlatformSuperAdmin() ? [[ROLES.PLATFORM_ADMIN, "Platform Admin"]] : []),
  ];
  const companyOptions = (state.companies || []).filter((company) => company.active !== false);
  const pendingDeleteUser = ui.pendingDeleteUserId ? byId(state.users, ui.pendingDeleteUserId) : null;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Nieuwe gebruiker</h2>
      <form class="form-grid" onsubmit="addUser(event)">
        <label>Naam <input name="name" required /></label>
        <label>E-mail <input name="email" type="email" required /></label>
        <label>Wachtwoord <input name="password" type="text" required /></label>
        ${isPlatformSuperAdmin() ? `<label>Company <select name="company_id"><option value="">Geen company (alleen platform_admin)</option>${companyOptions.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}</select></label>` : ""}
        <label>Rol <select name="role" required>${roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
        <button class="btn success" type="submit">Gebruiker aanmaken</button>
      </form>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Actief</th><th>Naam</th><th>E-mail</th><th>Company</th><th>Rol</th><th>Mag klant aanmaken uit telefoongesprek</th><th>Actie</th></tr></thead>
      <tbody>${users.map((user) => `<tr>
        <td><input type="checkbox" ${user.active ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /></td>
        <td><input value="${escapeAttr(user.name)}" onchange="updateUser('${user.id}', 'name', this.value)" /></td>
        <td>${escapeHtml(user.email)}</td>
        <td>${escapeHtml(user.role === ROLES.PLATFORM_ADMIN ? "Platform" : byId(state.companies || [], recordCompanyId(user))?.name || recordCompanyId(user))}</td>
        <td><select onchange="updateUser('${user.id}', 'role', this.value)">${roleOptions.map(([value, label]) => `<option value="${value}" ${user.role === value ? "selected" : ""}>${label}</option>`).join("")}</select></td>
        <td>${user.role === ROLES.MECHANIC ? `<select onchange="updateUser('${user.id}', 'can_create_customer_from_call', this.value === 'true')"><option value="false" ${!user.can_create_customer_from_call ? "selected" : ""}>Nee</option><option value="true" ${user.can_create_customer_from_call ? "selected" : ""}>Ja</option></select>` : "-"}</td>
        <td><div class="button-row" style="margin-top:0"><button class="btn secondary" type="button" onclick="saveUserRow()">Opslaan</button><button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active ? "Deactiveren" : "Activeren"}</button><button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button></div></td>
      </tr>`).join("")}</tbody>
    </table></div>
    ${pendingDeleteUser ? `<section class="modal-backdrop"><div class="panel confirm-modal"><h2>Gebruiker verwijderen</h2><p>Weet je zeker dat je deze gebruiker wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.</p><div class="button-row"><button class="btn secondary" type="button" onclick="cancelDeleteUser()">Annuleren</button><button class="btn danger" type="button" onclick="confirmDeleteUser()">Definitief verwijderen</button></div></div></section>` : ""}`;
}

function updateUser(userId, field, value) {
  const user = byId(state.users, userId);
  if (!canManageUser(user)) return;
  if (field === "role" && value === ROLES.PLATFORM_ADMIN && !isPlatformSuperAdmin()) return;
  if (!isPlatformSuperAdmin() && field === "role" && value !== ROLES.MECHANIC && value !== ROLES.COMPANY_ADMIN) return;
  if (field === "can_create_customer_from_call" && user.role !== ROLES.MECHANIC) return;
  user[field] = ["active", "can_create_customer_from_call"].includes(field) ? Boolean(value) : value;
  saveState();
  render();
}

function renderCustomers() {
  const search = String(ui.customerSearch || "").toLowerCase();
  const rows = companyScoped(state.customers || [])
    .filter((customer) => !search || [customer.customer_name, customer.contact_person, customer.address, customer.postal_code, customer.city, customer.phone, customer.email, customer.source].join(" ").toLowerCase().includes(search))
    .sort((a, b) => String(a.customer_name || "").localeCompare(String(b.customer_name || "")));
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="article-head"><div><h2>Klanten</h2><p>Beheer klanten binnen ${escapeHtml(currentCompany()?.name || "eigen bedrijf")}.</p></div><button class="btn success" type="button" onclick="openCustomerEdit('new')">Klant toevoegen</button></div>
      <label>Zoeken <input value="${escapeAttr(ui.customerSearch || "")}" oninput="ui.customerSearch=this.value; render()" placeholder="Zoek klant, plaats, telefoon of bron" /></label>
    </section>
    <div class="table-wrap"><table><thead><tr><th>Actief</th><th>Klant</th><th>Adres</th><th>Telefoon</th><th>E-mail</th><th>Bron</th><th>Aangemaakt door</th><th>Laatste notitie</th><th>Vervolgactie</th><th>Actie</th></tr></thead><tbody>${rows.map((customer) => {
      const note = latestCustomerNote(customer.id);
      return `<tr><td><input type="checkbox" ${customer.active !== false ? "checked" : ""} onchange="updateCustomer('${customer.id}', 'active', this.checked)" /></td><td>${escapeHtml(customer.customer_name)}</td><td>${escapeHtml(customer.address || "-")} ${escapeHtml(customer.postal_code || "")} ${escapeHtml(customer.city || "")}</td><td>${escapeHtml(customer.phone || "-")}</td><td>${escapeHtml(customer.email || "-")}</td><td>${escapeHtml(customer.source || "manual")}</td><td>${escapeHtml(byId(state.users || [], customer.created_by)?.name || "-")}</td><td>${escapeHtml(note?.note || customer.notes || "-")}</td><td>${escapeHtml(note?.follow_up_action || "-")}</td><td><div class="button-row" style="margin-top:0"><button class="btn secondary" type="button" onclick="openCustomerEdit('${customer.id}')">Bewerken</button><button class="btn warn" type="button" onclick="updateCustomer('${customer.id}', 'active', ${customer.active === false ? "true" : "false"})">${customer.active === false ? "Activeren" : "Deactiveren"}</button><button class="btn danger" type="button" onclick="deleteCustomer('${customer.id}')">Verwijderen</button></div></td></tr>`;
    }).join("")}</tbody></table></div>
    ${ui.editingCustomerId ? renderCustomerModal(ui.editingCustomerId) : ""}`;
}

function pageTitle(route) {
  if (route.startsWith("login")) return ["WerkbonSysteem.nl", "Loginportaal voor werkbonnen, monteurs, voorraad en bestellingen."];
  if (route.startsWith("call-customer")) return ["Nieuwe klant uit telefoongesprek", "Maak snel een klant, notitie, afspraak of werkbon aan."];
  if (route.startsWith("notifications")) return ["Meldingen", "Nieuwe werkbonnen, planningwijzigingen en spoedmeldingen."];
  if (route.startsWith("start")) return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
  if (route.startsWith("new")) return ["Nieuw project", "Maak direct een registratie aan."];
  if (route.startsWith("active")) return ["Lopende projecten", "Open projecten die nog ingevuld worden."];
  if (route.startsWith("completed")) return ["Afgeronde projecten", "Projectregistraties en aanvullingen."];
  if (route.startsWith("project")) return ["Monteurscherm", "Snel onderdelen registreren."];
  if (route.startsWith("summary")) return ["Project afronden", "Controleer de aanvullijst en aantallen."];
  if (route.startsWith("admin") || route.startsWith("office")) return ["Admin", "Bedrijfsportal voor kosten, voorraad, gebruikers en bestellingen."];
  if (route.startsWith("platform")) return ["Platform Admin Dashboard", "Beheer tenants, gebruikers, abonnementen en platformgebruik."];
  return ["WerkbonSysteem.nl", "Multi-company werkbonplatform."];
}

function renderBottomNav(route) {
  const unread = unreadNotificationCount();
  const notificationLabel = unread ? `Meldingen (${unread})` : "Meldingen";
  const roleItems = isPlatformSuperAdmin()
    ? [["platform", "P", "Platform"]]
    : isOfficeAdmin()
      ? [["start", "S", "Start"], ["admin", "A", "Admin"]]
      : [["start", "S", "Start"], ["notifications", "M", notificationLabel]];
  return `<nav class="bottom-nav">${roleItems
    .map(([id, icon, label]) => `<a class="${route.startsWith(id) ? "active" : ""}" href="#/${id}"><b>${icon}</b>${label}</a>`)
    .join("")}</nav>`;
}

function renderRoute(route) {
  const [name, id] = route.split("/");
  if (name === "login") return renderLogin();
  if (!currentUser()) return renderLogin();
  if (name === "platform") return isPlatformSuperAdmin() ? renderPlatform(id) : renderNoOfficeAccess();
  if ((name === "admin" || name === "office" || name === "manage") && !isOfficeAdmin()) return renderNoOfficeAccess();
  if (isPlatformSuperAdmin() && name !== "platform") return renderPlatform();
  if (name === "notifications") return isMechanic() ? renderNotificationsCenter() : renderNoOfficeAccess();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "start") return renderHome();
  if (name === "new") return renderNewProject();
  if (name === "active") return renderProjectList("Open");
  if (name === "completed") return renderProjectList("Afgerond");
  if (name === "project") return renderTechnician(id);
  if (name === "summary") return renderSummary(id);
  if (name === "admin" || name === "office") return renderOffice(id);
  if (name === "manage") return renderManage();
  return renderHome();
}

function normalizeWorkOrderPhoto(photo, project) {
  const companyId = recordCompanyId(project);
  const uploadedAt = photo.uploaded_at || photo.uploadedAt || photo.createdAt || new Date().toISOString();
  return {
    id: photo.id || uid("photo"),
    company_id: photo.company_id || photo.companyId || companyId,
    companyId: photo.companyId || photo.company_id || companyId,
    workorder_id: photo.workorder_id || photo.workorderId || project.id,
    category: photo.category || photo.type || "vrije foto",
    type: photo.type || photo.category || "vrije foto",
    file_name: photo.file_name || photo.fileName || photo.name || "foto",
    name: photo.name || photo.file_name || photo.fileName || "foto",
    data_url: photo.data_url || photo.dataUrl || "",
    dataUrl: photo.dataUrl || photo.data_url || "",
    blob_url: photo.blob_url || photo.blobUrl || "",
    uploaded_by: photo.uploaded_by || photo.uploadedBy || currentUser()?.id || "",
    uploaded_at: uploadedAt,
    createdAt: photo.createdAt || uploadedAt,
  };
}

function storedWorkOrderPhotos(project) {
  const workOrder = ensureWorkOrder(project);
  if (!workOrder) return [];
  workOrder.photos = (workOrder.photos || [])
    .map((photo) => normalizeWorkOrderPhoto(photo, project))
    .filter((photo) => photo.data_url || photo.dataUrl || photo.blob_url);
  return workOrder.photos;
}

function photoSrc(photo) {
  return photo.data_url || photo.dataUrl || photo.blob_url || "";
}

function photoTimestamp(photo) {
  return String(photo.uploaded_at || photo.createdAt || "").replace("T", " ").slice(0, 16) || "-";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function addWorkOrderPhotos(projectId, inputOrFiles, category = "vrije foto") {
  const project = byId(state.projects, projectId);
  if (!project || !canAccessProject(project)) return;
  const workOrder = ensureWorkOrder(project);
  const files = Array.from(inputOrFiles?.files || inputOrFiles || []);
  if (!files.length) return;
  const selectedCategory = category || document.getElementById(`photo-category-${projectId}`)?.value || "vrije foto";
  const uploadedAt = new Date().toISOString();
  try {
    const photos = await Promise.all(files.map(async (file) => {
      const dataUrl = await readFileAsDataUrl(file);
      return {
        id: uid("photo"),
        company_id: recordCompanyId(project),
        companyId: recordCompanyId(project),
        workorder_id: project.id,
        category: selectedCategory,
        type: selectedCategory,
        file_name: file.name,
        name: file.name,
        data_url: dataUrl,
        dataUrl,
        uploaded_by: currentUser()?.id || "",
        uploaded_at: uploadedAt,
        createdAt: uploadedAt,
      };
    }));
    workOrder.photos = [...storedWorkOrderPhotos(project), ...photos];
    workOrder.photo_count = workOrder.photos.length;
    project.photo_count = workOrder.photos.length;
    saveState();
    if (inputOrFiles?.value !== undefined) inputOrFiles.value = "";
    render();
  } catch {
    alert("Foto uploaden is mislukt. Probeer opnieuw.");
  }
}

function removeWorkOrderPhoto(projectId, photoRef) {
  const project = byId(state.projects, projectId);
  if (!project || !canAccessProject(project)) return;
  const workOrder = ensureWorkOrder(project);
  const photos = storedWorkOrderPhotos(project);
  const ref = String(photoRef);
  workOrder.photos = photos.filter((photo, index) => photo.id !== ref && String(index) !== ref);
  workOrder.photo_count = workOrder.photos.length;
  project.photo_count = workOrder.photos.length;
  saveState();
  render();
}

function renderWorkOrderPhotoGrid(project) {
  const photos = storedWorkOrderPhotos(project);
  if (!photos.length) return `<div class="empty">Nog geen foto's geupload.</div>`;
  return `<div class="photo-grid">${photos.map((photo) => `<div class="photo-thumb">
    <img src="${escapeAttr(photoSrc(photo))}" alt="${escapeAttr(photo.file_name || "Werkbon foto")}" />
    <strong>${escapeHtml(photo.file_name || "foto")}</strong>
    <span>Categorie: ${escapeHtml(photo.category || "vrije foto")}</span>
    <span>Uploadtijd: ${escapeHtml(photoTimestamp(photo))}</span>
    <button class="btn secondary" type="button" onclick="removeWorkOrderPhoto('${project.id}', '${photo.id}')">Verwijderen</button>
  </div>`).join("")}</div>`;
}

function renderWorkOrderForm(project) {
  const workOrder = ensureWorkOrder(project);
  const photos = storedWorkOrderPhotos(project);
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
        <label>Pauze minuten <input type="number" min="0" value="${escapeAttr(workOrder.hours.breakMinutes)}" onchange="setWorkOrderField('${project.id}', 'hours.breakMinutes', this.value)" /></label>
        <label>Oplossing uitgevoerd <input value="${escapeAttr(workOrder.solution)}" onchange="setWorkOrderField('${project.id}', 'solution', this.value)" /></label>
        <label>Opmerkingen <input value="${escapeAttr(workOrder.notes)}" onchange="setWorkOrderField('${project.id}', 'notes', this.value)" /></label>
      </div>
      ${gasRequired ? renderCoKeurFields(project, workOrder) : ""}
      ${renderChecklistAnswers(project, workOrder)}
      <section style="margin-top:14px">
        <h3>Foto's</h3>
        <p>${Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1)) === 0 ? "Foto's optioneel" : `Minimaal ${state.checklistSettings.minRequiredPhotos} foto verplicht`}. Huidig: ${photos.length}</p>
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
          <label>Foto uploaden <input type="file" accept="image/*" capture="environment" multiple onchange="addWorkOrderPhotos('${project.id}', this, document.getElementById('photo-category-${project.id}')?.value)" /></label>
        </div>
        ${renderWorkOrderPhotoGrid(project)}
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

function validateWorkOrder(project) {
  ensureWorkOrderSettings();
  const workOrder = ensureWorkOrder(project);
  const storedPhotos = storedWorkOrderPhotos(project);
  const errors = [];
  if (!project) errors.push("Er is geen project geselecteerd.");
  if (!workOrder.gasApplianceWork) errors.push("Beantwoord: Zijn er werkzaamheden geweest aan een gastoestel?");
  if (!workOrder.materialsUsed) errors.push("Beantwoord: Zijn er materialen gebruikt op dit project?");
  if (workOrder.materialsUsed === "ja") {
    const rows = materialUsages(project.id);
    const completeRows = rows.filter((usage) => usage.article && usage.usedQuantity > 0);
    const incompleteRows = rows.filter((usage) => !usage.article || usage.usedQuantity <= 0);
    if (!completeRows.length) errors.push("Voeg minimaal een materiaal toe of kies Nee.");
    if (incompleteRows.length) errors.push("Voltooi of verwijder open materiaalregels.");
  }
  if (state.checklistSettings.requiredHours && (!workOrder.hours.startTime || !workOrder.hours.endTime || workOrder.hours.totalHours <= 0)) errors.push("Urenregistratie is verplicht.");
  if (!workOrder.customerSignature) errors.push("Handtekening opdrachtgever is verplicht.");
  if (storedPhotos.length < state.checklistSettings.minRequiredPhotos) errors.push("Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.");
  if (state.checklistSettings.mechanicSignatureRequired && !workOrder.mechanicSignature) errors.push("Handtekening monteur is verplicht.");
  state.checklistSettings.checklistItems.filter((item) => item.active && item.required).forEach((item) => {
    if (!workOrder.checklistAnswers[item.id]) errors.push(`Checklistpunt verplicht: ${item.label}`);
  });
  if (workOrder.gasApplianceWork === "ja") {
    if (!numericValue(workOrder.measurements.CO_before_ppm) || !numericValue(workOrder.measurements.CO_after_ppm)) errors.push("CO meting opstellingsruimte voor en na werkzaamheden is verplicht.");
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

function userRole(user = currentUser()) {
  return user?.role === "platform_super_admin" ? ROLES.PLATFORM_ADMIN : user?.role === "office_admin" ? ROLES.COMPANY_ADMIN : user?.role;
}

function isPlatformSuperAdmin() {
  return userRole() === ROLES.PLATFORM_ADMIN;
}

function isCompanyAdmin() {
  return userRole() === ROLES.COMPANY_ADMIN;
}

function isTenantAdmin() {
  return isCompanyAdmin();
}

function isOfficeAdmin() {
  return isTenantAdmin();
}

function isMechanic() {
  return userRole() === ROLES.MECHANIC;
}

function defaultRouteForUser(user = currentUser()) {
  const role = userRole(user);
  if (role === ROLES.PLATFORM_ADMIN) return "#/platform";
  if (role === ROLES.COMPANY_ADMIN) return "#/admin";
  return "#/start";
}

function login(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  let user = state.users.find((item) => String(item.email || "").toLowerCase() === email && item.password === password && item.active !== false && !item.deleted);
  if (!user && email === "platform@werkbon-systeem.nl" && password === "platform123") {
    user = state.users.find((item) => String(item.email || "").toLowerCase() === email);
    if (!user) {
      user = { id: "user-platform-super-admin", name: "Platform Admin", email, password, role: ROLES.PLATFORM_ADMIN, company_id: null, companyId: null, active: true };
      state.users.push(user);
    }
    Object.assign(user, { password: "platform123", role: ROLES.PLATFORM_ADMIN, company_id: null, companyId: null, active: true, deleted: false });
  }
  if (!user) {
    document.getElementById("login-error").textContent = "E-mail of wachtwoord klopt niet.";
    return;
  }
  if (userRole(user) !== ROLES.PLATFORM_ADMIN) {
    const company = byId(state.companies || [], recordCompanyId(user));
    if (company && company.active === false) {
      document.getElementById("login-error").textContent = "Dit bedrijfsportaal is niet actief.";
      return;
    }
  }
  state.session = { userId: user.id, loggedInAt: new Date().toISOString() };
  saveState();
  location.hash = defaultRouteForUser(user);
}

function quickLogin(email) {
  const normalizedEmail = String(email || "").toLowerCase();
  let user = state.users.find((item) => String(item.email || "").toLowerCase() === normalizedEmail && item.active !== false && !item.deleted);
  if (normalizedEmail === "platform@werkbon-systeem.nl") {
    user = user || state.users.find((item) => String(item.email || "").toLowerCase() === normalizedEmail);
    if (!user) {
      user = { id: "user-platform-super-admin", name: "Platform Admin", email: normalizedEmail, password: "platform123", role: ROLES.PLATFORM_ADMIN, company_id: null, companyId: null, active: true };
      state.users.push(user);
    }
    Object.assign(user, { password: "platform123", role: ROLES.PLATFORM_ADMIN, company_id: null, companyId: null, active: true, deleted: false });
  }
  if (!user) return;
  if (userRole(user) !== ROLES.PLATFORM_ADMIN) {
    const company = byId(state.companies || [], recordCompanyId(user));
    if (company && company.active === false) return;
  }
  state.session = { userId: user.id, loggedInAt: new Date().toISOString() };
  saveState();
  location.hash = defaultRouteForUser(user);
}

function planningMechanicId(event) {
  return event?.mechanic_id || event?.mechanicId || event?.assignedMechanicId || "";
}

function mechanicPlanningEvents() {
  const user = currentUser();
  if (!user || userRole(user) !== ROLES.MECHANIC) return [];
  return companyScoped(state.planningEvents || [])
    .filter((event) => planningMechanicId(event) === user.id)
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function renderMechanicPlanningList(rows) {
  const today = dateKey(new Date().toISOString());
  const weekKeys = new Set(weekDays(new Date()).map((day) => dateKey(day.toISOString())));
  const todayRows = rows.filter((event) => dateKey(event.start_datetime) === today);
  const weekRows = rows.filter((event) => dateKey(event.start_datetime) !== today && weekKeys.has(dateKey(event.start_datetime)));
  const renderCard = (event) => `<article class="planning-card ${statusClass(event.status)}">
    <div class="article-head">
      <div>
        <h3>${safeDate(event.start_datetime)} ${eventDateTimeLabel(event)}</h3>
        <p>${escapeHtml(event.customer_name || "-")} - ${escapeHtml(event.address || "-")} ${escapeHtml(event.postal_code || "")} ${escapeHtml(event.city || "")}</p>
      </div>
      <span class="badge">${escapeHtml(event.status || "ingepland")}</span>
    </div>
    <div class="meta-grid">
      <div class="meta"><span>Klant</span><strong>${escapeHtml(event.customer_name || "-")}</strong></div>
      <div class="meta"><span>Adres</span><strong>${escapeHtml(event.address || "-")}</strong></div>
      <div class="meta"><span>Tijd</span><strong>${eventDateTimeLabel(event)}</strong></div>
      <div class="meta"><span>Status</span><strong>${escapeHtml(event.status || "-")}</strong></div>
    </div>
    <div class="button-row">
      ${event.project_id || event.workorder_id ? `<a class="btn success" href="#/project/${event.project_id || event.workorder_id}">Open werkbon</a>` : ""}
      <a class="btn secondary" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(`${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`)}">Route</a>
      ${["onderweg", "bezig", "afgerond"].map((status) => `<button class="btn secondary" type="button" onclick="updatePlanningEvent('${event.id}', 'status', '${status}')">${status}</button>`).join("")}
    </div>
  </article>`;
  return `<div class="mechanic-agenda">
    <section class="mechanic-agenda-group"><h3>Mijn planning vandaag</h3>${todayRows.length ? todayRows.map(renderCard).join("") : `<p class="muted">Geen afspraken vandaag.</p>`}</section>
    <section class="mechanic-agenda-group"><h3>Mijn planning deze week</h3>${weekRows.length ? weekRows.map(renderCard).join("") : `<p class="muted">Geen andere afspraken deze week.</p>`}</section>
  </div>`;
}

function renderChecklistSettings() {
  ensureWorkOrderSettings();
  const settings = state.checklistSettings;
  return `
    <section class="panel" style="margin-bottom:14px">
      <div class="article-head">
        <div><h2>Checklist & CO-keur instellingen</h2><p>Beheer verplichte werkbonvelden, fotobewijs en algemene controlepunten.</p></div>
        <span class="badge ok">Admin</span>
      </div>
      <div class="form-grid">
        <label>Minimum aantal foto's <input type="number" min="0" value="${settings.minRequiredPhotos ?? 1}" onchange="updateChecklistSetting('minRequiredPhotos', this.value)" /></label>
        <label>CO-keur template verplicht <select onchange="updateChecklistSetting('coTemplateRequired', this.value === 'true')"><option value="true" ${settings.coTemplateRequired ? "selected" : ""}>Ja</option><option value="false" ${!settings.coTemplateRequired ? "selected" : ""}>Nee</option></select></label>
        <label>Urenregistratie verplicht <select onchange="updateChecklistSetting('requiredHours', this.value === 'true')"><option value="true" ${settings.requiredHours ? "selected" : ""}>Ja</option><option value="false" ${!settings.requiredHours ? "selected" : ""}>Nee</option></select></label>
        <label>Monteur-handtekening verplicht <select onchange="updateChecklistSetting('mechanicSignatureRequired', this.value === 'true')"><option value="false" ${!settings.mechanicSignatureRequired ? "selected" : ""}>Nee</option><option value="true" ${settings.mechanicSignatureRequired ? "selected" : ""}>Ja</option></select></label>
      </div>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <h2>Checklistpunt toevoegen</h2>
      <form class="form-grid" onsubmit="addChecklistItem(event)">
        <label>Controlepunt <input name="label" required placeholder="Bijv. expansievat gecontroleerd" /></label>
        <label>Verplicht <select name="required"><option value="false">Nee</option><option value="true">Ja</option></select></label>
        <button class="btn success" type="submit">Toevoegen</button>
      </form>
    </section>
    <div class="table-wrap"><table><thead><tr><th>Actief</th><th>Controlepunt</th><th>Verplicht</th><th>Actie</th></tr></thead><tbody>${settings.checklistItems.map((item) => `<tr><td><input type="checkbox" ${item.active ? "checked" : ""} onchange="updateChecklistItem('${item.id}', 'active', this.checked)" /></td><td><input value="${escapeAttr(item.label)}" onchange="updateChecklistItem('${item.id}', 'label', this.value)" /></td><td><input type="checkbox" ${item.required ? "checked" : ""} onchange="updateChecklistItem('${item.id}', 'required', this.checked)" /></td><td><button class="btn secondary" onclick="deleteChecklistItem('${item.id}')">Verwijderen</button></td></tr>`).join("")}</tbody></table></div>`;
}

function updateChecklistSetting(field, value) {
  ensureWorkOrderSettings();
  state.checklistSettings[field] = field === "minRequiredPhotos" ? Math.max(0, Number(value ?? 0)) : value;
  saveState();
  render();
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
    if (!completeRows.length) errors.push("Voeg minimaal een materiaal toe of kies Nee.");
    if (incompleteRows.length) errors.push("Voltooi of verwijder open materiaalregels.");
  }
  if (state.checklistSettings.requiredHours && (!workOrder.hours.startTime || !workOrder.hours.endTime || workOrder.hours.totalHours <= 0)) errors.push("Urenregistratie is verplicht.");
  if (!workOrder.customerSignature) errors.push("Handtekening opdrachtgever is verplicht.");
  const requiredPhotoCount = Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1));
  const storedPhotos = storedWorkOrderPhotos(project);
  if (requiredPhotoCount > 0 && storedPhotos.length < requiredPhotoCount) errors.push("Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.");
  if (state.checklistSettings.mechanicSignatureRequired && !workOrder.mechanicSignature) errors.push("Handtekening monteur is verplicht.");
  state.checklistSettings.checklistItems.filter((item) => item.active && item.required).forEach((item) => {
    if (!workOrder.checklistAnswers[item.id]) errors.push(`Checklistpunt verplicht: ${item.label}`);
  });
  if (workOrder.gasApplianceWork === "ja") {
    if (!numericValue(workOrder.measurements.CO_before_ppm) || !numericValue(workOrder.measurements.CO_after_ppm)) errors.push("CO meting opstellingsruimte voor en na werkzaamheden is verplicht.");
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

function paymentQuoteSettings() {
  const settings = companySettings();
  return {
    ...settings,
    standaard_btw_percentage: Number(settings.standaard_btw_percentage ?? settings.default_vat_percent ?? 21),
    standaard_voorrijkosten: Number(settings.standaard_voorrijkosten ?? settings.default_callout_fee ?? 45),
    standaard_uurtarief: Number(settings.standaard_uurtarief ?? defaultHourlyRate().sell_rate ?? 85),
  };
}

function defaultPricingCategories(companyId = currentCompanyId() || DEFAULT_COMPANY_ID) {
  const now = new Date().toISOString();
  const rows = [
    ["storing", "Storing", "Storingswerk met standaard voorrijkosten.", 40, 55, 25, 45, 95, 35, true],
    ["onderhoud", "Onderhoud", "Regulier onderhoud en service.", 30, 45, 20, 25, 75, 35, false],
    ["co-keur", "CO-keur", "CO-keur controle en meetrapport.", 35, 50, 20, 35, 85, 35, false],
    ["spoed", "Spoed", "Spoedmelding met toeslag.", 45, 60, 30, 65, 115, 40, false],
    ["avond-weekend", "Avond/weekend", "Avond- en weekendwerk.", 45, 65, 30, 75, 125, 40, false],
  ];
  return rows.map(([slug, name, description, material, labor, other, callout, sellRate, costRate, isDefault]) => ({
    id: `pc-${companyId}-${slug}`,
    company_id: companyId,
    companyId: companyId,
    name,
    description,
    active: true,
    is_default: isDefault,
    material_margin_percent: material,
    labor_margin_percent: labor,
    other_cost_margin_percent: other,
    callout_fee: callout,
    callout_fee_vat_percent: 21,
    default_hourly_sell_rate: sellRate,
    internal_hourly_cost_rate: costRate,
    vat_percent: 21,
    emergency_surcharge_percent: slug === "spoed" ? 25 : 0,
    evening_weekend_surcharge_percent: slug === "avond-weekend" ? 35 : 0,
    created_at: now,
    updated_at: now,
  }));
}

function ensurePricingCategories() {
  state.pricing_categories = state.pricing_categories || [];
  const companyId = currentCompanyId() || DEFAULT_COMPANY_ID;
  if (!state.pricing_categories.some((category) => recordCompanyId(category) === companyId)) {
    state.pricing_categories.push(...defaultPricingCategories(companyId));
  }
  return state.pricing_categories;
}

function activePricingCategories() {
  ensurePricingCategories();
  return companyScoped(state.pricing_categories || []).filter((category) => category.active !== false);
}

function defaultPricingCategory() {
  const rows = activePricingCategories();
  return rows.find((category) => category.is_default) || rows[0] || defaultPricingCategories()[0];
}

function pricingCategoryById(categoryId) {
  ensurePricingCategories();
  return companyScoped(state.pricing_categories || []).find((category) => category.id === categoryId) || defaultPricingCategory();
}

function snapshotPricingCategory(category) {
  const source = category || defaultPricingCategory();
  return {
    pricing_category_id: source.id,
    pricing_category_name: source.name,
    callout_fee: Number(source.callout_fee || 0),
    vat_percent: Number(source.vat_percent ?? 21),
    material_margin_percent: Number(source.material_margin_percent ?? 35),
    labor_margin_percent: Number(source.labor_margin_percent ?? 0),
    other_cost_margin_percent: Number(source.other_cost_margin_percent ?? 0),
    callout_fee_vat_percent: Number(source.callout_fee_vat_percent ?? source.vat_percent ?? 21),
    default_hourly_sell_rate: Number(source.default_hourly_sell_rate ?? paymentQuoteSettings().standaard_uurtarief ?? 85),
    internal_hourly_cost_rate: Number(source.internal_hourly_cost_rate ?? 35),
    emergency_surcharge_percent: Number(source.emergency_surcharge_percent ?? 0),
    evening_weekend_surcharge_percent: Number(source.evening_weekend_surcharge_percent ?? 0),
  };
}

function applyPricingSnapshot(target, categoryId) {
  const snapshot = snapshotPricingCategory(pricingCategoryById(categoryId));
  Object.assign(target, snapshot);
  return snapshot;
}

function pricingCategoryOptions(selectedId = "") {
  const selected = selectedId || defaultPricingCategory()?.id || "";
  return activePricingCategories().map((category) => `<option value="${category.id}" ${category.id === selected ? "selected" : ""}>${escapeHtml(category.name)}</option>`).join("");
}

function renderPricingCategories() {
  const rows = companyScoped(ensurePricingCategories());
  return `<section class="panel" style="margin-bottom:14px">
    <div class="article-head"><div><h2>Categorieën</h2><p>Prijs- en margeprofielen voor werkbonnen, offertes en afrekeningen.</p></div><span class="badge ok">Admin</span></div>
    <form class="form-grid" onsubmit="addPricingCategory(event)">
      <label>Naam <input name="name" required placeholder="Storing" /></label>
      <label>Omschrijving <input name="description" /></label>
      <label>Materiaal marge % <input name="material_margin_percent" type="number" step="0.01" value="40" /></label>
      <label>Uren marge % <input name="labor_margin_percent" type="number" step="0.01" value="55" /></label>
      <label>Overige kosten marge % <input name="other_cost_margin_percent" type="number" step="0.01" value="25" /></label>
      <label>Voorrijkosten <input name="callout_fee" type="number" step="0.01" value="45" /></label>
      <label>Voorrijkosten btw % <input name="callout_fee_vat_percent" type="number" step="0.01" value="21" /></label>
      <label>Standaard uurtarief <input name="default_hourly_sell_rate" type="number" step="0.01" value="95" /></label>
      <label>Interne uurkostprijs <input name="internal_hourly_cost_rate" type="number" step="0.01" value="35" /></label>
      <label>Btw % <input name="vat_percent" type="number" step="0.01" value="21" /></label>
      <label>Spoedtoeslag % <input name="emergency_surcharge_percent" type="number" step="0.01" value="0" /></label>
      <label>Avond/weekend toeslag % <input name="evening_weekend_surcharge_percent" type="number" step="0.01" value="0" /></label>
      <label>Standaard <select name="is_default"><option value="false">Nee</option><option value="true">Ja</option></select></label>
      <button class="btn success" type="submit">Categorie aanmaken</button>
    </form>
  </section>
  <div class="table-wrap"><table><thead><tr><th>Actief</th><th>Standaard</th><th>Naam</th><th>Materiaal %</th><th>Uren %</th><th>Overig %</th><th>Voorrijden</th><th>Uurtarief</th><th>Interne uurkost</th><th>Btw</th><th>Toeslagen</th></tr></thead><tbody>${rows.map((category) => `<tr>
    <td><input type="checkbox" ${category.active !== false ? "checked" : ""} onchange="updatePricingCategory('${category.id}', 'active', this.checked)" /></td>
    <td><input type="radio" name="default-pricing-category" ${category.is_default ? "checked" : ""} onchange="setDefaultPricingCategory('${category.id}')" /></td>
    <td><input value="${escapeAttr(category.name)}" onchange="updatePricingCategory('${category.id}', 'name', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.material_margin_percent || 0)}" onchange="updatePricingCategory('${category.id}', 'material_margin_percent', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.labor_margin_percent || 0)}" onchange="updatePricingCategory('${category.id}', 'labor_margin_percent', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.other_cost_margin_percent || 0)}" onchange="updatePricingCategory('${category.id}', 'other_cost_margin_percent', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.callout_fee || 0)}" onchange="updatePricingCategory('${category.id}', 'callout_fee', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.default_hourly_sell_rate || 0)}" onchange="updatePricingCategory('${category.id}', 'default_hourly_sell_rate', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.internal_hourly_cost_rate || 0)}" onchange="updatePricingCategory('${category.id}', 'internal_hourly_cost_rate', this.value)" /></td>
    <td><input type="number" step="0.01" value="${Number(category.vat_percent || 0)}" onchange="updatePricingCategory('${category.id}', 'vat_percent', this.value)" /></td>
    <td>${Number(category.emergency_surcharge_percent || 0)}% / ${Number(category.evening_weekend_surcharge_percent || 0)}%</td>
  </tr>`).join("")}</tbody></table></div>`;
}

function addPricingCategory(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const category = {
    id: uid("pc"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    name: String(form.get("name") || "").trim(),
    description: String(form.get("description") || "").trim(),
    active: true,
    is_default: form.get("is_default") === "true",
    created_at: now,
    updated_at: now,
  };
  ["material_margin_percent", "labor_margin_percent", "other_cost_margin_percent", "callout_fee", "callout_fee_vat_percent", "default_hourly_sell_rate", "internal_hourly_cost_rate", "vat_percent", "emergency_surcharge_percent", "evening_weekend_surcharge_percent"].forEach((field) => {
    category[field] = Number(form.get(field) || 0);
  });
  state.pricing_categories = state.pricing_categories || [];
  if (category.is_default) companyScoped(state.pricing_categories).forEach((row) => { row.is_default = false; });
  state.pricing_categories.push(category);
  saveState();
  render();
}

function updatePricingCategory(categoryId, field, value) {
  const category = byId(state.pricing_categories || [], categoryId);
  if (!category || !isSameCompany(category)) return;
  const numeric = ["material_margin_percent", "labor_margin_percent", "other_cost_margin_percent", "callout_fee", "callout_fee_vat_percent", "default_hourly_sell_rate", "internal_hourly_cost_rate", "vat_percent", "emergency_surcharge_percent", "evening_weekend_surcharge_percent"];
  category[field] = numeric.includes(field) ? Number(value || 0) : field === "active" ? Boolean(value) : value;
  category.updated_at = new Date().toISOString();
  saveState();
  render();
}

function setDefaultPricingCategory(categoryId) {
  companyScoped(state.pricing_categories || []).forEach((category) => {
    category.is_default = category.id === categoryId;
    category.updated_at = new Date().toISOString();
  });
  saveState();
  render();
}

function renderPaymentQuoteSettings() {
  const settings = paymentQuoteSettings();
  return `<section class="panel" style="margin-top:14px">
    <h2>Betaling & Offertes</h2>
    <div class="form-grid">
      <label>Monteurs mogen offerte maken
        <select onchange="updateCompanySetting('monteurs_mogen_offerte_maken', this.value === 'true')">
          <option value="false" ${!settings.monteurs_mogen_offerte_maken ? "selected" : ""}>Nee</option>
          <option value="true" ${settings.monteurs_mogen_offerte_maken ? "selected" : ""}>Ja</option>
        </select>
      </label>
      <label>Monteurs mogen afrekenen
        <select onchange="updateCompanySetting('monteurs_mogen_afrekenen', this.value === 'true')">
          <option value="false" ${!settings.monteurs_mogen_afrekenen ? "selected" : ""}>Nee</option>
          <option value="true" ${settings.monteurs_mogen_afrekenen ? "selected" : ""}>Ja</option>
        </select>
      </label>
      <label>Monteurs mogen verkoopprijzen zien
        <select onchange="updateCompanySetting('monteurs_mogen_verkoopprijzen_zien', this.value === 'true')">
          <option value="false" ${!settings.monteurs_mogen_verkoopprijzen_zien ? "selected" : ""}>Nee</option>
          <option value="true" ${settings.monteurs_mogen_verkoopprijzen_zien ? "selected" : ""}>Ja</option>
        </select>
      </label>
      <label>Betaling ter plaatse actief
        <select onchange="updateCompanySetting('betaling_ter_plaatse_actief', this.value === 'true')">
          <option value="false" ${!settings.betaling_ter_plaatse_actief ? "selected" : ""}>Nee</option>
          <option value="true" ${settings.betaling_ter_plaatse_actief ? "selected" : ""}>Ja</option>
        </select>
      </label>
      <label>Standaard btw percentage <input type="number" step="0.01" value="${settings.standaard_btw_percentage}" onchange="updateCompanySetting('standaard_btw_percentage', this.value)" /></label>
      <label>Standaard voorrijkosten <input type="number" step="0.01" value="${settings.standaard_voorrijkosten}" onchange="updateCompanySetting('standaard_voorrijkosten', this.value)" /></label>
      <label>Standaard uurtarief <input type="number" step="0.01" value="${settings.standaard_uurtarief}" onchange="updateCompanySetting('standaard_uurtarief', this.value)" /></label>
    </div>
  </section>`;
}

function buildOnsiteFinancials(project) {
  const workOrder = ensureWorkOrder(project);
  const category = snapshotPricingCategory(project.pricing_category_id ? pricingCategoryById(project.pricing_category_id) : defaultPricingCategory());
  if (!project.pricing_category_id) applyPricingSnapshot(project, category.pricing_category_id);
  const vatPercent = Number(project.vat_percent ?? category.vat_percent ?? 21);
  const materialMargin = Number(project.material_margin_percent ?? category.material_margin_percent ?? 35);
  const otherMargin = Number(project.other_cost_margin_percent ?? category.other_cost_margin_percent ?? 0);
  const hourlySellRate = Number(project.default_hourly_sell_rate ?? category.default_hourly_sell_rate ?? 85);
  const hourlyCostRate = Number(project.internal_hourly_cost_rate ?? category.internal_hourly_cost_rate ?? 35);
  const calloutFee = Number(project.callout_fee ?? category.callout_fee ?? 0);
  const materialLines = enrichedUsages(project.id)
    .filter((usage) => usage.usedQuantity > 0 && usage.article)
    .map((usage) => {
      const quantity = Number(usage.usedQuantity || 0);
      const costPrice = Number(usage.purchasePriceAtTime ?? usage.article.purchasePrice ?? 0);
      const sellPrice = costPrice * (1 + materialMargin / 100);
      return {
        type: "material",
        category_type: "material",
        description: usage.article.description || usage.article.name || "Materiaal",
        quantity,
        unit: "st",
        cost_price: costPrice,
        sell_price: sellPrice,
        vat_percent: vatPercent,
        total_cost: quantity * costPrice,
        total_sell: quantity * sellPrice,
      };
    });
  const hours = Number(workOrder.hours?.totalHours || 0);
  const laborLines = hours > 0 ? [{
    type: "labor",
    category_type: "labor",
    description: "Arbeid",
    quantity: hours,
    unit: "uur",
    cost_price: hourlyCostRate,
    sell_price: hourlySellRate,
    vat_percent: vatPercent,
    total_cost: hours * hourlyCostRate,
    total_sell: hours * hourlySellRate,
  }] : [];
  const otherLines = calloutFee > 0 ? [{
    type: "callout_fee",
    category_type: "callout_fee",
    description: "Voorrijkosten",
    quantity: 1,
    unit: "post",
    cost_price: 0,
    sell_price: calloutFee,
    vat_percent: Number(project.callout_fee_vat_percent ?? category.callout_fee_vat_percent ?? vatPercent),
    total_cost: 0,
    total_sell: calloutFee,
  }] : [];
  const manualOtherCost = Number(workOrder.otherCost || workOrder.other_cost || 0);
  if (manualOtherCost > 0) {
    otherLines.push({
      type: "other",
      category_type: "other",
      description: "Overige kosten",
      quantity: 1,
      unit: "post",
      cost_price: manualOtherCost,
      sell_price: manualOtherCost * (1 + otherMargin / 100),
      vat_percent: vatPercent,
      total_cost: manualOtherCost,
      total_sell: manualOtherCost * (1 + otherMargin / 100),
    });
  }
  const lines = [...materialLines, ...laborLines, ...otherLines].map((line) => ({
    ...line,
    gross_profit: line.total_sell - line.total_cost,
    margin_percent: marginPercent(line.total_sell, line.total_cost),
  }));
  const subtotal = lines.reduce((sum, line) => sum + Number(line.total_sell || 0), 0);
  const totalCost = lines.reduce((sum, line) => sum + Number(line.total_cost || 0), 0);
  const vatAmount = lines.reduce((sum, line) => sum + Number(line.total_sell || 0) * (Number(line.vat_percent || 0) / 100), 0);
  return {
    lines,
    subtotal_ex_vat: subtotal,
    vat_amount: vatAmount,
    total_inc_vat: subtotal + vatAmount,
    total_cost: totalCost,
    gross_profit: subtotal - totalCost,
    margin_percent: marginPercent(subtotal, totalCost),
    pricing_category_id: category.pricing_category_id,
    pricing_category_name: category.pricing_category_name,
    callout_fee: calloutFee,
    material_margin_percent: materialMargin,
    labor_margin_percent: Number(project.labor_margin_percent ?? category.labor_margin_percent ?? 0),
    other_cost_margin_percent: otherMargin,
    material_cost: materialLines.reduce((sum, line) => sum + line.total_cost, 0),
    labor_cost: laborLines.reduce((sum, line) => sum + line.total_cost, 0),
    other_cost: otherLines.reduce((sum, line) => sum + line.total_cost, 0),
    callout_fee_revenue: otherLines.filter((line) => line.category_type === "callout_fee").reduce((sum, line) => sum + line.total_sell, 0),
  };
}

function ensureProfitSnapshot(project) {
  state.profitSnapshots = state.profitSnapshots || [];
  const existing = state.profitSnapshots.find((snapshot) => snapshot.project_id === project.id && recordCompanyId(snapshot) === recordCompanyId(project));
  const financials = buildOnsiteFinancials(project);
  const snapshot = {
    id: existing?.id || uid("profit"),
    company_id: recordCompanyId(project),
    companyId: recordCompanyId(project),
    project_id: project.id,
    workorder_id: project.workOrder?.id || project.id,
    revenue: financials.subtotal_ex_vat,
    material_cost: financials.material_cost,
    labor_cost: financials.labor_cost,
    other_cost: financials.other_cost,
    gross_profit: financials.gross_profit,
    margin_percent: financials.margin_percent,
    created_at: existing?.created_at || new Date().toISOString(),
  };
  if (existing) Object.assign(existing, snapshot);
  else state.profitSnapshots.push(snapshot);
  return snapshot;
}

function ensureOnsiteQuote(project, status = "aangeboden") {
  state.quotes = state.quotes || [];
  state.quoteLines = state.quoteLines || [];
  const workOrder = ensureWorkOrder(project);
  const financials = buildOnsiteFinancials(project);
  const now = new Date().toISOString();
  let quote = state.quotes.find((item) => item.project_id === project.id && recordCompanyId(item) === recordCompanyId(project));
  if (!quote) {
    quote = {
      id: uid("quote"),
      company_id: recordCompanyId(project),
      companyId: recordCompanyId(project),
      quote_number: quoteNumber(),
      project_id: project.id,
      workorder_id: workOrder.id || project.id,
      customer_id: project.customerId || project.customer_id || "",
      mechanic_id: project.assignedMechanicId || project.mechanicId || currentUser()?.id || "",
      created_by: currentUser()?.id || "system",
      created_at: now,
    };
    state.quotes.push(quote);
  }
  Object.assign(quote, {
    status,
    pricing_category_id: financials.pricing_category_id,
    pricing_category_name: financials.pricing_category_name,
    callout_fee: financials.callout_fee,
    material_margin_percent: financials.material_margin_percent,
    labor_margin_percent: financials.labor_margin_percent,
    other_cost_margin_percent: financials.other_cost_margin_percent,
    subtotal_ex_vat: financials.subtotal_ex_vat,
    vat_amount: financials.vat_amount,
    total_inc_vat: financials.total_inc_vat,
    total_cost: financials.total_cost,
    gross_profit: financials.gross_profit,
    margin_percent: financials.margin_percent,
    intro_text: quote.intro_text || "Voorstel op basis van de afgeronde werkbon.",
    terms_text: quote.terms_text || "Betaling en akkoord zijn geregistreerd in WerkbonSysteem.nl.",
    updated_at: now,
  });
  state.quoteLines = state.quoteLines.filter((line) => line.quote_id !== quote.id);
  financials.lines.forEach((line) => {
    state.quoteLines.push({ id: uid("ql"), company_id: recordCompanyId(project), companyId: recordCompanyId(project), quote_id: quote.id, ...line });
  });
  return quote;
}

function onsiteQuoteForProject(projectId) {
  return companyScoped(state.quotes || []).find((quote) => quote.project_id === projectId);
}

function quoteLinesForMechanic(quoteId) {
  return (state.quoteLines || []).filter((line) => line.quote_id === quoteId);
}

function canMechanicCreateQuote() {
  return isMechanic() && paymentQuoteSettings().monteurs_mogen_offerte_maken;
}

function canMechanicTakePayment() {
  const settings = paymentQuoteSettings();
  return isMechanic() && settings.monteurs_mogen_afrekenen && settings.betaling_ter_plaatse_actief;
}

function canMechanicSeeSellPrices() {
  return !isMechanic() || paymentQuoteSettings().monteurs_mogen_verkoopprijzen_zien;
}

function renderSettlementPrompt(projectId) {
  const project = byId(state.projects || [], projectId);
  if (!project || !canAccessProject(project)) return renderNoOfficeAccess();
  const quote = onsiteQuoteForProject(projectId);
  if (!canMechanicCreateQuote()) {
    return `<section class="panel"><h2>Werkbon afgerond</h2><p>Offertes en betalingen worden door Admin opgevolgd.</p><div class="button-row"><a class="btn success" href="#/summary/${projectId}">Naar samenvatting</a><a class="btn secondary" href="#/start">Terug naar Start</a></div></section>`;
  }
  if (!quote) {
    return `<section class="panel settlement-panel">
      <h2>Offerte / afrekening maken?</h2>
      <p>De werkbon is afgerond. Je kunt nu een klantvoorstel maken of alleen de werkbon afsluiten.</p>
      <div class="meta-grid">
        <div class="meta"><span>Werkbon</span><strong>${escapeHtml(workorderNumber(project))}</strong></div>
        <div class="meta"><span>Klant</span><strong>${escapeHtml(project.customer || "-")}</strong></div>
        <div class="meta"><span>Adres</span><strong>${escapeHtml(project.address || "-")}</strong></div>
      </div>
      <div class="button-row">
        <button class="btn success" type="button" onclick="createOnsiteQuote('${projectId}')">Ja, voorstel maken</button>
        <a class="btn secondary" href="#/summary/${projectId}">Nee, alleen werkbon afronden</a>
      </div>
    </section>`;
  }
  return renderOnsiteQuote(project, quote);
}

function createOnsiteQuote(projectId) {
  const project = byId(state.projects || [], projectId);
  if (!project || !canAccessProject(project)) return;
  if (!canMechanicCreateQuote()) return alert("Offerte maken is uitgeschakeld door Admin.");
  ensureOnsiteQuote(project, "aangeboden");
  ensureProfitSnapshot(project);
  saveState();
  render();
}

function renderOnsiteQuote(project, quote) {
  const lines = quoteLinesForMechanic(quote.id);
  const materialLines = lines.filter((line) => line.type === "material");
  const laborLines = lines.filter((line) => line.type === "labor");
  const otherLines = lines.filter((line) => line.type === "other" || line.type === "callout_fee" || line.category_type === "callout_fee");
  const showPrices = canMechanicSeeSellPrices();
  setTimeout(setupOnsiteQuoteSignaturePads, 0);
  if (!showPrices) {
    return `<section class="panel settlement-panel">
      <h2>Offerte / afrekening</h2>
      <div class="validation-box">Admin heeft verkoopprijzen voor monteurs verborgen. Deze werkbon is afgerond; Admin kan de offerte opvolgen.</div>
      <div class="button-row">
        <button class="btn secondary" type="button" onclick="markOnsiteQuoteLater('${quote.id}')">Later door Admin opvolgen</button>
        <a class="btn success" href="#/summary/${project.id}">Naar samenvatting</a>
      </div>
    </section>`;
  }
  return `<section class="panel settlement-panel">
    <div class="article-head">
      <div><h2>Offerte / afrekening</h2><p>Klantvoorstel ${escapeHtml(quote.quote_number)} voor ${escapeHtml(project.customer || "-")}.</p></div>
      <span class="badge">${escapeHtml(quote.status || "aangeboden")}</span>
    </div>
    <div class="meta-grid" style="margin-bottom:14px">
      <div class="meta"><span>Categorie</span><strong>${escapeHtml(quote.pricing_category_name || project.pricing_category_name || "-")}</strong></div>
      <div class="meta"><span>Btw</span><strong>${Number(project.vat_percent ?? paymentQuoteSettings().standaard_btw_percentage ?? 21)}%</strong></div>
    </div>
    <div class="settlement-grid">
      ${renderSettlementCard("Werkzaamheden", `<p>${escapeHtml(ensureWorkOrder(project).solution || project.projectName || "-")}</p>`)}
      ${renderSettlementCard("Materialen", renderPublicQuoteLines(materialLines))}
      ${renderSettlementCard("Uren", renderPublicQuoteLines(laborLines))}
      ${renderSettlementCard("Voorrijkosten", renderPublicQuoteLines(otherLines))}
      ${renderSettlementCard("Totaal", `<div class="meta-grid">
        <div class="meta"><span>Totaal ex btw</span><strong>${euro(quote.subtotal_ex_vat)}</strong></div>
        <div class="meta"><span>Btw</span><strong>${euro(quote.vat_amount)}</strong></div>
        <div class="meta"><span>Totaal incl btw</span><strong>${euro(quote.total_inc_vat)}</strong></div>
      </div>`)}
    </div>
    <section style="margin-top:14px">
      <h3>Klant akkoord</h3>
      ${renderOnsiteQuoteSignatureBox(quote)}
    </section>
    <div class="button-row">
      <button class="btn success" type="button" onclick="acceptOnsiteQuote('${quote.id}')">Klant akkoord</button>
      <button class="btn warn" type="button" onclick="rejectOnsiteQuote('${quote.id}')">Klant niet akkoord</button>
      <button class="btn secondary" type="button" onclick="markOnsiteQuoteLater('${quote.id}')">Later door Admin opvolgen</button>
      <a class="btn ghost" href="#/summary/${project.id}">Geen offerte nodig</a>
    </div>
  </section>`;
}

function renderSettlementCard(title, content) {
  return `<article class="settlement-card"><h3>${escapeHtml(title)}</h3>${content}</article>`;
}

function renderPublicQuoteLines(lines) {
  if (!lines.length) return `<p class="muted">Geen regels.</p>`;
  return `<div class="table-wrap compact-table"><table><thead><tr><th>Omschrijving</th><th>Aantal</th><th>Prijs</th><th>Totaal</th></tr></thead><tbody>${lines.map((line) => `<tr><td>${escapeHtml(line.description)}</td><td>${line.quantity} ${escapeHtml(line.unit || "")}</td><td>${euro(line.sell_price)}</td><td>${euro(line.total_sell)}</td></tr>`).join("")}</tbody></table></div>`;
}

function renderOnsiteQuoteSignatureBox(quote) {
  return `<div class="signature-box"><strong>Handtekening akkoord klant</strong><canvas width="360" height="150" data-quote-id="${quote.id}" data-quote-signature="customer_signature"></canvas>${quote.customer_signature ? `<img class="signature-preview" src="${quote.customer_signature}" alt="Handtekening akkoord klant" />` : ""}<div class="button-row"><button class="btn secondary" type="button" onclick="clearOnsiteQuoteSignature('${quote.id}')">Wissen</button></div></div>`;
}

function setupOnsiteQuoteSignaturePads() {
  document.querySelectorAll("canvas[data-quote-signature]").forEach((canvas) => {
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
      const quote = byId(state.quotes || [], canvas.dataset.quoteId);
      if (quote && isSameCompany(quote)) {
        quote.customer_signature = canvas.toDataURL("image/png");
        quote.updated_at = new Date().toISOString();
        saveState();
      }
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

function clearOnsiteQuoteSignature(quoteId) {
  const quote = byId(state.quotes || [], quoteId);
  if (!quote || !isSameCompany(quote)) return;
  quote.customer_signature = "";
  quote.updated_at = new Date().toISOString();
  saveState();
  render();
}

function acceptOnsiteQuote(quoteId) {
  const quote = byId(state.quotes || [], quoteId);
  if (!quote || !isSameCompany(quote)) return;
  if (!quote.customer_signature) return alert("Laat de klant eerst akkoord tekenen.");
  quote.status = "geaccepteerd";
  quote.accepted_by_customer = true;
  quote.accepted_at = new Date().toISOString();
  quote.updated_at = quote.accepted_at;
  saveState();
  location.hash = canMechanicTakePayment() ? `#/payment/${quote.id}` : `#/summary/${quote.project_id}`;
}

function rejectOnsiteQuote(quoteId) {
  updateQuoteStatus(quoteId, "afgewezen");
  const quote = byId(state.quotes || [], quoteId);
  if (quote) location.hash = `#/summary/${quote.project_id}`;
}

function markOnsiteQuoteLater(quoteId) {
  updateQuoteStatus(quoteId, "later opvolgen");
  const quote = byId(state.quotes || [], quoteId);
  if (quote) location.hash = `#/summary/${quote.project_id}`;
}

function renderMechanicPayment(quoteId) {
  const quote = byId(state.quotes || [], quoteId);
  if (!quote || !isSameCompany(quote)) return renderNoOfficeAccess();
  if (!canMechanicTakePayment()) return `<section class="panel"><h2>Betaling</h2><p>Afrekenen ter plaatse is uitgeschakeld door Admin.</p><a class="btn success" href="#/summary/${quote.project_id}">Naar samenvatting</a></section>`;
  const project = byId(state.projects || [], quote.project_id);
  const existing = (state.payments || []).find((payment) => payment.quote_id === quote.id && isSameCompany(payment));
  const amount = Number(existing?.amount ?? quote.total_inc_vat ?? 0);
  return `<section class="panel settlement-panel">
    <h2>Betaling registreren</h2>
    <div class="meta-grid">
      <div class="meta"><span>Werkbon</span><strong>${escapeHtml(project ? workorderNumber(project) : quote.workorder_id)}</strong></div>
      <div class="meta"><span>Klant</span><strong>${escapeHtml(project?.customer || "-")}</strong></div>
      <div class="meta"><span>Bedrag</span><strong>${euro(amount)}</strong></div>
    </div>
    <form class="form-grid" onsubmit="saveOnsitePayment(event, '${quote.id}')">
      <label>Betaalmethode
        <select name="payment_method">
          ${["Pin", "Contant", "Betaallink", "Tikkie", "Bankoverschrijving", "Niet betaald / later factureren"].map((method) => `<option value="${method}" ${existing?.payment_method === method ? "selected" : ""}>${method}</option>`).join("")}
        </select>
      </label>
      <label>Bedrag <input name="amount" type="number" step="0.01" value="${amount.toFixed(2)}" /></label>
      <label>Status
        <select name="status">
          ${["betaald", "open", "deels betaald", "geannuleerd", "later factureren"].map((status) => `<option value="${status}" ${existing?.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>Referentie/transactie-ID <input name="transaction_reference" value="${escapeAttr(existing?.transaction_reference || "")}" /></label>
      <label>Betalingsnotitie <input name="note" value="${escapeAttr(existing?.note || "")}" /></label>
      <button class="btn success" type="submit">Betaling opslaan</button>
    </form>
  </section>`;
}

function saveOnsitePayment(event, quoteId) {
  event.preventDefault();
  const quote = byId(state.quotes || [], quoteId);
  if (!quote || !isSameCompany(quote) || !canMechanicTakePayment()) return;
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const method = String(form.get("payment_method") || "");
  const status = String(form.get("status") || "open");
  const project = byId(state.projects || [], quote.project_id);
  const payment = {
    id: uid("pay"),
    company_id: recordCompanyId(quote),
    companyId: recordCompanyId(quote),
    quote_id: quote.id,
    workorder_id: quote.workorder_id || quote.project_id,
    customer_id: quote.customer_id || project?.customerId || project?.customer_id || "",
    mechanic_id: quote.mechanic_id || currentUser()?.id || "",
    payment_method: method,
    amount: Number(form.get("amount") || 0),
    status,
    transaction_reference: String(form.get("transaction_reference") || "").trim(),
    note: String(form.get("note") || "").trim(),
    paid_at: status === "betaald" || status === "deels betaald" ? now : "",
    created_at: now,
  };
  state.payments = [...(state.payments || []).filter((row) => row.quote_id !== quote.id), payment];
  quote.payment_status = status;
  quote.updated_at = now;
  saveState();
  location.hash = `#/summary/${quote.project_id}`;
}

function renderPaymentsAdmin() {
  const rows = companyScoped(state.payments || []).sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
  const paid = rows.filter((row) => row.status === "betaald").reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const open = rows.filter((row) => row.status !== "betaald").reduce((sum, row) => sum + Number(row.amount || 0), 0);
  return `<section class="stats" style="margin-bottom:14px">
    <div class="stat-card"><span>Betalingen</span><strong>${rows.length}</strong></div>
    <div class="stat-card"><span>Betaald</span><strong>${euro(paid)}</strong></div>
    <div class="stat-card"><span>Open</span><strong>${euro(open)}</strong></div>
    <div class="stat-card"><span>Pin/contant</span><strong>${rows.filter((row) => ["Pin", "Contant"].includes(row.payment_method)).length}</strong></div>
  </section>
  <div class="table-wrap"><table><thead><tr><th>Werkbon</th><th>Klant</th><th>Monteur</th><th>Bedrag</th><th>Betaalmethode</th><th>Status</th><th>Betaaldatum</th><th>Notitie</th></tr></thead><tbody>${rows.map((payment) => {
    const quote = byId(state.quotes || [], payment.quote_id);
    const project = byId(state.projects || [], quote?.project_id || payment.workorder_id);
    return `<tr><td>${escapeHtml(project ? workorderNumber(project) : payment.workorder_id || "-")}</td><td>${escapeHtml(project?.customer || "-")}</td><td>${escapeHtml(mechanicNameById(payment.mechanic_id))}</td><td>${euro(payment.amount)}</td><td>${escapeHtml(payment.payment_method || "-")}</td><td>${escapeHtml(payment.status || "-")}</td><td>${payment.paid_at ? safeDate(payment.paid_at) : "-"}</td><td>${escapeHtml(payment.note || "-")}</td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function renderQuotesTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Offerte</th><th>Werkbon</th><th>Project</th><th>Klant</th><th>Adres</th><th>Datum</th><th>Status</th><th>Ex btw</th><th>Btw</th><th>Incl btw</th><th>Brutowinst</th><th>Marge</th><th>Acties</th></tr></thead><tbody>${rows.map((quote) => {
    const project = byId(state.projects, quote.project_id);
    const statuses = ["concept", "aangeboden", "gecontroleerd", "verzonden", "geaccepteerd", "afgewezen", "later opvolgen", "omgezet naar opdracht"];
    return `<tr><td>${escapeHtml(quote.quote_number)}</td><td>${project ? workorderNumber(project) : escapeHtml(quote.workorder_id || "-")}</td><td>${escapeHtml(quote.project_id || "-")}</td><td>${escapeHtml(project?.customer || "-")}</td><td>${escapeHtml(project?.address || "-")}</td><td>${safeDate(quote.created_at)}</td><td><select onchange="updateQuoteStatus('${quote.id}', this.value)">${statuses.map((status) => `<option value="${status}" ${quote.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></td><td>${euro(quote.subtotal_ex_vat)}</td><td>${euro(quote.vat_amount)}</td><td>${euro(quote.total_inc_vat)}</td><td>${euro(quote.gross_profit)}</td><td>${quote.margin_percent || 0}%</td><td><button class="btn secondary" onclick="exportQuotePdf('${quote.id}')">PDF</button></td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function setDashboardTab(tab) {
  ui.dashboardTab = tab;
  const tabRoutes = {
    Projecten: "projects",
    Werkbonnen: "workorders",
    Planning: "planning",
    Klanten: "customers",
    Offertes: "quotes",
    Betalingen: "payments",
    Onderhoudscontracten: "contracts",
    Magazijn: "warehouse",
    Koffers: "kits",
    "Garage Box": "garage-box",
    Bestellen: "orders",
    Kosten: "costs",
    Winst: "profit",
    Prijzen: "prices",
    Checklist: "checklists",
    Gebruikers: "users",
    Instellingen: "settings",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/admin/${route}`)) {
    location.hash = `#/admin/${route}`;
    return;
  }
  render();
}

function renderDashboardTab() {
  if (ui.dashboardTab === "Werkbonnen") return renderOfficeProjects();
  if (ui.dashboardTab === "Planning") return renderPlanning();
  if (ui.dashboardTab === "Klanten") return renderCustomers();
  if (ui.dashboardTab === "Offertes") return renderQuotes();
  if (ui.dashboardTab === "Betalingen") return renderPaymentsAdmin();
  if (ui.dashboardTab === "Onderhoudscontracten") return renderMaintenanceContracts();
  if (ui.dashboardTab === "Magazijn") return renderGarageBox();
  if (ui.dashboardTab === "Bestellen") return renderOrdering();
  if (ui.dashboardTab === "Koffers") return renderOrderAndKitStatus();
  if (ui.dashboardTab === "Garage Box") return renderGarageBox();
  if (ui.dashboardTab === "Kosten") return renderCosts();
  if (ui.dashboardTab === "Winst") return renderProfitDashboard();
  if (ui.dashboardTab === "Prijzen") return renderPrices();
  if (ui.dashboardTab === "Checklist") return renderChecklistSettings();
  if (ui.dashboardTab === "Gebruikers") return renderUsers();
  if (ui.dashboardTab === "Instellingen") return renderCompanySettings();
  return renderOfficeProjects();
}

function renderOffice(section = "") {
  if (section === "to-order") {
    ui.dashboardTab = "Bestellen";
  } else if (section) {
    const routeTabs = {
      projects: "Projecten",
      workorders: "Werkbonnen",
      planning: "Planning",
      customers: "Klanten",
      quotes: "Offertes",
      payments: "Betalingen",
      contracts: "Onderhoudscontracten",
      warehouse: "Magazijn",
      orders: "Bestellen",
      "garage-box": "Garage Box",
      kits: "Koffers",
      costs: "Kosten",
      profit: "Winst",
      prices: "Prijzen",
      users: "Gebruikers",
      checklists: "Checklist",
      settings: "Instellingen",
    };
    ui.dashboardTab = routeTabs[section] || ui.dashboardTab;
  }
  const tabs = ["Projecten", "Werkbonnen", "Planning", "Klanten", "Categorieën", "Offertes", "Betalingen", "Onderhoudscontracten", "Magazijn", "Koffers", "Bestellen", "Kosten", "Winst", "Prijzen", "Checklist", "Gebruikers", "Instellingen"];
  const companyProjects = visibleProjects();
  const unsafeCount = (state.adminNotifications || []).filter((note) => note.severity === "danger" && isSameCompany(note)).length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open</span><strong>${companyProjects.filter(isProjectOpen).length}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${companyProjects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(companyProjects.reduce((s, p) => s + projectTotal(p.id), 0))}</strong></div>
      <div class="stat-card"><span>Veiligheidsmeldingen</span><strong>${unsafeCount}</strong></div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.dashboardTab === tab ? "active" : ""}" onclick="setDashboardTab('${tab}')">${tab}</button>`).join("")}</div>
    ${section === "to-order" ? renderToOrderPage() : renderDashboardTab()}
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
  updatePlanningOnProjectComplete(project);
  ensureProfitSnapshot(project);
  state.adminNotifications = state.adminNotifications || [];
  state.adminNotifications.push({
    id: uid("note"),
    company_id: recordCompanyId(project),
    companyId: recordCompanyId(project),
    type: "workorder_completed",
    projectId,
    createdAt: now,
    message: `Werkbon ${project.projectName} afgerond door ${currentUser()?.name || project.technician || "monteur"}.`,
    severity: workOrder.installationSafe === "nee" ? "danger" : "ok",
  });
  saveState();
  location.hash = canMechanicCreateQuote() ? `#/settlement/${projectId}` : `#/summary/${projectId}`;
}

function renderRoute(route) {
  const [name, id] = route.split("/");
  if (name === "login") return renderLogin();
  if (!currentUser()) return renderLogin();
  if (name === "platform") return isPlatformSuperAdmin() ? renderPlatform(id) : renderNoOfficeAccess();
  if ((name === "admin" || name === "office" || name === "manage") && !isOfficeAdmin()) return renderNoOfficeAccess();
  if (isPlatformSuperAdmin() && name !== "platform") return renderPlatform();
  if (name === "notifications") return isMechanic() ? renderNotificationsCenter() : renderNoOfficeAccess();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "settlement") return renderSettlementPrompt(id);
  if (name === "payment") return renderMechanicPayment(id);
  if (name === "start") return renderHome();
  if (name === "new") return renderNewProject();
  if (name === "active") return renderProjectList("Open");
  if (name === "completed") return renderProjectList("Afgerond");
  if (name === "project") return renderTechnician(id);
  if (name === "summary") return renderSummary(id);
  if (name === "admin" || name === "office") return renderOffice(id);
  if (name === "manage") return renderManage();
  return renderHome();
}

function renderNewProject() {
  ensurePricingCategories();
  const today = new Date().toISOString().slice(0, 10);
  const mechanicName = currentUser()?.name || "";
  const mechanics = state.users.filter((user) => user.role === "mechanic" && user.active && isSameCompany(user));
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
        <label>Postcode <input name="postal_code" /></label>
        <label>Plaats <input name="city" /></label>
        <label>Telefoon <input name="phone" /></label>
        <label>Categorie <select name="pricing_category_id" required>${pricingCategoryOptions()}</select></label>
        ${
          isOfficeAdmin()
            ? `<label>Toewijzen aan monteur
                <select name="assignedMechanicId" required>
                  ${mechanics.map((user) => `<option value="${user.id}">${escapeHtml(user.name)} - ${escapeHtml(user.email)}</option>`).join("")}
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
        ${isOfficeAdmin() ? `<label>Start planning <input name="start_datetime" type="datetime-local" /></label><label>Einde planning <input name="end_datetime" type="datetime-local" /></label>` : ""}
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
  ensurePricingCategories();
  const form = new FormData(event.target);
  const sourceConfig = sourceChoiceConfig(form.get("sourceChoice") || form.get("kitChoice"));
  const companyId = currentCompanyId();
  const assignedMechanicId = isOfficeAdmin() ? form.get("assignedMechanicId") : currentUser()?.id;
  const assignedMechanic = byId(state.users, assignedMechanicId);
  let customer = byId(state.customers || [], form.get("customer_id"));
  const customerName = String(form.get("customer") || "").trim();
  const address = String(form.get("address") || "").trim();
  if (!customer && customerName && address) {
    customer = {
      id: uid("customer"),
      company_id: companyId,
      companyId: companyId,
      customer_name: customerName,
      contact_person: customerName,
      address,
      postal_code: String(form.get("postal_code") || "").trim(),
      city: String(form.get("city") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      email: "",
      notes: "Aangemaakt vanuit werkbon",
      active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    state.customers.push(customer);
  }
  const project = {
    id: uid("project"),
    company_id: companyId,
    companyId: companyId,
    projectName: form.get("projectName").trim(),
    project_name: form.get("projectName").trim(),
    customer_id: customer?.id || "",
    customerId: customer?.id || "",
    customer: customer?.customer_name || customerName,
    customer_name: customer?.customer_name || customerName,
    address: `${customer?.address || address}${customer?.postal_code || form.get("postal_code") || customer?.city || form.get("city") ? `, ${customer?.postal_code || form.get("postal_code") || ""} ${customer?.city || form.get("city") || ""}` : ""}`.trim(),
    postal_code: customer?.postal_code || String(form.get("postal_code") || "").trim(),
    city: customer?.city || String(form.get("city") || "").trim(),
    phone: customer?.phone || String(form.get("phone") || "").trim(),
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
  applyPricingSnapshot(project, form.get("pricing_category_id"));
  const usages = state.articles
    .filter((article) => article.active && isSameCompany(article) && sourceConfig.selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      company_id: companyId,
      companyId: companyId,
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
  let planningEvent = null;
  if (isOfficeAdmin() && form.get("start_datetime") && form.get("end_datetime")) {
    planningEvent = {
      id: uid("plan"),
      company_id: companyId,
      companyId: companyId,
      customer_id: customer?.id || "",
      workorder_id: project.id,
      project_id: project.id,
      mechanic_id: assignedMechanicId,
      title: workorderNumber(project),
      description: form.get("projectName").trim(),
      customer_name: project.customer,
      address: customer?.address || address,
      postal_code: project.postal_code,
      city: project.city,
      phone: project.phone,
      pricing_category_id: project.pricing_category_id,
      pricing_category_name: project.pricing_category_name,
      start_datetime: form.get("start_datetime"),
      end_datetime: form.get("end_datetime"),
      status: "ingepland",
      priority: "normaal",
      notes: "",
      created_by: currentUser()?.id || "",
      updated_at: new Date().toISOString(),
    };
    state.planningEvents.push(planningEvent);
  }
  if (isOfficeAdmin() && assignedMechanicId) notifyWorkorderAssigned(project, planningEvent);
  saveState();
  location.hash = `#/project/${project.id}`;
}

function renderNewPlanningModal() {
  ensurePricingCategories();
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const customers = activeCustomers();
  const projects = visibleProjects().filter((project) => !isProjectCompleted(project));
  const defaults = ui.newPlanningDefaults || {};
  const baseDate = defaults.start_date || ui.planningDate || new Date().toISOString().slice(0, 10);
  const endDate = defaults.end_date || baseDate;
  const startTime = defaults.start_time || "08:00";
  const endTime = defaults.end_time || "10:00";
  const statusDefault = defaults.status || "ingepland";
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>Nieuwe afspraak</h2><p>Koppel een klant, categorie en eventueel direct een werkbon.</p></div><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Sluiten</button></div>
    <form class="form-grid" onsubmit="saveNewPlanningEvent(event)">
      <label>Klant kiezen <select name="customer_id" onchange="fillPlanningModalCustomer(this.value, 'new-planning')"><option value="">Nieuwe klant of handmatig</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}</select></label>
      <label>Werkbon koppelen <select name="project_id"><option value="">Geen werkbon</option><option value="__new__">Nieuwe werkbon maken</option>${projects.map((project) => `<option value="${project.id}">${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || "")}</option>`).join("")}</select></label>
      <label>Categorie <select name="pricing_category_id" required>${pricingCategoryOptions()}</select></label>
      <label>Klantnaam <input name="customer_name" id="new-planning-customer-name" required /></label>
      <label>Adres <input name="address" id="new-planning-address" required /></label>
      <label>Postcode <input name="postal_code" id="new-planning-postal-code" /></label>
      <label>Plaats <input name="city" id="new-planning-city" /></label>
      <label>Telefoon <input name="phone" id="new-planning-phone" /></label>
      <label>E-mail <input name="email" id="new-planning-email" type="email" /></label>
      <label>Monteur <select name="mechanic_id" required>${mechanics.map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Titel <input name="title" required value="Service afspraak" /></label>
      <label>Omschrijving <input name="description" /></label>
      <label>Startdatum <input name="start_date" type="date" required value="${escapeAttr(baseDate)}" /></label>
      <label>Starttijd <input name="start_time" type="time" required value="${escapeAttr(startTime)}" /></label>
      <label>Einddatum <input name="end_date" type="date" required value="${escapeAttr(endDate)}" /></label>
      <label>Eindtijd <input name="end_time" type="time" required value="${escapeAttr(endTime)}" /></label>
      <label>Status <select name="status">${planningStatuses().map((status) => `<option ${status === statusDefault ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes"></textarea></label>
      <div class="button-row full"><button class="btn success" type="submit">Opslaan</button><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Annuleren</button></div>
    </form>
  </section></div>`;
}

function createProjectFromPlanning(form, customer, customerId) {
  const now = new Date().toISOString();
  const title = form.get("title") || "Service afspraak";
  const project = {
    id: uid("project"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    projectName: title,
    project_name: title,
    customer: customer.customer_name,
    customer_name: customer.customer_name,
    address: `${customer.address || ""} ${customer.postal_code || ""} ${customer.city || ""}`.trim(),
    technician: mechanicNameById(form.get("mechanic_id")),
    mechanicId: form.get("mechanic_id"),
    assignedMechanicId: form.get("mechanic_id"),
    assigned_mechanic_id: form.get("mechanic_id"),
    workorder_number: nextWorkorderNumber(),
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: form.get("start_date"),
    selectedKitIds: ["M001"],
    selectedSourceIds: ["M001", GARAGE_BOX_SOURCE],
    sourceChoiceLabel: "Planning",
    status: "toegewezen",
    description: form.get("description") || "",
    createdAt: now,
    created_at: now,
  };
  applyPricingSnapshot(project, form.get("pricing_category_id"));
  state.projects.push(project);
  const usages = state.articles
    .filter((article) => article.active && isSameCompany(article) && project.selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
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
  state.usages.push(...usages);
  return project;
}

function saveNewPlanningEvent(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  let customerId = form.get("customer_id");
  let customer = byId(state.customers || [], customerId);
  if (!customer) {
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: form.get("customer_name"),
      contact_person: "",
      address: form.get("address"),
      postal_code: form.get("postal_code"),
      city: form.get("city"),
      phone: form.get("phone"),
      email: form.get("email"),
      notes: "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
    customerId = customer.id;
  }
  let projectId = form.get("project_id");
  let project = projectId && projectId !== "__new__" ? byId(state.projects || [], projectId) : null;
  if (projectId === "__new__") {
    project = createProjectFromPlanning(form, customer, customerId);
    projectId = project.id;
  }
  if (project) applyPricingSnapshot(project, form.get("pricing_category_id") || project.pricing_category_id);
  const categorySnapshot = snapshotPricingCategory(pricingCategoryById(form.get("pricing_category_id") || project?.pricing_category_id));
  const planningEvent = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: form.get("mechanic_id"),
    title: project ? workorderNumber(project) : form.get("title"),
    description: form.get("description") || "",
    customer_name: customer.customer_name || form.get("customer_name"),
    address: customer.address || form.get("address"),
    postal_code: customer.postal_code || form.get("postal_code"),
    city: customer.city || form.get("city"),
    phone: customer.phone || form.get("phone"),
    pricing_category_id: categorySnapshot.pricing_category_id,
    pricing_category_name: categorySnapshot.pricing_category_name,
    start_datetime: `${form.get("start_date")}T${form.get("start_time")}`,
    end_datetime: `${form.get("end_date")}T${form.get("end_time")}`,
    status: form.get("status") || "ingepland",
    priority: form.get("priority") || "normaal",
    notes: form.get("notes") || "",
    created_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(planningEvent);
  if (project) {
    notifyWorkorderAssigned(project, planningEvent);
  } else {
    notifyPlanningChange(planningEvent, planningEvent.priority === "spoed" ? "emergency" : "planning_changed", planningEvent.priority === "spoed" ? "Spoedmelding" : "Nieuwe afspraak ingepland", planningEvent.priority === "spoed" ? "Er is een spoedafspraak aan u toegewezen." : "Er is een nieuwe afspraak in uw planning gezet.", planningEvent.priority || "normaal");
  }
  saveState();
  ui.creatingPlanningEvent = false;
  render();
}

function renderOfficeProjects() {
  const projects = visibleProjects();
  if (!projects.length) return `<div class="panel empty">Nog geen projecten.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Project</th><th>Klant</th><th>Monteur</th><th>Categorie</th><th>Status</th><th>Gebruikt</th><th>Kosten</th><th>Actie</th></tr></thead>
        <tbody>${projects.map((p) => `<tr>
          <td>${escapeHtml(p.projectName)}</td><td>${escapeHtml(p.customer)}</td><td>${escapeHtml(p.technician)}</td><td>${escapeHtml(p.pricing_category_name || "-")}</td><td>${escapeHtml(p.status)}</td>
          <td>${totalUsed(p.id)}</td><td>${euro(projectTotal(p.id))}</td>
          <td><a class="btn secondary" href="#/summary/${p.id}">Open</a></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function profitRowsByCategory(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const key = row.pricing_category_id || "geen-categorie";
    const existing = groups.get(key) || {
      pricing_category_id: key,
      pricing_category_name: row.pricing_category_name || "Geen categorie",
      count: 0,
      revenue: 0,
      material_cost: 0,
      labor_cost: 0,
      callout_fee_revenue: 0,
      other_cost: 0,
      gross_profit: 0,
    };
    existing.count += 1;
    existing.revenue += Number(row.revenue || 0);
    existing.material_cost += Number(row.material_cost || 0);
    existing.labor_cost += Number(row.labor_cost || 0);
    existing.callout_fee_revenue += Number(row.callout_fee_revenue || 0);
    existing.other_cost += Number(row.other_cost || 0);
    existing.gross_profit += Number(row.gross_profit || 0);
    groups.set(key, existing);
  });
  return [...groups.values()].map((row) => ({ ...row, total_cost: row.material_cost + row.labor_cost + row.other_cost, margin_percent: marginPercent(row.revenue, row.revenue - row.gross_profit) }));
}

function renderProfitDashboard() {
  const rows = companyScoped(state.profitSnapshots || []);
  const byCategory = profitRowsByCategory(rows);
  const revenue = rows.reduce((s, r) => s + (r.revenue || 0), 0);
  const material = rows.reduce((s, r) => s + (r.material_cost || 0), 0);
  const labor = rows.reduce((s, r) => s + (r.labor_cost || 0), 0);
  const gross = rows.reduce((s, r) => s + (r.gross_profit || 0), 0);
  const completed = visibleProjects().filter(isProjectCompleted);
  const sorted = [...byCategory].sort((a, b) => b.gross_profit - a.gross_profit);
  const best = sorted[0];
  const worst = sorted.at(-1);
  return `<section class="stats" style="margin-bottom:14px">
    <div class="stat-card"><span>Omzet deze maand</span><strong>${euro(revenue)}</strong></div>
    <div class="stat-card"><span>Materiaalkosten</span><strong>${euro(material)}</strong></div>
    <div class="stat-card"><span>Arbeidskosten</span><strong>${euro(labor)}</strong></div>
    <div class="stat-card"><span>Brutowinst</span><strong>${euro(gross)}</strong></div>
    <div class="stat-card"><span>Marge</span><strong>${marginPercent(revenue, revenue - gross)}%</strong></div>
    <div class="stat-card"><span>Afgeronde werkbonnen</span><strong>${completed.length}</strong></div>
    <div class="stat-card"><span>Meest winstgevend</span><strong>${escapeHtml(best?.pricing_category_name || "-")}</strong></div>
    <div class="stat-card"><span>Laagste winst</span><strong>${escapeHtml(worst?.pricing_category_name || "-")}</strong></div>
  </section>
  <section class="panel" style="margin-bottom:14px"><h2>Winst per categorie</h2>${renderProfitCategoryTable(byCategory)}</section>
  ${renderProfitProjectTable(rows)}`;
}

function renderProfitCategoryTable(rows) {
  if (!rows.length) return `<p class="muted">Nog geen afgeronde werkbonnen met winstdata.</p>`;
  return `<div class="table-wrap"><table><thead><tr><th>Categorie</th><th>Werkbonnen</th><th>Omzet</th><th>Materiaalkosten</th><th>Arbeidskosten</th><th>Voorrijkosten omzet</th><th>Totale kosten</th><th>Brutowinst</th><th>Marge</th></tr></thead><tbody>${rows.map((row) => `<tr><td>${escapeHtml(row.pricing_category_name)}</td><td>${row.count}</td><td>${euro(row.revenue)}</td><td>${euro(row.material_cost)}</td><td>${euro(row.labor_cost)}</td><td>${euro(row.callout_fee_revenue)}</td><td>${euro(row.total_cost)}</td><td>${euro(row.gross_profit)}</td><td>${row.margin_percent}%</td></tr>`).join("")}</tbody></table></div>`;
}

function renderProfitProjectTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Project-ID</th><th>Werkbon</th><th>Categorie</th><th>Klant</th><th>Monteur</th><th>Datum</th><th>Omzet ex btw</th><th>Materiaalkosten</th><th>Arbeidskosten</th><th>Overig</th><th>Brutowinst</th><th>Marge</th></tr></thead><tbody>${rows.map((row) => {
    const project = byId(state.projects, row.project_id);
    return `<tr><td>${escapeHtml(row.project_id)}</td><td>${project ? workorderNumber(project) : escapeHtml(row.workorder_id || "-")}</td><td>${escapeHtml(row.pricing_category_name || project?.pricing_category_name || "-")}</td><td>${escapeHtml(project?.customer || "-")}</td><td>${escapeHtml(mechanicNameById(project?.assignedMechanicId || project?.mechanicId))}</td><td>${safeDate(row.created_at)}</td><td>${euro(row.revenue)}</td><td>${euro(row.material_cost)}</td><td>${euro(row.labor_cost)}</td><td>${euro(row.other_cost)}</td><td>${euro(row.gross_profit)}</td><td>${row.margin_percent || 0}%</td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function mechanicPlanningEvents(scope = "all") {
  const user = currentUser();
  if (!user || userRole(user) !== ROLES.MECHANIC) return [];
  const today = dateKey(new Date().toISOString());
  const weekKeys = new Set(weekDays(new Date()).map((day) => dateKey(day.toISOString())));
  return (state.planningEvents || [])
    .filter((event) => recordCompanyId(event) === recordCompanyId(user))
    .filter((event) => planningMechanicId(event) === user.id)
    .filter((event) => {
      const key = dateKey(event.start_datetime);
      if (scope === "today") return key === today;
      if (scope === "week") return weekKeys.has(key);
      return true;
    })
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function planningEventCustomer(event) {
  const customer = event?.customer_id ? byId(state.customers || [], event.customer_id) : null;
  if (customer && recordCompanyId(customer) === recordCompanyId(event)) return customer;
  return null;
}

function planningEventDetails(event) {
  const customer = planningEventCustomer(event);
  return {
    customer,
    customer_name: customer?.customer_name || event.customer_name || "-",
    address: customer?.address || event.address || "",
    postal_code: customer?.postal_code || event.postal_code || "",
    city: customer?.city || event.city || "",
    phone: customer?.phone || event.phone || "",
    email: customer?.email || event.email || "",
    notes: customer?.notes || event.notes || "",
  };
}

function planningMapsUrl(event) {
  const details = planningEventDetails(event);
  const query = `${details.address || ""}, ${details.postal_code || ""} ${details.city || ""}`.trim();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function eventDateTimeLabel(event) {
  return `${String(event.start_datetime || "").slice(11, 16) || "--:--"}-${String(event.end_datetime || "").slice(11, 16) || "--:--"}`;
}

function mechanicAgendaScope() {
  const [, section, scope] = currentRoute().split("/");
  if (section !== "planning") return "week";
  return ["today", "week", "all"].includes(scope) ? scope : "week";
}

function renderHome() {
  const projects = visibleProjects();
  const open = projects.filter(isProjectOpen).length;
  const done = projects.filter(isProjectCompleted).length;
  const replenish = projects.reduce((sum, project) => sum + totalUsed(project.id), 0);
  const agendaCount = mechanicPlanningEvents("week").length;
  return `
    ${canCreateCustomerFromCall() ? `<section class="panel" style="margin-bottom:14px"><div class="article-head"><div><h2>Telefoongesprek</h2><p>Maak snel een klant, notitie, afspraak of werkbon aan vanuit een telefoonnummer.</p></div><a class="btn success" href="#/call-customer">Nieuwe klant uit telefoongesprek</a></div></section>` : ""}
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Open projecten</span><strong>${open}</strong></div>
      <div class="stat-card"><span>Afgerond</span><strong>${done}</strong></div>
      <div class="stat-card"><span>Aan te vullen</span><strong>${replenish}</strong></div>
      <div class="stat-card"><span>Agenda deze week</span><strong>${agendaCount}</strong></div>
    </section>
    <section class="home-grid grid">
      ${homeTile("start/planning", "Mijn agenda", "Bekijk je planning, adressen en werkbonnen.", "Cal")}
      ${homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+")}
      ${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "Open")}
      ${homeTile("completed", "Afgeronde projecten", "Bekijk rapporten, CSV en PDF.", "Done")}
      ${isOfficeAdmin() ? homeTile("admin", "Admin", "Bedrijfsbeheer en planning.", "A") : ""}
    </section>
  `;
}

function renderMechanicAgendaPage(scope = mechanicAgendaScope()) {
  if (!isMechanic()) return renderNoOfficeAccess();
  const rows = mechanicPlanningEvents(scope);
  const selected = scope || "week";
  return `<section class="panel" style="margin-bottom:14px">
    <div class="article-head">
      <div><h2>Mijn agenda</h2><p>Alleen jouw eigen planning, adressen en gekoppelde werkbonnen.</p></div>
      <span class="badge">${rows.length} afspraak${rows.length === 1 ? "" : "en"}</span>
    </div>
    <div class="tabs">
      <a class="btn ${selected === "today" ? "" : "secondary"}" href="#/start/planning/today">Vandaag</a>
      <a class="btn ${selected === "week" ? "" : "secondary"}" href="#/start/planning/week">Deze week</a>
      <a class="btn ${selected === "all" ? "" : "secondary"}" href="#/start/planning/all">Alles</a>
    </div>
  </section>
  ${rows.length ? `<div class="mechanic-agenda">${rows.map(renderMechanicAgendaCard).join("")}</div>` : `<div class="panel empty">Geen afspraken gevonden.</div>`}
  ${ui.agendaCustomerEventId ? renderAgendaCustomerModal(ui.agendaCustomerEventId) : ""}`;
}

function renderMechanicAgendaCard(event) {
  const details = planningEventDetails(event);
  const projectId = event.project_id || event.workorder_id || "";
  const project = projectId ? byId(state.projects || [], projectId) : null;
  const canOpenProject = project && canAccessProject(project);
  const phone = details.phone || "";
  return `<article class="planning-card ${statusClass(event.status)}">
    <div class="article-head">
      <div>
        <h3>${safeDate(event.start_datetime)} ${eventDateTimeLabel(event)}</h3>
        <p><button class="link-button" type="button" onclick="openAgendaCustomer('${event.id}')">${escapeHtml(details.customer_name)}</button> - <button class="link-button" type="button" onclick="openAgendaCustomer('${event.id}')">${escapeHtml(details.address || "-")} ${escapeHtml(details.postal_code)} ${escapeHtml(details.city)}</button></p>
      </div>
      <span class="badge">${escapeHtml(event.status || "ingepland")}</span>
    </div>
    <div class="meta-grid">
      <div class="meta"><span>Datum</span><strong>${safeDate(event.start_datetime)}</strong></div>
      <div class="meta"><span>Tijd</span><strong>${eventDateTimeLabel(event)}</strong></div>
      <div class="meta"><span>Klant</span><strong>${escapeHtml(details.customer_name)}</strong></div>
      <div class="meta"><span>Adres</span><strong>${escapeHtml(details.address || "-")}</strong></div>
      <div class="meta"><span>Postcode/plaats</span><strong>${escapeHtml(`${details.postal_code || ""} ${details.city || ""}`.trim() || "-")}</strong></div>
      <div class="meta"><span>Telefoon</span><strong>${escapeHtml(phone || "-")}</strong></div>
      <div class="meta"><span>Werkbon</span><strong>${escapeHtml(project ? workorderNumber(project) : event.title || event.workorder_id || "-")}</strong></div>
      <div class="meta"><span>Prioriteit</span><strong>${escapeHtml(event.priority || "normaal")}</strong></div>
    </div>
    ${event.notes ? `<p class="muted">${escapeHtml(event.notes)}</p>` : ""}
    <div class="button-row">
      ${canOpenProject ? `<a class="btn success" href="#/project/${project.id}">Open werkbon</a>` : companySettings().mechanics_can_create_events ? `<button class="btn success" type="button" onclick="createWorkorderFromPlanningEvent('${event.id}')">Werkbon maken</button>` : ""}
      <a class="btn secondary" target="_blank" href="${escapeAttr(planningMapsUrl(event))}">Route openen</a>
      ${phone ? `<a class="btn secondary" href="tel:${escapeAttr(phone)}">Bel klant</a>` : ""}
      ${["onderweg", "bezig", "afgerond"].map((status) => `<button class="btn secondary" type="button" onclick="updatePlanningEvent('${event.id}', 'status', '${status}')">Status: ${status[0].toUpperCase()}${status.slice(1)}</button>`).join("")}
    </div>
  </article>`;
}

function openAgendaCustomer(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || recordCompanyId(event) !== currentCompanyId() || planningMechanicId(event) !== currentUser()?.id) return;
  ui.agendaCustomerEventId = eventId;
  render();
}

function closeAgendaCustomer() {
  ui.agendaCustomerEventId = null;
  render();
}

function renderAgendaCustomerModal(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || recordCompanyId(event) !== currentCompanyId() || planningMechanicId(event) !== currentUser()?.id) return "";
  const details = planningEventDetails(event);
  const linkedProjects = visibleProjects().filter((project) => {
    const sameCustomer = details.customer?.id && (project.customer_id === details.customer.id || project.customerId === details.customer.id);
    const sameAssigned = project.assignedMechanicId === currentUser()?.id || project.mechanicId === currentUser()?.id;
    return sameAssigned && (sameCustomer || project.id === event.project_id || project.id === event.workorder_id);
  });
  return `<section class="modal-backdrop"><div class="panel confirm-modal">
    <div class="article-head"><div><h2>${escapeHtml(details.customer_name)}</h2><p>${escapeHtml(details.address || "-")} ${escapeHtml(details.postal_code)} ${escapeHtml(details.city)}</p></div><button class="btn secondary" type="button" onclick="closeAgendaCustomer()">Sluiten</button></div>
    <div class="meta-grid">
      <div class="meta"><span>Klantnaam</span><strong>${escapeHtml(details.customer_name)}</strong></div>
      <div class="meta"><span>Adres</span><strong>${escapeHtml(details.address || "-")}</strong></div>
      <div class="meta"><span>Postcode</span><strong>${escapeHtml(details.postal_code || "-")}</strong></div>
      <div class="meta"><span>Plaats</span><strong>${escapeHtml(details.city || "-")}</strong></div>
      <div class="meta"><span>Telefoon</span><strong>${escapeHtml(details.phone || "-")}</strong></div>
      <div class="meta"><span>E-mail</span><strong>${escapeHtml(details.email || "-")}</strong></div>
    </div>
    <h3>Notities</h3>
    <p>${escapeHtml(details.notes || "Geen notities.")}</p>
    <h3>Gekoppelde werkbonnen</h3>
    ${linkedProjects.length ? linkedProjects.map((project) => `<p><a href="#/project/${project.id}">${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || project.customer || "-")}</a></p>`).join("") : `<p class="muted">Geen gekoppelde werkbonnen.</p>`}
  </div></section>`;
}

function createWorkorderFromPlanningEvent(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || recordCompanyId(event) !== currentCompanyId() || planningMechanicId(event) !== currentUser()?.id) return;
  if (!companySettings().mechanics_can_create_events) return alert("Werkbon maken vanuit planning is uitgeschakeld door Admin.");
  const details = planningEventDetails(event);
  const now = new Date().toISOString();
  const project = {
    id: uid("project"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: details.customer?.id || event.customer_id || "",
    customerId: details.customer?.id || event.customer_id || "",
    projectName: event.title || `Werkbon ${details.customer_name}`,
    project_name: event.title || `Werkbon ${details.customer_name}`,
    customer: details.customer_name,
    customer_name: details.customer_name,
    address: `${details.address || ""} ${details.postal_code || ""} ${details.city || ""}`.trim(),
    postal_code: details.postal_code,
    city: details.city,
    phone: details.phone,
    technician: currentUser()?.name || "",
    mechanicId: currentUser()?.id || "",
    assignedMechanicId: currentUser()?.id || "",
    assigned_mechanic_id: currentUser()?.id || "",
    workorder_number: nextWorkorderNumber(),
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: dateKey(event.start_datetime) || new Date().toISOString().slice(0, 10),
    selectedKitIds: ["M001"],
    selectedSourceIds: ["M001", GARAGE_BOX_SOURCE],
    sourceChoiceLabel: "Planning",
    status: "in uitvoering",
    description: event.description || event.notes || "",
    createdAt: now,
    created_at: now,
  };
  applyPricingSnapshot(project, event.pricing_category_id || defaultPricingCategory()?.id);
  state.projects.push(project);
  state.usages.push(...state.articles.filter((article) => article.active && isSameCompany(article) && project.selectedKitIds.includes(article.kitId)).map((article) => ({
    id: uid("usage"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
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
  })));
  event.project_id = project.id;
  event.workorder_id = project.id;
  event.title = workorderNumber(project);
  event.updated_at = now;
  saveState();
  location.hash = `#/project/${project.id}`;
}

function saveNewPlanningEvent(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  let customerId = form.get("customer_id");
  let customer = byId(state.customers || [], customerId);
  if (!customer) {
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: form.get("customer_name"),
      contact_person: "",
      address: form.get("address"),
      postal_code: form.get("postal_code"),
      city: form.get("city"),
      phone: form.get("phone"),
      email: form.get("email"),
      notes: "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
    customerId = customer.id;
  }
  let projectId = form.get("project_id");
  let project = projectId && projectId !== "__new__" ? byId(state.projects || [], projectId) : null;
  if (projectId === "__new__") {
    project = createProjectFromPlanning(form, customer, customerId);
    projectId = project.id;
  }
  const mechanicId = form.get("mechanic_id");
  if (project) {
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.technician = mechanicNameById(mechanicId);
    project.customer_id = customerId || project.customer_id || "";
    project.customerId = customerId || project.customerId || "";
    project.customer = customer.customer_name || project.customer;
    project.customer_name = customer.customer_name || project.customer_name;
    project.address = `${customer.address || form.get("address") || ""} ${customer.postal_code || form.get("postal_code") || ""} ${customer.city || form.get("city") || ""}`.trim();
    project.postal_code = customer.postal_code || form.get("postal_code") || "";
    project.city = customer.city || form.get("city") || "";
    project.phone = customer.phone || form.get("phone") || "";
    applyPricingSnapshot(project, form.get("pricing_category_id") || project.pricing_category_id);
  }
  const categorySnapshot = snapshotPricingCategory(pricingCategoryById(form.get("pricing_category_id") || project?.pricing_category_id));
  const planningEvent = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: mechanicId,
    title: project ? workorderNumber(project) : form.get("title"),
    description: form.get("description") || "",
    customer_name: customer.customer_name || form.get("customer_name"),
    address: customer.address || form.get("address"),
    postal_code: customer.postal_code || form.get("postal_code"),
    city: customer.city || form.get("city"),
    phone: customer.phone || form.get("phone"),
    pricing_category_id: categorySnapshot.pricing_category_id,
    pricing_category_name: categorySnapshot.pricing_category_name,
    start_datetime: `${form.get("start_date")}T${form.get("start_time")}`,
    end_datetime: `${form.get("end_date")}T${form.get("end_time")}`,
    status: form.get("status") || "ingepland",
    priority: form.get("priority") || "normaal",
    notes: form.get("notes") || "",
    created_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(planningEvent);
  if (project) {
    notifyWorkorderAssigned(project, planningEvent);
  } else {
    notifyPlanningChange(planningEvent, planningEvent.priority === "spoed" ? "emergency" : "planning_changed", planningEvent.priority === "spoed" ? "Spoedmelding" : "Nieuwe afspraak ingepland", planningEvent.priority === "spoed" ? "Er is een spoedafspraak aan u toegewezen." : "Er is een nieuwe afspraak in uw planning gezet.", planningEvent.priority || "normaal");
  }
  saveState();
  ui.creatingPlanningEvent = false;
  render();
}

function pageTitle(route) {
  if (route.startsWith("login")) return ["WerkbonSysteem.nl", "Loginportaal voor werkbonnen, monteurs, voorraad en bestellingen."];
  if (route.startsWith("start/planning")) return ["Mijn agenda", "Jouw planning, adressen en werkbonnen."];
  if (route.startsWith("call-customer")) return ["Nieuwe klant uit telefoongesprek", "Maak snel een klant, notitie, afspraak of werkbon aan."];
  if (route.startsWith("notifications")) return ["Meldingen", "Nieuwe werkbonnen, planningwijzigingen en spoedmeldingen."];
  if (route.startsWith("start")) return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
  if (route.startsWith("new")) return ["Nieuw project", "Maak direct een registratie aan."];
  if (route.startsWith("active")) return ["Lopende projecten", "Open projecten die nog ingevuld worden."];
  if (route.startsWith("completed")) return ["Afgeronde projecten", "Projectregistraties en aanvullingen."];
  if (route.startsWith("project")) return ["Monteurscherm", "Snel onderdelen registreren."];
  if (route.startsWith("summary")) return ["Project afronden", "Controleer de aanvullijst en aantallen."];
  if (route.startsWith("admin") || route.startsWith("office")) return ["Admin", "Bedrijfsportal voor kosten, voorraad, gebruikers en bestellingen."];
  if (route.startsWith("platform")) return ["Platform Admin Dashboard", "Beheer tenants, gebruikers, abonnementen en platformgebruik."];
  return ["WerkbonSysteem.nl", "Multi-company werkbonplatform."];
}

function renderRoute(route) {
  const [name, id, sub] = route.split("/");
  if (name === "login") return renderLogin();
  if (!currentUser()) return renderLogin();
  if (name === "agenda" || name === "calendar") {
    location.hash = isMechanic() ? "#/start/planning" : "#/admin/planning";
    return "";
  }
  if ((name === "admin" || name === "office" || name === "manage") && (id === "agenda" || id === "calendar")) {
    location.hash = "#/admin/planning";
    return "";
  }
  if (name === "platform") return isPlatformSuperAdmin() ? renderPlatform(id) : renderNoOfficeAccess();
  if ((name === "admin" || name === "office" || name === "manage") && !isOfficeAdmin()) return renderNoOfficeAccess();
  if (isPlatformSuperAdmin() && name !== "platform") return renderPlatform();
  if (name === "notifications") return isMechanic() ? renderNotificationsCenter() : renderNoOfficeAccess();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "settlement") return renderSettlementPrompt(id);
  if (name === "payment") return renderMechanicPayment(id);
  if (name === "start" && id === "planning") return renderMechanicAgendaPage(sub || "week");
  if (name === "start") return renderHome();
  if (name === "new") return renderNewProject();
  if (name === "active") return renderProjectList("Open");
  if (name === "completed") return renderProjectList("Afgerond");
  if (name === "project") return renderTechnician(id);
  if (name === "summary") return renderSummary(id);
  if (name === "admin" || name === "office") return renderOffice(id);
  if (name === "manage") return renderManage();
  return renderHome();
}

function canCreatePlanningSelection() {
  return isTenantAdmin() || isPlatformSuperAdmin() || isMechanic();
}

function planningStatuses() {
  return ["ingepland", "onderweg", "bezig", "afgerond", "offerte nodig", "gefactureerd", "geannuleerd", "verplaatst"];
}

function createProjectFromPlanning(form, customer, customerId) {
  const now = new Date().toISOString();
  const mechanicId = isMechanic() ? currentUser()?.id : form.get("mechanic_id");
  const title = form.get("title") || "Service afspraak";
  const project = {
    id: uid("project"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    customerId: customerId || "",
    projectName: title,
    project_name: title,
    customer: customer.customer_name,
    customer_name: customer.customer_name,
    address: `${customer.address || ""} ${customer.postal_code || ""} ${customer.city || ""}`.trim(),
    postal_code: customer.postal_code || "",
    city: customer.city || "",
    phone: customer.phone || "",
    technician: mechanicNameById(mechanicId) || currentUser()?.name || "",
    mechanicId,
    assignedMechanicId: mechanicId,
    assigned_mechanic_id: mechanicId,
    workorder_number: nextWorkorderNumber(),
    createdBy: currentUser()?.id || "",
    created_by: currentUser()?.id || "",
    date: form.get("start_date"),
    selectedKitIds: ["M001"],
    selectedSourceIds: ["M001", GARAGE_BOX_SOURCE],
    sourceChoiceLabel: "Planning",
    status: form.get("status") || "ingepland",
    description: form.get("description") || "",
    createdAt: now,
    created_at: now,
  };
  applyPricingSnapshot(project, form.get("pricing_category_id"));
  state.projects.push(project);
  const usages = state.articles
    .filter((article) => article.active && isSameCompany(article) && project.selectedKitIds.includes(article.kitId))
    .map((article) => ({
      id: uid("usage"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
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
  state.usages.push(...usages);
  return project;
}

function filteredPlanningRowsForMechanic() {
  const user = currentUser();
  if (!user || !isMechanic()) return [];
  return (state.planningEvents || [])
    .filter((event) => recordCompanyId(event) === recordCompanyId(user))
    .filter((event) => planningMechanicId(event) === user.id)
    .filter((event) => ui.planningStatusFilters?.[event.status || "ingepland"] !== false)
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")));
}

function mechanicPlanningEvents(scope = "all") {
  const rows = filteredPlanningRowsForMechanic();
  const today = dateKey(new Date().toISOString());
  const weekKeys = new Set(weekDays(new Date()).map((day) => dateKey(day.toISOString())));
  return rows.filter((event) => {
    const key = dateKey(event.start_datetime);
    if (scope === "today") return key === today;
    if (scope === "week") return weekKeys.has(key);
    return true;
  });
}

function renderPlanningToolbar() {
  ensurePlanningUi();
  const title = isMechanic() ? "Mijn agenda" : planningMonthLabel();
  const subtitle = isMechanic() ? "Eigen afspraken per dag, week en maand" : ui.planningView === "week" ? "Weekplanning" : ui.planningView === "dag" ? "Dagplanning" : "Maandplanning";
  return `<div class="calendar-toolbar">
    <div>
      <h2>${escapeHtml(title)}</h2>
      <span>${escapeHtml(subtitle)}</span>
    </div>
    <div class="calendar-actions">
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(-1)">&#8249;</button>
      <button class="btn secondary" type="button" onclick="goPlanningToday()">Vandaag</button>
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(1)">&#8250;</button>
      <div class="segmented">
        ${["dag", "week", "maand"].map((view) => `<button type="button" class="${ui.planningView === view ? "active" : ""}" onclick="setPlanningView('${view}')">${view[0].toUpperCase()}${view.slice(1)}</button>`).join("")}
      </div>
      <button class="btn success" type="button" onclick="openNewPlanningEvent()">Afspraak maken</button>
      ${isMechanic() ? `<button class="btn secondary" type="button" onclick="openMechanicCustomerCreate()">Klant aanmaken</button>` : ""}
    </div>
  </div>`;
}

function renderCalendarShell(rows) {
  const mechanics = companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const content = ui.planningView === "maand" ? renderMonthCalendar(rows) : renderTimeGridCalendar(rows);
  return `<section class="calendar-panel">
    ${renderPlanningToolbar()}
    <div class="calendar-shell">
      ${isMechanic() ? renderMechanicCalendarSidebar() : renderPlanningSidebar(mechanics)}
      <div class="calendar-main">${content}</div>
    </div>
  </section>`;
}

function renderMechanicCalendarSidebar() {
  ensurePlanningUi();
  return `<aside class="calendar-sidebar">
    <div class="sidebar-section">
      <h3>Mijn agenda</h3>
      <p class="muted">Alleen afspraken met jouw monteuraccount worden getoond.</p>
    </div>
    <div class="sidebar-section">
      <h3>Status</h3>
      ${planningStatuses().map((status) => `<label class="check-line"><input type="checkbox" ${ui.planningStatusFilters[status] !== false ? "checked" : ""} onchange="togglePlanningStatus('${status}', this.checked)" /> <span class="status-dot ${statusClass(status)}"></span>${status}</label>`).join("")}
    </div>
  </aside>`;
}

function renderCalendarEventBlock(event) {
  const details = planningEventDetails(event);
  return `<button class="calendar-event ${statusClass(event.status)} ${event.priority === "spoed" ? "urgent" : ""}" style="${eventPositionStyle(event)}" type="button" onpointerdown="event.stopPropagation()" ondblclick="event.stopPropagation()" onclick="openPlanningEdit('${event.id}')">
    <strong>${escapeHtml(details.customer_name || event.title || "Afspraak")}</strong>
    <span>${eventDateTimeLabel(event)} - ${escapeHtml(event.description || event.title || "")}</span>
    <span>${escapeHtml(isMechanic() ? details.address || "" : mechanicNameById(event.mechanic_id))}</span>
    <small>${escapeHtml(projectLabelForPlanningEvent(event))}</small>
  </button>`;
}

function projectLabelForPlanningEvent(event) {
  const project = byId(state.projects || [], event.project_id || event.workorder_id || "");
  return project ? workorderNumber(project) : event.workorder_id || "Geen werkbon";
}

function renderAdminPlanningCards(rows) {
  if (!rows.length) return `<div class="empty">Geen afspraken in deze periode.</div>`;
  return `<div class="mobile-planning-list">${rows.map((event) => {
    const details = planningEventDetails(event);
    return `<article class="planning-card ${statusClass(event.status)}">
      <div class="article-head"><div><h3>${safeDate(event.start_datetime)} ${eventDateTimeLabel(event)}</h3><p>${escapeHtml(details.customer_name || "-")} - ${escapeHtml(details.address || "-")}</p></div><span class="badge">${escapeHtml(event.priority || "normaal")}</span></div>
      <div class="meta-grid">
        ${!isMechanic() ? `<div class="meta"><span>Monteur</span><strong>${escapeHtml(mechanicNameById(event.mechanic_id))}</strong></div>` : ""}
        <div class="meta"><span>Werkbon</span><strong>${escapeHtml(projectLabelForPlanningEvent(event))}</strong></div>
        <div class="meta"><span>Status</span><strong>${escapeHtml(event.status || "-")}</strong></div>
        <div class="meta"><span>Type werkzaamheden</span><strong>${escapeHtml(event.description || event.title || "-")}</strong></div>
      </div>
      <button class="btn secondary" type="button" onclick="openPlanningEdit('${event.id}')">Open afspraak</button>
    </article>`;
  }).join("")}</div>`;
}

function renderPlanning() {
  ensurePlanningUi();
  const rows = isMechanic() ? filteredPlanningRowsForMechanic() : filteredPlanningRowsForAdmin();
  return `${renderCalendarShell(rows)}${ui.creatingPlanningEvent ? renderNewPlanningModal() : ""}${ui.editingPlanningEventId ? renderPlanningEditModal(ui.editingPlanningEventId) : ""}${ui.creatingMechanicCustomer ? renderMechanicCustomerModal() : ""}`;
}

function renderMechanicAgendaPage() {
  if (!isMechanic()) return renderNoOfficeAccess();
  return renderPlanning();
}

function renderNewPlanningModal() {
  ensurePricingCategories();
  const mechanics = isMechanic() ? [currentUser()] : companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const customers = isMechanic() ? mechanicVisibleCustomers() : activeCustomers();
  const projects = visibleProjects().filter((project) => !isProjectCompleted(project));
  const defaults = ui.newPlanningDefaults || {};
  const baseDate = defaults.start_date || ui.planningDate || new Date().toISOString().slice(0, 10);
  const endDate = defaults.end_date || baseDate;
  const startTime = defaults.start_time || "08:00";
  const endTime = defaults.end_time || "10:00";
  const statusDefault = defaults.status || "ingepland";
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>Nieuwe afspraak</h2><p>Koppel een klant, adres en eventueel een werkbon.</p></div><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Sluiten</button></div>
    <form class="form-grid" onsubmit="saveNewPlanningEvent(event)">
      <label>Klant kiezen <select name="customer_id" onchange="fillPlanningModalCustomer(this.value, 'new-planning')"><option value="">Nieuwe klant of handmatig</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}</select></label>
      <label>Werkbon koppelen <select name="project_id"><option value="">Geen werkbon</option><option value="__new__">Nieuwe werkbon maken</option>${projects.map((project) => `<option value="${project.id}">${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || "")}</option>`).join("")}</select></label>
      <label>Categorie <select name="pricing_category_id" required>${pricingCategoryOptions()}</select></label>
      <label>Klantnaam <input name="customer_name" id="new-planning-customer-name" required /></label>
      <label>Adres <input name="address" id="new-planning-address" required /></label>
      <label>Postcode <input name="postal_code" id="new-planning-postal-code" /></label>
      <label>Plaats <input name="city" id="new-planning-city" /></label>
      <label>Telefoon <input name="phone" id="new-planning-phone" /></label>
      <label>E-mail <input name="email" id="new-planning-email" type="email" /></label>
      <label>Monteur <select name="mechanic_id" required ${isMechanic() ? "disabled" : ""}>${mechanics.map((user) => `<option value="${user.id}" ${user.id === currentUser()?.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Type werkzaamheden <input name="title" required value="Service afspraak" /></label>
      <label>Omschrijving <input name="description" /></label>
      <label>Startdatum <input name="start_date" type="date" required value="${escapeAttr(baseDate)}" /></label>
      <label>Starttijd <input name="start_time" type="time" required value="${escapeAttr(startTime)}" /></label>
      <label>Einddatum <input name="end_date" type="date" required value="${escapeAttr(endDate)}" /></label>
      <label>Eindtijd <input name="end_time" type="time" required value="${escapeAttr(endTime)}" /></label>
      <label>Status <select name="status">${["ingepland", "onderweg", "bezig"].map((status) => `<option ${status === statusDefault ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes"></textarea></label>
      <div class="button-row full"><button class="btn success" type="submit">Opslaan</button><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Annuleren</button></div>
    </form>
  </section></div>`;
}

function mechanicVisibleCustomers() {
  const user = currentUser();
  if (!user) return [];
  const customerIds = new Set();
  filteredPlanningRowsForMechanic().forEach((event) => {
    if (event.customer_id) customerIds.add(event.customer_id);
  });
  visibleProjects().forEach((project) => {
    if (project.customer_id || project.customerId) customerIds.add(project.customer_id || project.customerId);
  });
  return (state.customers || []).filter((customer) => recordCompanyId(customer) === currentCompanyId() && (customerIds.has(customer.id) || customer.created_by === user.id));
}

function saveNewPlanningEvent(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  let customerId = form.get("customer_id");
  let customer = byId(state.customers || [], customerId);
  if (!customer) {
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: form.get("customer_name"),
      contact_person: "",
      address: form.get("address"),
      postal_code: form.get("postal_code"),
      city: form.get("city"),
      phone: form.get("phone"),
      email: form.get("email"),
      notes: form.get("notes") || "",
      source: isMechanic() ? "mechanic" : "admin",
      created_by: currentUser()?.id || "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
    customerId = customer.id;
  }
  let projectId = form.get("project_id");
  let project = projectId && projectId !== "__new__" ? byId(state.projects || [], projectId) : null;
  const mechanicId = isMechanic() ? currentUser()?.id : form.get("mechanic_id");
  if (projectId === "__new__") {
    project = createProjectFromPlanning(form, customer, customerId);
    projectId = project.id;
  }
  if (project) {
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.technician = mechanicNameById(mechanicId) || currentUser()?.name || "";
    project.customer_id = customerId || project.customer_id || "";
    project.customerId = customerId || project.customerId || "";
    project.customer = customer.customer_name || project.customer;
    project.customer_name = customer.customer_name || project.customer_name;
    project.address = `${customer.address || form.get("address") || ""} ${customer.postal_code || form.get("postal_code") || ""} ${customer.city || form.get("city") || ""}`.trim();
    project.postal_code = customer.postal_code || form.get("postal_code") || "";
    project.city = customer.city || form.get("city") || "";
    project.phone = customer.phone || form.get("phone") || "";
    project.status = form.get("status") || "ingepland";
    applyPricingSnapshot(project, form.get("pricing_category_id") || project.pricing_category_id);
  }
  const categorySnapshot = snapshotPricingCategory(pricingCategoryById(form.get("pricing_category_id") || project?.pricing_category_id));
  const planningEvent = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: mechanicId,
    title: project ? workorderNumber(project) : form.get("title"),
    description: form.get("description") || form.get("title") || "",
    customer_name: customer.customer_name || form.get("customer_name"),
    address: customer.address || form.get("address"),
    postal_code: customer.postal_code || form.get("postal_code"),
    city: customer.city || form.get("city"),
    phone: customer.phone || form.get("phone"),
    email: customer.email || form.get("email"),
    pricing_category_id: categorySnapshot.pricing_category_id,
    pricing_category_name: categorySnapshot.pricing_category_name,
    start_datetime: `${form.get("start_date")}T${form.get("start_time")}`,
    end_datetime: `${form.get("end_date")}T${form.get("end_time")}`,
    status: form.get("status") || "ingepland",
    priority: form.get("priority") || "normaal",
    notes: form.get("notes") || "",
    created_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(planningEvent);
  if (project && !isMechanic()) {
    notifyWorkorderAssigned(project, planningEvent);
  } else if (!project && !isMechanic()) {
    notifyPlanningChange(planningEvent, planningEvent.priority === "spoed" ? "emergency" : "planning_changed", planningEvent.priority === "spoed" ? "Spoedmelding" : "Nieuwe afspraak ingepland", planningEvent.priority === "spoed" ? "Er is een spoedafspraak aan u toegewezen." : "Er is een nieuwe afspraak in uw planning gezet.", planningEvent.priority || "normaal");
  }
  saveState();
  ui.creatingPlanningEvent = false;
  render();
}

function renderPlanningEditModal(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return "";
  if (isMechanic() && planningMechanicId(event) !== currentUser()?.id) return "";
  const mechanics = isMechanic() ? [currentUser()] : companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const details = planningEventDetails(event);
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>${escapeHtml(event.title || "Afspraak")}</h2><p>${escapeHtml(details.customer_name || "-")} - ${escapeHtml(details.address || "-")}</p></div><button class="btn secondary" type="button" onclick="closePlanningEdit()">Sluiten</button></div>
    <form class="form-grid" onsubmit="savePlanningEdit(event, '${event.id}')">
      <label>Type werkzaamheden <input name="title" value="${escapeAttr(event.title || "")}" required /></label>
      <label>Klant <input name="customer_name" value="${escapeAttr(details.customer_name || "")}" required /></label>
      <label>Adres <input name="address" value="${escapeAttr(details.address || "")}" required /></label>
      <label>Postcode <input name="postal_code" value="${escapeAttr(details.postal_code || "")}" /></label>
      <label>Plaats <input name="city" value="${escapeAttr(details.city || "")}" /></label>
      <label>Telefoon <input name="phone" value="${escapeAttr(details.phone || "")}" /></label>
      <label>Monteur <select name="mechanic_id" ${isMechanic() ? "disabled" : ""}>${mechanics.map((user) => `<option value="${user.id}" ${planningMechanicId(event) === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Start <input name="start_datetime" type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" required /></label>
      <label>Einde <input name="end_datetime" type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" required /></label>
      <label>Status <select name="status">${["ingepland", "onderweg", "bezig", "afgerond", "offerte nodig", "gefactureerd", "geannuleerd", "verplaatst"].map((status) => `<option value="${status}" ${event.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option value="${priority}" ${event.priority === priority ? "selected" : ""}>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes">${escapeHtml(event.notes || "")}</textarea></label>
      <div class="button-row full">
        <button class="btn success" type="submit">Opslaan</button>
        ${event.project_id ? `<a class="btn secondary" href="#/project/${event.project_id}">Open werkbon</a>` : `<button class="btn secondary" type="button" onclick="createWorkorderFromPlanningEvent('${event.id}')">Werkbon maken</button>`}
        <a class="btn secondary" target="_blank" href="${escapeAttr(planningMapsUrl(event))}">Route</a>
        ${!isMechanic() ? `<button class="btn danger" type="button" onclick="deletePlanningEvent('${event.id}')">Verwijderen</button>` : ""}
      </div>
    </form>
  </section></div>`;
}

function savePlanningEdit(submitEvent, eventId) {
  submitEvent.preventDefault();
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (isMechanic() && planningMechanicId(event) !== currentUser()?.id) return;
  const form = new FormData(submitEvent.target);
  const previous = { mechanic_id: event.mechanic_id, start_datetime: event.start_datetime, end_datetime: event.end_datetime, status: event.status, priority: event.priority };
  const mechanicId = isMechanic() ? currentUser()?.id : form.get("mechanic_id");
  ["title", "customer_name", "address", "postal_code", "city", "phone", "start_datetime", "end_datetime", "status", "priority", "notes"].forEach((field) => {
    event[field] = form.get(field) || "";
  });
  event.mechanic_id = mechanicId;
  event.updated_at = new Date().toISOString();
  const project = byId(state.projects || [], event.project_id || event.workorder_id || "");
  if (project && canAccessProject(project)) {
    project.status = event.status;
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.customer = event.customer_name;
    project.customer_name = event.customer_name;
    project.address = `${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`.trim();
    project.postal_code = event.postal_code;
    project.city = event.city;
    project.phone = event.phone;
  }
  if (!isMechanic()) {
    const moved = previous.start_datetime !== event.start_datetime || previous.end_datetime !== event.end_datetime;
    const reassigned = previous.mechanic_id !== event.mechanic_id;
    if (event.status === "geannuleerd" && previous.status !== "geannuleerd") notifyPlanningChange(event, "planning_cancelled", "Afspraak geannuleerd", "Een afspraak in uw planning is geannuleerd.", event.priority);
    else if (moved) notifyPlanningChange(event, "planning_moved", "Afspraak verplaatst", "Een afspraak in uw planning is verplaatst.", event.priority);
    else if (reassigned || previous.priority !== event.priority || previous.status !== event.status) notifyPlanningChange(event, event.priority === "spoed" ? "emergency" : "planning_changed", event.priority === "spoed" ? "Spoedmelding" : "Planning gewijzigd", "Uw planning is gewijzigd.", event.priority);
  }
  saveState();
  closePlanningEdit();
}

function openMechanicCustomerCreate() {
  ui.creatingMechanicCustomer = true;
  render();
}

function closeMechanicCustomerCreate() {
  ui.creatingMechanicCustomer = false;
  render();
}

function renderMechanicCustomerModal() {
  return `<section class="modal-backdrop"><form class="panel confirm-modal" onsubmit="saveMechanicCustomer(event)">
    <div class="article-head"><div><h2>Klant aanmaken</h2><p>Deze klant wordt zichtbaar voor kantoor en voor jouw eigen afspraken/werkbonnen.</p></div><button class="btn secondary" type="button" onclick="closeMechanicCustomerCreate()">Sluiten</button></div>
    <div class="form-grid">
      <label>Naam <input name="customer_name" required /></label>
      <label>Telefoonnummer <input name="phone" /></label>
      <label>E-mail <input name="email" type="email" /></label>
      <label>Adres <input name="address" required /></label>
      <label>Postcode <input name="postal_code" /></label>
      <label>Plaats <input name="city" /></label>
      <label class="full">Opmerkingen <textarea name="notes"></textarea></label>
    </div>
    <div class="button-row"><button class="btn success" type="submit">Klant opslaan</button><button class="btn secondary" type="button" onclick="closeMechanicCustomerCreate()">Annuleren</button></div>
  </form></section>`;
}

function saveMechanicCustomer(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  state.customers = state.customers || [];
  state.customers.push({
    id: uid("customer"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_name: String(form.get("customer_name") || "").trim(),
    contact_person: String(form.get("customer_name") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    email: String(form.get("email") || "").trim(),
    address: String(form.get("address") || "").trim(),
    postal_code: String(form.get("postal_code") || "").trim(),
    city: String(form.get("city") || "").trim(),
    notes: String(form.get("notes") || "").trim(),
    source: "mechanic",
    created_by: currentUser()?.id || "",
    active: true,
    created_at: now,
    updated_at: now,
  });
  ui.creatingMechanicCustomer = false;
  saveState();
  render();
}

const MECHANIC_PERMISSION_FIELDS = [
  ["can_create_own_appointments", "Mag eigen afspraken maken"],
  ["can_create_customers", "Klanten aanmaken"],
  ["can_edit_customers", "Klanten bewerken"],
  ["can_close_workorders", "Werkbonnen afsluiten"],
  ["can_make_quotes", "Offertes maken"],
  ["can_register_payments", "Betalingen registreren"],
  ["can_manage_inventory", "Voorraad beheren"],
  ["can_delete_photos", "Foto's verwijderen"],
];

const EMAIL_PERMISSION_FIELDS = [
  ["can_read_email", "E-mails lezen"],
  ["can_reply_email", "E-mails beantwoorden"],
  ["can_archive_email", "E-mails verwijderen/archiveren"],
  ["can_connect_mailbox", "Mailbox koppelen"],
  ["can_manage_email_templates", "Templates beheren"],
];

function hasMechanicPermission(field, user = currentUser()) {
  if (!user) return false;
  if (userRole(user) !== ROLES.MECHANIC) return true;
  if (field === "can_close_workorders") return user[field] !== false;
  return Boolean(user[field]);
}

function hasEmailPermission(field, user = currentUser()) {
  if (!user) return false;
  if (isPlatformSuperAdmin() || isCompanyAdmin()) return true;
  return Boolean(user[field]);
}

function renderMechanicPermissionSelect(user, field) {
  return `<select onchange="updateUser('${user.id}', '${field}', this.value === 'true')"><option value="false" ${!user[field] ? "selected" : ""}>Nee</option><option value="true" ${user[field] ? "selected" : ""}>Ja</option></select>`;
}

function renderUserPermissionSelect(user, field) {
  return `<select onchange="updateUser('${user.id}', '${field}', this.value === 'true')"><option value="false" ${!user[field] ? "selected" : ""}>Nee</option><option value="true" ${user[field] ? "selected" : ""}>Ja</option></select>`;
}

function renderUsers() {
  const users = state.users.filter((user) => !user.deleted && (isPlatformSuperAdmin() || isSameCompany(user)));
  const roleOptions = [
    [ROLES.MECHANIC, "Mechanic"],
    [ROLES.COMPANY_ADMIN, "Company Admin"],
    ...(isPlatformSuperAdmin() ? [[ROLES.PLATFORM_ADMIN, "Platform Admin"]] : []),
  ];
  const companyOptions = (state.companies || []).filter((company) => company.active !== false);
  const pendingDeleteUser = ui.pendingDeleteUserId ? byId(state.users, ui.pendingDeleteUserId) : null;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Nieuwe gebruiker</h2>
      <form class="form-grid" onsubmit="addUser(event)">
        <label>Naam <input name="name" required /></label>
        <label>E-mail <input name="email" type="email" required /></label>
        <label>Wachtwoord <input name="password" type="text" required /></label>
        ${isPlatformSuperAdmin() ? `<label>Company <select name="company_id"><option value="">Geen company (alleen platform_admin)</option>${companyOptions.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}</select></label>` : ""}
        <label>Rol <select name="role" required>${roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
        ${MECHANIC_PERMISSION_FIELDS.map(([field, label]) => `<label>${label}<select name="${field}"><option value="false">Nee</option><option value="true" ${field === "can_close_workorders" ? "selected" : ""}>Ja</option></select></label>`).join("")}
        ${EMAIL_PERMISSION_FIELDS.map(([field, label]) => `<label>${label}<select name="${field}"><option value="false">Nee</option><option value="true" ${["can_read_email", "can_reply_email"].includes(field) ? "selected" : ""}>Ja</option></select></label>`).join("")}
        <button class="btn success" type="submit">Gebruiker aanmaken</button>
      </form>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Actief</th><th>Naam</th><th>E-mail</th><th>Company</th><th>Rol</th>${MECHANIC_PERMISSION_FIELDS.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}${EMAIL_PERMISSION_FIELDS.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}<th>Actie</th></tr></thead>
      <tbody>${users.map((user) => `<tr>
        <td><input type="checkbox" ${user.active ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /></td>
        <td><input value="${escapeAttr(user.name)}" onchange="updateUser('${user.id}', 'name', this.value)" /></td>
        <td>${escapeHtml(user.email)}</td>
        <td>${escapeHtml(user.role === ROLES.PLATFORM_ADMIN ? "Platform" : byId(state.companies || [], recordCompanyId(user))?.name || recordCompanyId(user))}</td>
        <td><select onchange="updateUser('${user.id}', 'role', this.value)">${roleOptions.map(([value, label]) => `<option value="${value}" ${user.role === value ? "selected" : ""}>${label}</option>`).join("")}</select></td>
        ${MECHANIC_PERMISSION_FIELDS.map(([field]) => `<td>${user.role === ROLES.MECHANIC ? renderMechanicPermissionSelect(user, field) : "-"}</td>`).join("")}
        ${EMAIL_PERMISSION_FIELDS.map(([field]) => `<td>${renderUserPermissionSelect(user, field)}</td>`).join("")}
        <td><div class="button-row" style="margin-top:0"><button class="btn secondary" type="button" onclick="saveUserRow()">Opslaan</button><button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active ? "Deactiveren" : "Activeren"}</button><button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button></div></td>
      </tr>`).join("")}</tbody>
    </table></div>
    ${pendingDeleteUser ? `<section class="modal-backdrop"><div class="panel confirm-modal"><h2>Gebruiker verwijderen</h2><p>Weet je zeker dat je deze gebruiker wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.</p><div class="button-row"><button class="btn secondary" type="button" onclick="cancelDeleteUser()">Annuleren</button><button class="btn danger" type="button" onclick="confirmDeleteUser()">Definitief verwijderen</button></div></div></section>` : ""}`;
}

function addUser(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const role = String(form.get("role") || ROLES.MECHANIC);
  if (!isPlatformSuperAdmin() && role === ROLES.PLATFORM_ADMIN) return alert("Company Admin mag geen platform_admin aanmaken.");
  const email = String(form.get("email") || "").trim().toLowerCase();
  if ((state.users || []).some((user) => String(user.email || "").toLowerCase() === email)) return alert("E-mail moet uniek zijn.");
  const companyId = isPlatformSuperAdmin() ? (form.get("company_id") || null) : currentCompanyId();
  if (role !== ROLES.PLATFORM_ADMIN && !companyId) return alert("Company is verplicht voor deze rol.");
  const now = new Date().toISOString();
  const user = {
    id: uid("user"),
    company_id: role === ROLES.PLATFORM_ADMIN ? null : companyId,
    companyId: role === ROLES.PLATFORM_ADMIN ? null : companyId,
    name: String(form.get("name") || "").trim(),
    email,
    password: String(form.get("password") || ""),
    role,
    active: true,
    created_at: now,
    createdAt: now,
  };
  MECHANIC_PERMISSION_FIELDS.forEach(([field]) => {
    user[field] = role === ROLES.MECHANIC ? form.get(field) === "true" : false;
  });
  EMAIL_PERMISSION_FIELDS.forEach(([field]) => {
    user[field] = form.get(field) === "true";
  });
  user.can_create_customer_from_call = user.can_create_customers;
  state.users.push(user);
  saveState();
  render();
}

function updateUser(userId, field, value) {
  const user = byId(state.users, userId);
  if (!canManageUser(user)) return;
  if (field === "role" && value === ROLES.PLATFORM_ADMIN && !isPlatformSuperAdmin()) return;
  if (!isPlatformSuperAdmin() && field === "role" && value !== ROLES.MECHANIC && value !== ROLES.COMPANY_ADMIN) return;
  const permissionFields = [...MECHANIC_PERMISSION_FIELDS, ...EMAIL_PERMISSION_FIELDS].map(([permission]) => permission);
  if (permissionFields.includes(field) && user.role !== ROLES.MECHANIC) return;
  user[field] = ["active", "can_create_customer_from_call", ...permissionFields].includes(field) ? Boolean(value) : value;
  if (field === "can_create_customers") user.can_create_customer_from_call = Boolean(value);
  saveState();
  render();
}

function canCreatePlanningSelection() {
  if (isTenantAdmin() || isPlatformSuperAdmin()) return true;
  return isMechanic() && hasMechanicPermission("can_create_own_appointments");
}

function renderPlanningToolbar() {
  ensurePlanningUi();
  const title = isMechanic() ? "Mijn agenda" : planningMonthLabel();
  const subtitle = isMechanic() ? "Eigen afspraken per dag, week en maand" : ui.planningView === "week" ? "Weekplanning" : ui.planningView === "dag" ? "Dagplanning" : "Maandplanning";
  const canCreateAppointment = canCreatePlanningSelection();
  const canCreateCustomer = isMechanic() ? hasMechanicPermission("can_create_customers") : true;
  return `<div class="calendar-toolbar">
    <div>
      <h2>${escapeHtml(title)}</h2>
      <span>${escapeHtml(subtitle)}</span>
    </div>
    <div class="calendar-actions">
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(-1)">&#8249;</button>
      <button class="btn secondary" type="button" onclick="goPlanningToday()">Vandaag</button>
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(1)">&#8250;</button>
      <div class="segmented">
        ${["dag", "week", "maand"].map((view) => `<button type="button" class="${ui.planningView === view ? "active" : ""}" onclick="setPlanningView('${view}')">${view[0].toUpperCase()}${view.slice(1)}</button>`).join("")}
      </div>
      ${canCreateAppointment ? `<button class="btn success" type="button" onclick="openNewPlanningEvent()">Afspraak maken</button>` : ""}
      ${isMechanic() && canCreateCustomer ? `<button class="btn secondary" type="button" onclick="openMechanicCustomerCreate()">Klant aanmaken</button>` : ""}
    </div>
  </div>`;
}

function openNewPlanningEvent() {
  if (!canCreatePlanningSelection()) return alert("Je hebt geen recht om eigen afspraken te maken.");
  ui.newPlanningDefaults = null;
  ui.creatingPlanningEvent = true;
  render();
}

function createPlanningEvent(data = {}) {
  if (!canCreatePlanningSelection()) return alert("Je hebt geen recht om eigen afspraken te maken.");
  ui.newPlanningDefaults = {
    start_date: data.start_date || ui.planningDate || new Date().toISOString().slice(0, 10),
    end_date: data.end_date || data.start_date || ui.planningDate || new Date().toISOString().slice(0, 10),
    start_time: data.start_time || "08:00",
    end_time: data.end_time || "09:00",
    status: data.status || "ingepland",
  };
  ui.creatingPlanningEvent = true;
  render();
}

function renderNewPlanningModal() {
  if (isMechanic() && !hasMechanicPermission("can_create_own_appointments")) return "";
  ensurePricingCategories();
  const mechanics = isMechanic() ? [currentUser()] : companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const customers = isMechanic() ? mechanicVisibleCustomers() : activeCustomers();
  const projects = visibleProjects().filter((project) => !isProjectCompleted(project));
  const defaults = ui.newPlanningDefaults || {};
  const baseDate = defaults.start_date || ui.planningDate || new Date().toISOString().slice(0, 10);
  const endDate = defaults.end_date || baseDate;
  const startTime = defaults.start_time || "08:00";
  const endTime = defaults.end_time || "10:00";
  const statusDefault = defaults.status || "ingepland";
  const canCreateCustomer = !isMechanic() || hasMechanicPermission("can_create_customers");
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>Nieuwe afspraak</h2><p>Koppel een klant, adres en eventueel een werkbon.</p></div><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Sluiten</button></div>
    <form class="form-grid" onsubmit="saveNewPlanningEvent(event)">
      <label>Klant kiezen <select name="customer_id" onchange="fillPlanningModalCustomer(this.value, 'new-planning')"><option value="">${canCreateCustomer ? "Nieuwe klant of handmatig" : "Kies bestaande klant"}</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}</select></label>
      <label>Werkbon koppelen <select name="project_id"><option value="">Geen werkbon</option><option value="__new__">Nieuwe werkbon maken</option>${projects.map((project) => `<option value="${project.id}">${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || "")}</option>`).join("")}</select></label>
      <label>Categorie <select name="pricing_category_id" required>${pricingCategoryOptions()}</select></label>
      <label>Klantnaam <input name="customer_name" id="new-planning-customer-name" ${canCreateCustomer ? "" : "readonly"} required /></label>
      <label>Adres <input name="address" id="new-planning-address" ${canCreateCustomer ? "" : "readonly"} required /></label>
      <label>Postcode <input name="postal_code" id="new-planning-postal-code" ${canCreateCustomer ? "" : "readonly"} /></label>
      <label>Plaats <input name="city" id="new-planning-city" ${canCreateCustomer ? "" : "readonly"} /></label>
      <label>Telefoon <input name="phone" id="new-planning-phone" ${canCreateCustomer ? "" : "readonly"} /></label>
      <label>E-mail <input name="email" id="new-planning-email" type="email" ${canCreateCustomer ? "" : "readonly"} /></label>
      <label>Monteur <select name="mechanic_id" required ${isMechanic() ? "disabled" : ""}>${mechanics.map((user) => `<option value="${user.id}" ${user.id === currentUser()?.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Type werkzaamheden <input name="title" required value="Service afspraak" /></label>
      <label>Omschrijving <input name="description" /></label>
      <label>Startdatum <input name="start_date" type="date" required value="${escapeAttr(baseDate)}" /></label>
      <label>Starttijd <input name="start_time" type="time" required value="${escapeAttr(startTime)}" /></label>
      <label>Einddatum <input name="end_date" type="date" required value="${escapeAttr(endDate)}" /></label>
      <label>Eindtijd <input name="end_time" type="time" required value="${escapeAttr(endTime)}" /></label>
      <label>Status <select name="status">${["ingepland", "onderweg", "bezig"].map((status) => `<option ${status === statusDefault ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes"></textarea></label>
      <div class="button-row full"><button class="btn success" type="submit">Opslaan</button><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Annuleren</button></div>
    </form>
  </section></div>`;
}

function saveNewPlanningEvent(event) {
  event.preventDefault();
  if (isMechanic() && !hasMechanicPermission("can_create_own_appointments")) return alert("Je hebt geen recht om eigen afspraken te maken.");
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  let customerId = form.get("customer_id");
  let customer = byId(state.customers || [], customerId);
  if (!customer) {
    if (isMechanic() && !hasMechanicPermission("can_create_customers")) return alert("Je hebt geen recht om klanten aan te maken.");
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: form.get("customer_name"),
      contact_person: "",
      address: form.get("address"),
      postal_code: form.get("postal_code"),
      city: form.get("city"),
      phone: form.get("phone"),
      email: form.get("email"),
      notes: form.get("notes") || "",
      source: isMechanic() ? "mechanic" : "admin",
      created_by: currentUser()?.id || "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
    customerId = customer.id;
  }
  let projectId = form.get("project_id");
  let project = projectId && projectId !== "__new__" ? byId(state.projects || [], projectId) : null;
  const mechanicId = isMechanic() ? currentUser()?.id : form.get("mechanic_id");
  if (projectId === "__new__") {
    project = createProjectFromPlanning(form, customer, customerId);
    projectId = project.id;
  }
  if (project) {
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.technician = mechanicNameById(mechanicId) || currentUser()?.name || "";
    project.customer_id = customerId || project.customer_id || "";
    project.customerId = customerId || project.customerId || "";
    project.customer = customer.customer_name || project.customer;
    project.customer_name = customer.customer_name || project.customer_name;
    project.address = `${customer.address || form.get("address") || ""} ${customer.postal_code || form.get("postal_code") || ""} ${customer.city || form.get("city") || ""}`.trim();
    project.postal_code = customer.postal_code || form.get("postal_code") || "";
    project.city = customer.city || form.get("city") || "";
    project.phone = customer.phone || form.get("phone") || "";
    project.status = form.get("status") || "ingepland";
    applyPricingSnapshot(project, form.get("pricing_category_id") || project.pricing_category_id);
  }
  const categorySnapshot = snapshotPricingCategory(pricingCategoryById(form.get("pricing_category_id") || project?.pricing_category_id));
  const planningEvent = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: mechanicId,
    title: project ? workorderNumber(project) : form.get("title"),
    description: form.get("description") || form.get("title") || "",
    customer_name: customer.customer_name || form.get("customer_name"),
    address: customer.address || form.get("address"),
    postal_code: customer.postal_code || form.get("postal_code"),
    city: customer.city || form.get("city"),
    phone: customer.phone || form.get("phone"),
    email: customer.email || form.get("email"),
    pricing_category_id: categorySnapshot.pricing_category_id,
    pricing_category_name: categorySnapshot.pricing_category_name,
    start_datetime: `${form.get("start_date")}T${form.get("start_time")}`,
    end_datetime: `${form.get("end_date")}T${form.get("end_time")}`,
    status: form.get("status") || "ingepland",
    priority: form.get("priority") || "normaal",
    notes: form.get("notes") || "",
    created_by: currentUser()?.id || "",
    created_at: now,
    updated_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(planningEvent);
  if (project && !isMechanic()) {
    notifyWorkorderAssigned(project, planningEvent);
  } else if (!project && !isMechanic()) {
    notifyPlanningChange(planningEvent, planningEvent.priority === "spoed" ? "emergency" : "planning_changed", planningEvent.priority === "spoed" ? "Spoedmelding" : "Nieuwe afspraak ingepland", planningEvent.priority === "spoed" ? "Er is een spoedafspraak aan u toegewezen." : "Er is een nieuwe afspraak in uw planning gezet.", planningEvent.priority || "normaal");
  }
  saveState();
  ui.creatingPlanningEvent = false;
  render();
}

function auditUserName(userId) {
  return byId(state.users || [], userId)?.name || "-";
}

function renderPlanningAudit(event) {
  return `<section class="panel subtle-panel" style="margin-top:14px">
    <h3>Auditlog</h3>
    <div class="meta-grid">
      <div class="meta"><span>Aangemaakt door</span><strong>${escapeHtml(auditUserName(event.created_by))}</strong></div>
      <div class="meta"><span>Aangemaakt op</span><strong>${escapeHtml(String(event.created_at || event.updated_at || "-").replace("T", " ").slice(0, 16))}</strong></div>
      <div class="meta"><span>Laatst gewijzigd door</span><strong>${escapeHtml(auditUserName(event.updated_by))}</strong></div>
      <div class="meta"><span>Laatst gewijzigd op</span><strong>${escapeHtml(String(event.updated_at || "-").replace("T", " ").slice(0, 16))}</strong></div>
      <div class="meta"><span>Verwijderd door</span><strong>${escapeHtml(event.deleted_by ? auditUserName(event.deleted_by) : "-")}</strong></div>
      <div class="meta"><span>Verwijderd op</span><strong>${escapeHtml(event.deleted_at ? String(event.deleted_at).replace("T", " ").slice(0, 16) : "-")}</strong></div>
    </div>
  </section>`;
}

function renderPlanningEditModal(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return "";
  if (isMechanic() && planningMechanicId(event) !== currentUser()?.id) return "";
  const mechanics = isMechanic() ? [currentUser()] : companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const details = planningEventDetails(event);
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>${escapeHtml(event.title || "Afspraak")}</h2><p>${escapeHtml(details.customer_name || "-")} - ${escapeHtml(details.address || "-")}</p></div><button class="btn secondary" type="button" onclick="closePlanningEdit()">Sluiten</button></div>
    <form class="form-grid" onsubmit="savePlanningEdit(event, '${event.id}')">
      <label>Type werkzaamheden <input name="title" value="${escapeAttr(event.title || "")}" required /></label>
      <label>Klant <input name="customer_name" value="${escapeAttr(details.customer_name || "")}" required /></label>
      <label>Adres <input name="address" value="${escapeAttr(details.address || "")}" required /></label>
      <label>Postcode <input name="postal_code" value="${escapeAttr(details.postal_code || "")}" /></label>
      <label>Plaats <input name="city" value="${escapeAttr(details.city || "")}" /></label>
      <label>Telefoon <input name="phone" value="${escapeAttr(details.phone || "")}" /></label>
      <label>Monteur <select name="mechanic_id" ${isMechanic() ? "disabled" : ""}>${mechanics.map((user) => `<option value="${user.id}" ${planningMechanicId(event) === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Start <input name="start_datetime" type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" required /></label>
      <label>Einde <input name="end_datetime" type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" required /></label>
      <label>Status <select name="status">${planningStatuses().map((status) => `<option value="${status}" ${event.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option value="${priority}" ${event.priority === priority ? "selected" : ""}>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes">${escapeHtml(event.notes || "")}</textarea></label>
      <div class="button-row full">
        <button class="btn success" type="submit">Opslaan</button>
        ${event.project_id ? `<a class="btn secondary" href="#/project/${event.project_id}">Open werkbon</a>` : `<button class="btn secondary" type="button" onclick="createWorkorderFromPlanningEvent('${event.id}')">Werkbon maken</button>`}
        <a class="btn secondary" target="_blank" href="${escapeAttr(planningMapsUrl(event))}">Route</a>
        ${!isMechanic() ? `<button class="btn danger" type="button" onclick="deletePlanningEvent('${event.id}')">Verwijderen</button>` : ""}
      </div>
    </form>
    ${renderPlanningAudit(event)}
  </section></div>`;
}

function savePlanningEdit(submitEvent, eventId) {
  submitEvent.preventDefault();
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (isMechanic() && planningMechanicId(event) !== currentUser()?.id) return;
  const form = new FormData(submitEvent.target);
  const previous = { mechanic_id: event.mechanic_id, start_datetime: event.start_datetime, end_datetime: event.end_datetime, status: event.status, priority: event.priority };
  const mechanicId = isMechanic() ? currentUser()?.id : form.get("mechanic_id");
  ["title", "customer_name", "address", "postal_code", "city", "phone", "start_datetime", "end_datetime", "status", "priority", "notes"].forEach((field) => {
    event[field] = form.get(field) || "";
  });
  event.mechanic_id = mechanicId;
  event.updated_by = currentUser()?.id || "";
  event.updated_at = new Date().toISOString();
  const project = byId(state.projects || [], event.project_id || event.workorder_id || "");
  if (project && canAccessProject(project)) {
    project.status = event.status;
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.customer = event.customer_name;
    project.customer_name = event.customer_name;
    project.address = `${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`.trim();
    project.postal_code = event.postal_code;
    project.city = event.city;
    project.phone = event.phone;
  }
  if (!isMechanic()) {
    const moved = previous.start_datetime !== event.start_datetime || previous.end_datetime !== event.end_datetime;
    const reassigned = previous.mechanic_id !== event.mechanic_id;
    if (event.status === "geannuleerd" && previous.status !== "geannuleerd") notifyPlanningChange(event, "planning_cancelled", "Afspraak geannuleerd", "Een afspraak in uw planning is geannuleerd.", event.priority);
    else if (moved) notifyPlanningChange(event, "planning_moved", "Afspraak verplaatst", "Een afspraak in uw planning is verplaatst.", event.priority);
    else if (reassigned || previous.priority !== event.priority || previous.status !== event.status) notifyPlanningChange(event, event.priority === "spoed" ? "emergency" : "planning_changed", event.priority === "spoed" ? "Spoedmelding" : "Planning gewijzigd", "Uw planning is gewijzigd.", event.priority);
  }
  saveState();
  closePlanningEdit();
}

function deletePlanningEvent(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event) || isMechanic()) return;
  if (!confirm("Afspraak verwijderen?")) return;
  const now = new Date().toISOString();
  event.status = "geannuleerd";
  event.deleted = true;
  event.deleted_by = currentUser()?.id || "";
  event.deleted_at = now;
  event.updated_by = currentUser()?.id || "";
  event.updated_at = now;
  saveState();
  ui.editingPlanningEventId = null;
  render();
}

function openMechanicCustomerCreate() {
  if (!hasMechanicPermission("can_create_customers")) return alert("Je hebt geen recht om klanten aan te maken.");
  ui.creatingMechanicCustomer = true;
  render();
}

function saveMechanicCustomer(event) {
  event.preventDefault();
  if (!hasMechanicPermission("can_create_customers")) return alert("Je hebt geen recht om klanten aan te maken.");
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  state.customers = state.customers || [];
  state.customers.push({
    id: uid("customer"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_name: String(form.get("customer_name") || "").trim(),
    contact_person: String(form.get("customer_name") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    email: String(form.get("email") || "").trim(),
    address: String(form.get("address") || "").trim(),
    postal_code: String(form.get("postal_code") || "").trim(),
    city: String(form.get("city") || "").trim(),
    notes: String(form.get("notes") || "").trim(),
    source: "mechanic",
    created_by: currentUser()?.id || "",
    active: true,
    created_at: now,
    updated_at: now,
  });
  ui.creatingMechanicCustomer = false;
  saveState();
  render();
}

function canMechanicCreateQuote() {
  return isMechanic() && paymentQuoteSettings().monteurs_mogen_offerte_maken && hasMechanicPermission("can_make_quotes");
}

function canMechanicTakePayment() {
  const settings = paymentQuoteSettings();
  return isMechanic() && settings.monteurs_mogen_afrekenen && settings.betaling_ter_plaatse_actief && hasMechanicPermission("can_register_payments");
}

function removeWorkOrderPhoto(projectId, photoRef) {
  if (isMechanic() && !hasMechanicPermission("can_delete_photos")) return alert("Je hebt geen recht om foto's te verwijderen.");
  const project = byId(state.projects, projectId);
  if (!project || !canAccessProject(project)) return;
  const workOrder = ensureWorkOrder(project);
  const photos = storedWorkOrderPhotos(project);
  const ref = String(photoRef);
  workOrder.photos = photos.filter((photo, index) => photo.id !== ref && String(index) !== ref);
  workOrder.photo_count = workOrder.photos.length;
  project.photo_count = workOrder.photos.length;
  saveState();
  render();
}

function completeProject(projectId) {
  if (isMechanic() && !hasMechanicPermission("can_close_workorders")) return alert("Je hebt geen recht om werkbonnen af te sluiten.");
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
  updatePlanningOnProjectComplete(project);
  ensureProfitSnapshot(project);
  state.adminNotifications = state.adminNotifications || [];
  state.adminNotifications.push({
    id: uid("note"),
    company_id: recordCompanyId(project),
    companyId: recordCompanyId(project),
    type: "workorder_completed",
    projectId,
    createdAt: now,
    message: `Werkbon ${project.projectName} afgerond door ${currentUser()?.name || project.technician || "monteur"}.`,
    severity: workOrder.installationSafe === "nee" ? "danger" : "ok",
  });
  saveState();
  location.hash = canMechanicCreateQuote() ? `#/settlement/${projectId}` : `#/summary/${projectId}`;
}

function renderBottomNav(route) {
  if (isOfficeAdmin() || isPlatformSuperAdmin()) return "";
  const unread = unreadNotificationCount();
  const notificationLabel = unread ? `Meldingen (${unread})` : "Meldingen";
  const roleItems = [["start", "S", "Start"], ["notifications", "M", notificationLabel]];
  return `<nav class="bottom-nav">${roleItems
    .map(([id, icon, label]) => `<a class="${route.startsWith(id) ? "active" : ""}" href="#/${id}"><b>${icon}</b>${label}</a>`)
    .join("")}</nav>`;
}

function defaultEmailTemplates(companyId = currentCompanyId()) {
  const now = new Date().toISOString();
  return [
    ["Afspraakbevestiging", "Bevestiging afspraak", "Beste klant,\n\nHierbij bevestigen wij de afspraak.\n\nMet vriendelijke groet,\nWerkbonSysteem.nl"],
    ["Offerte opvolging", "Opvolging offerte", "Beste klant,\n\nGraag horen wij of u nog vragen heeft over onze offerte.\n\nMet vriendelijke groet,"],
    ["Werkbon afgerond", "Werkbon afgerond", "Beste klant,\n\nDe werkzaamheden zijn afgerond. In de bijlage vindt u de werkbon.\n\nMet vriendelijke groet,"],
    ["Betalingsherinnering", "Betalingsherinnering", "Beste klant,\n\nVolgens onze administratie staat er nog een betaling open.\n\nMet vriendelijke groet,"],
    ["Algemene reactie", "Reactie op uw bericht", "Beste klant,\n\nBedankt voor uw bericht.\n\nMet vriendelijke groet,"],
  ].map(([name, subject, body]) => ({
    id: uid("mailtpl"),
    company_id: companyId,
    companyId: companyId,
    name,
    subject,
    body,
    active: true,
    created_at: now,
    updated_at: now,
  }));
}

function ensureEmailData() {
  state.emailAccounts = state.emailAccounts || [];
  state.emailMessages = state.emailMessages || [];
  state.emailTemplates = state.emailTemplates || [];
  state.emailAuditLogs = state.emailAuditLogs || [];
  const companyId = currentCompanyId();
  if (companyId && !state.emailTemplates.some((template) => recordCompanyId(template) === companyId)) {
    state.emailTemplates.push(...defaultEmailTemplates(companyId));
  }
  if (companyId && !state.emailMessages.some((message) => recordCompanyId(message) === companyId)) {
    const customer = activeCustomers()[0];
    const now = new Date().toISOString();
    state.emailMessages.push({
      id: uid("mail"),
      company_id: companyId,
      companyId: companyId,
      folder: "Inbox",
      from_name: customer?.customer_name || "Demo klant",
      from_email: customer?.email || "klant@example.com",
      to_email: "kantoor@alffinstallaties.nl",
      subject: "Vraag over afspraak",
      body: "Goedemiddag,\n\nKunt u bevestigen wanneer de monteur langskomt?\n\nMet vriendelijke groet",
      received_at: now,
      is_read: false,
      has_attachments: false,
      attachments: [],
      customer_id: customer?.id || "",
      project_id: "",
      quote_id: "",
      status: "open",
      audit: [],
      created_at: now,
      updated_at: now,
    });
  }
}

function logEmailAction(messageId, action, details = "") {
  const now = new Date().toISOString();
  const log = {
    id: uid("mailaudit"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    message_id: messageId,
    action,
    details,
    user_id: currentUser()?.id || "",
    created_at: now,
  };
  state.emailAuditLogs = state.emailAuditLogs || [];
  state.emailAuditLogs.push(log);
  const message = byId(state.emailMessages || [], messageId);
  if (message) {
    message.audit = [...(message.audit || []), log];
    message.updated_at = now;
  }
}

function emailMessages() {
  ensureEmailData();
  return companyScoped(state.emailMessages || []).filter((message) => !message.archived);
}

function selectedEmailMessage() {
  const rows = emailMessages();
  const selected = byId(rows, ui.selectedEmailId);
  if (selected) return selected;
  ui.selectedEmailId = rows[0]?.id || "";
  return rows[0] || null;
}

function customerByEmail(email) {
  const normalized = String(email || "").toLowerCase();
  return activeCustomers().find((customer) => String(customer.email || "").toLowerCase() === normalized);
}

function renderEmailPortal() {
  ensureEmailData();
  if (!hasEmailPermission("can_read_email")) return `<div class="panel empty">Je hebt geen recht om e-mails te lezen.</div>`;
  const rows = emailMessages().map((message) => {
    if (!message.customer_id) {
      const customer = customerByEmail(message.from_email);
      if (customer) message.customer_id = customer.id;
    }
    return message;
  }).sort((a, b) => String(b.received_at || b.created_at || "").localeCompare(String(a.received_at || a.created_at || "")));
  const selected = selectedEmailMessage();
  return `<section class="office-page-head">
    <div><h2>E-mail</h2><p>Centraal klantcontact voor mailboxen, klanten, werkbonnen en offertes.</p></div>
    <div class="button-row" style="margin-top:0">
      ${hasEmailPermission("can_reply_email") ? `<button class="btn success" type="button" onclick="composeEmail()">Nieuwe e-mail</button>` : ""}
      ${hasEmailPermission("can_connect_mailbox") ? `<button class="btn secondary" type="button" onclick="openMailboxSettings()">Mailbox koppelen</button>` : ""}
    </div>
  </section>
  <section class="email-shell">
    <aside class="email-folders">
      <h3>Mailboxen</h3>
      ${renderMailboxAccounts()}
      <h3>Mappen</h3>
      ${["Inbox", "Verzonden", "Archief"].map((folder) => `<button class="email-folder ${ui.emailFolder === folder || (!ui.emailFolder && folder === "Inbox") ? "active" : ""}" onclick="ui.emailFolder='${folder}'; render()">${folder}</button>`).join("")}
      ${hasEmailPermission("can_manage_email_templates") ? `<button class="btn secondary" type="button" onclick="ui.showEmailTemplates = !ui.showEmailTemplates; render()">Templates</button>` : ""}
    </aside>
    <div class="email-list">
      ${rows.length ? rows.map(renderEmailListItem).join("") : `<div class="empty">Geen e-mails.</div>`}
    </div>
    <div class="email-detail">${selected ? renderEmailDetail(selected) : `<div class="empty">Selecteer een e-mail.</div>`}</div>
  </section>
  ${ui.showMailboxSettings ? renderMailboxSettingsModal() : ""}
  ${ui.emailComposeMode ? renderEmailComposeModal(ui.emailComposeMode, selected) : ""}
  ${ui.showEmailTemplates ? renderEmailTemplatesPanel() : ""}`;
}

function renderMailboxAccounts() {
  const accounts = companyScoped(state.emailAccounts || []);
  if (!accounts.length) return `<p class="muted">Nog geen mailbox gekoppeld.</p>`;
  return accounts.map((account) => `<div class="email-account"><strong>${escapeHtml(account.name || account.email)}</strong><span>${escapeHtml(account.provider)} - ${account.status || "voorbereid"}</span></div>`).join("");
}

function renderEmailListItem(message) {
  const customer = message.customer_id ? byId(state.customers || [], message.customer_id) : null;
  return `<button class="email-list-item ${message.is_read ? "" : "unread"} ${ui.selectedEmailId === message.id ? "active" : ""}" onclick="selectEmailMessage('${message.id}')">
    <strong>${escapeHtml(message.from_name || message.from_email)}</strong>
    <span>${escapeHtml(message.subject || "(geen onderwerp)")}</span>
    <small>${escapeHtml(String(message.received_at || message.created_at || "").replace("T", " ").slice(0, 16))}</small>
    <em>${message.has_attachments ? "Bijlagen" : "Geen bijlagen"} - ${escapeHtml(customer?.customer_name || "Geen klant")}</em>
  </button>`;
}

function selectEmailMessage(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  ui.selectedEmailId = messageId;
  if (!message.is_read) {
    message.is_read = true;
    logEmailAction(message.id, "read", "E-mail gelezen");
    saveState();
  }
  render();
}

function renderEmailDetail(message) {
  const customer = message.customer_id ? byId(state.customers || [], message.customer_id) : null;
  const project = message.project_id ? byId(state.projects || [], message.project_id) : null;
  const quote = message.quote_id ? byId(state.quotes || [], message.quote_id) : null;
  return `<article class="email-preview">
    <div class="article-head">
      <div><h2>${escapeHtml(message.subject || "(geen onderwerp)")}</h2><p>${escapeHtml(message.from_name || message.from_email)} - ${escapeHtml(message.from_email || "")}</p></div>
      <span class="badge">${message.is_read ? "gelezen" : "ongelezen"}</span>
    </div>
    <div class="meta-grid">
      <div class="meta"><span>Datum/tijd</span><strong>${escapeHtml(String(message.received_at || message.created_at || "").replace("T", " ").slice(0, 16))}</strong></div>
      <div class="meta"><span>Bijlagen</span><strong>${message.has_attachments ? (message.attachments || []).length : 0}</strong></div>
      <div class="meta"><span>Klant</span><strong>${escapeHtml(customer?.customer_name || "-")}</strong></div>
      <div class="meta"><span>Werkbon/offerte</span><strong>${escapeHtml(project ? workorderNumber(project) : quote?.quote_number || "-")}</strong></div>
    </div>
    <pre class="email-body">${escapeHtml(message.body || "")}</pre>
    <div class="button-row">
      ${hasEmailPermission("can_reply_email") ? `<button class="btn success" onclick="composeEmail('reply')">Beantwoorden</button><button class="btn secondary" onclick="composeEmail('forward')">Doorsturen</button>` : ""}
      ${hasEmailPermission("can_archive_email") ? `<button class="btn secondary" onclick="archiveEmail('${message.id}')">Archiveren</button>` : ""}
      ${customer ? `<button class="btn secondary" onclick="linkEmailToCustomer('${message.id}', '${customer.id}')">Koppelen aan klant</button>` : `<button class="btn secondary" onclick="createCustomerFromEmail('${message.id}')">Nieuwe klant aanmaken</button>`}
      <button class="btn secondary" onclick="createWorkorderFromEmail('${message.id}')">Werkbon maken</button>
      <button class="btn secondary" onclick="createQuoteFromEmail('${message.id}')">Offerte maken</button>
      <button class="btn secondary" onclick="planAppointmentFromEmail('${message.id}')">Afspraak plannen</button>
    </div>
    ${renderEmailLinkingControls(message)}
    ${renderEmailAudit(message.id)}
  </article>`;
}

function renderEmailLinkingControls(message) {
  const projects = visibleProjects();
  const quotes = companyScoped(state.quotes || []);
  return `<section class="panel subtle-panel" style="margin-top:14px">
    <h3>Koppelingen</h3>
    <div class="form-grid">
      <label>Bestaande werkbon <select onchange="linkEmailToProject('${message.id}', this.value)"><option value="">Kies werkbon</option>${projects.map((project) => `<option value="${project.id}" ${message.project_id === project.id ? "selected" : ""}>${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.customer || "")}</option>`).join("")}</select></label>
      <label>Bestaande offerte <select onchange="linkEmailToQuote('${message.id}', this.value)"><option value="">Kies offerte</option>${quotes.map((quote) => `<option value="${quote.id}" ${message.quote_id === quote.id ? "selected" : ""}>${escapeHtml(quote.quote_number)} - ${euro(quote.total_inc_vat)}</option>`).join("")}</select></label>
    </div>
  </section>`;
}

function renderEmailAudit(messageId) {
  const logs = companyScoped(state.emailAuditLogs || []).filter((log) => log.message_id === messageId);
  return `<section class="panel subtle-panel" style="margin-top:14px"><h3>Auditlog</h3>${logs.length ? logs.map((log) => `<p><strong>${escapeHtml(auditUserName(log.user_id))}</strong> ${escapeHtml(log.action)} - ${escapeHtml(String(log.created_at || "").replace("T", " ").slice(0, 16))} ${log.details ? `- ${escapeHtml(log.details)}` : ""}</p>`).join("") : `<p class="muted">Nog geen acties.</p>`}</section>`;
}

function composeEmail(mode = "new") {
  if (!hasEmailPermission("can_reply_email")) return alert("Je hebt geen recht om e-mails te beantwoorden.");
  ui.emailComposeMode = mode || "new";
  render();
}

function closeEmailCompose() {
  ui.emailComposeMode = "";
  render();
}

function renderEmailComposeModal(mode, sourceMessage) {
  const templates = companyScoped(state.emailTemplates || []).filter((template) => template.active !== false);
  const isReply = mode === "reply";
  const isForward = mode === "forward";
  return `<section class="modal-backdrop"><form class="panel confirm-modal email-compose" onsubmit="sendEmail(event, '${mode}', '${sourceMessage?.id || ""}')">
    <div class="article-head"><div><h2>${isReply ? "E-mail beantwoorden" : isForward ? "E-mail doorsturen" : "Nieuwe e-mail"}</h2><p>Concept wordt lokaal geregistreerd. Providerkoppeling is OAuth-voorbereid.</p></div><button class="btn secondary" type="button" onclick="closeEmailCompose()">Sluiten</button></div>
    <div class="form-grid">
      <label>Aan <input name="to_email" type="email" required value="${escapeAttr(isReply ? sourceMessage?.from_email || "" : "")}" /></label>
      <label>Onderwerp <input name="subject" required value="${escapeAttr(isReply ? `Re: ${sourceMessage?.subject || ""}` : isForward ? `Fw: ${sourceMessage?.subject || ""}` : "")}" /></label>
      <label>Template <select onchange="applyEmailTemplate(this.value)"><option value="">Geen template</option>${templates.map((template) => `<option value="${template.id}">${escapeHtml(template.name)}</option>`).join("")}</select></label>
      <label>Bijlage toevoegen <input name="attachment_name" placeholder="Bestandsnaam (MVP registratie)" /></label>
      <label class="full">Bericht <textarea id="email-compose-body" name="body" rows="8" required>${escapeHtml(isForward ? `\n\n--- Doorgestuurd bericht ---\n${sourceMessage?.body || ""}` : "")}</textarea></label>
    </div>
    <div class="button-row"><button class="btn success" type="submit">Versturen registreren</button><button class="btn secondary" type="button" onclick="closeEmailCompose()">Annuleren</button></div>
  </form></section>`;
}

function applyEmailTemplate(templateId) {
  const template = byId(state.emailTemplates || [], templateId);
  const body = document.getElementById("email-compose-body");
  if (template && body) body.value = template.body || "";
}

function sendEmail(event, mode, sourceMessageId) {
  event.preventDefault();
  if (!hasEmailPermission("can_reply_email")) return;
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const source = byId(state.emailMessages || [], sourceMessageId);
  const message = {
    id: uid("mail"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    folder: "Verzonden",
    from_name: currentUser()?.name || "",
    from_email: currentUser()?.email || "",
    to_email: form.get("to_email"),
    subject: form.get("subject"),
    body: form.get("body"),
    received_at: now,
    is_read: true,
    has_attachments: Boolean(form.get("attachment_name")),
    attachments: form.get("attachment_name") ? [{ name: form.get("attachment_name"), added_at: now }] : [],
    customer_id: source?.customer_id || "",
    project_id: source?.project_id || "",
    quote_id: source?.quote_id || "",
    status: "sent",
    created_at: now,
    updated_at: now,
  };
  state.emailMessages.push(message);
  if (source) logEmailAction(source.id, mode === "forward" ? "forward" : "reply", `Antwoord geregistreerd naar ${form.get("to_email")}`);
  logEmailAction(message.id, "send", "Uitgaande e-mail geregistreerd");
  saveState();
  ui.emailComposeMode = "";
  ui.selectedEmailId = message.id;
  render();
}

function archiveEmail(messageId) {
  if (!hasEmailPermission("can_archive_email")) return alert("Je hebt geen recht om e-mails te archiveren.");
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  message.archived = true;
  message.folder = "Archief";
  logEmailAction(messageId, "archive", "E-mail gearchiveerd");
  saveState();
  render();
}

function createCustomerFromEmail(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  const now = new Date().toISOString();
  const customer = {
    id: uid("customer"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_name: message.from_name || message.from_email,
    contact_person: message.from_name || "",
    email: message.from_email || "",
    phone: "",
    address: "",
    postal_code: "",
    city: "",
    notes: `Aangemaakt vanuit e-mail: ${message.subject || ""}`,
    source: "email",
    created_by: currentUser()?.id || "",
    active: true,
    created_at: now,
    updated_at: now,
  };
  state.customers.push(customer);
  message.customer_id = customer.id;
  logEmailAction(message.id, "link_customer", `Nieuwe klant aangemaakt: ${customer.customer_name}`);
  saveState();
  render();
}

function linkEmailToCustomer(messageId, customerId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  message.customer_id = customerId;
  logEmailAction(messageId, "link_customer", `Gekoppeld aan klant ${customerId}`);
  saveState();
  render();
}

function linkEmailToProject(messageId, projectId) {
  const message = byId(state.emailMessages || [], messageId);
  const project = byId(state.projects || [], projectId);
  if (!message || !project || !isSameCompany(message) || !isSameCompany(project)) return;
  message.project_id = projectId;
  message.customer_id = project.customer_id || project.customerId || message.customer_id || "";
  logEmailAction(messageId, "link_workorder", `Gekoppeld aan werkbon ${workorderNumber(project)}`);
  saveState();
  render();
}

function linkEmailToQuote(messageId, quoteId) {
  const message = byId(state.emailMessages || [], messageId);
  const quote = byId(state.quotes || [], quoteId);
  if (!message || !quote || !isSameCompany(message) || !isSameCompany(quote)) return;
  message.quote_id = quoteId;
  message.project_id = quote.project_id || message.project_id || "";
  message.customer_id = quote.customer_id || message.customer_id || "";
  logEmailAction(messageId, "link_quote", `Gekoppeld aan offerte ${quote.quote_number}`);
  saveState();
  render();
}

function createWorkorderFromEmail(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  const customer = message.customer_id ? byId(state.customers || [], message.customer_id) : null;
  if (!customer) return alert("Koppel eerst een klant of maak een nieuwe klant aan.");
  const formLike = new Map([
    ["title", message.subject || "Werkbon vanuit e-mail"],
    ["description", message.body || ""],
    ["mechanic_id", companyScoped(state.users || []).find((user) => user.role === ROLES.MECHANIC && user.active)?.id || ""],
    ["start_date", new Date().toISOString().slice(0, 10)],
    ["status", "ingepland"],
    ["pricing_category_id", defaultPricingCategory()?.id || ""],
  ]);
  const form = { get: (key) => formLike.get(key) || "" };
  const project = createProjectFromPlanning(form, customer, customer.id);
  message.project_id = project.id;
  logEmailAction(messageId, "create_workorder", `Werkbon aangemaakt: ${workorderNumber(project)}`);
  saveState();
  render();
}

function createQuoteFromEmail(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  const project = message.project_id ? byId(state.projects || [], message.project_id) : null;
  if (!project) return alert("Koppel of maak eerst een werkbon.");
  const quote = ensureOnsiteQuote(project, "concept");
  message.quote_id = quote.id;
  logEmailAction(messageId, "create_quote", `Offerte aangemaakt: ${quote.quote_number}`);
  saveState();
  render();
}

function planAppointmentFromEmail(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  ui.newPlanningDefaults = { start_date: new Date().toISOString().slice(0, 10), end_date: new Date().toISOString().slice(0, 10), start_time: "09:00", end_time: "10:00", status: "ingepland" };
  ui.creatingPlanningEvent = true;
  logEmailAction(messageId, "plan_appointment", "Afspraakformulier geopend vanuit e-mail");
  saveState();
  render();
}

function openMailboxSettings() {
  if (!hasEmailPermission("can_connect_mailbox")) return alert("Je hebt geen recht om mailboxen te koppelen.");
  ui.showMailboxSettings = true;
  render();
}

function closeMailboxSettings() {
  ui.showMailboxSettings = false;
  render();
}

function renderMailboxSettingsModal() {
  return `<section class="modal-backdrop"><form class="panel confirm-modal" onsubmit="saveMailboxAccount(event)">
    <div class="article-head"><div><h2>Mailbox koppelen</h2><p>OAuth voorbereid voor Gmail/Google Workspace en Outlook/Microsoft 365. IMAP/SMTP fallback slaat geen wachtwoorden plat op.</p></div><button class="btn secondary" type="button" onclick="closeMailboxSettings()">Sluiten</button></div>
    <div class="form-grid">
      <label>Provider <select name="provider"><option>Gmail / Google Workspace</option><option>Outlook / Microsoft 365</option><option>IMAP/SMTP</option></select></label>
      <label>Mailboxnaam <input name="name" required placeholder="Planning inbox" /></label>
      <label>E-mailadres <input name="email" type="email" required /></label>
      <label>Type <select name="scope"><option value="shared">Gedeelde mailbox</option><option value="user">Per gebruiker</option></select></label>
      <label>OAuth client/status <input name="oauth_status" value="OAuth voorbereid - autorisatie via backend nodig" readonly /></label>
    </div>
    <div class="validation-box">Tokens horen server-side versleuteld opgeslagen te worden. Deze standalone app registreert alleen de koppeling en providerkeuze.</div>
    <div class="button-row"><button class="btn success" type="submit">Koppeling opslaan</button><button class="btn secondary" type="button" onclick="closeMailboxSettings()">Annuleren</button></div>
  </form></section>`;
}

function saveMailboxAccount(event) {
  event.preventDefault();
  if (!hasEmailPermission("can_connect_mailbox")) return;
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  state.emailAccounts.push({
    id: uid("mailbox"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    provider: form.get("provider"),
    name: form.get("name"),
    email: form.get("email"),
    scope: form.get("scope"),
    auth_type: String(form.get("provider")).includes("IMAP") ? "imap_smtp_secret_reference" : "oauth",
    token_storage: "encrypted_server_side_prepared",
    status: "voorbereid",
    connected_by: currentUser()?.id || "",
    created_at: now,
    updated_at: now,
  });
  ui.showMailboxSettings = false;
  saveState();
  render();
}

function renderEmailTemplatesPanel() {
  const templates = companyScoped(state.emailTemplates || []);
  return `<section class="modal-backdrop"><div class="panel confirm-modal"><div class="article-head"><div><h2>E-mailtemplates</h2><p>Standaardreacties voor kantoorcommunicatie.</p></div><button class="btn secondary" type="button" onclick="ui.showEmailTemplates=false; render()">Sluiten</button></div>
    <form class="form-grid" onsubmit="saveEmailTemplate(event)">
      <label>Naam <input name="name" required /></label>
      <label>Onderwerp <input name="subject" required /></label>
      <label class="full">Tekst <textarea name="body" rows="5" required></textarea></label>
      <button class="btn success" type="submit">Template opslaan</button>
    </form>
    <div class="table-wrap"><table><thead><tr><th>Actief</th><th>Naam</th><th>Onderwerp</th></tr></thead><tbody>${templates.map((template) => `<tr><td><input type="checkbox" ${template.active !== false ? "checked" : ""} onchange="updateEmailTemplate('${template.id}', 'active', this.checked)" /></td><td><input value="${escapeAttr(template.name)}" onchange="updateEmailTemplate('${template.id}', 'name', this.value)" /></td><td><input value="${escapeAttr(template.subject)}" onchange="updateEmailTemplate('${template.id}', 'subject', this.value)" /></td></tr>`).join("")}</tbody></table></div>
  </div></section>`;
}

function saveEmailTemplate(event) {
  event.preventDefault();
  if (!hasEmailPermission("can_manage_email_templates")) return;
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  state.emailTemplates.push({ id: uid("mailtpl"), company_id: currentCompanyId(), companyId: currentCompanyId(), name: form.get("name"), subject: form.get("subject"), body: form.get("body"), active: true, created_at: now, updated_at: now });
  saveState();
  render();
}

function updateEmailTemplate(templateId, field, value) {
  if (!hasEmailPermission("can_manage_email_templates")) return;
  const template = byId(state.emailTemplates || [], templateId);
  if (!template || !isSameCompany(template)) return;
  template[field] = field === "active" ? Boolean(value) : value;
  template.updated_at = new Date().toISOString();
  saveState();
  render();
}

function officeNavItems() {
  return [
    ["Dashboard", "dashboard", "D"],
    ["Planning", "planning", "P"],
    ["Agenda", "agenda", "A"],
    ["Werkbonnen", "workorders", "W"],
    ["Klanten", "customers", "K"],
    ["E-mail", "email", "E"],
    ["Offertes", "quotes", "O"],
    ["Facturen", "invoices", "F"],
    ["Monteurs", "mechanics", "M"],
    ["Voorraad", "inventory", "V"],
    ["Margebeheer", "margin", "G"],
    ["Rapportages", "reports", "R"],
    ["Instellingen", "settings", "I"],
  ];
}

function setDashboardTab(tab) {
  ui.dashboardTab = tab;
  const item = officeNavItems().find(([label]) => label === tab);
  if (item && !location.hash.endsWith(`/admin/${item[1]}`)) {
    location.hash = `#/admin/${item[1]}`;
    return;
  }
  render();
}

function officeSectionToTab(section = "") {
  const map = {
    dashboard: "Dashboard",
    planning: "Planning",
    agenda: "Agenda",
    workorders: "Werkbonnen",
    projects: "Werkbonnen",
    customers: "Klanten",
    email: "E-mail",
    quotes: "Offertes",
    invoices: "Facturen",
    payments: "Facturen",
    mechanics: "Monteurs",
    users: "Monteurs",
    inventory: "Voorraad",
    warehouse: "Voorraad",
    orders: "Voorraad",
    "garage-box": "Voorraad",
    margin: "Margebeheer",
    categories: "Margebeheer",
    profit: "Rapportages",
    reports: "Rapportages",
    costs: "Rapportages",
    settings: "Instellingen",
    checklists: "Instellingen",
    prices: "Margebeheer",
  };
  return map[section] || "Dashboard";
}

function renderOfficeSidebar() {
  return `<aside class="office-sidebar">
    <div class="office-sidebar-brand">
      <strong>${escapeHtml(currentCompany()?.name || "Bedrijfsportal")}</strong>
      <span>Kantoor</span>
    </div>
    <nav class="office-nav">
      ${officeNavItems().map(([label, route, icon]) => `<a class="${ui.dashboardTab === label ? "active" : ""}" href="#/admin/${route}"><b>${icon}</b><span>${label}</span></a>`).join("")}
    </nav>
  </aside>`;
}

function officeDashboardStats() {
  const projects = visibleProjects();
  const today = dateKey(new Date().toISOString());
  const planning = companyScoped(state.planningEvents || []);
  const quotes = companyScoped(state.quotes || []);
  const payments = companyScoped(state.payments || []);
  const currentMonth = new Date().toISOString().slice(0, 7);
  const monthlyRevenue = payments
    .filter((payment) => payment.status === "betaald" && String(payment.paid_at || payment.created_at || "").slice(0, 7) === currentMonth)
    .reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  return {
    openWorkorders: projects.filter((project) => !isProjectCompleted(project)).length,
    plannedToday: planning.filter((event) => dateKey(event.start_datetime) === today && event.status !== "geannuleerd").length,
    mechanicsOnRoute: planning.filter((event) => event.status === "onderweg").length,
    openQuotes: quotes.filter((quote) => !["geaccepteerd", "afgewezen", "omgezet naar opdracht"].includes(quote.status)).length,
    monthlyRevenue,
    toInvoice: projects.filter((project) => isProjectCompleted(project) && !payments.some((payment) => payment.workorder_id === project.id || payment.workorder_id === project.workOrder?.id)).length,
  };
}

function renderOfficeDashboard() {
  const stats = officeDashboardStats();
  const todayRows = companyScoped(state.planningEvents || [])
    .filter((event) => dateKey(event.start_datetime) === dateKey(new Date().toISOString()))
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")))
    .slice(0, 8);
  return `<section class="office-dashboard">
    <div class="office-page-head">
      <div><h2>Dashboard</h2><p>Kerncijfers en planning voor vandaag.</p></div>
      <a class="btn success" href="#/admin/planning">Planning openen</a>
    </div>
    <section class="stats office-kpis">
      <div class="stat-card"><span>Open werkbonnen</span><strong>${stats.openWorkorders}</strong></div>
      <div class="stat-card"><span>Geplande afspraken vandaag</span><strong>${stats.plannedToday}</strong></div>
      <div class="stat-card"><span>Monteurs onderweg</span><strong>${stats.mechanicsOnRoute}</strong></div>
      <div class="stat-card"><span>Openstaande offertes</span><strong>${stats.openQuotes}</strong></div>
      <div class="stat-card"><span>Omzet deze maand</span><strong>${euro(stats.monthlyRevenue)}</strong></div>
      <div class="stat-card"><span>Te factureren werkbonnen</span><strong>${stats.toInvoice}</strong></div>
    </section>
    <section class="panel">
      <div class="article-head"><div><h2>Vandaag</h2><p>Afspraken en status per monteur.</p></div><a class="btn secondary" href="#/admin/agenda">Agenda</a></div>
      ${todayRows.length ? renderAdminPlanningCards(todayRows) : `<p class="muted">Geen afspraken vandaag.</p>`}
    </section>
  </section>`;
}

function renderOfficeInventory() {
  return `<section class="office-page-head"><div><h2>Voorraad</h2><p>Garage Box, koffers en bestellingen.</p></div><a class="btn success" href="#/admin/orders">Bestellen</a></section>${renderGarageBox()}${renderOrderAndKitStatus()}`;
}

function renderOfficeMarginManagement() {
  return `<section class="office-page-head"><div><h2>Margebeheer</h2><p>Categorieen, prijzen en marges.</p></div></section>${renderPricingCategories()}${renderPrices()}`;
}

function renderOfficeReports() {
  return `<section class="office-page-head"><div><h2>Rapportages</h2><p>Winst, kosten en rendement.</p></div></section>${renderProfitDashboard()}${renderCosts()}`;
}

function renderDashboardTab() {
  if (ui.dashboardTab === "Dashboard") return renderOfficeDashboard();
  if (ui.dashboardTab === "Planning") return renderPlanning();
  if (ui.dashboardTab === "Agenda") return renderPlanning();
  if (ui.dashboardTab === "Werkbonnen") return renderOfficeProjects();
  if (ui.dashboardTab === "Klanten") return renderCustomers();
  if (ui.dashboardTab === "E-mail") return renderEmailPortal();
  if (ui.dashboardTab === "Offertes") return renderQuotes();
  if (ui.dashboardTab === "Facturen") return renderPaymentsAdmin();
  if (ui.dashboardTab === "Monteurs") return renderUsers();
  if (ui.dashboardTab === "Voorraad") return renderOfficeInventory();
  if (ui.dashboardTab === "Margebeheer") return renderOfficeMarginManagement();
  if (ui.dashboardTab === "Rapportages") return renderOfficeReports();
  if (ui.dashboardTab === "Instellingen") return `${renderCompanySettings()}${renderChecklistSettings()}`;
  return renderOfficeDashboard();
}

function renderOffice(section = "") {
  if (section === "to-order") ui.dashboardTab = "Voorraad";
  else ui.dashboardTab = officeSectionToTab(section);
  return `<section class="office-erp-shell">
    ${renderOfficeSidebar()}
    <main class="office-content">
      ${renderDashboardTab()}
    </main>
  </section>`;
}

function canCreatePlanningSelection() {
  if (isTenantAdmin() || isPlatformSuperAdmin()) return true;
  return isMechanic() && hasMechanicPermission("can_create_own_appointments");
}

function renderPlanningToolbar() {
  ensurePlanningUi();
  const title = isMechanic() ? "Mijn agenda" : planningMonthLabel();
  const subtitle = isMechanic() ? "Eigen afspraken per dag, week en maand" : ui.planningView === "week" ? "Weekplanning" : ui.planningView === "dag" ? "Dagplanning" : "Maandplanning";
  const canCreateAppointment = canCreatePlanningSelection();
  const canCreateCustomer = isMechanic() ? hasMechanicPermission("can_create_customers") : true;
  return `<div class="calendar-toolbar">
    <div><h2>${escapeHtml(title)}</h2><span>${escapeHtml(subtitle)}</span></div>
    <div class="calendar-actions">
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(-1)">&#8249;</button>
      <button class="btn secondary" type="button" onclick="goPlanningToday()">Vandaag</button>
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(1)">&#8250;</button>
      <div class="segmented">${["dag", "week", "maand"].map((view) => `<button type="button" class="${ui.planningView === view ? "active" : ""}" onclick="setPlanningView('${view}')">${view[0].toUpperCase()}${view.slice(1)}</button>`).join("")}</div>
      ${canCreateAppointment ? `<button class="btn success" type="button" onclick="openNewPlanningEvent()">+ Nieuwe afspraak</button>` : ""}
      ${isMechanic() && canCreateCustomer ? `<button class="btn secondary" type="button" onclick="openMechanicCustomerCreate()">Klant aanmaken</button>` : ""}
    </div>
  </div>`;
}

function renderMechanicCalendarSidebar() {
  ensurePlanningUi();
  return `<aside class="calendar-sidebar">
    <div class="sidebar-section">
      <h3>Mijn agenda</h3>
      <p class="muted">${hasMechanicPermission("can_create_own_appointments") ? "Klik of sleep in de kalender om een eigen afspraak te maken." : "Je kunt alleen afspraken bekijken. Kantoor beheert je planning."}</p>
    </div>
    <div class="sidebar-section">
      <h3>Status</h3>
      ${planningStatuses().map((status) => `<label class="check-line"><input type="checkbox" ${ui.planningStatusFilters[status] !== false ? "checked" : ""} onchange="togglePlanningStatus('${status}', this.checked)" /> <span class="status-dot ${statusClass(status)}"></span>${status}</label>`).join("")}
    </div>
  </aside>`;
}

function openNewPlanningEvent() {
  if (!canCreatePlanningSelection()) return alert("Je kunt alleen afspraken bekijken. Kantoor beheert je planning.");
  ui.newPlanningDefaults = null;
  ui.creatingPlanningEvent = true;
  render();
}

function createPlanningEvent(data = {}) {
  if (!canCreatePlanningSelection()) return alert("Je kunt alleen afspraken bekijken. Kantoor beheert je planning.");
  ui.newPlanningDefaults = {
    start_date: data.start_date || ui.planningDate || new Date().toISOString().slice(0, 10),
    end_date: data.end_date || data.start_date || ui.planningDate || new Date().toISOString().slice(0, 10),
    start_time: data.start_time || "08:00",
    end_time: data.end_time || "09:00",
    status: data.status || "ingepland",
  };
  ui.creatingPlanningEvent = true;
  render();
}

function renderNewPlanningModal() {
  if (isMechanic() && !hasMechanicPermission("can_create_own_appointments")) return "";
  ensurePricingCategories();
  const mechanics = isMechanic() ? [currentUser()] : companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const customers = isMechanic() ? mechanicVisibleCustomers() : activeCustomers();
  const projects = visibleProjects().filter((project) => !isProjectCompleted(project));
  const defaults = ui.newPlanningDefaults || {};
  const baseDate = defaults.start_date || ui.planningDate || new Date().toISOString().slice(0, 10);
  const endDate = defaults.end_date || baseDate;
  const startTime = defaults.start_time || "08:00";
  const endTime = defaults.end_time || "10:00";
  const statusDefault = defaults.status || "ingepland";
  const canCreateCustomer = !isMechanic() || hasMechanicPermission("can_create_customers");
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>Nieuwe afspraak</h2><p>${canCreateCustomer ? "Kies een bestaande klant of maak direct een nieuwe klant aan." : "Vul vrije klantgegevens in. Kantoor kan deze later omzetten naar klant."}</p></div><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Sluiten</button></div>
    <form class="form-grid" onsubmit="saveNewPlanningEvent(event)">
      <label>Klant kiezen <select name="customer_id" onchange="fillPlanningModalCustomer(this.value, 'new-planning')"><option value="">${canCreateCustomer ? "Nieuwe klant of handmatig" : "Vrije klantgegevens"}</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.city || "")}</option>`).join("")}</select></label>
      <label>Werkbon koppelen <select name="project_id"><option value="">Geen werkbon</option><option value="__new__">Nieuwe werkbon maken</option>${projects.map((project) => `<option value="${project.id}">${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.projectName || "")}</option>`).join("")}</select></label>
      <label>Categorie <select name="pricing_category_id" required>${pricingCategoryOptions()}</select></label>
      <label>Klantnaam <input name="customer_name" id="new-planning-customer-name" required /></label>
      <label>Telefoonnummer <input name="phone" id="new-planning-phone" /></label>
      <label>Adres <input name="address" id="new-planning-address" required /></label>
      <label>Postcode <input name="postal_code" id="new-planning-postal-code" /></label>
      <label>Plaats <input name="city" id="new-planning-city" /></label>
      <label>E-mail <input name="email" id="new-planning-email" type="email" /></label>
      <label>Monteur <select name="mechanic_id" required ${isMechanic() ? "disabled" : ""}>${mechanics.map((user) => `<option value="${user.id}" ${user.id === currentUser()?.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Omschrijving <input name="title" required value="Service afspraak" /></label>
      <label>Notitie <input name="description" /></label>
      <label>Datum <input name="start_date" type="date" required value="${escapeAttr(baseDate)}" /></label>
      <label>Starttijd <input name="start_time" type="time" required value="${escapeAttr(startTime)}" /></label>
      <label>Einddatum <input name="end_date" type="date" required value="${escapeAttr(endDate)}" /></label>
      <label>Eindtijd <input name="end_time" type="time" required value="${escapeAttr(endTime)}" /></label>
      <label>Status <select name="status">${["ingepland", "onderweg", "bezig"].map((status) => `<option ${status === statusDefault ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Urgentie <select name="priority"><option>normaal</option><option>hoog</option><option>spoed</option></select></label>
      <label class="full">Opmerkingen <textarea name="notes"></textarea></label>
      <div class="button-row full"><button class="btn success" type="submit">Opslaan</button><button class="btn secondary" type="button" onclick="closeNewPlanningEvent()">Annuleren</button></div>
    </form>
  </section></div>`;
}

function saveNewPlanningEvent(event) {
  event.preventDefault();
  if (isMechanic() && !hasMechanicPermission("can_create_own_appointments")) return alert("Je kunt alleen afspraken bekijken. Kantoor beheert je planning.");
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const mechanicCreated = isMechanic();
  let customerId = form.get("customer_id");
  let customer = byId(state.customers || [], customerId);
  if (!customer && (!mechanicCreated || hasMechanicPermission("can_create_customers"))) {
    customer = {
      id: uid("customer"),
      company_id: currentCompanyId(),
      companyId: currentCompanyId(),
      customer_name: form.get("customer_name"),
      contact_person: "",
      address: form.get("address"),
      postal_code: form.get("postal_code"),
      city: form.get("city"),
      phone: form.get("phone"),
      email: form.get("email"),
      notes: form.get("notes") || "",
      source: mechanicCreated ? "mechanic" : "admin",
      created_by: currentUser()?.id || "",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.customers = state.customers || [];
    state.customers.push(customer);
    customerId = customer.id;
  }
  const freeCustomer = customer || { id: "", customer_name: form.get("customer_name"), address: form.get("address"), postal_code: form.get("postal_code"), city: form.get("city"), phone: form.get("phone"), email: form.get("email") };
  let projectId = form.get("project_id");
  let project = projectId && projectId !== "__new__" ? byId(state.projects || [], projectId) : null;
  const mechanicId = mechanicCreated ? currentUser()?.id : form.get("mechanic_id");
  if (projectId === "__new__") {
    project = createProjectFromPlanning(form, freeCustomer, customerId || "");
    projectId = project.id;
  }
  if (project) {
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.technician = mechanicNameById(mechanicId) || currentUser()?.name || "";
    project.customer_id = customerId || project.customer_id || "";
    project.customerId = customerId || project.customerId || "";
    project.customer = freeCustomer.customer_name || project.customer;
    project.customer_name = freeCustomer.customer_name || project.customer_name;
    project.address = `${freeCustomer.address || ""} ${freeCustomer.postal_code || ""} ${freeCustomer.city || ""}`.trim();
    project.postal_code = freeCustomer.postal_code || "";
    project.city = freeCustomer.city || "";
    project.phone = freeCustomer.phone || "";
    project.status = form.get("status") || "ingepland";
    applyPricingSnapshot(project, form.get("pricing_category_id") || project.pricing_category_id);
  }
  const categorySnapshot = snapshotPricingCategory(pricingCategoryById(form.get("pricing_category_id") || project?.pricing_category_id));
  const planningEvent = {
    id: uid("plan"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customerId || "",
    workorder_id: project?.id || "",
    project_id: project?.id || "",
    mechanic_id: mechanicId,
    title: project ? workorderNumber(project) : form.get("title"),
    description: form.get("description") || form.get("title") || "",
    customer_name: freeCustomer.customer_name || form.get("customer_name"),
    address: freeCustomer.address || form.get("address"),
    postal_code: freeCustomer.postal_code || form.get("postal_code"),
    city: freeCustomer.city || form.get("city"),
    phone: freeCustomer.phone || form.get("phone"),
    email: freeCustomer.email || form.get("email"),
    pricing_category_id: categorySnapshot.pricing_category_id,
    pricing_category_name: categorySnapshot.pricing_category_name,
    start_datetime: `${form.get("start_date")}T${form.get("start_time")}`,
    end_datetime: `${form.get("end_date")}T${form.get("end_time")}`,
    status: form.get("status") || "ingepland",
    priority: form.get("priority") || "normaal",
    notes: form.get("notes") || "",
    source: mechanicCreated ? "mechanic" : "admin",
    approval_status: mechanicCreated ? "concept" : "goedgekeurd",
    created_by: currentUser()?.id || "",
    created_by_role: mechanicCreated ? "mechanic" : "company_admin",
    created_at: now,
    updated_by: currentUser()?.id || "",
    updated_at: now,
  };
  state.planningEvents = state.planningEvents || [];
  state.planningEvents.push(planningEvent);
  if (project && !mechanicCreated) notifyWorkorderAssigned(project, planningEvent);
  if (!project && !mechanicCreated) notifyPlanningChange(planningEvent, planningEvent.priority === "spoed" ? "emergency" : "planning_changed", planningEvent.priority === "spoed" ? "Spoedmelding" : "Nieuwe afspraak ingepland", planningEvent.priority === "spoed" ? "Er is een spoedafspraak aan u toegewezen." : "Er is een nieuwe afspraak in uw planning gezet.", planningEvent.priority || "normaal");
  saveState();
  ui.creatingPlanningEvent = false;
  render();
}

function renderCalendarEventBlock(event) {
  const details = planningEventDetails(event);
  return `<button class="calendar-event ${statusClass(event.status)} ${event.priority === "spoed" ? "urgent" : ""}" style="${eventPositionStyle(event)}" type="button" onpointerdown="event.stopPropagation()" ondblclick="event.stopPropagation()" onclick="openPlanningEdit('${event.id}')">
    <strong>${escapeHtml(details.customer_name || event.title || "Afspraak")}</strong>
    <span>${eventDateTimeLabel(event)} - ${escapeHtml(event.description || event.title || "")}</span>
    <span>${escapeHtml(isMechanic() ? details.address || "" : mechanicNameById(event.mechanic_id))}</span>
    <small>${escapeHtml(projectLabelForPlanningEvent(event))}${!isMechanic() && event.source === "mechanic" ? " / monteur" : ""}</small>
  </button>`;
}

function approvePlanningEvent(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event) || isMechanic()) return;
  event.approval_status = "goedgekeurd";
  event.updated_by = currentUser()?.id || "";
  event.updated_at = new Date().toISOString();
  saveState();
  render();
}

function renderPlanningAudit(event) {
  return `<section class="panel subtle-panel" style="margin-top:14px"><h3>Auditlog</h3><div class="meta-grid">
    <div class="meta"><span>Bron</span><strong>${escapeHtml(event.source || "admin")}</strong></div>
    <div class="meta"><span>Goedkeuring</span><strong>${escapeHtml(event.approval_status || "goedgekeurd")}</strong></div>
    <div class="meta"><span>Aangemaakt door</span><strong>${escapeHtml(auditUserName(event.created_by))}</strong></div>
    <div class="meta"><span>Aangemaakt op</span><strong>${escapeHtml(String(event.created_at || event.updated_at || "-").replace("T", " ").slice(0, 16))}</strong></div>
    <div class="meta"><span>Laatst gewijzigd door</span><strong>${escapeHtml(auditUserName(event.updated_by))}</strong></div>
    <div class="meta"><span>Laatst gewijzigd op</span><strong>${escapeHtml(String(event.updated_at || "-").replace("T", " ").slice(0, 16))}</strong></div>
  </div></section>`;
}

function renderPlanningEditModal(eventId) {
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return "";
  if (isMechanic() && planningMechanicId(event) !== currentUser()?.id) return "";
  const mechanics = isMechanic() ? [currentUser()] : companyScoped(state.users || []).filter((user) => user.role === ROLES.MECHANIC && user.active);
  const details = planningEventDetails(event);
  return `<div class="modal-backdrop"><section class="modal calendar-modal">
    <div class="article-head"><div><h2>${escapeHtml(event.title || "Afspraak")}</h2><p>${escapeHtml(details.customer_name || "-")} - ${escapeHtml(details.address || "-")}</p></div><button class="btn secondary" type="button" onclick="closePlanningEdit()">Sluiten</button></div>
    <form class="form-grid" onsubmit="savePlanningEdit(event, '${event.id}')">
      <label>Type werkzaamheden <input name="title" value="${escapeAttr(event.title || "")}" required /></label>
      <label>Klant <input name="customer_name" value="${escapeAttr(details.customer_name || "")}" required /></label>
      <label>Adres <input name="address" value="${escapeAttr(details.address || "")}" required /></label>
      <label>Postcode <input name="postal_code" value="${escapeAttr(details.postal_code || "")}" /></label>
      <label>Plaats <input name="city" value="${escapeAttr(details.city || "")}" /></label>
      <label>Telefoon <input name="phone" value="${escapeAttr(details.phone || "")}" /></label>
      <label>Monteur <select name="mechanic_id" ${isMechanic() ? "disabled" : ""}>${mechanics.map((user) => `<option value="${user.id}" ${planningMechanicId(event) === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Start <input name="start_datetime" type="datetime-local" value="${escapeAttr(event.start_datetime || "")}" required /></label>
      <label>Einde <input name="end_datetime" type="datetime-local" value="${escapeAttr(event.end_datetime || "")}" required /></label>
      <label>Status <select name="status">${planningStatuses().map((status) => `<option value="${status}" ${event.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>Prioriteit <select name="priority">${planningPriorities().map((priority) => `<option value="${priority}" ${event.priority === priority ? "selected" : ""}>${priority}</option>`).join("")}</select></label>
      <label class="full">Opmerkingen <textarea name="notes">${escapeHtml(event.notes || "")}</textarea></label>
      <div class="button-row full">
        <button class="btn success" type="submit">Opslaan</button>
        ${!isMechanic() && event.source === "mechanic" && event.approval_status !== "goedgekeurd" ? `<button class="btn success" type="button" onclick="approvePlanningEvent('${event.id}')">Goedkeuren</button>` : ""}
        ${event.project_id ? `<a class="btn secondary" href="#/project/${event.project_id}">Open werkbon</a>` : `<button class="btn secondary" type="button" onclick="createWorkorderFromPlanningEvent('${event.id}')">Werkbon maken</button>`}
        <a class="btn secondary" target="_blank" href="${escapeAttr(planningMapsUrl(event))}">Route</a>
        ${!isMechanic() ? `<button class="btn danger" type="button" onclick="deletePlanningEvent('${event.id}')">Verwijderen</button>` : ""}
      </div>
    </form>
    ${renderPlanningAudit(event)}
  </section></div>`;
}

function createPlanningSelection(pointerEvent, date) {
  if (!canCreatePlanningSelection()) return;
  if (pointerEvent.button !== undefined && pointerEvent.button !== 0) return;
  if (pointerEvent.target?.closest?.(".calendar-event")) return;
  const column = pointerEvent.currentTarget;
  const startMinutes = minutesFromCalendarPointer(pointerEvent, column);
  ui.planningSelection = { date, startMinutes, endMinutes: startMinutes, moved: false };
  updatePlanningSelectionPreview(column);
  pointerEvent.preventDefault();
  const onMove = (moveEvent) => {
    const nextMinutes = minutesFromCalendarPointer(moveEvent, column);
    ui.planningSelection.endMinutes = nextMinutes;
    ui.planningSelection.moved = ui.planningSelection.moved || Math.abs(nextMinutes - startMinutes) >= 15;
    updatePlanningSelectionPreview(column);
  };
  const onUp = () => {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    const selection = ui.planningSelection;
    hidePlanningSelectionPreview(column);
    ui.planningSelection = null;
    if (!selection) return;
    const normalized = selectionToStyle(selection);
    const end = selection.moved && Math.abs(normalized.end - normalized.start) >= 15
      ? normalized.end
      : Math.min(20 * 60, normalized.start + 60);
    openPlanningSelectionModal(selection.date, normalized.start, end);
  };
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", onUp);
}

function savePlanningEdit(submitEvent, eventId) {
  submitEvent.preventDefault();
  const event = byId(state.planningEvents || [], eventId);
  if (!event || !isSameCompany(event)) return;
  if (isMechanic() && planningMechanicId(event) !== currentUser()?.id) return;
  const form = new FormData(submitEvent.target);
  const previous = {
    mechanic_id: event.mechanic_id,
    start_datetime: event.start_datetime,
    end_datetime: event.end_datetime,
    status: event.status,
    priority: event.priority,
  };
  const mechanicId = isMechanic() ? currentUser()?.id : form.get("mechanic_id");
  ["title", "customer_name", "address", "postal_code", "city", "phone", "start_datetime", "end_datetime", "status", "priority", "notes"].forEach((field) => {
    event[field] = form.get(field) || "";
  });
  event.mechanic_id = mechanicId;
  event.updated_by = currentUser()?.id || "";
  event.updated_at = new Date().toISOString();
  if (!isMechanic() && event.source === "mechanic" && event.approval_status !== "goedgekeurd") {
    event.approval_status = "aangepast door admin";
  }
  const project = byId(state.projects || [], event.project_id || event.workorder_id || "");
  if (project && canAccessProject(project)) {
    project.status = event.status;
    project.assignedMechanicId = mechanicId;
    project.mechanicId = mechanicId;
    project.assigned_mechanic_id = mechanicId;
    project.customer = event.customer_name;
    project.customer_name = event.customer_name;
    project.address = `${event.address || ""} ${event.postal_code || ""} ${event.city || ""}`.trim();
    project.postal_code = event.postal_code;
    project.city = event.city;
    project.phone = event.phone;
  }
  if (!isMechanic()) {
    const moved = previous.start_datetime !== event.start_datetime || previous.end_datetime !== event.end_datetime;
    const reassigned = previous.mechanic_id !== event.mechanic_id;
    if (event.status === "geannuleerd" && previous.status !== "geannuleerd") notifyPlanningChange(event, "planning_cancelled", "Afspraak geannuleerd", "Een afspraak in uw planning is geannuleerd.", event.priority);
    else if (moved) notifyPlanningChange(event, "planning_moved", "Afspraak verplaatst", "Een afspraak in uw planning is verplaatst.", event.priority);
    else if (reassigned || previous.priority !== event.priority || previous.status !== event.status) notifyPlanningChange(event, event.priority === "spoed" ? "emergency" : "planning_changed", event.priority === "spoed" ? "Spoedmelding" : "Planning gewijzigd", "Uw planning is gewijzigd.", event.priority);
  }
  saveState();
  closePlanningEdit();
}

function strictRecordCompanyId(record) {
  if (!record) return null;
  if (Object.prototype.hasOwnProperty.call(record, "company_id")) return record.company_id;
  if (Object.prototype.hasOwnProperty.call(record, "companyId")) return record.companyId;
  return DEFAULT_COMPANY_ID;
}

function recordCompanyId(record) {
  return strictRecordCompanyId(record);
}

function currentCompanyId() {
  const user = currentUser();
  if (!user || userRole(user) === ROLES.PLATFORM_ADMIN) return null;
  return strictRecordCompanyId(user);
}

function isSameCompany(record) {
  if (isPlatformSuperAdmin()) return true;
  const companyId = currentCompanyId();
  return Boolean(companyId) && strictRecordCompanyId(record) === companyId;
}

function companyScoped(collection = []) {
  if (isPlatformSuperAdmin()) return collection;
  const companyId = currentCompanyId();
  if (!companyId) return [];
  return collection.filter((item) => strictRecordCompanyId(item) === companyId);
}

function canAccessPlatformManagement() {
  return userRole() === ROLES.PLATFORM_ADMIN;
}

function renderPlatformAccessDenied() {
  return `<section class="panel empty"><h2>Geen toegang tot platformbeheer.</h2><p>Dit onderdeel is alleen beschikbaar voor Platform Admin.</p></section>`;
}

function renderNoOfficeAccess() {
  return `<section class="panel empty"><h2>Geen toegang.</h2><p>Je account heeft geen rechten voor deze omgeving.</p></section>`;
}

function isCompanyScopedUser(user) {
  if (!user) return false;
  const role = userRole(user);
  if (role === ROLES.PLATFORM_ADMIN) return false;
  if (role !== ROLES.MECHANIC && role !== ROLES.COMPANY_ADMIN) return false;
  return Boolean(currentCompanyId()) && strictRecordCompanyId(user) === currentCompanyId();
}

function visibleUsersForUserManagement() {
  if (isPlatformSuperAdmin()) return (state.users || []).filter((user) => !user.deleted);
  if (isCompanyAdmin()) return (state.users || []).filter((user) => !user.deleted && isCompanyScopedUser(user));
  return [];
}

function canManageUser(user) {
  if (!user) return false;
  if (isPlatformSuperAdmin()) return true;
  if (userRole(user) === ROLES.PLATFORM_ADMIN) return false;
  return isCompanyAdmin() && isCompanyScopedUser(user);
}

function canDeleteUser(user) {
  if (!user) return false;
  if (user.id === currentUser()?.id) {
    alert("Je kunt je eigen account niet verwijderen.");
    return false;
  }
  if (!canManageUser(user)) {
    if (userRole(user) === ROLES.PLATFORM_ADMIN) alert("Geen toegang tot platformbeheer.");
    return false;
  }
  return true;
}

function renderUsers() {
  const users = visibleUsersForUserManagement();
  const roleOptions = isPlatformSuperAdmin()
    ? [[ROLES.MECHANIC, "Mechanic"], [ROLES.COMPANY_ADMIN, "Company Admin"], [ROLES.PLATFORM_ADMIN, "Platform Admin"]]
    : [[ROLES.MECHANIC, "Mechanic"], [ROLES.COMPANY_ADMIN, "Company Admin"]];
  const companyOptions = (state.companies || []).filter((company) => company.active !== false);
  const pendingDeleteUser = ui.pendingDeleteUserId && canManageUser(byId(state.users || [], ui.pendingDeleteUserId)) ? byId(state.users || [], ui.pendingDeleteUserId) : null;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Nieuwe gebruiker</h2>
      <form class="form-grid" onsubmit="addUser(event)">
        <label>Naam <input name="name" required /></label>
        <label>E-mail <input name="email" type="email" required /></label>
        <label>Wachtwoord <input name="password" type="text" required /></label>
        ${isPlatformSuperAdmin() ? `<label>Company <select name="company_id"><option value="">Geen company (alleen platform_admin)</option>${companyOptions.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}</select></label>` : ""}
        <label>Rol <select name="role" required>${roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
        ${MECHANIC_PERMISSION_FIELDS.map(([field, label]) => `<label>${label}<select name="${field}"><option value="false">Nee</option><option value="true" ${field === "can_close_workorders" ? "selected" : ""}>Ja</option></select></label>`).join("")}
        ${EMAIL_PERMISSION_FIELDS.map(([field, label]) => `<label>${label}<select name="${field}"><option value="false">Nee</option><option value="true" ${["can_read_email", "can_reply_email"].includes(field) ? "selected" : ""}>Ja</option></select></label>`).join("")}
        <button class="btn success" type="submit">Gebruiker aanmaken</button>
      </form>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Actief</th><th>Naam</th><th>E-mail</th><th>Company</th><th>Rol</th>${MECHANIC_PERMISSION_FIELDS.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}${EMAIL_PERMISSION_FIELDS.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}<th>Actie</th></tr></thead>
      <tbody>${users.map((user) => {
        const companyId = strictRecordCompanyId(user);
        const role = userRole(user);
        return `<tr>
          <td><input type="checkbox" ${user.active ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /></td>
          <td><input value="${escapeAttr(user.name)}" onchange="updateUser('${user.id}', 'name', this.value)" /></td>
          <td>${escapeHtml(user.email)}</td>
          <td>${escapeHtml(role === ROLES.PLATFORM_ADMIN ? "Platform" : byId(state.companies || [], companyId)?.name || companyId || "-")}</td>
          <td><select onchange="updateUser('${user.id}', 'role', this.value)">${roleOptions.map(([value, label]) => `<option value="${value}" ${role === value ? "selected" : ""}>${label}</option>`).join("")}</select></td>
          ${MECHANIC_PERMISSION_FIELDS.map(([field]) => `<td>${role === ROLES.MECHANIC ? renderMechanicPermissionSelect(user, field) : "-"}</td>`).join("")}
          ${EMAIL_PERMISSION_FIELDS.map(([field]) => `<td>${renderUserPermissionSelect(user, field)}</td>`).join("")}
          <td><div class="button-row" style="margin-top:0"><button class="btn secondary" type="button" onclick="saveUserRow()">Opslaan</button><button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active ? "Deactiveren" : "Activeren"}</button><button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button></div></td>
        </tr>`;
      }).join("")}</tbody>
    </table></div>
    ${pendingDeleteUser ? `<section class="modal-backdrop"><div class="panel confirm-modal"><h2>Gebruiker verwijderen</h2><p>Weet je zeker dat je deze gebruiker wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.</p><div class="button-row"><button class="btn secondary" type="button" onclick="cancelDeleteUser()">Annuleren</button><button class="btn danger" type="button" onclick="confirmDeleteUser()">Definitief verwijderen</button></div></div></section>` : ""}`;
}

function addUser(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin() && !isCompanyAdmin()) return renderNoOfficeAccess();
  const form = new FormData(event.target);
  const role = String(form.get("role") || ROLES.MECHANIC);
  if (!isPlatformSuperAdmin() && role === ROLES.PLATFORM_ADMIN) return alert("Company Admin mag geen platform_admin aanmaken.");
  if (!isPlatformSuperAdmin() && role !== ROLES.MECHANIC && role !== ROLES.COMPANY_ADMIN) return alert("Geen toegang tot platformbeheer.");
  const email = String(form.get("email") || "").trim().toLowerCase();
  if ((state.users || []).some((user) => String(user.email || "").toLowerCase() === email)) return alert("E-mail moet uniek zijn.");
  const companyId = isPlatformSuperAdmin() ? (form.get("company_id") || null) : currentCompanyId();
  if (role !== ROLES.PLATFORM_ADMIN && !companyId) return alert("Company is verplicht voor deze rol.");
  const now = new Date().toISOString();
  const user = {
    id: uid("user"),
    company_id: role === ROLES.PLATFORM_ADMIN ? null : companyId,
    companyId: role === ROLES.PLATFORM_ADMIN ? null : companyId,
    name: String(form.get("name") || "").trim(),
    email,
    password: String(form.get("password") || ""),
    role,
    active: true,
    created_at: now,
    createdAt: now,
  };
  MECHANIC_PERMISSION_FIELDS.forEach(([field]) => {
    user[field] = role === ROLES.MECHANIC ? form.get(field) === "true" : false;
  });
  EMAIL_PERMISSION_FIELDS.forEach(([field]) => {
    user[field] = form.get(field) === "true";
  });
  user.can_create_customer_from_call = user.can_create_customers;
  state.users.push(user);
  saveState();
  render();
}

function updateUser(userId, field, value) {
  const user = byId(state.users || [], userId);
  if (!canManageUser(user)) {
    if (userRole(user) === ROLES.PLATFORM_ADMIN) alert("Geen toegang tot platformbeheer.");
    return;
  }
  const protectedFields = ["company_id", "companyId"];
  if (protectedFields.includes(field) && !isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  if (!isPlatformSuperAdmin() && field === "role" && value === ROLES.PLATFORM_ADMIN) return alert("Company Admin mag geen platform_admin aanmaken.");
  if (!isPlatformSuperAdmin() && field === "role" && value !== ROLES.MECHANIC && value !== ROLES.COMPANY_ADMIN) return alert("Geen toegang tot platformbeheer.");
  const permissionFields = [...MECHANIC_PERMISSION_FIELDS, ...EMAIL_PERMISSION_FIELDS].map(([permission]) => permission);
  if (permissionFields.includes(field) && userRole(user) !== ROLES.MECHANIC) return;
  user[field] = ["active", "can_create_customer_from_call", ...permissionFields].includes(field) ? Boolean(value) : value;
  if (field === "role" && !isPlatformSuperAdmin()) {
    user.company_id = currentCompanyId();
    user.companyId = currentCompanyId();
  }
  if (field === "can_create_customers") user.can_create_customer_from_call = Boolean(value);
  saveState();
  render();
}

function requestDeleteUser(userId) {
  const user = byId(state.users || [], userId);
  if (!canDeleteUser(user)) return;
  ui.pendingDeleteUserId = userId;
  render();
}

function confirmDeleteUser() {
  const user = byId(state.users || [], ui.pendingDeleteUserId);
  if (!canDeleteUser(user)) {
    ui.pendingDeleteUserId = null;
    render();
    return;
  }
  if (userHasReferences(user.id)) {
    user.deleted = true;
    user.active = false;
    user.deletedAt = new Date().toISOString();
  } else {
    state.users = (state.users || []).filter((item) => item.id !== user.id);
  }
  ui.pendingDeleteUserId = null;
  saveState();
  render();
}

function renderRoute(route) {
  const [name, id, sub] = route.split("/");
  if (name === "login") return renderLogin();
  if (!currentUser()) return renderLogin();
  if (name === "platform") return canAccessPlatformManagement() ? renderPlatform(id) : renderPlatformAccessDenied();
  if (isPlatformSuperAdmin()) return renderPlatform();
  if (name === "admin" || name === "office" || name === "manage") return isCompanyAdmin() ? renderOffice(id) : renderNoOfficeAccess();
  const mechanicRoutes = ["start", "new", "active", "completed", "project", "summary", "notifications", "call-customer", "settlement", "payment"];
  if (!mechanicRoutes.includes(name)) return defaultRouteForUser() === "#/admin" ? renderOffice() : renderHome();
  if (!isMechanic()) return renderNoOfficeAccess();
  if (name === "notifications") return renderNotificationsCenter();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "settlement") return renderSettlementPrompt(id);
  if (name === "payment") return renderMechanicPayment(id);
  if (name === "start" && id === "planning") return renderMechanicAgendaPage(sub || "week");
  if (name === "start") return renderHome();
  if (name === "new") return renderNewProject();
  if (name === "active") return renderProjectList("Open");
  if (name === "completed") return renderProjectList("Afgerond");
  if (name === "project") return renderTechnician(id);
  if (name === "summary") return renderSummary(id);
  return renderHome();
}

function platformUserCompanyFilter() {
  return ui.platformUserCompanyFilter || "ALL";
}

function platformUserSearch() {
  return String(ui.platformUserSearch || "").trim().toLowerCase();
}

function setPlatformUserCompanyFilter(value) {
  ui.platformUserCompanyFilter = value || "ALL";
  render();
}

function setPlatformUserSearch(value) {
  ui.platformUserSearch = value || "";
  render();
}

function platformManagedUsers() {
  const companyFilter = platformUserCompanyFilter();
  const search = platformUserSearch();
  return (state.users || [])
    .filter((user) => !user.deleted)
    .filter((user) => userRole(user) !== ROLES.PLATFORM_ADMIN)
    .filter((user) => userRole(user) === ROLES.MECHANIC || userRole(user) === ROLES.COMPANY_ADMIN)
    .filter((user) => strictRecordCompanyId(user))
    .filter((user) => companyFilter === "ALL" || strictRecordCompanyId(user) === companyFilter)
    .filter((user) => {
      if (!search) return true;
      const companyName = byId(state.companies || [], strictRecordCompanyId(user))?.name || "";
      return [user.name, user.email, userRole(user), companyName].some((value) => String(value || "").toLowerCase().includes(search));
    })
    .sort((a, b) => {
      const companyCompare = String(strictRecordCompanyId(a) || "").localeCompare(String(strictRecordCompanyId(b) || ""));
      return companyCompare || String(a.name || "").localeCompare(String(b.name || ""));
    });
}

function renderPlatformUsers() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const companies = (state.companies || []).filter((company) => company.active !== false);
  const users = platformManagedUsers();
  const pendingDeleteUser = ui.pendingDeleteUserId ? byId(state.users || [], ui.pendingDeleteUserId) : null;
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Nieuwe gebruiker aanmaken</h2>
      <form class="form-grid" onsubmit="addPlatformUser(event)">
        <label>Naam <input name="name" required /></label>
        <label>E-mail <input name="email" type="email" required /></label>
        <label>Wachtwoord <input name="password" type="text" required /></label>
        <label>Bedrijf <select name="company_id" required><option value="">Kies een bedrijf</option>${companies.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}</select></label>
        <label>Rol <select name="role" required><option value="${ROLES.MECHANIC}">mechanic</option><option value="${ROLES.COMPANY_ADMIN}">company_admin</option></select></label>
        <label>Actief <select name="active"><option value="true">Ja</option><option value="false">Nee</option></select></label>
        <button class="btn success" type="submit">Gebruiker aanmaken</button>
      </form>
    </section>
    <section class="panel" style="margin-bottom:14px">
      <div class="article-head">
        <div><h2>Gebruikers</h2><p>Beheer bedrijfsgebruikers per aangesloten bedrijf.</p></div>
      </div>
      <div class="form-grid compact-form">
        <label>Bedrijfsfilter <select onchange="setPlatformUserCompanyFilter(this.value)"><option value="ALL">Alle bedrijven</option>${companies.map((company) => `<option value="${company.id}" ${platformUserCompanyFilter() === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}</select></label>
        <label>Zoeken <input value="${escapeAttr(ui.platformUserSearch || "")}" placeholder="Naam, e-mail, bedrijf of rol" oninput="setPlatformUserSearch(this.value)" /></label>
      </div>
    </section>
    <div class="table-wrap"><table>
      <thead><tr><th>Naam</th><th>E-mail</th><th>Rol</th><th>Bedrijf</th><th>Actief</th><th>Aangemaakt</th><th>Acties</th></tr></thead>
      <tbody>${users.map((user) => {
        const companyId = strictRecordCompanyId(user);
        return `<tr>
          <td><input value="${escapeAttr(user.name || "")}" onchange="updatePlatformUser('${user.id}', 'name', this.value)" /></td>
          <td><input value="${escapeAttr(user.email || "")}" onchange="updatePlatformUser('${user.id}', 'email', this.value)" /></td>
          <td><select onchange="updatePlatformUser('${user.id}', 'role', this.value)"><option value="${ROLES.MECHANIC}" ${userRole(user) === ROLES.MECHANIC ? "selected" : ""}>mechanic</option><option value="${ROLES.COMPANY_ADMIN}" ${userRole(user) === ROLES.COMPANY_ADMIN ? "selected" : ""}>company_admin</option></select></td>
          <td><select onchange="updatePlatformUser('${user.id}', 'company_id', this.value)">${companies.map((company) => `<option value="${company.id}" ${companyId === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}</select></td>
          <td><input type="checkbox" ${user.active !== false ? "checked" : ""} onchange="updatePlatformUser('${user.id}', 'active', this.checked)" /></td>
          <td>${safeDate(user.createdAt || user.created_at)}</td>
          <td><div class="button-row" style="margin-top:0"><button class="btn secondary" type="button" onclick="saveUserRow()">Bewerken</button><button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active !== false ? "Deactiveren" : "Activeren"}</button><button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button></div></td>
        </tr>`;
      }).join("")}</tbody>
    </table></div>
    ${pendingDeleteUser && userRole(pendingDeleteUser) !== ROLES.PLATFORM_ADMIN ? `<section class="modal-backdrop"><div class="panel confirm-modal"><h2>Gebruiker verwijderen</h2><p>Weet je zeker dat je deze gebruiker wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.</p><div class="button-row"><button class="btn secondary" type="button" onclick="cancelDeleteUser()">Annuleren</button><button class="btn danger" type="button" onclick="confirmDeleteUser()">Definitief verwijderen</button></div></div></section>` : ""}`;
}

function addPlatformUser(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  const form = new FormData(event.target);
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  const companyId = String(form.get("company_id") || "").trim();
  const role = String(form.get("role") || "").trim();
  if (!name) return alert("Naam is verplicht");
  if (!email) return alert("E-mail is verplicht");
  if (!password) return alert("Wachtwoord is verplicht");
  if (!companyId) return alert("Kies een bedrijf");
  if (!role) return alert("Rol is verplicht");
  if ((state.users || []).some((user) => String(user.email || "").toLowerCase() === email)) return alert("Dit e-mailadres bestaat al");
  if (role === ROLES.PLATFORM_ADMIN) return alert("Platform Admin kan niet via dit formulier worden aangemaakt");
  if (role !== ROLES.MECHANIC && role !== ROLES.COMPANY_ADMIN) return alert("Platform Admin kan niet via dit formulier worden aangemaakt");
  if (!byId(state.companies || [], companyId)) return alert("Kies een bedrijf");
  const now = new Date().toISOString();
  const user = {
    id: uid("user"),
    company_id: companyId,
    companyId: companyId,
    name,
    email,
    password,
    role,
    active: form.get("active") !== "false",
    created_at: now,
    createdAt: now,
  };
  MECHANIC_PERMISSION_FIELDS.forEach(([field]) => {
    user[field] = role === ROLES.MECHANIC ? field === "can_close_workorders" : false;
  });
  EMAIL_PERMISSION_FIELDS.forEach(([field]) => {
    user[field] = role === ROLES.COMPANY_ADMIN ? ["can_read_email", "can_reply_email"].includes(field) : false;
  });
  user.can_create_customer_from_call = user.can_create_customers;
  state.users.push(user);
  logPlatformAction("gebruiker aangemaakt", companyId, `${name} (${role})`);
  saveState();
  event.target.reset();
  render();
}

function updatePlatformUser(userId, field, value) {
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  const user = byId(state.users || [], userId);
  if (!user || userRole(user) === ROLES.PLATFORM_ADMIN) return alert("Platform Admin kan niet via dit formulier worden aangemaakt");
  if (field === "email") {
    const email = String(value || "").trim().toLowerCase();
    if (!email) return alert("E-mail is verplicht");
    if ((state.users || []).some((item) => item.id !== user.id && String(item.email || "").toLowerCase() === email)) return alert("Dit e-mailadres bestaat al");
    user.email = email;
  } else if (field === "role") {
    if (value === ROLES.PLATFORM_ADMIN || (value !== ROLES.MECHANIC && value !== ROLES.COMPANY_ADMIN)) return alert("Platform Admin kan niet via dit formulier worden aangemaakt");
    user.role = value;
  } else if (field === "company_id") {
    if (!value || !byId(state.companies || [], value)) return alert("Kies een bedrijf");
    user.company_id = value;
    user.companyId = value;
  } else if (field === "active") {
    user.active = Boolean(value);
  } else {
    user[field] = value;
  }
  user.updated_at = new Date().toISOString();
  logPlatformAction("gebruiker gewijzigd", strictRecordCompanyId(user), `${user.email}: ${field}`);
  saveState();
  render();
}

const PLATFORM_MODULES = [
  ["customers", "Klantenbeheer", ["Klanten"]],
  ["planning", "Planning", ["Planning"]],
  ["workorders", "Werkbonnen", ["Werkbonnen"]],
  ["quotes", "Offertes", ["Offertes"]],
  ["invoices", "Facturen", ["Facturen"]],
  ["email", "E-mailintegratie", ["E-mail"]],
  ["photo_storage", "Foto-opslag", []],
  ["reports", "Rapportages", ["Rapportages"]],
  ["inventory", "Voorraadbeheer", ["Voorraad"]],
  ["warehouse", "Magazijn", ["Voorraad"]],
  ["kits", "Koffers", ["Voorraad"]],
  ["ordering", "Bestellen", ["Voorraad"]],
  ["wasco", "Wasco koppeling", []],
  ["maintenance", "Onderhoudscontracten", ["Onderhoudscontracten"]],
  ["profit", "Winstdashboard", ["Rapportages"]],
  ["ai", "AI Assistent", []],
  ["whatsapp", "WhatsApp Integratie", []],
  ["api", "API toegang", []],
  ["accounting", "Boekhoudkoppelingen", []],
  ["branches", "Multi vestigingen", []],
];

const SUBSCRIPTION_PACKAGES = {
  basis: ["customers", "planning", "workorders"],
  professional: ["customers", "planning", "workorders", "quotes", "invoices", "photo_storage", "reports", "email"],
  premium: ["customers", "planning", "workorders", "quotes", "invoices", "photo_storage", "reports", "email", "inventory", "warehouse", "kits", "ordering", "wasco", "maintenance", "profit", "ai", "whatsapp", "api", "accounting", "branches"],
};

function platformAuditLogs() {
  state.platformAuditLogs = state.platformAuditLogs || [];
  return state.platformAuditLogs;
}

function logPlatformAction(action, companyId = "", details = "") {
  if (!currentUser()) return;
  platformAuditLogs().push({
    id: uid("audit"),
    created_at: new Date().toISOString(),
    user_id: currentUser()?.id || "",
    user_name: currentUser()?.name || "",
    role: userRole(),
    action,
    company_id: companyId || "",
    company_name: companyId ? byId(state.companies || [], companyId)?.name || companyId : "",
    details,
  });
}

function ensureCompanyPlatformConfig(company) {
  if (!company) return company;
  company.subscription_package = company.subscription_package || company.subscription_status || "basis";
  if (!SUBSCRIPTION_PACKAGES[company.subscription_package]) company.subscription_package = "basis";
  company.billing_status = company.billing_status || company.subscription_status || "trial";
  company.trial_until = company.trial_until || "";
  company.price_plan = company.price_plan || company.subscription_package;
  company.user_limit = Number(company.user_limit ?? 10);
  company.storage_limit_mb = Number(company.storage_limit_mb ?? 1024);
  company.blocked = Boolean(company.blocked);
  company.modules = company.modules || {};
  PLATFORM_MODULES.forEach(([key]) => {
    if (!company.modules[key]) {
      company.modules[key] = {
        active: SUBSCRIPTION_PACKAGES[company.subscription_package].includes(key),
        included: SUBSCRIPTION_PACKAGES[company.subscription_package].includes(key),
        override: false,
      };
    } else {
      company.modules[key].included = SUBSCRIPTION_PACKAGES[company.subscription_package].includes(key);
      company.modules[key].active = company.modules[key].override ? Boolean(company.modules[key].active) : company.modules[key].included;
    }
  });
  return company;
}

function platformCompanies() {
  return (state.companies || []).filter((company) => !company.deleted).map((company) => ensureCompanyPlatformConfig(company));
}

function currentSupportCompanyId() {
  return state.session?.supportCompanyId || "";
}

function isSupportMode() {
  return isPlatformSuperAdmin() && Boolean(currentSupportCompanyId());
}

function currentCompanyId() {
  if (isSupportMode()) return currentSupportCompanyId();
  const user = currentUser();
  if (!user || userRole(user) === ROLES.PLATFORM_ADMIN) return null;
  return strictRecordCompanyId(user);
}

function currentCompany() {
  const companyId = currentCompanyId();
  return companyId ? byId(state.companies || [], companyId) : null;
}

function isSameCompany(record) {
  if (isPlatformSuperAdmin() && !isSupportMode()) return true;
  const companyId = currentCompanyId();
  return Boolean(companyId) && strictRecordCompanyId(record) === companyId;
}

function companyScoped(collection = []) {
  if (isPlatformSuperAdmin() && !isSupportMode()) return collection;
  const companyId = currentCompanyId();
  if (!companyId) return [];
  return collection.filter((item) => strictRecordCompanyId(item) === companyId);
}

function companyModuleConfig(companyOrId, moduleKey) {
  const company = typeof companyOrId === "string" ? byId(state.companies || [], companyOrId) : companyOrId;
  ensureCompanyPlatformConfig(company);
  return company?.modules?.[moduleKey] || { active: true, included: true, override: false };
}

function isCompanyModuleActive(moduleKey, companyId = currentCompanyId()) {
  if (!moduleKey) return true;
  if (isPlatformSuperAdmin() && !isSupportMode()) return true;
  const company = byId(state.companies || [], companyId);
  if (!company || company.active === false || company.blocked) return false;
  return companyModuleConfig(company, moduleKey).active !== false;
}

function moduleInactiveMessage() {
  return `<section class="panel empty"><h2>Module niet actief</h2><p>Deze module is niet actief binnen uw abonnement.</p></section>`;
}

function moduleForOfficeSection(section = "") {
  const map = {
    planning: "planning",
    agenda: "planning",
    workorders: "workorders",
    projects: "workorders",
    customers: "customers",
    email: "email",
    quotes: "quotes",
    invoices: "invoices",
    payments: "invoices",
    mechanics: "",
    users: "",
    inventory: "inventory",
    warehouse: "warehouse",
    orders: "ordering",
    "garage-box": "inventory",
    margin: "profit",
    categories: "profit",
    profit: "profit",
    reports: "reports",
    costs: "reports",
    settings: "",
    checklists: "workorders",
    prices: "profit",
  };
  return map[section] || "";
}

function officeNavItems() {
  const items = [
    ["Dashboard", "dashboard", "D", ""],
    ["Planning", "planning", "P", "planning"],
    ["Werkbonnen", "workorders", "W", "workorders"],
    ["Klanten", "customers", "K", "customers"],
    ["E-mail", "email", "E", "email"],
    ["Offertes", "quotes", "O", "quotes"],
    ["Facturen", "invoices", "F", "invoices"],
    ["Monteurs", "mechanics", "M", ""],
    ["Voorraad", "inventory", "V", "inventory"],
    ["Margebeheer", "margin", "G", "profit"],
    ["Rapportages", "reports", "R", "reports"],
    ["Instellingen", "settings", "I", ""],
  ];
  return items.filter(([, , , moduleKey]) => !moduleKey || isCompanyModuleActive(moduleKey));
}

function renderSupportBanner() {
  if (!isSupportMode()) return "";
  const company = currentCompany();
  return `<section class="panel validation-box" style="margin-bottom:14px"><div class="article-head"><div><h2>Supportmodus actief</h2><p>U bekijkt ${escapeHtml(company?.name || currentSupportCompanyId())} als Platform Admin.</p></div><button class="btn secondary" type="button" onclick="stopSupportMode()">Supportmodus verlaten</button></div></section>`;
}

function renderOffice(section = "") {
  if (section === "to-order") ui.dashboardTab = "Voorraad";
  else ui.dashboardTab = officeSectionToTab(section);
  const moduleKey = moduleForOfficeSection(section);
  if (moduleKey && !isCompanyModuleActive(moduleKey)) return `${renderSupportBanner()}${moduleInactiveMessage()}`;
  return `${renderSupportBanner()}<section class="office-erp-shell">
    ${renderOfficeSidebar()}
    <main class="office-content">
      ${renderDashboardTab()}
    </main>
  </section>`;
}

function setPlatformTab(tab) {
  ui.platformTab = tab;
  const tabRoutes = {
    Overzicht: "overview",
    Bedrijven: "companies",
    Gebruikers: "users",
    Modules: "modules",
    Abonnementen: "subscriptions",
    Facturatie: "billing",
    Opslaggebruik: "storage",
    Rechten: "permissions",
    Support: "support",
    "Audit Logs": "audit",
    Systeeminstellingen: "system",
  };
  const route = tabRoutes[tab];
  if (route && !location.hash.endsWith(`/platform/${route}`)) {
    location.hash = `#/platform/${route}`;
    return;
  }
  render();
}

function renderPlatform(section = "") {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const routeTabs = {
    overview: "Overzicht",
    companies: "Bedrijven",
    users: "Gebruikers",
    modules: "Modules",
    subscriptions: "Abonnementen",
    billing: "Facturatie",
    storage: "Opslaggebruik",
    permissions: "Rechten",
    support: "Support",
    audit: "Audit Logs",
    system: "Systeeminstellingen",
    settings: "Systeeminstellingen",
  };
  if (section) ui.platformTab = routeTabs[section] || ui.platformTab || "Overzicht";
  const tabs = ["Overzicht", "Bedrijven", "Gebruikers", "Modules", "Abonnementen", "Facturatie", "Opslaggebruik", "Rechten", "Support", "Audit Logs", "Systeeminstellingen"];
  return `
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.platformTab === tab ? "active" : ""}" onclick="setPlatformTab('${tab}')">${tab}</button>`).join("")}</div>
    ${renderPlatformTab()}
  `;
}

function renderPlatformTab() {
  if (ui.platformTab === "Bedrijven") return renderPlatformCompanies();
  if (ui.platformTab === "Gebruikers") return renderPlatformUsers();
  if (ui.platformTab === "Modules") return renderPlatformModules();
  if (ui.platformTab === "Abonnementen") return renderPlatformSubscriptions();
  if (ui.platformTab === "Facturatie") return renderPlatformBilling();
  if (ui.platformTab === "Opslaggebruik") return renderPlatformStorage();
  if (ui.platformTab === "Rechten") return renderPlatformPermissions();
  if (ui.platformTab === "Support") return renderPlatformSupport();
  if (ui.platformTab === "Audit Logs") return renderPlatformAuditLogs();
  if (ui.platformTab === "Systeeminstellingen") return renderPlatformSystemSettings();
  return renderPlatformOverview();
}

function renderPlatformOverview() {
  const companies = platformCompanies();
  const users = (state.users || []).filter((user) => !user.deleted);
  const projects = state.projects || [];
  const blocked = companies.filter((company) => company.blocked || company.active === false).length;
  return `
    <section class="stats" style="margin-bottom:14px">
      <div class="stat-card"><span>Totaal bedrijven</span><strong>${companies.length}</strong></div>
      <div class="stat-card"><span>Actieve bedrijven</span><strong>${companies.filter((company) => company.active !== false && !company.blocked).length}</strong></div>
      <div class="stat-card"><span>Geblokkeerd/inactief</span><strong>${blocked}</strong></div>
      <div class="stat-card"><span>Totaal gebruikers</span><strong>${users.length}</strong></div>
      <div class="stat-card"><span>Company Admins</span><strong>${users.filter((user) => userRole(user) === ROLES.COMPANY_ADMIN).length}</strong></div>
      <div class="stat-card"><span>Monteurs</span><strong>${users.filter((user) => userRole(user) === ROLES.MECHANIC).length}</strong></div>
      <div class="stat-card"><span>Werkbonnen</span><strong>${projects.length}</strong></div>
      <div class="stat-card"><span>Audit logs</span><strong>${platformAuditLogs().length}</strong></div>
    </section>
    ${renderPlatformCompaniesTable(true)}
  `;
}

function renderPlatformCompanies() {
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>Bedrijf aanmaken</h2>
      <form class="form-grid" onsubmit="addCompany(event)">
        <label>Bedrijfsnaam <input name="name" required placeholder="Bijv. Installatiebedrijf Noord" /></label>
        <label>Logo/markering <input name="logo" placeholder="Bijv. IN" /></label>
        <label>Primaire kleur <input name="primary_color" type="color" value="#123c69" /></label>
        <label>Secundaire kleur <input name="secondary_color" type="color" value="#2dbe72" /></label>
        <label>Domein/subdomein <input name="slug" placeholder="installatiebedrijf-noord" /></label>
        <label>Pakket <select name="subscription_package"><option value="basis">Basis</option><option value="professional">Professional</option><option value="premium">Premium</option></select></label>
        <label>Gebruikerslimiet <input name="user_limit" type="number" min="1" value="10" /></label>
        <label>Opslaglimiet MB <input name="storage_limit_mb" type="number" min="100" value="1024" /></label>
        <button class="btn success" type="submit">Bedrijf aanmaken</button>
      </form>
    </section>
    ${renderPlatformCompaniesTable(true)}
  `;
}

function addCompany(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  const form = new FormData(event.target);
  const name = String(form.get("name") || "").trim();
  const id = `company-${slugify(form.get("slug") || name)}`;
  if (state.companies.some((company) => company.id === id || company.slug === slugify(form.get("slug") || name))) return alert("Dit bedrijf of domein bestaat al.");
  const now = new Date().toISOString();
  const company = ensureCompanyPlatformConfig({
    id,
    company_id: id,
    companyId: id,
    name,
    slug: slugify(form.get("slug") || name),
    logo: String(form.get("logo") || "").trim(),
    primary_color: form.get("primary_color") || "#123c69",
    secondary_color: form.get("secondary_color") || "#2dbe72",
    active: true,
    blocked: false,
    subscription_status: "active",
    subscription_package: form.get("subscription_package") || "basis",
    billing_status: "trial",
    user_limit: Number(form.get("user_limit") || 10),
    storage_limit_mb: Number(form.get("storage_limit_mb") || 1024),
    branding: {
      brandName: name,
      brandMark: String(form.get("logo") || name).trim().slice(0, 4),
      primaryColor: form.get("primary_color") || "#123c69",
      secondaryColor: form.get("secondary_color") || "#2dbe72",
    },
    settings: { locale: "nl-NL", currency: "EUR" },
    createdAt: now,
    created_at: now,
    updated_at: now,
  });
  state.companies.push(company);
  logPlatformAction("bedrijf aangemaakt", company.id, name);
  saveState();
  render();
}

function renderPlatformCompaniesTable(editable) {
  const rows = platformCompanies();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Status</th><th>Bedrijf</th><th>Logo</th><th>Primair</th><th>Secundair</th><th>Domein</th><th>Pakket</th><th>Betaalstatus</th><th>Users</th><th>Gebr. limiet</th><th>Opslag MB</th><th>Werkbonnen</th><th>Acties</th></tr></thead>
        <tbody>${rows.map((company) => `<tr>
          <td><span class="badge">${company.blocked ? "geblokkeerd" : company.active !== false ? "actief" : "inactief"}</span></td>
          <td>${editable ? `<input value="${escapeAttr(company.name)}" onchange="updateCompany('${company.id}', 'name', this.value)" />` : escapeHtml(company.name)}</td>
          <td>${editable ? `<input value="${escapeAttr(company.logo || "")}" onchange="updateCompany('${company.id}', 'logo', this.value)" />` : escapeHtml(company.logo || "-")}</td>
          <td>${editable ? `<input type="color" value="${escapeAttr(company.primary_color || "#123c69")}" onchange="updateCompany('${company.id}', 'primary_color', this.value)" />` : `<span class="color-dot" style="background:${escapeAttr(company.primary_color || "#123c69")}"></span>`}</td>
          <td>${editable ? `<input type="color" value="${escapeAttr(company.secondary_color || "#2dbe72")}" onchange="updateCompany('${company.id}', 'secondary_color', this.value)" />` : `<span class="color-dot" style="background:${escapeAttr(company.secondary_color || "#2dbe72")}"></span>`}</td>
          <td>${editable ? `<input value="${escapeAttr(company.slug)}" onchange="updateCompany('${company.id}', 'slug', this.value)" />` : escapeHtml(company.slug)}</td>
          <td>${editable ? `<select onchange="updateCompany('${company.id}', 'subscription_package', this.value)">${Object.keys(SUBSCRIPTION_PACKAGES).map((pkg) => `<option value="${pkg}" ${company.subscription_package === pkg ? "selected" : ""}>${pkg}</option>`).join("")}</select>` : escapeHtml(company.subscription_package || "-")}</td>
          <td>${editable ? `<select onchange="updateCompany('${company.id}', 'billing_status', this.value)">${["trial", "active", "overdue", "paused", "cancelled"].map((status) => `<option value="${status}" ${company.billing_status === status ? "selected" : ""}>${status}</option>`).join("")}</select>` : escapeHtml(company.billing_status || "-")}</td>
          <td>${companyUsers(company.id).length}</td>
          <td>${editable ? `<input type="number" min="1" value="${Number(company.user_limit || 10)}" onchange="updateCompany('${company.id}', 'user_limit', this.value)" />` : company.user_limit}</td>
          <td>${editable ? `<input type="number" min="100" value="${Number(company.storage_limit_mb || 1024)}" onchange="updateCompany('${company.id}', 'storage_limit_mb', this.value)" />` : company.storage_limit_mb}</td>
          <td>${companyProjects(company.id).length}</td>
          <td><div class="button-row" style="margin-top:0">
            <button class="btn warn" type="button" onclick="toggleCompanyBlocked('${company.id}')">${company.blocked ? "Deblokkeren" : "Blokkeren"}</button>
            <button class="btn secondary" type="button" onclick="updateCompany('${company.id}', 'active', ${company.active === false ? "true" : "false"})">${company.active === false ? "Activeren" : "Deactiveren"}</button>
            <button class="btn danger" type="button" onclick="deleteCompany('${company.id}')">Verwijderen</button>
          </div></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function updateCompany(companyId, field, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  ensureCompanyPlatformConfig(company);
  const numeric = ["user_limit", "storage_limit_mb"];
  const booleanFields = ["active", "blocked"];
  company[field] = numeric.includes(field) ? Number(value) || 0 : booleanFields.includes(field) ? Boolean(value) : value;
  if (field === "name") company.branding = { ...(company.branding || {}), brandName: value };
  if (field === "logo") company.branding = { ...(company.branding || {}), brandMark: value || String(company.name || "").slice(0, 4) };
  if (field === "primary_color") company.branding = { ...(company.branding || {}), primaryColor: value };
  if (field === "secondary_color") company.branding = { ...(company.branding || {}), secondaryColor: value };
  if (field === "slug") company.slug = slugify(value);
  if (field === "subscription_package") ensureCompanyPlatformConfig(company);
  company.subscription_status = company.billing_status || company.subscription_status || "active";
  company.updated_at = new Date().toISOString();
  logPlatformAction(field === "active" ? (company.active ? "bedrijf geactiveerd" : "bedrijf gedeactiveerd") : "bedrijf gewijzigd", company.id, `${field}: ${value}`);
  saveState();
  render();
}

function toggleCompanyBlocked(companyId) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  company.blocked = !company.blocked;
  company.active = !company.blocked;
  company.updated_at = new Date().toISOString();
  logPlatformAction(company.blocked ? "bedrijf geblokkeerd" : "bedrijf gedeblokkeerd", company.id, company.name);
  saveState();
  render();
}

function deleteCompany(companyId) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  if (!confirm(`Bedrijf ${company.name} verwijderen/deactiveren?`)) return;
  company.deleted = true;
  company.active = false;
  company.blocked = true;
  company.deleted_at = new Date().toISOString();
  company.updated_at = company.deleted_at;
  logPlatformAction("bedrijf verwijderd", company.id, company.name);
  saveState();
  render();
}

function setCompanyModule(companyId, moduleKey, field, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  ensureCompanyPlatformConfig(company);
  company.modules[moduleKey] = company.modules[moduleKey] || { active: false, included: false, override: true };
  company.modules[moduleKey][field] = Boolean(value);
  if (field === "active") company.modules[moduleKey].override = true;
  company.updated_at = new Date().toISOString();
  logPlatformAction(value ? "module aangezet" : "module uitgezet", company.id, `${moduleKey}`);
  saveState();
  render();
}

function renderPlatformModules() {
  const companies = platformCompanies();
  return `<section class="panel"><div class="article-head"><div><h2>Modules per bedrijf</h2><p>Schakel SaaS-modules per bedrijf aan of uit.</p></div></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Bedrijf</th><th>Pakket</th>${PLATFORM_MODULES.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}</tr></thead>
      <tbody>${companies.map((company) => `<tr><td>${escapeHtml(company.name)}</td><td>${escapeHtml(company.subscription_package)}</td>${PLATFORM_MODULES.map(([key]) => {
        const config = companyModuleConfig(company, key);
        return `<td><label class="check-line"><input type="checkbox" ${config.active ? "checked" : ""} onchange="setCompanyModule('${company.id}', '${key}', 'active', this.checked)" /> ${config.included ? "pakket" : "extra"}</label></td>`;
      }).join("")}</tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

function renderPlatformSubscriptions() {
  return `<section class="panel"><h2>Abonnementen</h2><div class="table-wrap"><table>
    <thead><tr><th>Bedrijf</th><th>Pakket</th><th>Prijsplan</th><th>Proefperiode tot</th><th>Betaalstatus</th><th>Gebruikerslimiet</th><th>Opslaglimiet MB</th></tr></thead>
    <tbody>${platformCompanies().map((company) => `<tr><td>${escapeHtml(company.name)}</td><td><select onchange="updateCompany('${company.id}', 'subscription_package', this.value)">${Object.keys(SUBSCRIPTION_PACKAGES).map((pkg) => `<option value="${pkg}" ${company.subscription_package === pkg ? "selected" : ""}>${pkg}</option>`).join("")}</select></td><td><input value="${escapeAttr(company.price_plan || company.subscription_package)}" onchange="updateCompany('${company.id}', 'price_plan', this.value)" /></td><td><input type="date" value="${escapeAttr(company.trial_until || "")}" onchange="updateCompany('${company.id}', 'trial_until', this.value)" /></td><td><select onchange="updateCompany('${company.id}', 'billing_status', this.value)">${["trial", "active", "overdue", "paused", "cancelled"].map((status) => `<option value="${status}" ${company.billing_status === status ? "selected" : ""}>${status}</option>`).join("")}</select></td><td><input type="number" min="1" value="${company.user_limit}" onchange="updateCompany('${company.id}', 'user_limit', this.value)" /></td><td><input type="number" min="100" value="${company.storage_limit_mb}" onchange="updateCompany('${company.id}', 'storage_limit_mb', this.value)" /></td></tr>`).join("")}</tbody>
  </table></div></section>`;
}

function companyStorageUsageMb(companyId) {
  const photoCount = (state.projects || []).filter((project) => strictRecordCompanyId(project) === companyId).reduce((sum, project) => sum + (project.workOrder?.photos || project.photos || []).length, 0);
  return photoCount * 3;
}

function renderPlatformBilling() {
  return `<section class="panel"><h2>Facturatie</h2><div class="table-wrap"><table><thead><tr><th>Bedrijf</th><th>Pakket</th><th>Betaalstatus</th><th>Prijsplan</th><th>Werkbonnen</th><th>Gebruikers</th></tr></thead><tbody>${platformCompanies().map((company) => `<tr><td>${escapeHtml(company.name)}</td><td>${escapeHtml(company.subscription_package)}</td><td>${escapeHtml(company.billing_status)}</td><td>${escapeHtml(company.price_plan || "-")}</td><td>${companyProjects(company.id).length}</td><td>${companyUsers(company.id).length}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderPlatformStorage() {
  return `<section class="panel"><h2>Opslaggebruik</h2><div class="table-wrap"><table><thead><tr><th>Bedrijf</th><th>Gebruik MB</th><th>Limiet MB</th><th>Foto's</th><th>Actie</th></tr></thead><tbody>${platformCompanies().map((company) => `<tr><td>${escapeHtml(company.name)}</td><td>${companyStorageUsageMb(company.id)}</td><td><input type="number" min="100" value="${company.storage_limit_mb}" onchange="updateCompany('${company.id}', 'storage_limit_mb', this.value)" /></td><td>${Math.round(companyStorageUsageMb(company.id) / 3)}</td><td><button class="btn secondary" type="button" onclick="setPlatformTab('Modules')">Modules beheren</button></td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderPlatformPermissions() {
  return `<section class="panel"><h2>Rechten</h2><p class="muted">Platform Admin is hoogste rol. Company Admin beheert alleen eigen bedrijf; monteurs zien alleen eigen werk.</p>${renderPlatformUsers()}</section>`;
}

function startSupportMode(companyId) {
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  if (!byId(state.companies || [], companyId)) return;
  state.session.supportCompanyId = companyId;
  logPlatformAction("supportmodus gestart", companyId, "Bekijk als bedrijf");
  saveState();
  location.hash = "#/admin/dashboard";
  render();
}

function stopSupportMode() {
  const companyId = currentSupportCompanyId();
  if (state.session) delete state.session.supportCompanyId;
  logPlatformAction("supportmodus gestopt", companyId, "Supportmodus verlaten");
  saveState();
  location.hash = "#/platform/support";
  render();
}

function renderPlatformSupport() {
  return `<section class="panel"><h2>Support</h2><p class="muted">Bekijk een bedrijfsportal voor ondersteuning. Alle acties worden gelogd.</p><div class="table-wrap"><table><thead><tr><th>Bedrijf</th><th>Status</th><th>Admins</th><th>Actie</th></tr></thead><tbody>${platformCompanies().map((company) => `<tr><td>${escapeHtml(company.name)}</td><td>${company.blocked ? "geblokkeerd" : company.active !== false ? "actief" : "inactief"}</td><td>${companyUsers(company.id).filter((user) => userRole(user) === ROLES.COMPANY_ADMIN).map((user) => escapeHtml(user.name)).join(", ") || "-"}</td><td><button class="btn success" type="button" onclick="startSupportMode('${company.id}')">Bekijk als bedrijf</button></td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderPlatformAuditLogs() {
  const logs = platformAuditLogs().slice().reverse();
  return `<section class="panel"><h2>Audit Logs</h2><div class="table-wrap"><table><thead><tr><th>Datum/tijd</th><th>Gebruiker</th><th>Rol</th><th>Actie</th><th>Bedrijf</th><th>Details</th></tr></thead><tbody>${logs.map((log) => `<tr><td>${escapeHtml(String(log.created_at || "").replace("T", " ").slice(0, 16))}</td><td>${escapeHtml(log.user_name || "-")}</td><td>${escapeHtml(log.role || "-")}</td><td>${escapeHtml(log.action || "-")}</td><td>${escapeHtml(log.company_name || "-")}</td><td>${escapeHtml(log.details || "-")}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderPlatformSystemSettings() {
  state.platformSettings = state.platformSettings || { platform_name: "WerkbonSysteem.nl", maintenance_mode: false, default_user_limit: 10, default_storage_limit_mb: 1024 };
  const settings = state.platformSettings;
  return `<section class="panel"><h2>Systeeminstellingen</h2><form class="form-grid" onsubmit="savePlatformSettings(event)"><label>Platformnaam <input name="platform_name" value="${escapeAttr(settings.platform_name)}" /></label><label>Standaard gebruikerslimiet <input type="number" name="default_user_limit" min="1" value="${Number(settings.default_user_limit || 10)}" /></label><label>Standaard opslaglimiet MB <input type="number" name="default_storage_limit_mb" min="100" value="${Number(settings.default_storage_limit_mb || 1024)}" /></label><label>Onderhoudsmodus <select name="maintenance_mode"><option value="false">Uit</option><option value="true" ${settings.maintenance_mode ? "selected" : ""}>Aan</option></select></label><button class="btn success" type="submit">Instellingen opslaan</button></form></section>`;
}

function savePlatformSettings(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin()) return;
  const form = new FormData(event.target);
  state.platformSettings = {
    platform_name: String(form.get("platform_name") || "WerkbonSysteem.nl"),
    default_user_limit: Number(form.get("default_user_limit") || 10),
    default_storage_limit_mb: Number(form.get("default_storage_limit_mb") || 1024),
    maintenance_mode: form.get("maintenance_mode") === "true",
  };
  logPlatformAction("platforminstellingen aangepast", "", "Systeeminstellingen");
  saveState();
  render();
}

function renderRoute(route) {
  const [name, id, sub] = route.split("/");
  if (name === "login") return renderLogin();
  if (!currentUser()) return renderLogin();
  if (name === "platform") return canAccessPlatformManagement() ? renderPlatform(id) : renderPlatformAccessDenied();
  if (name === "agenda" || name === "calendar") {
    location.hash = isMechanic() ? "#/start/planning" : "#/admin/planning";
    return "";
  }
  if ((name === "admin" || name === "office" || name === "manage") && (id === "agenda" || id === "calendar")) {
    location.hash = "#/admin/planning";
    return "";
  }
  if (isSupportMode() && (name === "admin" || name === "office" || name === "manage")) return renderOffice(id);
  if (isPlatformSuperAdmin()) return renderPlatform();
  if (name === "admin" || name === "office" || name === "manage") {
    if (!isCompanyAdmin()) return renderNoOfficeAccess();
    const moduleKey = moduleForOfficeSection(id);
    if (moduleKey && !isCompanyModuleActive(moduleKey)) return moduleInactiveMessage();
    return renderOffice(id);
  }
  const mechanicRoutes = ["start", "new", "active", "completed", "project", "summary", "notifications", "call-customer", "settlement", "payment"];
  if (!mechanicRoutes.includes(name)) return defaultRouteForUser() === "#/admin" ? renderOffice() : renderHome();
  if (!isMechanic()) return renderNoOfficeAccess();
  if (name === "notifications") return renderNotificationsCenter();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "settlement") return renderSettlementPrompt(id);
  if (name === "payment") return renderMechanicPayment(id);
  if (name === "start" && id === "planning") return isCompanyModuleActive("planning") ? renderMechanicAgendaPage(sub || "week") : moduleInactiveMessage();
  if (name === "start") return renderHome();
  if (name === "new") return isCompanyModuleActive("workorders") ? renderNewProject() : moduleInactiveMessage();
  if (name === "active") return isCompanyModuleActive("workorders") ? renderProjectList("Open") : moduleInactiveMessage();
  if (name === "completed") return isCompanyModuleActive("workorders") ? renderProjectList("Afgerond") : moduleInactiveMessage();
  if (name === "project") return isCompanyModuleActive("workorders") ? renderTechnician(id) : moduleInactiveMessage();
  if (name === "summary") return isCompanyModuleActive("workorders") ? renderSummary(id) : moduleInactiveMessage();
  return renderHome();
}

function toggleUserActive(userId) {
  const user = byId(state.users || [], userId);
  if (!canManageUser(user)) return;
  user.active = !user.active;
  user.updated_at = new Date().toISOString();
  if (isPlatformSuperAdmin()) logPlatformAction(user.active ? "gebruiker geactiveerd" : "gebruiker gedeactiveerd", strictRecordCompanyId(user), user.email);
  saveState();
  render();
}

function confirmDeleteUser() {
  const user = byId(state.users || [], ui.pendingDeleteUserId);
  if (!canDeleteUser(user)) {
    ui.pendingDeleteUserId = null;
    render();
    return;
  }
  const companyId = strictRecordCompanyId(user);
  const details = `${user.name || user.email} (${userRole(user)})`;
  if (userHasReferences(user.id)) {
    user.deleted = true;
    user.active = false;
    user.deletedAt = new Date().toISOString();
    user.updated_at = user.deletedAt;
  } else {
    state.users = (state.users || []).filter((item) => item.id !== user.id);
  }
  if (isPlatformSuperAdmin()) logPlatformAction("gebruiker verwijderd", companyId, details);
  ui.pendingDeleteUserId = null;
  saveState();
  render();
}

const MODULE_CATALOG = [
  ["customers", "Klantenbeheer", "Basis", "Klanten beheren en koppelen aan planning/werkbonnen.", []],
  ["planning", "Planning", "Basis", "Dag-, week-, maand- en monteurplanning met klantafspraken en werkbonplanning.", []],
  ["workorders", "Werkbonnen", "Basis", "Werkbonnen, projecten en monteurswerk beheren.", []],
  ["quotes", "Offertes", "Professional", "Offertes aanmaken, bewerken en genereren vanuit werkbonnen.", ["workorders", "customers"]],
  ["invoices", "Facturen", "Professional", "Facturen maken vanuit werkbonnen/offertes en betaalstatus beheren.", ["workorders", "customers"]],
  ["email", "E-mailintegratie", "Professional", "Inbox, concepten, templates en mailkoppelingen.", ["customers"]],
  ["photo_storage", "Foto-opslag", "Professional", "Foto-upload, fotobeheer en opslaggebruik.", ["workorders"]],
  ["reports", "Rapportages", "Professional", "Rapportages, exports en operationele overzichten.", ["workorders"]],
  ["inventory", "Voorraadbeheer", "Premium", "Artikelen, voorraadstanden en voorraadwaarde beheren.", []],
  ["warehouse", "Magazijn", "Premium", "Centraal magazijn beheren. Garage Box heet voortaan Magazijn.", ["inventory"]],
  ["kits", "Koffers", "Premium", "Koffers zoals M001 en M004 beheren en aanvullen.", ["inventory", "warehouse"]],
  ["ordering", "Bestellen", "Premium", "Bestellijsten, bestelstatussen en ontvangen artikelen beheren.", ["inventory"]],
  ["wasco", "Wasco koppeling", "Premium", "Wasco artikel-ID's en conceptbestellingen voorbereiden.", ["ordering", "inventory"]],
  ["maintenance_contracts", "Onderhoudscontracten", "Premium", "Onderhoudscontracten beheren en werkbonnen genereren.", ["workorders", "planning"]],
  ["profit_dashboard", "Winstdashboard", "Premium", "Omzet, kosten, brutowinst en marges analyseren.", ["quotes", "invoices"]],
  ["ai_assistant", "AI Assistent", "Premium", "Voorbereid voor analyse, samenvattingen en tekstgeneratie.", []],
  ["whatsapp", "WhatsApp Integratie", "Premium", "Templates en click-to-chat voor klantcommunicatie.", ["customers"]],
  ["api_access", "API toegang", "Premium", "API key en webhook voorbereidingen.", []],
  ["accounting", "Boekhoudkoppelingen", "Premium", "CSV/factuurexport en toekomstige boekhoudintegraties.", ["invoices"]],
];

const MODULE_ALIASES = {
  agenda: "planning",
  calendar: "planning",
  maintenance: "maintenance_contracts",
  profit: "profit_dashboard",
  ai: "ai_assistant",
  api: "api_access",
};

function moduleCatalog() {
  return MODULE_CATALOG.map(([key, label, pkg, description, dependencies]) => ({ key, label, pkg, description, dependencies }));
}

function normalizeModuleKey(key) {
  return MODULE_ALIASES[key] || key;
}

function packageDefaultEnabled(packageName, moduleKey) {
  const key = normalizeModuleKey(moduleKey);
  const pkg = String(packageName || "basis").toLowerCase();
  if (["customers", "planning", "workorders"].includes(key)) return true;
  if (pkg === "professional") return ["quotes", "invoices", "email", "photo_storage", "reports"].includes(key);
  if (pkg === "premium") return true;
  return false;
}

function ensureCompanyModulesEnabled(company) {
  if (!company) return {};
  company.modules_enabled = company.modules_enabled || {};
  company.module_meta = company.module_meta || {};
  company.subscription_package = company.subscription_package || "basis";
  if (company.modules) {
    Object.entries(company.modules).forEach(([rawKey, config]) => {
      const key = normalizeModuleKey(rawKey);
      if (typeof company.modules_enabled[key] !== "boolean") company.modules_enabled[key] = Boolean(config?.active);
      company.module_meta[key] = {
        ...(company.module_meta[key] || {}),
        package: company.module_meta[key]?.package || moduleCatalog().find((module) => module.key === key)?.pkg || "Basis",
        last_changed_at: company.module_meta[key]?.last_changed_at || company.updated_at || "",
      };
    });
  }
  moduleCatalog().forEach((module) => {
    if (typeof company.modules_enabled[module.key] !== "boolean") {
      company.modules_enabled[module.key] = packageDefaultEnabled(company.subscription_package, module.key);
    }
    company.module_meta[module.key] = {
      package: module.pkg,
      description: module.description,
      dependencies: module.dependencies,
      last_changed_at: company.module_meta[module.key]?.last_changed_at || company.updated_at || "",
    };
  });
  return company.modules_enabled;
}

function ensureCompanyPlatformConfig(company) {
  if (!company) return company;
  company.subscription_package = company.subscription_package || company.subscription_status || "basis";
  if (!["basis", "professional", "premium"].includes(company.subscription_package)) company.subscription_package = "basis";
  company.billing_status = company.billing_status || company.subscription_status || "trial";
  company.trial_until = company.trial_until || "";
  company.price_plan = company.price_plan || company.subscription_package;
  company.user_limit = Number(company.user_limit ?? 10);
  company.storage_limit_mb = Number(company.storage_limit_mb ?? 1024);
  company.blocked = Boolean(company.blocked);
  ensureCompanyModulesEnabled(company);
  company.modules = company.modules || {};
  moduleCatalog().forEach((module) => {
    company.modules[module.key] = {
      active: company.modules_enabled[module.key] === true,
      included: packageDefaultEnabled(company.subscription_package, module.key),
      override: true,
    };
  });
  return company;
}

function companyModuleConfig(companyOrId, moduleKey) {
  const key = normalizeModuleKey(moduleKey);
  const company = typeof companyOrId === "string" ? byId(state.companies || [], companyOrId) : companyOrId;
  ensureCompanyPlatformConfig(company);
  return {
    active: company?.modules_enabled?.[key] === true,
    included: packageDefaultEnabled(company?.subscription_package, key),
    override: true,
  };
}

function isCompanyModuleActive(moduleKey, companyId = currentCompanyId()) {
  const key = normalizeModuleKey(moduleKey);
  if (!key) return true;
  if (isPlatformSuperAdmin() && !isSupportMode()) return true;
  const company = byId(state.companies || [], companyId);
  if (!company || company.active === false || company.blocked) return false;
  ensureCompanyModulesEnabled(company);
  return company.modules_enabled[key] === true;
}

function moduleDependenciesMissing(companyId, moduleKey) {
  const module = moduleCatalog().find((item) => item.key === normalizeModuleKey(moduleKey));
  if (!module) return [];
  const company = byId(state.companies || [], companyId);
  ensureCompanyModulesEnabled(company);
  return module.dependencies.filter((dependency) => company?.modules_enabled?.[dependency] !== true);
}

function setCompanyModule(companyId, moduleKey, field, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  const key = normalizeModuleKey(moduleKey);
  ensureCompanyModulesEnabled(company);
  company.modules_enabled[key] = Boolean(value);
  company.module_meta[key] = {
    ...(company.module_meta[key] || {}),
    last_changed_at: new Date().toISOString(),
    last_changed_by: currentUser()?.id || "",
  };
  ensureCompanyPlatformConfig(company);
  company.updated_at = new Date().toISOString();
  logPlatformAction(value ? "module aangezet" : "module uitgezet", company.id, key);
  saveState();
  render();
}

function renderPlatformModules() {
  const companies = platformCompanies();
  return `<section class="panel"><div class="article-head"><div><h2>Modules</h2><p>Vink per bedrijf aan welke modules actief en bruikbaar zijn.</p></div></div>
    ${companies.map((company) => {
      ensureCompanyModulesEnabled(company);
      const basis = moduleCatalog().filter((module) => module.pkg === "Basis");
      const uitbreidingen = moduleCatalog().filter((module) => module.pkg !== "Basis");
      const renderRows = (rows) => rows.map((module) => {
        const active = company.modules_enabled[module.key] === true;
        const missing = active ? moduleDependenciesMissing(company.id, module.key) : [];
        return `<tr>
          <td>${escapeHtml(module.label)}</td>
          <td><input type="checkbox" ${active ? "checked" : ""} onchange="setCompanyModule('${company.id}', '${module.key}', 'active', this.checked)" /></td>
          <td>${escapeHtml(module.pkg)}</td>
          <td>${escapeHtml(module.description)}</td>
          <td>${module.dependencies.length ? module.dependencies.map((dependency) => escapeHtml(moduleCatalog().find((item) => item.key === dependency)?.label || dependency)).join(", ") : "-"}</td>
          <td>${missing.length ? `<span class="badge danger">Afhankelijkheid mist: ${escapeHtml(missing.join(", "))}</span>` : "Later"}</td>
          <td>${escapeHtml(String(company.module_meta?.[module.key]?.last_changed_at || company.updated_at || "-").replace("T", " ").slice(0, 16))}</td>
        </tr>`;
      }).join("");
      return `<section class="panel subtle-panel" style="margin-top:14px"><h3>${escapeHtml(company.name)}</h3>
        <h4>Basis modules</h4><div class="table-wrap"><table><thead><tr><th>Module</th><th>Actief</th><th>Pakket</th><th>Omschrijving</th><th>Afhankelijkheden</th><th>Prijsimpact later</th><th>Laatst gewijzigd</th></tr></thead><tbody>${renderRows(basis)}</tbody></table></div>
        <h4>Uitbreidingsmodules</h4><div class="table-wrap"><table><thead><tr><th>Module</th><th>Actief</th><th>Pakket</th><th>Omschrijving</th><th>Afhankelijkheden</th><th>Prijsimpact later</th><th>Laatst gewijzigd</th></tr></thead><tbody>${renderRows(uitbreidingen)}</tbody></table></div>
      </section>`;
    }).join("")}
  </section>`;
}

function officeNavItems() {
  const items = [
    ["Dashboard", "dashboard", "D", ""],
    ["Projecten", "projects", "P", "workorders"],
    ["Werkbonnen", "workorders", "W", "workorders"],
    ["Planning", "planning", "P", "planning"],
    ["Klanten", "customers", "K", "customers"],
    ["Offertes", "quotes", "O", "quotes"],
    ["Facturen", "invoices", "F", "invoices"],
    ["E-mail", "email", "E", "email"],
    ["Rapportages", "reports", "R", "reports"],
    ["Voorraad", "inventory", "V", "inventory"],
    ["Magazijn", "warehouse", "M", "warehouse"],
    ["Koffers", "kits", "K", "kits"],
    ["Bestellen", "orders", "B", "ordering"],
    ["Wasco", "wasco", "W", "wasco"],
    ["Onderhoudscontracten", "maintenance-contracts", "O", "maintenance_contracts"],
    ["Winst", "profit", "W", "profit_dashboard"],
    ["AI Assistent", "ai-assistant", "A", "ai_assistant"],
    ["WhatsApp", "whatsapp", "W", "whatsapp"],
    ["API", "api", "A", "api_access"],
    ["Boekhouding", "accounting", "B", "accounting"],
    ["Gebruikers", "users", "G", ""],
    ["Instellingen", "settings", "I", ""],
  ];
  return items.filter(([, , , moduleKey]) => !moduleKey || isCompanyModuleActive(moduleKey));
}

function officeSectionToTab(section = "") {
  const map = {
    dashboard: "Dashboard",
    projects: "Projecten",
    workorders: "Werkbonnen",
    planning: "Planning",
    agenda: "Planning",
    calendar: "Planning",
    customers: "Klanten",
    quotes: "Offertes",
    invoices: "Facturen",
    payments: "Facturen",
    email: "E-mail",
    reports: "Rapportages",
    inventory: "Voorraad",
    warehouse: "Magazijn",
    "garage-box": "Magazijn",
    kits: "Koffers",
    orders: "Bestellen",
    wasco: "Wasco",
    "maintenance-contracts": "Onderhoudscontracten",
    contracts: "Onderhoudscontracten",
    profit: "Winst",
    "ai-assistant": "AI Assistent",
    whatsapp: "WhatsApp",
    api: "API",
    accounting: "Boekhouding",
    mechanics: "Gebruikers",
    users: "Gebruikers",
    settings: "Instellingen",
  };
  return map[section] || "Dashboard";
}

function moduleForOfficeSection(section = "") {
  const map = {
    projects: "workorders",
    workorders: "workorders",
    planning: "planning",
    agenda: "planning",
    calendar: "planning",
    customers: "customers",
    quotes: "quotes",
    invoices: "invoices",
    payments: "invoices",
    email: "email",
    reports: "reports",
    inventory: "inventory",
    warehouse: "warehouse",
    "garage-box": "warehouse",
    kits: "kits",
    orders: "ordering",
    wasco: "wasco",
    "maintenance-contracts": "maintenance_contracts",
    contracts: "maintenance_contracts",
    profit: "profit_dashboard",
    "ai-assistant": "ai_assistant",
    whatsapp: "whatsapp",
    api: "api_access",
    accounting: "accounting",
  };
  return map[section] || "";
}

function renderModulePlaceholder(title, body, future = []) {
  return `<section class="panel"><h2>${escapeHtml(title)}</h2><p class="muted">${escapeHtml(body)}</p>${future.length ? `<div class="table-wrap"><table><thead><tr><th>Voorbereid voor</th></tr></thead><tbody>${future.map((item) => `<tr><td>${escapeHtml(item)}</td></tr>`).join("")}</tbody></table></div>` : ""}</section>`;
}

function renderWarehouseModule() {
  return `<section class="office-page-head"><div><h2>Magazijn</h2><p>Centraal magazijn, voorraadwaarde en aanvullen van koffers.</p></div></section>${renderGarageBox()}`;
}

function renderKitsModule() {
  return `<section class="office-page-head"><div><h2>Koffers</h2><p>Beheer M001, M004 en standaard kofferinhoud.</p></div></section>${renderManage()}`;
}

function renderOrderingModule() {
  return `<section class="office-page-head"><div><h2>Bestellen</h2><p>Open bestelregels, concept bestellijsten en bestelstatussen.</p></div></section>${renderOrderAndKitStatus()}`;
}

function renderWascoModule() {
  const missing = moduleDependenciesMissing(currentCompanyId(), "wasco");
  if (missing.length) return `<section class="panel empty"><h2>Wasco koppeling niet bruikbaar</h2><p>Afhankelijkheid ontbreekt: ${escapeHtml(missing.join(", "))}. Zet Bestellen en Voorraadbeheer aan.</p></section>`;
  return renderModulePlaceholder("Wasco", "Wasco conceptbestellingen zijn voorbereid. De app plaatst nooit automatisch definitieve bestellingen.", ["Wasco artikel-ID koppelen", "Conceptbestelling voorbereiden", "Wasco order-ID opslaan", "Orderstatus later via API volgen"]);
}

function renderAiAssistantModule() {
  return renderModulePlaceholder("AI Assistent", "AI Assistent is voorbereid voor toekomstige functies.", ["Storing analyse", "Werkbon samenvatten", "Offertetekst genereren", "Klant e-mail genereren", "Foto/typeplaat herkenning", "Materiaaladvies"]);
}

function renderWhatsAppModule() {
  return renderModulePlaceholder("WhatsApp", "WhatsApp module voor templates, click-to-chat en klantberichten.", ["WhatsApp Business API", "Afspraakbevestiging", "Onderhoudsherinnering", "Betalingslink sturen"]);
}

function renderApiModule() {
  return renderModulePlaceholder("API toegang", "API instellingen zijn voorbereid.", ["API key placeholder", "Webhook URL placeholder", "API documentatie placeholder"]);
}

function renderAccountingModule() {
  return renderModulePlaceholder("Boekhouding", "Boekhoudkoppelingen zijn voorbereid met CSV/factuurexport.", ["Exact", "Moneybird", "AFAS", "SnelStart", "Twinfield"]);
}

function renderOfficeReports() {
  const projects = visibleProjects();
  const planning = companyScoped(state.planningEvents || []);
  const orders = companyScoped(state.orderLines || []);
  const customers = companyScoped(state.customers || []);
  const month = new Date().toISOString().slice(0, 7);
  return `<section class="office-page-head"><div><h2>Rapportages</h2><p>Operationele rapportages en exports.</p></div><button class="btn secondary" type="button" onclick="exportCsv()">Export CSV</button></section>
    <section class="stats office-kpis">
      <div class="stat-card"><span>Werkbonnen deze maand</span><strong>${projects.filter((project) => String(project.date || project.created_at || project.createdAt || "").slice(0, 7) === month).length}</strong></div>
      <div class="stat-card"><span>Open werkbonnen</span><strong>${projects.filter((project) => !isProjectCompleted(project)).length}</strong></div>
      <div class="stat-card"><span>Afgeronde werkbonnen</span><strong>${projects.filter(isProjectCompleted).length}</strong></div>
      <div class="stat-card"><span>Afspraken gepland</span><strong>${planning.length}</strong></div>
      <div class="stat-card"><span>Open bestellingen</span><strong>${orders.filter((line) => !["Ontvangen", "Aangevuld"].includes(line.status)).length}</strong></div>
      <div class="stat-card"><span>Klanten</span><strong>${customers.length}</strong></div>
    </section>
    <section class="panel"><h2>Rapportageoverzicht</h2><div class="table-wrap"><table><thead><tr><th>Rapport</th><th>Status</th></tr></thead><tbody>${["Werkbonnen per maand", "Uren per monteur", "Materialen gebruikt", "Klanten met meeste werk", "Onderhoud komende periode", "Bestellingen open"].map((label) => `<tr><td>${label}</td><td>Beschikbaar</td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderDashboardTab() {
  const tabModules = {
    Projecten: "workorders",
    Werkbonnen: "workorders",
    Planning: "planning",
    Klanten: "customers",
    Offertes: "quotes",
    Facturen: "invoices",
    "E-mail": "email",
    Rapportages: "reports",
    Voorraad: "inventory",
    Magazijn: "warehouse",
    Koffers: "kits",
    Bestellen: "ordering",
    Wasco: "wasco",
    Onderhoudscontracten: "maintenance_contracts",
    Winst: "profit_dashboard",
    "AI Assistent": "ai_assistant",
    WhatsApp: "whatsapp",
    API: "api_access",
    Boekhouding: "accounting",
  };
  const requiredModule = tabModules[ui.dashboardTab];
  if (requiredModule && !isCompanyModuleActive(requiredModule)) return moduleInactiveMessage();
  if (ui.dashboardTab === "Dashboard") return renderOfficeDashboard();
  if (ui.dashboardTab === "Projecten" || ui.dashboardTab === "Werkbonnen") return renderOfficeProjects();
  if (ui.dashboardTab === "Planning") return renderPlanning();
  if (ui.dashboardTab === "Klanten") return renderCustomers();
  if (ui.dashboardTab === "Offertes") return renderQuotes();
  if (ui.dashboardTab === "Facturen") return renderPaymentsAdmin();
  if (ui.dashboardTab === "E-mail") return renderEmailPortal();
  if (ui.dashboardTab === "Rapportages") return renderOfficeReports();
  if (ui.dashboardTab === "Voorraad") return renderPrices();
  if (ui.dashboardTab === "Magazijn") return renderWarehouseModule();
  if (ui.dashboardTab === "Koffers") return renderKitsModule();
  if (ui.dashboardTab === "Bestellen") return renderOrderingModule();
  if (ui.dashboardTab === "Wasco") return renderWascoModule();
  if (ui.dashboardTab === "Onderhoudscontracten") return renderMaintenanceContracts();
  if (ui.dashboardTab === "Winst") return renderProfitDashboard();
  if (ui.dashboardTab === "AI Assistent") return renderAiAssistantModule();
  if (ui.dashboardTab === "WhatsApp") return renderWhatsAppModule();
  if (ui.dashboardTab === "API") return renderApiModule();
  if (ui.dashboardTab === "Boekhouding") return renderAccountingModule();
  if (ui.dashboardTab === "Gebruikers") return renderUsers();
  if (ui.dashboardTab === "Instellingen") return `${renderCompanySettings()}${renderChecklistSettings()}`;
  return renderOfficeDashboard();
}

function renderWorkOrderForm(project) {
  const workOrder = ensureWorkOrder(project);
  const photos = storedWorkOrderPhotos(project);
  const gasRequired = workOrder.gasApplianceWork === "ja";
  const photoStorageActive = isCompanyModuleActive("photo_storage", strictRecordCompanyId(project));
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
        <label>Pauze minuten <input type="number" min="0" value="${escapeAttr(workOrder.hours.breakMinutes)}" onchange="setWorkOrderField('${project.id}', 'hours.breakMinutes', this.value)" /></label>
        <label>Oplossing uitgevoerd <input value="${escapeAttr(workOrder.solution)}" onchange="setWorkOrderField('${project.id}', 'solution', this.value)" /></label>
        <label>Opmerkingen <input value="${escapeAttr(workOrder.notes)}" onchange="setWorkOrderField('${project.id}', 'notes', this.value)" /></label>
      </div>
      ${gasRequired ? renderCoKeurFields(project, workOrder) : ""}
      ${renderChecklistAnswers(project, workOrder)}
      ${photoStorageActive ? `<section style="margin-top:14px">
        <h3>Foto's</h3>
        <p>${Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1)) === 0 ? "Foto's optioneel" : `Minimaal ${state.checklistSettings.minRequiredPhotos} foto verplicht`}. Huidig: ${photos.length}</p>
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
          <label>Foto uploaden <input type="file" accept="image/*" capture="environment" multiple onchange="addWorkOrderPhotos('${project.id}', this, document.getElementById('photo-category-${project.id}')?.value)" /></label>
        </div>
        ${renderWorkOrderPhotoGrid(project)}
      </section>` : ""}
      <section style="margin-top:14px">
        <h3>Handtekeningen</h3>
        <div class="signature-grid">
          ${renderSignatureBox(project.id, "customerSignature", "Handtekening klant", workOrder.customerSignature)}
          ${renderSignatureBox(project.id, "mechanicSignature", `Handtekening monteur${state.checklistSettings.mechanicSignatureRequired ? " (verplicht)" : ""}`, workOrder.mechanicSignature)}
        </div>
      </section>
    </section>`;
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
    if (!completeRows.length) errors.push("Voeg minimaal een materiaal toe of kies Nee.");
    if (incompleteRows.length) errors.push("Voltooi of verwijder open materiaalregels.");
  }
  if (state.checklistSettings.requiredHours && (!workOrder.hours.startTime || !workOrder.hours.endTime || workOrder.hours.totalHours <= 0)) errors.push("Urenregistratie is verplicht.");
  if (!workOrder.customerSignature) errors.push("Handtekening opdrachtgever is verplicht.");
  if (isCompanyModuleActive("photo_storage", strictRecordCompanyId(project))) {
    const requiredPhotoCount = Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1));
    const storedPhotos = storedWorkOrderPhotos(project);
    if (requiredPhotoCount > 0 && storedPhotos.length < requiredPhotoCount) errors.push("Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.");
  }
  if (state.checklistSettings.mechanicSignatureRequired && !workOrder.mechanicSignature) errors.push("Handtekening monteur is verplicht.");
  state.checklistSettings.checklistItems.filter((item) => item.active && item.required).forEach((item) => {
    if (!workOrder.checklistAnswers[item.id]) errors.push(`Checklistpunt verplicht: ${item.label}`);
  });
  if (workOrder.gasApplianceWork === "ja") {
    if (!numericValue(workOrder.measurements.CO_before_ppm) || !numericValue(workOrder.measurements.CO_after_ppm)) errors.push("CO meting opstellingsruimte voor en na werkzaamheden is verplicht.");
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

const USER_PERMISSION_GROUPS = [
  ["Planning rechten", [
    ["can_create_own_appointments", "Mag eigen afspraken maken"],
    ["can_edit_own_planning", "Mag eigen planning aanpassen"],
  ]],
  ["Klantrechten", [
    ["can_create_customers", "Klanten aanmaken"],
    ["can_edit_customers", "Klanten bewerken"],
  ]],
  ["Werkbonrechten", [
    ["can_close_workorders", "Werkbonnen afsluiten"],
    ["can_delete_photos", "Foto's verwijderen"],
  ]],
  ["Offerte & betaling", [
    ["can_create_quotes", "Offertes maken"],
    ["can_register_payments", "Betalingen registreren"],
  ]],
  ["Voorraad", [
    ["can_manage_inventory", "Voorraad beheren"],
  ]],
  ["E-mail", [
    ["can_reply_emails", "E-mails beantwoorden"],
    ["can_archive_emails", "E-mails verwijderen/archiveren"],
    ["can_connect_mailbox", "Mailbox koppelen"],
    ["can_manage_templates", "Templates beheren"],
  ]],
];

const USER_PERMISSION_ALIASES = {
  can_create_quotes: "can_make_quotes",
  can_make_quotes: "can_create_quotes",
  can_reply_emails: "can_reply_email",
  can_reply_email: "can_reply_emails",
  can_archive_emails: "can_archive_email",
  can_archive_email: "can_archive_emails",
  can_manage_templates: "can_manage_email_templates",
  can_manage_email_templates: "can_manage_templates",
};

function allUserPermissionFields() {
  return USER_PERMISSION_GROUPS.flatMap(([, fields]) => fields.map(([field]) => field));
}

function permissionValue(user, field) {
  const alias = USER_PERMISSION_ALIASES[field];
  if (field === "can_close_workorders") return user?.[field] !== false;
  return Boolean(user?.[field] ?? (alias ? user?.[alias] : false));
}

function setUserPermissionValue(user, field, value) {
  const bool = Boolean(value);
  user[field] = bool;
  const alias = USER_PERMISSION_ALIASES[field];
  if (alias) user[alias] = bool;
  if (field === "can_create_customers") user.can_create_customer_from_call = bool;
}

function syncUserPermissionAliases(user) {
  allUserPermissionFields().forEach((field) => setUserPermissionValue(user, field, permissionValue(user, field)));
  return user;
}

function renderYesNoSelect(user, field, onChange) {
  const value = permissionValue(user, field);
  return `<select onchange="${onChange}"><option value="false" ${!value ? "selected" : ""}>Nee</option><option value="true" ${value ? "selected" : ""}>Ja</option></select>`;
}

function renderPermissionGroups(user, onChangeFactory) {
  return `<div class="user-permission-groups">${USER_PERMISSION_GROUPS.map(([title, fields]) => `<section class="user-permission-section">
    <h4>${escapeHtml(title)}</h4>
    <div class="user-permission-grid">${fields.map(([field, label]) => `<label class="permission-row"><span>${escapeHtml(label)}</span>${renderYesNoSelect(user, field, onChangeFactory(field))}</label>`).join("")}</div>
  </section>`).join("")}</div>`;
}

function renderNewUserPermissionInputs() {
  const defaults = { can_close_workorders: true };
  return `<div class="user-permission-groups full">${USER_PERMISSION_GROUPS.map(([title, fields]) => `<section class="user-permission-section">
    <h4>${escapeHtml(title)}</h4>
    <div class="user-permission-grid">${fields.map(([field, label]) => `<label class="permission-row"><span>${escapeHtml(label)}</span><select name="${field}"><option value="false" ${!defaults[field] ? "selected" : ""}>Nee</option><option value="true" ${defaults[field] ? "selected" : ""}>Ja</option></select></label>`).join("")}</div>
  </section>`).join("")}</div>`;
}

function roleOptionsForUserManagement() {
  return isPlatformSuperAdmin()
    ? [[ROLES.MECHANIC, "mechanic"], [ROLES.COMPANY_ADMIN, "company_admin"]]
    : [[ROLES.MECHANIC, "mechanic"], [ROLES.COMPANY_ADMIN, "company_admin"]];
}

function renderUserCard(user) {
  syncUserPermissionAliases(user);
  const role = userRole(user);
  const companyId = strictRecordCompanyId(user);
  const company = byId(state.companies || [], companyId);
  const roleOptions = roleOptionsForUserManagement();
  const companyOptions = platformCompanies().filter((company) => company.active !== false);
  return `<article class="user-card">
    <div class="user-card-head">
      <label class="user-active"><input type="checkbox" ${user.active !== false ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /> Actief</label>
      <div class="user-title"><h3>${escapeHtml(user.name || "-")}</h3><p>${escapeHtml(user.email || "-")}</p></div>
      <span class="badge">${escapeHtml(roleLabel(role))}</span>
      <div class="button-row user-actions">
        <button class="btn secondary" type="button" onclick="saveUserRow()">Opslaan</button>
        <button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active !== false ? "Deactiveren" : "Activeren"}</button>
        <button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button>
      </div>
    </div>
    <section class="user-permission-section">
      <h4>Basisgegevens</h4>
      <div class="user-permission-grid">
        <label>Naam <input value="${escapeAttr(user.name || "")}" onchange="updateUser('${user.id}', 'name', this.value)" /></label>
        <label>E-mail <input type="email" value="${escapeAttr(user.email || "")}" onchange="updateUser('${user.id}', 'email', this.value)" /></label>
        <label>Rol <select onchange="updateUser('${user.id}', 'role', this.value)">${roleOptions.map(([value, label]) => `<option value="${value}" ${role === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>
        ${isPlatformSuperAdmin() ? `<label>Bedrijf <select onchange="updateUser('${user.id}', 'company_id', this.value)">${companyOptions.map((company) => `<option value="${company.id}" ${companyId === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}</select></label>` : `<label>Bedrijf <input value="${escapeAttr(company?.name || companyId || "-")}" readonly /></label>`}
      </div>
    </section>
    ${renderPermissionGroups(user, (field) => `updateUser('${user.id}', '${field}', this.value === 'true')`)}
  </article>`;
}

function renderNewUserForm() {
  const roleOptions = roleOptionsForUserManagement();
  const companyOptions = platformCompanies().filter((company) => company.active !== false);
  return `<section class="panel user-create-panel">
    <h2>Nieuwe gebruiker</h2>
    <form class="user-form" onsubmit="addUser(event)">
      <section class="user-permission-section">
        <h4>Basisgegevens</h4>
        <div class="user-permission-grid">
          <label>Naam <input name="name" required /></label>
          <label>E-mail <input name="email" type="email" required /></label>
          <label>Wachtwoord <input name="password" type="text" required /></label>
          ${isPlatformSuperAdmin() ? `<label>Bedrijf <select name="company_id" required><option value="">Kies een bedrijf</option>${companyOptions.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}</select></label>` : ""}
          <label>Rol <select name="role" required>${roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
        </div>
      </section>
      ${renderNewUserPermissionInputs()}
      <button class="btn success" type="submit">Gebruiker aanmaken</button>
    </form>
  </section>`;
}

function renderUserFilters() {
  if (!isPlatformSuperAdmin()) return "";
  const companies = platformCompanies().filter((company) => company.active !== false);
  return `<section class="panel user-filter-panel">
    <div class="user-permission-grid">
      <label>Bedrijfsfilter <select onchange="setPlatformUserCompanyFilter(this.value)"><option value="ALL">Alle bedrijven</option>${companies.map((company) => `<option value="${company.id}" ${platformUserCompanyFilter() === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}</select></label>
      <label>Zoeken <input value="${escapeAttr(ui.platformUserSearch || "")}" placeholder="Naam, e-mail, bedrijf of rol" oninput="setPlatformUserSearch(this.value)" /></label>
    </div>
  </section>`;
}

function renderUsers() {
  const users = isPlatformSuperAdmin() ? platformManagedUsers() : visibleUsersForUserManagement();
  const pendingDeleteUser = ui.pendingDeleteUserId && canManageUser(byId(state.users || [], ui.pendingDeleteUserId)) ? byId(state.users || [], ui.pendingDeleteUserId) : null;
  return `<section class="users-page">
    ${renderNewUserForm()}
    ${renderUserFilters()}
    <section class="users-list">${users.length ? users.map(renderUserCard).join("") : `<div class="panel empty">Geen gebruikers gevonden.</div>`}</section>
    ${pendingDeleteUser ? `<section class="modal-backdrop"><div class="panel confirm-modal"><h2>Gebruiker verwijderen</h2><p>Weet je zeker dat je deze gebruiker wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.</p><div class="button-row"><button class="btn secondary" type="button" onclick="cancelDeleteUser()">Annuleren</button><button class="btn danger" type="button" onclick="confirmDeleteUser()">Definitief verwijderen</button></div></div></section>` : ""}
  </section>`;
}

function renderPlatformUsers() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  return renderUsers();
}

function addUser(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin() && !isCompanyAdmin()) return renderNoOfficeAccess();
  const form = new FormData(event.target);
  const role = String(form.get("role") || ROLES.MECHANIC);
  if (role === ROLES.PLATFORM_ADMIN) return alert("Company Admin mag geen platform_admin aanmaken.");
  if (role !== ROLES.MECHANIC && role !== ROLES.COMPANY_ADMIN) return alert("Geen toegang tot platformbeheer.");
  const email = String(form.get("email") || "").trim().toLowerCase();
  if (!email) return alert("E-mail is verplicht");
  if ((state.users || []).some((user) => String(user.email || "").toLowerCase() === email)) return alert("E-mail moet uniek zijn.");
  const companyId = isPlatformSuperAdmin() ? String(form.get("company_id") || "") : currentCompanyId();
  if (!companyId) return alert("Kies een bedrijf");
  const now = new Date().toISOString();
  const user = {
    id: uid("user"),
    company_id: companyId,
    companyId: companyId,
    name: String(form.get("name") || "").trim(),
    email,
    password: String(form.get("password") || ""),
    role,
    active: true,
    created_at: now,
    createdAt: now,
  };
  allUserPermissionFields().forEach((field) => setUserPermissionValue(user, field, role === ROLES.MECHANIC ? form.get(field) === "true" : form.get(field) === "true"));
  state.users.push(user);
  if (isPlatformSuperAdmin()) logPlatformAction("gebruiker aangemaakt", companyId, `${user.name} (${role})`);
  saveState();
  event.target.reset();
  render();
}

function updateUser(userId, field, value) {
  const user = byId(state.users || [], userId);
  if (!canManageUser(user)) {
    if (userRole(user) === ROLES.PLATFORM_ADMIN) alert("Geen toegang tot platformbeheer.");
    return;
  }
  if (field === "email") {
    const email = String(value || "").trim().toLowerCase();
    if (!email) return alert("E-mail is verplicht");
    if ((state.users || []).some((item) => item.id !== user.id && String(item.email || "").toLowerCase() === email)) return alert("Dit e-mailadres bestaat al");
    user.email = email;
  } else if (field === "role") {
    if (value === ROLES.PLATFORM_ADMIN) return alert("Company Admin mag geen platform_admin aanmaken.");
    if (value !== ROLES.MECHANIC && value !== ROLES.COMPANY_ADMIN) return alert("Geen toegang tot platformbeheer.");
    user.role = value;
    if (!isPlatformSuperAdmin()) {
      user.company_id = currentCompanyId();
      user.companyId = currentCompanyId();
    }
  } else if (field === "company_id") {
    if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
    if (!value || !byId(state.companies || [], value)) return alert("Kies een bedrijf");
    user.company_id = value;
    user.companyId = value;
  } else if (allUserPermissionFields().includes(field) || USER_PERMISSION_ALIASES[field]) {
    setUserPermissionValue(user, field, Boolean(value));
  } else {
    user[field] = field === "active" ? Boolean(value) : value;
  }
  user.updated_at = new Date().toISOString();
  if (isPlatformSuperAdmin()) logPlatformAction("gebruiker gewijzigd", strictRecordCompanyId(user), `${user.email}: ${field}`);
  saveState();
  render();
}

function renderOffice(section = "") {
  if (section === "to-order") ui.dashboardTab = "Bestellen";
  else ui.dashboardTab = officeSectionToTab(section);
  const moduleKey = moduleForOfficeSection(section);
  if (moduleKey && !isCompanyModuleActive(moduleKey)) return `${renderSupportBanner()}${moduleInactiveMessage()}`;
  return `${renderSupportBanner()}<section class="office-erp-shell">
    ${renderOfficeSidebar()}
    <main class="office-content">
      ${renderDashboardTab()}
    </main>
  </section>`;
}

function renderWorkOrderPhotoSection(project) {
  if (!isCompanyModuleActive("photo_storage", strictRecordCompanyId(project))) return "";
  const workOrder = ensureWorkOrder(project);
  const photos = storedWorkOrderPhotos(project);
  const required = Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1));
  return `<section class="panel"><h2>Foto's</h2>
    <p>${required === 0 ? "Foto's optioneel" : `Minimaal ${required} foto verplicht`}. Huidig: ${photos.length}</p>
    <div class="form-grid">
      <label>Categorie <select id="photo-category-${project.id}"><option>vrije foto</option><option>voor situatie</option><option>na situatie</option><option>typeplaat</option><option>CO-keur</option></select></label>
      <label>Foto uploaden <input type="file" accept="image/*" capture="environment" multiple onchange="addWorkOrderPhotos('${project.id}', this, document.getElementById('photo-category-${project.id}')?.value)" /></label>
    </div>
    ${renderWorkOrderPhotoPreview(project)}
  </section>`;
}

function validateCompletion(project) {
  const errors = [];
  const workOrder = ensureWorkOrder(project);
  if (isCompanyModuleActive("photo_storage", strictRecordCompanyId(project))) {
    const requiredPhotoCount = Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1));
    const storedPhotos = storedWorkOrderPhotos(project);
    if (requiredPhotoCount > 0 && storedPhotos.length < requiredPhotoCount) errors.push("Minimaal 1 foto is verplicht voordat de werkbon kan worden afgesloten.");
  }
  if (!workOrder.customerSignature && !workOrder.signature) errors.push("Handtekening is verplicht voordat de werkbon kan worden afgesloten.");
  return errors;
}

function pageTitle(route) {
  if (route.startsWith("login")) return ["WerkbonSysteem.nl", "Loginportaal voor werkbonnen, monteurs, voorraad en bestellingen."];
  if (route.startsWith("start/planning")) return ["Mijn planning", "Jouw planning, adressen en werkbonnen."];
  if (route.startsWith("call-customer")) return ["Nieuwe klant uit telefoongesprek", "Maak snel een klant, notitie, afspraak of werkbon aan."];
  if (route.startsWith("notifications")) return ["Meldingen", "Nieuwe werkbonnen, planningwijzigingen en spoedmeldingen."];
  if (route.startsWith("start")) return ["Start", "Monteursomgeving voor projecten en kofferregistratie."];
  if (route.startsWith("new")) return ["Nieuw project", "Maak direct een registratie aan."];
  if (route.startsWith("active")) return ["Lopende projecten", "Open projecten die nog ingevuld worden."];
  if (route.startsWith("completed")) return ["Afgeronde projecten", "Projectregistraties en aanvullingen."];
  if (route.startsWith("project")) return ["Monteurscherm", "Snel onderdelen registreren."];
  if (route.startsWith("summary")) return ["Project afronden", "Controleer de aanvullijst en aantallen."];
  if (route.startsWith("admin") || route.startsWith("office")) return ["Admin", "Bedrijfsportal voor kosten, voorraad, gebruikers en bestellingen."];
  if (route.startsWith("platform")) return ["Platform Admin Dashboard", "Beheer tenants, gebruikers, abonnementen en platformgebruik."];
  return ["WerkbonSysteem.nl", "Multi-company werkbonplatform."];
}

function renderHome() {
  const canCreateCallCustomer = canCreateCustomerFromCall();
  const weekCount = isMechanic() ? mechanicPlanningEvents("week").length : 0;
  return `<section class="grid home-grid">
    ${isMechanic() ? `<section class="stats full"><div class="stat-card"><span>Planning deze week</span><strong>${weekCount}</strong></div></section>` : ""}
    ${isMechanic() ? homeTile("start/planning", "Mijn planning", "Bekijk je planning, adressen en werkbonnen.", "P") : ""}
    ${canCreateCallCustomer ? homeTile("call-customer", "Nieuwe klant uit telefoongesprek", "Maak snel klant, notitie of afspraak.", "Tel") : ""}
    ${homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+")}
    ${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "Open")}
    ${homeTile("completed", "Afgeronde projecten", "Bekijk rapporten, CSV en PDF.", "Done")}
    ${isCompanyAdmin() ? homeTile("admin", "Admin", "Bedrijfsbeheer en planning.", "A") : ""}
    ${isPlatformSuperAdmin() ? homeTile("platform", "Platform", "Beheer WerkbonSysteem.nl.", "P") : ""}
  </section>`;
}

function renderPlanningToolbar() {
  ensurePlanningUi();
  const title = isMechanic() ? "Mijn planning" : planningMonthLabel();
  const subtitle = isMechanic() ? "Eigen afspraken per dag, week en maand" : ui.planningView === "week" ? "Weekplanning" : ui.planningView === "dag" ? "Dagplanning" : "Maandplanning";
  const canCreateAppointment = canCreatePlanningSelection();
  const canCreateCustomer = isMechanic() ? hasMechanicPermission("can_create_customers") : true;
  return `<div class="calendar-toolbar">
    <div><h2>${escapeHtml(title)}</h2><span>${escapeHtml(subtitle)}</span></div>
    <div class="calendar-actions">
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(-1)">&#8249;</button>
      <button class="btn secondary" type="button" onclick="goPlanningToday()">Vandaag</button>
      <button class="btn secondary icon-btn" type="button" onclick="shiftPlanningPeriod(1)">&#8250;</button>
      <div class="segmented">${["dag", "week", "maand"].map((view) => `<button type="button" class="${ui.planningView === view ? "active" : ""}" onclick="setPlanningView('${view}')">${view[0].toUpperCase()}${view.slice(1)}</button>`).join("")}</div>
      ${canCreateAppointment ? `<button class="btn success" type="button" onclick="openNewPlanningEvent()">+ Nieuwe afspraak</button>` : ""}
      ${isMechanic() && canCreateCustomer ? `<button class="btn secondary" type="button" onclick="openMechanicCustomerCreate()">Klant aanmaken</button>` : ""}
    </div>
  </div>`;
}

function renderMechanicCalendarSidebar() {
  ensurePlanningUi();
  return `<aside class="calendar-sidebar">
    <div class="sidebar-section"><h3>Mijn planning</h3><p class="muted">${hasMechanicPermission("can_create_own_appointments") ? "Klik of sleep in de planning om een eigen afspraak te maken." : "Je kunt alleen afspraken bekijken. Kantoor beheert je planning."}</p></div>
    <div class="sidebar-section"><h3>Status</h3>${planningStatuses().map((status) => `<label class="check-line"><input type="checkbox" ${ui.planningStatusFilters[status] !== false ? "checked" : ""} onchange="togglePlanningStatus('${status}', this.checked)" /> <span class="status-dot ${statusClass(status)}"></span>${status}</label>`).join("")}</div>
  </aside>`;
}

function renderOfficeDashboard() {
  const stats = officeDashboardStats();
  const todayRows = companyScoped(state.planningEvents || [])
    .filter((event) => dateKey(event.start_datetime) === dateKey(new Date().toISOString()))
    .sort((a, b) => String(a.start_datetime || "").localeCompare(String(b.start_datetime || "")))
    .slice(0, 8);
  return `<section class="office-dashboard">
    <div class="office-page-head"><div><h2>Dashboard</h2><p>Kerncijfers en planning voor vandaag.</p></div><a class="btn success" href="#/admin/planning">Planning openen</a></div>
    <section class="stats office-kpis">
      <div class="stat-card"><span>Open werkbonnen</span><strong>${stats.openWorkorders}</strong></div>
      <div class="stat-card"><span>Geplande afspraken vandaag</span><strong>${stats.plannedToday}</strong></div>
      <div class="stat-card"><span>Monteurs onderweg</span><strong>${stats.mechanicsOnRoute}</strong></div>
      <div class="stat-card"><span>Openstaande offertes</span><strong>${stats.openQuotes}</strong></div>
      <div class="stat-card"><span>Omzet deze maand</span><strong>${euro(stats.monthlyRevenue)}</strong></div>
      <div class="stat-card"><span>Te factureren werkbonnen</span><strong>${stats.toInvoice}</strong></div>
    </section>
    <section class="panel"><div class="article-head"><div><h2>Vandaag</h2><p>Afspraken en status per monteur.</p></div><a class="btn secondary" href="#/admin/planning">Planning</a></div>${todayRows.length ? renderAdminPlanningCards(todayRows) : `<p class="muted">Geen afspraken vandaag.</p>`}</section>
  </section>`;
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
  if (currentUser() && route.startsWith("login")) route = defaultRouteForUser().replace("#/", "");
  const [title, subtitle] = pageTitle(route);
  const user = currentUser();
  const company = currentCompany();
  if (company) normalizeCompanyBranding(company);
  const isLogin = route.startsWith("login");
  const platformChrome = isLogin || (isPlatformSuperAdmin() && !isSupportMode());
  const brandName = platformChrome ? "WerkbonSysteem.nl" : company?.branding?.brandName || company?.name || "WerkbonSysteem.nl";
  const themeStyle = !isLogin && company
    ? `style="--soft:${escapeAttr(company.primary_color || company.branding?.primaryColor || "#08172e")};--panel:${escapeAttr(company.primary_color || company.branding?.primaryColor || "#0e213f")};--brand:${escapeAttr(company.secondary_color || company.branding?.secondaryColor || "#d6a73c")};--brand-hover:${escapeAttr(company.secondary_color || company.branding?.secondaryColor || "#e0b348")}"`
    : "";
  const appEl = document.getElementById("app");
  appEl.setAttribute(
    "style",
    !isLogin && company
      ? `--soft:${company.primary_color || company.branding?.primaryColor || "#08172e"};--panel:${company.primary_color || company.branding?.primaryColor || "#0e213f"};--brand:${company.secondary_color || company.branding?.secondaryColor || "#d6a73c"};--brand-hover:${company.secondary_color || company.branding?.secondaryColor || "#e0b348"}`
      : "",
  );
  appEl.innerHTML = `
    <div class="topbar" ${themeStyle}>
      <div class="topbar-inner">
        <div class="brand-row">
          ${platformChrome ? renderBrandMark(null, "brand-mark", "W") : renderBrandMark(company, "brand-mark", brandName.slice(0, 1))}
          <div>
            <p class="eyebrow">${escapeHtml(brandName)}</p>
            <h1>${title}</h1>
          </div>
        </div>
        <p>${subtitle}</p>
        ${
          user
            ? `<div class="session-bar"><span>${user.name} - ${roleLabel(user.role)}</span><button class="btn secondary" onclick="logout()">Uitloggen</button></div>`
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
window.addEventListener("storage", (event) => {
  if (event.key !== STORAGE_KEY || !event.newValue) return;
  try {
    state = normalizeState(JSON.parse(event.newValue));
    render();
  } catch {
    // Ignore malformed external storage writes.
  }
});
render();


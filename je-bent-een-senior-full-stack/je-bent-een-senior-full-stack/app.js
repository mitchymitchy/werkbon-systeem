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
    whatsappAccounts: [],
    whatsappConversations: [],
    whatsappMessages: [],
    whatsappTemplates: [],
    whatsappAuditLogs: [],
    hourlyRates: [],
    profitSnapshots: [],
    maintenanceContracts: [],
    planningEvents: [],
    notifications: [],
    customerNotes: [],
    appliances: [],
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
  if (input.platformDataWiped) {
    const platformUsers = (input.users || [])
      .filter((user) => normalizeRole(user.role) === ROLES.PLATFORM_ADMIN)
      .map((user) => ({ ...user, role: ROLES.PLATFORM_ADMIN, company_id: null, companyId: null, active: true, deleted: false }));
    if (!platformUsers.length) platformUsers.push({ ...seedUsers.find((user) => user.role === ROLES.PLATFORM_ADMIN), company_id: null, companyId: null });
    return {
      ...input,
      platformDataWiped: true,
      companies: [],
      kits: [],
      articles: [],
      garageArticles: [],
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
      whatsappAccounts: [],
      whatsappConversations: [],
      whatsappMessages: [],
      whatsappTemplates: [],
      whatsappAuditLogs: [],
      hourlyRates: [],
      profitSnapshots: [],
      maintenanceContracts: [],
      planningEvents: [],
      notifications: [],
      customerNotes: [],
      appliances: [],
      customers: [],
      locations: [],
      settings: input.settings || {},
      users: platformUsers,
      session: input.session || null,
      platformAuditLogs: input.platformAuditLogs || [],
      platformSettings: input.platformSettings || { platform_name: "WerkbonSysteem.nl", maintenance_mode: false, default_user_limit: 10, default_storage_limit_mb: 1024 },
    };
  }
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
    normalizedUser.can_view_workorders = user.can_view_workorders ?? (role === ROLES.COMPANY_ADMIN || role === ROLES.MECHANIC);
    normalizedUser.can_open_workorders = user.can_open_workorders ?? (role === ROLES.COMPANY_ADMIN || role === ROLES.MECHANIC);
    normalizedUser.can_create_workorders = user.can_create_workorders ?? (role === ROLES.COMPANY_ADMIN);
    normalizedUser.can_edit_workorders = user.can_edit_workorders ?? (role === ROLES.COMPANY_ADMIN);
    normalizedUser.can_delete_workorders = user.can_delete_workorders ?? (role === ROLES.COMPANY_ADMIN);
    normalizedUser.can_close_workorders = user.can_close_workorders !== false;
    normalizedUser.can_send_workorders_to_customer = user.can_send_workorders_to_customer ?? (role === ROLES.COMPANY_ADMIN);
    normalizedUser.can_export_workorders_pdf = user.can_export_workorders_pdf ?? (role === ROLES.COMPANY_ADMIN);
    normalizedUser.can_make_quotes = Boolean(user.can_make_quotes);
    normalizedUser.can_register_payments = Boolean(user.can_register_payments);
    normalizedUser.can_manage_inventory = Boolean(user.can_manage_inventory);
    normalizedUser.can_delete_photos = Boolean(user.can_delete_photos);
    normalizedUser.can_read_email = user.can_read_email !== false;
    normalizedUser.can_reply_email = user.can_reply_email !== false;
    normalizedUser.can_archive_email = Boolean(user.can_archive_email);
    normalizedUser.can_connect_mailbox = Boolean(user.can_connect_mailbox);
    normalizedUser.can_manage_email_templates = Boolean(user.can_manage_email_templates);
    normalizedUser.can_use_whatsapp = Boolean(user.can_use_whatsapp);
    normalizedUser.can_reply_whatsapp = Boolean(user.can_reply_whatsapp);
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
    whatsappAccounts: input.whatsappAccounts || input.whatsapp_accounts || [],
    whatsappConversations: input.whatsappConversations || input.whatsapp_conversations || [],
    whatsappMessages: input.whatsappMessages || input.whatsapp_messages || [],
    whatsappTemplates: input.whatsappTemplates || input.whatsapp_templates || [],
    whatsappAuditLogs: input.whatsappAuditLogs || input.whatsapp_audit_logs || [],
    hourlyRates: input.hourlyRates || [],
    profitSnapshots: input.profitSnapshots || [],
    maintenanceContracts: input.maintenanceContracts || [],
    planningEvents: input.planningEvents || [],
    notifications: input.notifications || [],
    customerNotes: input.customerNotes || input.customer_notes || [],
    appliances: input.appliances || input.customerAppliances || input.customer_appliances || [],
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
  normalized.whatsappAccounts = (normalized.whatsappAccounts || []).map((account) => withCompany(account));
  normalized.whatsappConversations = (normalized.whatsappConversations || []).map((conversation) => withCompany(conversation));
  normalized.whatsappMessages = (normalized.whatsappMessages || []).map((message) => withCompany(message));
  normalized.whatsappTemplates = (normalized.whatsappTemplates || []).map((template) => withCompany(template));
  normalized.whatsappAuditLogs = (normalized.whatsappAuditLogs || []).map((log) => withCompany(log));
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
  normalized.appliances = (normalized.appliances || []).map((appliance) => ({
    ...withCompany(appliance),
    customer_id: appliance.customer_id || appliance.customerId || "",
    project_id: appliance.project_id || appliance.projectId || "",
    workorder_id: appliance.workorder_id || appliance.workorderId || appliance.project_id || appliance.projectId || "",
    mechanic_id: appliance.mechanic_id || appliance.mechanicId || appliance.assignedMechanicId || "",
    active: appliance.active !== false,
    service_history: appliance.service_history || appliance.serviceHistory || [],
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
            ${canOpenWorkorder(project) ? `<a class="btn" href="${href}">${status === "Open" ? "Openen" : "Rapport"}</a>` : `<button class="btn secondary" type="button" onclick="alert('Je hebt geen rechten om deze werkbon te openen.')">Openen</button>`}
            <button class="btn secondary" onclick="exportCsv('${project.id}')">CSV</button>
            ${hasWorkorderPermission("can_export_workorders_pdf") ? `<button class="btn secondary" onclick="exportPdf('${project.id}')">PDF</button>` : ""}
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
  if (!isPlatformSuperAdmin()) {
    alert("Geen toegang tot platformbeheer.");
    return;
  }
  ui.platformTab = "Systeembeheer";
  ui.platformResetStep = 1;
  ui.platformResetConfirmText = "";
  location.hash = "#/platform/system-management";
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
  project.workOrder.appliance = project.workOrder.appliance || {};
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
        <label>Heeft u aan een gastoestel gewerkt?
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
              <option value="typeplaatje">Typeplaatje</option>
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

function validateLogoFile(file, maxMb = 5) {
  if (!file) return "Geen bestand geselecteerd.";
  const allowed = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"];
  if (!allowed.includes(file.type)) return "Logo moet JPG, PNG, SVG of WebP zijn.";
  if (file.size > Number(maxMb || 5) * 1024 * 1024) return `Logo mag maximaal ${Number(maxMb || 5)} MB zijn.`;
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
  normalizeCompanyBranding(company);
  const error = validateLogoFile(file, company.max_logo_size_mb || 5);
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
  if (!hasWorkorderPermission("can_export_workorders_pdf")) return alert("Je hebt geen rechten om deze werkbon te exporteren.");
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

function workorderEmailFilename(data) {
  const customer = customerExportFields(data);
  return `werkbon-${workorderNumber(data.project)}-${slugify(customer.name || data.project.customer || "klant")}.pdf`;
}

function generateWorkorderPdfAttachment(data) {
  const html = renderWorkorderPdfHtml(data);
  return {
    id: uid("attachment"),
    type: "workorder_pdf",
    name: workorderEmailFilename(data),
    file_name: workorderEmailFilename(data),
    mime_type: "application/pdf",
    generated_at: new Date().toISOString(),
    source: "latest_workorder_export",
    size_label: `${Math.max(1, Math.round(html.length / 1024))} KB`,
    html,
  };
}

function workorderExtraAttachments(data) {
  const photos = (data.photos || []).map((photo, index) => ({
    id: `photo-${photo.id || index}`,
    type: "photo",
    name: photo.file_name || `werkbon-foto-${index + 1}.jpg`,
    file_name: photo.file_name || `werkbon-foto-${index + 1}.jpg`,
    mime_type: "image/*",
    generated_at: photo.uploaded_at || photo.created_at || new Date().toISOString(),
    source: "workorder_photo",
    size_label: "foto",
    data_url: photoSrc(photo),
  }));
  const workorder = data.workorder || {};
  const reports = [
    ["measurement_report", "Meetrapport", workorder.measurementReportName || ""],
    ["maintenance_report", "Onderhoudsrapport", workorder.maintenanceReportName || ""],
  ].filter(([, , name]) => name).map(([type, label, name]) => ({
    id: `${type}-${data.project.id}`,
    type,
    name,
    file_name: name,
    mime_type: "application/pdf",
    generated_at: new Date().toISOString(),
    source: label,
    size_label: "rapport",
  }));
  return [...photos, ...reports];
}

function defaultWorkorderEmailBody(data) {
  const customer = customerExportFields(data);
  const companyName = data.company?.name || "WerkbonSysteem.nl";
  return `Beste ${customer.name || "klant"},\n\nIn de bijlage ontvangt u de werkbon van de uitgevoerde werkzaamheden.\n\nMet vriendelijke groet,\n\n${companyName}`;
}

function workorderEmailDraft(projectId) {
  const data = getFullWorkorderExportData(projectId);
  if (!data) return null;
  const customer = customerExportFields(data);
  const companyName = data.company?.name || "WerkbonSysteem.nl";
  return {
    data,
    to: customer.email || "",
    subject: `Werkbon ${workorderNumber(data.project)} - ${companyName}`,
    body: defaultWorkorderEmailBody(data),
    pdf: generateWorkorderPdfAttachment(data),
    extras: workorderExtraAttachments(data),
  };
}

function selectedWorkorderEmailAttachments(projectId) {
  const draft = workorderEmailDraft(projectId);
  if (!draft) return [];
  const selected = ui.workorderEmailAttachments || {};
  const extras = draft.extras.filter((attachment) => selected[attachment.id] === true);
  return [draft.pdf, ...extras];
}

function mailWorkorderToCustomer(projectId) {
  const draft = workorderEmailDraft(projectId);
  if (!draft) return alert("Werkbon verzenden lukt niet: geen toegang of werkbon niet gevonden.");
  if (!hasWorkorderPermission("can_send_workorders_to_customer")) return alert("Je hebt geen rechten om deze werkbon naar de klant te versturen.");
  if (!draft.to) return alert("Geen e-mailadres bekend voor deze klant.");
  ui.workorderEmailProjectId = projectId;
  ui.workorderEmailAttachments = {};
  render();
}

function closeWorkorderMailDialog() {
  ui.workorderEmailProjectId = "";
  ui.workorderEmailAttachments = {};
  render();
}

function toggleWorkorderEmailAttachment(attachmentId, checked) {
  ui.workorderEmailAttachments = ui.workorderEmailAttachments || {};
  ui.workorderEmailAttachments[attachmentId] = Boolean(checked);
  render();
}

function previewWorkorderEmailPdf(projectId) {
  const data = getFullWorkorderExportData(projectId);
  if (!data) return;
  document.getElementById("print-report").innerHTML = renderWorkorderPdfHtml(data);
  window.print();
}

function renderWorkorderEmailDialog() {
  const projectId = ui.workorderEmailProjectId;
  if (!projectId) return "";
  const draft = workorderEmailDraft(projectId);
  if (!draft) return "";
  const attachments = selectedWorkorderEmailAttachments(projectId);
  return `<section class="modal-backdrop"><form class="panel confirm-modal workorder-email-modal" onsubmit="sendWorkorderEmail(event, '${projectId}')">
    <div class="article-head">
      <div>
        <h2>Verzend werkbon</h2>
        <p>De nieuwste opgeslagen werkbon-PDF is automatisch als bijlage toegevoegd.</p>
      </div>
      <button class="btn secondary" type="button" onclick="closeWorkorderMailDialog()">Sluiten</button>
    </div>
    <div class="form-grid">
      <label>Aan <input name="to_email" type="email" required value="${escapeAttr(draft.to)}" /></label>
      <label>Onderwerp <input name="subject" required value="${escapeAttr(draft.subject)}" /></label>
      <label class="full">Bericht <textarea name="body" rows="7" required>${escapeHtml(draft.body)}</textarea></label>
    </div>
    <section class="email-attachment-panel">
      <h3>Bijlagen</h3>
      <div class="email-attachment-row locked">
        <span>PDF</span>
        <strong>${escapeHtml(draft.pdf.file_name)}</strong>
        <small>${escapeHtml(draft.pdf.size_label)} - automatisch gegenereerd</small>
      </div>
      ${draft.extras.length ? draft.extras.map((attachment) => `<label class="email-attachment-row">
        <input type="checkbox" ${ui.workorderEmailAttachments?.[attachment.id] ? "checked" : ""} onchange="toggleWorkorderEmailAttachment('${attachment.id}', this.checked)" />
        <span>${escapeHtml(attachment.source || attachment.type)}</span>
        <strong>${escapeHtml(attachment.file_name)}</strong>
        <small>${escapeHtml(attachment.size_label || "")}</small>
      </label>`).join("") : `<p class="muted">Geen extra foto's of rapporten gevonden.</p>`}
    </section>
    <div class="button-row">
      <button class="btn success" type="submit">Verzenden zonder voorbeeld</button>
      <button class="btn secondary" type="button" onclick="previewWorkorderEmailPdf('${projectId}')">Voorbeeld bekijken</button>
      <button class="btn secondary" type="button" onclick="exportPdf('${projectId}')">PDF downloaden</button>
      <button class="btn secondary" type="button" onclick="closeWorkorderMailDialog()">Annuleren</button>
    </div>
    <input type="hidden" name="attachment_count" value="${attachments.length}" />
  </form></section>`;
}

function sendWorkorderEmail(event, projectId) {
  event.preventDefault();
  if (!hasWorkorderPermission("can_send_workorders_to_customer")) return alert("Je hebt geen rechten om deze werkbon naar de klant te versturen.");
  const draft = workorderEmailDraft(projectId);
  if (!draft) return alert("Werkbon verzenden lukt niet: geen toegang of werkbon niet gevonden.");
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const attachments = selectedWorkorderEmailAttachments(projectId);
  const customer = customerExportFields(draft.data);
  const message = {
    id: uid("mail"),
    company_id: strictRecordCompanyId(draft.data.project),
    companyId: strictRecordCompanyId(draft.data.project),
    folder: "Verzonden",
    from_name: currentUser()?.name || "",
    from_email: currentUser()?.email || "",
    to_email: String(form.get("to_email") || "").trim(),
    subject: String(form.get("subject") || "").trim(),
    body: String(form.get("body") || "").trim(),
    received_at: now,
    sent_at: now,
    is_read: true,
    has_attachments: true,
    attachments,
    customer_id: draft.data.customer?.id || draft.data.project.customer_id || draft.data.project.customerId || "",
    project_id: draft.data.project.id,
    workorder_id: draft.data.project.id,
    workorder_number: workorderNumber(draft.data.project),
    delivery_status: "verzonden",
    status: "sent",
    provider: "portal_email_prepared",
    created_at: now,
    updated_at: now,
  };
  state.emailMessages = state.emailMessages || [];
  state.emailMessages.push(message);
  logEmailAction(message.id, "send_workorder", `Werkbon ${workorderNumber(draft.data.project)} verzonden naar ${message.to_email}. Bijlage: ${attachments.map((attachment) => attachment.file_name).join(", ")}`);
  state.emailAuditLogs = state.emailAuditLogs || [];
  state.emailAuditLogs.push({
    id: uid("mailaudit"),
    company_id: strictRecordCompanyId(draft.data.project),
    companyId: strictRecordCompanyId(draft.data.project),
    message_id: message.id,
    action: "workorder_sent",
    details: `Werkbon ${workorderNumber(draft.data.project)} verzonden naar ${message.to_email}. Bijlage: ${attachments.map((attachment) => attachment.file_name).join(", ")}`,
    user_id: currentUser()?.id || "",
    sender_name: currentUser()?.name || "",
    recipient: message.to_email,
    workorder_number: workorderNumber(draft.data.project),
    delivery_status: "verzonden",
    created_at: now,
  });
  const workorder = ensureWorkOrder(draft.data.project);
  workorder.last_email_sent_at = now;
  workorder.last_email_to = message.to_email;
  workorder.last_email_status = "verzonden";
  saveState();
  ui.workorderEmailProjectId = "";
  ui.workorderEmailAttachments = {};
  ui.selectedEmailId = message.id;
  alert(`Werkbon ${workorderNumber(draft.data.project)} verzonden naar ${message.to_email}.`);
  render();
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
  if (!canOpenWorkorder(project)) return openWorkorderDeniedMessage();
  const canEdit = hasWorkorderPermission("can_edit_workorders");
  const canClose = hasWorkorderPermission("can_close_workorders");
  const canExport = hasWorkorderPermission("can_export_workorders_pdf");
  const canSend = hasWorkorderPermission("can_send_workorders_to_customer");
  return `
    <section class="panel" style="margin-bottom:14px">
      <h2>${project.projectName}</h2>
      <p>${project.customer} - ${project.address}<br />${project.technician} - ${project.date}</p>
      ${isMechanic() && project.status === "toegewezen" ? `<button class="btn" onclick="startProject('${project.id}')">Start uitvoering</button>` : ""}
      <div class="button-row">
        ${canExport ? `<button class="btn secondary" type="button" onclick="exportPdf('${project.id}')">Export PDF werkbon</button>` : ""}
        ${canSend ? `<button class="btn secondary" type="button" onclick="mailWorkorderToCustomer('${project.id}')">Verzend werkbon</button>` : ""}
      </div>
    </section>
    ${!isProjectCompleted(project) && canEdit ? renderWorkOrderForm(project) : renderWorkOrderReadOnly(project)}
    ${!isProjectCompleted(project) && canEdit ? renderMaterialSection(project) : renderMaterialReadOnly(project)}
    <section class="sticky-summary">
      <div><strong>${totalUsed(projectId)} gebruikt</strong><br /><span>${isProjectCompleted(project) ? "Werkbon afgerond" : "Materiaalvraag en werkbon bepalen of je kunt afronden"}</span></div>
      ${!isProjectCompleted(project) && canClose ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : `<a class="btn success" href="#/summary/${projectId}">Rapport</a>`}
    </section>
    ${renderWorkorderEmailDialog()}
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
  if (!canOpenWorkorder(project)) return openWorkorderDeniedMessage();
  const used = enrichedUsages(projectId).filter((usage) => usage.usedQuantity > 0);
  const canExport = hasWorkorderPermission("can_export_workorders_pdf");
  const canSend = hasWorkorderPermission("can_send_workorders_to_customer");
  const canClose = hasWorkorderPermission("can_close_workorders");
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
        ${!isProjectCompleted(project) && canClose ? `<button class="btn success" onclick="completeProject('${projectId}')">Project afronden</button>` : ""}
        <button class="btn secondary" onclick="exportCsv('${projectId}')">Export CSV</button>
        ${canExport ? `<button class="btn secondary" onclick="exportPdf('${projectId}')">Export PDF werkbon</button>` : ""}
        ${canSend ? `<button class="btn secondary" onclick="mailWorkorderToCustomer('${projectId}')">Verzend werkbon</button>` : ""}
        ${isOfficeAdmin() ? `<a class="btn ghost" href="#/admin">Naar Admin</a>` : `<a class="btn ghost" href="#/start">Terug naar Start</a>`}
      </div>
    </section>
    ${!isProjectCompleted(project) ? renderWorkOrderForm(project) : renderWorkOrderReadOnly(project)}
    ${renderMaterialReadOnly(project)}
    ${renderWorkorderEmailDialog()}
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
  if (state.platformDataWiped) return;
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
  if (!hasWorkorderPermission("can_create_workorders")) return alert("Je hebt geen rechten om werkbonnen aan te maken.");
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
  ui.customerAppliancePhotoData = null;
  render();
}

function postcodeCityGuess(postalCode) {
  const digits = String(postalCode || "").replace(/\D/g, "").slice(0, 2);
  const map = {
    "10": "Amsterdam",
    "11": "Amsterdam",
    "12": "Hilversum",
    "13": "Almere",
    "14": "Bussum",
    "15": "Zaandam",
    "16": "Hoorn",
    "17": "Schagen",
    "18": "Alkmaar",
    "19": "Castricum",
    "20": "Haarlem",
    "21": "Hoofddorp",
    "22": "Noordwijk",
    "23": "Leiden",
    "24": "Alphen aan den Rijn",
    "25": "Den Haag",
    "26": "Delft",
    "27": "Zoetermeer",
    "28": "Gouda",
    "29": "Capelle aan den IJssel",
    "30": "Rotterdam",
    "31": "Schiedam",
    "32": "Spijkenisse",
    "33": "Dordrecht",
    "34": "Woerden",
    "35": "Utrecht",
    "36": "Maarssen",
    "37": "Zeist",
    "38": "Amersfoort",
    "39": "Veenendaal",
    "40": "Tiel",
    "50": "Tilburg",
    "51": "Waalwijk",
    "52": "Den Bosch",
    "53": "Oss",
    "54": "Uden",
    "56": "Eindhoven",
    "57": "Helmond",
    "58": "Venray",
    "59": "Venlo",
    "60": "Roermond",
    "61": "Sittard",
    "62": "Maastricht",
    "63": "Heerlen",
    "65": "Nijmegen",
    "67": "Ede",
    "68": "Arnhem",
    "70": "Doetinchem",
    "73": "Apeldoorn",
    "74": "Deventer",
    "75": "Enschede",
    "80": "Zwolle",
    "82": "Lelystad",
    "83": "Emmeloord",
    "84": "Heerenveen",
    "89": "Leeuwarden",
    "90": "Dokkum",
    "94": "Assen",
    "97": "Groningen",
  };
  return map[digits] || "";
}

function approximateGeoFromAddress(postalCode, houseNumber) {
  const source = `${postalCode || ""}${houseNumber || ""}`;
  const seed = source.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return {
    lat: Number((50.75 + (seed % 330) / 100).toFixed(6)),
    lng: Number((3.35 + (seed % 390) / 100).toFixed(6)),
    precision: "postcode_house_number_estimate",
  };
}

function setCustomerFormValue(id, value) {
  const el = document.getElementById(id);
  if (el && !el.value) el.value = value || "";
}

function setCustomerFormHidden(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value ?? "";
}

function autofillCustomerAddress() {
  const postcode = document.getElementById("customer-postal-code")?.value || "";
  const houseNumber = document.getElementById("customer-house-number")?.value || "";
  if (!postcode || !houseNumber) return;
  const query = `${postcode} ${houseNumber}, Nederland`;
  if (window.google?.maps?.Geocoder) {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: query }, (results, status) => {
      if (status !== "OK" || !results?.[0]) return;
      const result = results[0];
      const component = (type) => result.address_components?.find((item) => item.types.includes(type))?.long_name || "";
      setCustomerFormValue("customer-address", component("route"));
      setCustomerFormValue("customer-city", component("locality") || component("postal_town") || component("administrative_area_level_2"));
      setCustomerFormHidden("customer-lat", result.geometry?.location?.lat?.());
      setCustomerFormHidden("customer-lng", result.geometry?.location?.lng?.());
      setCustomerFormHidden("customer-geocode-provider", "google_geocoding_api");
    });
    return;
  }
  setCustomerFormValue("customer-city", postcodeCityGuess(postcode));
  const geo = approximateGeoFromAddress(postcode, houseNumber);
  setCustomerFormHidden("customer-lat", geo.lat);
  setCustomerFormHidden("customer-lng", geo.lng);
  setCustomerFormHidden("customer-geocode-provider", geo.precision);
}

function readCustomerTypeplatePhoto(input) {
  const file = input?.files?.[0];
  if (!file) {
    ui.customerAppliancePhotoData = null;
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    ui.customerAppliancePhotoData = {
      file_name: file.name,
      data_url: reader.result,
      uploaded_at: new Date().toISOString(),
      uploaded_by: currentUser()?.id || "",
    };
    render();
  };
  reader.readAsDataURL(file);
}

function renderCustomerModal(customerId) {
  const isNew = customerId === "new";
  const customer = isNew ? {} : byId(state.customers || [], customerId);
  if (!isNew && (!customer || !isSameCompany(customer))) return "";
  const appliance = customerAppliances(customer)[0] || {};
  const photo = ui.customerAppliancePhotoData || appliance.typeplate_photo || null;
  return `<section class="modal-backdrop"><form class="panel confirm-modal customer-form-modal" onsubmit="saveCustomer(event, '${customerId}')">
    <h2>${isNew ? "Klant toevoegen" : "Klant bewerken"}</h2>
    <p class="muted">Alleen klantnaam, postcode en huisnummer zijn verplicht. Toestelgegevens kunnen later worden aangevuld.</p>
    <input type="hidden" id="customer-lat" name="lat" value="${escapeAttr(customer.lat || customer.latitude || "")}" />
    <input type="hidden" id="customer-lng" name="lng" value="${escapeAttr(customer.lng || customer.longitude || "")}" />
    <input type="hidden" id="customer-geocode-provider" name="geocode_provider" value="${escapeAttr(customer.geocode_provider || "")}" />
    <section class="user-permission-section">
      <h4>Basisgegevens</h4>
      <div class="form-grid">
        <label>Klantnaam * <input name="customer_name" required value="${escapeAttr(customer.customer_name || "")}" /></label>
        <label>Postcode * <input id="customer-postal-code" name="postal_code" required value="${escapeAttr(customer.postal_code || "")}" onblur="autofillCustomerAddress()" /></label>
        <label>Huisnummer * <input id="customer-house-number" name="house_number" required value="${escapeAttr(customer.house_number || "")}" onblur="autofillCustomerAddress()" /></label>
        <label>Contactpersoon <input name="contact_person" value="${escapeAttr(customer.contact_person || "")}" /></label>
        <label>Telefoon <input name="phone" value="${escapeAttr(customer.phone || "")}" /></label>
        <label>E-mail <input name="email" type="email" value="${escapeAttr(customer.email || "")}" /></label>
        <label>Adres <input id="customer-address" name="address" value="${escapeAttr(customer.address || "")}" /></label>
        <label>Plaats <input id="customer-city" name="city" value="${escapeAttr(customer.city || "")}" /></label>
        <label class="full">Notities <textarea name="notes" rows="3">${escapeHtml(customer.notes || "")}</textarea></label>
      </div>
      <button class="btn secondary" type="button" onclick="autofillCustomerAddress()">Adres ophalen</button>
    </section>
    <section class="user-permission-section">
      <h4>Toestelgegevens</h4>
      <div class="form-grid">
        <label>CV-ketel merk <input name="appliance_brand" value="${escapeAttr(appliance.brand || "")}" /></label>
        <label>CV-ketel type <input name="appliance_model" value="${escapeAttr(appliance.model || "")}" /></label>
        <label>Serienummer <input name="serial_number" value="${escapeAttr(appliance.serial_number || "")}" /></label>
        <label>Bouwjaar <input name="build_year" type="number" min="1950" max="2100" value="${escapeAttr(appliance.build_year || "")}" /></label>
        <label>Laatste onderhoudsdatum <input name="last_service_date" type="date" value="${escapeAttr(appliance.last_service_date || customer.last_maintenance_date || "")}" /></label>
        <label>Onderhoudsinterval <input name="maintenance_interval_months" type="number" min="1" value="${escapeAttr(customer.maintenance_interval_months || appliance.maintenance_interval_months || 12)}" /></label>
        <label>Volgende onderhoudsdatum <input name="next_maintenance_date" type="date" value="${escapeAttr(customer.next_maintenance_date || appliance.next_service_date || "")}" /></label>
        <label>Type toestel <select name="appliance_category"><option value="">Kies...</option>${applianceCategories().map((category) => `<option value="${category}" ${appliance.category === category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
        <label>Foto typeplaatje <input name="typeplate_photo" type="file" accept="image/*" onchange="readCustomerTypeplatePhoto(this)" /></label>
      </div>
      ${photo ? `<div class="photo-row"><img src="${escapeAttr(photo.data_url || photo.url || "")}" alt="Foto typeplaatje" /><span>${escapeHtml(photo.file_name || "typeplaatje")}</span></div>` : `<p class="muted">Foto typeplaatje is optioneel.</p>`}
    </section>
    <div class="button-row"><button class="btn secondary" type="button" onclick="closeCustomerEdit()">Annuleren</button><button class="btn success" type="submit">Opslaan</button></div>
  </form></section>`;
}

function saveCustomer(event, customerId) {
  event.preventDefault();
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const postcode = String(form.get("postal_code") || "").trim();
  const houseNumber = String(form.get("house_number") || "").trim();
  const geo = form.get("lat") && form.get("lng") ? { lat: Number(form.get("lat")), lng: Number(form.get("lng")), precision: String(form.get("geocode_provider") || "manual") } : approximateGeoFromAddress(postcode, houseNumber);
  const data = {
    customer_name: String(form.get("customer_name") || "").trim(),
    contact_person: String(form.get("contact_person") || "").trim(),
    house_number: houseNumber,
    address: String(form.get("address") || "").trim(),
    postal_code: postcode,
    city: String(form.get("city") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    email: String(form.get("email") || "").trim(),
    notes: String(form.get("notes") || "").trim(),
    lat: geo.lat,
    lng: geo.lng,
    latitude: geo.lat,
    longitude: geo.lng,
    geocode_provider: geo.precision,
    map_location_saved: Boolean(geo.lat && geo.lng),
    maintenance_interval_months: Math.max(1, Number(form.get("maintenance_interval_months") || 12)),
    next_maintenance_date: String(form.get("next_maintenance_date") || "").trim(),
    last_maintenance_date: String(form.get("last_service_date") || "").trim(),
    updated_at: now,
  };
  if (!data.customer_name || !data.postal_code || !data.house_number) return alert("Klantnaam, postcode en huisnummer zijn verplicht.");
  let customer;
  if (customerId === "new") {
    customer = { id: uid("customer"), company_id: currentCompanyId(), companyId: currentCompanyId(), ...data, source: "admin", created_by: currentUser()?.id || "", active: true, created_at: now };
    state.customers.push(customer);
  } else {
    customer = byId(state.customers || [], customerId);
    if (!customer || !isSameCompany(customer)) return;
    Object.assign(customer, data);
  }
  saveCustomerApplianceFromForm(customer, form, now);
  ui.editingCustomerId = null;
  ui.customerAppliancePhotoData = null;
  saveState();
  render();
}

function saveCustomerApplianceFromForm(customer, form, now = new Date().toISOString()) {
  const applianceData = {
    brand: String(form.get("appliance_brand") || "").trim(),
    model: String(form.get("appliance_model") || "").trim(),
    serial_number: String(form.get("serial_number") || "").trim(),
    build_year: String(form.get("build_year") || "").trim(),
    category: String(form.get("appliance_category") || "").trim(),
    last_service_date: String(form.get("last_service_date") || "").trim(),
    service_date: String(form.get("last_service_date") || "").trim(),
    maintenance_interval_months: Math.max(1, Number(form.get("maintenance_interval_months") || customer.maintenance_interval_months || 12)),
    next_service_date: String(form.get("next_maintenance_date") || "").trim(),
    typeplate_photo: ui.customerAppliancePhotoData || null,
  };
  const hasApplianceData = Object.entries(applianceData).some(([key, value]) => key !== "maintenance_interval_months" && Boolean(value));
  if (!hasApplianceData) return null;
  state.appliances = state.appliances || [];
  const companyId = strictRecordCompanyId(customer);
  const existing = state.appliances.find((row) =>
    strictRecordCompanyId(row) === companyId &&
    row.customer_id === customer.id &&
    ((applianceData.serial_number && row.serial_number === applianceData.serial_number) || (!applianceData.serial_number && row.brand === applianceData.brand && row.model === applianceData.model))
  );
  const appliance = existing || {
    id: uid("appliance"),
    company_id: companyId,
    companyId: companyId,
    customer_id: customer.id,
    active: true,
    service_history: [],
    created_at: now,
  };
  Object.assign(appliance, applianceData, {
    customer_name: customer.customer_name,
    address: customer.address,
    house_number: customer.house_number,
    postal_code: customer.postal_code,
    city: customer.city,
    lat: customer.lat,
    lng: customer.lng,
    updated_at: now,
  });
  if (!existing) state.appliances.push(appliance);
  customer.appliances = customer.appliances || [];
  const summary = {
    id: appliance.id,
    brand: appliance.brand,
    model: appliance.model,
    serial_number: appliance.serial_number,
    build_year: appliance.build_year,
    category: appliance.category,
    address: appliance.address,
    postal_code: appliance.postal_code,
    city: appliance.city,
    last_service_date: appliance.last_service_date,
    next_service_date: appliance.next_service_date,
    typeplate_photo: appliance.typeplate_photo,
  };
  const idx = customer.appliances.findIndex((item) => item.id === appliance.id);
  if (idx >= 0) customer.appliances[idx] = summary;
  else customer.appliances.push(summary);
  return appliance;
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
  if (route.startsWith("whatsapp")) return ["WhatsApp", "Klantberichten lezen en beantwoorden."];
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
      ${gasRequired ? renderGasApplianceRegistration(project, workOrder) : ""}
      ${gasRequired ? renderCoKeurFields(project, workOrder) : ""}
      ${renderChecklistAnswers(project, workOrder)}
      <section style="margin-top:14px">
        <h3>Foto's</h3>
        <p>${Math.max(0, Number(state.checklistSettings.minRequiredPhotos ?? 1)) === 0 ? "Foto's optioneel" : `Minimaal ${state.checklistSettings.minRequiredPhotos} foto verplicht`}. Huidig: ${photos.length}</p>
        <div class="form-grid">
          <label>Fotocategorie
            <select id="photo-category-${project.id}">
              <option value="installatie">Installatie</option>
              <option value="typeplaatje">Typeplaatje</option>
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
    const appliance = workOrder.appliance || {};
    if (!String(appliance.brand || "").trim()) errors.push("Merk toestel is verplicht bij werkzaamheden aan een gastoestel.");
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
    const appliance = workOrder.appliance || {};
    if (!String(appliance.brand || "").trim()) errors.push("Merk toestel is verplicht bij werkzaamheden aan een gastoestel.");
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
      ${canOpenProject ? `<a class="btn success" href="#/project/${project.id}">Open werkbon</a>` : companySettings().mechanics_can_create_events && hasWorkorderPermission("can_create_workorders") ? `<button class="btn success" type="button" onclick="createWorkorderFromPlanningEvent('${event.id}')">Werkbon maken</button>` : ""}
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
  if (!hasWorkorderPermission("can_create_workorders")) return alert("Je hebt geen rechten om werkbonnen aan te maken.");
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
  if (!hasWorkorderPermission("can_close_workorders")) return alert("Je hebt geen recht om werkbonnen af te sluiten.");
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
    ["Onderhoudsherinnering", "Onderhoudsherinnering", "Beste klant,\n\nHet is tijd om onderhoud in te plannen. Neem contact met ons op voor een afspraak.\n\nMet vriendelijke groet,"],
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
  ${ui.showEmailTemplates ? renderEmailTemplatesPanel() : ""}
  ${ui.emailLinkingMessageId ? renderEmailCustomerLinkModal(ui.emailLinkingMessageId) : ""}`;
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
  const linkButton = customer
    ? `<button class="btn secondary" onclick="openEmailCustomerLink('${message.id}')">Gekoppeld aan: ${escapeHtml(customer.customer_name || "-")}</button>`
    : `<button class="btn secondary" onclick="openEmailCustomerLink('${message.id}')">Koppelen aan klant</button>`;
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
      ${linkButton}
      ${!customer ? `<button class="btn secondary" onclick="createCustomerFromEmail('${message.id}')">Nieuwe klant aanmaken</button>` : ""}
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

function openEmailCustomerLink(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return;
  ui.emailLinkingMessageId = messageId;
  ui.emailCustomerSearch = "";
  render();
}

function closeEmailCustomerLink() {
  ui.emailLinkingMessageId = "";
  ui.emailCustomerSearch = "";
  render();
}

function setEmailCustomerSearch(value) {
  ui.emailCustomerSearch = value || "";
  render();
}

function emailCustomerSearchText(customer) {
  return [
    customer.customer_name,
    customer.contact_person,
    customer.address,
    customer.postal_code,
    customer.city,
    customer.email,
    customer.phone,
  ].join(" ").toLowerCase();
}

function renderEmailCustomerLinkModal(messageId) {
  const message = byId(state.emailMessages || [], messageId);
  if (!message || !isSameCompany(message)) return "";
  const search = String(ui.emailCustomerSearch || "").trim().toLowerCase();
  const customers = customerScopedRows()
    .filter((customer) => !search || emailCustomerSearchText(customer).includes(search))
    .slice(0, 80);
  const selected = ui.emailSelectedCustomerId || message.customer_id || customers[0]?.id || "";
  return `<section class="modal-backdrop"><form class="panel confirm-modal customer-link-modal" onsubmit="confirmEmailCustomerLink(event, '${message.id}')">
    <div class="article-head">
      <div><h2>Koppelen aan klant</h2><p>${escapeHtml(message.subject || "(geen onderwerp)")}</p></div>
      <button class="btn secondary" type="button" onclick="closeEmailCustomerLink()">Sluiten</button>
    </div>
    <label>Zoek bestaande klant
      <input value="${escapeAttr(ui.emailCustomerSearch || "")}" placeholder="Naam, adres, e-mail, telefoon of postcode" oninput="setEmailCustomerSearch(this.value)" />
    </label>
    <label>Selecteer klant
      <select name="customer_id" required onchange="ui.emailSelectedCustomerId=this.value">
        ${customers.map((customer) => `<option value="${customer.id}" ${selected === customer.id ? "selected" : ""}>${escapeHtml(customer.customer_name || "-")} - ${escapeHtml(customer.address || "-")} - ${escapeHtml(customer.postal_code || "")} ${escapeHtml(customer.city || "")} - ${escapeHtml(customer.email || customer.phone || "")}</option>`).join("")}
      </select>
    </label>
    ${customers.length ? "" : `<p class="muted">Geen klanten gevonden binnen dit bedrijf.</p>`}
    <div class="button-row">
      <button class="btn secondary" type="button" onclick="closeEmailCustomerLink()">Annuleren</button>
      <button class="btn success" type="submit" ${customers.length ? "" : "disabled"}>Koppel e-mail aan klant</button>
    </div>
  </form></section>`;
}

function confirmEmailCustomerLink(event, messageId) {
  event.preventDefault();
  const customerId = String(new FormData(event.target).get("customer_id") || "");
  if (!customerId) return alert("Selecteer een klant.");
  linkEmailToCustomer(messageId, customerId);
  closeEmailCustomerLink();
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
  const customer = byId(state.customers || [], customerId);
  if (!message || !customer || !isSameCompany(message) || !isSameCompany(customer)) return;
  message.customer_id = customerId;
  message.customer_linked_at = new Date().toISOString();
  message.customer_linked_by = currentUser()?.id || "";
  message.attachments = (message.attachments || []).map((attachment) => ({
    ...attachment,
    customer_id: customerId,
    linked_to_customer_at: new Date().toISOString(),
  }));
  customer.email_message_ids = Array.from(new Set([...(customer.email_message_ids || []), messageId]));
  customer.attachments = customer.attachments || [];
  (message.attachments || []).forEach((attachment) => {
    customer.attachments.push({
      ...attachment,
      id: attachment.id || uid("custatt"),
      source: "email",
      message_id: messageId,
      linked_at: new Date().toISOString(),
    });
  });
  customer.updated_at = new Date().toISOString();
  logEmailAction(messageId, "link_customer", `Gekoppeld aan klant ${customer.customer_name}`);
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
  const favorites = officeFavoriteItems();
  return `<aside class="office-sidebar">
    <div class="office-sidebar-brand">
      <strong>${escapeHtml(currentCompany()?.name || "Bedrijfsportal")}</strong>
      <span>Kantoor</span>
    </div>
    ${favorites.length ? `<nav class="office-favorites" aria-label="Favorieten">
      ${favorites.map(([label, route, icon]) => `<a class="${ui.dashboardTab === label ? "active" : ""}" href="#/admin/${route}" title="${escapeAttr(label)}"><b>★</b><span>${escapeHtml(label)}</span></a>`).join("")}
    </nav>` : ""}
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
  if (ui.dashboardTab === "Instellingen") return `${renderCompanySettings()}${renderMenuLayoutSettings()}${renderChecklistSettings()}`;
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
  const mechanicRoutes = ["start", "new", "active", "completed", "project", "summary", "notifications", "call-customer", "settlement", "payment", "whatsapp", "busvoorraad"];
  if (!mechanicRoutes.includes(name)) return defaultRouteForUser() === "#/admin" ? renderOffice() : renderHome();
  if (!isMechanic()) return renderNoOfficeAccess();
  if (name === "notifications") return renderNotificationsCenter();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "whatsapp") return canUseWhatsApp() ? renderWhatsAppModule() : renderNoOfficeAccess();
  if (name === "busvoorraad") return isCompanyModuleActive("van_stock") ? renderMechanicVanStock() : moduleInactiveMessage();
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
    ip_address: platformAdminIpAddress(),
  });
}

function platformAdminIpAddress() {
  return "localStorage/browser";
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
    Systeembeheer: "system-management",
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
    "system-management": "Systeembeheer",
    management: "Systeembeheer",
    advanced: "Systeembeheer",
    system: "Systeeminstellingen",
    settings: "Systeeminstellingen",
  };
  if (section) ui.platformTab = routeTabs[section] || ui.platformTab || "Overzicht";
  const tabs = ["Overzicht", "Bedrijven", "Gebruikers", "Modules", "Abonnementen", "Facturatie", "Opslaggebruik", "Rechten", "Support", "Audit Logs", "Systeembeheer", "Systeeminstellingen"];
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
  if (ui.platformTab === "Systeembeheer") return renderPlatformSystemManagement();
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
  return `<section class="panel"><h2>Audit Logs</h2><div class="table-wrap"><table><thead><tr><th>Datum/tijd</th><th>Gebruiker</th><th>Rol</th><th>Actie</th><th>Bedrijf</th><th>IP-adres</th><th>Details</th></tr></thead><tbody>${logs.map((log) => `<tr><td>${escapeHtml(String(log.created_at || "").replace("T", " ").slice(0, 16))}</td><td>${escapeHtml(log.user_name || "-")}</td><td>${escapeHtml(log.role || "-")}</td><td>${escapeHtml(log.action || "-")}</td><td>${escapeHtml(log.company_name || "-")}</td><td>${escapeHtml(log.ip_address || "-")}</td><td>${escapeHtml(log.details || "-")}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderPlatformSystemSettings() {
  state.platformSettings = state.platformSettings || { platform_name: "WerkbonSysteem.nl", maintenance_mode: false, default_user_limit: 10, default_storage_limit_mb: 1024 };
  const settings = state.platformSettings;
  return `<section class="panel"><h2>Systeeminstellingen</h2><form class="form-grid" onsubmit="savePlatformSettings(event)"><label>Platformnaam <input name="platform_name" value="${escapeAttr(settings.platform_name)}" /></label><label>Standaard gebruikerslimiet <input type="number" name="default_user_limit" min="1" value="${Number(settings.default_user_limit || 10)}" /></label><label>Standaard opslaglimiet MB <input type="number" name="default_storage_limit_mb" min="100" value="${Number(settings.default_storage_limit_mb || 1024)}" /></label><label>Onderhoudsmodus <select name="maintenance_mode"><option value="false">Uit</option><option value="true" ${settings.maintenance_mode ? "selected" : ""}>Aan</option></select></label><button class="btn success" type="submit">Instellingen opslaan</button></form></section>
    ${renderPlatformDefaultMenuOrderSettings()}`;
}

function savePlatformSettings(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin()) return;
  const form = new FormData(event.target);
  state.platformSettings = {
    ...(state.platformSettings || {}),
    platform_name: String(form.get("platform_name") || "WerkbonSysteem.nl"),
    default_user_limit: Number(form.get("default_user_limit") || 10),
    default_storage_limit_mb: Number(form.get("default_storage_limit_mb") || 1024),
    maintenance_mode: form.get("maintenance_mode") === "true",
  };
  logPlatformAction("platforminstellingen aangepast", "", "Systeeminstellingen");
  saveState();
  render();
}

function platformDefaultMenuText(roleKey) {
  state.platformSettings = state.platformSettings || {};
  state.platformSettings.default_menu_order = state.platformSettings.default_menu_order || {};
  const order = state.platformSettings.default_menu_order[roleKey] || defaultMenuOrder(roleKey);
  return order.join("\n");
}

function renderPlatformDefaultMenuOrderSettings() {
  return `<section class="panel menu-layout-settings">
    <div class="article-head">
      <div>
        <h2>Standaard menuvolgorde nieuwe bedrijven</h2>
        <p>Platform Admin kan hier de standaardvolgorde instellen. Bedrijven kunnen daarna hun eigen volgorde beheren.</p>
      </div>
    </div>
    <form class="form-grid" onsubmit="savePlatformDefaultMenuOrder(event)">
      <label>Company Admin volgorde <textarea name="company_admin" rows="10">${escapeHtml(platformDefaultMenuText("company_admin"))}</textarea></label>
      <label>Kantoor volgorde <textarea name="office" rows="10">${escapeHtml(platformDefaultMenuText("office"))}</textarea></label>
      <label>Monteur volgorde <textarea name="mechanic" rows="10">${escapeHtml(platformDefaultMenuText("mechanic"))}</textarea></label>
      <button class="btn success" type="submit">Standaardvolgorde opslaan</button>
    </form>
  </section>`;
}

function savePlatformDefaultMenuOrder(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  const form = new FormData(event.target);
  state.platformSettings = state.platformSettings || {};
  state.platformSettings.default_menu_order = state.platformSettings.default_menu_order || {};
  ["company_admin", "office", "mechanic"].forEach((roleKey) => {
    const valid = defaultOfficeNavItems().map(([label]) => label);
    const order = String(form.get(roleKey) || "")
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter((item, index, arr) => item && valid.includes(item) && arr.indexOf(item) === index);
    state.platformSettings.default_menu_order[roleKey] = order.length ? order : defaultMenuOrder(roleKey);
  });
  logPlatformAction("standaard menuvolgorde aangepast", "", "Systeeminstellingen");
  saveState();
  alert("Standaard menuvolgorde opgeslagen.");
  render();
}

function cancelPlatformDataReset() {
  ui.platformResetStep = 0;
  ui.platformResetConfirmText = "";
  render();
}

function setPlatformResetStep(step) {
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  ui.platformResetStep = Number(step) || 1;
  if (ui.platformResetStep < 2) ui.platformResetConfirmText = "";
  render();
}

function setPlatformResetConfirmText(value) {
  ui.platformResetConfirmText = String(value || "");
  render();
}

function renderPlatformSystemManagement() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const step = Number(ui.platformResetStep || 0);
  return `<section class="platform-system-management">
    <section class="panel">
      <div class="article-head">
        <div>
          <h2>Systeembeheer</h2>
          <p>Geavanceerde platformacties. Deze pagina is alleen beschikbaar voor Platform Admin.</p>
        </div>
        <span class="badge danger">Platform Admin only</span>
      </div>
    </section>
    <section class="panel danger-zone">
      <div class="article-head">
        <div>
          <h2>Geavanceerd</h2>
          <p>Permanent verwijderen van alle lokale SaaS-data is afgeschermd met drie verplichte stappen.</p>
        </div>
      </div>
      ${step ? renderPlatformResetStep(step) : renderPlatformResetClosed()}
    </section>
  </section>`;
}

function renderPlatformResetClosed() {
  return `<div class="danger-action">
    <div>
      <strong>Alle lokale platformdata verwijderen</strong>
      <p class="muted">Alleen gebruiken wanneer het volledige localStorage-platform bewust leeg gemaakt moet worden.</p>
    </div>
    <button class="btn danger" type="button" onclick="setPlatformResetStep(1)">Resetprocedure starten</button>
  </div>`;
}

function renderPlatformResetStep(step) {
  if (step === 1) {
    return `<div class="reset-flow">
      <div class="reset-step active">Stap 1 van 3</div>
      <div class="warning-block"><strong>LET OP:</strong><br>U staat op het punt alle bedrijfsgegevens, klanten, werkbonnen, offertes, facturen, foto's, documenten en instellingen permanent te verwijderen.<br>Deze actie kan niet ongedaan worden gemaakt.</div>
      <div class="button-row">
        <button class="btn secondary" type="button" onclick="cancelPlatformDataReset()">Annuleren</button>
        <button class="btn danger" type="button" onclick="setPlatformResetStep(2)">Ik begrijp dit</button>
      </div>
    </div>`;
  }
  if (step === 2) {
    const phrase = "VERWIJDER ALLE DATA";
    const typed = String(ui.platformResetConfirmText || "");
    const enabled = typed === phrase;
    return `<div class="reset-flow">
      <div class="reset-step active">Stap 2 van 3</div>
      <div class="warning-block severe"><strong>LAATSTE WAARSCHUWING</strong><br><br>Alle data van alle bedrijven zal permanent worden verwijderd.<br><br>Dit omvat:<br>- Klanten<br>- Werkbonnen<br>- Offertes<br>- Facturen<br>- Foto's<br>- Documenten<br>- Planning<br>- Gebruikers<br>- Toestellendatabase<br><br>Na bevestiging is herstel niet mogelijk.</div>
      <label>Typ exact: <strong>${phrase}</strong>
        <input value="${escapeAttr(typed)}" oninput="setPlatformResetConfirmText(this.value)" autocomplete="off" />
      </label>
      <div class="button-row">
        <button class="btn secondary" type="button" onclick="cancelPlatformDataReset()">Annuleren</button>
        <button class="btn danger" type="button" ${enabled ? "" : "disabled"} onclick="setPlatformResetStep(3)">Volgende</button>
      </div>
    </div>`;
  }
  return `<form class="reset-flow" onsubmit="deleteAllPlatformData(event)">
    <div class="reset-step active">Stap 3 van 3</div>
    <label>Platform Admin wachtwoord opnieuw invoeren
      <input type="password" name="password" required autocomplete="current-password" />
    </label>
    <label>2FA verificatiecode optioneel
      <input name="two_factor_code" inputmode="numeric" pattern="[0-9]{6}" placeholder="6 cijfers indien ingesteld" />
    </label>
    <div class="button-row">
      <button class="btn secondary" type="button" onclick="cancelPlatformDataReset()">Annuleren</button>
      <button class="btn danger" type="submit">Definitief verwijderen</button>
    </div>
  </form>`;
}

function emptyPlatformDataState(adminUser, auditEntry) {
  return {
    platformDataWiped: true,
    companies: [],
    kits: [],
    articles: [],
    garageArticles: [],
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
    whatsappAccounts: [],
    whatsappConversations: [],
    whatsappMessages: [],
    whatsappTemplates: [],
    whatsappAuditLogs: [],
    hourlyRates: [],
    profitSnapshots: [],
    maintenanceContracts: [],
    planningEvents: [],
    notifications: [],
    customerNotes: [],
    appliances: [],
    customers: [],
    locations: [],
    settings: {},
    users: [adminUser],
    session: { userId: adminUser.id },
    platformAuditLogs: [auditEntry],
    platformSettings: { platform_name: "WerkbonSysteem.nl", maintenance_mode: false, default_user_limit: 10, default_storage_limit_mb: 1024 },
  };
}

function deleteAllPlatformData(event) {
  event.preventDefault();
  if (!isPlatformSuperAdmin()) return alert("Geen toegang tot platformbeheer.");
  if (String(ui.platformResetConfirmText || "") !== "VERWIJDER ALLE DATA") return alert("Bevestigingstekst ontbreekt.");
  const form = new FormData(event.target);
  const user = currentUser();
  const password = String(form.get("password") || "");
  const twoFactorCode = String(form.get("two_factor_code") || "").trim();
  if (!user || password !== String(user.password || "")) {
    alert("Platform Admin wachtwoord is onjuist.");
    return;
  }
  if (twoFactorCode && !/^[0-9]{6}$/.test(twoFactorCode)) {
    alert("2FA verificatiecode moet uit 6 cijfers bestaan.");
    return;
  }
  const now = new Date().toISOString();
  const adminUser = { ...user, role: ROLES.PLATFORM_ADMIN, company_id: null, companyId: null, active: true, deleted: false };
  const auditEntry = {
    id: uid("audit"),
    created_at: now,
    user_id: adminUser.id,
    user_name: adminUser.name || adminUser.email || "Platform Admin",
    role: ROLES.PLATFORM_ADMIN,
    action: "alle data definitief verwijderd",
    company_id: "",
    company_name: "Platform",
    ip_address: platformAdminIpAddress(),
    details: "Alle bedrijfsgegevens, klanten, werkbonnen, offertes, facturen, foto's, documenten, planning, gebruikers en toestellendatabase verwijderd.",
  };
  state = emptyPlatformDataState(adminUser, auditEntry);
  ui.platformTab = "Systeembeheer";
  ui.platformResetStep = 0;
  ui.platformResetConfirmText = "";
  saveState();
  alert("Alle lokale platformdata is verwijderd. Alleen het Platform Admin-account en deze auditlog zijn behouden.");
  location.hash = "#/platform/system-management";
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
  const mechanicRoutes = ["start", "new", "active", "completed", "project", "summary", "notifications", "call-customer", "settlement", "payment", "whatsapp"];
  if (!mechanicRoutes.includes(name)) return defaultRouteForUser() === "#/admin" ? renderOffice() : renderHome();
  if (!isMechanic()) return renderNoOfficeAccess();
  if (name === "notifications") return renderNotificationsCenter();
  if (name === "call-customer") return canCreateCustomerFromCall() ? renderCallCustomerForm() : renderNoOfficeAccess();
  if (name === "whatsapp") return canUseWhatsApp() ? renderWhatsAppModule() : renderNoOfficeAccess();
  if (name === "settlement") return renderSettlementPrompt(id);
  if (name === "payment") return renderMechanicPayment(id);
  if (name === "start" && id === "planning") return isCompanyModuleActive("planning") ? renderMechanicAgendaPage(sub || "week") : moduleInactiveMessage();
  if (name === "start") return renderHome();
  if (name === "new") {
    if (!isCompanyModuleActive("workorders")) return moduleInactiveMessage();
    if (!hasWorkorderPermission("can_create_workorders")) return `<div class="panel empty">Je hebt geen rechten om werkbonnen aan te maken.</div>`;
    return renderNewProject();
  }
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
  ["van_stock", "Busvoorraad", "Premium", "Digitale busvoorraad per monteur met afboeken, inventarisatie en besteladviezen.", ["inventory", "warehouse"]],
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
  const items = defaultOfficeNavItems();
  const activeItems = items.filter(([, , , moduleKey]) => !moduleKey || isCompanyModuleActive(moduleKey));
  return sortMenuItemsForRole(activeItems, currentMenuRoleKey());
}

function defaultOfficeNavItems() {
  return [
    ["Dashboard", "dashboard", "D", ""],
    ["Projecten", "projects", "P", "workorders"],
    ["Werkbonnen", "workorders", "W", "workorders"],
    ["Toestellendatabase", "appliances", "T", "workorders"],
    ["Planning", "planning", "P", "planning"],
    ["Klanten", "customers", "K", "customers"],
    ["Offertes", "quotes", "O", "quotes"],
    ["Facturen", "invoices", "F", "invoices"],
    ["E-mail", "email", "E", "email"],
    ["Rapportages", "reports", "R", "reports"],
    ["Voorraad", "inventory", "V", "inventory"],
    ["Magazijn", "warehouse", "M", "warehouse"],
    ["Busvoorraad", "van-stock", "B", "van_stock"],
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
}

function defaultMenuOrder(roleKey = "company_admin") {
  const platformDefault = state.platformSettings?.default_menu_order?.[roleKey];
  if (Array.isArray(platformDefault) && platformDefault.length) return platformDefault.slice();
  if (roleKey === "mechanic") return ["Planning", "Werkbonnen", "Klanten", "Busvoorraad", "Toestellendatabase"];
  return defaultOfficeNavItems().map(([label]) => label);
}

function currentMenuRoleKey() {
  const role = userRole(currentUser());
  if (role === ROLES.MECHANIC) return "mechanic";
  if (role === ROLES.COMPANY_ADMIN) return "company_admin";
  return "office";
}

function companyMenuLayouts(company = currentCompany()) {
  if (!company) return {};
  company.menu_layouts = company.menu_layouts || company.settings?.menu_layouts || {};
  company.settings = company.settings || {};
  company.settings.menu_layouts = company.menu_layouts;
  return company.menu_layouts;
}

function companyMenuFavorites(company = currentCompany()) {
  if (!company) return {};
  company.menu_favorites = company.menu_favorites || company.settings?.menu_favorites || {};
  company.settings = company.settings || {};
  company.settings.menu_favorites = company.menu_favorites;
  return company.menu_favorites;
}

function normalizeMenuOrderForActiveItems(order, activeItems, roleKey) {
  const activeLabels = activeItems.map(([label]) => label);
  const source = Array.isArray(order) && order.length ? order : defaultMenuOrder(roleKey);
  const normalized = source.filter((label, index, arr) => activeLabels.includes(label) && arr.indexOf(label) === index);
  activeLabels.forEach((label) => {
    if (!normalized.includes(label)) normalized.push(label);
  });
  return normalized;
}

function sortMenuItemsForRole(items, roleKey) {
  const company = currentCompany();
  const layouts = companyMenuLayouts(company);
  const order = normalizeMenuOrderForActiveItems(layouts[roleKey], items, roleKey);
  return order.map((label) => items.find(([itemLabel]) => itemLabel === label)).filter(Boolean);
}

function activeMenuItemsForRole(roleKey) {
  const items = defaultOfficeNavItems().filter(([, , , moduleKey]) => !moduleKey || isCompanyModuleActive(moduleKey));
  return sortMenuItemsForRole(items, roleKey);
}

function officeFavoriteLabels() {
  const user = currentUser();
  if (!user) return [];
  user.menu_favorites = Array.isArray(user.menu_favorites) ? user.menu_favorites : [];
  return user.menu_favorites;
}

function officeFavoriteItems() {
  const favorites = officeFavoriteLabels();
  if (!favorites.length) return [];
  const active = activeMenuItemsForRole(currentMenuRoleKey());
  return favorites.map((label) => active.find(([itemLabel]) => itemLabel === label)).filter(Boolean);
}

function setUserMenuFavorite(label, enabled) {
  const user = currentUser();
  if (!user) return;
  const activeLabels = activeMenuItemsForRole(currentMenuRoleKey()).map(([itemLabel]) => itemLabel);
  if (!activeLabels.includes(label)) return;
  user.menu_favorites = officeFavoriteLabels().filter((item) => item !== label);
  if (enabled) user.menu_favorites.push(label);
  user.updated_at = new Date().toISOString();
  saveState();
  render();
}

function menuLayoutDrafts() {
  ui.menuLayoutDrafts = ui.menuLayoutDrafts || {};
  return ui.menuLayoutDrafts;
}

function menuLayoutDraft(roleKey) {
  const company = currentCompany();
  const activeItems = defaultOfficeNavItems().filter(([, , , moduleKey]) => !moduleKey || isCompanyModuleActive(moduleKey));
  const layouts = companyMenuLayouts(company);
  const drafts = menuLayoutDrafts();
  const draftKey = `${currentCompanyId() || "platform"}:${roleKey}`;
  if (!Array.isArray(drafts[draftKey])) {
    drafts[draftKey] = normalizeMenuOrderForActiveItems(layouts[roleKey], activeItems, roleKey);
  } else {
    drafts[draftKey] = normalizeMenuOrderForActiveItems(drafts[draftKey], activeItems, roleKey);
  }
  return drafts[draftKey];
}

function moveMenuLayoutItem(roleKey, label, direction) {
  const draft = menuLayoutDraft(roleKey);
  const index = draft.indexOf(label);
  const nextIndex = index + Number(direction || 0);
  if (index < 0 || nextIndex < 0 || nextIndex >= draft.length) return;
  draft.splice(index, 1);
  draft.splice(nextIndex, 0, label);
  render();
}

function dragMenuLayoutStart(event, roleKey, label) {
  ui.menuDrag = { roleKey, label };
  if (event?.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", label);
  }
}

function dropMenuLayoutItem(event, roleKey, targetLabel) {
  event?.preventDefault?.();
  const sourceLabel = ui.menuDrag?.label || event?.dataTransfer?.getData("text/plain");
  if (!sourceLabel || sourceLabel === targetLabel) return;
  const draft = menuLayoutDraft(roleKey);
  const sourceIndex = draft.indexOf(sourceLabel);
  const targetIndex = draft.indexOf(targetLabel);
  if (sourceIndex < 0 || targetIndex < 0) return;
  draft.splice(sourceIndex, 1);
  draft.splice(targetIndex, 0, sourceLabel);
  ui.menuDrag = null;
  render();
}

function saveMenuLayout(roleKey) {
  if (!isCompanyAdmin() && !isPlatformSuperAdmin()) return alert("Geen toegang.");
  const company = currentCompany();
  if (!company) return alert("Geen bedrijf gevonden.");
  const layouts = companyMenuLayouts(company);
  layouts[roleKey] = menuLayoutDraft(roleKey).slice();
  company.updated_at = new Date().toISOString();
  saveState();
  alert("Menuvolgorde opgeslagen.");
  render();
}

function resetMenuLayout(roleKey) {
  const company = currentCompany();
  const layouts = companyMenuLayouts(company);
  delete layouts[roleKey];
  const draftKey = `${currentCompanyId() || "platform"}:${roleKey}`;
  delete menuLayoutDrafts()[draftKey];
  saveState();
  render();
}

function renderMenuLayoutRole(roleKey, title) {
  const draft = menuLayoutDraft(roleKey);
  const favorites = officeFavoriteLabels();
  return `<section class="panel subtle-panel menu-layout-role">
    <div class="article-head">
      <div><h3>${escapeHtml(title)}</h3><p>Alleen actieve modules zijn sorteerbaar. Nieuwe modules komen automatisch onderaan.</p></div>
      <div class="button-row">
        <button class="btn secondary" type="button" onclick="resetMenuLayout('${roleKey}')">Reset naar standaardvolgorde</button>
        <button class="btn success" type="button" onclick="saveMenuLayout('${roleKey}')">Volgorde opslaan</button>
      </div>
    </div>
    <div class="menu-sort-list">
      ${draft.map((label, index) => `<div class="menu-sort-row" draggable="true" ondragstart="dragMenuLayoutStart(event, '${roleKey}', '${escapeAttr(label)}')" ondragover="event.preventDefault()" ondrop="dropMenuLayoutItem(event, '${roleKey}', '${escapeAttr(label)}')">
        <span class="drag-handle">☰</span>
        <strong>${escapeHtml(label)}</strong>
        <label class="menu-favorite-toggle"><input type="checkbox" ${favorites.includes(label) ? "checked" : ""} onchange="setUserMenuFavorite('${escapeAttr(label)}', this.checked)" /> Favoriet</label>
        <button class="btn secondary" type="button" ${index === 0 ? "disabled" : ""} onclick="moveMenuLayoutItem('${roleKey}', '${escapeAttr(label)}', -1)">Omhoog</button>
        <button class="btn secondary" type="button" ${index === draft.length - 1 ? "disabled" : ""} onclick="moveMenuLayoutItem('${roleKey}', '${escapeAttr(label)}', 1)">Omlaag</button>
      </div>`).join("")}
    </div>
  </section>`;
}

function renderMenuLayoutSettings() {
  return `<section class="panel menu-layout-settings">
    <div class="article-head">
      <div>
        <h2>Menu-indeling</h2>
        <p>Bepaal per rol de volgorde van actieve modules in het linker menu. Favorieten verschijnen bovenaan als snelle toegang.</p>
      </div>
    </div>
    ${renderMenuLayoutRole("company_admin", "Company Admin")}
    ${renderMenuLayoutRole("office", "Kantoor")}
    ${renderMenuLayoutRole("mechanic", "Monteur")}
  </section>`;
}

function officeSectionToTab(section = "") {
  const map = {
    dashboard: "Dashboard",
    projects: "Projecten",
    workorders: "Werkbonnen",
    appliances: "Toestellendatabase",
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
    "van-stock": "Busvoorraad",
    busvoorraad: "Busvoorraad",
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
    appliances: "workorders",
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
    "van-stock": "van_stock",
    busvoorraad: "van_stock",
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
    Toestellendatabase: "workorders",
    Planning: "planning",
    Klanten: "customers",
    Offertes: "quotes",
    Facturen: "invoices",
    "E-mail": "email",
    Rapportages: "reports",
    Voorraad: "inventory",
    Magazijn: "warehouse",
    Busvoorraad: "van_stock",
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
  if (ui.dashboardTab === "Toestellendatabase") return renderApplianceDatabase();
  if (ui.dashboardTab === "Planning") return renderPlanning();
  if (ui.dashboardTab === "Klanten") return renderCustomers();
  if (ui.dashboardTab === "Offertes") return renderQuotes();
  if (ui.dashboardTab === "Facturen") return renderPaymentsAdmin();
  if (ui.dashboardTab === "E-mail") return renderEmailPortal();
  if (ui.dashboardTab === "Rapportages") return renderOfficeReports();
  if (ui.dashboardTab === "Voorraad") return renderPrices();
  if (ui.dashboardTab === "Magazijn") return renderWarehouseModule();
  if (ui.dashboardTab === "Busvoorraad") return renderVanStockModule();
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
  if (ui.dashboardTab === "Instellingen") return `${renderCompanySettings()}${renderMenuLayoutSettings()}${renderChecklistSettings()}`;
  return renderOfficeDashboard();
}

function applianceCategories() {
  return ["CV-ketel", "Geiser", "Boiler", "Hybride warmtepomp", "Anders"];
}

function applianceBrands() {
  return ["Remeha", "Intergas", "Nefit", "Vaillant", "Atag", "Itho Daalderop", "Bosch", "AWB", "Brink", "Anders"];
}

function applianceModelsForBrand(brand) {
  const models = {
    Remeha: ["Avanta 35C", "Avanta 28C", "Tzerra Ace", "Calenta Ace", "Quinta Ace", "Anders"],
    Intergas: ["HRE 28/24", "HRE 36/30", "Xtreme 36", "Kombi Kompakt", "Anders"],
    Nefit: ["TrendLine", "ProLine", "TopLine", "EcomLine", "Anders"],
    Vaillant: ["ecoTEC plus", "ecoTEC classic", "VHR", "Anders"],
    Atag: ["i-Serie", "E-Serie", "Q-Serie", "Anders"],
    "Itho Daalderop": ["Base Cube", "HP Cube", "Amber", "Anders"],
    Bosch: ["Condens 2300", "Condens 3000", "HRC", "Anders"],
    AWB: ["ThermoMaster", "ThermoElegance", "Anders"],
    Brink: ["Elan", "Flair", "Anders"],
  };
  return models[brand] || ["Anders"];
}

function renderGasApplianceRegistration(project, workOrder) {
  const appliance = workOrder.appliance || {};
  const selectedBrand = appliance.brand || "Remeha";
  const models = applianceModelsForBrand(selectedBrand);
  return `<section class="panel subtle-panel appliance-registration">
    <h3>Gastoestelgegevens</h3>
    <p class="muted">Deze gegevens worden opgeslagen bij klant, adres, werkbon en de toestellendatabase.</p>
    <div class="appliance-quick-grid">
      <label>Merk toestel * <select required onchange="setWorkOrderField('${project.id}', 'appliance.brand', this.value)">
        <option value="">Kies merk...</option>
        ${applianceBrands().map((brand) => `<option value="${brand}" ${selectedBrand === brand ? "selected" : ""}>${brand}</option>`).join("")}
      </select></label>
      <label>Type toestel <select onchange="setWorkOrderField('${project.id}', 'appliance.model', this.value)">
        <option value="">Kies type...</option>
        ${models.map((model) => `<option value="${model}" ${appliance.model === model ? "selected" : ""}>${model}</option>`).join("")}
      </select></label>
      <label>Serienummer <input value="${escapeAttr(appliance.serial_number || "")}" placeholder="___________" onchange="setWorkOrderField('${project.id}', 'appliance.serial_number', this.value)" /></label>
      <label>Foto typeplaatje <span class="btn secondary file-button">Foto maken<input type="file" accept="image/*" capture="environment" onchange="addWorkOrderPhotos('${project.id}', this, 'typeplaatje')" /></span></label>
    </div>
    <details class="appliance-more-fields">
      <summary>Meer toestelgegevens</summary>
      <div class="form-grid">
      <label>Bouwjaar <input type="number" min="1950" max="2100" value="${escapeAttr(appliance.build_year || "")}" onchange="setWorkOrderField('${project.id}', 'appliance.build_year', this.value)" /></label>
      <label>Toestelcategorie
        <select onchange="setWorkOrderField('${project.id}', 'appliance.category', this.value)">
          <option value="">Kies...</option>
          ${applianceCategories().map((category) => `<option value="${category}" ${appliance.category === category ? "selected" : ""}>${category}</option>`).join("")}
        </select>
      </label>
      <label>Werkzaamheden <textarea rows="3" onchange="setWorkOrderField('${project.id}', 'appliance.work_performed', this.value)">${escapeHtml(appliance.work_performed || "")}</textarea></label>
      <label>Opmerkingen <textarea rows="3" onchange="setWorkOrderField('${project.id}', 'appliance.notes', this.value)">${escapeHtml(appliance.notes || "")}</textarea></label>
      </div>
    </details>
  </section>`;
}

function customerForApplianceProject(project) {
  return customerForProject(project) || (project.customer_id ? byId(state.customers || [], project.customer_id) : null);
}

function projectAddressParts(project) {
  const customer = customerForApplianceProject(project);
  return {
    address: customer?.address || project.address || "",
    postal_code: customer?.postal_code || project.postal_code || "",
    city: customer?.city || project.city || "",
  };
}

function applianceFingerprint(companyId, appliance) {
  return [
    companyId,
    String(appliance.serial_number || "").trim().toLowerCase(),
    String(appliance.brand || "").trim().toLowerCase(),
    String(appliance.model || "").trim().toLowerCase(),
  ].join("|");
}

function persistGasApplianceRegistration(project) {
  const workOrder = ensureWorkOrder(project);
  if (!project || workOrder.gasApplianceWork !== "ja") return null;
  state.appliances = state.appliances || [];
  const companyId = strictRecordCompanyId(project);
  const customer = customerForApplianceProject(project);
  const address = projectAddressParts(project);
  const mechanicId = project.assignedMechanicId || project.assigned_mechanic_id || project.mechanicId || "";
  const source = {
    ...workOrder.appliance,
    company_id: companyId,
    companyId: companyId,
    customer_id: customer?.id || project.customer_id || project.customerId || "",
    customer_name: customer?.customer_name || project.customer || project.customer_name || "",
    address: address.address,
    postal_code: address.postal_code,
    city: address.city,
    project_id: project.id,
    workorder_id: project.id,
    workorder_number: workorderNumber(project),
    mechanic_id: mechanicId,
    mechanic_name: mechanicNameById(mechanicId) || project.technician || "",
    service_date: project.completedAt || project.completed_at || project.date || new Date().toISOString(),
    work_type: workOrder.appliance?.work_performed || workOrder.solution || project.projectName || "",
    last_notes: workOrder.appliance?.notes || "",
    active: true,
  };
  const fingerprint = applianceFingerprint(companyId, source);
  let appliance = state.appliances.find((row) => applianceFingerprint(strictRecordCompanyId(row), row) === fingerprint);
  const now = new Date().toISOString();
  if (!appliance) {
    appliance = {
      id: uid("appliance"),
      created_at: now,
      service_history: [],
    };
    state.appliances.push(appliance);
  }
  Object.assign(appliance, source, {
    updated_at: now,
    last_service_date: source.service_date,
    service_count: Number(appliance.service_count || 0) + 1,
  });
  const historyEntry = {
    id: uid("appliance-service"),
    project_id: project.id,
    workorder_id: project.id,
    workorder_number: workorderNumber(project),
    mechanic_id: mechanicId,
    mechanic_name: source.mechanic_name,
    service_date: source.service_date,
    work_type: source.work_type,
    notes: source.last_notes,
    created_at: now,
  };
  appliance.service_history = [...(appliance.service_history || []).filter((entry) => entry.workorder_id !== project.id), historyEntry];
  workOrder.appliance_id = appliance.id;
  workOrder.appliance_snapshot = { ...source, appliance_id: appliance.id, saved_at: now };
  project.appliance_id = appliance.id;
  if (customer) {
    customer.appliances = customer.appliances || [];
    if (!customer.appliances.some((item) => item.id === appliance.id)) {
      customer.appliances.push({
        id: appliance.id,
        brand: appliance.brand,
        model: appliance.model,
        serial_number: appliance.serial_number,
        category: appliance.category,
        address: appliance.address,
        postal_code: appliance.postal_code,
        city: appliance.city,
      });
    }
    customer.updated_at = now;
  }
  return appliance;
}

function applianceRows() {
  return companyScoped(state.appliances || []).filter((appliance) => appliance.active !== false);
}

function applianceFilterValue(key) {
  ui.applianceFilters = ui.applianceFilters || {};
  return String(ui.applianceFilters[key] || "");
}

function setApplianceFilter(key, value) {
  ui.applianceFilters = ui.applianceFilters || {};
  ui.applianceFilters[key] = value || "";
  render();
}

function filteredAppliances() {
  const filters = ui.applianceFilters || {};
  const matches = (value, query) => !query || String(value || "").toLowerCase().includes(String(query || "").toLowerCase());
  return applianceRows().filter((row) =>
    matches(row.brand, filters.brand) &&
    matches(row.model, filters.model) &&
    matches(row.serial_number, filters.serial) &&
    matches(row.build_year, filters.year) &&
    matches(row.customer_name, filters.customer) &&
    matches(`${row.address || ""} ${row.postal_code || ""} ${row.city || ""}`, filters.address) &&
    matches(row.mechanic_name, filters.mechanic) &&
    matches(row.service_date, filters.date) &&
    matches(row.work_type, filters.work_type)
  );
}

function topApplianceCounts(rows, field, limit = 10) {
  const counts = new Map();
  rows.forEach((row) => {
    const key = String(row[field] || "Onbekend").trim() || "Onbekend";
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function renderApplianceCountTable(title, rows) {
  return `<section class="panel subtle-panel"><h3>${escapeHtml(title)}</h3>
    ${rows.length ? `<div class="table-wrap"><table><thead><tr><th>Waarde</th><th>Aantal</th></tr></thead><tbody>${rows.map(([label, count]) => `<tr><td>${escapeHtml(label)}</td><td>${count}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Geen data.</p>`}
  </section>`;
}

function renderApplianceDatabase() {
  const rows = filteredAppliances();
  const allRows = applianceRows();
  const categoryCounts = topApplianceCounts(rows, "category", 20);
  const faultCounts = topApplianceCounts(rows.filter((row) => /storing|defect|fout|lekkage/i.test(row.work_type || row.last_notes || "")), "brand", 10);
  return `<section class="office-page-head">
    <div><h2>Toestellendatabase</h2><p>Gastoestellen per klant, adres, werkbon en onderhoudshistorie.</p></div>
    <span class="badge">${rows.length}/${allRows.length} toestellen</span>
  </section>
  <section class="panel">
    <h2>Filters</h2>
    <div class="form-grid">
      <label>Merk <input value="${escapeAttr(applianceFilterValue("brand"))}" oninput="setApplianceFilter('brand', this.value)" /></label>
      <label>Type <input value="${escapeAttr(applianceFilterValue("model"))}" oninput="setApplianceFilter('model', this.value)" /></label>
      <label>Serienummer <input value="${escapeAttr(applianceFilterValue("serial"))}" oninput="setApplianceFilter('serial', this.value)" /></label>
      <label>Bouwjaar <input value="${escapeAttr(applianceFilterValue("year"))}" oninput="setApplianceFilter('year', this.value)" /></label>
      <label>Klant <input value="${escapeAttr(applianceFilterValue("customer"))}" oninput="setApplianceFilter('customer', this.value)" /></label>
      <label>Adres <input value="${escapeAttr(applianceFilterValue("address"))}" oninput="setApplianceFilter('address', this.value)" /></label>
      <label>Monteur <input value="${escapeAttr(applianceFilterValue("mechanic"))}" oninput="setApplianceFilter('mechanic', this.value)" /></label>
      <label>Datum werkzaamheden <input value="${escapeAttr(applianceFilterValue("date"))}" oninput="setApplianceFilter('date', this.value)" /></label>
      <label>Type werkzaamheden <input value="${escapeAttr(applianceFilterValue("work_type"))}" oninput="setApplianceFilter('work_type', this.value)" /></label>
    </div>
  </section>
  <section class="stats office-kpis">
    <div class="stat-card"><span>Toestellen</span><strong>${rows.length}</strong></div>
    <div class="stat-card"><span>Merken</span><strong>${new Set(rows.map((row) => row.brand).filter(Boolean)).size}</strong></div>
    <div class="stat-card"><span>Types</span><strong>${new Set(rows.map((row) => row.model).filter(Boolean)).size}</strong></div>
    <div class="stat-card"><span>Storingen</span><strong>${rows.filter((row) => /storing|defect|fout|lekkage/i.test(row.work_type || row.last_notes || "")).length}</strong></div>
  </section>
  <section class="appliance-report-grid">
    ${renderApplianceCountTable("Top 10 meest voorkomende merken", topApplianceCounts(rows, "brand"))}
    ${renderApplianceCountTable("Top 10 meest voorkomende types", topApplianceCounts(rows, "model"))}
    ${renderApplianceCountTable("Aantal werkzaamheden per toesteltype", categoryCounts)}
    ${renderApplianceCountTable("Aantal storingen per merk/type", faultCounts)}
  </section>
  <section class="panel">
    <h2>Toestellen</h2>
    <div class="table-wrap"><table><thead><tr><th>Merk</th><th>Type</th><th>Serienummer</th><th>Bouwjaar</th><th>Categorie</th><th>Klant</th><th>Adres</th><th>Monteur</th><th>Datum</th><th>Werkzaamheden</th><th>Historie</th></tr></thead><tbody>
      ${rows.map((row) => `<tr>
        <td>${escapeHtml(row.brand || "-")}</td>
        <td>${escapeHtml(row.model || "-")}</td>
        <td>${escapeHtml(row.serial_number || "-")}</td>
        <td>${escapeHtml(row.build_year || "-")}</td>
        <td>${escapeHtml(row.category || "-")}</td>
        <td>${escapeHtml(row.customer_name || "-")}</td>
        <td>${escapeHtml(`${row.address || ""} ${row.postal_code || ""} ${row.city || ""}`.trim() || "-")}</td>
        <td>${escapeHtml(row.mechanic_name || "-")}</td>
        <td>${escapeHtml(safeDate(row.service_date || row.last_service_date))}</td>
        <td>${escapeHtml(row.work_type || "-")}</td>
        <td>${(row.service_history || []).length}</td>
      </tr>`).join("")}
    </tbody></table></div>
  </section>
  <section class="panel">
    <h2>Onderhoudshistorie per toestel</h2>
    ${rows.map((row) => `<details class="appliance-history"><summary>${escapeHtml(row.brand || "-")} ${escapeHtml(row.model || "")} - ${escapeHtml(row.serial_number || "-")}</summary>
      ${(row.service_history || []).length ? `<div class="table-wrap"><table><thead><tr><th>Datum</th><th>Werkbon</th><th>Monteur</th><th>Werkzaamheden</th><th>Opmerkingen</th></tr></thead><tbody>${row.service_history.map((entry) => `<tr><td>${escapeHtml(safeDate(entry.service_date))}</td><td>${escapeHtml(entry.workorder_number || entry.workorder_id || "-")}</td><td>${escapeHtml(entry.mechanic_name || "-")}</td><td>${escapeHtml(entry.work_type || "-")}</td><td>${escapeHtml(entry.notes || "-")}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Geen historie.</p>`}
    </details>`).join("")}
  </section>`;
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

const baseCompleteProject = completeProject;
completeProject = function completeProjectWithApplianceRegistration(projectId) {
  const project = byId(state.projects || [], projectId);
  if (!project) return baseCompleteProject(projectId);
  const beforeErrors = validateWorkOrder(project);
  if (beforeErrors.length) return baseCompleteProject(projectId);
  persistGasApplianceRegistration(project);
  saveState();
  return baseCompleteProject(projectId);
};

const USER_PERMISSION_GROUPS = [
  ["Planning rechten", [
    ["can_create_own_appointments", "Mag eigen afspraken maken"],
    ["can_edit_own_planning", "Mag eigen planning aanpassen"],
  ]],
  ["Klantrechten", [
    ["can_create_customers", "Klanten aanmaken"],
    ["can_edit_customers", "Klanten bewerken"],
  ]],
  ["Werkbon rechten", [
    ["can_view_workorders", "Werkbonnen bekijken"],
    ["can_open_workorders", "Werkbonnen openen"],
    ["can_create_workorders", "Werkbonnen aanmaken"],
    ["can_edit_workorders", "Werkbonnen bewerken"],
    ["can_delete_workorders", "Werkbonnen verwijderen"],
    ["can_close_workorders", "Werkbonnen afsluiten"],
    ["can_send_workorders_to_customer", "Werkbonnen versturen naar klant"],
    ["can_export_workorders_pdf", "Werkbonnen exporteren als PDF"],
    ["can_delete_photos", "Foto's verwijderen"],
  ]],
  ["Offerte & betaling", [
    ["can_create_quotes", "Offertes maken"],
    ["can_register_payments", "Betalingen registreren"],
  ]],
  ["Voorraad", [
    ["can_manage_inventory", "Voorraad beheren"],
  ]],
  ["Busvoorraad", [
    ["can_view_own_van_stock", "Eigen busvoorraad bekijken"],
    ["can_count_van_stock", "Businventarisatie uitvoeren"],
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
  if (String(field || "").includes("_workorders") && userRole(user) === ROLES.COMPANY_ADMIN) return user?.[field] !== false;
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

function hasWorkorderPermission(field, user = currentUser()) {
  if (!user) return false;
  if (isPlatformSuperAdmin() && !isSupportMode()) return true;
  if (userRole(user) === ROLES.COMPANY_ADMIN) return permissionValue(user, field);
  if (userRole(user) !== ROLES.MECHANIC) return false;
  return permissionValue(user, field);
}

function canUseWorkorder(project, field) {
  if (!project || !isSameCompany(project)) return false;
  if (!hasWorkorderPermission(field)) return false;
  if (isCompanyAdmin() || isPlatformSuperAdmin()) return true;
  return project.assignedMechanicId === currentUser()?.id ||
    project.assigned_mechanic_id === currentUser()?.id ||
    project.mechanicId === currentUser()?.id ||
    project.mechanic_id === currentUser()?.id ||
    project.technician === currentUser()?.name;
}

function canViewWorkorder(project) {
  return canUseWorkorder(project, "can_view_workorders");
}

function canOpenWorkorder(project) {
  return canUseWorkorder(project, "can_open_workorders");
}

function canAccessProject(project) {
  return canOpenWorkorder(project);
}

function visibleProjects() {
  return (state.projects || []).filter((project) => canViewWorkorder(project));
}

function openWorkorderDeniedMessage() {
  return `<div class="panel empty">Je hebt geen rechten om deze werkbon te openen.</div>`;
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
  const defaults = { can_view_workorders: true, can_open_workorders: true, can_close_workorders: true };
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

function userAccordionState() {
  ui.openUserCards = ui.openUserCards || {};
  return ui.openUserCards;
}

function toggleUserCard(userId) {
  const open = userAccordionState();
  open[userId] = !open[userId];
  render();
}

function userRoleFilter() {
  return ui.userRoleFilter || "ALL";
}

function setUserRoleFilter(value) {
  ui.userRoleFilter = value || "ALL";
  render();
}

function userManagementSearchText(user) {
  const companyName = byId(state.companies || [], strictRecordCompanyId(user))?.name || "";
  return [user.name, user.email, userRole(user), roleLabel(userRole(user)), companyName].join(" ").toLowerCase();
}

function filterUsersForManagement(users) {
  const search = platformUserSearch();
  const roleFilter = userRoleFilter();
  return users
    .filter((user) => roleFilter === "ALL" || userRole(user) === roleFilter)
    .filter((user) => !search || userManagementSearchText(user).includes(search));
}

function renderUserFilters() {
  const companies = platformCompanies().filter((company) => company.active !== false);
  return `<section class="panel user-filter-panel">
    <div class="user-permission-grid">
      ${isPlatformSuperAdmin() ? `<label>Bedrijfsfilter <select onchange="setPlatformUserCompanyFilter(this.value)"><option value="ALL">Alle bedrijven</option>${companies.map((company) => `<option value="${company.id}" ${platformUserCompanyFilter() === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}</select></label>` : ""}
      <label>Zoeken <input value="${escapeAttr(ui.platformUserSearch || "")}" placeholder="Naam, e-mail of rol" oninput="setPlatformUserSearch(this.value)" /></label>
      <label>Rol <select onchange="setUserRoleFilter(this.value)">
        <option value="ALL" ${userRoleFilter() === "ALL" ? "selected" : ""}>Alle rollen</option>
        <option value="${ROLES.COMPANY_ADMIN}" ${userRoleFilter() === ROLES.COMPANY_ADMIN ? "selected" : ""}>Company Admin / Kantoor</option>
        <option value="${ROLES.MECHANIC}" ${userRoleFilter() === ROLES.MECHANIC ? "selected" : ""}>Monteur</option>
      </select></label>
    </div>
  </section>`;
}

function renderUserCard(user) {
  syncUserPermissionAliases(user);
  const role = userRole(user);
  const companyId = strictRecordCompanyId(user);
  const company = byId(state.companies || [], companyId);
  const roleOptions = roleOptionsForUserManagement();
  const companyOptions = platformCompanies().filter((company) => company.active !== false);
  const isOpen = userAccordionState()[user.id] === true;
  return `<article class="user-card ${isOpen ? "open" : "collapsed"}">
    <button class="user-card-summary" type="button" onclick="toggleUserCard('${user.id}')">
      <span class="rights-caret">${isOpen ? "▾" : "▸"}</span>
      <span class="user-summary-main"><strong>${escapeHtml(user.name || "-")}</strong><small>${escapeHtml(user.email || "-")}</small></span>
      <span class="badge">${escapeHtml(roleLabel(role))}</span>
      <span class="badge ${user.active !== false ? "ok" : "danger"}">${user.active !== false ? "Actief" : "Inactief"}</span>
      <span class="user-toggle-label">${isOpen ? "Inklappen" : "Uitklappen"}</span>
    </button>
    ${isOpen ? `<div class="user-card-expanded">
      <div class="button-row user-actions">
        <button class="btn secondary" type="button" onclick="saveUserRow()">Opslaan</button>
        <button class="btn warn" type="button" onclick="toggleUserActive('${user.id}')">${user.active !== false ? "Deactiveren" : "Activeren"}</button>
        <button class="btn danger" type="button" onclick="requestDeleteUser('${user.id}')">Verwijderen</button>
      </div>
      <section class="user-permission-section">
        <h4>Basisgegevens</h4>
        <div class="user-permission-grid">
          <label>Actief <select onchange="updateUser('${user.id}', 'active', this.value === 'true')"><option value="true" ${user.active !== false ? "selected" : ""}>Ja</option><option value="false" ${user.active === false ? "selected" : ""}>Nee</option></select></label>
          <label>Naam <input value="${escapeAttr(user.name || "")}" onchange="updateUser('${user.id}', 'name', this.value)" /></label>
          <label>E-mail <input type="email" value="${escapeAttr(user.email || "")}" onchange="updateUser('${user.id}', 'email', this.value)" /></label>
          <label>Rol <select onchange="updateUser('${user.id}', 'role', this.value)">${roleOptions.map(([value, label]) => `<option value="${value}" ${role === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>
          ${isPlatformSuperAdmin() ? `<label>Bedrijf <select onchange="updateUser('${user.id}', 'company_id', this.value)">${companyOptions.map((company) => `<option value="${company.id}" ${companyId === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}</select></label>` : `<label>Bedrijf <input value="${escapeAttr(company?.name || companyId || "-")}" readonly /></label>`}
        </div>
      </section>
      ${renderPermissionGroups(user, (field) => `updateUser('${user.id}', '${field}', this.value === 'true')`)}
    </div>` : ""}
  </article>`;
}

function renderUsers() {
  const baseUsers = isPlatformSuperAdmin() ? platformManagedUsers() : visibleUsersForUserManagement();
  const users = filterUsersForManagement(baseUsers);
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
  if (role === ROLES.COMPANY_ADMIN) {
    allUserPermissionFields()
      .filter((field) => String(field).includes("_workorders"))
      .forEach((field) => setUserPermissionValue(user, field, true));
  }
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
    if (value === ROLES.COMPANY_ADMIN) {
      allUserPermissionFields()
        .filter((permission) => String(permission).includes("_workorders"))
        .forEach((permission) => setUserPermissionValue(user, permission, true));
    }
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

function normalizeCompanyBusinessDetails(company) {
  if (!company) return null;
  normalizeCompanyBranding(company);
  company.website = company.website || company.company_website || company.branding?.website || "";
  company.company_website = company.company_website || company.website || "";
  company.address = company.address || company.company_address || "";
  company.company_address = company.company_address || company.address || "";
  company.kvk_number = company.kvk_number || company.kvk || company.chamber_of_commerce || "";
  company.vat_number = company.vat_number || company.btw_number || company.btw || "";
  company.btw_number = company.btw_number || company.vat_number || "";
  company.max_logo_size_mb = Number(company.max_logo_size_mb ?? company.logo_max_size_mb ?? 5);
  company.branding = {
    ...(company.branding || {}),
    website: company.website,
    address: company.address,
    kvkNumber: company.kvk_number,
    vatNumber: company.vat_number,
  };
  return company;
}

function renderPdfBrandHeader(company) {
  normalizeCompanyBusinessDetails(company);
  const logo = companyLogoSrc(company);
  const contactLine = [company.phone, company.email || company.contact_email, company.website].filter(Boolean).join(" | ");
  const registryLine = [company.kvk_number ? `KvK: ${company.kvk_number}` : "", company.vat_number ? `BTW: ${company.vat_number}` : ""].filter(Boolean).join(" | ");
  return `<div class="pdf-brand">
    ${logo ? `<img src="${escapeAttr(logo)}" alt="${escapeAttr(company?.name || "Logo")}" />` : `<div class="pdf-brand-fallback">${escapeHtml(companyFallbackMark(company))}</div>`}
    <div>
      <h1>${escapeHtml(company?.name || "WerkbonSysteem.nl")}</h1>
      <p>${escapeHtml(company?.address || company?.company_address || "")}</p>
      <p>${escapeHtml(contactLine)}</p>
      <p>${escapeHtml(registryLine)}</p>
    </div>
  </div>`;
}

function companyHasLogo(company) {
  return Boolean(companyLogoSrc(company));
}

function updateCompanyBrandingValue(companyId, field, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || (!isPlatformSuperAdmin() && strictRecordCompanyId(company) !== currentCompanyId())) return alert("Geen toegang.");
  const textFields = ["name", "website", "company_website", "address", "company_address", "kvk_number", "vat_number", "btw_number"];
  if (field === "name") {
    company.name = String(value || "").trim() || company.name;
  } else if (field === "primary_color" || field === "secondary_color") {
    company[field] = value || (field === "primary_color" ? "#08172e" : "#d6a73c");
  } else if (field === "max_logo_size_mb") {
    company.max_logo_size_mb = Math.max(1, Number(value || 5));
  } else if (textFields.includes(field)) {
    company[field] = String(value || "").trim();
  } else {
    company[field] = value;
  }
  if (field === "company_website") company.website = company.company_website;
  if (field === "website") company.company_website = company.website;
  if (field === "company_address") company.address = company.company_address;
  if (field === "address") company.company_address = company.address;
  if (field === "btw_number") company.vat_number = company.btw_number;
  if (field === "vat_number") company.btw_number = company.vat_number;
  company.branding_updated_at = new Date().toISOString();
  normalizeCompanyBusinessDetails(company);
  if (isPlatformSuperAdmin()) logPlatformAction("bedrijfsbranding gewijzigd", company.id, `${field}: ${value}`);
  saveState();
  render();
}

function renderCompanyBrandingPanel(company, platform = false) {
  normalizeCompanyBusinessDetails(company);
  const change = (field) => platform ? `updateCompanyBrandingValue('${company.id}', '${field}', this.value)` : `updateCurrentCompanyBranding('${field}', this.value)`;
  const logoPresent = companyHasLogo(company);
  return `<section class="panel branding-panel">
    <div class="article-head">
      <div>
        <h2>Bedrijfsgegevens</h2>
        <p>White-label branding voor portaal, werkbonnen, offertes, facturen, rapportages, e-mails, klantportaal en PDF exports.</p>
      </div>
      <span class="badge ${logoPresent ? "ok" : "warn"}">${logoPresent ? "Logo aanwezig" : "Geen logo"}</span>
    </div>
    <section class="company-logo-manager">
      <div class="company-logo-preview">
        ${renderBrandMark(company, "branding-logo-preview")}
        <div>
          <strong>Bedrijfslogo</strong>
          <span>PNG, JPG, JPEG, SVG of WEBP. Maximaal ${Number(company.max_logo_size_mb || 5)} MB.</span>
        </div>
      </div>
      <div class="button-row">
        <label class="btn secondary file-button">Upload logo<input type="file" accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp" onchange="updateCompanyLogo('${company.id}', this.files[0])" /></label>
        ${logoPresent ? `<button class="btn danger" type="button" onclick="removeCompanyLogo('${company.id}')">Logo verwijderen</button>` : ""}
        ${platform ? `<button class="btn warn" type="button" onclick="resetCompanyBranding('${company.id}')">Branding resetten</button>` : ""}
      </div>
    </section>
    <div class="form-grid">
      <label>Bedrijfsnaam <input value="${escapeAttr(company.name || "")}" onchange="${change("name")}" /></label>
      <label>Primaire huisstijl kleur <input type="color" value="${escapeAttr(company.primary_color || "#08172e")}" onchange="${change("primary_color")}" /></label>
      <label>Secundaire huisstijl kleur <input type="color" value="${escapeAttr(company.secondary_color || "#d6a73c")}" onchange="${change("secondary_color")}" /></label>
      <label>Max logo grootte MB <input type="number" min="1" max="20" value="${Number(company.max_logo_size_mb || 5)}" onchange="${change("max_logo_size_mb")}" /></label>
      <label>Bedrijfswebsite <input value="${escapeAttr(company.website || "")}" placeholder="https://bedrijf.nl" onchange="${change("website")}" /></label>
      <label>Bedrijfsadres <input value="${escapeAttr(company.address || "")}" placeholder="Straat 1, Plaats" onchange="${change("address")}" /></label>
      <label>KvK nummer <input value="${escapeAttr(company.kvk_number || "")}" onchange="${change("kvk_number")}" /></label>
      <label>BTW nummer <input value="${escapeAttr(company.vat_number || "")}" onchange="${change("vat_number")}" /></label>
    </div>
    <div class="branding-preview">
      ${renderBrandMark(company, "branding-logo-preview")}
      <div>
        <strong>${escapeHtml(company.name || "-")}</strong>
        <span>${escapeHtml(company.website || "Geen website")} - ${escapeHtml(company.address || "Geen adres")}</span>
        <span>Laatst gewijzigd: ${escapeHtml(String(company.branding_updated_at || "-").replace("T", " ").slice(0, 16))}</span>
      </div>
    </div>
  </section>`;
}

function platformCompaniesSearchText() {
  return String(ui.platformCompaniesSearch || "").trim().toLowerCase();
}

function setPlatformCompaniesSearch(value) {
  ui.platformCompaniesSearch = value || "";
  render();
}

function platformCompaniesOpenState() {
  ui.platformCompaniesOpen = ui.platformCompaniesOpen || {};
  return ui.platformCompaniesOpen;
}

function togglePlatformCompanyDetails(companyId) {
  const open = platformCompaniesOpenState();
  open[companyId] = !open[companyId];
  render();
}

function setAllPlatformCompaniesOpen(openAll) {
  const open = platformCompaniesOpenState();
  Object.keys(open).forEach((key) => delete open[key]);
  if (openAll) filteredPlatformCompanies().forEach((company) => {
    open[company.id] = true;
  });
  render();
}

function platformCompanySearchHaystack(company) {
  normalizeCompanyBusinessDetails(company);
  const users = companyUsers(company.id).map((user) => `${user.email || ""} ${user.name || ""}`).join(" ");
  return [
    company.name,
    company.slug,
    company.domain,
    company.subdomain,
    company.email,
    company.contact_email,
    company.kvk_number,
    company.kvk,
    company.chamber_of_commerce,
    users,
  ].filter(Boolean).join(" ").toLowerCase();
}

function filteredPlatformCompanies() {
  const search = platformCompaniesSearchText();
  return platformCompanies()
    .filter((company) => !search || platformCompanySearchHaystack(company).includes(search))
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
}

function platformCompanyStatus(company) {
  const billing = platformBillingSummary(company);
  if (["failed", "overdue"].includes(billing.status.statusKey)) return { label: "Achterstand betaling", className: "danger" };
  if (company.blocked || company.active === false || ["paused", "cancelled"].includes(String(company.billing_status || "").toLowerCase())) return { label: "Gepauzeerd", className: "warn" };
  return { label: "Actief", className: "ok" };
}

function renderPlatformCompanyUsersCompact(company) {
  const users = companyUsers(company.id)
    .filter((user) => !user.deleted && userRole(user) !== ROLES.PLATFORM_ADMIN)
    .sort((a, b) => String(a.name || a.email || "").localeCompare(String(b.name || b.email || "")));
  return `<section class="company-detail-section">
    <h3>Gebruikers</h3>
    <div class="compact-list">
      ${users.length ? users.map((user) => `<div class="compact-row">
        <span>${escapeHtml(user.name || "-")}</span>
        <small>${escapeHtml(user.email || "-")}</small>
        <em>${escapeHtml(roleLabel(userRole(user)))}</em>
      </div>`).join("") : `<p class="muted">Geen gebruikers onder dit bedrijf.</p>`}
    </div>
  </section>`;
}

function renderPlatformCompanyModulesCompact(company) {
  ensureCompanyModulesEnabled(company);
  const active = moduleCatalog().filter((module) => company.modules_enabled?.[module.key] === true);
  return `<section class="company-detail-section">
    <h3>Modules</h3>
    <p class="muted">${active.length}/${moduleCatalog().length} modules actief</p>
    <div class="module-pill-list">
      ${moduleCatalog().map((module) => `<span class="badge ${company.modules_enabled?.[module.key] === true ? "ok" : ""}">${escapeHtml(module.label)}</span>`).join("")}
    </div>
    <div class="button-row"><button class="btn secondary" type="button" onclick="setPlatformTab('Modules')">Modules beheren</button></div>
  </section>`;
}

function renderPlatformCompanyAuditCompact(company) {
  const logs = platformAuditLogs()
    .filter((log) => String(log.company_id || "") === String(company.id))
    .slice()
    .reverse()
    .slice(0, 5);
  return `<section class="company-detail-section">
    <h3>Auditinformatie</h3>
    <div class="compact-list">
      ${logs.length ? logs.map((log) => `<div class="compact-row">
        <span>${escapeHtml(log.action || "-")}</span>
        <small>${escapeHtml(String(log.created_at || "").replace("T", " ").slice(0, 16))}</small>
        <em>${escapeHtml(log.user_name || "-")}</em>
      </div>`).join("") : `<p class="muted">Nog geen auditregels voor dit bedrijf.</p>`}
    </div>
  </section>`;
}

function renderPlatformCompanyDetails(company, editable) {
  const billing = platformBillingSummary(company);
  const storageUsed = companyStorageUsageMb(company.id);
  return `<div class="company-accordion-body">
    <section class="company-detail-section">
      <h3>Bedrijfsgegevens</h3>
      <div class="form-grid">
        <label>Domein/subdomein <input value="${escapeAttr(company.slug || "")}" ${editable ? `onchange="updateCompany('${company.id}', 'slug', this.value)"` : "readonly"} /></label>
        <label>Pakket <select ${editable ? `onchange="updateCompany('${company.id}', 'subscription_package', this.value)"` : "disabled"}>${Object.keys(SUBSCRIPTION_PACKAGES).map((pkg) => `<option value="${pkg}" ${company.subscription_package === pkg ? "selected" : ""}>${pkg}</option>`).join("")}</select></label>
        <label>Betaalstatus <select ${editable ? `onchange="updateCompany('${company.id}', 'billing_status', this.value)"` : "disabled"}>${["trial", "active", "overdue", "paused", "cancelled"].map((status) => `<option value="${status}" ${company.billing_status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
        <label>Gebruikerslimiet <input type="number" min="1" value="${Number(company.user_limit || 10)}" ${editable ? `onchange="updateCompany('${company.id}', 'user_limit', this.value)"` : "readonly"} /></label>
        <label>Opslaglimiet MB <input type="number" min="100" value="${Number(company.storage_limit_mb || 1024)}" ${editable ? `onchange="updateCompany('${company.id}', 'storage_limit_mb', this.value)"` : "readonly"} /></label>
        <label>Werkbonnen <input value="${companyProjects(company.id).length}" readonly /></label>
      </div>
      ${editable ? `<div class="button-row"><button class="btn warn" type="button" onclick="toggleCompanyBlocked('${company.id}')">${company.blocked ? "Deblokkeren" : "Blokkeren"}</button><button class="btn secondary" type="button" onclick="updateCompany('${company.id}', 'active', ${company.active === false ? "true" : "false"})">${company.active === false ? "Activeren" : "Deactiveren"}</button><button class="btn danger" type="button" onclick="deleteCompany('${company.id}')">Verwijderen</button></div>` : ""}
    </section>
    ${editable ? renderCompanyBrandingPanel(company, true) : ""}
    ${renderPlatformCompanyUsersCompact(company)}
    ${renderPlatformCompanyModulesCompact(company)}
    <section class="company-detail-section">
      <h3>Facturatie</h3>
      <div class="meta-grid">
        <div class="meta"><span>Status</span><strong>${escapeHtml(billing.status.label)}</strong></div>
        <div class="meta"><span>Openstaand</span><strong>${euro(billing.openAmount)}</strong></div>
        <div class="meta"><span>Volgende factuur</span><strong>${billing.nextInvoice ? safeDate(billing.nextInvoice) : "Niet ingevuld"}</strong></div>
        <div class="meta"><span>Prijsplan</span><strong>${escapeHtml(billing.pricePlan)}</strong></div>
      </div>
      <div class="button-row"><button class="btn secondary" type="button" onclick="setPlatformTab('Facturatie')">Facturatie openen</button></div>
    </section>
    <section class="company-detail-section">
      <h3>Opslaggebruik</h3>
      <div class="meta-grid">
        <div class="meta"><span>Gebruik</span><strong>${storageUsed} MB</strong></div>
        <div class="meta"><span>Limiet</span><strong>${Number(company.storage_limit_mb || 1024)} MB</strong></div>
        <div class="meta"><span>Foto's</span><strong>${Math.round(storageUsed / 3)}</strong></div>
      </div>
    </section>
    <section class="company-detail-section">
      <h3>Rechten</h3>
      <p class="muted">Rechten worden per gebruiker beheerd in Platform Admin > Rechten.</p>
      <div class="button-row"><button class="btn secondary" type="button" onclick="setPlatformTab('Rechten')">Rechten beheren</button></div>
    </section>
    ${renderPlatformCompanyAuditCompact(company)}
    <section class="company-detail-section">
      <h3>Abonnement instellingen</h3>
      <div class="meta-grid">
        <div class="meta"><span>Pakket</span><strong>${escapeHtml(company.subscription_package || "basis")}</strong></div>
        <div class="meta"><span>Gebruikers</span><strong>${companyUsers(company.id).length}/${Number(company.user_limit || 10)}</strong></div>
        <div class="meta"><span>Trial tot</span><strong>${company.trial_until ? safeDate(company.trial_until) : "Niet ingesteld"}</strong></div>
      </div>
    </section>
  </div>`;
}

function renderPlatformCompaniesTable(editable) {
  const rows = filteredPlatformCompanies();
  const openState = platformCompaniesOpenState();
  return `<section class="platform-companies-page">
    <section class="panel rights-intro">
      <div class="article-head">
        <div>
          <h2>Bedrijven</h2>
          <p>Bedrijven zijn standaard ingeklapt. Gebruik zoeken en klap alleen het bedrijf open dat u wilt beheren.</p>
        </div>
        <span class="badge">${rows.length} bedrijven</span>
      </div>
      <div class="company-search-actions">
        <label>Zoek bedrijf
          <input value="${escapeAttr(ui.platformCompaniesSearch || "")}" placeholder="Zoek bedrijf..." oninput="setPlatformCompaniesSearch(this.value)" />
        </label>
        <div class="button-row">
          <button class="btn secondary" type="button" onclick="setAllPlatformCompaniesOpen(true)">Alles uitklappen</button>
          <button class="btn secondary" type="button" onclick="setAllPlatformCompaniesOpen(false)">Alles inklappen</button>
        </div>
      </div>
    </section>
    <section class="company-card-list platform-company-accordion">
      ${rows.length ? rows.map((company) => {
        normalizeCompanyBusinessDetails(company);
        const isOpen = openState[company.id] === true;
        const logoPresent = companyHasLogo(company);
        const status = platformCompanyStatus(company);
        const billing = platformBillingSummary(company);
        return `<article class="rights-company-card platform-company-card ${isOpen ? "open" : ""} ${status.className}">
          <button class="platform-company-toggle" type="button" onclick="togglePlatformCompanyDetails('${company.id}')">
            <span class="rights-caret">${isOpen ? "&dtrif;" : "&rtrif;"}</span>
            <span class="platform-company-logo">${renderBrandMark(company, "brand-preview-mark")}</span>
            <span class="platform-company-main">
              <strong>${escapeHtml(company.name || "-")}</strong>
              <small>${escapeHtml(status.label)} | ${escapeHtml(company.subscription_package || "basis")} pakket | ${companyUsers(company.id).length} gebruikers</small>
            </span>
            <span class="badge ${status.className}">${escapeHtml(status.label)}</span>
            <span class="badge">${escapeHtml(company.subscription_package || "basis")}</span>
            <span class="badge ${logoPresent ? "ok" : "warn"}">${logoPresent ? "Logo" : "Geen logo"}</span>
            <span class="platform-company-attention">${["failed", "overdue"].includes(billing.status.statusKey) ? `Openstaand: ${euro(billing.openAmount)}` : `${companyUsers(company.id).length} users`}</span>
          </button>
          ${isOpen ? renderPlatformCompanyDetails(company, editable) : ""}
        </article>`;
      }).join("") : `<section class="panel empty">Geen bedrijven gevonden.</section>`}
    </section>
  </section>`;
}

function ensureWhatsAppPermissionFields() {
  if (!USER_PERMISSION_GROUPS.some(([title]) => title === "WhatsApp")) {
    USER_PERMISSION_GROUPS.push(["WhatsApp", [
      ["can_use_whatsapp", "WhatsApp gebruiken"],
      ["can_reply_whatsapp", "WhatsApp beantwoorden"],
    ]]);
  }
}

ensureWhatsAppPermissionFields();

const WHATSAPP_TEMPLATE_SEEDS = [
  ["appointment_confirmation", "Afspraakbevestiging", "Beste {{klant}}, hierbij bevestigen wij uw afspraak op {{datum}}. Met vriendelijke groet, {{bedrijf}}"],
  ["maintenance_reminder", "Onderhoudsherinnering", "Beste {{klant}}, het is tijd voor onderhoud. Reageer op dit bericht om een afspraak te plannen. {{bedrijf}}"],
  ["payment_link", "Betaallink", "Beste {{klant}}, u kunt betalen via deze link: {{link}}. Bedrag: {{bedrag}}. {{bedrijf}}"],
  ["workorder_link", "Werkbon-link", "Beste {{klant}}, uw werkbon {{werkbon}} staat klaar: {{link}}. {{bedrijf}}"],
  ["quote_link", "Offerte-link", "Beste {{klant}}, uw offerte staat klaar: {{link}}. {{bedrijf}}"],
  ["invoice_link", "Factuur-link", "Beste {{klant}}, uw factuur staat klaar: {{link}}. {{bedrijf}}"],
  ["free_message", "Vrij bericht", "Beste {{klant}},\n\nMet vriendelijke groet,\n{{bedrijf}}"],
];

function whatsappCompanyId() {
  return currentCompanyId();
}

function canUseWhatsApp() {
  if (!isCompanyModuleActive("whatsapp")) return false;
  if (isCompanyAdmin()) return true;
  if (isMechanic()) return hasMechanicPermission("can_use_whatsapp");
  return isPlatformSuperAdmin() && isSupportMode();
}

function canReplyWhatsApp() {
  if (!canUseWhatsApp()) return false;
  if (isCompanyAdmin()) return true;
  if (isMechanic()) return hasMechanicPermission("can_reply_whatsapp");
  return isPlatformSuperAdmin() && isSupportMode();
}

function ensureWhatsAppState() {
  ensureWhatsAppPermissionFields();
  state.whatsappAccounts = state.whatsappAccounts || [];
  state.whatsappConversations = state.whatsappConversations || [];
  state.whatsappMessages = state.whatsappMessages || [];
  state.whatsappTemplates = state.whatsappTemplates || [];
  state.whatsappAuditLogs = state.whatsappAuditLogs || [];
  const companyId = whatsappCompanyId();
  if (!companyId) return;
  WHATSAPP_TEMPLATE_SEEDS.forEach(([key, name, body]) => {
    if (!state.whatsappTemplates.some((template) => strictRecordCompanyId(template) === companyId && template.key === key)) {
      state.whatsappTemplates.push({
        id: uid("wa-template"),
        company_id: companyId,
        companyId: companyId,
        key,
        name,
        body,
        active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    }
  });
  if (!state.whatsappAccounts.some((account) => strictRecordCompanyId(account) === companyId)) {
    state.whatsappAccounts.push({
      id: uid("wa-account"),
      company_id: companyId,
      companyId: companyId,
      provider: "whatsapp_business_api",
      business_number: "",
      phone_number_id: "",
      business_account_id: "",
      access_token_label: "",
      webhook_url: "",
      status: "niet gekoppeld",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }
  const customers = activeCustomers();
  if (customers.length && !state.whatsappConversations.some((conversation) => strictRecordCompanyId(conversation) === companyId)) {
    const customer = customers[0];
    const conversation = {
      id: uid("wa-conv"),
      company_id: companyId,
      companyId: companyId,
      customer_id: customer.id,
      customer_name: customer.customer_name,
      phone: customer.phone || "+31612345678",
      status: "open",
      source: "incoming",
      unread_count: 1,
      last_message_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    state.whatsappConversations.push(conversation);
    state.whatsappMessages.push({
      id: uid("wa-msg"),
      company_id: companyId,
      companyId: companyId,
      conversation_id: conversation.id,
      direction: "in",
      from_name: customer.customer_name,
      from_phone: conversation.phone,
      to_phone: "",
      body: "Goedemiddag, kunnen jullie een afspraak inplannen voor onderhoud?",
      status: "ontvangen",
      provider: "whatsapp_business_api_prepared",
      created_at: new Date().toISOString(),
      created_by: "",
    });
  }
}

function whatsappAccount() {
  ensureWhatsAppState();
  return companyScoped(state.whatsappAccounts || [])[0] || null;
}

function whatsappTemplates() {
  ensureWhatsAppState();
  return companyScoped(state.whatsappTemplates || []).sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
}

function whatsappConversations() {
  ensureWhatsAppState();
  return companyScoped(state.whatsappConversations || [])
    .filter((conversation) => !conversation.deleted)
    .sort((a, b) => String(b.last_message_at || b.updated_at || "").localeCompare(String(a.last_message_at || a.updated_at || "")));
}

function whatsappMessages(conversationId) {
  ensureWhatsAppState();
  return companyScoped(state.whatsappMessages || [])
    .filter((message) => message.conversation_id === conversationId)
    .sort((a, b) => String(a.created_at || "").localeCompare(String(b.created_at || "")));
}

function whatsappVisibleProjects() {
  return visibleProjects().sort((a, b) => String(b.createdAt || b.created_at || "").localeCompare(String(a.createdAt || a.created_at || "")));
}

function whatsappVisiblePlanning() {
  return companyScoped(state.planningEvents || []).sort((a, b) => String(b.start_datetime || "").localeCompare(String(a.start_datetime || "")));
}

function whatsappVisibleInvoices() {
  return companyScoped(state.payments || []).sort((a, b) => String(b.created_at || b.paid_at || "").localeCompare(String(a.created_at || a.paid_at || "")));
}

function whatsappConversationLabel(conversation) {
  const customer = conversation.customer_id ? byId(state.customers || [], conversation.customer_id) : null;
  return customer?.customer_name || conversation.customer_name || conversation.phone || "Onbekend gesprek";
}

function whatsappStatusLabel(status) {
  if (status === "handled") return "Afgehandeld";
  if (status === "open") return "Open";
  return status || "Inbox";
}

function setWhatsAppTab(tab) {
  ui.whatsappTab = tab;
  render();
}

function selectWhatsAppConversation(conversationId) {
  ui.selectedWhatsAppConversationId = conversationId;
  const conversation = byId(state.whatsappConversations || [], conversationId);
  if (conversation && isSameCompany(conversation)) {
    conversation.unread_count = 0;
    conversation.updated_at = new Date().toISOString();
    saveState();
  }
  render();
}

function markWhatsAppConversation(conversationId, status) {
  const conversation = byId(state.whatsappConversations || [], conversationId);
  if (!conversation || !isSameCompany(conversation) || !canReplyWhatsApp()) return;
  conversation.status = status;
  conversation.updated_at = new Date().toISOString();
  logWhatsAppAudit(status === "handled" ? "gesprek afgehandeld" : "gesprek heropend", conversationId);
  saveState();
  render();
}

function linkWhatsAppCustomer(conversationId, customerId) {
  const conversation = byId(state.whatsappConversations || [], conversationId);
  const customer = byId(state.customers || [], customerId);
  if (!conversation || !customer || !isSameCompany(conversation) || !isSameCompany(customer) || !canReplyWhatsApp()) return;
  conversation.customer_id = customer.id;
  conversation.customer_name = customer.customer_name;
  conversation.phone = customer.phone || conversation.phone || "";
  conversation.updated_at = new Date().toISOString();
  logWhatsAppAudit("klant gekoppeld", conversationId, customer.customer_name);
  saveState();
  render();
}

function linkWhatsAppWorkorder(conversationId, projectId) {
  const conversation = byId(state.whatsappConversations || [], conversationId);
  const project = byId(state.projects || [], projectId);
  if (!conversation || !project || !isSameCompany(conversation) || !canAccessProject(project) || !canReplyWhatsApp()) return;
  conversation.related_workorder_id = project.id;
  conversation.related_project_id = project.id;
  conversation.updated_at = new Date().toISOString();
  logWhatsAppAudit("werkbon gekoppeld", conversationId, project.projectNumber || project.id);
  saveState();
  render();
}

function logWhatsAppAudit(action, conversationId = "", details = "") {
  ensureWhatsAppState();
  state.whatsappAuditLogs.push({
    id: uid("wa-audit"),
    company_id: whatsappCompanyId(),
    companyId: whatsappCompanyId(),
    user_id: currentUser()?.id || "",
    user_name: currentUser()?.name || "",
    action,
    conversation_id: conversationId,
    details,
    created_at: new Date().toISOString(),
  });
}

function fillWhatsAppTemplate(selectEl) {
  const form = selectEl.closest("form");
  const template = byId(state.whatsappTemplates || [], selectEl.value);
  const body = form?.querySelector("[name='body']");
  if (body && template) body.value = whatsappApplyTemplate(template.body, {});
}

function whatsappApplyTemplate(body, context = {}) {
  const company = currentCompany();
  const values = {
    klant: context.customer?.customer_name || context.customer_name || "klant",
    bedrijf: company?.name || "WerkbonSysteem.nl",
    datum: context.date || safeDate(context.start_datetime || context.created_at || new Date().toISOString()),
    werkbon: context.project?.projectNumber || context.project?.id || context.workorder_number || "-",
    factuur: context.invoice_number || context.invoice?.invoice_number || "-",
    bedrag: context.amount ? euro(context.amount) : "-",
    link: context.link || "https://werkbonsysteem.nl",
  };
  return String(body || "").replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? "");
}

function sendWhatsAppReply(event, conversationId) {
  event.preventDefault();
  if (!canReplyWhatsApp()) return alert("Geen rechten om WhatsApp-berichten te beantwoorden.");
  const conversation = byId(state.whatsappConversations || [], conversationId);
  if (!conversation || !isSameCompany(conversation)) return;
  const form = new FormData(event.target);
  const body = String(form.get("body") || "").trim();
  if (!body) return alert("Bericht is verplicht.");
  const now = new Date().toISOString();
  state.whatsappMessages.push({
    id: uid("wa-msg"),
    company_id: strictRecordCompanyId(conversation),
    companyId: strictRecordCompanyId(conversation),
    conversation_id: conversation.id,
    direction: "out",
    from_name: currentCompany()?.name || "Kantoor",
    from_phone: whatsappAccount()?.business_number || "",
    to_phone: conversation.phone || "",
    body,
    status: "verzonden",
    provider: "whatsapp_business_api_prepared",
    template_id: String(form.get("template_id") || ""),
    created_at: now,
    created_by: currentUser()?.id || "",
  });
  conversation.status = "open";
  conversation.unread_count = 0;
  conversation.last_message_at = now;
  conversation.updated_at = now;
  logWhatsAppAudit("bericht verzonden", conversation.id);
  saveState();
  event.target.reset();
  render();
}

function startWhatsAppConversation(event) {
  event.preventDefault();
  if (!canReplyWhatsApp()) return alert("Geen rechten om WhatsApp-gesprekken te starten.");
  const form = new FormData(event.target);
  const customerId = String(form.get("customer_id") || "");
  const customer = customerId ? byId(state.customers || [], customerId) : null;
  if (customer && !isSameCompany(customer)) return;
  const phone = String(form.get("phone") || customer?.phone || "").trim();
  const body = String(form.get("body") || "").trim();
  if (!phone) return alert("Telefoonnummer is verplicht.");
  if (!body) return alert("Bericht is verplicht.");
  const now = new Date().toISOString();
  const conversation = {
    id: uid("wa-conv"),
    company_id: whatsappCompanyId(),
    companyId: whatsappCompanyId(),
    customer_id: customer?.id || "",
    customer_name: customer?.customer_name || String(form.get("customer_name") || phone),
    phone,
    status: "open",
    source: "portal",
    related_workorder_id: String(form.get("project_id") || ""),
    related_project_id: String(form.get("project_id") || ""),
    related_planning_id: String(form.get("planning_id") || ""),
    related_invoice_id: String(form.get("invoice_id") || ""),
    unread_count: 0,
    last_message_at: now,
    created_at: now,
    updated_at: now,
    created_by: currentUser()?.id || "",
  };
  state.whatsappConversations.push(conversation);
  state.whatsappMessages.push({
    id: uid("wa-msg"),
    company_id: whatsappCompanyId(),
    companyId: whatsappCompanyId(),
    conversation_id: conversation.id,
    direction: "out",
    from_name: currentCompany()?.name || "Kantoor",
    from_phone: whatsappAccount()?.business_number || "",
    to_phone: phone,
    body,
    status: "verzonden",
    provider: "whatsapp_business_api_prepared",
    template_id: String(form.get("template_id") || ""),
    created_at: now,
    created_by: currentUser()?.id || "",
  });
  ui.selectedWhatsAppConversationId = conversation.id;
  ui.whatsappTab = "Open gesprekken";
  logWhatsAppAudit("gesprek gestart", conversation.id, phone);
  saveState();
  render();
}

function saveWhatsAppTemplate(event, templateId = "") {
  event.preventDefault();
  if (!isCompanyAdmin() && !(isPlatformSuperAdmin() && isSupportMode())) return;
  const form = new FormData(event.target);
  const now = new Date().toISOString();
  const target = templateId ? byId(state.whatsappTemplates || [], templateId) : null;
  if (target && !isSameCompany(target)) return;
  const row = target || {
    id: uid("wa-template"),
    company_id: whatsappCompanyId(),
    companyId: whatsappCompanyId(),
    key: slugify(form.get("name") || "template"),
    created_at: now,
  };
  row.name = String(form.get("name") || "").trim();
  row.body = String(form.get("body") || "").trim();
  row.active = form.get("active") === "true";
  row.updated_at = now;
  if (!row.name || !row.body) return alert("Naam en berichttekst zijn verplicht.");
  if (!target) state.whatsappTemplates.push(row);
  logWhatsAppAudit(target ? "template gewijzigd" : "template aangemaakt", "", row.name);
  saveState();
  render();
}

function deleteWhatsAppTemplate(templateId) {
  const template = byId(state.whatsappTemplates || [], templateId);
  if (!template || !isSameCompany(template) || !isCompanyAdmin()) return;
  if (!confirm("Template verwijderen?")) return;
  state.whatsappTemplates = (state.whatsappTemplates || []).filter((item) => item.id !== templateId);
  logWhatsAppAudit("template verwijderd", "", template.name);
  saveState();
  render();
}

function saveWhatsAppSettings(event) {
  event.preventDefault();
  if (!isCompanyAdmin() && !(isPlatformSuperAdmin() && isSupportMode())) return;
  const account = whatsappAccount();
  if (!account) return;
  const form = new FormData(event.target);
  ["provider", "business_number", "phone_number_id", "business_account_id", "access_token_label", "webhook_url", "status"].forEach((field) => {
    account[field] = String(form.get(field) || "").trim();
  });
  account.updated_at = new Date().toISOString();
  logWhatsAppAudit("instellingen opgeslagen", "", account.business_number);
  saveState();
  render();
}

function renderWhatsAppStartForm() {
  const customers = activeCustomers();
  const projects = whatsappVisibleProjects();
  const planning = whatsappVisiblePlanning();
  const invoices = whatsappVisibleInvoices();
  const templates = whatsappTemplates().filter((template) => template.active !== false);
  return `<section class="panel whatsapp-start-panel">
    <h2>Nieuw WhatsApp gesprek</h2>
    <form class="whatsapp-start-form" onsubmit="startWhatsAppConversation(event)">
      <div class="form-grid">
        <label>Klant <select name="customer_id" onchange="const c=byId(state.customers||[],this.value); const f=this.form; if(c){f.phone.value=c.phone||''; f.customer_name.value=c.customer_name||'';}"><option value="">Vrij nummer</option>${customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.customer_name)} - ${escapeHtml(customer.phone || "geen telefoon")}</option>`).join("")}</select></label>
        <label>Klantnaam <input name="customer_name" placeholder="Naam bij vrij nummer" /></label>
        <label>Telefoonnummer <input name="phone" required placeholder="+316..." /></label>
        <label>Template <select name="template_id" onchange="fillWhatsAppTemplate(this)"><option value="">Vrij bericht</option>${templates.map((template) => `<option value="${template.id}">${escapeHtml(template.name)}</option>`).join("")}</select></label>
        <label>Werkbon koppelen <select name="project_id"><option value="">Geen werkbon</option>${projects.map((project) => `<option value="${project.id}">${escapeHtml(project.projectNumber || project.id)} - ${escapeHtml(project.customer || project.customer_name || "")}</option>`).join("")}</select></label>
        <label>Afspraak koppelen <select name="planning_id"><option value="">Geen afspraak</option>${planning.slice(0, 80).map((row) => `<option value="${row.id}">${safeDate(row.start_datetime)} - ${escapeHtml(row.customer_name || row.title || "")}</option>`).join("")}</select></label>
        <label>Factuur/betaling koppelen <select name="invoice_id"><option value="">Geen factuur</option>${invoices.slice(0, 80).map((row) => `<option value="${row.id}">${escapeHtml(row.invoice_number || row.id)} - ${euro(row.amount || row.total_inc_vat || 0)}</option>`).join("")}</select></label>
      </div>
      <label>Bericht <textarea name="body" rows="4" required placeholder="Schrijf bericht of kies template"></textarea></label>
      <button class="btn success" type="submit">Gesprek starten</button>
    </form>
  </section>`;
}

function renderWhatsAppConversationList(rows) {
  return `<div class="whatsapp-list">
    ${rows.length ? rows.map((conversation) => {
      const selected = ui.selectedWhatsAppConversationId === conversation.id;
      return `<button class="whatsapp-conversation-card ${selected ? "active" : ""}" type="button" onclick="selectWhatsAppConversation('${conversation.id}')">
        <strong>${escapeHtml(whatsappConversationLabel(conversation))}</strong>
        <span>${escapeHtml(conversation.phone || "-")}</span>
        <small>${escapeHtml(whatsappStatusLabel(conversation.status))} - ${safeDate(conversation.last_message_at || conversation.updated_at)}</small>
        ${conversation.unread_count ? `<em>${conversation.unread_count} ongelezen</em>` : ""}
      </button>`;
    }).join("") : `<div class="empty">Geen gesprekken gevonden.</div>`}
  </div>`;
}

function renderWhatsAppThread(conversation) {
  if (!conversation) return `<section class="panel whatsapp-thread empty"><h2>Selecteer een gesprek</h2><p>Kies links een klantgesprek of start een nieuw WhatsApp gesprek.</p></section>`;
  const messages = whatsappMessages(conversation.id);
  const customers = activeCustomers();
  const projects = whatsappVisibleProjects();
  const customer = conversation.customer_id ? byId(state.customers || [], conversation.customer_id) : null;
  const project = conversation.related_workorder_id ? byId(state.projects || [], conversation.related_workorder_id) : null;
  return `<section class="panel whatsapp-thread">
    <div class="article-head">
      <div>
        <h2>${escapeHtml(whatsappConversationLabel(conversation))}</h2>
        <p>${escapeHtml(conversation.phone || "-")} - ${escapeHtml(whatsappStatusLabel(conversation.status))}</p>
      </div>
      <div class="button-row">
        ${conversation.status === "handled" ? `<button class="btn secondary" type="button" onclick="markWhatsAppConversation('${conversation.id}', 'open')">Heropenen</button>` : `<button class="btn success" type="button" onclick="markWhatsAppConversation('${conversation.id}', 'handled')">Afhandelen</button>`}
      </div>
    </div>
    <div class="whatsapp-link-grid">
      <label>Klant koppelen <select onchange="linkWhatsAppCustomer('${conversation.id}', this.value)"><option value="">${customer ? escapeHtml(customer.customer_name) : "Kies klant"}</option>${customers.map((row) => `<option value="${row.id}" ${conversation.customer_id === row.id ? "selected" : ""}>${escapeHtml(row.customer_name)}</option>`).join("")}</select></label>
      <label>Werkbon koppelen <select onchange="linkWhatsAppWorkorder('${conversation.id}', this.value)"><option value="">${project ? escapeHtml(project.projectNumber || project.id) : "Kies werkbon"}</option>${projects.map((row) => `<option value="${row.id}" ${conversation.related_workorder_id === row.id ? "selected" : ""}>${escapeHtml(row.projectNumber || row.id)} - ${escapeHtml(row.customer || row.customer_name || "")}</option>`).join("")}</select></label>
    </div>
    <div class="whatsapp-message-list">
      ${messages.map((message) => `<div class="whatsapp-message ${message.direction === "out" ? "out" : "in"}">
        <span>${escapeHtml(message.direction === "out" ? "Kantoor" : message.from_name || conversation.customer_name || "Klant")} - ${safeDate(message.created_at)}</span>
        <p>${escapeHtml(message.body || "")}</p>
        <small>${escapeHtml(message.status || "")}</small>
      </div>`).join("")}
    </div>
    ${canReplyWhatsApp() ? `<form class="whatsapp-composer" onsubmit="sendWhatsAppReply(event, '${conversation.id}')">
      <label>Antwoord <textarea name="body" rows="3" required></textarea></label>
      <input type="hidden" name="template_id" value="" />
      <button class="btn success" type="submit">Versturen</button>
    </form>` : `<p class="muted">Je hebt geen rechten om WhatsApp-berichten te beantwoorden.</p>`}
  </section>`;
}

function renderWhatsAppConversations(statusFilter) {
  let rows = whatsappConversations();
  if (statusFilter === "inbox") rows = rows.filter((conversation) => Number(conversation.unread_count || 0) > 0 || conversation.source === "incoming");
  if (statusFilter === "open") rows = rows.filter((conversation) => conversation.status !== "handled");
  if (statusFilter === "handled") rows = rows.filter((conversation) => conversation.status === "handled");
  const selected = byId(rows, ui.selectedWhatsAppConversationId) || rows[0] || null;
  if (selected && ui.selectedWhatsAppConversationId !== selected.id) ui.selectedWhatsAppConversationId = selected.id;
  return `<div class="whatsapp-layout">
    ${renderWhatsAppConversationList(rows)}
    ${renderWhatsAppThread(selected)}
  </div>
  ${canReplyWhatsApp() ? renderWhatsAppStartForm() : ""}`;
}

function renderWhatsAppTemplates() {
  const templates = whatsappTemplates();
  return `<section class="whatsapp-template-page">
    <section class="panel">
      <div class="article-head"><div><h2>Templates</h2><p>Berichttemplates voor afspraakbevestiging, onderhoud, betaal-, werkbon-, offerte- en factuurlinks.</p></div></div>
      <div class="whatsapp-template-grid">
        ${templates.map((template) => `<form class="whatsapp-template-card" onsubmit="saveWhatsAppTemplate(event, '${template.id}')">
          <label>Naam <input name="name" value="${escapeAttr(template.name || "")}" /></label>
          <label>Actief <select name="active"><option value="true" ${template.active !== false ? "selected" : ""}>Ja</option><option value="false" ${template.active === false ? "selected" : ""}>Nee</option></select></label>
          <label>Bericht <textarea name="body" rows="5">${escapeHtml(template.body || "")}</textarea></label>
          <div class="button-row"><button class="btn success" type="submit">Opslaan</button><button class="btn danger" type="button" onclick="deleteWhatsAppTemplate('${template.id}')">Verwijderen</button></div>
        </form>`).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Template toevoegen</h2>
      <form class="whatsapp-template-card" onsubmit="saveWhatsAppTemplate(event)">
        <label>Naam <input name="name" required /></label>
        <input type="hidden" name="active" value="true" />
        <label>Bericht <textarea name="body" rows="5" required></textarea></label>
        <button class="btn success" type="submit">Template toevoegen</button>
      </form>
    </section>
  </section>`;
}

function renderWhatsAppSettings() {
  const account = whatsappAccount();
  return `<section class="panel whatsapp-settings">
    <div class="article-head">
      <div>
        <h2>WhatsApp Business API instellingen</h2>
        <p>Per bedrijf eigen nummer en API-koppeling. Tokens worden hier niet plat opgeslagen; alleen een label/referentie.</p>
      </div>
      <span class="badge ${account?.status === "gekoppeld" ? "ok" : "warn"}">${escapeHtml(account?.status || "niet gekoppeld")}</span>
    </div>
    <form onsubmit="saveWhatsAppSettings(event)">
      <div class="form-grid">
        <label>Provider <select name="provider"><option value="whatsapp_business_api" ${account?.provider === "whatsapp_business_api" ? "selected" : ""}>WhatsApp Business API</option><option value="meta_cloud_api" ${account?.provider === "meta_cloud_api" ? "selected" : ""}>Meta Cloud API</option></select></label>
        <label>Business nummer <input name="business_number" value="${escapeAttr(account?.business_number || "")}" placeholder="+31..." /></label>
        <label>Phone Number ID <input name="phone_number_id" value="${escapeAttr(account?.phone_number_id || "")}" /></label>
        <label>Business Account ID <input name="business_account_id" value="${escapeAttr(account?.business_account_id || "")}" /></label>
        <label>Token label/referentie <input name="access_token_label" value="${escapeAttr(account?.access_token_label || "")}" placeholder="Secret manager key" /></label>
        <label>Webhook URL <input name="webhook_url" value="${escapeAttr(account?.webhook_url || "")}" placeholder="https://..." /></label>
        <label>Status <select name="status">${["niet gekoppeld", "testmodus", "gekoppeld", "fout"].map((status) => `<option value="${status}" ${account?.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      </div>
      <button class="btn success" type="submit">Instellingen opslaan</button>
    </form>
  </section>`;
}

function renderWhatsAppAudit() {
  const logs = companyScoped(state.whatsappAuditLogs || []).slice().sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || ""))).slice(0, 20);
  return `<section class="panel"><h2>Laatste WhatsApp acties</h2><div class="table-wrap"><table><thead><tr><th>Datum</th><th>Gebruiker</th><th>Actie</th><th>Details</th></tr></thead><tbody>${logs.map((log) => `<tr><td>${safeDate(log.created_at)}</td><td>${escapeHtml(log.user_name || "-")}</td><td>${escapeHtml(log.action || "-")}</td><td>${escapeHtml(log.details || "-")}</td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderWhatsAppModule() {
  if (!isCompanyModuleActive("whatsapp")) return moduleInactiveMessage();
  ensureWhatsAppState();
  if (!canUseWhatsApp()) return `<section class="panel empty"><h2>Geen toegang tot WhatsApp.</h2><p>Kantoor kan deze rechten per medewerker instellen.</p></section>`;
  const account = whatsappAccount();
  ui.whatsappTab = ui.whatsappTab || "Inbox";
  const tabs = ["Inbox", "Open gesprekken", "Afgehandelde gesprekken", "Templates", "Instellingen"];
  const unread = whatsappConversations().reduce((sum, conversation) => sum + Number(conversation.unread_count || 0), 0);
  let body = "";
  if (ui.whatsappTab === "Inbox") body = renderWhatsAppConversations("inbox");
  if (ui.whatsappTab === "Open gesprekken") body = renderWhatsAppConversations("open");
  if (ui.whatsappTab === "Afgehandelde gesprekken") body = renderWhatsAppConversations("handled");
  if (ui.whatsappTab === "Templates") body = renderWhatsAppTemplates();
  if (ui.whatsappTab === "Instellingen") body = `${renderWhatsAppSettings()}${renderWhatsAppAudit()}`;
  return `<section class="whatsapp-shell">
    <section class="office-page-head">
      <div>
        <h2>WhatsApp</h2>
        <p>Lees, beantwoord en koppel klantgesprekken binnen ${escapeHtml(currentCompany()?.name || "het bedrijf")}.</p>
      </div>
      <div class="button-row">
        <span class="badge ${account?.status === "gekoppeld" ? "ok" : "warn"}">${escapeHtml(account?.business_number || "Geen nummer gekoppeld")}</span>
        <span class="badge">${unread} ongelezen</span>
      </div>
    </section>
    <div class="tabs">${tabs.map((tab) => `<button class="${ui.whatsappTab === tab ? "active" : ""}" type="button" onclick="setWhatsAppTab('${tab}')">${tab}</button>`).join("")}</div>
    ${body}
  </section>`;
}

function customerScopedRows() {
  return companyScoped(state.customers || []).filter((customer) => customer.active !== false && !customer.deleted);
}

function customerAppliances(customer) {
  const customerId = customer?.id || "";
  const addressKey = String(`${customer?.address || ""} ${customer?.postal_code || ""} ${customer?.city || ""}`).trim().toLowerCase();
  const rows = applianceRows().filter((appliance) => {
    const applianceAddress = String(`${appliance.address || ""} ${appliance.postal_code || ""} ${appliance.city || ""}`).trim().toLowerCase();
    return appliance.customer_id === customerId || (addressKey && applianceAddress === addressKey);
  });
  (customer?.appliances || []).forEach((appliance) => {
    if (!rows.some((row) => row.id === appliance.id)) rows.push({ ...appliance, customer_id: customerId, company_id: strictRecordCompanyId(customer), companyId: strictRecordCompanyId(customer) });
  });
  return rows;
}

function customerWorkorders(customer) {
  const customerId = customer?.id || "";
  const customerName = String(customer?.customer_name || "").toLowerCase();
  return visibleProjects().filter((project) => {
    const projectCustomerName = String(project.customer || project.customer_name || "").toLowerCase();
    return project.customer_id === customerId || project.customerId === customerId || (customerName && projectCustomerName === customerName);
  });
}

function customerInvoices(customer) {
  const customerId = customer?.id || "";
  return companyScoped(state.payments || []).filter((payment) => payment.customer_id === customerId);
}

function customerQuotes(customer) {
  const customerId = customer?.id || "";
  return companyScoped(state.quotes || []).filter((quote) => quote.customer_id === customerId);
}

function customerEmailMessages(customer) {
  const customerId = customer?.id || "";
  const ids = new Set(customer?.email_message_ids || []);
  return companyScoped(state.emailMessages || [])
    .filter((message) => message.customer_id === customerId || ids.has(message.id))
    .sort((a, b) => String(b.received_at || b.sent_at || b.created_at || "").localeCompare(String(a.received_at || a.sent_at || a.created_at || "")));
}

function customerWhatsAppMessages(customer) {
  const customerId = customer?.id || "";
  const conversations = companyScoped(state.whatsappConversations || []).filter((conversation) => conversation.customer_id === customerId);
  const conversationIds = new Set(conversations.map((conversation) => conversation.id));
  return companyScoped(state.whatsappMessages || [])
    .filter((message) => conversationIds.has(message.conversation_id))
    .sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
}

function renderCustomerCommunication(customer) {
  const emails = customerEmailMessages(customer);
  const whatsapps = customerWhatsAppMessages(customer);
  const workorders = customerWorkorders(customer);
  const quotes = customerQuotes(customer);
  const invoices = customerInvoices(customer);
  return `<section class="panel customer-communication">
    <h2>Communicatie</h2>
    <div class="tabs communication-tabs">
      <button class="active" type="button">Communicatie</button>
    </div>
    <section class="communication-grid">
      <article>
        <h3>Inkomende e-mails</h3>
        ${emails.filter((message) => message.folder !== "Verzonden" && !message.sent_at).length ? emails.filter((message) => message.folder !== "Verzonden" && !message.sent_at).map((message) => `<p><strong>${escapeHtml(message.subject || "(geen onderwerp)")}</strong><br>${escapeHtml(message.from_email || "")} - ${safeDate(message.received_at || message.created_at)}</p>`).join("") : `<p class="muted">Geen inkomende e-mails.</p>`}
      </article>
      <article>
        <h3>Verzonden e-mails</h3>
        ${emails.filter((message) => message.folder === "Verzonden" || message.sent_at).length ? emails.filter((message) => message.folder === "Verzonden" || message.sent_at).map((message) => `<p><strong>${escapeHtml(message.subject || "(geen onderwerp)")}</strong><br>${escapeHtml(message.to_email || "")} - ${safeDate(message.sent_at || message.created_at)}</p>`).join("") : `<p class="muted">Geen verzonden e-mails.</p>`}
      </article>
      <article>
        <h3>WhatsApp berichten</h3>
        ${whatsapps.length ? whatsapps.slice(0, 8).map((message) => `<p><strong>${escapeHtml(message.direction === "out" ? "Kantoor" : "Klant")}</strong><br>${escapeHtml(message.body || message.text || "")}<br>${safeDate(message.created_at)}</p>`).join("") : `<p class="muted">Geen WhatsApp berichten.</p>`}
      </article>
      <article>
        <h3>Gekoppelde werkbonnen</h3>
        ${workorders.length ? workorders.slice(0, 8).map((project) => `<p>${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.status || "-")}</p>`).join("") : `<p class="muted">Geen werkbonnen gekoppeld.</p>`}
      </article>
      <article>
        <h3>Gekoppelde offertes</h3>
        ${quotes.length ? quotes.slice(0, 8).map((quote) => `<p>${escapeHtml(quote.quote_number || quote.id)} - ${escapeHtml(quote.status || "-")}</p>`).join("") : `<p class="muted">Geen offertes gekoppeld.</p>`}
      </article>
      <article>
        <h3>Gekoppelde facturen</h3>
        ${invoices.length ? invoices.slice(0, 8).map((invoice) => `<p>${escapeHtml(invoice.invoice_number || invoice.id)} - ${escapeHtml(invoice.status || invoice.payment_status || "-")}</p>`).join("") : `<p class="muted">Geen facturen gekoppeld.</p>`}
      </article>
    </section>
  </section>`;
}

function customerLastVisit(customer) {
  const dates = customerWorkorders(customer)
    .map((project) => project.completedAt || project.completed_at || project.date || project.createdAt || project.created_at)
    .filter(Boolean)
    .sort();
  return dates.length ? dates[dates.length - 1] : "";
}

function customerOpenWorkorders(customer) {
  return customerWorkorders(customer).filter((project) => !isProjectCompleted(project));
}

function customerMaintenanceNeeded(customer) {
  return ["Binnenkort nodig", "Te laat"].includes(customerMaintenanceStatus(customer).status);
}

function addMonthsToDate(value, months) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return "";
  const next = new Date(date);
  next.setMonth(next.getMonth() + Number(months || 12));
  return next.toISOString().slice(0, 10);
}

function daysUntilDate(dateValue) {
  if (!dateValue) return null;
  const today = new Date(new Date().toISOString().slice(0, 10));
  const target = new Date(String(dateValue).slice(0, 10));
  if (Number.isNaN(target.getTime())) return null;
  return Math.ceil((target - today) / 86400000);
}

function customerLastMaintenanceDate(customer) {
  const applianceDates = customerAppliances(customer).map((appliance) => appliance.last_service_date || appliance.service_date).filter(Boolean);
  const workorderDates = customerWorkorders(customer)
    .filter((project) => isProjectCompleted(project))
    .map((project) => project.completedAt || project.completed_at || project.date)
    .filter(Boolean);
  const dates = [...applianceDates, ...workorderDates].sort();
  return dates.length ? dates[dates.length - 1].slice(0, 10) : "";
}

function customerMaintenanceInterval(customer) {
  return Math.max(1, Number(customer.maintenance_interval_months ?? 12));
}

function customerNextMaintenanceDate(customer) {
  if (customer.next_maintenance_date) return String(customer.next_maintenance_date).slice(0, 10);
  return addMonthsToDate(customerLastMaintenanceDate(customer), customerMaintenanceInterval(customer));
}

function customerMaintenanceStatus(customer) {
  const next = customerNextMaintenanceDate(customer);
  const days = daysUntilDate(next);
  if (days === null) return { status: "Niet nodig", days: null, next };
  if (days < 0) return { status: "Te laat", days, next };
  if (days <= 30) return { status: "Binnenkort nodig", days, next };
  return { status: "Niet nodig", days, next };
}

function maintenanceReminderEnabledForCompany() {
  const settings = companySettings();
  return settings.maintenance_reminders_enabled !== false && isCompanyModuleActive("maintenance_contracts");
}

function customerReminderEnabled(customer) {
  return customer.maintenance_reminder_enabled === true;
}

function ensureMaintenanceReminderTemplate() {
  ensureEmailData();
  const companyId = currentCompanyId();
  if (!companyId) return null;
  let template = companyScoped(state.emailTemplates || []).find((item) => String(item.name || "").toLowerCase() === "onderhoudsherinnering");
  if (!template) {
    const now = new Date().toISOString();
    template = {
      id: uid("mailtpl"),
      company_id: companyId,
      companyId: companyId,
      name: "Onderhoudsherinnering",
      subject: "Onderhoudsherinnering",
      body: "Beste {{klant}},\n\nVolgens onze planning is onderhoud nodig rond {{datum}}. Neem contact met ons op om een afspraak te maken.\n\nMet vriendelijke groet,\n{{bedrijf}}",
      active: true,
      created_at: now,
      updated_at: now,
    };
    state.emailTemplates.push(template);
  }
  return template;
}

function renderMaintenanceReminderBody(template, customer, status) {
  const company = currentCompany();
  return String(template?.body || "")
    .replaceAll("{{klant}}", customer.customer_name || "klant")
    .replaceAll("{{datum}}", status.next ? safeDate(status.next) : "binnenkort")
    .replaceAll("{{bedrijf}}", company?.name || "WerkbonSysteem.nl");
}

function sendMaintenanceReminderEmail(customer, triggerLabel = "handmatig") {
  if (!maintenanceReminderEnabledForCompany()) return false;
  if (!customer?.email) return false;
  const status = customerMaintenanceStatus(customer);
  const template = ensureMaintenanceReminderTemplate();
  const now = new Date().toISOString();
  const company = currentCompany();
  const message = {
    id: uid("mail"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    folder: "Verzonden",
    from_name: currentUser()?.name || company?.name || "",
    from_email: currentUser()?.email || "",
    to_email: customer.email,
    subject: `${template?.subject || "Onderhoudsherinnering"} - ${company?.name || "WerkbonSysteem.nl"}`,
    body: renderMaintenanceReminderBody(template, customer, status),
    received_at: now,
    sent_at: now,
    is_read: true,
    has_attachments: Boolean(companyLogoSrc(company)),
    attachments: companyLogoSrc(company) ? [{ name: "bedrijfslogo", type: "company_logo", data_url: companyLogoSrc(company), added_at: now }] : [],
    customer_id: customer.id,
    status: "sent",
    delivery_status: "verzonden",
    provider: "maintenance_reminder_prepared",
    created_at: now,
    updated_at: now,
  };
  state.emailMessages.push(message);
  logEmailAction(message.id, "maintenance_reminder_send", `Onderhoudsherinnering ${triggerLabel} verzonden naar ${customer.email}`);
  state.customerNotes = state.customerNotes || [];
  state.customerNotes.push({
    id: uid("note"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    customer_id: customer.id,
    created_by: currentUser()?.id || "system",
    note: `Onderhoudsherinnering verzonden (${triggerLabel}) voor ${status.next ? safeDate(status.next) : "onbekende datum"}.`,
    source: "maintenance_reminder",
    follow_up_action: "afspraak maken",
    created_at: now,
  });
  customer.last_maintenance_reminder_sent_at = now;
  customer.last_maintenance_reminder_status = "verzonden";
  customer.updated_at = now;
  return true;
}

function autoSendMaintenanceReminders() {
  if (!maintenanceReminderEnabledForCompany()) return;
  state.emailMessages = state.emailMessages || [];
  const thresholds = [30, 14, 0, -7];
  customerScopedRows().filter(customerReminderEnabled).forEach((customer) => {
    if (!customer.email) return;
    const status = customerMaintenanceStatus(customer);
    if (!status.next || status.days === null || !thresholds.includes(status.days)) return;
    const marker = `${customer.id}|${status.next}|${status.days}`;
    const alreadySent = (state.emailAuditLogs || []).some((log) => log.details && String(log.details).includes(marker));
    if (alreadySent) return;
    if (sendMaintenanceReminderEmail(customer, `${status.days} dagen`)) {
      const last = (state.emailAuditLogs || [])[state.emailAuditLogs.length - 1];
      if (last) last.details = `${last.details} | ${marker}`;
    }
  });
  saveState();
}

function customerSearchText(customer) {
  const appliances = customerAppliances(customer);
  return [
    customer.customer_name,
    customer.contact_person,
    customer.address,
    customer.postal_code,
    customer.city,
    customer.phone,
    customer.email,
    ...appliances.flatMap((appliance) => [appliance.brand, appliance.model, appliance.serial_number, appliance.category]),
  ].join(" ").toLowerCase();
}

function customerFilterValue(key) {
  ui.customerFilters = ui.customerFilters || {};
  return String(ui.customerFilters[key] || "");
}

function setCustomerFilter(key, value) {
  ui.customerFilters = ui.customerFilters || {};
  ui.customerFilters[key] = value || "";
  render();
}

function setCustomerSearch(value) {
  ui.customerSearch = value || "";
  render();
}

function filteredCustomerRows() {
  const search = String(ui.customerSearch || "").trim().toLowerCase();
  const filters = ui.customerFilters || {};
  const matches = (value, query) => !query || String(value || "").toLowerCase().includes(String(query || "").toLowerCase());
  return customerScopedRows()
    .filter((customer) => !search || customerSearchText(customer).includes(search))
    .filter((customer) => {
      const appliances = customerAppliances(customer);
      const lastVisit = customerLastVisit(customer);
      const openCount = customerOpenWorkorders(customer).length;
      const maintenance = customerMaintenanceStatus(customer);
      const postcodeArea = String(customer.postal_code || "").replace(/\s+/g, "").slice(0, 4);
      return matches(customer.city, filters.city) &&
        matches(postcodeArea, filters.postcode) &&
        (!filters.brand || appliances.some((appliance) => matches(appliance.brand, filters.brand))) &&
        (!filters.model || appliances.some((appliance) => matches(appliance.model, filters.model))) &&
        (!filters.category || appliances.some((appliance) => matches(appliance.category, filters.category))) &&
        matches(lastVisit, filters.last_visit) &&
        (!filters.open_workorders || (filters.open_workorders === "yes" ? openCount > 0 : openCount === 0)) &&
        (!filters.maintenance_needed || (filters.maintenance_needed === "yes" ? customerMaintenanceNeeded(customer) : !customerMaintenanceNeeded(customer))) &&
        (!filters.maintenance_status || maintenance.status === filters.maintenance_status) &&
        (!filters.reminder_enabled || (filters.reminder_enabled === "yes" ? customerReminderEnabled(customer) : !customerReminderEnabled(customer)));
    })
    .sort((a, b) => String(a.customer_name || "").localeCompare(String(b.customer_name || "")));
}

function customerMapPosition(customer, index) {
  const lat = Number(customer.lat || customer.latitude);
  const lng = Number(customer.lng || customer.longitude);
  if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
    return {
      left: Math.max(6, Math.min(92, 8 + ((lng - 3.2) / 4.2) * 84)),
      top: Math.max(8, Math.min(88, 86 - ((lat - 50.6) / 3.0) * 74)),
    };
  }
  const seed = String(`${customer.postal_code || ""}${customer.city || ""}${customer.address || ""}`)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), index * 29);
  return {
    left: 8 + (seed * 37) % 84,
    top: 12 + (seed * 53) % 74,
  };
}

function groupedCustomersByRegion(customers) {
  const groups = new Map();
  customers.forEach((customer) => {
    const key = customer.city || String(customer.postal_code || "").slice(0, 4) || "Onbekend";
    groups.set(key, [...(groups.get(key) || []), customer]);
  });
  return [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
}

function openCustomerPopup(customerId) {
  const customer = byId(state.customers || [], customerId);
  if (!customer || !isSameCompany(customer)) return;
  ui.customerPopupId = customerId;
  render();
}

function closeCustomerPopup() {
  ui.customerPopupId = "";
  render();
}

function openCustomerDetail(customerId) {
  const customer = byId(state.customers || [], customerId);
  if (!customer || !isSameCompany(customer)) return;
  ui.customerDetailId = customerId;
  ui.customerPopupId = "";
  location.hash = "#/admin/customers";
  render();
}

function closeCustomerDetail() {
  ui.customerDetailId = "";
  render();
}

function routeToCustomer(customer) {
  const query = `${customer.address || ""}, ${customer.postal_code || ""} ${customer.city || ""}`.trim();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderCustomerMap(customers) {
  const withLocation = customers.filter((customer) => Number.isFinite(Number(customer.lat || customer.latitude)) && Number.isFinite(Number(customer.lng || customer.longitude)));
  const missingLocation = customers.filter((customer) => !Number.isFinite(Number(customer.lat || customer.latitude)) || !Number.isFinite(Number(customer.lng || customer.longitude)));
  return `<section class="panel customer-map-panel">
    <div class="article-head">
      <div><h2>Kaartweergave Nederland</h2><p>OpenStreetMap met Leaflet, clustering en heatmap. Pins volgen de actieve klant- en toestelfilters.</p></div>
      <span class="badge">${withLocation.length}/${customers.length} locaties</span>
    </div>
    <div id="customer-leaflet-map" class="customer-leaflet-map" aria-label="Nederland kaart met klantlocaties"></div>
    <div id="customer-map-provider-warning" class="info-box" style="display:none">Kaartprovider niet geladen. Controleer internettoegang voor Leaflet/OpenStreetMap.</div>
    ${missingLocation.length ? `<div class="customer-map-missing"><strong>Adres nog niet gevonden</strong>${missingLocation.slice(0, 12).map((customer) => `<span>${escapeHtml(customer.customer_name || "-")} - ${escapeHtml(customer.postal_code || "")} ${escapeHtml(customer.house_number || "")}</span>`).join("")}${missingLocation.length > 12 ? `<span>+ ${missingLocation.length - 12} meer</span>` : ""}</div>` : ""}
  </section>`;
}

function customerMapRowsForLeaflet() {
  return filteredCustomerRows().map((customer) => ({
    id: customer.id,
    name: customer.customer_name || "-",
    address: customer.address || "",
    house_number: customer.house_number || "",
    postal_code: customer.postal_code || "",
    city: customer.city || "",
    phone: customer.phone || "",
    email: customer.email || "",
    lat: Number(customer.lat || customer.latitude),
    lng: Number(customer.lng || customer.longitude),
    appliances: customerAppliances(customer).map((item) => ({
      brand: item.brand || "",
      model: item.model || "",
      serial_number: item.serial_number || "",
      category: item.category || "",
    })),
    open_workorders: customerOpenWorkorders(customer).length,
  }));
}

function customerHasMapLocation(row) {
  return Number.isFinite(Number(row.lat)) && Number.isFinite(Number(row.lng));
}

function customerMapPopupHtml(row) {
  const applianceLabel = row.appliances.length
    ? row.appliances.map((item) => `${item.brand || "-"} ${item.model || ""}`).slice(0, 3).join(", ")
    : "Geen toestellen";
  return `<div class="leaflet-customer-popup">
    <strong>${escapeHtml(row.name)}</strong>
    <span>${escapeHtml(`${row.address || ""} ${row.house_number || ""}`.trim() || "-")}</span>
    <span>${escapeHtml(`${row.postal_code || ""} ${row.city || ""}`.trim() || "-")}</span>
    <span>${escapeHtml(applianceLabel)}</span>
    <button type="button" onclick="openCustomerPopup('${row.id}')">Open klant</button>
  </div>`;
}

async function geocodeCustomerLocationsForMap(rows) {
  if (ui.customerGeocodingBusy) return;
  const targets = rows
    .filter((row) => !customerHasMapLocation(row) && row.postal_code && row.house_number)
    .slice(0, 5);
  if (!targets.length) return;
  ui.customerGeocodingBusy = true;
  let changed = false;
  for (const row of targets) {
    try {
      const query = encodeURIComponent(`${row.postal_code} ${row.house_number}, ${row.city || ""}, Nederland`);
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=nl&limit=1&q=${query}`, { headers: { Accept: "application/json" } });
      const results = await response.json();
      const result = results?.[0];
      const customer = byId(state.customers || [], row.id);
      if (customer && result?.lat && result?.lon) {
        customer.lat = Number(result.lat);
        customer.lng = Number(result.lon);
        customer.latitude = customer.lat;
        customer.longitude = customer.lng;
        customer.geocode_provider = "openstreetmap_nominatim";
        customer.map_location_saved = true;
        customer.updated_at = new Date().toISOString();
        changed = true;
      }
    } catch {
      // Keep missing-location warning visible when provider lookup fails.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  ui.customerGeocodingBusy = false;
  if (changed) {
    saveState();
    setTimeout(initCustomerLeafletMap, 0);
  }
}

function initCustomerLeafletMap() {
  const el = document.getElementById("customer-leaflet-map");
  if (!el) return;
  if (!window.L) {
    const warning = document.getElementById("customer-map-provider-warning");
    if (warning) warning.style.display = "block";
    return;
  }
  const rows = customerMapRowsForLeaflet();
  geocodeCustomerLocationsForMap(rows);
  const located = rows.filter(customerHasMapLocation);
  if (window.customerLeafletMap) {
    window.customerLeafletMap.remove();
    window.customerLeafletMap = null;
  }
  const map = window.L.map(el, { scrollWheelZoom: true }).setView([52.1326, 5.2913], 7);
  window.customerLeafletMap = map;
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);
  const markerLayer = window.L.markerClusterGroup ? window.L.markerClusterGroup() : window.L.layerGroup();
  located.forEach((row) => {
    const marker = window.L.marker([row.lat, row.lng]).bindPopup(customerMapPopupHtml(row));
    marker.on("click", () => marker.openPopup());
    markerLayer.addLayer(marker);
  });
  markerLayer.addTo(map);
  if (located.length && window.L.heatLayer) {
    window.L.heatLayer(located.map((row) => [row.lat, row.lng, Math.max(1, row.open_workorders + row.appliances.length)]), {
      radius: 34,
      blur: 24,
      maxZoom: 11,
      gradient: { 0.25: "#3b82f6", 0.55: "#e0a13a", 1: "#ef4444" },
    }).addTo(map);
  } else {
    located.forEach((row) => window.L.circle([row.lat, row.lng], {
      radius: 3500,
      color: "#e0a13a",
      fillColor: "#e0a13a",
      fillOpacity: 0.12,
      weight: 1,
    }).addTo(map));
  }
  if (located.length) {
    const bounds = window.L.latLngBounds(located.map((row) => [row.lat, row.lng]));
    map.fitBounds(bounds.pad(0.18), { maxZoom: 11 });
  }
}

function renderCustomerCard(customer) {
  const workorders = customerWorkorders(customer);
  const appliances = customerAppliances(customer);
  const openCount = customerOpenWorkorders(customer).length;
  const lastVisit = customerLastVisit(customer);
  const maintenance = customerMaintenanceStatus(customer);
  const reminderEnabled = customerReminderEnabled(customer);
  return `<article class="customer-card">
    <div class="customer-card-main">
      <div>
        <h3>${escapeHtml(customer.customer_name || "-")}</h3>
        <p>${escapeHtml(customer.address || "-")} ${escapeHtml(customer.postal_code || "")} ${escapeHtml(customer.city || "")}</p>
      </div>
      <span class="badge ${openCount ? "warn" : "ok"}">${openCount ? `${openCount} open` : "Geen open werkbonnen"}</span>
    </div>
    <div class="customer-card-grid">
      <div><span>Plaats</span><strong>${escapeHtml(customer.city || "-")}</strong></div>
      <div><span>Telefoon</span><strong>${escapeHtml(customer.phone || "-")}</strong></div>
      <div><span>E-mail</span><strong>${escapeHtml(customer.email || "-")}</strong></div>
      <div><span>Werkbonnen</span><strong>${workorders.length}</strong></div>
      <div><span>Laatste bezoek</span><strong>${lastVisit ? safeDate(lastVisit) : "-"}</strong></div>
      <div><span>Toestellen</span><strong>${appliances.length ? appliances.map((item) => `${item.brand || "-"} ${item.model || ""}`).slice(0, 2).join(", ") : "-"}</strong></div>
    </div>
    <section class="maintenance-reminder-strip">
      <div>
        <strong>Onderhoudsherinneringen</strong>
        <span>Laatste onderhoud: ${customerLastMaintenanceDate(customer) ? safeDate(customerLastMaintenanceDate(customer)) : "-"} · Interval: ${customerMaintenanceInterval(customer)} maanden · Volgende: ${maintenance.next ? safeDate(maintenance.next) : "-"} · Status: ${maintenance.status}</span>
      </div>
      <label>Aan / Uit
        <select onchange="updateCustomer('${customer.id}', 'maintenance_reminder_enabled', this.value === 'true')" ${!maintenanceReminderEnabledForCompany() ? "disabled" : ""}>
          <option value="false" ${!reminderEnabled ? "selected" : ""}>Uit</option>
          <option value="true" ${reminderEnabled ? "selected" : ""}>Aan</option>
        </select>
      </label>
    </section>
    <div class="button-row">
      <button class="btn secondary" type="button" onclick="openCustomerPopup('${customer.id}')">Details</button>
      <button class="btn secondary" type="button" onclick="openCustomerDetail('${customer.id}')">Open klant</button>
      <a class="btn secondary" target="_blank" href="${escapeAttr(routeToCustomer(customer))}">Route</a>
      ${reminderEnabled && maintenanceReminderEnabledForCompany() ? `<button class="btn secondary" type="button" onclick="sendMaintenanceReminderNow('${customer.id}')">Herinnering sturen</button>` : ""}
      <button class="btn secondary" type="button" onclick="openCustomerEdit('${customer.id}')">Bewerken</button>
    </div>
  </article>`;
}

function renderCustomerPopup() {
  const customer = ui.customerPopupId ? byId(state.customers || [], ui.customerPopupId) : null;
  if (!customer || !isSameCompany(customer)) return "";
  const appliances = customerAppliances(customer);
  const workorders = customerWorkorders(customer).sort((a, b) => String(b.completedAt || b.date || "").localeCompare(String(a.completedAt || a.date || "")));
  const open = workorders.filter((project) => !isProjectCompleted(project));
  const maintenance = customerMaintenanceStatus(customer);
  return `<section class="modal-backdrop"><div class="panel confirm-modal customer-popup">
    <div class="article-head"><div><h2>${escapeHtml(customer.customer_name || "-")}</h2><p>${escapeHtml(customer.address || "-")} ${escapeHtml(customer.postal_code || "")} ${escapeHtml(customer.city || "")}</p></div><button class="btn secondary" type="button" onclick="closeCustomerPopup()">Sluiten</button></div>
    <div class="meta-grid">
      <div class="meta"><span>Telefoon</span><strong>${escapeHtml(customer.phone || "-")}</strong></div>
      <div class="meta"><span>E-mail</span><strong>${escapeHtml(customer.email || "-")}</strong></div>
      <div class="meta"><span>Laatste werkbon</span><strong>${workorders[0] ? escapeHtml(workorderNumber(workorders[0])) : "-"}</strong></div>
      <div class="meta"><span>Openstaand</span><strong>${open.length}</strong></div>
      <div class="meta"><span>Onderhoud</span><strong>${escapeHtml(maintenance.status)}</strong></div>
      <div class="meta"><span>Volgende onderhoudsdatum</span><strong>${maintenance.next ? safeDate(maintenance.next) : "-"}</strong></div>
    </div>
    <h3>Aanwezige toestellen</h3>
    ${appliances.length ? appliances.map((item) => `<p><strong>${escapeHtml(item.brand || "-")} ${escapeHtml(item.model || "")}</strong><br>${escapeHtml(item.serial_number || "Geen serienummer")} - ${escapeHtml(item.category || "-")} ${item.build_year ? `- bouwjaar ${escapeHtml(item.build_year)}` : ""}<br>Laatste onderhoud: ${item.last_service_date ? safeDate(item.last_service_date) : "-"} ${item.next_service_date ? `- Volgend: ${safeDate(item.next_service_date)}` : ""}</p>${item.typeplate_photo?.data_url ? `<div class="photo-row"><img src="${escapeAttr(item.typeplate_photo.data_url)}" alt="Foto typeplaatje" /><span>${escapeHtml(item.typeplate_photo.file_name || "typeplaatje")}</span></div>` : ""}`).join("") : `<p class="muted">Geen toestellen geregistreerd.</p>`}
    <h3>Onderhoudshistorie</h3>
    ${workorders.length ? workorders.slice(0, 5).map((project) => `<p>${safeDate(project.completedAt || project.date || project.createdAt)} - ${escapeHtml(workorderNumber(project))} - ${escapeHtml(project.status || "-")}</p>`).join("") : `<p class="muted">Geen werkbonhistorie.</p>`}
    <div class="button-row">
      <button class="btn success" type="button" onclick="openCustomerDetail('${customer.id}')">Open klant</button>
      <a class="btn secondary" href="#/new">Nieuwe werkbon</a>
      <a class="btn secondary" target="_blank" href="${escapeAttr(routeToCustomer(customer))}">Route</a>
    </div>
  </div></section>`;
}

function renderCustomerDetailPage(customer) {
  const appliances = customerAppliances(customer);
  const workorders = customerWorkorders(customer).sort((a, b) => String(b.completedAt || b.date || "").localeCompare(String(a.completedAt || a.date || "")));
  const quotes = customerQuotes(customer);
  const invoices = customerInvoices(customer);
  const notes = companyScoped(state.customerNotes || []).filter((note) => note.customer_id === customer.id);
  const photos = workorders.flatMap((project) => storedWorkOrderPhotos(project).map((photo) => ({ ...photo, project })));
  const maintenance = customerMaintenanceStatus(customer);
  return `<section class="office-page-head">
    <div><h2>${escapeHtml(customer.customer_name || "-")}</h2><p>Klantdossier met adressen, toestellen, werkbonnen, facturen, offertes, foto's en notities.</p></div>
    <div class="button-row"><button class="btn secondary" type="button" onclick="closeCustomerDetail()">Terug naar klanten</button><button class="btn secondary" type="button" onclick="openCustomerEdit('${customer.id}')">Bewerken</button></div>
  </section>
  <section class="stats office-kpis">
    <div class="stat-card"><span>Werkbonnen</span><strong>${workorders.length}</strong></div>
    <div class="stat-card"><span>Toestellen</span><strong>${appliances.length}</strong></div>
    <div class="stat-card"><span>Offertes</span><strong>${quotes.length}</strong></div>
    <div class="stat-card"><span>Facturen/betalingen</span><strong>${invoices.length}</strong></div>
  </section>
  <section class="customer-detail-grid">
    <section class="panel"><h2>Klantgegevens</h2><div class="meta-grid"><div class="meta"><span>Adres</span><strong>${escapeHtml(customer.address || "-")}</strong></div><div class="meta"><span>Postcode</span><strong>${escapeHtml(customer.postal_code || "-")}</strong></div><div class="meta"><span>Plaats</span><strong>${escapeHtml(customer.city || "-")}</strong></div><div class="meta"><span>Telefoon</span><strong>${escapeHtml(customer.phone || "-")}</strong></div><div class="meta"><span>E-mail</span><strong>${escapeHtml(customer.email || "-")}</strong></div></div></section>
    <section class="panel"><h2>Adressen</h2><p>${escapeHtml(customer.address || "-")}<br>${escapeHtml(customer.postal_code || "")} ${escapeHtml(customer.city || "")}</p><a class="btn secondary" target="_blank" href="${escapeAttr(routeToCustomer(customer))}">Route</a></section>
  </section>
  <section class="panel"><h2>Onderhoudsplanning</h2><div class="meta-grid"><div class="meta"><span>Laatste onderhoud</span><strong>${customerLastMaintenanceDate(customer) ? safeDate(customerLastMaintenanceDate(customer)) : "-"}</strong></div><div class="meta"><span>Interval</span><strong>${customerMaintenanceInterval(customer)} maanden</strong></div><div class="meta"><span>Volgende onderhoud</span><strong>${maintenance.next ? safeDate(maintenance.next) : "-"}</strong></div><div class="meta"><span>Status</span><strong>${escapeHtml(maintenance.status)}</strong></div><div class="meta"><span>E-mailherinnering</span><strong>${customerReminderEnabled(customer) ? "Ja" : "Nee"}</strong></div></div><div class="form-grid" style="margin-top:12px"><label>Onderhoudsinterval maanden <input type="number" min="1" value="${customerMaintenanceInterval(customer)}" onchange="updateCustomer('${customer.id}', 'maintenance_interval_months', this.value)" /></label><label>Volgende onderhoudsdatum <input type="date" value="${escapeAttr(maintenance.next || "")}" onchange="updateCustomer('${customer.id}', 'next_maintenance_date', this.value)" /></label><label>Herinneringen <select onchange="updateCustomer('${customer.id}', 'maintenance_reminder_enabled', this.value === 'true')"><option value="false" ${!customerReminderEnabled(customer) ? "selected" : ""}>Uit</option><option value="true" ${customerReminderEnabled(customer) ? "selected" : ""}>Aan</option></select></label></div></section>
  <section class="panel"><h2>Toestellen</h2>${appliances.length ? `<div class="table-wrap"><table><thead><tr><th>Merk</th><th>Type</th><th>Serienummer</th><th>Bouwjaar</th><th>Categorie</th><th>Laatste service</th><th>Volgend onderhoud</th><th>Foto</th></tr></thead><tbody>${appliances.map((item) => `<tr><td>${escapeHtml(item.brand || "-")}</td><td>${escapeHtml(item.model || "-")}</td><td>${escapeHtml(item.serial_number || "-")}</td><td>${escapeHtml(item.build_year || "-")}</td><td>${escapeHtml(item.category || "-")}</td><td>${safeDate(item.last_service_date || item.service_date)}</td><td>${item.next_service_date ? safeDate(item.next_service_date) : "-"}</td><td>${item.typeplate_photo?.data_url ? "Ja" : "Nee"}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Geen toestellen geregistreerd.</p>`}</section>
  ${renderCustomerCommunication(customer)}
  <section class="panel"><h2>Werkbonhistorie</h2>${workorders.length ? `<div class="table-wrap"><table><thead><tr><th>Datum</th><th>Werkbon</th><th>Status</th><th>Monteur</th><th>Actie</th></tr></thead><tbody>${workorders.map((project) => `<tr><td>${safeDate(project.completedAt || project.date || project.createdAt)}</td><td>${escapeHtml(workorderNumber(project))}</td><td>${escapeHtml(project.status || "-")}</td><td>${escapeHtml(mechanicNameById(project.assignedMechanicId || project.mechanicId) || project.technician || "-")}</td><td>${canOpenWorkorder(project) ? `<a class="btn secondary" href="#/project/${project.id}">Open werkbon</a>` : "-"}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Geen werkbonnen.</p>`}</section>
  <section class="customer-detail-grid">
    <section class="panel"><h2>Facturen</h2>${invoices.length ? invoices.map((invoice) => `<p>${escapeHtml(invoice.invoice_number || invoice.id)} - ${euro(invoice.amount || invoice.total_inc_vat || 0)} - ${escapeHtml(invoice.status || "-")}</p>`).join("") : `<p class="muted">Geen facturen.</p>`}</section>
    <section class="panel"><h2>Offertes</h2>${quotes.length ? quotes.map((quote) => `<p>${escapeHtml(quote.quote_number || quote.id)} - ${euro(quote.total_inc_vat || 0)} - ${escapeHtml(quote.status || "-")}</p>`).join("") : `<p class="muted">Geen offertes.</p>`}</section>
  </section>
  <section class="panel"><h2>Foto's/documenten</h2>${photos.length ? `<div class="photo-grid">${photos.slice(0, 12).map((photo) => `<div class="photo-thumb"><img src="${escapeAttr(photoSrc(photo))}" alt="${escapeAttr(photo.file_name || "foto")}" /><span>${escapeHtml(photo.file_name || photo.category || "foto")}</span><small>${escapeHtml(workorderNumber(photo.project))}</small></div>`).join("")}</div>` : `<p class="muted">Geen foto's of documenten.</p>`}</section>
  <section class="panel"><h2>Notities</h2>${notes.length ? notes.map((note) => `<p>${safeDate(note.created_at)} - ${escapeHtml(note.note || "")}</p>`).join("") : `<p class="muted">${escapeHtml(customer.notes || "Geen notities.")}</p>`}</section>
  ${ui.editingCustomerId ? renderCustomerModal(ui.editingCustomerId) : ""}`;
}

function renderCustomers() {
  if (!isCompanyModuleActive("customers")) return moduleInactiveMessage();
  autoSendMaintenanceReminders();
  const detailCustomer = ui.customerDetailId ? byId(state.customers || [], ui.customerDetailId) : null;
  if (detailCustomer && isSameCompany(detailCustomer)) return renderCustomerDetailPage(detailCustomer);
  const rows = filteredCustomerRows();
  const all = customerScopedRows();
  return `<section class="customers-page">
    <section class="office-page-head">
      <div><h2>Klanten</h2><p>Zoeken, filteren, kaartweergave en klantdossiers binnen ${escapeHtml(currentCompany()?.name || "het bedrijf")}.</p></div>
      <button class="btn success" type="button" onclick="openCustomerEdit('new')">Klant toevoegen</button>
    </section>
    <section class="panel customer-search-panel">
      <label>Zoeken
        <input value="${escapeAttr(ui.customerSearch || "")}" placeholder="Klantnaam, adres, plaats, postcode, telefoon, e-mail of serienummer toestel" oninput="setCustomerSearch(this.value)" />
      </label>
      <div class="form-grid">
        <label>Plaats <input value="${escapeAttr(customerFilterValue("city"))}" oninput="setCustomerFilter('city', this.value)" /></label>
        <label>Postcodegebied <input value="${escapeAttr(customerFilterValue("postcode"))}" placeholder="Bijv. 3011" oninput="setCustomerFilter('postcode', this.value)" /></label>
        <label>Merk toestel <input value="${escapeAttr(customerFilterValue("brand"))}" oninput="setCustomerFilter('brand', this.value)" /></label>
        <label>Type toestel <input value="${escapeAttr(customerFilterValue("model"))}" oninput="setCustomerFilter('model', this.value)" /></label>
        <label>Toestelcategorie <input value="${escapeAttr(customerFilterValue("category"))}" oninput="setCustomerFilter('category', this.value)" /></label>
        <label>Laatste bezoekdatum <input value="${escapeAttr(customerFilterValue("last_visit"))}" placeholder="2026-05" oninput="setCustomerFilter('last_visit', this.value)" /></label>
        <label>Openstaande werkbonnen <select onchange="setCustomerFilter('open_workorders', this.value)"><option value="">Alle</option><option value="yes" ${customerFilterValue("open_workorders") === "yes" ? "selected" : ""}>Ja</option><option value="no" ${customerFilterValue("open_workorders") === "no" ? "selected" : ""}>Nee</option></select></label>
        <label>Onderhoud nodig <select onchange="setCustomerFilter('maintenance_needed', this.value)"><option value="">Alle</option><option value="yes" ${customerFilterValue("maintenance_needed") === "yes" ? "selected" : ""}>Ja</option><option value="no" ${customerFilterValue("maintenance_needed") === "no" ? "selected" : ""}>Nee</option></select></label>
        <label>Onderhoudsstatus <select onchange="setCustomerFilter('maintenance_status', this.value)"><option value="">Alle</option>${["Niet nodig", "Binnenkort nodig", "Te laat"].map((status) => `<option value="${status}" ${customerFilterValue("maintenance_status") === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
        <label>Herinnering <select onchange="setCustomerFilter('reminder_enabled', this.value)"><option value="">Alle</option><option value="yes" ${customerFilterValue("reminder_enabled") === "yes" ? "selected" : ""}>Aan</option><option value="no" ${customerFilterValue("reminder_enabled") === "no" ? "selected" : ""}>Uit</option></select></label>
      </div>
    </section>
    <section class="panel maintenance-reminder-company">
      <div class="article-head">
        <div><h2>Onderhoudsherinneringen</h2><p>Automatische e-mail op 30 dagen, 14 dagen, de onderhoudsdatum en 7 dagen na verlopen datum.</p></div>
        <label>Aan / Uit <select onchange="updateCompanySetting('maintenance_reminders_enabled', this.value === 'true')" ${!isCompanyModuleActive("maintenance_contracts") ? "disabled" : ""}><option value="false" ${!maintenanceReminderEnabledForCompany() ? "selected" : ""}>Uit</option><option value="true" ${maintenanceReminderEnabledForCompany() ? "selected" : ""}>Aan</option></select></label>
      </div>
      ${!isCompanyModuleActive("maintenance_contracts") ? `<p class="muted">Module Onderhoudscontracten is niet actief binnen dit abonnement.</p>` : `<p class="muted">Company Admin beheert dit per bedrijf. Verzonden herinneringen komen in klantnotities en e-mail auditlog.</p>`}
    </section>
    ${renderCustomerMap(rows)}
    <section class="stats office-kpis">
      <div class="stat-card"><span>Klanten gevonden</span><strong>${rows.length}/${all.length}</strong></div>
      <div class="stat-card"><span>Open werkbonnen</span><strong>${rows.reduce((sum, customer) => sum + customerOpenWorkorders(customer).length, 0)}</strong></div>
      <div class="stat-card"><span>Toestellen</span><strong>${rows.reduce((sum, customer) => sum + customerAppliances(customer).length, 0)}</strong></div>
      <div class="stat-card"><span>Onderhoud nodig</span><strong>${rows.filter(customerMaintenanceNeeded).length}</strong></div>
    </section>
    <section class="customers-list">
      ${rows.length ? rows.map(renderCustomerCard).join("") : `<section class="panel empty">Geen klanten gevonden.</section>`}
    </section>
    ${ui.editingCustomerId ? renderCustomerModal(ui.editingCustomerId) : ""}
    ${renderCustomerPopup()}
  </section>`;
}

function sendMaintenanceReminderNow(customerId) {
  const customer = byId(state.customers || [], customerId);
  if (!customer || !isSameCompany(customer)) return;
  if (!customer.email) return alert("Geen e-mailadres bekend voor deze klant.");
  if (!maintenanceReminderEnabledForCompany()) return alert("Onderhoudsherinneringen zijn niet actief voor dit bedrijf.");
  sendMaintenanceReminderEmail(customer, "handmatig");
  saveState();
  alert(`Onderhoudsherinnering verzonden naar ${customer.email}.`);
  render();
}

function platformModulesCompanySearch() {
  return String(ui.platformModulesCompanySearch || "").trim().toLowerCase();
}

function setPlatformModulesCompanySearch(value) {
  ui.platformModulesCompanySearch = value || "";
  render();
}

function platformModulesOpenCompanies() {
  ui.platformModulesOpenCompanies = ui.platformModulesOpenCompanies || {};
  return ui.platformModulesOpenCompanies;
}

function togglePlatformModulesCompany(companyId) {
  const open = platformModulesOpenCompanies();
  open[companyId] = !open[companyId];
  render();
}

function platformModuleDrafts() {
  ui.platformModuleDrafts = ui.platformModuleDrafts || {};
  return ui.platformModuleDrafts;
}

function platformModuleDraft(company) {
  ensureCompanyModulesEnabled(company);
  const drafts = platformModuleDrafts();
  drafts[company.id] = drafts[company.id] || {};
  moduleCatalog().forEach((module) => {
    if (typeof drafts[company.id][module.key] !== "boolean") {
      drafts[company.id][module.key] = company.modules_enabled?.[module.key] === true;
    }
  });
  return drafts[company.id];
}

function setPlatformModuleDraft(companyId, moduleKey, value) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  const key = normalizeModuleKey(moduleKey);
  const draft = platformModuleDraft(company);
  draft[key] = Boolean(value);
  render();
}

function platformModuleActiveCount(company) {
  const draft = platformModuleDraft(company);
  return moduleCatalog().filter((module) => draft[module.key] === true).length;
}

function saveCompanyModules(companyId) {
  const company = byId(state.companies || [], companyId);
  if (!company || !isPlatformSuperAdmin()) return;
  const draft = platformModuleDraft(company);
  ensureCompanyModulesEnabled(company);
  const changed = [];
  moduleCatalog().forEach((module) => {
    const next = draft[module.key] === true;
    const previous = company.modules_enabled[module.key] === true;
    company.modules_enabled[module.key] = next;
    company.module_meta[module.key] = {
      ...(company.module_meta[module.key] || {}),
      package: module.pkg,
      description: module.description,
      dependencies: module.dependencies,
      last_changed_at: next !== previous ? new Date().toISOString() : company.module_meta[module.key]?.last_changed_at || company.updated_at || "",
      last_changed_by: currentUser()?.id || "",
    };
    if (next !== previous) changed.push(`${module.label}: ${next ? "aan" : "uit"}`);
  });
  ensureCompanyPlatformConfig(company);
  company.updated_at = new Date().toISOString();
  logPlatformAction("modules opgeslagen", company.id, changed.length ? changed.join(", ") : "Geen wijzigingen");
  saveState();
  render();
}

function renderPlatformModuleCheckbox(company, module) {
  const draft = platformModuleDraft(company);
  const active = draft[module.key] === true;
  const missing = active ? module.dependencies.filter((dependency) => draft[dependency] !== true) : [];
  return `<label class="module-check-card ${active ? "active" : ""}">
    <input type="checkbox" ${active ? "checked" : ""} onchange="setPlatformModuleDraft('${company.id}', '${module.key}', this.checked)" />
    <span>
      <strong>${escapeHtml(module.label)}</strong>
      <small>${escapeHtml(module.pkg)}${module.dependencies.length ? ` - afhankelijk van ${module.dependencies.map((dependency) => moduleCatalog().find((item) => item.key === dependency)?.label || dependency).join(", ")}` : ""}</small>
      ${missing.length ? `<em>Afhankelijkheid mist: ${escapeHtml(missing.map((dependency) => moduleCatalog().find((item) => item.key === dependency)?.label || dependency).join(", "))}</em>` : ""}
    </span>
  </label>`;
}

function renderPlatformModulesCompany(company) {
  const isOpen = platformModulesOpenCompanies()[company.id] === true;
  const activeCount = platformModuleActiveCount(company);
  const modules = moduleCatalog();
  const basis = modules.filter((module) => module.pkg === "Basis");
  const extensions = modules.filter((module) => module.pkg !== "Basis");
  return `<article class="rights-company-card module-company-card ${isOpen ? "open" : ""}">
    <button class="rights-company-toggle" type="button" onclick="togglePlatformModulesCompany('${company.id}')">
      <span class="rights-caret">${isOpen ? "▾" : "▸"}</span>
      <span class="rights-company-name">${escapeHtml(company.name || "-")}</span>
      <span class="badge">${activeCount}/${modules.length} actief</span>
      <span class="muted">${escapeHtml(company.subscription_package || "basis")}</span>
    </button>
    ${isOpen ? `<div class="module-company-body">
      <section class="module-group">
        <h3>Basis modules</h3>
        <div class="module-check-grid">${basis.map((module) => renderPlatformModuleCheckbox(company, module)).join("")}</div>
      </section>
      <section class="module-group">
        <h3>Uitbreidingsmodules</h3>
        <div class="module-check-grid">${extensions.map((module) => renderPlatformModuleCheckbox(company, module)).join("")}</div>
      </section>
      <div class="button-row">
        <button class="btn success" type="button" onclick="saveCompanyModules('${company.id}')">Modules opslaan</button>
      </div>
    </div>` : ""}
  </article>`;
}

function renderPlatformModules() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const search = platformModulesCompanySearch();
  const companies = platformCompanies()
    .filter((company) => !search || String(company.name || "").toLowerCase().includes(search))
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
  return `<section class="platform-rights-page platform-modules-page">
    <section class="panel rights-intro">
      <div class="article-head">
        <div>
          <h2>Modules</h2>
          <p>Platform Admin bepaalt per bedrijf welke modules zichtbaar en bruikbaar zijn voor Company Admin.</p>
        </div>
        <span class="badge">${companies.length} bedrijven</span>
      </div>
      <label>Zoek bedrijf
        <input value="${escapeAttr(ui.platformModulesCompanySearch || "")}" placeholder="Zoek bedrijf..." oninput="setPlatformModulesCompanySearch(this.value)" />
      </label>
    </section>
    <section class="rights-company-list">
      ${companies.length ? companies.map(renderPlatformModulesCompany).join("") : `<section class="panel empty">Geen bedrijven gevonden.</section>`}
    </section>
  </section>`;
}

function platformBillingCompanySearch() {
  return String(ui.platformBillingCompanySearch || "").trim().toLowerCase();
}

function setPlatformBillingCompanySearch(value) {
  ui.platformBillingCompanySearch = value || "";
  render();
}

function platformBillingOpenCompanies() {
  ui.platformBillingOpenCompanies = ui.platformBillingOpenCompanies || {};
  return ui.platformBillingOpenCompanies;
}

function togglePlatformBillingCompany(companyId) {
  const open = platformBillingOpenCompanies();
  open[companyId] = !open[companyId];
  render();
}

function subscriptionPlanAmount(company) {
  const explicit = Number(company.monthly_price ?? company.subscription_price ?? company.price_amount ?? 0);
  if (explicit > 0) return explicit;
  const plan = String(company.price_plan || company.subscription_package || "basis").toLowerCase();
  if (plan.includes("premium")) return 149;
  if (plan.includes("professional")) return 99;
  return 49;
}

function addMonthsIso(date, months) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next.toISOString();
}

function firstDayNextMonthIso(base = new Date()) {
  return new Date(base.getFullYear(), base.getMonth() + 1, 1).toISOString();
}

function daysBetweenToday(dateValue) {
  if (!dateValue) return 0;
  const target = new Date(dateValue);
  if (Number.isNaN(target.getTime())) return 0;
  const today = new Date();
  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return Math.floor((today - target) / 86400000);
}

function platformBillingHistory(company) {
  const external = [
    ...(state.platformBillingInvoices || []),
    ...(state.billingInvoices || []),
    ...(state.saasInvoices || []),
  ].filter((invoice) => strictRecordCompanyId(invoice) === company.id || invoice.company_id === company.id || invoice.companyId === company.id);
  const own = company.billing_history || company.billingHistory || company.invoices || company.billing_invoices || [];
  const rows = [...own, ...external].map((invoice, index) => ({
    id: invoice.id || invoice.invoice_number || invoice.number || `${company.id}-invoice-${index}`,
    invoice_number: invoice.invoice_number || invoice.number || invoice.invoiceNumber || `#${new Date().getFullYear()}-${String(index + 1).padStart(3, "0")}`,
    amount: Number(invoice.amount ?? invoice.total ?? invoice.total_inc_vat ?? invoice.open_amount ?? subscriptionPlanAmount(company)),
    status: invoice.status || invoice.payment_status || invoice.billing_status || "openstaand",
    invoice_date: invoice.invoice_date || invoice.created_at || invoice.createdAt || "",
    paid_at: invoice.paid_at || invoice.paidAt || "",
    due_date: invoice.due_date || invoice.dueDate || "",
  }));
  if (rows.length) return rows.sort((a, b) => String(b.invoice_date || b.due_date || "").localeCompare(String(a.invoice_date || a.due_date || "")));
  const amount = subscriptionPlanAmount(company);
  const nextDate = company.next_invoice_date || firstDayNextMonthIso();
  const previousDate = addMonthsIso(nextDate, -1);
  const status = billingStatusInfo(company).statusKey === "paid" ? "betaald" : "openstaand";
  return [{
    id: `${company.id}-current-invoice`,
    invoice_number: `#${new Date(previousDate).getFullYear()}-${String(new Date(previousDate).getMonth() + 1).padStart(3, "0")}`,
    amount,
    status,
    invoice_date: previousDate,
    paid_at: status === "betaald" ? (company.last_paid_at || company.last_payment_date || previousDate) : "",
    due_date: previousDate,
  }];
}

function billingStatusInfo(company) {
  const raw = String(company.billing_status || company.subscription_status || "").toLowerCase();
  const outstanding = Number(company.outstanding_amount ?? company.open_amount ?? company.amount_due ?? 0);
  const daysLate = Number(company.days_overdue ?? company.days_late ?? Math.max(0, daysBetweenToday(company.payment_due_date || company.due_date || "")));
  if (company.blocked || raw === "paused" || raw === "cancelled") return { label: "Gepauzeerd", statusKey: "paused", className: "paused" };
  if (raw === "overdue" || raw === "achterstand" || daysLate > 0) return { label: "Achterstand", statusKey: "overdue", className: "overdue" };
  if (raw === "open" || raw === "unpaid" || raw === "openstaand" || outstanding > 0) return { label: "Openstaand", statusKey: "open", className: "open" };
  return { label: "Betaald", statusKey: "paid", className: "paid" };
}

function platformBillingSummary(company) {
  const status = billingStatusInfo(company);
  const planAmount = subscriptionPlanAmount(company);
  const openAmount = Number(company.outstanding_amount ?? company.open_amount ?? company.amount_due ?? (status.statusKey === "paid" || status.statusKey === "paused" ? 0 : planAmount));
  const lastPaid = company.last_paid_at || company.last_payment_date || company.lastPaymentDate || platformBillingHistory(company).find((invoice) => String(invoice.status || "").toLowerCase().includes("betaald") || invoice.paid_at)?.paid_at || "";
  const nextInvoice = company.next_invoice_date || company.nextInvoiceDate || firstDayNextMonthIso();
  const dueDate = company.payment_due_date || company.due_date || "";
  const daysLate = Number(company.days_overdue ?? company.days_late ?? (status.statusKey === "overdue" ? Math.max(1, daysBetweenToday(dueDate || addMonthsIso(nextInvoice, -1))) : 0));
  return {
    status,
    paymentLabel: status.statusKey === "paid" ? "Betaald" : "Niet betaald",
    openAmount,
    lastPaid,
    nextInvoice,
    daysLate,
    planAmount,
    subscription: company.subscription_package || "basis",
    pricePlan: company.price_plan || company.subscription_package || "basis",
    workorders: companyProjects(company.id).length,
    users: companyUsers(company.id).filter((user) => !user.deleted && userRole(user) !== ROLES.PLATFORM_ADMIN).length,
    history: platformBillingHistory(company),
  };
}

function renderBillingStatusBadge(info) {
  return `<span class="billing-status-badge ${info.className}">${escapeHtml(info.label)}</span>`;
}

function renderPlatformBillingCompany(company) {
  const isOpen = platformBillingOpenCompanies()[company.id] === true;
  const summary = platformBillingSummary(company);
  const amountClass = summary.status.statusKey === "overdue" ? "danger" : summary.status.statusKey === "open" ? "warn" : "ok";
  return `<article class="rights-company-card billing-company-card ${isOpen ? "open" : ""}">
    <button class="rights-company-toggle" type="button" onclick="togglePlatformBillingCompany('${company.id}')">
      <span class="rights-caret">${isOpen ? "▾" : "▸"}</span>
      <span class="rights-company-name">${escapeHtml(company.name || "-")}</span>
      ${renderBillingStatusBadge(summary.status)}
      <span class="billing-open-amount ${amountClass}">Openstaand: ${euro(summary.openAmount)}</span>
    </button>
    <div class="billing-company-preview">
      <span>Status: ${escapeHtml(summary.status.label)}</span>
      <span>Openstaand: ${euro(summary.openAmount)}</span>
      <span>Laatste betaling: ${summary.lastPaid ? safeDate(summary.lastPaid) : "Niet ingevuld"}</span>
    </div>
    ${isOpen ? `<div class="billing-company-body">
      <section class="billing-meta-grid">
        <div class="meta"><span>Betaalstatus</span><strong>${escapeHtml(summary.status.label)}</strong></div>
        <div class="meta"><span>Betaald / niet betaald</span><strong>${escapeHtml(summary.paymentLabel)}</strong></div>
        <div class="meta ${amountClass}"><span>Openstaand bedrag</span><strong>${euro(summary.openAmount)}</strong></div>
        <div class="meta"><span>Betalingsachterstand</span><strong>${summary.status.statusKey === "overdue" ? "Ja" : "Nee"}</strong></div>
        <div class="meta"><span>Aantal dagen te laat</span><strong>${summary.daysLate}</strong></div>
        <div class="meta"><span>Laatste betaaldatum</span><strong>${summary.lastPaid ? safeDate(summary.lastPaid) : "Niet ingevuld"}</strong></div>
        <div class="meta"><span>Eerstvolgende factuurdatum</span><strong>${summary.nextInvoice ? safeDate(summary.nextInvoice) : "Niet ingevuld"}</strong></div>
        <div class="meta"><span>Pakket/abonnement</span><strong>${escapeHtml(summary.subscription)}</strong></div>
        <div class="meta"><span>Prijsplan</span><strong>${escapeHtml(summary.pricePlan)}</strong></div>
        <div class="meta"><span>Aantal werkbonnen</span><strong>${summary.workorders}</strong></div>
        <div class="meta"><span>Aantal gebruikers</span><strong>${summary.users}</strong></div>
      </section>
      <section class="panel subtle-panel billing-history">
        <h3>Factuurhistorie</h3>
        <div class="billing-history-list">
          ${summary.history.length ? summary.history.map((invoice) => `<div class="billing-history-row">
            <span>Factuur ${escapeHtml(invoice.invoice_number || invoice.id)}</span>
            <strong>${euro(invoice.amount)}</strong>
            <em>${escapeHtml(invoice.status || "-")}</em>
            <small>${invoice.paid_at ? `Betaald: ${safeDate(invoice.paid_at)}` : invoice.due_date ? `Vervaldatum: ${safeDate(invoice.due_date)}` : invoice.invoice_date ? safeDate(invoice.invoice_date) : "-"}</small>
          </div>`).join("") : `<p class="muted">Geen factuurhistorie beschikbaar.</p>`}
        </div>
      </section>
    </div>` : ""}
  </article>`;
}

function renderPlatformBilling() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const search = platformBillingCompanySearch();
  const companies = platformCompanies()
    .filter((company) => !search || String(company.name || "").toLowerCase().includes(search))
    .sort((a, b) => {
      const aStatus = platformBillingSummary(a).status.statusKey === "overdue" ? 0 : platformBillingSummary(a).status.statusKey === "open" ? 1 : 2;
      const bStatus = platformBillingSummary(b).status.statusKey === "overdue" ? 0 : platformBillingSummary(b).status.statusKey === "open" ? 1 : 2;
      return aStatus - bStatus || String(a.name || "").localeCompare(String(b.name || ""));
    });
  const unpaid = companies.filter((company) => ["overdue", "open"].includes(platformBillingSummary(company).status.statusKey));
  return `<section class="platform-rights-page platform-billing-page">
    <section class="panel rights-intro">
      <div class="article-head">
        <div>
          <h2>Facturatie</h2>
          <p>Bekijk per bedrijf betaalstatus, achterstand, openstaand bedrag en factuurhistorie.</p>
        </div>
        <span class="badge ${unpaid.length ? "danger" : "ok"}">${unpaid.length} niet betaald</span>
      </div>
      <label>Zoek bedrijf
        <input value="${escapeAttr(ui.platformBillingCompanySearch || "")}" placeholder="Zoek bedrijf..." oninput="setPlatformBillingCompanySearch(this.value)" />
      </label>
    </section>
    <section class="rights-company-list">
      ${companies.length ? companies.map(renderPlatformBillingCompany).join("") : `<section class="panel empty">Geen bedrijven gevonden.</section>`}
    </section>
  </section>`;
}

function platformBillingFilter() {
  return ui.platformBillingFilter || "all";
}

function setPlatformBillingFilter(value) {
  ui.platformBillingFilter = value || "all";
  render();
}

function billingProviderConfig(company) {
  const provider = company.billing_provider || company.payment_provider || company.provider || "Mollie/Stripe voorbereid";
  return {
    provider,
    mode: company.billing_collection_method || company.collection_method || "Automatische incasso / abonnementsbetaling",
    customerId: company.provider_customer_id || company.mollie_customer_id || company.stripe_customer_id || "",
    subscriptionId: company.provider_subscription_id || company.mollie_subscription_id || company.stripe_subscription_id || "",
  };
}

function platformBillingPayments(company) {
  return [
    ...(state.platformBillingPayments || []),
    ...(state.billingPayments || []),
    ...(state.subscriptionPayments || []),
    ...(company.billing_payments || company.billingPayments || []),
  ]
    .filter((payment) => strictRecordCompanyId(payment) === company.id || payment.company_id === company.id || payment.companyId === company.id)
    .map((payment) => ({
      id: payment.id || uid("billing-payment"),
      invoice_id: payment.invoice_id || payment.invoiceId || payment.billing_invoice_id || "",
      amount: Number(payment.amount ?? payment.total ?? 0),
      status: String(payment.status || payment.payment_status || "").toLowerCase(),
      provider: payment.provider || payment.payment_provider || "",
      transaction_id: payment.transaction_id || payment.transactionId || payment.provider_payment_id || "",
      paid_at: payment.paid_at || payment.paidAt || payment.created_at || "",
      failed_at: payment.failed_at || payment.failedAt || "",
    }));
}

function normalizeBillingInvoice(company, invoice, index) {
  const invoiceDate = invoice.invoice_date || invoice.created_at || invoice.createdAt || "";
  const dueDate = invoice.due_date || invoice.dueDate || invoice.payment_due_date || (invoiceDate ? addMonthsIso(invoiceDate, 0) : "");
  return {
    id: invoice.id || invoice.invoice_id || invoice.invoice_number || invoice.number || `${company.id}-invoice-${index}`,
    invoice_number: invoice.invoice_number || invoice.number || invoice.invoiceNumber || `#${new Date().getFullYear()}-${String(index + 1).padStart(3, "0")}`,
    amount: Number(invoice.amount ?? invoice.total ?? invoice.total_inc_vat ?? invoice.open_amount ?? subscriptionPlanAmount(company)),
    status: invoice.status || invoice.payment_status || invoice.billing_status || "",
    invoice_date: invoiceDate,
    paid_at: invoice.paid_at || invoice.paidAt || "",
    due_date: dueDate,
    next_invoice_date: invoice.next_invoice_date || invoice.nextInvoiceDate || "",
    provider: invoice.provider || invoice.payment_provider || "",
  };
}

function platformBillingHistory(company) {
  const external = [
    ...(state.platformBillingInvoices || []),
    ...(state.billingInvoices || []),
    ...(state.saasInvoices || []),
  ].filter((invoice) => strictRecordCompanyId(invoice) === company.id || invoice.company_id === company.id || invoice.companyId === company.id);
  const own = company.billing_history || company.billingHistory || company.invoices || company.billing_invoices || [];
  let rows = [...own, ...external].map((invoice, index) => normalizeBillingInvoice(company, invoice, index));
  if (!rows.length) {
    const amount = subscriptionPlanAmount(company);
    const nextDate = company.next_invoice_date || firstDayNextMonthIso();
    const previousDate = addMonthsIso(nextDate, -1);
    rows = [{
      id: `${company.id}-current-invoice`,
      invoice_number: `#${new Date(previousDate).getFullYear()}-${String(new Date(previousDate).getMonth() + 1).padStart(3, "0")}`,
      amount,
      status: company.billing_status || company.subscription_status || "betaald",
      invoice_date: previousDate,
      paid_at: company.last_paid_at || company.last_payment_date || "",
      due_date: company.payment_due_date || company.due_date || previousDate,
      next_invoice_date: nextDate,
      provider: company.billing_provider || "",
    }];
  }
  const payments = platformBillingPayments(company);
  rows = rows.map((invoice) => {
    const linkedPayments = payments.filter((payment) => payment.invoice_id === invoice.id || payment.invoice_id === invoice.invoice_number);
    const successful = linkedPayments.filter((payment) => ["paid", "betaald", "succeeded", "success"].includes(payment.status));
    const failed = linkedPayments.some((payment) => ["failed", "mislukt", "cancelled", "canceled"].includes(payment.status));
    const paidAmount = successful.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
    const derivedStatus = successful.length && paidAmount >= invoice.amount ? "Betaald" : failed ? "Betaling mislukt" : invoice.status || "";
    return {
      ...invoice,
      linked_payments: linkedPayments,
      paid_amount: paidAmount,
      open_amount: Math.max(0, invoice.amount - paidAmount),
      status: derivedStatus || invoice.status,
      paid_at: invoice.paid_at || successful[0]?.paid_at || "",
      failed_payment: failed,
    };
  });
  return rows.sort((a, b) => String(b.invoice_date || b.due_date || "").localeCompare(String(a.invoice_date || a.due_date || "")));
}

function invoiceStatusKey(invoice) {
  const status = String(invoice.status || "").toLowerCase();
  if (status.includes("mislukt") || status.includes("failed")) return "failed";
  if (status.includes("betaald") || status.includes("paid") || status.includes("succeeded")) return "paid";
  const daysLate = daysBetweenToday(invoice.due_date);
  if (daysLate > 0) return "overdue";
  if ((invoice.open_amount ?? invoice.amount) > 0) return "within_term";
  return "paid";
}

function billingStatusFromInvoices(company, invoices) {
  const raw = String(company.billing_status || company.subscription_status || "").toLowerCase();
  if (company.blocked || raw === "paused" || raw === "cancelled") return { label: "Gepauzeerd", statusKey: "paused", className: "paused" };
  if (invoices.some((invoice) => invoiceStatusKey(invoice) === "failed")) return { label: "Betaling mislukt", statusKey: "failed", className: "failed" };
  if (invoices.some((invoice) => invoiceStatusKey(invoice) === "overdue")) return { label: "Achterstand", statusKey: "overdue", className: "overdue" };
  if (invoices.some((invoice) => invoiceStatusKey(invoice) === "within_term")) return { label: "Binnen betaaltermijn", statusKey: "within_term", className: "within-term" };
  return { label: "Betaald", statusKey: "paid", className: "paid" };
}

function platformBillingSummary(company) {
  const history = platformBillingHistory(company);
  const status = billingStatusFromInvoices(company, history);
  const openInvoices = history.filter((invoice) => invoiceStatusKey(invoice) !== "paid");
  const openAmount = openInvoices.reduce((sum, invoice) => sum + Number(invoice.open_amount ?? invoice.amount ?? 0), 0);
  const paidInvoices = history.filter((invoice) => invoiceStatusKey(invoice) === "paid" || invoice.paid_at);
  const lastPaid = company.last_paid_at || company.last_payment_date || company.lastPaymentDate || paidInvoices.map((invoice) => invoice.paid_at || invoice.invoice_date).filter(Boolean).sort().pop() || "";
  const nextInvoice = company.next_invoice_date || company.nextInvoiceDate || history.find((invoice) => invoice.next_invoice_date)?.next_invoice_date || firstDayNextMonthIso();
  const overdueInvoices = history.filter((invoice) => invoiceStatusKey(invoice) === "overdue");
  const daysLate = Math.max(0, ...overdueInvoices.map((invoice) => daysBetweenToday(invoice.due_date)));
  const nearestDue = openInvoices.map((invoice) => invoice.due_date).filter(Boolean).sort()[0] || "";
  return {
    status,
    paymentLabel: status.statusKey === "paid" ? "Betaald" : "Niet betaald",
    openAmount,
    lastPaid,
    nextInvoice,
    dueDate: nearestDue,
    daysLate,
    planAmount: subscriptionPlanAmount(company),
    subscription: company.subscription_package || "basis",
    pricePlan: company.price_plan || company.subscription_package || "basis",
    workorders: companyProjects(company.id).length,
    users: companyUsers(company.id).filter((user) => !user.deleted && userRole(user) !== ROLES.PLATFORM_ADMIN).length,
    history,
    provider: billingProviderConfig(company),
  };
}

function billingFilterMatches(summary) {
  const filter = platformBillingFilter();
  if (filter === "paid") return summary.status.statusKey === "paid";
  if (filter === "open") return ["within_term", "open"].includes(summary.status.statusKey);
  if (filter === "overdue") return ["overdue", "failed"].includes(summary.status.statusKey);
  return true;
}

function renderPlatformBillingCompany(company) {
  const isOpen = platformBillingOpenCompanies()[company.id] === true;
  const summary = platformBillingSummary(company);
  const amountClass = ["overdue", "failed"].includes(summary.status.statusKey) ? "danger" : ["within_term", "open"].includes(summary.status.statusKey) ? "warn" : "ok";
  return `<article class="rights-company-card billing-company-card ${summary.status.className} ${isOpen ? "open" : ""}">
    <button class="rights-company-toggle" type="button" onclick="togglePlatformBillingCompany('${company.id}')">
      <span class="rights-caret">${isOpen ? "▾" : "▸"}</span>
      <span class="rights-company-name">${escapeHtml(company.name || "-")}</span>
      ${renderBillingStatusBadge(summary.status)}
      <span class="billing-open-amount ${amountClass}">Openstaand: ${euro(summary.openAmount)}</span>
    </button>
    <div class="billing-company-preview">
      <span>Status: ${escapeHtml(summary.status.label)}</span>
      <span>Vervaldatum: ${summary.dueDate ? safeDate(summary.dueDate) : "Niet ingevuld"}</span>
      <span>Dagen te laat: ${summary.daysLate}</span>
    </div>
    ${isOpen ? `<div class="billing-company-body">
      <section class="billing-meta-grid">
        <div class="meta"><span>Betaalstatus</span><strong>${escapeHtml(summary.status.label)}</strong></div>
        <div class="meta"><span>Betaald / niet betaald</span><strong>${escapeHtml(summary.paymentLabel)}</strong></div>
        <div class="meta ${amountClass}"><span>Openstaand bedrag</span><strong>${euro(summary.openAmount)}</strong></div>
        <div class="meta"><span>Vervaldatum</span><strong>${summary.dueDate ? safeDate(summary.dueDate) : "Niet ingevuld"}</strong></div>
        <div class="meta"><span>Aantal dagen te laat</span><strong>${summary.daysLate}</strong></div>
        <div class="meta"><span>Laatste betaaldatum</span><strong>${summary.lastPaid ? safeDate(summary.lastPaid) : "Niet ingevuld"}</strong></div>
        <div class="meta"><span>Eerstvolgende factuurdatum</span><strong>${summary.nextInvoice ? safeDate(summary.nextInvoice) : "Niet ingevuld"}</strong></div>
        <div class="meta"><span>Pakket/abonnement</span><strong>${escapeHtml(summary.subscription)}</strong></div>
        <div class="meta"><span>Prijsplan</span><strong>${escapeHtml(summary.pricePlan)}</strong></div>
        <div class="meta"><span>Aantal werkbonnen</span><strong>${summary.workorders}</strong></div>
        <div class="meta"><span>Aantal gebruikers</span><strong>${summary.users}</strong></div>
        <div class="meta"><span>Betaalprovider</span><strong>${escapeHtml(summary.provider.provider)}</strong></div>
      </section>
      <section class="panel subtle-panel billing-provider-box">
        <h3>Automatische betalingscontrole</h3>
        <p>Mollie en Stripe zijn voorbereid voor automatische incasso en abonnementsbetalingen. Succesvolle providerbetalingen kunnen facturen automatisch op Betaald zetten; mislukte betalingen markeren het bedrijf als Betaling mislukt/Achterstand.</p>
        <div class="meta-grid">
          <div class="meta"><span>Provider</span><strong>${escapeHtml(summary.provider.provider)}</strong></div>
          <div class="meta"><span>Betaalwijze</span><strong>${escapeHtml(summary.provider.mode)}</strong></div>
          <div class="meta"><span>Customer ID</span><strong>${escapeHtml(summary.provider.customerId || "Niet gekoppeld")}</strong></div>
          <div class="meta"><span>Subscription ID</span><strong>${escapeHtml(summary.provider.subscriptionId || "Niet gekoppeld")}</strong></div>
        </div>
      </section>
      <section class="panel subtle-panel billing-history">
        <h3>Factuurhistorie</h3>
        <div class="billing-history-list">
          ${summary.history.length ? summary.history.map((invoice) => {
            const statusKey = invoiceStatusKey(invoice);
            return `<div class="billing-history-row ${statusKey}">
              <span>Factuur ${escapeHtml(invoice.invoice_number || invoice.id)}</span>
              <strong>${euro(invoice.amount)}</strong>
              <em>${escapeHtml(statusKey === "paid" ? "Betaald" : statusKey === "failed" ? "Betaling mislukt" : statusKey === "overdue" ? "Achterstand" : "Binnen betaaltermijn")}</em>
              <small>Vervaldatum: ${invoice.due_date ? safeDate(invoice.due_date) : "-"}${statusKey === "overdue" ? ` · ${daysBetweenToday(invoice.due_date)} dagen te laat` : ""}</small>
            </div>`;
          }).join("") : `<p class="muted">Geen factuurhistorie beschikbaar.</p>`}
        </div>
      </section>
    </div>` : ""}
  </article>`;
}

function renderPlatformBilling() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const search = platformBillingCompanySearch();
  const companies = platformCompanies()
    .map((company) => ({ company, summary: platformBillingSummary(company) }))
    .filter(({ company }) => !search || String(company.name || "").toLowerCase().includes(search))
    .filter(({ summary }) => billingFilterMatches(summary))
    .sort((a, b) => {
      const rank = { failed: 0, overdue: 1, within_term: 2, open: 2, paused: 3, paid: 4 };
      return (rank[a.summary.status.statusKey] ?? 9) - (rank[b.summary.status.statusKey] ?? 9) || String(a.company.name || "").localeCompare(String(b.company.name || ""));
    });
  const allSummaries = platformCompanies().map(platformBillingSummary);
  const wanbetalers = allSummaries.filter((summary) => ["failed", "overdue"].includes(summary.status.statusKey));
  return `<section class="platform-rights-page platform-billing-page">
    <section class="panel rights-intro">
      <div class="article-head">
        <div>
          <h2>Facturatie</h2>
          <p>Automatische betalingscontrole voor facturen, betaaltermijnen en providerbetalingen.</p>
        </div>
        <span class="badge ${wanbetalers.length ? "danger" : "ok"}">${wanbetalers.length} wanbetalers</span>
      </div>
      <div class="billing-filter-row">
        <label>Zoek bedrijf
          <input value="${escapeAttr(ui.platformBillingCompanySearch || "")}" placeholder="Zoek bedrijf..." oninput="setPlatformBillingCompanySearch(this.value)" />
        </label>
        <div class="segmented">
          ${[["all", "Alle"], ["paid", "Betaald"], ["open", "Openstaand"], ["overdue", "Achterstand"]].map(([key, label]) => `<button type="button" class="${platformBillingFilter() === key ? "active" : ""}" onclick="setPlatformBillingFilter('${key}')">${label}</button>`).join("")}
        </div>
      </div>
    </section>
    <section class="rights-company-list">
      ${companies.length ? companies.map(({ company }) => renderPlatformBillingCompany(company)).join("") : `<section class="panel empty">Geen bedrijven gevonden.</section>`}
    </section>
  </section>`;
}

function platformRightsCompanySearch() {
  return String(ui.platformRightsCompanySearch || "").trim().toLowerCase();
}

function setPlatformRightsCompanySearch(value) {
  ui.platformRightsCompanySearch = value || "";
  render();
}

function platformRightsOpenCompanies() {
  ui.platformRightsOpenCompanies = ui.platformRightsOpenCompanies || {};
  return ui.platformRightsOpenCompanies;
}

function togglePlatformRightsCompany(companyId) {
  const open = platformRightsOpenCompanies();
  open[companyId] = !open[companyId];
  render();
}

function platformRightsCompanyUsers(companyId) {
  return (state.users || [])
    .filter((user) => !user.deleted)
    .filter((user) => userRole(user) !== ROLES.PLATFORM_ADMIN)
    .filter((user) => userRole(user) === ROLES.MECHANIC || userRole(user) === ROLES.COMPANY_ADMIN)
    .filter((user) => strictRecordCompanyId(user) === companyId)
    .sort((a, b) => String(a.name || a.email || "").localeCompare(String(b.name || b.email || "")));
}

function renderPlatformRightsUser(user) {
  syncUserPermissionAliases(user);
  const role = userRole(user);
  return `<article class="rights-user-card">
    <div class="rights-user-head">
      <div>
        <h3>${escapeHtml(user.name || "-")}</h3>
        <p>${escapeHtml(user.email || "-")}</p>
      </div>
      <div class="rights-user-role">
        <span>${escapeHtml(roleLabel(role))}</span>
        <select onchange="updateUser('${user.id}', 'role', this.value)">
          <option value="${ROLES.MECHANIC}" ${role === ROLES.MECHANIC ? "selected" : ""}>mechanic</option>
          <option value="${ROLES.COMPANY_ADMIN}" ${role === ROLES.COMPANY_ADMIN ? "selected" : ""}>company_admin</option>
        </select>
      </div>
    </div>
    <div class="rights-user-summary">
      <label class="check-line"><input type="checkbox" ${user.active !== false ? "checked" : ""} onchange="updateUser('${user.id}', 'active', this.checked)" /> Actief</label>
      <span class="badge">${escapeHtml(role === ROLES.MECHANIC ? "Monteur" : "Kantoor admin")}</span>
    </div>
    <details class="rights-user-details">
      <summary>Rechten instellen</summary>
      ${renderPermissionGroups(user, (field) => `updateUser('${user.id}', '${field}', this.value === 'true')`)}
    </details>
  </article>`;
}

function renderPlatformRightsCompany(company) {
  const users = platformRightsCompanyUsers(company.id);
  const isOpen = platformRightsOpenCompanies()[company.id] === true;
  return `<article class="rights-company-card ${isOpen ? "open" : ""}">
    <button class="rights-company-toggle" type="button" onclick="togglePlatformRightsCompany('${company.id}')">
      <span class="rights-caret">${isOpen ? "▾" : "▸"}</span>
      <span class="rights-company-name">${escapeHtml(company.name || "-")}</span>
      <span class="badge">${users.length} gebruiker${users.length === 1 ? "" : "s"}</span>
      <span class="muted">${company.active === false || company.blocked ? "Inactief/geblokkeerd" : "Actief"}</span>
    </button>
    ${isOpen ? `<div class="rights-company-users">
      ${users.length ? users.map(renderPlatformRightsUser).join("") : `<div class="empty">Geen gebruikers onder dit bedrijf.</div>`}
    </div>` : ""}
  </article>`;
}

function renderPlatformPermissions() {
  if (!isPlatformSuperAdmin()) return renderPlatformAccessDenied();
  const search = platformRightsCompanySearch();
  const companies = platformCompanies()
    .filter((company) => !search || String(company.name || "").toLowerCase().includes(search))
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
  const totalUsers = companies.reduce((sum, company) => sum + platformRightsCompanyUsers(company.id).length, 0);
  return `<section class="platform-rights-page">
    <section class="panel rights-intro">
      <div class="article-head">
        <div>
          <h2>Rechten</h2>
          <p>Beheer rechten per bedrijf en per gebruiker. Bedrijven zijn standaard ingeklapt.</p>
        </div>
        <span class="badge">${companies.length} bedrijven / ${totalUsers} gebruikers</span>
      </div>
      <label>Zoek bedrijf
        <input value="${escapeAttr(ui.platformRightsCompanySearch || "")}" placeholder="Zoek bedrijf..." oninput="setPlatformRightsCompanySearch(this.value)" />
      </label>
    </section>
    <section class="rights-company-list">
      ${companies.length ? companies.map(renderPlatformRightsCompany).join("") : `<section class="panel empty">Geen bedrijven gevonden.</section>`}
    </section>
    <section class="rights-create-user">
      ${renderNewUserForm()}
    </section>
  </section>`;
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
  if (isMechanic()) return renderMechanicHomeWithMenuOrder(weekCount, canCreateCallCustomer);
  return `<section class="grid home-grid">
    ${canCreateCallCustomer ? homeTile("call-customer", "Nieuwe klant uit telefoongesprek", "Maak snel klant, notitie of afspraak.", "Tel") : ""}
    ${hasWorkorderPermission("can_create_workorders") ? homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+") : ""}
    ${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "Open")}
    ${homeTile("completed", "Afgeronde projecten", "Bekijk rapporten, CSV en PDF.", "Done")}
    ${isCompanyAdmin() ? homeTile("admin", "Admin", "Bedrijfsbeheer en planning.", "A") : ""}
    ${isPlatformSuperAdmin() ? homeTile("platform", "Platform", "Beheer WerkbonSysteem.nl.", "P") : ""}
  </section>`;
}

function mechanicHomeTileDefinitions(canCreateCallCustomer) {
  const rows = [
    ["Planning", () => homeTile("start/planning", "Mijn planning", "Bekijk je planning, adressen en werkbonnen.", "P")],
    ["Werkbonnen", () => `${hasWorkorderPermission("can_create_workorders") ? homeTile("new", "Nieuw project", "Start een registratie voor M001, M004 of beide.", "+") : ""}${homeTile("active", "Lopende projecten", "Ga verder met open projectregistraties.", "Open")}${homeTile("completed", "Afgeronde projecten", "Bekijk rapporten, CSV en PDF.", "Done")}`],
    ["Klanten", () => canCreateCallCustomer ? homeTile("call-customer", "Nieuwe klant uit telefoongesprek", "Maak snel klant, notitie of afspraak.", "Tel") : ""],
    ["Busvoorraad", () => isCompanyModuleActive("van_stock") ? homeTile("busvoorraad", "Mijn busvoorraad", "Bekijk voorraad, besteladvies en inventarisatie.", "B") : ""],
    ["Toestellendatabase", () => isCompanyModuleActive("workorders") ? homeTile("active", "Toestellendatabase", "Bekijk toestelgegevens via toegewezen werkbonnen.", "T") : ""],
    ["WhatsApp", () => canUseWhatsApp() ? homeTile("whatsapp", "WhatsApp", "Lees en beantwoord klantberichten.", "W") : ""],
  ];
  const activeLabels = activeMenuItemsForRole("mechanic").map(([label]) => label);
  return rows.filter(([label, renderTile]) => activeLabels.includes(label) && renderTile());
}

function renderMechanicHomeWithMenuOrder(weekCount, canCreateCallCustomer) {
  const favorites = officeFavoriteLabels();
  const definitions = mechanicHomeTileDefinitions(canCreateCallCustomer);
  const favoriteTiles = definitions.filter(([label]) => favorites.includes(label)).map(([, renderTile]) => renderTile()).join("");
  const regularTiles = definitions.filter(([label]) => !favorites.includes(label)).map(([, renderTile]) => renderTile()).join("");
  return `<section class="grid home-grid">
    <section class="stats full"><div class="stat-card"><span>Planning deze week</span><strong>${weekCount}</strong></div></section>
    ${favoriteTiles ? `<section class="panel full mechanic-favorites"><h2>Favorieten</h2><div class="grid home-grid">${favoriteTiles}</div></section>` : ""}
    ${regularTiles}
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

function ensureVanStockState() {
  state.vanVehicles = state.vanVehicles || [];
  state.vanStockItems = state.vanStockItems || [];
  state.vanStockMovements = state.vanStockMovements || [];
  state.vanStockCounts = state.vanStockCounts || [];
  return state;
}

function vanStockStatus(item) {
  const qty = Number(item.quantity ?? 0);
  const min = Number(item.minimum_stock ?? 0);
  if (qty <= 0 || qty < min) return { label: "Bestellen", className: "danger", icon: "Rood" };
  if (qty === min) return { label: "Laag", className: "warn", icon: "Oranje" };
  return { label: "Op voorraad", className: "ok", icon: "Groen" };
}

function companyMechanics(companyId = currentCompanyId()) {
  return (state.users || []).filter((user) => !user.deleted && user.active !== false && userRole(user) === ROLES.MECHANIC && strictRecordCompanyId(user) === companyId);
}

function ensureVanForMechanic(user) {
  ensureVanStockState();
  if (!user) return null;
  const companyId = strictRecordCompanyId(user);
  let van = state.vanVehicles.find((row) => row.mechanic_id === user.id && strictRecordCompanyId(row) === companyId);
  if (!van) {
    van = {
      id: uid("van"),
      company_id: companyId,
      companyId: companyId,
      mechanic_id: user.id,
      mechanic_name: user.name || "",
      vehicle: "",
      license_plate: "",
      bus_number: "",
      active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    state.vanVehicles.push(van);
  }
  return van;
}

function vanItemsForMechanic(mechanicId, companyId = currentCompanyId()) {
  ensureVanStockState();
  return state.vanStockItems.filter((item) => !item.deleted && item.mechanic_id === mechanicId && strictRecordCompanyId(item) === companyId);
}

function vanStockItemValue(item) {
  return Number(item.quantity || 0) * Number(item.purchase_price || 0);
}

function vanStockStats(mechanicId, companyId = currentCompanyId()) {
  const items = vanItemsForMechanic(mechanicId, companyId);
  const movements = (state.vanStockMovements || []).filter((movement) => movement.mechanic_id === mechanicId && strictRecordCompanyId(movement) === companyId);
  const month = new Date().toISOString().slice(0, 7);
  return {
    value: items.reduce((sum, item) => sum + vanStockItemValue(item), 0),
    count: items.length,
    belowMinimum: items.filter((item) => Number(item.quantity || 0) < Number(item.minimum_stock || 0)).length,
    lastCount: (state.vanStockCounts || []).filter((count) => count.mechanic_id === mechanicId && strictRecordCompanyId(count) === companyId).sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")))[0],
    usedThisMonth: movements.filter((movement) => movement.type === "workorder_usage" && String(movement.created_at || "").slice(0, 7) === month).reduce((sum, movement) => sum + Math.abs(Number(movement.quantity || 0)), 0),
  };
}

function renderVanStockStatusBadge(item) {
  const status = vanStockStatus(item);
  return `<span class="badge ${status.className}">${status.label}</span>`;
}

function renderVanStockModule() {
  if (!isCompanyAdmin() && !isPlatformSuperAdmin()) return renderNoOfficeAccess();
  if (!isCompanyModuleActive("van_stock")) return moduleInactiveMessage();
  ensureVanStockState();
  const mechanics = companyMechanics();
  const totalItems = state.vanStockItems.filter((item) => isSameCompany(item) && !item.deleted);
  const low = totalItems.filter((item) => Number(item.quantity || 0) < Number(item.minimum_stock || 0));
  return `<section class="van-stock-page">
    <section class="office-page-head">
      <div><h2>Busvoorraad</h2><p>Digitale busvoorraad per monteur, overboekingen en besteladviezen.</p></div>
      <button class="btn secondary" type="button" onclick="exportVanStockCsv()">Export CSV</button>
    </section>
    <section class="stats office-kpis">
      <div class="stat-card"><span>Bussen</span><strong>${mechanics.length}</strong></div>
      <div class="stat-card"><span>Artikelen</span><strong>${totalItems.length}</strong></div>
      <div class="stat-card"><span>Onder minimum</span><strong>${low.length}</strong></div>
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(totalItems.reduce((sum, item) => sum + vanStockItemValue(item), 0))}</strong></div>
    </section>
    ${renderVanStockTransferPanel(mechanics)}
    <section class="van-stock-list">${mechanics.map(renderVanStockMechanicCard).join("") || `<section class="panel empty">Geen monteurs gevonden.</section>`}</section>
    ${renderVanStockReports()}
  </section>`;
}

function renderVanStockTransferPanel(mechanics) {
  const warehouseItems = (state.garageArticles || []).filter((article) => isSameCompany(article) && article.active !== false);
  return `<section class="panel">
    <h2>Materiaal toevoegen / overboeken</h2>
    <form class="form-grid" onsubmit="saveVanStockTransfer(event)">
      <label>Monteur <select name="mechanic_id" required>${mechanics.map((user) => `<option value="${user.id}">${escapeHtml(user.name)}</option>`).join("")}</select></label>
      <label>Actie <select name="action"><option value="warehouse_to_van">Magazijn naar bus</option><option value="van_to_warehouse">Bus naar magazijn</option><option value="correction">Voorraadcorrectie</option></select></label>
      <label>Magazijnartikel <select name="warehouse_article_id"><option value="">Handmatig artikel</option>${warehouseItems.map((article) => `<option value="${article.id}">${escapeHtml(article.description)} - ${escapeHtml(article.supplierArticleNumber || "")}</option>`).join("")}</select></label>
      <label>Artikelnummer <input name="article_number" placeholder="MT4-230-NC-HCC" /></label>
      <label>Omschrijving <input name="description" placeholder="Omschrijving" /></label>
      <label>Merk <input name="brand" placeholder="Merk" /></label>
      <label>Categorie <input name="category" placeholder="Koppelingen, Appendages, Kabels..." /></label>
      <label>Locatie in bus <input name="location" placeholder="Bak 1 / lade links" /></label>
      <label>Aantal <input name="quantity" type="number" min="0" step="1" value="1" required /></label>
      <label>Minimum voorraad <input name="minimum_stock" type="number" min="0" step="1" value="1" /></label>
      <label>Maximum voorraad <input name="maximum_stock" type="number" min="0" step="1" value="10" /></label>
      <label>Prijs per stuk <input name="purchase_price" type="number" min="0" step="0.01" value="0" /></label>
      <button class="btn success" type="submit">Boeking opslaan</button>
    </form>
  </section>`;
}

function renderVanStockMechanicCard(user) {
  const van = ensureVanForMechanic(user);
  const items = vanItemsForMechanic(user.id, strictRecordCompanyId(user));
  const stats = vanStockStats(user.id, strictRecordCompanyId(user));
  return `<section class="panel van-card">
    <div class="article-head">
      <div><h2>${escapeHtml(user.name)}</h2><p>${escapeHtml(van.vehicle || "Voertuig niet ingevuld")} ${van.license_plate ? `- ${escapeHtml(van.license_plate)}` : ""}</p></div>
      <span class="badge">${items.length} artikelen</span>
    </div>
    <div class="form-grid">
      <label>Voertuig <input value="${escapeAttr(van.vehicle || "")}" onchange="updateVanVehicle('${van.id}', 'vehicle', this.value)" placeholder="VW Transporter" /></label>
      <label>Kenteken <input value="${escapeAttr(van.license_plate || "")}" onchange="updateVanVehicle('${van.id}', 'license_plate', this.value)" placeholder="V-123-AB" /></label>
      <label>Busnummer <input value="${escapeAttr(van.bus_number || "")}" onchange="updateVanVehicle('${van.id}', 'bus_number', this.value)" /></label>
      <label>Actieve voorraad <select onchange="updateVanVehicle('${van.id}', 'active', this.value === 'true')"><option value="true" ${van.active !== false ? "selected" : ""}>Ja</option><option value="false" ${van.active === false ? "selected" : ""}>Nee</option></select></label>
    </div>
    <section class="stats office-kpis compact">
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(stats.value)}</strong></div>
      <div class="stat-card"><span>Onder minimum</span><strong>${stats.belowMinimum}</strong></div>
      <div class="stat-card"><span>Laatste inventarisatie</span><strong>${stats.lastCount ? safeDate(stats.lastCount.created_at) : "-"}</strong></div>
      <div class="stat-card"><span>Gebruikt deze maand</span><strong>${stats.usedThisMonth}</strong></div>
    </section>
    ${renderVanStockItemsTable(items, true)}
    ${renderVanStockAdvice(items)}
  </section>`;
}

function renderVanStockItemsTable(items, editable = false) {
  return `<div class="table-wrap"><table><thead><tr><th>Status</th><th>Artikelnummer</th><th>Omschrijving</th><th>Merk</th><th>Categorie</th><th>Locatie</th><th>Aanwezig</th><th>Min</th><th>Max</th><th>Waarde</th>${editable ? "<th>Actie</th>" : ""}</tr></thead><tbody>${items.map((item) => `<tr>
    <td>${renderVanStockStatusBadge(item)}</td>
    <td>${escapeHtml(item.article_number || "-")}</td>
    <td>${escapeHtml(item.description || "-")}</td>
    <td>${escapeHtml(item.brand || "-")}</td>
    <td>${escapeHtml(item.category || "-")}</td>
    <td>${escapeHtml(item.location || "-")}</td>
    <td>${editable ? `<input type="number" min="0" value="${Number(item.quantity || 0)}" onchange="updateVanStockItem('${item.id}', 'quantity', this.value)" />` : Number(item.quantity || 0)}</td>
    <td>${editable ? `<input type="number" min="0" value="${Number(item.minimum_stock || 0)}" onchange="updateVanStockItem('${item.id}', 'minimum_stock', this.value)" />` : Number(item.minimum_stock || 0)}</td>
    <td>${editable ? `<input type="number" min="0" value="${Number(item.maximum_stock || 0)}" onchange="updateVanStockItem('${item.id}', 'maximum_stock', this.value)" />` : Number(item.maximum_stock || 0)}</td>
    <td>${euro(vanStockItemValue(item))}</td>
    ${editable ? `<td><button class="btn secondary" type="button" onclick="deleteVanStockItem('${item.id}')">Verwijderen</button></td>` : ""}
  </tr>`).join("") || `<tr><td colspan="${editable ? 11 : 10}">Geen busvoorraad geregistreerd.</td></tr>`}</tbody></table></div>`;
}

function renderVanStockAdvice(items) {
  const rows = items.filter((item) => Number(item.quantity || 0) < Number(item.minimum_stock || 0));
  return `<section class="subtle-panel"><h3>Besteladvies</h3>${rows.length ? `<div class="table-wrap"><table><thead><tr><th>Artikel</th><th>Huidig</th><th>Minimum</th><th>Advies</th></tr></thead><tbody>${rows.map((item) => {
    const advice = Math.max(Number(item.maximum_stock || 0) - Number(item.quantity || 0), Number(item.minimum_stock || 0) * 2);
    return `<tr><td>${escapeHtml(item.article_number || item.description || "-")}</td><td>${Number(item.quantity || 0)}</td><td>${Number(item.minimum_stock || 0)}</td><td>Bestel ${advice}</td></tr>`;
  }).join("")}</tbody></table></div>` : `<p class="muted">Geen besteladvies. Alle artikelen zijn op niveau.</p>`}</section>`;
}

function renderVanStockReports() {
  const movements = (state.vanStockMovements || []).filter((movement) => isSameCompany(movement));
  const byArticle = new Map();
  movements.filter((movement) => movement.type === "workorder_usage").forEach((movement) => {
    const key = movement.article_number || movement.description || movement.item_id;
    const row = byArticle.get(key) || { label: key, quantity: 0 };
    row.quantity += Math.abs(Number(movement.quantity || 0));
    byArticle.set(key, row);
  });
  const top = [...byArticle.values()].sort((a, b) => b.quantity - a.quantity).slice(0, 20);
  return `<section class="panel"><h2>Rapportages</h2><div class="table-wrap"><table><thead><tr><th>Rapport</th><th>Beschikbaar</th></tr></thead><tbody>${["Verbruik per monteur", "Verbruik per klant", "Verbruik per werkbon", "Verbruik per artikel", "Voorraadwaarde per bus", "Top 20 meest gebruikte artikelen"].map((label) => `<tr><td>${label}</td><td>Ja</td></tr>`).join("")}</tbody></table></div>
    <h3>Top gebruikte artikelen</h3><div class="table-wrap"><table><thead><tr><th>Artikel</th><th>Aantal</th></tr></thead><tbody>${top.map((row) => `<tr><td>${escapeHtml(row.label)}</td><td>${row.quantity}</td></tr>`).join("") || `<tr><td colspan="2">Nog geen verbruik geregistreerd.</td></tr>`}</tbody></table></div></section>`;
}

function saveVanStockTransfer(event) {
  event.preventDefault();
  if (!isCompanyAdmin() && !isPlatformSuperAdmin()) return renderNoOfficeAccess();
  ensureVanStockState();
  const form = new FormData(event.target);
  const mechanicId = String(form.get("mechanic_id") || "");
  const mechanic = byId(state.users || [], mechanicId);
  if (!mechanic || !isSameCompany(mechanic)) return alert("Kies een monteur binnen het eigen bedrijf.");
  const companyId = strictRecordCompanyId(mechanic);
  const warehouseArticle = byId(state.garageArticles || [], String(form.get("warehouse_article_id") || ""));
  const action = String(form.get("action") || "warehouse_to_van");
  const qty = Math.max(0, Number(form.get("quantity") || 0));
  const articleNumber = String(form.get("article_number") || warehouseArticle?.supplierArticleNumber || "").trim();
  const description = String(form.get("description") || warehouseArticle?.description || "").trim();
  if (!description && !articleNumber) return alert("Vul een artikelnummer of omschrijving in.");
  const item = upsertVanStockItem({
    company_id: companyId,
    companyId: companyId,
    mechanic_id: mechanicId,
    article_number: articleNumber,
    description,
    brand: String(form.get("brand") || "").trim(),
    category: String(form.get("category") || "").trim(),
    location: String(form.get("location") || "").trim(),
    minimum_stock: Number(form.get("minimum_stock") || 0),
    maximum_stock: Number(form.get("maximum_stock") || 0),
    purchase_price: Number(form.get("purchase_price") || warehouseArticle?.purchasePrice || 0),
    source_article_id: warehouseArticle?.id || "",
  });
  if (action === "warehouse_to_van") {
    item.quantity = Number(item.quantity || 0) + qty;
    if (warehouseArticle) warehouseArticle.currentStock = Math.max(0, Number(warehouseArticle.currentStock || 0) - qty);
    recordVanStockMovement(item, qty, "Magazijn", `Bus ${mechanic.name}`, "warehouse_to_van");
  } else if (action === "van_to_warehouse") {
    item.quantity = Math.max(0, Number(item.quantity || 0) - qty);
    if (warehouseArticle) warehouseArticle.currentStock = Number(warehouseArticle.currentStock || 0) + qty;
    recordVanStockMovement(item, -qty, `Bus ${mechanic.name}`, "Magazijn", "van_to_warehouse");
  } else {
    const previous = Number(item.quantity || 0);
    item.quantity = qty;
    recordVanStockMovement(item, qty - previous, `Bus ${mechanic.name}`, `Correctie naar ${qty}`, "correction");
  }
  item.updated_at = new Date().toISOString();
  saveState();
  event.target.reset();
  render();
}

function upsertVanStockItem(data) {
  ensureVanStockState();
  let item = state.vanStockItems.find((row) => row.mechanic_id === data.mechanic_id && strictRecordCompanyId(row) === data.company_id && ((data.article_number && row.article_number === data.article_number) || (data.source_article_id && row.source_article_id === data.source_article_id)));
  if (!item) {
    item = { id: uid("vanitem"), quantity: 0, active: true, created_at: new Date().toISOString(), ...data };
    state.vanStockItems.push(item);
  } else {
    Object.assign(item, data);
  }
  return item;
}

function recordVanStockMovement(item, quantity, fromLocation, toLocation, type, extra = {}) {
  ensureVanStockState();
  state.vanStockMovements.push({
    id: uid("vanmove"),
    company_id: strictRecordCompanyId(item),
    companyId: strictRecordCompanyId(item),
    mechanic_id: item.mechanic_id,
    item_id: item.id,
    article_number: item.article_number || "",
    description: item.description || "",
    quantity,
    from_location: fromLocation,
    to_location: toLocation,
    type,
    user_id: currentUser()?.id || "",
    user_name: currentUser()?.name || "",
    created_at: new Date().toISOString(),
    ...extra,
  });
}

function updateVanVehicle(vanId, field, value) {
  if (!isCompanyAdmin() && !isPlatformSuperAdmin()) return;
  const van = byId(state.vanVehicles || [], vanId);
  if (!van || !isSameCompany(van)) return;
  van[field] = field === "active" ? Boolean(value) : value;
  van.updated_at = new Date().toISOString();
  saveState();
  render();
}

function updateVanStockItem(itemId, field, value) {
  if (!isCompanyAdmin() && !isPlatformSuperAdmin()) return;
  const item = byId(state.vanStockItems || [], itemId);
  if (!item || !isSameCompany(item)) return;
  item[field] = ["quantity", "minimum_stock", "maximum_stock", "purchase_price"].includes(field) ? Number(value || 0) : value;
  item.updated_at = new Date().toISOString();
  recordVanStockMovement(item, 0, "Correctie", "Bus", `field_${field}`);
  saveState();
  render();
}

function deleteVanStockItem(itemId) {
  if (!isCompanyAdmin() && !isPlatformSuperAdmin()) return;
  const item = byId(state.vanStockItems || [], itemId);
  if (!item || !isSameCompany(item)) return;
  item.deleted = true;
  item.active = false;
  item.updated_at = new Date().toISOString();
  recordVanStockMovement(item, 0, "Bus", "Verwijderd", "deleted");
  saveState();
  render();
}

function renderMechanicVanStock() {
  if (!isMechanic()) return renderNoOfficeAccess();
  if (!isCompanyModuleActive("van_stock")) return moduleInactiveMessage();
  ensureVanStockState();
  const user = currentUser();
  const van = ensureVanForMechanic(user);
  const items = vanItemsForMechanic(user.id, currentCompanyId());
  const stats = vanStockStats(user.id, currentCompanyId());
  const canCount = permissionValue(user, "can_count_van_stock") || permissionValue(user, "can_view_own_van_stock") || userRole(user) === ROLES.MECHANIC;
  const counting = ui.vanInventoryCounting === true;
  return `<section class="van-stock-page">
    <section class="office-page-head"><div><h2>Mijn busvoorraad</h2><p>${escapeHtml(van.vehicle || "Eigen bus")} ${van.license_plate ? `- ${escapeHtml(van.license_plate)}` : ""}</p></div>${canCount ? `<button class="btn success" type="button" onclick="startVanInventoryCount()">Inventarisatie starten</button>` : ""}</section>
    <section class="stats office-kpis">
      <div class="stat-card"><span>Voorraadwaarde</span><strong>${euro(stats.value)}</strong></div>
      <div class="stat-card"><span>Artikelen</span><strong>${stats.count}</strong></div>
      <div class="stat-card"><span>Onder minimum</span><strong>${stats.belowMinimum}</strong></div>
      <div class="stat-card"><span>Gebruikt deze maand</span><strong>${stats.usedThisMonth}</strong></div>
    </section>
    ${counting ? renderVanInventoryCountForm(items) : ""}
    <section class="panel"><h2>Voorraad</h2>${renderVanStockItemsTable(items, false)}${renderVanStockAdvice(items)}</section>
  </section>`;
}

function startVanInventoryCount() {
  if (!isMechanic()) return;
  ui.vanInventoryCounting = true;
  render();
}

function renderVanInventoryCountForm(items) {
  return `<section class="panel">
    <h2>Inventarisatie</h2>
    <form class="form-grid" onsubmit="saveVanInventoryCount(event)">
      ${items.map((item) => `<label>${escapeHtml(item.article_number || item.description || "-")}<input name="count_${item.id}" type="number" min="0" step="1" value="${Number(item.quantity || 0)}" /></label>`).join("")}
      <div class="button-row"><button class="btn secondary" type="button" onclick="ui.vanInventoryCounting=false;render()">Annuleren</button><button class="btn success" type="submit">Inventarisatie opslaan</button></div>
    </form>
  </section>`;
}

function saveVanInventoryCount(event) {
  event.preventDefault();
  if (!isMechanic()) return;
  ensureVanStockState();
  const user = currentUser();
  const items = vanItemsForMechanic(user.id, currentCompanyId());
  const form = new FormData(event.target);
  const differences = [];
  items.forEach((item) => {
    const counted = Math.max(0, Number(form.get(`count_${item.id}`) || 0));
    const expected = Number(item.quantity || 0);
    if (counted !== expected || counted < Number(item.minimum_stock || 0)) {
      differences.push({
        item_id: item.id,
        article_number: item.article_number,
        expected_quantity: expected,
        counted_quantity: counted,
        minimum_stock: item.minimum_stock,
        status: counted < Number(item.minimum_stock || 0) ? "Onder minimum" : "Verschil",
      });
    }
    if (counted !== expected) {
      item.quantity = counted;
      item.updated_at = new Date().toISOString();
      recordVanStockMovement(item, counted - expected, "Inventarisatie", "Busvoorraad", "inventory_count");
    }
  });
  const count = {
    id: uid("vancount"),
    company_id: currentCompanyId(),
    companyId: currentCompanyId(),
    mechanic_id: user.id,
    mechanic_name: user.name,
    created_at: new Date().toISOString(),
    user_id: user.id,
    differences,
  };
  state.vanStockCounts.push(count);
  ui.vanInventoryCounting = false;
  saveState();
  alert(count.differences.length ? `Inventarisatie opgeslagen. ${count.differences.length} verschillen/waarschuwingen gemeld bij kantoor.` : "Inventarisatie opgeslagen. Geen verschillen gemeld.");
  render();
}

function exportVanStockCsv() {
  const rows = (state.vanStockItems || []).filter((item) => isSameCompany(item) && !item.deleted).map((item) => {
    const mechanic = byId(state.users || [], item.mechanic_id);
    return {
      Monteur: mechanic?.name || item.mechanic_id,
      Artikelnummer: item.article_number || "",
      Omschrijving: item.description || "",
      Merk: item.brand || "",
      Categorie: item.category || "",
      Locatie: item.location || "",
      Aantal: item.quantity || 0,
      Minimum: item.minimum_stock || 0,
      Maximum: item.maximum_stock || 0,
      Status: vanStockStatus(item).label,
      Waarde: vanStockItemValue(item),
    };
  });
  downloadCsv(rows, "busvoorraad.csv");
}

const baseFindMaterialItemForVanStock = findMaterialItem;
findMaterialItem = function findMaterialItemWithVanStock(articleId) {
  const baseItem = baseFindMaterialItemForVanStock(articleId);
  if (baseItem) return baseItem;
  ensureVanStockState();
  const item = byId(state.vanStockItems || [], articleId);
  if (!item || item.deleted) return null;
  return {
    id: item.id,
    company_id: strictRecordCompanyId(item),
    companyId: strictRecordCompanyId(item),
    mechanic_id: item.mechanic_id,
    description: item.description || item.article_number || "Busvoorraad artikel",
    supplierArticleNumber: item.article_number || "",
    currentStock: Number(item.quantity || 0),
    minimumStock: Number(item.minimum_stock || 0),
    purchasePrice: Number(item.purchase_price || 0),
    sourceType: "van_stock",
    sourceName: "Busvoorraad",
    kitId: "Busvoorraad",
    defaultQuantity: Number(item.maximum_stock || item.minimum_stock || 0),
  };
};

const baseAllMaterialItemsForProjectForVanStock = allMaterialItemsForProject;
allMaterialItemsForProject = function allMaterialItemsForProjectWithVanStock(project) {
  const rows = baseAllMaterialItemsForProjectForVanStock(project);
  if (!project || !isCompanyModuleActive("van_stock", strictRecordCompanyId(project))) return rows;
  const mechanicId = project.assignedMechanicId || project.mechanicId || project.assigned_mechanic_id || project.mechanic_id || currentUser()?.id || "";
  if (!mechanicId) return rows;
  const vanItems = vanItemsForMechanic(mechanicId, strictRecordCompanyId(project))
    .filter((item) => item.active !== false && Number(item.quantity || 0) > 0)
    .map((item) => findMaterialItem(item.id))
    .filter(Boolean);
  return [...vanItems, ...rows];
};

const baseProcessProjectInventoryForVanStock = processProjectInventory;
processProjectInventory = function processProjectInventoryWithVanStock(project) {
  baseProcessProjectInventoryForVanStock(project);
  if (!project || !isCompanyModuleActive("van_stock", strictRecordCompanyId(project))) return;
  const workOrder = ensureWorkOrder(project);
  if (workOrder.materialsUsed !== "ja") return;
  materialUsages(project.id)
    .filter((usage) => usage.sourceType === "van_stock" && usage.usedQuantity > 0)
    .forEach((usage) => {
      const item = byId(state.vanStockItems || [], usage.articleId);
      if (!item || !isSameCompany(item)) return;
      const oldQuantity = Number(item.quantity || 0);
      item.quantity = Math.max(0, oldQuantity - Number(usage.usedQuantity || 0));
      item.updated_at = new Date().toISOString();
      usage.kitId = "Busvoorraad";
      usage.sourceName = "Busvoorraad";
      usage.sourceType = "van_stock";
      usage.purchasePriceAtTime = Number(item.purchase_price || 0);
      usage.totalPrice = usage.purchasePriceAtTime * Number(usage.usedQuantity || 0);
      usage.orderStatus = item.quantity < Number(item.minimum_stock || 0) ? "Te bestellen" : "Niet besteld";
      usage.customer_id = project.customer_id || "";
      usage.customer_name = project.customer || "";
      usage.workorder_id = project.id;
      recordVanStockMovement(item, -Number(usage.usedQuantity || 0), "Busvoorraad", `Werkbon ${workorderNumber(project)}`, "workorder_usage", {
        project_id: project.id,
        workorder_id: project.id,
        customer_id: project.customer_id || "",
        customer_name: project.customer || "",
      });
    });
};

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
  if (route.startsWith("admin/customers") || route.startsWith("office/customers") || route.startsWith("manage/customers")) {
    setTimeout(initCustomerLeafletMap, 0);
  }
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


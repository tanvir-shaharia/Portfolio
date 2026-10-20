/**
 * Project Estimator Configuration & Baseline Pricing Data
 *
 * Source of Truth: USD ($)
 * Reference Exchange Rate: 1 USD = 122 BDT (Static Indicative Reference)
 *
 * All figures, complexity multipliers, and feature ranges are centralized here
 * and must not be duplicated across UI components.
 */

export const ESTIMATOR_CONFIG = {
  EXCHANGE_RATE: 122, // 1 USD = 122 BDT
  CURRENCY_SYMBOLS: {
    USD: "$",
    BDT: "৳",
  },
  DEFAULT_CURRENCY: "USD",
  TIMELINE_FLOOR_WEEKS: 2.0,
  ROUNDING: {
    USD: 50, // Round USD to nearest $50
    BDT: 1000, // Round BDT to nearest ৳1,000
    TIMELINE_STEP: 0.5, // Round weeks to nearest 0.5 week
  },
};

/**
 * 1. Approved Baseline Project Types (USD)
 */
export const PROJECT_TYPES = [
  {
    id: "android",
    name: "Native Android",
    subtitle: "Kotlin & Jetpack Compose",
    icon: "android",
    categoryTag: "01 // NATIVE MOBILE",
    description:
      "High-performance single-platform Android app built with modern Jetpack Compose, Clean Architecture, Coroutines/Flow, and Dagger-Hilt DI.",
    baseCost: { min: 800, max: 1500 },
    baseTimelineWeeks: { min: 3, max: 4 },
    includedScope: [
      "Single-platform native Android (SDK 24+)",
      "Modern Jetpack Compose UI (Material 3)",
      "Clean Architecture (Domain, Data, Presentation)",
      "Retrofit/Ktor REST API client with error handling",
      "Coroutines, StateFlow & Dagger-Hilt DI",
      "Essential unit tests for business logic",
      "Production release bundle (.aab) preparation",
    ],
    supportedFeatures: [
      "auth",
      "payments",
      "offline",
      "realtime",
      "hardware",
      "admin",
      "i18n",
      "advanced_qa",
    ],
  },
  {
    id: "flutter",
    name: "Cross-Platform Flutter",
    subtitle: "Android & iOS Single Codebase",
    icon: "devices",
    categoryTag: "02 // DUAL-PLATFORM MOBILE",
    description:
      "Unified multi-platform mobile application rendering at 60fps across Android and iOS with Riverpod or BLoC state orchestration.",
    baseCost: { min: 1500, max: 2500 },
    baseTimelineWeeks: { min: 4, max: 5 },
    includedScope: [
      "Dual-platform (Android & iOS) from single Dart codebase",
      "Riverpod or BLoC state machine architecture",
      "Clean Architecture repository pattern",
      "Responsive mobile layout adaptation (phones)",
      "REST API integration layer & error management",
      "Google Play & Apple App Store build readiness",
    ],
    supportedFeatures: [
      "auth",
      "payments",
      "offline",
      "realtime",
      "hardware",
      "admin",
      "i18n",
      "advanced_qa",
    ],
  },
  {
    id: "web",
    name: "Web Application",
    subtitle: "React / Next.js & Tailwind CSS",
    icon: "language",
    categoryTag: "03 // MODERN WEB",
    description:
      "Responsive modern single-page or SSR web application with component-driven architecture, API integration, and Lighthouse performance 90+.",
    baseCost: { min: 1000, max: 1800 },
    baseTimelineWeeks: { min: 2.5, max: 4 },
    includedScope: [
      "Responsive modern web application (3–5 core views)",
      "Tailwind CSS modular design system",
      "State management & REST/GraphQL API integration layer",
      "Lighthouse performance optimization (90+ target)",
      "Basic SEO meta tags and semantic HTML5 hierarchy",
      "Vercel / Netlify production deployment setup",
    ],
    supportedFeatures: [
      "auth",
      "payments",
      "offline",
      "realtime",
      "admin",
      "i18n",
      "advanced_qa",
    ],
    unsupportedFeatures: {
      hardware:
        "BLE / Hardware protocol integration requires native mobile OS hardware APIs (Android/iOS).",
    },
  },
  {
    id: "backend",
    name: "Backend / API Service",
    subtitle: "Node.js / Express & Database Architecture",
    icon: "dns",
    categoryTag: "04 // CLOUD SERVICES",
    description:
      "Scalable RESTful API service with structured database schema, 8–10 core endpoints, JWT authentication foundation, and OpenAPI/Swagger documentation.",
    baseCost: { min: 800, max: 1500 },
    baseTimelineWeeks: { min: 2.5, max: 4 },
    includedScope: [
      "Modular RESTful API service (8–10 core endpoints)",
      "Database schema & migrations (PostgreSQL / MongoDB / Firestore)",
      "JWT authentication middleware & password hashing",
      "Input validation, sanitization & centralized error handler",
      "Structured JSON logging & environment configuration",
      "OpenAPI / Swagger interactive API documentation",
      "Containerized Dockerfile setup for deployment",
    ],
    supportedFeatures: [
      "auth",
      "payments",
      "realtime",
      "admin",
      "i18n",
      "advanced_qa",
    ],
    unsupportedFeatures: {
      hardware:
        "Hardware BLE protocol scanning requires client-side mobile radio interfaces.",
      offline:
        "Client-side offline caching (Room/Hive) applies to client applications. Database persistence is already included in base backend scope.",
    },
  },
];

/**
 * 2. Approved Complexity Multipliers
 */
export const COMPLEXITY_TIERS = [
  {
    id: "mvp",
    name: "MVP / Proof of Concept",
    badge: "1.0× Scale",
    costMultiplier: 1.0,
    timelineMultiplier: 1.0,
    shortDescription: "Essential viability & rapid market validation",
    details:
      "Focuses on core business viability, clean architecture foundation, standard error handling, and baseline unit tests. Ideal for validating concepts quickly.",
  },
  {
    id: "commercial",
    name: "Commercial / Production",
    badge: "1.35× Scale",
    costMultiplier: 1.35,
    timelineMultiplier: 1.25,
    shortDescription: "Polished production-grade stability & telemetry",
    details:
      "Includes thorough edge-case handling, crash analytics & telemetry, automated CI/CD build scripts, responsive polish, and comprehensive testing.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "1.85× Scale",
    costMultiplier: 1.85,
    timelineMultiplier: 1.6,
    shortDescription: "Strict engineering rigor & multi-module architecture",
    details:
      "Multi-module separation, high-concurrency optimization, comprehensive test suites, and strict code audits. Excludes third-party infrastructure hosting, custom compliance certifications, and 24/7 SLA operations.",
  },
];

/**
 * 3. Approved Feature Add-ons (USD)
 */
export const FEATURE_ADDONS = [
  {
    id: "auth",
    name: "Authentication & Social Login",
    icon: "lock",
    cost: { min: 250, max: 400 },
    timelineWeeks: { min: 0.5, max: 1.0 },
    tag: "+$250–$400",
    timeTag: "+0.5–1w",
    scopeNotes: {
      client:
        "Social OAuth (Google, Apple), secure biometric/credential storage, JWT refresh token rotation, and password reset flow.",
      backend:
        "Server-side JWT token generation, bcrypt hashing, refresh token rotation, and role-based route middleware.",
    },
  },
  {
    id: "payments",
    name: "Payments & In-App Purchases",
    icon: "credit_card",
    cost: { min: 450, max: 750 },
    timelineWeeks: { min: 1.0, max: 1.5 },
    tag: "+$450–$750",
    timeTag: "+1–1.5w",
    scopeNotes: {
      client:
        "Google Play Billing / Apple StoreKit IAP, or Stripe / bKash client checkout integration with receipt verification.",
      backend:
        "Payment gateway webhook verification handlers, payment intent creation, and idempotent transaction audit logging.",
    },
  },
  {
    id: "offline",
    name: "Offline-First Storage & Sync",
    icon: "cloud_sync",
    cost: { min: 350, max: 600 },
    timelineWeeks: { min: 1.0, max: 1.5 },
    tag: "+$350–$600",
    timeTag: "+1–1.5w",
    scopeNotes: {
      client:
        "Deterministic local database (Room/Hive/IndexedDB), background WorkManager synchronization, and conflict resolution policies.",
      backend:
        "Client-side offline storage applies to client applications. Database persistence is included in base backend scope.",
    },
  },
  {
    id: "realtime",
    name: "Push Notifications & Realtime",
    icon: "notifications_active",
    cost: { min: 250, max: 450 },
    timelineWeeks: { min: 0.5, max: 1.0 },
    tag: "+$250–$450",
    timeTag: "+0.5–1w",
    scopeNotes: {
      client:
        "FCM / APNs push notification handling, foreground/background dispatchers, deep-link routing, and live WebSocket updates.",
      backend:
        "WebSocket/Socket.io gateway server, FCM server push dispatcher, and event emitter broadcasting channels.",
    },
  },
  {
    id: "hardware",
    name: "BLE / IoT Hardware Protocol",
    icon: "settings_bluetooth",
    cost: { min: 650, max: 1100 },
    timelineWeeks: { min: 1.5, max: 2.0 },
    tag: "+$650–$1,100",
    timeTag: "+1.5–2w",
    scopeNotes: {
      client:
        "Bluetooth Low Energy (BLE) peripheral scanning, MTU negotiation, custom GATT characteristic read/write/notify byte parsing, and reconnect state machine.",
      backend: "Not applicable to standalone backend services.",
    },
  },
  {
    id: "admin",
    name: "Admin Dashboard",
    icon: "dashboard_customize",
    cost: { min: 500, max: 850 },
    timelineWeeks: { min: 1.0, max: 2.0 },
    tag: "+$500–$850",
    timeTag: "+1–2w",
    scopeNotes: {
      client:
        "Companion web backoffice panel for user management, business telemetry monitoring, and CSV/Excel data export.",
      backend:
        "Administrative CRUD endpoints, audit logs, and privileged management dashboard/documentation.",
    },
  },
  {
    id: "i18n",
    name: "Localization (Multi-Language)",
    icon: "translate",
    cost: { min: 150, max: 300 },
    timelineWeeks: { min: 0.5, max: 0.5 },
    tag: "+$150–$300",
    timeTag: "+0.5w",
    scopeNotes: {
      client:
        "Multi-locale string architecture (e.g., English + Bengali), dynamic in-app locale switcher, and RTL/LTR layout compatibility.",
      backend:
        "Localized API error responses and multilingual content query support.",
    },
  },
  {
    id: "advanced_qa",
    name: "Advanced QA & Testing",
    icon: "verified",
    cost: { min: 300, max: 500 },
    timelineWeeks: { min: 0.5, max: 1.0 },
    tag: "+$300–$500",
    timeTag: "+0.5–1w",
    scopeNotes: {
      client:
        "Instrumented UI tests (Compose / Flutter Driver), physical device fragmentation matrix testing, and memory leak triage.",
      backend:
        "Automated API integration test suite (Supertest/Jest), mock load test, and database index verification.",
    },
  },
];

/**
 * 4. Transparent Disclaimers & Exclusions
 */
export const ESTIMATOR_DISCLAIMERS = [
  {
    title: "Third-Party & Infrastructure Exclusions",
    text: "Estimates reflect custom software engineering services only. Excluded recurring costs: Apple Developer Program ($99/yr), Google Play Console ($25 one-time), cloud hosting (AWS/GCP/Firebase), SMS/OTP gateway credits, payment gateway transaction fees, and paid third-party APIs.",
  },
  {
    title: "Indicative Estimate Notice",
    text: "All timelines and cost ranges are indicative calculations based on standard production scopes. A binding quotation is provided following a detailed technical discovery call.",
  },
  {
    title: "Currency Conversion Reference",
    text: "BDT estimates are calculated at a reference exchange rate (1 USD = 122 BDT) for budgeting convenience and do not represent a live currency feed.",
  },
];

/**
 * 5. Dynamic & Accessible Quick Presets
 *
 * Generates platform-aware preset configurations (MVP, Commercial, Enterprise)
 * dynamically adapting to the user's selected platform architecture without
 * selecting unsupported features.
 */
export function getPresetsForProjectType(projectTypeId = "android") {
  const projectType =
    PROJECT_TYPES.find((p) => p.id === projectTypeId) || PROJECT_TYPES[0];

  const supported = projectType.supportedFeatures || [];

  return [
    {
      id: "mvp",
      title: "MVP / Starter",
      track: projectType.name,
      badge: "1.0× Scale",
      projectTypeId: projectType.id,
      complexityId: "mvp",
      featureIds: ["auth"].filter((f) => supported.includes(f)),
      description: `${projectType.name} · MVP Tier (1.0×) · Auth & Core UI`,
      icon: "rocket_launch",
    },
    {
      id: "commercial",
      title: "Commercial Scale",
      track: projectType.name,
      badge: "1.35× Scale",
      projectTypeId: projectType.id,
      complexityId: "commercial",
      featureIds: ["auth", "payments", "realtime"].filter((f) =>
        supported.includes(f)
      ),
      description: `${projectType.name} · Commercial Tier (1.35×) · Auth, Payments & Realtime`,
      icon: "verified",
    },
    {
      id: "enterprise",
      title: "Enterprise Suite",
      track: projectType.name,
      badge: "1.85× Scale",
      projectTypeId: projectType.id,
      complexityId: "enterprise",
      featureIds: [...supported],
      description: `${projectType.name} · Enterprise Tier (1.85×) · Full ${supported.length}-Feature Suite`,
      icon: "corporate_fare",
    },
  ];
}

export const ESTIMATOR_PRESETS = getPresetsForProjectType("android");



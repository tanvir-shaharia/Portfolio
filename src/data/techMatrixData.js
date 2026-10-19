/**
 * Technical Stack Matrix Data Architecture
 * 
 * Strict Classification:
 * - Primary Specialization: Android Native & Flutter
 * - Supporting Capabilities: Backend, Database & Web Development
 * - Context Annotations: Restrained badges for Academic foundation & Project experience
 */

export const CORE_CATEGORIES = [
  {
    id: "01",
    tag: "01 // LANGUAGES",
    title: "Programming Languages",
    subtitle: "Core Languages & Runtimes",
    icon: "code",
    iconColor: "text-secondary",
    accentBorder: "group-hover:border-secondary/40",
    skills: [
      {
        id: "kotlin",
        name: "Kotlin",
        icon: { type: "svg", name: "kotlin" },
        primary: true,
      },
      {
        id: "dart",
        name: "Dart",
        icon: { type: "svg", name: "dart" },
        primary: true,
      },
      {
        id: "java",
        name: "Java",
        icon: { type: "fa", name: "fa-brands fa-java text-[#ea2d2e]" },
        badge: "Certified",
      },
      {
        id: "sql",
        name: "SQL",
        icon: { type: "material", name: "database" },
      },
      {
        id: "csharp",
        name: "C#",
        icon: { type: "svg", name: "csharp" },
        badge: "Project",
      },
      {
        id: "cpp",
        name: "C++",
        icon: { type: "svg", name: "cpp" },
        badge: "Academic",
      },
      {
        id: "shell",
        name: "Shell / Bash",
        icon: { type: "material", name: "terminal" },
      },
    ],
  },
  {
    id: "02",
    tag: "02 // MOBILE PLATFORMS",
    title: "Mobile Platforms & Frameworks",
    subtitle: "Native Android & Cross-Platform UI",
    icon: "phone_android",
    iconColor: "text-primary",
    accentBorder: "group-hover:border-primary/40",
    skills: [
      {
        id: "android-sdk",
        name: "Android SDK",
        icon: { type: "fa", name: "fa-brands fa-android text-[#3DDC84]" },
        primary: true,
      },
      {
        id: "jetpack-compose",
        name: "Jetpack Compose",
        icon: { type: "svg", name: "compose" },
        primary: true,
      },
      {
        id: "flutter-sdk",
        name: "Flutter SDK",
        icon: { type: "svg", name: "flutter" },
        primary: true,
      },
      {
        id: "compose-multiplatform",
        name: "Compose Multiplatform",
        icon: { type: "svg", name: "kmp" },
      },
      {
        id: "android-views",
        name: "Android Views (XML)",
        icon: { type: "material", name: "code_blocks" },
      },
      {
        id: "material-3",
        name: "Material 3",
        icon: { type: "material", name: "palette" },
      },
    ],
  },
  {
    id: "03",
    tag: "03 // ARCHITECTURE",
    title: "Architecture & State Management",
    subtitle: "Architecture, Reactive State & Dependency Injection",
    icon: "schema",
    iconColor: "text-tertiary",
    accentBorder: "group-hover:border-tertiary/40",
    skills: [
      {
        id: "clean-arch",
        name: "Clean Architecture",
        icon: { type: "material", name: "layers" },
      },
      {
        id: "mvvm",
        name: "MVVM",
        icon: { type: "material", name: "view_quilt" },
      },
      {
        id: "mvi",
        name: "MVI",
        icon: { type: "material", name: "sync_alt" },
      },
      {
        id: "coroutines-flow",
        name: "Kotlin Coroutines / Flow / StateFlow",
        icon: { type: "material", name: "waves" },
      },
      {
        id: "dagger-hilt",
        name: "Dagger-Hilt",
        icon: { type: "material", name: "device_hub" },
      },
      {
        id: "koin",
        name: "Koin",
        icon: { type: "material", name: "hub" },
      },
      {
        id: "riverpod",
        name: "Riverpod",
        icon: { type: "material", name: "alt_route" },
      },
      {
        id: "provider",
        name: "Provider",
        icon: { type: "material", name: "account_tree" },
      },
      {
        id: "bloc",
        name: "BLoC",
        icon: { type: "material", name: "stream" },
      },
    ],
  },
  {
    id: "04",
    tag: "04 // NETWORKING",
    title: "Networking & Cloud Services",
    subtitle: "APIs, Messaging, Cloud Sync & Observability",
    icon: "hub",
    iconColor: "text-secondary-fixed",
    accentBorder: "group-hover:border-secondary-fixed/40",
    skills: [
      {
        id: "rest-apis",
        name: "REST APIs",
        icon: { type: "material", name: "lan" },
      },
      {
        id: "retrofit",
        name: "Retrofit",
        icon: { type: "material", name: "http" },
      },
      {
        id: "okhttp",
        name: "OkHttp",
        icon: { type: "material", name: "cloud_sync" },
      },
      {
        id: "dio",
        name: "Dio",
        icon: { type: "material", name: "send_and_archive" },
      },
      {
        id: "fcm",
        name: "Firebase Cloud Messaging (FCM)",
        icon: { type: "fa", name: "fa-solid fa-bell text-[#FFA611]" },
      },
      {
        id: "crashlytics",
        name: "Firebase Crashlytics",
        icon: { type: "fa", name: "fa-solid fa-chart-line text-[#FFA611]" },
      },
      {
        id: "gdrive-api",
        name: "Google Drive API",
        icon: { type: "fa", name: "fa-brands fa-google-drive text-[#34A853]" },
      },
      {
        id: "google-play-billing",
        name: "Google Play Billing (In-App Purchases)",
        icon: { type: "fa", name: "fa-brands fa-google-play text-[#0086F8]" },
      },
    ],
  },
  {
    id: "05",
    tag: "05 // PERSISTENCE",
    title: "Databases & Local Storage",
    subtitle: "Offline-First Persistence & Data Management",
    icon: "database",
    iconColor: "text-secondary",
    accentBorder: "group-hover:border-secondary/40",
    skills: [
      {
        id: "room-db",
        name: "Room Database",
        icon: { type: "material", name: "table_chart" },
      },
      {
        id: "sqlite",
        name: "SQLite",
        icon: { type: "material", name: "storage" },
      },
      {
        id: "datastore",
        name: "Jetpack DataStore",
        icon: { type: "material", name: "folder_data" },
      },
      {
        id: "room-kmp",
        name: "Room KMP",
        icon: { type: "material", name: "inventory_2" },
      },
      {
        id: "hive",
        name: "Hive",
        icon: { type: "material", name: "inventory" },
      },
    ],
  },
  {
    id: "06",
    tag: "06 // DEV ECOSYSTEM",
    title: "Developer Tools & Ecosystem",
    subtitle: "Build Systems, Release Workflows & Hardware Integration",
    icon: "build",
    iconColor: "text-primary-fixed",
    accentBorder: "group-hover:border-primary-fixed/40",
    skills: [
      {
        id: "android-studio",
        name: "Android Studio",
        icon: { type: "fa", name: "fa-brands fa-android text-[#3DDC84]" },
      },
      {
        id: "gradle",
        name: "Gradle",
        icon: { type: "material", name: "settings_suggest" },
      },
      {
        id: "git-github",
        name: "Git / GitHub",
        icon: { type: "fa", name: "fa-brands fa-github text-gray-700 dark:text-gray-200" },
      },
      {
        id: "play-console",
        name: "Google Play Console",
        icon: { type: "fa", name: "fa-brands fa-google-play text-[#0086F8]" },
      },
      {
        id: "postman",
        name: "Postman",
        icon: { type: "material", name: "forward_to_inbox" },
      },
      {
        id: "vscode",
        name: "VS Code",
        icon: { type: "material", name: "terminal" },
      },
      {
        id: "ble",
        name: "Bluetooth Low Energy (BLE)",
        icon: { type: "fa", name: "fa-brands fa-bluetooth-b text-[#0082FC]" },
      },
    ],
  },
];

/**
 * Separate Supporting Category — Backend & Web Development
 * Explicitly requested to preserve mobile prominence while exposing real supporting backend/web skills.
 */
export const BACKEND_WEB_EXPERIENCE = {
  id: "backend-web",
  tag: "SUPPORTING // BACKEND & WEB",
  title: "Supporting Backend, Database & Web Experience",
  subtitle: "Cross-functional backend API integration, secondary database management & web delivery",
  icon: "dns",
  description:
    "Hands-on experience engineering supporting services, administrative portals, and API integrations that connect client applications to database backends.",
  skills: [
    {
      id: "csharp-net",
      name: "C# / .NET",
      badge: "Project Experience",
      icon: { type: "svg", name: "csharp" },
      role: "Backend service & API development for desktop and web applications.",
    },
    {
      id: "laravel",
      name: "Laravel",
      icon: { type: "fa", name: "fa-brands fa-laravel text-[#FF2D20]" },
      role: "RESTful endpoints, MVC structuring, and application backend logic.",
    },
    {
      id: "php",
      name: "PHP",
      icon: { type: "fa", name: "fa-brands fa-php text-[#777BB4]" },
      role: "Server-side data handling and legacy web service maintenance.",
    },
    {
      id: "web-tech",
      name: "Web Technologies (HTML5 / CSS3 / JavaScript)",
      icon: { type: "fa", name: "fa-brands fa-js text-amber-500 dark:text-[#F7DF1E]" },
      role: "Responsive frontend interfaces, modern CSS design tokens, and web client delivery.",
    },
    {
      id: "backend-api-integration",
      name: "Backend API Integration",
      icon: { type: "material", name: "sync_alt" },
      role: "Contract-first API client integration, authentication handshakes, and JSON payload handling.",
    },
  ],
};

/**
 * Compact AI-Assisted Engineering Strip
 * Visually secondary horizontal glass bar below the core matrix and backend section.
 */
export const AI_WORKFLOWS = {
  tag: "07 // WORKFLOW MODERNIZATION",
  heading: "ACCELERATED ENGINEERING WORKFLOWS",
  subtitle: "Modern AI-augmented engineering, specification synthesis & context optimization",
  icon: "auto_awesome",
  skills: [
    {
      id: "prompt-eng",
      name: "Prompt Engineering",
      icon: { type: "material", name: "psychology" },
    },
    {
      id: "context-spec",
      name: "Context & Specification Optimization",
      icon: { type: "material", name: "integration_instructions" },
    },
    {
      id: "ai-assisted-dev",
      name: "AI-Assisted Development",
      icon: { type: "material", name: "smart_toy" },
    },
    {
      id: "agentic-workflows",
      name: "Agentic Workflows",
      icon: { type: "material", name: "bolt" },
    },
  ],
};

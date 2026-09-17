# PocketLog — Google Play Console

## App Information

- App Name: PocketLog: Budget & Spending
- Platform: Android
- Package Name: com.tanvir.pocketlog
- Developer: MD Tanvir Shaharia

## Current Release

- Version: 1.2.3
- Version Code: 9
- Google Play Status: Available on Google Play
- Release Phase: Production Release (1.2.3)

## Key Features

- Expense tracking
- Expense history
- Monthly budgeting
- Spending analytics
- Payment source analysis
- Monthly PDF reports
- Local notifications
- English & Bangla
- Light & Dark themes

## Architecture & Technology

- Kotlin
- Jetpack Compose
- Material 3
- Clean Architecture
- MVVM
- Hilt
- Room

## Privacy Policy

https://tanvirshaharia.vercel.app/pocketlog/privacy

## Portfolio Status

Available on Google Play.

## Google Play URL

https://play.google.com/store/apps/details?id=com.tanvir.pocketlog
- Do not expose tester email addresses.
- Do not expose developer account ID.
- Do not expose personal phone numbers.
- Do not expose financial/payment information.
- Do not use screenshots containing sensitive/private Play Console information.

1. App Overview
PocketLog is a lightweight, offline-first personal finance and habit analytics application for Android. It enables users to record daily transactions, monitor item quantities (such as coffee or cigarette consumption) alongside monetary costs, and automatically turns this data into visual dashboards, period-over-period trends, and downloadable reports.

2. Short Professional Description
A secure, local-first personal expense and habit tracking app for Android. Built with Kotlin, Jetpack Compose, and Room, PocketLog lets users log transactions in seconds, monitor budget usage, and generate offline PDF summaries—operating completely on-device without internet access, logins, or third-party cloud data collection.

3. Problem It Solves
Logging Friction: Traditional trackers require navigating complex forms. PocketLog resolves this with a quick-add interface that caches and pre-fills the last-used amount and unit values for each category.
Lack of Quantity Tracking: standard apps only track money. PocketLog solves this by allowing simultaneous tracking of monetary cost and quantity/units (e.g., piece, pack, meal, trip) for specific habit-tracking categories.
Data Privacy Risks: Most financial tools upload sensitive records to external cloud servers. PocketLog eliminates online data leaks by processing and storing all information locally inside the device's sandbox.
4. Key Features
Dual-Tracking Inputs: Log monetary amounts alongside optional quantities and unit labels.
Dynamic Dashboards: Access a main overview displaying overall totals, budget utilization, and recent logs, plus dedicated category dashboards tracking averages and previous period trends.
History & Search: View transactions in a date-grouped timeline supporting category filters, date-range filters, text searches on notes, and custom sorting.
Offline PDF Builder: Instantly generate structured Monthly Reports displaying categories, payment methods, and daily spending summaries.
Local Notifications: Automated reminders including exact daily logging prompts, event-driven budget limit warnings (at 80%, 100%, and exceeded thresholds), and monthly review checks.
5. Technology Stack
Language: Kotlin
UI Framework: Jetpack Compose with Material 3
Local Database: Room Persistence Library (SQLite)
Dependency Injection: Dagger Hilt
Background Tasks: WorkManager & AlarmManager
Serialization: Kotlinx Serialization
Jetpack Libraries: Activity Compose, Navigation Compose, and Core Splashscreen
6. Architecture
Pattern: MVVM (Model-View-ViewModel) + Clean Architecture.
Core Design: The app enforces separation of concerns:
Presentation Layer: Houses Compose layouts and ViewModels exposing reactive StateFlow structures representing current UI state.
Domain Layer: Contains pure business logic, database repository interfaces, and use cases (e.g., notification evaluators, spending summary calculations) with no Android platform dependencies.
Data Layer: Handles local persistence, mapping, and database DAO configurations, supplying data streams to the repositories.
Reactive Flow: UI screens observe database streams reactively via repositories, ensuring immediate screen updates upon data changes. Direct database access from the UI layer is strictly prohibited.
7. Offline-First & Privacy
Zero Network Access: The application does not request android.permission.INTERNET in its 

AndroidManifest.xml
. All calculations are performed entirely on-device, and data never leaves the physical sandbox.
No Telemetry SDKs: Contains zero integrations of Firebase, AdMob, Google Analytics, or other third-party tracking services.
Secure System Backups: Configured to support standard Android Auto Backup rules. Backups are encrypted by Google and managed through the user's private Google Drive (the developer has no access to the data).
8. Important Technical Implementations
Native Canvas PDF Generation: Leverages Android's built-in graphics engine (

MonthlyReportPdfGenerator
) to write reports to the app's cache directory using android.graphics.pdf.PdfDocument. This generates highly customized, multi-page PDFs containing text, dividers, progress bars, and tables without using heavy third-party reporting libraries.
Custom Dependency Injection for WorkManager: Implements manual WorkManager initialization inside 

PocketLogApplication
 using Hilt's HiltWorkerFactory. This disables the default auto-initializer in the manifest and allows background tasks to securely inject repository dependencies.
Precise Currency Representation: Money values are stored as Long integers representing Poisha (1 Taka = 100 Poisha) inside 

ExpenseEntity
. This avoids floating-point precision loss inherent to Double or Float and keeps financial summaries mathematically accurate.
9. Localization & Theme Support
Multi-Language Support: Localized in English and Bangla using system string resources. Custom digit-converters convert Western numbers (0-9) into Bangla unicode glyphs (০-৯) in native graphic canvases.
Dynamic Locale Swapping: Intercepts application initialization in MainActivity.attachBaseContext to overwrite and inject custom local configurations on-the-fly.
Custom Glassmorphism Styles: Adapts a custom Material 3 slate/navy design palette containing translucent containers, thin border coordinates, and card gradients that react dynamically to System/Light/Dark background states.
10. Google Play Status
Status: Available on Google Play.
Release Phase: Production release (v1.2.3).
11. Version Information
Version Name: 1.2.3
Version Code: 9
12. Privacy Policy
Source Document: 

POCKETLOG_PRIVACY_POLICY.md
Privacy Principles: Operating fully offline, PocketLog does not collect, access, or share any personal identifier information. Financial inputs, configuration states, and reminder times are saved in localized private sandboxes. Exported reports are handled via a custom FileProvider that issues temporary, read-only content:// URI grants to external target apps manually selected by the user. Complete database deletion is immediately executed upon clearing app data or uninstalling the app.
13. Notable Technical Challenges & Solutions
1. AlarmManager exact alarms are cleared upon system reboot
Challenge: Android clears registered exact alarms in AlarmManager whenever the operating system restarts. Without intervention, users would lose daily logging reminders after a device reboot.
Solution: Registered a 

BootReceiver
 in the manifest to capture the system's ACTION_BOOT_COMPLETED broadcast. When triggered, it reads saved reminder preferences from local settings and schedules a new exact alarm using Hilt-injected schedulers.
2. Standard native text drawing ignores locale configurations
Challenge: When rendering numbers and dates to a canvas via native graphics APIs in the PDF builder, Android renders English digits even if the app's current locale is set to Bangla.
Solution: Implemented a string-filtering mapper in the report generator that manually translates English numeral characters into their Bangla equivalents prior to canvas draw operations, ensuring consistent localization across generated reports.
3. modern sandboxing prevents sharing files via standard paths
Challenge: Trying to share a generated PDF file using a raw file:// path throws a FileUriExposedException on modern Android API levels.
Solution: Configured androidx.core.content.FileProvider to expose directories securely. PocketLog generates a temporary content:// URI with transient read permissions, allowing users to send PDF exports to other apps safely
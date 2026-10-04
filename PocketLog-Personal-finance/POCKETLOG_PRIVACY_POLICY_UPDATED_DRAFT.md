# Privacy Policy for PocketLog: Personal Finance

**Draft Version:** 2.0.0 (Release Candidate)  
**Effective Date:** [OWNER CONFIRMATION REQUIRED: Target Release Date, e.g., October 2026]  
**Developer:** Md. Tanvir Shaharia  
**Application Name:** PocketLog: Personal Finance  
**Package Identifier:** `com.tanvir.pocketlog`  
**Contact:** [OWNER CONFIRMATION REQUIRED: Official Support Email Address]  

---

## 1. Introduction & Developer Identity

Welcome to **PocketLog: Personal Finance** ("PocketLog", "the Application", "we", "our", or "us"), developed and maintained by **Md. Tanvir Shaharia**. We respect your privacy and are committed to transparency regarding how your data is handled.

PocketLog is built with an **offline-first architecture**. Your core personal financial data—including your accounts, transactions, budgets, notes, and financial summaries—is stored locally on your device by default. This Privacy Policy explains what information the Application processes, why it is processed, where it is stored, and under what circumstances (such as cloud backup or exchange rate updates) network communication occurs.

---

## 2. Inaccuracies Addressed in this Updated Policy

For users, reviewers, and auditors reviewing previous documentation (such as the initial August 18, 2026 draft), this updated policy addresses the following updates introduced in **PocketLog v2.0.0**:

1. **Network Connectivity:** Previous policies stated the app *"operates entirely offline and does not connect to any external servers"*. In version 2.0.0, the app declares `android.permission.INTERNET` and `android.permission.ACCESS_NETWORK_STATE` to support daily public foreign exchange (FX) rate updates and optional cloud backups.
2. **Optional Account Integration:** While local usage requires no registration or login, version 2.0.0 offers optional **Google Sign-In** solely for users who choose to back up or restore their financial records using Google Drive.
3. **Third-Party Services:** The Application integrates Google Play Services libraries for authentication, private Google Drive `appdata` access, in-app updates, and in-app review requests.
4. **Android Auto-Backup Exclusions:** Previous policies referenced generic OS-level cloud backups. In version 2.0.0, PocketLog's configuration files (`data_extraction_rules.xml` and `backup_rules.xml`) explicitly **exclude** the local SQLite database and sensitive settings from automatic operating system cloud backups to prevent uncontrolled data transfers. Cloud backup is placed entirely under user control via the in-app Google Drive system.

---

## 3. Information the Application Processes

### 3.1 Personal Financial Information (Locally Stored)
When you use PocketLog to track your personal finances, you input information directly into the Application. This data is stored locally in an encrypted or sandboxed Room SQLite database on your device and includes:
- **Accounts:** Account names, account types (Cash, Bank, Digital Wallet, Credit Card, Savings, Investment), institution names, last 4 digits of account numbers, currency codes, initial balances, credit limits, custom icons, and color assignments.
- **Transactions (Expenses & Incomes):** Transaction amounts (stored in native minor currency units, e.g., Poisha/cents), timestamps (date and time), assigned category, linked account, payment method (Cash, Card, Mobile Banking, Other), optional descriptive text notes, and optional quantity and measurement unit.
- **Transfers:** Source and destination account IDs, transferred amount, transfer fee amount, fee category, date, time, and custom exchange rates for cross-currency transfers.
- **Budgets:** Monthly spending limits, category spending caps, period identifiers (YYYY-MM), and target budget currencies.

### 3.2 Device & Application Preferences (Locally Stored)
PocketLog stores your operational preferences locally using Android's private `SharedPreferences`:
- Visual theme selection (Light, Dark, or System Default).
- Display language (English or Bangla).
- Global base reporting currency.
- Biometric and PIN app lock activation status.
- Notification preferences and scheduled reminder times (hour and minute).
- Category templates (last-used amount and unit per category to speed up entry).
- Dashboard balance visibility preference (masked/hidden state).

### 3.3 Optional Google Account Information
If you choose to use the optional Google Drive Backup & Restore feature:
- PocketLog initiates a standard Google Sign-In flow using Google Play Services (`play-services-auth`).
- The Application receives and caches your **Google Display Name**, **Email Address**, and **Profile Photo URL** locally on your device.
- **Purpose:** This information is displayed in the user profile header and lock screen to indicate which account is linked to your Google Drive backup.
- **Data Sharing:** We do not send this profile information to any independent server or third party.

### 3.4 Biometric & Authentication Data
If you enable the PIN/Biometric App Lock feature:
- Authentication is handled exclusively by the Android operating system via the `BiometricPrompt` and `KeyguardManager` APIs.
- PocketLog **never accesses, collects, processes, or stores** your actual fingerprint, facial geometry, device PIN, pattern, or password. The operating system only returns a cryptographic success or failure signal to PocketLog.

---

## 4. How Your Information Is Used

The information processed by PocketLog is used strictly to provide in-app functionality:
- **Financial Tracking & Reconciliation:** Calculating account balances, tracking expenses against income, and preventing double-counting of transfers.
- **Budgeting & Visual Telemetry:** Rendering spending progress bars, computing safe daily burn allowances, and alerting you when spending approaches or exceeds predefined thresholds (80%, 100%).
- **Financial Analytics & Cash Flow:** Generating cash flow summaries, category share charts, and savings rates across weekly, monthly, yearly, or custom date ranges.
- **Local Reminders:** Triggering local device notifications for daily expense logging and monthly spending reviews.
- **PDF Report Generation:** Compiling monthly financial summaries into printable PDF documents within your device's cache directory upon request.
- **Cloud Backup & Disaster Recovery:** Packaging your records into an encrypted archive to upload to or download from your personal Google Drive account when you explicitly instruct the app to do so.

---

## 5. Network Access & External Services

PocketLog connects to external network services only for the specific, user-beneficial purposes outlined below:

### 5.1 Foreign Exchange (FX) Rate Retrieval
- **What is sent:** Anonymous HTTP `GET` requests specifying only the public currency table date (e.g., requesting rates relative to USD).
- **What is NOT sent:** PocketLog **never** transmits your account balances, transaction history, location, IP identifiers, or personal data in FX rate requests.
- **Provider / Endpoints:** Requests are made to public, open-source content delivery networks (CDNs):
  - Primary CDN: `https://cdn.jsdelivr.net`
  - Fallback CDN: `https://latest.currency-api.pages.dev`
- **User-Agent:** Requests identify the client as `PocketLog-Android`.
- **Offline Behavior:** If no internet connection is available, PocketLog continues functioning seamlessly using previously cached exchange rates or manual exchange rates entered by the user.

### 5.2 Google Drive Cloud Backup & Restore
- **What is sent:** A single GZIP-compressed, SHA-256 verified archive (`pocketlog_backup.gz`) containing your local database entities and application preferences.
- **Destination:** The file is uploaded directly from your device to the **hidden Application Data folder (`appDataFolder`)** of your personal Google Drive account via the Google Drive API v3.
- **Access Restrictions:** PocketLog requests only the restricted `https://www.googleapis.com/auth/drive.appdata` OAuth scope. This scope grants access **only** to files created by PocketLog within that private hidden folder. PocketLog cannot see, read, modify, or delete any other files or folders in your Google Drive.
- **Developer Access:** We (the developer) do not host a cloud database, intermediary proxy, or relay server. We have **no access** to your Google Drive account, your credentials, or your backup file.
- **Trigger:** Cloud backups and restores are executed **only upon explicit user action** ("Back Up Now" or "Restore Backup").

### 5.3 Google Play In-App Updates & Reviews
- PocketLog uses standard Google Play Core libraries (`play-app-update` and `play-review`) to check whether a newer version of the Application is available on Google Play and to allow qualified users to submit Google Play store ratings.
- These interactions are mediated entirely by Google Play Services under Google's standard privacy policies.

---

## 6. Advertising, Analytics & Tracking Disclosure

- **Zero Advertising SDKs:** PocketLog contains **no** advertising networks (such as Google AdMob, Unity Ads, or AppLovin). It does not serve advertisements.
- **Zero Third-Party Analytics SDKs:** PocketLog contains **no** behavioral tracking or analytics SDKs (such as Firebase Analytics, Google Analytics, Facebook Pixel, Mixpanel, or Adjust).
- **Zero Automated Crash Telemetry:** PocketLog does not embed third-party crash telemetry SDKs (such as Firebase Crashlytics or Sentry). App exceptions and diagnostic logs remain local to the Android device logcat.
- **Zero Data Monetization:** We do not sell, rent, monetize, trade, or share your financial records or personal information with data brokers, advertisers, or third parties under any circumstances.

---

## 7. Data Storage, Security & Retention

### 7.1 Local Storage Security
- PocketLog stores your database, cache, and preferences exclusively within Android's protected internal app storage sandbox (`/data/data/com.tanvir.pocketlog/`).
- Android's sandboxing architecture prevents other applications installed on your device from reading PocketLog's database files.
- We strongly advise users to maintain device-level security (PIN, password, pattern, or biometrics) to protect physical access to the device.

### 7.2 PDF Export Security
- Generated Monthly Report PDF files are stored temporarily in the application's internal cache folder (`cacheDir/reports/`).
- When you tap "Share" or "Export", the file is provided to your chosen target application (e.g., Email, messaging, or cloud storage) via Android's secure `FileProvider` mechanism using a temporary, grant-restricted `content://` URI.

### 7.3 Data Retention & User Deletion Rights
Because PocketLog operates without a central developer backend, you maintain direct, total control over your data retention and deletion:
1. **In-App Deletion:** You can edit or delete individual transactions, budgets, accounts, and categories within the app at any time.
2. **Device Data Clearing:** Clearing application data in Android System Settings (`Settings > Apps > PocketLog > Storage > Clear Data`) or uninstalling the Application immediately and permanently deletes all local databases, preferences, cached reports, and stored Google account profile tokens from your device.
3. **Google Drive Backup Deletion:** Because cloud backups are stored in your personal Google account, deleting the local app does not automatically delete your Google Drive backup. You can delete your backup file at any time by:
   - Navigating to [Google Drive on the Web](https://drive.google.com) on a computer or desktop browser.
   - Going to **Settings (gear icon) > Settings > Manage Apps**.
   - Locating **PocketLog**, clicking **Options**, and selecting **"Delete hidden app data"**.

---

## 8. Android Permissions Declared & Justifications

| Permission | Android API | Technical Purpose & Scope |
|---|---|---|
| `android.permission.INTERNET` | All versions | Required to fetch daily public FX exchange rates from public CDNs and upload/download user-directed backups to Google Drive. |
| `android.permission.ACCESS_NETWORK_STATE` | All versions | Required to verify whether an active network connection exists before making FX or Google Drive requests, preventing unnecessary battery/data drain. |
| `android.permission.POST_NOTIFICATIONS` | API 33+ (Android 13+) | Required to display daily logging reminders, monthly spending summaries, and budget threshold alerts (80%, 100%). |
| `android.permission.RECEIVE_BOOT_COMPLETED` | All versions | Required by `BootReceiver` to automatically re-register exact alarms for scheduled daily reminders after the device reboots. |

---

## 9. Children's Privacy

PocketLog is a general-audience personal finance tool and does not knowingly solicit or collect personal information from children under the age of 13 (or under the age of 16 in certain jurisdictions). Because the app does not collect personal data on developer servers, it complies with children's privacy principles (including COPPA and GDPR-K). If a parent or guardian becomes aware that their child has stored personal data in the app or backed it up to Google Drive, they can clear the application data or delete the Google Drive backup as described in Section 7.3.

---

## 10. Changes to this Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our features, technical implementations, or applicable regulatory requirements. Any updates will be published with a revised "Effective Date" at the top of this document and updated in the Google Play Store listing. You are advised to review this Privacy Policy periodically for any changes.

---

## 11. Contact Information

If you have any questions, concerns, or inquiries regarding this Privacy Policy or the data practices of PocketLog, please contact:

- **Developer:** Md. Tanvir Shaharia  
- **Email:** [OWNER CONFIRMATION REQUIRED: Official Support Email Address, e.g., tanvir.dev@... or support@...]  
- **Developer Website / Portfolio:** `https://tanvirshaharia.vercel.app`  
- **GitHub:** `https://github.com/tanvir-shaharia`  
- **Legal Entity / Jurisdiction:** [OWNER CONFIRMATION REQUIRED: Legal Entity & Jurisdiction, e.g., Individual Developer, Dhaka, Bangladesh]  

---

## 12. Summary Table of Data Handling Practices

| Data / Information | Purpose | Storage Location / Destination | Optional or Required | Implementation Verification |
|---|---|---|:---:|---|
| **Expenses, Incomes, Transfers** | Core personal financial logging and balance reconciliation | Local Room SQLite Database (`pocketlog_db`) on device | **Required** for app usage | Verified in `ExpenseDao.kt`, `IncomeDao.kt`, `TransferDao.kt` |
| **Financial Accounts & Limits** | Tracking account balances and credit limits | Local Room SQLite Database (`pocketlog_db`) on device | **Required** for app usage | Verified in `AccountDao.kt`, `AccountEntity.kt` |
| **Monthly Budgets & Alerts** | Budgeting and spending limit notifications | Local Room SQLite Database (`pocketlog_db`) on device | Optional | Verified in `BudgetDao.kt`, `BudgetAlertEvaluator.kt` |
| **Preferences & Settings** | Language, theme, base currency, reminder schedule | Local `SharedPreferences` (`pocketlog_prefs`) on device | Optional | Verified in `AppPreferences.kt` |
| **Google Account Info (Name, Email, Photo)** | Displaying connected account and backup ownership | Local `SharedPreferences` on device; not sent to developer | Optional (used only for Drive backup) | Verified in `AppPreferences.kt`, `MainActivity.kt` |
| **Full Database Backup Archive** | Cloud disaster recovery and data transfer | User's private Google Drive `appDataFolder` (`pocketlog_backup.gz`) | Optional (initiated only on user tap) | Verified in `GoogleDriveDataSource.kt`, `LocalBackupSerializer.kt` |
| **FX Rate HTTP GET Query** | Retrieving public currency exchange rate tables | Transmitted anonymously to jsDelivr / Cloudflare Pages CDNs | **Required** for online FX sync (offline fallback available) | Verified in `CurrencyApiRemoteDataSource.kt` |
| **Biometric Credentials (Fingerprint/PIN)** | Unlocking app interface | Processed exclusively by Android OS Keyguard / TEE; never accessed by app | Optional | Verified in `BiometricAuthManager.kt`, `BiometricPrompt` |
| **Generated Monthly Report PDF** | User-directed export and sharing | Stored in app internal cache directory; shared via `FileProvider` | Optional | Verified in `MonthlyReportPdfGenerator.kt`, `file_paths.xml` |

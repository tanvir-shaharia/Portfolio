# Privacy Policy for PocketLog

**Last Updated: September 6, 2026**

Welcome to PocketLog. We respect your privacy and are committed to protecting the financial and personal information you record in our application.

This Privacy Policy explains how PocketLog handles your data. PocketLog is designed from the ground up as a secure, privacy-first, and offline-first personal expense tracking application.

---

### 1. Introduction & Core Architecture
PocketLog is an offline-first personal expense and budget tracking application for Android. 
* **Offline-First Operation**: PocketLog operates 100% locally on your physical device by default. No account creation, login, or registration is required.
* **Strictly Scoped Network Usage**: The application requests the Android `android.permission.INTERNET` permission strictly and exclusively for optional, user-initiated Google Drive Cloud Backup & Restore.
* **Zero Background Telemetry**: When Google Drive backup is not actively triggered or connected, PocketLog transmits zero data across the network.

---

### 2. Information We Process
Because PocketLog runs locally on your device, we (the developer) do not collect, monitor, or store any of your data on private servers. The application processes and stores the following information locally on your device:

* **Financial and Transactional Data**: 
  * Expense amounts and monetary values.
  * Preferred local currency settings (including BDT ৳, INR ₹, USD $, EUR €, and custom currency formats).
  * Spending categories (e.g. food, transport, grocery, and user-customized categories).
  * Expense quantities, units (e.g., piece, pack, trip, meal), dates, timestamps, and optional text notes.
  * Payment methods used (e.g. Cash, Card, Mobile Banking).
  * Monthly budget limits and spending goals set by you.
* **Application Settings and Preferences**:
  * Visual theme settings (Light, Dark, or System default).
  * Selected application language (English or Bangla).
  * Notification preferences and scheduled reminder times.
  * Last-used amounts and units for each category (saved locally to simplify future entries).
  * Optional Google Drive backup metadata (such as last backup timestamp).

We **do not** collect Personal Identifiable Information (PII) such as your name, phone number, contacts, location, or device hardware identifiers.

---

### 3. How Your Data Is Stored
All transaction records and configuration options are saved directly in a private, sandboxed SQLite database managed via Android's Room Persistence Library and Jetpack DataStore / SharedPreferences.
* All computations, analytics, category breakdowns, and monthly summaries are executed 100% locally on your device.
* Your financial records are never uploaded to any developer-owned, third-party, or commercial databases.

---

### 4. How We Use Information
The data processed locally on your device is used solely to:
* Display your transaction history and daily, weekly, and monthly totals.
* Present visual analytics, category distribution charts, and budget limits.
* Trigger local reminder notifications (such as daily logging alerts).
* Generate monthly spending summaries and export them locally as PDF documents.
* Execute optional, user-initiated cloud backup and restore operations to your personal Google Drive account.

---

### 5. Data Sharing and Disclosure
We do not sell, rent, trade, share, or disclose your financial records to any third party. Your data never leaves your device unless you explicitly initiate an encrypted backup to your own Google Drive account or manually share an exported PDF report.

---

### 6. Third-Party Services & Zero Tracking Commitment
PocketLog adheres to a strict zero-tracking policy:
* **No Advertising SDKs**: There are no ad networks (e.g., Google AdMob, Unity Ads) integrated into the application.
* **No Analytics or Tracking SDKs**: There is no Firebase Analytics, Google Analytics, Mixpanel, or Facebook SDK embedded in the app.
* **No Telemetry or Crash Loggers**: There are no automated crash or telemetry reporting SDKs transmitting device data online.

---

### 7. Notifications & System Permissions
PocketLog utilizes Android's local AlarmManager and WorkManager APIs to schedule reminders:
* All reminder notifications are scheduled and displayed **entirely on-device** without external push notification servers.
* `POST_NOTIFICATIONS`: Required on Android 13+ to post local alarm notifications.
* `RECEIVE_BOOT_COMPLETED`: Used solely to reschedule your existing local reminders when your device is restarted.

---

### 8. Google Drive Cloud Backup & Restore (Opt-In)
PocketLog provides an optional, user-initiated cloud backup and restore feature using Google Sign-In (OAuth 2.0) and the Google Drive REST API.
* **Restricted Scope Isolation (`drive.appdata`)**: The app requests only the restricted Application Data Folder scope. PocketLog can **only** create, read, and write its own backup archive (`pocketlog_backup_v1.json.gz`) inside this hidden folder. It has **NO access** to your personal files, documents, photos, or other contents on your Google Drive.
* **Backup Contents**: The backup file contains your expenses, monthly budget goals, custom category settings, preferences (currency, language, theme, reminder times), and a SHA-256 integrity checksum to verify authenticity upon restoration.
* **Security Exclusions**: The backup strictly excludes passwords, OAuth tokens, secrets, encryption keys, or device hardware IDs.
* **User Revocation and Control**: You can disconnect your Google Account at any time directly from the app's Settings screen or permanently revoke PocketLog's authorization via your [Google Account Security Dashboard](https://myaccount.google.com/permissions).
* **Android Auto Backup**: PocketLog additionally supports Android's system-level Auto Backup, which may upload an encrypted device snapshot to your Google Account based on your OS settings.

---

### 9. Data Export and PDF Generation
PocketLog enables users to generate Monthly Summary reports in PDF format:
* Reports are rendered locally using Android's native Canvas graphics APIs and saved into the app's local cache directory.
* When sharing reports, the application employs Android's secure `FileProvider` mechanism to deliver a temporary `content://` URI with read-only permissions to your chosen destination app (e.g. Email, WhatsApp, Drive).
* This process is initiated manually by the user; no automated background file transfers occur.

---

### 10. Data Security
Your data is protected by Android's application sandboxing architecture, ensuring no unauthorized application can access PocketLog's database. Cloud backups are isolated in your personal Google Drive AppData container and validated with cryptographic SHA-256 checksums. We advise securing your mobile device with biometric authentication, a PIN, or a secure passphrase.

---

### 11. Children's Privacy
PocketLog does not collect or solicit personal information from any user, including children under the age of 13. The application is completely family-safe and complies with COPPA and GDPR requirements.

---

### 12. User Choices & Data Deletion
You maintain complete autonomy over all your data:
* **Local Data Deletion**: You can purge all expenses, categories, and settings instantly via Android settings:
  `Settings > Apps > PocketLog > Storage > Clear Data`
* **Cloud Backup Deletion**: You can delete your cloud backup archive by managing hidden application data in Google Drive or clearing the AppData folder.
* **App Uninstallation**: Uninstalling PocketLog immediately removes all sandboxed databases, preferences, and cached PDF files from your physical device.

---

### 13. Changes to This Privacy Policy
We may periodically update this Privacy Policy. Any modifications will be published on the official web portal:
[https://tanvirshaharia.vercel.app/pocketlog/privacy](https://tanvirshaharia.vercel.app/pocketlog/privacy)

---

### 14. Contact Information
If you have inquiries, feedback, or suggestions regarding this Privacy Policy or PocketLog's privacy architecture, please contact:
* **Developer**: MD Tanvir Shaharia
* **Email**: tanvirking29@gmail.com

---
---

# INTERNAL DEVELOPER NOTE: DATA SAFETY CROSS-CHECK
*This section is for reference when filling out the Google Play Console Data Safety Form and is NOT part of the public Privacy Policy.*

To complete the Play Console's Data Safety questionnaire for v1.2.0, use the following verified details based on the codebase audit:

### 1. Data Collection and Security
* **Is data collected or shared?** 
  * **No**. All financial data is processed locally on-device. The optional Google Drive backup is stored directly in the user's personal Google Drive AppData space and is not accessible to the developer or any third party. Under Google Play policies, data transferred directly to a user's cloud account at their explicit direction does not constitute third-party collection.
* **Is data encrypted in transit?** 
  * **Yes**. When using the optional Google Drive Cloud Backup feature, network traffic is encrypted over secure HTTPS / TLS connections directly to Google Drive endpoints.
* **Can users request deletion?** 
  * **Yes**. Users can delete local data at any time via Android app settings or delete their cloud backup via Google Drive account settings.

### 2. Data Types Handled (Processed locally / User cloud backup)
* **Financial Info**:
  * "Other Financial Info" (Expense transactions, budgets, payment methods, local currency preference).
* **App Info and Performance**:
  * None (No telemetry, crash SDKs, or performance profiling data).
* **Personal / Device IDs**:
  * None (No user profiles, passwords, device identifiers, or location data collected).

### 3. Declared Permissions
1. `android.permission.INTERNET`: Required solely for optional, user-initiated Google Drive Cloud Backup & Restore.
2. `android.permission.POST_NOTIFICATIONS`: Required on Android 13+ to post local alarms and notifications.
3. `android.permission.RECEIVE_BOOT_COMPLETED`: Required to reschedule local logging reminders after a device reboot.

### 4. SDK Audit
* **Included SDKs**:
  * Google Sign-In (`play-services-auth`) & Google Drive REST API (`google-api-services-drive`) for user-initiated AppData cloud backup.
  * Android Jetpack libraries (Compose, Material 3, Room, DataStore, WorkManager, Hilt).
* **Excluded SDKs**: Zero advertising networks (No AdMob), zero analytics SDKs (No Firebase Analytics, No Google Analytics), zero tracking SDKs.

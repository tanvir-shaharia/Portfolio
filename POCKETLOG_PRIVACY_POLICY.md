# Privacy Policy for PocketLog

**Last Updated: August 18, 2026**

Welcome to PocketLog. We respect your privacy and are committed to protecting the information you record in our application.

This Privacy Policy explains how PocketLog handles your data. PocketLog is designed as a secure, local-first, offline-only application.

---

### 1. Introduction
PocketLog is a personal expense and budget tracking application for Android. 
* It operates **entirely offline**.
* The application does not require user registration, account creation, or login.
* The application does **not** connect to any external servers or transmit any data over the internet.

---

### 2. Information We Collect
Because PocketLog runs entirely locally on your device, we (the developer) do not collect, see, or store any of your data. However, the application processes and stores the following information locally on your device to function:

* **Financial and Transactional Data**: 
  * Expense amounts (stored in local Poisha/cents currency units).
  * Spending categories (e.g. food, transport, grocery, custom categories).
  * Expense quantities, units, dates, times, and optional descriptive text notes.
  * Payment methods used (e.g. Cash, Card, Mobile Banking).
  * Monthly budget limits set by you.
* **Application Settings and Preferences**:
  * Visual theme settings (Light, Dark, or System default).
  * Selected application language (English or Bangla).
  * Notification preferences and scheduled reminder times.
  * Last-used amounts and units for each category (saved locally to simplify future entries).

We **do not** collect any Personal Identifiable Information (PII) such as your name, email address, phone number, physical address, or device unique identifiers.

---

### 3. How Your Data Is Stored
All data you input is stored in a private, local SQLite database managed via Android's Room Persistence Library and in local SharedPreferences.
* All calculations, analytics, graphs, and summaries are computed locally on your device.
* No data is transmitted to or stored on any external servers or cloud services.

---

### 4. How We Use Information
The information stored locally on your device is used solely to:
* Display your transactional history and daily, weekly, or monthly spending totals.
* Present visual graphs, category breakdowns, and monthly budget utilization.
* Show local notifications (such as daily expense reminders and budget warnings).
* Generate monthly spending summaries and export them locally as PDF documents.
* Auto-populate entry fields with your last-used settings to save you time.

---

### 5. Data Sharing and Disclosure
We do not share, sell, rent, trade, or disclose your data to any third parties. Since your data is stored locally on your device and the app has no network access, your data never leaves your device unless you choose to share it yourself.

---

### 6. Third-Party Services
PocketLog does **not** integrate with any third-party SDKs or cloud services.
* There are no advertising networks (like Google AdMob).
* There are no third-party analytics platforms (like Firebase Analytics or Google Analytics).
* There are no automated crash reporting SDKs that transmit telemetry online.

---

### 7. Notifications
PocketLog uses Android’s local AlarmManager and WorkManager APIs to schedule and trigger reminders (e.g., daily logging reminders and budget alerts).
* These notifications are generated and displayed **entirely locally** on your device.
* They do not rely on external push notification servers.
* This feature requires the Android `POST_NOTIFICATIONS` permission.

---

### 8. Data Backup / Device Storage
PocketLog supports the standard **Android Auto Backup** feature.
* If you have enabled automatic system backups on your Android device, the operating system may upload a copy of PocketLog's local database and preferences to your personal Google Drive cloud storage.
* This backup is encrypted and managed entirely by Google and your Android system. 
* We (the developer) have no access to this backup or your Google Drive storage.
* You can manage or disable these backups in your Android system settings.

---

### 9. Data Export and Sharing
PocketLog allows you to generate Monthly Report summaries as PDF files.
* These reports are written to the application’s local cache directory on your device.
* If you choose to export or share these reports, the application uses Android's secure `FileProvider` system to send the file via a temporary `content://` URI to other apps on your device (e.g., Email, messaging apps, or cloud drives).
* This sharing process is initiated entirely and manually by you. No background transmission takes place.

---

### 10. Data Security
Your data is protected by Android’s sandbox security model, which isolates PocketLog's database and storage from other applications on your device. However, please remember that the security of your data ultimately depends on your physical device security. We recommend securing your device with a PIN, pattern, password, or biometric lock.

---

### 11. Children's Privacy
Our application does not request, collect, or transmit any personal information, and it is suitable for users of all ages, including children.

---

### 12. Your Choices and Data Deletion
You have complete control over your data:
* **Manual Deletion**: You can delete all your stored financial data, budgets, and settings at any time by clearing the application's storage/cache in your Android system settings:
  `Settings > Apps > PocketLog > Storage > Clear Data`
* **Uninstall**: Uninstalling PocketLog from your device will permanently delete all locally stored databases, preferences, and cached PDF files. Note that you may also need to delete any system backups stored in your personal Google Drive.

---

### 13. Changes to This Privacy Policy
We may update our Privacy Policy from time to time. Since the app does not have network access to notify you, any updates will be posted on the hosting website:
`[Insert Hosting URL/Portfolio Path, e.g., https://yourportfolio.com/pocketlog/privacy]`

---

### 14. Contact Information
If you have any questions or feedback about this Privacy Policy or the app's privacy practices, please contact us at:
* **Developer**: Tanvir
* **Email**: `[Insert Developer Contact Email, e.g., tanvir.shaharia.dev@gmail.com]`

---
---

# INTERNAL DEVELOPER NOTE: DATA SAFETY CROSS-CHECK
*This section is for reference when filling out the Google Play Console Data Safety Form and is NOT part of the public Privacy Policy.*

To complete the Play Console's Data Safety questionnaire, use the following verified details based on the codebase audit:

### 1. Data Collection and Security
* **Is data collected or shared?** 
  * **No**. The app does not collect or share any user data. All data is processed locally. Under Play Store rules, data that is processed locally on-device and not sent off the device does **not** count as "collection" or "sharing." You can select **"No"** to the question of whether your app collects or shares user data.
* **Is data encrypted in transit?** 
  * **Not Applicable**. The app does not transmit data over the internet because it does not request `android.permission.INTERNET`.
* **Can users request deletion?** 
  * **Yes**. Users can clear all app data in Android settings or uninstall the app to instantly delete everything.

### 2. Data Types Handled (Processed locally only, not collected)
If you choose to declare local processing for transparency, the types of data are:
* **Financial Info**:
  * "Other Financial Info" (Expense transactions, budgets, payment methods).
* **App Info and Performance**:
  * None (No crash logs, diagnostics, or performance data are collected).
* **Personal / Device IDs**:
  * None (No names, emails, contacts, location, or device identifiers are accessed).

### 3. Declared Permissions
The app only requests and uses two permissions:
1. `android.permission.POST_NOTIFICATIONS`: Required on Android 13+ to post local alarms and notifications.
2. `android.permission.RECEIVE_BOOT_COMPLETED`: Required to reschedule local logging reminders after a device reboot.

### 4. SDK Audit
* The project has **no** integrated third-party SDKs that transmit data (No Firebase, No AdMob, No Analytics). Only standard Jetpack libraries, Hilt, Room, and WorkManager are used.

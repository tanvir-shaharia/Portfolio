import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Title from "../components/Section/title";

export default function PocketLogPrivacy() {
  return (
    <>
      <Helmet>
        <title>PocketLog Privacy Policy | MD Tanvir Shaharia</title>
        <meta
          name="description"
          content="Privacy Policy for PocketLog, a secure, offline-first personal expense and budget tracking Android application developed by MD Tanvir Shaharia."
        />
        <link rel="canonical" href="https://tanvirshaharia.vercel.app/pocketlog/privacy" />
      </Helmet>

      <PageLayout>
        <div className="flex items-center flex-wrap relative min-h-screen">
          <div className="containerCustom gap overflow-hidden max-w-4xl mx-auto px-4 sm:px-6">
            <Title title="PocketLog Privacy Policy" titleDes="Last Updated: September 6, 2026" />

            <div className="mt-8 space-y-8 text-gray-700 dark:text-zinc-300 font-nunito text-[15px] sm:text-base leading-relaxed">
              <p>
                Welcome to PocketLog. We respect your privacy and are committed to protecting the
                financial and personal information you record in our application.
              </p>
              <p>
                This Privacy Policy explains how PocketLog handles your data. PocketLog is designed
                from the ground up as a secure, privacy-first, and offline-first personal expense tracking application.
              </p>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  1. Introduction &amp; Core Architecture
                </h3>
                <p className="mb-3">
                  PocketLog is an offline-first personal expense and budget tracking application for Android.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Offline-First Operation</strong>: PocketLog operates 100% locally on your physical device by default. No account creation, login, or registration is required.
                  </li>
                  <li>
                    <strong>Strictly Scoped Network Usage</strong>: The application requests the Android <code>android.permission.INTERNET</code> permission strictly and exclusively for optional, user-initiated Google Drive Cloud Backup &amp; Restore.
                  </li>
                  <li>
                    <strong>Zero Background Telemetry</strong>: When Google Drive backup is not actively triggered or connected, PocketLog transmits zero data across the network.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  2. Information We Process
                </h3>
                <p className="mb-4">
                  Because PocketLog runs locally on your device, we (the developer) do not collect, monitor, or store any of your data on private servers. The application processes and stores the following information locally on your device:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <div>
                      <strong className="text-gray-900 dark:text-zinc-100">
                        Financial and Transactional Data
                      </strong>
                      :
                      <ul className="list-[circle] pl-6 mt-2 space-y-1.5">
                        <li>Expense amounts and monetary values.</li>
                        <li>
                          Preferred local currency settings (including BDT ৳, INR ₹, USD $, EUR €, and custom currency formats).
                        </li>
                        <li>Spending categories (e.g. food, transport, grocery, and custom categories).</li>
                        <li>
                          Expense quantities, units (e.g., piece, pack, trip, meal), dates, timestamps, and optional text notes.
                        </li>
                        <li>Payment methods used (e.g. Cash, Card, Mobile Banking).</li>
                        <li>Monthly budget limits and spending goals set by you.</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong className="text-gray-900 dark:text-zinc-100">
                        Application Settings and Preferences
                      </strong>
                      :
                      <ul className="list-[circle] pl-6 mt-2 space-y-1.5">
                        <li>Visual theme settings (Light, Dark, or System default).</li>
                        <li>Selected application language (English or Bangla).</li>
                        <li>Notification preferences and scheduled reminder times.</li>
                        <li>
                          Last-used amounts and units for each category (saved locally to simplify future entries).
                        </li>
                        <li>Optional Google Drive backup metadata (such as last backup timestamp).</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="mt-4">
                  We <strong>do not</strong> collect Personal Identifiable Information (PII) such as your name, phone number, contacts, location, or device hardware identifiers.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  3. How Your Data Is Stored
                </h3>
                <p className="mb-3">
                  All transaction records and configuration options are saved directly in a private, sandboxed SQLite database managed via Android's Room Persistence Library and Jetpack DataStore / SharedPreferences.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    All computations, analytics, category breakdowns, and monthly summaries are executed 100% locally on your device.
                  </li>
                  <li>
                    Your financial records are never uploaded to any developer-owned, third-party, or commercial databases.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  4. How We Use Information
                </h3>
                <p className="mb-3">
                  The data processed locally on your device is used solely to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Display your transaction history and daily, weekly, and monthly totals.</li>
                  <li>Present visual analytics, category distribution charts, and budget limits.</li>
                  <li>Trigger local reminder notifications (such as daily logging alerts).</li>
                  <li>Generate monthly spending summaries and export them locally as PDF documents.</li>
                  <li>Execute optional, user-initiated cloud backup and restore operations to your personal Google Drive account.</li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  5. Data Sharing and Disclosure
                </h3>
                <p>
                  We do not sell, rent, trade, share, or disclose your financial records to any third party. Your data never leaves your device unless you explicitly initiate an encrypted backup to your own Google Drive account or manually share an exported PDF report.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  6. Third-Party Services &amp; Zero Tracking Commitment
                </h3>
                <p className="mb-3">
                  PocketLog adheres to a strict zero-tracking policy:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>No Advertising SDKs</strong>: There are no ad networks (e.g., Google AdMob, Unity Ads) integrated into the application.
                  </li>
                  <li>
                    <strong>No Analytics or Tracking SDKs</strong>: There is no Firebase Analytics, Google Analytics, Mixpanel, or Facebook SDK embedded in the app.
                  </li>
                  <li>
                    <strong>No Telemetry or Crash Loggers</strong>: There are no automated crash or telemetry reporting SDKs transmitting device data online.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  7. Notifications &amp; System Permissions
                </h3>
                <p className="mb-3">
                  PocketLog utilizes Android's local AlarmManager and WorkManager APIs to schedule reminders:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    All reminder notifications are scheduled and displayed <strong>entirely on-device</strong> without external push notification servers.
                  </li>
                  <li>
                    <code>POST_NOTIFICATIONS</code>: Required on Android 13+ to post local alarm notifications.
                  </li>
                  <li>
                    <code>RECEIVE_BOOT_COMPLETED</code>: Used solely to reschedule your existing local reminders when your device is restarted.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  8. Google Drive Cloud Backup &amp; Restore (Opt-In)
                </h3>
                <p className="mb-3">
                  PocketLog provides an optional, user-initiated cloud backup and restore feature using Google Sign-In (OAuth 2.0) and the Google Drive REST API.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Restricted Scope Isolation (<code>drive.appdata</code>)</strong>: The app requests only the restricted Application Data Folder scope. PocketLog can <strong>only</strong> create, read, and write its own backup archive (<code>pocketlog_backup_v1.json.gz</code>) inside this hidden folder. It has <strong>NO access</strong> to your personal files, documents, photos, or other contents on your Google Drive.
                  </li>
                  <li>
                    <strong>Backup Contents</strong>: The backup file contains your expenses, monthly budget goals, custom category settings, preferences (currency, language, theme, reminder times), and a SHA-256 integrity checksum to verify authenticity upon restoration.
                  </li>
                  <li>
                    <strong>Security Exclusions</strong>: The backup strictly excludes passwords, OAuth tokens, secrets, encryption keys, or device hardware IDs.
                  </li>
                  <li>
                    <strong>User Revocation and Control</strong>: You can disconnect your Google Account at any time directly from the app's Settings screen or permanently revoke PocketLog's authorization via your{" "}
                    <a
                      href="https://myaccount.google.com/permissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 font-semibold underline"
                    >
                      Google Account Security Dashboard
                    </a>.
                  </li>
                  <li>
                    <strong>Android Auto Backup</strong>: PocketLog additionally supports Android's system-level Auto Backup, which may upload an encrypted device snapshot to your Google Account based on your OS settings.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  9. Data Export and PDF Generation
                </h3>
                <p className="mb-3">
                  PocketLog enables users to generate Monthly Summary reports in PDF format:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    Reports are rendered locally using Android's native Canvas graphics APIs and saved into the app's local cache directory.
                  </li>
                  <li>
                    When sharing reports, the application employs Android's secure <code>FileProvider</code> mechanism to deliver a temporary <code>content://</code> URI with read-only permissions to your chosen destination app (e.g. Email, WhatsApp, Drive).
                  </li>
                  <li>
                    This process is initiated manually by the user; no automated background file transfers occur.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  10. Data Security
                </h3>
                <p>
                  Your data is protected by Android's application sandboxing architecture, ensuring no unauthorized application can access PocketLog's database. Cloud backups are isolated in your personal Google Drive AppData container and validated with cryptographic SHA-256 checksums. We advise securing your mobile device with biometric authentication, a PIN, or a secure passphrase.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  11. Children's Privacy
                </h3>
                <p>
                  PocketLog does not collect or solicit personal information from any user, including children under the age of 13. The application is completely family-safe and complies with COPPA and GDPR requirements.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  12. User Choices &amp; Data Deletion
                </h3>
                <p className="mb-3">
                  You maintain complete autonomy over all your data:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Local Data Deletion</strong>: You can purge all expenses, categories, and settings instantly via Android settings:
                    <br />
                    <code className="inline-block mt-1 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono break-all">
                      Settings &gt; Apps &gt; PocketLog &gt; Storage &gt; Clear Data
                    </code>
                  </li>
                  <li>
                    <strong>Cloud Backup Deletion</strong>: You can delete your cloud backup archive by managing hidden application data in Google Drive or clearing the AppData folder.
                  </li>
                  <li>
                    <strong>App Uninstallation</strong>: Uninstalling PocketLog immediately removes all sandboxed databases, preferences, and cached PDF files from your physical device.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  13. Changes to This Privacy Policy
                </h3>
                <p>
                  We may periodically update this Privacy Policy. Any modifications will be published on the official web portal:
                  <br />
                  <a
                    href="https://tanvirshaharia.vercel.app/pocketlog/privacy"
                    className="inline-block mt-1 text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 font-semibold underline break-all"
                  >
                    https://tanvirshaharia.vercel.app/pocketlog/privacy
                  </a>
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section className="pb-10">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  14. Contact Information
                </h3>
                <p className="mb-3">
                  If you have inquiries, feedback, or suggestions regarding this Privacy Policy or PocketLog's privacy architecture, please contact:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Developer</strong>: MD Tanvir Shaharia
                  </li>
                  <li>
                    <strong>Email</strong>:{" "}
                    <a
                      href="mailto:tanvirking29@gmail.com"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 font-semibold underline"
                    >
                      tanvirking29@gmail.com
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}


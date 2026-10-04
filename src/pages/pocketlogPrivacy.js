import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/pageLayout";
import Title from "../components/Section/title";

export default function PocketLogPrivacy() {
  return (
    <>
      <Helmet>
        <title>PocketLog Privacy Policy | MD Tanvir Shaharia</title>
        <meta
          name="description"
          content="Official v2.0.0 Privacy Policy for PocketLog: Personal Finance, a secure, offline-first personal expense and budget tracking Android application developed by MD Tanvir Shaharia."
        />
        <link rel="canonical" href="https://tanvirshaharia.vercel.app/pocketlog/privacy" />
      </Helmet>

      <PageLayout>
        <div className="flex items-center flex-wrap relative min-h-screen">
          <div className="containerCustom gap overflow-hidden max-w-4xl mx-auto px-4 sm:px-6">
            <Title
              title="PocketLog Privacy Policy"
              titleDes="Effective Date: October 4, 2026 | Version: 2.0.0 (Release Candidate)"
            />

            <div className="mt-8 space-y-8 text-gray-700 dark:text-zinc-300 font-nunito text-[15px] sm:text-base leading-relaxed">
              {/* Navigation Pill Notice */}
              <div className="bg-brand-50/70 dark:bg-brand-950/30 border border-brand-200/60 dark:border-brand-900/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-gray-900 dark:text-zinc-100 block sm:inline">
                    Looking for Terms of Service?
                  </span>{" "}
                  <span>Review PocketLog's usage protocol and financial disclaimers.</span>
                </div>
                <Link
                  to="/pocketlog/terms"
                  className="inline-flex items-center gap-1.5 font-bold text-brand-600 dark:text-brand-400 hover:underline flex-shrink-0"
                >
                  <i className="fa-solid fa-file-contract"></i>
                  <span>View Terms of Service &rarr;</span>
                </Link>
              </div>

              {/* Section 1 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  1. Introduction &amp; Developer Identity
                </h3>
                <p className="mb-3">
                  Welcome to <strong>PocketLog: Personal Finance</strong> (&quot;PocketLog&quot;, &quot;the
                  Application&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), developed and
                  maintained by <strong>Md. Tanvir Shaharia</strong> (Package ID:{" "}
                  <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                    com.tanvir.pocketlog
                  </code>
                  ). We respect your privacy and are committed to complete transparency regarding how
                  your data is handled.
                </p>
                <p>
                  PocketLog is engineered from the ground up with an <strong>offline-first architecture</strong>.
                  Your core personal financial data—including your accounts, transactions, budgets, notes,
                  and financial summaries—is stored locally on your device by default. This Privacy Policy
                  explains what information the Application processes, why it is processed, where it is
                  stored, and under what circumstances (such as cloud backup or foreign exchange rate
                  updates) network communication occurs.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 2 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  2. Inaccuracies Addressed in this Updated Policy
                </h3>
                <p className="mb-3">
                  For users, reviewers, and auditors reviewing previous documentation (such as the initial
                  August 18, 2026 draft), this updated policy addresses the following architectural updates
                  introduced in <strong>PocketLog v2.0.0</strong>:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Network Connectivity:</strong> Previous policies stated the app{" "}
                    <em>&quot;operates entirely offline and does not connect to any external servers&quot;</em>.
                    In version 2.0.0, the app declares{" "}
                    <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                      android.permission.INTERNET
                    </code>{" "}
                    and{" "}
                    <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                      android.permission.ACCESS_NETWORK_STATE
                    </code>{" "}
                    to support daily public foreign exchange (FX) rate updates and optional cloud backups.
                  </li>
                  <li>
                    <strong>Optional Account Integration:</strong> While local usage requires zero
                    registration or login, version 2.0.0 offers optional <strong>Google Sign-In</strong>{" "}
                    solely for users who choose to back up or restore their financial records using Google Drive.
                  </li>
                  <li>
                    <strong>Third-Party Services:</strong> The Application integrates Google Play Services
                    libraries strictly for authentication, private Google Drive{" "}
                    <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                      appdata
                    </code>{" "}
                    access, in-app updates, and in-app review requests.
                  </li>
                  <li>
                    <strong>Android Auto-Backup Exclusions:</strong> In version 2.0.0, PocketLog's
                    configuration files (
                    <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                      data_extraction_rules.xml
                    </code>{" "}
                    and{" "}
                    <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                      backup_rules.xml
                    </code>
                    ) explicitly <strong>exclude</strong> the local SQLite database and sensitive settings from
                    automatic operating system cloud backups to prevent uncontrolled data transfers. Cloud
                    backup is placed entirely under user control via the in-app Google Drive system.
                  </li>
                </ol>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 3 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  3. Information the Application Processes
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  3.1 Personal Financial Information (Locally Stored)
                </h4>
                <p className="mb-3">
                  When you use PocketLog to track your personal finances, you input information directly into
                  the Application. This data is stored locally in an encrypted or sandboxed Room SQLite
                  database on your physical device and includes:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 mb-4">
                  <li>
                    <strong>Accounts:</strong> Account names, account types (Cash, Bank, Digital Wallet,
                    Credit Card, Savings, Investment, Other), institution names, last 4 digits of account
                    numbers, currency codes, initial balances, credit limits, custom icons, and color
                    assignments.
                  </li>
                  <li>
                    <strong>Transactions (Expenses &amp; Incomes):</strong> Transaction amounts (stored in
                    native minor currency units, e.g., Poisha/cents), timestamps (date and time), assigned
                    category, linked account, payment method (Cash, Card, Mobile Banking, Other), optional
                    descriptive text notes, and optional quantity and measurement unit.
                  </li>
                  <li>
                    <strong>Transfers:</strong> Source and destination account IDs, transferred amount,
                    transfer fee amount, fee category, date, time, and custom exchange rates for cross-currency
                    transfers.
                  </li>
                  <li>
                    <strong>Budgets:</strong> Monthly spending limits, category spending caps, period
                    identifiers (YYYY-MM), and target budget currencies.
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  3.2 Device &amp; Application Preferences (Locally Stored)
                </h4>
                <p className="mb-3">
                  PocketLog stores your operational preferences locally using Android's private{" "}
                  <code>SharedPreferences</code>:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 mb-4">
                  <li>Visual theme selection (Light, Dark, or System Default).</li>
                  <li>Display language (English or Bangla with 100% key parity).</li>
                  <li>Global base reporting currency (from 14 supported world currencies).</li>
                  <li>Biometric and PIN app lock activation status.</li>
                  <li>Notification preferences and scheduled reminder times (hour and minute).</li>
                  <li>Category templates (last-used amount and unit per category to accelerate logging).</li>
                  <li>Dashboard balance visibility preference (masked/hidden state).</li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  3.3 Optional Google Account Information
                </h4>
                <p className="mb-3">
                  If you choose to enable the optional Google Drive Backup &amp; Restore feature:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 mb-4">
                  <li>
                    PocketLog initiates a standard Google Sign-In flow using Google Play Services (
                    <code>play-services-auth</code>).
                  </li>
                  <li>
                    The Application receives and caches your <strong>Google Display Name</strong>,{" "}
                    <strong>Email Address</strong>, and <strong>Profile Photo URL</strong> locally on your
                    device.
                  </li>
                  <li>
                    <strong>Purpose:</strong> This information is displayed in the user profile header and
                    lock screen solely to indicate which account is linked to your Google Drive backup.
                  </li>
                  <li>
                    <strong>Data Sharing:</strong> We do not send this profile information to any independent
                    server or third party.
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  3.4 Biometric &amp; Authentication Data
                </h4>
                <p>
                  If you enable the PIN/Biometric App Lock feature, authentication is handled exclusively by
                  the Android operating system via the <code>BiometricPrompt</code> and{" "}
                  <code>KeyguardManager</code> APIs. PocketLog <strong>never accesses, collects, processes,
                  or stores</strong> your actual fingerprint, facial geometry, device PIN, pattern, or
                  password. The operating system returns only a cryptographic success or failure signal to the
                  app.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 4 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  4. How Your Information Is Used
                </h3>
                <p className="mb-3">
                  The information processed by PocketLog is used strictly to provide in-app functionality:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Financial Tracking &amp; Reconciliation:</strong> Calculating account balances,
                    tracking expenses against income, and preventing double-counting of transfers through
                    deterministic ledger reconciliation.
                  </li>
                  <li>
                    <strong>Budgeting &amp; Visual Telemetry:</strong> Rendering spending progress bars,
                    computing safe daily burn allowances, and alerting you when spending approaches or exceeds
                    predefined thresholds (80%, 100%).
                  </li>
                  <li>
                    <strong>Financial Analytics &amp; Cash Flow:</strong> Generating cash flow summaries,
                    category share charts, and net savings rates across weekly, monthly, yearly, or custom
                    date ranges.
                  </li>
                  <li>
                    <strong>Local Reminders:</strong> Triggering local device notifications for daily expense
                    logging and monthly spending reviews without background server telemetry.
                  </li>
                  <li>
                    <strong>PDF Report Generation:</strong> Compiling monthly financial summaries into
                    printable A4 PDF documents within your device's cache directory upon user request.
                  </li>
                  <li>
                    <strong>Cloud Backup &amp; Disaster Recovery:</strong> Packaging your records into an
                    encrypted GZIP archive to upload to or download from your personal Google Drive account
                    when you explicitly instruct the app to do so.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 5 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  5. Network Access &amp; External Services
                </h3>
                <p className="mb-4">
                  PocketLog connects to external network services only for the specific, user-beneficial
                  purposes outlined below:
                </p>

                <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-zinc-100">
                  5.1 Foreign Exchange (FX) Rate Retrieval
                </h4>
                <ul className="list-disc pl-6 space-y-1.5 mb-4">
                  <li>
                    <strong>What is sent:</strong> Anonymous HTTP <code>GET</code> requests specifying only the
                    public currency table date (requesting rates relative to USD).
                  </li>
                  <li>
                    <strong>What is NOT sent:</strong> PocketLog <strong>never</strong> transmits your account
                    balances, transaction history, location, IP identifiers, or personal data in FX rate
                    requests.
                  </li>
                  <li>
                    <strong>Provider / Endpoints:</strong> Public open-source CDNs: Primary{" "}
                    <code>https://cdn.jsdelivr.net</code>, Fallback{" "}
                    <code>https://latest.currency-api.pages.dev</code>.
                  </li>
                  <li>
                    <strong>User-Agent:</strong> Requests identify the client as{" "}
                    <code>PocketLog-Android</code>.
                  </li>
                  <li>
                    <strong>Offline Fallback:</strong> If no internet connection is available, PocketLog
                    continues functioning seamlessly using previously cached exchange rates or manual rates
                    entered by the user.
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-zinc-100">
                  5.2 Google Drive Cloud Backup &amp; Restore
                </h4>
                <ul className="list-disc pl-6 space-y-1.5 mb-4">
                  <li>
                    <strong>What is sent:</strong> A single GZIP-compressed, SHA-256 verified archive (
                    <code>pocketlog_backup.gz</code>) containing your local database entities and application
                    preferences.
                  </li>
                  <li>
                    <strong>Destination:</strong> The file is uploaded directly from your physical device to
                    the <strong>hidden Application Data folder (<code>appDataFolder</code>)</strong> of your
                    personal Google Drive account via the Google Drive API v3.
                  </li>
                  <li>
                    <strong>Access Restrictions:</strong> PocketLog requests only the restricted{" "}
                    <code>https://www.googleapis.com/auth/drive.appdata</code> OAuth scope. This scope grants
                    access <strong>only</strong> to files created by PocketLog within that private hidden
                    folder. PocketLog cannot see, read, modify, or delete any other files or folders in your
                    Google Drive.
                  </li>
                  <li>
                    <strong>Zero Developer Access:</strong> We (the developer) do not host a cloud database,
                    intermediary proxy, or relay server. We have <strong>no access</strong> to your Google
                    Drive account, credentials, or backup archives.
                  </li>
                  <li>
                    <strong>User Triggered:</strong> Cloud backups and restores are executed{" "}
                    <strong>only upon explicit user action</strong> (&quot;Back Up Now&quot; or &quot;Restore
                    Backup&quot;).
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-zinc-100">
                  5.3 Google Play In-App Updates &amp; Reviews
                </h4>
                <p>
                  PocketLog uses standard Google Play Core libraries (<code>play-app-update</code> and{" "}
                  <code>play-review</code>) to check whether a newer version of the Application is available
                  on Google Play and to allow qualified users to submit Google Play store ratings. These
                  interactions are mediated entirely by Google Play Services under Google's standard privacy
                  policies.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 6 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  6. Advertising, Analytics &amp; Tracking Disclosure
                </h3>
                <p className="mb-3">
                  PocketLog adheres to a strict zero-tracking, zero-surveillance policy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Zero Advertising SDKs:</strong> PocketLog contains <strong>no</strong> advertising
                    networks (such as Google AdMob, Unity Ads, or AppLovin). It does not display advertisements.
                  </li>
                  <li>
                    <strong>Zero Third-Party Analytics SDKs:</strong> PocketLog contains <strong>no</strong>{" "}
                    behavioral tracking or analytics SDKs (such as Firebase Analytics, Google Analytics,
                    Facebook Pixel, Mixpanel, or Adjust).
                  </li>
                  <li>
                    <strong>Zero Automated Crash Telemetry:</strong> PocketLog does not embed third-party crash
                    telemetry SDKs (such as Firebase Crashlytics or Sentry). App exceptions and diagnostic logs
                    remain strictly local to the Android device logcat.
                  </li>
                  <li>
                    <strong>Zero Data Monetization:</strong> We do not sell, rent, monetize, trade, or share
                    your financial records or personal information with data brokers, advertisers, or third
                    parties under any circumstances.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 7 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  7. Data Storage, Security &amp; Retention
                </h3>

                <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-zinc-100">
                  7.1 Local Storage Security
                </h4>
                <p className="mb-3">
                  PocketLog stores your database, cache, and preferences exclusively within Android's protected
                  internal app storage sandbox (
                  <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                    /data/data/com.tanvir.pocketlog/
                  </code>
                  ). Android's operating system sandboxing architecture prevents other applications installed
                  on your device from reading PocketLog's database files. We strongly advise users to maintain
                  device-level security (PIN, password, pattern, or biometrics) to protect physical access.
                </p>

                <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-zinc-100">
                  7.2 PDF Export Security
                </h4>
                <p className="mb-3">
                  Generated Monthly Report PDF files are stored temporarily in the application's internal
                  cache folder (<code>cacheDir/reports/</code>). When you tap &quot;Share&quot; or
                  &quot;Export&quot;, the file is provided to your chosen target application via Android's
                  secure <code>FileProvider</code> mechanism using a temporary, grant-restricted{" "}
                  <code>content://</code> URI with read-only permissions.
                </p>

                <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-zinc-100">
                  7.3 Data Retention &amp; User Deletion Rights
                </h4>
                <p className="mb-2">
                  Because PocketLog operates without a central developer backend, you maintain direct, total
                  control over your data retention and permanent deletion:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>In-App Deletion:</strong> You can edit or delete individual transactions, budgets,
                    accounts, and categories within the app at any time.
                  </li>
                  <li>
                    <strong>Device Data Clearing:</strong> Clearing application data in Android System Settings
                    (<code>Settings &gt; Apps &gt; PocketLog &gt; Storage &gt; Clear Data</code>) or
                    uninstalling the Application immediately and permanently deletes all local databases,
                    preferences, cached reports, and stored Google account profile tokens from your device.
                  </li>
                  <li>
                    <strong>Google Drive Backup Deletion:</strong> Because cloud backups are stored in your
                    personal Google account, deleting the local app does not automatically delete your Google
                    Drive backup. You can delete your backup file at any time by:
                    <ul className="list-[circle] pl-6 mt-1.5 space-y-1">
                      <li>
                        Navigating to{" "}
                        <a
                          href="https://drive.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                        >
                          Google Drive on the Web
                        </a>{" "}
                        on a computer or desktop browser.
                      </li>
                      <li>
                        Going to <strong>Settings (gear icon) &gt; Settings &gt; Manage Apps</strong>.
                      </li>
                      <li>
                        Locating <strong>PocketLog</strong>, clicking <strong>Options</strong>, and selecting{" "}
                        <strong>&quot;Delete hidden app data&quot;</strong>.
                      </li>
                    </ul>
                  </li>
                </ol>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 8: Permissions Table */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  8. Android Permissions Declared &amp; Justifications
                </h3>
                <div className="overflow-x-auto my-4 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead className="bg-gray-100/80 dark:bg-zinc-800/80 text-gray-900 dark:text-zinc-100 font-bold border-b border-gray-200 dark:border-zinc-700">
                      <tr>
                        <th className="p-3 sm:p-4">Permission</th>
                        <th className="p-3 sm:p-4">Android API</th>
                        <th className="p-3 sm:p-4">Technical Purpose &amp; Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold break-all">
                          android.permission.INTERNET
                        </td>
                        <td className="p-3 sm:p-4">All versions</td>
                        <td className="p-3 sm:p-4">
                          Required to fetch daily public FX exchange rates from public CDNs and upload/download
                          user-directed backups to Google Drive.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold break-all">
                          android.permission.ACCESS_NETWORK_STATE
                        </td>
                        <td className="p-3 sm:p-4">All versions</td>
                        <td className="p-3 sm:p-4">
                          Required to verify whether an active network connection exists before initiating FX
                          or Google Drive requests, preventing unnecessary battery/data drain.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold break-all">
                          android.permission.POST_NOTIFICATIONS
                        </td>
                        <td className="p-3 sm:p-4">API 33+ (Android 13+)</td>
                        <td className="p-3 sm:p-4">
                          Required to display daily logging reminders, monthly spending summaries, and budget
                          threshold alerts (80%, 100%).
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold break-all">
                          android.permission.RECEIVE_BOOT_COMPLETED
                        </td>
                        <td className="p-3 sm:p-4">All versions</td>
                        <td className="p-3 sm:p-4">
                          Required by <code>BootReceiver</code> to automatically re-register exact alarms for
                          scheduled daily reminders after the device reboots.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 9 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  9. Children's Privacy
                </h3>
                <p>
                  PocketLog is a general-audience personal finance tool and does not knowingly solicit or collect
                  personal information from children under the age of 13 (or under the age of 16 in certain
                  jurisdictions). Because the app does not collect personal data on developer servers, it
                  complies with children's privacy principles (including COPPA and GDPR-K). If a parent or
                  guardian becomes aware that their child has stored personal data in the app or backed it up
                  to Google Drive, they can clear the application data or delete the Google Drive backup as
                  described in Section 7.3.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 10 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  10. Changes to this Privacy Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our features,
                  technical implementations, or applicable regulatory requirements. Any updates will be
                  published with a revised &quot;Effective Date&quot; at the top of this document and updated in
                  the Google Play Store listing. You are advised to review this Privacy Policy periodically for
                  any changes:
                </p>
                <p className="mt-2">
                  <a
                    href="https://tanvirshaharia.vercel.app/pocketlog/privacy"
                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold break-all"
                  >
                    https://tanvirshaharia.vercel.app/pocketlog/privacy
                  </a>
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 11: Contact */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  11. Contact Information
                </h3>
                <p className="mb-3">
                  If you have any questions, concerns, or inquiries regarding this Privacy Policy or the data
                  practices of PocketLog, please contact:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Developer:</strong> Md. Tanvir Shaharia
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:tanvirking29@gmail.com"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                    >
                      tanvirking29@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Developer Website / Portfolio:</strong>{" "}
                    <a
                      href="https://tanvirshaharia.vercel.app"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                    >
                      https://tanvirshaharia.vercel.app
                    </a>
                  </li>
                  <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/tanvir-shaharia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                    >
                      https://github.com/tanvir-shaharia
                    </a>
                  </li>
                  <li>
                    <strong>Location / Jurisdiction:</strong> Dhaka, Bangladesh
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 12: Summary Table */}
              <section className="pb-10">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  12. Summary Table of Data Handling Practices
                </h3>
                <p className="mb-3 text-sm">
                  The following matrix details PocketLog's on-device data storage, network destinations, and
                  implementation verifications:
                </p>
                <div className="overflow-x-auto my-4 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead className="bg-gray-100/80 dark:bg-zinc-800/80 text-gray-900 dark:text-zinc-100 font-bold border-b border-gray-200 dark:border-zinc-700">
                      <tr>
                        <th className="p-3 sm:p-4">Data / Information</th>
                        <th className="p-3 sm:p-4">Purpose</th>
                        <th className="p-3 sm:p-4">Storage Location / Destination</th>
                        <th className="p-3 sm:p-4 text-center">Status</th>
                        <th className="p-3 sm:p-4">Implementation Verification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Expenses, Incomes, Transfers
                        </td>
                        <td className="p-3 sm:p-4">
                          Core personal financial logging and balance reconciliation
                        </td>
                        <td className="p-3 sm:p-4">
                          Local Room SQLite Database (<code>pocketlog_db</code>) on device
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-bold px-2 py-0.5 rounded text-[11px]">
                            Required
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          ExpenseDao.kt, IncomeDao.kt, TransferDao.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Financial Accounts &amp; Limits
                        </td>
                        <td className="p-3 sm:p-4">
                          Tracking account balances, types, and credit limits
                        </td>
                        <td className="p-3 sm:p-4">
                          Local Room SQLite Database (<code>pocketlog_db</code>) on device
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-bold px-2 py-0.5 rounded text-[11px]">
                            Required
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          AccountDao.kt, AccountEntity.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Monthly Budgets &amp; Alerts
                        </td>
                        <td className="p-3 sm:p-4">
                          Budgeting and spending limit notifications (80%, 100%)
                        </td>
                        <td className="p-3 sm:p-4">
                          Local Room SQLite Database (<code>pocketlog_db</code>) on device
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-bold px-2 py-0.5 rounded text-[11px]">
                            Optional
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          BudgetDao.kt, BudgetAlertEvaluator.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Preferences &amp; Settings
                        </td>
                        <td className="p-3 sm:p-4">
                          Language, theme, base currency, reminder schedule
                        </td>
                        <td className="p-3 sm:p-4">
                          Local <code>SharedPreferences</code> (<code>pocketlog_prefs</code>) on device
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-bold px-2 py-0.5 rounded text-[11px]">
                            Optional
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          AppPreferences.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Google Account Info (Name, Email, Photo)
                        </td>
                        <td className="p-3 sm:p-4">
                          Displaying connected account and backup ownership in settings
                        </td>
                        <td className="p-3 sm:p-4">
                          Local <code>SharedPreferences</code> on device; never sent to developer
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-bold px-2 py-0.5 rounded text-[11px]">
                            Optional
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          AppPreferences.kt, MainActivity.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Full Database Backup Archive
                        </td>
                        <td className="p-3 sm:p-4">
                          Cloud disaster recovery and data transfer across devices
                        </td>
                        <td className="p-3 sm:p-4">
                          User's private Google Drive <code>appDataFolder</code> (<code>pocketlog_backup.gz</code>)
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-bold px-2 py-0.5 rounded text-[11px]">
                            Optional
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          GoogleDriveDataSource.kt, LocalBackupSerializer.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          FX Rate HTTP GET Query
                        </td>
                        <td className="p-3 sm:p-4">
                          Retrieving public currency exchange rate tables for 14 currencies
                        </td>
                        <td className="p-3 sm:p-4">
                          Transmitted anonymously to jsDelivr / Cloudflare Pages CDNs
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-bold px-2 py-0.5 rounded text-[11px]">
                            Required
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          CurrencyApiRemoteDataSource.kt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Biometric Credentials (Fingerprint/PIN)
                        </td>
                        <td className="p-3 sm:p-4">
                          Unlocking app interface with 30s background grace period
                        </td>
                        <td className="p-3 sm:p-4">
                          Processed exclusively by Android OS Keyguard / TEE; never accessed by app
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-bold px-2 py-0.5 rounded text-[11px]">
                            Optional
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          BiometricAuthManager.kt, BiometricPrompt
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-gray-900 dark:text-zinc-100">
                          Generated Monthly Report PDF
                        </td>
                        <td className="p-3 sm:p-4">
                          User-directed export and sharing of monthly cash flow
                        </td>
                        <td className="p-3 sm:p-4">
                          Stored in app internal cache directory; shared via <code>FileProvider</code>
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-bold px-2 py-0.5 rounded text-[11px]">
                            Optional
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] text-gray-500 dark:text-zinc-400">
                          MonthlyReportPdfGenerator.kt, file_paths.xml
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

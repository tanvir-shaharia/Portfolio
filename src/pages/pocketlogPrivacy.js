import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Title from "../components/Section/title";

export default function PocketLogPrivacy() {
  return (
    <>
      <Helmet>
        <title>PocketLog Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for PocketLog, a personal expense and budget tracking Android application."
        />
      </Helmet>

      <PageLayout>
        <div className="flex items-center flex-wrap relative min-h-screen">
          <div className="containerCustom gap overflow-hidden max-w-4xl mx-auto px-4 sm:px-6">
            <Title title="PocketLog Privacy Policy" titleDes="Last Updated: August 18, 2026" />

            <div className="mt-8 space-y-8 text-gray-700 dark:text-zinc-300 font-nunito text-[15px] sm:text-base leading-relaxed">
              <p>
                Welcome to PocketLog. We respect your privacy and are committed to protecting the
                information you record in our application.
              </p>
              <p>
                This Privacy Policy explains how PocketLog handles your data. PocketLog is designed
                as a secure, local-first, offline-only application.
              </p>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  1. Introduction
                </h3>
                <p className="mb-3">
                  PocketLog is a personal expense and budget tracking application for Android.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    It operates <strong>entirely offline</strong>.
                  </li>
                  <li>The application does not require user registration, account creation, or login.</li>
                  <li>
                    The application does <strong>not</strong> connect to any external servers or
                    transmit any data over the internet.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  2. Information We Collect
                </h3>
                <p className="mb-4">
                  Because PocketLog runs entirely locally on your device, we (the developer) do not
                  collect, see, or store any of your data. However, the application processes and
                  stores the following information locally on your device to function:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <div>
                      <strong className="text-gray-900 dark:text-zinc-100">
                        Financial and Transactional Data
                      </strong>
                      :
                      <ul className="list-[circle] pl-6 mt-2 space-y-1.5">
                        <li>Expense amounts (stored in local Poisha/cents currency units).</li>
                        <li>Spending categories (e.g. food, transport, grocery, custom categories).</li>
                        <li>
                          Expense quantities, units, dates, times, and optional descriptive text
                          notes.
                        </li>
                        <li>Payment methods used (e.g. Cash, Card, Mobile Banking).</li>
                        <li>Monthly budget limits set by you.</li>
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
                          Last-used amounts and units for each category (saved locally to simplify
                          future entries).
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="mt-4">
                  We <strong>do not</strong> collect any Personal Identifiable Information (PII) such
                  as your name, email address, phone number, physical address, or device unique
                  identifiers.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  3. How Your Data Is Stored
                </h3>
                <p className="mb-3">
                  All data you input is stored in a private, local SQLite database managed via Android's
                  Room Persistence Library and in local SharedPreferences.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    All calculations, analytics, graphs, and summaries are computed locally on your
                    device.
                  </li>
                  <li>No data is transmitted to or stored on any external servers or cloud services.</li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  4. How We Use Information
                </h3>
                <p className="mb-3">
                  The information stored locally on your device is used solely to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Display your transactional history and daily, weekly, or monthly spending totals.</li>
                  <li>Present visual graphs, category breakdowns, and monthly budget utilization.</li>
                  <li>Show local notifications (such as daily expense reminders and budget warnings).</li>
                  <li>Generate monthly spending summaries and export them locally as PDF documents.</li>
                  <li>Auto-populate entry fields with your last-used settings to save you time.</li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  5. Data Sharing and Disclosure
                </h3>
                <p>
                  We do not share, sell, rent, trade, or disclose your data to any third parties.
                  Since your data is stored locally on your device and the app has no network access,
                  your data never leaves your device unless you choose to share it yourself.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  6. Third-Party Services
                </h3>
                <p className="mb-3">
                  PocketLog does <strong>not</strong> integrate with any third-party SDKs or cloud services.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>There are no advertising networks (like Google AdMob).</li>
                  <li>
                    There are no third-party analytics platforms (like Firebase Analytics or Google
                    Analytics).
                  </li>
                  <li>There are no automated crash reporting SDKs that transmit telemetry online.</li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  7. Notifications
                </h3>
                <p className="mb-3">
                  PocketLog uses Android’s local AlarmManager and WorkManager APIs to schedule and trigger
                  reminders (e.g., daily logging reminders and budget alerts).
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    These notifications are generated and displayed <strong>entirely locally</strong> on
                    your device.
                  </li>
                  <li>They do not rely on external push notification servers.</li>
                  <li>
                    This feature requires the Android <code>POST_NOTIFICATIONS</code> permission.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  8. Data Backup / Device Storage
                </h3>
                <p className="mb-3">
                  PocketLog supports the standard <strong>Android Auto Backup</strong> feature.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    If you have enabled automatic system backups on your Android device, the operating
                    system may upload a copy of PocketLog's local database and preferences to your
                    personal Google Drive cloud storage.
                  </li>
                  <li>
                    This backup is encrypted and managed entirely by Google and your Android system.
                  </li>
                  <li>We (the developer) have no access to this backup or your Google Drive storage.</li>
                  <li>You can manage or disable these backups in your Android system settings.</li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  9. Data Export and Sharing
                </h3>
                <p className="mb-3">
                  PocketLog allows you to generate Monthly Report summaries as PDF files.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    These reports are written to the application’s local cache directory on your device.
                  </li>
                  <li>
                    If you choose to export or share these reports, the application uses Android's
                    secure <code>FileProvider</code> system to send the file via a temporary{" "}
                    <code>content://</code> URI to other apps on your device (e.g., Email, messaging
                    apps, or cloud drives).
                  </li>
                  <li>
                    This sharing process is initiated entirely and manually by you. No background
                    transmission takes place.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  10. Data Security
                </h3>
                <p>
                  Your data is protected by Android’s sandbox security model, which isolates PocketLog's
                  database and storage from other applications on your device. However, please
                  remember that the security of your data ultimately depends on your physical device
                  security. We recommend securing your device with a PIN, pattern, password, or
                  biometric lock.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  11. Children's Privacy
                </h3>
                <p>
                  Our application does not request, collect, or transmit any personal information,
                  and it is suitable for users of all ages, including children.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  12. Your Choices and Data Deletion
                </h3>
                <p className="mb-3">
                  You have complete control over your data:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Manual Deletion</strong>: You can delete all your stored financial data,
                    budgets, and settings at any time by clearing the application's storage/cache in
                    your Android system settings:
                    <br />
                    <code className="inline-block mt-1 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono break-all">
                      Settings &gt; Apps &gt; PocketLog &gt; Storage &gt; Clear Data
                    </code>
                  </li>
                  <li>
                    <strong>Uninstall</strong>: Uninstalling PocketLog from your device will
                    permanently delete all locally stored databases, preferences, and cached PDF
                    files. Note that you may also need to delete any system backups stored in your
                    personal Google Drive.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  13. Changes to This Privacy Policy
                </h3>
                <p>
                  We may update our Privacy Policy from time to time. Since the app does not have
                  network access to notify you, any updates will be posted on the hosting website:
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
                  If you have any questions or feedback about this Privacy Policy or the app's privacy
                  practices, please contact us at:
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

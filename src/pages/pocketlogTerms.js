import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/pageLayout";
import Title from "../components/Section/title";

export default function PocketLogTerms() {
  return (
    <>
      <Helmet>
        <title>PocketLog Terms of Service | MD Tanvir Shaharia</title>
        <meta
          name="description"
          content="Terms of Service & Usage Protocol for PocketLog: Personal Finance, an offline-first personal financial management application developed by MD Tanvir Shaharia."
        />
        <link rel="canonical" href="https://tanvirshaharia.vercel.app/pocketlog/terms" />
      </Helmet>

      <PageLayout>
        <div className="flex items-center flex-wrap relative min-h-screen">
          <div className="containerCustom gap overflow-hidden max-w-4xl mx-auto px-4 sm:px-6">
            <Title
              title="PocketLog Terms of Service"
              titleDes="Effective Date: October 4, 2026 | Version: 2.0.0 (Release Candidate)"
            />

            <div className="mt-8 space-y-8 text-gray-700 dark:text-zinc-300 font-nunito text-[15px] sm:text-base leading-relaxed">
              {/* Navigation Pill Notice */}
              <div className="bg-brand-50/70 dark:bg-brand-950/30 border border-brand-200/60 dark:border-brand-900/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-gray-900 dark:text-zinc-100 block sm:inline">
                    Looking for Privacy Policy?
                  </span>{" "}
                  <span>Review how PocketLog protects your data with an offline-first architecture.</span>
                </div>
                <Link
                  to="/pocketlog/privacy"
                  className="inline-flex items-center gap-1.5 font-bold text-brand-600 dark:text-brand-400 hover:underline flex-shrink-0"
                >
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>View Privacy Policy &rarr;</span>
                </Link>
              </div>

              {/* Section 1 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  1. Agreement to Terms
                </h3>
                <p className="mb-3">
                  These Terms of Service (&quot;Terms&quot;, &quot;Usage Protocol&quot;, or
                  &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User&quot;,
                  &quot;you&quot;, or &quot;your&quot;) and <strong>Md. Tanvir Shaharia</strong> (&quot;Developer&quot;,
                  &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of the{" "}
                  <strong>PocketLog: Personal Finance</strong> mobile application for Android (&quot;PocketLog&quot; or
                  &quot;the Application&quot;, Package ID:{" "}
                  <code className="bg-gray-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded text-xs font-mono">
                    com.tanvir.pocketlog
                  </code>
                  ).
                </p>
                <p className="mb-3">
                  By downloading, installing, launching, or using PocketLog, you confirm that you have read,
                  understood, and agreed to be bound by these Terms. If you do not agree to all of these Terms, you
                  must not access or use the Application and must immediately uninstall it from your device.
                </p>
                <p>
                  These Terms should be read alongside our{" "}
                  <Link
                    to="/pocketlog/privacy"
                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 font-semibold underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 2 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  2. Description of the Service &amp; Non-Financial Institution Disclaimer
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  2.1 Informational &amp; Personal Tracking Utility Only
                </h4>
                <p className="mb-3">
                  PocketLog is a native, offline-first personal financial management tool designed to help individuals
                  record daily personal expenses, track incomes, manage account balances across multiple accounts,
                  monitor monthly budgets, and visualize personal financial trends.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2 text-red-600 dark:text-red-400">
                  2.2 Crucial Financial Disclaimer — No Banking or Financial Services
                </h4>
                <div className="bg-red-500/5 dark:bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl space-y-2 text-sm leading-relaxed mb-3">
                  <p className="font-extrabold uppercase text-red-700 dark:text-red-400 tracking-wide">
                    POCKETLOG IS NOT A BANK, CREDIT UNION, MONEY SERVICES BUSINESS, PAYMENT PROCESSOR, INVESTMENT
                    ADVISER, BROKER-DEALER, OR LENDING INSTITUTION.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 dark:text-zinc-300">
                    <li>
                      PocketLog does <strong>not</strong> hold real financial funds, accept customer deposits, execute
                      money transfers, initiate banking transactions, or connect to live open-banking payment rails.
                    </li>
                    <li>
                      Any transaction, transfer, or balance entered into PocketLog represents a manual informational
                      record created solely by you for personal bookkeeping. Recording a &quot;Transfer&quot; in PocketLog
                      does <strong>not</strong> move money between physical bank accounts in the real world.
                    </li>
                    <li>
                      Nothing contained in the Application constitutes financial, investment, legal, tax, or
                      accounting advice. You should consult a qualified financial professional regarding your
                      individual financial circumstances.
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 3 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  3. User Data, Responsibilities &amp; Accuracy
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  3.1 Accuracy of Records
                </h4>
                <p className="mb-3">
                  Because PocketLog operates without a backend database or live bank account sync, all calculations,
                  balances, budget thresholds, and cash flow reports depend entirely on the data you manually log or
                  import. You are solely responsible for ensuring the accuracy, completeness, and legality of all
                  entries, categories, and account configurations.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  3.2 Offline-First Storage &amp; Data Loss Disclaimer
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Your financial records are stored locally within your device's protected internal application sandbox.
                  </li>
                  <li>
                    <strong>The Developer does not maintain a copy of your records on external developer servers.</strong>
                  </li>
                  <li>
                    If you lose your device, damage physical hardware, clear application storage, or uninstall the
                    Application without an active backup, your records will be permanently unrecoverable.
                  </li>
                  <li>
                    <strong>
                      You are strongly encouraged to regularly use the optional Google Drive Backup feature or export
                      monthly PDF summaries to safeguard your financial records.
                    </strong>
                  </li>
                  <li>
                    To the maximum extent permitted by applicable law, the Developer shall not be liable for any loss
                    of data, corrupted backups, or inaccessible records.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 4 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  4. Foreign Exchange (FX) Rates &amp; Currency Calculations
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  4.1 &quot;As-Is&quot; Currency Conversion
                </h4>
                <p className="mb-3">
                  PocketLog supports 14 world currencies and utilizes daily public exchange rate snapshots fetched via
                  third-party content delivery networks (CDNs) or custom rates entered manually by you.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    Currency conversions and cross-currency reporting are provided for personal budgeting and estimated
                    tracking purposes only.
                  </li>
                  <li>
                    PocketLog does <strong>not</strong> guarantee real-time commercial forex accuracy, interbank
                    settlement rates, or coverage of commercial banking spreads, foreign transaction fees, or wire
                    commissions.
                  </li>
                  <li>
                    You must <strong>not</strong> rely on PocketLog's exchange rates for commercial currency trading,
                    investment arbitrage, tax filings, or official financial settlements.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 5 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  5. Optional Google Sign-In &amp; Google Drive Cloud Backup
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  5.1 Third-Party Cloud Service
                </h4>
                <p className="mb-3">
                  PocketLog offers an optional cloud backup and restore capability utilizing Google Sign-In and Google
                  Drive API v3.
                </p>
                <ul className="list-disc pl-6 space-y-1.5 mb-3">
                  <li>
                    By connecting your Google account, you authorize PocketLog to create, update, and retrieve a single
                    compressed archive (<code>pocketlog_backup.gz</code>) strictly within the hidden{" "}
                    <strong>Application Data folder (<code>appDataFolder</code>)</strong> of your personal Google Drive
                    account.
                  </li>
                  <li>
                    Your use of Google Drive is subject to the{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                    >
                      Google Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                    >
                      Google Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    PocketLog has zero access to any other files or folders in your Google Drive.
                  </li>
                  <li>
                    The Developer does not store, access, or manage your Google Drive credentials or backup files.
                  </li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  5.2 Backup Integrity
                </h4>
                <p>
                  PocketLog applies GZIP compression and SHA-256 cryptographic checksums to detect data corruption
                  during backup and restore. However, we cannot guarantee against data corruption caused by network
                  drops, interrupted file writes, Google Drive server outages, or unauthorized modifications to the
                  backup file outside the Application.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 6 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  6. Security, Biometric App Lock &amp; Device Credentials
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  6.1 Device-Level Security
                </h4>
                <p className="mb-3">
                  PocketLog offers a PIN and Biometric App Lock feature utilizing Android system{" "}
                  <code>BiometricPrompt</code> and <code>KeyguardManager</code> APIs.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    The biometric lock feature serves as an interface access barrier within the app. It relies
                    completely on your device's operating system security.
                  </li>
                  <li>
                    You are responsible for maintaining the physical security of your device, including maintaining a
                    strong device passcode, PIN, or biometric enrollment.
                  </li>
                  <li>
                    The Developer is not responsible for unauthorized access resulting from shared device passcodes,
                    compromised devices, or rooted/jailbroken operating systems.
                  </li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 7 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  7. Intellectual Property &amp; License
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  7.1 Ownership
                </h4>
                <p className="mb-3">
                  The Application—including all source code, software architecture, user interface designs, graphical
                  layouts, icons, typography, and documentation—is the intellectual property of{" "}
                  <strong>Md. Tanvir Shaharia</strong> and is protected by copyright, trademark, and other applicable
                  intellectual property laws.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  7.2 License Grant
                </h4>
                <p className="mb-3">
                  Subject to your compliance with these Terms, the Developer grants you a personal, revocable,
                  non-exclusive, non-transferable, non-sublicensable, limited license to download, install, and use
                  PocketLog on compatible Android devices under your personal control, solely for personal,
                  non-commercial purposes.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  7.3 Restrictions
                </h4>
                <p className="mb-2">You agree that you will not:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    Decompile, reverse engineer, disassemble, or attempt to derive the source code of the Application
                    (except to the extent permitted by applicable open-source licenses or law).
                  </li>
                  <li>Modify, adapt, translate, or create derivative works based upon the Application.</li>
                  <li>Rent, lease, lend, sell, sublicense, distribute, or commercially exploit the Application.</li>
                  <li>Use the Application for any unlawful, fraudulent, or prohibited purpose.</li>
                </ul>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 8 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  8. Disclaimer of Warranties
                </h3>
                <div className="bg-gray-100/70 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/80 rounded-xl p-4 text-xs sm:text-sm leading-relaxed space-y-2">
                  <p className="font-bold text-gray-900 dark:text-zinc-100 uppercase">
                    THE APPLICATION IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITH ALL
                    FAULTS AND WITHOUT WARRANTY OF ANY KIND.
                  </p>
                  <p className="text-gray-700 dark:text-zinc-300">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER EXPRESSLY DISCLAIMS ALL WARRANTIES
                    OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-zinc-300">
                    <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</li>
                    <li>
                      WARRANTIES THAT THE APPLICATION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, OPERATE
                      WITHOUT INTERRUPTION, BE SECURE, ERROR-FREE, OR COMPATIBLE WITH ALL HARDWARE AND SOFTWARE.
                    </li>
                    <li>
                      WARRANTIES REGARDING THE ACCURACY, RELIABILITY, TIMELINESS, OR COMPLETENESS OF ANY FINANCIAL
                      CALCULATIONS, BUDGET ALERTS, CURRENCY RATES, OR GENERATED PDF REPORTS.
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 9 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  9. Limitation of Liability
                </h3>
                <div className="bg-gray-100/70 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/80 rounded-xl p-4 text-xs sm:text-sm leading-relaxed space-y-2">
                  <p className="font-bold text-gray-900 dark:text-zinc-100 uppercase">
                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER (MD. TANVIR
                    SHAHARIA) BE LIABLE FOR ANY:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-zinc-300">
                    <li>INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES;</li>
                    <li>LOSS OF PROFITS, REVENUE, SAVINGS, BUSINESS OPPORTUNITIES, OR GOODWILL;</li>
                    <li>LOSS, CORRUPTION, OR INACCURACY OF FINANCIAL DATA, ACCOUNT BALANCES, OR BACKUP ARCHIVES;</li>
                    <li>
                      FINANCIAL LOSSES OR TAX PENALTIES ARISING OUT OF RELIANCE ON APPLICATION CALCULATIONS OR MISSED
                      BUDGET ALERTS;
                    </li>
                    <li>
                      UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA DUE TO DEVICE THEFT, MALWARE, OR THIRD-PARTY
                      CLOUD INTERRUPTIONS.
                    </li>
                  </ul>
                  <p className="text-gray-700 dark:text-zinc-300 pt-1">
                    THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY (WHETHER IN CONTRACT, TORT, NEGLIGENCE,
                    STRICT LIABILITY, OR OTHERWISE), EVEN IF THE DEVELOPER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES. IN NO EVENT SHALL THE DEVELOPER'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO
                    THE APPLICATION EXCEED THE AMOUNT PAID BY YOU (IF ANY) TO DOWNLOAD OR USE THE APPLICATION.
                  </p>
                </div>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 10 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  10. Termination &amp; Account Data Removal
                </h3>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  10.1 Termination by You
                </h4>
                <p className="mb-3">
                  You may terminate these Terms at any time by ceasing all use of the Application and uninstalling it
                  from all your devices.
                </p>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  10.2 Permanent Data Removal
                </h4>
                <p className="mb-2">To completely remove all data associated with PocketLog:</p>
                <ol className="list-decimal pl-6 space-y-1.5 mb-3">
                  <li>
                    Uninstall the app from your device (instantly deletes all local SQLite databases and
                    SharedPreferences).
                  </li>
                  <li>
                    If you used Google Drive backup, remove the hidden backup archive via{" "}
                    <a
                      href="https://drive.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold"
                    >
                      Google Drive Settings &gt; Manage Apps &gt; PocketLog &gt; Delete hidden app data
                    </a>
                    .
                  </li>
                </ol>

                <h4 className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-zinc-100">
                  10.3 Termination by the Developer
                </h4>
                <p>
                  The Developer reserves the right to modify, suspend, or discontinue the Application (or any feature
                  therein) at any time without prior notice or liability.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 11 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  11. Third-Party Links &amp; Services
                </h3>
                <p>
                  The Application contains links to third-party services and websites (such as GitHub, LinkedIn, Google
                  Play, and public exchange rate CDNs). These third-party services are governed by their own respective
                  terms and privacy policies. The Developer is not responsible for the content, security, availability,
                  or practices of any third-party websites or services.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 12 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  12. Changes to these Terms
                </h3>
                <p className="mb-2">
                  We reserve the right to amend, update, or replace these Terms at our sole discretion. Any changes will
                  be published online with an updated &quot;Effective Date&quot; at the top of this document at:
                </p>
                <p>
                  <a
                    href="https://tanvirshaharia.vercel.app/pocketlog/terms"
                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400 underline font-semibold break-all"
                  >
                    https://tanvirshaharia.vercel.app/pocketlog/terms
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
                  Your continued use of PocketLog following the posting of revised Terms confirms your acceptance of the
                  updated terms.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 13 */}
              <section>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  13. Governing Law &amp; Jurisdiction
                </h3>
                <p>
                  These Terms and any dispute arising out of or related to your use of PocketLog shall be governed by
                  and construed in accordance with the laws of Bangladesh, without giving effect to any principles of
                  conflicts of law.
                </p>
              </section>

              <hr className="border-gray-200/80 dark:border-zinc-800" />

              {/* Section 14: Contact */}
              <section className="pb-10">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-zinc-100">
                  14. Contact Information
                </h3>
                <p className="mb-3">
                  If you have questions, feedback, or concerns regarding these Terms of Service or the Usage Protocol,
                  please contact:
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
                    <strong>Portfolio Website:</strong>{" "}
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
                    <strong>Location:</strong> Dhaka, Bangladesh
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

# Terms of Service & Usage Protocol for PocketLog: Personal Finance

**Draft Version:** 2.0.0 (Release Candidate)  
**Effective Date:** [OWNER CONFIRMATION REQUIRED: Target Release Date, e.g., October 2026]  
**Developer:** Md. Tanvir Shaharia  
**Application Name:** PocketLog: Personal Finance  
**Package Identifier:** `com.tanvir.pocketlog`  
**Web Hosting Path:** `https://tanvirshaharia.vercel.app/pocketlog/terms`  
**Contact:** [OWNER CONFIRMATION REQUIRED: Official Support Email Address]  

---

## 1. Agreement to Terms

These Terms of Service ("Terms", "Usage Protocol", or "Agreement") constitute a legally binding agreement between you ("User", "you", or "your") and **Md. Tanvir Shaharia** ("Developer", "we", "us", or "our"), governing your access to and use of the **PocketLog: Personal Finance** mobile application for Android ("PocketLog" or "the Application").

By downloading, installing, launching, or using PocketLog, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree to all of these Terms, you must not access or use the Application and must immediately uninstall it from your device.

These Terms should be read alongside our [Privacy Policy](https://tanvirshaharia.vercel.app/pocketlog/privacy).

---

## 2. Description of the Service & Non-Financial Institution Disclaimer

### 2.1 Informational & Personal Tracking Utility Only
PocketLog is a native, offline-first personal financial management tool designed to help individuals record daily personal expenses, track incomes, manage account balances across multiple accounts, monitor monthly budgets, and visualize personal financial trends.

### 2.2 Crucial Financial Disclaimer — No Banking or Financial Services
**POCKETLOG IS NOT A BANK, CREDIT UNION, MONEY SERVICES BUSINESS, PAYMENT PROCESSOR, INVESTMENT ADVISER, BROKER-DEALER, OR LENDING INSTITUTION.**
- PocketLog does **not** hold real financial funds, accept customer deposits, execute money transfers, initiate banking transactions, or connect to live open-banking payment rails.
- Any transaction, transfer, or balance entered into PocketLog represents a manual informational record created solely by you for personal bookkeeping. Recording a "Transfer" in PocketLog does **not** move money between physical bank accounts in the real world.
- Nothing contained in the Application constitutes financial, investment, legal, tax, or accounting advice. You should consult a qualified financial professional regarding your individual financial circumstances.

---

## 3. User Data, Responsibilities & Accuracy

### 3.1 Accuracy of Records
Because PocketLog operates without a backend database or live bank account sync, all calculations, balances, budget thresholds, and cash flow reports depend entirely on the data you manually log or import. You are solely responsible for ensuring the accuracy, completeness, and legality of all entries, categories, and account configurations.

### 3.2 Offline-First Storage & Data Loss Disclaimer
- Your financial records are stored locally within your device's protected internal application sandbox.
- **The Developer does not maintain a copy of your records on external developer servers.**
- If you lose your device, damage physical hardware, clear application storage, or uninstall the Application without an active backup, your records will be permanently unrecoverable.
- **You are strongly encouraged to regularly use the optional Google Drive Backup feature or export monthly PDF summaries to safeguard your financial records.**
- To the maximum extent permitted by applicable law, the Developer shall not be liable for any loss of data, corrupted backups, or inaccessible records.

---

## 4. Foreign Exchange (FX) Rates & Currency Calculations

### 4.1 "As-Is" Currency Conversion
PocketLog supports 14 world currencies and utilizes daily public exchange rate snapshots fetched via third-party content delivery networks (CDNs) or custom rates entered manually by you.
- Currency conversions and cross-currency reporting are provided for personal budgeting and estimated tracking purposes only.
- PocketLog does **not** guarantee real-time commercial forex accuracy, interbank settlement rates, or coverage of commercial banking spreads, foreign transaction fees, or wire commissions.
- You must **not** rely on PocketLog's exchange rates for commercial currency trading, investment arbitrage, tax filings, or official financial settlements.

---

## 5. Optional Google Sign-In & Google Drive Cloud Backup

### 5.1 Third-Party Cloud Service
PocketLog offers an optional cloud backup and restore capability utilizing Google Sign-In and Google Drive API v3.
- By connecting your Google account, you authorize PocketLog to create, update, and retrieve a single compressed archive (`pocketlog_backup.gz`) strictly within the hidden **Application Data folder (`appDataFolder`)** of your personal Google Drive account.
- Your use of Google Drive is subject to the [Google Terms of Service](https://policies.google.com/terms) and [Google Privacy Policy](https://policies.google.com/privacy).
- PocketLog has no access to any other files or folders in your Google Drive.
- The Developer does not store, access, or manage your Google Drive credentials or backup files.

### 5.2 Backup Integrity
PocketLog applies GZIP compression and SHA-256 cryptographic checksums to detect data corruption during backup and restore. However, we cannot guarantee against data corruption caused by network drops, interrupted file writes, Google Drive server issues, or unauthorized modifications to the backup file outside the Application.

---

## 6. Security, Biometric App Lock & Device Credentials

### 6.1 Device-Level Security
PocketLog offers a PIN and Biometric App Lock feature utilizing Android system `BiometricPrompt` and `KeyguardManager` APIs.
- The biometric lock feature serves as an interface access barrier within the app. It relies completely on your device's operating system security.
- You are responsible for maintaining the physical security of your device, including maintaining a strong device passcode, PIN, or biometric enrollment.
- The Developer is not responsible for unauthorized access resulting from shared device passcodes, compromised devices, or rooted/jailbroken operating systems.

---

## 7. Intellectual Property & License

### 7.1 Ownership
The Application—including all source code, software architecture, user interface designs, graphical layouts, icons, typography, and documentation—is the intellectual property of **Md. Tanvir Shaharia** and is protected by copyright, trademark, and other applicable intellectual property laws.

### 7.2 License Grant
Subject to your compliance with these Terms, the Developer grants you a personal, revocable, non-exclusive, non-transferable, non-sublicensable, limited license to download, install, and use PocketLog on compatible Android devices under your personal control, solely for personal, non-commercial purposes.

### 7.3 Restrictions
You agree that you will not:
- Decompile, reverse engineer, disassemble, or attempt to derive the source code of the Application (except to the extent permitted by applicable open-source licenses or law).
- Modify, adapt, translate, or create derivative works based upon the Application.
- Rent, lease, lend, sell, sublicense, distribute, or commercially exploit the Application.
- Use the Application for any unlawful, fraudulent, or prohibited purpose.

---

## 8. Disclaimer of Warranties

**THE APPLICATION IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.**

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:
- IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
- WARRANTIES THAT THE APPLICATION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, OPERATE WITHOUT INTERRUPTION, BE SECURE, ERROR-FREE, OR COMPATIBLE WITH ALL HARDWARE AND SOFTWARE.
- WARRANTIES REGARDING THE ACCURACY, RELIABILITY, TIMELINESS, OR COMPLETENESS OF ANY FINANCIAL CALCULATIONS, BUDGET ALERTS, CURRENCY RATES, OR GENERATED PDF REPORTS.

---

## 9. Limitation of Liability

TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER (MD. TANVIR SHAHARIA) BE LIABLE FOR ANY:
- INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES;
- LOSS OF PROFITS, REVENUE, SAVINGS, BUSINESS OPPORTUNITIES, OR GOODWILL;
- LOSS, CORRUPTION, OR INACCURACY OF FINANCIAL DATA, ACCOUNT BALANCES, OR BACKUP ARCHIVES;
- FINANCIAL LOSSES OR TAX PENALTIES ARISING OUT OF RELIANCE ON APPLICATION CALCULATIONS OR MISSED BUDGET ALERTS;
- UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA DUE TO DEVICE THEFT, MALWARE, OR THIRD-PARTY CLOUD INTERRUPTIONS.

THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY (WHETHER IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), EVEN IF THE DEVELOPER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL THE DEVELOPER'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE APPLICATION EXCEED THE AMOUNT PAID BY YOU (IF ANY) TO DOWNLOAD OR USE THE APPLICATION.

---

## 10. Termination & Account Data Removal

### 10.1 Termination by You
You may terminate these Terms at any time by ceasing all use of the Application and uninstalling it from all your devices.

### 10.2 Permanent Data Removal
To completely remove all data associated with PocketLog:
1. Uninstall the app from your device (deletes all local SQLite databases and SharedPreferences).
2. If you used Google Drive backup, remove the hidden backup archive via [Google Drive Settings > Manage Apps > PocketLog > Delete hidden app data](https://drive.google.com).

### 10.3 Termination by the Developer
The Developer reserves the right to modify, suspend, or discontinue the Application (or any feature therein) at any time without prior notice or liability.

---

## 11. Third-Party Links & Services

The Application contains links to third-party services and websites (such as GitHub, LinkedIn, Google Play, and public exchange rate CDNs). These third-party services are governed by their own respective terms and privacy policies. The Developer is not responsible for the content, security, availability, or practices of any third-party websites or services.

---

## 12. Changes to these Terms

We reserve the right to amend, update, or replace these Terms at our sole discretion. Any changes will be published online with an updated "Effective Date" at the top of this document at:

**`https://tanvirshaharia.vercel.app/pocketlog/terms`**

Your continued use of PocketLog following the posting of revised Terms confirms your acceptance of the updated terms.

---

## 13. Governing Law & Jurisdiction

These Terms and any dispute arising out of or related to your use of PocketLog shall be governed by and construed in accordance with the laws of **[OWNER CONFIRMATION REQUIRED: Country/Jurisdiction, e.g., Bangladesh]**, without giving effect to any principles of conflicts of law.

---

## 14. Contact Information

If you have questions, feedback, or concerns regarding these Terms of Service or the Usage Protocol, please contact:

- **Developer:** Md. Tanvir Shaharia  
- **Email:** [OWNER CONFIRMATION REQUIRED: Official Support Email Address, e.g., tanvir.dev@... or support@...]  
- **Portfolio Website:** `https://tanvirshaharia.vercel.app`  
- **GitHub:** `https://github.com/tanvir-shaharia`  
- **Location:** [OWNER CONFIRMATION REQUIRED: City, Country, e.g., Dhaka, Bangladesh]  

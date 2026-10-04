# PocketLog: Personal Finance — Implemented Features Inventory

**Application:** PocketLog: Personal Finance  
**Tagline:** Track Better. Spend Smarter.  
**Developer:** Md. Tanvir Shaharia  
**Package:** `com.tanvir.pocketlog`  
**Target Release:** v2.0.0 (`versionCode 11`)  
**Auditor / Specialist:** Senior Android Engineer, QA Auditor & Documentation Specialist  
**Audit Date:** October 4, 2026  
**Document Status:** Complete & Verified Against Codebase  

---

## Executive Overview

This document presents a comprehensive, evidence-based inventory of all verified features in **PocketLog: Personal Finance** (v2.0.0, `versionCode 11`). Every feature listed has been verified directly against the active Kotlin source code, Jetpack Compose UI screens, Room entities, DAOs, repositories, use cases, automated unit tests, and Android Manifest declarations.

### Implementation Status Key:
- **Implemented:** Verified by source implementation and passing automated unit tests or reproducible code logic.
- **Partially Implemented:** Functional implementation present, but has an identified display/behavioral limitation.
- **Unverified:** Implemented in code, but requires physical hardware, live Google OAuth credentials, or third-party server interaction to verify in end-to-end runtime.
- **Planned:** Documented in roadmap/specifications but not yet present in the active codebase.

---

## 1. Core Financial Features

### 1.1 Expense Tracking & Management
- **Status:** **Implemented**
- **Description:** Users can record, edit, view, and delete daily expenses. Each expense record captures amount (stored in native minor units, e.g. Poisha/cents), category, linked payment account, date, time, optional text note, payment method, and optional quantity and unit for tracked items.
- **Evidence:**
  - UI Screen: [`ExpenseEntryScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/expense/ExpenseEntryScreen.kt), [`ExpenseEditScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/expense/ExpenseEditScreen.kt)
  - ViewModel & Use Cases: [`ExpenseViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/expense/ExpenseViewModel.kt), [`UpdateExpenseUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/UpdateExpenseUseCase.kt), [`ExpenseValidator.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/ExpenseValidator.kt)
  - Repository & Database: [`ExpenseRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/ExpenseRepositoryImpl.kt), [`ExpenseDao.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/dao/ExpenseDao.kt), [`ExpenseEntity.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/entity/ExpenseEntity.kt)
  - Automated Tests: `UpdateExpenseUseCaseTest.kt`, `ExpenseValidatorTest.kt`, `ExpenseViewModelTest.kt`
- **Limitations:**
  - Split expenses across multiple accounts or categories in a single transaction are not supported.
  - Recurring scheduled expenses are not automated (must be logged manually).

---

### 1.2 Income Tracking & Management
- **Status:** **Implemented**
- **Description:** Users can record, edit, view, and delete income entries. Incomes specify amount, income category (e.g. Salary, Business, Freelance, Investment, Gift, Other), receiving account, date, time, and optional descriptive note.
- **Evidence:**
  - UI Screen: [`IncomeEntryScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/income/IncomeEntryScreen.kt)
  - ViewModel & Use Cases: [`IncomeViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/income/IncomeViewModel.kt), [`UpdateIncomeUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/income/UpdateIncomeUseCase.kt)
  - Repository & Database: [`IncomeRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/IncomeRepositoryImpl.kt), [`IncomeDao.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/dao/IncomeDao.kt), [`IncomeEntity.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/entity/IncomeEntity.kt)
  - Automated Tests: `UpdateIncomeUseCaseTest.kt`
- **Limitations:**
  - No automated recurring salary/paycheck scheduler.

---

### 1.3 Multiple Accounts & Account Types
- **Status:** **Implemented**
- **Description:** Users can manage multiple financial accounts. Supported types include `CASH`, `BANK`, `MOBILE_WALLET`, `CREDIT_CARD`, `SAVINGS`, `INVESTMENT`, and `OTHER`. Each account tracks institution name, last digits of account number, currency code, initial balance, current reconciled balance, optional credit limit, custom icon, color theme, display order, total-exclusion flag, and active/archive status.
- **Evidence:**
  - UI Screen: [`AccountsScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/account/AccountsScreen.kt), [`AccountDetailsScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/account/AccountDetailsScreen.kt), [`AccountEditDialog.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/account/AccountEditDialog.kt)
  - Domain & Use Cases: [`Account.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/model/Account.kt), [`AccountType.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/model/AccountType.kt), [`AccountUseCases.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/account/AccountUseCases.kt)
  - Repository & Database: [`AccountRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/AccountRepositoryImpl.kt), [`AccountDao.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/dao/AccountDao.kt)
  - Automated Tests: `AccountDeletionSafetyTest.kt`, `ObserveTotalBalanceUseCaseTest.kt`, `AccountViewModelCurrencyLockTest.kt`
- **Limitations & Safety Guards:**
  - **Deletion Guard:** An account with existing transactions cannot be deleted (`AccountHasTransactionsException`). The user must archive it or delete its associated transactions first.
  - No direct open-banking or bank API syncing (balances are manually tracked/reconciled offline).

---

### 1.4 Account-to-Account Transfers & Transfer Fees
- **Status:** **Implemented**
- **Description:** Users can transfer funds between two active accounts. Transfers support an optional transfer fee debited from the source account in the source currency, with an optional fee category. Updates or deletions atomically restore both account balances.
- **Evidence:**
  - UI Dialog & ViewModel: [`TransferDialog.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/transfer/TransferDialog.kt), [`TransferViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/transfer/TransferViewModel.kt)
  - Use Cases: [`TransferUseCases.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/transfer/TransferUseCases.kt) (`PerformTransferUseCase`, `UpdateTransferUseCase`, `DeleteTransferUseCase`)
  - Repository & Database: [`TransferRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/TransferRepositoryImpl.kt), [`TransferDao.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/dao/TransferDao.kt), [`TransferEntity.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/entity/TransferEntity.kt)
  - Automated Tests: `PerformTransferUseCaseTest.kt`, `TransferViewModelTest.kt`, `ArchivedAccountTransferGuardTest.kt`
- **Limitations & Safety Guards:**
  - Transfers cannot be made to the same account (`SameAccountTransferException`).
  - Source account must have sufficient funds (`InsufficientFundsException`).
  - Transfers touching archived accounts are frozen and cannot be altered or deleted.

---

### 1.5 Cross-Currency Transfers & Exchange Rates
- **Status:** **Implemented**
- **Description:** When transferring between accounts denominated in different currencies, the user can review market-suggested exchange rates or enter a custom executed exchange rate/destination amount. The transfer stores `toAmountMinor`, `fxRate`, and `fxRateSource` (`USER` or `MARKET_SUGGESTED`).
- **Evidence:**
  - Domain Model & Math: [`TransferFx.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/fx/TransferFx.kt)
  - UI Implementation: [`TransferDialog.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/transfer/TransferDialog.kt)
  - Use Cases: [`CrossCurrencyTransferUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/transfer/CrossCurrencyTransferUseCase.kt)
  - Automated Tests: `CrossCurrencyTransferUseCaseTest.kt`, `TransferFxTest.kt`
- **Limitations:**
  - Transfers require both currencies to belong to PocketLog's supported list of 14 currencies.

---

### 1.6 Account Currency Conversion Flow
- **Status:** **Implemented**
- **Description:** Instead of dangerously mutating an account's currency in place (which corrupts historical records), PocketLog executes an audited conversion: it creates a new account in the target currency, transfers the reconciled balance via an agreed cross-currency transfer, and archives the previous account with its transaction history intact.
- **Evidence:**
  - Use Case: [`ConvertAccountCurrencyUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/account/ConvertAccountCurrencyUseCase.kt)
  - UI & ViewModel: [`ConvertAccountCurrencyDialog.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/account/ConvertAccountCurrencyDialog.kt), [`ConvertAccountCurrencyViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/account/ConvertAccountCurrencyViewModel.kt)
  - Repository: [`AccountConversionRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/AccountConversionRepositoryImpl.kt)
  - Automated Tests: `ConvertAccountCurrencyUseCaseTest.kt`, `ConvertAccountCurrencyViewModelTest.kt`
- **Limitations:**
  - Archived accounts cannot be converted.
  - Accounts with non-zero balances require a positive converted amount and rate source.

---

### 1.7 Multi-Currency Reporting & FX Exchange Rate Sync
- **Status:** **Implemented**
- **Description:**
  - Supports 14 major currencies: `USD`, `EUR`, `GBP`, `BDT`, `INR`, `CAD`, `AUD`, `JPY`, `AED`, `SAR`, `SGD`, `MYR`, `PKR`, `BRL`.
  - Base reporting currency can be customized in Settings.
  - Daily exchange rates fetched from community exchange-api (primary: jsDelivr CDN; fallback: Cloudflare Pages CDN) relative to USD.
  - Pure arithmetic via `BigDecimal` and `RoundingMode.HALF_EVEN`.
  - Missing FX rates are isolated in `ReportingTotal.unconverted` and never mixed into base totals.
- **Evidence:**
  - Domain: [`Money.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/model/Money.kt), [`AppCurrency.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/model/AppCurrency.kt), [`CurrencyConverter.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/fx/CurrencyConverter.kt), [`ReportingAggregator.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/fx/ReportingAggregator.kt)
  - Remote & Sync: [`CurrencyApiRemoteDataSource.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/remote/CurrencyApiRemoteDataSource.kt), [`FxSyncManager.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/sync/FxSyncManager.kt), [`FxRateDao.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/dao/FxRateDao.kt)
  - Automated Tests: `MoneyTest.kt`, `CurrencyConverterTest.kt`, `ReportingAggregatorTest.kt`, `CurrencyApiRemoteDataSourceTest.kt`, `FxSyncManagerTest.kt`
- **Limitations:**
  - Manual FX rate entry supports single currency-date overrides; bulk historical imports are not supported.

---

## 2. Budgets, Analytics & Reports

### 2.1 Budget Management & Progress Tracking
- **Status:** **Partially Implemented (Minor Display Limitation)**
- **Description:** Users can set overall monthly spending budgets and category-specific spending caps. The UI provides visual progress bars, remaining budget amounts, daily safe burn allowances, and status indicators (`ON_TRACK`, `NEAR_LIMIT`, `OVER_BUDGET`).
- **Evidence:**
  - UI Screen & ViewModel: [`BudgetScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/budget/BudgetScreen.kt), [`BudgetViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/budget/BudgetViewModel.kt)
  - Use Cases & Repository: [`SaveBudgetUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/SaveBudgetUseCase.kt), [`BudgetRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/BudgetRepositoryImpl.kt), [`BudgetDao.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/local/dao/BudgetDao.kt)
  - Automated Tests: `SaveBudgetUseCaseTest.kt`, `BudgetViewModelTest.kt`, `BudgetStatusTest.kt`
- **Limitations:**
  - **Display Bug (Audited as P2):** When a budget is denominated in a foreign currency (e.g. USD) and base currency is BDT, spending is converted to USD, but `BudgetUiState.currency` exposes the base currency symbol (৳), causing "$500" to display as "৳500".

---

### 2.2 Budget Alerts & Notifications
- **Status:** **Implemented**
- **Description:** Evaluates spending against monthly budget at 80% (Warning), 100% (Reached), and Exceeded. Alerts are triggered when logging an expense crosses a threshold. Safeguards ensure alerts do not fire redundantly.
- **Evidence:**
  - Notification Logic: [`BudgetAlertChecker.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/notification/BudgetAlertChecker.kt), [`BudgetAlertEvaluator.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/notification/BudgetAlertEvaluator.kt), [`PocketLogNotifier.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/notification/PocketLogNotifier.kt)
  - Automated Tests: `BudgetAlertEvaluatorTest.kt`, `BudgetAlertCheckerTest.kt`
- **Limitations:**
  - Requires Android `POST_NOTIFICATIONS` runtime permission on Android 13+ (API 33+).

---

### 2.3 Financial Dashboard & Unified Activity Feed
- **Status:** **Implemented**
- **Description:** Real-time home dashboard displaying Total Balance, today's spending, yesterday's comparison, weekly total, monthly total, monthly budget progress card, top expense category, and a Unified Activity Feed combining the latest 10 transactions across expenses, incomes, and transfers.
- **Evidence:**
  - UI Screen & ViewModel: [`DashboardScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/dashboard/DashboardScreen.kt), [`DashboardViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/dashboard/DashboardViewModel.kt)
  - Use Cases: [`ObserveUnifiedLedgerUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/ledger/ObserveUnifiedLedgerUseCase.kt), [`ObserveTotalBalanceUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/account/ObserveTotalBalanceUseCase.kt)
  - Automated Tests: `DashboardCalculationsTest.kt`, `ObserveUnifiedLedgerUseCaseTest.kt`, `DashboardUiContractTest.kt`
- **Limitations:**
  - Dashboard feed limits display to the 10 most recent transactions (full history accessible via History / Analytics tabs).

---

### 2.4 Cash Flow, Savings Rate & Analytics
- **Status:** **Implemented**
- **Description:** Aggregates Total Incomes, Total Expenses, and Transfer Fees over any selected date range. Computes Net Cash Flow and Savings Rate percentage. Internal transfer principals are excluded to prevent double-counting.
- **Evidence:**
  - Use Cases: [`GetCashFlowSummaryUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/cashflow/GetCashFlowSummaryUseCase.kt), [`GetGlobalAnalyticsUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/GetGlobalAnalyticsUseCase.kt), [`GetCategoryAnalyticsUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/GetCategoryAnalyticsUseCase.kt)
  - UI Screen: [`AnalyticsScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/analytics/AnalyticsScreen.kt)
  - Automated Tests: `GetCashFlowSummaryUseCaseTest.kt`, `AnalyticsViewModelTest.kt`, `ChartDataPreparationTest.kt`
- **Limitations:**
  - Savings rate returns `null` if total income is zero (cannot divide by zero).

---

### 2.5 PDF Monthly Report Export & Sharing
- **Status:** **Implemented**
- **Description:** Generates an A4-sized PDF report using Android's native `PdfDocument` engine. The document includes month header, cash flow summary, category breakdown, payment method breakdown, budget vs actual spending, and daily transaction tables. The file is saved in the internal cache directory (`cacheDir/reports/`) and shared via Android `FileProvider`.
- **Evidence:**
  - Generator: [`MonthlyReportPdfGenerator.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/report/MonthlyReportPdfGenerator.kt)
  - Provider Config: [`AndroidManifest.xml`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/AndroidManifest.xml#L64-L71), [`file_paths.xml`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/res/xml/file_paths.xml)
  - UI Screen: [`MonthlyReportScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/report/MonthlyReportScreen.kt)
- **Limitations:**
  - Exports monthly periods only; arbitrary custom date range PDF export is not supported.

---

## 3. Data Protection, Backup & Security

### 3.1 Google Drive Cloud Backup & Restore
- **Status:** **Implemented (Automated suite verified; Physical OAuth verification required)**
- **Description:** User-directed cloud backup and restore to the user's private Google Drive `appDataFolder` using Google Sign-In and Google Drive API v3. Backups are serialized to GZIP-compressed JSON with SHA-256 checksum validation. Provides an envelope preview (date, expense count, budget count) prior to full restoration. Restores execute inside an atomic database transaction.
- **Evidence:**
  - Remote Data Source: [`GoogleDriveDataSource.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/backup/GoogleDriveDataSource.kt)
  - Serialization: [`LocalBackupSerializer.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/backup/LocalBackupSerializer.kt), [`BackupDto.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/backup/model/BackupDto.kt)
  - Repository & ViewModel: [`BackupRepositoryImpl.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/data/repository/BackupRepositoryImpl.kt), [`BackupViewModel.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/settings/backup/BackupViewModel.kt)
  - Automated Tests: `LocalBackupSerializerTest.kt` (tests V1, V2, and V3 serialization, checksum tampering, and versioning), `BackupRestoreMappingTest.kt`, `BackupViewModelTest.kt`
- **Limitations & Requirements:**
  - Requires Google Play Services and user authentication.
  - Google Cloud Console OAuth consent screen must be in **Production** mode.
  - Backups are single-slot (each new backup overwrites the previous `pocketlog_backup.gz` file in Drive appData).

---

### 3.2 PIN & Biometric App Lock
- **Status:** **Implemented (Physical sensor verification required)**
- **Description:** Protects app access via Android `BiometricPrompt` (Fingerprint / Face Unlock). If biometrics are un-enrolled or unsupported, it falls back to device credential (PIN/pattern/password) via `KeyguardManager`. Includes a 30-second background grace period (`AUTO_LOCK_GRACE_PERIOD_MS = 30_000L`) and immediate lock upon cold restart.
- **Evidence:**
  - Host Activity: [`MainActivity.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/MainActivity.kt#L98-L235)
  - Security Helper: [`BiometricAuthManager.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/security/BiometricAuthManager.kt)
  - UI Lock Screen: [`BiometricLockScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/security/BiometricLockScreen.kt)
- **Limitations:**
  - If a device has no screen lock or PIN set up at the system level, the feature gracefully disables itself to prevent lockouts.

---

### 3.3 Daily Reminders & Boot Persistence
- **Status:** **Implemented**
- **Description:** Local notification reminder scheduled daily at user's preferred time (default 22:30). Scheduled via `AlarmManager.setExactAndAllowWhileIdle()`. Survives device restart via `BootReceiver` listening for `android.intent.action.BOOT_COMPLETED`.
- **Evidence:**
  - Scheduler & Receiver: [`AlarmScheduler.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/notification/AlarmScheduler.kt), [`DailyReminderReceiver.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/notification/DailyReminderReceiver.kt), [`BootReceiver.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/notification/BootReceiver.kt)
  - Notifier: [`PocketLogNotifier.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/notification/PocketLogNotifier.kt)
  - Automated Tests: `ShouldShowDailyReminderUseCaseTest.kt`
- **Limitations:**
  - Exact alarm triggers may vary by a few minutes depending on aggressive OEM battery optimization settings.

---

## 4. UI, Customization & Localization

### 4.1 English & Bangla Localization
- **Status:** **Implemented**
- **Description:** Complete dual-language support with dynamic in-app switching without restarting the app. Verified 1:1 key parity across all **614 string keys** in both resource files. Number formatting automatically localizes to Bangla numerals (০, ১, ২...).
- **Evidence:**
  - Resource XMLs: [`values/strings.xml`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/res/values/strings.xml), [`values-bn/strings.xml`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/res/values-bn/strings.xml)
  - Helper & Tests: [`MoneyFormatter.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/util/MoneyFormatter.kt), `MoneyFormatterTest.kt`
  - Build Config: `bundle.language.enableSplit = false` (packages both languages in base bundle).
- **Limitations:**
  - User-entered text notes and custom account names are preserved as typed and not machine-translated.

---

### 4.2 Light, Dark & System Theme
- **Status:** **Implemented**
- **Description:** Full Material 3 theming supporting Light, Dark, and System Default options. Uses custom tailored dark slate and neutral color palettes with elevated surfaces and glassmorphic dialogs.
- **Evidence:**
  - Theme Engine: [`Theme.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/theme/Theme.kt), [`Color.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/theme/Color.kt), [`DesignTokens.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/theme/DesignTokens.kt)
  - Preferences: [`AppPreferences.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/theme/AppPreferences.kt)
  - Automated Tests: `AppThemeTest.kt`, `AppPreferencesThemeTest.kt`
- **Limitations:** None identified.

---

### 4.3 Hide Balances Feature
- **Status:** **Implemented**
- **Description:** Eye icon toggle on the Dashboard masks account and total balances with asterisks (`***`). Preference is stored in SharedPreferences and preserved across app sessions.
- **Evidence:**
  - Implementation: [`DashboardScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/dashboard/DashboardScreen.kt), [`DashboardViewModel.kt`](file:///c:/Users/tanvir/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/dashboard/DashboardViewModel.kt)
  - Tests: `DashboardHideBalancesStartupTest.kt`, `AppPreferencesHideBalancesTest.kt`
- **Limitations:** None identified.

---

### 4.4 Quick Entry Templates
- **Status:** **Implemented**
- **Description:** Remembers the last-used amount and measurement unit per expense category in SharedPreferences to auto-fill subsequent entries, accelerating repetitive daily logging.
- **Evidence:**
  - Implementation: [`AppPreferences.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/theme/AppPreferences.kt#L305-L323), [`ExpenseEntryScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/expense/ExpenseEntryScreen.kt)
  - Backup Support: Category templates are exported and restored during Google Drive backup.
- **Limitations:** Remembers only the single most recent entry per category.

---

### 4.5 Developer Connect & Social Links
- **Status:** **Implemented**
- **Description:** Settings screen includes a developer section linking to Md. Tanvir Shaharia's professional portfolio, GitHub, LinkedIn, and Google Play developer profile.
- **Evidence:**
  - Implementation: [`SettingsScreen.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/settings/SettingsScreen.kt#L800-L860)
- **Limitations:** Requires an active browser or appropriate installed apps to handle standard web intents.

---

### 4.6 In-App Play Store Review Flow
- **Status:** **Implemented (With Policy Risk / Review Gating Concern)**
- **Description:** Prompts qualified users (minimum 5 expenses, 7 days since first launch, 30-day cooldown) to submit feedback or rate the app.
- **Evidence:**
  - Implementation: [`InAppReviewHelper.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/review/InAppReviewHelper.kt), [`ShouldShowFeedbackReviewUseCase.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/domain/usecase/review/ShouldShowFeedbackReviewUseCase.kt), [`FeedbackReviewDialog.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/components/FeedbackReviewDialog.kt)
  - Automated Tests: `ShouldShowFeedbackReviewUseCaseTest.kt`
- **Policy Limitation / Action Required:** In [`FeedbackReviewDialog.kt`](file:///c:/Users/tanvi/AndroidStudioProjects/PocketLog/app/src/main/java/com/tanvir/pocketlog/ui/components/FeedbackReviewDialog.kt#L75), users selecting 4–5 stars are routed to the Google Play review launcher, whereas users selecting 1–3 stars are redirected to private feedback. This constitutes **Review Gating** under Google Play policies and must be modified prior to production submission.

---

## 5. Summary Limitations & Caveats

1. **No Direct Bank Synchronization:** PocketLog is strictly offline-first. It does not integrate with Plaid, Salt Edge, or open-banking APIs; all account transactions are entered or imported manually.
2. **Single-Slot Google Drive Backup:** Cloud backup overwrites the single backup archive (`pocketlog_backup.gz`) in the user's hidden Google Drive `appDataFolder`. Version history is governed by Google Drive file revisions.
3. **No Web App or Desktop Companion:** The database resides locally on the Android device; there is no web portal or multi-device real-time sync. Multi-device data movement is achieved via manual Backup & Restore.
4. **Budget Currency Symbol Formatting Bug:** Foreign currency budgets format with the user's base reporting currency symbol on the Budget overview screen.

---

## 6. Items Requiring Owner Confirmation

1. **Review Gating Policy Decision:** Confirm remediation approach for `FeedbackReviewDialog` (either launch Google Play In-App Review directly without sentiment pre-screening, or present neutral equal buttons for "Rate on Play Store" and "Send Feedback").
2. **Google Cloud OAuth Production Publishing:** Confirm that the OAuth 2.0 consent screen for `https://www.googleapis.com/auth/drive.appdata` is published to **Production** in the Google Cloud Console for project `com.tanvir.pocketlog`.
3. **Budget Display Currency Fix:** Confirm whether budgets should display their native currency symbol or be converted to the base reporting currency on the Budget screen.

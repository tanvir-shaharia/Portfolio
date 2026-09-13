# TradeMemo — Product Concept & Strategy-Validated PRD (v5.0)

**Project:** TradeMemo  
**Target Platforms:** Android-First (Native Kotlin Multiplatform + Compose Multiplatform), Future iOS  
**Document Version:** 5.0 (Strategy & Market-Validated)  
**Status:** Approved Product Baseline  
**Supersedes:** `TradeMemo_Product_Concept_KMP_v4_RD_Brief(1).docx`  

---

## 1. Product Vision & Positioning

### 1.1 Executive Vision
TradeMemo is an Android-first, local-first trading companion designed to eliminate the single biggest cause of retail trading failure: **emotional undiscipline and execution drift**.

Rather than competing as another complex desktop accounting ledger or charting simulator, TradeMemo functions as the trader's **"Anti-Tilt Pocket Coach."** It enables discretionary crypto and futures traders to record their trade in under 30 seconds, compares actual execution against their trading rules, and quantifies the exact financial cost of emotional errors (**Avoidable Loss**).

### 1.2 Core Positioning
* **Primary Message:** *"Log the process. Measure the discipline. Eliminate the avoidable losses that blow your account."*
* **Tagline:** *"The Anti-Tilt Journal in Your Pocket."*
* **Market Identity:** TradeMemo is a **behavioral execution journal**, not a broker, exchange, signal service, or financial advisory product.

---

## 2. The Core Problem & The Market Gap

### 2.1 The Problem for Retail Traders
1. **The 90% Failure Rate:** Retail traders rarely fail because they lack indicators or chart patterns; they fail because of behavioral breakdowns (revenge trading, FOMO, moving stop-losses, and oversized positions).
2. **The "Coroner" Journal Syndrome:** Existing tools (TradeZella, TraderSync) act like coroners — performing autopsies on blown accounts by showing retrospective P&L curves, but doing nothing in the moment to cultivate discipline.
3. **The 14-Day Journaling Abandonment Cliff:** Logging a trade on existing platforms takes 1–3 minutes and requires 15–25 form fields. If journaling feels like homework, traders stop doing it after their first drawdown.
4. **The Import Maintenance Nightmare:** 80%+ of competitor 1-star reviews are caused by broken broker API syncs, currency mismatches, and execution errors.
5. **Mobile Neglect:** Dominant journals are desktop web applications. Their mobile apps are either non-existent (TradeZella, Edgewonk, Tradervue) or laggy web wrappers rated 2.9★–3.0★ (TradesViz, TraderSync).

### 2.2 The TradeMemo Solution
* **⚡ 25-Second Rapid Logging:** Single-screen, one-handed ergonomic entry designed for Android.
* **🎯 Process Score (0–100%):** Evaluates trades based on execution discipline rather than raw P&L luck.
* **🛑 Avoidable Loss Quantification:** Clearly separates healthy system losses from self-inflicted emotional losses.
* **📋 Planned vs. Actual Execution:** Binary 3-point checkpoint (Entry discipline, Stop-Loss adherence, Exit target).
* **📱 100% Native Mobile Performance:** Fluid 120Hz Compose Multiplatform UI with dark AMOLED aesthetics.
* **🔒 Local-First & Zero-Cloud Privacy:** Complete offline functionality, zero registration wall, and encrypted local storage.

---

## 3. Target Users

1. **Active Discretionary Crypto & Futures Traders:** Trading BTC, ETH, SOL, or index futures using price action, Smart Money Concepts (SMC), fair value gaps (FVG), liquidity sweeps, and breakout setups.
2. **Prop Firm Challenge Traders:** Traders navigating strict daily drawdown and risk rules (e.g., Apex, Topstep, FTMO) who need absolute adherence to risk limits.
3. **Discipline-Seeking Intermediate Traders:** Traders who have a working strategy on TradingView but struggle with psychology, overtrading, and tilt.

---

## 4. Competitive Landscape Summary

| Competitor | Core Strength | Fatal Weakness | TradeMemo Strategic Advantage |
|------------|---------------|----------------|-------------------------------|
| **TradeZella** | Clean web UI, Replay, Playbooks | No native mobile app, $29–$49/mo, broken API syncs | Fast native Android app, <30s flow, zero cloud lock-in |
| **TraderSync** | Broad broker support, AI marketing | 3.0★ mobile app, expensive ($30–$80/mo), buggy UI | 120Hz native Compose UI, Avoidable Loss calculation |
| **Edgewonk** | Deep psychology, mathematical edge | Web-only, $169–$197 upfront annual lock, no mobile | Mobile-first pocket convenience, friction-free entry |
| **TradesViz** | 600+ metrics, generous free tier | 2.9★ app, extreme clutter and analysis paralysis | Radical simplicity: 3 key metrics that actually change behavior |
| **Tradervue** | Traditional CSV reporting | Archaic 2012-era interface, no mobile app | Modern AMOLED design, behavioral focus |

---

## 5. Core Product Principles

1. **Android-First & Ergonomically Native:** Built from the ground up for thumb-zone operation on Android.
2. **Speed Over Granularity:** A trade log must be completed in under 30 seconds, or it will be abandoned.
3. **Process Over Outcome:** Good trades can lose money (system loss); bad trades can make money (gambling win). TradeMemo rewards rule compliance.
4. **Local-First & Private:** Sensitive financial logs remain on the user's device in an encrypted Room SQLite database.
5. **No Signal Dependency:** Zero buy/sell recommendations; TradeMemo is an objective mirror of user execution.

---

## 6. MVP Feature Specification (Strict MoSCoW)

### 6.1 MUST HAVE (The MVP Core)

#### F1: Rapid Trade Entry (<30s)
* **Inputs:** Symbol (quick chips for BTC, ETH, SOL + text field), Direction (Long/Short toggle), Entry Price, Exit Price, Position Size (Quantity or Dollar Risk).
* **Smart Auto-Calculations:** Net P&L ($ and %), Return in R-Multiples (auto-calculated from initial stop loss distance).
* **Setup Selector:** One-tap chips (e.g., Breakout, Liquidity Sweep, FVG, Order Block, Range, + Add Custom).
* **Emotion Selector:** One-tap chips for state at entry (Calm, FOMO, Anxious, Impulsive, Revenge).
* **Screenshot Attachments:** Before-entry chart image and after-exit chart image (stored locally in sandboxed storage).

#### F2: Planned vs. Actual Execution Checkpoint
* 3 binary check-chips on trade review:
  1. *Entered at Planned Price?* (Yes/No)
  2. *Respected Stop Loss without Moving it?* (Yes/No)
  3. *Exited according to Strategy?* (Yes/No)

#### F3: The Avoidable Loss & Process Engine
* **Classification of Losses:**
  * **System Loss:** Trade hit stop-loss, but all rules were followed (Process Score = 100%).
  * **Avoidable Loss:** Trade lost money due to rule violation (moved SL, oversized, revenge entry, FOMO).
* **Process Score:** Cumulative percentage of rules followed across all logged trades.

#### F4: Personal Trading Rules & Compliance
* Users define 3 to 5 golden rules during onboarding (e.g., "Max 2 trades/day", "Always use stop loss", "No trading during high-impact news").
* Per-trade checklist tracks compliance.

#### F5: Dashboard & Visual Calendar
* **Top Metric Bar:** Net P&L, Win Rate, Total Trades, Average R-Multiple, Process Score (%), Total Avoidable Loss ($).
* **Monthly Calendar:** High-contrast green/red days with net P&L and trade count pill indicators.
* **Primary Action:** Floating Action Button (FAB) `+ Log Trade`.

#### F6: Automated Weekly Behavioral Debrief
* Generates every Sunday evening:
  * Total P&L vs. Avoidable Loss avoided/incurred.
  * Your #1 Costliest Mistake of the week.
  * Your Highest Win-Rate Setup.
  * One single rule focus for next week.

#### F7: Local-First Data Engine & CSV Export
* Room KMP local database.
* Full CSV export functionality for user ownership.

---

### 6.2 SHOULD HAVE (V1.1 Scope)
* **Decoupled Pre-Trade Planning Card:** Optional 15-second pre-market checklist.
* **Advanced Multi-Dimension Filters:** Filter trade history by Setup, Broken Rule, Emotion, and Date Range.
* **Multi-Account Tagging:** Separate logs for Personal Account vs. Prop Firm Challenge.

---

### 6.3 COULD HAVE (V1.2 Scope)
* **Standard CSV Importer:** Parse Binance and Bybit trade history CSVs locally.
* **Screenshot OCR Auto-Fill:** Auto-detect symbol, entry, exit, and P&L from exchange order screenshots.
* **Deterministic AI Anomaly Detection:** Local heuristic pattern alerts (e.g., "Revenge trading loop detected").
* **Social Share Cards:** Generate branded execution cards for social sharing.

---

### 6.4 STRICTLY DO NOT BUILD (Out of Scope)
* ❌ Direct Broker/Exchange API auto-sync (High failure rate, security risk, support sink).
* ❌ In-app Backtesting / Tick Replay engines (Duplicative with TradingView).
* ❌ Automated Buy/Sell signals or algorithmic predictors.
* ❌ Social networks, copy-trading, and community chat rooms.
* ❌ Multi-leg options Greeks / delta hedging calculators.

---

## 7. Main Screen Architecture (Android Compose)

```
[ Navigation Bar ]
├── 1. Dashboard (KPI Cards, Avoidable Loss Meter, Process Score, Recent Trades)
├── 2. Calendar (Monthly Green/Red Grid, Day Detail Sheet)
├── 3. Add Trade (Ergonomic Modal Bottom Sheet, Custom Financial Numpad)
├── 4. Analytics (Setup Breakdown, Emotion vs P&L, Mistake Cost Table)
└── 5. Review & Rules (Golden Rules Management, Weekly Debrief History, Settings/Export)
```

---

## 8. Technology Stack — Validated for MVP

* **Language:** Kotlin 2.x
* **UI Framework:** Compose Multiplatform (Material 3)
* **Architecture:** Clean Architecture + MVVM / MVI (Kotlin Coroutines + StateFlow)
* **Dependency Injection:** Koin (Multiplatform native) or platform-level factories
* **Database:** Room KMP (`androidx.room`) with SQLite / SQLCipher encryption support
* **Preferences:** Multiplatform DataStore
* **Navigation:** Navigation Compose Multiplatform
* **Image Handling:** Coil 3 (Multiplatform)
* **Charts:** Custom Canvas Compose lightweight charting layer (eliminates bulky third-party dependencies)

---

## 9. Research Findings & Strategic Decisions

### 9.1 Research Finding: The Desktop Ingestion Fallacy
Competitors have focused on automated broker synchronization via Plaid, SnapTrade, or direct broker APIs. However, market evidence shows that broker API changes, split calculations, options exercise handling, and crypto exchange rate conversions cause frequent data corruption. This creates immense user frustration (80% of negative reviews) and requires costly ongoing engineering maintenance.

**TradeMemo Decision:** TradeMemo intentionally rejects live broker API auto-sync for MVP. Instead, it perfects an ultra-fast, 25-second mobile manual logging flow that requires zero API maintenance and never breaks.

### 9.2 Research Finding: The Vanity Metric Trap
Traditional journals display 50+ quantitative charts (MAE, MFE, cumulative volume, Sharpe ratio) that overwhelm retail traders without addressing the root cause of account blowouts. Traders crave clarity on what to stop doing.

**TradeMemo Decision:** TradeMemo elevates **Avoidable Loss** and **Process Score** to primary anchor metrics on the home dashboard, giving traders immediate, actionable insight into their discipline.

---

## 10. Formal Decision Log

| ID | DECISION | REASON | EVIDENCE | STRATEGIC IMPACT |
|---|---|---|---|---|
| **DEC-01** | **Exclude Live Broker API Sync from MVP** | High failure rate, ongoing maintenance burden, security liabilities, and credential friction. | 80%+ of 1-star reviews for TradeZella and TraderSync cite broken broker syncs. | Frees engineering capacity to focus on UX speed and behavioral mechanics; eliminates cloud server dependency. |
| **DEC-02** | **Anchor on Avoidable Loss & Process Score** | P&L alone does not prevent emotional trading. Traders need an objective financial metric that measures the cost of their mistakes. | Empirical user feedback on Reddit (r/Daytrading) regarding tilt and revenge trading. | Establishes a defensible, proprietary product wedge that competitors cannot easily duplicate. |
| **DEC-03** | **Decouple Pre-Trade Planning from Trade Logging** | Forcing traders to plan before every trade creates fatal friction during fast-moving markets, leading to app abandonment. | User complaints of form fatigue and 14-day journaling drop-off. | Guarantees logging speed remains strictly under 30 seconds while preserving planning as an optional value-add. |
| **DEC-04** | **Commit to Native Android UX via Compose Multiplatform** | Major incumbents have no native Android app or maintain poorly rated (2.9★–3.0★) web wrappers. | Google Play Store competitive audit. | Positions TradeMemo as the premier native mobile trading companion with smooth 120Hz performance. |
| **DEC-05** | **Replace Conversational AI with Deterministic Heuristics in MVP** | Generic LLM chatbots are slow, expensive, and return generic platitudes. Deterministic heuristics are instantaneous and work 100% offline. | Competitor AI audit (Cypher, Zella AI); user dissatisfaction with generic advice. | Zero cloud API costs; instant offline execution; highly accurate, data-grounded insights. |
| **DEC-06** | **Enforce Local-First Room KMP Storage** | Financial data is intensely private. Local storage eliminates cloud attack vectors and server hosting costs. | High trader sensitivity to financial data privacy and broker credential security. | Instantaneous read/write speeds; 100% offline reliability; total user trust. |

---

*This document serves as the validated, immutable product foundation for TradeMemo MVP implementation.*

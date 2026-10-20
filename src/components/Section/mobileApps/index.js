import React, { useState } from "react";
import mobileAppsList from "../../../utils/mobileAppsList.json";
import AppModal from "./appModal";
import EnterpriseGrid from "./EnterpriseGrid";
import ScrollReveal from "../../ScrollReveal";
import { GooglePlayIcon } from "../../SocialBrandIcon";
import {
  handleCardHoverMove,
  handleCardHoverLeave,
  handleMagneticMove,
  handleMagneticLeave,
} from "../../../utils/motion";

export default function MobileApps() {
  const [open, setOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleOpen = (app) => {
    setSelectedApp(app);
    setOpen(true);
  };

  // Find PocketLog and Trade Memo from verified list
  const pocketLogApp =
    mobileAppsList.find((app) => app.id === "pocketlog") || mobileAppsList[0];
  const tradeMemoApp =
    mobileAppsList.find((app) => app.id === "trade-memo") || mobileAppsList[1];

  return (
    <section
      id="products"
      className="mt-12 sm:mt-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      aria-label="Flagship Mobile Productions & Enterprise Showcase"
    >
      {/* 4.1 Section Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
              FLAGSHIP PRODUCTIONS
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
              Engineered for Scale &amp; Zero Latency
            </h2>
          </div>
          <p className="font-body-md text-sm sm:text-base text-gray-600 dark:text-text-muted max-w-md leading-relaxed">
            Independent architectures shipped to global app stores, highlighting privacy-preserving
            offline storage and reactive state machines.
          </p>
        </div>
      </ScrollReveal>

      {/* Flagship Cards 2-Col Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* CARD 1: PocketLog: Personal Finance */}
        <ScrollReveal delay={60} className="h-full">
          <div
            className="border-beam-card tilt-card card-spotlight shadow-xl dark:shadow-2xl transition-all duration-300 group h-full"
            onMouseMove={handleCardHoverMove}
            onMouseLeave={handleCardHoverLeave}
          >
          <div className="border-beam-inner bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-2xl h-full">
            <div className="flex flex-col gap-5">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono-tag text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available on Google Play</span>
                </span>
                <span className="font-mono-tag text-xs text-gray-600 dark:text-text-muted font-medium">
                  V2.0.0 • PRODUCTION
                </span>
              </div>

              {/* Feature Graphic Media Banner */}
              <div
                className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-gray-950/5 dark:bg-black/60 border border-gray-200/60 dark:border-white/10 cursor-pointer group/banner"
                onClick={() => handleOpen(pocketLogApp)}
                title="Click to view details & screenshots"
              >
                <img
                  src={pocketLogApp.featureGraphic || "/play_store/feature_graphic_refined.png"}
                  alt={`${pocketLogApp.name} feature graphic`}
                  className="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Quick Preview Badge Overlay */}
                <div className="absolute bottom-2.5 right-2.5 z-10 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono-tag px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                  <span className="material-symbols-outlined text-sm text-sky-400">visibility</span>
                  <span>Click to Expand Screenshots</span>
                </div>
              </div>

              {/* Product Title & Tagline */}
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-headline-md text-xl sm:text-2xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight">
                    PocketLog: Personal Finance
                  </h3>
                  <span className="material-symbols-outlined text-sky-600 dark:text-sky-400 text-2xl flex-shrink-0">
                    account_balance_wallet
                  </span>
                </div>
                <p className="font-mono-tag text-xs sm:text-sm text-sky-700 dark:text-sky-400 mt-1 font-semibold tracking-wide">
                  Track Better. Spend Smarter. 100% Offline.
                </p>
              </div>

              {/* Description */}
              <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted leading-relaxed">
                Engineered with Android Native, Jetpack Compose Material 3 UI, and offline-first Room
                SQLite persistence. Eliminates external telemetry trackers for complete financial
                privacy.
              </p>

              {/* Feature Matrix Chips (2x2) */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-sky-600 dark:text-sky-400">database</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    100% Offline Room DB
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-indigo-600 dark:text-indigo-400">picture_as_pdf</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    Instant Canvas A4 PDF
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-emerald-600 dark:text-emerald-400">fingerprint</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    Biometric KeyStore
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-sky-600 dark:text-sky-400">currency_exchange</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    14 Global Currencies
                  </span>
                </div>
              </div>

              {/* Tech Stack Footer Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {["Kotlin", "Jetpack Compose", "Hilt", "Room SQLite", "Coroutines & Flow"].map(
                  (tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-surface-container-highest font-mono-tag text-[11px] text-gray-700 dark:text-on-surface-variant font-medium border border-gray-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Card CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100 dark:border-white/10 mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.tanvir.pocketlog"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onBlur={handleMagneticLeave}
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-label-ui text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex-1 sm:flex-initial"
              >
                <GooglePlayIcon className="w-4 h-4" />
                <span>View on Google Play</span>
              </a>

              <button
                onClick={() => handleOpen(pocketLogApp)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-surface-container border border-gray-200 dark:border-white/10 text-gray-800 dark:text-on-surface font-label-ui text-xs sm:text-sm font-semibold hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-pointer flex-1 sm:flex-initial"
              >
                <span className="material-symbols-outlined text-base text-sky-600 dark:text-sky-400">architecture</span>
                <span>View Details</span>
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* CARD 2: Trade Memo: Behavioral Trading Companion */}
        <ScrollReveal delay={160} className="h-full">
          <div
            className="border-beam-card border-beam-card-indigo tilt-card card-spotlight shadow-xl dark:shadow-2xl transition-all duration-300 group h-full"
            onMouseMove={handleCardHoverMove}
            onMouseLeave={handleCardHoverLeave}
          >
          <div className="border-beam-inner bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-2xl h-full">
            <div className="flex flex-col gap-5">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono-tag text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span>Under Active Development</span>
                </span>
                <span className="font-mono-tag text-xs text-gray-600 dark:text-text-muted font-medium">
                  KMP • MULTIPLATFORM
                </span>
              </div>

              {/* Feature Graphic Media Banner */}
              <div
                className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-gray-950/5 dark:bg-black/60 border border-gray-200/60 dark:border-white/10 cursor-pointer group/banner"
                onClick={() => handleOpen(tradeMemoApp)}
                title="Click to view details & architecture specs"
              >
                <img
                  src={tradeMemoApp.featureGraphic || "/trade_memo/feature_graphic.png"}
                  alt={`${tradeMemoApp.name} feature graphic`}
                  className="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Quick Preview Badge Overlay */}
                <div className="absolute bottom-2.5 right-2.5 z-10 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono-tag px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                  <span className="material-symbols-outlined text-sm text-indigo-400">visibility</span>
                  <span>Click to Expand Specs</span>
                </div>
              </div>

              {/* Product Title & Tagline */}
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-headline-md text-xl sm:text-2xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight">
                    Trade Memo
                  </h3>
                  <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-2xl flex-shrink-0">
                    candlestick_chart
                  </span>
                </div>
                <p className="font-mono-tag text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 mt-1 font-semibold tracking-wide">
                  The Anti-Tilt Journal in Your Pocket.
                </p>
              </div>

              {/* Description */}
              <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted leading-relaxed">
                Built on Kotlin Multiplatform (KMP) and Compose Multiplatform. Features an obsidian
                AMOLED terminal UI designed to isolate emotional trading biases and calculate
                avoidable capital losses.
              </p>

              {/* Feature Matrix Chips (2x2) */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-indigo-600 dark:text-indigo-400">psychology</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    Anti-Tilt Emotion Tags
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-rose-500">trending_down</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    Avoidable Loss Engine
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-sky-600 dark:text-sky-400">layers</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    Shared Domain &amp; State
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-low border border-gray-200/50 dark:border-white/5">
                  <span className="material-symbols-outlined text-base text-emerald-600 dark:text-emerald-400">analytics</span>
                  <span className="font-mono-tag text-xs text-gray-800 dark:text-on-surface font-medium truncate">
                    Execution Scorecards
                  </span>
                </div>
              </div>

              {/* Tech Stack Footer Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {[
                  "Kotlin Multiplatform",
                  "Compose Multiplatform",
                  "Room KMP",
                  "SQLDelight",
                  "MVI Orbit",
                ].map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-surface-container-highest font-mono-tag text-[11px] text-gray-700 dark:text-on-surface-variant font-medium border border-gray-200/60 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100 dark:border-white/10 mt-6">
              <button
                onClick={() => handleOpen(tradeMemoApp)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-surface-container border border-gray-200 dark:border-white/10 text-gray-800 dark:text-on-surface font-label-ui text-xs sm:text-sm font-semibold hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-pointer flex-1 sm:flex-initial"
              >
                <span className="material-symbols-outlined text-base text-indigo-600 dark:text-indigo-400">architecture</span>
                <span>View Details</span>
              </button>

              <a
                href="#contact"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onBlur={handleMagneticLeave}
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-label-ui text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex-1 sm:flex-initial"
              >
                <span className="material-symbols-outlined text-sm">notifications_active</span>
                <span>Join Beta Waitlist</span>
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* 4.2 Enterprise Telecom & Client Grid */}
      <EnterpriseGrid />

      {/* Architecture & Screenshot Modal */}
      <AppModal open={open} setOpen={setOpen} app={selectedApp} />
    </section>
  );
}

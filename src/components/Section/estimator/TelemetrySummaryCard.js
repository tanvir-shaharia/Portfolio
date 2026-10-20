import React, { useState } from "react";
import { ESTIMATOR_DISCLAIMERS } from "../../../data/estimatorData";
import {
  generateEstimateMessage,
  copyTextToClipboard,
} from "../../../utils/estimatorCalculator";

export default function TelemetrySummaryCard({
  estimateResult,
  currency = "USD",
  onCurrencyChange,
  onTransferToContact,
}) {
  const [showDisclaimers, setShowDisclaimers] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const { projectType, complexity, activeFeatures, formatted } =
    estimateResult;

  const handleTransfer = () => {
    onTransferToContact();
    setTransferSuccess(true);
    setTimeout(() => setTransferSuccess(false), 3000);
  };

  const handleCopySummary = async () => {
    const summaryText = generateEstimateMessage(estimateResult);
    const success = await copyTextToClipboard(summaryText);
    if (success) {
      setCopiedSuccess(true);
      setCopyFailed(false);
      setTimeout(() => setCopiedSuccess(false), 3000);
    } else {
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 3000);
    }
  };

  const primaryDisplay =
    currency === "USD" ? formatted.usdRange : formatted.bdtRange;
  const secondaryDisplay =
    currency === "USD"
      ? `≈ ${formatted.bdtRange} (Indicative at ৳122/$1)`
      : `≈ ${formatted.usdRange} USD base`;

  return (
    <div className="sticky top-24 w-full bg-white/90 dark:bg-surface-glass border border-gray-200/80 dark:border-white/15 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-5">
      {/* Top Header: Telemetry Tag & Currency Toggle */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-200/60 dark:border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono-tag text-[10px] sm:text-xs text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider uppercase">
            ESTIMATE SUMMARY
          </span>
        </div>

        {/* Currency Switcher */}
        <div
          role="group"
          aria-label="Currency Selector"
          className="inline-flex items-center p-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/80 dark:border-white/10"
        >
          <button
            type="button"
            onClick={() => onCurrencyChange("USD")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono-tag font-semibold transition-all ${
              currency === "USD"
                ? "bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            USD ($)
          </button>
          <button
            type="button"
            onClick={() => onCurrencyChange("BDT")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono-tag font-semibold transition-all ${
              currency === "BDT"
                ? "bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            BDT (৳)
          </button>
        </div>
      </div>

      {/* Screen Reader Live Region */}
      <div aria-live="polite" className="sr-only">
        {`Updated project estimate: ${primaryDisplay}, development timeline: ${formatted.timelineRange}`}
      </div>

      {/* Primary Estimated Budget Display */}
      <div className="flex flex-col gap-1">
        <span className="font-mono-tag text-[11px] text-gray-500 dark:text-text-muted uppercase">
          ESTIMATED BUDGET RANGE
        </span>
        <div className="font-display-hero text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800 dark:from-indigo-300 dark:via-sky-300 dark:to-teal-200 bg-clip-text text-transparent">
          {primaryDisplay}
        </div>
        <span className="font-mono-tag text-xs text-gray-500 dark:text-text-muted">
          {secondaryDisplay}
        </span>
      </div>

      {/* Estimated Timeline Badge */}
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-indigo-50/70 dark:bg-brand-950/60 border border-indigo-500/20 dark:border-indigo-400/30 shadow-inner">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-700 dark:text-indigo-400 flex-shrink-0">
          <span className="material-symbols-outlined text-xl">schedule</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono-tag text-[10px] text-indigo-800 dark:text-indigo-300 uppercase font-semibold">
            ESTIMATED TIMELINE
          </span>
          <span className="font-headline-sm text-sm sm:text-base font-bold text-gray-900 dark:text-text-primary">
            {formatted.timelineRange}
          </span>
        </div>
      </div>

      {/* Selected Scope Chips */}
      <div className="flex flex-col gap-2 pt-1">
        <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase tracking-wider">
          SELECTED SPECIFICATION
        </span>
        <div className="flex flex-wrap gap-1.5">
          <span className="font-mono-tag text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-zinc-200 font-medium">
            {projectType.name}
          </span>
          <span className="font-mono-tag text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 dark:bg-brand-950/80 border border-indigo-500/20 dark:border-indigo-400/30 text-indigo-800 dark:text-indigo-300 font-medium">
            {complexity.name}
          </span>
          {activeFeatures.map((f) => (
            <span
              key={f.id}
              className="font-mono-tag text-[11px] px-2 py-0.5 rounded-md bg-sky-500/10 dark:bg-[#082236]/80 border border-sky-500/20 dark:border-sky-400/30 text-sky-800 dark:text-sky-300 font-medium"
            >
              +{f.name}
            </span>
          ))}
          {activeFeatures.length === 0 && (
            <span className="font-mono-tag text-[11px] text-gray-400 italic">
              Base scope only
            </span>
          )}
        </div>
      </div>

      {/* Transfer & Copy CTA Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={handleTransfer}
          className="flex-1 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-label-ui font-bold text-xs sm:text-sm px-4 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Transfer Estimate to Inquire"
        >
          <span className="material-symbols-outlined text-lg">
            {transferSuccess ? "task_alt" : "send"}
          </span>
          <span>
            {transferSuccess
              ? "Transferred!"
              : "Transfer Estimate to Inquire"}
          </span>
        </button>

        <button
          type="button"
          onClick={handleCopySummary}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-zinc-200 font-label-ui font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 flex-shrink-0"
          aria-label="Copy Estimate Summary to clipboard"
        >
          <span className="material-symbols-outlined text-lg">
            {copiedSuccess ? "check" : copyFailed ? "error" : "content_copy"}
          </span>
          <span>
            {copiedSuccess
              ? "Copied!"
              : copyFailed
              ? "Copy Failed"
              : "Copy Summary"}
          </span>
        </button>
      </div>

      {/* Disclaimers & Exclusions Accordion */}
      <div className="pt-2 border-t border-gray-200/60 dark:border-white/10">
        <button
          type="button"
          onClick={() => setShowDisclaimers(!showDisclaimers)}
          className="w-full flex items-center justify-between text-left text-xs font-mono-tag text-gray-500 dark:text-text-muted hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-sky-600 dark:text-sky-400">
              info
            </span>
            <span>Exclusions & Third-Party Notice</span>
          </span>
          <span className="material-symbols-outlined text-sm">
            {showDisclaimers ? "expand_less" : "expand_more"}
          </span>
        </button>

        {showDisclaimers && (
          <div className="mt-3 p-3 rounded-xl bg-gray-50 dark:bg-surface-glass-subtle border border-gray-200/60 dark:border-white/5 text-[11px] font-body-md text-gray-600 dark:text-text-muted space-y-2 leading-relaxed">
            {ESTIMATOR_DISCLAIMERS.map((disc, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-semibold text-gray-800 dark:text-gray-300 block">
                  {disc.title}:
                </span>
                <p>{disc.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

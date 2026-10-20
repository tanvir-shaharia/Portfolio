import React from "react";
import { formatCurrencyNumber } from "../../../utils/estimatorCalculator";

export default function ProjectTypeCard({
  projectType,
  isSelected,
  onSelect,
  currency = "USD",
  exchangeRate = 122,
}) {
  const minCost =
    currency === "USD"
      ? `$${formatCurrencyNumber(projectType.baseCost.min)}`
      : `৳${formatCurrencyNumber(Math.round((projectType.baseCost.min * exchangeRate) / 1000) * 1000)}`;

  const maxCost =
    currency === "USD"
      ? `$${formatCurrencyNumber(projectType.baseCost.max)}`
      : `৳${formatCurrencyNumber(Math.round((projectType.baseCost.max * exchangeRate) / 1000) * 1000)}`;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(projectType.id)}
      className={`relative text-left w-full p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80 ${
        isSelected
          ? "bg-indigo-50/90 dark:bg-brand-950/70 border-indigo-500/80 dark:border-indigo-400 shadow-md dark:shadow-[0_0_25px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/40 dark:ring-indigo-400/60"
          : "bg-white/80 dark:bg-surface-glass border-gray-200/80 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/25 hover:-translate-y-0.5 shadow-sm"
      }`}
    >
      {/* Top Row: Icon & Selection Indicator */}
      <div className="flex items-center justify-between w-full">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
            isSelected
              ? "bg-indigo-500/15 border-indigo-500/30 dark:border-indigo-400/40 text-indigo-700 dark:text-indigo-300 dark:bg-indigo-500/25"
              : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
          }`}
        >
          <span className="material-symbols-outlined text-2xl">
            {projectType.icon}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`font-mono-tag text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md border ${
              isSelected
                ? "bg-indigo-500/10 text-indigo-800 dark:text-indigo-200 border-indigo-500/20 dark:border-indigo-400/30 dark:bg-indigo-500/20"
                : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200/60 dark:border-white/10"
            }`}
          >
            {minCost}–{maxCost}
          </span>
          <span
            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
              isSelected
                ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-500 text-white"
                : "border-gray-300 dark:border-white/20 bg-transparent"
            }`}
          >
            {isSelected && (
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            )}
          </span>
        </div>
      </div>

      {/* Body: Title & Subtitle */}
      <div>
        <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase tracking-wider block">
          {projectType.categoryTag}
        </span>
        <h3 className="font-display-hero text-base sm:text-lg font-bold text-gray-900 dark:text-text-primary tracking-tight mt-0.5">
          {projectType.name}
        </h3>
        <p className="font-body-md text-xs text-gray-600 dark:text-zinc-300 mt-1 leading-snug line-clamp-2">
          {projectType.subtitle}
        </p>
      </div>

      {/* Footer: Timeline */}
      <div className="pt-2 border-t border-gray-200/50 dark:border-white/5 flex items-center justify-between text-xs font-mono-tag text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-sky-600 dark:text-sky-400">
            schedule
          </span>
          <span>{projectType.baseTimelineWeeks.min}–{projectType.baseTimelineWeeks.max} wks base</span>
        </span>
      </div>
    </button>
  );
}

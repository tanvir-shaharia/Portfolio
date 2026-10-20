import React from "react";
import { formatCurrencyNumber } from "../../../utils/estimatorCalculator";

export default function FeatureToggleGrid({
  features,
  selectedFeatureIds,
  onToggle,
  projectType,
  currency = "USD",
  exchangeRate = 122,
}) {
  return (
    <div
      role="group"
      aria-label="Modular Project Feature Add-ons"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
    >
      {features.map((feature) => {
        const isSelected = selectedFeatureIds.includes(feature.id);
        const unsupportedReason =
          projectType?.unsupportedFeatures &&
          projectType.unsupportedFeatures[feature.id];
        const isUnsupported = Boolean(unsupportedReason);

        const costTag =
          currency === "USD"
            ? `+$${formatCurrencyNumber(feature.cost.min)}–$${formatCurrencyNumber(feature.cost.max)}`
            : `+৳${formatCurrencyNumber(Math.round((feature.cost.min * exchangeRate) / 1000) * 1000)}–৳${formatCurrencyNumber(Math.round((feature.cost.max * exchangeRate) / 1000) * 1000)}`;

        const scopeText =
          projectType?.id === "backend"
            ? feature.scopeNotes.backend
            : feature.scopeNotes.client;

        return (
          <div
            key={feature.id}
            onClick={() => {
              if (!isUnsupported) {
                onToggle(feature.id);
              }
            }}
            className={`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-200 select-none flex flex-col justify-between gap-2.5 ${
              isUnsupported
                ? "bg-gray-100/60 dark:bg-surface-glass-subtle border-gray-200/50 dark:border-white/5 opacity-60 cursor-not-allowed"
                : isSelected
                ? "bg-sky-50/90 dark:bg-[#082236]/80 border-sky-500/80 dark:border-sky-400 shadow-md dark:shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-sky-500/40 dark:ring-sky-400/60 cursor-pointer"
                : "bg-white/70 dark:bg-surface-glass border-gray-200/80 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 shadow-sm cursor-pointer hover:-translate-y-0.5"
            }`}
          >
            {/* Top row: Icon, Checkbox & Price Badge */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border text-base flex-shrink-0 ${
                    isSelected && !isUnsupported
                      ? "bg-sky-500/15 border-sky-500/30 dark:border-sky-400/40 text-sky-700 dark:text-sky-300 dark:bg-sky-500/20"
                      : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">
                    {feature.icon}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-headline-sm text-xs sm:text-sm font-bold text-gray-900 dark:text-text-primary">
                    {feature.name}
                  </span>
                </div>
              </div>

              {/* Checkbox status indicator */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={`font-mono-tag text-[10px] px-1.5 py-0.5 rounded font-semibold border ${
                    isSelected && !isUnsupported
                      ? "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20 dark:border-sky-400/30 dark:bg-sky-500/20"
                      : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10"
                  }`}
                >
                  {costTag}
                </span>

                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    isUnsupported
                      ? "border-gray-300 dark:border-white/10 bg-gray-200 dark:bg-white/5"
                      : isSelected
                      ? "bg-sky-600 border-sky-600 dark:bg-sky-500 dark:border-sky-400 text-white"
                      : "border-gray-300 dark:border-white/20 bg-white dark:bg-surface-canvas"
                  }`}
                >
                  {isSelected && !isUnsupported && (
                    <span className="material-symbols-outlined text-xs">
                      check
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Scope explanation */}
            <p className="font-body-md text-[11px] sm:text-xs text-gray-600 dark:text-zinc-300 leading-relaxed line-clamp-2">
              {isUnsupported ? (
                <span className="text-amber-600 dark:text-amber-400 font-medium">
                  {unsupportedReason}
                </span>
              ) : (
                scopeText
              )}
            </p>

            {/* Bottom time tag */}
            <div className="flex items-center justify-between text-[10px] font-mono-tag text-gray-400 dark:text-gray-500 pt-1 border-t border-gray-200/40 dark:border-white/5">
              <span>Timeline impact</span>
              <span className="text-sky-700 dark:text-sky-400 font-semibold">
                {feature.timeTag}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";

export default function ComplexitySelector({ tiers, selectedId, onSelect }) {
  return (
    <div
      role="radiogroup"
      aria-label="Project Complexity & Engineering Rigor Tier"
      className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
    >
      {tiers.map((tier) => {
        const isSelected = tier.id === selectedId;
        return (
          <button
            key={tier.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(tier.id)}
            className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80 ${
              isSelected
                ? "bg-indigo-50/90 dark:bg-brand-950/70 border-indigo-500/80 dark:border-indigo-400 shadow-md dark:shadow-[0_0_20px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/40 dark:ring-indigo-400/60"
                : "bg-white/70 dark:bg-surface-glass border-gray-200/80 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-headline-sm text-sm font-bold text-gray-900 dark:text-text-primary">
                {tier.name}
              </span>
              <span
                className={`font-mono-tag text-[10px] px-2 py-0.5 rounded font-semibold border ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500"
                    : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10"
                }`}
              >
                {tier.badge}
              </span>
            </div>

            <p className="font-body-md text-xs text-gray-600 dark:text-zinc-300 leading-relaxed">
              {tier.shortDescription}
            </p>
          </button>
        );
      })}
    </div>
  );
}

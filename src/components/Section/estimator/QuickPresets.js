import React, { useMemo } from "react";
import { getPresetsForProjectType } from "../../../data/estimatorData";

export default function QuickPresets({
  currentConfig,
  onSelectPreset,
}) {
  const presets = useMemo(() => {
    return getPresetsForProjectType(currentConfig?.projectTypeId);
  }, [currentConfig?.projectTypeId]);

  const isPresetActive = (preset) => {
    if (!currentConfig) return false;
    if (
      preset.projectTypeId !== currentConfig.projectTypeId ||
      preset.complexityId !== currentConfig.complexityId
    ) {
      return false;
    }
    const currentSet = new Set(currentConfig.selectedFeatureIds || []);
    if (preset.featureIds.length !== currentSet.size) return false;
    return preset.featureIds.every((id) => currentSet.has(id));
  };

  return (
    <div
      role="region"
      aria-label="Quick Estimate Presets"
      className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-surface-glass/80 border border-gray-200/80 dark:border-white/10 backdrop-blur-xl shadow-md flex flex-col gap-3.5 mb-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 dark:border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-lg text-indigo-600 dark:text-indigo-400">
            tune
          </span>
          <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-wider">
            QUICK SCOPE PRESETS
          </span>
        </div>
        <span className="font-body-sm text-[11px] text-gray-600 dark:text-text-muted">
          One-click engineering templates. All selections remain fully customizable.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {presets.map((preset) => {
          const active = isPresetActive(preset);
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              aria-pressed={active}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 group ${
                active
                  ? "bg-indigo-500/10 dark:bg-brand-950/90 border-indigo-500/60 dark:border-indigo-400/50 shadow-md ring-1 ring-indigo-500/30"
                  : "bg-white/60 dark:bg-surface-glass/60 border-gray-200/70 dark:border-white/5 hover:border-indigo-500/40 hover:bg-white dark:hover:bg-white/5"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-sm ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">
                      {preset.icon}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-ui text-xs sm:text-sm font-bold text-gray-900 dark:text-text-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {preset.title}
                    </span>
                    <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted">
                      {preset.track}
                    </span>
                  </div>
                </div>

                <span
                  className={`font-mono-tag text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-zinc-300 border border-gray-200/60 dark:border-white/10"
                  }`}
                >
                  {preset.badge}
                </span>
              </div>

              <p className="font-body-sm text-[11px] text-gray-600 dark:text-on-surface-variant leading-relaxed">
                {preset.description}
              </p>

              <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-white/5 text-[10px] font-mono-tag">
                <span className={active ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-gray-500 dark:text-text-muted"}>
                  {active ? "✓ ACTIVE PRESET" : "APPLY PRESET"}
                </span>
                <span className="text-gray-400">
                  {preset.featureIds.length} Feature{preset.featureIds.length > 1 ? "s" : ""}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

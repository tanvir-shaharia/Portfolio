import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../ScrollReveal";
import {
  PROJECT_TYPES,
  COMPLEXITY_TIERS,
  FEATURE_ADDONS,
  ESTIMATOR_CONFIG,
} from "../../../data/estimatorData";
import {
  calculateEstimate,
  generateEstimateSubject,
  generateEstimateMessage,
} from "../../../utils/estimatorCalculator";
import ProjectTypeCard from "./ProjectTypeCard";
import ComplexitySelector from "./ComplexitySelector";
import FeatureToggleGrid from "./FeatureToggleGrid";
import TelemetrySummaryCard from "./TelemetrySummaryCard";
import QuickPresets from "./QuickPresets";

export const ESTIMATOR_DEFAULTS = {
  PROJECT_TYPE: "android",
  COMPLEXITY: "commercial",
  FEATURES: ["auth", "payments"],
  CURRENCY: ESTIMATOR_CONFIG.DEFAULT_CURRENCY, // "USD"
};

export const CURRENCY_STORAGE_KEY = "portfolio:estimator-currency";

export default function ProjectEstimator({ className = "" }) {
  const navigate = useNavigate();
  const [projectTypeId, setProjectTypeId] = useState(ESTIMATOR_DEFAULTS.PROJECT_TYPE);
  const [complexityId, setComplexityId] = useState(ESTIMATOR_DEFAULTS.COMPLEXITY);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState(ESTIMATOR_DEFAULTS.FEATURES);
  const [currency, setCurrency] = useState(() => {
    if (typeof window === "undefined") return ESTIMATOR_DEFAULTS.CURRENCY;
    try {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (saved === "USD" || saved === "BDT") {
        return saved;
      }
    } catch (e) {
      // Graceful fallback to default
    }
    return ESTIMATOR_DEFAULTS.CURRENCY;
  });

  const handleCurrencyChange = (newCurrency) => {
    if (newCurrency === "USD" || newCurrency === "BDT") {
      setCurrency(newCurrency);
      try {
        localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
      } catch (e) {
        // Ignore storage errors
      }
    }
  };

  const handleResetToDefault = () => {
    setProjectTypeId(ESTIMATOR_DEFAULTS.PROJECT_TYPE);
    setComplexityId(ESTIMATOR_DEFAULTS.COMPLEXITY);
    setSelectedFeatureIds(ESTIMATOR_DEFAULTS.FEATURES);
    setCurrency(ESTIMATOR_DEFAULTS.CURRENCY);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, ESTIMATOR_DEFAULTS.CURRENCY);
    } catch (e) {
      // Ignore storage errors
    }
  };

  const handleSelectPreset = (preset) => {
    if (!preset) return;
    setProjectTypeId(preset.projectTypeId);
    setComplexityId(preset.complexityId);
    setSelectedFeatureIds(preset.featureIds);
  };

  // Memoized pure calculation
  const estimateResult = useMemo(() => {
    return calculateEstimate({
      projectTypeId,
      complexityId,
      selectedFeatureIds,
    });
  }, [projectTypeId, complexityId, selectedFeatureIds]);

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatureIds((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleTransferToContact = () => {
    const subject = generateEstimateSubject(estimateResult);
    const message = generateEstimateMessage(estimateResult);

    const estimateData = {
      projectTypeId: estimateResult.projectType.id,
      projectTypeName: estimateResult.projectType.name,
      complexityId: estimateResult.complexity.id,
      complexityName: estimateResult.complexity.name,
      featureNames: estimateResult.activeFeatures.map((f) => f.name),
      usdRange: estimateResult.formatted.usdRange,
      bdtRange: estimateResult.formatted.bdtRange,
      timelineRange: estimateResult.formatted.timelineRange,
    };

    if (typeof window !== "undefined") {
      // 1. Store in sessionStorage for cross-page persistence
      try {
        sessionStorage.setItem(
          "portfolio:prefill-contact",
          JSON.stringify({ subject, message, estimateData })
        );
        sessionStorage.setItem(
          "portfolio:attached-estimate",
          JSON.stringify(estimateData)
        );
      } catch (e) {
        // ignore storage errors
      }

      // 2. Dispatch custom event for in-page listeners
      window.dispatchEvent(
        new CustomEvent("portfolio:prefill-contact", {
          detail: { subject, message, estimateData },
        })
      );

      // 3. If contact section is in DOM (e.g. on same page), scroll directly
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const nameInput = document.querySelector('input[name="from_name"]');
          if (nameInput) {
            nameInput.focus();
          }
        }, 600);
      } else {
        // 4. Otherwise navigate to /contact where ContactMe will mount and consume sessionStorage
        navigate("/contact");
      }
    }
  };

  return (
    <section
      id="estimator"
      className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ${className}`}
      aria-label="Interactive Project Pricing and Timeline Estimator"
    >
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
                06 // PROJECT ESTIMATOR
              </span>
            </div>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight">
              Estimate Project Cost &amp; Timeline
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted max-w-3xl leading-relaxed">
              Select your platform, engineering complexity, and feature scope to view an
              indicative investment range and development schedule. All estimates are
              grounded in production-grade Clean Architecture and tested engineering practices.
            </p>
          </div>

          {/* Reset to Default Button */}
          <button
            type="button"
            onClick={handleResetToDefault}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200/80 dark:border-white/10 text-xs font-mono-tag font-semibold text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 flex-shrink-0"
            aria-label="Reset estimator configuration to default values"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            <span>Reset to Default</span>
          </button>
        </div>

        {/* Quick Scope Presets */}
        <QuickPresets
          currentConfig={{
            projectTypeId,
            complexityId,
            selectedFeatureIds,
          }}
          onSelectPreset={handleSelectPreset}
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Interactive Selectors (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Step 1: Project Type */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs text-indigo-700 dark:text-indigo-400 font-bold uppercase tracking-wider">
                  STEP 01 // SELECT PLATFORM
                </span>
                <span className="text-[11px] font-mono-tag text-gray-500 dark:text-gray-400">
                  4 Core Architectures
                </span>
              </div>

              <div
                role="radiogroup"
                aria-label="Select Target Platform"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {PROJECT_TYPES.map((type) => (
                  <ProjectTypeCard
                    key={type.id}
                    projectType={type}
                    isSelected={projectTypeId === type.id}
                    onSelect={setProjectTypeId}
                    currency={currency}
                    exchangeRate={ESTIMATOR_CONFIG.EXCHANGE_RATE}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2: Complexity & Engineering Rigor */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs text-indigo-700 dark:text-indigo-400 font-bold uppercase tracking-wider">
                  STEP 02 // ENGINEERING RIGOR &amp; TIER
                </span>
                <span className="text-[11px] font-mono-tag text-gray-500 dark:text-gray-400">
                  Multiplier Applied to Base
                </span>
              </div>

              <ComplexitySelector
                tiers={COMPLEXITY_TIERS}
                selectedId={complexityId}
                onSelect={setComplexityId}
              />
            </div>
          </ScrollReveal>

          {/* Step 3: Feature Add-ons */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-bold uppercase tracking-wider">
                  STEP 03 // MODULAR FEATURE ADD-ONS
                </span>
                <span className="text-[11px] font-mono-tag text-gray-500 dark:text-gray-400">
                  {selectedFeatureIds.length} Selected
                </span>
              </div>

              <FeatureToggleGrid
                features={FEATURE_ADDONS}
                selectedFeatureIds={selectedFeatureIds}
                onToggle={handleFeatureToggle}
                projectType={estimateResult.projectType}
                currency={currency}
                exchangeRate={ESTIMATOR_CONFIG.EXCHANGE_RATE}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Live Telemetry & Estimate Card (5 cols) */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={200}>
            <TelemetrySummaryCard
              estimateResult={estimateResult}
              currency={currency}
              onCurrencyChange={handleCurrencyChange}
              onTransferToContact={handleTransferToContact}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

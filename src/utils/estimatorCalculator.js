import {
  ESTIMATOR_CONFIG,
  PROJECT_TYPES,
  COMPLEXITY_TIERS,
  FEATURE_ADDONS,
} from "../data/estimatorData";

/**
 * Rounds a number to the nearest multiple of a given step.
 * e.g., roundToStep(1842, 50) => 1850
 */
export function roundToStep(value, step) {
  if (typeof value !== "number" || isNaN(value)) return 0;
  return Math.round(value / step) * step;
}

/**
 * Rounds timeline weeks to the nearest 0.5 week increment.
 * e.g., roundToHalfWeek(3.2) => 3.0, roundToHalfWeek(3.3) => 3.5
 */
export function roundToHalfWeek(value) {
  if (typeof value !== "number" || isNaN(value)) return 0;
  return Math.round(value * 2) / 2;
}

/**
 * Formats a currency number with commas.
 */
export function formatCurrencyNumber(amount) {
  if (typeof amount !== "number" || isNaN(amount)) return "0";
  return amount.toLocaleString("en-US");
}

/**
 * Formats a timeline range in weeks.
 */
export function formatTimelineWeeks(min, max) {
  const minStr = Number.isInteger(min) ? min.toString() : min.toFixed(1);
  const maxStr = Number.isInteger(max) ? max.toString() : max.toFixed(1);
  if (min === max) {
    return `${minStr} Weeks`;
  }
  return `${minStr} – ${maxStr} Weeks`;
}

/**
 * Pure calculation function for project cost and timeline.
 *
 * Rules:
 * 1. USD is the single source of truth.
 * 2. Bounds (min & max) are calculated independently.
 * 3. Base cost is scaled by the complexity multiplier, then incremental feature ranges are added.
 * 4. USD is rounded to the nearest $50.
 * 5. BDT is derived from the final rounded USD bounds at the reference exchange rate (1 USD = 122 BDT)
 *    and rounded to the nearest ৳1,000.
 * 6. Timeline bounds are scaled by the tier timeline multiplier, features are added, rounded to half-weeks,
 *    and enforced with a minimum floor of 2.0 weeks.
 * 7. Unsupported features for the chosen project type are safely excluded from the sum and reported with explanations.
 */
export function calculateEstimate({
  projectTypeId = "android",
  complexityId = "mvp",
  selectedFeatureIds = [],
} = {}) {
  // 1. Resolve project type (safe fallback to "android")
  const projectType =
    PROJECT_TYPES.find((p) => p.id === projectTypeId) || PROJECT_TYPES[0];

  // 2. Resolve complexity tier (safe fallback to "mvp")
  const complexity =
    COMPLEXITY_TIERS.find((c) => c.id === complexityId) || COMPLEXITY_TIERS[0];

  // 3. Resolve and filter features
  const safeFeatureIds = Array.isArray(selectedFeatureIds)
    ? selectedFeatureIds
    : [];

  const activeFeatures = [];
  const unsupportedFeatures = [];

  safeFeatureIds.forEach((featureId) => {
    const featureDef = FEATURE_ADDONS.find((f) => f.id === featureId);
    if (!featureDef) return;

    // Check if feature is unsupported for this project type
    const unsupportedReason =
      projectType.unsupportedFeatures &&
      projectType.unsupportedFeatures[featureId];

    if (unsupportedReason) {
      unsupportedFeatures.push({
        ...featureDef,
        reason: unsupportedReason,
      });
    } else {
      activeFeatures.push(featureDef);
    }
  });

  // 4. Calculate USD Cost Bounds
  const scaledBaseMinCost =
    projectType.baseCost.min * complexity.costMultiplier;
  const scaledBaseMaxCost =
    projectType.baseCost.max * complexity.costMultiplier;

  const featuresMinCost = activeFeatures.reduce(
    (sum, f) => sum + f.cost.min,
    0
  );
  const featuresMaxCost = activeFeatures.reduce(
    (sum, f) => sum + f.cost.max,
    0
  );

  const rawMinCostUsd = scaledBaseMinCost + featuresMinCost;
  const rawMaxCostUsd = scaledBaseMaxCost + featuresMaxCost;

  let minCostUsd = roundToStep(rawMinCostUsd, ESTIMATOR_CONFIG.ROUNDING.USD);
  let maxCostUsd = roundToStep(rawMaxCostUsd, ESTIMATOR_CONFIG.ROUNDING.USD);

  // Guarantee min <= max
  if (minCostUsd > maxCostUsd) {
    maxCostUsd = minCostUsd;
  }

  // 5. Calculate BDT from rounded USD
  const rawMinCostBdt = minCostUsd * ESTIMATOR_CONFIG.EXCHANGE_RATE;
  const rawMaxCostBdt = maxCostUsd * ESTIMATOR_CONFIG.EXCHANGE_RATE;

  let minCostBdt = roundToStep(rawMinCostBdt, ESTIMATOR_CONFIG.ROUNDING.BDT);
  let maxCostBdt = roundToStep(rawMaxCostBdt, ESTIMATOR_CONFIG.ROUNDING.BDT);

  if (minCostBdt > maxCostBdt) {
    maxCostBdt = minCostBdt;
  }

  // 6. Calculate Timeline Bounds
  const scaledBaseMinTime =
    projectType.baseTimelineWeeks.min * complexity.timelineMultiplier;
  const scaledBaseMaxTime =
    projectType.baseTimelineWeeks.max * complexity.timelineMultiplier;

  const featuresMinTime = activeFeatures.reduce(
    (sum, f) => sum + f.timelineWeeks.min,
    0
  );
  const featuresMaxTime = activeFeatures.reduce(
    (sum, f) => sum + f.timelineWeeks.max,
    0
  );

  const rawMinTimeWeeks = scaledBaseMinTime + featuresMinTime;
  const rawMaxTimeWeeks = scaledBaseMaxTime + featuresMaxTime;

  let minWeeks = roundToHalfWeek(rawMinTimeWeeks);
  let maxWeeks = roundToHalfWeek(rawMaxTimeWeeks);

  // Enforce timeline floor
  minWeeks = Math.max(ESTIMATOR_CONFIG.TIMELINE_FLOOR_WEEKS, minWeeks);
  maxWeeks = Math.max(minWeeks, maxWeeks);

  return {
    projectType,
    complexity,
    activeFeatures,
    unsupportedFeatures,
    exchangeRate: ESTIMATOR_CONFIG.EXCHANGE_RATE,
    costUsd: {
      min: minCostUsd,
      max: maxCostUsd,
      rawMin: rawMinCostUsd,
      rawMax: rawMaxCostUsd,
    },
    costBdt: {
      min: minCostBdt,
      max: maxCostBdt,
      rawMin: rawMinCostBdt,
      rawMax: rawMaxCostBdt,
    },
    timelineWeeks: {
      min: minWeeks,
      max: maxWeeks,
      rawMin: rawMinTimeWeeks,
      rawMax: rawMaxTimeWeeks,
    },
    formatted: {
      usdRange: `$${formatCurrencyNumber(minCostUsd)} – $${formatCurrencyNumber(maxCostUsd)}`,
      bdtRange: `৳${formatCurrencyNumber(minCostBdt)} – ৳${formatCurrencyNumber(maxCostBdt)}`,
      timelineRange: formatTimelineWeeks(minWeeks, maxWeeks),
    },
  };
}

/**
 * Generates an email subject line for prefilling the contact form.
 */
export function generateEstimateSubject(estimateResult) {
  if (!estimateResult || !estimateResult.projectType) {
    return "Project Estimate Inquiry";
  }
  return `Project Estimate: ${estimateResult.projectType.name} (${estimateResult.complexity.name})`;
}

/**
 * Generates structured, readable markdown text for prefilling the contact form message.
 */
export function generateEstimateMessage(estimateResult) {
  if (!estimateResult || !estimateResult.projectType) {
    return "";
  }

  const { projectType, complexity, activeFeatures, formatted, exchangeRate = 122 } = estimateResult;

  const featuresList =
    activeFeatures.length > 0
      ? activeFeatures.map((f) => `  • ${f.name} (${f.tag})`).join("\n")
      : "  • Standard base scope only (no optional add-ons selected)";

  return `[PROJECT ESTIMATE SPECIFICATION]
--------------------------------------------------
• Platform: ${projectType.name} (${projectType.subtitle})
• Engineering Tier: ${complexity.name} (${complexity.badge})
• Estimated Budget: ${formatted.usdRange} (Indicative: ${formatted.bdtRange})
• Estimated Timeline: ${formatted.timelineRange}
• Reference Conversion Rate: 1 USD = ${exchangeRate} BDT (Indicative)

Selected Feature Scope:
${featuresList}

Notice & Scope Exclusions:
• Estimates reflect software engineering, Clean Architecture, and tested development scope.
• Excludes third-party app store developer accounts, paid 3rd-party APIs, and hosting infrastructure.

--------------------------------------------------
My Project Details & Goals:
(Please describe your project vision, target launch date, and any specific requirements here...)`;
}

/**
 * Copies text to the clipboard using navigator.clipboard with execCommand fallback.
 */
export async function copyTextToClipboard(text) {
  if (typeof window === "undefined") return false;

  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // Fall through to fallback
    }
  }

  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return Boolean(successful);
  } catch (err) {
    return false;
  }
}

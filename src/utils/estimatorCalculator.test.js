import {
  calculateEstimate,
  roundToStep,
  roundToHalfWeek,
  generateEstimateSubject,
  generateEstimateMessage,
} from "./estimatorCalculator";
import { PROJECT_TYPES, COMPLEXITY_TIERS, FEATURE_ADDONS } from "../data/estimatorData";

describe("Estimator Calculator Engine", () => {
  describe("Helper Rounding Functions", () => {
    test("roundToStep rounds correctly to step boundaries", () => {
      expect(roundToStep(1824, 50)).toBe(1800);
      expect(roundToStep(1825, 50)).toBe(1850);
      expect(roundToStep(1849, 50)).toBe(1850);
      expect(roundToStep(149500, 1000)).toBe(150000);
      expect(roundToStep(149499, 1000)).toBe(149000);
      expect(roundToStep(NaN, 50)).toBe(0);
    });

    test("roundToHalfWeek rounds to 0.5 week increments", () => {
      expect(roundToHalfWeek(3.2)).toBe(3.0);
      expect(roundToHalfWeek(3.25)).toBe(3.5);
      expect(roundToHalfWeek(3.4)).toBe(3.5);
      expect(roundToHalfWeek(3.75)).toBe(4.0);
      expect(roundToHalfWeek(NaN)).toBe(0);
    });
  });

  describe("Baseline Project Types (MVP Tier, No Add-ons)", () => {
    test("Native Android baseline MVP is $800–$1,500 and 3–4 weeks", () => {
      const res = calculateEstimate({
        projectTypeId: "android",
        complexityId: "mvp",
        selectedFeatureIds: [],
      });
      expect(res.costUsd.min).toBe(800);
      expect(res.costUsd.max).toBe(1500);
      expect(res.timelineWeeks.min).toBe(3);
      expect(res.timelineWeeks.max).toBe(4);
      // BDT: 800 * 122 = 97,600 -> 98,000; 1500 * 122 = 183,000 -> 183,000
      expect(res.costBdt.min).toBe(98000);
      expect(res.costBdt.max).toBe(183000);
      expect(res.formatted.usdRange).toBe("$800 – $1,500");
      expect(res.formatted.bdtRange).toBe("৳98,000 – ৳183,000");
    });

    test("Flutter baseline MVP is $1,500–$2,500 and 4–5 weeks", () => {
      const res = calculateEstimate({
        projectTypeId: "flutter",
        complexityId: "mvp",
        selectedFeatureIds: [],
      });
      expect(res.costUsd.min).toBe(1500);
      expect(res.costUsd.max).toBe(2500);
      expect(res.timelineWeeks.min).toBe(4);
      expect(res.timelineWeeks.max).toBe(5);
      // BDT: 1500 * 122 = 183,000; 2500 * 122 = 305,000
      expect(res.costBdt.min).toBe(183000);
      expect(res.costBdt.max).toBe(305000);
      expect(res.formatted.usdRange).toBe("$1,500 – $2,500");
    });

    test("Web Application baseline MVP is $1,000–$1,800 and 2.5–4 weeks", () => {
      const res = calculateEstimate({
        projectTypeId: "web",
        complexityId: "mvp",
        selectedFeatureIds: [],
      });
      expect(res.costUsd.min).toBe(1000);
      expect(res.costUsd.max).toBe(1800);
      expect(res.timelineWeeks.min).toBe(2.5);
      expect(res.timelineWeeks.max).toBe(4);
      // BDT: 1000 * 122 = 122,000; 1800 * 122 = 219,600 -> 220,000
      expect(res.costBdt.min).toBe(122000);
      expect(res.costBdt.max).toBe(220000);
    });

    test("Backend/API baseline MVP is $800–$1,500 and 2.5–4 weeks", () => {
      const res = calculateEstimate({
        projectTypeId: "backend",
        complexityId: "mvp",
        selectedFeatureIds: [],
      });
      expect(res.costUsd.min).toBe(800);
      expect(res.costUsd.max).toBe(1500);
      expect(res.timelineWeeks.min).toBe(2.5);
      expect(res.timelineWeeks.max).toBe(4);
    });
  });

  describe("Complexity Multipliers", () => {
    test("Commercial tier applies 1.35x cost multiplier and 1.25x timeline multiplier", () => {
      // Android: Base cost min = 800 * 1.35 = 1080 -> rounded 1100
      // Base cost max = 1500 * 1.35 = 2025 -> rounded 2050
      // Base time min = 3 * 1.25 = 3.75 -> rounded 4.0
      // Base time max = 4 * 1.25 = 5.0 -> rounded 5.0
      const res = calculateEstimate({
        projectTypeId: "android",
        complexityId: "commercial",
        selectedFeatureIds: [],
      });
      expect(res.costUsd.min).toBe(1100);
      expect(res.costUsd.max).toBe(2050);
      expect(res.timelineWeeks.min).toBe(4.0);
      expect(res.timelineWeeks.max).toBe(5.0);
    });

    test("Enterprise tier applies 1.85x cost multiplier and 1.60x timeline multiplier", () => {
      // Android: Base cost min = 800 * 1.85 = 1480 -> rounded 1500
      // Base cost max = 1500 * 1.85 = 2775 -> rounded 2800
      // Base time min = 3 * 1.60 = 4.8 -> rounded 5.0
      // Base time max = 4 * 1.60 = 6.4 -> rounded 6.5
      const res = calculateEstimate({
        projectTypeId: "android",
        complexityId: "enterprise",
        selectedFeatureIds: [],
      });
      expect(res.costUsd.min).toBe(1500);
      expect(res.costUsd.max).toBe(2800);
      expect(res.timelineWeeks.min).toBe(5.0);
      expect(res.timelineWeeks.max).toBe(6.5);
    });
  });

  describe("Feature Add-ons & Independent Bounds", () => {
    test("Single add-on adds exact feature bounds", () => {
      // Android MVP base: 800–1500, 3–4w
      // Auth add-on: 250–400, 0.5–1w
      // Total min: 800 + 250 = 1050 -> 1050
      // Total max: 1500 + 400 = 1900 -> 1900
      // Timeline min: 3 + 0.5 = 3.5w
      // Timeline max: 4 + 1.0 = 5.0w
      const res = calculateEstimate({
        projectTypeId: "android",
        complexityId: "mvp",
        selectedFeatureIds: ["auth"],
      });
      expect(res.costUsd.min).toBe(1050);
      expect(res.costUsd.max).toBe(1900);
      expect(res.timelineWeeks.min).toBe(3.5);
      expect(res.timelineWeeks.max).toBe(5.0);
    });

    test("Multiple add-ons accumulate without double-counting", () => {
      // Android MVP: 800–1500, 3–4w
      // Auth: 250–400, 0.5–1w
      // Payments: 450–750, 1–1.5w
      // Total min: 800 + 250 + 450 = 1500 -> 1500
      // Total max: 1500 + 400 + 750 = 2650 -> 2650
      // Timeline min: 3 + 0.5 + 1 = 4.5w
      // Timeline max: 4 + 1 + 1.5 = 6.5w
      const res = calculateEstimate({
        projectTypeId: "android",
        complexityId: "mvp",
        selectedFeatureIds: ["auth", "payments"],
      });
      expect(res.costUsd.min).toBe(1500);
      expect(res.costUsd.max).toBe(2650);
      expect(res.timelineWeeks.min).toBe(4.5);
      expect(res.timelineWeeks.max).toBe(6.5);
    });

    test("All 8 features selectable on Native Android", () => {
      const allFeatureIds = FEATURE_ADDONS.map((f) => f.id);
      const res = calculateEstimate({
        projectTypeId: "android",
        complexityId: "mvp",
        selectedFeatureIds: allFeatureIds,
      });
      expect(res.activeFeatures.length).toBe(8);
      expect(res.unsupportedFeatures.length).toBe(0);
      expect(res.costUsd.min).toBeLessThan(res.costUsd.max);
      expect(res.timelineWeeks.min).toBeLessThan(res.timelineWeeks.max);
    });
  });

  describe("Unsupported Feature Handling & Transparency", () => {
    test("Hardware BLE is excluded from Web with transparent explanation", () => {
      const res = calculateEstimate({
        projectTypeId: "web",
        complexityId: "mvp",
        selectedFeatureIds: ["auth", "hardware"],
      });
      // Auth is active, hardware is unsupported
      expect(res.activeFeatures.map((f) => f.id)).toEqual(["auth"]);
      expect(res.unsupportedFeatures.map((f) => f.id)).toEqual(["hardware"]);
      expect(res.unsupportedFeatures[0].reason).toContain("native mobile OS hardware APIs");
      // Total should only include Web base ($1,000–$1,800) + Auth ($250–$400)
      // 1000 + 250 = 1250, 1800 + 400 = 2200
      expect(res.costUsd.min).toBe(1250);
      expect(res.costUsd.max).toBe(2200);
    });

    test("Hardware and Offline-first storage are excluded from Backend with transparent explanations", () => {
      const res = calculateEstimate({
        projectTypeId: "backend",
        complexityId: "mvp",
        selectedFeatureIds: ["hardware", "offline", "realtime"],
      });
      expect(res.activeFeatures.map((f) => f.id)).toEqual(["realtime"]);
      expect(res.unsupportedFeatures.length).toBe(2);
      const unsupportedIds = res.unsupportedFeatures.map((f) => f.id);
      expect(unsupportedIds).toContain("hardware");
      expect(unsupportedIds).toContain("offline");
      // Total should only include Backend base ($800–$1,500) + Realtime ($250–$450)
      // 800 + 250 = 1050, 1500 + 450 = 1950
      expect(res.costUsd.min).toBe(1050);
      expect(res.costUsd.max).toBe(1950);
    });
  });

  describe("Safety, Minimum Floor & Edge Cases", () => {
    test("Enforces minimum timeline floor of 2 weeks", () => {
      // Even if an edge configuration yielded less than 2 weeks, it floors to 2.0
      const res = calculateEstimate({
        projectTypeId: "backend",
        complexityId: "mvp",
        selectedFeatureIds: [],
      });
      expect(res.timelineWeeks.min).toBeGreaterThanOrEqual(2.0);
    });

    test("Never allows minCost to exceed maxCost after rounding", () => {
      PROJECT_TYPES.forEach((pt) => {
        COMPLEXITY_TIERS.forEach((ct) => {
          const res = calculateEstimate({
            projectTypeId: pt.id,
            complexityId: ct.id,
            selectedFeatureIds: ["auth", "payments", "offline"],
          });
          expect(res.costUsd.min).toBeLessThanOrEqual(res.costUsd.max);
          expect(res.costBdt.min).toBeLessThanOrEqual(res.costBdt.max);
          expect(res.timelineWeeks.min).toBeLessThanOrEqual(res.timelineWeeks.max);
        });
      });
    });

    test("Safely handles missing, invalid, or undefined arguments", () => {
      const res = calculateEstimate(undefined);
      expect(res.projectType.id).toBe("android");
      expect(res.complexity.id).toBe("mvp");
      expect(res.costUsd.min).toBe(800);
      expect(res.costUsd.max).toBe(1500);

      const res2 = calculateEstimate({
        projectTypeId: "invalid-type",
        complexityId: "invalid-complexity",
        selectedFeatureIds: ["non-existent-feature"],
      });
      expect(res2.projectType.id).toBe("android");
      expect(res2.complexity.id).toBe("mvp");
      expect(res2.activeFeatures).toEqual([]);
    });
  });

  describe("Contact Form Handoff Formatting", () => {
    test("generateEstimateSubject produces expected title", () => {
      const res = calculateEstimate({
        projectTypeId: "flutter",
        complexityId: "commercial",
      });
      const subject = generateEstimateSubject(res);
      expect(subject).toBe("Project Estimate: Cross-Platform Flutter (Commercial / Production)");
    });

    test("generateEstimateMessage produces structured specification with all items", () => {
      const res = calculateEstimate({
        projectTypeId: "flutter",
        complexityId: "commercial",
        selectedFeatureIds: ["auth", "payments"],
      });
      const message = generateEstimateMessage(res);
      expect(message).toContain("[PROJECT ESTIMATE SPECIFICATION]");
      expect(message).toContain("Cross-Platform Flutter");
      expect(message).toContain("Commercial / Production");
      expect(message).toContain("Authentication & Social Login");
      expect(message).toContain("Payments & In-App Purchases");
      expect(message).toContain(res.formatted.usdRange);
      expect(message).toContain(res.formatted.bdtRange);
      expect(message).toContain(res.formatted.timelineRange);
      expect(message).toContain("Reference Conversion Rate: 1 USD = 122 BDT (Indicative)");
      expect(message).toContain("Notice & Scope Exclusions:");
      expect(message).toContain("My Project Details & Goals:");
    });

    test("generateEstimateMessage handles missing estimate gracefully", () => {
      expect(generateEstimateMessage(null)).toBe("");
      expect(generateEstimateMessage({})).toBe("");
    });
  });
});

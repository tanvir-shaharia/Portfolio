import React, { useState, useEffect, useRef } from "react";
import {
  handleSpotlightMove,
  handleSpotlightLeave,
  prefersReducedMotion,
} from "../../../utils/motion";

const METRICS = [
  {
    id: "01",
    tag: "01 // EXPERIENCE",
    tagColor: "text-sky-700 dark:text-sky-400",
    value: "3+",
    target: 3,
    suffix: "+",
    unit: "Yrs",
    unitColor: "text-indigo-600 dark:text-indigo-400",
    label: "Professional Experience",
  },
  {
    id: "02",
    tag: "02 // PRODUCTION",
    tagColor: "text-indigo-700 dark:text-indigo-400",
    value: "10+",
    target: 10,
    suffix: "+",
    unit: "Apps",
    unitColor: "text-sky-700 dark:text-sky-400",
    label: "Production Shipped",
  },
  {
    id: "03",
    tag: "03 // REACH",
    tagColor: "text-emerald-700 dark:text-emerald-400",
    value: "5M+",
    target: 5,
    suffix: "M+",
    unit: "Users",
    unitColor: "text-emerald-700 dark:text-emerald-400",
    label: "Ecosystem Reach",
  },
  {
    id: "04",
    tag: "04 // ARCHITECTURE",
    tagColor: "text-sky-700 dark:text-sky-400",
    value: "100%",
    target: 100,
    suffix: "%",
    unit: "Core",
    unitColor: "text-emerald-700 dark:text-emerald-400",
    label: "Offline-First Core",
  },
];

export default function MetricsBar() {
  const containerRef = useRef(null);
  const [counts, setCounts] = useState(["3+", "10+", "5M+", "100%"]);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // If reduced motion is preferred, retain static final values immediately
    if (prefersReducedMotion()) return;

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let animFrameId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const duration = 1350; // 1.35s smooth duration

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: 1 - (1 - t)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const newCounts = METRICS.map((m) => {
              const currentVal = Math.round(m.target * easeOut);
              return `${currentVal}${m.suffix}`;
            });

            setCounts(newCounts);

            if (progress < 1) {
              animFrameId = requestAnimationFrame(animate);
            } else {
              setCounts(METRICS.map((m) => m.value));
            }
          };

          animFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section className="mt-16 sm:mt-20 relative z-10" aria-label="Key telemetry metrics">
      <div
        ref={containerRef}
        className="border-beam-card border-beam-card-metrics card-spotlight rounded-2xl shadow-lg dark:shadow-2xl transition-all duration-300"
        onMouseMove={handleSpotlightMove}
        onMouseLeave={handleSpotlightLeave}
      >
        <div className="border-beam-inner grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 lg:p-6 bg-white/80 dark:bg-surface-glass border border-gray-200/70 dark:border-white/10 rounded-2xl backdrop-blur-xl">
          {METRICS.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-3 sm:p-4 ${
                idx < 3 ? "md:border-r border-gray-200/60 dark:border-white/5" : ""
              } ${idx === 0 || idx === 2 ? "border-r md:border-r-0 border-gray-200/40 dark:border-white/5" : ""}`}
            >
              <span
                className={`font-mono-tag text-[10px] sm:text-xs ${item.tagColor} font-semibold uppercase tracking-wider mb-1`}
              >
                {item.tag}
              </span>
              <div className="flex items-baseline gap-1.5">
                {/* Stable accessible text for screen readers */}
                <span className="sr-only">
                  {item.value} {item.unit} {item.label}
                </span>
                {/* Animated counter representation */}
                <span
                  aria-hidden="true"
                  className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight"
                >
                  {counts[idx]}
                </span>
                <span className={`text-base sm:text-xl font-medium ${item.unitColor}`}>
                  {item.unit}
                </span>
              </div>
              <span className="font-body-sm text-xs sm:text-sm text-gray-600 dark:text-text-muted mt-1 leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import ScrollReveal from "../../ScrollReveal";

export default function CareerTimeline() {
  return (
    <section
      id="experience"
      className="mt-24 sm:mt-32 relative z-10 flex flex-col gap-8"
      aria-label="Engineering experience and career milestones"
    >
      {/* Header */}
      <ScrollReveal>
        <div>
          <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
            {"// CAREER_TIMELINE"}
          </span>
          <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
            Engineering Experience & Scale
          </h2>
        </div>
      </ScrollReveal>

      {/* Vertical Timeline with Glowing Line & Nodes */}
      <div className="timeline-track relative pl-6 md:pl-10 space-y-12 sm:space-y-14 ml-2 sm:ml-4">
        {/* Glowing Timeline Line & Traveling Cyber Beam */}
        <div className="timeline-line">
          <div className="timeline-beam" aria-hidden="true"></div>
        </div>

        {/* Timeline Item 1: Nascenia Limited */}
        <ScrollReveal delay={60}>
          <div className="relative flex flex-col gap-3">
            {/* Glowing Node Dot */}
            <div className="timeline-node-cyan absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-white dark:border-surface-canvas shadow-[0_0_14px_rgba(6,182,212,0.8)]"></div>

            {/* Role, Company & Period Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h3 className="font-headline-sm text-lg sm:text-xl text-gray-900 dark:text-text-primary font-bold">
                  Software Engineer
                </h3>
                <span className="font-label-ui text-sm sm:text-base text-secondary font-semibold">
                  @ Nascenia Limited
                </span>
              </div>
              <span className="font-mono-tag text-xs px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary font-semibold">
                Sep 2023 – Present
              </span>
            </div>

            {/* Description */}
            <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted max-w-3xl leading-relaxed">
              Spearheaded core native Android and Flutter product tracks for high-concurrency digital
              platforms. Engineered mobile features for nationwide telecommunication ecosystems
              servicing millions of active users:
            </p>

            {/* Sub-cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/70 dark:bg-surface-glass border border-gray-200/70 dark:border-white/5 backdrop-blur-xl shadow-sm">
                <span className="font-mono-tag text-xs text-secondary font-semibold">
                  {"// MY ROBI & MY AIRTEL"}
                </span>
                <p className="font-body-sm text-xs text-gray-600 dark:text-on-surface-variant mt-1.5 leading-relaxed">
                  Refactored critical purchase journeys and telecom data pass widgets, reducing ANR
                  rates by 18% through reactive coroutine concurrency.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/70 dark:bg-surface-glass border border-gray-200/70 dark:border-white/5 backdrop-blur-xl shadow-sm">
                <span className="font-mono-tag text-xs text-secondary font-semibold">
                  {"// SHOJJA HOSPITAL & BLE IOT"}
                </span>
                <p className="font-body-sm text-xs text-gray-600 dark:text-on-surface-variant mt-1.5 leading-relaxed">
                  Engineered zero-loss Bluetooth Low Energy (BLE) peripheral discovery and custom packet
                  synchronizers for industrial weighing stations.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Item 2: Mobile App Publisher & Open-Source Creator */}
        <ScrollReveal delay={120}>
          <div className="relative flex flex-col gap-3">
            {/* Glowing Node Dot */}
            <div className="timeline-node-indigo absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-surface-canvas shadow-[0_0_14px_rgba(99,102,241,0.8)]"></div>

            {/* Role, Company & Period Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h3 className="font-headline-sm text-lg sm:text-xl text-gray-900 dark:text-text-primary font-bold">
                  Mobile App Publisher & Open-Source Creator
                </h3>
                <span className="font-label-ui text-sm sm:text-base text-primary font-semibold">
                  @ Independent Projects & Open Source
                </span>
              </div>
              <span className="font-mono-tag text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-fixed font-semibold">
                2022 – Present
              </span>
            </div>

            {/* Description */}
            <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted max-w-3xl leading-relaxed">
              Designed and launched independent native applications focused on deterministic privacy,
              zero-tracking, and Kotlin Multiplatform ecosystems. PocketLog achieved 100% offline-first
              rating on Google Play, and Trade Memo pioneering anti-tilt psychological tracking for
              financial traders.
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-surface-glass border border-gray-200/60 dark:border-white/5 font-mono-tag text-xs text-gray-700 dark:text-on-surface-variant">
                PocketLog: 100% Offline-First Personal Finance (Google Play)
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-surface-glass border border-gray-200/60 dark:border-white/5 font-mono-tag text-xs text-gray-700 dark:text-on-surface-variant">
                Trade Memo: Anti-Tilt Trading Journal (Kotlin Multiplatform)
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

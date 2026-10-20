import React from "react";
import { Link } from "react-router-dom";
import { handleCardHoverMove, handleCardHoverLeave } from "../../../utils/motion";
import ScrollReveal from "../../ScrollReveal";

export default function ServicesBento() {
  const services = [
    {
      id: "01",
      tag: "01 // NATIVE ANDROID",
      tagColor: "text-indigo-700 dark:text-indigo-400",
      icon: "android",
      iconColor: "text-indigo-700 dark:text-indigo-400",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
      title: "Modern Jetpack Compose",
      description:
        "Deep-level native engineering using Kotlin Coroutines, StateFlow, Dagger Hilt, and reactive MVI/MVVM architectures for zero dropped frames and rock-solid memory management.",
      checklist: [
        "Material 3 Compose Architecture",
        "Dagger-Hilt & Modularized Dependency",
        "Play Console Release & CI/CD Pipelines",
      ],
      stack: "STACK: Kotlin · Room · Flow · Retrofit",
      borderColor: "hover:border-indigo-500/40",
    },
    {
      id: "02",
      tag: "02 // CROSS-PLATFORM MOBILE",
      tagColor: "text-sky-700 dark:text-sky-400",
      icon: "devices",
      iconColor: "text-sky-700 dark:text-sky-400",
      iconBg: "bg-sky-500/10 border-sky-500/20",
      title: "High-Throughput Flutter",
      description:
        "Single-codebase multi-tenant apps with Riverpod & BLoC state machines. Delivers pixel-perfect rendering across Android and iOS with shared business domains.",
      checklist: [
        "Riverpod & BLoC State Orchestration",
        "Cross-Platform Shared Repositories",
        "60fps Custom Render Engines",
      ],
      stack: "STACK: Dart · Riverpod · Bloc · Hive",
      borderColor: "hover:border-sky-500/40",
    },
    {
      id: "03",
      tag: "03 // IOT & MODERNIZATION",
      tagColor: "text-emerald-700 dark:text-emerald-400",
      icon: "settings_ethernet",
      iconColor: "text-emerald-700 dark:text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Hardware Sync & Refactoring",
      description:
        "Bluetooth Low Energy (BLE) integration with custom hardware protocols, real-time weighing scales, legacy Java-to-Kotlin migrations, and memory leak triage.",
      checklist: [
        "Industrial BLE Packet Parsing",
        "Legacy Codebase Modularization",
        "Offline-First SQLite Migrations",
      ],
      stack: "STACK: Nordic BLE · LeakCanary · SQLite",
      borderColor: "hover:border-emerald-500/40",
    },
  ];

  return (
    <section
      id="services"
      className="mt-14 sm:mt-20 relative z-10 flex flex-col gap-8"
      aria-label="High-precision mobile engineering capabilities"
    >
      {/* Section Header */}
      <ScrollReveal>
        <div>
          <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
            SPECIALIZED CAPABILITIES
          </span>
          <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
            High-Precision Mobile Engineering Capabilities
          </h2>
        </div>
      </ScrollReveal>

      {/* 3-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {services.map((item, idx) => (
          <ScrollReveal key={item.id} delay={idx * 100} className="h-full">
            <div
              className={`card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 group ${item.borderColor} h-full`}
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>

                {/* Title & Tag */}
                <div>
                  <span
                    className={`font-mono-tag text-xs ${item.tagColor} font-semibold uppercase tracking-wider`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-headline-sm text-lg sm:text-xl text-gray-900 dark:text-text-primary font-bold mt-1">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Checklist */}
                <ul className="flex flex-col gap-2 font-mono-tag text-xs text-gray-700 dark:text-on-surface-variant pt-2 border-t border-gray-100 dark:border-white/5">
                  {item.checklist.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Footer */}
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 mt-6">
                <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold">
                  {item.stack}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Compact Project Estimator CTA Banner */}
      <ScrollReveal delay={200}>
        <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-brand-950/70 border border-indigo-500/20 dark:border-indigo-400/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
              <span className="material-symbols-outlined text-xl">calculate</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-tag text-[10px] text-sky-700 dark:text-sky-400 uppercase font-semibold tracking-wider">
                TRANSPARENT ENGINEERING QUOTES
              </span>
              <p className="font-body-md text-xs sm:text-sm text-gray-800 dark:text-zinc-200 font-medium">
                Planning a custom mobile application or backend architecture? Calculate your estimated budget and timeline.
              </p>
            </div>
          </div>

          <Link
            to="/project-estimator"
            className="btn-magnetic inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-label-ui text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all flex-shrink-0"
          >
            <span>Estimate Project Cost</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

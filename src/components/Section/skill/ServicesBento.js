import React from "react";
import { handleCardHoverMove, handleCardHoverLeave } from "../../../utils/motion";
import ScrollReveal from "../../ScrollReveal";

export default function ServicesBento() {
  const services = [
    {
      id: "01",
      tag: "// 01 NATIVE ANDROID",
      tagColor: "text-primary",
      icon: "android",
      iconColor: "text-primary",
      iconBg: "bg-primary/20 border-primary/30",
      title: "Modern Jetpack Compose",
      description:
        "Deep-level native engineering using Kotlin Coroutines, StateFlow, Dagger Hilt, and reactive MVI/MVVM architectures for zero dropped frames and rock-solid memory management.",
      checklist: [
        "Material 3 Compose Architecture",
        "Dagger-Hilt & Modularized Dependency",
        "Play Console Release & CI/CD Pipelines",
      ],
      stack: "STACK: Kotlin // Room // Flow // Retrofit",
      borderColor: "hover:border-primary/40",
    },
    {
      id: "02",
      tag: "// 02 CROSS-PLATFORM MOBILE",
      tagColor: "text-secondary",
      icon: "devices",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/15 border-secondary/30",
      title: "High-Throughput Flutter",
      description:
        "Single-codebase multi-tenant apps with Riverpod & BLoC state machines. Delivers pixel-perfect rendering across Android and iOS with shared business domains.",
      checklist: [
        "Riverpod & BLoC State Orchestration",
        "Cross-Platform Shared Repositories",
        "60fps Custom Render Engines",
      ],
      stack: "STACK: Dart // Riverpod // Bloc // Hive",
      borderColor: "hover:border-secondary/40",
    },
    {
      id: "03",
      tag: "// 03 IOT & MODERNIZATION",
      tagColor: "text-tertiary",
      icon: "settings_ethernet",
      iconColor: "text-tertiary",
      iconBg: "bg-tertiary/15 border-tertiary/30",
      title: "Hardware Sync & Refactoring",
      description:
        "Bluetooth Low Energy (BLE) integration with custom hardware protocols, real-time weighing scales, legacy Java-to-Kotlin migrations, and memory leak triage.",
      checklist: [
        "Industrial BLE Packet Parsing",
        "Legacy Codebase Modularization",
        "Offline-First SQLite Migrations",
      ],
      stack: "STACK: Nordic BLE // LeakCanary // SQLite",
      borderColor: "hover:border-tertiary/40",
    },
  ];

  return (
    <section
      id="services"
      className="mt-24 sm:mt-32 relative z-10 flex flex-col gap-8"
      aria-label="High-precision mobile engineering capabilities"
    >
      {/* Section Header */}
      <ScrollReveal>
        <div>
          <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
            {"// SPECIALIZED_SERVICES"}
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
                      <span className="text-tertiary font-bold">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Footer */}
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 mt-6">
                <span className="font-mono-tag text-xs text-secondary font-semibold">
                  {item.stack}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

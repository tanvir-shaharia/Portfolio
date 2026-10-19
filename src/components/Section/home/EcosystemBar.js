import React from "react";
import ScrollReveal from "../../ScrollReveal";

export default function EcosystemBar() {
  const ecosystems = [
    {
      name: "My Robi",
      metric: "10M+ Users",
      category: "Robi Axiata Telecom",
      icon: "cell_tower",
      iconColor: "text-tertiary",
    },
    {
      name: "My Airtel BD",
      metric: "High Concurrency",
      category: "Digital Self-Care Engine",
      icon: "sim_card",
      iconColor: "text-primary",
    },
    {
      name: "Nascenia Ltd",
      metric: "Core Engineer",
      category: "Premier Consultancy",
      icon: "hub",
      iconColor: "text-secondary",
    },
    {
      name: "Shojja Hospital",
      metric: "Critical Clinical",
      category: "Patient & Doctor Portal",
      icon: "local_hospital",
      iconColor: "text-tertiary",
    },
    {
      name: "Industrial BLE",
      metric: "Hardware Sync",
      category: "Weighing Scale System",
      icon: "bluetooth",
      iconColor: "text-secondary-fixed",
    },
    {
      name: "CZM / Biyeta",
      metric: "Large-Scale",
      category: "Community Platforms",
      icon: "groups",
      iconColor: "text-primary-fixed",
    },
  ];

  return (
    <section className="mt-16 sm:mt-24 relative z-10 flex flex-col gap-6" aria-label="Ecosystem scale contributions">
      <ScrollReveal>
        <div className="flex items-center justify-between border-b border-gray-200/60 dark:border-white/10 pb-4">
          <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
            {"// ECOSYSTEM_CONTRIBUTIONS & CLIENT SCALE"}
          </span>
          <span className="font-mono-tag text-[11px] text-gray-500 dark:text-text-muted hidden sm:inline-block font-medium">
            {"SCALE: TELECOM // HEALTHCARE // ENTERPRISE IOT"}
          </span>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {ecosystems.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 50} className="h-full">
            <div
              className="h-full flex flex-col gap-1 p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-surface-glass border border-gray-200/70 dark:border-white/5 hover:border-secondary/40 backdrop-blur-xl transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary group-hover:text-secondary font-bold transition-colors truncate">
                  {item.name}
                </span>
                <span className={`material-symbols-outlined text-base ${item.iconColor} flex-shrink-0`}>
                  {item.icon}
                </span>
              </div>
              <span className="font-mono-tag text-[11px] text-gray-500 dark:text-text-muted font-medium">
                {item.metric}
              </span>
              <span className="font-body-sm text-[11px] text-gray-600 dark:text-on-surface-variant line-clamp-1">
                {item.category}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

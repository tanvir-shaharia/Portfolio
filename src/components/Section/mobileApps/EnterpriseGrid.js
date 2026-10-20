import React from "react";
import { handleCardHoverMove, handleCardHoverLeave } from "../../../utils/motion";
import ScrollReveal from "../../ScrollReveal";

export default function EnterpriseGrid() {
  const enterpriseProjects = [
    {
      id: "robi",
      name: "My Robi",
      metric: "10M+ Installs",
      metricStyle: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
      tech: "Android Native • Kotlin",
      techColor: "text-sky-700 dark:text-sky-400",
      description:
        "Scaled telecom self-care features serving millions of active users in Bangladesh. Optimized data pass purchase journeys and reduced ANR rates.",
      certifiedTag: "Google Play Certified",
      icon: "cell_tower",
      iconColor: "text-sky-600 dark:text-sky-400",
      link: "https://play.google.com/store/apps/details?id=net.omobio.robisc",
      image: "/my_robi.webp",
    },
    {
      id: "airtel",
      name: "My Airtel BD",
      metric: "High Concurrency",
      metricStyle: "bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300",
      tech: "Android Native • Kotlin",
      techColor: "text-indigo-700 dark:text-indigo-400",
      description:
        "Subscriber account management, dynamic campaign flows, and high-volume REST APIs supporting millions of daily transactions.",
      certifiedTag: "Self-Care Core Engine",
      icon: "sim_card",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      link: "https://play.google.com/store/apps/details?id=net.omobio.airtelsc",
      image: "/my_airtel.webp",
    },
    {
      id: "shojja",
      name: "Shojja Hospital Ecosystem",
      metric: "Clinical Portal",
      metricStyle: "bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-400",
      tech: "Flutter • Dart • Riverpod",
      techColor: "text-emerald-700 dark:text-emerald-400",
      description:
        "Multi-tenant healthcare mobile client with OTP authentication, localization, doctor appointment management, and offline caching.",
      certifiedTag: "Doctor & Patient Portal",
      icon: "local_hospital",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      link: "https://github.com/tanvir-shaharia",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 flex flex-col gap-6">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-gray-200/60 dark:border-white/10 pb-4">
          <div>
            <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
              ENTERPRISE &amp; TELECOM CONTRIBUTIONS
            </span>
            <h3 className="font-headline-sm text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-text-primary font-bold mt-1 tracking-tight">
              High-scale production applications maintained and engineered for enterprise clients.
            </h3>
          </div>
          <span className="font-mono-tag text-[11px] text-emerald-700 dark:text-emerald-400 hidden sm:inline-block font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
            PRODUCTION CLIENT DELIVERIES
          </span>
        </div>
      </ScrollReveal>

      {/* 3-Column Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {enterpriseProjects.map((item, idx) => (
          <ScrollReveal key={item.id} delay={idx * 100} className="h-full">
            <div
              className="card-spotlight tilt-card bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-between gap-5 shadow-lg dark:shadow-xl hover:border-sky-500/40 transition-all duration-300 group h-full"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                {/* Card Top: Title & Metric Pill */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-headline-sm text-lg text-gray-900 dark:text-text-primary font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.name}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border font-mono-tag text-xs font-semibold flex-shrink-0 ${item.metricStyle}`}
                  >
                    {item.metric}
                  </span>
                </div>

                {/* Sub-tech tag */}
                <span className={`font-mono-tag text-xs font-semibold ${item.techColor}`}>
                  {item.tech}
                </span>

                {/* Description */}
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Strip with Link */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <span className="font-mono-tag text-xs text-gray-500 dark:text-text-muted font-medium">
                  {item.certifiedTag}
                </span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-on-surface hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-xs font-mono-tag"
                    aria-label={`${item.name} external link`}
                  >
                    <span className={`material-symbols-outlined text-base ${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                ) : (
                  <span className={`material-symbols-outlined text-base ${item.iconColor}`}>
                    {item.icon}
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

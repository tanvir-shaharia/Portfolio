import React from "react";
import { Fade } from "react-reveal";

export default function ArchitectureShowcase() {
  const architectures = [
    {
      id: 1,
      title: "Modern Mobile Architecture (Clean Arch & MVVM)",
      badge: "Android (Kotlin) & Flutter (Dart)",
      icon: "fa-solid fa-cubes-stacked",
      highlights: [
        "Android Native: MVVM pattern with Repository Pattern, ViewModel, StateFlow, and Kotlin Coroutines for asynchronous UI state binding.",
        "Flutter: Clean Architecture (Presentation, Domain, Data layers) using Riverpod and Provider state management trees."
      ],
      verifiedApps: ["My Robi", "My Airtel BD", "Shojja Hospital"]
    },
    {
      id: 2,
      title: "Resilient Networking & API Client Layer",
      badge: "REST APIs & Interceptors",
      icon: "fa-solid fa-network-wired",
      highlights: [
        "Android Native: Type-safe REST communication using Retrofit & OkHttp, handling backend payloads and network data bindings.",
        "Flutter: Dio network clients and Retrofit generator with interceptor-based OTP auth, localization, and offline caching."
      ],
      verifiedApps: ["Shojja Hospital", "CZM Mobile App", "Biyeta"]
    },
    {
      id: 3,
      title: "Hardware & IoT Peripheral Streaming",
      badge: "Bluetooth API & Background Threads",
      icon: "fa-solid fa-microchip",
      highlights: [
        "Bluetooth Hardware API: Native Kotlin lifecycle management to stream, parse, and process raw byte streams from external scale hardware.",
        "Background Service Resilience: Persistent background connection service with auto-reconnection loops handling physical hardware disconnections."
      ],
      verifiedApps: ["Weighing Scale App"]
    }
  ];

  return (
    <div className="mt-14">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-7 bg-gradient-to-b from-brand-500 to-accent-violet rounded-full"></span>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">
            Engineering Architecture & Patterns
          </h3>
          <p className="text-xs text-gray-500 dark:text-zinc-400">
            Verified architectural patterns applied in production mobile applications
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {architectures.map((arch) => (
          <Fade up key={arch.id}>
            <div className="p-6 bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 flex items-center justify-center text-lg flex-shrink-0">
                    <i className={arch.icon}></i>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-indigo-50/80 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 border border-indigo-100 dark:border-zinc-700/60">
                    {arch.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-gray-900 dark:text-zinc-100 mb-3">
                  {arch.title}
                </h4>

                <ul className="space-y-2.5 mb-5 text-xs text-gray-600 dark:text-zinc-300 leading-relaxed">
                  {arch.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-emerald-500 mt-0.5 text-[10px] flex-shrink-0"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-zinc-800/80">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-zinc-500 block mb-2">
                  Applied In Production:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {arch.verifiedApps.map((app, aIdx) => (
                    <span
                      key={aIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

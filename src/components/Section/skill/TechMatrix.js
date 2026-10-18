import React from "react";
import ScrollReveal from "../../ScrollReveal";

export default function TechMatrix() {
  const categories = [
    {
      id: "01",
      tag: "01 // LANGUAGES",
      icon: "code",
      iconColor: "text-secondary",
      skills: [
        "Kotlin (Expert)",
        "Dart (Advanced)",
        "Java",
        "SQL (SQLite)",
        "Shell / Bash",
      ],
    },
    {
      id: "02",
      tag: "02 // FRAMEWORKS",
      icon: "phone_android",
      iconColor: "text-primary",
      skills: [
        "Jetpack Compose",
        "Flutter SDK",
        "Android SDK",
        "Compose Multiplatform",
        "Material 3",
      ],
    },
    {
      id: "03",
      tag: "03 // ARCHITECTURE",
      icon: "schema",
      iconColor: "text-tertiary",
      skills: [
        "Clean Architecture",
        "MVI / MVVM",
        "Dagger-Hilt",
        "Riverpod / BLoC",
        "Room DB / SQLDelight",
        "Coroutines / Flow",
      ],
    },
    {
      id: "04",
      tag: "04 // HARDWARE & CI",
      icon: "build",
      iconColor: "text-secondary-fixed",
      skills: [
        "Bluetooth Low Energy (BLE)",
        "Play Console Pipelines",
        "GitHub Actions CI/CD",
        "Firebase Crashlytics",
        "Git Flow",
      ],
    },
    {
      id: "05",
      tag: "05 // AI & AGENTIC",
      icon: "auto_awesome",
      iconColor: "text-primary-fixed",
      skills: [
        "Practical Prompt Engineering",
        "Antigravity AI Agent",
        "Codex / AI Workflows",
        "AI-Assisted Architecture",
        "Spec & Context Optimization",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="mt-24 sm:mt-32 relative z-10 flex flex-col gap-8"
      aria-label="Technical stack and architecture core"
    >
      {/* Header */}
      <ScrollReveal>
        <div>
          <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
            {"// CORE_COMPETENCY_MATRIX"}
          </span>
          <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
            Technical Stack & Architecture Core
          </h2>
        </div>
      </ScrollReveal>

      {/* 5-Category Core Competency Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 items-stretch">
        {categories.map((cat, idx) => (
          <ScrollReveal
            key={cat.id}
            delay={idx * 60}
            className={`h-full ${cat.id === "05" ? "sm:col-span-2 xl:col-span-1" : ""}`}
          >
            <div
              className={`h-full bg-white/70 dark:bg-surface-glass border rounded-2xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl transition-all duration-300 group hover:-translate-y-0.5 ${
                cat.id === "05"
                  ? "border-primary/40 hover:border-primary/70 shadow-[0_0_20px_rgba(99,102,241,0.12)]"
                  : "border-gray-200/80 dark:border-white/10 hover:border-secondary/40"
              }`}
            >
              <div>
                {/* Category Header */}
                <div
                  className={`flex items-center gap-2 ${cat.iconColor} font-mono-tag text-xs font-semibold uppercase tracking-wider mb-4`}
                >
                  <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                  <span>{cat.tag}</span>
                </div>

                {/* Pills Cloud */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-surface-container-high text-gray-800 dark:text-on-surface font-mono-tag text-xs font-medium border border-gray-200/60 dark:border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

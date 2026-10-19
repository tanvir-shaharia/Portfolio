import React from "react";
import ScrollReveal from "../../ScrollReveal";
import TechIcon from "./TechIcon";
import {
  CORE_CATEGORIES,
  BACKEND_WEB_EXPERIENCE,
  AI_WORKFLOWS,
} from "../../../data/techMatrixData";

export default function TechMatrix() {
  return (
    <section
      id="skills"
      className="mt-6 sm:mt-8 relative z-10 flex flex-col gap-8"
      aria-label="Technical stack and core engineering competency matrix"
    >
      {/* 1. Header */}
      <ScrollReveal>
        <div className="flex flex-col gap-2">
          <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
            {"// TECHNICAL_STACK_MATRIX"}
          </span>
          <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight">
            Technical Stack &amp; Architecture Core
          </h2>
          <p className="font-body-md text-sm sm:text-base text-gray-600 dark:text-text-muted max-w-3xl leading-relaxed">
            Verified production mobile capabilities across native Android, Flutter, reactive
            architectures, and supporting backend systems.
          </p>
        </div>
      </ScrollReveal>

      {/* 2. Primary 6-Category Balanced Grid (3 cols on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
        {CORE_CATEGORIES.map((cat, idx) => (
          <ScrollReveal key={cat.id} delay={idx * 60} className="h-full">
            <div
              className={`h-full bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-5 shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl ${cat.accentBorder}`}
            >
              <div>
                {/* Category Header */}
                <div
                  className={`flex items-center gap-2 ${cat.iconColor} font-mono-tag text-xs font-semibold uppercase tracking-wider mb-2`}
                >
                  <span className="material-symbols-outlined text-lg leading-none select-none" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <span>{cat.tag}</span>
                </div>

                <h3 className="font-headline-sm text-lg sm:text-xl text-gray-900 dark:text-text-primary font-bold">
                  {cat.title}
                </h3>
                <p className="font-body-sm text-xs text-gray-500 dark:text-text-muted mt-1 leading-relaxed">
                  {cat.subtitle}
                </p>

                {/* Skills List with semantic UL / LI */}
                <ul className="flex flex-wrap gap-2 pt-4 mt-3 border-t border-gray-100 dark:border-white/5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-surface-container-high/80 text-gray-800 dark:text-on-surface font-mono-tag text-xs font-medium border border-gray-200/70 dark:border-white/5 transition-all duration-150 hover:border-secondary/40 hover:bg-white dark:hover:bg-surface-container-highest flex items-center gap-1.5 shadow-sm"
                    >
                      <TechIcon icon={skill.icon} />
                      <span>{skill.name}</span>
                      {skill.badge && (
                        <span
                          className={`text-[10px] uppercase font-mono-tag font-semibold px-1.5 py-0.5 rounded ml-1 tracking-wider ${
                            skill.badge === "Academic"
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20"
                              : skill.badge === "Certified"
                              ? "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20"
                              : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
                          }`}
                        >
                          {skill.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* 3. Separate Supporting Category — Backend & Web Development */}
      <ScrollReveal delay={200}>
        <div className="bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-secondary/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-white/5">
            <div>
              <div className="flex items-center gap-2 text-secondary font-mono-tag text-xs font-semibold uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-lg leading-none select-none" aria-hidden="true">
                  {BACKEND_WEB_EXPERIENCE.icon}
                </span>
                <span>{BACKEND_WEB_EXPERIENCE.tag}</span>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-gray-900 dark:text-text-primary font-bold">
                {BACKEND_WEB_EXPERIENCE.title}
              </h3>
              <p className="font-body-sm text-xs text-gray-500 dark:text-text-muted mt-1 max-w-2xl leading-relaxed">
                {BACKEND_WEB_EXPERIENCE.subtitle}
              </p>
            </div>
            <span className="font-mono-tag text-[11px] text-gray-500 dark:text-text-muted px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 self-start md:self-auto">
              Secondary Supporting Experience
            </span>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-5">
            {BACKEND_WEB_EXPERIENCE.skills.map((skill) => (
              <li
                key={skill.id}
                className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-surface-container-high/60 border border-gray-200/60 dark:border-white/5 flex flex-col gap-1.5 transition-all duration-150 hover:border-secondary/40 hover:bg-white dark:hover:bg-surface-container-highest"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-gray-800 dark:text-on-surface font-mono-tag text-xs font-semibold">
                    <TechIcon icon={skill.icon} />
                    <span>{skill.name}</span>
                  </div>
                  {skill.badge && (
                    <span className="text-[10px] uppercase font-mono-tag font-semibold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 tracking-wider">
                      {skill.badge}
                    </span>
                  )}
                </div>
                <p className="font-body-sm text-xs text-gray-600 dark:text-text-muted leading-relaxed">
                  {skill.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* 4. Compact AI-Assisted Engineering Strip */}
      <ScrollReveal delay={260}>
        <div className="bg-white/50 dark:bg-surface-glass/70 border border-gray-200/70 dark:border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-lg transition-all duration-300 hover:border-primary/40">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                {AI_WORKFLOWS.icon}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono-tag text-[11px] text-primary font-bold uppercase tracking-widest">
                  {AI_WORKFLOWS.heading}
                </span>
              </div>
              <p className="font-body-sm text-xs text-gray-600 dark:text-text-muted mt-0.5 leading-relaxed">
                {AI_WORKFLOWS.subtitle}
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {AI_WORKFLOWS.skills.map((skill) => (
              <li
                key={skill.id}
                className="px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-surface-container-high/80 text-gray-800 dark:text-on-surface font-mono-tag text-xs font-medium border border-gray-200/70 dark:border-white/5 transition-all duration-150 hover:border-primary/40 flex items-center gap-1.5 shadow-sm"
              >
                <TechIcon icon={skill.icon} />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}

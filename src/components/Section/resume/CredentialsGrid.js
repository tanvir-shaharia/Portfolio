import React from "react";
import ResumeDownloadBtn from "../../ResumeDownloadBtn";
import ScrollReveal from "../../ScrollReveal";
import { handleCardHoverMove, handleCardHoverLeave } from "../../../utils/motion";

export default function CredentialsGrid() {
  return (
    <section
      id="credentials"
      className="mt-24 sm:mt-32 relative z-10 flex flex-col gap-8"
      aria-label="Academic education and professional certifications"
    >
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200/60 dark:border-white/10 pb-6">
          <div>
            <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
              {"// CREDENTIALS & ACADEMIC FOUNDATION"}
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
              Academic & Professional Credentials
            </h2>
            <p className="font-body-md text-sm sm:text-base text-gray-600 dark:text-text-muted mt-2 max-w-xl leading-relaxed">
              Formal computer science education and verified professional engineering certifications.
            </p>
          </div>

          {/* Quick Resume Download Action */}
          <div className="flex-shrink-0">
            <ResumeDownloadBtn />
          </div>
        </div>
      </ScrollReveal>

      {/* Two-Column Frosted Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* LEFT COLUMN: EDUCATION & ACADEMICS */}
        <ScrollReveal delay={60} className="h-full">
          <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center gap-2 text-secondary font-mono-tag text-xs font-semibold uppercase tracking-wider pb-2 border-b border-gray-200/60 dark:border-white/10">
              <span className="material-symbols-outlined text-lg text-secondary">school</span>
              <span>EDUCATION & ACADEMICS</span>
            </div>

            {/* Academic Card 1: Northern University Bangladesh */}
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-secondary/40 transition-all duration-300 group"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-mono-tag text-xs text-secondary font-semibold">
                    2023 – 2027
                  </span>
                  <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                    Bachelor of Science (B.Sc.) in Computer Science & Engineering
                  </h3>
                  <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                    Northern University Bangladesh (Dhaka, Bangladesh)
                  </span>
                </div>
              </div>
              <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                Advanced system architecture, algorithms, and core engineering principles.
              </p>
            </div>
          </div>

            {/* Academic Card 2: Rajshahi Polytechnic Institute */}
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-primary/40 transition-all duration-300 group"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-primary font-semibold">
                      2018 – 2022
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Diploma in Engineering in Computer Science Technology
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Rajshahi Polytechnic Institute (Rajshahi, Bangladesh)
                    </span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-fixed-dim font-mono-tag text-xs font-semibold whitespace-nowrap shadow-[0_0_12px_rgba(99,102,241,0.25)] flex-shrink-0">
                    CGPA: 3.54 / 4.00
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Software engineering, relational databases, data structures, and network systems.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN: CERTIFICATIONS & SPECIALIZATIONS */}
        <ScrollReveal delay={140} className="h-full">
          <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center gap-2 text-primary font-mono-tag text-xs font-semibold uppercase tracking-wider pb-2 border-b border-gray-200/60 dark:border-white/10">
              <span className="material-symbols-outlined text-lg text-primary">verified</span>
              <span>CERTIFICATIONS & SPECIALIZATIONS</span>
            </div>

            {/* Certification Card 1: Practical Prompt Engineering */}
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-secondary/40 transition-all duration-300 group"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-secondary font-semibold">
                      2026 // PROFESSIONAL TRAINING
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Practical Prompt Engineering & AI Developer Workflows
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Frontend Masters (Online Professional Training)
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 dark:bg-surface-container-high border border-gray-200/60 dark:border-white/10 text-secondary font-mono-tag text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    AI Workflows
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Structured prompt architecture, context optimization, and utilizing AI coding agents into daily workflows.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={process.env.PUBLIC_URL + "/prompt-engineering-dark.pdf"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 dark:bg-surface-glass-subtle border border-gray-200 dark:border-white/20 text-gray-800 dark:text-on-surface font-mono-tag text-xs font-semibold shadow-sm hover:border-secondary/40 hover:text-secondary hover:bg-gray-200 dark:hover:bg-surface-container hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-sm text-secondary">open_in_new</span>
                  <span>View Credential (PDF) ↗</span>
                </a>
              </div>
            </div>

            {/* Certification Card 2: Professional Certificate in Android */}
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-primary/40 transition-all duration-300 group"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-primary font-semibold">
                      3 Months Intensive Program (Dec 2022)
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Professional Certificate in Android App Development
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Creative IT Institute (Dhaka, Bangladesh)
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-mono-tag text-xs font-semibold whitespace-nowrap shadow-[0_0_12px_rgba(6,182,212,0.25)] flex-shrink-0">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    <span>Verified Credential</span>
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Modern Android SDK, Java/Kotlin architecture, Material Design, and Play Store release lifecycle.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

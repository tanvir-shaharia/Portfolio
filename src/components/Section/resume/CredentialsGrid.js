import React, { useState, useEffect } from "react";
import ResumeDownloadBtn from "../../ResumeDownloadBtn";
import ScrollReveal from "../../ScrollReveal";
import { handleCardHoverMove, handleCardHoverLeave } from "../../../utils/motion";

export default function CredentialsGrid() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      return (
        document.documentElement.classList.contains("dark") ||
        !document.documentElement.classList.contains("light")
      );
    }
    return true;
  });

  useEffect(() => {
    const updateTheme = () => {
      if (typeof document !== "undefined") {
        setIsDark(
          document.documentElement.classList.contains("dark") ||
            !document.documentElement.classList.contains("light")
        );
      }
    };

    updateTheme();

    if (typeof MutationObserver !== "undefined") {
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);

  const promptPdf =
    process.env.PUBLIC_URL +
    (isDark ? "/prompt-engineering-dark.pdf" : "/prompt-engineering.pdf");

  const javaPdf =
    process.env.PUBLIC_URL +
    (isDark ? "/java-dark.pdf" : "/java.pdf");

  return (
    <section
      id="credentials"
      className="mt-6 sm:mt-8 relative z-10 flex flex-col gap-8"
      aria-label="Academic education and professional certifications"
    >
      {/* Section Header */}
      <ScrollReveal className="relative z-30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200/60 dark:border-white/10 pb-6 relative z-30">
          <div>
            <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
              CREDENTIALS &amp; ACADEMIC FOUNDATION
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
              Academic &amp; Professional Credentials
            </h2>
            <p className="font-body-md text-sm sm:text-base text-gray-600 dark:text-text-muted mt-2 max-w-xl leading-relaxed">
              Formal computer science education and verified professional engineering certifications.
            </p>
          </div>

          {/* Quick Resume Download Action */}
          <div className="flex-shrink-0 relative z-30">
            <ResumeDownloadBtn />
          </div>
        </div>
      </ScrollReveal>

      {/* 1. HORIZONTAL ROW: EDUCATION & ACADEMICS (2 Balanced Columns) */}
      <div className="flex flex-col gap-6 relative z-10">
        <ScrollReveal delay={60}>
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-mono-tag text-xs font-semibold uppercase tracking-wider pb-2 border-b border-gray-200/60 dark:border-white/10">
            <span className="material-symbols-outlined text-lg text-sky-600 dark:text-sky-400">school</span>
            <span>EDUCATION &amp; ACADEMICS</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Academic Card 1: Northern University Bangladesh */}
          <ScrollReveal delay={80} className="h-full">
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-sky-500/40 transition-all duration-300 group h-full"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold">
                      2023 – 2027
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Bachelor of Science (B.Sc.) in Computer Science &amp; Engineering
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
          </ScrollReveal>

          {/* Academic Card 2: Rajshahi Polytechnic Institute */}
          <ScrollReveal delay={120} className="h-full">
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-indigo-500/40 transition-all duration-300 group h-full"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-indigo-700 dark:text-indigo-400 font-semibold">
                      2018 – 2022
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Diploma in Engineering in Computer Science Technology
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Rajshahi Polytechnic Institute (Rajshahi, Bangladesh)
                    </span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono-tag text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    CGPA: 3.54 / 4.00
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Software engineering, relational databases, data structures, and network systems.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. HORIZONTAL ROW: CERTIFICATIONS & SPECIALIZATIONS (3 Balanced Columns) */}
      <div className="flex flex-col gap-6 pt-4">
        <ScrollReveal delay={140}>
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-mono-tag text-xs font-semibold uppercase tracking-wider pb-2 border-b border-gray-200/60 dark:border-white/10">
            <span className="material-symbols-outlined text-lg text-indigo-600 dark:text-indigo-400">verified</span>
            <span>CERTIFICATIONS &amp; SPECIALIZATIONS</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Certification Card 1: Java Fundamentals */}
          <ScrollReveal delay={160} className="h-full">
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-emerald-500/40 transition-all duration-300 group h-full"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                      OCT 2026 // CORE JVM &amp; BACKEND
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Java Fundamentals &amp; Object-Oriented Architecture
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Master.dev / Frontend Masters (Instructor: Angie Jones)
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono-tag text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    Core Java
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Deep-dive into core Java mechanics, OOP design patterns, collections framework, exception handling, and JVM memory lifecycle.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={javaPdf}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Java Fundamentals Credential (PDF)"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-on-surface font-mono-tag text-xs font-semibold shadow-sm hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-sm text-emerald-600 dark:text-emerald-400">open_in_new</span>
                  <span>View Credential (PDF) ↗</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Certification Card 2: Practical Prompt Engineering */}
          <ScrollReveal delay={190} className="h-full">
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-sky-500/40 transition-all duration-300 group h-full"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold">
                      2026 // PROFESSIONAL TRAINING
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Practical Prompt Engineering &amp; AI Developer Workflows
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Frontend Masters (Online Professional Training)
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-400 font-mono-tag text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    AI Workflows
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Structured prompt architecture, context optimization, and utilizing AI coding agents into daily workflows.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={promptPdf}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Prompt Engineering Credential (PDF)"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-on-surface font-mono-tag text-xs font-semibold shadow-sm hover:border-sky-500/40 hover:text-sky-700 dark:hover:text-sky-400 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-sm text-sky-600 dark:text-sky-400">open_in_new</span>
                  <span>View Credential (PDF) ↗</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Certification Card 3: Professional Certificate in Android */}
          <ScrollReveal delay={220} className="h-full">
            <div
              className="card-spotlight tilt-card bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between gap-4 shadow-xl hover:border-indigo-500/40 transition-all duration-300 group h-full"
              onMouseMove={handleCardHoverMove}
              onMouseLeave={handleCardHoverLeave}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-tag text-xs text-indigo-700 dark:text-indigo-400 font-semibold">
                      3 Months Intensive Program (Dec 2022)
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-gray-900 dark:text-text-primary font-bold tracking-tight">
                      Professional Certificate in Android App Development
                    </h3>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-600 dark:text-on-surface-variant font-medium">
                      Creative IT Institute (Dhaka, Bangladesh)
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono-tag text-xs font-semibold whitespace-nowrap flex-shrink-0">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    <span>Verified Credential</span>
                  </span>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted border-t border-gray-100 dark:border-white/5 pt-3 leading-relaxed">
                  Modern Android SDK, Java/Kotlin architecture, Material Design, and Play Store release lifecycle.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

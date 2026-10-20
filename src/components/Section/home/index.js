import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portraitPic from "../../../assets/images/tanvir_shaharia.png";
import ResumeDownloadBtn from "../../ResumeDownloadBtn";
import MetricsBar from "./MetricsBar";
import EcosystemBar from "./EcosystemBar";
import CopyButton from "../../CopyButton";
import { GitHubIcon, LinkedInIcon, GooglePlayIcon, GmailIcon, XIcon } from "../../SocialBrandIcon";
import { handleMagneticMove, handleMagneticLeave } from "../../../utils/motion";

const HEADLINE_SPECIALTIES = [
  "Android Native (Kotlin & Jetpack Compose)",
  "Cross-Platform Systems (Flutter & Dart)",
  "Clean Architecture & Reactive Coroutines",
  "Offline-First & High-Throughput Engines",
];

export default function HomeHero() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setSpecialtyIndex((prev) => (prev + 1) % HEADLINE_SPECIALTIES.length);
        setIsFading(false);
      }, 300);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden pt-24 pb-10 lg:pt-32 lg:pb-12">
      {/* Ambient Radial Blur Halos with Drift */}
      <div className="absolute top-12 left-1/4 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-orb-drift-1"></div>
      <div className="absolute top-1/2 -right-24 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-orb-drift-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <section
          id="home"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Live Status Pill Badge with Restrained Radar Pulse */}
            <div className="flex items-center">
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-surface-glass border border-tertiary/30 backdrop-blur-xl shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="radar-ring absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                </span>
                <span className="font-mono-tag text-xs text-tertiary font-semibold tracking-wide uppercase">
                  Available for Remote & High-Impact Mobile Roles
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] text-gray-900 dark:text-text-primary tracking-tight font-extrabold">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800 dark:from-indigo-400 dark:via-sky-400 dark:to-teal-300 bg-clip-text text-transparent">
                  MD Tanvir Shaharia
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <h2 className="font-headline-sm text-base sm:text-lg text-gray-700 dark:text-on-surface flex items-center gap-1.5 font-bold">
                  <span className="text-sky-700 dark:text-sky-400 font-mono-code font-bold">&gt;</span>
                  <span>Software Engineer</span>
                </h2>
                <div className="min-h-[30px] flex items-center">
                  {/* Stable accessible text for screen readers */}
                  <span className="sr-only">
                    Specialized in Android Native (Kotlin & Jetpack Compose), Cross-Platform Systems (Flutter & Dart), Clean Architecture & Reactive Coroutines, and Offline-First & High-Throughput Engines.
                  </span>
                  {/* Interactive Full-Line Smooth Cycling Rotator */}
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-900/30 border border-indigo-500/20 dark:border-indigo-500/40 text-indigo-800 dark:text-indigo-200 font-mono-tag text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-xl min-h-[34px] overflow-hidden"
                  >
                    <span className="text-sky-600 dark:text-sky-400 font-bold font-mono flex-shrink-0">
                      {"//"}
                    </span>
                    <span
                      className={`font-mono font-semibold transition-all duration-300 ease-out inline-block ${
                        isFading
                          ? "opacity-0 -translate-y-1.5 scale-[0.98]"
                          : "opacity-100 translate-y-0 scale-100"
                      }`}
                    >
                      {HEADLINE_SPECIALTIES[specialtyIndex]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competency Static Skill Tags (Instant Recruiter Scanability) */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5" aria-label="Core Technical Competencies">
              <span className="font-mono-tag text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-zinc-200 font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Kotlin
              </span>
              <span className="font-mono-tag text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-zinc-200 font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Jetpack Compose
              </span>
              <span className="font-mono-tag text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-zinc-200 font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Flutter
              </span>
              <span className="font-mono-tag text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-zinc-200 font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Clean Architecture
              </span>
            </div>

            {/* Pitch Bio */}
            <p className="font-body-lg text-base sm:text-lg text-gray-600 dark:text-text-muted max-w-2xl leading-relaxed">
              Software Engineer with 3+ years of professional production experience building
              scalable, mission-critical mobile applications. Specialized in Android Native (Kotlin,
              Jetpack Compose), Flutter (Dart), Clean Architecture, and offline-first deterministic
              engines powering millions of users across telecom, healthcare, and finance.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 relative z-30">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onBlur={handleMagneticLeave}
                className="btn-magnetic inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-label-ui text-sm font-semibold shadow-md hover:shadow-lg"
              >
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>

              <ResumeDownloadBtn />

              <Link
                to="/project-estimator"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onBlur={handleMagneticLeave}
                className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-surface-glass-subtle border border-sky-600/30 dark:border-sky-400/30 text-sky-700 dark:text-sky-300 font-label-ui text-sm font-semibold hover:bg-sky-50 dark:hover:bg-sky-500/10 hover:border-sky-600/60 dark:hover:border-sky-400/60 shadow-sm"
              >
                <span className="material-symbols-outlined text-lg">calculate</span>
                <span>Estimate Project Cost</span>
              </Link>
            </div>

            {/* Social & Direct Profile Strip */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 text-xs font-mono-tag">
              <span className="text-gray-500 dark:text-text-muted font-medium">
                PROFILES &amp; CONNECT:
              </span>
              <div className="flex items-center gap-2">
                <a
                  aria-label="GitHub Profile"
                  href="https://github.com/tanvir-shaharia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:border-gray-400 dark:hover:border-white/30 hover:scale-105 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <GitHubIcon className="w-4 h-4 text-gray-900 dark:text-white" />
                </a>
                <a
                  aria-label="LinkedIn Profile"
                  href="https://www.linkedin.com/in/tanvir-shaharia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#0A66C2]/50 hover:scale-105 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  aria-label="X (formerly Twitter) Profile"
                  href="https://x.com/tanvir_shaharia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-white/30 hover:scale-105 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <XIcon className="w-3.5 h-3.5 text-gray-900 dark:text-white" />
                </a>
                <a
                  aria-label="Google Play Store Profile"
                  href="https://play.google.com/store/apps/dev?id=7594744948572165866"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-sky-500/50 hover:scale-105 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <GooglePlayIcon className="w-4 h-4" />
                </a>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 text-gray-700 dark:text-on-surface-variant hover:border-sky-500/50 transition-all shadow-sm text-xs">
                  <a
                    href="mailto:tanvirshaharia120@gmail.com"
                    className="inline-flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <GmailIcon className="w-4 h-4" />
                    <span className="font-medium text-gray-900 dark:text-white">tanvirshaharia120@gmail.com</span>
                  </a>
                  <CopyButton text="tanvirshaharia120@gmail.com" label="email" className="ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Glass Frame Portrait (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Ambient Refined Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-transparent rounded-full blur-2xl -z-10 pointer-events-none"></div>

            <div className="relative w-full max-w-sm sm:max-w-md bg-white/80 dark:bg-surface-glass border border-gray-200 dark:border-white/15 backdrop-blur-2xl rounded-3xl p-3 sm:p-4 shadow-2xl overflow-visible group">
              {/* Glass Top Specular Shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-surface-container-lowest">
                <img
                  src={portraitPic}
                  alt="MD Tanvir Shaharia - Software Engineer (Android & Flutter)"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Overlaid Glass Badge 1 (Floating Top Right) */}
              <div className="animate-float-slow absolute -top-3 -right-2 sm:-top-3 sm:-right-4 bg-white/95 dark:bg-surface-panel/95 border border-sky-500/30 dark:border-sky-400/30 backdrop-blur-xl rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-lg flex items-center gap-3 z-20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 dark:bg-sky-400/10 flex items-center justify-center text-sky-700 dark:text-sky-400 border border-sky-500/20 dark:border-sky-400/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">devices</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm sm:text-base text-gray-900 dark:text-text-primary font-bold tracking-tight">
                    10+ Apps
                  </span>
                  <span className="font-mono-tag text-[10px] sm:text-xs text-gray-600 dark:text-on-surface-variant font-medium">
                    Shipped to Production
                  </span>
                </div>
              </div>

              {/* Overlaid Glass Badge 2 (Floating Bottom Left) */}
              <div className="animate-float-slow-reverse absolute -bottom-3 -left-2 sm:-bottom-3 sm:-left-4 bg-white/95 dark:bg-surface-panel/95 border border-indigo-500/30 dark:border-indigo-400/30 backdrop-blur-xl rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-lg flex items-center gap-3 z-20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-400/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">offline_bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary font-semibold">
                    Clean Architecture
                  </span>
                  <span className="font-mono-tag text-[10px] sm:text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                    Kotlin + Flutter Offline-First
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Telemetry Metrics & Enterprise Ecosystems */}
        <MetricsBar />
        <EcosystemBar />
      </div>
    </div>
  );
}

import React from "react";
import Typed from "react-typed";
import portraitPic from "../../../assets/images/tanvir_shaharia.png";
import ResumeDownloadBtn from "../../ResumeDownloadBtn";
import MetricsBar from "./MetricsBar";
import EcosystemBar from "./EcosystemBar";
import { handleMagneticMove, handleMagneticLeave } from "../../../utils/motion";

export default function HomeHero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20">
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
                <span className="bg-gradient-to-r from-primary-container via-secondary to-tertiary-fixed-dim bg-clip-text text-transparent">
                  MD Tanvir Shaharia
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <h2 className="font-headline-sm text-base sm:text-lg text-gray-700 dark:text-on-surface flex items-center gap-1.5 font-bold">
                  <span className="text-secondary font-mono-code font-bold">&gt;</span>
                  <span>Software Engineer</span>
                </h2>
                <div className="min-h-[30px] flex items-center">
                  {/* Stable accessible text for screen readers */}
                  <span className="sr-only">
                    Specialized in Android Native (Kotlin & Jetpack Compose), Cross-Platform Systems (Flutter & Dart), Clean Architecture & Reactive Coroutines, and Offline-First & High-Throughput Engines.
                  </span>
                  {/* Interactive Cycling Typewriter */}
                  <div aria-hidden="true" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary border border-primary/30 font-mono-tag text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <span className="text-secondary font-bold font-mono">{"//"}</span>
                    <Typed
                      strings={[
                        "Android Native (Kotlin & Jetpack Compose)",
                        "Cross-Platform Systems (Flutter & Dart)",
                        "Clean Architecture & Reactive Coroutines",
                        "Offline-First & High-Throughput Engines",
                      ]}
                      typeSpeed={40}
                      backSpeed={24}
                      backDelay={2200}
                      loop
                      cursorChar="▍"
                      className="text-primary dark:text-primary-fixed-dim font-mono font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pitch Bio */}
            <p className="font-body-lg text-base sm:text-lg text-gray-600 dark:text-text-muted max-w-2xl leading-relaxed">
              Software Engineer with 3+ years of professional production experience building
              scalable, mission-critical mobile applications. Specialized in Android Native (Kotlin,
              Jetpack Compose), Flutter (Dart), Clean Architecture, and offline-first deterministic
              engines powering millions of users across telecom, healthcare, and finance.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onBlur={handleMagneticLeave}
                className="btn-magnetic inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-container via-indigo-600 to-secondary text-white font-label-ui text-sm font-semibold shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:shadow-[0_0_32px_rgba(6,182,212,0.6)]"
              >
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>

              <ResumeDownloadBtn />

              <a
                href="#products"
                onClick={(e) => scrollToSection(e, "products")}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onBlur={handleMagneticLeave}
                className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-glass-subtle border border-secondary/30 text-secondary font-label-ui text-sm font-semibold hover:bg-secondary/10 hover:border-secondary/60"
              >
                <span className="material-symbols-outlined text-lg">code_blocks</span>
                <span>Explore Shipped Apps</span>
              </a>
            </div>

            {/* Social & Direct Profile Strip */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 text-xs font-mono-tag">
              <span className="text-gray-500 dark:text-text-muted font-medium">
                {"// REPOSITORIES & CONNECT:"}
              </span>
              <div className="flex items-center gap-2">
                <a
                  aria-label="GitHub Profile"
                  href="https://github.com/tanvir-shaharia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
                <a
                  aria-label="LinkedIn Profile"
                  href="https://www.linkedin.com/in/tanvir-shaharia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <i className="fa-brands fa-linkedin text-sm"></i>
                </a>
                <a
                  aria-label="Google Play Store Profile"
                  href="https://play.google.com/store/apps/dev?id=7594744948572165866"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <i className="fa-brands fa-google-play text-sm"></i>
                </a>
                <a
                  href="mailto:tanvirshaharia120@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 text-gray-700 dark:text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all shadow-sm text-xs"
                >
                  <span className="material-symbols-outlined text-sm text-tertiary">mail</span>
                  <span>tanvirshaharia120@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Glass Frame Portrait (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Ambient Rotating Radial & Conic Cyber-Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/35 via-secondary/25 to-tertiary/20 rounded-full blur-3xl opacity-75 -z-10 animate-spin-slow pointer-events-none"></div>

            <div className="relative w-full max-w-sm sm:max-w-md bg-white/70 dark:bg-surface-glass border border-gray-200 dark:border-white/15 backdrop-blur-2xl rounded-3xl p-3 sm:p-4 shadow-2xl overflow-visible group">
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
              <div className="animate-float-slow absolute -top-3 -right-2 sm:-top-3 sm:-right-4 bg-white/95 dark:bg-surface-panel/95 border border-secondary/40 backdrop-blur-xl rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 z-20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/30 flex-shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">devices</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm sm:text-base text-gray-900 dark:text-text-primary font-bold tracking-tight">
                    10+ Apps
                  </span>
                  <span className="font-mono-tag text-[10px] sm:text-xs text-gray-500 dark:text-on-surface-variant font-medium">
                    Shipped to Production
                  </span>
                </div>
              </div>

              {/* Overlaid Glass Badge 2 (Floating Bottom Left) */}
              <div className="animate-float-slow-reverse absolute -bottom-3 -left-2 sm:-bottom-3 sm:-left-4 bg-white/95 dark:bg-surface-panel/95 border border-primary/40 backdrop-blur-xl rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 z-20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-fixed border border-primary/30 flex-shrink-0">
                  <span className="material-symbols-outlined text-lg sm:text-xl">offline_bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary font-semibold">
                    Clean Architecture
                  </span>
                  <span className="font-mono-tag text-[10px] sm:text-xs text-tertiary font-medium">
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

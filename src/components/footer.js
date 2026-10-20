import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TechLogo from "./TechLogo";
import {
  GitHubIcon,
  LinkedInIcon,
  GooglePlayIcon,
  TelegramIcon,
  GmailIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "./SocialBrandIcon";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const handleNavClick = (e, target, fallbackPath) => {
    e.preventDefault();
    if (path === "/") {
      if (target === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <footer className="relative z-10 w-full bg-white/80 dark:bg-surface-container-lowest/80 backdrop-blur-2xl border-t border-gray-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col gap-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Elevator Bio (Col 1 & 2) */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <TechLogo className="w-8 h-8" />
              <span className="font-headline-sm text-lg sm:text-xl font-bold text-gray-900 dark:text-text-primary tracking-tight">
                Tanvir Shaharia
              </span>
              <span className="font-mono-tag text-xs px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 font-semibold">
                v4.2.0
              </span>
            </div>

            <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted max-w-md leading-relaxed">
              Software Engineer specializing in Native Android (Kotlin, Jetpack Compose, Coroutines),
              Flutter frameworks, Clean Architecture, and high-performance mobile applications.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono-tag text-xs text-gray-600 dark:text-text-muted">
                STATUS: AVAILABLE FOR CONTRACTS &amp; ROLES
              </span>
            </div>
          </div>

          {/* Quick Index Links (Col 3) */}
          <div className="flex flex-col gap-3">
            <span className="font-label-ui text-xs font-bold text-gray-900 dark:text-text-primary uppercase tracking-wider">
              Index
            </span>
            <div className="flex flex-col gap-2 text-xs font-body-sm">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home", "/")}
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Overview
              </a>
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "products", "/projects")}
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Production Builds
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience", "/resume")}
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Timeline
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills", "/skill")}
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Architecture Core
              </a>
              <Link
                to="/project-estimator"
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Project Cost Estimator
              </Link>
              <Link
                to="/pocketlog/privacy"
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                PocketLog Privacy Policy
              </Link>
              <Link
                to="/pocketlog/terms"
                className="text-gray-600 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                PocketLog Terms of Service
              </Link>
            </div>
          </div>

          {/* Connectors & Social Channels (Col 4) */}
          <div className="flex flex-col gap-3">
            <span className="font-label-ui text-xs font-bold text-gray-900 dark:text-text-primary uppercase tracking-wider">
              Connectors
            </span>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono-tag text-xs text-emerald-700 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                  DIRECT CONNECT
                </span>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href="https://github.com/tanvir-shaharia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:border-gray-400 dark:hover:border-white/30 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <GitHubIcon className="w-5 h-5 text-gray-900 dark:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanvir-shaharia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#0A66C2]/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/tanvir_shaharia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (formerly Twitter) Profile"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-white/30 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <XIcon className="w-4 h-4 text-gray-900 dark:text-white" />
                </a>
                <a
                  href="https://www.facebook.com/tanvir.softwaredev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Page"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#1877F2]/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/tanvir_shaharia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/tanvir_shaharia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#24A1DE]/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <TelegramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://play.google.com/store/apps/dev?id=7594744948572165866"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Play Store Profile"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-sky-500/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <GooglePlayIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:tanvirshaharia120@gmail.com"
                  aria-label="Direct Email"
                  className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-sky-500/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <GmailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200/60 dark:border-white/5">
          <span className="font-mono-tag text-xs text-gray-500 dark:text-text-muted text-center sm:text-left">
            © {new Date().getFullYear()} MD Tanvir Shaharia. All rights reserved. Built for ultra-scale mobile engineering.
          </span>
          <div className="flex items-center gap-5">
            <span className="font-mono-tag text-xs text-gray-500 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-default">
              VERIFIED_PORTFOLIO
            </span>
            <span className="font-mono-tag text-xs text-gray-500 dark:text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-default">
              CLEAN_ARCHITECTURE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

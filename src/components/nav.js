import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import TechLogo from "./TechLogo";
import { handleMagneticMove, handleMagneticLeave } from "../utils/motion";

export default function Navbar({ theme, toggleDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const navLinks = [
    { name: "Home", target: "home", fallbackPath: "/" },
    { name: "Products", target: "products", fallbackPath: "/projects" },
    { name: "Experience", target: "experience", fallbackPath: "/resume" },
    { name: "Skills", target: "skills", fallbackPath: "/skill" },
    { name: "Services", target: "services", fallbackPath: "/" },
    { name: "Credentials", target: "credentials", fallbackPath: "/resume" },
    { name: "Contact", target: "contact", fallbackPath: "/contact" },
  ];

  // 1. Scroll Progress Calculation (Passive RAF)
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress =
        docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2. Active Section Scroll Spy via IntersectionObserver
  useEffect(() => {
    if (path !== "/") {
      return;
    }

    const sectionIds = [
      "home",
      "products",
      "experience",
      "skills",
      "services",
      "credentials",
      "contact",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0px -50% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Edge handling for top of page and footer bottom
    const handleEdgeScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY < 120) {
        setActiveSection("home");
      } else if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleEdgeScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleEdgeScroll);
    };
  }, [path]);

  const handleNavClick = (link) => {
    setOpenMenu(false);
    if (path === "/") {
      setActiveSection(link.target);
      if (link.target === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(link.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(link.fallbackPath);
    }
  };

  return (
    <header className="obsidian-navbar fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand & Telemetry Badge */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            to="/"
            onClick={() => {
              if (path === "/") {
                setActiveSection("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 group"
          >
            <TechLogo className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight transition-colors group-hover:text-primary">
                Tanvir Shaharia
              </span>
              <span className="font-mono-tag text-[10px] sm:text-[11px] text-secondary font-semibold uppercase tracking-widest">
                {"// MOBILE_ENGINEER"}
              </span>
            </div>
          </Link>

          {/* Live Telemetry Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/70 dark:bg-white/5 border border-gray-200/60 dark:border-tertiary/20">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="radar-ring absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-mono-tag text-[11px] text-tertiary tracking-wider font-semibold">
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links with Active Section Highlight */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link, idx) => {
            const isActive = path === "/" && activeSection === link.target;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`px-3.5 py-2 rounded-lg font-label-ui text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary/15 text-primary dark:text-secondary border border-primary/30 dark:border-secondary/30 shadow-[0_0_12px_rgba(99,102,241,0.2)] font-semibold"
                    : "text-gray-700 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/10 font-medium border border-transparent"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Theme switch + Let's Talk CTA + Mobile Toggle) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="p-2 rounded-lg text-gray-600 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer">
            <DarkModeSwitch
              checked={theme === undefined ? true : theme === "dark"}
              onChange={toggleDarkMode}
              size={20}
              moonColor="#38bdf8"
              sunColor="#f59e0b"
              aria-label="Toggle dark mode"
            />
          </div>

          <button
            type="button"
            onClick={() => handleNavClick({ target: "contact", fallbackPath: "/contact" })}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            onBlur={handleMagneticLeave}
            className="btn-magnetic hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-label-ui text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_28px_rgba(99,102,241,0.6)] cursor-pointer"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle navigation menu"
            aria-expanded={openMenu}
          >
            <i className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Indicator (Top Viewport Accent Bar) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-[width] duration-75 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Drawer Menu */}
      {openMenu && (
        <div className="obsidian-drawer lg:hidden backdrop-blur-2xl border-b border-gray-200/80 dark:border-white/10 px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-gray-100 dark:border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-mono-tag text-xs text-tertiary font-semibold uppercase tracking-wider">
                Available for Remote Roles
              </span>
            </div>

            {navLinks.map((link, idx) => {
              const isActive = path === "/" && activeSection === link.target;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-label-ui text-sm transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary/15 text-primary dark:text-secondary border-l-2 border-primary dark:border-secondary font-semibold pl-4"
                      : "font-medium text-gray-800 dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => handleNavClick({ target: "contact", fallbackPath: "/contact" })}
              className="mt-3 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-label-ui text-sm font-semibold shadow-lg text-center"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

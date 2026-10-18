import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import TechLogo from "./TechLogo";
import { handleMagneticMove, handleMagneticLeave } from "../utils/motion";

export default function Navbar({ theme, toggleDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
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

  const handleNavClick = (link) => {
    setOpenMenu(false);
    if (path === "/") {
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
              if (path === "/") window.scrollTo({ top: 0, behavior: "smooth" });
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

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleNavClick(link)}
              className="px-3.5 py-2 rounded-lg font-label-ui text-sm text-gray-700 dark:text-zinc-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all cursor-pointer font-medium"
            >
              {link.name}
            </button>
          ))}
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

            {navLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleNavClick(link)}
                className="w-full text-left px-4 py-3 rounded-xl font-label-ui text-sm font-medium text-gray-800 dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}

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

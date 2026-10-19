import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "../assets/css/whatsappWidget.css";
import { prefersReducedMotion } from "../utils/motion";
import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";
import Footer from "./footer";
import Navbar from "./nav";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(localStorage.theme);
  const [loading, setLoading] = useState(true);

  const { scrollY } = useWindowScrollPositions();
  const colorTheme = theme === "dark" ? "light" : "dark";

  const location = useLocation();
  const path = location.pathname;

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme === undefined ? "dark" : theme);

    localStorage.setItem("theme", theme === undefined ? "dark" : theme);
    setLoading(false);
  }, [colorTheme, theme]);

  return (
    <div>
      {!loading && (
        <div className="relative text-gray-900 dark:text-on-surface bg-surface-canvas/5 dark:bg-surface-canvas transition-all overflow-hidden font-sans min-h-screen">
          {/* Ambient Lighting & Cyber Grid Atmosphere */}
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute -top-40 left-1/4 w-[550px] h-[550px] rounded-full bg-primary/10 blur-[130px] animate-orb-drift-1"></div>
            <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px] animate-orb-drift-2"></div>
            <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-tertiary/5 blur-[140px] animate-orb-drift-3"></div>
            <div className="absolute inset-0 ambient-grid opacity-50 dark:opacity-100"></div>
          </div>

          <Navbar theme={theme} toggleDarkMode={toggleDarkMode} />
          <main className="relative z-10 w-full min-h-[calc(100vh-16rem)]">
            {children}
          </main>
          <Footer />

          {path === "/" ? (
            scrollY > 90 && (
              <WhatsAppWidget
                phoneNumber="+8801644566945"
                companyName="MD Tanvir Shaharia"
                replyTimeText="Typically replies within an hour"
                sendButton="send"
                message="Hello! how can I help you?"
                open={false}
              />
            )
          ) : (
            <WhatsAppWidget
              phoneNumber="+8801644566945"
              companyName="MD Tanvir Shaharia"
              replyTimeText="Typically replies within an hour"
              sendButton="send"
              message="Hello! how can I help you?"
              open={false}
            />
          )}

          {/* Discreet Obsidian Glass Back-to-Top Button */}
          <button
            type="button"
            id="topButton"
            className={`fixed z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/85 dark:bg-surface-glass/95 border border-gray-200/80 dark:border-white/15 backdrop-blur-xl shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-gray-700 dark:text-zinc-200 hover:text-secondary dark:hover:text-secondary flex items-center justify-center bottom-[7.6rem] right-4 sm:bottom-[3.4rem] sm:right-24 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none cursor-pointer ${
              scrollY > 400 ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            onClick={backToTop}
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_upward</span>
          </button>
        </div>
      )}
    </div>
  );
}

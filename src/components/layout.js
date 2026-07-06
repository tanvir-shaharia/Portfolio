import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "../assets/css/whatsappWidget.css";
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className="relative dark:text-white bg-gray-50 dark:bg-[#09090b] transition-all overflow-hidden font-nunito">
          <Navbar theme={theme} toggleDarkMode={toggleDarkMode} />
          {children}
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

          <button
            x-data="topBtn"
            id="topButton"
            className={`fixed z-10 p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white text-black rounded-full shadow-md bottom-[7.4rem] right-[13px] sm:bottom-[3.4rem] sm:right-24 hover:-translate-y-1 transition-all duration-300 ${
              scrollY > 250 ? "block" : "hidden"
            }`}
            onClick={backToTop}
            aria-label="Back to top"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

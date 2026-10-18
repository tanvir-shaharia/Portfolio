import React, { useState, useRef, useEffect } from "react";
import { handleMagneticMove, handleMagneticLeave } from "../utils/motion";

export default function ResumeDownloadBtn({ className = "" }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseMove={handleMagneticMove}
        onMouseLeave={handleMagneticLeave}
        onBlur={handleMagneticLeave}
        className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/80 hover:bg-white dark:bg-surface-glass dark:hover:bg-surface-glass-subtle border border-gray-200/80 dark:border-white/15 text-gray-800 dark:text-on-surface font-label-ui text-sm font-medium hover:border-secondary/40 hover:text-secondary dark:hover:text-secondary shadow-sm backdrop-blur-xl cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined text-lg text-secondary">download</span>
        <span>Download Resume (PDF)</span>
        <i
          className={`fa-solid fa-chevron-down text-[10px] text-gray-500 dark:text-on-surface-variant transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {open && (
        <div className="origin-top-left sm:origin-top-right absolute left-0 sm:right-0 mt-2 w-72 rounded-2xl shadow-2xl bg-white/95 dark:bg-surface-panel/95 border border-gray-200/80 dark:border-white/15 z-50 p-2.5 space-y-1.5 backdrop-blur-2xl animate-fade-in">
          <div className="px-3 py-1 text-[10px] font-mono-tag text-secondary uppercase tracking-wider border-b border-gray-100 dark:border-white/5 pb-1.5 mb-1">
            {"// Select Targeted Track"}
          </div>

          <a
            href={process.env.PUBLIC_URL + "/Resume_Android_ATS.pdf"}
            download="MD_Tanvir_Shaharia_Android_Resume.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-800 dark:text-on-surface hover:bg-gray-100 dark:hover:bg-white/[0.06] hover:text-secondary dark:hover:text-secondary transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-sm flex-shrink-0">
              <i className="fa-brands fa-android"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-gray-900 dark:text-text-primary">Android Native Resume</span>
              <span className="text-[10px] text-gray-500 dark:text-text-muted font-normal">Kotlin, Jetpack, MVVM (PDF)</span>
            </div>
          </a>

          <a
            href={process.env.PUBLIC_URL + "/Resume_Flutter_ATS.pdf"}
            download="MD_Tanvir_Shaharia_Flutter_Resume.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-800 dark:text-on-surface hover:bg-gray-100 dark:hover:bg-white/[0.06] hover:text-secondary dark:hover:text-secondary transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-sm flex-shrink-0">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-gray-900 dark:text-text-primary">Flutter Resume</span>
              <span className="text-[10px] text-gray-500 dark:text-text-muted font-normal">Dart, Riverpod, Clean Arch (PDF)</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

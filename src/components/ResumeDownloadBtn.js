import React, { useState, useRef, useEffect } from "react";
import { handleMagneticMove, handleMagneticLeave } from "../utils/motion";

export default function ResumeDownloadBtn({ className = "" }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);

  // Clean up listeners on unmount or when closed
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleDocumentKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [open]);

  const handleTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => {
        if (itemRefs.current[0]) {
          itemRefs.current[0].focus();
        }
      }, 50);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => {
        const lastIdx = itemRefs.current.length - 1;
        if (itemRefs.current[lastIdx]) {
          itemRefs.current[lastIdx].focus();
        }
      }, 50);
    }
  };

  const handleItemKeyDown = (e, index) => {
    const totalItems = 2; // Android and Flutter options
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % totalItems;
      itemRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + totalItems) % totalItems;
      itemRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      itemRefs.current[totalItems - 1]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "Tab") {
      // Natural tab moves focus, close menu
      setOpen(false);
    }
  };

  const handleDownloadClick = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className={`relative inline-block text-left ${open ? "z-50" : "z-10"} ${className}`} ref={menuRef}>
      <button
        ref={triggerRef}
        type="button"
        id="resume-download-trigger"
        onClick={() => setOpen(!open)}
        onKeyDown={handleTriggerKeyDown}
        onMouseMove={handleMagneticMove}
        onMouseLeave={handleMagneticLeave}
        onBlur={handleMagneticLeave}
        className="btn-magnetic inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/80 hover:bg-white dark:bg-surface-glass dark:hover:bg-surface-glass-subtle border border-gray-200/80 dark:border-white/15 text-gray-800 dark:text-on-surface font-label-ui text-sm font-medium hover:border-secondary/40 hover:text-secondary dark:hover:text-secondary shadow-sm backdrop-blur-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? "resume-download-menu" : undefined}
      >
        <span className="material-symbols-outlined text-lg text-secondary">download</span>
        <span>Download Resume (PDF)</span>
        <i
          className={`fa-solid fa-chevron-down text-[10px] text-gray-500 dark:text-on-surface-variant transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        ></i>
      </button>

      {open && (
        <div
          id="resume-download-menu"
          role="menu"
          aria-labelledby="resume-download-trigger"
          className="origin-top-left sm:origin-top-right absolute left-0 sm:right-0 mt-2 w-72 rounded-2xl shadow-2xl bg-white/95 dark:bg-surface-panel/95 border border-gray-200/80 dark:border-white/15 z-50 p-2.5 space-y-1.5 backdrop-blur-2xl animate-fade-in"
        >
          <div
            className="px-3 py-1 text-[10px] font-mono-tag text-secondary uppercase tracking-wider border-b border-gray-100 dark:border-white/5 pb-1.5 mb-1"
            role="presentation"
          >
            {"// Select Targeted Track"}
          </div>

          <a
            ref={(el) => (itemRefs.current[0] = el)}
            role="menuitem"
            tabIndex={0}
            href={process.env.PUBLIC_URL + "/Resume_Android_ATS.pdf"}
            download="MD_Tanvir_Shaharia_Android_Resume.pdf"
            onClick={handleDownloadClick}
            onKeyDown={(e) => handleItemKeyDown(e, 0)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-800 dark:text-on-surface hover:bg-gray-100 dark:hover:bg-white/[0.06] hover:text-secondary dark:hover:text-secondary focus:bg-gray-100 dark:focus:bg-white/[0.06] focus:text-secondary dark:focus:text-secondary focus:outline-none transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-sm flex-shrink-0">
              <i className="fa-brands fa-android" aria-hidden="true"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-gray-900 dark:text-text-primary">Android Native Resume</span>
              <span className="text-[10px] text-gray-500 dark:text-text-muted font-normal">Kotlin, Jetpack, MVVM (PDF)</span>
            </div>
          </a>

          <a
            ref={(el) => (itemRefs.current[1] = el)}
            role="menuitem"
            tabIndex={0}
            href={process.env.PUBLIC_URL + "/Resume_Flutter_ATS.pdf"}
            download="MD_Tanvir_Shaharia_Flutter_Resume.pdf"
            onClick={handleDownloadClick}
            onKeyDown={(e) => handleItemKeyDown(e, 1)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-800 dark:text-on-surface hover:bg-gray-100 dark:hover:bg-white/[0.06] hover:text-secondary dark:hover:text-secondary focus:bg-gray-100 dark:focus:bg-white/[0.06] focus:text-secondary dark:focus:text-secondary focus:outline-none transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-sm flex-shrink-0">
              <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
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

import React, { useState, useRef, useEffect } from "react";

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
        className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-violet hover:from-brand-500 hover:to-indigo-600 font-medium rounded-3xl text-sm px-6 md:px-8 py-3.5 text-center mr-2 mb-2 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <i className="fa-solid fa-download text-xs"></i>
        <span>Download Resume</span>
        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}></i>
      </button>

      {open && (
        <div className="origin-top-right absolute right-0 mt-1 w-64 rounded-xl shadow-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 z-50 p-2 space-y-1 backdrop-blur-xl">
          <a
            href={process.env.PUBLIC_URL + "/Resume_Android_ATS.pdf"}
            download="MD_Tanvir_Shaharia_Android_Resume.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-zinc-200 hover:bg-indigo-50 dark:hover:bg-zinc-800/80 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
          >
            <div className="w-8 h-8 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              <i className="fa-brands fa-android"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold">Android Native Resume</span>
              <span className="text-[10px] text-gray-400 font-normal">Kotlin, Jetpack, MVVM (PDF)</span>
            </div>
          </a>

          <a
            href={process.env.PUBLIC_URL + "/Resume_Flutter_ATS.pdf"}
            download="MD_Tanvir_Shaharia_Flutter_Resume.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-zinc-200 hover:bg-indigo-50 dark:hover:bg-zinc-800/80 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
          >
            <div className="w-8 h-8 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold">Flutter Resume</span>
              <span className="text-[10px] text-gray-400 font-normal">Dart, Riverpod, Clean Arch (PDF)</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

import React from "react";

/**
 * TechLogo: Obsidian Cyber-Glass TS Tech Monogram
 * Faithful reproduction of the brand logo from the approved Stitch UI design reference.
 */
export default function TechLogo({ className = "w-9 h-9" }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-slate-900/90 dark:bg-[#0b101b] border border-cyan-500/40 dark:border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-xl group-hover:border-cyan-400 group-hover:shadow-[0_0_22px_rgba(6,182,212,0.6)] transition-all duration-300 flex-shrink-0 ${className}`}
      aria-label="Tanvir Shaharia TS Tech Monogram"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <defs>
          <linearGradient id="tsGrad" x1="6" y1="8" x2="26" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <filter id="tsGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#06b6d4" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Cyber Monogram TS: Interlocking T and S letterforms */}
        {/* T-bar */}
        <path
          d="M 7.5 10.5 C 7.5 9.67 8.17 9 9 9 H 23 C 23.83 9 24.5 9.67 24.5 10.5 V 12 H 17.5 V 23 H 14.5 V 12 H 7.5 V 10.5 Z"
          fill="url(#tsGrad)"
          filter="url(#tsGlow)"
        />

        {/* S-curve dynamic cyber cut */}
        <path
          d="M 18.5 14.5 H 22.5 C 23.3 14.5 24 15.2 24 16 V 17 C 24 17.8 23.3 18.5 22.5 18.5 H 18.5 V 21 H 23"
          stroke="#38bdf8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#tsGlow)"
        />
      </svg>
    </div>
  );
}

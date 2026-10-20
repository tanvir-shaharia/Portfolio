import React from "react";

/**
 * TechLogo: Scaled-up High-Contrast TS Cyber Monogram
 * - Bold Solid White Architectural 'T'
 * - Smooth Electric Cyan 'S' Curve
 * - Soft Translucent Cyber-Glass Backdrop (No harsh distracting borders)
 */
export default function TechLogo({ className = "w-9 h-9" }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-slate-900/60 dark:bg-cyan-950/25 border border-cyan-500/25 dark:border-cyan-400/30 shadow-[0_0_12px_rgba(0,240,255,0.15)] backdrop-blur-xl group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] group-hover:scale-105 transition-all duration-300 flex-shrink-0 ${className}`}
      aria-label="Tanvir Shaharia TS Tech Monogram"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-6.5 sm:h-6.5"
      >
        <defs>
          {/* Radial ambient glow behind letters */}
          <radialGradient
            id="tsCoreGlow"
            cx="50%"
            cy="50%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </radialGradient>

          {/* Electric Cyan to Sky Gradient for S */}
          <linearGradient
            id="sCyanGrad"
            x1="18"
            y1="9.5"
            x2="27"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Soft Glow Filter for Cyan S */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.8"
              floodColor="#00f0ff"
              floodOpacity="0.6"
            />
          </filter>
        </defs>

        {/* Ambient subtle glow */}
        <circle cx="16" cy="16" r="13" fill="url(#tsCoreGlow)" />

        {/* 'T' Letterform: Crisp Solid Architectural White */}
        {/* T Top Horizontal Bar */}
        <rect
          x="4.5"
          y="6.5"
          width="17.5"
          height="4"
          rx="1.5"
          fill="#ffffff"
          className="drop-shadow-sm"
        />
        {/* T Vertical Stem */}
        <rect
          x="11"
          y="9.5"
          width="4.2"
          height="15.5"
          rx="1.5"
          fill="#ffffff"
          className="drop-shadow-sm"
        />

        {/* 'S' Letterform: Smooth Dynamic Electric Cyan Curve */}
        <path
          d="M 18.5 12.8 C 18.5 10.8 20.2 9.5 22.8 9.5 C 25.5 9.5 27 11 27 13.2 C 27 16.2 18 17.5 18 21.2 C 18 23.6 20 25.2 23 25.2 C 25.8 25.2 27.2 23.6 27.2 21.8"
          stroke="url(#sCyanGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#cyanGlow)"
        />
      </svg>
    </div>
  );
}

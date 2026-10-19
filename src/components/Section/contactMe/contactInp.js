import React from "react";

export default function ContactInp({ type, placeholder, className = "", ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      className={`w-full rounded-xl shadow-sm border border-gray-200/80 dark:border-white/10 text-gray-900 dark:text-zinc-100 bg-white/80 dark:bg-surface-canvas/90 placeholder-gray-400 dark:placeholder-zinc-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 p-3.5 text-sm transition-all font-body-md ${className}`}
      {...rest}
    />
  );
}

import React from "react";

/**
 * TechIcon: Zero-dependency icon renderer.
 * Leverages existing FontAwesome 6, Material Symbols, or lightweight inline SVGs.
 */
export default function TechIcon({ icon }) {
  if (!icon) return null;

  if (icon.type === "fa") {
    return <i className={`${icon.name} text-[13px] flex-shrink-0`} aria-hidden="true" />;
  }

  if (icon.type === "material") {
    return (
      <span
        className="material-symbols-outlined text-[15px] select-none leading-none flex-shrink-0 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
      >
        {icon.name}
      </span>
    );
  }

  if (icon.type === "svg") {
    switch (icon.name) {
      case "kotlin":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#7F52FF] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M24 24H0V0h24L12 12Z" />
          </svg>
        );
      case "dart":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#0175C2] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M4.105 4.105l7.158 7.158 5.727-5.727L10.373 0H4.105v4.105zM0 10.373v7.368L6.259 24h7.368l6.268-6.259-7.158-7.158L0 10.373zm18.273-4.837l5.727 5.727V4.105h-7.158l1.431 1.431z" />
          </svg>
        );
      case "flutter":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#02569B] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M14.314 0L2.3 12 6 15.7 21.684 0zm.014 11.072L7.9 17.5 14.328 24H21.7l-6.414-6.5 6.4-6.428z" />
          </svg>
        );
      case "compose":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#4285F4] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case "kmp":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#7F52FF] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.6 4.8 8 12 4.8zM4 9.8l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
          </svg>
        );
      case "csharp":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#9B4993] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M11.5 3.5C7.08 3.5 3.5 7.08 3.5 11.5S7.08 19.5 11.5 19.5c2.4 0 4.56-1.06 6.04-2.73l-2.02-1.57A6.47 6.47 0 0 1 11.5 16.5C8.74 16.5 6.5 14.26 6.5 11.5S8.74 6.5 11.5 6.5c1.55 0 2.94.71 3.88 1.83l2.09-1.55C15.98 4.68 13.88 3.5 11.5 3.5zm7.5 4h1.5v2.5H23v1.5h-2.5V14H19v-2.5h-2.5V10H19V7.5zm-3.5 6.5h1.5v2.5H19v1.5h-2V20h-1.5v-2H14v-1.5h1.5V14z" />
          </svg>
        );
      case "cpp":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current text-[#00599C] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M11.5 3.5C7.08 3.5 3.5 7.08 3.5 11.5S7.08 19.5 11.5 19.5c2.4 0 4.56-1.06 6.04-2.73l-2.02-1.57A6.47 6.47 0 0 1 11.5 16.5C8.74 16.5 6.5 14.26 6.5 11.5S8.74 6.5 11.5 6.5c1.55 0 2.94.71 3.88 1.83l2.09-1.55C15.98 4.68 13.88 3.5 11.5 3.5zm6.5 5.5h1v2h2v1h-2v2h-1v-2h-2v-1h2V9zm4 2h1v2h2v1h-2v2h-1v-2h-2v-1h2v-2z" />
          </svg>
        );
      default:
        return null;
    }
  }

  return null;
}

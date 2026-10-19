import React, { useState } from "react";

/**
 * Accessible One-Click Copy Button with Graceful Fallback & Inline Feedback
 */
export default function CopyButton({ text, label = "text", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Graceful silence: preserve security without exposing clipboard data
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Copied ${label} to clipboard` : `Copy ${label} to clipboard`}
      title={copied ? "Copied!" : `Copy ${label}`}
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono-tag transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none ${
        copied
          ? "bg-tertiary/15 text-tertiary border border-tertiary/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
          : "bg-gray-100 hover:bg-gray-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white border border-gray-200/60 dark:border-white/10"
      } ${className}`}
    >
      {copied ? (
        <>
          <span className="material-symbols-outlined text-[13px] text-tertiary">check</span>
          <span className="font-semibold text-[10px] sm:text-xs">Copied</span>
        </>
      ) : (
        <>
          <span className="material-symbols-outlined text-[13px]">content_copy</span>
          <span className="sr-only">Copy {label}</span>
        </>
      )}
    </button>
  );
}

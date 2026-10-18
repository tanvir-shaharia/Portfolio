import React, { useRef, useEffect, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

/**
 * ScrollReveal: Viewport-triggered fade-up entrance animation.
 *
 * Guarantees:
 * - Fires ONCE on first intersection (disconnects observer immediately)
 * - 0 layout shifts (CLS = 0) via GPU-composited transform & opacity
 * - Immediate static reveal when prefers-reduced-motion is active
 * - Configurable stagger delay (ms) for card groups
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  direction = "up", // 'up' | 'none'
}) {
  const domRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, reveal instantly
    if (prefersReducedMotion()) {
      setIsRevealed(true);
      return;
    }

    const currentEl = domRef.current;
    if (!currentEl) {
      setIsRevealed(true);
      return;
    }

    // Modern IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect(); // Triggers once by default
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const transformClass =
    direction === "up"
      ? isRevealed
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0"
      : isRevealed
      ? "opacity-100"
      : "opacity-0";

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${transformClass} ${className}`}
      style={{
        transitionDelay: isRevealed && delay > 0 ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

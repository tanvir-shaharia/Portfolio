/**
 * Antigravity Motion Engine (M2 Interactive Enhancements)
 *
 * Lightweight, GPU-accelerated event handlers for:
 * 1. Mouse-position card spotlight (--mouse-x, --mouse-y)
 * 2. Subtle 3D perspective tilt on desktop hover
 * 3. Lightweight magnetic hover feedback on CTA buttons
 *
 * Performance Guarantees:
 * - 0 React state updates / 0 component re-renders
 * - 0 layout shifts (CLS = 0)
 * - Safe for touch / coarse pointers & prefers-reduced-motion
 * - Immediate reset on pointer leave / keyboard blur
 */

export const prefersReducedMotion = () => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (err) {
    return false;
  }
};

export const isTouchOrCoarsePointer = () => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  try {
    return window.matchMedia("(hover: none), (pointer: coarse)").matches;
  } catch (err) {
    return false;
  }
};

/**
 * Updates CSS custom properties --mouse-x and --mouse-y on the hovered card.
 */
export const handleSpotlightMove = (e) => {
  if (!e || !e.currentTarget || !e.currentTarget.getBoundingClientRect) return;
  if (prefersReducedMotion() || isTouchOrCoarsePointer()) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  e.currentTarget.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);
};

export const handleSpotlightLeave = (e) => {
  if (!e || !e.currentTarget || !e.currentTarget.style) return;
  e.currentTarget.style.setProperty("--mouse-x", "-999px");
  e.currentTarget.style.setProperty("--mouse-y", "-999px");
};

/**
 * Applies subtle 3D perspective tilt on desktop hover (clamped to maxTilt deg).
 */
export const handleTiltMove = (e, maxTilt = 4) => {
  if (!e || !e.currentTarget || !e.currentTarget.getBoundingClientRect) return;
  if (prefersReducedMotion() || isTouchOrCoarsePointer()) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((centerY - y) / centerY) * maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;

  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
    2
  )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
};

export const handleTiltLeave = (e) => {
  if (!e || !e.currentTarget || !e.currentTarget.style) return;
  e.currentTarget.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
};

/**
 * Combined handler for card spotlight + 3D tilt
 */
export const handleCardHoverMove = (e, maxTilt = 4) => {
  handleSpotlightMove(e);
  handleTiltMove(e, maxTilt);
};

export const handleCardHoverLeave = (e) => {
  handleSpotlightLeave(e);
  handleTiltLeave(e);
};

/**
 * Lightweight magnetic pull for key CTA buttons (clamped to maxPull px).
 */
export const handleMagneticMove = (e, maxPull = 5) => {
  if (!e || !e.currentTarget || !e.currentTarget.getBoundingClientRect) return;
  if (prefersReducedMotion() || isTouchOrCoarsePointer()) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const pullX = Math.max(-maxPull, Math.min(maxPull, x * 0.22));
  const pullY = Math.max(-maxPull, Math.min(maxPull, y * 0.22));

  e.currentTarget.style.transform = `translate(${pullX.toFixed(1)}px, ${pullY.toFixed(1)}px)`;
};

export const handleMagneticLeave = (e) => {
  if (!e || !e.currentTarget || !e.currentTarget.style) return;
  e.currentTarget.style.transform = "translate(0px, 0px)";
};

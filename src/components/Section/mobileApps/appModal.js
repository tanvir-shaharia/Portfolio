import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "92vh",
  border: "none",
  outline: "none",
  p: 0,
};

export default function AppModal({ setOpen, open, app }) {
  const handleClose = () => setOpen(false);

  const {
    id,
    name,
    platform,
    longDescription,
    iconSrc,
    status,
    playStoreUrl,
    privacyPolicyUrl,
    termsUrl,
    version,
    versionCode,
    technologies,
    problemsSolved,
    highlights,
    screenshots,
    challenges,
  } = app || {};

  const screens = screenshots && screenshots.length > 0 ? screenshots : [];
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  React.useEffect(() => {
    setActiveScreenIdx(0);
  }, [id, open]);

  if (!app) return null;

  const isClosedTesting = status === "closed-testing";
  const isUnderDevelopment = status === "under-development";
  const statusLabel =
    app.statusLabel ||
    (isClosedTesting
      ? "Currently in Google Play Closed Testing"
      : isUnderDevelopment
      ? "Under Active Development"
      : "Available on Google Play");
  const btnLabel = app.ctaLabel || (isClosedTesting ? "Check Availability" : "View on Google Play");
  const currentScreen = screens[activeScreenIdx];
  const formattedVersion = version
    ? version.toLowerCase().startsWith("v") || version.toLowerCase().includes("dev")
      ? version
      : `v${version}`
    : "";

  const handleAvailabilityClick = (e) => {
    if (isClosedTesting) {
      e.preventDefault();
      swal({
        title: `${name} Closed Testing`,
        text: `${name} is currently in Google Play Closed Testing and is not publicly available yet. Public access will be available after the testing requirements are completed.`,
        icon: "info",
        button: {
          text: "Close",
          value: true,
          visible: true,
          className:
            "bg-primary hover:bg-primary-container text-white font-bold rounded-lg text-xs px-4 py-2",
          closeModal: true,
        },
      });
    }
  };

  const handlePrev = () => {
    setActiveScreenIdx((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const handleNext = () => {
    setActiveScreenIdx((prev) => (prev + 1) % screens.length);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="app-modal-title"
      aria-describedby="app-modal-description"
      className="backdrop-blur-md bg-black/60"
    >
      <Box
        sx={modalStyle}
        className="w-[94%] sm:w-[88%] md:w-[780px] lg:w-[900px] outline-none rounded-2xl overflow-hidden text-gray-900 dark:text-zinc-100 bg-white dark:bg-surface-panel border border-gray-200 dark:border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      >
        {/* Top Floating Close Button */}
        <button
          className="absolute top-4 right-4 h-9 w-9 bg-gray-100 dark:bg-surface-glass hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-zinc-200 rounded-full z-50 flex items-center justify-center transition-all border border-gray-200/80 dark:border-white/10 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          onClick={handleClose}
          aria-label="Close details modal"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-7 max-h-[90vh] overflow-y-auto">
          {/* Screenshot Gallery Column (Left) */}
          {screens.length > 0 && (
            <div className="flex-shrink-0 flex flex-col items-center justify-start md:w-[260px] lg:w-[320px] w-full gap-3 bg-gray-50/80 dark:bg-black/30 rounded-2xl p-3 sm:p-4 border border-gray-200/70 dark:border-white/5">
              {/* Active Screenshot Display Frame */}
              <div className="relative w-full aspect-[9/16] max-h-[340px] sm:max-h-[420px] flex items-center justify-center bg-gray-950/5 dark:bg-black/50 rounded-xl border border-gray-200 dark:border-white/10 p-2 overflow-hidden group/gallery shadow-inner">
                <img
                  key={activeScreenIdx}
                  src={currentScreen}
                  alt={`${name} screenshot ${activeScreenIdx + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />

                {/* Navigation Chevrons */}
                {screens.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-surface-panel/90 hover:bg-white dark:hover:bg-surface-panel text-gray-800 dark:text-zinc-100 flex items-center justify-center border border-gray-200 dark:border-white/20 shadow-md transition-all cursor-pointer z-20"
                      aria-label="Previous screenshot"
                    >
                      <i className="fa-solid fa-chevron-left text-[11px]"></i>
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-surface-panel/90 hover:bg-white dark:hover:bg-surface-panel text-gray-800 dark:text-zinc-100 flex items-center justify-center border border-gray-200 dark:border-white/20 shadow-md transition-all cursor-pointer z-20"
                      aria-label="Next screenshot"
                    >
                      <i className="fa-solid fa-chevron-right text-[11px]"></i>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {screens.length > 1 && (
                <div className="flex gap-2 overflow-x-auto w-full justify-start py-1">
                  {screens.map((screen, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveScreenIdx(sIdx)}
                      className={`flex-shrink-0 h-12 w-auto rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeScreenIdx === sIdx
                          ? "border-secondary scale-[1.04] shadow-sm"
                          : "border-transparent hover:border-gray-300 dark:hover:border-zinc-700 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Show screenshot ${sIdx + 1}`}
                    >
                      <img
                        src={screen}
                        alt={`Thumbnail preview ${sIdx + 1}`}
                        className="h-full w-auto object-contain block bg-zinc-900/5 dark:bg-zinc-950/40"
                      />
                    </button>
                  ))}
                </div>
              )}
              <span className="font-mono-tag text-[10px] text-gray-400 dark:text-text-muted font-medium">
                {activeScreenIdx + 1} / {screens.length} SCREENSHOTS
              </span>
            </div>
          )}

          {/* Details & Architecture Column (Right) */}
          <div className="flex-1 flex flex-col justify-between overflow-y-visible">
            <div>
              {/* Header with App Icon */}
              <div className="flex items-center gap-3.5 mb-3.5">
                {iconSrc && (
                  <img
                    src={iconSrc}
                    alt={`${name} icon`}
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl object-contain border border-gray-200/80 dark:border-white/10 shadow-sm bg-white dark:bg-surface-canvas p-1.5 flex-shrink-0"
                  />
                )}
                <div>
                  <Typography
                    id="app-modal-title"
                    variant="h5"
                    component="h2"
                    className="font-headline-sm font-extrabold text-gray-900 dark:text-zinc-100 text-xl sm:text-2xl tracking-tight"
                  >
                    {name}
                  </Typography>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-primary/10 text-primary-fixed-dim dark:bg-primary/20 dark:text-primary-fixed-dim border border-primary/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono-tag">
                      {platform}
                    </span>
                    {formattedVersion && (
                      <span className="font-mono-tag text-[11px] text-gray-500 dark:text-text-muted font-medium">
                        {formattedVersion}
                        {versionCode ? ` (${versionCode})` : ""}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              {isClosedTesting ? (
                <div className="mt-2.5 mb-4 flex items-start gap-2 bg-amber-500/10 border border-amber-500/25 rounded-xl p-2.5 text-xs text-amber-800 dark:text-amber-400 font-semibold leading-relaxed">
                  <i className="fa-solid fa-flask text-sm mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-500"></i>
                  <div>
                    <span className="block font-bold">{statusLabel}</span>
                  </div>
                </div>
              ) : isUnderDevelopment ? (
                <div className="mt-2.5 mb-4 flex items-start gap-2 bg-primary/10 border border-primary/25 rounded-xl p-2.5 text-xs text-primary-fixed-dim font-semibold leading-relaxed">
                  <i className="fa-solid fa-code text-sm mt-0.5 flex-shrink-0 text-primary"></i>
                  <div>
                    <span className="block font-bold">{statusLabel}</span>
                    <span className="block text-[10px] text-gray-600 dark:text-text-muted font-medium mt-0.5">
                      Native Android-first architecture built with Kotlin Multiplatform & Compose Multiplatform. In active development.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-2.5 mb-4 flex items-center gap-2 bg-tertiary/10 border border-tertiary/30 rounded-xl p-2.5 text-xs text-tertiary font-semibold font-mono-tag">
                  <i className="fa-solid fa-circle-check text-tertiary"></i>
                  <span>{statusLabel}</span>
                </div>
              )}

              {/* Long Description */}
              <div
                id="app-modal-description"
                className="text-xs sm:text-sm text-gray-600 dark:text-text-muted mb-4 leading-relaxed font-body-md"
              >
                {longDescription}
              </div>

              {/* Problems Solved */}
              {problemsSolved && problemsSolved.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                    {"// PROBLEMS SOLVED & INTENT"}
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {problemsSolved.map((prob, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2.5 rounded-xl bg-gray-50 dark:bg-surface-glass border border-gray-200/60 dark:border-white/5 text-xs"
                      >
                        <strong className="text-gray-900 dark:text-zinc-200 block mb-0.5 font-label-ui">
                          • {prob.title}
                        </strong>
                        <span className="text-gray-600 dark:text-text-muted block text-[11px] leading-relaxed">
                          {prob.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {highlights && highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {"// KEY ARCHITECTURAL IMPLEMENTATIONS"}
                  </h4>
                  <ul className="list-disc list-outside ml-4 text-xs text-gray-600 dark:text-text-muted space-y-1.5 font-body-sm">
                    {highlights.map((high, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">
                        {high}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Challenges & Solutions */}
              {challenges && challenges.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-tertiary mb-2">
                    {"// TECHNICAL CHALLENGES & HARDENED SOLUTIONS"}
                  </h4>
                  <div className="space-y-2.5">
                    {challenges.map((ch, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-gray-50 dark:bg-surface-glass border border-gray-200/60 dark:border-white/5 rounded-xl p-3"
                      >
                        <h5 className="text-[11px] font-bold text-gray-900 dark:text-zinc-200 font-label-ui">
                          Challenge {cIdx + 1}: {ch.title}
                        </h5>
                        <p className="text-[11px] text-gray-600 dark:text-text-muted mt-1 leading-relaxed">
                          <strong className="text-tertiary font-semibold">Solution: </strong>{" "}
                          {ch.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {/* Technologies List */}
              {technologies && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {technologies.map((tech, idx) => (
                    <span
                      className="bg-gray-100 dark:bg-surface-container text-gray-800 dark:text-on-surface-variant font-mono-tag text-[10px] font-semibold px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/5"
                      key={idx}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions Footer */}
              {(Boolean(playStoreUrl && !isUnderDevelopment) ||
                Boolean(privacyPolicyUrl) ||
                Boolean(termsUrl)) && (
                <div className="space-y-2.5 pt-2 border-t border-gray-200/60 dark:border-white/10">
                  {playStoreUrl && !isUnderDevelopment && (
                    <div>
                      {isClosedTesting ? (
                        <button
                          onClick={handleAvailabilityClick}
                          className="w-full bg-secondary hover:bg-secondary-fixed-dim text-xs sm:text-sm text-on-secondary font-bold py-2.5 px-4 rounded-xl inline-flex items-center justify-center transition-all shadow-md cursor-pointer gap-2"
                        >
                          <i className="fa-brands fa-google-play"></i>
                          <span>{btnLabel}</span>
                        </button>
                      ) : (
                        <a
                          href={playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <button className="w-full bg-secondary hover:bg-secondary-fixed-dim text-xs sm:text-sm text-on-secondary font-bold py-2.5 px-4 rounded-xl inline-flex items-center justify-center transition-all shadow-md cursor-pointer gap-2">
                            <i className="fa-brands fa-google-play"></i>
                            <span>{btnLabel}</span>
                          </button>
                        </a>
                      )}
                    </div>
                  )}

                  {(Boolean(privacyPolicyUrl) || Boolean(termsUrl)) && (
                    <div className="flex items-center gap-2">
                      {privacyPolicyUrl && (
                        <Link to={privacyPolicyUrl} className="flex-1" onClick={handleClose}>
                          <button className="w-full bg-gray-100 dark:bg-surface-glass hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-700 dark:text-zinc-300 font-semibold py-2 px-3 rounded-xl inline-flex items-center justify-center transition-colors border border-gray-200 dark:border-white/10 shadow-sm cursor-pointer gap-1.5 font-label-ui">
                            <i className="fa-solid fa-shield-halved text-[11px]"></i>
                            <span>Privacy Policy</span>
                          </button>
                        </Link>
                      )}
                      {termsUrl && (
                        <Link to={termsUrl} className="flex-1" onClick={handleClose}>
                          <button className="w-full bg-gray-100 dark:bg-surface-glass hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-700 dark:text-zinc-300 font-semibold py-2 px-3 rounded-xl inline-flex items-center justify-center transition-colors border border-gray-200 dark:border-white/10 shadow-sm cursor-pointer gap-1.5 font-label-ui">
                            <i className="fa-solid fa-file-contract text-[11px]"></i>
                            <span>Terms of Service</span>
                          </button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

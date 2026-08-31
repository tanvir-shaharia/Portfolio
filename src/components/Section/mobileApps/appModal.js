import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "90vh",
  border: "none",
  boxShadow: 90,
  p: 1,
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
  const btnLabel = isClosedTesting ? "Check Availability" : "View on Google Play";
  const currentScreen = screens[activeScreenIdx];

  const handleAvailabilityClick = (e) => {
    if (isClosedTesting) {
      e.preventDefault();
      swal({
        title: "PocketLog Closed Testing",
        text: "PocketLog is currently in Google Play Closed Testing and is not publicly available yet. Public access will be available after the testing requirements are completed.",
        icon: "info",
        button: {
          text: "Close",
          value: true,
          visible: true,
          className: "bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-lg text-xs px-4 py-2",
          closeModal: true,
        }
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
    >
      <Box
        sx={style}
        className="w-[96%] md:w-[780px] lg:w-[850px] outline-none rounded-xl overflow-x-auto scrollbar-hide dark:text-zinc-100 bg-gray-50 dark:bg-zinc-900 dark:border dark:border-zinc-800"
      >
        <button
          className="absolute top-3 right-3 h-8 w-8 dark:bg-zinc-800 bg-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700 dark:text-zinc-200 text-gray-700 rounded-full z-50 flex items-center justify-center transition-colors"
          onClick={handleClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 p-5 md:p-6">
          {/* Screenshot Gallery Column (Left Column) */}
          {screens.length > 0 && (
            <div className="flex-shrink-0 flex flex-col items-center justify-start md:w-[260px] lg:w-[320px] w-full gap-4 bg-gray-100/40 dark:bg-zinc-950/10 rounded-2xl p-4 border border-gray-200/50 dark:border-zinc-800/80">
              {/* Large Active Screenshot Viewer */}
              <div className="relative w-full aspect-[3/4] flex items-center justify-center bg-zinc-950/5 dark:bg-zinc-950/20 rounded-xl border border-gray-200 dark:border-zinc-800 p-2 overflow-hidden group/gallery shadow-inner">
                <img
                  key={activeScreenIdx}
                  src={currentScreen}
                  alt={`${name} screenshot ${activeScreenIdx + 1}`}
                  className="max-h-[300px] md:max-h-[320px] lg:max-h-[380px] w-auto object-contain rounded-lg shadow-md animate-fade-in"
                />

                {/* Left/Right Navigation Chevron Overlays */}
                {screens.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-100 flex items-center justify-center border border-gray-200 dark:border-zinc-700/80 shadow-md transition-all opacity-0 group-hover/gallery:opacity-100 duration-200 cursor-pointer z-20"
                      aria-label="Previous screenshot"
                    >
                      <i className="fa-solid fa-chevron-left text-[11px]"></i>
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-100 flex items-center justify-center border border-gray-200 dark:border-zinc-700/80 shadow-md transition-all opacity-0 group-hover/gallery:opacity-100 duration-200 cursor-pointer z-20"
                      aria-label="Next screenshot"
                    >
                      <i className="fa-solid fa-chevron-right text-[11px]"></i>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {screens.length > 1 && (
                <div className="flex gap-2 overflow-x-auto w-full justify-start py-1 scrollbar-hide">
                  {screens.map((screen, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveScreenIdx(sIdx)}
                      className={`flex-shrink-0 h-14 w-auto rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeScreenIdx === sIdx 
                          ? "border-brand-500 scale-[1.04]" 
                          : "border-transparent hover:border-gray-300 dark:hover:border-zinc-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={screen}
                        alt={`Thumbnail preview ${sIdx + 1}`}
                        className="h-full w-auto object-contain block bg-zinc-900/5 dark:bg-zinc-950/20"
                      />
                    </button>
                  ))}
                </div>
              )}
              <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-medium">
                Tap arrows or thumbnails to navigate
              </span>
            </div>
          )}

          {/* Details Column (Right Column) */}
          <div className="flex-1 flex flex-col justify-between max-h-[75vh] overflow-y-auto pr-1">
            <div>
              {/* Header with App Icon */}
              <div className="flex items-center gap-3 mb-3">
                {iconSrc && (
                  <img
                    src={iconSrc}
                    alt={`${name} logo`}
                    className="w-14 h-14 rounded-2xl object-contain border border-gray-200 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-950 p-1 flex-shrink-0"
                  />
                )}
                <div>
                  <Typography
                    id="app-modal-title"
                    variant="h5"
                    component="h2"
                    className="capitalize font-extrabold text-gray-900 dark:text-zinc-100 text-xl md:text-2xl"
                  >
                    {name}
                  </Typography>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-400 border border-brand-100 dark:border-brand-900/30 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                      {platform}
                    </span>
                    <span className="text-[11px] text-gray-500 dark:text-zinc-400 font-medium">
                      v{version} ({versionCode})
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              {isClosedTesting ? (
                <div className="mt-2.5 mb-4 flex items-start gap-2 bg-amber-500/10 border border-amber-500/25 rounded-lg p-2.5 text-xs text-amber-800 dark:text-amber-400 font-semibold leading-relaxed">
                  <i className="fa-solid fa-flask text-sm mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-500"></i>
                  <div>
                    <span className="block font-bold">Currently in Google Play Closed Testing</span>
                    <span className="block text-[10px] text-amber-700/80 dark:text-amber-400/70 font-medium mt-0.5">
                      Production release is pending completion of Google's 14-day consecutive testing requirements.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-2.5 mb-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-lg p-2.5 text-xs text-emerald-800 dark:text-emerald-400 font-semibold">
                  <i className="fa-solid fa-circle-check text-emerald-600 dark:text-emerald-500"></i>
                  <span>Available on Google Play</span>
                </div>
              )}

              {/* Long Description */}
              <div className="text-xs md:text-sm text-gray-600 dark:text-zinc-300 mb-4 leading-relaxed font-normal">
                {longDescription}
              </div>

              {/* Problems Solved */}
              {problemsSolved && problemsSolved.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
                    Why I Built It
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {problemsSolved.map((prob, pIdx) => (
                      <div key={pIdx} className="text-xs leading-relaxed">
                        <strong className="text-gray-900 dark:text-zinc-200 block mb-0.5">
                          • {prob.title}
                        </strong>
                        <span className="text-gray-600 dark:text-zinc-400 pl-3 block text-[11px]">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
                    Key Implementations
                  </h4>
                  <ul className="list-disc list-outside ml-4 text-xs text-gray-600 dark:text-zinc-300 space-y-1.5">
                    {highlights.map((high, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{high}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Challenges & Solutions */}
              {challenges && challenges.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
                    Technical Challenges & Solutions
                  </h4>
                  <div className="space-y-3">
                    {challenges.map((ch, cIdx) => (
                      <div key={cIdx} className="bg-gray-100/50 dark:bg-zinc-800/40 border border-gray-200/50 dark:border-zinc-800 rounded-lg p-2.5">
                        <h5 className="text-[11px] font-bold text-gray-900 dark:text-zinc-200">
                          Challenge {cIdx + 1}: {ch.title}
                        </h5>
                        <p className="text-[11px] text-gray-600 dark:text-zinc-400 mt-1 leading-relaxed">
                          <strong className="text-brand-500 dark:text-brand-400 font-semibold">Solution: </strong> {ch.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {/* Technologies list */}
              {technologies && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {technologies.map((tech, idx) => (
                    <span
                      className="bg-indigo-50/80 text-indigo-700 text-[10px] font-bold px-2.5 py-1 rounded dark:bg-brand-950/40 dark:text-brand-400 border border-indigo-100/50 dark:border-brand-900/40 capitalize inline-block"
                      key={idx}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions Footer */}
              <div className="flex gap-2.5 pt-2">
                {playStoreUrl && (
                  <div className="flex-1">
                    {isClosedTesting ? (
                      <button
                        onClick={handleAvailabilityClick}
                        className="w-full bg-brand-500 hover:bg-brand-600 text-xs text-white font-bold py-2.5 px-3 rounded-lg inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                      >
                        <i className="fa-brands fa-google-play mr-1.5"></i>
                        <span>{btnLabel}</span>
                      </button>
                    ) : (
                      <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <button className="w-full bg-brand-500 hover:bg-brand-600 text-xs text-white font-bold py-2.5 px-3 rounded-lg inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer">
                          <i className="fa-brands fa-google-play mr-1.5"></i>
                          <span>{btnLabel}</span>
                        </button>
                      </a>
                    )}
                  </div>
                )}
                {privacyPolicyUrl && (
                  <Link to={privacyPolicyUrl} className="flex-1" onClick={handleClose}>
                    <button className="w-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-xs text-gray-700 dark:text-zinc-300 font-bold py-2.5 px-3 rounded-lg inline-flex items-center justify-center transition-colors border border-gray-200/80 dark:border-zinc-700 shadow-sm cursor-pointer">
                      <i className="fa-solid fa-shield-halved mr-1.5"></i>
                      <span>Privacy Policy</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

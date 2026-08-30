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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="app-modal-title"
      aria-describedby="app-modal-description"
    >
      <Box
        sx={style}
        className="w-[96%] md:w-[750px] outline-none rounded-xl overflow-x-auto scrollbar-hide dark:text-zinc-100 bg-gray-50 dark:bg-zinc-900 dark:border dark:border-zinc-800"
      >
        <button
          className="absolute top-3 right-3 h-8 w-8 dark:bg-zinc-800 bg-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700 dark:text-zinc-200 text-gray-700 rounded-full z-50 flex items-center justify-center transition-colors"
          onClick={handleClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="flex flex-col md:flex-row gap-6 p-5">
          {/* Mockup Column */}
          {screens.length > 0 && (
            <div className="flex-shrink-0 flex flex-col items-center justify-center md:w-[220px] w-full bg-gray-100/50 dark:bg-zinc-900/80 rounded-xl p-4 border border-gray-200/50 dark:border-zinc-800/80">
              {/* Smartphone Frame Wrapper */}
              <div className="relative mx-auto border-[8px] border-zinc-800 dark:border-zinc-700 bg-zinc-800 dark:bg-zinc-700 rounded-[2.5rem] h-[340px] w-[170px] shadow-xl overflow-hidden group">
                {/* Camera notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-zinc-800 dark:bg-zinc-700 rounded-full z-20"></div>
                {/* Screen content */}
                <div
                  className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black flex justify-center items-center cursor-pointer relative"
                  onClick={() => {
                    setActiveScreenIdx((prev) => (prev + 1) % screens.length);
                  }}
                  title="Click to see next screenshot"
                >
                  <img
                    src={currentScreen}
                    alt={`${name} screenshot ${activeScreenIdx + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              </div>

              {/* Dot Indicators */}
              {screens.length > 1 && (
                <div className="flex gap-1.5 mt-3 justify-center flex-wrap">
                  {screens.map((_, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveScreenIdx(sIdx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activeScreenIdx === sIdx
                          ? "bg-brand-500 scale-125"
                          : "bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to screenshot ${sIdx + 1}`}
                    />
                  ))}
                </div>
              )}
              <span className="text-[10px] text-gray-400 dark:text-zinc-500 mt-2 font-medium">
                Tap mockup screen to cycle
              </span>
            </div>
          )}

          {/* Details Column */}
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

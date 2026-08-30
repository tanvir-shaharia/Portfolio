import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import swal from "sweetalert";
import mobileAppsList from "../../../utils/mobileAppsList.json";
import Title from "../title";
import AppModal from "./appModal";

export default function MobileApps() {
  const [open, setOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleOpen = (app) => {
    setSelectedApp(app);
    setOpen(true);
  };

  const handlePlayStoreClick = (e, app) => {
    e.stopPropagation(); // Prevent opening details modal
    if (app.status === "closed-testing") {
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
    <div className="containerCustom gap">
      <Title 
        title="Mobile Apps" 
        titleDes="Real-world mobile products I've built and shipped" 
      />

      <div className="flex flex-col gap-12 w-full items-center">
        {mobileAppsList.map((app, idx) => {
          const { name, platform, shortDescription, iconSrc, status, playStoreUrl, technologies, screenshots, version } = app;
          const isClosedTesting = status === "closed-testing";
          const btnLabel = isClosedTesting ? "Check Availability" : "View on Google Play";
          
          // Use the first screenshot as the primary visual in the phone frame
          const mainPreviewScreen = screenshots && screenshots.length > 0 ? screenshots[0] : "";

          // Show only the 5 strongest technologies on the card (Kotlin, Compose, Material 3, Room, Hilt)
          const featuredTech = technologies.slice(0, 5);

          return (
            <div
              key={idx}
              className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 lg:gap-12 p-6 md:p-8 rounded-2xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-brand-500/30 dark:hover:border-brand-400/30 transition-all duration-300 ease-out group"
            >
              {/* Visual Preview Card (Left, md:w-[42%] or aspect-square) */}
              <div 
                className="relative w-full md:w-[42%] aspect-[4/3] sm:aspect-[16/10] md:aspect-square bg-gradient-to-tr from-indigo-50/50 via-indigo-100/20 to-transparent dark:from-brand-950/10 dark:via-zinc-900/20 dark:to-transparent border border-gray-200/50 dark:border-zinc-800/50 rounded-xl overflow-hidden flex items-center justify-center p-6 cursor-pointer group/preview shadow-inner flex-shrink-0"
                onClick={() => handleOpen(app)}
                title="Click to view details"
              >
                {/* Decorative background blur glows */}
                <div className="absolute w-32 h-32 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl -top-6 -left-6 transition-all duration-500 group-hover/preview:bg-brand-500/20"></div>
                <div className="absolute w-32 h-32 bg-accent-violet/10 dark:bg-accent-violet/5 rounded-full blur-3xl -bottom-6 -right-6 transition-all duration-500 group-hover/preview:bg-accent-violet/20"></div>

                {/* vertical phone frame */}
                {mainPreviewScreen && (
                  <div className="relative border-[6px] border-zinc-800 dark:border-zinc-700 bg-zinc-800 dark:bg-zinc-700 rounded-[2.2rem] h-[260px] sm:h-[280px] md:h-[260px] lg:h-[290px] w-[130px] sm:w-[140px] md:w-[130px] lg:w-[145px] shadow-2xl overflow-hidden transition-transform duration-300 group-hover/preview:scale-[1.04] group-hover/preview:rotate-[-1deg] z-10">
                    {/* notch */}
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-zinc-800 dark:bg-zinc-700 rounded-full z-20"></div>
                    {/* screen */}
                    <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-black flex justify-center items-center">
                      <LazyLoadImage
                        src={mainPreviewScreen}
                        alt={`${name} dashboard preview`}
                        threshold="100"
                        effect="blur"
                        height="100%"
                        width="100%"
                        className="object-cover h-full w-full block"
                      />
                    </div>
                  </div>
                )}

                {/* Floating app icon for layered depth */}
                {iconSrc && (
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-3 md:right-3 lg:bottom-6 lg:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-200/90 dark:border-zinc-800 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover/preview:translate-y-[-4px] group-hover/preview:scale-105 z-20">
                    <img src={iconSrc} alt={`${name} icon`} className="w-full h-full object-contain" />
                  </div>
                )}
              </div>

              {/* Content Panel (Right, flex-1) */}
              <div className="flex-1 flex flex-col justify-between py-2 w-full">
                <div>
                  {/* Category and Version info */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs text-brand-500 dark:text-brand-400 font-extrabold uppercase tracking-widest">
                      {platform} Application
                    </span>
                    <span className="text-gray-300 dark:text-zinc-700 text-xs">•</span>
                    <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">
                      v{version}
                    </span>
                  </div>

                  {/* App Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-zinc-50 tracking-tight mt-1 flex items-center gap-2">
                    {name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-bold text-gray-800 dark:text-zinc-200 mt-2">
                    Track Better. Spend Smarter.
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mt-2.5 max-w-xl font-normal">
                    {shortDescription}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Key Technologies (Clean, only strongest 4-5) */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {featuredTech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-indigo-50/70 text-indigo-600 dark:bg-brand-950/20 dark:text-brand-400 border border-indigo-100/20 dark:border-brand-900/10 text-[10px] font-bold px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Release Status banner */}
                  {isClosedTesting ? (
                    <div className="mb-5 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 max-w-md">
                      <i className="fa-solid fa-flask text-sm text-amber-600 dark:text-amber-500"></i>
                      <span>Currently in Google Play Closed Testing</span>
                    </div>
                  ) : (
                    <div className="mb-5 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2 max-w-md">
                      <i className="fa-solid fa-circle-check text-emerald-600 dark:text-emerald-500"></i>
                      <span>Available on Google Play</span>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => handleOpen(app)}
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-100 text-xs font-bold py-2.5 px-5 rounded-lg transition-all duration-200 border border-gray-200 dark:border-zinc-700 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-1.5 shadow-sm"
                    >
                      <i className="fa-solid fa-circle-info text-[10px]"></i>
                      <span>View Details</span>
                    </button>

                    {playStoreUrl && (
                      <div>
                        {isClosedTesting ? (
                          <button
                            onClick={(e) => handlePlayStoreClick(e, app)}
                            className="bg-amber-500 hover:bg-amber-600 text-xs text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-1.5 shadow-sm"
                          >
                            <i className="fa-brands fa-google-play"></i>
                            <span>{btnLabel}</span>
                          </button>
                        ) : (
                          <a
                            href={playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-brand-500 hover:bg-brand-600 text-xs text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-1.5 shadow-sm">
                              <i className="fa-brands fa-google-play"></i>
                              <span>{btnLabel}</span>
                            </button>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <AppModal 
        open={open} 
        setOpen={setOpen} 
        app={selectedApp} 
      />
    </div>
  );
}

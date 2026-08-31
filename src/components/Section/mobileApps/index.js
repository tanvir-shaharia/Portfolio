import React, { useState } from "react";
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
          const { name, platform, shortDescription, iconSrc, featureGraphic, status, playStoreUrl, version } = app;
          const isClosedTesting = status === "closed-testing";
          const btnLabel = isClosedTesting ? "Check Availability" : "View on Google Play";
          
          const screenshots = app.screenshots || [];
          // Use exactly the 5 key technologies on the main card as requested
          const featuredTech = ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Clean Architecture"];

          return (
            <div
              key={idx}
              className="w-full max-w-5xl flex flex-col p-6 md:p-8 rounded-2xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-brand-500/20 dark:hover:border-brand-400/20 transition-all duration-300 ease-out"
            >
              {/* Featured Showcase Main Row */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-10 w-full">
                {/* Visual Preview Panel (Left side, md:w-[48%] to maintain balance) */}
                <div 
                  className="relative w-full md:w-[48%] aspect-[16/9] bg-gray-50/50 dark:bg-zinc-950/20 border border-gray-200/50 dark:border-zinc-800/40 rounded-2xl flex items-center justify-center p-6 md:p-8 cursor-pointer group shadow-sm flex-shrink-0"
                  onClick={() => handleOpen(app)}
                  title="Click to view details"
                >
                  {/* Subtle background glow */}
                  <div className="absolute w-24 h-24 bg-brand-500/5 dark:bg-brand-500/3 rounded-full blur-2xl"></div>

                  {featureGraphic && (
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200/60 dark:border-zinc-800/60 bg-zinc-950/10 dark:bg-zinc-950 shadow-sm relative group-hover:scale-[1.01] transition-transform duration-500">
                      {/* Very light dark-mode dimmer overlay to integrate the graphic beautifully without making it dull */}
                      <div className="absolute inset-0 bg-black/[0.03] dark:bg-black/15 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
                      <img 
                        src={featureGraphic} 
                        alt={`${name} featured branding visual`} 
                        className="w-full h-full object-cover select-none pointer-events-none z-0" 
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Content Panel (Right side, flex-1) */}
                <div className="flex-1 flex flex-col justify-between py-1 w-full">
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

                    {/* App Logo & Title Row */}
                    <div className="flex items-center gap-3 mt-1.5">
                      {iconSrc && (
                        <img 
                          src={iconSrc} 
                          alt={`${name} logo`} 
                          className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl object-contain border border-gray-200/80 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-1 flex-shrink-0 shadow-sm"
                        />
                      )}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-zinc-50 tracking-tight">
                        {name}
                      </h3>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm font-bold text-gray-800 dark:text-zinc-200 mt-3.5">
                      Track Better. Spend Smarter.
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mt-2 max-w-xl font-normal">
                      {shortDescription}
                    </p>
                  </div>

                  <div className="mt-6">
                    {/* Key Technologies (Clean, exactly 5 badges as requested) */}
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

              {/* Clean horizontal screenshot strip/carousel beneath the main showcase */}
              {screenshots.length > 0 && (
                <div className="mt-8 w-full border-t border-gray-150 dark:border-zinc-800/80 pt-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-4 pl-1">
                    Product Screenshots
                  </h4>
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2 scroll-smooth snap-x snap-mandatory w-full select-none">
                    {screenshots.map((screen, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="flex-shrink-0 rounded-xl overflow-hidden border border-gray-250 dark:border-zinc-800/70 bg-gray-50 dark:bg-zinc-950/20 shadow-sm cursor-zoom-in hover:scale-[1.01] hover:border-brand-500/20 dark:hover:border-brand-400/20 active:scale-[0.99] transition-all duration-300 snap-start"
                        onClick={() => handleOpen(app)}
                        title="Click to view full gallery"
                      >
                        <img 
                          src={screen} 
                          alt={`${name} screenshot ${sIdx + 1}`} 
                          className="h-[260px] sm:h-[280px] w-auto object-contain block" 
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-400 dark:text-zinc-500 mt-2.5 pl-1 font-medium flex items-center gap-1.5">
                    <i className="fa-solid fa-arrows-left-right text-[9px]"></i>
                    <span>Scroll horizontally to preview screenshots</span>
                  </div>
                </div>
              )}
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

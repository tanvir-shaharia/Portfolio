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
        title: `${app.name} Closed Testing`,
        text: `${app.name} is currently in Google Play Closed Testing and is not publicly available yet. Public access will be available after the testing requirements are completed.`,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto items-stretch">
        {mobileAppsList.map((app, idx) => {
          const { name, platform, shortDescription, iconSrc, featureGraphic, status, playStoreUrl, version, tagline } = app;
          const isClosedTesting = status === "closed-testing";
          const isUnderDevelopment = status === "under-development";
          const btnLabel = isClosedTesting ? "Check Availability" : "View on Google Play";
          
          const featuredTech = app.featuredTech || (app.technologies ? app.technologies.slice(0, 5) : ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Clean Architecture"]);
          const formattedVersion = version ? (version.toLowerCase().startsWith("v") || version.toLowerCase().includes("dev") ? version : `v${version}`) : "";

          return (
            <div
              key={idx}
              className="flex flex-col h-full rounded-2xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-brand-500/20 dark:hover:border-brand-400/20 transition-all duration-300 ease-out overflow-hidden group"
            >
              {/* Feature Graphic Media Banner */}
              <div 
                className="relative w-full aspect-[2/1] bg-gray-900 dark:bg-black border-b border-gray-200/60 dark:border-zinc-800/60 flex items-center justify-center cursor-pointer overflow-hidden flex-shrink-0"
                onClick={() => handleOpen(app)}
                title="Click to view details & screenshots"
              >
                {/* Subtle background glow */}
                <div className="absolute w-28 h-28 bg-brand-500/5 dark:bg-brand-500/3 rounded-full blur-2xl pointer-events-none"></div>

                {featureGraphic && (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/[0.02] dark:bg-black/15 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
                    <img 
                      src={featureGraphic} 
                      alt={`${name} feature graphic`} 
                      className="w-full h-full object-contain object-center select-none pointer-events-none group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Quick 'View Details' pill overlay on hover */}
                <div className="absolute bottom-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-black/65 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <i className="fa-solid fa-expand text-[9px]"></i>
                  <span>View Details</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
                <div>
                  {/* Platform & Version */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] sm:text-xs text-brand-500 dark:text-brand-400 font-extrabold uppercase tracking-widest">
                      {platform}
                    </span>
                    {formattedVersion && (
                      <>
                        <span className="text-gray-300 dark:text-zinc-700 text-xs">•</span>
                        <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">
                          {formattedVersion}
                        </span>
                      </>
                    )}
                  </div>

                  {/* App Logo & Title */}
                  <div className="flex items-center gap-3 mt-1">
                    {iconSrc && (
                      <img 
                        src={iconSrc} 
                        alt={`${name} logo`} 
                        className="w-10 h-10 rounded-xl object-contain border border-gray-200/80 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-1 flex-shrink-0 shadow-sm"
                      />
                    )}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-zinc-50 tracking-tight">
                      {name}
                    </h3>
                  </div>

                  {/* Tagline */}
                  {tagline && (
                    <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-zinc-200 mt-2.5">
                      {tagline}
                    </p>
                  )}

                  {/* Description (2-3 lines clamped for visual balance) */}
                  <p className="text-xs sm:text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed mt-1.5 line-clamp-3 font-normal">
                    {shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-zinc-800/60">
                  {/* Key Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {featuredTech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-indigo-50/70 text-indigo-600 dark:bg-brand-950/20 dark:text-brand-400 border border-indigo-100/20 dark:border-brand-900/10 text-[10px] font-bold px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status Banner */}
                  {isClosedTesting ? (
                    <div className="mb-4 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 rounded-lg py-1.5 px-2.5">
                      <i className="fa-solid fa-flask text-xs text-amber-600 dark:text-amber-500 flex-shrink-0"></i>
                      <span className="truncate">Currently in Google Play Closed Testing</span>
                    </div>
                  ) : isUnderDevelopment ? (
                    <div className="mb-4 flex items-center gap-2 text-xs text-sky-600 dark:text-sky-400 font-semibold bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/20 rounded-lg py-1.5 px-2.5">
                      <i className="fa-solid fa-code text-xs text-sky-600 dark:text-sky-400 flex-shrink-0"></i>
                      <span className="truncate">Under Active Development</span>
                    </div>
                  ) : (
                    <div className="mb-4 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-1.5 px-2.5">
                      <i className="fa-solid fa-circle-check text-xs text-emerald-600 dark:text-emerald-500 flex-shrink-0"></i>
                      <span className="truncate">Available on Google Play</span>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => handleOpen(app)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-100 text-xs font-bold py-2.5 px-3.5 rounded-lg transition-all duration-200 border border-gray-200 dark:border-zinc-700 hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <i className="fa-solid fa-circle-info text-[10px]"></i>
                      <span>View Details</span>
                    </button>

                    {playStoreUrl && !isUnderDevelopment && (
                      <div className="flex-1">
                        {isClosedTesting ? (
                          <button
                            onClick={(e) => handlePlayStoreClick(e, app)}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-xs text-white font-bold py-2.5 px-3 rounded-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <i className="fa-brands fa-google-play"></i>
                            <span className="truncate">{btnLabel}</span>
                          </button>
                        ) : (
                          <a
                            href={playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                          >
                            <button className="w-full bg-brand-500 hover:bg-brand-600 text-xs text-white font-bold py-2.5 px-3 rounded-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                              <i className="fa-brands fa-google-play"></i>
                              <span className="truncate">{btnLabel}</span>
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

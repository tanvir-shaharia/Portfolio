import { motion } from "framer-motion";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../assets/css/blur.css";
import blur from "../../../assets/images/blur.webp";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import projectList from "../../../utils/projectList";
import ProjectModal from "./projectModal";
import { handleCardHoverMove, handleCardHoverLeave } from "../../../utils/motion";

export default function Projects({ items }) {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");
  const handleOpen = (id) => {
    setOpen(true);
    setProjectId(id);
  };

  const { width } = useWindowDimensions();

  const slice = items || projectList;

  return (
    <>
      {slice.map((item, idx) => {
        const { id, imageSrc, placeholderSrc, name, category } = item || {};
        return (
          <Fade key={idx} className="w-full block">
            <motion.div
              layout={width > 768 ? true : false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col mb-4 md:mb-0"
            >
              <div
                className="card-spotlight tilt-card relative projectBtn w-full overflow-hidden hover:cursor-pointer rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl hover:border-secondary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)] transition-all duration-300 ease-out group bg-white/70 dark:bg-surface-glass backdrop-blur-xl flex flex-col justify-between"
                onClick={() => handleOpen(id)}
                onMouseMove={handleCardHoverMove}
                onMouseLeave={handleCardHoverLeave}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(id);
                  }
                }}
                aria-label={`View details for ${name}`}
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-surface-container-lowest">
                  {/* Tech Badges */}
                  <div className="absolute top-3 left-3 z-20 flex gap-1.5 flex-wrap">
                    {category.slice(0, 2).map((cat, cIdx) => (
                      <span
                        key={cIdx}
                        className="bg-black/75 backdrop-blur-md text-secondary border border-secondary/30 font-mono-tag text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-md"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <LazyLoadImage
                    src={imageSrc}
                    placeholderSrc={placeholderSrc ? placeholderSrc : blur}
                    threshold="100"
                    alt={name}
                    effect="blur"
                    height="100%"
                    width="100%"
                    className="object-cover h-full w-full block transition-transform duration-500 ease-out group-hover:scale-105"
                    key={idx}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Card Info Bar */}
                <div className="p-5 flex flex-col gap-3 border-t border-gray-100 dark:border-white/5 bg-transparent">
                  <div>
                    <h5 className="font-headline-sm font-bold text-base sm:text-lg text-gray-900 dark:text-text-primary group-hover:text-secondary transition-colors">
                      {name}
                    </h5>
                    <p className="font-mono-tag text-xs text-gray-500 dark:text-text-muted mt-1 line-clamp-1">
                      {category.join(" • ")}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono-tag text-secondary font-semibold pt-2 border-t border-gray-100 dark:border-white/5">
                    <span>Inspect Architecture Specs</span>
                    <div className="w-7 h-7 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Fade>
        );
      })}

      <ProjectModal
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
        projectId={projectId}
      />
    </>
  );
}

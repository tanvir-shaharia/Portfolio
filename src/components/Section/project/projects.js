import { motion } from "framer-motion";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";
import "../../../assets/css/blur.css";
import blur from "../../../assets/images/blur.webp";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import projectList from "../../../utils/projectList";
import ProjectModal from "./projectModal";

export default function Projects({ items }) {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");
  const handleOpen = (id) => {
    setOpen(true);
    setProjectId(id);
  };

  const location = useLocation();
  const path = location.pathname;
  const { width } = useWindowDimensions();

  let slice;
  if (path === "/" && projectList.length > 9) {
    slice = projectList.slice(0, 9);
  } else {
    slice = items;
  }

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
                className="relative projectBtn w-full overflow-hidden hover:cursor-pointer rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:border-brand-500/50 dark:hover:border-brand-400/50 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_4px_20px_rgba(129,140,248,0.2)] transition-all duration-300 ease-out group bg-white dark:bg-zinc-900/90 flex flex-col justify-between"
                onClick={() => handleOpen(id)}
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
                <div className="relative w-full h-44 sm:h-40 lg:h-44 overflow-hidden rounded-t-xl bg-gray-100 dark:bg-zinc-800">
                  {/* Tech Badges */}
                  <div className="absolute top-3 left-3 z-20 flex gap-1">
                    {category.slice(0, 2).map((cat, cIdx) => (
                      <span key={cIdx} className="bg-black/75 backdrop-blur-sm text-white text-[9px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-md border border-white/10 shadow-md">
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
                    className="object-cover h-full w-full block transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    key={idx}
                    loading="lazy"
                  />
                </div>

                {/* Card Info Bar */}
                <div className="p-4 flex items-center justify-between gap-3 border-t border-gray-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/90 group-hover:bg-gray-50/80 dark:group-hover:bg-zinc-800/60 transition-colors">
                  <div className="truncate">
                    <h5 className="font-bold capitalize text-sm text-gray-900 dark:text-zinc-100 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors truncate">
                      {name}
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-zinc-400 font-medium mt-0.5 truncate">
                      {category.join(", ")}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 group-hover:bg-brand-500 group-hover:text-white text-gray-600 dark:text-zinc-300 flex items-center justify-center text-xs transition-all flex-shrink-0">
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
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

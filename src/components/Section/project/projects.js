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
                className="relative projectBtn w-full overflow-hidden hover:cursor-pointer h-64 sm:h-52 lg:h-56 rounded-xl border border-gray-150 dark:border-zinc-800/80 group"
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
                  className="object-cover min-h-full w-full block transition-transform duration-500 group-hover:scale-105"
                  key={idx}
                  loading="lazy"
                />
                <div className="absolute bg-zinc-950/90 backdrop-blur-sm h-[80px] w-full -bottom-full left-0 z-30 md:flex flex-col justify-center items-center slide-up transition-all ease-in-out duration-500 text-white hidden">
                  <div className="px-4 text-center">
                    <div className="font-bold capitalize text-sm mb-0.5">
                      {name}
                    </div>
                    <div className="text-xs text-red-400 font-medium">
                      {category.map((cat, idx) => (
                        <span key={idx}>{(idx ? ", " : "") + cat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="md:hidden mt-3 px-2 flex justify-between items-center cursor-pointer" 
                onClick={() => handleOpen(id)}
              >
                <div>
                  <div className="font-bold capitalize text-sm text-gray-900 dark:text-white">
                    {name}
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400 font-semibold mt-0.5">
                    {category.join(", ")}
                  </div>
                </div>
                <div className="text-red-600 dark:text-red-500 text-xs font-bold flex items-center gap-1">
                  Details <i className="fa-solid fa-arrow-right text-[10px]"></i>
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

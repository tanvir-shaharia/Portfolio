import { motion } from "framer-motion";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLocation } from "react-router-dom";
import png from "../../../assets/images/blur.webp";
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
      {slice.map((item, idx) => (
        <Fade key={item.id}>
          <motion.div
            key={item.id}
            layout={width > 768 ? true : false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative projectBtn max-h-60 md:h-52 lg:h-56 w-full object-contain  overflow-hidden hover:cursor-pointer"
              key={idx}
              onClick={() => handleOpen(item.id)}
            >
              <LazyLoadImage
                src={item.image}
                placeholderSrc={png}
                alt={item.name}
                height="100%"
                width="100%"
                className="object-cover min-h-full"
                key={idx}
              />
              <div className="absolute bg-white/80 backdrop-blur  h-[80px] w-full -bottom-full left-0 z-30 md:flex justify-center items-center slide-up transition-all ease-in-out duration-500 dark:text-black hidden">
                <div>
                  <div className="font-semibold capitalize text-base text-center">
                    {item.name}
                  </div>
                  <div className="text-center text-sm">
                    {item.category.map((cat, idx) => (
                      <span key={idx}>{(idx ? ", " : "") + cat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Fade>
      ))}

      <ProjectModal
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
        projectId={projectId}
      />
    </>
  );
}

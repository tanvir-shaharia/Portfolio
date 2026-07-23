import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import projectList from "../../../utils/projectList.json";

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

function ProjectModal({ setOpen, open, projectId }) {
  const handleClose = () => setOpen(false);

  const findProject = projectList.filter(
    (project) => project?.id === projectId
  );

  let content = null;

  content = findProject.map((project, idx) => {
    const { name, imageSrc, category, link, source, description, contributions } = project || {};
    return (
      <div key={idx} className="flex flex-col md:flex-row gap-6 p-5">
        {/* Mockup Column */}
        <div className="flex-shrink-0 flex justify-center items-center md:w-[220px] w-full bg-gray-100/50 dark:bg-zinc-900/80 rounded-xl p-4 border border-gray-200/50 dark:border-zinc-800">
          {/* Smartphone Frame Wrapper */}
          <div className="relative mx-auto border-[8px] border-zinc-800 dark:border-zinc-700 bg-zinc-800 dark:bg-zinc-700 rounded-[2.5rem] h-[340px] w-[170px] shadow-xl overflow-hidden">
            {/* Camera notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-zinc-800 dark:bg-zinc-700 rounded-full z-20"></div>
            {/* Screen content */}
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black flex justify-center items-center">
              <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Details Column */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              className="capitalize font-extrabold text-gray-900 dark:text-zinc-100 text-xl md:text-2xl"
            >
              {name}
            </Typography>

            <div className="text-xs md:text-sm text-gray-600 dark:text-zinc-300 mt-2.5 mb-4 leading-relaxed font-normal">
              {description}
            </div>

            {contributions && contributions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
                  Key Contributions
                </h4>
                <ul className="list-disc list-outside ml-4 text-xs text-gray-600 dark:text-zinc-300 space-y-1.5">
                  {contributions.map((con, cIdx) => (
                    <li key={cIdx} className="leading-relaxed">{con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {category.map((cat, idx) => (
                <span
                  className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2.5 py-1 rounded dark:bg-brand-950/40 dark:text-brand-400 border border-indigo-100/50 dark:border-brand-900/40 capitalize inline-block"
                  key={idx}
                >
                  {cat}
                </span>
              ))}
            </div>

            {(link || source) && (
              <div className="flex gap-2.5 pt-2">
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full bg-brand-500 hover:bg-brand-600 text-xs text-white font-bold py-2.5 px-3 rounded-lg inline-flex items-center justify-center transition-colors">
                      <i className="fa-solid fa-share-from-square mr-1.5"></i>
                      <span>Get App</span>
                    </button>
                  </a>
                )}
                {source && (
                  <a href={source} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full bg-zinc-800 hover:bg-zinc-900 text-xs text-white font-bold py-2.5 px-3 rounded-lg inline-flex items-center justify-center transition-colors border border-zinc-700 dark:border-zinc-800">
                      <i className="fa-brands fa-github mr-1.5"></i>
                      <span>Github</span>
                    </button>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-[96%] md:w-[700px] outline-none rounded-xl overflow-x-auto scrollbar-hide dark:text-zinc-100 bg-gray-50 dark:bg-zinc-900 dark:border dark:border-zinc-800"
        >
          <button
            className="absolute top-3 right-3 h-8 w-8 dark:bg-zinc-800 bg-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700 dark:text-zinc-200 text-gray-700 rounded-full z-50 flex items-center justify-center transition-colors"
            onClick={handleClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {content}
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;

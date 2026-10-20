import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import projectList from "../../../utils/projectList.json";
import { GitHubIcon } from "../../SocialBrandIcon";

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
                <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-2">
                  Key Technical Implementations
                </h4>
                <ul className="list-disc list-outside ml-4 text-xs text-gray-600 dark:text-text-muted space-y-1.5 font-body-md">
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
                  className="font-mono-tag text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20"
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
                    <button className="w-full bg-sky-600 hover:bg-sky-500 text-xs text-white font-label-ui font-bold py-2.5 px-3 rounded-xl inline-flex items-center justify-center transition-all cursor-pointer shadow-md">
                      <span className="material-symbols-outlined text-sm mr-1.5">open_in_new</span>
                      <span>Live App Listing</span>
                    </button>
                  </a>
                )}
                {source && (
                  <a href={source} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-surface-glass dark:hover:bg-white/10 text-xs text-gray-900 dark:text-on-surface font-label-ui font-bold py-2.5 px-3 rounded-xl inline-flex items-center justify-center transition-all border border-gray-200 dark:border-white/15 cursor-pointer">
                      <GitHubIcon className="w-4 h-4 mr-1.5 inline-block text-gray-900 dark:text-white" />
                      <span>GitHub Specs</span>
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
          className="w-[96%] md:w-[720px] outline-none rounded-3xl overflow-hidden bg-white/95 dark:bg-surface-panel/95 backdrop-blur-2xl border border-gray-200/80 dark:border-white/15 shadow-2xl p-6"
        >
          <button
            className="absolute top-4 right-4 h-9 w-9 bg-gray-100 hover:bg-gray-200 dark:bg-surface-glass dark:hover:bg-white/15 text-gray-700 dark:text-zinc-200 rounded-full z-50 flex items-center justify-center transition-all border border-gray-200 dark:border-white/10 cursor-pointer shadow-sm"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
          {content}
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;

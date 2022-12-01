import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import projectList from "../../../utils/projectList";
import Title from "../title";
import ProjectButton from "./projectButton";
import Projects from "./projects";
import { Fade } from "react-reveal";

export default function Project() {
  const [items, setItems] = useState(projectList);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="containerCustom gap">
      <Title title="projects" />
      {path !== "/" && <ProjectButton setItem={setItems} items={items} />}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 columns-1 gap-1 justify-items-center">
        <AnimatePresence>
          <Projects items={items} />
        </AnimatePresence>
      </div>
      {path === "/" && (
        <Fade up>
          <div className="text-center mt-9 flex justify-center">
            <Link to="/projects">
              <button
                type="button"
                className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-5 md:px-9 md:hover:px-16 py-3.5 text-center mr-2 mb-2 text-white transition-all flex items-center justify-center"
              >
                Show more
                <i className="fa-solid fa-arrow-right pl-1"></i>
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </div>
  );
}

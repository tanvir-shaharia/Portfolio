import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link, useLocation } from "react-router-dom";
import projectList from "../../../utils/projectList";
import Title from "../title";
import ProjectButton from "./projectButton";
import Projects from "./projects";

export default function Project() {
  const [items, setItems] = useState([...projectList.sort((b, a) => a.id - b.id)]);

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="containerCustom gap">
      <Title title="projects" />
      <ProjectButton setItem={setItems} items={items} />

      <AnimatePresence>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 columns-1 gap-1 justify-items-center">
          <Projects items={items} setItem={setItems} />{" "}
        </div>
      </AnimatePresence>

      {path === "/" && (
        <Fade up>
          <div className="text-center mt-9 flex justify-center">
            <Link to="/projects">
              <button
                type="button"
                className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-violet hover:from-brand-500 hover:to-indigo-600 font-medium rounded-3xl text-sm px-8 py-3.5 text-center text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
              >
                Show more
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </div>
  );
}

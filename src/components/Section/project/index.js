import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import projectList from "../../../utils/projectList.json";
import ProjectButton from "./projectButton";
import Projects from "./projects";
import ScrollReveal from "../../ScrollReveal";

export default function Project() {
  const [items, setItems] = useState([...projectList.sort((b, a) => a.id - b.id)]);

  return (
    <section
      id="projects"
      className="mt-20 sm:mt-28 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      aria-label="All Shipped Mobile Engineering Projects"
    >
      {/* Modern Section Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
              {"// SHIPPED_ENGINEERING_ROSTER"}
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight mt-1">
              All Shipped & Client Projects
            </h2>
          </div>
          <p className="font-body-md text-sm sm:text-base text-gray-600 dark:text-text-muted max-w-md leading-relaxed">
            Full portfolio of production Android Native, Flutter, and IoT solutions delivering verified scale across telecom, health, and enterprise hardware.
          </p>
        </div>
      </ScrollReveal>

      {/* Cyber-Glass Category Filter */}
      <ProjectButton setItem={setItems} items={items} />

      {/* Responsive Cyber-Glass Grid */}
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
          <Projects items={items} setItem={setItems} />
        </div>
      </AnimatePresence>
    </section>
  );
}

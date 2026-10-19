import React from "react";
import ServicesBento from "./ServicesBento";
import TechMatrix from "./TechMatrix";
import GitHubShowcase from "../about/githubShowcase";

export default function Skill() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
      {/* 5.1 Specialized Capabilities Bento Grid */}
      <ServicesBento />

      {/* 5.3 Technical Stack Matrix */}
      <TechMatrix />

      {/* Live Verified Contribution Stream */}
      <div className="mt-2 sm:mt-4">
        <GitHubShowcase />
      </div>
    </div>
  );
}

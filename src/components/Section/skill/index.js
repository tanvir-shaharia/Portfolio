import React from "react";
import Title from "../title";
import SkillGroups from "./../../../utils/skillData.json";
import ArchitectureShowcase from "./architectureShowcase";
import GitHubShowcase from "../about/githubShowcase";

export default function Skill() {
  return (
    <>
      <div className="containerCustom gap">
        <Title title="skills & expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SkillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-5 text-brand-500 dark:text-brand-400 pb-2 border-b border-gray-100 dark:border-zinc-800/80 flex items-center gap-2">
                  <span className="w-1 h-5 bg-brand-500 dark:bg-brand-400 rounded-full"></span>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-gray-50/50 hover:bg-gray-100 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 border border-gray-100 dark:border-zinc-700/60 rounded-lg text-xs font-semibold text-gray-700 dark:text-zinc-200 transition-all hover:scale-[1.02] duration-200 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400 animate-pulse"></span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ArchitectureShowcase />
        <GitHubShowcase />
      </div>
    </>
  );
}

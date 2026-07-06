import React from "react";
import educationList from "../../../utils/educationList.json";
import workList from "../../../utils/workList.json";
import certificationsList from "../../../utils/certificationsList.json";
import achievementsList from "../../../utils/achievementsList.json";
import Title from "../title";
import Education from "./education";
import WorkExperience from "./workExperience";

export default function Resume() {
  let experience = workList
    .sort((b, a) => a.id - b.id)
    .map((work, idx) => (
      <span key={idx}>
        <WorkExperience work={work} />
      </span>
    ));

  let university = educationList
    .sort((b, a) => a.id - b.id)
    .map((education, idx) => (
      <span key={idx}>
        <Education education={education} />
      </span>
    ));

  return (
    <>
      <div className="containerCustom gap">
        <Title title="Resume" />
        
        {/* Work Experience */}
        <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 overflow-hidden mb-8">
          <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-red-600 dark:text-red-500 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
            Work Experience
          </div>
          {experience}
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 overflow-hidden mb-8">
          <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-red-600 dark:text-red-500 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
            Education
          </div>
          {university}
        </div>

        {/* Achievements & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-red-600 dark:text-red-500 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
              Achievements
            </div>
            <div className="p-6 flex-1">
              <ul className="list-disc list-outside ml-4 space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievementsList.map((ach, idx) => (
                  <li key={idx} className="hover:text-red-600 transition-colors duration-200">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-red-600 dark:text-red-500 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
              Certifications & Training
            </div>
            <div className="p-6 flex-1 space-y-6">
              {certificationsList.map((cert, idx) => (
                <div key={idx} className="border-b last:border-0 border-gray-100 dark:border-zinc-800/60 pb-5 last:pb-0">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500 dark:text-gray-400 gap-1 mb-2">
                    <span className="font-medium text-red-600/80 dark:text-red-400/80">
                      {cert.institution}
                    </span>
                    <span>
                      {cert.duration} ({cert.completionDate})
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import educationList from "../../../utils/educationList.json";
import workList from "../../../utils/workList.json";
import certificationsList from "../../../utils/certificationsList.json";
import achievementsList from "../../../utils/achievementsList.json";
import Title from "../title";
import Education from "./education";
import WorkExperience from "./workExperience";
import ResumeDownloadBtn from "../../ResumeDownloadBtn";

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
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <Title title="Resume" className="!mb-0" />
          <ResumeDownloadBtn />
        </div>
        
        {/* Work Experience */}
        <div className="grid grid-cols-1 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-zinc-900/60 dark:border-zinc-800 overflow-hidden mb-8">
          <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-brand-500 dark:text-brand-400 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-500 dark:bg-brand-400 rounded-full"></span>
            Work Experience
          </div>
          {experience}
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-zinc-900/60 dark:border-zinc-800 overflow-hidden mb-8">
          <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-brand-500 dark:text-brand-400 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-500 dark:bg-brand-400 rounded-full"></span>
            Education
          </div>
          {university}
        </div>

        {/* Achievements & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-zinc-900/60 dark:border-zinc-800 overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-brand-500 dark:text-brand-400 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-500 dark:bg-brand-400 rounded-full"></span>
              Achievements
            </div>
            <div className="p-6 flex-1">
              <ul className="list-disc list-outside ml-4 space-y-3 text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
                {achievementsList.map((ach, idx) => (
                  <li key={idx} className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-200">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-zinc-900/60 dark:border-zinc-800 overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-gray-200 border-b dark:border-zinc-800 font-bold text-xl text-brand-500 dark:text-brand-400 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-500 dark:bg-brand-400 rounded-full"></span>
              Certifications & Training
            </div>
            <div className="p-6 flex-1 space-y-6">
              {certificationsList.map((cert, idx) => (
                <div key={idx} className="border-b last:border-0 border-gray-100 dark:border-zinc-800/60 pb-5 last:pb-0">
                  <h3 className="font-bold text-base text-gray-900 dark:text-zinc-100 mb-1">
                    {cert.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500 dark:text-zinc-400 gap-1 mb-2">
                    <span className="font-medium text-brand-500 dark:text-brand-400">
                      {cert.institution}
                    </span>
                    <span>
                      {cert.duration} ({cert.completionDate})
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-zinc-300 leading-relaxed mb-3">
                    {cert.description}
                  </p>
                  {cert.certificateUrl && (
                    <a
                      href={process.env.PUBLIC_URL + cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 dark:hover:text-brand-300 transition-colors"
                    >
                      <i className="fa-solid fa-file-pdf text-xs"></i>
                      <span>View Certificate</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

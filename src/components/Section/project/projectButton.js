import React, { useState } from "react";
import buttonList from "../../../utils/buttonList";
import projectList from "../../../utils/projectList";

export default function ProjectButton({ setItem }) {
  const [activeBtn, setActiveBtn] = useState("All");

  const filterItem = (cat) => {
    setActiveBtn(cat);
    if (cat === "All" || cat === "all") {
      setItem([...projectList]);
    } else if (cat === "Android") {
      setItem(
        projectList.filter((item) =>
          item.category.some(
            (c) => c === "Android Native" || c === "Kotlin" || c === "Android"
          )
        )
      );
    } else if (cat === "Flutter") {
      setItem(
        projectList.filter((item) =>
          item.category.some((c) => c === "Flutter" || c === "Dart")
        )
      );
    } else if (cat === "Bluetooth") {
      setItem(
        projectList.filter((item) =>
          item.category.some((c) => c === "Bluetooth" || c === "IoT")
        )
      );
    } else {
      setItem(
        projectList.filter((item) => item.category.includes(cat))
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2 flex-wrap justify-center p-1.5 rounded-2xl bg-white/60 dark:bg-surface-glass border border-gray-200/60 dark:border-white/10 backdrop-blur-xl shadow-lg">
          {buttonList.map((btn, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tag font-semibold transition-all duration-300 cursor-pointer ${
                activeBtn === btn.category || (activeBtn === "All" && btn.category === "All")
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "bg-transparent text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
              onClick={() => filterItem(btn.category)}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

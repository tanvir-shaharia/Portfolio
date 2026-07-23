import React, { useState } from "react";
import {
  HorizontalScrollContainer,
  HorizontalScrollItem,
} from "react-simple-horizontal-scroller";
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
      <div className="text-center mb-8">
        <HorizontalScrollContainer>
          <div className="flex items-center justify-center w-full">
            <span className="flex m-auto gap-2 flex-wrap justify-center">
              {buttonList.map((btn, idx) => (
                <HorizontalScrollItem id={idx} key={idx}>
                  <button
                    className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeBtn === btn.category || (activeBtn === "All" && btn.category === "All")
                        ? "bg-gradient-to-r from-brand-600 via-brand-500 to-accent-violet text-white shadow-md scale-[1.02]"
                        : "bg-gray-100 dark:bg-zinc-800/80 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-300 border border-gray-200/80 dark:border-zinc-700/60 hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                    onClick={() => filterItem(btn.category)}
                  >
                    {btn.name}
                  </button>
                </HorizontalScrollItem>
              ))}
            </span>
          </div>
        </HorizontalScrollContainer>
      </div>
    </>
  );
}

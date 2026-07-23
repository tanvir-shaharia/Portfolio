import React from "react";

export default function Info({ name, details }) {
  let content = <span className="font-semibold text-gray-800 dark:text-zinc-200">{details}</span>;

  if (name.toLowerCase() === "email") {
    content = (
      <a
        href={`mailto:${details}`}
        className="font-semibold text-red-600 dark:text-red-400 hover:underline transition-colors duration-200"
      >
        {details}
      </a>
    );
  } else if (name.toLowerCase() === "phone") {
    content = (
      <a
        href={`tel:${details.replace(/[\s-]/g, "")}`}
        className="font-semibold text-red-600 dark:text-red-400 hover:underline transition-colors duration-200"
      >
        {details}
      </a>
    );
  }

  return (
    <div className="flex py-1.5 flex-wrap text-sm">
      <div className="w-full md:w-[95px] capitalize text-gray-500 dark:text-zinc-400 font-medium">
        {name} :
      </div>
      <div className="flex-1">{content}</div>
    </div>
  );
}

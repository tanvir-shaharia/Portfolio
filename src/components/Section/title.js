import React from "react";

export default function Title({ title, titleDes, className }) {
  return (
    <>
      <div className={`text-center mb-12 ${className}`}>
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-violet to-brand-600">
            {title || "Title"}
          </span>
        </h1>
        {titleDes && (
          <span className="text-sm text-gray-600 dark:text-zinc-400">
            {titleDes}
          </span>
        )}
      </div>
    </>
  );
}

import React from "react";

export default function Title({ title, titleDes, className }) {
  return (
    <>
      <div className={`text-center mb-16 ${className}`}>
        <h1 className="text-3xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
            {title || "Title"}
          </span>
        </h1>
        {titleDes && (
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {titleDes}
          </span>
        )}
      </div>
    </>
  );
}

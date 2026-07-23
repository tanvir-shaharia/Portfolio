import React from "react";

function Info({icon}) {
  return (
    <div className="flex justify-center items-center mb-3">
      <div className="h-12 w-12 border border-gray-200 dark:border-zinc-700/60 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-200 flex justify-center items-center rounded-full text-lg">
        <i className={icon}></i>
      </div>

      <div className="ml-3 text-base">Gurudaspur,natore,bangladesh</div>
    </div>
  );
}

export default Info;

import React from "react";
import { Fade } from "react-reveal";

export default function ContactInp({ delay, type, placeholder, ...rest }) {
  return (
    <>
      <Fade up delay={delay}>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700/80 text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-400 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500 p-3.5 text-sm transition-all"
          {...rest}
        />
      </Fade>
    </>
  );
}

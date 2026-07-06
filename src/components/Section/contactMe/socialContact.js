import React from "react";
import { Fade } from "react-reveal";

function SocialContact({ link, name, icon, delay }) {
  return (
    <Fade up delay={delay}>
      {" "}
      <li>
        <a
          href={link}
          target="_blank"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white"
          rel="noopener noreferrer"
        >
          <i className={icon}></i>
          <span className="flex-1 ml-3 whitespace-nowrap capitalize">
            {name}
          </span>
        </a>
      </li>
    </Fade>
  );
}

export default SocialContact;

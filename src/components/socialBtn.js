import React from "react";

function SocialBtn({ icon, hover, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${hover} customButton duration-300 inline-flex items-center justify-center`}
      aria-label={`Open link to ${hover || "social platform"}`}
    >
      <i className={`${icon} hover:scale-110 transition-transform`}></i>
    </a>
  );
}

export default SocialBtn;

import React from "react";
import { Link } from "react-router-dom";
import socialBtnList from "../utils/socialBtnList.json";
import SocialBtn from "./socialBtn";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 dark:bg-[#09090b] dark:border-t dark:border-zinc-800/80 shadow">
        <div className="lg:flex lg:items-center lg:justify-between text-center p-5 lg:p-2 containerCustom">
          <span className="text-sm text-gray-500 lg:text-center dark:text-zinc-400">
            © {new Date().getFullYear()}{" "}
            <span className="hover:text-brand-500 dark:hover:text-brand-400 font-semibold transition-colors">
              MD Tanvir Shaharia
            </span>
            . All Rights Reserved.{" | "}
            <Link
              to="/pocketlog/privacy"
              className="hover:text-brand-500 dark:hover:text-brand-400 font-semibold transition-colors"
            >
              PocketLog Privacy Policy
            </Link>
          </span>
          <div className="icons text-gray-600 dark:text-zinc-300 flex justify-center flex-wrap mt-2 lg:mt-0">
            {socialBtnList.map((btn, idx) => {
              const { link, hover, icon } = btn || {};
              return (
                <SocialBtn
                  key={idx}
                  link={link}
                  hover={`${hover}`}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}

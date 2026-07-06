import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SlideToggle from "react-slide-toggle";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../assets/css/mobileMenu.css";
import avatar from "../assets/images/logo.webp";
import useWindowDimensions from "../hook/getWindowDimensions";
// import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";
import menuList from "../utils/manuList";

export default function Navbar({ theme, toggleDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(0);

  const { width } = useWindowDimensions();
  // const { scrollY } = useWindowScrollPositions();

  const toggle = () => setToggleEvent(Date.now());

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const location = useLocation();
  const path = location.pathname;

  return (
    <React.Fragment>
      {/* ${scrollY > 280 && "py-3"} */}
      <div
        className="backdrop-blur-xl bg-slate-100/40 dark:bg-[#09090b]/80 w-full top-0 left-0 fixed z-50 py-4 transition-all duration-200 border-b border-inherit dark:border-zinc-800/80 my-collapsible"
      >
        <div className="containerCustom flex items-center justify-between h-full">
          <div>
            <Link to="/">
              <h4 className="flex items-center text-xl">
                <div className="h-9 w-9 overflow-hidden rounded-full bg-transparent">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="ml-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 font-extrabold text-2xl">
                    Tanvir Shaharia
                  </span>
                </div>
              </h4>
            </Link>
          </div>
          <div className="flex items-center">
            <div className=" hidden md:block">
              <ul className="flex">
                {menuList.map((menu, idx) => (
                  <li key={idx}>
                    <Link
                      to={menu?.link}
                      className={`px-3 block hover:text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 font-medium capitalize transition-all ${
                        path === menu?.link || path === menu?.link + "/"
                          ? "text-transparent font-bold"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-7 flex justify-end">
              <DarkModeSwitch
                checked={
                  theme === undefined ? true : theme === "dark" ? true : false
                }
                onChange={toggleDarkMode}
                size={19}
                aria-label="Toggle dark mode"
              />
            </div>
            <div
              className={`md:hidden menu_icon flex flex-col items-start my-collapsible__toggle ${
                openMenu && "change"
              }`}
              onClick={() => {
                toggle();
                toggleMenu();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle();
                  toggleMenu();
                }
              }}
              role="button"
              aria-label="Toggle navigation menu"
              aria-expanded={openMenu}
              tabIndex="0"
            >
              <div className="bar1 bg-black dark:bg-white"></div>
              <div className="bar2 bg-black dark:bg-white"></div>
              <div className="bar3 bg-black dark:bg-white"></div>
            </div>
          </div>
        </div>
        <SlideToggle duration={500} toggleEvent={toggleEvent} collapsed>
          {({ setCollapsibleElement }) => (
            <div className={`${width > 768 && "hidden"}`}>
              <div
                className="transition-all containerCustom my-collapsible__content"
                ref={setCollapsibleElement}
              >
                <ul className="pt-5 flex flex-col gap-1.5">
                  {menuList.map((menu, idx) => (
                    <li key={idx}>
                      <Link
                        to={menu?.link}
                        onClick={() => {
                          toggle();
                          toggleMenu();
                        }}
                        className={`py-2.5 px-4 block w-full capitalize rounded-lg overflow-hidden transition-all ${
                          path === menu?.link || path === menu?.link + "/"
                            ? "bg-gradient-to-r from-red-600 to-rose-700 text-white font-semibold"
                            : "active:bg-gray-300 dark:active:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900/50"
                        }`}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </SlideToggle>
      </div>
    </React.Fragment>
  );
}

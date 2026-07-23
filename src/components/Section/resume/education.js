import React from "react";
import { Fade, Zoom } from "react-reveal";
import Icon from "../../../assets/images/university.png";
import NorthernLogo from "../../../assets/images/northern-university-logo-png_seeklogo-463531.png";
import RajshahiLogo from "../../../assets/images/rajshahi_polytechnic.png";
import useWindowDimensions from "../../../hook/getWindowDimensions";

export default function Education({ education }) {
  const {
    description,
    endDate,
    startDate,
    educationTitle,
    position,
    location,
  } = education || {};
  const { width } = useWindowDimensions();

  let currentLogo = Icon;
  if (educationTitle === "Northern University Bangladesh") {
    currentLogo = NorthernLogo;
  } else if (educationTitle === "Rajshahi Polytechnic Institute") {
    currentLogo = RajshahiLogo;
  }

  return (
    <>
      <div className="p-6 flex items-center">
        <Zoom>
          <div className="mr-6 hidden lg:flex items-center justify-center flex-shrink-0 w-44 h-24 p-3 bg-white dark:bg-white rounded-xl border border-gray-200 dark:border-zinc-700/80 shadow-sm transition-all hover:shadow-md">
            <img
              src={currentLogo}
              alt={educationTitle || "education_logo"}
              className="w-full h-full object-contain"
            />
          </div>
        </Zoom>
        <div className="w-full">
          <div className="flex items-center">
            <div className="overflow-hidden w-full">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h2 className="font-medium text-lg text-gray-900 dark:text-zinc-100">
                    <Fade left>{educationTitle}</Fade>
                  </h2>
                  <div className="text-gray-500 dark:text-zinc-300 text-sm">
                    <Fade left delay={150}>
                      <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                        <span className="inline-flex items-center capitalize gap-1">
                          <i className="bx bxs-graduation"></i> {position}
                        </span>
                        <span className="inline-flex items-center capitalize gap-1">
                          <i className="fa-solid fa-location-dot text-xs"></i>{" "}
                          {location}
                        </span>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="text-gray-500 dark:text-zinc-400 text-xs mt-1 md:mt-0">
                  <Fade
                    left={width < 768 ? true : false}
                    right={width > 768 ? true : false}
                    duration={1300}
                  >
                    <div className=" flex items-center ">
                      <div className="mr-1">
                        <i className="fa-regular fa-calendar-days text-xs"></i>
                      </div>
                      <div>{startDate}</div>
                      <div className="mx-1"> - </div>
                      <div>{endDate}</div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Fade up>
              <p className="mt-3 text-sm text-gray-500 dark:text-zinc-300">
                {description}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

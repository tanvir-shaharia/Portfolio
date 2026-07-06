import React from "react";
import { Fade, Zoom } from "react-reveal";
import picture from "../../../assets/images/myPic.jpg";
import Title from "../title";
import Info from "./info";

export default function About() {
  return (
    <div className=" flex items-center flex-wrap relative">
      {/* <div className="w-full lg:w-1/2 ">
        <Zoom>
          <img src={picture} alt="" className="w-full" />
        </Zoom>
      </div> */}
      <div className="containerCustom gap overflow-hidden">
        {/* <h4 className="  mt-7 md:mt-0 text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          About Me
        </h4> */}

        <Title title="about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-28">
            <Fade up cascade>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Hello! I Am MD Tanvir Shaharia.
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                I am a Software Engineer (Android & Flutter) with 2.5+ years of experience developing and maintaining production-ready mobile applications. Specializing in Android Native (Kotlin) and Flutter (Dart), I have a strong focus on clean architecture (MVVM, Clean Architecture), scalable application design, REST API integration, and robust state management (Riverpod, Provider). Passionate about modern Android technologies, Jetpack Compose, and AI-powered mobile experiences.
              </p>
              <div className="mt-5">
                <Fade up>
                  <Info name="email" details="tanvirshaharia120@gmail.com" />
                  <Info name="phone" details="+880 1644-566945" />
                  <Info name="address" details="Dhaka, Bangladesh" />
                  <Info name="status" details="Available for Opportunities" />
                </Fade>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div className="h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              <img src={picture} alt="" className="w-full object-cover h-full" />
            </div>{" "}
          </Zoom>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Fade, Zoom } from "react-reveal";
import picture from "../../../assets/images/myPic.jpg";
import Title from "../title";
import Info from "./info";

export default function About() {
  return (
    <div className="flex items-center flex-wrap relative">
      <div className="containerCustom gap overflow-hidden">
        <Title title="about me" />

        <div className="grid grid-cols-1 md:grid-cols-9 gap-8 items-center">
          <div className="md:col-span-5">
            <Fade up>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-zinc-100">
                Hello! I Am MD Tanvir Shaharia.
              </h3>
            </Fade>

            <Fade up delay={100}>
              <p
                style={{ wordBreak: "normal", overflowWrap: "normal", wordWrap: "normal" }}
                className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300 mb-4"
              >
                I am a Software Engineer (Android & Flutter) with almost 3 years of experience developing and maintaining production-ready mobile applications. Specializing in Android Native (Kotlin) and Flutter (Dart), I focus on building scalable, high-performance mobile solutions that deliver outstanding user experiences.
              </p>
            </Fade>

            <Fade up delay={200}>
              <p
                style={{ wordBreak: "normal", overflowWrap: "normal", wordWrap: "normal" }}
                className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300 mb-6"
              >
                My core expertise includes Clean Architecture, MVVM, REST API integration, robust state management (Riverpod, Provider), and Jetpack Compose—with a strong passion for modern mobile technologies and AI-assisted engineering workflows.
              </p>
            </Fade>

            <div className="mt-5">
              <Fade up delay={300}>
                <Info name="email" details="tanvirshaharia120@gmail.com" />
                <Info name="phone" details="+880 1644-566945" />
                <Info name="address" details="Dhaka, Bangladesh" />
                <Info name="status" details="Available for Opportunities" />
              </Fade>
            </div>
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

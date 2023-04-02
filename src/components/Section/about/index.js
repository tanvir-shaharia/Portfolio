import React from "react";
import { Fade, Zoom } from "react-reveal";
import picture from "../../.../../../assets/images/myPic.jpg";
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
              <h3>Hello! I Am Tanvir Shaharia.</h3>{" "}
              <p className="text-sm">
                I am a professional App Developer,Programmer & Graphics designer
                . I complete my projects with customer satisfaction. I can
                develop slick Android Applications and will provide you with the
                source code. Also, the application can be graphically enhanced
                if you desire. Contact me for further discussion. Anything from
                offline applications to database-connected online applications,
                from simple to advanced applications, there is no space for
                saying "IT CAN'T BE".
              </p>
              <div className="mt-5">
                <Fade up>
                  <Info name="email" details="tanvirshaharia120@gmail.com" />
                  <Info name="phone" details="+8801644566945" />
                  <Info name="address" details="Dhaka, Bangladesh" />
                  <Info name="status" details="Available" />
                </Fade>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div className="h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              <img src={picture} alt="" className="w-full" />
            </div>{" "}
          </Zoom>
        </div>
      </div>
    </div>
  );
}

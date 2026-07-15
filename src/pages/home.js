import React from "react";
import { Helmet } from "react-helmet";
import About from "../components/Section/about";
import ContactMe from "../components/Section/contactMe";
import TopSec from "../components/Section/home";
import Project from "../components/Section/project";
import Resume from "../components/Section/resume";
import Skill from "../components/Section/skill";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MD Tanvir Shaharia | Software Engineer (Android & Flutter)</title>
        <meta name="description" content="Software Engineer with 2.5+ years of professional experience in Android and Flutter development, specializing in Kotlin, Dart, Jetpack Compose, Clean Architecture, and production mobile applications." />
      </Helmet>

      {/* <PageLayout> */}
      <TopSec />
      <About />
      <Skill />
      <Project />
      <Resume />
      <ContactMe />
      {/* </PageLayout> */}
    </>
  );
}

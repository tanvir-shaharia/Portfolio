import React from "react";
import { Helmet } from "react-helmet";
import ContactMe from "../components/Section/contactMe";
import TopSec from "../components/Section/home";
import MobileApps from "../components/Section/mobileApps";
import Project from "../components/Section/project";
import Resume from "../components/Section/resume";
import Skill from "../components/Section/skill";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MD Tanvir Shaharia | Software Engineer (Android & Flutter)</title>
        <meta
          name="description"
          content="Software Engineer with 3+ years of professional experience in Android and Flutter development, specializing in Kotlin, Dart, Jetpack Compose, Clean Architecture, and production mobile applications."
        />
        <link rel="canonical" href="https://tanvirshaharia.vercel.app/" />
      </Helmet>

      {/* 1. Hero, Telemetry Metrics Bar & Enterprise Ecosystems Strip */}
      <TopSec />

      {/* 2. Flagship Mobile Products & Enterprise Solutions Showcase (#products) */}
      <MobileApps />

      {/* 3. Complete Shipped & Client Engineering Roster (#projects) */}
      <Project />

      {/* 4. Specialized Capabilities Bento Grid (#services) & Technical Stack Matrix (#skills) */}
      <Skill />

      {/* 5. Career Timeline & Academic Credentials (#experience & #credentials) */}
      <Resume />

      {/* 6. Engineering Inquiries & In-Depth Connect (#contact) */}
      <ContactMe />
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import MobileApps from "../components/Section/mobileApps";
import Project from "../components/Section/project";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | MD Tanvir Shaharia</title>
        <meta name="description" content="View production mobile applications (Kotlin, Flutter, Clean Architecture) developed by Software Engineer MD Tanvir Shaharia." />
        <link rel="canonical" href="https://tanvirshaharia.vercel.app/projects" />
      </Helmet>

      <PageLayout>
        <MobileApps />
        <Project />
      </PageLayout>
    </>
  );
}

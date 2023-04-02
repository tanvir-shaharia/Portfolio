import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Project from "../components/Section/project";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - Tanvir Shaharia</title>
      </Helmet>

      <PageLayout>
        <Project />
      </PageLayout>
    </>
  );
}

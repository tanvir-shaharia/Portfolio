import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Skills from "../components/Section/skill";

export default function Skill() {
  return (
    <>
      <Helmet>
        <title>Skill - Tanvir Shaharia</title>
      </Helmet>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}

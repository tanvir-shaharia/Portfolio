import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import AboutMe from "../components/Section/about";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | MD Tanvir Shaharia</title>
        <meta name="description" content="Learn more about MD Tanvir Shaharia, a Software Engineer with 2.5+ years of experience in Android and Flutter development." />
      </Helmet>

      <PageLayout>
        <AboutMe />
      </PageLayout>
    </>
  );
}

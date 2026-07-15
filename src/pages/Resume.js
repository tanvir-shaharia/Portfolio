import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import ResumeSec from "../components/Section/resume";

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume | MD Tanvir Shaharia</title>
        <meta name="description" content="Read MD Tanvir Shaharia's professional resume. Specializing in Android Native development (Kotlin) and cross-platform apps (Flutter & Dart)." />
      </Helmet>
      <PageLayout>
        <ResumeSec />
      </PageLayout>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Skills from "../components/Section/skill";

export default function Skill() {
  return (
    <>
      <Helmet>
        <title>Skills | MD Tanvir Shaharia</title>
        <meta name="description" content="Technical skills profile of MD Tanvir Shaharia: Android SDK, Kotlin, Jetpack Compose, Flutter, Dart, Clean Architecture, Bluetooth integration, and MVVM." />
      </Helmet>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}

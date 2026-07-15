import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import ContactMe from "../components/Section/contactMe";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | MD Tanvir Shaharia</title>
        <meta name="description" content="Get in touch with MD Tanvir Shaharia, Software Engineer specializing in mobile applications development (Android & Flutter)." />
      </Helmet>

      <PageLayout>
        <ContactMe />
      </PageLayout>
    </>
  );
}

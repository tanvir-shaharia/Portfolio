import React from "react";
import CareerTimeline from "./CareerTimeline";
import CredentialsGrid from "./CredentialsGrid";

export default function Resume() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
      {/* 5.2 Career Timeline & Engineering Scale (#experience) */}
      <CareerTimeline />

      {/* 6. Academic & Professional Credentials (#credentials) */}
      <CredentialsGrid />
    </div>
  );
}

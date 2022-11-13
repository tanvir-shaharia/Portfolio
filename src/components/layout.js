import React from "react";
import Navbar from "./nav";

export default function Layout({ children }) {
  return (
    <div className="relative dark:text-white dark:bg:black transition-all">
      <Navbar />
      {children}
    </div>
  );
}
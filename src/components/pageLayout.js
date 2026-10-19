import React from "react";

function PageLayout({ children }) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-[calc(100vh-16rem)]">
      <div>{children}</div>
    </div>
  );
}

export default PageLayout;

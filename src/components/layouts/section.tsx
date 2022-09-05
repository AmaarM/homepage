import React from "react";

type children = {
  children?: React.ReactNode;
};

const Section: React.FC<children> = ({ children }) => {
  return (
    <div className="h-[1000px] w-screen bg-black relative z-50">
      <>{children}</>
    </div>
  );
};

export default Section;

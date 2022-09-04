import React from "react";

type children = {
  children?: React.ReactNode;
}

const Section: React.FC<children> = ({ children }) => {
  return (
    <div className="h-[900px] w-screen align-middle bg-black relative z-50">
      <>{children}</>
    </div>
  );
};

export default Section;

"use client";

import React, { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const basePath = process.env.NODE_ENV === "production"
    ? "https://eesuhn.github.io/eesuhn"
    : "";

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-auto bg-repeat p-4"
      style={{ backgroundImage: `url(${basePath}/background.svg)` }}
    >
      {children}
    </div>
  );
};

export default Background;

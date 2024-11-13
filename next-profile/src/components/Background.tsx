"use client";

import React, { ReactNode } from "react";
import Image from "next/legacy/image";
import { basePath } from "@/lib/utils";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-6 relative"
    >
      <Image
        src={`${basePath}/background.svg?v=1`}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {children}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Background;

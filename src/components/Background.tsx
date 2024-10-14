'use client'

import React, { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => (
  <div
    className="flex items-center justify-center min-h-screen bg-auto bg-repeat p-4"
    style={{ backgroundImage: "url('/background.svg')" }}
  >
    {children}
  </div>
);

export default Background;

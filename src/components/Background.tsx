'use client'

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const pathname = usePathname();
  const basePath = pathname.startsWith('/eesuhn') ? '/eesuhn' : '';

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-auto bg-repeat p-4"
      style={{ backgroundImage: `url(${basePath}/background.svg)` }}
    >
      {children}
    </div>
  );
}

export default Background;

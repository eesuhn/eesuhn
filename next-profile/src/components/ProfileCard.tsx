'use client';

import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { basePath } from '@/lib/utils';

const socialLinks = [
  { href: 'mailto:eason.yihong@gmail.com', icon: Mail },
  { href: 'https://x.com/eesuhn', icon: Twitter },
  { href: 'https://linkedin.com/in/eason-lim', icon: Linkedin },
  { href: 'https://github.com/eesuhn', icon: Github },
];

const ProfileCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="z-10 w-full max-w-[420px]">
      <Tilt
        className="h-full w-full transition-all"
        perspective={3200}
        scale={1.02}
        gyroscope={true}
        glareEnable={true}
        glarePosition="all"
        glareMaxOpacity={0.12}
        glareBorderRadius="12px"
        tiltReverse={!isMobile}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
      >
        <div className="transform overflow-hidden rounded-xl bg-[#070F2B] shadow-lg transition-all duration-300 ease-in-out">
          <div className="relative">
            <Image
              src={`${basePath}/banner.png?v=1`}
              alt="Banner"
              width={300}
              height={100}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform">
              <Image
                src={`${basePath}/profile-photo.png?v=1`}
                alt="Profile Photo"
                width={128}
                height={128}
                className="rounded-full border-4 border-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>
          </div>
          <div className="mt-16 px-6 py-4 text-center">
            <h2 className="mb-0 text-2xl font-bold text-white">Eason Lim</h2>
            <p className="mb-4 text-sm text-gray-400">
              Cadet @ 42 • Web3 Buidler 🚀
            </p>
            <div className="flex flex-col items-center">
              <a
                href="https://t.me/eesuhn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center rounded bg-[#1628bb] px-6 py-3 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-4px_4px] hover:scale-105 hover:[box-shadow:rgb(171,_196,_245)0px_0px] focus:scale-105 focus:outline-none focus:[box-shadow:rgb(171,_196,_245)0px_0px]"
              >
                Let&apos;s Connect!
              </a>
              <a
                href={`${basePath}/resume/eason-lim.pdf?v=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 transform rounded-full px-4 py-0 text-sm font-bold text-gray-300 underline transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none"
              >
                Check out resumé
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-6 bg-[#535C91] bg-opacity-30 px-6 py-4">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default ProfileCard;

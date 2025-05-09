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
        glareMaxOpacity={0.1}
        glareBorderRadius="12px"
        tiltReverse={!isMobile}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
      >
        <div className="transform overflow-hidden rounded-xl bg-[#141414] shadow-lg transition-all duration-300 ease-in-out">
          <div className="relative">
            <Image
              src={`${basePath}/banner.webp?v=1`}
              alt="Banner"
              width={300}
              height={100}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform">
              <Image
                src={`${basePath}/profile-photo.webp?v=1`}
                alt="Profile Photo"
                width={128}
                height={128}
                className="rounded-full"
                priority
              />
            </div>
          </div>
          <div className="mt-14 px-6 py-4 text-center">
            <h2 className="mb-0 text-xl font-bold text-white">
              eason | eesuhn
            </h2>
            <span className="text-sm italic text-gray-400">
              Building cool ideas @{' '}
              <a
                href="https://www.coingecko.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:scale-105 focus:scale-105 focus:outline-none"
              >
                <Image
                  src="https://www.coingecko.com/favicon-96x96.png"
                  alt="CoinGecko Logo"
                  width={24}
                  height={24}
                  className="align-cg-logo inline-block rounded-sm"
                />
              </a>
              <a
                href="https://www.42network.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[6px] inline-flex items-center hover:scale-105 focus:scale-105 focus:outline-none"
              >
                <Image
                  src={`${basePath}/42.webp`}
                  alt="42 Logo"
                  width={21}
                  height={21}
                  className="align-42-logo inline-block rounded-sm"
                />
              </a>
            </span>
            <div className="mt-4 flex flex-col items-center">
              <a
                href="https://t.me/eesuhn"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[10px] inline-flex cursor-pointer items-center rounded bg-[#1F1F1F] px-6 py-3 font-semibold text-white transition [box-shadow:rgb(194,_192,188)-4px_4px] hover:scale-105 hover:[box-shadow:rgb(194,_192,_188)0px_0px] focus:scale-105 focus:outline-none focus:[box-shadow:rgb(194,_192,_188)0px_0px]"
              >
                Let&apos;s Connect!
              </a>
              {/* <a
                href={`${basePath}/resume/eason-lim.pdf?v=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 transform rounded-full px-4 py-0 text-sm font-bold text-gray-300 underline transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none"
              >
                Check out resumé
              </a> */}
            </div>
          </div>
          <div className="flex justify-center space-x-6 px-6 pb-6">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-white focus:text-white focus:outline-none"
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

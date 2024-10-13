'use client'

import { Tilt } from 'react-tilt'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function ProfileCardComponent() {

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-auto bg-repeat p-4"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="w-full max-w-md">
        <Tilt
          className="w-full h-full transition-all"
          options={{
            reverse: true,
            max: 30,
            perspective: 2000,
            scale: 1.0,
            speed: 800,
          }}
        >
          <div
            className="bg-[#070F2B] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative">
              <div className="w-full h-40 relative">
                <Image
                  src="/banner.jpg?v=1"
                  alt="Banner"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-32 h-32">
                <Image
                  src="/profile-photo.png?v=1"
                  alt="Profile Photo"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
                  priority
                />
              </div>
            </div>
            <div className="px-6 py-4 mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-0">Eason Lim</h2>
              <p className="text-gray-400 text-sm mb-4">Software Engineer | Cadet @ 42</p>
              <p className="text-gray-300 text-base mb-4">
                Know a thing or two about Web3 🌱
              </p>
              <div className="flex flex-col items-center">
                <a
                  href="https://t.me/eesuhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded cursor-pointer bg-[#1D2FBE] px-6 py-3 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-4px_4px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] focus:[box-shadow:rgb(171,_196,_245)0px_0px] focus:outline-none"
                >
                  Let&apos;s Connect!
                </a>
                <a
                  href="/resume.pdf?v=1"
                  download
                  className="underline mt-2 text-sm text-gray-300 font-bold py-0 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:scale-95"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-center space-x-6 bg-[#535C91] bg-opacity-30">
              <a
                href="mailto:eason.yihong@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/eesuhn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/eason-lim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/eesuhn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

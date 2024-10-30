import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['https://eesuhn.github.io/eesuhn'],
    unoptimized: true,
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/eesuhn/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/eesuhn" : "",
  images: {
    domains: ['https://eesuhn.github.io/eesuhn'],
    unoptimized: true,
  }
};

export default nextConfig;

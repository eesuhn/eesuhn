import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProduction ? "/eesuhn" : "",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

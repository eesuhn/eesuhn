/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/eesuhn/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/eesuhn" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

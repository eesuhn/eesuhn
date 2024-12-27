import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,

  basePath: isProduction ? '/eesuhn' : '',
  assetPrefix: isProduction ? '/eesuhn' : '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

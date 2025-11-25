import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  // Disable dynamic routes for static export
  trailingSlash: true,
};

export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optimize for static export builds
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;

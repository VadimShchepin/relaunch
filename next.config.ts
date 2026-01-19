import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize for static export builds
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // Note: www -> apex redirect handled at Vercel dashboard level
};

export default nextConfig;

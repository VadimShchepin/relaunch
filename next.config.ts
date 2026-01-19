import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // www -> apex redirect handled at Vercel dashboard level
};

export default nextConfig;

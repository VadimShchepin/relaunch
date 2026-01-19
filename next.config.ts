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
  // Note: redirects don't work with static export
  // Handle www -> apex redirect at Vercel level instead
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.aiseo.hamburg' }],
        destination: 'https://aiseo.hamburg/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

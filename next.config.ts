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
  // Consolidated 2026-08-11: three URLs competed for "ai seo agentur" and split
  // the ranking signal. /ai-seo-agentur is the canonical target.
  async redirects() {
    return [
      { source: '/hamburg/ai-seo-agentur', destination: '/ai-seo-agentur', permanent: true },
      { source: '/wissen/ai-seo-agentur', destination: '/ai-seo-agentur', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;

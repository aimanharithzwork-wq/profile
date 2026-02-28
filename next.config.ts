import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  // Disable Turbopack explicitly to avoid the webpack config conflict with next-pwa
  // Note: Standard way to disable is via CLI or flags, but we can try to force webpack
  webpack: (config: any) => {
    return config;
  },
};

export default withPWA(nextConfig);

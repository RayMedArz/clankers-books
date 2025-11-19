import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'compressed.photo.goodreads.com',
      },
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
      },
    ],
  },
};

export default nextConfig;

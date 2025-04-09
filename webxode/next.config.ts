import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

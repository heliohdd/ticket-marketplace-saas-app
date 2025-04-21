import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { hostname: "artful-lapwing-623.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;

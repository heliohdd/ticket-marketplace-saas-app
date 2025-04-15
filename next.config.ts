import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { hostname: "accurate-parrot-654.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;

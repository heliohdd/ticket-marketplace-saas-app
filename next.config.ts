import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { hostname: "shiny-sardine-41.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;

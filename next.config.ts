import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web",
  assetPrefix: "/web",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;

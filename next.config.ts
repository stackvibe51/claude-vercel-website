import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;

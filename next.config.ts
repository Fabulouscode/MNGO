import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // You can optionally add a trailing slash if needed for cPanel hosting
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export with Next.js images
  }
};

export default nextConfig;

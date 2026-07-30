import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800" },
      ],
    },
    {
      source: "/posts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800" },
      ],
    },
    {
      source: "/_next/image(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};
export default nextConfig;

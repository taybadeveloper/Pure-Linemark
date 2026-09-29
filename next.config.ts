import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
  // Inline the (small) CSS into the HTML so no render-blocking
  // stylesheet request delays LCP (Lighthouse fix)
  experimental: {
    inlineCss: true,
  },
  // Force browsers to always fetch fresh pages — no stale cached content
  // (static assets in /_next and images keep their normal caching).
  async headers() {
    return [
      {
        source:
          "/((?!_next/|.*\\.(?:png|jpe?g|gif|svg|ico|webp|css|js|woff2?)$).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

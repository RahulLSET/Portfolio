/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // 🟢 Prevent caching old build (very important for CI/CD)
  poweredByHeader: false,
  generateEtags: false,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, max-age=0" }
      ],
    },
  ],
};

export default nextConfig;

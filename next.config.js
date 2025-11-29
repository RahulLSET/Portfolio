/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  poweredByHeader: false,
  generateEtags: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, max-age=0"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;   // <-- THIS FIXED EVERYTHING

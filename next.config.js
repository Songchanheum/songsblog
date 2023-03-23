/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/list/1",
        permanent: true,
      },
      {
        source: "/blog/:temp",
        destination: "/blog/:temp/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

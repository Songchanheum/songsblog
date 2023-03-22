/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  basePath: "/songsblog",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://songchanheum.github.io/songsblog"
      : "",
};

module.exports = nextConfig;

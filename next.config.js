/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.solotechnopark.id",
        port: "3000",
      },
    ],
  },
};

module.exports = nextConfig;

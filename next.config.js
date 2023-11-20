/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axm.moe",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

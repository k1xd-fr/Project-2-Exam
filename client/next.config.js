/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    NEXT_PUBCLI_AUTH_API: process.env.NEXT_PUBCLI_AUTH_API,
  },
};

module.exports = nextConfig;

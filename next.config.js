const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    MONGODB: process.env.MONGODB_URI
  }
};

module.exports = nextConfig;

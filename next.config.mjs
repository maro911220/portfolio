/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    EMAIL: process.env.EMAIL,
    EMAILSERVICE: process.env.EMAILSERVICE,
    EMAILTEMP: process.env.EMAILTEMP,
  },
};

export default nextConfig;

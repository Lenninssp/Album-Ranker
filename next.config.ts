import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   plugins: {
    "@tailwindcss/postcss": {},
  },
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://r2.theaudiodb.com/images/media/**')],
  },
}

export default nextConfig;

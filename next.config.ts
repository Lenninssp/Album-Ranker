import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   plugins: {
    "@tailwindcss/postcss": {},
  },
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://r2.theaudiodb.com/images/media/**'), new URL("https://i.ytimg.com/vi/**")],
  },
}

export default nextConfig;

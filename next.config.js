/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    minimumCacheTTL: 31536000,
    // Netlify serves /_next/image through its /_ipx/ handler, which fails
    // with a 502 on Netlify's Node 24 functions. The images in public/ are
    // already sized webp files, so serve them as they are.
    unoptimized: true,
  },
}

module.exports = nextConfig

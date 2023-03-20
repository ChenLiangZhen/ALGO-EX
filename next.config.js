/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@visx/scale", "d3-scale", "d3-interpolate"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

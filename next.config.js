/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

module.exports = nextConfig; // Use this if package.json does NOT have "type": "module"

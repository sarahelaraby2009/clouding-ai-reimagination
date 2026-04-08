/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clouding.ai',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

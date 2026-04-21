/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      }
    ],
  },
  allowedDevOrigins: ['192.168.137.1', 'localhost', '127.0.0.1'],
};

export default nextConfig;

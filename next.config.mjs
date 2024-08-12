/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_RESERVAMOS_API: process.env.NEXT_PUBLIC_RESERVAMOS_API,
    NEXT_PUBLIC_OPEN_WEATHER_API: process.env.NEXT_PUBLIC_OPEN_WEATHER_API,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export default nextConfig;

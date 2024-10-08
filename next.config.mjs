/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/weather-forecast-web/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/weather-forecast-web' : '',
};

export default nextConfig;

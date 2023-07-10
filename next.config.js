/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'turismo.malargue.gov.ar',
        pathname: '/newstart/**',
      },
    ],
  }
}

module.exports = nextConfig

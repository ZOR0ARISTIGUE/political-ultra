/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.political-ultra.vercel.app'],
  },
  env: {
    NEXT_PUBLIC_DEPLOY_DATE: '2025-02-03',
    NEXT_PUBLIC_DEPLOY_USER: 'ZOR0ARISTIGUE',
    NEXT_PUBLIC_UTC_TIMESTAMP: '2025-02-03 12:47:44'
  }
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

require('dotenv').config()

module.exports = {
  env: {
    API_URL: process.env.OPENAI_API_KEY,
  }
}

module.exports = nextConfig

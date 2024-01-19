/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'placebear.com',
        },
        ],
  }  
}

module.exports = nextConfig

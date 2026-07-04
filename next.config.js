/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Homeschool track was discontinued — send its old URL to the school page.
      {
        source: '/programs/homeschool',
        destination: '/programs/full-live',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

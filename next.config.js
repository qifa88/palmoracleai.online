module.exports = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      { protocol: 'http', hostname: '**' },
      { protocol: 'https', hostname: '**' }
    ],
    unoptimized: true
  },
  output: 'export'
} 
module.exports = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      { protocol: 'http', hostname: '**' },
      { protocol: 'https', hostname: '**' }
    ],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: './',
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/analyze': { page: '/analyze' },
      '/result': { page: '/result' },
      '/404': { page: '/404' },
    };
  }
} 
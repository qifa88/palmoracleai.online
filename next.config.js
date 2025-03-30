module.exports = {
  images: {
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  exportPathMap: async function() {
    return {
      '/': { page: '/' }
    };
  }
} 
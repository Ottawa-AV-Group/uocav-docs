const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true
})

module.exports = withNextra({basePath:'/docs', reactStrictMode:true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        basePath: false,
        permanent: false
      },
    ];
  },
})

const config = require('./src/data/config')

module.exports = {
  siteMetadata: {
    title: config.name,
    siteUrl: config.url
  },
  plugins: [
    'gatsby-plugin-react-next',

    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'src/gallery' }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-nprogress',

    'gatsby-plugin-sitemap',

    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.url
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-68490094-11'
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.name,
        short_name: config.shortName,
        description: config.description,
        start_url: '/',
        background_color: '#FFFBFB',
        theme_color: '#FFB11B',
        display: 'standalone',
        icons: [
          {
            'src': 'favicon.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'logo.png',
            'sizes': '1500x1500',
            'type': 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
}

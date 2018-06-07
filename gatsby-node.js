exports.modifyWebpackConfig = ({ config, stage }) => {
  // Turn off source-maps
  if (stage === 'build-javascript' || stage === 'build-css') {
    config.merge({ devtool: false })
  }

  // Fix issue with autoprefixer (https://github.com/gatsbyjs/gatsby/issues/1347)
  (() => {
    config.merge({
      postcss (wp) {
        return [
          require('postcss-cssnext')({ browsers: ['last 2 versions', '> 1%', 'ie 11'] })
        ]
      }
    })

    if (stage === 'build-css') {
      config.removeLoader('sass')
      config.loader('sass', {
        test: /\.(sass|scss)/,
        exclude: /\.module\.(sass|scss)$/,
        loader: require('extract-text-webpack-plugin').extract(['css?minimize', 'postcss', 'sass'])
      })
    }

    if (stage === 'develop') {
      config.removeLoader('sass')
      config.loader('sass', {
        test: /\.(sass|scss)/,
        exclude: /\.module\.(sass|scss)$/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
      })
    }
  })()

  return config
}

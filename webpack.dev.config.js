const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
})

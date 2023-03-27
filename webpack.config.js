const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')

module.exports = {
  //entry: './src/js/main.js',
  entry: './src/ts/index.ts',
  devtool:'source-map',
  resolve: { extensions: ['.ts'] },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',

    //filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/assets/index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
}

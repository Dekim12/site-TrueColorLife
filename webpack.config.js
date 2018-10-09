const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin');

const extractSASS = new ExtractTextPlugin({
  filename: '2style.css'
});

const extractHTML = new HTMLWebpackPlugin({
  filename: 'index.html',
  template: 'index.html',
  inject: true
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    contentBase: __dirname + '/src'
  },
  module: {
    rules: [
      {
        test: /.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  },
  plugins: [extractSASS, extractHTML]
};

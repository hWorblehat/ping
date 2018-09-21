const path = require('path');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: "/lib/"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(?:tsx?|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react',
            '@babel/typescript'
          ]
        }
      }
    ]
  },
  devServer: {
    watchContentBase: true,
  }
};

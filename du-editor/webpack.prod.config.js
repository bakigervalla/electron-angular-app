const path = require('path');
const baseConfig = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpackplugin');

module.exports = {
  ...baseConfig,
  output: {
    path: path.join(process.cwd(), 'dist', 'myeditor'),
    filename: 'main.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.join(process.cwd(), 'src', 'electron'),
          from: 'package.json',
        },
      ],
    }),
  ],
};

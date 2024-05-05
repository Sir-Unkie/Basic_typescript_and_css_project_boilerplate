import 'webpack-dev-server';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { merge } from 'webpack-merge';

import { baseConfig } from './base.config';
import { paths } from './paths';

// const proxyConfigs = require('./proxyConfig');

const developConfig = merge(baseConfig, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: paths.appBuild,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    hot: true,
    compress: true,
    open: true,
    historyApiFallback: true,
    port: process.env.PORT ?? 3000,
    static: {
      directory: paths.appBuild,
    },
    client: {
      overlay: true,
      progress: true,
    },

    // proxy: [proxyConfig],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /[\\/]node_modules[\\/]/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [new ReactRefreshPlugin()],
});

export default developConfig;

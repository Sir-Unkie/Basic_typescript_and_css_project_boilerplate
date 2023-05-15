import * as path from 'path';

import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { config as dotEnvConfig } from 'dotenv';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';

import { paths } from './paths';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

dotEnvConfig();

export const baseConfig: Configuration = {
  context: paths.appSrc,

  entry: paths.appIndexJs,

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  resolve: {
    alias: {
      '@shared': path.resolve(paths.appSrc, 'shared'),
      '@entities': path.resolve(paths.appSrc, 'entities'),
      '@features': path.resolve(paths.appSrc, 'features'),
      '@pages': path.resolve(paths.appSrc, 'pages'),
      '@widgets': path.resolve(paths.appSrc, 'widgets'),
      '@app': path.resolve(paths.appSrc, 'app'),
      '@assets': path.resolve(paths.appSrc, 'assets'),
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-typescript',
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: /[\\/]node_modules[\\/]/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /[\\/]node_modules[\\/]/,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        exclude: /[\\/]node_modules[\\/]/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        exclude: /[\\/]node_modules[\\/]/,
        use: ['xml-loader'],
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.appTsConfig,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: paths.appPublic,
          from: '*.*',
          to: '.',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true,
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};

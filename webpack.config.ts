import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';

import HTMLPlugin from 'html-webpack-plugin';
import HTMLPartialPlugin from 'html-webpack-partials-plugin';
import CSSPlugin from 'mini-css-extract-plugin';

interface Configuration extends webpack.Configuration {
  devServer?: DevServerConfiguration;
}

const configuration: Configuration = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  optimization: { splitChunks: { chunks: 'all' } },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          CSSPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          CSSPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    server: 'https',
    historyApiFallback: true,
  },
  plugins: [
    new HTMLPlugin({
      title: 'Atorch Console',
      favicon: path.resolve(__dirname, './assets/ammeter.png'),
    }),
    new CSSPlugin({ filename: '[name].css' }),
    new HTMLPartialPlugin({
      path: path.resolve(__dirname, './assets/analytics.html'),
      location: 'head',
      options: { id: 'UA-168944052-1' },
    }) as any,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  stats: 'minimal',
};

export default configuration;

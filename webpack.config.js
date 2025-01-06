const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

// HTMLファイルを動的に取得し、必要なバンドルを割り当てる
const htmlPlugins = glob.sync('./src/**/*.html').map((file) => {
  const filename = path.relative('./src', file);

  let outputFilename;
  let chunk;

  if (filename === 'man/index.html') {
    outputFilename = 'man/index.html';
    chunk = ['man'];
  } else if (filename === 'woman/index.html') {
    outputFilename = 'woman/index.html';
    chunk = ['woman'];
  }

  return new HtmlWebpackPlugin({
    filename: outputFilename,
    template: file,
    inject: 'body',
    chunks: chunk,
    scriptLoading: 'module',
    minify: false,
  });
});

module.exports = {
  mode: 'production',
  entry: {
    man: ['./src/js/utils.js', './src/js/common.js', './src/css/man.css'],
    woman: ['./src/js/utils.js', './src/js/common.js', './src/css/woman.css'],
  },
  output: {
    filename: (pathData) => {
      if (pathData.chunk.name === 'man') {
        return 'man/js/[name].bundle.js';
      } else if (pathData.chunk.name === 'woman') {
        return 'woman/js/[name].bundle.js';
      }
    },
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    hot: true,
    open: true,
    watchFiles: {
      paths: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js'],
      options: {
        usePolling: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => {
        if (chunk.name === 'man') {
          return 'man/css/[name].css';
        } else if (chunk.name === 'woman') {
          return 'woman/css/[name].css';
        }
      },
    }),
    ...htmlPlugins,
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/images', to: 'images' }],
    }),
  ],
};

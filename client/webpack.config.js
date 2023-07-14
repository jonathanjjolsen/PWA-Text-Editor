const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [

      new HtmlWebpackPlugin({
        template: 'index.html',
        title: 'Text Editor'
      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),

      new WebpackPwaManifest({
        name: 'Noted',
        description: 'Browser based text editor.',
        background_color: '#2b2c26',
        theme_color: '#39b1e4',
        //Specifies the directory from which the PWA is opened
        start_url: '/',
        //Specifies the path where Assets like images will be served from
        publicPath: './',
        display: 'standalone',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons')
          }
        ],
        fingerprints: false,
        inject: true,
      })
      
    ],

    module: {
      rules: [

        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

        {
          //Regex checks for files ending in .js or .mjs with the exception of node_modules
          test: /\.m?js$/,
          exclude: /node_modules/,
          //Using babel compiler so that the program will be usable in older browsers
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
            }
          }
        }
      ],
    },
  };
};

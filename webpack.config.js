import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export default {
      entry: {
            popup: './src/popup.js',
      },
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
          },
          module: {
            rules: [{ 
                        test: /\.(js)$/,
                        exclude: /node_modules/, 
                        use: {
                              loader: 'babel-loader',
                              options: {
                                    presets: ['@babel/preset-env', '@babel/preset-react']
                              }
                        }
                  },
                  {
                        test: /\.css$/,
                        use: 'css-loader'
                  },
            ],
          },
          plugins: [
            new HtmlWebpackPlugin({
            template: './src/popup.html',
            filename: 'popup.html'
          }),
            new CopyPlugin({
                  patterns: [
                        { from: "public" },
                        { from: "src/styles.css" },
                  ]}),
          ],
    };
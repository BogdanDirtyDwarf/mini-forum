import { BuildOptions } from './types/config';
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}

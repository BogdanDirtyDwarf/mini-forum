import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildResolvers(option: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: [".tsx", ".ts", ".js"],
		preferAbsolute: true,
		modules: [option.paths.src, "node_modules"],
		mainFiles: ["index"],
		alias: {},
	};
}

import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfigyration } from "webpack-dev-server";

export function buildDevServer (options: BuildOptions):DevServerConfigyration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}
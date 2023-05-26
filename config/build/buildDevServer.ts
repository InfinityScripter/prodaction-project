import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { paths } = options;
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}

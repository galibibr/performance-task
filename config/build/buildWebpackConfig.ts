import {Configuration} from 'webpack';

import {buildDevServer} from './buildDevServer';
import {buildLoaders} from './buildLoaders';
import {buildPlugins} from './buildPlugins';
import {buildResolvers} from './buildResolvers';
import {BuildOptions} from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode,
        target: 'web',
        entry: paths.entry,
        output: {
            filename: 'js/[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        optimization: {
            minimize: true,
            moduleIds: 'deterministic',
            innerGraph: true,
            concatenateModules: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

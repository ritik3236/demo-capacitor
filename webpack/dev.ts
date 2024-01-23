import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface ExtendedConfiguration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const rootDir = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(rootDir, 'build');

const plugins: WebpackConfiguration['plugins'] = [
    new HtmlWebpackPlugin({
        template: path.resolve(rootDir, 'src/app/template.html'),
        hash: true,
        chunks: ['common', 'bundle', 'styles'],
    }),
    new CopyWebpackPlugin({
        patterns: [{ from: 'public' }],
    }),
    new webpack.EnvironmentPlugin({
        DEBUG: true,
    }),
];

if (process.env.ANALYZE === '1') {
    plugins.push(new BundleAnalyzerPlugin());
}

const config: ExtendedConfiguration = {
    mode: 'development',
    entry: {
        bundle: [path.resolve(rootDir, 'src/index.tsx')],
    },
    plugins: [...plugins],
    output: {
        assetModuleFilename: '[name][hash][ext][query]',
        chunkFilename: '[name].[chunkhash].js',
        clean: true,
        filename: '[name].[contenthash].js',
        globalObject: 'this',
        path: BUILD_DIR,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.mjs'],
        alias: {
            lib: path.join(__dirname, '../src/lib'),
            src: path.resolve(rootDir, 'src'),
        },
    },
    optimization: {
        chunkIds: 'size',
        moduleIds: 'named',
        usedExports: true,
        minimizer: [new TerserPlugin({ extractComments: false })],
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](@mui)[\\/]/,
                    name: 'mui',
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    experiments: {
        topLevelAwait: true,
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        liveReload: true,
        port: 8080,
    },
};

export default config;

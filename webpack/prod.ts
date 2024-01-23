import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const rootDir = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(rootDir, 'build');

const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
        template: path.resolve(rootDir, 'src/app/template.html'),
        hash: true,
        chunks: ['common', 'bundle', 'styles'],
    }),
    new CopyWebpackPlugin({
        patterns: [{ from: 'public' }],
    }),
    new webpack.EnvironmentPlugin({
        DEBUG: false,
    }),
];

if (process.env.ANALYZE === '1') {
    plugins.push(new BundleAnalyzerPlugin());
}

const config: Configuration = {
    mode: 'production',
    entry: {
        bundle: [path.resolve(rootDir, 'src/index.tsx')],
    },
    plugins: [...plugins],
    output: {
        path: BUILD_DIR,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[chunkhash].js',
        assetModuleFilename: '[name][hash][ext][query]',
        globalObject: 'this',
        publicPath: '/',
        clean: true,
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
                    filename: '/[name][hash][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.mjs'],
        alias: {
            lib: path.join(__dirname, '../src/lib'),
            src: path.join(__dirname, '../src'),
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
};

export default config;

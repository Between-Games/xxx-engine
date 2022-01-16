import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {
    mode: 'production',
    entry: './src/index.mjs',

    watch: (process.argv.includes('--watch')),
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 200,
        ignored: '/node_modules/',
    },

    output: {
        filename: 'index.js',
        path: path.resolve(path.resolve(path.dirname('')), 'dist'),

        library: {
            type: 'module',
        },
    },

    experiments: {
        outputModule: true,
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/index.d.ts',
                },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};

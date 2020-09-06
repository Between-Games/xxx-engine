const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
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
        library: 'xxxEngine',
        libraryTarget: 'umd',
        globalObject: 'this',
        path: path.resolve(__dirname, 'dist'),
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
};

var webpack = require('webpack');
var path = require('path');

var processors = [
    require('precss'),
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('autoprefixer')({
        browsers: ['last 2 versions', '> 2%']
    })
];

module.exports = {
    context: path.join(__dirname, './components'),
    entry: './index.jsx',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    watch: true,
    resolve: {
        extensions: ['', '.js', '.jsx', '.postcss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(css|postcss)$/,
                loader: "style!css!postcss"
            }, {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                loader: 'url'
            }
        ]
    },
    postcss: function () {
        return processors;
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),*/
    ]
};
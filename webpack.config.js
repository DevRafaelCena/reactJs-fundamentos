const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ],   
    devServer:{
        static: path.resolve(__dirname, 'public')
    },  

    resolve:{
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
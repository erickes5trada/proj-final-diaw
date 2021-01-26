const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {

    // ESpecificando archivos de entrada
    entry: path.join(__dirname,'src/index.js'),
    // Especificando archivos de salida
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    // folder donde servira
    devServer: {

        contentBase: path.join(__dirname,'./dist'),
        compress: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|svg|jpe?g)$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    },
    plugins: [new ESLintPlugin()]


}
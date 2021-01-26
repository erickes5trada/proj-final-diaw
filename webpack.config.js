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

            }
        ]
    },
    plugins: [new ESLintPlugin()]


}
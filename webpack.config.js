const path = require('path');

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
    }

}
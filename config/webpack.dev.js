const path = require('path')

module.exports = {
    entry:{
       main: ["babel-polyfill", "./src/main.js"]
    },
    mode: 'development',
    output:{
        filename : "[name]-bundle.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath : '/'
    },
    module:{
      rules:[
         {
           test: /.jsx?/,
           exclude : /node_modules/,
           use: {
              loader: 'babel-loader'
           }
         },
         {
           test: /.css$/,
           use: [
             {
                loader: 'style-loader'
             },
             {
                loader: 'css-loader'
             }
           ]
         },
         {
              test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
              use: 'file-loader'
          }
      ]
    },
    devServer: {
        contentBase: "dist"
    }
}

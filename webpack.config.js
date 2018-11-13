const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './lib/index.js',
    mode:'production',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'happy-vue-toast.js',
        library:'happy-vue-toast',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
              }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
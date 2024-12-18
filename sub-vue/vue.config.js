const { name } = require('../package.json')

module.exports = {
    publicPath: '/subapp/sub-vue',
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        },
        resolve: {
            extensions: ['.js', '.json', '.vue']
        }
    },
    devServer: {
        port: process.env.VUE_APP_PORT,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}

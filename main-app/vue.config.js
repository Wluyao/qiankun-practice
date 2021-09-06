module.exports = {
    devServer: {
        port: process.env.VUE_APP_PORT
    },
    transpileDependencies: ['common'],
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'qiankun-practice'
            return args
        })
    }
}

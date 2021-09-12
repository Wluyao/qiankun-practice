const { override, fixBabelImports, addLessLoader, overrideDevServer } = require('customize-cra')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const { name } = require('./package.json')

// 打包配置
const addCustomize = () => (config) => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${name}`

    // Remove 'react-refresh' from the loaders.
	// 移除react-refresh loader， 解决react应用导致主应用可能挂掉的问题，但是react子应用不会热更新，视具体情况开启。
    for (const rule of config.module.rules) {
        if (!rule.oneOf) continue
        for (const one of rule.oneOf) {
            if (
                one.loader &&
                one.loader.includes('babel-loader') &&
                one.options &&
                one.options.plugins
            ) {
                one.options.plugins = one.options.plugins.filter(
                    (plugin) => typeof plugin !== 'string' || !plugin.includes('react-refresh')
                )
            }
        }
    }
    config.plugins = config.plugins.filter(
        (plugin) =>
            !(plugin instanceof webpack.HotModuleReplacementPlugin) &&
            !(plugin instanceof ReactRefreshPlugin)
    )

    return config
}

// 跨域配置
const devServerConfig = () => (config) => {
    config.open = false
    config.hot = false
    config.headers = {
        'Access-Control-Allow-Origin': '*'
    }
    return config
}

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#5b5bea'
                }
            }
        }),
        addCustomize()
    ),
    devServer: overrideDevServer(devServerConfig())
}

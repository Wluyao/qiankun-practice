import microAction from './micro-action'

// vue子应用配置
const subVueApp = {
    name: 'sub-vue',
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: '/sub-vue'
}

// React子应用配置
const subReactApp = {
    name: 'sub-react',
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: '/sub-react'
}

// html子应用配置
const subHtmlApp = {
    name: 'sub-html',
    entry: process.env.VUE_APP_SUB_HTML,
    activeRule: '/sub-html'
}

const subApps = [subVueApp, subReactApp, subHtmlApp]

// 为所有子应用配置添加统一的配置
const apps = subApps.map((item) => {
    return {
        ...item,
        //  子应用挂载节点
        container: '#subapp-container',
        // 传递信息给子应用
        props: {
            // 基础路由，子应用的路由前缀(router的base)
            routerBase: item.activeRule,
            // 下发getGlobalState方法
            getGlobalState: microAction.getGlobalState
        }
    }
})

export default apps

import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import microAction from './channel/micro-frontend/micro-action'

Vue.config.productionTip = false

let router = null
let instance = null

function render(props = {}) {
    const { container, routerBase } = props
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
        mode: 'history',
        routes
    })
    // 多个应用设置同一个名称的挂载节点(#app)，导致渲染错误。可以通过父应用传过来的props中的container节点，通过这个container再寻找下面的#app。
    instance = new Vue({
        router,
        store,
        render: (h) => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
}

// 子应用独立运行的环境
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

// 只会在微应用初始化的时候调用一次
export async function bootstrap() {}

// 子应用每次进入都会调用 mount方法
export async function mount(props) {
    // 获取主应用下发的初始数据
    const globalState = props.getGlobalState()
    store.commit('setUser', globalState.user)

    //  监听全局数据的变化
    props.onGlobalStateChange((state, prevState) => {
        for (const key in state) {
            if (key === 'user') {
                store.commit('setUser', state[key])
            }
        }
    })

    // 改变全局的数据
    microAction.setGlobalState = props.setGlobalState

    render(props)
}

// 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
export async function update(props) {}

// 子应用每次 切出/卸载 会调用的方法
export async function unmount() {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
    router = null
}

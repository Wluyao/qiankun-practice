import Vue from 'vue'
import { initGlobalState } from 'qiankun'
import store from '@/store'

// 父应用的初始state
// Vue.observable让initialState变成可响应
const initialState = Vue.observable({
    user: store.state.user
})

const actions = initGlobalState(initialState)

// 监听全局数据的变化
actions.onGlobalStateChange((state, prevState) => {
    console.log('主应用：', state, prevState)
    for (const key in state) {
        initialState[key] = state[key]
        if (key === 'user') {
            store.commit('setUser', state[key])
        }
    }
    console.log(initialState)
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
    return key ? initialState[key] : initialState
}

export default actions

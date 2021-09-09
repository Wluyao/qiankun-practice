import Vue from 'vue'
import { initGlobalState } from 'qiankun'

// 父应用的初始state
// Vue.observable是为了让initialState变成可响应：https://cn.vuejs.org/v2/api/#Vue-observable。
const initialState = Vue.observable({
    user: {
        name: '张三'
    }
})

const actions = initGlobalState(initialState)

// 监听全局数据的变化
actions.onGlobalStateChange((state, prevState) => {
    console.log('主应用：', state, prevState)
    for (const key in state) {
        initialState[key] = state[key]
    }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
    return key ? initialState[key] : initialState
}

export default actions

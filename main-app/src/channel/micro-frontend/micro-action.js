import { initGlobalState } from 'qiankun'
import store from '@/store'

// 主应用和子应用通过props进行通信

const actions = initGlobalState()

// 监听全局数据的变化
actions.onGlobalStateChange((state, prevState) => {
    for (const key in state) {
        if (key === 'user') {
            store.commit('setUser', state[key])
        }
    }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
    return key ? store.state[key] : store.state
}

export default actions

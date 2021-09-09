import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        user: {
            name: '张三'
        }
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {},
    modules: {}
})

export default store

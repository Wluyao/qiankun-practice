import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            name: 'zhangsan'
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        }
    },
    actions: {},
    modules: {}
})

export default store

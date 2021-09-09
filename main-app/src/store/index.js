import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload
        }
    },
    actions: {},
    modules: {}
})

export default store

import Vue from 'vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/styles/app.css'
import microApps from './channel/micro-app'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})

registerMicroApps(microApps)
start()
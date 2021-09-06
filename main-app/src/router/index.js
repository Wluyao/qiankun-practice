import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoute from './modules/home'

Vue.use(VueRouter)

const routes = [homeRoute]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'link-active'
})

export default router

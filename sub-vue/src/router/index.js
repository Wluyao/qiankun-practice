import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoute from './modules/home'
import aboutRoute from './modules/about'

Vue.use(VueRouter)

const routes = [homeRoute, aboutRoute]

export default routes

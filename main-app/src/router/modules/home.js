const Home = () => import(/* webpackChunkName:'home' */ '@/pages/home')

const route = {
    name: 'Home',
    path: '/',
    component: Home
}

export default route

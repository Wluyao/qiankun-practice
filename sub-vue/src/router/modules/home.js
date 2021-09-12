const Home = () => import(/* webpackChunkName:'about' */ '@/pages/home')

const route = {
    name: 'Home',
    path: '/',
    component: Home
}

export default route

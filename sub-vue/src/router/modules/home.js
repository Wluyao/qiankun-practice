const Home = () => import(/* webpackChunkName:'about' */ '@/pages/home')

const route = {
    name: 'Home',
    path: '/about',
    component: Home
}

export default route

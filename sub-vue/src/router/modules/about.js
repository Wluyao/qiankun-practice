const About = () => import(/* webpackChunkName:'home' */ '@/pages/about')

const route = {
    name: 'About',
    path: '/about',
    component: About
}

export default route

const About = () => import(/* webpackChunkName:'home' */ '@/pages/about')

const route = {
    name: 'About',
    path: '/',
    component: About
}

export default route

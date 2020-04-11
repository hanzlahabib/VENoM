import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const lazyLoad = (name) => () =>
    import (`../components/${name}.vue`);

const routes = [{
        path: '/',
        name: 'Home',
        component: lazyLoad('Home'),
    },
    {
        path: '/about',
        name: 'About',
        component: lazyLoad('About'),
    },
    {
        path: '/login',
        name: 'Login',
        component: lazyLoad('Login'),
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
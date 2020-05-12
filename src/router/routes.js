import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'DCloud',
        component: () => import('../pages/FrontPage.vue')
    },
    {
        path: '/signin',
        name: 'Sign In',
        component: () => import('../pages/SignIn.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../pages/Registration.vue')
    }
    ,
    {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/UserDashboard.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

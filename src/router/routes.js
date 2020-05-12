import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/PublicHome.vue')
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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

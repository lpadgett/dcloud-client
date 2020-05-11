const Home = { template: '../components/public/Home.vue' };
const SignIn = { template: '../components/public/SignIn.vue' };

const routes = [
    { path: '/', component: Home},
    { path: '/signin', component: SignIn }
];

export default {
    routes
}
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/public/App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import routes from './router/router.js';

Vue.use(vuetify);

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(Vuex);
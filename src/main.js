import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/public/App.vue';
import vuetify from './plugins/vuetify';
import router from './router/routes.js'

Vue.use(vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(Vuex);
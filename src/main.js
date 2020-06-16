import Vue from 'vue';
import App from './components/public/App.vue';
import vuetify from './plugins/vuetify';
import router from './router/routes.js'
import { store } from './store.store';

Vue.use(vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');

Vue.use(Vuex);
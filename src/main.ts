import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import Element from './components/element';

Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

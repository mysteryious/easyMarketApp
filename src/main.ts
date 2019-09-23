import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import Element from './components/element';
import VueLazyload from 'vue-lazyload';


Vue.config.productionTip = false;
Vue.use(Element);


Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'static/img/lazy.jpg',
  attempt: 1,
  listenEvents: [ 'scroll' ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

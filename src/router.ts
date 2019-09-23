import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/home',
      component: () => import('./views/home/index.vue'),
    },
    {
      name: 'topic',
      path: '/topic',
      component: () => import('./views/topic/index.vue'),
    },
    {
      name: 'catelog',
      path: '/catelog',
      component: () => import('./views/catelog/index.vue'),
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('./views/cart/index.vue'),
    },
    {
      name: 'mine',
      path: '/mine',
      component: () => import('./views/mine/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path:'/',
      redirect:'/home'
    }
   
  ],
});

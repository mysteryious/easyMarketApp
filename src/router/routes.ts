export default [
  {
    name: 'home',
    path: '/home',
    component: () => import('../views/home/index.vue'),
  },
  {
    name: 'topic',
    path: '/topic',
    component: () => import('../views/topic/index.vue'),
  },
  {
    name: 'catelog',
    path: '/catelog',
    component: () => import('../views/catelog/index.vue'),
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../views/cart/index.vue'),
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('../views/mine/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/login',
  },

];

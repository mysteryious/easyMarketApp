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
    name: 'login',
    path: '/login',
    component: () => import('../views/login/index.vue'),
  },
  {
    name: '专题详情',
    path: '/topicDetail/:id',
    component: () => import('../views/topicDetail/index.vue'),
  },
  {
    name: 'categorys',
    path: '/categorys/:id',
    component: () => import('../views/categorys/index.vue'),
  },
  {
    path: '/',
    redirect: '/login',
  },

];

export default [
  {
    name: '首页',
    path: '/home',
    component: () => import('../views/home/index.vue'),
  },
  {
    name: '专题',
    path: '/topic',
    component: () => import('../views/topic/index.vue'),
  },
  {
    name: '分类',
    path: '/catelog',
    component: () => import('../views/catelog/index.vue'),
  },
  {
    name: '模糊搜索',
    path: '/goodsSearch',
    component: () => import('../views/goodsSearch/index.vue'),
  },
  {
    name: '购物车',
    path: '/cart',
    component: () => import('../views/cart/index.vue'),
  },
  {
    name: '我的',
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
    name: '分类商品',
    path: '/categorys/:id',
    component: () => import('../views/categorys/index.vue'),
  },
  {
    name: '写专题评论',
    path: '/topicCommentWrite/:id',
    component: () => import ('../views/topicCommentWrite/index.vue'),
  },
  {
    name: 'brandDetail',
    path: '/brandDetail/:id',
    component: () => import ('../views/brandDetail/index.vue'),
  },
  {
    name: 'goods',
    path: '/goods/:id',
    component: () => import ('../views/goods/index.vue'),
  },
  {
    path: '/',
    redirect: '/login',
  },

];

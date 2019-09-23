import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import { getocaltion } from '../utils/login';
Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


// 导航守卫
// 进行数据校验，用户需要登录后才能显示，设置跳转到 login 页面

router.beforeEach((to, from, next) => {
  const isLogin = getocaltion('token');
  if (isLogin) {
    next();
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

export default router;

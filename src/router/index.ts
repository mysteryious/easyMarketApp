import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


// 导航守卫
// 进行数据校验，比如验证页面，用户需要登录后才能显示，设置跳转到 login 页面

router.beforeEach((to: any, from: any, next: () => void) => {
  next();
  // if (to.fullPath === '/app') {
  //   next('/login')  // 或者 next({path: '/login})
  // } else {
  //   next()
  // }
});

export default router;

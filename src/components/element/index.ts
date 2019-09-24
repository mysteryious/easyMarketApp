import Footer from '../Footer/index.vue';
import CommonList from '../commonList/index.vue';
const install = (Vue: any) => {
  Vue.component('Footer', Footer);
  Vue.component('CommonList', CommonList);
};

export default install;

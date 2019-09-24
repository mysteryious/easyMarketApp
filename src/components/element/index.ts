import Footer from '../Footer/index.vue';
import CommonList from '../commonList/index.vue';
import Tab from '../tab/index.vue';
const install = (Vue: any) => {
  Vue.component('Footer', Footer);
  Vue.component('CommonList', CommonList);
  Vue.component('Tab', Tab);
};

export default install;

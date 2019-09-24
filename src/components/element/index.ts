import Footer from '../Footer/index.vue';
import ListEl from '../ListEl/index.vue';
import CateGoryBox from '../cateGoryBox/index.vue';
import GoodsList from '../goodsList/index.vue';
const install = (Vue: any) => {
  Vue.component('Footer', Footer);
  Vue.component('ListEl', ListEl);
  Vue.component('CateGoryBox', CateGoryBox);
  Vue.component('GoodsList', GoodsList);
};

export default install;

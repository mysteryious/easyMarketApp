import Header from '../Header/index.vue';
import Footer from '../Footer/index.vue';
import CommonList from '../commonList/index.vue';
import Tab from '../tab/index.vue';
import ListEl from '../ListEl/index.vue';
import CateGoryBox from '../cateGoryBox/index.vue';
import GoodsList from '../goodsList/index.vue';
import Swiper from '../swiper/index.vue';
const install = (Vue: any) => {
  Vue.component('Header', Header);
  Vue.component('Footer', Footer);
  Vue.component('CommonList', CommonList);
  Vue.component('Tab', Tab);
  Vue.component('Footer', Footer);
  Vue.component('ListEl', ListEl);
  Vue.component('CateGoryBox', CateGoryBox);
  Vue.component('GoodsList', GoodsList);
  Vue.component('Swiper', Swiper);
};

export default install;

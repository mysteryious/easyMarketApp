import Vue from 'vue';
import Vuex from 'vuex';

import login from './user/login';
import home from './home/index';
import topic from './main/topic';
import catelog from './main/catelog';
import categorys from './main/categorys';
import brandDetail from './main/brandDetail';
import goods from './main/goods';
import goodsSearch from './main/goodsSearch';

// 功能组件仓库
import scroll from './scroll/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    topic,
    home,
    catelog,
    categorys,
    brandDetail,
    goods,
    scroll,
    goodsSearch,
  },
});


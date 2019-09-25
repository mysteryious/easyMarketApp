import Vue from 'vue';
import Vuex from 'vuex';

import login from './user/login';
import home from './home/index';
import topic from './main/topic';
import catelog from './main/catelog';
import categorys from './main/categorys';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    topic,
    home,
    catelog,
    categorys,
  },
});


import Vue from 'vue';
import Vuex from 'vuex';

import login from './user/login';
import catelog from './main/catelog';
import home from './home/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    catelog,
    home,
  },
});


import Vue from 'vue';
import Vuex from 'vuex';

import login from './user/login';
import home from './home/index';
import topic from './main/topic';
import catelog from './main/catelog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    topic,
    home,
    catelog,
  },
});


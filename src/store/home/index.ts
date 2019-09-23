import Vue from 'vue';
import Vuex from 'vuex';
import http from '../../http/index';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    HomeData: {},
  },
  mutations: {
    setHomeData(state: any, payload: any) {
      state.HomeData = payload;
    },
  },
  actions: {
    async getHomeData({ commit }: any, payload?: any) {
      const result = await http.getHomeData();
      commit('setHomeData', result.data);
      return result;
    },
  },
});


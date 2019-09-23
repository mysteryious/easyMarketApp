import Vue from 'vue';
import Vuex from 'vuex';
import http from '../../http/index';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    topicData: [],
  },
  mutations: {
    setTopicData(state: any, payload: any) {
      state.topicData = payload;
    },
  },
  actions: {
    async getCatelogDate({ commit }: any, payload?: any) {
      const result = await http.getTopicData(payload);
      commit('setTopicData', result.data.data);
      return result.data;
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import http from '../../http/index';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    // 获取专题数据
    async getTopicData({ commit }: any, payload?: any) {
      const result = await http.getTopicData(payload);
      return result.data;
    },

  },
});

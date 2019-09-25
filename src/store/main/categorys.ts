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
    // 获取分类页初始化信息
    async getCatalogInitData({ commit }: any, payload?: any) {
      const result = await http.getCatalogInitData(payload);
      return result.data;
    },

  },
});

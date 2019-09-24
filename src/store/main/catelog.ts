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
    //  分类页初始化信息获取
    async getCatalogInitData({ commit }: any, payload?: any) {
      const result = await http.getCatalogInitData(payload);
      return result.data;
    },
    // 获取分类ID分类Nav数据
    async getCatalogMsg({ commit }: any, payload?: any) {
      const result = await http.getCatalogMsg(payload);
      return result.data;
    },
  },
});

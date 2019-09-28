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
    // 分类页面的模糊搜索
    async getGoodsSearchMsg({ commit }: any, payload?: any) {
      const result = await http.getGoodsSearchMsg(payload);
      return result.data;
    },
    async getGoodsSearchKey({ commit }: any, payload?: any) {
      const result = await http.getGoodsSearchKey(payload);
      return result.data;
    },
  },
});

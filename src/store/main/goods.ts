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
    // 获取商品详情
    async getGoodsDetail({ commit }: any, payload?: any) {
      const result = await http.getGoodsDetail(payload);
      return result.data;
    },
    // 相关商品
    async getGoodsRelated({ commit }: any, payload?: any) {
      const result = await http.getGoodsRelated(payload);
      return result.data;
    },

  },
});

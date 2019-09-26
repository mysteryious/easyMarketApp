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
    // 根据制造商ID获取制造商相关商品
    async getBrandDetail({ commit }: any, payload?: any) {
      const result = await http.getBrandDetail(payload);
      return result.data;
    },
  },
});

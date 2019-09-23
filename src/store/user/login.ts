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
    async UserLogin({ commit }: any, payload: any) {
      const result = await http.postLogin(payload);
      return result;
    },
  },
});

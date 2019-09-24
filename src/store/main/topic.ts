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
    // 根据专题Id获取专题详情
    async getTopicDetail({ commit }: any, payload?: any) {
      const result = await http.getTopicDetail(payload);
      return result.data;
    },
    // 根据专题ID或者商品ID获取评论获取相关专题
    async getCommentList({ commit }: any, payload?: any) {
      const result = await http.getCommentList(payload);
      return result.data;
    },
    // 根据专题Id获取相关专题
    async getTopicDetailRelated({ commit }: any, payload?: any) {
      const result = await http.getTopicDetailRelated(payload);
      return result.data;
    },
  },
});

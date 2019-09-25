import Vue from 'vue';
import Vuex from 'vuex';
import http from '../../http/index';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    TopicData: [], // 专题页列表
    totalPages: 0, // 总页数
    currentPage: 1, // 当前页
  },
  mutations: {
    initData(state: any, payload: any) {
      const { TopicData, totalPages, currentPage, type } = payload;
      switch (type) {
        case 'pullingUp':
          state.TopicData = state.TopicData.concat(TopicData);
          state.totalPages = totalPages;
          break;
        case 'pullingDown':
          state.TopicData = TopicData;
          state.totalPages = totalPages;
          break;
        default:
          state.TopicData = TopicData;
          state.totalPages = totalPages;
      }
    },
    setCurrentPage(state: any, payload: any) {
      state.currentPage = payload;
    },
  },
  actions: {
    // 获取专题数据
    async getTopicData({ commit }: any, payload?: any) {
      const result: any = await http.getTopicData(payload);
      if (result.errno === 0) {
        commit('initData',
          {
            TopicData: result.data.data,
            totalPages: result.data.totalPages,
            type: payload.params.type,
          });
      }
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
    // 对某个商品或专题ID进行评论
    async postSetComment({ commit }: any, payload?: any) {
      const result = await http.postSetComment(payload);
      return result.data;
    },
  },
});

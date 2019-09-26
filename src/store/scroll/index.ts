import Vue from 'vue';
import Vuex from 'vuex';
import http from '../../http/index';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    uploadTitle: '上拉加载',
    DownloadTitle: '下拉刷新',
    TopicData: [], // 专题页列表
    totalPages: 0, // 总页数
    currentPage: 1, // 当前页
    fun: '',
  },
  mutations: {
    setFun(state: any, payload: any) {
      state.fun = payload;
    },
    setUploadTitle(state: any, payload: any) {
      state.uploadTitle = payload;
    },
    setDownloadTitle(state: any, payload: any) {
      state.DownloadTitle = payload;
    },
    setCurrentPage(state: any, payload: any) {
      state.currentPage = payload;
    },
    initData(state: any, payload: any) {
      const { TopicData, totalPages, currentPage, type } = payload;

      state.totalPages = totalPages;
      switch (type) {
        // 上拉加载 拼接数据
        case 'pullingUp':
          state.TopicData = state.TopicData.concat(TopicData);
          break;
        // 下拉刷新 替换数据
        case 'pullingDown':
          state.TopicData = TopicData;
          break;
        default:
          // 初始化显示默认请求的数据
          state.TopicData = TopicData;
      }

    },
  },
  actions: {
    // 获取专题数据
    async getTopicData({ state, commit }: any, payload?: any) {
      // 应该判断一下执行什么请求获取数据
      const result: any = await http[state.fun](payload);

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
  },
});

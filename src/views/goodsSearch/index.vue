<template>
  <div class="goodsSearch">
    <!-- 头部 -->
    <header class="header">
      <b @click="replace">&lt;</b>
      <span>
        <i></i>
        <input type="text" :placeholder="placeholder" v-model="value" @change="findSearch" />
      </span>
      <div @click="cancelSearch">取消</div>
    </header>
    <main class="main">
      <!-- 热门搜索列表 -->
      <div class="searchMsg" v-if="!value&&!searchKeyWordList.length">
        <div class="searchMsg" v-if="historyKeywordList.length>0">
          <div class="searchItemWrap">
            <div class="title">
              历史记录
              <i class="iconfont icon-delete" @click="deleteHistory"></i>
            </div>
            <div class="listWrap">
              <button
                class="listItem"
                v-for="(list,index) in historyKeywordList"
                :key="index"
              >{{list}}</button>
            </div>
          </div>
        </div>

        <!-- 如果input框没有值显示热门搜索 -->
        <div class="searchItemWrap" v-if="!value">
          <div class="title">热门搜索</div>
          <div class="listWrap">
            <button
              v-for="(item) in hotKeywordList"
              :key="item.keyword"
              :class="item.is_hot? 'listItem active' : 'listItem'"
            >{{item.keyword}}</button>
          </div>
        </div>
      </div>

      <!-- 显示模糊查询列表 -->
      <div class="searchList" v-if="value">
        <li class="searchItem" v-for="(list,index) in searchKeyWordList" :key="index">{{list}}</li>
      </div>
    </main>
  </div>
</template>

<script>
import "../../static/font/iconfont";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      /*
       * 状态属性
       *   placeholder: 初始化输入框的默认值
       *   historyKeywordList: 历史查询列表
       *   hotKeywordList: 热搜列表
       *   searchKeyWordList：模糊查询列表
       *   isOpenCateGoryList: 是否展开分类列表
       * */
      placeholder: "",
      historyKeywordList: [],
      hotKeywordList: [],
      searchKeyWordList: [],
      isOpenCateGoryList: false,
      value: ""
    };
  },
  props: {
    title: String
  },
  watch: {
    // input值改变，查询模糊查询，修改查询字段
    value(newValue) {
      if (newValue) {
        this.getGoodsSearchKey({ params: { keyword: newValue } }).then(res => {
          this.historyKeywordList = res;
        });
      }
    }
  },
  methods: {
    ...mapActions("goodsSearch", [
      "getGoodsSearchMsg",
      "getGoodsSearchKey",
      "getDeleteGoodsSearchHistory"
    ]),
    replace() {
      this.$router.history.go(-1);
    },
    findSearch() {
      this.getGoodsSearchKey({ params: { keyword: this.value } }).then(res => {
        this.searchKeyWordList = res;
      });
    },
    /*删除历史*/
    async deleteHistory() {
      try {
        await this.getDeleteGoodsSearchHistory({});
        this.initData();
      } catch (e) {
        throw e;
      }
    },
    cancelSearch() {
      this.searchKeyWordList = [];
      this.value = "";
    },
    initData() {
      this.getGoodsSearchMsg().then(res => {
        const {
          defaultKeyword: { keyword },
          historyKeywordList,
          hotKeywordList
        } = res;
        this.placeholder = keyword;
        this.historyKeywordList = historyKeywordList;
        this.hotKeywordList = hotKeywordList;
      });
    }
  },
  mounted() {
    try {
      this.initData();
    } catch (e) {
      throw e;
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
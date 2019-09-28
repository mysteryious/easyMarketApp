<template>
  <div class="goodsSearch">
    <!-- 头部 -->
    <header class="header">
      <b @click="replace">&lt;</b>
      <span>
        <i></i>
        <input type="text" :placeholder="placeholder" v-model="value" @change="findSearch" />
      </span>
      <div>取消</div>
    </header>
    <main class="main">
      <!-- 热门搜索列表 -->
      <div class="searchMsg">
        <div class="searchItemWrap">
          <div class="title">热门搜索</div>
          <div class="listWrap">
            <button
              class="listItem active"
              v-for="(list,index) in hotKeywordList"
              :key="index"
            >{{list.keyword}}</button>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
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
    value(newValue) {
      console.log(newValue);
    }
  },
  methods: {
    ...mapActions("goodsSearch", ["getGoodsSearchMsg", "getGoodsSearchKey"]),
    replace() {
      this.$router.history.go(-1);
    },
    findSearch() {
      this.getGoodsSearchKey({ params: { keyword: this.value } }).then(res => {
        console.log(res)
        this.searchKeyWordList = res.data;
      });
    }
  },
  mounted() {
    try {
      this.getGoodsSearchMsg().then(res => {
        const {
          defaultKeyword: { keyword },
          historyKeywordList,
          hotKeywordList
        } = res;
        this.placeholder = keyword;
        this.historyKeywordList = historyKeywordList;
        this.hotKeywordList = hotKeywordList;
        console.log(res);
      });
    } catch (e) {
      throw e;
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
<template>
  <div class="topic">
    <div class="main" ref="main">
      <Scroll :pullingUp="pullingUp" :list="list">
        <div class="page">
          <div class="download">{{DownloadTitle}}</div>
          <a
            class="topicItem"
            v-for="(list,index) in TopicData"
            :key="index"
            :href="'topicDetail/'+ list.id"
          >
            <img v-lazy="list.scene_pic_url" />
            <div :style="{'margin-top':'0.05rem'}">{{list.title}}</div>
            <div :style="{color:'gray'}">{{list.subtitle}}</div>
            <div :style="{color:'red','margin-bottom':'0.05rem'}">{{list.price_info}}元起</div>
          </a>
          <div class="upload">{{uploadTitle}}</div>
        </div>
      </Scroll>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  props: {},
  data() {
    return {
      page: 1,
      list: {
        query: {}, //查询条件
        limit: 5, //每次查询的数量 默认5
        count: "", //最后一次查询结果返回的长度 用来控制loadMore的显示与否
        refreshDispatch: "" //查询结果
      }
    };
  },
  computed: {
    ...mapState("scroll", [
      "uploadTitle",
      "DownloadTitle",
      "TopicData",
      "currentPage"
    ])
  },
  methods: {
    ...mapMutations("scroll", ["setFun", "setCurrentPage"]),
    ...mapActions("scroll", ["getTopicData"]),
    //上拉加载的函数
    pullingUp() {
      this.page = this.page + 1;
      const size = this.page * this.list.limit;
      this.list = {
        query: { params: { page: this.page, size, type: "pullingUp" } }, //查询条件
        limit: 5, //每次查询的数量 默认5
        count: size, //最后一次查询结果返回的长度 用来控制loadMore的显示与否
        refreshDispatch: "getTopicData"
      };
      this.setFun(this.list.refreshDispatch);
      this.getTopicData(this.list.query);
    }
    // // //下拉刷新的函数
    // pullingDown() {
    //   this.page = this.page + 1;
    //   const size = this.page * this.list.limit;
    //   this.setCurrentPage(this.page);
    //   this.getTopicData({
    //     params: { page: this.page, size, type: "pullingDown" }
    //   });
    // }
  },
  created() {
    this.setFun("getTopicData");
    !this.TopicData.length &&
      this.getTopicData({ params: { page: this.currentPage, type: "" } });
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
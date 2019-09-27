<template>
  <div class="topic">
    <div class="main" ref="main">
      <Scroll :pullingUp="pullingUp" :pullingDown="pullingDown" :list="list">
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
      list: {
        query: {}, //查询条件
        page: 1,
        limit: 5, //每次查询的数量 默认5
        count: "", //最后一次查询结果返回的长度 用来控制loadMore的显示与否
        xianzhi: 5,
        refreshDispatch: "" //要发起请求的函数名 http请求
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
    ...mapMutations("scroll", ["setFun"]),
    ...mapActions("scroll", ["getTopicData"]),
    //上拉加载的函数
    pullingUp() {
      this.list.page = this.list.page + 1;
      this.list.xianzhi = this.list.page * this.list.limit;

      this.list = {
        query: {
          params: {
            page: this.list.page,
            size: this.list.limit,
            type: "pullingUp"
          }
        }, //查询条件
        limit: 5, //每次查询的数量 默认5
        page: this.list.page,
        xianzhi: this.list.xianzhi,
        refreshDispatch: "getTopicData"
      };
    },
    //下拉刷新的函数
    pullingDown() {
      this.list.page = this.list.page + 1;
      this.list.xianzhi = this.list.page * this.list.limit;

      this.list = {
        query: {
          params: {
            page: this.list.page,
            size: this.list.limit,
            type: "pullingDown"
          }
        }, //查询条件
        limit: 5, //每次查询的数量 默认5
        page: this.list.page,
        xianzhi: this.list.xianzhi,
        refreshDispatch: "getTopicData"
      };
    }
  },
  created() {
    this.setFun("getTopicData");
    !this.TopicData.length &&
      this.getTopicData({
        params: { page: 1, size: this.list.limit, type: "" }
      });
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
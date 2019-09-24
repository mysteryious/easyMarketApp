<template>
  <div class="topic">
    <header class="header">
      <b @click="replace">&lt;</b>
      <div></div>
      <span>{{topicDetail.title}}</span>
      </header>
    <main class="main">
      <div class="main-pic" v-html="this.topicDetail.content"></div>

      <div class="commentWrap">
        <div class="titleLine">
          <div class="titleName">精选留言</div>
          <div class="titleIcon">
            <i class="iconfont icon-pencil"></i>
          </div>
        </div>
        <CommonList :commentList="commentList"></CommonList>

        <div class="many">查看更多评价</div>

        <div class="relateTopic">
          <div class="relateTopicTitle">推荐专题</div>
          <div class="relateTopicItem">
            <a class="topicItem" v-for="(list,index) in topicData" :key="index" :href="list.id">
              <img :src="list.scene_pic_url" />
              <div :style="{'margin-top':'0.05rem'}">{{list.title}}</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import "../../static/font/iconfont";
export default {
  props: {},
  data() {
    return {
      topicDetail: [],
      commentList: [],
      topicData: []
    };
  },
  computed: {},
  methods: {
    ...mapActions("catelog", [
      "getTopicDetail",
      "getCommentList",
      "getTopicDetailRelated"
    ]),
    replace(){
      this.$router.history.go(-1)
    }
  },
  created() {},
  mounted() {
    let params = { params: { id: this.$route.params.id } };
    //详情数据
    this.getTopicDetail(params).then(res => {
      this.topicDetail = res;
    });
    //根据专题ID或者商品ID获取评论获取相关专题
    this.getCommentList({
      params: {
        valueId: this.$route.params.id,
        typeId: 1,
        size: 5,
        page: 1
      }
    }).then(res => {
      this.commentList = res.data;
      console.log(res.data)
    });
    //根据专题Id获取相关专题
    this.getTopicDetailRelated(params).then(res => {
      this.topicData = res;
    });
  }
};
</script>
<style lang="scss">
@import "./index.scss";
i {
  width: 16px;
  height: 16px;
}
</style>
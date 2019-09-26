<template>
  <div class="box">
    <div class="main" ref="main">
      <Scroll>
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
    return {};
  },
  computed: {
    ...mapState("scroll", [
      "uploadTitle",
      "DownloadTitle",
      "TopicData",
      "totalPages",
      "fun"
    ])
  },
  methods: {
    ...mapMutations("scroll", ["setFun"]),
    ...mapActions("scroll", ["getTopicData"])
  },
  created() {
    this.setFun("getTopicData");

    !this.TopicData.length &&
      this.getTopicData({
        params: { page: this.page, type: "" }
      });
  },
  mounted() {}
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  outline: none;
}
.box {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.main {
  flex: 1;
  overflow: hidden;
}
.topicItem {
  display: block;
  height: 3rem;
  img {
    width: 100%;
    height: 2rem;
  }
  div {
    font-size: 0.14rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 0.3rem;
    line-height: 0.3rem;
  }
}
.download {
  margin-top: -0.44rem;
  height: 0.44rem;
  background-color: #f5f5f9;
  line-height: 0.44rem;
  text-align: center;
}
.upload {
  height: 0.44rem;
  background-color: #f5f5f9;
  line-height: 0.44rem;
  text-align: center;
  margin-top: 0.44rem;
}
</style>
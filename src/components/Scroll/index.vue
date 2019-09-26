<template>
  <div class="tabPageContent" ref="tabPageContent">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      page: 1
    };
  },
  computed: {
    ...mapState("scroll", ["uploadTitle", "DownloadTitle", "totalPages"])
  },
  methods: {
    ...mapActions("scroll", ["getTopicData"]),
    ...mapMutations("scroll", [
      "setUploadTitle",
      "setDownloadTitle",
      "setCurrentPage"
    ])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.tabPageContent, {
      click: true,
      probeType: 3,
      mouseWheel: true, //鼠标滚轮
      // 上拉加载
      pullUpLoad: {
        // 当上拉距离超过30px时触发 pullingUp 事件
        threshold: -30,
        stop: -30
      },
      // 下拉刷新
      pullDownRefresh: {
        // 下拉距离超过30px触发pullingDown事件
        threshold: 50,
        // 回弹停留在距离顶部20px的位置
        stop: 44
      }
    });
    this.scroll.on("pullingUp", () => {
      this.setUploadTitle("正在加载......");
      if (this.page < this.totalPages) {
        setTimeout(() => {
          this.setUploadTitle("上拉加载");
          this.page = this.page + 1;
          this.setCurrentPage(this.page);
          this.getTopicData({ params: { page: this.page, type: "pullingUp" } });

          this.scroll.finishPullUp();
        }, 2000);
      } else {
        this.setUploadTitle("暂无数据...");
      }
    });
    this.scroll.on("pullingDown", () => {
      this.setDownloadTitle("正在刷新......");

      if (this.page < this.totalPages) {
        setTimeout(() => {
          this.setDownloadTitle("刷新成功");
          this.page = this.page + 1;
          this.setCurrentPage(this.page);
          this.getTopicData({
            params: { page: this.page, type: "pullingDown" }
          });

          this.scroll.finishPullDown();
        }, 2000);
      } else {
        this.setDownloadTitle("暂无数据...");
      }
    });
  }
};
</script>
<style lang="scss">
.tabPageContent {
  width: 100%;
  height: 100%;
}
</style>
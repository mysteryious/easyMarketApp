<template>
  <div class="tabPageContent" ref="tabPageContent">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations, mapActions } from "vuex";

// @props {
//  *   list: {
//  *     query?: {[key:string]:any}, 查询条件
//  *     limit?: number, 每次查询的数量 默认10
//  *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
//  *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
//  *     loadMoreDispatch: string loadMore 查询的store dispacthName
//  *     value: Array<{[key:string]:any}> 查询结果
//  *   }
//  * }

export default {
  props: {
    pullingUp: Function,
    pullingDown: Function,
    list: {
      query: Object, //查询条件
      limit: Number, //每次查询的数量 默认10
      count: Number, //最后一次查询结果返回的长度 用来控制loadMore的显示与否
      refreshDispatch: String, //触发请求的函数名
      value: Array //查询结果
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("scroll", [
      "uploadTitle",
      "DownloadTitle",
      "totalPages",
      "currentPage"
    ])
  },
  methods: {
    ...mapMutations("scroll", [
      "setFun",
      "setUploadTitle",
      "setDownloadTitle",
      "setCurrentPage"
    ]),
    ...mapActions("scroll", ["getTopicData"])
  },
  created() {
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
      //如果小于总页数就发起请求
      if (this.currentPage < this.totalPages) {
        setTimeout(() => {
          this.setUploadTitle("上拉加载");
          try {
            this.pullingUp();
          } catch (error) {
            console.log(error);
          }
          this.scroll.finishPullUp();
        }, 2000);
      } else {
        this.setUploadTitle("暂无数据...");
      }
    });

    // this.scroll.on("pullingDown", () => {
    //   this.setDownloadTitle("正在刷新......");
    //   if (this.currentPage < this.totalPages) {
    //     setTimeout(() => {
    //       this.setDownloadTitle("刷新成功");
    //       this.pullingDown();
    //       this.scroll.finishPullDown();
    //     }, 2000);
    //   } else {
    //     this.setDownloadTitle("暂无数据...");
    //   }
    // });
  }
};
</script>
<style lang="scss">
.tabPageContent {
  width: 100%;
  height: 100%;
}
</style>
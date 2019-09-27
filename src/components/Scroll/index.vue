<template>
  <div class="tabPageContent" ref="tabPageContent">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {
    pullingUp: {
      type: Function,
      default: () => {}
    },
    pullingDown: {
      type: Function,
      default: () => {}
    },
    list: {
      xianzhi: {
        type: Number,
        default: 5
      }, //每次查询的数量 默认5
      query: {
        type: Object,
        default: {}
      }, //查询条件
      limit: {
        type: Number,
        default: 5
      }, //每次查询的数量 默认5
      refreshDispatch: {
        type: String,
        default: ""
      }, //触发请求的函数名
      value: {
        type: Array,
        default: []
      } //查询结果
    }
  },
  computed: {
    ...mapState("scroll", ["uploadTitle", "DownloadTitle", "count"])
  },
  methods: {
    ...mapMutations("scroll", [
      "setFun",
      "setUploadTitle",
      "setDownloadTitle",
    ]),
    ...mapActions("scroll", ["getTopicData"])
  },
  watch: {
    deep: true,
    list(oldvalue) {
      this.setFun(oldvalue.refreshDispatch);
      this.getTopicData(oldvalue.query);
    }
  },
  created() {},
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
      if (this.list.xianzhi < this.count) {
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

    this.scroll.on("pullingDown", () => {
      this.setDownloadTitle("正在刷新......");
      if (this.list.xianzhi < this.count) {
        setTimeout(() => {
          this.setDownloadTitle("刷新成功");
          try {
            this.pullingDown();
          } catch (error) {
            console.log(error);
          }
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
  position: relative;
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
<template>
  <div class="box">
    <div class="main" ref="main">
      <div class="tabPageContent" ref="tabPageContent">
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
      </div>
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
      size: 5,
      uploadTitle: "上拉加载",
      DownloadTitle:"下拉刷新"
    };
  },
  computed: {
    ...mapState("topic", ["TopicData", "totalPages"])
  },
  methods: {
    ...mapActions("topic", ["getTopicData"]),
    ...mapMutations("topic", ["setCurrentPage"])
  },
  created() {
    !this.TopicData.length && this.getTopicData({params:{ page: this.page,type: "" }});
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
      this.uploadTitle = "正在加载......";

      if (this.page < this.totalPages) {
        setTimeout(() => {
          this.uploadTitle = "上拉加载";
          this.page = this.page + 1;
          this.setCurrentPage(this.page);
          this.getTopicData({params:{ page: this.page, type: "pullingUp" }});

          this.scroll.finishPullUp();
        }, 2000);
      } else {
        this.uploadTitle = "暂无数据...";
      }
    });
    this.scroll.on("pullingDown", () => {
      this.DownloadTitle = "正在刷新......";

      if (this.page < this.totalPages) {
        setTimeout(() => {
          this.DownloadTitle = "刷新成功";
          this.page = this.page + 1;
          this.setCurrentPage(this.page);
          this.getTopicData({params:{ page: this.page, type: "pullingDown" }});

          this.scroll.finishPullDown();
        }, 2000);
      } else {
        this.DownloadTitle = "暂无数据...";
      }
    });
  }
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
  // overflow: auto;
  overflow: hidden;
}
.tabPageContent {
  width: 100%;
  height: 100%;
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
.download{
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
  margin-top: .44rem;
}
</style>
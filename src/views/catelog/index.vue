<template>
  <div class="box">
    <div class="main">
      <div class="tabPageContent">
        <a class="topicItem" v-for="(list,index) in topicData" :key="index">
          <img :src="list.scene_pic_url" />
          <div :style="{'margin-top':'0.05rem'}">{{list.title}}</div>
          <div :style="{color:'gray'}">{{list.subtitle}}</div>
          <div :style="{color:'red','margin-bottom':'0.05rem'}">{{list.price_info}}元起</div>
        </a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("catelog", ["topicData"])
  },
  methods: {
    ...mapActions("catelog", ["getCatelogDate"])
  },
  created() {},
  mounted() {
    //获取数据
    this.getCatelogDate({ params: { page: 1, size: 100 } });
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
  overflow: auto;
}
.tabPageContent {
  width: 100%;
  height: 100%;
}
.topicItem {
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
.footer {
  width: 100%;
  height: 0.45rem;
  display: flex;

  a {
    flex: 1;
    line-height: 0.45rem;
    text-align: center;
  }
  .router-link-active {
    color: skyblue;
  }
}
</style>
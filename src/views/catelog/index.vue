<template>
  <div class="box">
    <div class="main">
      <div class="tabPageContent" v-for="(list,index) in topicData" :key="index">
        <a class="topicItem">
          <img :src="list.scene_pic_url" alt="">
          {{list.title}}
          {{list.subtitle}}
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
    this.getCatelogDate();
  }
};
</script>
<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.main {
  flex: 1;
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
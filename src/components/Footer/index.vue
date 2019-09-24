<template>
  <div class="footer">
    <router-link v-for="(item,index) in footer" :to="item.path" :key="index" class="foot-item">
      <i :class="item.name"></i>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>
<script>
import "../../static/font/iconfont"
export default {
  name: "Footer",
  props: {},
  components: {},
  data() {
    return {
      footer: [
        {
          title: "首页",
          path: "/home",
          name: "iconfont icon-home"
        },
        {
          title: "专题",
          path: "/catelog",
          name: "iconfont icon-zhuanti"
        },
        {
          title: "分类",
          path: "/topic",
          name: "iconfont icon-classify"
        },
        {
          title: "购物车",
          path: "/cart",
          name: "iconfont icon-gouwuche"
        },
        {
          title: "我的",
          path: "/mine",
          name: "iconfont icon-mine"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
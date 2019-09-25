<template>
  <div class="footer">
    <router-link v-for="(item,index) in footer" :to="item.path" :key="index" class="foot-item">
      <i :class="item.name"></i>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>
<script>
import "../../static/font/iconfont";
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
          path: "/topic",
          name: "iconfont icon-zhuanti"
        },
        {
          title: "分类",
          path: "/catelog",
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
.footer {
  width: 100%;
  height: 0.5rem;
  display: flex;
  background-color: #fff;
  .router-link-active span,
  .router-link-active i {
    color: #2196f3 !important;
  }
  i {
    width: 16px;
    height: 16px;
  }
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 16px;
    height: 16px;
  }
  span {
    font-size: 0.12rem;
    margin-top: 0.05rem;
  }
}
</style>
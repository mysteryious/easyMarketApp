<template>
  <div class="footer">
    <router-link v-for="(item,index) in footer" :to="item.path" :key="index">{{item.title}}</router-link>
  </div>
</template>
<script>

export default {
  props: {},
  components: {},
  data() {
    return {
        footer: [
        {
          title: "首页",
          path: "/home"
        },
        {
          title: "专题",
          path: "/catelog"
        },
        {
          title: "分类",
          path: "/topic"
        },
        {
          title: "购物车",
          path: "/cart"
        },
        {
          title: "我的",
          path: "/mine"
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
  height: 35px;
  display: flex;

  a {
    flex: 1;
    line-height: 35px;
    text-align: center;
  }
  .router-link-active {
    color: red;
  }
}
</style>
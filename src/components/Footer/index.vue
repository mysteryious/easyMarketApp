<template>
  <div class="footer">
    <router-link v-for="(item,index) in footer" :to="item.path" :key="index">{{item.title}}</router-link>
  </div>
</template>
<script>

export default {
  name:"Footer",
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
  height: .5rem;
  display: flex;
  box-shadow:0 0 10px #ccc ;
}
</style>
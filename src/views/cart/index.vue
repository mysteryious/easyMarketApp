<template>
  <div class="box">
    <div class="main">购物车</div>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  font-size:14px;
}
.main {
  flex: 1;
}
.footer {
  width: 100%;
  height:0.45rem;
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
<template>
  <div class="wrap">
    <div class="main">首页</div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/Footer/index.vue";
export default {
  props: {},
  components: {Footer},
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
.wrap {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
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
    color: skyblue;
  }
}
</style>
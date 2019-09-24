<template>
  <div class="box">
    <div class="main">我的</div>
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
</style>
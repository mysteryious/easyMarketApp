<template>
  <header class="header">
    <b @click="replace">&lt;</b>
    <span>{{title}}</span>
    <div></div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  methods: {
    replace() {
      this.$router.history.go(-1);
    }
  }
};
</script>
<style lang="scss">
@mixin juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin juzuo {
  display: flex;
  justify-content: left;
  align-items: center;
}
@mixin juyou {
  display: flex;
  justify-content: right;
  align-items: center;
}

.header {
  height: 0.5rem;
  background: #fff;
  @include juzhong;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: .16rem;
  b {
    flex: 1;
    font-size: 17px;
    @include juzhong;
  }
  span {
    flex: 8;
    @include juzhong;
  }
  div {
    flex: 1;
  }
}
</style>
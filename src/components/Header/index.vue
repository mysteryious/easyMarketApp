<template>
  <header class="header">
    <b @click="replace">&lt;</b>
    <div></div>
    <span>{{title}}</span>
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
  b {
    flex: 1;
    font-size: 17px;
    @include juzhong;
  }
  div {
    flex: 5;
  }
  span {
    flex: 8;
    @include juzuo;
  }
}
</style>
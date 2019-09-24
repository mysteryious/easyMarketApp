<template>
  <div class="wrap">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  color:#000;
  outline: none;
}
html{
  font-size: calc(100/375*100vw);
}
img{
  width: 100%;
  height: 100%;
}
html,
body,
#app,
.wrap,.box {
  width: 100%;
  height: 100%;
}
</style>
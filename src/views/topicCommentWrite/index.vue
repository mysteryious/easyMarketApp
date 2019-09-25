<template>
  <div class="App">
    <Header title="填写留言"></Header>
    <div class="textAreaContent" maxlength="80">
      <textarea class="inputArea"></textarea>
    </div>
    <div class="buttons">
      <div>清空</div>
      <div>留言</div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("topic", ["postSetComment"])
  },
  mounted() {
    //获取数据
    this.postSetComment({ params: { page: 1, size: 100 } }).then(res => {
      this.topicData = res.data;
    });
  }
};
</script>
<style scoped>
@import "./index.scss"
</style>
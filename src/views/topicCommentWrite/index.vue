<template>
  <div class="App">
    <Header title="填写留言"></Header>
    <div class="textAreaContent" maxlength="80">
      <textarea class="inputArea" v-model="content"></textarea>
    </div>
    <div class="btns">
      <div v-if="content.length" class="am-button">
        <a href>{{button}}</a>
      </div>
      <div v-else @click="remove"></div>
      <div class="am-button-primary" @click="addComment">
        <a :href="'/topicDetail/'+ this.$route.params.id">留言</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      content: "",
      button: ""
    };
  },
  computed: {},
  watch: {
    content(newValue) {
      if (newValue.length) {
        this.button = "清空";
      } else {
        this.button = "";
      }
    }
  },
  methods: {
    ...mapActions("topic", ["postSetComment"]),
    addComment() {
      this.postSetComment({
        content: this.content,
        typeId: 1,
        valueId: this.$route.params.id
      }).then(res => {
        console.log(res);
      });
    },
    remove() {
      this.content = "";
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
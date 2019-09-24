<template>
  <div class="tab">
    <div  v-for="list in categoryList" :key="list.id" :class="ind==list.id ? 'tab-item active' : 'tab-item'">
      <li @click="chengIndex(list.id)">{{list.name}}</li>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tab",
  props: {
    categoryList: Array,
    chengIndex:Function,
    ind:Number
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss">
// @import "./index.scss";
</style>
<template>
    <div class="topic">
        <header class="header">
            <input type="text" placeholder="搜索商品，共239款好物">
        </header>
        <main class="main">
            <Tab></Tab>
            <div class="right">thid id right</div>
        </main>
        <Footer></Footer>
    </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("catelog", ["topicData"])
  },
  methods: {
    ...mapActions("catelog", ["getCatelogDate"])
  },
  created() {},
  mounted() {
    //获取数据
    this.getCatelogDate({ params: { page: 1, size: 100 } });
  }
};
</script>
<style lang="scss">
@import "./index.scss";
a {
  text-decoration: none;
  outline: none;
}
.box {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.main {
  flex: 1;
  overflow: auto;
}
.tabPageContent {
  width: 100%;
  height: 100%;
}
.topicItem {
  height: 3rem;
  img {
    width: 100%;
    height: 2rem;
  }
  div {
    font-size: 0.14rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 0.3rem;
    line-height: 0.3rem;
  }
}
.footer {
  width: 100%;
  height: .5rem;
  display: flex;

  a {
    flex: 1;
    line-height: .5rem;
    text-align: center;
  }
  .router-link-active {
    color: skyblue;
  }
}


</style>
<template>
  <div class="topic">
    <header class="header">
      <input type="text" placeholder="搜索商品，共239款好物" />
    </header>
    <main class="main">
      <Tab :categoryList="categoryList" :ind="ind" :chengIndex="chengIndex"></Tab>
      <div class="categogContet">
        <!-- 导航图片 -->
        <div
          class="categoryWrap"
          :style="{backgroundImage: 'url(' + currentCategory.wap_banner_url + ')', backgroundSize:'contain',backgroundRepeat:'no-repeat'}"
        >{{currentCategory.front_name }}</div>
        <!-- 标题 -->
        <div class="categoryTitle">
          <i></i>
          {{currentCategory.name}}分类
          <i></i>
        </div>
        <!-- 列表 -->
        <div class="subCategory">
          <a class="subCategoryItem" v-for="list in currentCategory.subCategoryList" :key="list.id">
            <img :src="list.wap_banner_url" alt />
            <div class="subCategoryItemName">{{list.name}}</div>
          </a>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {
      categoryList: [],
      currentCategory: {},
      ind: 1005000
    };
  },
  computed: {},
  methods: {
    ...mapActions("catelog", ["getCatalogInitData", "getCatalogMsg"]),
    chengIndex(index) {
      this.ind=index;
      this.getCatalogMsg({ params: { id: index } }).then(res => {
        this.currentCategory = res.currentCategory;
      });
    }
  },
  created() {},
  mounted() {
    //获取数据
    this.getCatalogInitData().then(res => {
      this.categoryList = res.categoryList;
      this.currentCategory = res.currentCategory;
    });
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
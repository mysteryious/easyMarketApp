<template>
  <div class="noTabPageContent">
    <Header title="奇趣分类"></Header>
    <!-- tab -->
    <div class="tabWrap">
      <div class="am-tabs">
        <span
          :class="contID == item.id?'active am-tabs-tab-bar-wrap':'am-tabs-tab-bar-wrap'"
          v-for="(item,index) in CatalogInitData"
          :key="item.id"
          @click="tabClick(item.id,index)"
        >{{item.name}}</span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="categoryBox">
      <!-- 列表标题 -->
      <div class="categoryDetail">
        <div class="boss" v-for="(item) in CatalogInitData" :key="item.id">
          <div v-if="item.id ==contID">{{item.name}}</div>
          <div v-if="item.id ==contID">{{item.front_name}}</div>
        </div>
      </div>

        <div class="goodsList">
          <a href class="goodsItem" v-for="(item) in goodsList" :key="item.id">
            <GoodsList :GoodsItem="item"></GoodsList>
          </a>
        </div>

    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import GoodsList from "../../components/goodsList/index.vue";
export default {
  props: {},
  components: {},
  data() {
    return {
      CatalogInitData: [],
      goodsList: [],
      contID: 0,
      ind: 0
    };
  },
  computed: {},
  methods: {
    ...mapActions("categorys", ["getCatalogInitData", "getGoodsList"]),
    //tab切换数据
    tabClick(id, index) {
      this.contID = id;
      this.ind = index;
      this.getGoodsList({
        params: { categoryId: id, page: 1, size: 1000 }
      }).then(res => {
        this.goodsList = res.data;
      });
    },
    //点击返回上个页面
    GoTo() {
      this.$router.history.go(-1);
    }
  },
  created() {},
  mounted() {
    let id = this.$route.params.id;
    this.contID = id;
    this.getCatalogInitData({ params: id }).then(res => {
      this.CatalogInitData = res.categoryList;
    });
    this.getGoodsList({ params: { categoryId: id, page: 1, size: 1000 } }).then(
      res => {
        this.goodsList = res.data;
      }
    );
  }
};
</script>  
<style lang="scss">
@import "./index.scss";
</style>


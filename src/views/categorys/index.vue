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
    
      <Scroll :pullingUp="pullingUp" :pullingDown="pullingDown" :list="list">
        <div class="goods">
          <div class="download">{{DownloadTitle}}</div>
          <!-- 列表标题 -->
          <div class="categoryDetail">
            <div class="boss" v-for="(item) in CatalogInitData" :key="item.id">
              <div v-if="item.id ==contID">{{item.name}}</div>
              <div v-if="item.id ==contID">{{item.front_name}}</div>
            </div>
          </div>
          <div class="goodsList">
            <a
              class="goodsItem"
              v-for="(item) in TopicData"
              :key="item.id"
              :href="'/goods/'+item.id"
            >
              <GoodsList :GoodsItem="item"></GoodsList>
            </a>
          </div>
          <div class="upload">{{uploadTitle}}</div>
        </div>
      </Scroll>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";
import GoodsList from "../../components/goodsList/index.vue";
export default {
  props: {},
  components: {},
  data() {
    return {
      CatalogInitData: [],
      goodsList: [],
      contID: 0,
      ind: 0,
      list: {
        query: {}, //查询条件
        page: 1,
        limit: 5, //每次查询的数量 默认5
        count: "", //最后一次查询结果返回的长度 用来控制loadMore的显示与否
        xianzhi: 5,
        refreshDispatch: "" //要发起请求的函数名 http请求
      }
    };
  },
  computed: {
    ...mapState("scroll", [
      "uploadTitle",
      "DownloadTitle",
      "TopicData",
      "currentPage"
    ])
  },
  methods: {
    ...mapActions("categorys", ["getCatalogInitData", "getGoodsList"]),
    //tab切换数据
    tabClick(id, index) {
      this.contID = id;
      this.ind = index;

      this.list.page = 1;
      this.list.xianzhi = 5;
      this.getTopicData({
        params: { categoryId: id, page: 1, size: 5 }
      });
    },
    //点击返回上个页面
    GoTo() {
      this.$router.history.go(-1);
    },
    ...mapMutations("scroll", ["setFun"]),
    ...mapActions("scroll", ["getTopicData"]),
    //上拉加载的函数
    pullingUp() {
      this.list.page = this.list.page + 1;
      this.list.xianzhi = this.list.page * this.list.limit;

      this.list = {
        query: {
          params: {
            page: this.list.page,
            size: 5,
            type: "pullingUp",
            categoryId: this.contID
          }
        }, //查询条件
        limit: 5, //每次查询的数量 默认5
        page: this.list.page,
        xianzhi: this.list.xianzhi,
        refreshDispatch: "getGoodsList"
      };
    },
    //下拉刷新的函数
    pullingDown() {
      this.list.page = this.list.page + 1;
      this.list.xianzhi = this.list.page * this.list.limit;

      this.list = {
        query: {
          params: {
            page: this.list.page,
            size: 5,
            type: "pullingDown",
            categoryId: this.contID
          }
        }, //查询条件
        limit: 5, //每次查询的数量 默认5
        page: this.list.page,
        xianzhi: this.list.xianzhi,
        refreshDispatch: "getGoodsList"
      };
    }
  },
  created() {
    let id = this.$route.params.id;
    this.contID = id;
    this.getCatalogInitData({ params: id }).then(res => {
      this.CatalogInitData = res.categoryList;
    });

    this.setFun("getGoodsList");
    !this.TopicData.length &&
      this.getTopicData({
        params: { categoryId: id, page: 1, size: 5, type: "" }
      });
  },
  mounted() {}
};
</script>  
<style lang="scss">
@import "./index.scss";
.upload {
  margin: 0;
}
</style>


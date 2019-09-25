<template>
  <div class="noTabPageContent">
    <div class="header">
      <div class="left" @click="GoTo"><</div>
      <div class="title">奇趣分类</div>
      <div class="right"></div>
    </div>
    <div class="tabWrap">
      <div class="am-tabs">
        <div
          :class="contID == item.id?'active am-tabs-tab-bar-wrap':'am-tabs-tab-bar-wrap'"
          v-for="(item,index) in CatalogInitData"
          :key="item.id"
          @click="tabClick(item.id,index)"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="categoryBox">
      <div class="categoryDetail">
        <div class="boss" v-for="(item) in CatalogInitData" :key="item.id">
          <div v-if="item.id ==contID">{{item.name}}</div>
          <div v-if="item.id ==contID">{{item.front_name}}</div>
        </div>
        
      </div>
      <div class="goodsList"> 
        <a href="" class="goodsItem" v-for="(item) in goodsList" :key="item.id" >
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
      goodsList:[],
      contID:0,
      ind:0
    };
  },
  computed: {},
  methods: {
    ...mapActions("categorys", ["getCatalogInitData","getGoodsList"]),
    //tab切换数据
    tabClick(id,index){
      this.contID = id;
      this.ind = index
      this.getGoodsList({params:{categoryId:id,page:1,size:1000}}).then(res=>{
        this.goodsList = res.data
      })
    },
    //点击返回上个页面
    GoTo(){
      this.$router.history.go(-1)
    }
  },
  created() {},
  mounted() {
    let id = this.$route.params.id;
    this.contID = id
    this.getCatalogInitData({ params: id }).then(res => {
      this.CatalogInitData = res.categoryList;
    });
    this.getGoodsList({params:{categoryId:id,page:1,size:1000}}).then(res=>{
      this.goodsList = res.data
    })
    
  }
};
</script>  
<style lang="scss">
.noTabPageContent {
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 0.5rem;
    background: white;
    box-shadow: 0 0.02rem 0.08rem 0 rgba(0, 0, 0, 0.12),
      0 0 6px 0 rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .left {
      width: 0.3rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      flex: 1;
      font-size: 0.16rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      width: 0.3rem;
    }
  }
  .tabWrap {
    width: 100%;
    height: auto;
    z-index: 10;
    .am-tabs {
      box-sizing: border-box;
      display: flex;
      position: relative;
      overflow: scroll;
      height: 100%;
      width: 100%;

      flex-wrap: nowrap;
      .am-tabs-tab-bar-wrap {
        padding: 0.1rem 0.2rem;
        flex-shrink: 0;
      }
    }
  }
  .categoryBox {
    flex: 1;
    overflow: auto;

    .categoryDetail {
      padding: 0.1rem 0;
      .boss{
        width: 100%;
        height: 100%;
        > div {
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
      }
      > div:nth-child(2) {
        color: gray;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.14rem;
      }
      }
      
    }
    .goodsList{
      width: auto;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      .goodsItem{
        width: 50%;
        height: auto;
        background: white;
        padding: .1rem;
        position: relative;
      }
    }
  }
}
.active{
  color: skyblue;
}
</style>
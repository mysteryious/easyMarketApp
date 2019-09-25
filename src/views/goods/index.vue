<template>
  <div class="noTabPageContent">
    <div class="header">
      <Header title="{你是}"></Header>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">轮播图</div>

    <ul class="serviceList">
      <li>
        <span>★</span>30天无忧退货
      </li>
      <li>
        <span>★</span>48小时快速退款
      </li>
      <li>
        <span>★</span>满88元免邮费
      </li>
    </ul>

    <div class="goodsMsgWrap">
      <div class="goodsNameTitle">{{info.name}}</div>
      <div class="goodsNameSubTitle">{{info.goods_brief}}</div>
      <div class="goodsPriceTitle">￥{{info.retail_price}}</div>
    </div>

    <div class="goodsPageDo">
      <div class="isLike like">★</div>
      <div class="cartNum">
        <i class="iconfont icon-Add-Cart">
          <span>0</span>
        </i>
      </div>
      <div class="addCart">加入购物车</div>
      <div class="payGoods">立即购买</div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      GoodsData: {},
      info: {}
    };
  },
  computed: {},
  methods: {
    ...mapActions("goods", ["getGoodsDetail"])
  },
  created() {},
  mounted() {
    let id = this.$route.params.id;
    this.getGoodsDetail({ params: { id: id } }).then(res => {
      console.log(res);
      this.info = res.info;
      //   this.GoodsData = res
    });
  }
};
</script>
<style lang="scss">
.noTabPageContent {
  font-size: 0.14rem;
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .goodsPageDo {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.49rem;
    background: white;
    box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    .like {
      width: 20%;
      height: 100%;
      color: gold;
      border-right: 1px solid ghostwhite;
      line-height: 0.49rem;
      font-size: 0.3rem;
      text-align: center;
      font-weight: bolder;
    }
    .cartNum {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2196f3;
    }
    .addCart,
    .payGoods {
      width: 30%;
      height: 100%;
      line-height: 0.49rem;
      text-align: center;
      font-size: 0.15rem;
      color: white;
    }
    .addCart {
      background: linear-gradient(90deg, #ff9500, #ff5e3a);
    }
    .payGoods {
      background: linear-gradient(90deg, #1d62f0, #19d5fd);
    }
  }

  .swiper {
    width: 100%;
    height: 3.5rem;
    background: red;
    color: #fff;
    box-sizing: border-box;
    margin-top: 0.5rem;
  }

  .serviceList {
    height: 0.4rem;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      color: #666;
      font-size: 0.12rem;
      text-align: center;
      span {
        color: red;
        margin-right: 0.075rem;
        font-size: 0.15rem;
      }
    }
  }

  .goodsMsgWrap {
    padding: 0.2rem;
    background: white;
    .goodsNameTitle {
      font-size: 0.2rem;
      text-align: center;
      padding-bottom: 0.1rem;
    }
    .goodsNameSubTitle {
      font-size: 0.15rem;
      color: #444;
      text-align: center;
      padding-bottom: 0.05rem;
    }
    .goodsPriceTitle {
      font-size: 0.2rem;
      color: red;
      text-align: center;
      line-height: 0.5rem;
    }
  }
}
// p{
//     padding: 0;
//     margin: 0;
//     img{
//         width: 100%;
//         height: auto;
//         display: block;
//     }
//   }
</style>
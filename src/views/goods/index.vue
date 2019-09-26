<template>
  <div class="noTabPageContent">
    <div class="header">
      <Header :title="info.name"></Header>
    </div>
    <!-- 轮播图 -->
    
      <Swiper :bannerData="gallery"></Swiper>
    

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

    <div class="goodsSize">
      <div></div>
      <div>x&nbsp;{{comment.count}}</div>
      <div>选择规格></div>
    </div>

    <div class="goodsAttribute">
      <div class="goodsAttributeLine">—&nbsp;商品参数&nbsp;—</div>
      <div class="goodsAttributeList">
        <div class="goodsAttributeItem" v-for="(item) in attribute" :key="item.id">
          <div class="attributeLabel">{{item.name}}</div>
          <div class="attributeContent">{{item.value}}</div>
        </div>
      </div>
    </div>

    <div class="topicDetailImg" v-html="info.goods_desc"></div>

    <div class="goodsAttribute">
      <div class="goodsAttributeLine">—&nbsp;常见问题&nbsp;—</div>
      <div class="problemWrap" v-for="(item) in issue" :key="item.id">
        <div class="problemLabel">
          <span>√</span>
          {{item.question}}
        </div>
        <div class="problemContent">{{item.answer}}</div>
      </div>
    </div>
    <div class="goodsAttribute">
      <div class="goodsAttributeLine">—&nbsp;大家都在看&nbsp;—</div>
    </div>
    
    <div class="goodsList">
      <a  class="goodsItem" v-for="(item) in goodsList" :key="item.id" :href="item.id">
        <GoodsList :GoodsItem="item"></GoodsList>
      </a>
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
      info: {},
      comment: {},
      attribute: [],
      issue: [],
      goodsList: [],
      gallery:[]
    };
  },
  computed: {},
  methods: {
    ...mapActions("goods", ["getGoodsDetail", "getGoodsRelated"])
  },
  created() {},
  mounted() {
    let id = this.$route.params.id;
    this.getGoodsDetail({ params: { id: id } }).then(res => {
      console.log(res);
      this.info = res.info;
      this.comment = res.comment;
      this.attribute = res.attribute;
      this.issue = res.issue;
      this.gallery = res.gallery
    });
    this.getGoodsRelated({ params: { id: id } }).then(res => {
      console.log(res);
      this.goodsList = res.goodsList;
    });
  }
};
</script>
<style lang="scss">
.noTabPageContent {
  font-size: 0.14rem;
  width: 100%;
  min-height: 100%;
  padding-bottom: .5rem;
  padding-top: 0.52rem;
  background: #f4f4f4;
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
      span{
        color: red;
        font-weight: 800;
      }
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
  .swiper-container{
    // height: auto;
    min-height: 3.5rem;
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
      padding-bottom: 0.05rem;
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

  .goodsSize {
    margin-top: 0.01rem;
    height: 0.5rem;
    padding: 0 0.2rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div:nth-child(1) {
      flex: 1;
      text-align: left;
      color: #2196f3;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    div:nth-child(3) {
      width: auto;
      padding: 0 0.05rem;
      text-align: right;
    }
    div:nth-child(2) {
      color: red;
      font-weight: bolder;
      width: auto;
      padding: 0 0.05rem;
      text-align: right;
    }
  }
  .goodsAttribute {
    margin-top: 0.1rem;
    padding: 0.2rem;
    background: white;
    .goodsAttributeLine {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2196f3;
      padding: 0.05rem 0;
    }
    .goodsAttributeList .goodsAttributeItem {
      display: flex;
      align-items: center;
      line-height: 0.4rem;
      background: #dcdfe6;
      margin-top: 0.05rem;
      .attributeLabel {
        width: 1rem;
        color: gray;
        padding: 0 0.05rem;
        font-size: 0.16rem;
        text-align: center;
      }
      .attributeContent {
        flex: 1;
        font-size: 0.15rem;
        line-height: 0.3rem;
        padding: 0 0.05rem;
      }
    }
  }
  .topicDetailImg {
    p {
      padding: 0;
      margin: 0;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }

  .problemWrap {
    margin-bottom: 0.1rem;
    .problemLabel {
      font-size: 0.16rem;
      line-height: 0.3rem;
      span {
        color: red;
        margin-right: 0.05rem;
      }
    }
    .problemContent {
      font-size: 0.15rem;
      line-height: 0.25rem;
      color: gray;
    }
  }
  .goodsAttributeLine {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2196f3;
    padding: 0.05rem 0;
  }
  .goodsList {
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    .goodsItem {
      width: 50%;
      height: auto;
      background: white;
      padding: 0.1rem;
      position: relative;
      
    }
  }
}
</style>
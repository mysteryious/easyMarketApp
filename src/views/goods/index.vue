<template>
  <div class="noTabPageContent">
    <div class="header">
      <Header :title="info.name"></Header>
    </div>
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
      <div @click="openmask(true)">选择规格></div>
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
      <a class="goodsItem" v-for="(item) in goodsList" :key="item.id" :href="item.id">
        <GoodsList :GoodsItem="item"></GoodsList>
      </a>
    </div>
    <div class="goodsPageDo">
      <div class="isLike like">★</div>
      <div class="cartNum">
        <i class="iconfont icon-gouwuche">
          <span>0</span>
        </i>
      </div>
      <div class="addCart">加入购物车</div>
      <div class="payGoods">立即购买</div>
    </div>
    <div v-if="flag" class="am-modal-mask"></div>
    <div v-if="flag" class="am-modal-wrap am-modal-wrap-popup" @click="openmask(false)">
      <div class="am-modal am-modal-popup am-modal-popup-slide-up">
        <div class="am-modal-content">
          <div class="am-modal-body">
            <div class="goodsSizeDo">
              <div class="goodsSizeSetMsg">
                <img :src="info.primary_pic_url" alt />
                <div class="gooodsSizePriceAndSize">
                  <div>
                    单价:
                    <span>￥{{info.retail_price}}</span>
                  </div>
                  <div>
                    库存:
                    <span>{{info.goods_number}}{{info.goods_unit}}</span>
                  </div>
                  <div>
                    已选择:
                    <br />
                  </div>
                </div>
                <div class="closeModel" @click="openmask(false)">X</div>
              </div>
              <div class="goodsSizeWrap">
                <div class="goodsSizeItem">
                  <div class="goodsSizeItemName">数量</div>
                  <div class="goodsSizeListWrap">
                    <div class="goodsBuyCount">
                      <div class="onePx_border">-</div>
                      <div class="onePx_border">0</div>
                      <div class="onePx_border">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="goodsDoWrap">
              <div>加入购物车</div>
              <div>立即下单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../static/font/iconfont";
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
      gallery: [],
      flag: false
    };
  },
  computed: {},
  methods: {
    ...mapActions("goods", ["getGoodsDetail", "getGoodsRelated"]),
    openmask(open) {
      this.flag = open;
    }
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
      this.gallery = res.gallery;
    });
    this.getGoodsRelated({ params: { id: id } }).then(res => {
      console.log(res);
      this.goodsList = res.goodsList;
    });
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
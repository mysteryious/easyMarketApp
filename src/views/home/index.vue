<template>
  <div class="box">
    <div class="main">
      <div class="container">
        <Swiper :bannerData="HomeData.banner"></Swiper>
      </div>
      
      <div class="channelWrap">
        <a v-for="(item,index) in HomeData.channel" :key="index" :href="'/categorys/'+item.id">
          <img v-lazy="item.icon_url" alt />
          <div>{{item.name}}</div>
        </a>
      </div>
      <!-- 品牌制造商直供 -->
      <ListEl :brandBox="HomeData"></ListEl>
      <!-- 新品首发 -->
      <div class="newGoodsBox">
        <div class="newGoodsTitle">新品首发</div>
        <div class="newGoodsWrap">
          <a
            class="newGoodsItem"
            v-for="(item,index) in HomeData.newGoodsList"
            :key="index"
            :href="'goods/'+item.id"
          >
            <img class="imgLazyload loadEnd" v-lazy="item.list_pic_url" alt />
            <div class="newGoodsName">{{item.name}}</div>
            <div class="newGoodsPrice">￥{{item.retail_price}}</div>
          </a>
        </div>
      </div>
      <!-- 人气推荐 -->
      <div class="hotGoodsBox">
        <div class="hotGoodsTitle">人气推荐</div>
        <div class="hotGoodsWrap">
          <a class="hotGoodsItem" v-for="(item,index) in HomeData.hotGoodsList" :key="index" :href="'goods/'+item.id">
            <img class="imgLazyload loadEnd" v-lazy="item.list_pic_url" alt />
            <div class="hotGoodsInfos">
              <div class="hotGoodsName">{{item.name}}</div>
              <div class="hotGoodsInfo">{{item.goods_brief}}</div>
              <div class="hotGoodsPrice">￥{{item.retail_price}}</div>
            </div>
          </a>
        </div>
      </div>
      <!-- 专题精选 -->
      <div class="topGoodsBox">
        <div class="topGoodsTitle">专题精选</div>
        <div class="topGoodsWrap">
          <swiper class="slider" :options="swiperOption">
            <swiper-slide
              class="slide-list"
              v-for="(item,index) in HomeData.topicList"
              :key="index"
            >
              <img v-lazy="item.scene_pic_url" />
              <div class="topGoodSubTitle">
                {{item.title}}
                <span class="topGoodPrice">￥{{item.price_info}}元起</span>
              </div>
              <div class="topGoodTitle">{{item.subtitle}}</div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- cateGoryBox -->
      <CateGoryBox :cateGoryData="HomeData.categoryList"></CateGoryBox>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Swiper from "../../components/swiper/index.vue";
import CateGoryBox from "../../components/cateGoryBox/index.vue";
import { mapActions, mapState } from "vuex";
import { getHomeData } from "../../store/home/index";
import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {},
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        //自动播放
        autoPlay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 1000,
        direction: "horizontal",
        grabCursor: true
      }
    };
  },
  components: {  
    Swiper,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState("home", ["HomeData"])
  },
  methods: {
    ...mapActions("home", ["getHomeData"])
  },
  created() {},
  mounted() {
    this.getHomeData();
  }
};
</script>
<style lang="scss">
@import "./index.scss"
</style>
<template>
  <div class="box">
    <div class="main">
      <Swiper :bannerData="HomeData.banner"></Swiper>
      <div class="channelWrap">
        <a  
        v-for="(item,index) in HomeData.channel" 
        :key="index"
        :href="'/categorys/'+item.id"
        >
          <img :src="item.icon_url" alt="">
          <div>{{item.name}}</div>
        </a>
      </div>
      <!-- 品牌制造商直供 -->
      <ListEl :brandBox="HomeData"></ListEl>
      <!-- 新品首发 -->
      <div class="newGoodsBox">
        <div class="newGoodsTitle">新品首发</div>
        <div class="newGoodsWrap">
          <a class="newGoodsItem" v-for="(item,index) in HomeData.newGoodsList" :key="index" :href="'goods/'+item.id">
            <img class="imgLazyload loadEnd" :src="item.list_pic_url" alt />
            <div class="newGoodsName">{{item.name}}</div>
            <div class="newGoodsPrice">￥{{item.retail_price}}</div>
          </a>
        </div>
      </div>
      <!-- 人气推荐 -->
      <div class="hotGoodsBox">
        <div class="hotGoodsTitle">人气推荐</div>
        <div class="hotGoodsWrap">
          <a class="hotGoodsItem" v-for="(item,index) in HomeData.hotGoodsList" :key="index">
            <img class="imgLazyload loadEnd" :src="item.list_pic_url" alt />
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
              <img :src="item.scene_pic_url" />
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
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Swiper from "../../components/swiper/index.vue";
import CateGoryBox from '../../components/cateGoryBox/index.vue'
import { mapActions, mapState } from "vuex";
import { getHomeData } from "../../store/home/index";
import "../../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
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
    this.getHomeData().then(res=>{
      console.log(res)
    });

  }
};
</script>
<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.main {
  flex: 1;
  background: #eee;
  overflow: auto;
  .channelWrap {
    width: 100%;
    height: 0.7rem;
    display: flex;
    background: #fff;
    padding: 0.05rem 0;
    a{
      width: 20%;
      height: 100%;
      img{
        height: 80%;
        width: .48rem;
        display: block;
        padding: .1rem;
        margin: auto;
        opacity: 1;
        transition: all 1s;
      }
      div{
        height: 20%;
        font-size: .12rem;
        text-align: center;
      }
    }
  }
}
.footer {
  width: 100%;
  height: 0.5rem;
  display: flex;

  a {
    flex: 1;
    line-height: 0.5rem;
    text-align: center;
  }
  .router-link-active {
    color: skyblue;
  }
}
.brandTitle,
.newGoodsTitle,
.hotGoodsTitle,
.topGoodsTitle {
  height: 0.5rem;
  background: white;
  text-align: center;
  font-size: 0.15rem;
  line-height: 0.5rem;
  letter-spacing: 0.01rem;
  font-weight: bold;
}
.newGoodsBox {
  margin-top: 0.1rem;
  width: 100%;
  background: white;

  .newGoodsWrap {
    display: flex;
    flex-wrap: wrap;
    background: white;
    .newGoodsItem {
      width: 50%;
      height: 2rem;
      .imgLazyload.loadEnd {
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
      }
      img {
        width: 100%;
        height: 70%;
      }
    }
  }
}
.newGoodsName,
.newGoodsPrice {
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.15rem;
}
.newGoodsPrice {
  color: darkred;
}
.hotGoodsBox {
  margin-top: 0.1rem;
  background: white;
  .hotGoodsWrap {
    width: 100%;
    padding: 0 0.1rem;
    min-height: 200px;
    .hotGoodsItem {
      height: 1.5rem;
      position: relative;
      padding: 0.05rem 0;
      display: flex;
      img {
        width: auto;
        height: 100%;
      }
      .hotGoodsInfos {
        flex: 1 1;
        padding: 0.25rem 0;
        .hotGoodsName {
          height: 33.3333%;
          display: flex;
          align-items: center;
          font-size: 0.16rem;
        }
        .hotGoodsInfo {
          height: 33.3333%;
          display: flex;
          align-items: center;
          color: darkgray;
          font-size: 0.14rem;
        }
        .hotGoodsPrice {
          height: 33.3333%;
          display: flex;
          align-items: center;
          color: darkred;
          font-size: 0.15rem;
        }
      }
    }
  }
}
.topGoodsBox {
  margin-top: 0.1rem;
  background: white;
  .topGoodsWrap {
    height: auto;
    padding-bottom: 0.1rem;
    img {
      width: 100%;
      height: 2rem;
    }
    .topGoodSubTitle{
      font-size: .16rem;
    }
    .topGoodSubTitle,
    .topGoodTitle {
      margin-top: 0.05rem;
      height: 0.2rem;
      line-height: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .topGoodPrice {
        color: darkred;
      }
    }
    .topGoodTitle {
      font-size: .12rem;
      color: gray;
    }
  }
}

</style>
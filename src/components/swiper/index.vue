<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in bannerData" :key="index">
        <img v-if="item.image_url" v-lazy="item.image_url" alt />
        <img v-if="item.img_url" v-lazy="item.img_url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import  "swiper/dist/css/swiper.min.css"; //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["bannerData"],
  components: {
    swiperSlide,
    swiper
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoPlay: true,
        speed: 300,
        loop: true,
        loopedSlides:1
      }
    };
  },
  // computed: {
  //   swiperSlides() {
  //     return this.bannerData.banner;
  //   }
  // },
  methods: {},
  created() {},
  mounted() {
    
  }
};
</script>
<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #eee;
}
img {
  width: 100%;
  height: 100%;
}
</style>